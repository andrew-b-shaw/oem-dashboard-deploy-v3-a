"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-action-bar_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-action-bar.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-action-bar.entry.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_action_bar": () => (/* binding */ ActionBar)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditionalSlot-02722e44.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-02722e44.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _ExpandToggle_b2d209dd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ExpandToggle-b2d209dd.js */ "./node_modules/@esri/calcite-components/dist/esm/ExpandToggle-b2d209dd.js");
/* harmony import */ var _debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debounce-b9072422.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-b9072422.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _resources_b24eb444_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resources-b24eb444.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-b24eb444.js");
/* harmony import */ var _resources_2cb98f22_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resources-2cb98f22.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-2cb98f22.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteActionBarToggle = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteActionBarToggle", 6);
    this.mutationObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_5__.c)("mutation", () => {
      const { el, expanded } = this;
      (0,_ExpandToggle_b2d209dd_js__WEBPACK_IMPORTED_MODULE_7__.t)({ parent: el, expanded });
      this.conditionallyOverflowActions();
    });
    this.resizeObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_5__.c)("resize", (entries) => this.resizeHandlerEntries(entries));
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
    this.resize = (0,_debounce_b9072422_js__WEBPACK_IMPORTED_MODULE_8__.d)(({ width, height }) => {
      const { el, expanded, expandDisabled, layout } = this;
      if ((layout === "vertical" && !height) || (layout === "horizontal" && !width)) {
        return;
      }
      const actions = (0,_ExpandToggle_b2d209dd_js__WEBPACK_IMPORTED_MODULE_7__.q)(el);
      const actionCount = expandDisabled ? actions.length : actions.length + 1;
      const actionGroups = Array.from(el.querySelectorAll("calcite-action-group"));
      this.setGroupLayout(actionGroups);
      const groupCount = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.g)(el, SLOTS.bottomActions) || !expandDisabled
        ? actionGroups.length + 1
        : actionGroups.length;
      const { actionHeight, actionWidth } = (0,_ExpandToggle_b2d209dd_js__WEBPACK_IMPORTED_MODULE_7__.g)(actions);
      const overflowCount = (0,_ExpandToggle_b2d209dd_js__WEBPACK_IMPORTED_MODULE_7__.b)({
        layout,
        actionCount,
        actionHeight,
        actionWidth,
        height,
        width,
        groupCount
      });
      (0,_ExpandToggle_b2d209dd_js__WEBPACK_IMPORTED_MODULE_7__.a)({
        actionGroups,
        expanded,
        overflowCount
      });
    }, _ExpandToggle_b2d209dd_js__WEBPACK_IMPORTED_MODULE_7__.o);
    this.conditionallyOverflowActions = () => {
      if (!this.overflowActionsDisabled) {
        this.overflowActions();
      }
    };
    this.toggleExpand = () => {
      this.expanded = !this.expanded;
      this.calciteActionBarToggle.emit();
    };
    this.setExpandToggleRef = (el) => {
      this.expandToggleEl = el;
    };
    this.handleDefaultSlotChange = (event) => {
      const groups = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.s)(event).filter((el) => el?.matches("calcite-action-group"));
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
    this.conditionallyOverflowActions();
  }
  expandedHandler(expanded) {
    (0,_ExpandToggle_b2d209dd_js__WEBPACK_IMPORTED_MODULE_7__.t)({ parent: this.el, expanded });
    this.conditionallyOverflowActions();
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
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_6__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
    this.conditionallyOverflowActions();
  }
  connectedCallback() {
    const { el, expanded } = this;
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    (0,_ExpandToggle_b2d209dd_js__WEBPACK_IMPORTED_MODULE_7__.t)({ parent: el, expanded });
    this.mutationObserver?.observe(el, { childList: true, subtree: true });
    if (!this.overflowActionsDisabled) {
      this.resizeObserver?.observe(el);
    }
    this.conditionallyOverflowActions();
    (0,_conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    this.resizeObserver?.disconnect();
    (0,_conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_6__.d)(this);
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
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
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
    const tooltip = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.g)(el, SLOTS.expandTooltip);
    const expandToggleNode = !expandDisabled ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_ExpandToggle_b2d209dd_js__WEBPACK_IMPORTED_MODULE_7__.E, { el: el, expanded: expanded, intlCollapse: messages.collapse, intlExpand: messages.expand, position: position, scale: scale, toggle: toggleExpand, tooltip: tooltip,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setExpandToggleRef })) : null;
    return (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.g)(el, SLOTS.bottomActions) || expandToggleNode ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action-group", { class: CSS.actionGroupBottom, layout: layout, scale: scale }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.bottomActions }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.expandTooltip }), expandToggleNode)) : null;
  }
  render() {
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { onCalciteActionMenuOpen: this.actionMenuOpenHandler }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }), this.renderBottomActionGroup()));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNWU2MzkzZjRlNzE5MjFjNDlhMDU2N2U2OTM5MWJkMjYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RztBQUNpQjtBQUN0QztBQUM0QjtBQUM3QjtBQUN6QjtBQUM2RDtBQUMyRjtBQUMvSjtBQUMzQjtBQUNLO0FBQ047QUFDTTtBQUNBOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsR0FBRyxVQUFVLEtBQUssV0FBVyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLGlCQUFpQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxtQkFBbUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSw0QkFBNEIsTUFBTSxpRkFBaUYscUVBQXFFLCtGQUErRixpR0FBaUcsK0ZBQStGLGlCQUFpQixVQUFVLHlCQUF5QixtREFBbUQscUJBQXFCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixxQkFBcUIsMkJBQTJCLHdCQUF3QiwwQkFBMEIsdUJBQXVCLDJCQUEyQix3QkFBd0Isd0NBQXdDLE1BQU0seUNBQXlDLE1BQU0sc0JBQXNCLGdEQUFnRCwrQkFBK0Isc0NBQXNDLFFBQVEsc0JBQXNCLE1BQU0saUVBQWlFLGtFQUFrRSxnQkFBZ0IsYUFBYSxNQUFNLG9CQUFvQixvQkFBb0IsbUJBQW1CLDZDQUE2Qyx5QkFBeUIsc0JBQXNCLDJCQUEyQixtQkFBbUIsb0RBQW9ELGdCQUFnQixzREFBc0QsZ0JBQWdCLG1DQUFtQyw2REFBNkQsZ0NBQWdDLHNEQUFzRCwyREFBMkQsbUJBQW1CLHVEQUF1RCx5RkFBeUYsb0JBQW9CLDJDQUEyQyxtQkFB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Oi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1hY3Rpb24tYmFyLmVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGMgYXMgY3JlYXRlRXZlbnQsIGgsIEggYXMgSG9zdCwgYSBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC1hNjc2MDI4Ni5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQsIGQgYXMgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCB9IGZyb20gJy4vY29uZGl0aW9uYWxTbG90LTAyNzIyZTQ0LmpzJztcbmltcG9ydCB7IHMgYXMgc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMsIGcgYXMgZ2V0U2xvdHRlZCB9IGZyb20gJy4vZG9tLWY3NGEwOWI3LmpzJztcbmltcG9ydCB7IGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGMgYXMgY29tcG9uZW50TG9hZGVkIH0gZnJvbSAnLi9sb2FkYWJsZS1hZjE0NmZkNS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWIzYzQ0ZGRhLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy1jMjBlYzJkZC5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgcyBhcyBzZXRVcE1lc3NhZ2VzLCBkIGFzIGRpc2Nvbm5lY3RNZXNzYWdlcyB9IGZyb20gJy4vdDluLWEzZTEyNDIyLmpzJztcbmltcG9ydCB7IHQgYXMgdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0LCBvIGFzIG92ZXJmbG93QWN0aW9uc0RlYm91bmNlSW5NcywgcSBhcyBxdWVyeUFjdGlvbnMsIGcgYXMgZ2VBY3Rpb25EaW1lbnNpb25zLCBhIGFzIG92ZXJmbG93QWN0aW9ucywgRSBhcyBFeHBhbmRUb2dnbGUsIGIgYXMgZ2V0T3ZlcmZsb3dDb3VudCB9IGZyb20gJy4vRXhwYW5kVG9nZ2xlLWIyZDIwOWRkLmpzJztcbmltcG9ydCB7IGQgYXMgZGVib3VuY2UgfSBmcm9tICcuL2RlYm91bmNlLWI5MDcyNDIyLmpzJztcbmltcG9ydCAnLi9ndWlkLWQ1OTQzYjgzLmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtZDA4YTY3MzcuanMnO1xuaW1wb3J0ICcuL2tleS0zMzg5ZDg3MC5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLWIyNGViNDQ0LmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtMmNiOThmMjIuanMnO1xuXG5jb25zdCBDU1MgPSB7XG4gIGFjdGlvbkdyb3VwQm90dG9tOiBcImFjdGlvbi1ncm91cC0tYm90dG9tXCJcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgYm90dG9tQWN0aW9uczogXCJib3R0b20tYWN0aW9uc1wiLFxuICBleHBhbmRUb29sdGlwOiBcImV4cGFuZC10b29sdGlwXCJcbn07XG5cbmNvbnN0IGFjdGlvbkJhckNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19Omhvc3R7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHtwb2ludGVyLWV2ZW50czphdXRvO2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24tc2VsZjpzdHJldGNoOy0tY2FsY2l0ZS1hY3Rpb24tYmFyLWV4cGFuZGVkLW1heC13aWR0aDphdXRvfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdKXtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXSl7ZmxleC1kaXJlY3Rpb246cm93fTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW292ZXJmbG93LWFjdGlvbnMtZGlzYWJsZWRdKXtvdmVyZmxvdy15OmF1dG99Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtvdmVyZmxvdy1hY3Rpb25zLWRpc2FibGVkXSl7b3ZlcmZsb3cteDphdXRvfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW2V4cGFuZGVkXSl7bWF4LWlubGluZS1zaXplOnZhcigtLWNhbGNpdGUtYWN0aW9uLWJhci1leHBhbmRlZC1tYXgtd2lkdGgpfTo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbi1ncm91cCl7Ym9yZGVyLWJsb2NrLWVuZDoxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXSkgOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWdyb3VwKXtib3JkZXItYmxvY2stZW5kOjA7Ym9yZGVyLWlubGluZS1lbmQ6MXB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bZXhwYW5kLWRpc2FibGVkXSkgOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWdyb3VwOmxhc3Qtb2YtdHlwZSl7Ym9yZGVyLWlubGluZS1lbmQ6MH06OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tZ3JvdXA6bGFzdC1jaGlsZCl7Ym9yZGVyLWJsb2NrLWVuZDowO2JvcmRlci1pbmxpbmUtZW5kOjB9LmFjdGlvbi1ncm91cC0tYm90dG9te2ZsZXgtZ3JvdzoxO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1cIjtcblxuY29uc3QgQWN0aW9uQmFyID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmNhbGNpdGVBY3Rpb25CYXJUb2dnbGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVBY3Rpb25CYXJUb2dnbGVcIiwgNik7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IGVsLCBleHBhbmRlZCB9ID0gdGhpcztcbiAgICAgIHRvZ2dsZUNoaWxkQWN0aW9uVGV4dCh7IHBhcmVudDogZWwsIGV4cGFuZGVkIH0pO1xuICAgICAgdGhpcy5jb25kaXRpb25hbGx5T3ZlcmZsb3dBY3Rpb25zKCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwicmVzaXplXCIsIChlbnRyaWVzKSA9PiB0aGlzLnJlc2l6ZUhhbmRsZXJFbnRyaWVzKGVudHJpZXMpKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmFjdGlvbk1lbnVPcGVuSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5tZW51T3Blbikge1xuICAgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiKSkuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgICBpZiAoIWNvbXBvc2VkUGF0aC5pbmNsdWRlcyhncm91cCkpIHtcbiAgICAgICAgICAgIGdyb3VwLm1lbnVPcGVuID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucmVzaXplSGFuZGxlckVudHJpZXMgPSAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKHRoaXMucmVzaXplSGFuZGxlcik7XG4gICAgfTtcbiAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSAoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZW50cnkuY29udGVudFJlY3Q7XG4gICAgICB0aGlzLnJlc2l6ZSh7IHdpZHRoLCBoZWlnaHQgfSk7XG4gICAgfTtcbiAgICB0aGlzLnJlc2l6ZSA9IGRlYm91bmNlKCh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgICAgY29uc3QgeyBlbCwgZXhwYW5kZWQsIGV4cGFuZERpc2FibGVkLCBsYXlvdXQgfSA9IHRoaXM7XG4gICAgICBpZiAoKGxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiICYmICFoZWlnaHQpIHx8IChsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiICYmICF3aWR0aCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgYWN0aW9ucyA9IHF1ZXJ5QWN0aW9ucyhlbCk7XG4gICAgICBjb25zdCBhY3Rpb25Db3VudCA9IGV4cGFuZERpc2FibGVkID8gYWN0aW9ucy5sZW5ndGggOiBhY3Rpb25zLmxlbmd0aCArIDE7XG4gICAgICBjb25zdCBhY3Rpb25Hcm91cHMgPSBBcnJheS5mcm9tKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiKSk7XG4gICAgICB0aGlzLnNldEdyb3VwTGF5b3V0KGFjdGlvbkdyb3Vwcyk7XG4gICAgICBjb25zdCBncm91cENvdW50ID0gZ2V0U2xvdHRlZChlbCwgU0xPVFMuYm90dG9tQWN0aW9ucykgfHwgIWV4cGFuZERpc2FibGVkXG4gICAgICAgID8gYWN0aW9uR3JvdXBzLmxlbmd0aCArIDFcbiAgICAgICAgOiBhY3Rpb25Hcm91cHMubGVuZ3RoO1xuICAgICAgY29uc3QgeyBhY3Rpb25IZWlnaHQsIGFjdGlvbldpZHRoIH0gPSBnZUFjdGlvbkRpbWVuc2lvbnMoYWN0aW9ucyk7XG4gICAgICBjb25zdCBvdmVyZmxvd0NvdW50ID0gZ2V0T3ZlcmZsb3dDb3VudCh7XG4gICAgICAgIGxheW91dCxcbiAgICAgICAgYWN0aW9uQ291bnQsXG4gICAgICAgIGFjdGlvbkhlaWdodCxcbiAgICAgICAgYWN0aW9uV2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGdyb3VwQ291bnRcbiAgICAgIH0pO1xuICAgICAgb3ZlcmZsb3dBY3Rpb25zKHtcbiAgICAgICAgYWN0aW9uR3JvdXBzLFxuICAgICAgICBleHBhbmRlZCxcbiAgICAgICAgb3ZlcmZsb3dDb3VudFxuICAgICAgfSk7XG4gICAgfSwgb3ZlcmZsb3dBY3Rpb25zRGVib3VuY2VJbk1zKTtcbiAgICB0aGlzLmNvbmRpdGlvbmFsbHlPdmVyZmxvd0FjdGlvbnMgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMub3ZlcmZsb3dBY3Rpb25zRGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5vdmVyZmxvd0FjdGlvbnMoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlRXhwYW5kID0gKCkgPT4ge1xuICAgICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICAgICAgdGhpcy5jYWxjaXRlQWN0aW9uQmFyVG9nZ2xlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0RXhwYW5kVG9nZ2xlUmVmID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmV4cGFuZFRvZ2dsZUVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBncm91cHMgPSBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCkuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMoXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiKSk7XG4gICAgICB0aGlzLnNldEdyb3VwTGF5b3V0KGdyb3Vwcyk7XG4gICAgfTtcbiAgICB0aGlzLmV4cGFuZERpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMubGF5b3V0ID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIHRoaXMub3ZlcmZsb3dBY3Rpb25zRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgZXhwYW5kSGFuZGxlcigpIHtcbiAgICB0aGlzLmNvbmRpdGlvbmFsbHlPdmVyZmxvd0FjdGlvbnMoKTtcbiAgfVxuICBleHBhbmRlZEhhbmRsZXIoZXhwYW5kZWQpIHtcbiAgICB0b2dnbGVDaGlsZEFjdGlvblRleHQoeyBwYXJlbnQ6IHRoaXMuZWwsIGV4cGFuZGVkIH0pO1xuICAgIHRoaXMuY29uZGl0aW9uYWxseU92ZXJmbG93QWN0aW9ucygpO1xuICB9XG4gIGxheW91dEhhbmRsZXIoKSB7XG4gICAgdGhpcy51cGRhdGVHcm91cHMoKTtcbiAgfVxuICBvdmVyZmxvd0Rpc2FibGVkSGFuZGxlcihvdmVyZmxvd0FjdGlvbnNEaXNhYmxlZCkge1xuICAgIG92ZXJmbG93QWN0aW9uc0Rpc2FibGVkXG4gICAgICA/IHRoaXMucmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICA6IHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMuY29uZGl0aW9uYWxseU92ZXJmbG93QWN0aW9ucygpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbnN0IHsgZWwsIGV4cGFuZGVkIH0gPSB0aGlzO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIHRvZ2dsZUNoaWxkQWN0aW9uVGV4dCh7IHBhcmVudDogZWwsIGV4cGFuZGVkIH0pO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZShlbCwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgaWYgKCF0aGlzLm92ZXJmbG93QWN0aW9uc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyPy5vYnNlcnZlKGVsKTtcbiAgICB9XG4gICAgdGhpcy5jb25kaXRpb25hbGx5T3ZlcmZsb3dBY3Rpb25zKCk7XG4gICAgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBzZXRVcExvYWRhYmxlQ29tcG9uZW50KHRoaXMpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIE92ZXJmbG93cyBhY3Rpb25zIHRoYXQgd29uJ3QgZml0IGludG8gbWVudXMuXG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgYXN5bmMgb3ZlcmZsb3dBY3Rpb25zKCkge1xuICAgIHRoaXMucmVzaXplKHsgd2lkdGg6IHRoaXMuZWwuY2xpZW50V2lkdGgsIGhlaWdodDogdGhpcy5lbC5jbGllbnRIZWlnaHQgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMuZWw/LmZvY3VzKCk7XG4gIH1cbiAgdXBkYXRlR3JvdXBzKCkge1xuICAgIHRoaXMuc2V0R3JvdXBMYXlvdXQoQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiKSkpO1xuICB9XG4gIHNldEdyb3VwTGF5b3V0KGdyb3Vwcykge1xuICAgIGdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4gKGdyb3VwLmxheW91dCA9IHRoaXMubGF5b3V0KSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckJvdHRvbUFjdGlvbkdyb3VwKCkge1xuICAgIGNvbnN0IHsgZXhwYW5kZWQsIGV4cGFuZERpc2FibGVkLCBlbCwgcG9zaXRpb24sIHRvZ2dsZUV4cGFuZCwgc2NhbGUsIGxheW91dCwgbWVzc2FnZXMgfSA9IHRoaXM7XG4gICAgY29uc3QgdG9vbHRpcCA9IGdldFNsb3R0ZWQoZWwsIFNMT1RTLmV4cGFuZFRvb2x0aXApO1xuICAgIGNvbnN0IGV4cGFuZFRvZ2dsZU5vZGUgPSAhZXhwYW5kRGlzYWJsZWQgPyAoaChFeHBhbmRUb2dnbGUsIHsgZWw6IGVsLCBleHBhbmRlZDogZXhwYW5kZWQsIGludGxDb2xsYXBzZTogbWVzc2FnZXMuY29sbGFwc2UsIGludGxFeHBhbmQ6IG1lc3NhZ2VzLmV4cGFuZCwgcG9zaXRpb246IHBvc2l0aW9uLCBzY2FsZTogc2NhbGUsIHRvZ2dsZTogdG9nZ2xlRXhwYW5kLCB0b29sdGlwOiB0b29sdGlwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0RXhwYW5kVG9nZ2xlUmVmIH0pKSA6IG51bGw7XG4gICAgcmV0dXJuIGdldFNsb3R0ZWQoZWwsIFNMT1RTLmJvdHRvbUFjdGlvbnMpIHx8IGV4cGFuZFRvZ2dsZU5vZGUgPyAoaChcImNhbGNpdGUtYWN0aW9uLWdyb3VwXCIsIHsgY2xhc3M6IENTUy5hY3Rpb25Hcm91cEJvdHRvbSwgbGF5b3V0OiBsYXlvdXQsIHNjYWxlOiBzY2FsZSB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmJvdHRvbUFjdGlvbnMgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuZXhwYW5kVG9vbHRpcCB9KSwgZXhwYW5kVG9nZ2xlTm9kZSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgb25DYWxjaXRlQWN0aW9uTWVudU9wZW46IHRoaXMuYWN0aW9uTWVudU9wZW5IYW5kbGVyIH0sIGgoXCJzbG90XCIsIHsgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlIH0pLCB0aGlzLnJlbmRlckJvdHRvbUFjdGlvbkdyb3VwKCkpKTtcbiAgfVxuICBzdGF0aWMgZ2V0IGRlbGVnYXRlc0ZvY3VzKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICBzdGF0aWMgZ2V0IGFzc2V0c0RpcnMoKSB7IHJldHVybiBbXCJhc3NldHNcIl07IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZXhwYW5kRGlzYWJsZWRcIjogW1wiZXhwYW5kSGFuZGxlclwiXSxcbiAgICBcImV4cGFuZGVkXCI6IFtcImV4cGFuZGVkSGFuZGxlclwiXSxcbiAgICBcImxheW91dFwiOiBbXCJsYXlvdXRIYW5kbGVyXCJdLFxuICAgIFwib3ZlcmZsb3dBY3Rpb25zRGlzYWJsZWRcIjogW1wib3ZlcmZsb3dEaXNhYmxlZEhhbmRsZXJcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbn07XG5BY3Rpb25CYXIuc3R5bGUgPSBhY3Rpb25CYXJDc3M7XG5cbmV4cG9ydCB7IEFjdGlvbkJhciBhcyBjYWxjaXRlX2FjdGlvbl9iYXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==