"use strict";

var _interopRequireDefault = require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

//filters data
var FILTERS = [{
  id: 'launch_year',
  name: 'Launch Year',
  options: [{
    title: '2006',
    value: '2006'
  }, {
    title: '2007',
    value: '2007'
  }, {
    title: '2008',
    value: '2008'
  }, {
    title: '2009',
    value: '2009'
  }, {
    title: '2010',
    value: '2010'
  }, {
    title: '2011',
    value: '2011'
  }, {
    title: '2012',
    value: '2012'
  }, {
    title: '2013',
    value: '2013'
  }, {
    title: '2014',
    value: '2014'
  }, {
    title: '2015',
    value: '2015'
  }, {
    title: '2016',
    value: '2016'
  }, {
    title: '2017',
    value: '2017'
  }, {
    title: '2018',
    value: '2018'
  }, {
    title: '2019',
    value: '2019'
  }, {
    title: '2020',
    value: '2020'
  }]
}, {
  id: 'launch_success',
  name: 'Successful Launch',
  options: [{
    title: 'True',
    value: 'true'
  }, {
    title: 'False',
    value: 'false'
  }]
}, {
  id: 'land_success',
  name: 'Successful Landing',
  options: [{
    title: 'True',
    value: 'true'
  }, {
    title: 'False',
    value: 'false'
  }]
}]; // no-op  function

var noop = function noop() {};

var Filters = function Filters(props) {
  var selectedFilters = props.filters;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "filters-container"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Filters"), /*#__PURE__*/_react.default.createElement("span", {
    className: "filters-container__action",
    onClick: function onClick() {
      props.onClick({});
    }
  }, "Clear"), FILTERS.map(function (filter) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "filters-container__filter",
      key: filter.name
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "filters-container__filter__title"
    }, filter.name), /*#__PURE__*/_react.default.createElement("div", {
      className: "filters-container__filter__list"
    }, filter.options.map(function (option) {
      var _selectedValue = selectedFilters[filter.id] ? selectedFilters[filter.id] : null;

      var _className = _selectedValue !== option.value ? 'filters-container__filter__list__item' : 'filters-container__filter__list__item filters-container__filter__list__item--selected';

      return /*#__PURE__*/_react.default.createElement("button", {
        className: _className,
        onClick: function onClick() {
          _selectedValue !== option.value ? props.onClick((0, _objectSpread3.default)((0, _objectSpread3.default)({}, props.filters), {}, (0, _defineProperty2.default)({}, filter.id, option.value))) : noop();
        }
      }, option.title);
    })));
  }));
};

var _default = Filters;
exports.default = _default;
