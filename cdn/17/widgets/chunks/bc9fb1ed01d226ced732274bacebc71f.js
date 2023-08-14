"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-accordion_2_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-accordion_2.entry.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-accordion_2.entry.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_accordion": () => (/* binding */ Accordion),
/* harmony export */   "calcite_accordion_item": () => (/* binding */ AccordionItem)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditionalSlot-946fb911.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-946fb911.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */







const accordionCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}.accordion--transparent{--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-2)}";

const Accordion = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalAccordionChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalAccordionChange", 6);
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
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        "accordion--transparent": transparent,
        accordion: !transparent
      } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
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
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalAccordionItemSelect = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalAccordionItemSelect", 6);
    this.calciteInternalAccordionItemClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalAccordionItemClose", 6);
    this.calciteInternalAccordionItemRegister = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalAccordionItemRegister", 6);
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
    this.iconType = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.v)(this.el, "icon-type", "chevron");
    this.iconPosition = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.v)(this.el, "icon-position", this.iconPosition);
    this.scale = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.v)(this.el, "scale", this.scale);
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  componentDidLoad() {
    this.itemPosition = this.getItemPosition();
    this.calciteInternalAccordionItemRegister.emit({
      parent: this.parent,
      position: this.itemPosition
    });
  }
  disconnectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsStart() {
    const { el } = this;
    return (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.g)(el, SLOTS.actionsStart) ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.actionsStart }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.actionsStart }))) : null;
  }
  renderActionsEnd() {
    const { el } = this;
    return (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.g)(el, SLOTS.actionsEnd) ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.actionsEnd }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.actionsEnd }))) : null;
  }
  render() {
    const { iconFlipRtl } = this;
    const dir = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.b)(this.el);
    const iconStartEl = this.iconStart ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.iconStart, flipRtl: iconFlipRtl === "both" || iconFlipRtl === "start", icon: this.iconStart, key: "icon-start", scale: this.scale === "l" ? "m" : "s" })) : null;
    const iconEndEl = this.iconEnd ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.iconEnd, flipRtl: iconFlipRtl === "both" || iconFlipRtl === "end", icon: this.iconEnd, key: "icon-end", scale: this.scale === "l" ? "m" : "s" })) : null;
    const { description } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [`icon-position--${this.iconPosition}`]: true,
        [`icon-type--${this.iconType}`]: true
      } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS.header]: true, [_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_3__.C.rtl]: dir === "rtl" } }, this.renderActionsStart(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-expanded": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.t)(this.expanded), class: CSS.headerContent, onClick: this.itemHeaderClickHandler, role: "button", tabindex: "0" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.headerContainer }, iconStartEl, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.headerText }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.heading }, this.heading), description ? (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.description }, description) : null), iconEndEl), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { class: CSS.expandIcon, icon: this.iconType === "chevron"
        ? "chevronDown"
        : this.iconType === "caret"
          ? "caretDown"
          : this.expanded
            ? "minus"
            : "plus", scale: this.scale === "l" ? "m" : "s" })), this.renderActionsEnd()), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.content }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
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
    this.selectionMode = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.v)(this.el, "selection-mode", "multiple");
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
    const { el } = this;
    const items = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.c)(el, "calcite-accordion")?.querySelectorAll("calcite-accordion-item");
    return items ? Array.from(items).indexOf(el) : -1;
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
AccordionItem.style = accordionItemCss;




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

/***/ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createObserver)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYmM5ZmIxZWQwMWQyMjZjZWQ3MzIyNzRiYWNlYmM3MWYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ2lCO0FBQzJCO0FBQzlGO0FBQzFCO0FBQ0w7O0FBRTVCLG9DQUFvQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGlCQUFpQiw4Q0FBOEMsdUNBQXVDLG1GQUFtRixzQ0FBc0MsaUJBQWlCLGlCQUFpQiw2Q0FBNkMsd0NBQXdDLG9GQUFvRixzQ0FBc0MsaUJBQWlCLGlCQUFpQiw4Q0FBOEMscUNBQXFDLGlGQUFpRixxQ0FBcUMsb0JBQW9CLE1BQU0sa0JBQWtCLGNBQWMscUJBQXFCLG1CQUFtQiwyREFBMkQsbUVBQW1FLHdCQUF3Qiw0Q0FBNEMsZ0RBQWdELFdBQVcsaUJBQWlCLDJCQUEyQixtQkFBbUIsd0NBQXdDOztBQUUzeUY7QUFDQTtBQUNBLElBQUkscURBQWdCO0FBQ3BCLDBDQUEwQyxxREFBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQUMsVUFBVTtBQUN2QjtBQUNBO0FBQ0EsU0FBUyxFQUFFLHFEQUFDO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLE9BQU8scURBQVU7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLDJCQUEyQix3QkFBd0Isd0NBQXdDLE1BQU0seUNBQXlDLE1BQU0saUVBQWlFLGtFQUFrRSxnQkFBZ0IsYUFBYSwwQ0FBMEMsd0RBQXdELG1EQUFtRCxpREFBaUQsdURBQXVELHNCQUFzQixvREFBb0QsOENBQThDLCtFQUErRSxvQkFBb0IsNENBQTRDLGlGQUFpRiw0Q0FBNEMsZ0RBQWdELDRDQUE0QyxxREFBcUQsZ0RBQWdELG9FQUFvRSxNQUFNLGtCQUFrQixhQUFhLHNCQUFzQiwrQkFBK0IsMEJBQTBCLDBGQUEwRixzQkFBc0IsMEJBQTBCLDhCQUE4Qiw4QkFBOEIsbUJBQW1CLHlFQUF5RSxxUEFBcVAsa0JBQWtCLCtCQUErQiwyQkFBMkIsY0FBYywrQkFBK0IsMEJBQTBCLG1DQUFtQyxjQUFjLGFBQWEsb0JBQW9CLFlBQVksa0JBQWtCLFdBQVcsb0JBQW9CLCtCQUErQiwwQkFBMEIsd0RBQXdELG1FQUFtRSxtRUFBbUUsYUFBYSxhQUFhLG1CQUFtQix1REFBdUQsV0FBVyxhQUFhLG1CQUFtQix1REFBdUQseURBQXlELGtCQUFrQixpQkFBaUIsU0FBUyw4Q0FBOEMsNkJBQTZCLDRGQUE0RixnQkFBZ0Isb0JBQW9CLG1CQUFtQiwwQkFBMEIsd0RBQXdELHFCQUFxQixzQkFBc0IsZUFBZSxhQUFhLHdCQUF3QiwrQkFBK0IsbUJBQW1CLG1CQUFtQiwrQkFBK0IscUVBQXFFLGlFQUFpRSw4REFBOEQsMkJBQTJCLGtFQUFrRSwrQkFBK0IsK0JBQStCLHFFQUFxRSw2Q0FBNkMseUVBQXlFLG1CQUFtQixpQkFBaUIsWUFBWSxzQkFBc0Isa0JBQWtCLG1CQUFtQix1QkFBdUIsa0NBQWtDLGFBQWEsaUJBQWlCLGVBQWUsOENBQThDLCtCQUErQixtQkFBbUIsMkJBQTJCLCtCQUErQiw4Q0FBOEMsK0JBQStCLHdDQUF3QywrQkFBK0Isc0RBQXNELCtCQUErQixzREFBc0QsK0JBQStCLDBFQUEwRSwrQkFBK0IsaUVBQWlFLCtCQUErQixzRkFBc0YsK0JBQStCLHNGQUFzRiwrQkFBK0IsZ0JBQWdCLFlBQVksZUFBZSw4Q0FBOEMsNERBQTRELDRCQUE0QixhQUFhLG1CQUFtQiwrQkFBK0IsMEJBQTBCLHNCQUFzQiwyQkFBMkIsbUJBQW1CLDhDQUE4QywyQkFBMkI7O0FBRW5nTjtBQUNBO0FBQ0EsSUFBSSxxREFBZ0I7QUFDcEIsOENBQThDLHFEQUFXO0FBQ3pELDZDQUE2QyxxREFBVztBQUN4RCxnREFBZ0QscURBQVc7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtREFBYztBQUNsQyx3QkFBd0IsbURBQWM7QUFDdEMsaUJBQWlCLG1EQUFjO0FBQy9CLElBQUksK0RBQStCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSwrREFBa0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakIsV0FBVyxtREFBVSw0QkFBNEIscURBQUMsVUFBVSx5QkFBeUIsRUFBRSxxREFBQyxXQUFXLDBCQUEwQjtBQUM3SDtBQUNBO0FBQ0EsWUFBWSxLQUFLO0FBQ2pCLFdBQVcsbURBQVUsMEJBQTBCLHFEQUFDLFVBQVUsdUJBQXVCLEVBQUUscURBQUMsV0FBVyx3QkFBd0I7QUFDdkg7QUFDQTtBQUNBLFlBQVksY0FBYztBQUMxQixnQkFBZ0IsbURBQWE7QUFDN0IsMENBQTBDLHFEQUFDLG1CQUFtQixrS0FBa0s7QUFDaE8sc0NBQXNDLHFEQUFDLG1CQUFtQiwwSkFBMEo7QUFDcE4sWUFBWSxjQUFjO0FBQzFCLFlBQVkscURBQUMsQ0FBQyxpREFBSSxRQUFRLHFEQUFDLFVBQVU7QUFDckMsMkJBQTJCLGtCQUFrQjtBQUM3Qyx1QkFBdUIsY0FBYztBQUNyQyxTQUFTLEVBQUUscURBQUMsVUFBVSxTQUFTLHFCQUFxQix5REFBZSxvQkFBb0IsNkJBQTZCLHFEQUFDLFVBQVUsaUJBQWlCLG1EQUFhLGdIQUFnSCxFQUFFLHFEQUFDLFVBQVUsNEJBQTRCLGVBQWUscURBQUMsVUFBVSx1QkFBdUIsRUFBRSxxREFBQyxXQUFXLG9CQUFvQiwrQkFBK0IscURBQUMsV0FBVyx3QkFBd0Isb0NBQW9DLHFEQUFDLG1CQUFtQjtBQUNwZ0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCw4QkFBOEIscURBQUMsVUFBVSxvQkFBb0IsRUFBRSxxREFBQztBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1EQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVksS0FBSztBQUNqQixrQkFBa0IsbURBQWlDO0FBQ25EO0FBQ0E7QUFDQSxhQUFhLE9BQU8scURBQVU7QUFDOUI7QUFDQTs7QUFFbUY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdPbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1RDtBQUNPOztBQUU5RDtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUF3RTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5REFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RUFBd0U7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLElBQUkscURBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRXlGOzs7Ozs7Ozs7Ozs7Ozs7QUN0RHpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlCQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLWFjY29yZGlvbl8yLmVudHJ5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NvbmRpdGlvbmFsU2xvdC05NDZmYjkxMS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9vYnNlcnZlcnMtOTVlOTdmYWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgYSBhcyBnZXRFbGVtZW50LCBIIGFzIEhvc3QgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IH0gZnJvbSAnLi9jb25kaXRpb25hbFNsb3QtOTQ2ZmI5MTEuanMnO1xuaW1wb3J0IHsgdiBhcyBnZXRFbGVtZW50UHJvcCwgZyBhcyBnZXRTbG90dGVkLCBiIGFzIGdldEVsZW1lbnREaXIsIHQgYXMgdG9BcmlhQm9vbGVhbiwgYyBhcyBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkgfSBmcm9tICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5pbXBvcnQgeyBDIGFzIENTU19VVElMSVRZIH0gZnJvbSAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuaW1wb3J0ICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5pbXBvcnQgJy4vZ3VpZC03MTM2OTc0Yi5qcyc7XG5cbmNvbnN0IGFjY29yZGlvbkNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0KFtzY2FsZT1zXSl7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLXNwYWNpbmctdW5pdDowLjI1cmVtOy0tY2FsY2l0ZS1hY2NvcmRpb24taWNvbi1tYXJnaW46MC41cmVtOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1wYWRkaW5nOnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tc3BhY2luZy11bml0KSAwLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxcmVtfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLXNwYWNpbmctdW5pdDowLjVyZW07LS1jYWxjaXRlLWFjY29yZGlvbi1pY29uLW1hcmdpbjowLjc1cmVtOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1wYWRkaW5nOnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tc3BhY2luZy11bml0KSAwLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MXJlbX06aG9zdChbc2NhbGU9bF0pey0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1zcGFjaW5nLXVuaXQ6MC43NXJlbTstLWNhbGNpdGUtYWNjb3JkaW9uLWljb24tbWFyZ2luOjFyZW07LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLXBhZGRpbmc6dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1zcGFjaW5nLXVuaXQpIDFyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMjVyZW19Omhvc3R7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jazttYXgtaW5saW5lLXNpemU6MTAwJTtsaW5lLWhlaWdodDoxLjVyZW07LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWJvcmRlcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKTstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tYmFja2dyb3VuZDp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9LmFjY29yZGlvbi0tdHJhbnNwYXJlbnR7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWJvcmRlcjp0cmFuc3BhcmVudDstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tYmFja2dyb3VuZDp0cmFuc3BhcmVudH0uYWNjb3JkaW9ue2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDowcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKX1cIjtcblxuY29uc3QgQWNjb3JkaW9uID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFjY29yZGlvbkNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsQWNjb3JkaW9uQ2hhbmdlXCIsIDYpO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIFN0YXRlL1Byb3BzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoqIGNyZWF0ZWQgbGlzdCBvZiBBY2NvcmRpb24gaXRlbXMgKi9cbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgLyoqIGtlZXAgdHJhY2sgb2Ygd2hldGhlciB0aGUgaXRlbXMgaGF2ZSBiZWVuIHNvcnRlZCBzbyB3ZSBkb24ndCByZS1zb3J0ICovXG4gICAgdGhpcy5zb3J0ZWQgPSBmYWxzZTtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zb3J0SXRlbXMgPSAoaXRlbXMpID0+IGl0ZW1zLnNvcnQoKGEsIGIpID0+IGEucG9zaXRpb24gLSBiLnBvc2l0aW9uKS5tYXAoKGEpID0+IGEuaXRlbSk7XG4gICAgdGhpcy5hcHBlYXJhbmNlID0gXCJzb2xpZFwiO1xuICAgIHRoaXMuaWNvblBvc2l0aW9uID0gXCJlbmRcIjtcbiAgICB0aGlzLmljb25UeXBlID0gXCJjaGV2cm9uXCI7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMuc2VsZWN0aW9uTW9kZSA9IFwibXVsdGlwbGVcIjtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIGlmICghdGhpcy5zb3J0ZWQpIHtcbiAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLnNvcnRJdGVtcyh0aGlzLml0ZW1zKTtcbiAgICAgIHRoaXMuc29ydGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRyYW5zcGFyZW50ID0gdGhpcy5hcHBlYXJhbmNlID09PSBcInRyYW5zcGFyZW50XCI7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgXCJhY2NvcmRpb24tLXRyYW5zcGFyZW50XCI6IHRyYW5zcGFyZW50LFxuICAgICAgICBhY2NvcmRpb246ICF0cmFuc3BhcmVudFxuICAgICAgfSB9LCBoKFwic2xvdFwiLCBudWxsKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlZ2lzdGVyQ2FsY2l0ZUFjY29yZGlvbkl0ZW0oZXZlbnQpIHtcbiAgICBjb25zdCBpdGVtID0ge1xuICAgICAgaXRlbTogZXZlbnQudGFyZ2V0LFxuICAgICAgcGFyZW50OiBldmVudC5kZXRhaWwucGFyZW50LFxuICAgICAgcG9zaXRpb246IGV2ZW50LmRldGFpbC5wb3NpdGlvblxuICAgIH07XG4gICAgaWYgKHRoaXMuZWwgPT09IGl0ZW0ucGFyZW50KSB7XG4gICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIHVwZGF0ZUFjdGl2ZUl0ZW1PbkNoYW5nZShldmVudCkge1xuICAgIHRoaXMucmVxdWVzdGVkQWNjb3JkaW9uSXRlbSA9IGV2ZW50LmRldGFpbC5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsQWNjb3JkaW9uQ2hhbmdlLmVtaXQoe1xuICAgICAgcmVxdWVzdGVkQWNjb3JkaW9uSXRlbTogdGhpcy5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtXG4gICAgfSk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxufTtcbkFjY29yZGlvbi5zdHlsZSA9IGFjY29yZGlvbkNzcztcblxuY29uc3QgU0xPVFMgPSB7XG4gIGFjdGlvbnNTdGFydDogXCJhY3Rpb25zLXN0YXJ0XCIsXG4gIGFjdGlvbnNFbmQ6IFwiYWN0aW9ucy1lbmRcIlxufTtcbmNvbnN0IENTUyA9IHtcbiAgaWNvbjogXCJpY29uXCIsXG4gIGhlYWRlcjogXCJoZWFkZXJcIixcbiAgaGVhZGVyQ29udGVudDogXCJoZWFkZXItY29udGVudFwiLFxuICBhY3Rpb25zU3RhcnQ6IFwiYWN0aW9ucy1zdGFydFwiLFxuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG4gIGhlYWRlclRleHQ6IFwiaGVhZGVyLXRleHRcIixcbiAgaGVhZGluZzogXCJoZWFkaW5nXCIsXG4gIGRlc2NyaXB0aW9uOiBcImRlc2NyaXB0aW9uXCIsXG4gIGV4cGFuZEljb246IFwiZXhwYW5kLWljb25cIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGljb25TdGFydDogXCJpY29uLS1zdGFydFwiLFxuICBpY29uRW5kOiBcImljb24tLWVuZFwiLFxuICBoZWFkZXJDb250YWluZXI6IFwiaGVhZGVyLWNvbnRhaW5lclwiXG59O1xuXG5jb25zdCBhY2NvcmRpb25JdGVtQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Lmljb24tcG9zaXRpb24tLWVuZCwuaWNvbi1wb3NpdGlvbi0tc3RhcnR7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWljb24tcm90YXRpb246Y2FsYyg5MGRlZyAqIC0xKTstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tYWN0aXZlLWljb24tcm90YXRpb246MGRlZzstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taWNvbi1yb3RhdGlvbi1ydGw6OTBkZWc7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWFjdGl2ZS1pY29uLXJvdGF0aW9uLXJ0bDowZGVnfS5pY29uLXBvc2l0aW9uLS1zdGFydHstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tZmxleC1kaXJlY3Rpb246cm93LXJldmVyc2U7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWljb24tc3BhY2luZy1zdGFydDowOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1pY29uLXNwYWNpbmctZW5kOnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWljb24tbWFyZ2luKX0uaWNvbi1wb3NpdGlvbi0tZW5key0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1mbGV4LWRpcmVjdGlvbjpyb3c7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWljb24tc3BhY2luZy1zdGFydDp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pY29uLW1hcmdpbik7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWljb24tc3BhY2luZy1lbmQ6MH0uaWNvbi1wb3NpdGlvbi0tZW5kOm5vdCguaWNvbi10eXBlLS1wbHVzLW1pbnVzKXstLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taWNvbi1yb3RhdGlvbjowZGVnOy0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1hY3RpdmUtaWNvbi1yb3RhdGlvbjoxODBkZWc7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWljb24tcm90YXRpb24tcnRsOjBkZWc7LS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWFjdGl2ZS1pY29uLXJvdGF0aW9uLXJ0bDpjYWxjKDE4MGRlZyAqIC0xKX06aG9zdHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSkpfTpob3N0IC5oZWFkZXItY29udGVudHtvdXRsaW5lLWNvbG9yOnRyYW5zcGFyZW50fTpob3N0KDpmb2N1cykgLmhlYWRlci1jb250ZW50e291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweDtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAtMnB4ICpcXG4gICAgICAgICAgICBjYWxjKFxcbiAgICAgICAgICAgICAgMSAtXFxuICAgICAgICAgICAgICAyICogY2xhbXAoXFxuICAgICAgICAgICAgICAgIDAsXFxuICAgICAgICAgICAgICAgIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtb2Zmc2V0LWludmVydCksXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgIClcXG4gICAgICAgICAgICApXFxuICAgICAgICAgICl9Omhvc3QoW2V4cGFuZGVkXSl7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtleHBhbmRlZF0pIC5jb250ZW50e2Rpc3BsYXk6YmxvY2s7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KFtleHBhbmRlZF0pIC5oZWFkZXJ7Ym9yZGVyLWJsb2NrLWVuZC1jb2xvcjp0cmFuc3BhcmVudH06aG9zdCAuaGVhZGVye2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpzdHJldGNofTpob3N0IC5pY29ue3Bvc2l0aW9uOnJlbGF0aXZlO21hcmdpbjowcHg7ZGlzcGxheTppbmxpbmUtZmxleDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7dHJhbnNpdGlvbi1kdXJhdGlvbjoxNTBtczt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO21hcmdpbi1pbmxpbmUtZW5kOnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taWNvbi1zcGFjaW5nLXN0YXJ0KTttYXJnaW4taW5saW5lLXN0YXJ0OnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taWNvbi1zcGFjaW5nLWVuZCl9Lmljb24tLXN0YXJ0e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLWlubGluZS1lbmQ6dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taWNvbi1tYXJnaW4pfS5pY29uLS1lbmR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4taW5saW5lLWVuZDp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pY29uLW1hcmdpbik7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pY29uLW1hcmdpbil9LmhlYWRlci1jb250YWluZXJ7aW5saW5lLXNpemU6MTAwJX0uY29udGVudHtwYWRkaW5nOnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tcGFkZGluZyl9Omhvc3QgLmNvbnRlbnQsOmhvc3QgLmhlYWRlcntib3JkZXItYmxvY2stZW5kOjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWJvcmRlciwgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMikpfTpob3N0IC5oZWFkZXIgKntkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjt0cmFuc2l0aW9uLWR1cmF0aW9uOjE1MG1zO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7d29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay13b3JkfTpob3N0IC5jb250ZW50e2Rpc3BsYXk6bm9uZTtwYWRkaW5nLWJsb2NrLXN0YXJ0OjBweDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7dGV4dC1hbGlnbjppbml0aWFsfTpob3N0IC5leHBhbmQtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7bWFyZ2luLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWljb24tc3BhY2luZy1zdGFydCk7bWFyZ2luLWlubGluZS1lbmQ6dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1pY29uLXNwYWNpbmctZW5kKTt0cmFuc2Zvcm06cm90YXRlKHZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0taWNvbi1yb3RhdGlvbikpfS5jYWxjaXRlLS1ydGwgLmV4cGFuZC1pY29ue3RyYW5zZm9ybTpyb3RhdGUodmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1pY29uLXJvdGF0aW9uLXJ0bCkpfTpob3N0KFtleHBhbmRlZF0pIC5leHBhbmQtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7dHJhbnNmb3JtOnJvdGF0ZSh2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWFjdGl2ZS1pY29uLXJvdGF0aW9uKSl9Omhvc3QoW2V4cGFuZGVkXSkgLmNhbGNpdGUtLXJ0bCAuZXhwYW5kLWljb257dHJhbnNmb3JtOnJvdGF0ZSh2YXIoLS1jYWxjaXRlLWFjY29yZGlvbi1pdGVtLWFjdGl2ZS1pY29uLXJvdGF0aW9uLXJ0bCkpfTpob3N0IC5oZWFkZXItdGV4dHttYXJnaW4tYmxvY2s6MHB4O2ZsZXgtZ3JvdzoxO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nLWJsb2NrOjBweDt0ZXh0LWFsaWduOmluaXRpYWw7bWFyZ2luLWlubGluZS1lbmQ6YXV0b306aG9zdCAuaGVhZGluZyw6aG9zdCAuZGVzY3JpcHRpb257ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCV9Omhvc3QgLmhlYWRpbmd7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1tZWRpdW0pO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX06aG9zdCAuZGVzY3JpcHRpb257bWFyZ2luLWJsb2NrLXN0YXJ0OjAuMjVyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfTpob3N0KDpmb2N1cykgLmhlYWRpbmcsOmhvc3QoOmhvdmVyKSAuaGVhZGluZ3tjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoOmZvY3VzKSAuaWNvbiw6aG9zdCg6aG92ZXIpIC5pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX06aG9zdCg6Zm9jdXMpIC5leHBhbmQtaWNvbiw6aG9zdCg6aG92ZXIpIC5leHBhbmQtaWNvbntjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9Omhvc3QoOmZvY3VzKSAuZGVzY3JpcHRpb24sOmhvc3QoOmhvdmVyKSAuZGVzY3JpcHRpb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfTpob3N0KDpmb2N1cykgLmhlYWRpbmcsOmhvc3QoOmFjdGl2ZSkgLmhlYWRpbmcsOmhvc3QoW2V4cGFuZGVkXSkgLmhlYWRpbmd7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KDpmb2N1cykgLmljb24sOmhvc3QoOmFjdGl2ZSkgLmljb24sOmhvc3QoW2V4cGFuZGVkXSkgLmljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KDpmb2N1cykgLmV4cGFuZC1pY29uLDpob3N0KDphY3RpdmUpIC5leHBhbmQtaWNvbiw6aG9zdChbZXhwYW5kZWRdKSAuZXhwYW5kLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfTpob3N0KDpmb2N1cykgLmRlc2NyaXB0aW9uLDpob3N0KDphY3RpdmUpIC5kZXNjcmlwdGlvbiw6aG9zdChbZXhwYW5kZWRdKSAuZGVzY3JpcHRpb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5oZWFkZXItY29udGVudHtmbGV4LWdyb3c6MTtjdXJzb3I6cG9pbnRlcjtwYWRkaW5nOnZhcigtLWNhbGNpdGUtYWNjb3JkaW9uLWl0ZW0tcGFkZGluZyk7ZmxleC1kaXJlY3Rpb246dmFyKC0tY2FsY2l0ZS1hY2NvcmRpb24taXRlbS1mbGV4LWRpcmVjdGlvbil9LmFjdGlvbnMtc3RhcnQsLmFjdGlvbnMtZW5ke2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXJ9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpezpob3N0KFtleHBhbmRlZF0pIC5oZWFkZXJ7Ym9yZGVyLWJsb2NrLWVuZDpub25lfTpob3N0KFtleHBhbmRlZF0pIC5oZWFkaW5ne2ZvbnQtd2VpZ2h0OmJvbGRlcn06aG9zdCg6aG92ZXIpIC5oZWFkaW5nLDpob3N0KDpmb2N1cykgLmhlYWRpbmd7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX19XCI7XG5cbmNvbnN0IEFjY29yZGlvbkl0ZW0gPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsQWNjb3JkaW9uSXRlbVNlbGVjdCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsQWNjb3JkaW9uSXRlbVNlbGVjdFwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFjY29yZGlvbkl0ZW1DbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsQWNjb3JkaW9uSXRlbUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsQWNjb3JkaW9uSXRlbVJlZ2lzdGVyID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxBY2NvcmRpb25JdGVtUmVnaXN0ZXJcIiwgNik7XG4gICAgLyoqIHdoYXQgaWNvbiBwb3NpdGlvbiBkb2VzIHRoZSBwYXJlbnQgYWNjb3JkaW9uIHNwZWNpZnkgKi9cbiAgICB0aGlzLmljb25Qb3NpdGlvbiA9IFwiZW5kXCI7XG4gICAgLyoqIGhhbmRsZSBjbGlja3Mgb24gaXRlbSBoZWFkZXIgKi9cbiAgICB0aGlzLml0ZW1IZWFkZXJDbGlja0hhbmRsZXIgPSAoKSA9PiB0aGlzLmVtaXRSZXF1ZXN0ZWRJdGVtKCk7XG4gICAgLyoqIFNwZWNpZmllcyB0aGUgc2NhbGUgb2YgdGhlIGBhY2NvcmRpb24taXRlbWAgY29udHJvbGxlZCBieSB0aGUgcGFyZW50LCBkZWZhdWx0cyB0byBtICovXG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhlYWRpbmcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25TdGFydCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25FbmQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pY29uRmxpcFJ0bCA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnBhcmVudCA9IHRoaXMuZWwucGFyZW50RWxlbWVudDtcbiAgICB0aGlzLmljb25UeXBlID0gZ2V0RWxlbWVudFByb3AodGhpcy5lbCwgXCJpY29uLXR5cGVcIiwgXCJjaGV2cm9uXCIpO1xuICAgIHRoaXMuaWNvblBvc2l0aW9uID0gZ2V0RWxlbWVudFByb3AodGhpcy5lbCwgXCJpY29uLXBvc2l0aW9uXCIsIHRoaXMuaWNvblBvc2l0aW9uKTtcbiAgICB0aGlzLnNjYWxlID0gZ2V0RWxlbWVudFByb3AodGhpcy5lbCwgXCJzY2FsZVwiLCB0aGlzLnNjYWxlKTtcbiAgICBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgdGhpcy5pdGVtUG9zaXRpb24gPSB0aGlzLmdldEl0ZW1Qb3NpdGlvbigpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsQWNjb3JkaW9uSXRlbVJlZ2lzdGVyLmVtaXQoe1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLml0ZW1Qb3NpdGlvblxuICAgIH0pO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckFjdGlvbnNTdGFydCgpIHtcbiAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgIHJldHVybiBnZXRTbG90dGVkKGVsLCBTTE9UUy5hY3Rpb25zU3RhcnQpID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmFjdGlvbnNTdGFydCB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmFjdGlvbnNTdGFydCB9KSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJBY3Rpb25zRW5kKCkge1xuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XG4gICAgcmV0dXJuIGdldFNsb3R0ZWQoZWwsIFNMT1RTLmFjdGlvbnNFbmQpID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmFjdGlvbnNFbmQgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5hY3Rpb25zRW5kIH0pKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGljb25GbGlwUnRsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIodGhpcy5lbCk7XG4gICAgY29uc3QgaWNvblN0YXJ0RWwgPSB0aGlzLmljb25TdGFydCA/IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5pY29uU3RhcnQsIGZsaXBSdGw6IGljb25GbGlwUnRsID09PSBcImJvdGhcIiB8fCBpY29uRmxpcFJ0bCA9PT0gXCJzdGFydFwiLCBpY29uOiB0aGlzLmljb25TdGFydCwga2V5OiBcImljb24tc3RhcnRcIiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkgOiBudWxsO1xuICAgIGNvbnN0IGljb25FbmRFbCA9IHRoaXMuaWNvbkVuZCA/IChoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5pY29uRW5kLCBmbGlwUnRsOiBpY29uRmxpcFJ0bCA9PT0gXCJib3RoXCIgfHwgaWNvbkZsaXBSdGwgPT09IFwiZW5kXCIsIGljb246IHRoaXMuaWNvbkVuZCwga2V5OiBcImljb24tZW5kXCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpIDogbnVsbDtcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW2BpY29uLXBvc2l0aW9uLS0ke3RoaXMuaWNvblBvc2l0aW9ufWBdOiB0cnVlLFxuICAgICAgICBbYGljb24tdHlwZS0tJHt0aGlzLmljb25UeXBlfWBdOiB0cnVlXG4gICAgICB9IH0sIGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmhlYWRlcl06IHRydWUsIFtDU1NfVVRJTElUWS5ydGxdOiBkaXIgPT09IFwicnRsXCIgfSB9LCB0aGlzLnJlbmRlckFjdGlvbnNTdGFydCgpLCBoKFwiZGl2XCIsIHsgXCJhcmlhLWV4cGFuZGVkXCI6IHRvQXJpYUJvb2xlYW4odGhpcy5leHBhbmRlZCksIGNsYXNzOiBDU1MuaGVhZGVyQ29udGVudCwgb25DbGljazogdGhpcy5pdGVtSGVhZGVyQ2xpY2tIYW5kbGVyLCByb2xlOiBcImJ1dHRvblwiLCB0YWJpbmRleDogXCIwXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyQ29udGFpbmVyIH0sIGljb25TdGFydEVsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5oZWFkZXJUZXh0IH0sIGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUy5oZWFkaW5nIH0sIHRoaXMuaGVhZGluZyksIGRlc2NyaXB0aW9uID8gaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLmRlc2NyaXB0aW9uIH0sIGRlc2NyaXB0aW9uKSA6IG51bGwpLCBpY29uRW5kRWwpLCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgY2xhc3M6IENTUy5leHBhbmRJY29uLCBpY29uOiB0aGlzLmljb25UeXBlID09PSBcImNoZXZyb25cIlxuICAgICAgICA/IFwiY2hldnJvbkRvd25cIlxuICAgICAgICA6IHRoaXMuaWNvblR5cGUgPT09IFwiY2FyZXRcIlxuICAgICAgICAgID8gXCJjYXJldERvd25cIlxuICAgICAgICAgIDogdGhpcy5leHBhbmRlZFxuICAgICAgICAgICAgPyBcIm1pbnVzXCJcbiAgICAgICAgICAgIDogXCJwbHVzXCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpLCB0aGlzLnJlbmRlckFjdGlvbnNFbmQoKSksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRlbnQgfSwgaChcInNsb3RcIiwgbnVsbCkpKSkpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5lbCkge1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICAgICAgdGhpcy5lbWl0UmVxdWVzdGVkSXRlbSgpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHVwZGF0ZUFjdGl2ZUl0ZW1PbkNoYW5nZShldmVudCkge1xuICAgIHRoaXMucmVxdWVzdGVkQWNjb3JkaW9uSXRlbSA9IGV2ZW50LmRldGFpbFxuICAgICAgLnJlcXVlc3RlZEFjY29yZGlvbkl0ZW07XG4gICAgaWYgKHRoaXMuZWwucGFyZW50Tm9kZSAhPT0gdGhpcy5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtLnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kZXRlcm1pbmVBY3RpdmVJdGVtKCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGV0ZXJtaW5lQWN0aXZlSXRlbSgpIHtcbiAgICB0aGlzLnNlbGVjdGlvbk1vZGUgPSBnZXRFbGVtZW50UHJvcCh0aGlzLmVsLCBcInNlbGVjdGlvbi1tb2RlXCIsIFwibXVsdGlwbGVcIik7XG4gICAgc3dpdGNoICh0aGlzLnNlbGVjdGlvbk1vZGUpIHtcbiAgICAgIGNhc2UgXCJtdWx0aXBsZVwiOlxuICAgICAgICBpZiAodGhpcy5lbCA9PT0gdGhpcy5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtKSB7XG4gICAgICAgICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNpbmdsZVwiOlxuICAgICAgICB0aGlzLmV4cGFuZGVkID0gdGhpcy5lbCA9PT0gdGhpcy5yZXF1ZXN0ZWRBY2NvcmRpb25JdGVtID8gIXRoaXMuZXhwYW5kZWQgOiBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2luZ2xlLXBlcnNpc3RcIjpcbiAgICAgICAgdGhpcy5leHBhbmRlZCA9IHRoaXMuZWwgPT09IHRoaXMucmVxdWVzdGVkQWNjb3JkaW9uSXRlbTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGVtaXRSZXF1ZXN0ZWRJdGVtKCkge1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsQWNjb3JkaW9uSXRlbVNlbGVjdC5lbWl0KHtcbiAgICAgIHJlcXVlc3RlZEFjY29yZGlvbkl0ZW06IHRoaXMuZWxcbiAgICB9KTtcbiAgfVxuICBnZXRJdGVtUG9zaXRpb24oKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBpdGVtcyA9IGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeShlbCwgXCJjYWxjaXRlLWFjY29yZGlvblwiKT8ucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtYWNjb3JkaW9uLWl0ZW1cIik7XG4gICAgcmV0dXJuIGl0ZW1zID8gQXJyYXkuZnJvbShpdGVtcykuaW5kZXhPZihlbCkgOiAtMTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuQWNjb3JkaW9uSXRlbS5zdHlsZSA9IGFjY29yZGlvbkl0ZW1Dc3M7XG5cbmV4cG9ydCB7IEFjY29yZGlvbiBhcyBjYWxjaXRlX2FjY29yZGlvbiwgQWNjb3JkaW9uSXRlbSBhcyBjYWxjaXRlX2FjY29yZGlvbl9pdGVtIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgZiBhcyBmb3JjZVVwZGF0ZSB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcblxuY29uc3Qgb2JzZXJ2ZWQgPSBuZXcgU2V0KCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudC5lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBvYnNlcnZlZC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50XSBvZiBvYnNlcnZlZC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBmb3JjZVVwZGF0ZSh0YXJnZXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG4vKipcbiAqIFRoaXMgdXRpbGl0eSBlbnN1cmVzIG9ic2VydmVycyBhcmUgY3JlYXRlZCBvbmx5IGZvciBicm93c2VyIGNvbnRleHRzLlxuICpcbiAqIEBwYXJhbSB0eXBlIC0gdGhlIHR5cGUgb2Ygb2JzZXJ2ZXIgdG8gY3JlYXRlXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSB0aGUgb2JzZXJ2ZXIgY2FsbGJhY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gdGhlIG9ic2VydmVyIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIodHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgY29uc3QgT2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcih0eXBlKTtcbiAgcmV0dXJuIG5ldyBPYnNlcnZlcihjYWxsYmFjaywgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBnZXRPYnNlcnZlcih0eXBlKSB7XG4gIC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjYjaXNzdWVjb21tZW50LTEwNDk4MTQ5NDhcbiAgY2xhc3MgRXh0ZW5kZWRNdXRhdGlvbk9ic2VydmVyIGV4dGVuZHMgd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XG4gICAgICBzdXBlcihjYWxsYmFjayk7XG4gICAgICB0aGlzLm9ic2VydmVkRW50cnkgPSBbXTtcbiAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgb2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeS5wdXNoKHsgdGFyZ2V0LCBvcHRpb25zIH0pO1xuICAgICAgcmV0dXJuIHN1cGVyLm9ic2VydmUodGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgdW5vYnNlcnZlKHRhcmdldCkge1xuICAgICAgY29uc3QgbmV3T2JzZXJ2ZWRFbnRyaWVzID0gdGhpcy5vYnNlcnZlZEVudHJ5LmZpbHRlcigob2JzZXJ2ZWQpID0+IG9ic2VydmVkLnRhcmdldCAhPT0gdGFyZ2V0KTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayhzdXBlci50YWtlUmVjb3JkcygpLCB0aGlzKTtcbiAgICAgIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgbmV3T2JzZXJ2ZWRFbnRyaWVzLmZvckVhY2goKG9ic2VydmVkKSA9PiB0aGlzLm9ic2VydmUob2JzZXJ2ZWQudGFyZ2V0LCBvYnNlcnZlZC5vcHRpb25zKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodHlwZSA9PT0gXCJpbnRlcnNlY3Rpb25cIlxuICAgICAgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICAgIDogdHlwZSA9PT0gXCJtdXRhdGlvblwiXG4gICAgICAgID8gRXh0ZW5kZWRNdXRhdGlvbk9ic2VydmVyXG4gICAgICAgIDogd2luZG93LlJlc2l6ZU9ic2VydmVyKTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlT2JzZXJ2ZXIgYXMgYyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9