
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
      uncss = require('gulp-uncss'),//este plugin ya esta deprecated lo reemplazo purgecss
      purgecss = require('gulp-purgecss'),
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
            `${dir.nm}/wowjs/dist/wow.min.js`,
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
                title : 'Michael Jordan',
                files : files//le mandamos el onjeto files de arriba
            }
        },
        sass : {outputStyle: 'compressed'},//micodigo scss me entrega una hoja de estilos css minificada
        es6 : { presets : ['@babel/preset-env']},
        imagemin : {
          progressive : true,//quiere las imagenes jpg progresivas
          use : [pngquant()]},//uso el plugin de png quant para reducir mas la imagen
        svgmin : { convertColors : false,//que respete los colores y los deje como estan
                  removeAttrs : { attrs : ['fill']}},//que remueva atributos de relleno
        uncss : { html : [`${dir.dist}/*.html`]},//ruta en la cual va a buscar
        autoprefixer : {
          browsers : ['last 5 versions'],//hasta cuantas versiones va a soportar 
          cascade : false
        },
        htmlmin : {collapseWhitespace : true},//no considerar espacios en blanco
        purgecss : { content : [`${dir.dist}/*.html`]}//ruta en la cual va a buscar
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
gulp.task('es6', () => {
  gulp.src(`${dir.src}/es6/*.js`)
      .pipe(babel(opts.es6))
      .pipe(gulp.dest(`${dir.dist}/js`));
})
gulp.task('img', () => {//tarea que optimiza imagenes
  gulp.src(`${dir.src}/img/**/*.+(png|jpeg|jpg|gif)`)//** -> busque en cualquier carpeta, * ->cualquier nombre
      .pipe(imagemin(opts.imagemin))//paso el plugin
      .pipe(gulp.dest(`${dir.dist}/img`));
})
gulp.task('svg', () => {//tarea que optimiza vectores
  gulp.src(`${dir.src}/img/svg/*.svg`)
      .pipe(svgmin(opts.svgmin))//paso el plugin
      .pipe(gulp.dest(`${dir.dist}/img/svg`));
})
gulp.task('webp', () => {//tarea que cambia el formato de las imagenes a webp
  gulp.src(`${dir.src}/img/**/*.+(png|jpeg|jpg)`)//las imagenes en webp no pierden calidad y son menos pesadas
      .pipe(webp())//no necesita parametros a menos de que queramos mas calidad
      .pipe(gulp.dest(`${dir.dist}/img/webp`));
})

gulp.task('fonts', () => {//tarea que busca las tipos de letras y lo envie a la carpta dist
  gulp.src(files.fonts)
      .pipe(gulp.dest(`${dir.dist}/fonts`));
})
gulp.task('statics', () => {//manda los archivos statics a dist
  gulp.src(files.statics)
      .pipe(gulp.dest(dir.dist));
})

gulp.task('css', () => {//tarea que minifica todos los archivos y lo combierte en uno solo
  gulp.src(files.CSS)//lee todos los archivos
      .pipe(concat(files.mCSS))//concatena todos los archivos y lo comvierte en uno solo
      .pipe(uncss(opts.purgecss))//busca los selectores css que son usados por el proyecto y los que no se usen los borra
      .pipe(autoprefixer(opts.autoprefixer))//ayuda a los navegadores con los prefixer
      .pipe(cleanCSS())//aplica el archivo que concatenamos
      .pipe(gulp.dest(`${dir.dist}/css`));
})
gulp.task('js', () => {
  gulp.src(files.JS)//lee todos los archivos
  .pipe(concat(files.mJS))//los concatena en uno solo y el nombre del archivo esta en el objeto
  .pipe(uglify())//lo  hace poco entendible y luego lo va a minificar
  .pipe(gulp.dest(`${dir.dist}/js`));
});
gulp.task('html', () => {
  gulp.src(`${dir.dist}/*.html`)//lee todos los archivos
  .pipe(useref())//hacemos un comentario en el html para que me convierta todos esos links por el archivo minificado o concatenado
  .pipe(gulp.dest(`${dir.dist}`));
});