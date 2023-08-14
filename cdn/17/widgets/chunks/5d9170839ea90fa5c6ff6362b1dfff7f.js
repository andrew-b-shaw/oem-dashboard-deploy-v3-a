"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-action-pad_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/ExpandToggle-7061277b.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/ExpandToggle-7061277b.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ ExpandToggle),
/* harmony export */   "a": () => (/* binding */ overflowActions),
/* harmony export */   "b": () => (/* binding */ getOverflowCount),
/* harmony export */   "g": () => (/* binding */ geActionDimensions),
/* harmony export */   "o": () => (/* binding */ overflowActionsDebounceInMs),
/* harmony export */   "q": () => (/* binding */ queryActions),
/* harmony export */   "t": () => (/* binding */ toggleChildActionText)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _resources_fa08bf1a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources-fa08bf1a.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-fa08bf1a.js");
/* harmony import */ var _resources_99f0ae1b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources-99f0ae1b.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-99f0ae1b.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */





const overflowActionsDebounceInMs = 150;
const groupBufferPx = 2;
const getAverage = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
const geActionDimensions = (actions) => {
  const actionLen = actions?.length;
  return {
    actionWidth: actionLen ? getAverage(actions.map((action) => action.clientWidth || 0)) : 0,
    actionHeight: actionLen ? getAverage(actions.map((action) => action.clientHeight || 0)) : 0
  };
};
const getMaxActionCount = ({ width, actionWidth, layout, height, actionHeight, groupCount }) => {
  const maxContainerPx = layout === "horizontal" ? width : height;
  const avgItemPx = layout === "horizontal" ? actionWidth : actionHeight;
  return Math.floor((maxContainerPx - groupCount * groupBufferPx) / avgItemPx);
};
const getOverflowCount = ({ layout, actionCount, actionWidth, width, actionHeight, height, groupCount }) => {
  return Math.max(actionCount - getMaxActionCount({ width, actionWidth, layout, height, actionHeight, groupCount }), 0);
};
const queryActions = (el) => {
  return Array.from(el.querySelectorAll("calcite-action")).filter((action) => action.closest("calcite-action-menu") ? action.slot === _resources_99f0ae1b_js__WEBPACK_IMPORTED_MODULE_3__.S.trigger : true);
};
const overflowActions = ({ actionGroups, expanded, overflowCount }) => {
  let needToSlotCount = overflowCount;
  actionGroups.reverse().forEach((group) => {
    let slottedWithinGroupCount = 0;
    const groupActions = queryActions(group).reverse();
    groupActions.forEach((groupAction) => {
      if (groupAction.slot === _resources_fa08bf1a_js__WEBPACK_IMPORTED_MODULE_2__.S.menuActions) {
        groupAction.removeAttribute("slot");
        groupAction.textEnabled = expanded;
      }
    });
    if (needToSlotCount > 0) {
      groupActions.some((groupAction) => {
        const unslottedActions = groupActions.filter((action) => !action.slot);
        if (unslottedActions.length > 1 && groupActions.length > 2 && !groupAction.closest("calcite-action-menu")) {
          groupAction.textEnabled = true;
          groupAction.setAttribute("slot", _resources_fa08bf1a_js__WEBPACK_IMPORTED_MODULE_2__.S.menuActions);
          slottedWithinGroupCount++;
          if (slottedWithinGroupCount > 1) {
            needToSlotCount--;
          }
        }
        return needToSlotCount < 1;
      });
    }
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.f)(group);
  });
};

const ICONS = {
  chevronsLeft: "chevrons-left",
  chevronsRight: "chevrons-right"
};
function getCalcitePosition(position, el) {
  return position || el.closest("calcite-shell-panel")?.position || "start";
}
function toggleChildActionText({ el, expanded }) {
  queryActions(el)
    .filter((el) => el.slot !== _resources_fa08bf1a_js__WEBPACK_IMPORTED_MODULE_2__.S.menuActions)
    .forEach((action) => (action.textEnabled = expanded));
  el.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((el) => (el.expanded = expanded));
}
const setTooltipReference = ({ tooltip, referenceElement, expanded, ref }) => {
  if (tooltip) {
    tooltip.referenceElement = !expanded && referenceElement ? referenceElement : null;
  }
  if (ref) {
    ref(referenceElement);
  }
  return referenceElement;
};
const ExpandToggle = ({ expanded, intlExpand, intlCollapse, toggle, el, position, tooltip, ref, scale }) => {
  const rtl = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.b)(el) === "rtl";
  const expandText = expanded ? intlCollapse : intlExpand;
  const icons = [ICONS.chevronsLeft, ICONS.chevronsRight];
  if (rtl) {
    icons.reverse();
  }
  const end = getCalcitePosition(position, el) === "end";
  const expandIcon = end ? icons[1] : icons[0];
  const collapseIcon = end ? icons[0] : icons[1];
  const actionNode = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action", { icon: expanded ? expandIcon : collapseIcon, onClick: toggle, scale: scale, text: expandText, textEnabled: expanded, 
    // eslint-disable-next-line react/jsx-sort-props
    ref: (referenceElement) => setTooltipReference({ tooltip, referenceElement, expanded, ref }) }));
  return actionNode;
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-action-pad.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-action-pad.entry.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_action_pad": () => (/* binding */ ActionPad)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditionalSlot-946fb911.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-946fb911.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExpandToggle-7061277b.js */ "./node_modules/@esri/calcite-components/dist/esm/ExpandToggle-7061277b.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _resources_fa08bf1a_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resources-fa08bf1a.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-fa08bf1a.js");
/* harmony import */ var _resources_99f0ae1b_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resources-99f0ae1b.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-99f0ae1b.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */














const CSS = {
  actionGroupBottom: "action-group--bottom",
  container: "container"
};
const SLOTS = {
  expandTooltip: "expand-tooltip"
};

const actionPadCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.125rem;--calcite-action-pad-expanded-max-width:auto;background:transparent}:host([expanded][layout=vertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width)}::slotted(calcite-action-group){border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout=horizontal]) .container{flex-direction:row}:host([layout=horizontal]) .container .action-group--bottom{padding:0px}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0px;padding:0px;border-inline-end-width:1px}::slotted(calcite-action-group:last-child){border-block-end-width:0px}";

const ActionPad = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteActionPadToggle = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteActionPadToggle", 6);
    this.mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_7__.c)("mutation", () => this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group"))));
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.actionMenuOpenHandler = (event) => {
      if (event.target.menuOpen) {
        const composedPath = event.composedPath();
        Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((group) => {
          if (!composedPath.includes(group)) {
            group.menuOpen = false;
          }
        });
      }
    };
    this.toggleExpand = () => {
      this.expanded = !this.expanded;
      this.calciteActionPadToggle.emit();
    };
    this.setExpandToggleRef = (el) => {
      this.expandToggleEl = el;
    };
    this.handleDefaultSlotChange = (event) => {
      const groups = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.s)(event).filter((el) => el?.matches("calcite-action-group"));
      this.setGroupLayout(groups);
    };
    this.expandDisabled = false;
    this.expanded = false;
    this.layout = "vertical";
    this.position = undefined;
    this.scale = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
  }
  expandedHandler(expanded) {
    (0,_ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_6__.t)({ el: this.el, expanded });
  }
  layoutHandler() {
    this.updateGroups();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  disconnectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
    const { el, expanded } = this;
    (0,_ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_6__.t)({ el, expanded });
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    this.el?.focus();
  }
  updateGroups() {
    this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")));
  }
  setGroupLayout(groups) {
    groups.forEach((group) => (group.layout = this.layout));
  }
  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------
  renderBottomActionGroup() {
    const { expanded, expandDisabled, messages, el, position, toggleExpand, scale, layout } = this;
    const tooltip = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.g)(el, SLOTS.expandTooltip);
    const expandToggleNode = !expandDisabled ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_6__.E, { el: el, expanded: expanded, intlCollapse: messages.collapse, intlExpand: messages.expand, position: position, scale: scale, toggle: toggleExpand, tooltip: tooltip,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setExpandToggleRef })) : null;
    return expandToggleNode ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action-group", { class: CSS.actionGroupBottom, layout: layout, scale: scale }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.expandTooltip }), expandToggleNode)) : null;
  }
  render() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { onCalciteActionMenuOpen: this.actionMenuOpenHandler }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.container }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }), this.renderBottomActionGroup())));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "layout": ["layoutHandler"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
ActionPad.style = actionPadCss;




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




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/resources-99f0ae1b.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/resources-99f0ae1b.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CSS),
/* harmony export */   "I": () => (/* binding */ ICONS),
/* harmony export */   "S": () => (/* binding */ SLOTS)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
const CSS = {
  menu: "menu",
  defaultTrigger: "default-trigger"
};
const SLOTS = {
  tooltip: "tooltip",
  trigger: "trigger"
};
const ICONS = {
  menu: "ellipsis"
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/resources-fa08bf1a.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/resources-fa08bf1a.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ICONS),
/* harmony export */   "S": () => (/* binding */ SLOTS)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
const SLOTS = {
  menuActions: "menu-actions",
  menuTooltip: "menu-tooltip"
};
const ICONS = {
  menu: "ellipsis"
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNWQ5MTcwODM5ZWE5MGZhNWM2ZmY2MzYyYjFkZmZmN2YuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBEO0FBQ0g7QUFDQTtBQUNGOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4REFBOEQ7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkVBQTJFO0FBQ3ZHLG9EQUFvRCw4REFBOEQ7QUFDbEg7QUFDQTtBQUNBLHNJQUFzSSw2REFBYTtBQUNuSjtBQUNBLDJCQUEyQix1Q0FBdUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpRUFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaUVBQW1CO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLElBQUkscURBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQztBQUNBLGdDQUFnQyxpRUFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBDQUEwQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtFQUErRTtBQUN2RyxjQUFjLG1EQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQUMscUJBQXFCO0FBQzVDO0FBQ0EscURBQXFELDBDQUEwQyxHQUFHO0FBQ2xHO0FBQ0E7O0FBRW9MOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdwTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ2lCO0FBQ3RDO0FBQzRCO0FBQzdCO0FBQ29DO0FBQ2hDO0FBQzdCO0FBQ2xDO0FBQ0s7QUFDTjtBQUNNO0FBQ0E7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxzQkFBc0IsZ0RBQWdELCtCQUErQixzQ0FBc0MsUUFBUSxzQkFBc0IsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLE1BQU0sY0FBYyxjQUFjLEdBQUcsVUFBVSxLQUFLLFdBQVcsTUFBTSx1RUFBdUUsdUJBQXVCLDZDQUE2Qyx1QkFBdUIsOENBQThDLDZEQUE2RCxnQ0FBZ0MsaUJBQWlCLDJCQUEyQixtQkFBbUIsd0NBQXdDLGtCQUFrQixXQUFXLG9CQUFvQixzQkFBc0IsZ0JBQWdCLHNCQUFzQiw4Q0FBOEMsb0ZBQW9GLG1HQUFtRyx1R0FBdUcsc0JBQXNCLFlBQVkseUJBQXlCLHNCQUFzQixzQ0FBc0MsbUJBQW1CLDREQUE0RCxZQUFZLHNFQUFzRSxpQkFBaUIsWUFBWSw0QkFBNEIsMkNBQTJDLDJCQUEyQjs7QUFFbG9HO0FBQ0E7QUFDQSxJQUFJLHFEQUFnQjtBQUNwQixrQ0FBa0MscURBQVc7QUFDN0MsNEJBQTRCLHlEQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFxQixHQUFHLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnSkFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQStCO0FBQ25DLElBQUksc0RBQWdCO0FBQ3BCLElBQUksZ0pBQWU7QUFDbkI7QUFDQTtBQUNBLElBQUksc0RBQW1CO0FBQ3ZCLElBQUksZ0pBQWtCO0FBQ3RCLElBQUksK0RBQWtDO0FBQ3RDO0FBQ0E7QUFDQSxJQUFJLHdEQUFzQjtBQUMxQixZQUFZLGVBQWU7QUFDM0IsSUFBSSw0REFBcUIsR0FBRyxjQUFjO0FBQzFDLFVBQVUsZ0pBQWE7QUFDdkI7QUFDQTtBQUNBLElBQUksd0RBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx3REFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnRkFBZ0Y7QUFDNUYsb0JBQW9CLG1EQUFVO0FBQzlCLGdEQUFnRCxxREFBQyxDQUFDLHdEQUFZLElBQUk7QUFDbEU7QUFDQSxvQ0FBb0M7QUFDcEMsK0JBQStCLHFEQUFDLDJCQUEyQiw0REFBNEQsRUFBRSxxREFBQyxXQUFXLDJCQUEyQjtBQUNoSztBQUNBO0FBQ0EsWUFBWSxxREFBQyxDQUFDLGlEQUFJLElBQUkscURBQXFELEVBQUUscURBQUMsVUFBVSxzQkFBc0IsRUFBRSxxREFBQyxXQUFXLDRDQUE0QztBQUN4SztBQUNBLGdDQUFnQztBQUNoQyw0QkFBNEI7QUFDNUIsYUFBYSxPQUFPLHFEQUFVO0FBQzlCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hKM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1RDtBQUNPOztBQUU5RDtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUF3RTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5REFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RUFBd0U7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLElBQUkscURBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRXlGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNGOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNEdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakI1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vRXhwYW5kVG9nZ2xlLTcwNjEyNzdiLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtYWN0aW9uLXBhZC5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jb25kaXRpb25hbFNsb3QtOTQ2ZmI5MTEuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vbG9hZGFibGUtODA1OGUzMDAuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vcmVzb3VyY2VzLTk5ZjBhZTFiLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3Jlc291cmNlcy1mYTA4YmYxYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgZiBhcyBmb3JjZVVwZGF0ZSwgaCB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXRFbGVtZW50RGlyIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0IHsgUyBhcyBTTE9UUyQxIH0gZnJvbSAnLi9yZXNvdXJjZXMtZmEwOGJmMWEuanMnO1xuaW1wb3J0IHsgUyBhcyBTTE9UUyB9IGZyb20gJy4vcmVzb3VyY2VzLTk5ZjBhZTFiLmpzJztcblxuY29uc3Qgb3ZlcmZsb3dBY3Rpb25zRGVib3VuY2VJbk1zID0gMTUwO1xuY29uc3QgZ3JvdXBCdWZmZXJQeCA9IDI7XG5jb25zdCBnZXRBdmVyYWdlID0gKGFycikgPT4gYXJyLnJlZHVjZSgocCwgYykgPT4gcCArIGMsIDApIC8gYXJyLmxlbmd0aDtcbmNvbnN0IGdlQWN0aW9uRGltZW5zaW9ucyA9IChhY3Rpb25zKSA9PiB7XG4gIGNvbnN0IGFjdGlvbkxlbiA9IGFjdGlvbnM/Lmxlbmd0aDtcbiAgcmV0dXJuIHtcbiAgICBhY3Rpb25XaWR0aDogYWN0aW9uTGVuID8gZ2V0QXZlcmFnZShhY3Rpb25zLm1hcCgoYWN0aW9uKSA9PiBhY3Rpb24uY2xpZW50V2lkdGggfHwgMCkpIDogMCxcbiAgICBhY3Rpb25IZWlnaHQ6IGFjdGlvbkxlbiA/IGdldEF2ZXJhZ2UoYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4gYWN0aW9uLmNsaWVudEhlaWdodCB8fCAwKSkgOiAwXG4gIH07XG59O1xuY29uc3QgZ2V0TWF4QWN0aW9uQ291bnQgPSAoeyB3aWR0aCwgYWN0aW9uV2lkdGgsIGxheW91dCwgaGVpZ2h0LCBhY3Rpb25IZWlnaHQsIGdyb3VwQ291bnQgfSkgPT4ge1xuICBjb25zdCBtYXhDb250YWluZXJQeCA9IGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgPyB3aWR0aCA6IGhlaWdodDtcbiAgY29uc3QgYXZnSXRlbVB4ID0gbGF5b3V0ID09PSBcImhvcml6b250YWxcIiA/IGFjdGlvbldpZHRoIDogYWN0aW9uSGVpZ2h0O1xuICByZXR1cm4gTWF0aC5mbG9vcigobWF4Q29udGFpbmVyUHggLSBncm91cENvdW50ICogZ3JvdXBCdWZmZXJQeCkgLyBhdmdJdGVtUHgpO1xufTtcbmNvbnN0IGdldE92ZXJmbG93Q291bnQgPSAoeyBsYXlvdXQsIGFjdGlvbkNvdW50LCBhY3Rpb25XaWR0aCwgd2lkdGgsIGFjdGlvbkhlaWdodCwgaGVpZ2h0LCBncm91cENvdW50IH0pID0+IHtcbiAgcmV0dXJuIE1hdGgubWF4KGFjdGlvbkNvdW50IC0gZ2V0TWF4QWN0aW9uQ291bnQoeyB3aWR0aCwgYWN0aW9uV2lkdGgsIGxheW91dCwgaGVpZ2h0LCBhY3Rpb25IZWlnaHQsIGdyb3VwQ291bnQgfSksIDApO1xufTtcbmNvbnN0IHF1ZXJ5QWN0aW9ucyA9IChlbCkgPT4ge1xuICByZXR1cm4gQXJyYXkuZnJvbShlbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1hY3Rpb25cIikpLmZpbHRlcigoYWN0aW9uKSA9PiBhY3Rpb24uY2xvc2VzdChcImNhbGNpdGUtYWN0aW9uLW1lbnVcIikgPyBhY3Rpb24uc2xvdCA9PT0gU0xPVFMudHJpZ2dlciA6IHRydWUpO1xufTtcbmNvbnN0IG92ZXJmbG93QWN0aW9ucyA9ICh7IGFjdGlvbkdyb3VwcywgZXhwYW5kZWQsIG92ZXJmbG93Q291bnQgfSkgPT4ge1xuICBsZXQgbmVlZFRvU2xvdENvdW50ID0gb3ZlcmZsb3dDb3VudDtcbiAgYWN0aW9uR3JvdXBzLnJldmVyc2UoKS5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgIGxldCBzbG90dGVkV2l0aGluR3JvdXBDb3VudCA9IDA7XG4gICAgY29uc3QgZ3JvdXBBY3Rpb25zID0gcXVlcnlBY3Rpb25zKGdyb3VwKS5yZXZlcnNlKCk7XG4gICAgZ3JvdXBBY3Rpb25zLmZvckVhY2goKGdyb3VwQWN0aW9uKSA9PiB7XG4gICAgICBpZiAoZ3JvdXBBY3Rpb24uc2xvdCA9PT0gU0xPVFMkMS5tZW51QWN0aW9ucykge1xuICAgICAgICBncm91cEFjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoXCJzbG90XCIpO1xuICAgICAgICBncm91cEFjdGlvbi50ZXh0RW5hYmxlZCA9IGV4cGFuZGVkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChuZWVkVG9TbG90Q291bnQgPiAwKSB7XG4gICAgICBncm91cEFjdGlvbnMuc29tZSgoZ3JvdXBBY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgdW5zbG90dGVkQWN0aW9ucyA9IGdyb3VwQWN0aW9ucy5maWx0ZXIoKGFjdGlvbikgPT4gIWFjdGlvbi5zbG90KTtcbiAgICAgICAgaWYgKHVuc2xvdHRlZEFjdGlvbnMubGVuZ3RoID4gMSAmJiBncm91cEFjdGlvbnMubGVuZ3RoID4gMiAmJiAhZ3JvdXBBY3Rpb24uY2xvc2VzdChcImNhbGNpdGUtYWN0aW9uLW1lbnVcIikpIHtcbiAgICAgICAgICBncm91cEFjdGlvbi50ZXh0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgZ3JvdXBBY3Rpb24uc2V0QXR0cmlidXRlKFwic2xvdFwiLCBTTE9UUyQxLm1lbnVBY3Rpb25zKTtcbiAgICAgICAgICBzbG90dGVkV2l0aGluR3JvdXBDb3VudCsrO1xuICAgICAgICAgIGlmIChzbG90dGVkV2l0aGluR3JvdXBDb3VudCA+IDEpIHtcbiAgICAgICAgICAgIG5lZWRUb1Nsb3RDb3VudC0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmVlZFRvU2xvdENvdW50IDwgMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmb3JjZVVwZGF0ZShncm91cCk7XG4gIH0pO1xufTtcblxuY29uc3QgSUNPTlMgPSB7XG4gIGNoZXZyb25zTGVmdDogXCJjaGV2cm9ucy1sZWZ0XCIsXG4gIGNoZXZyb25zUmlnaHQ6IFwiY2hldnJvbnMtcmlnaHRcIlxufTtcbmZ1bmN0aW9uIGdldENhbGNpdGVQb3NpdGlvbihwb3NpdGlvbiwgZWwpIHtcbiAgcmV0dXJuIHBvc2l0aW9uIHx8IGVsLmNsb3Nlc3QoXCJjYWxjaXRlLXNoZWxsLXBhbmVsXCIpPy5wb3NpdGlvbiB8fCBcInN0YXJ0XCI7XG59XG5mdW5jdGlvbiB0b2dnbGVDaGlsZEFjdGlvblRleHQoeyBlbCwgZXhwYW5kZWQgfSkge1xuICBxdWVyeUFjdGlvbnMoZWwpXG4gICAgLmZpbHRlcigoZWwpID0+IGVsLnNsb3QgIT09IFNMT1RTJDEubWVudUFjdGlvbnMpXG4gICAgLmZvckVhY2goKGFjdGlvbikgPT4gKGFjdGlvbi50ZXh0RW5hYmxlZCA9IGV4cGFuZGVkKSk7XG4gIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWFjdGlvbi1ncm91cCwgY2FsY2l0ZS1hY3Rpb24tbWVudVwiKS5mb3JFYWNoKChlbCkgPT4gKGVsLmV4cGFuZGVkID0gZXhwYW5kZWQpKTtcbn1cbmNvbnN0IHNldFRvb2x0aXBSZWZlcmVuY2UgPSAoeyB0b29sdGlwLCByZWZlcmVuY2VFbGVtZW50LCBleHBhbmRlZCwgcmVmIH0pID0+IHtcbiAgaWYgKHRvb2x0aXApIHtcbiAgICB0b29sdGlwLnJlZmVyZW5jZUVsZW1lbnQgPSAhZXhwYW5kZWQgJiYgcmVmZXJlbmNlRWxlbWVudCA/IHJlZmVyZW5jZUVsZW1lbnQgOiBudWxsO1xuICB9XG4gIGlmIChyZWYpIHtcbiAgICByZWYocmVmZXJlbmNlRWxlbWVudCk7XG4gIH1cbiAgcmV0dXJuIHJlZmVyZW5jZUVsZW1lbnQ7XG59O1xuY29uc3QgRXhwYW5kVG9nZ2xlID0gKHsgZXhwYW5kZWQsIGludGxFeHBhbmQsIGludGxDb2xsYXBzZSwgdG9nZ2xlLCBlbCwgcG9zaXRpb24sIHRvb2x0aXAsIHJlZiwgc2NhbGUgfSkgPT4ge1xuICBjb25zdCBydGwgPSBnZXRFbGVtZW50RGlyKGVsKSA9PT0gXCJydGxcIjtcbiAgY29uc3QgZXhwYW5kVGV4dCA9IGV4cGFuZGVkID8gaW50bENvbGxhcHNlIDogaW50bEV4cGFuZDtcbiAgY29uc3QgaWNvbnMgPSBbSUNPTlMuY2hldnJvbnNMZWZ0LCBJQ09OUy5jaGV2cm9uc1JpZ2h0XTtcbiAgaWYgKHJ0bCkge1xuICAgIGljb25zLnJldmVyc2UoKTtcbiAgfVxuICBjb25zdCBlbmQgPSBnZXRDYWxjaXRlUG9zaXRpb24ocG9zaXRpb24sIGVsKSA9PT0gXCJlbmRcIjtcbiAgY29uc3QgZXhwYW5kSWNvbiA9IGVuZCA/IGljb25zWzFdIDogaWNvbnNbMF07XG4gIGNvbnN0IGNvbGxhcHNlSWNvbiA9IGVuZCA/IGljb25zWzBdIDogaWNvbnNbMV07XG4gIGNvbnN0IGFjdGlvbk5vZGUgPSAoaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgaWNvbjogZXhwYW5kZWQgPyBleHBhbmRJY29uIDogY29sbGFwc2VJY29uLCBvbkNsaWNrOiB0b2dnbGUsIHNjYWxlOiBzY2FsZSwgdGV4dDogZXhwYW5kVGV4dCwgdGV4dEVuYWJsZWQ6IGV4cGFuZGVkLCBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICByZWY6IChyZWZlcmVuY2VFbGVtZW50KSA9PiBzZXRUb29sdGlwUmVmZXJlbmNlKHsgdG9vbHRpcCwgcmVmZXJlbmNlRWxlbWVudCwgZXhwYW5kZWQsIHJlZiB9KSB9KSk7XG4gIHJldHVybiBhY3Rpb25Ob2RlO1xufTtcblxuZXhwb3J0IHsgRXhwYW5kVG9nZ2xlIGFzIEUsIG92ZXJmbG93QWN0aW9ucyBhcyBhLCBnZXRPdmVyZmxvd0NvdW50IGFzIGIsIGdlQWN0aW9uRGltZW5zaW9ucyBhcyBnLCBvdmVyZmxvd0FjdGlvbnNEZWJvdW5jZUluTXMgYXMgbywgcXVlcnlBY3Rpb25zIGFzIHEsIHRvZ2dsZUNoaWxkQWN0aW9uVGV4dCBhcyB0IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC05NDZmYjkxMS5qcyc7XG5pbXBvcnQgeyBzIGFzIHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzLCBnIGFzIGdldFNsb3R0ZWQgfSBmcm9tICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5pbXBvcnQgeyBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtODA1OGUzMDAuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcyB9IGZyb20gJy4vdDluLWZhYzEzMzk0LmpzJztcbmltcG9ydCB7IHQgYXMgdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0LCBFIGFzIEV4cGFuZFRvZ2dsZSB9IGZyb20gJy4vRXhwYW5kVG9nZ2xlLTcwNjEyNzdiLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5pbXBvcnQgJy4vZ3VpZC03MTM2OTc0Yi5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcbmltcG9ydCAnLi9rZXktOGZmMGQxMDEuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy1mYTA4YmYxYS5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLTk5ZjBhZTFiLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBhY3Rpb25Hcm91cEJvdHRvbTogXCJhY3Rpb24tZ3JvdXAtLWJvdHRvbVwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCJcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgZXhwYW5kVG9vbHRpcDogXCJleHBhbmQtdG9vbHRpcFwiXG59O1xuXG5jb25zdCBhY3Rpb25QYWRDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpob3N0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX06aG9zdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7ZGlzcGxheTpibG9ja31Aa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19Omhvc3R7YW5pbWF0aW9uOmluIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSBlYXNlLWluLW91dDtib3JkZXItcmFkaXVzOjAuMTI1cmVtOy0tY2FsY2l0ZS1hY3Rpb24tcGFkLWV4cGFuZGVkLW1heC13aWR0aDphdXRvO2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9Omhvc3QoW2V4cGFuZGVkXVtsYXlvdXQ9dmVydGljYWxdKSAuY29udGFpbmVye21heC1pbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWFjdGlvbi1wYWQtZXhwYW5kZWQtbWF4LXdpZHRoKX06OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tZ3JvdXApe2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtwYWRkaW5nLWJsb2NrOjBweH0uY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93LXk6YXV0bztib3JkZXItcmFkaXVzOjAuMjVyZW07YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJhY2tncm91bmQpOy0tdHctc2hhZG93OjAgNnB4IDIwcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDEycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpOy0tdHctc2hhZG93LWNvbG9yZWQ6MCA2cHggMjBweCAtNHB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgNHB4IDEycHggLTJweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX0uYWN0aW9uLWdyb3VwLS1ib3R0b217ZmxleC1ncm93OjE7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO3BhZGRpbmctYmxvY2stZW5kOjBweH06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuY29udGFpbmVye2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuY29udGFpbmVyIC5hY3Rpb24tZ3JvdXAtLWJvdHRvbXtwYWRkaW5nOjBweH06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuY29udGFpbmVyIDo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbi1ncm91cCl7Ym9yZGVyLXdpZHRoOjBweDtwYWRkaW5nOjBweDtib3JkZXItaW5saW5lLWVuZC13aWR0aDoxcHh9OjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWdyb3VwOmxhc3QtY2hpbGQpe2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MHB4fVwiO1xuXG5jb25zdCBBY3Rpb25QYWQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUFjdGlvblBhZFRvZ2dsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUFjdGlvblBhZFRvZ2dsZVwiLCA2KTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMuc2V0R3JvdXBMYXlvdXQoQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiKSkpKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmFjdGlvbk1lbnVPcGVuSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5tZW51T3Blbikge1xuICAgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiKSkuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgICBpZiAoIWNvbXBvc2VkUGF0aC5pbmNsdWRlcyhncm91cCkpIHtcbiAgICAgICAgICAgIGdyb3VwLm1lbnVPcGVuID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlRXhwYW5kID0gKCkgPT4ge1xuICAgICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICAgICAgdGhpcy5jYWxjaXRlQWN0aW9uUGFkVG9nZ2xlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0RXhwYW5kVG9nZ2xlUmVmID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmV4cGFuZFRvZ2dsZUVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBncm91cHMgPSBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCkuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMoXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiKSk7XG4gICAgICB0aGlzLnNldEdyb3VwTGF5b3V0KGdyb3Vwcyk7XG4gICAgfTtcbiAgICB0aGlzLmV4cGFuZERpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMubGF5b3V0ID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIHRoaXMucG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgZXhwYW5kZWRIYW5kbGVyKGV4cGFuZGVkKSB7XG4gICAgdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0KHsgZWw6IHRoaXMuZWwsIGV4cGFuZGVkIH0pO1xuICB9XG4gIGxheW91dEhhbmRsZXIoKSB7XG4gICAgdGhpcy51cGRhdGVHcm91cHMoKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGNvbnN0IHsgZWwsIGV4cGFuZGVkIH0gPSB0aGlzO1xuICAgIHRvZ2dsZUNoaWxkQWN0aW9uVGV4dCh7IGVsLCBleHBhbmRlZCB9KTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmVsPy5mb2N1cygpO1xuICB9XG4gIHVwZGF0ZUdyb3VwcygpIHtcbiAgICB0aGlzLnNldEdyb3VwTGF5b3V0KEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1hY3Rpb24tZ3JvdXBcIikpKTtcbiAgfVxuICBzZXRHcm91cExheW91dChncm91cHMpIHtcbiAgICBncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IChncm91cC5sYXlvdXQgPSB0aGlzLmxheW91dCkpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBDb21wb25lbnQgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJCb3R0b21BY3Rpb25Hcm91cCgpIHtcbiAgICBjb25zdCB7IGV4cGFuZGVkLCBleHBhbmREaXNhYmxlZCwgbWVzc2FnZXMsIGVsLCBwb3NpdGlvbiwgdG9nZ2xlRXhwYW5kLCBzY2FsZSwgbGF5b3V0IH0gPSB0aGlzO1xuICAgIGNvbnN0IHRvb2x0aXAgPSBnZXRTbG90dGVkKGVsLCBTTE9UUy5leHBhbmRUb29sdGlwKTtcbiAgICBjb25zdCBleHBhbmRUb2dnbGVOb2RlID0gIWV4cGFuZERpc2FibGVkID8gKGgoRXhwYW5kVG9nZ2xlLCB7IGVsOiBlbCwgZXhwYW5kZWQ6IGV4cGFuZGVkLCBpbnRsQ29sbGFwc2U6IG1lc3NhZ2VzLmNvbGxhcHNlLCBpbnRsRXhwYW5kOiBtZXNzYWdlcy5leHBhbmQsIHBvc2l0aW9uOiBwb3NpdGlvbiwgc2NhbGU6IHNjYWxlLCB0b2dnbGU6IHRvZ2dsZUV4cGFuZCwgdG9vbHRpcDogdG9vbHRpcCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldEV4cGFuZFRvZ2dsZVJlZiB9KSkgOiBudWxsO1xuICAgIHJldHVybiBleHBhbmRUb2dnbGVOb2RlID8gKGgoXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiLCB7IGNsYXNzOiBDU1MuYWN0aW9uR3JvdXBCb3R0b20sIGxheW91dDogbGF5b3V0LCBzY2FsZTogc2NhbGUgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5leHBhbmRUb29sdGlwIH0pLCBleHBhbmRUb2dnbGVOb2RlKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNhbGNpdGVBY3Rpb25NZW51T3BlbjogdGhpcy5hY3Rpb25NZW51T3BlbkhhbmRsZXIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGFpbmVyIH0sIGgoXCJzbG90XCIsIHsgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlIH0pLCB0aGlzLnJlbmRlckJvdHRvbUFjdGlvbkdyb3VwKCkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImV4cGFuZGVkXCI6IFtcImV4cGFuZGVkSGFuZGxlclwiXSxcbiAgICBcImxheW91dFwiOiBbXCJsYXlvdXRIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuQWN0aW9uUGFkLnN0eWxlID0gYWN0aW9uUGFkQ3NzO1xuXG5leHBvcnQgeyBBY3Rpb25QYWQgYXMgY2FsY2l0ZV9hY3Rpb25fcGFkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgZiBhcyBmb3JjZVVwZGF0ZSB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcblxuY29uc3Qgb2JzZXJ2ZWQgPSBuZXcgU2V0KCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudC5lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBvYnNlcnZlZC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50XSBvZiBvYnNlcnZlZC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBmb3JjZVVwZGF0ZSh0YXJnZXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBzdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyBcInNldFVwTG9hZGFibGVDb21wb25lbnRcIiBhbmQgXCJzZXRDb21wb25lbnRMb2FkZWRcIiB0byBiZSBjYWxsZWQgZmlyc3QuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHByb21pc2VNYXAuZ2V0KGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IHNldENvbXBvbmVudExvYWRlZCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYywgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBzIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuY29uc3QgQ1NTID0ge1xuICBtZW51OiBcIm1lbnVcIixcbiAgZGVmYXVsdFRyaWdnZXI6IFwiZGVmYXVsdC10cmlnZ2VyXCJcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgdG9vbHRpcDogXCJ0b29sdGlwXCIsXG4gIHRyaWdnZXI6IFwidHJpZ2dlclwiXG59O1xuY29uc3QgSUNPTlMgPSB7XG4gIG1lbnU6IFwiZWxsaXBzaXNcIlxufTtcblxuZXhwb3J0IHsgQ1NTIGFzIEMsIElDT05TIGFzIEksIFNMT1RTIGFzIFMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5jb25zdCBTTE9UUyA9IHtcbiAgbWVudUFjdGlvbnM6IFwibWVudS1hY3Rpb25zXCIsXG4gIG1lbnVUb29sdGlwOiBcIm1lbnUtdG9vbHRpcFwiXG59O1xuY29uc3QgSUNPTlMgPSB7XG4gIG1lbnU6IFwiZWxsaXBzaXNcIlxufTtcblxuZXhwb3J0IHsgSUNPTlMgYXMgSSwgU0xPVFMgYXMgUyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9