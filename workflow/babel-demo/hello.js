"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// JSX React用来描述UI
// 转义的过程
// JSX -> 页面上运行？
var Hello = function Hello() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Hello world!");
};

_reactDom["default"].createRoot(document.getElementById('root')).render( /*#__PURE__*/_react["default"].createElement(Hello, null));
