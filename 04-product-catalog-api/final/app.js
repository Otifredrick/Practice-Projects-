require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());

// routes

app.get('/', (req, res) => {
  res.send(`<!doctype html><html><head><meta name="viewport" content="width=device-width"><title>Product Catalog API</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;font:16px system-ui;color:#183029;background:#eff5f1}main{width:min(720px,86vw);padding:3rem;border:1px solid #d7e2dc;border-radius:24px;background:white;box-shadow:0 24px 70px #17352a18}span{color:#087c63;font-weight:700;text-transform:uppercase;letter-spacing:.13em;font-size:.72rem}h1{font-size:clamp(2.5rem,8vw,5rem);line-height:.95;letter-spacing:-.06em;margin:.8rem 0 1rem}p{color:#60716b;line-height:1.7}a{display:inline-block;margin-top:1rem;padding:.8rem 1rem;border-radius:10px;color:white;background:#183029;text-decoration:none;font-weight:700}</style></head><body><main><span>Express + MongoDB practice</span><h1>Product Catalog API</h1><p>I explore filtering, numeric comparisons, field selection, sorting, and pagination through a compact products endpoint.</p><a href="/api/v1/products">I view my product JSON →</a></main></body></html>`);
});

app.use('/api/v1/products', productsRouter);

// products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
