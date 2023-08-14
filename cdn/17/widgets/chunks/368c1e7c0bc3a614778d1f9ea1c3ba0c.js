"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-avatar_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-avatar.entry.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-avatar.entry.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_avatar": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils-ddd03fe1.js */ "./node_modules/@esri/calcite-components/dist/esm/utils-ddd03fe1.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */






/**
 * Convert a string to a valid hex by hashing its contents
 * and using the hash as a seed for three distinct color values
 *
 * @param str
 */
function stringToHex(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let hex = "#";
  for (let j = 0; j < 3; j++) {
    const value = (hash >> (j * 8)) & 0xff;
    hex += ("00" + value.toString(16)).substr(-2);
  }
  return hex;
}
/**
 * Find the hue of a color given the separate RGB color channels
 *
 * @param rgb
 */
function rgbToHue(rgb) {
  let { r, g, b } = rgb;
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  if (max === min) {
    return 0;
  }
  let hue = (max + min) / 2;
  switch (max) {
    case r:
      hue = (g - b) / delta + (g < b ? 6 : 0);
      break;
    case g:
      hue = (b - r) / delta + 2;
      break;
    case b:
      hue = (r - g) / delta + 4;
      break;
  }
  return Math.round(hue * 60);
}
/**
 * For a hex color, find the hue
 *
 * @param hex {string} - form of "#------"
 */
function hexToHue(hex) {
  return rgbToHue((0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.h)(hex));
}

const avatarCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:inline-block;overflow:hidden;border-radius:50%}:host([scale=s]){block-size:1.5rem;inline-size:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){block-size:2rem;inline-size:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){block-size:2.75rem;inline-size:2.75rem;font-size:var(--calcite-font-size-0)}.icon{display:flex}.background{display:flex;block-size:100%;inline-size:100%;align-items:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-2)}.thumbnail{block-size:100%;inline-size:100%;border-radius:50%}";

const Avatar = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.scale = "m";
    this.thumbnail = undefined;
    this.fullName = undefined;
    this.username = undefined;
    this.userId = undefined;
    this.label = undefined;
    this.thumbnailFailedToLoad = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    return this.determineContent();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  determineContent() {
    if (this.thumbnail && !this.thumbnailFailedToLoad) {
      return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { alt: this.label || "", class: "thumbnail", onError: () => (this.thumbnailFailedToLoad = true), src: this.thumbnail }));
    }
    const initials = this.generateInitials();
    const backgroundColor = this.generateFillColor();
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.label || this.fullName, class: "background", role: "figure", style: { backgroundColor } }, initials ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: "initials" }, initials)) : ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: "icon", icon: "user", scale: this.scale }))));
  }
  /**
   * Generate a valid background color that is consistent and unique to this user
   */
  generateFillColor() {
    const { userId, username, fullName, el } = this;
    const theme = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.h)(el);
    const id = userId && `#${userId.substr(userId.length - 6)}`;
    const name = username || fullName || "";
    const hex = id && (0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.i)(id) ? id : stringToHex(name);
    // if there is not unique information, or an invalid hex is produced, return a default
    if ((!userId && !name) || !(0,_utils_ddd03fe1_js__WEBPACK_IMPORTED_MODULE_2__.i)(hex)) {
      return `var(--calcite-ui-foreground-2)`;
    }
    const hue = hexToHue(hex);
    const l = theme === "dark" ? 20 : 90;
    return `hsl(${hue}, 60%, ${l}%)`;
  }
  /**
   * Use fullname or username to generate initials
   */
  generateInitials() {
    const { fullName, username } = this;
    if (fullName) {
      return fullName
        .trim()
        .split(" ")
        .map((name) => name.substring(0, 1))
        .join("");
    }
    else if (username) {
      return username.substring(0, 2);
    }
    return false;
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
Avatar.style = avatarCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/utils-ddd03fe1.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/utils-ddd03fe1.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CSSColorMode),
/* harmony export */   "a": () => (/* binding */ hexify),
/* harmony export */   "b": () => (/* binding */ alphaToOpacity),
/* harmony export */   "c": () => (/* binding */ alphaCompatible),
/* harmony export */   "d": () => (/* binding */ colorEqual),
/* harmony export */   "e": () => (/* binding */ normalizeAlpha),
/* harmony export */   "f": () => (/* binding */ toAlphaMode),
/* harmony export */   "g": () => (/* binding */ normalizeColor),
/* harmony export */   "h": () => (/* binding */ hexToRGB),
/* harmony export */   "i": () => (/* binding */ isValidHex),
/* harmony export */   "j": () => (/* binding */ isLonghandHex),
/* harmony export */   "k": () => (/* binding */ hexChar),
/* harmony export */   "n": () => (/* binding */ normalizeHex),
/* harmony export */   "o": () => (/* binding */ opacityToAlpha),
/* harmony export */   "p": () => (/* binding */ parseMode),
/* harmony export */   "r": () => (/* binding */ rgbToHex),
/* harmony export */   "t": () => (/* binding */ toNonAlphaMode)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
const hexChar = /^[0-9A-F]$/i;
const shorthandHex = /^#[0-9A-F]{3}$/i;
const longhandHex = /^#[0-9A-F]{6}$/i;
const shorthandHexWithAlpha = /^#[0-9A-F]{4}$/i;
const longhandHexWithAlpha = /^#[0-9A-F]{8}$/i;
const alphaToOpacity = (alpha) => Number((alpha * 100).toFixed());
const opacityToAlpha = (opacity) => Number((opacity / 100).toFixed(2));
function isValidHex(hex, hasAlpha = false) {
  return isShorthandHex(hex, hasAlpha) || isLonghandHex(hex, hasAlpha);
}
function evaluateHex(hex, length, pattern) {
  if (!hex) {
    return false;
  }
  return hex.length === length && pattern.test(hex);
}
function isShorthandHex(hex, hasAlpha = false) {
  const hexLength = hasAlpha ? 5 : 4;
  const hexPattern = hasAlpha ? shorthandHexWithAlpha : shorthandHex;
  return evaluateHex(hex, hexLength, hexPattern);
}
function isLonghandHex(hex, hasAlpha = false) {
  const hexLength = hasAlpha ? 9 : 7;
  const hexPattern = hasAlpha ? longhandHexWithAlpha : longhandHex;
  return evaluateHex(hex, hexLength, hexPattern);
}
function normalizeHex(hex, hasAlpha = false, convertFromHexToHexa = false) {
  hex = hex.toLowerCase();
  if (!hex.startsWith("#")) {
    hex = `#${hex}`;
  }
  if (isShorthandHex(hex, hasAlpha)) {
    return rgbToHex(hexToRGB(hex, hasAlpha));
  }
  if (hasAlpha && convertFromHexToHexa && isValidHex(hex, false /* we only care about RGB hex for conversion */)) {
    const isShorthand = isShorthandHex(hex, false);
    return rgbToHex(hexToRGB(`${hex}${isShorthand ? "f" : "ff"}`, true));
  }
  return hex;
}
function hexify(color, hasAlpha = false) {
  return hasAlpha ? color.hexa() : color.hex();
}
function rgbToHex(color) {
  const { r, g, b } = color;
  const rChars = numToHex(r);
  const gChars = numToHex(g);
  const bChars = numToHex(b);
  const alphaChars = "a" in color ? numToHex(color.a * 255) : "";
  return `#${rChars}${gChars}${bChars}${alphaChars}`.toLowerCase();
}
function numToHex(num) {
  return num.toString(16).padStart(2, "0");
}
function normalizeAlpha(colorObject) {
  const normalized = { ...colorObject, a: colorObject.alpha ?? 1 /* Color() will omit alpha if 1 */ };
  delete normalized.alpha;
  return normalized;
}
function normalizeColor(alphaColorObject) {
  const normalized = { ...alphaColorObject, alpha: alphaColorObject.a ?? 1 };
  delete normalized.a;
  return normalized;
}
function hexToRGB(hex, hasAlpha = false) {
  if (!isValidHex(hex, hasAlpha)) {
    return null;
  }
  hex = hex.replace("#", "");
  let r, g, b, a;
  const isShorthand = hex.length === 3 || hex.length === 4;
  if (isShorthand) {
    const [first, second, third, fourth] = hex.split("");
    r = parseInt(`${first}${first}`, 16);
    g = parseInt(`${second}${second}`, 16);
    b = parseInt(`${third}${third}`, 16);
    a = parseInt(`${fourth}${fourth}`, 16) / 255;
  }
  else {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
    a = parseInt(hex.slice(6, 8), 16) / 255;
  }
  return isNaN(a) ? { r, g, b } : { r, g, b, a };
}
// these utils allow users to pass enum values as strings without having to access the enum
// based on the approach suggested by https://github.com/microsoft/TypeScript/issues/17690#issuecomment-321365759,
const enumify = (x) => x;
const CSSColorMode = enumify({
  HEX: "hex",
  HEXA: "hexa",
  RGB_CSS: "rgb-css",
  RGBA_CSS: "rgba-css",
  HSL_CSS: "hsl-css",
  HSLA_CSS: "hsla-css"
});
const ObjectColorMode = enumify({
  RGB: "rgb",
  RGBA: "rgba",
  HSL: "hsl",
  HSLA: "hsla",
  HSV: "hsv",
  HSVA: "hsva"
});
function parseMode(colorValue) {
  if (typeof colorValue === "string") {
    if (colorValue.startsWith("#")) {
      const { length } = colorValue;
      if (length === 4 || length === 7) {
        return CSSColorMode.HEX;
      }
      if (length === 5 || length === 9) {
        return CSSColorMode.HEXA;
      }
    }
    if (colorValue.startsWith("rgba(")) {
      return CSSColorMode.RGBA_CSS;
    }
    if (colorValue.startsWith("rgb(")) {
      return CSSColorMode.RGB_CSS;
    }
    if (colorValue.startsWith("hsl(")) {
      return CSSColorMode.HSL_CSS;
    }
    if (colorValue.startsWith("hsla(")) {
      return CSSColorMode.HSLA_CSS;
    }
  }
  if (typeof colorValue === "object") {
    if (hasChannels(colorValue, "r", "g", "b")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.RGBA : ObjectColorMode.RGB;
    }
    if (hasChannels(colorValue, "h", "s", "l")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.HSLA : ObjectColorMode.HSL;
    }
    if (hasChannels(colorValue, "h", "s", "v")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.HSVA : ObjectColorMode.HSV;
    }
  }
  return null;
}
function hasChannels(colorObject, ...channels) {
  return channels.every((channel) => channel && colorObject && `${channel}` in colorObject);
}
function colorEqual(value1, value2) {
  return value1?.rgb().array().toString() === value2?.rgb().array().toString();
}
function alphaCompatible(mode) {
  return (mode === CSSColorMode.HEXA ||
    mode === CSSColorMode.RGBA_CSS ||
    mode === CSSColorMode.HSLA_CSS ||
    mode === ObjectColorMode.RGBA ||
    mode === ObjectColorMode.HSLA ||
    mode === ObjectColorMode.HSVA);
}
function toAlphaMode(mode) {
  const alphaMode = mode === CSSColorMode.HEX
    ? CSSColorMode.HEXA
    : mode === CSSColorMode.RGB_CSS
      ? CSSColorMode.RGBA_CSS
      : mode === CSSColorMode.HSL_CSS
        ? CSSColorMode.HSLA_CSS
        : mode === ObjectColorMode.RGB
          ? ObjectColorMode.RGBA
          : mode === ObjectColorMode.HSL
            ? ObjectColorMode.HSLA
            : mode === ObjectColorMode.HSV
              ? ObjectColorMode.HSVA
              : mode;
  return alphaMode;
}
function toNonAlphaMode(mode) {
  const nonAlphaMode = mode === CSSColorMode.HEXA
    ? CSSColorMode.HEX
    : mode === CSSColorMode.RGBA_CSS
      ? CSSColorMode.RGB_CSS
      : mode === CSSColorMode.HSLA_CSS
        ? CSSColorMode.HSL_CSS
        : mode === ObjectColorMode.RGBA
          ? ObjectColorMode.RGB
          : mode === ObjectColorMode.HSLA
            ? ObjectColorMode.HSL
            : mode === ObjectColorMode.HSVA
              ? ObjectColorMode.HSV
              : mode;
  return nonAlphaMode;
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMzY4YzFlN2MwYmMzYTYxNDc3OGQxZjllYTFjM2JhMGMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnRjtBQUMzQjtBQUNnQjtBQUN6QztBQUNLOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBLGtCQUFrQixxREFBUTtBQUMxQjs7QUFFQSxpQ0FBaUMsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLDJCQUEyQix3QkFBd0Isd0NBQXdDLE1B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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxRQUFRO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1hdmF0YXIuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vdXRpbHMtZGRkMDNmZTEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgeyBoIGFzIGdldE1vZGVOYW1lIH0gZnJvbSAnLi9kb20tZjc0YTA5YjcuanMnO1xuaW1wb3J0IHsgaCBhcyBoZXhUb1JHQiwgaSBhcyBpc1ZhbGlkSGV4IH0gZnJvbSAnLi91dGlscy1kZGQwM2ZlMS5qcyc7XG5pbXBvcnQgJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLWQwOGE2NzM3LmpzJztcblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIHRvIGEgdmFsaWQgaGV4IGJ5IGhhc2hpbmcgaXRzIGNvbnRlbnRzXG4gKiBhbmQgdXNpbmcgdGhlIGhhc2ggYXMgYSBzZWVkIGZvciB0aHJlZSBkaXN0aW5jdCBjb2xvciB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0gc3RyXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvSGV4KHN0cikge1xuICBsZXQgaGFzaCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaGFzaCA9IHN0ci5jaGFyQ29kZUF0KGkpICsgKChoYXNoIDw8IDUpIC0gaGFzaCk7XG4gIH1cbiAgbGV0IGhleCA9IFwiI1wiO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgIGNvbnN0IHZhbHVlID0gKGhhc2ggPj4gKGogKiA4KSkgJiAweGZmO1xuICAgIGhleCArPSAoXCIwMFwiICsgdmFsdWUudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTIpO1xuICB9XG4gIHJldHVybiBoZXg7XG59XG4vKipcbiAqIEZpbmQgdGhlIGh1ZSBvZiBhIGNvbG9yIGdpdmVuIHRoZSBzZXBhcmF0ZSBSR0IgY29sb3IgY2hhbm5lbHNcbiAqXG4gKiBAcGFyYW0gcmdiXG4gKi9cbmZ1bmN0aW9uIHJnYlRvSHVlKHJnYikge1xuICBsZXQgeyByLCBnLCBiIH0gPSByZ2I7XG4gIHIgLz0gMjU1O1xuICBnIC89IDI1NTtcbiAgYiAvPSAyNTU7XG4gIGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICBjb25zdCBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgY29uc3QgZGVsdGEgPSBtYXggLSBtaW47XG4gIGlmIChtYXggPT09IG1pbikge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGxldCBodWUgPSAobWF4ICsgbWluKSAvIDI7XG4gIHN3aXRjaCAobWF4KSB7XG4gICAgY2FzZSByOlxuICAgICAgaHVlID0gKGcgLSBiKSAvIGRlbHRhICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBnOlxuICAgICAgaHVlID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgYjpcbiAgICAgIGh1ZSA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gTWF0aC5yb3VuZChodWUgKiA2MCk7XG59XG4vKipcbiAqIEZvciBhIGhleCBjb2xvciwgZmluZCB0aGUgaHVlXG4gKlxuICogQHBhcmFtIGhleCB7c3RyaW5nfSAtIGZvcm0gb2YgXCIjLS0tLS0tXCJcbiAqL1xuZnVuY3Rpb24gaGV4VG9IdWUoaGV4KSB7XG4gIHJldHVybiByZ2JUb0h1ZShoZXhUb1JHQihoZXgpKTtcbn1cblxuY29uc3QgYXZhdGFyQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1yYWRpdXM6NTAlfTpob3N0KFtzY2FsZT1zXSl7YmxvY2stc2l6ZToxLjVyZW07aW5saW5lLXNpemU6MS41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMyl9Omhvc3QoW3NjYWxlPW1dKXtibG9jay1zaXplOjJyZW07aW5saW5lLXNpemU6MnJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpfTpob3N0KFtzY2FsZT1sXSl7YmxvY2stc2l6ZToyLjc1cmVtO2lubGluZS1zaXplOjIuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApfS5pY29ue2Rpc3BsYXk6ZmxleH0uYmFja2dyb3VuZHtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXJhZGl1czo1MCV9LmluaXRpYWxze2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtYm9sZCk7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0udGh1bWJuYWlse2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2JvcmRlci1yYWRpdXM6NTAlfVwiO1xuXG5jb25zdCBBdmF0YXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnRodW1ibmFpbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZ1bGxOYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudXNlcm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51c2VySWQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRodW1ibmFpbEZhaWxlZFRvTG9hZCA9IGZhbHNlO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXRlcm1pbmVDb250ZW50KCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGV0ZXJtaW5lQ29udGVudCgpIHtcbiAgICBpZiAodGhpcy50aHVtYm5haWwgJiYgIXRoaXMudGh1bWJuYWlsRmFpbGVkVG9Mb2FkKSB7XG4gICAgICByZXR1cm4gKGgoXCJpbWdcIiwgeyBhbHQ6IHRoaXMubGFiZWwgfHwgXCJcIiwgY2xhc3M6IFwidGh1bWJuYWlsXCIsIG9uRXJyb3I6ICgpID0+ICh0aGlzLnRodW1ibmFpbEZhaWxlZFRvTG9hZCA9IHRydWUpLCBzcmM6IHRoaXMudGh1bWJuYWlsIH0pKTtcbiAgICB9XG4gICAgY29uc3QgaW5pdGlhbHMgPSB0aGlzLmdlbmVyYXRlSW5pdGlhbHMoKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmdlbmVyYXRlRmlsbENvbG9yKCk7XG4gICAgcmV0dXJuIChoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVsIHx8IHRoaXMuZnVsbE5hbWUsIGNsYXNzOiBcImJhY2tncm91bmRcIiwgcm9sZTogXCJmaWd1cmVcIiwgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yIH0gfSwgaW5pdGlhbHMgPyAoaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogXCJpbml0aWFsc1wiIH0sIGluaXRpYWxzKSkgOiAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBcImljb25cIiwgaWNvbjogXCJ1c2VyXCIsIHNjYWxlOiB0aGlzLnNjYWxlIH0pKSkpO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhIHZhbGlkIGJhY2tncm91bmQgY29sb3IgdGhhdCBpcyBjb25zaXN0ZW50IGFuZCB1bmlxdWUgdG8gdGhpcyB1c2VyXG4gICAqL1xuICBnZW5lcmF0ZUZpbGxDb2xvcigpIHtcbiAgICBjb25zdCB7IHVzZXJJZCwgdXNlcm5hbWUsIGZ1bGxOYW1lLCBlbCB9ID0gdGhpcztcbiAgICBjb25zdCB0aGVtZSA9IGdldE1vZGVOYW1lKGVsKTtcbiAgICBjb25zdCBpZCA9IHVzZXJJZCAmJiBgIyR7dXNlcklkLnN1YnN0cih1c2VySWQubGVuZ3RoIC0gNil9YDtcbiAgICBjb25zdCBuYW1lID0gdXNlcm5hbWUgfHwgZnVsbE5hbWUgfHwgXCJcIjtcbiAgICBjb25zdCBoZXggPSBpZCAmJiBpc1ZhbGlkSGV4KGlkKSA/IGlkIDogc3RyaW5nVG9IZXgobmFtZSk7XG4gICAgLy8gaWYgdGhlcmUgaXMgbm90IHVuaXF1ZSBpbmZvcm1hdGlvbiwgb3IgYW4gaW52YWxpZCBoZXggaXMgcHJvZHVjZWQsIHJldHVybiBhIGRlZmF1bHRcbiAgICBpZiAoKCF1c2VySWQgJiYgIW5hbWUpIHx8ICFpc1ZhbGlkSGV4KGhleCkpIHtcbiAgICAgIHJldHVybiBgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpYDtcbiAgICB9XG4gICAgY29uc3QgaHVlID0gaGV4VG9IdWUoaGV4KTtcbiAgICBjb25zdCBsID0gdGhlbWUgPT09IFwiZGFya1wiID8gMjAgOiA5MDtcbiAgICByZXR1cm4gYGhzbCgke2h1ZX0sIDYwJSwgJHtsfSUpYDtcbiAgfVxuICAvKipcbiAgICogVXNlIGZ1bGxuYW1lIG9yIHVzZXJuYW1lIHRvIGdlbmVyYXRlIGluaXRpYWxzXG4gICAqL1xuICBnZW5lcmF0ZUluaXRpYWxzKCkge1xuICAgIGNvbnN0IHsgZnVsbE5hbWUsIHVzZXJuYW1lIH0gPSB0aGlzO1xuICAgIGlmIChmdWxsTmFtZSkge1xuICAgICAgcmV0dXJuIGZ1bGxOYW1lXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgICAubWFwKChuYW1lKSA9PiBuYW1lLnN1YnN0cmluZygwLCAxKSlcbiAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHVzZXJuYW1lKSB7XG4gICAgICByZXR1cm4gdXNlcm5hbWUuc3Vic3RyaW5nKDAsIDIpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxufTtcbkF2YXRhci5zdHlsZSA9IGF2YXRhckNzcztcblxuZXhwb3J0IHsgQXZhdGFyIGFzIGNhbGNpdGVfYXZhdGFyIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuY29uc3QgaGV4Q2hhciA9IC9eWzAtOUEtRl0kL2k7XG5jb25zdCBzaG9ydGhhbmRIZXggPSAvXiNbMC05QS1GXXszfSQvaTtcbmNvbnN0IGxvbmdoYW5kSGV4ID0gL14jWzAtOUEtRl17Nn0kL2k7XG5jb25zdCBzaG9ydGhhbmRIZXhXaXRoQWxwaGEgPSAvXiNbMC05QS1GXXs0fSQvaTtcbmNvbnN0IGxvbmdoYW5kSGV4V2l0aEFscGhhID0gL14jWzAtOUEtRl17OH0kL2k7XG5jb25zdCBhbHBoYVRvT3BhY2l0eSA9IChhbHBoYSkgPT4gTnVtYmVyKChhbHBoYSAqIDEwMCkudG9GaXhlZCgpKTtcbmNvbnN0IG9wYWNpdHlUb0FscGhhID0gKG9wYWNpdHkpID0+IE51bWJlcigob3BhY2l0eSAvIDEwMCkudG9GaXhlZCgyKSk7XG5mdW5jdGlvbiBpc1ZhbGlkSGV4KGhleCwgaGFzQWxwaGEgPSBmYWxzZSkge1xuICByZXR1cm4gaXNTaG9ydGhhbmRIZXgoaGV4LCBoYXNBbHBoYSkgfHwgaXNMb25naGFuZEhleChoZXgsIGhhc0FscGhhKTtcbn1cbmZ1bmN0aW9uIGV2YWx1YXRlSGV4KGhleCwgbGVuZ3RoLCBwYXR0ZXJuKSB7XG4gIGlmICghaGV4KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSBsZW5ndGggJiYgcGF0dGVybi50ZXN0KGhleCk7XG59XG5mdW5jdGlvbiBpc1Nob3J0aGFuZEhleChoZXgsIGhhc0FscGhhID0gZmFsc2UpIHtcbiAgY29uc3QgaGV4TGVuZ3RoID0gaGFzQWxwaGEgPyA1IDogNDtcbiAgY29uc3QgaGV4UGF0dGVybiA9IGhhc0FscGhhID8gc2hvcnRoYW5kSGV4V2l0aEFscGhhIDogc2hvcnRoYW5kSGV4O1xuICByZXR1cm4gZXZhbHVhdGVIZXgoaGV4LCBoZXhMZW5ndGgsIGhleFBhdHRlcm4pO1xufVxuZnVuY3Rpb24gaXNMb25naGFuZEhleChoZXgsIGhhc0FscGhhID0gZmFsc2UpIHtcbiAgY29uc3QgaGV4TGVuZ3RoID0gaGFzQWxwaGEgPyA5IDogNztcbiAgY29uc3QgaGV4UGF0dGVybiA9IGhhc0FscGhhID8gbG9uZ2hhbmRIZXhXaXRoQWxwaGEgOiBsb25naGFuZEhleDtcbiAgcmV0dXJuIGV2YWx1YXRlSGV4KGhleCwgaGV4TGVuZ3RoLCBoZXhQYXR0ZXJuKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUhleChoZXgsIGhhc0FscGhhID0gZmFsc2UsIGNvbnZlcnRGcm9tSGV4VG9IZXhhID0gZmFsc2UpIHtcbiAgaGV4ID0gaGV4LnRvTG93ZXJDYXNlKCk7XG4gIGlmICghaGV4LnN0YXJ0c1dpdGgoXCIjXCIpKSB7XG4gICAgaGV4ID0gYCMke2hleH1gO1xuICB9XG4gIGlmIChpc1Nob3J0aGFuZEhleChoZXgsIGhhc0FscGhhKSkge1xuICAgIHJldHVybiByZ2JUb0hleChoZXhUb1JHQihoZXgsIGhhc0FscGhhKSk7XG4gIH1cbiAgaWYgKGhhc0FscGhhICYmIGNvbnZlcnRGcm9tSGV4VG9IZXhhICYmIGlzVmFsaWRIZXgoaGV4LCBmYWxzZSAvKiB3ZSBvbmx5IGNhcmUgYWJvdXQgUkdCIGhleCBmb3IgY29udmVyc2lvbiAqLykpIHtcbiAgICBjb25zdCBpc1Nob3J0aGFuZCA9IGlzU2hvcnRoYW5kSGV4KGhleCwgZmFsc2UpO1xuICAgIHJldHVybiByZ2JUb0hleChoZXhUb1JHQihgJHtoZXh9JHtpc1Nob3J0aGFuZCA/IFwiZlwiIDogXCJmZlwifWAsIHRydWUpKTtcbiAgfVxuICByZXR1cm4gaGV4O1xufVxuZnVuY3Rpb24gaGV4aWZ5KGNvbG9yLCBoYXNBbHBoYSA9IGZhbHNlKSB7XG4gIHJldHVybiBoYXNBbHBoYSA/IGNvbG9yLmhleGEoKSA6IGNvbG9yLmhleCgpO1xufVxuZnVuY3Rpb24gcmdiVG9IZXgoY29sb3IpIHtcbiAgY29uc3QgeyByLCBnLCBiIH0gPSBjb2xvcjtcbiAgY29uc3QgckNoYXJzID0gbnVtVG9IZXgocik7XG4gIGNvbnN0IGdDaGFycyA9IG51bVRvSGV4KGcpO1xuICBjb25zdCBiQ2hhcnMgPSBudW1Ub0hleChiKTtcbiAgY29uc3QgYWxwaGFDaGFycyA9IFwiYVwiIGluIGNvbG9yID8gbnVtVG9IZXgoY29sb3IuYSAqIDI1NSkgOiBcIlwiO1xuICByZXR1cm4gYCMke3JDaGFyc30ke2dDaGFyc30ke2JDaGFyc30ke2FscGhhQ2hhcnN9YC50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gbnVtVG9IZXgobnVtKSB7XG4gIHJldHVybiBudW0udG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUFscGhhKGNvbG9yT2JqZWN0KSB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB7IC4uLmNvbG9yT2JqZWN0LCBhOiBjb2xvck9iamVjdC5hbHBoYSA/PyAxIC8qIENvbG9yKCkgd2lsbCBvbWl0IGFscGhhIGlmIDEgKi8gfTtcbiAgZGVsZXRlIG5vcm1hbGl6ZWQuYWxwaGE7XG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplQ29sb3IoYWxwaGFDb2xvck9iamVjdCkge1xuICBjb25zdCBub3JtYWxpemVkID0geyAuLi5hbHBoYUNvbG9yT2JqZWN0LCBhbHBoYTogYWxwaGFDb2xvck9iamVjdC5hID8/IDEgfTtcbiAgZGVsZXRlIG5vcm1hbGl6ZWQuYTtcbiAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG59XG5mdW5jdGlvbiBoZXhUb1JHQihoZXgsIGhhc0FscGhhID0gZmFsc2UpIHtcbiAgaWYgKCFpc1ZhbGlkSGV4KGhleCwgaGFzQWxwaGEpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaGV4ID0gaGV4LnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICBsZXQgciwgZywgYiwgYTtcbiAgY29uc3QgaXNTaG9ydGhhbmQgPSBoZXgubGVuZ3RoID09PSAzIHx8IGhleC5sZW5ndGggPT09IDQ7XG4gIGlmIChpc1Nob3J0aGFuZCkge1xuICAgIGNvbnN0IFtmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoXSA9IGhleC5zcGxpdChcIlwiKTtcbiAgICByID0gcGFyc2VJbnQoYCR7Zmlyc3R9JHtmaXJzdH1gLCAxNik7XG4gICAgZyA9IHBhcnNlSW50KGAke3NlY29uZH0ke3NlY29uZH1gLCAxNik7XG4gICAgYiA9IHBhcnNlSW50KGAke3RoaXJkfSR7dGhpcmR9YCwgMTYpO1xuICAgIGEgPSBwYXJzZUludChgJHtmb3VydGh9JHtmb3VydGh9YCwgMTYpIC8gMjU1O1xuICB9XG4gIGVsc2Uge1xuICAgIHIgPSBwYXJzZUludChoZXguc2xpY2UoMCwgMiksIDE2KTtcbiAgICBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDIsIDQpLCAxNik7XG4gICAgYiA9IHBhcnNlSW50KGhleC5zbGljZSg0LCA2KSwgMTYpO1xuICAgIGEgPSBwYXJzZUludChoZXguc2xpY2UoNiwgOCksIDE2KSAvIDI1NTtcbiAgfVxuICByZXR1cm4gaXNOYU4oYSkgPyB7IHIsIGcsIGIgfSA6IHsgciwgZywgYiwgYSB9O1xufVxuLy8gdGhlc2UgdXRpbHMgYWxsb3cgdXNlcnMgdG8gcGFzcyBlbnVtIHZhbHVlcyBhcyBzdHJpbmdzIHdpdGhvdXQgaGF2aW5nIHRvIGFjY2VzcyB0aGUgZW51bVxuLy8gYmFzZWQgb24gdGhlIGFwcHJvYWNoIHN1Z2dlc3RlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzE3NjkwI2lzc3VlY29tbWVudC0zMjEzNjU3NTksXG5jb25zdCBlbnVtaWZ5ID0gKHgpID0+IHg7XG5jb25zdCBDU1NDb2xvck1vZGUgPSBlbnVtaWZ5KHtcbiAgSEVYOiBcImhleFwiLFxuICBIRVhBOiBcImhleGFcIixcbiAgUkdCX0NTUzogXCJyZ2ItY3NzXCIsXG4gIFJHQkFfQ1NTOiBcInJnYmEtY3NzXCIsXG4gIEhTTF9DU1M6IFwiaHNsLWNzc1wiLFxuICBIU0xBX0NTUzogXCJoc2xhLWNzc1wiXG59KTtcbmNvbnN0IE9iamVjdENvbG9yTW9kZSA9IGVudW1pZnkoe1xuICBSR0I6IFwicmdiXCIsXG4gIFJHQkE6IFwicmdiYVwiLFxuICBIU0w6IFwiaHNsXCIsXG4gIEhTTEE6IFwiaHNsYVwiLFxuICBIU1Y6IFwiaHN2XCIsXG4gIEhTVkE6IFwiaHN2YVwiXG59KTtcbmZ1bmN0aW9uIHBhcnNlTW9kZShjb2xvclZhbHVlKSB7XG4gIGlmICh0eXBlb2YgY29sb3JWYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGlmIChjb2xvclZhbHVlLnN0YXJ0c1dpdGgoXCIjXCIpKSB7XG4gICAgICBjb25zdCB7IGxlbmd0aCB9ID0gY29sb3JWYWx1ZTtcbiAgICAgIGlmIChsZW5ndGggPT09IDQgfHwgbGVuZ3RoID09PSA3KSB7XG4gICAgICAgIHJldHVybiBDU1NDb2xvck1vZGUuSEVYO1xuICAgICAgfVxuICAgICAgaWYgKGxlbmd0aCA9PT0gNSB8fCBsZW5ndGggPT09IDkpIHtcbiAgICAgICAgcmV0dXJuIENTU0NvbG9yTW9kZS5IRVhBO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29sb3JWYWx1ZS5zdGFydHNXaXRoKFwicmdiYShcIikpIHtcbiAgICAgIHJldHVybiBDU1NDb2xvck1vZGUuUkdCQV9DU1M7XG4gICAgfVxuICAgIGlmIChjb2xvclZhbHVlLnN0YXJ0c1dpdGgoXCJyZ2IoXCIpKSB7XG4gICAgICByZXR1cm4gQ1NTQ29sb3JNb2RlLlJHQl9DU1M7XG4gICAgfVxuICAgIGlmIChjb2xvclZhbHVlLnN0YXJ0c1dpdGgoXCJoc2woXCIpKSB7XG4gICAgICByZXR1cm4gQ1NTQ29sb3JNb2RlLkhTTF9DU1M7XG4gICAgfVxuICAgIGlmIChjb2xvclZhbHVlLnN0YXJ0c1dpdGgoXCJoc2xhKFwiKSkge1xuICAgICAgcmV0dXJuIENTU0NvbG9yTW9kZS5IU0xBX0NTUztcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBjb2xvclZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgaWYgKGhhc0NoYW5uZWxzKGNvbG9yVmFsdWUsIFwiclwiLCBcImdcIiwgXCJiXCIpKSB7XG4gICAgICByZXR1cm4gaGFzQ2hhbm5lbHMoY29sb3JWYWx1ZSwgXCJhXCIpID8gT2JqZWN0Q29sb3JNb2RlLlJHQkEgOiBPYmplY3RDb2xvck1vZGUuUkdCO1xuICAgIH1cbiAgICBpZiAoaGFzQ2hhbm5lbHMoY29sb3JWYWx1ZSwgXCJoXCIsIFwic1wiLCBcImxcIikpIHtcbiAgICAgIHJldHVybiBoYXNDaGFubmVscyhjb2xvclZhbHVlLCBcImFcIikgPyBPYmplY3RDb2xvck1vZGUuSFNMQSA6IE9iamVjdENvbG9yTW9kZS5IU0w7XG4gICAgfVxuICAgIGlmIChoYXNDaGFubmVscyhjb2xvclZhbHVlLCBcImhcIiwgXCJzXCIsIFwidlwiKSkge1xuICAgICAgcmV0dXJuIGhhc0NoYW5uZWxzKGNvbG9yVmFsdWUsIFwiYVwiKSA/IE9iamVjdENvbG9yTW9kZS5IU1ZBIDogT2JqZWN0Q29sb3JNb2RlLkhTVjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBoYXNDaGFubmVscyhjb2xvck9iamVjdCwgLi4uY2hhbm5lbHMpIHtcbiAgcmV0dXJuIGNoYW5uZWxzLmV2ZXJ5KChjaGFubmVsKSA9PiBjaGFubmVsICYmIGNvbG9yT2JqZWN0ICYmIGAke2NoYW5uZWx9YCBpbiBjb2xvck9iamVjdCk7XG59XG5mdW5jdGlvbiBjb2xvckVxdWFsKHZhbHVlMSwgdmFsdWUyKSB7XG4gIHJldHVybiB2YWx1ZTE/LnJnYigpLmFycmF5KCkudG9TdHJpbmcoKSA9PT0gdmFsdWUyPy5yZ2IoKS5hcnJheSgpLnRvU3RyaW5nKCk7XG59XG5mdW5jdGlvbiBhbHBoYUNvbXBhdGlibGUobW9kZSkge1xuICByZXR1cm4gKG1vZGUgPT09IENTU0NvbG9yTW9kZS5IRVhBIHx8XG4gICAgbW9kZSA9PT0gQ1NTQ29sb3JNb2RlLlJHQkFfQ1NTIHx8XG4gICAgbW9kZSA9PT0gQ1NTQ29sb3JNb2RlLkhTTEFfQ1NTIHx8XG4gICAgbW9kZSA9PT0gT2JqZWN0Q29sb3JNb2RlLlJHQkEgfHxcbiAgICBtb2RlID09PSBPYmplY3RDb2xvck1vZGUuSFNMQSB8fFxuICAgIG1vZGUgPT09IE9iamVjdENvbG9yTW9kZS5IU1ZBKTtcbn1cbmZ1bmN0aW9uIHRvQWxwaGFNb2RlKG1vZGUpIHtcbiAgY29uc3QgYWxwaGFNb2RlID0gbW9kZSA9PT0gQ1NTQ29sb3JNb2RlLkhFWFxuICAgID8gQ1NTQ29sb3JNb2RlLkhFWEFcbiAgICA6IG1vZGUgPT09IENTU0NvbG9yTW9kZS5SR0JfQ1NTXG4gICAgICA/IENTU0NvbG9yTW9kZS5SR0JBX0NTU1xuICAgICAgOiBtb2RlID09PSBDU1NDb2xvck1vZGUuSFNMX0NTU1xuICAgICAgICA/IENTU0NvbG9yTW9kZS5IU0xBX0NTU1xuICAgICAgICA6IG1vZGUgPT09IE9iamVjdENvbG9yTW9kZS5SR0JcbiAgICAgICAgICA/IE9iamVjdENvbG9yTW9kZS5SR0JBXG4gICAgICAgICAgOiBtb2RlID09PSBPYmplY3RDb2xvck1vZGUuSFNMXG4gICAgICAgICAgICA/IE9iamVjdENvbG9yTW9kZS5IU0xBXG4gICAgICAgICAgICA6IG1vZGUgPT09IE9iamVjdENvbG9yTW9kZS5IU1ZcbiAgICAgICAgICAgICAgPyBPYmplY3RDb2xvck1vZGUuSFNWQVxuICAgICAgICAgICAgICA6IG1vZGU7XG4gIHJldHVybiBhbHBoYU1vZGU7XG59XG5mdW5jdGlvbiB0b05vbkFscGhhTW9kZShtb2RlKSB7XG4gIGNvbnN0IG5vbkFscGhhTW9kZSA9IG1vZGUgPT09IENTU0NvbG9yTW9kZS5IRVhBXG4gICAgPyBDU1NDb2xvck1vZGUuSEVYXG4gICAgOiBtb2RlID09PSBDU1NDb2xvck1vZGUuUkdCQV9DU1NcbiAgICAgID8gQ1NTQ29sb3JNb2RlLlJHQl9DU1NcbiAgICAgIDogbW9kZSA9PT0gQ1NTQ29sb3JNb2RlLkhTTEFfQ1NTXG4gICAgICAgID8gQ1NTQ29sb3JNb2RlLkhTTF9DU1NcbiAgICAgICAgOiBtb2RlID09PSBPYmplY3RDb2xvck1vZGUuUkdCQVxuICAgICAgICAgID8gT2JqZWN0Q29sb3JNb2RlLlJHQlxuICAgICAgICAgIDogbW9kZSA9PT0gT2JqZWN0Q29sb3JNb2RlLkhTTEFcbiAgICAgICAgICAgID8gT2JqZWN0Q29sb3JNb2RlLkhTTFxuICAgICAgICAgICAgOiBtb2RlID09PSBPYmplY3RDb2xvck1vZGUuSFNWQVxuICAgICAgICAgICAgICA/IE9iamVjdENvbG9yTW9kZS5IU1ZcbiAgICAgICAgICAgICAgOiBtb2RlO1xuICByZXR1cm4gbm9uQWxwaGFNb2RlO1xufVxuXG5leHBvcnQgeyBDU1NDb2xvck1vZGUgYXMgQywgaGV4aWZ5IGFzIGEsIGFscGhhVG9PcGFjaXR5IGFzIGIsIGFscGhhQ29tcGF0aWJsZSBhcyBjLCBjb2xvckVxdWFsIGFzIGQsIG5vcm1hbGl6ZUFscGhhIGFzIGUsIHRvQWxwaGFNb2RlIGFzIGYsIG5vcm1hbGl6ZUNvbG9yIGFzIGcsIGhleFRvUkdCIGFzIGgsIGlzVmFsaWRIZXggYXMgaSwgaXNMb25naGFuZEhleCBhcyBqLCBoZXhDaGFyIGFzIGssIG5vcm1hbGl6ZUhleCBhcyBuLCBvcGFjaXR5VG9BbHBoYSBhcyBvLCBwYXJzZU1vZGUgYXMgcCwgcmdiVG9IZXggYXMgciwgdG9Ob25BbHBoYU1vZGUgYXMgdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9