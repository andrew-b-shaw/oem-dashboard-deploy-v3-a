"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-list_3_entry_js"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-list_3.entry.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-list_3.entry.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_list": () => (/* binding */ List),
/* harmony export */   "calcite_list_item": () => (/* binding */ ListItem),
/* harmony export */   "calcite_list_item_group": () => (/* binding */ ListItemGroup)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */













const CSS$2 = {
  container: "container",
  containerBorderSelected: "container--border-selected",
  containerBorderUnselected: "container--border-unselected",
  contentContainer: "content-container",
  contentContainerSelectable: "content-container--selectable",
  contentContainerHasCenterContent: "content-container--has-center-content",
  nestedContainer: "nested-container",
  nestedContainerHidden: "nested-container--hidden",
  content: "content",
  customContent: "custom-content",
  actionsStart: "actions-start",
  contentStart: "content-start",
  label: "label",
  description: "description",
  contentEnd: "content-end",
  actionsEnd: "actions-end",
  selectionContainer: "selection-container",
  openContainer: "open-container"
};
const SLOTS = {
  actionsStart: "actions-start",
  contentStart: "content-start",
  content: "content",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
};
const MAX_COLUMNS = 5;
const ICONS = {
  selectedMultiple: "check-circle-f",
  selectedSingle: "circle-f",
  unselected: "blank",
  closedLTR: "caret-right",
  closedRTL: "caret-left",
  open: "caret-down",
  blank: "blank",
  close: "x"
};

const listItemGroupSelector = "calcite-list-item-group";
const listItemSelector$1 = "calcite-list-item";
function getListItemChildren(event) {
  const assignedElements = event.target.assignedElements({ flatten: true });
  const listItemGroupChildren = assignedElements.filter((el) => el?.matches(listItemGroupSelector))
    .map((group) => Array.from(group.querySelectorAll(listItemSelector$1)))
    .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
  const listItemChildren = assignedElements.filter((el) => el?.matches(listItemSelector$1));
  return [...listItemGroupChildren, ...listItemChildren];
}
function updateListItemChildren(listItemChildren) {
  listItemChildren.forEach((listItem) => {
    listItem.setPosition = listItemChildren.indexOf(listItem) + 1;
    listItem.setSize = listItemChildren.length;
  });
}
function getDepth(element, includeGroup = false) {
  const expression = includeGroup
    ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group"
    : "ancestor::calcite-list-item";
  const result = document.evaluate(expression, element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  return result.snapshotLength;
}

const CSS$1 = {
  container: "container",
  table: "table",
  scrim: "scrim",
  tableContainer: "table-container",
  sticky: "sticky-pos"
};
const debounceTimeout = 0;

const listCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{position:relative}.table-container{position:relative;z-index:var(--calcite-app-z-index);box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.table-container *{box-sizing:border-box}.table{inline-size:100%;border-collapse:collapse}::slotted(calcite-list-item){margin-block-end:1px;--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}::slotted(calcite-list-item:last-child){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-app-z-index-sticky)}.sticky-pos th{padding:0px}calcite-filter{margin-block-end:1px}";

const listItemSelector = "calcite-list-item";
const parentSelector = "calcite-list-item-group, calcite-list-item";
const List = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteListChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListChange", 6);
    this.calciteListFilter = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListFilter", 6);
    this.listItems = [];
    this.enabledListItems = [];
    this.mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_3__.c)("mutation", () => this.updateListItems());
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleDefaultSlotChange = (event) => {
      updateListItemChildren(getListItemChildren(event));
    };
    this.setActiveListItem = () => {
      const { enabledListItems } = this;
      if (!enabledListItems.some((item) => item.active)) {
        if (enabledListItems[0]) {
          enabledListItems[0].active = true;
        }
      }
    };
    this.updateSelectedItems = (emit = false) => {
      this.selectedItems = this.enabledListItems.filter((item) => item.selected);
      if (emit) {
        this.calciteListChange.emit();
      }
    };
    this.updateFilteredItems = (emit = false) => {
      const { listItems, filteredData, filterText } = this;
      const values = filteredData.map((item) => item.value);
      const lastDescendantItems = listItems?.filter((listItem) => listItems.every((li) => li === listItem || !listItem.contains(li)));
      const filteredItems = listItems.filter((item) => !filterText || values.includes(item.value)) || [];
      const visibleParents = new WeakSet();
      lastDescendantItems.forEach((listItem) => this.filterElements({ el: listItem, filteredItems, visibleParents }));
      this.filteredItems = filteredItems;
      if (emit) {
        this.calciteListFilter.emit();
      }
    };
    this.handleFilter = (event) => {
      event.stopPropagation();
      const { filteredItems, value } = event.currentTarget;
      this.filteredData = filteredItems;
      this.filterText = value;
      this.updateListItems(true);
    };
    this.getItemData = () => {
      return this.listItems.map((item) => ({
        label: item.label,
        description: item.description,
        metadata: item.metadata,
        value: item.value
      }));
    };
    this.updateListItems = (0,_debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_5__.d)((emit = false) => {
      const { selectionAppearance, selectionMode } = this;
      const items = this.queryListItems();
      items.forEach((item) => {
        item.selectionAppearance = selectionAppearance;
        item.selectionMode = selectionMode;
      });
      this.listItems = items;
      if (this.filterEnabled) {
        this.dataForFilter = this.getItemData();
        if (this.filterEl) {
          this.filterEl.items = this.dataForFilter;
        }
      }
      this.updateFilteredItems(emit);
      this.enabledListItems = items.filter((item) => !item.disabled && !item.closed);
      this.setActiveListItem();
      this.updateSelectedItems(emit);
    }, debounceTimeout);
    this.queryListItems = () => {
      return Array.from(this.el.querySelectorAll(listItemSelector));
    };
    this.focusRow = (focusEl) => {
      const { enabledListItems } = this;
      if (!focusEl) {
        return;
      }
      enabledListItems.forEach((listItem) => (listItem.active = listItem === focusEl));
      focusEl.setFocus();
    };
    this.isNavigable = (listItem) => {
      const parentListItemEl = listItem.parentElement?.closest(listItemSelector);
      if (!parentListItemEl) {
        return true;
      }
      return parentListItemEl.open && this.isNavigable(parentListItemEl);
    };
    this.handleListKeydown = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const { key } = event;
      const filteredItems = this.enabledListItems.filter((listItem) => this.isNavigable(listItem));
      const currentIndex = filteredItems.findIndex((listItem) => listItem.active);
      if (key === "ArrowDown") {
        event.preventDefault();
        const nextIndex = currentIndex + 1;
        if (filteredItems[nextIndex]) {
          this.focusRow(filteredItems[nextIndex]);
        }
      }
      else if (key === "ArrowUp") {
        event.preventDefault();
        const prevIndex = currentIndex - 1;
        if (filteredItems[prevIndex]) {
          this.focusRow(filteredItems[prevIndex]);
        }
      }
      else if (key === "Home") {
        event.preventDefault();
        const homeItem = filteredItems[0];
        if (homeItem) {
          this.focusRow(homeItem);
        }
      }
      else if (key === "End") {
        event.preventDefault();
        const endItem = filteredItems[filteredItems.length - 1];
        if (endItem) {
          this.focusRow(endItem);
        }
      }
    };
    this.disabled = false;
    this.filterEnabled = false;
    this.filteredItems = [];
    this.filteredData = [];
    this.filterPlaceholder = undefined;
    this.filterText = undefined;
    this.label = undefined;
    this.loading = false;
    this.openable = false;
    this.selectedItems = [];
    this.selectionMode = "none";
    this.selectionAppearance = "icon";
    this.dataForFilter = [];
  }
  handleFilterEnabledChange() {
    this.updateListItems();
  }
  handleSelectionAppearanceChange() {
    this.updateListItems();
  }
  handleCalciteInternalFocusPreviousItem(event) {
    event.stopPropagation();
    const { enabledListItems } = this;
    const currentIndex = enabledListItems.findIndex((listItem) => listItem.active);
    const prevIndex = currentIndex - 1;
    if (enabledListItems[prevIndex]) {
      this.focusRow(enabledListItems[prevIndex]);
    }
  }
  handleCalciteInternalListItemActive(event) {
    const target = event.target;
    const { listItems } = this;
    listItems.forEach((listItem) => {
      listItem.active = listItem === target;
    });
  }
  handleCalciteListItemSelect() {
    this.updateSelectedItems(true);
  }
  handleCalciteInternalListItemSelect(event) {
    const target = event.target;
    const { listItems, selectionMode } = this;
    if (target.selected && (selectionMode === "single" || selectionMode === "single-persist")) {
      listItems.forEach((listItem) => (listItem.selected = listItem === target));
    }
    this.updateSelectedItems();
  }
  handleCalciteListItemClose() {
    this.updateListItems(true);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    this.updateListItems();
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
    const { filterEl } = this;
    const filteredItems = filterEl?.filteredItems;
    if (filteredItems) {
      this.filteredData = filteredItems;
    }
    this.updateListItems();
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    this.enabledListItems.find((listItem) => listItem.active)?.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { loading, label, disabled, dataForFilter, filterEnabled, filterPlaceholder, filterText } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$1.container }, loading ? (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-scrim", { class: CSS$1.scrim, loading: loading }) : null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("table", { "aria-busy": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.t)(loading), "aria-label": label || "", class: CSS$1.table, onKeyDown: this.handleListKeydown, role: "treegrid" }, filterEnabled ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("thead", null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("tr", { class: { [CSS$1.sticky]: true } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("th", { colSpan: MAX_COLUMNS }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-filter", { "aria-label": filterPlaceholder, disabled: loading || disabled, items: dataForFilter, onCalciteFilterChange: this.handleFilter, placeholder: filterPlaceholder, value: filterText,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.filterEl = el) }))))) : null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("tbody", { class: CSS$1.tableContainer }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: this.handleDefaultSlotChange })))));
  }
  filterElements({ el, filteredItems, visibleParents }) {
    const hidden = !visibleParents.has(el) && !filteredItems.includes(el);
    el.hidden = hidden;
    const closestParent = el.parentElement.closest(parentSelector);
    if (!closestParent) {
      return;
    }
    if (!hidden) {
      visibleParents.add(closestParent);
    }
    this.filterElements({
      el: closestParent,
      filteredItems,
      visibleParents
    });
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "filterEnabled": ["handleFilterEnabledChange"],
    "selectionMode": ["handleSelectionAppearanceChange"],
    "selectionAppearance": ["handleSelectionAppearanceChange"]
  }; }
};
List.style = listCss;

const listItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-ui-brand);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2)}.container--border-selected{border-inline-start:4px solid var(--calcite-ui-brand)}.container--border-unselected{border-inline-start:4px solid transparent}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{z-index:var(--calcite-app-z-index-sticky);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-list-item-icon-color)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}::slotted(calcite-list-item){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}[hidden]{display:none}";

const focusMap = new Map();
const listSelector = "calcite-list";
const ListItem = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteListItemSelect = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListItemSelect", 6);
    this.calciteListItemClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListItemClose", 6);
    this.calciteInternalListItemSelect = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalListItemSelect", 6);
    this.calciteInternalListItemActive = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalListItemActive", 6);
    this.calciteInternalFocusPreviousItem = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalFocusPreviousItem", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.closeClickHandler = () => {
      this.closed = true;
      this.calciteListItemClose.emit();
    };
    this.handleContentSlotChange = (event) => {
      this.hasCustomContent = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
    };
    this.handleActionsStartSlotChange = (event) => {
      this.hasActionsStart = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
    };
    this.handleActionsEndSlotChange = (event) => {
      this.hasActionsEnd = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
    };
    this.handleContentStartSlotChange = (event) => {
      this.hasContentStart = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
    };
    this.handleContentEndSlotChange = (event) => {
      this.hasContentEnd = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
    };
    this.handleDefaultSlotChange = (event) => {
      const { parentListEl } = this;
      const listItemChildren = getListItemChildren(event);
      updateListItemChildren(listItemChildren);
      const openable = !!listItemChildren.length;
      if (openable && parentListEl && !parentListEl.openable) {
        parentListEl.openable = true;
      }
      this.openable = openable;
      if (!openable) {
        this.open = false;
      }
    };
    this.toggleOpen = () => {
      this.open = !this.open;
    };
    this.itemClicked = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      this.toggleSelected();
      this.calciteInternalListItemActive.emit();
    };
    this.toggleSelected = () => {
      const { selectionMode, selected } = this;
      if (this.disabled) {
        return;
      }
      if (selectionMode === "multiple" || selectionMode === "single") {
        this.selected = !selected;
      }
      else if (selectionMode === "single-persist") {
        this.selected = true;
      }
      this.calciteListItemSelect.emit();
    };
    this.handleItemKeyDown = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      const { key } = event;
      const composedPath = event.composedPath();
      const { containerEl, contentEl, actionsStartEl, actionsEndEl, open, openable } = this;
      const cells = [actionsStartEl, contentEl, actionsEndEl].filter(Boolean);
      const currentIndex = cells.findIndex((cell) => composedPath.includes(cell));
      if (key === "Enter") {
        event.preventDefault();
        this.toggleSelected();
      }
      else if (key === "ArrowRight") {
        event.preventDefault();
        const nextIndex = currentIndex + 1;
        if (currentIndex === -1) {
          if (!open && openable) {
            this.open = true;
            this.focusCell(null);
          }
          else if (cells[0]) {
            this.focusCell(cells[0]);
          }
        }
        else if (cells[currentIndex] && cells[nextIndex]) {
          this.focusCell(cells[nextIndex]);
        }
      }
      else if (key === "ArrowLeft") {
        event.preventDefault();
        const prevIndex = currentIndex - 1;
        if (currentIndex === -1) {
          this.focusCell(null);
          if (open && openable) {
            this.open = false;
          }
          else {
            this.calciteInternalFocusPreviousItem.emit();
          }
        }
        else if (currentIndex === 0) {
          this.focusCell(null);
          containerEl.focus();
        }
        else if (cells[currentIndex] && cells[prevIndex]) {
          this.focusCell(cells[prevIndex]);
        }
      }
    };
    this.focusCellNull = () => {
      this.focusCell(null);
    };
    this.focusCell = (focusEl, saveFocusIndex = true) => {
      const { contentEl, actionsStartEl, actionsEndEl, parentListEl } = this;
      if (saveFocusIndex) {
        focusMap.set(parentListEl, null);
      }
      [actionsStartEl, contentEl, actionsEndEl].filter(Boolean).forEach((tableCell, cellIndex) => {
        const tabIndexAttr = "tabindex";
        if (tableCell === focusEl) {
          tableCell.setAttribute(tabIndexAttr, "0");
          saveFocusIndex && focusMap.set(parentListEl, cellIndex);
        }
        else {
          tableCell.removeAttribute(tabIndexAttr);
        }
      });
      focusEl?.focus();
    };
    this.active = false;
    this.closable = false;
    this.closed = false;
    this.description = undefined;
    this.disabled = false;
    this.label = undefined;
    this.metadata = undefined;
    this.open = false;
    this.setSize = null;
    this.setPosition = null;
    this.selected = false;
    this.value = undefined;
    this.selectionMode = null;
    this.selectionAppearance = null;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
    this.level = null;
    this.visualLevel = null;
    this.parentListEl = undefined;
    this.openable = false;
    this.hasActionsStart = false;
    this.hasActionsEnd = false;
    this.hasCustomContent = false;
    this.hasContentStart = false;
    this.hasContentEnd = false;
  }
  activeHandler(active) {
    if (!active) {
      this.focusCell(null, false);
    }
  }
  handleSelectedChange() {
    this.calciteInternalListItemSelect.emit();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
  }
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    const { el } = this;
    this.parentListEl = el.closest(listSelector);
    this.level = getDepth(el) + 1;
    this.visualLevel = getDepth(el, true);
    this.setSelectionDefaults();
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_2__.u)(this, "managed");
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    const { containerEl, contentEl, actionsStartEl, actionsEndEl, parentListEl } = this;
    const focusIndex = focusMap.get(parentListEl);
    if (typeof focusIndex === "number") {
      const cells = [actionsStartEl, contentEl, actionsEndEl].filter(Boolean);
      if (cells[focusIndex]) {
        this.focusCell(cells[focusIndex]);
      }
      else {
        containerEl?.focus();
      }
      return;
    }
    containerEl?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderSelected() {
    const { selected, selectionMode, selectionAppearance } = this;
    if (selectionMode === "none" || selectionAppearance === "border") {
      return null;
    }
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("td", { class: CSS$2.selectionContainer, key: "selection-container", onClick: this.itemClicked }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: selected
        ? selectionMode === "multiple"
          ? ICONS.selectedMultiple
          : ICONS.selectedSingle
        : ICONS.unselected, scale: "s" })));
  }
  renderOpen() {
    const { el, open, openable, parentListEl } = this;
    const dir = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.b)(el);
    return openable ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("td", { class: CSS$2.openContainer, key: "open-container", onClick: this.toggleOpen }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: open ? ICONS.open : dir === "rtl" ? ICONS.closedRTL : ICONS.closedLTR, scale: "s" }))) : parentListEl?.openable ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("td", { class: CSS$2.openContainer, key: "open-container", onClick: this.itemClicked }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: ICONS.blank, scale: "s" }))) : null;
  }
  renderActionsStart() {
    const { label, hasActionsStart } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("td", { "aria-label": label, class: CSS$2.actionsStart, hidden: !hasActionsStart, key: "actions-start-container", role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.actionsStartEl = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.actionsStart, onSlotchange: this.handleActionsStartSlotChange })));
  }
  renderActionsEnd() {
    const { label, hasActionsEnd, closable, messages } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("td", { "aria-label": label, class: CSS$2.actionsEnd, hidden: !(hasActionsEnd || closable), key: "actions-end-container", role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.actionsEndEl = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }), closable ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action", { appearance: "transparent", icon: ICONS.close, key: "close-action", label: messages.close, onClick: this.closeClickHandler, text: messages.close })) : null));
  }
  renderContentStart() {
    const { hasContentStart } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.contentStart, hidden: !hasContentStart }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.contentStart, onSlotchange: this.handleContentStartSlotChange })));
  }
  renderCustomContent() {
    const { hasCustomContent } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.customContent, hidden: !hasCustomContent }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.content, onSlotchange: this.handleContentSlotChange })));
  }
  renderContentEnd() {
    const { hasContentEnd } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.contentEnd, hidden: !hasContentEnd }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.contentEnd, onSlotchange: this.handleContentEndSlotChange })));
  }
  renderContentProperties() {
    const { label, description, hasCustomContent } = this;
    return !hasCustomContent && (!!label || !!description) ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.content, key: "content" }, label ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.label, key: "label" }, label)) : null, description ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.description, key: "description" }, description)) : null)) : null;
  }
  renderContentContainer() {
    const { description, label, selectionMode, hasCustomContent } = this;
    const hasCenterContent = hasCustomContent || !!label || !!description;
    const content = [
      this.renderContentStart(),
      this.renderCustomContent(),
      this.renderContentProperties(),
      this.renderContentEnd()
    ];
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("td", { "aria-label": label, class: {
        [CSS$2.contentContainer]: true,
        [CSS$2.contentContainerSelectable]: selectionMode !== "none",
        [CSS$2.contentContainerHasCenterContent]: hasCenterContent
      }, key: "content-container", onClick: this.itemClicked, role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.contentEl = el) }, content));
  }
  render() {
    const { openable, open, level, setPosition, setSize, active, label, selected, selectionAppearance, selectionMode, closed } = this;
    const showBorder = selectionMode !== "none" && selectionAppearance === "border";
    const borderSelected = showBorder && selected;
    const borderUnselected = showBorder && !selected;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("tr", { "aria-expanded": openable ? (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.t)(open) : null, "aria-label": label, "aria-level": level, "aria-posinset": setPosition, "aria-selected": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.t)(selected), "aria-setsize": setSize, class: {
        [CSS$2.container]: true,
        [CSS$2.containerBorderSelected]: borderSelected,
        [CSS$2.containerBorderUnselected]: borderUnselected
      }, hidden: closed, onFocus: this.focusCellNull, onKeyDown: this.handleItemKeyDown, role: "row", style: { "--calcite-list-item-spacing-indent-multiplier": `${this.visualLevel}` }, tabIndex: active ? 0 : -1,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.containerEl = el) }, this.renderSelected(), this.renderOpen(), this.renderActionsStart(), this.renderContentContainer(), this.renderActionsEnd()), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS$2.nestedContainer]: true,
        [CSS$2.nestedContainerHidden]: openable && !open
      } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }))));
  }
  setSelectionDefaults() {
    const { parentListEl, selectionMode, selectionAppearance } = this;
    if (!parentListEl) {
      return;
    }
    if (!selectionMode) {
      this.selectionMode = parentListEl.selectionMode;
    }
    if (!selectionAppearance) {
      this.selectionAppearance = parentListEl.selectionAppearance;
    }
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "active": ["activeHandler"],
    "selected": ["handleSelectedChange"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
ListItem.style = listItemCss;

const CSS = {
  container: "container",
  heading: "heading"
};

const listItemGroupCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{margin:0px;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-2);padding:0.75rem;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.heading{padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}::slotted(calcite-list-item){margin-block-end:1px;--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}::slotted(calcite-list-item:last-child){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}[hidden]{display:none}";

const ListItemGroup = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.disabled = false;
    this.heading = undefined;
    this.visualLevel = null;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    const { el } = this;
    this.visualLevel = getDepth(el, true);
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { heading, visualLevel } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("tr", { class: CSS.container, style: { "--calcite-list-item-spacing-indent-multiplier": `${visualLevel}` } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("td", { class: CSS.heading, colSpan: MAX_COLUMNS }, heading)), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
ListItemGroup.style = listItemGroupCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvODZkZDI1NjFhYTM4NzEwNGViMmZiZTc4Y2E3MGIyZTQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQixRQUFRLE1BQU0sR0FBRyxRQUFRO0FBQ3BFO0FBQ0E7O0FBRTBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ0M7QUFDYztBQUM5RDtBQUNzRDtBQUM3RDtBQUNnQztBQUNvQztBQUMvRjtBQUNLO0FBQ0Y7QUFDSjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsZUFBZTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGNBQWMseUdBQXlHLFVBQVUsV0FBVyxrQkFBa0IsaUJBQWlCLGtCQUFrQixtQ0FBbUMsc0JBQXNCLGFBQWEsaUJBQWlCLHNCQUFzQiw2QkFBNkIsbUJBQW1CLHNCQUFzQixPQUFPLGlCQUFpQix5QkFBeUIsNkJBQTZCLHFCQUFxQiwrQ0FBK0MsbURBQW1ELHVHQUF1Ryx3Q0FBd0Msc0JBQXNCLDhCQUE4Qix1R0FBdUcsWUFBWSxnQkFBZ0Isc0JBQXNCLDBDQUEwQyxlQUFlLFlBQVksZUFBZSxxQkFBcUI7O0FBRXQyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWdCO0FBQ3BCLDZCQUE2QixxREFBVztBQUN4Qyw2QkFBNkIscURBQVc7QUFDeEM7QUFDQTtBQUNBLDRCQUE0Qix5REFBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsc0NBQXNDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLDZDQUE2QztBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsMkJBQTJCLHdEQUFRO0FBQ25DLGNBQWMscUNBQXFDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyQkFBMkI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnQ0FBZ0M7QUFDOUU7QUFDQSxJQUFJLDJEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFxQjtBQUN6QjtBQUNBO0FBQ0EsSUFBSSx3REFBc0I7QUFDMUI7QUFDQTtBQUNBLElBQUksMkRBQXFCO0FBQ3pCO0FBQ0E7QUFDQSxJQUFJLHdEQUFrQjtBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdEQUFlO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdGQUF3RjtBQUNwRyxZQUFZLHFEQUFDLFVBQVUsd0JBQXdCLFlBQVkscURBQUMsb0JBQW9CLHNDQUFzQyxVQUFVLHFEQUFDLFlBQVksYUFBYSxtREFBYSwrR0FBK0csbUJBQW1CLHFEQUFDLGdCQUFnQixxREFBQyxTQUFTLFNBQVMsd0JBQXdCLEVBQUUscURBQUMsU0FBUyxzQkFBc0IsRUFBRSxxREFBQyxxQkFBcUI7QUFDL1o7QUFDQSx5Q0FBeUMsY0FBYyxxREFBQyxZQUFZLDZCQUE2QixFQUFFLHFEQUFDLFdBQVcsNENBQTRDO0FBQzNKO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGFBQWEsT0FBTyxxREFBVTtBQUM5QiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxhQUFhLHNCQUFzQix1REFBdUQsd0NBQXdDLHlHQUF5RyxVQUFVLFdBQVcsc0JBQXNCLGFBQWEsWUFBWSxnREFBZ0QsdUNBQXVDLHdIQUF3SCxhQUFhLHNCQUFzQixpQkFBaUIsZUFBZSxnREFBZ0QsNEJBQTRCLHNEQUFzRCw4QkFBOEIsMENBQTBDLGtCQUFrQixhQUFhLHNCQUFzQixnREFBZ0QsMEJBQTBCLGFBQWEsbUJBQW1CLGFBQWEsY0FBYyxvQkFBb0IsWUFBWSx1Q0FBdUMsOENBQThDLCtCQUErQixNQUFNLDBCQUEwQixrQkFBa0IsMENBQTBDLHlFQUF5RSxxUEFBcVAseUJBQXlCLGFBQWEsY0FBYyxzQkFBc0IsdUJBQXVCLHVCQUF1QixxQkFBcUIsc0NBQXNDLGtCQUFrQixvQkFBb0IsdUNBQXVDLHNDQUFzQyw4Q0FBOEMscUJBQXFCLHNCQUFzQiwwQ0FBMEMsV0FBVyxzQkFBc0IsT0FBTywrQkFBK0IsYUFBYSw0QkFBNEIsK0JBQStCLGVBQWUsMkJBQTJCLGFBQWEseUJBQXlCLDRCQUE0QixjQUFjLDBHQUEwRyxjQUFjLHFCQUFxQixhQUFhLHVCQUF1QiwwQ0FBMEMsNkZBQTZGLGFBQWEsbUJBQW1CLHFDQUFxQyxlQUFlLDRFQUE0RSxzQkFBc0Isa0JBQWtCLGdGQUFnRixtQkFBbUIsY0FBYyw2QkFBNkIsaUJBQWlCLDZCQUE2QixtQkFBbUIsd0NBQXdDLFNBQVMsYUFBYTs7QUFFOXhKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBZ0I7QUFDcEIsaUNBQWlDLHFEQUFXO0FBQzVDLGdDQUFnQyxxREFBVztBQUMzQyx5Q0FBeUMscURBQVc7QUFDcEQseUNBQXlDLHFEQUFXO0FBQ3BELDRDQUE0QyxxREFBVztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtREFBNEI7QUFDMUQ7QUFDQTtBQUNBLDZCQUE2QixtREFBNEI7QUFDekQ7QUFDQTtBQUNBLDJCQUEyQixtREFBNEI7QUFDdkQ7QUFDQTtBQUNBLDZCQUE2QixtREFBNEI7QUFDekQ7QUFDQTtBQUNBLDJCQUEyQixtREFBNEI7QUFDdkQ7QUFDQTtBQUNBLGNBQWMsZUFBZTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMEJBQTBCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBLGNBQWMsdUVBQXVFO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdEQUF3RDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnSkFBYztBQUNsQjtBQUNBO0FBQ0EsSUFBSSwyREFBa0I7QUFDdEIsSUFBSSxzREFBZ0I7QUFDcEIsSUFBSSxnSkFBZTtBQUNuQixZQUFZLEtBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBc0I7QUFDMUIsVUFBVSxnSkFBYTtBQUN2QjtBQUNBO0FBQ0EsSUFBSSx3REFBa0I7QUFDdEI7QUFDQTtBQUNBLElBQUksMkRBQXFCO0FBQ3pCO0FBQ0E7QUFDQSxJQUFJLDJEQUFxQjtBQUN6QixJQUFJLHNEQUFtQjtBQUN2QixJQUFJLGdKQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx3REFBZTtBQUN6QixZQUFZLHFFQUFxRTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0NBQStDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQUMsU0FBUyx3RkFBd0YsRUFBRSxxREFBQyxtQkFBbUI7QUFDcEk7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQyxnQkFBZ0IsbURBQWE7QUFDN0IsdUJBQXVCLHFEQUFDLFNBQVMsNkVBQTZFLEVBQUUscURBQUMsbUJBQW1CLHlGQUF5RixnQ0FBZ0MscURBQUMsU0FBUyw4RUFBOEUsRUFBRSxxREFBQyxtQkFBbUIsK0JBQStCO0FBQzFZO0FBQ0E7QUFDQSxZQUFZLHlCQUF5QjtBQUNyQyxZQUFZLHFEQUFDLFNBQVM7QUFDdEI7QUFDQSwrQ0FBK0MsRUFBRSxxREFBQyxXQUFXLDJFQUEyRTtBQUN4STtBQUNBO0FBQ0EsWUFBWSwyQ0FBMkM7QUFDdkQsWUFBWSxxREFBQyxTQUFTO0FBQ3RCO0FBQ0EsNkNBQTZDLEVBQUUscURBQUMsV0FBVyx1RUFBdUUsZUFBZSxxREFBQyxxQkFBcUIsaUpBQWlKO0FBQ3hUO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QixZQUFZLHFEQUFDLFVBQVUscURBQXFELEVBQUUscURBQUMsV0FBVywyRUFBMkU7QUFDcks7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CLFlBQVkscURBQUMsVUFBVSx1REFBdUQsRUFBRSxxREFBQyxXQUFXLGlFQUFpRTtBQUM3SjtBQUNBO0FBQ0EsWUFBWSxnQkFBZ0I7QUFDNUIsWUFBWSxxREFBQyxVQUFVLGlEQUFpRCxFQUFFLHFEQUFDLFdBQVcsdUVBQXVFO0FBQzdKO0FBQ0E7QUFDQSxZQUFZLHVDQUF1QztBQUNuRCw4REFBOEQscURBQUMsVUFBVSxzQ0FBc0MsV0FBVyxxREFBQyxVQUFVLGtDQUFrQyxpQ0FBaUMscURBQUMsVUFBVSw4Q0FBOEM7QUFDalE7QUFDQTtBQUNBLFlBQVksc0RBQXNEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBQyxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0EsWUFBWSxtSEFBbUg7QUFDL0g7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBQyxDQUFDLGlEQUFJLFFBQVEscURBQUMsU0FBUyw0QkFBNEIsbURBQWEsd0dBQXdHLG1EQUFhO0FBQ2xNO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0dBQXdHLG9EQUFvRCxpQkFBaUIsR0FBRztBQUN2TDtBQUNBLDRDQUE0QyxnSUFBZ0kscURBQUMsVUFBVTtBQUN2TDtBQUNBO0FBQ0EsU0FBUyxFQUFFLHFEQUFDLFdBQVcsNENBQTRDO0FBQ25FO0FBQ0E7QUFDQSxZQUFZLG1EQUFtRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixhQUFhLE9BQU8scURBQVU7QUFDOUIsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxhQUFhLHNCQUFzQixnREFBZ0Qsd0NBQXdDLHlHQUF5RyxVQUFVLFdBQVcsV0FBVyxhQUFhLFlBQVksZ0RBQWdELGdCQUFnQix1Q0FBdUMsc0NBQXNDLDRDQUE0QywrQkFBK0IsU0FBUyx3SEFBd0gsNkJBQTZCLHFCQUFxQiwrQ0FBK0MsbURBQW1ELHVHQUF1Ryx3Q0FBd0Msc0JBQXNCLDhCQUE4Qix1R0FBdUcsU0FBUyxhQUFhOztBQUUzN0Y7QUFDQTtBQUNBLElBQUkscURBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCO0FBQ0EsSUFBSSwyREFBa0I7QUFDdEI7QUFDQTtBQUNBLElBQUksMkRBQXFCO0FBQ3pCO0FBQ0E7QUFDQSxJQUFJLDJEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdUJBQXVCO0FBQ25DLFlBQVkscURBQUMsQ0FBQyxpREFBSSxRQUFRLHFEQUFDLFNBQVMsK0JBQStCLG9EQUFvRCxZQUFZLEtBQUssRUFBRSxxREFBQyxTQUFTLDBDQUEwQyxhQUFhLHFEQUFDO0FBQzVNO0FBQ0EsYUFBYSxPQUFPLHFEQUFVO0FBQzlCO0FBQ0E7O0FBRXlHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4dEJ6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2dFOztBQUVoRTtBQUNBLGtDQUFrQyx1REFBa0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vYnJvd3Nlci05OWJjNjJjZi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLWxpc3RfMy5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9pbnRlcmFjdGl2ZS0wZWIxMzYwMC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9sb2FkYWJsZS04MDU4ZTMwMC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuZnVuY3Rpb24gZ2V0VXNlckFnZW50RGF0YSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xufVxuZnVuY3Rpb24gZ2V0VXNlckFnZW50U3RyaW5nKCkge1xuICBjb25zdCB1YURhdGEgPSBnZXRVc2VyQWdlbnREYXRhKCk7XG4gIHJldHVybiB1YURhdGE/LmJyYW5kc1xuICAgID8gdWFEYXRhLmJyYW5kcy5tYXAoKHsgYnJhbmQsIHZlcnNpb24gfSkgPT4gYCR7YnJhbmR9LyR7dmVyc2lvbn1gKS5qb2luKFwiIFwiKVxuICAgIDogbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn1cblxuZXhwb3J0IHsgZ2V0VXNlckFnZW50RGF0YSBhcyBhLCBnZXRVc2VyQWdlbnRTdHJpbmcgYXMgZyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgYSBhcyBnZXRFbGVtZW50LCBIIGFzIEhvc3QgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IHQgYXMgdG9BcmlhQm9vbGVhbiwgZCBhcyBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50LCBiIGFzIGdldEVsZW1lbnREaXIgfSBmcm9tICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RJbnRlcmFjdGl2ZSwgZCBhcyBkaXNjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS0wZWIxMzYwMC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtOTVlOTdmYWUuanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLTgwNThlMzAwLmpzJztcbmltcG9ydCB7IGQgYXMgZGVib3VuY2UgfSBmcm9tICcuL2RlYm91bmNlLTA5NTBhOWI4LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUtYTM1NjQ4Y2QuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1mYWMxMzM5NC5qcyc7XG5pbXBvcnQgJy4vZ3VpZC03MTM2OTc0Yi5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcbmltcG9ydCAnLi9icm93c2VyLTk5YmM2MmNmLmpzJztcbmltcG9ydCAnLi9rZXktOGZmMGQxMDEuanMnO1xuXG5jb25zdCBDU1MkMiA9IHtcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBjb250YWluZXJCb3JkZXJTZWxlY3RlZDogXCJjb250YWluZXItLWJvcmRlci1zZWxlY3RlZFwiLFxuICBjb250YWluZXJCb3JkZXJVbnNlbGVjdGVkOiBcImNvbnRhaW5lci0tYm9yZGVyLXVuc2VsZWN0ZWRcIixcbiAgY29udGVudENvbnRhaW5lcjogXCJjb250ZW50LWNvbnRhaW5lclwiLFxuICBjb250ZW50Q29udGFpbmVyU2VsZWN0YWJsZTogXCJjb250ZW50LWNvbnRhaW5lci0tc2VsZWN0YWJsZVwiLFxuICBjb250ZW50Q29udGFpbmVySGFzQ2VudGVyQ29udGVudDogXCJjb250ZW50LWNvbnRhaW5lci0taGFzLWNlbnRlci1jb250ZW50XCIsXG4gIG5lc3RlZENvbnRhaW5lcjogXCJuZXN0ZWQtY29udGFpbmVyXCIsXG4gIG5lc3RlZENvbnRhaW5lckhpZGRlbjogXCJuZXN0ZWQtY29udGFpbmVyLS1oaWRkZW5cIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGN1c3RvbUNvbnRlbnQ6IFwiY3VzdG9tLWNvbnRlbnRcIixcbiAgYWN0aW9uc1N0YXJ0OiBcImFjdGlvbnMtc3RhcnRcIixcbiAgY29udGVudFN0YXJ0OiBcImNvbnRlbnQtc3RhcnRcIixcbiAgbGFiZWw6IFwibGFiZWxcIixcbiAgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb25cIixcbiAgY29udGVudEVuZDogXCJjb250ZW50LWVuZFwiLFxuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG4gIHNlbGVjdGlvbkNvbnRhaW5lcjogXCJzZWxlY3Rpb24tY29udGFpbmVyXCIsXG4gIG9wZW5Db250YWluZXI6IFwib3Blbi1jb250YWluZXJcIlxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25zU3RhcnQ6IFwiYWN0aW9ucy1zdGFydFwiLFxuICBjb250ZW50U3RhcnQ6IFwiY29udGVudC1zdGFydFwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgY29udGVudEVuZDogXCJjb250ZW50LWVuZFwiLFxuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCJcbn07XG5jb25zdCBNQVhfQ09MVU1OUyA9IDU7XG5jb25zdCBJQ09OUyA9IHtcbiAgc2VsZWN0ZWRNdWx0aXBsZTogXCJjaGVjay1jaXJjbGUtZlwiLFxuICBzZWxlY3RlZFNpbmdsZTogXCJjaXJjbGUtZlwiLFxuICB1bnNlbGVjdGVkOiBcImJsYW5rXCIsXG4gIGNsb3NlZExUUjogXCJjYXJldC1yaWdodFwiLFxuICBjbG9zZWRSVEw6IFwiY2FyZXQtbGVmdFwiLFxuICBvcGVuOiBcImNhcmV0LWRvd25cIixcbiAgYmxhbms6IFwiYmxhbmtcIixcbiAgY2xvc2U6IFwieFwiXG59O1xuXG5jb25zdCBsaXN0SXRlbUdyb3VwU2VsZWN0b3IgPSBcImNhbGNpdGUtbGlzdC1pdGVtLWdyb3VwXCI7XG5jb25zdCBsaXN0SXRlbVNlbGVjdG9yJDEgPSBcImNhbGNpdGUtbGlzdC1pdGVtXCI7XG5mdW5jdGlvbiBnZXRMaXN0SXRlbUNoaWxkcmVuKGV2ZW50KSB7XG4gIGNvbnN0IGFzc2lnbmVkRWxlbWVudHMgPSBldmVudC50YXJnZXQuYXNzaWduZWRFbGVtZW50cyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gIGNvbnN0IGxpc3RJdGVtR3JvdXBDaGlsZHJlbiA9IGFzc2lnbmVkRWxlbWVudHMuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMobGlzdEl0ZW1Hcm91cFNlbGVjdG9yKSlcbiAgICAubWFwKChncm91cCkgPT4gQXJyYXkuZnJvbShncm91cC5xdWVyeVNlbGVjdG9yQWxsKGxpc3RJdGVtU2VsZWN0b3IkMSkpKVxuICAgIC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4gWy4uLnByZXZpb3VzVmFsdWUsIC4uLmN1cnJlbnRWYWx1ZV0sIFtdKTtcbiAgY29uc3QgbGlzdEl0ZW1DaGlsZHJlbiA9IGFzc2lnbmVkRWxlbWVudHMuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMobGlzdEl0ZW1TZWxlY3RvciQxKSk7XG4gIHJldHVybiBbLi4ubGlzdEl0ZW1Hcm91cENoaWxkcmVuLCAuLi5saXN0SXRlbUNoaWxkcmVuXTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUxpc3RJdGVtQ2hpbGRyZW4obGlzdEl0ZW1DaGlsZHJlbikge1xuICBsaXN0SXRlbUNoaWxkcmVuLmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgbGlzdEl0ZW0uc2V0UG9zaXRpb24gPSBsaXN0SXRlbUNoaWxkcmVuLmluZGV4T2YobGlzdEl0ZW0pICsgMTtcbiAgICBsaXN0SXRlbS5zZXRTaXplID0gbGlzdEl0ZW1DaGlsZHJlbi5sZW5ndGg7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0RGVwdGgoZWxlbWVudCwgaW5jbHVkZUdyb3VwID0gZmFsc2UpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IGluY2x1ZGVHcm91cFxuICAgID8gXCJhbmNlc3Rvcjo6Y2FsY2l0ZS1saXN0LWl0ZW0gfCBhbmNlc3Rvcjo6Y2FsY2l0ZS1saXN0LWl0ZW0tZ3JvdXBcIlxuICAgIDogXCJhbmNlc3Rvcjo6Y2FsY2l0ZS1saXN0LWl0ZW1cIjtcbiAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZXZhbHVhdGUoZXhwcmVzc2lvbiwgZWxlbWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuVU5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRSwgbnVsbCk7XG4gIHJldHVybiByZXN1bHQuc25hcHNob3RMZW5ndGg7XG59XG5cbmNvbnN0IENTUyQxID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIHRhYmxlOiBcInRhYmxlXCIsXG4gIHNjcmltOiBcInNjcmltXCIsXG4gIHRhYmxlQ29udGFpbmVyOiBcInRhYmxlLWNvbnRhaW5lclwiLFxuICBzdGlja3k6IFwic3RpY2t5LXBvc1wiXG59O1xuY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gMDtcblxuY29uc3QgbGlzdENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6YmxvY2t9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfS5jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9LnRhYmxlLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0udGFibGUtY29udGFpbmVyICp7Ym94LXNpemluZzpib3JkZXItYm94fS50YWJsZXtpbmxpbmUtc2l6ZToxMDAlO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZX06OnNsb3R0ZWQoY2FsY2l0ZS1saXN0LWl0ZW0pe21hcmdpbi1ibG9jay1lbmQ6MXB4Oy0tdHctc2hhZG93OjAgMXB4IDAgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7LS10dy1zaGFkb3ctY29sb3JlZDowIDFweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTo6c2xvdHRlZChjYWxjaXRlLWxpc3QtaXRlbTpsYXN0LWNoaWxkKXstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfS5zdGlja3ktcG9ze3Bvc2l0aW9uOnN0aWNreTtpbnNldC1ibG9jay1zdGFydDowcHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LXN0aWNreSl9LnN0aWNreS1wb3MgdGh7cGFkZGluZzowcHh9Y2FsY2l0ZS1maWx0ZXJ7bWFyZ2luLWJsb2NrLWVuZDoxcHh9XCI7XG5cbmNvbnN0IGxpc3RJdGVtU2VsZWN0b3IgPSBcImNhbGNpdGUtbGlzdC1pdGVtXCI7XG5jb25zdCBwYXJlbnRTZWxlY3RvciA9IFwiY2FsY2l0ZS1saXN0LWl0ZW0tZ3JvdXAsIGNhbGNpdGUtbGlzdC1pdGVtXCI7XG5jb25zdCBMaXN0ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0Q2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTGlzdENoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0RmlsdGVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTGlzdEZpbHRlclwiLCA2KTtcbiAgICB0aGlzLmxpc3RJdGVtcyA9IFtdO1xuICAgIHRoaXMuZW5hYmxlZExpc3RJdGVtcyA9IFtdO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy51cGRhdGVMaXN0SXRlbXMoKSk7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdXBkYXRlTGlzdEl0ZW1DaGlsZHJlbihnZXRMaXN0SXRlbUNoaWxkcmVuKGV2ZW50KSk7XG4gICAgfTtcbiAgICB0aGlzLnNldEFjdGl2ZUxpc3RJdGVtID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBlbmFibGVkTGlzdEl0ZW1zIH0gPSB0aGlzO1xuICAgICAgaWYgKCFlbmFibGVkTGlzdEl0ZW1zLnNvbWUoKGl0ZW0pID0+IGl0ZW0uYWN0aXZlKSkge1xuICAgICAgICBpZiAoZW5hYmxlZExpc3RJdGVtc1swXSkge1xuICAgICAgICAgIGVuYWJsZWRMaXN0SXRlbXNbMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZEl0ZW1zID0gKGVtaXQgPSBmYWxzZSkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gdGhpcy5lbmFibGVkTGlzdEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zZWxlY3RlZCk7XG4gICAgICBpZiAoZW1pdCkge1xuICAgICAgICB0aGlzLmNhbGNpdGVMaXN0Q2hhbmdlLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudXBkYXRlRmlsdGVyZWRJdGVtcyA9IChlbWl0ID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IHsgbGlzdEl0ZW1zLCBmaWx0ZXJlZERhdGEsIGZpbHRlclRleHQgfSA9IHRoaXM7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBmaWx0ZXJlZERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKTtcbiAgICAgIGNvbnN0IGxhc3REZXNjZW5kYW50SXRlbXMgPSBsaXN0SXRlbXM/LmZpbHRlcigobGlzdEl0ZW0pID0+IGxpc3RJdGVtcy5ldmVyeSgobGkpID0+IGxpID09PSBsaXN0SXRlbSB8fCAhbGlzdEl0ZW0uY29udGFpbnMobGkpKSk7XG4gICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gbGlzdEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gIWZpbHRlclRleHQgfHwgdmFsdWVzLmluY2x1ZGVzKGl0ZW0udmFsdWUpKSB8fCBbXTtcbiAgICAgIGNvbnN0IHZpc2libGVQYXJlbnRzID0gbmV3IFdlYWtTZXQoKTtcbiAgICAgIGxhc3REZXNjZW5kYW50SXRlbXMuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHRoaXMuZmlsdGVyRWxlbWVudHMoeyBlbDogbGlzdEl0ZW0sIGZpbHRlcmVkSXRlbXMsIHZpc2libGVQYXJlbnRzIH0pKTtcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXM7XG4gICAgICBpZiAoZW1pdCkge1xuICAgICAgICB0aGlzLmNhbGNpdGVMaXN0RmlsdGVyLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IHsgZmlsdGVyZWRJdGVtcywgdmFsdWUgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkSXRlbXM7XG4gICAgICB0aGlzLmZpbHRlclRleHQgPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zKHRydWUpO1xuICAgIH07XG4gICAgdGhpcy5nZXRJdGVtRGF0YSA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmxpc3RJdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxuICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcbiAgICAgICAgbWV0YWRhdGE6IGl0ZW0ubWV0YWRhdGEsXG4gICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlXG4gICAgICB9KSk7XG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RJdGVtcyA9IGRlYm91bmNlKChlbWl0ID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IHsgc2VsZWN0aW9uQXBwZWFyYW5jZSwgc2VsZWN0aW9uTW9kZSB9ID0gdGhpcztcbiAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5xdWVyeUxpc3RJdGVtcygpO1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbkFwcGVhcmFuY2UgPSBzZWxlY3Rpb25BcHBlYXJhbmNlO1xuICAgICAgICBpdGVtLnNlbGVjdGlvbk1vZGUgPSBzZWxlY3Rpb25Nb2RlO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxpc3RJdGVtcyA9IGl0ZW1zO1xuICAgICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmRhdGFGb3JGaWx0ZXIgPSB0aGlzLmdldEl0ZW1EYXRhKCk7XG4gICAgICAgIGlmICh0aGlzLmZpbHRlckVsKSB7XG4gICAgICAgICAgdGhpcy5maWx0ZXJFbC5pdGVtcyA9IHRoaXMuZGF0YUZvckZpbHRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVGaWx0ZXJlZEl0ZW1zKGVtaXQpO1xuICAgICAgdGhpcy5lbmFibGVkTGlzdEl0ZW1zID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiAhaXRlbS5kaXNhYmxlZCAmJiAhaXRlbS5jbG9zZWQpO1xuICAgICAgdGhpcy5zZXRBY3RpdmVMaXN0SXRlbSgpO1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZEl0ZW1zKGVtaXQpO1xuICAgIH0sIGRlYm91bmNlVGltZW91dCk7XG4gICAgdGhpcy5xdWVyeUxpc3RJdGVtcyA9ICgpID0+IHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChsaXN0SXRlbVNlbGVjdG9yKSk7XG4gICAgfTtcbiAgICB0aGlzLmZvY3VzUm93ID0gKGZvY3VzRWwpID0+IHtcbiAgICAgIGNvbnN0IHsgZW5hYmxlZExpc3RJdGVtcyB9ID0gdGhpcztcbiAgICAgIGlmICghZm9jdXNFbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbmFibGVkTGlzdEl0ZW1zLmZvckVhY2goKGxpc3RJdGVtKSA9PiAobGlzdEl0ZW0uYWN0aXZlID0gbGlzdEl0ZW0gPT09IGZvY3VzRWwpKTtcbiAgICAgIGZvY3VzRWwuc2V0Rm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMuaXNOYXZpZ2FibGUgPSAobGlzdEl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHBhcmVudExpc3RJdGVtRWwgPSBsaXN0SXRlbS5wYXJlbnRFbGVtZW50Py5jbG9zZXN0KGxpc3RJdGVtU2VsZWN0b3IpO1xuICAgICAgaWYgKCFwYXJlbnRMaXN0SXRlbUVsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcmVudExpc3RJdGVtRWwub3BlbiAmJiB0aGlzLmlzTmF2aWdhYmxlKHBhcmVudExpc3RJdGVtRWwpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVMaXN0S2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHRoaXMuZW5hYmxlZExpc3RJdGVtcy5maWx0ZXIoKGxpc3RJdGVtKSA9PiB0aGlzLmlzTmF2aWdhYmxlKGxpc3RJdGVtKSk7XG4gICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBmaWx0ZXJlZEl0ZW1zLmZpbmRJbmRleCgobGlzdEl0ZW0pID0+IGxpc3RJdGVtLmFjdGl2ZSk7XG4gICAgICBpZiAoa2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG4gICAgICAgIGlmIChmaWx0ZXJlZEl0ZW1zW25leHRJbmRleF0pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzUm93KGZpbHRlcmVkSXRlbXNbbmV4dEluZGV4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJldkluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcbiAgICAgICAgaWYgKGZpbHRlcmVkSXRlbXNbcHJldkluZGV4XSkge1xuICAgICAgICAgIHRoaXMuZm9jdXNSb3coZmlsdGVyZWRJdGVtc1twcmV2SW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09PSBcIkhvbWVcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBob21lSXRlbSA9IGZpbHRlcmVkSXRlbXNbMF07XG4gICAgICAgIGlmIChob21lSXRlbSkge1xuICAgICAgICAgIHRoaXMuZm9jdXNSb3coaG9tZUl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwiRW5kXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZW5kSXRlbSA9IGZpbHRlcmVkSXRlbXNbZmlsdGVyZWRJdGVtcy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGVuZEl0ZW0pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzUm93KGVuZEl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5maWx0ZXJFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gW107XG4gICAgdGhpcy5maWx0ZXJlZERhdGEgPSBbXTtcbiAgICB0aGlzLmZpbHRlclBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyVGV4dCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMub3BlbmFibGUgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBcIm5vbmVcIjtcbiAgICB0aGlzLnNlbGVjdGlvbkFwcGVhcmFuY2UgPSBcImljb25cIjtcbiAgICB0aGlzLmRhdGFGb3JGaWx0ZXIgPSBbXTtcbiAgfVxuICBoYW5kbGVGaWx0ZXJFbmFibGVkQ2hhbmdlKCkge1xuICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zKCk7XG4gIH1cbiAgaGFuZGxlU2VsZWN0aW9uQXBwZWFyYW5jZUNoYW5nZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUxpc3RJdGVtcygpO1xuICB9XG4gIGhhbmRsZUNhbGNpdGVJbnRlcm5hbEZvY3VzUHJldmlvdXNJdGVtKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgeyBlbmFibGVkTGlzdEl0ZW1zIH0gPSB0aGlzO1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGVuYWJsZWRMaXN0SXRlbXMuZmluZEluZGV4KChsaXN0SXRlbSkgPT4gbGlzdEl0ZW0uYWN0aXZlKTtcbiAgICBjb25zdCBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuICAgIGlmIChlbmFibGVkTGlzdEl0ZW1zW3ByZXZJbmRleF0pIHtcbiAgICAgIHRoaXMuZm9jdXNSb3coZW5hYmxlZExpc3RJdGVtc1twcmV2SW5kZXhdKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlQ2FsY2l0ZUludGVybmFsTGlzdEl0ZW1BY3RpdmUoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgeyBsaXN0SXRlbXMgfSA9IHRoaXM7XG4gICAgbGlzdEl0ZW1zLmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgICBsaXN0SXRlbS5hY3RpdmUgPSBsaXN0SXRlbSA9PT0gdGFyZ2V0O1xuICAgIH0pO1xuICB9XG4gIGhhbmRsZUNhbGNpdGVMaXN0SXRlbVNlbGVjdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSXRlbXModHJ1ZSk7XG4gIH1cbiAgaGFuZGxlQ2FsY2l0ZUludGVybmFsTGlzdEl0ZW1TZWxlY3QoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgeyBsaXN0SXRlbXMsIHNlbGVjdGlvbk1vZGUgfSA9IHRoaXM7XG4gICAgaWYgKHRhcmdldC5zZWxlY3RlZCAmJiAoc2VsZWN0aW9uTW9kZSA9PT0gXCJzaW5nbGVcIiB8fCBzZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZS1wZXJzaXN0XCIpKSB7XG4gICAgICBsaXN0SXRlbXMuZm9yRWFjaCgobGlzdEl0ZW0pID0+IChsaXN0SXRlbS5zZWxlY3RlZCA9IGxpc3RJdGVtID09PSB0YXJnZXQpKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZEl0ZW1zKCk7XG4gIH1cbiAgaGFuZGxlQ2FsY2l0ZUxpc3RJdGVtQ2xvc2UoKSB7XG4gICAgdGhpcy51cGRhdGVMaXN0SXRlbXModHJ1ZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zKCk7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgY29uc3QgeyBmaWx0ZXJFbCB9ID0gdGhpcztcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gZmlsdGVyRWw/LmZpbHRlcmVkSXRlbXM7XG4gICAgaWYgKGZpbHRlcmVkSXRlbXMpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gZmlsdGVyZWRJdGVtcztcbiAgICB9XG4gICAgdGhpcy51cGRhdGVMaXN0SXRlbXMoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5lbmFibGVkTGlzdEl0ZW1zLmZpbmQoKGxpc3RJdGVtKSA9PiBsaXN0SXRlbS5hY3RpdmUpPy5zZXRGb2N1cygpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBsYWJlbCwgZGlzYWJsZWQsIGRhdGFGb3JGaWx0ZXIsIGZpbHRlckVuYWJsZWQsIGZpbHRlclBsYWNlaG9sZGVyLCBmaWx0ZXJUZXh0IH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMS5jb250YWluZXIgfSwgbG9hZGluZyA/IGgoXCJjYWxjaXRlLXNjcmltXCIsIHsgY2xhc3M6IENTUyQxLnNjcmltLCBsb2FkaW5nOiBsb2FkaW5nIH0pIDogbnVsbCwgaChcInRhYmxlXCIsIHsgXCJhcmlhLWJ1c3lcIjogdG9BcmlhQm9vbGVhbihsb2FkaW5nKSwgXCJhcmlhLWxhYmVsXCI6IGxhYmVsIHx8IFwiXCIsIGNsYXNzOiBDU1MkMS50YWJsZSwgb25LZXlEb3duOiB0aGlzLmhhbmRsZUxpc3RLZXlkb3duLCByb2xlOiBcInRyZWVncmlkXCIgfSwgZmlsdGVyRW5hYmxlZCA/IChoKFwidGhlYWRcIiwgbnVsbCwgaChcInRyXCIsIHsgY2xhc3M6IHsgW0NTUyQxLnN0aWNreV06IHRydWUgfSB9LCBoKFwidGhcIiwgeyBjb2xTcGFuOiBNQVhfQ09MVU1OUyB9LCBoKFwiY2FsY2l0ZS1maWx0ZXJcIiwgeyBcImFyaWEtbGFiZWxcIjogZmlsdGVyUGxhY2Vob2xkZXIsIGRpc2FibGVkOiBsb2FkaW5nIHx8IGRpc2FibGVkLCBpdGVtczogZGF0YUZvckZpbHRlciwgb25DYWxjaXRlRmlsdGVyQ2hhbmdlOiB0aGlzLmhhbmRsZUZpbHRlciwgcGxhY2Vob2xkZXI6IGZpbHRlclBsYWNlaG9sZGVyLCB2YWx1ZTogZmlsdGVyVGV4dCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmZpbHRlckVsID0gZWwpIH0pKSkpKSA6IG51bGwsIGgoXCJ0Ym9keVwiLCB7IGNsYXNzOiBDU1MkMS50YWJsZUNvbnRhaW5lciB9LCBoKFwic2xvdFwiLCB7IG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSB9KSkpKSk7XG4gIH1cbiAgZmlsdGVyRWxlbWVudHMoeyBlbCwgZmlsdGVyZWRJdGVtcywgdmlzaWJsZVBhcmVudHMgfSkge1xuICAgIGNvbnN0IGhpZGRlbiA9ICF2aXNpYmxlUGFyZW50cy5oYXMoZWwpICYmICFmaWx0ZXJlZEl0ZW1zLmluY2x1ZGVzKGVsKTtcbiAgICBlbC5oaWRkZW4gPSBoaWRkZW47XG4gICAgY29uc3QgY2xvc2VzdFBhcmVudCA9IGVsLnBhcmVudEVsZW1lbnQuY2xvc2VzdChwYXJlbnRTZWxlY3Rvcik7XG4gICAgaWYgKCFjbG9zZXN0UGFyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICB2aXNpYmxlUGFyZW50cy5hZGQoY2xvc2VzdFBhcmVudCk7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyRWxlbWVudHMoe1xuICAgICAgZWw6IGNsb3Nlc3RQYXJlbnQsXG4gICAgICBmaWx0ZXJlZEl0ZW1zLFxuICAgICAgdmlzaWJsZVBhcmVudHNcbiAgICB9KTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJmaWx0ZXJFbmFibGVkXCI6IFtcImhhbmRsZUZpbHRlckVuYWJsZWRDaGFuZ2VcIl0sXG4gICAgXCJzZWxlY3Rpb25Nb2RlXCI6IFtcImhhbmRsZVNlbGVjdGlvbkFwcGVhcmFuY2VDaGFuZ2VcIl0sXG4gICAgXCJzZWxlY3Rpb25BcHBlYXJhbmNlXCI6IFtcImhhbmRsZVNlbGVjdGlvbkFwcGVhcmFuY2VDaGFuZ2VcIl1cbiAgfTsgfVxufTtcbkxpc3Quc3R5bGUgPSBsaXN0Q3NzO1xuXG5jb25zdCBsaXN0SXRlbUNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47LS1jYWxjaXRlLWxpc3QtaXRlbS1pY29uLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpOy0tY2FsY2l0ZS1saXN0LWl0ZW0tc3BhY2luZy1pbmRlbnQ6MXJlbX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmNvbnRhaW5lcntib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIDAlO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2ZvbnQtZmFtaWx5OnZhcigtLWNhbGNpdGUtc2Fucy1mYW1pbHkpO3BhZGRpbmctaW5saW5lLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1saXN0LWl0ZW0tc3BhY2luZy1pbmRlbnQpICogdmFyKC0tY2FsY2l0ZS1saXN0LWl0ZW0tc3BhY2luZy1pbmRlbnQtbXVsdGlwbGllcikpfS5jb250YWluZXIgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9LmNvbnRhaW5lcjpob3ZlcntjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0uY29udGFpbmVyLS1ib3JkZXItc2VsZWN0ZWR7Ym9yZGVyLWlubGluZS1zdGFydDo0cHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9LmNvbnRhaW5lci0tYm9yZGVyLXVuc2VsZWN0ZWR7Ym9yZGVyLWlubGluZS1zdGFydDo0cHggc29saWQgdHJhbnNwYXJlbnR9Lm5lc3RlZC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX0ubmVzdGVkLWNvbnRhaW5lci0taGlkZGVue2Rpc3BsYXk6bm9uZX0uY29udGVudC1jb250YWluZXJ7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87YWxpZ24taXRlbXM6c3RyZXRjaDtwYWRkaW5nOjBweDtmb250LWZhbWlseTp2YXIoLS1jYWxjaXRlLXNhbnMtZmFtaWx5KTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfXRyLHRke291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9dHI6Zm9jdXMsdGQ6Zm9jdXN7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LXN0aWNreSk7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5jb250ZW50LC5jdXN0b20tY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleDoxIDEgYXV0bztmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nLWlubGluZTowLjc1cmVtO3BhZGRpbmctYmxvY2s6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MS4zNzV9LmxhYmVsLC5kZXNjcmlwdGlvbntmb250LWZhbWlseTp2YXIoLS1jYWxjaXRlLXNhbnMtZmFtaWx5KTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTt3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9LmxhYmVsOm9ubHktY2hpbGQsLmRlc2NyaXB0aW9uOm9ubHktY2hpbGR7bWFyZ2luOjBweDtwYWRkaW5nLWJsb2NrOjAuMjVyZW19LmxhYmVse2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uZGVzY3JpcHRpb257bWFyZ2luLWJsb2NrLXN0YXJ0OjAuMTI1cmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX0uY29udGVudC1zdGFydHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uY29udGVudC1lbmR7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5jb250ZW50LXN0YXJ0LC5jb250ZW50LWVuZHtmbGV4OjEgMSBhdXRvfS5jb250ZW50LWNvbnRhaW5lci0taGFzLWNlbnRlci1jb250ZW50IC5jb250ZW50LXN0YXJ0LC5jb250ZW50LWNvbnRhaW5lci0taGFzLWNlbnRlci1jb250ZW50IC5jb250ZW50LWVuZHtmbGV4OjAgMSBhdXRvfS5zZWxlY3Rpb24tY29udGFpbmVye2Rpc3BsYXk6ZmxleDtwYWRkaW5nLWlubGluZTowLjc1cmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtbGlzdC1pdGVtLWljb24tY29sb3IpfS5hY3Rpb25zLXN0YXJ0LC5hY3Rpb25zLWVuZCwuY29udGVudC1zdGFydCwuY29udGVudC1lbmQsLnNlbGVjdGlvbi1jb250YWluZXIsLm9wZW4tY29udGFpbmVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXJ9Lm9wZW4tY29udGFpbmVyLC5zZWxlY3Rpb24tY29udGFpbmVye2N1cnNvcjpwb2ludGVyfS5jb250ZW50LXN0YXJ0IDo6c2xvdHRlZChjYWxjaXRlLWljb24pLC5jb250ZW50LWVuZCA6OnNsb3R0ZWQoY2FsY2l0ZS1pY29uKXttYXJnaW4taW5saW5lOjAuNzVyZW07YWxpZ24tc2VsZjpjZW50ZXJ9LmFjdGlvbnMtc3RhcnQgOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uKSwuYWN0aW9ucy1lbmQgOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uKXthbGlnbi1zZWxmOnN0cmV0Y2g7Y29sb3I6aW5oZXJpdH06OnNsb3R0ZWQoY2FsY2l0ZS1saXN0LWl0ZW0pe2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgZm9jdXNNYXAgPSBuZXcgTWFwKCk7XG5jb25zdCBsaXN0U2VsZWN0b3IgPSBcImNhbGNpdGUtbGlzdFwiO1xuY29uc3QgTGlzdEl0ZW0gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RJdGVtU2VsZWN0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTGlzdEl0ZW1TZWxlY3RcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTGlzdEl0ZW1DbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUxpc3RJdGVtQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1TZWxlY3RcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxMaXN0SXRlbUFjdGl2ZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1BY3RpdmVcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxGb2N1c1ByZXZpb3VzSXRlbSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsRm9jdXNQcmV2aW91c0l0ZW1cIiwgNik7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5jbG9zZUNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2FsY2l0ZUxpc3RJdGVtQ2xvc2UuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDb250ZW50U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNDdXN0b21Db250ZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUFjdGlvbnNTdGFydFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQWN0aW9uc1N0YXJ0ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUFjdGlvbnNFbmRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0FjdGlvbnNFbmQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ29udGVudFN0YXJ0U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNDb250ZW50U3RhcnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ29udGVudEVuZFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQ29udGVudEVuZCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXJlbnRMaXN0RWwgfSA9IHRoaXM7XG4gICAgICBjb25zdCBsaXN0SXRlbUNoaWxkcmVuID0gZ2V0TGlzdEl0ZW1DaGlsZHJlbihldmVudCk7XG4gICAgICB1cGRhdGVMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtQ2hpbGRyZW4pO1xuICAgICAgY29uc3Qgb3BlbmFibGUgPSAhIWxpc3RJdGVtQ2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgaWYgKG9wZW5hYmxlICYmIHBhcmVudExpc3RFbCAmJiAhcGFyZW50TGlzdEVsLm9wZW5hYmxlKSB7XG4gICAgICAgIHBhcmVudExpc3RFbC5vcGVuYWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW5hYmxlID0gb3BlbmFibGU7XG4gICAgICBpZiAoIW9wZW5hYmxlKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy50b2dnbGVPcGVuID0gKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICB9O1xuICAgIHRoaXMuaXRlbUNsaWNrZWQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudG9nZ2xlU2VsZWN0ZWQoKTtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1BY3RpdmUuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy50b2dnbGVTZWxlY3RlZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgc2VsZWN0aW9uTW9kZSwgc2VsZWN0ZWQgfSA9IHRoaXM7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiIHx8IHNlbGVjdGlvbk1vZGUgPT09IFwic2luZ2xlXCIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9ICFzZWxlY3RlZDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHNlbGVjdGlvbk1vZGUgPT09IFwic2luZ2xlLXBlcnNpc3RcIikge1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY2l0ZUxpc3RJdGVtU2VsZWN0LmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlSXRlbUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgY29uc3QgeyBjb250YWluZXJFbCwgY29udGVudEVsLCBhY3Rpb25zU3RhcnRFbCwgYWN0aW9uc0VuZEVsLCBvcGVuLCBvcGVuYWJsZSB9ID0gdGhpcztcbiAgICAgIGNvbnN0IGNlbGxzID0gW2FjdGlvbnNTdGFydEVsLCBjb250ZW50RWwsIGFjdGlvbnNFbmRFbF0uZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gY2VsbHMuZmluZEluZGV4KChjZWxsKSA9PiBjb21wb3NlZFBhdGguaW5jbHVkZXMoY2VsbCkpO1xuICAgICAgaWYgKGtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0ZWQoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBpZiAoIW9wZW4gJiYgb3BlbmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQ2VsbChudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoY2VsbHNbMF0pIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNDZWxsKGNlbGxzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2VsbHNbY3VycmVudEluZGV4XSAmJiBjZWxsc1tuZXh0SW5kZXhdKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c0NlbGwoY2VsbHNbbmV4dEluZGV4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xuICAgICAgICAgIHRoaXMuZm9jdXNDZWxsKG51bGwpO1xuICAgICAgICAgIGlmIChvcGVuICYmIG9wZW5hYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEZvY3VzUHJldmlvdXNJdGVtLmVtaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY3VycmVudEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c0NlbGwobnVsbCk7XG4gICAgICAgICAgY29udGFpbmVyRWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjZWxsc1tjdXJyZW50SW5kZXhdICYmIGNlbGxzW3ByZXZJbmRleF0pIHtcbiAgICAgICAgICB0aGlzLmZvY3VzQ2VsbChjZWxsc1twcmV2SW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5mb2N1c0NlbGxOdWxsID0gKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c0NlbGwobnVsbCk7XG4gICAgfTtcbiAgICB0aGlzLmZvY3VzQ2VsbCA9IChmb2N1c0VsLCBzYXZlRm9jdXNJbmRleCA9IHRydWUpID0+IHtcbiAgICAgIGNvbnN0IHsgY29udGVudEVsLCBhY3Rpb25zU3RhcnRFbCwgYWN0aW9uc0VuZEVsLCBwYXJlbnRMaXN0RWwgfSA9IHRoaXM7XG4gICAgICBpZiAoc2F2ZUZvY3VzSW5kZXgpIHtcbiAgICAgICAgZm9jdXNNYXAuc2V0KHBhcmVudExpc3RFbCwgbnVsbCk7XG4gICAgICB9XG4gICAgICBbYWN0aW9uc1N0YXJ0RWwsIGNvbnRlbnRFbCwgYWN0aW9uc0VuZEVsXS5maWx0ZXIoQm9vbGVhbikuZm9yRWFjaCgodGFibGVDZWxsLCBjZWxsSW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGFiSW5kZXhBdHRyID0gXCJ0YWJpbmRleFwiO1xuICAgICAgICBpZiAodGFibGVDZWxsID09PSBmb2N1c0VsKSB7XG4gICAgICAgICAgdGFibGVDZWxsLnNldEF0dHJpYnV0ZSh0YWJJbmRleEF0dHIsIFwiMFwiKTtcbiAgICAgICAgICBzYXZlRm9jdXNJbmRleCAmJiBmb2N1c01hcC5zZXQocGFyZW50TGlzdEVsLCBjZWxsSW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRhYmxlQ2VsbC5yZW1vdmVBdHRyaWJ1dGUodGFiSW5kZXhBdHRyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBmb2N1c0VsPy5mb2N1cygpO1xuICAgIH07XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWV0YWRhdGEgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5zZXRTaXplID0gbnVsbDtcbiAgICB0aGlzLnNldFBvc2l0aW9uID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0aW9uQXBwZWFyYW5jZSA9IG51bGw7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGV2ZWwgPSBudWxsO1xuICAgIHRoaXMudmlzdWFsTGV2ZWwgPSBudWxsO1xuICAgIHRoaXMucGFyZW50TGlzdEVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub3BlbmFibGUgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0FjdGlvbnNTdGFydCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQWN0aW9uc0VuZCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQ3VzdG9tQ29udGVudCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQ29udGVudFN0YXJ0ID0gZmFsc2U7XG4gICAgdGhpcy5oYXNDb250ZW50RW5kID0gZmFsc2U7XG4gIH1cbiAgYWN0aXZlSGFuZGxlcihhY3RpdmUpIHtcbiAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgdGhpcy5mb2N1c0NlbGwobnVsbCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuICBoYW5kbGVTZWxlY3RlZENoYW5nZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbExpc3RJdGVtU2VsZWN0LmVtaXQoKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICB0aGlzLnBhcmVudExpc3RFbCA9IGVsLmNsb3Nlc3QobGlzdFNlbGVjdG9yKTtcbiAgICB0aGlzLmxldmVsID0gZ2V0RGVwdGgoZWwpICsgMTtcbiAgICB0aGlzLnZpc3VhbExldmVsID0gZ2V0RGVwdGgoZWwsIHRydWUpO1xuICAgIHRoaXMuc2V0U2VsZWN0aW9uRGVmYXVsdHMoKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIHVwZGF0ZUhvc3RJbnRlcmFjdGlvbih0aGlzLCBcIm1hbmFnZWRcIik7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCwgY29udGVudEVsLCBhY3Rpb25zU3RhcnRFbCwgYWN0aW9uc0VuZEVsLCBwYXJlbnRMaXN0RWwgfSA9IHRoaXM7XG4gICAgY29uc3QgZm9jdXNJbmRleCA9IGZvY3VzTWFwLmdldChwYXJlbnRMaXN0RWwpO1xuICAgIGlmICh0eXBlb2YgZm9jdXNJbmRleCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgY29uc3QgY2VsbHMgPSBbYWN0aW9uc1N0YXJ0RWwsIGNvbnRlbnRFbCwgYWN0aW9uc0VuZEVsXS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICBpZiAoY2VsbHNbZm9jdXNJbmRleF0pIHtcbiAgICAgICAgdGhpcy5mb2N1c0NlbGwoY2VsbHNbZm9jdXNJbmRleF0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lckVsPy5mb2N1cygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb250YWluZXJFbD8uZm9jdXMoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyU2VsZWN0ZWQoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCwgc2VsZWN0aW9uTW9kZSwgc2VsZWN0aW9uQXBwZWFyYW5jZSB9ID0gdGhpcztcbiAgICBpZiAoc2VsZWN0aW9uTW9kZSA9PT0gXCJub25lXCIgfHwgc2VsZWN0aW9uQXBwZWFyYW5jZSA9PT0gXCJib3JkZXJcIikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoaChcInRkXCIsIHsgY2xhc3M6IENTUyQyLnNlbGVjdGlvbkNvbnRhaW5lciwga2V5OiBcInNlbGVjdGlvbi1jb250YWluZXJcIiwgb25DbGljazogdGhpcy5pdGVtQ2xpY2tlZCB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogc2VsZWN0ZWRcbiAgICAgICAgPyBzZWxlY3Rpb25Nb2RlID09PSBcIm11bHRpcGxlXCJcbiAgICAgICAgICA/IElDT05TLnNlbGVjdGVkTXVsdGlwbGVcbiAgICAgICAgICA6IElDT05TLnNlbGVjdGVkU2luZ2xlXG4gICAgICAgIDogSUNPTlMudW5zZWxlY3RlZCwgc2NhbGU6IFwic1wiIH0pKSk7XG4gIH1cbiAgcmVuZGVyT3BlbigpIHtcbiAgICBjb25zdCB7IGVsLCBvcGVuLCBvcGVuYWJsZSwgcGFyZW50TGlzdEVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIoZWwpO1xuICAgIHJldHVybiBvcGVuYWJsZSA/IChoKFwidGRcIiwgeyBjbGFzczogQ1NTJDIub3BlbkNvbnRhaW5lciwga2V5OiBcIm9wZW4tY29udGFpbmVyXCIsIG9uQ2xpY2s6IHRoaXMudG9nZ2xlT3BlbiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogb3BlbiA/IElDT05TLm9wZW4gOiBkaXIgPT09IFwicnRsXCIgPyBJQ09OUy5jbG9zZWRSVEwgOiBJQ09OUy5jbG9zZWRMVFIsIHNjYWxlOiBcInNcIiB9KSkpIDogcGFyZW50TGlzdEVsPy5vcGVuYWJsZSA/IChoKFwidGRcIiwgeyBjbGFzczogQ1NTJDIub3BlbkNvbnRhaW5lciwga2V5OiBcIm9wZW4tY29udGFpbmVyXCIsIG9uQ2xpY2s6IHRoaXMuaXRlbUNsaWNrZWQgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IElDT05TLmJsYW5rLCBzY2FsZTogXCJzXCIgfSkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyQWN0aW9uc1N0YXJ0KCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGhhc0FjdGlvbnNTdGFydCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJ0ZFwiLCB7IFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgY2xhc3M6IENTUyQyLmFjdGlvbnNTdGFydCwgaGlkZGVuOiAhaGFzQWN0aW9uc1N0YXJ0LCBrZXk6IFwiYWN0aW9ucy1zdGFydC1jb250YWluZXJcIiwgcm9sZTogXCJncmlkY2VsbFwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuYWN0aW9uc1N0YXJ0RWwgPSBlbCkgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25zU3RhcnQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVBY3Rpb25zU3RhcnRTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVyQWN0aW9uc0VuZCgpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBoYXNBY3Rpb25zRW5kLCBjbG9zYWJsZSwgbWVzc2FnZXMgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwidGRcIiwgeyBcImFyaWEtbGFiZWxcIjogbGFiZWwsIGNsYXNzOiBDU1MkMi5hY3Rpb25zRW5kLCBoaWRkZW46ICEoaGFzQWN0aW9uc0VuZCB8fCBjbG9zYWJsZSksIGtleTogXCJhY3Rpb25zLWVuZC1jb250YWluZXJcIiwgcm9sZTogXCJncmlkY2VsbFwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuYWN0aW9uc0VuZEVsID0gZWwpIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYWN0aW9uc0VuZCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUFjdGlvbnNFbmRTbG90Q2hhbmdlIH0pLCBjbG9zYWJsZSA/IChoKFwiY2FsY2l0ZS1hY3Rpb25cIiwgeyBhcHBlYXJhbmNlOiBcInRyYW5zcGFyZW50XCIsIGljb246IElDT05TLmNsb3NlLCBrZXk6IFwiY2xvc2UtYWN0aW9uXCIsIGxhYmVsOiBtZXNzYWdlcy5jbG9zZSwgb25DbGljazogdGhpcy5jbG9zZUNsaWNrSGFuZGxlciwgdGV4dDogbWVzc2FnZXMuY2xvc2UgfSkpIDogbnVsbCkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnRTdGFydCgpIHtcbiAgICBjb25zdCB7IGhhc0NvbnRlbnRTdGFydCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIuY29udGVudFN0YXJ0LCBoaWRkZW46ICFoYXNDb250ZW50U3RhcnQgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5jb250ZW50U3RhcnQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVDb250ZW50U3RhcnRTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVyQ3VzdG9tQ29udGVudCgpIHtcbiAgICBjb25zdCB7IGhhc0N1c3RvbUNvbnRlbnQgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLmN1c3RvbUNvbnRlbnQsIGhpZGRlbjogIWhhc0N1c3RvbUNvbnRlbnQgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5jb250ZW50LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQ29udGVudFNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJDb250ZW50RW5kKCkge1xuICAgIGNvbnN0IHsgaGFzQ29udGVudEVuZCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIuY29udGVudEVuZCwgaGlkZGVuOiAhaGFzQ29udGVudEVuZCB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmNvbnRlbnRFbmQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVDb250ZW50RW5kU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnRQcm9wZXJ0aWVzKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGRlc2NyaXB0aW9uLCBoYXNDdXN0b21Db250ZW50IH0gPSB0aGlzO1xuICAgIHJldHVybiAhaGFzQ3VzdG9tQ29udGVudCAmJiAoISFsYWJlbCB8fCAhIWRlc2NyaXB0aW9uKSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLmNvbnRlbnQsIGtleTogXCJjb250ZW50XCIgfSwgbGFiZWwgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMi5sYWJlbCwga2V5OiBcImxhYmVsXCIgfSwgbGFiZWwpKSA6IG51bGwsIGRlc2NyaXB0aW9uID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIuZGVzY3JpcHRpb24sIGtleTogXCJkZXNjcmlwdGlvblwiIH0sIGRlc2NyaXB0aW9uKSkgOiBudWxsKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlckNvbnRlbnRDb250YWluZXIoKSB7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgbGFiZWwsIHNlbGVjdGlvbk1vZGUsIGhhc0N1c3RvbUNvbnRlbnQgfSA9IHRoaXM7XG4gICAgY29uc3QgaGFzQ2VudGVyQ29udGVudCA9IGhhc0N1c3RvbUNvbnRlbnQgfHwgISFsYWJlbCB8fCAhIWRlc2NyaXB0aW9uO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnRTdGFydCgpLFxuICAgICAgdGhpcy5yZW5kZXJDdXN0b21Db250ZW50KCksXG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnRQcm9wZXJ0aWVzKCksXG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnRFbmQoKVxuICAgIF07XG4gICAgcmV0dXJuIChoKFwidGRcIiwgeyBcImFyaWEtbGFiZWxcIjogbGFiZWwsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MkMi5jb250ZW50Q29udGFpbmVyXTogdHJ1ZSxcbiAgICAgICAgW0NTUyQyLmNvbnRlbnRDb250YWluZXJTZWxlY3RhYmxlXTogc2VsZWN0aW9uTW9kZSAhPT0gXCJub25lXCIsXG4gICAgICAgIFtDU1MkMi5jb250ZW50Q29udGFpbmVySGFzQ2VudGVyQ29udGVudF06IGhhc0NlbnRlckNvbnRlbnRcbiAgICAgIH0sIGtleTogXCJjb250ZW50LWNvbnRhaW5lclwiLCBvbkNsaWNrOiB0aGlzLml0ZW1DbGlja2VkLCByb2xlOiBcImdyaWRjZWxsXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5jb250ZW50RWwgPSBlbCkgfSwgY29udGVudCkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wZW5hYmxlLCBvcGVuLCBsZXZlbCwgc2V0UG9zaXRpb24sIHNldFNpemUsIGFjdGl2ZSwgbGFiZWwsIHNlbGVjdGVkLCBzZWxlY3Rpb25BcHBlYXJhbmNlLCBzZWxlY3Rpb25Nb2RlLCBjbG9zZWQgfSA9IHRoaXM7XG4gICAgY29uc3Qgc2hvd0JvcmRlciA9IHNlbGVjdGlvbk1vZGUgIT09IFwibm9uZVwiICYmIHNlbGVjdGlvbkFwcGVhcmFuY2UgPT09IFwiYm9yZGVyXCI7XG4gICAgY29uc3QgYm9yZGVyU2VsZWN0ZWQgPSBzaG93Qm9yZGVyICYmIHNlbGVjdGVkO1xuICAgIGNvbnN0IGJvcmRlclVuc2VsZWN0ZWQgPSBzaG93Qm9yZGVyICYmICFzZWxlY3RlZDtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcInRyXCIsIHsgXCJhcmlhLWV4cGFuZGVkXCI6IG9wZW5hYmxlID8gdG9BcmlhQm9vbGVhbihvcGVuKSA6IG51bGwsIFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgXCJhcmlhLWxldmVsXCI6IGxldmVsLCBcImFyaWEtcG9zaW5zZXRcIjogc2V0UG9zaXRpb24sIFwiYXJpYS1zZWxlY3RlZFwiOiB0b0FyaWFCb29sZWFuKHNlbGVjdGVkKSwgXCJhcmlhLXNldHNpemVcIjogc2V0U2l6ZSwgY2xhc3M6IHtcbiAgICAgICAgW0NTUyQyLmNvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1MkMi5jb250YWluZXJCb3JkZXJTZWxlY3RlZF06IGJvcmRlclNlbGVjdGVkLFxuICAgICAgICBbQ1NTJDIuY29udGFpbmVyQm9yZGVyVW5zZWxlY3RlZF06IGJvcmRlclVuc2VsZWN0ZWRcbiAgICAgIH0sIGhpZGRlbjogY2xvc2VkLCBvbkZvY3VzOiB0aGlzLmZvY3VzQ2VsbE51bGwsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVJdGVtS2V5RG93biwgcm9sZTogXCJyb3dcIiwgc3R5bGU6IHsgXCItLWNhbGNpdGUtbGlzdC1pdGVtLXNwYWNpbmctaW5kZW50LW11bHRpcGxpZXJcIjogYCR7dGhpcy52aXN1YWxMZXZlbH1gIH0sIHRhYkluZGV4OiBhY3RpdmUgPyAwIDogLTEsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5jb250YWluZXJFbCA9IGVsKSB9LCB0aGlzLnJlbmRlclNlbGVjdGVkKCksIHRoaXMucmVuZGVyT3BlbigpLCB0aGlzLnJlbmRlckFjdGlvbnNTdGFydCgpLCB0aGlzLnJlbmRlckNvbnRlbnRDb250YWluZXIoKSwgdGhpcy5yZW5kZXJBY3Rpb25zRW5kKCkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUyQyLm5lc3RlZENvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1MkMi5uZXN0ZWRDb250YWluZXJIaWRkZW5dOiBvcGVuYWJsZSAmJiAhb3BlblxuICAgICAgfSB9LCBoKFwic2xvdFwiLCB7IG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSB9KSkpKTtcbiAgfVxuICBzZXRTZWxlY3Rpb25EZWZhdWx0cygpIHtcbiAgICBjb25zdCB7IHBhcmVudExpc3RFbCwgc2VsZWN0aW9uTW9kZSwgc2VsZWN0aW9uQXBwZWFyYW5jZSB9ID0gdGhpcztcbiAgICBpZiAoIXBhcmVudExpc3RFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXNlbGVjdGlvbk1vZGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9IHBhcmVudExpc3RFbC5zZWxlY3Rpb25Nb2RlO1xuICAgIH1cbiAgICBpZiAoIXNlbGVjdGlvbkFwcGVhcmFuY2UpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uQXBwZWFyYW5jZSA9IHBhcmVudExpc3RFbC5zZWxlY3Rpb25BcHBlYXJhbmNlO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiYWN0aXZlXCI6IFtcImFjdGl2ZUhhbmRsZXJcIl0sXG4gICAgXCJzZWxlY3RlZFwiOiBbXCJoYW5kbGVTZWxlY3RlZENoYW5nZVwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxufTtcbkxpc3RJdGVtLnN0eWxlID0gbGlzdEl0ZW1Dc3M7XG5cbmNvbnN0IENTUyA9IHtcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBoZWFkaW5nOiBcImhlYWRpbmdcIlxufTtcblxuY29uc3QgbGlzdEl0ZW1Hcm91cENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7LS1jYWxjaXRlLWxpc3QtaXRlbS1zcGFjaW5nLWluZGVudDoxcmVtfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX0uY29udGFpbmVye21hcmdpbjowcHg7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIDAlO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO3BhZGRpbmc6MC43NXJlbTtmb250LWZhbWlseTp2YXIoLS1jYWxjaXRlLXNhbnMtZmFtaWx5KTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtYm9sZCk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5oZWFkaW5ne3BhZGRpbmctaW5saW5lLXN0YXJ0OmNhbGModmFyKC0tY2FsY2l0ZS1saXN0LWl0ZW0tc3BhY2luZy1pbmRlbnQpICogdmFyKC0tY2FsY2l0ZS1saXN0LWl0ZW0tc3BhY2luZy1pbmRlbnQtbXVsdGlwbGllcikpfTo6c2xvdHRlZChjYWxjaXRlLWxpc3QtaXRlbSl7bWFyZ2luLWJsb2NrLWVuZDoxcHg7LS10dy1zaGFkb3c6MCAxcHggMCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMXB4IDAgdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9OjpzbG90dGVkKGNhbGNpdGUtbGlzdC1pdGVtOmxhc3QtY2hpbGQpey0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9W2hpZGRlbl17ZGlzcGxheTpub25lfVwiO1xuXG5jb25zdCBMaXN0SXRlbUdyb3VwID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5oZWFkaW5nID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmlzdWFsTGV2ZWwgPSBudWxsO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICB0aGlzLnZpc3VhbExldmVsID0gZ2V0RGVwdGgoZWwsIHRydWUpO1xuICAgIGNvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGVhZGluZywgdmlzdWFsTGV2ZWwgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJ0clwiLCB7IGNsYXNzOiBDU1MuY29udGFpbmVyLCBzdHlsZTogeyBcIi0tY2FsY2l0ZS1saXN0LWl0ZW0tc3BhY2luZy1pbmRlbnQtbXVsdGlwbGllclwiOiBgJHt2aXN1YWxMZXZlbH1gIH0gfSwgaChcInRkXCIsIHsgY2xhc3M6IENTUy5oZWFkaW5nLCBjb2xTcGFuOiBNQVhfQ09MVU1OUyB9LCBoZWFkaW5nKSksIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxufTtcbkxpc3RJdGVtR3JvdXAuc3R5bGUgPSBsaXN0SXRlbUdyb3VwQ3NzO1xuXG5leHBvcnQgeyBMaXN0IGFzIGNhbGNpdGVfbGlzdCwgTGlzdEl0ZW0gYXMgY2FsY2l0ZV9saXN0X2l0ZW0sIExpc3RJdGVtR3JvdXAgYXMgY2FsY2l0ZV9saXN0X2l0ZW1fZ3JvdXAgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBnIGFzIGdldFVzZXJBZ2VudFN0cmluZyB9IGZyb20gJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5cbi8vIOKaoO+4jyBicm93c2VyLXNuaWZmaW5nIGlzIG5vdCBhIGJlc3QgcHJhY3RpY2UgYW5kIHNob3VsZCBiZSBhdm9pZGVkIOKaoO+4j1xuY29uc3QgaXNGaXJlZm94ID0gL2ZpcmVmb3gvaS50ZXN0KGdldFVzZXJBZ2VudFN0cmluZygpKTtcbmNvbnN0IGludGVyYWN0aXZlRWxlbWVudFRvUGFyZW50ID0gaXNGaXJlZm94XG4gID8gbmV3IFdlYWtNYXAoKVxuICA6IG51bGw7XG5mdW5jdGlvbiBpbnRlcmNlcHRlZENsaWNrKCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzO1xuICBpZiAoIWRpc2FibGVkKSB7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrLmNhbGwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgY29uc3QgaW50ZXJhY3RpdmVFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoaW50ZXJhY3RpdmVFbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBpbnRlcmFjdGl2ZUVsZW1lbnQ7XG4gIGlmIChkaXNhYmxlZCkge1xuICAgIC8vIHByZXZlbnQgY2xpY2sgZnJvbSBtb3ZpbmcgZm9jdXMgb24gaG9zdFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBpZiAoaXNGaXJlZm94ICYmICFpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5nZXQoZXZlbnQudGFyZ2V0KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZVxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGJsb2NrSW50ZXJhY3Rpb24oY29tcG9uZW50KTtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG4gIGlmICh0eXBlb2YgaG9zdElzVGFiYmFibGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBob3N0SXNUYWJiYWJsZS5jYWxsKGNvbXBvbmVudCkgPyBcIjBcIiA6IFwiLTFcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IHRydWUpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSBmYWxzZSkge1xuICAgIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgfVxuICBlbHNlIDtcbiAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIik7XG59XG5mdW5jdGlvbiBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZWwuY2xpY2sgPSBpbnRlcmNlcHRlZENsaWNrO1xuICBhZGRJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gYWRkSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkge1xuICByZXR1cm4gaW50ZXJhY3RpdmVFbGVtZW50VG9QYXJlbnQuZ2V0KGNvbXBvbmVudC5lbCk7XG59XG5mdW5jdGlvbiByZXN0b3JlSW50ZXJhY3Rpb24oY29tcG9uZW50KSB7XG4gIGRlbGV0ZSBjb21wb25lbnQuZWwuY2xpY2s7IC8vIGZhbGxiYWNrIG9uIEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGlja1xuICByZW1vdmVJbnRlcmFjdGlvbkxpc3RlbmVycyhpc0ZpcmVmb3ggPyBnZXRQYXJlbnRFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQuZWwpO1xufVxuZnVuY3Rpb24gcmVtb3ZlSW50ZXJhY3Rpb25MaXN0ZW5lcnMoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICAvLyB0aGlzIHBhdGggaXMgb25seSBhcHBsaWNhYmxlIHRvIEZpcmVmb3hcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBoZWxwcyBkaXNhYmxlIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFjb21wb25lbnQuZGlzYWJsZWQgfHwgIWlzRmlyZWZveCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwYXJlbnQgPSBjb21wb25lbnQuZWwucGFyZW50RWxlbWVudCB8fCBjb21wb25lbnQuZWw7IC8qIGFzc3VtZSBlbGVtZW50IGlzIGhvc3QgaWYgaXQgaGFzIG5vIHBhcmVudCB3aGVuIGNvbm5lY3RlZCAqL1xuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5zZXQoY29tcG9uZW50LmVsLCBwYXJlbnQpO1xuICBibG9ja0ludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSByZXN0b3JlcyBpbnRlcmFjdGl2aXR5IHRvIGRpc2FibGVkIGNvbXBvbmVudHMgY29uc2lzdGVudGx5IGluIEZpcmVmb3guXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2AgYW5kIGlzIG9ubHkgbmVlZGVkIGZvciBGaXJlZm94IGFzIGl0IGRvZXMgbm90IGNhbGwgY2FwdHVyZSBldmVudCBsaXN0ZW5lcnMgYmVmb3JlIG5vbi1jYXB0dXJlIG9uZXMgKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzMxNTA0KS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZShjb21wb25lbnQpIHtcbiAgaWYgKCFpc0ZpcmVmb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWx3YXlzIHJlbW92ZSBvbiBkaXNjb25uZWN0IGFzIHJlbmRlciBvciBjb25uZWN0IHdpbGwgcmVzdG9yZSBpdFxuICBpbnRlcmFjdGl2ZUVsZW1lbnRUb1BhcmVudC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgcmVzdG9yZUludGVyYWN0aW9uKGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RJbnRlcmFjdGl2ZSBhcyBjLCBkaXNjb25uZWN0SW50ZXJhY3RpdmUgYXMgZCwgdXBkYXRlSG9zdEludGVyYWN0aW9uIGFzIHUgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBzdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyBcInNldFVwTG9hZGFibGVDb21wb25lbnRcIiBhbmQgXCJzZXRDb21wb25lbnRMb2FkZWRcIiB0byBiZSBjYWxsZWQgZmlyc3QuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHByb21pc2VNYXAuZ2V0KGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IHNldENvbXBvbmVudExvYWRlZCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYywgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBzIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=