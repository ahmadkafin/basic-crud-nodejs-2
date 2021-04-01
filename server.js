const express = require('express');
const dotenv = require('dotenv'); // to call env file
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({ path: 'config.env' }); //to populate env port
const PORT = process.env.PORT || 8080

// log request using morgan module
app.use(morgan('tiny'));


//mongoDB connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}));

// ser view engine
app.set("view engine", "ejs");

// use this below if you have put ejs file in sub folder
//app.set("views", path.resolve(__dirname, "views/your_folder"));

// load asset
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
// css/style.css (for access file)


//load router
app.use('/', require('./server/routes/router'));
app.listen(PORT, ()=> {console.log(`Server is running on http://localhost:${PORT}`)});