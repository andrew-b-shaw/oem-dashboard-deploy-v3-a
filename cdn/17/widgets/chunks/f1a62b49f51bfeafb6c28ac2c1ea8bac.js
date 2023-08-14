"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-shell_3_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-shell_3.entry.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-shell_3.entry.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_shell": () => (/* binding */ Shell),
/* harmony export */   "calcite_shell_center_row": () => (/* binding */ ShellCenterRow),
/* harmony export */   "calcite_shell_panel": () => (/* binding */ ShellPanel)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditionalSlot-946fb911.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-946fb911.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _math_584fc665_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./math-584fc665.js */ "./node_modules/@esri/calcite-components/dist/esm/math-584fc665.js");
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */











const CSS$2 = {
  main: "main",
  content: "content",
  contentBehind: "content--behind",
  footer: "footer",
  positionedSlotWrapper: "positioned-slot-wrapper",
  container: "container",
  contentBehindCenterContent: "center-content"
};
const SLOTS$2 = {
  centerRow: "center-row",
  panelStart: "panel-start",
  panelEnd: "panel-end",
  panelTop: "panel-top",
  panelBottom: "panel-bottom",
  header: "header",
  footer: "footer",
  alerts: "alerts",
  modals: "modals"
};

const shellCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:absolute;inset:0px;display:flex;block-size:100%;inline-size:100%;flex-direction:column;overflow:hidden;--calcite-shell-tip-spacing:26vw}.main{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;flex-direction:row;justify-content:space-between;overflow:hidden}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;overflow:auto}.content ::slotted(calcite-shell-center-row),.content ::slotted(calcite-panel),.content ::slotted(calcite-flow){flex:1 1 auto;align-self:stretch;max-block-size:unset}.content--behind{position:absolute;inset:0px;border-width:0px;z-index:calc(var(--calcite-app-z-index) - 1);display:initial}::slotted(calcite-shell-center-row){inline-size:unset}::slotted(.header .heading){font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal)}slot[name=panel-end]::slotted(calcite-shell-panel){margin-inline-start:auto}::slotted(calcite-panel),::slotted(calcite-flow){border-width:1px;border-inline-start-width:0px;border-inline-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3)}slot[name=center-row]::slotted(calcite-shell-center-row:not([detached])),slot[name=panel-top]::slotted(calcite-shell-center-row:not([detached])),slot[name=panel-bottom]::slotted(calcite-shell-center-row:not([detached])){border-inline-start-width:1px;border-inline-end-width:1px;border-color:var(--calcite-ui-border-3)}.center-content{display:flex;flex-direction:column;justify-content:space-between;block-size:100%;inline-size:100%;min-inline-size:0}::slotted(calcite-shell-center-row){flex:none;align-self:stretch}::slotted(calcite-tip-manager){position:absolute;z-index:var(--calcite-app-z-index-toast);box-sizing:border-box}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}::slotted(calcite-tip-manager){animation:in-up var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.25rem;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);inset-block-end:0.5rem;inset-inline:var(--calcite-shell-tip-spacing)}slot[name=center-row]::slotted(calcite-shell-center-row),slot[name=panel-bottom]::slotted(calcite-shell-center-row){margin-block-start:auto}slot[name=panel-top]::slotted(calcite-shell-center-row){margin-block-end:auto}.position-wrapper{position:absolute;pointer-events:none;inset:0}";

const Shell = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleHeaderSlotChange = (event) => {
      this.hasHeader = !!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.d)(event);
    };
    this.handleFooterSlotChange = (event) => {
      this.hasFooter = !!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.d)(event);
    };
    this.handleAlertsSlotChange = (event) => {
      this.hasAlerts = !!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.d)(event);
      (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.s)(event)?.map((el) => {
        if (el.nodeName === "CALCITE-ALERT") {
          el.slottedInShell = true;
        }
      });
    };
    this.handleModalsSlotChange = (event) => {
      this.hasModals = !!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.d)(event);
      (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.s)(event)?.map((el) => {
        if (el.nodeName === "CALCITE-MODAL") {
          el.slottedInShell = true;
        }
      });
    };
    this.contentBehind = false;
    this.hasHeader = false;
    this.hasFooter = false;
    this.hasAlerts = false;
    this.hasModals = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeader() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { hidden: !this.hasHeader }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "header", name: SLOTS$2.header, onSlotchange: this.handleHeaderSlotChange })));
  }
  renderFooter() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.footer, hidden: !this.hasFooter, key: "footer" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS$2.footer, onSlotchange: this.handleFooterSlotChange })));
  }
  renderAlerts() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { hidden: !this.hasAlerts }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "alerts", name: SLOTS$2.alerts, onSlotchange: this.handleAlertsSlotChange })));
  }
  renderModals() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { hidden: !this.hasModals }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "modals", name: SLOTS$2.modals, onSlotchange: this.handleModalsSlotChange })));
  }
  renderContent() {
    const defaultSlotNode = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "default-slot" });
    const deprecatedCenterRowSlotNode = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "center-row-slot", name: SLOTS$2.centerRow }));
    const panelBottomSlotNode = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "panel-bottom-slot", name: SLOTS$2.panelBottom });
    const panelTopSlotNode = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "panel-top-slot", name: SLOTS$2.panelTop });
    const contentContainerKey = "content-container";
    const content = !!this.contentBehind
      ? [
        (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
            [CSS$2.content]: true,
            [CSS$2.contentBehind]: true
          }, key: contentContainerKey }, defaultSlotNode),
        (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.contentBehindCenterContent }, panelTopSlotNode, panelBottomSlotNode, deprecatedCenterRowSlotNode)
      ]
      : [
        (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.content, key: contentContainerKey }, panelTopSlotNode, defaultSlotNode, panelBottomSlotNode, deprecatedCenterRowSlotNode)
      ];
    return content;
  }
  renderMain() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.main }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS$2.panelStart }), this.renderContent(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS$2.panelEnd })));
  }
  renderPositionedSlots() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$2.positionedSlotWrapper }, this.renderAlerts(), this.renderModals()));
  }
  render() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.F, null, this.renderHeader(), this.renderMain(), this.renderFooter(), this.renderPositionedSlots()));
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
Shell.style = shellCss;

const CSS$1 = {
  actionBarContainer: "action-bar-container",
  content: "content"
};
const SLOTS$1 = {
  actionBar: "action-bar"
};

const shellCenterRowCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{z-index:var(--calcite-app-z-index);display:flex;flex:1 1 auto;overflow:hidden;background-color:transparent}.content{margin:0px;display:flex;block-size:100%;inline-size:100%;overflow:hidden;flex:1 0 0}.action-bar-container{display:flex}:host([detached]){margin-inline:0.5rem;margin-block:0.5rem 1.5rem}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}:host([detached]){animation:in-up var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.25rem;border-width:0px;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([position=end]){align-self:flex-end}:host([position=start]){align-self:flex-start}:host([height-scale=s]){block-size:33.333333%}:host([height-scale=m]){block-size:70%}:host([height-scale=l]){block-size:100%}:host([height-scale=l][detached]){block-size:calc(100% - 2rem)}::slotted(calcite-panel){block-size:100%;inline-size:100%}::slotted(calcite-action-bar),::slotted(calcite-action-bar[position=end]){border-inline-end:1px solid;border-color:var(--calcite-ui-border-3)}";

const ShellCenterRow = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.detached = false;
    this.heightScale = "s";
    this.position = "end";
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { el } = this;
    const contentNode = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$1.content }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)));
    const actionBar = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.g)(el, SLOTS$1.actionBar);
    const actionBarNode = actionBar ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS$1.actionBarContainer, key: "action-bar" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS$1.actionBar }))) : null;
    const children = [actionBarNode, contentNode];
    if (actionBar?.position === "end") {
      children.reverse();
    }
    return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.F, null, children);
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
ShellCenterRow.style = shellCenterRowCss;

const CSS = {
  container: "container",
  content: "content",
  contentHeader: "content__header",
  contentBody: "content__body",
  contentFloat: "content--float",
  contentOverlay: "content--overlay",
  separator: "separator"
};
const SLOTS = {
  actionBar: "action-bar",
  header: "header"
};

const shellPanelCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{pointer-events:none;position:relative;display:flex;flex:0 1 auto;align-items:stretch;z-index:var(--calcite-shell-panel-z-index, var(--calcite-app-z-index));--calcite-shell-panel-detached-max-height:unset;--calcite-shell-panel-max-height:unset;--calcite-shell-panel-shadow-block-start-internal:0 4px 8px -1px rgba(0, 0, 0, 0.08),\n    0 2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-block-end-internal:0 -4px 8px -1px rgba(0, 0, 0, 0.08),\n    0 -2px 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-start-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-end-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    -2px 0 4px -1px rgba(0, 0, 0, 0.04)}.calcite--rtl.content--overlay{--calcite-shell-panel-shadow-inline-start-internal:-4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    -2px 0 4px -1px rgba(0, 0, 0, 0.04);--calcite-shell-panel-shadow-inline-end-internal:4px 0 8px -1px rgba(0, 0, 0, 0.08),\n    2px 0 4px -1px rgba(0, 0, 0, 0.04)}:host([layout=vertical]){z-index:var(--calcite-shell-panel-z-index, calc(var(--calcite-app-z-index) + 1))}:host([layout=vertical][display-mode=overlay]){z-index:var(--calcite-shell-panel-z-index, calc(var(--calcite-app-z-index-header) + 1))}:host([layout=vertical][width-scale=s]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 12vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 300px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 150px)}:host([layout=vertical][width-scale=m]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 20vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 420px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 240px)}:host([layout=vertical][width-scale=l]) .content{--calcite-shell-panel-width-internal:var(--calcite-shell-panel-width, 45vw);--calcite-shell-panel-max-width-internal:var(--calcite-shell-panel-max-width, 680px);--calcite-shell-panel-min-width-internal:var(--calcite-shell-panel-min-width, 340px)}:host([layout=horizontal][height-scale=s]) .content{--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 20vh)\n  )}:host([layout=horizontal]) .content{--calcite-shell-panel-min-height-internal:var(--calcite-shell-panel-min-height, 5vh);--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 30vh)\n  )}:host([layout=horizontal][height-scale=l]) .content{--calcite-shell-panel-max-height-internal:var(\n    --calcite-shell-panel-max-height,\n    var(--calcite-shell-panel-detached-max-height, 40vh)\n  )}.container{pointer-events:none;box-sizing:border-box;display:flex;flex:1 1 auto;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}.container *{box-sizing:border-box}:host([layout=horizontal]) .container{flex-direction:column}:host(:hover) .separator:not(:hover):not(:focus),:host(:focus-within) .separator:not(:hover):not(:focus){opacity:1;background-color:var(--calcite-ui-border-3)}.separator{pointer-events:auto;position:absolute;display:flex;background-color:transparent;opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;cursor:col-resize;outline:none}.separator:hover{opacity:1;background-color:var(--calcite-ui-border-2)}.separator:focus{background-color:var(--calcite-ui-brand);opacity:1}:host([layout=vertical]) .separator{inset-block:0px;block-size:100%;inline-size:0.125rem;cursor:col-resize}:host([layout=horizontal][position=start]) .separator{inset-block-end:0px}:host([layout=horizontal][position=end]) .separator{inset-block-start:0px}:host([layout=horizontal]) .separator{inset-inline-end:0px;block-size:0.125rem;inline-size:100%;cursor:row-resize}:host([layout=vertical][position=start]) .separator{inset-inline-end:-2px}:host([layout=horizontal][position=start]) .separator{inset-block-end:-2px}:host([layout=vertical][position=end]) .separator{inset-inline-start:-2px}:host([layout=horizontal][position=end]) .separator{inset-block-start:-2px}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%;inline-size:100%;flex:1 1 auto;max-block-size:unset;max-inline-size:unset}::slotted(.calcite-match-height){display:flex;flex:1 1 auto;overflow:hidden}.content{pointer-events:auto;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:stretch;align-self:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), max-inline-size var(--calcite-animation-timing)}:host([layout=vertical]) .content{inline-size:var(--calcite-shell-panel-width-internal);max-inline-size:var(--calcite-shell-panel-max-width-internal);min-inline-size:var(--calcite-shell-panel-min-width-internal)}:host([layout=horizontal]) .content{block-size:var(--calcite-shell-panel-height-internal);max-block-size:var(--calcite-shell-panel-max-height-internal);min-block-size:var(--calcite-shell-panel-min-height-internal)}.content__header{display:flex;flex:0 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch}.content__body{display:flex;flex:1 1 auto;flex-direction:column;overflow:hidden}.content--overlay{position:absolute;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([layout=vertical]) .content--overlay{inset-block-start:0px;block-size:100%}:host([layout=horizontal]) .content--overlay{inset-inline-start:0px;inline-size:100%}:host([layout=vertical][position=start]) .content--overlay{inset-inline-start:100%;box-shadow:var(--calcite-shell-panel-shadow-inline-start-internal)}:host([layout=vertical][position=end]) .content--overlay{inset-inline-end:100%;box-shadow:var(--calcite-shell-panel-shadow-inline-end-internal)}:host([layout=horizontal][position=start]) .content--overlay{inset-block-start:100%;box-shadow:var(--calcite-shell-panel-shadow-block-start-internal)}:host([layout=horizontal][position=end]) .content--overlay{inset-block-end:100%;box-shadow:var(--calcite-shell-panel-shadow-block-end-internal)}.content--float{margin-inline:0.5rem;margin-block:0.5rem auto;block-size:auto;overflow:hidden;border-radius:0.25rem;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);max-block-size:var(--calcite-shell-panel-max-height-internal, calc(100% - 1rem))}.content--float ::slotted(calcite-panel),.content--float ::slotted(calcite-flow){max-block-size:unset}:host([layout=horizontal]) .content--float{margin-block:0.5rem}:host([position=start]) .content--float ::slotted(calcite-panel),:host([position=start]) .content--float ::slotted(calcite-flow),:host([position=end]) .content--float ::slotted(calcite-panel),:host([position=end]) .content--float ::slotted(calcite-flow){border-style:none}.content[hidden]{display:none}slot[name=action-bar]::slotted(calcite-action-bar),.content ::slotted(calcite-flow),.content ::slotted(calcite-panel:not([closed])){border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}:host([position=start]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=start]) .content ::slotted(calcite-flow),:host([position=start]) .content ::slotted(calcite-panel){border-inline-start:none}:host([position=end]) slot[name=action-bar]::slotted(calcite-action-bar),:host([position=end]) .content ::slotted(calcite-flow),:host([position=end]) .content ::slotted(calcite-panel){border-inline-end:none}:host([layout=horizontal]) slot[name=action-bar]::slotted(calcite-action-bar){border-inline:0}:host([layout=horizontal][position=start]) .content ::slotted(calcite-flow),:host([layout=horizontal][position=start]) .content ::slotted(calcite-panel){border-inline:0;border-block-start:0}:host([layout=horizontal][position=end]) .content ::slotted(calcite-flow),:host([layout=horizontal][position=end]) .content ::slotted(calcite-panel){border-inline:0;border-block-end:0}";

const ShellPanel = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.initialContentWidth = null;
    this.initialContentHeight = null;
    this.initialClientX = null;
    this.initialClientY = null;
    this.contentWidthMax = null;
    this.contentWidthMin = null;
    this.contentHeightMax = null;
    this.contentHeightMin = null;
    this.step = 1;
    this.stepMultiplier = 10;
    this.actionBars = [];
    this.storeContentEl = (contentEl) => {
      this.contentEl = contentEl;
    };
    this.getKeyAdjustedSize = (event) => {
      const { key } = event;
      const { el, step, stepMultiplier, layout, contentWidthMin, contentWidthMax, initialContentWidth, initialContentHeight, contentHeightMin, contentHeightMax, position } = this;
      const multipliedStep = step * stepMultiplier;
      const MOVEMENT_KEYS = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "Home",
        "End",
        "PageUp",
        "PageDown"
      ];
      if (MOVEMENT_KEYS.indexOf(key) > -1) {
        event.preventDefault();
      }
      const dir = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.b)(el);
      const horizontalKeys = ["ArrowLeft", "ArrowRight"];
      const verticalKeys = ["ArrowDown", "ArrowUp"];
      const directionFactor = dir === "rtl" && horizontalKeys.includes(key) ? -1 : 1;
      const increaseKeys = layout === "horizontal"
        ? position === "end"
          ? key === verticalKeys[1] || key === horizontalKeys[0]
          : key === verticalKeys[0] || key === horizontalKeys[1]
        : key === verticalKeys[1] ||
          (position === "end" ? key === horizontalKeys[0] : key === horizontalKeys[1]);
      if (increaseKeys) {
        const stepValue = event.shiftKey ? multipliedStep : step;
        return layout === "horizontal"
          ? initialContentHeight + directionFactor * stepValue
          : initialContentWidth + directionFactor * stepValue;
      }
      const decreaseKeys = layout === "horizontal"
        ? position === "end"
          ? key === verticalKeys[0] || key === horizontalKeys[0]
          : key === verticalKeys[1] || key === horizontalKeys[1]
        : key === verticalKeys[0] ||
          (position === "end" ? key === horizontalKeys[1] : key === horizontalKeys[0]);
      if (decreaseKeys) {
        const stepValue = event.shiftKey ? multipliedStep : step;
        return layout === "horizontal"
          ? initialContentHeight - directionFactor * stepValue
          : initialContentWidth - directionFactor * stepValue;
      }
      if (key === "Home" && layout === "horizontal" && typeof contentHeightMin === "number") {
        return contentHeightMin;
      }
      if (key === "Home" && layout === "vertical" && typeof contentWidthMin === "number") {
        return contentWidthMin;
      }
      if (key === "End" && layout === "horizontal" && typeof contentHeightMax === "number") {
        return contentHeightMax;
      }
      if (key === "End" && layout === "vertical" && typeof contentWidthMax === "number") {
        return contentWidthMax;
      }
      if (key === "PageDown") {
        return layout === "horizontal"
          ? initialContentHeight - multipliedStep
          : initialContentWidth - multipliedStep;
      }
      if (key === "PageUp") {
        return layout === "horizontal"
          ? initialContentHeight + multipliedStep
          : initialContentWidth + multipliedStep;
      }
      return null;
    };
    this.initialKeydownWidth = (event) => {
      this.setInitialContentWidth();
      const width = this.getKeyAdjustedSize(event);
      if (typeof width === "number") {
        this.setContentWidth(width);
      }
    };
    this.initialKeydownHeight = (event) => {
      this.setInitialContentHeight();
      const height = this.getKeyAdjustedSize(event);
      if (typeof height === "number") {
        this.setContentHeight(height);
      }
    };
    this.separatorKeyDown = (event) => {
      this.layout === "horizontal"
        ? this.initialKeydownHeight(event)
        : this.initialKeydownWidth(event);
    };
    this.separatorPointerMove = (event) => {
      event.preventDefault();
      const { el, layout, initialContentWidth, initialContentHeight, position, initialClientX, initialClientY } = this;
      const offset = layout === "horizontal" ? event.clientY - initialClientY : event.clientX - initialClientX;
      const adjustmentDirection = layout === "vertical" && (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.b)(el) === "rtl" ? -1 : 1;
      const adjustedOffset = layout === "horizontal"
        ? position === "end"
          ? -adjustmentDirection * offset
          : adjustmentDirection * offset
        : position === "end"
          ? -adjustmentDirection * offset
          : adjustmentDirection * offset;
      layout === "horizontal"
        ? this.setContentHeight(initialContentHeight + adjustedOffset)
        : this.setContentWidth(initialContentWidth + adjustedOffset);
    };
    this.separatorPointerUp = (event) => {
      if (!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.i)(event)) {
        return;
      }
      event.preventDefault();
      document.removeEventListener("pointerup", this.separatorPointerUp);
      document.removeEventListener("pointermove", this.separatorPointerMove);
    };
    this.setInitialContentHeight = () => {
      this.initialContentHeight = this.contentEl?.getBoundingClientRect().height;
    };
    this.setInitialContentWidth = () => {
      this.initialContentWidth = this.contentEl?.getBoundingClientRect().width;
    };
    this.separatorPointerDown = (event) => {
      if (!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.i)(event)) {
        return;
      }
      event.preventDefault();
      const { separatorEl } = this;
      separatorEl && document.activeElement !== separatorEl && separatorEl.focus();
      if (this.layout === "horizontal") {
        this.setInitialContentHeight();
        this.initialClientY = event.clientY;
      }
      else {
        this.setInitialContentWidth();
        this.initialClientX = event.clientX;
      }
      document.addEventListener("pointerup", this.separatorPointerUp);
      document.addEventListener("pointermove", this.separatorPointerMove);
    };
    this.connectSeparator = (separatorEl) => {
      this.disconnectSeparator();
      this.separatorEl = separatorEl;
      separatorEl?.addEventListener("pointerdown", this.separatorPointerDown);
    };
    this.disconnectSeparator = () => {
      this.separatorEl?.removeEventListener("pointerdown", this.separatorPointerDown);
    };
    this.setActionBarsLayout = (actionBars) => {
      actionBars.forEach((actionBar) => (actionBar.layout = this.layout));
    };
    this.handleActionBarSlotChange = (event) => {
      const actionBars = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.s)(event).filter((el) => el?.matches("calcite-action-bar"));
      this.actionBars = actionBars;
      this.setActionBarsLayout(actionBars);
    };
    this.collapsed = false;
    this.detached = false;
    this.displayMode = "dock";
    this.detachedHeightScale = undefined;
    this.heightScale = undefined;
    this.widthScale = "m";
    this.layout = "vertical";
    this.position = "start";
    this.resizable = false;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.contentWidth = null;
    this.contentHeight = null;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
  }
  handleDetached(value) {
    if (value) {
      this.displayMode = "float";
    }
    else if (this.displayMode === "float") {
      this.displayMode = "dock";
    }
  }
  handleDisplayMode(value) {
    this.detached = value === "float";
  }
  handleDetachedHeightScale(value) {
    this.heightScale = value;
  }
  handleHeightScale(value) {
    this.detachedHeightScale = value;
  }
  layoutHandler() {
    this.setActionBarsLayout(this.actionBars);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
  }
  async componentWillLoad() {
    await (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    this.disconnectSeparator();
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
  }
  componentDidLoad() {
    this.updateAriaValues();
  }
  effectiveLocaleChange() {
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_5__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeader() {
    const { el } = this;
    const hasHeader = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.g)(el, SLOTS.header);
    return hasHeader ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.contentHeader, key: "header" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.header }))) : null;
  }
  render() {
    const { collapsed, position, initialContentWidth, initialContentHeight, contentWidth, contentWidthMax, contentWidthMin, contentHeight, contentHeightMax, contentHeightMin, resizable, layout, displayMode } = this;
    const dir = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.b)(this.el);
    const allowResizing = displayMode !== "float" && resizable;
    const style = allowResizing
      ? layout === "horizontal"
        ? contentHeight
          ? { height: `${contentHeight}px` }
          : null
        : contentWidth
          ? { width: `${contentWidth}px` }
          : null
      : null;
    const separatorNode = !collapsed && allowResizing ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-label": this.messages.resize, "aria-orientation": layout === "horizontal" ? "vertical" : "horizontal", "aria-valuemax": layout == "horizontal" ? contentHeightMax : contentWidthMax, "aria-valuemin": layout == "horizontal" ? contentHeightMin : contentWidthMin, "aria-valuenow": layout == "horizontal"
        ? contentHeight ?? initialContentHeight
        : contentWidth ?? initialContentWidth, class: CSS.separator, key: "separator", onKeyDown: this.separatorKeyDown, role: "separator", tabIndex: 0, "touch-action": "none",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.connectSeparator })) : null;
    const getAnimationDir = () => {
      if (layout === "horizontal") {
        return position === "start"
          ? _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_6__.C.calciteAnimateInDown
          : _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_6__.C.calciteAnimateInUp;
      }
      else {
        const isStart = (dir === "ltr" && position === "end") || (dir === "rtl" && position === "start");
        return isStart ? _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_6__.C.calciteAnimateInLeft : _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_6__.C.calciteAnimateInRight;
      }
    };
    const contentNode = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_6__.C.rtl]: dir === "rtl",
        [CSS.content]: true,
        [CSS.contentOverlay]: displayMode === "overlay",
        [CSS.contentFloat]: displayMode === "float",
        [_resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_6__.C.calciteAnimate]: displayMode === "overlay",
        [getAnimationDir()]: displayMode === "overlay"
      }, hidden: collapsed, key: "content", style: style,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeContentEl }, this.renderHeader(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.contentBody }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null)), separatorNode));
    const actionBarNode = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "action-bar", name: SLOTS.actionBar, onSlotchange: this.handleActionBarSlotChange }));
    const mainNodes = [actionBarNode, contentNode];
    if (position === "end") {
      mainNodes.reverse();
    }
    return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: { [CSS.container]: true } }, mainNodes);
  }
  // --------------------------------------------------------------------------
  //
  //  private Methods
  //
  // --------------------------------------------------------------------------
  setContentWidth(width) {
    const { contentWidthMax, contentWidthMin } = this;
    const roundedWidth = Math.round(width);
    this.contentWidth =
      typeof contentWidthMax === "number" && typeof contentWidthMin === "number"
        ? (0,_math_584fc665_js__WEBPACK_IMPORTED_MODULE_4__.c)(roundedWidth, contentWidthMin, contentWidthMax)
        : roundedWidth;
  }
  updateAriaValues() {
    const { contentEl } = this;
    const computedStyle = contentEl && getComputedStyle(contentEl);
    if (!computedStyle) {
      return;
    }
    this.layout === "horizontal"
      ? this.updateHeights(computedStyle)
      : this.updateWidths(computedStyle);
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.f)(this);
  }
  setContentHeight(height) {
    const { contentHeightMax, contentHeightMin } = this;
    const roundedWidth = Math.round(height);
    this.contentHeight =
      typeof contentHeightMax === "number" && typeof contentHeightMin === "number"
        ? (0,_math_584fc665_js__WEBPACK_IMPORTED_MODULE_4__.c)(roundedWidth, contentHeightMin, contentHeightMax)
        : roundedWidth;
  }
  updateWidths(computedStyle) {
    const max = parseInt(computedStyle.getPropertyValue("max-width"), 10);
    const min = parseInt(computedStyle.getPropertyValue("min-width"), 10);
    const valueNow = parseInt(computedStyle.getPropertyValue("width"), 10);
    if (typeof valueNow === "number" && !isNaN(valueNow)) {
      this.initialContentWidth = valueNow;
    }
    if (typeof max === "number" && !isNaN(max)) {
      this.contentWidthMax = max;
    }
    if (typeof min === "number" && !isNaN(min)) {
      this.contentWidthMin = min;
    }
  }
  updateHeights(computedStyle) {
    const max = parseInt(computedStyle.getPropertyValue("max-height"), 10);
    const min = parseInt(computedStyle.getPropertyValue("min-height"), 10);
    const valueNow = parseInt(computedStyle.getPropertyValue("height"), 10);
    if (typeof valueNow === "number" && !isNaN(valueNow)) {
      this.initialContentHeight = valueNow;
    }
    if (typeof max === "number" && !isNaN(max)) {
      this.contentHeightMax = max;
    }
    if (typeof min === "number" && !isNaN(min)) {
      this.contentHeightMin = min;
    }
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "detached": ["handleDetached"],
    "displayMode": ["handleDisplayMode"],
    "detachedHeightScale": ["handleDetachedHeightScale"],
    "heightScale": ["handleHeightScale"],
    "layout": ["layoutHandler"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
ShellPanel.style = shellPanelCss;




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

/***/ "./node_modules/@esri/calcite-components/dist/esm/math-584fc665.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/math-584fc665.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ clamp),
/* harmony export */   "d": () => (/* binding */ decimalPlaces)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
const decimalNumberRegex = new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
const decimalPlaces = (value) => {
  const match = ("" + value).match(decimalNumberRegex);
  if (!match) {
    return 0;
  }
  return Math.max(0, 
  // Number of digits right of decimal point.
  (match[1] ? match[1].length : 0) -
    // Adjust for scientific notation.
    (match[2] ? +match[2] : 0));
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectMessages),
/* harmony export */   "d": () => (/* binding */ disconnectMessages),
/* harmony export */   "s": () => (/* binding */ setUpMessages),
/* harmony export */   "u": () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.g)(`./assets/${component}/t9n/messages_${lang}.json`))
    .then((resp) => {
    if (!resp.ok) {
      throwMessageFetchError();
    }
    return resp.json();
  })
    .catch(() => throwMessageFetchError());
  return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
  throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
  component.messages = {
    ...component.defaultMessages,
    ...component.messageOverrides
  };
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
  component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
  mergeMessages(component);
}
async function fetchMessages(component, lang) {
  const { el } = component;
  const tag = el.tagName.toLowerCase();
  const componentName = tag.replace("calcite-", "");
  return getMessageBundle((0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_1__.g)(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
  component.defaultMessages = await fetchMessages(component, lang);
  mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
  component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
  component.onMessagesChange = undefined;
}
function defaultOnMessagesChange() {
  mergeMessages(this);
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZjFhNjJiNDlmNTFiZmVhZmI2YzI4YWMyYzFlYThiYWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUg7QUFDYTtBQUM4QztBQUNyRjtBQUN2QztBQUMyRTtBQUNoRTtBQUMxQjtBQUNMO0FBQ0Q7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLHNCQUFzQixnREFBZ0QsK0JBQStCLHNDQUFzQyxRQUFRLHNCQUFzQixNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsTUFBTSxrQkFBa0IsVUFBVSxhQUFhLGdCQUFnQixpQkFBaUIsc0JBQXNCLGdCQUFnQixpQ0FBaUMsTUFBTSxrQkFBa0IsYUFBYSxnQkFBZ0IsaUJBQWlCLGNBQWMsbUJBQW1CLDhCQUE4QixnQkFBZ0IsU0FBUyxhQUFh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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1zaGVsbF8zLmVudHJ5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NvbmRpdGlvbmFsU2xvdC05NDZmYjkxMS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9tYXRoLTU4NGZjNjY1LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3Q5bi1mYWMxMzM5NC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBoLCBGIGFzIEZyYWdtZW50LCBhIGFzIGdldEVsZW1lbnQsIGYgYXMgZm9yY2VVcGRhdGUgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IH0gZnJvbSAnLi9jb25kaXRpb25hbFNsb3QtOTQ2ZmI5MTEuanMnO1xuaW1wb3J0IHsgZCBhcyBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50LCBzIGFzIHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzLCBnIGFzIGdldFNsb3R0ZWQsIGIgYXMgZ2V0RWxlbWVudERpciwgaSBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TG9jYWxpemVkLCBkIGFzIGRpc2Nvbm5lY3RMb2NhbGl6ZWQgfSBmcm9tICcuL2xvY2FsZS1hMzU2NDhjZC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNsYW1wIH0gZnJvbSAnLi9tYXRoLTU4NGZjNjY1LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE1lc3NhZ2VzLCBzIGFzIHNldFVwTWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCB1IGFzIHVwZGF0ZU1lc3NhZ2VzIH0gZnJvbSAnLi90OW4tZmFjMTMzOTQuanMnO1xuaW1wb3J0IHsgQyBhcyBDU1NfVVRJTElUWSB9IGZyb20gJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcbmltcG9ydCAnLi9vYnNlcnZlcnMtOTVlOTdmYWUuanMnO1xuaW1wb3J0ICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0ICcuL2tleS04ZmYwZDEwMS5qcyc7XG5cbmNvbnN0IENTUyQyID0ge1xuICBtYWluOiBcIm1haW5cIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGNvbnRlbnRCZWhpbmQ6IFwiY29udGVudC0tYmVoaW5kXCIsXG4gIGZvb3RlcjogXCJmb290ZXJcIixcbiAgcG9zaXRpb25lZFNsb3RXcmFwcGVyOiBcInBvc2l0aW9uZWQtc2xvdC13cmFwcGVyXCIsXG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgY29udGVudEJlaGluZENlbnRlckNvbnRlbnQ6IFwiY2VudGVyLWNvbnRlbnRcIlxufTtcbmNvbnN0IFNMT1RTJDIgPSB7XG4gIGNlbnRlclJvdzogXCJjZW50ZXItcm93XCIsXG4gIHBhbmVsU3RhcnQ6IFwicGFuZWwtc3RhcnRcIixcbiAgcGFuZWxFbmQ6IFwicGFuZWwtZW5kXCIsXG4gIHBhbmVsVG9wOiBcInBhbmVsLXRvcFwiLFxuICBwYW5lbEJvdHRvbTogXCJwYW5lbC1ib3R0b21cIixcbiAgaGVhZGVyOiBcImhlYWRlclwiLFxuICBmb290ZXI6IFwiZm9vdGVyXCIsXG4gIGFsZXJ0czogXCJhbGVydHNcIixcbiAgbW9kYWxzOiBcIm1vZGFsc1wiXG59O1xuXG5jb25zdCBzaGVsbENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19Omhvc3R7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowcHg7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtvdmVyZmxvdzpoaWRkZW47LS1jYWxjaXRlLXNoZWxsLXRpcC1zcGFjaW5nOjI2dnd9Lm1haW57cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIGF1dG87ZmxleC1kaXJlY3Rpb246cm93O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO292ZXJmbG93OmhpZGRlbn0uY29udGVudHtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtd3JhcDpub3dyYXA7b3ZlcmZsb3c6YXV0b30uY29udGVudCA6OnNsb3R0ZWQoY2FsY2l0ZS1zaGVsbC1jZW50ZXItcm93KSwuY29udGVudCA6OnNsb3R0ZWQoY2FsY2l0ZS1wYW5lbCksLmNvbnRlbnQgOjpzbG90dGVkKGNhbGNpdGUtZmxvdyl7ZmxleDoxIDEgYXV0bzthbGlnbi1zZWxmOnN0cmV0Y2g7bWF4LWJsb2NrLXNpemU6dW5zZXR9LmNvbnRlbnQtLWJlaGluZHtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowcHg7Ym9yZGVyLXdpZHRoOjBweDt6LWluZGV4OmNhbGModmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCkgLSAxKTtkaXNwbGF5OmluaXRpYWx9OjpzbG90dGVkKGNhbGNpdGUtc2hlbGwtY2VudGVyLXJvdyl7aW5saW5lLXNpemU6dW5zZXR9OjpzbG90dGVkKC5oZWFkZXIgLmhlYWRpbmcpe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MS4zNzU7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpfXNsb3RbbmFtZT1wYW5lbC1lbmRdOjpzbG90dGVkKGNhbGNpdGUtc2hlbGwtcGFuZWwpe21hcmdpbi1pbmxpbmUtc3RhcnQ6YXV0b306OnNsb3R0ZWQoY2FsY2l0ZS1wYW5lbCksOjpzbG90dGVkKGNhbGNpdGUtZmxvdyl7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOjBweDtib3JkZXItaW5saW5lLWVuZC13aWR0aDowcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX1zbG90W25hbWU9Y2VudGVyLXJvd106OnNsb3R0ZWQoY2FsY2l0ZS1zaGVsbC1jZW50ZXItcm93Om5vdChbZGV0YWNoZWRdKSksc2xvdFtuYW1lPXBhbmVsLXRvcF06OnNsb3R0ZWQoY2FsY2l0ZS1zaGVsbC1jZW50ZXItcm93Om5vdChbZGV0YWNoZWRdKSksc2xvdFtuYW1lPXBhbmVsLWJvdHRvbV06OnNsb3R0ZWQoY2FsY2l0ZS1zaGVsbC1jZW50ZXItcm93Om5vdChbZGV0YWNoZWRdKSl7Ym9yZGVyLWlubGluZS1zdGFydC13aWR0aDoxcHg7Ym9yZGVyLWlubGluZS1lbmQtd2lkdGg6MXB4O2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKX0uY2VudGVyLWNvbnRlbnR7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTttaW4taW5saW5lLXNpemU6MH06OnNsb3R0ZWQoY2FsY2l0ZS1zaGVsbC1jZW50ZXItcm93KXtmbGV4Om5vbmU7YWxpZ24tc2VsZjpzdHJldGNofTo6c2xvdHRlZChjYWxjaXRlLXRpcC1tYW5hZ2VyKXtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtdG9hc3QpO2JveC1zaXppbmc6Ym9yZGVyLWJveH1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fTo6c2xvdHRlZChjYWxjaXRlLXRpcC1tYW5hZ2VyKXthbmltYXRpb246aW4tdXAgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIGVhc2UtaW4tb3V0O2JvcmRlci1yYWRpdXM6MC4yNXJlbTstLXR3LXNoYWRvdzowIDZweCAyMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCAxMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA4KTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgNnB4IDIwcHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCAxMnB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7aW5zZXQtYmxvY2stZW5kOjAuNXJlbTtpbnNldC1pbmxpbmU6dmFyKC0tY2FsY2l0ZS1zaGVsbC10aXAtc3BhY2luZyl9c2xvdFtuYW1lPWNlbnRlci1yb3ddOjpzbG90dGVkKGNhbGNpdGUtc2hlbGwtY2VudGVyLXJvdyksc2xvdFtuYW1lPXBhbmVsLWJvdHRvbV06OnNsb3R0ZWQoY2FsY2l0ZS1zaGVsbC1jZW50ZXItcm93KXttYXJnaW4tYmxvY2stc3RhcnQ6YXV0b31zbG90W25hbWU9cGFuZWwtdG9wXTo6c2xvdHRlZChjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3cpe21hcmdpbi1ibG9jay1lbmQ6YXV0b30ucG9zaXRpb24td3JhcHBlcntwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO2luc2V0OjB9XCI7XG5cbmNvbnN0IFNoZWxsID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmhhbmRsZUhlYWRlclNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzSGVhZGVyID0gISFzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRm9vdGVyU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNGb290ZXIgPSAhIXNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVBbGVydHNTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0FsZXJ0cyA9ICEhc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgICBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCk/Lm1hcCgoZWwpID0+IHtcbiAgICAgICAgaWYgKGVsLm5vZGVOYW1lID09PSBcIkNBTENJVEUtQUxFUlRcIikge1xuICAgICAgICAgIGVsLnNsb3R0ZWRJblNoZWxsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU1vZGFsc1Nsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzTW9kYWxzID0gISFzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICAgIHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzKGV2ZW50KT8ubWFwKChlbCkgPT4ge1xuICAgICAgICBpZiAoZWwubm9kZU5hbWUgPT09IFwiQ0FMQ0lURS1NT0RBTFwiKSB7XG4gICAgICAgICAgZWwuc2xvdHRlZEluU2hlbGwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuY29udGVudEJlaGluZCA9IGZhbHNlO1xuICAgIHRoaXMuaGFzSGVhZGVyID0gZmFsc2U7XG4gICAgdGhpcy5oYXNGb290ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0FsZXJ0cyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzTW9kYWxzID0gZmFsc2U7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckhlYWRlcigpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBoaWRkZW46ICF0aGlzLmhhc0hlYWRlciB9LCBoKFwic2xvdFwiLCB7IGtleTogXCJoZWFkZXJcIiwgbmFtZTogU0xPVFMkMi5oZWFkZXIsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVIZWFkZXJTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVyRm9vdGVyKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMi5mb290ZXIsIGhpZGRlbjogIXRoaXMuaGFzRm9vdGVyLCBrZXk6IFwiZm9vdGVyXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUyQyLmZvb3Rlciwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUZvb3RlclNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJBbGVydHMoKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgaGlkZGVuOiAhdGhpcy5oYXNBbGVydHMgfSwgaChcInNsb3RcIiwgeyBrZXk6IFwiYWxlcnRzXCIsIG5hbWU6IFNMT1RTJDIuYWxlcnRzLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlQWxlcnRzU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlck1vZGFscygpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBoaWRkZW46ICF0aGlzLmhhc01vZGFscyB9LCBoKFwic2xvdFwiLCB7IGtleTogXCJtb2RhbHNcIiwgbmFtZTogU0xPVFMkMi5tb2RhbHMsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVNb2RhbHNTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVyQ29udGVudCgpIHtcbiAgICBjb25zdCBkZWZhdWx0U2xvdE5vZGUgPSBoKFwic2xvdFwiLCB7IGtleTogXCJkZWZhdWx0LXNsb3RcIiB9KTtcbiAgICBjb25zdCBkZXByZWNhdGVkQ2VudGVyUm93U2xvdE5vZGUgPSAoaChcInNsb3RcIiwgeyBrZXk6IFwiY2VudGVyLXJvdy1zbG90XCIsIG5hbWU6IFNMT1RTJDIuY2VudGVyUm93IH0pKTtcbiAgICBjb25zdCBwYW5lbEJvdHRvbVNsb3ROb2RlID0gaChcInNsb3RcIiwgeyBrZXk6IFwicGFuZWwtYm90dG9tLXNsb3RcIiwgbmFtZTogU0xPVFMkMi5wYW5lbEJvdHRvbSB9KTtcbiAgICBjb25zdCBwYW5lbFRvcFNsb3ROb2RlID0gaChcInNsb3RcIiwgeyBrZXk6IFwicGFuZWwtdG9wLXNsb3RcIiwgbmFtZTogU0xPVFMkMi5wYW5lbFRvcCB9KTtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyS2V5ID0gXCJjb250ZW50LWNvbnRhaW5lclwiO1xuICAgIGNvbnN0IGNvbnRlbnQgPSAhIXRoaXMuY29udGVudEJlaGluZFxuICAgICAgPyBbXG4gICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICAgICAgW0NTUyQyLmNvbnRlbnRdOiB0cnVlLFxuICAgICAgICAgICAgW0NTUyQyLmNvbnRlbnRCZWhpbmRdOiB0cnVlXG4gICAgICAgICAgfSwga2V5OiBjb250ZW50Q29udGFpbmVyS2V5IH0sIGRlZmF1bHRTbG90Tm9kZSksXG4gICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIuY29udGVudEJlaGluZENlbnRlckNvbnRlbnQgfSwgcGFuZWxUb3BTbG90Tm9kZSwgcGFuZWxCb3R0b21TbG90Tm9kZSwgZGVwcmVjYXRlZENlbnRlclJvd1Nsb3ROb2RlKVxuICAgICAgXVxuICAgICAgOiBbXG4gICAgICAgIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTJDIuY29udGVudCwga2V5OiBjb250ZW50Q29udGFpbmVyS2V5IH0sIHBhbmVsVG9wU2xvdE5vZGUsIGRlZmF1bHRTbG90Tm9kZSwgcGFuZWxCb3R0b21TbG90Tm9kZSwgZGVwcmVjYXRlZENlbnRlclJvd1Nsb3ROb2RlKVxuICAgICAgXTtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICByZW5kZXJNYWluKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMi5tYWluIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMkMi5wYW5lbFN0YXJ0IH0pLCB0aGlzLnJlbmRlckNvbnRlbnQoKSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUyQyLnBhbmVsRW5kIH0pKSk7XG4gIH1cbiAgcmVuZGVyUG9zaXRpb25lZFNsb3RzKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMi5wb3NpdGlvbmVkU2xvdFdyYXBwZXIgfSwgdGhpcy5yZW5kZXJBbGVydHMoKSwgdGhpcy5yZW5kZXJNb2RhbHMoKSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoRnJhZ21lbnQsIG51bGwsIHRoaXMucmVuZGVySGVhZGVyKCksIHRoaXMucmVuZGVyTWFpbigpLCB0aGlzLnJlbmRlckZvb3RlcigpLCB0aGlzLnJlbmRlclBvc2l0aW9uZWRTbG90cygpKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxufTtcblNoZWxsLnN0eWxlID0gc2hlbGxDc3M7XG5cbmNvbnN0IENTUyQxID0ge1xuICBhY3Rpb25CYXJDb250YWluZXI6IFwiYWN0aW9uLWJhci1jb250YWluZXJcIixcbiAgY29udGVudDogXCJjb250ZW50XCJcbn07XG5jb25zdCBTTE9UUyQxID0ge1xuICBhY3Rpb25CYXI6IFwiYWN0aW9uLWJhclwiXG59O1xuXG5jb25zdCBzaGVsbENlbnRlclJvd0NzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19Omhvc3R7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfTpob3N0ICp7Ym94LXNpemluZzpib3JkZXItYm94fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpO2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5jb250ZW50e21hcmdpbjowcHg7ZGlzcGxheTpmbGV4O2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO292ZXJmbG93OmhpZGRlbjtmbGV4OjEgMCAwfS5hY3Rpb24tYmFyLWNvbnRhaW5lcntkaXNwbGF5OmZsZXh9Omhvc3QoW2RldGFjaGVkXSl7bWFyZ2luLWlubGluZTowLjVyZW07bWFyZ2luLWJsb2NrOjAuNXJlbSAxLjVyZW19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX06aG9zdChbZGV0YWNoZWRdKXthbmltYXRpb246aW4tdXAgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIGVhc2UtaW4tb3V0O2JvcmRlci1yYWRpdXM6MC4yNXJlbTtib3JkZXItd2lkdGg6MHB4Oy0tdHctc2hhZG93OjAgNHB4IDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7LS10dy1zaGFkb3ctY29sb3JlZDowIDRweCA4cHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDJweCA0cHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX06aG9zdChbcG9zaXRpb249ZW5kXSl7YWxpZ24tc2VsZjpmbGV4LWVuZH06aG9zdChbcG9zaXRpb249c3RhcnRdKXthbGlnbi1zZWxmOmZsZXgtc3RhcnR9Omhvc3QoW2hlaWdodC1zY2FsZT1zXSl7YmxvY2stc2l6ZTozMy4zMzMzMzMlfTpob3N0KFtoZWlnaHQtc2NhbGU9bV0pe2Jsb2NrLXNpemU6NzAlfTpob3N0KFtoZWlnaHQtc2NhbGU9bF0pe2Jsb2NrLXNpemU6MTAwJX06aG9zdChbaGVpZ2h0LXNjYWxlPWxdW2RldGFjaGVkXSl7YmxvY2stc2l6ZTpjYWxjKDEwMCUgLSAycmVtKX06OnNsb3R0ZWQoY2FsY2l0ZS1wYW5lbCl7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCV9OjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWJhciksOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWJhcltwb3NpdGlvbj1lbmRdKXtib3JkZXItaW5saW5lLWVuZDoxcHggc29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfVwiO1xuXG5jb25zdCBTaGVsbENlbnRlclJvdyA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5kZXRhY2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuaGVpZ2h0U2NhbGUgPSBcInNcIjtcbiAgICB0aGlzLnBvc2l0aW9uID0gXCJlbmRcIjtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWwgfSA9IHRoaXM7XG4gICAgY29uc3QgY29udGVudE5vZGUgPSAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMS5jb250ZW50IH0sIGgoXCJzbG90XCIsIG51bGwpKSk7XG4gICAgY29uc3QgYWN0aW9uQmFyID0gZ2V0U2xvdHRlZChlbCwgU0xPVFMkMS5hY3Rpb25CYXIpO1xuICAgIGNvbnN0IGFjdGlvbkJhck5vZGUgPSBhY3Rpb25CYXIgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMS5hY3Rpb25CYXJDb250YWluZXIsIGtleTogXCJhY3Rpb24tYmFyXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUyQxLmFjdGlvbkJhciB9KSkpIDogbnVsbDtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFthY3Rpb25CYXJOb2RlLCBjb250ZW50Tm9kZV07XG4gICAgaWYgKGFjdGlvbkJhcj8ucG9zaXRpb24gPT09IFwiZW5kXCIpIHtcbiAgICAgIGNoaWxkcmVuLnJldmVyc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGgoRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuU2hlbGxDZW50ZXJSb3cuc3R5bGUgPSBzaGVsbENlbnRlclJvd0NzcztcblxuY29uc3QgQ1NTID0ge1xuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICBjb250ZW50SGVhZGVyOiBcImNvbnRlbnRfX2hlYWRlclwiLFxuICBjb250ZW50Qm9keTogXCJjb250ZW50X19ib2R5XCIsXG4gIGNvbnRlbnRGbG9hdDogXCJjb250ZW50LS1mbG9hdFwiLFxuICBjb250ZW50T3ZlcmxheTogXCJjb250ZW50LS1vdmVybGF5XCIsXG4gIHNlcGFyYXRvcjogXCJzZXBhcmF0b3JcIlxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25CYXI6IFwiYWN0aW9uLWJhclwiLFxuICBoZWFkZXI6IFwiaGVhZGVyXCJcbn07XG5cbmNvbnN0IHNoZWxsUGFuZWxDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6ZmxleDtmbGV4OjAgMSBhdXRvO2FsaWduLWl0ZW1zOnN0cmV0Y2g7ei1pbmRleDp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLXotaW5kZXgsIHZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpKTstLWNhbGNpdGUtc2hlbGwtcGFuZWwtZGV0YWNoZWQtbWF4LWhlaWdodDp1bnNldDstLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodDp1bnNldDstLWNhbGNpdGUtc2hlbGwtcGFuZWwtc2hhZG93LWJsb2NrLXN0YXJ0LWludGVybmFsOjAgNHB4IDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXFxuICAgIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLXNoYWRvdy1ibG9jay1lbmQtaW50ZXJuYWw6MCAtNHB4IDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXFxuICAgIDAgLTJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpOy0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1zaGFkb3ctaW5saW5lLXN0YXJ0LWludGVybmFsOjRweCAwIDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXFxuICAgIDJweCAwIDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLXNoYWRvdy1pbmxpbmUtZW5kLWludGVybmFsOi00cHggMCA4cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDgpLFxcbiAgICAtMnB4IDAgNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA0KX0uY2FsY2l0ZS0tcnRsLmNvbnRlbnQtLW92ZXJsYXl7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLXNoYWRvdy1pbmxpbmUtc3RhcnQtaW50ZXJuYWw6LTRweCAwIDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXFxuICAgIC0ycHggMCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpOy0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1zaGFkb3ctaW5saW5lLWVuZC1pbnRlcm5hbDo0cHggMCA4cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDgpLFxcbiAgICAycHggMCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdKXt6LWluZGV4OnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtei1pbmRleCwgY2FsYyh2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KSArIDEpKX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXVtkaXNwbGF5LW1vZGU9b3ZlcmxheV0pe3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC16LWluZGV4LCBjYWxjKHZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtaGVhZGVyKSArIDEpKX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXVt3aWR0aC1zY2FsZT1zXSkgLmNvbnRlbnR7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLXdpZHRoLWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtd2lkdGgsIDEydncpOy0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1tYXgtd2lkdGgtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1tYXgtd2lkdGgsIDMwMHB4KTstLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWluLXdpZHRoLWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWluLXdpZHRoLCAxNTBweCl9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF1bd2lkdGgtc2NhbGU9bV0pIC5jb250ZW50ey0tY2FsY2l0ZS1zaGVsbC1wYW5lbC13aWR0aC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLXdpZHRoLCAyMHZ3KTstLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LXdpZHRoLWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LXdpZHRoLCA0MjBweCk7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1pbi13aWR0aC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1pbi13aWR0aCwgMjQwcHgpfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW3dpZHRoLXNjYWxlPWxdKSAuY29udGVudHstLWNhbGNpdGUtc2hlbGwtcGFuZWwtd2lkdGgtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC13aWR0aCwgNDV2dyk7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1heC13aWR0aC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1heC13aWR0aCwgNjgwcHgpOy0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1taW4td2lkdGgtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1taW4td2lkdGgsIDM0MHB4KX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdW2hlaWdodC1zY2FsZT1zXSkgLmNvbnRlbnR7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1heC1oZWlnaHQtaW50ZXJuYWw6dmFyKFxcbiAgICAtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodCxcXG4gICAgdmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1kZXRhY2hlZC1tYXgtaGVpZ2h0LCAyMHZoKVxcbiAgKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuY29udGVudHstLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWluLWhlaWdodC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1pbi1oZWlnaHQsIDV2aCk7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1heC1oZWlnaHQtaW50ZXJuYWw6dmFyKFxcbiAgICAtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodCxcXG4gICAgdmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1kZXRhY2hlZC1tYXgtaGVpZ2h0LCAzMHZoKVxcbiAgKX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdW2hlaWdodC1zY2FsZT1sXSkgLmNvbnRlbnR7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1heC1oZWlnaHQtaW50ZXJuYWw6dmFyKFxcbiAgICAtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodCxcXG4gICAgdmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1kZXRhY2hlZC1tYXgtaGVpZ2h0LCA0MHZoKVxcbiAgKX0uY29udGFpbmVye3BvaW50ZXItZXZlbnRzOm5vbmU7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO2FsaWduLWl0ZW1zOnN0cmV0Y2g7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKX0uY29udGFpbmVyICp7Ym94LXNpemluZzpib3JkZXItYm94fTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF0pIC5jb250YWluZXJ7ZmxleC1kaXJlY3Rpb246Y29sdW1ufTpob3N0KDpob3ZlcikgLnNlcGFyYXRvcjpub3QoOmhvdmVyKTpub3QoOmZvY3VzKSw6aG9zdCg6Zm9jdXMtd2l0aGluKSAuc2VwYXJhdG9yOm5vdCg6aG92ZXIpOm5vdCg6Zm9jdXMpe29wYWNpdHk6MTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5zZXBhcmF0b3J7cG9pbnRlci1ldmVudHM6YXV0bztwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmZsZXg7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7Y3Vyc29yOmNvbC1yZXNpemU7b3V0bGluZTpub25lfS5zZXBhcmF0b3I6aG92ZXJ7b3BhY2l0eToxO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMil9LnNlcGFyYXRvcjpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO29wYWNpdHk6MX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXSkgLnNlcGFyYXRvcntpbnNldC1ibG9jazowcHg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjAuMTI1cmVtO2N1cnNvcjpjb2wtcmVzaXplfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bcG9zaXRpb249c3RhcnRdKSAuc2VwYXJhdG9ye2luc2V0LWJsb2NrLWVuZDowcHh9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtwb3NpdGlvbj1lbmRdKSAuc2VwYXJhdG9ye2luc2V0LWJsb2NrLXN0YXJ0OjBweH06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuc2VwYXJhdG9ye2luc2V0LWlubGluZS1lbmQ6MHB4O2Jsb2NrLXNpemU6MC4xMjVyZW07aW5saW5lLXNpemU6MTAwJTtjdXJzb3I6cm93LXJlc2l6ZX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXVtwb3NpdGlvbj1zdGFydF0pIC5zZXBhcmF0b3J7aW5zZXQtaW5saW5lLWVuZDotMnB4fTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bcG9zaXRpb249c3RhcnRdKSAuc2VwYXJhdG9ye2luc2V0LWJsb2NrLWVuZDotMnB4fTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW3Bvc2l0aW9uPWVuZF0pIC5zZXBhcmF0b3J7aW5zZXQtaW5saW5lLXN0YXJ0Oi0ycHh9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtwb3NpdGlvbj1lbmRdKSAuc2VwYXJhdG9ye2luc2V0LWJsb2NrLXN0YXJ0Oi0ycHh9OjpzbG90dGVkKGNhbGNpdGUtcGFuZWwpLDo6c2xvdHRlZChjYWxjaXRlLWZsb3cpe2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO2ZsZXg6MSAxIGF1dG87bWF4LWJsb2NrLXNpemU6dW5zZXQ7bWF4LWlubGluZS1zaXplOnVuc2V0fTo6c2xvdHRlZCguY2FsY2l0ZS1tYXRjaC1oZWlnaHQpe2Rpc3BsYXk6ZmxleDtmbGV4OjEgMSBhdXRvO292ZXJmbG93OmhpZGRlbn0uY29udGVudHtwb2ludGVyLWV2ZW50czphdXRvO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC13cmFwOm5vd3JhcDthbGlnbi1pdGVtczpzdHJldGNoO2FsaWduLXNlbGY6c3RyZXRjaDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYmFja2dyb3VuZCk7cGFkZGluZzowcHg7dHJhbnNpdGlvbjptYXgtYmxvY2stc2l6ZSB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpLCBtYXgtaW5saW5lLXNpemUgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXSkgLmNvbnRlbnR7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC13aWR0aC1pbnRlcm5hbCk7bWF4LWlubGluZS1zaXplOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LXdpZHRoLWludGVybmFsKTttaW4taW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1taW4td2lkdGgtaW50ZXJuYWwpfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF0pIC5jb250ZW50e2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1oZWlnaHQtaW50ZXJuYWwpO21heC1ibG9jay1zaXplOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodC1pbnRlcm5hbCk7bWluLWJsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1taW4taGVpZ2h0LWludGVybmFsKX0uY29udGVudF9faGVhZGVye2Rpc3BsYXk6ZmxleDtmbGV4OjAgMSBhdXRvO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LXdyYXA6bm93cmFwO2FsaWduLWl0ZW1zOnN0cmV0Y2h9LmNvbnRlbnRfX2JvZHl7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93OmhpZGRlbn0uY29udGVudC0tb3ZlcmxheXtwb3NpdGlvbjphYnNvbHV0ZTstLXR3LXNoYWRvdzowIDRweCA4cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpOy0tdHctc2hhZG93LWNvbG9yZWQ6MCA0cHggOHB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCAycHggNHB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyl9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF0pIC5jb250ZW50LS1vdmVybGF5e2luc2V0LWJsb2NrLXN0YXJ0OjBweDtibG9jay1zaXplOjEwMCV9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXSkgLmNvbnRlbnQtLW92ZXJsYXl7aW5zZXQtaW5saW5lLXN0YXJ0OjBweDtpbmxpbmUtc2l6ZToxMDAlfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW3Bvc2l0aW9uPXN0YXJ0XSkgLmNvbnRlbnQtLW92ZXJsYXl7aW5zZXQtaW5saW5lLXN0YXJ0OjEwMCU7Ym94LXNoYWRvdzp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLXNoYWRvdy1pbmxpbmUtc3RhcnQtaW50ZXJuYWwpfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW3Bvc2l0aW9uPWVuZF0pIC5jb250ZW50LS1vdmVybGF5e2luc2V0LWlubGluZS1lbmQ6MTAwJTtib3gtc2hhZG93OnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtc2hhZG93LWlubGluZS1lbmQtaW50ZXJuYWwpfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bcG9zaXRpb249c3RhcnRdKSAuY29udGVudC0tb3ZlcmxheXtpbnNldC1ibG9jay1zdGFydDoxMDAlO2JveC1zaGFkb3c6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1zaGFkb3ctYmxvY2stc3RhcnQtaW50ZXJuYWwpfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bcG9zaXRpb249ZW5kXSkgLmNvbnRlbnQtLW92ZXJsYXl7aW5zZXQtYmxvY2stZW5kOjEwMCU7Ym94LXNoYWRvdzp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLXNoYWRvdy1ibG9jay1lbmQtaW50ZXJuYWwpfS5jb250ZW50LS1mbG9hdHttYXJnaW4taW5saW5lOjAuNXJlbTttYXJnaW4tYmxvY2s6MC41cmVtIGF1dG87YmxvY2stc2l6ZTphdXRvO292ZXJmbG93OmhpZGRlbjtib3JkZXItcmFkaXVzOjAuMjVyZW07LS10dy1zaGFkb3c6MCA0cHggOHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA0KTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgNHB4IDhweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgMnB4IDRweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO21heC1ibG9jay1zaXplOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodC1pbnRlcm5hbCwgY2FsYygxMDAlIC0gMXJlbSkpfS5jb250ZW50LS1mbG9hdCA6OnNsb3R0ZWQoY2FsY2l0ZS1wYW5lbCksLmNvbnRlbnQtLWZsb2F0IDo6c2xvdHRlZChjYWxjaXRlLWZsb3cpe21heC1ibG9jay1zaXplOnVuc2V0fTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF0pIC5jb250ZW50LS1mbG9hdHttYXJnaW4tYmxvY2s6MC41cmVtfTpob3N0KFtwb3NpdGlvbj1zdGFydF0pIC5jb250ZW50LS1mbG9hdCA6OnNsb3R0ZWQoY2FsY2l0ZS1wYW5lbCksOmhvc3QoW3Bvc2l0aW9uPXN0YXJ0XSkgLmNvbnRlbnQtLWZsb2F0IDo6c2xvdHRlZChjYWxjaXRlLWZsb3cpLDpob3N0KFtwb3NpdGlvbj1lbmRdKSAuY29udGVudC0tZmxvYXQgOjpzbG90dGVkKGNhbGNpdGUtcGFuZWwpLDpob3N0KFtwb3NpdGlvbj1lbmRdKSAuY29udGVudC0tZmxvYXQgOjpzbG90dGVkKGNhbGNpdGUtZmxvdyl7Ym9yZGVyLXN0eWxlOm5vbmV9LmNvbnRlbnRbaGlkZGVuXXtkaXNwbGF5Om5vbmV9c2xvdFtuYW1lPWFjdGlvbi1iYXJdOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWJhciksLmNvbnRlbnQgOjpzbG90dGVkKGNhbGNpdGUtZmxvdyksLmNvbnRlbnQgOjpzbG90dGVkKGNhbGNpdGUtcGFuZWw6bm90KFtjbG9zZWRdKSl7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfTpob3N0KFtwb3NpdGlvbj1zdGFydF0pIHNsb3RbbmFtZT1hY3Rpb24tYmFyXTo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbi1iYXIpLDpob3N0KFtwb3NpdGlvbj1zdGFydF0pIC5jb250ZW50IDo6c2xvdHRlZChjYWxjaXRlLWZsb3cpLDpob3N0KFtwb3NpdGlvbj1zdGFydF0pIC5jb250ZW50IDo6c2xvdHRlZChjYWxjaXRlLXBhbmVsKXtib3JkZXItaW5saW5lLXN0YXJ0Om5vbmV9Omhvc3QoW3Bvc2l0aW9uPWVuZF0pIHNsb3RbbmFtZT1hY3Rpb24tYmFyXTo6c2xvdHRlZChjYWxjaXRlLWFjdGlvbi1iYXIpLDpob3N0KFtwb3NpdGlvbj1lbmRdKSAuY29udGVudCA6OnNsb3R0ZWQoY2FsY2l0ZS1mbG93KSw6aG9zdChbcG9zaXRpb249ZW5kXSkgLmNvbnRlbnQgOjpzbG90dGVkKGNhbGNpdGUtcGFuZWwpe2JvcmRlci1pbmxpbmUtZW5kOm5vbmV9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXSkgc2xvdFtuYW1lPWFjdGlvbi1iYXJdOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWJhcil7Ym9yZGVyLWlubGluZTowfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bcG9zaXRpb249c3RhcnRdKSAuY29udGVudCA6OnNsb3R0ZWQoY2FsY2l0ZS1mbG93KSw6aG9zdChbbGF5b3V0PWhvcml6b250YWxdW3Bvc2l0aW9uPXN0YXJ0XSkgLmNvbnRlbnQgOjpzbG90dGVkKGNhbGNpdGUtcGFuZWwpe2JvcmRlci1pbmxpbmU6MDtib3JkZXItYmxvY2stc3RhcnQ6MH06aG9zdChbbGF5b3V0PWhvcml6b250YWxdW3Bvc2l0aW9uPWVuZF0pIC5jb250ZW50IDo6c2xvdHRlZChjYWxjaXRlLWZsb3cpLDpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bcG9zaXRpb249ZW5kXSkgLmNvbnRlbnQgOjpzbG90dGVkKGNhbGNpdGUtcGFuZWwpe2JvcmRlci1pbmxpbmU6MDtib3JkZXItYmxvY2stZW5kOjB9XCI7XG5cbmNvbnN0IFNoZWxsUGFuZWwgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuaW5pdGlhbENvbnRlbnRXaWR0aCA9IG51bGw7XG4gICAgdGhpcy5pbml0aWFsQ29udGVudEhlaWdodCA9IG51bGw7XG4gICAgdGhpcy5pbml0aWFsQ2xpZW50WCA9IG51bGw7XG4gICAgdGhpcy5pbml0aWFsQ2xpZW50WSA9IG51bGw7XG4gICAgdGhpcy5jb250ZW50V2lkdGhNYXggPSBudWxsO1xuICAgIHRoaXMuY29udGVudFdpZHRoTWluID0gbnVsbDtcbiAgICB0aGlzLmNvbnRlbnRIZWlnaHRNYXggPSBudWxsO1xuICAgIHRoaXMuY29udGVudEhlaWdodE1pbiA9IG51bGw7XG4gICAgdGhpcy5zdGVwID0gMTtcbiAgICB0aGlzLnN0ZXBNdWx0aXBsaWVyID0gMTA7XG4gICAgdGhpcy5hY3Rpb25CYXJzID0gW107XG4gICAgdGhpcy5zdG9yZUNvbnRlbnRFbCA9IChjb250ZW50RWwpID0+IHtcbiAgICAgIHRoaXMuY29udGVudEVsID0gY29udGVudEVsO1xuICAgIH07XG4gICAgdGhpcy5nZXRLZXlBZGp1c3RlZFNpemUgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsga2V5IH0gPSBldmVudDtcbiAgICAgIGNvbnN0IHsgZWwsIHN0ZXAsIHN0ZXBNdWx0aXBsaWVyLCBsYXlvdXQsIGNvbnRlbnRXaWR0aE1pbiwgY29udGVudFdpZHRoTWF4LCBpbml0aWFsQ29udGVudFdpZHRoLCBpbml0aWFsQ29udGVudEhlaWdodCwgY29udGVudEhlaWdodE1pbiwgY29udGVudEhlaWdodE1heCwgcG9zaXRpb24gfSA9IHRoaXM7XG4gICAgICBjb25zdCBtdWx0aXBsaWVkU3RlcCA9IHN0ZXAgKiBzdGVwTXVsdGlwbGllcjtcbiAgICAgIGNvbnN0IE1PVkVNRU5UX0tFWVMgPSBbXG4gICAgICAgIFwiQXJyb3dVcFwiLFxuICAgICAgICBcIkFycm93RG93blwiLFxuICAgICAgICBcIkFycm93TGVmdFwiLFxuICAgICAgICBcIkFycm93UmlnaHRcIixcbiAgICAgICAgXCJIb21lXCIsXG4gICAgICAgIFwiRW5kXCIsXG4gICAgICAgIFwiUGFnZVVwXCIsXG4gICAgICAgIFwiUGFnZURvd25cIlxuICAgICAgXTtcbiAgICAgIGlmIChNT1ZFTUVOVF9LRVlTLmluZGV4T2Yoa2V5KSA+IC0xKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKGVsKTtcbiAgICAgIGNvbnN0IGhvcml6b250YWxLZXlzID0gW1wiQXJyb3dMZWZ0XCIsIFwiQXJyb3dSaWdodFwiXTtcbiAgICAgIGNvbnN0IHZlcnRpY2FsS2V5cyA9IFtcIkFycm93RG93blwiLCBcIkFycm93VXBcIl07XG4gICAgICBjb25zdCBkaXJlY3Rpb25GYWN0b3IgPSBkaXIgPT09IFwicnRsXCIgJiYgaG9yaXpvbnRhbEtleXMuaW5jbHVkZXMoa2V5KSA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGluY3JlYXNlS2V5cyA9IGxheW91dCA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgPyBwb3NpdGlvbiA9PT0gXCJlbmRcIlxuICAgICAgICAgID8ga2V5ID09PSB2ZXJ0aWNhbEtleXNbMV0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1swXVxuICAgICAgICAgIDoga2V5ID09PSB2ZXJ0aWNhbEtleXNbMF0gfHwga2V5ID09PSBob3Jpem9udGFsS2V5c1sxXVxuICAgICAgICA6IGtleSA9PT0gdmVydGljYWxLZXlzWzFdIHx8XG4gICAgICAgICAgKHBvc2l0aW9uID09PSBcImVuZFwiID8ga2V5ID09PSBob3Jpem9udGFsS2V5c1swXSA6IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMV0pO1xuICAgICAgaWYgKGluY3JlYXNlS2V5cykge1xuICAgICAgICBjb25zdCBzdGVwVmFsdWUgPSBldmVudC5zaGlmdEtleSA/IG11bHRpcGxpZWRTdGVwIDogc3RlcDtcbiAgICAgICAgcmV0dXJuIGxheW91dCA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgICA/IGluaXRpYWxDb250ZW50SGVpZ2h0ICsgZGlyZWN0aW9uRmFjdG9yICogc3RlcFZhbHVlXG4gICAgICAgICAgOiBpbml0aWFsQ29udGVudFdpZHRoICsgZGlyZWN0aW9uRmFjdG9yICogc3RlcFZhbHVlO1xuICAgICAgfVxuICAgICAgY29uc3QgZGVjcmVhc2VLZXlzID0gbGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgICA/IHBvc2l0aW9uID09PSBcImVuZFwiXG4gICAgICAgICAgPyBrZXkgPT09IHZlcnRpY2FsS2V5c1swXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzBdXG4gICAgICAgICAgOiBrZXkgPT09IHZlcnRpY2FsS2V5c1sxXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzFdXG4gICAgICAgIDoga2V5ID09PSB2ZXJ0aWNhbEtleXNbMF0gfHxcbiAgICAgICAgICAocG9zaXRpb24gPT09IFwiZW5kXCIgPyBrZXkgPT09IGhvcml6b250YWxLZXlzWzFdIDoga2V5ID09PSBob3Jpem9udGFsS2V5c1swXSk7XG4gICAgICBpZiAoZGVjcmVhc2VLZXlzKSB7XG4gICAgICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGV2ZW50LnNoaWZ0S2V5ID8gbXVsdGlwbGllZFN0ZXAgOiBzdGVwO1xuICAgICAgICByZXR1cm4gbGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgICAgID8gaW5pdGlhbENvbnRlbnRIZWlnaHQgLSBkaXJlY3Rpb25GYWN0b3IgKiBzdGVwVmFsdWVcbiAgICAgICAgICA6IGluaXRpYWxDb250ZW50V2lkdGggLSBkaXJlY3Rpb25GYWN0b3IgKiBzdGVwVmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkhvbWVcIiAmJiBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiICYmIHR5cGVvZiBjb250ZW50SGVpZ2h0TWluID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50SGVpZ2h0TWluO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJIb21lXCIgJiYgbGF5b3V0ID09PSBcInZlcnRpY2FsXCIgJiYgdHlwZW9mIGNvbnRlbnRXaWR0aE1pbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gY29udGVudFdpZHRoTWluO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJFbmRcIiAmJiBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiICYmIHR5cGVvZiBjb250ZW50SGVpZ2h0TWF4ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50SGVpZ2h0TWF4O1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJFbmRcIiAmJiBsYXlvdXQgPT09IFwidmVydGljYWxcIiAmJiB0eXBlb2YgY29udGVudFdpZHRoTWF4ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50V2lkdGhNYXg7XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIlBhZ2VEb3duXCIpIHtcbiAgICAgICAgcmV0dXJuIGxheW91dCA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgICA/IGluaXRpYWxDb250ZW50SGVpZ2h0IC0gbXVsdGlwbGllZFN0ZXBcbiAgICAgICAgICA6IGluaXRpYWxDb250ZW50V2lkdGggLSBtdWx0aXBsaWVkU3RlcDtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiUGFnZVVwXCIpIHtcbiAgICAgICAgcmV0dXJuIGxheW91dCA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgICA/IGluaXRpYWxDb250ZW50SGVpZ2h0ICsgbXVsdGlwbGllZFN0ZXBcbiAgICAgICAgICA6IGluaXRpYWxDb250ZW50V2lkdGggKyBtdWx0aXBsaWVkU3RlcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgdGhpcy5pbml0aWFsS2V5ZG93bldpZHRoID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNldEluaXRpYWxDb250ZW50V2lkdGgoKTtcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRLZXlBZGp1c3RlZFNpemUoZXZlbnQpO1xuICAgICAgaWYgKHR5cGVvZiB3aWR0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB0aGlzLnNldENvbnRlbnRXaWR0aCh3aWR0aCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmluaXRpYWxLZXlkb3duSGVpZ2h0ID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNldEluaXRpYWxDb250ZW50SGVpZ2h0KCk7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldEtleUFkanVzdGVkU2l6ZShldmVudCk7XG4gICAgICBpZiAodHlwZW9mIGhlaWdodCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB0aGlzLnNldENvbnRlbnRIZWlnaHQoaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2VwYXJhdG9yS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5sYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgID8gdGhpcy5pbml0aWFsS2V5ZG93bkhlaWdodChldmVudClcbiAgICAgICAgOiB0aGlzLmluaXRpYWxLZXlkb3duV2lkdGgoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5zZXBhcmF0b3JQb2ludGVyTW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHsgZWwsIGxheW91dCwgaW5pdGlhbENvbnRlbnRXaWR0aCwgaW5pdGlhbENvbnRlbnRIZWlnaHQsIHBvc2l0aW9uLCBpbml0aWFsQ2xpZW50WCwgaW5pdGlhbENsaWVudFkgfSA9IHRoaXM7XG4gICAgICBjb25zdCBvZmZzZXQgPSBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiID8gZXZlbnQuY2xpZW50WSAtIGluaXRpYWxDbGllbnRZIDogZXZlbnQuY2xpZW50WCAtIGluaXRpYWxDbGllbnRYO1xuICAgICAgY29uc3QgYWRqdXN0bWVudERpcmVjdGlvbiA9IGxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiICYmIGdldEVsZW1lbnREaXIoZWwpID09PSBcInJ0bFwiID8gLTEgOiAxO1xuICAgICAgY29uc3QgYWRqdXN0ZWRPZmZzZXQgPSBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgID8gcG9zaXRpb24gPT09IFwiZW5kXCJcbiAgICAgICAgICA/IC1hZGp1c3RtZW50RGlyZWN0aW9uICogb2Zmc2V0XG4gICAgICAgICAgOiBhZGp1c3RtZW50RGlyZWN0aW9uICogb2Zmc2V0XG4gICAgICAgIDogcG9zaXRpb24gPT09IFwiZW5kXCJcbiAgICAgICAgICA/IC1hZGp1c3RtZW50RGlyZWN0aW9uICogb2Zmc2V0XG4gICAgICAgICAgOiBhZGp1c3RtZW50RGlyZWN0aW9uICogb2Zmc2V0O1xuICAgICAgbGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgICA/IHRoaXMuc2V0Q29udGVudEhlaWdodChpbml0aWFsQ29udGVudEhlaWdodCArIGFkanVzdGVkT2Zmc2V0KVxuICAgICAgICA6IHRoaXMuc2V0Q29udGVudFdpZHRoKGluaXRpYWxDb250ZW50V2lkdGggKyBhZGp1c3RlZE9mZnNldCk7XG4gICAgfTtcbiAgICB0aGlzLnNlcGFyYXRvclBvaW50ZXJVcCA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCFpc1ByaW1hcnlQb2ludGVyQnV0dG9uKGV2ZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCB0aGlzLnNlcGFyYXRvclBvaW50ZXJVcCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5zZXBhcmF0b3JQb2ludGVyTW92ZSk7XG4gICAgfTtcbiAgICB0aGlzLnNldEluaXRpYWxDb250ZW50SGVpZ2h0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5pbml0aWFsQ29udGVudEhlaWdodCA9IHRoaXMuY29udGVudEVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfTtcbiAgICB0aGlzLnNldEluaXRpYWxDb250ZW50V2lkdGggPSAoKSA9PiB7XG4gICAgICB0aGlzLmluaXRpYWxDb250ZW50V2lkdGggPSB0aGlzLmNvbnRlbnRFbD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgfTtcbiAgICB0aGlzLnNlcGFyYXRvclBvaW50ZXJEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB7IHNlcGFyYXRvckVsIH0gPSB0aGlzO1xuICAgICAgc2VwYXJhdG9yRWwgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gc2VwYXJhdG9yRWwgJiYgc2VwYXJhdG9yRWwuZm9jdXMoKTtcbiAgICAgIGlmICh0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgdGhpcy5zZXRJbml0aWFsQ29udGVudEhlaWdodCgpO1xuICAgICAgICB0aGlzLmluaXRpYWxDbGllbnRZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnNldEluaXRpYWxDb250ZW50V2lkdGgoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsQ2xpZW50WCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIHRoaXMuc2VwYXJhdG9yUG9pbnRlclVwKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCB0aGlzLnNlcGFyYXRvclBvaW50ZXJNb3ZlKTtcbiAgICB9O1xuICAgIHRoaXMuY29ubmVjdFNlcGFyYXRvciA9IChzZXBhcmF0b3JFbCkgPT4ge1xuICAgICAgdGhpcy5kaXNjb25uZWN0U2VwYXJhdG9yKCk7XG4gICAgICB0aGlzLnNlcGFyYXRvckVsID0gc2VwYXJhdG9yRWw7XG4gICAgICBzZXBhcmF0b3JFbD8uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuc2VwYXJhdG9yUG9pbnRlckRvd24pO1xuICAgIH07XG4gICAgdGhpcy5kaXNjb25uZWN0U2VwYXJhdG9yID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXBhcmF0b3JFbD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIHRoaXMuc2VwYXJhdG9yUG9pbnRlckRvd24pO1xuICAgIH07XG4gICAgdGhpcy5zZXRBY3Rpb25CYXJzTGF5b3V0ID0gKGFjdGlvbkJhcnMpID0+IHtcbiAgICAgIGFjdGlvbkJhcnMuZm9yRWFjaCgoYWN0aW9uQmFyKSA9PiAoYWN0aW9uQmFyLmxheW91dCA9IHRoaXMubGF5b3V0KSk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUFjdGlvbkJhclNsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbkJhcnMgPSBzbG90Q2hhbmdlR2V0QXNzaWduZWRFbGVtZW50cyhldmVudCkuZmlsdGVyKChlbCkgPT4gZWw/Lm1hdGNoZXMoXCJjYWxjaXRlLWFjdGlvbi1iYXJcIikpO1xuICAgICAgdGhpcy5hY3Rpb25CYXJzID0gYWN0aW9uQmFycztcbiAgICAgIHRoaXMuc2V0QWN0aW9uQmFyc0xheW91dChhY3Rpb25CYXJzKTtcbiAgICB9O1xuICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgdGhpcy5kZXRhY2hlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheU1vZGUgPSBcImRvY2tcIjtcbiAgICB0aGlzLmRldGFjaGVkSGVpZ2h0U2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWlnaHRTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLndpZHRoU2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLmxheW91dCA9IFwidmVydGljYWxcIjtcbiAgICB0aGlzLnBvc2l0aW9uID0gXCJzdGFydFwiO1xuICAgIHRoaXMucmVzaXphYmxlID0gZmFsc2U7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lc3NhZ2VPdmVycmlkZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb250ZW50V2lkdGggPSBudWxsO1xuICAgIHRoaXMuY29udGVudEhlaWdodCA9IG51bGw7XG4gICAgdGhpcy5kZWZhdWx0TWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICB9XG4gIGhhbmRsZURldGFjaGVkKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlNb2RlID0gXCJmbG9hdFwiO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmRpc3BsYXlNb2RlID09PSBcImZsb2F0XCIpIHtcbiAgICAgIHRoaXMuZGlzcGxheU1vZGUgPSBcImRvY2tcIjtcbiAgICB9XG4gIH1cbiAgaGFuZGxlRGlzcGxheU1vZGUodmFsdWUpIHtcbiAgICB0aGlzLmRldGFjaGVkID0gdmFsdWUgPT09IFwiZmxvYXRcIjtcbiAgfVxuICBoYW5kbGVEZXRhY2hlZEhlaWdodFNjYWxlKHZhbHVlKSB7XG4gICAgdGhpcy5oZWlnaHRTY2FsZSA9IHZhbHVlO1xuICB9XG4gIGhhbmRsZUhlaWdodFNjYWxlKHZhbHVlKSB7XG4gICAgdGhpcy5kZXRhY2hlZEhlaWdodFNjYWxlID0gdmFsdWU7XG4gIH1cbiAgbGF5b3V0SGFuZGxlcigpIHtcbiAgICB0aGlzLnNldEFjdGlvbkJhcnNMYXlvdXQodGhpcy5hY3Rpb25CYXJzKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy5kaXNjb25uZWN0U2VwYXJhdG9yKCk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICB0aGlzLnVwZGF0ZUFyaWFWYWx1ZXMoKTtcbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXJIZWFkZXIoKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBoYXNIZWFkZXIgPSBnZXRTbG90dGVkKGVsLCBTTE9UUy5oZWFkZXIpO1xuICAgIHJldHVybiBoYXNIZWFkZXIgPyAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudEhlYWRlciwga2V5OiBcImhlYWRlclwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuaGVhZGVyIH0pKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbGxhcHNlZCwgcG9zaXRpb24sIGluaXRpYWxDb250ZW50V2lkdGgsIGluaXRpYWxDb250ZW50SGVpZ2h0LCBjb250ZW50V2lkdGgsIGNvbnRlbnRXaWR0aE1heCwgY29udGVudFdpZHRoTWluLCBjb250ZW50SGVpZ2h0LCBjb250ZW50SGVpZ2h0TWF4LCBjb250ZW50SGVpZ2h0TWluLCByZXNpemFibGUsIGxheW91dCwgZGlzcGxheU1vZGUgfSA9IHRoaXM7XG4gICAgY29uc3QgZGlyID0gZ2V0RWxlbWVudERpcih0aGlzLmVsKTtcbiAgICBjb25zdCBhbGxvd1Jlc2l6aW5nID0gZGlzcGxheU1vZGUgIT09IFwiZmxvYXRcIiAmJiByZXNpemFibGU7XG4gICAgY29uc3Qgc3R5bGUgPSBhbGxvd1Jlc2l6aW5nXG4gICAgICA/IGxheW91dCA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgPyBjb250ZW50SGVpZ2h0XG4gICAgICAgICAgPyB7IGhlaWdodDogYCR7Y29udGVudEhlaWdodH1weGAgfVxuICAgICAgICAgIDogbnVsbFxuICAgICAgICA6IGNvbnRlbnRXaWR0aFxuICAgICAgICAgID8geyB3aWR0aDogYCR7Y29udGVudFdpZHRofXB4YCB9XG4gICAgICAgICAgOiBudWxsXG4gICAgICA6IG51bGw7XG4gICAgY29uc3Qgc2VwYXJhdG9yTm9kZSA9ICFjb2xsYXBzZWQgJiYgYWxsb3dSZXNpemluZyA/IChoKFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMucmVzaXplLCBcImFyaWEtb3JpZW50YXRpb25cIjogbGF5b3V0ID09PSBcImhvcml6b250YWxcIiA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiLCBcImFyaWEtdmFsdWVtYXhcIjogbGF5b3V0ID09IFwiaG9yaXpvbnRhbFwiID8gY29udGVudEhlaWdodE1heCA6IGNvbnRlbnRXaWR0aE1heCwgXCJhcmlhLXZhbHVlbWluXCI6IGxheW91dCA9PSBcImhvcml6b250YWxcIiA/IGNvbnRlbnRIZWlnaHRNaW4gOiBjb250ZW50V2lkdGhNaW4sIFwiYXJpYS12YWx1ZW5vd1wiOiBsYXlvdXQgPT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgPyBjb250ZW50SGVpZ2h0ID8/IGluaXRpYWxDb250ZW50SGVpZ2h0XG4gICAgICAgIDogY29udGVudFdpZHRoID8/IGluaXRpYWxDb250ZW50V2lkdGgsIGNsYXNzOiBDU1Muc2VwYXJhdG9yLCBrZXk6IFwic2VwYXJhdG9yXCIsIG9uS2V5RG93bjogdGhpcy5zZXBhcmF0b3JLZXlEb3duLCByb2xlOiBcInNlcGFyYXRvclwiLCB0YWJJbmRleDogMCwgXCJ0b3VjaC1hY3Rpb25cIjogXCJub25lXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5jb25uZWN0U2VwYXJhdG9yIH0pKSA6IG51bGw7XG4gICAgY29uc3QgZ2V0QW5pbWF0aW9uRGlyID0gKCkgPT4ge1xuICAgICAgaWYgKGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uID09PSBcInN0YXJ0XCJcbiAgICAgICAgICA/IENTU19VVElMSVRZLmNhbGNpdGVBbmltYXRlSW5Eb3duXG4gICAgICAgICAgOiBDU1NfVVRJTElUWS5jYWxjaXRlQW5pbWF0ZUluVXA7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgaXNTdGFydCA9IChkaXIgPT09IFwibHRyXCIgJiYgcG9zaXRpb24gPT09IFwiZW5kXCIpIHx8IChkaXIgPT09IFwicnRsXCIgJiYgcG9zaXRpb24gPT09IFwic3RhcnRcIik7XG4gICAgICAgIHJldHVybiBpc1N0YXJ0ID8gQ1NTX1VUSUxJVFkuY2FsY2l0ZUFuaW1hdGVJbkxlZnQgOiBDU1NfVVRJTElUWS5jYWxjaXRlQW5pbWF0ZUluUmlnaHQ7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjb250ZW50Tm9kZSA9IChoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTU19VVElMSVRZLnJ0bF06IGRpciA9PT0gXCJydGxcIixcbiAgICAgICAgW0NTUy5jb250ZW50XTogdHJ1ZSxcbiAgICAgICAgW0NTUy5jb250ZW50T3ZlcmxheV06IGRpc3BsYXlNb2RlID09PSBcIm92ZXJsYXlcIixcbiAgICAgICAgW0NTUy5jb250ZW50RmxvYXRdOiBkaXNwbGF5TW9kZSA9PT0gXCJmbG9hdFwiLFxuICAgICAgICBbQ1NTX1VUSUxJVFkuY2FsY2l0ZUFuaW1hdGVdOiBkaXNwbGF5TW9kZSA9PT0gXCJvdmVybGF5XCIsXG4gICAgICAgIFtnZXRBbmltYXRpb25EaXIoKV06IGRpc3BsYXlNb2RlID09PSBcIm92ZXJsYXlcIlxuICAgICAgfSwgaGlkZGVuOiBjb2xsYXBzZWQsIGtleTogXCJjb250ZW50XCIsIHN0eWxlOiBzdHlsZSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnN0b3JlQ29udGVudEVsIH0sIHRoaXMucmVuZGVySGVhZGVyKCksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbnRlbnRCb2R5IH0sIGgoXCJzbG90XCIsIG51bGwpKSwgc2VwYXJhdG9yTm9kZSkpO1xuICAgIGNvbnN0IGFjdGlvbkJhck5vZGUgPSAoaChcInNsb3RcIiwgeyBrZXk6IFwiYWN0aW9uLWJhclwiLCBuYW1lOiBTTE9UUy5hY3Rpb25CYXIsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVBY3Rpb25CYXJTbG90Q2hhbmdlIH0pKTtcbiAgICBjb25zdCBtYWluTm9kZXMgPSBbYWN0aW9uQmFyTm9kZSwgY29udGVudE5vZGVdO1xuICAgIGlmIChwb3NpdGlvbiA9PT0gXCJlbmRcIikge1xuICAgICAgbWFpbk5vZGVzLnJldmVyc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGgoXCJkaXZcIiwgeyBjbGFzczogeyBbQ1NTLmNvbnRhaW5lcl06IHRydWUgfSB9LCBtYWluTm9kZXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBwcml2YXRlIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0Q29udGVudFdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3QgeyBjb250ZW50V2lkdGhNYXgsIGNvbnRlbnRXaWR0aE1pbiB9ID0gdGhpcztcbiAgICBjb25zdCByb3VuZGVkV2lkdGggPSBNYXRoLnJvdW5kKHdpZHRoKTtcbiAgICB0aGlzLmNvbnRlbnRXaWR0aCA9XG4gICAgICB0eXBlb2YgY29udGVudFdpZHRoTWF4ID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBjb250ZW50V2lkdGhNaW4gPT09IFwibnVtYmVyXCJcbiAgICAgICAgPyBjbGFtcChyb3VuZGVkV2lkdGgsIGNvbnRlbnRXaWR0aE1pbiwgY29udGVudFdpZHRoTWF4KVxuICAgICAgICA6IHJvdW5kZWRXaWR0aDtcbiAgfVxuICB1cGRhdGVBcmlhVmFsdWVzKCkge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBjb250ZW50RWwgJiYgZ2V0Q29tcHV0ZWRTdHlsZShjb250ZW50RWwpO1xuICAgIGlmICghY29tcHV0ZWRTdHlsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgID8gdGhpcy51cGRhdGVIZWlnaHRzKGNvbXB1dGVkU3R5bGUpXG4gICAgICA6IHRoaXMudXBkYXRlV2lkdGhzKGNvbXB1dGVkU3R5bGUpO1xuICAgIGZvcmNlVXBkYXRlKHRoaXMpO1xuICB9XG4gIHNldENvbnRlbnRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgY29uc3QgeyBjb250ZW50SGVpZ2h0TWF4LCBjb250ZW50SGVpZ2h0TWluIH0gPSB0aGlzO1xuICAgIGNvbnN0IHJvdW5kZWRXaWR0aCA9IE1hdGgucm91bmQoaGVpZ2h0KTtcbiAgICB0aGlzLmNvbnRlbnRIZWlnaHQgPVxuICAgICAgdHlwZW9mIGNvbnRlbnRIZWlnaHRNYXggPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGNvbnRlbnRIZWlnaHRNaW4gPT09IFwibnVtYmVyXCJcbiAgICAgICAgPyBjbGFtcChyb3VuZGVkV2lkdGgsIGNvbnRlbnRIZWlnaHRNaW4sIGNvbnRlbnRIZWlnaHRNYXgpXG4gICAgICAgIDogcm91bmRlZFdpZHRoO1xuICB9XG4gIHVwZGF0ZVdpZHRocyhjb21wdXRlZFN0eWxlKSB7XG4gICAgY29uc3QgbWF4ID0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibWF4LXdpZHRoXCIpLCAxMCk7XG4gICAgY29uc3QgbWluID0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibWluLXdpZHRoXCIpLCAxMCk7XG4gICAgY29uc3QgdmFsdWVOb3cgPSBwYXJzZUludChjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJ3aWR0aFwiKSwgMTApO1xuICAgIGlmICh0eXBlb2YgdmFsdWVOb3cgPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKHZhbHVlTm93KSkge1xuICAgICAgdGhpcy5pbml0aWFsQ29udGVudFdpZHRoID0gdmFsdWVOb3c7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbWF4ID09PSBcIm51bWJlclwiICYmICFpc05hTihtYXgpKSB7XG4gICAgICB0aGlzLmNvbnRlbnRXaWR0aE1heCA9IG1heDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtaW4gPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKG1pbikpIHtcbiAgICAgIHRoaXMuY29udGVudFdpZHRoTWluID0gbWluO1xuICAgIH1cbiAgfVxuICB1cGRhdGVIZWlnaHRzKGNvbXB1dGVkU3R5bGUpIHtcbiAgICBjb25zdCBtYXggPSBwYXJzZUludChjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJtYXgtaGVpZ2h0XCIpLCAxMCk7XG4gICAgY29uc3QgbWluID0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibWluLWhlaWdodFwiKSwgMTApO1xuICAgIGNvbnN0IHZhbHVlTm93ID0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiaGVpZ2h0XCIpLCAxMCk7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZU5vdyA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4odmFsdWVOb3cpKSB7XG4gICAgICB0aGlzLmluaXRpYWxDb250ZW50SGVpZ2h0ID0gdmFsdWVOb3c7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbWF4ID09PSBcIm51bWJlclwiICYmICFpc05hTihtYXgpKSB7XG4gICAgICB0aGlzLmNvbnRlbnRIZWlnaHRNYXggPSBtYXg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbWluID09PSBcIm51bWJlclwiICYmICFpc05hTihtaW4pKSB7XG4gICAgICB0aGlzLmNvbnRlbnRIZWlnaHRNaW4gPSBtaW47XG4gICAgfVxuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJkZXRhY2hlZFwiOiBbXCJoYW5kbGVEZXRhY2hlZFwiXSxcbiAgICBcImRpc3BsYXlNb2RlXCI6IFtcImhhbmRsZURpc3BsYXlNb2RlXCJdLFxuICAgIFwiZGV0YWNoZWRIZWlnaHRTY2FsZVwiOiBbXCJoYW5kbGVEZXRhY2hlZEhlaWdodFNjYWxlXCJdLFxuICAgIFwiaGVpZ2h0U2NhbGVcIjogW1wiaGFuZGxlSGVpZ2h0U2NhbGVcIl0sXG4gICAgXCJsYXlvdXRcIjogW1wibGF5b3V0SGFuZGxlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxufTtcblNoZWxsUGFuZWwuc3R5bGUgPSBzaGVsbFBhbmVsQ3NzO1xuXG5leHBvcnQgeyBTaGVsbCBhcyBjYWxjaXRlX3NoZWxsLCBTaGVsbENlbnRlclJvdyBhcyBjYWxjaXRlX3NoZWxsX2NlbnRlcl9yb3csIFNoZWxsUGFuZWwgYXMgY2FsY2l0ZV9zaGVsbF9wYW5lbCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGYgYXMgZm9yY2VVcGRhdGUgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5cbmNvbnN0IG9ic2VydmVkID0gbmV3IFNldCgpO1xubGV0IG11dGF0aW9uT2JzZXJ2ZXI7XG5jb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7IGNoaWxkTGlzdDogdHJ1ZSB9O1xuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGEgY29uZGl0aW9uYWwgc2xvdCBjb21wb25lbnQgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQGRlcHJlY2F0ZWQgVXNlIGBvblNsb3RjaGFuZ2VgIGV2ZW50IHdpdGggYHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnRgIERPTSB1dGlsaXR5IGluc3RlYWQuXG4gKlxuICogYGBgXG4gKiA8c2xvdCBvblNsb3RjaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5teVNsb3RIYXNFbGVtZW50ID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCl9IC8+fVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGlmICghbXV0YXRpb25PYnNlcnZlcikge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsIHByb2Nlc3NNdXRhdGlvbnMpO1xuICB9XG4gIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShjb21wb25lbnQuZWwsIG9ic2VydmVyT3B0aW9ucyk7XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgb2JzZXJ2ZWQuZGVsZXRlKGNvbXBvbmVudC5lbCk7XG4gIC8vIHdlIGV4cGxpY2l0bHkgcHJvY2VzcyBxdWV1ZWQgbXV0YXRpb25zIGFuZCBkaXNjb25uZWN0IGFuZCByZWNvbm5lY3RcbiAgLy8gdGhlIG9ic2VydmVyIHVudGlsIE11dGF0aW9uT2JzZXJ2ZXIgZ2V0cyBhbiBgdW5vYnNlcnZlYCBtZXRob2RcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvZG9tL2lzc3Vlcy8xMjZcbiAgcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbk9ic2VydmVyLnRha2VSZWNvcmRzKCkpO1xuICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgZm9yIChjb25zdCBbZWxlbWVudF0gb2Ygb2JzZXJ2ZWQuZW50cmllcygpKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIG9ic2VydmVyT3B0aW9ucyk7XG4gIH1cbn1cbmZ1bmN0aW9uIHByb2Nlc3NNdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gIG11dGF0aW9ucy5mb3JFYWNoKCh7IHRhcmdldCB9KSA9PiB7XG4gICAgZm9yY2VVcGRhdGUodGFyZ2V0KTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgYXMgYywgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBkIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKTtcbmNvbnN0IGRlY2ltYWxOdW1iZXJSZWdleCA9IG5ldyBSZWdFeHAoLyg/OlxcLihcXGQrKSk/KD86W2VFXShbKy1dP1xcZCspKT8kLyk7XG5jb25zdCBkZWNpbWFsUGxhY2VzID0gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IG1hdGNoID0gKFwiXCIgKyB2YWx1ZSkubWF0Y2goZGVjaW1hbE51bWJlclJlZ2V4KTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiBNYXRoLm1heCgwLCBcbiAgLy8gTnVtYmVyIG9mIGRpZ2l0cyByaWdodCBvZiBkZWNpbWFsIHBvaW50LlxuICAobWF0Y2hbMV0gPyBtYXRjaFsxXS5sZW5ndGggOiAwKSAtXG4gICAgLy8gQWRqdXN0IGZvciBzY2llbnRpZmljIG5vdGF0aW9uLlxuICAgIChtYXRjaFsyXSA/ICttYXRjaFsyXSA6IDApKTtcbn07XG5cbmV4cG9ydCB7IGNsYW1wIGFzIGMsIGRlY2ltYWxQbGFjZXMgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGcgYXMgZ2V0QXNzZXRQYXRoIH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFN1cHBvcnRlZExvY2FsZSB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcblxuY29uc3QgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlID0ge307XG5hc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlQnVuZGxlKGxhbmcsIGNvbXBvbmVudCkge1xuICBjb25zdCBrZXkgPSBgJHtjb21wb25lbnR9XyR7bGFuZ31gO1xuICBpZiAoY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0pIHtcbiAgICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG4gIH1cbiAgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0gPSBmZXRjaChnZXRBc3NldFBhdGgoYC4vYXNzZXRzLyR7Y29tcG9uZW50fS90OW4vbWVzc2FnZXNfJHtsYW5nfS5qc29uYCkpXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICB9KVxuICAgIC5jYXRjaCgoKSA9PiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkpO1xuICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG59XG5mdW5jdGlvbiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgZmV0Y2ggY29tcG9uZW50IG1lc3NhZ2UgYnVuZGxlXCIpO1xufVxuZnVuY3Rpb24gbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm1lc3NhZ2VzID0ge1xuICAgIC4uLmNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMsXG4gICAgLi4uY29tcG9uZW50Lm1lc3NhZ2VPdmVycmlkZXNcbiAgfTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgdGhlIG1lc3NhZ2VzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC4gSXQgc2hvdWxkIGJlIGF3YWl0ZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRVcE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHRhZy5yZXBsYWNlKFwiY2FsY2l0ZS1cIiwgXCJcIik7XG4gIHJldHVybiBnZXRNZXNzYWdlQnVuZGxlKGdldFN1cHBvcnRlZExvY2FsZShsYW5nLCBcInQ5blwiKSwgY29tcG9uZW50TmFtZSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBtdXN0IGJlIHNldCB1cCBmb3IgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIGRlZmF1bHQgbWVzc2FnZSBidW5kbGUgaWYgdGhlIGxvY2FsZSBjaGFuZ2VzLlxuICpcbiAqIEl0IGNhbiBiZSBzZXQgdXAgaW4gKiplaXRoZXIqKiBvZiB0aGUgZm9sbG93aW5nIHdheXM6XG4gKlxuICogMS4gY2FsbGVkIGZyb20gYExvY2FsaXplZENvbXBvbmVudGAncyBgb25Mb2NhbGVDaGFuZ2VgIG1ldGhvZCBvclxuICogMi4gY2FsbGVkIGZyb20gYSB3YXRjaGVyIGNvbmZpZ3VyZWQgdG8gd2F0Y2ggYExvY2FsaXplZENvbXBvbmVudGAncyBgZWZmZWN0aXZlTG9jYWxlYCBwcm9wXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGxhbmdcbiAqL1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZyk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogKipOb3RlKio6IHRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgYExvY2FsaXplZENvbXBvbmVudGAncyBgY29ubmVjdExvY2FsaXplZGAgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgdGVhcnMgZG93biBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgbWVyZ2VNZXNzYWdlcyh0aGlzKTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdE1lc3NhZ2VzIGFzIGMsIGRpc2Nvbm5lY3RNZXNzYWdlcyBhcyBkLCBzZXRVcE1lc3NhZ2VzIGFzIHMsIHVwZGF0ZU1lc3NhZ2VzIGFzIHUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==