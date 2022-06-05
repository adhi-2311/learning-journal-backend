const express = require('express');
const bodyParser=require('body-parser');
const dotenv= require("dotenv");
const connectDB = require('./config/db');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// Connect Database
dotenv.config({path: '.env'})
connectDB();


// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/journals', require('./routes/journals'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
