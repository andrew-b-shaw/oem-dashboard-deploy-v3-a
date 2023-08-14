"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-action-bar_entry_js"],{

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

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-action-bar.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-action-bar.entry.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_action_bar": () => (/* binding */ ActionBar)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditionalSlot-946fb911.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-946fb911.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ExpandToggle-7061277b.js */ "./node_modules/@esri/calcite-components/dist/esm/ExpandToggle-7061277b.js");
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _resources_fa08bf1a_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resources-fa08bf1a.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-fa08bf1a.js");
/* harmony import */ var _resources_99f0ae1b_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resources-99f0ae1b.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-99f0ae1b.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */















const CSS = {
  actionGroupBottom: "action-group--bottom"
};
const SLOTS = {
  bottomActions: "bottom-actions",
  expandTooltip: "expand-tooltip"
};

const actionBarCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{pointer-events:auto;display:inline-flex;align-self:stretch;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=horizontal]){flex-direction:row}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-ui-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-block-end:0;border-inline-end:1px solid var(--calcite-ui-border-3)}:host([layout=horizontal][expand-disabled]) ::slotted(calcite-action-group:last-of-type){border-inline-end:0}::slotted(calcite-action-group:last-child){border-block-end:0;border-inline-end:0}.action-group--bottom{flex-grow:1;justify-content:flex-end}";

const ActionBar = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteActionBarToggle = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteActionBarToggle", 6);
    this.mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_5__.c)("mutation", () => {
      const { el, expanded } = this;
      (0,_ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_7__.t)({ el, expanded });
      this.overflowActions();
    });
    this.resizeObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_5__.c)("resize", (entries) => this.resizeHandlerEntries(entries));
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
    this.resizeHandlerEntries = (entries) => {
      entries.forEach(this.resizeHandler);
    };
    this.resizeHandler = (entry) => {
      const { width, height } = entry.contentRect;
      this.resize({ width, height });
    };
    this.resize = (0,_debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_8__.d)(({ width, height }) => {
      const { el, expanded, expandDisabled, layout, overflowActionsDisabled } = this;
      if (overflowActionsDisabled ||
        (layout === "vertical" && !height) ||
        (layout === "horizontal" && !width)) {
        return;
      }
      const actions = (0,_ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_7__.q)(el);
      const actionCount = expandDisabled ? actions.length : actions.length + 1;
      const actionGroups = Array.from(el.querySelectorAll("calcite-action-group"));
      this.setGroupLayout(actionGroups);
      const groupCount = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.g)(el, SLOTS.bottomActions) || !expandDisabled
        ? actionGroups.length + 1
        : actionGroups.length;
      const { actionHeight, actionWidth } = (0,_ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_7__.g)(actions);
      const overflowCount = (0,_ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_7__.b)({
        layout,
        actionCount,
        actionHeight,
        actionWidth,
        height,
        width,
        groupCount
      });
      (0,_ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_7__.a)({
        actionGroups,
        expanded,
        overflowCount
      });
    }, _ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_7__.o);
    this.toggleExpand = () => {
      this.expanded = !this.expanded;
      this.calciteActionBarToggle.emit();
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
    this.overflowActionsDisabled = false;
    this.position = undefined;
    this.scale = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  expandHandler() {
    this.overflowActions();
  }
  expandedHandler() {
    const { el, expanded } = this;
    (0,_ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_7__.t)({ el, expanded });
    this.overflowActions();
  }
  layoutHandler() {
    this.updateGroups();
  }
  overflowDisabledHandler(overflowActionsDisabled) {
    overflowActionsDisabled
      ? this.resizeObserver.disconnect()
      : this.resizeObserver.observe(this.el);
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
  componentDidLoad() {
    const { el, expanded } = this;
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
    (0,_ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_7__.t)({ el, expanded });
    this.overflowActions();
  }
  connectedCallback() {
    const { el, expanded } = this;
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    (0,_ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_7__.t)({ el, expanded });
    this.mutationObserver?.observe(el, { childList: true, subtree: true });
    if (!this.overflowActionsDisabled) {
      this.resizeObserver?.observe(el);
    }
    this.overflowActions();
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    this.resizeObserver?.disconnect();
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Overflows actions that won't fit into menus.
   *
   * @internal
   */
  async overflowActions() {
    this.resize({ width: this.el.clientWidth, height: this.el.clientHeight });
  }
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
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderBottomActionGroup() {
    const { expanded, expandDisabled, el, position, toggleExpand, scale, layout, messages } = this;
    const tooltip = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.g)(el, SLOTS.expandTooltip);
    const expandToggleNode = !expandDisabled ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_ExpandToggle_7061277b_js__WEBPACK_IMPORTED_MODULE_7__.E, { el: el, expanded: expanded, intlCollapse: messages.collapse, intlExpand: messages.expand, position: position, scale: scale, toggle: toggleExpand, tooltip: tooltip,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setExpandToggleRef })) : null;
    return (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.g)(el, SLOTS.bottomActions) || expandToggleNode ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action-group", { class: CSS.actionGroupBottom, layout: layout, scale: scale }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.bottomActions }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.expandTooltip }), expandToggleNode)) : null;
  }
  render() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { onCalciteActionMenuOpen: this.actionMenuOpenHandler }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }), this.renderBottomActionGroup()));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "expandDisabled": ["expandHandler"],
    "expanded": ["expandedHandler"],
    "layout": ["layoutHandler"],
    "overflowActionsDisabled": ["overflowDisabledHandler"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
ActionBar.style = actionBarCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNDVhOGRhNzE3OGZhZGI3YWFiY2I4YjI3MGY3YTljZGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBEO0FBQ0g7QUFDQTtBQUNGOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4REFBOEQ7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkVBQTJFO0FBQ3ZHLG9EQUFvRCw4REFBOEQ7QUFDbEg7QUFDQTtBQUNBLHNJQUFzSSw2REFBYTtBQUNuSjtBQUNBLDJCQUEyQix1Q0FBdUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpRUFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaUVBQW1CO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLElBQUkscURBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQztBQUNBLGdDQUFnQyxpRUFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBDQUEwQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtFQUErRTtBQUN2RyxjQUFjLG1EQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQUMscUJBQXFCO0FBQzVDO0FBQ0EscURBQXFELDBDQUEwQyxHQUFHO0FBQ2xHO0FBQ0E7O0FBRW9MOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHcEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RztBQUNp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RUFBd0U7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseURBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0VBQXdFO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQixJQUFJLHFEQUFXO0FBQ2YsR0FBRztBQUNIOztBQUV5Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RHpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRHRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0Qzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVrQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL0V4cGFuZFRvZ2dsZS03MDYxMjc3Yi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLWFjdGlvbi1iYXIuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY29uZGl0aW9uYWxTbG90LTk0NmZiOTExLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2xvYWRhYmxlLTgwNThlMzAwLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3Jlc291cmNlcy05OWYwYWUxYi5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9yZXNvdXJjZXMtZmEwOGJmMWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGYgYXMgZm9yY2VVcGRhdGUsIGggfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGIgYXMgZ2V0RWxlbWVudERpciB9IGZyb20gJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCB7IFMgYXMgU0xPVFMkMSB9IGZyb20gJy4vcmVzb3VyY2VzLWZhMDhiZjFhLmpzJztcbmltcG9ydCB7IFMgYXMgU0xPVFMgfSBmcm9tICcuL3Jlc291cmNlcy05OWYwYWUxYi5qcyc7XG5cbmNvbnN0IG92ZXJmbG93QWN0aW9uc0RlYm91bmNlSW5NcyA9IDE1MDtcbmNvbnN0IGdyb3VwQnVmZmVyUHggPSAyO1xuY29uc3QgZ2V0QXZlcmFnZSA9IChhcnIpID0+IGFyci5yZWR1Y2UoKHAsIGMpID0+IHAgKyBjLCAwKSAvIGFyci5sZW5ndGg7XG5jb25zdCBnZUFjdGlvbkRpbWVuc2lvbnMgPSAoYWN0aW9ucykgPT4ge1xuICBjb25zdCBhY3Rpb25MZW4gPSBhY3Rpb25zPy5sZW5ndGg7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uV2lkdGg6IGFjdGlvbkxlbiA/IGdldEF2ZXJhZ2UoYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4gYWN0aW9uLmNsaWVudFdpZHRoIHx8IDApKSA6IDAsXG4gICAgYWN0aW9uSGVpZ2h0OiBhY3Rpb25MZW4gPyBnZXRBdmVyYWdlKGFjdGlvbnMubWFwKChhY3Rpb24pID0+IGFjdGlvbi5jbGllbnRIZWlnaHQgfHwgMCkpIDogMFxuICB9O1xufTtcbmNvbnN0IGdldE1heEFjdGlvbkNvdW50ID0gKHsgd2lkdGgsIGFjdGlvbldpZHRoLCBsYXlvdXQsIGhlaWdodCwgYWN0aW9uSGVpZ2h0LCBncm91cENvdW50IH0pID0+IHtcbiAgY29uc3QgbWF4Q29udGFpbmVyUHggPSBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiID8gd2lkdGggOiBoZWlnaHQ7XG4gIGNvbnN0IGF2Z0l0ZW1QeCA9IGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgPyBhY3Rpb25XaWR0aCA6IGFjdGlvbkhlaWdodDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoKG1heENvbnRhaW5lclB4IC0gZ3JvdXBDb3VudCAqIGdyb3VwQnVmZmVyUHgpIC8gYXZnSXRlbVB4KTtcbn07XG5jb25zdCBnZXRPdmVyZmxvd0NvdW50ID0gKHsgbGF5b3V0LCBhY3Rpb25Db3VudCwgYWN0aW9uV2lkdGgsIHdpZHRoLCBhY3Rpb25IZWlnaHQsIGhlaWdodCwgZ3JvdXBDb3VudCB9KSA9PiB7XG4gIHJldHVybiBNYXRoLm1heChhY3Rpb25Db3VudCAtIGdldE1heEFjdGlvbkNvdW50KHsgd2lkdGgsIGFjdGlvbldpZHRoLCBsYXlvdXQsIGhlaWdodCwgYWN0aW9uSGVpZ2h0LCBncm91cENvdW50IH0pLCAwKTtcbn07XG5jb25zdCBxdWVyeUFjdGlvbnMgPSAoZWwpID0+IHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtYWN0aW9uXCIpKS5maWx0ZXIoKGFjdGlvbikgPT4gYWN0aW9uLmNsb3Nlc3QoXCJjYWxjaXRlLWFjdGlvbi1tZW51XCIpID8gYWN0aW9uLnNsb3QgPT09IFNMT1RTLnRyaWdnZXIgOiB0cnVlKTtcbn07XG5jb25zdCBvdmVyZmxvd0FjdGlvbnMgPSAoeyBhY3Rpb25Hcm91cHMsIGV4cGFuZGVkLCBvdmVyZmxvd0NvdW50IH0pID0+IHtcbiAgbGV0IG5lZWRUb1Nsb3RDb3VudCA9IG92ZXJmbG93Q291bnQ7XG4gIGFjdGlvbkdyb3Vwcy5yZXZlcnNlKCkuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICBsZXQgc2xvdHRlZFdpdGhpbkdyb3VwQ291bnQgPSAwO1xuICAgIGNvbnN0IGdyb3VwQWN0aW9ucyA9IHF1ZXJ5QWN0aW9ucyhncm91cCkucmV2ZXJzZSgpO1xuICAgIGdyb3VwQWN0aW9ucy5mb3JFYWNoKChncm91cEFjdGlvbikgPT4ge1xuICAgICAgaWYgKGdyb3VwQWN0aW9uLnNsb3QgPT09IFNMT1RTJDEubWVudUFjdGlvbnMpIHtcbiAgICAgICAgZ3JvdXBBY3Rpb24ucmVtb3ZlQXR0cmlidXRlKFwic2xvdFwiKTtcbiAgICAgICAgZ3JvdXBBY3Rpb24udGV4dEVuYWJsZWQgPSBleHBhbmRlZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAobmVlZFRvU2xvdENvdW50ID4gMCkge1xuICAgICAgZ3JvdXBBY3Rpb25zLnNvbWUoKGdyb3VwQWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuc2xvdHRlZEFjdGlvbnMgPSBncm91cEFjdGlvbnMuZmlsdGVyKChhY3Rpb24pID0+ICFhY3Rpb24uc2xvdCk7XG4gICAgICAgIGlmICh1bnNsb3R0ZWRBY3Rpb25zLmxlbmd0aCA+IDEgJiYgZ3JvdXBBY3Rpb25zLmxlbmd0aCA+IDIgJiYgIWdyb3VwQWN0aW9uLmNsb3Nlc3QoXCJjYWxjaXRlLWFjdGlvbi1tZW51XCIpKSB7XG4gICAgICAgICAgZ3JvdXBBY3Rpb24udGV4dEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIGdyb3VwQWN0aW9uLnNldEF0dHJpYnV0ZShcInNsb3RcIiwgU0xPVFMkMS5tZW51QWN0aW9ucyk7XG4gICAgICAgICAgc2xvdHRlZFdpdGhpbkdyb3VwQ291bnQrKztcbiAgICAgICAgICBpZiAoc2xvdHRlZFdpdGhpbkdyb3VwQ291bnQgPiAxKSB7XG4gICAgICAgICAgICBuZWVkVG9TbG90Q291bnQtLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5lZWRUb1Nsb3RDb3VudCA8IDE7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZm9yY2VVcGRhdGUoZ3JvdXApO1xuICB9KTtcbn07XG5cbmNvbnN0IElDT05TID0ge1xuICBjaGV2cm9uc0xlZnQ6IFwiY2hldnJvbnMtbGVmdFwiLFxuICBjaGV2cm9uc1JpZ2h0OiBcImNoZXZyb25zLXJpZ2h0XCJcbn07XG5mdW5jdGlvbiBnZXRDYWxjaXRlUG9zaXRpb24ocG9zaXRpb24sIGVsKSB7XG4gIHJldHVybiBwb3NpdGlvbiB8fCBlbC5jbG9zZXN0KFwiY2FsY2l0ZS1zaGVsbC1wYW5lbFwiKT8ucG9zaXRpb24gfHwgXCJzdGFydFwiO1xufVxuZnVuY3Rpb24gdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0KHsgZWwsIGV4cGFuZGVkIH0pIHtcbiAgcXVlcnlBY3Rpb25zKGVsKVxuICAgIC5maWx0ZXIoKGVsKSA9PiBlbC5zbG90ICE9PSBTTE9UUyQxLm1lbnVBY3Rpb25zKVxuICAgIC5mb3JFYWNoKChhY3Rpb24pID0+IChhY3Rpb24udGV4dEVuYWJsZWQgPSBleHBhbmRlZCkpO1xuICBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1hY3Rpb24tZ3JvdXAsIGNhbGNpdGUtYWN0aW9uLW1lbnVcIikuZm9yRWFjaCgoZWwpID0+IChlbC5leHBhbmRlZCA9IGV4cGFuZGVkKSk7XG59XG5jb25zdCBzZXRUb29sdGlwUmVmZXJlbmNlID0gKHsgdG9vbHRpcCwgcmVmZXJlbmNlRWxlbWVudCwgZXhwYW5kZWQsIHJlZiB9KSA9PiB7XG4gIGlmICh0b29sdGlwKSB7XG4gICAgdG9vbHRpcC5yZWZlcmVuY2VFbGVtZW50ID0gIWV4cGFuZGVkICYmIHJlZmVyZW5jZUVsZW1lbnQgPyByZWZlcmVuY2VFbGVtZW50IDogbnVsbDtcbiAgfVxuICBpZiAocmVmKSB7XG4gICAgcmVmKHJlZmVyZW5jZUVsZW1lbnQpO1xuICB9XG4gIHJldHVybiByZWZlcmVuY2VFbGVtZW50O1xufTtcbmNvbnN0IEV4cGFuZFRvZ2dsZSA9ICh7IGV4cGFuZGVkLCBpbnRsRXhwYW5kLCBpbnRsQ29sbGFwc2UsIHRvZ2dsZSwgZWwsIHBvc2l0aW9uLCB0b29sdGlwLCByZWYsIHNjYWxlIH0pID0+IHtcbiAgY29uc3QgcnRsID0gZ2V0RWxlbWVudERpcihlbCkgPT09IFwicnRsXCI7XG4gIGNvbnN0IGV4cGFuZFRleHQgPSBleHBhbmRlZCA/IGludGxDb2xsYXBzZSA6IGludGxFeHBhbmQ7XG4gIGNvbnN0IGljb25zID0gW0lDT05TLmNoZXZyb25zTGVmdCwgSUNPTlMuY2hldnJvbnNSaWdodF07XG4gIGlmIChydGwpIHtcbiAgICBpY29ucy5yZXZlcnNlKCk7XG4gIH1cbiAgY29uc3QgZW5kID0gZ2V0Q2FsY2l0ZVBvc2l0aW9uKHBvc2l0aW9uLCBlbCkgPT09IFwiZW5kXCI7XG4gIGNvbnN0IGV4cGFuZEljb24gPSBlbmQgPyBpY29uc1sxXSA6IGljb25zWzBdO1xuICBjb25zdCBjb2xsYXBzZUljb24gPSBlbmQgPyBpY29uc1swXSA6IGljb25zWzFdO1xuICBjb25zdCBhY3Rpb25Ob2RlID0gKGgoXCJjYWxjaXRlLWFjdGlvblwiLCB7IGljb246IGV4cGFuZGVkID8gZXhwYW5kSWNvbiA6IGNvbGxhcHNlSWNvbiwgb25DbGljazogdG9nZ2xlLCBzY2FsZTogc2NhbGUsIHRleHQ6IGV4cGFuZFRleHQsIHRleHRFbmFibGVkOiBleHBhbmRlZCwgXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgcmVmOiAocmVmZXJlbmNlRWxlbWVudCkgPT4gc2V0VG9vbHRpcFJlZmVyZW5jZSh7IHRvb2x0aXAsIHJlZmVyZW5jZUVsZW1lbnQsIGV4cGFuZGVkLCByZWYgfSkgfSkpO1xuICByZXR1cm4gYWN0aW9uTm9kZTtcbn07XG5cbmV4cG9ydCB7IEV4cGFuZFRvZ2dsZSBhcyBFLCBvdmVyZmxvd0FjdGlvbnMgYXMgYSwgZ2V0T3ZlcmZsb3dDb3VudCBhcyBiLCBnZUFjdGlvbkRpbWVuc2lvbnMgYXMgZywgb3ZlcmZsb3dBY3Rpb25zRGVib3VuY2VJbk1zIGFzIG8sIHF1ZXJ5QWN0aW9ucyBhcyBxLCB0b2dnbGVDaGlsZEFjdGlvblRleHQgYXMgdCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IH0gZnJvbSAnLi9jb25kaXRpb25hbFNsb3QtOTQ2ZmI5MTEuanMnO1xuaW1wb3J0IHsgcyBhcyBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cywgZyBhcyBnZXRTbG90dGVkIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0IHsgYSBhcyBzZXRDb21wb25lbnRMb2FkZWQsIHMgYXMgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLTgwNThlMzAwLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkIH0gZnJvbSAnLi9sb2NhbGUtYTM1NjQ4Y2QuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcbmltcG9ydCB7IHUgYXMgdXBkYXRlTWVzc2FnZXMsIGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzIH0gZnJvbSAnLi90OW4tZmFjMTMzOTQuanMnO1xuaW1wb3J0IHsgdCBhcyB0b2dnbGVDaGlsZEFjdGlvblRleHQsIG8gYXMgb3ZlcmZsb3dBY3Rpb25zRGVib3VuY2VJbk1zLCBxIGFzIHF1ZXJ5QWN0aW9ucywgZyBhcyBnZUFjdGlvbkRpbWVuc2lvbnMsIGEgYXMgb3ZlcmZsb3dBY3Rpb25zLCBFIGFzIEV4cGFuZFRvZ2dsZSwgYiBhcyBnZXRPdmVyZmxvd0NvdW50IH0gZnJvbSAnLi9FeHBhbmRUb2dnbGUtNzA2MTI3N2IuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWJvdW5jZSB9IGZyb20gJy4vZGVib3VuY2UtMDk1MGE5YjguanMnO1xuaW1wb3J0ICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy0zNDJlMTJkMS5qcyc7XG5pbXBvcnQgJy4va2V5LThmZjBkMTAxLmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtZmEwOGJmMWEuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy05OWYwYWUxYi5qcyc7XG5cbmNvbnN0IENTUyA9IHtcbiAgYWN0aW9uR3JvdXBCb3R0b206IFwiYWN0aW9uLWdyb3VwLS1ib3R0b21cIlxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBib3R0b21BY3Rpb25zOiBcImJvdHRvbS1hY3Rpb25zXCIsXG4gIGV4cGFuZFRvb2x0aXA6IFwiZXhwYW5kLXRvb2x0aXBcIlxufTtcblxuY29uc3QgYWN0aW9uQmFyQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e3BvaW50ZXItZXZlbnRzOmF1dG87ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1zZWxmOnN0cmV0Y2g7LS1jYWxjaXRlLWFjdGlvbi1iYXItZXhwYW5kZWQtbWF4LXdpZHRoOmF1dG99Omhvc3QoW2xheW91dD12ZXJ0aWNhbF0pe2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKXtmbGV4LWRpcmVjdGlvbjpyb3d9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF1bb3ZlcmZsb3ctYWN0aW9ucy1kaXNhYmxlZF0pe292ZXJmbG93LXk6YXV0b306aG9zdChbbGF5b3V0PWhvcml6b250YWxdW292ZXJmbG93LWFjdGlvbnMtZGlzYWJsZWRdKXtvdmVyZmxvdy14OmF1dG99Omhvc3QoW2xheW91dD12ZXJ0aWNhbF1bZXhwYW5kZWRdKXttYXgtaW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1hY3Rpb24tYmFyLWV4cGFuZGVkLW1heC13aWR0aCl9OjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWdyb3VwKXtib3JkZXItYmxvY2stZW5kOjFweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSA6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tZ3JvdXApe2JvcmRlci1ibG9jay1lbmQ6MDtib3JkZXItaW5saW5lLWVuZDoxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtleHBhbmQtZGlzYWJsZWRdKSA6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tZ3JvdXA6bGFzdC1vZi10eXBlKXtib3JkZXItaW5saW5lLWVuZDowfTo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbi1ncm91cDpsYXN0LWNoaWxkKXtib3JkZXItYmxvY2stZW5kOjA7Ym9yZGVyLWlubGluZS1lbmQ6MH0uYWN0aW9uLWdyb3VwLS1ib3R0b217ZmxleC1ncm93OjE7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfVwiO1xuXG5jb25zdCBBY3Rpb25CYXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUFjdGlvbkJhclRvZ2dsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUFjdGlvbkJhclRvZ2dsZVwiLCA2KTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZWwsIGV4cGFuZGVkIH0gPSB0aGlzO1xuICAgICAgdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0KHsgZWwsIGV4cGFuZGVkIH0pO1xuICAgICAgdGhpcy5vdmVyZmxvd0FjdGlvbnMoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJyZXNpemVcIiwgKGVudHJpZXMpID0+IHRoaXMucmVzaXplSGFuZGxlckVudHJpZXMoZW50cmllcykpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuYWN0aW9uTWVudU9wZW5IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1lbnVPcGVuKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvc2VkUGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgICBBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtYWN0aW9uLWdyb3VwXCIpKS5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICAgIGlmICghY29tcG9zZWRQYXRoLmluY2x1ZGVzKGdyb3VwKSkge1xuICAgICAgICAgICAgZ3JvdXAubWVudU9wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5yZXNpemVIYW5kbGVyRW50cmllcyA9IChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2godGhpcy5yZXNpemVIYW5kbGVyKTtcbiAgICB9O1xuICAgIHRoaXMucmVzaXplSGFuZGxlciA9IChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBlbnRyeS5jb250ZW50UmVjdDtcbiAgICAgIHRoaXMucmVzaXplKHsgd2lkdGgsIGhlaWdodCB9KTtcbiAgICB9O1xuICAgIHRoaXMucmVzaXplID0gZGVib3VuY2UoKHsgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gICAgICBjb25zdCB7IGVsLCBleHBhbmRlZCwgZXhwYW5kRGlzYWJsZWQsIGxheW91dCwgb3ZlcmZsb3dBY3Rpb25zRGlzYWJsZWQgfSA9IHRoaXM7XG4gICAgICBpZiAob3ZlcmZsb3dBY3Rpb25zRGlzYWJsZWQgfHxcbiAgICAgICAgKGxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiICYmICFoZWlnaHQpIHx8XG4gICAgICAgIChsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiICYmICF3aWR0aCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgYWN0aW9ucyA9IHF1ZXJ5QWN0aW9ucyhlbCk7XG4gICAgICBjb25zdCBhY3Rpb25Db3VudCA9IGV4cGFuZERpc2FibGVkID8gYWN0aW9ucy5sZW5ndGggOiBhY3Rpb25zLmxlbmd0aCArIDE7XG4gICAgICBjb25zdCBhY3Rpb25Hcm91cHMgPSBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiKSk7XG4gICAgICB0aGlzLnNldEdyb3VwTGF5b3V0KGFjdGlvbkdyb3Vwcyk7XG4gICAgICBjb25zdCBncm91cENvdW50ID0gZ2V0U2xvdHRlZChlbCwgU0xPVFMuYm90dG9tQWN0aW9ucykgfHwgIWV4cGFuZERpc2FibGVkXG4gICAgICAgID8gYWN0aW9uR3JvdXBzLmxlbmd0aCArIDFcbiAgICAgICAgOiBhY3Rpb25Hcm91cHMubGVuZ3RoO1xuICAgICAgY29uc3QgeyBhY3Rpb25IZWlnaHQsIGFjdGlvbldpZHRoIH0gPSBnZUFjdGlvbkRpbWVuc2lvbnMoYWN0aW9ucyk7XG4gICAgICBjb25zdCBvdmVyZmxvd0NvdW50ID0gZ2V0T3ZlcmZsb3dDb3VudCh7XG4gICAgICAgIGxheW91dCxcbiAgICAgICAgYWN0aW9uQ291bnQsXG4gICAgICAgIGFjdGlvbkhlaWdodCxcbiAgICAgICAgYWN0aW9uV2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGdyb3VwQ291bnRcbiAgICAgIH0pO1xuICAgICAgb3ZlcmZsb3dBY3Rpb25zKHtcbiAgICAgICAgYWN0aW9uR3JvdXBzLFxuICAgICAgICBleHBhbmRlZCxcbiAgICAgICAgb3ZlcmZsb3dDb3VudFxuICAgICAgfSk7XG4gICAgfSwgb3ZlcmZsb3dBY3Rpb25zRGVib3VuY2VJbk1zKTtcbiAgICB0aGlzLnRvZ2dsZUV4cGFuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcbiAgICAgIHRoaXMuY2FsY2l0ZUFjdGlvbkJhclRvZ2dsZS5lbWl0KCk7XG4gICAgfTtcbiAgICB0aGlzLnNldEV4cGFuZFRvZ2dsZVJlZiA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5leHBhbmRUb2dnbGVFbCA9IGVsO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZ3JvdXBzID0gc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMoZXZlbnQpLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKFwiY2FsY2l0ZS1hY3Rpb24tZ3JvdXBcIikpO1xuICAgICAgdGhpcy5zZXRHcm91cExheW91dChncm91cHMpO1xuICAgIH07XG4gICAgdGhpcy5leHBhbmREaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxheW91dCA9IFwidmVydGljYWxcIjtcbiAgICB0aGlzLm92ZXJmbG93QWN0aW9uc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZWZmZWN0aXZlTG9jYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICB9XG4gIGV4cGFuZEhhbmRsZXIoKSB7XG4gICAgdGhpcy5vdmVyZmxvd0FjdGlvbnMoKTtcbiAgfVxuICBleHBhbmRlZEhhbmRsZXIoKSB7XG4gICAgY29uc3QgeyBlbCwgZXhwYW5kZWQgfSA9IHRoaXM7XG4gICAgdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0KHsgZWwsIGV4cGFuZGVkIH0pO1xuICAgIHRoaXMub3ZlcmZsb3dBY3Rpb25zKCk7XG4gIH1cbiAgbGF5b3V0SGFuZGxlcigpIHtcbiAgICB0aGlzLnVwZGF0ZUdyb3VwcygpO1xuICB9XG4gIG92ZXJmbG93RGlzYWJsZWRIYW5kbGVyKG92ZXJmbG93QWN0aW9uc0Rpc2FibGVkKSB7XG4gICAgb3ZlcmZsb3dBY3Rpb25zRGlzYWJsZWRcbiAgICAgID8gdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIDogdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBjb25zdCB7IGVsLCBleHBhbmRlZCB9ID0gdGhpcztcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0KHsgZWwsIGV4cGFuZGVkIH0pO1xuICAgIHRoaXMub3ZlcmZsb3dBY3Rpb25zKCk7XG4gIH1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29uc3QgeyBlbCwgZXhwYW5kZWQgfSA9IHRoaXM7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0KHsgZWwsIGV4cGFuZGVkIH0pO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZShlbCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgaWYgKCF0aGlzLm92ZXJmbG93QWN0aW9uc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5vYnNlcnZlKGVsKTtcbiAgICB9XG4gICAgdGhpcy5vdmVyZmxvd0FjdGlvbnMoKTtcbiAgICBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKipcbiAgICogT3ZlcmZsb3dzIGFjdGlvbnMgdGhhdCB3b24ndCBmaXQgaW50byBtZW51cy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBhc3luYyBvdmVyZmxvd0FjdGlvbnMoKSB7XG4gICAgdGhpcy5yZXNpemUoeyB3aWR0aDogdGhpcy5lbC5jbGllbnRXaWR0aCwgaGVpZ2h0OiB0aGlzLmVsLmNsaWVudEhlaWdodCB9KTtcbiAgfVxuICAvKipcbiAgICogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQuXG4gICAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpcy5lbD8uZm9jdXMoKTtcbiAgfVxuICB1cGRhdGVHcm91cHMoKSB7XG4gICAgdGhpcy5zZXRHcm91cExheW91dChBcnJheS5mcm9tKHRoaXMuZWwucXVlcnlTZWxlY3RvckFsbChcImNhbGNpdGUtYWN0aW9uLWdyb3VwXCIpKSk7XG4gIH1cbiAgc2V0R3JvdXBMYXlvdXQoZ3JvdXBzKSB7XG4gICAgZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiAoZ3JvdXAubGF5b3V0ID0gdGhpcy5sYXlvdXQpKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyQm90dG9tQWN0aW9uR3JvdXAoKSB7XG4gICAgY29uc3QgeyBleHBhbmRlZCwgZXhwYW5kRGlzYWJsZWQsIGVsLCBwb3NpdGlvbiwgdG9nZ2xlRXhwYW5kLCBzY2FsZSwgbGF5b3V0LCBtZXNzYWdlcyB9ID0gdGhpcztcbiAgICBjb25zdCB0b29sdGlwID0gZ2V0U2xvdHRlZChlbCwgU0xPVFMuZXhwYW5kVG9vbHRpcCk7XG4gICAgY29uc3QgZXhwYW5kVG9nZ2xlTm9kZSA9ICFleHBhbmREaXNhYmxlZCA/IChoKEV4cGFuZFRvZ2dsZSwgeyBlbDogZWwsIGV4cGFuZGVkOiBleHBhbmRlZCwgaW50bENvbGxhcHNlOiBtZXNzYWdlcy5jb2xsYXBzZSwgaW50bEV4cGFuZDogbWVzc2FnZXMuZXhwYW5kLCBwb3NpdGlvbjogcG9zaXRpb24sIHNjYWxlOiBzY2FsZSwgdG9nZ2xlOiB0b2dnbGVFeHBhbmQsIHRvb2x0aXA6IHRvb2x0aXAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRFeHBhbmRUb2dnbGVSZWYgfSkpIDogbnVsbDtcbiAgICByZXR1cm4gZ2V0U2xvdHRlZChlbCwgU0xPVFMuYm90dG9tQWN0aW9ucykgfHwgZXhwYW5kVG9nZ2xlTm9kZSA/IChoKFwiY2FsY2l0ZS1hY3Rpb24tZ3JvdXBcIiwgeyBjbGFzczogQ1NTLmFjdGlvbkdyb3VwQm90dG9tLCBsYXlvdXQ6IGxheW91dCwgc2NhbGU6IHNjYWxlIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuYm90dG9tQWN0aW9ucyB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5leHBhbmRUb29sdGlwIH0pLCBleHBhbmRUb2dnbGVOb2RlKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNhbGNpdGVBY3Rpb25NZW51T3BlbjogdGhpcy5hY3Rpb25NZW51T3BlbkhhbmRsZXIgfSwgaChcInNsb3RcIiwgeyBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlRGVmYXVsdFNsb3RDaGFuZ2UgfSksIHRoaXMucmVuZGVyQm90dG9tQWN0aW9uR3JvdXAoKSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVsZWdhdGVzRm9jdXMoKSB7IHJldHVybiB0cnVlOyB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJleHBhbmREaXNhYmxlZFwiOiBbXCJleHBhbmRIYW5kbGVyXCJdLFxuICAgIFwiZXhwYW5kZWRcIjogW1wiZXhwYW5kZWRIYW5kbGVyXCJdLFxuICAgIFwibGF5b3V0XCI6IFtcImxheW91dEhhbmRsZXJcIl0sXG4gICAgXCJvdmVyZmxvd0FjdGlvbnNEaXNhYmxlZFwiOiBbXCJvdmVyZmxvd0Rpc2FibGVkSGFuZGxlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxufTtcbkFjdGlvbkJhci5zdHlsZSA9IGFjdGlvbkJhckNzcztcblxuZXhwb3J0IHsgQWN0aW9uQmFyIGFzIGNhbGNpdGVfYWN0aW9uX2JhciB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGYgYXMgZm9yY2VVcGRhdGUgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5cbmNvbnN0IG9ic2VydmVkID0gbmV3IFNldCgpO1xubGV0IG11dGF0aW9uT2JzZXJ2ZXI7XG5jb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7IGNoaWxkTGlzdDogdHJ1ZSB9O1xuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGlmICghbXV0YXRpb25PYnNlcnZlcikge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsIHByb2Nlc3NNdXRhdGlvbnMpO1xuICB9XG4gIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShjb21wb25lbnQuZWwsIG9ic2VydmVyT3B0aW9ucyk7XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgb2JzZXJ2ZWQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIC8vIHdlIGV4cGxpY2l0bHkgcHJvY2VzcyBxdWV1ZWQgbXV0YXRpb25zIGFuZCBkaXNjb25uZWN0IGFuZCByZWNvbm5lY3RcbiAgLy8gdGhlIG9ic2VydmVyIHVudGlsIE11dGF0aW9uT2JzZXJ2ZXIgZ2V0cyBhbiBgdW5vYnNlcnZlYCBtZXRob2RcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjZcbiAgcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgZm9yIChjb25zdCBbZWxlbWVudF0gb2Ygb2JzZXJ2ZWQuZW50cmllcygpKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XG4gIH1cbn1cbmZ1bmN0aW9uIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gIG11dGF0aW9ucy5mb3JFYWNoKCh7IHRhcmdldCB9KSA9PiB7XG4gICAgZm9yY2VVcGRhdGUodGFyZ2V0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgYywgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgc3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgXCJzZXRVcExvYWRhYmxlQ29tcG9uZW50XCIgYW5kIFwic2V0Q29tcG9uZW50TG9hZGVkXCIgdG8gYmUgY2FsbGVkIGZpcnN0LlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBzZXRGb2N1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBzZXRDb21wb25lbnRMb2FkZWQgYXMgYSwgY29tcG9uZW50TG9hZGVkIGFzIGMsIHNldFVwTG9hZGFibGVDb21wb25lbnQgYXMgcyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmNvbnN0IENTUyA9IHtcbiAgbWVudTogXCJtZW51XCIsXG4gIGRlZmF1bHRUcmlnZ2VyOiBcImRlZmF1bHQtdHJpZ2dlclwiXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIHRvb2x0aXA6IFwidG9vbHRpcFwiLFxuICB0cmlnZ2VyOiBcInRyaWdnZXJcIlxufTtcbmNvbnN0IElDT05TID0ge1xuICBtZW51OiBcImVsbGlwc2lzXCJcbn07XG5cbmV4cG9ydCB7IENTUyBhcyBDLCBJQ09OUyBhcyBJLCBTTE9UUyBhcyBTIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuY29uc3QgU0xPVFMgPSB7XG4gIG1lbnVBY3Rpb25zOiBcIm1lbnUtYWN0aW9uc1wiLFxuICBtZW51VG9vbHRpcDogXCJtZW51LXRvb2x0aXBcIlxufTtcbmNvbnN0IElDT05TID0ge1xuICBtZW51OiBcImVsbGlwc2lzXCJcbn07XG5cbmV4cG9ydCB7IElDT05TIGFzIEksIFNMT1RTIGFzIFMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==