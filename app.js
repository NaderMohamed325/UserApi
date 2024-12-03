const express = require('express');
const app = express();
app.use(express.json())
const morgan = require('morgan');
app.use(morgan('dev'))
const usersRouter = require('./routes/userRouter');



app.use("/api/users", usersRouter);

module.exports = app;
