const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


app.use(express.static('./assets'));
app.use(expressLayouts);


// extract styles and script form sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScript', true);


// use express router
app.use('/', require('./routes'));

// set up view engine
app.set("view engine", 'ejs');
app.set('views', './views');

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running server: ${err}`)
    }
    console.log(`server is running succesfully on port ${port}`);
});
