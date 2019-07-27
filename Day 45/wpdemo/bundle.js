/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./answer.js":
/*!*******************!*\
  !*** ./answer.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Answer; });\nclass Answer {\r\n  constructor(user, text) {\r\n    this.user = user;\r\n    this.text = text;\r\n  }\r\n\r\n  render() {\r\n    const element = document.createElement('div');\r\n    element.className = 'answer';\r\n    element.innerHTML = `\r\n      <div class=\"user\">${this.user}</div>\r\n      <div class=\"text\">${this.text}</div>\r\n    `;\r\n\r\n    return element;\r\n  }\r\n\r\n  mount(parent) {\r\n    this.element = this.render();\r\n    parent.appendChild(this.element);\r\n  }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hbnN3ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hbnN3ZXIuanM/NGM0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBbnN3ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHVzZXIsIHRleHQpIHtcclxuICAgIHRoaXMudXNlciA9IHVzZXI7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSAnYW5zd2VyJztcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidXNlclwiPiR7dGhpcy51c2VyfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPiR7dGhpcy50ZXh0fTwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIG1vdW50KHBhcmVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5yZW5kZXIoKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xyXG4gIH1cclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./answer.js\n");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _question_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.js */ \"./question.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const question = new _question_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n    'My first question', \r\n    'A nice sexy body',\r\n    [\r\n      {\r\n        user: 'Vilash Deshmukh',\r\n        text: 'Because he was smart enough to understand that it was foolish of him to be thinking that he would ever become immortal in the Body that he was in.'\r\n      },\r\n      {\r\n        user: 'Jung Hoon Lee',\r\n        text: 'He was a physicist and not a biologist. Even if he were, he like us was limited by the technology of the times he lived in'\r\n      },\r\n      {\r\n        user: 'Kris Lim',\r\n        text: 'Because humanity better find several other planets that can sustain humans before finding the secret of immortality.'\r\n      },\r\n    ]\r\n  );\r\n\r\n  const question2 = new _question_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n    'My section question', \r\n    'An old and wrinkly body', \r\n    [],\r\n  );\r\n\r\n  const app = document.querySelector('#app');\r\n  question.mount(app);\r\n  question2.mount(app);\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vcXVlc3Rpb24uanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBjb25zdCBxdWVzdGlvbiA9IG5ldyBRdWVzdGlvbihcclxuICAgICdNeSBmaXJzdCBxdWVzdGlvbicsIFxyXG4gICAgJ0EgbmljZSBzZXh5IGJvZHknLFxyXG4gICAgW1xyXG4gICAgICB7XHJcbiAgICAgICAgdXNlcjogJ1ZpbGFzaCBEZXNobXVraCcsXHJcbiAgICAgICAgdGV4dDogJ0JlY2F1c2UgaGUgd2FzIHNtYXJ0IGVub3VnaCB0byB1bmRlcnN0YW5kIHRoYXQgaXQgd2FzIGZvb2xpc2ggb2YgaGltIHRvIGJlIHRoaW5raW5nIHRoYXQgaGUgd291bGQgZXZlciBiZWNvbWUgaW1tb3J0YWwgaW4gdGhlIEJvZHkgdGhhdCBoZSB3YXMgaW4uJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdXNlcjogJ0p1bmcgSG9vbiBMZWUnLFxyXG4gICAgICAgIHRleHQ6ICdIZSB3YXMgYSBwaHlzaWNpc3QgYW5kIG5vdCBhIGJpb2xvZ2lzdC4gRXZlbiBpZiBoZSB3ZXJlLCBoZSBsaWtlIHVzIHdhcyBsaW1pdGVkIGJ5IHRoZSB0ZWNobm9sb2d5IG9mIHRoZSB0aW1lcyBoZSBsaXZlZCBpbidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHVzZXI6ICdLcmlzIExpbScsXHJcbiAgICAgICAgdGV4dDogJ0JlY2F1c2UgaHVtYW5pdHkgYmV0dGVyIGZpbmQgc2V2ZXJhbCBvdGhlciBwbGFuZXRzIHRoYXQgY2FuIHN1c3RhaW4gaHVtYW5zIGJlZm9yZSBmaW5kaW5nIHRoZSBzZWNyZXQgb2YgaW1tb3J0YWxpdHkuJ1xyXG4gICAgICB9LFxyXG4gICAgXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHF1ZXN0aW9uMiA9IG5ldyBRdWVzdGlvbihcclxuICAgICdNeSBzZWN0aW9uIHF1ZXN0aW9uJywgXHJcbiAgICAnQW4gb2xkIGFuZCB3cmlua2x5IGJvZHknLCBcclxuICAgIFtdLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAnKTtcclxuICBxdWVzdGlvbi5tb3VudChhcHApO1xyXG4gIHF1ZXN0aW9uMi5tb3VudChhcHApO1xyXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./question.js":
/*!*********************!*\
  !*** ./question.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Question; });\n/* harmony import */ var _answer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./answer.js */ \"./answer.js\");\n\r\nclass Question {\r\n  constructor(title, body, answers) {\r\n    this.title = title;\r\n    this.body = body;\r\n    this.votes = 13;\r\n    this.answers = answers;\r\n  }\r\n\r\n  upvote() {\r\n    this.votes++;\r\n    this.update();\r\n  }\r\n\r\n  downvote() {\r\n    this.votes--;\r\n    this.update();\r\n  }\r\n\r\n  render() {\r\n    const element = document.createElement('div');\r\n    element.innerHTML = `\r\n      <div class=\"question\">\r\n        <div class=\"votes\">\r\n          <button class=\"btn-upvote\">+</button>\r\n          <div class=\"counter\">${this.votes}</div>\r\n          <button class=\"btn-downvote\">-</button>\r\n        </div>\r\n        <div class=\"content\">\r\n          <div class=\"title\">${this.title}</div>\r\n          <div class=\"body\">${this.body}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"answers\"></div>\r\n    `;\r\n\r\n    element.querySelector('.btn-upvote').addEventListener(\r\n      'click', this.upvote.bind(this)\r\n    );\r\n    element.querySelector('.btn-downvote').addEventListener(\r\n      'click', this.downvote.bind(this)\r\n    );\r\n\r\n    const result = this.answers.map(answer => {\r\n      return new _answer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](answer.user, answer.text);  \r\n    });\r\n    \r\n    const answersElm = element.querySelector('.answers');\r\n    result.forEach(answer => answer.mount(answersElm));\r\n\r\n    return element;\r\n  }\r\n\r\n  mount(parent) {\r\n    this.element = this.render();\r\n    parent.appendChild(this.element);\r\n  }\r\n\r\n  update() {\r\n    const counter = this.element.querySelector('.counter');\r\n    counter.textContent = this.votes;\r\n  }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9xdWVzdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3F1ZXN0aW9uLmpzP2Q4YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuc3dlciBmcm9tICcuL2Fuc3dlci5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgYm9keSwgYW5zd2Vycykge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5ib2R5ID0gYm9keTtcclxuICAgIHRoaXMudm90ZXMgPSAxMztcclxuICAgIHRoaXMuYW5zd2VycyA9IGFuc3dlcnM7XHJcbiAgfVxyXG5cclxuICB1cHZvdGUoKSB7XHJcbiAgICB0aGlzLnZvdGVzKys7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZG93bnZvdGUoKSB7XHJcbiAgICB0aGlzLnZvdGVzLS07XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2b3Rlc1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi11cHZvdGVcIj4rPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRlclwiPiR7dGhpcy52b3Rlc308L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tZG93bnZvdGVcIj4tPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7dGhpcy50aXRsZX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+JHt0aGlzLmJvZHl9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW5zd2Vyc1wiPjwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdXB2b3RlJykuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2NsaWNrJywgdGhpcy51cHZvdGUuYmluZCh0aGlzKVxyXG4gICAgKTtcclxuICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1kb3dudm90ZScpLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICdjbGljaycsIHRoaXMuZG93bnZvdGUuYmluZCh0aGlzKVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmFuc3dlcnMubWFwKGFuc3dlciA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgQW5zd2VyKGFuc3dlci51c2VyLCBhbnN3ZXIudGV4dCk7ICBcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBhbnN3ZXJzRWxtID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYW5zd2VycycpO1xyXG4gICAgcmVzdWx0LmZvckVhY2goYW5zd2VyID0+IGFuc3dlci5tb3VudChhbnN3ZXJzRWxtKSk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBtb3VudChwYXJlbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucmVuZGVyKCk7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IGNvdW50ZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXInKTtcclxuICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSB0aGlzLnZvdGVzO1xyXG4gIH1cclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./question.js\n");

/***/ })

/******/ });