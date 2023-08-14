"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-alert_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-alert.entry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-alert.entry.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_alert": () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openCloseComponent-21d2a6ab.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-21d2a6ab.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _resources_4bf6d30e_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources-4bf6d30e.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-4bf6d30e.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */












const DURATIONS = {
  slow: 14000,
  medium: 10000,
  fast: 6000
};
const SLOTS = {
  actionsEnd: "actions-end",
  title: "title",
  message: "message",
  link: "link"
};
const CSS = {
  actionsEnd: "actions-end",
  container: "container",
  close: "alert-close",
  slottedInShell: "slotted-in-shell"
};

const alertCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([scale=s]){--calcite-alert-width:40em;--calcite-alert-spacing-token-small:0.5rem;--calcite-alert-spacing-token-large:0.75rem}:host([scale=s]) slot[name=title]::slotted(*),:host([scale=s]) *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) slot[name=message]::slotted(*),:host([scale=s]) *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) slot[name=link]::slotted(*),:host([scale=s]) *::slotted([slot=link]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .alert-queue-count{margin-inline:0.5rem}:host([scale=s]) .container{--calcite-alert-min-height:3.5rem}:host([scale=s]) .alert-close{padding:0.5rem}:host([scale=m]){--calcite-alert-width:50em;--calcite-alert-spacing-token-small:0.75rem;--calcite-alert-spacing-token-large:1rem}:host([scale=m]) slot[name=title]::slotted(*),:host([scale=m]) *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) slot[name=message]::slotted(*),:host([scale=m]) *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) slot[name=link]::slotted(*),:host([scale=m]) *::slotted([slot=link]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .alert-queue-count{margin-inline:0.75rem}:host([scale=m]) .container{--calcite-alert-min-height:4.1875rem}:host([scale=l]){--calcite-alert-width:60em;--calcite-alert-spacing-token-small:1rem;--calcite-alert-spacing-token-large:1.25rem}:host([scale=l]) slot[name=title]::slotted(*),:host([scale=l]) *::slotted([slot=title]){margin-block-end:0.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) slot[name=message]::slotted(*),:host([scale=l]) *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) slot[name=link]::slotted(*),:host([scale=l]) *::slotted([slot=link]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .alert-queue-count{margin-inline:1rem}:host([scale=l]) .container{--calcite-alert-min-height:5.625rem}:host{--calcite-alert-edge-distance:2rem;display:block}:host .container{pointer-events:none;position:fixed;z-index:var(--calcite-app-z-index-toast);margin-block:0px;margin-inline:auto;display:flex;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);opacity:0;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius);border-block-start:0px solid transparent;border-inline:1px solid var(--calcite-ui-border-3);border-block-end:1px solid var(--calcite-ui-border-3);min-block-size:var(--calcite-alert-min-height);inline-size:var(--calcite-alert-width);max-inline-size:calc(100% - (var(--calcite-alert-edge-distance) * 2 + 2px));max-block-size:0;transition:var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}:host .container.bottom,:host .container.top{inset-inline-end:0;inset-inline-start:0}:host .container[class*=bottom]{transform:translate3d(0, var(--calcite-alert-edge-distance), 0);inset-block-end:var(--calcite-alert-edge-distance)}:host .container[class*=top]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), 0);inset-block-start:var(--calcite-alert-edge-distance)}:host .container[class*=-start]{inset-inline-start:var(--calcite-alert-edge-distance);inset-inline-end:auto}:host .container[class*=-end]{inset-inline-end:var(--calcite-alert-edge-distance);inset-inline-start:auto}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}[hidden]{display:none}.container{display:flex;inline-size:100%;align-items:center;justify-content:center}.alert-close{outline-color:transparent}.alert-close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([open]) .container:not(.queued){max-block-size:100%;border-block-start-width:2px;opacity:1;pointer-events:initial}:host([open]) .container:not(.queued)[class*=bottom]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), inherit)}:host([open]) .container:not(.queued)[class*=top]{transform:translate3d(0, var(--calcite-alert-edge-distance), inherit)}slot[name=title]::slotted(*),*::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}slot[name=message]::slotted(*),*::slotted([slot=message]){margin:0px;display:inline;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-inline-end:0.5rem}slot[name=link]::slotted(*),*::slotted([slot=link]){display:inline-flex;color:var(--calcite-ui-text-link)}.alert-content{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-alert-spacing-token-large);flex:0 0 auto;display:flex;flex-direction:column;overflow-wrap:break-word;background-color:var(--calcite-ui-foreground-1);flex:1 1 0;min-inline-size:0;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:0 var(--calcite-alert-spacing-token-small);border-radius:var(--calcite-border-radius)}.alert-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-alert-spacing-token-large)}.alert-content:only-child{padding:var(--calcite-alert-spacing-token-small)}.alert-icon{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:var(--calcite-alert-spacing-token-large);flex:0 0 auto;display:flex;align-items:center;align-self:stretch;background-color:var(--calcite-ui-foreground-1);padding-block:0px;border-start-start-radius:var(--calcite-border-radius);border-end-start-radius:var(--calcite-border-radius)}.alert-close{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:var(--calcite-alert-spacing-token-large);flex:0 0 auto;cursor:pointer;align-self:stretch;overflow:hidden;border-style:none;background-color:var(--calcite-ui-foreground-1);padding-block:0px;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;border-end-end-radius:var(--calcite-border-radius);border-start-end-radius:var(--calcite-border-radius)}.alert-close:hover,.alert-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.alert-close:open{background-color:var(--calcite-ui-foreground-3)}.alert-queue-count{visibility:hidden;display:flex;cursor:default;align-items:center;justify-content:space-around;align-self:stretch;overflow:hidden;background-color:var(--calcite-ui-foreground-1);text-align:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline:0px solid transparent;border-start-end-radius:0}.alert-queue-count.active{visibility:visible;opacity:1}:host([auto-close])>.alert-queue-count{border-inline-end:0px solid transparent}.alert-dismiss-progress{position:absolute;display:block;inline-size:100%;overflow:hidden;inset-inline:0;inset-block-start:-2px;block-size:2px;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.alert-dismiss-progress:after{position:absolute;inset-block-start:0px;display:block;block-size:2px;content:\"\";background-color:var(--calcite-alert-dismiss-progress-background);inset-inline-end:0}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-block-start-color:var(--calcite-ui-brand)}:host([kind=brand]) .container .alert-icon{color:var(--calcite-ui-brand)}:host([kind=info]) .container{border-block-start-color:var(--calcite-ui-info)}:host([kind=info]) .container .alert-icon{color:var(--calcite-ui-info)}:host([kind=danger]) .container{border-block-start-color:var(--calcite-ui-danger)}:host([kind=danger]) .container .alert-icon{color:var(--calcite-ui-danger)}:host([kind=success]) .container{border-block-start-color:var(--calcite-ui-success)}:host([kind=success]) .container .alert-icon{color:var(--calcite-ui-success)}:host([kind=warning]) .container{border-block-start-color:var(--calcite-ui-warning)}:host([kind=warning]) .container .alert-icon{color:var(--calcite-ui-warning)}:host([auto-close-duration=fast]) .alert-dismiss-progress:after{animation:dismissProgress 6000ms ease-out}:host(:hover[auto-close-duration=fast]) .alert-dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=medium]) .alert-dismiss-progress:after{animation:dismissProgress 10000ms ease-out}:host(:hover[auto-close-duration=medium]) .alert-dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=slow]) .alert-dismiss-progress:after{animation:dismissProgress 14000ms ease-out}:host(:hover[auto-close-duration=slow]) .alert-dismiss-progress:after{animation-play-state:paused}@keyframes dismissProgress{0%{inline-size:0px;opacity:0.75}100%{inline-size:100%;opacity:1}}.container.slotted-in-shell{position:absolute}";

const Alert = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteAlertBeforeClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteAlertBeforeClose", 6);
    this.calciteAlertClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteAlertClose", 6);
    this.calciteAlertBeforeOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteAlertBeforeOpen", 6);
    this.calciteAlertOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteAlertOpen", 6);
    this.calciteInternalAlertSync = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalAlertSync", 6);
    this.calciteInternalAlertRegister = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalAlertRegister", 6);
    this.autoCloseTimeoutId = null;
    this.totalOpenTime = 0;
    this.totalHoverTime = 0;
    this.openTransitionProp = "opacity";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
      (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    };
    /** close and emit calciteInternalAlertSync event with the updated queue payload */
    this.closeAlert = () => {
      this.autoCloseTimeoutId = null;
      this.queued = false;
      this.open = false;
      this.queue = this.queue.filter((el) => el !== this.el);
      this.determineActiveAlert();
      this.calciteInternalAlertSync.emit({ queue: this.queue });
    };
    this.actionsEndSlotChangeHandler = (event) => {
      this.hasEndActions = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
    };
    this.handleMouseOver = () => {
      window.clearTimeout(this.autoCloseTimeoutId);
      this.totalOpenTime = Date.now() - this.initialOpenTime;
      this.lastMouseOverBegin = Date.now();
    };
    this.handleMouseLeave = () => {
      const hoverDuration = Date.now() - this.lastMouseOverBegin;
      const timeRemaining = DURATIONS[this.autoCloseDuration] - this.totalOpenTime + this.totalHoverTime;
      this.totalHoverTime = this.totalHoverTime ? hoverDuration + this.totalHoverTime : hoverDuration;
      this.autoCloseTimeoutId = window.setTimeout(() => this.closeAlert(), timeRemaining);
    };
    this.open = false;
    this.autoClose = false;
    this.autoCloseDuration = "medium";
    this.kind = "brand";
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.label = undefined;
    this.numberingSystem = undefined;
    this.placement = "bottom";
    this.scale = "m";
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.slottedInShell = undefined;
    this.effectiveLocale = "";
    this.defaultMessages = undefined;
    this.hasEndActions = false;
    this.queue = [];
    this.queueLength = 0;
    this.queued = false;
    this.requestedIcon = undefined;
  }
  openHandler() {
    if (this.open && !this.queued) {
      this.calciteInternalAlertRegister.emit();
    }
    if (!this.open) {
      this.queue = this.queue.filter((el) => el !== this.el);
      this.calciteInternalAlertSync.emit({ queue: this.queue });
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  updateRequestedIcon() {
    this.requestedIcon = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.e)(_resources_4bf6d30e_js__WEBPACK_IMPORTED_MODULE_6__.K, this.icon, this.kind);
  }
  updateDuration() {
    if (this.autoClose && this.autoCloseTimeoutId) {
      window.clearTimeout(this.autoCloseTimeoutId);
      this.autoCloseTimeoutId = window.setTimeout(() => this.closeAlert(), DURATIONS[this.autoCloseDuration]);
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    const open = this.open;
    if (open && !this.queued) {
      this.openHandler();
      this.calciteInternalAlertRegister.emit();
    }
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
    this.requestedIcon = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.e)(_resources_4bf6d30e_js__WEBPACK_IMPORTED_MODULE_6__.K, this.icon, this.kind);
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  disconnectedCallback() {
    window.dispatchEvent(new CustomEvent("calciteInternalAlertUnregister", {
      detail: { alert: this.el }
    }));
    window.clearTimeout(this.autoCloseTimeoutId);
    window.clearTimeout(this.queueTimeout);
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    this.slottedInShell = false;
  }
  render() {
    const { hasEndActions } = this;
    const closeButton = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.messages.close, class: "alert-close", onClick: this.closeAlert, type: "button",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.closeButton = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : "s" })));
    _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      signDisplay: "always"
    };
    const queueNumber = this.queueLength > 2 ? this.queueLength - 1 : 1;
    const queueText = _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatter.format(queueNumber);
    const queueCount = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${this.queueLength > 1 ? "active " : ""}alert-queue-count` }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-chip", { scale: this.scale, value: queueText }, queueText)));
    const { open, autoClose, label, placement, queued, requestedIcon, iconFlipRtl } = this;
    const role = autoClose ? "alert" : "alertdialog";
    const hidden = !open;
    const slotNode = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "actionsEndSlot", name: SLOTS.actionsEnd, onSlotchange: this.actionsEndSlotChangeHandler }));
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-hidden": (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.t)(hidden), "aria-label": label, "calcite-hydrated-hidden": hidden, role: role }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        container: true,
        queued,
        [placement]: true,
        [CSS.slottedInShell]: this.slottedInShell
      }, onPointerEnter: this.autoClose && this.autoCloseTimeoutId ? this.handleMouseOver : null, onPointerLeave: this.autoClose && this.autoCloseTimeoutId ? this.handleMouseLeave : null,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTransitionEl }, requestedIcon ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "alert-icon" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { flipRtl: iconFlipRtl, icon: requestedIcon, scale: this.scale === "l" ? "m" : "s" }))) : null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "alert-content" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.title }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.message }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.link })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.actionsEnd, hidden: !hasEndActions }, slotNode), this.queueLength > 1 ? queueCount : null, closeButton, open && !queued && autoClose ? (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "alert-dismiss-progress" }) : null)));
  }
  // when an alert is opened or closed, update queue and determine active alert
  alertSync(event) {
    if (this.queue !== event.detail.queue) {
      this.queue = event.detail.queue;
    }
    this.queueLength = this.queue.length;
    this.determineActiveAlert();
    event.stopPropagation();
  }
  // when an alert is first registered, trigger a queue sync
  alertRegister() {
    if (this.open && !this.queue.includes(this.el)) {
      this.queued = true;
      this.queue.push(this.el);
    }
    this.calciteInternalAlertSync.emit({ queue: this.queue });
    this.determineActiveAlert();
  }
  // Event is dispatched on the window because the element is not in the DOM so bubbling won't occur.
  alertUnregister(event) {
    const queue = this.queue.filter((el) => el !== event.detail.alert);
    this.queue = queue;
    window.dispatchEvent(new CustomEvent("calciteInternalAlertSync", {
      detail: { queue }
    }));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's "close" button (the first focusable item). */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    const alertLinkEl = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el, { selector: "calcite-link" });
    if (!this.closeButton && !alertLinkEl) {
      return;
    }
    else if (alertLinkEl) {
      alertLinkEl.setFocus();
    }
    else if (this.closeButton) {
      this.closeButton.focus();
    }
  }
  effectiveLocaleChange() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
  }
  /** determine which alert is active */
  determineActiveAlert() {
    if (this.queue?.[0] === this.el) {
      this.openAlert();
      if (this.autoClose && !this.autoCloseTimeoutId) {
        this.initialOpenTime = Date.now();
        this.autoCloseTimeoutId = window.setTimeout(() => this.closeAlert(), DURATIONS[this.autoCloseDuration]);
      }
    }
    else {
      return;
    }
  }
  onBeforeOpen() {
    this.calciteAlertBeforeOpen.emit();
  }
  onOpen() {
    this.calciteAlertOpen.emit();
  }
  onBeforeClose() {
    this.calciteAlertBeforeClose.emit();
  }
  onClose() {
    this.calciteAlertClose.emit();
  }
  /** remove queued class after animation completes */
  openAlert() {
    window.clearTimeout(this.queueTimeout);
    this.queueTimeout = window.setTimeout(() => (this.queued = false), 300);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "open": ["openHandler"],
    "messageOverrides": ["onMessagesChange"],
    "icon": ["updateRequestedIcon"],
    "kind": ["updateRequestedIcon"],
    "autoCloseDuration": ["updateDuration"],
    "effectiveLocale": ["effectiveLocaleChange"]
  }; }
};
Alert.style = alertCss;




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

/***/ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-21d2a6ab.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-21d2a6ab.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectOpenCloseComponent),
/* harmony export */   "d": () => (/* binding */ disconnectOpenCloseComponent),
/* harmony export */   "o": () => (/* binding */ onToggleOpenCloseComponent)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */


const componentToTransitionListeners = new WeakMap();
function transitionStart(event) {
  if (event.propertyName === this.openTransitionProp && event.target === this.transitionEl) {
    this.open ? this.onBeforeOpen() : this.onBeforeClose();
  }
}
function transitionEnd(event) {
  if (event.propertyName === this.openTransitionProp && event.target === this.transitionEl) {
    this.open ? this.onOpen() : this.onClose();
  }
}
/**
 * Helper to determine globally set transition duration on the given openTransitionProp, which is imported and set in the @Watch("open").
 * Used to emit (before)open/close events both for when the opacity transition is present and when there is none (transition-duration is set to 0).
 *
 * @param component
 * @param nonOpenCloseComponent
 */
function onToggleOpenCloseComponent(component, nonOpenCloseComponent = false) {
  (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
    if (component.transitionEl) {
      const allTransitionPropsArray = getComputedStyle(component.transitionEl).transition.split(" ");
      const openTransitionPropIndex = allTransitionPropsArray.findIndex((item) => item === component.openTransitionProp);
      const transitionDuration = allTransitionPropsArray[openTransitionPropIndex + 1];
      if (transitionDuration === "0s") {
        (nonOpenCloseComponent ? component[component.transitionProp] : component.open)
          ? component.onBeforeOpen()
          : component.onBeforeClose();
        (nonOpenCloseComponent ? component[component.transitionProp] : component.open)
          ? component.onOpen()
          : component.onClose();
      }
      else {
        component.transitionEl.addEventListener("transitionstart", () => {
          (nonOpenCloseComponent ? component[component.transitionProp] : component.open)
            ? component.onBeforeOpen()
            : component.onBeforeClose();
        }, { once: true });
        component.transitionEl.addEventListener("transitionend", () => {
          (nonOpenCloseComponent ? component[component.transitionProp] : component.open)
            ? component.onOpen()
            : component.onClose();
        }, { once: true });
      }
    }
  });
}
/**
 * Helper to keep track of transition listeners on setTransitionEl and connectedCallback on OpenCloseComponent components.
 *
 * For component which do not have open prop, use `onToggleOpenCloseComponent` implementation.
 *
 * @param component
 */
function connectOpenCloseComponent(component) {
  disconnectOpenCloseComponent(component);
  if (component.transitionEl) {
    const boundOnTransitionStart = transitionStart.bind(component);
    const boundOnTransitionEnd = transitionEnd.bind(component);
    componentToTransitionListeners.set(component, [
      component.transitionEl,
      boundOnTransitionStart,
      boundOnTransitionEnd
    ]);
    component.transitionEl.addEventListener("transitionstart", boundOnTransitionStart);
    component.transitionEl.addEventListener("transitionend", boundOnTransitionEnd);
  }
}
/**
 * Helper to tear down transition listeners on disconnectedCallback on OpenCloseComponent components.
 *
 * @param component
 */
function disconnectOpenCloseComponent(component) {
  if (!componentToTransitionListeners.has(component)) {
    return;
  }
  const [transitionEl, start, end] = componentToTransitionListeners.get(component);
  transitionEl.removeEventListener("transitionstart", start);
  transitionEl.removeEventListener("transitionend", end);
  componentToTransitionListeners.delete(component);
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/resources-4bf6d30e.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/resources-4bf6d30e.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ KindIcons)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
var KindIcons;
(function (KindIcons) {
  KindIcons["brand"] = "lightbulb";
  KindIcons["danger"] = "exclamationMarkTriangle";
  KindIcons["info"] = "information";
  KindIcons["success"] = "checkCircle";
  KindIcons["warning"] = "exclamationMarkTriangle";
})(KindIcons || (KindIcons = {}));




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvODdlZDU2MTgxMjFjMTI2Y2Q5YmM1MmFkODFkYzU3NTQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RztBQUNxQjtBQUNkO0FBQ0Q7QUFDRTtBQUNNO0FBQ2xFO0FBQzdCO0FBQ0s7QUFDTjtBQUNNOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGlCQUFpQiwyQkFBMkIsMkNBQTJDLDRDQUE0Qyx3RkFBd0Ysc0NBQXNDLGtCQUFrQiw0RkFBNEYsc0NBQXNDLGtCQUFrQixzRkFBc0Ysc0NBQXNDLGtCQUFrQixvQ0FBb0MscUJBQXFCLDRCQUE0QixrQ0FBa0MsOEJBQThCLGVBQWUsaUJBQWlCLDJCQUEyQiw0Q0FBNEMseUNBQXlDLHdGQUF3RixxQ0FBcUMsa0JBQWtCLDRGQUE0RixzQ0FBc0Msa0JBQWtCLHNGQUFzRixzQ0FBc0Msa0JBQWtCLG9DQUFvQyxzQkFBc0IsNEJBQTRCLHFDQUFxQyxpQkFBaUIsMkJBQTJCLHlDQUF5Qyw0Q0FBNEMsd0ZBQXdGLHlCQUF5QixxQ0FBcUMsa0JBQWtCLDRGQUE0RixxQ0FBcUMsa0JBQWtCLHNGQUFzRixxQ0FBcUMsa0JBQWtCLG9DQUFvQyxtQkFBbUIsNEJBQTRCLG9DQUFvQyxNQUFNLG1DQUFtQyxjQUFjLGlCQUFpQixvQkFBb0IsZUFBZSx5Q0FBeUMsaUJBQWlCLG1CQUFtQixhQUFhLG1CQUFtQix1QkFBdUIsZ0RBQWdELFVBQVUsb0ZBQW9GLG1HQUFtRyx1R0FBdUcsMkNBQTJDLHlDQUF5QyxtREFBbUQsc0RBQXNELCtDQUErQyx1Q0FBdUMsNEVBQTRFLGlCQUFpQiw2T0FBNk8sNkNBQTZDLG1CQUFtQixxQkFBcUIsZ0NBQWdDLGdFQUFnRSxtREFBbUQsNkJBQTZCLDJFQUEyRSxxREFBcUQsZ0NBQWdDLHNEQUFzRCxzQkFBc0IsOEJBQThCLG9EQUFvRCx3QkFBd0IsaUNBQWlDLDZCQUE2QixvQkFBb0IsU0FBUyxhQUFhLFdBQVcsYUFBYSxpQkFBaUIsbUJBQW1CLHVCQUF1QixhQUFhLDBCQUEwQixtQkFBbUIseUVBQXlFLHFQQUFxUCxzQ0FBc0Msb0JBQW9CLDZCQUE2QixVQUFVLHVCQUF1QixxREFBcUQsaUZBQWlGLGtEQUFrRCxzRUFBc0Usc0RBQXNELHFDQUFxQyxrQkFBa0IsOENBQThDLCtCQUErQiwwREFBMEQsV0FBVyxlQUFlLHNDQUFzQyxrQkFBa0IsOENBQThDLCtCQUErQix5QkFBeUIsb0RBQW9ELG9CQUFvQixrQ0FBa0MsZUFBZSw2RkFBNkYsd0RBQXdELGNBQWMsYUFBYSxzQkFBc0IseUJBQXlCLGdEQUFnRCxXQUFXLGtCQUFrQix1REFBdUQsMERBQTBELDJDQUEyQyw4Q0FBOEMsOERBQThELDBCQUEwQixpREFBaUQsWUFBWSw2RkFBNkYsdURBQXVELHdEQUF3RCxjQUFjLGFBQWEsbUJBQW1CLG1CQUFtQixnREFBZ0Qsa0JBQWtCLHVEQUF1RCxxREFBcUQsYUFBYSw2RkFBNkYsdURBQXVELHdEQUF3RCxjQUFjLGVBQWUsbUJBQW1CLGdCQUFnQixrQkFBa0IsZ0RBQWdELGtCQUFrQiwrQkFBK0IsOEJBQThCLG1CQUFtQixtREFBbUQscURBQXFELHNDQUFzQyxnREFBZ0QsK0JBQStCLGtCQUFrQixnREFBZ0QsbUJBQW1CLGtCQUFrQixhQUFhLGVBQWUsbUJBQW1CLDZCQUE2QixtQkFBbUIsZ0JBQWdCLGdEQUFnRCxrQkFBa0IsOENBQThDLCtCQUErQixVQUFVLDZGQUE2RixvQ0FBb0MsMEJBQTBCLDBCQUEwQixtQkFBbUIsVUFBVSx1Q0FBdUMsd0NBQXdDLHdCQUF3QixrQkFBa0IsY0FBYyxpQkFBaUIsZ0JBQWdCLGVBQWUsdUJBQXVCLGVBQWUsNEVBQTRFLDhCQUE4QixrQkFBa0Isc0JBQXNCLGNBQWMsZUFBZSxhQUFhLGtFQUFrRSxtQkFBbUIsYUFBYSxhQUFhLG1CQUFtQiwrQkFBK0IsaURBQWlELDJDQUEyQyw4QkFBOEIsOEJBQThCLGdEQUFnRCwwQ0FBMEMsNkJBQTZCLGdDQUFnQyxrREFBa0QsNENBQTRDLCtCQUErQixpQ0FBaUMsbURBQW1ELDZDQUE2QyxnQ0FBZ0MsaUNBQWlDLG1EQUFtRCw2Q0FBNkMsZ0NBQWdDLGdFQUFnRSwwQ0FBMEMsc0VBQXNFLDRCQUE0QixrRUFBa0UsMkNBQTJDLHdFQUF3RSw0QkFBNEIsZ0VBQWdFLDJDQUEyQyxzRUFBc0UsNEJBQTRCLDJCQUEyQixHQUFHLGdCQUFnQixhQUFhLEtBQUssaUJBQWlCLFdBQVcsNEJBQTRCLGtCQUFrQjs7QUFFdHZXO0FBQ0E7QUFDQSxJQUFJLHFEQUFnQjtBQUNwQixtQ0FBbUMscURBQVc7QUFDOUMsNkJBQTZCLHFEQUFXO0FBQ3hDLGtDQUFrQyxxREFBVztBQUM3Qyw0QkFBNEIscURBQVc7QUFDdkMsb0NBQW9DLHFEQUFXO0FBQy9DLHdDQUF3QyxxREFBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrRUFBeUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxtQkFBbUI7QUFDOUQ7QUFDQTtBQUNBLDJCQUEyQixtREFBNEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1CQUFtQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbURBQWdCLENBQUMscURBQVM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFnQjtBQUNwQixJQUFJLGdKQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUF5QjtBQUM3QjtBQUNBO0FBQ0EsSUFBSSx3REFBc0I7QUFDMUIseUJBQXlCLG1EQUFnQixDQUFDLHFEQUFTO0FBQ25ELFVBQVUsZ0pBQWE7QUFDdkI7QUFDQTtBQUNBLElBQUksd0RBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksa0VBQTRCO0FBQ2hDLElBQUksc0RBQW1CO0FBQ3ZCLElBQUksZ0pBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCLHlCQUF5QixxREFBQyxhQUFhO0FBQ3ZDO0FBQ0EsNENBQTRDLEVBQUUscURBQUMsbUJBQW1CLGtEQUFrRDtBQUNwSCxJQUFJLHNFQUF5QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlFQUE0QztBQUNsRSx3QkFBd0IscURBQUMsVUFBVSxVQUFVLHNDQUFzQyxvQkFBb0IsRUFBRSxxREFBQyxtQkFBbUIscUNBQXFDO0FBQ2xLLFlBQVksd0VBQXdFO0FBQ3BGO0FBQ0E7QUFDQSxzQkFBc0IscURBQUMsV0FBVywrRkFBK0Y7QUFDakksWUFBWSxxREFBQyxDQUFDLGlEQUFJLElBQUksZUFBZSxtREFBYSw4RUFBOEUsRUFBRSxxREFBQyxVQUFVO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLG1CQUFtQixxREFBQyxVQUFVLHFCQUFxQixFQUFFLHFEQUFDLG1CQUFtQixrRkFBa0YsWUFBWSxxREFBQyxVQUFVLHdCQUF3QixFQUFFLHFEQUFDLFdBQVcsbUJBQW1CLEdBQUcscURBQUMsV0FBVyxxQkFBcUIsR0FBRyxxREFBQyxXQUFXLGtCQUFrQixJQUFJLHFEQUFDLFVBQVUsK0NBQStDLG1HQUFtRyxxREFBQyxVQUFVLGlDQUFpQztBQUM5aEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsbUJBQW1CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx3REFBZTtBQUN6Qix3QkFBd0IsbURBQVUsWUFBWSwwQkFBMEI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0pBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsYUFBYSxPQUFPLHFEQUFVO0FBQzlCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25SbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRHRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU4Rzs7Ozs7Ozs7Ozs7Ozs7O0FDMUY5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4Qjs7QUFFTCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtYWxlcnQuZW50cnkuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vbG9hZGFibGUtODA1OGUzMDAuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vb3BlbkNsb3NlQ29tcG9uZW50LTIxZDJhNmFiLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3Jlc291cmNlcy00YmY2ZDMwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgZCBhcyBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50LCBlIGFzIHNldFJlcXVlc3RlZEljb24sIHQgYXMgdG9BcmlhQm9vbGVhbiwgZyBhcyBnZXRTbG90dGVkIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLTgwNThlMzAwLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkLCBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuQ2xvc2VDb21wb25lbnQtMjFkMmE2YWIuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHUgYXMgdXBkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1mYWMxMzM5NC5qcyc7XG5pbXBvcnQgeyBLIGFzIEtpbmRJY29ucyB9IGZyb20gJy4vcmVzb3VyY2VzLTRiZjZkMzBlLmpzJztcbmltcG9ydCAnLi9ndWlkLTcxMzY5NzRiLmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtMzQyZTEyZDEuanMnO1xuaW1wb3J0ICcuL2tleS04ZmYwZDEwMS5qcyc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcblxuY29uc3QgRFVSQVRJT05TID0ge1xuICBzbG93OiAxNDAwMCxcbiAgbWVkaXVtOiAxMDAwMCxcbiAgZmFzdDogNjAwMFxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG4gIHRpdGxlOiBcInRpdGxlXCIsXG4gIG1lc3NhZ2U6IFwibWVzc2FnZVwiLFxuICBsaW5rOiBcImxpbmtcIlxufTtcbmNvbnN0IENTUyA9IHtcbiAgYWN0aW9uc0VuZDogXCJhY3Rpb25zLWVuZFwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNsb3NlOiBcImFsZXJ0LWNsb3NlXCIsXG4gIHNsb3R0ZWRJblNoZWxsOiBcInNsb3R0ZWQtaW4tc2hlbGxcIlxufTtcblxuY29uc3QgYWxlcnRDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbc2NhbGU9c10pey0tY2FsY2l0ZS1hbGVydC13aWR0aDo0MGVtOy0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLXNtYWxsOjAuNXJlbTstLWNhbGNpdGUtYWxlcnQtc3BhY2luZy10b2tlbi1sYXJnZTowLjc1cmVtfTpob3N0KFtzY2FsZT1zXSkgc2xvdFtuYW1lPXRpdGxlXTo6c2xvdHRlZCgqKSw6aG9zdChbc2NhbGU9c10pICo6OnNsb3R0ZWQoW3Nsb3Q9dGl0bGVdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1zXSkgc2xvdFtuYW1lPW1lc3NhZ2VdOjpzbG90dGVkKCopLDpob3N0KFtzY2FsZT1zXSkgKjo6c2xvdHRlZChbc2xvdD1tZXNzYWdlXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NX06aG9zdChbc2NhbGU9c10pIHNsb3RbbmFtZT1saW5rXTo6c2xvdHRlZCgqKSw6aG9zdChbc2NhbGU9c10pICo6OnNsb3R0ZWQoW3Nsb3Q9bGlua10pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPXNdKSAuYWxlcnQtcXVldWUtY291bnR7bWFyZ2luLWlubGluZTowLjVyZW19Omhvc3QoW3NjYWxlPXNdKSAuY29udGFpbmVyey0tY2FsY2l0ZS1hbGVydC1taW4taGVpZ2h0OjMuNXJlbX06aG9zdChbc2NhbGU9c10pIC5hbGVydC1jbG9zZXtwYWRkaW5nOjAuNXJlbX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS1hbGVydC13aWR0aDo1MGVtOy0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLXNtYWxsOjAuNzVyZW07LS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tbGFyZ2U6MXJlbX06aG9zdChbc2NhbGU9bV0pIHNsb3RbbmFtZT10aXRsZV06OnNsb3R0ZWQoKiksOmhvc3QoW3NjYWxlPW1dKSAqOjpzbG90dGVkKFtzbG90PXRpdGxlXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1tXSkgc2xvdFtuYW1lPW1lc3NhZ2VdOjpzbG90dGVkKCopLDpob3N0KFtzY2FsZT1tXSkgKjo6c2xvdHRlZChbc2xvdD1tZXNzYWdlXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxLjM3NX06aG9zdChbc2NhbGU9bV0pIHNsb3RbbmFtZT1saW5rXTo6c2xvdHRlZCgqKSw6aG9zdChbc2NhbGU9bV0pICo6OnNsb3R0ZWQoW3Nsb3Q9bGlua10pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPW1dKSAuYWxlcnQtcXVldWUtY291bnR7bWFyZ2luLWlubGluZTowLjc1cmVtfTpob3N0KFtzY2FsZT1tXSkgLmNvbnRhaW5lcnstLWNhbGNpdGUtYWxlcnQtbWluLWhlaWdodDo0LjE4NzVyZW19Omhvc3QoW3NjYWxlPWxdKXstLWNhbGNpdGUtYWxlcnQtd2lkdGg6NjBlbTstLWNhbGNpdGUtYWxlcnQtc3BhY2luZy10b2tlbi1zbWFsbDoxcmVtOy0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLWxhcmdlOjEuMjVyZW19Omhvc3QoW3NjYWxlPWxdKSBzbG90W25hbWU9dGl0bGVdOjpzbG90dGVkKCopLDpob3N0KFtzY2FsZT1sXSkgKjo6c2xvdHRlZChbc2xvdD10aXRsZV0pe21hcmdpbi1ibG9jay1lbmQ6MC4yNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMSk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPWxdKSBzbG90W25hbWU9bWVzc2FnZV06OnNsb3R0ZWQoKiksOmhvc3QoW3NjYWxlPWxdKSAqOjpzbG90dGVkKFtzbG90PW1lc3NhZ2VdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPWxdKSBzbG90W25hbWU9bGlua106OnNsb3R0ZWQoKiksOmhvc3QoW3NjYWxlPWxdKSAqOjpzbG90dGVkKFtzbG90PWxpbmtdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPWxdKSAuYWxlcnQtcXVldWUtY291bnR7bWFyZ2luLWlubGluZToxcmVtfTpob3N0KFtzY2FsZT1sXSkgLmNvbnRhaW5lcnstLWNhbGNpdGUtYWxlcnQtbWluLWhlaWdodDo1LjYyNXJlbX06aG9zdHstLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZToycmVtO2Rpc3BsYXk6YmxvY2t9Omhvc3QgLmNvbnRhaW5lcntwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC10b2FzdCk7bWFyZ2luLWJsb2NrOjBweDttYXJnaW4taW5saW5lOmF1dG87ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO29wYWNpdHk6MDstLXR3LXNoYWRvdzowIDZweCAyMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCAxMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA4KTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgNnB4IDIwcHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCAxMnB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7Ym9yZGVyLXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ibG9jay1zdGFydDowcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWlubGluZToxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7Ym9yZGVyLWJsb2NrLWVuZDoxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7bWluLWJsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1hbGVydC1taW4taGVpZ2h0KTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWFsZXJ0LXdpZHRoKTttYXgtaW5saW5lLXNpemU6Y2FsYygxMDAlIC0gKHZhcigtLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZSkgKiAyICsgMnB4KSk7bWF4LWJsb2NrLXNpemU6MDt0cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNDQsIDAuNDIsIDAuODgpLCBvcGFjaXR5IHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNDQsIDAuNDIsIDAuODgpLCBhbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dH06aG9zdCAuY29udGFpbmVyLmJvdHRvbSw6aG9zdCAuY29udGFpbmVyLnRvcHtpbnNldC1pbmxpbmUtZW5kOjA7aW5zZXQtaW5saW5lLXN0YXJ0OjB9Omhvc3QgLmNvbnRhaW5lcltjbGFzcyo9Ym90dG9tXXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgdmFyKC0tY2FsY2l0ZS1hbGVydC1lZGdlLWRpc3RhbmNlKSwgMCk7aW5zZXQtYmxvY2stZW5kOnZhcigtLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZSl9Omhvc3QgLmNvbnRhaW5lcltjbGFzcyo9dG9wXXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgY2FsYygtMSAqIHZhcigtLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZSkpLCAwKTtpbnNldC1ibG9jay1zdGFydDp2YXIoLS1jYWxjaXRlLWFsZXJ0LWVkZ2UtZGlzdGFuY2UpfTpob3N0IC5jb250YWluZXJbY2xhc3MqPS1zdGFydF17aW5zZXQtaW5saW5lLXN0YXJ0OnZhcigtLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZSk7aW5zZXQtaW5saW5lLWVuZDphdXRvfTpob3N0IC5jb250YWluZXJbY2xhc3MqPS1lbmRde2luc2V0LWlubGluZS1lbmQ6dmFyKC0tY2FsY2l0ZS1hbGVydC1lZGdlLWRpc3RhbmNlKTtpbnNldC1pbmxpbmUtc3RhcnQ6YXV0b306aG9zdChbY2FsY2l0ZS1oeWRyYXRlZC1oaWRkZW5dKXt2aXNpYmlsaXR5OmhpZGRlbiAhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOm5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfS5jb250YWluZXJ7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmFsZXJ0LWNsb3Nle291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9LmFsZXJ0LWNsb3NlOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdChbb3Blbl0pIC5jb250YWluZXI6bm90KC5xdWV1ZWQpe21heC1ibG9jay1zaXplOjEwMCU7Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjJweDtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6aW5pdGlhbH06aG9zdChbb3Blbl0pIC5jb250YWluZXI6bm90KC5xdWV1ZWQpW2NsYXNzKj1ib3R0b21de3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCBjYWxjKC0xICogdmFyKC0tY2FsY2l0ZS1hbGVydC1lZGdlLWRpc3RhbmNlKSksIGluaGVyaXQpfTpob3N0KFtvcGVuXSkgLmNvbnRhaW5lcjpub3QoLnF1ZXVlZClbY2xhc3MqPXRvcF17dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIHZhcigtLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZSksIGluaGVyaXQpfXNsb3RbbmFtZT10aXRsZV06OnNsb3R0ZWQoKiksKjo6c2xvdHRlZChbc2xvdD10aXRsZV0pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjM3NTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfXNsb3RbbmFtZT1tZXNzYWdlXTo6c2xvdHRlZCgqKSwqOjpzbG90dGVkKFtzbG90PW1lc3NhZ2VdKXttYXJnaW46MHB4O2Rpc3BsYXk6aW5saW5lO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MS4zNzU7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTttYXJnaW4taW5saW5lLWVuZDowLjVyZW19c2xvdFtuYW1lPWxpbmtdOjpzbG90dGVkKCopLCo6OnNsb3R0ZWQoW3Nsb3Q9bGlua10pe2Rpc3BsYXk6aW5saW5lLWZsZXg7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LWxpbmspfS5hbGVydC1jb250ZW50e3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtYWxlcnQtc3BhY2luZy10b2tlbi1sYXJnZSk7ZmxleDowIDAgYXV0bztkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmbGV4OjEgMSAwO21pbi1pbmxpbmUtc2l6ZTowO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLXNtYWxsKTtwYWRkaW5nLWlubGluZTowIHZhcigtLWNhbGNpdGUtYWxlcnQtc3BhY2luZy10b2tlbi1zbWFsbCk7Ym9yZGVyLXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpfS5hbGVydC1jb250ZW50OmZpcnN0LW9mLXR5cGU6bm90KDpvbmx5LWNoaWxkKXtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tbGFyZ2UpfS5hbGVydC1jb250ZW50Om9ubHktY2hpbGR7cGFkZGluZzp2YXIoLS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tc21hbGwpfS5hbGVydC1pY29ue3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLXNtYWxsKTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tbGFyZ2UpO2ZsZXg6MCAwIGF1dG87ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1zZWxmOnN0cmV0Y2g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7cGFkZGluZy1ibG9jazowcHg7Ym9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpO2JvcmRlci1lbmQtc3RhcnQtcmFkaXVzOnZhcigtLWNhbGNpdGUtYm9yZGVyLXJhZGl1cyl9LmFsZXJ0LWNsb3Nle3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLXNtYWxsKTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tbGFyZ2UpO2ZsZXg6MCAwIGF1dG87Y3Vyc29yOnBvaW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO292ZXJmbG93OmhpZGRlbjtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtwYWRkaW5nLWJsb2NrOjBweDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O2JvcmRlci1lbmQtZW5kLXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpO2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOnZhcigtLWNhbGNpdGUtYm9yZGVyLXJhZGl1cyl9LmFsZXJ0LWNsb3NlOmhvdmVyLC5hbGVydC1jbG9zZTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmFsZXJ0LWNsb3NlOm9wZW57YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9LmFsZXJ0LXF1ZXVlLWNvdW50e3Zpc2liaWxpdHk6aGlkZGVuO2Rpc3BsYXk6ZmxleDtjdXJzb3I6ZGVmYXVsdDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDthbGlnbi1zZWxmOnN0cmV0Y2g7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2JvcmRlci1pbmxpbmU6MHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOjB9LmFsZXJ0LXF1ZXVlLWNvdW50LmFjdGl2ZXt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxfTpob3N0KFthdXRvLWNsb3NlXSk+LmFsZXJ0LXF1ZXVlLWNvdW50e2JvcmRlci1pbmxpbmUtZW5kOjBweCBzb2xpZCB0cmFuc3BhcmVudH0uYWxlcnQtZGlzbWlzcy1wcm9ncmVzc3twb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO2lubGluZS1zaXplOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO2luc2V0LWlubGluZTowO2luc2V0LWJsb2NrLXN0YXJ0Oi0ycHg7YmxvY2stc2l6ZToycHg7Ym9yZGVyLXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpIHZhcigtLWNhbGNpdGUtYm9yZGVyLXJhZGl1cykgMCAwfS5hbGVydC1kaXNtaXNzLXByb2dyZXNzOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWJsb2NrLXN0YXJ0OjBweDtkaXNwbGF5OmJsb2NrO2Jsb2NrLXNpemU6MnB4O2NvbnRlbnQ6XFxcIlxcXCI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLWFsZXJ0LWRpc21pc3MtcHJvZ3Jlc3MtYmFja2dyb3VuZCk7aW5zZXQtaW5saW5lLWVuZDowfS5hY3Rpb25zLWVuZHtkaXNwbGF5OmZsZXg7YWxpZ24tc2VsZjpzdHJldGNofTpob3N0KFtraW5kPWJyYW5kXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stc3RhcnQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW2tpbmQ9YnJhbmRdKSAuY29udGFpbmVyIC5hbGVydC1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtraW5kPWluZm9dKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1zdGFydC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWluZm8pfTpob3N0KFtraW5kPWluZm9dKSAuY29udGFpbmVyIC5hbGVydC1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktaW5mbyl9Omhvc3QoW2tpbmQ9ZGFuZ2VyXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stc3RhcnQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFtraW5kPWRhbmdlcl0pIC5jb250YWluZXIgLmFsZXJ0LWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFtraW5kPXN1Y2Nlc3NdKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1zdGFydC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXN1Y2Nlc3MpfTpob3N0KFtraW5kPXN1Y2Nlc3NdKSAuY29udGFpbmVyIC5hbGVydC1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktc3VjY2Vzcyl9Omhvc3QoW2tpbmQ9d2FybmluZ10pIC5jb250YWluZXJ7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktd2FybmluZyl9Omhvc3QoW2tpbmQ9d2FybmluZ10pIC5jb250YWluZXIgLmFsZXJ0LWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS13YXJuaW5nKX06aG9zdChbYXV0by1jbG9zZS1kdXJhdGlvbj1mYXN0XSkgLmFsZXJ0LWRpc21pc3MtcHJvZ3Jlc3M6YWZ0ZXJ7YW5pbWF0aW9uOmRpc21pc3NQcm9ncmVzcyA2MDAwbXMgZWFzZS1vdXR9Omhvc3QoOmhvdmVyW2F1dG8tY2xvc2UtZHVyYXRpb249ZmFzdF0pIC5hbGVydC1kaXNtaXNzLXByb2dyZXNzOmFmdGVye2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH06aG9zdChbYXV0by1jbG9zZS1kdXJhdGlvbj1tZWRpdW1dKSAuYWxlcnQtZGlzbWlzcy1wcm9ncmVzczphZnRlcnthbmltYXRpb246ZGlzbWlzc1Byb2dyZXNzIDEwMDAwbXMgZWFzZS1vdXR9Omhvc3QoOmhvdmVyW2F1dG8tY2xvc2UtZHVyYXRpb249bWVkaXVtXSkgLmFsZXJ0LWRpc21pc3MtcHJvZ3Jlc3M6YWZ0ZXJ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkfTpob3N0KFthdXRvLWNsb3NlLWR1cmF0aW9uPXNsb3ddKSAuYWxlcnQtZGlzbWlzcy1wcm9ncmVzczphZnRlcnthbmltYXRpb246ZGlzbWlzc1Byb2dyZXNzIDE0MDAwbXMgZWFzZS1vdXR9Omhvc3QoOmhvdmVyW2F1dG8tY2xvc2UtZHVyYXRpb249c2xvd10pIC5hbGVydC1kaXNtaXNzLXByb2dyZXNzOmFmdGVye2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH1Aa2V5ZnJhbWVzIGRpc21pc3NQcm9ncmVzc3swJXtpbmxpbmUtc2l6ZTowcHg7b3BhY2l0eTowLjc1fTEwMCV7aW5saW5lLXNpemU6MTAwJTtvcGFjaXR5OjF9fS5jb250YWluZXIuc2xvdHRlZC1pbi1zaGVsbHtwb3NpdGlvbjphYnNvbHV0ZX1cIjtcblxuY29uc3QgQWxlcnQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUFsZXJ0QmVmb3JlQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVBbGVydEJlZm9yZUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUFsZXJ0Q2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVBbGVydENsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUFsZXJ0QmVmb3JlT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUFsZXJ0QmVmb3JlT3BlblwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVBbGVydE9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVBbGVydE9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxBbGVydFN5bmMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbEFsZXJ0U3luY1wiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFsZXJ0UmVnaXN0ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbEFsZXJ0UmVnaXN0ZXJcIiwgNik7XG4gICAgdGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQgPSBudWxsO1xuICAgIHRoaXMudG90YWxPcGVuVGltZSA9IDA7XG4gICAgdGhpcy50b3RhbEhvdmVyVGltZSA9IDA7XG4gICAgdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgPSBcIm9wYWNpdHlcIjtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkVsID0gZWw7XG4gICAgICBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIH07XG4gICAgLyoqIGNsb3NlIGFuZCBlbWl0IGNhbGNpdGVJbnRlcm5hbEFsZXJ0U3luYyBldmVudCB3aXRoIHRoZSB1cGRhdGVkIHF1ZXVlIHBheWxvYWQgKi9cbiAgICB0aGlzLmNsb3NlQWxlcnQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmF1dG9DbG9zZVRpbWVvdXRJZCA9IG51bGw7XG4gICAgICB0aGlzLnF1ZXVlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLnF1ZXVlID0gdGhpcy5xdWV1ZS5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gdGhpcy5lbCk7XG4gICAgICB0aGlzLmRldGVybWluZUFjdGl2ZUFsZXJ0KCk7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFsZXJ0U3luYy5lbWl0KHsgcXVldWU6IHRoaXMucXVldWUgfSk7XG4gICAgfTtcbiAgICB0aGlzLmFjdGlvbnNFbmRTbG90Q2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNFbmRBY3Rpb25zID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlT3ZlciA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQpO1xuICAgICAgdGhpcy50b3RhbE9wZW5UaW1lID0gRGF0ZS5ub3coKSAtIHRoaXMuaW5pdGlhbE9wZW5UaW1lO1xuICAgICAgdGhpcy5sYXN0TW91c2VPdmVyQmVnaW4gPSBEYXRlLm5vdygpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICAgY29uc3QgaG92ZXJEdXJhdGlvbiA9IERhdGUubm93KCkgLSB0aGlzLmxhc3RNb3VzZU92ZXJCZWdpbjtcbiAgICAgIGNvbnN0IHRpbWVSZW1haW5pbmcgPSBEVVJBVElPTlNbdGhpcy5hdXRvQ2xvc2VEdXJhdGlvbl0gLSB0aGlzLnRvdGFsT3BlblRpbWUgKyB0aGlzLnRvdGFsSG92ZXJUaW1lO1xuICAgICAgdGhpcy50b3RhbEhvdmVyVGltZSA9IHRoaXMudG90YWxIb3ZlclRpbWUgPyBob3ZlckR1cmF0aW9uICsgdGhpcy50b3RhbEhvdmVyVGltZSA6IGhvdmVyRHVyYXRpb247XG4gICAgICB0aGlzLmF1dG9DbG9zZVRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xvc2VBbGVydCgpLCB0aW1lUmVtYWluaW5nKTtcbiAgICB9O1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuYXV0b0Nsb3NlID0gZmFsc2U7XG4gICAgdGhpcy5hdXRvQ2xvc2VEdXJhdGlvbiA9IFwibWVkaXVtXCI7XG4gICAgdGhpcy5raW5kID0gXCJicmFuZFwiO1xuICAgIHRoaXMuaWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBsYWNlbWVudCA9IFwiYm90dG9tXCI7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2xvdHRlZEluU2hlbGwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGFzRW5kQWN0aW9ucyA9IGZhbHNlO1xuICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICB0aGlzLnF1ZXVlTGVuZ3RoID0gMDtcbiAgICB0aGlzLnF1ZXVlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWVzdGVkSWNvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICBvcGVuSGFuZGxlcigpIHtcbiAgICBpZiAodGhpcy5vcGVuICYmICF0aGlzLnF1ZXVlZCkge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxBbGVydFJlZ2lzdGVyLmVtaXQoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMucXVldWUgPSB0aGlzLnF1ZXVlLmZpbHRlcigoZWwpID0+IGVsICE9PSB0aGlzLmVsKTtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsQWxlcnRTeW5jLmVtaXQoeyBxdWV1ZTogdGhpcy5xdWV1ZSB9KTtcbiAgICB9XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIHVwZGF0ZVJlcXVlc3RlZEljb24oKSB7XG4gICAgdGhpcy5yZXF1ZXN0ZWRJY29uID0gc2V0UmVxdWVzdGVkSWNvbihLaW5kSWNvbnMsIHRoaXMuaWNvbiwgdGhpcy5raW5kKTtcbiAgfVxuICB1cGRhdGVEdXJhdGlvbigpIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2UgJiYgdGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsb3NlQWxlcnQoKSwgRFVSQVRJT05TW3RoaXMuYXV0b0Nsb3NlRHVyYXRpb25dKTtcbiAgICB9XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgY29uc3Qgb3BlbiA9IHRoaXMub3BlbjtcbiAgICBpZiAob3BlbiAmJiAhdGhpcy5xdWV1ZWQpIHtcbiAgICAgIHRoaXMub3BlbkhhbmRsZXIoKTtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsQWxlcnRSZWdpc3Rlci5lbWl0KCk7XG4gICAgfVxuICAgIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnJlcXVlc3RlZEljb24gPSBzZXRSZXF1ZXN0ZWRJY29uKEtpbmRJY29ucywgdGhpcy5pY29uLCB0aGlzLmtpbmQpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2FsY2l0ZUludGVybmFsQWxlcnRVbnJlZ2lzdGVyXCIsIHtcbiAgICAgIGRldGFpbDogeyBhbGVydDogdGhpcy5lbCB9XG4gICAgfSkpO1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQpO1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5xdWV1ZVRpbWVvdXQpO1xuICAgIGRpc2Nvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5zbG90dGVkSW5TaGVsbCA9IGZhbHNlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhhc0VuZEFjdGlvbnMgfSA9IHRoaXM7XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLmNsb3NlLCBjbGFzczogXCJhbGVydC1jbG9zZVwiLCBvbkNsaWNrOiB0aGlzLmNsb3NlQWxlcnQsIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5jbG9zZUJ1dHRvbiA9IGVsKSB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJ4XCIsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcImxcIiA/IFwibVwiIDogXCJzXCIgfSkpKTtcbiAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgc2lnbkRpc3BsYXk6IFwiYWx3YXlzXCJcbiAgICB9O1xuICAgIGNvbnN0IHF1ZXVlTnVtYmVyID0gdGhpcy5xdWV1ZUxlbmd0aCA+IDIgPyB0aGlzLnF1ZXVlTGVuZ3RoIC0gMSA6IDE7XG4gICAgY29uc3QgcXVldWVUZXh0ID0gbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdHRlci5mb3JtYXQocXVldWVOdW1iZXIpO1xuICAgIGNvbnN0IHF1ZXVlQ291bnQgPSAoaChcImRpdlwiLCB7IGNsYXNzOiBgJHt0aGlzLnF1ZXVlTGVuZ3RoID4gMSA/IFwiYWN0aXZlIFwiIDogXCJcIn1hbGVydC1xdWV1ZS1jb3VudGAgfSwgaChcImNhbGNpdGUtY2hpcFwiLCB7IHNjYWxlOiB0aGlzLnNjYWxlLCB2YWx1ZTogcXVldWVUZXh0IH0sIHF1ZXVlVGV4dCkpKTtcbiAgICBjb25zdCB7IG9wZW4sIGF1dG9DbG9zZSwgbGFiZWwsIHBsYWNlbWVudCwgcXVldWVkLCByZXF1ZXN0ZWRJY29uLCBpY29uRmxpcFJ0bCB9ID0gdGhpcztcbiAgICBjb25zdCByb2xlID0gYXV0b0Nsb3NlID8gXCJhbGVydFwiIDogXCJhbGVydGRpYWxvZ1wiO1xuICAgIGNvbnN0IGhpZGRlbiA9ICFvcGVuO1xuICAgIGNvbnN0IHNsb3ROb2RlID0gKGgoXCJzbG90XCIsIHsga2V5OiBcImFjdGlvbnNFbmRTbG90XCIsIG5hbWU6IFNMT1RTLmFjdGlvbnNFbmQsIG9uU2xvdGNoYW5nZTogdGhpcy5hY3Rpb25zRW5kU2xvdENoYW5nZUhhbmRsZXIgfSkpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IFwiYXJpYS1oaWRkZW5cIjogdG9BcmlhQm9vbGVhbihoaWRkZW4pLCBcImFyaWEtbGFiZWxcIjogbGFiZWwsIFwiY2FsY2l0ZS1oeWRyYXRlZC1oaWRkZW5cIjogaGlkZGVuLCByb2xlOiByb2xlIH0sIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBjb250YWluZXI6IHRydWUsXG4gICAgICAgIHF1ZXVlZCxcbiAgICAgICAgW3BsYWNlbWVudF06IHRydWUsXG4gICAgICAgIFtDU1Muc2xvdHRlZEluU2hlbGxdOiB0aGlzLnNsb3R0ZWRJblNoZWxsXG4gICAgICB9LCBvblBvaW50ZXJFbnRlcjogdGhpcy5hdXRvQ2xvc2UgJiYgdGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQgPyB0aGlzLmhhbmRsZU1vdXNlT3ZlciA6IG51bGwsIG9uUG9pbnRlckxlYXZlOiB0aGlzLmF1dG9DbG9zZSAmJiB0aGlzLmF1dG9DbG9zZVRpbWVvdXRJZCA/IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSA6IG51bGwsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRUcmFuc2l0aW9uRWwgfSwgcmVxdWVzdGVkSWNvbiA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtaWNvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBmbGlwUnRsOiBpY29uRmxpcFJ0bCwgaWNvbjogcmVxdWVzdGVkSWNvbiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkpIDogbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWNvbnRlbnRcIiB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLnRpdGxlIH0pLCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLm1lc3NhZ2UgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMubGluayB9KSksIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmFjdGlvbnNFbmQsIGhpZGRlbjogIWhhc0VuZEFjdGlvbnMgfSwgc2xvdE5vZGUpLCB0aGlzLnF1ZXVlTGVuZ3RoID4gMSA/IHF1ZXVlQ291bnQgOiBudWxsLCBjbG9zZUJ1dHRvbiwgb3BlbiAmJiAhcXVldWVkICYmIGF1dG9DbG9zZSA/IGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1kaXNtaXNzLXByb2dyZXNzXCIgfSkgOiBudWxsKSkpO1xuICB9XG4gIC8vIHdoZW4gYW4gYWxlcnQgaXMgb3BlbmVkIG9yIGNsb3NlZCwgdXBkYXRlIHF1ZXVlIGFuZCBkZXRlcm1pbmUgYWN0aXZlIGFsZXJ0XG4gIGFsZXJ0U3luYyhldmVudCkge1xuICAgIGlmICh0aGlzLnF1ZXVlICE9PSBldmVudC5kZXRhaWwucXVldWUpIHtcbiAgICAgIHRoaXMucXVldWUgPSBldmVudC5kZXRhaWwucXVldWU7XG4gICAgfVxuICAgIHRoaXMucXVldWVMZW5ndGggPSB0aGlzLnF1ZXVlLmxlbmd0aDtcbiAgICB0aGlzLmRldGVybWluZUFjdGl2ZUFsZXJ0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbiAgLy8gd2hlbiBhbiBhbGVydCBpcyBmaXJzdCByZWdpc3RlcmVkLCB0cmlnZ2VyIGEgcXVldWUgc3luY1xuICBhbGVydFJlZ2lzdGVyKCkge1xuICAgIGlmICh0aGlzLm9wZW4gJiYgIXRoaXMucXVldWUuaW5jbHVkZXModGhpcy5lbCkpIHtcbiAgICAgIHRoaXMucXVldWVkID0gdHJ1ZTtcbiAgICAgIHRoaXMucXVldWUucHVzaCh0aGlzLmVsKTtcbiAgICB9XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxBbGVydFN5bmMuZW1pdCh7IHF1ZXVlOiB0aGlzLnF1ZXVlIH0pO1xuICAgIHRoaXMuZGV0ZXJtaW5lQWN0aXZlQWxlcnQoKTtcbiAgfVxuICAvLyBFdmVudCBpcyBkaXNwYXRjaGVkIG9uIHRoZSB3aW5kb3cgYmVjYXVzZSB0aGUgZWxlbWVudCBpcyBub3QgaW4gdGhlIERPTSBzbyBidWJibGluZyB3b24ndCBvY2N1ci5cbiAgYWxlcnRVbnJlZ2lzdGVyKGV2ZW50KSB7XG4gICAgY29uc3QgcXVldWUgPSB0aGlzLnF1ZXVlLmZpbHRlcigoZWwpID0+IGVsICE9PSBldmVudC5kZXRhaWwuYWxlcnQpO1xuICAgIHRoaXMucXVldWUgPSBxdWV1ZTtcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjYWxjaXRlSW50ZXJuYWxBbGVydFN5bmNcIiwge1xuICAgICAgZGV0YWlsOiB7IHF1ZXVlIH1cbiAgICB9KSk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvKiogU2V0cyBmb2N1cyBvbiB0aGUgY29tcG9uZW50J3MgXCJjbG9zZVwiIGJ1dHRvbiAodGhlIGZpcnN0IGZvY3VzYWJsZSBpdGVtKS4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGNvbnN0IGFsZXJ0TGlua0VsID0gZ2V0U2xvdHRlZCh0aGlzLmVsLCB7IHNlbGVjdG9yOiBcImNhbGNpdGUtbGlua1wiIH0pO1xuICAgIGlmICghdGhpcy5jbG9zZUJ1dHRvbiAmJiAhYWxlcnRMaW5rRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYWxlcnRMaW5rRWwpIHtcbiAgICAgIGFsZXJ0TGlua0VsLnNldEZvY3VzKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuY2xvc2VCdXR0b24pIHtcbiAgICAgIHRoaXMuY2xvc2VCdXR0b24uZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlQ2hhbmdlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgfVxuICAvKiogZGV0ZXJtaW5lIHdoaWNoIGFsZXJ0IGlzIGFjdGl2ZSAqL1xuICBkZXRlcm1pbmVBY3RpdmVBbGVydCgpIHtcbiAgICBpZiAodGhpcy5xdWV1ZT8uWzBdID09PSB0aGlzLmVsKSB7XG4gICAgICB0aGlzLm9wZW5BbGVydCgpO1xuICAgICAgaWYgKHRoaXMuYXV0b0Nsb3NlICYmICF0aGlzLmF1dG9DbG9zZVRpbWVvdXRJZCkge1xuICAgICAgICB0aGlzLmluaXRpYWxPcGVuVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuYXV0b0Nsb3NlVGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbG9zZUFsZXJ0KCksIERVUkFUSU9OU1t0aGlzLmF1dG9DbG9zZUR1cmF0aW9uXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBvbkJlZm9yZU9wZW4oKSB7XG4gICAgdGhpcy5jYWxjaXRlQWxlcnRCZWZvcmVPcGVuLmVtaXQoKTtcbiAgfVxuICBvbk9wZW4oKSB7XG4gICAgdGhpcy5jYWxjaXRlQWxlcnRPcGVuLmVtaXQoKTtcbiAgfVxuICBvbkJlZm9yZUNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZUFsZXJ0QmVmb3JlQ2xvc2UuZW1pdCgpO1xuICB9XG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy5jYWxjaXRlQWxlcnRDbG9zZS5lbWl0KCk7XG4gIH1cbiAgLyoqIHJlbW92ZSBxdWV1ZWQgY2xhc3MgYWZ0ZXIgYW5pbWF0aW9uIGNvbXBsZXRlcyAqL1xuICBvcGVuQWxlcnQoKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnF1ZXVlVGltZW91dCk7XG4gICAgdGhpcy5xdWV1ZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiAodGhpcy5xdWV1ZWQgPSBmYWxzZSksIDMwMCk7XG4gIH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcIm9wZW5cIjogW1wib3BlbkhhbmRsZXJcIl0sXG4gICAgXCJtZXNzYWdlT3ZlcnJpZGVzXCI6IFtcIm9uTWVzc2FnZXNDaGFuZ2VcIl0sXG4gICAgXCJpY29uXCI6IFtcInVwZGF0ZVJlcXVlc3RlZEljb25cIl0sXG4gICAgXCJraW5kXCI6IFtcInVwZGF0ZVJlcXVlc3RlZEljb25cIl0sXG4gICAgXCJhdXRvQ2xvc2VEdXJhdGlvblwiOiBbXCJ1cGRhdGVEdXJhdGlvblwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl1cbiAgfTsgfVxufTtcbkFsZXJ0LnN0eWxlID0gYWxlcnRDc3M7XG5cbmV4cG9ydCB7IEFsZXJ0IGFzIGNhbGNpdGVfYWxlcnQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBzdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyBcInNldFVwTG9hZGFibGVDb21wb25lbnRcIiBhbmQgXCJzZXRDb21wb25lbnRMb2FkZWRcIiB0byBiZSBjYWxsZWQgZmlyc3QuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHByb21pc2VNYXAuZ2V0KGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IHNldENvbXBvbmVudExvYWRlZCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYywgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBzIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgZSBhcyByZWFkVGFzayB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuXG5jb25zdCBjb21wb25lbnRUb1RyYW5zaXRpb25MaXN0ZW5lcnMgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gdHJhbnNpdGlvblN0YXJ0KGV2ZW50KSB7XG4gIGlmIChldmVudC5wcm9wZXJ0eU5hbWUgPT09IHRoaXMub3BlblRyYW5zaXRpb25Qcm9wICYmIGV2ZW50LnRhcmdldCA9PT0gdGhpcy50cmFuc2l0aW9uRWwpIHtcbiAgICB0aGlzLm9wZW4gPyB0aGlzLm9uQmVmb3JlT3BlbigpIDogdGhpcy5vbkJlZm9yZUNsb3NlKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgJiYgZXZlbnQudGFyZ2V0ID09PSB0aGlzLnRyYW5zaXRpb25FbCkge1xuICAgIHRoaXMub3BlbiA/IHRoaXMub25PcGVuKCkgOiB0aGlzLm9uQ2xvc2UoKTtcbiAgfVxufVxuLyoqXG4gKiBIZWxwZXIgdG8gZGV0ZXJtaW5lIGdsb2JhbGx5IHNldCB0cmFuc2l0aW9uIGR1cmF0aW9uIG9uIHRoZSBnaXZlbiBvcGVuVHJhbnNpdGlvblByb3AsIHdoaWNoIGlzIGltcG9ydGVkIGFuZCBzZXQgaW4gdGhlIEBXYXRjaChcIm9wZW5cIikuXG4gKiBVc2VkIHRvIGVtaXQgKGJlZm9yZSlvcGVuL2Nsb3NlIGV2ZW50cyBib3RoIGZvciB3aGVuIHRoZSBvcGFjaXR5IHRyYW5zaXRpb24gaXMgcHJlc2VudCBhbmQgd2hlbiB0aGVyZSBpcyBub25lICh0cmFuc2l0aW9uLWR1cmF0aW9uIGlzIHNldCB0byAwKS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gbm9uT3BlbkNsb3NlQ29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50KGNvbXBvbmVudCwgbm9uT3BlbkNsb3NlQ29tcG9uZW50ID0gZmFsc2UpIHtcbiAgcmVhZFRhc2soKCkgPT4ge1xuICAgIGlmIChjb21wb25lbnQudHJhbnNpdGlvbkVsKSB7XG4gICAgICBjb25zdCBhbGxUcmFuc2l0aW9uUHJvcHNBcnJheSA9IGdldENvbXB1dGVkU3R5bGUoY29tcG9uZW50LnRyYW5zaXRpb25FbCkudHJhbnNpdGlvbi5zcGxpdChcIiBcIik7XG4gICAgICBjb25zdCBvcGVuVHJhbnNpdGlvblByb3BJbmRleCA9IGFsbFRyYW5zaXRpb25Qcm9wc0FycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gY29tcG9uZW50Lm9wZW5UcmFuc2l0aW9uUHJvcCk7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBhbGxUcmFuc2l0aW9uUHJvcHNBcnJheVtvcGVuVHJhbnNpdGlvblByb3BJbmRleCArIDFdO1xuICAgICAgaWYgKHRyYW5zaXRpb25EdXJhdGlvbiA9PT0gXCIwc1wiKSB7XG4gICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGNvbXBvbmVudC5vcGVuKVxuICAgICAgICAgID8gY29tcG9uZW50Lm9uQmVmb3JlT3BlbigpXG4gICAgICAgICAgOiBjb21wb25lbnQub25CZWZvcmVDbG9zZSgpO1xuICAgICAgICAobm9uT3BlbkNsb3NlQ29tcG9uZW50ID8gY29tcG9uZW50W2NvbXBvbmVudC50cmFuc2l0aW9uUHJvcF0gOiBjb21wb25lbnQub3BlbilcbiAgICAgICAgICA/IGNvbXBvbmVudC5vbk9wZW4oKVxuICAgICAgICAgIDogY29tcG9uZW50Lm9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uc3RhcnRcIiwgKCkgPT4ge1xuICAgICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGNvbXBvbmVudC5vcGVuKVxuICAgICAgICAgICAgPyBjb21wb25lbnQub25CZWZvcmVPcGVuKClcbiAgICAgICAgICAgIDogY29tcG9uZW50Lm9uQmVmb3JlQ2xvc2UoKTtcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAobm9uT3BlbkNsb3NlQ29tcG9uZW50ID8gY29tcG9uZW50W2NvbXBvbmVudC50cmFuc2l0aW9uUHJvcF0gOiBjb21wb25lbnQub3BlbilcbiAgICAgICAgICAgID8gY29tcG9uZW50Lm9uT3BlbigpXG4gICAgICAgICAgICA6IGNvbXBvbmVudC5vbkNsb3NlKCk7XG4gICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8ga2VlcCB0cmFjayBvZiB0cmFuc2l0aW9uIGxpc3RlbmVycyBvbiBzZXRUcmFuc2l0aW9uRWwgYW5kIGNvbm5lY3RlZENhbGxiYWNrIG9uIE9wZW5DbG9zZUNvbXBvbmVudCBjb21wb25lbnRzLlxuICpcbiAqIEZvciBjb21wb25lbnQgd2hpY2ggZG8gbm90IGhhdmUgb3BlbiBwcm9wLCB1c2UgYG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50YCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGRpc2Nvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQoY29tcG9uZW50KTtcbiAgaWYgKGNvbXBvbmVudC50cmFuc2l0aW9uRWwpIHtcbiAgICBjb25zdCBib3VuZE9uVHJhbnNpdGlvblN0YXJ0ID0gdHJhbnNpdGlvblN0YXJ0LmJpbmQoY29tcG9uZW50KTtcbiAgICBjb25zdCBib3VuZE9uVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQuYmluZChjb21wb25lbnQpO1xuICAgIGNvbXBvbmVudFRvVHJhbnNpdGlvbkxpc3RlbmVycy5zZXQoY29tcG9uZW50LCBbXG4gICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLFxuICAgICAgYm91bmRPblRyYW5zaXRpb25TdGFydCxcbiAgICAgIGJvdW5kT25UcmFuc2l0aW9uRW5kXG4gICAgXSk7XG4gICAgY29tcG9uZW50LnRyYW5zaXRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbnN0YXJ0XCIsIGJvdW5kT25UcmFuc2l0aW9uU3RhcnQpO1xuICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgYm91bmRPblRyYW5zaXRpb25FbmQpO1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gdHJhbnNpdGlvbiBsaXN0ZW5lcnMgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2sgb24gT3BlbkNsb3NlQ29tcG9uZW50IGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBpZiAoIWNvbXBvbmVudFRvVHJhbnNpdGlvbkxpc3RlbmVycy5oYXMoY29tcG9uZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBbdHJhbnNpdGlvbkVsLCBzdGFydCwgZW5kXSA9IGNvbXBvbmVudFRvVHJhbnNpdGlvbkxpc3RlbmVycy5nZXQoY29tcG9uZW50KTtcbiAgdHJhbnNpdGlvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uc3RhcnRcIiwgc3RhcnQpO1xuICB0cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kKTtcbiAgY29tcG9uZW50VG9UcmFuc2l0aW9uTGlzdGVuZXJzLmRlbGV0ZShjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IGFzIGMsIGRpc2Nvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQgYXMgZCwgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQgYXMgbyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbnZhciBLaW5kSWNvbnM7XG4oZnVuY3Rpb24gKEtpbmRJY29ucykge1xuICBLaW5kSWNvbnNbXCJicmFuZFwiXSA9IFwibGlnaHRidWxiXCI7XG4gIEtpbmRJY29uc1tcImRhbmdlclwiXSA9IFwiZXhjbGFtYXRpb25NYXJrVHJpYW5nbGVcIjtcbiAgS2luZEljb25zW1wiaW5mb1wiXSA9IFwiaW5mb3JtYXRpb25cIjtcbiAgS2luZEljb25zW1wic3VjY2Vzc1wiXSA9IFwiY2hlY2tDaXJjbGVcIjtcbiAgS2luZEljb25zW1wid2FybmluZ1wiXSA9IFwiZXhjbGFtYXRpb25NYXJrVHJpYW5nbGVcIjtcbn0pKEtpbmRJY29ucyB8fCAoS2luZEljb25zID0ge30pKTtcblxuZXhwb3J0IHsgS2luZEljb25zIGFzIEsgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==