"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-pick-list_3_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/Heading-ce737456.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/Heading-ce737456.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Heading),
/* harmony export */   "c": () => (/* binding */ constrainHeadingLevel)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */


function constrainHeadingLevel(level) {
  return Math.min(Math.max(Math.ceil(level), 1), 6);
}
const Heading = (props, children) => {
  const HeadingTag = props.level ? `h${props.level}` : "div";
  delete props.level;
  return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(HeadingTag, { ...props }, children);
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ getUserAgentData),
/* harmony export */   "g": () => (/* binding */ getUserAgentString)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
function getUserAgentData() {
  return navigator.userAgentData;
}
function getUserAgentString() {
  const uaData = getUserAgentData();
  return uaData?.brands
    ? uaData.brands.map(({ brand, version }) => `${brand}/${version}`).join(" ")
    : navigator.userAgent;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-pick-list_3.entry.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-pick-list_3.entry.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_pick_list": () => (/* binding */ PickList),
/* harmony export */   "calcite_pick_list_group": () => (/* binding */ PickListGroup),
/* harmony export */   "calcite_pick_list_item": () => (/* binding */ PickListItem)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources-298c32e6.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-298c32e6.js");
/* harmony import */ var _conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conditionalSlot-946fb911.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-946fb911.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _Heading_ce737456_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Heading-ce737456.js */ "./node_modules/@esri/calcite-components/dist/esm/Heading-ce737456.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _array_8048effa_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array-8048effa.js */ "./node_modules/@esri/calcite-components/dist/esm/array-8048effa.js");
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */

















const pickListCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:1;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:stretch;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-app-z-index)}calcite-filter{margin-block-end:0px}:host([loading][disabled]){min-block-size:2rem}";

const PickList = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteListChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListChange", 6);
    this.calciteListFilter = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListFilter", 6);
    this.lastSelectedItem = null;
    this.mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_3__.c)("mutation", _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.m.bind(this));
    this.setFilterEl = (el) => {
      this.filterEl = el;
    };
    this.setFilteredItems = (filteredItems) => {
      this.filteredItems = filteredItems;
    };
    this.deselectRemovedItems = _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.d.bind(this);
    this.deselectSiblingItems = _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.a.bind(this);
    this.selectSiblings = _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.s.bind(this);
    this.handleFilter = _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.h.bind(this);
    this.handleFilterEvent = _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.b.bind(this);
    this.getItemData = _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.c.bind(this);
    this.keyDownHandler = _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.k.bind(this);
    this.disabled = false;
    this.filteredItems = [];
    this.filteredData = [];
    this.filterEnabled = false;
    this.filterPlaceholder = undefined;
    this.filterText = undefined;
    this.headingLevel = undefined;
    this.loading = false;
    this.multiple = false;
    this.selectionFollowsFocus = false;
    this.selectedValues = new Map();
    this.dataForFilter = [];
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.i.call(this);
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.f.call(this);
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  disconnectedCallback() {
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.l.call(this);
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.j.call(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  calciteListItemRemoveHandler(event) {
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.r.call(this, event);
  }
  calciteListItemChangeHandler(event) {
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.o.call(this, event);
  }
  calciteInternalListItemPropsChangeHandler(event) {
    event.stopPropagation();
    this.setUpFilter();
  }
  calciteInternalListItemValueChangeHandler(event) {
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.p.call(this, event);
    event.stopPropagation();
  }
  calciteListFocusOutHandler(event) {
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.n.call(this, event);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  setUpItems() {
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.q.call(this, "calcite-pick-list-item");
  }
  setUpFilter() {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Returns the component's selected `calcite-pick-list-item`s. */
  async getSelectedItems() {
    return this.selectedValues;
  }
  /**
   * Sets focus on the component's first focusable element.
   *
   * @param focusId
   */
  async setFocus(focusId) {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    return _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.t.call(this, focusId);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  getIconType() {
    return this.multiple ? _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.I.square : _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.I.circle;
  }
  render() {
    return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.L, { onKeyDown: this.keyDownHandler, props: this });
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
PickList.style = pickListCss;

const pickListGroupCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{margin-block-end:0.25rem;box-sizing:border-box;display:block;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host(:last-child){margin-block-end:0px}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.heading{margin-block:0.5rem;margin-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-size:var(--calcite-font-size--1);line-height:1.375;color:var(--calcite-ui-text-3)}.container--indented{margin-inline-start:1.5rem}";

const PickListGroup = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.groupTitle = undefined;
    this.headingLevel = undefined;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { el, groupTitle, headingLevel } = this;
    const hasParentItem = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_6__.g)(el, _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.u.parentItem) !== null;
    const sectionClasses = {
      [_resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.v.container]: true,
      [_resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.v.indented]: hasParentItem
    };
    const title = groupTitle;
    const parentLevel = el.closest("calcite-pick-list")?.headingLevel;
    const relativeLevel = parentLevel ? (0,_Heading_ce737456_js__WEBPACK_IMPORTED_MODULE_7__.c)(parentLevel + 1) : null;
    const level = headingLevel || relativeLevel;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.F, null, title ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_Heading_ce737456_js__WEBPACK_IMPORTED_MODULE_7__.H, { class: _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.v.heading, level: level }, title)) : null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.u.parentItem }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("section", { class: sectionClasses }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null))));
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
PickListGroup.style = pickListGroupCss;

const pickListItemCss = "@charset \"UTF-8\";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{margin:0px;margin-block-end:1px;box-sizing:border-box;display:flex;align-items:stretch;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing);animation:calcite-fade-in var(--calcite-animation-timing)}:host *{box-sizing:border-box}.label{display:flex;flex:1 1 auto;cursor:pointer;align-items:center;background-color:transparent;outline-color:transparent}.label:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.label:hover{background-color:var(--calcite-ui-foreground-2)}:host([non-interactive]:hover){background-color:var(--calcite-ui-foreground-1)}:host([non-interactive]) .label,:host([non-interactive]) .icon{pointer-events:none}.icon{margin-block:0px;display:flex;cursor:pointer;align-items:center;padding:0.25rem;color:var(--calcite-ui-brand);flex:0 0 auto;line-height:0}.icon:hover{background-color:var(--calcite-ui-foreground-2)}.icon-dot{display:flex;inline-size:1.5rem;align-items:center;padding:0.5rem}.icon-dot:before{opacity:0;content:\"•\"}.icon calcite-icon{opacity:0}:host([selected]) .icon-dot:before,:host([selected]) .icon calcite-icon{transition:opacity var(--calcite-animation-timing);opacity:1}.text-container{pointer-events:none;display:flex;flex-direction:column;flex-wrap:nowrap;overflow:hidden;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;word-wrap:break-word;word-break:break-word}.title{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}.actions{margin:0px;display:flex;flex:0 1 auto;align-items:stretch;justify-content:flex-end}.actions--start~.label{padding-inline-start:0.25rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";

const PickListItem = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteListItemChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListItemChange", 6);
    this.calciteListItemRemove = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListItemRemove", 7);
    this.calciteInternalListItemPropsChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalListItemPropsChange", 6);
    this.calciteInternalListItemValueChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalListItemValueChange", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.pickListClickHandler = (event) => {
      if (this.disabled || (this.deselectDisabled && this.selected) || this.nonInteractive) {
        return;
      }
      this.shiftPressed = event.shiftKey;
      this.selected = !this.selected;
    };
    this.pickListKeyDownHandler = (event) => {
      if (event.key === " ") {
        event.preventDefault();
        if ((this.deselectDisabled && this.selected) || this.nonInteractive) {
          return;
        }
        this.selected = !this.selected;
      }
    };
    this.removeClickHandler = () => {
      this.calciteListItemRemove.emit();
    };
    this.description = undefined;
    this.disabled = false;
    this.deselectDisabled = false;
    this.nonInteractive = false;
    this.icon = null;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.metadata = undefined;
    this.removable = false;
    this.selected = false;
    this.value = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
  }
  descriptionWatchHandler() {
    this.calciteInternalListItemPropsChange.emit();
  }
  labelWatchHandler() {
    this.calciteInternalListItemPropsChange.emit();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  metadataWatchHandler() {
    this.calciteInternalListItemPropsChange.emit();
  }
  selectedWatchHandler() {
    this.calciteListItemChange.emit({
      item: this.el,
      value: this.value,
      selected: this.selected,
      shiftPressed: this.shiftPressed
    });
    this.shiftPressed = false;
  }
  valueWatchHandler(newValue, oldValue) {
    this.calciteInternalListItemValueChange.emit({ oldValue, newValue });
  }
  effectiveLocaleChange() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
  }
  async componentWillLoad() {
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.u)(this, this.el.closest("calcite-pick-list") ? "managed" : false);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Toggles the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   *
   * @param coerce
   */
  async toggleSelected(coerce) {
    this.selected = typeof coerce === "boolean" ? coerce : !this.selected;
  }
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.focusEl?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderIcon() {
    const { icon, iconFlipRtl } = this;
    if (!icon) {
      return null;
    }
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: {
        [_resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.C.icon]: true,
        [_resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.C.iconDot]: icon === _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.I.circle
      }, onClick: this.pickListClickHandler }, icon === _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.I.square ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { flipRtl: iconFlipRtl, icon: _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.w.checked, scale: "s" })) : null));
  }
  renderRemoveAction() {
    return this.removable ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action", { class: _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.C.remove, icon: _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.w.remove, onClick: this.removeClickHandler, slot: _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.S.actionsEnd, text: this.messages.remove })) : null;
  }
  renderActionsStart() {
    const { el } = this;
    const hasActionsStart = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_6__.g)(el, _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.S.actionsStart);
    return hasActionsStart ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [_resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.C.actions]: true, [_resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.C.actionsStart]: true } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.S.actionsStart }))) : null;
  }
  renderActionsEnd() {
    const { el, removable } = this;
    const hasActionsEnd = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_6__.g)(el, _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.S.actionsEnd);
    return hasActionsEnd || removable ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [_resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.C.actions]: true, [_resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.C.actionsEnd]: true } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.S.actionsEnd }), this.renderRemoveAction())) : null;
  }
  render() {
    const { description, label } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.F, null, this.renderIcon(), this.renderActionsStart(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { "aria-label": label, class: _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.C.label, onClick: this.pickListClickHandler, onKeyDown: this.pickListKeyDownHandler, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (focusEl) => (this.focusEl = focusEl) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-checked": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_6__.t)(this.selected), class: _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.C.textContainer, role: "menuitemcheckbox" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.C.title }, label), description ? (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_4__.C.description }, description) : null)), this.renderActionsEnd()));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "description": ["descriptionWatchHandler"],
    "label": ["labelWatchHandler"],
    "defaultMessages": ["onMessagesChange"],
    "messageOverrides": ["onMessagesChange"],
    "metadata": ["metadataWatchHandler"],
    "selected": ["selectedWatchHandler"],
    "value": ["valueWatchHandler"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
PickListItem.style = pickListItemCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectInteractive),
/* harmony export */   "d": () => (/* binding */ disconnectInteractive),
/* harmony export */   "u": () => (/* binding */ updateHostInteraction)
/* harmony export */ });
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */


// ⚠️ browser-sniffing is not a best practice and should be avoided ⚠️
const isFirefox = /firefox/i.test((0,_browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_0__.g)());
const interactiveElementToParent = isFirefox
  ? new WeakMap()
  : null;
function interceptedClick() {
  const { disabled } = this;
  if (!disabled) {
    HTMLElement.prototype.click.call(this);
  }
}
function onPointerDown(event) {
  const interactiveElement = event.target;
  if (isFirefox && !interactiveElementToParent.get(interactiveElement)) {
    return;
  }
  const { disabled } = interactiveElement;
  if (disabled) {
    // prevent click from moving focus on host
    event.preventDefault();
  }
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
  if (isFirefox && !interactiveElementToParent.get(event.target)) {
    return;
  }
  const { disabled } = event.target;
  // prevent disallowed mouse events from being emitted on the disabled host (per https://github.com/whatwg/html/issues/5886)
  //⚠ we generally avoid stopping propagation of events, but this is needed to adhere to the intended spec changes above ⚠
  if (disabled) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}
const captureOnlyOptions = { capture: true };
/**
 * This helper updates the host element to prevent keyboard interaction on its subtree and sets the appropriate aria attribute for accessibility.
 *
 * This should be used in the `componentDidRender` lifecycle hook.
 *
 * **Notes**
 *
 * this util is not needed for simple components whose root element or elements are an interactive component (custom element or native control). For those cases, set the `disabled` props on the root components instead.
 * technically, users can override `tabindex` and restore keyboard navigation, but this will be considered user error
 *
 * @param component
 * @param hostIsTabbable
 */
function updateHostInteraction(component, hostIsTabbable = false) {
  if (component.disabled) {
    component.el.setAttribute("tabindex", "-1");
    component.el.setAttribute("aria-disabled", "true");
    if (component.el.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    blockInteraction(component);
    return;
  }
  restoreInteraction(component);
  if (typeof hostIsTabbable === "function") {
    component.el.setAttribute("tabindex", hostIsTabbable.call(component) ? "0" : "-1");
  }
  else if (hostIsTabbable === true) {
    component.el.setAttribute("tabindex", "0");
  }
  else if (hostIsTabbable === false) {
    component.el.removeAttribute("tabindex");
  }
  else ;
  component.el.removeAttribute("aria-disabled");
}
function blockInteraction(component) {
  component.el.click = interceptedClick;
  addInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function addInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
function getParentElement(component) {
  return interactiveElementToParent.get(component.el);
}
function restoreInteraction(component) {
  delete component.el.click; // fallback on HTMLElement.prototype.click
  removeInteractionListeners(isFirefox ? getParentElement(component) : component.el);
}
function removeInteractionListeners(element) {
  if (!element) {
    // this path is only applicable to Firefox
    return;
  }
  element.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
/**
 * This utility helps disable components consistently in Firefox.
 *
 * It needs to be called in `connectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function connectInteractive(component) {
  if (!component.disabled || !isFirefox) {
    return;
  }
  const parent = component.el.parentElement || component.el; /* assume element is host if it has no parent when connected */
  interactiveElementToParent.set(component.el, parent);
  blockInteraction(component);
}
/**
 * This utility restores interactivity to disabled components consistently in Firefox.
 *
 * It needs to be called in `disconnectedCallback` and is only needed for Firefox as it does not call capture event listeners before non-capture ones (see https://bugzilla.mozilla.org/show_bug.cgi?id=1731504).
 *
 * @param component
 */
function disconnectInteractive(component) {
  if (!isFirefox) {
    return;
  }
  // always remove on disconnect as render or connect will restore it
  interactiveElementToParent.delete(component.el);
  restoreInteraction(component);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYjM0ZDYzYTFkMGNhYzNkZWM1MTBjYzQ5MmQ5Yzc0NjYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBLFNBQVMscURBQUMsZUFBZSxVQUFVO0FBQ25DOztBQUVvRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0IsUUFBUSxNQUFNLEdBQUcsUUFBUTtBQUNwRTtBQUNBOztBQUUwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUg7QUFDVztBQUNSO0FBQ3REO0FBQzhmO0FBQzliO0FBQ3REO0FBQ1M7QUFDTTtBQUNvQztBQUM1RjtBQUNGO0FBQ0c7QUFDSjtBQUNLO0FBQ047O0FBRTNCLG1DQUFtQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxrQkFBa0Isc0JBQXNCLGFBQWEsY0FBYyxZQUFZLHNCQUFzQixvQkFBb0IsNkJBQTZCLHNDQUFzQyxpQkFBaUIsK0JBQStCLFFBQVEsc0JBQXNCLHlHQUF5RyxVQUFVLCtCQUErQix5QkFBeUIsYUFBYSxvQkFBb0IseUJBQXlCLGdEQUFnRCwrQ0FBK0MsbURBQW1ELHVHQUF1RywwQ0FBMEMsZ0JBQWdCLHNCQUFzQixtQ0FBbUMsZUFBZSxxQkFBcUIsMkJBQTJCLG9CQUFvQjs7QUFFMXhGO0FBQ0E7QUFDQSxJQUFJLHFEQUFnQjtBQUNwQiw2QkFBNkIscURBQVc7QUFDeEMsNkJBQTZCLHFEQUFXO0FBQ3hDO0FBQ0EsNEJBQTRCLHlEQUFjLGFBQWEsMERBQTZCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywwREFBeUI7QUFDekQsZ0NBQWdDLDBEQUF5QjtBQUN6RCwwQkFBMEIsMERBQW1CO0FBQzdDLHdCQUF3QiwwREFBaUI7QUFDekMsNkJBQTZCLDBEQUFzQjtBQUNuRCx1QkFBdUIsMERBQWdCO0FBQ3ZDLDBCQUEwQiwwREFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFlO0FBQ25CLElBQUksMERBQXVCO0FBQzNCLElBQUksMkRBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLDBEQUFvQjtBQUN4QixJQUFJLDJEQUFxQjtBQUN6QjtBQUNBO0FBQ0EsSUFBSSx3REFBc0I7QUFDMUI7QUFDQTtBQUNBLElBQUksd0RBQWtCO0FBQ3RCLElBQUksMERBQXdCO0FBQzVCO0FBQ0E7QUFDQSxJQUFJLDJEQUFxQjtBQUN6QjtBQUNBO0FBQ0EsSUFBSSwwREFBZTtBQUNuQjtBQUNBO0FBQ0EsSUFBSSwwREFBaUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBOEM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBK0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsd0RBQWU7QUFDekIsV0FBVywwREFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0REFBaUIsR0FBRyw0REFBaUI7QUFDaEU7QUFDQTtBQUNBLFdBQVcscURBQUMsQ0FBQyxxREFBSSxJQUFJLDZDQUE2QztBQUNsRTtBQUNBLGFBQWEsT0FBTyxxREFBVTtBQUM5QjtBQUNBOztBQUVBLHdDQUF3QyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLE1BQU0seUJBQXlCLHNCQUFzQixjQUFjLDZCQUE2QixzQ0FBc0MsK0JBQStCLFFBQVEsc0JBQXNCLG1CQUFtQixxQkFBcUIsUUFBUSxXQUFXLGFBQWEsNEJBQTRCLG1CQUFtQiw4QkFBOEIsK0JBQStCLFNBQVMsV0FBVyxZQUFZLDhDQUE4QyxpQkFBaUIsY0FBYyxlQUFlLFNBQVMsb0JBQW9CLG1CQUFtQixxQ0FBcUMsb0JBQW9CLHNDQUFzQyxrQkFBa0IsK0JBQStCLHFCQUFxQiwyQkFBMkI7O0FBRWo1RTtBQUNBO0FBQ0EsSUFBSSxxREFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBK0I7QUFDbkM7QUFDQTtBQUNBLElBQUksK0RBQWtDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrQkFBK0I7QUFDM0MsMEJBQTBCLG1EQUFVLEtBQUssZ0VBQWdCO0FBQ3pEO0FBQ0EsT0FBTywrREFBYTtBQUNwQixPQUFPLDhEQUFZO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx1REFBcUI7QUFDN0Q7QUFDQSxZQUFZLHFEQUFDLENBQUMsaURBQVEsaUJBQWlCLHFEQUFDLENBQUMsbURBQU8sSUFBSSxPQUFPLDZEQUFXLGdCQUFnQixrQkFBa0IscURBQUMsV0FBVyxNQUFNLGdFQUFnQixFQUFFLEdBQUcscURBQUMsY0FBYyx1QkFBdUIsRUFBRSxxREFBQztBQUN4TDtBQUNBLGFBQWEsT0FBTyxxREFBVTtBQUM5QjtBQUNBOztBQUVBLDRDQUE0QyxjQUFjLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLFdBQVcscUJBQXFCLHNCQUFzQixhQUFhLG9CQUFvQixnREFBZ0Qsc0NBQXNDLGlCQUFpQiwrQkFBK0IsK0NBQStDLG1EQUFtRCx1R0FBdUcsNERBQTRELDBEQUEwRCxRQUFRLHNCQUFzQixPQUFPLGFBQWEsY0FBYyxlQUFlLG1CQUFtQiw2QkFBNkIsMEJBQTBCLGFBQWEseUVBQXlFLHFQQUFxUCxhQUFhLGdEQUFnRCwrQkFBK0IsZ0RBQWdELCtEQUErRCxvQkFBb0IsTUFBTSxpQkFBaUIsYUFBYSxlQUFlLG1CQUFtQixnQkFBZ0IsOEJBQThCLGNBQWMsY0FBYyxZQUFZLGdEQUFnRCxVQUFVLGFBQWEsbUJBQW1CLG1CQUFtQixlQUFlLGlCQUFpQixVQUFVLGNBQWMsbUJBQW1CLFVBQVUsd0VBQXdFLG1EQUFtRCxVQUFVLGdCQUFnQixvQkFBb0IsYUFBYSxzQkFBc0IsaUJBQWlCLGdCQUFnQixxQkFBcUIsdUJBQXVCLHNDQUFzQyxrQkFBa0IscUJBQXFCLHNCQUFzQixPQUFPLDhDQUE4QywrQkFBK0IsYUFBYSw0QkFBNEIsOENBQThDLCtCQUErQixTQUFTLFdBQVcsYUFBYSxjQUFjLG9CQUFvQix5QkFBeUIsdUJBQXVCLDZCQUE2Qix5R0FBeUcsVUFBVTs7QUFFendJO0FBQ0E7QUFDQSxJQUFJLHFEQUFnQjtBQUNwQixpQ0FBaUMscURBQVc7QUFDNUMsaUNBQWlDLHFEQUFXO0FBQzVDLDhDQUE4QyxxREFBVztBQUN6RCw4Q0FBOEMscURBQVc7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG9CQUFvQjtBQUN2RTtBQUNBO0FBQ0EsSUFBSSxnSkFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQWtCO0FBQ3RCLElBQUksc0RBQWdCO0FBQ3BCLElBQUksZ0pBQWU7QUFDbkIsSUFBSSwrREFBK0I7QUFDbkM7QUFDQTtBQUNBLFVBQVUsZ0pBQWE7QUFDdkIsSUFBSSx3REFBc0I7QUFDMUI7QUFDQTtBQUNBLElBQUksd0RBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLDJEQUFxQjtBQUN6QixJQUFJLHNEQUFtQjtBQUN2QixJQUFJLGdKQUFrQjtBQUN0QixJQUFJLCtEQUFrQztBQUN0QztBQUNBO0FBQ0EsSUFBSSwyREFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsd0RBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQUMsV0FBVztBQUN4QixTQUFTLDBEQUFVO0FBQ25CLFNBQVMsNkRBQWEsWUFBWSw0REFBaUI7QUFDbkQsT0FBTyxzQ0FBc0MsV0FBVyw0REFBaUIsSUFBSSxxREFBQyxtQkFBbUIsNEJBQTRCLDZEQUFhLGNBQWM7QUFDeEo7QUFDQTtBQUNBLDZCQUE2QixxREFBQyxxQkFBcUIsT0FBTyw0REFBWSxRQUFRLDREQUFZLDBDQUEwQyxnRUFBa0IsOEJBQThCO0FBQ3BMO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakIsNEJBQTRCLG1EQUFVLEtBQUssa0VBQW9CO0FBQy9ELDhCQUE4QixxREFBQyxVQUFVLFNBQVMsQ0FBQyw2REFBYSxVQUFVLGtFQUFrQixXQUFXLEVBQUUscURBQUMsV0FBVyxNQUFNLGtFQUFvQixFQUFFO0FBQ2pKO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QiwwQkFBMEIsbURBQVUsS0FBSyxnRUFBa0I7QUFDM0QseUNBQXlDLHFEQUFDLFVBQVUsU0FBUyxDQUFDLDZEQUFhLFVBQVUsZ0VBQWdCLFdBQVcsRUFBRSxxREFBQyxXQUFXLE1BQU0sZ0VBQWtCLEVBQUU7QUFDeEo7QUFDQTtBQUNBLFlBQVkscUJBQXFCO0FBQ2pDLFlBQVkscURBQUMsQ0FBQyxpREFBUSxzREFBc0QscURBQUMsWUFBWSw0QkFBNEIsMkRBQVc7QUFDaEk7QUFDQSxrREFBa0QsRUFBRSxxREFBQyxVQUFVLGdCQUFnQixtREFBYSx3QkFBd0IsbUVBQW1CLDRCQUE0QixFQUFFLHFEQUFDLFdBQVcsT0FBTywyREFBVyxFQUFFLHdCQUF3QixxREFBQyxXQUFXLE9BQU8saUVBQWlCLEVBQUU7QUFDblE7QUFDQSw0QkFBNEI7QUFDNUIsYUFBYSxPQUFPLHFEQUFVO0FBQzlCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUySDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFczSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dFOztBQUVoRTtBQUNBLGtDQUFrQyx1REFBa0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vSGVhZGluZy1jZTczNzQ1Ni5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9icm93c2VyLTk5YmM2MmNmLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtcGljay1saXN0XzMuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vaW50ZXJhY3RpdmUtMGViMTM2MDAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGggfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcblxuZnVuY3Rpb24gY29uc3RyYWluSGVhZGluZ0xldmVsKGxldmVsKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChNYXRoLmNlaWwobGV2ZWwpLCAxKSwgNik7XG59XG5jb25zdCBIZWFkaW5nID0gKHByb3BzLCBjaGlsZHJlbikgPT4ge1xuICBjb25zdCBIZWFkaW5nVGFnID0gcHJvcHMubGV2ZWwgPyBgaCR7cHJvcHMubGV2ZWx9YCA6IFwiZGl2XCI7XG4gIGRlbGV0ZSBwcm9wcy5sZXZlbDtcbiAgcmV0dXJuIGgoSGVhZGluZ1RhZywgeyAuLi5wcm9wcyB9LCBjaGlsZHJlbik7XG59O1xuXG5leHBvcnQgeyBIZWFkaW5nIGFzIEgsIGNvbnN0cmFpbkhlYWRpbmdMZXZlbCBhcyBjIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuZnVuY3Rpb24gZ2V0VXNlckFnZW50RGF0YSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xufVxuZnVuY3Rpb24gZ2V0VXNlckFnZW50U3RyaW5nKCkge1xuICBjb25zdCB1YURhdGEgPSBnZXRVc2VyQWdlbnREYXRhKCk7XG4gIHJldHVybiB1YURhdGE/LmJyYW5kc1xuICAgID8gdWFEYXRhLmJyYW5kcy5tYXAoKHsgYnJhbmQsIHZlcnNpb24gfSkgPT4gYCR7YnJhbmR9LyR7dmVyc2lvbn1gKS5qb2luKFwiIFwiKVxuICAgIDogbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn1cblxuZXhwb3J0IHsgZ2V0VXNlckFnZW50RGF0YSBhcyBhLCBnZXRVc2VyQWdlbnRTdHJpbmcgYXMgZyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgYSBhcyBnZXRFbGVtZW50LCBGIGFzIEZyYWdtZW50IH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS0wZWIxMzYwMC5qcyc7XG5pbXBvcnQgeyBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtODA1OGUzMDAuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcbmltcG9ydCB7IG0gYXMgbXV0YXRpb25PYnNlcnZlckNhbGxiYWNrLCBkIGFzIGRlc2VsZWN0UmVtb3ZlZEl0ZW1zLCBhIGFzIGRlc2VsZWN0U2libGluZ0l0ZW1zLCBzIGFzIHNlbGVjdFNpYmxpbmdzLCBoIGFzIGhhbmRsZUZpbHRlciwgYiBhcyBoYW5kbGVGaWx0ZXJFdmVudCwgYyBhcyBnZXRJdGVtRGF0YSwgayBhcyBrZXlEb3duSGFuZGxlciwgaSBhcyBpbml0aWFsaXplLCBmIGFzIGluaXRpYWxpemVPYnNlcnZlciwgbCBhcyBjbGVhblVwT2JzZXJ2ZXIsIGogYXMgaGFuZGxlSW5pdGlhbEZpbHRlciwgciBhcyByZW1vdmVJdGVtLCBvIGFzIGNhbGNpdGVMaXN0SXRlbUNoYW5nZUhhbmRsZXIsIHAgYXMgY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1WYWx1ZUNoYW5nZUhhbmRsZXIsIG4gYXMgY2FsY2l0ZUxpc3RGb2N1c091dEhhbmRsZXIsIHEgYXMgc2V0VXBJdGVtcywgdCBhcyBzZXRGb2N1cywgSSBhcyBJQ09OX1RZUEVTLCBMIGFzIExpc3QsIHUgYXMgU0xPVFMsIHYgYXMgQ1NTLCB3IGFzIElDT05TLCBDIGFzIENTUyQxLCBTIGFzIFNMT1RTJDEgfSBmcm9tICcuL3Jlc291cmNlcy0yOThjMzJlNi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQsIGQgYXMgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCB9IGZyb20gJy4vY29uZGl0aW9uYWxTbG90LTk0NmZiOTExLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U2xvdHRlZCwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0IHsgSCBhcyBIZWFkaW5nLCBjIGFzIGNvbnN0cmFpbkhlYWRpbmdMZXZlbCB9IGZyb20gJy4vSGVhZGluZy1jZTczNzQ1Ni5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4tZmFjMTMzOTQuanMnO1xuaW1wb3J0ICcuL2Jyb3dzZXItOTliYzYyY2YuanMnO1xuaW1wb3J0ICcuL2FycmF5LTgwNDhlZmZhLmpzJztcbmltcG9ydCAnLi9kZWJvdW5jZS0wOTUwYTliOC5qcyc7XG5pbXBvcnQgJy4vZ3VpZC03MTM2OTc0Yi5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcbmltcG9ydCAnLi9rZXktOGZmMGQxMDEuanMnO1xuXG5jb25zdCBwaWNrTGlzdENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDtmbGV4LWdyb3c6MTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9Omhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KFtmaWx0ZXItZW5hYmxlZF0pIGhlYWRlcnttYXJnaW4tYmxvY2stZW5kOjAuMjVyZW07ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOnN0cmV0Y2g7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpOy0tdHctc2hhZG93OjAgMXB4IDAgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7LS10dy1zaGFkb3ctY29sb3JlZDowIDFweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0KFtmaWx0ZXItZW5hYmxlZF0pIGhlYWRlci5zdGlja3ktcG9ze3Bvc2l0aW9uOnN0aWNreTtpbnNldC1ibG9jay1zdGFydDowcHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KX1jYWxjaXRlLWZpbHRlcnttYXJnaW4tYmxvY2stZW5kOjBweH06aG9zdChbbG9hZGluZ11bZGlzYWJsZWRdKXttaW4tYmxvY2stc2l6ZToycmVtfVwiO1xuXG5jb25zdCBQaWNrTGlzdCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlTGlzdENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUxpc3RDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTGlzdEZpbHRlciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUxpc3RGaWx0ZXJcIiwgNik7XG4gICAgdGhpcy5sYXN0U2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsIG11dGF0aW9uT2JzZXJ2ZXJDYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnNldEZpbHRlckVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmZpbHRlckVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLnNldEZpbHRlcmVkSXRlbXMgPSAoZmlsdGVyZWRJdGVtcykgPT4ge1xuICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcztcbiAgICB9O1xuICAgIHRoaXMuZGVzZWxlY3RSZW1vdmVkSXRlbXMgPSBkZXNlbGVjdFJlbW92ZWRJdGVtcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzZWxlY3RTaWJsaW5nSXRlbXMgPSBkZXNlbGVjdFNpYmxpbmdJdGVtcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VsZWN0U2libGluZ3MgPSBzZWxlY3RTaWJsaW5ncy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyID0gaGFuZGxlRmlsdGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXJFdmVudCA9IGhhbmRsZUZpbHRlckV2ZW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRJdGVtRGF0YSA9IGdldEl0ZW1EYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5rZXlEb3duSGFuZGxlciA9IGtleURvd25IYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMuZmlsdGVyZWREYXRhID0gW107XG4gICAgdGhpcy5maWx0ZXJFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5maWx0ZXJQbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlclRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkaW5nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5tdWx0aXBsZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0aW9uRm9sbG93c0ZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmRhdGFGb3JGaWx0ZXIgPSBbXTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGluaXRpYWxpemUuY2FsbCh0aGlzKTtcbiAgICBpbml0aWFsaXplT2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY2xlYW5VcE9ic2VydmVyLmNhbGwodGhpcyk7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgaGFuZGxlSW5pdGlhbEZpbHRlci5jYWxsKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgY2FsY2l0ZUxpc3RJdGVtUmVtb3ZlSGFuZGxlcihldmVudCkge1xuICAgIHJlbW92ZUl0ZW0uY2FsbCh0aGlzLCBldmVudCk7XG4gIH1cbiAgY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIGNhbGNpdGVMaXN0SXRlbUNoYW5nZUhhbmRsZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gIH1cbiAgY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1Qcm9wc0NoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnNldFVwRmlsdGVyKCk7XG4gIH1cbiAgY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1WYWx1ZUNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVZhbHVlQ2hhbmdlSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBjYWxjaXRlTGlzdEZvY3VzT3V0SGFuZGxlcihldmVudCkge1xuICAgIGNhbGNpdGVMaXN0Rm9jdXNPdXRIYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0VXBJdGVtcygpIHtcbiAgICBzZXRVcEl0ZW1zLmNhbGwodGhpcywgXCJjYWxjaXRlLXBpY2stbGlzdC1pdGVtXCIpO1xuICB9XG4gIHNldFVwRmlsdGVyKCkge1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZGF0YUZvckZpbHRlciA9IHRoaXMuZ2V0SXRlbURhdGEoKTtcbiAgICB9XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBSZXR1cm5zIHRoZSBjb21wb25lbnQncyBzZWxlY3RlZCBgY2FsY2l0ZS1waWNrLWxpc3QtaXRlbWBzLiAqL1xuICBhc3luYyBnZXRTZWxlY3RlZEl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmFsdWVzO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIGZvY3VzSWRcbiAgICovXG4gIGFzeW5jIHNldEZvY3VzKGZvY3VzSWQpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgcmV0dXJuIHNldEZvY3VzLmNhbGwodGhpcywgZm9jdXNJZCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldEljb25UeXBlKCkge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGxlID8gSUNPTl9UWVBFUy5zcXVhcmUgOiBJQ09OX1RZUEVTLmNpcmNsZTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGgoTGlzdCwgeyBvbktleURvd246IHRoaXMua2V5RG93bkhhbmRsZXIsIHByb3BzOiB0aGlzIH0pO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5QaWNrTGlzdC5zdHlsZSA9IHBpY2tMaXN0Q3NzO1xuXG5jb25zdCBwaWNrTGlzdEdyb3VwQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7bWFyZ2luLWJsb2NrLWVuZDowLjI1cmVtO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9Omhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ibG9jay1lbmQ6MHB4fS5oZWFkZXJ7bWFyZ2luOjBweDtkaXNwbGF5OmZsZXg7YWxpZ24tY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjtmaWxsOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9LmhlYWRpbmd7bWFyZ2luOjBweDtwYWRkaW5nOjBweDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSl9LmhlYWRlciAuaGVhZGluZ3tmbGV4OjEgMSBhdXRvO3BhZGRpbmc6MC41cmVtfS5oZWFkaW5ne21hcmdpbi1ibG9jazowLjVyZW07bWFyZ2luLWlubGluZToxcmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MS4zNzU7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfS5jb250YWluZXItLWluZGVudGVke21hcmdpbi1pbmxpbmUtc3RhcnQ6MS41cmVtfVwiO1xuXG5jb25zdCBQaWNrTGlzdEdyb3VwID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmdyb3VwVGl0bGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkaW5nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVsLCBncm91cFRpdGxlLCBoZWFkaW5nTGV2ZWwgfSA9IHRoaXM7XG4gICAgY29uc3QgaGFzUGFyZW50SXRlbSA9IGdldFNsb3R0ZWQoZWwsIFNMT1RTLnBhcmVudEl0ZW0pICE9PSBudWxsO1xuICAgIGNvbnN0IHNlY3Rpb25DbGFzc2VzID0ge1xuICAgICAgW0NTUy5jb250YWluZXJdOiB0cnVlLFxuICAgICAgW0NTUy5pbmRlbnRlZF06IGhhc1BhcmVudEl0ZW1cbiAgICB9O1xuICAgIGNvbnN0IHRpdGxlID0gZ3JvdXBUaXRsZTtcbiAgICBjb25zdCBwYXJlbnRMZXZlbCA9IGVsLmNsb3Nlc3QoXCJjYWxjaXRlLXBpY2stbGlzdFwiKT8uaGVhZGluZ0xldmVsO1xuICAgIGNvbnN0IHJlbGF0aXZlTGV2ZWwgPSBwYXJlbnRMZXZlbCA/IGNvbnN0cmFpbkhlYWRpbmdMZXZlbChwYXJlbnRMZXZlbCArIDEpIDogbnVsbDtcbiAgICBjb25zdCBsZXZlbCA9IGhlYWRpbmdMZXZlbCB8fCByZWxhdGl2ZUxldmVsO1xuICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgdGl0bGUgPyAoaChIZWFkaW5nLCB7IGNsYXNzOiBDU1MuaGVhZGluZywgbGV2ZWw6IGxldmVsIH0sIHRpdGxlKSkgOiBudWxsLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLnBhcmVudEl0ZW0gfSksIGgoXCJzZWN0aW9uXCIsIHsgY2xhc3M6IHNlY3Rpb25DbGFzc2VzIH0sIGgoXCJzbG90XCIsIG51bGwpKSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5QaWNrTGlzdEdyb3VwLnN0eWxlID0gcGlja0xpc3RHcm91cENzcztcblxuY29uc3QgcGlja0xpc3RJdGVtQ3NzID0gXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO0BrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHttYXJnaW46MHB4O21hcmdpbi1ibG9jay1lbmQ6MXB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6c3RyZXRjaDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpOy0tdHctc2hhZG93OjAgMXB4IDAgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7LS10dy1zaGFkb3ctY29sb3JlZDowIDFweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpO2FuaW1hdGlvbjpjYWxjaXRlLWZhZGUtaW4gdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX06aG9zdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGFiZWx7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH0ubGFiZWw6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5sYWJlbDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX06aG9zdChbbm9uLWludGVyYWN0aXZlXTpob3Zlcil7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Omhvc3QoW25vbi1pbnRlcmFjdGl2ZV0pIC5sYWJlbCw6aG9zdChbbm9uLWludGVyYWN0aXZlXSkgLmljb257cG9pbnRlci1ldmVudHM6bm9uZX0uaWNvbnttYXJnaW4tYmxvY2s6MHB4O2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzowLjI1cmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO2ZsZXg6MCAwIGF1dG87bGluZS1oZWlnaHQ6MH0uaWNvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0uaWNvbi1kb3R7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEuNXJlbTthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzowLjVyZW19Lmljb24tZG90OmJlZm9yZXtvcGFjaXR5OjA7Y29udGVudDpcXFwi4oCiXFxcIn0uaWNvbiBjYWxjaXRlLWljb257b3BhY2l0eTowfTpob3N0KFtzZWxlY3RlZF0pIC5pY29uLWRvdDpiZWZvcmUsOmhvc3QoW3NlbGVjdGVkXSkgLmljb24gY2FsY2l0ZS1pY29ue3RyYW5zaXRpb246b3BhY2l0eSB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpO29wYWNpdHk6MX0udGV4dC1jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtd3JhcDpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmctYmxvY2s6MC41cmVtO3BhZGRpbmctaW5saW5lOjAuNzVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NTt3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9LnRpdGxle2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmRlc2NyaXB0aW9ue21hcmdpbi1ibG9jay1zdGFydDowLjEyNXJlbTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfS5hY3Rpb25ze21hcmdpbjowcHg7ZGlzcGxheTpmbGV4O2ZsZXg6MCAxIGF1dG87YWxpZ24taXRlbXM6c3RyZXRjaDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LmFjdGlvbnMtLXN0YXJ0fi5sYWJlbHtwYWRkaW5nLWlubGluZS1zdGFydDowLjI1cmVtfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX1cIjtcblxuY29uc3QgUGlja0xpc3RJdGVtID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0SXRlbUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RJdGVtUmVtb3ZlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTGlzdEl0ZW1SZW1vdmVcIiwgNyk7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVByb3BzQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVByb3BzQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1WYWx1ZUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1WYWx1ZUNoYW5nZVwiLCA2KTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnBpY2tMaXN0Q2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAodGhpcy5kZXNlbGVjdERpc2FibGVkICYmIHRoaXMuc2VsZWN0ZWQpIHx8IHRoaXMubm9uSW50ZXJhY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zaGlmdFByZXNzZWQgPSBldmVudC5zaGlmdEtleTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcbiAgICB9O1xuICAgIHRoaXMucGlja0xpc3RLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCh0aGlzLmRlc2VsZWN0RGlzYWJsZWQgJiYgdGhpcy5zZWxlY3RlZCkgfHwgdGhpcy5ub25JbnRlcmFjdGl2ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnJlbW92ZUNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUxpc3RJdGVtUmVtb3ZlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVzZWxlY3REaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubm9uSW50ZXJhY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmljb24gPSBudWxsO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZW1vdmFibGUgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gIH1cbiAgZGVzY3JpcHRpb25XYXRjaEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVByb3BzQ2hhbmdlLmVtaXQoKTtcbiAgfVxuICBsYWJlbFdhdGNoSGFuZGxlcigpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbExpc3RJdGVtUHJvcHNDaGFuZ2UuZW1pdCgpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBtZXRhZGF0YVdhdGNoSGFuZGxlcigpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbExpc3RJdGVtUHJvcHNDaGFuZ2UuZW1pdCgpO1xuICB9XG4gIHNlbGVjdGVkV2F0Y2hIYW5kbGVyKCkge1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlLmVtaXQoe1xuICAgICAgaXRlbTogdGhpcy5lbCxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICBzaGlmdFByZXNzZWQ6IHRoaXMuc2hpZnRQcmVzc2VkXG4gICAgfSk7XG4gICAgdGhpcy5zaGlmdFByZXNzZWQgPSBmYWxzZTtcbiAgfVxuICB2YWx1ZVdhdGNoSGFuZGxlcihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbExpc3RJdGVtVmFsdWVDaGFuZ2UuZW1pdCh7IG9sZFZhbHVlLCBuZXdWYWx1ZSB9KTtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcywgdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS1waWNrLWxpc3RcIikgPyBcIm1hbmFnZWRcIiA6IGZhbHNlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIHNlbGVjdGlvbiBzdGF0ZS4gQnkgZGVmYXVsdCB0aGlzIHdvbid0IHRyaWdnZXIgYW4gZXZlbnQuXG4gICAqIFRoZSBmaXJzdCBhcmd1bWVudCBhbGxvd3MgdGhlIHZhbHVlIHRvIGJlIGNvZXJjZWQsIHJhdGhlciB0aGFuIHN3YXBwaW5nIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIGNvZXJjZVxuICAgKi9cbiAgYXN5bmMgdG9nZ2xlU2VsZWN0ZWQoY29lcmNlKSB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHR5cGVvZiBjb2VyY2UgPT09IFwiYm9vbGVhblwiID8gY29lcmNlIDogIXRoaXMuc2VsZWN0ZWQ7XG4gIH1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMuZm9jdXNFbD8uZm9jdXMoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVySWNvbigpIHtcbiAgICBjb25zdCB7IGljb24sIGljb25GbGlwUnRsIH0gPSB0aGlzO1xuICAgIGlmICghaWNvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoaChcInNwYW5cIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTJDEuaWNvbl06IHRydWUsXG4gICAgICAgIFtDU1MkMS5pY29uRG90XTogaWNvbiA9PT0gSUNPTl9UWVBFUy5jaXJjbGVcbiAgICAgIH0sIG9uQ2xpY2s6IHRoaXMucGlja0xpc3RDbGlja0hhbmRsZXIgfSwgaWNvbiA9PT0gSUNPTl9UWVBFUy5zcXVhcmUgPyAoaChcImNhbGNpdGUtaWNvblwiLCB7IGZsaXBSdGw6IGljb25GbGlwUnRsLCBpY29uOiBJQ09OUy5jaGVja2VkLCBzY2FsZTogXCJzXCIgfSkpIDogbnVsbCkpO1xuICB9XG4gIHJlbmRlclJlbW92ZUFjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmFibGUgPyAoaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgY2xhc3M6IENTUyQxLnJlbW92ZSwgaWNvbjogSUNPTlMucmVtb3ZlLCBvbkNsaWNrOiB0aGlzLnJlbW92ZUNsaWNrSGFuZGxlciwgc2xvdDogU0xPVFMkMS5hY3Rpb25zRW5kLCB0ZXh0OiB0aGlzLm1lc3NhZ2VzLnJlbW92ZSB9KSkgOiBudWxsO1xuICB9XG4gIHJlbmRlckFjdGlvbnNTdGFydCgpIHtcbiAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGhhc0FjdGlvbnNTdGFydCA9IGdldFNsb3R0ZWQoZWwsIFNMT1RTJDEuYWN0aW9uc1N0YXJ0KTtcbiAgICByZXR1cm4gaGFzQWN0aW9uc1N0YXJ0ID8gKGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTJDEuYWN0aW9uc106IHRydWUsIFtDU1MkMS5hY3Rpb25zU3RhcnRdOiB0cnVlIH0gfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUyQxLmFjdGlvbnNTdGFydCB9KSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJBY3Rpb25zRW5kKCkge1xuICAgIGNvbnN0IHsgZWwsIHJlbW92YWJsZSB9ID0gdGhpcztcbiAgICBjb25zdCBoYXNBY3Rpb25zRW5kID0gZ2V0U2xvdHRlZChlbCwgU0xPVFMkMS5hY3Rpb25zRW5kKTtcbiAgICByZXR1cm4gaGFzQWN0aW9uc0VuZCB8fCByZW1vdmFibGUgPyAoaChcImRpdlwiLCB7IGNsYXNzOiB7IFtDU1MkMS5hY3Rpb25zXTogdHJ1ZSwgW0NTUyQxLmFjdGlvbnNFbmRdOiB0cnVlIH0gfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUyQxLmFjdGlvbnNFbmQgfSksIHRoaXMucmVuZGVyUmVtb3ZlQWN0aW9uKCkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGxhYmVsIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgdGhpcy5yZW5kZXJJY29uKCksIHRoaXMucmVuZGVyQWN0aW9uc1N0YXJ0KCksIGgoXCJsYWJlbFwiLCB7IFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgY2xhc3M6IENTUyQxLmxhYmVsLCBvbkNsaWNrOiB0aGlzLnBpY2tMaXN0Q2xpY2tIYW5kbGVyLCBvbktleURvd246IHRoaXMucGlja0xpc3RLZXlEb3duSGFuZGxlciwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGZvY3VzRWwpID0+ICh0aGlzLmZvY3VzRWwgPSBmb2N1c0VsKSB9LCBoKFwiZGl2XCIsIHsgXCJhcmlhLWNoZWNrZWRcIjogdG9BcmlhQm9vbGVhbih0aGlzLnNlbGVjdGVkKSwgY2xhc3M6IENTUyQxLnRleHRDb250YWluZXIsIHJvbGU6IFwibWVudWl0ZW1jaGVja2JveFwiIH0sIGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUyQxLnRpdGxlIH0sIGxhYmVsKSwgZGVzY3JpcHRpb24gPyBoKFwic3BhblwiLCB7IGNsYXNzOiBDU1MkMS5kZXNjcmlwdGlvbiB9LCBkZXNjcmlwdGlvbikgOiBudWxsKSksIHRoaXMucmVuZGVyQWN0aW9uc0VuZCgpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImRlc2NyaXB0aW9uXCI6IFtcImRlc2NyaXB0aW9uV2F0Y2hIYW5kbGVyXCJdLFxuICAgIFwibGFiZWxcIjogW1wibGFiZWxXYXRjaEhhbmRsZXJcIl0sXG4gICAgXCJkZWZhdWx0TWVzc2FnZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcIm1ldGFkYXRhXCI6IFtcIm1ldGFkYXRhV2F0Y2hIYW5kbGVyXCJdLFxuICAgIFwic2VsZWN0ZWRcIjogW1wic2VsZWN0ZWRXYXRjaEhhbmRsZXJcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZVdhdGNoSGFuZGxlclwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxufTtcblBpY2tMaXN0SXRlbS5zdHlsZSA9IHBpY2tMaXN0SXRlbUNzcztcblxuZXhwb3J0IHsgUGlja0xpc3QgYXMgY2FsY2l0ZV9waWNrX2xpc3QsIFBpY2tMaXN0R3JvdXAgYXMgY2FsY2l0ZV9waWNrX2xpc3RfZ3JvdXAsIFBpY2tMaXN0SXRlbSBhcyBjYWxjaXRlX3BpY2tfbGlzdF9pdGVtIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgZyBhcyBnZXRVc2VyQWdlbnRTdHJpbmcgfSBmcm9tICcuL2Jyb3dzZXItOTliYzYyY2YuanMnO1xuXG4vLyDimqDvuI8gYnJvd3Nlci1zbmlmZmluZyBpcyBub3QgYSBiZXN0IHByYWN0aWNlIGFuZCBzaG91bGQgYmUgYXZvaWRlZCDimqDvuI9cbmNvbnN0IGlzRmlyZWZveCA9IC9maXJlZm94L2kudGVzdChnZXRVc2VyQWdlbnRTdHJpbmcoKSk7XG5jb25zdCBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudCA9IGlzRmlyZWZveFxuICA/IG5ldyBXZWFrTWFwKClcbiAgOiBudWxsO1xuZnVuY3Rpb24gaW50ZXJjZXB0ZWRDbGljaygpIHtcbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gdGhpcztcbiAgaWYgKCFkaXNhYmxlZCkge1xuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljay5jYWxsKHRoaXMpO1xuICB9XG59XG5mdW5jdGlvbiBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG4gIGNvbnN0IGludGVyYWN0aXZlRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGludGVyYWN0aXZlRWxlbWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gaW50ZXJhY3RpdmVFbGVtZW50O1xuICBpZiAoZGlzYWJsZWQpIHtcbiAgICAvLyBwcmV2ZW50IGNsaWNrIGZyb20gbW92aW5nIGZvY3VzIG9uIGhvc3RcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzID0gW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdO1xuZnVuY3Rpb24gb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQoZXZlbnQpIHtcbiAgaWYgKGlzRmlyZWZveCAmJiAhaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGV2ZW50LnRhcmdldCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAvLyBwcmV2ZW50IGRpc2FsbG93ZWQgbW91c2UgZXZlbnRzIGZyb20gYmVpbmcgZW1pdHRlZCBvbiB0aGUgZGlzYWJsZWQgaG9zdCAocGVyIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvaHRtbC9pc3N1ZXMvNTg4NilcbiAgLy/imqAgd2UgZ2VuZXJhbGx5IGF2b2lkIHN0b3BwaW5nIHByb3BhZ2F0aW9uIG9mIGV2ZW50cywgYnV0IHRoaXMgaXMgbmVlZGVkIHRvIGFkaGVyZSB0byB0aGUgaW50ZW5kZWQgc3BlYyBjaGFuZ2VzIGFib3ZlIOKaoFxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBjYXB0dXJlT25seU9wdGlvbnMgPSB7IGNhcHR1cmU6IHRydWUgfTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXBkYXRlcyB0aGUgaG9zdCBlbGVtZW50IHRvIHByZXZlbnQga2V5Ym9hcmQgaW50ZXJhY3Rpb24gb24gaXRzIHN1YnRyZWUgYW5kIHNldHMgdGhlIGFwcHJvcHJpYXRlIGFyaWEgYXR0cmlidXRlIGZvciBhY2Nlc3NpYmlsaXR5LlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRSZW5kZXJgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqICoqTm90ZXMqKlxuICpcbiAqIHRoaXMgdXRpbCBpcyBub3QgbmVlZGVkIGZvciBzaW1wbGUgY29tcG9uZW50cyB3aG9zZSByb290IGVsZW1lbnQgb3IgZWxlbWVudHMgYXJlIGFuIGludGVyYWN0aXZlIGNvbXBvbmVudCAoY3VzdG9tIGVsZW1lbnQgb3IgbmF0aXZlIGNvbnRyb2wpLiBGb3IgdGhvc2UgY2FzZXMsIHNldCB0aGUgYGRpc2FibGVkYCBwcm9wcyBvbiB0aGUgcm9vdCBjb21wb25lbnRzIGluc3RlYWQuXG4gKiB0ZWNobmljYWxseSwgdXNlcnMgY2FuIG92ZXJyaWRlIGB0YWJpbmRleGAgYW5kIHJlc3RvcmUga2V5Ym9hcmQgbmF2aWdhdGlvbiwgYnV0IHRoaXMgd2lsbCBiZSBjb25zaWRlcmVkIHVzZXIgZXJyb3JcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gaG9zdElzVGFiYmFibGVcbiAqL1xuZnVuY3Rpb24gdXBkYXRlSG9zdEludGVyYWN0aW9uKGNvbXBvbmVudCwgaG9zdElzVGFiYmFibGUgPSBmYWxzZSkge1xuICBpZiAoY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIGlmIChjb21wb25lbnQuZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xuICBpZiAodHlwZW9mIGhvc3RJc1RhYmJhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgaG9zdElzVGFiYmFibGUuY2FsbChjb21wb25lbnQpID8gXCIwXCIgOiBcIi0xXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSB0cnVlKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSA7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xufVxuZnVuY3Rpb24gYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmVsLmNsaWNrID0gaW50ZXJjZXB0ZWRDbGljaztcbiAgYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIGFkZEludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIHtcbiAgcmV0dXJuIGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50LmdldChjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBkZWxldGUgY29tcG9uZW50LmVsLmNsaWNrOyAvLyBmYWxsYmFjayBvbiBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2tcbiAgcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoaXNGaXJlZm94ID8gZ2V0UGFyZW50RWxlbWVudChjb21wb25lbnQpIDogY29tcG9uZW50LmVsKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUludGVyYWN0aW9uTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgLy8gdGhpcyBwYXRoIGlzIG9ubHkgYXBwbGljYWJsZSB0byBGaXJlZm94XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG9uUG9pbnRlckRvd24sIGNhcHR1cmVPbmx5T3B0aW9ucyk7XG4gIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgaGVscHMgZGlzYWJsZSBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghY29tcG9uZW50LmRpc2FibGVkIHx8ICFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcGFyZW50ID0gY29tcG9uZW50LmVsLnBhcmVudEVsZW1lbnQgfHwgY29tcG9uZW50LmVsOyAvKiBhc3N1bWUgZWxlbWVudCBpcyBob3N0IGlmIGl0IGhhcyBubyBwYXJlbnQgd2hlbiBjb25uZWN0ZWQgKi9cbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuc2V0KGNvbXBvbmVudC5lbCwgcGFyZW50KTtcbiAgYmxvY2tJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgcmVzdG9yZXMgaW50ZXJhY3Rpdml0eSB0byBkaXNhYmxlZCBjb21wb25lbnRzIGNvbnNpc3RlbnRseSBpbiBGaXJlZm94LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgIGFuZCBpcyBvbmx5IG5lZWRlZCBmb3IgRmlyZWZveCBhcyBpdCBkb2VzIG5vdCBjYWxsIGNhcHR1cmUgZXZlbnQgbGlzdGVuZXJzIGJlZm9yZSBub24tY2FwdHVyZSBvbmVzIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTczMTUwNCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0SW50ZXJhY3RpdmUoY29tcG9uZW50KSB7XG4gIGlmICghaXNGaXJlZm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFsd2F5cyByZW1vdmUgb24gZGlzY29ubmVjdCBhcyByZW5kZXIgb3IgY29ubmVjdCB3aWxsIHJlc3RvcmUgaXRcbiAgaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIHJlc3RvcmVJbnRlcmFjdGlvbihjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0SW50ZXJhY3RpdmUgYXMgYywgZGlzY29ubmVjdEludGVyYWN0aXZlIGFzIGQsIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiBhcyB1IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=