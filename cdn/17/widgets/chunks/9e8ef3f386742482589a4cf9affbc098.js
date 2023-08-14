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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  async componentWillLoad() {
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    this.disconnectSeparator();
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  componentDidLoad() {
    this.updateAriaValues();
  }
  effectiveLocaleChange() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOWU4ZWYzZjM4Njc0MjQ4MjU4OWE0Y2Y5YWZmYmMwOTguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDaUg7QUFDYTtBQUM4QztBQUNyRjtBQUN2QztBQUMyRTtBQUNoRTtBQUMxQjtBQUNMO0FBQ0Q7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLHNCQUFzQixnREFBZ0QsK0JBQStCLHNDQUFzQyxRQUFRLHNCQUFzQixNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsTUFBTSxrQkFBa0IsVUFBVSxhQUFhLGdCQUFnQixpQkFBaUIsc0JBQXNCLGdCQUFnQixpQ0FBaUMsTUFBTSxrQkFBa0IsYUFBYSxnQkFBZ0IsaUJBQWlCLGNBQWMsbUJBQW1CLDhCQUE4QixnQkFBZ0IsU0FBUyxhQUFh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QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUF3RTtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5REFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3RUFBd0U7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CLElBQUkscURBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRXlGOzs7Ozs7Ozs7Ozs7Ozs7O0FDdER6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1zaGVsbF8zLmVudHJ5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NvbmRpdGlvbmFsU2xvdC05NDZmYjkxMS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9tYXRoLTU4NGZjNjY1LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyByIGFzIHJlZ2lzdGVySW5zdGFuY2UsIGgsIEYgYXMgRnJhZ21lbnQsIGEgYXMgZ2V0RWxlbWVudCwgZiBhcyBmb3JjZVVwZGF0ZSB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50LCBkIGFzIGRpc2Nvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQgfSBmcm9tICcuL2NvbmRpdGlvbmFsU2xvdC05NDZmYjkxMS5qcyc7XG5pbXBvcnQgeyBkIGFzIHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQsIHMgYXMgc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMsIGcgYXMgZ2V0U2xvdHRlZCwgYiBhcyBnZXRFbGVtZW50RGlyLCBpIGFzIGlzUHJpbWFyeVBvaW50ZXJCdXR0b24gfSBmcm9tICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcbmltcG9ydCB7IGMgYXMgY2xhbXAgfSBmcm9tICcuL21hdGgtNTg0ZmM2NjUuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHUgYXMgdXBkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1mYWMxMzM5NC5qcyc7XG5pbXBvcnQgeyBDIGFzIENTU19VVElMSVRZIH0gZnJvbSAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuaW1wb3J0ICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5pbXBvcnQgJy4vZ3VpZC03MTM2OTc0Yi5qcyc7XG5pbXBvcnQgJy4va2V5LThmZjBkMTAxLmpzJztcblxuY29uc3QgQ1NTJDIgPSB7XG4gIG1haW46IFwibWFpblwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIixcbiAgY29udGVudEJlaGluZDogXCJjb250ZW50LS1iZWhpbmRcIixcbiAgZm9vdGVyOiBcImZvb3RlclwiLFxuICBwb3NpdGlvbmVkU2xvdFdyYXBwZXI6IFwicG9zaXRpb25lZC1zbG90LXdyYXBwZXJcIixcbiAgY29udGFpbmVyOiBcImNvbnRhaW5lclwiLFxuICBjb250ZW50QmVoaW5kQ2VudGVyQ29udGVudDogXCJjZW50ZXItY29udGVudFwiXG59O1xuY29uc3QgU0xPVFMkMiA9IHtcbiAgY2VudGVyUm93OiBcImNlbnRlci1yb3dcIixcbiAgcGFuZWxTdGFydDogXCJwYW5lbC1zdGFydFwiLFxuICBwYW5lbEVuZDogXCJwYW5lbC1lbmRcIixcbiAgcGFuZWxUb3A6IFwicGFuZWwtdG9wXCIsXG4gIHBhbmVsQm90dG9tOiBcInBhbmVsLWJvdHRvbVwiLFxuICBoZWFkZXI6IFwiaGVhZGVyXCIsXG4gIGZvb3RlcjogXCJmb290ZXJcIixcbiAgYWxlcnRzOiBcImFsZXJ0c1wiLFxuICBtb2RhbHM6IFwibW9kYWxzXCJcbn07XG5cbmNvbnN0IHNoZWxsQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjBweDtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93OmhpZGRlbjstLWNhbGNpdGUtc2hlbGwtdGlwLXNwYWNpbmc6MjZ2d30ubWFpbntwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7ZmxleDoxIDEgYXV0bztmbGV4LWRpcmVjdGlvbjpyb3c7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47b3ZlcmZsb3c6aGlkZGVufS5jb250ZW50e2Rpc3BsYXk6ZmxleDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTtmbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC13cmFwOm5vd3JhcDtvdmVyZmxvdzphdXRvfS5jb250ZW50IDo6c2xvdHRlZChjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3cpLC5jb250ZW50IDo6c2xvdHRlZChjYWxjaXRlLXBhbmVsKSwuY29udGVudCA6OnNsb3R0ZWQoY2FsY2l0ZS1mbG93KXtmbGV4OjEgMSBhdXRvO2FsaWduLXNlbGY6c3RyZXRjaDttYXgtYmxvY2stc2l6ZTp1bnNldH0uY29udGVudC0tYmVoaW5ke3Bvc2l0aW9uOmFic29sdXRlO2luc2V0OjBweDtib3JkZXItd2lkdGg6MHB4O3otaW5kZXg6Y2FsYyh2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4KSAtIDEpO2Rpc3BsYXk6aW5pdGlhbH06OnNsb3R0ZWQoY2FsY2l0ZS1zaGVsbC1jZW50ZXItcm93KXtpbmxpbmUtc2l6ZTp1bnNldH06OnNsb3R0ZWQoLmhlYWRlciAuaGVhZGluZyl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW5vcm1hbCl9c2xvdFtuYW1lPXBhbmVsLWVuZF06OnNsb3R0ZWQoY2FsY2l0ZS1zaGVsbC1wYW5lbCl7bWFyZ2luLWlubGluZS1zdGFydDphdXRvfTo6c2xvdHRlZChjYWxjaXRlLXBhbmVsKSw6OnNsb3R0ZWQoY2FsY2l0ZS1mbG93KXtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1pbmxpbmUtc3RhcnQtd2lkdGg6MHB4O2JvcmRlci1pbmxpbmUtZW5kLXdpZHRoOjBweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfXNsb3RbbmFtZT1jZW50ZXItcm93XTo6c2xvdHRlZChjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3c6bm90KFtkZXRhY2hlZF0pKSxzbG90W25hbWU9cGFuZWwtdG9wXTo6c2xvdHRlZChjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3c6bm90KFtkZXRhY2hlZF0pKSxzbG90W25hbWU9cGFuZWwtYm90dG9tXTo6c2xvdHRlZChjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3c6bm90KFtkZXRhY2hlZF0pKXtib3JkZXItaW5saW5lLXN0YXJ0LXdpZHRoOjFweDtib3JkZXItaW5saW5lLWVuZC13aWR0aDoxcHg7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTMpfS5jZW50ZXItY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO21pbi1pbmxpbmUtc2l6ZTowfTo6c2xvdHRlZChjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3cpe2ZsZXg6bm9uZTthbGlnbi1zZWxmOnN0cmV0Y2h9OjpzbG90dGVkKGNhbGNpdGUtdGlwLW1hbmFnZXIpe3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC10b2FzdCk7Ym94LXNpemluZzpib3JkZXItYm94fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19OjpzbG90dGVkKGNhbGNpdGUtdGlwLW1hbmFnZXIpe2FuaW1hdGlvbjppbi11cCB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgZWFzZS1pbi1vdXQ7Ym9yZGVyLXJhZGl1czowLjI1cmVtOy0tdHctc2hhZG93OjAgNnB4IDIwcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDEycHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpOy0tdHctc2hhZG93LWNvbG9yZWQ6MCA2cHggMjBweCAtNHB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgNHB4IDEycHggLTJweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtpbnNldC1ibG9jay1lbmQ6MC41cmVtO2luc2V0LWlubGluZTp2YXIoLS1jYWxjaXRlLXNoZWxsLXRpcC1zcGFjaW5nKX1zbG90W25hbWU9Y2VudGVyLXJvd106OnNsb3R0ZWQoY2FsY2l0ZS1zaGVsbC1jZW50ZXItcm93KSxzbG90W25hbWU9cGFuZWwtYm90dG9tXTo6c2xvdHRlZChjYWxjaXRlLXNoZWxsLWNlbnRlci1yb3cpe21hcmdpbi1ibG9jay1zdGFydDphdXRvfXNsb3RbbmFtZT1wYW5lbC10b3BdOjpzbG90dGVkKGNhbGNpdGUtc2hlbGwtY2VudGVyLXJvdyl7bWFyZ2luLWJsb2NrLWVuZDphdXRvfS5wb3NpdGlvbi13cmFwcGVye3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7aW5zZXQ6MH1cIjtcblxuY29uc3QgU2hlbGwgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuaGFuZGxlSGVhZGVyU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNIZWFkZXIgPSAhIXNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVGb290ZXJTbG90Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmhhc0Zvb3RlciA9ICEhc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUFsZXJ0c1Nsb3RDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuaGFzQWxlcnRzID0gISFzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KTtcbiAgICAgIHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzKGV2ZW50KT8ubWFwKChlbCkgPT4ge1xuICAgICAgICBpZiAoZWwubm9kZU5hbWUgPT09IFwiQ0FMQ0lURS1BTEVSVFwiKSB7XG4gICAgICAgICAgZWwuc2xvdHRlZEluU2hlbGwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlTW9kYWxzU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNNb2RhbHMgPSAhIXNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpO1xuICAgICAgc2xvdENoYW5nZUdldEFzc2lnbmVkRWxlbWVudHMoZXZlbnQpPy5tYXAoKGVsKSA9PiB7XG4gICAgICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gXCJDQUxDSVRFLU1PREFMXCIpIHtcbiAgICAgICAgICBlbC5zbG90dGVkSW5TaGVsbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5jb250ZW50QmVoaW5kID0gZmFsc2U7XG4gICAgdGhpcy5oYXNIZWFkZXIgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0Zvb3RlciA9IGZhbHNlO1xuICAgIHRoaXMuaGFzQWxlcnRzID0gZmFsc2U7XG4gICAgdGhpcy5oYXNNb2RhbHMgPSBmYWxzZTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGNvbm5lY3RDb25kaXRpb25hbFNsb3RDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVySGVhZGVyKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGhpZGRlbjogIXRoaXMuaGFzSGVhZGVyIH0sIGgoXCJzbG90XCIsIHsga2V5OiBcImhlYWRlclwiLCBuYW1lOiBTTE9UUyQyLmhlYWRlciwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUhlYWRlclNsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJGb290ZXIoKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLmZvb3RlciwgaGlkZGVuOiAhdGhpcy5oYXNGb290ZXIsIGtleTogXCJmb290ZXJcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTJDIuZm9vdGVyLCBvblNsb3RjaGFuZ2U6IHRoaXMuaGFuZGxlRm9vdGVyU2xvdENoYW5nZSB9KSkpO1xuICB9XG4gIHJlbmRlckFsZXJ0cygpIHtcbiAgICByZXR1cm4gKGgoXCJkaXZcIiwgeyBoaWRkZW46ICF0aGlzLmhhc0FsZXJ0cyB9LCBoKFwic2xvdFwiLCB7IGtleTogXCJhbGVydHNcIiwgbmFtZTogU0xPVFMkMi5hbGVydHMsIG9uU2xvdGNoYW5nZTogdGhpcy5oYW5kbGVBbGVydHNTbG90Q2hhbmdlIH0pKSk7XG4gIH1cbiAgcmVuZGVyTW9kYWxzKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGhpZGRlbjogIXRoaXMuaGFzTW9kYWxzIH0sIGgoXCJzbG90XCIsIHsga2V5OiBcIm1vZGFsc1wiLCBuYW1lOiBTTE9UUyQyLm1vZGFscywgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZU1vZGFsc1Nsb3RDaGFuZ2UgfSkpKTtcbiAgfVxuICByZW5kZXJDb250ZW50KCkge1xuICAgIGNvbnN0IGRlZmF1bHRTbG90Tm9kZSA9IGgoXCJzbG90XCIsIHsga2V5OiBcImRlZmF1bHQtc2xvdFwiIH0pO1xuICAgIGNvbnN0IGRlcHJlY2F0ZWRDZW50ZXJSb3dTbG90Tm9kZSA9IChoKFwic2xvdFwiLCB7IGtleTogXCJjZW50ZXItcm93LXNsb3RcIiwgbmFtZTogU0xPVFMkMi5jZW50ZXJSb3cgfSkpO1xuICAgIGNvbnN0IHBhbmVsQm90dG9tU2xvdE5vZGUgPSBoKFwic2xvdFwiLCB7IGtleTogXCJwYW5lbC1ib3R0b20tc2xvdFwiLCBuYW1lOiBTTE9UUyQyLnBhbmVsQm90dG9tIH0pO1xuICAgIGNvbnN0IHBhbmVsVG9wU2xvdE5vZGUgPSBoKFwic2xvdFwiLCB7IGtleTogXCJwYW5lbC10b3Atc2xvdFwiLCBuYW1lOiBTTE9UUyQyLnBhbmVsVG9wIH0pO1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXJLZXkgPSBcImNvbnRlbnQtY29udGFpbmVyXCI7XG4gICAgY29uc3QgY29udGVudCA9ICEhdGhpcy5jb250ZW50QmVoaW5kXG4gICAgICA/IFtcbiAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgICAgICBbQ1NTJDIuY29udGVudF06IHRydWUsXG4gICAgICAgICAgICBbQ1NTJDIuY29udGVudEJlaGluZF06IHRydWVcbiAgICAgICAgICB9LCBrZXk6IGNvbnRlbnRDb250YWluZXJLZXkgfSwgZGVmYXVsdFNsb3ROb2RlKSxcbiAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMi5jb250ZW50QmVoaW5kQ2VudGVyQ29udGVudCB9LCBwYW5lbFRvcFNsb3ROb2RlLCBwYW5lbEJvdHRvbVNsb3ROb2RlLCBkZXByZWNhdGVkQ2VudGVyUm93U2xvdE5vZGUpXG4gICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MkMi5jb250ZW50LCBrZXk6IGNvbnRlbnRDb250YWluZXJLZXkgfSwgcGFuZWxUb3BTbG90Tm9kZSwgZGVmYXVsdFNsb3ROb2RlLCBwYW5lbEJvdHRvbVNsb3ROb2RlLCBkZXByZWNhdGVkQ2VudGVyUm93U2xvdE5vZGUpXG4gICAgICBdO1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIHJlbmRlck1haW4oKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLm1haW4gfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUyQyLnBhbmVsU3RhcnQgfSksIHRoaXMucmVuZGVyQ29udGVudCgpLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTJDIucGFuZWxFbmQgfSkpKTtcbiAgfVxuICByZW5kZXJQb3NpdGlvbmVkU2xvdHMoKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQyLnBvc2l0aW9uZWRTbG90V3JhcHBlciB9LCB0aGlzLnJlbmRlckFsZXJ0cygpLCB0aGlzLnJlbmRlck1vZGFscygpKSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoaChGcmFnbWVudCwgbnVsbCwgdGhpcy5yZW5kZXJIZWFkZXIoKSwgdGhpcy5yZW5kZXJNYWluKCksIHRoaXMucmVuZGVyRm9vdGVyKCksIHRoaXMucmVuZGVyUG9zaXRpb25lZFNsb3RzKCkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG59O1xuU2hlbGwuc3R5bGUgPSBzaGVsbENzcztcblxuY29uc3QgQ1NTJDEgPSB7XG4gIGFjdGlvbkJhckNvbnRhaW5lcjogXCJhY3Rpb24tYmFyLWNvbnRhaW5lclwiLFxuICBjb250ZW50OiBcImNvbnRlbnRcIlxufTtcbmNvbnN0IFNMT1RTJDEgPSB7XG4gIGFjdGlvbkJhcjogXCJhY3Rpb24tYmFyXCJcbn07XG5cbmNvbnN0IHNoZWxsQ2VudGVyUm93Q3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06aG9zdHtib3gtc2l6aW5nOmJvcmRlci1ib3g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9Omhvc3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCk7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9LmNvbnRlbnR7bWFyZ2luOjBweDtkaXNwbGF5OmZsZXg7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO2ZsZXg6MSAwIDB9LmFjdGlvbi1iYXItY29udGFpbmVye2Rpc3BsYXk6ZmxleH06aG9zdChbZGV0YWNoZWRdKXttYXJnaW4taW5saW5lOjAuNXJlbTttYXJnaW4tYmxvY2s6MC41cmVtIDEuNXJlbX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fTpob3N0KFtkZXRhY2hlZF0pe2FuaW1hdGlvbjppbi11cCB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgZWFzZS1pbi1vdXQ7Ym9yZGVyLXJhZGl1czowLjI1cmVtO2JvcmRlci13aWR0aDowcHg7LS10dy1zaGFkb3c6MCA0cHggOHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA0KTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgNHB4IDhweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgMnB4IDRweCAtMXB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpfTpob3N0KFtwb3NpdGlvbj1lbmRdKXthbGlnbi1zZWxmOmZsZXgtZW5kfTpob3N0KFtwb3NpdGlvbj1zdGFydF0pe2FsaWduLXNlbGY6ZmxleC1zdGFydH06aG9zdChbaGVpZ2h0LXNjYWxlPXNdKXtibG9jay1zaXplOjMzLjMzMzMzMyV9Omhvc3QoW2hlaWdodC1zY2FsZT1tXSl7YmxvY2stc2l6ZTo3MCV9Omhvc3QoW2hlaWdodC1zY2FsZT1sXSl7YmxvY2stc2l6ZToxMDAlfTpob3N0KFtoZWlnaHQtc2NhbGU9bF1bZGV0YWNoZWRdKXtibG9jay1zaXplOmNhbGMoMTAwJSAtIDJyZW0pfTo6c2xvdHRlZChjYWxjaXRlLXBhbmVsKXtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJX06OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tYmFyKSw6OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tYmFyW3Bvc2l0aW9uPWVuZF0pe2JvcmRlci1pbmxpbmUtZW5kOjFweCBzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9XCI7XG5cbmNvbnN0IFNoZWxsQ2VudGVyUm93ID0gY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcihob3N0UmVmKSB7XG4gICAgcmVnaXN0ZXJJbnN0YW5jZSh0aGlzLCBob3N0UmVmKTtcbiAgICB0aGlzLmRldGFjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5oZWlnaHRTY2FsZSA9IFwic1wiO1xuICAgIHRoaXMucG9zaXRpb24gPSBcImVuZFwiO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBSZW5kZXIgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlbCB9ID0gdGhpcztcbiAgICBjb25zdCBjb250ZW50Tm9kZSA9IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQxLmNvbnRlbnQgfSwgaChcInNsb3RcIiwgbnVsbCkpKTtcbiAgICBjb25zdCBhY3Rpb25CYXIgPSBnZXRTbG90dGVkKGVsLCBTTE9UUyQxLmFjdGlvbkJhcik7XG4gICAgY29uc3QgYWN0aW9uQmFyTm9kZSA9IGFjdGlvbkJhciA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUyQxLmFjdGlvbkJhckNvbnRhaW5lciwga2V5OiBcImFjdGlvbi1iYXJcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTJDEuYWN0aW9uQmFyIH0pKSkgOiBudWxsO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW2FjdGlvbkJhck5vZGUsIGNvbnRlbnROb2RlXTtcbiAgICBpZiAoYWN0aW9uQmFyPy5wb3NpdGlvbiA9PT0gXCJlbmRcIikge1xuICAgICAgY2hpbGRyZW4ucmV2ZXJzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gaChGcmFnbWVudCwgbnVsbCwgY2hpbGRyZW4pO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5TaGVsbENlbnRlclJvdy5zdHlsZSA9IHNoZWxsQ2VudGVyUm93Q3NzO1xuXG5jb25zdCBDU1MgPSB7XG4gIGNvbnRhaW5lcjogXCJjb250YWluZXJcIixcbiAgY29udGVudDogXCJjb250ZW50XCIsXG4gIGNvbnRlbnRIZWFkZXI6IFwiY29udGVudF9faGVhZGVyXCIsXG4gIGNvbnRlbnRCb2R5OiBcImNvbnRlbnRfX2JvZHlcIixcbiAgY29udGVudEZsb2F0OiBcImNvbnRlbnQtLWZsb2F0XCIsXG4gIGNvbnRlbnRPdmVybGF5OiBcImNvbnRlbnQtLW92ZXJsYXlcIixcbiAgc2VwYXJhdG9yOiBcInNlcGFyYXRvclwiXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGFjdGlvbkJhcjogXCJhY3Rpb24tYmFyXCIsXG4gIGhlYWRlcjogXCJoZWFkZXJcIlxufTtcblxuY29uc3Qgc2hlbGxQYW5lbENzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2ZsZXg6MCAxIGF1dG87YWxpZ24taXRlbXM6c3RyZXRjaDt6LWluZGV4OnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtei1pbmRleCwgdmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleCkpOy0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1kZXRhY2hlZC1tYXgtaGVpZ2h0OnVuc2V0Oy0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1tYXgtaGVpZ2h0OnVuc2V0Oy0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1zaGFkb3ctYmxvY2stc3RhcnQtaW50ZXJuYWw6MCA0cHggOHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA4KSxcXG4gICAgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA0KTstLWNhbGNpdGUtc2hlbGwtcGFuZWwtc2hhZG93LWJsb2NrLWVuZC1pbnRlcm5hbDowIC00cHggOHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA4KSxcXG4gICAgMCAtMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLXNoYWRvdy1pbmxpbmUtc3RhcnQtaW50ZXJuYWw6NHB4IDAgOHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA4KSxcXG4gICAgMnB4IDAgNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA0KTstLWNhbGNpdGUtc2hlbGwtcGFuZWwtc2hhZG93LWlubGluZS1lbmQtaW50ZXJuYWw6LTRweCAwIDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXFxuICAgIC0ycHggMCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpfS5jYWxjaXRlLS1ydGwuY29udGVudC0tb3ZlcmxheXstLWNhbGNpdGUtc2hlbGwtcGFuZWwtc2hhZG93LWlubGluZS1zdGFydC1pbnRlcm5hbDotNHB4IDAgOHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA4KSxcXG4gICAgLTJweCAwIDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLXNoYWRvdy1pbmxpbmUtZW5kLWludGVybmFsOjRweCAwIDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksXFxuICAgIDJweCAwIDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCl9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF0pe3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC16LWluZGV4LCBjYWxjKHZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgpICsgMSkpfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW2Rpc3BsYXktbW9kZT1vdmVybGF5XSl7ei1pbmRleDp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLXotaW5kZXgsIGNhbGModmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1oZWFkZXIpICsgMSkpfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW3dpZHRoLXNjYWxlPXNdKSAuY29udGVudHstLWNhbGNpdGUtc2hlbGwtcGFuZWwtd2lkdGgtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC13aWR0aCwgMTJ2dyk7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1heC13aWR0aC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1heC13aWR0aCwgMzAwcHgpOy0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1taW4td2lkdGgtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1taW4td2lkdGgsIDE1MHB4KX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXVt3aWR0aC1zY2FsZT1tXSkgLmNvbnRlbnR7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLXdpZHRoLWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtd2lkdGgsIDIwdncpOy0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1tYXgtd2lkdGgtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1tYXgtd2lkdGgsIDQyMHB4KTstLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWluLXdpZHRoLWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWluLXdpZHRoLCAyNDBweCl9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF1bd2lkdGgtc2NhbGU9bF0pIC5jb250ZW50ey0tY2FsY2l0ZS1zaGVsbC1wYW5lbC13aWR0aC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLXdpZHRoLCA0NXZ3KTstLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LXdpZHRoLWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LXdpZHRoLCA2ODBweCk7LS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1pbi13aWR0aC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1pbi13aWR0aCwgMzQwcHgpfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1baGVpZ2h0LXNjYWxlPXNdKSAuY29udGVudHstLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodC1pbnRlcm5hbDp2YXIoXFxuICAgIC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1tYXgtaGVpZ2h0LFxcbiAgICB2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLWRldGFjaGVkLW1heC1oZWlnaHQsIDIwdmgpXFxuICApfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF0pIC5jb250ZW50ey0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1taW4taGVpZ2h0LWludGVybmFsOnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWluLWhlaWdodCwgNXZoKTstLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodC1pbnRlcm5hbDp2YXIoXFxuICAgIC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1tYXgtaGVpZ2h0LFxcbiAgICB2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLWRldGFjaGVkLW1heC1oZWlnaHQsIDMwdmgpXFxuICApfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1baGVpZ2h0LXNjYWxlPWxdKSAuY29udGVudHstLWNhbGNpdGUtc2hlbGwtcGFuZWwtbWF4LWhlaWdodC1pbnRlcm5hbDp2YXIoXFxuICAgIC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1tYXgtaGVpZ2h0LFxcbiAgICB2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLWRldGFjaGVkLW1heC1oZWlnaHQsIDQwdmgpXFxuICApfS5jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87YWxpZ24taXRlbXM6c3RyZXRjaDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpfS5jb250YWluZXIgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXSkgLmNvbnRhaW5lcntmbGV4LWRpcmVjdGlvbjpjb2x1bW59Omhvc3QoOmhvdmVyKSAuc2VwYXJhdG9yOm5vdCg6aG92ZXIpOm5vdCg6Zm9jdXMpLDpob3N0KDpmb2N1cy13aXRoaW4pIC5zZXBhcmF0b3I6bm90KDpob3Zlcik6bm90KDpmb2N1cyl7b3BhY2l0eToxO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9LnNlcGFyYXRvcntwb2ludGVyLWV2ZW50czphdXRvO3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6ZmxleDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O29wYWNpdHk6MDt0cmFuc2l0aW9uOmFsbCB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpIGVhc2UtaW4tb3V0IDBzLCBvdXRsaW5lIDBzLCBvdXRsaW5lLW9mZnNldCAwcztjdXJzb3I6Y29sLXJlc2l6ZTtvdXRsaW5lOm5vbmV9LnNlcGFyYXRvcjpob3ZlcntvcGFjaXR5OjE7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0yKX0uc2VwYXJhdG9yOmZvY3Vze2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCk7b3BhY2l0eToxfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdKSAuc2VwYXJhdG9ye2luc2V0LWJsb2NrOjBweDtibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MC4xMjVyZW07Y3Vyc29yOmNvbC1yZXNpemV9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtwb3NpdGlvbj1zdGFydF0pIC5zZXBhcmF0b3J7aW5zZXQtYmxvY2stZW5kOjBweH06aG9zdChbbGF5b3V0PWhvcml6b250YWxdW3Bvc2l0aW9uPWVuZF0pIC5zZXBhcmF0b3J7aW5zZXQtYmxvY2stc3RhcnQ6MHB4fTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF0pIC5zZXBhcmF0b3J7aW5zZXQtaW5saW5lLWVuZDowcHg7YmxvY2stc2l6ZTowLjEyNXJlbTtpbmxpbmUtc2l6ZToxMDAlO2N1cnNvcjpyb3ctcmVzaXplfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdW3Bvc2l0aW9uPXN0YXJ0XSkgLnNlcGFyYXRvcntpbnNldC1pbmxpbmUtZW5kOi0ycHh9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtwb3NpdGlvbj1zdGFydF0pIC5zZXBhcmF0b3J7aW5zZXQtYmxvY2stZW5kOi0ycHh9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF1bcG9zaXRpb249ZW5kXSkgLnNlcGFyYXRvcntpbnNldC1pbmxpbmUtc3RhcnQ6LTJweH06aG9zdChbbGF5b3V0PWhvcml6b250YWxdW3Bvc2l0aW9uPWVuZF0pIC5zZXBhcmF0b3J7aW5zZXQtYmxvY2stc3RhcnQ6LTJweH06OnNsb3R0ZWQoY2FsY2l0ZS1wYW5lbCksOjpzbG90dGVkKGNhbGNpdGUtZmxvdyl7YmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7ZmxleDoxIDEgYXV0bzttYXgtYmxvY2stc2l6ZTp1bnNldDttYXgtaW5saW5lLXNpemU6dW5zZXR9OjpzbG90dGVkKC5jYWxjaXRlLW1hdGNoLWhlaWdodCl7ZGlzcGxheTpmbGV4O2ZsZXg6MSAxIGF1dG87b3ZlcmZsb3c6aGlkZGVufS5jb250ZW50e3BvaW50ZXItZXZlbnRzOmF1dG87ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LXdyYXA6bm93cmFwO2FsaWduLWl0ZW1zOnN0cmV0Y2g7YWxpZ24tc2VsZjpzdHJldGNoO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1iYWNrZ3JvdW5kKTtwYWRkaW5nOjBweDt0cmFuc2l0aW9uOm1heC1ibG9jay1zaXplIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyksIG1heC1pbmxpbmUtc2l6ZSB2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfTpob3N0KFtsYXlvdXQ9dmVydGljYWxdKSAuY29udGVudHtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLXdpZHRoLWludGVybmFsKTttYXgtaW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1tYXgtd2lkdGgtaW50ZXJuYWwpO21pbi1pbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1pbi13aWR0aC1pbnRlcm5hbCl9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXSkgLmNvbnRlbnR7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLWhlaWdodC1pbnRlcm5hbCk7bWF4LWJsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1tYXgtaGVpZ2h0LWludGVybmFsKTttaW4tYmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLW1pbi1oZWlnaHQtaW50ZXJuYWwpfS5jb250ZW50X19oZWFkZXJ7ZGlzcGxheTpmbGV4O2ZsZXg6MCAxIGF1dG87ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtd3JhcDpub3dyYXA7YWxpZ24taXRlbXM6c3RyZXRjaH0uY29udGVudF9fYm9keXtkaXNwbGF5OmZsZXg7ZmxleDoxIDEgYXV0bztmbGV4LWRpcmVjdGlvbjpjb2x1bW47b3ZlcmZsb3c6aGlkZGVufS5jb250ZW50LS1vdmVybGF5e3Bvc2l0aW9uOmFic29sdXRlOy0tdHctc2hhZG93OjAgNHB4IDhweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7LS10dy1zaGFkb3ctY29sb3JlZDowIDRweCA4cHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDJweCA0cHggLTFweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO2JveC1zaGFkb3c6dmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KX06aG9zdChbbGF5b3V0PXZlcnRpY2FsXSkgLmNvbnRlbnQtLW92ZXJsYXl7aW5zZXQtYmxvY2stc3RhcnQ6MHB4O2Jsb2NrLXNpemU6MTAwJX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSAuY29udGVudC0tb3ZlcmxheXtpbnNldC1pbmxpbmUtc3RhcnQ6MHB4O2lubGluZS1zaXplOjEwMCV9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF1bcG9zaXRpb249c3RhcnRdKSAuY29udGVudC0tb3ZlcmxheXtpbnNldC1pbmxpbmUtc3RhcnQ6MTAwJTtib3gtc2hhZG93OnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtc2hhZG93LWlubGluZS1zdGFydC1pbnRlcm5hbCl9Omhvc3QoW2xheW91dD12ZXJ0aWNhbF1bcG9zaXRpb249ZW5kXSkgLmNvbnRlbnQtLW92ZXJsYXl7aW5zZXQtaW5saW5lLWVuZDoxMDAlO2JveC1zaGFkb3c6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1zaGFkb3ctaW5saW5lLWVuZC1pbnRlcm5hbCl9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtwb3NpdGlvbj1zdGFydF0pIC5jb250ZW50LS1vdmVybGF5e2luc2V0LWJsb2NrLXN0YXJ0OjEwMCU7Ym94LXNoYWRvdzp2YXIoLS1jYWxjaXRlLXNoZWxsLXBhbmVsLXNoYWRvdy1ibG9jay1zdGFydC1pbnRlcm5hbCl9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtwb3NpdGlvbj1lbmRdKSAuY29udGVudC0tb3ZlcmxheXtpbnNldC1ibG9jay1lbmQ6MTAwJTtib3gtc2hhZG93OnZhcigtLWNhbGNpdGUtc2hlbGwtcGFuZWwtc2hhZG93LWJsb2NrLWVuZC1pbnRlcm5hbCl9LmNvbnRlbnQtLWZsb2F0e21hcmdpbi1pbmxpbmU6MC41cmVtO21hcmdpbi1ibG9jazowLjVyZW0gYXV0bztibG9jay1zaXplOmF1dG87b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1yYWRpdXM6MC4yNXJlbTstLXR3LXNoYWRvdzowIDRweCA4cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDQpOy0tdHctc2hhZG93LWNvbG9yZWQ6MCA0cHggOHB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCAycHggNHB4IC0xcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7bWF4LWJsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1zaGVsbC1wYW5lbC1tYXgtaGVpZ2h0LWludGVybmFsLCBjYWxjKDEwMCUgLSAxcmVtKSl9LmNvbnRlbnQtLWZsb2F0IDo6c2xvdHRlZChjYWxjaXRlLXBhbmVsKSwuY29udGVudC0tZmxvYXQgOjpzbG90dGVkKGNhbGNpdGUtZmxvdyl7bWF4LWJsb2NrLXNpemU6dW5zZXR9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXSkgLmNvbnRlbnQtLWZsb2F0e21hcmdpbi1ibG9jazowLjVyZW19Omhvc3QoW3Bvc2l0aW9uPXN0YXJ0XSkgLmNvbnRlbnQtLWZsb2F0IDo6c2xvdHRlZChjYWxjaXRlLXBhbmVsKSw6aG9zdChbcG9zaXRpb249c3RhcnRdKSAuY29udGVudC0tZmxvYXQgOjpzbG90dGVkKGNhbGNpdGUtZmxvdyksOmhvc3QoW3Bvc2l0aW9uPWVuZF0pIC5jb250ZW50LS1mbG9hdCA6OnNsb3R0ZWQoY2FsY2l0ZS1wYW5lbCksOmhvc3QoW3Bvc2l0aW9uPWVuZF0pIC5jb250ZW50LS1mbG9hdCA6OnNsb3R0ZWQoY2FsY2l0ZS1mbG93KXtib3JkZXItc3R5bGU6bm9uZX0uY29udGVudFtoaWRkZW5de2Rpc3BsYXk6bm9uZX1zbG90W25hbWU9YWN0aW9uLWJhcl06OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tYmFyKSwuY29udGVudCA6OnNsb3R0ZWQoY2FsY2l0ZS1mbG93KSwuY29udGVudCA6OnNsb3R0ZWQoY2FsY2l0ZS1wYW5lbDpub3QoW2Nsb3NlZF0pKXtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyl9Omhvc3QoW3Bvc2l0aW9uPXN0YXJ0XSkgc2xvdFtuYW1lPWFjdGlvbi1iYXJdOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWJhciksOmhvc3QoW3Bvc2l0aW9uPXN0YXJ0XSkgLmNvbnRlbnQgOjpzbG90dGVkKGNhbGNpdGUtZmxvdyksOmhvc3QoW3Bvc2l0aW9uPXN0YXJ0XSkgLmNvbnRlbnQgOjpzbG90dGVkKGNhbGNpdGUtcGFuZWwpe2JvcmRlci1pbmxpbmUtc3RhcnQ6bm9uZX06aG9zdChbcG9zaXRpb249ZW5kXSkgc2xvdFtuYW1lPWFjdGlvbi1iYXJdOjpzbG90dGVkKGNhbGNpdGUtYWN0aW9uLWJhciksOmhvc3QoW3Bvc2l0aW9uPWVuZF0pIC5jb250ZW50IDo6c2xvdHRlZChjYWxjaXRlLWZsb3cpLDpob3N0KFtwb3NpdGlvbj1lbmRdKSAuY29udGVudCA6OnNsb3R0ZWQoY2FsY2l0ZS1wYW5lbCl7Ym9yZGVyLWlubGluZS1lbmQ6bm9uZX06aG9zdChbbGF5b3V0PWhvcml6b250YWxdKSBzbG90W25hbWU9YWN0aW9uLWJhcl06OnNsb3R0ZWQoY2FsY2l0ZS1hY3Rpb24tYmFyKXtib3JkZXItaW5saW5lOjB9Omhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtwb3NpdGlvbj1zdGFydF0pIC5jb250ZW50IDo6c2xvdHRlZChjYWxjaXRlLWZsb3cpLDpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bcG9zaXRpb249c3RhcnRdKSAuY29udGVudCA6OnNsb3R0ZWQoY2FsY2l0ZS1wYW5lbCl7Ym9yZGVyLWlubGluZTowO2JvcmRlci1ibG9jay1zdGFydDowfTpob3N0KFtsYXlvdXQ9aG9yaXpvbnRhbF1bcG9zaXRpb249ZW5kXSkgLmNvbnRlbnQgOjpzbG90dGVkKGNhbGNpdGUtZmxvdyksOmhvc3QoW2xheW91dD1ob3Jpem9udGFsXVtwb3NpdGlvbj1lbmRdKSAuY29udGVudCA6OnNsb3R0ZWQoY2FsY2l0ZS1wYW5lbCl7Ym9yZGVyLWlubGluZTowO2JvcmRlci1ibG9jay1lbmQ6MH1cIjtcblxuY29uc3QgU2hlbGxQYW5lbCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5pbml0aWFsQ29udGVudFdpZHRoID0gbnVsbDtcbiAgICB0aGlzLmluaXRpYWxDb250ZW50SGVpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLmluaXRpYWxDbGllbnRYID0gbnVsbDtcbiAgICB0aGlzLmluaXRpYWxDbGllbnRZID0gbnVsbDtcbiAgICB0aGlzLmNvbnRlbnRXaWR0aE1heCA9IG51bGw7XG4gICAgdGhpcy5jb250ZW50V2lkdGhNaW4gPSBudWxsO1xuICAgIHRoaXMuY29udGVudEhlaWdodE1heCA9IG51bGw7XG4gICAgdGhpcy5jb250ZW50SGVpZ2h0TWluID0gbnVsbDtcbiAgICB0aGlzLnN0ZXAgPSAxO1xuICAgIHRoaXMuc3RlcE11bHRpcGxpZXIgPSAxMDtcbiAgICB0aGlzLmFjdGlvbkJhcnMgPSBbXTtcbiAgICB0aGlzLnN0b3JlQ29udGVudEVsID0gKGNvbnRlbnRFbCkgPT4ge1xuICAgICAgdGhpcy5jb250ZW50RWwgPSBjb250ZW50RWw7XG4gICAgfTtcbiAgICB0aGlzLmdldEtleUFkanVzdGVkU2l6ZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgY29uc3QgeyBlbCwgc3RlcCwgc3RlcE11bHRpcGxpZXIsIGxheW91dCwgY29udGVudFdpZHRoTWluLCBjb250ZW50V2lkdGhNYXgsIGluaXRpYWxDb250ZW50V2lkdGgsIGluaXRpYWxDb250ZW50SGVpZ2h0LCBjb250ZW50SGVpZ2h0TWluLCBjb250ZW50SGVpZ2h0TWF4LCBwb3NpdGlvbiB9ID0gdGhpcztcbiAgICAgIGNvbnN0IG11bHRpcGxpZWRTdGVwID0gc3RlcCAqIHN0ZXBNdWx0aXBsaWVyO1xuICAgICAgY29uc3QgTU9WRU1FTlRfS0VZUyA9IFtcbiAgICAgICAgXCJBcnJvd1VwXCIsXG4gICAgICAgIFwiQXJyb3dEb3duXCIsXG4gICAgICAgIFwiQXJyb3dMZWZ0XCIsXG4gICAgICAgIFwiQXJyb3dSaWdodFwiLFxuICAgICAgICBcIkhvbWVcIixcbiAgICAgICAgXCJFbmRcIixcbiAgICAgICAgXCJQYWdlVXBcIixcbiAgICAgICAgXCJQYWdlRG93blwiXG4gICAgICBdO1xuICAgICAgaWYgKE1PVkVNRU5UX0tFWVMuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRpciA9IGdldEVsZW1lbnREaXIoZWwpO1xuICAgICAgY29uc3QgaG9yaXpvbnRhbEtleXMgPSBbXCJBcnJvd0xlZnRcIiwgXCJBcnJvd1JpZ2h0XCJdO1xuICAgICAgY29uc3QgdmVydGljYWxLZXlzID0gW1wiQXJyb3dEb3duXCIsIFwiQXJyb3dVcFwiXTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbkZhY3RvciA9IGRpciA9PT0gXCJydGxcIiAmJiBob3Jpem9udGFsS2V5cy5pbmNsdWRlcyhrZXkpID8gLTEgOiAxO1xuICAgICAgY29uc3QgaW5jcmVhc2VLZXlzID0gbGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgICA/IHBvc2l0aW9uID09PSBcImVuZFwiXG4gICAgICAgICAgPyBrZXkgPT09IHZlcnRpY2FsS2V5c1sxXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzBdXG4gICAgICAgICAgOiBrZXkgPT09IHZlcnRpY2FsS2V5c1swXSB8fCBrZXkgPT09IGhvcml6b250YWxLZXlzWzFdXG4gICAgICAgIDoga2V5ID09PSB2ZXJ0aWNhbEtleXNbMV0gfHxcbiAgICAgICAgICAocG9zaXRpb24gPT09IFwiZW5kXCIgPyBrZXkgPT09IGhvcml6b250YWxLZXlzWzBdIDoga2V5ID09PSBob3Jpem9udGFsS2V5c1sxXSk7XG4gICAgICBpZiAoaW5jcmVhc2VLZXlzKSB7XG4gICAgICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGV2ZW50LnNoaWZ0S2V5ID8gbXVsdGlwbGllZFN0ZXAgOiBzdGVwO1xuICAgICAgICByZXR1cm4gbGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgICAgID8gaW5pdGlhbENvbnRlbnRIZWlnaHQgKyBkaXJlY3Rpb25GYWN0b3IgKiBzdGVwVmFsdWVcbiAgICAgICAgICA6IGluaXRpYWxDb250ZW50V2lkdGggKyBkaXJlY3Rpb25GYWN0b3IgKiBzdGVwVmFsdWU7XG4gICAgICB9XG4gICAgICBjb25zdCBkZWNyZWFzZUtleXMgPSBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgID8gcG9zaXRpb24gPT09IFwiZW5kXCJcbiAgICAgICAgICA/IGtleSA9PT0gdmVydGljYWxLZXlzWzBdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMF1cbiAgICAgICAgICA6IGtleSA9PT0gdmVydGljYWxLZXlzWzFdIHx8IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMV1cbiAgICAgICAgOiBrZXkgPT09IHZlcnRpY2FsS2V5c1swXSB8fFxuICAgICAgICAgIChwb3NpdGlvbiA9PT0gXCJlbmRcIiA/IGtleSA9PT0gaG9yaXpvbnRhbEtleXNbMV0gOiBrZXkgPT09IGhvcml6b250YWxLZXlzWzBdKTtcbiAgICAgIGlmIChkZWNyZWFzZUtleXMpIHtcbiAgICAgICAgY29uc3Qgc3RlcFZhbHVlID0gZXZlbnQuc2hpZnRLZXkgPyBtdWx0aXBsaWVkU3RlcCA6IHN0ZXA7XG4gICAgICAgIHJldHVybiBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgPyBpbml0aWFsQ29udGVudEhlaWdodCAtIGRpcmVjdGlvbkZhY3RvciAqIHN0ZXBWYWx1ZVxuICAgICAgICAgIDogaW5pdGlhbENvbnRlbnRXaWR0aCAtIGRpcmVjdGlvbkZhY3RvciAqIHN0ZXBWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiSG9tZVwiICYmIGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgJiYgdHlwZW9mIGNvbnRlbnRIZWlnaHRNaW4gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRIZWlnaHRNaW47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkhvbWVcIiAmJiBsYXlvdXQgPT09IFwidmVydGljYWxcIiAmJiB0eXBlb2YgY29udGVudFdpZHRoTWluID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50V2lkdGhNaW47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkVuZFwiICYmIGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgJiYgdHlwZW9mIGNvbnRlbnRIZWlnaHRNYXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRIZWlnaHRNYXg7XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkVuZFwiICYmIGxheW91dCA9PT0gXCJ2ZXJ0aWNhbFwiICYmIHR5cGVvZiBjb250ZW50V2lkdGhNYXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRXaWR0aE1heDtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09IFwiUGFnZURvd25cIikge1xuICAgICAgICByZXR1cm4gbGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgICAgID8gaW5pdGlhbENvbnRlbnRIZWlnaHQgLSBtdWx0aXBsaWVkU3RlcFxuICAgICAgICAgIDogaW5pdGlhbENvbnRlbnRXaWR0aCAtIG11bHRpcGxpZWRTdGVwO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gXCJQYWdlVXBcIikge1xuICAgICAgICByZXR1cm4gbGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgICAgID8gaW5pdGlhbENvbnRlbnRIZWlnaHQgKyBtdWx0aXBsaWVkU3RlcFxuICAgICAgICAgIDogaW5pdGlhbENvbnRlbnRXaWR0aCArIG11bHRpcGxpZWRTdGVwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICB0aGlzLmluaXRpYWxLZXlkb3duV2lkdGggPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2V0SW5pdGlhbENvbnRlbnRXaWR0aCgpO1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldEtleUFkanVzdGVkU2l6ZShldmVudCk7XG4gICAgICBpZiAodHlwZW9mIHdpZHRoID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRoaXMuc2V0Q29udGVudFdpZHRoKHdpZHRoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaW5pdGlhbEtleWRvd25IZWlnaHQgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2V0SW5pdGlhbENvbnRlbnRIZWlnaHQoKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0S2V5QWRqdXN0ZWRTaXplKGV2ZW50KTtcbiAgICAgIGlmICh0eXBlb2YgaGVpZ2h0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRoaXMuc2V0Q29udGVudEhlaWdodChoZWlnaHQpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXBhcmF0b3JLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmxheW91dCA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgPyB0aGlzLmluaXRpYWxLZXlkb3duSGVpZ2h0KGV2ZW50KVxuICAgICAgICA6IHRoaXMuaW5pdGlhbEtleWRvd25XaWR0aChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLnNlcGFyYXRvclBvaW50ZXJNb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgeyBlbCwgbGF5b3V0LCBpbml0aWFsQ29udGVudFdpZHRoLCBpbml0aWFsQ29udGVudEhlaWdodCwgcG9zaXRpb24sIGluaXRpYWxDbGllbnRYLCBpbml0aWFsQ2xpZW50WSB9ID0gdGhpcztcbiAgICAgIGNvbnN0IG9mZnNldCA9IGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgPyBldmVudC5jbGllbnRZIC0gaW5pdGlhbENsaWVudFkgOiBldmVudC5jbGllbnRYIC0gaW5pdGlhbENsaWVudFg7XG4gICAgICBjb25zdCBhZGp1c3RtZW50RGlyZWN0aW9uID0gbGF5b3V0ID09PSBcInZlcnRpY2FsXCIgJiYgZ2V0RWxlbWVudERpcihlbCkgPT09IFwicnRsXCIgPyAtMSA6IDE7XG4gICAgICBjb25zdCBhZGp1c3RlZE9mZnNldCA9IGxheW91dCA9PT0gXCJob3Jpem9udGFsXCJcbiAgICAgICAgPyBwb3NpdGlvbiA9PT0gXCJlbmRcIlxuICAgICAgICAgID8gLWFkanVzdG1lbnREaXJlY3Rpb24gKiBvZmZzZXRcbiAgICAgICAgICA6IGFkanVzdG1lbnREaXJlY3Rpb24gKiBvZmZzZXRcbiAgICAgICAgOiBwb3NpdGlvbiA9PT0gXCJlbmRcIlxuICAgICAgICAgID8gLWFkanVzdG1lbnREaXJlY3Rpb24gKiBvZmZzZXRcbiAgICAgICAgICA6IGFkanVzdG1lbnREaXJlY3Rpb24gKiBvZmZzZXQ7XG4gICAgICBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgID8gdGhpcy5zZXRDb250ZW50SGVpZ2h0KGluaXRpYWxDb250ZW50SGVpZ2h0ICsgYWRqdXN0ZWRPZmZzZXQpXG4gICAgICAgIDogdGhpcy5zZXRDb250ZW50V2lkdGgoaW5pdGlhbENvbnRlbnRXaWR0aCArIGFkanVzdGVkT2Zmc2V0KTtcbiAgICB9O1xuICAgIHRoaXMuc2VwYXJhdG9yUG9pbnRlclVwID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIHRoaXMuc2VwYXJhdG9yUG9pbnRlclVwKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCB0aGlzLnNlcGFyYXRvclBvaW50ZXJNb3ZlKTtcbiAgICB9O1xuICAgIHRoaXMuc2V0SW5pdGlhbENvbnRlbnRIZWlnaHQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmluaXRpYWxDb250ZW50SGVpZ2h0ID0gdGhpcy5jb250ZW50RWw/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9O1xuICAgIHRoaXMuc2V0SW5pdGlhbENvbnRlbnRXaWR0aCA9ICgpID0+IHtcbiAgICAgIHRoaXMuaW5pdGlhbENvbnRlbnRXaWR0aCA9IHRoaXMuY29udGVudEVsPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICB9O1xuICAgIHRoaXMuc2VwYXJhdG9yUG9pbnRlckRvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNQcmltYXJ5UG9pbnRlckJ1dHRvbihldmVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHsgc2VwYXJhdG9yRWwgfSA9IHRoaXM7XG4gICAgICBzZXBhcmF0b3JFbCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBzZXBhcmF0b3JFbCAmJiBzZXBhcmF0b3JFbC5mb2N1cygpO1xuICAgICAgaWYgKHRoaXMubGF5b3V0ID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICB0aGlzLnNldEluaXRpYWxDb250ZW50SGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbENsaWVudFkgPSBldmVudC5jbGllbnRZO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0SW5pdGlhbENvbnRlbnRXaWR0aCgpO1xuICAgICAgICB0aGlzLmluaXRpYWxDbGllbnRYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgdGhpcy5zZXBhcmF0b3JQb2ludGVyVXApO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHRoaXMuc2VwYXJhdG9yUG9pbnRlck1vdmUpO1xuICAgIH07XG4gICAgdGhpcy5jb25uZWN0U2VwYXJhdG9yID0gKHNlcGFyYXRvckVsKSA9PiB7XG4gICAgICB0aGlzLmRpc2Nvbm5lY3RTZXBhcmF0b3IoKTtcbiAgICAgIHRoaXMuc2VwYXJhdG9yRWwgPSBzZXBhcmF0b3JFbDtcbiAgICAgIHNlcGFyYXRvckVsPy5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgdGhpcy5zZXBhcmF0b3JQb2ludGVyRG93bik7XG4gICAgfTtcbiAgICB0aGlzLmRpc2Nvbm5lY3RTZXBhcmF0b3IgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNlcGFyYXRvckVsPy5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgdGhpcy5zZXBhcmF0b3JQb2ludGVyRG93bik7XG4gICAgfTtcbiAgICB0aGlzLnNldEFjdGlvbkJhcnNMYXlvdXQgPSAoYWN0aW9uQmFycykgPT4ge1xuICAgICAgYWN0aW9uQmFycy5mb3JFYWNoKChhY3Rpb25CYXIpID0+IChhY3Rpb25CYXIubGF5b3V0ID0gdGhpcy5sYXlvdXQpKTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQWN0aW9uQmFyU2xvdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uQmFycyA9IHNsb3RDaGFuZ2VHZXRBc3NpZ25lZEVsZW1lbnRzKGV2ZW50KS5maWx0ZXIoKGVsKSA9PiBlbD8ubWF0Y2hlcyhcImNhbGNpdGUtYWN0aW9uLWJhclwiKSk7XG4gICAgICB0aGlzLmFjdGlvbkJhcnMgPSBhY3Rpb25CYXJzO1xuICAgICAgdGhpcy5zZXRBY3Rpb25CYXJzTGF5b3V0KGFjdGlvbkJhcnMpO1xuICAgIH07XG4gICAgdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRldGFjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwbGF5TW9kZSA9IFwiZG9ja1wiO1xuICAgIHRoaXMuZGV0YWNoZWRIZWlnaHRTY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhlaWdodFNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMud2lkdGhTY2FsZSA9IFwibVwiO1xuICAgIHRoaXMubGF5b3V0ID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIHRoaXMucG9zaXRpb24gPSBcInN0YXJ0XCI7XG4gICAgdGhpcy5yZXNpemFibGUgPSBmYWxzZTtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbnRlbnRXaWR0aCA9IG51bGw7XG4gICAgdGhpcy5jb250ZW50SGVpZ2h0ID0gbnVsbDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gIH1cbiAgaGFuZGxlRGV0YWNoZWQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZGlzcGxheU1vZGUgPSBcImZsb2F0XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuZGlzcGxheU1vZGUgPT09IFwiZmxvYXRcIikge1xuICAgICAgdGhpcy5kaXNwbGF5TW9kZSA9IFwiZG9ja1wiO1xuICAgIH1cbiAgfVxuICBoYW5kbGVEaXNwbGF5TW9kZSh2YWx1ZSkge1xuICAgIHRoaXMuZGV0YWNoZWQgPSB2YWx1ZSA9PT0gXCJmbG9hdFwiO1xuICB9XG4gIGhhbmRsZURldGFjaGVkSGVpZ2h0U2NhbGUodmFsdWUpIHtcbiAgICB0aGlzLmhlaWdodFNjYWxlID0gdmFsdWU7XG4gIH1cbiAgaGFuZGxlSGVpZ2h0U2NhbGUodmFsdWUpIHtcbiAgICB0aGlzLmRldGFjaGVkSGVpZ2h0U2NhbGUgPSB2YWx1ZTtcbiAgfVxuICBsYXlvdXRIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0QWN0aW9uQmFyc0xheW91dCh0aGlzLmFjdGlvbkJhcnMpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLmRpc2Nvbm5lY3RTZXBhcmF0b3IoKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHRoaXMudXBkYXRlQXJpYVZhbHVlcygpO1xuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlckhlYWRlcigpIHtcbiAgICBjb25zdCB7IGVsIH0gPSB0aGlzO1xuICAgIGNvbnN0IGhhc0hlYWRlciA9IGdldFNsb3R0ZWQoZWwsIFNMT1RTLmhlYWRlcik7XG4gICAgcmV0dXJuIGhhc0hlYWRlciA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250ZW50SGVhZGVyLCBrZXk6IFwiaGVhZGVyXCIgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5oZWFkZXIgfSkpKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sbGFwc2VkLCBwb3NpdGlvbiwgaW5pdGlhbENvbnRlbnRXaWR0aCwgaW5pdGlhbENvbnRlbnRIZWlnaHQsIGNvbnRlbnRXaWR0aCwgY29udGVudFdpZHRoTWF4LCBjb250ZW50V2lkdGhNaW4sIGNvbnRlbnRIZWlnaHQsIGNvbnRlbnRIZWlnaHRNYXgsIGNvbnRlbnRIZWlnaHRNaW4sIHJlc2l6YWJsZSwgbGF5b3V0LCBkaXNwbGF5TW9kZSB9ID0gdGhpcztcbiAgICBjb25zdCBkaXIgPSBnZXRFbGVtZW50RGlyKHRoaXMuZWwpO1xuICAgIGNvbnN0IGFsbG93UmVzaXppbmcgPSBkaXNwbGF5TW9kZSAhPT0gXCJmbG9hdFwiICYmIHJlc2l6YWJsZTtcbiAgICBjb25zdCBzdHlsZSA9IGFsbG93UmVzaXppbmdcbiAgICAgID8gbGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgICA/IGNvbnRlbnRIZWlnaHRcbiAgICAgICAgICA/IHsgaGVpZ2h0OiBgJHtjb250ZW50SGVpZ2h0fXB4YCB9XG4gICAgICAgICAgOiBudWxsXG4gICAgICAgIDogY29udGVudFdpZHRoXG4gICAgICAgICAgPyB7IHdpZHRoOiBgJHtjb250ZW50V2lkdGh9cHhgIH1cbiAgICAgICAgICA6IG51bGxcbiAgICAgIDogbnVsbDtcbiAgICBjb25zdCBzZXBhcmF0b3JOb2RlID0gIWNvbGxhcHNlZCAmJiBhbGxvd1Jlc2l6aW5nID8gKGgoXCJkaXZcIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5yZXNpemUsIFwiYXJpYS1vcmllbnRhdGlvblwiOiBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiBsYXlvdXQgPT0gXCJob3Jpem9udGFsXCIgPyBjb250ZW50SGVpZ2h0TWF4IDogY29udGVudFdpZHRoTWF4LCBcImFyaWEtdmFsdWVtaW5cIjogbGF5b3V0ID09IFwiaG9yaXpvbnRhbFwiID8gY29udGVudEhlaWdodE1pbiA6IGNvbnRlbnRXaWR0aE1pbiwgXCJhcmlhLXZhbHVlbm93XCI6IGxheW91dCA9PSBcImhvcml6b250YWxcIlxuICAgICAgICA/IGNvbnRlbnRIZWlnaHQgPz8gaW5pdGlhbENvbnRlbnRIZWlnaHRcbiAgICAgICAgOiBjb250ZW50V2lkdGggPz8gaW5pdGlhbENvbnRlbnRXaWR0aCwgY2xhc3M6IENTUy5zZXBhcmF0b3IsIGtleTogXCJzZXBhcmF0b3JcIiwgb25LZXlEb3duOiB0aGlzLnNlcGFyYXRvcktleURvd24sIHJvbGU6IFwic2VwYXJhdG9yXCIsIHRhYkluZGV4OiAwLCBcInRvdWNoLWFjdGlvblwiOiBcIm5vbmVcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLmNvbm5lY3RTZXBhcmF0b3IgfSkpIDogbnVsbDtcbiAgICBjb25zdCBnZXRBbmltYXRpb25EaXIgPSAoKSA9PiB7XG4gICAgICBpZiAobGF5b3V0ID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICByZXR1cm4gcG9zaXRpb24gPT09IFwic3RhcnRcIlxuICAgICAgICAgID8gQ1NTX1VUSUxJVFkuY2FsY2l0ZUFuaW1hdGVJbkRvd25cbiAgICAgICAgICA6IENTU19VVElMSVRZLmNhbGNpdGVBbmltYXRlSW5VcDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpc1N0YXJ0ID0gKGRpciA9PT0gXCJsdHJcIiAmJiBwb3NpdGlvbiA9PT0gXCJlbmRcIikgfHwgKGRpciA9PT0gXCJydGxcIiAmJiBwb3NpdGlvbiA9PT0gXCJzdGFydFwiKTtcbiAgICAgICAgcmV0dXJuIGlzU3RhcnQgPyBDU1NfVVRJTElUWS5jYWxjaXRlQW5pbWF0ZUluTGVmdCA6IENTU19VVElMSVRZLmNhbGNpdGVBbmltYXRlSW5SaWdodDtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGNvbnRlbnROb2RlID0gKGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTX1VUSUxJVFkucnRsXTogZGlyID09PSBcInJ0bFwiLFxuICAgICAgICBbQ1NTLmNvbnRlbnRdOiB0cnVlLFxuICAgICAgICBbQ1NTLmNvbnRlbnRPdmVybGF5XTogZGlzcGxheU1vZGUgPT09IFwib3ZlcmxheVwiLFxuICAgICAgICBbQ1NTLmNvbnRlbnRGbG9hdF06IGRpc3BsYXlNb2RlID09PSBcImZsb2F0XCIsXG4gICAgICAgIFtDU1NfVVRJTElUWS5jYWxjaXRlQW5pbWF0ZV06IGRpc3BsYXlNb2RlID09PSBcIm92ZXJsYXlcIixcbiAgICAgICAgW2dldEFuaW1hdGlvbkRpcigpXTogZGlzcGxheU1vZGUgPT09IFwib3ZlcmxheVwiXG4gICAgICB9LCBoaWRkZW46IGNvbGxhcHNlZCwga2V5OiBcImNvbnRlbnRcIiwgc3R5bGU6IHN0eWxlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc3RvcmVDb250ZW50RWwgfSwgdGhpcy5yZW5kZXJIZWFkZXIoKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudEJvZHkgfSwgaChcInNsb3RcIiwgbnVsbCkpLCBzZXBhcmF0b3JOb2RlKSk7XG4gICAgY29uc3QgYWN0aW9uQmFyTm9kZSA9IChoKFwic2xvdFwiLCB7IGtleTogXCJhY3Rpb24tYmFyXCIsIG5hbWU6IFNMT1RTLmFjdGlvbkJhciwgb25TbG90Y2hhbmdlOiB0aGlzLmhhbmRsZUFjdGlvbkJhclNsb3RDaGFuZ2UgfSkpO1xuICAgIGNvbnN0IG1haW5Ob2RlcyA9IFthY3Rpb25CYXJOb2RlLCBjb250ZW50Tm9kZV07XG4gICAgaWYgKHBvc2l0aW9uID09PSBcImVuZFwiKSB7XG4gICAgICBtYWluTm9kZXMucmV2ZXJzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gaChcImRpdlwiLCB7IGNsYXNzOiB7IFtDU1MuY29udGFpbmVyXTogdHJ1ZSB9IH0sIG1haW5Ob2Rlcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRDb250ZW50V2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRXaWR0aE1heCwgY29udGVudFdpZHRoTWluIH0gPSB0aGlzO1xuICAgIGNvbnN0IHJvdW5kZWRXaWR0aCA9IE1hdGgucm91bmQod2lkdGgpO1xuICAgIHRoaXMuY29udGVudFdpZHRoID1cbiAgICAgIHR5cGVvZiBjb250ZW50V2lkdGhNYXggPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGNvbnRlbnRXaWR0aE1pbiA9PT0gXCJudW1iZXJcIlxuICAgICAgICA/IGNsYW1wKHJvdW5kZWRXaWR0aCwgY29udGVudFdpZHRoTWluLCBjb250ZW50V2lkdGhNYXgpXG4gICAgICAgIDogcm91bmRlZFdpZHRoO1xuICB9XG4gIHVwZGF0ZUFyaWFWYWx1ZXMoKSB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGNvbnRlbnRFbCAmJiBnZXRDb21wdXRlZFN0eWxlKGNvbnRlbnRFbCk7XG4gICAgaWYgKCFjb21wdXRlZFN0eWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubGF5b3V0ID09PSBcImhvcml6b250YWxcIlxuICAgICAgPyB0aGlzLnVwZGF0ZUhlaWdodHMoY29tcHV0ZWRTdHlsZSlcbiAgICAgIDogdGhpcy51cGRhdGVXaWR0aHMoY29tcHV0ZWRTdHlsZSk7XG4gICAgZm9yY2VVcGRhdGUodGhpcyk7XG4gIH1cbiAgc2V0Q29udGVudEhlaWdodChoZWlnaHQpIHtcbiAgICBjb25zdCB7IGNvbnRlbnRIZWlnaHRNYXgsIGNvbnRlbnRIZWlnaHRNaW4gfSA9IHRoaXM7XG4gICAgY29uc3Qgcm91bmRlZFdpZHRoID0gTWF0aC5yb3VuZChoZWlnaHQpO1xuICAgIHRoaXMuY29udGVudEhlaWdodCA9XG4gICAgICB0eXBlb2YgY29udGVudEhlaWdodE1heCA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgY29udGVudEhlaWdodE1pbiA9PT0gXCJudW1iZXJcIlxuICAgICAgICA/IGNsYW1wKHJvdW5kZWRXaWR0aCwgY29udGVudEhlaWdodE1pbiwgY29udGVudEhlaWdodE1heClcbiAgICAgICAgOiByb3VuZGVkV2lkdGg7XG4gIH1cbiAgdXBkYXRlV2lkdGhzKGNvbXB1dGVkU3R5bGUpIHtcbiAgICBjb25zdCBtYXggPSBwYXJzZUludChjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJtYXgtd2lkdGhcIiksIDEwKTtcbiAgICBjb25zdCBtaW4gPSBwYXJzZUludChjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJtaW4td2lkdGhcIiksIDEwKTtcbiAgICBjb25zdCB2YWx1ZU5vdyA9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIndpZHRoXCIpLCAxMCk7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZU5vdyA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4odmFsdWVOb3cpKSB7XG4gICAgICB0aGlzLmluaXRpYWxDb250ZW50V2lkdGggPSB2YWx1ZU5vdztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXggPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKG1heCkpIHtcbiAgICAgIHRoaXMuY29udGVudFdpZHRoTWF4ID0gbWF4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1pbiA9PT0gXCJudW1iZXJcIiAmJiAhaXNOYU4obWluKSkge1xuICAgICAgdGhpcy5jb250ZW50V2lkdGhNaW4gPSBtaW47XG4gICAgfVxuICB9XG4gIHVwZGF0ZUhlaWdodHMoY29tcHV0ZWRTdHlsZSkge1xuICAgIGNvbnN0IG1heCA9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIm1heC1oZWlnaHRcIiksIDEwKTtcbiAgICBjb25zdCBtaW4gPSBwYXJzZUludChjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJtaW4taGVpZ2h0XCIpLCAxMCk7XG4gICAgY29uc3QgdmFsdWVOb3cgPSBwYXJzZUludChjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJoZWlnaHRcIiksIDEwKTtcbiAgICBpZiAodHlwZW9mIHZhbHVlTm93ID09PSBcIm51bWJlclwiICYmICFpc05hTih2YWx1ZU5vdykpIHtcbiAgICAgIHRoaXMuaW5pdGlhbENvbnRlbnRIZWlnaHQgPSB2YWx1ZU5vdztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXggPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKG1heCkpIHtcbiAgICAgIHRoaXMuY29udGVudEhlaWdodE1heCA9IG1heDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtaW4gPT09IFwibnVtYmVyXCIgJiYgIWlzTmFOKG1pbikpIHtcbiAgICAgIHRoaXMuY29udGVudEhlaWdodE1pbiA9IG1pbjtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImRldGFjaGVkXCI6IFtcImhhbmRsZURldGFjaGVkXCJdLFxuICAgIFwiZGlzcGxheU1vZGVcIjogW1wiaGFuZGxlRGlzcGxheU1vZGVcIl0sXG4gICAgXCJkZXRhY2hlZEhlaWdodFNjYWxlXCI6IFtcImhhbmRsZURldGFjaGVkSGVpZ2h0U2NhbGVcIl0sXG4gICAgXCJoZWlnaHRTY2FsZVwiOiBbXCJoYW5kbGVIZWlnaHRTY2FsZVwiXSxcbiAgICBcImxheW91dFwiOiBbXCJsYXlvdXRIYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiZWZmZWN0aXZlTG9jYWxlXCI6IFtcImVmZmVjdGl2ZUxvY2FsZUNoYW5nZVwiXVxuICB9OyB9XG59O1xuU2hlbGxQYW5lbC5zdHlsZSA9IHNoZWxsUGFuZWxDc3M7XG5cbmV4cG9ydCB7IFNoZWxsIGFzIGNhbGNpdGVfc2hlbGwsIFNoZWxsQ2VudGVyUm93IGFzIGNhbGNpdGVfc2hlbGxfY2VudGVyX3JvdywgU2hlbGxQYW5lbCBhcyBjYWxjaXRlX3NoZWxsX3BhbmVsIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgZiBhcyBmb3JjZVVwZGF0ZSB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcblxuY29uc3Qgb2JzZXJ2ZWQgPSBuZXcgU2V0KCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudC5lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBvYnNlcnZlZC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50XSBvZiBvYnNlcnZlZC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBmb3JjZVVwZGF0ZSh0YXJnZXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5jb25zdCBjbGFtcCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsdWUsIG1heCkpO1xuY29uc3QgZGVjaW1hbE51bWJlclJlZ2V4ID0gbmV3IFJlZ0V4cCgvKD86XFwuKFxcZCspKT8oPzpbZUVdKFsrLV0/XFxkKykpPyQvKTtcbmNvbnN0IGRlY2ltYWxQbGFjZXMgPSAodmFsdWUpID0+IHtcbiAgY29uc3QgbWF0Y2ggPSAoXCJcIiArIHZhbHVlKS5tYXRjaChkZWNpbWFsTnVtYmVyUmVnZXgpO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgcmV0dXJuIE1hdGgubWF4KDAsIFxuICAvLyBOdW1iZXIgb2YgZGlnaXRzIHJpZ2h0IG9mIGRlY2ltYWwgcG9pbnQuXG4gIChtYXRjaFsxXSA/IG1hdGNoWzFdLmxlbmd0aCA6IDApIC1cbiAgICAvLyBBZGp1c3QgZm9yIHNjaWVudGlmaWMgbm90YXRpb24uXG4gICAgKG1hdGNoWzJdID8gK21hdGNoWzJdIDogMCkpO1xufTtcblxuZXhwb3J0IHsgY2xhbXAgYXMgYywgZGVjaW1hbFBsYWNlcyBhcyBkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=