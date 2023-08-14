"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-stepper_2_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-stepper_2.entry.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-stepper_2.entry.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_stepper": () => (/* binding */ Stepper),
/* harmony export */   "calcite_stepper_item": () => (/* binding */ StepperItem)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive-82e547ed.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */










const stepperCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:relative;display:flex;inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content;flex-direction:row;flex-wrap:wrap;align-items:stretch;justify-content:space-between}:host([layout=vertical]){flex:1 1 auto;flex-direction:column}:host([layout=horizontal]){display:grid;grid-template-areas:\"items\" \"content\"}";

const Stepper = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteStepperItemChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteStepperItemChange", 6);
    this.calciteInternalStepperItemChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalStepperItemChange", 6);
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    this.itemMap = new Map();
    /** list of sorted Stepper items */
    this.items = [];
    /** list of enabled Stepper items */
    this.enabledItems = [];
    this.icon = false;
    this.layout = "horizontal";
    this.numbered = false;
    this.numberingSystem = undefined;
    this.selectedItem = null;
    this.scale = "m";
  }
  numberingSystemChange() {
    this.setStepperItemNumberingSystem();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidLoad() {
    // if no stepper items are set as active, default to the first one
    if (typeof this.currentPosition !== "number") {
      this.calciteInternalStepperItemChange.emit({
        position: 0
      });
    }
  }
  render() {
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: (event) => {
        const items = event.currentTarget
          .assignedElements()
          .filter((el) => el?.tagName === "CALCITE-STEPPER-ITEM");
        const spacing = Array(items.length).fill("1fr").join(" ");
        this.el.style.gridTemplateAreas = spacing;
        this.el.style.gridTemplateColumns = spacing;
        this.setStepperItemNumberingSystem();
      } }));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  calciteInternalStepperItemKeyEvent(event) {
    const item = event.detail.item;
    const itemToFocus = event.target;
    switch (item.key) {
      case "ArrowDown":
      case "ArrowRight":
        (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.enabledItems, itemToFocus, "next");
        break;
      case "ArrowUp":
      case "ArrowLeft":
        (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.enabledItems, itemToFocus, "previous");
        break;
      case "Home":
        (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.enabledItems, itemToFocus, "first");
        break;
      case "End":
        (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.j)(this.enabledItems, itemToFocus, "last");
        break;
    }
    event.stopPropagation();
  }
  registerItem(event) {
    const item = event.target;
    const { content, position } = event.detail;
    this.itemMap.set(item, { position, content });
    this.items = this.sortItems();
    this.enabledItems = this.filterItems();
    event.stopPropagation();
  }
  updateItem(event) {
    const { position } = event.detail;
    if (typeof position === "number") {
      this.currentPosition = position;
      this.selectedItem = event.target;
    }
    this.calciteInternalStepperItemChange.emit({
      position
    });
  }
  handleUserRequestedStepperItemSelect() {
    this.calciteStepperItemChange.emit();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Set the next `calcite-stepper-item` as active. */
  async nextStep() {
    const enabledStepIndex = this.getEnabledStepIndex(this.currentPosition + 1, "next");
    if (typeof enabledStepIndex !== "number") {
      return;
    }
    this.updateStep(enabledStepIndex);
  }
  /** Set the previous `calcite-stepper-item` as active. */
  async prevStep() {
    const enabledStepIndex = this.getEnabledStepIndex(this.currentPosition - 1, "previous");
    if (typeof enabledStepIndex !== "number") {
      return;
    }
    this.updateStep(enabledStepIndex);
  }
  /**
   * Set a specified `calcite-stepper-item` as active.
   *
   * @param step
   */
  async goToStep(step) {
    const position = step - 1;
    if (this.currentPosition !== position) {
      this.updateStep(position);
    }
  }
  /** Set the first `calcite-stepper-item` as active. */
  async startStep() {
    const enabledStepIndex = this.getEnabledStepIndex(0, "next");
    if (typeof enabledStepIndex !== "number") {
      return;
    }
    this.updateStep(enabledStepIndex);
  }
  /** Set the last `calcite-stepper-item` as active. */
  async endStep() {
    const enabledStepIndex = this.getEnabledStepIndex(this.items.length - 1, "previous");
    if (typeof enabledStepIndex !== "number") {
      return;
    }
    this.updateStep(enabledStepIndex);
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  getEnabledStepIndex(startIndex, direction = "next") {
    const { items, currentPosition } = this;
    let newIndex = startIndex;
    while (items[newIndex]?.disabled) {
      newIndex = newIndex + (direction === "previous" ? -1 : 1);
    }
    return newIndex !== currentPosition && newIndex < items.length && newIndex >= 0
      ? newIndex
      : null;
  }
  updateStep(position) {
    this.currentPosition = position;
    this.calciteInternalStepperItemChange.emit({
      position
    });
  }
  sortItems() {
    const { itemMap } = this;
    return Array.from(itemMap.keys()).sort((a, b) => itemMap.get(a).position - itemMap.get(b).position);
  }
  filterItems() {
    return this.items.filter((item) => !item.disabled);
  }
  setStepperItemNumberingSystem() {
    this.items.forEach((item) => {
      item.numberingSystem = this.numberingSystem;
    });
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "numberingSystem": ["numberingSystemChange"]
  }; }
};
Stepper.style = stepperCss;

const stepperItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([layout=horizontal][disabled]) .stepper-item-header,:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([layout=horizontal][disabled]) .stepper-item-header *,:host([disabled]) *,:host([layout=horizontal][disabled]) .stepper-item-header ::slotted(*),:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){--calcite-stepper-item-spacing-unit-s:0.25rem;--calcite-stepper-item-spacing-unit-m:0.75rem;--calcite-stepper-item-spacing-unit-l:1rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-inline-end:0.25rem}:host([scale=s]) .stepper-item-description{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-stepper-item-spacing-unit-s:0.5rem;--calcite-stepper-item-spacing-unit-m:1rem;--calcite-stepper-item-spacing-unit-l:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-inline-end:0.5rem}:host([scale=m]) .stepper-item-description{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-stepper-item-spacing-unit-s:0.75rem;--calcite-stepper-item-spacing-unit-m:1.25rem;--calcite-stepper-item-spacing-unit-l:1.5rem;font-size:var(--calcite-font-size-1);line-height:1.5rem;margin-inline-end:0.75rem}:host([scale=l]) .stepper-item-description{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:flex;flex-grow:1;flex-direction:column;align-self:flex-start;margin-block-end:var(--calcite-stepper-item-spacing-unit-s)}:host .container{position:relative;display:flex;flex-grow:1;cursor:pointer;flex-direction:column;border-width:0px;border-block-start-width:2px;border-style:solid;border-color:var(--calcite-ui-border-3);color:var(--calcite-ui-text-3);text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host{outline-color:transparent}:host(:focus){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host .stepper-item-header{display:flex;cursor:pointer;align-items:flex-start}:host .stepper-item-content,:host .stepper-item-header{transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);padding-block:var(--calcite-stepper-item-spacing-unit-l);padding-inline-end:var(--calcite-stepper-item-spacing-unit-m);text-align:start}:host .stepper-item-header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .stepper-item-content{display:none;inline-size:100%;flex-direction:column;font-size:var(--calcite-font-size--2);line-height:1.375}:host .stepper-item-icon{margin-inline-end:var(--calcite-stepper-item-spacing-unit-m);margin-block-start:1px;display:inline-flex;block-size:0.75rem;flex-shrink:0;align-self:flex-start;color:var(--calcite-ui-text-3);opacity:var(--calcite-ui-opacity-disabled);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .stepper-item-header-text{flex-direction:column;text-align:initial;margin-inline-end:auto}:host .stepper-item-heading,:host .stepper-item-description{display:flex;inline-size:100%}:host .stepper-item-heading{margin-block-end:0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .stepper-item-description{color:var(--calcite-ui-text-3)}:host .stepper-item-number{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-stepper-item-spacing-unit-m)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([complete]) .container .stepper-item-icon{color:var(--calcite-ui-brand)}:host([error]) .container{border-block-start-color:var(--calcite-ui-danger)}:host([error]) .container .stepper-item-number{color:var(--calcite-ui-danger)}:host([error]) .container .stepper-item-icon{opacity:1;color:var(--calcite-ui-danger)}:host(:hover:not([disabled]):not([selected])) .container,:host(:focus:not([disabled]):not([selected])) .container{border-block-start-color:var(--calcite-ui-brand)}:host(:hover:not([disabled]):not([selected])) .container .stepper-item-heading,:host(:focus:not([disabled]):not([selected])) .container .stepper-item-heading{color:var(--calcite-ui-text-1)}:host(:hover:not([disabled]):not([selected])) .container .stepper-item-description,:host(:focus:not([disabled]):not([selected])) .container .stepper-item-description{color:var(--calcite-ui-text-2)}:host([error]:hover:not([disabled]):not([selected])) .container,:host([error]:focus:not([disabled]):not([selected])) .container{border-block-start-color:var(--calcite-ui-danger-hover)}:host([selected]) .container{border-block-start-color:var(--calcite-ui-brand)}:host([selected]) .container .stepper-item-heading{color:var(--calcite-ui-text-1)}:host([selected]) .container .stepper-item-description{color:var(--calcite-ui-text-2)}:host([selected]) .container .stepper-item-number{color:var(--calcite-ui-brand)}:host([selected]) .container .stepper-item-icon{color:var(--calcite-ui-brand);opacity:1}:host([selected]) .container .stepper-item-content{display:flex}:host([layout=vertical]) .container{margin-inline:0px;margin-block-start:0px;flex:1 1 auto;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px;border-inline-start-width:2px;padding-inline-start:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]) .container .stepper-item-icon{order:3;margin-block:1px 0px;padding-inline-start:var(--calcite-stepper-item-spacing-unit-s);margin-inline-start:auto}:host([layout=vertical]) .container .stepper-item-header{padding-inline-end:0px}:host([layout=vertical]) .container .stepper-item-content{padding:0px}:host([layout=vertical][complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][complete]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical][complete]:focus:not([disabled]):not([selected])) .container{border-color:var(--calcite-ui-brand)}:host([layout=vertical][error]) .container{border-color:var(--calcite-ui-danger)}:host([layout=vertical][selected]) .container{border-color:var(--calcite-ui-brand)}:host([layout=vertical][selected]) .container .stepper-item-content:not(:empty){margin-block-end:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical]:focus:not([disabled]):not([selected])) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][error]:hover:not([disabled]):not([selected])) .container,:host([layout=vertical][error]:focus:not([disabled]):not([selected])) .container{border-color:var(--calcite-ui-danger-hover)}:host([layout=horizontal]){display:contents}:host([layout=horizontal]) .container{display:contents}:host([layout=horizontal]) .stepper-item-header{border-width:0px;border-block-start-width:2px;border-style:solid;border-color:var(--calcite-ui-border-3);outline-color:transparent;grid-row:items;margin-inline-end:0.5rem;margin-block-end:var(--calcite-stepper-item-spacing-unit-s)}:host([layout=horizontal]) .stepper-item-header:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([layout=horizontal]) .stepper-item-content{cursor:auto;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);padding-block:0;padding-inline-end:var(--calcite-stepper-item-spacing-unit-m);text-align:start}:host([layout=horizontal][selected]) .stepper-item-content{grid-area:2/1/2/-1}:host([layout=horizontal][scale=s]) .stepper-item-header{margin-inline-end:0.25rem;margin-block-end:var(--calcite-stepper-item-spacing-unit-s)}:host([layout=horizontal][scale=l]) .stepper-item-header{margin-inline-end:0.75rem;margin-block-end:var(--calcite-stepper-item-spacing-unit-s)}:host([layout=horizontal][complete]) .stepper-item-header{border-color:rgba(0, 122, 194, 0.5)}:host([layout=horizontal][complete]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal][complete]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:var(--calcite-ui-brand)}:host([layout=horizontal][error]) .stepper-item-header{border-color:var(--calcite-ui-danger)}:host([layout=horizontal][selected]) .stepper-item-header{border-color:var(--calcite-ui-brand)}:host([layout=horizontal]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:rgba(0, 122, 194, 0.5)}:host([layout=horizontal][error]:hover:not([disabled]):not([selected])) .stepper-item-header,:host([layout=horizontal][error]:focus:not([disabled]):not([selected])) .stepper-item-header{border-color:var(--calcite-ui-danger-hover)}@media (forced-colors: active){:host .container{outline-width:0;outline-offset:0}:host(:focus),:host(:focus-visible){outline-color:canvasText}:host([selected]) .container{border-block-start-color:highlight}:host([selected]) .container .stepper-item-number{color:highlight}:host([selected]) .container .stepper-item-icon{color:highlight}:host([layout=vertical][selected]) .container{border-color:highlight}}";

const StepperItem = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalStepperItemKeyEvent = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalStepperItemKeyEvent", 6);
    this.calciteInternalStepperItemSelect = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalStepperItemSelect", 6);
    this.calciteInternalUserRequestedStepperItemSelect = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalUserRequestedStepperItemSelect", 6);
    this.calciteInternalStepperItemRegister = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalStepperItemRegister", 6);
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.keyDownHandler = (event) => {
      if (!this.disabled && event.target === this.el) {
        switch (event.key) {
          case " ":
          case "Enter":
            this.emitUserRequestedItem();
            event.preventDefault();
            break;
          case "ArrowUp":
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "Home":
          case "End":
            this.calciteInternalStepperItemKeyEvent.emit({ item: event });
            event.preventDefault();
            break;
        }
      }
    };
    this.handleItemClick = (event) => {
      if (this.disabled ||
        (this.layout === "horizontal" &&
          event
            .composedPath()
            .some((el) => el.classList?.contains("stepper-item-content")))) {
        return;
      }
      this.emitUserRequestedItem();
    };
    this.emitUserRequestedItem = () => {
      this.emitRequestedItem();
      if (!this.disabled) {
        const position = this.itemPosition;
        this.calciteInternalUserRequestedStepperItemSelect.emit({
          position
        });
      }
    };
    this.emitRequestedItem = () => {
      if (!this.disabled) {
        const position = this.itemPosition;
        this.calciteInternalStepperItemSelect.emit({
          position
        });
      }
    };
    this.selected = false;
    this.complete = false;
    this.error = false;
    this.disabled = false;
    this.heading = undefined;
    this.description = undefined;
    this.layout = "horizontal";
    this.icon = false;
    this.iconFlipRtl = false;
    this.numbered = false;
    this.scale = "m";
    this.numberingSystem = undefined;
    this.effectiveLocale = "";
  }
  selectedHandler() {
    if (this.selected) {
      this.emitRequestedItem();
    }
  }
  // watch for removal of disabled to register step
  disabledWatcher() {
    this.registerStepperItem();
  }
  effectiveLocaleWatcher(locale) {
    _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
      locale,
      numberingSystem: this.numberingSystem,
      useGrouping: false
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
    this.icon = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.el, "icon", false);
    this.numbered = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.el, "numbered", false);
    this.layout = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.el, "layout", false);
    this.scale = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.v)(this.el, "scale", "m");
    this.parentStepperEl = this.el.parentElement;
    this.itemPosition = this.getItemPosition();
    this.registerStepperItem();
    if (this.selected) {
      this.emitRequestedItem();
    }
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
  }
  componentDidRender() {
    (0,_interactive_82e547ed_js__WEBPACK_IMPORTED_MODULE_2__.u)(this, true);
  }
  disconnectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  render() {
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-expanded": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.selected), onClick: this.handleItemClick, onKeyDown: this.keyDownHandler }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "container" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "stepper-item-header", tabIndex: 
      /* additional tab index logic needed because of display: contents */
      this.layout === "horizontal" && !this.disabled ? 0 : null,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.headerEl = el) }, this.icon ? this.renderIcon() : null, this.numbered ? (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "stepper-item-number" }, this.renderNumbers(), ".") : null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "stepper-item-header-text" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "stepper-item-heading" }, this.heading), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "stepper-item-description" }, this.description))), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "stepper-item-content" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  updateActiveItemOnChange(event) {
    if (event.target === this.parentStepperEl ||
      event.composedPath().includes(this.parentStepperEl)) {
      this.selectedPosition = event.detail.position;
      this.determineSelectedItem();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (this.layout === "vertical" ? this.el : this.headerEl)?.focus();
  }
  renderIcon() {
    const path = this.selected
      ? "circleF"
      : this.error
        ? "exclamationMarkCircleF"
        : this.complete
          ? "checkCircleF"
          : "circle";
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: "stepper-item-icon", flipRtl: this.iconFlipRtl, icon: path, scale: "s" }));
  }
  determineSelectedItem() {
    this.selected = !this.disabled && this.itemPosition === this.selectedPosition;
  }
  registerStepperItem() {
    this.calciteInternalStepperItemRegister.emit({
      position: this.itemPosition
    });
  }
  getItemPosition() {
    return Array.from(this.parentStepperEl?.querySelectorAll("calcite-stepper-item")).indexOf(this.el);
  }
  renderNumbers() {
    _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      useGrouping: false
    };
    return _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatter.format(this.itemPosition + 1);
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "selected": ["selectedHandler"],
    "disabled": ["disabledWatcher"],
    "effectiveLocale": ["effectiveLocaleWatcher"]
  }; }
};
StepperItem.style = stepperItemCss;




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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOTEwNDFmMDEyYzdmNzRlNzBkNzQ2NTc2NjYzMmMwNmIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ1A7QUFDL0I7QUFDNEM7QUFDQztBQUN4RjtBQUNLO0FBQ047QUFDTTs7QUFFakMsa0NBQWtDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsTUFBTSxrQkFBa0IsYUFBYSxpQkFBaUIsaUNBQWlDLDRCQUE0QixtQkFBbUIsZUFBZSxvQkFBb0IsOEJBQThCLHlCQUF5QixjQUFjLHNCQUFzQiwyQkFBMkIsYUFBYSwwQ0FBMEM7O0FBRTkvRDtBQUNBO0FBQ0EsSUFBSSxxREFBZ0I7QUFDcEIsb0NBQW9DLHFEQUFXO0FBQy9DLDRDQUE0QyxxREFBVztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBOztBQUUyRTs7Ozs7Ozs7Ozs7Ozs7O0FDclkzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25FdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1zdGVwcGVyXzIuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vaW50ZXJhY3RpdmUtODJlNTQ3ZWQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vbG9hZGFibGUtYWYxNDZmZDUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgYSBhcyBnZXRFbGVtZW50LCBIIGFzIEhvc3QgfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcbmltcG9ydCB7IGogYXMgZm9jdXNFbGVtZW50SW5Hcm91cCwgdiBhcyBnZXRFbGVtZW50UHJvcCwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20tZjc0YTA5YjcuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTgyZTU0N2VkLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLCBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWIzYzQ0ZGRhLmpzJztcbmltcG9ydCB7IHMgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYSBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS1hZjE0NmZkNS5qcyc7XG5pbXBvcnQgJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLWQwOGE2NzM3LmpzJztcbmltcG9ydCAnLi9rZXktMzM4OWQ4NzAuanMnO1xuaW1wb3J0ICcuL29ic2VydmVycy1jMjBlYzJkZC5qcyc7XG5cbmNvbnN0IHN0ZXBwZXJDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJTttaW4taW5saW5lLXNpemU6LW1vei1maXQtY29udGVudDttaW4taW5saW5lLXNpemU6Zml0LWNvbnRlbnQ7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOnN0cmV0Y2g7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Omhvc3QoW2xheW91dD12ZXJ0aWNhbF0pe2ZsZXg6MSAxIGF1dG87ZmxleC1kaXJlY3Rpb246Y29sdW1ufTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF0pe2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWFyZWFzOlxcXCJpdGVtc1xcXCIgXFxcImNvbnRlbnRcXFwifVwiO1xuXG5jb25zdCBTdGVwcGVyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVTdGVwcGVySXRlbUNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVN0ZXBwZXJJdGVtQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsU3RlcHBlckl0ZW1DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFN0ZXBwZXJJdGVtQ2hhbmdlXCIsIDYpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIFN0YXRlL1Byb3BzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5pdGVtTWFwID0gbmV3IE1hcCgpO1xuICAgIC8qKiBsaXN0IG9mIHNvcnRlZCBTdGVwcGVyIGl0ZW1zICovXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIC8qKiBsaXN0IG9mIGVuYWJsZWQgU3RlcHBlciBpdGVtcyAqL1xuICAgIHRoaXMuZW5hYmxlZEl0ZW1zID0gW107XG4gICAgdGhpcy5pY29uID0gZmFsc2U7XG4gICAgdGhpcy5sYXlvdXQgPSBcImhvcml6b250YWxcIjtcbiAgICB0aGlzLm51bWJlcmVkID0gZmFsc2U7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgfVxuICBudW1iZXJpbmdTeXN0ZW1DaGFuZ2UoKSB7XG4gICAgdGhpcy5zZXRTdGVwcGVySXRlbU51bWJlcmluZ1N5c3RlbSgpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgLy8gaWYgbm8gc3RlcHBlciBpdGVtcyBhcmUgc2V0IGFzIGFjdGl2ZSwgZGVmYXVsdCB0byB0aGUgZmlyc3Qgb25lXG4gICAgaWYgKHR5cGVvZiB0aGlzLmN1cnJlbnRQb3NpdGlvbiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxTdGVwcGVySXRlbUNoYW5nZS5lbWl0KHtcbiAgICAgICAgcG9zaXRpb246IDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKFwic2xvdFwiLCB7IG9uU2xvdGNoYW5nZTogKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZXZlbnQuY3VycmVudFRhcmdldFxuICAgICAgICAgIC5hc3NpZ25lZEVsZW1lbnRzKClcbiAgICAgICAgICAuZmlsdGVyKChlbCkgPT4gZWw/LnRhZ05hbWUgPT09IFwiQ0FMQ0lURS1TVEVQUEVSLUlURU1cIik7XG4gICAgICAgIGNvbnN0IHNwYWNpbmcgPSBBcnJheShpdGVtcy5sZW5ndGgpLmZpbGwoXCIxZnJcIikuam9pbihcIiBcIik7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuZ3JpZFRlbXBsYXRlQXJlYXMgPSBzcGFjaW5nO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBzcGFjaW5nO1xuICAgICAgICB0aGlzLnNldFN0ZXBwZXJJdGVtTnVtYmVyaW5nU3lzdGVtKCk7XG4gICAgICB9IH0pKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjYWxjaXRlSW50ZXJuYWxTdGVwcGVySXRlbUtleUV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgaXRlbSA9IGV2ZW50LmRldGFpbC5pdGVtO1xuICAgIGNvbnN0IGl0ZW1Ub0ZvY3VzID0gZXZlbnQudGFyZ2V0O1xuICAgIHN3aXRjaCAoaXRlbS5rZXkpIHtcbiAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgIGZvY3VzRWxlbWVudEluR3JvdXAodGhpcy5lbmFibGVkSXRlbXMsIGl0ZW1Ub0ZvY3VzLCBcIm5leHRcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgZm9jdXNFbGVtZW50SW5Hcm91cCh0aGlzLmVuYWJsZWRJdGVtcywgaXRlbVRvRm9jdXMsIFwicHJldmlvdXNcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkhvbWVcIjpcbiAgICAgICAgZm9jdXNFbGVtZW50SW5Hcm91cCh0aGlzLmVuYWJsZWRJdGVtcywgaXRlbVRvRm9jdXMsIFwiZmlyc3RcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkVuZFwiOlxuICAgICAgICBmb2N1c0VsZW1lbnRJbkdyb3VwKHRoaXMuZW5hYmxlZEl0ZW1zLCBpdGVtVG9Gb2N1cywgXCJsYXN0XCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgcmVnaXN0ZXJJdGVtKGV2ZW50KSB7XG4gICAgY29uc3QgaXRlbSA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB7IGNvbnRlbnQsIHBvc2l0aW9uIH0gPSBldmVudC5kZXRhaWw7XG4gICAgdGhpcy5pdGVtTWFwLnNldChpdGVtLCB7IHBvc2l0aW9uLCBjb250ZW50IH0pO1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLnNvcnRJdGVtcygpO1xuICAgIHRoaXMuZW5hYmxlZEl0ZW1zID0gdGhpcy5maWx0ZXJJdGVtcygpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIHVwZGF0ZUl0ZW0oZXZlbnQpIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uIH0gPSBldmVudC5kZXRhaWw7XG4gICAgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gZXZlbnQudGFyZ2V0O1xuICAgIH1cbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFN0ZXBwZXJJdGVtQ2hhbmdlLmVtaXQoe1xuICAgICAgcG9zaXRpb25cbiAgICB9KTtcbiAgfVxuICBoYW5kbGVVc2VyUmVxdWVzdGVkU3RlcHBlckl0ZW1TZWxlY3QoKSB7XG4gICAgdGhpcy5jYWxjaXRlU3RlcHBlckl0ZW1DaGFuZ2UuZW1pdCgpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldCB0aGUgbmV4dCBgY2FsY2l0ZS1zdGVwcGVyLWl0ZW1gIGFzIGFjdGl2ZS4gKi9cbiAgYXN5bmMgbmV4dFN0ZXAoKSB7XG4gICAgY29uc3QgZW5hYmxlZFN0ZXBJbmRleCA9IHRoaXMuZ2V0RW5hYmxlZFN0ZXBJbmRleCh0aGlzLmN1cnJlbnRQb3NpdGlvbiArIDEsIFwibmV4dFwiKTtcbiAgICBpZiAodHlwZW9mIGVuYWJsZWRTdGVwSW5kZXggIT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTdGVwKGVuYWJsZWRTdGVwSW5kZXgpO1xuICB9XG4gIC8qKiBTZXQgdGhlIHByZXZpb3VzIGBjYWxjaXRlLXN0ZXBwZXItaXRlbWAgYXMgYWN0aXZlLiAqL1xuICBhc3luYyBwcmV2U3RlcCgpIHtcbiAgICBjb25zdCBlbmFibGVkU3RlcEluZGV4ID0gdGhpcy5nZXRFbmFibGVkU3RlcEluZGV4KHRoaXMuY3VycmVudFBvc2l0aW9uIC0gMSwgXCJwcmV2aW91c1wiKTtcbiAgICBpZiAodHlwZW9mIGVuYWJsZWRTdGVwSW5kZXggIT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTdGVwKGVuYWJsZWRTdGVwSW5kZXgpO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgYSBzcGVjaWZpZWQgYGNhbGNpdGUtc3RlcHBlci1pdGVtYCBhcyBhY3RpdmUuXG4gICAqXG4gICAqIEBwYXJhbSBzdGVwXG4gICAqL1xuICBhc3luYyBnb1RvU3RlcChzdGVwKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBzdGVwIC0gMTtcbiAgICBpZiAodGhpcy5jdXJyZW50UG9zaXRpb24gIT09IHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0ZXAocG9zaXRpb24pO1xuICAgIH1cbiAgfVxuICAvKiogU2V0IHRoZSBmaXJzdCBgY2FsY2l0ZS1zdGVwcGVyLWl0ZW1gIGFzIGFjdGl2ZS4gKi9cbiAgYXN5bmMgc3RhcnRTdGVwKCkge1xuICAgIGNvbnN0IGVuYWJsZWRTdGVwSW5kZXggPSB0aGlzLmdldEVuYWJsZWRTdGVwSW5kZXgoMCwgXCJuZXh0XCIpO1xuICAgIGlmICh0eXBlb2YgZW5hYmxlZFN0ZXBJbmRleCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVN0ZXAoZW5hYmxlZFN0ZXBJbmRleCk7XG4gIH1cbiAgLyoqIFNldCB0aGUgbGFzdCBgY2FsY2l0ZS1zdGVwcGVyLWl0ZW1gIGFzIGFjdGl2ZS4gKi9cbiAgYXN5bmMgZW5kU3RlcCgpIHtcbiAgICBjb25zdCBlbmFibGVkU3RlcEluZGV4ID0gdGhpcy5nZXRFbmFibGVkU3RlcEluZGV4KHRoaXMuaXRlbXMubGVuZ3RoIC0gMSwgXCJwcmV2aW91c1wiKTtcbiAgICBpZiAodHlwZW9mIGVuYWJsZWRTdGVwSW5kZXggIT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVTdGVwKGVuYWJsZWRTdGVwSW5kZXgpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldEVuYWJsZWRTdGVwSW5kZXgoc3RhcnRJbmRleCwgZGlyZWN0aW9uID0gXCJuZXh0XCIpIHtcbiAgICBjb25zdCB7IGl0ZW1zLCBjdXJyZW50UG9zaXRpb24gfSA9IHRoaXM7XG4gICAgbGV0IG5ld0luZGV4ID0gc3RhcnRJbmRleDtcbiAgICB3aGlsZSAoaXRlbXNbbmV3SW5kZXhdPy5kaXNhYmxlZCkge1xuICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCArIChkaXJlY3Rpb24gPT09IFwicHJldmlvdXNcIiA/IC0xIDogMSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdJbmRleCAhPT0gY3VycmVudFBvc2l0aW9uICYmIG5ld0luZGV4IDwgaXRlbXMubGVuZ3RoICYmIG5ld0luZGV4ID49IDBcbiAgICAgID8gbmV3SW5kZXhcbiAgICAgIDogbnVsbDtcbiAgfVxuICB1cGRhdGVTdGVwKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFN0ZXBwZXJJdGVtQ2hhbmdlLmVtaXQoe1xuICAgICAgcG9zaXRpb25cbiAgICB9KTtcbiAgfVxuICBzb3J0SXRlbXMoKSB7XG4gICAgY29uc3QgeyBpdGVtTWFwIH0gPSB0aGlzO1xuICAgIHJldHVybiBBcnJheS5mcm9tKGl0ZW1NYXAua2V5cygpKS5zb3J0KChhLCBiKSA9PiBpdGVtTWFwLmdldChhKS5wb3NpdGlvbiAtIGl0ZW1NYXAuZ2V0KGIpLnBvc2l0aW9uKTtcbiAgfVxuICBmaWx0ZXJJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLmRpc2FibGVkKTtcbiAgfVxuICBzZXRTdGVwcGVySXRlbU51bWJlcmluZ1N5c3RlbSgpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0ubnVtYmVyaW5nU3lzdGVtID0gdGhpcy5udW1iZXJpbmdTeXN0ZW07XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwibnVtYmVyaW5nU3lzdGVtXCI6IFtcIm51bWJlcmluZ1N5c3RlbUNoYW5nZVwiXVxuICB9OyB9XG59O1xuU3RlcHBlci5zdHlsZSA9IHN0ZXBwZXJDc3M7XG5cbmNvbnN0IHN0ZXBwZXJJdGVtQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtkaXNhYmxlZF0pIC5zdGVwcGVyLWl0ZW0taGVhZGVyLDpob3N0KFtkaXNhYmxlZF0pe2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO29wYWNpdHk6dmFyKC0tY2FsY2l0ZS11aS1vcGFjaXR5LWRpc2FibGVkKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdW2Rpc2FibGVkXSkgLnN0ZXBwZXItaXRlbS1oZWFkZXIgKiw6aG9zdChbZGlzYWJsZWRdKSAqLDpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bZGlzYWJsZWRdKSAuc3RlcHBlci1pdGVtLWhlYWRlciA6OnNsb3R0ZWQoKiksOmhvc3QoW2Rpc2FibGVkXSkgOjpzbG90dGVkKCope3BvaW50ZXItZXZlbnRzOm5vbmV9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtc3RlcHBlci1pdGVtLXNwYWNpbmctdW5pdC1zOjAuMjVyZW07LS1jYWxjaXRlLXN0ZXBwZXItaXRlbS1zcGFjaW5nLXVuaXQtbTowLjc1cmVtOy0tY2FsY2l0ZS1zdGVwcGVyLWl0ZW0tc3BhY2luZy11bml0LWw6MXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW07bWFyZ2luLWlubGluZS1lbmQ6MC4yNXJlbX06aG9zdChbc2NhbGU9c10pIC5zdGVwcGVyLWl0ZW0tZGVzY3JpcHRpb257Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLXN0ZXBwZXItaXRlbS1zcGFjaW5nLXVuaXQtczowLjVyZW07LS1jYWxjaXRlLXN0ZXBwZXItaXRlbS1zcGFjaW5nLXVuaXQtbToxcmVtOy0tY2FsY2l0ZS1zdGVwcGVyLWl0ZW0tc3BhY2luZy11bml0LWw6MS4yNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbTttYXJnaW4taW5saW5lLWVuZDowLjVyZW19Omhvc3QoW3NjYWxlPW1dKSAuc3RlcHBlci1pdGVtLWRlc2NyaXB0aW9ue2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1zdGVwcGVyLWl0ZW0tc3BhY2luZy11bml0LXM6MC43NXJlbTstLWNhbGNpdGUtc3RlcHBlci1pdGVtLXNwYWNpbmctdW5pdC1tOjEuMjVyZW07LS1jYWxjaXRlLXN0ZXBwZXItaXRlbS1zcGFjaW5nLXVuaXQtbDoxLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTEpO2xpbmUtaGVpZ2h0OjEuNXJlbTttYXJnaW4taW5saW5lLWVuZDowLjc1cmVtfTpob3N0KFtzY2FsZT1sXSkgLnN0ZXBwZXItaXRlbS1kZXNjcmlwdGlvbntmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4yNXJlbX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleC1ncm93OjE7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLXNlbGY6ZmxleC1zdGFydDttYXJnaW4tYmxvY2stZW5kOnZhcigtLWNhbGNpdGUtc3RlcHBlci1pdGVtLXNwYWNpbmctdW5pdC1zKX06aG9zdCAuY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4LWdyb3c6MTtjdXJzb3I6cG9pbnRlcjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Ym9yZGVyLXdpZHRoOjBweDtib3JkZXItYmxvY2stc3RhcnQtd2lkdGg6MnB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKX06aG9zdHtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0KDpmb2N1cyl7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9Omhvc3QgLnN0ZXBwZXItaXRlbS1oZWFkZXJ7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9Omhvc3QgLnN0ZXBwZXItaXRlbS1jb250ZW50LDpob3N0IC5zdGVwcGVyLWl0ZW0taGVhZGVye3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtwYWRkaW5nLWJsb2NrOnZhcigtLWNhbGNpdGUtc3RlcHBlci1pdGVtLXNwYWNpbmctdW5pdC1sKTtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tY2FsY2l0ZS1zdGVwcGVyLWl0ZW0tc3BhY2luZy11bml0LW0pO3RleHQtYWxpZ246c3RhcnR9Omhvc3QgLnN0ZXBwZXItaXRlbS1oZWFkZXIgKntkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSl9Omhvc3QgLnN0ZXBwZXItaXRlbS1jb250ZW50e2Rpc3BsYXk6bm9uZTtpbmxpbmUtc2l6ZToxMDAlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0IC5zdGVwcGVyLWl0ZW0taWNvbnttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1jYWxjaXRlLXN0ZXBwZXItaXRlbS1zcGFjaW5nLXVuaXQtbSk7bWFyZ2luLWJsb2NrLXN0YXJ0OjFweDtkaXNwbGF5OmlubGluZS1mbGV4O2Jsb2NrLXNpemU6MC43NXJlbTtmbGV4LXNocmluazowO2FsaWduLXNlbGY6ZmxleC1zdGFydDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7b3BhY2l0eTp2YXIoLS1jYWxjaXRlLXVpLW9wYWNpdHktZGlzYWJsZWQpO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKX06aG9zdCAuc3RlcHBlci1pdGVtLWhlYWRlci10ZXh0e2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjt0ZXh0LWFsaWduOmluaXRpYWw7bWFyZ2luLWlubGluZS1lbmQ6YXV0b306aG9zdCAuc3RlcHBlci1pdGVtLWhlYWRpbmcsOmhvc3QgLnN0ZXBwZXItaXRlbS1kZXNjcmlwdGlvbntkaXNwbGF5OmZsZXg7aW5saW5lLXNpemU6MTAwJX06aG9zdCAuc3RlcHBlci1pdGVtLWhlYWRpbmd7bWFyZ2luLWJsb2NrLWVuZDowLjI1cmVtO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9Omhvc3QgLnN0ZXBwZXItaXRlbS1kZXNjcmlwdGlvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyl9Omhvc3QgLnN0ZXBwZXItaXRlbS1udW1iZXJ7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7bWFyZ2luLWlubGluZS1lbmQ6dmFyKC0tY2FsY2l0ZS1zdGVwcGVyLWl0ZW0tc3BhY2luZy11bml0LW0pfTpob3N0KFtkaXNhYmxlZF0pIDo6c2xvdHRlZChbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRdKSw6aG9zdChbZGlzYWJsZWRdKSBbY2FsY2l0ZS1oeWRyYXRlZF1bZGlzYWJsZWRde29wYWNpdHk6MX06aG9zdChbY29tcGxldGVdKSAuY29udGFpbmVye2JvcmRlci1jb2xvcjpyZ2JhKDAsIDEyMiwgMTk0LCAwLjUpfTpob3N0KFtjb21wbGV0ZV0pIC5jb250YWluZXIgLnN0ZXBwZXItaXRlbS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtlcnJvcl0pIC5jb250YWluZXJ7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKX06aG9zdChbZXJyb3JdKSAuY29udGFpbmVyIC5zdGVwcGVyLWl0ZW0tbnVtYmVye2NvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyKX06aG9zdChbZXJyb3JdKSAuY29udGFpbmVyIC5zdGVwcGVyLWl0ZW0taWNvbntvcGFjaXR5OjE7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KDpob3Zlcjpub3QoW2Rpc2FibGVkXSk6bm90KFtzZWxlY3RlZF0pKSAuY29udGFpbmVyLDpob3N0KDpmb2N1czpub3QoW2Rpc2FibGVkXSk6bm90KFtzZWxlY3RlZF0pKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1zdGFydC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdCg6aG92ZXI6bm90KFtkaXNhYmxlZF0pOm5vdChbc2VsZWN0ZWRdKSkgLmNvbnRhaW5lciAuc3RlcHBlci1pdGVtLWhlYWRpbmcsOmhvc3QoOmZvY3VzOm5vdChbZGlzYWJsZWRdKTpub3QoW3NlbGVjdGVkXSkpIC5jb250YWluZXIgLnN0ZXBwZXItaXRlbS1oZWFkaW5ne2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCg6aG92ZXI6bm90KFtkaXNhYmxlZF0pOm5vdChbc2VsZWN0ZWRdKSkgLmNvbnRhaW5lciAuc3RlcHBlci1pdGVtLWRlc2NyaXB0aW9uLDpob3N0KDpmb2N1czpub3QoW2Rpc2FibGVkXSk6bm90KFtzZWxlY3RlZF0pKSAuY29udGFpbmVyIC5zdGVwcGVyLWl0ZW0tZGVzY3JpcHRpb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfTpob3N0KFtlcnJvcl06aG92ZXI6bm90KFtkaXNhYmxlZF0pOm5vdChbc2VsZWN0ZWRdKSkgLmNvbnRhaW5lciw6aG9zdChbZXJyb3JdOmZvY3VzOm5vdChbZGlzYWJsZWRdKTpub3QoW3NlbGVjdGVkXSkpIC5jb250YWluZXJ7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyLWhvdmVyKX06aG9zdChbc2VsZWN0ZWRdKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1zdGFydC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbc2VsZWN0ZWRdKSAuY29udGFpbmVyIC5zdGVwcGVyLWl0ZW0taGVhZGluZ3tjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoW3NlbGVjdGVkXSkgLmNvbnRhaW5lciAuc3RlcHBlci1pdGVtLWRlc2NyaXB0aW9ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX06aG9zdChbc2VsZWN0ZWRdKSAuY29udGFpbmVyIC5zdGVwcGVyLWl0ZW0tbnVtYmVye2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtzZWxlY3RlZF0pIC5jb250YWluZXIgLnN0ZXBwZXItaXRlbS1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO29wYWNpdHk6MX06aG9zdChbc2VsZWN0ZWRdKSAuY29udGFpbmVyIC5zdGVwcGVyLWl0ZW0tY29udGVudHtkaXNwbGF5OmZsZXh9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF0pIC5jb250YWluZXJ7bWFyZ2luLWlubGluZTowcHg7bWFyZ2luLWJsb2NrLXN0YXJ0OjBweDtmbGV4OjEgMSBhdXRvO2JvcmRlci1ibG9jay1zdGFydC13aWR0aDowcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtwYWRkaW5nLWJsb2NrOjBweDtib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOjJweDtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLXN0ZXBwZXItaXRlbS1zcGFjaW5nLXVuaXQtbCl9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF0pIC5jb250YWluZXIgLnN0ZXBwZXItaXRlbS1pY29ue29yZGVyOjM7bWFyZ2luLWJsb2NrOjFweCAwcHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6dmFyKC0tY2FsY2l0ZS1zdGVwcGVyLWl0ZW0tc3BhY2luZy11bml0LXMpO21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0b306aG9zdChbbGF5b3V0PXZlcnRpY2FsXSkgLmNvbnRhaW5lciAuc3RlcHBlci1pdGVtLWhlYWRlcntwYWRkaW5nLWlubGluZS1lbmQ6MHB4fTpob3N0KFtsYXlvdXQ9dmVydGljYWxdKSAuY29udGFpbmVyIC5zdGVwcGVyLWl0ZW0tY29udGVudHtwYWRkaW5nOjBweH06aG9zdChbbGF5b3V0PXZlcnRpY2FsXVtjb21wbGV0ZV0pIC5jb250YWluZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwgMTIyLCAxOTQsIDAuNSl9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF1bY29tcGxldGVdOmhvdmVyOm5vdChbZGlzYWJsZWRdKTpub3QoW3NlbGVjdGVkXSkpIC5jb250YWluZXIsOmhvc3QoW2xheW91dD12ZXJ0aWNhbF1bY29tcGxldGVdOmZvY3VzOm5vdChbZGlzYWJsZWRdKTpub3QoW3NlbGVjdGVkXSkpIC5jb250YWluZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW2Vycm9yXSkgLmNvbnRhaW5lcntib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW3NlbGVjdGVkXSkgLmNvbnRhaW5lcntib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF1bc2VsZWN0ZWRdKSAuY29udGFpbmVyIC5zdGVwcGVyLWl0ZW0tY29udGVudDpub3QoOmVtcHR5KXttYXJnaW4tYmxvY2stZW5kOnZhcigtLWNhbGNpdGUtc3RlcHBlci1pdGVtLXNwYWNpbmctdW5pdC1sKX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXTpob3Zlcjpub3QoW2Rpc2FibGVkXSk6bm90KFtzZWxlY3RlZF0pKSAuY29udGFpbmVyLDpob3N0KFtsYXlvdXQ9dmVydGljYWxdOmZvY3VzOm5vdChbZGlzYWJsZWRdKTpub3QoW3NlbGVjdGVkXSkpIC5jb250YWluZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwgMTIyLCAxOTQsIDAuNSl9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF1bZXJyb3JdOmhvdmVyOm5vdChbZGlzYWJsZWRdKTpub3QoW3NlbGVjdGVkXSkpIC5jb250YWluZXIsOmhvc3QoW2xheW91dD12ZXJ0aWNhbF1bZXJyb3JdOmZvY3VzOm5vdChbZGlzYWJsZWRdKTpub3QoW3NlbGVjdGVkXSkpIC5jb250YWluZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyLWhvdmVyKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKXtkaXNwbGF5OmNvbnRlbnRzfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF0pIC5jb250YWluZXJ7ZGlzcGxheTpjb250ZW50c306aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuc3RlcHBlci1pdGVtLWhlYWRlcntib3JkZXItd2lkdGg6MHB4O2JvcmRlci1ibG9jay1zdGFydC13aWR0aDoycHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50O2dyaWQtcm93Oml0ZW1zO21hcmdpbi1pbmxpbmUtZW5kOjAuNXJlbTttYXJnaW4tYmxvY2stZW5kOnZhcigtLWNhbGNpdGUtc3RlcHBlci1pdGVtLXNwYWNpbmctdW5pdC1zKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuc3RlcHBlci1pdGVtLWhlYWRlcjpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuc3RlcHBlci1pdGVtLWNvbnRlbnR7Y3Vyc29yOmF1dG87dHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtczt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3BhZGRpbmctYmxvY2s6MDtwYWRkaW5nLWlubGluZS1lbmQ6dmFyKC0tY2FsY2l0ZS1zdGVwcGVyLWl0ZW0tc3BhY2luZy11bml0LW0pO3RleHQtYWxpZ246c3RhcnR9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtzZWxlY3RlZF0pIC5zdGVwcGVyLWl0ZW0tY29udGVudHtncmlkLWFyZWE6Mi8xLzIvLTF9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtzY2FsZT1zXSkgLnN0ZXBwZXItaXRlbS1oZWFkZXJ7bWFyZ2luLWlubGluZS1lbmQ6MC4yNXJlbTttYXJnaW4tYmxvY2stZW5kOnZhcigtLWNhbGNpdGUtc3RlcHBlci1pdGVtLXNwYWNpbmctdW5pdC1zKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdW3NjYWxlPWxdKSAuc3RlcHBlci1pdGVtLWhlYWRlcnttYXJnaW4taW5saW5lLWVuZDowLjc1cmVtO21hcmdpbi1ibG9jay1lbmQ6dmFyKC0tY2FsY2l0ZS1zdGVwcGVyLWl0ZW0tc3BhY2luZy11bml0LXMpfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bY29tcGxldGVdKSAuc3RlcHBlci1pdGVtLWhlYWRlcntib3JkZXItY29sb3I6cmdiYSgwLCAxMjIsIDE5NCwgMC41KX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdW2NvbXBsZXRlXTpob3Zlcjpub3QoW2Rpc2FibGVkXSk6bm90KFtzZWxlY3RlZF0pKSAuc3RlcHBlci1pdGVtLWhlYWRlciw6aG9zdChbbGF5b3V0PWhvcml6b250YWxdW2NvbXBsZXRlXTpmb2N1czpub3QoW2Rpc2FibGVkXSk6bm90KFtzZWxlY3RlZF0pKSAuc3RlcHBlci1pdGVtLWhlYWRlcntib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtlcnJvcl0pIC5zdGVwcGVyLWl0ZW0taGVhZGVye2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWRhbmdlcil9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtzZWxlY3RlZF0pIC5zdGVwcGVyLWl0ZW0taGVhZGVye2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdOmhvdmVyOm5vdChbZGlzYWJsZWRdKTpub3QoW3NlbGVjdGVkXSkpIC5zdGVwcGVyLWl0ZW0taGVhZGVyLDpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF06Zm9jdXM6bm90KFtkaXNhYmxlZF0pOm5vdChbc2VsZWN0ZWRdKSkgLnN0ZXBwZXItaXRlbS1oZWFkZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwgMTIyLCAxOTQsIDAuNSl9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtlcnJvcl06aG92ZXI6bm90KFtkaXNhYmxlZF0pOm5vdChbc2VsZWN0ZWRdKSkgLnN0ZXBwZXItaXRlbS1oZWFkZXIsOmhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtlcnJvcl06Zm9jdXM6bm90KFtkaXNhYmxlZF0pOm5vdChbc2VsZWN0ZWRdKSkgLnN0ZXBwZXItaXRlbS1oZWFkZXJ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZGFuZ2VyLWhvdmVyKX1AbWVkaWEgKGZvcmNlZC1jb2xvcnM6IGFjdGl2ZSl7Omhvc3QgLmNvbnRhaW5lcntvdXRsaW5lLXdpZHRoOjA7b3V0bGluZS1vZmZzZXQ6MH06aG9zdCg6Zm9jdXMpLDpob3N0KDpmb2N1cy12aXNpYmxlKXtvdXRsaW5lLWNvbG9yOmNhbnZhc1RleHR9Omhvc3QoW3NlbGVjdGVkXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stc3RhcnQtY29sb3I6aGlnaGxpZ2h0fTpob3N0KFtzZWxlY3RlZF0pIC5jb250YWluZXIgLnN0ZXBwZXItaXRlbS1udW1iZXJ7Y29sb3I6aGlnaGxpZ2h0fTpob3N0KFtzZWxlY3RlZF0pIC5jb250YWluZXIgLnN0ZXBwZXItaXRlbS1pY29ue2NvbG9yOmhpZ2hsaWdodH06aG9zdChbbGF5b3V0PXZlcnRpY2FsXVtzZWxlY3RlZF0pIC5jb250YWluZXJ7Ym9yZGVyLWNvbG9yOmhpZ2hsaWdodH19XCI7XG5cbmNvbnN0IFN0ZXBwZXJJdGVtID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFN0ZXBwZXJJdGVtS2V5RXZlbnQgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFN0ZXBwZXJJdGVtS2V5RXZlbnRcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxTdGVwcGVySXRlbVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsU3RlcHBlckl0ZW1TZWxlY3RcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxVc2VyUmVxdWVzdGVkU3RlcHBlckl0ZW1TZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFVzZXJSZXF1ZXN0ZWRTdGVwcGVySXRlbVNlbGVjdFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFN0ZXBwZXJJdGVtUmVnaXN0ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbFN0ZXBwZXJJdGVtUmVnaXN0ZXJcIiwgNik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiBldmVudC50YXJnZXQgPT09IHRoaXMuZWwpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgICAgICAgdGhpcy5lbWl0VXNlclJlcXVlc3RlZEl0ZW0oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICBjYXNlIFwiSG9tZVwiOlxuICAgICAgICAgIGNhc2UgXCJFbmRcIjpcbiAgICAgICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsU3RlcHBlckl0ZW1LZXlFdmVudC5lbWl0KHsgaXRlbTogZXZlbnQgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlSXRlbUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fFxuICAgICAgICAodGhpcy5sYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiICYmXG4gICAgICAgICAgZXZlbnRcbiAgICAgICAgICAgIC5jb21wb3NlZFBhdGgoKVxuICAgICAgICAgICAgLnNvbWUoKGVsKSA9PiBlbC5jbGFzc0xpc3Q/LmNvbnRhaW5zKFwic3RlcHBlci1pdGVtLWNvbnRlbnRcIikpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmVtaXRVc2VyUmVxdWVzdGVkSXRlbSgpO1xuICAgIH07XG4gICAgdGhpcy5lbWl0VXNlclJlcXVlc3RlZEl0ZW0gPSAoKSA9PiB7XG4gICAgICB0aGlzLmVtaXRSZXF1ZXN0ZWRJdGVtKCk7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLml0ZW1Qb3NpdGlvbjtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxVc2VyUmVxdWVzdGVkU3RlcHBlckl0ZW1TZWxlY3QuZW1pdCh7XG4gICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmVtaXRSZXF1ZXN0ZWRJdGVtID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5pdGVtUG9zaXRpb247XG4gICAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsU3RlcHBlckl0ZW1TZWxlY3QuZW1pdCh7XG4gICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5oZWFkaW5nID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYXlvdXQgPSBcImhvcml6b250YWxcIjtcbiAgICB0aGlzLmljb24gPSBmYWxzZTtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5udW1iZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gIH1cbiAgc2VsZWN0ZWRIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmVtaXRSZXF1ZXN0ZWRJdGVtKCk7XG4gICAgfVxuICB9XG4gIC8vIHdhdGNoIGZvciByZW1vdmFsIG9mIGRpc2FibGVkIHRvIHJlZ2lzdGVyIHN0ZXBcbiAgZGlzYWJsZWRXYXRjaGVyKCkge1xuICAgIHRoaXMucmVnaXN0ZXJTdGVwcGVySXRlbSgpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZVdhdGNoZXIobG9jYWxlKSB7XG4gICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICBsb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlXG4gICAgfTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy5pY29uID0gZ2V0RWxlbWVudFByb3AodGhpcy5lbCwgXCJpY29uXCIsIGZhbHNlKTtcbiAgICB0aGlzLm51bWJlcmVkID0gZ2V0RWxlbWVudFByb3AodGhpcy5lbCwgXCJudW1iZXJlZFwiLCBmYWxzZSk7XG4gICAgdGhpcy5sYXlvdXQgPSBnZXRFbGVtZW50UHJvcCh0aGlzLmVsLCBcImxheW91dFwiLCBmYWxzZSk7XG4gICAgdGhpcy5zY2FsZSA9IGdldEVsZW1lbnRQcm9wKHRoaXMuZWwsIFwic2NhbGVcIiwgXCJtXCIpO1xuICAgIHRoaXMucGFyZW50U3RlcHBlckVsID0gdGhpcy5lbC5wYXJlbnRFbGVtZW50O1xuICAgIHRoaXMuaXRlbVBvc2l0aW9uID0gdGhpcy5nZXRJdGVtUG9zaXRpb24oKTtcbiAgICB0aGlzLnJlZ2lzdGVyU3RlcHBlckl0ZW0oKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5lbWl0UmVxdWVzdGVkSXRlbSgpO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgdXBkYXRlSG9zdEludGVyYWN0aW9uKHRoaXMsIHRydWUpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1leHBhbmRlZFwiOiB0b0FyaWFCb29sZWFuKHRoaXMuc2VsZWN0ZWQpLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUl0ZW1DbGljaywgb25LZXlEb3duOiB0aGlzLmtleURvd25IYW5kbGVyIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJjb250YWluZXJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwic3RlcHBlci1pdGVtLWhlYWRlclwiLCB0YWJJbmRleDogXG4gICAgICAvKiBhZGRpdGlvbmFsIHRhYiBpbmRleCBsb2dpYyBuZWVkZWQgYmVjYXVzZSBvZiBkaXNwbGF5OiBjb250ZW50cyAqL1xuICAgICAgdGhpcy5sYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiICYmICF0aGlzLmRpc2FibGVkID8gMCA6IG51bGwsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5oZWFkZXJFbCA9IGVsKSB9LCB0aGlzLmljb24gPyB0aGlzLnJlbmRlckljb24oKSA6IG51bGwsIHRoaXMubnVtYmVyZWQgPyBoKFwiZGl2XCIsIHsgY2xhc3M6IFwic3RlcHBlci1pdGVtLW51bWJlclwiIH0sIHRoaXMucmVuZGVyTnVtYmVycygpLCBcIi5cIikgOiBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwic3RlcHBlci1pdGVtLWhlYWRlci10ZXh0XCIgfSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJzdGVwcGVyLWl0ZW0taGVhZGluZ1wiIH0sIHRoaXMuaGVhZGluZyksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwic3RlcHBlci1pdGVtLWRlc2NyaXB0aW9uXCIgfSwgdGhpcy5kZXNjcmlwdGlvbikpKSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInN0ZXBwZXItaXRlbS1jb250ZW50XCIgfSwgaChcInNsb3RcIiwgbnVsbCkpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVwZGF0ZUFjdGl2ZUl0ZW1PbkNoYW5nZShldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMucGFyZW50U3RlcHBlckVsIHx8XG4gICAgICBldmVudC5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyh0aGlzLnBhcmVudFN0ZXBwZXJFbCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRQb3NpdGlvbiA9IGV2ZW50LmRldGFpbC5wb3NpdGlvbjtcbiAgICAgIHRoaXMuZGV0ZXJtaW5lU2VsZWN0ZWRJdGVtKCk7XG4gICAgfVxuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgICh0aGlzLmxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiID8gdGhpcy5lbCA6IHRoaXMuaGVhZGVyRWwpPy5mb2N1cygpO1xuICB9XG4gIHJlbmRlckljb24oKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuc2VsZWN0ZWRcbiAgICAgID8gXCJjaXJjbGVGXCJcbiAgICAgIDogdGhpcy5lcnJvclxuICAgICAgICA/IFwiZXhjbGFtYXRpb25NYXJrQ2lyY2xlRlwiXG4gICAgICAgIDogdGhpcy5jb21wbGV0ZVxuICAgICAgICAgID8gXCJjaGVja0NpcmNsZUZcIlxuICAgICAgICAgIDogXCJjaXJjbGVcIjtcbiAgICByZXR1cm4gKGgoXCJjYWxjaXRlLWljb25cIiwgeyBjbGFzczogXCJzdGVwcGVyLWl0ZW0taWNvblwiLCBmbGlwUnRsOiB0aGlzLmljb25GbGlwUnRsLCBpY29uOiBwYXRoLCBzY2FsZTogXCJzXCIgfSkpO1xuICB9XG4gIGRldGVybWluZVNlbGVjdGVkSXRlbSgpIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5pdGVtUG9zaXRpb24gPT09IHRoaXMuc2VsZWN0ZWRQb3NpdGlvbjtcbiAgfVxuICByZWdpc3RlclN0ZXBwZXJJdGVtKCkge1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsU3RlcHBlckl0ZW1SZWdpc3Rlci5lbWl0KHtcbiAgICAgIHBvc2l0aW9uOiB0aGlzLml0ZW1Qb3NpdGlvblxuICAgIH0pO1xuICB9XG4gIGdldEl0ZW1Qb3NpdGlvbigpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnBhcmVudFN0ZXBwZXJFbD8ucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtc3RlcHBlci1pdGVtXCIpKS5pbmRleE9mKHRoaXMuZWwpO1xuICB9XG4gIHJlbmRlck51bWJlcnMoKSB7XG4gICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgIHVzZUdyb3VwaW5nOiBmYWxzZVxuICAgIH07XG4gICAgcmV0dXJuIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXR0ZXIuZm9ybWF0KHRoaXMuaXRlbVBvc2l0aW9uICsgMSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwic2VsZWN0ZWRcIjogW1wic2VsZWN0ZWRIYW5kbGVyXCJdLFxuICAgIFwiZGlzYWJsZWRcIjogW1wiZGlzYWJsZWRXYXRjaGVyXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZVdhdGNoZXJcIl1cbiAgfTsgfVxufTtcblN0ZXBwZXJJdGVtLnN0eWxlID0gc3RlcHBlckl0ZW1Dc3M7XG5cbmV4cG9ydCB7IFN0ZXBwZXIgYXMgY2FsY2l0ZV9zdGVwcGVyLCBTdGVwcGVySXRlbSBhcyBjYWxjaXRlX3N0ZXBwZXJfaXRlbSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmZ1bmN0aW9uIGludGVyY2VwdGVkQ2xpY2soKSB7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXM7XG4gIGlmICghZGlzYWJsZWQpIHtcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2suY2FsbCh0aGlzKTtcbiAgfVxufVxuZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuICAvLyBwcmV2ZW50IGNsaWNrIGZyb20gbW92aW5nIGZvY3VzIG9uIGhvc3RcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cbmNvbnN0IG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMgPSBbXCJtb3VzZWRvd25cIiwgXCJtb3VzZXVwXCIsIFwiY2xpY2tcIl07XG5mdW5jdGlvbiBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudChldmVudCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSBldmVudC50YXJnZXQ7XG4gIC8vIHByZXZlbnQgZGlzYWxsb3dlZCBtb3VzZSBldmVudHMgZnJvbSBiZWluZyBlbWl0dGVkIG9uIHRoZSBkaXNhYmxlZCBob3N0IChwZXIgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9odG1sL2lzc3Vlcy81ODg2KVxuICAvL+KaoCB3ZSBnZW5lcmFsbHkgYXZvaWQgc3RvcHBpbmcgcHJvcGFnYXRpb24gb2YgZXZlbnRzLCBidXQgdGhpcyBpcyBuZWVkZWQgdG8gYWRoZXJlIHRvIHRoZSBpbnRlbmRlZCBzcGVjIGNoYW5nZXMgYWJvdmUg4pqgXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbmNvbnN0IGNhcHR1cmVPbmx5T3B0aW9ucyA9IHsgY2FwdHVyZTogdHJ1ZSB9O1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1cGRhdGVzIHRoZSBob3N0IGVsZW1lbnQgdG8gcHJldmVudCBrZXlib2FyZCBpbnRlcmFjdGlvbiBvbiBpdHMgc3VidHJlZSBhbmQgc2V0cyB0aGUgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUgZm9yIGFjY2Vzc2liaWxpdHkuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZFJlbmRlcmAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogKipOb3RlcyoqXG4gKlxuICogdGhpcyB1dGlsIGlzIG5vdCBuZWVkZWQgZm9yIHNpbXBsZSBjb21wb25lbnRzIHdob3NlIHJvb3QgZWxlbWVudCBvciBlbGVtZW50cyBhcmUgYW4gaW50ZXJhY3RpdmUgY29tcG9uZW50IChjdXN0b20gZWxlbWVudCBvciBuYXRpdmUgY29udHJvbCkuIEZvciB0aG9zZSBjYXNlcywgc2V0IHRoZSBgZGlzYWJsZWRgIHByb3BzIG9uIHRoZSByb290IGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIHRlY2huaWNhbGx5LCB1c2VycyBjYW4gb3ZlcnJpZGUgYHRhYmluZGV4YCBhbmQgcmVzdG9yZSBrZXlib2FyZCBuYXZpZ2F0aW9uLCBidXQgdGhpcyB3aWxsIGJlIGNvbnNpZGVyZWQgdXNlciBlcnJvclxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0SXNUYWJiYWJsZVxuICovXG5mdW5jdGlvbiB1cGRhdGVIb3N0SW50ZXJhY3Rpb24oY29tcG9uZW50LCBob3N0SXNUYWJiYWJsZSA9IGZhbHNlKSB7XG4gIGlmIChjb21wb25lbnQuZGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgaWYgKGNvbXBvbmVudC5lbC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGNvbXBvbmVudC5lbC5jbGljayA9IGludGVyY2VwdGVkQ2xpY2s7XG4gICAgY29tcG9uZW50LmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICAgIG5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IGNvbXBvbmVudC5lbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBvbk5vbkJ1YmJsaW5nV2hlbkRpc2FibGVkTW91c2VFdmVudCwgY2FwdHVyZU9ubHlPcHRpb25zKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbXBvbmVudC5lbC5jbGljayA9IEhUTUxFbGVtZW50LnByb3RvdHlwZS5jbGljaztcbiAgY29tcG9uZW50LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBvblBvaW50ZXJEb3duLCBjYXB0dXJlT25seU9wdGlvbnMpO1xuICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBjb21wb25lbnQuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xuICBpZiAodHlwZW9mIGhvc3RJc1RhYmJhYmxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb21wb25lbnQuZWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgaG9zdElzVGFiYmFibGUuY2FsbChjb21wb25lbnQpID8gXCIwXCIgOiBcIi0xXCIpO1xuICB9XG4gIGVsc2UgaWYgKGhvc3RJc1RhYmJhYmxlID09PSB0cnVlKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gZmFsc2UpIHtcbiAgICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwidGFiaW5kZXhcIik7XG4gIH1cbiAgZWxzZSA7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xufVxuXG5leHBvcnQgeyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmNvbnN0IHJlc29sdmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcHJvbWlzZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgc2V0cyB1cCB0aGUgY29tcG9uZW50IGZvciB0aGUgYWJpbGl0eSB0byBrbm93IHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudFdpbGxMb2FkKCk6IHZvaWQge1xuICogICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRVcExvYWRhYmxlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBwcm9taXNlTWFwLnNldChjb21wb25lbnQsIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlTWFwLnNldChjb21wb25lbnQsIHJlc29sdmUpKSk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgbGV0cyB0aGUgbG9hZGFibGUgY29tcG9uZW50IGtub3cgdGhhdCBpdCBpcyBub3cgbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudERpZExvYWQoKTogdm9pZCB7XG4gKiAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXNvbHZlTWFwLmdldChjb21wb25lbnQpKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgY2FuIGJlIHVzZWQgdG8gZW5zdXJlIGEgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZCAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIHN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQpLlxuICpcbiAqIFJlcXVpcmVzIFwic2V0VXBMb2FkYWJsZUNvbXBvbmVudFwiIGFuZCBcInNldENvbXBvbmVudExvYWRlZFwiIHRvIGJlIGNhbGxlZCBmaXJzdC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0LlxuICpcbiAqIGBgYFxuICogYXN5bmMgc2V0Rm9jdXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXR1cm4gcHJvbWlzZU1hcC5nZXQoY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgc2V0Q29tcG9uZW50TG9hZGVkIGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBjLCBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==