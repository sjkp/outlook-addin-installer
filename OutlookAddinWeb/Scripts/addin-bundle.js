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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 176);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(17));



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(84));



/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */

Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = _root.__themeState__ = _root.__themeState__ || {
    theme: undefined,
    lastStyleElement: undefined,
    registeredStyles: []
};
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 */
function loadStyles(styles) {
    var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
    if (_injectStylesWithCssText === undefined) {
        _injectStylesWithCssText = shouldUseCssText();
    }
    applyThemableStyles(styleParts);
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStyles) {
    _themeState.loadStyles = loadStyles;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray), stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray, styleRecord);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 */
function clearStyles() {
    _themeState.registeredStyles.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
    _themeState.registeredStyles = [];
}
exports.clearStyles = clearStyles;
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        for (var _i = 0, _a = _themeState.registeredStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            applyThemableStyles(styleRecord.themableStyle, styleRecord);
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles));
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, unless "DEBUG" is false
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && (typeof DEBUG === 'undefined' || DEBUG)) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return resolvedArray.join('');
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(resolveThemableArray(styleArray)));
    if (styleRecord) {
        head.replaceChild(styleElement, styleRecord.styleElement);
        styleRecord.styleElement = styleElement;
    }
    else {
        head.appendChild(styleElement);
    }
    if (!styleRecord) {
        _themeState.registeredStyles.push({
            styleElement: styleElement,
            themableStyle: styleArray
        });
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray);
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(175)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DirectionalHint;
(function (DirectionalHint) {
    /**
     * Appear above the target element, with the left edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topLeftEdge"] = 0] = "topLeftEdge";
    /**
     * Appear above the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topCenter"] = 1] = "topCenter";
    /**
     * Appear above the target element, with the right edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topRightEdge"] = 2] = "topRightEdge";
    /**
     * Appear above the target element, aligning with the target element such that the callout tends toward the center of the screen.
     */
    DirectionalHint[DirectionalHint["topAutoEdge"] = 3] = "topAutoEdge";
    /**
     * Appear below the target element, with the left edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomLeftEdge"] = 4] = "bottomLeftEdge";
    /**
     * Appear below the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomCenter"] = 5] = "bottomCenter";
    /**
     * Appear below the target element, with the right edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomRightEdge"] = 6] = "bottomRightEdge";
    /**
     * Appear below the target element, aligning with the target element such that the callout tends toward the center of the screen.
     */
    DirectionalHint[DirectionalHint["bottomAutoEdge"] = 7] = "bottomAutoEdge";
    /**
     * Appear to the left of the target element, with the top edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftTopEdge"] = 8] = "leftTopEdge";
    /**
     * Appear to the left of the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftCenter"] = 9] = "leftCenter";
    /**
     * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftBottomEdge"] = 10] = "leftBottomEdge";
    /**
     * Appear to the right of the target element, with the top edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightTopEdge"] = 11] = "rightTopEdge";
    /**
     * Appear to the right of the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightCenter"] = 12] = "rightCenter";
    /**
     * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightBottomEdge"] = 13] = "rightBottomEdge";
})(DirectionalHint = exports.DirectionalHint || (exports.DirectionalHint = {}));



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = __webpack_require__(91);
exports.getTheme = theme_1.getTheme;
exports.loadTheme = theme_1.loadTheme;
var mergeStyles_1 = __webpack_require__(15);
exports.mergeStyles = mergeStyles_1.mergeStyles;
var mergeStyleSets_1 = __webpack_require__(90);
exports.mergeStyleSets = mergeStyleSets_1.mergeStyleSets;
var buildClassMap_1 = __webpack_require__(89);
exports.buildClassMap = buildClassMap_1.buildClassMap;



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: []
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: []
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}
exports.setVirtualParent = setVirtualParent;
function getVirtualParent(child) {
    var parent;
    if (child && isVirtualElement(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}
exports.getVirtualParent = getVirtualParent;
/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return child && (allowVirtualParents && getVirtualParent(child) ||
        child.parentNode && child.parentNode);
}
exports.getParent = getParent;
/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            isContained = false;
            while (child) {
                var nextParent = getParent(child);
                if (nextParent === parent) {
                    isContained = true;
                    break;
                }
                child = nextParent;
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}
exports.elementContains = elementContains;
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 */
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}
exports.setSSR = setSSR;
/** Helper to get the window object. */
function getWindow(rootElement) {
    if (_isSSR || typeof window === 'undefined') {
        return undefined;
    }
    else {
        return (rootElement &&
            rootElement.ownerDocument &&
            rootElement.ownerDocument.defaultView ?
            rootElement.ownerDocument.defaultView :
            window);
    }
}
exports.getWindow = getWindow;
/**
 * Helper to get the document object.
 */
function getDocument(rootElement) {
    if (_isSSR || typeof document === 'undefined') {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
    }
}
exports.getDocument = getDocument;
/**
 * Helper to get bounding client rect, works with window.
 */
function getRect(element) {
    var rect;
    if (element) {
        if (element === window) {
            rect = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}
exports.getRect = getRect;
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(2);
var Icon_1 = __webpack_require__(11);
var DirectionalHint_1 = __webpack_require__(5);
var ContextualMenu_1 = __webpack_require__(35);
var BaseButton = (function (_super) {
    __extends(BaseButton, _super);
    function BaseButton(props, rootClassName) {
        var _this = _super.call(this, props) || this;
        _this._warnDeprecations({
            rootProps: null,
            icon: 'iconProps',
            menuIconName: 'menuIconProps',
            toggled: 'checked'
        });
        _this._labelId = Utilities_1.getId();
        _this._descriptionId = Utilities_1.getId();
        _this._ariaDescriptionId = Utilities_1.getId();
        _this.state = {
            menuProps: null
        };
        return _this;
    }
    BaseButton.prototype.render = function () {
        var _a = this.props, ariaDescription = _a.ariaDescription, ariaLabel = _a.ariaLabel, className = _a.className, description = _a.description, disabled = _a.disabled, href = _a.href, iconProps = _a.iconProps, styles = _a.styles, checked = _a.checked, variantClassName = _a.variantClassName;
        this._classNames = this._getClassNames(styles, className, variantClassName, iconProps && iconProps.className, disabled, checked);
        var _b = this, _ariaDescriptionId = _b._ariaDescriptionId, _labelId = _b._labelId, _descriptionId = _b._descriptionId;
        var renderAsAnchor = !!href;
        var tag = renderAsAnchor ? 'a' : 'button';
        var nativeProps = Utilities_1.getNativeProps(Utilities_1.assign(renderAsAnchor ? {} : { type: 'button' }, this.props.rootProps, this.props), renderAsAnchor ? Utilities_1.anchorProperties : Utilities_1.buttonProperties, [
            'disabled' // Let disabled buttons be focused and styled as disabled.
        ]);
        // Check for ariaDescription, description or aria-describedby in the native props to determine source of aria-describedby
        // otherwise default to null.
        var ariaDescribedBy;
        if (ariaDescription) {
            ariaDescribedBy = _ariaDescriptionId;
        }
        else if (description) {
            ariaDescribedBy = _descriptionId;
        }
        else if (nativeProps['aria-describedby']) {
            ariaDescribedBy = nativeProps['aria-describedby'];
        }
        else {
            ariaDescribedBy = null;
        }
        var buttonProps = Utilities_1.assign(nativeProps, {
            className: this._classNames.root,
            ref: this._resolveRef('_buttonElement'),
            'disabled': disabled,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabel ? null : _labelId,
            'aria-describedby': ariaDescribedBy,
            'aria-disabled': disabled,
            'data-is-focusable': disabled ? false : true,
            'aria-pressed': checked
        });
        // Override onClick if contextualMenuItems passed in. Eventually allow _onToggleMenu to
        // be assigned to split button click if onClick already has a value
        if (this.props.menuProps) {
            Utilities_1.assign(buttonProps, {
                'onClick': this._onToggleMenu,
                'aria-expanded': this.state.menuProps ? true : false
            });
        }
        return this._onRenderContent(tag, buttonProps);
    };
    BaseButton.prototype.focus = function () {
        if (this._buttonElement) {
            this._buttonElement.focus();
        }
    };
    BaseButton.prototype._onRenderContent = function (tag, buttonProps) {
        var props = this.props;
        var baseClassName = props.baseClassName, styles = props.styles, menuIconName = props.menuIconName, menuProps = props.menuProps, _a = props.onRenderIcon, onRenderIcon = _a === void 0 ? this._onRenderIcon : _a, _b = props.onRenderText, onRenderText = _b === void 0 ? this._onRenderText : _b, _c = props.onRenderDescription, onRenderDescription = _c === void 0 ? this._onRenderDescription : _c, _d = props.onRenderAriaDescription, onRenderAriaDescription = _d === void 0 ? this._onRenderAriaDescription : _d, _e = props.onRenderChildren, onRenderChildren = _e === void 0 ? this._onRenderChildren : _e, _f = props.onRenderMenu, onRenderMenu = _f === void 0 ? this._onRenderMenu : _f, _g = props.onRenderMenuIcon, onRenderMenuIcon = _g === void 0 ? this._onRenderMenuIcon : _g;
        var className = Styling_1.mergeStyles(baseClassName + '-flexContainer', styles.flexContainer);
        return React.createElement(tag, buttonProps, React.createElement('div', { className: className }, onRenderIcon(props, this._onRenderIcon), onRenderText(props, this._onRenderText), onRenderDescription(props, this._onRenderDescription), onRenderAriaDescription(props, this._onRenderAriaDescription), onRenderChildren(props, this._onRenderChildren), (menuProps || menuIconName || this.props.onRenderMenuIcon) && onRenderMenuIcon(this.props, this._onRenderMenuIcon), this.state.menuProps && onRenderMenu(menuProps, this._onRenderMenu)));
    };
    BaseButton.prototype._onRenderIcon = function (buttonProps, defaultRender) {
        var _a = this.props, baseClassName = _a.baseClassName, disabled = _a.disabled, icon = _a.icon, iconProps = _a.iconProps, styles = _a.styles, checked = _a.checked;
        if (icon || iconProps) {
            iconProps = iconProps || {
                iconName: icon
            };
        }
        return iconProps && (React.createElement(Icon_1.Icon, __assign({}, iconProps, { className: this._classNames.icon })));
    };
    BaseButton.prototype._onRenderText = function () {
        var _a = this.props, children = _a.children, disabled = _a.disabled, styles = _a.styles, text = _a.text;
        // For backwards compat, we should continue to take in the text content from children.
        if (text === undefined && typeof (children) === 'string') {
            text = children;
        }
        return text && (React.createElement("span", { className: this._classNames.label, id: this._labelId }, text));
    };
    BaseButton.prototype._onRenderChildren = function () {
        var children = this.props.children;
        // If children is just a string, either it or the text will be rendered via onRenderLabel
        // If children is another component, it will be rendered after text
        if (typeof (children) === 'string') {
            return null;
        }
        return children;
    };
    BaseButton.prototype._onRenderDescription = function (props) {
        var description = this.props.description;
        // ms-Button-description is only shown when the button type is compound.
        // In other cases it will not be displayed.
        return description ? (React.createElement("span", { className: this._classNames.description, id: this._descriptionId }, description)) : (null);
    };
    BaseButton.prototype._onRenderAriaDescription = function () {
        var _a = this.props, ariaDescription = _a.ariaDescription, styles = _a.styles;
        // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
        // otherwise it will be assigned to descriptionSpan.
        return ariaDescription ? (React.createElement("span", { className: styles.screenReaderText, id: this._ariaDescriptionId }, ariaDescription)) : (null);
    };
    BaseButton.prototype._onRenderMenuIcon = function (props) {
        var _a = this.props, baseClassName = _a.baseClassName, checked = _a.checked, disabled = _a.disabled, menuIconName = _a.menuIconName, menuIconProps = _a.menuIconProps, styles = _a.styles;
        if (menuIconProps === undefined) {
            menuIconProps = {
                iconName: menuIconName === undefined ? 'ChevronDown' : menuIconName
            };
        }
        return (menuIconProps ?
            React.createElement(Icon_1.Icon, __assign({}, menuIconProps, { className: Styling_1.mergeStyles(baseClassName + "-icon", styles.menuIcon, disabled && styles.menuIconDisabled, !disabled && checked && styles.menuIconChecked, menuIconProps.className) }))
            :
                null);
    };
    BaseButton.prototype._onRenderMenu = function (menuProps) {
        return (React.createElement(ContextualMenu_1.ContextualMenu, __assign({ isBeakVisible: true, directionalHint: DirectionalHint_1.DirectionalHint.bottomLeftEdge }, menuProps, { className: Styling_1.mergeStyles('ms-BaseButton-menuhost', menuProps.className), target: this._buttonElement, labelElementId: this._labelId, onDismiss: this._onToggleMenu })));
    };
    BaseButton.prototype._onToggleMenu = function () {
        var menuProps = this.props.menuProps;
        var currentMenuProps = this.state.menuProps;
        this.setState({ menuProps: currentMenuProps ? null : menuProps });
    };
    BaseButton.prototype._getClassNames = function (styles, className, variantClassName, iconClassName, disabled, checked) {
        return {
            root: Styling_1.mergeStyles(className, 'ms-Button', variantClassName, styles.root, checked && [
                'is-checked',
                styles.rootChecked
            ], disabled && [
                'is-disabled',
                styles.rootDisabled
            ], !disabled && {
                ':hover': styles.rootHovered,
                ':hover .ms-Button-description': styles.descriptionHovered,
                ':active': styles.rootPressed,
                ':active .ms-Button-description': styles.descriptionPressed
            }, disabled && checked && [
                styles.rootCheckedDisabled
            ], !disabled && checked && {
                ':hover': styles.rootCheckedHovered,
                ':active': styles.rootCheckedPressed
            }),
            flexContainer: Styling_1.mergeStyles('ms-Button-flexContainer', styles.flexContainer),
            icon: Styling_1.mergeStyles('ms-Button-icon', iconClassName, styles.icon, checked && styles.iconChecked, disabled && styles.iconDisabled),
            label: Styling_1.mergeStyles('ms-Button-label', styles.label, checked && styles.labelChecked, disabled && styles.labelDisabled),
            menuIcon: Styling_1.mergeStyles('ms-Button-menuIcon', styles.menuIcon, checked && styles.menuIconChecked, disabled && styles.menuIconDisabled),
            description: Styling_1.mergeStyles('ms-Button-description', styles.description, checked && styles.descriptionChecked, disabled && styles.descriptionDisabled),
            screenReaderText: Styling_1.mergeStyles('ms-Button-screenReaderText', styles.screenReaderText)
        };
    };
    return BaseButton;
}(Utilities_1.BaseComponent));
BaseButton.defaultProps = {
    baseClassName: 'ms-Button',
    classNames: {},
    styles: {}
};
__decorate([
    Utilities_1.autobind
], BaseButton.prototype, "_onRenderIcon", null);
__decorate([
    Utilities_1.autobind
], BaseButton.prototype, "_onRenderText", null);
__decorate([
    Utilities_1.autobind
], BaseButton.prototype, "_onRenderChildren", null);
__decorate([
    Utilities_1.autobind
], BaseButton.prototype, "_onRenderDescription", null);
__decorate([
    Utilities_1.autobind
], BaseButton.prototype, "_onRenderAriaDescription", null);
__decorate([
    Utilities_1.autobind
], BaseButton.prototype, "_onRenderMenuIcon", null);
__decorate([
    Utilities_1.autobind
], BaseButton.prototype, "_onRenderMenu", null);
__decorate([
    Utilities_1.autobind
], BaseButton.prototype, "_onToggleMenu", null);
__decorate([
    Utilities_1.memoize
], BaseButton.prototype, "_getClassNames", null);
exports.BaseButton = BaseButton;



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
var styles = {
    root: 'root_c3ac5c1f',
    rootIsActionable: 'rootIsActionable_c3ac5c1f',
    location: 'location_c3ac5c1f',
    title: 'title_c3ac5c1f',
    rootIsCompact: 'rootIsCompact_c3ac5c1f',
    preview: 'preview_c3ac5c1f',
    icon: 'icon_c3ac5c1f',
    activity: 'activity_c3ac5c1f',
    actions: 'actions_c3ac5c1f',
    action: 'action_c3ac5c1f',
    views: 'views_c3ac5c1f',
    activityIsMultiplePeople: 'activityIsMultiplePeople_c3ac5c1f',
    avatar: 'avatar_c3ac5c1f',
    activityDetails: 'activityDetails_c3ac5c1f',
    avatars: 'avatars_c3ac5c1f',
    name: 'name_c3ac5c1f',
    activityActivity: 'activityActivity_c3ac5c1f',
    previewIsFileList: 'previewIsFileList_c3ac5c1f',
    fileList: 'fileList_c3ac5c1f',
    fileListIcon: 'fileListIcon_c3ac5c1f',
    fileListMore: 'fileListMore_c3ac5c1f',
};
load_themed_styles_1.loadStyles([{ "rawString": ".root_c3ac5c1f{-webkit-font-smoothing:antialiased;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";border:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";box-sizing:border-box;max-width:320px;min-width:206px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.rootIsActionable_c3ac5c1f:hover{cursor:pointer;border-color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.rootIsActionable_c3ac5c1f:hover:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;border:1px solid " }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";pointer-events:none}.location_c3ac5c1f+.title_c3ac5c1f{padding-top:4px}.rootIsCompact_c3ac5c1f{border-bottom:2px solid " }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";display:-webkit-box;display:-ms-flexbox;display:flex;max-width:480px;height:109px}.rootIsCompact_c3ac5c1f .ms-DocumentCard-details{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.rootIsCompact_c3ac5c1f .preview_c3ac5c1f{border-bottom:none;max-height:106px;max-width:144px}.rootIsCompact_c3ac5c1f .preview_c3ac5c1f .icon_c3ac5c1f .ms-Image-image{max-height:32px;max-width:32px}html[dir=ltr] .rootIsCompact_c3ac5c1f .preview_c3ac5c1f{border-right:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}html[dir=rtl] .rootIsCompact_c3ac5c1f .preview_c3ac5c1f{border-left:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.rootIsCompact_c3ac5c1f .title_c3ac5c1f{padding:12px 16px 8px 16px;font-size:15px;font-weight:400;line-height:16px}.rootIsCompact_c3ac5c1f .activity_c3ac5c1f{padding-bottom:12px}.actions_c3ac5c1f{height:34px;padding:4px 12px;position:relative}.action_c3ac5c1f{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";cursor:pointer}html[dir=ltr] .action_c3ac5c1f{float:left}html[dir=rtl] .action_c3ac5c1f{float:right}[dir=ltr] .action_c3ac5c1f{margin-right:4px}[dir=rtl] .action_c3ac5c1f{margin-left:4px}.action_c3ac5c1f .ms-Button{font-size:16px;height:34px;width:34px}.action_c3ac5c1f .ms-Button:hover .ms-Button-icon{color:#1174c3;cursor:pointer}.views_c3ac5c1f{line-height:34px}html[dir=ltr] .views_c3ac5c1f{text-align:right}html[dir=rtl] .views_c3ac5c1f{text-align:left}.views_c3ac5c1f .ms-Icon{font-size:16px;vertical-align:top}[dir=ltr] .views_c3ac5c1f .ms-Icon{margin-right:4px}[dir=rtl] .views_c3ac5c1f .ms-Icon{margin-left:4px}.activity_c3ac5c1f{padding:8px 16px;position:relative}html[dir=ltr] .activityIsMultiplePeople_c3ac5c1f .avatar_c3ac5c1f:nth-of-type(2){margin-left:-16px}html[dir=rtl] .activityIsMultiplePeople_c3ac5c1f .avatar_c3ac5c1f:nth-of-type(2){margin-right:-16px}[dir=ltr] .activityIsMultiplePeople_c3ac5c1f .activityDetails_c3ac5c1f{left:72px}[dir=rtl] .activityIsMultiplePeople_c3ac5c1f .activityDetails_c3ac5c1f{right:72px}.avatars_c3ac5c1f{height:32px}html[dir=ltr] .avatars_c3ac5c1f{margin-left:-2px}html[dir=rtl] .avatars_c3ac5c1f{margin-right:-2px}.avatar_c3ac5c1f{display:inline-block;vertical-align:top;position:relative;text-align:center;width:32px;height:32px}.avatar_c3ac5c1f:after{content:'';position:absolute;left:-1px;top:-1px;right:-1px;bottom:-1px;border:2px solid #fafafa;border-radius:50%}.activityDetails_c3ac5c1f{height:32px;position:absolute;top:8px;width:calc(100% - 72px)}[dir=ltr] .activityDetails_c3ac5c1f{left:56px}[dir=rtl] .activityDetails_c3ac5c1f{right:56px}.activityActivity_c3ac5c1f,.name_c3ac5c1f{display:block;font-size:12px;font-weight:400;color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": ";line-height:15px;height:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.name_c3ac5c1f{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:600}.location_c3ac5c1f{font-size:12px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";display:block;padding:8px 16px;position:relative;text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.location_c3ac5c1f:hover{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";cursor:pointer}.preview_c3ac5c1f{border-bottom:2px solid " }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";position:relative;background-color:" }, { "theme": "neutralLighterAlt", "defaultValue": "#f8f8f8" }, { "rawString": ";overflow:hidden}.preview_c3ac5c1f.previewIsFileList_c3ac5c1f{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.icon_c3ac5c1f{bottom:10px;position:absolute}[dir=ltr] .icon_c3ac5c1f{left:10px}[dir=rtl] .icon_c3ac5c1f{right:10px}.fileList_c3ac5c1f{padding:16px 16px 0 16px;list-style-type:none;margin:0}html[dir=rtl] .fileList_c3ac5c1f{padding:16px 16px 0 16px}.fileList_c3ac5c1f li{height:16px;line-height:16px;margin-bottom:8px;overflow:hidden;position:relative;text-overflow:ellipsis;white-space:nowrap}[dir=ltr] .fileList_c3ac5c1f li{padding-left:24px}[dir=rtl] .fileList_c3ac5c1f li{padding-right:24px}.fileList_c3ac5c1f a{font-size:12px;text-decoration:none;color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.fileList_c3ac5c1f a:hover{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.fileListIcon_c3ac5c1f{position:absolute;top:0}[dir=ltr] .fileListIcon_c3ac5c1f{left:0}[dir=rtl] .fileListIcon_c3ac5c1f{right:0}.fileListMore_c3ac5c1f{padding:0 16px 8px 16px;display:block;font-size:12px}html[dir=rtl] .fileListMore_c3ac5c1f{padding:0 16px 8px 16px}.title_c3ac5c1f{padding:8px 16px;display:block;font-size:17px;font-weight:300;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:38px;line-height:21px;overflow:hidden;word-wrap:break-word}" }]);
module.exports = styles;
/* tslint:enable */ 



/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationStyles_1 = __webpack_require__(85);
exports.AnimationStyles = AnimationStyles_1.AnimationStyles;
var DefaultPalette_1 = __webpack_require__(27);
exports.DefaultPalette = DefaultPalette_1.DefaultPalette;
var DefaultFontStyles_1 = __webpack_require__(86);
exports.DefaultFontStyles = DefaultFontStyles_1.DefaultFontStyles;
exports.FontSizes = DefaultFontStyles_1.FontSizes;
exports.FontWeights = DefaultFontStyles_1.FontWeights;
var IconCodes_1 = __webpack_require__(87);
exports.IconCodes = IconCodes_1.IconCodes;
var getFocusStyle_1 = __webpack_require__(88);
exports.getFocusStyle = getFocusStyle_1.getFocusStyle;



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(160));



/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Glamor = __webpack_require__(34);
var rtl_css_js_1 = __webpack_require__(174);
var index_1 = __webpack_require__(17);
function _initializeGlamor() {
    // force speedy.
    // tslint:disable-next-line:no-string-literal
    if (!Glamor['styleSheet'] || !Glamor['styleSheet'].isSpeedy) {
        // tslint:disable-next-line:no-string-literal
        Glamor['speedy'](true);
    }
    // tslint:disable-next-line:no-string-literal
    Glamor['plugins'].add(function (_a) {
        var selector = _a.selector, style = _a.style;
        return ({
            selector: selector,
            style: index_1.getRTL() ? rtl_css_js_1.default(style) : style
        });
    });
}
_initializeGlamor();
/**
 * Defines a :before pseudo-selector scoped style object for the given raw style.
 */
function before(style) {
    return Glamor.before(style);
}
exports.before = before;
/**
 * Defines a :after pseudo-selector scoped style object for the given raw style.
 */
function after(style) {
    return Glamor.after(style);
}
exports.after = after;
/**
 * Defines a style under a rule which is prefixed by the given selector.
 */
function parent(selector, style) {
    return Glamor.parent(selector, style);
}
exports.parent = parent;
/**
 * Registers a global rule. Be aware: registering global rules are not scoped;
 * Two versions of a global rule will colide with each other.
 */
function insertGlobal(selector, style) {
    Glamor.insertGlobal(selector, style);
}
exports.insertGlobal = insertGlobal;
/**
 * Registers a font face.
 */
function fontFace(font) {
    return Glamor.fontFace(font);
}
exports.fontFace = fontFace;
/**
 * Register a keyframe definition and returns the unique name to be used for
 * the animation name.
 */
function keyframes(timeline) {
    return Glamor.keyframes(timeline);
}
exports.keyframes = keyframes;



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(19);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var glamor_1 = __webpack_require__(34);
/**
 * Takes a collection of collection of styles, defined in various formats, and compresses them into
 * a single thing of one format to return.
 * If any class names (strings) are passed in, it will return a list of space-separated class names,
 * using glamor to generate a class name for all passed in style objects.
 * Otherwise, all style objects passed in will be compressed into a single IProcessedStyle.
 *
 * @export
 * @param {(...(IStyle | string)[])} args
 * @returns {IStyle}
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var rules = [];
    function _parseArgs(theArgs) {
        for (var _i = 0, theArgs_1 = theArgs; _i < theArgs_1.length; _i++) {
            var arg = theArgs_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    classes.push(arg);
                }
                else if (Array.isArray(arg)) {
                    _parseArgs(arg);
                }
                else {
                    rules.push(arg);
                }
            }
        }
    }
    _parseArgs(args);
    var rulesObject = rules.length ? glamor_1.css.apply(void 0, rules) : null;
    if (classes.length) {
        if (rulesObject) {
            classes.push(rulesObject.toString());
        }
        return classes.join(' ');
    }
    return rulesObject;
}
exports.mergeStyles = mergeStyles;



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* tslint:disable:no-string-literal */

Object.defineProperty(exports, "__esModule", { value: true });
/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onclick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 */
var EventGroup = (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     */
    EventGroup.raise = function (target, eventName, eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent, true);
                ev['args'] = eventArgs;
                retVal = target.dispatchEvent(ev);
            }
            else if (document['createEventObject']) {
                var evObj = document['createEventObject'](eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                for (var id in eventRecords) {
                    if (eventRecords.hasOwnProperty(id)) {
                        var eventRecordList = eventRecords[id];
                        for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                            var record = eventRecordList[listIndex];
                            if (record.objectCallback) {
                                retVal = record.objectCallback.call(record.parent, eventArgs);
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return !!target && (target.addEventListener || target instanceof HTMLElement);
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /** On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    EventGroup.prototype.on = function (target, eventName, callback, useCapture) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, useCapture);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                objectCallback: null,
                elementCallback: null,
                useCapture: useCapture
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] = events[eventName] || {
                count: 0
            };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        /* ErrorHelper.log(e); */
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    /* tslint:disable:ban-native-functions */
                    target.addEventListener(eventName, processElementEvent, useCapture);
                    /* tslint:enable:ban-native-functions */
                }
                else if (target.attachEvent) {
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    EventGroup.prototype.off = function (target, eventName, callback, useCapture) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                ((typeof useCapture !== 'boolean') || useCapture === eventRecord.useCapture)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
                    }
                    else if (eventRecord.target.detachEvent) {
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = this._parent.__declaredEvents = this._parent.__declaredEvents || {};
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    return EventGroup;
}());
EventGroup._uniqueId = 0;
exports.EventGroup = EventGroup;



/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(28));
__export(__webpack_require__(92));
__export(__webpack_require__(29));
__export(__webpack_require__(93));
__export(__webpack_require__(94));
__export(__webpack_require__(16));
__export(__webpack_require__(30));
__export(__webpack_require__(95));
__export(__webpack_require__(96));
__export(__webpack_require__(97));
__export(__webpack_require__(98));
__export(__webpack_require__(99));
__export(__webpack_require__(7));
__export(__webpack_require__(100));
__export(__webpack_require__(101));
__export(__webpack_require__(102));
__export(__webpack_require__(103));
__export(__webpack_require__(104));
__export(__webpack_require__(18));
__export(__webpack_require__(106));
__export(__webpack_require__(107));
__export(__webpack_require__(108));
__export(__webpack_require__(109));
__export(__webpack_require__(31));
__export(__webpack_require__(111));
__export(__webpack_require__(32));
__export(__webpack_require__(105));



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var _global = (typeof window !== 'undefined' && window) || process;
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
function checkProperties(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || (b[propName] !== a[propName])) {
                return false;
            }
        }
    }
    return true;
}
// Compare a to b and b to a
function shallowCompare(a, b) {
    return checkProperties(a, b) && checkProperties(b, a);
}
exports.shallowCompare = shallowCompare;
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
exports.assign = assign;
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) &&
                    !isAllowed || isAllowed(propName)) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
exports.filteredAssign = filteredAssign;
/** Generates a unique id in the global scope (this spans across duplicate copies of the same library.) */
function getId(prefix) {
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix || '') + index;
}
exports.getId = getId;


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(162));



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(2);
var noOutline = {
    outline: 0
};
var iconStyle = {
    fontSize: Styling_1.FontSizes.icon,
    margin: '0 4px',
    height: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    verticalAlign: 'middle'
};
/**
 * Gets the base button styles. Note: because it is a base class to be used with the `mergeRules`
 * helper, it should have values for all class names in the interface. This let `mergeRules` optimize
 * mixing class names together.
 */
exports.getStyles = Utilities_1.memoizeFunction(function (theme, focusInset, focusColor) {
    if (focusInset === void 0) { focusInset = '0'; }
    if (focusColor === void 0) { focusColor = theme.palette.neutralSecondary; }
    return {
        root: [
            Styling_1.getFocusStyle(theme, focusInset, focusColor),
            theme.fonts.medium,
            {
                // this transparent border converts to the correct colors in HC mode
                boxSizing: 'border-box',
                border: '1px solid transparent',
                userSelect: 'none',
                display: 'inline-block',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                verticalAlign: 'top',
                padding: '0 16px'
            }
        ],
        rootDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            color: theme.palette.neutralTertiary,
            cursor: 'default',
            pointerEvents: 'none',
            ':hover': noOutline,
            ':focus': noOutline
        },
        flexContainer: {
            display: 'flex',
            height: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
        icon: iconStyle,
        menuIcon: [
            iconStyle,
            {
                fontSize: Styling_1.FontSizes.small
            }
        ],
        label: {
            margin: '0 4px',
            lineHeight: '100%'
        },
        screenReaderText: {
            position: 'absolute',
            width: '1px',
            height: '1px',
            margin: '-1px',
            padding: 0,
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            border: 0
        }
    };
});



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(22);
var DEFAULT_BUTTON_HEIGHT = '32px';
var DEFAULT_BUTTON_MINWIDTH = '80px';
var DEFAULT_PADDING = '0 16px';
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles, focusInset, focusColor) {
    if (theme === void 0) { theme = Styling_1.getTheme(); }
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme, focusInset, focusColor);
    var defaultButtonStyles = {
        root: {
            minWidth: DEFAULT_BUTTON_MINWIDTH,
            height: DEFAULT_BUTTON_HEIGHT,
            backgroundColor: theme.palette.neutralLighter,
            color: theme.palette.neutralPrimary
        },
        rootHovered: {
            backgroundColor: theme.palette.neutralLight,
            color: theme.palette.black
        },
        rootPressed: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white
        },
        rootChecked: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white
        },
        label: {
            fontWeight: 'bold' // theme.fontWeights.semibold,
        }
    };
    return Styling_1.mergeStyleSets(baseButtonStyles, defaultButtonStyles, customStyles);
});



/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PersonaSize;
(function (PersonaSize) {
    PersonaSize[PersonaSize["tiny"] = 0] = "tiny";
    PersonaSize[PersonaSize["extraExtraSmall"] = 1] = "extraExtraSmall";
    PersonaSize[PersonaSize["extraSmall"] = 2] = "extraSmall";
    PersonaSize[PersonaSize["small"] = 3] = "small";
    PersonaSize[PersonaSize["regular"] = 4] = "regular";
    PersonaSize[PersonaSize["large"] = 5] = "large";
    PersonaSize[PersonaSize["extraLarge"] = 6] = "extraLarge";
    PersonaSize[PersonaSize["size28"] = 7] = "size28";
})(PersonaSize = exports.PersonaSize || (exports.PersonaSize = {}));
var PersonaPresence;
(function (PersonaPresence) {
    PersonaPresence[PersonaPresence["none"] = 0] = "none";
    PersonaPresence[PersonaPresence["offline"] = 1] = "offline";
    PersonaPresence[PersonaPresence["online"] = 2] = "online";
    PersonaPresence[PersonaPresence["away"] = 3] = "away";
    PersonaPresence[PersonaPresence["dnd"] = 4] = "dnd";
    PersonaPresence[PersonaPresence["blocked"] = 5] = "blocked";
    PersonaPresence[PersonaPresence["busy"] = 6] = "busy";
})(PersonaPresence = exports.PersonaPresence || (exports.PersonaPresence = {}));
var PersonaInitialsColor;
(function (PersonaInitialsColor) {
    PersonaInitialsColor[PersonaInitialsColor["lightBlue"] = 0] = "lightBlue";
    PersonaInitialsColor[PersonaInitialsColor["blue"] = 1] = "blue";
    PersonaInitialsColor[PersonaInitialsColor["darkBlue"] = 2] = "darkBlue";
    PersonaInitialsColor[PersonaInitialsColor["teal"] = 3] = "teal";
    PersonaInitialsColor[PersonaInitialsColor["lightGreen"] = 4] = "lightGreen";
    PersonaInitialsColor[PersonaInitialsColor["green"] = 5] = "green";
    PersonaInitialsColor[PersonaInitialsColor["darkGreen"] = 6] = "darkGreen";
    PersonaInitialsColor[PersonaInitialsColor["lightPink"] = 7] = "lightPink";
    PersonaInitialsColor[PersonaInitialsColor["pink"] = 8] = "pink";
    PersonaInitialsColor[PersonaInitialsColor["magenta"] = 9] = "magenta";
    PersonaInitialsColor[PersonaInitialsColor["purple"] = 10] = "purple";
    PersonaInitialsColor[PersonaInitialsColor["black"] = 11] = "black";
    PersonaInitialsColor[PersonaInitialsColor["orange"] = 12] = "orange";
    PersonaInitialsColor[PersonaInitialsColor["red"] = 13] = "red";
    PersonaInitialsColor[PersonaInitialsColor["darkRed"] = 14] = "darkRed";
})(PersonaInitialsColor = exports.PersonaInitialsColor || (exports.PersonaInitialsColor = {}));



/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var DocumentCard_1 = __webpack_require__(36);
var Image_1 = __webpack_require__(21);
var CasesItem = (function (_super) {
    __extends(CasesItem, _super);
    function CasesItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CasesItem.prototype.render = function () {
        var item = this.props.case;
        var previewProps = {
            getOverflowDocumentCountText: function (overflowCount) { return overflowCount > 0 ? "+" + overflowCount + " more" : ""; },
            previewImages: item.items.map(function (i) {
                return {
                    name: i.title,
                    url: i.link,
                    imageFit: Image_1.ImageFit.cover,
                    width: 400,
                    height: 196,
                    previewImageSrc: 'dist/document-preview.png',
                    iconSrc: "./images/email.png"
                };
            })
        };
        var cardTitle = item.items.length > 0 ? item.items[0].title : "Click to see more details";
        var documentStyle = {
            marginBottom: "15px"
        };
        var getDate = function (date) {
            return date.getDate() + "/" + date.getMonth() + " - " + date.getFullYear();
        };
        var pStyle = {
            margin: "0 20px"
        };
        return (React.createElement("div", { style: documentStyle },
            React.createElement(DocumentCard_1.DocumentCard, { onClickHref: 'https://www.delegate.dk', accentColor: '#ce4b1f' },
                React.createElement(DocumentCard_1.DocumentCardPreview, __assign({}, previewProps)),
                React.createElement(DocumentCard_1.DocumentCardLocation, { location: item.caseNumber, locationHref: 'http://www.delegate.com', ariaLabel: 'Casenumber' }),
                React.createElement(DocumentCard_1.DocumentCardTitle, { title: item.title }),
                React.createElement("p", { style: pStyle }, item.description),
                React.createElement(DocumentCard_1.DocumentCardActivity, { activity: getDate(item.date), people: [
                        { name: 'Anders Andersen', profileImageSrc: 'images/anders.jpg' },
                        { name: 'Roko Kolar', profileImageSrc: '', initials: 'JH' },
                        { name: 'Greta Lundberg', profileImageSrc: 'images/persona-female.png' }
                    ] }),
                React.createElement(DocumentCard_1.DocumentCardActions, { actions: [
                        {
                            icon: 'Share',
                            onClick: function (ev) {
                                console.log('You clicked the share action.');
                                ev.preventDefault();
                                ev.stopPropagation();
                            },
                            ariaLabel: 'share action'
                        },
                        {
                            icon: 'EditMirrored',
                            onClick: function (ev) {
                                console.log('You clicked the pin action.');
                                ev.preventDefault();
                                ev.stopPropagation();
                            },
                            ariaLabel: 'pin action'
                        },
                        {
                            icon: 'TemporaryUser',
                            onClick: function (ev) {
                                console.log('You clicked the ringer action.');
                                ev.preventDefault();
                                ev.stopPropagation();
                            },
                            ariaLabel: 'ringer action'
                        },
                    ], views: 432 }))));
    };
    return CasesItem;
}(React.Component));
exports.default = CasesItem;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d7',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#212121',
    neutralPrimary: '#333333',
    neutralPrimaryAlt: '#3c3c3c',
    neutralSecondary: '#666666',
    neutralTertiary: '#a6a6a6',
    neutralTertiaryAlt: '#c8c8c8',
    neutralQuaternary: '#d0d0d0',
    neutralQuaternaryAlt: '#dadada',
    neutralLight: '#eaeaea',
    neutralLighter: '#f4f4f4',
    neutralLighterAlt: '#f8f8f8',
    white: '#ffffff',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a80000',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d7',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a'
};



/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 */

Object.defineProperty(exports, "__esModule", { value: true });
var Async = (function () {
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () { };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(id);
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(id);
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(id);
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(id);
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            /* tslint:disable:ban-native-functions */
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    delete _this._timeoutIds[timeoutId];
                    callback.apply(_this._parent);
                }
                catch (e) {
                    if (_this._onErrorHandler) {
                        _this._onErrorHandler(e);
                    }
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearTimeout(id);
            delete this._timeoutIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback) {
        var _this = this;
        var immediateId = 0;
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    delete _this._immediateIds[immediateId];
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     */
    Async.prototype.clearImmediate = function (id) {
        if (this._immediateIds && this._immediateIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
            delete this._immediateIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            /* tslint:disable:ban-native-functions */
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearInterval(id);
            delete this._intervalIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        var lastArgs;
        var timeoutId = null;
        if (options && typeof (options.leading) === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof (options.trailing) === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = (new Date).getTime();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = (new Date).getTime();
        var lastResult;
        var lastArgs;
        var timeoutId = null;
        if (options && typeof (options.leading) === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof (options.trailing) === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof (options.maxWait) === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var callback = function (userCall) {
            var now = (new Date).getTime();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastExecuteTime = now;
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback) {
        var _this = this;
        var animationFrameId = 0;
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    delete _this._animationFrameIds[animationFrameId];
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = window.requestAnimationFrame ?
                window.requestAnimationFrame(animationFrameCallback) :
                window.setTimeout(animationFrameCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id) {
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
            /* tslint:enable:ban-native-functions */
            delete this._animationFrameIds[id];
        }
    };
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());
exports.Async = Async;



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Async_1 = __webpack_require__(28);
var EventGroup_1 = __webpack_require__(16);
var warn_1 = __webpack_require__(32);
var BaseComponent = (function (_super) {
    __extends(BaseComponent, _super);
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.props = props;
        _this._shouldUpdateComponentRef = true;
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentWillMount',
            'componentDidMount',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentWillReceiveProps',
            'render',
            'componentDidUpdate',
            'componentWillUnmount'
        ]);
        return _this;
    }
    /**
     * When the component will receive props, make sure the componentRef is updated.
     */
    BaseComponent.prototype.componentWillReceiveProps = function (newProps, newContext) {
        this._updateComponentRef(this.props, newProps);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._updateComponentRef(undefined, this.props);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = (funcNameRegex).exec((this).constructor.toString());
                this.__className = (results && results.length > 1) ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new Async_1.Async(this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new EventGroup_1.EventGroup(this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            this.__resolves[refName] = function (ref) {
                return _this[refName] = ref;
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        if (this._shouldUpdateComponentRef &&
            ((!currentProps && newProps.componentRef) ||
                (currentProps && currentProps.componentRef !== newProps.componentRef))) {
            if (currentProps && currentProps.componentRef) {
                currentProps.componentRef(null);
            }
            if (newProps.componentRef) {
                newProps.componentRef(this);
            }
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        warn_1.warnDeprecations(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        warn_1.warnMutuallyExclusive(this.className, this.props, mutuallyExclusiveMap);
    };
    return BaseComponent;
}(React.Component));
exports.BaseComponent = BaseComponent;
/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
function _makeSafe(obj, prototype, methodName) {
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    if (classMethod || prototypeMethod) {
        obj[methodName] = function () {
            var retVal;
            try {
                if (prototypeMethod) {
                    retVal = prototypeMethod.apply(this, arguments);
                }
                if (classMethod !== prototypeMethod) {
                    retVal = classMethod.apply(this, arguments);
                }
            }
            catch (e) {
                var errorMessage = "Exception in " + obj.className + "." + methodName + "(): " + (typeof e === 'string' ? e : e.stack);
                if (BaseComponent.onError) {
                    BaseComponent.onError(errorMessage, e);
                }
            }
            return retVal;
        };
    }
}
BaseComponent.onError = function (errorMessage) {
    console.error(errorMessage);
    throw errorMessage;
};
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 */
function nullRender() { return null; }
exports.nullRender = nullRender;



/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["a"] = 65] = "a";
    KeyCodes[KeyCodes["backspace"] = 8] = "backspace";
    KeyCodes[KeyCodes["comma"] = 188] = "comma";
    KeyCodes[KeyCodes["del"] = 46] = "del";
    KeyCodes[KeyCodes["down"] = 40] = "down";
    KeyCodes[KeyCodes["end"] = 35] = "end";
    KeyCodes[KeyCodes["enter"] = 13] = "enter";
    KeyCodes[KeyCodes["escape"] = 27] = "escape";
    KeyCodes[KeyCodes["home"] = 36] = "home";
    KeyCodes[KeyCodes["left"] = 37] = "left";
    KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
    KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
    KeyCodes[KeyCodes["right"] = 39] = "right";
    KeyCodes[KeyCodes["semicolon"] = 186] = "semicolon";
    KeyCodes[KeyCodes["space"] = 32] = "space";
    KeyCodes[KeyCodes["tab"] = 9] = "tab";
    KeyCodes[KeyCodes["up"] = 38] = "up";
})(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));



/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(7);
var scroll_scss_1 = __webpack_require__(110);
var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
exports.DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
function disableBodyScroll() {
    var doc = dom_1.getDocument();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(scroll_scss_1.default.msFabricScrollDisabled);
    }
    _bodyScrollDisabledCount++;
}
exports.disableBodyScroll = disableBodyScroll;
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = dom_1.getDocument();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(scroll_scss_1.default.msFabricScrollDisabled);
        }
        _bodyScrollDisabledCount--;
    }
}
exports.enableBodyScroll = enableBodyScroll;
/** Calculates the width of a scrollbar for the browser/os. */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
exports.getScrollbarWidth = getScrollbarWidth;
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    // First do a quick scan for the scrollable attribute.
    while (el && el !== document.body) {
        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== document.body) {
        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var styles_1 = getComputedStyle(el);
            var overflowY = styles_1 ? styles_1.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === document.body) {
        el = window;
    }
    return el;
}
exports.findScrollableParent = findScrollableParent;



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _warningCallback = warn;
/**
 * Warns when a deprecated props are being used.
 *
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    for (var propName in deprecationMap) {
        if (props && propName in props) {
            var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
            var replacementPropName = deprecationMap[propName];
            if (replacementPropName) {
                deprecationMessage += " Use '" + replacementPropName + "' instead.";
            }
            _warningCallback(deprecationMessage);
        }
    }
}
exports.warnDeprecations = warnDeprecations;
/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    for (var propName in exclusiveMap) {
        if (props && propName in props && exclusiveMap[propName] in props) {
            _warningCallback(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. Use one or the other.");
        }
    }
}
exports.warnMutuallyExclusive = warnMutuallyExclusive;
/**
 * Sends a warning to console, if the api is present.
 * @param message - Warning message.
 */
function warn(message) {
    if (console && console.warn) {
        console.warn(message);
    }
}
exports.warn = warn;
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback === undefined ? warn : warningCallback;
}
exports.setWarningCallback = setWarningCallback;



/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processStyleName = undefined;
exports.createMarkupForStyles = createMarkupForStyles;

var _camelizeStyleName = __webpack_require__(113);

var _camelizeStyleName2 = _interopRequireDefault(_camelizeStyleName);

var _dangerousStyleValue = __webpack_require__(118);

var _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);

var _hyphenateStyleName = __webpack_require__(115);

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _memoizeStringOnly = __webpack_require__(116);

var _memoizeStringOnly2 = _interopRequireDefault(_memoizeStringOnly);

var _warning = __webpack_require__(13);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processStyleName = exports.processStyleName = (0, _memoizeStringOnly2.default)(_hyphenateStyleName2.default); /**
                                                                                                                   * Copyright 2013-present, Facebook, Inc.
                                                                                                                   * All rights reserved.
                                                                                                                   *
                                                                                                                   * This source code is licensed under the BSD-style license found in the
                                                                                                                   * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                   * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                   *
                                                                                                                   * @providesModule CSSPropertyOperations
                                                                                                                   */

if (process.env.NODE_ENV !== 'production') {
  var warnValidStyle;

  (function () {
    // 'msTransform' is correct, but the other prefixes should be capitalized
    var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

    // style values shouldn't contain a semicolon
    var badStyleValueWithSemicolonPattern = /;\s*$/;

    var warnedStyleNames = {};
    var warnedStyleValues = {};
    var warnedForNaNValue = false;

    var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
      if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
        return;
      }

      warnedStyleNames[name] = true;
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Unsupported style property %s. Did you mean %s?%s', name, (0, _camelizeStyleName2.default)(name), checkRenderMessage(owner)) : void 0;
    };

    var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
      if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
        return;
      }

      warnedStyleNames[name] = true;
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
    };

    var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
      if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
        return;
      }

      warnedStyleValues[value] = true;
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
    };

    var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
      if (warnedForNaNValue) {
        return;
      }

      warnedForNaNValue = true;
      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
    };

    var checkRenderMessage = function checkRenderMessage(owner) {
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    };

    /**
     * @param {string} name
     * @param {*} value
     * @param {ReactDOMComponent} component
     */

    warnValidStyle = function warnValidStyle(name, value, component) {
      //eslint-disable-line no-var
      var owner = void 0;
      if (component) {
        owner = component._currentElement._owner;
      }
      if (name.indexOf('-') > -1) {
        warnHyphenatedStyleName(name, owner);
      } else if (badVendoredStyleNamePattern.test(name)) {
        warnBadVendoredStyleName(name, owner);
      } else if (badStyleValueWithSemicolonPattern.test(value)) {
        warnStyleValueWithSemicolon(name, value, owner);
      }

      if (typeof value === 'number' && isNaN(value)) {
        warnStyleValueIsNaN(name, value, owner);
      }
    };
  })();
}

/**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @param {ReactDOMComponent} component
   * @return {?string}
   */

function createMarkupForStyles(styles, component) {
  var serialized = '';
  for (var styleName in styles) {
    var isCustomProp = styleName.indexOf('--') === 0;
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    var styleValue = styles[styleName];
    if (process.env.NODE_ENV !== 'production' && !isCustomProp) {
      warnValidStyle(styleName, styleValue, component);
    }
    if (styleValue != null) {
      if (isCustomProp) {
        serialized += styleName + ':' + styleValue + ';';
      } else {
        serialized += processStyleName(styleName) + ':';
        serialized += (0, _dangerousStyleValue2.default)(styleName, styleValue, component) + ';';
      }
    }
  }
  return serialized || null;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.merge = exports.$ = exports.style = exports.presets = exports.keyframes = exports.fontFace = exports.insertGlobal = exports.insertRule = exports.plugins = exports.styleSheet = undefined;
exports.speedy = speedy;
exports.simulations = simulations;
exports.simulate = simulate;
exports.cssLabels = cssLabels;
exports.isLikeRule = isLikeRule;
exports.idFor = idFor;
exports.css = css;
exports.rehydrate = rehydrate;
exports.flush = flush;
exports.select = select;
exports.parent = parent;
exports.media = media;
exports.pseudo = pseudo;
exports.active = active;
exports.any = any;
exports.checked = checked;
exports.disabled = disabled;
exports.empty = empty;
exports.enabled = enabled;
exports._default = _default;
exports.first = first;
exports.firstChild = firstChild;
exports.firstOfType = firstOfType;
exports.fullscreen = fullscreen;
exports.focus = focus;
exports.hover = hover;
exports.indeterminate = indeterminate;
exports.inRange = inRange;
exports.invalid = invalid;
exports.lastChild = lastChild;
exports.lastOfType = lastOfType;
exports.left = left;
exports.link = link;
exports.onlyChild = onlyChild;
exports.onlyOfType = onlyOfType;
exports.optional = optional;
exports.outOfRange = outOfRange;
exports.readOnly = readOnly;
exports.readWrite = readWrite;
exports.required = required;
exports.right = right;
exports.root = root;
exports.scope = scope;
exports.target = target;
exports.valid = valid;
exports.visited = visited;
exports.dir = dir;
exports.lang = lang;
exports.not = not;
exports.nthChild = nthChild;
exports.nthLastChild = nthLastChild;
exports.nthLastOfType = nthLastOfType;
exports.nthOfType = nthOfType;
exports.after = after;
exports.before = before;
exports.firstLetter = firstLetter;
exports.firstLine = firstLine;
exports.selection = selection;
exports.backdrop = backdrop;
exports.placeholder = placeholder;
exports.cssFor = cssFor;
exports.attribsFor = attribsFor;

var _objectAssign = __webpack_require__(14);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _sheet = __webpack_require__(123);

var _CSSPropertyOperations = __webpack_require__(33);

var _clean = __webpack_require__(119);

var _clean2 = _interopRequireDefault(_clean);

var _plugins = __webpack_require__(122);

var _hash = __webpack_require__(120);

var _hash2 = _interopRequireDefault(_hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/* stylesheet */


var styleSheet = exports.styleSheet = new _sheet.StyleSheet();
// an isomorphic StyleSheet shim. hides all the nitty gritty.

// /**************** LIFTOFF IN 3... 2... 1... ****************/
styleSheet.inject(); //eslint-disable-line indent
// /****************      TO THE MOOOOOOON     ****************/

// convenience function to toggle speedy
function speedy(bool) {
  return styleSheet.speedy(bool);
}

// plugins
// we include these by default
var plugins = exports.plugins = styleSheet.plugins = new _plugins.PluginSet([_plugins.prefixes, _plugins.fallbacks]);
plugins.media = new _plugins.PluginSet(); // neat! media, font-face, keyframes
plugins.fontFace = new _plugins.PluginSet();
plugins.keyframes = new _plugins.PluginSet([_plugins.prefixes]);

// define some constants

var isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
var isTest = process.env.NODE_ENV === 'test';

/**** simulations  ****/

// a flag to enable simulation meta tags on dom nodes
// defaults to true in dev mode. recommend *not* to
// toggle often.
var canSimulate = isDev;

// we use these flags for issuing warnings when simulate is called
// in prod / in incorrect order
var warned1 = false,
    warned2 = false;

// toggles simulation activity. shouldn't be needed in most cases
function simulations() {
  var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  canSimulate = !!bool;
}

// use this on dom nodes to 'simulate' pseudoclasses
// <div {...hover({ color: 'red' })} {...simulate('hover', 'visited')}>...</div>
// you can even send in some weird ones, as long as it's in simple format
// and matches an existing rule on the element
// eg simulate('nthChild2', ':hover:active') etc
function simulate() {
  for (var _len = arguments.length, pseudos = Array(_len), _key = 0; _key < _len; _key++) {
    pseudos[_key] = arguments[_key];
  }

  pseudos = (0, _clean2.default)(pseudos);
  if (!pseudos) return {};
  if (!canSimulate) {
    if (!warned1) {
      console.warn('can\'t simulate without once calling simulations(true)'); //eslint-disable-line no-console
      warned1 = true;
    }
    if (!isDev && !isTest && !warned2) {
      console.warn('don\'t use simulation outside dev'); //eslint-disable-line no-console
      warned2 = true;
    }
    return {};
  }
  return pseudos.reduce(function (o, p) {
    return o['data-simulate-' + simple(p)] = '', o;
  }, {});
}

/**** labels ****/
// toggle for debug labels.
// *shouldn't* have to mess with this manually
var hasLabels = isDev;

function cssLabels(bool) {
  hasLabels = !!bool;
}

// takes a string, converts to lowercase, strips out nonalphanumeric.
function simple(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// hashes a string to something 'unique'
// we use this to generate ids for styles


function hashify() {
  var str = '';

  for (var _len2 = arguments.length, objs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    objs[_key2] = arguments[_key2];
  }

  for (var i = 0; i < objs.length; i++) {
    str += JSON.stringify(objs[i]);
  }
  return (0, _hash2.default)(str).toString(36);
}

// of shape { 'data-css-<id>': '' }
function isLikeRule(rule) {
  var keys = Object.keys(rule).filter(function (x) {
    return x !== 'toString';
  });
  if (keys.length !== 1) {
    return false;
  }
  return !!/data\-css\-([a-zA-Z0-9]+)/.exec(keys[0]);
}

// extracts id from a { 'data-css-<id>': ''} like object
function idFor(rule) {
  var keys = Object.keys(rule).filter(function (x) {
    return x !== 'toString';
  });
  if (keys.length !== 1) throw new Error('not a rule');
  var regex = /data\-css\-([a-zA-Z0-9]+)/;
  var match = regex.exec(keys[0]);
  if (!match) throw new Error('not a rule');
  return match[1];
}

function selector(id, path) {

  if (!id) {
    return path.replace(/\&/g, '');
  }
  if (!path) return '.css-' + id + ',[data-css-' + id + ']';

  var x = path.split(',').map(function (x) {
    return x.indexOf('&') >= 0 ? [x.replace(/\&/mg, '.css-' + id), x.replace(/\&/mg, '[data-css-' + id + ']')].join(',') // todo - make sure each sub selector has an &
    : '.css-' + id + x + ',[data-css-' + id + ']' + x;
  }).join(',');

  if (canSimulate && /^\&\:/.exec(path) && !/\s/.exec(path)) {
    x += ',.css-' + id + '[data-simulate-' + simple(path) + '],[data-css-' + id + '][data-simulate-' + simple(path) + ']';
  }
  return x;
}

function toCSS(_ref) {
  var selector = _ref.selector,
      style = _ref.style;

  var result = plugins.transform({ selector: selector, style: style });
  return result.selector + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
}

function deconstruct(style) {
  // we can be sure it's not infinitely nested here 
  var plain = void 0,
      selects = void 0,
      medias = void 0,
      supports = void 0;
  Object.keys(style).forEach(function (key) {
    if (key.indexOf('&') >= 0) {
      selects = selects || {};
      selects[key] = style[key];
    } else if (key.indexOf('@media') === 0) {
      medias = medias || {};
      medias[key] = deconstruct(style[key]);
    } else if (key.indexOf('@supports') === 0) {
      supports = supports || {};
      supports[key] = deconstruct(style[key]);
    } else if (key === 'label') {
      if (style.label.length > 0) {
        plain = plain || {};
        plain.label = hasLabels ? style.label.join('.') : '';
      }
    } else {
      plain = plain || {};
      plain[key] = style[key];
    }
  });
  return { plain: plain, selects: selects, medias: medias, supports: supports };
}

function deconstructedStyleToCSS(id, style) {
  var css = [];

  // plugins here
  var plain = style.plain,
      selects = style.selects,
      medias = style.medias,
      supports = style.supports;

  if (plain) {
    css.push(toCSS({ style: plain, selector: selector(id) }));
  }
  if (selects) {
    Object.keys(selects).forEach(function (key) {
      return css.push(toCSS({ style: selects[key], selector: selector(id, key) }));
    });
  }
  if (medias) {
    Object.keys(medias).forEach(function (key) {
      return css.push(key + '{' + deconstructedStyleToCSS(id, medias[key]).join('') + '}');
    });
  }
  if (supports) {
    Object.keys(supports).forEach(function (key) {
      return css.push(key + '{' + deconstructedStyleToCSS(id, supports[key]).join('') + '}');
    });
  }
  return css;
}

// this cache to track which rules have
// been inserted into the stylesheet
var inserted = styleSheet.inserted = {};

// and helpers to insert rules into said styleSheet
function insert(spec) {
  if (!inserted[spec.id]) {
    inserted[spec.id] = true;
    var deconstructed = deconstruct(spec.style);
    deconstructedStyleToCSS(spec.id, deconstructed).map(function (cssRule) {
      return styleSheet.insert(cssRule);
    });
  }
}

// a simple cache to store generated rules
var registered = styleSheet.registered = {};
function register(spec) {
  if (!registered[spec.id]) {
    registered[spec.id] = spec;
  }
}

function _getRegistered(rule) {
  if (isLikeRule(rule)) {
    var ret = registered[idFor(rule)];
    if (ret == null) {
      throw new Error('[glamor] an unexpected rule cache miss occurred. This is probably a sign of multiple glamor instances in your app. See https://github.com/threepointone/glamor/issues/79');
    }
    return ret;
  }
  return rule;
}

// todo - perf
var ruleCache = {};
function toRule(spec) {
  register(spec);
  insert(spec);

  if (ruleCache[spec.id]) {
    return ruleCache[spec.id];
  }

  var ret = _defineProperty({}, 'data-css-' + spec.id, hasLabels ? spec.label || '' : '');
  Object.defineProperty(ret, 'toString', {
    enumerable: false, value: function value() {
      return 'css-' + spec.id;
    }
  });
  ruleCache[spec.id] = ret;
  return ret;
}

function log() {
  //eslint-disable-line no-unused-vars
  console.log(this); //eslint-disable-line no-console
  return this;
}

function isSelector(key) {
  var possibles = [':', '.', '[', '>', ' '],
      found = false,
      ch = key.charAt(0);
  for (var i = 0; i < possibles.length; i++) {
    if (ch === possibles[i]) {
      found = true;
      break;
    }
  }
  return found || key.indexOf('&') >= 0;
}

function joinSelectors(a, b) {
  var as = a.split(',').map(function (a) {
    return !(a.indexOf('&') >= 0) ? '&' + a : a;
  });
  var bs = b.split(',').map(function (b) {
    return !(b.indexOf('&') >= 0) ? '&' + b : b;
  });

  return bs.reduce(function (arr, b) {
    return arr.concat(as.map(function (a) {
      return b.replace(/\&/g, a);
    }));
  }, []).join(',');
}

function joinMediaQueries(a, b) {
  return a ? '@media ' + a.substring(6) + ' and ' + b.substring(6) : b;
}

function isMediaQuery(key) {
  return key.indexOf('@media') === 0;
}

function isSupports(key) {
  return key.indexOf('@supports') === 0;
}

function joinSupports(a, b) {
  return a ? '@supports ' + a.substring(9) + ' and ' + b.substring(9) : b;
}

// flatten a nested array
function flatten(inArr) {
  var arr = [];
  for (var i = 0; i < inArr.length; i++) {
    if (Array.isArray(inArr[i])) arr = arr.concat(flatten(inArr[i]));else arr = arr.concat(inArr[i]);
  }
  return arr;
}

// mutable! modifies dest.
function build(dest, _ref2) {
  var _ref2$selector = _ref2.selector,
      selector = _ref2$selector === undefined ? '' : _ref2$selector,
      _ref2$mq = _ref2.mq,
      mq = _ref2$mq === undefined ? '' : _ref2$mq,
      _ref2$supp = _ref2.supp,
      supp = _ref2$supp === undefined ? '' : _ref2$supp,
      _ref2$src = _ref2.src,
      src = _ref2$src === undefined ? {} : _ref2$src;


  if (!Array.isArray(src)) {
    src = [src];
  }
  src = flatten(src);

  src.forEach(function (_src) {
    if (isLikeRule(_src)) {
      var reg = _getRegistered(_src);
      if (reg.type !== 'css') {
        throw new Error('cannot merge this rule');
      }
      _src = reg.style;
    }
    _src = (0, _clean2.default)(_src);
    if (_src && _src.composes) {
      build(dest, { selector: selector, mq: mq, supp: supp, src: _src.composes });
    }
    Object.keys(_src || {}).forEach(function (key) {
      if (isSelector(key)) {

        if (key === '::placeholder') {
          build(dest, { selector: joinSelectors(selector, '::-webkit-input-placeholder'), mq: mq, supp: supp, src: _src[key] });
          build(dest, { selector: joinSelectors(selector, '::-moz-placeholder'), mq: mq, supp: supp, src: _src[key] });
          build(dest, { selector: joinSelectors(selector, '::-ms-input-placeholder'), mq: mq, supp: supp, src: _src[key] });
        }

        build(dest, { selector: joinSelectors(selector, key), mq: mq, supp: supp, src: _src[key] });
      } else if (isMediaQuery(key)) {
        build(dest, { selector: selector, mq: joinMediaQueries(mq, key), supp: supp, src: _src[key] });
      } else if (isSupports(key)) {
        build(dest, { selector: selector, mq: mq, supp: joinSupports(supp, key), src: _src[key] });
      } else if (key === 'composes') {
        // ignore, we already dealth with it
      } else {
        var _dest = dest;
        if (supp) {
          _dest[supp] = _dest[supp] || {};
          _dest = _dest[supp];
        }
        if (mq) {
          _dest[mq] = _dest[mq] || {};
          _dest = _dest[mq];
        }
        if (selector) {
          _dest[selector] = _dest[selector] || {};
          _dest = _dest[selector];
        }

        if (key === 'label') {
          if (hasLabels) {
            dest.label = dest.label.concat(_src.label);
          }
        } else {
          _dest[key] = _src[key];
        }
      }
    });
  });
}

function _css(rules) {
  var style = { label: [] };
  build(style, { src: rules }); // mutative! but worth it. 

  var spec = {
    id: hashify(style),
    style: style, label: hasLabels ? style.label.join('.') : '',
    type: 'css'
  };
  return toRule(spec);
}

var nullrule = {
  // 'data-css-nil': ''
};
Object.defineProperty(nullrule, 'toString', {
  enumerable: false, value: function value() {
    return 'css-nil';
  }
});

var inputCaches = typeof WeakMap !== 'undefined' ? [nullrule, new WeakMap(), new WeakMap(), new WeakMap()] : [nullrule];

var warnedWeakMapError = false;
function multiIndexCache(fn) {
  return function (args) {
    if (inputCaches[args.length]) {
      var coi = inputCaches[args.length];
      var ctr = 0;
      while (ctr < args.length - 1) {
        if (!coi.has(args[ctr])) {
          coi.set(args[ctr], new WeakMap());
        }
        coi = coi.get(args[ctr]);
        ctr++;
      }
      if (coi.has(args[args.length - 1])) {
        var ret = coi.get(args[ctr]);

        if (registered[ret.toString().substring(4)]) {
          // make sure it hasn't been flushed 
          return ret;
        }
      }
    }
    var value = fn(args);
    if (inputCaches[args.length]) {
      var _ctr = 0,
          _coi = inputCaches[args.length];
      while (_ctr < args.length - 1) {
        _coi = _coi.get(args[_ctr]);
        _ctr++;
      }
      try {
        _coi.set(args[_ctr], value);
      } catch (err) {
        if (isDev && !warnedWeakMapError) {
          var _console;

          warnedWeakMapError = true;
          (_console = console).warn.apply(_console, ['failed setting the WeakMap cache for args:'].concat(_toConsumableArray(args))); // eslint-disable-line no-console
          console.warn('this should NOT happen, please file a bug on the github repo.'); // eslint-disable-line no-console
        }
      }
    }
    return value;
  };
}

var cachedCss = typeof WeakMap !== 'undefined' ? multiIndexCache(_css) : _css;

function css() {
  for (var _len3 = arguments.length, rules = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    rules[_key3] = arguments[_key3];
  }

  if (rules[0] && rules[0].length && rules[0].raw) {
    throw new Error('you forgot to include glamor/babel in your babel plugins.');
  }

  rules = (0, _clean2.default)(rules);
  if (!rules) {
    return nullrule;
  }

  return cachedCss(rules);
}

css.insert = function (css) {
  var spec = {
    id: hashify(css),
    css: css,
    type: 'raw'
  };
  register(spec);
  if (!inserted[spec.id]) {
    styleSheet.insert(spec.css);
    inserted[spec.id] = true;
  }
};

var insertRule = exports.insertRule = css.insert;

css.global = function (selector, style) {
  return css.insert(toCSS({ selector: selector, style: style }));
};

var insertGlobal = exports.insertGlobal = css.global;

function insertKeyframe(spec) {
  if (!inserted[spec.id]) {
    (function () {
      var inner = Object.keys(spec.keyframes).map(function (kf) {
        var result = plugins.keyframes.transform({ id: spec.id, name: kf, style: spec.keyframes[kf] });
        return result.name + '{' + (0, _CSSPropertyOperations.createMarkupForStyles)(result.style) + '}';
      }).join('');

      ['-webkit-', '-moz-', '-o-', ''].forEach(function (prefix) {
        return styleSheet.insert('@' + prefix + 'keyframes ' + (spec.name + '_' + spec.id) + '{' + inner + '}');
      });

      inserted[spec.id] = true;
    })();
  }
}
css.keyframes = function (name, kfs) {
  if (!kfs) {
    kfs = name, name = 'animation';
  }

  // do not ignore empty keyframe definitions for now.
  kfs = (0, _clean2.default)(kfs) || {};
  var spec = {
    id: hashify(name, kfs),
    type: 'keyframes',
    name: name,
    keyframes: kfs
  };
  register(spec);
  insertKeyframe(spec);
  return name + '_' + spec.id;
};

// we don't go all out for fonts as much, giving a simple font loading strategy
// use a fancier lib if you need moar power
css.fontFace = function (font) {
  font = (0, _clean2.default)(font);
  var spec = {
    id: hashify(font),
    type: 'font-face',
    font: font
  };
  register(spec);
  insertFontFace(spec);

  return font.fontFamily;
};

var fontFace = exports.fontFace = css.fontFace;
var keyframes = exports.keyframes = css.keyframes;

function insertFontFace(spec) {
  if (!inserted[spec.id]) {
    styleSheet.insert('@font-face{' + (0, _CSSPropertyOperations.createMarkupForStyles)(spec.font) + '}');
    inserted[spec.id] = true;
  }
}

// rehydrate the insertion cache with ids sent from
// renderStatic / renderStaticOptimized
function rehydrate(ids) {
  // load up ids
  (0, _objectAssign2.default)(inserted, ids.reduce(function (o, i) {
    return o[i] = true, o;
  }, {}));
  // assume css loaded separately
}

// clears out the cache and empties the stylesheet
// best for tests, though there might be some value for SSR.

function flush() {
  inserted = styleSheet.inserted = {};
  registered = styleSheet.registered = {};
  ruleCache = {};
  styleSheet.flush();
  styleSheet.inject();
}

function warnAboutPresetsDeprecation() {
  if (isDev) {
    console.warn('[Deprecation] In glamor v3 the `presets` object will be removed. See https://github.com/threepointone/glamor/issues/213 for more information.');
  }
}

var presets = exports.presets = {
  get mobile() {
    warnAboutPresetsDeprecation();
    return '(min-width: 400px)';
  },
  get Mobile() {
    warnAboutPresetsDeprecation();
    return '@media (min-width: 400px)';
  },
  get phablet() {
    warnAboutPresetsDeprecation();
    return '(min-width: 550px)';
  },
  get Phablet() {
    warnAboutPresetsDeprecation();
    return '@media (min-width: 550px)';
  },
  get tablet() {
    warnAboutPresetsDeprecation();
    return '(min-width: 750px)';
  },
  get Tablet() {
    warnAboutPresetsDeprecation();
    return '@media (min-width: 750px)';
  },
  get desktop() {
    warnAboutPresetsDeprecation();
    return '(min-width: 1000px)';
  },
  get Desktop() {
    warnAboutPresetsDeprecation();
    return '@media (min-width: 1000px)';
  },
  get hd() {
    warnAboutPresetsDeprecation();
    return '(min-width: 1200px)';
  },
  get Hd() {
    warnAboutPresetsDeprecation();
    return '@media (min-width: 1200px)';
  }
};

var style = exports.style = css;

function select(selector) {
  for (var _len4 = arguments.length, styles = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    styles[_key4 - 1] = arguments[_key4];
  }

  if (!selector) {
    return style(styles);
  }
  return css(_defineProperty({}, selector, styles));
}
var $ = exports.$ = select;

function parent(selector) {
  for (var _len5 = arguments.length, styles = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    styles[_key5 - 1] = arguments[_key5];
  }

  return css(_defineProperty({}, selector + ' &', styles));
}

var merge = exports.merge = css;
var compose = exports.compose = css;

function media(query) {
  for (var _len6 = arguments.length, rules = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    rules[_key6 - 1] = arguments[_key6];
  }

  return css(_defineProperty({}, '@media ' + query, rules));
}

function pseudo(selector) {
  for (var _len7 = arguments.length, styles = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    styles[_key7 - 1] = arguments[_key7];
  }

  return css(_defineProperty({}, selector, styles));
}

// allllll the pseudoclasses

function active(x) {
  return pseudo(':active', x);
}

function any(x) {
  return pseudo(':any', x);
}

function checked(x) {
  return pseudo(':checked', x);
}

function disabled(x) {
  return pseudo(':disabled', x);
}

function empty(x) {
  return pseudo(':empty', x);
}

function enabled(x) {
  return pseudo(':enabled', x);
}

function _default(x) {
  return pseudo(':default', x); // note '_default' name
}

function first(x) {
  return pseudo(':first', x);
}

function firstChild(x) {
  return pseudo(':first-child', x);
}

function firstOfType(x) {
  return pseudo(':first-of-type', x);
}

function fullscreen(x) {
  return pseudo(':fullscreen', x);
}

function focus(x) {
  return pseudo(':focus', x);
}

function hover(x) {
  return pseudo(':hover', x);
}

function indeterminate(x) {
  return pseudo(':indeterminate', x);
}

function inRange(x) {
  return pseudo(':in-range', x);
}

function invalid(x) {
  return pseudo(':invalid', x);
}

function lastChild(x) {
  return pseudo(':last-child', x);
}

function lastOfType(x) {
  return pseudo(':last-of-type', x);
}

function left(x) {
  return pseudo(':left', x);
}

function link(x) {
  return pseudo(':link', x);
}

function onlyChild(x) {
  return pseudo(':only-child', x);
}

function onlyOfType(x) {
  return pseudo(':only-of-type', x);
}

function optional(x) {
  return pseudo(':optional', x);
}

function outOfRange(x) {
  return pseudo(':out-of-range', x);
}

function readOnly(x) {
  return pseudo(':read-only', x);
}

function readWrite(x) {
  return pseudo(':read-write', x);
}

function required(x) {
  return pseudo(':required', x);
}

function right(x) {
  return pseudo(':right', x);
}

function root(x) {
  return pseudo(':root', x);
}

function scope(x) {
  return pseudo(':scope', x);
}

function target(x) {
  return pseudo(':target', x);
}

function valid(x) {
  return pseudo(':valid', x);
}

function visited(x) {
  return pseudo(':visited', x);
}

// parameterized pseudoclasses
function dir(p, x) {
  return pseudo(':dir(' + p + ')', x);
}
function lang(p, x) {
  return pseudo(':lang(' + p + ')', x);
}
function not(p, x) {
  // should this be a plugin?
  var selector = p.split(',').map(function (x) {
    return x.trim();
  }).map(function (x) {
    return ':not(' + x + ')';
  });
  if (selector.length === 1) {
    return pseudo(':not(' + p + ')', x);
  }
  return select(selector.join(''), x);
}
function nthChild(p, x) {
  return pseudo(':nth-child(' + p + ')', x);
}
function nthLastChild(p, x) {
  return pseudo(':nth-last-child(' + p + ')', x);
}
function nthLastOfType(p, x) {
  return pseudo(':nth-last-of-type(' + p + ')', x);
}
function nthOfType(p, x) {
  return pseudo(':nth-of-type(' + p + ')', x);
}

// pseudoelements
function after(x) {
  return pseudo('::after', x);
}
function before(x) {
  return pseudo('::before', x);
}
function firstLetter(x) {
  return pseudo('::first-letter', x);
}
function firstLine(x) {
  return pseudo('::first-line', x);
}
function selection(x) {
  return pseudo('::selection', x);
}
function backdrop(x) {
  return pseudo('::backdrop', x);
}
function placeholder(x) {
  // https://github.com/threepointone/glamor/issues/14
  return css({ '::placeholder': x });
}

/*** helpers for web components ***/
// https://github.com/threepointone/glamor/issues/16

function cssFor() {
  for (var _len8 = arguments.length, rules = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    rules[_key8] = arguments[_key8];
  }

  rules = (0, _clean2.default)(rules);
  return rules ? rules.map(function (r) {
    var style = { label: [] };
    build(style, { src: r }); // mutative! but worth it.   
    return deconstructedStyleToCSS(hashify(style), deconstruct(style)).join('');
  }).join('') : '';
}

function attribsFor() {
  for (var _len9 = arguments.length, rules = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    rules[_key9] = arguments[_key9];
  }

  rules = (0, _clean2.default)(rules);
  var htmlAttributes = rules ? rules.map(function (rule) {
    idFor(rule); // throwaway check for rule
    var key = Object.keys(rule)[0],
        value = rule[key];
    return key + '="' + (value || '') + '"';
  }).join(' ') : '';

  return htmlAttributes;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(145));



/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(152));



/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(155));



/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(157));



/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ElementType;
(function (ElementType) {
    /** <button> element. */
    ElementType[ElementType["button"] = 0] = "button";
    /** <a> element. */
    ElementType[ElementType["anchor"] = 1] = "anchor";
})(ElementType = exports.ElementType || (exports.ElementType = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["normal"] = 0] = "normal";
    ButtonType[ButtonType["primary"] = 1] = "primary";
    ButtonType[ButtonType["hero"] = 2] = "hero";
    ButtonType[ButtonType["compound"] = 3] = "compound";
    ButtonType[ButtonType["command"] = 4] = "command";
    ButtonType[ButtonType["icon"] = 5] = "icon";
    ButtonType[ButtonType["default"] = 6] = "default";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));



/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var BaseButton_1 = __webpack_require__(8);
var Utilities_1 = __webpack_require__(1);
var CommandButton_styles_1 = __webpack_require__(131);
var CommandButton = (function (_super) {
    __extends(CommandButton, _super);
    function CommandButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    CommandButton.prototype.render = function () {
        var styles = this.props.styles;
        return (React.createElement(BaseButton_1.BaseButton, __assign({}, this.props, { variantClassName: 'ms-Button--command', styles: CommandButton_styles_1.getStyles(undefined, styles), onRenderDescription: Utilities_1.nullRender })));
    };
    return CommandButton;
}(Utilities_1.BaseComponent));
exports.CommandButton = CommandButton;



/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var BaseButton_1 = __webpack_require__(8);
var Utilities_1 = __webpack_require__(1);
var CompoundButton_styles_1 = __webpack_require__(132);
var CompoundButton = (function (_super) {
    __extends(CompoundButton, _super);
    function CompoundButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    CompoundButton.prototype.render = function () {
        var styles = this.props.styles;
        return (React.createElement(BaseButton_1.BaseButton, __assign({}, this.props, { variantClassName: 'ms-Button--compound', styles: CompoundButton_styles_1.getStyles(undefined, styles), onRenderIcon: Utilities_1.nullRender })));
    };
    return CompoundButton;
}(Utilities_1.BaseComponent));
exports.CompoundButton = CompoundButton;



/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var BaseButton_1 = __webpack_require__(8);
var Utilities_1 = __webpack_require__(1);
var DefaultButton_styles_1 = __webpack_require__(23);
var DefaultButton = (function (_super) {
    __extends(DefaultButton, _super);
    function DefaultButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    DefaultButton.prototype.render = function () {
        var styles = this.props.styles;
        return (React.createElement(BaseButton_1.BaseButton, __assign({}, this.props, { variantClassName: 'ms-Button--default', styles: DefaultButton_styles_1.getStyles(undefined, styles), onRenderDescription: Utilities_1.nullRender })));
    };
    return DefaultButton;
}(Utilities_1.BaseComponent));
exports.DefaultButton = DefaultButton;



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var BaseButton_1 = __webpack_require__(8);
var Utilities_1 = __webpack_require__(1);
var IconButton_styles_1 = __webpack_require__(133);
var IconButton = (function (_super) {
    __extends(IconButton, _super);
    function IconButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    IconButton.prototype.render = function () {
        var styles = this.props.styles;
        return (React.createElement(BaseButton_1.BaseButton, __assign({}, this.props, { variantClassName: 'ms-Button--icon', styles: IconButton_styles_1.getStyles(undefined, styles), onRenderText: Utilities_1.nullRender, onRenderDescription: Utilities_1.nullRender })));
    };
    return IconButton;
}(Utilities_1.BaseComponent));
exports.IconButton = IconButton;



/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Utilities_1 = __webpack_require__(1);
var BaseButton_1 = __webpack_require__(8);
var PrimaryButton_styles_1 = __webpack_require__(134);
var PrimaryButton = (function (_super) {
    __extends(PrimaryButton, _super);
    function PrimaryButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Set this BaseComponent._resolveComponentRef to false, bypassing resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    PrimaryButton.prototype.render = function () {
        var styles = this.props.styles;
        return (React.createElement(BaseButton_1.BaseButton, __assign({}, this.props, { variantClassName: 'ms-Button--primary', onRenderDescription: Utilities_1.nullRender, styles: PrimaryButton_styles_1.getStyles(undefined, styles) })));
    };
    return PrimaryButton;
}(Utilities_1.BaseComponent));
exports.PrimaryButton = PrimaryButton;



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DirectionalHint_1 = __webpack_require__(5);
exports.DirectionalHint = DirectionalHint_1.DirectionalHint;
var ContextualMenuItemType;
(function (ContextualMenuItemType) {
    ContextualMenuItemType[ContextualMenuItemType["Normal"] = 0] = "Normal";
    ContextualMenuItemType[ContextualMenuItemType["Divider"] = 1] = "Divider";
    ContextualMenuItemType[ContextualMenuItemType["Header"] = 2] = "Header";
})(ContextualMenuItemType = exports.ContextualMenuItemType || (exports.ContextualMenuItemType = {}));



/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DocumentCardType;
(function (DocumentCardType) {
    /**
     * Standard DocumentCard.
     */
    DocumentCardType[DocumentCardType["normal"] = 0] = "normal";
    /**
     * Compact layout. Displays the preview beside the details, rather than above.
     */
    DocumentCardType[DocumentCardType["compact"] = 1] = "compact";
})(DocumentCardType = exports.DocumentCardType || (exports.DocumentCardType = {}));



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FocusZoneDirection;
(function (FocusZoneDirection) {
    /** Only react to up/down arrows. */
    FocusZoneDirection[FocusZoneDirection["vertical"] = 0] = "vertical";
    /** Only react to left/right arrows. */
    FocusZoneDirection[FocusZoneDirection["horizontal"] = 1] = "horizontal";
    /** React to all arrows. */
    FocusZoneDirection[FocusZoneDirection["bidirectional"] = 2] = "bidirectional";
})(FocusZoneDirection = exports.FocusZoneDirection || (exports.FocusZoneDirection = {}));



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Please keep alphabetized
var IconType;
(function (IconType) {
    /**
     * Render using the fabric icon font.
     */
    IconType[IconType["default"] = 0] = "default";
    /**
     * Render using an image, where imageProps would be used.
     */
    IconType[IconType["image"] = 1] = "image";
    /**
     * Deprecated, use default.
     * @deprecated
     */
    IconType[IconType["Default"] = 100000] = "Default";
    /**
     * Deprecated, use image.
     * @deprecated
     */
    IconType[IconType["Image"] = 100001] = "Image";
})(IconType = exports.IconType || (exports.IconType = {}));



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The possible methods that can be used to fit the image.
 */
var ImageFit;
(function (ImageFit) {
    /**
     * The image is not scaled. The image is centered and cropped within the content box.
     */
    ImageFit[ImageFit["center"] = 0] = "center";
    /**
     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["contain"] = 1] = "contain";
    /**
     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["cover"] = 2] = "cover";
    /**
     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
     * frame will have empty space.
     */
    ImageFit[ImageFit["none"] = 3] = "none";
})(ImageFit = exports.ImageFit || (exports.ImageFit = {}));
var ImageLoadState;
(function (ImageLoadState) {
    /**
     * The image has not yet been loaded, and there is no error yet.
     */
    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
    /**
     * The image has been loaded successfully.
     */
    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
    /**
     * An error has been encountered while loading the image.
     */
    ImageLoadState[ImageLoadState["error"] = 2] = "error";
    /**
     * Deprecated at v1.3.6, to replace the src in case of errors, use onLoadingStateChange instead
     * and rerender the Image with a difference src.
     * @deprecated
     */
    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
})(ImageLoadState = exports.ImageLoadState || (exports.ImageLoadState = {}));



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(0);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var Image_Props_1 = __webpack_require__(49);
var Styling_1 = __webpack_require__(2);
var stylesImport = __webpack_require__(161);
var styles = stylesImport;
var CoverStyle;
(function (CoverStyle) {
    CoverStyle[CoverStyle["landscape"] = 0] = "landscape";
    CoverStyle[CoverStyle["portrait"] = 1] = "portrait";
})(CoverStyle = exports.CoverStyle || (exports.CoverStyle = {}));
exports.CoverStyleMap = (_a = {},
    _a[CoverStyle.landscape] = 'ms-Image-image--landscape ' + styles.imageIsLandscape,
    _a[CoverStyle.portrait] = 'ms-Image-image--portrait ' + styles.imageIsPortrait,
    _a);
exports.ImageFitMap = (_b = {},
    _b[Image_Props_1.ImageFit.center] = 'ms-Image-image--center ' + styles.imageIsCenter,
    _b[Image_Props_1.ImageFit.contain] = 'ms-Image-image--contain ' + styles.imageIsContain,
    _b[Image_Props_1.ImageFit.cover] = 'ms-Image-image--cover ' + styles.imageIsCover,
    _b[Image_Props_1.ImageFit.none] = 'ms-Image-image--none ' + styles.imageIsNone,
    _b);
var KEY_PREFIX = 'fabricImage';
var Image = (function (_super) {
    __extends(Image, _super);
    function Image(props) {
        var _this = _super.call(this, props) || this;
        // Make an initial assumption about the image layout until we can
        // check the rendered element. The value here only takes effect when
        // shouldStartVisible is true.
        _this._coverStyle = CoverStyle.portrait;
        _this.state = {
            loadState: Image_Props_1.ImageLoadState.notLoaded
        };
        return _this;
    }
    Image.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({
                loadState: Image_Props_1.ImageLoadState.notLoaded
            });
        }
        else if (this.state.loadState === Image_Props_1.ImageLoadState.loaded) {
            this._computeCoverStyle(nextProps);
        }
    };
    Image.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._checkImageLoaded();
        if (this.props.onLoadingStateChange
            && prevState.loadState !== this.state.loadState) {
            this.props.onLoadingStateChange(this.state.loadState);
        }
    };
    Image.prototype.render = function () {
        var imageProps = Utilities_1.getNativeProps(this.props, Utilities_1.imageProperties, ['width', 'height']);
        var _a = this.props, src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, shouldFadeIn = _a.shouldFadeIn, className = _a.className, imageFit = _a.imageFit, role = _a.role, maximizeFrame = _a.maximizeFrame;
        var loadState = this.state.loadState;
        var coverStyle = this._coverStyle;
        var loaded = loadState === Image_Props_1.ImageLoadState.loaded || (loadState === Image_Props_1.ImageLoadState.notLoaded && this.props.shouldStartVisible);
        // If image dimensions aren't specified, the natural size of the image is used.
        return (React.createElement("div", { className: Utilities_1.css('ms-Image', styles.root, className, (_b = {},
                _b['ms-Image--maximizeFrame ' + styles.rootIsMaximizeFrame] = maximizeFrame,
                _b)), style: { width: width, height: height }, ref: this._resolveRef('_frameElement') },
            React.createElement("img", __assign({}, imageProps, { onLoad: this._onImageLoaded, onError: this._onImageError, key: KEY_PREFIX + this.props.src || '', className: Utilities_1.css('ms-Image-image', styles.image, exports.CoverStyleMap[coverStyle], (imageFit !== undefined) && exports.ImageFitMap[imageFit], !loaded && 'is-notLoaded', loaded && 'is-loaded ' + styles.imageIsLoaded, shouldFadeIn && 'is-fadeIn', loadState === Image_Props_1.ImageLoadState.error && 'is-error', loaded && shouldFadeIn && Styling_1.AnimationClassNames.fadeIn400, (_c = {},
                    _c['ms-Image-image--scaleWidth ' + styles.imageIsScaleWidth] = (imageFit === undefined && !!width && !height),
                    _c['ms-Image-image--scaleHeight ' + styles.imageIsScaleHeight] = (imageFit === undefined && !width && !!height),
                    _c['ms-Image-image--scaleWidthHeight ' + styles.imageIsScaleWidthHeight] = (imageFit === undefined && !!width && !!height),
                    _c)), ref: this._resolveRef('_imageElement'), src: src, alt: alt, role: role }))));
        var _b, _c;
    };
    Image.prototype._onImageLoaded = function (ev) {
        var _a = this.props, src = _a.src, onLoad = _a.onLoad;
        if (onLoad) {
            onLoad(ev);
        }
        this._computeCoverStyle(this.props);
        if (src) {
            this.setState({
                loadState: Image_Props_1.ImageLoadState.loaded
            });
        }
    };
    Image.prototype._checkImageLoaded = function () {
        var src = this.props.src;
        var loadState = this.state.loadState;
        if (loadState === Image_Props_1.ImageLoadState.notLoaded) {
            // testing if naturalWidth and naturalHeight are greater than zero is better than checking
            // .complete, because .complete will also be set to true if the image breaks. However,
            // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
            // to checking .complete for these images.
            var isLoaded = src && (this._imageElement.naturalWidth > 0 && this._imageElement.naturalHeight > 0) ||
                (this._imageElement.complete && Image._svgRegex.test(src));
            if (isLoaded) {
                this._computeCoverStyle(this.props);
                this.setState({
                    loadState: Image_Props_1.ImageLoadState.loaded
                });
            }
        }
    };
    Image.prototype._computeCoverStyle = function (props) {
        var imageFit = props.imageFit, width = props.width, height = props.height;
        if (imageFit === Image_Props_1.ImageFit.cover || imageFit === Image_Props_1.ImageFit.contain) {
            if (this._imageElement) {
                // Determine the desired ratio using the width and height props.
                // If those props aren't available, measure measure the frame.
                var desiredRatio = void 0;
                if (!!width && !!height) {
                    desiredRatio = width / height;
                }
                else {
                    desiredRatio = this._frameElement.clientWidth / this._frameElement.clientHeight;
                }
                // Examine the source image to determine its original ratio.
                var naturalRatio = this._imageElement.naturalWidth / this._imageElement.naturalHeight;
                // Should we crop from the top or the sides?
                if (naturalRatio > desiredRatio) {
                    this._coverStyle = CoverStyle.landscape;
                }
                else {
                    this._coverStyle = CoverStyle.portrait;
                }
            }
        }
    };
    Image.prototype._onImageError = function (ev) {
        if (this.props.onError) {
            this.props.onError(ev);
        }
        this.setState({
            loadState: Image_Props_1.ImageLoadState.error
        });
    };
    return Image;
}(Utilities_1.BaseComponent));
Image.defaultProps = {
    shouldFadeIn: true
};
Image._svgRegex = /\.svg$/i;
__decorate([
    Utilities_1.autobind
], Image.prototype, "_onImageLoaded", null);
__decorate([
    Utilities_1.autobind
], Image.prototype, "_onImageError", null);
exports.Image = Image;
var _a, _b;



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(55);
/* tslint:enable:no-unused-variable */
var Fabric_1 = __webpack_require__(37);
var Utilities_1 = __webpack_require__(1);
var stylesImport = __webpack_require__(163);
var styles = stylesImport;
var _layersByHostId = {};
var Layer = (function (_super) {
    __extends(Layer, _super);
    function Layer(props) {
        var _this = _super.call(this, props) || this;
        _this._warnDeprecations({
            onLayerMounted: 'onLayerDidMount'
        });
        if (_this.props.hostId) {
            if (!_layersByHostId[_this.props.hostId]) {
                _layersByHostId[_this.props.hostId] = [];
            }
            _layersByHostId[_this.props.hostId].push(_this);
        }
        return _this;
    }
    /**
     * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
     * care about the specific host.
     */
    Layer.notifyHostChanged = function (id) {
        if (_layersByHostId[id]) {
            _layersByHostId[id].forEach(function (layer) { return layer.forceUpdate(); });
        }
    };
    Layer.prototype.componentDidMount = function () {
        this.componentDidUpdate();
    };
    Layer.prototype.componentWillUnmount = function () {
        var _this = this;
        this._removeLayerElement();
        if (this.props.hostId) {
            _layersByHostId[this.props.hostId] = _layersByHostId[this.props.hostId].filter(function (layer) { return layer !== _this; });
            if (!_layersByHostId[this.props.hostId].length) {
                delete _layersByHostId[this.props.hostId];
            }
        }
    };
    Layer.prototype.componentDidUpdate = function () {
        var _this = this;
        var host = this._getHost();
        if (host !== this._host) {
            this._removeLayerElement();
        }
        if (host) {
            this._host = host;
            if (!this._layerElement) {
                var doc = Utilities_1.getDocument(this._rootElement);
                this._layerElement = doc.createElement('div');
                this._layerElement.className = Utilities_1.css('ms-Layer', (_a = {},
                    _a['ms-Layer--fixed ' + styles.rootIsFixed] = !this.props.hostId,
                    _a));
                host.appendChild(this._layerElement);
                Utilities_1.setVirtualParent(this._layerElement, this._rootElement);
            }
            // Using this 'unstable' method allows us to retain the React context across the layer projection.
            ReactDOM.unstable_renderSubtreeIntoContainer(this, React.createElement(Fabric_1.Fabric, { className: Utilities_1.css('ms-Layer-content', styles.content) }, this.props.children), this._layerElement, function () {
                if (!_this._hasMounted) {
                    _this._hasMounted = true;
                    // TODO: @deprecated cleanup required.
                    if (_this.props.onLayerMounted) {
                        _this.props.onLayerMounted();
                    }
                    _this.props.onLayerDidMount();
                }
            });
        }
        var _a;
    };
    Layer.prototype.render = function () {
        return (React.createElement("span", { className: 'ms-Layer', ref: this._resolveRef('_rootElement') }));
    };
    Layer.prototype._removeLayerElement = function () {
        if (this._layerElement) {
            this.props.onLayerWillUnmount();
            ReactDOM.unmountComponentAtNode(this._layerElement);
            var parentNode = this._layerElement.parentNode;
            if (parentNode) {
                parentNode.removeChild(this._layerElement);
            }
            this._layerElement = undefined;
            this._hasMounted = false;
        }
    };
    Layer.prototype._getHost = function () {
        var hostId = this.props.hostId;
        var doc = Utilities_1.getDocument(this._rootElement);
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            return doc.body;
        }
    };
    return Layer;
}(Utilities_1.BaseComponent));
Layer.defaultProps = {
    onLayerDidMount: function () { return undefined; },
    onLayerWillUnmount: function () { return undefined; }
};
exports.Layer = Layer;



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
var styles = {
    root: 'root_dcc2a751',
    contextualHost: 'contextualHost_dcc2a751',
    primaryText: 'primaryText_dcc2a751',
    imageArea: 'imageArea_dcc2a751',
    image: 'image_dcc2a751',
    placeholder: 'placeholder_dcc2a751',
    initials: 'initials_dcc2a751',
    initialsIsLightBlue: 'initialsIsLightBlue_dcc2a751',
    initialsIsBlue: 'initialsIsBlue_dcc2a751',
    initialsIsDarkBlue: 'initialsIsDarkBlue_dcc2a751',
    initialsIsTeal: 'initialsIsTeal_dcc2a751',
    initialsIsLightGreen: 'initialsIsLightGreen_dcc2a751',
    initialsIsGreen: 'initialsIsGreen_dcc2a751',
    initialsIsDarkGreen: 'initialsIsDarkGreen_dcc2a751',
    initialsIsLightPink: 'initialsIsLightPink_dcc2a751',
    initialsIsPink: 'initialsIsPink_dcc2a751',
    initialsIsMagenta: 'initialsIsMagenta_dcc2a751',
    initialsIsPurple: 'initialsIsPurple_dcc2a751',
    initialsIsBlack: 'initialsIsBlack_dcc2a751',
    initialsIsOrange: 'initialsIsOrange_dcc2a751',
    initialsIsRed: 'initialsIsRed_dcc2a751',
    initialsIsDarkRed: 'initialsIsDarkRed_dcc2a751',
    presence: 'presence_dcc2a751',
    presenceIcon: 'presenceIcon_dcc2a751',
    details: 'details_dcc2a751',
    secondaryText: 'secondaryText_dcc2a751',
    tertiaryText: 'tertiaryText_dcc2a751',
    optionalText: 'optionalText_dcc2a751',
    textContent: 'textContent_dcc2a751',
    rootIsTiny: 'rootIsTiny_dcc2a751',
    rootIsReadonly: 'rootIsReadonly_dcc2a751',
    rootIsExtraExtraSmall: 'rootIsExtraExtraSmall_dcc2a751',
    showSecondaryText: 'showSecondaryText_dcc2a751',
    rootIs28: 'rootIs28_dcc2a751',
    rootIsExtraSmall: 'rootIsExtraSmall_dcc2a751',
    rootIsSmall: 'rootIsSmall_dcc2a751',
    rootIsLarge: 'rootIsLarge_dcc2a751',
    rootIsExtraLarge: 'rootIsExtraLarge_dcc2a751',
    rootIsDarkText: 'rootIsDarkText_dcc2a751',
    rootIsSelectable: 'rootIsSelectable_dcc2a751',
    rootExtraLarge: 'rootExtraLarge_dcc2a751',
    rootIsAvailable: 'rootIsAvailable_dcc2a751',
    rootIsAway: 'rootIsAway_dcc2a751',
    rootIsBlocked: 'rootIsBlocked_dcc2a751',
    rootIsBusy: 'rootIsBusy_dcc2a751',
    rootIsDoNotDisturb: 'rootIsDoNotDisturb_dcc2a751',
    rootIsOffline: 'rootIsOffline_dcc2a751',
};
load_themed_styles_1.loadStyles([{ "rawString": ".root_dcc2a751{box-sizing:border-box;box-shadow:none;margin:0;padding:0;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-size:14px;font-weight:400;line-height:1;position:relative;height:48px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden}.root_dcc2a751 .contextualHost_dcc2a751{display:none}.root_dcc2a751:hover .primaryText_dcc2a751{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.imageArea_dcc2a751{position:relative;overflow:hidden;text-align:center;-webkit-box-flex:0;-ms-flex:0 0 48px;flex:0 0 48px;height:48px;width:48px;border-radius:50%}@media screen and (-ms-high-contrast:active){.imageArea_dcc2a751{border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.imageArea_dcc2a751{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.imageArea_dcc2a751 .image_dcc2a751{border:0}.placeholder_dcc2a751{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";position:absolute;right:0;left:0;font-size:47px;top:9px;z-index:5}.initials_dcc2a751{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-size:17px;font-weight:100;line-height:46px;height:48px}.initials_dcc2a751.initialsIsLightBlue_dcc2a751{background-color:#6ba5e7}.initials_dcc2a751.initialsIsBlue_dcc2a751{background-color:#2d89ef}.initials_dcc2a751.initialsIsDarkBlue_dcc2a751{background-color:#2b5797}.initials_dcc2a751.initialsIsTeal_dcc2a751{background-color:#00aba9}.initials_dcc2a751.initialsIsLightGreen_dcc2a751{background-color:#99b433}.initials_dcc2a751.initialsIsGreen_dcc2a751{background-color:#00a300}.initials_dcc2a751.initialsIsDarkGreen_dcc2a751{background-color:#1e7145}.initials_dcc2a751.initialsIsLightPink_dcc2a751{background-color:#e773bd}.initials_dcc2a751.initialsIsPink_dcc2a751{background-color:#ff0097}.initials_dcc2a751.initialsIsMagenta_dcc2a751{background-color:#7e3878}.initials_dcc2a751.initialsIsPurple_dcc2a751{background-color:#603cba}.initials_dcc2a751.initialsIsBlack_dcc2a751{background-color:#1d1d1d}.initials_dcc2a751.initialsIsOrange_dcc2a751{background-color:#da532c}.initials_dcc2a751.initialsIsRed_dcc2a751{background-color:#e11}.initials_dcc2a751.initialsIsDarkRed_dcc2a751{background-color:#b91d47}.image_dcc2a751{position:absolute;top:0;width:100%;height:100%;border-radius:50%;-webkit-perspective:1px;perspective:1px}[dir=ltr] .image_dcc2a751{margin-right:10px}[dir=rtl] .image_dcc2a751{margin-left:10px}[dir=ltr] .image_dcc2a751{left:0}[dir=rtl] .image_dcc2a751{right:0}.image_dcc2a751[src=\"\"]{display:none}.presence_dcc2a751{background-color:#7fba00;position:absolute;height:12px;width:12px;border-radius:50%;top:auto;bottom:-1px;border:2px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";text-align:center;box-sizing:content-box;-ms-high-contrast-adjust:none}[dir=ltr] .presence_dcc2a751{left:34px}[dir=rtl] .presence_dcc2a751{right:34px}@media screen and (-ms-high-contrast:active){.presence_dcc2a751{border-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.presence_dcc2a751{border-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";background-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.presence_dcc2a751 .presenceIcon_dcc2a751{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-size:8px;line-height:12px;vertical-align:top}@media screen and (-ms-high-contrast:active){.presence_dcc2a751 .presenceIcon_dcc2a751{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.presence_dcc2a751 .presenceIcon_dcc2a751{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}.details_dcc2a751{padding:0 24px 0 12px;min-width:0;width:100%}html[dir=rtl] .details_dcc2a751{padding:0 12px 0 24px}html[dir=ltr] .details_dcc2a751{text-align:left}html[dir=rtl] .details_dcc2a751{text-align:right}.optionalText_dcc2a751,.primaryText_dcc2a751,.secondaryText_dcc2a751,.tertiaryText_dcc2a751,.textContent_dcc2a751{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.primaryText_dcc2a751{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-weight:400;font-size:17px;margin-top:-3px;line-height:1.4}.optionalText_dcc2a751,.secondaryText_dcc2a751,.tertiaryText_dcc2a751{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-weight:400;font-size:12px;white-space:nowrap;line-height:1.3}.secondaryText_dcc2a751{padding-top:3px}.optionalText_dcc2a751,.tertiaryText_dcc2a751{padding-top:5px;display:none}.root_dcc2a751.rootIsTiny_dcc2a751{height:30px;min-width:30px}.root_dcc2a751.rootIsTiny_dcc2a751 .imageArea_dcc2a751{overflow:visible;background:0 0;height:0;width:0}.root_dcc2a751.rootIsTiny_dcc2a751 .presence_dcc2a751{top:10px;border:0}[dir=ltr] .root_dcc2a751.rootIsTiny_dcc2a751 .presence_dcc2a751{right:auto}[dir=rtl] .root_dcc2a751.rootIsTiny_dcc2a751 .presence_dcc2a751{left:auto}[dir=ltr] .root_dcc2a751.rootIsTiny_dcc2a751 .presence_dcc2a751{left:0}[dir=rtl] .root_dcc2a751.rootIsTiny_dcc2a751 .presence_dcc2a751{right:0}@media screen and (-ms-high-contrast:active){.root_dcc2a751.rootIsTiny_dcc2a751 .presence_dcc2a751{top:9px;border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.root_dcc2a751.rootIsTiny_dcc2a751 .presence_dcc2a751{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}[dir=ltr] .root_dcc2a751.rootIsTiny_dcc2a751 .details_dcc2a751{padding-left:20px}[dir=rtl] .root_dcc2a751.rootIsTiny_dcc2a751 .details_dcc2a751{padding-right:20px}.root_dcc2a751.rootIsTiny_dcc2a751 .primaryText_dcc2a751{font-size:14px;padding-top:4px}.root_dcc2a751.rootIsTiny_dcc2a751 .secondaryText_dcc2a751{display:none}.root_dcc2a751.rootIsTiny_dcc2a751.rootIsReadonly_dcc2a751{padding:0;background-color:transparent}.root_dcc2a751.rootIsTiny_dcc2a751.rootIsReadonly_dcc2a751 .primaryText_dcc2a751:after{content:';'}.root_dcc2a751.rootIsExtraExtraSmall_dcc2a751{height:24px;line-height:24px;min-width:24px;margin-right:4px}.root_dcc2a751.rootIsExtraExtraSmall_dcc2a751 .imageArea_dcc2a751,.root_dcc2a751.rootIsExtraExtraSmall_dcc2a751 .image_dcc2a751{-webkit-box-flex:0;-ms-flex:0 0 24px;flex:0 0 24px;height:24px;width:24px}.root_dcc2a751.rootIsExtraExtraSmall_dcc2a751 .placeholder_dcc2a751{font-size:18px;top:4px}.root_dcc2a751.rootIsExtraExtraSmall_dcc2a751 .initials_dcc2a751{font-size:11px;height:24px;line-height:24px}.root_dcc2a751.rootIsExtraExtraSmall_dcc2a751 .presence_dcc2a751{height:8px;width:8px;border:2px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}[dir=ltr] .root_dcc2a751.rootIsExtraExtraSmall_dcc2a751 .presence_dcc2a751{left:16px}[dir=rtl] .root_dcc2a751.rootIsExtraExtraSmall_dcc2a751 .presence_dcc2a751{right:16px}.root_dcc2a751.rootIsExtraExtraSmall_dcc2a751 .presenceIcon_dcc2a751{font-size:6px;line-height:9px}.root_dcc2a751.rootIsExtraExtraSmall_dcc2a751 .primaryText_dcc2a751{font-size:14px;padding-top:3px}.root_dcc2a751.rootIsExtraExtraSmall_dcc2a751 .secondaryText_dcc2a751{display:none}.root_dcc2a751.rootIsExtraExtraSmall_dcc2a751.showSecondaryText_dcc2a751{height:30px}.root_dcc2a751.rootIsExtraExtraSmall_dcc2a751.showSecondaryText_dcc2a751 .primaryText_dcc2a751,.root_dcc2a751.rootIsExtraExtraSmall_dcc2a751.showSecondaryText_dcc2a751 .secondaryText_dcc2a751{display:block;padding:0;line-height:1;overflow:visible}.root_dcc2a751.rootIs28_dcc2a751{height:28px;line-height:28px;min-width:28px;overflow:hidden}.root_dcc2a751.rootIs28_dcc2a751 .imageArea_dcc2a751,.root_dcc2a751.rootIs28_dcc2a751 .image_dcc2a751{-webkit-box-flex:0;-ms-flex:0 0 28px;flex:0 0 28px;height:28px;width:28px}.root_dcc2a751.rootIs28_dcc2a751 .placeholder_dcc2a751{font-size:18px;top:4px}.root_dcc2a751.rootIs28_dcc2a751 .initials_dcc2a751{font-size:11px;height:28px;line-height:28px}.root_dcc2a751.rootIs28_dcc2a751 .presence_dcc2a751{height:8px;width:8px;border:2px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}[dir=ltr] .root_dcc2a751.rootIs28_dcc2a751 .presence_dcc2a751{left:20px}[dir=rtl] .root_dcc2a751.rootIs28_dcc2a751 .presence_dcc2a751{right:20px}.root_dcc2a751.rootIs28_dcc2a751 .presenceIcon_dcc2a751{font-size:6px;line-height:9px}.root_dcc2a751.rootIs28_dcc2a751 .primaryText_dcc2a751{font-size:14px;padding-top:3px}.root_dcc2a751.rootIs28_dcc2a751 .secondaryText_dcc2a751{display:none}.root_dcc2a751.rootIs28_dcc2a751.showSecondaryText_dcc2a751 .primaryText_dcc2a751,.root_dcc2a751.rootIs28_dcc2a751.showSecondaryText_dcc2a751 .secondaryText_dcc2a751{display:block;padding:0;line-height:1;overflow:visible}.root_dcc2a751.rootIsExtraSmall_dcc2a751{height:32px;line-height:32px;min-width:32px}.root_dcc2a751.rootIsExtraSmall_dcc2a751 .imageArea_dcc2a751,.root_dcc2a751.rootIsExtraSmall_dcc2a751 .image_dcc2a751{-webkit-box-flex:0;-ms-flex:0 0 32px;flex:0 0 32px;height:32px;width:32px}.root_dcc2a751.rootIsExtraSmall_dcc2a751 .placeholder_dcc2a751{font-size:28px;top:6px}.root_dcc2a751.rootIsExtraSmall_dcc2a751 .initials_dcc2a751{font-size:14px;height:32px;line-height:32px}[dir=ltr] .root_dcc2a751.rootIsExtraSmall_dcc2a751 .presence_dcc2a751{left:19px}[dir=rtl] .root_dcc2a751.rootIsExtraSmall_dcc2a751 .presence_dcc2a751{right:19px}.root_dcc2a751.rootIsExtraSmall_dcc2a751 .primaryText_dcc2a751{font-size:14px;padding-top:3px}.root_dcc2a751.rootIsExtraSmall_dcc2a751 .secondaryText_dcc2a751{display:none}.root_dcc2a751.rootIsExtraSmall_dcc2a751.showSecondaryText_dcc2a751 .primaryText_dcc2a751,.root_dcc2a751.rootIsExtraSmall_dcc2a751.showSecondaryText_dcc2a751 .secondaryText_dcc2a751{display:block;padding:0;line-height:1;overflow:visible}.root_dcc2a751.rootIsSmall_dcc2a751{height:40px;line-height:40px;min-width:40px}.root_dcc2a751.rootIsSmall_dcc2a751 .imageArea_dcc2a751,.root_dcc2a751.rootIsSmall_dcc2a751 .image_dcc2a751{-webkit-box-flex:0;-ms-flex:0 0 40px;flex:0 0 40px;height:40px;width:40px}.root_dcc2a751.rootIsSmall_dcc2a751 .placeholder_dcc2a751{font-size:38px;top:5px}.root_dcc2a751.rootIsSmall_dcc2a751 .initials_dcc2a751{font-size:14px;height:40px;line-height:40px}[dir=ltr] .root_dcc2a751.rootIsSmall_dcc2a751 .presence_dcc2a751{left:27px}[dir=rtl] .root_dcc2a751.rootIsSmall_dcc2a751 .presence_dcc2a751{right:27px}.root_dcc2a751.rootIsSmall_dcc2a751 .primaryText_dcc2a751{font-size:14px}.root_dcc2a751.rootIsSmall_dcc2a751 .primaryText_dcc2a751,.root_dcc2a751.rootIsSmall_dcc2a751 .secondaryText_dcc2a751{padding-top:1px}.root_dcc2a751.rootIsLarge_dcc2a751{height:72px;line-height:72px;min-width:72px}.root_dcc2a751.rootIsLarge_dcc2a751 .imageArea_dcc2a751,.root_dcc2a751.rootIsLarge_dcc2a751 .image_dcc2a751{-webkit-box-flex:0;-ms-flex:0 0 72px;flex:0 0 72px;height:72px;width:72px}.root_dcc2a751.rootIsLarge_dcc2a751 .placeholder_dcc2a751{font-size:67px;top:10px}.root_dcc2a751.rootIsLarge_dcc2a751 .initials_dcc2a751{font-size:28px;height:72px;line-height:70px}.root_dcc2a751.rootIsLarge_dcc2a751 .presence_dcc2a751{height:20px;width:20px;border-width:3px}[dir=ltr] .root_dcc2a751.rootIsLarge_dcc2a751 .presence_dcc2a751{left:49px}[dir=rtl] .root_dcc2a751.rootIsLarge_dcc2a751 .presence_dcc2a751{right:49px}.root_dcc2a751.rootIsLarge_dcc2a751 .presenceIcon_dcc2a751{line-height:20px;font-size:14px}.root_dcc2a751.rootIsLarge_dcc2a751 .secondaryText_dcc2a751{padding-top:3px}.root_dcc2a751.rootIsLarge_dcc2a751 .tertiaryText_dcc2a751{padding-top:5px;display:block}.root_dcc2a751.rootIsExtraLarge_dcc2a751{height:100px;line-height:100px;min-width:100px}.root_dcc2a751.rootIsExtraLarge_dcc2a751 .imageArea_dcc2a751,.root_dcc2a751.rootIsExtraLarge_dcc2a751 .image_dcc2a751{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;height:100px;width:100px}.root_dcc2a751.rootIsExtraLarge_dcc2a751 .placeholder_dcc2a751{font-size:95px;top:12px}.root_dcc2a751.rootIsExtraLarge_dcc2a751 .initials_dcc2a751{font-size:42px;height:100px;line-height:96px}.root_dcc2a751.rootIsExtraLarge_dcc2a751 .presence_dcc2a751{height:28px;width:28px;border-width:4px}[dir=ltr] .root_dcc2a751.rootIsExtraLarge_dcc2a751 .presence_dcc2a751{left:71px}[dir=rtl] .root_dcc2a751.rootIsExtraLarge_dcc2a751 .presence_dcc2a751{right:71px}.root_dcc2a751.rootIsExtraLarge_dcc2a751 .presenceIcon_dcc2a751{line-height:28px;font-size:21px;position:relative;top:1px}.root_dcc2a751.rootIsExtraLarge_dcc2a751 .primaryText_dcc2a751{font-size:21px;font-weight:300;margin-top:0}.root_dcc2a751.rootIsExtraLarge_dcc2a751 .secondaryText_dcc2a751{padding-top:2px}.root_dcc2a751.rootIsExtraLarge_dcc2a751 .optionalText_dcc2a751,.root_dcc2a751.rootIsExtraLarge_dcc2a751 .tertiaryText_dcc2a751{padding-top:5px;display:block}.root_dcc2a751.rootIsDarkText_dcc2a751 .primaryText_dcc2a751{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.root_dcc2a751.rootIsDarkText_dcc2a751 .optionalText_dcc2a751,.root_dcc2a751.rootIsDarkText_dcc2a751 .secondaryText_dcc2a751,.root_dcc2a751.rootIsDarkText_dcc2a751 .tertiaryText_dcc2a751{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.root_dcc2a751.rootIsSelectable_dcc2a751{cursor:pointer;padding:0 10px}.root_dcc2a751.rootIsSelectable_dcc2a751:not(.rootExtraLarge_dcc2a751):focus,.root_dcc2a751.rootIsSelectable_dcc2a751:not(.rootExtraLarge_dcc2a751):hover{background-color:" }, { "theme": "themeLighter", "defaultValue": "#deecf9" }, { "rawString": ";outline:1px solid transparent}.root_dcc2a751.rootIsAvailable_dcc2a751 .presence_dcc2a751{background-color:#7fba00}@media screen and (-ms-high-contrast:active){.root_dcc2a751.rootIsAvailable_dcc2a751 .presence_dcc2a751{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.root_dcc2a751.rootIsAvailable_dcc2a751 .presence_dcc2a751{background-color:#600000}}.root_dcc2a751.rootIsAway_dcc2a751 .presence_dcc2a751{background-color:#fcd116}@media screen and (-ms-high-contrast:active){.root_dcc2a751.rootIsAway_dcc2a751 .presence_dcc2a751{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.root_dcc2a751.rootIsAway_dcc2a751 .presence_dcc2a751{background-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.root_dcc2a751.rootIsAway_dcc2a751 .presenceIcon_dcc2a751{position:relative}[dir=ltr] .root_dcc2a751.rootIsAway_dcc2a751 .presenceIcon_dcc2a751{left:1px}[dir=rtl] .root_dcc2a751.rootIsAway_dcc2a751 .presenceIcon_dcc2a751{right:1px}.root_dcc2a751.rootIsBlocked_dcc2a751 .presence_dcc2a751{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.root_dcc2a751.rootIsBlocked_dcc2a751 .presence_dcc2a751::before{content:'';width:100%;height:100%;position:absolute;top:0;box-shadow:0 0 0 2px #d93b3b inset;border-radius:50%}[dir=ltr] .root_dcc2a751.rootIsBlocked_dcc2a751 .presence_dcc2a751::before{left:0}[dir=rtl] .root_dcc2a751.rootIsBlocked_dcc2a751 .presence_dcc2a751::before{right:0}.root_dcc2a751.rootIsBlocked_dcc2a751 .presence_dcc2a751::after{content:'';width:100%;height:2px;background-color:#d93b3b;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);position:absolute;top:40%}[dir=ltr] .root_dcc2a751.rootIsBlocked_dcc2a751 .presence_dcc2a751::after{left:0}[dir=rtl] .root_dcc2a751.rootIsBlocked_dcc2a751 .presence_dcc2a751::after{right:0}@media screen and (-ms-high-contrast:active){.root_dcc2a751.rootIsBlocked_dcc2a751 .presence_dcc2a751{color:#0f0;background-color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.root_dcc2a751.rootIsBlocked_dcc2a751 .presence_dcc2a751::before{box-shadow:0 0 0 2px #0f0 inset}.root_dcc2a751.rootIsBlocked_dcc2a751 .presence_dcc2a751::after{background-color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.root_dcc2a751.rootIsBlocked_dcc2a751 .presence_dcc2a751{color:#600000;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.root_dcc2a751.rootIsBlocked_dcc2a751 .presence_dcc2a751::before{box-shadow:0 0 0 2px #600000 inset}.root_dcc2a751.rootIsBlocked_dcc2a751 .presence_dcc2a751::after{background-color:#600000}}.root_dcc2a751.rootIsBlocked_dcc2a751.rootIsLarge_dcc2a751 .presence_dcc2a751::after{top:9px}.root_dcc2a751.rootIsBlocked_dcc2a751.rootIsExtraLarge_dcc2a751 .presence_dcc2a751::after{top:13px}.root_dcc2a751.rootIsBusy_dcc2a751 .presence_dcc2a751{background-color:#d93b3b}@media screen and (-ms-high-contrast:active){.root_dcc2a751.rootIsBusy_dcc2a751 .presence_dcc2a751{background-color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.root_dcc2a751.rootIsBusy_dcc2a751 .presence_dcc2a751{background-color:#600000}}.root_dcc2a751.rootIsDoNotDisturb_dcc2a751 .presence_dcc2a751{background-color:#e81123}@media screen and (-ms-high-contrast:active){.root_dcc2a751.rootIsDoNotDisturb_dcc2a751 .presence_dcc2a751{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";background-color:#0f0}.root_dcc2a751.rootIsDoNotDisturb_dcc2a751 .presence_dcc2a751::before{background-color:#0f0}.root_dcc2a751.rootIsDoNotDisturb_dcc2a751 .presence_dcc2a751::after{background-color:#0f0}}@media screen and (-ms-high-contrast:black-on-white){.root_dcc2a751.rootIsDoNotDisturb_dcc2a751 .presence_dcc2a751{background-color:#600000}}.root_dcc2a751.rootIsOffline_dcc2a751 .presence_dcc2a751{background-color:#93abbd}@media screen and (-ms-high-contrast:active){.root_dcc2a751.rootIsOffline_dcc2a751 .presence_dcc2a751{background-color:#0f0;box-shadow:0 0 0 1px " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": " inset}}@media screen and (-ms-high-contrast:black-on-white){.root_dcc2a751.rootIsOffline_dcc2a751 .presence_dcc2a751{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";box-shadow:0 0 0 1px " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": " inset}}" }]);
module.exports = styles;
/* tslint:enable */ 



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Persona_Props_1 = __webpack_require__(24);
var stylesImport = __webpack_require__(52);
var styles = stylesImport;
exports.PERSONA_SIZE = (_a = {},
    _a[Persona_Props_1.PersonaSize.tiny] = 'ms-Persona--tiny ' + styles.rootIsTiny,
    _a[Persona_Props_1.PersonaSize.extraExtraSmall] = 'ms-Persona--xxs ' + styles.rootIsExtraExtraSmall,
    _a[Persona_Props_1.PersonaSize.extraSmall] = 'ms-Persona--xs ' + styles.rootIsExtraSmall,
    _a[Persona_Props_1.PersonaSize.small] = 'ms-Persona--sm ' + styles.rootIsSmall,
    _a[Persona_Props_1.PersonaSize.regular] = '',
    _a[Persona_Props_1.PersonaSize.large] = 'ms-Persona--lg ' + styles.rootIsLarge,
    _a[Persona_Props_1.PersonaSize.extraLarge] = 'ms-Persona--xl ' + styles.rootIsExtraLarge,
    _a[Persona_Props_1.PersonaSize.size28] = 'ms-Persona--28 ' + styles.rootIs28,
    _a);
exports.PERSONA_PRESENCE = (_b = {},
    _b[Persona_Props_1.PersonaPresence.offline] = 'ms-Persona--offline ' + styles.rootIsOffline,
    _b[Persona_Props_1.PersonaPresence.online] = 'ms-Persona--online ',
    _b[Persona_Props_1.PersonaPresence.away] = 'ms-Persona--away ' + styles.rootIsAway,
    _b[Persona_Props_1.PersonaPresence.dnd] = 'ms-Persona--dnd ' + styles.rootIsDoNotDisturb,
    _b[Persona_Props_1.PersonaPresence.blocked] = 'ms-Persona--blocked ' + styles.rootIsBlocked,
    _b[Persona_Props_1.PersonaPresence.busy] = 'ms-Persona--busy ' + styles.rootIsBusy,
    _b);
exports.PERSONA_INITIALS_COLOR = (_c = {},
    _c[Persona_Props_1.PersonaInitialsColor.lightBlue] = 'ms-Persona-initials--lightBlue ' + styles.initialsIsLightBlue,
    _c[Persona_Props_1.PersonaInitialsColor.blue] = 'ms-Persona-initials--blue ' + styles.initialsIsBlue,
    _c[Persona_Props_1.PersonaInitialsColor.darkBlue] = 'ms-Persona-initials--darkBlue ' + styles.initialsIsDarkBlue,
    _c[Persona_Props_1.PersonaInitialsColor.teal] = 'ms-Persona-initials--teal ' + styles.initialsIsTeal,
    _c[Persona_Props_1.PersonaInitialsColor.lightGreen] = 'ms-Persona-initials--lightGreen ' + styles.initialsIsLightGreen,
    _c[Persona_Props_1.PersonaInitialsColor.green] = 'ms-Persona-initials--green ' + styles.initialsIsGreen,
    _c[Persona_Props_1.PersonaInitialsColor.darkGreen] = 'ms-Persona-initials--darkGreen ' + styles.initialsIsDarkGreen,
    _c[Persona_Props_1.PersonaInitialsColor.lightPink] = 'ms-Persona-initials--lightPink ' + styles.initialsIsLightPink,
    _c[Persona_Props_1.PersonaInitialsColor.pink] = 'ms-Persona-initials--pink ' + styles.initialsIsPink,
    _c[Persona_Props_1.PersonaInitialsColor.magenta] = 'ms-Persona-initials--magenta ' + styles.initialsIsMagenta,
    _c[Persona_Props_1.PersonaInitialsColor.purple] = 'ms-Persona-initials--purple ' + styles.initialsIsPurple,
    _c[Persona_Props_1.PersonaInitialsColor.black] = 'ms-Persona-initials--black ' + styles.initialsIsBlack,
    _c[Persona_Props_1.PersonaInitialsColor.orange] = 'ms-Persona-initials--orange ' + styles.initialsIsGreen,
    _c[Persona_Props_1.PersonaInitialsColor.red] = 'ms-Persona-initials--red ' + styles.initialsIsRed,
    _c[Persona_Props_1.PersonaInitialsColor.darkRed] = 'ms-Persona-initials--darkRed ' + styles.initialsIsDarkRed,
    _c);
var _a, _b, _c;



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(173)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(172)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(55);
var containers_1 = __webpack_require__(78);
ReactDOM.render(React.createElement(containers_1.AddinPage, null), document.getElementById("addin-root"));


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports = {
    entry: "./src/app.tsx",
    output: {
        filename: "addin-bundle.js",
        path: __dirname + "/scripts"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var brand_logo_1 = __webpack_require__(59);
var BrandBar = (function (_super) {
    __extends(BrandBar, _super);
    function BrandBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrandBar.prototype.render = function () {
        var style = {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "60px",
            backgroundColor: "#ccc"
        };
        return (React.createElement("div", { style: style },
            React.createElement(brand_logo_1.default, null)));
    };
    return BrandBar;
}(React.Component));
exports.default = BrandBar;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var BrandLogo = (function (_super) {
    __extends(BrandLogo, _super);
    function BrandLogo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrandLogo.prototype.render = function () {
        var imageStyle = {
            margin: "10px auto",
            display: "block",
            height: "40px"
        };
        return (React.createElement("a", { href: "/" },
            React.createElement("img", { src: "./images/logo.png", style: imageStyle })));
    };
    return BrandLogo;
}(React.Component));
exports.default = BrandLogo;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CaseModel = (function () {
    function CaseModel(title, caseNumber, date, description, items) {
        this.title = title;
        this.caseNumber = caseNumber;
        this.date = date;
        this.description = description;
        this.items = items;
    }
    return CaseModel;
}());
exports.default = CaseModel;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var case_item_1 = __webpack_require__(26);
var CasesList = (function (_super) {
    __extends(CasesList, _super);
    function CasesList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CasesList.prototype.render = function () {
        var cases = this.props.cases;
        var caseItems = cases.map(function (c) { return React.createElement(case_item_1.default, { key: c.caseNumber, case: c }); });
        return (React.createElement("div", { className: "cases" },
            React.createElement("h4", null, "Cases"),
            caseItems));
    };
    return CasesList;
}(React.Component));
exports.default = CasesList;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var case_model_1 = __webpack_require__(60);
exports.CaseModel = case_model_1.default;
var case_item_1 = __webpack_require__(26);
exports.CaseItem = case_item_1.default;
var cases_list_1 = __webpack_require__(61);
exports.CasesList = cases_list_1.default;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.items = [
    {
        key: "view-customer",
        name: "View customer",
        icon: "PublicContactCard"
    }
];


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var CommandBar_1 = __webpack_require__(126);
var command_bar_items_1 = __webpack_require__(63);
var CommandBarNonFocusableItemsExample = (function (_super) {
    __extends(CommandBarNonFocusableItemsExample, _super);
    function CommandBarNonFocusableItemsExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommandBarNonFocusableItemsExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(CommandBar_1.CommandBar, { isSearchBoxVisible: false, items: command_bar_items_1.items })));
    };
    return CommandBarNonFocusableItemsExample;
}(React.Component));
exports.default = CommandBarNonFocusableItemsExample;
//   farItems={ farItemsNonFocusable } 


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var CompanyDetails = (function (_super) {
    __extends(CompanyDetails, _super);
    function CompanyDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompanyDetails.prototype.render = function () {
        var company = this.props.company;
        return (React.createElement("div", { className: "details-sheet" },
            React.createElement("h4", null, "Company details"),
            React.createElement("div", null,
                React.createElement("span", null, "Name"),
                company.name),
            React.createElement("div", null,
                React.createElement("span", null, "Address"),
                company.address),
            React.createElement("div", null,
                React.createElement("span", null, "Phone"),
                company.phone),
            React.createElement("div", null,
                React.createElement("span", null, "CVR"),
                company.vatNumber)));
    };
    return CompanyDetails;
}(React.Component));
exports.default = CompanyDetails;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CompanyModel = (function () {
    function CompanyModel(name, address, phone, vatNumber, contacts, cases) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.vatNumber = vatNumber;
        this.contacts = contacts;
        this.cases = cases;
    }
    return CompanyModel;
}());
exports.default = CompanyModel;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var company_model_1 = __webpack_require__(66);
exports.Company = company_model_1.default;
var company_details_1 = __webpack_require__(65);
exports.CompanyDetails = company_details_1.default;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ContactConversations = (function (_super) {
    __extends(ContactConversations, _super);
    function ContactConversations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactConversations.prototype.render = function () {
        var contact = this.props.contact;
        var items = contact.items.slice(0, 3).map(function (c, i) {
            return (React.createElement("div", { key: i },
                React.createElement("span", null, "E-mail"),
                c.title));
        });
        return (React.createElement("div", { className: "details-sheet" },
            React.createElement("h4", null, "Conversations"),
            items));
    };
    return ContactConversations;
}(React.Component));
exports.default = ContactConversations;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ContactDetails = (function (_super) {
    __extends(ContactDetails, _super);
    function ContactDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactDetails.prototype.render = function () {
        var contact = this.props.contact;
        return (React.createElement("div", { className: "details-sheet" },
            React.createElement("h4", null, "Contact details"),
            React.createElement("div", null,
                React.createElement("span", null, "Name"),
                contact.firstName,
                " ",
                contact.lastName),
            React.createElement("div", null,
                React.createElement("span", null, "Title"),
                contact.jobTitle),
            React.createElement("div", null,
                React.createElement("span", null, "Phone"),
                contact.phone),
            React.createElement("div", null,
                React.createElement("span", null, "E-mail"),
                contact.email)));
    };
    return ContactDetails;
}(React.Component));
exports.default = ContactDetails;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContactEvent = (function () {
    function ContactEvent(title, link) {
        this.title = title;
        this.link = link;
    }
    return ContactEvent;
}());
exports.default = ContactEvent;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ContactEvents = (function (_super) {
    __extends(ContactEvents, _super);
    function ContactEvents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactEvents.prototype.render = function () {
        var items = [
            { title: "Seminar om overimplementering af EU-ret" },
            { title: "\"Godmorgen, SKAT\": Præjudicielle forelæggelser i skattesager" },
            { title: "Roger L. Martin - Understanding Big Data" },
            { title: "Peter Fisk - The 10X leader" }
        ].map(function (c, i) {
            return (React.createElement("div", { key: i }, c.title));
        });
        return (React.createElement("div", { className: "details-sheet" },
            React.createElement("h4", null, "Events"),
            items));
    };
    return ContactEvents;
}(React.Component));
exports.default = ContactEvents;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContactModel = (function () {
    function ContactModel(firstName, lastName, jobTitle, phone, email, items) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.phone = phone;
        this.email = email;
        this.items = items;
    }
    return ContactModel;
}());
exports.default = ContactModel;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
// import {
//     Persona,
//     PersonaInitialsColor,
// } from 'office-ui-fabric-react/lib/Persona';
var DocumentCard_1 = __webpack_require__(36);
var personaStyle = {
    marginBottom: "5px"
};
var ContactsList = (function (_super) {
    __extends(ContactsList, _super);
    function ContactsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactsList.prototype.render = function () {
        var contact = this.props.contact;
        var fullName = contact.firstName + " " + contact.lastName;
        var previewProps = {
            getOverflowDocumentCountText: function (overflowCount) { return overflowCount > 0 ? "+" + overflowCount + " more" : ""; },
            previewImages: contact.items.map(function (i) {
                return {
                    name: i.title,
                    url: i.link,
                    width: 144,
                    iconSrc: "./images/email.png"
                };
            })
        };
        //   [
        //     {
        //       name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
        //       url: 'http://bing.com',
        //       previewImageSrc: 'dist/document-preview.png',
        //       iconSrc: 'dist/icon-ppt.png',
        //       width: 144
        //     }
        //   ],
        var cardTitle = contact.items.length > 0 ? contact.items[0].title : "Click to see more details";
        var documentStyle = {
            marginBottom: "15px"
        };
        return (React.createElement("div", { style: documentStyle },
            React.createElement(DocumentCard_1.DocumentCard, { type: DocumentCard_1.DocumentCardType.compact, onClickHref: '/?single=1', accentColor: '#ce4b1f' },
                React.createElement(DocumentCard_1.DocumentCardPreview, __assign({}, previewProps)),
                React.createElement("div", { className: 'ms-DocumentCard-details' },
                    React.createElement(DocumentCard_1.DocumentCardTitle, { title: cardTitle, shouldTruncate: true }),
                    React.createElement(DocumentCard_1.DocumentCardActivity, { activity: contact.jobTitle, people: [
                            { name: fullName, profileImageSrc: 'images/person.png' }
                        ] })))));
    };
    return ContactsList;
}(React.Component));
exports.default = ContactsList;
/*<Persona
                    secondaryText={contact.jobTitle}
                    primaryText={fullName}
                    style={personaStyle}
                />*/ 


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var contacts_list_item_1 = __webpack_require__(73);
var ContactsList = (function (_super) {
    __extends(ContactsList, _super);
    function ContactsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactsList.prototype.render = function () {
        var contacts = this.props.contacts;
        var items = contacts ?
            contacts.map(function (c, i) { return React.createElement(contacts_list_item_1.default, { contact: c, key: i }); }) :
            null;
        return (React.createElement("div", null,
            React.createElement("h4", null, "Contacts"),
            items));
    };
    return ContactsList;
}(React.Component));
exports.default = ContactsList;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var contact_model_1 = __webpack_require__(72);
exports.ContactModel = contact_model_1.default;
var contact_details_1 = __webpack_require__(69);
exports.ContactDetails = contact_details_1.default;
var contacts_list_1 = __webpack_require__(74);
exports.ContactsList = contacts_list_1.default;
var contact_event_1 = __webpack_require__(70);
exports.ContactEvent = contact_event_1.default;
var contact_conversations_1 = __webpack_require__(68);
exports.ContactConversations = contact_conversations_1.default;
var contact_events_1 = __webpack_require__(71);
exports.ContactEvents = contact_events_1.default;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var brand_bar_1 = __webpack_require__(58);
exports.BrandBar = brand_bar_1.default;
var command_bar_1 = __webpack_require__(64);
exports.CommandBar = command_bar_1.default;
__export(__webpack_require__(75));
__export(__webpack_require__(67));
__export(__webpack_require__(62));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Fabric_1 = __webpack_require__(37);
var components_1 = __webpack_require__(76);
var contacts = [
    {
        firstName: "Morten",
        lastName: "Pedersen",
        jobTitle: "CEO",
        phone: "12 78 65 65",
        email: "mtp@delegate.dk",
        items: [
            new components_1.ContactEvent("FW: RE: Need documents for signing", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Legal advice", "https://www.delegate.dk/"),
            new components_1.ContactEvent("RE: Legal advice", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Something more", "https://www.delegate.dk/")
        ]
    },
    {
        firstName: "Jannik",
        lastName: "Rasmussen",
        jobTitle: "Managing Specialist",
        phone: "41 72 32 06",
        email: "jra@delegate.dk",
        items: [
            new components_1.ContactEvent("RE: Upcoming event", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Access to systems", "https://www.delegate.dk/"),
            new components_1.ContactEvent("Need legal advice on blue print", "https://www.delegate.dk/"),
            new components_1.ContactEvent("FW: Legal advice regarding #11030", "https://www.delegate.dk/")
        ]
    },
];
var company = {
    name: "Delegate A/S",
    address: "Hummeltoftevej 49, 2830 Virum",
    phone: "45 82 82 82",
    vatNumber: "29772843",
    contacts: contacts,
    cases: [
        new components_1.CaseModel("Persondata: CPR oplysninger i CV'er", "214409", new Date(), "Undersøg om CPR oplysninger er opbevaret korrekt, og inden for lovens rammer.", [
            {
                title: "Rapport vedr. CPR numre",
                link: ""
            },
            {
                title: "RE: Sparring omkring ny lovgivning",
                link: ""
            },
            {
                title: "RE: Sparring omkring ny lovgivning",
                link: ""
            },
            {
                title: "RE: Sparring omkring ny lovgivning",
                link: ""
            },
            {
                title: "RE: Sparring omkring ny lovgivning",
                link: ""
            }
        ]),
        new components_1.CaseModel("Opening New Zealand office", "213346", new Date(new Date().setMonth(1)), "Delegate is opening new office in New Zealand.", [
            {
                title: "RE: New Zealand office",
                link: ""
            },
            {
                title: "RE: New Zealand office",
                link: ""
            },
            {
                title: "New Zealand office",
                link: ""
            }
        ])
    ]
};
var singleContact = [
    contacts[0]
];
if (typeof Object.assign != 'function') {
    Object.assign = function (target, varArgs) {
        'use strict';
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];
            if (nextSource != null) {
                for (var nextKey in nextSource) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    };
}
function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
/// cases
var theCompany = getParameterByName('single') ? Object.assign({}, company, { contacts: singleContact }) : company;
var AddinPage = (function (_super) {
    __extends(AddinPage, _super);
    function AddinPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddinPage.prototype.render = function () {
        var childrenStyle = {
            padding: "15px 15px 75px 15px"
        };
        return (React.createElement(Fabric_1.Fabric, null,
            React.createElement(components_1.CommandBar, null),
            React.createElement("div", { style: childrenStyle },
                React.createElement("h1", null, company.name),
                theCompany.contacts.length == 1 ?
                    React.createElement("div", null,
                        React.createElement(components_1.ContactConversations, { contact: theCompany.contacts[0] }),
                        React.createElement(components_1.ContactEvents, { contact: theCompany.contacts[0] }),
                        React.createElement(components_1.ContactDetails, { contact: theCompany.contacts[0] }))
                    :
                        React.createElement(components_1.ContactsList, { contacts: theCompany.contacts }),
                React.createElement(components_1.CasesList, { cases: theCompany.cases }),
                React.createElement(components_1.CompanyDetails, { company: theCompany })),
            React.createElement(components_1.BrandBar, null)));
    };
    return AddinPage;
}(React.Component));
exports.default = AddinPage;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var addin_page_1 = __webpack_require__(77);
exports.AddinPage = addin_page_1.default;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(6);
var index_2 = __webpack_require__(10);
exports.AnimationClassNames = index_1.buildClassMap(index_2.AnimationStyles);



/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(6);
var DefaultPalette_1 = __webpack_require__(27);
exports.ColorClassNames = {};
for (var colorName in DefaultPalette_1.DefaultPalette) {
    if (DefaultPalette_1.DefaultPalette.hasOwnProperty(colorName)) {
        // Foreground color
        _defineGetter(exports.ColorClassNames, colorName, '', false, 'color');
        // Hover color
        _defineGetter(exports.ColorClassNames, colorName, 'Hover', true, 'color');
        // Background color
        _defineGetter(exports.ColorClassNames, colorName, 'Background', false, 'background');
        // Background hover
        _defineGetter(exports.ColorClassNames, colorName, 'BackgroundHover', true, 'background');
        // Border color
        _defineGetter(exports.ColorClassNames, colorName, 'Border', false, 'borderColor');
        // Border hover color
        _defineGetter(exports.ColorClassNames, colorName, 'BorderHover', true, 'borderColor');
    }
}
/**
 * Defines a getter for the given class configuration.
 */
function _defineGetter(obj, colorName, suffix, isHover, cssProperty) {
    Object.defineProperty(obj, colorName + suffix, {
        get: function () {
            var style = (_a = {}, _a[cssProperty] = index_1.getTheme().palette[colorName], _a);
            return index_1.mergeStyles(isHover ? { ':hover': style } : style).toString();
            var _a;
        },
        enumerable: true,
        configurable: true
    });
}



/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(6);
var index_2 = __webpack_require__(10);
exports.FontClassNames = index_1.buildClassMap(index_2.DefaultFontStyles);



/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(10);
var index_2 = __webpack_require__(6);
/**
 * All class names for all Fabric icons.
 */
exports.IconClassNames = {};
var _loop_1 = function (iconName) {
    Object.defineProperty(exports.IconClassNames, iconName, {
        get: function () {
            var className = index_2.mergeStyles(index_1.DefaultFontStyles.icon, {
                ':before': {
                    content: "\"" + index_1.IconCodes[iconName] + "\""
                }
            }).toString();
            return className;
        },
        enumerable: true,
        configurable: true
    });
};
// tslint:disable-next-line:forin
for (var iconName in index_1.IconCodes) {
    _loop_1(iconName);
}



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationClassNames_1 = __webpack_require__(79);
exports.AnimationClassNames = AnimationClassNames_1.AnimationClassNames;
var FontClassNames_1 = __webpack_require__(81);
exports.FontClassNames = FontClassNames_1.FontClassNames;
var IconClassNames_1 = __webpack_require__(82);
exports.IconClassNames = IconClassNames_1.IconClassNames;
var ColorClassNames_1 = __webpack_require__(80);
exports.ColorClassNames = ColorClassNames_1.ColorClassNames;



/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(12));
__export(__webpack_require__(83));
__export(__webpack_require__(10));
__export(__webpack_require__(6));



/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var glamorExports_1 = __webpack_require__(12);
/* Register the keyframes */
var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = glamorExports_1.keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 }
});
var FADE_OUT = glamorExports_1.keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 }
});
var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
var SLIDE_LEFT_IN10 = _createSlideInX(10);
var SLIDE_LEFT_IN20 = _createSlideInX(20);
var SLIDE_LEFT_IN40 = _createSlideInX(40);
var SLIDE_LEFT_IN400 = _createSlideInX(400);
var SLIDE_UP_IN10 = _createSlideInY(10);
var SLIDE_UP_IN20 = _createSlideInY(20);
var SLIDE_DOWN_IN10 = _createSlideInY(-10);
var SLIDE_DOWN_IN20 = _createSlideInY(-20);
var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
var SLIDE_UP_OUT10 = _createSlideOutY(-10);
var SLIDE_UP_OUT20 = _createSlideOutY(-20);
var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
var SCALE_UP100 = glamorExports_1.keyframes({
    from: { transform: 'scale3d(.98,.98,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_DOWN98 = glamorExports_1.keyframes({
    from: { transform: 'scale3d(1,1,1)' },
    'top': { transform: 'scale3d(.98,.98,1)' },
});
var SCALE_DOWN100 = glamorExports_1.keyframes({
    from: { transform: 'scale3d(1.03,1.03,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_UP103 = glamorExports_1.keyframes({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(1.03,1.03,1)' }
});
var ROTATE90 = glamorExports_1.keyframes({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(90deg)' }
});
var ROTATE_N90 = glamorExports_1.keyframes({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(-90deg)' }
});
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
exports.AnimationStyles = {
    slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
    slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
    slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
    slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
    scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
    scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
    scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
    scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
    fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
    fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
    fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
    fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
    fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
    fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
    fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
    fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
    rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
    rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2)
    // expandCollapse 100/200/400, delay 100/200
};
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return {
        animationName: animationName,
        animationDuration: animationDuration,
        animationTimingFunction: animationTimingFunction,
        animationFillMode: 'both'
    };
}
function _createSlideInX(fromX) {
    return glamorExports_1.keyframes({
        from: { transform: "translate3d(" + fromX + "px,0,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideInY(fromY) {
    return glamorExports_1.keyframes({
        from: { transform: "translate3d(0," + fromY + "px,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideOutX(toX) {
    return glamorExports_1.keyframes({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(" + toX + "px,0,0)" }
    });
}
function _createSlideOutY(toY) {
    return glamorExports_1.keyframes({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(0," + toY + "px,0)" }
    });
}



/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var glamorExports_1 = __webpack_require__(12);
var index_1 = __webpack_require__(17);
// Default urls.
var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "-apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// Font face names to be registered.
var FontNameArabic = 'Segoe UI Web (Arabic)';
var FontNameCyrillic = 'Segoe UI Web (Cyrillic)';
var FontNameEastEuropean = 'Segoe UI Web (East European)';
var FontNameGreek = 'Segoe UI Web (Greek)';
var FontNameHebrew = 'Segoe UI Web (Hebrew)';
var FontNameThai = 'Leelawadee UI Web';
var FontNameVietnamese = 'Segoe UI Web (Vietnamese)';
var FontNameWestEuropean = 'Segoe UI Web (West European)';
var FontNameSelawik = 'Selawik Web';
// Font families with fallbacks, for the general regions.
var FontFamilyArabic = "'" + FontNameArabic + "'";
var FontFamilyChineseSimplified = "'Microsoft Yahei', Verdana, Simsun";
var FontFamilyChineseTraditional = "'Microsoft Jhenghei', Pmingliu";
var FontFamilyCyrillic = "'" + FontNameCyrillic + "'";
var FontFamilyEastEuropean = "'" + FontNameEastEuropean + "'";
var FontFamilyGreek = "'" + FontNameGreek + "'";
var FontFamilyHebrew = "'" + FontNameHebrew + "'";
var FontFamilyHindi = "'Nirmala UI'";
var FontFamilyJapanese = "'Yu Gothic', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
var FontFamilyKorean = "'Malgun Gothic', Gulim";
var FontFamilySelawik = "'" + FontNameSelawik + "'";
var FontFamilyThai = "'Leelawadee UI Web', 'Kmer UI'";
var FontFamilyVietnamese = "'" + FontNameVietnamese + "'";
var FontFamilyWestEuropean = "'" + FontNameWestEuropean + "'";
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    'ar': FontFamilyArabic,
    'bg': FontFamilyCyrillic,
    'cs': FontFamilyEastEuropean,
    'el': FontFamilyGreek,
    'et': FontFamilyEastEuropean,
    'he': FontFamilyHebrew,
    'hi': FontFamilyHindi,
    'hr': FontFamilyEastEuropean,
    'hu': FontFamilyEastEuropean,
    'ja': FontFamilyJapanese,
    'kk': FontFamilyEastEuropean,
    'ko': FontFamilyKorean,
    'lt': FontFamilyEastEuropean,
    'lv': FontFamilyEastEuropean,
    'pl': FontFamilyEastEuropean,
    'ru': FontFamilyCyrillic,
    'sk': FontFamilyEastEuropean,
    'sr-latn': FontFamilyEastEuropean,
    'th': FontFamilyThai,
    'tr': FontFamilyEastEuropean,
    'uk': FontFamilyCyrillic,
    'vi': FontFamilyVietnamese,
    'zh-hans': FontFamilyChineseSimplified,
    'zh-hant': FontFamilyChineseTraditional,
};
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.mini = '10px';
    FontSizes.xSmall = '11px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '13px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '15px';
    FontSizes.icon = '16px';
    FontSizes.large = '17px';
    FontSizes.xLarge = '21px';
    FontSizes.xxLarge = '28px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '72px';
})(FontSizes = exports.FontSizes || (exports.FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights = exports.FontWeights || (exports.FontWeights = {}));
// Standard font styling.
exports.DefaultFontStyles = {
    tiny: _createFont(FontSizes.mini, FontWeights.semibold),
    xSmall: _createFont(FontSizes.xSmall, FontWeights.regular),
    small: _createFont(FontSizes.small, FontWeights.regular),
    smallPlus: _createFont(FontSizes.smallPlus, FontWeights.regular),
    medium: _createFont(FontSizes.medium, FontWeights.regular),
    mediumPlus: _createFont(FontSizes.mediumPlus, FontWeights.regular),
    large: _createFont(FontSizes.large, FontWeights.semilight),
    xLarge: _createFont(FontSizes.xLarge, FontWeights.light),
    xxLarge: _createFont(FontSizes.xxLarge, FontWeights.light),
    superLarge: _createFont(FontSizes.superLarge, FontWeights.light),
    mega: _createFont(FontSizes.mega, FontWeights.light),
    icon: {
        fontFamily: '"FabricMDL2Icons"',
        fontWeight: FontWeights.regular,
        fontStyle: 'normal'
    }
};
function _getFontFamily() {
    var language = index_1.getLanguage();
    var fontFamily = FontFamilyWestEuropean;
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && lang.indexOf(language) === 0) {
            fontFamily = LanguageToFontMap[lang];
            break;
        }
    }
    return fontFamily + ", " + FontFamilyFallbacks;
}
function _createFont(size, weight) {
    return {
        fontFamily: _getFontFamily(),
        MozOsxFontSmoothing: 'grayscale',
        MsHighContrastAdjust: 'none',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight
    };
}
function _registerFontFace(fontFamily, url, fontWeight) {
    fontFamily = "'" + fontFamily + "'";
    glamorExports_1.fontFace({
        fontFamily: fontFamily,
        src: "url('" + url + ".woff2') format('woff2')," +
            ("url('" + url + ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal'
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    _registerFontFace(fontFamily, urlBase + '-light', FontWeights.light);
    _registerFontFace(fontFamily, urlBase + '-semilight', FontWeights.semilight);
    _registerFontFace(fontFamily, urlBase + '-regular', FontWeights.regular);
    _registerFontFace(fontFamily, urlBase + '-semibold', FontWeights.semibold);
}
function _registerDefaultFontFaces() {
    var baseUrl = _getFontBaseUrl();
    if (baseUrl) {
        var fontUrl = baseUrl + "/fonts";
        var iconUrl = baseUrl + "/icons";
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, FontNameThai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, FontNameArabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, FontNameCyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, FontNameEastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, FontNameGreek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, FontNameHebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, FontNameVietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, FontNameWestEuropean, 'segoeui-westeuropean');
        _registerFontFaceSet(fontUrl, FontFamilySelawik, 'selawik', 'selawik');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", FontWeights.light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", FontWeights.semibold);
        // Register icon urls.
        _registerFontFace('FabricMDL2Icons', iconUrl + "/fabricmdl2icons", FontWeights.regular);
    }
}
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var win = index_1.getWindow();
    // tslint:disable-next-line:no-string-literal
    var fabricConfig = win ? win['FabricConfig'] : undefined;
    return (fabricConfig && fabricConfig.fontBaseUrl !== undefined) ? fabricConfig.fontBaseUrl : DefaultBaseUrl;
}
/**
 * Register the font faces.
 */
_registerDefaultFontFaces();



/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IconCodes = {
    /**
     * Icon code with the value '\uED68'.
     */
    aadLogo: '\uED68',
    /**
     * Icon code with the value '\uE8FB'.
     */
    accept: '\uE8FB',
    /**
     * Icon code with the value '\uED69'.
     */
    accessLogo: '\uED69',
    /**
     * Icon code with the value '\uE910'.
     */
    accounts: '\uE910',
    /**
     * Icon code with the value '\uE710'.
     */
    add: '\uE710',
    /**
     * Icon code with the value '\uEEB5'.
     */
    addEvent: '\uEEB5',
    /**
     * Icon code with the value '\uF0C8'.
     */
    addFavorite: '\uF0C8',
    /**
     * Icon code with the value '\uF0C9'.
     */
    addFavoriteFill: '\uF0C9',
    /**
     * Icon code with the value '\uE8FA'.
     */
    addFriend: '\uE8FA',
    /**
     * Icon code with the value '\uEE3D'.
     */
    addGroup: '\uEE3D',
    /**
     * Icon code with the value '\uED8E'.
     */
    addOnlineMeeting: '\uED8E',
    /**
     * Icon code with the value '\uED96'.
     */
    addPhone: '\uED96',
    /**
     * Icon code with the value '\uECC8'.
     */
    addTo: '\uECC8',
    /**
     * Icon code with the value '\uE7EF'.
     */
    admin: '\uE7EF',
    /**
     * Icon code with the value '\uED6A'.
     */
    adminALogo: '\uED6A',
    /**
     * Icon code with the value '\uED6B'.
     */
    adminCLogo: '\uED6B',
    /**
     * Icon code with the value '\uED6C'.
     */
    adminDLogo: '\uED6C',
    /**
     * Icon code with the value '\uED6D'.
     */
    adminELogo: '\uED6D',
    /**
     * Icon code with the value '\uED6E'.
     */
    adminLLogo: '\uED6E',
    /**
     * Icon code with the value '\uED6F'.
     */
    adminMLogo: '\uED6F',
    /**
     * Icon code with the value '\uED70'.
     */
    adminOLogo: '\uED70',
    /**
     * Icon code with the value '\uED71'.
     */
    adminPLogo: '\uED71',
    /**
     * Icon code with the value '\uED72'.
     */
    adminSLogo: '\uED72',
    /**
     * Icon code with the value '\uED73'.
     */
    adminYLogo: '\uED73',
    /**
     * Icon code with the value '\uEF7A'.
     */
    airTickets: '\uEF7A',
    /**
     * Icon code with the value '\uE709'.
     */
    airplane: '\uE709',
    /**
     * Icon code with the value '\uE919'.
     */
    alarmClock: '\uE919',
    /**
     * Icon code with the value '\uE7AB'.
     */
    album: '\uE7AB',
    /**
     * Icon code with the value '\uEC62'.
     */
    albumRemove: '\uEC62',
    /**
     * Icon code with the value '\uED74'.
     */
    alchemyLogo: '\uED74',
    /**
     * Icon code with the value '\uE8E3'.
     */
    alignCenter: '\uE8E3',
    /**
     * Icon code with the value '\uE8E4'.
     */
    alignLeft: '\uE8E4',
    /**
     * Icon code with the value '\uE8E2'.
     */
    alignRight: '\uE8E2',
    /**
     * Icon code with the value '\uEF8B'.
     */
    androidLogo: '\uEF8B',
    /**
     * Icon code with the value '\uE924'.
     */
    annotation: '\uE924',
    /**
     * Icon code with the value '\uEEC7'.
     */
    appForOfficeLogo: '\uEEC7',
    /**
     * Icon code with the value '\uECAA'.
     */
    appIconDefault: '\uECAA',
    /**
     * Icon code with the value '\uEB34'.
     */
    arrivals: '\uEB34',
    /**
     * Icon code with the value '\uEED5'.
     */
    arrowDownRight8: '\uEED5',
    /**
     * Icon code with the value '\uEEF0'.
     */
    arrowDownRightMirrored8: '\uEEF0',
    /**
     * Icon code with the value '\uEED4'.
     */
    arrowUpRight8: '\uEED4',
    /**
     * Icon code with the value '\uEEEF'.
     */
    arrowUpRightMirrored8: '\uEEEF',
    /**
     * Icon code with the value '\uEAC1'.
     */
    articles: '\uEAC1',
    /**
     * Icon code with the value '\uEDC0'.
     */
    ascending: '\uEDC0',
    /**
     * Icon code with the value '\uEEB6'.
     */
    assetLibrary: '\uEEB6',
    /**
     * Icon code with the value '\uEA38'.
     */
    asterisk: '\uEA38',
    /**
     * Icon code with the value '\uEF85'.
     */
    atpLogo: '\uEF85',
    /**
     * Icon code with the value '\uE723'.
     */
    attach: '\uE723',
    /**
     * Icon code with the value '\uEE70'.
     */
    australianRules: '\uEE70',
    /**
     * Icon code with the value '\uE78E'.
     */
    autoEnhanceOff: '\uE78E',
    /**
     * Icon code with the value '\uE78D'.
     */
    autoEnhanceOn: '\uE78D',
    /**
     * Icon code with the value '\uEB24'.
     */
    autoRacing: '\uEB24',
    /**
     * Icon code with the value '\uEE6A'.
     */
    awayStatus: '\uEE6A',
    /**
     * Icon code with the value '\uEB6A'.
     */
    azureLogo: '\uEB6A',
    /**
     * Icon code with the value '\uE72B'.
     */
    back: '\uE72B',
    /**
     * Icon code with the value '\uE73F'.
     */
    backToWindow: '\uE73F',
    /**
     * Icon code with the value '\uEC1B'.
     */
    badge: '\uEC1B',
    /**
     * Icon code with the value '\uED7E'.
     */
    balloons: '\uED7E',
    /**
     * Icon code with the value '\uEAE7'.
     */
    barChart4: '\uEAE7',
    /**
     * Icon code with the value '\uE9EB'.
     */
    barChartHorizontal: '\uE9EB',
    /**
     * Icon code with the value '\uEB20'.
     */
    baseball: '\uEB20',
    /**
     * Icon code with the value '\uE9AA'.
     */
    bidiLtr: '\uE9AA',
    /**
     * Icon code with the value '\uE9AB'.
     */
    bidiRtl: '\uE9AB',
    /**
     * Icon code with the value '\uEB6B'.
     */
    bingLogo: '\uEB6B',
    /**
     * Icon code with the value '\uE8F8'.
     */
    blockContact: '\uE8F8',
    /**
     * Icon code with the value '\uECE4'.
     */
    blocked2: '\uECE4',
    /**
     * Icon code with the value '\uE733'.
     */
    blocked: '\uE733',
    /**
     * Icon code with the value '\uE9C9'.
     */
    blowingSnow: '\uE9C9',
    /**
     * Icon code with the value '\uEF68'.
     */
    boards: '\uEF68',
    /**
     * Icon code with the value '\uE8DD'.
     */
    bold: '\uE8DD',
    /**
     * Icon code with the value '\uEDC7'.
     */
    bookingsLogo: '\uEDC7',
    /**
     * Icon code with the value '\uE8A4'.
     */
    bookmarks: '\uE8A4',
    /**
     * Icon code with the value '\uEA41'.
     */
    bookmarksMirrored: '\uEA41',
    /**
     * Icon code with the value '\uED75'.
     */
    boxLogo: '\uED75',
    /**
     * Icon code with the value '\uF173'.
     */
    branchFork: '\uF173',
    /**
     * Icon code with the value '\uEF8C'.
     */
    breadcrumb: '\uEF8C',
    /**
     * Icon code with the value '\uE706'.
     */
    brightness: '\uE706',
    /**
     * Icon code with the value '\uEA99'.
     */
    broom: '\uEA99',
    /**
     * Icon code with the value '\uF0D0'.
     */
    bufferTimeAfter: '\uF0D0',
    /**
     * Icon code with the value '\uF0CF'.
     */
    bufferTimeBefore: '\uF0CF',
    /**
     * Icon code with the value '\uF0D1'.
     */
    bufferTimeBoth: '\uF0D1',
    /**
     * Icon code with the value '\uE8FD'.
     */
    bulletedList: '\uE8FD',
    /**
     * Icon code with the value '\uEA42'.
     */
    bulletedListMirrored: '\uEA42',
    /**
     * Icon code with the value '\uEB47'.
     */
    busSolid: '\uEB47',
    /**
     * Icon code with the value '\uEC32'.
     */
    cafe: '\uEC32',
    /**
     * Icon code with the value '\uECA4'.
     */
    cake: '\uECA4',
    /**
     * Icon code with the value '\uE948'.
     */
    calculatorAddition: '\uE948',
    /**
     * Icon code with the value '\uE949'.
     */
    calculatorSubtract: '\uE949',
    /**
     * Icon code with the value '\uE787'.
     */
    calendar: '\uE787',
    /**
     * Icon code with the value '\uEE9A'.
     */
    calendarAgenda: '\uEE9A',
    /**
     * Icon code with the value '\uE8BF'.
     */
    calendarDay: '\uE8BF',
    /**
     * Icon code with the value '\uED28'.
     */
    calendarMirrored: '\uED28',
    /**
     * Icon code with the value '\uE8F5'.
     */
    calendarReply: '\uE8F5',
    /**
     * Icon code with the value '\uE8C0'.
     */
    calendarWeek: '\uE8C0',
    /**
     * Icon code with the value '\uEF51'.
     */
    calendarWorkWeek: '\uEF51',
    /**
     * Icon code with the value '\uF172'.
     */
    caloriesAdd: '\uF172',
    /**
     * Icon code with the value '\uE722'.
     */
    camera: '\uE722',
    /**
     * Icon code with the value '\uE711'.
     */
    cancel: '\uE711',
    /**
     * Icon code with the value '\uE804'.
     */
    car: '\uE804',
    /**
     * Icon code with the value '\uF121'.
     */
    caretBottomLeftSolid8: '\uF121',
    /**
     * Icon code with the value '\uF122'.
     */
    caretBottomRightSolid8: '\uF122',
    /**
     * Icon code with the value '\uEDD8'.
     */
    caretDown8: '\uEDD8',
    /**
     * Icon code with the value '\uEDDC'.
     */
    caretDownSolid8: '\uEDDC',
    /**
     * Icon code with the value '\uE817'.
     */
    caretHollow: '\uE817',
    /**
     * Icon code with the value '\uEA45'.
     */
    caretHollowMirrored: '\uEA45',
    /**
     * Icon code with the value '\uEDD5'.
     */
    caretLeft8: '\uEDD5',
    /**
     * Icon code with the value '\uEDD9'.
     */
    caretLeftSolid8: '\uEDD9',
    /**
     * Icon code with the value '\uEDD6'.
     */
    caretRight8: '\uEDD6',
    /**
     * Icon code with the value '\uEDDA'.
     */
    caretRightSolid8: '\uEDDA',
    /**
     * Icon code with the value '\uE818'.
     */
    caretSolid: '\uE818',
    /**
     * Icon code with the value '\uEA46'.
     */
    caretSolidMirrored: '\uEA46',
    /**
     * Icon code with the value '\uEF54'.
     */
    caretTopLeftSolid8: '\uEF54',
    /**
     * Icon code with the value '\uEF55'.
     */
    caretTopRightSolid8: '\uEF55',
    /**
     * Icon code with the value '\uEDD7'.
     */
    caretUp8: '\uEDD7',
    /**
     * Icon code with the value '\uEDDB'.
     */
    caretUpSolid8: '\uEDDB',
    /**
     * Icon code with the value '\uED7F'.
     */
    cat: '\uED7F',
    /**
     * Icon code with the value '\uE8EA'.
     */
    cellPhone: '\uE8EA',
    /**
     * Icon code with the value '\uEB95'.
     */
    certificate: '\uEB95',
    /**
     * Icon code with the value '\uE999'.
     */
    chart: '\uE999',
    /**
     * Icon code with the value '\uE901'.
     */
    chat: '\uE901',
    /**
     * Icon code with the value '\uECFE'.
     */
    chatInviteFriend: '\uECFE',
    /**
     * Icon code with the value '\uE9D5'.
     */
    checkList: '\uE9D5',
    /**
     * Icon code with the value '\uE73E'.
     */
    checkMark: '\uE73E',
    /**
     * Icon code with the value '\uE739'.
     */
    checkbox: '\uE739',
    /**
     * Icon code with the value '\uE73A'.
     */
    checkboxComposite: '\uE73A',
    /**
     * Icon code with the value '\uE73C'.
     */
    checkboxIndeterminate: '\uE73C',
    /**
     * Icon code with the value '\uE70D'.
     */
    chevronDown: '\uE70D',
    /**
     * Icon code with the value '\uE972'.
     */
    chevronDownMed: '\uE972',
    /**
     * Icon code with the value '\uE96E'.
     */
    chevronDownSmall: '\uE96E',
    /**
     * Icon code with the value '\uE76B'.
     */
    chevronLeft: '\uE76B',
    /**
     * Icon code with the value '\uE973'.
     */
    chevronLeftMed: '\uE973',
    /**
     * Icon code with the value '\uE96F'.
     */
    chevronLeftSmall: '\uE96F',
    /**
     * Icon code with the value '\uE76C'.
     */
    chevronRight: '\uE76C',
    /**
     * Icon code with the value '\uE974'.
     */
    chevronRightMed: '\uE974',
    /**
     * Icon code with the value '\uE970'.
     */
    chevronRightSmall: '\uE970',
    /**
     * Icon code with the value '\uE70E'.
     */
    chevronUp: '\uE70E',
    /**
     * Icon code with the value '\uE971'.
     */
    chevronUpMed: '\uE971',
    /**
     * Icon code with the value '\uE96D'.
     */
    chevronUpSmall: '\uE96D',
    /**
     * Icon code with the value '\uE830'.
     */
    chromeBack: '\uE830',
    /**
     * Icon code with the value '\uEA47'.
     */
    chromeBackMirrored: '\uEA47',
    /**
     * Icon code with the value '\uE8BB'.
     */
    chromeClose: '\uE8BB',
    /**
     * Icon code with the value '\uE921'.
     */
    chromeMinimize: '\uE921',
    /**
     * Icon code with the value '\uEA3B'.
     */
    circleFill: '\uEA3B',
    /**
     * Icon code with the value '\uED9E'.
     */
    circleHalfFull: '\uED9E',
    /**
     * Icon code with the value '\uEAEE'.
     */
    circlePlus: '\uEAEE',
    /**
     * Icon code with the value '\uEA3A'.
     */
    circleRing: '\uEA3A',
    /**
     * Icon code with the value '\uEDC8'.
     */
    classNotebookLogo: '\uEDC8',
    /**
     * Icon code with the value '\uEF75'.
     */
    classroomLogo: '\uEF75',
    /**
     * Icon code with the value '\uE894'.
     */
    clear: '\uE894',
    /**
     * Icon code with the value '\uEF8F'.
     */
    clearFilter: '\uEF8F',
    /**
     * Icon code with the value '\uEDDD'.
     */
    clearFormatting: '\uEDDD',
    /**
     * Icon code with the value '\uE9C2'.
     */
    clearNight: '\uE9C2',
    /**
     * Icon code with the value '\uE917'.
     */
    clock: '\uE917',
    /**
     * Icon code with the value '\uE89F'.
     */
    closePane: '\uE89F',
    /**
     * Icon code with the value '\uEA49'.
     */
    closePaneMirrored: '\uEA49',
    /**
     * Icon code with the value '\uEF84'.
     */
    closedCaption: '\uEF84',
    /**
     * Icon code with the value '\uECA9'.
     */
    cloudAdd: '\uECA9',
    /**
     * Icon code with the value '\uEBD3'.
     */
    cloudDownload: '\uEBD3',
    /**
     * Icon code with the value '\uEC8E'.
     */
    cloudUpload: '\uEC8E',
    /**
     * Icon code with the value '\uE9BE'.
     */
    cloudWeather: '\uE9BE',
    /**
     * Icon code with the value '\uE9BF'.
     */
    cloudy: '\uE9BF',
    /**
     * Icon code with the value '\uEA9D'.
     */
    cocktails: '\uEA9D',
    /**
     * Icon code with the value '\uE943'.
     */
    code: '\uE943',
    /**
     * Icon code with the value '\uEAEF'.
     */
    coffee: '\uEAEF',
    /**
     * Icon code with the value '\uEDC9'.
     */
    collabsDbLogo: '\uEDC9',
    /**
     * Icon code with the value '\uEF66'.
     */
    collapseMenu: '\uEF66',
    /**
     * Icon code with the value '\uEB26'.
     */
    collegeFootball: '\uEB26',
    /**
     * Icon code with the value '\uEB25'.
     */
    collegeHoops: '\uEB25',
    /**
     * Icon code with the value '\uE790'.
     */
    color: '\uE790',
    /**
     * Icon code with the value '\uEDBB'.
     */
    combine: '\uEDBB',
    /**
     * Icon code with the value '\uE942'.
     */
    compassNW: '\uE942',
    /**
     * Icon code with the value '\uE930'.
     */
    completed: '\uE930',
    /**
     * Icon code with the value '\uEC61'.
     */
    completedSolid: '\uEC61',
    /**
     * Icon code with the value '\uE77B'.
     */
    contact: '\uE77B',
    /**
     * Icon code with the value '\uEEBD'.
     */
    contactCard: '\uEEBD',
    /**
     * Icon code with the value '\uE779'.
     */
    contactInfo: '\uE779',
    /**
     * Icon code with the value '\uE7B8'.
     */
    container: '\uE7B8',
    /**
     * Icon code with the value '\uE7A1'.
     */
    contrast: '\uE7A1',
    /**
     * Icon code with the value '\uE8C8'.
     */
    copy: '\uE8C8',
    /**
     * Icon code with the value '\uEAF3'.
     */
    cotton: '\uEAF3',
    /**
     * Icon code with the value '\uEB1E'.
     */
    cricket: '\uEB1E',
    /**
     * Icon code with the value '\uEBEF'.
     */
    css: '\uEBEF',
    /**
     * Icon code with the value '\uEEBE'.
     */
    customList: '\uEEBE',
    /**
     * Icon code with the value '\uEEBF'.
     */
    customListMirrored: '\uEEBF',
    /**
     * Icon code with the value '\uEAC7'.
     */
    cycling: '\uEAC7',
    /**
     * Icon code with the value '\uEEB7'.
     */
    dataConnectionLibrary: '\uEEB7',
    /**
     * Icon code with the value '\uEA17'.
     */
    dateTime2: '\uEA17',
    /**
     * Icon code with the value '\uEC92'.
     */
    dateTime: '\uEC92',
    /**
     * Icon code with the value '\uEE93'.
     */
    dateTimeMirrored: '\uEE93',
    /**
     * Icon code with the value '\uE290'.
     */
    decreaseIndentLegacy: '\uE290',
    /**
     * Icon code with the value '\uEEEE'.
     */
    delveAnalytics: '\uEEEE',
    /**
     * Icon code with the value '\uEDCA'.
     */
    delveAnalyticsLogo: '\uEDCA',
    /**
     * Icon code with the value '\uED76'.
     */
    delveLogo: '\uED76',
    /**
     * Icon code with the value '\uEDC1'.
     */
    descending: '\uEDC1',
    /**
     * Icon code with the value '\uEB3C'.
     */
    design: '\uEB3C',
    /**
     * Icon code with the value '\uEC7A'.
     */
    developerTools: '\uEC7A',
    /**
     * Icon code with the value '\uEA6C'.
     */
    devices3: '\uEA6C',
    /**
     * Icon code with the value '\uEB66'.
     */
    devices4: '\uEB66',
    /**
     * Icon code with the value '\uE75F'.
     */
    dialpad: '\uE75F',
    /**
     * Icon code with the value '\uE82D'.
     */
    dictionary: '\uE82D',
    /**
     * Icon code with the value '\uEAC8'.
     */
    dietPlanNotebook: '\uEAC8',
    /**
     * Icon code with the value '\uE8D8'.
     */
    disableUpdates: '\uE8D8',
    /**
     * Icon code with the value '\uE8E0'.
     */
    dislike: '\uE8E0',
    /**
     * Icon code with the value '\uEEB8'.
     */
    docLibrary: '\uEEB8',
    /**
     * Icon code with the value '\uE90C'.
     */
    dockLeft: '\uE90C',
    /**
     * Icon code with the value '\uEA4C'.
     */
    dockLeftMirrored: '\uEA4C',
    /**
     * Icon code with the value '\uE90D'.
     */
    dockRight: '\uE90D',
    /**
     * Icon code with the value '\uEDCB'.
     */
    docsLogo: '\uEDCB',
    /**
     * Icon code with the value '\uE8A5'.
     */
    document: '\uE8A5',
    /**
     * Icon code with the value '\uEF57'.
     */
    documentReply: '\uEF57',
    /**
     * Icon code with the value '\uEF6C'.
     */
    documentSearch: '\uEF6C',
    /**
     * Icon code with the value '\uEED6'.
     */
    documentSet: '\uEED6',
    /**
     * Icon code with the value '\uEC17'.
     */
    documentation: '\uEC17',
    /**
     * Icon code with the value '\uEB75'.
     */
    door: '\uEB75',
    /**
     * Icon code with the value '\uEB8F'.
     */
    doubleBookmark: '\uEB8F',
    /**
     * Icon code with the value '\uEE97'.
     */
    doubleChevronDown12: '\uEE97',
    /**
     * Icon code with the value '\uEE04'.
     */
    doubleChevronDown: '\uEE04',
    /**
     * Icon code with the value '\uEE98'.
     */
    doubleChevronLeft12: '\uEE98',
    /**
     * Icon code with the value '\uEDBE'.
     */
    doubleChevronLeft: '\uEDBE',
    /**
     * Icon code with the value '\uE991'.
     */
    doubleChevronLeftMed: '\uE991',
    /**
     * Icon code with the value '\uEA4D'.
     */
    doubleChevronLeftMedMirrored: '\uEA4D',
    /**
     * Icon code with the value '\uEE99'.
     */
    doubleChevronRight12: '\uEE99',
    /**
     * Icon code with the value '\uEDBF'.
     */
    doubleChevronRight: '\uEDBF',
    /**
     * Icon code with the value '\uEE96'.
     */
    doubleChevronUp12: '\uEE96',
    /**
     * Icon code with the value '\uEDBD'.
     */
    doubleChevronUp: '\uEDBD',
    /**
     * Icon code with the value '\uE74B'.
     */
    down: '\uE74B',
    /**
     * Icon code with the value '\uE896'.
     */
    download: '\uE896',
    /**
     * Icon code with the value '\uECA8'.
     */
    drm: '\uECA8',
    /**
     * Icon code with the value '\uEB42'.
     */
    drop: '\uEB42',
    /**
     * Icon code with the value '\uED77'.
     */
    dropboxLogo: '\uED77',
    /**
     * Icon code with the value '\uEDC5'.
     */
    dropdown: '\uEDC5',
    /**
     * Icon code with the value '\uE9CD'.
     */
    duststorm: '\uE9CD',
    /**
     * Icon code with the value '\uEDCD'.
     */
    dynamicSmbLogo: '\uEDCD',
    /**
     * Icon code with the value '\uEDCC'.
     */
    dynamics365Logo: '\uEDCC',
    /**
     * Icon code with the value '\uE807'.
     */
    eatDrink: '\uE807',
    /**
     * Icon code with the value '\uEC60'.
     */
    edgeLogo: '\uEC60',
    /**
     * Icon code with the value '\uE70F'.
     */
    edit: '\uE70F',
    /**
     * Icon code with the value '\uEF61'.
     */
    editMail: '\uEF61',
    /**
     * Icon code with the value '\uEB7E'.
     */
    editMirrored: '\uEB7E',
    /**
     * Icon code with the value '\uED9D'.
     */
    editNote: '\uED9D',
    /**
     * Icon code with the value '\uEF77'.
     */
    editPhoto: '\uEF77',
    /**
     * Icon code with the value '\uEF60'.
     */
    editStyle: '\uEF60',
    /**
     * Icon code with the value '\uECCE'.
     */
    embed: '\uECCE',
    /**
     * Icon code with the value '\uE731'.
     */
    emi: '\uE731',
    /**
     * Icon code with the value '\uE76E'.
     */
    emoji2: '\uE76E',
    /**
     * Icon code with the value '\uE899'.
     */
    emoji: '\uE899',
    /**
     * Icon code with the value '\uEA88'.
     */
    emojiDisappointed: '\uEA88',
    /**
     * Icon code with the value '\uEA87'.
     */
    emojiNeutral: '\uEA87',
    /**
     * Icon code with the value '\uEF88'.
     */
    emptyRecycleBin: '\uEF88',
    /**
     * Icon code with the value '\uE9E9'.
     */
    equalizer: '\uE9E9',
    /**
     * Icon code with the value '\uE75C'.
     */
    eraseTool: '\uE75C',
    /**
     * Icon code with the value '\uE783'.
     */
    error: '\uE783',
    /**
     * Icon code with the value '\uEA39'.
     */
    errorBadge: '\uEA39',
    /**
     * Icon code with the value '\uECA3'.
     */
    event: '\uECA3',
    /**
     * Icon code with the value '\uED8B'.
     */
    eventInfo: '\uED8B',
    /**
     * Icon code with the value '\uEF73'.
     */
    excelDocument: '\uEF73',
    /**
     * Icon code with the value '\uEC28'.
     */
    excelLogo: '\uEC28',
    /**
     * Icon code with the value '\uED78'.
     */
    exchangeLogo: '\uED78',
    /**
     * Icon code with the value '\uEF67'.
     */
    expandMenu: '\uEF67',
    /**
     * Icon code with the value '\uF09C'.
     */
    fabricAssetLibrary: '\uF09C',
    /**
     * Icon code with the value '\uF09D'.
     */
    fabricDataConnectionLibrary: '\uF09D',
    /**
     * Icon code with the value '\uF09E'.
     */
    fabricDocLibrary: '\uF09E',
    /**
     * Icon code with the value '\uF0A9'.
     */
    fabricFolder: '\uF0A9',
    /**
     * Icon code with the value '\uF0AA'.
     */
    fabricFolderFill: '\uF0AA',
    /**
     * Icon code with the value '\uF0A4'.
     */
    fabricFolderSearch: '\uF0A4',
    /**
     * Icon code with the value '\uF09F'.
     */
    fabricFormLibrary: '\uF09F',
    /**
     * Icon code with the value '\uF0A0'.
     */
    fabricFormLibraryMirrored: '\uF0A0',
    /**
     * Icon code with the value '\uF0A5'.
     */
    fabricMovetoFolder: '\uF0A5',
    /**
     * Icon code with the value '\uF0AB'.
     */
    fabricNewFolder: '\uF0AB',
    /**
     * Icon code with the value '\uF0A8'.
     */
    fabricOpenFolderHorizontal: '\uF0A8',
    /**
     * Icon code with the value '\uF0AC'.
     */
    fabricPictureLibrary: '\uF0AC',
    /**
     * Icon code with the value '\uF0A3'.
     */
    fabricPublicFolder: '\uF0A3',
    /**
     * Icon code with the value '\uF0A1'.
     */
    fabricReportLibrary: '\uF0A1',
    /**
     * Icon code with the value '\uF0A2'.
     */
    fabricReportLibraryMirrored: '\uF0A2',
    /**
     * Icon code with the value '\uF0A7'.
     */
    fabricSyncFolder: '\uF0A7',
    /**
     * Icon code with the value '\uF0A6'.
     */
    fabricUnsyncFolder: '\uF0A6',
    /**
     * Icon code with the value '\uECB3'.
     */
    facebookLogo: '\uECB3',
    /**
     * Icon code with the value '\uEBDA'.
     */
    family: '\uEBDA',
    /**
     * Icon code with the value '\uECEB'.
     */
    fangBody: '\uECEB',
    /**
     * Icon code with the value '\uE728'.
     */
    favoriteList: '\uE728',
    /**
     * Icon code with the value '\uE734'.
     */
    favoriteStar: '\uE734',
    /**
     * Icon code with the value '\uE735'.
     */
    favoriteStarFill: '\uE735',
    /**
     * Icon code with the value '\uEF5C'.
     */
    fax: '\uEF5C',
    /**
     * Icon code with the value '\uE7E3'.
     */
    ferry: '\uE7E3',
    /**
     * Icon code with the value '\uEB48'.
     */
    ferrySolid: '\uEB48',
    /**
     * Icon code with the value '\uE71C'.
     */
    filter: '\uE71C',
    /**
     * Icon code with the value '\uE795'.
     */
    filters: '\uE795',
    /**
     * Icon code with the value '\uE7BB'.
     */
    financial: '\uE7BB',
    /**
     * Icon code with the value '\uE928'.
     */
    fingerprint: '\uE928',
    /**
     * Icon code with the value '\uE7C1'.
     */
    flag: '\uE7C1',
    /**
     * Icon code with the value '\uE935'.
     */
    flickDown: '\uE935',
    /**
     * Icon code with the value '\uE937'.
     */
    flickLeft: '\uE937',
    /**
     * Icon code with the value '\uE938'.
     */
    flickRight: '\uE938',
    /**
     * Icon code with the value '\uE936'.
     */
    flickUp: '\uE936',
    /**
     * Icon code with the value '\uEF90'.
     */
    flow: '\uEF90',
    /**
     * Icon code with the value '\uE9CB'.
     */
    fog: '\uE9CB',
    /**
     * Icon code with the value '\uE8B7'.
     */
    folder: '\uE8B7',
    /**
     * Icon code with the value '\uE8D5'.
     */
    folderFill: '\uE8D5',
    /**
     * Icon code with the value '\uF12B'.
     */
    folderHorizontal: '\uF12B',
    /**
     * Icon code with the value '\uE838'.
     */
    folderOpen: '\uE838',
    /**
     * Icon code with the value '\uEF65'.
     */
    folderSearch: '\uEF65',
    /**
     * Icon code with the value '\uE8D2'.
     */
    font: '\uE8D2',
    /**
     * Icon code with the value '\uE8D3'.
     */
    fontColor: '\uE8D3',
    /**
     * Icon code with the value '\uE8E7'.
     */
    fontDecrease: '\uE8E7',
    /**
     * Icon code with the value '\uE8E8'.
     */
    fontIncrease: '\uE8E8',
    /**
     * Icon code with the value '\uE8E9'.
     */
    fontSize: '\uE8E9',
    /**
     * Icon code with the value '\uEEB9'.
     */
    formLibrary: '\uEEB9',
    /**
     * Icon code with the value '\uEEBA'.
     */
    formLibraryMirrored: '\uEEBA',
    /**
     * Icon code with the value '\uE72A'.
     */
    forward: '\uE72A',
    /**
     * Icon code with the value '\uED8C'.
     */
    forwardEvent: '\uED8C',
    /**
     * Icon code with the value '\uE9EF'.
     */
    freezing: '\uE9EF',
    /**
     * Icon code with the value '\uE9CA'.
     */
    frigid: '\uE9CA',
    /**
     * Icon code with the value '\uE91F'.
     */
    fullCircleMask: '\uE91F',
    /**
     * Icon code with the value '\uE740'.
     */
    fullScreen: '\uE740',
    /**
     * Icon code with the value '\uE9DA'.
     */
    generate: '\uE9DA',
    /**
     * Icon code with the value '\uEB8E'.
     */
    giftCard: '\uEB8E',
    /**
     * Icon code with the value '\uEC1F'.
     */
    giftbox: '\uEC1F',
    /**
     * Icon code with the value '\uEA16'.
     */
    glasses: '\uEA16',
    /**
     * Icon code with the value '\uECF4'.
     */
    glimmer: '\uECF4',
    /**
     * Icon code with the value '\uE700'.
     */
    globalNavButton: '\uE700',
    /**
     * Icon code with the value '\uE774'.
     */
    globe: '\uE774',
    /**
     * Icon code with the value '\uEF53'.
     */
    globeFavorite: '\uEF53',
    /**
     * Icon code with the value '\uEB1F'.
     */
    golf: '\uEB1F',
    /**
     * Icon code with the value '\uEE0B'.
     */
    googleDriveLogo: '\uEE0B',
    /**
     * Icon code with the value '\uE8D1'.
     */
    gotoToday: '\uE8D1',
    /**
     * Icon code with the value '\uE75E'.
     */
    gripperTool: '\uE75E',
    /**
     * Icon code with the value '\uE902'.
     */
    group: '\uE902',
    /**
     * Icon code with the value '\uEE67'.
     */
    groupedAscending: '\uEE67',
    /**
     * Icon code with the value '\uEE66'.
     */
    groupedDescending: '\uEE66',
    /**
     * Icon code with the value '\uEF74'.
     */
    groupedList: '\uEF74',
    /**
     * Icon code with the value '\uEA00'.
     */
    hailDay: '\uEA00',
    /**
     * Icon code with the value '\uEA13'.
     */
    hailNight: '\uEA13',
    /**
     * Icon code with the value '\uE929'.
     */
    handwriting: '\uE929',
    /**
     * Icon code with the value '\uEA19'.
     */
    header1: '\uEA19',
    /**
     * Icon code with the value '\uEF36'.
     */
    header2: '\uEF36',
    /**
     * Icon code with the value '\uEF37'.
     */
    header3: '\uEF37',
    /**
     * Icon code with the value '\uEF38'.
     */
    header4: '\uEF38',
    /**
     * Icon code with the value '\uE95B'.
     */
    headset: '\uE95B',
    /**
     * Icon code with the value '\uE95E'.
     */
    health: '\uE95E',
    /**
     * Icon code with the value '\uEB51'.
     */
    heart: '\uEB51',
    /**
     * Icon code with the value '\uEB52'.
     */
    heartFill: '\uEB52',
    /**
     * Icon code with the value '\uE897'.
     */
    help: '\uE897',
    /**
     * Icon code with the value '\uEA51'.
     */
    helpMirrored: '\uEA51',
    /**
     * Icon code with the value '\uEF89'.
     */
    hide2: '\uEF89',
    /**
     * Icon code with the value '\uED1A'.
     */
    hide: '\uED1A',
    /**
     * Icon code with the value '\uE81C'.
     */
    history: '\uE81C',
    /**
     * Icon code with the value '\uE80F'.
     */
    home: '\uE80F',
    /**
     * Icon code with the value '\uEA8A'.
     */
    homeSolid: '\uEA8A',
    /**
     * Icon code with the value '\uE91D'.
     */
    hospital: '\uE91D',
    /**
     * Icon code with the value '\uE824'.
     */
    hotel: '\uE824',
    /**
     * Icon code with the value '\uEF8A'.
     */
    iOsAppStoreLogo: '\uEF8A',
    /**
     * Icon code with the value '\uE8C9'.
     */
    important: '\uE8C9',
    /**
     * Icon code with the value '\uEF64'.
     */
    inboxCheck: '\uEF64',
    /**
     * Icon code with the value '\uE814'.
     */
    incidentTriangle: '\uE814',
    /**
     * Icon code with the value '\uE291'.
     */
    increaseIndentLegacy: '\uE291',
    /**
     * Icon code with the value '\uEA1F'.
     */
    info2: '\uEA1F',
    /**
     * Icon code with the value '\uE946'.
     */
    info: '\uE946',
    /**
     * Icon code with the value '\uEC7D'.
     */
    insertTextBox: '\uEC7D',
    /**
     * Icon code with the value '\uE704'.
     */
    internetSharing: '\uE704',
    /**
     * Icon code with the value '\uEEC0'.
     */
    issueTracking: '\uEEC0',
    /**
     * Icon code with the value '\uEEC1'.
     */
    issueTrackingMirrored: '\uEEC1',
    /**
     * Icon code with the value '\uE8DB'.
     */
    italic: '\uE8DB',
    /**
     * Icon code with the value '\uED8F'.
     */
    joinOnlineMeeting: '\uED8F',
    /**
     * Icon code with the value '\uEBF0'.
     */
    js: '\uEBF0',
    /**
     * Icon code with the value '\uE932'.
     */
    label: '\uE932',
    /**
     * Icon code with the value '\uEF6B'.
     */
    landscapeOrientation: '\uEF6B',
    /**
     * Icon code with the value '\uEC76'.
     */
    laptopSelected: '\uEC76',
    /**
     * Icon code with the value '\uEECB'.
     */
    largeGrid: '\uEECB',
    /**
     * Icon code with the value '\uE8F1'.
     */
    library: '\uE8F1',
    /**
     * Icon code with the value '\uEF62'.
     */
    lifesaver: '\uEF62',
    /**
     * Icon code with the value '\uEF63'.
     */
    lifesaverLock: '\uEF63',
    /**
     * Icon code with the value '\uE793'.
     */
    light: '\uE793',
    /**
     * Icon code with the value '\uEA80'.
     */
    lightbulb: '\uEA80',
    /**
     * Icon code with the value '\uE945'.
     */
    lightningBolt: '\uE945',
    /**
     * Icon code with the value '\uE8E1'.
     */
    like: '\uE8E1',
    /**
     * Icon code with the value '\uE71B'.
     */
    link: '\uE71B',
    /**
     * Icon code with the value '\uEA37'.
     */
    list: '\uEA37',
    /**
     * Icon code with the value '\uEA55'.
     */
    listMirrored: '\uEA55',
    /**
     * Icon code with the value '\uE81D'.
     */
    location: '\uE81D',
    /**
     * Icon code with the value '\uE80E'.
     */
    locationCircle: '\uE80E',
    /**
     * Icon code with the value '\uE827'.
     */
    locationDot: '\uE827',
    /**
     * Icon code with the value '\uE920'.
     */
    locationFill: '\uE920',
    /**
     * Icon code with the value '\uE72E'.
     */
    lock: '\uE72E',
    /**
     * Icon code with the value '\uEC8A'.
     */
    lowerBrightness: '\uEC8A',
    /**
     * Icon code with the value '\uED79'.
     */
    lyncLogo: '\uED79',
    /**
     * Icon code with the value '\uE715'.
     */
    mail: '\uE715',
    /**
     * Icon code with the value '\uED80'.
     */
    mailAlert: '\uED80',
    /**
     * Icon code with the value '\uED81'.
     */
    mailCheck: '\uED81',
    /**
     * Icon code with the value '\uE8A8'.
     */
    mailFill: '\uE8A8',
    /**
     * Icon code with the value '\uE89C'.
     */
    mailForward: '\uE89C',
    /**
     * Icon code with the value '\uEA56'.
     */
    mailForwardMirrored: '\uEA56',
    /**
     * Icon code with the value '\uED82'.
     */
    mailLowImportance: '\uED82',
    /**
     * Icon code with the value '\uED83'.
     */
    mailPause: '\uED83',
    /**
     * Icon code with the value '\uED84'.
     */
    mailRepeat: '\uED84',
    /**
     * Icon code with the value '\uE8CA'.
     */
    mailReply: '\uE8CA',
    /**
     * Icon code with the value '\uE8C2'.
     */
    mailReplyAll: '\uE8C2',
    /**
     * Icon code with the value '\uEA58'.
     */
    mailReplyAllMirrored: '\uEA58',
    /**
     * Icon code with the value '\uEA57'.
     */
    mailReplyMirrored: '\uEA57',
    /**
     * Icon code with the value '\uE816'.
     */
    mapDirections: '\uE816',
    /**
     * Icon code with the value '\uE707'.
     */
    mapPin: '\uE707',
    /**
     * Icon code with the value '\uEAFC'.
     */
    market: '\uEAFC',
    /**
     * Icon code with the value '\uEF42'.
     */
    marketDown: '\uEF42',
    /**
     * Icon code with the value '\uE789'.
     */
    megaphone: '\uE789',
    /**
     * Icon code with the value '\uE77C'.
     */
    memo: '\uE77C',
    /**
     * Icon code with the value '\uE7D5'.
     */
    merge: '\uE7D5',
    /**
     * Icon code with the value '\uE8BD'.
     */
    message: '\uE8BD',
    /**
     * Icon code with the value '\uEC70'.
     */
    messageFill: '\uEC70',
    /**
     * Icon code with the value '\uE720'.
     */
    microphone: '\uE720',
    /**
     * Icon code with the value '\uF130'.
     */
    microsoftStaffhubLogo: '\uF130',
    /**
     * Icon code with the value '\uE732'.
     */
    miniLink: '\uE732',
    /**
     * Icon code with the value '\uEC75'.
     */
    mobileSelected: '\uEC75',
    /**
     * Icon code with the value '\uEAFD'.
     */
    money: '\uEAFD',
    /**
     * Icon code with the value '\uE712'.
     */
    more: '\uE712',
    /**
     * Icon code with the value '\uEB22'.
     */
    moreSports: '\uEB22',
    /**
     * Icon code with the value '\uE7C2'.
     */
    move: '\uE7C2',
    /**
     * Icon code with the value '\uE8DE'.
     */
    moveToFolder: '\uE8DE',
    /**
     * Icon code with the value '\uEB6C'.
     */
    msnLogo: '\uEB6C',
    /**
     * Icon code with the value '\uE762'.
     */
    multiSelect: '\uE762',
    /**
     * Icon code with the value '\uEA98'.
     */
    multiSelectMirrored: '\uEA98',
    /**
     * Icon code with the value '\uE940'.
     */
    musicInCollection: '\uE940',
    /**
     * Icon code with the value '\uEA36'.
     */
    musicInCollectionFill: '\uEA36',
    /**
     * Icon code with the value '\uEC4F'.
     */
    musicNote: '\uEC4F',
    /**
     * Icon code with the value '\uE800'.
     */
    nav2DMapView: '\uE800',
    /**
     * Icon code with the value '\uE8F4'.
     */
    newFolder: '\uE8F4',
    /**
     * Icon code with the value '\uE900'.
     */
    news: '\uE900',
    /**
     * Icon code with the value '\uED99'.
     */
    noteForward: '\uED99',
    /**
     * Icon code with the value '\uED9A'.
     */
    notePinned: '\uED9A',
    /**
     * Icon code with the value '\uED98'.
     */
    noteReply: '\uED98',
    /**
     * Icon code with the value '\uEDC4'.
     */
    numberField: '\uEDC4',
    /**
     * Icon code with the value '\uEA1C'.
     */
    numberedList: '\uEA1C',
    /**
     * Icon code with the value '\uEDCE'.
     */
    officeAssistantLogo: '\uEDCE',
    /**
     * Icon code with the value '\uEF86'.
     */
    officeFormLogo: '\uEF86',
    /**
     * Icon code with the value '\uEB6E'.
     */
    officeLogo: '\uEB6E',
    /**
     * Icon code with the value '\uEDCF'.
     */
    officeStoreLogo: '\uEDCF',
    /**
     * Icon code with the value '\uED7A'.
     */
    officeVideoLogo: '\uED7A',
    /**
     * Icon code with the value '\uEEC8'.
     */
    offlineOneDriveParachute: '\uEEC8',
    /**
     * Icon code with the value '\uEEC9'.
     */
    offlineOneDriveParachuteDisabled: '\uEEC9',
    /**
     * Icon code with the value '\uE941'.
     */
    oneDrive: '\uE941',
    /**
     * Icon code with the value '\uEF32'.
     */
    oneDriveAdd: '\uEF32',
    /**
     * Icon code with the value '\uEDD0'.
     */
    oneNoteEduLogo: '\uEDD0',
    /**
     * Icon code with the value '\uEC0D'.
     */
    oneNoteLogo: '\uEC0D',
    /**
     * Icon code with the value '\uE8E5'.
     */
    openFile: '\uE8E5',
    /**
     * Icon code with the value '\uED25'.
     */
    openFolderHorizontal: '\uED25',
    /**
     * Icon code with the value '\uE8A7'.
     */
    openInNewWindow: '\uE8A7',
    /**
     * Icon code with the value '\uE8A0'.
     */
    openPane: '\uE8A0',
    /**
     * Icon code with the value '\uEA5B'.
     */
    openPaneMirrored: '\uEA5B',
    /**
     * Icon code with the value '\uECA6'.
     */
    org: '\uECA6',
    /**
     * Icon code with the value '\uED34'.
     */
    outOfOffice: '\uED34',
    /**
     * Icon code with the value '\uEB6D'.
     */
    outlookLogo: '\uEB6D',
    /**
     * Icon code with the value '\uE7C3'.
     */
    page: '\uE7C3',
    /**
     * Icon code with the value '\uEA1A'.
     */
    pageAdd: '\uEA1A',
    /**
     * Icon code with the value '\uF02C'.
     */
    pageCheckedOut: '\uF02C',
    /**
     * Icon code with the value '\uF104'.
     */
    pageCheckedin: '\uF104',
    /**
     * Icon code with the value '\uE760'.
     */
    pageLeft: '\uE760',
    /**
     * Icon code with the value '\uE761'.
     */
    pageRight: '\uE761',
    /**
     * Icon code with the value '\uE729'.
     */
    pageSolid: '\uE729',
    /**
     * Icon code with the value '\uE7B0'.
     */
    panoIndicator: '\uE7B0',
    /**
     * Icon code with the value '\uED7B'.
     */
    paratureLogo: '\uED7B',
    /**
     * Icon code with the value '\uE9C0'.
     */
    partlyCloudyDay: '\uE9C0',
    /**
     * Icon code with the value '\uE9C1'.
     */
    partlyCloudyNight: '\uE9C1',
    /**
     * Icon code with the value '\uECA7'.
     */
    partyLeader: '\uECA7',
    /**
     * Icon code with the value '\uE769'.
     */
    pause: '\uE769',
    /**
     * Icon code with the value '\uE8C7'.
     */
    paymentCard: '\uE8C7',
    /**
     * Icon code with the value '\uE977'.
     */
    pc1: '\uE977',
    /**
     * Icon code with the value '\uEA90'.
     */
    pdf: '\uEA90',
    /**
     * Icon code with the value '\uEF7B'.
     */
    pencilReply: '\uEF7B',
    /**
     * Icon code with the value '\uE716'.
     */
    people: '\uE716',
    /**
     * Icon code with the value '\uEA15'.
     */
    peopleAdd: '\uEA15',
    /**
     * Icon code with the value '\uED93'.
     */
    peopleAlert: '\uED93',
    /**
     * Icon code with the value '\uED91'.
     */
    peopleBlock: '\uED91',
    /**
     * Icon code with the value '\uED94'.
     */
    peoplePause: '\uED94',
    /**
     * Icon code with the value '\uED92'.
     */
    peopleRepeat: '\uED92',
    /**
     * Icon code with the value '\uE8D7'.
     */
    permissions: '\uE8D7',
    /**
     * Icon code with the value '\uE717'.
     */
    phone: '\uE717',
    /**
     * Icon code with the value '\uEB9F'.
     */
    photo2: '\uEB9F',
    /**
     * Icon code with the value '\uECAB'.
     */
    photo2Add: '\uECAB',
    /**
     * Icon code with the value '\uECAC'.
     */
    photo2Remove: '\uECAC',
    /**
     * Icon code with the value '\uE7AA'.
     */
    photoCollection: '\uE7AA',
    /**
     * Icon code with the value '\uE8B9'.
     */
    picture: '\uE8B9',
    /**
     * Icon code with the value '\uEEC2'.
     */
    pictureLibrary: '\uEEC2',
    /**
     * Icon code with the value '\uEB04'.
     */
    pieDouble: '\uEB04',
    /**
     * Icon code with the value '\uEACB'.
     */
    pill: '\uEACB',
    /**
     * Icon code with the value '\uE718'.
     */
    pin: '\uE718',
    /**
     * Icon code with the value '\uE840'.
     */
    pinned: '\uE840',
    /**
     * Icon code with the value '\uE842'.
     */
    pinnedFill: '\uE842',
    /**
     * Icon code with the value '\uEDD1'.
     */
    planner: '\uEDD1',
    /**
     * Icon code with the value '\uE768'.
     */
    play: '\uE768',
    /**
     * Icon code with the value '\uEF58'.
     */
    playerSettings: '\uEF58',
    /**
     * Icon code with the value '\uECAF'.
     */
    poi: '\uECAF',
    /**
     * Icon code with the value '\uE8F3'.
     */
    postUpdate: '\uE8F3',
    /**
     * Icon code with the value '\uF092'.
     */
    powerApps2Logo: '\uF092',
    /**
     * Icon code with the value '\uEDD2'.
     */
    powerApps: '\uEDD2',
    /**
     * Icon code with the value '\uF091'.
     */
    powerAppsLogo: '\uF091',
    /**
     * Icon code with the value '\uEA1E'.
     */
    powerBiLogo: '\uEA1E',
    /**
     * Icon code with the value '\uEF72'.
     */
    powerPointDocument: '\uEF72',
    /**
     * Icon code with the value '\uEC2A'.
     */
    powerPointLogo: '\uEC2A',
    /**
     * Icon code with the value '\uE9CF'.
     */
    precipitation: '\uE9CF',
    /**
     * Icon code with the value '\uE979'.
     */
    presenceChickletVideo: '\uE979',
    /**
     * Icon code with the value '\uE8FF'.
     */
    preview: '\uE8FF',
    /**
     * Icon code with the value '\uE8A1'.
     */
    previewLink: '\uE8A1',
    /**
     * Icon code with the value '\uE749'.
     */
    print: '\uE749',
    /**
     * Icon code with the value '\uE956'.
     */
    printfaxPrinterFile: '\uE956',
    /**
     * Icon code with the value '\uEB27'.
     */
    proFootball: '\uEB27',
    /**
     * Icon code with the value '\uEB28'.
     */
    proHockey: '\uEB28',
    /**
     * Icon code with the value '\uECDC'.
     */
    product: '\uECDC',
    /**
     * Icon code with the value '\uEDD4'.
     */
    projectLogo: '\uEDD4',
    /**
     * Icon code with the value '\uE8A6'.
     */
    protectedDocument: '\uE8A6',
    /**
     * Icon code with the value '\uEF6D'.
     */
    publicCalendar: '\uEF6D',
    /**
     * Icon code with the value '\uEF6E'.
     */
    publicContactCard: '\uEF6E',
    /**
     * Icon code with the value '\uEF6F'.
     */
    publicEmail: '\uEF6F',
    /**
     * Icon code with the value '\uEF70'.
     */
    publicFolder: '\uEF70',
    /**
     * Icon code with the value '\uEA86'.
     */
    puzzle: '\uEA86',
    /**
     * Icon code with the value '\uEE19'.
     */
    questionnaire: '\uEE19',
    /**
     * Icon code with the value '\uEE4B'.
     */
    questionnaireMirrored: '\uEE4B',
    /**
     * Icon code with the value '\uE70B'.
     */
    quickNote: '\uE70B',
    /**
     * Icon code with the value '\uECCB'.
     */
    radioBtnOn: '\uECCB',
    /**
     * Icon code with the value '\uE915'.
     */
    radioBullet: '\uE915',
    /**
     * Icon code with the value '\uE9C4'.
     */
    rain: '\uE9C4',
    /**
     * Icon code with the value '\uE9C3'.
     */
    rainShowersDay: '\uE9C3',
    /**
     * Icon code with the value '\uEA0F'.
     */
    rainShowersNight: '\uEA0F',
    /**
     * Icon code with the value '\uE9C7'.
     */
    rainSnow: '\uE9C7',
    /**
     * Icon code with the value '\uE8C3'.
     */
    read: '\uE8C3',
    /**
     * Icon code with the value '\uE736'.
     */
    readingMode: '\uE736',
    /**
     * Icon code with the value '\uEF5B'.
     */
    receiptCheck: '\uEF5B',
    /**
     * Icon code with the value '\uEF59'.
     */
    receiptForward: '\uEF59',
    /**
     * Icon code with the value '\uEF5A'.
     */
    receiptReply: '\uEF5A',
    /**
     * Icon code with the value '\uE823'.
     */
    recent: '\uE823',
    /**
     * Icon code with the value '\uEF5D'.
     */
    recurringEvent: '\uEF5D',
    /**
     * Icon code with the value '\uEDB2'.
     */
    recurringTask: '\uEDB2',
    /**
     * Icon code with the value '\uEF87'.
     */
    recycleBin: '\uEF87',
    /**
     * Icon code with the value '\uE7B3'.
     */
    redEye: '\uE7B3',
    /**
     * Icon code with the value '\uE7A6'.
     */
    redo: '\uE7A6',
    /**
     * Icon code with the value '\uE72C'.
     */
    refresh: '\uE72C',
    /**
     * Icon code with the value '\uEBF8'.
     */
    reminderGroup: '\uEBF8',
    /**
     * Icon code with the value '\uE738'.
     */
    remove: '\uE738',
    /**
     * Icon code with the value '\uED8A'.
     */
    removeEvent: '\uED8A',
    /**
     * Icon code with the value '\uEB08'.
     */
    removeFilter: '\uEB08',
    /**
     * Icon code with the value '\uED90'.
     */
    removeLink: '\uED90',
    /**
     * Icon code with the value '\uED9B'.
     */
    removeOccurrence: '\uED9B',
    /**
     * Icon code with the value '\uE8AC'.
     */
    rename: '\uE8AC',
    /**
     * Icon code with the value '\uED50'.
     */
    reopenPages: '\uED50',
    /**
     * Icon code with the value '\uE90F'.
     */
    repair: '\uE90F',
    /**
     * Icon code with the value '\uE97A'.
     */
    reply: '\uE97A',
    /**
     * Icon code with the value '\uEE0A'.
     */
    replyAll: '\uEE0A',
    /**
     * Icon code with the value '\uEF5F'.
     */
    replyAllAlt: '\uEF5F',
    /**
     * Icon code with the value '\uEE36'.
     */
    replyAllMirrored: '\uEE36',
    /**
     * Icon code with the value '\uEF5E'.
     */
    replyAlt: '\uEF5E',
    /**
     * Icon code with the value '\uEE35'.
     */
    replyMirrored: '\uEE35',
    /**
     * Icon code with the value '\uEEBB'.
     */
    reportLibrary: '\uEEBB',
    /**
     * Icon code with the value '\uEEBC'.
     */
    reportLibraryMirrored: '\uEEBC',
    /**
     * Icon code with the value '\uED24'.
     */
    returnToSession: '\uED24',
    /**
     * Icon code with the value '\uE845'.
     */
    revToggleKey: '\uE845',
    /**
     * Icon code with the value '\uE9D1'.
     */
    ribbon: '\uE9D1',
    /**
     * Icon code with the value '\uE9B1'.
     */
    rightDoubleQuote: '\uE9B1',
    /**
     * Icon code with the value '\uEA8F'.
     */
    ringer: '\uEA8F',
    /**
     * Icon code with the value '\uED9F'.
     */
    room: '\uED9F',
    /**
     * Icon code with the value '\uE7AD'.
     */
    rotate: '\uE7AD',
    /**
     * Icon code with the value '\uEB2D'.
     */
    rugby: '\uEB2D',
    /**
     * Icon code with the value '\uEADA'.
     */
    running: '\uEADA',
    /**
     * Icon code with the value '\uE757'.
     */
    sad: '\uE757',
    /**
     * Icon code with the value '\uE74E'.
     */
    save: '\uE74E',
    /**
     * Icon code with the value '\uE792'.
     */
    saveAs: '\uE792',
    /**
     * Icon code with the value '\uE721'.
     */
    search: '\uE721',
    /**
     * Icon code with the value '\uEC0C'.
     */
    section: '\uEC0C',
    /**
     * Icon code with the value '\uEF76'.
     */
    sections: '\uEF76',
    /**
     * Icon code with the value '\uED85'.
     */
    securityGroup: '\uED85',
    /**
     * Icon code with the value '\uE724'.
     */
    send: '\uE724',
    /**
     * Icon code with the value '\uEA63'.
     */
    sendMirrored: '\uEA63',
    /**
     * Icon code with the value '\uF071'.
     */
    setAction: '\uF071',
    /**
     * Icon code with the value '\uE713'.
     */
    settings: '\uE713',
    /**
     * Icon code with the value '\uE72D'.
     */
    share: '\uE72D',
    /**
     * Icon code with the value '\uEF79'.
     */
    shareiOs: '\uEF79',
    /**
     * Icon code with the value '\uED18'.
     */
    sharepointLogo: '\uED18',
    /**
     * Icon code with the value '\uEA18'.
     */
    shield: '\uEA18',
    /**
     * Icon code with the value '\uE719'.
     */
    shop: '\uE719',
    /**
     * Icon code with the value '\uE7BF'.
     */
    shoppingCart: '\uE7BF',
    /**
     * Icon code with the value '\uE8BC'.
     */
    showResults: '\uE8BC',
    /**
     * Icon code with the value '\uEA65'.
     */
    showResultsMirrored: '\uEA65',
    /**
     * Icon code with the value '\uEF52'.
     */
    sidePanel: '\uEF52',
    /**
     * Icon code with the value '\uEDFF'.
     */
    singleBookmark: '\uEDFF',
    /**
     * Icon code with the value '\uE759'.
     */
    sipMove: '\uE759',
    /**
     * Icon code with the value '\uEF80'.
     */
    skypeCheck: '\uEF80',
    /**
     * Icon code with the value '\uEF7D'.
     */
    skypeCircleCheck: '\uEF7D',
    /**
     * Icon code with the value '\uEF7E'.
     */
    skypeCircleClock: '\uEF7E',
    /**
     * Icon code with the value '\uEF7F'.
     */
    skypeCircleMinus: '\uEF7F',
    /**
     * Icon code with the value '\uEF81'.
     */
    skypeClock: '\uEF81',
    /**
     * Icon code with the value '\uEB6F'.
     */
    skypeLogo: '\uEB6F',
    /**
     * Icon code with the value '\uEF83'.
     */
    skypeMessage: '\uEF83',
    /**
     * Icon code with the value '\uEF82'.
     */
    skypeMinus: '\uEF82',
    /**
     * Icon code with the value '\uEC13'.
     */
    sliderThumb: '\uEC13',
    /**
     * Icon code with the value '\uEB46'.
     */
    snow: '\uEB46',
    /**
     * Icon code with the value '\uE9FD'.
     */
    snowShowerDay: '\uE9FD',
    /**
     * Icon code with the value '\uEA11'.
     */
    snowShowerNight: '\uEA11',
    /**
     * Icon code with the value '\uEB21'.
     */
    soccer: '\uEB21',
    /**
     * Icon code with the value '\uED7C'.
     */
    socialListeningLogo: '\uED7C',
    /**
     * Icon code with the value '\uE8CB'.
     */
    sort: '\uE8CB',
    /**
     * Icon code with the value '\uEE69'.
     */
    sortDown: '\uEE69',
    /**
     * Icon code with the value '\uE9D0'.
     */
    sortLines: '\uE9D0',
    /**
     * Icon code with the value '\uEE68'.
     */
    sortUp: '\uEE68',
    /**
     * Icon code with the value '\uE7F5'.
     */
    speakers: '\uE7F5',
    /**
     * Icon code with the value '\uEC4A'.
     */
    speedHigh: '\uEC4A',
    /**
     * Icon code with the value '\uEDBC'.
     */
    split: '\uEDBC',
    /**
     * Icon code with the value '\uE9CC'.
     */
    squalls: '\uE9CC',
    /**
     * Icon code with the value '\uE7FF'.
     */
    stackIndicator: '\uE7FF',
    /**
     * Icon code with the value '\uEF78'.
     */
    starburst: '\uEF78',
    /**
     * Icon code with the value '\uEB90'.
     */
    statusErrorFull: '\uEB90',
    /**
     * Icon code with the value '\uEA82'.
     */
    statusTriangle: '\uEA82',
    /**
     * Icon code with the value '\uEB0F'.
     */
    stockDown: '\uEB0F',
    /**
     * Icon code with the value '\uEB11'.
     */
    stockUp: '\uEB11',
    /**
     * Icon code with the value '\uE916'.
     */
    stopwatch: '\uE916',
    /**
     * Icon code with the value '\uEA96'.
     */
    storeLogo: '\uEA96',
    /**
     * Icon code with the value '\uEA04'.
     */
    storeLogoMed: '\uEA04',
    /**
     * Icon code with the value '\uEDE0'.
     */
    strikethrough: '\uEDE0',
    /**
     * Icon code with the value '\uEDA1'.
     */
    subscribe: '\uEDA1',
    /**
     * Icon code with the value '\uEDDF'.
     */
    subscript: '\uEDDF',
    /**
     * Icon code with the value '\uEDD3'.
     */
    suitcase: '\uEDD3',
    /**
     * Icon code with the value '\uEF69'.
     */
    sunAdd: '\uEF69',
    /**
     * Icon code with the value '\uEF6A'.
     */
    sunQuestionMark: '\uEF6A',
    /**
     * Icon code with the value '\uE9BD'.
     */
    sunny: '\uE9BD',
    /**
     * Icon code with the value '\uEDDE'.
     */
    superscript: '\uEDDE',
    /**
     * Icon code with the value '\uED29'.
     */
    swayLogo: '\uED29',
    /**
     * Icon code with the value '\uE8AB'.
     */
    switcher: '\uE8AB',
    /**
     * Icon code with the value '\uE810'.
     */
    switcherStartEnd: '\uE810',
    /**
     * Icon code with the value '\uE895'.
     */
    sync: '\uE895',
    /**
     * Icon code with the value '\uE8F7'.
     */
    syncFolder: '\uE8F7',
    /**
     * Icon code with the value '\uEE6E'.
     */
    syncToPc: '\uEE6E',
    /**
     * Icon code with the value '\uE770'.
     */
    system: '\uE770',
    /**
     * Icon code with the value '\uE7E9'.
     */
    tab: '\uE7E9',
    /**
     * Icon code with the value '\uED86'.
     */
    table: '\uED86',
    /**
     * Icon code with the value '\uE70A'.
     */
    tablet: '\uE70A',
    /**
     * Icon code with the value '\uEC74'.
     */
    tabletSelected: '\uEC74',
    /**
     * Icon code with the value '\uE8EC'.
     */
    tag: '\uE8EC',
    /**
     * Icon code with the value '\uEDB7'.
     */
    taskManager: '\uEDB7',
    /**
     * Icon code with the value '\uEDB8'.
     */
    taskManagerMirrored: '\uEDB8',
    /**
     * Icon code with the value '\uEA12'.
     */
    teamwork: '\uEA12',
    /**
     * Icon code with the value '\uEE58'.
     */
    temporaryUser: '\uEE58',
    /**
     * Icon code with the value '\uEB33'.
     */
    tennis: '\uEB33',
    /**
     * Icon code with the value '\uEDC2'.
     */
    textBox: '\uEDC2',
    /**
     * Icon code with the value '\uEDC3'.
     */
    textField: '\uEDC3',
    /**
     * Icon code with the value '\uE7B6'.
     */
    thumbnailView: '\uE7B6',
    /**
     * Icon code with the value '\uEA67'.
     */
    thumbnailViewMirrored: '\uEA67',
    /**
     * Icon code with the value '\uE9C6'.
     */
    thunderstorms: '\uE9C6',
    /**
     * Icon code with the value '\uEB54'.
     */
    ticket: '\uEB54',
    /**
     * Icon code with the value '\uEF7C'.
     */
    tiles2: '\uEF7C',
    /**
     * Icon code with the value '\uECA5'.
     */
    tiles: '\uECA5',
    /**
     * Icon code with the value '\uED9C'.
     */
    timeline: '\uED9C',
    /**
     * Icon code with the value '\uE91E'.
     */
    timer: '\uE91E',
    /**
     * Icon code with the value '\uEC12'.
     */
    toggleBorder: '\uEC12',
    /**
     * Icon code with the value '\uEC11'.
     */
    toggleFilled: '\uEC11',
    /**
     * Icon code with the value '\uEC14'.
     */
    toggleThumb: '\uEC14',
    /**
     * Icon code with the value '\uE815'.
     */
    touch: '\uE815',
    /**
     * Icon code with the value '\uE7C9'.
     */
    touchPointer: '\uE7C9',
    /**
     * Icon code with the value '\uE7C0'.
     */
    train: '\uE7C0',
    /**
     * Icon code with the value '\uEB4D'.
     */
    trainSolid: '\uEB4D',
    /**
     * Icon code with the value '\uED95'.
     */
    transferCall: '\uED95',
    /**
     * Icon code with the value '\uE74D'.
     */
    trash: '\uE74D',
    /**
     * Icon code with the value '\uEED1'.
     */
    triangleDown12: '\uEED1',
    /**
     * Icon code with the value '\uEED2'.
     */
    triangleLeft12: '\uEED2',
    /**
     * Icon code with the value '\uEED3'.
     */
    triangleRight12: '\uEED3',
    /**
     * Icon code with the value '\uEECD'.
     */
    triangleSolidDown12: '\uEECD',
    /**
     * Icon code with the value '\uEECE'.
     */
    triangleSolidLeft12: '\uEECE',
    /**
     * Icon code with the value '\uEECF'.
     */
    triangleSolidRight12: '\uEECF',
    /**
     * Icon code with the value '\uEECC'.
     */
    triangleSolidUp12: '\uEECC',
    /**
     * Icon code with the value '\uEED0'.
     */
    triangleUp12: '\uEED0',
    /**
     * Icon code with the value '\uED3F'.
     */
    trophy: '\uED3F',
    /**
     * Icon code with the value '\uE7DB'.
     */
    turnRight: '\uE7DB',
    /**
     * Icon code with the value '\uE7F4'.
     */
    tvMonitor: '\uE7F4',
    /**
     * Icon code with the value '\uEC77'.
     */
    tvMonitorSelected: '\uEC77',
    /**
     * Icon code with the value '\uE8DC'.
     */
    underline: '\uE8DC',
    /**
     * Icon code with the value '\uE7A7'.
     */
    undo: '\uE7A7',
    /**
     * Icon code with the value '\uE8D9'.
     */
    unfavorite: '\uE8D9',
    /**
     * Icon code with the value '\uED97'.
     */
    unknownCall: '\uED97',
    /**
     * Icon code with the value '\uE785'.
     */
    unlock: '\uE785',
    /**
     * Icon code with the value '\uE77A'.
     */
    unpin: '\uE77A',
    /**
     * Icon code with the value '\uEDA0'.
     */
    unsubscribe: '\uEDA0',
    /**
     * Icon code with the value '\uE8F6'.
     */
    unsyncFolder: '\uE8F6',
    /**
     * Icon code with the value '\uE74A'.
     */
    up: '\uE74A',
    /**
     * Icon code with the value '\uE898'.
     */
    upload: '\uE898',
    /**
     * Icon code with the value '\uE714'.
     */
    video: '\uE714',
    /**
     * Icon code with the value '\uEA0C'.
     */
    videoSolid: '\uEA0C',
    /**
     * Icon code with the value '\uE890'.
     */
    view: '\uE890',
    /**
     * Icon code with the value '\uEF56'.
     */
    viewAll2: '\uEF56',
    /**
     * Icon code with the value '\uE8A9'.
     */
    viewAll: '\uE8A9',
    /**
     * Icon code with the value '\uED7D'.
     */
    visioLogo: '\uED7D',
    /**
     * Icon code with the value '\uED87'.
     */
    voicemailForward: '\uED87',
    /**
     * Icon code with the value '\uED88'.
     */
    voicemailReply: '\uED88',
    /**
     * Icon code with the value '\uE992'.
     */
    volume0: '\uE992',
    /**
     * Icon code with the value '\uE993'.
     */
    volume1: '\uE993',
    /**
     * Icon code with the value '\uE994'.
     */
    volume2: '\uE994',
    /**
     * Icon code with the value '\uE995'.
     */
    volume3: '\uE995',
    /**
     * Icon code with the value '\uEA85'.
     */
    volumeDisabled: '\uEA85',
    /**
     * Icon code with the value '\uED89'.
     */
    waffle: '\uED89',
    /**
     * Icon code with the value '\uE7BA'.
     */
    warning: '\uE7BA',
    /**
     * Icon code with the value '\uEB41'.
     */
    website: '\uEB41',
    /**
     * Icon code with the value '\uEADB'.
     */
    weights: '\uEADB',
    /**
     * Icon code with the value '\uEBE6'.
     */
    windDirection: '\uEBE6',
    /**
     * Icon code with the value '\uE782'.
     */
    windowsLogo: '\uE782',
    /**
     * Icon code with the value '\uED8D'.
     */
    wipePhone: '\uED8D',
    /**
     * Icon code with the value '\uEF71'.
     */
    wordDocument: '\uEF71',
    /**
     * Icon code with the value '\uEC29'.
     */
    wordLogo: '\uEC29',
    /**
     * Icon code with the value '\uE821'.
     */
    work: '\uE821',
    /**
     * Icon code with the value '\uEA01'.
     */
    workFlow: '\uEA01',
    /**
     * Icon code with the value '\uE918'.
     */
    worldClock: '\uE918',
    /**
     * Icon code with the value '\uED19'.
     */
    yammerLogo: '\uED19',
    /**
     * Icon code with the value '\uE71E'.
     */
    zoom: '\uE71E',
    /**
     * Icon code with the value '\uE8A3'.
     */
    zoomIn: '\uE8A3',
    /**
     * Icon code with the value '\uE71F'.
     */
    zoomOut: '\uE71F'
};



/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(6);
var glamorExports_1 = __webpack_require__(12);
/**
 * Generates a focus style which can be used to define an :after focus border.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border.
 * @param color - The color for the border.
 * @param position - The positioning applied to the container. Must
 * be 'relative' or 'absolute' so that the focus border can live around it.
 * @returns The style object.
 */
function getFocusStyle(theme, inset, color, position) {
    if (inset === void 0) { inset = '0'; }
    if (color === void 0) { color = theme.palette.neutralSecondary; }
    if (position === void 0) { position = 'relative'; }
    return index_1.mergeStyles({
        outline: 'transparent',
        position: position
    }, glamorExports_1.parent('.ms-Fabric.is-focusVisible', {
        ':focus:after': {
            content: '""',
            position: 'absolute',
            left: inset,
            top: inset,
            bottom: inset,
            right: inset,
            border: '1px solid ' + color
        }
    }));
}
exports.getFocusStyle = getFocusStyle;



/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeStyles_1 = __webpack_require__(15);
/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */
function buildClassMap(styles) {
    return Object
        .keys(styles)
        .reduce(function (classNames, className) {
        classNames[className] = mergeStyles_1.mergeStyles(styles[className]).toString();
        return classNames;
    }, {});
}
exports.buildClassMap = buildClassMap;



/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeStyles_1 = __webpack_require__(15);
/**
 * Merges a give set of styles by running mergeStyles for each unique key. Works
 * like Object.assign in that it layers them in the argument order specified, but will
 * not mutate them and will return the merged result.
 */
function mergeStyleSets() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var mergedRules = {};
    var setStyles = {};
    args.forEach(function (arg) { return arg && Object.keys(arg).forEach(function (key) {
        if (!setStyles[key]) {
            setStyles[key] = [];
        }
        setStyles[key].push(arg[key]);
    }); });
    Object.keys(setStyles).forEach(function (key) {
        mergedRules[key] = mergeStyles_1.mergeStyles(setStyles[key]);
    });
    return mergedRules;
}
exports.mergeStyleSets = mergeStyleSets;



/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var assign = __webpack_require__(14);
var index_1 = __webpack_require__(10);
var _theme = {
    palette: index_1.DefaultPalette,
    semanticColors: _makeSemanticColorsFromPalette(index_1.DefaultPalette),
    fonts: index_1.DefaultFontStyles
};
/**
 * Gets the theme object.
 */
function getTheme() {
    return _theme;
}
exports.getTheme = getTheme;
/**
 * Mixes the given theme settings into the current theme object.
 */
function loadTheme(theme) {
    _theme.palette = assign({}, _theme.palette, theme.palette);
    _theme.semanticColors = assign({}, _makeSemanticColorsFromPalette(_theme.palette), theme.semanticColors);
    _theme.fonts = assign({}, _theme.fonts, theme.fonts);
}
exports.loadTheme = loadTheme;
// Generates all the semantic slot colors based on the Fabric palette.
// We'll use these as fallbacks for semantic slots that the passed in theme did not define.
function _makeSemanticColorsFromPalette(p) {
    return {
        bodyBackground: p.white,
        bodyText: p.neutralPrimary,
        bodySubtext: p.neutralSecondary,
        disabledBackground: p.neutralLighter,
        disabledText: p.neutralTertiaryAlt,
        disabledSubtext: p.neutralQuaternary,
        focusBorder: p.black,
        // errorBackground: todo,
        errorText: p.redDark,
        inputBorder: p.neutralTertiary,
        inputBorderHovered: p.neutralPrimary,
        inputBackgroundSelected: p.themePrimary,
        inputBackgroundSelectedHovered: p.themeDarkAlt,
        inputForegroundSelected: p.white
    };
}



/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventGroup_1 = __webpack_require__(16);
var scroll_1 = __webpack_require__(31);
var dom_1 = __webpack_require__(7);
var SCROLL_ITERATION_DELAY = 16;
var SCROLL_GUTTER_HEIGHT = 100;
var MAX_SCROLL_VELOCITY = 15;
/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 */
var AutoScroll = (function () {
    function AutoScroll(element) {
        this._events = new EventGroup_1.EventGroup(this);
        this._scrollableParent = scroll_1.findScrollableParent(element);
        this._incrementScroll = this._incrementScroll.bind(this);
        this._scrollRect = dom_1.getRect(this._scrollableParent);
        if (this._scrollableParent === window) {
            this._scrollableParent = document.body;
        }
        if (this._scrollableParent) {
            this._events.on(window, 'mousemove', this._onMouseMove, true);
            this._events.on(window, 'touchmove', this._onTouchMove, true);
        }
    }
    AutoScroll.prototype.dispose = function () {
        this._events.dispose();
        this._stopScroll();
    };
    AutoScroll.prototype._onMouseMove = function (ev) {
        this._computeScrollVelocity(ev.clientY);
    };
    AutoScroll.prototype._onTouchMove = function (ev) {
        if (ev.touches.length > 0) {
            this._computeScrollVelocity(ev.touches[0].clientY);
        }
    };
    AutoScroll.prototype._computeScrollVelocity = function (clientY) {
        var scrollRectTop = this._scrollRect.top;
        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER_HEIGHT;
        if (clientY < (scrollRectTop + SCROLL_GUTTER_HEIGHT)) {
            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER_HEIGHT - (clientY - scrollRectTop)) / SCROLL_GUTTER_HEIGHT));
        }
        else if (clientY > scrollClientBottom) {
            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((clientY - scrollClientBottom) / SCROLL_GUTTER_HEIGHT));
        }
        else {
            this._scrollVelocity = 0;
        }
        if (this._scrollVelocity) {
            this._startScroll();
        }
        else {
            this._stopScroll();
        }
    };
    AutoScroll.prototype._startScroll = function () {
        if (!this._timeoutId) {
            this._incrementScroll();
        }
    };
    AutoScroll.prototype._incrementScroll = function () {
        this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
    };
    AutoScroll.prototype._stopScroll = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            delete this._timeoutId;
        }
    };
    return AutoScroll;
}());
exports.AutoScroll = AutoScroll;



/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var PropTypes = __webpack_require__(54);
var BaseComponent_1 = __webpack_require__(29);
var object_1 = __webpack_require__(18);
/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator. This enables injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop, which should be a json map where the key is
 * the name of the customizable component, and the value is are the props to pass in.
 */
var Customizer = (function (_super) {
    __extends(Customizer, _super);
    function Customizer(props, context) {
        var _this = _super.call(this, props) || this;
        _this.state = _this._getInjectedProps(props, context);
        return _this;
    }
    Customizer.prototype.getChildContext = function () {
        return this.state;
    };
    Customizer.prototype.componentWillReceiveProps = function (newProps, newContext) {
        this.setState(this._getInjectedProps(newProps, newContext));
    };
    Customizer.prototype.render = function () {
        return React.Children.only(this.props.children);
    };
    Customizer.prototype._getInjectedProps = function (props, context) {
        var _a = props.settings, injectedPropsFromSettings = _a === void 0 ? {} : _a;
        var _b = context.injectedProps, injectedPropsFromContext = _b === void 0 ? {} : _b;
        return {
            injectedProps: object_1.assign({}, injectedPropsFromContext, injectedPropsFromSettings)
        };
    };
    return Customizer;
}(BaseComponent_1.BaseComponent));
Customizer.contextTypes = {
    injectedProps: PropTypes.object
};
Customizer.childContextTypes = Customizer.contextTypes;
exports.Customizer = Customizer;



/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 */
var DelayedRender = (function (_super) {
    __extends(DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: false
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = setTimeout(function () {
            _this.setState({
                isRendered: true
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        clearTimeout(this._timeoutId);
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? React.Children.only(this.props.children) : null;
    };
    return DelayedRender;
}(React.Component));
DelayedRender.defaultProps = {
    delay: 0
};
exports.DelayedRender = DelayedRender;



/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle = (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // I'm fixing it to 4 decimal places because it allows enough precision and will handle cases when something should be rounded,
        // like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;



/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function findIndex(array, cb) {
    var index = -1;
    for (var i = 0; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
exports.findIndex = findIndex;
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
exports.createArray = createArray;



/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Autobind is a utility for binding methods in a class. This simplifies tagging methods as being "bound" to the this pointer
 * so that they can be used in scenarios that simply require a function callback.
 */
function autobind(target, key, descriptor) {
    var fn = descriptor.value;
    var defining = false;
    return {
        configurable: true,
        get: function () {
            if (defining || this === fn.prototype || this.hasOwnProperty(key)) {
                return fn;
            }
            // Bind method only once, and update the property to return the bound value from now on
            var fnBound = fn.bind(this);
            defining = true;
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: fnBound
            });
            defining = false;
            return fnBound;
        },
        set: function (newValue) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: newValue
            });
        }
    };
}
exports.autobind = autobind;



/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if ((arg.hasOwnProperty('toString') && typeof (arg.toString) === 'function')) {
                classes.push(arg.toString());
            }
            else {
                for (var key in arg) {
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}
exports.css = css;



/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var PropTypes = __webpack_require__(54);
function customizable(componentName) {
    return function customizableFactory(ComposedComponent) {
        return _a = (function (_super) {
                __extends(ComponentWithInjectedProps, _super);
                function ComponentWithInjectedProps() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                ComponentWithInjectedProps.prototype.render = function () {
                    var defaultProps = ((this.context.injectedProps) ?
                        this.context.injectedProps[componentName] :
                        null) || {};
                    return (React.createElement(ComposedComponent, __assign({}, defaultProps, this.props)));
                };
                return ComponentWithInjectedProps;
            }(React.Component)),
            _a.contextTypes = {
                injectedProps: PropTypes.object
            },
            _a;
        var _a;
    };
}
exports.customizable = customizable;



/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* tslint:disable:no-string-literal */

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(7);
var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true, false, false, includeElementsInFocusZones);
}
exports.getFirstFocusable = getFirstFocusable;
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true, false, true, includeElementsInFocusZones);
}
exports.getLastFocusable = getLastFocusable;
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        element.focus();
        return true;
    }
    return false;
}
exports.focusFirstChild = focusFirstChild;
/** Traverse to find the previous element. */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones) {
    if (!currentElement ||
        currentElement === rootElement) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren && isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones);
        if (childMatch) {
            return childMatch;
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones);
    }
    return null;
}
exports.getPreviousElement = getPreviousElement;
/** Traverse to find the next focusable element. */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones) {
    if (!currentElement ||
        (currentElement === rootElement && suppressChildTraversal)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal && isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones);
    }
    return null;
}
exports.getNextElement = getNextElement;
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        element.isVisible === true); // used as a workaround for testing.
}
exports.isElementVisible = isElementVisible;
function isElementTabbable(element) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    // In IE, element.tabIndex is default to 0. We need to use element get tabIndex attribute to get the correct tabIndex
    var tabIndex = -1;
    if (element && element.getAttribute) {
        tabIndex = parseInt(element.getAttribute('tabIndex'), 10);
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    return (!!element && isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            (element.tagName === 'BUTTON') ||
            (element.tagName === 'INPUT') ||
            (element.tagName === 'TEXTAREA') ||
            (tabIndex >= 0) ||
            (element.getAttribute && (isFocusableAttribute === 'true' ||
                element.getAttribute('role') === 'button'))));
}
exports.isElementTabbable = isElementTabbable;
function isElementFocusZone(element) {
    return element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE);
}
exports.isElementFocusZone = isElementFocusZone;
function isElementFocusSubZone(element) {
    return element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true';
}
exports.isElementFocusSubZone = isElementFocusSubZone;
function doesElementContainFocus(element) {
    var currentActiveElement = dom_1.getDocument(element).activeElement;
    if (currentActiveElement && dom_1.elementContains(element, currentActiveElement)) {
        return true;
    }
    return false;
}
exports.doesElementContainFocus = doesElementContainFocus;



/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount'
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
function hoistMethods(destination, source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            /* tslint:disable:no-function-expression */
            destination[methodName] = function () { source[methodName].apply(source, arguments); };
            /* tslint:enable */
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
exports.hoistMethods = hoistMethods;
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
function unhoistMethods(source, methodNames) {
    methodNames
        .forEach(function (methodName) { return delete source[methodName]; });
}
exports.unhoistMethods = unhoistMethods;



/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Regular expression matching characters to ignore when calculating the initials.
 * The first part matches characters within parenthesis, including the parenthesis.
 * The second part matches special ASCII characters except space, plus some unicode special characters.
 */
var UNWANTED_CHARS_REGEX = /\([^)]*\)|[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs, CJK Unified Ideographs Extension B
 */
/* tslint:disable:max-line-length */
var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
/* tslint:enable:max-line-length */
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/** Get (up to 2 characters) initials based on display name of the persona. */
function getInitials(displayName, isRtl) {
    if (displayName == null) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    if (UNSUPPORTED_TEXT_REGEX.test(displayName)) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}
exports.getInitials = getInitials;



/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(7);
// Default to undefined so that we initialize on first read.
var _language;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getLanguage() {
    if (_language === undefined) {
        var doc = dom_1.getDocument();
        var win = dom_1.getWindow();
        // tslint:disable-next-line:no-string-literal
        if (win && win['localStorage']) {
            var savedLanguage = localStorage.getItem('language');
            if (savedLanguage !== null) {
                _language = savedLanguage;
            }
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            setLanguage('en', false);
        }
    }
    return _language;
}
exports.getLanguage = getLanguage;
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setLanguage(language, avoidPersisting) {
    if (avoidPersisting === void 0) { avoidPersisting = false; }
    var doc = dom_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    var win = dom_1.getWindow();
    // tslint:disable-next-line:no-string-literal
    if (win && win['localStorage'] && !avoidPersisting) {
        localStorage.setItem('language', language);
    }
    _language = language;
}
exports.setLanguage = setLanguage;



/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getDistanceBetweenPoints(point1, point2) {
    var distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    return distance;
}
exports.getDistanceBetweenPoints = getDistanceBetweenPoints;



/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _emptyObject = { empty: true };
var _dictionary = {};
function memoize(target, key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        }
    };
}
exports.memoize = memoize;
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    var rootNode;
    var cacheSize = 0;
    // tslint:disable-next-line:no-function-expression
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined || (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        return currentNode.value;
    };
}
exports.memoizeFunction = memoizeFunction;
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: new WeakMap()
    };
}



/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
exports.hasHorizontalOverflow = hasHorizontalOverflow;
/**
 * Detects whether an element's content has vertical overflow
 *
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
exports.hasVerticalOverflow = hasVerticalOverflow;
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}
exports.hasOverflow = hasOverflow;



/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(18);
exports.baseElementEvents = [
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel'
];
exports.baseElementProperties = [
    'defaultChecked',
    'defaultValue',
    'accept',
    'acceptCharset',
    'accessKey',
    'action',
    'allowFullScreen',
    'allowTransparency',
    'alt',
    'async',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'challenge',
    'checked',
    'children',
    'classID',
    'className',
    'cols',
    'colSpan',
    'content',
    'contentEditable',
    'contextMenu',
    'controls',
    'coords',
    'crossOrigin',
    'data',
    'dateTime',
    'default',
    'defer',
    'dir',
    'download',
    'draggable',
    'encType',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'headers',
    'height',
    'hidden',
    'high',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'icon',
    'id',
    'inputMode',
    'integrity',
    'is',
    'keyParams',
    'keyType',
    'kind',
    'lang',
    'list',
    'loop',
    'low',
    'manifest',
    'marginHeight',
    'marginWidth',
    'max',
    'maxLength',
    'media',
    'mediaGroup',
    'method',
    'min',
    'minLength',
    'multiple',
    'muted',
    'name',
    'noValidate',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'poster',
    'preload',
    'radioGroup',
    'readOnly',
    'rel',
    'required',
    'role',
    'rows',
    'rowSpan',
    'sandbox',
    'scope',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'spellCheck',
    'src',
    'srcDoc',
    'srcLang',
    'srcSet',
    'start',
    'step',
    'style',
    'summary',
    'tabIndex',
    'title',
    'type',
    'useMap',
    'value',
    'width',
    'wmode',
    'wrap'
];
exports.htmlElementProperties = exports.baseElementProperties.concat(exports.baseElementEvents);
exports.anchorProperties = exports.htmlElementProperties.concat([
    'href',
    'target'
]);
exports.buttonProperties = exports.htmlElementProperties.concat([
    'disabled'
]);
exports.divProperties = exports.htmlElementProperties.concat(['align', 'noWrap']);
exports.inputProperties = exports.buttonProperties;
exports.textAreaProperties = exports.buttonProperties;
exports.imageProperties = exports.divProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 * @param props - The unfiltered input props
 * @param allowedPropsNames-  The array of allowed propnames.
 * @returns The filtered props
 */
function getNativeProps(props, allowedPropNames, excludedPropNames) {
    return object_1.filteredAssign(function (propName) {
        return ((!excludedPropNames || excludedPropNames.indexOf(propName) < 0) && ((propName.indexOf('data-') === 0) ||
            (propName.indexOf('aria-') === 0) ||
            (allowedPropNames.indexOf(propName) >= 0)));
    }, {}, props);
}
exports.getNativeProps = getNativeProps;



/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _baseUrl = '';
/** Sets the current base url used for fetching images. */
function getResourceUrl(url) {
    return _baseUrl + url;
}
exports.getResourceUrl = getResourceUrl;
/** Gets the current base url used for fetching images. */
function setBaseUrl(baseUrl) {
    _baseUrl = baseUrl;
}
exports.setBaseUrl = setBaseUrl;



/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KeyCodes_1 = __webpack_require__(30);
var dom_1 = __webpack_require__(7);
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL() {
    if (_isRTL === undefined) {
        var doc = dom_1.getDocument();
        var win = dom_1.getWindow();
        // tslint:disable-next-line:no-string-literal
        if (win && win['localStorage']) {
            var savedRTL = localStorage.getItem('isRTL');
            if (savedRTL !== null) {
                _isRTL = savedRTL === '1';
            }
        }
        if (_isRTL === undefined && doc) {
            _isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        }
        if (_isRTL !== undefined) {
            setRTL(_isRTL, true);
        }
        else {
            throw new Error('getRTL was called in a server environment without setRTL being called first. ' +
                'Call setRTL to set the correct direction first.');
        }
    }
    return _isRTL;
}
exports.getRTL = getRTL;
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, avoidPersisting) {
    if (avoidPersisting === void 0) { avoidPersisting = false; }
    var doc = dom_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    var win = dom_1.getWindow();
    // tslint:disable-next-line:no-string-literal
    if (win && win['localStorage'] && !avoidPersisting) {
        localStorage.setItem('isRTL', isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
}
exports.setRTL = setRTL;
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key) {
    if (getRTL()) {
        if (key === KeyCodes_1.KeyCodes.left) {
            key = KeyCodes_1.KeyCodes.right;
        }
        else if (key === KeyCodes_1.KeyCodes.right) {
            key = KeyCodes_1.KeyCodes.left;
        }
    }
    return key;
}
exports.getRTLSafeKeyCode = getRTLSafeKeyCode;



/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
var styles = {
    msFabricScrollDisabled: 'msFabricScrollDisabled_4f638f68',
};
exports.default = styles;
load_themed_styles_1.loadStyles([{ "rawString": ".msFabricScrollDisabled_4f638f68{overflow:hidden!important}" }]);
/* tslint:enable */ 



/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String Format is like C# string format.
 * Usage Example: "hello {0}!".format("mike") will return "hello mike!"
 * Calling format on a string with less arguments than specified in the format is invalid
 * Example "I love {0} every {1}".format("CXP") will result in a Debug Exception.
 */
function format(s) {
    'use strict';
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replace_func(match) {
        // looks up in the args
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return (s.replace(FORMAT_REGEX, replace_func));
}
exports.format = format;



/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */



var camelize = __webpack_require__(112);

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */



var hyphenate = __webpack_require__(114);

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 * @typechecks static-only
 */



/**
 * Memoizes the return value of a function that accepts one string argument.
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */

/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = {
  background: {
    backgroundAttachment: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true
  },
  backgroundPosition: {
    backgroundPositionX: true,
    backgroundPositionY: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  },
  outline: {
    outlineWidth: true,
    outlineStyle: true,
    outlineColor: true
  }
};

var CSSProperty = {
  isUnitlessNumber: isUnitlessNumber,
  shorthandPropertyExpansions: shorthandPropertyExpansions
};

exports.default = CSSProperty;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CSSProperty = __webpack_require__(117);

var _CSSProperty2 = _interopRequireDefault(_CSSProperty);

var _warning = __webpack_require__(13);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 */

var isUnitlessNumber = _CSSProperty2.default.isUnitlessNumber;
var styleWarnings = {};

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @param {ReactDOMComponent} component
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, component) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  var isNonNumeric = isNaN(value);
  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    if (process.env.NODE_ENV !== 'production') {
      // Allow '0' to pass through without warning. 0 is already special and
      // doesn't require units, so we don't need to warn about it.
      if (component && value !== '0') {
        var owner = component._currentElement._owner;
        var ownerName = owner ? owner.getName() : null;
        if (ownerName && !styleWarnings[ownerName]) {
          styleWarnings[ownerName] = {};
        }
        var warned = false;
        if (ownerName) {
          var warnings = styleWarnings[ownerName];
          warned = warnings[name];
          if (!warned) {
            warnings[name] = true;
          }
        }
        if (!warned) {
          process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
        }
      }
    }
    value = value.trim();
  }
  return value + 'px';
}

exports.default = dangerousStyleValue;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = clean;
// Returns true for null, false, undefined and {}
function isFalsy(value) {
  return value === null || value === undefined || value === false || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.keys(value).length === 0;
}

function cleanObject(object) {
  if (isFalsy(object)) return null;
  if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object') return object;

  var acc = {},
      keys = Object.keys(object),
      hasFalsy = false;
  for (var i = 0; i < keys.length; i++) {
    var value = object[keys[i]];
    var filteredValue = clean(value);
    if (filteredValue === null || filteredValue !== value) {
      hasFalsy = true;
    }
    if (filteredValue !== null) {
      acc[keys[i]] = filteredValue;
    }
  }
  return Object.keys(acc).length === 0 ? null : hasFalsy ? acc : object;
}

function cleanArray(rules) {
  var hasFalsy = false;
  var filtered = [];
  rules.forEach(function (rule) {
    var filteredRule = clean(rule);
    if (filteredRule === null || filteredRule !== rule) {
      hasFalsy = true;
    }
    if (filteredRule !== null) {
      filtered.push(filteredRule);
    }
  });
  return filtered.length == 0 ? null : hasFalsy ? filtered : rules;
}

// Takes style array or object provided by user and clears all the falsy data 
// If there is no styles left after filtration returns null
function clean(input) {
  return Array.isArray(input) ? cleanArray(input) : cleanObject(input);
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = doHash;
// murmurhash2 via https://gist.github.com/raycmorgan/588423

function doHash(str, seed) {
  var m = 0x5bd1e995;
  var r = 24;
  var h = seed ^ str.length;
  var length = str.length;
  var currentIndex = 0;

  while (length >= 4) {
    var k = UInt32(str, currentIndex);

    k = Umul32(k, m);
    k ^= k >>> r;
    k = Umul32(k, m);

    h = Umul32(h, m);
    h ^= k;

    currentIndex += 4;
    length -= 4;
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex);
      h ^= str.charCodeAt(currentIndex + 2) << 16;
      h = Umul32(h, m);
      break;

    case 2:
      h ^= UInt16(str, currentIndex);
      h = Umul32(h, m);
      break;

    case 1:
      h ^= str.charCodeAt(currentIndex);
      h = Umul32(h, m);
      break;
  }

  h ^= h >>> 13;
  h = Umul32(h, m);
  h ^= h >>> 15;

  return h >>> 0;
}

function UInt32(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
}

function UInt16(str, pos) {
  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
}

function Umul32(n, m) {
  n = n | 0;
  m = m | 0;
  var nlo = n & 0xffff;
  var nhi = n >>> 16;
  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
  return res;
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
  ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.InlineStylePrefixAll = factory();
})(undefined, function () {
  'use strict';

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers.defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  babelHelpers;

  function __commonjs(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var prefixProps = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };

  // helper to capitalize strings
  var capitalizeString = function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  var isPrefixedProperty = function isPrefixedProperty(property) {
    return property.match(/^(Webkit|Moz|O|ms)/) !== null;
  };

  function sortPrefixedStyle(style) {
    return Object.keys(style).sort(function (left, right) {
      if (isPrefixedProperty(left) && !isPrefixedProperty(right)) {
        return -1;
      } else if (!isPrefixedProperty(left) && isPrefixedProperty(right)) {
        return 1;
      }
      return 0;
    }).reduce(function (sortedStyle, prop) {
      sortedStyle[prop] = style[prop];
      return sortedStyle;
    }, {});
  }

  function position(property, value) {
    if (property === 'position' && value === 'sticky') {
      return { position: ['-webkit-sticky', 'sticky'] };
    }
  }

  // returns a style object with a single concated prefixed value string
  var joinPrefixedValue = function joinPrefixedValue(property, value) {
    var replacer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (prefix, value) {
      return prefix + value;
    };
    return babelHelpers.defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
      return replacer(prefix, value);
    }));
  };

  var isPrefixedValue = function isPrefixedValue(value) {
    if (Array.isArray(value)) value = value.join(',');

    return value.match(/-webkit-|-moz-|-ms-/) !== null;
  };

  function calc(property, value) {
    if (typeof value === 'string' && !isPrefixedValue(value) && value.indexOf('calc(') > -1) {
      return joinPrefixedValue(property, value, function (prefix, value) {
        return value.replace(/calc\(/g, prefix + 'calc(');
      });
    }
  }

  var values = {
    'zoom-in': true,
    'zoom-out': true,
    grab: true,
    grabbing: true
  };

  function cursor(property, value) {
    if (property === 'cursor' && values[value]) {
      return joinPrefixedValue(property, value);
    }
  }

  var values$1 = { flex: true, 'inline-flex': true };

  function flex(property, value) {
    if (property === 'display' && values$1[value]) {
      return {
        display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
      };
    }
  }

  var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
  };
  var values$2 = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true
  };

  function sizing(property, value) {
    if (properties[property] && values$2[value]) {
      return joinPrefixedValue(property, value);
    }
  }

  var values$3 = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

  function gradient(property, value) {
    if (typeof value === 'string' && !isPrefixedValue(value) && value.match(values$3) !== null) {
      return joinPrefixedValue(property, value);
    }
  }

  var index = __commonjs(function (module) {
    'use strict';

    var uppercasePattern = /[A-Z]/g;
    var msPattern = /^ms-/;
    var cache = {};

    function hyphenateStyleName(string) {
      return string in cache ? cache[string] : cache[string] = string.replace(uppercasePattern, '-$&').toLowerCase().replace(msPattern, '-ms-');
    }

    module.exports = hyphenateStyleName;
  });

  var hyphenateStyleName = index && (typeof index === 'undefined' ? 'undefined' : _typeof(index)) === 'object' && 'default' in index ? index['default'] : index;

  var properties$1 = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true
  };

  function transition(property, value) {
    // also check for already prefixed transitions
    if (typeof value === 'string' && properties$1[property]) {
      var _ref2;

      var outputValue = prefixValue(value);
      var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
        return value.match(/-moz-|-ms-/) === null;
      }).join(',');

      // if the property is already prefixed
      if (property.indexOf('Webkit') > -1) {
        return babelHelpers.defineProperty({}, property, webkitOutput);
      }

      return _ref2 = {}, babelHelpers.defineProperty(_ref2, 'Webkit' + capitalizeString(property), webkitOutput), babelHelpers.defineProperty(_ref2, property, outputValue), _ref2;
    }
  }

  function prefixValue(value) {
    if (isPrefixedValue(value)) {
      return value;
    }

    // only split multi values, not cubic beziers
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

    // iterate each single value and check for transitioned properties
    // that need to be prefixed as well
    multipleValues.forEach(function (val, index) {
      multipleValues[index] = Object.keys(prefixProps).reduce(function (out, prefix) {
        var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

        Object.keys(prefixProps[prefix]).forEach(function (prop) {
          var dashCaseProperty = hyphenateStyleName(prop);

          if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
            // join all prefixes and create a new value
            out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
          }
        });
        return out;
      }, val);
    });

    return multipleValues.join(',');
  }

  var alternativeValues = {
    'space-around': 'distribute',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end'
  };
  var alternativeProps = {
    alignContent: 'msFlexLinePack',
    alignSelf: 'msFlexItemAlign',
    alignItems: 'msFlexAlign',
    justifyContent: 'msFlexPack',
    order: 'msFlexOrder',
    flexGrow: 'msFlexPositive',
    flexShrink: 'msFlexNegative',
    flexBasis: 'msPreferredSize'
  };

  function flexboxIE(property, value) {
    if (alternativeProps[property]) {
      return babelHelpers.defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
    }
  }

  var alternativeValues$1 = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple'
  };

  var alternativeProps$1 = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines'
  };

  function flexboxOld(property, value) {
    if (property === 'flexDirection' && typeof value === 'string') {
      return {
        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
      };
    }
    if (alternativeProps$1[property]) {
      return babelHelpers.defineProperty({}, alternativeProps$1[property], alternativeValues$1[value] || value);
    }
  }

  var plugins = [position, calc, cursor, sizing, gradient, transition, flexboxIE, flexboxOld, flex];

  /**
   * Returns a prefixed version of the style object using all vendor prefixes
   * @param {Object} styles - Style object that gets prefixed properties added
   * @returns {Object} - Style object with prefixed properties and values
   */
  function prefixAll(styles) {
    Object.keys(styles).forEach(function (property) {
      var value = styles[property];
      if (value instanceof Object && !Array.isArray(value)) {
        // recurse through nested style objects
        styles[property] = prefixAll(value);
      } else {
        Object.keys(prefixProps).forEach(function (prefix) {
          var properties = prefixProps[prefix];
          // add prefixes if needed
          if (properties[property]) {
            styles[prefix + capitalizeString(property)] = value;
          }
        });
      }
    });

    Object.keys(styles).forEach(function (property) {
      [].concat(styles[property]).forEach(function (value, index) {
        // resolve every special plugins
        plugins.forEach(function (plugin) {
          return assignStyles(styles, plugin(property, value));
        });
      });
    });

    return sortPrefixedStyle(styles);
  }

  function assignStyles(base) {
    var extend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object.keys(extend).forEach(function (property) {
      var baseValue = base[property];
      if (Array.isArray(baseValue)) {
        [].concat(extend[property]).forEach(function (value) {
          var valueIndex = baseValue.indexOf(value);
          if (valueIndex > -1) {
            base[property].splice(valueIndex, 1);
          }
          base[property].push(value);
        });
      } else {
        base[property] = extend[property];
      }
    });
  }

  return prefixAll;
});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.PluginSet = PluginSet;
exports.fallbacks = fallbacks;
exports.prefixes = prefixes;

var _objectAssign = __webpack_require__(14);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _CSSPropertyOperations = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDev = function (x) {
  return x === 'development' || !x;
}(process.env.NODE_ENV);

function PluginSet(initial) {
  this.fns = initial || [];
}

(0, _objectAssign2.default)(PluginSet.prototype, {
  add: function add() {
    var _this = this;

    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    fns.forEach(function (fn) {
      if (_this.fns.indexOf(fn) >= 0) {
        if (isDev) {
          console.warn('adding the same plugin again, ignoring'); //eslint-disable-line no-console
        }
      } else {
        _this.fns = [fn].concat(_this.fns);
      }
    });
  },
  remove: function remove(fn) {
    this.fns = this.fns.filter(function (x) {
      return x !== fn;
    });
  },
  clear: function clear() {
    this.fns = [];
  },
  transform: function transform(o) {
    return this.fns.reduce(function (o, fn) {
      return fn(o);
    }, o);
  }
});

function fallbacks(node) {
  var hasArray = Object.keys(node.style).map(function (x) {
    return Array.isArray(node.style[x]);
  }).indexOf(true) >= 0;
  if (hasArray) {
    var _ret = function () {
      var style = node.style;

      var flattened = Object.keys(style).reduce(function (o, key) {
        o[key] = Array.isArray(style[key]) ? style[key].join('; ' + (0, _CSSPropertyOperations.processStyleName)(key) + ': ') : style[key];
        return o;
      }, {});
      // todo - 
      // flatten arrays which haven't been flattened yet 
      return {
        v: (0, _objectAssign2.default)({}, node, { style: flattened })
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
  return node;
}

var prefixAll = __webpack_require__(121);

function prefixes(node) {
  return (0, _objectAssign2.default)({}, node, { style: prefixAll(node.style) });
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleSheet = StyleSheet;

var _objectAssign = __webpack_require__(14);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* 

high performance StyleSheet for css-in-js systems 

- uses multiple style tags behind the scenes for millions of rules 
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side 


// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject() 
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }') 
- appends a css rule into the stylesheet 

styleSheet.flush() 
- empties the stylesheet of all its contents


*/

function last(arr) {
  return arr[arr.length - 1];
}

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }

  // this weirdness brought to you by firefox 
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}

var isBrowser = typeof window !== 'undefined';
var isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV; //(x => (x === 'development') || !x)(process.env.NODE_ENV)
var isTest = process.env.NODE_ENV === 'test';

var oldIE = function () {
  if (isBrowser) {
    var div = document.createElement('div');
    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->';
    return div.getElementsByTagName('i').length === 1;
  }
}();

function makeStyleTag() {
  var tag = document.createElement('style');
  tag.type = 'text/css';
  tag.setAttribute('data-glamor', '');
  tag.appendChild(document.createTextNode(''));
  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag);
  return tag;
}

function StyleSheet() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$speedy = _ref.speedy,
      speedy = _ref$speedy === undefined ? !isDev && !isTest : _ref$speedy,
      _ref$maxLength = _ref.maxLength,
      maxLength = _ref$maxLength === undefined ? isBrowser && oldIE ? 4000 : 65000 : _ref$maxLength;

  this.isSpeedy = speedy; // the big drawback here is that the css won't be editable in devtools
  this.sheet = undefined;
  this.tags = [];
  this.maxLength = maxLength;
  this.ctr = 0;
}

(0, _objectAssign2.default)(StyleSheet.prototype, {
  getSheet: function getSheet() {
    return sheetForTag(last(this.tags));
  },
  inject: function inject() {
    var _this = this;

    if (this.injected) {
      throw new Error('already injected stylesheet!');
    }
    if (isBrowser) {
      this.tags[0] = makeStyleTag();
    } else {
      // server side 'polyfill'. just enough behavior to be useful.
      this.sheet = {
        cssRules: [],
        insertRule: function insertRule(rule) {
          // enough 'spec compliance' to be able to extract the rules later  
          // in other words, just the cssText field 
          _this.sheet.cssRules.push({ cssText: rule });
        }
      };
    }
    this.injected = true;
  },
  speedy: function speedy(bool) {
    if (this.ctr !== 0) {
      throw new Error('cannot change speedy mode after inserting any rule to sheet. Either call speedy(' + bool + ') earlier in your app, or call flush() before speedy(' + bool + ')');
    }
    this.isSpeedy = !!bool;
  },
  _insert: function _insert(rule) {
    // this weirdness for perf, and chrome's weird bug 
    // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
    try {
      var sheet = this.getSheet();
      sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : sheet.cssRules.length);
    } catch (e) {
      if (isDev) {
        // might need beter dx for this 
        console.warn('whoops, illegal rule inserted', rule); //eslint-disable-line no-console
      }
    }
  },
  insert: function insert(rule) {

    if (isBrowser) {
      // this is the ultrafast version, works across browsers 
      if (this.isSpeedy && this.getSheet().insertRule) {
        this._insert(rule);
      }
      // more browser weirdness. I don't even know    
      // else if(this.tags.length > 0 && this.tags::last().styleSheet) {      
      //   this.tags::last().styleSheet.cssText+= rule
      // }
      else {
          if (rule.indexOf('@import') !== -1) {
            var tag = last(this.tags);
            tag.insertBefore(document.createTextNode(rule), tag.firstChild);
          } else {
            last(this.tags).appendChild(document.createTextNode(rule));
          }
        }
    } else {
      // server side is pretty simple         
      this.sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : this.sheet.cssRules.length);
    }

    this.ctr++;
    if (isBrowser && this.ctr % this.maxLength === 0) {
      this.tags.push(makeStyleTag());
    }
    return this.ctr - 1;
  },

  // commenting this out till we decide on v3's decision 
  // _replace(index, rule) {
  //   // this weirdness for perf, and chrome's weird bug 
  //   // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
  //   try {  
  //     let sheet = this.getSheet()        
  //     sheet.deleteRule(index) // todo - correct index here     
  //     sheet.insertRule(rule, index)
  //   }
  //   catch(e) {
  //     if(isDev) {
  //       // might need beter dx for this 
  //       console.warn('whoops, problem replacing rule', rule) //eslint-disable-line no-console
  //     }          
  //   }          

  // }
  // replace(index, rule) {
  //   if(isBrowser) {
  //     if(this.isSpeedy && this.getSheet().insertRule) {
  //       this._replace(index, rule)
  //     }
  //     else {
  //       let _slot = Math.floor((index  + this.maxLength) / this.maxLength) - 1        
  //       let _index = (index % this.maxLength) + 1
  //       let tag = this.tags[_slot]
  //       tag.replaceChild(document.createTextNode(rule), tag.childNodes[_index])
  //     }
  //   }
  //   else {
  //     let rules = this.sheet.cssRules
  //     this.sheet.cssRules = [ ...rules.slice(0, index), { cssText: rule }, ...rules.slice(index + 1) ]
  //   }
  // }
  delete: function _delete(index) {
    // we insert a blank rule when 'deleting' so previously returned indexes remain stable
    return this.replace(index, '');
  },
  flush: function flush() {
    if (isBrowser) {
      this.tags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.sheet = null;
      this.ctr = 0;
      // todo - look for remnants in document.styleSheets
    } else {
      // simpler on server 
      this.sheet.cssRules = [];
    }
    this.injected = false;
  },
  rules: function rules() {
    if (!isBrowser) {
      return this.sheet.cssRules;
    }
    var arr = [];
    this.tags.forEach(function (tag) {
      return arr.splice.apply(arr, [arr.length, 0].concat(_toConsumableArray(Array.from(sheetForTag(tag).cssRules))));
    });
    return arr;
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(135));



/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(139));



/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(142));



/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(165));



/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(167));



/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(169));



/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(0);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var Button_Props_1 = __webpack_require__(39);
var DefaultButton_1 = __webpack_require__(42);
var CommandButton_1 = __webpack_require__(40);
var CompoundButton_1 = __webpack_require__(41);
var IconButton_1 = __webpack_require__(43);
var PrimaryButton_1 = __webpack_require__(44);
/**
 * This class is deprecated. Use the individual *Button components instead.
 * @deprecated
 */
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Set this BaseComponent._resolveComponentRef to false, bypassing resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        Utilities_1.warn("The Button component has been deprecated. Use specific variants instead. " +
            "(PrimaryButton, DefaultButton, IconButton, CommandButton, etc.)");
        return _this;
    }
    Button.prototype.render = function () {
        var props = this.props;
        switch (props.buttonType) {
            case Button_Props_1.ButtonType.command:
                return React.createElement(CommandButton_1.CommandButton, __assign({}, props));
            case Button_Props_1.ButtonType.compound:
                return React.createElement(CompoundButton_1.CompoundButton, __assign({}, props));
            case Button_Props_1.ButtonType.icon:
                return React.createElement(IconButton_1.IconButton, __assign({}, props));
            case Button_Props_1.ButtonType.primary:
                return React.createElement(PrimaryButton_1.PrimaryButton, __assign({}, props));
            default:
                return React.createElement(DefaultButton_1.DefaultButton, __assign({}, props));
        }
    };
    return Button;
}(Utilities_1.BaseComponent));
exports.Button = Button;



/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(22);
var DEFAULT_BUTTON_HEIGHT = '40px';
var DEFAULT_PADDING = '0 4px';
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    if (theme === void 0) { theme = Styling_1.getTheme(); }
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var commandButtonStyles = {
        root: {
            borderWidth: '0',
            padding: DEFAULT_PADDING,
            height: DEFAULT_BUTTON_HEIGHT,
            color: theme.palette.neutralPrimary,
            backgroundColor: 'transparent'
        },
        rootHovered: {
            color: theme.palette.themeDarker
        },
        rootPressed: {
            color: theme.palette.themePrimary
        },
        rootDisabled: {
            color: theme.palette.neutralTertiary,
            backgroundColor: 'transparent'
        },
        rootChecked: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralLight
        },
        flexContainer: {
            justifyContent: 'flex-start'
        },
        icon: {
            color: theme.palette.themePrimary
        },
        iconDisabled: {
            color: 'inherit'
        },
        menuIcon: {
            color: theme.palette.neutralSecondary
        }
    };
    return Styling_1.mergeStyleSets(baseButtonStyles, commandButtonStyles, customStyles);
});



/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var DefaultButton_styles_1 = __webpack_require__(23);
var DEFAULT_BUTTON_HEIGHT = '32px';
var DEFAULT_BUTTON_MINWIDTH = '80px';
var DEFAULT_PADDING = '0 16px';
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    if (theme === void 0) { theme = Styling_1.getTheme(); }
    var defaultButtonStyles = DefaultButton_styles_1.getStyles(theme, customStyles);
    var compoundButtonStyles = {
        root: {
            maxWidth: '280px',
            minHeight: '72px',
            height: 'auto',
            padding: '20px'
        },
        flexContainer: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            minWidth: '100%',
            margin: ''
        },
        label: {
            margin: '0 0 5px',
            lineHeight: '100%'
        },
        description: [
            theme.fonts.small,
            {
                color: theme.palette.neutralSecondary,
                lineHeight: '100%'
            }
        ],
        descriptionHovered: {
            color: theme.palette.neutralDark
        },
        descriptionPressed: {
            color: 'inherit'
        },
        descriptionChecked: {
            color: 'inherit'
        },
        descriptionDisabled: {
            color: 'inherit'
        }
    };
    return Styling_1.mergeStyleSets(defaultButtonStyles, compoundButtonStyles, customStyles);
});



/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var BaseButton_styles_1 = __webpack_require__(22);
var DEFAULT_BUTTON_HEIGHT = '32px';
var DEFAULT_PADDING = '0 4px';
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    if (theme === void 0) { theme = Styling_1.getTheme(); }
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var iconButtonStyles = {
        root: {
            padding: '0 4px',
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent'
        },
        rootHovered: {
            color: theme.palette.themeDarker
        },
        rootPressed: {
            color: theme.palette.themePrimary
        },
        rootChecked: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralLight
        },
        rootDisabled: {
            color: theme.palette.neutralTertiary
        }
    };
    return Styling_1.mergeStyleSets(baseButtonStyles, iconButtonStyles, customStyles);
});



/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
var DefaultButton_styles_1 = __webpack_require__(23);
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    if (theme === void 0) { theme = Styling_1.getTheme(); }
    var palette = theme.palette;
    var defaultButtonStyles = DefaultButton_styles_1.getStyles(theme, customStyles, '0px', palette.white);
    var primaryButtonStyles = {
        root: {
            backgroundColor: palette.themePrimary,
            color: palette.white
        },
        rootHovered: {
            backgroundColor: palette.themeDark,
            color: palette.white
        },
        rootPressed: {
            backgroundColor: palette.themePrimary,
            color: palette.white
        },
        rootChecked: {
            backgroundColor: palette.themeDark,
            color: palette.white,
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralLight,
            color: theme.palette.black
        }
    };
    return Styling_1.mergeStyleSets(defaultButtonStyles, primaryButtonStyles, customStyles);
});



/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(8));
__export(__webpack_require__(39));
__export(__webpack_require__(130));
__export(__webpack_require__(40));
__export(__webpack_require__(41));
__export(__webpack_require__(42));
__export(__webpack_require__(44));
__export(__webpack_require__(43));



/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(0);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var CalloutContent_1 = __webpack_require__(138);
var Layer_1 = __webpack_require__(127);
var Callout = (function (_super) {
    __extends(Callout, _super);
    function Callout(props) {
        return _super.call(this, props) || this;
    }
    Callout.prototype.render = function () {
        var content = (React.createElement(CalloutContent_1.CalloutContent, __assign({}, this.props)));
        return this.props.doNotLayer ? content : (React.createElement(Layer_1.Layer, null, content));
    };
    return Callout;
}(Utilities_1.BaseComponent));
exports.Callout = Callout;



/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
var styles = {
    root: 'root_d0f0eb46',
    container: 'container_d0f0eb46',
    main: 'main_d0f0eb46',
    beak: 'beak_d0f0eb46',
    beakCurtain: 'beakCurtain_d0f0eb46',
};
load_themed_styles_1.loadStyles([{ "rawString": ".root_d0f0eb46{box-shadow:0 0 5px 0 rgba(0,0,0,.4);position:absolute;border:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";box-sizing:border-box}@media screen and (-ms-high-contrast:active){.root_d0f0eb46{border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.root_d0f0eb46{border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.container_d0f0eb46{position:relative}.main_d0f0eb46{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";overflow-x:hidden;overflow-y:auto;position:relative}.beak_d0f0eb46{position:absolute;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";box-shadow:inherit;border:inherit;box-sizing:border-box;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.beakCurtain_d0f0eb46{position:absolute;top:0;right:0;bottom:0;left:0;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}" }]);
module.exports = styles;
/* tslint:enable */ 



/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(0);
var DirectionalHint_1 = __webpack_require__(5);
var Utilities_1 = __webpack_require__(1);
var positioning_1 = __webpack_require__(170);
var Popup_1 = __webpack_require__(129);
var stylesImport = __webpack_require__(137);
var Styling_1 = __webpack_require__(2);
var styles = stylesImport;
var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
var OFF_SCREEN_STYLE = { opacity: 0 };
var BORDER_WIDTH = 1;
var CalloutContent = (function (_super) {
    __extends(CalloutContent, _super);
    function CalloutContent(props) {
        var _this = _super.call(this, props) || this;
        _this._warnDeprecations({ 'beakStyle': 'beakWidth' });
        _this._didSetInitialFocus = false;
        _this.state = {
            positions: null,
            slideDirectionalClassName: null,
            calloutElementRect: null
        };
        _this._positionAttempts = 0;
        return _this;
    }
    CalloutContent.prototype.componentDidUpdate = function () {
        this._setInitialFocus();
        this._updatePosition();
    };
    CalloutContent.prototype.componentWillMount = function () {
        var target = this.props.targetElement ? this.props.targetElement : this.props.target;
        this._setTargetWindowAndElement(target);
    };
    CalloutContent.prototype.componentWillUpdate = function (newProps) {
        if (newProps.targetElement !== this.props.targetElement || newProps.target !== this.props.target) {
            var newTarget = newProps.targetElement ? newProps.targetElement : newProps.target;
            this._maxHeight = undefined;
            this._setTargetWindowAndElement(newTarget);
        }
        if (newProps.gapSpace !== this.props.gapSpace || this.props.beakWidth !== newProps.beakWidth) {
            this._maxHeight = undefined;
        }
    };
    CalloutContent.prototype.componentDidMount = function () {
        this._onComponentDidMount();
    };
    CalloutContent.prototype.render = function () {
        // If there is no target window then we are likely in server side rendering and we should not render anything.
        if (!this._targetWindow) {
            return null;
        }
        var _a = this.props, role = _a.role, ariaLabel = _a.ariaLabel, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className, target = _a.target, targetElement = _a.targetElement, isBeakVisible = _a.isBeakVisible, beakStyle = _a.beakStyle, children = _a.children, beakWidth = _a.beakWidth, backgroundColor = _a.backgroundColor;
        var positions = this.state.positions;
        var beakStyleWidth = beakWidth;
        // This is here to support the old way of setting the beak size until version 1.0.0.
        // beakStyle is now deprecated and will be be removed at version 1.0.0
        if (beakStyle === 'ms-Callout-smallbeak') {
            beakStyleWidth = 16;
        }
        var beakReactStyle = {
            top: positions && positions.beakPosition ? positions.beakPosition.top : BEAK_ORIGIN_POSITION.top,
            left: positions && positions.beakPosition ? positions.beakPosition.left : BEAK_ORIGIN_POSITION.left,
            height: beakStyleWidth,
            width: beakStyleWidth,
            backgroundColor: backgroundColor,
        };
        var directionalClassName = (positions && positions.directionalClassName)
            ? Styling_1.AnimationClassNames[positions.directionalClassName]
            : '';
        var contentMaxHeight = this._getMaxHeight();
        var beakVisible = isBeakVisible && (!!targetElement || !!target);
        var content = (React.createElement("div", { ref: this._resolveRef('_hostElement'), className: Utilities_1.css('ms-Callout-container', styles.container) },
            React.createElement("div", { className: Utilities_1.css('ms-Callout', styles.root, className, directionalClassName), style: positions ? positions.calloutPosition : OFF_SCREEN_STYLE, ref: this._resolveRef('_calloutElement') },
                beakVisible && (React.createElement("div", { className: Utilities_1.css('ms-Callout-beak', styles.beak), style: beakReactStyle })),
                beakVisible &&
                    (React.createElement("div", { className: Utilities_1.css('ms-Callout-beakCurtain', styles.beakCurtain) })),
                React.createElement(Popup_1.Popup, { role: role, ariaLabel: ariaLabel, ariaDescribedBy: ariaDescribedBy, ariaLabelledBy: ariaLabelledBy, className: Utilities_1.css('ms-Callout-main', styles.main), onDismiss: this.dismiss, shouldRestoreFocus: true, style: { maxHeight: contentMaxHeight, backgroundColor: backgroundColor } }, children))));
        return content;
    };
    CalloutContent.prototype.dismiss = function (ev) {
        var onDismiss = this.props.onDismiss;
        if (onDismiss) {
            onDismiss(ev);
        }
    };
    CalloutContent.prototype._dismissOnScroll = function (ev) {
        var preventDismissOnScroll = this.props.preventDismissOnScroll;
        if (this.state.positions && !preventDismissOnScroll) {
            this._dismissOnLostFocus(ev);
        }
    };
    CalloutContent.prototype._dismissOnLostFocus = function (ev) {
        var target = ev.target;
        var clickedOutsideCallout = this._hostElement && !Utilities_1.elementContains(this._hostElement, target);
        if ((!this._target && clickedOutsideCallout) ||
            ev.target !== this._targetWindow &&
                clickedOutsideCallout &&
                (this._target.stopPropagation ||
                    (!this._target || (target !== this._target && !Utilities_1.elementContains(this._target, target))))) {
            this.dismiss(ev);
        }
    };
    CalloutContent.prototype._setInitialFocus = function () {
        if (this.props.setInitialFocus && !this._didSetInitialFocus && this.state.positions) {
            this._didSetInitialFocus = true;
            Utilities_1.focusFirstChild(this._calloutElement);
        }
    };
    CalloutContent.prototype._onComponentDidMount = function () {
        var _this = this;
        // This is added so the callout will dismiss when the window is scrolled
        // but not when something inside the callout is scrolled. The delay seems
        // to be required to avoid React firing an async focus event in IE from
        // the target changing focus quickly prior to rendering the callout.
        this._async.setTimeout(function () {
            _this._events.on(_this._targetWindow, 'scroll', _this._dismissOnScroll, true);
            _this._events.on(_this._targetWindow, 'resize', _this.dismiss, true);
            _this._events.on(_this._targetWindow, 'focus', _this._dismissOnLostFocus, true);
            _this._events.on(_this._targetWindow, 'click', _this._dismissOnLostFocus, true);
        }, 0);
        if (this.props.onLayerMounted) {
            this.props.onLayerMounted();
        }
        this._updatePosition();
    };
    CalloutContent.prototype._updatePosition = function () {
        var positions = this.state.positions;
        var hostElement = this._hostElement;
        var calloutElement = this._calloutElement;
        if (hostElement && calloutElement) {
            var currentProps = void 0;
            currentProps = Utilities_1.assign(currentProps, this.props);
            currentProps.bounds = this._getBounds();
            // Temporary to be removed when targetElement is removed. Currently deprecated.
            if (this.props.targetElement) {
                currentProps.targetElement = this._target;
            }
            else {
                currentProps.target = this._target;
            }
            var newPositions = positioning_1.getRelativePositions(currentProps, hostElement, calloutElement);
            // Set the new position only when the positions are not exists or one of the new callout positions are different.
            // The position should not change if the position is within 2 decimal places.
            if ((!positions && newPositions) ||
                (positions && newPositions && !this._arePositionsEqual(positions, newPositions)
                    && this._positionAttempts < 5)) {
                // We should not reposition the callout more than a few times, if it is then the content is likely resizing
                // and we should stop trying to reposition to prevent a stack overflow.
                this._positionAttempts++;
                this.setState({
                    positions: newPositions
                });
            }
            else {
                this._positionAttempts = 0;
                if (this.props.onPositioned) {
                    this.props.onPositioned();
                }
            }
        }
    };
    CalloutContent.prototype._getBounds = function () {
        if (!this._bounds) {
            var currentBounds = this.props.bounds;
            if (!currentBounds) {
                currentBounds = {
                    top: 0 + this.props.minPagePadding,
                    left: 0 + this.props.minPagePadding,
                    right: this._targetWindow.innerWidth - this.props.minPagePadding,
                    bottom: this._targetWindow.innerHeight - this.props.minPagePadding,
                    width: this._targetWindow.innerWidth - this.props.minPagePadding * 2,
                    height: this._targetWindow.innerHeight - this.props.minPagePadding * 2
                };
            }
            this._bounds = currentBounds;
        }
        return this._bounds;
    };
    CalloutContent.prototype._getMaxHeight = function () {
        if (!this._maxHeight) {
            if (this.props.directionalHintFixed && this._target) {
                var beakWidth = this.props.isBeakVisible ? this.props.beakWidth : 0;
                var gapSpace = this.props.gapSpace ? this.props.gapSpace : 0;
                this._maxHeight = positioning_1.getMaxHeight(this._target, this.props.directionalHint, beakWidth + gapSpace, this._getBounds());
            }
            else {
                this._maxHeight = this._getBounds().height - BORDER_WIDTH * 2;
            }
        }
        return this._maxHeight;
    };
    CalloutContent.prototype._arePositionsEqual = function (positions, newPosition) {
        if (positions.calloutPosition.top.toFixed(2) !== newPosition.calloutPosition.top.toFixed(2)) {
            return false;
        }
        if (positions.calloutPosition.left.toFixed(2) !== newPosition.calloutPosition.left.toFixed(2)) {
            return false;
        }
        if (positions.beakPosition.top.toFixed(2) !== newPosition.beakPosition.top.toFixed(2)) {
            return false;
        }
        if (positions.beakPosition.top.toFixed(2) !== newPosition.beakPosition.top.toFixed(2)) {
            return false;
        }
        return true;
    };
    CalloutContent.prototype._setTargetWindowAndElement = function (target) {
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Utilities_1.getDocument();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = Utilities_1.getWindow();
            }
            else if (target.stopPropagation) {
                this._target = target;
                this._targetWindow = Utilities_1.getWindow(target.toElement);
            }
            else {
                var targetElement = target;
                this._target = target;
                this._targetWindow = Utilities_1.getWindow(targetElement);
            }
        }
        else {
            this._targetWindow = Utilities_1.getWindow();
        }
    };
    return CalloutContent;
}(Utilities_1.BaseComponent));
CalloutContent.defaultProps = {
    preventDismissOnScroll: false,
    isBeakVisible: true,
    beakWidth: 16,
    gapSpace: 0,
    minPagePadding: 8,
    directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge
};
__decorate([
    Utilities_1.autobind
], CalloutContent.prototype, "dismiss", null);
__decorate([
    Utilities_1.autobind
], CalloutContent.prototype, "_setInitialFocus", null);
__decorate([
    Utilities_1.autobind
], CalloutContent.prototype, "_onComponentDidMount", null);
exports.CalloutContent = CalloutContent;



/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(136));
__export(__webpack_require__(5));



/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Utilities_1 = __webpack_require__(1);
var FocusZone_1 = __webpack_require__(38);
var ContextualMenu_1 = __webpack_require__(35);
var DirectionalHint_1 = __webpack_require__(5);
var Icon_1 = __webpack_require__(11);
var Styling_1 = __webpack_require__(2);
var stylesImport = __webpack_require__(141);
var styles = stylesImport;
var OVERFLOW_KEY = 'overflow';
var OVERFLOW_WIDTH = 41.5;
var CommandBar = (function (_super) {
    __extends(CommandBar, _super);
    function CommandBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this._getStateFromProps(props);
        _this._id = Utilities_1.getId('CommandBar');
        return _this;
    }
    CommandBar.prototype.componentDidMount = function () {
        this._updateItemMeasurements();
        this._updateRenderedItems();
        this._events.on(window, 'resize', this._updateRenderedItems);
    };
    CommandBar.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState(this._getStateFromProps(nextProps));
        this._commandItemWidths = null;
    };
    CommandBar.prototype.componentDidUpdate = function (prevProps, prevStates) {
        if (!this._commandItemWidths) {
            this._updateItemMeasurements();
            this._updateRenderedItems();
        }
    };
    CommandBar.prototype.render = function () {
        var _this = this;
        var _a = this.props, isSearchBoxVisible = _a.isSearchBoxVisible, searchPlaceholderText = _a.searchPlaceholderText, className = _a.className;
        var _b = this.state, renderedItems = _b.renderedItems, contextualMenuProps = _b.contextualMenuProps, expandedMenuItemKey = _b.expandedMenuItemKey, expandedMenuId = _b.expandedMenuId, renderedOverflowItems = _b.renderedOverflowItems, contextualMenuTarget = _b.contextualMenuTarget, renderedFarItems = _b.renderedFarItems;
        var searchBox;
        if (isSearchBoxVisible) {
            searchBox = (React.createElement("div", { className: Utilities_1.css('ms-CommandBarSearch', styles.search), ref: 'searchSurface' },
                React.createElement("input", { className: Utilities_1.css('ms-CommandBarSearch-input', styles.searchInput), type: 'text', placeholder: searchPlaceholderText }),
                React.createElement("div", { className: Utilities_1.css('ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconSearchWrapper', styles.searchIconWrapper, styles.searchIconSearchWrapper) },
                    React.createElement(Icon_1.Icon, { iconName: 'search' })),
                React.createElement("div", { className: Utilities_1.css('ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconClearWrapper', Styling_1.FontClassNames.small, styles.searchIconWrapper, styles.searchIconClearWrapper) },
                    React.createElement(Icon_1.Icon, { iconName: 'cancel' }))));
        }
        return (React.createElement("div", { className: Utilities_1.css('ms-CommandBar', styles.root, className), ref: 'commandBarRegion' },
            searchBox,
            React.createElement(FocusZone_1.FocusZone, { ref: 'focusZone', direction: FocusZone_1.FocusZoneDirection.horizontal, role: 'menubar' },
                React.createElement("div", { className: Utilities_1.css('ms-CommandBar-primaryCommands', styles.primaryCommands), ref: 'commandSurface' }, renderedItems.map(function (item, index) { return (_this._renderItemInCommandBar(item, index, expandedMenuItemKey)); }).concat((renderedOverflowItems && renderedOverflowItems.length) ? [
                    React.createElement("div", { className: Utilities_1.css('ms-CommandBarItem', styles.item), key: OVERFLOW_KEY, ref: OVERFLOW_KEY },
                        React.createElement("button", { type: 'button', id: this._id + OVERFLOW_KEY, className: Utilities_1.css('ms-CommandBarItem-link', styles.itemLink, (_c = {},
                                _c['is-expanded ' + styles.itemLinkIsExpanded] = (expandedMenuItemKey === OVERFLOW_KEY),
                                _c)), onClick: this._onOverflowClick, role: 'menuitem', "aria-label": this.props.elipisisAriaLabel || '', "aria-haspopup": true, "data-automation-id": 'commandBarOverflow' },
                            React.createElement(Icon_1.Icon, { className: Utilities_1.css('ms-CommandBarItem-overflow', styles.itemOverflow), iconName: 'more' })))
                ] : [])),
                React.createElement("div", { className: Utilities_1.css('ms-CommandBar-sideCommands', styles.sideCommands), ref: 'farCommandSurface' }, renderedFarItems.map(function (item, index) { return (_this._renderItemInCommandBar(item, index, expandedMenuItemKey, true)); }))),
            (contextualMenuProps) ?
                (React.createElement(ContextualMenu_1.ContextualMenu, __assign({ className: Utilities_1.css('ms-CommandBar-menuHost'), isBeakVisible: true, directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge }, contextualMenuProps, { targetElement: contextualMenuTarget, labelElementId: expandedMenuId, onDismiss: this._onContextMenuDismiss }))) : (null)));
        var _c;
    };
    CommandBar.prototype.focus = function () {
        this.refs.focusZone.focus();
    };
    CommandBar.prototype._renderItemInCommandBar = function (item, index, expandedMenuItemKey, isFarItem) {
        var _this = this;
        if (item.onRender) {
            return React.createElement("div", { className: Utilities_1.css('ms-CommandBarItem', styles.item, item.className), key: item.key, ref: item.key }, item.onRender(item));
        }
        var itemKey = item.key || String(index);
        var isLink = item.onClick || ContextualMenu_1.hasSubmenuItems(item);
        var className = Utilities_1.css(isLink ? ('ms-CommandBarItem-link ' + styles.itemLink) : ('ms-CommandBarItem-text ' + styles.itemText), !item.name && ('ms-CommandBarItem--noName ' + styles.itemLinkIsNoName), (expandedMenuItemKey === item.key) && ('is-expanded ' + styles.itemLinkIsExpanded));
        var hasIcon = !!item.icon || !!item.iconProps;
        return React.createElement("div", { className: Utilities_1.css('ms-CommandBarItem', styles.item, item.className), key: itemKey, ref: itemKey }, (function () {
            if (isLink) {
                return React.createElement("button", __assign({}, Utilities_1.getNativeProps(item, Utilities_1.buttonProperties), { id: _this._id + item.key, className: className, onClick: function (ev) { return _this._onItemClick(ev, item); }, "data-command-key": index, "aria-haspopup": ContextualMenu_1.hasSubmenuItems(item), role: 'menuitem', "aria-label": item.ariaLabel || item.name }),
                    (hasIcon) ? _this._renderIcon(item) : (null),
                    (!!item.name) && (React.createElement("span", { className: Utilities_1.css('ms-CommandBarItem-commandText', styles.itemCommandText) }, item.name)),
                    ContextualMenu_1.hasSubmenuItems(item) ? (React.createElement(Icon_1.Icon, { className: Utilities_1.css('ms-CommandBarItem-chevronDown', styles.itemChevronDown), iconName: 'chevronDown' })) : (null));
            }
            else if (item.href) {
                return React.createElement("a", __assign({}, Utilities_1.getNativeProps(item, Utilities_1.anchorProperties), { id: _this._id + item.key, className: className, href: item.href, "data-command-key": index, "aria-haspopup": ContextualMenu_1.hasSubmenuItems(item), role: 'menuitem', "aria-label": item.ariaLabel || item.name }),
                    (hasIcon) ? _this._renderIcon(item) : (null),
                    (!!item.name) && (React.createElement("span", { className: Utilities_1.css('ms-CommandBarItem-commandText', styles.itemCommandText) }, item.name)));
            }
            else {
                return React.createElement("div", __assign({}, Utilities_1.getNativeProps(item, Utilities_1.divProperties), { id: _this._id + item.key, className: className, "data-command-key": index, "aria-haspopup": ContextualMenu_1.hasSubmenuItems(item) }),
                    (hasIcon) ? _this._renderIcon(item) : (null),
                    React.createElement("span", { className: Utilities_1.css('ms-CommandBarItem-commandText', styles.itemCommandText), "aria-hidden": 'true', role: 'presentation' }, item.name));
            }
        })());
    };
    CommandBar.prototype._renderIcon = function (item) {
        // Only present to allow continued use of item.icon which is deprecated.
        var iconProps = item.iconProps ? item.iconProps : {
            iconName: item.icon
        };
        // Use the default icon color for the known icon names
        var iconColorClassName = iconProps.iconName === 'None' ? '' : ('ms-CommandBarItem-iconColor ' + styles.itemIconColor);
        var iconClassName = Utilities_1.css('ms-CommandBarItem-icon', styles.itemIcon, iconColorClassName, iconProps.className);
        return React.createElement(Icon_1.Icon, __assign({}, iconProps, { className: iconClassName }));
    };
    CommandBar.prototype._updateItemMeasurements = function () {
        // the generated width for overflow is 35 in chrome, 38 in IE, but the actual value is 41.5
        if (this.refs[OVERFLOW_KEY] || (this.props.overflowItems && this.props.overflowItems.length)) {
            this._overflowWidth = OVERFLOW_WIDTH;
        }
        else {
            this._overflowWidth = 0;
        }
        if (!this._commandItemWidths) {
            this._commandItemWidths = {};
        }
        for (var i = 0; i < this.props.items.length; i++) {
            var item = this.props.items[i];
            if (!this._commandItemWidths[item.key]) {
                var el = this.refs[item.key];
                if (el) {
                    this._commandItemWidths[item.key] = el.getBoundingClientRect().width;
                }
            }
        }
    };
    CommandBar.prototype._updateRenderedItems = function () {
        var _a = this.props, items = _a.items, overflowItems = _a.overflowItems;
        var commandSurface = this.refs.commandSurface;
        var farCommandSurface = this.refs.farCommandSurface;
        var commandBarRegion = this.refs.commandBarRegion;
        var searchSurface = this.refs.searchSurface;
        var renderedItems = [].concat(items);
        var renderedOverflowItems = overflowItems;
        var consumedWidth = 0;
        var isOverflowVisible = overflowItems && overflowItems.length;
        var style = window.getComputedStyle(commandSurface);
        var availableWidth = commandBarRegion.clientWidth - parseInt(style.marginLeft, 10) - parseInt(style.marginRight, 10);
        if (searchSurface) {
            availableWidth -= searchSurface.getBoundingClientRect().width;
        }
        if (farCommandSurface) {
            availableWidth -= farCommandSurface.getBoundingClientRect().width;
        }
        if (isOverflowVisible) {
            availableWidth -= this._overflowWidth;
        }
        for (var i = 0; i < renderedItems.length; i++) {
            var item = renderedItems[i];
            var itemWidth = this._commandItemWidths[item.key];
            if ((consumedWidth + itemWidth) >= availableWidth) {
                if (i > 0 && !isOverflowVisible && (availableWidth - consumedWidth) < OVERFLOW_WIDTH) {
                    i--;
                }
                renderedOverflowItems = renderedItems.splice(i).concat(overflowItems);
                break;
            }
            else {
                consumedWidth += itemWidth;
            }
        }
        var renderedContextualMenuProps = this._getContextualMenuPropsAfterUpdate(renderedItems.concat(this.state.renderedFarItems), renderedOverflowItems);
        this.setState({
            renderedItems: renderedItems,
            renderedOverflowItems: renderedOverflowItems,
            expandedMenuItemKey: renderedContextualMenuProps ? this.state.expandedMenuItemKey : null,
            contextualMenuProps: renderedContextualMenuProps,
            contextualMenuTarget: renderedContextualMenuProps ? this.state.contextualMenuTarget : null
        });
    };
    CommandBar.prototype._onItemClick = function (ev, item) {
        if (item.key === this.state.expandedMenuItemKey || !ContextualMenu_1.hasSubmenuItems(item)) {
            this._onContextMenuDismiss();
        }
        else {
            this.setState({
                expandedMenuId: ev.currentTarget.id,
                expandedMenuItemKey: item.key,
                contextualMenuProps: this._getContextualMenuPropsFromItem(item),
                contextualMenuTarget: ev.currentTarget
            });
        }
        if (item.onClick) {
            item.onClick(ev, item);
        }
    };
    CommandBar.prototype._onOverflowClick = function (ev) {
        if (this.state.expandedMenuItemKey === OVERFLOW_KEY) {
            this._onContextMenuDismiss();
        }
        else {
            this.setState({
                expandedMenuId: ev.currentTarget.id,
                expandedMenuItemKey: OVERFLOW_KEY,
                contextualMenuProps: { items: this.state.renderedOverflowItems },
                contextualMenuTarget: ev.currentTarget
            });
        }
    };
    CommandBar.prototype._onContextMenuDismiss = function (ev) {
        if (!ev || !ev.relatedTarget || !this.refs.commandSurface.contains(ev.relatedTarget)) {
            var contextualMenuProps = this.state.contextualMenuProps;
            if (contextualMenuProps && contextualMenuProps.onDismiss) {
                this.state.contextualMenuProps.onDismiss(ev);
            }
            this.setState({
                expandedMenuItemKey: null,
                contextualMenuProps: null,
                contextualMenuTarget: null
            });
        }
        else {
            ev.stopPropagation();
            ev.preventDefault();
        }
    };
    CommandBar.prototype._getStateFromProps = function (nextProps) {
        return {
            renderedItems: nextProps.items || [],
            renderedOverflowItems: null,
            contextualMenuProps: this._getContextualMenuPropsAfterUpdate(nextProps.items.concat(nextProps.farItems), nextProps.overflowItems),
            renderedFarItems: nextProps.farItems || null
        };
    };
    CommandBar.prototype._getContextualMenuPropsAfterUpdate = function (renderedItems, overflowItems) {
        var _this = this;
        if (this.state && this.state.expandedMenuItemKey) {
            if (this.state.expandedMenuItemKey === OVERFLOW_KEY) {
                // Keep the overflow menu open
                return { items: overflowItems };
            }
            else {
                // Find the currently open key in the new props
                var matchingItem = renderedItems.filter(function (item) { return item.key === _this.state.expandedMenuItemKey; });
                if (matchingItem.length === 1) {
                    return this._getContextualMenuPropsFromItem(matchingItem[0]);
                }
            }
        }
        return null;
    };
    CommandBar.prototype._getContextualMenuPropsFromItem = function (item) {
        return item.subMenuProps || (item.items && { items: item.items });
    };
    return CommandBar;
}(Utilities_1.BaseComponent));
CommandBar.defaultProps = {
    items: [],
    overflowItems: [],
    farItems: []
};
__decorate([
    Utilities_1.autobind
], CommandBar.prototype, "_onOverflowClick", null);
__decorate([
    Utilities_1.autobind
], CommandBar.prototype, "_onContextMenuDismiss", null);
exports.CommandBar = CommandBar;



/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
var styles = {
    root: 'root_ffdfa110',
    primaryCommands: 'primaryCommands_ffdfa110',
    sideCommands: 'sideCommands_ffdfa110',
    item: 'item_ffdfa110',
    itemChevronDown: 'itemChevronDown_ffdfa110',
    itemCommandText: 'itemCommandText_ffdfa110',
    itemText: 'itemText_ffdfa110',
    itemLinkIsNoName: 'itemLinkIsNoName_ffdfa110',
    itemLink: 'itemLink_ffdfa110',
    itemLinkIsExpanded: 'itemLinkIsExpanded_ffdfa110',
    itemIcon: 'itemIcon_ffdfa110',
    itemOverflow: 'itemOverflow_ffdfa110',
    itemIconColor: 'itemIconColor_ffdfa110',
    search: 'search_ffdfa110',
    searchInput: 'searchInput_ffdfa110',
    searchIconSearchWrapper: 'searchIconSearchWrapper_ffdfa110',
    searchIconArrowWrapper: 'searchIconArrowWrapper_ffdfa110',
    searchIconClearWrapper: 'searchIconClearWrapper_ffdfa110',
    searchIconWrapper: 'searchIconWrapper_ffdfa110',
};
load_themed_styles_1.loadStyles([{ "rawString": ".root_ffdfa110{font-size:14px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";position:relative;background-color:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";height:40px;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.primaryCommands_ffdfa110{position:absolute;overflow:hidden;display:inline;vertical-align:top;line-height:40px;max-width:100%;margin:0 20px}.sideCommands_ffdfa110{position:absolute}[dir=ltr] .sideCommands_ffdfa110{right:0}[dir=rtl] .sideCommands_ffdfa110{left:0}html[dir=ltr] .sideCommands_ffdfa110{text-align:right}html[dir=rtl] .sideCommands_ffdfa110{text-align:left}html[dir=ltr] .sideCommands_ffdfa110{padding-right:20px}html[dir=rtl] .sideCommands_ffdfa110{padding-left:20px}.item_ffdfa110{display:inline-block;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";height:40px;outline:transparent;vertical-align:top;margin:0 4px}.item_ffdfa110:hover{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.itemChevronDown_ffdfa110,.itemCommandText_ffdfa110{display:inline-block;padding:0 4px;vertical-align:top}.itemText_ffdfa110{font-size:14px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";position:relative;background:0 0;border:none;line-height:40px;min-width:20px;text-align:center;padding:0 4px;display:block;height:100%}.itemText_ffdfa110::-moz-focus-inner{border:0}.itemText_ffdfa110{outline:transparent}.itemText_ffdfa110{position:relative}.ms-Fabric.is-focusVisible .itemText_ffdfa110:focus:after{content:'';position:absolute;top:2px;right:2px;bottom:2px;left:2px;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.itemText_ffdfa110.itemLinkIsNoName_ffdfa110{padding:0 8px}.itemLink_ffdfa110{font-size:14px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";position:relative;background:0 0;border:none;line-height:40px;min-width:20px;text-align:center;padding:0 4px;display:block;height:100%;cursor:pointer}.itemLink_ffdfa110::-moz-focus-inner{border:0}.itemLink_ffdfa110{outline:transparent}.itemLink_ffdfa110{position:relative}.ms-Fabric.is-focusVisible .itemLink_ffdfa110:focus:after{content:'';position:absolute;top:2px;right:2px;bottom:2px;left:2px;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.itemLink_ffdfa110.itemLinkIsNoName_ffdfa110{padding:0 8px}@media screen and (-ms-high-contrast:active){.itemLink_ffdfa110.itemLinkIsExpanded_ffdfa110::-moz-focus-inner,.itemLink_ffdfa110:hover::-moz-focus-inner{border:0}.itemLink_ffdfa110.itemLinkIsExpanded_ffdfa110,.itemLink_ffdfa110:hover{outline:transparent}.itemLink_ffdfa110.itemLinkIsExpanded_ffdfa110,.itemLink_ffdfa110:hover{position:relative}.itemLink_ffdfa110.itemLinkIsExpanded_ffdfa110:after,.itemLink_ffdfa110:hover:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.itemLink_ffdfa110.itemLinkIsExpanded_ffdfa110::-moz-focus-inner,.itemLink_ffdfa110:hover::-moz-focus-inner{border:0}.itemLink_ffdfa110.itemLinkIsExpanded_ffdfa110,.itemLink_ffdfa110:hover{outline:transparent}.itemLink_ffdfa110.itemLinkIsExpanded_ffdfa110,.itemLink_ffdfa110:hover{position:relative}.itemLink_ffdfa110.itemLinkIsExpanded_ffdfa110:after,.itemLink_ffdfa110:hover:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.itemLink_ffdfa110:hover:not([disabled]){color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": ";background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.itemLink_ffdfa110:hover:not([disabled]) .itemIcon_ffdfa110{color:" }, { "theme": "themeDark", "defaultValue": "#005a9e" }, { "rawString": "}.itemLink_ffdfa110:hover:not([disabled]) .itemChevronDown_ffdfa110{color:" }, { "theme": "neutralPrimaryAlt", "defaultValue": "#3c3c3c" }, { "rawString": "}.itemLink_ffdfa110:hover:not([disabled]) .itemOverflow_ffdfa110{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.itemLink_ffdfa110.itemLinkIsExpanded_ffdfa110{background-color:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": ";color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.itemLink_ffdfa110.itemLinkIsExpanded_ffdfa110 .itemIcon_ffdfa110{color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.itemLink_ffdfa110.itemLinkIsExpanded_ffdfa110 .itemChevronDown_ffdfa110{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}.itemLink_ffdfa110.itemLinkIsExpanded_ffdfa110 .itemOverflow_ffdfa110{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}.itemLink_ffdfa110.itemLinkIsExpanded_ffdfa110:hover{background-color:" }, { "theme": "neutralQuaternary", "defaultValue": "#d0d0d0" }, { "rawString": "}.itemLink_ffdfa110[disabled]{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";cursor:default;pointer-events:none}.itemLink_ffdfa110[disabled] .itemIcon_ffdfa110{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.itemIcon_ffdfa110{font-size:16px;padding:0 4px}.itemIconColor_ffdfa110{color:" }, { "theme": "themeDarkAlt", "defaultValue": "#106ebe" }, { "rawString": "}.itemChevronDown_ffdfa110{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";font-size:12px}.itemOverflow_ffdfa110{font-size:18px;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";padding:0 7px}.search_ffdfa110{width:208px;max-width:208px;background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";height:40px;position:relative;box-sizing:border-box;border-color:transparent}html[dir=ltr] .search_ffdfa110{float:left}html[dir=rtl] .search_ffdfa110{float:right}html[dir=ltr] .search_ffdfa110{border-right:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}html[dir=rtl] .search_ffdfa110{border-left:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.search_ffdfa110{z-index:10}html[dir=ltr] .search_ffdfa110{border-right:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=rtl] .search_ffdfa110{border-left:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){html[dir=ltr] .search_ffdfa110{border-right:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}html[dir=rtl] .search_ffdfa110{border-left:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.search_ffdfa110:before{position:absolute;content:' ';right:0;bottom:0;left:0;margin:0 8px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.search_ffdfa110:hover{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}@media screen and (-ms-high-contrast:active){.search_ffdfa110:hover::-moz-focus-inner{border:0}.search_ffdfa110:hover{outline:transparent}.search_ffdfa110:hover{position:relative}.search_ffdfa110:hover:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){.search_ffdfa110:hover::-moz-focus-inner{border:0}.search_ffdfa110:hover{outline:transparent}.search_ffdfa110:hover{position:relative}.search_ffdfa110:hover:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}.searchInput_ffdfa110{height:40px;padding:8px 8px 8px 0;border:none;background-color:transparent;width:100%;box-sizing:border-box;outline:0;cursor:pointer;font-size:14px;-webkit-appearance:none;-webkit-border-radius:0}html[dir=ltr] .searchInput_ffdfa110{border-left:42px solid transparent}html[dir=rtl] .searchInput_ffdfa110{border-right:42px solid transparent}@media screen and (-ms-high-contrast:active){html[dir=ltr] .searchInput_ffdfa110{border-left:40px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}html[dir=rtl] .searchInput_ffdfa110{border-right:40px solid " }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}}@media screen and (-ms-high-contrast:black-on-white){html[dir=ltr] .searchInput_ffdfa110{border-left:40px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}html[dir=rtl] .searchInput_ffdfa110{border-right:40px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}}.searchInput_ffdfa110::-ms-clear{display:none}.searchIconSearchWrapper_ffdfa110{display:block}.searchIconArrowWrapper_ffdfa110{display:none}.searchIconArrowWrapper_ffdfa110,.searchIconSearchWrapper_ffdfa110{top:0}[dir=ltr] .searchIconArrowWrapper_ffdfa110,[dir=ltr] .searchIconSearchWrapper_ffdfa110{padding-left:17px}[dir=rtl] .searchIconArrowWrapper_ffdfa110,[dir=rtl] .searchIconSearchWrapper_ffdfa110{padding-right:17px}html[dir=ltr] .searchIconArrowWrapper_ffdfa110,html[dir=ltr] .searchIconSearchWrapper_ffdfa110{padding-right:8px}html[dir=rtl] .searchIconArrowWrapper_ffdfa110,html[dir=rtl] .searchIconSearchWrapper_ffdfa110{padding-left:8px}.searchIconClearWrapper_ffdfa110{display:none;top:1px;z-index:10}[dir=ltr] .searchIconClearWrapper_ffdfa110{right:0}[dir=rtl] .searchIconClearWrapper_ffdfa110{left:0}.searchIconWrapper_ffdfa110{height:40px;line-height:40px;cursor:pointer;position:absolute;text-align:center}.search_ffdfa110 .ms-Icon:before{font-size:16px;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.searchInput_ffdfa110,.searchInput_ffdfa110::-webkit-input-placeholder{font-size:14px}" }]);
module.exports = styles;
/* tslint:enable */ 



/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(140));



/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ContextualMenu_Props_1 = __webpack_require__(45);
var DirectionalHint_1 = __webpack_require__(5);
var FocusZone_1 = __webpack_require__(38);
var Utilities_1 = __webpack_require__(1);
var Callout_1 = __webpack_require__(125);
var Icon_1 = __webpack_require__(11);
var stylesImport = __webpack_require__(144);
var styles = stylesImport;
var ContextualMenuType;
(function (ContextualMenuType) {
    ContextualMenuType[ContextualMenuType["vertical"] = 0] = "vertical";
    ContextualMenuType[ContextualMenuType["horizontal"] = 1] = "horizontal";
})(ContextualMenuType || (ContextualMenuType = {}));
var HorizontalAlignmentHint;
(function (HorizontalAlignmentHint) {
    HorizontalAlignmentHint[HorizontalAlignmentHint["auto"] = 0] = "auto";
    HorizontalAlignmentHint[HorizontalAlignmentHint["left"] = 1] = "left";
    HorizontalAlignmentHint[HorizontalAlignmentHint["center"] = 2] = "center";
    HorizontalAlignmentHint[HorizontalAlignmentHint["right"] = 3] = "right";
})(HorizontalAlignmentHint || (HorizontalAlignmentHint = {}));
var VerticalAlignmentHint;
(function (VerticalAlignmentHint) {
    VerticalAlignmentHint[VerticalAlignmentHint["top"] = 0] = "top";
    VerticalAlignmentHint[VerticalAlignmentHint["center"] = 1] = "center";
    VerticalAlignmentHint[VerticalAlignmentHint["bottom"] = 2] = "bottom";
})(VerticalAlignmentHint || (VerticalAlignmentHint = {}));
function hasSubmenuItems(item) {
    var submenuItems = getSubmenuItems(item);
    return !!(submenuItems && submenuItems.length);
}
exports.hasSubmenuItems = hasSubmenuItems;
function getSubmenuItems(item) {
    return item.subMenuProps ? item.subMenuProps.items : item.items;
}
exports.getSubmenuItems = getSubmenuItems;
var ContextualMenu = (function (_super) {
    __extends(ContextualMenu, _super);
    function ContextualMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            contextualMenuItems: null,
            subMenuId: Utilities_1.getId('ContextualMenu')
        };
        _this._isFocusingPreviousElement = false;
        _this._enterTimerId = 0;
        return _this;
    }
    ContextualMenu.prototype.dismiss = function (ev, dismissAll) {
        var onDismiss = this.props.onDismiss;
        if (onDismiss) {
            onDismiss(ev, dismissAll);
        }
    };
    ContextualMenu.prototype.componentWillUpdate = function (newProps) {
        if (newProps.targetElement !== this.props.targetElement || newProps.target !== this.props.target) {
            var newTarget = newProps.targetElement ? newProps.targetElement : newProps.target;
            this._setTargetWindowAndElement(newTarget);
        }
    };
    // Invoked once, both on the client and server, immediately before the initial rendering occurs.
    ContextualMenu.prototype.componentWillMount = function () {
        var target = this.props.targetElement ? this.props.targetElement : this.props.target;
        this._setTargetWindowAndElement(target);
        this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : null;
    };
    // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
    ContextualMenu.prototype.componentDidMount = function () {
        this._events.on(this._targetWindow, 'resize', this.dismiss);
        if (this.props.onMenuOpened) {
            this.props.onMenuOpened(this.props);
        }
    };
    // Invoked immediately before a component is unmounted from the DOM.
    ContextualMenu.prototype.componentWillUnmount = function () {
        var _this = this;
        if (this._isFocusingPreviousElement && this._previousActiveElement) {
            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
            // to reset the focus back to the thing it thinks should have been focused.
            setTimeout(function () { return _this._previousActiveElement.focus(); }, 0);
        }
        this._events.dispose();
        this._async.dispose();
    };
    ContextualMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, items = _a.items, isBeakVisible = _a.isBeakVisible, labelElementId = _a.labelElementId, targetElement = _a.targetElement, id = _a.id, targetPoint = _a.targetPoint, useTargetPoint = _a.useTargetPoint, beakWidth = _a.beakWidth, directionalHint = _a.directionalHint, gapSpace = _a.gapSpace, coverTarget = _a.coverTarget, ariaLabel = _a.ariaLabel, doNotLayer = _a.doNotLayer, arrowDirection = _a.arrowDirection, target = _a.target, bounds = _a.bounds, useTargetWidth = _a.useTargetWidth, directionalHintFixed = _a.directionalHintFixed, shouldFocusOnMount = _a.shouldFocusOnMount, calloutProps = _a.calloutProps;
        var hasIcons = !!(items && items.some(function (item) { return !!item.icon || !!item.iconProps; }));
        var hasCheckmarks = !!(items && items.some(function (item) { return !!item.canCheck; }));
        var submenuProps = this.state.expandedMenuItemKey ? this._getSubmenuProps() : null;
        /**
         * When useTargetWidth is true, get the width of the target element and apply it for the context menu container
         */
        var contextMenuStyle;
        var targetAsHtmlElement = this._target;
        if (useTargetWidth && targetAsHtmlElement && targetAsHtmlElement.offsetWidth) {
            var contextMenuWidth = targetAsHtmlElement.offsetWidth;
            contextMenuStyle = {
                width: contextMenuWidth
            };
        }
        // The menu should only return if items were provided, if no items were provided then it should not appear.
        if (items && items.length > 0) {
            return (React.createElement(Callout_1.Callout, __assign({}, calloutProps, { target: target, targetElement: targetElement, targetPoint: targetPoint, useTargetPoint: useTargetPoint, isBeakVisible: isBeakVisible, beakWidth: beakWidth, directionalHint: directionalHint, gapSpace: gapSpace, coverTarget: coverTarget, doNotLayer: doNotLayer, className: 'ms-ContextualMenu-Callout', setInitialFocus: shouldFocusOnMount, onDismiss: this.props.onDismiss, bounds: bounds, directionalHintFixed: directionalHintFixed }),
                React.createElement("div", { style: contextMenuStyle, ref: function (host) { return _this._host = host; }, id: id, className: Utilities_1.css('ms-ContextualMenu-container', className) },
                    (items && items.length) ? (React.createElement(FocusZone_1.FocusZone, { className: Utilities_1.css('ms-ContextualMenu is-open', styles.root), direction: arrowDirection, ref: function (focusZone) { return _this._focusZone = focusZone; }, isCircularNavigation: true },
                        React.createElement("ul", { role: 'menu', "aria-label": ariaLabel, "aria-labelledby": labelElementId, className: Utilities_1.css('ms-ContextualMenu-list is-open', styles.list), onKeyDown: this._onKeyDown }, items.map(function (item, index) { return (_this._renderMenuItem(item, index, hasCheckmarks, hasIcons)); })))) : (null),
                    submenuProps && React.createElement(ContextualMenu, __assign({}, submenuProps)))));
        }
        else {
            return null;
        }
    };
    ContextualMenu.prototype._renderMenuItem = function (item, index, hasCheckmarks, hasIcons) {
        var renderedItems = [];
        if (item.name === '-') {
            item.itemType = ContextualMenu_Props_1.ContextualMenuItemType.Divider;
        }
        switch (item.itemType) {
            case ContextualMenu_Props_1.ContextualMenuItemType.Divider:
                renderedItems.push(this._renderSeparator(index, item.className));
                break;
            case ContextualMenu_Props_1.ContextualMenuItemType.Header:
                renderedItems.push(this._renderSeparator(index));
                var headerItem = this._renderHeaderMenuItem(item, index, hasCheckmarks, hasIcons);
                renderedItems.push(this._renderListItem(headerItem, item.key || index, item.className, item.title));
                break;
            default:
                var menuItem = this._renderNormalItem(item, index, hasCheckmarks, hasIcons);
                renderedItems.push(this._renderListItem(menuItem, item.key || index, item.className, item.title));
                break;
        }
        return renderedItems;
    };
    ContextualMenu.prototype._renderListItem = function (content, key, className, title) {
        return React.createElement("li", { role: 'presentation', title: title, key: key, className: Utilities_1.css('ms-ContextualMenu-item', styles.item, className) }, content);
    };
    ContextualMenu.prototype._renderSeparator = function (index, className) {
        if (index > 0) {
            return React.createElement("li", { role: 'separator', key: 'separator-' + index, className: Utilities_1.css('ms-ContextualMenu-divider', styles.divider, className) });
        }
        return null;
    };
    ContextualMenu.prototype._renderNormalItem = function (item, index, hasCheckmarks, hasIcons) {
        if (item.onRender) {
            return [item.onRender(item)];
        }
        if (item.href) {
            return this._renderAnchorMenuItem(item, index, hasCheckmarks, hasIcons);
        }
        return this._renderButtonItem(item, index, hasCheckmarks, hasIcons);
    };
    ContextualMenu.prototype._renderHeaderMenuItem = function (item, index, hasCheckmarks, hasIcons) {
        return (React.createElement("div", { className: Utilities_1.css('ms-ContextualMenu-header', styles.header), style: item.style }, this._renderMenuItemChildren(item, index, hasCheckmarks, hasIcons)));
    };
    ContextualMenu.prototype._renderAnchorMenuItem = function (item, index, hasCheckmarks, hasIcons) {
        return (React.createElement("div", null,
            React.createElement("a", __assign({}, Utilities_1.getNativeProps(item, Utilities_1.anchorProperties), { href: item.href, className: Utilities_1.css('ms-ContextualMenu-link', styles.link, (item.isDisabled || item.disabled) && 'is-disabled'), role: 'menuitem', style: item.style, onClick: this._onAnchorClick.bind(this, item) }), this._renderMenuItemChildren(item, index, hasCheckmarks, hasIcons))));
    };
    ContextualMenu.prototype._renderButtonItem = function (item, index, hasCheckmarks, hasIcons) {
        var _this = this;
        var _a = this.state, expandedMenuItemKey = _a.expandedMenuItemKey, subMenuId = _a.subMenuId;
        var ariaLabel = '';
        if (item.ariaLabel) {
            ariaLabel = item.ariaLabel;
        }
        else if (item.name) {
            ariaLabel = item.name;
        }
        var itemButtonProperties = {
            className: Utilities_1.css('ms-ContextualMenu-link', styles.link, (_b = {},
                _b['is-expanded ' + styles.isExpanded] = (expandedMenuItemKey === item.key),
                _b)),
            onClick: this._onItemClick.bind(this, item),
            onKeyDown: hasSubmenuItems(item) ? this._onItemKeyDown.bind(this, item) : null,
            onMouseEnter: this._onItemMouseEnter.bind(this, item),
            onMouseLeave: this._onMouseLeave,
            onMouseDown: function (ev) { return _this._onItemMouseDown(item, ev); },
            disabled: item.isDisabled || item.disabled,
            href: item.href,
            title: item.title,
            'aria-label': ariaLabel,
            'aria-haspopup': hasSubmenuItems(item) ? true : null,
            'aria-owns': item.key === expandedMenuItemKey ? subMenuId : null,
            role: 'menuitem',
            style: item.style,
        };
        return React.createElement('button', Utilities_1.assign({}, Utilities_1.getNativeProps(item, Utilities_1.buttonProperties), itemButtonProperties), this._renderMenuItemChildren(item, index, hasCheckmarks, hasIcons));
        var _b;
    };
    ContextualMenu.prototype._renderMenuItemChildren = function (item, index, hasCheckmarks, hasIcons) {
        var isItemChecked = item.isChecked || item.checked;
        return (React.createElement("div", { className: Utilities_1.css('ms-ContextualMenu-linkContent', styles.linkContent) },
            (hasCheckmarks) ? (React.createElement(Icon_1.Icon, { iconName: isItemChecked ? 'CheckMark' : 'CustomIcon', className: Utilities_1.css('ms-ContextualMenu-icon', styles.icon), onClick: this._onItemClick.bind(this, item) })) : (null),
            (hasIcons) ? (this._renderIcon(item)) : (null),
            React.createElement("span", { className: Utilities_1.css('ms-ContextualMenu-itemText', styles.itemText) }, item.name),
            hasSubmenuItems(item) ? (React.createElement(Icon_1.Icon, __assign({ iconName: Utilities_1.getRTL() ? 'ChevronLeft' : 'ChevronRight' }, item.submenuIconProps, { className: Utilities_1.css('ms-ContextualMenu-submenuIcon', styles.submenuIcon, item.submenuIconProps ? item.submenuIconProps.className : '') }))) : (null)));
    };
    ContextualMenu.prototype._renderIcon = function (item) {
        // Only present to allow continued use of item.icon which is deprecated.
        var iconProps = item.iconProps ? item.iconProps : {
            iconName: item.icon
        };
        // Use the default icon color for the known icon names
        var iconColorClassName = iconProps.iconName === 'None' ? '' : ('ms-ContextualMenu-iconColor ' + styles.iconColor);
        var iconClassName = Utilities_1.css('ms-ContextualMenu-icon', styles.icon, iconColorClassName, iconProps.className);
        return React.createElement(Icon_1.Icon, __assign({}, iconProps, { className: iconClassName }));
    };
    ContextualMenu.prototype._onKeyDown = function (ev) {
        var submenuCloseKey = Utilities_1.getRTL() ? Utilities_1.KeyCodes.right : Utilities_1.KeyCodes.left;
        if (ev.which === Utilities_1.KeyCodes.escape
            || ev.which === Utilities_1.KeyCodes.tab
            || (ev.which === submenuCloseKey && this.props.isSubMenu && this.props.arrowDirection === FocusZone_1.FocusZoneDirection.vertical)) {
            // When a user presses escape, we will try to refocus the previous focused element.
            this._isFocusingPreviousElement = true;
            ev.preventDefault();
            ev.stopPropagation();
            this.dismiss(ev);
        }
    };
    ContextualMenu.prototype._onItemMouseEnter = function (item, ev) {
        var _this = this;
        var targetElement = ev.currentTarget;
        if (item.key !== this.state.expandedMenuItemKey) {
            if (hasSubmenuItems(item)) {
                this._enterTimerId = this._async.setTimeout(function () { return _this._onItemSubMenuExpand(item, targetElement); }, 500);
            }
            else {
                this._enterTimerId = this._async.setTimeout(function () { return _this._onSubMenuDismiss(ev); }, 500);
            }
        }
    };
    ContextualMenu.prototype._onMouseLeave = function (ev) {
        this._async.clearTimeout(this._enterTimerId);
    };
    ContextualMenu.prototype._onItemMouseDown = function (item, ev) {
        if (item.onMouseDown) {
            item.onMouseDown(item, ev);
        }
    };
    ContextualMenu.prototype._onItemClick = function (item, ev) {
        var items = getSubmenuItems(item);
        if (!items || !items.length) {
            this._executeItemClick(item, ev);
        }
        else {
            if (item.key === this.state.expandedMenuItemKey) {
                this._onSubMenuDismiss(ev);
            }
            else {
                this._onItemSubMenuExpand(item, ev.currentTarget);
            }
        }
        ev.stopPropagation();
        ev.preventDefault();
    };
    ContextualMenu.prototype._onAnchorClick = function (item, ev) {
        this._executeItemClick(item, ev);
        ev.stopPropagation();
    };
    ContextualMenu.prototype._executeItemClick = function (item, ev) {
        if (item.onClick) {
            item.onClick(ev, item);
        }
        else if (this.props.onItemClick) {
            this.props.onItemClick(ev, item);
        }
        this.dismiss(ev, true);
    };
    ContextualMenu.prototype._onItemKeyDown = function (item, ev) {
        var openKey = Utilities_1.getRTL() ? Utilities_1.KeyCodes.left : Utilities_1.KeyCodes.right;
        if (ev.which === openKey) {
            this._onItemSubMenuExpand(item, ev.currentTarget);
            ev.preventDefault();
        }
    };
    ContextualMenu.prototype._onItemSubMenuExpand = function (item, target) {
        if (this.state.expandedMenuItemKey !== item.key) {
            if (this.state.expandedMenuItemKey) {
                this._onSubMenuDismiss();
            }
            this.setState({
                expandedMenuItemKey: item.key,
                submenuTarget: target
            });
        }
    };
    ContextualMenu.prototype._getSubmenuProps = function () {
        var _a = this.state, submenuTarget = _a.submenuTarget, expandedMenuItemKey = _a.expandedMenuItemKey;
        var item = this._findItemByKey(expandedMenuItemKey);
        var submenuProps = null;
        if (item) {
            submenuProps = {
                items: getSubmenuItems(item),
                target: submenuTarget,
                onDismiss: this._onSubMenuDismiss,
                isSubMenu: true,
                id: this.state.subMenuId,
                shouldFocusOnMount: true,
                directionalHint: Utilities_1.getRTL() ? DirectionalHint_1.DirectionalHint.leftTopEdge : DirectionalHint_1.DirectionalHint.rightTopEdge,
                className: this.props.className,
                gapSpace: 0
            };
            if (item.subMenuProps) {
                Utilities_1.assign(submenuProps, item.subMenuProps);
            }
        }
        return submenuProps;
    };
    ContextualMenu.prototype._findItemByKey = function (key) {
        var items = this.props.items;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (item.key && item.key === key) {
                return item;
            }
        }
    };
    ContextualMenu.prototype._onSubMenuDismiss = function (ev, dismissAll) {
        if (dismissAll) {
            this.dismiss(ev, dismissAll);
        }
        else {
            this.setState({
                dismissedMenuItemKey: this.state.expandedMenuItemKey,
                expandedMenuItemKey: null,
                submenuTarget: null
            });
        }
    };
    ContextualMenu.prototype._setTargetWindowAndElement = function (target) {
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Utilities_1.getDocument();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = Utilities_1.getWindow();
            }
            else if (target.stopPropagation) {
                this._target = target;
                this._targetWindow = Utilities_1.getWindow(target.toElement);
            }
            else {
                var targetElement = target;
                this._target = target;
                this._targetWindow = Utilities_1.getWindow(targetElement);
            }
        }
        else {
            this._targetWindow = Utilities_1.getWindow();
        }
    };
    return ContextualMenu;
}(Utilities_1.BaseComponent));
// The default ContextualMenu properities have no items and beak, the default submenu direction is right and top.
ContextualMenu.defaultProps = {
    items: [],
    shouldFocusOnMount: true,
    isBeakVisible: false,
    gapSpace: 0,
    directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge,
    beakWidth: 16,
    arrowDirection: FocusZone_1.FocusZoneDirection.vertical,
};
__decorate([
    Utilities_1.autobind
], ContextualMenu.prototype, "dismiss", null);
__decorate([
    Utilities_1.autobind
], ContextualMenu.prototype, "_onKeyDown", null);
__decorate([
    Utilities_1.autobind
], ContextualMenu.prototype, "_onMouseLeave", null);
__decorate([
    Utilities_1.autobind
], ContextualMenu.prototype, "_onSubMenuDismiss", null);
exports.ContextualMenu = ContextualMenu;



/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
var styles = {
    root: 'root_ea1ead76',
    list: 'list_ea1ead76',
    item: 'item_ea1ead76',
    link: 'link_ea1ead76',
    isDisabled: 'isDisabled_ea1ead76',
    icon: 'icon_ea1ead76',
    isExpanded: 'isExpanded_ea1ead76',
    header: 'header_ea1ead76',
    linkContent: 'linkContent_ea1ead76',
    divider: 'divider_ea1ead76',
    iconColor: 'iconColor_ea1ead76',
    itemText: 'itemText_ea1ead76',
    submenuIcon: 'submenuIcon_ea1ead76',
};
load_themed_styles_1.loadStyles([{ "rawString": ".root_ea1ead76{background-color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";min-width:180px}.list_ea1ead76{list-style-type:none;margin:0;padding:0;line-height:0}.item_ea1ead76{font-size:14px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";position:relative;box-sizing:border-box}.link_ea1ead76{font:inherit;color:inherit;background:0 0;border:none;width:100%;height:36px;line-height:36px;display:block;cursor:pointer;padding:0 6px}.link_ea1ead76::-moz-focus-inner{border:0}.link_ea1ead76{outline:transparent}.link_ea1ead76{position:relative}.ms-Fabric.is-focusVisible .link_ea1ead76:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}html[dir=ltr] .link_ea1ead76{text-align:left}html[dir=rtl] .link_ea1ead76{text-align:right}.link_ea1ead76:hover:not([disabled]){background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.link_ea1ead76.isDisabled_ea1ead76,.link_ea1ead76[disabled]{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";cursor:default;pointer-events:none}.link_ea1ead76.isDisabled_ea1ead76 .icon_ea1ead76,.link_ea1ead76[disabled] .icon_ea1ead76{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}.is-focusVisible .link_ea1ead76:focus{background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.link_ea1ead76.isExpanded_ea1ead76,.link_ea1ead76.isExpanded_ea1ead76:hover{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": ";color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": ";font-weight:600}.header_ea1ead76{font-size:12px;font-weight:400;font-weight:600;color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";background:0 0;border:none;height:36px;line-height:36px;cursor:default;padding:0 6px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.header_ea1ead76::-moz-focus-inner{border:0}.header_ea1ead76{outline:transparent}.header_ea1ead76{position:relative}.ms-Fabric.is-focusVisible .header_ea1ead76:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}html[dir=ltr] .header_ea1ead76{text-align:left}html[dir=rtl] .header_ea1ead76{text-align:right}a.link_ea1ead76{padding:0 6px;text-rendering:auto;color:inherit;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-shadow:none;text-decoration:none;box-sizing:border-box}.linkContent_ea1ead76{white-space:nowrap;height:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:100%}.divider_ea1ead76{display:block;height:1px;background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";position:relative}.icon_ea1ead76{display:inline-block;min-height:1px;max-height:36px;width:14px;margin:0 4px;vertical-align:middle;-ms-flex-negative:0;flex-shrink:0}.iconColor_ea1ead76{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.itemText_ea1ead76{margin:0 4px;vertical-align:middle;display:inline-block;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.submenuIcon_ea1ead76{height:36px;line-height:36px;text-align:center;font-size:10px;display:inline-block;vertical-align:middle;-ms-flex-negative:0;flex-shrink:0}" }]);
module.exports = styles;
/* tslint:enable */ 



/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(143));
__export(__webpack_require__(45));



/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var DocumentCard_Props_1 = __webpack_require__(46);
var Utilities_1 = __webpack_require__(1);
var stylesImport = __webpack_require__(9);
var styles = stylesImport;
var DocumentCard = (function (_super) {
    __extends(DocumentCard, _super);
    function DocumentCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentCard.prototype.render = function () {
        var _a = this.props, onClick = _a.onClick, onClickHref = _a.onClickHref, children = _a.children, className = _a.className, type = _a.type, accentColor = _a.accentColor;
        var actionable = (onClick || onClickHref) ? true : false;
        // Override the border color if an accent color was provided (compact card only)
        var style;
        if (type === DocumentCard_Props_1.DocumentCardType.compact && accentColor) {
            style = {
                borderBottomColor: accentColor
            };
        }
        // if this element is actionable it should have an aria role
        var role = actionable ? (onClick ? 'button' : 'link') : null;
        var tabIndex = actionable ? 0 : null;
        return (React.createElement("div", { tabIndex: tabIndex, role: role, className: Utilities_1.css('ms-DocumentCard', styles.root, (_b = {},
                _b['ms-DocumentCard--actionable ' + styles.rootIsActionable] = actionable,
                _b['ms-DocumentCard--compact ' + styles.rootIsCompact] = type === DocumentCard_Props_1.DocumentCardType.compact ? true : false,
                _b), className), onKeyDown: actionable ? this._onKeyDown : null, onClick: actionable ? this._onClick : null, style: style }, children));
        var _b;
    };
    DocumentCard.prototype._onClick = function (ev) {
        this._onAction(ev);
    };
    DocumentCard.prototype._onKeyDown = function (ev) {
        if (ev.which === Utilities_1.KeyCodes.enter || ev.which === Utilities_1.KeyCodes.space) {
            this._onAction(ev);
        }
    };
    DocumentCard.prototype._onAction = function (ev) {
        var _a = this.props, onClick = _a.onClick, onClickHref = _a.onClickHref;
        if (onClick) {
            onClick(ev);
        }
        else if (!onClick && onClickHref) {
            // If no onClick Function was provided and we do have an onClickHref, redirect to the onClickHref
            window.location.href = onClickHref;
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    return DocumentCard;
}(Utilities_1.BaseComponent));
DocumentCard.defaultProps = {
    type: DocumentCard_Props_1.DocumentCardType.normal
};
__decorate([
    Utilities_1.autobind
], DocumentCard.prototype, "_onClick", null);
__decorate([
    Utilities_1.autobind
], DocumentCard.prototype, "_onKeyDown", null);
__decorate([
    Utilities_1.autobind
], DocumentCard.prototype, "_onAction", null);
exports.DocumentCard = DocumentCard;



/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Utilities_1 = __webpack_require__(1);
var Icon_1 = __webpack_require__(11);
var Button_1 = __webpack_require__(124);
var stylesImport = __webpack_require__(9);
var styles = stylesImport;
var DocumentCardActions = (function (_super) {
    __extends(DocumentCardActions, _super);
    function DocumentCardActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentCardActions.prototype.render = function () {
        var _a = this.props, actions = _a.actions, views = _a.views;
        return (React.createElement("div", { className: Utilities_1.css('ms-DocumentCardActions', styles.actions) },
            actions && actions.map(function (action, index) {
                return (React.createElement("div", { className: Utilities_1.css('ms-DocumentCardActions-action', styles.action), key: index },
                    React.createElement(Button_1.IconButton, __assign({}, action))));
            }),
            views > 0 && (React.createElement("div", { className: Utilities_1.css('ms-DocumentCardActions-views', styles.views) },
                React.createElement(Icon_1.Icon, { iconName: 'view' }),
                views))));
    };
    return DocumentCardActions;
}(Utilities_1.BaseComponent));
exports.DocumentCardActions = DocumentCardActions;



/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Utilities_1 = __webpack_require__(1);
var Persona_1 = __webpack_require__(128);
var stylesImport = __webpack_require__(9);
var styles = stylesImport;
var DocumentCardActivity = (function (_super) {
    __extends(DocumentCardActivity, _super);
    function DocumentCardActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentCardActivity.prototype.render = function () {
        var _a = this.props, activity = _a.activity, people = _a.people;
        return (people && people.length > 0 &&
            React.createElement("div", { className: Utilities_1.css('ms-DocumentCardActivity', styles.activity, (_b = {},
                    _b['ms-DocumentCardActivity--multiplePeople ' + styles.activityIsMultiplePeople] = people.length > 1,
                    _b)) },
                this._renderAvatars(people),
                React.createElement("div", { className: Utilities_1.css('ms-DocumentCardActivity-details', styles.activityDetails) },
                    React.createElement("span", { className: Utilities_1.css('ms-DocumentCardActivity-name', styles.name) }, this._getNameString(people)),
                    React.createElement("span", { className: Utilities_1.css('ms-DocumentCardActivity-activity', styles.activityActivity) }, activity))));
        var _b;
    };
    DocumentCardActivity.prototype._renderAvatars = function (people) {
        return (React.createElement("div", { className: Utilities_1.css('ms-DocumentCardActivity-avatars', styles.avatars) },
            people.length > 1 ? this._renderAvatar(people[1]) : null,
            this._renderAvatar(people[0])));
    };
    DocumentCardActivity.prototype._renderAvatar = function (person) {
        return (React.createElement("div", { className: Utilities_1.css('ms-DocumentCardActivity-avatar', styles.avatar) },
            React.createElement(Persona_1.Persona, { imageInitials: person.initials, primaryText: person.name, hidePersonaDetails: true, imageUrl: person.profileImageSrc, initialsColor: person.initialsColor, role: 'persentation', size: Persona_1.PersonaSize.extraSmall })));
    };
    DocumentCardActivity.prototype._getNameString = function (people) {
        var nameString = people[0].name;
        if (people.length >= 2) {
            nameString += ' +' + (people.length - 1);
        }
        return nameString;
    };
    return DocumentCardActivity;
}(Utilities_1.BaseComponent));
exports.DocumentCardActivity = DocumentCardActivity;



/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Utilities_1 = __webpack_require__(1);
var stylesImport = __webpack_require__(9);
var styles = stylesImport;
var DocumentCardLocation = (function (_super) {
    __extends(DocumentCardLocation, _super);
    function DocumentCardLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentCardLocation.prototype.render = function () {
        var _a = this.props, location = _a.location, locationHref = _a.locationHref, ariaLabel = _a.ariaLabel, onClick = _a.onClick;
        return (React.createElement("a", { className: Utilities_1.css('ms-DocumentCardLocation', styles.location), href: locationHref, onClick: onClick, "aria-label": ariaLabel }, location));
    };
    return DocumentCardLocation;
}(Utilities_1.BaseComponent));
exports.DocumentCardLocation = DocumentCardLocation;



/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Image_1 = __webpack_require__(21);
var Utilities_1 = __webpack_require__(1);
var stylesImport = __webpack_require__(9);
var styles = stylesImport;
var LIST_ITEM_COUNT = 3;
var DocumentCardPreview = (function (_super) {
    __extends(DocumentCardPreview, _super);
    function DocumentCardPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentCardPreview.prototype.render = function () {
        var previewImages = this.props.previewImages;
        var style, preview;
        var isFileList = false;
        if (previewImages.length > 1) {
            // Render a list of files
            preview = this._renderPreviewList(previewImages);
            isFileList = true;
        }
        else if (previewImages.length === 1) {
            // Render a single preview
            preview = this._renderPreviewImage(previewImages[0]);
            // Override the border color if an accent color was provided
            if (previewImages[0].accentColor) {
                style = {
                    borderBottomColor: previewImages[0].accentColor
                };
            }
        }
        return (React.createElement("div", { className: Utilities_1.css('ms-DocumentCardPreview', styles.preview, isFileList && ('is-fileList ' + styles.previewIsFileList)), style: style }, preview));
    };
    DocumentCardPreview.prototype._renderPreviewImage = function (previewImage) {
        var width = previewImage.width, height = previewImage.height, imageFit = previewImage.imageFit;
        var image = (React.createElement(Image_1.Image, { width: width, height: height, imageFit: imageFit, src: previewImage.previewImageSrc, role: 'presentation', alt: '' }));
        var icon;
        if (previewImage.iconSrc) {
            icon = React.createElement(Image_1.Image, { className: Utilities_1.css('ms-DocumentCardPreview-icon', styles.icon), src: previewImage.iconSrc, role: 'presentation', alt: '' });
        }
        return (React.createElement("div", null,
            image,
            icon));
    };
    DocumentCardPreview.prototype._renderPreviewList = function (previewImages) {
        var getOverflowDocumentCountText = this.props.getOverflowDocumentCountText;
        // Determine how many documents we won't be showing
        var overflowDocumentCount = previewImages.length - LIST_ITEM_COUNT;
        // Determine the overflow text that will be rendered after the preview list.
        var overflowText = overflowDocumentCount ?
            (getOverflowDocumentCountText ?
                getOverflowDocumentCountText(overflowDocumentCount) :
                '+' + overflowDocumentCount) : null;
        // Create list items for the documents to be shown
        var fileListItems = previewImages.slice(0, LIST_ITEM_COUNT).map(function (file, fileIndex) { return (React.createElement("li", { key: fileIndex },
            React.createElement(Image_1.Image, { className: Utilities_1.css('ms-DocumentCardPreview-fileListIcon', styles.fileListIcon), src: file.iconSrc, role: 'presentation', alt: '', width: '16px', height: '16px' }),
            React.createElement("a", { href: file.url }, file.name))); });
        return (React.createElement("div", null,
            React.createElement("ul", { className: Utilities_1.css('ms-DocumentCardPreview-fileList', styles.fileList) }, fileListItems),
            overflowText &&
                React.createElement("span", { className: Utilities_1.css('ms-DocumentCardPreview-fileListMore', styles.fileListMore) }, overflowText)));
    };
    return DocumentCardPreview;
}(Utilities_1.BaseComponent));
__decorate([
    Utilities_1.autobind
], DocumentCardPreview.prototype, "_renderPreviewList", null);
exports.DocumentCardPreview = DocumentCardPreview;



/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(0);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(1);
var stylesImport = __webpack_require__(9);
var styles = stylesImport;
var TRUNCATION_SEPARATOR = '&hellip;';
var TRUNCATION_MINIMUM_LENGTH = 40; // This is the length we know can fit into the min width of DocumentCard.
var TRUNCATION_MAXIMUM_LENGTH = 90 - TRUNCATION_SEPARATOR.length;
var TRUNCATION_FIRST_PIECE_LONGER_BY = 10;
var TRUNCATION_VERTICAL_OVERFLOW_THRESHOLD = 5;
var DocumentCardTitle = (function (_super) {
    __extends(DocumentCardTitle, _super);
    function DocumentCardTitle(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            truncatedTitleFirstPiece: '',
            truncatedTitleSecondPiece: ''
        };
        return _this;
    }
    DocumentCardTitle.prototype.componentDidMount = function () {
        var _a = this.props, title = _a.title, shouldTruncate = _a.shouldTruncate;
        if (shouldTruncate && title && title.length > TRUNCATION_MINIMUM_LENGTH) {
            if (this._doesTitleOverflow()) {
                this._startTruncation(this.props);
            }
            this._events.on(window, 'resize', this._updateTruncation);
        }
    };
    DocumentCardTitle.prototype.componentWillReceiveProps = function (newProps) {
        this._events.off(window, 'resize');
        this._isTruncated = false;
        if (newProps.shouldTruncate && newProps.title && newProps.title.length > TRUNCATION_MINIMUM_LENGTH) {
            this._startTruncation(newProps);
            this._events.on(window, 'resize', this._updateTruncation);
        }
    };
    DocumentCardTitle.prototype.componentDidUpdate = function () {
        // If we're truncating, make sure the title fits
        if (this.props.shouldTruncate) {
            this._shrinkTitle();
        }
    };
    DocumentCardTitle.prototype.render = function () {
        var _a = this.props, title = _a.title, shouldTruncate = _a.shouldTruncate;
        var _b = this.state, truncatedTitleFirstPiece = _b.truncatedTitleFirstPiece, truncatedTitleSecondPiece = _b.truncatedTitleSecondPiece;
        var documentCardTitle;
        if (shouldTruncate && this._isTruncated) {
            documentCardTitle = (React.createElement("div", { className: Utilities_1.css('ms-DocumentCardTitle', styles.title), ref: this._resolveRef('_titleElement'), title: title },
                truncatedTitleFirstPiece,
                "\u2026",
                truncatedTitleSecondPiece));
        }
        else {
            documentCardTitle = (React.createElement("div", { className: Utilities_1.css('ms-DocumentCardTitle', styles.title), ref: this._resolveRef('_titleElement'), title: title }, title));
        }
        return documentCardTitle;
    };
    DocumentCardTitle.prototype._startTruncation = function (props) {
        var originalTitle = props.title;
        this._isTruncated = false;
        // If the title is really short, there's no need to truncate it
        if (originalTitle && originalTitle.length >= TRUNCATION_MINIMUM_LENGTH) {
            // Break the text into two pieces for assembly later
            if (originalTitle.length > TRUNCATION_MAXIMUM_LENGTH) {
                // The text is really long, so we can take a chunk out of the middle so the two pieces combine for the maximum length
                this._isTruncated = true;
                this.setState({
                    truncatedTitleFirstPiece: originalTitle.slice(0, TRUNCATION_MAXIMUM_LENGTH / 2 + TRUNCATION_FIRST_PIECE_LONGER_BY),
                    truncatedTitleSecondPiece: originalTitle.slice(originalTitle.length - (TRUNCATION_MAXIMUM_LENGTH / 2 - TRUNCATION_FIRST_PIECE_LONGER_BY))
                });
            }
            else {
                // The text is not so long, so we'll just break it into two pieces
                this.setState({
                    truncatedTitleFirstPiece: originalTitle.slice(0, Math.ceil(originalTitle.length / 2) + TRUNCATION_FIRST_PIECE_LONGER_BY),
                    truncatedTitleSecondPiece: originalTitle.slice(originalTitle.length - Math.floor(originalTitle.length / 2) + TRUNCATION_FIRST_PIECE_LONGER_BY)
                });
            }
        }
        // Save the width we just started truncation at, so that later we will only update truncation if necessary
        this._truncatedTitleAtWidth = this._titleElement.clientWidth;
    };
    DocumentCardTitle.prototype._shrinkTitle = function () {
        if (this._doesTitleOverflow()) {
            var _a = this.state, truncatedTitleFirstPiece = _a.truncatedTitleFirstPiece, truncatedTitleSecondPiece = _a.truncatedTitleSecondPiece;
            this._isTruncated = true;
            if (!truncatedTitleFirstPiece && !truncatedTitleSecondPiece) {
                this._startTruncation(this.props);
            }
            this.setState({
                truncatedTitleFirstPiece: truncatedTitleFirstPiece.slice(0, truncatedTitleFirstPiece.length - 1),
                truncatedTitleSecondPiece: truncatedTitleSecondPiece.slice(1)
            });
        }
    };
    DocumentCardTitle.prototype._doesTitleOverflow = function () {
        var titleElement = this._titleElement;
        return titleElement.scrollHeight > titleElement.clientHeight + TRUNCATION_VERTICAL_OVERFLOW_THRESHOLD || titleElement.scrollWidth > titleElement.clientWidth;
    };
    DocumentCardTitle.prototype._updateTruncation = function () {
        // Only update truncation if the title's size has changed since the last time we truncated
        if (this._titleElement.clientWidth !== this._truncatedTitleAtWidth) {
            // Throttle truncation so that it doesn't happen during a window resize
            clearTimeout(this._scrollTimerId);
            this._scrollTimerId = this._async.setTimeout(this._startTruncation.bind(this, this.props), 250);
        }
    };
    return DocumentCardTitle;
}(Utilities_1.BaseComponent));
__decorate([
    Utilities_1.autobind
], DocumentCardTitle.prototype, "_startTruncation", null);
exports.DocumentCardTitle = DocumentCardTitle;



/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(146));
__export(__webpack_require__(46));
__export(__webpack_require__(147));
__export(__webpack_require__(148));
__export(__webpack_require__(149));
__export(__webpack_require__(150));
__export(__webpack_require__(151));



/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(2);
var Fabric_styles_1 = __webpack_require__(154);
var DIRECTIONAL_KEY_CODES = [
    Utilities_1.KeyCodes.up,
    Utilities_1.KeyCodes.down,
    Utilities_1.KeyCodes.left,
    Utilities_1.KeyCodes.right,
    Utilities_1.KeyCodes.home,
    Utilities_1.KeyCodes.end,
    Utilities_1.KeyCodes.tab,
    Utilities_1.KeyCodes.pageUp,
    Utilities_1.KeyCodes.pageDown
];
// We will track the last focus visibility state so that if we tear down and recreate
// the Fabric component, we will use the last known value as the default.
var _lastIsFocusVisible = false;
// Ensure that the HTML element has a dir specified. This helps to ensure RTL/LTR macros in css for all components will work.
if (typeof (document) === 'object' && document.documentElement && !document.documentElement.getAttribute('dir')) {
    document.documentElement.setAttribute('dir', 'ltr');
}
var Fabric = (function (_super) {
    __extends(Fabric, _super);
    function Fabric() {
        var _this = _super.call(this) || this;
        _this.state = {
            isFocusVisible: _lastIsFocusVisible
        };
        return _this;
    }
    Fabric.prototype.componentDidMount = function () {
        this._events.on(document.body, 'mousedown', this._onMouseDown, true);
        this._events.on(document.body, 'keydown', this._onKeyDown, true);
    };
    Fabric.prototype.render = function () {
        var isFocusVisible = this.state.isFocusVisible;
        var styles = Fabric_styles_1.getStyles();
        var rootClass = Styling_1.mergeStyles('ms-Fabric', styles.root, this.props.className, isFocusVisible && 'is-focusVisible');
        return (React.createElement("div", __assign({}, this.props, { className: rootClass, ref: 'root' })));
    };
    Fabric.prototype._onMouseDown = function () {
        if (this.state.isFocusVisible) {
            this.setState({
                isFocusVisible: false
            });
            _lastIsFocusVisible = false;
        }
    };
    Fabric.prototype._onKeyDown = function (ev) {
        if (!this.state.isFocusVisible && DIRECTIONAL_KEY_CODES.indexOf(ev.which) > -1) {
            this.setState({
                isFocusVisible: true
            });
            _lastIsFocusVisible = true;
        }
    };
    return Fabric;
}(Utilities_1.BaseComponent));
exports.Fabric = Fabric;



/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(2);
var inheritFont = { fontFamily: 'inherit' };
exports.getStyles = Utilities_1.memoizeFunction(function (theme) {
    if (theme === void 0) { theme = Styling_1.getTheme(); }
    return {
        root: [
            theme.fonts.medium,
            {
                color: theme.palette.neutralPrimary,
                '& button': inheritFont,
                '& input': inheritFont
            }
        ]
    };
});



/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(153));



/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var FocusZone_Props_1 = __webpack_require__(47);
var Utilities_1 = __webpack_require__(1);
var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var TABINDEX = 'tabindex';
var _allInstances = {};
var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
var FocusZone = (function (_super) {
    __extends(FocusZone, _super);
    function FocusZone(props) {
        var _this = _super.call(this, props) || this;
        _this._warnDeprecations({ rootProps: null });
        _this._id = Utilities_1.getId('FocusZone');
        _allInstances[_this._id] = _this;
        _this._focusAlignment = {
            left: 0,
            top: 0
        };
        return _this;
    }
    FocusZone.prototype.componentDidMount = function () {
        var windowElement = this.refs.root.ownerDocument.defaultView;
        var parentElement = Utilities_1.getParent(this.refs.root);
        while (parentElement &&
            parentElement !== document.body &&
            parentElement.nodeType === 1) {
            if (Utilities_1.isElementFocusZone(parentElement)) {
                this._isInnerZone = true;
                break;
            }
            parentElement = Utilities_1.getParent(parentElement);
        }
        if (!this._isInnerZone) {
            this._events.on(windowElement, 'keydown', this._onKeyDownCapture, true);
        }
        // Assign initial tab indexes so that we can set initial focus as appropriate.
        this._updateTabIndexes();
        if (this.props.defaultActiveElement) {
            this._activeElement = Utilities_1.getDocument().querySelector(this.props.defaultActiveElement);
            this.focus();
        }
    };
    FocusZone.prototype.componentWillUnmount = function () {
        delete _allInstances[this._id];
    };
    FocusZone.prototype.render = function () {
        var _a = this.props, rootProps = _a.rootProps, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className;
        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
        return (React.createElement("div", __assign({ role: 'presentation' }, divProps, rootProps, { className: Utilities_1.css('ms-FocusZone', className), ref: 'root', "data-focuszone-id": this._id, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown, onFocus: this._onFocus }, { onMouseDownCapture: this._onMouseDown }), this.props.children));
    };
    /**
     * Sets focus to the first tabbable item in the zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (!forceIntoFirstElement && this.refs.root.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' && this._isInnerZone) {
            // The parent focus zone should take responsibility for focusing this element.
            return true;
        }
        else if (this._activeElement && Utilities_1.elementContains(this.refs.root, this._activeElement)) {
            this._activeElement.focus();
            return true;
        }
        else {
            var firstChild = this.refs.root.firstChild;
            return this.focusElement(Utilities_1.getNextElement(this.refs.root, firstChild, true));
        }
    };
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * onBeforeFocus to created delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param {HTMLElement} element The child element within the zone to focus.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focusElement = function (element) {
        var onBeforeFocus = this.props.onBeforeFocus;
        if (onBeforeFocus && !onBeforeFocus(element)) {
            return false;
        }
        if (element) {
            var previousActiveElement = this._activeElement;
            this._activeElement = element;
            if (previousActiveElement) {
                if (Utilities_1.isElementFocusZone(previousActiveElement)) {
                    this._updateTabIndexes(previousActiveElement);
                }
                previousActiveElement.tabIndex = -1;
            }
            if (element) {
                if (!this._focusAlignment) {
                    this._setFocusAlignment(element, true, true);
                }
                this._activeElement.tabIndex = 0;
                element.focus();
                return true;
            }
        }
        return false;
    };
    FocusZone.prototype._onFocus = function (ev) {
        var onActiveElementChanged = this.props.onActiveElementChanged;
        if (this._isImmediateDescendantOfZone(ev.target)) {
            this._activeElement = ev.target;
            this._setFocusAlignment(this._activeElement);
        }
        else {
            var parentElement = ev.target;
            while (parentElement && parentElement !== this.refs.root) {
                if (Utilities_1.isElementTabbable(parentElement) && this._isImmediateDescendantOfZone(parentElement)) {
                    this._activeElement = parentElement;
                    break;
                }
                parentElement = Utilities_1.getParent(parentElement);
            }
        }
        if (onActiveElementChanged) {
            onActiveElementChanged(this._activeElement, ev);
        }
    };
    /**
     * Handle global tab presses so that we can patch tabindexes on the fly.
     */
    FocusZone.prototype._onKeyDownCapture = function (ev) {
        if (ev.which === Utilities_1.KeyCodes.tab) {
            this._updateTabIndexes();
        }
    };
    FocusZone.prototype._onMouseDown = function (ev) {
        var disabled = this.props.disabled;
        if (disabled) {
            return;
        }
        var target = ev.target;
        var path = [];
        while (target && target !== this.refs.root) {
            path.push(target);
            target = Utilities_1.getParent(target);
        }
        while (path.length) {
            target = path.pop();
            if (target && Utilities_1.isElementTabbable(target)) {
                target.tabIndex = 0;
                this._setFocusAlignment(target, true, true);
            }
            if (Utilities_1.isElementFocusZone(target)) {
                // Stop here since the focus zone will take care of its own children.
                break;
            }
        }
    };
    /**
     * Handle the keystrokes.
     */
    FocusZone.prototype._onKeyDown = function (ev) {
        var _a = this.props, direction = _a.direction, disabled = _a.disabled, isInnerZoneKeystroke = _a.isInnerZoneKeystroke;
        if (disabled) {
            return;
        }
        if (document.activeElement === this.refs.root && this._isInnerZone) {
            // If this element has focus, it is being controlled by a parent.
            // Ignore the keystroke.
            return;
        }
        if (this.props.onKeyDown) {
            this.props.onKeyDown(ev);
            if (ev.isDefaultPrevented()) {
                return;
            }
        }
        if (isInnerZoneKeystroke &&
            isInnerZoneKeystroke(ev) &&
            this._isImmediateDescendantOfZone(ev.target)) {
            // Try to focus
            var innerZone = this._getFirstInnerZone();
            if (innerZone) {
                if (!innerZone.focus(true)) {
                    return;
                }
            }
            else if (Utilities_1.isElementFocusSubZone(ev.target)) {
                if (!this.focusElement(Utilities_1.getNextElement(ev.target, ev.target.firstChild, true))) {
                    return;
                }
            }
            else {
                return;
            }
        }
        else if (ev.altKey) {
            return;
        }
        else {
            switch (ev.which) {
                case Utilities_1.KeyCodes.space:
                    if (this._tryInvokeClickForFocusable(ev.target)) {
                        break;
                    }
                    return;
                case Utilities_1.KeyCodes.left:
                    if (direction !== FocusZone_Props_1.FocusZoneDirection.vertical && this._moveFocusLeft()) {
                        break;
                    }
                    return;
                case Utilities_1.KeyCodes.right:
                    if (direction !== FocusZone_Props_1.FocusZoneDirection.vertical && this._moveFocusRight()) {
                        break;
                    }
                    return;
                case Utilities_1.KeyCodes.up:
                    if (direction !== FocusZone_Props_1.FocusZoneDirection.horizontal && this._moveFocusUp()) {
                        break;
                    }
                    return;
                case Utilities_1.KeyCodes.down:
                    if (direction !== FocusZone_Props_1.FocusZoneDirection.horizontal && this._moveFocusDown()) {
                        break;
                    }
                    return;
                case Utilities_1.KeyCodes.home:
                    var firstChild = this.refs.root.firstChild;
                    if (this.focusElement(Utilities_1.getNextElement(this.refs.root, firstChild, true))) {
                        break;
                    }
                    return;
                case Utilities_1.KeyCodes.end:
                    var lastChild = this.refs.root.lastChild;
                    if (this.focusElement(Utilities_1.getPreviousElement(this.refs.root, lastChild, true, true, true))) {
                        break;
                    }
                    return;
                case Utilities_1.KeyCodes.enter:
                    if (this._tryInvokeClickForFocusable(ev.target)) {
                        break;
                    }
                    return;
                default:
                    return;
            }
        }
        ev.preventDefault();
        ev.stopPropagation();
    };
    /**
     * Walk up the dom try to find a focusable element.
     */
    FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
        if (target === this.refs.root) {
            return false;
        }
        do {
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT') {
                return false;
            }
            if (this._isImmediateDescendantOfZone(target) &&
                target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
                Utilities_1.EventGroup.raise(target, 'click', null, true);
                return true;
            }
            target = Utilities_1.getParent(target);
        } while (target !== this.refs.root);
        return false;
    };
    /**
     * Traverse to find first child zone.
     */
    FocusZone.prototype._getFirstInnerZone = function (rootElement) {
        rootElement = rootElement || this._activeElement || this.refs.root;
        if (Utilities_1.isElementFocusZone(rootElement)) {
            return _allInstances[rootElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
        }
        var child = rootElement.firstElementChild;
        while (child) {
            if (Utilities_1.isElementFocusZone(child)) {
                return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
            }
            var match = this._getFirstInnerZone(child);
            if (match) {
                return match;
            }
            child = child.nextElementSibling;
        }
        return null;
    };
    FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev) {
        var element = this._activeElement;
        var candidateDistance = -1;
        var candidateElement;
        var changedFocus = false;
        var isBidirectional = this.props.direction === FocusZone_Props_1.FocusZoneDirection.bidirectional;
        if (!element) {
            return false;
        }
        if (this._isElementInput(element)) {
            if (!this._shouldInputLoseFocus(element, isForward)) {
                return false;
            }
        }
        var activeRect = isBidirectional ? element.getBoundingClientRect() : null;
        do {
            element = isForward ?
                Utilities_1.getNextElement(this.refs.root, element) :
                Utilities_1.getPreviousElement(this.refs.root, element);
            if (isBidirectional) {
                if (element) {
                    var targetRect = element.getBoundingClientRect();
                    var elementDistance = getDistanceFromCenter(activeRect, targetRect);
                    if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    if (candidateDistance >= 0 && elementDistance < 0) {
                        break;
                    }
                }
            }
            else {
                candidateElement = element;
                break;
            }
        } while (element);
        // Focus the closest candidate
        if (candidateElement && candidateElement !== this._activeElement) {
            changedFocus = true;
            this.focusElement(candidateElement);
        }
        else if (this.props.isCircularNavigation) {
            if (isForward) {
                return this.focusElement(Utilities_1.getNextElement(this.refs.root, this.refs.root.firstElementChild, true));
            }
            else {
                return this.focusElement(Utilities_1.getPreviousElement(this.refs.root, this.refs.root.lastElementChild, true, true, true));
            }
        }
        return changedFocus;
    };
    FocusZone.prototype._moveFocusDown = function () {
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(true, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectBottom = Math.floor(activeRect.bottom);
            if ((targetTop === -1 && targetRectTop >= activeRectBottom) ||
                (targetRectTop === targetTop)) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= (targetRect.left + targetRect.width)) {
                    distance = 0;
                }
                else {
                    distance = Math.abs((targetRect.left + (targetRect.width / 2)) - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusUp = function () {
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(false, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectBottom = Math.floor(targetRect.bottom);
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectTop = Math.floor(activeRect.top);
            if ((targetTop === -1 && targetRectBottom <= activeRectTop) ||
                (targetRectTop === targetTop)) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= (targetRect.left + targetRect.width)) {
                    distance = 0;
                }
                else {
                    distance = Math.abs((targetRect.left + (targetRect.width / 2)) - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusLeft = function () {
        var _this = this;
        var targetTop = -1;
        var topAlignment = this._focusAlignment.top;
        if (this._moveFocus(Utilities_1.getRTL(), function (activeRect, targetRect) {
            var distance = -1;
            if ((targetTop === -1 &&
                targetRect.right <= activeRect.right &&
                (_this.props.direction === FocusZone_Props_1.FocusZoneDirection.horizontal || targetRect.top === activeRect.top)) ||
                (targetRect.top === targetTop)) {
                targetTop = targetRect.top;
                distance = Math.abs((targetRect.top + (targetRect.height / 2)) - topAlignment);
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusRight = function () {
        var _this = this;
        var targetTop = -1;
        var topAlignment = this._focusAlignment.top;
        if (this._moveFocus(!Utilities_1.getRTL(), function (activeRect, targetRect) {
            var distance = -1;
            if ((targetTop === -1 &&
                targetRect.left >= activeRect.left &&
                (_this.props.direction === FocusZone_Props_1.FocusZoneDirection.horizontal || targetRect.top === activeRect.top)) ||
                (targetRect.top === targetTop)) {
                targetTop = targetRect.top;
                distance = Math.abs((targetRect.top + (targetRect.height / 2)) - topAlignment);
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
        if (this.props.direction === FocusZone_Props_1.FocusZoneDirection.bidirectional &&
            (!this._focusAlignment || isHorizontal || isVertical)) {
            var rect = element.getBoundingClientRect();
            var left = rect.left + (rect.width / 2);
            var top_1 = rect.top + (rect.height / 2);
            if (!this._focusAlignment) {
                this._focusAlignment = { left: left, top: top_1 };
            }
            if (isHorizontal) {
                this._focusAlignment.left = left;
            }
            if (isVertical) {
                this._focusAlignment.top = top_1;
            }
        }
    };
    FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
        return this._getOwnerZone(element) === this.refs.root;
    };
    FocusZone.prototype._getOwnerZone = function (element) {
        var parentElement = Utilities_1.getParent(element);
        while (parentElement && parentElement !== this.refs.root && parentElement !== document.body) {
            if (Utilities_1.isElementFocusZone(parentElement)) {
                return parentElement;
            }
            parentElement = Utilities_1.getParent(parentElement);
        }
        return this.refs.root;
    };
    FocusZone.prototype._updateTabIndexes = function (element) {
        if (!element) {
            element = this.refs.root;
            if (this._activeElement && !Utilities_1.elementContains(element, this._activeElement)) {
                this._activeElement = null;
            }
        }
        var childNodes = element.children;
        for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
            var child = childNodes[childIndex];
            if (!Utilities_1.isElementFocusZone(child)) {
                // If the item is explicitly set to not be focusable then TABINDEX needs to be set to -1.
                if (child.getAttribute && child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'false') {
                    child.setAttribute(TABINDEX, '-1');
                }
                if (Utilities_1.isElementTabbable(child)) {
                    if (this.props.disabled) {
                        child.setAttribute(TABINDEX, '-1');
                    }
                    else if (!this._isInnerZone && (!this._activeElement || this._activeElement === child)) {
                        this._activeElement = child;
                        if (child.getAttribute(TABINDEX) !== '0') {
                            child.setAttribute(TABINDEX, '0');
                        }
                    }
                    else if (child.getAttribute(TABINDEX) !== '-1') {
                        child.setAttribute(TABINDEX, '-1');
                    }
                }
                else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
                    // Disgusting IE hack. Sad face.
                    child.setAttribute('focusable', 'false');
                }
            }
            else if (child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') {
                if (!this._isInnerZone && (!this._activeElement || this._activeElement === child)) {
                    this._activeElement = child;
                    if (child.getAttribute(TABINDEX) !== '0') {
                        child.setAttribute(TABINDEX, '0');
                    }
                }
                else if (child.getAttribute(TABINDEX) !== '-1') {
                    child.setAttribute(TABINDEX, '-1');
                }
            }
            this._updateTabIndexes(child);
        }
    };
    FocusZone.prototype._isElementInput = function (element) {
        if (element && element.tagName && element.tagName.toLowerCase() === 'input') {
            return true;
        }
        return false;
    };
    FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
        if (element &&
            element.type &&
            ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
            var selectionStart = element.selectionStart;
            var selectionEnd = element.selectionEnd;
            var isRangeSelected = selectionStart !== selectionEnd;
            var inputValue = element.value;
            // We shouldn't lose focus in the following cases:
            // 1. There is range selected.
            // 2. When selection start is larger than 0 and it is backward.
            // 3. when selection start is not the end of lenght and it is forward.
            if (isRangeSelected ||
                (selectionStart > 0 && !isForward) ||
                (selectionStart !== inputValue.length && isForward)) {
                return false;
            }
        }
        return true;
    };
    return FocusZone;
}(Utilities_1.BaseComponent));
FocusZone.defaultProps = {
    isCircularNavigation: false,
    direction: FocusZone_Props_1.FocusZoneDirection.bidirectional
};
__decorate([
    Utilities_1.autobind
], FocusZone.prototype, "_onFocus", null);
__decorate([
    Utilities_1.autobind
], FocusZone.prototype, "_onMouseDown", null);
__decorate([
    Utilities_1.autobind
], FocusZone.prototype, "_onKeyDown", null);
exports.FocusZone = FocusZone;



/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(156));
__export(__webpack_require__(47));



/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var React = __webpack_require__(0);
/* tslint:enable */
var Icon_Props_1 = __webpack_require__(48);
var Image_1 = __webpack_require__(50);
var Utilities_1 = __webpack_require__(1);
var Styling_1 = __webpack_require__(2);
var Icon_styles_1 = __webpack_require__(159);
function Icon(props) {
    var ariaLabel = props.ariaLabel, className = props.className, customStyles = props.styles, iconName = props.iconName;
    var styles = Icon_styles_1.getStyles(undefined, customStyles);
    if (props.iconType === Icon_Props_1.IconType.image || props.iconType === Icon_Props_1.IconType.Image) {
        var containerClassName = Utilities_1.css('ms-Icon', 'ms-Icon-imageContainer', styles.root, styles.imageContainer, className);
        return (React.createElement("div", { className: Utilities_1.css(containerClassName, styles.root) },
            "l  ",
            React.createElement(Image_1.Image, __assign({}, props.imageProps))));
    }
    else {
        var iconMemberName = iconName ? iconName.charAt(0).toLowerCase() + iconName.substr(1) : '';
        return (React.createElement("i", __assign({ "aria-label": ariaLabel }, (ariaLabel ? {} : {
            role: 'presentation',
            'aria-hidden': true
        }), Utilities_1.getNativeProps(props, Utilities_1.htmlElementProperties), { className: Utilities_1.css('ms-Icon', Styling_1.IconClassNames[iconMemberName], styles.root, props.className) })));
    }
}
exports.Icon = Icon;



/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(2);
var Utilities_1 = __webpack_require__(1);
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    if (theme === void 0) { theme = Styling_1.getTheme(); }
    if (customStyles === void 0) { customStyles = undefined; }
    var iconStyles = {
        root: Styling_1.mergeStyles({
            display: 'inline-block'
        }),
        imageContainer: Styling_1.mergeStyles({
            overflow: 'hidden'
        })
    };
    return Styling_1.mergeStyleSets(iconStyles, customStyles);
});



/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(158));
__export(__webpack_require__(48));



/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
var styles = {
    root: 'root_df149024',
    rootIsMaximizeFrame: 'rootIsMaximizeFrame_df149024',
    image: 'image_df149024',
    imageIsLoaded: 'imageIsLoaded_df149024',
    imageIsCenter: 'imageIsCenter_df149024',
    imageIsContain: 'imageIsContain_df149024',
    imageIsCover: 'imageIsCover_df149024',
    imageIsLandscape: 'imageIsLandscape_df149024',
    imageIsPortrait: 'imageIsPortrait_df149024',
    imageIsNone: 'imageIsNone_df149024',
    imageIsScaleWidthHeight: 'imageIsScaleWidthHeight_df149024',
    imageIsScaleWidth: 'imageIsScaleWidth_df149024',
    imageIsScaleHeight: 'imageIsScaleHeight_df149024',
};
load_themed_styles_1.loadStyles([{ "rawString": ".root_df149024{overflow:hidden}.rootIsMaximizeFrame_df149024{height:100%;width:100%}.image_df149024{display:block;opacity:0}.image_df149024.imageIsLoaded_df149024{opacity:1}.imageIsCenter_df149024,.imageIsContain_df149024,.imageIsCover_df149024{position:relative;top:50%}[dir=ltr] .imageIsCenter_df149024,[dir=ltr] .imageIsContain_df149024,[dir=ltr] .imageIsCover_df149024{left:50%}[dir=rtl] .imageIsCenter_df149024,[dir=rtl] .imageIsContain_df149024,[dir=rtl] .imageIsCover_df149024{right:50%}html[dir=ltr] .imageIsCenter_df149024,html[dir=ltr] .imageIsContain_df149024,html[dir=ltr] .imageIsCover_df149024{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}html[dir=rtl] .imageIsCenter_df149024,html[dir=rtl] .imageIsContain_df149024,html[dir=rtl] .imageIsCover_df149024{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.imageIsContain_df149024.imageIsLandscape_df149024{width:100%;height:auto}.imageIsContain_df149024.imageIsPortrait_df149024{height:100%;width:auto}.imageIsCover_df149024.imageIsLandscape_df149024{height:100%;width:auto}.imageIsCover_df149024.imageIsPortrait_df149024{width:100%;height:auto}.imageIsNone_df149024{height:auto;width:auto}.imageIsScaleWidthHeight_df149024{height:100%;width:100%}.imageIsScaleWidth_df149024{height:auto;width:100%}.imageIsScaleHeight_df149024{height:100%;width:auto}" }]);
module.exports = styles;
/* tslint:enable */ 



/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(50));
__export(__webpack_require__(49));



/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(4);
var styles = {
    rootIsFixed: 'rootIsFixed_57a4cbe6',
    content: 'content_57a4cbe6',
};
load_themed_styles_1.loadStyles([{ "rawString": ".rootIsFixed_57a4cbe6{position:fixed;z-index:1000000;top:0;left:0;width:100vw;height:100vh;visibility:hidden}.content_57a4cbe6{visibility:visible}" }]);
module.exports = styles;
/* tslint:enable */ 



/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Utilities_1 = __webpack_require__(1);
var Layer_1 = __webpack_require__(51);
var LayerHost = (function (_super) {
    __extends(LayerHost, _super);
    function LayerHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerHost.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LayerHost.prototype.componentDidMount = function () {
        Layer_1.Layer.notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.componentWillUnmount = function () {
        Layer_1.Layer.notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.render = function () {
        return (React.createElement("div", __assign({}, this.props, { className: Utilities_1.css('ms-LayerHost', this.props.className) })));
    };
    return LayerHost;
}(Utilities_1.BaseComponent));
exports.LayerHost = LayerHost;



/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(51));
__export(__webpack_require__(164));



/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Utilities_1 = __webpack_require__(1);
var Icon_1 = __webpack_require__(11);
var Image_1 = __webpack_require__(21);
var Persona_Props_1 = __webpack_require__(24);
var PersonaConsts_1 = __webpack_require__(53);
var stylesImport = __webpack_require__(52);
var styles = stylesImport;
// The RGB color swatches
var COLOR_SWATCHES_LOOKUP = [
    Persona_Props_1.PersonaInitialsColor.lightGreen,
    Persona_Props_1.PersonaInitialsColor.lightBlue,
    Persona_Props_1.PersonaInitialsColor.lightPink,
    Persona_Props_1.PersonaInitialsColor.green,
    Persona_Props_1.PersonaInitialsColor.darkGreen,
    Persona_Props_1.PersonaInitialsColor.pink,
    Persona_Props_1.PersonaInitialsColor.magenta,
    Persona_Props_1.PersonaInitialsColor.purple,
    Persona_Props_1.PersonaInitialsColor.black,
    Persona_Props_1.PersonaInitialsColor.teal,
    Persona_Props_1.PersonaInitialsColor.blue,
    Persona_Props_1.PersonaInitialsColor.darkBlue,
    Persona_Props_1.PersonaInitialsColor.orange,
    Persona_Props_1.PersonaInitialsColor.darkRed,
    Persona_Props_1.PersonaInitialsColor.red
];
var COLOR_SWATCHES_NUM_ENTRIES = COLOR_SWATCHES_LOOKUP.length;
var Persona = (function (_super) {
    __extends(Persona, _super);
    function Persona(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isImageLoaded: false,
        };
        return _this;
    }
    Persona.prototype.render = function () {
        var _a = this.props, className = _a.className, size = _a.size, imageUrl = _a.imageUrl, initialsColor = _a.initialsColor, presence = _a.presence, primaryText = _a.primaryText, secondaryText = _a.secondaryText, tertiaryText = _a.tertiaryText, optionalText = _a.optionalText, hidePersonaDetails = _a.hidePersonaDetails, imageShouldFadeIn = _a.imageShouldFadeIn, _b = _a.onRenderInitials, onRenderInitials = _b === void 0 ? this._onRenderInitials : _b, onRenderPrimaryText = _a.onRenderPrimaryText, onRenderSecondaryText = _a.onRenderSecondaryText, onRenderTertiaryText = _a.onRenderTertiaryText, onRenderOptionalText = _a.onRenderOptionalText, imageShouldStartVisible = _a.imageShouldStartVisible;
        initialsColor = initialsColor !== undefined && initialsColor !== null ? initialsColor : this._getColorFromName(primaryText);
        var presenceElement = null;
        if (presence !== Persona_Props_1.PersonaPresence.none) {
            var userPresence = Persona_Props_1.PersonaPresence[presence], statusIcon = null;
            switch (userPresence) {
                case 'online':
                    userPresence = 'SkypeCheck';
                    break;
                case 'away':
                    userPresence = 'SkypeClock';
                    break;
                case 'dnd':
                    userPresence = 'SkypeMinus';
                    break;
                default:
                    userPresence = '';
            }
            if (userPresence) {
                statusIcon = (React.createElement(Icon_1.Icon, { className: Utilities_1.css('ms-Persona-presenceIcon', styles.presenceIcon), iconName: userPresence }));
            }
            presenceElement = React.createElement("div", { className: Utilities_1.css('ms-Persona-presence', styles.presence) }, statusIcon);
        }
        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
        var personaDetails = React.createElement("div", { className: Utilities_1.css('ms-Persona-details', styles.details) },
            this._renderElement(this.props.primaryText, Utilities_1.css('ms-Persona-primaryText', styles.primaryText), onRenderPrimaryText),
            this._renderElement(this.props.secondaryText, Utilities_1.css('ms-Persona-secondaryText', styles.secondaryText), onRenderSecondaryText),
            this._renderElement(this.props.tertiaryText, Utilities_1.css('ms-Persona-tertiaryText', styles.tertiaryText), onRenderTertiaryText),
            this._renderElement(this.props.optionalText, Utilities_1.css('ms-Persona-optionalText', styles.optionalText), onRenderOptionalText),
            this.props.children);
        return (React.createElement("div", __assign({}, divProps, { className: Utilities_1.css('ms-Persona', styles.root, className, PersonaConsts_1.PERSONA_SIZE[size], PersonaConsts_1.PERSONA_PRESENCE[presence], this.props.showSecondaryText ? styles.showSecondaryText : '') }),
            size !== Persona_Props_1.PersonaSize.tiny && (React.createElement("div", { className: Utilities_1.css('ms-Persona-imageArea', styles.imageArea) },
                !this.state.isImageLoaded &&
                    (React.createElement("div", { className: Utilities_1.css('ms-Persona-initials', styles.initials, PersonaConsts_1.PERSONA_INITIALS_COLOR[initialsColor]), "aria-hidden": 'true' }, onRenderInitials(this.props, this._onRenderInitials))),
                React.createElement(Image_1.Image, { className: Utilities_1.css('ms-Persona-image', styles.image), imageFit: Image_1.ImageFit.cover, src: imageUrl, shouldFadeIn: imageShouldFadeIn, shouldStartVisible: imageShouldStartVisible, onLoadingStateChange: this._onPhotoLoadingStateChange }))),
            presenceElement,
            (!hidePersonaDetails || (size === Persona_Props_1.PersonaSize.tiny)) && personaDetails));
    };
    Persona.prototype._renderElement = function (text, className, render) {
        return (React.createElement("div", { className: className }, render ? render(this.props) : text));
    };
    Persona.prototype._onRenderInitials = function (props) {
        var imageInitials = props.imageInitials, primaryText = props.primaryText;
        var isRTL = Utilities_1.getRTL();
        imageInitials = imageInitials || Utilities_1.getInitials(primaryText, isRTL);
        return (React.createElement("span", null, imageInitials));
    };
    Persona.prototype._getColorFromName = function (displayName) {
        var color = Persona_Props_1.PersonaInitialsColor.blue;
        if (!displayName) {
            return color;
        }
        var hashCode = 0;
        for (var iLen = displayName.length - 1; iLen >= 0; iLen--) {
            var ch = displayName.charCodeAt(iLen);
            var shift = iLen % 8;
            // tslint:disable-next-line:no-bitwise
            hashCode ^= (ch << shift) + (ch >> (8 - shift));
        }
        color = COLOR_SWATCHES_LOOKUP[hashCode % COLOR_SWATCHES_NUM_ENTRIES];
        return color;
    };
    Persona.prototype._onPhotoLoadingStateChange = function (loadState) {
        this.setState({
            isImageLoaded: loadState === Image_1.ImageLoadState.loaded
        });
    };
    return Persona;
}(Utilities_1.BaseComponent));
Persona.defaultProps = {
    primaryText: '',
    size: Persona_Props_1.PersonaSize.regular,
    presence: Persona_Props_1.PersonaPresence.none
};
__decorate([
    Utilities_1.autobind
], Persona.prototype, "_renderElement", null);
__decorate([
    Utilities_1.autobind
], Persona.prototype, "_onRenderInitials", null);
__decorate([
    Utilities_1.autobind
], Persona.prototype, "_onPhotoLoadingStateChange", null);
exports.Persona = Persona;



/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(166));
__export(__webpack_require__(24));
__export(__webpack_require__(53));



/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Utilities_1 = __webpack_require__(1);
/**
 * This adds accessibility to Dialog and Panel controls
 */
var Popup = (function (_super) {
    __extends(Popup, _super);
    function Popup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Popup.prototype.componentWillMount = function () {
        this._originalFocusedElement = Utilities_1.getDocument().activeElement;
    };
    Popup.prototype.componentDidMount = function () {
        this._events.on(this.refs.root, 'focus', this._onFocus, true);
        this._events.on(this.refs.root, 'blur', this._onBlur, true);
        if (Utilities_1.doesElementContainFocus(this.refs.root)) {
            this._containsFocus = true;
        }
    };
    Popup.prototype.componentWillUnmount = function () {
        if (this.props.shouldRestoreFocus &&
            this._originalFocusedElement &&
            this._containsFocus &&
            this._originalFocusedElement !== window) {
            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
            // to reset the focus back to the thing it thinks should have been focused.
            if (this._originalFocusedElement) {
                this._originalFocusedElement.focus();
            }
        }
    };
    Popup.prototype.render = function () {
        var _a = this.props, role = _a.role, className = _a.className, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy;
        return (React.createElement("div", __assign({ ref: 'root' }, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties), { className: className, role: role, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown }), this.props.children));
    };
    Popup.prototype._onKeyDown = function (ev) {
        switch (ev.which) {
            case Utilities_1.KeyCodes.escape:
                if (this.props.onDismiss) {
                    this.props.onDismiss(ev);
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                break;
        }
    };
    Popup.prototype._onFocus = function () {
        this._containsFocus = true;
    };
    Popup.prototype._onBlur = function () {
        this._containsFocus = false;
    };
    return Popup;
}(Utilities_1.BaseComponent));
Popup.defaultProps = {
    shouldRestoreFocus: true
};
__decorate([
    Utilities_1.autobind
], Popup.prototype, "_onKeyDown", null);
exports.Popup = Popup;



/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(168));



/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DirectionalHint_1 = __webpack_require__(5);
var Utilities_1 = __webpack_require__(1);
var RectangleEdge;
(function (RectangleEdge) {
    RectangleEdge[RectangleEdge["top"] = 0] = "top";
    RectangleEdge[RectangleEdge["bottom"] = 1] = "bottom";
    RectangleEdge[RectangleEdge["left"] = 2] = "left";
    RectangleEdge[RectangleEdge["right"] = 3] = "right";
})(RectangleEdge = exports.RectangleEdge || (exports.RectangleEdge = {}));
var SLIDE_ANIMATIONS = (_a = {},
    _a[RectangleEdge.top] = 'slideUpIn20',
    _a[RectangleEdge.bottom] = 'slideDownIn20',
    _a[RectangleEdge.left] = 'slideLeftIn20',
    _a[RectangleEdge.right] = 'slideRightIn20',
    _a);
var PositionData = (function () {
    function PositionData(calloutDirection, targetDirection, calloutPercent, targetPercent, beakPercent, isAuto) {
        this.calloutDirection = calloutDirection;
        this.targetDirection = targetDirection;
        this.calloutPercent = calloutPercent;
        this.targetPercent = targetPercent;
        this.beakPercent = beakPercent;
        this.isAuto = isAuto;
    }
    return PositionData;
}());
exports.PositionData = PositionData;
// Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
var DirectionalDictionary = (_b = {},
    _b[DirectionalHint_1.DirectionalHint.topLeftEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 0, 0, 50, false),
    _b[DirectionalHint_1.DirectionalHint.topCenter] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 50, 50, 50, false),
    _b[DirectionalHint_1.DirectionalHint.topRightEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 100, 100, 50, false),
    _b[DirectionalHint_1.DirectionalHint.topAutoEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 0, 0, 50, true),
    _b[DirectionalHint_1.DirectionalHint.bottomLeftEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 0, 0, 50, false),
    _b[DirectionalHint_1.DirectionalHint.bottomCenter] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 50, 50, 50, false),
    _b[DirectionalHint_1.DirectionalHint.bottomRightEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 100, 100, 50, false),
    _b[DirectionalHint_1.DirectionalHint.bottomAutoEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 0, 0, 50, true),
    _b[DirectionalHint_1.DirectionalHint.leftTopEdge] = new PositionData(RectangleEdge.right, RectangleEdge.left, 0, 0, 50, false),
    _b[DirectionalHint_1.DirectionalHint.leftCenter] = new PositionData(RectangleEdge.right, RectangleEdge.left, 50, 50, 50, false),
    _b[DirectionalHint_1.DirectionalHint.leftBottomEdge] = new PositionData(RectangleEdge.right, RectangleEdge.left, 100, 100, 50, false),
    _b[DirectionalHint_1.DirectionalHint.rightTopEdge] = new PositionData(RectangleEdge.left, RectangleEdge.right, 0, 0, 50, false),
    _b[DirectionalHint_1.DirectionalHint.rightCenter] = new PositionData(RectangleEdge.left, RectangleEdge.right, 50, 50, 50, false),
    _b[DirectionalHint_1.DirectionalHint.rightBottomEdge] = new PositionData(RectangleEdge.left, RectangleEdge.right, 100, 100, 50, false),
    _b);
var CoverDictionary = (_c = {},
    _c[DirectionalHint_1.DirectionalHint.topLeftEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 0, 0, 50, false),
    _c[DirectionalHint_1.DirectionalHint.topCenter] = new PositionData(RectangleEdge.top, RectangleEdge.top, 50, 50, 50, false),
    _c[DirectionalHint_1.DirectionalHint.topRightEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 100, 100, 50, false),
    _c[DirectionalHint_1.DirectionalHint.topAutoEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 0, 0, 50, true),
    _c[DirectionalHint_1.DirectionalHint.bottomLeftEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 0, 0, 50, false),
    _c[DirectionalHint_1.DirectionalHint.bottomCenter] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 50, 50, 50, false),
    _c[DirectionalHint_1.DirectionalHint.bottomRightEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 100, 100, 50, false),
    _c[DirectionalHint_1.DirectionalHint.bottomAutoEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 0, 0, 50, true),
    _c[DirectionalHint_1.DirectionalHint.leftTopEdge] = new PositionData(RectangleEdge.left, RectangleEdge.left, 0, 0, 50, false),
    _c[DirectionalHint_1.DirectionalHint.leftCenter] = new PositionData(RectangleEdge.left, RectangleEdge.left, 50, 50, 50, false),
    _c[DirectionalHint_1.DirectionalHint.leftBottomEdge] = new PositionData(RectangleEdge.left, RectangleEdge.left, 100, 100, 50, false),
    _c[DirectionalHint_1.DirectionalHint.rightTopEdge] = new PositionData(RectangleEdge.right, RectangleEdge.right, 0, 0, 50, false),
    _c[DirectionalHint_1.DirectionalHint.rightCenter] = new PositionData(RectangleEdge.right, RectangleEdge.right, 50, 50, 50, false),
    _c[DirectionalHint_1.DirectionalHint.rightBottomEdge] = new PositionData(RectangleEdge.right, RectangleEdge.right, 100, 100, 50, false),
    _c);
var OppositeEdgeDictionary = (_d = {},
    _d[RectangleEdge.top] = RectangleEdge.bottom,
    _d[RectangleEdge.bottom] = RectangleEdge.top,
    _d[RectangleEdge.right] = RectangleEdge.left,
    _d[RectangleEdge.left] = RectangleEdge.right,
    _d);
function getRelativePositions(props, hostElement, calloutElement) {
    var beakWidth = !props.isBeakVisible ? 0 : props.beakWidth;
    var borderWidth = positioningFunctions._getBorderSize(calloutElement);
    var gap = positioningFunctions._calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
    var boundingRect = props.bounds ?
        positioningFunctions._getRectangleFromIRect(props.bounds) :
        new Utilities_1.Rectangle(0, window.innerWidth - Utilities_1.getScrollbarWidth(), 0, window.innerHeight);
    var targetRect = props.target ? positioningFunctions._getTargetRect(boundingRect, props.target) : positioningFunctions._getTargetRectDEPRECATED(boundingRect, props.targetElement, props.creationEvent, props.targetPoint, props.useTargetPoint);
    var positionData = positioningFunctions._getPositionData(props.directionalHint, targetRect, boundingRect, props.coverTarget);
    var positionedCallout = positioningFunctions._positionCalloutWithinBounds(positioningFunctions._getRectangleFromHTMLElement(calloutElement), targetRect, boundingRect, positionData, gap, props.coverTarget, props.directionalHintFixed);
    var beakPositioned = positioningFunctions._positionBeak(beakWidth, positionedCallout, targetRect, borderWidth);
    var finalizedCallout = positioningFunctions._finalizeCalloutPosition(positionedCallout.calloutRectangle, hostElement);
    return {
        calloutPosition: { top: finalizedCallout.top, left: finalizedCallout.left },
        beakPosition: { top: beakPositioned.top, left: beakPositioned.left, display: 'block' },
        directionalClassName: SLIDE_ANIMATIONS[positionedCallout.targetEdge],
        submenuDirection: positionedCallout.calloutEdge === RectangleEdge.right ? DirectionalHint_1.DirectionalHint.leftBottomEdge : DirectionalHint_1.DirectionalHint.rightBottomEdge
    };
}
exports.getRelativePositions = getRelativePositions;
/**
 * Get's the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */
function getMaxHeight(target, targetEdge, gapSpace, bounds) {
    if (gapSpace === void 0) { gapSpace = 0; }
    var mouseTarget = target;
    var elementTarget = target;
    var targetRect;
    var boundingRectangle = bounds ?
        positioningFunctions._getRectangleFromIRect(bounds) :
        new Utilities_1.Rectangle(0, window.innerWidth - Utilities_1.getScrollbarWidth(), 0, window.innerHeight);
    if (mouseTarget.stopPropagation) {
        targetRect = new Utilities_1.Rectangle(mouseTarget.clientX, mouseTarget.clientX, mouseTarget.clientY, mouseTarget.clientY);
    }
    else {
        targetRect = positioningFunctions._getRectangleFromHTMLElement(elementTarget);
    }
    return positioningFunctions._getMaxHeightFromTargetRectangle(targetRect, targetEdge, gapSpace, boundingRectangle);
}
exports.getMaxHeight = getMaxHeight;
var positioningFunctions;
(function (positioningFunctions) {
    /**
     * If max height is less than zero it returns the bounds height instead.
     */
    function _getMaxHeightFromTargetRectangle(targetRectangle, targetEdge, gapSpace, bounds) {
        var maxHeight = 0;
        switch (targetEdge) {
            case DirectionalHint_1.DirectionalHint.bottomAutoEdge:
            case DirectionalHint_1.DirectionalHint.bottomCenter:
            case DirectionalHint_1.DirectionalHint.bottomLeftEdge:
            case DirectionalHint_1.DirectionalHint.bottomRightEdge:
                maxHeight = bounds.bottom - targetRectangle.bottom - gapSpace;
                break;
            case DirectionalHint_1.DirectionalHint.topAutoEdge:
            case DirectionalHint_1.DirectionalHint.topCenter:
            case DirectionalHint_1.DirectionalHint.topLeftEdge:
            case DirectionalHint_1.DirectionalHint.topRightEdge:
                maxHeight = targetRectangle.top - bounds.top - gapSpace;
                break;
            default:
                maxHeight = bounds.bottom - targetRectangle.top - gapSpace;
                break;
        }
        return maxHeight > 0 ? maxHeight : bounds.height;
    }
    positioningFunctions._getMaxHeightFromTargetRectangle = _getMaxHeightFromTargetRectangle;
    function _getTargetRect(bounds, target) {
        var targetRectangle;
        if (target.preventDefault) {
            var ev = target;
            targetRectangle = new Utilities_1.Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
        }
        else {
            targetRectangle = _getRectangleFromHTMLElement(target);
        }
        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
            for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
                var direction = outOfBounds_1[_i];
                targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
            }
        }
        return targetRectangle;
    }
    positioningFunctions._getTargetRect = _getTargetRect;
    function _getTargetRectDEPRECATED(bounds, targetElement, ev, targetPoint, isTargetPoint) {
        var targetRectangle;
        if (isTargetPoint) {
            if (targetPoint) {
                targetRectangle = new Utilities_1.Rectangle(targetPoint.x, targetPoint.x, targetPoint.y, targetPoint.y);
            }
            else {
                targetRectangle = new Utilities_1.Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
            }
        }
        else {
            if (!targetElement) {
                if (ev && ev.target) {
                    targetRectangle = _getRectangleFromHTMLElement(ev.target);
                }
                targetRectangle = new Utilities_1.Rectangle();
            }
            else {
                targetRectangle = _getRectangleFromHTMLElement(targetElement);
            }
        }
        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
            for (var _i = 0, outOfBounds_2 = outOfBounds; _i < outOfBounds_2.length; _i++) {
                var direction = outOfBounds_2[_i];
                targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
            }
        }
        return targetRectangle;
    }
    positioningFunctions._getTargetRectDEPRECATED = _getTargetRectDEPRECATED;
    function _getRectangleFromHTMLElement(element) {
        var clientRect = element.getBoundingClientRect();
        return new Utilities_1.Rectangle(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
    }
    positioningFunctions._getRectangleFromHTMLElement = _getRectangleFromHTMLElement;
    function _positionCalloutWithinBounds(calloutRectangle, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget, directionalHintFixed) {
        if (gap === void 0) { gap = 0; }
        var estimatedRectangle = _moveRectangleToAnchorRectangle(calloutRectangle, directionalInfo.calloutDirection, directionalInfo.calloutPercent, targetRectangle, directionalInfo.targetDirection, directionalInfo.targetPercent, gap);
        if (_isRectangleWithinBounds(estimatedRectangle, boundingRectangle)) {
            return { calloutRectangle: estimatedRectangle, calloutEdge: directionalInfo.calloutDirection, targetEdge: directionalInfo.targetDirection, alignPercent: directionalInfo.calloutPercent, beakPercent: directionalInfo.beakPercent };
        }
        else {
            return _getBestRectangleFitWithinBounds(estimatedRectangle, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget, directionalHintFixed);
        }
    }
    positioningFunctions._positionCalloutWithinBounds = _positionCalloutWithinBounds;
    function _getBestRectangleFitWithinBounds(estimatedPosition, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget, directionalHintFixed) {
        var callout = {
            calloutRectangle: estimatedPosition,
            calloutEdge: directionalInfo.calloutDirection,
            targetEdge: directionalInfo.targetDirection,
            alignPercent: directionalInfo.calloutPercent,
            beakPercent: directionalInfo.beakPercent
        };
        // If it can't possibly fit within the bounds just put it into it's initial position.
        if (!_canRectangleFitWithinBounds(estimatedPosition, boundingRectangle)) {
            return callout;
        }
        if (!coverTarget && !directionalHintFixed) {
            callout = _flipRectangleToFit(callout, targetRectangle, directionalInfo.targetPercent, boundingRectangle, gap);
        }
        var outOfBounds = _getOutOfBoundsEdges(callout.calloutRectangle, boundingRectangle);
        for (var _i = 0, outOfBounds_3 = outOfBounds; _i < outOfBounds_3.length; _i++) {
            var direction = outOfBounds_3[_i];
            callout.calloutRectangle = _alignEdgeToCoordinate(callout.calloutRectangle, boundingRectangle[RectangleEdge[direction]], direction);
            var adjustedPercent = _recalculateMatchingPercents(callout.calloutRectangle, callout.targetEdge, targetRectangle, callout.targetEdge, directionalInfo.targetPercent);
            callout.alignPercent = adjustedPercent;
        }
        return callout;
    }
    positioningFunctions._getBestRectangleFitWithinBounds = _getBestRectangleFitWithinBounds;
    function _positionBeak(beakWidth, callout, targetRectangle, border) {
        var calloutRect = new Utilities_1.Rectangle(0, callout.calloutRectangle.width - border * 2, 0, callout.calloutRectangle.height - border * 2);
        var beakRectangle = new Utilities_1.Rectangle(0, beakWidth, 0, beakWidth);
        var recalculatedPercent = _recalculateMatchingPercents(callout.calloutRectangle, callout.calloutEdge, targetRectangle, callout.targetEdge, callout.beakPercent);
        var estimatedTargetPoint = _getPointOnEdgeFromPercent(calloutRect, callout.calloutEdge, recalculatedPercent);
        return _finalizeBeakPosition(beakRectangle, callout, estimatedTargetPoint, border);
    }
    positioningFunctions._positionBeak = _positionBeak;
    function _finalizeBeakPosition(beakRectangle, callout, estimatedTargetPoint, border) {
        var beakPixelSize = _calculateActualBeakWidthInPixels(beakRectangle.width) / 2;
        var innerRect = null;
        var beakPoint = { x: beakRectangle.width / 2, y: beakRectangle.width / 2 };
        if (callout.calloutEdge === RectangleEdge.bottom || callout.calloutEdge === RectangleEdge.top) {
            innerRect = new Utilities_1.Rectangle(beakPixelSize, callout.calloutRectangle.width - beakPixelSize - border * 2, 0, callout.calloutRectangle.height - border * 2);
        }
        else {
            innerRect = new Utilities_1.Rectangle(0, callout.calloutRectangle.width - border * 2, beakPixelSize, callout.calloutRectangle.height - beakPixelSize - border * 2);
        }
        var finalPoint = _getClosestPointOnEdgeToPoint(innerRect, callout.calloutEdge, estimatedTargetPoint);
        return _movePointOnRectangleToPoint(beakRectangle, beakPoint, finalPoint);
    }
    positioningFunctions._finalizeBeakPosition = _finalizeBeakPosition;
    function _getRectangleFromIRect(rect) {
        return new Utilities_1.Rectangle(rect.left, rect.right, rect.top, rect.bottom);
    }
    positioningFunctions._getRectangleFromIRect = _getRectangleFromIRect;
    function _finalizeCalloutPosition(calloutRectangle, hostElement) {
        var hostRect = _getRectangleFromHTMLElement(hostElement);
        var topPosition = calloutRectangle.top - hostRect.top;
        var leftPosition = calloutRectangle.left - hostRect.left;
        return new Utilities_1.Rectangle(leftPosition, leftPosition + calloutRectangle.width, topPosition, topPosition + calloutRectangle.height);
    }
    positioningFunctions._finalizeCalloutPosition = _finalizeCalloutPosition;
    /**
     * Finds the percent on the recalculateRect that matches the percent on the target rect based on position.
     */
    function _recalculateMatchingPercents(recalculateRect, rectangleEdge, targetRect, targetEdge, targetPercent) {
        var targetPoint = _getPointOnEdgeFromPercent(targetRect, targetEdge, targetPercent);
        var adjustedPoint = _getClosestPointOnEdgeToPoint(recalculateRect, rectangleEdge, targetPoint);
        var adjustedPercent = _getPercentOfEdgeFromPoint(recalculateRect, rectangleEdge, adjustedPoint);
        if (adjustedPercent > 100) {
            adjustedPercent = 100;
        }
        else if (adjustedPercent < 0) {
            adjustedPercent = 0;
        }
        return adjustedPercent;
    }
    positioningFunctions._recalculateMatchingPercents = _recalculateMatchingPercents;
    function _canRectangleFitWithinBounds(rect, boundingRect) {
        if (rect.width > boundingRect.width || rect.height > boundingRect.height) {
            return false;
        }
        return true;
    }
    positioningFunctions._canRectangleFitWithinBounds = _canRectangleFitWithinBounds;
    function _isRectangleWithinBounds(rect, boundingRect) {
        if (rect.top < boundingRect.top) {
            return false;
        }
        if (rect.bottom > boundingRect.bottom) {
            return false;
        }
        if (rect.left < boundingRect.left) {
            return false;
        }
        if (rect.right > boundingRect.right) {
            return false;
        }
        return true;
    }
    positioningFunctions._isRectangleWithinBounds = _isRectangleWithinBounds;
    /**
     * Gets all of the edges of a rectangle that are outside of the given bounds.
     * If there are no out of bounds edges it returns an empty array.
     */
    function _getOutOfBoundsEdges(rect, boundingRect) {
        var outOfBounds = new Array();
        if (rect.top < boundingRect.top) {
            outOfBounds.push(RectangleEdge.top);
        }
        if (rect.bottom > boundingRect.bottom) {
            outOfBounds.push(RectangleEdge.bottom);
        }
        if (rect.left < boundingRect.left) {
            outOfBounds.push(RectangleEdge.left);
        }
        if (rect.right > boundingRect.right) {
            outOfBounds.push(RectangleEdge.right);
        }
        return outOfBounds;
    }
    positioningFunctions._getOutOfBoundsEdges = _getOutOfBoundsEdges;
    /**
     * Returns a point on a edge that is x% of the way down it.
     */
    function _getPointOnEdgeFromPercent(rect, direction, percentOfRect) {
        var startPoint;
        var endPoint;
        switch (direction) {
            case RectangleEdge.top:
                startPoint = { x: rect.left, y: rect.top };
                endPoint = { x: rect.right, y: rect.top };
                break;
            case RectangleEdge.left:
                startPoint = { x: rect.left, y: rect.top };
                endPoint = { x: rect.left, y: rect.bottom };
                break;
            case RectangleEdge.right:
                startPoint = { x: rect.right, y: rect.top };
                endPoint = { x: rect.right, y: rect.bottom };
                break;
            case RectangleEdge.bottom:
                startPoint = { x: rect.left, y: rect.bottom };
                endPoint = { x: rect.right, y: rect.bottom };
                break;
            default:
                startPoint = { x: 0, y: 0 };
                endPoint = { x: 0, y: 0 };
                break;
        }
        return _calculatePointPercentAlongLine(startPoint, endPoint, percentOfRect);
    }
    positioningFunctions._getPointOnEdgeFromPercent = _getPointOnEdgeFromPercent;
    /**
     * Gets the percent down an edge that a point appears.
     */
    function _getPercentOfEdgeFromPoint(rect, direction, valueOnEdge) {
        switch (direction) {
            case RectangleEdge.top:
            case RectangleEdge.bottom:
                return rect.width !== 0 ? (valueOnEdge.x - rect.left) / rect.width * 100 : 100;
            case RectangleEdge.left:
            case RectangleEdge.right:
                return rect.height !== 0 ? (valueOnEdge.y - rect.top) / rect.height * 100 : 100;
        }
    }
    positioningFunctions._getPercentOfEdgeFromPoint = _getPercentOfEdgeFromPoint;
    /**
     * Percent is based on distance from left to right or up to down. 0% would be left most, 100% would be right most.
     */
    function _calculatePointPercentAlongLine(startPoint, endPoint, percent) {
        var x = startPoint.x + ((endPoint.x - startPoint.x) * percent / 100);
        var y = startPoint.y + ((endPoint.y - startPoint.y) * percent / 100);
        return { x: x, y: y };
    }
    positioningFunctions._calculatePointPercentAlongLine = _calculatePointPercentAlongLine;
    function _moveTopLeftOfRectangleToPoint(rect, destination) {
        return new Utilities_1.Rectangle(destination.x, destination.x + rect.width, destination.y, destination.y + rect.height);
    }
    positioningFunctions._moveTopLeftOfRectangleToPoint = _moveTopLeftOfRectangleToPoint;
    /**
     * Aligns the given edge to the target coordinate.
     */
    function _alignEdgeToCoordinate(rect, coordinate, direction) {
        switch (direction) {
            case RectangleEdge.top:
                return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left, y: coordinate });
            case RectangleEdge.bottom:
                return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left, y: coordinate - rect.height });
            case RectangleEdge.left:
                return _moveTopLeftOfRectangleToPoint(rect, { x: coordinate, y: rect.top });
            case RectangleEdge.right:
                return _moveTopLeftOfRectangleToPoint(rect, { x: coordinate - rect.width, y: rect.top });
        }
        return new Utilities_1.Rectangle();
    }
    positioningFunctions._alignEdgeToCoordinate = _alignEdgeToCoordinate;
    /**
     * Moves a point on a given rectangle to the target point. Does not change the rectangles orientation.
     */
    function _movePointOnRectangleToPoint(rect, rectanglePoint, targetPoint) {
        var leftCornerXDifference = rectanglePoint.x - rect.left;
        var leftCornerYDifference = rectanglePoint.y - rect.top;
        return _moveTopLeftOfRectangleToPoint(rect, { x: targetPoint.x - leftCornerXDifference, y: targetPoint.y - leftCornerYDifference });
    }
    positioningFunctions._movePointOnRectangleToPoint = _movePointOnRectangleToPoint;
    /**
     * Moves the given rectangle a certain number of pixels in the given direction;
     */
    function _moveRectangleInDirection(rect, moveDistance, direction) {
        var xModifier = 0;
        var yModifier = 0;
        switch (direction) {
            case RectangleEdge.top:
                yModifier = moveDistance * -1;
                break;
            case RectangleEdge.left:
                xModifier = moveDistance * -1;
                break;
            case RectangleEdge.right:
                xModifier = moveDistance;
                break;
            case RectangleEdge.bottom:
                yModifier = moveDistance;
                break;
        }
        return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left + xModifier, y: rect.top + yModifier });
    }
    positioningFunctions._moveRectangleInDirection = _moveRectangleInDirection;
    /**
     * Moves the given rectangle to an anchor rectangle.
     */
    function _moveRectangleToAnchorRectangle(rect, rectSide, rectPercent, anchorRect, anchorSide, anchorPercent, gap) {
        if (gap === void 0) { gap = 0; }
        var rectTargetPoint = _getPointOnEdgeFromPercent(rect, rectSide, rectPercent);
        var anchorTargetPoint = _getPointOnEdgeFromPercent(anchorRect, anchorSide, anchorPercent);
        var positionedRect = _movePointOnRectangleToPoint(rect, rectTargetPoint, anchorTargetPoint);
        return _moveRectangleInDirection(positionedRect, gap, anchorSide);
    }
    positioningFunctions._moveRectangleToAnchorRectangle = _moveRectangleToAnchorRectangle;
    /**
     * Gets the closet point on an edge to the given point.
     */
    function _getClosestPointOnEdgeToPoint(rect, edge, point) {
        switch (edge) {
            case RectangleEdge.top:
            case RectangleEdge.bottom:
                var x = void 0;
                if (point.x > rect.right) {
                    x = rect.right;
                }
                else if (point.x < rect.left) {
                    x = rect.left;
                }
                else {
                    x = point.x;
                }
                return { x: x, y: rect[RectangleEdge[edge]] };
            case RectangleEdge.left:
            case RectangleEdge.right:
                var y = void 0;
                if (point.y > rect.bottom) {
                    y = rect.bottom;
                }
                else if (point.y < rect.top) {
                    y = rect.top;
                }
                else {
                    y = point.y;
                }
                return { x: rect[RectangleEdge[edge]], y: y };
        }
    }
    positioningFunctions._getClosestPointOnEdgeToPoint = _getClosestPointOnEdgeToPoint;
    // Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
    // We still want to position the beak based on it's midpoint which does not change. It will
    // be at (beakwidth / 2, beakwidth / 2)
    function _calculateActualBeakWidthInPixels(beakWidth) {
        return Math.sqrt(beakWidth * beakWidth * 2);
    }
    positioningFunctions._calculateActualBeakWidthInPixels = _calculateActualBeakWidthInPixels;
    function _getBorderSize(element) {
        var styles = getComputedStyle(element, null);
        var topBorder = parseFloat(styles.borderTopWidth);
        var bottomBorder = parseFloat(styles.borderBottomWidth);
        var leftBorder = parseFloat(styles.borderLeftWidth);
        var rightBorder = parseFloat(styles.borderRightWidth);
        // If any of the borders are NaN default to 0
        if (isNaN(topBorder) || isNaN(bottomBorder) || isNaN(leftBorder) || isNaN(rightBorder)) {
            return 0;
        }
        // If all of the borders are the same size, any value;
        if (topBorder === bottomBorder && bottomBorder === leftBorder && leftBorder === rightBorder) {
            return topBorder;
        }
        // If the borders do not agree, return 0
        return 0;
    }
    positioningFunctions._getBorderSize = _getBorderSize;
    function _getPositionData(direction, target, boundingRect, coverTarget) {
        var directionalInfo = coverTarget ? CoverDictionary[direction] : DirectionalDictionary[direction];
        if (directionalInfo.isAuto) {
            var center = _getPointOnEdgeFromPercent(target, directionalInfo.targetDirection, 50);
            if (center.x <= boundingRect.width / 2) {
                directionalInfo.calloutPercent = 0;
                directionalInfo.targetPercent = 0;
            }
            else {
                directionalInfo.calloutPercent = 100;
                directionalInfo.targetPercent = 100;
            }
        }
        return directionalInfo;
    }
    positioningFunctions._getPositionData = _getPositionData;
    function _flipRectangleToFit(callout, targetRect, targetPercent, boundingRect, gap) {
        var directions = [RectangleEdge.left, RectangleEdge.right, RectangleEdge.top, RectangleEdge.bottom];
        var currentEdge = callout.targetEdge;
        // Make a copy to presever the original positioning.
        var positionedCallout = Utilities_1.assign({}, callout);
        // Keep switching sides until one is found with enough space. If all sides don't fit then return the unmodified callout.
        for (var i = 0; i < 4; i++) {
            var outOfBounds = _getOutOfBoundsEdges(positionedCallout.calloutRectangle, boundingRect);
            var index = outOfBounds.indexOf(currentEdge);
            var oppositeEdge = OppositeEdgeDictionary[currentEdge];
            if (index > -1) {
                directions.splice(directions.indexOf(currentEdge), 1);
                currentEdge = directions.indexOf(oppositeEdge) > -1 ? oppositeEdge : directions.slice(-1)[0];
                positionedCallout.calloutEdge = OppositeEdgeDictionary[currentEdge];
                positionedCallout.targetEdge = currentEdge;
                positionedCallout.calloutRectangle = _moveRectangleToAnchorRectangle(positionedCallout.calloutRectangle, positionedCallout.calloutEdge, positionedCallout.alignPercent, targetRect, positionedCallout.targetEdge, targetPercent, gap);
            }
            else {
                return positionedCallout;
            }
        }
        return callout;
    }
    positioningFunctions._flipRectangleToFit = _flipRectangleToFit;
})(positioningFunctions = exports.positioningFunctions || (exports.positioningFunctions = {}));
var _a, _b, _c, _d;



/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(20);
  var warning = __webpack_require__(13);
  var ReactPropTypesSecret = __webpack_require__(25);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(19);
var invariant = __webpack_require__(20);
var ReactPropTypesSecret = __webpack_require__(25);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(19);
var invariant = __webpack_require__(20);
var warning = __webpack_require__(13);

var ReactPropTypesSecret = __webpack_require__(25);
var checkPropTypes = __webpack_require__(171);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// this will be an object of properties that map to their corresponding rtl property (their doppelganger)
var propertiesToConvert = arrayToObject([['paddingLeft', 'paddingRight'], ['marginLeft', 'marginRight'], ['left', 'right'], ['borderLeft', 'borderRight'], ['borderLeftColor', 'borderRightColor'], ['borderLeftStyle', 'borderRightStyle'], ['borderTopLeftRadius', 'borderTopRightRadius'], ['borderBottomLeftRadius', 'borderBottomRightRadius']]);

// this is the same as the propertiesToConvert except for values
var valuesToConvert = arrayToObject([['ltr', 'rtl'], ['left', 'right'], ['w-resize', 'e-resize'], ['sw-resize', 'se-resize'], ['nw-resize', 'ne-resize']]);

// some values require a little fudging, that fudging goes here.
var propertyValueConverters = {
  padding: function padding(value) {
    if (isNumber(value)) {
      return value;
    }
    return handleQuartetValues(value);
  },
  textShadow: function textShadow(value) {
    // intentionally leaving off the `g` flag here because we only want to change the first number (which is the offset-x)
    return value.replace(/(-*)([.|\d]+)/, function (match, negative, number) {
      if (number === '0') {
        return match;
      }
      var doubleNegative = negative === '' ? '-' : '';
      return '' + doubleNegative + number;
    });
  },
  borderColor: function borderColor(value) {
    return handleQuartetValues(value);
  },
  borderRadius: function borderRadius(value) {
    if (isNumber(value)) {
      return value;
    }
    if (includes(value, '/')) {
      var _value$split = value.split('/'),
          _value$split2 = _slicedToArray(_value$split, 2),
          radius1 = _value$split2[0],
          radius2 = _value$split2[1];

      var convertedRadius1 = propertyValueConverters.borderRadius(radius1.trim());
      var convertedRadius2 = propertyValueConverters.borderRadius(radius2.trim());
      return convertedRadius1 + ' / ' + convertedRadius2;
    }
    var splitValues = getValuesAsList(value);
    switch (splitValues.length) {
      case 2:
        {
          return splitValues.reverse().join(' ');
        }
      case 4:
        {
          var _splitValues = _slicedToArray(splitValues, 4),
              topLeft = _splitValues[0],
              topRight = _splitValues[1],
              bottomRight = _splitValues[2],
              bottomLeft = _splitValues[3];

          return [topRight, topLeft, bottomLeft, bottomRight].join(' ');
        }
      default:
        {
          return value;
        }
    }
  },
  background: function background(value) {
    // Yeah, this is in need of a refactor 🙃...
    // but this property is a tough cookie 🍪
    // get the backgroundPosition out of the string by removing everything that couldn't be the backgroundPosition value
    var backgroundPositionValue = value.replace(/(url\(.*?\))|(rgba?\(.*?\))|(hsl\(.*?\))|(#[a-fA-F0-9]+)|((^| )(\D)+( |$))/g, '').trim();
    // replace that backgroundPosition value with the converted version
    value = value.replace(backgroundPositionValue, propertyValueConverters.backgroundPosition(backgroundPositionValue));
    // do the backgroundImage value replacing on the whole value (because why not?)
    return propertyValueConverters.backgroundImage(value);
  },
  backgroundImage: function backgroundImage(value) {
    if (!includes(value, 'url(')) {
      return value;
    }
    // sorry for the regex 😞, but basically this replaces _every_ instance of `ltr`, `rtl`, `right`, and `left` with
    // the corresponding opposite. A situation we're accepting here:
    // url('/left/right/rtl/ltr.png') will be changed to url('/right/left/ltr/rtl.png')
    // Definite trade-offs here, but I think it's a good call.
    return value.replace(/(^|\W|_)((ltr)|(rtl)|(left)|(right))(\W|_|$)/g, function (match, g1, group2) {
      return match.replace(group2, valuesToConvert[group2]);
    });
  },
  backgroundPosition: function backgroundPosition(value) {
    return value
    // intentionally only grabbing the first instance of this because that represents `left`
    .replace(/^((-|\d|\.)+%)/, function (match, group) {
      return calculateNewBackgroundPosition(group);
    }).replace(/(left)|(right)/, function (match) {
      return valuesToConvert[match];
    });
  },
  backgroundPositionX: function backgroundPositionX(value) {
    if (isNumber(value)) {
      return value;
    }
    return propertyValueConverters.backgroundPosition(value);
  }
};
propertyValueConverters.margin = propertyValueConverters.padding;
propertyValueConverters.borderWidth = propertyValueConverters.padding;
propertyValueConverters.boxShadow = propertyValueConverters.textShadow;
propertyValueConverters.webkitBoxShadow = propertyValueConverters.textShadow;
propertyValueConverters.mozBoxShadow = propertyValueConverters.textShadow;
propertyValueConverters.borderStyle = propertyValueConverters.borderColor;

// here's our main export! 👋
exports.default = convert;

/**
 * converts properties and values in the CSS in JS object to their corresponding RTL values
 * @param {Object} object the CSS in JS object
 * @return {Object} the RTL converted object
 */

function convert(object) {
  return Object.keys(object).reduce(function (newObj, originalKey) {
    var originalValue = object[originalKey];
    if (isString(originalValue)) {
      // you're welcome to later code 😺
      originalValue = originalValue.trim();
    }

    var _convertProperty = convertProperty(originalKey, originalValue),
        key = _convertProperty.key,
        value = _convertProperty.value;

    newObj[key] = value;
    return newObj;
  }, {});
}

/**
 * Converts a property and its value to the corresponding RTL key and value
 * @param {String} originalKey the original property key
 * @param {Number|String|Object} originalValue the original css property value
 * @return {Object} the new {key, value} pair
 */
function convertProperty(originalKey, originalValue) {
  var isNoFlip = /\/\*\s?@noflip\s?\*\//.test(originalValue);
  var key = isNoFlip ? originalKey : getPropertyDoppelganger(originalKey);
  var value = isNoFlip ? originalValue : getValueDoppelganger(key, originalValue);
  return { key: key, value: value };
}

/**
 * This gets the RTL version of the given property if it has a corresponding RTL property
 * @param {String} property the name of the property
 * @return {String} the name of the RTL property
 */
function getPropertyDoppelganger(property) {
  return propertiesToConvert[property] || property;
}

/**
 * This converts the given value to the RTL version of that value based on the key
 * @param {String} key this is the key (note: this should be the RTL version of the originalKey)
 * @param {String|Number|Object} originalValue the original css property value. If it's an object, then we'll convert that as well
 * @return {String|Number|Object} the converted value
 */
function getValueDoppelganger(key, originalValue) {
  /* eslint complexity:[2, 7] */ // let's try to keep the complexity down... If we have to do this much more, let's break this up
  if (isObject(originalValue)) {
    return convert(originalValue); // recurssion 🌀
  }
  var isNum = isNumber(originalValue);
  var importantlessValue = isNum ? originalValue : originalValue.replace(/ !important.*?$/, '');
  var isImportant = !isNum && importantlessValue.length !== originalValue.length;
  var valueConverter = propertyValueConverters[key];
  var newValue = void 0;
  if (valueConverter) {
    newValue = valueConverter(importantlessValue);
  } else {
    newValue = valuesToConvert[importantlessValue] || importantlessValue;
  }
  if (isImportant) {
    return newValue + ' !important';
  }
  return newValue;
}

/**
 * This takes a list of CSS values and converts it to an array
 * @param {String} value - something like `1px`, `1px 2em`, or `3pt rgb(150, 230, 550) 40px calc(100% - 5px)`
 * @return {Array} the split values (for example: `['3pt', 'rgb(150, 230, 550)', '40px', 'calc(100% - 5px)']`)
 */
function getValuesAsList(value) {
  return value.replace(/ +/g, ' ') // remove all extraneous spaces
  .split(' ').map(function (i) {
    return i.trim();
  }) // get rid of extra space before/after each item
  .filter(Boolean) // get rid of empty strings
  // join items which are within parenthese
  // luckily `calc (100% - 5px)` is invalid syntax and it must be `calc(100% - 5px)`, otherwise this would be even more complex
  .reduce(function (_ref, item) {
    var list = _ref.list,
        state = _ref.state;

    var openParansCount = (item.match(/\(/g) || []).length;
    var closedParansCount = (item.match(/\)/g) || []).length;
    if (state.parensDepth > 0) {
      list[list.length - 1] = list[list.length - 1] + ' ' + item;
    } else {
      list.push(item);
    }
    state.parensDepth += openParansCount - closedParansCount;
    return { list: list, state: state };
  }, { list: [], state: { parensDepth: 0 } }).list;
}

/**
 * This is intended for properties that are `top right bottom left` and will switch them to `top left bottom right`
 * @param {String} value - `1px 2px 3px 4px` for example, but also handles cases where there are too few/too many and
 * simply returns the value in those cases (which is the correct behavior)
 * @return {String} the result - `1px 4px 3px 2px` for example.
 */
function handleQuartetValues(value) {
  var splitValues = getValuesAsList(value);
  if (splitValues.length <= 3 || splitValues.length > 4) {
    return value;
  }

  var _splitValues2 = _slicedToArray(splitValues, 4),
      top = _splitValues2[0],
      right = _splitValues2[1],
      bottom = _splitValues2[2],
      left = _splitValues2[3];

  return [top, left, bottom, right].join(' ');
}

/**
 * Takes a percentage for background position and inverts it.
 * This was copied and modified from CSSJanus:
 * https://github.com/cssjanus/cssjanus/blob/4245f834365f6cfb0239191a151432fb85abab23/src/cssjanus.js#L152-L175
 * @param {String} value - the original value (for example 77%)
 * @return {String} the result (for example 23%)
 */
function calculateNewBackgroundPosition(value) {
  var idx = value.indexOf('.');
  if (idx === -1) {
    value = 100 - parseFloat(value) + '%';
  } else {
    // Two off, one for the "%" at the end, one for the dot itself
    var len = value.length - idx - 2;
    value = 100 - parseFloat(value);
    value = value.toFixed(len) + '%';
  }
  return value;
}

/**
 * Takes an array of [keyValue1, keyValue2] pairs and creates an object of {keyValue1: keyValue2, keyValue2: keyValue1}
 * @param {Array} array the array of pairs
 * @return {Object} the {key, value} pair object
 */
function arrayToObject(array) {
  return array.reduce(function (obj, _ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        prop1 = _ref3[0],
        prop2 = _ref3[1];

    obj[prop1] = prop2;
    obj[prop2] = prop1;
    return obj;
  }, {});
}

function isNumber(val) {
  return typeof val === 'number';
}

function isObject(val) {
  return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

function isString(val) {
  return typeof val === 'string';
}

function includes(inclusive, inclusee) {
  return inclusive.indexOf(inclusee) !== -1;
}

/***/ }),
/* 175 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
module.exports = __webpack_require__(57);


/***/ })
/******/ ]);
//# sourceMappingURL=addin-bundle.js.map