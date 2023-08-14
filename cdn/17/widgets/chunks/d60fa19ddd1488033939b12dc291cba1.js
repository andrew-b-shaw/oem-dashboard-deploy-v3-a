"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-pagination_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-pagination.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-pagination.entry.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_pagination": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */










const CSS = {
  page: "page",
  selected: "is-selected",
  previous: "previous",
  next: "next",
  disabled: "is-disabled",
  ellipsis: "ellipsis",
  ellipsisStart: "ellipsis--start",
  ellipsisEnd: "ellipsis--end"
};

const paginationCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([scale=s]){--calcite-pagination-spacing-internal:0.25rem 0.5rem}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{block-size:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .previous,:host([scale=s]) .next{padding-inline:0.25rem}:host([scale=m]){--calcite-pagination-spacing-internal:0.5rem 0.75rem}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{block-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .previous,:host([scale=m]) .next{padding-inline:0.5rem}:host([scale=l]){--calcite-pagination-spacing-internal:0.75rem 1rem}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .previous,:host([scale=l]) .next{padding-inline:1rem}:host{display:flex;writing-mode:horizontal-tb}:host button{outline-color:transparent}:host button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.previous,.next,.page{box-sizing:border-box;display:flex;cursor:pointer;align-items:center;border-style:none;--tw-border-opacity:0;background-color:transparent;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3);border-block:2px solid transparent}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.page:hover{border-block-end-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-block-end-color:var(--calcite-ui-brand)}.previous:hover,.next:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-brand)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{pointer-events:none;background-color:transparent}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:var(--calcite-ui-opacity-disabled)}.next{margin-inline-end:0px}.page,.ellipsis{padding:var(--calcite-pagination-spacing-internal)}.ellipsis{display:flex;align-items:flex-end;color:var(--calcite-ui-text-3)}";

const maxPagesDisplayed = 5;
const Pagination = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calcitePaginationChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calcitePaginationChange", 6);
    this.previousClicked = () => {
      this.previousPage().then();
      this.emitUpdate();
    };
    this.nextClicked = () => {
      this.nextPage();
      this.emitUpdate();
    };
    this.groupSeparator = false;
    this.messageOverrides = undefined;
    this.pageSize = 20;
    this.numberingSystem = undefined;
    this.startItem = 1;
    this.totalItems = 0;
    this.scale = "m";
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.messages = undefined;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
  }
  effectiveLocaleWatcher() {
    _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_2__.n.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  async componentWillLoad() {
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
  }
  disconnectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    this.el.focus();
  }
  /** Go to the next page of results. */
  async nextPage() {
    this.startItem = Math.min(this.getLastStart(), this.startItem + this.pageSize);
  }
  /** Go to the previous page of results. */
  async previousPage() {
    this.startItem = Math.max(1, this.startItem - this.pageSize);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  getLastStart() {
    const { totalItems, pageSize } = this;
    const lastStart = totalItems % pageSize === 0
      ? totalItems - pageSize
      : Math.floor(totalItems / pageSize) * pageSize;
    return lastStart + 1;
  }
  showLeftEllipsis() {
    return Math.floor(this.startItem / this.pageSize) > 3;
  }
  showRightEllipsis() {
    return (this.totalItems - this.startItem) / this.pageSize > 3;
  }
  emitUpdate() {
    this.calcitePaginationChange.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderPages() {
    const lastStart = this.getLastStart();
    let end;
    let nextStart;
    // if we don't need ellipses render the whole set
    if (this.totalItems / this.pageSize <= maxPagesDisplayed) {
      nextStart = 1 + this.pageSize;
      end = lastStart - this.pageSize;
    }
    else {
      // if we're within max pages of page 1
      if (this.startItem / this.pageSize < maxPagesDisplayed - 1) {
        nextStart = 1 + this.pageSize;
        end = 1 + 4 * this.pageSize;
      }
      else {
        // if we're within max pages of last page
        if (this.startItem + 3 * this.pageSize >= this.totalItems) {
          nextStart = lastStart - 4 * this.pageSize;
          end = lastStart - this.pageSize;
        }
        else {
          nextStart = this.startItem - this.pageSize;
          end = this.startItem + this.pageSize;
        }
      }
    }
    const pages = [];
    while (nextStart <= end) {
      pages.push(nextStart);
      nextStart = nextStart + this.pageSize;
    }
    return pages.map((page) => this.renderPage(page));
  }
  renderPage(start) {
    const page = Math.floor(start / this.pageSize) + (this.pageSize === 1 ? 0 : 1);
    _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_2__.n.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    };
    const displayedPage = _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_2__.n.localize(page.toString());
    const selected = start === this.startItem;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-current": selected ? "page" : "false", class: {
        [CSS.page]: true,
        [CSS.selected]: selected
      }, onClick: () => {
        this.startItem = start;
        this.emitUpdate();
      } }, displayedPage));
  }
  renderLeftEllipsis() {
    if (this.totalItems / this.pageSize > maxPagesDisplayed && this.showLeftEllipsis()) {
      return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: `${CSS.ellipsis} ${CSS.ellipsisStart}` }, "\u2026");
    }
  }
  renderRightEllipsis() {
    if (this.totalItems / this.pageSize > maxPagesDisplayed && this.showRightEllipsis()) {
      return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: `${CSS.ellipsis} ${CSS.ellipsisEnd}` }, "\u2026");
    }
  }
  render() {
    const { totalItems, pageSize, startItem } = this;
    const prevDisabled = pageSize === 1 ? startItem <= pageSize : startItem < pageSize;
    const nextDisabled = pageSize === 1 ? startItem + pageSize > totalItems : startItem + pageSize > totalItems;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.F, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.messages.previous, class: {
        [CSS.previous]: true,
        [CSS.disabled]: prevDisabled
      }, disabled: prevDisabled, onClick: this.previousClicked }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { flipRtl: true, icon: "chevronLeft", scale: this.scale === "l" ? "m" : "s" })), totalItems > pageSize ? this.renderPage(1) : null, this.renderLeftEllipsis(), this.renderPages(), this.renderRightEllipsis(), this.renderPage(this.getLastStart()), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.messages.next, class: {
        [CSS.next]: true,
        [CSS.disabled]: nextDisabled
      }, disabled: nextDisabled, onClick: this.nextClicked }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { flipRtl: true, icon: "chevronRight", scale: this.scale === "l" ? "m" : "s" }))));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange", "effectiveLocaleWatcher"]
  }; }
};
Pagination.style = paginationCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ setComponentLoaded),
/* harmony export */   "c": () => (/* binding */ componentLoaded),
/* harmony export */   "s": () => (/* binding */ setUpLoadableComponent)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
const resolveMap = new WeakMap();
const promiseMap = new WeakMap();
/**
 * This helper util sets up the component for the ability to know when the component has been loaded.
 *
 * This should be used in the `componentWillLoad` lifecycle hook.
 *
 * ```
 * componentWillLoad(): void {
 *   setUpLoadableComponent(this);
 * }
 * ```
 *
 * @param component
 */
function setUpLoadableComponent(component) {
  promiseMap.set(component, new Promise((resolve) => resolveMap.set(component, resolve)));
}
/**
 * This helper util lets the loadable component know that it is now loaded.
 *
 * This should be used in the `componentDidLoad` lifecycle hook.
 *
 * ```
 * componentDidLoad(): void {
 *   setComponentLoaded(this);
 * }
 * ```
 *
 * @param component
 */
function setComponentLoaded(component) {
  resolveMap.get(component)();
}
/**
 * This helper util can be used to ensure a component has been loaded (The "componentDidLoad" stencil lifecycle method has been called).
 *
 * Requires "setUpLoadableComponent" and "setComponentLoaded" to be called first.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first.
 *
 * ```
 * async setFocus(): Promise<void> {
 *   await componentLoaded(this);
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
function componentLoaded(component) {
  return promiseMap.get(component);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZDYwZmExOWRkZDE0ODgwMzM5MzliMTJkYzI5MWNiYTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUg7QUFDRztBQUNEO0FBQ1E7QUFDaEc7QUFDQztBQUNLO0FBQ047QUFDTTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsaUJBQWlCLHFEQUFxRCx5RUFBeUUsa0JBQWtCLHNDQUFzQyxpQkFBaUIsa0RBQWtELHVCQUF1QixpQkFBaUIscURBQXFELHlFQUF5RSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixrREFBa0Qsc0JBQXNCLGlCQUFpQixtREFBbUQseUVBQXlFLG1CQUFtQixxQ0FBcUMsb0JBQW9CLGtEQUFrRCxvQkFBb0IsTUFBTSxhQUFhLDJCQUEyQixhQUFhLDBCQUEwQixtQkFBbUIseUVBQXlFLHFQQUFxUCxzQkFBc0Isc0JBQXNC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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtcGFnaW5hdGlvbi5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9sb2FkYWJsZS04MDU4ZTMwMC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBGIGFzIEZyYWdtZW50LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IHMgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYSBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS04MDU4ZTMwMC5qcyc7XG5pbXBvcnQgeyBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciwgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLWZhYzEzMzk0LmpzJztcbmltcG9ydCAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0ICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy0zNDJlMTJkMS5qcyc7XG5pbXBvcnQgJy4va2V5LThmZjBkMTAxLmpzJztcbmltcG9ydCAnLi9vYnNlcnZlcnMtOTVlOTdmYWUuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIHBhZ2U6IFwicGFnZVwiLFxuICBzZWxlY3RlZDogXCJpcy1zZWxlY3RlZFwiLFxuICBwcmV2aW91czogXCJwcmV2aW91c1wiLFxuICBuZXh0OiBcIm5leHRcIixcbiAgZGlzYWJsZWQ6IFwiaXMtZGlzYWJsZWRcIixcbiAgZWxsaXBzaXM6IFwiZWxsaXBzaXNcIixcbiAgZWxsaXBzaXNTdGFydDogXCJlbGxpcHNpcy0tc3RhcnRcIixcbiAgZWxsaXBzaXNFbmQ6IFwiZWxsaXBzaXMtLWVuZFwiXG59O1xuXG5jb25zdCBwYWdpbmF0aW9uQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtcGFnaW5hdGlvbi1zcGFjaW5nLWludGVybmFsOjAuMjVyZW0gMC41cmVtfTpob3N0KFtzY2FsZT1zXSkgLnByZXZpb3VzLDpob3N0KFtzY2FsZT1zXSkgLm5leHQsOmhvc3QoW3NjYWxlPXNdKSAucGFnZXtibG9jay1zaXplOjEuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPXNdKSAucHJldmlvdXMsOmhvc3QoW3NjYWxlPXNdKSAubmV4dHtwYWRkaW5nLWlubGluZTowLjI1cmVtfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLXBhZ2luYXRpb24tc3BhY2luZy1pbnRlcm5hbDowLjVyZW0gMC43NXJlbX06aG9zdChbc2NhbGU9bV0pIC5wcmV2aW91cyw6aG9zdChbc2NhbGU9bV0pIC5uZXh0LDpob3N0KFtzY2FsZT1tXSkgLnBhZ2V7YmxvY2stc2l6ZToycmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bV0pIC5wcmV2aW91cyw6aG9zdChbc2NhbGU9bV0pIC5uZXh0e3BhZGRpbmctaW5saW5lOjAuNXJlbX06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1wYWdpbmF0aW9uLXNwYWNpbmctaW50ZXJuYWw6MC43NXJlbSAxcmVtfTpob3N0KFtzY2FsZT1sXSkgLnByZXZpb3VzLDpob3N0KFtzY2FsZT1sXSkgLm5leHQsOmhvc3QoW3NjYWxlPWxdKSAucGFnZXtibG9jay1zaXplOjIuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19Omhvc3QoW3NjYWxlPWxdKSAucHJldmlvdXMsOmhvc3QoW3NjYWxlPWxdKSAubmV4dHtwYWRkaW5nLWlubGluZToxcmVtfTpob3N0e2Rpc3BsYXk6ZmxleDt3cml0aW5nLW1vZGU6aG9yaXpvbnRhbC10Yn06aG9zdCBidXR0b257b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH06aG9zdCBidXR0b246Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5wcmV2aW91cywubmV4dCwucGFnZXtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItc3R5bGU6bm9uZTstLXR3LWJvcmRlci1vcGFjaXR5OjA7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTtib3JkZXItYmxvY2s6MnB4IHNvbGlkIHRyYW5zcGFyZW50fS5wcmV2aW91czpob3ZlciwubmV4dDpob3ZlciwucGFnZTpob3Zlcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHN9LnBhZ2U6aG92ZXJ7Ym9yZGVyLWJsb2NrLWVuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKX0ucGFnZS5pcy1zZWxlY3RlZHtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2JvcmRlci1ibG9jay1lbmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9LnByZXZpb3VzOmhvdmVyLC5uZXh0OmhvdmVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS5wcmV2aW91czphY3RpdmUsLm5leHQ6YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5wcmV2aW91cy5pcy1kaXNhYmxlZCwubmV4dC5pcy1kaXNhYmxlZHtwb2ludGVyLWV2ZW50czpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LnByZXZpb3VzLmlzLWRpc2FibGVkPmNhbGNpdGUtaWNvbiwubmV4dC5pcy1kaXNhYmxlZD5jYWxjaXRlLWljb257b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfS5uZXh0e21hcmdpbi1pbmxpbmUtZW5kOjBweH0ucGFnZSwuZWxsaXBzaXN7cGFkZGluZzp2YXIoLS1jYWxjaXRlLXBhZ2luYXRpb24tc3BhY2luZy1pbnRlcm5hbCl9LmVsbGlwc2lze2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpmbGV4LWVuZDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9XCI7XG5cbmNvbnN0IG1heFBhZ2VzRGlzcGxheWVkID0gNTtcbmNvbnN0IFBhZ2luYXRpb24gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZVBhZ2luYXRpb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVQYWdpbmF0aW9uQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMucHJldmlvdXNDbGlja2VkID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcmV2aW91c1BhZ2UoKS50aGVuKCk7XG4gICAgICB0aGlzLmVtaXRVcGRhdGUoKTtcbiAgICB9O1xuICAgIHRoaXMubmV4dENsaWNrZWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLm5leHRQYWdlKCk7XG4gICAgICB0aGlzLmVtaXRVcGRhdGUoKTtcbiAgICB9O1xuICAgIHRoaXMuZ3JvdXBTZXBhcmF0b3IgPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IDIwO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhcnRJdGVtID0gMTtcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSAwO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVXYXRjaGVyKCkge1xuICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICB1c2VHcm91cGluZzogdGhpcy5ncm91cFNlcGFyYXRvclxuICAgIH07XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuICAvKiogR28gdG8gdGhlIG5leHQgcGFnZSBvZiByZXN1bHRzLiAqL1xuICBhc3luYyBuZXh0UGFnZSgpIHtcbiAgICB0aGlzLnN0YXJ0SXRlbSA9IE1hdGgubWluKHRoaXMuZ2V0TGFzdFN0YXJ0KCksIHRoaXMuc3RhcnRJdGVtICsgdGhpcy5wYWdlU2l6ZSk7XG4gIH1cbiAgLyoqIEdvIHRvIHRoZSBwcmV2aW91cyBwYWdlIG9mIHJlc3VsdHMuICovXG4gIGFzeW5jIHByZXZpb3VzUGFnZSgpIHtcbiAgICB0aGlzLnN0YXJ0SXRlbSA9IE1hdGgubWF4KDEsIHRoaXMuc3RhcnRJdGVtIC0gdGhpcy5wYWdlU2l6ZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRMYXN0U3RhcnQoKSB7XG4gICAgY29uc3QgeyB0b3RhbEl0ZW1zLCBwYWdlU2l6ZSB9ID0gdGhpcztcbiAgICBjb25zdCBsYXN0U3RhcnQgPSB0b3RhbEl0ZW1zICUgcGFnZVNpemUgPT09IDBcbiAgICAgID8gdG90YWxJdGVtcyAtIHBhZ2VTaXplXG4gICAgICA6IE1hdGguZmxvb3IodG90YWxJdGVtcyAvIHBhZ2VTaXplKSAqIHBhZ2VTaXplO1xuICAgIHJldHVybiBsYXN0U3RhcnQgKyAxO1xuICB9XG4gIHNob3dMZWZ0RWxsaXBzaXMoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5zdGFydEl0ZW0gLyB0aGlzLnBhZ2VTaXplKSA+IDM7XG4gIH1cbiAgc2hvd1JpZ2h0RWxsaXBzaXMoKSB7XG4gICAgcmV0dXJuICh0aGlzLnRvdGFsSXRlbXMgLSB0aGlzLnN0YXJ0SXRlbSkgLyB0aGlzLnBhZ2VTaXplID4gMztcbiAgfVxuICBlbWl0VXBkYXRlKCkge1xuICAgIHRoaXMuY2FsY2l0ZVBhZ2luYXRpb25DaGFuZ2UuZW1pdCgpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyUGFnZXMoKSB7XG4gICAgY29uc3QgbGFzdFN0YXJ0ID0gdGhpcy5nZXRMYXN0U3RhcnQoKTtcbiAgICBsZXQgZW5kO1xuICAgIGxldCBuZXh0U3RhcnQ7XG4gICAgLy8gaWYgd2UgZG9uJ3QgbmVlZCBlbGxpcHNlcyByZW5kZXIgdGhlIHdob2xlIHNldFxuICAgIGlmICh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLnBhZ2VTaXplIDw9IG1heFBhZ2VzRGlzcGxheWVkKSB7XG4gICAgICBuZXh0U3RhcnQgPSAxICsgdGhpcy5wYWdlU2l6ZTtcbiAgICAgIGVuZCA9IGxhc3RTdGFydCAtIHRoaXMucGFnZVNpemU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gaWYgd2UncmUgd2l0aGluIG1heCBwYWdlcyBvZiBwYWdlIDFcbiAgICAgIGlmICh0aGlzLnN0YXJ0SXRlbSAvIHRoaXMucGFnZVNpemUgPCBtYXhQYWdlc0Rpc3BsYXllZCAtIDEpIHtcbiAgICAgICAgbmV4dFN0YXJ0ID0gMSArIHRoaXMucGFnZVNpemU7XG4gICAgICAgIGVuZCA9IDEgKyA0ICogdGhpcy5wYWdlU2l6ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBpZiB3ZSdyZSB3aXRoaW4gbWF4IHBhZ2VzIG9mIGxhc3QgcGFnZVxuICAgICAgICBpZiAodGhpcy5zdGFydEl0ZW0gKyAzICogdGhpcy5wYWdlU2l6ZSA+PSB0aGlzLnRvdGFsSXRlbXMpIHtcbiAgICAgICAgICBuZXh0U3RhcnQgPSBsYXN0U3RhcnQgLSA0ICogdGhpcy5wYWdlU2l6ZTtcbiAgICAgICAgICBlbmQgPSBsYXN0U3RhcnQgLSB0aGlzLnBhZ2VTaXplO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG5leHRTdGFydCA9IHRoaXMuc3RhcnRJdGVtIC0gdGhpcy5wYWdlU2l6ZTtcbiAgICAgICAgICBlbmQgPSB0aGlzLnN0YXJ0SXRlbSArIHRoaXMucGFnZVNpemU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFnZXMgPSBbXTtcbiAgICB3aGlsZSAobmV4dFN0YXJ0IDw9IGVuZCkge1xuICAgICAgcGFnZXMucHVzaChuZXh0U3RhcnQpO1xuICAgICAgbmV4dFN0YXJ0ID0gbmV4dFN0YXJ0ICsgdGhpcy5wYWdlU2l6ZTtcbiAgICB9XG4gICAgcmV0dXJuIHBhZ2VzLm1hcCgocGFnZSkgPT4gdGhpcy5yZW5kZXJQYWdlKHBhZ2UpKTtcbiAgfVxuICByZW5kZXJQYWdlKHN0YXJ0KSB7XG4gICAgY29uc3QgcGFnZSA9IE1hdGguZmxvb3Ioc3RhcnQgLyB0aGlzLnBhZ2VTaXplKSArICh0aGlzLnBhZ2VTaXplID09PSAxID8gMCA6IDEpO1xuICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICB1c2VHcm91cGluZzogdGhpcy5ncm91cFNlcGFyYXRvclxuICAgIH07XG4gICAgY29uc3QgZGlzcGxheWVkUGFnZSA9IG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZShwYWdlLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gc3RhcnQgPT09IHRoaXMuc3RhcnRJdGVtO1xuICAgIHJldHVybiAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1jdXJyZW50XCI6IHNlbGVjdGVkID8gXCJwYWdlXCIgOiBcImZhbHNlXCIsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MucGFnZV06IHRydWUsXG4gICAgICAgIFtDU1Muc2VsZWN0ZWRdOiBzZWxlY3RlZFxuICAgICAgfSwgb25DbGljazogKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXJ0SXRlbSA9IHN0YXJ0O1xuICAgICAgICB0aGlzLmVtaXRVcGRhdGUoKTtcbiAgICAgIH0gfSwgZGlzcGxheWVkUGFnZSkpO1xuICB9XG4gIHJlbmRlckxlZnRFbGxpcHNpcygpIHtcbiAgICBpZiAodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5wYWdlU2l6ZSA+IG1heFBhZ2VzRGlzcGxheWVkICYmIHRoaXMuc2hvd0xlZnRFbGxpcHNpcygpKSB7XG4gICAgICByZXR1cm4gaChcInNwYW5cIiwgeyBjbGFzczogYCR7Q1NTLmVsbGlwc2lzfSAke0NTUy5lbGxpcHNpc1N0YXJ0fWAgfSwgXCJcXHUyMDI2XCIpO1xuICAgIH1cbiAgfVxuICByZW5kZXJSaWdodEVsbGlwc2lzKCkge1xuICAgIGlmICh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLnBhZ2VTaXplID4gbWF4UGFnZXNEaXNwbGF5ZWQgJiYgdGhpcy5zaG93UmlnaHRFbGxpcHNpcygpKSB7XG4gICAgICByZXR1cm4gaChcInNwYW5cIiwgeyBjbGFzczogYCR7Q1NTLmVsbGlwc2lzfSAke0NTUy5lbGxpcHNpc0VuZH1gIH0sIFwiXFx1MjAyNlwiKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdG90YWxJdGVtcywgcGFnZVNpemUsIHN0YXJ0SXRlbSB9ID0gdGhpcztcbiAgICBjb25zdCBwcmV2RGlzYWJsZWQgPSBwYWdlU2l6ZSA9PT0gMSA/IHN0YXJ0SXRlbSA8PSBwYWdlU2l6ZSA6IHN0YXJ0SXRlbSA8IHBhZ2VTaXplO1xuICAgIGNvbnN0IG5leHREaXNhYmxlZCA9IHBhZ2VTaXplID09PSAxID8gc3RhcnRJdGVtICsgcGFnZVNpemUgPiB0b3RhbEl0ZW1zIDogc3RhcnRJdGVtICsgcGFnZVNpemUgPiB0b3RhbEl0ZW1zO1xuICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLnByZXZpb3VzLCBjbGFzczoge1xuICAgICAgICBbQ1NTLnByZXZpb3VzXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5kaXNhYmxlZF06IHByZXZEaXNhYmxlZFxuICAgICAgfSwgZGlzYWJsZWQ6IHByZXZEaXNhYmxlZCwgb25DbGljazogdGhpcy5wcmV2aW91c0NsaWNrZWQgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGZsaXBSdGw6IHRydWUsIGljb246IFwiY2hldnJvbkxlZnRcIiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSksIHRvdGFsSXRlbXMgPiBwYWdlU2l6ZSA/IHRoaXMucmVuZGVyUGFnZSgxKSA6IG51bGwsIHRoaXMucmVuZGVyTGVmdEVsbGlwc2lzKCksIHRoaXMucmVuZGVyUGFnZXMoKSwgdGhpcy5yZW5kZXJSaWdodEVsbGlwc2lzKCksIHRoaXMucmVuZGVyUGFnZSh0aGlzLmdldExhc3RTdGFydCgpKSwgaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLm5leHQsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MubmV4dF06IHRydWUsXG4gICAgICAgIFtDU1MuZGlzYWJsZWRdOiBuZXh0RGlzYWJsZWRcbiAgICAgIH0sIGRpc2FibGVkOiBuZXh0RGlzYWJsZWQsIG9uQ2xpY2s6IHRoaXMubmV4dENsaWNrZWQgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGZsaXBSdGw6IHRydWUsIGljb246IFwiY2hldnJvblJpZ2h0XCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIiwgXCJlZmZlY3RpdmVMb2NhbGVXYXRjaGVyXCJdXG4gIH07IH1cbn07XG5QYWdpbmF0aW9uLnN0eWxlID0gcGFnaW5hdGlvbkNzcztcblxuZXhwb3J0IHsgUGFnaW5hdGlvbiBhcyBjYWxjaXRlX3BhZ2luYXRpb24gfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBzdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyBcInNldFVwTG9hZGFibGVDb21wb25lbnRcIiBhbmQgXCJzZXRDb21wb25lbnRMb2FkZWRcIiB0byBiZSBjYWxsZWQgZmlyc3QuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHByb21pc2VNYXAuZ2V0KGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IHNldENvbXBvbmVudExvYWRlZCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYywgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBzIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=