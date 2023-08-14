"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-combobox_3_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-combobox_3.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-combobox_3.entry.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_combobox": () => (/* binding */ Combobox),
/* harmony export */   "calcite_combobox_item": () => (/* binding */ ComboboxItem),
/* harmony export */   "calcite_combobox_item_group": () => (/* binding */ ComboboxItemGroup)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _filter_ab0b5f70_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-ab0b5f70.js */ "./node_modules/@esri/calcite-components/dist/esm/filter-ab0b5f70.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./floating-ui-8d547175.js */ "./node_modules/@esri/calcite-components/dist/esm/floating-ui-8d547175.js");
/* harmony import */ var _form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-d7359efe.js */ "./node_modules/@esri/calcite-components/dist/esm/form-d7359efe.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./label-9d2eb334.js */ "./node_modules/@esri/calcite-components/dist/esm/label-9d2eb334.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./openCloseComponent-21d2a6ab.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-21d2a6ab.js");
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/* harmony import */ var _conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./conditionalSlot-946fb911.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-946fb911.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */



















const ComboboxItem$1 = "CALCITE-COMBOBOX-ITEM";
const ComboboxItemGroup$1 = "CALCITE-COMBOBOX-ITEM-GROUP";
const ComboboxChildSelector = `${ComboboxItem$1}, ${ComboboxItemGroup$1}`;
const CSS$3 = {
  listContainer: "list-container"
};

function getAncestors(element) {
  const parent = element.parentElement?.closest(ComboboxChildSelector);
  const grandparent = parent?.parentElement?.closest(ComboboxChildSelector);
  return [parent, grandparent].filter((el) => el);
}
function getItemAncestors(item) {
  return (item.ancestors?.filter((el) => el.nodeName === "CALCITE-COMBOBOX-ITEM") || []);
}
function getItemChildren(item) {
  return (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.x)(item.querySelectorAll("calcite-combobox-item"));
}
function hasActiveChildren(node) {
  const items = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.x)(node.querySelectorAll("calcite-combobox-item"));
  return items.filter((item) => item.selected).length > 0;
}
function getDepth(element) {
  const result = document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group", element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  return result.snapshotLength;
}

const CSS$2 = {
  button: "x-button"
};
function XButton({ disabled, key, label, onClick, ref, scale }) {
  return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": label, class: CSS$2.button, disabled: disabled, key: key, onClick: onClick, tabIndex: -1, type: "button", 
    // eslint-disable-next-line react/jsx-sort-props
    ref: ref },
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "x", scale: scale === "l" ? "m" : "s" })));
}

const comboboxCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]) .x-button{inline-size:1rem;block-size:1rem}:host([scale=m]) .x-button{inline-size:1.5rem;block-size:1.5rem}:host([scale=l]) .x-button{inline-size:2rem;block-size:2rem}.x-button{margin:0px;display:flex;cursor:pointer;-webkit-appearance:none;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-width:2px;background-color:transparent;color:var(--calcite-ui-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-radius:50%;border-color:transparent;background-color:var(--calcite-ui-foreground-2)}.x-button:active,.x-button:hover{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}.x-button:active{border-style:solid;border-color:var(--calcite-ui-brand)}.x-button calcite-icon{color:inherit}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1.5rem}:host([scale=s]) .x-button{margin-inline-end:0.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:2rem}:host([scale=m]) .x-button{margin-inline-end:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:2.75rem}:host([scale=l]) .x-button{margin-inline-end:1rem}.wrapper{display:flex;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);outline-color:transparent;padding-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.wrapper--single{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;flex-wrap:nowrap}.grid-input{display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px}.input{flex-grow:1;-webkit-appearance:none;appearance:none;border-style:none;background-color:transparent;padding:0px;font-family:inherit;color:var(--calcite-ui-text-1);font-size:inherit;block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);min-inline-size:120px;margin-block-end:var(--calcite-combobox-item-spacing-unit-s)}.input:focus{outline:2px solid transparent;outline-offset:2px}.input--transparent{opacity:0}.input--single{margin-block:0px;padding:0px}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;inline-size:0px;min-inline-size:0px;opacity:0}.input--icon{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.input-wrap{display:flex;flex-grow:1}.input-wrap--single{flex:1 1 0%;overflow:hidden}.label{pointer-events:none;display:flex;max-inline-size:100%;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;font-weight:var(--calcite-font-weight-normal);block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--icon{padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:flex;inline-size:1rem;cursor:pointer;align-items:center}.icon-end{flex:none}.floating-ui-container{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.floating-ui-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.floating-ui-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.floating-ui-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.floating-ui-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}.floating-ui-container--active{visibility:visible}@media (forced-colors: active){.wrapper,.floating-ui-container--active{border:1px solid canvasText}}.screen-readers-only{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{max-block-size:45vh;overflow-y:auto;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.list{margin:0px;display:block;padding:0px}.list--hide{block-size:0px;overflow:hidden}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);margin-inline:0 var(--calcite-combobox-item-spacing-unit-s);max-inline-size:100%}.chip--active{background-color:var(--calcite-ui-foreground-3)}.item{display:block}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

const isGroup = (el) => el.tagName === ComboboxItemGroup$1;
const itemUidPrefix = "combobox-item-";
const chipUidPrefix = "combobox-chip-";
const labelUidPrefix = "combobox-label-";
const listboxUidPrefix = "combobox-listbox-";
const inputUidPrefix = "combobox-input-";
const Combobox = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteComboboxChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxChange", 6);
    this.calciteComboboxFilterChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxFilterChange", 6);
    this.calciteComboboxChipClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxChipClose", 6);
    this.calciteComboboxBeforeClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxBeforeClose", 6);
    this.calciteComboboxClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxClose", 6);
    this.calciteComboboxBeforeOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxBeforeOpen", 6);
    this.calciteComboboxOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxOpen", 6);
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    this.placement = _floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.internalValueChangeFlag = false;
    this.textInput = null;
    this.mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_10__.c)("mutation", () => this.updateItems());
    this.resizeObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_10__.c)("resize", () => this.setMaxScrollerHeight());
    this.guid = (0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_5__.g)();
    this.inputHeight = 0;
    this.ignoreSelectedEventsFlag = false;
    this.openTransitionProp = "opacity";
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.f)(flipPlacements, el)
        : null;
    };
    this.getValue = () => {
      const items = this.selectedItems.map((item) => item?.value?.toString());
      return items?.length ? (items.length > 1 ? items : items[0]) : "";
    };
    this.onLabelClick = () => {
      this.setFocus();
    };
    this.keyDownHandler = (event) => {
      const { key } = event;
      switch (key) {
        case "Tab":
          this.activeChipIndex = -1;
          this.activeItemIndex = -1;
          if (this.allowCustomValues && this.text) {
            this.addCustomChip(this.text, true);
            event.preventDefault();
          }
          else if (this.open) {
            this.open = false;
            event.preventDefault();
          }
          break;
        case "ArrowLeft":
          this.previousChip();
          event.preventDefault();
          break;
        case "ArrowRight":
          this.nextChip();
          event.preventDefault();
          break;
        case "ArrowUp":
          event.preventDefault();
          if (this.open) {
            this.shiftActiveItemIndex(-1);
          }
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case "ArrowDown":
          event.preventDefault();
          if (this.open) {
            this.shiftActiveItemIndex(1);
          }
          else {
            this.open = true;
            this.ensureRecentSelectedItemIsActive();
          }
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case " ":
          if (!this.textInput.value) {
            event.preventDefault();
            this.open = true;
            this.shiftActiveItemIndex(1);
          }
          break;
        case "Home":
          if (!this.open) {
            return;
          }
          event.preventDefault();
          this.updateActiveItemIndex(0);
          this.scrollToActiveItem();
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case "End":
          if (!this.open) {
            return;
          }
          event.preventDefault();
          this.updateActiveItemIndex(this.filteredItems.length - 1);
          this.scrollToActiveItem();
          if (!this.comboboxInViewport()) {
            this.el.scrollIntoView();
          }
          break;
        case "Escape":
          if (!this.clearDisabled && !this.open) {
            this.clearValue();
          }
          this.open = false;
          event.preventDefault();
          break;
        case "Enter":
          if (this.activeItemIndex > -1) {
            this.toggleSelection(this.filteredItems[this.activeItemIndex]);
            event.preventDefault();
          }
          else if (this.activeChipIndex > -1) {
            this.removeActiveChip();
            event.preventDefault();
          }
          else if (this.allowCustomValues && this.text) {
            this.addCustomChip(this.text, true);
            event.preventDefault();
          }
          else if (!event.defaultPrevented) {
            if ((0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.s)(this)) {
              event.preventDefault();
            }
          }
          break;
        case "Delete":
        case "Backspace":
          if (this.activeChipIndex > -1) {
            event.preventDefault();
            this.removeActiveChip();
          }
          else if (!this.text && this.isMulti()) {
            event.preventDefault();
            this.removeLastChip();
          }
          break;
      }
    };
    this.toggleCloseEnd = () => {
      this.open = false;
      this.el.removeEventListener("calciteComboboxClose", this.toggleCloseEnd);
    };
    this.toggleOpenEnd = () => {
      this.open = false;
      this.el.removeEventListener("calciteComboboxOpen", this.toggleOpenEnd);
    };
    this.setMaxScrollerHeight = async () => {
      const { listContainerEl, open, referenceEl } = this;
      if (!listContainerEl || !open) {
        return;
      }
      await this.reposition(true);
      const maxScrollerHeight = this.getMaxScrollerHeight();
      listContainerEl.style.maxHeight = maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : "";
      listContainerEl.style.minWidth = `${referenceEl.clientWidth}px`;
      await this.reposition(true);
    };
    this.calciteChipCloseHandler = (comboboxItem) => {
      this.open = false;
      const selection = this.items.find((item) => item === comboboxItem);
      if (selection) {
        this.toggleSelection(selection, false);
      }
      this.calciteComboboxChipClose.emit();
    };
    this.clickHandler = (event) => {
      const composedPath = event.composedPath();
      if (composedPath.some((node) => node.tagName === "CALCITE-CHIP")) {
        this.open = false;
        event.preventDefault();
        return;
      }
      if (composedPath.some((node) => node.classList?.contains(CSS$2.button))) {
        this.clearValue();
        event.preventDefault();
        return;
      }
      this.open = !this.open;
      this.ensureRecentSelectedItemIsActive();
    };
    this.setInactiveIfNotContained = (event) => {
      const composedPath = event.composedPath();
      if (!this.open || composedPath.includes(this.el) || composedPath.includes(this.referenceEl)) {
        return;
      }
      if (this.allowCustomValues && this.text.trim().length) {
        this.addCustomChip(this.text);
      }
      if (this.selectionMode === "single") {
        if (this.textInput) {
          this.textInput.value = "";
        }
        this.text = "";
        this.filterItems("");
        this.updateActiveItemIndex(-1);
      }
      this.open = false;
    };
    this.setFloatingEl = (el) => {
      this.floatingEl = el;
      (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.c)(this, this.referenceEl, this.floatingEl);
    };
    this.setContainerEl = (el) => {
      this.resizeObserver.observe(el);
      this.listContainerEl = el;
      this.transitionEl = el;
      (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_11__.c)(this);
    };
    this.setReferenceEl = (el) => {
      this.referenceEl = el;
      (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.c)(this, this.referenceEl, this.floatingEl);
    };
    this.inputHandler = (event) => {
      const value = event.target.value;
      this.text = value;
      this.filterItems(value);
      if (value) {
        this.activeChipIndex = -1;
      }
    };
    this.filterItems = (() => {
      const find = (item, filteredData) => item &&
        filteredData.some(({ label, value }) => {
          if (isGroup(item)) {
            return value === item.label;
          }
          return (value === item.textLabel ||
            value === item.value ||
            label === item.textLabel ||
            label === item.value);
        });
      return (0,_debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_13__.d)((text) => {
        const filteredData = (0,_filter_ab0b5f70_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.data, text);
        const items = this.getCombinedItems();
        items.forEach((item) => {
          const hidden = !find(item, filteredData);
          item.hidden = hidden;
          const [parent, grandparent] = item.ancestors;
          if (find(parent, filteredData) || find(grandparent, filteredData)) {
            item.hidden = false;
          }
          if (!hidden) {
            item.ancestors.forEach((ancestor) => (ancestor.hidden = false));
          }
        });
        this.filteredItems = this.getfilteredItems();
        this.calciteComboboxFilterChange.emit();
      }, 100);
    })();
    this.internalComboboxChangeEvent = () => {
      this.calciteComboboxChange.emit();
    };
    this.emitComboboxChange = (0,_debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_13__.d)(this.internalComboboxChangeEvent, 0);
    this.updateItems = () => {
      this.items = this.getItems();
      this.groupItems = this.getGroupItems();
      this.data = this.getData();
      this.selectedItems = this.getSelectedItems();
      this.filteredItems = this.getfilteredItems();
      this.needsIcon = this.getNeedsIcon();
      if (!this.allowCustomValues) {
        this.setMaxScrollerHeight();
      }
    };
    this.scrollToActiveItem = () => {
      const activeItem = this.filteredItems[this.activeItemIndex];
      if (!activeItem) {
        return;
      }
      const height = this.calculateSingleItemHeight(activeItem);
      const { offsetHeight, scrollTop } = this.listContainerEl;
      if (offsetHeight + scrollTop < activeItem.offsetTop + height) {
        this.listContainerEl.scrollTop = activeItem.offsetTop - offsetHeight + height;
      }
      else if (activeItem.offsetTop < scrollTop) {
        this.listContainerEl.scrollTop = activeItem.offsetTop;
      }
    };
    this.comboboxFocusHandler = () => {
      if (this.disabled) {
        return;
      }
      this.textInput?.focus();
    };
    this.comboboxBlurHandler = (event) => {
      this.setInactiveIfNotContained(event);
    };
    this.clearDisabled = false;
    this.open = false;
    this.disabled = false;
    this.form = undefined;
    this.label = undefined;
    this.placeholder = undefined;
    this.placeholderIcon = undefined;
    this.placeholderIconFlipRtl = false;
    this.maxItems = 0;
    this.name = undefined;
    this.allowCustomValues = undefined;
    this.overlayPositioning = "absolute";
    this.required = false;
    this.selectionMode = "multiple";
    this.scale = "m";
    this.value = null;
    this.flipPlacements = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.selectedItems = [];
    this.filteredItems = [];
    this.items = [];
    this.groupItems = [];
    this.needsIcon = undefined;
    this.activeItemIndex = -1;
    this.activeChipIndex = -1;
    this.activeDescendant = "";
    this.text = "";
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  openHandler() {
    if (this.disabled) {
      this.open = false;
      return;
    }
    this.setMaxScrollerHeight();
  }
  handleDisabledChange(value) {
    if (!value) {
      this.open = false;
    }
  }
  maxItemsHandler() {
    this.setMaxScrollerHeight();
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  valueHandler(value) {
    if (!this.internalValueChangeFlag) {
      const items = this.getItems();
      if (Array.isArray(value)) {
        items.forEach((item) => (item.selected = value.includes(item.value)));
      }
      else if (value) {
        items.forEach((item) => (item.selected = value === item.value));
      }
      else {
        items.forEach((item) => (item.selected = false));
      }
      this.updateItems();
    }
  }
  onMessagesChange() {
    /*  wired up by t9n util */
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  selectedItemsHandler() {
    this.internalValueChangeFlag = true;
    this.value = this.getValue();
    this.internalValueChangeFlag = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  documentClickHandler(event) {
    if (this.disabled || !(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.i)(event)) {
      return;
    }
    this.setInactiveIfNotContained(event);
  }
  calciteComboboxItemChangeHandler(event) {
    if (this.ignoreSelectedEventsFlag) {
      return;
    }
    const target = event.target;
    const newIndex = this.filteredItems.indexOf(target);
    this.updateActiveItemIndex(newIndex);
    this.toggleSelection(target, target.selected);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    const { floatingEl, referenceEl, placement, overlayPositioning, filteredFlipPlacements } = this;
    return (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.r)(this, {
      floatingEl,
      referenceEl,
      overlayPositioning,
      placement,
      flipPlacements: filteredFlipPlacements,
      type: "menu"
    }, delayed);
  }
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    this.textInput?.focus();
    this.activeChipIndex = -1;
    this.activeItemIndex = -1;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_12__.c)(this);
    this.internalValueChangeFlag = true;
    this.value = this.getValue();
    this.internalValueChangeFlag = false;
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_11__.c)(this);
    this.setFilteredPlacements();
    this.reposition(true);
    if (this.open) {
      this.openHandler();
    }
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_8__.s)(this);
    this.updateItems();
    await (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_12__.s)(this);
  }
  componentDidLoad() {
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.a)(this, this.getValue());
    this.reposition(true);
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_8__.a)(this);
  }
  componentDidRender() {
    if (this.el.offsetHeight !== this.inputHeight) {
      this.reposition(true);
      this.inputHeight = this.el.offsetHeight;
    }
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_6__.u)(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    this.resizeObserver?.disconnect();
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.a)(this, this.referenceEl, this.floatingEl);
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_11__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_12__.d)(this);
  }
  /** when search text is cleared, reset active to  */
  textHandler() {
    this.updateActiveItemIndex(-1);
  }
  effectiveLocaleChange() {
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_12__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  clearValue() {
    this.ignoreSelectedEventsFlag = true;
    this.items.forEach((el) => (el.selected = false));
    this.ignoreSelectedEventsFlag = false;
    this.selectedItems = [];
    this.emitComboboxChange();
    this.open = false;
    this.updateActiveItemIndex(-1);
    this.resetText();
    this.filterItems("");
    this.setFocus();
  }
  comboboxInViewport() {
    const bounding = this.el.getBoundingClientRect();
    return (bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight));
  }
  onBeforeOpen() {
    this.scrollToActiveItem();
    this.calciteComboboxBeforeOpen.emit();
  }
  onOpen() {
    this.calciteComboboxOpen.emit();
  }
  onBeforeClose() {
    this.calciteComboboxBeforeClose.emit();
  }
  onClose() {
    this.calciteComboboxClose.emit();
  }
  ensureRecentSelectedItemIsActive() {
    const { selectedItems } = this;
    const targetIndex = selectedItems.length === 0 ? 0 : this.items.indexOf(selectedItems[selectedItems.length - 1]);
    this.updateActiveItemIndex(targetIndex);
  }
  getMaxScrollerHeight() {
    const items = this.getCombinedItems().filter((item) => !item.hidden);
    const { maxItems } = this;
    let itemsToProcess = 0;
    let maxScrollerHeight = 0;
    if (items.length > maxItems) {
      items.forEach((item) => {
        if (itemsToProcess < maxItems && maxItems > 0) {
          const height = this.calculateSingleItemHeight(item);
          if (height > 0) {
            maxScrollerHeight += height;
            itemsToProcess++;
          }
        }
      });
    }
    return maxScrollerHeight;
  }
  calculateSingleItemHeight(item) {
    if (!item) {
      return;
    }
    let height = item.offsetHeight;
    // if item has children items, don't count their height twice
    const children = Array.from(item.querySelectorAll(ComboboxChildSelector));
    children
      .map((child) => child?.offsetHeight)
      .forEach((offsetHeight) => {
      height -= offsetHeight;
    });
    return height;
  }
  getCombinedItems() {
    return [...this.groupItems, ...this.items];
  }
  toggleSelection(item, value = !item.selected) {
    if (!item) {
      return;
    }
    if (this.isMulti()) {
      item.selected = value;
      this.updateAncestors(item);
      this.selectedItems = this.getSelectedItems();
      this.emitComboboxChange();
      this.resetText();
      this.filterItems("");
    }
    else {
      this.ignoreSelectedEventsFlag = true;
      this.items.forEach((el) => (el.selected = el === item ? value : false));
      this.ignoreSelectedEventsFlag = false;
      this.selectedItems = this.getSelectedItems();
      this.emitComboboxChange();
      if (this.textInput) {
        this.textInput.value = item.textLabel;
      }
      this.open = false;
      this.updateActiveItemIndex(-1);
      this.resetText();
      this.filterItems("");
    }
  }
  updateAncestors(item) {
    if (this.selectionMode !== "ancestors") {
      return;
    }
    const ancestors = getItemAncestors(item);
    const children = getItemChildren(item);
    if (item.selected) {
      ancestors.forEach((el) => {
        el.selected = true;
      });
    }
    else {
      children.forEach((el) => (el.selected = false));
      [...ancestors].forEach((el) => {
        if (!hasActiveChildren(el)) {
          el.selected = false;
        }
      });
    }
  }
  getfilteredItems() {
    return this.items.filter((item) => !item.hidden);
  }
  getSelectedItems() {
    if (!this.isMulti()) {
      const match = this.items.find(({ selected }) => selected);
      return match ? [match] : [];
    }
    return (this.items
      .filter((item) => item.selected && (this.selectionMode !== "ancestors" || !hasActiveChildren(item)))
      /** Preserve order of entered tags */
      .sort((a, b) => {
      const aIdx = this.selectedItems.indexOf(a);
      const bIdx = this.selectedItems.indexOf(b);
      if (aIdx > -1 && bIdx > -1) {
        return aIdx - bIdx;
      }
      return bIdx - aIdx;
    }));
  }
  getData() {
    return this.items.map((item) => ({
      filterDisabled: item.filterDisabled,
      value: item.value,
      label: item.textLabel
    }));
  }
  getNeedsIcon() {
    return this.selectionMode === "single" && this.items.some((item) => item.icon);
  }
  resetText() {
    if (this.textInput) {
      this.textInput.value = "";
    }
    this.text = "";
  }
  getItems() {
    const items = Array.from(this.el.querySelectorAll(ComboboxItem$1));
    return items.filter((item) => !item.disabled);
  }
  getGroupItems() {
    return Array.from(this.el.querySelectorAll(ComboboxItemGroup$1));
  }
  addCustomChip(value, focus) {
    const existingItem = this.items.find((el) => el.textLabel === value);
    if (existingItem) {
      this.toggleSelection(existingItem, true);
    }
    else {
      if (!this.isMulti()) {
        this.toggleSelection(this.selectedItems[this.selectedItems.length - 1], false);
      }
      const item = document.createElement(ComboboxItem$1);
      item.value = value;
      item.textLabel = value;
      item.selected = true;
      this.el.appendChild(item);
      this.resetText();
      if (focus) {
        this.setFocus();
      }
      this.updateItems();
      this.filterItems("");
      this.emitComboboxChange();
    }
  }
  removeActiveChip() {
    this.toggleSelection(this.selectedItems[this.activeChipIndex], false);
    this.setFocus();
  }
  removeLastChip() {
    this.toggleSelection(this.selectedItems[this.selectedItems.length - 1], false);
    this.setFocus();
  }
  previousChip() {
    if (this.text) {
      return;
    }
    const length = this.selectedItems.length - 1;
    const active = this.activeChipIndex;
    this.activeChipIndex = active === -1 ? length : Math.max(active - 1, 0);
    this.updateActiveItemIndex(-1);
    this.focusChip();
  }
  nextChip() {
    if (this.text || this.activeChipIndex === -1) {
      return;
    }
    const last = this.selectedItems.length - 1;
    const newIndex = this.activeChipIndex + 1;
    if (newIndex > last) {
      this.activeChipIndex = -1;
      this.setFocus();
    }
    else {
      this.activeChipIndex = newIndex;
      this.focusChip();
    }
    this.updateActiveItemIndex(-1);
  }
  focusChip() {
    const guid = this.selectedItems[this.activeChipIndex]?.guid;
    const chip = guid
      ? this.referenceEl.querySelector(`#${chipUidPrefix}${guid}`)
      : null;
    chip?.setFocus();
  }
  shiftActiveItemIndex(delta) {
    const { length } = this.filteredItems;
    const newIndex = (this.activeItemIndex + length + delta) % length;
    this.updateActiveItemIndex(newIndex);
    this.scrollToActiveItem();
  }
  updateActiveItemIndex(index) {
    this.activeItemIndex = index;
    let activeDescendant = null;
    this.filteredItems.forEach((el, i) => {
      if (i === index) {
        el.active = true;
        activeDescendant = `${itemUidPrefix}${el.guid}`;
      }
      else {
        el.active = false;
      }
    });
    this.activeDescendant = activeDescendant;
    if (this.activeItemIndex > -1) {
      this.activeChipIndex = -1;
    }
  }
  isMulti() {
    return this.selectionMode !== "single";
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderChips() {
    const { activeChipIndex, scale, selectionMode, messages } = this;
    return this.selectedItems.map((item, i) => {
      const chipClasses = {
        chip: true,
        "chip--active": activeChipIndex === i
      };
      const ancestors = [...getItemAncestors(item)].reverse();
      const pathLabel = [...ancestors, item].map((el) => el.textLabel);
      const label = selectionMode !== "ancestors" ? item.textLabel : pathLabel.join(" / ");
      return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-chip", { class: chipClasses, closable: true, icon: item.icon, iconFlipRtl: item.iconFlipRtl, id: item.guid ? `${chipUidPrefix}${item.guid}` : null, key: item.textLabel, messageOverrides: { dismissLabel: messages.removeTag }, onCalciteChipClose: () => this.calciteChipCloseHandler(item), scale: scale, title: label, value: item.value }, label));
    });
  }
  renderInput() {
    const { guid, disabled, placeholder, selectionMode, selectedItems, open } = this;
    const single = selectionMode === "single";
    const selectedItem = selectedItems[0];
    const showLabel = !open && single && !!selectedItem;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: {
        "input-wrap": true,
        "input-wrap--single": single
      } }, showLabel && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: {
        label: true,
        "label--icon": !!selectedItem?.icon
      }, key: "label" }, selectedItem.textLabel)), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { "aria-activedescendant": this.activeDescendant, "aria-autocomplete": "list", "aria-controls": `${listboxUidPrefix}${guid}`, "aria-label": (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__.g)(this), class: {
        input: true,
        "input--single": true,
        "input--transparent": this.activeChipIndex > -1,
        "input--hidden": showLabel,
        "input--icon": !!this.placeholderIcon
      }, disabled: disabled, id: `${inputUidPrefix}${guid}`, key: "input", onBlur: this.comboboxBlurHandler, onFocus: this.comboboxFocusHandler, onInput: this.inputHandler, placeholder: placeholder, type: "text",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.textInput = el) })));
  }
  renderListBoxOptions() {
    return this.filteredItems.map((item) => ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { "aria-selected": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.t)(item.selected), id: item.guid ? `${itemUidPrefix}${item.guid}` : null, role: "option", tabindex: "-1" }, item.textLabel)));
  }
  renderFloatingUIContainer() {
    const { setFloatingEl, setContainerEl, open } = this;
    const classes = {
      [CSS$3.listContainer]: true,
      [_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.F.animation]: true,
      [_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_3__.F.animationActive]: open
    };
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-hidden": "true", class: {
        "floating-ui-container": true,
        "floating-ui-container--active": open
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: setFloatingEl }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: classes,
      // eslint-disable-next-line react/jsx-sort-props
      ref: setContainerEl }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: { list: true, "list--hide": !open } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
  }
  renderIconStart() {
    const { selectedItems, placeholderIcon, selectionMode, placeholderIconFlipRtl } = this;
    const selectedItem = selectedItems[0];
    const selectedIcon = selectedItem?.icon;
    const singleSelectionMode = selectionMode === "single";
    const iconAtStart = !this.open && selectedItem
      ? !!selectedIcon && singleSelectionMode
      : !!this.placeholderIcon && (!selectedItem || singleSelectionMode);
    return (iconAtStart && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "icon-start" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: "selected-icon", flipRtl: this.open && selectedItem ? selectedItem.iconFlipRtl : placeholderIconFlipRtl, icon: !this.open && selectedItem ? selectedIcon : placeholderIcon, scale: "s" }))));
  }
  renderIconEnd() {
    const { open } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "icon-end" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: open ? "chevron-up" : "chevron-down", scale: "s" })));
  }
  render() {
    const { guid, label, open } = this;
    const single = this.selectionMode === "single";
    const isClearable = !this.clearDisabled && this.value?.length > 0;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { onClick: this.comboboxFocusHandler }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-autocomplete": "list", "aria-controls": `${listboxUidPrefix}${guid}`, "aria-expanded": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.t)(open), "aria-haspopup": "listbox", "aria-label": (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__.g)(this), "aria-live": "polite", "aria-owns": `${listboxUidPrefix}${guid}`, class: {
        wrapper: true,
        "wrapper--single": single || !this.selectedItems.length,
        "wrapper--active": open
      }, onClick: this.clickHandler, onKeyDown: this.keyDownHandler, role: "combobox",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setReferenceEl }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "grid-input" }, this.renderIconStart(), !single && this.renderChips(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { class: "screen-readers-only", htmlFor: `${inputUidPrefix}${guid}`, id: `${labelUidPrefix}${guid}` }, label), this.renderInput()), isClearable ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(XButton, { disabled: this.disabled, key: "close-button", label: this.messages.clear, scale: this.scale })) : null, this.renderIconEnd()), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { "aria-labelledby": `${labelUidPrefix}${guid}`, "aria-multiselectable": "true", class: "screen-readers-only", id: `${listboxUidPrefix}${guid}`, role: "listbox", tabIndex: -1 }, this.renderListBoxOptions()), this.renderFloatingUIContainer(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.H, { component: this })));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "open": ["openHandler"],
    "disabled": ["handleDisabledChange"],
    "maxItems": ["maxItemsHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "value": ["valueHandler"],
    "messageOverrides": ["onMessagesChange"],
    "flipPlacements": ["flipPlacementsHandler"],
    "selectedItems": ["selectedItemsHandler"],
    "text": ["textHandler"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Combobox.style = comboboxCss;

const CSS$1 = {
  icon: "icon",
  iconActive: "icon--active",
  iconIndent: "icon--indent",
  custom: "icon--custom",
  dot: "icon--dot",
  single: "label--single",
  label: "label",
  active: "label--active",
  selected: "label--selected",
  title: "title",
  textContainer: "text-container"
};

const comboboxItemCss = "@charset \"UTF-8\";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.625rem;--calcite-combobox-item-spacing-indent:1rem;--calcite-combobox-item-selector-icon-size:1.5rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host,ul{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent;word-wrap:break-word;word-break:break-word;padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.label--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.label:hover,.label:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-block-start:-1px;padding-inline-start:var(--calcite-combobox-item-spacing-unit-l);color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:flex;justify-content:center;min-inline-size:var(--calcite-combobox-item-selector-icon-size)}.icon--dot:before{text-align:start;content:\"•\"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}";

const ComboboxItem = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteComboboxItemChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxItemChange", 6);
    /** Specifies the scale of the combobox-item controlled by parent, defaults to m */
    this.scale = "m";
    this.itemClickHandler = (event) => {
      event.preventDefault();
      this.toggleSelected();
    };
    this.disabled = false;
    this.selected = false;
    this.active = false;
    this.ancestors = undefined;
    this.guid = (0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_5__.g)();
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.textLabel = undefined;
    this.value = undefined;
    this.filterDisabled = undefined;
  }
  selectedWatchHandler() {
    this.calciteComboboxItemChange.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.ancestors = getAncestors(this.el);
    this.scale = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.v)(this.el, "scale", this.scale);
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_14__.c)(this);
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_14__.d)(this);
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_6__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  toggleSelected() {
    if (this.disabled) {
      return;
    }
    this.selected = !this.selected;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderIcon(iconPath) {
    return this.icon ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: {
        [CSS$1.custom]: !!this.icon,
        [CSS$1.iconActive]: this.icon && this.selected,
        [CSS$1.iconIndent]: true
      }, flipRtl: this.iconFlipRtl, icon: this.icon || iconPath, key: "icon", scale: this.scale === "l" ? "m" : "s" })) : null;
  }
  renderSelectIndicator(showDot, iconPath) {
    return showDot ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: {
        [CSS$1.icon]: true,
        [CSS$1.dot]: true,
        [CSS$1.iconIndent]: true
      } })) : ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: {
        [CSS$1.icon]: true,
        [CSS$1.iconActive]: this.selected,
        [CSS$1.iconIndent]: true
      }, flipRtl: this.iconFlipRtl, icon: iconPath, key: "indicator", scale: this.scale === "l" ? "m" : "s" }));
  }
  renderChildren() {
    if ((0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.el)) {
      return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { key: "default-slot-container" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
    }
    return null;
  }
  render() {
    const isSingleSelect = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.v)(this.el, "selection-mode", "multiple") === "single";
    const showDot = isSingleSelect && !this.disabled;
    const defaultIcon = isSingleSelect ? "dot" : "check";
    const iconPath = this.disabled ? "circle-disallowed" : defaultIcon;
    const classes = {
      [CSS$1.label]: true,
      [CSS$1.selected]: this.selected,
      [CSS$1.active]: this.active,
      [CSS$1.single]: isSingleSelect
    };
    const depth = getDepth(this.el);
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-hidden": "true" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `container scale--${this.scale}`, style: { "--calcite-combobox-item-spacing-indent-multiplier": `${depth}` } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: classes, id: this.guid, onClick: this.itemClickHandler }, this.renderSelectIndicator(showDot, iconPath), this.renderIcon(iconPath), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "title" }, this.textLabel)), this.renderChildren())));
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "selected": ["selectedWatchHandler"]
  }; }
};
ComboboxItem.style = comboboxItemCss;

const CSS = {
  list: "list",
  label: "label",
  title: "title"
};

const comboboxItemGroupCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-item-spacing-indent:1rem}:host,.list{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),.list:focus{outline:2px solid transparent;outline-offset:2px}.label{box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:0px;max-inline-size:100%;color:var(--calcite-ui-text-3)}.title{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  );border:0 solid;display:block;flex:1 1 0%;border-block-end-width:1px;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2);word-wrap:break-word;word-break:break-word;border-block-end-color:var(--calcite-ui-border-3);padding-block:var(--calcite-combobox-item-spacing-unit-l);padding-inline:var(--calcite-combobox-item-spacing-unit-s);margin-inline-start:var(--calcite-combobox-item-indent-value)}";

const ComboboxItemGroup = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.guid = (0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_5__.g)();
    this.scale = "m";
    this.ancestors = undefined;
    this.label = undefined;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.ancestors = getAncestors(this.el);
    this.scale = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.v)(this.el, "scale", this.scale);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { el, scale } = this;
    const depth = getDepth(el);
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { "aria-labelledby": this.guid, class: { [CSS.list]: true, [`scale--${scale}`]: true }, role: "group" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: { [CSS.label]: true }, id: this.guid, role: "presentation", style: { "--calcite-combobox-item-spacing-indent-multiplier": `${depth}` } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.title }, this.label)), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
ComboboxItemGroup.style = comboboxItemGroupCss;




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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYzcyYTNmMzVlODE5Y2YxODMzY2RiNTdhNDczZmUzNzIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RztBQUMxRDtBQUM2RjtBQUMyQztBQUNuQztBQUN6RztBQUM2RTtBQUMzQjtBQUNtQjtBQUM3QjtBQUN6QjtBQUN1RDtBQUNNO0FBQ3BFO0FBQ3VFO0FBQzdGO0FBQ0Y7QUFDSjs7QUFFM0I7QUFDQTtBQUNBLGlDQUFpQyxlQUFlLElBQUksb0JBQW9CO0FBQ3hFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1EQUFlO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQ0FBMkM7QUFDOUQsVUFBVSxxREFBQyxhQUFhO0FBQ3hCO0FBQ0EsY0FBYztBQUNkLElBQUkscURBQUMsbUJBQW1CLDZDQUE2QztBQUNyRTs7QUFFQSxtQ0FBbUMsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFB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OztBQUVpSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDemlDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1RDtBQUNPOztBQUU5RDtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUF3RTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5REFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RUFBd0U7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLElBQUkscURBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRXlGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1jb21ib2JveF8zLmVudHJ5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NvbmRpdGlvbmFsU2xvdC05NDZmYjkxMS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgaCwgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBIIGFzIEhvc3QsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgZiBhcyBmaWx0ZXIgfSBmcm9tICcuL2ZpbHRlci1hYjBiNWY3MC5qcyc7XG5pbXBvcnQgeyB4IGFzIG5vZGVMaXN0VG9BcnJheSwgaSBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCB0IGFzIHRvQXJpYUJvb2xlYW4sIHYgYXMgZ2V0RWxlbWVudFByb3AsIGcgYXMgZ2V0U2xvdHRlZCB9IGZyb20gJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCB7IGQgYXMgZGVmYXVsdE1lbnVQbGFjZW1lbnQsIGYgYXMgZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzLCBjIGFzIGNvbm5lY3RGbG9hdGluZ1VJLCByIGFzIHJlcG9zaXRpb24sIGEgYXMgZGlzY29ubmVjdEZsb2F0aW5nVUksIEYgYXMgRmxvYXRpbmdDU1MgfSBmcm9tICcuL2Zsb2F0aW5nLXVpLThkNTQ3MTc1LmpzJztcbmltcG9ydCB7IHMgYXMgc3VibWl0Rm9ybSwgYyBhcyBjb25uZWN0Rm9ybSwgYSBhcyBhZnRlckNvbm5lY3REZWZhdWx0VmFsdWVTZXQsIGQgYXMgZGlzY29ubmVjdEZvcm0sIEggYXMgSGlkZGVuRm9ybUlucHV0U2xvdCB9IGZyb20gJy4vZm9ybS1kNzM1OWVmZS5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0SW50ZXJhY3RpdmUsIHUgYXMgdXBkYXRlSG9zdEludGVyYWN0aW9uLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSB9IGZyb20gJy4vaW50ZXJhY3RpdmUtMGViMTM2MDAuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TGFiZWwsIGQgYXMgZGlzY29ubmVjdExhYmVsLCBnIGFzIGdldExhYmVsVGV4dCB9IGZyb20gJy4vbGFiZWwtOWQyZWIzMzQuanMnO1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRMb2FkZWQsIHMgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYSBhcyBzZXRDb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLTgwNThlMzAwLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUtYTM1NjQ4Y2QuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuQ2xvc2VDb21wb25lbnQtMjFkMmE2YWIuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHUgYXMgdXBkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1mYWMxMzM5NC5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlYm91bmNlIH0gZnJvbSAnLi9kZWJvdW5jZS0wOTUwYTliOC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQsIGQgYXMgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCB9IGZyb20gJy4vY29uZGl0aW9uYWxTbG90LTk0NmZiOTExLmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuaW1wb3J0ICcuL2Jyb3dzZXItOTliYzYyY2YuanMnO1xuaW1wb3J0ICcuL2tleS04ZmYwZDEwMS5qcyc7XG5cbmNvbnN0IENvbWJvYm94SXRlbSQxID0gXCJDQUxDSVRFLUNPTUJPQk9YLUlURU1cIjtcbmNvbnN0IENvbWJvYm94SXRlbUdyb3VwJDEgPSBcIkNBTENJVEUtQ09NQk9CT1gtSVRFTS1HUk9VUFwiO1xuY29uc3QgQ29tYm9ib3hDaGlsZFNlbGVjdG9yID0gYCR7Q29tYm9ib3hJdGVtJDF9LCAke0NvbWJvYm94SXRlbUdyb3VwJDF9YDtcbmNvbnN0IENTUyQzID0ge1xuICBsaXN0Q29udGFpbmVyOiBcImxpc3QtY29udGFpbmVyXCJcbn07XG5cbmZ1bmN0aW9uIGdldEFuY2VzdG9ycyhlbGVtZW50KSB7XG4gIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8uY2xvc2VzdChDb21ib2JveENoaWxkU2VsZWN0b3IpO1xuICBjb25zdCBncmFuZHBhcmVudCA9IHBhcmVudD8ucGFyZW50RWxlbWVudD8uY2xvc2VzdChDb21ib2JveENoaWxkU2VsZWN0b3IpO1xuICByZXR1cm4gW3BhcmVudCwgZ3JhbmRwYXJlbnRdLmZpbHRlcigoZWwpID0+IGVsKTtcbn1cbmZ1bmN0aW9uIGdldEl0ZW1BbmNlc3RvcnMoaXRlbSkge1xuICByZXR1cm4gKGl0ZW0uYW5jZXN0b3JzPy5maWx0ZXIoKGVsKSA9PiBlbC5ub2RlTmFtZSA9PT0gXCJDQUxDSVRFLUNPTUJPQk9YLUlURU1cIikgfHwgW10pO1xufVxuZnVuY3Rpb24gZ2V0SXRlbUNoaWxkcmVuKGl0ZW0pIHtcbiAgcmV0dXJuIG5vZGVMaXN0VG9BcnJheShpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWNvbWJvYm94LWl0ZW1cIikpO1xufVxuZnVuY3Rpb24gaGFzQWN0aXZlQ2hpbGRyZW4obm9kZSkge1xuICBjb25zdCBpdGVtcyA9IG5vZGVMaXN0VG9BcnJheShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWNvbWJvYm94LWl0ZW1cIikpO1xuICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNlbGVjdGVkKS5sZW5ndGggPiAwO1xufVxuZnVuY3Rpb24gZ2V0RGVwdGgoZWxlbWVudCkge1xuICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5ldmFsdWF0ZShcImFuY2VzdG9yOjpjYWxjaXRlLWNvbWJvYm94LWl0ZW0gfCBhbmNlc3Rvcjo6Y2FsY2l0ZS1jb21ib2JveC1pdGVtLWdyb3VwXCIsIGVsZW1lbnQsIG51bGwsIFhQYXRoUmVzdWx0LlVOT1JERVJFRF9OT0RFX1NOQVBTSE9UX1RZUEUsIG51bGwpO1xuICByZXR1cm4gcmVzdWx0LnNuYXBzaG90TGVuZ3RoO1xufVxuXG5jb25zdCBDU1MkMiA9IHtcbiAgYnV0dG9uOiBcIngtYnV0dG9uXCJcbn07XG5mdW5jdGlvbiBYQnV0dG9uKHsgZGlzYWJsZWQsIGtleSwgbGFiZWwsIG9uQ2xpY2ssIHJlZiwgc2NhbGUgfSkge1xuICByZXR1cm4gKGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogbGFiZWwsIGNsYXNzOiBDU1MkMi5idXR0b24sIGRpc2FibGVkOiBkaXNhYmxlZCwga2V5OiBrZXksIG9uQ2xpY2s6IG9uQ2xpY2ssIHRhYkluZGV4OiAtMSwgdHlwZTogXCJidXR0b25cIiwgXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgcmVmOiByZWYgfSxcbiAgICBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJ4XCIsIHNjYWxlOiBzY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSk7XG59XG5cbmNvbnN0IGNvbWJvYm94Q3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2Rpc2FibGVkXSl7Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpfTpob3N0KFtkaXNhYmxlZF0pICosOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9ja306aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9Omhvc3QoW3NjYWxlPXNdKSAueC1idXR0b257aW5saW5lLXNpemU6MXJlbTtibG9jay1zaXplOjFyZW19Omhvc3QoW3NjYWxlPW1dKSAueC1idXR0b257aW5saW5lLXNpemU6MS41cmVtO2Jsb2NrLXNpemU6MS41cmVtfTpob3N0KFtzY2FsZT1sXSkgLngtYnV0dG9ue2lubGluZS1zaXplOjJyZW07YmxvY2stc2l6ZToycmVtfS54LWJ1dHRvbnttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDtjdXJzb3I6cG9pbnRlcjstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTthcHBlYXJhbmNlOm5vbmU7YWxpZ24tY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24tc2VsZjpjZW50ZXI7Ym9yZGVyLXdpZHRoOjJweDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKX0ueC1idXR0b246YWN0aXZlLC54LWJ1dHRvbjpob3Zlcntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9LngtYnV0dG9uOmFjdGl2ZXtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS54LWJ1dHRvbiBjYWxjaXRlLWljb257Y29sb3I6aW5oZXJpdH06aG9zdChbc2NhbGU9c10pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MC41cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zOjAuMjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWlucHV0LWhlaWdodDoxLjVyZW19Omhvc3QoW3NjYWxlPXNdKSAueC1idXR0b257bWFyZ2luLWlubGluZS1lbmQ6MC41cmVtfTpob3N0KFtzY2FsZT1tXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbDowLjc1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zOjAuNXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaW5wdXQtaGVpZ2h0OjJyZW19Omhvc3QoW3NjYWxlPW1dKSAueC1idXR0b257bWFyZ2luLWlubGluZS1lbmQ6MC43NXJlbX06aG9zdChbc2NhbGU9bF0pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbDoxcmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zOjAuNzVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWlucHV0LWhlaWdodDoyLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgLngtYnV0dG9ue21hcmdpbi1pbmxpbmUtZW5kOjFyZW19LndyYXBwZXJ7ZGlzcGxheTpmbGV4O2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci1pbnB1dCk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7cGFkZGluZy1ibG9jazpjYWxjKHZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtcykgLyA0KTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWwpfTpob3N0KDpmb2N1cy13aXRoaW4pIC53cmFwcGVyLC53cmFwcGVyLS1hY3RpdmV7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS53cmFwcGVyLS1zaW5nbGV7cGFkZGluZy1ibG9jazowO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbCk7Y3Vyc29yOnBvaW50ZXI7ZmxleC13cmFwOm5vd3JhcH0uZ3JpZC1pbnB1dHtkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjE7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6Y2VudGVyO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtwYWRkaW5nOjBweH0uaW5wdXR7ZmxleC1ncm93OjE7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2JvcmRlci1zdHlsZTpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7cGFkZGluZzowcHg7Zm9udC1mYW1pbHk6aW5oZXJpdDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Zm9udC1zaXplOmluaGVyaXQ7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWlucHV0LWhlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pbnB1dC1oZWlnaHQpO21pbi1pbmxpbmUtc2l6ZToxMjBweDttYXJnaW4tYmxvY2stZW5kOnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtcyl9LmlucHV0OmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweH0uaW5wdXQtLXRyYW5zcGFyZW50e29wYWNpdHk6MH0uaW5wdXQtLXNpbmdsZXttYXJnaW4tYmxvY2s6MHB4O3BhZGRpbmc6MHB4fS53cmFwcGVyLS1hY3RpdmUgLmlucHV0LXNpbmdsZXtjdXJzb3I6dGV4dH0uaW5wdXQtLWhpZGRlbntwb2ludGVyLWV2ZW50czpub25lO2lubGluZS1zaXplOjBweDttaW4taW5saW5lLXNpemU6MHB4O29wYWNpdHk6MH0uaW5wdXQtLWljb257cGFkZGluZy1ibG9jazowO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbCl9LmlucHV0LXdyYXB7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxfS5pbnB1dC13cmFwLS1zaW5nbGV7ZmxleDoxIDEgMCU7b3ZlcmZsb3c6aGlkZGVufS5sYWJlbHtwb2ludGVyLWV2ZW50czpub25lO2Rpc3BsYXk6ZmxleDttYXgtaW5saW5lLXNpemU6MTAwJTtmbGV4OjEgMSBhdXRvO292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtwYWRkaW5nOjBweDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWlucHV0LWhlaWdodCk7bGluZS1oZWlnaHQ6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pbnB1dC1oZWlnaHQpfS5sYWJlbC0taWNvbntwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWwpfS5pY29uLWVuZCwuaWNvbi1zdGFydHtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MXJlbTtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lmljb24tZW5ke2ZsZXg6bm9uZX0uZmxvYXRpbmctdWktY29udGFpbmVyey0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXgpO3Zpc2liaWxpdHk6aGlkZGVufS5mbG9hdGluZy11aS1jb250YWluZXIgLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXtwb3NpdGlvbjpyZWxhdGl2ZTt0cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbik7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sIHZpc2liaWxpdHksIG9wYWNpdHk7b3BhY2l0eTowO2JveC1zaGFkb3c6MCAwIDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCk7Ym9yZGVyLXJhZGl1czowLjI1cmVtfS5mbG9hdGluZy11aS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePWJvdHRvbV0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNXB4KX0uZmxvYXRpbmctdWktY29udGFpbmVyW2RhdGEtcGxhY2VtZW50Xj10b3BdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNXB4KX0uZmxvYXRpbmctdWktY29udGFpbmVyW2RhdGEtcGxhY2VtZW50Xj1sZWZ0XSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVYKDVweCl9LmZsb2F0aW5nLXVpLWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF49cmlnaHRdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTVweCl9LmZsb2F0aW5nLXVpLWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbS0tYWN0aXZle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlKDApfS5mbG9hdGluZy11aS1jb250YWluZXItLWFjdGl2ZXt2aXNpYmlsaXR5OnZpc2libGV9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpey53cmFwcGVyLC5mbG9hdGluZy11aS1jb250YWluZXItLWFjdGl2ZXtib3JkZXI6MXB4IHNvbGlkIGNhbnZhc1RleHR9fS5zY3JlZW4tcmVhZGVycy1vbmx5e3Bvc2l0aW9uOmFic29sdXRlO2lubGluZS1zaXplOjFweDtibG9jay1zaXplOjFweDtwYWRkaW5nOjA7bWFyZ2luOi0xcHg7b3ZlcmZsb3c6aGlkZGVuO2NsaXA6cmVjdCgwLCAwLCAwLCAwKTt3aGl0ZS1zcGFjZTpub3dyYXA7Ym9yZGVyLXdpZHRoOjB9Lmxpc3QtY29udGFpbmVye21heC1ibG9jay1zaXplOjQ1dmg7b3ZlcmZsb3cteTphdXRvO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtZHJvcGRvd24td2lkdGgpfS5saXN0e21hcmdpbjowcHg7ZGlzcGxheTpibG9jaztwYWRkaW5nOjBweH0ubGlzdC0taGlkZXtibG9jay1zaXplOjBweDtvdmVyZmxvdzpoaWRkZW59LmNoaXB7bWFyZ2luLWJsb2NrOmNhbGModmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zKSAvIDQpO21hcmdpbi1pbmxpbmU6MCB2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LXMpO21heC1pbmxpbmUtc2l6ZToxMDAlfS5jaGlwLS1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9Lml0ZW17ZGlzcGxheTpibG9ja306OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH1cIjtcblxuY29uc3QgaXNHcm91cCA9IChlbCkgPT4gZWwudGFnTmFtZSA9PT0gQ29tYm9ib3hJdGVtR3JvdXAkMTtcbmNvbnN0IGl0ZW1VaWRQcmVmaXggPSBcImNvbWJvYm94LWl0ZW0tXCI7XG5jb25zdCBjaGlwVWlkUHJlZml4ID0gXCJjb21ib2JveC1jaGlwLVwiO1xuY29uc3QgbGFiZWxVaWRQcmVmaXggPSBcImNvbWJvYm94LWxhYmVsLVwiO1xuY29uc3QgbGlzdGJveFVpZFByZWZpeCA9IFwiY29tYm9ib3gtbGlzdGJveC1cIjtcbmNvbnN0IGlucHV0VWlkUHJlZml4ID0gXCJjb21ib2JveC1pbnB1dC1cIjtcbmNvbnN0IENvbWJvYm94ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVDb21ib2JveENoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUNvbWJvYm94Q2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUNvbWJvYm94RmlsdGVyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQ29tYm9ib3hGaWx0ZXJDaGFuZ2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hDaGlwQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVDb21ib2JveENoaXBDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVDb21ib2JveEJlZm9yZUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQ29tYm9ib3hCZWZvcmVDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVDb21ib2JveENsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQ29tYm9ib3hDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVDb21ib2JveEJlZm9yZU9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVDb21ib2JveEJlZm9yZU9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQ29tYm9ib3hPcGVuXCIsIDYpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIFN0YXRlL1Byb3BzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5wbGFjZW1lbnQgPSBkZWZhdWx0TWVudVBsYWNlbWVudDtcbiAgICB0aGlzLmludGVybmFsVmFsdWVDaGFuZ2VGbGFnID0gZmFsc2U7XG4gICAgdGhpcy50ZXh0SW5wdXQgPSBudWxsO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgKCkgPT4gdGhpcy51cGRhdGVJdGVtcygpKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKCkgPT4gdGhpcy5zZXRNYXhTY3JvbGxlckhlaWdodCgpKTtcbiAgICB0aGlzLmd1aWQgPSBndWlkKCk7XG4gICAgdGhpcy5pbnB1dEhlaWdodCA9IDA7XG4gICAgdGhpcy5pZ25vcmVTZWxlY3RlZEV2ZW50c0ZsYWcgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW5UcmFuc2l0aW9uUHJvcCA9IFwib3BhY2l0eVwiO1xuICAgIHRoaXMuc2V0RmlsdGVyZWRQbGFjZW1lbnRzID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBlbCwgZmxpcFBsYWNlbWVudHMgfSA9IHRoaXM7XG4gICAgICB0aGlzLmZpbHRlcmVkRmxpcFBsYWNlbWVudHMgPSBmbGlwUGxhY2VtZW50c1xuICAgICAgICA/IGZpbHRlckNvbXB1dGVkUGxhY2VtZW50cyhmbGlwUGxhY2VtZW50cywgZWwpXG4gICAgICAgIDogbnVsbDtcbiAgICB9O1xuICAgIHRoaXMuZ2V0VmFsdWUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBpdGVtcyA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0/LnZhbHVlPy50b1N0cmluZygpKTtcbiAgICAgIHJldHVybiBpdGVtcz8ubGVuZ3RoID8gKGl0ZW1zLmxlbmd0aCA+IDEgPyBpdGVtcyA6IGl0ZW1zWzBdKSA6IFwiXCI7XG4gICAgfTtcbiAgICB0aGlzLm9uTGFiZWxDbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgXCJUYWJcIjpcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNoaXBJbmRleCA9IC0xO1xuICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbUluZGV4ID0gLTE7XG4gICAgICAgICAgaWYgKHRoaXMuYWxsb3dDdXN0b21WYWx1ZXMgJiYgdGhpcy50ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmFkZEN1c3RvbUNoaXAodGhpcy50ZXh0LCB0cnVlKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKHRoaXMub3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgIHRoaXMucHJldmlvdXNDaGlwKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICB0aGlzLm5leHRDaGlwKCk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2hpZnRBY3RpdmVJdGVtSW5kZXgoLTEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRoaXMuY29tYm9ib3hJblZpZXdwb3J0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2hpZnRBY3RpdmVJdGVtSW5kZXgoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW5zdXJlUmVjZW50U2VsZWN0ZWRJdGVtSXNBY3RpdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmNvbWJvYm94SW5WaWV3cG9ydCgpKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgIGlmICghdGhpcy50ZXh0SW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zaGlmdEFjdGl2ZUl0ZW1JbmRleCgxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJIb21lXCI6XG4gICAgICAgICAgaWYgKCF0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUl0ZW1JbmRleCgwKTtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvQWN0aXZlSXRlbSgpO1xuICAgICAgICAgIGlmICghdGhpcy5jb21ib2JveEluVmlld3BvcnQoKSkge1xuICAgICAgICAgICAgdGhpcy5lbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkVuZFwiOlxuICAgICAgICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgodGhpcy5maWx0ZXJlZEl0ZW1zLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmVJdGVtKCk7XG4gICAgICAgICAgaWYgKCF0aGlzLmNvbWJvYm94SW5WaWV3cG9ydCgpKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgICAgaWYgKCF0aGlzLmNsZWFyRGlzYWJsZWQgJiYgIXRoaXMub3Blbikge1xuICAgICAgICAgICAgdGhpcy5jbGVhclZhbHVlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW1JbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbih0aGlzLmZpbHRlcmVkSXRlbXNbdGhpcy5hY3RpdmVJdGVtSW5kZXhdKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYWN0aXZlQ2hpcEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWN0aXZlQ2hpcCgpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAodGhpcy5hbGxvd0N1c3RvbVZhbHVlcyAmJiB0aGlzLnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ3VzdG9tQ2hpcCh0aGlzLnRleHQsIHRydWUpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgIGlmIChzdWJtaXRGb3JtKHRoaXMpKSB7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiRGVsZXRlXCI6XG4gICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVDaGlwSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWN0aXZlQ2hpcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICghdGhpcy50ZXh0ICYmIHRoaXMuaXNNdWx0aSgpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVMYXN0Q2hpcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlQ2xvc2VFbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVDb21ib2JveENsb3NlXCIsIHRoaXMudG9nZ2xlQ2xvc2VFbmQpO1xuICAgIH07XG4gICAgdGhpcy50b2dnbGVPcGVuRW5kID0gKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlQ29tYm9ib3hPcGVuXCIsIHRoaXMudG9nZ2xlT3BlbkVuZCk7XG4gICAgfTtcbiAgICB0aGlzLnNldE1heFNjcm9sbGVySGVpZ2h0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBsaXN0Q29udGFpbmVyRWwsIG9wZW4sIHJlZmVyZW5jZUVsIH0gPSB0aGlzO1xuICAgICAgaWYgKCFsaXN0Q29udGFpbmVyRWwgfHwgIW9wZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgICAgY29uc3QgbWF4U2Nyb2xsZXJIZWlnaHQgPSB0aGlzLmdldE1heFNjcm9sbGVySGVpZ2h0KCk7XG4gICAgICBsaXN0Q29udGFpbmVyRWwuc3R5bGUubWF4SGVpZ2h0ID0gbWF4U2Nyb2xsZXJIZWlnaHQgPiAwID8gYCR7bWF4U2Nyb2xsZXJIZWlnaHR9cHhgIDogXCJcIjtcbiAgICAgIGxpc3RDb250YWluZXJFbC5zdHlsZS5taW5XaWR0aCA9IGAke3JlZmVyZW5jZUVsLmNsaWVudFdpZHRofXB4YDtcbiAgICAgIGF3YWl0IHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICB9O1xuICAgIHRoaXMuY2FsY2l0ZUNoaXBDbG9zZUhhbmRsZXIgPSAoY29tYm9ib3hJdGVtKSA9PiB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbSA9PT0gY29tYm9ib3hJdGVtKTtcbiAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24oc2VsZWN0aW9uLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNhbGNpdGVDb21ib2JveENoaXBDbG9zZS5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgICBpZiAoY29tcG9zZWRQYXRoLnNvbWUoKG5vZGUpID0+IG5vZGUudGFnTmFtZSA9PT0gXCJDQUxDSVRFLUNISVBcIikpIHtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjb21wb3NlZFBhdGguc29tZSgobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3Q/LmNvbnRhaW5zKENTUyQyLmJ1dHRvbikpKSB7XG4gICAgICAgIHRoaXMuY2xlYXJWYWx1ZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgICAgdGhpcy5lbnN1cmVSZWNlbnRTZWxlY3RlZEl0ZW1Jc0FjdGl2ZSgpO1xuICAgIH07XG4gICAgdGhpcy5zZXRJbmFjdGl2ZUlmTm90Q29udGFpbmVkID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgIGlmICghdGhpcy5vcGVuIHx8IGNvbXBvc2VkUGF0aC5pbmNsdWRlcyh0aGlzLmVsKSB8fCBjb21wb3NlZFBhdGguaW5jbHVkZXModGhpcy5yZWZlcmVuY2VFbCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWxsb3dDdXN0b21WYWx1ZXMgJiYgdGhpcy50ZXh0LnRyaW0oKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hZGRDdXN0b21DaGlwKHRoaXMudGV4dCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiKSB7XG4gICAgICAgIGlmICh0aGlzLnRleHRJbnB1dCkge1xuICAgICAgICAgIHRoaXMudGV4dElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHQgPSBcIlwiO1xuICAgICAgICB0aGlzLmZpbHRlckl0ZW1zKFwiXCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUl0ZW1JbmRleCgtMSk7XG4gICAgICB9XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9O1xuICAgIHRoaXMuc2V0RmxvYXRpbmdFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5mbG9hdGluZ0VsID0gZWw7XG4gICAgICBjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLnJlZmVyZW5jZUVsLCB0aGlzLmZsb2F0aW5nRWwpO1xuICAgIH07XG4gICAgdGhpcy5zZXRDb250YWluZXJFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsKTtcbiAgICAgIHRoaXMubGlzdENvbnRhaW5lckVsID0gZWw7XG4gICAgICB0aGlzLnRyYW5zaXRpb25FbCA9IGVsO1xuICAgICAgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0UmVmZXJlbmNlRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMucmVmZXJlbmNlRWwgPSBlbDtcbiAgICAgIGNvbm5lY3RGbG9hdGluZ1VJKHRoaXMsIHRoaXMucmVmZXJlbmNlRWwsIHRoaXMuZmxvYXRpbmdFbCk7XG4gICAgfTtcbiAgICB0aGlzLmlucHV0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnRleHQgPSB2YWx1ZTtcbiAgICAgIHRoaXMuZmlsdGVySXRlbXModmFsdWUpO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQ2hpcEluZGV4ID0gLTE7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmZpbHRlckl0ZW1zID0gKCgpID0+IHtcbiAgICAgIGNvbnN0IGZpbmQgPSAoaXRlbSwgZmlsdGVyZWREYXRhKSA9PiBpdGVtICYmXG4gICAgICAgIGZpbHRlcmVkRGF0YS5zb21lKCh7IGxhYmVsLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgaWYgKGlzR3JvdXAoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gaXRlbS5sYWJlbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICh2YWx1ZSA9PT0gaXRlbS50ZXh0TGFiZWwgfHxcbiAgICAgICAgICAgIHZhbHVlID09PSBpdGVtLnZhbHVlIHx8XG4gICAgICAgICAgICBsYWJlbCA9PT0gaXRlbS50ZXh0TGFiZWwgfHxcbiAgICAgICAgICAgIGxhYmVsID09PSBpdGVtLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICByZXR1cm4gZGVib3VuY2UoKHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gZmlsdGVyKHRoaXMuZGF0YSwgdGV4dCk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRDb21iaW5lZEl0ZW1zKCk7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBoaWRkZW4gPSAhZmluZChpdGVtLCBmaWx0ZXJlZERhdGEpO1xuICAgICAgICAgIGl0ZW0uaGlkZGVuID0gaGlkZGVuO1xuICAgICAgICAgIGNvbnN0IFtwYXJlbnQsIGdyYW5kcGFyZW50XSA9IGl0ZW0uYW5jZXN0b3JzO1xuICAgICAgICAgIGlmIChmaW5kKHBhcmVudCwgZmlsdGVyZWREYXRhKSB8fCBmaW5kKGdyYW5kcGFyZW50LCBmaWx0ZXJlZERhdGEpKSB7XG4gICAgICAgICAgICBpdGVtLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgICAgaXRlbS5hbmNlc3RvcnMuZm9yRWFjaCgoYW5jZXN0b3IpID0+IChhbmNlc3Rvci5oaWRkZW4gPSBmYWxzZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuZ2V0ZmlsdGVyZWRJdGVtcygpO1xuICAgICAgICB0aGlzLmNhbGNpdGVDb21ib2JveEZpbHRlckNoYW5nZS5lbWl0KCk7XG4gICAgICB9LCAxMDApO1xuICAgIH0pKCk7XG4gICAgdGhpcy5pbnRlcm5hbENvbWJvYm94Q2hhbmdlRXZlbnQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNpdGVDb21ib2JveENoYW5nZS5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLmVtaXRDb21ib2JveENoYW5nZSA9IGRlYm91bmNlKHRoaXMuaW50ZXJuYWxDb21ib2JveENoYW5nZUV2ZW50LCAwKTtcbiAgICB0aGlzLnVwZGF0ZUl0ZW1zID0gKCkgPT4ge1xuICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcbiAgICAgIHRoaXMuZ3JvdXBJdGVtcyA9IHRoaXMuZ2V0R3JvdXBJdGVtcygpO1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5nZXREYXRhKCk7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSB0aGlzLmdldFNlbGVjdGVkSXRlbXMoKTtcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuZ2V0ZmlsdGVyZWRJdGVtcygpO1xuICAgICAgdGhpcy5uZWVkc0ljb24gPSB0aGlzLmdldE5lZWRzSWNvbigpO1xuICAgICAgaWYgKCF0aGlzLmFsbG93Q3VzdG9tVmFsdWVzKSB7XG4gICAgICAgIHRoaXMuc2V0TWF4U2Nyb2xsZXJIZWlnaHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmVJdGVtID0gKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlSXRlbSA9IHRoaXMuZmlsdGVyZWRJdGVtc1t0aGlzLmFjdGl2ZUl0ZW1JbmRleF07XG4gICAgICBpZiAoIWFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jYWxjdWxhdGVTaW5nbGVJdGVtSGVpZ2h0KGFjdGl2ZUl0ZW0pO1xuICAgICAgY29uc3QgeyBvZmZzZXRIZWlnaHQsIHNjcm9sbFRvcCB9ID0gdGhpcy5saXN0Q29udGFpbmVyRWw7XG4gICAgICBpZiAob2Zmc2V0SGVpZ2h0ICsgc2Nyb2xsVG9wIDwgYWN0aXZlSXRlbS5vZmZzZXRUb3AgKyBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5saXN0Q29udGFpbmVyRWwuc2Nyb2xsVG9wID0gYWN0aXZlSXRlbS5vZmZzZXRUb3AgLSBvZmZzZXRIZWlnaHQgKyBoZWlnaHQ7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhY3RpdmVJdGVtLm9mZnNldFRvcCA8IHNjcm9sbFRvcCkge1xuICAgICAgICB0aGlzLmxpc3RDb250YWluZXJFbC5zY3JvbGxUb3AgPSBhY3RpdmVJdGVtLm9mZnNldFRvcDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY29tYm9ib3hGb2N1c0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnRleHRJbnB1dD8uZm9jdXMoKTtcbiAgICB9O1xuICAgIHRoaXMuY29tYm9ib3hCbHVySGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5zZXRJbmFjdGl2ZUlmTm90Q29udGFpbmVkKGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuY2xlYXJEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGxhY2Vob2xkZXJJY29uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGxhY2Vob2xkZXJJY29uRmxpcFJ0bCA9IGZhbHNlO1xuICAgIHRoaXMubWF4SXRlbXMgPSAwO1xuICAgIHRoaXMubmFtZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFsbG93Q3VzdG9tVmFsdWVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uaW5nID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBcIm11bHRpcGxlXCI7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIHRoaXMuZmxpcFBsYWNlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gW107XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuZ3JvdXBJdGVtcyA9IFtdO1xuICAgIHRoaXMubmVlZHNJY29uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlSXRlbUluZGV4ID0gLTE7XG4gICAgdGhpcy5hY3RpdmVDaGlwSW5kZXggPSAtMTtcbiAgICB0aGlzLmFjdGl2ZURlc2NlbmRhbnQgPSBcIlwiO1xuICAgIHRoaXMudGV4dCA9IFwiXCI7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb3BlbkhhbmRsZXIoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldE1heFNjcm9sbGVySGVpZ2h0KCk7XG4gIH1cbiAgaGFuZGxlRGlzYWJsZWRDaGFuZ2UodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgbWF4SXRlbXNIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0TWF4U2Nyb2xsZXJIZWlnaHQoKTtcbiAgfVxuICBvdmVybGF5UG9zaXRpb25pbmdIYW5kbGVyKCkge1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICB2YWx1ZUhhbmRsZXIodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuaW50ZXJuYWxWYWx1ZUNoYW5nZUZsYWcpIHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnNlbGVjdGVkID0gdmFsdWUuaW5jbHVkZXMoaXRlbS52YWx1ZSkpKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnNlbGVjdGVkID0gdmFsdWUgPT09IGl0ZW0udmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zZWxlY3RlZCA9IGZhbHNlKSk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1zKCk7XG4gICAgfVxuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZmxpcFBsYWNlbWVudHNIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0RmlsdGVyZWRQbGFjZW1lbnRzKCk7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIHNlbGVjdGVkSXRlbXNIYW5kbGVyKCkge1xuICAgIHRoaXMuaW50ZXJuYWxWYWx1ZUNoYW5nZUZsYWcgPSB0cnVlO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgdGhpcy5pbnRlcm5hbFZhbHVlQ2hhbmdlRmxhZyA9IGZhbHNlO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRvY3VtZW50Q2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0SW5hY3RpdmVJZk5vdENvbnRhaW5lZChldmVudCk7XG4gIH1cbiAgY2FsY2l0ZUNvbWJvYm94SXRlbUNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5pZ25vcmVTZWxlY3RlZEV2ZW50c0ZsYWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5maWx0ZXJlZEl0ZW1zLmluZGV4T2YodGFyZ2V0KTtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZUl0ZW1JbmRleChuZXdJbmRleCk7XG4gICAgdGhpcy50b2dnbGVTZWxlY3Rpb24odGFyZ2V0LCB0YXJnZXQuc2VsZWN0ZWQpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBkZWxheWVkXG4gICAqL1xuICBhc3luYyByZXBvc2l0aW9uKGRlbGF5ZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgZmxvYXRpbmdFbCwgcmVmZXJlbmNlRWwsIHBsYWNlbWVudCwgb3ZlcmxheVBvc2l0aW9uaW5nLCBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzIH0gPSB0aGlzO1xuICAgIHJldHVybiByZXBvc2l0aW9uKHRoaXMsIHtcbiAgICAgIGZsb2F0aW5nRWwsXG4gICAgICByZWZlcmVuY2VFbCxcbiAgICAgIG92ZXJsYXlQb3NpdGlvbmluZyxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIGZsaXBQbGFjZW1lbnRzOiBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzLFxuICAgICAgdHlwZTogXCJtZW51XCJcbiAgICB9LCBkZWxheWVkKTtcbiAgfVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy50ZXh0SW5wdXQ/LmZvY3VzKCk7XG4gICAgdGhpcy5hY3RpdmVDaGlwSW5kZXggPSAtMTtcbiAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IC0xO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMuaW50ZXJuYWxWYWx1ZUNoYW5nZUZsYWcgPSB0cnVlO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgdGhpcy5pbnRlcm5hbFZhbHVlQ2hhbmdlRmxhZyA9IGZhbHNlO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cygpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLm9wZW5IYW5kbGVyKCk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBhZnRlckNvbm5lY3REZWZhdWx0VmFsdWVTZXQodGhpcywgdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbC5vZmZzZXRIZWlnaHQgIT09IHRoaXMuaW5wdXRIZWlnaHQpIHtcbiAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICAgIHRoaXMuaW5wdXRIZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcbiAgICB9XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGbG9hdGluZ1VJKHRoaXMsIHRoaXMucmVmZXJlbmNlRWwsIHRoaXMuZmxvYXRpbmdFbCk7XG4gICAgZGlzY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICAvKiogd2hlbiBzZWFyY2ggdGV4dCBpcyBjbGVhcmVkLCByZXNldCBhY3RpdmUgdG8gICovXG4gIHRleHRIYW5kbGVyKCkge1xuICAgIHRoaXMudXBkYXRlQWN0aXZlSXRlbUluZGV4KC0xKTtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY2xlYXJWYWx1ZSgpIHtcbiAgICB0aGlzLmlnbm9yZVNlbGVjdGVkRXZlbnRzRmxhZyA9IHRydWU7XG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKChlbCkgPT4gKGVsLnNlbGVjdGVkID0gZmFsc2UpKTtcbiAgICB0aGlzLmlnbm9yZVNlbGVjdGVkRXZlbnRzRmxhZyA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMuZW1pdENvbWJvYm94Q2hhbmdlKCk7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgoLTEpO1xuICAgIHRoaXMucmVzZXRUZXh0KCk7XG4gICAgdGhpcy5maWx0ZXJJdGVtcyhcIlwiKTtcbiAgICB0aGlzLnNldEZvY3VzKCk7XG4gIH1cbiAgY29tYm9ib3hJblZpZXdwb3J0KCkge1xuICAgIGNvbnN0IGJvdW5kaW5nID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gKGJvdW5kaW5nLnRvcCA+PSAwICYmXG4gICAgICBib3VuZGluZy5sZWZ0ID49IDAgJiZcbiAgICAgIGJvdW5kaW5nLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpICYmXG4gICAgICBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSk7XG4gIH1cbiAgb25CZWZvcmVPcGVuKCkge1xuICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmVJdGVtKCk7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hCZWZvcmVPcGVuLmVtaXQoKTtcbiAgfVxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hPcGVuLmVtaXQoKTtcbiAgfVxuICBvbkJlZm9yZUNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZUNvbWJvYm94QmVmb3JlQ2xvc2UuZW1pdCgpO1xuICB9XG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hDbG9zZS5lbWl0KCk7XG4gIH1cbiAgZW5zdXJlUmVjZW50U2VsZWN0ZWRJdGVtSXNBY3RpdmUoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZEl0ZW1zIH0gPSB0aGlzO1xuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDAgPyAwIDogdGhpcy5pdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbXNbc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxXSk7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgodGFyZ2V0SW5kZXgpO1xuICB9XG4gIGdldE1heFNjcm9sbGVySGVpZ2h0KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRDb21iaW5lZEl0ZW1zKCkuZmlsdGVyKChpdGVtKSA9PiAhaXRlbS5oaWRkZW4pO1xuICAgIGNvbnN0IHsgbWF4SXRlbXMgfSA9IHRoaXM7XG4gICAgbGV0IGl0ZW1zVG9Qcm9jZXNzID0gMDtcbiAgICBsZXQgbWF4U2Nyb2xsZXJIZWlnaHQgPSAwO1xuICAgIGlmIChpdGVtcy5sZW5ndGggPiBtYXhJdGVtcykge1xuICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbXNUb1Byb2Nlc3MgPCBtYXhJdGVtcyAmJiBtYXhJdGVtcyA+IDApIHtcbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNhbGN1bGF0ZVNpbmdsZUl0ZW1IZWlnaHQoaXRlbSk7XG4gICAgICAgICAgaWYgKGhlaWdodCA+IDApIHtcbiAgICAgICAgICAgIG1heFNjcm9sbGVySGVpZ2h0ICs9IGhlaWdodDtcbiAgICAgICAgICAgIGl0ZW1zVG9Qcm9jZXNzKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1heFNjcm9sbGVySGVpZ2h0O1xuICB9XG4gIGNhbGN1bGF0ZVNpbmdsZUl0ZW1IZWlnaHQoaXRlbSkge1xuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaGVpZ2h0ID0gaXRlbS5vZmZzZXRIZWlnaHQ7XG4gICAgLy8gaWYgaXRlbSBoYXMgY2hpbGRyZW4gaXRlbXMsIGRvbid0IGNvdW50IHRoZWlyIGhlaWdodCB0d2ljZVxuICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoQ29tYm9ib3hDaGlsZFNlbGVjdG9yKSk7XG4gICAgY2hpbGRyZW5cbiAgICAgIC5tYXAoKGNoaWxkKSA9PiBjaGlsZD8ub2Zmc2V0SGVpZ2h0KVxuICAgICAgLmZvckVhY2goKG9mZnNldEhlaWdodCkgPT4ge1xuICAgICAgaGVpZ2h0IC09IG9mZnNldEhlaWdodDtcbiAgICB9KTtcbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG4gIGdldENvbWJpbmVkSXRlbXMoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmdyb3VwSXRlbXMsIC4uLnRoaXMuaXRlbXNdO1xuICB9XG4gIHRvZ2dsZVNlbGVjdGlvbihpdGVtLCB2YWx1ZSA9ICFpdGVtLnNlbGVjdGVkKSB7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzTXVsdGkoKSkge1xuICAgICAgaXRlbS5zZWxlY3RlZCA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVBbmNlc3RvcnMoaXRlbSk7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSB0aGlzLmdldFNlbGVjdGVkSXRlbXMoKTtcbiAgICAgIHRoaXMuZW1pdENvbWJvYm94Q2hhbmdlKCk7XG4gICAgICB0aGlzLnJlc2V0VGV4dCgpO1xuICAgICAgdGhpcy5maWx0ZXJJdGVtcyhcIlwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmlnbm9yZVNlbGVjdGVkRXZlbnRzRmxhZyA9IHRydWU7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGVsKSA9PiAoZWwuc2VsZWN0ZWQgPSBlbCA9PT0gaXRlbSA/IHZhbHVlIDogZmFsc2UpKTtcbiAgICAgIHRoaXMuaWdub3JlU2VsZWN0ZWRFdmVudHNGbGFnID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSB0aGlzLmdldFNlbGVjdGVkSXRlbXMoKTtcbiAgICAgIHRoaXMuZW1pdENvbWJvYm94Q2hhbmdlKCk7XG4gICAgICBpZiAodGhpcy50ZXh0SW5wdXQpIHtcbiAgICAgICAgdGhpcy50ZXh0SW5wdXQudmFsdWUgPSBpdGVtLnRleHRMYWJlbDtcbiAgICAgIH1cbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgoLTEpO1xuICAgICAgdGhpcy5yZXNldFRleHQoKTtcbiAgICAgIHRoaXMuZmlsdGVySXRlbXMoXCJcIik7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUFuY2VzdG9ycyhpdGVtKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSAhPT0gXCJhbmNlc3RvcnNcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhbmNlc3RvcnMgPSBnZXRJdGVtQW5jZXN0b3JzKGl0ZW0pO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZ2V0SXRlbUNoaWxkcmVuKGl0ZW0pO1xuICAgIGlmIChpdGVtLnNlbGVjdGVkKSB7XG4gICAgICBhbmNlc3RvcnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoZWwpID0+IChlbC5zZWxlY3RlZCA9IGZhbHNlKSk7XG4gICAgICBbLi4uYW5jZXN0b3JzXS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBpZiAoIWhhc0FjdGl2ZUNoaWxkcmVuKGVsKSkge1xuICAgICAgICAgIGVsLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBnZXRmaWx0ZXJlZEl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gIWl0ZW0uaGlkZGVuKTtcbiAgfVxuICBnZXRTZWxlY3RlZEl0ZW1zKCkge1xuICAgIGlmICghdGhpcy5pc011bHRpKCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5pdGVtcy5maW5kKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKTtcbiAgICAgIHJldHVybiBtYXRjaCA/IFttYXRjaF0gOiBbXTtcbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLml0ZW1zXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNlbGVjdGVkICYmICh0aGlzLnNlbGVjdGlvbk1vZGUgIT09IFwiYW5jZXN0b3JzXCIgfHwgIWhhc0FjdGl2ZUNoaWxkcmVuKGl0ZW0pKSlcbiAgICAgIC8qKiBQcmVzZXJ2ZSBvcmRlciBvZiBlbnRlcmVkIHRhZ3MgKi9cbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBhSWR4ID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoYSk7XG4gICAgICBjb25zdCBiSWR4ID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoYik7XG4gICAgICBpZiAoYUlkeCA+IC0xICYmIGJJZHggPiAtMSkge1xuICAgICAgICByZXR1cm4gYUlkeCAtIGJJZHg7XG4gICAgICB9XG4gICAgICByZXR1cm4gYklkeCAtIGFJZHg7XG4gICAgfSkpO1xuICB9XG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubWFwKChpdGVtKSA9PiAoe1xuICAgICAgZmlsdGVyRGlzYWJsZWQ6IGl0ZW0uZmlsdGVyRGlzYWJsZWQsXG4gICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgIGxhYmVsOiBpdGVtLnRleHRMYWJlbFxuICAgIH0pKTtcbiAgfVxuICBnZXROZWVkc0ljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJzaW5nbGVcIiAmJiB0aGlzLml0ZW1zLnNvbWUoKGl0ZW0pID0+IGl0ZW0uaWNvbik7XG4gIH1cbiAgcmVzZXRUZXh0KCkge1xuICAgIGlmICh0aGlzLnRleHRJbnB1dCkge1xuICAgICAgdGhpcy50ZXh0SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgICB0aGlzLnRleHQgPSBcIlwiO1xuICB9XG4gIGdldEl0ZW1zKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoQ29tYm9ib3hJdGVtJDEpKTtcbiAgICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiAhaXRlbS5kaXNhYmxlZCk7XG4gIH1cbiAgZ2V0R3JvdXBJdGVtcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoQ29tYm9ib3hJdGVtR3JvdXAkMSkpO1xuICB9XG4gIGFkZEN1c3RvbUNoaXAodmFsdWUsIGZvY3VzKSB7XG4gICAgY29uc3QgZXhpc3RpbmdJdGVtID0gdGhpcy5pdGVtcy5maW5kKChlbCkgPT4gZWwudGV4dExhYmVsID09PSB2YWx1ZSk7XG4gICAgaWYgKGV4aXN0aW5nSXRlbSkge1xuICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24oZXhpc3RpbmdJdGVtLCB0cnVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aSgpKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHRoaXMuc2VsZWN0ZWRJdGVtc1t0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMV0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KENvbWJvYm94SXRlbSQxKTtcbiAgICAgIGl0ZW0udmFsdWUgPSB2YWx1ZTtcbiAgICAgIGl0ZW0udGV4dExhYmVsID0gdmFsdWU7XG4gICAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICB0aGlzLnJlc2V0VGV4dCgpO1xuICAgICAgaWYgKGZvY3VzKSB7XG4gICAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlSXRlbXMoKTtcbiAgICAgIHRoaXMuZmlsdGVySXRlbXMoXCJcIik7XG4gICAgICB0aGlzLmVtaXRDb21ib2JveENoYW5nZSgpO1xuICAgIH1cbiAgfVxuICByZW1vdmVBY3RpdmVDaGlwKCkge1xuICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHRoaXMuc2VsZWN0ZWRJdGVtc1t0aGlzLmFjdGl2ZUNoaXBJbmRleF0sIGZhbHNlKTtcbiAgICB0aGlzLnNldEZvY3VzKCk7XG4gIH1cbiAgcmVtb3ZlTGFzdENoaXAoKSB7XG4gICAgdGhpcy50b2dnbGVTZWxlY3Rpb24odGhpcy5zZWxlY3RlZEl0ZW1zW3RoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxXSwgZmFsc2UpO1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxuICBwcmV2aW91c0NoaXAoKSB7XG4gICAgaWYgKHRoaXMudGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLmFjdGl2ZUNoaXBJbmRleDtcbiAgICB0aGlzLmFjdGl2ZUNoaXBJbmRleCA9IGFjdGl2ZSA9PT0gLTEgPyBsZW5ndGggOiBNYXRoLm1heChhY3RpdmUgLSAxLCAwKTtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZUl0ZW1JbmRleCgtMSk7XG4gICAgdGhpcy5mb2N1c0NoaXAoKTtcbiAgfVxuICBuZXh0Q2hpcCgpIHtcbiAgICBpZiAodGhpcy50ZXh0IHx8IHRoaXMuYWN0aXZlQ2hpcEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsYXN0ID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmFjdGl2ZUNoaXBJbmRleCArIDE7XG4gICAgaWYgKG5ld0luZGV4ID4gbGFzdCkge1xuICAgICAgdGhpcy5hY3RpdmVDaGlwSW5kZXggPSAtMTtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUNoaXBJbmRleCA9IG5ld0luZGV4O1xuICAgICAgdGhpcy5mb2N1c0NoaXAoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgoLTEpO1xuICB9XG4gIGZvY3VzQ2hpcCgpIHtcbiAgICBjb25zdCBndWlkID0gdGhpcy5zZWxlY3RlZEl0ZW1zW3RoaXMuYWN0aXZlQ2hpcEluZGV4XT8uZ3VpZDtcbiAgICBjb25zdCBjaGlwID0gZ3VpZFxuICAgICAgPyB0aGlzLnJlZmVyZW5jZUVsLnF1ZXJ5U2VsZWN0b3IoYCMke2NoaXBVaWRQcmVmaXh9JHtndWlkfWApXG4gICAgICA6IG51bGw7XG4gICAgY2hpcD8uc2V0Rm9jdXMoKTtcbiAgfVxuICBzaGlmdEFjdGl2ZUl0ZW1JbmRleChkZWx0YSkge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB0aGlzLmZpbHRlcmVkSXRlbXM7XG4gICAgY29uc3QgbmV3SW5kZXggPSAodGhpcy5hY3RpdmVJdGVtSW5kZXggKyBsZW5ndGggKyBkZWx0YSkgJSBsZW5ndGg7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgobmV3SW5kZXgpO1xuICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmVJdGVtKCk7XG4gIH1cbiAgdXBkYXRlQWN0aXZlSXRlbUluZGV4KGluZGV4KSB7XG4gICAgdGhpcy5hY3RpdmVJdGVtSW5kZXggPSBpbmRleDtcbiAgICBsZXQgYWN0aXZlRGVzY2VuZGFudCA9IG51bGw7XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zLmZvckVhY2goKGVsLCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcbiAgICAgICAgZWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgYWN0aXZlRGVzY2VuZGFudCA9IGAke2l0ZW1VaWRQcmVmaXh9JHtlbC5ndWlkfWA7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5hY3RpdmVEZXNjZW5kYW50ID0gYWN0aXZlRGVzY2VuZGFudDtcbiAgICBpZiAodGhpcy5hY3RpdmVJdGVtSW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5hY3RpdmVDaGlwSW5kZXggPSAtMTtcbiAgICB9XG4gIH1cbiAgaXNNdWx0aSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25Nb2RlICE9PSBcInNpbmdsZVwiO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyQ2hpcHMoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVDaGlwSW5kZXgsIHNjYWxlLCBzZWxlY3Rpb25Nb2RlLCBtZXNzYWdlcyB9ID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgY29uc3QgY2hpcENsYXNzZXMgPSB7XG4gICAgICAgIGNoaXA6IHRydWUsXG4gICAgICAgIFwiY2hpcC0tYWN0aXZlXCI6IGFjdGl2ZUNoaXBJbmRleCA9PT0gaVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGFuY2VzdG9ycyA9IFsuLi5nZXRJdGVtQW5jZXN0b3JzKGl0ZW0pXS5yZXZlcnNlKCk7XG4gICAgICBjb25zdCBwYXRoTGFiZWwgPSBbLi4uYW5jZXN0b3JzLCBpdGVtXS5tYXAoKGVsKSA9PiBlbC50ZXh0TGFiZWwpO1xuICAgICAgY29uc3QgbGFiZWwgPSBzZWxlY3Rpb25Nb2RlICE9PSBcImFuY2VzdG9yc1wiID8gaXRlbS50ZXh0TGFiZWwgOiBwYXRoTGFiZWwuam9pbihcIiAvIFwiKTtcbiAgICAgIHJldHVybiAoaChcImNhbGNpdGUtY2hpcFwiLCB7IGNsYXNzOiBjaGlwQ2xhc3NlcywgY2xvc2FibGU6IHRydWUsIGljb246IGl0ZW0uaWNvbiwgaWNvbkZsaXBSdGw6IGl0ZW0uaWNvbkZsaXBSdGwsIGlkOiBpdGVtLmd1aWQgPyBgJHtjaGlwVWlkUHJlZml4fSR7aXRlbS5ndWlkfWAgOiBudWxsLCBrZXk6IGl0ZW0udGV4dExhYmVsLCBtZXNzYWdlT3ZlcnJpZGVzOiB7IGRpc21pc3NMYWJlbDogbWVzc2FnZXMucmVtb3ZlVGFnIH0sIG9uQ2FsY2l0ZUNoaXBDbG9zZTogKCkgPT4gdGhpcy5jYWxjaXRlQ2hpcENsb3NlSGFuZGxlcihpdGVtKSwgc2NhbGU6IHNjYWxlLCB0aXRsZTogbGFiZWwsIHZhbHVlOiBpdGVtLnZhbHVlIH0sIGxhYmVsKSk7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVySW5wdXQoKSB7XG4gICAgY29uc3QgeyBndWlkLCBkaXNhYmxlZCwgcGxhY2Vob2xkZXIsIHNlbGVjdGlvbk1vZGUsIHNlbGVjdGVkSXRlbXMsIG9wZW4gfSA9IHRoaXM7XG4gICAgY29uc3Qgc2luZ2xlID0gc2VsZWN0aW9uTW9kZSA9PT0gXCJzaW5nbGVcIjtcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBzZWxlY3RlZEl0ZW1zWzBdO1xuICAgIGNvbnN0IHNob3dMYWJlbCA9ICFvcGVuICYmIHNpbmdsZSAmJiAhIXNlbGVjdGVkSXRlbTtcbiAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgXCJpbnB1dC13cmFwXCI6IHRydWUsXG4gICAgICAgIFwiaW5wdXQtd3JhcC0tc2luZ2xlXCI6IHNpbmdsZVxuICAgICAgfSB9LCBzaG93TGFiZWwgJiYgKGgoXCJzcGFuXCIsIHsgY2xhc3M6IHtcbiAgICAgICAgbGFiZWw6IHRydWUsXG4gICAgICAgIFwibGFiZWwtLWljb25cIjogISFzZWxlY3RlZEl0ZW0/Lmljb25cbiAgICAgIH0sIGtleTogXCJsYWJlbFwiIH0sIHNlbGVjdGVkSXRlbS50ZXh0TGFiZWwpKSwgaChcImlucHV0XCIsIHsgXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIjogdGhpcy5hY3RpdmVEZXNjZW5kYW50LCBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibGlzdFwiLCBcImFyaWEtY29udHJvbHNcIjogYCR7bGlzdGJveFVpZFByZWZpeH0ke2d1aWR9YCwgXCJhcmlhLWxhYmVsXCI6IGdldExhYmVsVGV4dCh0aGlzKSwgY2xhc3M6IHtcbiAgICAgICAgaW5wdXQ6IHRydWUsXG4gICAgICAgIFwiaW5wdXQtLXNpbmdsZVwiOiB0cnVlLFxuICAgICAgICBcImlucHV0LS10cmFuc3BhcmVudFwiOiB0aGlzLmFjdGl2ZUNoaXBJbmRleCA+IC0xLFxuICAgICAgICBcImlucHV0LS1oaWRkZW5cIjogc2hvd0xhYmVsLFxuICAgICAgICBcImlucHV0LS1pY29uXCI6ICEhdGhpcy5wbGFjZWhvbGRlckljb25cbiAgICAgIH0sIGRpc2FibGVkOiBkaXNhYmxlZCwgaWQ6IGAke2lucHV0VWlkUHJlZml4fSR7Z3VpZH1gLCBrZXk6IFwiaW5wdXRcIiwgb25CbHVyOiB0aGlzLmNvbWJvYm94Qmx1ckhhbmRsZXIsIG9uRm9jdXM6IHRoaXMuY29tYm9ib3hGb2N1c0hhbmRsZXIsIG9uSW5wdXQ6IHRoaXMuaW5wdXRIYW5kbGVyLCBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsIHR5cGU6IFwidGV4dFwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMudGV4dElucHV0ID0gZWwpIH0pKSk7XG4gIH1cbiAgcmVuZGVyTGlzdEJveE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRJdGVtcy5tYXAoKGl0ZW0pID0+IChoKFwibGlcIiwgeyBcImFyaWEtc2VsZWN0ZWRcIjogdG9BcmlhQm9vbGVhbihpdGVtLnNlbGVjdGVkKSwgaWQ6IGl0ZW0uZ3VpZCA/IGAke2l0ZW1VaWRQcmVmaXh9JHtpdGVtLmd1aWR9YCA6IG51bGwsIHJvbGU6IFwib3B0aW9uXCIsIHRhYmluZGV4OiBcIi0xXCIgfSwgaXRlbS50ZXh0TGFiZWwpKSk7XG4gIH1cbiAgcmVuZGVyRmxvYXRpbmdVSUNvbnRhaW5lcigpIHtcbiAgICBjb25zdCB7IHNldEZsb2F0aW5nRWwsIHNldENvbnRhaW5lckVsLCBvcGVuIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICBbQ1NTJDMubGlzdENvbnRhaW5lcl06IHRydWUsXG4gICAgICBbRmxvYXRpbmdDU1MuYW5pbWF0aW9uXTogdHJ1ZSxcbiAgICAgIFtGbG9hdGluZ0NTUy5hbmltYXRpb25BY3RpdmVdOiBvcGVuXG4gICAgfTtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczoge1xuICAgICAgICBcImZsb2F0aW5nLXVpLWNvbnRhaW5lclwiOiB0cnVlLFxuICAgICAgICBcImZsb2F0aW5nLXVpLWNvbnRhaW5lci0tYWN0aXZlXCI6IG9wZW5cbiAgICAgIH0sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogc2V0RmxvYXRpbmdFbCB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IGNsYXNzZXMsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogc2V0Q29udGFpbmVyRWwgfSwgaChcInVsXCIsIHsgY2xhc3M6IHsgbGlzdDogdHJ1ZSwgXCJsaXN0LS1oaWRlXCI6ICFvcGVuIH0gfSwgaChcInNsb3RcIiwgbnVsbCkpKSkpO1xuICB9XG4gIHJlbmRlckljb25TdGFydCgpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkSXRlbXMsIHBsYWNlaG9sZGVySWNvbiwgc2VsZWN0aW9uTW9kZSwgcGxhY2Vob2xkZXJJY29uRmxpcFJ0bCB9ID0gdGhpcztcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBzZWxlY3RlZEl0ZW1zWzBdO1xuICAgIGNvbnN0IHNlbGVjdGVkSWNvbiA9IHNlbGVjdGVkSXRlbT8uaWNvbjtcbiAgICBjb25zdCBzaW5nbGVTZWxlY3Rpb25Nb2RlID0gc2VsZWN0aW9uTW9kZSA9PT0gXCJzaW5nbGVcIjtcbiAgICBjb25zdCBpY29uQXRTdGFydCA9ICF0aGlzLm9wZW4gJiYgc2VsZWN0ZWRJdGVtXG4gICAgICA/ICEhc2VsZWN0ZWRJY29uICYmIHNpbmdsZVNlbGVjdGlvbk1vZGVcbiAgICAgIDogISF0aGlzLnBsYWNlaG9sZGVySWNvbiAmJiAoIXNlbGVjdGVkSXRlbSB8fCBzaW5nbGVTZWxlY3Rpb25Nb2RlKTtcbiAgICByZXR1cm4gKGljb25BdFN0YXJ0ICYmIChoKFwic3BhblwiLCB7IGNsYXNzOiBcImljb24tc3RhcnRcIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IFwic2VsZWN0ZWQtaWNvblwiLCBmbGlwUnRsOiB0aGlzLm9wZW4gJiYgc2VsZWN0ZWRJdGVtID8gc2VsZWN0ZWRJdGVtLmljb25GbGlwUnRsIDogcGxhY2Vob2xkZXJJY29uRmxpcFJ0bCwgaWNvbjogIXRoaXMub3BlbiAmJiBzZWxlY3RlZEl0ZW0gPyBzZWxlY3RlZEljb24gOiBwbGFjZWhvbGRlckljb24sIHNjYWxlOiBcInNcIiB9KSkpKTtcbiAgfVxuICByZW5kZXJJY29uRW5kKCkge1xuICAgIGNvbnN0IHsgb3BlbiB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiaWNvbi1lbmRcIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogb3BlbiA/IFwiY2hldnJvbi11cFwiIDogXCJjaGV2cm9uLWRvd25cIiwgc2NhbGU6IFwic1wiIH0pKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZ3VpZCwgbGFiZWwsIG9wZW4gfSA9IHRoaXM7XG4gICAgY29uc3Qgc2luZ2xlID0gdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiO1xuICAgIGNvbnN0IGlzQ2xlYXJhYmxlID0gIXRoaXMuY2xlYXJEaXNhYmxlZCAmJiB0aGlzLnZhbHVlPy5sZW5ndGggPiAwO1xuICAgIHJldHVybiAoaChIb3N0LCB7IG9uQ2xpY2s6IHRoaXMuY29tYm9ib3hGb2N1c0hhbmRsZXIgfSwgaChcImRpdlwiLCB7IFwiYXJpYS1hdXRvY29tcGxldGVcIjogXCJsaXN0XCIsIFwiYXJpYS1jb250cm9sc1wiOiBgJHtsaXN0Ym94VWlkUHJlZml4fSR7Z3VpZH1gLCBcImFyaWEtZXhwYW5kZWRcIjogdG9BcmlhQm9vbGVhbihvcGVuKSwgXCJhcmlhLWhhc3BvcHVwXCI6IFwibGlzdGJveFwiLCBcImFyaWEtbGFiZWxcIjogZ2V0TGFiZWxUZXh0KHRoaXMpLCBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLCBcImFyaWEtb3duc1wiOiBgJHtsaXN0Ym94VWlkUHJlZml4fSR7Z3VpZH1gLCBjbGFzczoge1xuICAgICAgICB3cmFwcGVyOiB0cnVlLFxuICAgICAgICBcIndyYXBwZXItLXNpbmdsZVwiOiBzaW5nbGUgfHwgIXRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGgsXG4gICAgICAgIFwid3JhcHBlci0tYWN0aXZlXCI6IG9wZW5cbiAgICAgIH0sIG9uQ2xpY2s6IHRoaXMuY2xpY2tIYW5kbGVyLCBvbktleURvd246IHRoaXMua2V5RG93bkhhbmRsZXIsIHJvbGU6IFwiY29tYm9ib3hcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldFJlZmVyZW5jZUVsIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJncmlkLWlucHV0XCIgfSwgdGhpcy5yZW5kZXJJY29uU3RhcnQoKSwgIXNpbmdsZSAmJiB0aGlzLnJlbmRlckNoaXBzKCksIGgoXCJsYWJlbFwiLCB7IGNsYXNzOiBcInNjcmVlbi1yZWFkZXJzLW9ubHlcIiwgaHRtbEZvcjogYCR7aW5wdXRVaWRQcmVmaXh9JHtndWlkfWAsIGlkOiBgJHtsYWJlbFVpZFByZWZpeH0ke2d1aWR9YCB9LCBsYWJlbCksIHRoaXMucmVuZGVySW5wdXQoKSksIGlzQ2xlYXJhYmxlID8gKGgoWEJ1dHRvbiwgeyBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwga2V5OiBcImNsb3NlLWJ1dHRvblwiLCBsYWJlbDogdGhpcy5tZXNzYWdlcy5jbGVhciwgc2NhbGU6IHRoaXMuc2NhbGUgfSkpIDogbnVsbCwgdGhpcy5yZW5kZXJJY29uRW5kKCkpLCBoKFwidWxcIiwgeyBcImFyaWEtbGFiZWxsZWRieVwiOiBgJHtsYWJlbFVpZFByZWZpeH0ke2d1aWR9YCwgXCJhcmlhLW11bHRpc2VsZWN0YWJsZVwiOiBcInRydWVcIiwgY2xhc3M6IFwic2NyZWVuLXJlYWRlcnMtb25seVwiLCBpZDogYCR7bGlzdGJveFVpZFByZWZpeH0ke2d1aWR9YCwgcm9sZTogXCJsaXN0Ym94XCIsIHRhYkluZGV4OiAtMSB9LCB0aGlzLnJlbmRlckxpc3RCb3hPcHRpb25zKCkpLCB0aGlzLnJlbmRlckZsb2F0aW5nVUlDb250YWluZXIoKSwgaChIaWRkZW5Gb3JtSW5wdXRTbG90LCB7IGNvbXBvbmVudDogdGhpcyB9KSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJvcGVuXCI6IFtcIm9wZW5IYW5kbGVyXCJdLFxuICAgIFwiZGlzYWJsZWRcIjogW1wiaGFuZGxlRGlzYWJsZWRDaGFuZ2VcIl0sXG4gICAgXCJtYXhJdGVtc1wiOiBbXCJtYXhJdGVtc0hhbmRsZXJcIl0sXG4gICAgXCJvdmVybGF5UG9zaXRpb25pbmdcIjogW1wib3ZlcmxheVBvc2l0aW9uaW5nSGFuZGxlclwiXSxcbiAgICBcInZhbHVlXCI6IFtcInZhbHVlSGFuZGxlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImZsaXBQbGFjZW1lbnRzXCI6IFtcImZsaXBQbGFjZW1lbnRzSGFuZGxlclwiXSxcbiAgICBcInNlbGVjdGVkSXRlbXNcIjogW1wic2VsZWN0ZWRJdGVtc0hhbmRsZXJcIl0sXG4gICAgXCJ0ZXh0XCI6IFtcInRleHRIYW5kbGVyXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuQ29tYm9ib3guc3R5bGUgPSBjb21ib2JveENzcztcblxuY29uc3QgQ1NTJDEgPSB7XG4gIGljb246IFwiaWNvblwiLFxuICBpY29uQWN0aXZlOiBcImljb24tLWFjdGl2ZVwiLFxuICBpY29uSW5kZW50OiBcImljb24tLWluZGVudFwiLFxuICBjdXN0b206IFwiaWNvbi0tY3VzdG9tXCIsXG4gIGRvdDogXCJpY29uLS1kb3RcIixcbiAgc2luZ2xlOiBcImxhYmVsLS1zaW5nbGVcIixcbiAgbGFiZWw6IFwibGFiZWxcIixcbiAgYWN0aXZlOiBcImxhYmVsLS1hY3RpdmVcIixcbiAgc2VsZWN0ZWQ6IFwibGFiZWwtLXNlbGVjdGVkXCIsXG4gIHRpdGxlOiBcInRpdGxlXCIsXG4gIHRleHRDb250YWluZXI6IFwidGV4dC1jb250YWluZXJcIlxufTtcblxuY29uc3QgY29tYm9ib3hJdGVtQ3NzID0gXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO0BrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX0uc2NhbGUtLXN7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1sOjAuNXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtczowLjI1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctaW5kZW50OjAuNXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zZWxlY3Rvci1pY29uLXNpemU6MXJlbX0uc2NhbGUtLW17Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxcmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1sOjAuNzVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LXM6MC41cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctaW5kZW50OjAuNzVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc2VsZWN0b3ItaWNvbi1zaXplOjFyZW19LnNjYWxlLS1se2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1sOjFyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LXM6MC42MjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQ6MXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zZWxlY3Rvci1pY29uLXNpemU6MS41cmVtfS5jb250YWluZXJ7LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0taW5kZW50LXZhbHVlOmNhbGMoXFxuICAgIHZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLWluZGVudCkgKiB2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQtbXVsdGlwbGllcilcXG4gICl9Omhvc3QoOmZvY3VzKXstLXR3LXNoYWRvdzowIDAgIzAwMDA7LS10dy1zaGFkb3ctY29sb3JlZDowIDAgIzAwMDA7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06aG9zdCx1bHttYXJnaW46MHB4O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZzowcHh9Omhvc3QoOmZvY3VzKSx1bDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHh9LmxhYmVse3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTttaW4taW5saW5lLXNpemU6MTAwJTtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtczt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7d29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay13b3JkO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zKTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWwpfTpob3N0KFtkaXNhYmxlZF0pIC5sYWJlbHtjdXJzb3I6ZGVmYXVsdH0ubGFiZWwtLXNlbGVjdGVke2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmxhYmVsLS1hY3RpdmV7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5sYWJlbDpob3ZlciwubGFiZWw6YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTIpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lOy0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9LnRpdGxle3BhZGRpbmctYmxvY2s6MDtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWwpfS5pY29ue2Rpc3BsYXk6aW5saW5lLWZsZXg7b3BhY2l0eTowO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0xKX0uaWNvbi0taW5kZW50e3BhZGRpbmctaW5saW5lLXN0YXJ0OnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1pbmRlbnQtdmFsdWUpfS5pY29uLS1jdXN0b217bWFyZ2luLWJsb2NrLXN0YXJ0Oi0xcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1sKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9Lmljb24tLWFjdGl2ZXtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Lmljb24tLWRvdHtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjttaW4taW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNlbGVjdG9yLWljb24tc2l6ZSl9Lmljb24tLWRvdDpiZWZvcmV7dGV4dC1hbGlnbjpzdGFydDtjb250ZW50OlxcXCLigKJcXFwifS5sYWJlbC0tYWN0aXZlIC5pY29ue29wYWNpdHk6MX0ubGFiZWwtLXNlbGVjdGVkIC5pY29ue29wYWNpdHk6MTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdCg6aG92ZXJbZGlzYWJsZWRdKSAuaWNvbntvcGFjaXR5OjF9XCI7XG5cbmNvbnN0IENvbWJvYm94SXRlbSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hJdGVtQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQ29tYm9ib3hJdGVtQ2hhbmdlXCIsIDYpO1xuICAgIC8qKiBTcGVjaWZpZXMgdGhlIHNjYWxlIG9mIHRoZSBjb21ib2JveC1pdGVtIGNvbnRyb2xsZWQgYnkgcGFyZW50LCBkZWZhdWx0cyB0byBtICovXG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMuaXRlbUNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMudG9nZ2xlU2VsZWN0ZWQoKTtcbiAgICB9O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmFuY2VzdG9ycyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmd1aWQgPSBndWlkKCk7XG4gICAgdGhpcy5pY29uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLnRleHRMYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZmlsdGVyRGlzYWJsZWQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgc2VsZWN0ZWRXYXRjaEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hJdGVtQ2hhbmdlLmVtaXQoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuYW5jZXN0b3JzID0gZ2V0QW5jZXN0b3JzKHRoaXMuZWwpO1xuICAgIHRoaXMuc2NhbGUgPSBnZXRFbGVtZW50UHJvcCh0aGlzLmVsLCBcInNjYWxlXCIsIHRoaXMuc2NhbGUpO1xuICAgIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0b2dnbGVTZWxlY3RlZCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckljb24oaWNvblBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pY29uID8gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTJDEuY3VzdG9tXTogISF0aGlzLmljb24sXG4gICAgICAgIFtDU1MkMS5pY29uQWN0aXZlXTogdGhpcy5pY29uICYmIHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgIFtDU1MkMS5pY29uSW5kZW50XTogdHJ1ZVxuICAgICAgfSwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCwgaWNvbjogdGhpcy5pY29uIHx8IGljb25QYXRoLCBrZXk6IFwiaWNvblwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyU2VsZWN0SW5kaWNhdG9yKHNob3dEb3QsIGljb25QYXRoKSB7XG4gICAgcmV0dXJuIHNob3dEb3QgPyAoaChcInNwYW5cIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTJDEuaWNvbl06IHRydWUsXG4gICAgICAgIFtDU1MkMS5kb3RdOiB0cnVlLFxuICAgICAgICBbQ1NTJDEuaWNvbkluZGVudF06IHRydWVcbiAgICAgIH0gfSkpIDogKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTJDEuaWNvbl06IHRydWUsXG4gICAgICAgIFtDU1MkMS5pY29uQWN0aXZlXTogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgW0NTUyQxLmljb25JbmRlbnRdOiB0cnVlXG4gICAgICB9LCBmbGlwUnRsOiB0aGlzLmljb25GbGlwUnRsLCBpY29uOiBpY29uUGF0aCwga2V5OiBcImluZGljYXRvclwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKTtcbiAgfVxuICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICBpZiAoZ2V0U2xvdHRlZCh0aGlzLmVsKSkge1xuICAgICAgcmV0dXJuIChoKFwidWxcIiwgeyBrZXk6IFwiZGVmYXVsdC1zbG90LWNvbnRhaW5lclwiIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpc1NpbmdsZVNlbGVjdCA9IGdldEVsZW1lbnRQcm9wKHRoaXMuZWwsIFwic2VsZWN0aW9uLW1vZGVcIiwgXCJtdWx0aXBsZVwiKSA9PT0gXCJzaW5nbGVcIjtcbiAgICBjb25zdCBzaG93RG90ID0gaXNTaW5nbGVTZWxlY3QgJiYgIXRoaXMuZGlzYWJsZWQ7XG4gICAgY29uc3QgZGVmYXVsdEljb24gPSBpc1NpbmdsZVNlbGVjdCA/IFwiZG90XCIgOiBcImNoZWNrXCI7XG4gICAgY29uc3QgaWNvblBhdGggPSB0aGlzLmRpc2FibGVkID8gXCJjaXJjbGUtZGlzYWxsb3dlZFwiIDogZGVmYXVsdEljb247XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIFtDU1MkMS5sYWJlbF06IHRydWUsXG4gICAgICBbQ1NTJDEuc2VsZWN0ZWRdOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgW0NTUyQxLmFjdGl2ZV06IHRoaXMuYWN0aXZlLFxuICAgICAgW0NTUyQxLnNpbmdsZV06IGlzU2luZ2xlU2VsZWN0XG4gICAgfTtcbiAgICBjb25zdCBkZXB0aCA9IGdldERlcHRoKHRoaXMuZWwpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBgY29udGFpbmVyIHNjYWxlLS0ke3RoaXMuc2NhbGV9YCwgc3R5bGU6IHsgXCItLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLWluZGVudC1tdWx0aXBsaWVyXCI6IGAke2RlcHRofWAgfSB9LCBoKFwibGlcIiwgeyBjbGFzczogY2xhc3NlcywgaWQ6IHRoaXMuZ3VpZCwgb25DbGljazogdGhpcy5pdGVtQ2xpY2tIYW5kbGVyIH0sIHRoaXMucmVuZGVyU2VsZWN0SW5kaWNhdG9yKHNob3dEb3QsIGljb25QYXRoKSwgdGhpcy5yZW5kZXJJY29uKGljb25QYXRoKSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJ0aXRsZVwiIH0sIHRoaXMudGV4dExhYmVsKSksIHRoaXMucmVuZGVyQ2hpbGRyZW4oKSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJzZWxlY3RlZFwiOiBbXCJzZWxlY3RlZFdhdGNoSGFuZGxlclwiXVxuICB9OyB9XG59O1xuQ29tYm9ib3hJdGVtLnN0eWxlID0gY29tYm9ib3hJdGVtQ3NzO1xuXG5jb25zdCBDU1MgPSB7XG4gIGxpc3Q6IFwibGlzdFwiLFxuICBsYWJlbDogXCJsYWJlbFwiLFxuICB0aXRsZTogXCJ0aXRsZVwiXG59O1xuXG5jb25zdCBjb21ib2JveEl0ZW1Hcm91cENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfS5zY2FsZS0tc3tmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MC41cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zOjAuMjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQ6MC41cmVtfS5zY2FsZS0tbXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MC43NXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtczowLjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQ6MC43NXJlbX0uc2NhbGUtLWx7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtczowLjc1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctaW5kZW50OjFyZW19Omhvc3QsLmxpc3R7bWFyZ2luOjBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MHB4fTpob3N0KDpmb2N1cyksLmxpc3Q6Zm9jdXN7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4fS5sYWJlbHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7bWluLWlubGluZS1zaXplOjBweDttYXgtaW5saW5lLXNpemU6MTAwJTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9LnRpdGxley0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLWluZGVudC12YWx1ZTpjYWxjKFxcbiAgICB2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQpICogdmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctaW5kZW50LW11bHRpcGxpZXIpXFxuICApO2JvcmRlcjowIHNvbGlkO2Rpc3BsYXk6YmxvY2s7ZmxleDoxIDEgMCU7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHg7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ib2xkKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7d29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay13b3JkO2JvcmRlci1ibG9jay1lbmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7cGFkZGluZy1ibG9jazp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWwpO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtcyk7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0taW5kZW50LXZhbHVlKX1cIjtcblxuY29uc3QgQ29tYm9ib3hJdGVtR3JvdXAgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuZ3VpZCA9IGd1aWQoKTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5hbmNlc3RvcnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuYW5jZXN0b3JzID0gZ2V0QW5jZXN0b3JzKHRoaXMuZWwpO1xuICAgIHRoaXMuc2NhbGUgPSBnZXRFbGVtZW50UHJvcCh0aGlzLmVsLCBcInNjYWxlXCIsIHRoaXMuc2NhbGUpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgc2NhbGUgfSA9IHRoaXM7XG4gICAgY29uc3QgZGVwdGggPSBnZXREZXB0aChlbCk7XG4gICAgcmV0dXJuIChoKFwidWxcIiwgeyBcImFyaWEtbGFiZWxsZWRieVwiOiB0aGlzLmd1aWQsIGNsYXNzOiB7IFtDU1MubGlzdF06IHRydWUsIFtgc2NhbGUtLSR7c2NhbGV9YF06IHRydWUgfSwgcm9sZTogXCJncm91cFwiIH0sIGgoXCJsaVwiLCB7IGNsYXNzOiB7IFtDU1MubGFiZWxdOiB0cnVlIH0sIGlkOiB0aGlzLmd1aWQsIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsIHN0eWxlOiB7IFwiLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQtbXVsdGlwbGllclwiOiBgJHtkZXB0aH1gIH0gfSwgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLnRpdGxlIH0sIHRoaXMubGFiZWwpKSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuQ29tYm9ib3hJdGVtR3JvdXAuc3R5bGUgPSBjb21ib2JveEl0ZW1Hcm91cENzcztcblxuZXhwb3J0IHsgQ29tYm9ib3ggYXMgY2FsY2l0ZV9jb21ib2JveCwgQ29tYm9ib3hJdGVtIGFzIGNhbGNpdGVfY29tYm9ib3hfaXRlbSwgQ29tYm9ib3hJdGVtR3JvdXAgYXMgY2FsY2l0ZV9jb21ib2JveF9pdGVtX2dyb3VwIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgZiBhcyBmb3JjZVVwZGF0ZSB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcblxuY29uc3Qgb2JzZXJ2ZWQgPSBuZXcgU2V0KCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudC5lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBvYnNlcnZlZC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50XSBvZiBvYnNlcnZlZC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBmb3JjZVVwZGF0ZSh0YXJnZXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==