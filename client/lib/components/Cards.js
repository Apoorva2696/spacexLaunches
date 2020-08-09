"use strict";

var _interopRequireDefault = require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/createSuper"));

var _react = _interopRequireDefault(require("react"));

var _queryString = _interopRequireDefault(require("query-string"));

var _axios = _interopRequireDefault(require("axios"));

var Cards = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Cards, _React$Component);

  var _super = (0, _createSuper2.default)(Cards);

  function Cards(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Cards);
    _this = _super.call(this, props);
    _this.state = {
      filters: props.filters,
      response: {},
      isFetching: false
    };
    _this.getData = _this.getData.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Cards, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var filters = this.state.filters;

      var _params = 0 !== Object.keys(filters).length ? "?".concat(_queryString.default.stringify(filters)) : null;

      this.getData(_params, filters);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (JSON.stringify(this.props.filters) !== JSON.stringify(nextProps.filters)) {
        var _params = 0 !== Object.keys(nextProps.filters).length ? "?".concat(_queryString.default.stringify(nextProps.filters)) : null;

        this.getData(_params, nextProps.filters);
      }
    }
  }, {
    key: "getData",
    value: function getData(_params, filters) {
      var _this2 = this;

      var getResponse = /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
          var _res;

          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this2.setState({
                    isFetching: true
                  });

                  _context.next = 3;
                  return _axios.default.get("https://api.spacexdata.com/v3/launches?limit=100".concat(_params));

                case 3:
                  _res = _context.sent;
                  return _context.abrupt("return", _res);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function getResponse() {
          return _ref.apply(this, arguments);
        };
      }();

      getResponse().then(function (data) {
        if (null !== _params) {
          window.history.replaceState(filters, 'params', "".concat(_params));
        }

        ;

        _this2.setState({
          response: data,
          isFetching: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isFetching = _this$state.isFetching,
          response = _this$state.response;

      if (0 !== Object.keys(response).length && !isFetching) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "cards__container"
        }, 0 < response.data.length ? response.data.map(function (item, index) {
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "cards__container__card",
            key: "".concat(item.mission_name, "_").concat(index)
          }, /*#__PURE__*/_react.default.createElement("img", {
            className: "cards__container__card__icon",
            alt: "Mission Logo",
            src: item.links.mission_patch,
            width: "80%",
            height: "60%"
          }), /*#__PURE__*/_react.default.createElement("div", {
            className: "cards__container__card__info"
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "cards__container__card__info__title"
          }, "".concat(item.mission_name, " # ").concat(item.flight_number)), /*#__PURE__*/_react.default.createElement("div", {
            className: "cards__container__card__info__item"
          }, /*#__PURE__*/_react.default.createElement("span", {
            className: "cards__container__card__info__item__key"
          }, "Mission Ids :"), /*#__PURE__*/_react.default.createElement("ul", {
            className: "cards__container__card__info__item__list"
          }, item.mission_id.map(function (mission) {
            return /*#__PURE__*/_react.default.createElement("li", {
              className: "cards__container__card__info__item__value",
              key: mission
            }, " ", mission);
          }))), /*#__PURE__*/_react.default.createElement("div", {
            className: "cards__container__card__info__item"
          }, /*#__PURE__*/_react.default.createElement("span", {
            className: "cards__container__card__info__item__key"
          }, "Launch Year :"), /*#__PURE__*/_react.default.createElement("span", {
            className: "cards__container__card__info__item__value"
          }, item.launch_year)), /*#__PURE__*/_react.default.createElement("div", {
            className: "cards__container__card__info__item"
          }, /*#__PURE__*/_react.default.createElement("span", {
            className: "cards__container__card__info__item__key"
          }, "Successful Launch :"), /*#__PURE__*/_react.default.createElement("span", {
            className: "cards__container__card__info__item__value"
          }, null === item.launch_success ? 'null' : item.launch_success.toString())), /*#__PURE__*/_react.default.createElement("div", {
            className: "cards__container__card__info__item"
          }, /*#__PURE__*/_react.default.createElement("span", {
            className: "cards__container__card__info__item__key"
          }, "Successful Landing :"), /*#__PURE__*/_react.default.createElement("span", {
            className: "cards__container__card__info__item__value"
          }, null === item.rocket.first_stage.cores[0].land_success ? 'null' : item.rocket.first_stage.cores[0].land_success.toString()))));
        }) : /*#__PURE__*/_react.default.createElement("div", {
          className: "no-data"
        }, "No Data Found"));
      } else if (isFetching) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "cards__container"
        }, [1, 2, 3, 4].map(function (val, index) {
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "cards__container__card__preloader",
            key: index
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "cards__container__card__icon__preloader"
          }), /*#__PURE__*/_react.default.createElement("div", {
            className: "cards__container__card__info__preloader"
          }), /*#__PURE__*/_react.default.createElement("div", {
            className: "cards__container__card__info__preloader"
          }), /*#__PURE__*/_react.default.createElement("div", {
            className: "cards__container__card__info__preloader"
          }));
        }));
      } else return null;
    }
  }]);
  return Cards;
}(_react.default.Component);

var _default = Cards;
exports.default = _default;
