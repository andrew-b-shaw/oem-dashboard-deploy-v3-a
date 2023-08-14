"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_esm_calcite-avatar_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-avatar.entry.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-avatar.entry.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_avatar": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
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
  return rgbToHue(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(hex));
}

const avatarCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:inline-block;overflow:hidden;border-radius:50%}:host([scale=s]){block-size:1.5rem;inline-size:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){block-size:2rem;inline-size:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){block-size:2.75rem;inline-size:2.75rem;font-size:var(--calcite-font-size-0)}.icon{display:flex}.background{display:flex;block-size:100%;inline-size:100%;align-items:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-2)}.thumbnail{block-size:100%;inline-size:100%;border-radius:50%}";

const Avatar = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
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
      return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { alt: this.label || "", class: "thumbnail", onError: () => (this.thumbnailFailedToLoad = true), src: this.thumbnail }));
    }
    const initials = this.generateInitials();
    const backgroundColor = this.generateFillColor();
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.label || this.fullName, class: "background", role: "figure", style: { backgroundColor } }, initials ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: "initials" }, initials)) : ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: "icon", icon: "user", scale: this.scale }))));
  }
  /**
   * Generate a valid background color that is consistent and unique to this user
   */
  generateFillColor() {
    const { userId, username, fullName, el } = this;
    const theme = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.h)(el);
    const id = userId && `#${userId.substr(userId.length - 6)}`;
    const name = username || fullName || "";
    const hex = id && Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(id) ? id : stringToHex(name);
    // if there is not unique information, or an invalid hex is produced, return a default
    if ((!userId && !name) || !Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils-85b95e46.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(hex)) {
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
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
Avatar.style = avatarCss;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOWIxYTQyYjc1M2U4MjJjYzllY2ZhOTQyMmQ3ZjRkMTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNnRjtBQUMzQjtBQUNnQjtBQUN6QztBQUNLOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBLGtCQUFrQixrSkFBUTtBQUMxQjs7QUFFQSxpQ0FBaUMsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLDJCQUEyQix3QkFBd0Isd0NBQXdDLE1BQU0seUNBQXlDLE1BQU0saUVBQWlFLGtFQUFrRSxnQkFBZ0IsYUFBYSxNQUFNLHFCQUFxQixnQkFBZ0Isa0JBQWtCLGlCQUFpQixrQkFBa0IsbUJBQW1CLHNDQUFzQyxpQkFBaUIsZ0JBQWdCLGlCQUFpQixzQ0FBc0MsaUJBQWlCLG1CQUFtQixvQkFBb0IscUNBQXFDLE1BQU0sYUFBYSxZQUFZLGFBQWEsZ0JBQWdCLGlCQUFpQixtQkFBbUIsdUJBQXVCLGtCQUFrQixVQUFVLDRDQUE0Qyx5QkFBeUIsK0JBQStCLFdBQVcsZ0JBQWdCLGlCQUFpQixrQkFBa0I7O0FBRTF5RTtBQUNBO0FBQ0EsSUFBSSxxREFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscURBQUMsVUFBVSxvSEFBb0g7QUFDN0k7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBQyxXQUFXLHlGQUF5RixtQkFBbUIsY0FBYyxxREFBQyxXQUFXLDBDQUEwQyxnQkFBZ0IscURBQUMsbUJBQW1CLGdEQUFnRDtBQUM1UjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQ0FBaUM7QUFDN0Msa0JBQWtCLG1EQUFXO0FBQzdCLDZCQUE2QixpQ0FBaUM7QUFDOUQ7QUFDQSxzQkFBc0Isa0pBQVU7QUFDaEM7QUFDQSwrQkFBK0Isa0pBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxTQUFTLEVBQUU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscUJBQXFCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTyxxREFBVTtBQUM5QjtBQUNBOztBQUVvQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtYXZhdGFyLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgaCBhcyBnZXRNb2RlTmFtZSB9IGZyb20gJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCB7IGggYXMgaGV4VG9SR0IsIGkgYXMgaXNWYWxpZEhleCB9IGZyb20gJy4vdXRpbHMtODViOTVlNDYuanMnO1xuaW1wb3J0ICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy0zNDJlMTJkMS5qcyc7XG5cbi8qKlxuICogQ29udmVydCBhIHN0cmluZyB0byBhIHZhbGlkIGhleCBieSBoYXNoaW5nIGl0cyBjb250ZW50c1xuICogYW5kIHVzaW5nIHRoZSBoYXNoIGFzIGEgc2VlZCBmb3IgdGhyZWUgZGlzdGluY3QgY29sb3IgdmFsdWVzXG4gKlxuICogQHBhcmFtIHN0clxuICovXG5mdW5jdGlvbiBzdHJpbmdUb0hleChzdHIpIHtcbiAgbGV0IGhhc2ggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGhhc2ggPSBzdHIuY2hhckNvZGVBdChpKSArICgoaGFzaCA8PCA1KSAtIGhhc2gpO1xuICB9XG4gIGxldCBoZXggPSBcIiNcIjtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICBjb25zdCB2YWx1ZSA9IChoYXNoID4+IChqICogOCkpICYgMHhmZjtcbiAgICBoZXggKz0gKFwiMDBcIiArIHZhbHVlLnRvU3RyaW5nKDE2KSkuc3Vic3RyKC0yKTtcbiAgfVxuICByZXR1cm4gaGV4O1xufVxuLyoqXG4gKiBGaW5kIHRoZSBodWUgb2YgYSBjb2xvciBnaXZlbiB0aGUgc2VwYXJhdGUgUkdCIGNvbG9yIGNoYW5uZWxzXG4gKlxuICogQHBhcmFtIHJnYlxuICovXG5mdW5jdGlvbiByZ2JUb0h1ZShyZ2IpIHtcbiAgbGV0IHsgciwgZywgYiB9ID0gcmdiO1xuICByIC89IDI1NTtcbiAgZyAvPSAyNTU7XG4gIGIgLz0gMjU1O1xuICBjb25zdCBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgY29uc3QgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gIGNvbnN0IGRlbHRhID0gbWF4IC0gbWluO1xuICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBsZXQgaHVlID0gKG1heCArIG1pbikgLyAyO1xuICBzd2l0Y2ggKG1heCkge1xuICAgIGNhc2UgcjpcbiAgICAgIGh1ZSA9IChnIC0gYikgLyBkZWx0YSArIChnIDwgYiA/IDYgOiAwKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZzpcbiAgICAgIGh1ZSA9IChiIC0gcikgLyBkZWx0YSArIDI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGI6XG4gICAgICBodWUgPSAociAtIGcpIC8gZGVsdGEgKyA0O1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIE1hdGgucm91bmQoaHVlICogNjApO1xufVxuLyoqXG4gKiBGb3IgYSBoZXggY29sb3IsIGZpbmQgdGhlIGh1ZVxuICpcbiAqIEBwYXJhbSBoZXgge3N0cmluZ30gLSBmb3JtIG9mIFwiIy0tLS0tLVwiXG4gKi9cbmZ1bmN0aW9uIGhleFRvSHVlKGhleCkge1xuICByZXR1cm4gcmdiVG9IdWUoaGV4VG9SR0IoaGV4KSk7XG59XG5cbmNvbnN0IGF2YXRhckNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO292ZXJmbG93OmhpZGRlbjtib3JkZXItcmFkaXVzOjUwJX06aG9zdChbc2NhbGU9c10pe2Jsb2NrLXNpemU6MS41cmVtO2lubGluZS1zaXplOjEuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTMpfTpob3N0KFtzY2FsZT1tXSl7YmxvY2stc2l6ZToycmVtO2lubGluZS1zaXplOjJyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKX06aG9zdChbc2NhbGU9bF0pe2Jsb2NrLXNpemU6Mi43NXJlbTtpbmxpbmUtc2l6ZToyLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKX0uaWNvbntkaXNwbGF5OmZsZXh9LmJhY2tncm91bmR7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlci1yYWRpdXM6NTAlfS5pbml0aWFsc3tmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWJvbGQpO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9LnRodW1ibmFpbHtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtib3JkZXItcmFkaXVzOjUwJX1cIjtcblxuY29uc3QgQXZhdGFyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy50aHVtYm5haWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5mdWxsTmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVzZXJuYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudXNlcklkID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50aHVtYm5haWxGYWlsZWRUb0xvYWQgPSBmYWxzZTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGV0ZXJtaW5lQ29udGVudCgpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRldGVybWluZUNvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMudGh1bWJuYWlsICYmICF0aGlzLnRodW1ibmFpbEZhaWxlZFRvTG9hZCkge1xuICAgICAgcmV0dXJuIChoKFwiaW1nXCIsIHsgYWx0OiB0aGlzLmxhYmVsIHx8IFwiXCIsIGNsYXNzOiBcInRodW1ibmFpbFwiLCBvbkVycm9yOiAoKSA9PiAodGhpcy50aHVtYm5haWxGYWlsZWRUb0xvYWQgPSB0cnVlKSwgc3JjOiB0aGlzLnRodW1ibmFpbCB9KSk7XG4gICAgfVxuICAgIGNvbnN0IGluaXRpYWxzID0gdGhpcy5nZW5lcmF0ZUluaXRpYWxzKCk7XG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gdGhpcy5nZW5lcmF0ZUZpbGxDb2xvcigpO1xuICAgIHJldHVybiAoaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5sYWJlbCB8fCB0aGlzLmZ1bGxOYW1lLCBjbGFzczogXCJiYWNrZ3JvdW5kXCIsIHJvbGU6IFwiZmlndXJlXCIsIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvciB9IH0sIGluaXRpYWxzID8gKGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IFwiaW5pdGlhbHNcIiB9LCBpbml0aWFscykpIDogKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogXCJpY29uXCIsIGljb246IFwidXNlclwiLCBzY2FsZTogdGhpcy5zY2FsZSB9KSkpKTtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGUgYSB2YWxpZCBiYWNrZ3JvdW5kIGNvbG9yIHRoYXQgaXMgY29uc2lzdGVudCBhbmQgdW5pcXVlIHRvIHRoaXMgdXNlclxuICAgKi9cbiAgZ2VuZXJhdGVGaWxsQ29sb3IoKSB7XG4gICAgY29uc3QgeyB1c2VySWQsIHVzZXJuYW1lLCBmdWxsTmFtZSwgZWwgfSA9IHRoaXM7XG4gICAgY29uc3QgdGhlbWUgPSBnZXRNb2RlTmFtZShlbCk7XG4gICAgY29uc3QgaWQgPSB1c2VySWQgJiYgYCMke3VzZXJJZC5zdWJzdHIodXNlcklkLmxlbmd0aCAtIDYpfWA7XG4gICAgY29uc3QgbmFtZSA9IHVzZXJuYW1lIHx8IGZ1bGxOYW1lIHx8IFwiXCI7XG4gICAgY29uc3QgaGV4ID0gaWQgJiYgaXNWYWxpZEhleChpZCkgPyBpZCA6IHN0cmluZ1RvSGV4KG5hbWUpO1xuICAgIC8vIGlmIHRoZXJlIGlzIG5vdCB1bmlxdWUgaW5mb3JtYXRpb24sIG9yIGFuIGludmFsaWQgaGV4IGlzIHByb2R1Y2VkLCByZXR1cm4gYSBkZWZhdWx0XG4gICAgaWYgKCghdXNlcklkICYmICFuYW1lKSB8fCAhaXNWYWxpZEhleChoZXgpKSB7XG4gICAgICByZXR1cm4gYHZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKWA7XG4gICAgfVxuICAgIGNvbnN0IGh1ZSA9IGhleFRvSHVlKGhleCk7XG4gICAgY29uc3QgbCA9IHRoZW1lID09PSBcImRhcmtcIiA/IDIwIDogOTA7XG4gICAgcmV0dXJuIGBoc2woJHtodWV9LCA2MCUsICR7bH0lKWA7XG4gIH1cbiAgLyoqXG4gICAqIFVzZSBmdWxsbmFtZSBvciB1c2VybmFtZSB0byBnZW5lcmF0ZSBpbml0aWFsc1xuICAgKi9cbiAgZ2VuZXJhdGVJbml0aWFscygpIHtcbiAgICBjb25zdCB7IGZ1bGxOYW1lLCB1c2VybmFtZSB9ID0gdGhpcztcbiAgICBpZiAoZnVsbE5hbWUpIHtcbiAgICAgIHJldHVybiBmdWxsTmFtZVxuICAgICAgICAudHJpbSgpXG4gICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgLm1hcCgobmFtZSkgPT4gbmFtZS5zdWJzdHJpbmcoMCwgMSkpXG4gICAgICAgIC5qb2luKFwiXCIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh1c2VybmFtZSkge1xuICAgICAgcmV0dXJuIHVzZXJuYW1lLnN1YnN0cmluZygwLCAyKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5BdmF0YXIuc3R5bGUgPSBhdmF0YXJDc3M7XG5cbmV4cG9ydCB7IEF2YXRhciBhcyBjYWxjaXRlX2F2YXRhciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9