"use strict";

var _interopRequireWildcard = require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/createSuper"));

var _react = _interopRequireWildcard(require("react"));

var _Cards = _interopRequireDefault(require("./Cards"));

var _Filters = _interopRequireDefault(require("./Filters"));

var Landing = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Landing, _React$Component);

  var _super = (0, _createSuper2.default)(Landing);

  function Landing(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Landing);
    _this = _super.call(this, props);
    _this.state = {
      filters: {}
    };
    _this.onClick = _this.onClick.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Landing, [{
    key: "onClick",
    value: function onClick(payload) {
      this.setState({
        filters: payload
      });
    }
  }, {
    key: "render",
    value: function render() {
      var filters = this.state.filters;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_Filters.default, {
        onClick: this.onClick,
        filters: filters
      }), /*#__PURE__*/_react.default.createElement(_Cards.default, {
        filters: filters
      }));
    }
  }]);
  return Landing;
}(_react.default.Component);

var _default = Landing;
exports.default = _default;
