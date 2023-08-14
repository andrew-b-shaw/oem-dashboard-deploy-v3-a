"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-popover_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/FloatingArrow-41635ee8.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/FloatingArrow-41635ee8.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FloatingArrow)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


const CSS = {
  arrow: "calcite-floating-ui-arrow",
  arrowStroke: "calcite-floating-ui-arrow__stroke"
};
const DEFAULTS = {
  width: 12,
  height: 6,
  strokeWidth: 1
};
/**
 * Renders a SVG element to be used as a floating-ui arrow.
 *
 * This functional component should be rendered inside a `FloatingUIComponent` when it needs an arrow element.
 *
 * @param floatingLayout.floatingLayout
 * @param floatingLayout – The effective floating layout to render the arrow vertically or horizontally. Possible values: `vertical` or `horizontal`.
 *
 * See [floating-ui](https://github.com/Esri/calcite-components/blob/master/src/utils/floating-ui.ts)
 * @param floatingLayout.key
 * @param floatingLayout.ref
 */
const FloatingArrow = ({ floatingLayout, key, ref }) => {
  const { width, height, strokeWidth } = DEFAULTS;
  const svgX = width / 2;
  const isVertical = floatingLayout === "vertical";
  const dValue = "M0,0" +
    ` H${width}` +
    ` L${width - svgX},${height}` +
    ` Q${svgX},${height} ${svgX},${height}` +
    " Z";
  return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { "aria-hidden": "true", class: CSS.arrow, height: width, key: key, ref: ref, viewBox: `0 0 ${width} ${width + (!isVertical ? strokeWidth : 0)}`, width: width + (isVertical ? strokeWidth : 0) },
    strokeWidth > 0 && ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { class: CSS.arrowStroke, d: dValue, fill: "none", "stroke-width": strokeWidth + 1 })),
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: dValue, stroke: "none" })));
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/Heading-cc52352f.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/Heading-cc52352f.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Heading),
/* harmony export */   "c": () => (/* binding */ constrainHeadingLevel)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


function constrainHeadingLevel(level) {
  return Math.min(Math.max(Math.ceil(level), 1), 6);
}
const Heading = (props, children) => {
  const HeadingTag = props.level ? `h${props.level}` : "div";
  delete props.level;
  return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(HeadingTag, { ...props }, children);
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-popover.entry.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-popover.entry.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_popover": () => (/* binding */ Popover)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floating-ui-1033e8bb.js */ "./node_modules/@esri/calcite-components/dist/esm/floating-ui-1033e8bb.js");
/* harmony import */ var _focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusTrapComponent-b3a29d9c.js */ "./node_modules/@esri/calcite-components/dist/esm/focusTrapComponent-b3a29d9c.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./openCloseComponent-a26b009f.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-a26b009f.js");
/* harmony import */ var _Heading_cc52352f_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Heading-cc52352f.js */ "./node_modules/@esri/calcite-components/dist/esm/Heading-cc52352f.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _FloatingArrow_41635ee8_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FloatingArrow-41635ee8.js */ "./node_modules/@esri/calcite-components/dist/esm/FloatingArrow-41635ee8.js");
/* harmony import */ var _debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./debounce-b9072422.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-b9072422.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
















const CSS = {
  container: "container",
  imageContainer: "image-container",
  closeButtonContainer: "close-button-container",
  closeButton: "close-button",
  content: "content",
  hasHeader: "has-header",
  header: "header",
  headerContent: "header-content",
  heading: "heading"
};
const defaultPopoverPlacement = "auto";
const ARIA_CONTROLS = "aria-controls";
const ARIA_EXPANDED = "aria-expanded";

class PopoverManager {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.registeredElements = new Map();
    this.registeredElementCount = 0;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.queryPopover = (composedPath) => {
      const { registeredElements } = this;
      const registeredElement = composedPath.find((pathEl) => registeredElements.has(pathEl));
      return registeredElements.get(registeredElement);
    };
    this.togglePopovers = (event) => {
      const composedPath = event.composedPath();
      const togglePopover = this.queryPopover(composedPath);
      if (togglePopover && !togglePopover.triggerDisabled) {
        togglePopover.open = !togglePopover.open;
      }
      Array.from(this.registeredElements.values())
        .filter((popover) => popover !== togglePopover && popover.autoClose && popover.open && !composedPath.includes(popover))
        .forEach((popover) => (popover.open = false));
    };
    this.keyHandler = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      if (event.key === "Escape") {
        this.closeAllPopovers();
      }
      else if ((0,_key_3389d870_js__WEBPACK_IMPORTED_MODULE_9__.i)(event.key)) {
        this.togglePopovers(event);
      }
    };
    this.clickHandler = (event) => {
      if ((0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__.i)(event)) {
        this.togglePopovers(event);
      }
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(referenceEl, popover) {
    this.registeredElementCount++;
    this.registeredElements.set(referenceEl, popover);
    if (this.registeredElementCount === 1) {
      this.addListeners();
    }
  }
  unregisterElement(referenceEl) {
    if (this.registeredElements.delete(referenceEl)) {
      this.registeredElementCount--;
    }
    if (this.registeredElementCount === 0) {
      this.removeListeners();
    }
  }
  closeAllPopovers() {
    Array.from(this.registeredElements.values()).forEach((popover) => (popover.open = false));
  }
  addListeners() {
    document.addEventListener("pointerdown", this.clickHandler, { capture: true });
    document.addEventListener("keydown", this.keyHandler, { capture: true });
  }
  removeListeners() {
    document.removeEventListener("pointerdown", this.clickHandler, { capture: true });
    document.removeEventListener("keydown", this.keyHandler, { capture: true });
  }
}

const popoverCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-app-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}";

const manager = new PopoverManager();
const Popover = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calcitePopoverBeforeClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calcitePopoverBeforeClose", 6);
    this.calcitePopoverClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calcitePopoverClose", 6);
    this.calcitePopoverBeforeOpen = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calcitePopoverBeforeOpen", 6);
    this.calcitePopoverOpen = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calcitePopoverOpen", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.mutationObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_11__.c)("mutation", () => this.updateFocusTrapElements());
    this.guid = `calcite-popover-${(0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_4__.g)()}`;
    this.openTransitionProp = "opacity";
    this.hasLoaded = false;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
      (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    };
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_1__.f)(flipPlacements, el)
        : null;
    };
    this.setUpReferenceElement = (warn = true) => {
      this.removeReferences();
      this.effectiveReferenceElement = this.getReferenceElement();
      (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, this.effectiveReferenceElement, this.el);
      const { el, referenceElement, effectiveReferenceElement } = this;
      if (warn && referenceElement && !effectiveReferenceElement) {
        console.warn(`${el.tagName}: reference-element id "${referenceElement}" was not found.`, {
          el
        });
      }
      this.addReferences();
    };
    this.getId = () => {
      return this.el.id || this.guid;
    };
    this.setExpandedAttr = () => {
      const { effectiveReferenceElement, open } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      if ("setAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.setAttribute(ARIA_EXPANDED, (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__.t)(open));
      }
    };
    this.addReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      const id = this.getId();
      if ("setAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.setAttribute(ARIA_CONTROLS, id);
      }
      manager.registerElement(effectiveReferenceElement, this.el);
      this.setExpandedAttr();
    };
    this.removeReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      if ("removeAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.removeAttribute(ARIA_CONTROLS);
        effectiveReferenceElement.removeAttribute(ARIA_EXPANDED);
      }
      manager.unregisterElement(effectiveReferenceElement);
    };
    this.hide = () => {
      this.open = false;
    };
    this.storeArrowEl = (el) => {
      this.arrowEl = el;
      this.reposition(true);
    };
    this.autoClose = false;
    this.closable = false;
    this.flipDisabled = false;
    this.focusTrapDisabled = false;
    this.pointerDisabled = false;
    this.flipPlacements = undefined;
    this.heading = undefined;
    this.headingLevel = undefined;
    this.label = undefined;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.offsetDistance = _floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_1__.b;
    this.offsetSkidding = 0;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = defaultPopoverPlacement;
    this.referenceElement = undefined;
    this.scale = "m";
    this.triggerDisabled = false;
    this.effectiveLocale = "";
    this.floatingLayout = "vertical";
    this.effectiveReferenceElement = undefined;
    this.defaultMessages = undefined;
  }
  handlefocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_2__.d)(this) : (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  offsetDistanceOffsetHandler() {
    this.reposition(true);
  }
  offsetSkiddingHandler() {
    this.reposition(true);
  }
  openHandler(value) {
    if (value) {
      this.reposition(true);
    }
    this.setExpandedAttr();
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  placementHandler() {
    this.reposition(true);
  }
  referenceElementHandler() {
    this.setUpReferenceElement();
    this.reposition(true);
  }
  effectiveLocaleChange() {
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_8__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.setFilteredPlacements();
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    this.setUpReferenceElement(this.hasLoaded);
    (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_8__.s)(this);
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_10__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_10__.a)(this);
    if (this.referenceElement && !this.effectiveReferenceElement) {
      this.setUpReferenceElement();
    }
    this.reposition();
    this.hasLoaded = true;
  }
  disconnectedCallback() {
    this.removeReferences();
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
    (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_1__.a)(this, this.effectiveReferenceElement, this.el);
    (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    const { el, effectiveReferenceElement, placement, overlayPositioning, flipDisabled, filteredFlipPlacements, offsetDistance, offsetSkidding, arrowEl } = this;
    return (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, {
      floatingEl: el,
      referenceEl: effectiveReferenceElement,
      overlayPositioning,
      placement,
      flipDisabled,
      flipPlacements: filteredFlipPlacements,
      offsetDistance,
      offsetSkidding,
      arrowEl,
      type: "popover"
    }, delayed);
  }
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_10__.c)(this);
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.el);
    (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__.p)(this.el);
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  async updateFocusTrapElements() {
    (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  getReferenceElement() {
    const { referenceElement, el } = this;
    return ((typeof referenceElement === "string"
      ? (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__.q)(el, { id: referenceElement })
      : referenceElement) || null);
  }
  onBeforeOpen() {
    this.calcitePopoverBeforeOpen.emit();
  }
  onOpen() {
    this.calcitePopoverOpen.emit();
    (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  onBeforeClose() {
    this.calcitePopoverBeforeClose.emit();
  }
  onClose() {
    this.calcitePopoverClose.emit();
    (0,_focusTrapComponent_b3a29d9c_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderCloseButton() {
    const { messages, closable } = this;
    return closable ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.closeButtonContainer, key: CSS.closeButtonContainer }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action", { appearance: "transparent", class: CSS.closeButton, onClick: this.hide, scale: this.scale, text: messages.close,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (closeButtonEl) => (this.closeButtonEl = closeButtonEl) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : this.scale })))) : null;
  }
  renderHeader() {
    const { heading, headingLevel } = this;
    const headingNode = heading ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_Heading_cc52352f_js__WEBPACK_IMPORTED_MODULE_6__.H, { class: CSS.heading, level: headingLevel }, heading)) : null;
    return headingNode ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.header, key: CSS.header }, headingNode, this.renderCloseButton())) : null;
  }
  render() {
    const { effectiveReferenceElement, heading, label, open, pointerDisabled, floatingLayout } = this;
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;
    const arrowNode = !pointerDisabled ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_FloatingArrow_41635ee8_js__WEBPACK_IMPORTED_MODULE_12__.F, { floatingLayout: floatingLayout, key: "floating-arrow",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeArrowEl })) : null;
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-hidden": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_3__.t)(hidden), "aria-label": label, "aria-live": "polite", "calcite-hydrated-hidden": hidden, id: this.getId(), role: "dialog" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_1__.F.animation]: true,
        [_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_1__.F.animationActive]: displayed
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTransitionEl }, arrowNode, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.hasHeader]: !!heading,
        [CSS.container]: true
      } }, this.renderHeader(), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.content }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), !heading ? this.renderCloseButton() : null))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "focusTrapDisabled": ["handlefocusTrapDisabled"],
    "flipPlacements": ["flipPlacementsHandler"],
    "messageOverrides": ["onMessagesChange"],
    "offsetDistance": ["offsetDistanceOffsetHandler"],
    "offsetSkidding": ["offsetSkiddingHandler"],
    "open": ["openHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "placement": ["placementHandler"],
    "referenceElement": ["referenceElementHandler"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Popover.style = popoverCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZmI3OTQ1MTNkMDgxM2VhMTM1MGQxYzA3Mjg0ZTk0MDguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25ELFVBQVUsNkJBQTZCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTTtBQUNmLFNBQVMsYUFBYSxHQUFHLE9BQU87QUFDaEMsU0FBUyxLQUFLLEdBQUcsUUFBUSxFQUFFLEtBQUssR0FBRyxPQUFPO0FBQzFDO0FBQ0EsVUFBVSxxREFBQyxVQUFVLDRGQUE0RixPQUFPLEVBQUUsd0NBQXdDLGtEQUFrRDtBQUNwTix3QkFBd0IscURBQUMsV0FBVyxrRkFBa0Y7QUFDdEgsSUFBSSxxREFBQyxXQUFXLDJCQUEyQjtBQUMzQzs7QUFFOEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxZQUFZO0FBQ25EO0FBQ0EsU0FBUyxxREFBQyxlQUFlLFVBQVU7QUFDbkM7O0FBRW9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQnBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0g7QUFDNkQ7QUFDbkM7QUFDcEI7QUFDdEY7QUFDc0U7QUFDaEU7QUFDa0M7QUFDb0M7QUFDbEU7QUFDMkQ7QUFDdEQ7QUFDRztBQUNqQztBQUNDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUN6RiwwQkFBMEIscURBQUMsVUFBVSxvQ0FBb0M7QUFDekU7QUFDQTtBQUNBLFlBQVksbUZBQW1GO0FBQy9GO0FBQ0E7QUFDQSwwQ0FBMEMscURBQUMsQ0FBQywwREFBYSxJQUFJO0FBQzdEO0FBQ0EsOEJBQThCO0FBQzlCLFlBQVkscURBQUMsQ0FBQyxpREFBSSxJQUFJLGVBQWUsbURBQWEsMkhBQTJILEVBQUUscURBQUMsVUFBVTtBQUMxTCxTQUFTLGlFQUFxQjtBQUM5QixTQUFTLHVFQUEyQjtBQUNwQyxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsYUFBYSxxREFBQyxVQUFVO0FBQ3pEO0FBQ0E7QUFDQSxTQUFTLHVCQUF1QixxREFBQyxVQUFVLG9CQUFvQixFQUFFLHFEQUFDO0FBQ2xFO0FBQ0EsNEJBQTRCO0FBQzVCLGFBQWEsT0FBTyxxREFBVTtBQUM5QiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZadEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vRmxvYXRpbmdBcnJvdy00MTYzNWVlOC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9IZWFkaW5nLWNjNTIzNTJmLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtcG9wb3Zlci5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9sb2FkYWJsZS1hZjE0NmZkNS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgaCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGFycm93OiBcImNhbGNpdGUtZmxvYXRpbmctdWktYXJyb3dcIixcbiAgYXJyb3dTdHJva2U6IFwiY2FsY2l0ZS1mbG9hdGluZy11aS1hcnJvd19fc3Ryb2tlXCJcbn07XG5jb25zdCBERUZBVUxUUyA9IHtcbiAgd2lkdGg6IDEyLFxuICBoZWlnaHQ6IDYsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuLyoqXG4gKiBSZW5kZXJzIGEgU1ZHIGVsZW1lbnQgdG8gYmUgdXNlZCBhcyBhIGZsb2F0aW5nLXVpIGFycm93LlxuICpcbiAqIFRoaXMgZnVuY3Rpb25hbCBjb21wb25lbnQgc2hvdWxkIGJlIHJlbmRlcmVkIGluc2lkZSBhIGBGbG9hdGluZ1VJQ29tcG9uZW50YCB3aGVuIGl0IG5lZWRzIGFuIGFycm93IGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIGZsb2F0aW5nTGF5b3V0LmZsb2F0aW5nTGF5b3V0XG4gKiBAcGFyYW0gZmxvYXRpbmdMYXlvdXQg4oCTIFRoZSBlZmZlY3RpdmUgZmxvYXRpbmcgbGF5b3V0IHRvIHJlbmRlciB0aGUgYXJyb3cgdmVydGljYWxseSBvciBob3Jpem9udGFsbHkuIFBvc3NpYmxlIHZhbHVlczogYHZlcnRpY2FsYCBvciBgaG9yaXpvbnRhbGAuXG4gKlxuICogU2VlIFtmbG9hdGluZy11aV0oaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL3NyYy91dGlscy9mbG9hdGluZy11aS50cylcbiAqIEBwYXJhbSBmbG9hdGluZ0xheW91dC5rZXlcbiAqIEBwYXJhbSBmbG9hdGluZ0xheW91dC5yZWZcbiAqL1xuY29uc3QgRmxvYXRpbmdBcnJvdyA9ICh7IGZsb2F0aW5nTGF5b3V0LCBrZXksIHJlZiB9KSA9PiB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgc3Ryb2tlV2lkdGggfSA9IERFRkFVTFRTO1xuICBjb25zdCBzdmdYID0gd2lkdGggLyAyO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gZmxvYXRpbmdMYXlvdXQgPT09IFwidmVydGljYWxcIjtcbiAgY29uc3QgZFZhbHVlID0gXCJNMCwwXCIgK1xuICAgIGAgSCR7d2lkdGh9YCArXG4gICAgYCBMJHt3aWR0aCAtIHN2Z1h9LCR7aGVpZ2h0fWAgK1xuICAgIGAgUSR7c3ZnWH0sJHtoZWlnaHR9ICR7c3ZnWH0sJHtoZWlnaHR9YCArXG4gICAgXCIgWlwiO1xuICByZXR1cm4gKGgoXCJzdmdcIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogQ1NTLmFycm93LCBoZWlnaHQ6IHdpZHRoLCBrZXk6IGtleSwgcmVmOiByZWYsIHZpZXdCb3g6IGAwIDAgJHt3aWR0aH0gJHt3aWR0aCArICghaXNWZXJ0aWNhbCA/IHN0cm9rZVdpZHRoIDogMCl9YCwgd2lkdGg6IHdpZHRoICsgKGlzVmVydGljYWwgPyBzdHJva2VXaWR0aCA6IDApIH0sXG4gICAgc3Ryb2tlV2lkdGggPiAwICYmIChoKFwicGF0aFwiLCB7IGNsYXNzOiBDU1MuYXJyb3dTdHJva2UsIGQ6IGRWYWx1ZSwgZmlsbDogXCJub25lXCIsIFwic3Ryb2tlLXdpZHRoXCI6IHN0cm9rZVdpZHRoICsgMSB9KSksXG4gICAgaChcInBhdGhcIiwgeyBkOiBkVmFsdWUsIHN0cm9rZTogXCJub25lXCIgfSkpKTtcbn07XG5cbmV4cG9ydCB7IEZsb2F0aW5nQXJyb3cgYXMgRiB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IGggfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcblxuZnVuY3Rpb24gY29uc3RyYWluSGVhZGluZ0xldmVsKGxldmVsKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChNYXRoLmNlaWwobGV2ZWwpLCAxKSwgNik7XG59XG5jb25zdCBIZWFkaW5nID0gKHByb3BzLCBjaGlsZHJlbikgPT4ge1xuICBjb25zdCBIZWFkaW5nVGFnID0gcHJvcHMubGV2ZWwgPyBgaCR7cHJvcHMubGV2ZWx9YCA6IFwiZGl2XCI7XG4gIGRlbGV0ZSBwcm9wcy5sZXZlbDtcbiAgcmV0dXJuIGgoSGVhZGluZ1RhZywgeyAuLi5wcm9wcyB9LCBjaGlsZHJlbik7XG59O1xuXG5leHBvcnQgeyBIZWFkaW5nIGFzIEgsIGNvbnN0cmFpbkhlYWRpbmdMZXZlbCBhcyBjIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBmIGFzIGZvcmNlVXBkYXRlLCBoLCBIIGFzIEhvc3QsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgZiBhcyBmaWx0ZXJDb21wdXRlZFBsYWNlbWVudHMsIGMgYXMgY29ubmVjdEZsb2F0aW5nVUksIGIgYXMgZGVmYXVsdE9mZnNldERpc3RhbmNlLCBhIGFzIGRpc2Nvbm5lY3RGbG9hdGluZ1VJLCByIGFzIHJlcG9zaXRpb24sIEYgYXMgRmxvYXRpbmdDU1MgfSBmcm9tICcuL2Zsb2F0aW5nLXVpLTEwMzNlOGJiLmpzJztcbmltcG9ydCB7IGQgYXMgZGVhY3RpdmF0ZUZvY3VzVHJhcCwgYSBhcyBhY3RpdmF0ZUZvY3VzVHJhcCwgYyBhcyBjb25uZWN0Rm9jdXNUcmFwLCB1IGFzIHVwZGF0ZUZvY3VzVHJhcEVsZW1lbnRzIH0gZnJvbSAnLi9mb2N1c1RyYXBDb21wb25lbnQtYjNhMjlkOWMuanMnO1xuaW1wb3J0IHsgaSBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCB0IGFzIHRvQXJpYUJvb2xlYW4sIHAgYXMgZm9jdXNGaXJzdFRhYmJhYmxlLCBxIGFzIHF1ZXJ5RWxlbWVudFJvb3RzIH0gZnJvbSAnLi9kb20tZjc0YTA5YjcuanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLWQ1OTQzYjgzLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuQ2xvc2VDb21wb25lbnQtYTI2YjAwOWYuanMnO1xuaW1wb3J0IHsgSCBhcyBIZWFkaW5nIH0gZnJvbSAnLi9IZWFkaW5nLWNjNTIzNTJmLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUtYjNjNDRkZGEuanMnO1xuaW1wb3J0IHsgdSBhcyB1cGRhdGVNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1hM2UxMjQyMi5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzQWN0aXZhdGlvbktleSB9IGZyb20gJy4va2V5LTMzODlkODcwLmpzJztcbmltcG9ydCB7IHMgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYSBhcyBzZXRDb21wb25lbnRMb2FkZWQsIGMgYXMgY29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS1hZjE0NmZkNS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtYzIwZWMyZGQuanMnO1xuaW1wb3J0IHsgRiBhcyBGbG9hdGluZ0Fycm93IH0gZnJvbSAnLi9GbG9hdGluZ0Fycm93LTQxNjM1ZWU4LmpzJztcbmltcG9ydCAnLi9kZWJvdW5jZS1iOTA3MjQyMi5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLWQwOGE2NzM3LmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGltYWdlQ29udGFpbmVyOiBcImltYWdlLWNvbnRhaW5lclwiLFxuICBjbG9zZUJ1dHRvbkNvbnRhaW5lcjogXCJjbG9zZS1idXR0b24tY29udGFpbmVyXCIsXG4gIGNsb3NlQnV0dG9uOiBcImNsb3NlLWJ1dHRvblwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgaGFzSGVhZGVyOiBcImhhcy1oZWFkZXJcIixcbiAgaGVhZGVyOiBcImhlYWRlclwiLFxuICBoZWFkZXJDb250ZW50OiBcImhlYWRlci1jb250ZW50XCIsXG4gIGhlYWRpbmc6IFwiaGVhZGluZ1wiXG59O1xuY29uc3QgZGVmYXVsdFBvcG92ZXJQbGFjZW1lbnQgPSBcImF1dG9cIjtcbmNvbnN0IEFSSUFfQ09OVFJPTFMgPSBcImFyaWEtY29udHJvbHNcIjtcbmNvbnN0IEFSSUFfRVhQQU5ERUQgPSBcImFyaWEtZXhwYW5kZWRcIjtcblxuY2xhc3MgUG9wb3Zlck1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgUHJvcGVydGllc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnJlZ2lzdGVyZWRFbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnJlZ2lzdGVyZWRFbGVtZW50Q291bnQgPSAwO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMucXVlcnlQb3BvdmVyID0gKGNvbXBvc2VkUGF0aCkgPT4ge1xuICAgICAgY29uc3QgeyByZWdpc3RlcmVkRWxlbWVudHMgfSA9IHRoaXM7XG4gICAgICBjb25zdCByZWdpc3RlcmVkRWxlbWVudCA9IGNvbXBvc2VkUGF0aC5maW5kKChwYXRoRWwpID0+IHJlZ2lzdGVyZWRFbGVtZW50cy5oYXMocGF0aEVsKSk7XG4gICAgICByZXR1cm4gcmVnaXN0ZXJlZEVsZW1lbnRzLmdldChyZWdpc3RlcmVkRWxlbWVudCk7XG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZVBvcG92ZXJzID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgIGNvbnN0IHRvZ2dsZVBvcG92ZXIgPSB0aGlzLnF1ZXJ5UG9wb3Zlcihjb21wb3NlZFBhdGgpO1xuICAgICAgaWYgKHRvZ2dsZVBvcG92ZXIgJiYgIXRvZ2dsZVBvcG92ZXIudHJpZ2dlckRpc2FibGVkKSB7XG4gICAgICAgIHRvZ2dsZVBvcG92ZXIub3BlbiA9ICF0b2dnbGVQb3BvdmVyLm9wZW47XG4gICAgICB9XG4gICAgICBBcnJheS5mcm9tKHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRzLnZhbHVlcygpKVxuICAgICAgICAuZmlsdGVyKChwb3BvdmVyKSA9PiBwb3BvdmVyICE9PSB0b2dnbGVQb3BvdmVyICYmIHBvcG92ZXIuYXV0b0Nsb3NlICYmIHBvcG92ZXIub3BlbiAmJiAhY29tcG9zZWRQYXRoLmluY2x1ZGVzKHBvcG92ZXIpKVxuICAgICAgICAuZm9yRWFjaCgocG9wb3ZlcikgPT4gKHBvcG92ZXIub3BlbiA9IGZhbHNlKSk7XG4gICAgfTtcbiAgICB0aGlzLmtleUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgdGhpcy5jbG9zZUFsbFBvcG92ZXJzKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0FjdGl2YXRpb25LZXkoZXZlbnQua2V5KSkge1xuICAgICAgICB0aGlzLnRvZ2dsZVBvcG92ZXJzKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkpIHtcbiAgICAgICAgdGhpcy50b2dnbGVQb3BvdmVycyhldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVnaXN0ZXJFbGVtZW50KHJlZmVyZW5jZUVsLCBwb3BvdmVyKSB7XG4gICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudENvdW50Kys7XG4gICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudHMuc2V0KHJlZmVyZW5jZUVsLCBwb3BvdmVyKTtcbiAgICBpZiAodGhpcy5yZWdpc3RlcmVkRWxlbWVudENvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuICB1bnJlZ2lzdGVyRWxlbWVudChyZWZlcmVuY2VFbCkge1xuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRFbGVtZW50cy5kZWxldGUocmVmZXJlbmNlRWwpKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWRFbGVtZW50Q291bnQtLTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudCA9PT0gMCkge1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cbiAgY2xvc2VBbGxQb3BvdmVycygpIHtcbiAgICBBcnJheS5mcm9tKHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRzLnZhbHVlcygpKS5mb3JFYWNoKChwb3BvdmVyKSA9PiAocG9wb3Zlci5vcGVuID0gZmFsc2UpKTtcbiAgfVxuICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuY2xpY2tIYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlIYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gIH1cbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCB0aGlzLmNsaWNrSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5SGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICB9XG59XG5cbmNvbnN0IHBvcG92ZXJDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLXBvcG92ZXItei1pbmRleCwgdmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1wb3B1cCkpO2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXgpfS5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb24pO3RyYW5zaXRpb24tcHJvcGVydHk6dHJhbnNmb3JtLCB2aXNpYmlsaXR5LCBvcGFjaXR5O29wYWNpdHk6MDtib3gtc2hhZG93OjAgMCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2JvcmRlci1yYWRpdXM6MC4yNXJlbX06aG9zdChbZGF0YS1wbGFjZW1lbnRePWJvdHRvbV0pIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTVweCl9Omhvc3QoW2RhdGEtcGxhY2VtZW50Xj10b3BdKSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVZKDVweCl9Omhvc3QoW2RhdGEtcGxhY2VtZW50Xj1sZWZ0XSkgLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpfTpob3N0KFtkYXRhLXBsYWNlbWVudF49cmlnaHRdKSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01cHgpfTpob3N0KFtkYXRhLXBsYWNlbWVudF0pIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW0tLWFjdGl2ZXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwKX06aG9zdChbY2FsY2l0ZS1oeWRyYXRlZC1oaWRkZW5dKXt2aXNpYmlsaXR5OmhpZGRlbiAhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOm5vbmV9LmNhbGNpdGUtZmxvYXRpbmctdWktYXJyb3d7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OmNhbGModmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCkgKiAtMSk7ZmlsbDp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9LmNhbGNpdGUtZmxvYXRpbmctdWktYXJyb3dfX3N0cm9rZXtzdHJva2U6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Omhvc3QoW3NjYWxlPXNdKSAuaGVhZGluZ3twYWRkaW5nLWlubGluZTowLjc1cmVtO3BhZGRpbmctYmxvY2s6MC41cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPW1dKSAuaGVhZGluZ3twYWRkaW5nLWlubGluZToxcmVtO3BhZGRpbmctYmxvY2s6MC43NXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPWxdKSAuaGVhZGluZ3twYWRkaW5nLWlubGluZToxLjI1cmVtO3BhZGRpbmctYmxvY2s6MXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMSk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3R7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdChbb3Blbl0pe3BvaW50ZXItZXZlbnRzOmluaXRpYWx9LmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXtib3JkZXItcmFkaXVzOjAuMjVyZW07Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfS5hcnJvdzo6YmVmb3Jle291dGxpbmU6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5oZWFkZXJ7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87YWxpZ24taXRlbXM6c3RyZXRjaDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtib3JkZXItd2lkdGg6MHB4O2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItYmxvY2stZW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5oZWFkaW5ne21hcmdpbjowcHg7ZGlzcGxheTpibG9jaztmbGV4OjEgMSBhdXRvO2FsaWduLXNlbGY6Y2VudGVyO3doaXRlLXNwYWNlOm5vcm1hbDtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO3dvcmQtd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstd29yZH0uY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtd3JhcDpub3dyYXA7Ym9yZGVyLXJhZGl1czowLjI1cmVtO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0xKX0uY29udGFpbmVyLmhhcy1oZWFkZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5jb250ZW50e2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC13cmFwOm5vd3JhcDthbGlnbi1zZWxmOmNlbnRlcjt3b3JkLXdyYXA6YnJlYWstd29yZDt3b3JkLWJyZWFrOmJyZWFrLXdvcmR9LmNsb3NlLWJ1dHRvbi1jb250YWluZXJ7ZGlzcGxheTpmbGV4O292ZXJmbG93OmhpZGRlbjtmbGV4OjAgMCBhdXRvO2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOjAuMjVyZW07Ym9yZGVyLWVuZC1lbmQtcmFkaXVzOjAuMjVyZW19OjpzbG90dGVkKGNhbGNpdGUtcGFuZWwpLDo6c2xvdHRlZChjYWxjaXRlLWZsb3cpe2Jsb2NrLXNpemU6MTAwJX1cIjtcblxuY29uc3QgbWFuYWdlciA9IG5ldyBQb3BvdmVyTWFuYWdlcigpO1xuY29uc3QgUG9wb3ZlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlUG9wb3ZlckJlZm9yZUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlUG9wb3ZlckJlZm9yZUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZVBvcG92ZXJDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVBvcG92ZXJDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVQb3BvdmVyQmVmb3JlT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVBvcG92ZXJCZWZvcmVPcGVuXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZVBvcG92ZXJPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlUG9wb3Zlck9wZW5cIiwgNik7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIFByb3BlcnRpZXNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB0aGlzLnVwZGF0ZUZvY3VzVHJhcEVsZW1lbnRzKCkpO1xuICAgIHRoaXMuZ3VpZCA9IGBjYWxjaXRlLXBvcG92ZXItJHtndWlkKCl9YDtcbiAgICB0aGlzLm9wZW5UcmFuc2l0aW9uUHJvcCA9IFwib3BhY2l0eVwiO1xuICAgIHRoaXMuaGFzTG9hZGVkID0gZmFsc2U7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkVsID0gZWw7XG4gICAgICBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIH07XG4gICAgdGhpcy5zZXRGaWx0ZXJlZFBsYWNlbWVudHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVsLCBmbGlwUGxhY2VtZW50cyB9ID0gdGhpcztcbiAgICAgIHRoaXMuZmlsdGVyZWRGbGlwUGxhY2VtZW50cyA9IGZsaXBQbGFjZW1lbnRzXG4gICAgICAgID8gZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzKGZsaXBQbGFjZW1lbnRzLCBlbClcbiAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgdGhpcy5zZXRVcFJlZmVyZW5jZUVsZW1lbnQgPSAod2FybiA9IHRydWUpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlUmVmZXJlbmNlcygpO1xuICAgICAgdGhpcy5lZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5nZXRSZWZlcmVuY2VFbGVtZW50KCk7XG4gICAgICBjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuZWwpO1xuICAgICAgY29uc3QgeyBlbCwgcmVmZXJlbmNlRWxlbWVudCwgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCB9ID0gdGhpcztcbiAgICAgIGlmICh3YXJuICYmIHJlZmVyZW5jZUVsZW1lbnQgJiYgIWVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke2VsLnRhZ05hbWV9OiByZWZlcmVuY2UtZWxlbWVudCBpZCBcIiR7cmVmZXJlbmNlRWxlbWVudH1cIiB3YXMgbm90IGZvdW5kLmAsIHtcbiAgICAgICAgICBlbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkUmVmZXJlbmNlcygpO1xuICAgIH07XG4gICAgdGhpcy5nZXRJZCA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVsLmlkIHx8IHRoaXMuZ3VpZDtcbiAgICB9O1xuICAgIHRoaXMuc2V0RXhwYW5kZWRBdHRyID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCBvcGVuIH0gPSB0aGlzO1xuICAgICAgaWYgKCFlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChcInNldEF0dHJpYnV0ZVwiIGluIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudC5zZXRBdHRyaWJ1dGUoQVJJQV9FWFBBTkRFRCwgdG9BcmlhQm9vbGVhbihvcGVuKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmFkZFJlZmVyZW5jZXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgfSA9IHRoaXM7XG4gICAgICBpZiAoIWVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaWQgPSB0aGlzLmdldElkKCk7XG4gICAgICBpZiAoXCJzZXRBdHRyaWJ1dGVcIiBpbiBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQuc2V0QXR0cmlidXRlKEFSSUFfQ09OVFJPTFMsIGlkKTtcbiAgICAgIH1cbiAgICAgIG1hbmFnZXIucmVnaXN0ZXJFbGVtZW50KGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuZWwpO1xuICAgICAgdGhpcy5zZXRFeHBhbmRlZEF0dHIoKTtcbiAgICB9O1xuICAgIHRoaXMucmVtb3ZlUmVmZXJlbmNlcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCB9ID0gdGhpcztcbiAgICAgIGlmICghZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoXCJyZW1vdmVBdHRyaWJ1dGVcIiBpbiBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKEFSSUFfQ09OVFJPTFMpO1xuICAgICAgICBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShBUklBX0VYUEFOREVEKTtcbiAgICAgIH1cbiAgICAgIG1hbmFnZXIudW5yZWdpc3RlckVsZW1lbnQoZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhpZGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB9O1xuICAgIHRoaXMuc3RvcmVBcnJvd0VsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmFycm93RWwgPSBlbDtcbiAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICB9O1xuICAgIHRoaXMuYXV0b0Nsb3NlID0gZmFsc2U7XG4gICAgdGhpcy5jbG9zYWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuZmxpcERpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c1RyYXBEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucG9pbnRlckRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mbGlwUGxhY2VtZW50cyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYWRpbmcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkaW5nTGV2ZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9mZnNldERpc3RhbmNlID0gZGVmYXVsdE9mZnNldERpc3RhbmNlO1xuICAgIHRoaXMub2Zmc2V0U2tpZGRpbmcgPSAwO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uaW5nID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMucGxhY2VtZW50ID0gZGVmYXVsdFBvcG92ZXJQbGFjZW1lbnQ7XG4gICAgdGhpcy5yZWZlcmVuY2VFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnRyaWdnZXJEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gXCJcIjtcbiAgICB0aGlzLmZsb2F0aW5nTGF5b3V0ID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIHRoaXMuZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICBoYW5kbGVmb2N1c1RyYXBEaXNhYmxlZChmb2N1c1RyYXBEaXNhYmxlZCkge1xuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvY3VzVHJhcERpc2FibGVkID8gZGVhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKSA6IGFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIGZsaXBQbGFjZW1lbnRzSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cygpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgb2Zmc2V0RGlzdGFuY2VPZmZzZXRIYW5kbGVyKCkge1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBvZmZzZXRTa2lkZGluZ0hhbmRsZXIoKSB7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIG9wZW5IYW5kbGVyKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuc2V0RXhwYW5kZWRBdHRyKCk7XG4gIH1cbiAgb3ZlcmxheVBvc2l0aW9uaW5nSGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgcGxhY2VtZW50SGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgcmVmZXJlbmNlRWxlbWVudEhhbmRsZXIoKSB7XG4gICAgdGhpcy5zZXRVcFJlZmVyZW5jZUVsZW1lbnQoKTtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMuc2V0RmlsdGVyZWRQbGFjZW1lbnRzKCk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnNldFVwUmVmZXJlbmNlRWxlbWVudCh0aGlzLmhhc0xvYWRlZCk7XG4gICAgY29ubmVjdEZvY3VzVHJhcCh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgaWYgKHRoaXMucmVmZXJlbmNlRWxlbWVudCAmJiAhdGhpcy5lZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICB0aGlzLnNldFVwUmVmZXJlbmNlRWxlbWVudCgpO1xuICAgIH1cbiAgICB0aGlzLnJlcG9zaXRpb24oKTtcbiAgICB0aGlzLmhhc0xvYWRlZCA9IHRydWU7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5yZW1vdmVSZWZlcmVuY2VzKCk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgZGlzY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5lZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCB0aGlzLmVsKTtcbiAgICBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIGRlYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0gZGVsYXllZFxuICAgKi9cbiAgYXN5bmMgcmVwb3NpdGlvbihkZWxheWVkID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IGVsLCBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCBwbGFjZW1lbnQsIG92ZXJsYXlQb3NpdGlvbmluZywgZmxpcERpc2FibGVkLCBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzLCBvZmZzZXREaXN0YW5jZSwgb2Zmc2V0U2tpZGRpbmcsIGFycm93RWwgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHJlcG9zaXRpb24odGhpcywge1xuICAgICAgZmxvYXRpbmdFbDogZWwsXG4gICAgICByZWZlcmVuY2VFbDogZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCxcbiAgICAgIG92ZXJsYXlQb3NpdGlvbmluZyxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIGZsaXBEaXNhYmxlZCxcbiAgICAgIGZsaXBQbGFjZW1lbnRzOiBmaWx0ZXJlZEZsaXBQbGFjZW1lbnRzLFxuICAgICAgb2Zmc2V0RGlzdGFuY2UsXG4gICAgICBvZmZzZXRTa2lkZGluZyxcbiAgICAgIGFycm93RWwsXG4gICAgICB0eXBlOiBcInBvcG92ZXJcIlxuICAgIH0sIGRlbGF5ZWQpO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICBmb3JjZVVwZGF0ZSh0aGlzLmVsKTtcbiAgICBmb2N1c0ZpcnN0VGFiYmFibGUodGhpcy5lbCk7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQocykgdGhhdCBhcmUgdXNlZCB3aXRoaW4gdGhlIGZvY3VzLXRyYXAgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGFzeW5jIHVwZGF0ZUZvY3VzVHJhcEVsZW1lbnRzKCkge1xuICAgIHVwZGF0ZUZvY3VzVHJhcEVsZW1lbnRzKHRoaXMpO1xuICB9XG4gIGdldFJlZmVyZW5jZUVsZW1lbnQoKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2VFbGVtZW50LCBlbCB9ID0gdGhpcztcbiAgICByZXR1cm4gKCh0eXBlb2YgcmVmZXJlbmNlRWxlbWVudCA9PT0gXCJzdHJpbmdcIlxuICAgICAgPyBxdWVyeUVsZW1lbnRSb290cyhlbCwgeyBpZDogcmVmZXJlbmNlRWxlbWVudCB9KVxuICAgICAgOiByZWZlcmVuY2VFbGVtZW50KSB8fCBudWxsKTtcbiAgfVxuICBvbkJlZm9yZU9wZW4oKSB7XG4gICAgdGhpcy5jYWxjaXRlUG9wb3ZlckJlZm9yZU9wZW4uZW1pdCgpO1xuICB9XG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLmNhbGNpdGVQb3BvdmVyT3Blbi5lbWl0KCk7XG4gICAgYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gIH1cbiAgb25CZWZvcmVDbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVQb3BvdmVyQmVmb3JlQ2xvc2UuZW1pdCgpO1xuICB9XG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlUG9wb3ZlckNsb3NlLmVtaXQoKTtcbiAgICBkZWFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJDbG9zZUJ1dHRvbigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzLCBjbG9zYWJsZSB9ID0gdGhpcztcbiAgICByZXR1cm4gY2xvc2FibGUgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY2xvc2VCdXR0b25Db250YWluZXIsIGtleTogQ1NTLmNsb3NlQnV0dG9uQ29udGFpbmVyIH0sIGgoXCJjYWxjaXRlLWFjdGlvblwiLCB7IGFwcGVhcmFuY2U6IFwidHJhbnNwYXJlbnRcIiwgY2xhc3M6IENTUy5jbG9zZUJ1dHRvbiwgb25DbGljazogdGhpcy5oaWRlLCBzY2FsZTogdGhpcy5zY2FsZSwgdGV4dDogbWVzc2FnZXMuY2xvc2UsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGNsb3NlQnV0dG9uRWwpID0+ICh0aGlzLmNsb3NlQnV0dG9uRWwgPSBjbG9zZUJ1dHRvbkVsKSB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJ4XCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogdGhpcy5zY2FsZSB9KSkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVySGVhZGVyKCkge1xuICAgIGNvbnN0IHsgaGVhZGluZywgaGVhZGluZ0xldmVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGhlYWRpbmdOb2RlID0gaGVhZGluZyA/IChoKEhlYWRpbmcsIHsgY2xhc3M6IENTUy5oZWFkaW5nLCBsZXZlbDogaGVhZGluZ0xldmVsIH0sIGhlYWRpbmcpKSA6IG51bGw7XG4gICAgcmV0dXJuIGhlYWRpbmdOb2RlID8gKGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmhlYWRlciwga2V5OiBDU1MuaGVhZGVyIH0sIGhlYWRpbmdOb2RlLCB0aGlzLnJlbmRlckNsb3NlQnV0dG9uKCkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCwgaGVhZGluZywgbGFiZWwsIG9wZW4sIHBvaW50ZXJEaXNhYmxlZCwgZmxvYXRpbmdMYXlvdXQgfSA9IHRoaXM7XG4gICAgY29uc3QgZGlzcGxheWVkID0gZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCAmJiBvcGVuO1xuICAgIGNvbnN0IGhpZGRlbiA9ICFkaXNwbGF5ZWQ7XG4gICAgY29uc3QgYXJyb3dOb2RlID0gIXBvaW50ZXJEaXNhYmxlZCA/IChoKEZsb2F0aW5nQXJyb3csIHsgZmxvYXRpbmdMYXlvdXQ6IGZsb2F0aW5nTGF5b3V0LCBrZXk6IFwiZmxvYXRpbmctYXJyb3dcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnN0b3JlQXJyb3dFbCB9KSkgOiBudWxsO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbihoaWRkZW4pLCBcImFyaWEtbGFiZWxcIjogbGFiZWwsIFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsIFwiY2FsY2l0ZS1oeWRyYXRlZC1oaWRkZW5cIjogaGlkZGVuLCBpZDogdGhpcy5nZXRJZCgpLCByb2xlOiBcImRpYWxvZ1wiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbRmxvYXRpbmdDU1MuYW5pbWF0aW9uXTogdHJ1ZSxcbiAgICAgICAgW0Zsb2F0aW5nQ1NTLmFuaW1hdGlvbkFjdGl2ZV06IGRpc3BsYXllZFxuICAgICAgfSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldFRyYW5zaXRpb25FbCB9LCBhcnJvd05vZGUsIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmhhc0hlYWRlcl06ICEhaGVhZGluZyxcbiAgICAgICAgW0NTUy5jb250YWluZXJdOiB0cnVlXG4gICAgICB9IH0sIHRoaXMucmVuZGVySGVhZGVyKCksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRlbnQgfSwgaChcInNsb3RcIiwgbnVsbCkpLCAhaGVhZGluZyA/IHRoaXMucmVuZGVyQ2xvc2VCdXR0b24oKSA6IG51bGwpKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJmb2N1c1RyYXBEaXNhYmxlZFwiOiBbXCJoYW5kbGVmb2N1c1RyYXBEaXNhYmxlZFwiXSxcbiAgICBcImZsaXBQbGFjZW1lbnRzXCI6IFtcImZsaXBQbGFjZW1lbnRzSGFuZGxlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcIm9mZnNldERpc3RhbmNlXCI6IFtcIm9mZnNldERpc3RhbmNlT2Zmc2V0SGFuZGxlclwiXSxcbiAgICBcIm9mZnNldFNraWRkaW5nXCI6IFtcIm9mZnNldFNraWRkaW5nSGFuZGxlclwiXSxcbiAgICBcIm9wZW5cIjogW1wib3BlbkhhbmRsZXJcIl0sXG4gICAgXCJvdmVybGF5UG9zaXRpb25pbmdcIjogW1wib3ZlcmxheVBvc2l0aW9uaW5nSGFuZGxlclwiXSxcbiAgICBcInBsYWNlbWVudFwiOiBbXCJwbGFjZW1lbnRIYW5kbGVyXCJdLFxuICAgIFwicmVmZXJlbmNlRWxlbWVudFwiOiBbXCJyZWZlcmVuY2VFbGVtZW50SGFuZGxlclwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxufTtcblBvcG92ZXIuc3R5bGUgPSBwb3BvdmVyQ3NzO1xuXG5leHBvcnQgeyBQb3BvdmVyIGFzIGNhbGNpdGVfcG9wb3ZlciB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmNvbnN0IHJlc29sdmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcHJvbWlzZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgc2V0cyB1cCB0aGUgY29tcG9uZW50IGZvciB0aGUgYWJpbGl0eSB0byBrbm93IHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudFdpbGxMb2FkKCk6IHZvaWQge1xuICogICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRVcExvYWRhYmxlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBwcm9taXNlTWFwLnNldChjb21wb25lbnQsIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlTWFwLnNldChjb21wb25lbnQsIHJlc29sdmUpKSk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgbGV0cyB0aGUgbG9hZGFibGUgY29tcG9uZW50IGtub3cgdGhhdCBpdCBpcyBub3cgbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBgYGBcbiAqIGNvbXBvbmVudERpZExvYWQoKTogdm9pZCB7XG4gKiAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0Q29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXNvbHZlTWFwLmdldChjb21wb25lbnQpKCk7XG59XG4vKipcbiAqIFRoaXMgaGVscGVyIHV0aWwgY2FuIGJlIHVzZWQgdG8gZW5zdXJlIGEgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZCAoVGhlIFwiY29tcG9uZW50RGlkTG9hZFwiIHN0ZW5jaWwgbGlmZWN5Y2xlIG1ldGhvZCBoYXMgYmVlbiBjYWxsZWQpLlxuICpcbiAqIFJlcXVpcmVzIFwic2V0VXBMb2FkYWJsZUNvbXBvbmVudFwiIGFuZCBcInNldENvbXBvbmVudExvYWRlZFwiIHRvIGJlIGNhbGxlZCBmaXJzdC5cbiAqXG4gKiBBIGNvbXBvbmVudCBkZXZlbG9wZXIgY2FuIGF3YWl0IHRoaXMgbWV0aG9kIGJlZm9yZSBwcm9jZWVkaW5nIHdpdGggYW55IGxvZ2ljIHRoYXQgcmVxdWlyZXMgYSBjb21wb25lbnQgdG8gYmUgbG9hZGVkIGZpcnN0LlxuICpcbiAqIGBgYFxuICogYXN5bmMgc2V0Rm9jdXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gKiAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50TG9hZGVkKGNvbXBvbmVudCkge1xuICByZXR1cm4gcHJvbWlzZU1hcC5nZXQoY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgc2V0Q29tcG9uZW50TG9hZGVkIGFzIGEsIGNvbXBvbmVudExvYWRlZCBhcyBjLCBzZXRVcExvYWRhYmxlQ29tcG9uZW50IGFzIHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==