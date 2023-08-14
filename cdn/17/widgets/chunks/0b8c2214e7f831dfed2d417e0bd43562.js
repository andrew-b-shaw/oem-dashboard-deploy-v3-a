"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_esm_composed-offset-position_esm-bbcebb75_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/composed-offset-position.esm-bbcebb75.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/composed-offset-position.esm-bbcebb75.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "offsetLeft": () => (/* binding */ offsetLeft),
/* harmony export */   "offsetParent": () => (/* binding */ offsetParent),
/* harmony export */   "offsetTop": () => (/* binding */ offsetTop)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
/* eslint-disable @typescript-eslint/ban-types */
function offsetParent(element) {
    return offsetParentPolyfill(element);
}
function offsetTop(element) {
    return offsetTopLeftPolyfill(element, 'offsetTop');
}
function offsetLeft(element) {
    return offsetTopLeftPolyfill(element, 'offsetLeft');
}
function flatTreeParent(element) {
    if (element.assignedSlot) {
        return element.assignedSlot;
    }
    if (element.parentNode instanceof ShadowRoot) {
        return element.parentNode.host;
    }
    return element.parentNode;
}
function ancestorTreeScopes(element) {
    const scopes = new Set();
    let currentScope = element.getRootNode();
    while (currentScope) {
        scopes.add(currentScope);
        currentScope = currentScope.parentNode
            ? currentScope.parentNode.getRootNode()
            : null;
    }
    return scopes;
}
function offsetParentPolyfill(element) {
    // Do an initial walk to check for display:none ancestors.
    for (let ancestor = element; ancestor; ancestor = flatTreeParent(ancestor)) {
        if (!(ancestor instanceof Element)) {
            continue;
        }
        if (getComputedStyle(ancestor).display === 'none') {
            return null;
        }
    }
    for (let ancestor = flatTreeParent(element); ancestor; ancestor = flatTreeParent(ancestor)) {
        if (!(ancestor instanceof Element)) {
            continue;
        }
        const style = getComputedStyle(ancestor);
        // Display:contents nodes aren't in the layout tree so they should be skipped.
        if (style.display === 'contents') {
            continue;
        }
        if (style.position !== 'static' || style.filter !== 'none') {
            return ancestor;
        }
        if (ancestor.tagName === 'BODY') {
            return ancestor;
        }
    }
    return null;
}
function offsetTopLeftPolyfill(element, offsetTopOrLeft) {
    let value = element[offsetTopOrLeft];
    let nextOffsetParent = offsetParentPolyfill(element);
    const scopes = ancestorTreeScopes(element);
    while (nextOffsetParent && !scopes.has(nextOffsetParent.getRootNode())) {
        value -= nextOffsetParent[offsetTopOrLeft];
        nextOffsetParent = offsetParentPolyfill(nextOffsetParent);
    }
    return value;
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMGI4YzIyMTRlN2Y4MzFkZmVkMmQ0MTdlMGJkNDM1NjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxVQUFVO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jb21wb3NlZC1vZmZzZXQtcG9zaXRpb24uZXNtLWJiY2ViYjc1LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzICovXG5mdW5jdGlvbiBvZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICAgIHJldHVybiBvZmZzZXRQYXJlbnRQb2x5ZmlsbChlbGVtZW50KTtcbn1cbmZ1bmN0aW9uIG9mZnNldFRvcChlbGVtZW50KSB7XG4gICAgcmV0dXJuIG9mZnNldFRvcExlZnRQb2x5ZmlsbChlbGVtZW50LCAnb2Zmc2V0VG9wJyk7XG59XG5mdW5jdGlvbiBvZmZzZXRMZWZ0KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gb2Zmc2V0VG9wTGVmdFBvbHlmaWxsKGVsZW1lbnQsICdvZmZzZXRMZWZ0Jyk7XG59XG5mdW5jdGlvbiBmbGF0VHJlZVBhcmVudChlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmFzc2lnbmVkU2xvdDtcbiAgICB9XG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5ob3N0O1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlO1xufVxuZnVuY3Rpb24gYW5jZXN0b3JUcmVlU2NvcGVzKGVsZW1lbnQpIHtcbiAgICBjb25zdCBzY29wZXMgPSBuZXcgU2V0KCk7XG4gICAgbGV0IGN1cnJlbnRTY29wZSA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKTtcbiAgICB3aGlsZSAoY3VycmVudFNjb3BlKSB7XG4gICAgICAgIHNjb3Blcy5hZGQoY3VycmVudFNjb3BlKTtcbiAgICAgICAgY3VycmVudFNjb3BlID0gY3VycmVudFNjb3BlLnBhcmVudE5vZGVcbiAgICAgICAgICAgID8gY3VycmVudFNjb3BlLnBhcmVudE5vZGUuZ2V0Um9vdE5vZGUoKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gc2NvcGVzO1xufVxuZnVuY3Rpb24gb2Zmc2V0UGFyZW50UG9seWZpbGwoZWxlbWVudCkge1xuICAgIC8vIERvIGFuIGluaXRpYWwgd2FsayB0byBjaGVjayBmb3IgZGlzcGxheTpub25lIGFuY2VzdG9ycy5cbiAgICBmb3IgKGxldCBhbmNlc3RvciA9IGVsZW1lbnQ7IGFuY2VzdG9yOyBhbmNlc3RvciA9IGZsYXRUcmVlUGFyZW50KGFuY2VzdG9yKSkge1xuICAgICAgICBpZiAoIShhbmNlc3RvciBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShhbmNlc3RvcikuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBhbmNlc3RvciA9IGZsYXRUcmVlUGFyZW50KGVsZW1lbnQpOyBhbmNlc3RvcjsgYW5jZXN0b3IgPSBmbGF0VHJlZVBhcmVudChhbmNlc3RvcikpIHtcbiAgICAgICAgaWYgKCEoYW5jZXN0b3IgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGFuY2VzdG9yKTtcbiAgICAgICAgLy8gRGlzcGxheTpjb250ZW50cyBub2RlcyBhcmVuJ3QgaW4gdGhlIGxheW91dCB0cmVlIHNvIHRoZXkgc2hvdWxkIGJlIHNraXBwZWQuXG4gICAgICAgIGlmIChzdHlsZS5kaXNwbGF5ID09PSAnY29udGVudHMnKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09ICdzdGF0aWMnIHx8IHN0eWxlLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICByZXR1cm4gYW5jZXN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFuY2VzdG9yLnRhZ05hbWUgPT09ICdCT0RZJykge1xuICAgICAgICAgICAgcmV0dXJuIGFuY2VzdG9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gb2Zmc2V0VG9wTGVmdFBvbHlmaWxsKGVsZW1lbnQsIG9mZnNldFRvcE9yTGVmdCkge1xuICAgIGxldCB2YWx1ZSA9IGVsZW1lbnRbb2Zmc2V0VG9wT3JMZWZ0XTtcbiAgICBsZXQgbmV4dE9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudFBvbHlmaWxsKGVsZW1lbnQpO1xuICAgIGNvbnN0IHNjb3BlcyA9IGFuY2VzdG9yVHJlZVNjb3BlcyhlbGVtZW50KTtcbiAgICB3aGlsZSAobmV4dE9mZnNldFBhcmVudCAmJiAhc2NvcGVzLmhhcyhuZXh0T2Zmc2V0UGFyZW50LmdldFJvb3ROb2RlKCkpKSB7XG4gICAgICAgIHZhbHVlIC09IG5leHRPZmZzZXRQYXJlbnRbb2Zmc2V0VG9wT3JMZWZ0XTtcbiAgICAgICAgbmV4dE9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudFBvbHlmaWxsKG5leHRPZmZzZXRQYXJlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCB7IG9mZnNldExlZnQsIG9mZnNldFBhcmVudCwgb2Zmc2V0VG9wIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=