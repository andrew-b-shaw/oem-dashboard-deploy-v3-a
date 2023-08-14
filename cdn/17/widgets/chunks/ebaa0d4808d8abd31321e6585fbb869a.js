"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_conditionalSlot-02722e44_js-node_module-dcc96e"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/array-e86a0605.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/array-e86a0605.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getRoundRobinIndex)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function getRoundRobinIndex(index, total) {
  return (index + total) % total;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-02722e44.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-02722e44.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectConditionalSlotComponent),
/* harmony export */   "d": () => (/* binding */ disconnectConditionalSlotComponent)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
    mutationObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_1__.c)("mutation", processMutations);
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.f)(target);
  });
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

/***/ "./node_modules/@esri/calcite-components/dist/esm/resources-d76cb660.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/resources-d76cb660.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _array_e86a0605_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array-e86a0605.js */ "./node_modules/@esri/calcite-components/dist/esm/array-e86a0605.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debounce-b9072422.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-b9072422.js");
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
  this.emitCalciteListChange = (0,_debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_2__.d)(internalCalciteListChangeEvent.bind(this), 0);
  this.emitCalciteListFilter = (0,_debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_2__.d)(internalCalciteListFilterEvent.bind(this), 0);
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
      (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.f)(item);
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
  (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.f)(item);
}
function moveItemIndex(list, item, direction) {
  const { items } = list;
  const { length: totalItems } = items;
  const currentIndex = items.indexOf(item);
  const directionFactor = direction === "up" ? -1 : 1;
  let moveOffset = 1;
  let index = (0,_array_e86a0605_js__WEBPACK_IMPORTED_MODULE_0__.g)(currentIndex + directionFactor * moveOffset++, totalItems);
  const firstMovedIndex = index;
  while (items[index].disabled) {
    index = (0,_array_e86a0605_js__WEBPACK_IMPORTED_MODULE_0__.g)(currentIndex + directionFactor * moveOffset++, totalItems);
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
    await (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.filterEl);
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
    const parentItem = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.g)(group, "parent-item");
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
  const defaultSlot = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_3__.h)("slot", null);
  return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_3__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_3__.H, { "aria-busy": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(loading), role: "menu", ...rest },
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_3__.h)("section", null,
      dragEnabled ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_3__.h)("span", { "aria-live": "assertive", class: "assistive-text", 
        // eslint-disable-next-line react/jsx-sort-props
        ref: storeAssistiveEl })) : null,
      (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_3__.h)("header", { class: { [CSS$1.sticky]: true } },
        filterEnabled ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_3__.h)("calcite-filter", { "aria-label": filterPlaceholder, disabled: loading || disabled, items: dataForFilter, onCalciteFilterChange: handleFilterEvent, placeholder: filterPlaceholder, value: filterText, 
          // eslint-disable-next-line react/jsx-sort-props
          ref: setFilterEl })) : null,
        (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_3__.h)("slot", { name: SLOTS$1.menuActions })),
      loading ? (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_3__.h)("calcite-scrim", { loading: loading }) : null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZWJhYTBkNDgwOGQ4YWJkMzEzMjFlNjU4NWZiYjg2OWEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1RDtBQUNPOztBQUU5RDtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUF3RTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5REFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RUFBd0U7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLElBQUkscURBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRXlGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRHRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFLO0FBQ2Y7QUFDQTtBQUNBLDBCQUEwQixzREFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9hcnJheS1lODZhMDYwNS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jb25kaXRpb25hbFNsb3QtMDI3MjJlNDQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vbG9hZGFibGUtYWYxNDZmZDUuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vcmVzb3VyY2VzLWQ3NmNiNjYwLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3Q5bi1hM2UxMjQyMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuZnVuY3Rpb24gZ2V0Um91bmRSb2JpbkluZGV4KGluZGV4LCB0b3RhbCkge1xuICByZXR1cm4gKGluZGV4ICsgdG90YWwpICUgdG90YWw7XG59XG5cbmV4cG9ydCB7IGdldFJvdW5kUm9iaW5JbmRleCBhcyBnIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgZiBhcyBmb3JjZVVwZGF0ZSB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzJztcblxuY29uc3Qgb2JzZXJ2ZWQgPSBuZXcgU2V0KCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudC5lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBvYnNlcnZlZC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50XSBvZiBvYnNlcnZlZC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBmb3JjZVVwZGF0ZSh0YXJnZXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBzdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyBcInNldFVwTG9hZGFibGVDb21wb25lbnRcIiBhbmQgXCJzZXRDb21wb25lbnRMb2FkZWRcIiB0byBiZSBjYWxsZWQgZmlyc3QuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHByb21pc2VNYXAuZ2V0KGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IHNldENvbXBvbmVudExvYWRlZCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYywgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBzIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgZyBhcyBnZXRSb3VuZFJvYmluSW5kZXggfSBmcm9tICcuL2FycmF5LWU4NmEwNjA1LmpzJztcbmltcG9ydCB7IGYgYXMgZm9jdXNFbGVtZW50LCBnIGFzIGdldFNsb3R0ZWQsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCB7IGQgYXMgZGVib3VuY2UgfSBmcm9tICcuL2RlYm91bmNlLWI5MDcyNDIyLmpzJztcbmltcG9ydCB7IGgsIEggYXMgSG9zdCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuXG5jb25zdCBDU1MkMiA9IHtcbiAgaGVhZGluZzogXCJoZWFkaW5nXCIsXG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgaW5kZW50ZWQ6IFwiY29udGFpbmVyLS1pbmRlbnRlZFwiXG59O1xuY29uc3QgU0xPVFMkMiA9IHtcbiAgcGFyZW50SXRlbTogXCJwYXJlbnQtaXRlbVwiXG59O1xuXG5mdW5jdGlvbiBtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2soKSB7XG4gIHRoaXMuc2V0VXBJdGVtcygpO1xuICB0aGlzLnNldFVwRmlsdGVyKCk7XG4gIHRoaXMuZGVzZWxlY3RSZW1vdmVkSXRlbXMoKTtcbn1cbmNvbnN0IFNVUFBPUlRFRF9BUlJPV19LRVlTID0gW1wiQXJyb3dVcFwiLCBcIkFycm93RG93blwiXTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vL1xuLy8gIExpZmVjeWNsZVxuLy9cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICB0aGlzLnNldFVwSXRlbXMoKTtcbiAgdGhpcy5zZXRVcEZpbHRlcigpO1xuICB0aGlzLmVtaXRDYWxjaXRlTGlzdENoYW5nZSA9IGRlYm91bmNlKGludGVybmFsQ2FsY2l0ZUxpc3RDaGFuZ2VFdmVudC5iaW5kKHRoaXMpLCAwKTtcbiAgdGhpcy5lbWl0Q2FsY2l0ZUxpc3RGaWx0ZXIgPSBkZWJvdW5jZShpbnRlcm5hbENhbGNpdGVMaXN0RmlsdGVyRXZlbnQuYmluZCh0aGlzKSwgMCk7XG59XG5mdW5jdGlvbiBpbml0aWFsaXplT2JzZXJ2ZXIoKSB7XG4gIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbn1cbmZ1bmN0aW9uIGNsZWFuVXBPYnNlcnZlcigpIHtcbiAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBMaXN0ZW5lcnNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gY2FsY2l0ZUxpc3RJdGVtQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICBjb25zdCB7IHNlbGVjdGVkVmFsdWVzIH0gPSB0aGlzO1xuICBjb25zdCB7IGl0ZW0sIHZhbHVlLCBzZWxlY3RlZCwgc2hpZnRQcmVzc2VkIH0gPSBldmVudC5kZXRhaWw7XG4gIGlmIChzZWxlY3RlZCkge1xuICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHNoaWZ0UHJlc3NlZCkge1xuICAgICAgdGhpcy5zZWxlY3RTaWJsaW5ncyhpdGVtKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICB0aGlzLmRlc2VsZWN0U2libGluZ0l0ZW1zKGl0ZW0pO1xuICAgIH1cbiAgICBzZWxlY3RlZFZhbHVlcy5zZXQodmFsdWUsIGl0ZW0pO1xuICB9XG4gIGVsc2Uge1xuICAgIHNlbGVjdGVkVmFsdWVzLmRlbGV0ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgc2hpZnRQcmVzc2VkKSB7XG4gICAgICB0aGlzLnNlbGVjdFNpYmxpbmdzKGl0ZW0sIHRydWUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICB0b2dnbGVTaW5nbGVTZWxlY3RJdGVtVGFiYmluZyhpdGVtLCBzZWxlY3RlZCk7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICBmb2N1c0VsZW1lbnQoaXRlbSk7XG4gICAgfVxuICB9XG4gIHRoaXMubGFzdFNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gIHRoaXMuZW1pdENhbGNpdGVMaXN0Q2hhbmdlKCk7XG59XG5mdW5jdGlvbiBjYWxjaXRlSW50ZXJuYWxMaXN0SXRlbVZhbHVlQ2hhbmdlSGFuZGxlcihldmVudCkge1xuICBjb25zdCBvbGRWYWx1ZSA9IGV2ZW50LmRldGFpbC5vbGRWYWx1ZTtcbiAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLnNlbGVjdGVkVmFsdWVzO1xuICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaGFzKG9sZFZhbHVlKSkge1xuICAgIGNvbnN0IGl0ZW0gPSBzZWxlY3RlZFZhbHVlcy5nZXQob2xkVmFsdWUpO1xuICAgIHNlbGVjdGVkVmFsdWVzLmRlbGV0ZShvbGRWYWx1ZSk7XG4gICAgc2VsZWN0ZWRWYWx1ZXMuc2V0KGV2ZW50LmRldGFpbC5uZXdWYWx1ZSwgaXRlbSk7XG4gIH1cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy9cbi8vICBQcml2YXRlIE1ldGhvZHNcbi8vXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZnVuY3Rpb24gaXNWYWxpZE5hdmlnYXRpb25LZXkoa2V5KSB7XG4gIHJldHVybiAhIVNVUFBPUlRFRF9BUlJPV19LRVlTLmZpbmQoKGspID0+IGsgPT09IGtleSk7XG59XG5mdW5jdGlvbiBjYWxjaXRlTGlzdEZvY3VzT3V0SGFuZGxlcihldmVudCkge1xuICBjb25zdCB7IGVsLCBpdGVtcywgbXVsdGlwbGUsIHNlbGVjdGVkVmFsdWVzIH0gPSB0aGlzO1xuICBpZiAobXVsdGlwbGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZm9jdXNlZEluc2lkZSA9IGVsLmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpO1xuICBpZiAoZm9jdXNlZEluc2lkZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBmaWx0ZXJPdXREaXNhYmxlZChpdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIHRvZ2dsZVNpbmdsZVNlbGVjdEl0ZW1UYWJiaW5nKGl0ZW0sIHNlbGVjdGVkVmFsdWVzLnNpemUgPT09IDAgPyBpdGVtLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgfHwgZXZlbnQudGFyZ2V0ID09PSBpdGVtIDogaXRlbS5zZWxlY3RlZCk7XG4gIH0pO1xufVxuZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgeyBrZXksIHRhcmdldCB9ID0gZXZlbnQ7XG4gIGlmICghaXNWYWxpZE5hdmlnYXRpb25LZXkoa2V5KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGl0ZW1zLCBtdWx0aXBsZSwgc2VsZWN0aW9uRm9sbG93c0ZvY3VzIH0gPSB0aGlzO1xuICBjb25zdCB7IGxlbmd0aDogdG90YWxJdGVtcyB9ID0gaXRlbXM7XG4gIGNvbnN0IGN1cnJlbnRJbmRleCA9IGl0ZW1zLmluZGV4T2YodGFyZ2V0KTtcbiAgaWYgKCF0b3RhbEl0ZW1zIHx8IGN1cnJlbnRJbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5kZXggPSBtb3ZlSXRlbUluZGV4KHRoaXMsIHRhcmdldCwga2V5ID09PSBcIkFycm93VXBcIiA/IFwidXBcIiA6IFwiZG93blwiKTtcbiAgY29uc3QgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgaXRlbXMuZm9yRWFjaCgoaSkgPT4gdG9nZ2xlU2luZ2xlU2VsZWN0SXRlbVRhYmJpbmcoaSwgaSA9PT0gaXRlbSkpO1xuICBpZiAoIW11bHRpcGxlICYmIHNlbGVjdGlvbkZvbGxvd3NGb2N1cykge1xuICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG4gIGZvY3VzRWxlbWVudChpdGVtKTtcbn1cbmZ1bmN0aW9uIG1vdmVJdGVtSW5kZXgobGlzdCwgaXRlbSwgZGlyZWN0aW9uKSB7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IGxpc3Q7XG4gIGNvbnN0IHsgbGVuZ3RoOiB0b3RhbEl0ZW1zIH0gPSBpdGVtcztcbiAgY29uc3QgY3VycmVudEluZGV4ID0gaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgY29uc3QgZGlyZWN0aW9uRmFjdG9yID0gZGlyZWN0aW9uID09PSBcInVwXCIgPyAtMSA6IDE7XG4gIGxldCBtb3ZlT2Zmc2V0ID0gMTtcbiAgbGV0IGluZGV4ID0gZ2V0Um91bmRSb2JpbkluZGV4KGN1cnJlbnRJbmRleCArIGRpcmVjdGlvbkZhY3RvciAqIG1vdmVPZmZzZXQrKywgdG90YWxJdGVtcyk7XG4gIGNvbnN0IGZpcnN0TW92ZWRJbmRleCA9IGluZGV4O1xuICB3aGlsZSAoaXRlbXNbaW5kZXhdLmRpc2FibGVkKSB7XG4gICAgaW5kZXggPSBnZXRSb3VuZFJvYmluSW5kZXgoY3VycmVudEluZGV4ICsgZGlyZWN0aW9uRmFjdG9yICogbW92ZU9mZnNldCsrLCB0b3RhbEl0ZW1zKTtcbiAgICBpZiAoaW5kZXggPT09IGZpcnN0TW92ZWRJbmRleCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmRleDtcbn1cbmZ1bmN0aW9uIGdldEl0ZW1JbmRleChsaXN0LCBpdGVtKSB7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IGxpc3Q7XG4gIHJldHVybiBpdGVtcy5pbmRleE9mKGl0ZW0pO1xufVxuZnVuY3Rpb24gZmlsdGVyT3V0RGlzYWJsZWQoaXRlbXMpIHtcbiAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gIWl0ZW0uZGlzYWJsZWQpO1xufVxuZnVuY3Rpb24gaW50ZXJuYWxDYWxjaXRlTGlzdEZpbHRlckV2ZW50KCkge1xuICB0aGlzLmNhbGNpdGVMaXN0RmlsdGVyLmVtaXQoKTtcbn1cbmZ1bmN0aW9uIGludGVybmFsQ2FsY2l0ZUxpc3RDaGFuZ2VFdmVudCgpIHtcbiAgdGhpcy5jYWxjaXRlTGlzdENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZXMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlSXRlbShldmVudCkge1xuICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCBzZWxlY3RlZFZhbHVlcyA9IHRoaXMuc2VsZWN0ZWRWYWx1ZXM7XG4gIGlmIChpdGVtLnBhcmVudEVsZW1lbnQudGFnTmFtZSA9PT0gXCJDQUxDSVRFLVBJQ0stTElTVC1HUk9VUFwiICYmIGl0ZW0uc2xvdCA9PT0gU0xPVFMkMi5wYXJlbnRJdGVtKSB7XG4gICAgaXRlbS5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIEFycmF5LmZyb20oaXRlbS5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChpdGVtKSA9PiBzZWxlY3RlZFZhbHVlcy5kZWxldGUoaXRlbS52YWx1ZSkpO1xuICB9XG4gIGVsc2Uge1xuICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgc2VsZWN0ZWRWYWx1ZXMuZGVsZXRlKGl0ZW0udmFsdWUpO1xuICB9XG4gIHRoaXMuZW1pdENhbGNpdGVMaXN0Q2hhbmdlKCk7XG59XG5mdW5jdGlvbiB0b2dnbGVTaW5nbGVTZWxlY3RJdGVtVGFiYmluZyhpdGVtLCBzZWxlY3RhYmxlKSB7XG4gIGlmIChpdGVtLmRpc2FibGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHVzaW5nIGF0dHJpYnV0ZSBpbnRlbnRpb25hbGx5XG4gIGlmIChzZWxlY3RhYmxlKSB7XG4gICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKTtcbiAgfVxuICBlbHNlIHtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIHNldEZvY3VzKGZvY3VzSWQpIHtcbiAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCAmJiBmb2N1c0lkID09PSBcImZpbHRlclwiKSB7XG4gICAgYXdhaXQgZm9jdXNFbGVtZW50KHRoaXMuZmlsdGVyRWwpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGl0ZW1zLCBtdWx0aXBsZSwgc2VsZWN0aW9uRm9sbG93c0ZvY3VzIH0gPSB0aGlzO1xuICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtdWx0aXBsZSkge1xuICAgIHJldHVybiBmaWx0ZXJPdXREaXNhYmxlZChpdGVtcylbMF0/LnNldEZvY3VzKCk7XG4gIH1cbiAgY29uc3QgZmlsdGVyZWQgPSBmaWx0ZXJPdXREaXNhYmxlZChpdGVtcyk7XG4gIGNvbnN0IGZvY3VzVGFyZ2V0ID0gZmlsdGVyZWQuZmluZCgoaXRlbSkgPT4gaXRlbS5zZWxlY3RlZCkgfHwgZmlsdGVyZWRbMF07XG4gIGlmIChzZWxlY3Rpb25Gb2xsb3dzRm9jdXMgJiYgZm9jdXNUYXJnZXQpIHtcbiAgICBmb2N1c1RhcmdldC5zZWxlY3RlZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGZvY3VzVGFyZ2V0LnNldEZvY3VzKCk7XG59XG5mdW5jdGlvbiBzZXRVcEl0ZW1zKHRhZ05hbWUpIHtcbiAgdGhpcy5pdGVtcyA9IEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKHRhZ05hbWUpKTtcbiAgbGV0IGhhc1NlbGVjdGVkID0gZmFsc2U7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXM7XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmljb24gPSB0aGlzLmdldEljb25UeXBlKCk7XG4gICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICBpdGVtLmRlc2VsZWN0RGlzYWJsZWQgPSB0cnVlO1xuICAgICAgdG9nZ2xlU2luZ2xlU2VsZWN0SXRlbVRhYmJpbmcoaXRlbSwgZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoaXRlbS5zZWxlY3RlZCkge1xuICAgICAgaGFzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgdG9nZ2xlU2luZ2xlU2VsZWN0SXRlbVRhYmJpbmcoaXRlbSwgdHJ1ZSk7XG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzLnNldChpdGVtLnZhbHVlLCBpdGVtKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBbZmlyc3RdID0gaXRlbXM7XG4gIGlmICghaGFzU2VsZWN0ZWQgJiYgZmlyc3QgJiYgIWZpcnN0LmRpc2FibGVkKSB7XG4gICAgdG9nZ2xlU2luZ2xlU2VsZWN0SXRlbVRhYmJpbmcoZmlyc3QsIHRydWUpO1xuICB9XG59XG5mdW5jdGlvbiBkZXNlbGVjdFJlbW92ZWRJdGVtcygpIHtcbiAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLnNlbGVjdGVkVmFsdWVzO1xuICBjb25zdCBpdGVtVmFsdWVzID0gdGhpcy5pdGVtcy5tYXAoKHsgdmFsdWUgfSkgPT4gdmFsdWUpO1xuICBzZWxlY3RlZFZhbHVlcy5mb3JFYWNoKChzZWxlY3RlZEl0ZW0pID0+IHtcbiAgICBpZiAoIWl0ZW1WYWx1ZXMuaW5jbHVkZXMoc2VsZWN0ZWRJdGVtLnZhbHVlKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcy5kZWxldGUoc2VsZWN0ZWRJdGVtLnZhbHVlKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gZGVzZWxlY3RTaWJsaW5nSXRlbXMoaXRlbSkge1xuICB0aGlzLml0ZW1zLmZvckVhY2goKGN1cnJlbnRJdGVtKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRJdGVtLnZhbHVlICE9PSBpdGVtLnZhbHVlKSB7XG4gICAgICBjdXJyZW50SXRlbS50b2dnbGVTZWxlY3RlZChmYWxzZSk7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFZhbHVlcy5oYXMoY3VycmVudEl0ZW0udmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMuZGVsZXRlKGN1cnJlbnRJdGVtLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gc2VsZWN0U2libGluZ3MoaXRlbSwgZGVzZWxlY3QgPSBmYWxzZSkge1xuICBpZiAoIXRoaXMubGFzdFNlbGVjdGVkSXRlbSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzO1xuICBjb25zdCBzdGFydCA9IGl0ZW1zLmZpbmRJbmRleCgoY3VycmVudEl0ZW0pID0+IHtcbiAgICByZXR1cm4gY3VycmVudEl0ZW0udmFsdWUgPT09IHRoaXMubGFzdFNlbGVjdGVkSXRlbS52YWx1ZTtcbiAgfSk7XG4gIGNvbnN0IGVuZCA9IGl0ZW1zLmZpbmRJbmRleCgoY3VycmVudEl0ZW0pID0+IHtcbiAgICByZXR1cm4gY3VycmVudEl0ZW0udmFsdWUgPT09IGl0ZW0udmFsdWU7XG4gIH0pO1xuICBpdGVtcy5zbGljZShNYXRoLm1pbihzdGFydCwgZW5kKSwgTWF0aC5tYXgoc3RhcnQsIGVuZCkpLmZvckVhY2goKGN1cnJlbnRJdGVtKSA9PiB7XG4gICAgY3VycmVudEl0ZW0udG9nZ2xlU2VsZWN0ZWQoIWRlc2VsZWN0KTtcbiAgICBpZiAoIWRlc2VsZWN0KSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWVzLnNldChjdXJyZW50SXRlbS52YWx1ZSwgY3VycmVudEl0ZW0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXMuZGVsZXRlKGN1cnJlbnRJdGVtLnZhbHVlKTtcbiAgICB9XG4gIH0pO1xufVxubGV0IGdyb3VwcztcbmZ1bmN0aW9uIGhhbmRsZUZpbHRlcihlbWl0ID0gZmFsc2UpIHtcbiAgY29uc3QgeyBmaWx0ZXJlZERhdGEsIGZpbHRlclRleHQgfSA9IHRoaXM7XG4gIGNvbnN0IHZhbHVlcyA9IGZpbHRlcmVkRGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udmFsdWUpO1xuICBsZXQgaGFzU2VsZWN0ZWRNYXRjaCA9IGZhbHNlO1xuICBpZiAoIWdyb3Vwcykge1xuICAgIGdyb3VwcyA9IG5ldyBTZXQoKTtcbiAgfVxuICBjb25zdCBtYXRjaGVkSXRlbXMgPSB0aGlzLml0ZW1zPy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBpdGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgZ3JvdXBlZCA9IHBhcmVudC5tYXRjaGVzKFwiY2FsY2l0ZS1waWNrLWxpc3QtZ3JvdXBcIik7XG4gICAgaWYgKGdyb3VwZWQpIHtcbiAgICAgIGdyb3Vwcy5hZGQocGFyZW50KTtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hlcyA9IGZpbHRlclRleHQgPyB2YWx1ZXMuaW5jbHVkZXMoaXRlbS52YWx1ZSkgOiB0cnVlO1xuICAgIGl0ZW0uaGlkZGVuID0gIW1hdGNoZXM7XG4gICAgaWYgKCFoYXNTZWxlY3RlZE1hdGNoKSB7XG4gICAgICBoYXNTZWxlY3RlZE1hdGNoID0gbWF0Y2hlcyAmJiBpdGVtLnNlbGVjdGVkO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfSkgfHwgW107XG4gIGdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgIGNvbnN0IGhhc0F0TGVhc3RPbmVNYXRjaCA9IG1hdGNoZWRJdGVtcy5zb21lKChpdGVtKSA9PiBncm91cC5jb250YWlucyhpdGVtKSk7XG4gICAgZ3JvdXAuaGlkZGVuID0gIWhhc0F0TGVhc3RPbmVNYXRjaDtcbiAgICBpZiAoIWhhc0F0TGVhc3RPbmVNYXRjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXJlbnRJdGVtID0gZ2V0U2xvdHRlZChncm91cCwgXCJwYXJlbnQtaXRlbVwiKTtcbiAgICBpZiAocGFyZW50SXRlbSkge1xuICAgICAgcGFyZW50SXRlbS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIGlmIChtYXRjaGVkSXRlbXMuaW5jbHVkZXMocGFyZW50SXRlbSkpIHtcbiAgICAgICAgQXJyYXkuZnJvbShncm91cC5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQpID0+IChjaGlsZC5oaWRkZW4gPSBmYWxzZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGdyb3Vwcy5jbGVhcigpO1xuICBpZiAobWF0Y2hlZEl0ZW1zLmxlbmd0aCA+IDAgJiYgIWhhc1NlbGVjdGVkTWF0Y2ggJiYgIXRoaXMubXVsdGlwbGUpIHtcbiAgICB0b2dnbGVTaW5nbGVTZWxlY3RJdGVtVGFiYmluZyhtYXRjaGVkSXRlbXNbMF0sIHRydWUpO1xuICB9XG4gIHRoaXMuc2V0RmlsdGVyZWRJdGVtcyhtYXRjaGVkSXRlbXMpO1xuICBpZiAoZW1pdCkge1xuICAgIHRoaXMuZW1pdENhbGNpdGVMaXN0RmlsdGVyKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZUluaXRpYWxGaWx0ZXIoKSB7XG4gIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlckVsPy5maWx0ZXJlZEl0ZW1zO1xuICBpZiAoZmlsdGVyZWRJdGVtcykge1xuICAgIHRoaXMuZmlsdGVyZWREYXRhID0gZmlsdGVyZWRJdGVtcztcbiAgfVxuICB0aGlzLmhhbmRsZUZpbHRlcigpO1xufVxuZnVuY3Rpb24gaGFuZGxlRmlsdGVyRXZlbnQoZXZlbnQpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGNvbnN0IHsgZmlsdGVyZWRJdGVtcywgdmFsdWUgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gIHRoaXMuZmlsdGVyVGV4dCA9IHZhbHVlO1xuICB0aGlzLmZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkSXRlbXM7XG4gIHRoaXMuaGFuZGxlRmlsdGVyKHRydWUpO1xufVxuZnVuY3Rpb24gZ2V0SXRlbURhdGEoKSB7XG4gIHJldHVybiB0aGlzLml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcbiAgICBtZXRhZGF0YTogaXRlbS5tZXRhZGF0YSxcbiAgICB2YWx1ZTogaXRlbS52YWx1ZVxuICB9KSk7XG59XG5cbmNvbnN0IENTUyQxID0ge1xuICBzdGlja3k6IFwic3RpY2t5LXBvc1wiXG59O1xudmFyIElDT05fVFlQRVM7XG4oZnVuY3Rpb24gKElDT05fVFlQRVMpIHtcbiAgSUNPTl9UWVBFU1tcImNpcmNsZVwiXSA9IFwiY2lyY2xlXCI7XG4gIElDT05fVFlQRVNbXCJzcXVhcmVcIl0gPSBcInNxdWFyZVwiO1xuICBJQ09OX1RZUEVTW1wiZ3JpcFwiXSA9IFwiZ3JpcFwiO1xufSkoSUNPTl9UWVBFUyB8fCAoSUNPTl9UWVBFUyA9IHt9KSk7XG5jb25zdCBTTE9UUyQxID0ge1xuICBtZW51QWN0aW9uczogXCJtZW51LWFjdGlvbnNcIlxufTtcblxuY29uc3QgTGlzdCA9ICh7IHByb3BzOiB7IGRpc2FibGVkLCBsb2FkaW5nLCBmaWx0ZXJFbmFibGVkLCBkYXRhRm9yRmlsdGVyLCBoYW5kbGVGaWx0ZXJFdmVudCwgZmlsdGVyUGxhY2Vob2xkZXIsIGZpbHRlclRleHQsIHNldEZpbHRlckVsLCBkcmFnRW5hYmxlZCwgc3RvcmVBc3Npc3RpdmVFbCB9LCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3QgZGVmYXVsdFNsb3QgPSBoKFwic2xvdFwiLCBudWxsKTtcbiAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWJ1c3lcIjogdG9BcmlhQm9vbGVhbihsb2FkaW5nKSwgcm9sZTogXCJtZW51XCIsIC4uLnJlc3QgfSxcbiAgICBoKFwic2VjdGlvblwiLCBudWxsLFxuICAgICAgZHJhZ0VuYWJsZWQgPyAoaChcInNwYW5cIiwgeyBcImFyaWEtbGl2ZVwiOiBcImFzc2VydGl2ZVwiLCBjbGFzczogXCJhc3Npc3RpdmUtdGV4dFwiLCBcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICAgIHJlZjogc3RvcmVBc3Npc3RpdmVFbCB9KSkgOiBudWxsLFxuICAgICAgaChcImhlYWRlclwiLCB7IGNsYXNzOiB7IFtDU1MkMS5zdGlja3ldOiB0cnVlIH0gfSxcbiAgICAgICAgZmlsdGVyRW5hYmxlZCA/IChoKFwiY2FsY2l0ZS1maWx0ZXJcIiwgeyBcImFyaWEtbGFiZWxcIjogZmlsdGVyUGxhY2Vob2xkZXIsIGRpc2FibGVkOiBsb2FkaW5nIHx8IGRpc2FibGVkLCBpdGVtczogZGF0YUZvckZpbHRlciwgb25DYWxjaXRlRmlsdGVyQ2hhbmdlOiBoYW5kbGVGaWx0ZXJFdmVudCwgcGxhY2Vob2xkZXI6IGZpbHRlclBsYWNlaG9sZGVyLCB2YWx1ZTogZmlsdGVyVGV4dCwgXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICAgICAgcmVmOiBzZXRGaWx0ZXJFbCB9KSkgOiBudWxsLFxuICAgICAgICBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTJDEubWVudUFjdGlvbnMgfSkpLFxuICAgICAgbG9hZGluZyA/IGgoXCJjYWxjaXRlLXNjcmltXCIsIHsgbG9hZGluZzogbG9hZGluZyB9KSA6IG51bGwsXG4gICAgICBkZWZhdWx0U2xvdCkpKTtcbn07XG5cbmNvbnN0IENTUyA9IHtcbiAgYWN0aW9uczogXCJhY3Rpb25zXCIsXG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy0tZW5kXCIsXG4gIGFjdGlvbnNTdGFydDogXCJhY3Rpb25zLS1zdGFydFwiLFxuICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvblwiLFxuICBoYW5kbGU6IFwiaGFuZGxlXCIsXG4gIGhhbmRsZUFjdGl2YXRlZDogXCJoYW5kbGUtLWFjdGl2YXRlZFwiLFxuICBoaWdobGlnaHQ6IFwiaGlnaGxpZ2h0XCIsXG4gIGljb246IFwiaWNvblwiLFxuICBpY29uRG90OiBcImljb24tZG90XCIsXG4gIGxhYmVsOiBcImxhYmVsXCIsXG4gIHJlbW92ZTogXCJyZW1vdmVcIixcbiAgdGl0bGU6IFwidGl0bGVcIixcbiAgdGV4dENvbnRhaW5lcjogXCJ0ZXh0LWNvbnRhaW5lclwiXG59O1xuY29uc3QgSUNPTlMgPSB7XG4gIGNoZWNrZWQ6IFwiY2hlY2tcIixcbiAgcmVtb3ZlOiBcInhcIlxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG4gIGFjdGlvbnNTdGFydDogXCJhY3Rpb25zLXN0YXJ0XCJcbn07XG5cbmV4cG9ydCB7IENTUyBhcyBDLCBJQ09OX1RZUEVTIGFzIEksIExpc3QgYXMgTCwgU0xPVFMgYXMgUywgZGVzZWxlY3RTaWJsaW5nSXRlbXMgYXMgYSwgaGFuZGxlRmlsdGVyRXZlbnQgYXMgYiwgZ2V0SXRlbURhdGEgYXMgYywgZGVzZWxlY3RSZW1vdmVkSXRlbXMgYXMgZCwgbW92ZUl0ZW1JbmRleCBhcyBlLCBpbml0aWFsaXplT2JzZXJ2ZXIgYXMgZiwgZ2V0SXRlbUluZGV4IGFzIGcsIGhhbmRsZUZpbHRlciBhcyBoLCBpbml0aWFsaXplIGFzIGksIGhhbmRsZUluaXRpYWxGaWx0ZXIgYXMgaiwga2V5RG93bkhhbmRsZXIgYXMgaywgY2xlYW5VcE9ic2VydmVyIGFzIGwsIG11dGF0aW9uT2JzZXJ2ZXJDYWxsYmFjayBhcyBtLCBjYWxjaXRlTGlzdEZvY3VzT3V0SGFuZGxlciBhcyBuLCBjYWxjaXRlTGlzdEl0ZW1DaGFuZ2VIYW5kbGVyIGFzIG8sIGNhbGNpdGVJbnRlcm5hbExpc3RJdGVtVmFsdWVDaGFuZ2VIYW5kbGVyIGFzIHAsIHNldFVwSXRlbXMgYXMgcSwgcmVtb3ZlSXRlbSBhcyByLCBzZWxlY3RTaWJsaW5ncyBhcyBzLCBzZXRGb2N1cyBhcyB0LCBTTE9UUyQyIGFzIHUsIENTUyQyIGFzIHYsIElDT05TIGFzIHcgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBnIGFzIGdldEFzc2V0UGF0aCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTdXBwb3J0ZWRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS1iM2M0NGRkYS5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZSA9IHt9O1xuYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZUJ1bmRsZShsYW5nLCBjb21wb25lbnQpIHtcbiAgY29uc3Qga2V5ID0gYCR7Y29tcG9uZW50fV8ke2xhbmd9YDtcbiAgaWYgKGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xuICB9XG4gIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldID0gZmV0Y2goZ2V0QXNzZXRQYXRoKGAuL2Fzc2V0cy8ke2NvbXBvbmVudH0vdDluL21lc3NhZ2VzXyR7bGFuZ30uanNvbmApKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgaWYgKCFyZXNwLm9rKSB7XG4gICAgICB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgfSlcbiAgICAuY2F0Y2goKCkgPT4gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpKTtcbiAgcmV0dXJuIGNvbXBvbmVudExhbmdUb01lc3NhZ2VCdW5kbGVDYWNoZVtrZXldO1xufVxuZnVuY3Rpb24gdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiY291bGQgbm90IGZldGNoIGNvbXBvbmVudCBtZXNzYWdlIGJ1bmRsZVwiKTtcbn1cbmZ1bmN0aW9uIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5tZXNzYWdlcyA9IHtcbiAgICAuLi5jb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzLFxuICAgIC4uLmNvbXBvbmVudC5tZXNzYWdlT3ZlcnJpZGVzXG4gIH07XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIHRoZSBtZXNzYWdlcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQuIEl0IHNob3VsZCBiZSBhd2FpdGVkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2V0VXBNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBjb21wb25lbnQuZWZmZWN0aXZlTG9jYWxlKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29uc3QgeyBlbCB9ID0gY29tcG9uZW50O1xuICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0YWcucmVwbGFjZShcImNhbGNpdGUtXCIsIFwiXCIpO1xuICByZXR1cm4gZ2V0TWVzc2FnZUJ1bmRsZShnZXRTdXBwb3J0ZWRMb2NhbGUobGFuZywgXCJ0OW5cIiksIGNvbXBvbmVudE5hbWUpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgbXVzdCBiZSBzZXQgdXAgZm9yIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlIGl0cyBkZWZhdWx0IG1lc3NhZ2UgYnVuZGxlIGlmIHRoZSBsb2NhbGUgY2hhbmdlcy5cbiAqXG4gKiBJdCBjYW4gYmUgc2V0IHVwIGluICoqZWl0aGVyKiogb2YgdGhlIGZvbGxvd2luZyB3YXlzOlxuICpcbiAqIDEuIGNhbGxlZCBmcm9tIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYG9uTG9jYWxlQ2hhbmdlYCBtZXRob2Qgb3JcbiAqIDIuIGNhbGxlZCBmcm9tIGEgd2F0Y2hlciBjb25maWd1cmVkIHRvIHdhdGNoIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGVmZmVjdGl2ZUxvY2FsZWAgcHJvcFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBsYW5nXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBzZXRzIHVwIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGNvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqICoqTm90ZSoqOiB0aGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGBMb2NhbGl6ZWRDb21wb25lbnRgJ3MgYGNvbm5lY3RMb2NhbGl6ZWRgIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHRlYXJzIGRvd24gaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gIG1lcmdlTWVzc2FnZXModGhpcyk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RNZXNzYWdlcyBhcyBjLCBkaXNjb25uZWN0TWVzc2FnZXMgYXMgZCwgc2V0VXBNZXNzYWdlcyBhcyBzLCB1cGRhdGVNZXNzYWdlcyBhcyB1IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=