/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/***/ ((module) => {

/*
 * @Author: niumengfei
 * @Date: 2022-06-20 13:57:52
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-20 14:04:24
 */
module.exports = {
    math: (a, b) =>{
        return a + b
    }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*
 * @Author: niumengfei
 * @Date: 2022-06-20 13:57:46
 * @LastEditors: niumengfei
 * @LastEditTime: 2022-06-20 14:09:45
 */
const MathMoudle = __webpack_require__(/*! ./math */ "./src/math.js");

console.log(MathMoudle, MathMoudle.math(5,7));
})();

/******/ })()
;
//# sourceMappingURL=main.js.map