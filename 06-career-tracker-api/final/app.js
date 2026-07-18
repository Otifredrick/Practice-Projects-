require('dotenv').config();
require('express-async-errors');

// extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

// Swagger
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');
// routers
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.get('/', (req, res) => {
  res.send(`<!doctype html><html><head><meta name="viewport" content="width=device-width"><title>Career Tracker API</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;font:16px system-ui;color:#e8edf7;background:#0c1322;background-image:radial-gradient(circle at 15% 10%,#245aa555,transparent 36%)}main{width:min(760px,86vw);padding:3rem;border:1px solid #ffffff18;border-radius:24px;background:#121c30cc;box-shadow:0 30px 90px #0006}span{color:#82a9ff;font-weight:700;text-transform:uppercase;letter-spacing:.13em;font-size:.72rem}h1{font-size:clamp(2.5rem,8vw,5rem);line-height:.95;letter-spacing:-.06em;margin:.8rem 0 1rem}p{max-width:580px;color:#aab6cc;line-height:1.7}a{display:inline-block;margin-top:1rem;padding:.8rem 1rem;border-radius:10px;color:#0c1322;background:#dce6ff;text-decoration:none;font-weight:700}</style></head><body><main><span>Authenticated REST practice</span><h1>Career Tracker API</h1><p>I create an account, authenticate with JWT, and manage my private job applications through a documented API.</p><a href="/api-docs">I open my Swagger documentation →</a></main></body></html>`);
});
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
