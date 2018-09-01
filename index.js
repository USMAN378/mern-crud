

const express = require('express');
const mongoose = require('mongoose');
const Books = require('./routes/crudRoutes');
const bodyParser = require('body-parser');
const app  = express();


//connecting database
mongoose.connect('mongodb://localhost/mern-crud');
mongoose.connection.once('open',()=> {
    console.log('databse connected successfully');
});


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/api/books',Books);

const PORT = process.env.PORT || 5000;
app.listen(PORT , () =>  {
    console.log(`app is running at port ${PORT}`);
})