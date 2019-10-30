const express = require('express');
const DB = require('./connection/database');
const morgan = require('morgan');

const app = express();
// settings
const PORT = process.env.PORT || 3000;
//middlewares
app.use(express.json());
app.use(morgan('dev'));
//router
app.use('/', require('./src/routes/index.routes'));

//starting the server
app.get('/', (req, res) => {
    res.send("Express, mongoose y nodeJS")
});
app.listen(PORT, () => {
    console.log('App started on port', PORT);

});