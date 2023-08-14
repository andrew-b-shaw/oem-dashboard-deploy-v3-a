"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-accordion_2_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-accordion_2.entry.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-accordion_2.entry.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_accordion": () => (/* binding */ Accordion),
/* harmony export */   "calcite_accordion_item": () => (/* binding */ AccordionItem)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditionalSlot-02722e44.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-02722e44.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */







const accordionCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}.accordion--transparent{--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-2)}";

const Accordion = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalAccordionChange = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalAccordionChange", 6);
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    /** created list of Accordion items */
    this.items = [];
    /** keep track of whether the items have been sorted so we don't re-sort */
    this.sorted = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.sortItems = (items) => items.sort((a, b) => a.position - b.position).map((a) => a.item);
    this.appearance = "solid";
    this.iconPosition = "end";
    this.iconType = "chevron";
    this.scale = "m";
    this.selectionMode = "multiple";
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentDidLoad() {
    if (!this.sorted) {
      this.items = this.sortItems(this.items);
      this.sorted = true;
    }
  }
  render() {
    const transparent = this.appearance === "transparent";
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        "accordion--transparent": transparent,
        accordion: !transparent
      } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  registerCalciteAccordionItem(event) {
    const item = {
      item: event.target,
      parent: event.detail.parent,
      position: event.detail.position
    };
    if (this.el === item.parent) {
      this.items.push(item);
    }
    event.stopPropagation();
  }
  updateActiveItemOnChange(event) {
    this.requestedAccordionItem = event.detail.requestedAccordionItem;
    this.calciteInternalAccordionChange.emit({
      requestedAccordionItem: this.requestedAccordionItem
    });
    event.stopPropagation();
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
Accordion.style = accordionCss;

const SLOTS = {
  actionsStart: "actions-start",
  actionsEnd: "actions-end"
};
const CSS = {
  icon: "icon",
  header: "header",
  headerContent: "header-content",
  actionsStart: "actions-start",
  actionsEnd: "actions-end",
  headerText: "header-text",
  heading: "heading",
  description: "description",
  expandIcon: "expand-icon",
  content: "content",
  iconStart: "icon--start",
  iconEnd: "icon--end",
  headerContainer: "header-container"
};

const accordionItemCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}.icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:flex;flex-direction:column;color:var(--calcite-ui-text-3);text-decoration-line:none;background-color:var(--calcite-accordion-item-background, var(--calcite-ui-foreground-1))}:host .header-content{outline-color:transparent}:host(:focus) .header-content{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([expanded]){color:var(--calcite-ui-text-1)}:host([expanded]) .content{display:block;color:var(--calcite-ui-text-1)}:host([expanded]) .header{border-block-end-color:transparent}:host .header{display:flex;align-items:stretch}:host .icon{position:relative;margin:0px;display:inline-flex;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}.icon--start{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin)}.icon--end{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin);margin-inline-start:var(--calcite-accordion-icon-margin)}.header-container{inline-size:100%}.content{padding:var(--calcite-accordion-item-padding)}:host .content,:host .header{border-block-end:1px solid var(--calcite-accordion-item-border, var(--calcite-ui-border-2))}:host .header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}:host .content{display:none;padding-block-start:0px;color:var(--calcite-ui-text-3);text-align:initial}:host .expand-icon{color:var(--calcite-ui-text-3);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([expanded]) .expand-icon{color:var(--calcite-ui-text-1);transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}:host .heading,:host .description{display:flex;inline-size:100%}:host .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .description{margin-block-start:0.25rem;color:var(--calcite-ui-text-3)}:host(:focus) .heading,:host(:hover) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:hover) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .expand-icon,:host(:hover) .expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:hover) .description{color:var(--calcite-ui-text-2)}:host(:focus) .heading,:host(:active) .heading,:host([expanded]) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:active) .icon,:host([expanded]) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .expand-icon,:host(:active) .expand-icon,:host([expanded]) .expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:active) .description,:host([expanded]) .description{color:var(--calcite-ui-text-2)}.header-content{flex-grow:1;cursor:pointer;padding:var(--calcite-accordion-item-padding);flex-direction:var(--calcite-accordion-item-flex-direction)}.actions-start,.actions-end{display:flex;align-items:center}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}:host(:hover) .heading,:host(:focus) .heading{text-decoration:underline}}";

const AccordionItem = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalAccordionItemSelect = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalAccordionItemSelect", 6);
    this.calciteInternalAccordionItemClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalAccordionItemClose", 6);
    this.calciteInternalAccordionItemRegister = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalAccordionItemRegister", 6);
    /** what icon position does the parent accordion specify */
    this.iconPosition = "end";
    /** handle clicks on item header */
    this.itemHeaderClickHandler = () => this.emitRequestedItem();
    /** Specifies the scale of the `accordion-item` controlled by the parent, defaults to m */
    this.scale = "m";
    this.expanded = false;
    this.heading = undefined;
    this.description = undefined;
    this.iconStart = undefined;
    this.iconEnd = undefined;
    this.iconFlipRtl = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.parent = this.el.parentElement;
    this.iconType = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.v)(this.el, "icon-type", "chevron");
    this.iconPosition = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.v)(this.el, "icon-position", this.iconPosition);
    this.scale = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.v)(this.el, "scale", this.scale);
    (0,_conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  componentDidLoad() {
    this.itemPosition = this.getItemPosition();
    this.calciteInternalAccordionItemRegister.emit({
      parent: this.parent,
      position: this.itemPosition
    });
  }
  disconnectedCallback() {
    (0,_conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsStart() {
    const { el } = this;
    return (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.g)(el, SLOTS.actionsStart) ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.actionsStart }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.actionsStart }))) : null;
  }
  renderActionsEnd() {
    const { el } = this;
    return (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.g)(el, SLOTS.actionsEnd) ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.actionsEnd }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.actionsEnd }))) : null;
  }
  render() {
    const { iconFlipRtl } = this;
    const dir = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.b)(this.el);
    const iconStartEl = this.iconStart ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.iconStart, flipRtl: iconFlipRtl === "both" || iconFlipRtl === "start", icon: this.iconStart, key: "icon-start", scale: this.scale === "l" ? "m" : "s" })) : null;
    const iconEndEl = this.iconEnd ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.iconEnd, flipRtl: iconFlipRtl === "both" || iconFlipRtl === "end", icon: this.iconEnd, key: "icon-end", scale: this.scale === "l" ? "m" : "s" })) : null;
    const { description } = this;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [`icon-position--${this.iconPosition}`]: true,
        [`icon-type--${this.iconType}`]: true
      } }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS.header]: true, [_resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_3__.C.rtl]: dir === "rtl" } }, this.renderActionsStart(), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-expanded": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.t)(this.expanded), class: CSS.headerContent, onClick: this.itemHeaderClickHandler, role: "button", tabindex: "0" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.headerContainer }, iconStartEl, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.headerText }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.heading }, this.heading), description ? (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.description }, description) : null), iconEndEl), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.expandIcon, icon: this.iconType === "chevron"
        ? "chevronDown"
        : this.iconType === "caret"
          ? "caretDown"
          : this.expanded
            ? "minus"
            : "plus", scale: this.scale === "l" ? "m" : "s" })), this.renderActionsEnd()), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.content }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(event) {
    if (event.target === this.el) {
      switch (event.key) {
        case " ":
        case "Enter":
          this.emitRequestedItem();
          event.preventDefault();
          break;
      }
    }
  }
  updateActiveItemOnChange(event) {
    this.requestedAccordionItem = event.detail
      .requestedAccordionItem;
    if (this.el.parentNode !== this.requestedAccordionItem.parentNode) {
      return;
    }
    this.determineActiveItem();
    event.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  determineActiveItem() {
    this.selectionMode = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.v)(this.el, "selection-mode", "multiple");
    switch (this.selectionMode) {
      case "multiple":
        if (this.el === this.requestedAccordionItem) {
          this.expanded = !this.expanded;
        }
        break;
      case "single":
        this.expanded = this.el === this.requestedAccordionItem ? !this.expanded : false;
        break;
      case "single-persist":
        this.expanded = this.el === this.requestedAccordionItem;
        break;
    }
  }
  emitRequestedItem() {
    this.calciteInternalAccordionItemSelect.emit({
      requestedAccordionItem: this.el
    });
  }
  getItemPosition() {
    return Array.prototype.indexOf.call(this.parent.querySelectorAll("calcite-accordion-item"), this.el);
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
AccordionItem.style = accordionItemCss;




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

/***/ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createObserver)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
  const Observer = getObserver(type);
  return new Observer(callback, options);
}
function getObserver(type) {
  // based on https://github.com/whatwg/dom/issues/126#issuecomment-1049814948
  class ExtendedMutationObserver extends window.MutationObserver {
    constructor(callback) {
      super(callback);
      this.observedEntry = [];
      this.callback = callback;
    }
    observe(target, options) {
      this.observedEntry.push({ target, options });
      return super.observe(target, options);
    }
    unobserve(target) {
      const newObservedEntries = this.observedEntry.filter((observed) => observed.target !== target);
      this.observedEntry = [];
      this.callback(super.takeRecords(), this);
      this.disconnect();
      newObservedEntries.forEach((observed) => this.observe(observed.target, observed.options));
    }
  }
  return (function () {
    return (type === "intersection"
      ? window.IntersectionObserver
      : type === "mutation"
        ? ExtendedMutationObserver
        : window.ResizeObserver);
  })();
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMDU3OWEzYmMzN2U2YTczNTc3MjQzM2IxYjgzZjRjMzEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ2lCO0FBQ2I7QUFDdEQ7QUFDMUI7QUFDTDs7QUFFNUIsb0NBQW9DLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsaUJBQWlCLDhDQUE4Qyx1Q0FBdUMsbUZBQW1GLHNDQUFzQyxpQkFBaUIsaUJBQWlCLDZDQUE2Qyx3Q0FBd0Msb0ZBQW9GLHNDQUFzQyxpQkFBaUIsaUJBQWlCLDhDQUE4QyxxQ0FBcUMsaUZBQWlGLHFDQUFxQyxvQkFBb0IsTUFBTSxrQkFBa0IsY0FBYyxxQkFBcUIsbUJBQW1CLDJEQUEyRCxtRUFBbUUsd0JBQXdCLDRDQUE0QyxnREFBZ0QsV0FBVyxpQkFBaUIsMkJBQTJCLG1CQUFtQix3Q0FBd0M7O0FBRTN5RjtBQUNBO0FBQ0EsSUFBSSxxREFBZ0I7QUFDcEIsMENBQTBDLHFEQUFXO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtYWNjb3JkaW9uXzIuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY29uZGl0aW9uYWxTbG90LTAyNzIyZTQ0LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL29ic2VydmVycy1jMjBlYzJkZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBhIGFzIGdldEVsZW1lbnQsIEggYXMgSG9zdCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC0wMjcyMmU0NC5qcyc7XG5pbXBvcnQgeyB2IGFzIGdldEVsZW1lbnRQcm9wLCBnIGFzIGdldFNsb3R0ZWQsIGIgYXMgZ2V0RWxlbWVudERpciwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20tZjc0YTA5YjcuanMnO1xuaW1wb3J0IHsgQyBhcyBDU1NfVVRJTElUWSB9IGZyb20gJy4vcmVzb3VyY2VzLWQwOGE2NzM3LmpzJztcbmltcG9ydCAnLi9vYnNlcnZlcnMtYzIwZWMyZGQuanMnO1xuaW1wb3J0ICcuL2d1aWQtZDU5NDNiODMuanMnO1xuXG5jb25zdCBhY2NvcmRpb25Dc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbc2NhbGU9c10pey0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1zcGFjaW5nLXVuaXQ6MC4yNXJlbTstLWNhbGNpdGUtYWNjb3JkaW9uLWljb24tbWFyZ2luOjAuNXJlbTstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tcGFkZGluZzp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLXNwYWNpbmctdW5pdCkgMC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1zcGFjaW5nLXVuaXQ6MC41cmVtOy0tY2FsY2l0ZS1hY2NvcmRpb24taWNvbi1tYXJnaW46MC43NXJlbTstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tcGFkZGluZzp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLXNwYWNpbmctdW5pdCkgMC43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjFyZW19Omhvc3QoW3NjYWxlPWxdKXstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tc3BhY2luZy11bml0OjAuNzVyZW07LS1jYWxjaXRlLWFjY29yZGlvbi1pY29uLW1hcmdpbjoxcmVtOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1wYWRkaW5nOnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tc3BhY2luZy11bml0KSAxcmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjI1cmVtfTpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWF4LWlubGluZS1zaXplOjEwMCU7bGluZS1oZWlnaHQ6MS41cmVtOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1ib3JkZXI6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMik7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWJhY2tncm91bmQ6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfS5hY2NvcmRpb24tLXRyYW5zcGFyZW50ey0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1ib3JkZXI6dHJhbnNwYXJlbnQ7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnR9LmFjY29yZGlvbntib3JkZXItd2lkdGg6MXB4O2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MHB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMil9XCI7XG5cbmNvbnN0IEFjY29yZGlvbiA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxBY2NvcmRpb25DaGFuZ2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbEFjY29yZGlvbkNoYW5nZVwiLCA2KTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBTdGF0ZS9Qcm9wc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKiBjcmVhdGVkIGxpc3Qgb2YgQWNjb3JkaW9uIGl0ZW1zICovXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIC8qKiBrZWVwIHRyYWNrIG9mIHdoZXRoZXIgdGhlIGl0ZW1zIGhhdmUgYmVlbiBzb3J0ZWQgc28gd2UgZG9uJ3QgcmUtc29ydCAqL1xuICAgIHRoaXMuc29ydGVkID0gZmFsc2U7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuc29ydEl0ZW1zID0gKGl0ZW1zKSA9PiBpdGVtcy5zb3J0KChhLCBiKSA9PiBhLnBvc2l0aW9uIC0gYi5wb3NpdGlvbikubWFwKChhKSA9PiBhLml0ZW0pO1xuICAgIHRoaXMuYXBwZWFyYW5jZSA9IFwic29saWRcIjtcbiAgICB0aGlzLmljb25Qb3NpdGlvbiA9IFwiZW5kXCI7XG4gICAgdGhpcy5pY29uVHlwZSA9IFwiY2hldnJvblwiO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBcIm11bHRpcGxlXCI7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBpZiAoIXRoaXMuc29ydGVkKSB7XG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5zb3J0SXRlbXModGhpcy5pdGVtcyk7XG4gICAgICB0aGlzLnNvcnRlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0cmFuc3BhcmVudCA9IHRoaXMuYXBwZWFyYW5jZSA9PT0gXCJ0cmFuc3BhcmVudFwiO1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFwiYWNjb3JkaW9uLS10cmFuc3BhcmVudFwiOiB0cmFuc3BhcmVudCxcbiAgICAgICAgYWNjb3JkaW9uOiAhdHJhbnNwYXJlbnRcbiAgICAgIH0gfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZWdpc3RlckNhbGNpdGVBY2NvcmRpb25JdGVtKGV2ZW50KSB7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIGl0ZW06IGV2ZW50LnRhcmdldCxcbiAgICAgIHBhcmVudDogZXZlbnQuZGV0YWlsLnBhcmVudCxcbiAgICAgIHBvc2l0aW9uOiBldmVudC5kZXRhaWwucG9zaXRpb25cbiAgICB9O1xuICAgIGlmICh0aGlzLmVsID09PSBpdGVtLnBhcmVudCkge1xuICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICB1cGRhdGVBY3RpdmVJdGVtT25DaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW0gPSBldmVudC5kZXRhaWwucmVxdWVzdGVkQWNjb3JkaW9uSXRlbTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFjY29yZGlvbkNoYW5nZS5lbWl0KHtcbiAgICAgIHJlcXVlc3RlZEFjY29yZGlvbkl0ZW06IHRoaXMucmVxdWVzdGVkQWNjb3JkaW9uSXRlbVxuICAgIH0pO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5BY2NvcmRpb24uc3R5bGUgPSBhY2NvcmRpb25Dc3M7XG5cbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25zU3RhcnQ6IFwiYWN0aW9ucy1zdGFydFwiLFxuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCJcbn07XG5jb25zdCBDU1MgPSB7XG4gIGljb246IFwiaWNvblwiLFxuICBoZWFkZXI6IFwiaGVhZGVyXCIsXG4gIGhlYWRlckNvbnRlbnQ6IFwiaGVhZGVyLWNvbnRlbnRcIixcbiAgYWN0aW9uc1N0YXJ0OiBcImFjdGlvbnMtc3RhcnRcIixcbiAgYWN0aW9uc0VuZDogXCJhY3Rpb25zLWVuZFwiLFxuICBoZWFkZXJUZXh0OiBcImhlYWRlci10ZXh0XCIsXG4gIGhlYWRpbmc6IFwiaGVhZGluZ1wiLFxuICBkZXNjcmlwdGlvbjogXCJkZXNjcmlwdGlvblwiLFxuICBleHBhbmRJY29uOiBcImV4cGFuZC1pY29uXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICBpY29uU3RhcnQ6IFwiaWNvbi0tc3RhcnRcIixcbiAgaWNvbkVuZDogXCJpY29uLS1lbmRcIixcbiAgaGVhZGVyQ29udGFpbmVyOiBcImhlYWRlci1jb250YWluZXJcIlxufTtcblxuY29uc3QgYWNjb3JkaW9uSXRlbUNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfS5pY29uLXBvc2l0aW9uLS1lbmQsLmljb24tcG9zaXRpb24tLXN0YXJ0ey0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1pY29uLXJvdGF0aW9uOmNhbGMoOTBkZWcgKiAtMSk7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWFjdGl2ZS1pY29uLXJvdGF0aW9uOjBkZWc7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWljb24tcm90YXRpb24tcnRsOjkwZGVnOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1hY3RpdmUtaWNvbi1yb3RhdGlvbi1ydGw6MGRlZ30uaWNvbi1wb3NpdGlvbi0tc3RhcnR7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1pY29uLXNwYWNpbmctc3RhcnQ6MDstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taWNvbi1zcGFjaW5nLWVuZDp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pY29uLW1hcmdpbil9Lmljb24tcG9zaXRpb24tLWVuZHstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tZmxleC1kaXJlY3Rpb246cm93Oy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1pY29uLXNwYWNpbmctc3RhcnQ6dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taWNvbi1tYXJnaW4pOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1pY29uLXNwYWNpbmctZW5kOjB9Lmljb24tcG9zaXRpb24tLWVuZDpub3QoLmljb24tdHlwZS0tcGx1cy1taW51cyl7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWljb24tcm90YXRpb246MGRlZzstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tYWN0aXZlLWljb24tcm90YXRpb246MTgwZGVnOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1pY29uLXJvdGF0aW9uLXJ0bDowZGVnOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1hY3RpdmUtaWNvbi1yb3RhdGlvbi1ydGw6Y2FsYygxODBkZWcgKiAtMSl9Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpKX06aG9zdCAuaGVhZGVyLWNvbnRlbnR7b3V0bGluZS1jb2xvcjp0cmFuc3BhcmVudH06aG9zdCg6Zm9jdXMpIC5oZWFkZXItY29udGVudHtvdXRsaW5lOjJweCBzb2xpZCB0cmFuc3BhcmVudDtvdXRsaW5lLW9mZnNldDoycHg7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfTpob3N0KFtleHBhbmRlZF0pe2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbZXhwYW5kZWRdKSAuY29udGVudHtkaXNwbGF5OmJsb2NrO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdChbZXhwYW5kZWRdKSAuaGVhZGVye2JvcmRlci1ibG9jay1lbmQtY29sb3I6dHJhbnNwYXJlbnR9Omhvc3QgLmhlYWRlcntkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6c3RyZXRjaH06aG9zdCAuaWNvbntwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MHB4O2Rpc3BsYXk6aW5saW5lLWZsZXg7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO3RyYW5zaXRpb24tZHVyYXRpb246MTUwbXM7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWljb24tc3BhY2luZy1zdGFydCk7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWljb24tc3BhY2luZy1lbmQpfS5pY29uLS1zdGFydHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWljb24tbWFyZ2luKX0uaWNvbi0tZW5ke2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLWlubGluZS1lbmQ6dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taWNvbi1tYXJnaW4pO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taWNvbi1tYXJnaW4pfS5oZWFkZXItY29udGFpbmVye2lubGluZS1zaXplOjEwMCV9LmNvbnRlbnR7cGFkZGluZzp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLXBhZGRpbmcpfTpob3N0IC5jb250ZW50LDpob3N0IC5oZWFkZXJ7Ym9yZGVyLWJsb2NrLWVuZDoxcHggc29saWQgdmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1ib3JkZXIsIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTIpKX06aG9zdCAuaGVhZGVyICp7ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7dHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtczt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3dvcmQtd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstd29yZH06aG9zdCAuY29udGVudHtkaXNwbGF5Om5vbmU7cGFkZGluZy1ibG9jay1zdGFydDowcHg7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO3RleHQtYWxpZ246aW5pdGlhbH06aG9zdCAuZXhwYW5kLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO21hcmdpbi1pbmxpbmUtc3RhcnQ6dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1pY29uLXNwYWNpbmctc3RhcnQpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taWNvbi1zcGFjaW5nLWVuZCk7dHJhbnNmb3JtOnJvdGF0ZSh2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWljb24tcm90YXRpb24pKX0uY2FsY2l0ZS0tcnRsIC5leHBhbmQtaWNvbnt0cmFuc2Zvcm06cm90YXRlKHZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taWNvbi1yb3RhdGlvbi1ydGwpKX06aG9zdChbZXhwYW5kZWRdKSAuZXhwYW5kLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3RyYW5zZm9ybTpyb3RhdGUodmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1hY3RpdmUtaWNvbi1yb3RhdGlvbikpfTpob3N0KFtleHBhbmRlZF0pIC5jYWxjaXRlLS1ydGwgLmV4cGFuZC1pY29ue3RyYW5zZm9ybTpyb3RhdGUodmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1hY3RpdmUtaWNvbi1yb3RhdGlvbi1ydGwpKX06aG9zdCAuaGVhZGVyLXRleHR7bWFyZ2luLWJsb2NrOjBweDtmbGV4LWdyb3c6MTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47cGFkZGluZy1ibG9jazowcHg7dGV4dC1hbGlnbjppbml0aWFsO21hcmdpbi1pbmxpbmUtZW5kOmF1dG99Omhvc3QgLmhlYWRpbmcsOmhvc3QgLmRlc2NyaXB0aW9ue2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlfTpob3N0IC5oZWFkaW5ne2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9Omhvc3QgLmRlc2NyaXB0aW9ue21hcmdpbi1ibG9jay1zdGFydDowLjI1cmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX06aG9zdCg6Zm9jdXMpIC5oZWFkaW5nLDpob3N0KDpob3ZlcikgLmhlYWRpbmd7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KDpmb2N1cykgLmljb24sOmhvc3QoOmhvdmVyKSAuaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoOmZvY3VzKSAuZXhwYW5kLWljb24sOmhvc3QoOmhvdmVyKSAuZXhwYW5kLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KDpmb2N1cykgLmRlc2NyaXB0aW9uLDpob3N0KDpob3ZlcikgLmRlc2NyaXB0aW9ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX06aG9zdCg6Zm9jdXMpIC5oZWFkaW5nLDpob3N0KDphY3RpdmUpIC5oZWFkaW5nLDpob3N0KFtleHBhbmRlZF0pIC5oZWFkaW5ne2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCg6Zm9jdXMpIC5pY29uLDpob3N0KDphY3RpdmUpIC5pY29uLDpob3N0KFtleHBhbmRlZF0pIC5pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCg6Zm9jdXMpIC5leHBhbmQtaWNvbiw6aG9zdCg6YWN0aXZlKSAuZXhwYW5kLWljb24sOmhvc3QoW2V4cGFuZGVkXSkgLmV4cGFuZC1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCg6Zm9jdXMpIC5kZXNjcmlwdGlvbiw6aG9zdCg6YWN0aXZlKSAuZGVzY3JpcHRpb24sOmhvc3QoW2V4cGFuZGVkXSkgLmRlc2NyaXB0aW9ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0uaGVhZGVyLWNvbnRlbnR7ZmxleC1ncm93OjE7Y3Vyc29yOnBvaW50ZXI7cGFkZGluZzp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLXBhZGRpbmcpO2ZsZXgtZGlyZWN0aW9uOnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tZmxleC1kaXJlY3Rpb24pfS5hY3Rpb25zLXN0YXJ0LC5hY3Rpb25zLWVuZHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyfUBtZWRpYSAoZm9yY2VkLWNvbG9yczogYWN0aXZlKXs6aG9zdChbZXhwYW5kZWRdKSAuaGVhZGVye2JvcmRlci1ibG9jay1lbmQ6bm9uZX06aG9zdChbZXhwYW5kZWRdKSAuaGVhZGluZ3tmb250LXdlaWdodDpib2xkZXJ9Omhvc3QoOmhvdmVyKSAuaGVhZGluZyw6aG9zdCg6Zm9jdXMpIC5oZWFkaW5ne3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9fVwiO1xuXG5jb25zdCBBY2NvcmRpb25JdGVtID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFjY29yZGlvbkl0ZW1TZWxlY3QgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbEFjY29yZGlvbkl0ZW1TZWxlY3RcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxBY2NvcmRpb25JdGVtQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbEFjY29yZGlvbkl0ZW1DbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFjY29yZGlvbkl0ZW1SZWdpc3RlciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsQWNjb3JkaW9uSXRlbVJlZ2lzdGVyXCIsIDYpO1xuICAgIC8qKiB3aGF0IGljb24gcG9zaXRpb24gZG9lcyB0aGUgcGFyZW50IGFjY29yZGlvbiBzcGVjaWZ5ICovXG4gICAgdGhpcy5pY29uUG9zaXRpb24gPSBcImVuZFwiO1xuICAgIC8qKiBoYW5kbGUgY2xpY2tzIG9uIGl0ZW0gaGVhZGVyICovXG4gICAgdGhpcy5pdGVtSGVhZGVyQ2xpY2tIYW5kbGVyID0gKCkgPT4gdGhpcy5lbWl0UmVxdWVzdGVkSXRlbSgpO1xuICAgIC8qKiBTcGVjaWZpZXMgdGhlIHNjYWxlIG9mIHRoZSBgYWNjb3JkaW9uLWl0ZW1gIGNvbnRyb2xsZWQgYnkgdGhlIHBhcmVudCwgZGVmYXVsdHMgdG8gbSAqL1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5oZWFkaW5nID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uU3RhcnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uRW5kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaWNvbkZsaXBSdGwgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5wYXJlbnQgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQ7XG4gICAgdGhpcy5pY29uVHlwZSA9IGdldEVsZW1lbnRQcm9wKHRoaXMuZWwsIFwiaWNvbi10eXBlXCIsIFwiY2hldnJvblwiKTtcbiAgICB0aGlzLmljb25Qb3NpdGlvbiA9IGdldEVsZW1lbnRQcm9wKHRoaXMuZWwsIFwiaWNvbi1wb3NpdGlvblwiLCB0aGlzLmljb25Qb3NpdGlvbik7XG4gICAgdGhpcy5zY2FsZSA9IGdldEVsZW1lbnRQcm9wKHRoaXMuZWwsIFwic2NhbGVcIiwgdGhpcy5zY2FsZSk7XG4gICAgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHRoaXMuaXRlbVBvc2l0aW9uID0gdGhpcy5nZXRJdGVtUG9zaXRpb24oKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFjY29yZGlvbkl0ZW1SZWdpc3Rlci5lbWl0KHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBwb3NpdGlvbjogdGhpcy5pdGVtUG9zaXRpb25cbiAgICB9KTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJBY3Rpb25zU3RhcnQoKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICByZXR1cm4gZ2V0U2xvdHRlZChlbCwgU0xPVFMuYWN0aW9uc1N0YXJ0KSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5hY3Rpb25zU3RhcnQgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25zU3RhcnQgfSkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyQWN0aW9uc0VuZCgpIHtcbiAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgIHJldHVybiBnZXRTbG90dGVkKGVsLCBTTE9UUy5hY3Rpb25zRW5kKSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5hY3Rpb25zRW5kIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYWN0aW9uc0VuZCB9KSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpY29uRmxpcFJ0bCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKHRoaXMuZWwpO1xuICAgIGNvbnN0IGljb25TdGFydEVsID0gdGhpcy5pY29uU3RhcnQgPyAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1MuaWNvblN0YXJ0LCBmbGlwUnRsOiBpY29uRmxpcFJ0bCA9PT0gXCJib3RoXCIgfHwgaWNvbkZsaXBSdGwgPT09IFwic3RhcnRcIiwgaWNvbjogdGhpcy5pY29uU3RhcnQsIGtleTogXCJpY29uLXN0YXJ0XCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpIDogbnVsbDtcbiAgICBjb25zdCBpY29uRW5kRWwgPSB0aGlzLmljb25FbmQgPyAoaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1MuaWNvbkVuZCwgZmxpcFJ0bDogaWNvbkZsaXBSdGwgPT09IFwiYm90aFwiIHx8IGljb25GbGlwUnRsID09PSBcImVuZFwiLCBpY29uOiB0aGlzLmljb25FbmQsIGtleTogXCJpY29uLWVuZFwiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSA6IG51bGw7XG4gICAgY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gdGhpcztcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtgaWNvbi1wb3NpdGlvbi0tJHt0aGlzLmljb25Qb3NpdGlvbn1gXTogdHJ1ZSxcbiAgICAgICAgW2BpY29uLXR5cGUtLSR7dGhpcy5pY29uVHlwZX1gXTogdHJ1ZVxuICAgICAgfSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHsgW0NTUy5oZWFkZXJdOiB0cnVlLCBbQ1NTX1VUSUxJVFkucnRsXTogZGlyID09PSBcInJ0bFwiIH0gfSwgdGhpcy5yZW5kZXJBY3Rpb25zU3RhcnQoKSwgaChcImRpdlwiLCB7IFwiYXJpYS1leHBhbmRlZFwiOiB0b0FyaWFCb29sZWFuKHRoaXMuZXhwYW5kZWQpLCBjbGFzczogQ1NTLmhlYWRlckNvbnRlbnQsIG9uQ2xpY2s6IHRoaXMuaXRlbUhlYWRlckNsaWNrSGFuZGxlciwgcm9sZTogXCJidXR0b25cIiwgdGFiaW5kZXg6IFwiMFwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmhlYWRlckNvbnRhaW5lciB9LCBpY29uU3RhcnRFbCwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyVGV4dCB9LCBoKFwic3BhblwiLCB7IGNsYXNzOiBDU1MuaGVhZGluZyB9LCB0aGlzLmhlYWRpbmcpLCBkZXNjcmlwdGlvbiA/IGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy5kZXNjcmlwdGlvbiB9LCBkZXNjcmlwdGlvbikgOiBudWxsKSwgaWNvbkVuZEVsKSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGNsYXNzOiBDU1MuZXhwYW5kSWNvbiwgaWNvbjogdGhpcy5pY29uVHlwZSA9PT0gXCJjaGV2cm9uXCJcbiAgICAgICAgPyBcImNoZXZyb25Eb3duXCJcbiAgICAgICAgOiB0aGlzLmljb25UeXBlID09PSBcImNhcmV0XCJcbiAgICAgICAgICA/IFwiY2FyZXREb3duXCJcbiAgICAgICAgICA6IHRoaXMuZXhwYW5kZWRcbiAgICAgICAgICAgID8gXCJtaW51c1wiXG4gICAgICAgICAgICA6IFwicGx1c1wiLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSwgdGhpcy5yZW5kZXJBY3Rpb25zRW5kKCkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250ZW50IH0sIGgoXCJzbG90XCIsIG51bGwpKSkpKTtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuZWwpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgIGNhc2UgXCJFbnRlclwiOlxuICAgICAgICAgIHRoaXMuZW1pdFJlcXVlc3RlZEl0ZW0oKTtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICB1cGRhdGVBY3RpdmVJdGVtT25DaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW0gPSBldmVudC5kZXRhaWxcbiAgICAgIC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtO1xuICAgIGlmICh0aGlzLmVsLnBhcmVudE5vZGUgIT09IHRoaXMucmVxdWVzdGVkQWNjb3JkaW9uSXRlbS5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGV0ZXJtaW5lQWN0aXZlSXRlbSgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRldGVybWluZUFjdGl2ZUl0ZW0oKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25Nb2RlID0gZ2V0RWxlbWVudFByb3AodGhpcy5lbCwgXCJzZWxlY3Rpb24tbW9kZVwiLCBcIm11bHRpcGxlXCIpO1xuICAgIHN3aXRjaCAodGhpcy5zZWxlY3Rpb25Nb2RlKSB7XG4gICAgICBjYXNlIFwibXVsdGlwbGVcIjpcbiAgICAgICAgaWYgKHRoaXMuZWwgPT09IHRoaXMucmVxdWVzdGVkQWNjb3JkaW9uSXRlbSkge1xuICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzaW5nbGVcIjpcbiAgICAgICAgdGhpcy5leHBhbmRlZCA9IHRoaXMuZWwgPT09IHRoaXMucmVxdWVzdGVkQWNjb3JkaW9uSXRlbSA/ICF0aGlzLmV4cGFuZGVkIDogZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNpbmdsZS1wZXJzaXN0XCI6XG4gICAgICAgIHRoaXMuZXhwYW5kZWQgPSB0aGlzLmVsID09PSB0aGlzLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBlbWl0UmVxdWVzdGVkSXRlbSgpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFjY29yZGlvbkl0ZW1TZWxlY3QuZW1pdCh7XG4gICAgICByZXF1ZXN0ZWRBY2NvcmRpb25JdGVtOiB0aGlzLmVsXG4gICAgfSk7XG4gIH1cbiAgZ2V0SXRlbVBvc2l0aW9uKCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHRoaXMucGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWFjY29yZGlvbi1pdGVtXCIpLCB0aGlzLmVsKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuQWNjb3JkaW9uSXRlbS5zdHlsZSA9IGFjY29yZGlvbkl0ZW1Dc3M7XG5cbmV4cG9ydCB7IEFjY29yZGlvbiBhcyBjYWxjaXRlX2FjY29yZGlvbiwgQWNjb3JkaW9uSXRlbSBhcyBjYWxjaXRlX2FjY29yZGlvbl9pdGVtIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgZiBhcyBmb3JjZVVwZGF0ZSB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzJztcblxuY29uc3Qgb2JzZXJ2ZWQgPSBuZXcgU2V0KCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudC5lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBvYnNlcnZlZC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50XSBvZiBvYnNlcnZlZC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBmb3JjZVVwZGF0ZSh0YXJnZXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG4vKipcbiAqIFRoaXMgdXRpbGl0eSBlbnN1cmVzIG9ic2VydmVycyBhcmUgY3JlYXRlZCBvbmx5IGZvciBicm93c2VyIGNvbnRleHRzLlxuICpcbiAqIEBwYXJhbSB0eXBlIC0gdGhlIHR5cGUgb2Ygb2JzZXJ2ZXIgdG8gY3JlYXRlXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSB0aGUgb2JzZXJ2ZXIgY2FsbGJhY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gdGhlIG9ic2VydmVyIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgY29uc3QgT2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcih0eXBlKTtcbiAgcmV0dXJuIG5ldyBPYnNlcnZlcihjYWxsYmFjaywgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBnZXRPYnNlcnZlcih0eXBlKSB7XG4gIC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjYjaXNzdWVjb21tZW50LTEwNDk4MTQ5NDhcbiAgY2xhc3MgRXh0ZW5kZWRNdXRhdGlvbk9ic2VydmVyIGV4dGVuZHMgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XG4gICAgICBzdXBlcihjYWxsYmFjayk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgb2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeS5wdXNoKHsgdGFyZ2V0LCBvcHRpb25zIH0pO1xuICAgICAgcmV0dXJuIHN1cGVyLm9ic2VydmUodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgdW5vYnNlcnZlKHRhcmdldCkge1xuICAgICAgY29uc3QgbmV3T2JzZXJ2ZWRFbnRyaWVzID0gdGhpcy5vYnNlcnZlZEVudHJ5LmZpbHRlcigob2JzZXJ2ZWQpID0+IG9ic2VydmVkLnRhcmdldCAhPT0gdGFyZ2V0KTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayhzdXBlci50YWtlUmVjb3JkcygpLCB0aGlzKTtcbiAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgbmV3T2JzZXJ2ZWRFbnRyaWVzLmZvckVhY2goKG9ic2VydmVkKSA9PiB0aGlzLm9ic2VydmUob2JzZXJ2ZWQudGFyZ2V0LCBvYnNlcnZlZC5vcHRpb25zKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodHlwZSA9PT0gXCJpbnRlcnNlY3Rpb25cIlxuICAgICAgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICAgIDogdHlwZSA9PT0gXCJtdXRhdGlvblwiXG4gICAgICAgID8gRXh0ZW5kZWRNdXRhdGlvbk9ic2VydmVyXG4gICAgICAgIDogd2luZG93LlJlc2l6ZU9ic2VydmVyKTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlT2JzZXJ2ZXIgYXMgYyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9