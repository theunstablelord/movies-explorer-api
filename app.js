require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');
const routes = require('./routes');
const cors = require('./middlewares/cors');
const handleError = require('./middlewares/handleError');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/limiter');

const { PORT = 3000 } = process.env;
const app = express();

app.use(helmet());
app.use(limiter);
app.use(express.json());
app.use(requestLogger);
app.use(cors);
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(handleError);

mongoose.set({ runValidators: true, autoIndex: true });

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb')
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
