/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function Edit() {
  const blockprops = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: "Dummy-first-class-edit-here"
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
          icon: "edit",
          title: "Edit",
          onClick: () => console.log("Edit Clicked")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
          icon: "trash",
          title: "Delete",
          onClick: () => console.log("Detele Clicked")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
          icon: "admin-plugins",
          title: "Plugin",
          onClick: () => console.log("Plugin Clicked")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
          icon: "admin-tools",
          title: "Tools",
          onClick: () => console.log("Tools Clicked")
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: "Block Settings",
        initialOpen: false,
        icon: "admin-settings",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: "Enter Something",
          onChange: v => console.log(v)
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      group: "styles",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: "Block Style",
        initialOpen: false,
        icon: "admin-generic",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
          onChange: color => console.log(color)
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      group: "advanced",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
        label: "Fixed Background",
        onChange: () => console.log('Background Changed')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      ...blockprops,
      children: "Editor Part"
    })]
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  icon: {
    src: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
      height: 512,
      viewBox: "0 0 60 60",
      width: 512,
      xmlns: "http://www.w3.org/2000/svg",
      id: "fi_2953363",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("g", {
        id: "Page-1",
        fill: "none",
        fillRule: "evenodd",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("g", {
          id: "059---Money-Bag",
          fill: "rgb(0,0,0)",
          fillRule: "nonzero",
          transform: "translate(0 -1)",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
            id: "Shape",
            d: "m54.135 47.653c1.1851892-1.6296647 1.8275238-3.5909544 1.836-5.606.0127714-.2649617-.080257-.5241413-.2586124-.720501-.1783555-.1963598-.427422-.3138084-.6923876-.326499-.5495675-.0205295-1.0147453.4019959-1.047.951.0075252 1.5970082-.4844214 3.1564125-1.407 4.46-1.951 2.464-5.653 2.589-6.376 2.589-.5522847 0-1 .4477153-1 1s.4477153 1 1 1c.884 0 5.421-.161 7.945-3.347z"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
            id: "Shape",
            d: "m34 35c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1c0 2.209139 1.790861 4 4 4v1c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-1c2.209139 0 4-1.790861 4-4s-1.790861-4-4-4v-4c1.1045695 0 2 .8954305 2 2 0 .5522847.4477153 1 1 1s1-.4477153 1-1c0-2.209139-1.790861-4-4-4v-1c0-.5522847-.4477153-1-1-1s-1 .4477153-1 1v1c-2.209139 0-4 1.790861-4 4s1.790861 4 4 4v4c-1.1045695 0-2-.8954305-2-2zm0-6c0-1.1045695.8954305-2 2-2v4c-1.1045695 0-2-.8954305-2-2zm4 4c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2z"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
            id: "Shape",
            d: "m59.164 34.771c-2.464-10.471-7.942-16.538-11.898-19.707 4.961.374 6.558 2.438 6.605 2.5.3132922.4472337.9274202.5604625 1.3796069.2543627.4521868-.3060999.5752224-.9183386.2763931-1.3753627-.072-.108-1.461-2.092-5.5-3 1.0327774-.8490128 1.6437413-2.106364 1.673-3.443-.1337149-2.21605597-1.6764268-4.09522747-3.824-4.658.0880504-.72234421.132797-1.44931011.134-2.177-.0010742-.6704002-.3379636-1.29567216-.8972517-1.6653131-.5592881-.36964095-1.2665755-.43447937-1.8837483-.1726869-.5048568.22857548-.9737688.52939332-1.392.893-.490755.50432069-1.1663364.78611399-1.87.78-.7025562.00494474-1.3767675-.27672898-1.867-.78-1.7623456-1.62766106-4.4796544-1.62766106-6.242 0-.4908328.50541883-1.1675068.78736633-1.872.78-.7024391.00583749-1.376677-.27599831-1.866-.78-.4171447-.36282613-.8846704-.66328215-1.388-.892-.616755-.26003778-1.3227042-.1943139-1.8808565.17510774s-.8945053.99356152-.8961435 1.66289226c0 2.488.492 6.926 3.607 9.906-1.63707.9954475-3.165988 2.1587255-4.562 3.471v-7.543c0-2.28-3.225-4-7.5-4s-7.5 1.72-7.5 4v10.075c-3.507.35-6 1.925-6 3.925v25.435c-2.416.649-4 1.965-4 3.565v5c0 2.28 3.225 4 7.5 4 3.823 0 6.8-1.377 7.387-3.3 1.7261589.9139563 3.6607978 1.3620288 5.613 1.3 4.275 0 7.5-1.72 7.5-4v-13c0-2.28-3.225-4-7.5-4-.5009454-.0003351-1.0015865.024697-1.5.075v-15.075c0-2.19-2.977-3.858-7-3.987v-7.244c1.7012299.8646888 3.5924826 1.2879855 5.5 1.231 1.9075174.0569855 3.7987701-.3663112 5.5-1.231v6.82c-.659.737-1.321 1.54-1.974 2.43-.2990252.445283-.193493 1.0471811.2391837 1.3641731.4326766.316992 1.0383882.2361727 1.3728163-.1831731.642267-.8695025 1.3305836-1.704028 2.062-2.5.008-.009.015-.018.023-.026 1.908941-2.1215143 4.1506085-3.9180232 6.637-5.319.4902069.2364593 1.0087963.4088743 1.543.513l-2.578 2.406c-.4037201.3772105-.4252105 1.0102798-.048 1.414.3772105.4037201 1.0102798.4252105 1.414.048l4-3.731h.319v3c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-3.005h.319l4 3.731c.2611611.2440124.6326631.3301613.9745646.2259954.3419015-.104166.6022596-.3828217.683-.731.0807403-.3481784-.0304035-.712983-.2915646-.9569954l-2.595-2.416c.5310027-.1050953 1.0462467-.2781877 1.533-.515 2.643 1.43 11.331 7.08 14.585 20.891 1.415 6.012.905 10.611-1.515 13.666-3.096 3.905-8.468 4.105-9.513 4.105h-14.19c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h14.19c1.7 0 7.505-.351 11.08-4.863 2.818-3.559 3.456-8.729 1.894-15.366zm-51.664 15.229c3.307 0 5.5 1.2 5.5 2s-2.193 2-5.5 2-5.5-1.2-5.5-2 2.193-2 5.5-2zm0 9c-3.307 0-5.5-1.2-5.5-2v-2.231c1.70122995.8646888 3.5924826 1.2879855 5.5 1.231 1.9075174.0569855 3.7987701-.3663112 5.5-1.231v2.231c0 .8-2.193 2-5.5 2zm13-2c-3.307 0-5.5-1.2-5.5-2v-10.231c1.7012299.8646888 3.5924826 1.2879855 5.5 1.231 1.9075174.0569855 3.7987701-.3663112 5.5-1.231v10.231c0 .8-2.193 2-5.5 2zm5.5-15c0 .8-2.193 2-5.5 2s-5.5-1.2-5.5-2 2.193-2 5.5-2 5.5 1.2 5.5 2zm-13 0v7.231c-1.7012299-.8646888-3.5924826-1.2879855-5.5-1.231-.50094542-.0003351-1.00158648.024697-1.5.075v-22.306c1.70122995.8646888 3.5924826 1.2879855 5.5 1.231 1.9075174.0569855 3.7987701-.3663112 5.5-1.231v12.666c-2.416.649-4 1.965-4 3.565zm4-19c0 .8-2.193 2-5.5 2s-5.5-1.2-5.5-2 2.193-2 5.5-2 5.5 1.2 5.5 2zm.5-12c-3.307 0-5.5-1.2-5.5-2s2.193-2 5.5-2 5.5 1.2 5.5 2-2.193 2-5.5 2zm32.2-1c0 1.639-1.775 2.984-4 3-.372166-.0023545-.742987-.0449352-1.106-.127 1.4513822-1.5484467 2.4601961-3.45832018 2.921-5.53 1.2037057.35466779 2.0694756 1.40745976 2.185 2.657zm-20.832-6.22c.8445081.79133617 1.9607007 1.22807609 3.118 1.22 1.1580078.00869278 2.2750454-.42809756 3.12-1.22.4943009-.49906005 1.1675796-.77983262 1.87-.77983262s1.3756991.28077257 1.87.77983262c.8449823.79249552 1.9625715 1.22936153 3.121 1.22 1.1583526.00894999 2.2757944-.42785839 3.121-1.22.277126-.24492313.5854745-.45205799.917-.616 0 1.857-.345 6.448-3.567 8.965-.7248626.5443964-1.6035782.8451202-2.51.859.8656839-1.486887 1.5508604-3.07175631 2.041-4.721.0957472-.34440403.0004839-.71372699-.2499052-.96884849-.250389-.2551215-.6178638-.35728253-.964-.268s-.6183476.35644446-.7140948.70084849c-.5538471 1.879763-1.4053057 3.6586431-2.522 5.269h-1.028c-1.1144846-1.6117791-1.9660791-3.3902379-2.523-5.269-.1482885-.53212635-.6998736-.84328843-1.232-.69499998-.5321263.14828845-.8432884.69987363-.695 1.23199998.4906109 1.65066414 1.1764605 3.2368802 2.043 4.725-.9245715-.0047456-1.8229903-.3073745-2.562-.863-3.222-2.516-3.567-7.107-3.567-8.958.3313843.15877018.6387399.3634495.913.608z"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
            id: "Shape",
            d: "m54.135 47.653c1.1851892-1.6296647 1.8275238-3.5909544 1.836-5.606.0127714-.2649617-.080257-.5241413-.2586124-.720501-.1783555-.1963598-.427422-.3138084-.6923876-.326499-.5491739-.019453-1.0137115.4024909-1.047.951.0075252 1.5970082-.4844214 3.1564125-1.407 4.46-1.951 2.464-5.653 2.589-6.376 2.589-.5522847 0-1 .4477153-1 1s.4477153 1 1 1c.884 0 5.421-.161 7.945-3.347z"
          })]
        })
      })
    }),
    background: "red"
  },
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save() {
  const blockprops = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: "Dummy-first-class-frontend-here"
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
    ...blockprops,
    children: "First Block – hello from the saved content!D"
  });
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/first-block","version":"0.1.0","title":"First Block","category":"media","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"anchor":true,"align":true,"color":{"gradients":true,"background":true,"text":true},"spacing":{"margin":true,"padding":true,"blockGap":true},"typography":{"fontSize":true,"lineHeight":true,"textAlign":true}},"textdomain":"first-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfirst_block"] = self["webpackChunkfirst_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map