"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-tooltip_entry_js"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-tooltip.entry.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-tooltip.entry.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_tooltip": () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floating-ui-8d547175.js */ "./node_modules/@esri/calcite-components/dist/esm/floating-ui-8d547175.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openCloseComponent-21d2a6ab.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-21d2a6ab.js");
/* harmony import */ var _FloatingArrow_024dce3b_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FloatingArrow-024dce3b.js */ "./node_modules/@esri/calcite-components/dist/esm/FloatingArrow-024dce3b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */










const CSS = {
  container: "container"
};
const TOOLTIP_OPEN_DELAY_MS = 300;
const TOOLTIP_CLOSE_DELAY_MS = 500;
const ARIA_DESCRIBED_BY = "aria-describedby";

function getEffectiveReferenceElement(tooltip) {
  const { referenceElement } = tooltip;
  return ((typeof referenceElement === "string" ? (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.q)(tooltip, { id: referenceElement }) : referenceElement) ||
    null);
}

class TooltipManager {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.registeredElements = new WeakMap();
    this.registeredShadowRootCounts = new WeakMap();
    this.hoverOpenTimeout = null;
    this.hoverCloseTimeout = null;
    this.hoveredTooltip = null;
    this.clickedTooltip = null;
    this.activeTooltip = null;
    this.registeredElementCount = 0;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.queryTooltip = (composedPath) => {
      const { registeredElements } = this;
      const registeredElement = composedPath.find((pathEl) => registeredElements.has(pathEl));
      return registeredElements.get(registeredElement);
    };
    this.keyDownHandler = (event) => {
      if (event.key === "Escape" && !event.defaultPrevented) {
        const { activeTooltip } = this;
        if (activeTooltip?.open) {
          this.clearHoverTimeout();
          this.closeActiveTooltip();
          const referenceElement = getEffectiveReferenceElement(activeTooltip);
          if (referenceElement instanceof Element && referenceElement.contains(event.target)) {
            event.preventDefault();
          }
        }
      }
    };
    this.pointerMoveHandler = (event) => {
      const composedPath = event.composedPath();
      const { activeTooltip } = this;
      const hoveringActiveTooltip = activeTooltip?.open && composedPath.includes(activeTooltip);
      if (hoveringActiveTooltip) {
        this.clearHoverTimeout();
        return;
      }
      const tooltip = this.queryTooltip(composedPath);
      this.hoveredTooltip = tooltip;
      if (this.isClosableClickedTooltip(tooltip)) {
        return;
      }
      this.clickedTooltip = null;
      if (tooltip) {
        this.openHoveredTooltip(tooltip);
      }
      else if (activeTooltip) {
        this.closeHoveredTooltip();
      }
    };
    this.pointerDownHandler = (event) => {
      if (!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
        return;
      }
      const clickedTooltip = this.queryTooltip(event.composedPath());
      this.clickedTooltip = clickedTooltip;
      if (clickedTooltip?.closeOnClick) {
        this.toggleTooltip(clickedTooltip, false);
        this.clearHoverTimeout();
      }
    };
    this.focusInHandler = (event) => {
      this.queryFocusedTooltip(event, true);
    };
    this.focusOutHandler = (event) => {
      this.queryFocusedTooltip(event, false);
    };
    this.openHoveredTooltip = (tooltip) => {
      this.hoverOpenTimeout = window.setTimeout(() => {
        if (this.hoverOpenTimeout === null) {
          return;
        }
        this.clearHoverCloseTimeout();
        this.closeActiveTooltip();
        if (tooltip !== this.hoveredTooltip) {
          return;
        }
        this.toggleTooltip(tooltip, true);
      }, this.activeTooltip ? 0 : TOOLTIP_OPEN_DELAY_MS);
    };
    this.closeHoveredTooltip = () => {
      this.hoverCloseTimeout = window.setTimeout(() => {
        if (this.hoverCloseTimeout === null) {
          return;
        }
        this.closeActiveTooltip();
      }, TOOLTIP_CLOSE_DELAY_MS);
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(referenceEl, tooltip) {
    this.registeredElementCount++;
    this.registeredElements.set(referenceEl, tooltip);
    const shadowRoot = this.getReferenceElShadowRootNode(referenceEl);
    if (shadowRoot) {
      this.registerShadowRoot(shadowRoot);
    }
    if (this.registeredElementCount === 1) {
      this.addListeners();
    }
  }
  unregisterElement(referenceEl) {
    const shadowRoot = this.getReferenceElShadowRootNode(referenceEl);
    if (shadowRoot) {
      this.unregisterShadowRoot(shadowRoot);
    }
    if (this.registeredElements.delete(referenceEl)) {
      this.registeredElementCount--;
    }
    if (this.registeredElementCount === 0) {
      this.removeListeners();
    }
  }
  addShadowListeners(shadowRoot) {
    shadowRoot.addEventListener("focusin", this.focusInHandler, { capture: true });
    shadowRoot.addEventListener("focusout", this.focusOutHandler, { capture: true });
  }
  removeShadowListeners(shadowRoot) {
    shadowRoot.removeEventListener("focusin", this.focusInHandler, { capture: true });
    shadowRoot.removeEventListener("focusout", this.focusOutHandler, { capture: true });
  }
  addListeners() {
    document.addEventListener("keydown", this.keyDownHandler, { capture: true });
    document.addEventListener("pointermove", this.pointerMoveHandler, { capture: true });
    document.addEventListener("pointerdown", this.pointerDownHandler, { capture: true });
    document.addEventListener("focusin", this.focusInHandler, { capture: true });
    document.addEventListener("focusout", this.focusOutHandler, { capture: true });
  }
  removeListeners() {
    document.removeEventListener("keydown", this.keyDownHandler, { capture: true });
    document.removeEventListener("pointermove", this.pointerMoveHandler, { capture: true });
    document.removeEventListener("pointerdown", this.pointerDownHandler, { capture: true });
    document.removeEventListener("focusin", this.focusInHandler, { capture: true });
    document.removeEventListener("focusout", this.focusOutHandler, { capture: true });
  }
  clearHoverOpenTimeout() {
    window.clearTimeout(this.hoverOpenTimeout);
    this.hoverOpenTimeout = null;
  }
  clearHoverCloseTimeout() {
    window.clearTimeout(this.hoverCloseTimeout);
    this.hoverCloseTimeout = null;
  }
  clearHoverTimeout() {
    this.clearHoverOpenTimeout();
    this.clearHoverCloseTimeout();
  }
  closeActiveTooltip() {
    const { activeTooltip } = this;
    if (activeTooltip?.open) {
      this.toggleTooltip(activeTooltip, false);
    }
  }
  toggleFocusedTooltip(tooltip, open) {
    this.closeActiveTooltip();
    if (open) {
      this.clearHoverTimeout();
    }
    this.toggleTooltip(tooltip, open);
  }
  toggleTooltip(tooltip, open) {
    tooltip.open = open;
    this.activeTooltip = open ? tooltip : null;
  }
  queryFocusedTooltip(event, open) {
    const tooltip = this.queryTooltip(event.composedPath());
    if (!tooltip || this.isClosableClickedTooltip(tooltip)) {
      return;
    }
    this.toggleFocusedTooltip(tooltip, open);
  }
  isClosableClickedTooltip(tooltip) {
    return tooltip?.closeOnClick && tooltip === this.clickedTooltip;
  }
  registerShadowRoot(shadowRoot) {
    const { registeredShadowRootCounts } = this;
    const newCount = (registeredShadowRootCounts.get(shadowRoot) ?? 0) + 1;
    if (newCount === 1) {
      this.addShadowListeners(shadowRoot);
    }
    registeredShadowRootCounts.set(shadowRoot, newCount);
  }
  unregisterShadowRoot(shadowRoot) {
    const { registeredShadowRootCounts } = this;
    const newCount = registeredShadowRootCounts.get(shadowRoot) - 1;
    if (newCount === 0) {
      this.removeShadowListeners(shadowRoot);
    }
    registeredShadowRootCounts.set(shadowRoot, newCount);
  }
  getReferenceElShadowRootNode(referenceEl) {
    return referenceEl instanceof Element ? (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.u)(referenceEl) : null;
  }
}

const tooltipCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, 901);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}";

const manager = new TooltipManager();
const Tooltip = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteTooltipBeforeClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTooltipBeforeClose", 6);
    this.calciteTooltipClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTooltipClose", 6);
    this.calciteTooltipBeforeOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTooltipBeforeOpen", 6);
    this.calciteTooltipOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTooltipOpen", 6);
    this.guid = `calcite-tooltip-${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_3__.g)()}`;
    this.hasLoaded = false;
    this.openTransitionProp = "opacity";
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
      (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    };
    this.setUpReferenceElement = (warn = true) => {
      this.removeReferences();
      this.effectiveReferenceElement = getEffectiveReferenceElement(this.el);
      (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__.c)(this, this.effectiveReferenceElement, this.el);
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
    this.addReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      const id = this.getId();
      if ("setAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.setAttribute(ARIA_DESCRIBED_BY, id);
      }
      manager.registerElement(effectiveReferenceElement, this.el);
    };
    this.removeReferences = () => {
      const { effectiveReferenceElement } = this;
      if (!effectiveReferenceElement) {
        return;
      }
      if ("removeAttribute" in effectiveReferenceElement) {
        effectiveReferenceElement.removeAttribute(ARIA_DESCRIBED_BY);
      }
      manager.unregisterElement(effectiveReferenceElement);
    };
    this.closeOnClick = false;
    this.label = undefined;
    this.offsetDistance = _floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__.b;
    this.offsetSkidding = 0;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.referenceElement = undefined;
    this.effectiveReferenceElement = undefined;
    this.floatingLayout = "vertical";
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
  }
  overlayPositioningHandler() {
    this.reposition(true);
  }
  placementHandler() {
    this.reposition(true);
  }
  referenceElementHandler() {
    this.setUpReferenceElement();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    this.setUpReferenceElement(this.hasLoaded);
  }
  componentDidLoad() {
    if (this.referenceElement && !this.effectiveReferenceElement) {
      this.setUpReferenceElement();
    }
    this.reposition(true);
    this.hasLoaded = true;
  }
  disconnectedCallback() {
    this.removeReferences();
    (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, this.effectiveReferenceElement, this.el);
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
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
    const { el, effectiveReferenceElement, placement, overlayPositioning, offsetDistance, offsetSkidding, arrowEl } = this;
    return (0,_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, {
      floatingEl: el,
      referenceEl: effectiveReferenceElement,
      overlayPositioning,
      placement,
      offsetDistance,
      offsetSkidding,
      arrowEl,
      type: "tooltip"
    }, delayed);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  onBeforeOpen() {
    this.calciteTooltipBeforeOpen.emit();
  }
  onOpen() {
    this.calciteTooltipOpen.emit();
  }
  onBeforeClose() {
    this.calciteTooltipBeforeClose.emit();
  }
  onClose() {
    this.calciteTooltipClose.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { effectiveReferenceElement, label, open, floatingLayout } = this;
    const displayed = effectiveReferenceElement && open;
    const hidden = !displayed;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-hidden": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.t)(hidden), "aria-label": label, "aria-live": "polite", "calcite-hydrated-hidden": hidden, id: this.getId(), role: "tooltip" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__.F.animation]: true,
        [_floating_ui_8d547175_js__WEBPACK_IMPORTED_MODULE_2__.F.animationActive]: displayed
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTransitionEl }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_FloatingArrow_024dce3b_js__WEBPACK_IMPORTED_MODULE_5__.F, { floatingLayout: floatingLayout,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (arrowEl) => (this.arrowEl = arrowEl) }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.container }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "offsetDistance": ["offsetDistanceOffsetHandler"],
    "offsetSkidding": ["offsetSkiddingHandler"],
    "open": ["openHandler"],
    "overlayPositioning": ["overlayPositioningHandler"],
    "placement": ["placementHandler"],
    "referenceElement": ["referenceElementHandler"]
  }; }
};
Tooltip.style = tooltipCss;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMGRmZmZlYTBmMjMwMDZhZjQ3MGQwNmJhYmQ5ODVmMDIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25ELFVBQVUsNkJBQTZCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTTtBQUNmLFNBQVMsYUFBYSxHQUFHLE9BQU87QUFDaEMsU0FBUyxLQUFLLEdBQUcsUUFBUSxFQUFFLEtBQUssR0FBRyxPQUFPO0FBQzFDO0FBQ0EsVUFBVSxxREFBQyxVQUFVLDRGQUE0RixPQUFPLEVBQUUsd0NBQXdDLGtEQUFrRDtBQUNwTix3QkFBd0IscURBQUMsV0FBVyxrRkFBa0Y7QUFDdEgsSUFBSSxxREFBQyxXQUFXLDJCQUEyQjtBQUMzQzs7QUFFOEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCLFFBQVEsTUFBTSxHQUFHLFFBQVE7QUFDcEU7QUFDQTs7QUFFMEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ3VCO0FBQ3lCO0FBQzlHO0FBQ3NFO0FBQ3BEO0FBQ2hDO0FBQ0Y7QUFDQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxtQkFBbUI7QUFDN0Isa0RBQWtELG1EQUFpQixZQUFZLHNCQUFzQjtBQUNyRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscUJBQXFCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtREFBc0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxlQUFlO0FBQ2pGLG9FQUFvRSxlQUFlO0FBQ25GO0FBQ0E7QUFDQSxxRUFBcUUsZUFBZTtBQUNwRix1RUFBdUUsZUFBZTtBQUN0RjtBQUNBO0FBQ0EsZ0VBQWdFLGVBQWU7QUFDL0Usd0VBQXdFLGVBQWU7QUFDdkYsd0VBQXdFLGVBQWU7QUFDdkYsZ0VBQWdFLGVBQWU7QUFDL0Usa0VBQWtFLGVBQWU7QUFDakY7QUFDQTtBQUNBLG1FQUFtRSxlQUFlO0FBQ2xGLDJFQUEyRSxlQUFlO0FBQzFGLDJFQUEyRSxlQUFlO0FBQzFGLG1FQUFtRSxlQUFlO0FBQ2xGLHFFQUFxRSxlQUFlO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2QkFBNkI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZCQUE2QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtREFBaUI7QUFDN0Q7QUFDQTs7QUFFQSxrQ0FBa0MsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLDJCQUEyQix3QkFBd0Isd0NBQXdDLE1BQU0seUNBQXlDLE1BQU0saUVBQWlFLGtFQUFrRSxnQkFBZ0IsYUFBYSxNQUFNLGtFQUFrRSxjQUFjLGtCQUFrQiwyQ0FBMkMsMEJBQTBCLGtCQUFrQixpREFBaUQsbURBQW1ELFVBQVUsMENBQTBDLG1DQUFtQyxzQkFBc0IsMERBQTBELDJCQUEyQix1REFBdUQsMEJBQTBCLHdEQUF3RCwwQkFBMEIseURBQXlELDJCQUEyQiwwREFBMEQsVUFBVSx1QkFBdUIsaUNBQWlDLDZCQUE2QixvQkFBb0IsMkJBQTJCLG9CQUFvQixrQkFBa0IsOENBQThDLG9DQUFvQyxtQ0FBbUMsa0NBQWtDLFdBQVcsa0JBQWtCLGdCQUFnQixzQkFBc0Isc0JBQXNCLG9CQUFvQixzQ0FBc0Msa0JBQWtCLDhDQUE4QywrQkFBK0Isc0JBQXNCLHFCQUFxQixpQkFBaUIsMEJBQTBCLHNCQUFzQixpQkFBaUIsbUJBQW1CLHdDQUF3QyxnREFBZ0QsZUFBZSw2Q0FBNkM7O0FBRS94RztBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFnQjtBQUNwQixxQ0FBcUMscURBQVc7QUFDaEQsK0JBQStCLHFEQUFXO0FBQzFDLG9DQUFvQyxxREFBVztBQUMvQyw4QkFBOEIscURBQVc7QUFDekMsbUNBQW1DLG9EQUFJLEdBQUc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtFQUF5QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkRBQWlCO0FBQ3ZCLGNBQWMsa0RBQWtEO0FBQ2hFO0FBQ0Esd0JBQXdCLFdBQVcsMEJBQTBCLGlCQUFpQjtBQUM5RTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsdURBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBeUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQW9CO0FBQ3hCLElBQUksa0VBQTRCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0dBQXdHO0FBQ3BILFdBQVcsMkRBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlEQUF5RDtBQUNyRTtBQUNBO0FBQ0EsWUFBWSxxREFBQyxDQUFDLGlEQUFJLElBQUksZUFBZSxtREFBYSw0SEFBNEgsRUFBRSxxREFBQyxVQUFVO0FBQzNMLFNBQVMsaUVBQXFCO0FBQzlCLFNBQVMsdUVBQTJCO0FBQ3BDLE9BQU87QUFDUDtBQUNBLGlDQUFpQyxFQUFFLHFEQUFDLENBQUMseURBQWEsSUFBSTtBQUN0RDtBQUNBLGtEQUFrRCxHQUFHLHFEQUFDLFVBQVUsc0JBQXNCLEVBQUUscURBQUM7QUFDekY7QUFDQSxhQUFhLE9BQU8scURBQVU7QUFDOUIsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9GbG9hdGluZ0Fycm93LTAyNGRjZTNiLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2Jyb3dzZXItOTliYzYyY2YuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS10b29sdGlwLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBoIH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgYXJyb3c6IFwiY2FsY2l0ZS1mbG9hdGluZy11aS1hcnJvd1wiLFxuICBhcnJvd1N0cm9rZTogXCJjYWxjaXRlLWZsb2F0aW5nLXVpLWFycm93X19zdHJva2VcIlxufTtcbmNvbnN0IERFRkFVTFRTID0ge1xuICB3aWR0aDogMTIsXG4gIGhlaWdodDogNixcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG4vKipcbiAqIFJlbmRlcnMgYSBTVkcgZWxlbWVudCB0byBiZSB1c2VkIGFzIGEgZmxvYXRpbmctdWkgYXJyb3cuXG4gKlxuICogVGhpcyBmdW5jdGlvbmFsIGNvbXBvbmVudCBzaG91bGQgYmUgcmVuZGVyZWQgaW5zaWRlIGEgYEZsb2F0aW5nVUlDb21wb25lbnRgIHdoZW4gaXQgbmVlZHMgYW4gYXJyb3cgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gZmxvYXRpbmdMYXlvdXQuZmxvYXRpbmdMYXlvdXRcbiAqIEBwYXJhbSBmbG9hdGluZ0xheW91dCDigJMgVGhlIGVmZmVjdGl2ZSBmbG9hdGluZyBsYXlvdXQgdG8gcmVuZGVyIHRoZSBhcnJvdyB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseS4gUG9zc2libGUgdmFsdWVzOiBgdmVydGljYWxgIG9yIGBob3Jpem9udGFsYC5cbiAqXG4gKiBTZWUgW2Zsb2F0aW5nLXVpXShodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL2Zsb2F0aW5nLXVpLnRzKVxuICogQHBhcmFtIGZsb2F0aW5nTGF5b3V0LmtleVxuICogQHBhcmFtIGZsb2F0aW5nTGF5b3V0LnJlZlxuICovXG5jb25zdCBGbG9hdGluZ0Fycm93ID0gKHsgZmxvYXRpbmdMYXlvdXQsIGtleSwgcmVmIH0pID0+IHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBzdHJva2VXaWR0aCB9ID0gREVGQVVMVFM7XG4gIGNvbnN0IHN2Z1ggPSB3aWR0aCAvIDI7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBmbG9hdGluZ0xheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiO1xuICBjb25zdCBkVmFsdWUgPSBcIk0wLDBcIiArXG4gICAgYCBIJHt3aWR0aH1gICtcbiAgICBgIEwke3dpZHRoIC0gc3ZnWH0sJHtoZWlnaHR9YCArXG4gICAgYCBRJHtzdmdYfSwke2hlaWdodH0gJHtzdmdYfSwke2hlaWdodH1gICtcbiAgICBcIiBaXCI7XG4gIHJldHVybiAoaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBDU1MuYXJyb3csIGhlaWdodDogd2lkdGgsIGtleToga2V5LCByZWY6IHJlZiwgdmlld0JveDogYDAgMCAke3dpZHRofSAke3dpZHRoICsgKCFpc1ZlcnRpY2FsID8gc3Ryb2tlV2lkdGggOiAwKX1gLCB3aWR0aDogd2lkdGggKyAoaXNWZXJ0aWNhbCA/IHN0cm9rZVdpZHRoIDogMCkgfSxcbiAgICBzdHJva2VXaWR0aCA+IDAgJiYgKGgoXCJwYXRoXCIsIHsgY2xhc3M6IENTUy5hcnJvd1N0cm9rZSwgZDogZFZhbHVlLCBmaWxsOiBcIm5vbmVcIiwgXCJzdHJva2Utd2lkdGhcIjogc3Ryb2tlV2lkdGggKyAxIH0pKSxcbiAgICBoKFwicGF0aFwiLCB7IGQ6IGRWYWx1ZSwgc3Ryb2tlOiBcIm5vbmVcIiB9KSkpO1xufTtcblxuZXhwb3J0IHsgRmxvYXRpbmdBcnJvdyBhcyBGIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuZnVuY3Rpb24gZ2V0VXNlckFnZW50RGF0YSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xufVxuZnVuY3Rpb24gZ2V0VXNlckFnZW50U3RyaW5nKCkge1xuICBjb25zdCB1YURhdGEgPSBnZXRVc2VyQWdlbnREYXRhKCk7XG4gIHJldHVybiB1YURhdGE/LmJyYW5kc1xuICAgID8gdWFEYXRhLmJyYW5kcy5tYXAoKHsgYnJhbmQsIHZlcnNpb24gfSkgPT4gYCR7YnJhbmR9LyR7dmVyc2lvbn1gKS5qb2luKFwiIFwiKVxuICAgIDogbmF2aWdhdG9yLnVzZXJBZ2VudDtcbn1cblxuZXhwb3J0IHsgZ2V0VXNlckFnZW50RGF0YSBhcyBhLCBnZXRVc2VyQWdlbnRTdHJpbmcgYXMgZyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IHEgYXMgcXVlcnlFbGVtZW50Um9vdHMsIGkgYXMgaXNQcmltYXJ5UG9pbnRlckJ1dHRvbiwgdSBhcyBnZXRTaGFkb3dSb290Tm9kZSwgdCBhcyB0b0FyaWFCb29sZWFuIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0RmxvYXRpbmdVSSwgYiBhcyBkZWZhdWx0T2Zmc2V0RGlzdGFuY2UsIGEgYXMgZGlzY29ubmVjdEZsb2F0aW5nVUksIHIgYXMgcmVwb3NpdGlvbiwgRiBhcyBGbG9hdGluZ0NTUyB9IGZyb20gJy4vZmxvYXRpbmctdWktOGQ1NDcxNzUuanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLTcxMzY5NzRiLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuQ2xvc2VDb21wb25lbnQtMjFkMmE2YWIuanMnO1xuaW1wb3J0IHsgRiBhcyBGbG9hdGluZ0Fycm93IH0gZnJvbSAnLi9GbG9hdGluZ0Fycm93LTAyNGRjZTNiLmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuaW1wb3J0ICcuL2Jyb3dzZXItOTliYzYyY2YuanMnO1xuaW1wb3J0ICcuL2RlYm91bmNlLTA5NTBhOWI4LmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCJcbn07XG5jb25zdCBUT09MVElQX09QRU5fREVMQVlfTVMgPSAzMDA7XG5jb25zdCBUT09MVElQX0NMT1NFX0RFTEFZX01TID0gNTAwO1xuY29uc3QgQVJJQV9ERVNDUklCRURfQlkgPSBcImFyaWEtZGVzY3JpYmVkYnlcIjtcblxuZnVuY3Rpb24gZ2V0RWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCh0b29sdGlwKSB7XG4gIGNvbnN0IHsgcmVmZXJlbmNlRWxlbWVudCB9ID0gdG9vbHRpcDtcbiAgcmV0dXJuICgodHlwZW9mIHJlZmVyZW5jZUVsZW1lbnQgPT09IFwic3RyaW5nXCIgPyBxdWVyeUVsZW1lbnRSb290cyh0b29sdGlwLCB7IGlkOiByZWZlcmVuY2VFbGVtZW50IH0pIDogcmVmZXJlbmNlRWxlbWVudCkgfHxcbiAgICBudWxsKTtcbn1cblxuY2xhc3MgVG9vbHRpcE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgUHJvcGVydGllc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnJlZ2lzdGVyZWRFbGVtZW50cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgdGhpcy5yZWdpc3RlcmVkU2hhZG93Um9vdENvdW50cyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgdGhpcy5ob3Zlck9wZW5UaW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmhvdmVyQ2xvc2VUaW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmhvdmVyZWRUb29sdGlwID0gbnVsbDtcbiAgICB0aGlzLmNsaWNrZWRUb29sdGlwID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZVRvb2x0aXAgPSBudWxsO1xuICAgIHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudCA9IDA7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5xdWVyeVRvb2x0aXAgPSAoY29tcG9zZWRQYXRoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlZ2lzdGVyZWRFbGVtZW50cyB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHJlZ2lzdGVyZWRFbGVtZW50ID0gY29tcG9zZWRQYXRoLmZpbmQoKHBhdGhFbCkgPT4gcmVnaXN0ZXJlZEVsZW1lbnRzLmhhcyhwYXRoRWwpKTtcbiAgICAgIHJldHVybiByZWdpc3RlcmVkRWxlbWVudHMuZ2V0KHJlZ2lzdGVyZWRFbGVtZW50KTtcbiAgICB9O1xuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgY29uc3QgeyBhY3RpdmVUb29sdGlwIH0gPSB0aGlzO1xuICAgICAgICBpZiAoYWN0aXZlVG9vbHRpcD8ub3Blbikge1xuICAgICAgICAgIHRoaXMuY2xlYXJIb3ZlclRpbWVvdXQoKTtcbiAgICAgICAgICB0aGlzLmNsb3NlQWN0aXZlVG9vbHRpcCgpO1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZUVsZW1lbnQgPSBnZXRFZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KGFjdGl2ZVRvb2x0aXApO1xuICAgICAgICAgIGlmIChyZWZlcmVuY2VFbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCAmJiByZWZlcmVuY2VFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnBvaW50ZXJNb3ZlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgICBjb25zdCB7IGFjdGl2ZVRvb2x0aXAgfSA9IHRoaXM7XG4gICAgICBjb25zdCBob3ZlcmluZ0FjdGl2ZVRvb2x0aXAgPSBhY3RpdmVUb29sdGlwPy5vcGVuICYmIGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhhY3RpdmVUb29sdGlwKTtcbiAgICAgIGlmIChob3ZlcmluZ0FjdGl2ZVRvb2x0aXApIHtcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyVGltZW91dCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0b29sdGlwID0gdGhpcy5xdWVyeVRvb2x0aXAoY29tcG9zZWRQYXRoKTtcbiAgICAgIHRoaXMuaG92ZXJlZFRvb2x0aXAgPSB0b29sdGlwO1xuICAgICAgaWYgKHRoaXMuaXNDbG9zYWJsZUNsaWNrZWRUb29sdGlwKHRvb2x0aXApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xpY2tlZFRvb2x0aXAgPSBudWxsO1xuICAgICAgaWYgKHRvb2x0aXApIHtcbiAgICAgICAgdGhpcy5vcGVuSG92ZXJlZFRvb2x0aXAodG9vbHRpcCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChhY3RpdmVUb29sdGlwKSB7XG4gICAgICAgIHRoaXMuY2xvc2VIb3ZlcmVkVG9vbHRpcCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5wb2ludGVyRG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgY2xpY2tlZFRvb2x0aXAgPSB0aGlzLnF1ZXJ5VG9vbHRpcChldmVudC5jb21wb3NlZFBhdGgoKSk7XG4gICAgICB0aGlzLmNsaWNrZWRUb29sdGlwID0gY2xpY2tlZFRvb2x0aXA7XG4gICAgICBpZiAoY2xpY2tlZFRvb2x0aXA/LmNsb3NlT25DbGljaykge1xuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoY2xpY2tlZFRvb2x0aXAsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyVGltZW91dCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5mb2N1c0luSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5xdWVyeUZvY3VzZWRUb29sdGlwKGV2ZW50LCB0cnVlKTtcbiAgICB9O1xuICAgIHRoaXMuZm9jdXNPdXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnF1ZXJ5Rm9jdXNlZFRvb2x0aXAoZXZlbnQsIGZhbHNlKTtcbiAgICB9O1xuICAgIHRoaXMub3BlbkhvdmVyZWRUb29sdGlwID0gKHRvb2x0aXApID0+IHtcbiAgICAgIHRoaXMuaG92ZXJPcGVuVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJPcGVuVGltZW91dCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFySG92ZXJDbG9zZVRpbWVvdXQoKTtcbiAgICAgICAgdGhpcy5jbG9zZUFjdGl2ZVRvb2x0aXAoKTtcbiAgICAgICAgaWYgKHRvb2x0aXAgIT09IHRoaXMuaG92ZXJlZFRvb2x0aXApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKHRvb2x0aXAsIHRydWUpO1xuICAgICAgfSwgdGhpcy5hY3RpdmVUb29sdGlwID8gMCA6IFRPT0xUSVBfT1BFTl9ERUxBWV9NUyk7XG4gICAgfTtcbiAgICB0aGlzLmNsb3NlSG92ZXJlZFRvb2x0aXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLmhvdmVyQ2xvc2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5ob3ZlckNsb3NlVGltZW91dCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlQWN0aXZlVG9vbHRpcCgpO1xuICAgICAgfSwgVE9PTFRJUF9DTE9TRV9ERUxBWV9NUyk7XG4gICAgfTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVnaXN0ZXJFbGVtZW50KHJlZmVyZW5jZUVsLCB0b29sdGlwKSB7XG4gICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudENvdW50Kys7XG4gICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudHMuc2V0KHJlZmVyZW5jZUVsLCB0b29sdGlwKTtcbiAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5nZXRSZWZlcmVuY2VFbFNoYWRvd1Jvb3ROb2RlKHJlZmVyZW5jZUVsKTtcbiAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgdGhpcy5yZWdpc3RlclNoYWRvd1Jvb3Qoc2hhZG93Um9vdCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRFbGVtZW50Q291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG4gIHVucmVnaXN0ZXJFbGVtZW50KHJlZmVyZW5jZUVsKSB7XG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuZ2V0UmVmZXJlbmNlRWxTaGFkb3dSb290Tm9kZShyZWZlcmVuY2VFbCk7XG4gICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgIHRoaXMudW5yZWdpc3RlclNoYWRvd1Jvb3Qoc2hhZG93Um9vdCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRFbGVtZW50cy5kZWxldGUocmVmZXJlbmNlRWwpKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWRFbGVtZW50Q291bnQtLTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudCA9PT0gMCkge1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cbiAgYWRkU2hhZG93TGlzdGVuZXJzKHNoYWRvd1Jvb3QpIHtcbiAgICBzaGFkb3dSb290LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIHRoaXMuZm9jdXNJbkhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBzaGFkb3dSb290LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCB0aGlzLmZvY3VzT3V0SGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICB9XG4gIHJlbW92ZVNoYWRvd0xpc3RlbmVycyhzaGFkb3dSb290KSB7XG4gICAgc2hhZG93Um9vdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCB0aGlzLmZvY3VzSW5IYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgc2hhZG93Um9vdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgdGhpcy5mb2N1c091dEhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgfVxuICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCB0aGlzLnBvaW50ZXJNb3ZlSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCB0aGlzLnBvaW50ZXJEb3duSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIHRoaXMuZm9jdXNJbkhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgdGhpcy5mb2N1c091dEhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgfVxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCB0aGlzLnBvaW50ZXJNb3ZlSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCB0aGlzLnBvaW50ZXJEb3duSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIHRoaXMuZm9jdXNJbkhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgdGhpcy5mb2N1c091dEhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgfVxuICBjbGVhckhvdmVyT3BlblRpbWVvdXQoKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLmhvdmVyT3BlblRpbWVvdXQpO1xuICAgIHRoaXMuaG92ZXJPcGVuVGltZW91dCA9IG51bGw7XG4gIH1cbiAgY2xlYXJIb3ZlckNsb3NlVGltZW91dCgpIHtcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuaG92ZXJDbG9zZVRpbWVvdXQpO1xuICAgIHRoaXMuaG92ZXJDbG9zZVRpbWVvdXQgPSBudWxsO1xuICB9XG4gIGNsZWFySG92ZXJUaW1lb3V0KCkge1xuICAgIHRoaXMuY2xlYXJIb3Zlck9wZW5UaW1lb3V0KCk7XG4gICAgdGhpcy5jbGVhckhvdmVyQ2xvc2VUaW1lb3V0KCk7XG4gIH1cbiAgY2xvc2VBY3RpdmVUb29sdGlwKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlVG9vbHRpcCB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlVG9vbHRpcD8ub3Blbikge1xuICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGFjdGl2ZVRvb2x0aXAsIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgdG9nZ2xlRm9jdXNlZFRvb2x0aXAodG9vbHRpcCwgb3Blbikge1xuICAgIHRoaXMuY2xvc2VBY3RpdmVUb29sdGlwKCk7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIHRoaXMuY2xlYXJIb3ZlclRpbWVvdXQoKTtcbiAgICB9XG4gICAgdGhpcy50b2dnbGVUb29sdGlwKHRvb2x0aXAsIG9wZW4pO1xuICB9XG4gIHRvZ2dsZVRvb2x0aXAodG9vbHRpcCwgb3Blbikge1xuICAgIHRvb2x0aXAub3BlbiA9IG9wZW47XG4gICAgdGhpcy5hY3RpdmVUb29sdGlwID0gb3BlbiA/IHRvb2x0aXAgOiBudWxsO1xuICB9XG4gIHF1ZXJ5Rm9jdXNlZFRvb2x0aXAoZXZlbnQsIG9wZW4pIHtcbiAgICBjb25zdCB0b29sdGlwID0gdGhpcy5xdWVyeVRvb2x0aXAoZXZlbnQuY29tcG9zZWRQYXRoKCkpO1xuICAgIGlmICghdG9vbHRpcCB8fCB0aGlzLmlzQ2xvc2FibGVDbGlja2VkVG9vbHRpcCh0b29sdGlwKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZUZvY3VzZWRUb29sdGlwKHRvb2x0aXAsIG9wZW4pO1xuICB9XG4gIGlzQ2xvc2FibGVDbGlja2VkVG9vbHRpcCh0b29sdGlwKSB7XG4gICAgcmV0dXJuIHRvb2x0aXA/LmNsb3NlT25DbGljayAmJiB0b29sdGlwID09PSB0aGlzLmNsaWNrZWRUb29sdGlwO1xuICB9XG4gIHJlZ2lzdGVyU2hhZG93Um9vdChzaGFkb3dSb290KSB7XG4gICAgY29uc3QgeyByZWdpc3RlcmVkU2hhZG93Um9vdENvdW50cyB9ID0gdGhpcztcbiAgICBjb25zdCBuZXdDb3VudCA9IChyZWdpc3RlcmVkU2hhZG93Um9vdENvdW50cy5nZXQoc2hhZG93Um9vdCkgPz8gMCkgKyAxO1xuICAgIGlmIChuZXdDb3VudCA9PT0gMSkge1xuICAgICAgdGhpcy5hZGRTaGFkb3dMaXN0ZW5lcnMoc2hhZG93Um9vdCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyZWRTaGFkb3dSb290Q291bnRzLnNldChzaGFkb3dSb290LCBuZXdDb3VudCk7XG4gIH1cbiAgdW5yZWdpc3RlclNoYWRvd1Jvb3Qoc2hhZG93Um9vdCkge1xuICAgIGNvbnN0IHsgcmVnaXN0ZXJlZFNoYWRvd1Jvb3RDb3VudHMgfSA9IHRoaXM7XG4gICAgY29uc3QgbmV3Q291bnQgPSByZWdpc3RlcmVkU2hhZG93Um9vdENvdW50cy5nZXQoc2hhZG93Um9vdCkgLSAxO1xuICAgIGlmIChuZXdDb3VudCA9PT0gMCkge1xuICAgICAgdGhpcy5yZW1vdmVTaGFkb3dMaXN0ZW5lcnMoc2hhZG93Um9vdCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyZWRTaGFkb3dSb290Q291bnRzLnNldChzaGFkb3dSb290LCBuZXdDb3VudCk7XG4gIH1cbiAgZ2V0UmVmZXJlbmNlRWxTaGFkb3dSb290Tm9kZShyZWZlcmVuY2VFbCkge1xuICAgIHJldHVybiByZWZlcmVuY2VFbCBpbnN0YW5jZW9mIEVsZW1lbnQgPyBnZXRTaGFkb3dSb290Tm9kZShyZWZlcmVuY2VFbCkgOiBudWxsO1xuICB9XG59XG5cbmNvbnN0IHRvb2x0aXBDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLXRvb2x0aXAtei1pbmRleCwgOTAxKTtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4KX0uY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uKTt0cmFuc2l0aW9uLXByb3BlcnR5OnRyYW5zZm9ybSwgdmlzaWJpbGl0eSwgb3BhY2l0eTtvcGFjaXR5OjA7Ym94LXNoYWRvdzowIDAgMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KTtib3JkZXItcmFkaXVzOjAuMjVyZW19Omhvc3QoW2RhdGEtcGxhY2VtZW50Xj1ib3R0b21dKSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01cHgpfTpob3N0KFtkYXRhLXBsYWNlbWVudF49dG9wXSkgLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1cHgpfTpob3N0KFtkYXRhLXBsYWNlbWVudF49bGVmdF0pIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNXB4KX06aG9zdChbZGF0YS1wbGFjZW1lbnRePXJpZ2h0XSkgLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNXB4KX06aG9zdChbZGF0YS1wbGFjZW1lbnRdKSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmltLS1hY3RpdmV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCl9Omhvc3QoW2NhbGNpdGUtaHlkcmF0ZWQtaGlkZGVuXSl7dmlzaWJpbGl0eTpoaWRkZW4gIWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lfS5jYWxjaXRlLWZsb2F0aW5nLXVpLWFycm93e3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDpjYWxjKHZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpICogLTEpO2ZpbGw6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfS5jYWxjaXRlLWZsb2F0aW5nLXVpLWFycm93X19zdHJva2V7c3Ryb2tlOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1yYWRpdXM6MC4yNXJlbTtwYWRkaW5nLWJsb2NrOjAuNzVyZW07cGFkZGluZy1pbmxpbmU6MXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpO2xpbmUtaGVpZ2h0OjEuMzc1O2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7bWF4LWlubGluZS1zaXplOjIwcmVtO21heC1ibG9jay1zaXplOjIwcmVtO3RleHQtYWxpZ246c3RhcnR9LmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXtib3JkZXItcmFkaXVzOjAuMjVyZW07Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpfS5hcnJvdzo6YmVmb3Jle291dGxpbmU6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfVwiO1xuXG5jb25zdCBtYW5hZ2VyID0gbmV3IFRvb2x0aXBNYW5hZ2VyKCk7XG5jb25zdCBUb29sdGlwID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVUb29sdGlwQmVmb3JlQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVUb29sdGlwQmVmb3JlQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlVG9vbHRpcENsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVG9vbHRpcENsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZVRvb2x0aXBCZWZvcmVPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVG9vbHRpcEJlZm9yZU9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlVG9vbHRpcE9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVUb29sdGlwT3BlblwiLCA2KTtcbiAgICB0aGlzLmd1aWQgPSBgY2FsY2l0ZS10b29sdGlwLSR7Z3VpZCgpfWA7XG4gICAgdGhpcy5oYXNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW5UcmFuc2l0aW9uUHJvcCA9IFwib3BhY2l0eVwiO1xuICAgIHRoaXMuc2V0VHJhbnNpdGlvbkVsID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25FbCA9IGVsO1xuICAgICAgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0VXBSZWZlcmVuY2VFbGVtZW50ID0gKHdhcm4gPSB0cnVlKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZVJlZmVyZW5jZXMoKTtcbiAgICAgIHRoaXMuZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCA9IGdldEVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQodGhpcy5lbCk7XG4gICAgICBjb25uZWN0RmxvYXRpbmdVSSh0aGlzLCB0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuZWwpO1xuICAgICAgY29uc3QgeyBlbCwgcmVmZXJlbmNlRWxlbWVudCwgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCB9ID0gdGhpcztcbiAgICAgIGlmICh3YXJuICYmIHJlZmVyZW5jZUVsZW1lbnQgJiYgIWVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGAke2VsLnRhZ05hbWV9OiByZWZlcmVuY2UtZWxlbWVudCBpZCBcIiR7cmVmZXJlbmNlRWxlbWVudH1cIiB3YXMgbm90IGZvdW5kLmAsIHtcbiAgICAgICAgICBlbFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkUmVmZXJlbmNlcygpO1xuICAgIH07XG4gICAgdGhpcy5nZXRJZCA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVsLmlkIHx8IHRoaXMuZ3VpZDtcbiAgICB9O1xuICAgIHRoaXMuYWRkUmVmZXJlbmNlcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCB9ID0gdGhpcztcbiAgICAgIGlmICghZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0SWQoKTtcbiAgICAgIGlmIChcInNldEF0dHJpYnV0ZVwiIGluIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudC5zZXRBdHRyaWJ1dGUoQVJJQV9ERVNDUklCRURfQlksIGlkKTtcbiAgICAgIH1cbiAgICAgIG1hbmFnZXIucmVnaXN0ZXJFbGVtZW50KGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuZWwpO1xuICAgIH07XG4gICAgdGhpcy5yZW1vdmVSZWZlcmVuY2VzID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50IH0gPSB0aGlzO1xuICAgICAgaWYgKCFlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChcInJlbW92ZUF0dHJpYnV0ZVwiIGluIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoQVJJQV9ERVNDUklCRURfQlkpO1xuICAgICAgfVxuICAgICAgbWFuYWdlci51bnJlZ2lzdGVyRWxlbWVudChlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KTtcbiAgICB9O1xuICAgIHRoaXMuY2xvc2VPbkNsaWNrID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9mZnNldERpc3RhbmNlID0gZGVmYXVsdE9mZnNldERpc3RhbmNlO1xuICAgIHRoaXMub2Zmc2V0U2tpZGRpbmcgPSAwO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMub3ZlcmxheVBvc2l0aW9uaW5nID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMucGxhY2VtZW50ID0gXCJhdXRvXCI7XG4gICAgdGhpcy5yZWZlcmVuY2VFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZsb2F0aW5nTGF5b3V0ID0gXCJ2ZXJ0aWNhbFwiO1xuICB9XG4gIG9mZnNldERpc3RhbmNlT2Zmc2V0SGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgb2Zmc2V0U2tpZGRpbmdIYW5kbGVyKCkge1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBvcGVuSGFuZGxlcih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICAgIH1cbiAgfVxuICBvdmVybGF5UG9zaXRpb25pbmdIYW5kbGVyKCkge1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICBwbGFjZW1lbnRIYW5kbGVyKCkge1xuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgfVxuICByZWZlcmVuY2VFbGVtZW50SGFuZGxlcigpIHtcbiAgICB0aGlzLnNldFVwUmVmZXJlbmNlRWxlbWVudCgpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnNldFVwUmVmZXJlbmNlRWxlbWVudCh0aGlzLmhhc0xvYWRlZCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBpZiAodGhpcy5yZWZlcmVuY2VFbGVtZW50ICYmICF0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2V0VXBSZWZlcmVuY2VFbGVtZW50KCk7XG4gICAgfVxuICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICB0aGlzLmhhc0xvYWRlZCA9IHRydWU7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5yZW1vdmVSZWZlcmVuY2VzKCk7XG4gICAgZGlzY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5lZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCB0aGlzLmVsKTtcbiAgICBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIGRlbGF5ZWRcbiAgICovXG4gIGFzeW5jIHJlcG9zaXRpb24oZGVsYXllZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgeyBlbCwgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCwgcGxhY2VtZW50LCBvdmVybGF5UG9zaXRpb25pbmcsIG9mZnNldERpc3RhbmNlLCBvZmZzZXRTa2lkZGluZywgYXJyb3dFbCB9ID0gdGhpcztcbiAgICByZXR1cm4gcmVwb3NpdGlvbih0aGlzLCB7XG4gICAgICBmbG9hdGluZ0VsOiBlbCxcbiAgICAgIHJlZmVyZW5jZUVsOiBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LFxuICAgICAgb3ZlcmxheVBvc2l0aW9uaW5nLFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgb2Zmc2V0RGlzdGFuY2UsXG4gICAgICBvZmZzZXRTa2lkZGluZyxcbiAgICAgIGFycm93RWwsXG4gICAgICB0eXBlOiBcInRvb2x0aXBcIlxuICAgIH0sIGRlbGF5ZWQpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgb25CZWZvcmVPcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZVRvb2x0aXBCZWZvcmVPcGVuLmVtaXQoKTtcbiAgfVxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5jYWxjaXRlVG9vbHRpcE9wZW4uZW1pdCgpO1xuICB9XG4gIG9uQmVmb3JlQ2xvc2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlVG9vbHRpcEJlZm9yZUNsb3NlLmVtaXQoKTtcbiAgfVxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZVRvb2x0aXBDbG9zZS5lbWl0KCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIGxhYmVsLCBvcGVuLCBmbG9hdGluZ0xheW91dCB9ID0gdGhpcztcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50ICYmIG9wZW47XG4gICAgY29uc3QgaGlkZGVuID0gIWRpc3BsYXllZDtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtaGlkZGVuXCI6IHRvQXJpYUJvb2xlYW4oaGlkZGVuKSwgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLCBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLCBcImNhbGNpdGUtaHlkcmF0ZWQtaGlkZGVuXCI6IGhpZGRlbiwgaWQ6IHRoaXMuZ2V0SWQoKSwgcm9sZTogXCJ0b29sdGlwXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIFtGbG9hdGluZ0NTUy5hbmltYXRpb25dOiB0cnVlLFxuICAgICAgICBbRmxvYXRpbmdDU1MuYW5pbWF0aW9uQWN0aXZlXTogZGlzcGxheWVkXG4gICAgICB9LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0VHJhbnNpdGlvbkVsIH0sIGgoRmxvYXRpbmdBcnJvdywgeyBmbG9hdGluZ0xheW91dDogZmxvYXRpbmdMYXlvdXQsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGFycm93RWwpID0+ICh0aGlzLmFycm93RWwgPSBhcnJvd0VsKSB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGFpbmVyIH0sIGgoXCJzbG90XCIsIG51bGwpKSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJvZmZzZXREaXN0YW5jZVwiOiBbXCJvZmZzZXREaXN0YW5jZU9mZnNldEhhbmRsZXJcIl0sXG4gICAgXCJvZmZzZXRTa2lkZGluZ1wiOiBbXCJvZmZzZXRTa2lkZGluZ0hhbmRsZXJcIl0sXG4gICAgXCJvcGVuXCI6IFtcIm9wZW5IYW5kbGVyXCJdLFxuICAgIFwib3ZlcmxheVBvc2l0aW9uaW5nXCI6IFtcIm92ZXJsYXlQb3NpdGlvbmluZ0hhbmRsZXJcIl0sXG4gICAgXCJwbGFjZW1lbnRcIjogW1wicGxhY2VtZW50SGFuZGxlclwiXSxcbiAgICBcInJlZmVyZW5jZUVsZW1lbnRcIjogW1wicmVmZXJlbmNlRWxlbWVudEhhbmRsZXJcIl1cbiAgfTsgfVxufTtcblRvb2x0aXAuc3R5bGUgPSB0b29sdGlwQ3NzO1xuXG5leHBvcnQgeyBUb29sdGlwIGFzIGNhbGNpdGVfdG9vbHRpcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9