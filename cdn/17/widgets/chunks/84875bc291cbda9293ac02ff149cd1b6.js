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
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
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
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_3__.u)(this, this.effectiveLocale);
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
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
  }
  disconnectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectMessages),
/* harmony export */   "d": () => (/* binding */ disconnectMessages),
/* harmony export */   "s": () => (/* binding */ setUpMessages),
/* harmony export */   "u": () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.g)(`./assets/${component}/t9n/messages_${lang}.json`))
    .then((resp) => {
    if (!resp.ok) {
      throwMessageFetchError();
    }
    return resp.json();
  })
    .catch(() => throwMessageFetchError());
  return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
  throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
  component.messages = {
    ...component.defaultMessages,
    ...component.messageOverrides
  };
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
  component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
  mergeMessages(component);
}
async function fetchMessages(component, lang) {
  const { el } = component;
  const tag = el.tagName.toLowerCase();
  const componentName = tag.replace("calcite-", "");
  return getMessageBundle((0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_1__.g)(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
  component.defaultMessages = await fetchMessages(component, lang);
  mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
  component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
  component.onMessagesChange = undefined;
}
function defaultOnMessagesChange() {
  mergeMessages(this);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvODQ4NzViYzI5MWNiZGE5MjkzYWMwMmZmMTQ5Y2QxYjYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUg7QUFDRztBQUNEO0FBQ1E7QUFDaEc7QUFDQztBQUNLO0FBQ047QUFDTTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsaUJBQWlCLHFEQUFxRCx5RUFBeUUsa0JBQWtCLHNDQUFzQyxpQkFBaUIsa0RBQWtELHVCQUF1QixpQkFBaUIscURBQXFELHlFQUF5RSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixrREFBa0Qsc0JBQXNCLGlCQUFpQixtREFBbUQseUVBQXlFLG1CQUFtQixxQ0FBcUMsb0JBQW9CLGtEQUFrRCxvQkFBb0IsTUFBTSxhQUFhLDJCQUEyQixhQUFhLDBCQUEwQixtQkFBbUIseUVBQXlFLHFQQUFxUCxzQkFBc0Isc0JBQXNCLGFBQWEsZUFBZSxtQkFBbUIsa0JBQWtCLHNCQUFzQiw2QkFBNkIsb0JBQW9CLHFDQUFxQyxvQkFBb0IsK0JBQStCLG1DQUFtQyx3Q0FBd0MsK0JBQStCLDZGQUE2RixZQUFZLGtEQUFrRCxrQkFBa0IsOENBQThDLCtCQUErQiwrQ0FBK0MsNEJBQTRCLGdEQUFnRCw4QkFBOEIsOEJBQThCLGdEQUFnRCx3Q0FBd0Msb0JBQW9CLDZCQUE2QixrRUFBa0UsMkNBQTJDLE1BQU0sc0JBQXNCLGdCQUFnQixtREFBbUQsVUFBVSxhQUFhLHFCQUFxQiwrQkFBK0I7O0FBRXRuSTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFnQjtBQUNwQixtQ0FBbUMscURBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQWM7QUFDbEI7QUFDQTtBQUNBLElBQUksc0VBQXlDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFnQjtBQUNwQixJQUFJLG1EQUFlO0FBQ25CO0FBQ0E7QUFDQSxVQUFVLG1EQUFhO0FBQ3ZCLElBQUksd0RBQXNCO0FBQzFCO0FBQ0E7QUFDQSxJQUFJLHdEQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSxzREFBbUI7QUFDdkIsSUFBSSxtREFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsd0RBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVCQUF1QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQXlDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJEQUE4QjtBQUN4RDtBQUNBLFlBQVkscURBQUMsYUFBYTtBQUMxQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxREFBQyxXQUFXLFVBQVUsY0FBYyxFQUFFLGtCQUFrQixHQUFHO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxREFBQyxXQUFXLFVBQVUsY0FBYyxFQUFFLGdCQUFnQixHQUFHO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0NBQWtDO0FBQzlDO0FBQ0E7QUFDQSxZQUFZLHFEQUFDLENBQUMsaURBQVEsUUFBUSxxREFBQyxhQUFhO0FBQzVDO0FBQ0E7QUFDQSxPQUFPLHlEQUF5RCxFQUFFLHFEQUFDLG1CQUFtQiwyRUFBMkUsd0tBQXdLLHFEQUFDLGFBQWE7QUFDdlY7QUFDQTtBQUNBLE9BQU8scURBQXFELEVBQUUscURBQUMsbUJBQW1CLDRFQUE0RTtBQUM5SjtBQUNBLGdDQUFnQztBQUNoQyw0QkFBNEI7QUFDNUIsYUFBYSxPQUFPLHFEQUFVO0FBQzlCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTjVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRHRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0Q7QUFDTzs7QUFFL0Q7QUFDQTtBQUNBLGlCQUFpQixVQUFVLEdBQUcsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQSxpREFBaUQscURBQVksYUFBYSxVQUFVLGdCQUFnQixLQUFLO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtcGFnaW5hdGlvbi5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9sb2FkYWJsZS04MDU4ZTMwMC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS90OW4tZmFjMTMzOTQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgRiBhcyBGcmFnbWVudCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtODA1OGUzMDAuanMnO1xuaW1wb3J0IHsgbiBhcyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIsIGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUtYTM1NjQ4Y2QuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1mYWMxMzM5NC5qcyc7XG5pbXBvcnQgJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCAnLi9ndWlkLTcxMzY5NzRiLmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuaW1wb3J0ICcuL2tleS04ZmYwZDEwMS5qcyc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBwYWdlOiBcInBhZ2VcIixcbiAgc2VsZWN0ZWQ6IFwiaXMtc2VsZWN0ZWRcIixcbiAgcHJldmlvdXM6IFwicHJldmlvdXNcIixcbiAgbmV4dDogXCJuZXh0XCIsXG4gIGRpc2FibGVkOiBcImlzLWRpc2FibGVkXCIsXG4gIGVsbGlwc2lzOiBcImVsbGlwc2lzXCIsXG4gIGVsbGlwc2lzU3RhcnQ6IFwiZWxsaXBzaXMtLXN0YXJ0XCIsXG4gIGVsbGlwc2lzRW5kOiBcImVsbGlwc2lzLS1lbmRcIlxufTtcblxuY29uc3QgcGFnaW5hdGlvbkNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtzY2FsZT1zXSl7LS1jYWxjaXRlLXBhZ2luYXRpb24tc3BhY2luZy1pbnRlcm5hbDowLjI1cmVtIDAuNXJlbX06aG9zdChbc2NhbGU9c10pIC5wcmV2aW91cyw6aG9zdChbc2NhbGU9c10pIC5uZXh0LDpob3N0KFtzY2FsZT1zXSkgLnBhZ2V7YmxvY2stc2l6ZToxLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1zXSkgLnByZXZpb3VzLDpob3N0KFtzY2FsZT1zXSkgLm5leHR7cGFkZGluZy1pbmxpbmU6MC4yNXJlbX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS1wYWdpbmF0aW9uLXNwYWNpbmctaW50ZXJuYWw6MC41cmVtIDAuNzVyZW19Omhvc3QoW3NjYWxlPW1dKSAucHJldmlvdXMsOmhvc3QoW3NjYWxlPW1dKSAubmV4dCw6aG9zdChbc2NhbGU9bV0pIC5wYWdle2Jsb2NrLXNpemU6MnJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPW1dKSAucHJldmlvdXMsOmhvc3QoW3NjYWxlPW1dKSAubmV4dHtwYWRkaW5nLWlubGluZTowLjVyZW19Omhvc3QoW3NjYWxlPWxdKXstLWNhbGNpdGUtcGFnaW5hdGlvbi1zcGFjaW5nLWludGVybmFsOjAuNzVyZW0gMXJlbX06aG9zdChbc2NhbGU9bF0pIC5wcmV2aW91cyw6aG9zdChbc2NhbGU9bF0pIC5uZXh0LDpob3N0KFtzY2FsZT1sXSkgLnBhZ2V7YmxvY2stc2l6ZToyLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtfTpob3N0KFtzY2FsZT1sXSkgLnByZXZpb3VzLDpob3N0KFtzY2FsZT1sXSkgLm5leHR7cGFkZGluZy1pbmxpbmU6MXJlbX06aG9zdHtkaXNwbGF5OmZsZXg7d3JpdGluZy1tb2RlOmhvcml6b250YWwtdGJ9Omhvc3QgYnV0dG9ue291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QgYnV0dG9uOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0ucHJldmlvdXMsLm5leHQsLnBhZ2V7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyLXN0eWxlOm5vbmU7LS10dy1ib3JkZXItb3BhY2l0eTowO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7Ym9yZGVyLWJsb2NrOjJweCBzb2xpZCB0cmFuc3BhcmVudH0ucHJldmlvdXM6aG92ZXIsLm5leHQ6aG92ZXIsLnBhZ2U6aG92ZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzfS5wYWdlOmhvdmVye2JvcmRlci1ibG9jay1lbmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMil9LnBhZ2UuaXMtc2VsZWN0ZWR7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtib3JkZXItYmxvY2stZW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS5wcmV2aW91czpob3ZlciwubmV4dDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0ucHJldmlvdXM6YWN0aXZlLC5uZXh0OmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKX0ucHJldmlvdXMuaXMtZGlzYWJsZWQsLm5leHQuaXMtZGlzYWJsZWR7cG9pbnRlci1ldmVudHM6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5wcmV2aW91cy5pcy1kaXNhYmxlZD5jYWxjaXRlLWljb24sLm5leHQuaXMtZGlzYWJsZWQ+Y2FsY2l0ZS1pY29ue29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX0ubmV4dHttYXJnaW4taW5saW5lLWVuZDowcHh9LnBhZ2UsLmVsbGlwc2lze3BhZGRpbmc6dmFyKC0tY2FsY2l0ZS1wYWdpbmF0aW9uLXNwYWNpbmctaW50ZXJuYWwpfS5lbGxpcHNpc3tkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6ZmxleC1lbmQ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfVwiO1xuXG5jb25zdCBtYXhQYWdlc0Rpc3BsYXllZCA9IDU7XG5jb25zdCBQYWdpbmF0aW9uID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVQYWdpbmF0aW9uQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlUGFnaW5hdGlvbkNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLnByZXZpb3VzQ2xpY2tlZCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJldmlvdXNQYWdlKCkudGhlbigpO1xuICAgICAgdGhpcy5lbWl0VXBkYXRlKCk7XG4gICAgfTtcbiAgICB0aGlzLm5leHRDbGlja2VkID0gKCkgPT4ge1xuICAgICAgdGhpcy5uZXh0UGFnZSgpO1xuICAgICAgdGhpcy5lbWl0VXBkYXRlKCk7XG4gICAgfTtcbiAgICB0aGlzLmdyb3VwU2VwYXJhdG9yID0gZmFsc2U7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGFnZVNpemUgPSAyMDtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXJ0SXRlbSA9IDE7XG4gICAgdGhpcy50b3RhbEl0ZW1zID0gMDtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlV2F0Y2hlcigpIHtcbiAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3JcbiAgICB9O1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gIH1cbiAgLyoqIEdvIHRvIHRoZSBuZXh0IHBhZ2Ugb2YgcmVzdWx0cy4gKi9cbiAgYXN5bmMgbmV4dFBhZ2UoKSB7XG4gICAgdGhpcy5zdGFydEl0ZW0gPSBNYXRoLm1pbih0aGlzLmdldExhc3RTdGFydCgpLCB0aGlzLnN0YXJ0SXRlbSArIHRoaXMucGFnZVNpemUpO1xuICB9XG4gIC8qKiBHbyB0byB0aGUgcHJldmlvdXMgcGFnZSBvZiByZXN1bHRzLiAqL1xuICBhc3luYyBwcmV2aW91c1BhZ2UoKSB7XG4gICAgdGhpcy5zdGFydEl0ZW0gPSBNYXRoLm1heCgxLCB0aGlzLnN0YXJ0SXRlbSAtIHRoaXMucGFnZVNpemUpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0TGFzdFN0YXJ0KCkge1xuICAgIGNvbnN0IHsgdG90YWxJdGVtcywgcGFnZVNpemUgfSA9IHRoaXM7XG4gICAgY29uc3QgbGFzdFN0YXJ0ID0gdG90YWxJdGVtcyAlIHBhZ2VTaXplID09PSAwXG4gICAgICA/IHRvdGFsSXRlbXMgLSBwYWdlU2l6ZVxuICAgICAgOiBNYXRoLmZsb29yKHRvdGFsSXRlbXMgLyBwYWdlU2l6ZSkgKiBwYWdlU2l6ZTtcbiAgICByZXR1cm4gbGFzdFN0YXJ0ICsgMTtcbiAgfVxuICBzaG93TGVmdEVsbGlwc2lzKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuc3RhcnRJdGVtIC8gdGhpcy5wYWdlU2l6ZSkgPiAzO1xuICB9XG4gIHNob3dSaWdodEVsbGlwc2lzKCkge1xuICAgIHJldHVybiAodGhpcy50b3RhbEl0ZW1zIC0gdGhpcy5zdGFydEl0ZW0pIC8gdGhpcy5wYWdlU2l6ZSA+IDM7XG4gIH1cbiAgZW1pdFVwZGF0ZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVQYWdpbmF0aW9uQ2hhbmdlLmVtaXQoKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlclBhZ2VzKCkge1xuICAgIGNvbnN0IGxhc3RTdGFydCA9IHRoaXMuZ2V0TGFzdFN0YXJ0KCk7XG4gICAgbGV0IGVuZDtcbiAgICBsZXQgbmV4dFN0YXJ0O1xuICAgIC8vIGlmIHdlIGRvbid0IG5lZWQgZWxsaXBzZXMgcmVuZGVyIHRoZSB3aG9sZSBzZXRcbiAgICBpZiAodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5wYWdlU2l6ZSA8PSBtYXhQYWdlc0Rpc3BsYXllZCkge1xuICAgICAgbmV4dFN0YXJ0ID0gMSArIHRoaXMucGFnZVNpemU7XG4gICAgICBlbmQgPSBsYXN0U3RhcnQgLSB0aGlzLnBhZ2VTaXplO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIGlmIHdlJ3JlIHdpdGhpbiBtYXggcGFnZXMgb2YgcGFnZSAxXG4gICAgICBpZiAodGhpcy5zdGFydEl0ZW0gLyB0aGlzLnBhZ2VTaXplIDwgbWF4UGFnZXNEaXNwbGF5ZWQgLSAxKSB7XG4gICAgICAgIG5leHRTdGFydCA9IDEgKyB0aGlzLnBhZ2VTaXplO1xuICAgICAgICBlbmQgPSAxICsgNCAqIHRoaXMucGFnZVNpemU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gaWYgd2UncmUgd2l0aGluIG1heCBwYWdlcyBvZiBsYXN0IHBhZ2VcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRJdGVtICsgMyAqIHRoaXMucGFnZVNpemUgPj0gdGhpcy50b3RhbEl0ZW1zKSB7XG4gICAgICAgICAgbmV4dFN0YXJ0ID0gbGFzdFN0YXJ0IC0gNCAqIHRoaXMucGFnZVNpemU7XG4gICAgICAgICAgZW5kID0gbGFzdFN0YXJ0IC0gdGhpcy5wYWdlU2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBuZXh0U3RhcnQgPSB0aGlzLnN0YXJ0SXRlbSAtIHRoaXMucGFnZVNpemU7XG4gICAgICAgICAgZW5kID0gdGhpcy5zdGFydEl0ZW0gKyB0aGlzLnBhZ2VTaXplO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhZ2VzID0gW107XG4gICAgd2hpbGUgKG5leHRTdGFydCA8PSBlbmQpIHtcbiAgICAgIHBhZ2VzLnB1c2gobmV4dFN0YXJ0KTtcbiAgICAgIG5leHRTdGFydCA9IG5leHRTdGFydCArIHRoaXMucGFnZVNpemU7XG4gICAgfVxuICAgIHJldHVybiBwYWdlcy5tYXAoKHBhZ2UpID0+IHRoaXMucmVuZGVyUGFnZShwYWdlKSk7XG4gIH1cbiAgcmVuZGVyUGFnZShzdGFydCkge1xuICAgIGNvbnN0IHBhZ2UgPSBNYXRoLmZsb29yKHN0YXJ0IC8gdGhpcy5wYWdlU2l6ZSkgKyAodGhpcy5wYWdlU2l6ZSA9PT0gMSA/IDAgOiAxKTtcbiAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3JcbiAgICB9O1xuICAgIGNvbnN0IGRpc3BsYXllZFBhZ2UgPSBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubG9jYWxpemUocGFnZS50b1N0cmluZygpKTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHN0YXJ0ID09PSB0aGlzLnN0YXJ0SXRlbTtcbiAgICByZXR1cm4gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtY3VycmVudFwiOiBzZWxlY3RlZCA/IFwicGFnZVwiIDogXCJmYWxzZVwiLCBjbGFzczoge1xuICAgICAgICBbQ1NTLnBhZ2VdOiB0cnVlLFxuICAgICAgICBbQ1NTLnNlbGVjdGVkXTogc2VsZWN0ZWRcbiAgICAgIH0sIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgdGhpcy5zdGFydEl0ZW0gPSBzdGFydDtcbiAgICAgICAgdGhpcy5lbWl0VXBkYXRlKCk7XG4gICAgICB9IH0sIGRpc3BsYXllZFBhZ2UpKTtcbiAgfVxuICByZW5kZXJMZWZ0RWxsaXBzaXMoKSB7XG4gICAgaWYgKHRoaXMudG90YWxJdGVtcyAvIHRoaXMucGFnZVNpemUgPiBtYXhQYWdlc0Rpc3BsYXllZCAmJiB0aGlzLnNob3dMZWZ0RWxsaXBzaXMoKSkge1xuICAgICAgcmV0dXJuIGgoXCJzcGFuXCIsIHsgY2xhc3M6IGAke0NTUy5lbGxpcHNpc30gJHtDU1MuZWxsaXBzaXNTdGFydH1gIH0sIFwiXFx1MjAyNlwiKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyUmlnaHRFbGxpcHNpcygpIHtcbiAgICBpZiAodGhpcy50b3RhbEl0ZW1zIC8gdGhpcy5wYWdlU2l6ZSA+IG1heFBhZ2VzRGlzcGxheWVkICYmIHRoaXMuc2hvd1JpZ2h0RWxsaXBzaXMoKSkge1xuICAgICAgcmV0dXJuIGgoXCJzcGFuXCIsIHsgY2xhc3M6IGAke0NTUy5lbGxpcHNpc30gJHtDU1MuZWxsaXBzaXNFbmR9YCB9LCBcIlxcdTIwMjZcIik7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvdGFsSXRlbXMsIHBhZ2VTaXplLCBzdGFydEl0ZW0gfSA9IHRoaXM7XG4gICAgY29uc3QgcHJldkRpc2FibGVkID0gcGFnZVNpemUgPT09IDEgPyBzdGFydEl0ZW0gPD0gcGFnZVNpemUgOiBzdGFydEl0ZW0gPCBwYWdlU2l6ZTtcbiAgICBjb25zdCBuZXh0RGlzYWJsZWQgPSBwYWdlU2l6ZSA9PT0gMSA/IHN0YXJ0SXRlbSArIHBhZ2VTaXplID4gdG90YWxJdGVtcyA6IHN0YXJ0SXRlbSArIHBhZ2VTaXplID4gdG90YWxJdGVtcztcbiAgICByZXR1cm4gKGgoRnJhZ21lbnQsIG51bGwsIGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5wcmV2aW91cywgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5wcmV2aW91c106IHRydWUsXG4gICAgICAgIFtDU1MuZGlzYWJsZWRdOiBwcmV2RGlzYWJsZWRcbiAgICAgIH0sIGRpc2FibGVkOiBwcmV2RGlzYWJsZWQsIG9uQ2xpY2s6IHRoaXMucHJldmlvdXNDbGlja2VkIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBmbGlwUnRsOiB0cnVlLCBpY29uOiBcImNoZXZyb25MZWZ0XCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpLCB0b3RhbEl0ZW1zID4gcGFnZVNpemUgPyB0aGlzLnJlbmRlclBhZ2UoMSkgOiBudWxsLCB0aGlzLnJlbmRlckxlZnRFbGxpcHNpcygpLCB0aGlzLnJlbmRlclBhZ2VzKCksIHRoaXMucmVuZGVyUmlnaHRFbGxpcHNpcygpLCB0aGlzLnJlbmRlclBhZ2UodGhpcy5nZXRMYXN0U3RhcnQoKSksIGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5uZXh0LCBjbGFzczoge1xuICAgICAgICBbQ1NTLm5leHRdOiB0cnVlLFxuICAgICAgICBbQ1NTLmRpc2FibGVkXTogbmV4dERpc2FibGVkXG4gICAgICB9LCBkaXNhYmxlZDogbmV4dERpc2FibGVkLCBvbkNsaWNrOiB0aGlzLm5leHRDbGlja2VkIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBmbGlwUnRsOiB0cnVlLCBpY29uOiBcImNoZXZyb25SaWdodFwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVsZWdhdGVzRm9jdXMoKSB7IHJldHVybiB0cnVlOyB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCIsIFwiZWZmZWN0aXZlTG9jYWxlV2F0Y2hlclwiXVxuICB9OyB9XG59O1xuUGFnaW5hdGlvbi5zdHlsZSA9IHBhZ2luYXRpb25Dc3M7XG5cbmV4cG9ydCB7IFBhZ2luYXRpb24gYXMgY2FsY2l0ZV9wYWdpbmF0aW9uIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgc3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgXCJzZXRVcExvYWRhYmxlQ29tcG9uZW50XCIgYW5kIFwic2V0Q29tcG9uZW50TG9hZGVkXCIgdG8gYmUgY2FsbGVkIGZpcnN0LlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBzZXRGb2N1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBzZXRDb21wb25lbnRMb2FkZWQgYXMgYSwgY29tcG9uZW50TG9hZGVkIGFzIGMsIHNldFVwTG9hZGFibGVDb21wb25lbnQgYXMgcyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGcgYXMgZ2V0QXNzZXRQYXRoIH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFN1cHBvcnRlZExvY2FsZSB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcblxuY29uc3QgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlID0ge307XG5hc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlQnVuZGxlKGxhbmcsIGNvbXBvbmVudCkge1xuICBjb25zdCBrZXkgPSBgJHtjb21wb25lbnR9XyR7bGFuZ31gO1xuICBpZiAoY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0pIHtcbiAgICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG4gIH1cbiAgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0gPSBmZXRjaChnZXRBc3NldFBhdGgoYC4vYXNzZXRzLyR7Y29tcG9uZW50fS90OW4vbWVzc2FnZXNfJHtsYW5nfS5qc29uYCkpXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICB9KVxuICAgIC5jYXRjaCgoKSA9PiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkpO1xuICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG59XG5mdW5jdGlvbiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgZmV0Y2ggY29tcG9uZW50IG1lc3NhZ2UgYnVuZGxlXCIpO1xufVxuZnVuY3Rpb24gbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm1lc3NhZ2VzID0ge1xuICAgIC4uLmNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMsXG4gICAgLi4uY29tcG9uZW50Lm1lc3NhZ2VPdmVycmlkZXNcbiAgfTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgdGhlIG1lc3NhZ2VzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC4gSXQgc2hvdWxkIGJlIGF3YWl0ZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRVcE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHRhZy5yZXBsYWNlKFwiY2FsY2l0ZS1cIiwgXCJcIik7XG4gIHJldHVybiBnZXRNZXNzYWdlQnVuZGxlKGdldFN1cHBvcnRlZExvY2FsZShsYW5nLCBcInQ5blwiKSwgY29tcG9uZW50TmFtZSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBtdXN0IGJlIHNldCB1cCBmb3IgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIGRlZmF1bHQgbWVzc2FnZSBidW5kbGUgaWYgdGhlIGxvY2FsZSBjaGFuZ2VzLlxuICpcbiAqIEl0IGNhbiBiZSBzZXQgdXAgaW4gKiplaXRoZXIqKiBvZiB0aGUgZm9sbG93aW5nIHdheXM6XG4gKlxuICogMS4gY2FsbGVkIGZyb20gYExvY2FsaXplZENvbXBvbmVudGAncyBgb25Mb2NhbGVDaGFuZ2VgIG1ldGhvZCBvclxuICogMi4gY2FsbGVkIGZyb20gYSB3YXRjaGVyIGNvbmZpZ3VyZWQgdG8gd2F0Y2ggYExvY2FsaXplZENvbXBvbmVudGAncyBgZWZmZWN0aXZlTG9jYWxlYCBwcm9wXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGxhbmdcbiAqL1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZyk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogKipOb3RlKio6IHRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgYExvY2FsaXplZENvbXBvbmVudGAncyBgY29ubmVjdExvY2FsaXplZGAgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgdGVhcnMgZG93biBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgbWVyZ2VNZXNzYWdlcyh0aGlzKTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdE1lc3NhZ2VzIGFzIGMsIGRpc2Nvbm5lY3RNZXNzYWdlcyBhcyBkLCBzZXRVcE1lc3NhZ2VzIGFzIHMsIHVwZGF0ZU1lc3NhZ2VzIGFzIHUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==