/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/javascript/script.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* These lines of code are setting up initial variables and constants for fetching and displaying news
data from the Hacker News API. */
var API_BASE = "https://hacker-news.firebaseio.com/v0";
var newsContainer = document.getElementById("news-container");
var loadMoreButton = document.getElementById("load-more");
var newsIds = [];
var currentIndex = 0;
var newsPerPage = 10;

/**
 * The `init` function fetches news IDs from an API endpoint and loads more news based on the fetched
 * IDs.
 */
function init() {
  return _init.apply(this, arguments);
}
/**
 * The function `loadMoreNews` asynchronously loads news details in batches and updates the current
 * index until all news items have been loaded.
 */
function _init() {
  _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var response, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return fetch("".concat(API_BASE, "/newstories.json"));
        case 1:
          response = _context.v;
          if (response.ok) {
            _context.n = 2;
            break;
          }
          throw new Error("Failed to fetch news Ids");
        case 2:
          _context.n = 3;
          return response.json();
        case 3:
          newsIds = _context.v;
          loadMoreNews();
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          console.error("Error initializing news", _t);
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[0, 4]]);
  }));
  return _init.apply(this, arguments);
}
function loadMoreNews() {
  return _loadMoreNews.apply(this, arguments);
}
/**
 * The function `fetchNewsDetail` asynchronously fetches news details using an API endpoint and
 * displays them on the webpage.
 * @param id - The `id` parameter in the `fetchNewsDetail` function is used to specify the unique
 * identifier of the news item that you want to fetch the details for. This identifier is used to
 * construct the URL for fetching the specific news item from the API.
 * @returns The `fetchNewsDetail` function is an asynchronous function that fetches news detail data
 * from an API based on the provided `id`. It then creates a new `div` element to display the news item
 * with its title and publication date. If the fetch is successful, the news item is appended to the
 * `newsContainer`. If there is an error during the fetch process, an error message is logged
 */
function _loadMoreNews() {
  _loadMoreNews = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var nextNewsIds, _iterator, _step, id, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          nextNewsIds = newsIds.slice(currentIndex, currentIndex + newsPerPage);
          _iterator = _createForOfIteratorHelper(nextNewsIds);
          _context2.p = 1;
          _iterator.s();
        case 2:
          if ((_step = _iterator.n()).done) {
            _context2.n = 4;
            break;
          }
          id = _step.value;
          _context2.n = 3;
          return fetchNewsDetail(id);
        case 3:
          _context2.n = 2;
          break;
        case 4:
          _context2.n = 6;
          break;
        case 5:
          _context2.p = 5;
          _t2 = _context2.v;
          _iterator.e(_t2);
        case 6:
          _context2.p = 6;
          _iterator.f();
          return _context2.f(6);
        case 7:
          currentIndex += newsPerPage;
          if (currentIndex >= newsIds.length) {
            loadMoreButton.style.display = "none";
          }
        case 8:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 5, 6, 7]]);
  }));
  return _loadMoreNews.apply(this, arguments);
}
function fetchNewsDetail(_x) {
  return _fetchNewsDetail.apply(this, arguments);
}
/* The code `loadMoreButton.addEventListener("click", loadMoreNews);` is adding an event listener to
the `loadMoreButton` element. This event listener is listening for a click event on the
`loadMoreButton` element, and when a click event occurs, it will trigger the `loadMoreNews`
function. */
function _fetchNewsDetail() {
  _fetchNewsDetail = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(id) {
    var response, news, newsItem, date, dateString, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return fetch("".concat(API_BASE, "/item/").concat(id, ".json"));
        case 1:
          response = _context3.v;
          if (response.ok) {
            _context3.n = 2;
            break;
          }
          throw new Error("Failed to fetch news detail");
        case 2:
          _context3.n = 3;
          return response.json();
        case 3:
          news = _context3.v;
          if (news) {
            _context3.n = 4;
            break;
          }
          return _context3.a(2);
        case 4:
          newsItem = document.createElement("div");
          newsItem.classList.add("news-item");
          date = new Date(news.time * 1000);
          dateString = date.toLocaleString("it-IT");
          newsItem.innerHTML = "\n        <h2><a href=\"".concat(news.url || '#', "\" target=\"_blank\">").concat(news.title, "</a></h2>\n        <p class=\"date\">Published on: ").concat(dateString, "</p>\n        ");
          newsContainer.appendChild(newsItem);
          _context3.n = 6;
          break;
        case 5:
          _context3.p = 5;
          _t3 = _context3.v;
          console.error("Error fetching news detail", _t3);
        case 6:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 5]]);
  }));
  return _fetchNewsDetail.apply(this, arguments);
}
loadMoreButton.addEventListener("click", loadMoreNews);
init();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map