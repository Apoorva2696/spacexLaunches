"use strict";

var _interopRequireDefault = require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Landing = _interopRequireDefault(require("./components/Landing"));

var App = function App() {
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("header", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "SpaceX Launch Programs")), /*#__PURE__*/_react.default.createElement("section", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_Landing.default, null), /*#__PURE__*/_react.default.createElement("footer", {
    className: "footer"
  }, "Developed by: Apoorva Srivastava")));
};

var _default = App;
exports.default = _default;
