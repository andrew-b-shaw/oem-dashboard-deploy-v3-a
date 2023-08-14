"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_arcgis_core_layers_support_infoFor3D_js"],{

/***/ "./node_modules/@arcgis/core/layers/support/infoFor3D.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/infoFor3D.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAssetMapTable": () => (/* binding */ m),
/* harmony export */   "getFilePickerAcceptTypes": () => (/* binding */ r),
/* harmony export */   "getFilenameFormatId": () => (/* binding */ u),
/* harmony export */   "getFormatDescription": () => (/* binding */ l),
/* harmony export */   "getFormatExtensions": () => (/* binding */ d),
/* harmony export */   "getFormatId": () => (/* binding */ a),
/* harmony export */   "getFormatIdMimeType": () => (/* binding */ e),
/* harmony export */   "getFormatMimeType": () => (/* binding */ p),
/* harmony export */   "getMimeTypeFormatId": () => (/* binding */ o),
/* harmony export */   "getSupportedExtensions": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
const n=[["binary","application/octet-stream","bin",""]];function t(n){return i(n?.supportedFormats??[]).flatMap(d).map((n=>`.${n}`))}function r(n){const t={};for(const r of i(n?.supportedFormats??[])){const n=p(r),o=d(r).map((n=>`.${n}`));t[n]??=[],t[n].push(...o)}return[{description:"3D Models",accept:t}]}function o(n,t){return a(f(n,t))}function u(n,t){return a(s(n,t))}function e(n,t){return p(c(n,t))}function i(t){return[...n,...t]}function c(n,t){return i(t).find((t=>a(t)===n))}function f(n,t){return i(t).find((t=>p(t)===n))}function s(n,t){const r=n.toLowerCase();return i(t).find((n=>d(n).some((n=>r.endsWith(n)))))}function a(n){return n?.[0]}function p(n){return n?.[1]}function d(n){return n?.[2].split(",")??[]}function l(n){return n?.[3]}function m(n){return n.tables?.find((n=>"assetMaps"===n.role))}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOTExMDNkNmE0NmIzZDg0MGQ1MTllMTQ1NzA5YWNiMDMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELGNBQWMseURBQXlELEVBQUUsSUFBSSxjQUFjLFdBQVcsMkNBQTJDLGdDQUFnQyxFQUFFLElBQUksMEJBQTBCLFFBQVEsaUNBQWlDLEVBQUUsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixpQkFBaUIsY0FBYyxrQkFBa0IsZ0JBQWdCLGdDQUFnQyxnQkFBZ0IsZ0NBQWdDLGdCQUFnQix3QkFBd0IscURBQXFELGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyw2QkFBNkIsY0FBYyxjQUFjLGNBQWMsaURBQStTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvbGF5ZXJzL3N1cHBvcnQvaW5mb0ZvcjNELmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5jb25zdCBuPVtbXCJiaW5hcnlcIixcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiLFwiYmluXCIsXCJcIl1dO2Z1bmN0aW9uIHQobil7cmV0dXJuIGkobj8uc3VwcG9ydGVkRm9ybWF0cz8/W10pLmZsYXRNYXAoZCkubWFwKChuPT5gLiR7bn1gKSl9ZnVuY3Rpb24gcihuKXtjb25zdCB0PXt9O2Zvcihjb25zdCByIG9mIGkobj8uc3VwcG9ydGVkRm9ybWF0cz8/W10pKXtjb25zdCBuPXAociksbz1kKHIpLm1hcCgobj0+YC4ke259YCkpO3Rbbl0/Pz1bXSx0W25dLnB1c2goLi4ubyl9cmV0dXJuW3tkZXNjcmlwdGlvbjpcIjNEIE1vZGVsc1wiLGFjY2VwdDp0fV19ZnVuY3Rpb24gbyhuLHQpe3JldHVybiBhKGYobix0KSl9ZnVuY3Rpb24gdShuLHQpe3JldHVybiBhKHMobix0KSl9ZnVuY3Rpb24gZShuLHQpe3JldHVybiBwKGMobix0KSl9ZnVuY3Rpb24gaSh0KXtyZXR1cm5bLi4ubiwuLi50XX1mdW5jdGlvbiBjKG4sdCl7cmV0dXJuIGkodCkuZmluZCgodD0+YSh0KT09PW4pKX1mdW5jdGlvbiBmKG4sdCl7cmV0dXJuIGkodCkuZmluZCgodD0+cCh0KT09PW4pKX1mdW5jdGlvbiBzKG4sdCl7Y29uc3Qgcj1uLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGkodCkuZmluZCgobj0+ZChuKS5zb21lKChuPT5yLmVuZHNXaXRoKG4pKSkpKX1mdW5jdGlvbiBhKG4pe3JldHVybiBuPy5bMF19ZnVuY3Rpb24gcChuKXtyZXR1cm4gbj8uWzFdfWZ1bmN0aW9uIGQobil7cmV0dXJuIG4/LlsyXS5zcGxpdChcIixcIik/P1tdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG4/LlszXX1mdW5jdGlvbiBtKG4pe3JldHVybiBuLnRhYmxlcz8uZmluZCgobj0+XCJhc3NldE1hcHNcIj09PW4ucm9sZSkpfWV4cG9ydHttIGFzIGdldEFzc2V0TWFwVGFibGUsciBhcyBnZXRGaWxlUGlja2VyQWNjZXB0VHlwZXMsdSBhcyBnZXRGaWxlbmFtZUZvcm1hdElkLGwgYXMgZ2V0Rm9ybWF0RGVzY3JpcHRpb24sZCBhcyBnZXRGb3JtYXRFeHRlbnNpb25zLGEgYXMgZ2V0Rm9ybWF0SWQsZSBhcyBnZXRGb3JtYXRJZE1pbWVUeXBlLHAgYXMgZ2V0Rm9ybWF0TWltZVR5cGUsbyBhcyBnZXRNaW1lVHlwZUZvcm1hdElkLHQgYXMgZ2V0U3VwcG9ydGVkRXh0ZW5zaW9uc307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=