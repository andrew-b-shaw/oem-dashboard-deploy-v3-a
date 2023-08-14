"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-combobox_3_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-combobox_3.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-combobox_3.entry.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_combobox": () => (/* binding */ Combobox),
/* harmony export */   "calcite_combobox_item": () => (/* binding */ ComboboxItem),
/* harmony export */   "calcite_combobox_item_group": () => (/* binding */ ComboboxItemGroup)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _filter_dc379cc3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-dc379cc3.js */ "./node_modules/@esri/calcite-components/dist/esm/filter-dc379cc3.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./floating-ui-1033e8bb.js */ "./node_modules/@esri/calcite-components/dist/esm/floating-ui-1033e8bb.js");
/* harmony import */ var _form_44530001_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-44530001.js */ "./node_modules/@esri/calcite-components/dist/esm/form-44530001.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _label_59c9d472_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./label-59c9d472.js */ "./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./openCloseComponent-a26b009f.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-a26b009f.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./debounce-b9072422.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-b9072422.js");
/* harmony import */ var _conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./conditionalSlot-02722e44.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-02722e44.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
  return (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.x)(item.querySelectorAll("calcite-combobox-item"));
}
function hasActiveChildren(node) {
  const items = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.x)(node.querySelectorAll("calcite-combobox-item"));
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
  return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": label, class: CSS$2.button, disabled: disabled, key: key, onClick: onClick, tabIndex: -1, type: "button", 
    // eslint-disable-next-line react/jsx-sort-props
    ref: ref },
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "x", scale: scale === "l" ? "m" : "s" })));
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteComboboxChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxChange", 6);
    this.calciteComboboxFilterChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxFilterChange", 6);
    this.calciteComboboxChipClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxChipClose", 6);
    this.calciteComboboxBeforeClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxBeforeClose", 6);
    this.calciteComboboxClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxClose", 6);
    this.calciteComboboxBeforeOpen = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxBeforeOpen", 6);
    this.calciteComboboxOpen = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxOpen", 6);
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    this.placement = _floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.d;
    this.internalValueChangeFlag = false;
    this.textInput = null;
    this.mutationObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_10__.c)("mutation", () => this.updateItems());
    this.resizeObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_10__.c)("resize", () => this.setMaxScrollerHeight());
    this.guid = (0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_5__.g)();
    this.inputHeight = 0;
    this.ignoreSelectedEventsFlag = false;
    this.openTransitionProp = "opacity";
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.f)(flipPlacements, el)
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
            if ((0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_4__.s)(this)) {
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
      (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.c)(this, this.referenceEl, this.floatingEl);
    };
    this.setContainerEl = (el) => {
      this.resizeObserver.observe(el);
      this.listContainerEl = el;
      this.transitionEl = el;
      (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_11__.c)(this);
    };
    this.setReferenceEl = (el) => {
      this.referenceEl = el;
      (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.c)(this, this.referenceEl, this.floatingEl);
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
      return (0,_debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_13__.d)((text) => {
        const filteredData = (0,_filter_dc379cc3_js__WEBPACK_IMPORTED_MODULE_1__.f)(this.data, text);
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
    this.emitComboboxChange = (0,_debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_13__.d)(this.internalComboboxChangeEvent, 0);
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
    if (this.disabled || !(0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.i)(event)) {
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
    return (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.r)(this, {
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
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
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
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_12__.c)(this);
    this.internalValueChangeFlag = true;
    this.value = this.getValue();
    this.internalValueChangeFlag = false;
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_11__.c)(this);
    this.setFilteredPlacements();
    this.reposition(true);
    if (this.open) {
      this.openHandler();
    }
  }
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_8__.s)(this);
    this.updateItems();
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_12__.s)(this);
  }
  componentDidLoad() {
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_4__.a)(this, this.getValue());
    this.reposition(true);
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_8__.a)(this);
  }
  componentDidRender() {
    if (this.el.offsetHeight !== this.inputHeight) {
      this.reposition(true);
      this.inputHeight = this.el.offsetHeight;
    }
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_6__.u)(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    this.resizeObserver?.disconnect();
    (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_form_44530001_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.a)(this, this.referenceEl, this.floatingEl);
    (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_11__.d)(this);
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_12__.d)(this);
  }
  /** when search text is cleared, reset active to  */
  textHandler() {
    this.updateActiveItemIndex(-1);
  }
  effectiveLocaleChange() {
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_12__.u)(this, this.effectiveLocale);
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
      return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-chip", { class: chipClasses, closable: true, icon: item.icon, iconFlipRtl: item.iconFlipRtl, id: item.guid ? `${chipUidPrefix}${item.guid}` : null, key: item.textLabel, messageOverrides: { dismissLabel: messages.removeTag }, onCalciteChipClose: () => this.calciteChipCloseHandler(item), scale: scale, title: label, value: item.value }, label));
    });
  }
  renderInput() {
    const { guid, disabled, placeholder, selectionMode, selectedItems, open } = this;
    const single = selectionMode === "single";
    const selectedItem = selectedItems[0];
    const showLabel = !open && single && !!selectedItem;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: {
        "input-wrap": true,
        "input-wrap--single": single
      } }, showLabel && ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: {
        label: true,
        "label--icon": !!selectedItem?.icon
      }, key: "label" }, selectedItem.textLabel)), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { "aria-activedescendant": this.activeDescendant, "aria-autocomplete": "list", "aria-controls": `${listboxUidPrefix}${guid}`, "aria-label": (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_7__.g)(this), class: {
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
    return this.filteredItems.map((item) => ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { "aria-selected": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.t)(item.selected), id: item.guid ? `${itemUidPrefix}${item.guid}` : null, role: "option", tabindex: "-1" }, item.textLabel)));
  }
  renderFloatingUIContainer() {
    const { setFloatingEl, setContainerEl, open } = this;
    const classes = {
      [CSS$3.listContainer]: true,
      [_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.F.animation]: true,
      [_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_3__.F.animationActive]: open
    };
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-hidden": "true", class: {
        "floating-ui-container": true,
        "floating-ui-container--active": open
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: setFloatingEl }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: classes,
      // eslint-disable-next-line react/jsx-sort-props
      ref: setContainerEl }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { class: { list: true, "list--hide": !open } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
  }
  renderIconStart() {
    const { selectedItems, placeholderIcon, selectionMode, placeholderIconFlipRtl } = this;
    const selectedItem = selectedItems[0];
    const selectedIcon = selectedItem?.icon;
    const singleSelectionMode = selectionMode === "single";
    const iconAtStart = !this.open && selectedItem
      ? !!selectedIcon && singleSelectionMode
      : !!this.placeholderIcon && (!selectedItem || singleSelectionMode);
    return (iconAtStart && ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "icon-start" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: "selected-icon", flipRtl: this.open && selectedItem ? selectedItem.iconFlipRtl : placeholderIconFlipRtl, icon: !this.open && selectedItem ? selectedIcon : placeholderIcon, scale: "s" }))));
  }
  renderIconEnd() {
    const { open } = this;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "icon-end" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: open ? "chevron-up" : "chevron-down", scale: "s" })));
  }
  render() {
    const { guid, label, open } = this;
    const single = this.selectionMode === "single";
    const isClearable = !this.clearDisabled && this.value?.length > 0;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { onClick: this.comboboxFocusHandler }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-autocomplete": "list", "aria-controls": `${listboxUidPrefix}${guid}`, "aria-expanded": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.t)(open), "aria-haspopup": "listbox", "aria-label": (0,_label_59c9d472_js__WEBPACK_IMPORTED_MODULE_7__.g)(this), "aria-live": "polite", "aria-owns": `${listboxUidPrefix}${guid}`, class: {
        wrapper: true,
        "wrapper--single": single || !this.selectedItems.length,
        "wrapper--active": open
      }, onClick: this.clickHandler, onKeyDown: this.keyDownHandler, role: "combobox",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setReferenceEl }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "grid-input" }, this.renderIconStart(), !single && this.renderChips(), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("label", { class: "screen-readers-only", htmlFor: `${inputUidPrefix}${guid}`, id: `${labelUidPrefix}${guid}` }, label), this.renderInput()), isClearable ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(XButton, { disabled: this.disabled, key: "close-button", label: this.messages.clear, scale: this.scale })) : null, this.renderIconEnd()), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { "aria-labelledby": `${labelUidPrefix}${guid}`, "aria-multiselectable": "true", class: "screen-readers-only", id: `${listboxUidPrefix}${guid}`, role: "listbox", tabIndex: -1 }, this.renderListBoxOptions()), this.renderFloatingUIContainer(), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_44530001_js__WEBPACK_IMPORTED_MODULE_4__.H, { component: this })));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteComboboxItemChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteComboboxItemChange", 6);
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
    this.guid = (0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_5__.g)();
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
    this.scale = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.v)(this.el, "scale", this.scale);
    (0,_conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_14__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_14__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_6__.u)(this);
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
    return this.icon ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: {
        [CSS$1.custom]: !!this.icon,
        [CSS$1.iconActive]: this.icon && this.selected,
        [CSS$1.iconIndent]: true
      }, flipRtl: this.iconFlipRtl, icon: this.icon || iconPath, key: "icon", scale: this.scale === "l" ? "m" : "s" })) : null;
  }
  renderSelectIndicator(showDot, iconPath) {
    return showDot ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: {
        [CSS$1.icon]: true,
        [CSS$1.dot]: true,
        [CSS$1.iconIndent]: true
      } })) : ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: {
        [CSS$1.icon]: true,
        [CSS$1.iconActive]: this.selected,
        [CSS$1.iconIndent]: true
      }, flipRtl: this.iconFlipRtl, icon: iconPath, key: "indicator", scale: this.scale === "l" ? "m" : "s" }));
  }
  renderChildren() {
    if ((0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.el)) {
      return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { key: "default-slot-container" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
    }
    return null;
  }
  render() {
    const isSingleSelect = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.v)(this.el, "selection-mode", "multiple") === "single";
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
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-hidden": "true" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `container scale--${this.scale}`, style: { "--calcite-combobox-item-spacing-indent-multiplier": `${depth}` } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: classes, id: this.guid, onClick: this.itemClickHandler }, this.renderSelectIndicator(showDot, iconPath), this.renderIcon(iconPath), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "title" }, this.textLabel)), this.renderChildren())));
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.guid = (0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_5__.g)();
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
    this.scale = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.v)(this.el, "scale", this.scale);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { el, scale } = this;
    const depth = getDepth(el);
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul", { "aria-labelledby": this.guid, class: { [CSS.list]: true, [`scale--${scale}`]: true }, role: "group" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("li", { class: { [CSS.label]: true }, id: this.guid, role: "presentation", style: { "--calcite-combobox-item-spacing-indent-multiplier": `${depth}` } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.title }, this.label)), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
ComboboxItemGroup.style = comboboxItemGroupCss;




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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNWE3OTQzMmJmMzY4YjM0OGMwM2YzNDMyOTUwNDEwMmYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQzFEO0FBQzZGO0FBQzJDO0FBQ25DO0FBQ3pHO0FBQ3dCO0FBQzBCO0FBQ21CO0FBQzdCO0FBQ3pCO0FBQ3VEO0FBQ007QUFDcEU7QUFDdUU7QUFDN0Y7QUFDTjs7QUFFM0I7QUFDQTtBQUNBLGlDQUFpQyxlQUFlLElBQUksb0JBQW9CO0FBQ3hFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1EQUFlO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQ0FBMkM7QUFDOUQsVUFBVSxxREFBQyxhQUFhO0FBQ3hCO0FBQ0EsY0FBYztBQUNkLElBQUkscURBQUMsbUJBQW1CLDZDQUE2QztBQUNyRTs7QUFFQSxtQ0FBbUMsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsdUJB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Q0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUF3RTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5REFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RUFBd0U7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLElBQUkscURBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRXlGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1jb21ib2JveF8zLmVudHJ5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NvbmRpdGlvbmFsU2xvdC0wMjcyMmU0NC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgaCwgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBIIGFzIEhvc3QsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgZiBhcyBmaWx0ZXIgfSBmcm9tICcuL2ZpbHRlci1kYzM3OWNjMy5qcyc7XG5pbXBvcnQgeyB4IGFzIG5vZGVMaXN0VG9BcnJheSwgaSBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCB0IGFzIHRvQXJpYUJvb2xlYW4sIHYgYXMgZ2V0RWxlbWVudFByb3AsIGcgYXMgZ2V0U2xvdHRlZCB9IGZyb20gJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCB7IGQgYXMgZGVmYXVsdE1lbnVQbGFjZW1lbnQsIGYgYXMgZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzLCBjIGFzIGNvbm5lY3RGbG9hdGluZ1VJLCByIGFzIHJlcG9zaXRpb24sIGEgYXMgZGlzY29ubmVjdEZsb2F0aW5nVUksIEYgYXMgRmxvYXRpbmdDU1MgfSBmcm9tICcuL2Zsb2F0aW5nLXVpLTEwMzNlOGJiLmpzJztcbmltcG9ydCB7IHMgYXMgc3VibWl0Rm9ybSwgYyBhcyBjb25uZWN0Rm9ybSwgYSBhcyBhZnRlckNvbm5lY3REZWZhdWx0VmFsdWVTZXQsIGQgYXMgZGlzY29ubmVjdEZvcm0sIEggYXMgSGlkZGVuRm9ybUlucHV0U2xvdCB9IGZyb20gJy4vZm9ybS00NDUzMDAwMS5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQtZDU5NDNiODMuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTgyZTU0N2VkLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExhYmVsLCBkIGFzIGRpc2Nvbm5lY3RMYWJlbCwgZyBhcyBnZXRMYWJlbFRleHQgfSBmcm9tICcuL2xhYmVsLTU5YzlkNDcyLmpzJztcbmltcG9ydCB7IGMgYXMgY29tcG9uZW50TG9hZGVkLCBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS1hZjE0NmZkNS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWIzYzQ0ZGRhLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy1jMjBlYzJkZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQsIGQgYXMgZGlzY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCB9IGZyb20gJy4vb3BlbkNsb3NlQ29tcG9uZW50LWEyNmIwMDlmLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCB1IGFzIHVwZGF0ZU1lc3NhZ2VzIH0gZnJvbSAnLi90OW4tYTNlMTI0MjIuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWJvdW5jZSB9IGZyb20gJy4vZGVib3VuY2UtYjkwNzI0MjIuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC0wMjcyMmU0NC5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLWQwOGE2NzM3LmpzJztcbmltcG9ydCAnLi9rZXktMzM4OWQ4NzAuanMnO1xuXG5jb25zdCBDb21ib2JveEl0ZW0kMSA9IFwiQ0FMQ0lURS1DT01CT0JPWC1JVEVNXCI7XG5jb25zdCBDb21ib2JveEl0ZW1Hcm91cCQxID0gXCJDQUxDSVRFLUNPTUJPQk9YLUlURU0tR1JPVVBcIjtcbmNvbnN0IENvbWJvYm94Q2hpbGRTZWxlY3RvciA9IGAke0NvbWJvYm94SXRlbSQxfSwgJHtDb21ib2JveEl0ZW1Hcm91cCQxfWA7XG5jb25zdCBDU1MkMyA9IHtcbiAgbGlzdENvbnRhaW5lcjogXCJsaXN0LWNvbnRhaW5lclwiXG59O1xuXG5mdW5jdGlvbiBnZXRBbmNlc3RvcnMoZWxlbWVudCkge1xuICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoQ29tYm9ib3hDaGlsZFNlbGVjdG9yKTtcbiAgY29uc3QgZ3JhbmRwYXJlbnQgPSBwYXJlbnQ/LnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoQ29tYm9ib3hDaGlsZFNlbGVjdG9yKTtcbiAgcmV0dXJuIFtwYXJlbnQsIGdyYW5kcGFyZW50XS5maWx0ZXIoKGVsKSA9PiBlbCk7XG59XG5mdW5jdGlvbiBnZXRJdGVtQW5jZXN0b3JzKGl0ZW0pIHtcbiAgcmV0dXJuIChpdGVtLmFuY2VzdG9ycz8uZmlsdGVyKChlbCkgPT4gZWwubm9kZU5hbWUgPT09IFwiQ0FMQ0lURS1DT01CT0JPWC1JVEVNXCIpIHx8IFtdKTtcbn1cbmZ1bmN0aW9uIGdldEl0ZW1DaGlsZHJlbihpdGVtKSB7XG4gIHJldHVybiBub2RlTGlzdFRvQXJyYXkoaXRlbS5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1jb21ib2JveC1pdGVtXCIpKTtcbn1cbmZ1bmN0aW9uIGhhc0FjdGl2ZUNoaWxkcmVuKG5vZGUpIHtcbiAgY29uc3QgaXRlbXMgPSBub2RlTGlzdFRvQXJyYXkobm9kZS5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1jb21ib2JveC1pdGVtXCIpKTtcbiAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zZWxlY3RlZCkubGVuZ3RoID4gMDtcbn1cbmZ1bmN0aW9uIGdldERlcHRoKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZXZhbHVhdGUoXCJhbmNlc3Rvcjo6Y2FsY2l0ZS1jb21ib2JveC1pdGVtIHwgYW5jZXN0b3I6OmNhbGNpdGUtY29tYm9ib3gtaXRlbS1ncm91cFwiLCBlbGVtZW50LCBudWxsLCBYUGF0aFJlc3VsdC5VTk9SREVSRURfTk9ERV9TTkFQU0hPVF9UWVBFLCBudWxsKTtcbiAgcmV0dXJuIHJlc3VsdC5zbmFwc2hvdExlbmd0aDtcbn1cblxuY29uc3QgQ1NTJDIgPSB7XG4gIGJ1dHRvbjogXCJ4LWJ1dHRvblwiXG59O1xuZnVuY3Rpb24gWEJ1dHRvbih7IGRpc2FibGVkLCBrZXksIGxhYmVsLCBvbkNsaWNrLCByZWYsIHNjYWxlIH0pIHtcbiAgcmV0dXJuIChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLCBjbGFzczogQ1NTJDIuYnV0dG9uLCBkaXNhYmxlZDogZGlzYWJsZWQsIGtleToga2V5LCBvbkNsaWNrOiBvbkNsaWNrLCB0YWJJbmRleDogLTEsIHR5cGU6IFwiYnV0dG9uXCIsIFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgIHJlZjogcmVmIH0sXG4gICAgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwieFwiLCBzY2FsZTogc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkpO1xufVxuXG5jb25zdCBjb21ib2JveENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2t9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0KFtzY2FsZT1zXSkgLngtYnV0dG9ue2lubGluZS1zaXplOjFyZW07YmxvY2stc2l6ZToxcmVtfTpob3N0KFtzY2FsZT1tXSkgLngtYnV0dG9ue2lubGluZS1zaXplOjEuNXJlbTtibG9jay1zaXplOjEuNXJlbX06aG9zdChbc2NhbGU9bF0pIC54LWJ1dHRvbntpbmxpbmUtc2l6ZToycmVtO2Jsb2NrLXNpemU6MnJlbX0ueC1idXR0b257bWFyZ2luOjBweDtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLXNlbGY6Y2VudGVyO2JvcmRlci13aWR0aDoycHg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztib3JkZXItcmFkaXVzOjUwJTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMil9LngtYnV0dG9uOmFjdGl2ZSwueC1idXR0b246aG92ZXJ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS54LWJ1dHRvbjphY3RpdmV7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0ueC1idXR0b24gY2FsY2l0ZS1pY29ue2NvbG9yOmluaGVyaXR9Omhvc3QoW3NjYWxlPXNdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1sOjAuNXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtczowLjI1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pbnB1dC1oZWlnaHQ6MS41cmVtfTpob3N0KFtzY2FsZT1zXSkgLngtYnV0dG9ue21hcmdpbi1pbmxpbmUtZW5kOjAuNXJlbX06aG9zdChbc2NhbGU9bV0pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MC43NXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtczowLjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWlucHV0LWhlaWdodDoycmVtfTpob3N0KFtzY2FsZT1tXSkgLngtYnV0dG9ue21hcmdpbi1pbmxpbmUtZW5kOjAuNzVyZW19Omhvc3QoW3NjYWxlPWxdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtczowLjc1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pbnB1dC1oZWlnaHQ6Mi43NXJlbX06aG9zdChbc2NhbGU9bF0pIC54LWJ1dHRvbnttYXJnaW4taW5saW5lLWVuZDoxcmVtfS53cmFwcGVye2Rpc3BsYXk6ZmxleDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItaW5wdXQpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O3BhZGRpbmctYmxvY2s6Y2FsYyh2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LXMpIC8gNCk7cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1sKX06aG9zdCg6Zm9jdXMtd2l0aGluKSAud3JhcHBlciwud3JhcHBlci0tYWN0aXZle291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0ud3JhcHBlci0tc2luZ2xle3BhZGRpbmctYmxvY2s6MDtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWwpO2N1cnNvcjpwb2ludGVyO2ZsZXgtd3JhcDpub3dyYXB9LmdyaWQtaW5wdXR7ZGlzcGxheTpmbGV4O2ZsZXgtZ3JvdzoxO2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7cGFkZGluZzowcHh9LmlucHV0e2ZsZXgtZ3JvdzoxOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3BhZGRpbmc6MHB4O2ZvbnQtZmFtaWx5OmluaGVyaXQ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO2ZvbnQtc2l6ZTppbmhlcml0O2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pbnB1dC1oZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaW5wdXQtaGVpZ2h0KTttaW4taW5saW5lLXNpemU6MTIwcHg7bWFyZ2luLWJsb2NrLWVuZDp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LXMpfS5pbnB1dDpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHh9LmlucHV0LS10cmFuc3BhcmVudHtvcGFjaXR5OjB9LmlucHV0LS1zaW5nbGV7bWFyZ2luLWJsb2NrOjBweDtwYWRkaW5nOjBweH0ud3JhcHBlci0tYWN0aXZlIC5pbnB1dC1zaW5nbGV7Y3Vyc29yOnRleHR9LmlucHV0LS1oaWRkZW57cG9pbnRlci1ldmVudHM6bm9uZTtpbmxpbmUtc2l6ZTowcHg7bWluLWlubGluZS1zaXplOjBweDtvcGFjaXR5OjB9LmlucHV0LS1pY29ue3BhZGRpbmctYmxvY2s6MDtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWwpfS5pbnB1dC13cmFwe2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MX0uaW5wdXQtd3JhcC0tc2luZ2xle2ZsZXg6MSAxIDAlO292ZXJmbG93OmhpZGRlbn0ubGFiZWx7cG9pbnRlci1ldmVudHM6bm9uZTtkaXNwbGF5OmZsZXg7bWF4LWlubGluZS1zaXplOjEwMCU7ZmxleDoxIDEgYXV0bztvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7cGFkZGluZzowcHg7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pbnB1dC1oZWlnaHQpO2xpbmUtaGVpZ2h0OnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaW5wdXQtaGVpZ2h0KX0ubGFiZWwtLWljb257cGFkZGluZy1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1sKX0uaWNvbi1lbmQsLmljb24tc3RhcnR7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjFyZW07Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfS5pY29uLWVuZHtmbGV4Om5vbmV9LmZsb2F0aW5nLXVpLWNvbnRhaW5lcnstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4KTt2aXNpYmlsaXR5OmhpZGRlbn0uZmxvYXRpbmctdWktY29udGFpbmVyIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5O29wYWNpdHk6MDtib3gtc2hhZG93OjAgMCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JvcmRlci1yYWRpdXM6MC4yNXJlbX0uZmxvYXRpbmctdWktY29udGFpbmVyW2RhdGEtcGxhY2VtZW50Xj1ib3R0b21dIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTVweCl9LmZsb2F0aW5nLXVpLWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF49dG9wXSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVZKDVweCl9LmZsb2F0aW5nLXVpLWNvbnRhaW5lcltkYXRhLXBsYWNlbWVudF49bGVmdF0gLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpfS5mbG9hdGluZy11aS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRePXJpZ2h0XSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01cHgpfS5mbG9hdGluZy11aS1jb250YWluZXJbZGF0YS1wbGFjZW1lbnRdIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW0tLWFjdGl2ZXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX0uZmxvYXRpbmctdWktY29udGFpbmVyLS1hY3RpdmV7dmlzaWJpbGl0eTp2aXNpYmxlfUBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKXsud3JhcHBlciwuZmxvYXRpbmctdWktY29udGFpbmVyLS1hY3RpdmV7Ym9yZGVyOjFweCBzb2xpZCBjYW52YXNUZXh0fX0uc2NyZWVuLXJlYWRlcnMtb25seXtwb3NpdGlvbjphYnNvbHV0ZTtpbmxpbmUtc2l6ZToxcHg7YmxvY2stc2l6ZToxcHg7cGFkZGluZzowO21hcmdpbjotMXB4O292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMCwgMCwgMCwgMCk7d2hpdGUtc3BhY2U6bm93cmFwO2JvcmRlci13aWR0aDowfS5saXN0LWNvbnRhaW5lcnttYXgtYmxvY2stc2l6ZTo0NXZoO292ZXJmbG93LXk6YXV0bztiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWRyb3Bkb3duLXdpZHRoKX0ubGlzdHttYXJnaW46MHB4O2Rpc3BsYXk6YmxvY2s7cGFkZGluZzowcHh9Lmxpc3QtLWhpZGV7YmxvY2stc2l6ZTowcHg7b3ZlcmZsb3c6aGlkZGVufS5jaGlwe21hcmdpbi1ibG9jazpjYWxjKHZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtcykgLyA0KTttYXJnaW4taW5saW5lOjAgdmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zKTttYXgtaW5saW5lLXNpemU6MTAwJX0uY2hpcC0tYWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS5pdGVte2Rpc3BsYXk6YmxvY2t9OjpzbG90dGVkKGlucHV0W3Nsb3Q9aGlkZGVuLWZvcm0taW5wdXRdKXttYXJnaW46MCAhaW1wb3J0YW50O29wYWNpdHk6MCAhaW1wb3J0YW50O291dGxpbmU6bm9uZSAhaW1wb3J0YW50O3BhZGRpbmc6MCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7aW5zZXQ6MCAhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmUgIWltcG9ydGFudDt6LWluZGV4Oi0xICFpbXBvcnRhbnR9XCI7XG5cbmNvbnN0IGlzR3JvdXAgPSAoZWwpID0+IGVsLnRhZ05hbWUgPT09IENvbWJvYm94SXRlbUdyb3VwJDE7XG5jb25zdCBpdGVtVWlkUHJlZml4ID0gXCJjb21ib2JveC1pdGVtLVwiO1xuY29uc3QgY2hpcFVpZFByZWZpeCA9IFwiY29tYm9ib3gtY2hpcC1cIjtcbmNvbnN0IGxhYmVsVWlkUHJlZml4ID0gXCJjb21ib2JveC1sYWJlbC1cIjtcbmNvbnN0IGxpc3Rib3hVaWRQcmVmaXggPSBcImNvbWJvYm94LWxpc3Rib3gtXCI7XG5jb25zdCBpbnB1dFVpZFByZWZpeCA9IFwiY29tYm9ib3gtaW5wdXQtXCI7XG5jb25zdCBDb21ib2JveCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hDaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVDb21ib2JveENoYW5nZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVDb21ib2JveEZpbHRlckNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUNvbWJvYm94RmlsdGVyQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUNvbWJvYm94Q2hpcENsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQ29tYm9ib3hDaGlwQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hCZWZvcmVDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUNvbWJvYm94QmVmb3JlQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUNvbWJvYm94Q2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hCZWZvcmVPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlQ29tYm9ib3hCZWZvcmVPcGVuXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUNvbWJvYm94T3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUNvbWJvYm94T3BlblwiLCA2KTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBTdGF0ZS9Qcm9wc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMucGxhY2VtZW50ID0gZGVmYXVsdE1lbnVQbGFjZW1lbnQ7XG4gICAgdGhpcy5pbnRlcm5hbFZhbHVlQ2hhbmdlRmxhZyA9IGZhbHNlO1xuICAgIHRoaXMudGV4dElucHV0ID0gbnVsbDtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMudXBkYXRlSXRlbXMoKSk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwicmVzaXplXCIsICgpID0+IHRoaXMuc2V0TWF4U2Nyb2xsZXJIZWlnaHQoKSk7XG4gICAgdGhpcy5ndWlkID0gZ3VpZCgpO1xuICAgIHRoaXMuaW5wdXRIZWlnaHQgPSAwO1xuICAgIHRoaXMuaWdub3JlU2VsZWN0ZWRFdmVudHNGbGFnID0gZmFsc2U7XG4gICAgdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgPSBcIm9wYWNpdHlcIjtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZWwsIGZsaXBQbGFjZW1lbnRzIH0gPSB0aGlzO1xuICAgICAgdGhpcy5maWx0ZXJlZEZsaXBQbGFjZW1lbnRzID0gZmxpcFBsYWNlbWVudHNcbiAgICAgICAgPyBmaWx0ZXJDb21wdXRlZFBsYWNlbWVudHMoZmxpcFBsYWNlbWVudHMsIGVsKVxuICAgICAgICA6IG51bGw7XG4gICAgfTtcbiAgICB0aGlzLmdldFZhbHVlID0gKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKChpdGVtKSA9PiBpdGVtPy52YWx1ZT8udG9TdHJpbmcoKSk7XG4gICAgICByZXR1cm4gaXRlbXM/Lmxlbmd0aCA/IChpdGVtcy5sZW5ndGggPiAxID8gaXRlbXMgOiBpdGVtc1swXSkgOiBcIlwiO1xuICAgIH07XG4gICAgdGhpcy5vbkxhYmVsQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgfTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlIFwiVGFiXCI6XG4gICAgICAgICAgdGhpcy5hY3RpdmVDaGlwSW5kZXggPSAtMTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IC0xO1xuICAgICAgICAgIGlmICh0aGlzLmFsbG93Q3VzdG9tVmFsdWVzICYmIHRoaXMudGV4dCkge1xuICAgICAgICAgICAgdGhpcy5hZGRDdXN0b21DaGlwKHRoaXMudGV4dCwgdHJ1ZSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICB0aGlzLnByZXZpb3VzQ2hpcCgpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgICAgdGhpcy5uZXh0Q2hpcCgpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLnNoaWZ0QWN0aXZlSXRlbUluZGV4KC0xKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0aGlzLmNvbWJvYm94SW5WaWV3cG9ydCgpKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLnNoaWZ0QWN0aXZlSXRlbUluZGV4KDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVuc3VyZVJlY2VudFNlbGVjdGVkSXRlbUlzQWN0aXZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5jb21ib2JveEluVmlld3BvcnQoKSkge1xuICAgICAgICAgICAgdGhpcy5lbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICBpZiAoIXRoaXMudGV4dElucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2hpZnRBY3RpdmVJdGVtSW5kZXgoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgoMCk7XG4gICAgICAgICAgdGhpcy5zY3JvbGxUb0FjdGl2ZUl0ZW0oKTtcbiAgICAgICAgICBpZiAoIXRoaXMuY29tYm9ib3hJblZpZXdwb3J0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJFbmRcIjpcbiAgICAgICAgICBpZiAoIXRoaXMub3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlSXRlbUluZGV4KHRoaXMuZmlsdGVyZWRJdGVtcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvQWN0aXZlSXRlbSgpO1xuICAgICAgICAgIGlmICghdGhpcy5jb21ib2JveEluVmlld3BvcnQoKSkge1xuICAgICAgICAgICAgdGhpcy5lbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkVzY2FwZVwiOlxuICAgICAgICAgIGlmICghdGhpcy5jbGVhckRpc2FibGVkICYmICF0aGlzLm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJWYWx1ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiRW50ZXJcIjpcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24odGhpcy5maWx0ZXJlZEl0ZW1zW3RoaXMuYWN0aXZlSXRlbUluZGV4XSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICh0aGlzLmFjdGl2ZUNoaXBJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFjdGl2ZUNoaXAoKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYWxsb3dDdXN0b21WYWx1ZXMgJiYgdGhpcy50ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmFkZEN1c3RvbUNoaXAodGhpcy50ZXh0LCB0cnVlKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICBpZiAoc3VibWl0Rm9ybSh0aGlzKSkge1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkRlbGV0ZVwiOlxuICAgICAgICBjYXNlIFwiQmFja3NwYWNlXCI6XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQ2hpcEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFjdGl2ZUNoaXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoIXRoaXMudGV4dCAmJiB0aGlzLmlzTXVsdGkoKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlTGFzdENoaXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZUNsb3NlRW5kID0gKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlQ29tYm9ib3hDbG9zZVwiLCB0aGlzLnRvZ2dsZUNsb3NlRW5kKTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlT3BlbkVuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2FsY2l0ZUNvbWJvYm94T3BlblwiLCB0aGlzLnRvZ2dsZU9wZW5FbmQpO1xuICAgIH07XG4gICAgdGhpcy5zZXRNYXhTY3JvbGxlckhlaWdodCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgbGlzdENvbnRhaW5lckVsLCBvcGVuLCByZWZlcmVuY2VFbCB9ID0gdGhpcztcbiAgICAgIGlmICghbGlzdENvbnRhaW5lckVsIHx8ICFvcGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICAgIGNvbnN0IG1heFNjcm9sbGVySGVpZ2h0ID0gdGhpcy5nZXRNYXhTY3JvbGxlckhlaWdodCgpO1xuICAgICAgbGlzdENvbnRhaW5lckVsLnN0eWxlLm1heEhlaWdodCA9IG1heFNjcm9sbGVySGVpZ2h0ID4gMCA/IGAke21heFNjcm9sbGVySGVpZ2h0fXB4YCA6IFwiXCI7XG4gICAgICBsaXN0Q29udGFpbmVyRWwuc3R5bGUubWluV2lkdGggPSBgJHtyZWZlcmVuY2VFbC5jbGllbnRXaWR0aH1weGA7XG4gICAgICBhd2FpdCB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmNhbGNpdGVDaGlwQ2xvc2VIYW5kbGVyID0gKGNvbWJvYm94SXRlbSkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLml0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0gPT09IGNvbWJvYm94SXRlbSk7XG4gICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHNlbGVjdGlvbiwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hDaGlwQ2xvc2UuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgaWYgKGNvbXBvc2VkUGF0aC5zb21lKChub2RlKSA9PiBub2RlLnRhZ05hbWUgPT09IFwiQ0FMQ0lURS1DSElQXCIpKSB7XG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoY29tcG9zZWRQYXRoLnNvbWUoKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0Py5jb250YWlucyhDU1MkMi5idXR0b24pKSkge1xuICAgICAgICB0aGlzLmNsZWFyVmFsdWUoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcbiAgICAgIHRoaXMuZW5zdXJlUmVjZW50U2VsZWN0ZWRJdGVtSXNBY3RpdmUoKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0SW5hY3RpdmVJZk5vdENvbnRhaW5lZCA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgICBpZiAoIXRoaXMub3BlbiB8fCBjb21wb3NlZFBhdGguaW5jbHVkZXModGhpcy5lbCkgfHwgY29tcG9zZWRQYXRoLmluY2x1ZGVzKHRoaXMucmVmZXJlbmNlRWwpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFsbG93Q3VzdG9tVmFsdWVzICYmIHRoaXMudGV4dC50cmltKCkubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWRkQ3VzdG9tQ2hpcCh0aGlzLnRleHQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uTW9kZSA9PT0gXCJzaW5nbGVcIikge1xuICAgICAgICBpZiAodGhpcy50ZXh0SW5wdXQpIHtcbiAgICAgICAgICB0aGlzLnRleHRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0ID0gXCJcIjtcbiAgICAgICAgdGhpcy5maWx0ZXJJdGVtcyhcIlwiKTtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgoLTEpO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfTtcbiAgICB0aGlzLnNldEZsb2F0aW5nRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuZmxvYXRpbmdFbCA9IGVsO1xuICAgICAgY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5yZWZlcmVuY2VFbCwgdGhpcy5mbG9hdGluZ0VsKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0Q29udGFpbmVyRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG4gICAgICB0aGlzLmxpc3RDb250YWluZXJFbCA9IGVsO1xuICAgICAgdGhpcy50cmFuc2l0aW9uRWwgPSBlbDtcbiAgICAgIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgfTtcbiAgICB0aGlzLnNldFJlZmVyZW5jZUVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLnJlZmVyZW5jZUVsID0gZWw7XG4gICAgICBjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLnJlZmVyZW5jZUVsLCB0aGlzLmZsb2F0aW5nRWwpO1xuICAgIH07XG4gICAgdGhpcy5pbnB1dEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy50ZXh0ID0gdmFsdWU7XG4gICAgICB0aGlzLmZpbHRlckl0ZW1zKHZhbHVlKTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUNoaXBJbmRleCA9IC0xO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5maWx0ZXJJdGVtcyA9ICgoKSA9PiB7XG4gICAgICBjb25zdCBmaW5kID0gKGl0ZW0sIGZpbHRlcmVkRGF0YSkgPT4gaXRlbSAmJlxuICAgICAgICBmaWx0ZXJlZERhdGEuc29tZSgoeyBsYWJlbCwgdmFsdWUgfSkgPT4ge1xuICAgICAgICAgIGlmIChpc0dyb3VwKGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IGl0ZW0ubGFiZWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAodmFsdWUgPT09IGl0ZW0udGV4dExhYmVsIHx8XG4gICAgICAgICAgICB2YWx1ZSA9PT0gaXRlbS52YWx1ZSB8fFxuICAgICAgICAgICAgbGFiZWwgPT09IGl0ZW0udGV4dExhYmVsIHx8XG4gICAgICAgICAgICBsYWJlbCA9PT0gaXRlbS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgcmV0dXJuIGRlYm91bmNlKCh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGZpbHRlcih0aGlzLmRhdGEsIHRleHQpO1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0Q29tYmluZWRJdGVtcygpO1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgaGlkZGVuID0gIWZpbmQoaXRlbSwgZmlsdGVyZWREYXRhKTtcbiAgICAgICAgICBpdGVtLmhpZGRlbiA9IGhpZGRlbjtcbiAgICAgICAgICBjb25zdCBbcGFyZW50LCBncmFuZHBhcmVudF0gPSBpdGVtLmFuY2VzdG9ycztcbiAgICAgICAgICBpZiAoZmluZChwYXJlbnQsIGZpbHRlcmVkRGF0YSkgfHwgZmluZChncmFuZHBhcmVudCwgZmlsdGVyZWREYXRhKSkge1xuICAgICAgICAgICAgaXRlbS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICAgIGl0ZW0uYW5jZXN0b3JzLmZvckVhY2goKGFuY2VzdG9yKSA9PiAoYW5jZXN0b3IuaGlkZGVuID0gZmFsc2UpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSB0aGlzLmdldGZpbHRlcmVkSXRlbXMoKTtcbiAgICAgICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hGaWx0ZXJDaGFuZ2UuZW1pdCgpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9KSgpO1xuICAgIHRoaXMuaW50ZXJuYWxDb21ib2JveENoYW5nZUV2ZW50ID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hDaGFuZ2UuZW1pdCgpO1xuICAgIH07XG4gICAgdGhpcy5lbWl0Q29tYm9ib3hDaGFuZ2UgPSBkZWJvdW5jZSh0aGlzLmludGVybmFsQ29tYm9ib3hDaGFuZ2VFdmVudCwgMCk7XG4gICAgdGhpcy51cGRhdGVJdGVtcyA9ICgpID0+IHtcbiAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgICB0aGlzLmdyb3VwSXRlbXMgPSB0aGlzLmdldEdyb3VwSXRlbXMoKTtcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gdGhpcy5nZXRTZWxlY3RlZEl0ZW1zKCk7XG4gICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSB0aGlzLmdldGZpbHRlcmVkSXRlbXMoKTtcbiAgICAgIHRoaXMubmVlZHNJY29uID0gdGhpcy5nZXROZWVkc0ljb24oKTtcbiAgICAgIGlmICghdGhpcy5hbGxvd0N1c3RvbVZhbHVlcykge1xuICAgICAgICB0aGlzLnNldE1heFNjcm9sbGVySGVpZ2h0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNjcm9sbFRvQWN0aXZlSXRlbSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSB0aGlzLmZpbHRlcmVkSXRlbXNbdGhpcy5hY3RpdmVJdGVtSW5kZXhdO1xuICAgICAgaWYgKCFhY3RpdmVJdGVtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY2FsY3VsYXRlU2luZ2xlSXRlbUhlaWdodChhY3RpdmVJdGVtKTtcbiAgICAgIGNvbnN0IHsgb2Zmc2V0SGVpZ2h0LCBzY3JvbGxUb3AgfSA9IHRoaXMubGlzdENvbnRhaW5lckVsO1xuICAgICAgaWYgKG9mZnNldEhlaWdodCArIHNjcm9sbFRvcCA8IGFjdGl2ZUl0ZW0ub2Zmc2V0VG9wICsgaGVpZ2h0KSB7XG4gICAgICAgIHRoaXMubGlzdENvbnRhaW5lckVsLnNjcm9sbFRvcCA9IGFjdGl2ZUl0ZW0ub2Zmc2V0VG9wIC0gb2Zmc2V0SGVpZ2h0ICsgaGVpZ2h0O1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYWN0aXZlSXRlbS5vZmZzZXRUb3AgPCBzY3JvbGxUb3ApIHtcbiAgICAgICAgdGhpcy5saXN0Q29udGFpbmVyRWwuc2Nyb2xsVG9wID0gYWN0aXZlSXRlbS5vZmZzZXRUb3A7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmNvbWJvYm94Rm9jdXNIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy50ZXh0SW5wdXQ/LmZvY3VzKCk7XG4gICAgfTtcbiAgICB0aGlzLmNvbWJvYm94Qmx1ckhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2V0SW5hY3RpdmVJZk5vdENvbnRhaW5lZChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmNsZWFyRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb3JtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wbGFjZWhvbGRlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBsYWNlaG9sZGVySWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBsYWNlaG9sZGVySWNvbkZsaXBSdGwgPSBmYWxzZTtcbiAgICB0aGlzLm1heEl0ZW1zID0gMDtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hbGxvd0N1c3RvbVZhbHVlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbmluZyA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3Rpb25Nb2RlID0gXCJtdWx0aXBsZVwiO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLmZsaXBQbGFjZW1lbnRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IFtdO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmdyb3VwSXRlbXMgPSBbXTtcbiAgICB0aGlzLm5lZWRzSWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IC0xO1xuICAgIHRoaXMuYWN0aXZlQ2hpcEluZGV4ID0gLTE7XG4gICAgdGhpcy5hY3RpdmVEZXNjZW5kYW50ID0gXCJcIjtcbiAgICB0aGlzLnRleHQgPSBcIlwiO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIG9wZW5IYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRNYXhTY3JvbGxlckhlaWdodCgpO1xuICB9XG4gIGhhbmRsZURpc2FibGVkQ2hhbmdlKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIG1heEl0ZW1zSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldE1heFNjcm9sbGVySGVpZ2h0KCk7XG4gIH1cbiAgb3ZlcmxheVBvc2l0aW9uaW5nSGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgdmFsdWVIYW5kbGVyKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmludGVybmFsVmFsdWVDaGFuZ2VGbGFnKSB7XG4gICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zZWxlY3RlZCA9IHZhbHVlLmluY2x1ZGVzKGl0ZW0udmFsdWUpKSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zZWxlY3RlZCA9IHZhbHVlID09PSBpdGVtLnZhbHVlKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZSkpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgIH1cbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qICB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGZsaXBQbGFjZW1lbnRzSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cygpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBzZWxlY3RlZEl0ZW1zSGFuZGxlcigpIHtcbiAgICB0aGlzLmludGVybmFsVmFsdWVDaGFuZ2VGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIHRoaXMuaW50ZXJuYWxWYWx1ZUNoYW5nZUZsYWcgPSBmYWxzZTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkb2N1bWVudENsaWNrSGFuZGxlcihldmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldEluYWN0aXZlSWZOb3RDb250YWluZWQoZXZlbnQpO1xuICB9XG4gIGNhbGNpdGVDb21ib2JveEl0ZW1DaGFuZ2VIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuaWdub3JlU2VsZWN0ZWRFdmVudHNGbGFnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuZmlsdGVyZWRJdGVtcy5pbmRleE9mKHRhcmdldCk7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgobmV3SW5kZXgpO1xuICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHRhcmdldCwgdGFyZ2V0LnNlbGVjdGVkKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZGVsYXllZFxuICAgKi9cbiAgYXN5bmMgcmVwb3NpdGlvbihkZWxheWVkID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IGZsb2F0aW5nRWwsIHJlZmVyZW5jZUVsLCBwbGFjZW1lbnQsIG92ZXJsYXlQb3NpdGlvbmluZywgZmlsdGVyZWRGbGlwUGxhY2VtZW50cyB9ID0gdGhpcztcbiAgICByZXR1cm4gcmVwb3NpdGlvbih0aGlzLCB7XG4gICAgICBmbG9hdGluZ0VsLFxuICAgICAgcmVmZXJlbmNlRWwsXG4gICAgICBvdmVybGF5UG9zaXRpb25pbmcsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBmbGlwUGxhY2VtZW50czogZmlsdGVyZWRGbGlwUGxhY2VtZW50cyxcbiAgICAgIHR5cGU6IFwibWVudVwiXG4gICAgfSwgZGVsYXllZCk7XG4gIH1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMudGV4dElucHV0Py5mb2N1cygpO1xuICAgIHRoaXMuYWN0aXZlQ2hpcEluZGV4ID0gLTE7XG4gICAgdGhpcy5hY3RpdmVJdGVtSW5kZXggPSAtMTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRoaXMuaW50ZXJuYWxWYWx1ZUNoYW5nZUZsYWcgPSB0cnVlO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgdGhpcy5pbnRlcm5hbFZhbHVlQ2hhbmdlRmxhZyA9IGZhbHNlO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cygpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLm9wZW5IYW5kbGVyKCk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBhZnRlckNvbm5lY3REZWZhdWx0VmFsdWVTZXQodGhpcywgdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5lbC5vZmZzZXRIZWlnaHQgIT09IHRoaXMuaW5wdXRIZWlnaHQpIHtcbiAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICAgIHRoaXMuaW5wdXRIZWlnaHQgPSB0aGlzLmVsLm9mZnNldEhlaWdodDtcbiAgICB9XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICBkaXNjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgZGlzY29ubmVjdEZvcm0odGhpcyk7XG4gICAgZGlzY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5yZWZlcmVuY2VFbCwgdGhpcy5mbG9hdGluZ0VsKTtcbiAgICBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIC8qKiB3aGVuIHNlYXJjaCB0ZXh0IGlzIGNsZWFyZWQsIHJlc2V0IGFjdGl2ZSB0byAgKi9cbiAgdGV4dEhhbmRsZXIoKSB7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVJdGVtSW5kZXgoLTEpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjbGVhclZhbHVlKCkge1xuICAgIHRoaXMuaWdub3JlU2VsZWN0ZWRFdmVudHNGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGVsKSA9PiAoZWwuc2VsZWN0ZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuaWdub3JlU2VsZWN0ZWRFdmVudHNGbGFnID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgdGhpcy5lbWl0Q29tYm9ib3hDaGFuZ2UoKTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZUl0ZW1JbmRleCgtMSk7XG4gICAgdGhpcy5yZXNldFRleHQoKTtcbiAgICB0aGlzLmZpbHRlckl0ZW1zKFwiXCIpO1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxuICBjb21ib2JveEluVmlld3BvcnQoKSB7XG4gICAgY29uc3QgYm91bmRpbmcgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiAoYm91bmRpbmcudG9wID49IDAgJiZcbiAgICAgIGJvdW5kaW5nLmxlZnQgPj0gMCAmJlxuICAgICAgYm91bmRpbmcucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgJiZcbiAgICAgIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpKTtcbiAgfVxuICBvbkJlZm9yZU9wZW4oKSB7XG4gICAgdGhpcy5zY3JvbGxUb0FjdGl2ZUl0ZW0oKTtcbiAgICB0aGlzLmNhbGNpdGVDb21ib2JveEJlZm9yZU9wZW4uZW1pdCgpO1xuICB9XG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLmNhbGNpdGVDb21ib2JveE9wZW4uZW1pdCgpO1xuICB9XG4gIG9uQmVmb3JlQ2xvc2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlQ29tYm9ib3hCZWZvcmVDbG9zZS5lbWl0KCk7XG4gIH1cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVDb21ib2JveENsb3NlLmVtaXQoKTtcbiAgfVxuICBlbnN1cmVSZWNlbnRTZWxlY3RlZEl0ZW1Jc0FjdGl2ZSgpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkSXRlbXMgfSA9IHRoaXM7XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBzZWxlY3RlZEl0ZW1zLmxlbmd0aCA9PT0gMCA/IDAgOiB0aGlzLml0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtc1tzZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDFdKTtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZUl0ZW1JbmRleCh0YXJnZXRJbmRleCk7XG4gIH1cbiAgZ2V0TWF4U2Nyb2xsZXJIZWlnaHQoKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldENvbWJpbmVkSXRlbXMoKS5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmhpZGRlbik7XG4gICAgY29uc3QgeyBtYXhJdGVtcyB9ID0gdGhpcztcbiAgICBsZXQgaXRlbXNUb1Byb2Nlc3MgPSAwO1xuICAgIGxldCBtYXhTY3JvbGxlckhlaWdodCA9IDA7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA+IG1heEl0ZW1zKSB7XG4gICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtc1RvUHJvY2VzcyA8IG1heEl0ZW1zICYmIG1heEl0ZW1zID4gMCkge1xuICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY2FsY3VsYXRlU2luZ2xlSXRlbUhlaWdodChpdGVtKTtcbiAgICAgICAgICBpZiAoaGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgbWF4U2Nyb2xsZXJIZWlnaHQgKz0gaGVpZ2h0O1xuICAgICAgICAgICAgaXRlbXNUb1Byb2Nlc3MrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWF4U2Nyb2xsZXJIZWlnaHQ7XG4gIH1cbiAgY2FsY3VsYXRlU2luZ2xlSXRlbUhlaWdodChpdGVtKSB7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBoZWlnaHQgPSBpdGVtLm9mZnNldEhlaWdodDtcbiAgICAvLyBpZiBpdGVtIGhhcyBjaGlsZHJlbiBpdGVtcywgZG9uJ3QgY291bnQgdGhlaXIgaGVpZ2h0IHR3aWNlXG4gICAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKGl0ZW0ucXVlcnlTZWxlY3RvckFsbChDb21ib2JveENoaWxkU2VsZWN0b3IpKTtcbiAgICBjaGlsZHJlblxuICAgICAgLm1hcCgoY2hpbGQpID0+IGNoaWxkPy5vZmZzZXRIZWlnaHQpXG4gICAgICAuZm9yRWFjaCgob2Zmc2V0SGVpZ2h0KSA9PiB7XG4gICAgICBoZWlnaHQgLT0gb2Zmc2V0SGVpZ2h0O1xuICAgIH0pO1xuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgZ2V0Q29tYmluZWRJdGVtcygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuZ3JvdXBJdGVtcywgLi4udGhpcy5pdGVtc107XG4gIH1cbiAgdG9nZ2xlU2VsZWN0aW9uKGl0ZW0sIHZhbHVlID0gIWl0ZW0uc2VsZWN0ZWQpIHtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNNdWx0aSgpKSB7XG4gICAgICBpdGVtLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZUFuY2VzdG9ycyhpdGVtKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtcygpO1xuICAgICAgdGhpcy5lbWl0Q29tYm9ib3hDaGFuZ2UoKTtcbiAgICAgIHRoaXMucmVzZXRUZXh0KCk7XG4gICAgICB0aGlzLmZpbHRlckl0ZW1zKFwiXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaWdub3JlU2VsZWN0ZWRFdmVudHNGbGFnID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoZWwpID0+IChlbC5zZWxlY3RlZCA9IGVsID09PSBpdGVtID8gdmFsdWUgOiBmYWxzZSkpO1xuICAgICAgdGhpcy5pZ25vcmVTZWxlY3RlZEV2ZW50c0ZsYWcgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtcygpO1xuICAgICAgdGhpcy5lbWl0Q29tYm9ib3hDaGFuZ2UoKTtcbiAgICAgIGlmICh0aGlzLnRleHRJbnB1dCkge1xuICAgICAgICB0aGlzLnRleHRJbnB1dC52YWx1ZSA9IGl0ZW0udGV4dExhYmVsO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUl0ZW1JbmRleCgtMSk7XG4gICAgICB0aGlzLnJlc2V0VGV4dCgpO1xuICAgICAgdGhpcy5maWx0ZXJJdGVtcyhcIlwiKTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlQW5jZXN0b3JzKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb25Nb2RlICE9PSBcImFuY2VzdG9yc1wiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFuY2VzdG9ycyA9IGdldEl0ZW1BbmNlc3RvcnMoaXRlbSk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBnZXRJdGVtQ2hpbGRyZW4oaXRlbSk7XG4gICAgaWYgKGl0ZW0uc2VsZWN0ZWQpIHtcbiAgICAgIGFuY2VzdG9ycy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKChlbCkgPT4gKGVsLnNlbGVjdGVkID0gZmFsc2UpKTtcbiAgICAgIFsuLi5hbmNlc3RvcnNdLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGlmICghaGFzQWN0aXZlQ2hpbGRyZW4oZWwpKSB7XG4gICAgICAgICAgZWwuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGdldGZpbHRlcmVkSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiAhaXRlbS5oaWRkZW4pO1xuICB9XG4gIGdldFNlbGVjdGVkSXRlbXMoKSB7XG4gICAgaWYgKCF0aGlzLmlzTXVsdGkoKSkge1xuICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLml0ZW1zLmZpbmQoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpO1xuICAgICAgcmV0dXJuIG1hdGNoID8gW21hdGNoXSA6IFtdO1xuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuaXRlbXNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc2VsZWN0ZWQgJiYgKHRoaXMuc2VsZWN0aW9uTW9kZSAhPT0gXCJhbmNlc3RvcnNcIiB8fCAhaGFzQWN0aXZlQ2hpbGRyZW4oaXRlbSkpKVxuICAgICAgLyoqIFByZXNlcnZlIG9yZGVyIG9mIGVudGVyZWQgdGFncyAqL1xuICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGFJZHggPSB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihhKTtcbiAgICAgIGNvbnN0IGJJZHggPSB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihiKTtcbiAgICAgIGlmIChhSWR4ID4gLTEgJiYgYklkeCA+IC0xKSB7XG4gICAgICAgIHJldHVybiBhSWR4IC0gYklkeDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiSWR4IC0gYUlkeDtcbiAgICB9KSk7XG4gIH1cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICBmaWx0ZXJEaXNhYmxlZDogaXRlbS5maWx0ZXJEaXNhYmxlZCxcbiAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxuICAgICAgbGFiZWw6IGl0ZW0udGV4dExhYmVsXG4gICAgfSkpO1xuICB9XG4gIGdldE5lZWRzSWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiICYmIHRoaXMuaXRlbXMuc29tZSgoaXRlbSkgPT4gaXRlbS5pY29uKTtcbiAgfVxuICByZXNldFRleHQoKSB7XG4gICAgaWYgKHRoaXMudGV4dElucHV0KSB7XG4gICAgICB0aGlzLnRleHRJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICAgIHRoaXMudGV4dCA9IFwiXCI7XG4gIH1cbiAgZ2V0SXRlbXMoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChDb21ib2JveEl0ZW0kMSkpO1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmRpc2FibGVkKTtcbiAgfVxuICBnZXRHcm91cEl0ZW1zKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChDb21ib2JveEl0ZW1Hcm91cCQxKSk7XG4gIH1cbiAgYWRkQ3VzdG9tQ2hpcCh2YWx1ZSwgZm9jdXMpIHtcbiAgICBjb25zdCBleGlzdGluZ0l0ZW0gPSB0aGlzLml0ZW1zLmZpbmQoKGVsKSA9PiBlbC50ZXh0TGFiZWwgPT09IHZhbHVlKTtcbiAgICBpZiAoZXhpc3RpbmdJdGVtKSB7XG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbihleGlzdGluZ0l0ZW0sIHRydWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5pc011bHRpKCkpIHtcbiAgICAgICAgdGhpcy50b2dnbGVTZWxlY3Rpb24odGhpcy5zZWxlY3RlZEl0ZW1zW3RoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxXSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoQ29tYm9ib3hJdGVtJDEpO1xuICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgaXRlbS50ZXh0TGFiZWwgPSB2YWx1ZTtcbiAgICAgIGl0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgIHRoaXMucmVzZXRUZXh0KCk7XG4gICAgICBpZiAoZm9jdXMpIHtcbiAgICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVJdGVtcygpO1xuICAgICAgdGhpcy5maWx0ZXJJdGVtcyhcIlwiKTtcbiAgICAgIHRoaXMuZW1pdENvbWJvYm94Q2hhbmdlKCk7XG4gICAgfVxuICB9XG4gIHJlbW92ZUFjdGl2ZUNoaXAoKSB7XG4gICAgdGhpcy50b2dnbGVTZWxlY3Rpb24odGhpcy5zZWxlY3RlZEl0ZW1zW3RoaXMuYWN0aXZlQ2hpcEluZGV4XSwgZmFsc2UpO1xuICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgfVxuICByZW1vdmVMYXN0Q2hpcCgpIHtcbiAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbih0aGlzLnNlbGVjdGVkSXRlbXNbdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDFdLCBmYWxzZSk7XG4gICAgdGhpcy5zZXRGb2N1cygpO1xuICB9XG4gIHByZXZpb3VzQ2hpcCgpIHtcbiAgICBpZiAodGhpcy50ZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlQ2hpcEluZGV4O1xuICAgIHRoaXMuYWN0aXZlQ2hpcEluZGV4ID0gYWN0aXZlID09PSAtMSA/IGxlbmd0aCA6IE1hdGgubWF4KGFjdGl2ZSAtIDEsIDApO1xuICAgIHRoaXMudXBkYXRlQWN0aXZlSXRlbUluZGV4KC0xKTtcbiAgICB0aGlzLmZvY3VzQ2hpcCgpO1xuICB9XG4gIG5leHRDaGlwKCkge1xuICAgIGlmICh0aGlzLnRleHQgfHwgdGhpcy5hY3RpdmVDaGlwSW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxhc3QgPSB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuYWN0aXZlQ2hpcEluZGV4ICsgMTtcbiAgICBpZiAobmV3SW5kZXggPiBsYXN0KSB7XG4gICAgICB0aGlzLmFjdGl2ZUNoaXBJbmRleCA9IC0xO1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlQ2hpcEluZGV4ID0gbmV3SW5kZXg7XG4gICAgICB0aGlzLmZvY3VzQ2hpcCgpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZUl0ZW1JbmRleCgtMSk7XG4gIH1cbiAgZm9jdXNDaGlwKCkge1xuICAgIGNvbnN0IGd1aWQgPSB0aGlzLnNlbGVjdGVkSXRlbXNbdGhpcy5hY3RpdmVDaGlwSW5kZXhdPy5ndWlkO1xuICAgIGNvbnN0IGNoaXAgPSBndWlkXG4gICAgICA/IHRoaXMucmVmZXJlbmNlRWwucXVlcnlTZWxlY3RvcihgIyR7Y2hpcFVpZFByZWZpeH0ke2d1aWR9YClcbiAgICAgIDogbnVsbDtcbiAgICBjaGlwPy5zZXRGb2N1cygpO1xuICB9XG4gIHNoaWZ0QWN0aXZlSXRlbUluZGV4KGRlbHRhKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHRoaXMuZmlsdGVyZWRJdGVtcztcbiAgICBjb25zdCBuZXdJbmRleCA9ICh0aGlzLmFjdGl2ZUl0ZW1JbmRleCArIGxlbmd0aCArIGRlbHRhKSAlIGxlbmd0aDtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZUl0ZW1JbmRleChuZXdJbmRleCk7XG4gICAgdGhpcy5zY3JvbGxUb0FjdGl2ZUl0ZW0oKTtcbiAgfVxuICB1cGRhdGVBY3RpdmVJdGVtSW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLmFjdGl2ZUl0ZW1JbmRleCA9IGluZGV4O1xuICAgIGxldCBhY3RpdmVEZXNjZW5kYW50ID0gbnVsbDtcbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICBlbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBhY3RpdmVEZXNjZW5kYW50ID0gYCR7aXRlbVVpZFByZWZpeH0ke2VsLmd1aWR9YDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFjdGl2ZURlc2NlbmRhbnQgPSBhY3RpdmVEZXNjZW5kYW50O1xuICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW1JbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmFjdGl2ZUNoaXBJbmRleCA9IC0xO1xuICAgIH1cbiAgfVxuICBpc011bHRpKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbk1vZGUgIT09IFwic2luZ2xlXCI7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJDaGlwcygpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUNoaXBJbmRleCwgc2NhbGUsIHNlbGVjdGlvbk1vZGUsIG1lc3NhZ2VzIH0gPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICBjb25zdCBjaGlwQ2xhc3NlcyA9IHtcbiAgICAgICAgY2hpcDogdHJ1ZSxcbiAgICAgICAgXCJjaGlwLS1hY3RpdmVcIjogYWN0aXZlQ2hpcEluZGV4ID09PSBpXG4gICAgICB9O1xuICAgICAgY29uc3QgYW5jZXN0b3JzID0gWy4uLmdldEl0ZW1BbmNlc3RvcnMoaXRlbSldLnJldmVyc2UoKTtcbiAgICAgIGNvbnN0IHBhdGhMYWJlbCA9IFsuLi5hbmNlc3RvcnMsIGl0ZW1dLm1hcCgoZWwpID0+IGVsLnRleHRMYWJlbCk7XG4gICAgICBjb25zdCBsYWJlbCA9IHNlbGVjdGlvbk1vZGUgIT09IFwiYW5jZXN0b3JzXCIgPyBpdGVtLnRleHRMYWJlbCA6IHBhdGhMYWJlbC5qb2luKFwiIC8gXCIpO1xuICAgICAgcmV0dXJuIChoKFwiY2FsY2l0ZS1jaGlwXCIsIHsgY2xhc3M6IGNoaXBDbGFzc2VzLCBjbG9zYWJsZTogdHJ1ZSwgaWNvbjogaXRlbS5pY29uLCBpY29uRmxpcFJ0bDogaXRlbS5pY29uRmxpcFJ0bCwgaWQ6IGl0ZW0uZ3VpZCA/IGAke2NoaXBVaWRQcmVmaXh9JHtpdGVtLmd1aWR9YCA6IG51bGwsIGtleTogaXRlbS50ZXh0TGFiZWwsIG1lc3NhZ2VPdmVycmlkZXM6IHsgZGlzbWlzc0xhYmVsOiBtZXNzYWdlcy5yZW1vdmVUYWcgfSwgb25DYWxjaXRlQ2hpcENsb3NlOiAoKSA9PiB0aGlzLmNhbGNpdGVDaGlwQ2xvc2VIYW5kbGVyKGl0ZW0pLCBzY2FsZTogc2NhbGUsIHRpdGxlOiBsYWJlbCwgdmFsdWU6IGl0ZW0udmFsdWUgfSwgbGFiZWwpKTtcbiAgICB9KTtcbiAgfVxuICByZW5kZXJJbnB1dCgpIHtcbiAgICBjb25zdCB7IGd1aWQsIGRpc2FibGVkLCBwbGFjZWhvbGRlciwgc2VsZWN0aW9uTW9kZSwgc2VsZWN0ZWRJdGVtcywgb3BlbiB9ID0gdGhpcztcbiAgICBjb25zdCBzaW5nbGUgPSBzZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiO1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHNlbGVjdGVkSXRlbXNbMF07XG4gICAgY29uc3Qgc2hvd0xhYmVsID0gIW9wZW4gJiYgc2luZ2xlICYmICEhc2VsZWN0ZWRJdGVtO1xuICAgIHJldHVybiAoaChcInNwYW5cIiwgeyBjbGFzczoge1xuICAgICAgICBcImlucHV0LXdyYXBcIjogdHJ1ZSxcbiAgICAgICAgXCJpbnB1dC13cmFwLS1zaW5nbGVcIjogc2luZ2xlXG4gICAgICB9IH0sIHNob3dMYWJlbCAmJiAoaChcInNwYW5cIiwgeyBjbGFzczoge1xuICAgICAgICBsYWJlbDogdHJ1ZSxcbiAgICAgICAgXCJsYWJlbC0taWNvblwiOiAhIXNlbGVjdGVkSXRlbT8uaWNvblxuICAgICAgfSwga2V5OiBcImxhYmVsXCIgfSwgc2VsZWN0ZWRJdGVtLnRleHRMYWJlbCkpLCBoKFwiaW5wdXRcIiwgeyBcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiOiB0aGlzLmFjdGl2ZURlc2NlbmRhbnQsIFwiYXJpYS1hdXRvY29tcGxldGVcIjogXCJsaXN0XCIsIFwiYXJpYS1jb250cm9sc1wiOiBgJHtsaXN0Ym94VWlkUHJlZml4fSR7Z3VpZH1gLCBcImFyaWEtbGFiZWxcIjogZ2V0TGFiZWxUZXh0KHRoaXMpLCBjbGFzczoge1xuICAgICAgICBpbnB1dDogdHJ1ZSxcbiAgICAgICAgXCJpbnB1dC0tc2luZ2xlXCI6IHRydWUsXG4gICAgICAgIFwiaW5wdXQtLXRyYW5zcGFyZW50XCI6IHRoaXMuYWN0aXZlQ2hpcEluZGV4ID4gLTEsXG4gICAgICAgIFwiaW5wdXQtLWhpZGRlblwiOiBzaG93TGFiZWwsXG4gICAgICAgIFwiaW5wdXQtLWljb25cIjogISF0aGlzLnBsYWNlaG9sZGVySWNvblxuICAgICAgfSwgZGlzYWJsZWQ6IGRpc2FibGVkLCBpZDogYCR7aW5wdXRVaWRQcmVmaXh9JHtndWlkfWAsIGtleTogXCJpbnB1dFwiLCBvbkJsdXI6IHRoaXMuY29tYm9ib3hCbHVySGFuZGxlciwgb25Gb2N1czogdGhpcy5jb21ib2JveEZvY3VzSGFuZGxlciwgb25JbnB1dDogdGhpcy5pbnB1dEhhbmRsZXIsIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlciwgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy50ZXh0SW5wdXQgPSBlbCkgfSkpKTtcbiAgfVxuICByZW5kZXJMaXN0Qm94T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEl0ZW1zLm1hcCgoaXRlbSkgPT4gKGgoXCJsaVwiLCB7IFwiYXJpYS1zZWxlY3RlZFwiOiB0b0FyaWFCb29sZWFuKGl0ZW0uc2VsZWN0ZWQpLCBpZDogaXRlbS5ndWlkID8gYCR7aXRlbVVpZFByZWZpeH0ke2l0ZW0uZ3VpZH1gIDogbnVsbCwgcm9sZTogXCJvcHRpb25cIiwgdGFiaW5kZXg6IFwiLTFcIiB9LCBpdGVtLnRleHRMYWJlbCkpKTtcbiAgfVxuICByZW5kZXJGbG9hdGluZ1VJQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IHsgc2V0RmxvYXRpbmdFbCwgc2V0Q29udGFpbmVyRWwsIG9wZW4gfSA9IHRoaXM7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIFtDU1MkMy5saXN0Q29udGFpbmVyXTogdHJ1ZSxcbiAgICAgIFtGbG9hdGluZ0NTUy5hbmltYXRpb25dOiB0cnVlLFxuICAgICAgW0Zsb2F0aW5nQ1NTLmFuaW1hdGlvbkFjdGl2ZV06IG9wZW5cbiAgICB9O1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiB7XG4gICAgICAgIFwiZmxvYXRpbmctdWktY29udGFpbmVyXCI6IHRydWUsXG4gICAgICAgIFwiZmxvYXRpbmctdWktY29udGFpbmVyLS1hY3RpdmVcIjogb3BlblxuICAgICAgfSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiBzZXRGbG9hdGluZ0VsIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogY2xhc3NlcyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiBzZXRDb250YWluZXJFbCB9LCBoKFwidWxcIiwgeyBjbGFzczogeyBsaXN0OiB0cnVlLCBcImxpc3QtLWhpZGVcIjogIW9wZW4gfSB9LCBoKFwic2xvdFwiLCBudWxsKSkpKSk7XG4gIH1cbiAgcmVuZGVySWNvblN0YXJ0KCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRJdGVtcywgcGxhY2Vob2xkZXJJY29uLCBzZWxlY3Rpb25Nb2RlLCBwbGFjZWhvbGRlckljb25GbGlwUnRsIH0gPSB0aGlzO1xuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHNlbGVjdGVkSXRlbXNbMF07XG4gICAgY29uc3Qgc2VsZWN0ZWRJY29uID0gc2VsZWN0ZWRJdGVtPy5pY29uO1xuICAgIGNvbnN0IHNpbmdsZVNlbGVjdGlvbk1vZGUgPSBzZWxlY3Rpb25Nb2RlID09PSBcInNpbmdsZVwiO1xuICAgIGNvbnN0IGljb25BdFN0YXJ0ID0gIXRoaXMub3BlbiAmJiBzZWxlY3RlZEl0ZW1cbiAgICAgID8gISFzZWxlY3RlZEljb24gJiYgc2luZ2xlU2VsZWN0aW9uTW9kZVxuICAgICAgOiAhIXRoaXMucGxhY2Vob2xkZXJJY29uICYmICghc2VsZWN0ZWRJdGVtIHx8IHNpbmdsZVNlbGVjdGlvbk1vZGUpO1xuICAgIHJldHVybiAoaWNvbkF0U3RhcnQgJiYgKGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwiaWNvbi1zdGFydFwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogXCJzZWxlY3RlZC1pY29uXCIsIGZsaXBSdGw6IHRoaXMub3BlbiAmJiBzZWxlY3RlZEl0ZW0gPyBzZWxlY3RlZEl0ZW0uaWNvbkZsaXBSdGwgOiBwbGFjZWhvbGRlckljb25GbGlwUnRsLCBpY29uOiAhdGhpcy5vcGVuICYmIHNlbGVjdGVkSXRlbSA/IHNlbGVjdGVkSWNvbiA6IHBsYWNlaG9sZGVySWNvbiwgc2NhbGU6IFwic1wiIH0pKSkpO1xuICB9XG4gIHJlbmRlckljb25FbmQoKSB7XG4gICAgY29uc3QgeyBvcGVuIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChcInNwYW5cIiwgeyBjbGFzczogXCJpY29uLWVuZFwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBvcGVuID8gXCJjaGV2cm9uLXVwXCIgOiBcImNoZXZyb24tZG93blwiLCBzY2FsZTogXCJzXCIgfSkpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBndWlkLCBsYWJlbCwgb3BlbiB9ID0gdGhpcztcbiAgICBjb25zdCBzaW5nbGUgPSB0aGlzLnNlbGVjdGlvbk1vZGUgPT09IFwic2luZ2xlXCI7XG4gICAgY29uc3QgaXNDbGVhcmFibGUgPSAhdGhpcy5jbGVhckRpc2FibGVkICYmIHRoaXMudmFsdWU/Lmxlbmd0aCA+IDA7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25DbGljazogdGhpcy5jb21ib2JveEZvY3VzSGFuZGxlciB9LCBoKFwiZGl2XCIsIHsgXCJhcmlhLWF1dG9jb21wbGV0ZVwiOiBcImxpc3RcIiwgXCJhcmlhLWNvbnRyb2xzXCI6IGAke2xpc3Rib3hVaWRQcmVmaXh9JHtndWlkfWAsIFwiYXJpYS1leHBhbmRlZFwiOiB0b0FyaWFCb29sZWFuKG9wZW4pLCBcImFyaWEtaGFzcG9wdXBcIjogXCJsaXN0Ym94XCIsIFwiYXJpYS1sYWJlbFwiOiBnZXRMYWJlbFRleHQodGhpcyksIFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsIFwiYXJpYS1vd25zXCI6IGAke2xpc3Rib3hVaWRQcmVmaXh9JHtndWlkfWAsIGNsYXNzOiB7XG4gICAgICAgIHdyYXBwZXI6IHRydWUsXG4gICAgICAgIFwid3JhcHBlci0tc2luZ2xlXCI6IHNpbmdsZSB8fCAhdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCxcbiAgICAgICAgXCJ3cmFwcGVyLS1hY3RpdmVcIjogb3BlblxuICAgICAgfSwgb25DbGljazogdGhpcy5jbGlja0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciwgcm9sZTogXCJjb21ib2JveFwiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0UmVmZXJlbmNlRWwgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImdyaWQtaW5wdXRcIiB9LCB0aGlzLnJlbmRlckljb25TdGFydCgpLCAhc2luZ2xlICYmIHRoaXMucmVuZGVyQ2hpcHMoKSwgaChcImxhYmVsXCIsIHsgY2xhc3M6IFwic2NyZWVuLXJlYWRlcnMtb25seVwiLCBodG1sRm9yOiBgJHtpbnB1dFVpZFByZWZpeH0ke2d1aWR9YCwgaWQ6IGAke2xhYmVsVWlkUHJlZml4fSR7Z3VpZH1gIH0sIGxhYmVsKSwgdGhpcy5yZW5kZXJJbnB1dCgpKSwgaXNDbGVhcmFibGUgPyAoaChYQnV0dG9uLCB7IGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBrZXk6IFwiY2xvc2UtYnV0dG9uXCIsIGxhYmVsOiB0aGlzLm1lc3NhZ2VzLmNsZWFyLCBzY2FsZTogdGhpcy5zY2FsZSB9KSkgOiBudWxsLCB0aGlzLnJlbmRlckljb25FbmQoKSksIGgoXCJ1bFwiLCB7IFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGAke2xhYmVsVWlkUHJlZml4fSR7Z3VpZH1gLCBcImFyaWEtbXVsdGlzZWxlY3RhYmxlXCI6IFwidHJ1ZVwiLCBjbGFzczogXCJzY3JlZW4tcmVhZGVycy1vbmx5XCIsIGlkOiBgJHtsaXN0Ym94VWlkUHJlZml4fSR7Z3VpZH1gLCByb2xlOiBcImxpc3Rib3hcIiwgdGFiSW5kZXg6IC0xIH0sIHRoaXMucmVuZGVyTGlzdEJveE9wdGlvbnMoKSksIHRoaXMucmVuZGVyRmxvYXRpbmdVSUNvbnRhaW5lcigpLCBoKEhpZGRlbkZvcm1JbnB1dFNsb3QsIHsgY29tcG9uZW50OiB0aGlzIH0pKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm9wZW5cIjogW1wib3BlbkhhbmRsZXJcIl0sXG4gICAgXCJkaXNhYmxlZFwiOiBbXCJoYW5kbGVEaXNhYmxlZENoYW5nZVwiXSxcbiAgICBcIm1heEl0ZW1zXCI6IFtcIm1heEl0ZW1zSGFuZGxlclwiXSxcbiAgICBcIm92ZXJsYXlQb3NpdGlvbmluZ1wiOiBbXCJvdmVybGF5UG9zaXRpb25pbmdIYW5kbGVyXCJdLFxuICAgIFwidmFsdWVcIjogW1widmFsdWVIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZmxpcFBsYWNlbWVudHNcIjogW1wiZmxpcFBsYWNlbWVudHNIYW5kbGVyXCJdLFxuICAgIFwic2VsZWN0ZWRJdGVtc1wiOiBbXCJzZWxlY3RlZEl0ZW1zSGFuZGxlclwiXSxcbiAgICBcInRleHRcIjogW1widGV4dEhhbmRsZXJcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbn07XG5Db21ib2JveC5zdHlsZSA9IGNvbWJvYm94Q3NzO1xuXG5jb25zdCBDU1MkMSA9IHtcbiAgaWNvbjogXCJpY29uXCIsXG4gIGljb25BY3RpdmU6IFwiaWNvbi0tYWN0aXZlXCIsXG4gIGljb25JbmRlbnQ6IFwiaWNvbi0taW5kZW50XCIsXG4gIGN1c3RvbTogXCJpY29uLS1jdXN0b21cIixcbiAgZG90OiBcImljb24tLWRvdFwiLFxuICBzaW5nbGU6IFwibGFiZWwtLXNpbmdsZVwiLFxuICBsYWJlbDogXCJsYWJlbFwiLFxuICBhY3RpdmU6IFwibGFiZWwtLWFjdGl2ZVwiLFxuICBzZWxlY3RlZDogXCJsYWJlbC0tc2VsZWN0ZWRcIixcbiAgdGl0bGU6IFwidGl0bGVcIixcbiAgdGV4dENvbnRhaW5lcjogXCJ0ZXh0LWNvbnRhaW5lclwiXG59O1xuXG5jb25zdCBjb21ib2JveEl0ZW1Dc3MgPSBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7QGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZCgqKXtwb2ludGVyLWV2ZW50czpub25lfS5zY2FsZS0tc3tmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MC41cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zOjAuMjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQ6MC41cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNlbGVjdG9yLWljb24tc2l6ZToxcmVtfS5zY2FsZS0tbXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MC43NXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtczowLjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQ6MC43NXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zZWxlY3Rvci1pY29uLXNpemU6MXJlbX0uc2NhbGUtLWx7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtczowLjYyNXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLWluZGVudDoxcmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNlbGVjdG9yLWljb24tc2l6ZToxLjVyZW19LmNvbnRhaW5lcnstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1pbmRlbnQtdmFsdWU6Y2FsYyhcXG4gICAgdmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctaW5kZW50KSAqIHZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLWluZGVudC1tdWx0aXBsaWVyKVxcbiAgKX06aG9zdCg6Zm9jdXMpey0tdHctc2hhZG93OjAgMCAjMDAwMDstLXR3LXNoYWRvdy1jb2xvcmVkOjAgMCAjMDAwMDtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF0pLDpob3N0KFtkaXNhYmxlZF0pIFtjYWxjaXRlLWh5ZHJhdGVkXVtkaXNhYmxlZF17b3BhY2l0eToxfTpob3N0LHVse21hcmdpbjowcHg7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nOjBweH06aG9zdCg6Zm9jdXMpLHVsOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweH0ubGFiZWx7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO21pbi1pbmxpbmUtc2l6ZToxMDAlO2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudDt3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7cGFkZGluZy1ibG9jazp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LXMpO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbCl9Omhvc3QoW2Rpc2FibGVkXSkgLmxhYmVse2N1cnNvcjpkZWZhdWx0fS5sYWJlbC0tc2VsZWN0ZWR7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0ubGFiZWwtLWFjdGl2ZXtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9LmxhYmVsOmhvdmVyLC5sYWJlbDphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7LS10dy1zaGFkb3c6MCAwICMwMDAwOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAwICMwMDAwO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX0udGl0bGV7cGFkZGluZy1ibG9jazowO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtbCl9Lmljb257ZGlzcGxheTppbmxpbmUtZmxleDtvcGFjaXR5OjA7dHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtczt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTEpfS5pY29uLS1pbmRlbnR7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLWluZGVudC12YWx1ZSl9Lmljb24tLWN1c3RvbXttYXJnaW4tYmxvY2stc3RhcnQ6LTFweDtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX0uaWNvbi0tYWN0aXZle2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uaWNvbi0tZG90e2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21pbi1pbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc2VsZWN0b3ItaWNvbi1zaXplKX0uaWNvbi0tZG90OmJlZm9yZXt0ZXh0LWFsaWduOnN0YXJ0O2NvbnRlbnQ6XFxcIuKAolxcXCJ9LmxhYmVsLS1hY3RpdmUgLmljb257b3BhY2l0eToxfS5sYWJlbC0tc2VsZWN0ZWQgLmljb257b3BhY2l0eToxO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KDpob3ZlcltkaXNhYmxlZF0pIC5pY29ue29wYWNpdHk6MX1cIjtcblxuY29uc3QgQ29tYm9ib3hJdGVtID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVDb21ib2JveEl0ZW1DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVDb21ib2JveEl0ZW1DaGFuZ2VcIiwgNik7XG4gICAgLyoqIFNwZWNpZmllcyB0aGUgc2NhbGUgb2YgdGhlIGNvbWJvYm94LWl0ZW0gY29udHJvbGxlZCBieSBwYXJlbnQsIGRlZmF1bHRzIHRvIG0gKi9cbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5pdGVtQ2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy50b2dnbGVTZWxlY3RlZCgpO1xuICAgIH07XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuYW5jZXN0b3JzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZ3VpZCA9IGd1aWQoKTtcbiAgICB0aGlzLmljb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uRmxpcFJ0bCA9IGZhbHNlO1xuICAgIHRoaXMudGV4dExhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5maWx0ZXJEaXNhYmxlZCA9IHVuZGVmaW5lZDtcbiAgfVxuICBzZWxlY3RlZFdhdGNoSGFuZGxlcigpIHtcbiAgICB0aGlzLmNhbGNpdGVDb21ib2JveEl0ZW1DaGFuZ2UuZW1pdCgpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5hbmNlc3RvcnMgPSBnZXRBbmNlc3RvcnModGhpcy5lbCk7XG4gICAgdGhpcy5zY2FsZSA9IGdldEVsZW1lbnRQcm9wKHRoaXMuZWwsIFwic2NhbGVcIiwgdGhpcy5zY2FsZSk7XG4gICAgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB0b2dnbGVTZWxlY3RlZCgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuc2VsZWN0ZWQ7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckljb24oaWNvblBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5pY29uID8gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTJDEuY3VzdG9tXTogISF0aGlzLmljb24sXG4gICAgICAgIFtDU1MkMS5pY29uQWN0aXZlXTogdGhpcy5pY29uICYmIHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgIFtDU1MkMS5pY29uSW5kZW50XTogdHJ1ZVxuICAgICAgfSwgZmxpcFJ0bDogdGhpcy5pY29uRmxpcFJ0bCwgaWNvbjogdGhpcy5pY29uIHx8IGljb25QYXRoLCBrZXk6IFwiaWNvblwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyU2VsZWN0SW5kaWNhdG9yKHNob3dEb3QsIGljb25QYXRoKSB7XG4gICAgcmV0dXJuIHNob3dEb3QgPyAoaChcInNwYW5cIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTJDEuaWNvbl06IHRydWUsXG4gICAgICAgIFtDU1MkMS5kb3RdOiB0cnVlLFxuICAgICAgICBbQ1NTJDEuaWNvbkluZGVudF06IHRydWVcbiAgICAgIH0gfSkpIDogKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTJDEuaWNvbl06IHRydWUsXG4gICAgICAgIFtDU1MkMS5pY29uQWN0aXZlXTogdGhpcy5zZWxlY3RlZCxcbiAgICAgICAgW0NTUyQxLmljb25JbmRlbnRdOiB0cnVlXG4gICAgICB9LCBmbGlwUnRsOiB0aGlzLmljb25GbGlwUnRsLCBpY29uOiBpY29uUGF0aCwga2V5OiBcImluZGljYXRvclwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKTtcbiAgfVxuICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICBpZiAoZ2V0U2xvdHRlZCh0aGlzLmVsKSkge1xuICAgICAgcmV0dXJuIChoKFwidWxcIiwgeyBrZXk6IFwiZGVmYXVsdC1zbG90LWNvbnRhaW5lclwiIH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBpc1NpbmdsZVNlbGVjdCA9IGdldEVsZW1lbnRQcm9wKHRoaXMuZWwsIFwic2VsZWN0aW9uLW1vZGVcIiwgXCJtdWx0aXBsZVwiKSA9PT0gXCJzaW5nbGVcIjtcbiAgICBjb25zdCBzaG93RG90ID0gaXNTaW5nbGVTZWxlY3QgJiYgIXRoaXMuZGlzYWJsZWQ7XG4gICAgY29uc3QgZGVmYXVsdEljb24gPSBpc1NpbmdsZVNlbGVjdCA/IFwiZG90XCIgOiBcImNoZWNrXCI7XG4gICAgY29uc3QgaWNvblBhdGggPSB0aGlzLmRpc2FibGVkID8gXCJjaXJjbGUtZGlzYWxsb3dlZFwiIDogZGVmYXVsdEljb247XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIFtDU1MkMS5sYWJlbF06IHRydWUsXG4gICAgICBbQ1NTJDEuc2VsZWN0ZWRdOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgW0NTUyQxLmFjdGl2ZV06IHRoaXMuYWN0aXZlLFxuICAgICAgW0NTUyQxLnNpbmdsZV06IGlzU2luZ2xlU2VsZWN0XG4gICAgfTtcbiAgICBjb25zdCBkZXB0aCA9IGdldERlcHRoKHRoaXMuZWwpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBgY29udGFpbmVyIHNjYWxlLS0ke3RoaXMuc2NhbGV9YCwgc3R5bGU6IHsgXCItLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLWluZGVudC1tdWx0aXBsaWVyXCI6IGAke2RlcHRofWAgfSB9LCBoKFwibGlcIiwgeyBjbGFzczogY2xhc3NlcywgaWQ6IHRoaXMuZ3VpZCwgb25DbGljazogdGhpcy5pdGVtQ2xpY2tIYW5kbGVyIH0sIHRoaXMucmVuZGVyU2VsZWN0SW5kaWNhdG9yKHNob3dEb3QsIGljb25QYXRoKSwgdGhpcy5yZW5kZXJJY29uKGljb25QYXRoKSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJ0aXRsZVwiIH0sIHRoaXMudGV4dExhYmVsKSksIHRoaXMucmVuZGVyQ2hpbGRyZW4oKSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJzZWxlY3RlZFwiOiBbXCJzZWxlY3RlZFdhdGNoSGFuZGxlclwiXVxuICB9OyB9XG59O1xuQ29tYm9ib3hJdGVtLnN0eWxlID0gY29tYm9ib3hJdGVtQ3NzO1xuXG5jb25zdCBDU1MgPSB7XG4gIGxpc3Q6IFwibGlzdFwiLFxuICBsYWJlbDogXCJsYWJlbFwiLFxuICB0aXRsZTogXCJ0aXRsZVwiXG59O1xuXG5jb25zdCBjb21ib2JveEl0ZW1Hcm91cENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfS5zY2FsZS0tc3tmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjFyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MC41cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctdW5pdC1zOjAuMjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQ6MC41cmVtfS5zY2FsZS0tbXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MC43NXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtczowLjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQ6MC43NXJlbX0uc2NhbGUtLWx7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW07LS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWw6MXJlbTstLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtczowLjc1cmVtOy0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctaW5kZW50OjFyZW19Omhvc3QsLmxpc3R7bWFyZ2luOjBweDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO3BhZGRpbmc6MHB4fTpob3N0KDpmb2N1cyksLmxpc3Q6Zm9jdXN7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4fS5sYWJlbHtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7bWluLWlubGluZS1zaXplOjBweDttYXgtaW5saW5lLXNpemU6MTAwJTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9LnRpdGxley0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLWluZGVudC12YWx1ZTpjYWxjKFxcbiAgICB2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQpICogdmFyKC0tY2FsY2l0ZS1jb21ib2JveC1pdGVtLXNwYWNpbmctaW5kZW50LW11bHRpcGxpZXIpXFxuICApO2JvcmRlcjowIHNvbGlkO2Rpc3BsYXk6YmxvY2s7ZmxleDoxIDEgMCU7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHg7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ib2xkKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7d29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay13b3JkO2JvcmRlci1ibG9jay1lbmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7cGFkZGluZy1ibG9jazp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy11bml0LWwpO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtY29tYm9ib3gtaXRlbS1zcGFjaW5nLXVuaXQtcyk7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0taW5kZW50LXZhbHVlKX1cIjtcblxuY29uc3QgQ29tYm9ib3hJdGVtR3JvdXAgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuZ3VpZCA9IGd1aWQoKTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5hbmNlc3RvcnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuYW5jZXN0b3JzID0gZ2V0QW5jZXN0b3JzKHRoaXMuZWwpO1xuICAgIHRoaXMuc2NhbGUgPSBnZXRFbGVtZW50UHJvcCh0aGlzLmVsLCBcInNjYWxlXCIsIHRoaXMuc2NhbGUpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgc2NhbGUgfSA9IHRoaXM7XG4gICAgY29uc3QgZGVwdGggPSBnZXREZXB0aChlbCk7XG4gICAgcmV0dXJuIChoKFwidWxcIiwgeyBcImFyaWEtbGFiZWxsZWRieVwiOiB0aGlzLmd1aWQsIGNsYXNzOiB7IFtDU1MubGlzdF06IHRydWUsIFtgc2NhbGUtLSR7c2NhbGV9YF06IHRydWUgfSwgcm9sZTogXCJncm91cFwiIH0sIGgoXCJsaVwiLCB7IGNsYXNzOiB7IFtDU1MubGFiZWxdOiB0cnVlIH0sIGlkOiB0aGlzLmd1aWQsIHJvbGU6IFwicHJlc2VudGF0aW9uXCIsIHN0eWxlOiB7IFwiLS1jYWxjaXRlLWNvbWJvYm94LWl0ZW0tc3BhY2luZy1pbmRlbnQtbXVsdGlwbGllclwiOiBgJHtkZXB0aH1gIH0gfSwgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLnRpdGxlIH0sIHRoaXMubGFiZWwpKSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuQ29tYm9ib3hJdGVtR3JvdXAuc3R5bGUgPSBjb21ib2JveEl0ZW1Hcm91cENzcztcblxuZXhwb3J0IHsgQ29tYm9ib3ggYXMgY2FsY2l0ZV9jb21ib2JveCwgQ29tYm9ib3hJdGVtIGFzIGNhbGNpdGVfY29tYm9ib3hfaXRlbSwgQ29tYm9ib3hJdGVtR3JvdXAgYXMgY2FsY2l0ZV9jb21ib2JveF9pdGVtX2dyb3VwIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgZiBhcyBmb3JjZVVwZGF0ZSB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzJztcblxuY29uc3Qgb2JzZXJ2ZWQgPSBuZXcgU2V0KCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudC5lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBvYnNlcnZlZC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50XSBvZiBvYnNlcnZlZC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBmb3JjZVVwZGF0ZSh0YXJnZXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==