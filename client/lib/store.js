"use strict";

var _interopRequireDefault = require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducers = _interopRequireDefault(require("./reducers"));

var initialState = {};
var middleware = [_reduxThunk.default];
var store = (0, _redux.createStore)(_reducers.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(void 0, middleware)));
var _default = store;
exports.default = _default;
