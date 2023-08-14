"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-value-list_2_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-value-list_2.entry.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-value-list_2.entry.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_value_list": () => (/* binding */ ValueList),
/* harmony export */   "calcite_value_list_item": () => (/* binding */ ValueListItem)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
/* harmony import */ var _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources-298c32e6.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-298c32e6.js");
/* harmony import */ var _sortableComponent_8d7c9c05_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sortableComponent-8d7c9c05.js */ "./node_modules/@esri/calcite-components/dist/esm/sortableComponent-8d7c9c05.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./conditionalSlot-946fb911.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-946fb911.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _array_8048effa_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array-8048effa.js */ "./node_modules/@esri/calcite-components/dist/esm/array-8048effa.js");
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */

















const CSS = {
  container: "container",
  handle: "handle"
};
var ICON_TYPES;
(function (ICON_TYPES) {
  ICON_TYPES["grip"] = "grip";
})(ICON_TYPES || (ICON_TYPES = {}));

function getScreenReaderText(item, status, valueList) {
  const { items, messages } = valueList;
  const total = items.length;
  const position = (0,_resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.g)(valueList, item) + 1;
  const template = status === "idle"
    ? messages.dragHandleIdle
    : status === "active"
      ? messages.dragHandleActive
      : status === "change"
        ? messages.dragHandleChange
        : messages.dragHandleCommit;
  return replacePlaceholders(template, item.label, position, total);
}
function getHandleAndItemElement(event) {
  const handle = event
    .composedPath()
    .find((item) => item.dataset?.jsHandle !== undefined);
  const item = event
    .composedPath()
    .find((item) => item.tagName?.toLowerCase() === "calcite-value-list-item");
  return { handle, item };
}
function replacePlaceholders(text, label, position, total) {
  const replacePosition = text.replace("${position}", position.toString());
  const replaceLabel = replacePosition.replace("${itemLabel}", label);
  return replaceLabel.replace("${total}", total.toString());
}

const valueListCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}calcite-value-list-item:last-of-type{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:center;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-app-z-index-sticky)}calcite-filter{margin-block-end:1px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";

const ValueList = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteListChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListChange", 6);
    this.calciteListOrderChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListOrderChange", 6);
    this.calciteListFilter = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListFilter", 6);
    this.lastSelectedItem = null;
    this.mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_4__.c)("mutation", _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.m.bind(this));
    this.setFilterEl = (el) => {
      this.filterEl = el;
    };
    this.setFilteredItems = (filteredItems) => {
      this.filteredItems = filteredItems;
    };
    this.deselectRemovedItems = _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.d.bind(this);
    this.deselectSiblingItems = _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.a.bind(this);
    this.selectSiblings = _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.s.bind(this);
    this.handleFilter = _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.h.bind(this);
    this.handleFilterEvent = _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.b.bind(this);
    this.getItemData = _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.c.bind(this);
    this.keyDownHandler = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const { handle, item } = getHandleAndItemElement(event);
      if (handle && !item.handleActivated && event.key === " ") {
        this.updateScreenReaderText(getScreenReaderText(item, "commit", this));
      }
      if (!handle || !item.handleActivated) {
        _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.k.call(this, event);
        return;
      }
      event.preventDefault();
      const { items } = this;
      if (event.key === " ") {
        this.updateScreenReaderText(getScreenReaderText(item, "active", this));
      }
      if ((event.key !== "ArrowUp" && event.key !== "ArrowDown") || items.length <= 1) {
        return;
      }
      const { el } = this;
      const nextIndex = (0,_resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.e)(this, item, event.key === "ArrowUp" ? "up" : "down");
      if (nextIndex === items.length - 1) {
        el.appendChild(item);
      }
      else {
        const itemAtNextIndex = el.children[nextIndex];
        const insertionReferenceItem = itemAtNextIndex === item.nextElementSibling
          ? itemAtNextIndex.nextElementSibling
          : itemAtNextIndex;
        el.insertBefore(item, insertionReferenceItem);
      }
      this.items = this.getItems();
      this.calciteListOrderChange.emit(this.items.map(({ value }) => value));
      requestAnimationFrame(() => (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_8__.f)(handle));
      item.handleActivated = true;
      this.updateHandleAriaLabel(handle, getScreenReaderText(item, "change", this));
    };
    this.storeAssistiveEl = (el) => {
      this.assistiveTextEl = el;
    };
    this.handleFocusIn = (event) => {
      const { handle, item } = getHandleAndItemElement(event);
      if (!item?.handleActivated && item && handle) {
        this.updateHandleAriaLabel(handle, getScreenReaderText(item, "idle", this));
      }
    };
    this.disabled = false;
    this.dragEnabled = false;
    this.filteredItems = [];
    this.filteredData = [];
    this.filterEnabled = false;
    this.filterPlaceholder = undefined;
    this.filterText = undefined;
    this.group = undefined;
    this.loading = false;
    this.multiple = false;
    this.selectionFollowsFocus = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.dataForFilter = [];
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.selectedValues = new Map();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_5__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.i.call(this);
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.f.call(this);
    this.setUpSorting();
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
    await (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.j.call(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_sortableComponent_8d7c9c05_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.l.call(this);
  }
  calciteListFocusOutHandler(event) {
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.n.call(this, event);
  }
  calciteListItemRemoveHandler(event) {
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.r.call(this, event);
  }
  calciteListItemChangeHandler(event) {
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.o.call(this, event);
  }
  calciteInternalListItemPropsChangeHandler(event) {
    event.stopPropagation();
    this.setUpFilter();
  }
  calciteInternalListItemValueChangeHandler(event) {
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.p.call(this, event);
    event.stopPropagation();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  getItems() {
    return Array.from(this.el.querySelectorAll("calcite-value-list-item"));
  }
  setUpItems() {
    _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.q.call(this, "calcite-value-list-item");
    this.setUpSorting();
  }
  setUpFilter() {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  }
  setUpSorting() {
    const { dragEnabled, group } = this;
    if (!dragEnabled) {
      return;
    }
    (0,_sortableComponent_8d7c9c05_js__WEBPACK_IMPORTED_MODULE_7__.c)(this, {
      dataIdAttr: "id",
      group,
      handle: `.${CSS.handle}`,
      draggable: "calcite-value-list-item",
      onStart: () => {
        _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.l.call(this);
        (0,_sortableComponent_8d7c9c05_js__WEBPACK_IMPORTED_MODULE_7__.o)(this);
      },
      onEnd: () => {
        (0,_sortableComponent_8d7c9c05_js__WEBPACK_IMPORTED_MODULE_7__.a)(this);
        _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.f.call(this);
      },
      onUpdate: () => {
        this.items = Array.from(this.el.querySelectorAll("calcite-value-list-item"));
        const values = this.items.map((item) => item.value);
        this.calciteListOrderChange.emit(values);
      }
    });
  }
  handleBlur() {
    if (this.dragEnabled) {
      this.updateScreenReaderText("");
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Returns the currently selected items */
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
    return _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.t.call(this, focusId);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  getIconType() {
    let type = null;
    if (this.dragEnabled) {
      type = ICON_TYPES.grip;
    }
    return type;
  }
  updateScreenReaderText(text) {
    this.assistiveTextEl.textContent = text;
  }
  updateHandleAriaLabel(handleElement, text) {
    handleElement.ariaLabel = text;
  }
  handleValueListItemBlur(event) {
    const { item, handle } = event.detail;
    if (!item?.handleActivated && item) {
      this.updateHandleAriaLabel(handle, getScreenReaderText(item, "idle", this));
    }
    event.stopPropagation();
  }
  render() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.L, { onBlur: this.handleBlur, onFocusin: this.handleFocusIn, onKeyDown: this.keyDownHandler, props: this }));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
ValueList.style = valueListCss;

const ICONS = {
  drag: "drag"
};
const SLOTS = {
  actionsEnd: "actions-end",
  actionsStart: "actions-start"
};

const valueListItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{margin-block-end:1px;box-sizing:border-box;display:flex;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}:host *{box-sizing:border-box}calcite-pick-list-item{position:relative;margin:0px;flex-grow:1;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([active]),:host([selected]){--tw-shadow:0 0 0 1px var(--calcite-ui-brand);--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.handle{display:flex;cursor:move;align-items:center;justify-content:center;border-style:none;background-color:transparent;padding-block:0px;padding-inline:0.25rem;color:var(--calcite-ui-border-input);outline-color:transparent}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";

const ValueListItem = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteListItemChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListItemChange", 6);
    this.calciteListItemRemove = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListItemRemove", 7);
    this.calciteValueListItemDragHandleBlur = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteValueListItemDragHandleBlur", 6);
    this.pickListItem = null;
    this.guid = `calcite-value-list-item-${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_10__.g)()}`;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.getPickListRef = (el) => (this.pickListItem = el);
    this.handleKeyDown = (event) => {
      if (event.key === " ") {
        this.handleActivated = !this.handleActivated;
      }
    };
    this.handleBlur = () => {
      this.handleActivated = false;
      this.calciteValueListItemDragHandleBlur.emit({ item: this.el, handle: this.handleEl });
    };
    this.handleSelectChange = (event) => {
      this.selected = event.detail.selected;
    };
    this.description = undefined;
    this.disabled = false;
    this.deselectDisabled = false;
    this.nonInteractive = false;
    this.handleActivated = false;
    this.icon = null;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.metadata = undefined;
    this.removable = false;
    this.selected = false;
    this.value = undefined;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_1__.u)(this, this.el.closest("calcite-value-list") ? "managed" : false);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Toggle the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   *
   * @param coerce
   */
  async toggleSelected(coerce) {
    this.pickListItem.toggleSelected(coerce);
  }
  /** Set focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.pickListItem?.setFocus();
  }
  calciteListItemChangeHandler(event) {
    // adjust item payload from wrapped item before bubbling
    event.detail.item = this.el;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsEnd() {
    const { el } = this;
    const hasActionsEnd = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_8__.g)(el, SLOTS.actionsEnd);
    return hasActionsEnd ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.actionsEnd, slot: _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.S.actionsEnd })) : null;
  }
  renderActionsStart() {
    const { el } = this;
    const hasActionsStart = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_8__.g)(el, SLOTS.actionsStart);
    return hasActionsStart ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.actionsStart, slot: _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.S.actionsStart })) : null;
  }
  renderHandle() {
    const { icon, iconFlipRtl } = this;
    if (icon === _resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.I.grip) {
      return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: {
          [_resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.C.handle]: true,
          [_resources_298c32e6_js__WEBPACK_IMPORTED_MODULE_6__.C.handleActivated]: this.handleActivated
        }, "data-js-handle": true, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, ref: (el) => (this.handleEl = el), role: "button", tabindex: "0" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { flipRtl: iconFlipRtl, icon: ICONS.drag, scale: "s" })));
    }
  }
  render() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { id: this.el.id || this.guid }, this.renderHandle(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-pick-list-item", { description: this.description, deselectDisabled: this.deselectDisabled, disabled: this.disabled, label: this.label, metadata: this.metadata, nonInteractive: this.nonInteractive, onCalciteListItemChange: this.handleSelectChange, removable: this.removable, selected: this.selected, value: this.value,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.getPickListRef }, this.renderActionsStart(), this.renderActionsEnd())));
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
ValueListItem.style = valueListItemCss;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMGFiNGY5NmU1ZTc5YzNiMWNjZWEyOThiMjNmYWUwMWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RztBQUNlO0FBQ1I7QUFDN0I7QUFDekI7QUFDNkQ7QUFDd2M7QUFDemE7QUFDbkY7QUFDdUQ7QUFDL0U7QUFDaEI7QUFDSjtBQUNFO0FBQ0c7QUFDQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQzs7QUFFakM7QUFDQSxVQUFVLGtCQUFrQjtBQUM1QjtBQUNBLG1CQUFtQix5REFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsMENBQTBDLFNBQVM7QUFDbkQsa0RBQWtELFVBQVU7QUFDNUQsaUNBQWlDLE1BQU07QUFDdkM7O0FBRUEsb0NBQW9DLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxN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QUFDQTtBQUNBLElBQUksMkRBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdEQUFlO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBSztBQUNqQiwwQkFBMEIsbURBQVU7QUFDcEMsNEJBQTRCLHFEQUFDLFdBQVcsOEJBQThCLGdFQUFrQixFQUFFO0FBQzFGO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakIsNEJBQTRCLG1EQUFVO0FBQ3RDLDhCQUE4QixxREFBQyxXQUFXLGdDQUFnQyxrRUFBb0IsRUFBRTtBQUNoRztBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEMsaUJBQWlCLDBEQUFpQjtBQUNsQyxjQUFjLHFEQUFDLFdBQVc7QUFDMUIsV0FBVyw0REFBWTtBQUN2QixXQUFXLHFFQUFxQjtBQUNoQyxTQUFTLG9KQUFvSixFQUFFLHFEQUFDLG1CQUFtQixvREFBb0Q7QUFDdk87QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBQyxDQUFDLGlEQUFJLElBQUksNkJBQTZCLHVCQUF1QixxREFBQyw2QkFBNkI7QUFDeEc7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxhQUFhLE9BQU8scURBQVU7QUFDOUI7QUFDQTs7QUFFcUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLXZhbHVlLWxpc3RfMi5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBhIGFzIGdldEVsZW1lbnQsIEggYXMgSG9zdCB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSB9IGZyb20gJy4vaW50ZXJhY3RpdmUtMGViMTM2MDAuanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLTgwNThlMzAwLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUtYTM1NjQ4Y2QuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4tZmFjMTMzOTQuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRJdGVtSW5kZXgsIG0gYXMgbXV0YXRpb25PYnNlcnZlckNhbGxiYWNrLCBkIGFzIGRlc2VsZWN0UmVtb3ZlZEl0ZW1zLCBhIGFzIGRlc2VsZWN0U2libGluZ0l0ZW1zLCBzIGFzIHNlbGVjdFNpYmxpbmdzLCBoIGFzIGhhbmRsZUZpbHRlciwgYiBhcyBoYW5kbGVGaWx0ZXJFdmVudCwgYyBhcyBnZXRJdGVtRGF0YSwgayBhcyBrZXlEb3duSGFuZGxlciwgZSBhcyBtb3ZlSXRlbUluZGV4LCBpIGFzIGluaXRpYWxpemUsIGYgYXMgaW5pdGlhbGl6ZU9ic2VydmVyLCBqIGFzIGhhbmRsZUluaXRpYWxGaWx0ZXIsIGwgYXMgY2xlYW5VcE9ic2VydmVyLCBuIGFzIGNhbGNpdGVMaXN0Rm9jdXNPdXRIYW5kbGVyLCByIGFzIHJlbW92ZUl0ZW0sIG8gYXMgY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlSGFuZGxlciwgcCBhcyBjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVZhbHVlQ2hhbmdlSGFuZGxlciwgcSBhcyBzZXRVcEl0ZW1zLCB0IGFzIHNldEZvY3VzLCBMIGFzIExpc3QsIEkgYXMgSUNPTl9UWVBFUyQxLCBDIGFzIENTUyQxLCBTIGFzIFNMT1RTJDEgfSBmcm9tICcuL3Jlc291cmNlcy0yOThjMzJlNi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRpc2Nvbm5lY3RTb3J0YWJsZUNvbXBvbmVudCwgYyBhcyBjb25uZWN0U29ydGFibGVDb21wb25lbnQsIG8gYXMgb25Tb3J0aW5nU3RhcnQsIGEgYXMgb25Tb3J0aW5nRW5kIH0gZnJvbSAnLi9zb3J0YWJsZUNvbXBvbmVudC04ZDdjOWMwNS5qcyc7XG5pbXBvcnQgeyBmIGFzIGZvY3VzRWxlbWVudCwgZyBhcyBnZXRTbG90dGVkIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC05NDZmYjkxMS5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0ICcuL2Jyb3dzZXItOTliYzYyY2YuanMnO1xuaW1wb3J0ICcuL2tleS04ZmYwZDEwMS5qcyc7XG5pbXBvcnQgJy4vYXJyYXktODA0OGVmZmEuanMnO1xuaW1wb3J0ICcuL2RlYm91bmNlLTA5NTBhOWI4LmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgaGFuZGxlOiBcImhhbmRsZVwiXG59O1xudmFyIElDT05fVFlQRVM7XG4oZnVuY3Rpb24gKElDT05fVFlQRVMpIHtcbiAgSUNPTl9UWVBFU1tcImdyaXBcIl0gPSBcImdyaXBcIjtcbn0pKElDT05fVFlQRVMgfHwgKElDT05fVFlQRVMgPSB7fSkpO1xuXG5mdW5jdGlvbiBnZXRTY3JlZW5SZWFkZXJUZXh0KGl0ZW0sIHN0YXR1cywgdmFsdWVMaXN0KSB7XG4gIGNvbnN0IHsgaXRlbXMsIG1lc3NhZ2VzIH0gPSB2YWx1ZUxpc3Q7XG4gIGNvbnN0IHRvdGFsID0gaXRlbXMubGVuZ3RoO1xuICBjb25zdCBwb3NpdGlvbiA9IGdldEl0ZW1JbmRleCh2YWx1ZUxpc3QsIGl0ZW0pICsgMTtcbiAgY29uc3QgdGVtcGxhdGUgPSBzdGF0dXMgPT09IFwiaWRsZVwiXG4gICAgPyBtZXNzYWdlcy5kcmFnSGFuZGxlSWRsZVxuICAgIDogc3RhdHVzID09PSBcImFjdGl2ZVwiXG4gICAgICA/IG1lc3NhZ2VzLmRyYWdIYW5kbGVBY3RpdmVcbiAgICAgIDogc3RhdHVzID09PSBcImNoYW5nZVwiXG4gICAgICAgID8gbWVzc2FnZXMuZHJhZ0hhbmRsZUNoYW5nZVxuICAgICAgICA6IG1lc3NhZ2VzLmRyYWdIYW5kbGVDb21taXQ7XG4gIHJldHVybiByZXBsYWNlUGxhY2Vob2xkZXJzKHRlbXBsYXRlLCBpdGVtLmxhYmVsLCBwb3NpdGlvbiwgdG90YWwpO1xufVxuZnVuY3Rpb24gZ2V0SGFuZGxlQW5kSXRlbUVsZW1lbnQoZXZlbnQpIHtcbiAgY29uc3QgaGFuZGxlID0gZXZlbnRcbiAgICAuY29tcG9zZWRQYXRoKClcbiAgICAuZmluZCgoaXRlbSkgPT4gaXRlbS5kYXRhc2V0Py5qc0hhbmRsZSAhPT0gdW5kZWZpbmVkKTtcbiAgY29uc3QgaXRlbSA9IGV2ZW50XG4gICAgLmNvbXBvc2VkUGF0aCgpXG4gICAgLmZpbmQoKGl0ZW0pID0+IGl0ZW0udGFnTmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gXCJjYWxjaXRlLXZhbHVlLWxpc3QtaXRlbVwiKTtcbiAgcmV0dXJuIHsgaGFuZGxlLCBpdGVtIH07XG59XG5mdW5jdGlvbiByZXBsYWNlUGxhY2Vob2xkZXJzKHRleHQsIGxhYmVsLCBwb3NpdGlvbiwgdG90YWwpIHtcbiAgY29uc3QgcmVwbGFjZVBvc2l0aW9uID0gdGV4dC5yZXBsYWNlKFwiJHtwb3NpdGlvbn1cIiwgcG9zaXRpb24udG9TdHJpbmcoKSk7XG4gIGNvbnN0IHJlcGxhY2VMYWJlbCA9IHJlcGxhY2VQb3NpdGlvbi5yZXBsYWNlKFwiJHtpdGVtTGFiZWx9XCIsIGxhYmVsKTtcbiAgcmV0dXJuIHJlcGxhY2VMYWJlbC5yZXBsYWNlKFwiJHt0b3RhbH1cIiwgdG90YWwudG9TdHJpbmcoKSk7XG59XG5cbmNvbnN0IHZhbHVlTGlzdENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDtmbGV4LWdyb3c6MDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX1jYWxjaXRlLXZhbHVlLWxpc3QtaXRlbTpsYXN0LW9mLXR5cGV7LS10dy1zaGFkb3c6MCAwICMwMDAwOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAwICMwMDAwO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX06aG9zdChbZmlsdGVyLWVuYWJsZWRdKSBoZWFkZXJ7bWFyZ2luLWJsb2NrLWVuZDowLjI1cmVtO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpOy0tdHctc2hhZG93OjAgMXB4IDAgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7LS10dy1zaGFkb3ctY29sb3JlZDowIDFweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0KFtmaWx0ZXItZW5hYmxlZF0pIGhlYWRlci5zdGlja3ktcG9ze3Bvc2l0aW9uOnN0aWNreTtpbnNldC1ibG9jay1zdGFydDowcHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LXN0aWNreSl9Y2FsY2l0ZS1maWx0ZXJ7bWFyZ2luLWJsb2NrLWVuZDoxcHh9LmFzc2lzdGl2ZS10ZXh0e3Bvc2l0aW9uOmFic29sdXRlO2lubGluZS1zaXplOjFweDtibG9jay1zaXplOjFweDtwYWRkaW5nOjA7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwLCAwLCAwLCAwKTt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXdpZHRoOjB9XCI7XG5cbmNvbnN0IFZhbHVlTGlzdCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlTGlzdENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUxpc3RDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTGlzdE9yZGVyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTGlzdE9yZGVyQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RGaWx0ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0RmlsdGVyXCIsIDYpO1xuICAgIHRoaXMubGFzdFNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCBtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5zZXRGaWx0ZXJFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5maWx0ZXJFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5zZXRGaWx0ZXJlZEl0ZW1zID0gKGZpbHRlcmVkSXRlbXMpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXM7XG4gICAgfTtcbiAgICB0aGlzLmRlc2VsZWN0UmVtb3ZlZEl0ZW1zID0gZGVzZWxlY3RSZW1vdmVkSXRlbXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc2VsZWN0U2libGluZ0l0ZW1zID0gZGVzZWxlY3RTaWJsaW5nSXRlbXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbGVjdFNpYmxpbmdzID0gc2VsZWN0U2libGluZ3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlciA9IGhhbmRsZUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyRXZlbnQgPSBoYW5kbGVGaWx0ZXJFdmVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0SXRlbURhdGEgPSBnZXRJdGVtRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgaGFuZGxlLCBpdGVtIH0gPSBnZXRIYW5kbGVBbmRJdGVtRWxlbWVudChldmVudCk7XG4gICAgICBpZiAoaGFuZGxlICYmICFpdGVtLmhhbmRsZUFjdGl2YXRlZCAmJiBldmVudC5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2NyZWVuUmVhZGVyVGV4dChnZXRTY3JlZW5SZWFkZXJUZXh0KGl0ZW0sIFwiY29tbWl0XCIsIHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIGlmICghaGFuZGxlIHx8ICFpdGVtLmhhbmRsZUFjdGl2YXRlZCkge1xuICAgICAgICBrZXlEb3duSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXM7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIiBcIikge1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcmVlblJlYWRlclRleHQoZ2V0U2NyZWVuUmVhZGVyVGV4dChpdGVtLCBcImFjdGl2ZVwiLCB0aGlzKSk7XG4gICAgICB9XG4gICAgICBpZiAoKGV2ZW50LmtleSAhPT0gXCJBcnJvd1VwXCIgJiYgZXZlbnQua2V5ICE9PSBcIkFycm93RG93blwiKSB8fCBpdGVtcy5sZW5ndGggPD0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgICAgY29uc3QgbmV4dEluZGV4ID0gbW92ZUl0ZW1JbmRleCh0aGlzLCBpdGVtLCBldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiID8gXCJ1cFwiIDogXCJkb3duXCIpO1xuICAgICAgaWYgKG5leHRJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpdGVtQXROZXh0SW5kZXggPSBlbC5jaGlsZHJlbltuZXh0SW5kZXhdO1xuICAgICAgICBjb25zdCBpbnNlcnRpb25SZWZlcmVuY2VJdGVtID0gaXRlbUF0TmV4dEluZGV4ID09PSBpdGVtLm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgID8gaXRlbUF0TmV4dEluZGV4Lm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgIDogaXRlbUF0TmV4dEluZGV4O1xuICAgICAgICBlbC5pbnNlcnRCZWZvcmUoaXRlbSwgaW5zZXJ0aW9uUmVmZXJlbmNlSXRlbSk7XG4gICAgICB9XG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgICAgdGhpcy5jYWxjaXRlTGlzdE9yZGVyQ2hhbmdlLmVtaXQodGhpcy5pdGVtcy5tYXAoKHsgdmFsdWUgfSkgPT4gdmFsdWUpKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBmb2N1c0VsZW1lbnQoaGFuZGxlKSk7XG4gICAgICBpdGVtLmhhbmRsZUFjdGl2YXRlZCA9IHRydWU7XG4gICAgICB0aGlzLnVwZGF0ZUhhbmRsZUFyaWFMYWJlbChoYW5kbGUsIGdldFNjcmVlblJlYWRlclRleHQoaXRlbSwgXCJjaGFuZ2VcIiwgdGhpcykpO1xuICAgIH07XG4gICAgdGhpcy5zdG9yZUFzc2lzdGl2ZUVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmFzc2lzdGl2ZVRleHRFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVGb2N1c0luID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZSwgaXRlbSB9ID0gZ2V0SGFuZGxlQW5kSXRlbUVsZW1lbnQoZXZlbnQpO1xuICAgICAgaWYgKCFpdGVtPy5oYW5kbGVBY3RpdmF0ZWQgJiYgaXRlbSAmJiBoYW5kbGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVIYW5kbGVBcmlhTGFiZWwoaGFuZGxlLCBnZXRTY3JlZW5SZWFkZXJUZXh0KGl0ZW0sIFwiaWRsZVwiLCB0aGlzKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMuZmlsdGVyZWREYXRhID0gW107XG4gICAgdGhpcy5maWx0ZXJFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5maWx0ZXJQbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlclRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ncm91cCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm11bHRpcGxlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3Rpb25Gb2xsb3dzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGFGb3JGaWx0ZXIgPSBbXTtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IG5ldyBNYXAoKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBpbml0aWFsaXplLmNhbGwodGhpcyk7XG4gICAgaW5pdGlhbGl6ZU9ic2VydmVyLmNhbGwodGhpcyk7XG4gICAgdGhpcy5zZXRVcFNvcnRpbmcoKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgaGFuZGxlSW5pdGlhbEZpbHRlci5jYWxsKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RTb3J0YWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBjbGVhblVwT2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgfVxuICBjYWxjaXRlTGlzdEZvY3VzT3V0SGFuZGxlcihldmVudCkge1xuICAgIGNhbGNpdGVMaXN0Rm9jdXNPdXRIYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuICB9XG4gIGNhbGNpdGVMaXN0SXRlbVJlbW92ZUhhbmRsZXIoZXZlbnQpIHtcbiAgICByZW1vdmVJdGVtLmNhbGwodGhpcywgZXZlbnQpO1xuICB9XG4gIGNhbGNpdGVMaXN0SXRlbUNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBjYWxjaXRlTGlzdEl0ZW1DaGFuZ2VIYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuICB9XG4gIGNhbGNpdGVJbnRlcm5hbExpc3RJdGVtUHJvcHNDaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zZXRVcEZpbHRlcigpO1xuICB9XG4gIGNhbGNpdGVJbnRlcm5hbExpc3RJdGVtVmFsdWVDaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1WYWx1ZUNoYW5nZUhhbmRsZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRJdGVtcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLXZhbHVlLWxpc3QtaXRlbVwiKSk7XG4gIH1cbiAgc2V0VXBJdGVtcygpIHtcbiAgICBzZXRVcEl0ZW1zLmNhbGwodGhpcywgXCJjYWxjaXRlLXZhbHVlLWxpc3QtaXRlbVwiKTtcbiAgICB0aGlzLnNldFVwU29ydGluZygpO1xuICB9XG4gIHNldFVwRmlsdGVyKCkge1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZGF0YUZvckZpbHRlciA9IHRoaXMuZ2V0SXRlbURhdGEoKTtcbiAgICB9XG4gIH1cbiAgc2V0VXBTb3J0aW5nKCkge1xuICAgIGNvbnN0IHsgZHJhZ0VuYWJsZWQsIGdyb3VwIH0gPSB0aGlzO1xuICAgIGlmICghZHJhZ0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29ubmVjdFNvcnRhYmxlQ29tcG9uZW50KHRoaXMsIHtcbiAgICAgIGRhdGFJZEF0dHI6IFwiaWRcIixcbiAgICAgIGdyb3VwLFxuICAgICAgaGFuZGxlOiBgLiR7Q1NTLmhhbmRsZX1gLFxuICAgICAgZHJhZ2dhYmxlOiBcImNhbGNpdGUtdmFsdWUtbGlzdC1pdGVtXCIsXG4gICAgICBvblN0YXJ0OiAoKSA9PiB7XG4gICAgICAgIGNsZWFuVXBPYnNlcnZlci5jYWxsKHRoaXMpO1xuICAgICAgICBvblNvcnRpbmdTdGFydCh0aGlzKTtcbiAgICAgIH0sXG4gICAgICBvbkVuZDogKCkgPT4ge1xuICAgICAgICBvblNvcnRpbmdFbmQodGhpcyk7XG4gICAgICAgIGluaXRpYWxpemVPYnNlcnZlci5jYWxsKHRoaXMpO1xuICAgICAgfSxcbiAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtdmFsdWUtbGlzdC1pdGVtXCIpKTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5pdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpO1xuICAgICAgICB0aGlzLmNhbGNpdGVMaXN0T3JkZXJDaGFuZ2UuZW1pdCh2YWx1ZXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGhhbmRsZUJsdXIoKSB7XG4gICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlU2NyZWVuUmVhZGVyVGV4dChcIlwiKTtcbiAgICB9XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbXMgKi9cbiAgYXN5bmMgZ2V0U2VsZWN0ZWRJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZhbHVlcztcbiAgfVxuICAvKipcbiAgICogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBmb2N1c0lkXG4gICAqL1xuICBhc3luYyBzZXRGb2N1cyhmb2N1c0lkKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHJldHVybiBzZXRGb2N1cy5jYWxsKHRoaXMsIGZvY3VzSWQpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRJY29uVHlwZSgpIHtcbiAgICBsZXQgdHlwZSA9IG51bGw7XG4gICAgaWYgKHRoaXMuZHJhZ0VuYWJsZWQpIHtcbiAgICAgIHR5cGUgPSBJQ09OX1RZUEVTLmdyaXA7XG4gICAgfVxuICAgIHJldHVybiB0eXBlO1xuICB9XG4gIHVwZGF0ZVNjcmVlblJlYWRlclRleHQodGV4dCkge1xuICAgIHRoaXMuYXNzaXN0aXZlVGV4dEVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfVxuICB1cGRhdGVIYW5kbGVBcmlhTGFiZWwoaGFuZGxlRWxlbWVudCwgdGV4dCkge1xuICAgIGhhbmRsZUVsZW1lbnQuYXJpYUxhYmVsID0gdGV4dDtcbiAgfVxuICBoYW5kbGVWYWx1ZUxpc3RJdGVtQmx1cihldmVudCkge1xuICAgIGNvbnN0IHsgaXRlbSwgaGFuZGxlIH0gPSBldmVudC5kZXRhaWw7XG4gICAgaWYgKCFpdGVtPy5oYW5kbGVBY3RpdmF0ZWQgJiYgaXRlbSkge1xuICAgICAgdGhpcy51cGRhdGVIYW5kbGVBcmlhTGFiZWwoaGFuZGxlLCBnZXRTY3JlZW5SZWFkZXJUZXh0KGl0ZW0sIFwiaWRsZVwiLCB0aGlzKSk7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoTGlzdCwgeyBvbkJsdXI6IHRoaXMuaGFuZGxlQmx1ciwgb25Gb2N1c2luOiB0aGlzLmhhbmRsZUZvY3VzSW4sIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciwgcHJvcHM6IHRoaXMgfSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbn07XG5WYWx1ZUxpc3Quc3R5bGUgPSB2YWx1ZUxpc3RDc3M7XG5cbmNvbnN0IElDT05TID0ge1xuICBkcmFnOiBcImRyYWdcIlxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG4gIGFjdGlvbnNTdGFydDogXCJhY3Rpb25zLXN0YXJ0XCJcbn07XG5cbmNvbnN0IHZhbHVlTGlzdEl0ZW1Dc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHttYXJnaW4tYmxvY2stZW5kOjFweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpOy0tdHctc2hhZG93OjAgMXB4IDAgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7LS10dy1zaGFkb3ctY29sb3JlZDowIDFweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpLCBib3gtc2hhZG93IHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9Omhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Y2FsY2l0ZS1waWNrLWxpc3QtaXRlbXtwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MHB4O2ZsZXgtZ3JvdzoxOy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoW2FjdGl2ZV0pLDpob3N0KFtzZWxlY3RlZF0pey0tdHctc2hhZG93OjAgMCAwIDFweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAwIDFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX0uaGFuZGxle2Rpc3BsYXk6ZmxleDtjdXJzb3I6bW92ZTthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3BhZGRpbmctYmxvY2s6MHB4O3BhZGRpbmctaW5saW5lOjAuMjVyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9LmhhbmRsZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmhhbmRsZTpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmhhbmRsZS0tYWN0aXZhdGVke2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uaGFuZGxlIGNhbGNpdGUtaWNvbntjb2xvcjppbmhlcml0fTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX1cIjtcblxuY29uc3QgVmFsdWVMaXN0SXRlbSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlTGlzdEl0ZW1DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0SXRlbUNoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0SXRlbVJlbW92ZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUxpc3RJdGVtUmVtb3ZlXCIsIDcpO1xuICAgIHRoaXMuY2FsY2l0ZVZhbHVlTGlzdEl0ZW1EcmFnSGFuZGxlQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVZhbHVlTGlzdEl0ZW1EcmFnSGFuZGxlQmx1clwiLCA2KTtcbiAgICB0aGlzLnBpY2tMaXN0SXRlbSA9IG51bGw7XG4gICAgdGhpcy5ndWlkID0gYGNhbGNpdGUtdmFsdWUtbGlzdC1pdGVtLSR7Z3VpZCgpfWA7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5nZXRQaWNrTGlzdFJlZiA9IChlbCkgPT4gKHRoaXMucGlja0xpc3RJdGVtID0gZWwpO1xuICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVBY3RpdmF0ZWQgPSAhdGhpcy5oYW5kbGVBY3RpdmF0ZWQ7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZUFjdGl2YXRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYWxjaXRlVmFsdWVMaXN0SXRlbURyYWdIYW5kbGVCbHVyLmVtaXQoeyBpdGVtOiB0aGlzLmVsLCBoYW5kbGU6IHRoaXMuaGFuZGxlRWwgfSk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGV2ZW50LmRldGFpbC5zZWxlY3RlZDtcbiAgICB9O1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVzZWxlY3REaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMubm9uSW50ZXJhY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmhhbmRsZUFjdGl2YXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaWNvbiA9IG51bGw7XG4gICAgdGhpcy5pY29uRmxpcFJ0bCA9IGZhbHNlO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXRhZGF0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlbW92YWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMsIHRoaXMuZWwuY2xvc2VzdChcImNhbGNpdGUtdmFsdWUtbGlzdFwiKSA/IFwibWFuYWdlZFwiIDogZmFsc2UpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBzZWxlY3Rpb24gc3RhdGUuIEJ5IGRlZmF1bHQgdGhpcyB3b24ndCB0cmlnZ2VyIGFuIGV2ZW50LlxuICAgKiBUaGUgZmlyc3QgYXJndW1lbnQgYWxsb3dzIHRoZSB2YWx1ZSB0byBiZSBjb2VyY2VkLCByYXRoZXIgdGhhbiBzd2FwcGluZyB2YWx1ZXMuXG4gICAqXG4gICAqIEBwYXJhbSBjb2VyY2VcbiAgICovXG4gIGFzeW5jIHRvZ2dsZVNlbGVjdGVkKGNvZXJjZSkge1xuICAgIHRoaXMucGlja0xpc3RJdGVtLnRvZ2dsZVNlbGVjdGVkKGNvZXJjZSk7XG4gIH1cbiAgLyoqIFNldCBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5waWNrTGlzdEl0ZW0/LnNldEZvY3VzKCk7XG4gIH1cbiAgY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIC8vIGFkanVzdCBpdGVtIHBheWxvYWQgZnJvbSB3cmFwcGVkIGl0ZW0gYmVmb3JlIGJ1YmJsaW5nXG4gICAgZXZlbnQuZGV0YWlsLml0ZW0gPSB0aGlzLmVsO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJBY3Rpb25zRW5kKCkge1xuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XG4gICAgY29uc3QgaGFzQWN0aW9uc0VuZCA9IGdldFNsb3R0ZWQoZWwsIFNMT1RTLmFjdGlvbnNFbmQpO1xuICAgIHJldHVybiBoYXNBY3Rpb25zRW5kID8gKGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYWN0aW9uc0VuZCwgc2xvdDogU0xPVFMkMS5hY3Rpb25zRW5kIH0pKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyQWN0aW9uc1N0YXJ0KCkge1xuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XG4gICAgY29uc3QgaGFzQWN0aW9uc1N0YXJ0ID0gZ2V0U2xvdHRlZChlbCwgU0xPVFMuYWN0aW9uc1N0YXJ0KTtcbiAgICByZXR1cm4gaGFzQWN0aW9uc1N0YXJ0ID8gKGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYWN0aW9uc1N0YXJ0LCBzbG90OiBTTE9UUyQxLmFjdGlvbnNTdGFydCB9KSkgOiBudWxsO1xuICB9XG4gIHJlbmRlckhhbmRsZSgpIHtcbiAgICBjb25zdCB7IGljb24sIGljb25GbGlwUnRsIH0gPSB0aGlzO1xuICAgIGlmIChpY29uID09PSBJQ09OX1RZUEVTJDEuZ3JpcCkge1xuICAgICAgcmV0dXJuIChoKFwic3BhblwiLCB7IGNsYXNzOiB7XG4gICAgICAgICAgW0NTUyQxLmhhbmRsZV06IHRydWUsXG4gICAgICAgICAgW0NTUyQxLmhhbmRsZUFjdGl2YXRlZF06IHRoaXMuaGFuZGxlQWN0aXZhdGVkXG4gICAgICAgIH0sIFwiZGF0YS1qcy1oYW5kbGVcIjogdHJ1ZSwgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXIsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLCByZWY6IChlbCkgPT4gKHRoaXMuaGFuZGxlRWwgPSBlbCksIHJvbGU6IFwiYnV0dG9uXCIsIHRhYmluZGV4OiBcIjBcIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgZmxpcFJ0bDogaWNvbkZsaXBSdGwsIGljb246IElDT05TLmRyYWcsIHNjYWxlOiBcInNcIiB9KSkpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgaWQ6IHRoaXMuZWwuaWQgfHwgdGhpcy5ndWlkIH0sIHRoaXMucmVuZGVySGFuZGxlKCksIGgoXCJjYWxjaXRlLXBpY2stbGlzdC1pdGVtXCIsIHsgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sIGRlc2VsZWN0RGlzYWJsZWQ6IHRoaXMuZGVzZWxlY3REaXNhYmxlZCwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIGxhYmVsOiB0aGlzLmxhYmVsLCBtZXRhZGF0YTogdGhpcy5tZXRhZGF0YSwgbm9uSW50ZXJhY3RpdmU6IHRoaXMubm9uSW50ZXJhY3RpdmUsIG9uQ2FsY2l0ZUxpc3RJdGVtQ2hhbmdlOiB0aGlzLmhhbmRsZVNlbGVjdENoYW5nZSwgcmVtb3ZhYmxlOiB0aGlzLnJlbW92YWJsZSwgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuZ2V0UGlja0xpc3RSZWYgfSwgdGhpcy5yZW5kZXJBY3Rpb25zU3RhcnQoKSwgdGhpcy5yZW5kZXJBY3Rpb25zRW5kKCkpKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxufTtcblZhbHVlTGlzdEl0ZW0uc3R5bGUgPSB2YWx1ZUxpc3RJdGVtQ3NzO1xuXG5leHBvcnQgeyBWYWx1ZUxpc3QgYXMgY2FsY2l0ZV92YWx1ZV9saXN0LCBWYWx1ZUxpc3RJdGVtIGFzIGNhbGNpdGVfdmFsdWVfbGlzdF9pdGVtIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=