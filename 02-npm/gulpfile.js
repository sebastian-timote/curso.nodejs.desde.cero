
const gulp = require('gulp'),
      pug = require('gulp-pug'),
      sass = require('gulp-sass'),
      babel = require('gulp-babel'),
      imagemin = require('gulp-imagemin'),
      pngquant = require('imagemin-pngquant'),
      svgmin = require('gulp-svgmin'),
      webp = require('gulp-webp'),
      useref = require('gulp-useref'),
      concat = require('gulp-concat'),
      uncss = require('gulp-uncss'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      uglify = require('gulp-uglify'),
      htmlmin = require('gulp-htmlmin'),
      dir = {//lo primero crear la cerpeta de direcciones
          src: 'src',
          dist: 'dist',
          nm: 'node_modules'
      },
      files = {//todos los archivos que manejemos estaran en este objeto guardados en un arreglo
          CSS : [//librerias de css que vamos a utilizar
            `${dir.nm}/animate.css/animate.min.css`,
            `${dir.nm}/font-awesome/css/font-awesome.min.css`,
            `${dir.nm}/responsimple/responsimple.min.css`,
            `${dir.nm}/owl.carousel/dist/assets/owl.carousel.min.css`,
            `${dir.nm}/owl.carousel/dist/assets/owl.theme.default.min.css`,
            `${dir.dist}/css/estilos.css`
          ],
          mCSS : 'estilos.min.css',// este va a hacer el archivo que contendra todos los archivos css que usamos
          JS : [
            `${dir.nm}/jquery/dist/jquery.min.js`,
            `${dir.nm}/owl.carousel/dist/owl.carousel.min.js`,
            `${dir.nm}/dist/wow.min.js`,
            `${dir.dist}/js/codigos.js`
          ],
          mJS : 'codigos.min.js',
          fonts : [`${dir.nm}/font-awesome/fonts/*.*`],//guardar archivos de tipografia
          statics : [//archivos que no cambian su contenido
            `${dir.src}/humans.txt`,//es para especificar quienes trabajaron en el proyecto y que tecnologias usamos
            `${dir.src}/sitemap.xml`//mapa de sitios les ayuda a los navegadores a posicionar todas las urls
          ] 


      },
      opts = {//opciones para cada plugin
        pug: {
            pretty : true,//true es para que no minifique el codigo html
            locals : {//con locals enviamos variables al aplantilla de pug
                title : 'Maraton',
                files : files//le mandamos el onjeto files de arriba
            }
        },
        sass : {outputStyle: 'compressed'}

      };

gulp.task('pug', () => {
    gulp.src(`${dir.src}/pug/*.pug`)//carpeta de origen
        .pipe(pug(opts.pug))//pipe()-> le paso la ruta de origen a pug y lo ejecuto//le psasamos opsciones de configuracion
        .pipe(gulp.dest(dir.dist))//carpeta de destino
})

gulp.task('sass', () => {
  gulp.src(`${dir.src}/scss/*.scss`)
      .pipe(sass(opts.sass))
      .pipe(gulp.dest(`${dir.dist}/css`));
})