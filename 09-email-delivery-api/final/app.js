require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const sendEmail = require('./controllers/sendEmail');
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send(`<!doctype html><html><head><meta name="viewport" content="width=device-width"><title>Email Delivery API</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;font:16px system-ui;color:#2c2520;background:#f8f2e9}main{width:min(680px,86vw);padding:3rem;border:1px solid #eadbca;border-radius:24px;background:white;box-shadow:0 24px 70px #56331418}span{color:#bb551d;font-weight:700;text-transform:uppercase;letter-spacing:.13em;font-size:.72rem}h1{font-size:clamp(2.5rem,8vw,5rem);line-height:.95;letter-spacing:-.06em;margin:.8rem 0 1rem}p{color:#776a61;line-height:1.7}code{padding:.2rem .4rem;border-radius:5px;background:#f4ede5}</style></head><body><main><span>Transactional email practice</span><h1>Email Delivery API</h1><p>I connect Express to SendGrid and Ethereal test mail. I configure my provider values in <code>.env</code>, then call <code>GET /send</code> from my API client.</p></main></body></html>`);
});

app.get('/send', sendEmail);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
