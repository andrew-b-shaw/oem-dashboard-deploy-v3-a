"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_conditionalSlot-946fb911_js-node_module-eba6d3"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/array-8048effa.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/array-8048effa.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getRoundRobinIndex)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
function getRoundRobinIndex(index, total) {
  return (index + total) % total;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-946fb911.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-946fb911.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectConditionalSlotComponent),
/* harmony export */   "d": () => (/* binding */ disconnectConditionalSlotComponent)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */



const observed = new Set();
let mutationObserver;
const observerOptions = { childList: true };
/**
 * Helper to set up a conditional slot component on connectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function connectConditionalSlotComponent(component) {
  if (!mutationObserver) {
    mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_1__.c)("mutation", processMutations);
  }
  mutationObserver.observe(component.el, observerOptions);
}
/**
 * Helper to tear down a conditional slot component on disconnectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function disconnectConditionalSlotComponent(component) {
  observed.delete(component.el);
  // we explicitly process queued mutations and disconnect and reconnect
  // the observer until MutationObserver gets an `unobserve` method
  // see https://github.com/whatwg/dom/issues/126
  processMutations(mutationObserver.takeRecords());
  mutationObserver.disconnect();
  for (const [element] of observed.entries()) {
    mutationObserver.observe(element, observerOptions);
  }
}
function processMutations(mutations) {
  mutations.forEach(({ target }) => {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.f)(target);
  });
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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/resources-298c32e6.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/resources-298c32e6.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CSS),
/* harmony export */   "I": () => (/* binding */ ICON_TYPES),
/* harmony export */   "L": () => (/* binding */ List),
/* harmony export */   "S": () => (/* binding */ SLOTS),
/* harmony export */   "a": () => (/* binding */ deselectSiblingItems),
/* harmony export */   "b": () => (/* binding */ handleFilterEvent),
/* harmony export */   "c": () => (/* binding */ getItemData),
/* harmony export */   "d": () => (/* binding */ deselectRemovedItems),
/* harmony export */   "e": () => (/* binding */ moveItemIndex),
/* harmony export */   "f": () => (/* binding */ initializeObserver),
/* harmony export */   "g": () => (/* binding */ getItemIndex),
/* harmony export */   "h": () => (/* binding */ handleFilter),
/* harmony export */   "i": () => (/* binding */ initialize),
/* harmony export */   "j": () => (/* binding */ handleInitialFilter),
/* harmony export */   "k": () => (/* binding */ keyDownHandler),
/* harmony export */   "l": () => (/* binding */ cleanUpObserver),
/* harmony export */   "m": () => (/* binding */ mutationObserverCallback),
/* harmony export */   "n": () => (/* binding */ calciteListFocusOutHandler),
/* harmony export */   "o": () => (/* binding */ calciteListItemChangeHandler),
/* harmony export */   "p": () => (/* binding */ calciteInternalListItemValueChangeHandler),
/* harmony export */   "q": () => (/* binding */ setUpItems),
/* harmony export */   "r": () => (/* binding */ removeItem),
/* harmony export */   "s": () => (/* binding */ selectSiblings),
/* harmony export */   "t": () => (/* binding */ setFocus),
/* harmony export */   "u": () => (/* binding */ SLOTS$2),
/* harmony export */   "v": () => (/* binding */ CSS$2),
/* harmony export */   "w": () => (/* binding */ ICONS)
/* harmony export */ });
/* harmony import */ var _array_8048effa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array-8048effa.js */ "./node_modules/@esri/calcite-components/dist/esm/array-8048effa.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */





const CSS$2 = {
  heading: "heading",
  container: "container",
  indented: "container--indented"
};
const SLOTS$2 = {
  parentItem: "parent-item"
};

function mutationObserverCallback() {
  this.setUpItems();
  this.setUpFilter();
  this.deselectRemovedItems();
}
const SUPPORTED_ARROW_KEYS = ["ArrowUp", "ArrowDown"];
// --------------------------------------------------------------------------
//
//  Lifecycle
//
// --------------------------------------------------------------------------
function initialize() {
  this.setUpItems();
  this.setUpFilter();
  this.emitCalciteListChange = (0,_debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_2__.d)(internalCalciteListChangeEvent.bind(this), 0);
  this.emitCalciteListFilter = (0,_debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_2__.d)(internalCalciteListFilterEvent.bind(this), 0);
}
function initializeObserver() {
  this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
}
function cleanUpObserver() {
  this.mutationObserver?.disconnect();
}
// --------------------------------------------------------------------------
//
//  Listeners
//
// --------------------------------------------------------------------------
function calciteListItemChangeHandler(event) {
  const { selectedValues } = this;
  const { item, value, selected, shiftPressed } = event.detail;
  if (selected) {
    if (this.multiple && shiftPressed) {
      this.selectSiblings(item);
    }
    if (!this.multiple) {
      this.deselectSiblingItems(item);
    }
    selectedValues.set(value, item);
  }
  else {
    selectedValues.delete(value);
    if (this.multiple && shiftPressed) {
      this.selectSiblings(item, true);
    }
  }
  if (!this.multiple) {
    toggleSingleSelectItemTabbing(item, selected);
    if (selected) {
      (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.f)(item);
    }
  }
  this.lastSelectedItem = item;
  this.emitCalciteListChange();
}
function calciteInternalListItemValueChangeHandler(event) {
  const oldValue = event.detail.oldValue;
  const selectedValues = this.selectedValues;
  if (selectedValues.has(oldValue)) {
    const item = selectedValues.get(oldValue);
    selectedValues.delete(oldValue);
    selectedValues.set(event.detail.newValue, item);
  }
  event.stopPropagation();
}
// --------------------------------------------------------------------------
//
//  Private Methods
//
// --------------------------------------------------------------------------
function isValidNavigationKey(key) {
  return !!SUPPORTED_ARROW_KEYS.find((k) => k === key);
}
function calciteListFocusOutHandler(event) {
  const { el, items, multiple, selectedValues } = this;
  if (multiple) {
    return;
  }
  const focusedInside = el.contains(event.relatedTarget);
  if (focusedInside) {
    return;
  }
  filterOutDisabled(items).forEach((item) => {
    toggleSingleSelectItemTabbing(item, selectedValues.size === 0 ? item.contains(event.target) || event.target === item : item.selected);
  });
}
function keyDownHandler(event) {
  const { key, target } = event;
  if (!isValidNavigationKey(key)) {
    return;
  }
  const { items, multiple, selectionFollowsFocus } = this;
  const { length: totalItems } = items;
  const currentIndex = items.indexOf(target);
  if (!totalItems || currentIndex === -1) {
    return;
  }
  event.preventDefault();
  const index = moveItemIndex(this, target, key === "ArrowUp" ? "up" : "down");
  const item = items[index];
  items.forEach((i) => toggleSingleSelectItemTabbing(i, i === item));
  if (!multiple && selectionFollowsFocus) {
    item.selected = true;
  }
  (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.f)(item);
}
function moveItemIndex(list, item, direction) {
  const { items } = list;
  const { length: totalItems } = items;
  const currentIndex = items.indexOf(item);
  const directionFactor = direction === "up" ? -1 : 1;
  let moveOffset = 1;
  let index = (0,_array_8048effa_js__WEBPACK_IMPORTED_MODULE_0__.g)(currentIndex + directionFactor * moveOffset++, totalItems);
  const firstMovedIndex = index;
  while (items[index].disabled) {
    index = (0,_array_8048effa_js__WEBPACK_IMPORTED_MODULE_0__.g)(currentIndex + directionFactor * moveOffset++, totalItems);
    if (index === firstMovedIndex) {
      break;
    }
  }
  return index;
}
function getItemIndex(list, item) {
  const { items } = list;
  return items.indexOf(item);
}
function filterOutDisabled(items) {
  return items.filter((item) => !item.disabled);
}
function internalCalciteListFilterEvent() {
  this.calciteListFilter.emit();
}
function internalCalciteListChangeEvent() {
  this.calciteListChange.emit(this.selectedValues);
}
function removeItem(event) {
  if (event.defaultPrevented) {
    return;
  }
  const item = event.target;
  const selectedValues = this.selectedValues;
  if (item.parentElement.tagName === "CALCITE-PICK-LIST-GROUP" && item.slot === SLOTS$2.parentItem) {
    item.parentElement.remove();
    Array.from(item.parentElement.children).forEach((item) => selectedValues.delete(item.value));
  }
  else {
    item.remove();
    selectedValues.delete(item.value);
  }
  this.emitCalciteListChange();
}
function toggleSingleSelectItemTabbing(item, selectable) {
  if (item.disabled) {
    return;
  }
  // using attribute intentionally
  if (selectable) {
    item.removeAttribute("tabindex");
  }
  else {
    item.setAttribute("tabindex", "-1");
  }
}
async function setFocus(focusId) {
  if (this.filterEnabled && focusId === "filter") {
    await (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.filterEl);
    return;
  }
  const { items, multiple, selectionFollowsFocus } = this;
  if (items.length === 0) {
    return;
  }
  if (multiple) {
    return filterOutDisabled(items)[0]?.setFocus();
  }
  const filtered = filterOutDisabled(items);
  const focusTarget = filtered.find((item) => item.selected) || filtered[0];
  if (selectionFollowsFocus && focusTarget) {
    focusTarget.selected = true;
  }
  return focusTarget.setFocus();
}
function setUpItems(tagName) {
  this.items = Array.from(this.el.querySelectorAll(tagName));
  let hasSelected = false;
  const { items } = this;
  items.forEach((item) => {
    item.icon = this.getIconType();
    if (!this.multiple) {
      item.deselectDisabled = true;
      toggleSingleSelectItemTabbing(item, false);
    }
    if (item.selected) {
      hasSelected = true;
      toggleSingleSelectItemTabbing(item, true);
      this.selectedValues.set(item.value, item);
    }
  });
  const [first] = items;
  if (!hasSelected && first && !first.disabled) {
    toggleSingleSelectItemTabbing(first, true);
  }
}
function deselectRemovedItems() {
  const selectedValues = this.selectedValues;
  const itemValues = this.items.map(({ value }) => value);
  selectedValues.forEach((selectedItem) => {
    if (!itemValues.includes(selectedItem.value)) {
      this.selectedValues.delete(selectedItem.value);
    }
  });
}
function deselectSiblingItems(item) {
  this.items.forEach((currentItem) => {
    if (currentItem.value !== item.value) {
      currentItem.toggleSelected(false);
      if (this.selectedValues.has(currentItem.value)) {
        this.selectedValues.delete(currentItem.value);
      }
    }
  });
}
function selectSiblings(item, deselect = false) {
  if (!this.lastSelectedItem) {
    return;
  }
  const { items } = this;
  const start = items.findIndex((currentItem) => {
    return currentItem.value === this.lastSelectedItem.value;
  });
  const end = items.findIndex((currentItem) => {
    return currentItem.value === item.value;
  });
  items.slice(Math.min(start, end), Math.max(start, end)).forEach((currentItem) => {
    currentItem.toggleSelected(!deselect);
    if (!deselect) {
      this.selectedValues.set(currentItem.value, currentItem);
    }
    else {
      this.selectedValues.delete(currentItem.value);
    }
  });
}
let groups;
function handleFilter(emit = false) {
  const { filteredData, filterText } = this;
  const values = filteredData.map((item) => item.value);
  let hasSelectedMatch = false;
  if (!groups) {
    groups = new Set();
  }
  const matchedItems = this.items?.filter((item) => {
    const parent = item.parentElement;
    const grouped = parent.matches("calcite-pick-list-group");
    if (grouped) {
      groups.add(parent);
    }
    const matches = filterText ? values.includes(item.value) : true;
    item.hidden = !matches;
    if (!hasSelectedMatch) {
      hasSelectedMatch = matches && item.selected;
    }
    return matches;
  }) || [];
  groups.forEach((group) => {
    const hasAtLeastOneMatch = matchedItems.some((item) => group.contains(item));
    group.hidden = !hasAtLeastOneMatch;
    if (!hasAtLeastOneMatch) {
      return;
    }
    const parentItem = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.g)(group, "parent-item");
    if (parentItem) {
      parentItem.hidden = false;
      if (matchedItems.includes(parentItem)) {
        Array.from(group.children).forEach((child) => (child.hidden = false));
      }
    }
  });
  groups.clear();
  if (matchedItems.length > 0 && !hasSelectedMatch && !this.multiple) {
    toggleSingleSelectItemTabbing(matchedItems[0], true);
  }
  this.setFilteredItems(matchedItems);
  if (emit) {
    this.emitCalciteListFilter();
  }
}
function handleInitialFilter() {
  const filteredItems = this.filterEl?.filteredItems;
  if (filteredItems) {
    this.filteredData = filteredItems;
  }
  this.handleFilter();
}
function handleFilterEvent(event) {
  event.stopPropagation();
  const { filteredItems, value } = event.currentTarget;
  this.filterText = value;
  this.filteredData = filteredItems;
  this.handleFilter(true);
}
function getItemData() {
  return this.items.map((item) => ({
    label: item.label,
    description: item.description,
    metadata: item.metadata,
    value: item.value
  }));
}

const CSS$1 = {
  sticky: "sticky-pos"
};
var ICON_TYPES;
(function (ICON_TYPES) {
  ICON_TYPES["circle"] = "circle";
  ICON_TYPES["square"] = "square";
  ICON_TYPES["grip"] = "grip";
})(ICON_TYPES || (ICON_TYPES = {}));
const SLOTS$1 = {
  menuActions: "menu-actions"
};

const List = ({ props: { disabled, loading, filterEnabled, dataForFilter, handleFilterEvent, filterPlaceholder, filterText, setFilterEl, dragEnabled, storeAssistiveEl }, ...rest }) => {
  const defaultSlot = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_3__.h)("slot", null);
  return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_3__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_3__.H, { "aria-busy": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.t)(loading), role: "menu", ...rest },
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_3__.h)("section", null,
      dragEnabled ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_3__.h)("span", { "aria-live": "assertive", class: "assistive-text", 
        // eslint-disable-next-line react/jsx-sort-props
        ref: storeAssistiveEl })) : null,
      (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_3__.h)("header", { class: { [CSS$1.sticky]: true } },
        filterEnabled ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_3__.h)("calcite-filter", { "aria-label": filterPlaceholder, disabled: loading || disabled, items: dataForFilter, onCalciteFilterChange: handleFilterEvent, placeholder: filterPlaceholder, value: filterText, 
          // eslint-disable-next-line react/jsx-sort-props
          ref: setFilterEl })) : null,
        (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_3__.h)("slot", { name: SLOTS$1.menuActions })),
      loading ? (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_3__.h)("calcite-scrim", { loading: loading }) : null,
      defaultSlot)));
};

const CSS = {
  actions: "actions",
  actionsEnd: "actions--end",
  actionsStart: "actions--start",
  description: "description",
  handle: "handle",
  handleActivated: "handle--activated",
  highlight: "highlight",
  icon: "icon",
  iconDot: "icon-dot",
  label: "label",
  remove: "remove",
  title: "title",
  textContainer: "text-container"
};
const ICONS = {
  checked: "check",
  remove: "x"
};
const SLOTS = {
  actionsEnd: "actions-end",
  actionsStart: "actions-start"
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZmFiYWNkM2FlNzA2YjM2ZDcwZTY4ODFkN2EwNmQ1Y2YuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1RDtBQUNPOztBQUU5RDtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUF3RTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5REFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RUFBd0U7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLElBQUkscURBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRXlGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRHRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHVCQUF1QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0M7QUFDakM7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixTQUFTLCtJQUErSSxXQUFXO0FBQ25MLHNCQUFzQixxREFBQztBQUN2QixVQUFVLHFEQUFDLENBQUMsaURBQUksSUFBSSxhQUFhLG1EQUFhLGtDQUFrQztBQUNoRixJQUFJLHFEQUFDO0FBQ0wscUJBQXFCLHFEQUFDLFdBQVc7QUFDakM7QUFDQSwrQkFBK0I7QUFDL0IsTUFBTSxxREFBQyxhQUFhLFNBQVMsd0JBQXdCO0FBQ3JELHlCQUF5QixxREFBQyxxQkFBcUI7QUFDL0M7QUFDQSw0QkFBNEI7QUFDNUIsUUFBUSxxREFBQyxXQUFXLDJCQUEyQjtBQUMvQyxnQkFBZ0IscURBQUMsb0JBQW9CLGtCQUFrQjtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW9rQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2FycmF5LTgwNDhlZmZhLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NvbmRpdGlvbmFsU2xvdC05NDZmYjkxMS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9sb2FkYWJsZS04MDU4ZTMwMC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9yZXNvdXJjZXMtMjk4YzMyZTYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmZ1bmN0aW9uIGdldFJvdW5kUm9iaW5JbmRleChpbmRleCwgdG90YWwpIHtcbiAgcmV0dXJuIChpbmRleCArIHRvdGFsKSAlIHRvdGFsO1xufVxuXG5leHBvcnQgeyBnZXRSb3VuZFJvYmluSW5kZXggYXMgZyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGYgYXMgZm9yY2VVcGRhdGUgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5cbmNvbnN0IG9ic2VydmVkID0gbmV3IFNldCgpO1xubGV0IG11dGF0aW9uT2JzZXJ2ZXI7XG5jb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7IGNoaWxkTGlzdDogdHJ1ZSB9O1xuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGlmICghbXV0YXRpb25PYnNlcnZlcikge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsIHByb2Nlc3NNdXRhdGlvbnMpO1xuICB9XG4gIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShjb21wb25lbnQuZWwsIG9ic2VydmVyT3B0aW9ucyk7XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgb2JzZXJ2ZWQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIC8vIHdlIGV4cGxpY2l0bHkgcHJvY2VzcyBxdWV1ZWQgbXV0YXRpb25zIGFuZCBkaXNjb25uZWN0IGFuZCByZWNvbm5lY3RcbiAgLy8gdGhlIG9ic2VydmVyIHVudGlsIE11dGF0aW9uT2JzZXJ2ZXIgZ2V0cyBhbiBgdW5vYnNlcnZlYCBtZXRob2RcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjZcbiAgcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgZm9yIChjb25zdCBbZWxlbWVudF0gb2Ygb2JzZXJ2ZWQuZW50cmllcygpKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XG4gIH1cbn1cbmZ1bmN0aW9uIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gIG11dGF0aW9ucy5mb3JFYWNoKCh7IHRhcmdldCB9KSA9PiB7XG4gICAgZm9yY2VVcGRhdGUodGFyZ2V0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgYywgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgc3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgXCJzZXRVcExvYWRhYmxlQ29tcG9uZW50XCIgYW5kIFwic2V0Q29tcG9uZW50TG9hZGVkXCIgdG8gYmUgY2FsbGVkIGZpcnN0LlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBzZXRGb2N1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBzZXRDb21wb25lbnRMb2FkZWQgYXMgYSwgY29tcG9uZW50TG9hZGVkIGFzIGMsIHNldFVwTG9hZGFibGVDb21wb25lbnQgYXMgcyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGcgYXMgZ2V0Um91bmRSb2JpbkluZGV4IH0gZnJvbSAnLi9hcnJheS04MDQ4ZWZmYS5qcyc7XG5pbXBvcnQgeyBmIGFzIGZvY3VzRWxlbWVudCwgZyBhcyBnZXRTbG90dGVkLCB0IGFzIHRvQXJpYUJvb2xlYW4gfSBmcm9tICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlYm91bmNlIH0gZnJvbSAnLi9kZWJvdW5jZS0wOTUwYTliOC5qcyc7XG5pbXBvcnQgeyBoLCBIIGFzIEhvc3QgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcblxuY29uc3QgQ1NTJDIgPSB7XG4gIGhlYWRpbmc6IFwiaGVhZGluZ1wiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGluZGVudGVkOiBcImNvbnRhaW5lci0taW5kZW50ZWRcIlxufTtcbmNvbnN0IFNMT1RTJDIgPSB7XG4gIHBhcmVudEl0ZW06IFwicGFyZW50LWl0ZW1cIlxufTtcblxuZnVuY3Rpb24gbXV0YXRpb25PYnNlcnZlckNhbGxiYWNrKCkge1xuICB0aGlzLnNldFVwSXRlbXMoKTtcbiAgdGhpcy5zZXRVcEZpbHRlcigpO1xuICB0aGlzLmRlc2VsZWN0UmVtb3ZlZEl0ZW1zKCk7XG59XG5jb25zdCBTVVBQT1JURURfQVJST1dfS0VZUyA9IFtcIkFycm93VXBcIiwgXCJBcnJvd0Rvd25cIl07XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBMaWZlY3ljbGVcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgdGhpcy5zZXRVcEl0ZW1zKCk7XG4gIHRoaXMuc2V0VXBGaWx0ZXIoKTtcbiAgdGhpcy5lbWl0Q2FsY2l0ZUxpc3RDaGFuZ2UgPSBkZWJvdW5jZShpbnRlcm5hbENhbGNpdGVMaXN0Q2hhbmdlRXZlbnQuYmluZCh0aGlzKSwgMCk7XG4gIHRoaXMuZW1pdENhbGNpdGVMaXN0RmlsdGVyID0gZGVib3VuY2UoaW50ZXJuYWxDYWxjaXRlTGlzdEZpbHRlckV2ZW50LmJpbmQodGhpcyksIDApO1xufVxuZnVuY3Rpb24gaW5pdGlhbGl6ZU9ic2VydmVyKCkge1xuICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG59XG5mdW5jdGlvbiBjbGVhblVwT2JzZXJ2ZXIoKSB7XG4gIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgTGlzdGVuZXJzXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGNhbGNpdGVMaXN0SXRlbUNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgeyBzZWxlY3RlZFZhbHVlcyB9ID0gdGhpcztcbiAgY29uc3QgeyBpdGVtLCB2YWx1ZSwgc2VsZWN0ZWQsIHNoaWZ0UHJlc3NlZCB9ID0gZXZlbnQuZGV0YWlsO1xuICBpZiAoc2VsZWN0ZWQpIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiBzaGlmdFByZXNzZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0U2libGluZ3MoaXRlbSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgdGhpcy5kZXNlbGVjdFNpYmxpbmdJdGVtcyhpdGVtKTtcbiAgICB9XG4gICAgc2VsZWN0ZWRWYWx1ZXMuc2V0KHZhbHVlLCBpdGVtKTtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWxlY3RlZFZhbHVlcy5kZWxldGUodmFsdWUpO1xuICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHNoaWZ0UHJlc3NlZCkge1xuICAgICAgdGhpcy5zZWxlY3RTaWJsaW5ncyhpdGVtLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgdG9nZ2xlU2luZ2xlU2VsZWN0SXRlbVRhYmJpbmcoaXRlbSwgc2VsZWN0ZWQpO1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgZm9jdXNFbGVtZW50KGl0ZW0pO1xuICAgIH1cbiAgfVxuICB0aGlzLmxhc3RTZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICB0aGlzLmVtaXRDYWxjaXRlTGlzdENoYW5nZSgpO1xufVxuZnVuY3Rpb24gY2FsY2l0ZUludGVybmFsTGlzdEl0ZW1WYWx1ZUNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3Qgb2xkVmFsdWUgPSBldmVudC5kZXRhaWwub2xkVmFsdWU7XG4gIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy5zZWxlY3RlZFZhbHVlcztcbiAgaWYgKHNlbGVjdGVkVmFsdWVzLmhhcyhvbGRWYWx1ZSkpIHtcbiAgICBjb25zdCBpdGVtID0gc2VsZWN0ZWRWYWx1ZXMuZ2V0KG9sZFZhbHVlKTtcbiAgICBzZWxlY3RlZFZhbHVlcy5kZWxldGUob2xkVmFsdWUpO1xuICAgIHNlbGVjdGVkVmFsdWVzLnNldChldmVudC5kZXRhaWwubmV3VmFsdWUsIGl0ZW0pO1xuICB9XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vXG4vLyAgUHJpdmF0ZSBNZXRob2RzXG4vL1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIGlzVmFsaWROYXZpZ2F0aW9uS2V5KGtleSkge1xuICByZXR1cm4gISFTVVBQT1JURURfQVJST1dfS0VZUy5maW5kKChrKSA9PiBrID09PSBrZXkpO1xufVxuZnVuY3Rpb24gY2FsY2l0ZUxpc3RGb2N1c091dEhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgeyBlbCwgaXRlbXMsIG11bHRpcGxlLCBzZWxlY3RlZFZhbHVlcyB9ID0gdGhpcztcbiAgaWYgKG11bHRpcGxlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGZvY3VzZWRJbnNpZGUgPSBlbC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KTtcbiAgaWYgKGZvY3VzZWRJbnNpZGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZmlsdGVyT3V0RGlzYWJsZWQoaXRlbXMpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICB0b2dnbGVTaW5nbGVTZWxlY3RJdGVtVGFiYmluZyhpdGVtLCBzZWxlY3RlZFZhbHVlcy5zaXplID09PSAwID8gaXRlbS5jb250YWlucyhldmVudC50YXJnZXQpIHx8IGV2ZW50LnRhcmdldCA9PT0gaXRlbSA6IGl0ZW0uc2VsZWN0ZWQpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gIGNvbnN0IHsga2V5LCB0YXJnZXQgfSA9IGV2ZW50O1xuICBpZiAoIWlzVmFsaWROYXZpZ2F0aW9uS2V5KGtleSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBpdGVtcywgbXVsdGlwbGUsIHNlbGVjdGlvbkZvbGxvd3NGb2N1cyB9ID0gdGhpcztcbiAgY29uc3QgeyBsZW5ndGg6IHRvdGFsSXRlbXMgfSA9IGl0ZW1zO1xuICBjb25zdCBjdXJyZW50SW5kZXggPSBpdGVtcy5pbmRleE9mKHRhcmdldCk7XG4gIGlmICghdG90YWxJdGVtcyB8fCBjdXJyZW50SW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGluZGV4ID0gbW92ZUl0ZW1JbmRleCh0aGlzLCB0YXJnZXQsIGtleSA9PT0gXCJBcnJvd1VwXCIgPyBcInVwXCIgOiBcImRvd25cIik7XG4gIGNvbnN0IGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gIGl0ZW1zLmZvckVhY2goKGkpID0+IHRvZ2dsZVNpbmdsZVNlbGVjdEl0ZW1UYWJiaW5nKGksIGkgPT09IGl0ZW0pKTtcbiAgaWYgKCFtdWx0aXBsZSAmJiBzZWxlY3Rpb25Gb2xsb3dzRm9jdXMpIHtcbiAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuICBmb2N1c0VsZW1lbnQoaXRlbSk7XG59XG5mdW5jdGlvbiBtb3ZlSXRlbUluZGV4KGxpc3QsIGl0ZW0sIGRpcmVjdGlvbikge1xuICBjb25zdCB7IGl0ZW1zIH0gPSBsaXN0O1xuICBjb25zdCB7IGxlbmd0aDogdG90YWxJdGVtcyB9ID0gaXRlbXM7XG4gIGNvbnN0IGN1cnJlbnRJbmRleCA9IGl0ZW1zLmluZGV4T2YoaXRlbSk7XG4gIGNvbnN0IGRpcmVjdGlvbkZhY3RvciA9IGRpcmVjdGlvbiA9PT0gXCJ1cFwiID8gLTEgOiAxO1xuICBsZXQgbW92ZU9mZnNldCA9IDE7XG4gIGxldCBpbmRleCA9IGdldFJvdW5kUm9iaW5JbmRleChjdXJyZW50SW5kZXggKyBkaXJlY3Rpb25GYWN0b3IgKiBtb3ZlT2Zmc2V0KyssIHRvdGFsSXRlbXMpO1xuICBjb25zdCBmaXJzdE1vdmVkSW5kZXggPSBpbmRleDtcbiAgd2hpbGUgKGl0ZW1zW2luZGV4XS5kaXNhYmxlZCkge1xuICAgIGluZGV4ID0gZ2V0Um91bmRSb2JpbkluZGV4KGN1cnJlbnRJbmRleCArIGRpcmVjdGlvbkZhY3RvciAqIG1vdmVPZmZzZXQrKywgdG90YWxJdGVtcyk7XG4gICAgaWYgKGluZGV4ID09PSBmaXJzdE1vdmVkSW5kZXgpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5kZXg7XG59XG5mdW5jdGlvbiBnZXRJdGVtSW5kZXgobGlzdCwgaXRlbSkge1xuICBjb25zdCB7IGl0ZW1zIH0gPSBsaXN0O1xuICByZXR1cm4gaXRlbXMuaW5kZXhPZihpdGVtKTtcbn1cbmZ1bmN0aW9uIGZpbHRlck91dERpc2FibGVkKGl0ZW1zKSB7XG4gIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmRpc2FibGVkKTtcbn1cbmZ1bmN0aW9uIGludGVybmFsQ2FsY2l0ZUxpc3RGaWx0ZXJFdmVudCgpIHtcbiAgdGhpcy5jYWxjaXRlTGlzdEZpbHRlci5lbWl0KCk7XG59XG5mdW5jdGlvbiBpbnRlcm5hbENhbGNpdGVMaXN0Q2hhbmdlRXZlbnQoKSB7XG4gIHRoaXMuY2FsY2l0ZUxpc3RDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkVmFsdWVzKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUl0ZW0oZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgaXRlbSA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLnNlbGVjdGVkVmFsdWVzO1xuICBpZiAoaXRlbS5wYXJlbnRFbGVtZW50LnRhZ05hbWUgPT09IFwiQ0FMQ0lURS1QSUNLLUxJU1QtR1JPVVBcIiAmJiBpdGVtLnNsb3QgPT09IFNMT1RTJDIucGFyZW50SXRlbSkge1xuICAgIGl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICBBcnJheS5mcm9tKGl0ZW0ucGFyZW50RWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoaXRlbSkgPT4gc2VsZWN0ZWRWYWx1ZXMuZGVsZXRlKGl0ZW0udmFsdWUpKTtcbiAgfVxuICBlbHNlIHtcbiAgICBpdGVtLnJlbW92ZSgpO1xuICAgIHNlbGVjdGVkVmFsdWVzLmRlbGV0ZShpdGVtLnZhbHVlKTtcbiAgfVxuICB0aGlzLmVtaXRDYWxjaXRlTGlzdENoYW5nZSgpO1xufVxuZnVuY3Rpb24gdG9nZ2xlU2luZ2xlU2VsZWN0SXRlbVRhYmJpbmcoaXRlbSwgc2VsZWN0YWJsZSkge1xuICBpZiAoaXRlbS5kaXNhYmxlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyB1c2luZyBhdHRyaWJ1dGUgaW50ZW50aW9uYWxseVxuICBpZiAoc2VsZWN0YWJsZSkge1xuICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSB7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICB9XG59XG5hc3luYyBmdW5jdGlvbiBzZXRGb2N1cyhmb2N1c0lkKSB7XG4gIGlmICh0aGlzLmZpbHRlckVuYWJsZWQgJiYgZm9jdXNJZCA9PT0gXCJmaWx0ZXJcIikge1xuICAgIGF3YWl0IGZvY3VzRWxlbWVudCh0aGlzLmZpbHRlckVsKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBpdGVtcywgbXVsdGlwbGUsIHNlbGVjdGlvbkZvbGxvd3NGb2N1cyB9ID0gdGhpcztcbiAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobXVsdGlwbGUpIHtcbiAgICByZXR1cm4gZmlsdGVyT3V0RGlzYWJsZWQoaXRlbXMpWzBdPy5zZXRGb2N1cygpO1xuICB9XG4gIGNvbnN0IGZpbHRlcmVkID0gZmlsdGVyT3V0RGlzYWJsZWQoaXRlbXMpO1xuICBjb25zdCBmb2N1c1RhcmdldCA9IGZpbHRlcmVkLmZpbmQoKGl0ZW0pID0+IGl0ZW0uc2VsZWN0ZWQpIHx8IGZpbHRlcmVkWzBdO1xuICBpZiAoc2VsZWN0aW9uRm9sbG93c0ZvY3VzICYmIGZvY3VzVGFyZ2V0KSB7XG4gICAgZm9jdXNUYXJnZXQuc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG4gIHJldHVybiBmb2N1c1RhcmdldC5zZXRGb2N1cygpO1xufVxuZnVuY3Rpb24gc2V0VXBJdGVtcyh0YWdOYW1lKSB7XG4gIHRoaXMuaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKSk7XG4gIGxldCBoYXNTZWxlY3RlZCA9IGZhbHNlO1xuICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzO1xuICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5pY29uID0gdGhpcy5nZXRJY29uVHlwZSgpO1xuICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgaXRlbS5kZXNlbGVjdERpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRvZ2dsZVNpbmdsZVNlbGVjdEl0ZW1UYWJiaW5nKGl0ZW0sIGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgIGhhc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRvZ2dsZVNpbmdsZVNlbGVjdEl0ZW1UYWJiaW5nKGl0ZW0sIHRydWUpO1xuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcy5zZXQoaXRlbS52YWx1ZSwgaXRlbSk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgW2ZpcnN0XSA9IGl0ZW1zO1xuICBpZiAoIWhhc1NlbGVjdGVkICYmIGZpcnN0ICYmICFmaXJzdC5kaXNhYmxlZCkge1xuICAgIHRvZ2dsZVNpbmdsZVNlbGVjdEl0ZW1UYWJiaW5nKGZpcnN0LCB0cnVlKTtcbiAgfVxufVxuZnVuY3Rpb24gZGVzZWxlY3RSZW1vdmVkSXRlbXMoKSB7XG4gIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gdGhpcy5zZWxlY3RlZFZhbHVlcztcbiAgY29uc3QgaXRlbVZhbHVlcyA9IHRoaXMuaXRlbXMubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcbiAgc2VsZWN0ZWRWYWx1ZXMuZm9yRWFjaCgoc2VsZWN0ZWRJdGVtKSA9PiB7XG4gICAgaWYgKCFpdGVtVmFsdWVzLmluY2x1ZGVzKHNlbGVjdGVkSXRlbS52YWx1ZSkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMuZGVsZXRlKHNlbGVjdGVkSXRlbS52YWx1ZSk7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGRlc2VsZWN0U2libGluZ0l0ZW1zKGl0ZW0pIHtcbiAgdGhpcy5pdGVtcy5mb3JFYWNoKChjdXJyZW50SXRlbSkgPT4ge1xuICAgIGlmIChjdXJyZW50SXRlbS52YWx1ZSAhPT0gaXRlbS52YWx1ZSkge1xuICAgICAgY3VycmVudEl0ZW0udG9nZ2xlU2VsZWN0ZWQoZmFsc2UpO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRWYWx1ZXMuaGFzKGN1cnJlbnRJdGVtLnZhbHVlKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzLmRlbGV0ZShjdXJyZW50SXRlbS52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHNlbGVjdFNpYmxpbmdzKGl0ZW0sIGRlc2VsZWN0ID0gZmFsc2UpIHtcbiAgaWYgKCF0aGlzLmxhc3RTZWxlY3RlZEl0ZW0pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcztcbiAgY29uc3Qgc3RhcnQgPSBpdGVtcy5maW5kSW5kZXgoKGN1cnJlbnRJdGVtKSA9PiB7XG4gICAgcmV0dXJuIGN1cnJlbnRJdGVtLnZhbHVlID09PSB0aGlzLmxhc3RTZWxlY3RlZEl0ZW0udmFsdWU7XG4gIH0pO1xuICBjb25zdCBlbmQgPSBpdGVtcy5maW5kSW5kZXgoKGN1cnJlbnRJdGVtKSA9PiB7XG4gICAgcmV0dXJuIGN1cnJlbnRJdGVtLnZhbHVlID09PSBpdGVtLnZhbHVlO1xuICB9KTtcbiAgaXRlbXMuc2xpY2UoTWF0aC5taW4oc3RhcnQsIGVuZCksIE1hdGgubWF4KHN0YXJ0LCBlbmQpKS5mb3JFYWNoKChjdXJyZW50SXRlbSkgPT4ge1xuICAgIGN1cnJlbnRJdGVtLnRvZ2dsZVNlbGVjdGVkKCFkZXNlbGVjdCk7XG4gICAgaWYgKCFkZXNlbGVjdCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcy5zZXQoY3VycmVudEl0ZW0udmFsdWUsIGN1cnJlbnRJdGVtKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzLmRlbGV0ZShjdXJyZW50SXRlbS52YWx1ZSk7XG4gICAgfVxuICB9KTtcbn1cbmxldCBncm91cHM7XG5mdW5jdGlvbiBoYW5kbGVGaWx0ZXIoZW1pdCA9IGZhbHNlKSB7XG4gIGNvbnN0IHsgZmlsdGVyZWREYXRhLCBmaWx0ZXJUZXh0IH0gPSB0aGlzO1xuICBjb25zdCB2YWx1ZXMgPSBmaWx0ZXJlZERhdGEubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKTtcbiAgbGV0IGhhc1NlbGVjdGVkTWF0Y2ggPSBmYWxzZTtcbiAgaWYgKCFncm91cHMpIHtcbiAgICBncm91cHMgPSBuZXcgU2V0KCk7XG4gIH1cbiAgY29uc3QgbWF0Y2hlZEl0ZW1zID0gdGhpcy5pdGVtcz8uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgY29uc3QgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGdyb3VwZWQgPSBwYXJlbnQubWF0Y2hlcyhcImNhbGNpdGUtcGljay1saXN0LWdyb3VwXCIpO1xuICAgIGlmIChncm91cGVkKSB7XG4gICAgICBncm91cHMuYWRkKHBhcmVudCk7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoZXMgPSBmaWx0ZXJUZXh0ID8gdmFsdWVzLmluY2x1ZGVzKGl0ZW0udmFsdWUpIDogdHJ1ZTtcbiAgICBpdGVtLmhpZGRlbiA9ICFtYXRjaGVzO1xuICAgIGlmICghaGFzU2VsZWN0ZWRNYXRjaCkge1xuICAgICAgaGFzU2VsZWN0ZWRNYXRjaCA9IG1hdGNoZXMgJiYgaXRlbS5zZWxlY3RlZDtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH0pIHx8IFtdO1xuICBncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICBjb25zdCBoYXNBdExlYXN0T25lTWF0Y2ggPSBtYXRjaGVkSXRlbXMuc29tZSgoaXRlbSkgPT4gZ3JvdXAuY29udGFpbnMoaXRlbSkpO1xuICAgIGdyb3VwLmhpZGRlbiA9ICFoYXNBdExlYXN0T25lTWF0Y2g7XG4gICAgaWYgKCFoYXNBdExlYXN0T25lTWF0Y2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFyZW50SXRlbSA9IGdldFNsb3R0ZWQoZ3JvdXAsIFwicGFyZW50LWl0ZW1cIik7XG4gICAgaWYgKHBhcmVudEl0ZW0pIHtcbiAgICAgIHBhcmVudEl0ZW0uaGlkZGVuID0gZmFsc2U7XG4gICAgICBpZiAobWF0Y2hlZEl0ZW1zLmluY2x1ZGVzKHBhcmVudEl0ZW0pKSB7XG4gICAgICAgIEFycmF5LmZyb20oZ3JvdXAuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiAoY2hpbGQuaGlkZGVuID0gZmFsc2UpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBncm91cHMuY2xlYXIoKTtcbiAgaWYgKG1hdGNoZWRJdGVtcy5sZW5ndGggPiAwICYmICFoYXNTZWxlY3RlZE1hdGNoICYmICF0aGlzLm11bHRpcGxlKSB7XG4gICAgdG9nZ2xlU2luZ2xlU2VsZWN0SXRlbVRhYmJpbmcobWF0Y2hlZEl0ZW1zWzBdLCB0cnVlKTtcbiAgfVxuICB0aGlzLnNldEZpbHRlcmVkSXRlbXMobWF0Y2hlZEl0ZW1zKTtcbiAgaWYgKGVtaXQpIHtcbiAgICB0aGlzLmVtaXRDYWxjaXRlTGlzdEZpbHRlcigpO1xuICB9XG59XG5mdW5jdGlvbiBoYW5kbGVJbml0aWFsRmlsdGVyKCkge1xuICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gdGhpcy5maWx0ZXJFbD8uZmlsdGVyZWRJdGVtcztcbiAgaWYgKGZpbHRlcmVkSXRlbXMpIHtcbiAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkSXRlbXM7XG4gIH1cbiAgdGhpcy5oYW5kbGVGaWx0ZXIoKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUZpbHRlckV2ZW50KGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICBjb25zdCB7IGZpbHRlcmVkSXRlbXMsIHZhbHVlIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICB0aGlzLmZpbHRlclRleHQgPSB2YWx1ZTtcbiAgdGhpcy5maWx0ZXJlZERhdGEgPSBmaWx0ZXJlZEl0ZW1zO1xuICB0aGlzLmhhbmRsZUZpbHRlcih0cnVlKTtcbn1cbmZ1bmN0aW9uIGdldEl0ZW1EYXRhKCkge1xuICByZXR1cm4gdGhpcy5pdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXG4gICAgbWV0YWRhdGE6IGl0ZW0ubWV0YWRhdGEsXG4gICAgdmFsdWU6IGl0ZW0udmFsdWVcbiAgfSkpO1xufVxuXG5jb25zdCBDU1MkMSA9IHtcbiAgc3RpY2t5OiBcInN0aWNreS1wb3NcIlxufTtcbnZhciBJQ09OX1RZUEVTO1xuKGZ1bmN0aW9uIChJQ09OX1RZUEVTKSB7XG4gIElDT05fVFlQRVNbXCJjaXJjbGVcIl0gPSBcImNpcmNsZVwiO1xuICBJQ09OX1RZUEVTW1wic3F1YXJlXCJdID0gXCJzcXVhcmVcIjtcbiAgSUNPTl9UWVBFU1tcImdyaXBcIl0gPSBcImdyaXBcIjtcbn0pKElDT05fVFlQRVMgfHwgKElDT05fVFlQRVMgPSB7fSkpO1xuY29uc3QgU0xPVFMkMSA9IHtcbiAgbWVudUFjdGlvbnM6IFwibWVudS1hY3Rpb25zXCJcbn07XG5cbmNvbnN0IExpc3QgPSAoeyBwcm9wczogeyBkaXNhYmxlZCwgbG9hZGluZywgZmlsdGVyRW5hYmxlZCwgZGF0YUZvckZpbHRlciwgaGFuZGxlRmlsdGVyRXZlbnQsIGZpbHRlclBsYWNlaG9sZGVyLCBmaWx0ZXJUZXh0LCBzZXRGaWx0ZXJFbCwgZHJhZ0VuYWJsZWQsIHN0b3JlQXNzaXN0aXZlRWwgfSwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRTbG90ID0gaChcInNsb3RcIiwgbnVsbCk7XG4gIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1idXN5XCI6IHRvQXJpYUJvb2xlYW4obG9hZGluZyksIHJvbGU6IFwibWVudVwiLCAuLi5yZXN0IH0sXG4gICAgaChcInNlY3Rpb25cIiwgbnVsbCxcbiAgICAgIGRyYWdFbmFibGVkID8gKGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxpdmVcIjogXCJhc3NlcnRpdmVcIiwgY2xhc3M6IFwiYXNzaXN0aXZlLXRleHRcIiwgXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgICByZWY6IHN0b3JlQXNzaXN0aXZlRWwgfSkpIDogbnVsbCxcbiAgICAgIGgoXCJoZWFkZXJcIiwgeyBjbGFzczogeyBbQ1NTJDEuc3RpY2t5XTogdHJ1ZSB9IH0sXG4gICAgICAgIGZpbHRlckVuYWJsZWQgPyAoaChcImNhbGNpdGUtZmlsdGVyXCIsIHsgXCJhcmlhLWxhYmVsXCI6IGZpbHRlclBsYWNlaG9sZGVyLCBkaXNhYmxlZDogbG9hZGluZyB8fCBkaXNhYmxlZCwgaXRlbXM6IGRhdGFGb3JGaWx0ZXIsIG9uQ2FsY2l0ZUZpbHRlckNoYW5nZTogaGFuZGxlRmlsdGVyRXZlbnQsIHBsYWNlaG9sZGVyOiBmaWx0ZXJQbGFjZWhvbGRlciwgdmFsdWU6IGZpbHRlclRleHQsIFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgICAgIHJlZjogc2V0RmlsdGVyRWwgfSkpIDogbnVsbCxcbiAgICAgICAgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUyQxLm1lbnVBY3Rpb25zIH0pKSxcbiAgICAgIGxvYWRpbmcgPyBoKFwiY2FsY2l0ZS1zY3JpbVwiLCB7IGxvYWRpbmc6IGxvYWRpbmcgfSkgOiBudWxsLFxuICAgICAgZGVmYXVsdFNsb3QpKSk7XG59O1xuXG5jb25zdCBDU1MgPSB7XG4gIGFjdGlvbnM6IFwiYWN0aW9uc1wiLFxuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtLWVuZFwiLFxuICBhY3Rpb25zU3RhcnQ6IFwiYWN0aW9ucy0tc3RhcnRcIixcbiAgZGVzY3JpcHRpb246IFwiZGVzY3JpcHRpb25cIixcbiAgaGFuZGxlOiBcImhhbmRsZVwiLFxuICBoYW5kbGVBY3RpdmF0ZWQ6IFwiaGFuZGxlLS1hY3RpdmF0ZWRcIixcbiAgaGlnaGxpZ2h0OiBcImhpZ2hsaWdodFwiLFxuICBpY29uOiBcImljb25cIixcbiAgaWNvbkRvdDogXCJpY29uLWRvdFwiLFxuICBsYWJlbDogXCJsYWJlbFwiLFxuICByZW1vdmU6IFwicmVtb3ZlXCIsXG4gIHRpdGxlOiBcInRpdGxlXCIsXG4gIHRleHRDb250YWluZXI6IFwidGV4dC1jb250YWluZXJcIlxufTtcbmNvbnN0IElDT05TID0ge1xuICBjaGVja2VkOiBcImNoZWNrXCIsXG4gIHJlbW92ZTogXCJ4XCJcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgYWN0aW9uc0VuZDogXCJhY3Rpb25zLWVuZFwiLFxuICBhY3Rpb25zU3RhcnQ6IFwiYWN0aW9ucy1zdGFydFwiXG59O1xuXG5leHBvcnQgeyBDU1MgYXMgQywgSUNPTl9UWVBFUyBhcyBJLCBMaXN0IGFzIEwsIFNMT1RTIGFzIFMsIGRlc2VsZWN0U2libGluZ0l0ZW1zIGFzIGEsIGhhbmRsZUZpbHRlckV2ZW50IGFzIGIsIGdldEl0ZW1EYXRhIGFzIGMsIGRlc2VsZWN0UmVtb3ZlZEl0ZW1zIGFzIGQsIG1vdmVJdGVtSW5kZXggYXMgZSwgaW5pdGlhbGl6ZU9ic2VydmVyIGFzIGYsIGdldEl0ZW1JbmRleCBhcyBnLCBoYW5kbGVGaWx0ZXIgYXMgaCwgaW5pdGlhbGl6ZSBhcyBpLCBoYW5kbGVJbml0aWFsRmlsdGVyIGFzIGosIGtleURvd25IYW5kbGVyIGFzIGssIGNsZWFuVXBPYnNlcnZlciBhcyBsLCBtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2sgYXMgbSwgY2FsY2l0ZUxpc3RGb2N1c091dEhhbmRsZXIgYXMgbiwgY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlSGFuZGxlciBhcyBvLCBjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVZhbHVlQ2hhbmdlSGFuZGxlciBhcyBwLCBzZXRVcEl0ZW1zIGFzIHEsIHJlbW92ZUl0ZW0gYXMgciwgc2VsZWN0U2libGluZ3MgYXMgcywgc2V0Rm9jdXMgYXMgdCwgU0xPVFMkMiBhcyB1LCBDU1MkMiBhcyB2LCBJQ09OUyBhcyB3IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=