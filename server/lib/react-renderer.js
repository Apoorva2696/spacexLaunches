"use strict";

var fs = require('fs');

var path = require('path');

var React = require('react');

var _require = require('react-dom/server'),
    renderToString = _require.renderToString;

var _require2 = require('./paths'),
    BUILD_DIR = _require2.BUILD_DIR;

var App = require('../../client/lib/App')["default"];

function reactRenderer(req, res) {
  var app = renderToString(React.createElement(App));
  var html = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8').replace('__ROOT__', app);
  return res.send(html);
}

module.exports = reactRenderer;