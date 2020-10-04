const express = require('express'),
      createError = require('http-errors'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      session = require('express-session'),
      favicon = require('serve-favicon'),
      sassMiddleware = require('node-sass-middleware'),
      browserify_express = require('babelify-express'),
      hbs = require('hbs'),
      hbsHelper = require('./views/helpers'),
      routes = require('./routes/index'),
      app = express();

hbs.registerPartials(`${__dirname}/views/partials`);
app
    .set('port', process.env.PORT|| 3000)
    .set('views', `${__dirname}/views`)
    .set('view_engine', 'hbs')
//middlewares
    .use(favicon(`${__dirname}/public/img/nodejs-512.webp`))
    .use(logger('dev'))
    .use(express.json())//permite parsear info
    .use(express.urlencoded({extended:false}))//para poder mandar info de formularios por la url para que express lo pueda ejecutar bien
    .use(cookieParser())//soporte para manejo y analisis de cookies
    .use(session({//soporte para mnejo de sessiones
        secret: 'shhhh',
        saveUninitialized: true,
        resave: true
    }
    ))
    .use(sassMiddleware({//para compilar codigo sass
        src: `${__dirname}/public`,
        dest: `${__dirname}/public`,
        indentedSyntax: false,//true=.sass and false=.scss
        sourceMap:true,
        outputStyle:'compressed'
    }))
    .use(browserify_express({//dar soporte en el front end para  es6
        entry: `${__dirname}/public/js/`,
        watch: `${__dirname}/public/js/`,
        mount: `/js/script.js`,//donde va a montar el codigo final
        verbose: true,
        minify: true,
        bundle_opts: {debug:true}//para que nos muestre errores
    }))
    .use(express.static(`${__dirname}/public`))//para decir cual va hacer la carpeta publica accedida por internet
    .use(routes)
    .use((req,res,next) => next(createError(404)))
    .use((err,req,res,next) => {
        res.status(err.status || 500)
        res.render('error', {err})//lee el archivo error.hbs
    })

    module.exports = app;
