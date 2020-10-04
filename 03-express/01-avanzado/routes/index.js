const express = require('express'),
      router = express.Router();

router
    .get('/', (req, res, next) => res.render('index.hbs', {title: 'Home'}))
    .get('/portafolio', (req, res, next) => res.render('portfolio.hbs', {title: 'Portafolio'}))
    .get('/contacto', (req, res, next) => res.render('contact.hbs', {title: 'Contacto'}))




module.exports = router