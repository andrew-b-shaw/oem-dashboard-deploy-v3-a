"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-popover_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/FloatingArrow-024dce3b.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/FloatingArrow-024dce3b.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FloatingArrow)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
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
  return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { "aria-hidden": "true", class: CSS.arrow, height: width, key: key, ref: ref, viewBox: `0 0 ${width} ${width + (!isVertical ? strokeWidth : 0)}`, width: width + (isVertical ? strokeWidth : 0) },
    strokeWidth > 0 && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { class: CSS.arrowStroke, d: dValue, fill: "none", "stroke-width": strokeWidth + 1 })),
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: dValue, stroke: "none" })));
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/Heading-ce737456.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/Heading-ce737456.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Heading),
/* harmony export */   "c": () => (/* binding */ constrainHeadingLevel)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */


function constrainHeadingLevel(level) {
  return Math.min(Math.max(Math.ceil(level), 1), 6);
}
const Heading = (props, children) => {
  const HeadingTag = props.level ? `h${props.level}` : "div";
  delete props.level;
  return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(HeadingTag, { ...props }, children);
};




/***/ }),

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

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-popover.entry.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-popover.entry.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_popover": () => (/* binding */ Popover)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floating-ui-8d547175.js */ "./node_modules/@esri/calcite-components/dist/esm/floating-ui-8d547175.js");
/* harmony import */ var _focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusTrapComponent-07adcb3f.js */ "./node_modules/@esri/calcite-components/dist/esm/focusTrapComponent-07adcb3f.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./openCloseComponent-21d2a6ab.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-21d2a6ab.js");
/* harmony import */ var _Heading_ce737456_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Heading-ce737456.js */ "./node_modules/@esri/calcite-components/dist/esm/Heading-ce737456.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _FloatingArrow_024dce3b_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FloatingArrow-024dce3b.js */ "./node_modules/@esri/calcite-components/dist/esm/FloatingArrow-024dce3b.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
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
      else if ((0,_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_9__.i)(event.key)) {
        this.togglePopovers(event);
      }
    };
    this.clickHandler = (event) => {
      if ((0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__.i)(event)) {
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
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calcitePopoverBeforeClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calcitePopoverBeforeClose", 6);
    this.calcitePopoverClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calcitePopoverClose", 6);
    this.calcitePopoverBeforeOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calcitePopoverBeforeOpen", 6);
    this.calcitePopoverOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calcitePopoverOpen", 6);
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_11__.c)("mutation", () => this.updateFocusTrapElements());
    this.guid = `calcite-popover-${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_4__.g)()}`;
    this.openTransitionProp = "opacity";
    this.hasLoaded = false;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
      (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    };
    this.setFilteredPlacements = () => {
      const { el, flipPlacements } = this;
      this.filteredFlipPlacements = flipPlacements
        ? (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_1__.f)(flipPlacements, el)
        : null;
    };
    this.setUpReferenceElement = (warn = true) => {
      this.removeReferences();
      this.effectiveReferenceElement = this.getReferenceElement();
      (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_1__.c)(this, this.effectiveReferenceElement, this.el);
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
        effectiveReferenceElement.setAttribute(ARIA_EXPANDED, (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__.t)(open));
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
    this.offsetDistance = _floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_1__.b;
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
    focusTrapDisabled ? (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_2__.d)(this) : (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
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
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_8__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.setFilteredPlacements();
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    this.setUpReferenceElement(this.hasLoaded);
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_8__.s)(this);
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_10__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_10__.a)(this);
    if (this.referenceElement && !this.effectiveReferenceElement) {
      this.setUpReferenceElement();
    }
    this.reposition();
    this.hasLoaded = true;
  }
  disconnectedCallback() {
    this.removeReferences();
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
    (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_1__.a)(this, this.effectiveReferenceElement, this.el);
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
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
    return (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, {
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
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_10__.c)(this);
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.f)(this.el);
    (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__.p)(this.el);
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  async updateFocusTrapElements() {
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_2__.u)(this);
  }
  getReferenceElement() {
    const { referenceElement, el } = this;
    return ((typeof referenceElement === "string"
      ? (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__.q)(el, { id: referenceElement })
      : referenceElement) || null);
  }
  onBeforeOpen() {
    this.calcitePopoverBeforeOpen.emit();
  }
  onOpen() {
    this.calcitePopoverOpen.emit();
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  onBeforeClose() {
    this.calcitePopoverBeforeClose.emit();
  }
  onClose() {
    this.calcitePopoverClose.emit();
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderCloseButton() {
    const { messages, closable } = this;
    return closable ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.closeButtonContainer, key: CSS.closeButtonContainer }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action", { appearance: "transparent", class: CSS.closeButton, onClick: this.hide, scale: this.scale, text: messages.close,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (closeButtonEl) => (this.closeButtonEl = closeButtonEl) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : this.scale })))) : null;
  }
  renderHeader() {
    const { heading, headingLevel } = this;
    const headingNode = heading ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_Heading_ce737456_js__WEBPACK_IMPORTED_MODULE_6__.H, { class: CSS.heading, level: headingLevel }, heading)) : null;
    return headingNode ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.header, key: CSS.header }, headingNode, this.renderCloseButton())) : null;
  }
  render() {
    const { effectiveReferenceElement, heading, label, open, pointerDisabled, floatingLayout } = this;
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;
    const arrowNode = !pointerDisabled ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_FloatingArrow_024dce3b_js__WEBPACK_IMPORTED_MODULE_12__.F, { floatingLayout: floatingLayout, key: "floating-arrow",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeArrowEl })) : null;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-hidden": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__.t)(hidden), "aria-label": label, "aria-live": "polite", "calcite-hydrated-hidden": hidden, id: this.getId(), role: "dialog" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_1__.F.animation]: true,
        [_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_1__.F.animationActive]: displayed
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTransitionEl }, arrowNode, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.hasHeader]: !!heading,
        [CSS.container]: true
      } }, this.renderHeader(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.content }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), !heading ? this.renderCloseButton() : null))));
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMDBkMmVhZjM3ZWQwNTA4NzE0MDU2NTFhNmVkY2MwOWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25ELFVBQVUsNkJBQTZCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTTtBQUNmLFNBQVMsYUFBYSxHQUFHLE9BQU87QUFDaEMsU0FBUyxLQUFLLEdBQUcsUUFBUSxFQUFFLEtBQUssR0FBRyxPQUFPO0FBQzFDO0FBQ0EsVUFBVSxxREFBQyxVQUFVLDRGQUE0RixPQUFPLEVBQUUsd0NBQXdDLGtEQUFrRDtBQUNwTix3QkFBd0IscURBQUMsV0FBVyxrRkFBa0Y7QUFDdEgsSUFBSSxxREFBQyxXQUFXLDJCQUEyQjtBQUMzQzs7QUFFOEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxZQUFZO0FBQ25EO0FBQ0EsU0FBUyxxREFBQyxlQUFlLFVBQVU7QUFDbkM7O0FBRW9EOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQixRQUFRLE1BQU0sR0FBRyxRQUFRO0FBQ3BFO0FBQ0E7O0FBRTBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0g7QUFDNkQ7QUFDbkM7QUFDcEI7QUFDdEY7QUFDc0U7QUFDaEU7QUFDa0M7QUFDb0M7QUFDbEU7QUFDMkQ7QUFDdEQ7QUFD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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9GbG9hdGluZ0Fycm93LTAyNGRjZTNiLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL0hlYWRpbmctY2U3Mzc0NTYuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vYnJvd3Nlci05OWJjNjJjZi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLXBvcG92ZXIuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vbG9hZGFibGUtODA1OGUzMDAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGggfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBhcnJvdzogXCJjYWxjaXRlLWZsb2F0aW5nLXVpLWFycm93XCIsXG4gIGFycm93U3Ryb2tlOiBcImNhbGNpdGUtZmxvYXRpbmctdWktYXJyb3dfX3N0cm9rZVwiXG59O1xuY29uc3QgREVGQVVMVFMgPSB7XG4gIHdpZHRoOiAxMixcbiAgaGVpZ2h0OiA2LFxuICBzdHJva2VXaWR0aDogMVxufTtcbi8qKlxuICogUmVuZGVycyBhIFNWRyBlbGVtZW50IHRvIGJlIHVzZWQgYXMgYSBmbG9hdGluZy11aSBhcnJvdy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50IHNob3VsZCBiZSByZW5kZXJlZCBpbnNpZGUgYSBgRmxvYXRpbmdVSUNvbXBvbmVudGAgd2hlbiBpdCBuZWVkcyBhbiBhcnJvdyBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBmbG9hdGluZ0xheW91dC5mbG9hdGluZ0xheW91dFxuICogQHBhcmFtIGZsb2F0aW5nTGF5b3V0IOKAkyBUaGUgZWZmZWN0aXZlIGZsb2F0aW5nIGxheW91dCB0byByZW5kZXIgdGhlIGFycm93IHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LiBQb3NzaWJsZSB2YWx1ZXM6IGB2ZXJ0aWNhbGAgb3IgYGhvcml6b250YWxgLlxuICpcbiAqIFNlZSBbZmxvYXRpbmctdWldKGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9zcmMvdXRpbHMvZmxvYXRpbmctdWkudHMpXG4gKiBAcGFyYW0gZmxvYXRpbmdMYXlvdXQua2V5XG4gKiBAcGFyYW0gZmxvYXRpbmdMYXlvdXQucmVmXG4gKi9cbmNvbnN0IEZsb2F0aW5nQXJyb3cgPSAoeyBmbG9hdGluZ0xheW91dCwga2V5LCByZWYgfSkgPT4ge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHN0cm9rZVdpZHRoIH0gPSBERUZBVUxUUztcbiAgY29uc3Qgc3ZnWCA9IHdpZHRoIC8gMjtcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IGZsb2F0aW5nTGF5b3V0ID09PSBcInZlcnRpY2FsXCI7XG4gIGNvbnN0IGRWYWx1ZSA9IFwiTTAsMFwiICtcbiAgICBgIEgke3dpZHRofWAgK1xuICAgIGAgTCR7d2lkdGggLSBzdmdYfSwke2hlaWdodH1gICtcbiAgICBgIFEke3N2Z1h9LCR7aGVpZ2h0fSAke3N2Z1h9LCR7aGVpZ2h0fWAgK1xuICAgIFwiIFpcIjtcbiAgcmV0dXJuIChoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IENTUy5hcnJvdywgaGVpZ2h0OiB3aWR0aCwga2V5OiBrZXksIHJlZjogcmVmLCB2aWV3Qm94OiBgMCAwICR7d2lkdGh9ICR7d2lkdGggKyAoIWlzVmVydGljYWwgPyBzdHJva2VXaWR0aCA6IDApfWAsIHdpZHRoOiB3aWR0aCArIChpc1ZlcnRpY2FsID8gc3Ryb2tlV2lkdGggOiAwKSB9LFxuICAgIHN0cm9rZVdpZHRoID4gMCAmJiAoaChcInBhdGhcIiwgeyBjbGFzczogQ1NTLmFycm93U3Ryb2tlLCBkOiBkVmFsdWUsIGZpbGw6IFwibm9uZVwiLCBcInN0cm9rZS13aWR0aFwiOiBzdHJva2VXaWR0aCArIDEgfSkpLFxuICAgIGgoXCJwYXRoXCIsIHsgZDogZFZhbHVlLCBzdHJva2U6IFwibm9uZVwiIH0pKSk7XG59O1xuXG5leHBvcnQgeyBGbG9hdGluZ0Fycm93IGFzIEYgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBoIH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5cbmZ1bmN0aW9uIGNvbnN0cmFpbkhlYWRpbmdMZXZlbChsZXZlbCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoTWF0aC5jZWlsKGxldmVsKSwgMSksIDYpO1xufVxuY29uc3QgSGVhZGluZyA9IChwcm9wcywgY2hpbGRyZW4pID0+IHtcbiAgY29uc3QgSGVhZGluZ1RhZyA9IHByb3BzLmxldmVsID8gYGgke3Byb3BzLmxldmVsfWAgOiBcImRpdlwiO1xuICBkZWxldGUgcHJvcHMubGV2ZWw7XG4gIHJldHVybiBoKEhlYWRpbmdUYWcsIHsgLi4ucHJvcHMgfSwgY2hpbGRyZW4pO1xufTtcblxuZXhwb3J0IHsgSGVhZGluZyBhcyBILCBjb25zdHJhaW5IZWFkaW5nTGV2ZWwgYXMgYyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudERhdGEoKSB7XG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YTtcbn1cbmZ1bmN0aW9uIGdldFVzZXJBZ2VudFN0cmluZygpIHtcbiAgY29uc3QgdWFEYXRhID0gZ2V0VXNlckFnZW50RGF0YSgpO1xuICByZXR1cm4gdWFEYXRhPy5icmFuZHNcbiAgICA/IHVhRGF0YS5icmFuZHMubWFwKCh7IGJyYW5kLCB2ZXJzaW9uIH0pID0+IGAke2JyYW5kfS8ke3ZlcnNpb259YCkuam9pbihcIiBcIilcbiAgICA6IG5hdmlnYXRvci51c2VyQWdlbnQ7XG59XG5cbmV4cG9ydCB7IGdldFVzZXJBZ2VudERhdGEgYXMgYSwgZ2V0VXNlckFnZW50U3RyaW5nIGFzIGcgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGYgYXMgZm9yY2VVcGRhdGUsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBmIGFzIGZpbHRlckNvbXB1dGVkUGxhY2VtZW50cywgYyBhcyBjb25uZWN0RmxvYXRpbmdVSSwgYiBhcyBkZWZhdWx0T2Zmc2V0RGlzdGFuY2UsIGEgYXMgZGlzY29ubmVjdEZsb2F0aW5nVUksIHIgYXMgcmVwb3NpdGlvbiwgRiBhcyBGbG9hdGluZ0NTUyB9IGZyb20gJy4vZmxvYXRpbmctdWktOGQ1NDcxNzUuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWFjdGl2YXRlRm9jdXNUcmFwLCBhIGFzIGFjdGl2YXRlRm9jdXNUcmFwLCBjIGFzIGNvbm5lY3RGb2N1c1RyYXAsIHUgYXMgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHMgfSBmcm9tICcuL2ZvY3VzVHJhcENvbXBvbmVudC0wN2FkY2IzZi5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzUHJpbWFyeVBvaW50ZXJCdXR0b24sIHQgYXMgdG9BcmlhQm9vbGVhbiwgcCBhcyBmb2N1c0ZpcnN0VGFiYmFibGUsIHEgYXMgcXVlcnlFbGVtZW50Um9vdHMgfSBmcm9tICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQgfSBmcm9tICcuL29wZW5DbG9zZUNvbXBvbmVudC0yMWQyYTZhYi5qcyc7XG5pbXBvcnQgeyBIIGFzIEhlYWRpbmcgfSBmcm9tICcuL0hlYWRpbmctY2U3Mzc0NTYuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLWZhYzEzMzk0LmpzJztcbmltcG9ydCB7IGkgYXMgaXNBY3RpdmF0aW9uS2V5IH0gZnJvbSAnLi9rZXktOGZmMGQxMDEuanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLTgwNThlMzAwLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5pbXBvcnQgeyBGIGFzIEZsb2F0aW5nQXJyb3cgfSBmcm9tICcuL0Zsb2F0aW5nQXJyb3ctMDI0ZGNlM2IuanMnO1xuaW1wb3J0ICcuL2Jyb3dzZXItOTliYzYyY2YuanMnO1xuaW1wb3J0ICcuL2RlYm91bmNlLTA5NTBhOWI4LmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgaW1hZ2VDb250YWluZXI6IFwiaW1hZ2UtY29udGFpbmVyXCIsXG4gIGNsb3NlQnV0dG9uQ29udGFpbmVyOiBcImNsb3NlLWJ1dHRvbi1jb250YWluZXJcIixcbiAgY2xvc2VCdXR0b246IFwiY2xvc2UtYnV0dG9uXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICBoYXNIZWFkZXI6IFwiaGFzLWhlYWRlclwiLFxuICBoZWFkZXI6IFwiaGVhZGVyXCIsXG4gIGhlYWRlckNvbnRlbnQ6IFwiaGVhZGVyLWNvbnRlbnRcIixcbiAgaGVhZGluZzogXCJoZWFkaW5nXCJcbn07XG5jb25zdCBkZWZhdWx0UG9wb3ZlclBsYWNlbWVudCA9IFwiYXV0b1wiO1xuY29uc3QgQVJJQV9DT05UUk9MUyA9IFwiYXJpYS1jb250cm9sc1wiO1xuY29uc3QgQVJJQV9FWFBBTkRFRCA9IFwiYXJpYS1leHBhbmRlZFwiO1xuXG5jbGFzcyBQb3BvdmVyTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBQcm9wZXJ0aWVzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudCA9IDA7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5xdWVyeVBvcG92ZXIgPSAoY29tcG9zZWRQYXRoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlZ2lzdGVyZWRFbGVtZW50cyB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHJlZ2lzdGVyZWRFbGVtZW50ID0gY29tcG9zZWRQYXRoLmZpbmQoKHBhdGhFbCkgPT4gcmVnaXN0ZXJlZEVsZW1lbnRzLmhhcyhwYXRoRWwpKTtcbiAgICAgIHJldHVybiByZWdpc3RlcmVkRWxlbWVudHMuZ2V0KHJlZ2lzdGVyZWRFbGVtZW50KTtcbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlUG9wb3ZlcnMgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgY29uc3QgdG9nZ2xlUG9wb3ZlciA9IHRoaXMucXVlcnlQb3BvdmVyKGNvbXBvc2VkUGF0aCk7XG4gICAgICBpZiAodG9nZ2xlUG9wb3ZlciAmJiAhdG9nZ2xlUG9wb3Zlci50cmlnZ2VyRGlzYWJsZWQpIHtcbiAgICAgICAgdG9nZ2xlUG9wb3Zlci5vcGVuID0gIXRvZ2dsZVBvcG92ZXIub3BlbjtcbiAgICAgIH1cbiAgICAgIEFycmF5LmZyb20odGhpcy5yZWdpc3RlcmVkRWxlbWVudHMudmFsdWVzKCkpXG4gICAgICAgIC5maWx0ZXIoKHBvcG92ZXIpID0+IHBvcG92ZXIgIT09IHRvZ2dsZVBvcG92ZXIgJiYgcG9wb3Zlci5hdXRvQ2xvc2UgJiYgcG9wb3Zlci5vcGVuICYmICFjb21wb3NlZFBhdGguaW5jbHVkZXMocG9wb3ZlcikpXG4gICAgICAgIC5mb3JFYWNoKChwb3BvdmVyKSA9PiAocG9wb3Zlci5vcGVuID0gZmFsc2UpKTtcbiAgICB9O1xuICAgIHRoaXMua2V5SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICB0aGlzLmNsb3NlQWxsUG9wb3ZlcnMoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQWN0aXZhdGlvbktleShldmVudC5rZXkpKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUG9wb3ZlcnMoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgICB0aGlzLnRvZ2dsZVBvcG92ZXJzKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZWdpc3RlckVsZW1lbnQocmVmZXJlbmNlRWwsIHBvcG92ZXIpIHtcbiAgICB0aGlzLnJlZ2lzdGVyZWRFbGVtZW50Q291bnQrKztcbiAgICB0aGlzLnJlZ2lzdGVyZWRFbGVtZW50cy5zZXQocmVmZXJlbmNlRWwsIHBvcG92ZXIpO1xuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRFbGVtZW50Q291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG4gIHVucmVnaXN0ZXJFbGVtZW50KHJlZmVyZW5jZUVsKSB7XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRzLmRlbGV0ZShyZWZlcmVuY2VFbCkpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudC0tO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZWdpc3RlcmVkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuICBjbG9zZUFsbFBvcG92ZXJzKCkge1xuICAgIEFycmF5LmZyb20odGhpcy5yZWdpc3RlcmVkRWxlbWVudHMudmFsdWVzKCkpLmZvckVhY2goKHBvcG92ZXIpID0+IChwb3BvdmVyLm9wZW4gPSBmYWxzZSkpO1xuICB9XG4gIGFkZExpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgdGhpcy5jbGlja0hhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleUhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgfVxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuY2xpY2tIYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlIYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gIH1cbn1cblxuY29uc3QgcG9wb3ZlckNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0ey0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtcG9wb3Zlci16LWluZGV4LCB2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LXBvcHVwKSk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OnZhcigtLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleCl9LmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXtwb3NpdGlvbjpyZWxhdGl2ZTt0cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbik7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sIHZpc2liaWxpdHksIG9wYWNpdHk7b3BhY2l0eTowO2JveC1zaGFkb3c6MCAwIDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCk7Ym9yZGVyLXJhZGl1czowLjI1cmVtfTpob3N0KFtkYXRhLXBsYWNlbWVudF49Ym90dG9tXSkgLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNXB4KX06aG9zdChbZGF0YS1wbGFjZW1lbnRePXRvcF0pIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNXB4KX06aG9zdChbZGF0YS1wbGFjZW1lbnRePWxlZnRdKSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVYKDVweCl9Omhvc3QoW2RhdGEtcGxhY2VtZW50Xj1yaWdodF0pIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTVweCl9Omhvc3QoW2RhdGEtcGxhY2VtZW50XSkgLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbS0tYWN0aXZle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlKDApfTpob3N0KFtjYWxjaXRlLWh5ZHJhdGVkLWhpZGRlbl0pe3Zpc2liaWxpdHk6aGlkZGVuICFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZX0uY2FsY2l0ZS1mbG9hdGluZy11aS1hcnJvd3twb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6Y2FsYyh2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KSAqIC0xKTtmaWxsOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX0uY2FsY2l0ZS1mbG9hdGluZy11aS1hcnJvd19fc3Ryb2tle3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX06aG9zdChbc2NhbGU9c10pIC5oZWFkaW5ne3BhZGRpbmctaW5saW5lOjAuNzVyZW07cGFkZGluZy1ibG9jazowLjVyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxLjM3NX06aG9zdChbc2NhbGU9bV0pIC5oZWFkaW5ne3BhZGRpbmctaW5saW5lOjFyZW07cGFkZGluZy1ibG9jazowLjc1cmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjM3NX06aG9zdChbc2NhbGU9bF0pIC5oZWFkaW5ne3BhZGRpbmctaW5saW5lOjEuMjVyZW07cGFkZGluZy1ibG9jazoxcmVtO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0xKTtsaW5lLWhlaWdodDoxLjM3NX06aG9zdHtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KFtvcGVuXSl7cG9pbnRlci1ldmVudHM6aW5pdGlhbH0uY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte2JvcmRlci1yYWRpdXM6MC4yNXJlbTtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9LmFycm93OjpiZWZvcmV7b3V0bGluZToxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9LmhlYWRlcntkaXNwbGF5OmZsZXg7ZmxleDoxIDEgYXV0bzthbGlnbi1pdGVtczpzdHJldGNoO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1ibG9jay1lbmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9LmhlYWRpbmd7bWFyZ2luOjBweDtkaXNwbGF5OmJsb2NrO2ZsZXg6MSAxIGF1dG87YWxpZ24tc2VsZjpjZW50ZXI7d2hpdGUtc3BhY2U6bm9ybWFsO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7d29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay13b3JkfS5jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC13cmFwOm5vd3JhcDtib3JkZXItcmFkaXVzOjAuMjVyZW07Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfS5jb250YWluZXIuaGFzLWhlYWRlcntmbGV4LWRpcmVjdGlvbjpjb2x1bW59LmNvbnRlbnR7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LXdyYXA6bm93cmFwO2FsaWduLXNlbGY6Y2VudGVyO3dvcmQtd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstd29yZH0uY2xvc2UtYnV0dG9uLWNvbnRhaW5lcntkaXNwbGF5OmZsZXg7b3ZlcmZsb3c6aGlkZGVuO2ZsZXg6MCAwIGF1dG87Ym9yZGVyLXN0YXJ0LWVuZC1yYWRpdXM6MC4yNXJlbTtib3JkZXItZW5kLWVuZC1yYWRpdXM6MC4yNXJlbX06OnNsb3R0ZWQoY2FsY2l0ZS1wYW5lbCksOjpzbG90dGVkKGNhbGNpdGUtZmxvdyl7YmxvY2stc2l6ZToxMDAlfVwiO1xuXG5jb25zdCBtYW5hZ2VyID0gbmV3IFBvcG92ZXJNYW5hZ2VyKCk7XG5jb25zdCBQb3BvdmVyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVQb3BvdmVyQmVmb3JlQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVQb3BvdmVyQmVmb3JlQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlUG9wb3ZlckNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlUG9wb3ZlckNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZVBvcG92ZXJCZWZvcmVPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlUG9wb3ZlckJlZm9yZU9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlUG9wb3Zlck9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVQb3BvdmVyT3BlblwiLCA2KTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgUHJvcGVydGllc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMudXBkYXRlRm9jdXNUcmFwRWxlbWVudHMoKSk7XG4gICAgdGhpcy5ndWlkID0gYGNhbGNpdGUtcG9wb3Zlci0ke2d1aWQoKX1gO1xuICAgIHRoaXMub3BlblRyYW5zaXRpb25Qcm9wID0gXCJvcGFjaXR5XCI7XG4gICAgdGhpcy5oYXNMb2FkZWQgPSBmYWxzZTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnNldFRyYW5zaXRpb25FbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy50cmFuc2l0aW9uRWwgPSBlbDtcbiAgICAgIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgfTtcbiAgICB0aGlzLnNldEZpbHRlcmVkUGxhY2VtZW50cyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZWwsIGZsaXBQbGFjZW1lbnRzIH0gPSB0aGlzO1xuICAgICAgdGhpcy5maWx0ZXJlZEZsaXBQbGFjZW1lbnRzID0gZmxpcFBsYWNlbWVudHNcbiAgICAgICAgPyBmaWx0ZXJDb21wdXRlZFBsYWNlbWVudHMoZmxpcFBsYWNlbWVudHMsIGVsKVxuICAgICAgICA6IG51bGw7XG4gICAgfTtcbiAgICB0aGlzLnNldFVwUmVmZXJlbmNlRWxlbWVudCA9ICh3YXJuID0gdHJ1ZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVSZWZlcmVuY2VzKCk7XG4gICAgICB0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLmdldFJlZmVyZW5jZUVsZW1lbnQoKTtcbiAgICAgIGNvbm5lY3RGbG9hdGluZ1VJKHRoaXMsIHRoaXMuZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCwgdGhpcy5lbCk7XG4gICAgICBjb25zdCB7IGVsLCByZWZlcmVuY2VFbGVtZW50LCBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50IH0gPSB0aGlzO1xuICAgICAgaWYgKHdhcm4gJiYgcmVmZXJlbmNlRWxlbWVudCAmJiAhZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgICBjb25zb2xlLndhcm4oYCR7ZWwudGFnTmFtZX06IHJlZmVyZW5jZS1lbGVtZW50IGlkIFwiJHtyZWZlcmVuY2VFbGVtZW50fVwiIHdhcyBub3QgZm91bmQuYCwge1xuICAgICAgICAgIGVsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5hZGRSZWZlcmVuY2VzKCk7XG4gICAgfTtcbiAgICB0aGlzLmdldElkID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZWwuaWQgfHwgdGhpcy5ndWlkO1xuICAgIH07XG4gICAgdGhpcy5zZXRFeHBhbmRlZEF0dHIgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIG9wZW4gfSA9IHRoaXM7XG4gICAgICBpZiAoIWVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKFwic2V0QXR0cmlidXRlXCIgaW4gZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgICBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LnNldEF0dHJpYnV0ZShBUklBX0VYUEFOREVELCB0b0FyaWFCb29sZWFuKG9wZW4pKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuYWRkUmVmZXJlbmNlcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCB9ID0gdGhpcztcbiAgICAgIGlmICghZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0SWQoKTtcbiAgICAgIGlmIChcInNldEF0dHJpYnV0ZVwiIGluIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudC5zZXRBdHRyaWJ1dGUoQVJJQV9DT05UUk9MUywgaWQpO1xuICAgICAgfVxuICAgICAgbWFuYWdlci5yZWdpc3RlckVsZW1lbnQoZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCwgdGhpcy5lbCk7XG4gICAgICB0aGlzLnNldEV4cGFuZGVkQXR0cigpO1xuICAgIH07XG4gICAgdGhpcy5yZW1vdmVSZWZlcmVuY2VzID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50IH0gPSB0aGlzO1xuICAgICAgaWYgKCFlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChcInJlbW92ZUF0dHJpYnV0ZVwiIGluIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoQVJJQV9DT05UUk9MUyk7XG4gICAgICAgIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKEFSSUFfRVhQQU5ERUQpO1xuICAgICAgfVxuICAgICAgbWFuYWdlci51bnJlZ2lzdGVyRWxlbWVudChlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGlkZSA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIH07XG4gICAgdGhpcy5zdG9yZUFycm93RWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuYXJyb3dFbCA9IGVsO1xuICAgICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgIH07XG4gICAgdGhpcy5hdXRvQ2xvc2UgPSBmYWxzZTtcbiAgICB0aGlzLmNsb3NhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5mbGlwRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvY3VzVHJhcERpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5wb2ludGVyRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZsaXBQbGFjZW1lbnRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGVhZGluZyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlYWRpbmdMZXZlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhYmVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub2Zmc2V0RGlzdGFuY2UgPSBkZWZhdWx0T2Zmc2V0RGlzdGFuY2U7XG4gICAgdGhpcy5vZmZzZXRTa2lkZGluZyA9IDA7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5vdmVybGF5UG9zaXRpb25pbmcgPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSBkZWZhdWx0UG9wb3ZlclBsYWNlbWVudDtcbiAgICB0aGlzLnJlZmVyZW5jZUVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMudHJpZ2dlckRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuZmxvYXRpbmdMYXlvdXQgPSBcInZlcnRpY2FsXCI7XG4gICAgdGhpcy5lZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIGhhbmRsZWZvY3VzVHJhcERpc2FibGVkKGZvY3VzVHJhcERpc2FibGVkKSB7XG4gICAgaWYgKCF0aGlzLm9wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9jdXNUcmFwRGlzYWJsZWQgPyBkZWFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpIDogYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gIH1cbiAgZmxpcFBsYWNlbWVudHNIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0RmlsdGVyZWRQbGFjZW1lbnRzKCk7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBvZmZzZXREaXN0YW5jZU9mZnNldEhhbmRsZXIoKSB7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIG9mZnNldFNraWRkaW5nSGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgb3BlbkhhbmRsZXIodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5zZXRFeHBhbmRlZEF0dHIoKTtcbiAgfVxuICBvdmVybGF5UG9zaXRpb25pbmdIYW5kbGVyKCkge1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBwbGFjZW1lbnRIYW5kbGVyKCkge1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICByZWZlcmVuY2VFbGVtZW50SGFuZGxlcigpIHtcbiAgICB0aGlzLnNldFVwUmVmZXJlbmNlRWxlbWVudCgpO1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5zZXRGaWx0ZXJlZFBsYWNlbWVudHMoKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIHRoaXMuc2V0VXBSZWZlcmVuY2VFbGVtZW50KHRoaXMuaGFzTG9hZGVkKTtcbiAgICBjb25uZWN0Rm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICBpZiAodGhpcy5yZWZlcmVuY2VFbGVtZW50ICYmICF0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2V0VXBSZWZlcmVuY2VFbGVtZW50KCk7XG4gICAgfVxuICAgIHRoaXMucmVwb3NpdGlvbigpO1xuICAgIHRoaXMuaGFzTG9hZGVkID0gdHJ1ZTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlbW92ZVJlZmVyZW5jZXMoKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBkaXNjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuZWwpO1xuICAgIGRpc2Nvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgZGVhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBkZWxheWVkXG4gICAqL1xuICBhc3luYyByZXBvc2l0aW9uKGRlbGF5ZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgZWwsIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIHBsYWNlbWVudCwgb3ZlcmxheVBvc2l0aW9uaW5nLCBmbGlwRGlzYWJsZWQsIGZpbHRlcmVkRmxpcFBsYWNlbWVudHMsIG9mZnNldERpc3RhbmNlLCBvZmZzZXRTa2lkZGluZywgYXJyb3dFbCB9ID0gdGhpcztcbiAgICByZXR1cm4gcmVwb3NpdGlvbih0aGlzLCB7XG4gICAgICBmbG9hdGluZ0VsOiBlbCxcbiAgICAgIHJlZmVyZW5jZUVsOiBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LFxuICAgICAgb3ZlcmxheVBvc2l0aW9uaW5nLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgZmxpcERpc2FibGVkLFxuICAgICAgZmxpcFBsYWNlbWVudHM6IGZpbHRlcmVkRmxpcFBsYWNlbWVudHMsXG4gICAgICBvZmZzZXREaXN0YW5jZSxcbiAgICAgIG9mZnNldFNraWRkaW5nLFxuICAgICAgYXJyb3dFbCxcbiAgICAgIHR5cGU6IFwicG9wb3ZlclwiXG4gICAgfSwgZGVsYXllZCk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGZvcmNlVXBkYXRlKHRoaXMuZWwpO1xuICAgIGZvY3VzRmlyc3RUYWJiYWJsZSh0aGlzLmVsKTtcbiAgfVxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgZWxlbWVudChzKSB0aGF0IGFyZSB1c2VkIHdpdGhpbiB0aGUgZm9jdXMtdHJhcCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgYXN5bmMgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHMoKSB7XG4gICAgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHModGhpcyk7XG4gIH1cbiAgZ2V0UmVmZXJlbmNlRWxlbWVudCgpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZUVsZW1lbnQsIGVsIH0gPSB0aGlzO1xuICAgIHJldHVybiAoKHR5cGVvZiByZWZlcmVuY2VFbGVtZW50ID09PSBcInN0cmluZ1wiXG4gICAgICA/IHF1ZXJ5RWxlbWVudFJvb3RzKGVsLCB7IGlkOiByZWZlcmVuY2VFbGVtZW50IH0pXG4gICAgICA6IHJlZmVyZW5jZUVsZW1lbnQpIHx8IG51bGwpO1xuICB9XG4gIG9uQmVmb3JlT3BlbigpIHtcbiAgICB0aGlzLmNhbGNpdGVQb3BvdmVyQmVmb3JlT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25PcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZVBvcG92ZXJPcGVuLmVtaXQoKTtcbiAgICBhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKTtcbiAgfVxuICBvbkJlZm9yZUNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZVBvcG92ZXJCZWZvcmVDbG9zZS5lbWl0KCk7XG4gIH1cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVQb3BvdmVyQ2xvc2UuZW1pdCgpO1xuICAgIGRlYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckNsb3NlQnV0dG9uKCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMsIGNsb3NhYmxlIH0gPSB0aGlzO1xuICAgIHJldHVybiBjbG9zYWJsZSA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jbG9zZUJ1dHRvbkNvbnRhaW5lciwga2V5OiBDU1MuY2xvc2VCdXR0b25Db250YWluZXIgfSwgaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgYXBwZWFyYW5jZTogXCJ0cmFuc3BhcmVudFwiLCBjbGFzczogQ1NTLmNsb3NlQnV0dG9uLCBvbkNsaWNrOiB0aGlzLmhpZGUsIHNjYWxlOiB0aGlzLnNjYWxlLCB0ZXh0OiBtZXNzYWdlcy5jbG9zZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoY2xvc2VCdXR0b25FbCkgPT4gKHRoaXMuY2xvc2VCdXR0b25FbCA9IGNsb3NlQnV0dG9uRWwpIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcInhcIiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiB0aGlzLnNjYWxlIH0pKSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJIZWFkZXIoKSB7XG4gICAgY29uc3QgeyBoZWFkaW5nLCBoZWFkaW5nTGV2ZWwgfSA9IHRoaXM7XG4gICAgY29uc3QgaGVhZGluZ05vZGUgPSBoZWFkaW5nID8gKGgoSGVhZGluZywgeyBjbGFzczogQ1NTLmhlYWRpbmcsIGxldmVsOiBoZWFkaW5nTGV2ZWwgfSwgaGVhZGluZykpIDogbnVsbDtcbiAgICByZXR1cm4gaGVhZGluZ05vZGUgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuaGVhZGVyLCBrZXk6IENTUy5oZWFkZXIgfSwgaGVhZGluZ05vZGUsIHRoaXMucmVuZGVyQ2xvc2VCdXR0b24oKSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCBoZWFkaW5nLCBsYWJlbCwgb3BlbiwgcG9pbnRlckRpc2FibGVkLCBmbG9hdGluZ0xheW91dCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50ICYmIG9wZW47XG4gICAgY29uc3QgaGlkZGVuID0gIWRpc3BsYXllZDtcbiAgICBjb25zdCBhcnJvd05vZGUgPSAhcG9pbnRlckRpc2FibGVkID8gKGgoRmxvYXRpbmdBcnJvdywgeyBmbG9hdGluZ0xheW91dDogZmxvYXRpbmdMYXlvdXQsIGtleTogXCJmbG9hdGluZy1hcnJvd1wiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc3RvcmVBcnJvd0VsIH0pKSA6IG51bGw7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWhpZGRlblwiOiB0b0FyaWFCb29sZWFuKGhpZGRlbiksIFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgXCJhcmlhLWxpdmVcIjogXCJwb2xpdGVcIiwgXCJjYWxjaXRlLWh5ZHJhdGVkLWhpZGRlblwiOiBoaWRkZW4sIGlkOiB0aGlzLmdldElkKCksIHJvbGU6IFwiZGlhbG9nXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtGbG9hdGluZ0NTUy5hbmltYXRpb25dOiB0cnVlLFxuICAgICAgICBbRmxvYXRpbmdDU1MuYW5pbWF0aW9uQWN0aXZlXTogZGlzcGxheWVkXG4gICAgICB9LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0VHJhbnNpdGlvbkVsIH0sIGFycm93Tm9kZSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtDU1MuaGFzSGVhZGVyXTogISFoZWFkaW5nLFxuICAgICAgICBbQ1NTLmNvbnRhaW5lcl06IHRydWVcbiAgICAgIH0gfSwgdGhpcy5yZW5kZXJIZWFkZXIoKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudCB9LCBoKFwic2xvdFwiLCBudWxsKSksICFoZWFkaW5nID8gdGhpcy5yZW5kZXJDbG9zZUJ1dHRvbigpIDogbnVsbCkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImZvY3VzVHJhcERpc2FibGVkXCI6IFtcImhhbmRsZWZvY3VzVHJhcERpc2FibGVkXCJdLFxuICAgIFwiZmxpcFBsYWNlbWVudHNcIjogW1wiZmxpcFBsYWNlbWVudHNIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwib2Zmc2V0RGlzdGFuY2VcIjogW1wib2Zmc2V0RGlzdGFuY2VPZmZzZXRIYW5kbGVyXCJdLFxuICAgIFwib2Zmc2V0U2tpZGRpbmdcIjogW1wib2Zmc2V0U2tpZGRpbmdIYW5kbGVyXCJdLFxuICAgIFwib3BlblwiOiBbXCJvcGVuSGFuZGxlclwiXSxcbiAgICBcIm92ZXJsYXlQb3NpdGlvbmluZ1wiOiBbXCJvdmVybGF5UG9zaXRpb25pbmdIYW5kbGVyXCJdLFxuICAgIFwicGxhY2VtZW50XCI6IFtcInBsYWNlbWVudEhhbmRsZXJcIl0sXG4gICAgXCJyZWZlcmVuY2VFbGVtZW50XCI6IFtcInJlZmVyZW5jZUVsZW1lbnRIYW5kbGVyXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuUG9wb3Zlci5zdHlsZSA9IHBvcG92ZXJDc3M7XG5cbmV4cG9ydCB7IFBvcG92ZXIgYXMgY2FsY2l0ZV9wb3BvdmVyIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgc3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgXCJzZXRVcExvYWRhYmxlQ29tcG9uZW50XCIgYW5kIFwic2V0Q29tcG9uZW50TG9hZGVkXCIgdG8gYmUgY2FsbGVkIGZpcnN0LlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBzZXRGb2N1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBzZXRDb21wb25lbnRMb2FkZWQgYXMgYSwgY29tcG9uZW50TG9hZGVkIGFzIGMsIHNldFVwTG9hZGFibGVDb21wb25lbnQgYXMgcyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9