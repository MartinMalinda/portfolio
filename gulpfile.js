import gulp from 'gulp';
import plumber from "gulp-plumber";
import rename from "gulp-rename";

import autoprefixer from "gulp-autoprefixer";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import imagemin from "gulp-imagemin";
import minifycss from "gulp-minify-css";
import gulpSass from "gulp-sass";
import browserSync from "browser-sync";
import util from "gulp-util";
import gulpif from "gulp-if";
import handlebars from "gulp-compile-handlebars";
import fs from "fs";
import addsrc from "gulp-add-src";
import htmlmin from "gulp-htmlmin";
import svgmin from "gulp-svgmin";
import critical from "critical";
import runSequence from "run-sequence";
import cache from 'gulp-cache';
import nodeSass from 'node-sass';

const isProduction = true;

function cdimg(path, width) {
  return (
    "https://res.cloudinary.com/serenity-themes/image/upload/q_auto,f_auto,w_" +
    width +
    "/" +
    path
  );
}

gulp.task("browser-sync", function () {
  return browserSync({
    server: {
      baseDir: "./dist"
    }
  });
});

gulp.task("bs-reload", function () {
  return browserSync.reload();
});

gulp.task("svgmin", function () {
  return gulp
    .src("src/images/**/*.svg")
    .pipe(svgmin()) // gulpif isProduction ?
    .pipe(gulp.dest("dist/images/"));
});

gulp.task("images", function () {
  return gulp
    .src("src/images/**/*.{jpg,png}")
    .pipe(
      cache(
        imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })
      )
    ) //gulpif isProduction?
    .pipe(gulp.dest("dist/images/"));
});

gulp.task("styles", function () {
  const _sass = gulpSass(nodeSass);

  return gulp
    .src(["src/styles/app.scss"])
    .pipe(
      plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(_sass())
    .pipe(autoprefixer())
    .pipe(addsrc("node_modules/normalize-css/normalize.css"))
    .pipe(concat("app.css"))
    .pipe(gulpif(isProduction, minifycss()))
    .pipe(gulp.dest("dist/styles/"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("scripts", function () {
  return gulp
    .src(["src/scripts/**/*.js"])
    .pipe(
      plumber({
        errorHandler: function (error) {
          console.log(error.message);
          this.emit("end");
        }
      })
    )
    .pipe(concat("main.js"))
    .pipe(addsrc.prepend("node_modules/cash-dom/dist/cash.min.js"))
    .pipe(addsrc.prepend("bower_components/scrollMonitor/scrollMonitor.js"))
    .pipe(gulpif(isProduction, uglify()))
    .pipe(concat("main.js"))
    .pipe(gulp.dest("dist/scripts/"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("templates", function () {
  var options = {
    batch: ["./src/templates/partials"],
    helpers: {
      cdimg: cdimg,
      cdsrcset: function (path) {
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

gulp.task("public-dist", function () {
  return gulp.src("public/**/*").pipe(gulp.dest("dist"));
});

gulp.task("critical", function () {
  return gulp
    .src("dist/*.html")
    .pipe(gulpif(isProduction, htmlmin({ collapseWhitespace: true })))
    .on("error", function (err) {
      util.log(util.colors.red(err.message));
    })
    .pipe(gulp.dest("dist"));
});

gulp.task("build", gulp.series("templates", "styles", "scripts", "images", "critical", "public-dist"));

gulp.task("watch", function () {
  gulp.watch("src/styles/**/*.scss", ["styles"]);
  gulp.watch("src/images/**/*.{jpg,png,svg}", ["images"]);
  gulp.watch("src/scripts/**/*.js", ["scripts"]);
  gulp.watch("vendor/**/*.js", ["scripts"]);
  gulp.watch("src/**/*.hbs", ["templates"]);
  gulp.watch("src/data/**/*.json", ["templates"]);
  gulp.watch("dist/*.html", ["bs-reload"]);
  gulp.watch("public/**/*", ["public-dist"]);
});

gulp.task("default", function (cb) {
  runSequence("build", "browser-sync", "watch", cb);
});
