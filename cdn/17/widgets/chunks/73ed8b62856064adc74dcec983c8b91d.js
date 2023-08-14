"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_esm_calcite-sortable-list_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-sortable-list.entry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-sortable-list.entry.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_sortable_list": () => (/* binding */ SortableList)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _sortableComponent_8d7c9c05_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sortableComponent-8d7c9c05.js */ "./node_modules/@esri/calcite-components/dist/esm/sortableComponent-8d7c9c05.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */









const CSS = {
  sortItem: "sort-item",
  container: "container",
  containerHorizontal: "container--horizontal",
  containerVertical: "container--vertical"
};

const sortableListCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;flex:1 1 auto}.container--vertical{flex-direction:column}.container--horizontal{flex-direction:row}";

const SortableList = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteListOrderChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListOrderChange", 6);
    this.items = [];
    this.mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_2__.c)("mutation", () => {
      this.setUpSorting();
    });
    this.dragSelector = undefined;
    this.group = undefined;
    this.handleSelector = "calcite-handle";
    this.layout = "vertical";
    this.disabled = false;
    this.loading = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.setUpSorting();
    this.beginObserving();
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_sortableComponent_8d7c9c05_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    this.endObserving();
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  calciteHandleNudgeNextHandler(event) {
    this.handleNudgeEvent(event);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  handleNudgeEvent(event) {
    const { direction } = event.detail;
    const handle = event
      .composedPath()
      .find((el) => el.matches(this.handleSelector));
    const sortItem = this.items.find((item) => {
      return item.contains(handle) || event.composedPath().includes(item);
    });
    const lastIndex = this.items.length - 1;
    const startingIndex = this.items.indexOf(sortItem);
    let appendInstead = false;
    let buddyIndex;
    if (direction === "up") {
      if (startingIndex === 0) {
        appendInstead = true;
      }
      else {
        buddyIndex = startingIndex - 1;
      }
    }
    else {
      if (startingIndex === lastIndex) {
        buddyIndex = 0;
      }
      else if (startingIndex === lastIndex - 1) {
        appendInstead = true;
      }
      else {
        buddyIndex = startingIndex + 2;
      }
    }
    this.endObserving();
    if (appendInstead) {
      sortItem.parentElement.appendChild(sortItem);
    }
    else {
      sortItem.parentElement.insertBefore(sortItem, this.items[buddyIndex]);
    }
    this.items = Array.from(this.el.children);
    this.beginObserving();
    requestAnimationFrame(() => (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_4__.f)(handle));
    if ("activated" in handle) {
      handle.activated = true;
    }
  }
  setUpSorting() {
    const { dragSelector, group, handleSelector } = this;
    this.items = Array.from(this.el.children);
    const sortableOptions = {
      dataIdAttr: "id",
      group,
      handle: handleSelector,
      onStart: () => {
        this.endObserving();
        (0,_sortableComponent_8d7c9c05_js__WEBPACK_IMPORTED_MODULE_3__.o)(this);
      },
      onEnd: () => {
        (0,_sortableComponent_8d7c9c05_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
        this.beginObserving();
      },
      onUpdate: () => {
        this.items = Array.from(this.el.children);
        this.calciteListOrderChange.emit();
      }
    };
    if (dragSelector) {
      sortableOptions.draggable = dragSelector;
    }
    (0,_sortableComponent_8d7c9c05_js__WEBPACK_IMPORTED_MODULE_3__.c)(this, sortableOptions);
  }
  beginObserving() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }
  endObserving() {
    this.mutationObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { layout } = this;
    const horizontal = layout === "horizontal" || false;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.container]: true,
        [CSS.containerVertical]: !horizontal,
        [CSS.containerHorizontal]: horizontal
      } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
SortableList.style = sortableListCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createObserver)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
  const Observer = getObserver(type);
  return new Observer(callback, options);
}
function getObserver(type) {
  // based on https://github.com/whatwg/dom/issues/126#issuecomment-1049814948
  class ExtendedMutationObserver extends window.MutationObserver {
    constructor(callback) {
      super(callback);
      this.observedEntry = [];
      this.callback = callback;
    }
    observe(target, options) {
      this.observedEntry.push({ target, options });
      return super.observe(target, options);
    }
    unobserve(target) {
      const newObservedEntries = this.observedEntry.filter((observed) => observed.target !== target);
      this.observedEntry = [];
      this.callback(super.takeRecords(), this);
      this.disconnect();
      newObservedEntries.forEach((observed) => this.observe(observed.target, observed.options));
    }
  }
  return (function () {
    return (type === "intersection"
      ? window.IntersectionObserver
      : type === "mutation"
        ? ExtendedMutationObserver
        : window.ResizeObserver);
  })();
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNzNlZDhiNjI4NTYwNjRhZGM3NGRjZWM5ODNjOGI5MWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrRztBQUMwQjtBQUM5RDtBQUM0RjtBQUNwRztBQUN2QjtBQUNIO0FBQ0s7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLDJCQUEyQix3QkFBd0Isd0NBQXdDLE1BQU0seUNBQXlDLE1BQU0saUVBQWlFLGtFQUFrRSxnQkFBZ0IsYUFBYSxrQkFBa0IsZUFBZSx5QkFBeUIsaUJBQWlCLDJDQUEyQyxtREFBbUQsb0JBQW9CLE1BQU0sYUFBYSx5R0FBeUcsVUFBVSxXQUFXLGFBQWEsY0FBYyxxQkFBcUIsc0JBQXNCLHVCQUF1QixtQkFBbUI7O0FBRTNtRTtBQUNBO0FBQ0EsSUFBSSxxREFBZ0I7QUFDcEIsa0NBQWtDLHFEQUFXO0FBQzdDO0FBQ0EsNEJBQTRCLHlEQUFjO0FBQzFDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLDJEQUFxQjtBQUN6QixJQUFJLGlFQUEyQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbURBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0NBQXNDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBYztBQUN0QixPQUFPO0FBQ1A7QUFDQSxRQUFRLGlFQUFZO0FBQ3BCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUF3QjtBQUM1QjtBQUNBO0FBQ0EsOENBQThDLGdDQUFnQztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBLFlBQVkscURBQUMsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUUscURBQUM7QUFDWjtBQUNBLGFBQWEsT0FBTyxxREFBVTtBQUM5QjtBQUNBOztBQUVpRDs7Ozs7Ozs7Ozs7Ozs7O0FDOUpqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1zb3J0YWJsZS1saXN0LmVudHJ5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL29ic2VydmVycy05NWU5N2ZhZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTBlYjEzNjAwLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5pbXBvcnQgeyBkIGFzIGRpc2Nvbm5lY3RTb3J0YWJsZUNvbXBvbmVudCwgYyBhcyBjb25uZWN0U29ydGFibGVDb21wb25lbnQsIG8gYXMgb25Tb3J0aW5nU3RhcnQsIGEgYXMgb25Tb3J0aW5nRW5kIH0gZnJvbSAnLi9zb3J0YWJsZUNvbXBvbmVudC04ZDdjOWMwNS5qcyc7XG5pbXBvcnQgeyBmIGFzIGZvY3VzRWxlbWVudCB9IGZyb20gJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCAnLi9icm93c2VyLTk5YmM2MmNmLmpzJztcbmltcG9ydCAnLi9ndWlkLTcxMzY5NzRiLmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIHNvcnRJdGVtOiBcInNvcnQtaXRlbVwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNvbnRhaW5lckhvcml6b250YWw6IFwiY29udGFpbmVyLS1ob3Jpem9udGFsXCIsXG4gIGNvbnRhaW5lclZlcnRpY2FsOiBcImNvbnRhaW5lci0tdmVydGljYWxcIlxufTtcblxuY29uc3Qgc29ydGFibGVMaXN0Q3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7ZGlzcGxheTpmbGV4fTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX0uY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvfS5jb250YWluZXItLXZlcnRpY2Fse2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uY29udGFpbmVyLS1ob3Jpem9udGFse2ZsZXgtZGlyZWN0aW9uOnJvd31cIjtcblxuY29uc3QgU29ydGFibGVMaXN0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0T3JkZXJDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0T3JkZXJDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRVcFNvcnRpbmcoKTtcbiAgICB9KTtcbiAgICB0aGlzLmRyYWdTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmdyb3VwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0b3IgPSBcImNhbGNpdGUtaGFuZGxlXCI7XG4gICAgdGhpcy5sYXlvdXQgPSBcInZlcnRpY2FsXCI7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5zZXRVcFNvcnRpbmcoKTtcbiAgICB0aGlzLmJlZ2luT2JzZXJ2aW5nKCk7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBkaXNjb25uZWN0U29ydGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy5lbmRPYnNlcnZpbmcoKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIGNhbGNpdGVIYW5kbGVOdWRnZU5leHRIYW5kbGVyKGV2ZW50KSB7XG4gICAgdGhpcy5oYW5kbGVOdWRnZUV2ZW50KGV2ZW50KTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhhbmRsZU51ZGdlRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IGRpcmVjdGlvbiB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIGNvbnN0IGhhbmRsZSA9IGV2ZW50XG4gICAgICAuY29tcG9zZWRQYXRoKClcbiAgICAgIC5maW5kKChlbCkgPT4gZWwubWF0Y2hlcyh0aGlzLmhhbmRsZVNlbGVjdG9yKSk7XG4gICAgY29uc3Qgc29ydEl0ZW0gPSB0aGlzLml0ZW1zLmZpbmQoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBpdGVtLmNvbnRhaW5zKGhhbmRsZSkgfHwgZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaXRlbSk7XG4gICAgfSk7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHN0YXJ0aW5nSW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2Yoc29ydEl0ZW0pO1xuICAgIGxldCBhcHBlbmRJbnN0ZWFkID0gZmFsc2U7XG4gICAgbGV0IGJ1ZGR5SW5kZXg7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgICBpZiAoc3RhcnRpbmdJbmRleCA9PT0gMCkge1xuICAgICAgICBhcHBlbmRJbnN0ZWFkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBidWRkeUluZGV4ID0gc3RhcnRpbmdJbmRleCAtIDE7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHN0YXJ0aW5nSW5kZXggPT09IGxhc3RJbmRleCkge1xuICAgICAgICBidWRkeUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHN0YXJ0aW5nSW5kZXggPT09IGxhc3RJbmRleCAtIDEpIHtcbiAgICAgICAgYXBwZW5kSW5zdGVhZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYnVkZHlJbmRleCA9IHN0YXJ0aW5nSW5kZXggKyAyO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVuZE9ic2VydmluZygpO1xuICAgIGlmIChhcHBlbmRJbnN0ZWFkKSB7XG4gICAgICBzb3J0SXRlbS5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHNvcnRJdGVtKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzb3J0SXRlbS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShzb3J0SXRlbSwgdGhpcy5pdGVtc1tidWRkeUluZGV4XSk7XG4gICAgfVxuICAgIHRoaXMuaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuZWwuY2hpbGRyZW4pO1xuICAgIHRoaXMuYmVnaW5PYnNlcnZpbmcoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gZm9jdXNFbGVtZW50KGhhbmRsZSkpO1xuICAgIGlmIChcImFjdGl2YXRlZFwiIGluIGhhbmRsZSkge1xuICAgICAgaGFuZGxlLmFjdGl2YXRlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHNldFVwU29ydGluZygpIHtcbiAgICBjb25zdCB7IGRyYWdTZWxlY3RvciwgZ3JvdXAsIGhhbmRsZVNlbGVjdG9yIH0gPSB0aGlzO1xuICAgIHRoaXMuaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuZWwuY2hpbGRyZW4pO1xuICAgIGNvbnN0IHNvcnRhYmxlT3B0aW9ucyA9IHtcbiAgICAgIGRhdGFJZEF0dHI6IFwiaWRcIixcbiAgICAgIGdyb3VwLFxuICAgICAgaGFuZGxlOiBoYW5kbGVTZWxlY3RvcixcbiAgICAgIG9uU3RhcnQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5lbmRPYnNlcnZpbmcoKTtcbiAgICAgICAgb25Tb3J0aW5nU3RhcnQodGhpcyk7XG4gICAgICB9LFxuICAgICAgb25FbmQ6ICgpID0+IHtcbiAgICAgICAgb25Tb3J0aW5nRW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJlZ2luT2JzZXJ2aW5nKCk7XG4gICAgICB9LFxuICAgICAgb25VcGRhdGU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IEFycmF5LmZyb20odGhpcy5lbC5jaGlsZHJlbik7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUxpc3RPcmRlckNoYW5nZS5lbWl0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoZHJhZ1NlbGVjdG9yKSB7XG4gICAgICBzb3J0YWJsZU9wdGlvbnMuZHJhZ2dhYmxlID0gZHJhZ1NlbGVjdG9yO1xuICAgIH1cbiAgICBjb25uZWN0U29ydGFibGVDb21wb25lbnQodGhpcywgc29ydGFibGVPcHRpb25zKTtcbiAgfVxuICBiZWdpbk9ic2VydmluZygpIHtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gIH1cbiAgZW5kT2JzZXJ2aW5nKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYXlvdXQgfSA9IHRoaXM7XG4gICAgY29uc3QgaG9yaXpvbnRhbCA9IGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgfHwgZmFsc2U7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5jb250YWluZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTLmNvbnRhaW5lclZlcnRpY2FsXTogIWhvcml6b250YWwsXG4gICAgICAgIFtDU1MuY29udGFpbmVySG9yaXpvbnRhbF06IGhvcml6b250YWxcbiAgICAgIH0gfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuU29ydGFibGVMaXN0LnN0eWxlID0gc29ydGFibGVMaXN0Q3NzO1xuXG5leHBvcnQgeyBTb3J0YWJsZUxpc3QgYXMgY2FsY2l0ZV9zb3J0YWJsZV9saXN0IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuLyoqXG4gKiBUaGlzIHV0aWxpdHkgZW5zdXJlcyBvYnNlcnZlcnMgYXJlIGNyZWF0ZWQgb25seSBmb3IgYnJvd3NlciBjb250ZXh0cy5cbiAqXG4gKiBAcGFyYW0gdHlwZSAtIHRoZSB0eXBlIG9mIG9ic2VydmVyIHRvIGNyZWF0ZVxuICogQHBhcmFtIGNhbGxiYWNrIC0gdGhlIG9ic2VydmVyIGNhbGxiYWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIHRoZSBvYnNlcnZlciBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKHR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIGNvbnN0IE9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIodHlwZSk7XG4gIHJldHVybiBuZXcgT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIodHlwZSkge1xuICAvLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2RvbS9pc3N1ZXMvMTI2I2lzc3VlY29tbWVudC0xMDQ5ODE0OTQ4XG4gIGNsYXNzIEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlciBleHRlbmRzIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xuICAgICAgc3VwZXIoY2FsbGJhY2spO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIG9ic2VydmUodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkucHVzaCh7IHRhcmdldCwgb3B0aW9ucyB9KTtcbiAgICAgIHJldHVybiBzdXBlci5vYnNlcnZlKHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHVub2JzZXJ2ZSh0YXJnZXQpIHtcbiAgICAgIGNvbnN0IG5ld09ic2VydmVkRW50cmllcyA9IHRoaXMub2JzZXJ2ZWRFbnRyeS5maWx0ZXIoKG9ic2VydmVkKSA9PiBvYnNlcnZlZC50YXJnZXQgIT09IHRhcmdldCk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2soc3VwZXIudGFrZVJlY29yZHMoKSwgdGhpcyk7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgIG5ld09ic2VydmVkRW50cmllcy5mb3JFYWNoKChvYnNlcnZlZCkgPT4gdGhpcy5vYnNlcnZlKG9ic2VydmVkLnRhcmdldCwgb2JzZXJ2ZWQub3B0aW9ucykpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHR5cGUgPT09IFwiaW50ZXJzZWN0aW9uXCJcbiAgICAgID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyXG4gICAgICA6IHR5cGUgPT09IFwibXV0YXRpb25cIlxuICAgICAgICA/IEV4dGVuZGVkTXV0YXRpb25PYnNlcnZlclxuICAgICAgICA6IHdpbmRvdy5SZXNpemVPYnNlcnZlcik7XG4gIH0pKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU9ic2VydmVyIGFzIGMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==