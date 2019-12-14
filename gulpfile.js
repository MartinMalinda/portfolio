const gulp = require("gulp"),
  plumber = require("gulp-plumber"),
  rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin"),
  cache = require("gulp-cache");
const minifycss = require("gulp-minify-css");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const util = require("gulp-util");
const gulpif = require("gulp-if");
const handlebars = require("gulp-compile-handlebars");
const data = require("gulp-data");
const swig = require("gulp-swig");
const fs = require("fs");
const addsrc = require("gulp-add-src");
const htmlmin = require("gulp-htmlmin");
const svgmin = require("gulp-svgmin");
const critical = require("critical").stream;
const runSequence = require("run-sequence");
const purify = require("gulp-purifycss");
const surge = require("gulp-surge");
const markdownit = require("gulp-markdown-it");

const isProduction = util.env.production;

function cdimg(path, width) {
  return (
    "https://res.cloudinary.com/serenity-themes/image/upload/q_auto,f_auto,w_" +
    width +
    "/" +
    path
  );
}

gulp.task("browser-sync", function() {
  return browserSync({
    server: {
      baseDir: "./dist"
    }
  });
});

gulp.task("bs-reload", function() {
  return browserSync.reload();
});

gulp.task("svgmin", function() {
  return gulp
    .src("src/images/**/*.svg")
    .pipe(svgmin()) // gulpif isProduction ?
    .pipe(gulp.dest("dist/images/"));
});

gulp.task("images", ["svgmin"], function() {
  return gulp
    .src("src/images/**/*.{jpg,png}")
    .pipe(
      cache(
        imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })
      )
    ) //gulpif isProduction?
    .pipe(gulp.dest("dist/images/"));
});

gulp.task("styles", function() {
  return gulp
    .src(["src/styles/app.scss"])
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(addsrc("node_modules/normalize-css/normalize.css"))
    .pipe(concat("app.css"))
    .pipe(gulpif(isProduction, minifycss()))
    .pipe(gulp.dest("dist/styles/"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("scripts", function() {
  return gulp
    .src(["src/scripts/**/*.js"])
    .pipe(
      plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(concat("main.js"))
    .pipe(babel())
    .pipe(addsrc.prepend("node_modules/cash-dom/dist/cash.min.js"))
    .pipe(addsrc.prepend("bower_components/scrollMonitor/scrollMonitor.js"))
    .pipe(gulpif(isProduction, uglify()))
    .pipe(concat("main.js"))
    .pipe(gulp.dest("dist/scripts/"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("templates", function() {
  var options = {
    batch: ["./src/templates/partials"],
    helpers: {
      cdimg: cdimg,
      cdsrcset: function(path) {
        var sizes = [100, 200, 400, 800, 1024, 1440, 1660, 1920].map(size => {
          return cdimg(path, size) + " " + size + "w";
        });

        return sizes.join();
      }
    }
  };

  var data = {
    meta: JSON.parse(fs.readFileSync("src/data/meta.json", "utf8"))
  };

  return gulp
    .src("src/templates/*.hbs")
    .pipe(handlebars(data, options))
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("dist"));

  //.pipe(gulpif(isProduction, htmlmin({collapseWhitespace: true})))
});

gulp.task("public-dist", function() {
  return gulp.src("public/**/*").pipe(gulp.dest("dist"));
});

gulp.task("critical", function() {
  return gulp
    .src("dist/*.html")
    .pipe(
      gulpif(
        isProduction,
        critical({
          base: "dist/",
          inline: true,
          minify: true,
          extract: true,
          css: ["dist/styles/app.css"]
        })
      )
    )
    .pipe(gulpif(isProduction, htmlmin({ collapseWhitespace: true })))
    .on("error", function(err) {
      util.log(util.colors.red(err.message));
    })
    .pipe(gulp.dest("dist"));
});

gulp.task("build", function(cb) {
  return runSequence(
    "markdown",
    ["templates", "styles", "scripts", "images"],
    "critical",
    "public-dist",
    cb
  );
});

gulp.task("watch", function() {
  gulp.watch("src/styles/**/*.scss", ["styles"]);
  gulp.watch("src/images/**/*.{jpg,png,svg}", ["images"]);
  gulp.watch("src/scripts/**/*.js", ["scripts"]);
  gulp.watch("vendor/**/*.js", ["scripts"]);
  gulp.watch("src/**/*.hbs", ["templates"]);
  gulp.watch("src/data/**/*.json", ["templates"]);
  gulp.watch("dist/*.html", ["bs-reload"]);
  gulp.watch("public/**/*", ["public-dist"]);
  gulp.watch("src/templates/**/*.md", ["markdown"]);
});

gulp.task("default", function(cb) {
  runSequence("build", "browser-sync", "watch", cb);
});
