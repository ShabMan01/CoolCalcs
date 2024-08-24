// Disc: main server

// --------------- INITIALIZATION --------------- //
const express = require('express');
const app = express();

const static_files_router = express.static('static');
app.use( static_files_router );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');



// --------------- MAIN --------------- //

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/classic', (req, res) => {
    res.render('calc_classic');
});

app.get('/bf-level', (req, res) => {
    res.render('calc_bf-level');
});

app.get('/bf-mastery', (req, res) => {
    res.render('calc_bf-mastery');
});

app.get('/finite-differences', (req, res) => {
    res.render('calc_finite-differences');
});



app.get('/*', (req, res) => {
    res.render('error');
});


// --------------- LISTENER --------------- //
var listener = app.listen(
    process.env.PORT || 8080, 
    process.env.HOST || "0.0.0.0", 
    function() {
        console.log("Express server started");
    }
);