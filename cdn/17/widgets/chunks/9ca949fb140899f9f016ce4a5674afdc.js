"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-tooltip_entry_js"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-tooltip.entry.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-tooltip.entry.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_tooltip": () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floating-ui-1033e8bb.js */ "./node_modules/@esri/calcite-components/dist/esm/floating-ui-1033e8bb.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openCloseComponent-a26b009f.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-a26b009f.js");
/* harmony import */ var _FloatingArrow_41635ee8_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FloatingArrow-41635ee8.js */ "./node_modules/@esri/calcite-components/dist/esm/FloatingArrow-41635ee8.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./debounce-b9072422.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-b9072422.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */









const CSS = {
  container: "container"
};
const TOOLTIP_DELAY_MS = 500;
const ARIA_DESCRIBED_BY = "aria-describedby";

function getEffectiveReferenceElement(tooltip) {
  const { referenceElement } = tooltip;
  return ((typeof referenceElement === "string" ? (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.q)(tooltip, { id: referenceElement }) : referenceElement) ||
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
    this.hoverTimeout = null;
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
          this.closeExistingTooltip();
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
        this.toggleHoveredTooltip(tooltip, true);
      }
      else if (activeTooltip) {
        this.toggleHoveredTooltip(activeTooltip, false);
      }
    };
    this.pointerDownHandler = (event) => {
      if (!(0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.i)(event)) {
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
    this.toggleHoveredTooltip = (tooltip, value) => {
      this.hoverTimeout = window.setTimeout(() => {
        if (this.hoverTimeout === null) {
          return;
        }
        this.closeExistingTooltip();
        if (tooltip !== this.hoveredTooltip) {
          return;
        }
        this.toggleTooltip(tooltip, value);
      }, TOOLTIP_DELAY_MS);
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
  clearHoverTimeout() {
    window.clearTimeout(this.hoverTimeout);
    this.hoverTimeout = null;
  }
  closeExistingTooltip() {
    const { activeTooltip } = this;
    if (activeTooltip?.open) {
      this.toggleTooltip(activeTooltip, false);
    }
  }
  toggleFocusedTooltip(tooltip, value) {
    this.closeExistingTooltip();
    if (value) {
      this.clearHoverTimeout();
    }
    this.toggleTooltip(tooltip, value);
  }
  toggleTooltip(tooltip, value) {
    tooltip.open = value;
    if (value) {
      this.activeTooltip = tooltip;
    }
  }
  queryFocusedTooltip(event, value) {
    const tooltip = this.queryTooltip(event.composedPath());
    if (!tooltip || this.isClosableClickedTooltip(tooltip)) {
      return;
    }
    this.toggleFocusedTooltip(tooltip, value);
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
    return referenceEl instanceof Element ? (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.u)(referenceEl) : null;
  }
}

const tooltipCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, 901);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}";

const manager = new TooltipManager();
const Tooltip = class {
  constructor(hostRef) {
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteTooltipBeforeClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTooltipBeforeClose", 6);
    this.calciteTooltipClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTooltipClose", 6);
    this.calciteTooltipBeforeOpen = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTooltipBeforeOpen", 6);
    this.calciteTooltipOpen = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteTooltipOpen", 6);
    this.guid = `calcite-tooltip-${(0,_guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_3__.g)()}`;
    this.hasLoaded = false;
    this.openTransitionProp = "opacity";
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
      (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    };
    this.setUpReferenceElement = (warn = true) => {
      this.removeReferences();
      this.effectiveReferenceElement = getEffectiveReferenceElement(this.el);
      (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__.c)(this, this.effectiveReferenceElement, this.el);
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
    this.offsetDistance = _floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__.b;
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
    (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
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
    (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__.a)(this, this.effectiveReferenceElement, this.el);
    (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
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
    return (0,_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__.r)(this, {
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
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-hidden": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(hidden), "aria-label": label, "aria-live": "polite", "calcite-hydrated-hidden": hidden, id: this.getId(), role: "tooltip" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__.F.animation]: true,
        [_floating_ui_1033e8bb_js__WEBPACK_IMPORTED_MODULE_2__.F.animationActive]: displayed
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTransitionEl }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_FloatingArrow_41635ee8_js__WEBPACK_IMPORTED_MODULE_5__.F, { floatingLayout: floatingLayout,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (arrowEl) => (this.arrowEl = arrowEl) }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.container }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)))));
  }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOWNhOTQ5ZmIxNDA4OTlmOWYwMTZjZTRhNTY3NGFmZGMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMEJBQTBCO0FBQ25ELFVBQVUsNkJBQTZCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTTtBQUNmLFNBQVMsYUFBYSxHQUFHLE9BQU87QUFDaEMsU0FBUyxLQUFLLEdBQUcsUUFBUSxFQUFFLEtBQUssR0FBRyxPQUFPO0FBQzFDO0FBQ0EsVUFBVSxxREFBQyxVQUFVLDRGQUE0RixPQUFPLEVBQUUsd0NBQXdDLGtEQUFrRDtBQUNwTix3QkFBd0IscURBQUMsV0FBVyxrRkFBa0Y7QUFDdEgsSUFBSSxxREFBQyxXQUFXLDJCQUEyQjtBQUMzQzs7QUFFOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ3VCO0FBQ3lCO0FBQzlHO0FBQ3NFO0FBQ3BEO0FBQ2hDO0FBQ0Q7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLG1CQUFtQjtBQUM3QixrREFBa0QsbURBQWlCLFlBQVksc0JBQXNCO0FBQ3JHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscUJBQXFCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5REFBeUQ7QUFDckU7QUFDQTtBQUNBLFlBQVkscURBQUMsQ0FBQyxpREFBSSxJQUFJLGVBQWUsbURBQWEsNEhBQTRILEVBQUUscURBQUMsVUFBVTtBQUMzTCxTQUFTLGlFQUFxQjtBQUM5QixTQUFTLHVFQUEyQjtBQUNwQyxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsRUFBRSxxREFBQyxDQUFDLHlEQUFhLElBQUk7QUFDdEQ7QUFDQSxrREFBa0QsR0FBRyxxREFBQyxVQUFVLHNCQUFzQixFQUFFLHFEQUFDO0FBQ3pGO0FBQ0EsYUFBYSxPQUFPLHFEQUFVO0FBQzlCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vRmxvYXRpbmdBcnJvdy00MTYzNWVlOC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLXRvb2x0aXAuZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IGggfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBhcnJvdzogXCJjYWxjaXRlLWZsb2F0aW5nLXVpLWFycm93XCIsXG4gIGFycm93U3Ryb2tlOiBcImNhbGNpdGUtZmxvYXRpbmctdWktYXJyb3dfX3N0cm9rZVwiXG59O1xuY29uc3QgREVGQVVMVFMgPSB7XG4gIHdpZHRoOiAxMixcbiAgaGVpZ2h0OiA2LFxuICBzdHJva2VXaWR0aDogMVxufTtcbi8qKlxuICogUmVuZGVycyBhIFNWRyBlbGVtZW50IHRvIGJlIHVzZWQgYXMgYSBmbG9hdGluZy11aSBhcnJvdy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uYWwgY29tcG9uZW50IHNob3VsZCBiZSByZW5kZXJlZCBpbnNpZGUgYSBgRmxvYXRpbmdVSUNvbXBvbmVudGAgd2hlbiBpdCBuZWVkcyBhbiBhcnJvdyBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSBmbG9hdGluZ0xheW91dC5mbG9hdGluZ0xheW91dFxuICogQHBhcmFtIGZsb2F0aW5nTGF5b3V0IOKAkyBUaGUgZWZmZWN0aXZlIGZsb2F0aW5nIGxheW91dCB0byByZW5kZXIgdGhlIGFycm93IHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5LiBQb3NzaWJsZSB2YWx1ZXM6IGB2ZXJ0aWNhbGAgb3IgYGhvcml6b250YWxgLlxuICpcbiAqIFNlZSBbZmxvYXRpbmctdWldKGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9zcmMvdXRpbHMvZmxvYXRpbmctdWkudHMpXG4gKiBAcGFyYW0gZmxvYXRpbmdMYXlvdXQua2V5XG4gKiBAcGFyYW0gZmxvYXRpbmdMYXlvdXQucmVmXG4gKi9cbmNvbnN0IEZsb2F0aW5nQXJyb3cgPSAoeyBmbG9hdGluZ0xheW91dCwga2V5LCByZWYgfSkgPT4ge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHN0cm9rZVdpZHRoIH0gPSBERUZBVUxUUztcbiAgY29uc3Qgc3ZnWCA9IHdpZHRoIC8gMjtcbiAgY29uc3QgaXNWZXJ0aWNhbCA9IGZsb2F0aW5nTGF5b3V0ID09PSBcInZlcnRpY2FsXCI7XG4gIGNvbnN0IGRWYWx1ZSA9IFwiTTAsMFwiICtcbiAgICBgIEgke3dpZHRofWAgK1xuICAgIGAgTCR7d2lkdGggLSBzdmdYfSwke2hlaWdodH1gICtcbiAgICBgIFEke3N2Z1h9LCR7aGVpZ2h0fSAke3N2Z1h9LCR7aGVpZ2h0fWAgK1xuICAgIFwiIFpcIjtcbiAgcmV0dXJuIChoKFwic3ZnXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IENTUy5hcnJvdywgaGVpZ2h0OiB3aWR0aCwga2V5OiBrZXksIHJlZjogcmVmLCB2aWV3Qm94OiBgMCAwICR7d2lkdGh9ICR7d2lkdGggKyAoIWlzVmVydGljYWwgPyBzdHJva2VXaWR0aCA6IDApfWAsIHdpZHRoOiB3aWR0aCArIChpc1ZlcnRpY2FsID8gc3Ryb2tlV2lkdGggOiAwKSB9LFxuICAgIHN0cm9rZVdpZHRoID4gMCAmJiAoaChcInBhdGhcIiwgeyBjbGFzczogQ1NTLmFycm93U3Ryb2tlLCBkOiBkVmFsdWUsIGZpbGw6IFwibm9uZVwiLCBcInN0cm9rZS13aWR0aFwiOiBzdHJva2VXaWR0aCArIDEgfSkpLFxuICAgIGgoXCJwYXRoXCIsIHsgZDogZFZhbHVlLCBzdHJva2U6IFwibm9uZVwiIH0pKSk7XG59O1xuXG5leHBvcnQgeyBGbG9hdGluZ0Fycm93IGFzIEYgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgeyBxIGFzIHF1ZXJ5RWxlbWVudFJvb3RzLCBpIGFzIGlzUHJpbWFyeVBvaW50ZXJCdXR0b24sIHUgYXMgZ2V0U2hhZG93Um9vdE5vZGUsIHQgYXMgdG9BcmlhQm9vbGVhbiB9IGZyb20gJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEZsb2F0aW5nVUksIGIgYXMgZGVmYXVsdE9mZnNldERpc3RhbmNlLCBhIGFzIGRpc2Nvbm5lY3RGbG9hdGluZ1VJLCByIGFzIHJlcG9zaXRpb24sIEYgYXMgRmxvYXRpbmdDU1MgfSBmcm9tICcuL2Zsb2F0aW5nLXVpLTEwMzNlOGJiLmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQsIGQgYXMgZGlzY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCB9IGZyb20gJy4vb3BlbkNsb3NlQ29tcG9uZW50LWEyNmIwMDlmLmpzJztcbmltcG9ydCB7IEYgYXMgRmxvYXRpbmdBcnJvdyB9IGZyb20gJy4vRmxvYXRpbmdBcnJvdy00MTYzNWVlOC5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLWQwOGE2NzM3LmpzJztcbmltcG9ydCAnLi9kZWJvdW5jZS1iOTA3MjQyMi5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiXG59O1xuY29uc3QgVE9PTFRJUF9ERUxBWV9NUyA9IDUwMDtcbmNvbnN0IEFSSUFfREVTQ1JJQkVEX0JZID0gXCJhcmlhLWRlc2NyaWJlZGJ5XCI7XG5cbmZ1bmN0aW9uIGdldEVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQodG9vbHRpcCkge1xuICBjb25zdCB7IHJlZmVyZW5jZUVsZW1lbnQgfSA9IHRvb2x0aXA7XG4gIHJldHVybiAoKHR5cGVvZiByZWZlcmVuY2VFbGVtZW50ID09PSBcInN0cmluZ1wiID8gcXVlcnlFbGVtZW50Um9vdHModG9vbHRpcCwgeyBpZDogcmVmZXJlbmNlRWxlbWVudCB9KSA6IHJlZmVyZW5jZUVsZW1lbnQpIHx8XG4gICAgbnVsbCk7XG59XG5cbmNsYXNzIFRvb2x0aXBNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIFByb3BlcnRpZXNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudHMgPSBuZXcgV2Vha01hcCgpO1xuICAgIHRoaXMucmVnaXN0ZXJlZFNoYWRvd1Jvb3RDb3VudHMgPSBuZXcgV2Vha01hcCgpO1xuICAgIHRoaXMuaG92ZXJUaW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmhvdmVyZWRUb29sdGlwID0gbnVsbDtcbiAgICB0aGlzLmNsaWNrZWRUb29sdGlwID0gbnVsbDtcbiAgICB0aGlzLmFjdGl2ZVRvb2x0aXAgPSBudWxsO1xuICAgIHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudCA9IDA7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBQcml2YXRlIE1ldGhvZHNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5xdWVyeVRvb2x0aXAgPSAoY29tcG9zZWRQYXRoKSA9PiB7XG4gICAgICBjb25zdCB7IHJlZ2lzdGVyZWRFbGVtZW50cyB9ID0gdGhpcztcbiAgICAgIGNvbnN0IHJlZ2lzdGVyZWRFbGVtZW50ID0gY29tcG9zZWRQYXRoLmZpbmQoKHBhdGhFbCkgPT4gcmVnaXN0ZXJlZEVsZW1lbnRzLmhhcyhwYXRoRWwpKTtcbiAgICAgIHJldHVybiByZWdpc3RlcmVkRWxlbWVudHMuZ2V0KHJlZ2lzdGVyZWRFbGVtZW50KTtcbiAgICB9O1xuICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgY29uc3QgeyBhY3RpdmVUb29sdGlwIH0gPSB0aGlzO1xuICAgICAgICBpZiAoYWN0aXZlVG9vbHRpcD8ub3Blbikge1xuICAgICAgICAgIHRoaXMuY2xlYXJIb3ZlclRpbWVvdXQoKTtcbiAgICAgICAgICB0aGlzLmNsb3NlRXhpc3RpbmdUb29sdGlwKCk7XG4gICAgICAgICAgY29uc3QgcmVmZXJlbmNlRWxlbWVudCA9IGdldEVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQoYWN0aXZlVG9vbHRpcCk7XG4gICAgICAgICAgaWYgKHJlZmVyZW5jZUVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHJlZmVyZW5jZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucG9pbnRlck1vdmVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgIGNvbnN0IHsgYWN0aXZlVG9vbHRpcCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IGhvdmVyaW5nQWN0aXZlVG9vbHRpcCA9IGFjdGl2ZVRvb2x0aXA/Lm9wZW4gJiYgY29tcG9zZWRQYXRoLmluY2x1ZGVzKGFjdGl2ZVRvb2x0aXApO1xuICAgICAgaWYgKGhvdmVyaW5nQWN0aXZlVG9vbHRpcCkge1xuICAgICAgICB0aGlzLmNsZWFySG92ZXJUaW1lb3V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRvb2x0aXAgPSB0aGlzLnF1ZXJ5VG9vbHRpcChjb21wb3NlZFBhdGgpO1xuICAgICAgdGhpcy5ob3ZlcmVkVG9vbHRpcCA9IHRvb2x0aXA7XG4gICAgICBpZiAodGhpcy5pc0Nsb3NhYmxlQ2xpY2tlZFRvb2x0aXAodG9vbHRpcCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jbGlja2VkVG9vbHRpcCA9IG51bGw7XG4gICAgICBpZiAodG9vbHRpcCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUhvdmVyZWRUb29sdGlwKHRvb2x0aXAsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYWN0aXZlVG9vbHRpcCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUhvdmVyZWRUb29sdGlwKGFjdGl2ZVRvb2x0aXAsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucG9pbnRlckRvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNsaWNrZWRUb29sdGlwID0gdGhpcy5xdWVyeVRvb2x0aXAoZXZlbnQuY29tcG9zZWRQYXRoKCkpO1xuICAgICAgdGhpcy5jbGlja2VkVG9vbHRpcCA9IGNsaWNrZWRUb29sdGlwO1xuICAgICAgaWYgKGNsaWNrZWRUb29sdGlwPy5jbG9zZU9uQ2xpY2spIHtcbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGNsaWNrZWRUb29sdGlwLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY2xlYXJIb3ZlclRpbWVvdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZm9jdXNJbkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMucXVlcnlGb2N1c2VkVG9vbHRpcChldmVudCwgdHJ1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmZvY3VzT3V0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5xdWVyeUZvY3VzZWRUb29sdGlwKGV2ZW50LCBmYWxzZSk7XG4gICAgfTtcbiAgICB0aGlzLnRvZ2dsZUhvdmVyZWRUb29sdGlwID0gKHRvb2x0aXAsIHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLmhvdmVyVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJUaW1lb3V0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvc2VFeGlzdGluZ1Rvb2x0aXAoKTtcbiAgICAgICAgaWYgKHRvb2x0aXAgIT09IHRoaXMuaG92ZXJlZFRvb2x0aXApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKHRvb2x0aXAsIHZhbHVlKTtcbiAgICAgIH0sIFRPT0xUSVBfREVMQVlfTVMpO1xuICAgIH07XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlZ2lzdGVyRWxlbWVudChyZWZlcmVuY2VFbCwgdG9vbHRpcCkge1xuICAgIHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRDb3VudCsrO1xuICAgIHRoaXMucmVnaXN0ZXJlZEVsZW1lbnRzLnNldChyZWZlcmVuY2VFbCwgdG9vbHRpcCk7XG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuZ2V0UmVmZXJlbmNlRWxTaGFkb3dSb290Tm9kZShyZWZlcmVuY2VFbCk7XG4gICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJTaGFkb3dSb290KHNoYWRvd1Jvb3QpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZWdpc3RlcmVkRWxlbWVudENvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cbiAgfVxuICB1bnJlZ2lzdGVyRWxlbWVudChyZWZlcmVuY2VFbCkge1xuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmdldFJlZmVyZW5jZUVsU2hhZG93Um9vdE5vZGUocmVmZXJlbmNlRWwpO1xuICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICB0aGlzLnVucmVnaXN0ZXJTaGFkb3dSb290KHNoYWRvd1Jvb3QpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZWdpc3RlcmVkRWxlbWVudHMuZGVsZXRlKHJlZmVyZW5jZUVsKSkge1xuICAgICAgdGhpcy5yZWdpc3RlcmVkRWxlbWVudENvdW50LS07XG4gICAgfVxuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRFbGVtZW50Q291bnQgPT09IDApIHtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG4gIGFkZFNoYWRvd0xpc3RlbmVycyhzaGFkb3dSb290KSB7XG4gICAgc2hhZG93Um9vdC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCB0aGlzLmZvY3VzSW5IYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgc2hhZG93Um9vdC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgdGhpcy5mb2N1c091dEhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgfVxuICByZW1vdmVTaGFkb3dMaXN0ZW5lcnMoc2hhZG93Um9vdCkge1xuICAgIHNoYWRvd1Jvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgdGhpcy5mb2N1c0luSGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlIH0pO1xuICAgIHNoYWRvd1Jvb3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIHRoaXMuZm9jdXNPdXRIYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gIH1cbiAgYWRkTGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5wb2ludGVyTW92ZUhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgdGhpcy5wb2ludGVyRG93bkhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCB0aGlzLmZvY3VzSW5IYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIHRoaXMuZm9jdXNPdXRIYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gIH1cbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5RG93bkhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5wb2ludGVyTW92ZUhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgdGhpcy5wb2ludGVyRG93bkhhbmRsZXIsIHsgY2FwdHVyZTogdHJ1ZSB9KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCB0aGlzLmZvY3VzSW5IYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIHRoaXMuZm9jdXNPdXRIYW5kbGVyLCB7IGNhcHR1cmU6IHRydWUgfSk7XG4gIH1cbiAgY2xlYXJIb3ZlclRpbWVvdXQoKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLmhvdmVyVGltZW91dCk7XG4gICAgdGhpcy5ob3ZlclRpbWVvdXQgPSBudWxsO1xuICB9XG4gIGNsb3NlRXhpc3RpbmdUb29sdGlwKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlVG9vbHRpcCB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlVG9vbHRpcD8ub3Blbikge1xuICAgICAgdGhpcy50b2dnbGVUb29sdGlwKGFjdGl2ZVRvb2x0aXAsIGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgdG9nZ2xlRm9jdXNlZFRvb2x0aXAodG9vbHRpcCwgdmFsdWUpIHtcbiAgICB0aGlzLmNsb3NlRXhpc3RpbmdUb29sdGlwKCk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmNsZWFySG92ZXJUaW1lb3V0KCk7XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlVG9vbHRpcCh0b29sdGlwLCB2YWx1ZSk7XG4gIH1cbiAgdG9nZ2xlVG9vbHRpcCh0b29sdGlwLCB2YWx1ZSkge1xuICAgIHRvb2x0aXAub3BlbiA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5hY3RpdmVUb29sdGlwID0gdG9vbHRpcDtcbiAgICB9XG4gIH1cbiAgcXVlcnlGb2N1c2VkVG9vbHRpcChldmVudCwgdmFsdWUpIHtcbiAgICBjb25zdCB0b29sdGlwID0gdGhpcy5xdWVyeVRvb2x0aXAoZXZlbnQuY29tcG9zZWRQYXRoKCkpO1xuICAgIGlmICghdG9vbHRpcCB8fCB0aGlzLmlzQ2xvc2FibGVDbGlja2VkVG9vbHRpcCh0b29sdGlwKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZUZvY3VzZWRUb29sdGlwKHRvb2x0aXAsIHZhbHVlKTtcbiAgfVxuICBpc0Nsb3NhYmxlQ2xpY2tlZFRvb2x0aXAodG9vbHRpcCkge1xuICAgIHJldHVybiB0b29sdGlwPy5jbG9zZU9uQ2xpY2sgJiYgdG9vbHRpcCA9PT0gdGhpcy5jbGlja2VkVG9vbHRpcDtcbiAgfVxuICByZWdpc3RlclNoYWRvd1Jvb3Qoc2hhZG93Um9vdCkge1xuICAgIGNvbnN0IHsgcmVnaXN0ZXJlZFNoYWRvd1Jvb3RDb3VudHMgfSA9IHRoaXM7XG4gICAgY29uc3QgbmV3Q291bnQgPSAocmVnaXN0ZXJlZFNoYWRvd1Jvb3RDb3VudHMuZ2V0KHNoYWRvd1Jvb3QpID8/IDApICsgMTtcbiAgICBpZiAobmV3Q291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMuYWRkU2hhZG93TGlzdGVuZXJzKHNoYWRvd1Jvb3QpO1xuICAgIH1cbiAgICByZWdpc3RlcmVkU2hhZG93Um9vdENvdW50cy5zZXQoc2hhZG93Um9vdCwgbmV3Q291bnQpO1xuICB9XG4gIHVucmVnaXN0ZXJTaGFkb3dSb290KHNoYWRvd1Jvb3QpIHtcbiAgICBjb25zdCB7IHJlZ2lzdGVyZWRTaGFkb3dSb290Q291bnRzIH0gPSB0aGlzO1xuICAgIGNvbnN0IG5ld0NvdW50ID0gcmVnaXN0ZXJlZFNoYWRvd1Jvb3RDb3VudHMuZ2V0KHNoYWRvd1Jvb3QpIC0gMTtcbiAgICBpZiAobmV3Q291bnQgPT09IDApIHtcbiAgICAgIHRoaXMucmVtb3ZlU2hhZG93TGlzdGVuZXJzKHNoYWRvd1Jvb3QpO1xuICAgIH1cbiAgICByZWdpc3RlcmVkU2hhZG93Um9vdENvdW50cy5zZXQoc2hhZG93Um9vdCwgbmV3Q291bnQpO1xuICB9XG4gIGdldFJlZmVyZW5jZUVsU2hhZG93Um9vdE5vZGUocmVmZXJlbmNlRWwpIHtcbiAgICByZXR1cm4gcmVmZXJlbmNlRWwgaW5zdGFuY2VvZiBFbGVtZW50ID8gZ2V0U2hhZG93Um9vdE5vZGUocmVmZXJlbmNlRWwpIDogbnVsbDtcbiAgfVxufVxuXG5jb25zdCB0b29sdGlwQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS10b29sdGlwLXotaW5kZXgsIDkwMSk7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OnZhcigtLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleCl9LmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXtwb3NpdGlvbjpyZWxhdGl2ZTt0cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbik7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm0sIHZpc2liaWxpdHksIG9wYWNpdHk7b3BhY2l0eTowO2JveC1zaGFkb3c6MCAwIDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCk7Ym9yZGVyLXJhZGl1czowLjI1cmVtfTpob3N0KFtkYXRhLXBsYWNlbWVudF49Ym90dG9tXSkgLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNXB4KX06aG9zdChbZGF0YS1wbGFjZW1lbnRePXRvcF0pIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNXB4KX06aG9zdChbZGF0YS1wbGFjZW1lbnRePWxlZnRdKSAuY2FsY2l0ZS1mbG9hdGluZy11aS1hbmlte3RyYW5zZm9ybTp0cmFuc2xhdGVYKDVweCl9Omhvc3QoW2RhdGEtcGxhY2VtZW50Xj1yaWdodF0pIC5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTVweCl9Omhvc3QoW2RhdGEtcGxhY2VtZW50XSkgLmNhbGNpdGUtZmxvYXRpbmctdWktYW5pbS0tYWN0aXZle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlKDApfTpob3N0KFtjYWxjaXRlLWh5ZHJhdGVkLWhpZGRlbl0pe3Zpc2liaWxpdHk6aGlkZGVuICFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZX0uY2FsY2l0ZS1mbG9hdGluZy11aS1hcnJvd3twb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6Y2FsYyh2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KSAqIC0xKTtmaWxsOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX0uY2FsY2l0ZS1mbG9hdGluZy11aS1hcnJvd19fc3Ryb2tle3N0cm9rZTp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX0uY29udGFpbmVye3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjtib3JkZXItcmFkaXVzOjAuMjVyZW07cGFkZGluZy1ibG9jazowLjc1cmVtO3BhZGRpbmctaW5saW5lOjFyZW07Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpO21heC1pbmxpbmUtc2l6ZToyMHJlbTttYXgtYmxvY2stc2l6ZToyMHJlbTt0ZXh0LWFsaWduOnN0YXJ0fS5jYWxjaXRlLWZsb2F0aW5nLXVpLWFuaW17Ym9yZGVyLXJhZGl1czowLjI1cmVtO2JvcmRlci13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKX0uYXJyb3c6OmJlZm9yZXtvdXRsaW5lOjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX1cIjtcblxuY29uc3QgbWFuYWdlciA9IG5ldyBUb29sdGlwTWFuYWdlcigpO1xuY29uc3QgVG9vbHRpcCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlVG9vbHRpcEJlZm9yZUNsb3NlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVG9vbHRpcEJlZm9yZUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZVRvb2x0aXBDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVRvb2x0aXBDbG9zZVwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVUb29sdGlwQmVmb3JlT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZVRvb2x0aXBCZWZvcmVPcGVuXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZVRvb2x0aXBPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlVG9vbHRpcE9wZW5cIiwgNik7XG4gICAgdGhpcy5ndWlkID0gYGNhbGNpdGUtdG9vbHRpcC0ke2d1aWQoKX1gO1xuICAgIHRoaXMuaGFzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgPSBcIm9wYWNpdHlcIjtcbiAgICB0aGlzLnNldFRyYW5zaXRpb25FbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy50cmFuc2l0aW9uRWwgPSBlbDtcbiAgICAgIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgfTtcbiAgICB0aGlzLnNldFVwUmVmZXJlbmNlRWxlbWVudCA9ICh3YXJuID0gdHJ1ZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVSZWZlcmVuY2VzKCk7XG4gICAgICB0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgPSBnZXRFZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KHRoaXMuZWwpO1xuICAgICAgY29ubmVjdEZsb2F0aW5nVUkodGhpcywgdGhpcy5lZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCB0aGlzLmVsKTtcbiAgICAgIGNvbnN0IHsgZWwsIHJlZmVyZW5jZUVsZW1lbnQsIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgfSA9IHRoaXM7XG4gICAgICBpZiAod2FybiAmJiByZWZlcmVuY2VFbGVtZW50ICYmICFlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgJHtlbC50YWdOYW1lfTogcmVmZXJlbmNlLWVsZW1lbnQgaWQgXCIke3JlZmVyZW5jZUVsZW1lbnR9XCIgd2FzIG5vdCBmb3VuZC5gLCB7XG4gICAgICAgICAgZWxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkZFJlZmVyZW5jZXMoKTtcbiAgICB9O1xuICAgIHRoaXMuZ2V0SWQgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lbC5pZCB8fCB0aGlzLmd1aWQ7XG4gICAgfTtcbiAgICB0aGlzLmFkZFJlZmVyZW5jZXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgfSA9IHRoaXM7XG4gICAgICBpZiAoIWVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaWQgPSB0aGlzLmdldElkKCk7XG4gICAgICBpZiAoXCJzZXRBdHRyaWJ1dGVcIiBpbiBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQuc2V0QXR0cmlidXRlKEFSSUFfREVTQ1JJQkVEX0JZLCBpZCk7XG4gICAgICB9XG4gICAgICBtYW5hZ2VyLnJlZ2lzdGVyRWxlbWVudChlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCB0aGlzLmVsKTtcbiAgICB9O1xuICAgIHRoaXMucmVtb3ZlUmVmZXJlbmNlcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCB9ID0gdGhpcztcbiAgICAgIGlmICghZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoXCJyZW1vdmVBdHRyaWJ1dGVcIiBpbiBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICAgIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKEFSSUFfREVTQ1JJQkVEX0JZKTtcbiAgICAgIH1cbiAgICAgIG1hbmFnZXIudW5yZWdpc3RlckVsZW1lbnQoZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCk7XG4gICAgfTtcbiAgICB0aGlzLmNsb3NlT25DbGljayA9IGZhbHNlO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vZmZzZXREaXN0YW5jZSA9IGRlZmF1bHRPZmZzZXREaXN0YW5jZTtcbiAgICB0aGlzLm9mZnNldFNraWRkaW5nID0gMDtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbmluZyA9IFwiYWJzb2x1dGVcIjtcbiAgICB0aGlzLnBsYWNlbWVudCA9IFwiYXV0b1wiO1xuICAgIHRoaXMucmVmZXJlbmNlRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5mbG9hdGluZ0xheW91dCA9IFwidmVydGljYWxcIjtcbiAgfVxuICBvZmZzZXREaXN0YW5jZU9mZnNldEhhbmRsZXIoKSB7XG4gICAgdGhpcy5yZXBvc2l0aW9uKHRydWUpO1xuICB9XG4gIG9mZnNldFNraWRkaW5nSGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgb3BlbkhhbmRsZXIodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMucmVwb3NpdGlvbih0cnVlKTtcbiAgICB9XG4gIH1cbiAgb3ZlcmxheVBvc2l0aW9uaW5nSGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgcGxhY2VtZW50SGFuZGxlcigpIHtcbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gIH1cbiAgcmVmZXJlbmNlRWxlbWVudEhhbmRsZXIoKSB7XG4gICAgdGhpcy5zZXRVcFJlZmVyZW5jZUVsZW1lbnQoKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy5zZXRVcFJlZmVyZW5jZUVsZW1lbnQodGhpcy5oYXNMb2FkZWQpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgaWYgKHRoaXMucmVmZXJlbmNlRWxlbWVudCAmJiAhdGhpcy5lZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50KSB7XG4gICAgICB0aGlzLnNldFVwUmVmZXJlbmNlRWxlbWVudCgpO1xuICAgIH1cbiAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgdGhpcy5oYXNMb2FkZWQgPSB0cnVlO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVtb3ZlUmVmZXJlbmNlcygpO1xuICAgIGRpc2Nvbm5lY3RGbG9hdGluZ1VJKHRoaXMsIHRoaXMuZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCwgdGhpcy5lbCk7XG4gICAgZGlzY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwYXJhbSBkZWxheWVkXG4gICAqL1xuICBhc3luYyByZXBvc2l0aW9uKGRlbGF5ZWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgZWwsIGVmZmVjdGl2ZVJlZmVyZW5jZUVsZW1lbnQsIHBsYWNlbWVudCwgb3ZlcmxheVBvc2l0aW9uaW5nLCBvZmZzZXREaXN0YW5jZSwgb2Zmc2V0U2tpZGRpbmcsIGFycm93RWwgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHJlcG9zaXRpb24odGhpcywge1xuICAgICAgZmxvYXRpbmdFbDogZWwsXG4gICAgICByZWZlcmVuY2VFbDogZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCxcbiAgICAgIG92ZXJsYXlQb3NpdGlvbmluZyxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIG9mZnNldERpc3RhbmNlLFxuICAgICAgb2Zmc2V0U2tpZGRpbmcsXG4gICAgICBhcnJvd0VsLFxuICAgICAgdHlwZTogXCJ0b29sdGlwXCJcbiAgICB9LCBkZWxheWVkKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9uQmVmb3JlT3BlbigpIHtcbiAgICB0aGlzLmNhbGNpdGVUb29sdGlwQmVmb3JlT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25PcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZVRvb2x0aXBPcGVuLmVtaXQoKTtcbiAgfVxuICBvbkJlZm9yZUNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZVRvb2x0aXBCZWZvcmVDbG9zZS5lbWl0KCk7XG4gIH1cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVUb29sdGlwQ2xvc2UuZW1pdCgpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlZmZlY3RpdmVSZWZlcmVuY2VFbGVtZW50LCBsYWJlbCwgb3BlbiwgZmxvYXRpbmdMYXlvdXQgfSA9IHRoaXM7XG4gICAgY29uc3QgZGlzcGxheWVkID0gZWZmZWN0aXZlUmVmZXJlbmNlRWxlbWVudCAmJiBvcGVuO1xuICAgIGNvbnN0IGhpZGRlbiA9ICFkaXNwbGF5ZWQ7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWhpZGRlblwiOiB0b0FyaWFCb29sZWFuKGhpZGRlbiksIFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgXCJhcmlhLWxpdmVcIjogXCJwb2xpdGVcIiwgXCJjYWxjaXRlLWh5ZHJhdGVkLWhpZGRlblwiOiBoaWRkZW4sIGlkOiB0aGlzLmdldElkKCksIHJvbGU6IFwidG9vbHRpcFwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbRmxvYXRpbmdDU1MuYW5pbWF0aW9uXTogdHJ1ZSxcbiAgICAgICAgW0Zsb2F0aW5nQ1NTLmFuaW1hdGlvbkFjdGl2ZV06IGRpc3BsYXllZFxuICAgICAgfSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldFRyYW5zaXRpb25FbCB9LCBoKEZsb2F0aW5nQXJyb3csIHsgZmxvYXRpbmdMYXlvdXQ6IGZsb2F0aW5nTGF5b3V0LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChhcnJvd0VsKSA9PiAodGhpcy5hcnJvd0VsID0gYXJyb3dFbCkgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRhaW5lciB9LCBoKFwic2xvdFwiLCBudWxsKSkpKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwib2Zmc2V0RGlzdGFuY2VcIjogW1wib2Zmc2V0RGlzdGFuY2VPZmZzZXRIYW5kbGVyXCJdLFxuICAgIFwib2Zmc2V0U2tpZGRpbmdcIjogW1wib2Zmc2V0U2tpZGRpbmdIYW5kbGVyXCJdLFxuICAgIFwib3BlblwiOiBbXCJvcGVuSGFuZGxlclwiXSxcbiAgICBcIm92ZXJsYXlQb3NpdGlvbmluZ1wiOiBbXCJvdmVybGF5UG9zaXRpb25pbmdIYW5kbGVyXCJdLFxuICAgIFwicGxhY2VtZW50XCI6IFtcInBsYWNlbWVudEhhbmRsZXJcIl0sXG4gICAgXCJyZWZlcmVuY2VFbGVtZW50XCI6IFtcInJlZmVyZW5jZUVsZW1lbnRIYW5kbGVyXCJdXG4gIH07IH1cbn07XG5Ub29sdGlwLnN0eWxlID0gdG9vbHRpcENzcztcblxuZXhwb3J0IHsgVG9vbHRpcCBhcyBjYWxjaXRlX3Rvb2x0aXAgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==