"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_arcgis_core_rest_query_executeRelationshipQuery_js"],{

/***/ "./node_modules/@arcgis/core/rest/query/executeRelationshipQuery.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/executeRelationshipQuery.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeRelationshipQuery": () => (/* binding */ n),
/* harmony export */   "executeRelationshipQueryForCount": () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/* harmony import */ var _operations_queryRelatedRecords_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations/queryRelatedRecords.js */ "./node_modules/@arcgis/core/rest/query/operations/queryRelatedRecords.js");
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support/FeatureSet.js */ "./node_modules/@arcgis/core/rest/support/FeatureSet.js");
/* harmony import */ var _support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/RelationshipQuery.js */ "./node_modules/@arcgis/core/rest/support/RelationshipQuery.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
async function n(e,n,u){n=_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_3__["default"].from(n);const a=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(e);return (0,_operations_queryRelatedRecords_js__WEBPACK_IMPORTED_MODULE_1__.executeRelationshipQuery)(a,n,u).then((t=>{const r=t.data,e={};return Object.keys(r).forEach((t=>e[t]=_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(r[t]))),e}))}async function u(r,o,n){o=_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_3__["default"].from(o);const u=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(r);return (0,_operations_queryRelatedRecords_js__WEBPACK_IMPORTED_MODULE_1__.executeRelationshipQueryForCount)(u,o,{...n}).then((t=>t.data))}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/queryRelatedRecords.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/queryRelatedRecords.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeRelationshipQuery": () => (/* binding */ r),
/* harmony export */   "executeRelationshipQueryForCount": () => (/* binding */ s),
/* harmony export */   "toQueryStringParameters": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operations/urlUtils.js */ "./node_modules/@arcgis/core/rest/operations/urlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.27/esri/copyright.txt for details.
*/
function o(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),o.outFields&&!t?.returnCountOnly?o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","):delete o.outFields,o.outSpatialReference&&(o.outSR=o.outSR.wkid||JSON.stringify(o.outSR.toJSON()),delete o.outSpatialReference),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function r(e,t,o){const r=await n(e,t,o),s=r.data,a=s.geometryType,d=s.spatialReference,c={};for(const n of s.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:d,hasZ:!!s.hasZ,hasM:!!s.hasM,features:n.relatedRecords};if(null!=n.objectId)c[n.objectId]=e;else for(const t of Object.keys(n))"relatedRecords"!==t&&(c[n[t]]=e)}return{...r,data:c}}async function s(e,t,o){const r=await n(e,t,o,{returnCountOnly:!0}),s=r.data,a={};for(const n of s.relatedRecordGroups)null!=n.objectId&&(a[n.objectId]=n.count);return{...r,data:a}}async function n(r,s,n={},a){const d=(0,_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.mapParameters)({...r.query,f:"json",...a,...o(s,a)});return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r.path+"/queryRelatedRecords",{...n,query:{...n.query,...d}})}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNjVjZjU5NTBkOWMwMzgxZjhhOWI1YTNiM2I5NzU3MjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDbVAsd0JBQXdCLEVBQUUsMEVBQU0sSUFBSSxRQUFRLG1EQUFDLElBQUksT0FBTyw0RkFBQyxrQkFBa0Isb0JBQW9CLHVDQUF1Qyx1RUFBVSxXQUFXLEdBQUcsd0JBQXdCLEVBQUUsMEVBQU0sSUFBSSxRQUFRLG1EQUFDLElBQUksT0FBTyxvR0FBQyxNQUFNLEtBQUssb0JBQWdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnJqQjtBQUNBO0FBQ0E7QUFDQTtBQUNnRyxnQkFBZ0IsbUJBQW1CLGdaQUFnWiwyQkFBMkIsZ0NBQWdDLHdCQUF3QiwyRUFBMkUsc0NBQXNDLFNBQVMsZ0lBQWdJLG9DQUFvQyxxRUFBcUUsT0FBTyxhQUFhLHdCQUF3Qix1QkFBdUIsbUJBQW1CLGdCQUFnQiwrRUFBK0UsT0FBTyxhQUFhLHlCQUF5QixJQUFJLFFBQVEsc0VBQUMsRUFBRSxtQ0FBbUMsRUFBRSxPQUFPLHVEQUFDLGdDQUFnQyxZQUFZLGlCQUFpQixFQUEyRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL3Jlc3QvcXVlcnkvZXhlY3V0ZVJlbGF0aW9uc2hpcFF1ZXJ5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL3Jlc3QvcXVlcnkvb3BlcmF0aW9ucy9xdWVyeVJlbGF0ZWRSZWNvcmRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7cGFyc2VVcmwgYXMgdH1mcm9tXCIuLi91dGlscy5qc1wiO2ltcG9ydHtleGVjdXRlUmVsYXRpb25zaGlwUXVlcnkgYXMgcixleGVjdXRlUmVsYXRpb25zaGlwUXVlcnlGb3JDb3VudCBhcyBlfWZyb21cIi4vb3BlcmF0aW9ucy9xdWVyeVJlbGF0ZWRSZWNvcmRzLmpzXCI7aW1wb3J0IG8gZnJvbVwiLi4vc3VwcG9ydC9GZWF0dXJlU2V0LmpzXCI7aW1wb3J0IHMgZnJvbVwiLi4vc3VwcG9ydC9SZWxhdGlvbnNoaXBRdWVyeS5qc1wiO2FzeW5jIGZ1bmN0aW9uIG4oZSxuLHUpe249cy5mcm9tKG4pO2NvbnN0IGE9dChlKTtyZXR1cm4gcihhLG4sdSkudGhlbigodD0+e2NvbnN0IHI9dC5kYXRhLGU9e307cmV0dXJuIE9iamVjdC5rZXlzKHIpLmZvckVhY2goKHQ9PmVbdF09by5mcm9tSlNPTihyW3RdKSkpLGV9KSl9YXN5bmMgZnVuY3Rpb24gdShyLG8sbil7bz1zLmZyb20obyk7Y29uc3QgdT10KHIpO3JldHVybiBlKHUsbyx7Li4ubn0pLnRoZW4oKHQ9PnQuZGF0YSkpfWV4cG9ydHtuIGFzIGV4ZWN1dGVSZWxhdGlvbnNoaXBRdWVyeSx1IGFzIGV4ZWN1dGVSZWxhdGlvbnNoaXBRdWVyeUZvckNvdW50fTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjI3L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnQgZSBmcm9tXCIuLi8uLi8uLi9yZXF1ZXN0LmpzXCI7aW1wb3J0e21hcFBhcmFtZXRlcnMgYXMgdH1mcm9tXCIuLi8uLi9vcGVyYXRpb25zL3VybFV0aWxzLmpzXCI7ZnVuY3Rpb24gbyhlLHQpe2NvbnN0IG89ZS50b0pTT04oKTtyZXR1cm4gby5vYmplY3RJZHMmJihvLm9iamVjdElkcz1vLm9iamVjdElkcy5qb2luKFwiLFwiKSksby5vcmRlckJ5RmllbGRzJiYoby5vcmRlckJ5RmllbGRzPW8ub3JkZXJCeUZpZWxkcy5qb2luKFwiLFwiKSksby5vdXRGaWVsZHMmJiF0Py5yZXR1cm5Db3VudE9ubHk/by5vdXRGaWVsZHMuaW5jbHVkZXMoXCIqXCIpP28ub3V0RmllbGRzPVwiKlwiOm8ub3V0RmllbGRzPW8ub3V0RmllbGRzLmpvaW4oXCIsXCIpOmRlbGV0ZSBvLm91dEZpZWxkcyxvLm91dFNwYXRpYWxSZWZlcmVuY2UmJihvLm91dFNSPW8ub3V0U1Iud2tpZHx8SlNPTi5zdHJpbmdpZnkoby5vdXRTUi50b0pTT04oKSksZGVsZXRlIG8ub3V0U3BhdGlhbFJlZmVyZW5jZSksby5keW5hbWljRGF0YVNvdXJjZSYmKG8ubGF5ZXI9SlNPTi5zdHJpbmdpZnkoe3NvdXJjZTpvLmR5bmFtaWNEYXRhU291cmNlfSksZGVsZXRlIG8uZHluYW1pY0RhdGFTb3VyY2UpLG99YXN5bmMgZnVuY3Rpb24gcihlLHQsbyl7Y29uc3Qgcj1hd2FpdCBuKGUsdCxvKSxzPXIuZGF0YSxhPXMuZ2VvbWV0cnlUeXBlLGQ9cy5zcGF0aWFsUmVmZXJlbmNlLGM9e307Zm9yKGNvbnN0IG4gb2Ygcy5yZWxhdGVkUmVjb3JkR3JvdXBzKXtjb25zdCBlPXtmaWVsZHM6dm9pZCAwLG9iamVjdElkRmllbGROYW1lOnZvaWQgMCxnZW9tZXRyeVR5cGU6YSxzcGF0aWFsUmVmZXJlbmNlOmQsaGFzWjohIXMuaGFzWixoYXNNOiEhcy5oYXNNLGZlYXR1cmVzOm4ucmVsYXRlZFJlY29yZHN9O2lmKG51bGwhPW4ub2JqZWN0SWQpY1tuLm9iamVjdElkXT1lO2Vsc2UgZm9yKGNvbnN0IHQgb2YgT2JqZWN0LmtleXMobikpXCJyZWxhdGVkUmVjb3Jkc1wiIT09dCYmKGNbblt0XV09ZSl9cmV0dXJuey4uLnIsZGF0YTpjfX1hc3luYyBmdW5jdGlvbiBzKGUsdCxvKXtjb25zdCByPWF3YWl0IG4oZSx0LG8se3JldHVybkNvdW50T25seTohMH0pLHM9ci5kYXRhLGE9e307Zm9yKGNvbnN0IG4gb2Ygcy5yZWxhdGVkUmVjb3JkR3JvdXBzKW51bGwhPW4ub2JqZWN0SWQmJihhW24ub2JqZWN0SWRdPW4uY291bnQpO3JldHVybnsuLi5yLGRhdGE6YX19YXN5bmMgZnVuY3Rpb24gbihyLHMsbj17fSxhKXtjb25zdCBkPXQoey4uLnIucXVlcnksZjpcImpzb25cIiwuLi5hLC4uLm8ocyxhKX0pO3JldHVybiBlKHIucGF0aCtcIi9xdWVyeVJlbGF0ZWRSZWNvcmRzXCIsey4uLm4scXVlcnk6ey4uLm4ucXVlcnksLi4uZH19KX1leHBvcnR7ciBhcyBleGVjdXRlUmVsYXRpb25zaGlwUXVlcnkscyBhcyBleGVjdXRlUmVsYXRpb25zaGlwUXVlcnlGb3JDb3VudCxvIGFzIHRvUXVlcnlTdHJpbmdQYXJhbWV0ZXJzfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==