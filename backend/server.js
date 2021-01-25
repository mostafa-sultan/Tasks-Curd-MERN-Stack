const express = require('express');
const cors = require('cors'); 
require('dotenv').config(); 
const app = express(); 
app.use(cors());
app.use(express.json());
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

const port = process.env.PORT || 5000;

// mongoose
const mongoose = require('mongoose');
const uri = process.env.DBURI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection= mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb database connection successfully ");
})


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter); 

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});