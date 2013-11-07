// var
// // var fn = jade.compile(jadeTemplate);

var path           = require('path')
  , jade           = require('jade')
  , marked         = require('meta-marked')
  , fs             = require('fs')
  , juice          = require('juice')
  , stylus         = require('stylus')
  , _              = require("underscore")
  , jsdom          = require("jsdom")
  , moment         = require("moment")
  , templatesDir   = path.join(__dirname, 'templates');

var file = './emails/test/index.md';

/* Render CSS */
var getCSS = function(callback) {

  fs.readFile(__dirname + '/template.styl', 'utf8', function (err, data) {
    if(err) throw err;

    stylus.render(data, function(err, css){
      if(err) throw err;
      callback(css);
    });
  });
}

var getHTML = function(file, callback) {
  fs.readFile(file, 'utf8', function (err, rawMarkdown) {
    if(err) throw err;

    var data = marked(rawMarkdown);

    // Extract H1 contents to create agenda, add to meta
    jsdom.env({
      html: data.html,
      scripts: ["http://code.jquery.com/jquery.js"],
      done: function (errors, window) {
        data.meta.agenda = [];
        var $ = window.$;
        $("h1").each(function() {
          data.meta.agenda.push($(this).text());
        });

        data.meta.date = moment(data.meta.date).format('MMMM Do YYYY');

        var html = jade.renderFile('template.jade', {
          page: data.meta,
          content: data.html
        });

        callback(html);
      }
    });
  });
}

var renderFile = function(file, callback) {
  getHTML(file, function(html) {
    getCSS(function(css) {
      callback(juice.inlineContent(html, css));
    });
  });
}

var outputHTML = function(name, html, callback) {
  fs.writeFile(name, html, function(err) {
    if(err) throw err;
    if (callback) { callback() }
  });
}

fs.readdir('./emails/',function(err, files){
    if(err) throw err;

    console.log("Rendering Emails");

    files.forEach(function(file){
      if (file[0] == '.') { return } // Ignore .DS_Store

      console.log("  - " + file);
      renderFile('emails/' + file, function(html) {
        outputHTML("compiled/" + file.replace('md', 'html'), html, function() {
          console.log("    Done ✔");
          console.log("");
        })
      });
    });
 });
