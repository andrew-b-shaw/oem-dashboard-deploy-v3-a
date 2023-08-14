"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_esm_calcite-action-pad_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-action-pad.entry.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-action-pad.entry.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_action_pad": () => (/* binding */ ActionPad)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditionalSlot-02722e44.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-02722e44.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _ExpandToggle_b2d209dd_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExpandToggle-b2d209dd.js */ "./node_modules/@esri/calcite-components/dist/esm/ExpandToggle-b2d209dd.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _resources_b24eb444_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resources-b24eb444.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-b24eb444.js");
/* harmony import */ var _resources_2cb98f22_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resources-2cb98f22.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-2cb98f22.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteActionPadToggle = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteActionPadToggle", 6);
    this.mutationObserver = (0,_observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_7__.c)("mutation", () => this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group"))));
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
      const groups = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.s)(event).filter((el) => el?.matches("calcite-action-group"));
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
    (0,_ExpandToggle_b2d209dd_js__WEBPACK_IMPORTED_MODULE_6__.t)({ parent: this.el, expanded });
  }
  layoutHandler() {
    this.updateGroups();
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
  }
  disconnectedCallback() {
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_conditionalSlot_02722e44_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_3__.s)(this);
    const { el, expanded } = this;
    (0,_ExpandToggle_b2d209dd_js__WEBPACK_IMPORTED_MODULE_6__.t)({ parent: el, expanded });
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
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
  //  Component Methods
  //
  // --------------------------------------------------------------------------
  renderBottomActionGroup() {
    const { expanded, expandDisabled, messages, el, position, toggleExpand, scale, layout } = this;
    const tooltip = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_2__.g)(el, SLOTS.expandTooltip);
    const expandToggleNode = !expandDisabled ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_ExpandToggle_b2d209dd_js__WEBPACK_IMPORTED_MODULE_6__.E, { el: el, expanded: expanded, intlCollapse: messages.collapse, intlExpand: messages.expand, position: position, scale: scale, toggle: toggleExpand, tooltip: tooltip,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setExpandToggleRef })) : null;
    return expandToggleNode ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action-group", { class: CSS.actionGroupBottom, layout: layout, scale: scale }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.expandTooltip }), expandToggleNode)) : null;
  }
  render() {
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { onCalciteActionMenuOpen: this.actionMenuOpenHandler }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.container }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }), this.renderBottomActionGroup())));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "layout": ["layoutHandler"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
ActionPad.style = actionPadCss;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOTQwNzY3Y2NlNzE3NDNlMmJlZGNhMDNlYTgzYTA2Y2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZHO0FBQ2lCO0FBQ3RDO0FBQzRCO0FBQzdCO0FBQ29DO0FBQ2hDO0FBQzdCO0FBQ2xDO0FBQ0s7QUFDTjtBQUNNO0FBQ0E7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxzQkFBc0IsZ0RBQWdELCtCQUErQixzQ0FBc0MsUUFBUSxzQkFBc0IsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLE1BQU0sY0FBYyxjQUFjLEdBQUcsVUFBVSxLQUFLLFdBQVcsTUFBTSx1RUFBdUUsdUJBQXVCLDZDQUE2Qyx1QkFBdUIsOENBQThDLDZEQUE2RCxnQ0FBZ0MsaUJBQWlCLDJCQUEyQixtQkFBbUIsd0NBQXdDLGtCQUFrQixXQUFXLG9CQUFvQixzQkFBc0IsZ0JBQWdCLHNCQUFzQiw4Q0FBOEMsb0ZBQW9GLG1HQUFtRyx1R0FBdUcsc0JBQXNCLFlBQVkseUJBQXlCLHNCQUFzQixzQ0FBc0MsbUJBQW1CLDREQUE0RCxZQUFZLHNFQUFzRSxpQkFBaUIsWUFBWSw0QkFBNEIsMkNBQTJDLDJCQUEyQjs7QUFFbG9HO0FBQ0E7QUFDQSxJQUFJLHFEQUFnQjtBQUNwQixrQ0FBa0MscURBQVc7QUFDN0MsNEJBQTRCLHlEQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFxQixHQUFHLDJCQUEyQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQStCO0FBQ25DLElBQUksc0RBQWdCO0FBQ3BCLElBQUksbURBQWU7QUFDbkI7QUFDQTtBQUNBLElBQUksc0RBQW1CO0FBQ3ZCLElBQUksbURBQWtCO0FBQ3RCLElBQUksK0RBQWtDO0FBQ3RDO0FBQ0E7QUFDQSxJQUFJLHdEQUFzQjtBQUMxQixZQUFZLGVBQWU7QUFDM0IsSUFBSSw0REFBcUIsR0FBRyxzQkFBc0I7QUFDbEQsVUFBVSxtREFBYTtBQUN2QjtBQUNBO0FBQ0EsSUFBSSx3REFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdEQUFlO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdGQUFnRjtBQUM1RixvQkFBb0IsbURBQVU7QUFDOUIsZ0RBQWdELHFEQUFDLENBQUMsd0RBQVksSUFBSTtBQUNsRTtBQUNBLG9DQUFvQztBQUNwQywrQkFBK0IscURBQUMsMkJBQTJCLDREQUE0RCxFQUFFLHFEQUFDLFdBQVcsMkJBQTJCO0FBQ2hLO0FBQ0E7QUFDQSxZQUFZLHFEQUFDLENBQUMsaURBQUksSUFBSSxxREFBcUQsRUFBRSxxREFBQyxVQUFVLHNCQUFzQixFQUFFLHFEQUFDLFdBQVcsNENBQTRDO0FBQ3hLO0FBQ0EsZ0NBQWdDO0FBQ2hDLDRCQUE0QjtBQUM1QixhQUFhLE9BQU8scURBQVU7QUFDOUIsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtYWN0aW9uLXBhZC5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC0wMjcyMmU0NC5qcyc7XG5pbXBvcnQgeyBzIGFzIHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzLCBnIGFzIGdldFNsb3R0ZWQgfSBmcm9tICcuL2RvbS1mNzRhMDliNy5qcyc7XG5pbXBvcnQgeyBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtYWYxNDZmZDUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS1iM2M0NGRkYS5qcyc7XG5pbXBvcnQgeyB1IGFzIHVwZGF0ZU1lc3NhZ2VzLCBjIGFzIGNvbm5lY3RNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcyB9IGZyb20gJy4vdDluLWEzZTEyNDIyLmpzJztcbmltcG9ydCB7IHQgYXMgdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0LCBFIGFzIEV4cGFuZFRvZ2dsZSB9IGZyb20gJy4vRXhwYW5kVG9nZ2xlLWIyZDIwOWRkLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy1jMjBlYzJkZC5qcyc7XG5pbXBvcnQgJy4vZ3VpZC1kNTk0M2I4My5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLWQwOGE2NzM3LmpzJztcbmltcG9ydCAnLi9rZXktMzM4OWQ4NzAuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy1iMjRlYjQ0NC5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLTJjYjk4ZjIyLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBhY3Rpb25Hcm91cEJvdHRvbTogXCJhY3Rpb24tZ3JvdXAtLWJvdHRvbVwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCJcbn07XG5jb25zdCBTTE9UUyA9IHtcbiAgZXhwYW5kVG9vbHRpcDogXCJleHBhbmQtdG9vbHRpcFwiXG59O1xuXG5jb25zdCBhY3Rpb25QYWRDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpob3N0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX06aG9zdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7ZGlzcGxheTpibG9ja31Aa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19Omhvc3R7YW5pbWF0aW9uOmluIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSBlYXNlLWluLW91dDtib3JkZXItcmFkaXVzOjAuMTI1cmVtOy0tY2FsY2l0ZS1hY3Rpb24tcGFkLWV4cGFuZGVkLW1heC13aWR0aDphdXRvO2JhY2tncm91bmQ6dHJhbnNwYXJlbnR9Omhvc3QoW2V4cGFuZGVkXVtsYXlvdXQ9dmVydGljYWxdKSAuY29udGFpbmVye21heC1pbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWFjdGlvbi1wYWQtZXhwYW5kZWQtbWF4LXdpZHRoKX06OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tZ3JvdXApe2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtwYWRkaW5nLWJsb2NrOjBweH0uY29udGFpbmVye2Rpc3BsYXk6aW5saW5lLWZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93LXk6YXV0bztib3JkZXItcmFkaXVzOjAuMjVyZW07YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJhY2tncm91bmQpOy0tdHctc2hhZG93OjAgNnB4IDIwcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDEycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpOy0tdHctc2hhZG93LWNvbG9yZWQ6MCA2cHggMjBweCAtNHB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgNHB4IDEycHggLTJweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX0uYWN0aW9uLWdyb3VwLS1ib3R0b217ZmxleC1ncm93OjE7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO3BhZGRpbmctYmxvY2stZW5kOjBweH06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuY29udGFpbmVye2ZsZXgtZGlyZWN0aW9uOnJvd306aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuY29udGFpbmVyIC5hY3Rpb24tZ3JvdXAtLWJvdHRvbXtwYWRkaW5nOjBweH06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuY29udGFpbmVyIDo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbi1ncm91cCl7Ym9yZGVyLXdpZHRoOjBweDtwYWRkaW5nOjBweDtib3JkZXItaW5saW5lLWVuZC13aWR0aDoxcHh9OjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWdyb3VwOmxhc3QtY2hpbGQpe2JvcmRlci1ibG9jay1lbmQtd2lkdGg6MHB4fVwiO1xuXG5jb25zdCBBY3Rpb25QYWQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUFjdGlvblBhZFRvZ2dsZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUFjdGlvblBhZFRvZ2dsZVwiLCA2KTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMuc2V0R3JvdXBMYXlvdXQoQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiKSkpKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmFjdGlvbk1lbnVPcGVuSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5tZW51T3Blbikge1xuICAgICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiKSkuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgICBpZiAoIWNvbXBvc2VkUGF0aC5pbmNsdWRlcyhncm91cCkpIHtcbiAgICAgICAgICAgIGdyb3VwLm1lbnVPcGVuID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlRXhwYW5kID0gKCkgPT4ge1xuICAgICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuICAgICAgdGhpcy5jYWxjaXRlQWN0aW9uUGFkVG9nZ2xlLmVtaXQoKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0RXhwYW5kVG9nZ2xlUmVmID0gKGVsKSA9PiB7XG4gICAgICB0aGlzLmV4cGFuZFRvZ2dsZUVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBncm91cHMgPSBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCkuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMoXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiKSk7XG4gICAgICB0aGlzLnNldEdyb3VwTGF5b3V0KGdyb3Vwcyk7XG4gICAgfTtcbiAgICB0aGlzLmV4cGFuZERpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMubGF5b3V0ID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIHRoaXMucG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgZXhwYW5kZWRIYW5kbGVyKGV4cGFuZGVkKSB7XG4gICAgdG9nZ2xlQ2hpbGRBY3Rpb25UZXh0KHsgcGFyZW50OiB0aGlzLmVsLCBleHBhbmRlZCB9KTtcbiAgfVxuICBsYXlvdXRIYW5kbGVyKCkge1xuICAgIHRoaXMudXBkYXRlR3JvdXBzKCk7XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICBjb25zdCB7IGVsLCBleHBhbmRlZCB9ID0gdGhpcztcbiAgICB0b2dnbGVDaGlsZEFjdGlvblRleHQoeyBwYXJlbnQ6IGVsLCBleHBhbmRlZCB9KTtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBmaXJzdCBmb2N1c2FibGUgZWxlbWVudC5cbiAgICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICB0aGlzLmVsPy5mb2N1cygpO1xuICB9XG4gIHVwZGF0ZUdyb3VwcygpIHtcbiAgICB0aGlzLnNldEdyb3VwTGF5b3V0KEFycmF5LmZyb20odGhpcy5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiY2FsY2l0ZS1hY3Rpb24tZ3JvdXBcIikpKTtcbiAgfVxuICBzZXRHcm91cExheW91dChncm91cHMpIHtcbiAgICBncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IChncm91cC5sYXlvdXQgPSB0aGlzLmxheW91dCkpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBDb21wb25lbnQgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJCb3R0b21BY3Rpb25Hcm91cCgpIHtcbiAgICBjb25zdCB7IGV4cGFuZGVkLCBleHBhbmREaXNhYmxlZCwgbWVzc2FnZXMsIGVsLCBwb3NpdGlvbiwgdG9nZ2xlRXhwYW5kLCBzY2FsZSwgbGF5b3V0IH0gPSB0aGlzO1xuICAgIGNvbnN0IHRvb2x0aXAgPSBnZXRTbG90dGVkKGVsLCBTTE9UUy5leHBhbmRUb29sdGlwKTtcbiAgICBjb25zdCBleHBhbmRUb2dnbGVOb2RlID0gIWV4cGFuZERpc2FibGVkID8gKGgoRXhwYW5kVG9nZ2xlLCB7IGVsOiBlbCwgZXhwYW5kZWQ6IGV4cGFuZGVkLCBpbnRsQ29sbGFwc2U6IG1lc3NhZ2VzLmNvbGxhcHNlLCBpbnRsRXhwYW5kOiBtZXNzYWdlcy5leHBhbmQsIHBvc2l0aW9uOiBwb3NpdGlvbiwgc2NhbGU6IHNjYWxlLCB0b2dnbGU6IHRvZ2dsZUV4cGFuZCwgdG9vbHRpcDogdG9vbHRpcCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldEV4cGFuZFRvZ2dsZVJlZiB9KSkgOiBudWxsO1xuICAgIHJldHVybiBleHBhbmRUb2dnbGVOb2RlID8gKGgoXCJjYWxjaXRlLWFjdGlvbi1ncm91cFwiLCB7IGNsYXNzOiBDU1MuYWN0aW9uR3JvdXBCb3R0b20sIGxheW91dDogbGF5b3V0LCBzY2FsZTogc2NhbGUgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5leHBhbmRUb29sdGlwIH0pLCBleHBhbmRUb2dnbGVOb2RlKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBvbkNhbGNpdGVBY3Rpb25NZW51T3BlbjogdGhpcy5hY3Rpb25NZW51T3BlbkhhbmRsZXIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGFpbmVyIH0sIGgoXCJzbG90XCIsIHsgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZURlZmF1bHRTbG90Q2hhbmdlIH0pLCB0aGlzLnJlbmRlckJvdHRvbUFjdGlvbkdyb3VwKCkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImV4cGFuZGVkXCI6IFtcImV4cGFuZGVkSGFuZGxlclwiXSxcbiAgICBcImxheW91dFwiOiBbXCJsYXlvdXRIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuQWN0aW9uUGFkLnN0eWxlID0gYWN0aW9uUGFkQ3NzO1xuXG5leHBvcnQgeyBBY3Rpb25QYWQgYXMgY2FsY2l0ZV9hY3Rpb25fcGFkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=