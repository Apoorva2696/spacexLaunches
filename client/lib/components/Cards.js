"use strict";

var _interopRequireWildcard = require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Cards = void 0;

var _regenerator = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("/Users/apoorva.srivastava/Desktop/spacexLaunches/client/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _queryString = _interopRequireDefault(require("query-string"));

var _axios = _interopRequireDefault(require("axios"));

var Cards = function Cards(props) {
  var filters = props.filters;

  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      res = _useState2[0],
      setRes = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isFetching = _useState4[0],
      setFetching = _useState4[1];

  (0, _react.useEffect)(function () {
    var _params = 0 !== Object.keys(filters).length ? "?".concat(_queryString.default.stringify(filters)) : null;

    var getData = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _res;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setFetching(true);
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

      return function getData() {
        return _ref.apply(this, arguments);
      };
    }();

    getData().then(function (data) {
      if (null !== _params) {
        window.history.replaceState(filters, 'params', "".concat(_params));
      }

      ;
      setFetching(false);
      setRes(data);
    });
  }, [filters]);

  if (0 !== Object.keys(res).length && !isFetching) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "cards__container"
    }, 0 < res.data.length ? res.data.map(function (item, index) {
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
};

exports.Cards = Cards;
var _default = Cards;
exports.default = _default;
