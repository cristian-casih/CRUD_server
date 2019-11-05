const express = require('express');
const cors = require('cors');
const DB = require('./connection/database');
const morgan = require('morgan');

const app = express();
// settings
const PORT = process.env.PORT || 3000;
//middlewares
app.use(express.json());
app.use(morgan('dev'));

app.use(cors());
app.options('*', cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 })
//router
app.use('/', require('./src/routes/index.routes'));

/* app.options("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
}); 
 app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
}); */



//starting the server
app.get('/', (req, res) => {
    res.send("Express, mongoose y nodeJS")
});
app.listen(PORT, () => {
    console.log('App started on port', PORT);

});