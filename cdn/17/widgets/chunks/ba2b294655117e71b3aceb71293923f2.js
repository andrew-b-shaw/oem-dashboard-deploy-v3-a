"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-value-list_2_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-value-list_2.entry.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-value-list_2.entry.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_value_list": () => (/* binding */ ValueList),
/* harmony export */   "calcite_value_list_item": () => (/* binding */ ValueListItem)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources-d76cb660.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d76cb660.js");
/* harmony import */ var _sortableComponent_f10c9cf3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sortableComponent-f10c9cf3.js */ "./node_modules/@esri/calcite-components/dist/esm/sortableComponent-f10c9cf3.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./conditionalSlot-02722e44.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-02722e44.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _array_e86a0605_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array-e86a0605.js */ "./node_modules/@esri/calcite-components/dist/esm/array-e86a0605.js");
/* harmony import */ var _debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./debounce-b9072422.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-b9072422.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
  const position = (0,_resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.g)(valueList, item) + 1;
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteListChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListChange", 6);
    this.calciteListOrderChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListOrderChange", 6);
    this.calciteListFilter = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListFilter", 6);
    this.lastSelectedItem = null;
    this.mutationObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_4__.c)("mutation", _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.m.bind(this));
    this.setFilterEl = (el) => {
      this.filterEl = el;
    };
    this.setFilteredItems = (filteredItems) => {
      this.filteredItems = filteredItems;
    };
    this.deselectRemovedItems = _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.d.bind(this);
    this.deselectSiblingItems = _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.a.bind(this);
    this.selectSiblings = _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.s.bind(this);
    this.handleFilter = _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.h.bind(this);
    this.handleFilterEvent = _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.b.bind(this);
    this.getItemData = _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.c.bind(this);
    this.keyDownHandler = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const { handle, item } = getHandleAndItemElement(event);
      if (handle && !item.handleActivated && event.key === " ") {
        this.updateScreenReaderText(getScreenReaderText(item, "commit", this));
      }
      if (!handle || !item.handleActivated) {
        _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.k.call(this, event);
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
      const nextIndex = (0,_resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.e)(this, item, event.key === "ArrowUp" ? "up" : "down");
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
      requestAnimationFrame(() => (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_8__.f)(handle));
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
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.i.call(this);
    _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.f.call(this);
    this.setUpSorting();
  }
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
    _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.j.call(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_1__.u)(this);
  }
  disconnectedCallback() {
    (0,_sortableComponent_f10c9cf3_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.l.call(this);
  }
  calciteListFocusOutHandler(event) {
    _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.n.call(this, event);
  }
  calciteListItemRemoveHandler(event) {
    _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.r.call(this, event);
  }
  calciteListItemChangeHandler(event) {
    _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.o.call(this, event);
  }
  calciteInternalListItemPropsChangeHandler(event) {
    event.stopPropagation();
    this.setUpFilter();
  }
  calciteInternalListItemValueChangeHandler(event) {
    _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.p.call(this, event);
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
    _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.q.call(this, "calcite-value-list-item");
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
    (0,_sortableComponent_f10c9cf3_js__WEBPACK_IMPORTED_MODULE_7__.c)(this, {
      dataIdAttr: "id",
      group,
      handle: `.${CSS.handle}`,
      draggable: "calcite-value-list-item",
      onStart: () => {
        _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.l.call(this);
        (0,_sortableComponent_f10c9cf3_js__WEBPACK_IMPORTED_MODULE_7__.o)(this);
      },
      onEnd: () => {
        (0,_sortableComponent_f10c9cf3_js__WEBPACK_IMPORTED_MODULE_7__.a)(this);
        _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.f.call(this);
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
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    return _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.t.call(this, focusId);
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
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.L, { onBlur: this.handleBlur, onFocusin: this.handleFocusIn, onKeyDown: this.keyDownHandler, props: this }));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteListItemChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListItemChange", 6);
    this.calciteListItemRemove = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListItemRemove", 7);
    this.calciteValueListItemDragHandleBlur = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteValueListItemDragHandleBlur", 6);
    this.pickListItem = null;
    this.guid = `calcite-value-list-item-${(0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_10__.g)()}`;
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
    (0,_conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
  }
  componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_1__.u)(this, this.el.closest("calcite-value-list") ? "managed" : false);
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
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
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
    const hasActionsEnd = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_8__.g)(el, SLOTS.actionsEnd);
    return hasActionsEnd ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.actionsEnd, slot: _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.S.actionsEnd })) : null;
  }
  renderActionsStart() {
    const { el } = this;
    const hasActionsStart = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_8__.g)(el, SLOTS.actionsStart);
    return hasActionsStart ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.actionsStart, slot: _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.S.actionsStart })) : null;
  }
  renderHandle() {
    const { icon, iconFlipRtl } = this;
    if (icon === _resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.I.grip) {
      return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: {
          [_resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.C.handle]: true,
          [_resources_d76cb660_js__WEBPACK_IMPORTED_MODULE_6__.C.handleActivated]: this.handleActivated
        }, "data-js-handle": true, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, ref: (el) => (this.handleEl = el), role: "button", tabindex: "0" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { flipRtl: iconFlipRtl, icon: ICONS.drag, scale: "s" })));
    }
  }
  render() {
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { id: this.el.id || this.guid }, this.renderHandle(), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-pick-list-item", { description: this.description, deselectDisabled: this.deselectDisabled, disabled: this.disabled, label: this.label, metadata: this.metadata, nonInteractive: this.nonInteractive, onCalciteListItemChange: this.handleSelectChange, removable: this.removable, selected: this.selected, value: this.value,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.getPickListRef }, this.renderActionsStart(), this.renderActionsEnd())));
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
ValueListItem.style = valueListItemCss;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYmEyYjI5NDY1NTExN2U3MWIzYWNlYjcxMjkzOTIzZjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ3RDO0FBQzZDO0FBQzdCO0FBQ3pCO0FBQzZEO0FBQ3djO0FBQ3phO0FBQ25GO0FBQ3VEO0FBQy9FO0FBQ3BCO0FBQ0U7QUFDRztBQUNDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDOztBQUVqQztBQUNBLFVBQVUsa0JBQWtCO0FBQzVCO0FBQ0EsbUJBQW1CLHlEQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSwwQ0FBMEMsU0FBUztBQUNuRCxrREFBa0QsVUFBVTtBQUM1RCxpQ0FBaUMsTUFBTTtBQUN2Qzs7QUFFQSxvQ0FBb0MsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLDJCQUEyQix3QkFBd0Isd0NBQXdDLE1BQU0seUNBQXlDLE1BQU0s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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsd0RBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCLDBCQUEwQixtREFBVTtBQUNwQyw0QkFBNEIscURBQUMsV0FBVyw4QkFBOEIsZ0VBQWtCLEVBQUU7QUFDMUY7QUFDQTtBQUNBLFlBQVksS0FBSztBQUNqQiw0QkFBNEIsbURBQVU7QUFDdEMsOEJBQThCLHFEQUFDLFdBQVcsZ0NBQWdDLGtFQUFvQixFQUFFO0FBQ2hHO0FBQ0E7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQyxpQkFBaUIsMERBQWlCO0FBQ2xDLGNBQWMscURBQUMsV0FBVztBQUMxQixXQUFXLDREQUFZO0FBQ3ZCLFdBQVcscUVBQXFCO0FBQ2hDLFNBQVMsb0pBQW9KLEVBQUUscURBQUMsbUJBQW1CLG9EQUFvRDtBQUN2TztBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFDLENBQUMsaURBQUksSUFBSSw2QkFBNkIsdUJBQXVCLHFEQUFDLDZCQUE2QjtBQUN4RztBQUNBLGdDQUFnQztBQUNoQztBQUNBLGFBQWEsT0FBTyxxREFBVTtBQUM5QjtBQUNBOztBQUVxRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtdmFsdWUtbGlzdF8yLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIGEgYXMgZ2V0RWxlbWVudCwgSCBhcyBIb3N0IH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUtODJlNTQ3ZWQuanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLWFmMTQ2ZmQ1LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUtYjNjNDRkZGEuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4tYTNlMTI0MjIuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRJdGVtSW5kZXgsIG0gYXMgbXV0YXRpb25PYnNlcnZlckNhbGxiYWNrLCBkIGFzIGRlc2VsZWN0UmVtb3ZlZEl0ZW1zLCBhIGFzIGRlc2VsZWN0U2libGluZ0l0ZW1zLCBzIGFzIHNlbGVjdFNpYmxpbmdzLCBoIGFzIGhhbmRsZUZpbHRlciwgYiBhcyBoYW5kbGVGaWx0ZXJFdmVudCwgYyBhcyBnZXRJdGVtRGF0YSwgayBhcyBrZXlEb3duSGFuZGxlciwgZSBhcyBtb3ZlSXRlbUluZGV4LCBpIGFzIGluaXRpYWxpemUsIGYgYXMgaW5pdGlhbGl6ZU9ic2VydmVyLCBqIGFzIGhhbmRsZUluaXRpYWxGaWx0ZXIsIGwgYXMgY2xlYW5VcE9ic2VydmVyLCBuIGFzIGNhbGNpdGVMaXN0Rm9jdXNPdXRIYW5kbGVyLCByIGFzIHJlbW92ZUl0ZW0sIG8gYXMgY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlSGFuZGxlciwgcCBhcyBjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVZhbHVlQ2hhbmdlSGFuZGxlciwgcSBhcyBzZXRVcEl0ZW1zLCB0IGFzIHNldEZvY3VzLCBMIGFzIExpc3QsIEkgYXMgSUNPTl9UWVBFUyQxLCBDIGFzIENTUyQxLCBTIGFzIFNMT1RTJDEgfSBmcm9tICcuL3Jlc291cmNlcy1kNzZjYjY2MC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRpc2Nvbm5lY3RTb3J0YWJsZUNvbXBvbmVudCwgYyBhcyBjb25uZWN0U29ydGFibGVDb21wb25lbnQsIG8gYXMgb25Tb3J0aW5nU3RhcnQsIGEgYXMgb25Tb3J0aW5nRW5kIH0gZnJvbSAnLi9zb3J0YWJsZUNvbXBvbmVudC1mMTBjOWNmMy5qcyc7XG5pbXBvcnQgeyBmIGFzIGZvY3VzRWxlbWVudCwgZyBhcyBnZXRTbG90dGVkIH0gZnJvbSAnLi9kb20tZjc0YTA5YjcuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC0wMjcyMmU0NC5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQtZDU5NDNiODMuanMnO1xuaW1wb3J0ICcuL2tleS0zMzg5ZDg3MC5qcyc7XG5pbXBvcnQgJy4vYXJyYXktZTg2YTA2MDUuanMnO1xuaW1wb3J0ICcuL2RlYm91bmNlLWI5MDcyNDIyLmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtZDA4YTY3MzcuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgaGFuZGxlOiBcImhhbmRsZVwiXG59O1xudmFyIElDT05fVFlQRVM7XG4oZnVuY3Rpb24gKElDT05fVFlQRVMpIHtcbiAgSUNPTl9UWVBFU1tcImdyaXBcIl0gPSBcImdyaXBcIjtcbn0pKElDT05fVFlQRVMgfHwgKElDT05fVFlQRVMgPSB7fSkpO1xuXG5mdW5jdGlvbiBnZXRTY3JlZW5SZWFkZXJUZXh0KGl0ZW0sIHN0YXR1cywgdmFsdWVMaXN0KSB7XG4gIGNvbnN0IHsgaXRlbXMsIG1lc3NhZ2VzIH0gPSB2YWx1ZUxpc3Q7XG4gIGNvbnN0IHRvdGFsID0gaXRlbXMubGVuZ3RoO1xuICBjb25zdCBwb3NpdGlvbiA9IGdldEl0ZW1JbmRleCh2YWx1ZUxpc3QsIGl0ZW0pICsgMTtcbiAgY29uc3QgdGVtcGxhdGUgPSBzdGF0dXMgPT09IFwiaWRsZVwiXG4gICAgPyBtZXNzYWdlcy5kcmFnSGFuZGxlSWRsZVxuICAgIDogc3RhdHVzID09PSBcImFjdGl2ZVwiXG4gICAgICA/IG1lc3NhZ2VzLmRyYWdIYW5kbGVBY3RpdmVcbiAgICAgIDogc3RhdHVzID09PSBcImNoYW5nZVwiXG4gICAgICAgID8gbWVzc2FnZXMuZHJhZ0hhbmRsZUNoYW5nZVxuICAgICAgICA6IG1lc3NhZ2VzLmRyYWdIYW5kbGVDb21taXQ7XG4gIHJldHVybiByZXBsYWNlUGxhY2Vob2xkZXJzKHRlbXBsYXRlLCBpdGVtLmxhYmVsLCBwb3NpdGlvbiwgdG90YWwpO1xufVxuZnVuY3Rpb24gZ2V0SGFuZGxlQW5kSXRlbUVsZW1lbnQoZXZlbnQpIHtcbiAgY29uc3QgaGFuZGxlID0gZXZlbnRcbiAgICAuY29tcG9zZWRQYXRoKClcbiAgICAuZmluZCgoaXRlbSkgPT4gaXRlbS5kYXRhc2V0Py5qc0hhbmRsZSAhPT0gdW5kZWZpbmVkKTtcbiAgY29uc3QgaXRlbSA9IGV2ZW50XG4gICAgLmNvbXBvc2VkUGF0aCgpXG4gICAgLmZpbmQoKGl0ZW0pID0+IGl0ZW0udGFnTmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gXCJjYWxjaXRlLXZhbHVlLWxpc3QtaXRlbVwiKTtcbiAgcmV0dXJuIHsgaGFuZGxlLCBpdGVtIH07XG59XG5mdW5jdGlvbiByZXBsYWNlUGxhY2Vob2xkZXJzKHRleHQsIGxhYmVsLCBwb3NpdGlvbiwgdG90YWwpIHtcbiAgY29uc3QgcmVwbGFjZVBvc2l0aW9uID0gdGV4dC5yZXBsYWNlKFwiJHtwb3NpdGlvbn1cIiwgcG9zaXRpb24udG9TdHJpbmcoKSk7XG4gIGNvbnN0IHJlcGxhY2VMYWJlbCA9IHJlcGxhY2VQb3NpdGlvbi5yZXBsYWNlKFwiJHtpdGVtTGFiZWx9XCIsIGxhYmVsKTtcbiAgcmV0dXJuIHJlcGxhY2VMYWJlbC5yZXBsYWNlKFwiJHt0b3RhbH1cIiwgdG90YWwudG9TdHJpbmcoKSk7XG59XG5cbmNvbnN0IHZhbHVlTGlzdENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7ZmxleC1zaHJpbms6MDtmbGV4LWdyb3c6MDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX1jYWxjaXRlLXZhbHVlLWxpc3QtaXRlbTpsYXN0LW9mLXR5cGV7LS10dy1zaGFkb3c6MCAwICMwMDAwOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAwICMwMDAwO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX06aG9zdChbZmlsdGVyLWVuYWJsZWRdKSBoZWFkZXJ7bWFyZ2luLWJsb2NrLWVuZDowLjI1cmVtO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpOy0tdHctc2hhZG93OjAgMXB4IDAgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7LS10dy1zaGFkb3ctY29sb3JlZDowIDFweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0KFtmaWx0ZXItZW5hYmxlZF0pIGhlYWRlci5zdGlja3ktcG9ze3Bvc2l0aW9uOnN0aWNreTtpbnNldC1ibG9jay1zdGFydDowcHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LXN0aWNreSl9Y2FsY2l0ZS1maWx0ZXJ7bWFyZ2luLWJsb2NrLWVuZDoxcHh9LmFzc2lzdGl2ZS10ZXh0e3Bvc2l0aW9uOmFic29sdXRlO2lubGluZS1zaXplOjFweDtibG9jay1zaXplOjFweDtwYWRkaW5nOjA7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwLCAwLCAwLCAwKTt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXdpZHRoOjB9XCI7XG5cbmNvbnN0IFZhbHVlTGlzdCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlTGlzdENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUxpc3RDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTGlzdE9yZGVyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTGlzdE9yZGVyQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RGaWx0ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0RmlsdGVyXCIsIDYpO1xuICAgIHRoaXMubGFzdFNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCBtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5zZXRGaWx0ZXJFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5maWx0ZXJFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5zZXRGaWx0ZXJlZEl0ZW1zID0gKGZpbHRlcmVkSXRlbXMpID0+IHtcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXM7XG4gICAgfTtcbiAgICB0aGlzLmRlc2VsZWN0UmVtb3ZlZEl0ZW1zID0gZGVzZWxlY3RSZW1vdmVkSXRlbXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc2VsZWN0U2libGluZ0l0ZW1zID0gZGVzZWxlY3RTaWJsaW5nSXRlbXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbGVjdFNpYmxpbmdzID0gc2VsZWN0U2libGluZ3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlciA9IGhhbmRsZUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyRXZlbnQgPSBoYW5kbGVGaWx0ZXJFdmVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0SXRlbURhdGEgPSBnZXRJdGVtRGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgaGFuZGxlLCBpdGVtIH0gPSBnZXRIYW5kbGVBbmRJdGVtRWxlbWVudChldmVudCk7XG4gICAgICBpZiAoaGFuZGxlICYmICFpdGVtLmhhbmRsZUFjdGl2YXRlZCAmJiBldmVudC5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2NyZWVuUmVhZGVyVGV4dChnZXRTY3JlZW5SZWFkZXJUZXh0KGl0ZW0sIFwiY29tbWl0XCIsIHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIGlmICghaGFuZGxlIHx8ICFpdGVtLmhhbmRsZUFjdGl2YXRlZCkge1xuICAgICAgICBrZXlEb3duSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXM7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIiBcIikge1xuICAgICAgICB0aGlzLnVwZGF0ZVNjcmVlblJlYWRlclRleHQoZ2V0U2NyZWVuUmVhZGVyVGV4dChpdGVtLCBcImFjdGl2ZVwiLCB0aGlzKSk7XG4gICAgICB9XG4gICAgICBpZiAoKGV2ZW50LmtleSAhPT0gXCJBcnJvd1VwXCIgJiYgZXZlbnQua2V5ICE9PSBcIkFycm93RG93blwiKSB8fCBpdGVtcy5sZW5ndGggPD0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgICAgY29uc3QgbmV4dEluZGV4ID0gbW92ZUl0ZW1JbmRleCh0aGlzLCBpdGVtLCBldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiID8gXCJ1cFwiIDogXCJkb3duXCIpO1xuICAgICAgaWYgKG5leHRJbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpdGVtQXROZXh0SW5kZXggPSBlbC5jaGlsZHJlbltuZXh0SW5kZXhdO1xuICAgICAgICBjb25zdCBpbnNlcnRpb25SZWZlcmVuY2VJdGVtID0gaXRlbUF0TmV4dEluZGV4ID09PSBpdGVtLm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgID8gaXRlbUF0TmV4dEluZGV4Lm5leHRFbGVtZW50U2libGluZ1xuICAgICAgICAgIDogaXRlbUF0TmV4dEluZGV4O1xuICAgICAgICBlbC5pbnNlcnRCZWZvcmUoaXRlbSwgaW5zZXJ0aW9uUmVmZXJlbmNlSXRlbSk7XG4gICAgICB9XG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgICAgdGhpcy5jYWxjaXRlTGlzdE9yZGVyQ2hhbmdlLmVtaXQodGhpcy5pdGVtcy5tYXAoKHsgdmFsdWUgfSkgPT4gdmFsdWUpKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBmb2N1c0VsZW1lbnQoaGFuZGxlKSk7XG4gICAgICBpdGVtLmhhbmRsZUFjdGl2YXRlZCA9IHRydWU7XG4gICAgICB0aGlzLnVwZGF0ZUhhbmRsZUFyaWFMYWJlbChoYW5kbGUsIGdldFNjcmVlblJlYWRlclRleHQoaXRlbSwgXCJjaGFuZ2VcIiwgdGhpcykpO1xuICAgIH07XG4gICAgdGhpcy5zdG9yZUFzc2lzdGl2ZUVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmFzc2lzdGl2ZVRleHRFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVGb2N1c0luID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGhhbmRsZSwgaXRlbSB9ID0gZ2V0SGFuZGxlQW5kSXRlbUVsZW1lbnQoZXZlbnQpO1xuICAgICAgaWYgKCFpdGVtPy5oYW5kbGVBY3RpdmF0ZWQgJiYgaXRlbSAmJiBoYW5kbGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVIYW5kbGVBcmlhTGFiZWwoaGFuZGxlLCBnZXRTY3JlZW5SZWFkZXJUZXh0KGl0ZW0sIFwiaWRsZVwiLCB0aGlzKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMuZmlsdGVyZWREYXRhID0gW107XG4gICAgdGhpcy5maWx0ZXJFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5maWx0ZXJQbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZpbHRlclRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ncm91cCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLm11bHRpcGxlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3Rpb25Gb2xsb3dzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRhdGFGb3JGaWx0ZXIgPSBbXTtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IG5ldyBNYXAoKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIGluaXRpYWxpemUuY2FsbCh0aGlzKTtcbiAgICBpbml0aWFsaXplT2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnNldFVwU29ydGluZygpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICBoYW5kbGVJbml0aWFsRmlsdGVyLmNhbGwodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0U29ydGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgY2xlYW5VcE9ic2VydmVyLmNhbGwodGhpcyk7XG4gIH1cbiAgY2FsY2l0ZUxpc3RGb2N1c091dEhhbmRsZXIoZXZlbnQpIHtcbiAgICBjYWxjaXRlTGlzdEZvY3VzT3V0SGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgfVxuICBjYWxjaXRlTGlzdEl0ZW1SZW1vdmVIYW5kbGVyKGV2ZW50KSB7XG4gICAgcmVtb3ZlSXRlbS5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgfVxuICBjYWxjaXRlTGlzdEl0ZW1DaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgfVxuICBjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVByb3BzQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuc2V0VXBGaWx0ZXIoKTtcbiAgfVxuICBjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVZhbHVlQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICAgIGNhbGNpdGVJbnRlcm5hbExpc3RJdGVtVmFsdWVDaGFuZ2VIYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS12YWx1ZS1saXN0LWl0ZW1cIikpO1xuICB9XG4gIHNldFVwSXRlbXMoKSB7XG4gICAgc2V0VXBJdGVtcy5jYWxsKHRoaXMsIFwiY2FsY2l0ZS12YWx1ZS1saXN0LWl0ZW1cIik7XG4gICAgdGhpcy5zZXRVcFNvcnRpbmcoKTtcbiAgfVxuICBzZXRVcEZpbHRlcigpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLmRhdGFGb3JGaWx0ZXIgPSB0aGlzLmdldEl0ZW1EYXRhKCk7XG4gICAgfVxuICB9XG4gIHNldFVwU29ydGluZygpIHtcbiAgICBjb25zdCB7IGRyYWdFbmFibGVkLCBncm91cCB9ID0gdGhpcztcbiAgICBpZiAoIWRyYWdFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbm5lY3RTb3J0YWJsZUNvbXBvbmVudCh0aGlzLCB7XG4gICAgICBkYXRhSWRBdHRyOiBcImlkXCIsXG4gICAgICBncm91cCxcbiAgICAgIGhhbmRsZTogYC4ke0NTUy5oYW5kbGV9YCxcbiAgICAgIGRyYWdnYWJsZTogXCJjYWxjaXRlLXZhbHVlLWxpc3QtaXRlbVwiLFxuICAgICAgb25TdGFydDogKCkgPT4ge1xuICAgICAgICBjbGVhblVwT2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgb25Tb3J0aW5nU3RhcnQodGhpcyk7XG4gICAgICB9LFxuICAgICAgb25FbmQ6ICgpID0+IHtcbiAgICAgICAgb25Tb3J0aW5nRW5kKHRoaXMpO1xuICAgICAgICBpbml0aWFsaXplT2JzZXJ2ZXIuY2FsbCh0aGlzKTtcbiAgICAgIH0sXG4gICAgICBvblVwZGF0ZTogKCkgPT4ge1xuICAgICAgICB0aGlzLml0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLXZhbHVlLWxpc3QtaXRlbVwiKSk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKTtcbiAgICAgICAgdGhpcy5jYWxjaXRlTGlzdE9yZGVyQ2hhbmdlLmVtaXQodmFsdWVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBoYW5kbGVCbHVyKCkge1xuICAgIGlmICh0aGlzLmRyYWdFbmFibGVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNjcmVlblJlYWRlclRleHQoXCJcIik7XG4gICAgfVxuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogUmV0dXJucyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW1zICovXG4gIGFzeW5jIGdldFNlbGVjdGVkSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRWYWx1ZXM7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZm9jdXNJZFxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoZm9jdXNJZCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICByZXR1cm4gc2V0Rm9jdXMuY2FsbCh0aGlzLCBmb2N1c0lkKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0SWNvblR5cGUoKSB7XG4gICAgbGV0IHR5cGUgPSBudWxsO1xuICAgIGlmICh0aGlzLmRyYWdFbmFibGVkKSB7XG4gICAgICB0eXBlID0gSUNPTl9UWVBFUy5ncmlwO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuICB1cGRhdGVTY3JlZW5SZWFkZXJUZXh0KHRleHQpIHtcbiAgICB0aGlzLmFzc2lzdGl2ZVRleHRFbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH1cbiAgdXBkYXRlSGFuZGxlQXJpYUxhYmVsKGhhbmRsZUVsZW1lbnQsIHRleHQpIHtcbiAgICBoYW5kbGVFbGVtZW50LmFyaWFMYWJlbCA9IHRleHQ7XG4gIH1cbiAgaGFuZGxlVmFsdWVMaXN0SXRlbUJsdXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGl0ZW0sIGhhbmRsZSB9ID0gZXZlbnQuZGV0YWlsO1xuICAgIGlmICghaXRlbT8uaGFuZGxlQWN0aXZhdGVkICYmIGl0ZW0pIHtcbiAgICAgIHRoaXMudXBkYXRlSGFuZGxlQXJpYUxhYmVsKGhhbmRsZSwgZ2V0U2NyZWVuUmVhZGVyVGV4dChpdGVtLCBcImlkbGVcIiwgdGhpcykpO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKExpc3QsIHsgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXIsIG9uRm9jdXNpbjogdGhpcy5oYW5kbGVGb2N1c0luLCBvbktleURvd246IHRoaXMua2V5RG93bkhhbmRsZXIsIHByb3BzOiB0aGlzIH0pKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuVmFsdWVMaXN0LnN0eWxlID0gdmFsdWVMaXN0Q3NzO1xuXG5jb25zdCBJQ09OUyA9IHtcbiAgZHJhZzogXCJkcmFnXCJcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgYWN0aW9uc0VuZDogXCJhY3Rpb25zLWVuZFwiLFxuICBhY3Rpb25zU3RhcnQ6IFwiYWN0aW9ucy1zdGFydFwiXG59O1xuXG5jb25zdCB2YWx1ZUxpc3RJdGVtQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7bWFyZ2luLWJsb2NrLWVuZDoxcHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTstLXR3LXNoYWRvdzowIDFweCAwIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAxcHggMCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSwgYm94LXNoYWRvdyB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fWNhbGNpdGUtcGljay1saXN0LWl0ZW17cG9zaXRpb246cmVsYXRpdmU7bWFyZ2luOjBweDtmbGV4LWdyb3c6MTstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0KFthY3RpdmVdKSw6aG9zdChbc2VsZWN0ZWRdKXstLXR3LXNoYWRvdzowIDAgMCAxcHggdmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgMCAxcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9LmhhbmRsZXtkaXNwbGF5OmZsZXg7Y3Vyc29yOm1vdmU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyLXN0eWxlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtwYWRkaW5nLWJsb2NrOjBweDtwYWRkaW5nLWlubGluZTowLjI1cmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fS5oYW5kbGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5oYW5kbGU6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5oYW5kbGUtLWFjdGl2YXRlZHtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0zKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmhhbmRsZSBjYWxjaXRlLWljb257Y29sb3I6aW5oZXJpdH06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9XCI7XG5cbmNvbnN0IFZhbHVlTGlzdEl0ZW0gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTGlzdEl0ZW1DaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTGlzdEl0ZW1SZW1vdmUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0SXRlbVJlbW92ZVwiLCA3KTtcbiAgICB0aGlzLmNhbGNpdGVWYWx1ZUxpc3RJdGVtRHJhZ0hhbmRsZUJsdXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVWYWx1ZUxpc3RJdGVtRHJhZ0hhbmRsZUJsdXJcIiwgNik7XG4gICAgdGhpcy5waWNrTGlzdEl0ZW0gPSBudWxsO1xuICAgIHRoaXMuZ3VpZCA9IGBjYWxjaXRlLXZhbHVlLWxpc3QtaXRlbS0ke2d1aWQoKX1gO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuZ2V0UGlja0xpc3RSZWYgPSAoZWwpID0+ICh0aGlzLnBpY2tMaXN0SXRlbSA9IGVsKTtcbiAgICB0aGlzLmhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQWN0aXZhdGVkID0gIXRoaXMuaGFuZGxlQWN0aXZhdGVkO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVBY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2FsY2l0ZVZhbHVlTGlzdEl0ZW1EcmFnSGFuZGxlQmx1ci5lbWl0KHsgaXRlbTogdGhpcy5lbCwgaGFuZGxlOiB0aGlzLmhhbmRsZUVsIH0pO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBldmVudC5kZXRhaWwuc2VsZWN0ZWQ7XG4gICAgfTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc2VsZWN0RGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLm5vbkludGVyYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5oYW5kbGVBY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmljb24gPSBudWxsO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZW1vdmFibGUgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcywgdGhpcy5lbC5jbG9zZXN0KFwiY2FsY2l0ZS12YWx1ZS1saXN0XCIpID8gXCJtYW5hZ2VkXCIgOiBmYWxzZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIHNlbGVjdGlvbiBzdGF0ZS4gQnkgZGVmYXVsdCB0aGlzIHdvbid0IHRyaWdnZXIgYW4gZXZlbnQuXG4gICAqIFRoZSBmaXJzdCBhcmd1bWVudCBhbGxvd3MgdGhlIHZhbHVlIHRvIGJlIGNvZXJjZWQsIHJhdGhlciB0aGFuIHN3YXBwaW5nIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIGNvZXJjZVxuICAgKi9cbiAgYXN5bmMgdG9nZ2xlU2VsZWN0ZWQoY29lcmNlKSB7XG4gICAgdGhpcy5waWNrTGlzdEl0ZW0udG9nZ2xlU2VsZWN0ZWQoY29lcmNlKTtcbiAgfVxuICAvKiogU2V0IGZvY3VzIG9uIHRoZSBjb21wb25lbnQuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLnBpY2tMaXN0SXRlbT8uc2V0Rm9jdXMoKTtcbiAgfVxuICBjYWxjaXRlTGlzdEl0ZW1DaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgLy8gYWRqdXN0IGl0ZW0gcGF5bG9hZCBmcm9tIHdyYXBwZWQgaXRlbSBiZWZvcmUgYnViYmxpbmdcbiAgICBldmVudC5kZXRhaWwuaXRlbSA9IHRoaXMuZWw7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckFjdGlvbnNFbmQoKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBoYXNBY3Rpb25zRW5kID0gZ2V0U2xvdHRlZChlbCwgU0xPVFMuYWN0aW9uc0VuZCk7XG4gICAgcmV0dXJuIGhhc0FjdGlvbnNFbmQgPyAoaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25zRW5kLCBzbG90OiBTTE9UUyQxLmFjdGlvbnNFbmQgfSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJBY3Rpb25zU3RhcnQoKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBoYXNBY3Rpb25zU3RhcnQgPSBnZXRTbG90dGVkKGVsLCBTTE9UUy5hY3Rpb25zU3RhcnQpO1xuICAgIHJldHVybiBoYXNBY3Rpb25zU3RhcnQgPyAoaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25zU3RhcnQsIHNsb3Q6IFNMT1RTJDEuYWN0aW9uc1N0YXJ0IH0pKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVySGFuZGxlKCkge1xuICAgIGNvbnN0IHsgaWNvbiwgaWNvbkZsaXBSdGwgfSA9IHRoaXM7XG4gICAgaWYgKGljb24gPT09IElDT05fVFlQRVMkMS5ncmlwKSB7XG4gICAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgICBbQ1NTJDEuaGFuZGxlXTogdHJ1ZSxcbiAgICAgICAgICBbQ1NTJDEuaGFuZGxlQWN0aXZhdGVkXTogdGhpcy5oYW5kbGVBY3RpdmF0ZWRcbiAgICAgICAgfSwgXCJkYXRhLWpzLWhhbmRsZVwiOiB0cnVlLCBvbkJsdXI6IHRoaXMuaGFuZGxlQmx1ciwgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sIHJlZjogKGVsKSA9PiAodGhpcy5oYW5kbGVFbCA9IGVsKSwgcm9sZTogXCJidXR0b25cIiwgdGFiaW5kZXg6IFwiMFwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBmbGlwUnRsOiBpY29uRmxpcFJ0bCwgaWNvbjogSUNPTlMuZHJhZywgc2NhbGU6IFwic1wiIH0pKSk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBpZDogdGhpcy5lbC5pZCB8fCB0aGlzLmd1aWQgfSwgdGhpcy5yZW5kZXJIYW5kbGUoKSwgaChcImNhbGNpdGUtcGljay1saXN0LWl0ZW1cIiwgeyBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbiwgZGVzZWxlY3REaXNhYmxlZDogdGhpcy5kZXNlbGVjdERpc2FibGVkLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgbGFiZWw6IHRoaXMubGFiZWwsIG1ldGFkYXRhOiB0aGlzLm1ldGFkYXRhLCBub25JbnRlcmFjdGl2ZTogdGhpcy5ub25JbnRlcmFjdGl2ZSwgb25DYWxjaXRlTGlzdEl0ZW1DaGFuZ2U6IHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlLCByZW1vdmFibGU6IHRoaXMucmVtb3ZhYmxlLCBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZCwgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5nZXRQaWNrTGlzdFJlZiB9LCB0aGlzLnJlbmRlckFjdGlvbnNTdGFydCgpLCB0aGlzLnJlbmRlckFjdGlvbnNFbmQoKSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuVmFsdWVMaXN0SXRlbS5zdHlsZSA9IHZhbHVlTGlzdEl0ZW1Dc3M7XG5cbmV4cG9ydCB7IFZhbHVlTGlzdCBhcyBjYWxjaXRlX3ZhbHVlX2xpc3QsIFZhbHVlTGlzdEl0ZW0gYXMgY2FsY2l0ZV92YWx1ZV9saXN0X2l0ZW0gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==