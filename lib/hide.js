'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _scrollbarWidth = require('scrollbar-width');

var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

var _hasScrollbar = require('has-scrollbar');

var _hasScrollbar2 = _interopRequireDefault(_hasScrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _document = document,
      body = _document.body;


  if ((0, _hasScrollbar2.default)(body)) {
    body.style.paddingRight = (0, _scrollbarWidth2.default)() + 'px';
  }
  body.style.overflow = 'hidden';
};