"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-action-menu_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/array-8048effa.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/array-8048effa.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getRoundRobinIndex)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
function getRoundRobinIndex(index, total) {
  return (index + total) % total;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-action-menu.entry.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-action-menu.entry.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_action_menu": () => (/* binding */ ActionMenu)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _array_8048effa_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array-8048effa.js */ "./node_modules/@esri/calcite-components/dist/esm/array-8048effa.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _resources_99f0ae1b_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources-99f0ae1b.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-99f0ae1b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */









const actionMenuCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{box-sizing:border-box;display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:flex;outline-color:transparent}.menu ::slotted(calcite-action[active]){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:0px}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{flex-direction:column;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}";

const SUPPORTED_MENU_NAV_KEYS = ["ArrowUp", "ArrowDown", "End", "Home"];
const ActionMenu = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteActionMenuOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteActionMenuOpen", 6);
    this.actionElements = [];
    this.guid = `calcite-action-menu-${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_3__.g)()}`;
    this.menuId = `${this.guid}-menu`;
    this.menuButtonId = `${this.guid}-menu-button`;
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    this.connectMenuButtonEl = () => {
      const { menuButtonId, menuId, open, label } = this;
      const menuButtonEl = this.slottedMenuButtonEl || this.defaultMenuButtonEl;
      if (this.menuButtonEl === menuButtonEl) {
        return;
      }
      this.disconnectMenuButtonEl();
      this.menuButtonEl = menuButtonEl;
      this.setTooltipReferenceElement();
      if (!menuButtonEl) {
        return;
      }
      menuButtonEl.active = open;
      menuButtonEl.setAttribute("aria-controls", menuId);
      menuButtonEl.setAttribute("aria-expanded", (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.t)(open));
      menuButtonEl.setAttribute("aria-haspopup", "true");
      if (!menuButtonEl.id) {
        menuButtonEl.id = menuButtonId;
      }
      if (!menuButtonEl.label) {
        menuButtonEl.label = label;
      }
      if (!menuButtonEl.text) {
        menuButtonEl.text = label;
      }
      menuButtonEl.addEventListener("pointerdown", this.menuButtonClick);
      menuButtonEl.addEventListener("keydown", this.menuButtonKeyDown);
    };
    this.disconnectMenuButtonEl = () => {
      const { menuButtonEl } = this;
      if (!menuButtonEl) {
        return;
      }
      menuButtonEl.removeEventListener("pointerdown", this.menuButtonClick);
      menuButtonEl.removeEventListener("keydown", this.menuButtonKeyDown);
    };
    this.setMenuButtonEl = (event) => {
      const actions = event.target
        .assignedElements({
        flatten: true
      })
        .filter((el) => el?.matches("calcite-action"));
      this.slottedMenuButtonEl = actions[0];
      this.connectMenuButtonEl();
    };
    this.setDefaultMenuButtonEl = (el) => {
      this.defaultMenuButtonEl = el;
      this.connectMenuButtonEl();
    };
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleCalciteActionClick = () => {
      this.open = false;
      this.setFocus();
    };
    this.menuButtonClick = (event) => {
      if (!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.i)(event)) {
        return;
      }
      this.toggleOpen();
    };
    this.updateTooltip = (event) => {
      const tooltips = event.target
        .assignedElements({
        flatten: true
      })
        .filter((el) => el?.matches("calcite-tooltip"));
      this.tooltipEl = tooltips[0];
      this.setTooltipReferenceElement();
    };
    this.setTooltipReferenceElement = () => {
      const { tooltipEl, expanded, menuButtonEl, open } = this;
      if (tooltipEl) {
        tooltipEl.referenceElement = !expanded && !open ? menuButtonEl : null;
      }
    };
    this.updateAction = (action, index) => {
      const { guid, activeMenuItemIndex } = this;
      const id = `${guid}-action-${index}`;
      action.tabIndex = -1;
      action.setAttribute("role", "menuitem");
      if (!action.id) {
        action.id = id;
      }
      action.active = index === activeMenuItemIndex;
    };
    this.updateActions = (actions) => {
      actions?.forEach(this.updateAction);
    };
    this.handleDefaultSlotChange = (event) => {
      const actions = event.target
        .assignedElements({
        flatten: true
      })
        .filter((el) => el?.matches("calcite-action"));
      this.actionElements = actions;
    };
    this.menuButtonKeyDown = (event) => {
      const { key } = event;
      const { actionElements, activeMenuItemIndex, open } = this;
      if (!actionElements.length) {
        return;
      }
      if ((0,_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_4__.i)(key)) {
        event.preventDefault();
        if (!open) {
          this.toggleOpen();
          return;
        }
        const action = actionElements[activeMenuItemIndex];
        action ? action.click() : this.toggleOpen(false);
      }
      if (key === "Tab") {
        this.open = false;
        return;
      }
      if (key === "Escape") {
        this.toggleOpen(false);
        event.preventDefault();
        return;
      }
      this.handleActionNavigation(event, key, actionElements);
    };
    this.handleActionNavigation = (event, key, actions) => {
      if (!this.isValidKey(key, SUPPORTED_MENU_NAV_KEYS)) {
        return;
      }
      event.preventDefault();
      if (!this.open) {
        this.toggleOpen();
        if (key === "Home" || key === "ArrowDown") {
          this.activeMenuItemIndex = 0;
        }
        if (key === "End" || key === "ArrowUp") {
          this.activeMenuItemIndex = actions.length - 1;
        }
        return;
      }
      if (key === "Home") {
        this.activeMenuItemIndex = 0;
      }
      if (key === "End") {
        this.activeMenuItemIndex = actions.length - 1;
      }
      const currentIndex = this.activeMenuItemIndex;
      if (key === "ArrowUp") {
        this.activeMenuItemIndex = (0,_array_8048effa_js__WEBPACK_IMPORTED_MODULE_1__.g)(Math.max(currentIndex - 1, -1), actions.length);
      }
      if (key === "ArrowDown") {
        this.activeMenuItemIndex = (0,_array_8048effa_js__WEBPACK_IMPORTED_MODULE_1__.g)(currentIndex + 1, actions.length);
      }
    };
    this.toggleOpenEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calcitePopoverOpen", this.toggleOpenEnd);
    };
    this.toggleOpen = (value = !this.open) => {
      this.el.addEventListener("calcitePopoverOpen", this.toggleOpenEnd);
      this.open = value;
    };
    this.expanded = false;
    this.flipPlacements = undefined;
    this.label = undefined;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.scale = undefined;
    this.menuButtonEl = undefined;
    this.activeMenuItemIndex = -1;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.a)(this);
  }
  disconnectedCallback() {
    this.disconnectMenuButtonEl();
  }
  expandedHandler() {
    this.open = false;
    this.setTooltipReferenceElement();
  }
  openHandler(open) {
    this.activeMenuItemIndex = this.open ? 0 : -1;
    if (this.menuButtonEl) {
      this.menuButtonEl.active = open;
    }
    this.calciteActionMenuOpen.emit();
    this.setTooltipReferenceElement();
  }
  closeCalciteActionMenuOnClick(event) {
    if (!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.i)(event)) {
      return;
    }
    const composedPath = event.composedPath();
    if (composedPath.includes(this.el)) {
      return;
    }
    this.open = false;
  }
  activeMenuItemIndexHandler() {
    this.updateActions(this.actionElements);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.f)(this.menuButtonEl);
  }
  renderMenuButton() {
    const { label, scale, expanded } = this;
    const menuButtonSlot = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_99f0ae1b_js__WEBPACK_IMPORTED_MODULE_6__.S.trigger, onSlotchange: this.setMenuButtonEl }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-action", { class: _resources_99f0ae1b_js__WEBPACK_IMPORTED_MODULE_6__.C.defaultTrigger, icon: _resources_99f0ae1b_js__WEBPACK_IMPORTED_MODULE_6__.I.menu, scale: scale, text: label, textEnabled: expanded,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setDefaultMenuButtonEl })));
    return menuButtonSlot;
  }
  renderMenuItems() {
    const { actionElements, activeMenuItemIndex, open, menuId, menuButtonEl, label, placement, overlayPositioning, flipPlacements } = this;
    const activeAction = actionElements[activeMenuItemIndex];
    const activeDescendantId = activeAction?.id || null;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-popover", { flipPlacements: flipPlacements, focusTrapDisabled: true, label: label, offsetDistance: 0, open: open, overlayPositioning: overlayPositioning, placement: placement, pointerDisabled: true, referenceElement: menuButtonEl }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-activedescendant": activeDescendantId, "aria-labelledby": menuButtonEl?.id, class: _resources_99f0ae1b_js__WEBPACK_IMPORTED_MODULE_6__.C.menu, id: menuId, onClick: this.handleCalciteActionClick, role: "menu", tabIndex: -1 }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { onSlotchange: this.handleDefaultSlotChange }))));
  }
  render() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.F, null, this.renderMenuButton(), this.renderMenuItems(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: _resources_99f0ae1b_js__WEBPACK_IMPORTED_MODULE_6__.S.tooltip, onSlotchange: this.updateTooltip })));
  }
  isValidKey(key, supportedKeys) {
    return !!supportedKeys.find((k) => k === key);
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "expanded": ["expandedHandler"],
    "open": ["openHandler"],
    "activeMenuItemIndex": ["activeMenuItemIndexHandler"]
  }; }
};
ActionMenu.style = actionMenuCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isActivationKey),
/* harmony export */   "n": () => (/* binding */ numberKeys)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
function isActivationKey(key) {
  return key === "Enter" || key === " ";
}
const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];




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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNzk3ZTliZDQ1MDNlMzFlZWZlOGJmMGQyYjVjZTUwZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2lIO0FBQ25EO0FBQ3lDO0FBQ3hEO0FBQ1U7QUFDMkQ7QUFDekM7QUFDMUM7O0FBRWpDLHFDQUFxQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLE1BQU0sc0JBQXNCLGFBQWEsc0JBQXNCLGdEQUFnRCxxQ0FBcUMsK0JBQStCLGdDQUFnQyxnQkFBZ0IsYUFBYSwwQkFBMEIsd0NBQXdDLHlFQUF5RSxvUEFBb1AsbUJBQW1CLGlCQUFpQixrQkFBa0IsZ0JBQWdCLGNBQWMsbUJBQW1CLG9GQUFvRixrQkFBa0IsZ0JBQWdCLGNBQWMsbUJBQW1CLE1BQU0sc0JBQXNCLGlCQUFpQiw4QkFBOEIsbUJBQW1COztBQUV0bkY7QUFDQTtBQUNBO0FBQ0Es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Q0FBb0M7QUFDbEo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU8scURBQVU7QUFDOUIsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4UjdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRHRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0QyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2FycmF5LTgwNDhlZmZhLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtYWN0aW9uLW1lbnUuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20va2V5LThmZjBkMTAxLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2xvYWRhYmxlLTgwNThlMzAwLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3Jlc291cmNlcy05OWYwYWUxYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuZnVuY3Rpb24gZ2V0Um91bmRSb2JpbkluZGV4KGluZGV4LCB0b3RhbCkge1xuICByZXR1cm4gKGluZGV4ICsgdG90YWwpICUgdG90YWw7XG59XG5cbmV4cG9ydCB7IGdldFJvdW5kUm9iaW5JbmRleCBhcyBnIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBGIGFzIEZyYWdtZW50LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0Um91bmRSb2JpbkluZGV4IH0gZnJvbSAnLi9hcnJheS04MDQ4ZWZmYS5qcyc7XG5pbXBvcnQgeyB0IGFzIHRvQXJpYUJvb2xlYW4sIGkgYXMgaXNQcmltYXJ5UG9pbnRlckJ1dHRvbiwgZiBhcyBmb2N1c0VsZW1lbnQgfSBmcm9tICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5pbXBvcnQgeyBnIGFzIGd1aWQgfSBmcm9tICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0IHsgaSBhcyBpc0FjdGl2YXRpb25LZXkgfSBmcm9tICcuL2tleS04ZmYwZDEwMS5qcyc7XG5pbXBvcnQgeyBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtODA1OGUzMDAuanMnO1xuaW1wb3J0IHsgQyBhcyBDU1MsIEkgYXMgSUNPTlMsIFMgYXMgU0xPVFMgfSBmcm9tICcuL3Jlc291cmNlcy05OWYwYWUxYi5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcblxuY29uc3QgYWN0aW9uTWVudUNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0xKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMil9Lm1lbnUgOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uKXttYXJnaW46MC4xMjVyZW07ZGlzcGxheTpmbGV4O291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9Lm1lbnUgOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uW2FjdGl2ZV0pe291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIDJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApO291dGxpbmUtb2Zmc2V0OjBweH0uZGVmYXVsdC10cmlnZ2Vye3Bvc2l0aW9uOnJlbGF0aXZlO2Jsb2NrLXNpemU6MTAwJTtmbGV4OjAgMSBhdXRvO2FsaWduLXNlbGY6c3RyZXRjaH1zbG90W25hbWU9dHJpZ2dlcl06OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24pLGNhbGNpdGUtYWN0aW9uOjpzbG90dGVkKFtzbG90PXRyaWdnZXJdKXtwb3NpdGlvbjpyZWxhdGl2ZTtibG9jay1zaXplOjEwMCU7ZmxleDowIDEgYXV0bzthbGlnbi1zZWxmOnN0cmV0Y2h9Lm1lbnV7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtd3JhcDpub3dyYXA7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4fVwiO1xuXG5jb25zdCBTVVBQT1JURURfTUVOVV9OQVZfS0VZUyA9IFtcIkFycm93VXBcIiwgXCJBcnJvd0Rvd25cIiwgXCJFbmRcIiwgXCJIb21lXCJdO1xuY29uc3QgQWN0aW9uTWVudSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlQWN0aW9uTWVudU9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVBY3Rpb25NZW51T3BlblwiLCA2KTtcbiAgICB0aGlzLmFjdGlvbkVsZW1lbnRzID0gW107XG4gICAgdGhpcy5ndWlkID0gYGNhbGNpdGUtYWN0aW9uLW1lbnUtJHtndWlkKCl9YDtcbiAgICB0aGlzLm1lbnVJZCA9IGAke3RoaXMuZ3VpZH0tbWVudWA7XG4gICAgdGhpcy5tZW51QnV0dG9uSWQgPSBgJHt0aGlzLmd1aWR9LW1lbnUtYnV0dG9uYDtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIENvbXBvbmVudCBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuY29ubmVjdE1lbnVCdXR0b25FbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHsgbWVudUJ1dHRvbklkLCBtZW51SWQsIG9wZW4sIGxhYmVsIH0gPSB0aGlzO1xuICAgICAgY29uc3QgbWVudUJ1dHRvbkVsID0gdGhpcy5zbG90dGVkTWVudUJ1dHRvbkVsIHx8IHRoaXMuZGVmYXVsdE1lbnVCdXR0b25FbDtcbiAgICAgIGlmICh0aGlzLm1lbnVCdXR0b25FbCA9PT0gbWVudUJ1dHRvbkVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzY29ubmVjdE1lbnVCdXR0b25FbCgpO1xuICAgICAgdGhpcy5tZW51QnV0dG9uRWwgPSBtZW51QnV0dG9uRWw7XG4gICAgICB0aGlzLnNldFRvb2x0aXBSZWZlcmVuY2VFbGVtZW50KCk7XG4gICAgICBpZiAoIW1lbnVCdXR0b25FbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBtZW51QnV0dG9uRWwuYWN0aXZlID0gb3BlbjtcbiAgICAgIG1lbnVCdXR0b25FbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIsIG1lbnVJZCk7XG4gICAgICBtZW51QnV0dG9uRWwuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCB0b0FyaWFCb29sZWFuKG9wZW4pKTtcbiAgICAgIG1lbnVCdXR0b25FbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhhc3BvcHVwXCIsIFwidHJ1ZVwiKTtcbiAgICAgIGlmICghbWVudUJ1dHRvbkVsLmlkKSB7XG4gICAgICAgIG1lbnVCdXR0b25FbC5pZCA9IG1lbnVCdXR0b25JZDtcbiAgICAgIH1cbiAgICAgIGlmICghbWVudUJ1dHRvbkVsLmxhYmVsKSB7XG4gICAgICAgIG1lbnVCdXR0b25FbC5sYWJlbCA9IGxhYmVsO1xuICAgICAgfVxuICAgICAgaWYgKCFtZW51QnV0dG9uRWwudGV4dCkge1xuICAgICAgICBtZW51QnV0dG9uRWwudGV4dCA9IGxhYmVsO1xuICAgICAgfVxuICAgICAgbWVudUJ1dHRvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCB0aGlzLm1lbnVCdXR0b25DbGljayk7XG4gICAgICBtZW51QnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5tZW51QnV0dG9uS2V5RG93bik7XG4gICAgfTtcbiAgICB0aGlzLmRpc2Nvbm5lY3RNZW51QnV0dG9uRWwgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7IG1lbnVCdXR0b25FbCB9ID0gdGhpcztcbiAgICAgIGlmICghbWVudUJ1dHRvbkVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1lbnVCdXR0b25FbC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgdGhpcy5tZW51QnV0dG9uQ2xpY2spO1xuICAgICAgbWVudUJ1dHRvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMubWVudUJ1dHRvbktleURvd24pO1xuICAgIH07XG4gICAgdGhpcy5zZXRNZW51QnV0dG9uRWwgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbnMgPSBldmVudC50YXJnZXRcbiAgICAgICAgLmFzc2lnbmVkRWxlbWVudHMoe1xuICAgICAgICBmbGF0dGVuOiB0cnVlXG4gICAgICB9KVxuICAgICAgICAuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMoXCJjYWxjaXRlLWFjdGlvblwiKSk7XG4gICAgICB0aGlzLnNsb3R0ZWRNZW51QnV0dG9uRWwgPSBhY3Rpb25zWzBdO1xuICAgICAgdGhpcy5jb25uZWN0TWVudUJ1dHRvbkVsKCk7XG4gICAgfTtcbiAgICB0aGlzLnNldERlZmF1bHRNZW51QnV0dG9uRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuZGVmYXVsdE1lbnVCdXR0b25FbCA9IGVsO1xuICAgICAgdGhpcy5jb25uZWN0TWVudUJ1dHRvbkVsKCk7XG4gICAgfTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmhhbmRsZUNhbGNpdGVBY3Rpb25DbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRGb2N1cygpO1xuICAgIH07XG4gICAgdGhpcy5tZW51QnV0dG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy50b2dnbGVPcGVuKCk7XG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZVRvb2x0aXAgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRvb2x0aXBzID0gZXZlbnQudGFyZ2V0XG4gICAgICAgIC5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZVxuICAgICAgfSlcbiAgICAgICAgLmZpbHRlcigoZWwpID0+IGVsPy5tYXRjaGVzKFwiY2FsY2l0ZS10b29sdGlwXCIpKTtcbiAgICAgIHRoaXMudG9vbHRpcEVsID0gdG9vbHRpcHNbMF07XG4gICAgICB0aGlzLnNldFRvb2x0aXBSZWZlcmVuY2VFbGVtZW50KCk7XG4gICAgfTtcbiAgICB0aGlzLnNldFRvb2x0aXBSZWZlcmVuY2VFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgY29uc3QgeyB0b29sdGlwRWwsIGV4cGFuZGVkLCBtZW51QnV0dG9uRWwsIG9wZW4gfSA9IHRoaXM7XG4gICAgICBpZiAodG9vbHRpcEVsKSB7XG4gICAgICAgIHRvb2x0aXBFbC5yZWZlcmVuY2VFbGVtZW50ID0gIWV4cGFuZGVkICYmICFvcGVuID8gbWVudUJ1dHRvbkVsIDogbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudXBkYXRlQWN0aW9uID0gKGFjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHsgZ3VpZCwgYWN0aXZlTWVudUl0ZW1JbmRleCB9ID0gdGhpcztcbiAgICAgIGNvbnN0IGlkID0gYCR7Z3VpZH0tYWN0aW9uLSR7aW5kZXh9YDtcbiAgICAgIGFjdGlvbi50YWJJbmRleCA9IC0xO1xuICAgICAgYWN0aW9uLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJtZW51aXRlbVwiKTtcbiAgICAgIGlmICghYWN0aW9uLmlkKSB7XG4gICAgICAgIGFjdGlvbi5pZCA9IGlkO1xuICAgICAgfVxuICAgICAgYWN0aW9uLmFjdGl2ZSA9IGluZGV4ID09PSBhY3RpdmVNZW51SXRlbUluZGV4O1xuICAgIH07XG4gICAgdGhpcy51cGRhdGVBY3Rpb25zID0gKGFjdGlvbnMpID0+IHtcbiAgICAgIGFjdGlvbnM/LmZvckVhY2godGhpcy51cGRhdGVBY3Rpb24pO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgYWN0aW9ucyA9IGV2ZW50LnRhcmdldFxuICAgICAgICAuYXNzaWduZWRFbGVtZW50cyh7XG4gICAgICAgIGZsYXR0ZW46IHRydWVcbiAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoKGVsKSA9PiBlbD8ubWF0Y2hlcyhcImNhbGNpdGUtYWN0aW9uXCIpKTtcbiAgICAgIHRoaXMuYWN0aW9uRWxlbWVudHMgPSBhY3Rpb25zO1xuICAgIH07XG4gICAgdGhpcy5tZW51QnV0dG9uS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgeyBhY3Rpb25FbGVtZW50cywgYWN0aXZlTWVudUl0ZW1JbmRleCwgb3BlbiB9ID0gdGhpcztcbiAgICAgIGlmICghYWN0aW9uRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChpc0FjdGl2YXRpb25LZXkoa2V5KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIW9wZW4pIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZU9wZW4oKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWN0aW9uRWxlbWVudHNbYWN0aXZlTWVudUl0ZW1JbmRleF07XG4gICAgICAgIGFjdGlvbiA/IGFjdGlvbi5jbGljaygpIDogdGhpcy50b2dnbGVPcGVuKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiVGFiXCIpIHtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgdGhpcy50b2dnbGVPcGVuKGZhbHNlKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5oYW5kbGVBY3Rpb25OYXZpZ2F0aW9uKGV2ZW50LCBrZXksIGFjdGlvbkVsZW1lbnRzKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQWN0aW9uTmF2aWdhdGlvbiA9IChldmVudCwga2V5LCBhY3Rpb25zKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZEtleShrZXksIFNVUFBPUlRFRF9NRU5VX05BVl9LRVlTKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKCF0aGlzLm9wZW4pIHtcbiAgICAgICAgdGhpcy50b2dnbGVPcGVuKCk7XG4gICAgICAgIGlmIChrZXkgPT09IFwiSG9tZVwiIHx8IGtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICAgIHRoaXMuYWN0aXZlTWVudUl0ZW1JbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PT0gXCJFbmRcIiB8fCBrZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVNZW51SXRlbUluZGV4ID0gYWN0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiSG9tZVwiKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTWVudUl0ZW1JbmRleCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkVuZFwiKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTWVudUl0ZW1JbmRleCA9IGFjdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuYWN0aXZlTWVudUl0ZW1JbmRleDtcbiAgICAgIGlmIChrZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTWVudUl0ZW1JbmRleCA9IGdldFJvdW5kUm9iaW5JbmRleChNYXRoLm1heChjdXJyZW50SW5kZXggLSAxLCAtMSksIGFjdGlvbnMubGVuZ3RoKTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVNZW51SXRlbUluZGV4ID0gZ2V0Um91bmRSb2JpbkluZGV4KGN1cnJlbnRJbmRleCArIDEsIGFjdGlvbnMubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudG9nZ2xlT3BlbkVuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0Rm9jdXMoKTtcbiAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVQb3BvdmVyT3BlblwiLCB0aGlzLnRvZ2dsZU9wZW5FbmQpO1xuICAgIH07XG4gICAgdGhpcy50b2dnbGVPcGVuID0gKHZhbHVlID0gIXRoaXMub3BlbikgPT4ge1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2FsY2l0ZVBvcG92ZXJPcGVuXCIsIHRoaXMudG9nZ2xlT3BlbkVuZCk7XG4gICAgICB0aGlzLm9wZW4gPSB2YWx1ZTtcbiAgICB9O1xuICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZsaXBQbGFjZW1lbnRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5vdmVybGF5UG9zaXRpb25pbmcgPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSBcImF1dG9cIjtcbiAgICB0aGlzLnNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVudUJ1dHRvbkVsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYWN0aXZlTWVudUl0ZW1JbmRleCA9IC0xO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLmRpc2Nvbm5lY3RNZW51QnV0dG9uRWwoKTtcbiAgfVxuICBleHBhbmRlZEhhbmRsZXIoKSB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgdGhpcy5zZXRUb29sdGlwUmVmZXJlbmNlRWxlbWVudCgpO1xuICB9XG4gIG9wZW5IYW5kbGVyKG9wZW4pIHtcbiAgICB0aGlzLmFjdGl2ZU1lbnVJdGVtSW5kZXggPSB0aGlzLm9wZW4gPyAwIDogLTE7XG4gICAgaWYgKHRoaXMubWVudUJ1dHRvbkVsKSB7XG4gICAgICB0aGlzLm1lbnVCdXR0b25FbC5hY3RpdmUgPSBvcGVuO1xuICAgIH1cbiAgICB0aGlzLmNhbGNpdGVBY3Rpb25NZW51T3Blbi5lbWl0KCk7XG4gICAgdGhpcy5zZXRUb29sdGlwUmVmZXJlbmNlRWxlbWVudCgpO1xuICB9XG4gIGNsb3NlQ2FsY2l0ZUFjdGlvbk1lbnVPbkNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKCFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKTtcbiAgICBpZiAoY29tcG9zZWRQYXRoLmluY2x1ZGVzKHRoaXMuZWwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICB9XG4gIGFjdGl2ZU1lbnVJdGVtSW5kZXhIYW5kbGVyKCkge1xuICAgIHRoaXMudXBkYXRlQWN0aW9ucyh0aGlzLmFjdGlvbkVsZW1lbnRzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50LiAqL1xuICBhc3luYyBzZXRGb2N1cygpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgZm9jdXNFbGVtZW50KHRoaXMubWVudUJ1dHRvbkVsKTtcbiAgfVxuICByZW5kZXJNZW51QnV0dG9uKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIHNjYWxlLCBleHBhbmRlZCB9ID0gdGhpcztcbiAgICBjb25zdCBtZW51QnV0dG9uU2xvdCA9IChoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLnRyaWdnZXIsIG9uU2xvdGNoYW5nZTogdGhpcy5zZXRNZW51QnV0dG9uRWwgfSwgaChcImNhbGNpdGUtYWN0aW9uXCIsIHsgY2xhc3M6IENTUy5kZWZhdWx0VHJpZ2dlciwgaWNvbjogSUNPTlMubWVudSwgc2NhbGU6IHNjYWxlLCB0ZXh0OiBsYWJlbCwgdGV4dEVuYWJsZWQ6IGV4cGFuZGVkLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0RGVmYXVsdE1lbnVCdXR0b25FbCB9KSkpO1xuICAgIHJldHVybiBtZW51QnV0dG9uU2xvdDtcbiAgfVxuICByZW5kZXJNZW51SXRlbXMoKSB7XG4gICAgY29uc3QgeyBhY3Rpb25FbGVtZW50cywgYWN0aXZlTWVudUl0ZW1JbmRleCwgb3BlbiwgbWVudUlkLCBtZW51QnV0dG9uRWwsIGxhYmVsLCBwbGFjZW1lbnQsIG92ZXJsYXlQb3NpdGlvbmluZywgZmxpcFBsYWNlbWVudHMgfSA9IHRoaXM7XG4gICAgY29uc3QgYWN0aXZlQWN0aW9uID0gYWN0aW9uRWxlbWVudHNbYWN0aXZlTWVudUl0ZW1JbmRleF07XG4gICAgY29uc3QgYWN0aXZlRGVzY2VuZGFudElkID0gYWN0aXZlQWN0aW9uPy5pZCB8fCBudWxsO1xuICAgIHJldHVybiAoaChcImNhbGNpdGUtcG9wb3ZlclwiLCB7IGZsaXBQbGFjZW1lbnRzOiBmbGlwUGxhY2VtZW50cywgZm9jdXNUcmFwRGlzYWJsZWQ6IHRydWUsIGxhYmVsOiBsYWJlbCwgb2Zmc2V0RGlzdGFuY2U6IDAsIG9wZW46IG9wZW4sIG92ZXJsYXlQb3NpdGlvbmluZzogb3ZlcmxheVBvc2l0aW9uaW5nLCBwbGFjZW1lbnQ6IHBsYWNlbWVudCwgcG9pbnRlckRpc2FibGVkOiB0cnVlLCByZWZlcmVuY2VFbGVtZW50OiBtZW51QnV0dG9uRWwgfSwgaChcImRpdlwiLCB7IFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCI6IGFjdGl2ZURlc2NlbmRhbnRJZCwgXCJhcmlhLWxhYmVsbGVkYnlcIjogbWVudUJ1dHRvbkVsPy5pZCwgY2xhc3M6IENTUy5tZW51LCBpZDogbWVudUlkLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNhbGNpdGVBY3Rpb25DbGljaywgcm9sZTogXCJtZW51XCIsIHRhYkluZGV4OiAtMSB9LCBoKFwic2xvdFwiLCB7IG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVEZWZhdWx0U2xvdENoYW5nZSB9KSkpKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChoKEZyYWdtZW50LCBudWxsLCB0aGlzLnJlbmRlck1lbnVCdXR0b24oKSwgdGhpcy5yZW5kZXJNZW51SXRlbXMoKSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy50b29sdGlwLCBvblNsb3RjaGFuZ2U6IHRoaXMudXBkYXRlVG9vbHRpcCB9KSkpO1xuICB9XG4gIGlzVmFsaWRLZXkoa2V5LCBzdXBwb3J0ZWRLZXlzKSB7XG4gICAgcmV0dXJuICEhc3VwcG9ydGVkS2V5cy5maW5kKChrKSA9PiBrID09PSBrZXkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImV4cGFuZGVkXCI6IFtcImV4cGFuZGVkSGFuZGxlclwiXSxcbiAgICBcIm9wZW5cIjogW1wib3BlbkhhbmRsZXJcIl0sXG4gICAgXCJhY3RpdmVNZW51SXRlbUluZGV4XCI6IFtcImFjdGl2ZU1lbnVJdGVtSW5kZXhIYW5kbGVyXCJdXG4gIH07IH1cbn07XG5BY3Rpb25NZW51LnN0eWxlID0gYWN0aW9uTWVudUNzcztcblxuZXhwb3J0IHsgQWN0aW9uTWVudSBhcyBjYWxjaXRlX2FjdGlvbl9tZW51IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuZnVuY3Rpb24gaXNBY3RpdmF0aW9uS2V5KGtleSkge1xuICByZXR1cm4ga2V5ID09PSBcIkVudGVyXCIgfHwga2V5ID09PSBcIiBcIjtcbn1cbmNvbnN0IG51bWJlcktleXMgPSBbXCIwXCIsIFwiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCIsIFwiN1wiLCBcIjhcIiwgXCI5XCJdO1xuXG5leHBvcnQgeyBpc0FjdGl2YXRpb25LZXkgYXMgaSwgbnVtYmVyS2V5cyBhcyBuIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgc3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgXCJzZXRVcExvYWRhYmxlQ29tcG9uZW50XCIgYW5kIFwic2V0Q29tcG9uZW50TG9hZGVkXCIgdG8gYmUgY2FsbGVkIGZpcnN0LlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBzZXRGb2N1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBzZXRDb21wb25lbnRMb2FkZWQgYXMgYSwgY29tcG9uZW50TG9hZGVkIGFzIGMsIHNldFVwTG9hZGFibGVDb21wb25lbnQgYXMgcyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmNvbnN0IENTUyA9IHtcbiAgbWVudTogXCJtZW51XCIsXG4gIGRlZmF1bHRUcmlnZ2VyOiBcImRlZmF1bHQtdHJpZ2dlclwiXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIHRvb2x0aXA6IFwidG9vbHRpcFwiLFxuICB0cmlnZ2VyOiBcInRyaWdnZXJcIlxufTtcbmNvbnN0IElDT05TID0ge1xuICBtZW51OiBcImVsbGlwc2lzXCJcbn07XG5cbmV4cG9ydCB7IENTUyBhcyBDLCBJQ09OUyBhcyBJLCBTTE9UUyBhcyBTIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=