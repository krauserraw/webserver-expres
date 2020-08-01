const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8090;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');


// Express HBS
app.set('view engine', 'hbs');

// app.get('/', function(req, res) {
//     let salida = {
//         nombre: 'Cristhian',
//         edad: 32,
//         url: req.url
//     }
//     res.send(salida);
// });

app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'cristHian de la cRUS DIAZ',
        anio: new Date().getFullYear()
    });

});

app.get('/about', function(req, res) {

    res.render('about', {
        anio: new Date().getFullYear()
    });

});

app.listen(port, () => {
    console.log('Escuchano peticiones en el puerto' + port);
});