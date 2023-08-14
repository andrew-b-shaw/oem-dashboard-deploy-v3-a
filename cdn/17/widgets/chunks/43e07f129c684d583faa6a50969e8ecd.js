"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-list_3_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-list_3.entry.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-list_3.entry.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_list": () => (/* binding */ List),
/* harmony export */   "calcite_list_item": () => (/* binding */ ListItem),
/* harmony export */   "calcite_list_item_group": () => (/* binding */ ListItemGroup)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debounce-b9072422.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-b9072422.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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

const listCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{position:relative}.table-container{position:relative;z-index:var(--calcite-app-z-index);box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.table-container *{box-sizing:border-box}.table{inline-size:100%}::slotted(calcite-list-item){margin-block-end:1px;--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}::slotted(calcite-list-item:last-child){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-app-z-index-sticky)}calcite-filter{margin-block-end:1px}";

const listItemSelector = "calcite-list-item";
const parentSelector = "calcite-list-item-group, calcite-list-item";
const List = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteListChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListChange", 6);
    this.calciteListFilter = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListFilter", 6);
    this.listItems = [];
    this.enabledListItems = [];
    this.mutationObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_3__.c)("mutation", () => this.updateListItems());
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
    this.updateListItems = (0,_debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_5__.d)((emit = false) => {
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
    listItems.forEach((listItem) => {
      if (selectionMode === "single" || selectionMode === "single-persist") {
        listItem.selected = listItem === target;
      }
    });
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
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }
  componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
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
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    this.enabledListItems.find((listItem) => listItem.active)?.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { loading, label, disabled, dataForFilter, filterEnabled, filterPlaceholder, filterText } = this;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$1.container }, loading ? (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-scrim", { class: CSS$1.scrim, loading: loading }) : null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("table", { "aria-busy": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(loading), "aria-label": label || "", class: CSS$1.table, onKeyDown: this.handleListKeydown, role: "treegrid" }, filterEnabled ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("thead", null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("tr", { class: { [CSS$1.sticky]: true } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("th", { colSpan: MAX_COLUMNS }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-filter", { "aria-label": filterPlaceholder, disabled: loading || disabled, items: dataForFilter, onCalciteFilterChange: this.handleFilter, placeholder: filterPlaceholder, value: filterText,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.filterEl = el) }))))) : null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("tbody", { class: CSS$1.tableContainer }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: this.handleDefaultSlotChange })))));
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
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "filterEnabled": ["handleFilterEnabledChange"],
    "selectionMode": ["handleSelectionAppearanceChange"],
    "selectionAppearance": ["handleSelectionAppearanceChange"]
  }; }
};
List.style = listCss;

const listItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-ui-brand);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2)}.container--border-selected{border-inline-start:4px solid var(--calcite-ui-brand)}.container--border-unselected{border-inline-start:4px solid transparent}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{z-index:var(--calcite-app-z-index-sticky);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand))}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-list-item-icon-color)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-end ::slotted(calcite-action){align-self:stretch;color:inherit}::slotted(calcite-list-item){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}[hidden]{display:none}";

const focusMap = new Map();
const listSelector = "calcite-list";
const ListItem = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteListItemSelect = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListItemSelect", 6);
    this.calciteListItemClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteListItemClose", 6);
    this.calciteInternalListItemSelect = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalListItemSelect", 6);
    this.calciteInternalListItemActive = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalListItemActive", 6);
    this.calciteInternalFocusPreviousItem = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalFocusPreviousItem", 6);
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
      this.hasCustomContent = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
    };
    this.handleActionsStartSlotChange = (event) => {
      this.hasActionsStart = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
    };
    this.handleActionsEndSlotChange = (event) => {
      this.hasActionsEnd = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
    };
    this.handleContentStartSlotChange = (event) => {
      this.hasContentStart = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
    };
    this.handleContentEndSlotChange = (event) => {
      this.hasContentEnd = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
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
  handleSelectedChange(value) {
    if (value) {
      this.calciteInternalListItemSelect.emit();
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__.u)(this, this.effectiveLocale);
  }
  connectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    const { el } = this;
    this.parentListEl = el.closest(listSelector);
    this.level = getDepth(el) + 1;
    this.visualLevel = getDepth(el, true);
    this.setSelectionDefaults();
  }
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_2__.u)(this, "managed");
  }
  disconnectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
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
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("td", { class: CSS$2.selectionContainer, key: "selection-container", onClick: this.itemClicked }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: selected
        ? selectionMode === "multiple"
          ? ICONS.selectedMultiple
          : ICONS.selectedSingle
        : ICONS.unselected, scale: "s" })));
  }
  renderOpen() {
    const { el, open, openable, parentListEl } = this;
    const dir = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.b)(el);
    return openable ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("td", { class: CSS$2.openContainer, key: "open-container", onClick: this.toggleOpen }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: open ? ICONS.open : dir === "rtl" ? ICONS.closedRTL : ICONS.closedLTR, scale: "s" }))) : parentListEl?.openable ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("td", { class: CSS$2.openContainer, key: "open-container", onClick: this.itemClicked }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: ICONS.blank, scale: "s" }))) : null;
  }
  renderActionsStart() {
    const { label, hasActionsStart } = this;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("td", { "aria-label": label, class: CSS$2.actionsStart, hidden: !hasActionsStart, key: "actions-start-container", role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.actionsStartEl = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.actionsStart, onSlotchange: this.handleActionsStartSlotChange })));
  }
  renderActionsEnd() {
    const { label, hasActionsEnd, closable, messages } = this;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("td", { "aria-label": label, class: CSS$2.actionsEnd, hidden: !(hasActionsEnd || closable), key: "actions-end-container", role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.actionsEndEl = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }), closable ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action", { appearance: "transparent", icon: ICONS.close, key: "close-action", label: messages.close, onClick: this.closeClickHandler, text: messages.close })) : null));
  }
  renderContentStart() {
    const { hasContentStart } = this;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.contentStart, hidden: !hasContentStart }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.contentStart, onSlotchange: this.handleContentStartSlotChange })));
  }
  renderCustomContent() {
    const { hasCustomContent } = this;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.customContent, hidden: !hasCustomContent }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.content, onSlotchange: this.handleContentSlotChange })));
  }
  renderContentEnd() {
    const { hasContentEnd } = this;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.contentEnd, hidden: !hasContentEnd }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.contentEnd, onSlotchange: this.handleContentEndSlotChange })));
  }
  renderContentProperties() {
    const { label, description, hasCustomContent } = this;
    return !hasCustomContent && (!!label || !!description) ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.content, key: "content" }, label ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.label, key: "label" }, label)) : null, description ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.description, key: "description" }, description)) : null)) : null;
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
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("td", { "aria-label": label, class: {
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
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("tr", { "aria-expanded": openable ? (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(open) : null, "aria-label": label, "aria-level": level, "aria-posinset": setPosition, "aria-selected": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(selected), "aria-setsize": setSize, class: {
        [CSS$2.container]: true,
        [CSS$2.containerBorderSelected]: borderSelected,
        [CSS$2.containerBorderUnselected]: borderUnselected
      }, hidden: closed, onFocus: this.focusCellNull, onKeyDown: this.handleItemKeyDown, role: "row", style: { "--calcite-list-item-spacing-indent-multiplier": `${this.visualLevel}` }, tabIndex: active ? 0 : -1,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.containerEl = el) }, this.renderSelected(), this.renderOpen(), this.renderActionsStart(), this.renderContentContainer(), this.renderActionsEnd()), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS$2.nestedContainer]: true,
        [CSS$2.nestedContainerHidden]: openable && !open
      } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }))));
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
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
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
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { heading, visualLevel } = this;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("tr", { class: CSS.container, style: { "--calcite-list-item-spacing-indent-multiplier": `${visualLevel}` } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("td", { class: CSS.heading, colSpan: MAX_COLUMNS }, heading)), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
ListItemGroup.style = listItemGroupCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ updateHostInteraction)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function interceptedClick() {
  const { disabled } = this;
  if (!disabled) {
    HTMLElement.prototype.click.call(this);
  }
}
function onPointerDown(event) {
  // prevent click from moving focus on host
  event.preventDefault();
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
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
    component.el.click = interceptedClick;
    component.el.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
    nonBubblingWhenDisabledMouseEvents.forEach((event) => component.el.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
    return;
  }
  component.el.click = HTMLElement.prototype.click;
  component.el.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => component.el.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ setComponentLoaded),
/* harmony export */   "c": () => (/* binding */ componentLoaded),
/* harmony export */   "s": () => (/* binding */ setUpLoadableComponent)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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

/***/ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectMessages),
/* harmony export */   "d": () => (/* binding */ disconnectMessages),
/* harmony export */   "s": () => (/* binding */ setUpMessages),
/* harmony export */   "u": () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.g)(`./assets/${component}/t9n/messages_${lang}.json`))
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
  return getMessageBundle((0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__.g)(lang, "t9n"), componentName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNDNlMDdmMTI5YzY4NGQ1ODNmYWE2YTUwOTY5ZThlY2QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ0M7QUFDdkM7QUFDVDtBQUNzRDtBQUM3RDtBQUNnQztBQUNvQztBQUMvRjtBQUNLO0FBQ047O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGVBQWU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsTUFBTSxjQUFjLHlHQUF5RyxVQUFVLFdBQVcsa0JBQWtCLGlCQUFpQixrQkFBa0IsbUNBQW1DLHNCQUFzQixhQUFhLGlCQUFpQixzQkFBc0IsNkJBQTZCLG1CQUFtQixzQkFBc0IsT0FBTyxpQkFBaUIsNkJBQTZCLHFCQUFxQiwrQ0FBK0MsbURBQW1ELHVHQUF1Ryx3Q0FBd0Msc0JBQXNCLDhCQUE4Qix1R0FBdUcsWUFBWSxnQkFBZ0Isc0JBQXNCLDBDQUEwQyxlQUFlLHFCQUFxQjs7QUFFbHpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBZ0I7QUFDcEIsNkJBQTZCLHFEQUFXO0FBQ3hDLDZCQUE2QixxREFBVztBQUN4QztBQUNBO0FBQ0EsNEJBQTRCLHlEQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxzQ0FBc0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsNkNBQTZDO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1QkFBdUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSwyQkFBMkIsd0RBQVE7QUFDbkMsY0FBYyxxQ0FBcUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJCQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGdDQUFnQztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFzQjtBQUMxQjtBQUNBO0FBQ0EsSUFBSSwyREFBcUI7QUFDekI7QUFDQTtBQUNBLElBQUksd0RBQWtCO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsd0RBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0ZBQXdGO0FBQ3BHLFlBQVkscURBQUMsVUFBVSx3QkFBd0IsWUFBWSxxREFBQyxvQkFBb0Isc0NBQXNDLFVBQVUscURBQUMsWUFBWSxhQUFhLG1EQUFhLCtHQUErRyxtQkFBbUIscURBQUMsZ0JBQWdCLHFEQUFDLFNBQVMsU0FBUyx3QkFBd0IsRUFBRSxxREFBQyxTQUFTLHNCQUFzQixFQUFFLHFEQUFDLHFCQUFxQjtBQUMvWjtBQUNBLHlDQUF5QyxjQUFjLHFEQUFDLFlBQVksNkJBQTZCLEVBQUUscURBQUMsV0FBVyw0Q0FBNEM7QUFDM0o7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsYUFBYSxPQUFPLHFEQUFVO0FBQzlCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGFBQWEsc0JBQXNCLHVEQUF1RCx3Q0FBd0MseUdBQXlHLFVBQVUsV0FBVyxzQkFBc0IsYUFBYSxZQUFZLGdEQUFnRCx1Q0FBdUMsd0hBQXdILGFBQWEsc0JBQXNCLGlCQUFpQixlQUFlLGdEQUFnRCw0QkFBNEIsc0RBQXNELDhCQUE4QiwwQ0FBMEMsa0JBQWtCLGFBQWEsc0JBQXNCLGdEQUFnRCwwQkFBMEIsYUFBYSxtQkFBbUIsYUFBYSxjQUFjLG9CQUFvQixZQUFZLHVDQUF1Qyw4Q0FBOEMsK0JBQStCLE1BQU0sMEJBQTBCLGtCQUFrQiwwQ0FBMEMseUVBQXlFLHlCQUF5QixhQUFhLGNBQWMsc0JBQXNCLHVCQUF1Qix1QkFBdUIscUJBQXFCLHNDQUFzQyxrQkFBa0Isb0JBQW9CLHVDQUF1QyxzQ0FBc0MsOENBQThDLHFCQUFxQixzQkFBc0IsMENBQTBDLFdBQVcsc0JBQXNCLE9BQU8sK0JBQStCLGFBQWEsNEJBQTRCLCtCQUErQixlQUFlLDJCQUEyQixhQUFhLHlCQUF5Qiw0QkFBNEIsY0FBYywwR0FBMEcsY0FBYyxxQkFBcUIsYUFBYSx1QkFBdUIsMENBQTBDLDZGQUE2RixhQUFhLG1CQUFtQixxQ0FBcUMsZUFBZSw0RUFBNEUsc0JBQXNCLGtCQUFrQixnRkFBZ0YsbUJBQW1CLGNBQWMsNkJBQTZCLGlCQUFpQiw2QkFBNkIsbUJBQW1CLHdDQUF3QyxTQUFTLGFBQWE7O0FBRXppSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWdCO0FBQ3BCLGlDQUFpQyxxREFBVztBQUM1QyxnQ0FBZ0MscURBQVc7QUFDM0MseUNBQXlDLHFEQUFXO0FBQ3BELHlDQUF5QyxxREFBVztBQUNwRCw0Q0FBNEMscURBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbURBQTRCO0FBQzFEO0FBQ0E7QUFDQSw2QkFBNkIsbURBQTRCO0FBQ3pEO0FBQ0E7QUFDQSwyQkFBMkIsbURBQTRCO0FBQ3ZEO0FBQ0E7QUFDQSw2QkFBNkIsbURBQTRCO0FBQ3pEO0FBQ0E7QUFDQSwyQkFBMkIsbURBQTRCO0FBQ3ZEO0FBQ0E7QUFDQSxjQUFjLGVBQWU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBCQUEwQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQSxjQUFjLHVFQUF1RTtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx3REFBd0Q7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFjO0FBQ2xCO0FBQ0E7QUFDQSxJQUFJLHNEQUFnQjtBQUNwQixJQUFJLG1EQUFlO0FBQ25CLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFzQjtBQUMxQixVQUFVLG1EQUFhO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJLHdEQUFrQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSwyREFBcUI7QUFDekI7QUFDQTtBQUNBLElBQUksc0RBQW1CO0FBQ3ZCLElBQUksbURBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdEQUFlO0FBQ3pCLFlBQVkscUVBQXFFO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrQ0FBK0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBQyxTQUFTLHdGQUF3RixFQUFFLHFEQUFDLG1CQUFtQjtBQUNwSTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DLGdCQUFnQixtREFBYTtBQUM3Qix1QkFBdUIscURBQUMsU0FBUyw2RUFBNkUsRUFBRSxxREFBQyxtQkFBbUIseUZBQXlGLGdDQUFnQyxxREFBQyxTQUFTLDhFQUE4RSxFQUFFLHFEQUFDLG1CQUFtQiwrQkFBK0I7QUFDMVk7QUFDQTtBQUNBLFlBQVkseUJBQXlCO0FBQ3JDLFlBQVkscURBQUMsU0FBUztBQUN0QjtBQUNBLCtDQUErQyxFQUFFLHFEQUFDLFdBQVcsMkVBQTJFO0FBQ3hJO0FBQ0E7QUFDQSxZQUFZLDJDQUEyQztBQUN2RCxZQUFZLHFEQUFDLFNBQVM7QUFDdEI7QUFDQSw2Q0FBNkMsRUFBRSxxREFBQyxXQUFXLHVFQUF1RSxlQUFlLHFEQUFDLHFCQUFxQixpSkFBaUo7QUFDeFQ7QUFDQTtBQUNBLFlBQVksa0JBQWtCO0FBQzlCLFlBQVkscURBQUMsVUFBVSxxREFBcUQsRUFBRSxxREFBQyxXQUFXLDJFQUEyRTtBQUNySztBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0IsWUFBWSxxREFBQyxVQUFVLHVEQUF1RCxFQUFFLHFEQUFDLFdBQVcsaUVBQWlFO0FBQzdKO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QixZQUFZLHFEQUFDLFVBQVUsaURBQWlELEVBQUUscURBQUMsV0FBVyx1RUFBdUU7QUFDN0o7QUFDQTtBQUNBLFlBQVksdUNBQXVDO0FBQ25ELDhEQUE4RCxxREFBQyxVQUFVLHNDQUFzQyxXQUFXLHFEQUFDLFVBQVUsa0NBQWtDLGlDQUFpQyxxREFBQyxVQUFVLDhDQUE4QztBQUNqUTtBQUNBO0FBQ0EsWUFBWSxzREFBc0Q7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFDLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSxZQUFZLG1IQUFtSDtBQUMvSDtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFDLENBQUMsaURBQUksUUFBUSxxREFBQyxTQUFTLDRCQUE0QixtREFBYSx3R0FBd0csbURBQWE7QUFDbE07QUFDQTtBQUNBO0FBQ0EsT0FBTyx3R0FBd0csb0RBQW9ELGlCQUFpQixHQUFHO0FBQ3ZMO0FBQ0EsNENBQTRDLGdJQUFnSSxxREFBQyxVQUFVO0FBQ3ZMO0FBQ0E7QUFDQSxTQUFTLEVBQUUscURBQUMsV0FBVyw0Q0FBNEM7QUFDbkU7QUFDQTtBQUNBLFlBQVksbURBQW1EO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLGFBQWEsT0FBTyxxREFBVTtBQUM5QiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsa0JBQWtCLGVBQWUseUJBQXlCLGlCQUFpQiwyQ0FBMkMsbURBQW1ELG9CQUFvQixNQUFNLGFBQWEsc0JBQXNCLGdEQUFnRCx3Q0FBd0MseUdBQXlHLFVBQVUsV0FBVyxXQUFXLGFBQWEsWUFBWSxnREFBZ0QsZ0JBQWdCLHVDQUF1QyxzQ0FBc0MsNENBQTRDLCtCQUErQixTQUFTLHdIQUF3SCw2QkFBNkIscUJBQXFCLCtDQUErQyxtREFBbUQsdUdBQXVHLHdDQUF3QyxzQkFBc0IsOEJBQThCLHVHQUF1RyxTQUFTLGFBQWE7O0FBRTM3RjtBQUNBO0FBQ0EsSUFBSSxxREFBZ0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVCQUF1QjtBQUNuQyxZQUFZLHFEQUFDLENBQUMsaURBQUksUUFBUSxxREFBQyxTQUFTLCtCQUErQixvREFBb0QsWUFBWSxLQUFLLEVBQUUscURBQUMsU0FBUywwQ0FBMEMsYUFBYSxxREFBQztBQUM1TTtBQUNBLGFBQWEsT0FBTyxxREFBVTtBQUM5QjtBQUNBOztBQUV5Rzs7Ozs7Ozs7Ozs7Ozs7O0FDbnRCekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxXQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRHRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDd0Q7QUFDTzs7QUFFL0Q7QUFDQTtBQUNBLGlCQUFpQixVQUFVLEdBQUcsS0FBSztBQUNuQztBQUNBO0FBQ0E7QUFDQSxpREFBaUQscURBQVksYUFBYSxVQUFVLGdCQUFnQixLQUFLO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQUs7QUFDZjtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFrQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtbGlzdF8zLmVudHJ5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2ludGVyYWN0aXZlLTgyZTU0N2VkLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2xvYWRhYmxlLWFmMTQ2ZmQ1LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3Q5bi1hM2UxMjQyMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBhIGFzIGdldEVsZW1lbnQsIEggYXMgSG9zdCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgdCBhcyB0b0FyaWFCb29sZWFuLCBkIGFzIHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQsIGIgYXMgZ2V0RWxlbWVudERpciB9IGZyb20gJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZS04MmU1NDdlZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtYzIwZWMyZGQuanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLWFmMTQ2ZmQ1LmpzJztcbmltcG9ydCB7IGQgYXMgZGVib3VuY2UgfSBmcm9tICcuL2RlYm91bmNlLWI5MDcyNDIyLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUtYjNjNDRkZGEuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1hM2UxMjQyMi5qcyc7XG5pbXBvcnQgJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLWQwOGE2NzM3LmpzJztcbmltcG9ydCAnLi9rZXktMzM4OWQ4NzAuanMnO1xuXG5jb25zdCBDU1MkMiA9IHtcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBjb250YWluZXJCb3JkZXJTZWxlY3RlZDogXCJjb250YWluZXItLWJvcmRlci1zZWxlY3RlZFwiLFxuICBjb250YWluZXJCb3JkZXJVbnNlbGVjdGVkOiBcImNvbnRhaW5lci0tYm9yZGVyLXVuc2VsZWN0ZWRcIixcbiAgY29udGVudENvbnRhaW5lcjogXCJjb250ZW50LWNvbnRhaW5lclwiLFxuICBjb250ZW50Q29udGFpbmVyU2VsZWN0YWJsZTogXCJjb250ZW50LWNvbnRhaW5lci0tc2VsZWN0YWJsZVwiLFxuICBjb250ZW50Q29udGFpbmVySGFzQ2VudGVyQ29udGVudDogXCJjb250ZW50LWNvbnRhaW5lci0taGFzLWNlbnRlci1jb250ZW50XCIsXG4gIG5lc3RlZENvbnRhaW5lcjogXCJuZXN0ZWQtY29udGFpbmVyXCIsXG4gIG5lc3RlZENvbnRhaW5lckhpZGRlbjogXCJuZXN0ZWQtY29udGFpbmVyLS1oaWRkZW5cIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGN1c3RvbUNvbnRlbnQ6IFwiY3VzdG9tLWNvbnRlbnRcIixcbiAgYWN0aW9uc1N0YXJ0OiBcImFjdGlvbnMtc3RhcnRcIixcbiAgY29udGVudFN0YXJ0OiBcImNvbnRlbnQtc3RhcnRcIixcbiAgbGFiZWw6IFwibGFiZWxcIixcbiAgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb25cIixcbiAgY29udGVudEVuZDogXCJjb250ZW50LWVuZFwiLFxuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG4gIHNlbGVjdGlvbkNvbnRhaW5lcjogXCJzZWxlY3Rpb24tY29udGFpbmVyXCIsXG4gIG9wZW5Db250YWluZXI6IFwib3Blbi1jb250YWluZXJcIlxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25zU3RhcnQ6IFwiYWN0aW9ucy1zdGFydFwiLFxuICBjb250ZW50U3RhcnQ6IFwiY29udGVudC1zdGFydFwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgY29udGVudEVuZDogXCJjb250ZW50LWVuZFwiLFxuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCJcbn07XG5jb25zdCBNQVhfQ09MVU1OUyA9IDU7XG5jb25zdCBJQ09OUyA9IHtcbiAgc2VsZWN0ZWRNdWx0aXBsZTogXCJjaGVjay1jaXJjbGUtZlwiLFxuICBzZWxlY3RlZFNpbmdsZTogXCJjaXJjbGUtZlwiLFxuICB1bnNlbGVjdGVkOiBcImJsYW5rXCIsXG4gIGNsb3NlZExUUjogXCJjYXJldC1yaWdodFwiLFxuICBjbG9zZWRSVEw6IFwiY2FyZXQtbGVmdFwiLFxuICBvcGVuOiBcImNhcmV0LWRvd25cIixcbiAgYmxhbms6IFwiYmxhbmtcIixcbiAgY2xvc2U6IFwieFwiXG59O1xuXG5jb25zdCBsaXN0SXRlbUdyb3VwU2VsZWN0b3IgPSBcImNhbGNpdGUtbGlzdC1pdGVtLWdyb3VwXCI7XG5jb25zdCBsaXN0SXRlbVNlbGVjdG9yJDEgPSBcImNhbGNpdGUtbGlzdC1pdGVtXCI7XG5mdW5jdGlvbiBnZXRMaXN0SXRlbUNoaWxkcmVuKGV2ZW50KSB7XG4gIGNvbnN0IGFzc2lnbmVkRWxlbWVudHMgPSBldmVudC50YXJnZXQuYXNzaWduZWRFbGVtZW50cyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gIGNvbnN0IGxpc3RJdGVtR3JvdXBDaGlsZHJlbiA9IGFzc2lnbmVkRWxlbWVudHMuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMobGlzdEl0ZW1Hcm91cFNlbGVjdG9yKSlcbiAgICAubWFwKChncm91cCkgPT4gQXJyYXkuZnJvbShncm91cC5xdWVyeVNlbGVjdG9yQWxsKGxpc3RJdGVtU2VsZWN0b3IkMSkpKVxuICAgIC5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4gWy4uLnByZXZpb3VzVmFsdWUsIC4uLmN1cnJlbnRWYWx1ZV0sIFtdKTtcbiAgY29uc3QgbGlzdEl0ZW1DaGlsZHJlbiA9IGFzc2lnbmVkRWxlbWVudHMuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMobGlzdEl0ZW1TZWxlY3RvciQxKSk7XG4gIHJldHVybiBbLi4ubGlzdEl0ZW1Hcm91cENoaWxkcmVuLCAuLi5saXN0SXRlbUNoaWxkcmVuXTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUxpc3RJdGVtQ2hpbGRyZW4obGlzdEl0ZW1DaGlsZHJlbikge1xuICBsaXN0SXRlbUNoaWxkcmVuLmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgbGlzdEl0ZW0uc2V0UG9zaXRpb24gPSBsaXN0SXRlbUNoaWxkcmVuLmluZGV4T2YobGlzdEl0ZW0pICsgMTtcbiAgICBsaXN0SXRlbS5zZXRTaXplID0gbGlzdEl0ZW1DaGlsZHJlbi5sZW5ndGg7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0RGVwdGgoZWxlbWVudCwgaW5jbHVkZUdyb3VwID0gZmFsc2UpIHtcbiAgY29uc3QgZXhwcmVzc2lvbiA9IGluY2x1ZGVHcm91cFxuICAgID8gXCJhbmNlc3Rvcjo6Y2FsY2l0ZS1saXN0LWl0ZW0gfCBhbmNlc3Rvcjo6Y2FsY2l0ZS1saXN0LWl0ZW0tZ3JvdXBcIlxuICAgIDogXCJhbmNlc3Rvcjo6Y2FsY2l0ZS1saXN0LWl0ZW1cIjtcbiAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZXZhbHVhdGUoZXhwcmVzc2lvbiwgZWxlbWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuVU5PUkRFUkVEX05PREVfU05BUFNIT1RfVFlQRSwgbnVsbCk7XG4gIHJldHVybiByZXN1bHQuc25hcHNob3RMZW5ndGg7XG59XG5cbmNvbnN0IENTUyQxID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIHRhYmxlOiBcInRhYmxlXCIsXG4gIHNjcmltOiBcInNjcmltXCIsXG4gIHRhYmxlQ29udGFpbmVyOiBcInRhYmxlLWNvbnRhaW5lclwiLFxuICBzdGlja3k6IFwic3RpY2t5LXBvc1wiXG59O1xuY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gMDtcblxuY29uc3QgbGlzdENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e2Rpc3BsYXk6YmxvY2t9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfS5jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmV9LnRhYmxlLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0udGFibGUtY29udGFpbmVyICp7Ym94LXNpemluZzpib3JkZXItYm94fS50YWJsZXtpbmxpbmUtc2l6ZToxMDAlfTo6c2xvdHRlZChjYWxjaXRlLWxpc3QtaXRlbSl7bWFyZ2luLWJsb2NrLWVuZDoxcHg7LS10dy1zaGFkb3c6MCAxcHggMCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMXB4IDAgdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9OjpzbG90dGVkKGNhbGNpdGUtbGlzdC1pdGVtOmxhc3QtY2hpbGQpey0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9LnN0aWNreS1wb3N7cG9zaXRpb246c3RpY2t5O2luc2V0LWJsb2NrLXN0YXJ0OjBweDt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtc3RpY2t5KX1jYWxjaXRlLWZpbHRlcnttYXJnaW4tYmxvY2stZW5kOjFweH1cIjtcblxuY29uc3QgbGlzdEl0ZW1TZWxlY3RvciA9IFwiY2FsY2l0ZS1saXN0LWl0ZW1cIjtcbmNvbnN0IHBhcmVudFNlbGVjdG9yID0gXCJjYWxjaXRlLWxpc3QtaXRlbS1ncm91cCwgY2FsY2l0ZS1saXN0LWl0ZW1cIjtcbmNvbnN0IExpc3QgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0Q2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RGaWx0ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0RmlsdGVyXCIsIDYpO1xuICAgIHRoaXMubGlzdEl0ZW1zID0gW107XG4gICAgdGhpcy5lbmFibGVkTGlzdEl0ZW1zID0gW107XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB0aGlzLnVwZGF0ZUxpc3RJdGVtcygpKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB1cGRhdGVMaXN0SXRlbUNoaWxkcmVuKGdldExpc3RJdGVtQ2hpbGRyZW4oZXZlbnQpKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0QWN0aXZlTGlzdEl0ZW0gPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVuYWJsZWRMaXN0SXRlbXMgfSA9IHRoaXM7XG4gICAgICBpZiAoIWVuYWJsZWRMaXN0SXRlbXMuc29tZSgoaXRlbSkgPT4gaXRlbS5hY3RpdmUpKSB7XG4gICAgICAgIGlmIChlbmFibGVkTGlzdEl0ZW1zWzBdKSB7XG4gICAgICAgICAgZW5hYmxlZExpc3RJdGVtc1swXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSXRlbXMgPSAoZW1pdCA9IGZhbHNlKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSB0aGlzLmVuYWJsZWRMaXN0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNlbGVjdGVkKTtcbiAgICAgIGlmIChlbWl0KSB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUxpc3RDaGFuZ2UuZW1pdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJlZEl0ZW1zID0gKGVtaXQgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3QgeyBsaXN0SXRlbXMsIGZpbHRlcmVkRGF0YSwgZmlsdGVyVGV4dCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGZpbHRlcmVkRGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpO1xuICAgICAgY29uc3QgbGFzdERlc2NlbmRhbnRJdGVtcyA9IGxpc3RJdGVtcz8uZmlsdGVyKChsaXN0SXRlbSkgPT4gbGlzdEl0ZW1zLmV2ZXJ5KChsaSkgPT4gbGkgPT09IGxpc3RJdGVtIHx8ICFsaXN0SXRlbS5jb250YWlucyhsaSkpKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBsaXN0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiAhZmlsdGVyVGV4dCB8fCB2YWx1ZXMuaW5jbHVkZXMoaXRlbS52YWx1ZSkpIHx8IFtdO1xuICAgICAgY29uc3QgdmlzaWJsZVBhcmVudHMgPSBuZXcgV2Vha1NldCgpO1xuICAgICAgbGFzdERlc2NlbmRhbnRJdGVtcy5mb3JFYWNoKChsaXN0SXRlbSkgPT4gdGhpcy5maWx0ZXJFbGVtZW50cyh7IGVsOiBsaXN0SXRlbSwgZmlsdGVyZWRJdGVtcywgdmlzaWJsZVBhcmVudHMgfSkpO1xuICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcztcbiAgICAgIGlmIChlbWl0KSB7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUxpc3RGaWx0ZXIuZW1pdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3QgeyBmaWx0ZXJlZEl0ZW1zLCB2YWx1ZSB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIHRoaXMuZmlsdGVyZWREYXRhID0gZmlsdGVyZWRJdGVtcztcbiAgICAgIHRoaXMuZmlsdGVyVGV4dCA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVMaXN0SXRlbXModHJ1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmdldEl0ZW1EYXRhID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdEl0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICBtZXRhZGF0YTogaXRlbS5tZXRhZGF0YSxcbiAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWVcbiAgICAgIH0pKTtcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zID0gZGVib3VuY2UoKGVtaXQgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3QgeyBzZWxlY3Rpb25BcHBlYXJhbmNlLCBzZWxlY3Rpb25Nb2RlIH0gPSB0aGlzO1xuICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnF1ZXJ5TGlzdEl0ZW1zKCk7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9uQXBwZWFyYW5jZSA9IHNlbGVjdGlvbkFwcGVhcmFuY2U7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9uTW9kZSA9IHNlbGVjdGlvbk1vZGU7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdEl0ZW1zID0gaXRlbXM7XG4gICAgICBpZiAodGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuZGF0YUZvckZpbHRlciA9IHRoaXMuZ2V0SXRlbURhdGEoKTtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyRWwpIHtcbiAgICAgICAgICB0aGlzLmZpbHRlckVsLml0ZW1zID0gdGhpcy5kYXRhRm9yRmlsdGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUZpbHRlcmVkSXRlbXMoZW1pdCk7XG4gICAgICB0aGlzLmVuYWJsZWRMaXN0SXRlbXMgPSBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmRpc2FibGVkICYmICFpdGVtLmNsb3NlZCk7XG4gICAgICB0aGlzLnNldEFjdGl2ZUxpc3RJdGVtKCk7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSXRlbXMoZW1pdCk7XG4gICAgfSwgZGVib3VuY2VUaW1lb3V0KTtcbiAgICB0aGlzLnF1ZXJ5TGlzdEl0ZW1zID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKGxpc3RJdGVtU2VsZWN0b3IpKTtcbiAgICB9O1xuICAgIHRoaXMuZm9jdXNSb3cgPSAoZm9jdXNFbCkgPT4ge1xuICAgICAgY29uc3QgeyBlbmFibGVkTGlzdEl0ZW1zIH0gPSB0aGlzO1xuICAgICAgaWYgKCFmb2N1c0VsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVuYWJsZWRMaXN0SXRlbXMuZm9yRWFjaCgobGlzdEl0ZW0pID0+IChsaXN0SXRlbS5hY3RpdmUgPSBsaXN0SXRlbSA9PT0gZm9jdXNFbCkpO1xuICAgICAgZm9jdXNFbC5zZXRGb2N1cygpO1xuICAgIH07XG4gICAgdGhpcy5pc05hdmlnYWJsZSA9IChsaXN0SXRlbSkgPT4ge1xuICAgICAgY29uc3QgcGFyZW50TGlzdEl0ZW1FbCA9IGxpc3RJdGVtLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QobGlzdEl0ZW1TZWxlY3Rvcik7XG4gICAgICBpZiAoIXBhcmVudExpc3RJdGVtRWwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyZW50TGlzdEl0ZW1FbC5vcGVuICYmIHRoaXMuaXNOYXZpZ2FibGUocGFyZW50TGlzdEl0ZW1FbCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUxpc3RLZXlkb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5lbmFibGVkTGlzdEl0ZW1zLmZpbHRlcigobGlzdEl0ZW0pID0+IHRoaXMuaXNOYXZpZ2FibGUobGlzdEl0ZW0pKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGZpbHRlcmVkSXRlbXMuZmluZEluZGV4KChsaXN0SXRlbSkgPT4gbGlzdEl0ZW0uYWN0aXZlKTtcbiAgICAgIGlmIChrZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gY3VycmVudEluZGV4ICsgMTtcbiAgICAgICAgaWYgKGZpbHRlcmVkSXRlbXNbbmV4dEluZGV4XSkge1xuICAgICAgICAgIHRoaXMuZm9jdXNSb3coZmlsdGVyZWRJdGVtc1tuZXh0SW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoa2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcmV2SW5kZXggPSBjdXJyZW50SW5kZXggLSAxO1xuICAgICAgICBpZiAoZmlsdGVyZWRJdGVtc1twcmV2SW5kZXhdKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c1JvdyhmaWx0ZXJlZEl0ZW1zW3ByZXZJbmRleF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwiSG9tZVwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGhvbWVJdGVtID0gZmlsdGVyZWRJdGVtc1swXTtcbiAgICAgICAgaWYgKGhvbWVJdGVtKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c1Jvdyhob21lSXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJFbmRcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBlbmRJdGVtID0gZmlsdGVyZWRJdGVtc1tmaWx0ZXJlZEl0ZW1zLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoZW5kSXRlbSkge1xuICAgICAgICAgIHRoaXMuZm9jdXNSb3coZW5kSXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlckVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBbXTtcbiAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IFtdO1xuICAgIHRoaXMuZmlsdGVyUGxhY2Vob2xkZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJUZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5vcGVuYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9IFwibm9uZVwiO1xuICAgIHRoaXMuc2VsZWN0aW9uQXBwZWFyYW5jZSA9IFwiaWNvblwiO1xuICAgIHRoaXMuZGF0YUZvckZpbHRlciA9IFtdO1xuICB9XG4gIGhhbmRsZUZpbHRlckVuYWJsZWRDaGFuZ2UoKSB7XG4gICAgdGhpcy51cGRhdGVMaXN0SXRlbXMoKTtcbiAgfVxuICBoYW5kbGVTZWxlY3Rpb25BcHBlYXJhbmNlQ2hhbmdlKCkge1xuICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zKCk7XG4gIH1cbiAgaGFuZGxlQ2FsY2l0ZUludGVybmFsRm9jdXNQcmV2aW91c0l0ZW0oZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB7IGVuYWJsZWRMaXN0SXRlbXMgfSA9IHRoaXM7XG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gZW5hYmxlZExpc3RJdGVtcy5maW5kSW5kZXgoKGxpc3RJdGVtKSA9PiBsaXN0SXRlbS5hY3RpdmUpO1xuICAgIGNvbnN0IHByZXZJbmRleCA9IGN1cnJlbnRJbmRleCAtIDE7XG4gICAgaWYgKGVuYWJsZWRMaXN0SXRlbXNbcHJldkluZGV4XSkge1xuICAgICAgdGhpcy5mb2N1c1JvdyhlbmFibGVkTGlzdEl0ZW1zW3ByZXZJbmRleF0pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVDYWxjaXRlSW50ZXJuYWxMaXN0SXRlbUFjdGl2ZShldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB7IGxpc3RJdGVtcyB9ID0gdGhpcztcbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICAgIGxpc3RJdGVtLmFjdGl2ZSA9IGxpc3RJdGVtID09PSB0YXJnZXQ7XG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlQ2FsY2l0ZUxpc3RJdGVtU2VsZWN0KCkge1xuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRJdGVtcyh0cnVlKTtcbiAgfVxuICBoYW5kbGVDYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVNlbGVjdChldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB7IGxpc3RJdGVtcywgc2VsZWN0aW9uTW9kZSB9ID0gdGhpcztcbiAgICBsaXN0SXRlbXMuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICAgIGlmIChzZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiIHx8IHNlbGVjdGlvbk1vZGUgPT09IFwic2luZ2xlLXBlcnNpc3RcIikge1xuICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IGxpc3RJdGVtID09PSB0YXJnZXQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZEl0ZW1zKCk7XG4gIH1cbiAgaGFuZGxlQ2FsY2l0ZUxpc3RJdGVtQ2xvc2UoKSB7XG4gICAgdGhpcy51cGRhdGVMaXN0SXRlbXModHJ1ZSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zKCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGNvbnN0IHsgZmlsdGVyRWwgfSA9IHRoaXM7XG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IGZpbHRlckVsPy5maWx0ZXJlZEl0ZW1zO1xuICAgIGlmIChmaWx0ZXJlZEl0ZW1zKSB7XG4gICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkSXRlbXM7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTGlzdEl0ZW1zKCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMuZW5hYmxlZExpc3RJdGVtcy5maW5kKChsaXN0SXRlbSkgPT4gbGlzdEl0ZW0uYWN0aXZlKT8uc2V0Rm9jdXMoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgbGFiZWwsIGRpc2FibGVkLCBkYXRhRm9yRmlsdGVyLCBmaWx0ZXJFbmFibGVkLCBmaWx0ZXJQbGFjZWhvbGRlciwgZmlsdGVyVGV4dCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDEuY29udGFpbmVyIH0sIGxvYWRpbmcgPyBoKFwiY2FsY2l0ZS1zY3JpbVwiLCB7IGNsYXNzOiBDU1MkMS5zY3JpbSwgbG9hZGluZzogbG9hZGluZyB9KSA6IG51bGwsIGgoXCJ0YWJsZVwiLCB7IFwiYXJpYS1idXN5XCI6IHRvQXJpYUJvb2xlYW4obG9hZGluZyksIFwiYXJpYS1sYWJlbFwiOiBsYWJlbCB8fCBcIlwiLCBjbGFzczogQ1NTJDEudGFibGUsIG9uS2V5RG93bjogdGhpcy5oYW5kbGVMaXN0S2V5ZG93biwgcm9sZTogXCJ0cmVlZ3JpZFwiIH0sIGZpbHRlckVuYWJsZWQgPyAoaChcInRoZWFkXCIsIG51bGwsIGgoXCJ0clwiLCB7IGNsYXNzOiB7IFtDU1MkMS5zdGlja3ldOiB0cnVlIH0gfSwgaChcInRoXCIsIHsgY29sU3BhbjogTUFYX0NPTFVNTlMgfSwgaChcImNhbGNpdGUtZmlsdGVyXCIsIHsgXCJhcmlhLWxhYmVsXCI6IGZpbHRlclBsYWNlaG9sZGVyLCBkaXNhYmxlZDogbG9hZGluZyB8fCBkaXNhYmxlZCwgaXRlbXM6IGRhdGFGb3JGaWx0ZXIsIG9uQ2FsY2l0ZUZpbHRlckNoYW5nZTogdGhpcy5oYW5kbGVGaWx0ZXIsIHBsYWNlaG9sZGVyOiBmaWx0ZXJQbGFjZWhvbGRlciwgdmFsdWU6IGZpbHRlclRleHQsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5maWx0ZXJFbCA9IGVsKSB9KSkpKSkgOiBudWxsLCBoKFwidGJvZHlcIiwgeyBjbGFzczogQ1NTJDEudGFibGVDb250YWluZXIgfSwgaChcInNsb3RcIiwgeyBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlRGVmYXVsdFNsb3RDaGFuZ2UgfSkpKSkpO1xuICB9XG4gIGZpbHRlckVsZW1lbnRzKHsgZWwsIGZpbHRlcmVkSXRlbXMsIHZpc2libGVQYXJlbnRzIH0pIHtcbiAgICBjb25zdCBoaWRkZW4gPSAhdmlzaWJsZVBhcmVudHMuaGFzKGVsKSAmJiAhZmlsdGVyZWRJdGVtcy5pbmNsdWRlcyhlbCk7XG4gICAgZWwuaGlkZGVuID0gaGlkZGVuO1xuICAgIGNvbnN0IGNsb3Nlc3RQYXJlbnQgPSBlbC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QocGFyZW50U2VsZWN0b3IpO1xuICAgIGlmICghY2xvc2VzdFBhcmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgdmlzaWJsZVBhcmVudHMuYWRkKGNsb3Nlc3RQYXJlbnQpO1xuICAgIH1cbiAgICB0aGlzLmZpbHRlckVsZW1lbnRzKHtcbiAgICAgIGVsOiBjbG9zZXN0UGFyZW50LFxuICAgICAgZmlsdGVyZWRJdGVtcyxcbiAgICAgIHZpc2libGVQYXJlbnRzXG4gICAgfSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZmlsdGVyRW5hYmxlZFwiOiBbXCJoYW5kbGVGaWx0ZXJFbmFibGVkQ2hhbmdlXCJdLFxuICAgIFwic2VsZWN0aW9uTW9kZVwiOiBbXCJoYW5kbGVTZWxlY3Rpb25BcHBlYXJhbmNlQ2hhbmdlXCJdLFxuICAgIFwic2VsZWN0aW9uQXBwZWFyYW5jZVwiOiBbXCJoYW5kbGVTZWxlY3Rpb25BcHBlYXJhbmNlQ2hhbmdlXCJdXG4gIH07IH1cbn07XG5MaXN0LnN0eWxlID0gbGlzdENzcztcblxuY29uc3QgbGlzdEl0ZW1Dc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uOy0tY2FsY2l0ZS1saXN0LWl0ZW0taWNvbi1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTstLWNhbGNpdGUtbGlzdC1pdGVtLXNwYWNpbmctaW5kZW50OjFyZW19Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfS5jb250YWluZXJ7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSAwJTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmb250LWZhbWlseTp2YXIoLS1jYWxjaXRlLXNhbnMtZmFtaWx5KTtwYWRkaW5nLWlubGluZS1zdGFydDpjYWxjKHZhcigtLWNhbGNpdGUtbGlzdC1pdGVtLXNwYWNpbmctaW5kZW50KSAqIHZhcigtLWNhbGNpdGUtbGlzdC1pdGVtLXNwYWNpbmctaW5kZW50LW11bHRpcGxpZXIpKX0uY29udGFpbmVyICp7Ym94LXNpemluZzpib3JkZXItYm94fS5jb250YWluZXI6aG92ZXJ7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9LmNvbnRhaW5lci0tYm9yZGVyLXNlbGVjdGVke2JvcmRlci1pbmxpbmUtc3RhcnQ6NHB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS5jb250YWluZXItLWJvcmRlci11bnNlbGVjdGVke2JvcmRlci1pbmxpbmUtc3RhcnQ6NHB4IHNvbGlkIHRyYW5zcGFyZW50fS5uZXN0ZWQtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9Lm5lc3RlZC1jb250YWluZXItLWhpZGRlbntkaXNwbGF5Om5vbmV9LmNvbnRlbnQtY29udGFpbmVye2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO2FsaWduLWl0ZW1zOnN0cmV0Y2g7cGFkZGluZzowcHg7Zm9udC1mYW1pbHk6dmFyKC0tY2FsY2l0ZS1zYW5zLWZhbWlseSk7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX10cix0ZHtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fXRyOmZvY3VzLHRkOmZvY3Vze3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1zdGlja3kpO291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKX0uY29udGVudCwuY3VzdG9tLWNvbnRlbnR7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZy1pbmxpbmU6MC43NXJlbTtwYWRkaW5nLWJsb2NrOjAuNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjEuMzc1fS5sYWJlbCwuZGVzY3JpcHRpb257Zm9udC1mYW1pbHk6dmFyKC0tY2FsY2l0ZS1zYW5zLWZhbWlseSk7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7d29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay13b3JkfS5sYWJlbDpvbmx5LWNoaWxkLC5kZXNjcmlwdGlvbjpvbmx5LWNoaWxke21hcmdpbjowcHg7cGFkZGluZy1ibG9jazowLjI1cmVtfS5sYWJlbHtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmRlc2NyaXB0aW9ue21hcmdpbi1ibG9jay1zdGFydDowLjEyNXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9LmNvbnRlbnQtc3RhcnR7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LmNvbnRlbnQtZW5ke2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uY29udGVudC1zdGFydCwuY29udGVudC1lbmR7ZmxleDoxIDEgYXV0b30uY29udGVudC1jb250YWluZXItLWhhcy1jZW50ZXItY29udGVudCAuY29udGVudC1zdGFydCwuY29udGVudC1jb250YWluZXItLWhhcy1jZW50ZXItY29udGVudCAuY29udGVudC1lbmR7ZmxleDowIDEgYXV0b30uc2VsZWN0aW9uLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7cGFkZGluZy1pbmxpbmU6MC43NXJlbTtjb2xvcjp2YXIoLS1jYWxjaXRlLWxpc3QtaXRlbS1pY29uLWNvbG9yKX0uYWN0aW9ucy1zdGFydCwuYWN0aW9ucy1lbmQsLmNvbnRlbnQtc3RhcnQsLmNvbnRlbnQtZW5kLC5zZWxlY3Rpb24tY29udGFpbmVyLC5vcGVuLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfS5vcGVuLWNvbnRhaW5lciwuc2VsZWN0aW9uLWNvbnRhaW5lcntjdXJzb3I6cG9pbnRlcn0uY29udGVudC1zdGFydCA6OnNsb3R0ZWQoY2FsY2l0ZS1pY29uKSwuY29udGVudC1lbmQgOjpzbG90dGVkKGNhbGNpdGUtaWNvbil7bWFyZ2luLWlubGluZTowLjc1cmVtO2FsaWduLXNlbGY6Y2VudGVyfS5hY3Rpb25zLXN0YXJ0IDo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbiksLmFjdGlvbnMtZW5kIDo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbil7YWxpZ24tc2VsZjpzdHJldGNoO2NvbG9yOmluaGVyaXR9OjpzbG90dGVkKGNhbGNpdGUtbGlzdC1pdGVtKXtib3JkZXItd2lkdGg6MHB4O2JvcmRlci1ibG9jay1zdGFydC13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX1baGlkZGVuXXtkaXNwbGF5Om5vbmV9XCI7XG5cbmNvbnN0IGZvY3VzTWFwID0gbmV3IE1hcCgpO1xuY29uc3QgbGlzdFNlbGVjdG9yID0gXCJjYWxjaXRlLWxpc3RcIjtcbmNvbnN0IExpc3RJdGVtID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVMaXN0SXRlbVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUxpc3RJdGVtU2VsZWN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUxpc3RJdGVtQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVMaXN0SXRlbUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1TZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbExpc3RJdGVtU2VsZWN0XCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1BY3RpdmUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbExpc3RJdGVtQWN0aXZlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsRm9jdXNQcmV2aW91c0l0ZW0gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbEZvY3VzUHJldmlvdXNJdGVtXCIsIDYpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuY2xvc2VDbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICB0aGlzLmNhbGNpdGVMaXN0SXRlbUNsb3NlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ29udGVudFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQ3VzdG9tQ29udGVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVBY3Rpb25zU3RhcnRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0FjdGlvbnNTdGFydCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVBY3Rpb25zRW5kU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNBY3Rpb25zRW5kID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNvbnRlbnRTdGFydFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQ29udGVudFN0YXJ0ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNvbnRlbnRFbmRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0NvbnRlbnRFbmQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRGVmYXVsdFNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgcGFyZW50TGlzdEVsIH0gPSB0aGlzO1xuICAgICAgY29uc3QgbGlzdEl0ZW1DaGlsZHJlbiA9IGdldExpc3RJdGVtQ2hpbGRyZW4oZXZlbnQpO1xuICAgICAgdXBkYXRlTGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbUNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IG9wZW5hYmxlID0gISFsaXN0SXRlbUNoaWxkcmVuLmxlbmd0aDtcbiAgICAgIGlmIChvcGVuYWJsZSAmJiBwYXJlbnRMaXN0RWwgJiYgIXBhcmVudExpc3RFbC5vcGVuYWJsZSkge1xuICAgICAgICBwYXJlbnRMaXN0RWwub3BlbmFibGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuYWJsZSA9IG9wZW5hYmxlO1xuICAgICAgaWYgKCFvcGVuYWJsZSkge1xuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlT3BlbiA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgfTtcbiAgICB0aGlzLml0ZW1DbGlja2VkID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdGVkKCk7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbExpc3RJdGVtQWN0aXZlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IHNlbGVjdGlvbk1vZGUsIHNlbGVjdGVkIH0gPSB0aGlzO1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHNlbGVjdGlvbk1vZGUgPT09IFwibXVsdGlwbGVcIiB8fCBzZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhc2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZS1wZXJzaXN0XCIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLmNhbGNpdGVMaXN0SXRlbVNlbGVjdC5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUl0ZW1LZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgIGNvbnN0IHsgY29udGFpbmVyRWwsIGNvbnRlbnRFbCwgYWN0aW9uc1N0YXJ0RWwsIGFjdGlvbnNFbmRFbCwgb3Blbiwgb3BlbmFibGUgfSA9IHRoaXM7XG4gICAgICBjb25zdCBjZWxscyA9IFthY3Rpb25zU3RhcnRFbCwgY29udGVudEVsLCBhY3Rpb25zRW5kRWxdLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGNlbGxzLmZpbmRJbmRleCgoY2VsbCkgPT4gY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNlbGwpKTtcbiAgICAgIGlmIChrZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGVkKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGN1cnJlbnRJbmRleCArIDE7XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgaWYgKCFvcGVuICYmIG9wZW5hYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mb2N1c0NlbGwobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGNlbGxzWzBdKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzQ2VsbChjZWxsc1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNlbGxzW2N1cnJlbnRJbmRleF0gJiYgY2VsbHNbbmV4dEluZGV4XSkge1xuICAgICAgICAgIHRoaXMuZm9jdXNDZWxsKGNlbGxzW25leHRJbmRleF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJldkluZGV4ID0gY3VycmVudEluZGV4IC0gMTtcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzQ2VsbChudWxsKTtcbiAgICAgICAgICBpZiAob3BlbiAmJiBvcGVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxGb2N1c1ByZXZpb3VzSXRlbS5lbWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZm9jdXNDZWxsKG51bGwpO1xuICAgICAgICAgIGNvbnRhaW5lckVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2VsbHNbY3VycmVudEluZGV4XSAmJiBjZWxsc1twcmV2SW5kZXhdKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c0NlbGwoY2VsbHNbcHJldkluZGV4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZm9jdXNDZWxsTnVsbCA9ICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNDZWxsKG51bGwpO1xuICAgIH07XG4gICAgdGhpcy5mb2N1c0NlbGwgPSAoZm9jdXNFbCwgc2F2ZUZvY3VzSW5kZXggPSB0cnVlKSA9PiB7XG4gICAgICBjb25zdCB7IGNvbnRlbnRFbCwgYWN0aW9uc1N0YXJ0RWwsIGFjdGlvbnNFbmRFbCwgcGFyZW50TGlzdEVsIH0gPSB0aGlzO1xuICAgICAgaWYgKHNhdmVGb2N1c0luZGV4KSB7XG4gICAgICAgIGZvY3VzTWFwLnNldChwYXJlbnRMaXN0RWwsIG51bGwpO1xuICAgICAgfVxuICAgICAgW2FjdGlvbnNTdGFydEVsLCBjb250ZW50RWwsIGFjdGlvbnNFbmRFbF0uZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goKHRhYmxlQ2VsbCwgY2VsbEluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYkluZGV4QXR0ciA9IFwidGFiaW5kZXhcIjtcbiAgICAgICAgaWYgKHRhYmxlQ2VsbCA9PT0gZm9jdXNFbCkge1xuICAgICAgICAgIHRhYmxlQ2VsbC5zZXRBdHRyaWJ1dGUodGFiSW5kZXhBdHRyLCBcIjBcIik7XG4gICAgICAgICAgc2F2ZUZvY3VzSW5kZXggJiYgZm9jdXNNYXAuc2V0KHBhcmVudExpc3RFbCwgY2VsbEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0YWJsZUNlbGwucmVtb3ZlQXR0cmlidXRlKHRhYkluZGV4QXR0cik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZm9jdXNFbD8uZm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1ldGFkYXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuc2V0U2l6ZSA9IG51bGw7XG4gICAgdGhpcy5zZXRQb3NpdGlvbiA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3Rpb25Nb2RlID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGlvbkFwcGVhcmFuY2UgPSBudWxsO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxldmVsID0gbnVsbDtcbiAgICB0aGlzLnZpc3VhbExldmVsID0gbnVsbDtcbiAgICB0aGlzLnBhcmVudExpc3RFbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9wZW5hYmxlID0gZmFsc2U7XG4gICAgdGhpcy5oYXNBY3Rpb25zU3RhcnQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0FjdGlvbnNFbmQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0N1c3RvbUNvbnRlbnQgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0NvbnRlbnRTdGFydCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQ29udGVudEVuZCA9IGZhbHNlO1xuICB9XG4gIGFjdGl2ZUhhbmRsZXIoYWN0aXZlKSB7XG4gICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgIHRoaXMuZm9jdXNDZWxsKG51bGwsIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgaGFuZGxlU2VsZWN0ZWRDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1TZWxlY3QuZW1pdCgpO1xuICAgIH1cbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgIHRoaXMucGFyZW50TGlzdEVsID0gZWwuY2xvc2VzdChsaXN0U2VsZWN0b3IpO1xuICAgIHRoaXMubGV2ZWwgPSBnZXREZXB0aChlbCkgKyAxO1xuICAgIHRoaXMudmlzdWFsTGV2ZWwgPSBnZXREZXB0aChlbCwgdHJ1ZSk7XG4gICAgdGhpcy5zZXRTZWxlY3Rpb25EZWZhdWx0cygpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMsIFwibWFuYWdlZFwiKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwsIGNvbnRlbnRFbCwgYWN0aW9uc1N0YXJ0RWwsIGFjdGlvbnNFbmRFbCwgcGFyZW50TGlzdEVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGZvY3VzSW5kZXggPSBmb2N1c01hcC5nZXQocGFyZW50TGlzdEVsKTtcbiAgICBpZiAodHlwZW9mIGZvY3VzSW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGNvbnN0IGNlbGxzID0gW2FjdGlvbnNTdGFydEVsLCBjb250ZW50RWwsIGFjdGlvbnNFbmRFbF0uZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgaWYgKGNlbGxzW2ZvY3VzSW5kZXhdKSB7XG4gICAgICAgIHRoaXMuZm9jdXNDZWxsKGNlbGxzW2ZvY3VzSW5kZXhdKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb250YWluZXJFbD8uZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29udGFpbmVyRWw/LmZvY3VzKCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlclNlbGVjdGVkKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQsIHNlbGVjdGlvbk1vZGUsIHNlbGVjdGlvbkFwcGVhcmFuY2UgfSA9IHRoaXM7XG4gICAgaWYgKHNlbGVjdGlvbk1vZGUgPT09IFwibm9uZVwiIHx8IHNlbGVjdGlvbkFwcGVhcmFuY2UgPT09IFwiYm9yZGVyXCIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKGgoXCJ0ZFwiLCB7IGNsYXNzOiBDU1MkMi5zZWxlY3Rpb25Db250YWluZXIsIGtleTogXCJzZWxlY3Rpb24tY29udGFpbmVyXCIsIG9uQ2xpY2s6IHRoaXMuaXRlbUNsaWNrZWQgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IHNlbGVjdGVkXG4gICAgICAgID8gc2VsZWN0aW9uTW9kZSA9PT0gXCJtdWx0aXBsZVwiXG4gICAgICAgICAgPyBJQ09OUy5zZWxlY3RlZE11bHRpcGxlXG4gICAgICAgICAgOiBJQ09OUy5zZWxlY3RlZFNpbmdsZVxuICAgICAgICA6IElDT05TLnVuc2VsZWN0ZWQsIHNjYWxlOiBcInNcIiB9KSkpO1xuICB9XG4gIHJlbmRlck9wZW4oKSB7XG4gICAgY29uc3QgeyBlbCwgb3Blbiwgb3BlbmFibGUsIHBhcmVudExpc3RFbCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKGVsKTtcbiAgICByZXR1cm4gb3BlbmFibGUgPyAoaChcInRkXCIsIHsgY2xhc3M6IENTUyQyLm9wZW5Db250YWluZXIsIGtleTogXCJvcGVuLWNvbnRhaW5lclwiLCBvbkNsaWNrOiB0aGlzLnRvZ2dsZU9wZW4gfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IG9wZW4gPyBJQ09OUy5vcGVuIDogZGlyID09PSBcInJ0bFwiID8gSUNPTlMuY2xvc2VkUlRMIDogSUNPTlMuY2xvc2VkTFRSLCBzY2FsZTogXCJzXCIgfSkpKSA6IHBhcmVudExpc3RFbD8ub3BlbmFibGUgPyAoaChcInRkXCIsIHsgY2xhc3M6IENTUyQyLm9wZW5Db250YWluZXIsIGtleTogXCJvcGVuLWNvbnRhaW5lclwiLCBvbkNsaWNrOiB0aGlzLml0ZW1DbGlja2VkIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBJQ09OUy5ibGFuaywgc2NhbGU6IFwic1wiIH0pKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlckFjdGlvbnNTdGFydCgpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBoYXNBY3Rpb25zU3RhcnQgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwidGRcIiwgeyBcImFyaWEtbGFiZWxcIjogbGFiZWwsIGNsYXNzOiBDU1MkMi5hY3Rpb25zU3RhcnQsIGhpZGRlbjogIWhhc0FjdGlvbnNTdGFydCwga2V5OiBcImFjdGlvbnMtc3RhcnQtY29udGFpbmVyXCIsIHJvbGU6IFwiZ3JpZGNlbGxcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmFjdGlvbnNTdGFydEVsID0gZWwpIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYWN0aW9uc1N0YXJ0LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQWN0aW9uc1N0YXJ0U2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckFjdGlvbnNFbmQoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgaGFzQWN0aW9uc0VuZCwgY2xvc2FibGUsIG1lc3NhZ2VzIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcInRkXCIsIHsgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLCBjbGFzczogQ1NTJDIuYWN0aW9uc0VuZCwgaGlkZGVuOiAhKGhhc0FjdGlvbnNFbmQgfHwgY2xvc2FibGUpLCBrZXk6IFwiYWN0aW9ucy1lbmQtY29udGFpbmVyXCIsIHJvbGU6IFwiZ3JpZGNlbGxcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmFjdGlvbnNFbmRFbCA9IGVsKSB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbnNFbmQsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVBY3Rpb25zRW5kU2xvdENoYW5nZSB9KSwgY2xvc2FibGUgPyAoaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgYXBwZWFyYW5jZTogXCJ0cmFuc3BhcmVudFwiLCBpY29uOiBJQ09OUy5jbG9zZSwga2V5OiBcImNsb3NlLWFjdGlvblwiLCBsYWJlbDogbWVzc2FnZXMuY2xvc2UsIG9uQ2xpY2s6IHRoaXMuY2xvc2VDbGlja0hhbmRsZXIsIHRleHQ6IG1lc3NhZ2VzLmNsb3NlIH0pKSA6IG51bGwpKTtcbiAgfVxuICByZW5kZXJDb250ZW50U3RhcnQoKSB7XG4gICAgY29uc3QgeyBoYXNDb250ZW50U3RhcnQgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLmNvbnRlbnRTdGFydCwgaGlkZGVuOiAhaGFzQ29udGVudFN0YXJ0IH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY29udGVudFN0YXJ0LCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQ29udGVudFN0YXJ0U2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckN1c3RvbUNvbnRlbnQoKSB7XG4gICAgY29uc3QgeyBoYXNDdXN0b21Db250ZW50IH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMi5jdXN0b21Db250ZW50LCBoaWRkZW46ICFoYXNDdXN0b21Db250ZW50IH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY29udGVudCwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUNvbnRlbnRTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVyQ29udGVudEVuZCgpIHtcbiAgICBjb25zdCB7IGhhc0NvbnRlbnRFbmQgfSA9IHRoaXM7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLmNvbnRlbnRFbmQsIGhpZGRlbjogIWhhc0NvbnRlbnRFbmQgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5jb250ZW50RW5kLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQ29udGVudEVuZFNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJDb250ZW50UHJvcGVydGllcygpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBkZXNjcmlwdGlvbiwgaGFzQ3VzdG9tQ29udGVudCB9ID0gdGhpcztcbiAgICByZXR1cm4gIWhhc0N1c3RvbUNvbnRlbnQgJiYgKCEhbGFiZWwgfHwgISFkZXNjcmlwdGlvbikgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMi5jb250ZW50LCBrZXk6IFwiY29udGVudFwiIH0sIGxhYmVsID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIubGFiZWwsIGtleTogXCJsYWJlbFwiIH0sIGxhYmVsKSkgOiBudWxsLCBkZXNjcmlwdGlvbiA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLmRlc2NyaXB0aW9uLCBrZXk6IFwiZGVzY3JpcHRpb25cIiB9LCBkZXNjcmlwdGlvbikpIDogbnVsbCkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJDb250ZW50Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGxhYmVsLCBzZWxlY3Rpb25Nb2RlLCBoYXNDdXN0b21Db250ZW50IH0gPSB0aGlzO1xuICAgIGNvbnN0IGhhc0NlbnRlckNvbnRlbnQgPSBoYXNDdXN0b21Db250ZW50IHx8ICEhbGFiZWwgfHwgISFkZXNjcmlwdGlvbjtcbiAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAgdGhpcy5yZW5kZXJDb250ZW50U3RhcnQoKSxcbiAgICAgIHRoaXMucmVuZGVyQ3VzdG9tQ29udGVudCgpLFxuICAgICAgdGhpcy5yZW5kZXJDb250ZW50UHJvcGVydGllcygpLFxuICAgICAgdGhpcy5yZW5kZXJDb250ZW50RW5kKClcbiAgICBdO1xuICAgIHJldHVybiAoaChcInRkXCIsIHsgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLCBjbGFzczoge1xuICAgICAgICBbQ1NTJDIuY29udGVudENvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1MkMi5jb250ZW50Q29udGFpbmVyU2VsZWN0YWJsZV06IHNlbGVjdGlvbk1vZGUgIT09IFwibm9uZVwiLFxuICAgICAgICBbQ1NTJDIuY29udGVudENvbnRhaW5lckhhc0NlbnRlckNvbnRlbnRdOiBoYXNDZW50ZXJDb250ZW50XG4gICAgICB9LCBrZXk6IFwiY29udGVudC1jb250YWluZXJcIiwgb25DbGljazogdGhpcy5pdGVtQ2xpY2tlZCwgcm9sZTogXCJncmlkY2VsbFwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuY29udGVudEVsID0gZWwpIH0sIGNvbnRlbnQpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcGVuYWJsZSwgb3BlbiwgbGV2ZWwsIHNldFBvc2l0aW9uLCBzZXRTaXplLCBhY3RpdmUsIGxhYmVsLCBzZWxlY3RlZCwgc2VsZWN0aW9uQXBwZWFyYW5jZSwgc2VsZWN0aW9uTW9kZSwgY2xvc2VkIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNob3dCb3JkZXIgPSBzZWxlY3Rpb25Nb2RlICE9PSBcIm5vbmVcIiAmJiBzZWxlY3Rpb25BcHBlYXJhbmNlID09PSBcImJvcmRlclwiO1xuICAgIGNvbnN0IGJvcmRlclNlbGVjdGVkID0gc2hvd0JvcmRlciAmJiBzZWxlY3RlZDtcbiAgICBjb25zdCBib3JkZXJVbnNlbGVjdGVkID0gc2hvd0JvcmRlciAmJiAhc2VsZWN0ZWQ7XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJ0clwiLCB7IFwiYXJpYS1leHBhbmRlZFwiOiBvcGVuYWJsZSA/IHRvQXJpYUJvb2xlYW4ob3BlbikgOiBudWxsLCBcImFyaWEtbGFiZWxcIjogbGFiZWwsIFwiYXJpYS1sZXZlbFwiOiBsZXZlbCwgXCJhcmlhLXBvc2luc2V0XCI6IHNldFBvc2l0aW9uLCBcImFyaWEtc2VsZWN0ZWRcIjogdG9BcmlhQm9vbGVhbihzZWxlY3RlZCksIFwiYXJpYS1zZXRzaXplXCI6IHNldFNpemUsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MkMi5jb250YWluZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTJDIuY29udGFpbmVyQm9yZGVyU2VsZWN0ZWRdOiBib3JkZXJTZWxlY3RlZCxcbiAgICAgICAgW0NTUyQyLmNvbnRhaW5lckJvcmRlclVuc2VsZWN0ZWRdOiBib3JkZXJVbnNlbGVjdGVkXG4gICAgICB9LCBoaWRkZW46IGNsb3NlZCwgb25Gb2N1czogdGhpcy5mb2N1c0NlbGxOdWxsLCBvbktleURvd246IHRoaXMuaGFuZGxlSXRlbUtleURvd24sIHJvbGU6IFwicm93XCIsIHN0eWxlOiB7IFwiLS1jYWxjaXRlLWxpc3QtaXRlbS1zcGFjaW5nLWluZGVudC1tdWx0aXBsaWVyXCI6IGAke3RoaXMudmlzdWFsTGV2ZWx9YCB9LCB0YWJJbmRleDogYWN0aXZlID8gMCA6IC0xLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuY29udGFpbmVyRWwgPSBlbCkgfSwgdGhpcy5yZW5kZXJTZWxlY3RlZCgpLCB0aGlzLnJlbmRlck9wZW4oKSwgdGhpcy5yZW5kZXJBY3Rpb25zU3RhcnQoKSwgdGhpcy5yZW5kZXJDb250ZW50Q29udGFpbmVyKCksIHRoaXMucmVuZGVyQWN0aW9uc0VuZCgpKSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MkMi5uZXN0ZWRDb250YWluZXJdOiB0cnVlLFxuICAgICAgICBbQ1NTJDIubmVzdGVkQ29udGFpbmVySGlkZGVuXTogb3BlbmFibGUgJiYgIW9wZW5cbiAgICAgIH0gfSwgaChcInNsb3RcIiwgeyBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlRGVmYXVsdFNsb3RDaGFuZ2UgfSkpKSk7XG4gIH1cbiAgc2V0U2VsZWN0aW9uRGVmYXVsdHMoKSB7XG4gICAgY29uc3QgeyBwYXJlbnRMaXN0RWwsIHNlbGVjdGlvbk1vZGUsIHNlbGVjdGlvbkFwcGVhcmFuY2UgfSA9IHRoaXM7XG4gICAgaWYgKCFwYXJlbnRMaXN0RWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFzZWxlY3Rpb25Nb2RlKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBwYXJlbnRMaXN0RWwuc2VsZWN0aW9uTW9kZTtcbiAgICB9XG4gICAgaWYgKCFzZWxlY3Rpb25BcHBlYXJhbmNlKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbkFwcGVhcmFuY2UgPSBwYXJlbnRMaXN0RWwuc2VsZWN0aW9uQXBwZWFyYW5jZTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImFjdGl2ZVwiOiBbXCJhY3RpdmVIYW5kbGVyXCJdLFxuICAgIFwic2VsZWN0ZWRcIjogW1wiaGFuZGxlU2VsZWN0ZWRDaGFuZ2VcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbn07XG5MaXN0SXRlbS5zdHlsZSA9IGxpc3RJdGVtQ3NzO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgaGVhZGluZzogXCJoZWFkaW5nXCJcbn07XG5cbmNvbnN0IGxpc3RJdGVtR3JvdXBDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpOy0tY2FsY2l0ZS1saXN0LWl0ZW0tc3BhY2luZy1pbmRlbnQ6MXJlbX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LmNvbnRhaW5lcnttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSAwJTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtwYWRkaW5nOjAuNzVyZW07Zm9udC1mYW1pbHk6dmFyKC0tY2FsY2l0ZS1zYW5zLWZhbWlseSk7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LWJvbGQpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0uaGVhZGluZ3twYWRkaW5nLWlubGluZS1zdGFydDpjYWxjKHZhcigtLWNhbGNpdGUtbGlzdC1pdGVtLXNwYWNpbmctaW5kZW50KSAqIHZhcigtLWNhbGNpdGUtbGlzdC1pdGVtLXNwYWNpbmctaW5kZW50LW11bHRpcGxpZXIpKX06OnNsb3R0ZWQoY2FsY2l0ZS1saXN0LWl0ZW0pe21hcmdpbi1ibG9jay1lbmQ6MXB4Oy0tdHctc2hhZG93OjAgMXB4IDAgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7LS10dy1zaGFkb3ctY29sb3JlZDowIDFweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTo6c2xvdHRlZChjYWxjaXRlLWxpc3QtaXRlbTpsYXN0LWNoaWxkKXstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1cIjtcblxuY29uc3QgTGlzdEl0ZW1Hcm91cCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuaGVhZGluZyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZpc3VhbExldmVsID0gbnVsbDtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XG4gICAgdGhpcy52aXN1YWxMZXZlbCA9IGdldERlcHRoKGVsLCB0cnVlKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoZWFkaW5nLCB2aXN1YWxMZXZlbCB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcInRyXCIsIHsgY2xhc3M6IENTUy5jb250YWluZXIsIHN0eWxlOiB7IFwiLS1jYWxjaXRlLWxpc3QtaXRlbS1zcGFjaW5nLWluZGVudC1tdWx0aXBsaWVyXCI6IGAke3Zpc3VhbExldmVsfWAgfSB9LCBoKFwidGRcIiwgeyBjbGFzczogQ1NTLmhlYWRpbmcsIGNvbFNwYW46IE1BWF9DT0xVTU5TIH0sIGhlYWRpbmcpKSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuTGlzdEl0ZW1Hcm91cC5zdHlsZSA9IGxpc3RJdGVtR3JvdXBDc3M7XG5cbmV4cG9ydCB7IExpc3QgYXMgY2FsY2l0ZV9saXN0LCBMaXN0SXRlbSBhcyBjYWxjaXRlX2xpc3RfaXRlbSwgTGlzdEl0ZW1Hcm91cCBhcyBjYWxjaXRlX2xpc3RfaXRlbV9ncm91cCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmZ1bmN0aW9uIGludGVyY2VwdGVkQ2xpY2soKSB7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXM7XG4gIGlmICghZGlzYWJsZWQpIHtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2suY2FsbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuICAvLyBwcmV2ZW50IGNsaWNrIGZyb20gbW92aW5nIGZvY3VzIG9uIGhvc3RcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZVxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudC5lbC5jbGljayA9IGludGVyY2VwdGVkQ2xpY2s7XG4gICAgY29tcG9uZW50LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICAgIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGNvbXBvbmVudC5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbXBvbmVudC5lbC5jbGljayA9IEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljaztcbiAgY29tcG9uZW50LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBjb21wb25lbnQuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xuICBpZiAodHlwZW9mIGhvc3RJc1RhYmJhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgaG9zdElzVGFiYmFibGUuY2FsbChjb21wb25lbnQpID8gXCIwXCIgOiBcIi0xXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSB0cnVlKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSA7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xufVxuXG5leHBvcnQgeyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmNvbnN0IHJlc29sdmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcHJvbWlzZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgc2V0cyB1cCB0aGUgY29tcG9uZW50IGZvciB0aGUgYWJpbGl0eSB0byBrbm93IHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudFdpbGxMb2FkKCk6IHZvaWQge1xuICogICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRVcExvYWRhYmxlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBwcm9taXNlTWFwLnNldChjb21wb25lbnQsIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlTWFwLnNldChjb21wb25lbnQsIHJlc29sdmUpKSk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgbGV0cyB0aGUgbG9hZGFibGUgY29tcG9uZW50IGtub3cgdGhhdCBpdCBpcyBub3cgbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudERpZExvYWQoKTogdm9pZCB7XG4gKiAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXNvbHZlTWFwLmdldChjb21wb25lbnQpKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgY2FuIGJlIHVzZWQgdG8gZW5zdXJlIGEgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZCAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIHN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQpLlxuICpcbiAqIFJlcXVpcmVzIFwic2V0VXBMb2FkYWJsZUNvbXBvbmVudFwiIGFuZCBcInNldENvbXBvbmVudExvYWRlZFwiIHRvIGJlIGNhbGxlZCBmaXJzdC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0LlxuICpcbiAqIGBgYFxuICogYXN5bmMgc2V0Rm9jdXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXR1cm4gcHJvbWlzZU1hcC5nZXQoY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgc2V0Q29tcG9uZW50TG9hZGVkIGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBjLCBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIHMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBnIGFzIGdldEFzc2V0UGF0aCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS1iM2M0NGRkYS5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZSA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZUJ1bmRsZShsYW5nLCBjb21wb25lbnQpIHtcbiAgY29uc3Qga2V5ID0gYCR7Y29tcG9uZW50fV8ke2xhbmd9YDtcbiAgaWYgKGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xuICB9XG4gIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy8ke2NvbXBvbmVudH0vdDluL21lc3NhZ2VzXyR7bGFuZ30uanNvbmApKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfSlcbiAgICAuY2F0Y2goKCkgPT4gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpKTtcbiAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xufVxuZnVuY3Rpb24gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZldGNoIGNvbXBvbmVudCBtZXNzYWdlIGJ1bmRsZVwiKTtcbn1cbmZ1bmN0aW9uIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tZXNzYWdlcyA9IHtcbiAgICAuLi5jb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzLFxuICAgIC4uLmNvbXBvbmVudC5tZXNzYWdlT3ZlcnJpZGVzXG4gIH07XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIHRoZSBtZXNzYWdlcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQuIEl0IHNob3VsZCBiZSBhd2FpdGVkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2V0VXBNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBjb21wb25lbnQuZWZmZWN0aXZlTG9jYWxlKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29uc3QgeyBlbCB9ID0gY29tcG9uZW50O1xuICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0YWcucmVwbGFjZShcImNhbGNpdGUtXCIsIFwiXCIpO1xuICByZXR1cm4gZ2V0TWVzc2FnZUJ1bmRsZShnZXRTdXBwb3J0ZWRMb2NhbGUobGFuZywgXCJ0OW5cIiksIGNvbXBvbmVudE5hbWUpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgbXVzdCBiZSBzZXQgdXAgZm9yIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBkZWZhdWx0IG1lc3NhZ2UgYnVuZGxlIGlmIHRoZSBsb2NhbGUgY2hhbmdlcy5cbiAqXG4gKiBJdCBjYW4gYmUgc2V0IHVwIGluICoqZWl0aGVyKiogb2YgdGhlIGZvbGxvd2luZyB3YXlzOlxuICpcbiAqIDEuIGNhbGxlZCBmcm9tIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYG9uTG9jYWxlQ2hhbmdlYCBtZXRob2Qgb3JcbiAqIDIuIGNhbGxlZCBmcm9tIGEgd2F0Y2hlciBjb25maWd1cmVkIHRvIHdhdGNoIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGVmZmVjdGl2ZUxvY2FsZWAgcHJvcFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBsYW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqICoqTm90ZSoqOiB0aGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGNvbm5lY3RMb2NhbGl6ZWRgIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHRlYXJzIGRvd24gaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gIG1lcmdlTWVzc2FnZXModGhpcyk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RNZXNzYWdlcyBhcyBjLCBkaXNjb25uZWN0TWVzc2FnZXMgYXMgZCwgc2V0VXBNZXNzYWdlcyBhcyBzLCB1cGRhdGVNZXNzYWdlcyBhcyB1IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=