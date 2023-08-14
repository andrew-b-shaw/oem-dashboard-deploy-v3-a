"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-alert_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-alert.entry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-alert.entry.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_alert": () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable-af146fd5.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/* harmony import */ var _openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openCloseComponent-a26b009f.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-a26b009f.js");
/* harmony import */ var _t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./t9n-a3e12422.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js");
/* harmony import */ var _resources_c0bc41e5_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources-c0bc41e5.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-c0bc41e5.js");
/* harmony import */ var _guid_d5943b83_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guid-d5943b83.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-d5943b83.js");
/* harmony import */ var _resources_d08a6737_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources-d08a6737.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-d08a6737.js");
/* harmony import */ var _key_3389d870_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./key-3389d870.js */ "./node_modules/@esri/calcite-components/dist/esm/key-3389d870.js");
/* harmony import */ var _observers_c20ec2dd_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./observers-c20ec2dd.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-c20ec2dd.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
    (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteAlertBeforeClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteAlertBeforeClose", 6);
    this.calciteAlertClose = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteAlertClose", 6);
    this.calciteAlertBeforeOpen = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteAlertBeforeOpen", 6);
    this.calciteAlertOpen = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteAlertOpen", 6);
    this.calciteInternalAlertSync = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalAlertSync", 6);
    this.calciteInternalAlertRegister = (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalAlertRegister", 6);
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
      (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
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
      this.hasEndActions = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.d)(event);
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
    this.autoCloseDuration = this.autoClose ? "medium" : null;
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
    this.requestedIcon = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.e)(_resources_c0bc41e5_js__WEBPACK_IMPORTED_MODULE_6__.K, this.icon, this.kind);
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
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    const open = this.open;
    if (open && !this.queued) {
      this.openHandler();
      this.calciteInternalAlertRegister.emit();
    }
    (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
    this.requestedIcon = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.e)(_resources_c0bc41e5_js__WEBPACK_IMPORTED_MODULE_6__.K, this.icon, this.kind);
    await (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.a)(this);
  }
  disconnectedCallback() {
    window.clearTimeout(this.autoCloseTimeoutId);
    window.clearTimeout(this.queueTimeout);
    (0,_openCloseComponent_a26b009f_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    this.slottedInShell = false;
  }
  render() {
    const { hasEndActions } = this;
    const closeButton = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.messages.close, class: "alert-close", onClick: this.closeAlert, type: "button",
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.closeButton = el) }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "x", scale: this.scale === "l" ? "m" : "s" })));
    _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatOptions = {
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem,
      signDisplay: "always"
    };
    const queueNumber = this.queueLength > 2 ? this.queueLength - 1 : 1;
    const queueText = _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_3__.n.numberFormatter.format(queueNumber);
    const queueCount = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${this.queueLength > 1 ? "active " : ""}alert-queue-count` }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-chip", { scale: this.scale, value: queueText }, queueText)));
    const { open, autoClose, label, placement, queued, requestedIcon, iconFlipRtl } = this;
    const role = autoClose ? "alert" : "alertdialog";
    const hidden = !open;
    const slotNode = ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { key: "actionsEndSlot", name: SLOTS.actionsEnd, onSlotchange: this.actionsEndSlotChangeHandler }));
    return ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-hidden": (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.t)(hidden), "aria-label": label, "calcite-hydrated-hidden": hidden, role: role }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        container: true,
        queued,
        [placement]: true,
        [CSS.slottedInShell]: this.slottedInShell
      }, onPointerEnter: this.autoClose && this.autoCloseTimeoutId ? this.handleMouseOver : null, onPointerLeave: this.autoClose && this.autoCloseTimeoutId ? this.handleMouseLeave : null,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTransitionEl }, requestedIcon ? ((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "alert-icon" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { flipRtl: iconFlipRtl, icon: requestedIcon, scale: this.scale === "l" ? "m" : "s" }))) : null, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "alert-content" }, (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.title }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.message }), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.link })), (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.actionsEnd, hidden: !hasEndActions }, slotNode), this.queueLength > 1 ? queueCount : null, closeButton, open && !queued && autoClose ? (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "alert-dismiss-progress" }) : null)));
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
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's "close" button (the first focusable item). */
  async setFocus() {
    await (0,_loadable_af146fd5_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    const alertLinkEl = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el, { selector: "calcite-link" });
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
    (0,_t9n_a3e12422_js__WEBPACK_IMPORTED_MODULE_5__.u)(this, this.effectiveLocale);
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
  get el() { return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
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

/***/ "./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/loadable-af146fd5.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ setComponentLoaded),
/* harmony export */   "c": () => (/* binding */ componentLoaded),
/* harmony export */   "s": () => (/* binding */ setUpLoadableComponent)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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

/***/ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-a26b009f.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-a26b009f.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectOpenCloseComponent),
/* harmony export */   "d": () => (/* binding */ disconnectOpenCloseComponent),
/* harmony export */   "o": () => (/* binding */ onToggleOpenCloseComponent)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
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
  (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.e)(() => {
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

/***/ "./node_modules/@esri/calcite-components/dist/esm/resources-c0bc41e5.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/resources-c0bc41e5.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ KindIcons)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
var KindIcons;
(function (KindIcons) {
  KindIcons["brand"] = "lightbulb";
  KindIcons["danger"] = "exclamationMarkTriangle";
  KindIcons["info"] = "information";
  KindIcons["success"] = "checkCircle";
  KindIcons["warning"] = "exclamationMarkTriangle";
})(KindIcons || (KindIcons = {}));




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/t9n-a3e12422.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ connectMessages),
/* harmony export */   "d": () => (/* binding */ disconnectMessages),
/* harmony export */   "s": () => (/* binding */ setUpMessages),
/* harmony export */   "u": () => (/* binding */ updateMessages)
/* harmony export */ });
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/* harmony import */ var _locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-b3c44dda.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-b3c44dda.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */



const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
  const key = `${component}_${lang}`;
  if (componentLangToMessageBundleCache[key]) {
    return componentLangToMessageBundleCache[key];
  }
  componentLangToMessageBundleCache[key] = fetch((0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_0__.g)(`./assets/${component}/t9n/messages_${lang}.json`))
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
  return getMessageBundle((0,_locale_b3c44dda_js__WEBPACK_IMPORTED_MODULE_1__.g)(lang, "t9n"), componentName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvZWI2MDI5NTMxMTc5YzEwNjgyMzhjM2ZmY2QwZDAzNzUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RztBQUNxQjtBQUNkO0FBQ0Q7QUFDRTtBQUNNO0FBQ2xFO0FBQzdCO0FBQ0s7QUFDTjtBQUNNOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGlCQUFpQiwyQkFBMkIsMkNBQTJDLDRDQUE0Qyx3RkFBd0Ysc0NBQXNDLGtCQUFrQiw0RkFBNEYsc0NBQXNDLGtCQUFrQixzRkFBc0Ysc0NBQXNDLGtCQUFrQixvQ0FBb0MscUJBQXFCLDRCQUE0QixrQ0FBa0MsOEJBQThCLGVBQWUsaUJBQWlCLDJCQUEyQiw0Q0FBNEMseUNBQXlDLHdGQUF3RixxQ0FBcUMsa0JBQWtCLDRG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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hRbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRHRGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU4Rzs7Ozs7Ozs7Ozs7Ozs7O0FDMUY5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhCQUE4Qjs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3RDtBQUNPOztBQUUvRDtBQUNBO0FBQ0EsaUJBQWlCLFVBQVUsR0FBRyxLQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxxREFBWSxhQUFhLFVBQVUsZ0JBQWdCLEtBQUs7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBSztBQUNmO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1hbGVydC5lbnRyeS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9sb2FkYWJsZS1hZjE0NmZkNS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9vcGVuQ2xvc2VDb21wb25lbnQtYTI2YjAwOWYuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vcmVzb3VyY2VzLWMwYmM0MWU1LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL3Q5bi1hM2UxMjQyMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuaW1wb3J0IHsgZCBhcyBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50LCBlIGFzIHNldFJlcXVlc3RlZEljb24sIHQgYXMgdG9BcmlhQm9vbGVhbiwgZyBhcyBnZXRTbG90dGVkIH0gZnJvbSAnLi9kb20tZjc0YTA5YjcuanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLWFmMTQ2ZmQ1LmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdExvY2FsaXplZCwgZCBhcyBkaXNjb25uZWN0TG9jYWxpemVkLCBuIGFzIG51bWJlclN0cmluZ0Zvcm1hdHRlciB9IGZyb20gJy4vbG9jYWxlLWIzYzQ0ZGRhLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IH0gZnJvbSAnLi9vcGVuQ2xvc2VDb21wb25lbnQtYTI2YjAwOWYuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHUgYXMgdXBkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1hM2UxMjQyMi5qcyc7XG5pbXBvcnQgeyBLIGFzIEtpbmRJY29ucyB9IGZyb20gJy4vcmVzb3VyY2VzLWMwYmM0MWU1LmpzJztcbmltcG9ydCAnLi9ndWlkLWQ1OTQzYjgzLmpzJztcbmltcG9ydCAnLi9yZXNvdXJjZXMtZDA4YTY3MzcuanMnO1xuaW1wb3J0ICcuL2tleS0zMzg5ZDg3MC5qcyc7XG5pbXBvcnQgJy4vb2JzZXJ2ZXJzLWMyMGVjMmRkLmpzJztcblxuY29uc3QgRFVSQVRJT05TID0ge1xuICBzbG93OiAxNDAwMCxcbiAgbWVkaXVtOiAxMDAwMCxcbiAgZmFzdDogNjAwMFxufTtcbmNvbnN0IFNMT1RTID0ge1xuICBhY3Rpb25zRW5kOiBcImFjdGlvbnMtZW5kXCIsXG4gIHRpdGxlOiBcInRpdGxlXCIsXG4gIG1lc3NhZ2U6IFwibWVzc2FnZVwiLFxuICBsaW5rOiBcImxpbmtcIlxufTtcbmNvbnN0IENTUyA9IHtcbiAgYWN0aW9uc0VuZDogXCJhY3Rpb25zLWVuZFwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNsb3NlOiBcImFsZXJ0LWNsb3NlXCIsXG4gIHNsb3R0ZWRJblNoZWxsOiBcInNsb3R0ZWQtaW4tc2hlbGxcIlxufTtcblxuY29uc3QgYWxlcnRDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbc2NhbGU9c10pey0tY2FsY2l0ZS1hbGVydC13aWR0aDo0MGVtOy0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLXNtYWxsOjAuNXJlbTstLWNhbGNpdGUtYWxlcnQtc3BhY2luZy10b2tlbi1sYXJnZTowLjc1cmVtfTpob3N0KFtzY2FsZT1zXSkgc2xvdFtuYW1lPXRpdGxlXTo6c2xvdHRlZCgqKSw6aG9zdChbc2NhbGU9c10pICo6OnNsb3R0ZWQoW3Nsb3Q9dGl0bGVdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1zXSkgc2xvdFtuYW1lPW1lc3NhZ2VdOjpzbG90dGVkKCopLDpob3N0KFtzY2FsZT1zXSkgKjo6c2xvdHRlZChbc2xvdD1tZXNzYWdlXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0yKTtsaW5lLWhlaWdodDoxLjM3NX06aG9zdChbc2NhbGU9c10pIHNsb3RbbmFtZT1saW5rXTo6c2xvdHRlZCgqKSw6aG9zdChbc2NhbGU9c10pICo6OnNsb3R0ZWQoW3Nsb3Q9bGlua10pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMik7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPXNdKSAuYWxlcnQtcXVldWUtY291bnR7bWFyZ2luLWlubGluZTowLjVyZW19Omhvc3QoW3NjYWxlPXNdKSAuY29udGFpbmVyey0tY2FsY2l0ZS1hbGVydC1taW4taGVpZ2h0OjMuNXJlbX06aG9zdChbc2NhbGU9c10pIC5hbGVydC1jbG9zZXtwYWRkaW5nOjAuNXJlbX06aG9zdChbc2NhbGU9bV0pey0tY2FsY2l0ZS1hbGVydC13aWR0aDo1MGVtOy0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLXNtYWxsOjAuNzVyZW07LS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tbGFyZ2U6MXJlbX06aG9zdChbc2NhbGU9bV0pIHNsb3RbbmFtZT10aXRsZV06OnNsb3R0ZWQoKiksOmhvc3QoW3NjYWxlPW1dKSAqOjpzbG90dGVkKFtzbG90PXRpdGxlXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApO2xpbmUtaGVpZ2h0OjEuMzc1fTpob3N0KFtzY2FsZT1tXSkgc2xvdFtuYW1lPW1lc3NhZ2VdOjpzbG90dGVkKCopLDpob3N0KFtzY2FsZT1tXSkgKjo6c2xvdHRlZChbc2xvdD1tZXNzYWdlXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKTtsaW5lLWhlaWdodDoxLjM3NX06aG9zdChbc2NhbGU9bV0pIHNsb3RbbmFtZT1saW5rXTo6c2xvdHRlZCgqKSw6aG9zdChbc2NhbGU9bV0pICo6OnNsb3R0ZWQoW3Nsb3Q9bGlua10pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPW1dKSAuYWxlcnQtcXVldWUtY291bnR7bWFyZ2luLWlubGluZTowLjc1cmVtfTpob3N0KFtzY2FsZT1tXSkgLmNvbnRhaW5lcnstLWNhbGNpdGUtYWxlcnQtbWluLWhlaWdodDo0LjE4NzVyZW19Omhvc3QoW3NjYWxlPWxdKXstLWNhbGNpdGUtYWxlcnQtd2lkdGg6NjBlbTstLWNhbGNpdGUtYWxlcnQtc3BhY2luZy10b2tlbi1zbWFsbDoxcmVtOy0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLWxhcmdlOjEuMjVyZW19Omhvc3QoW3NjYWxlPWxdKSBzbG90W25hbWU9dGl0bGVdOjpzbG90dGVkKCopLDpob3N0KFtzY2FsZT1sXSkgKjo6c2xvdHRlZChbc2xvdD10aXRsZV0pe21hcmdpbi1ibG9jay1lbmQ6MC4yNXJlbTtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMSk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPWxdKSBzbG90W25hbWU9bWVzc2FnZV06OnNsb3R0ZWQoKiksOmhvc3QoW3NjYWxlPWxdKSAqOjpzbG90dGVkKFtzbG90PW1lc3NhZ2VdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPWxdKSBzbG90W25hbWU9bGlua106OnNsb3R0ZWQoKiksOmhvc3QoW3NjYWxlPWxdKSAqOjpzbG90dGVkKFtzbG90PWxpbmtdKXtmb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCk7bGluZS1oZWlnaHQ6MS4zNzV9Omhvc3QoW3NjYWxlPWxdKSAuYWxlcnQtcXVldWUtY291bnR7bWFyZ2luLWlubGluZToxcmVtfTpob3N0KFtzY2FsZT1sXSkgLmNvbnRhaW5lcnstLWNhbGNpdGUtYWxlcnQtbWluLWhlaWdodDo1LjYyNXJlbX06aG9zdHstLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZToycmVtO2Rpc3BsYXk6YmxvY2t9Omhvc3QgLmNvbnRhaW5lcntwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC10b2FzdCk7bWFyZ2luLWJsb2NrOjBweDttYXJnaW4taW5saW5lOmF1dG87ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO29wYWNpdHk6MDstLXR3LXNoYWRvdzowIDZweCAyMHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCAxMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA4KTstLXR3LXNoYWRvdy1jb2xvcmVkOjAgNnB4IDIwcHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCAxMnB4IC0ycHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtib3gtc2hhZG93OnZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7Ym9yZGVyLXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpO2JvcmRlci1ibG9jay1zdGFydDowcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWlubGluZToxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7Ym9yZGVyLWJsb2NrLWVuZDoxcHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1ib3JkZXItMyk7bWluLWJsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1hbGVydC1taW4taGVpZ2h0KTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLWFsZXJ0LXdpZHRoKTttYXgtaW5saW5lLXNpemU6Y2FsYygxMDAlIC0gKHZhcigtLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZSkgKiAyICsgMnB4KSk7bWF4LWJsb2NrLXNpemU6MDt0cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNDQsIDAuNDIsIDAuODgpLCBvcGFjaXR5IHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNDQsIDAuNDIsIDAuODgpLCBhbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dH06aG9zdCAuY29udGFpbmVyLmJvdHRvbSw6aG9zdCAuY29udGFpbmVyLnRvcHtpbnNldC1pbmxpbmUtZW5kOjA7aW5zZXQtaW5saW5lLXN0YXJ0OjB9Omhvc3QgLmNvbnRhaW5lcltjbGFzcyo9Ym90dG9tXXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgdmFyKC0tY2FsY2l0ZS1hbGVydC1lZGdlLWRpc3RhbmNlKSwgMCk7aW5zZXQtYmxvY2stZW5kOnZhcigtLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZSl9Omhvc3QgLmNvbnRhaW5lcltjbGFzcyo9dG9wXXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgY2FsYygtMSAqIHZhcigtLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZSkpLCAwKTtpbnNldC1ibG9jay1zdGFydDp2YXIoLS1jYWxjaXRlLWFsZXJ0LWVkZ2UtZGlzdGFuY2UpfTpob3N0IC5jb250YWluZXJbY2xhc3MqPS1zdGFydF17aW5zZXQtaW5saW5lLXN0YXJ0OnZhcigtLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZSk7aW5zZXQtaW5saW5lLWVuZDphdXRvfTpob3N0IC5jb250YWluZXJbY2xhc3MqPS1lbmRde2luc2V0LWlubGluZS1lbmQ6dmFyKC0tY2FsY2l0ZS1hbGVydC1lZGdlLWRpc3RhbmNlKTtpbnNldC1pbmxpbmUtc3RhcnQ6YXV0b306aG9zdChbY2FsY2l0ZS1oeWRyYXRlZC1oaWRkZW5dKXt2aXNpYmlsaXR5OmhpZGRlbiAhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOm5vbmV9W2hpZGRlbl17ZGlzcGxheTpub25lfS5jb250YWluZXJ7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmFsZXJ0LWNsb3Nle291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnR9LmFsZXJ0LWNsb3NlOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHZhcigtLWNhbGNpdGUtdWktZm9jdXMtY29sb3IsIHZhcigtLWNhbGNpdGUtdWktYnJhbmQpKTtvdXRsaW5lLW9mZnNldDpjYWxjKFxcbiAgICAgICAgICAgIC0ycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX06aG9zdChbb3Blbl0pIC5jb250YWluZXI6bm90KC5xdWV1ZWQpe21heC1ibG9jay1zaXplOjEwMCU7Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjJweDtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6aW5pdGlhbH06aG9zdChbb3Blbl0pIC5jb250YWluZXI6bm90KC5xdWV1ZWQpW2NsYXNzKj1ib3R0b21de3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCBjYWxjKC0xICogdmFyKC0tY2FsY2l0ZS1hbGVydC1lZGdlLWRpc3RhbmNlKSksIGluaGVyaXQpfTpob3N0KFtvcGVuXSkgLmNvbnRhaW5lcjpub3QoLnF1ZXVlZClbY2xhc3MqPXRvcF17dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIHZhcigtLWNhbGNpdGUtYWxlcnQtZWRnZS1kaXN0YW5jZSksIGluaGVyaXQpfXNsb3RbbmFtZT10aXRsZV06OnNsb3R0ZWQoKiksKjo6c2xvdHRlZChbc2xvdD10aXRsZV0pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0wKTtsaW5lLWhlaWdodDoxLjM3NTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTEpfXNsb3RbbmFtZT1tZXNzYWdlXTo6c2xvdHRlZCgqKSwqOjpzbG90dGVkKFtzbG90PW1lc3NhZ2VdKXttYXJnaW46MHB4O2Rpc3BsYXk6aW5saW5lO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSk7bGluZS1oZWlnaHQ6MS4zNzU7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0yKTttYXJnaW4taW5saW5lLWVuZDowLjVyZW19c2xvdFtuYW1lPWxpbmtdOjpzbG90dGVkKCopLCo6OnNsb3R0ZWQoW3Nsb3Q9bGlua10pe2Rpc3BsYXk6aW5saW5lLWZsZXg7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LWxpbmspfS5hbGVydC1jb250ZW50e3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtYWxlcnQtc3BhY2luZy10b2tlbi1sYXJnZSk7ZmxleDowIDAgYXV0bztkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO292ZXJmbG93LXdyYXA6YnJlYWstd29yZDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmbGV4OjEgMSAwO21pbi1pbmxpbmUtc2l6ZTowO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLXNtYWxsKTtwYWRkaW5nLWlubGluZTowIHZhcigtLWNhbGNpdGUtYWxlcnQtc3BhY2luZy10b2tlbi1zbWFsbCk7Ym9yZGVyLXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpfS5hbGVydC1jb250ZW50OmZpcnN0LW9mLXR5cGU6bm90KDpvbmx5LWNoaWxkKXtwYWRkaW5nLWlubGluZS1zdGFydDp2YXIoLS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tbGFyZ2UpfS5hbGVydC1jb250ZW50Om9ubHktY2hpbGR7cGFkZGluZzp2YXIoLS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tc21hbGwpfS5hbGVydC1pY29ue3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLXNtYWxsKTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tbGFyZ2UpO2ZsZXg6MCAwIGF1dG87ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjthbGlnbi1zZWxmOnN0cmV0Y2g7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSk7cGFkZGluZy1ibG9jazowcHg7Ym9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpO2JvcmRlci1lbmQtc3RhcnQtcmFkaXVzOnZhcigtLWNhbGNpdGUtYm9yZGVyLXJhZGl1cyl9LmFsZXJ0LWNsb3Nle3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1hbGVydC1zcGFjaW5nLXRva2VuLXNtYWxsKTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLWFsZXJ0LXNwYWNpbmctdG9rZW4tbGFyZ2UpO2ZsZXg6MCAwIGF1dG87Y3Vyc29yOnBvaW50ZXI7YWxpZ24tc2VsZjpzdHJldGNoO292ZXJmbG93OmhpZGRlbjtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtwYWRkaW5nLWJsb2NrOjBweDtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMyk7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O2JvcmRlci1lbmQtZW5kLXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpO2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOnZhcigtLWNhbGNpdGUtYm9yZGVyLXJhZGl1cyl9LmFsZXJ0LWNsb3NlOmhvdmVyLC5hbGVydC1jbG9zZTpmb2N1c3tiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LmFsZXJ0LWNsb3NlOm9wZW57YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMyl9LmFsZXJ0LXF1ZXVlLWNvdW50e3Zpc2liaWxpdHk6aGlkZGVuO2Rpc3BsYXk6ZmxleDtjdXJzb3I6ZGVmYXVsdDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDthbGlnbi1zZWxmOnN0cmV0Y2g7b3ZlcmZsb3c6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZykgZWFzZS1pbi1vdXQgMHMsIG91dGxpbmUgMHMsIG91dGxpbmUtb2Zmc2V0IDBzO2JvcmRlci1pbmxpbmU6MHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1zdGFydC1lbmQtcmFkaXVzOjB9LmFsZXJ0LXF1ZXVlLWNvdW50LmFjdGl2ZXt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0eToxfTpob3N0KFthdXRvLWNsb3NlXSk+LmFsZXJ0LXF1ZXVlLWNvdW50e2JvcmRlci1pbmxpbmUtZW5kOjBweCBzb2xpZCB0cmFuc3BhcmVudH0uYWxlcnQtZGlzbWlzcy1wcm9ncmVzc3twb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO2lubGluZS1zaXplOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO2luc2V0LWlubGluZTowO2luc2V0LWJsb2NrLXN0YXJ0Oi0ycHg7YmxvY2stc2l6ZToycHg7Ym9yZGVyLXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpIHZhcigtLWNhbGNpdGUtYm9yZGVyLXJhZGl1cykgMCAwfS5hbGVydC1kaXNtaXNzLXByb2dyZXNzOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWJsb2NrLXN0YXJ0OjBweDtkaXNwbGF5OmJsb2NrO2Jsb2NrLXNpemU6MnB4O2NvbnRlbnQ6XFxcIlxcXCI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLWFsZXJ0LWRpc21pc3MtcHJvZ3Jlc3MtYmFja2dyb3VuZCk7aW5zZXQtaW5saW5lLWVuZDowfS5hY3Rpb25zLWVuZHtkaXNwbGF5OmZsZXg7YWxpZ24tc2VsZjpzdHJldGNofTpob3N0KFtraW5kPWJyYW5kXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stc3RhcnQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1icmFuZCl9Omhvc3QoW2tpbmQ9YnJhbmRdKSAuY29udGFpbmVyIC5hbGVydC1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtraW5kPWluZm9dKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1zdGFydC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWluZm8pfTpob3N0KFtraW5kPWluZm9dKSAuY29udGFpbmVyIC5hbGVydC1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktaW5mbyl9Omhvc3QoW2tpbmQ9ZGFuZ2VyXSkgLmNvbnRhaW5lcntib3JkZXItYmxvY2stc3RhcnQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFtraW5kPWRhbmdlcl0pIC5jb250YWluZXIgLmFsZXJ0LWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFtraW5kPXN1Y2Nlc3NdKSAuY29udGFpbmVye2JvcmRlci1ibG9jay1zdGFydC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXN1Y2Nlc3MpfTpob3N0KFtraW5kPXN1Y2Nlc3NdKSAuY29udGFpbmVyIC5hbGVydC1pY29ue2NvbG9yOnZhcigtLWNhbGNpdGUtdWktc3VjY2Vzcyl9Omhvc3QoW2tpbmQ9d2FybmluZ10pIC5jb250YWluZXJ7Ym9yZGVyLWJsb2NrLXN0YXJ0LWNvbG9yOnZhcigtLWNhbGNpdGUtdWktd2FybmluZyl9Omhvc3QoW2tpbmQ9d2FybmluZ10pIC5jb250YWluZXIgLmFsZXJ0LWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS13YXJuaW5nKX06aG9zdChbYXV0by1jbG9zZS1kdXJhdGlvbj1mYXN0XSkgLmFsZXJ0LWRpc21pc3MtcHJvZ3Jlc3M6YWZ0ZXJ7YW5pbWF0aW9uOmRpc21pc3NQcm9ncmVzcyA2MDAwbXMgZWFzZS1vdXR9Omhvc3QoOmhvdmVyW2F1dG8tY2xvc2UtZHVyYXRpb249ZmFzdF0pIC5hbGVydC1kaXNtaXNzLXByb2dyZXNzOmFmdGVye2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH06aG9zdChbYXV0by1jbG9zZS1kdXJhdGlvbj1tZWRpdW1dKSAuYWxlcnQtZGlzbWlzcy1wcm9ncmVzczphZnRlcnthbmltYXRpb246ZGlzbWlzc1Byb2dyZXNzIDEwMDAwbXMgZWFzZS1vdXR9Omhvc3QoOmhvdmVyW2F1dG8tY2xvc2UtZHVyYXRpb249bWVkaXVtXSkgLmFsZXJ0LWRpc21pc3MtcHJvZ3Jlc3M6YWZ0ZXJ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkfTpob3N0KFthdXRvLWNsb3NlLWR1cmF0aW9uPXNsb3ddKSAuYWxlcnQtZGlzbWlzcy1wcm9ncmVzczphZnRlcnthbmltYXRpb246ZGlzbWlzc1Byb2dyZXNzIDE0MDAwbXMgZWFzZS1vdXR9Omhvc3QoOmhvdmVyW2F1dG8tY2xvc2UtZHVyYXRpb249c2xvd10pIC5hbGVydC1kaXNtaXNzLXByb2dyZXNzOmFmdGVye2FuaW1hdGlvbi1wbGF5LXN0YXRlOnBhdXNlZH1Aa2V5ZnJhbWVzIGRpc21pc3NQcm9ncmVzc3swJXtpbmxpbmUtc2l6ZTowcHg7b3BhY2l0eTowLjc1fTEwMCV7aW5saW5lLXNpemU6MTAwJTtvcGFjaXR5OjF9fS5jb250YWluZXIuc2xvdHRlZC1pbi1zaGVsbHtwb3NpdGlvbjphYnNvbHV0ZX1cIjtcblxuY29uc3QgQWxlcnQgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUFsZXJ0QmVmb3JlQ2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVBbGVydEJlZm9yZUNsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUFsZXJ0Q2xvc2UgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVBbGVydENsb3NlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUFsZXJ0QmVmb3JlT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUFsZXJ0QmVmb3JlT3BlblwiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVBbGVydE9wZW4gPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVBbGVydE9wZW5cIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxBbGVydFN5bmMgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbEFsZXJ0U3luY1wiLCA2KTtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFsZXJ0UmVnaXN0ZXIgPSBjcmVhdGVFdmVudCh0aGlzLCBcImNhbGNpdGVJbnRlcm5hbEFsZXJ0UmVnaXN0ZXJcIiwgNik7XG4gICAgdGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQgPSBudWxsO1xuICAgIHRoaXMudG90YWxPcGVuVGltZSA9IDA7XG4gICAgdGhpcy50b3RhbEhvdmVyVGltZSA9IDA7XG4gICAgdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgPSBcIm9wYWNpdHlcIjtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkVsID0gZWw7XG4gICAgICBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KHRoaXMpO1xuICAgIH07XG4gICAgLyoqIGNsb3NlIGFuZCBlbWl0IGNhbGNpdGVJbnRlcm5hbEFsZXJ0U3luYyBldmVudCB3aXRoIHRoZSB1cGRhdGVkIHF1ZXVlIHBheWxvYWQgKi9cbiAgICB0aGlzLmNsb3NlQWxlcnQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmF1dG9DbG9zZVRpbWVvdXRJZCA9IG51bGw7XG4gICAgICB0aGlzLnF1ZXVlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLnF1ZXVlID0gdGhpcy5xdWV1ZS5maWx0ZXIoKGVsKSA9PiBlbCAhPT0gdGhpcy5lbCk7XG4gICAgICB0aGlzLmRldGVybWluZUFjdGl2ZUFsZXJ0KCk7XG4gICAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFsZXJ0U3luYy5lbWl0KHsgcXVldWU6IHRoaXMucXVldWUgfSk7XG4gICAgfTtcbiAgICB0aGlzLmFjdGlvbnNFbmRTbG90Q2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNFbmRBY3Rpb25zID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU1vdXNlT3ZlciA9ICgpID0+IHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQpO1xuICAgICAgdGhpcy50b3RhbE9wZW5UaW1lID0gRGF0ZS5ub3coKSAtIHRoaXMuaW5pdGlhbE9wZW5UaW1lO1xuICAgICAgdGhpcy5sYXN0TW91c2VPdmVyQmVnaW4gPSBEYXRlLm5vdygpO1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICAgY29uc3QgaG92ZXJEdXJhdGlvbiA9IERhdGUubm93KCkgLSB0aGlzLmxhc3RNb3VzZU92ZXJCZWdpbjtcbiAgICAgIGNvbnN0IHRpbWVSZW1haW5pbmcgPSBEVVJBVElPTlNbdGhpcy5hdXRvQ2xvc2VEdXJhdGlvbl0gLSB0aGlzLnRvdGFsT3BlblRpbWUgKyB0aGlzLnRvdGFsSG92ZXJUaW1lO1xuICAgICAgdGhpcy50b3RhbEhvdmVyVGltZSA9IHRoaXMudG90YWxIb3ZlclRpbWUgPyBob3ZlckR1cmF0aW9uICsgdGhpcy50b3RhbEhvdmVyVGltZSA6IGhvdmVyRHVyYXRpb247XG4gICAgICB0aGlzLmF1dG9DbG9zZVRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xvc2VBbGVydCgpLCB0aW1lUmVtYWluaW5nKTtcbiAgICB9O1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuYXV0b0Nsb3NlID0gZmFsc2U7XG4gICAgdGhpcy5hdXRvQ2xvc2VEdXJhdGlvbiA9IHRoaXMuYXV0b0Nsb3NlID8gXCJtZWRpdW1cIiA6IG51bGw7XG4gICAgdGhpcy5raW5kID0gXCJicmFuZFwiO1xuICAgIHRoaXMuaWNvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmljb25GbGlwUnRsID0gZmFsc2U7XG4gICAgdGhpcy5sYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBsYWNlbWVudCA9IFwiYm90dG9tXCI7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2xvdHRlZEluU2hlbGwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5lZmZlY3RpdmVMb2NhbGUgPSBcIlwiO1xuICAgIHRoaXMuZGVmYXVsdE1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGFzRW5kQWN0aW9ucyA9IGZhbHNlO1xuICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICB0aGlzLnF1ZXVlTGVuZ3RoID0gMDtcbiAgICB0aGlzLnF1ZXVlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWVzdGVkSWNvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICBvcGVuSGFuZGxlcigpIHtcbiAgICBpZiAodGhpcy5vcGVuICYmICF0aGlzLnF1ZXVlZCkge1xuICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxBbGVydFJlZ2lzdGVyLmVtaXQoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMucXVldWUgPSB0aGlzLnF1ZXVlLmZpbHRlcigoZWwpID0+IGVsICE9PSB0aGlzLmVsKTtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsQWxlcnRTeW5jLmVtaXQoeyBxdWV1ZTogdGhpcy5xdWV1ZSB9KTtcbiAgICB9XG4gIH1cbiAgb25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgICAvKiB3aXJlZCB1cCBieSB0OW4gdXRpbCAqL1xuICB9XG4gIHVwZGF0ZVJlcXVlc3RlZEljb24oKSB7XG4gICAgdGhpcy5yZXF1ZXN0ZWRJY29uID0gc2V0UmVxdWVzdGVkSWNvbihLaW5kSWNvbnMsIHRoaXMuaWNvbiwgdGhpcy5raW5kKTtcbiAgfVxuICB1cGRhdGVEdXJhdGlvbigpIHtcbiAgICBpZiAodGhpcy5hdXRvQ2xvc2UgJiYgdGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsb3NlQWxlcnQoKSwgRFVSQVRJT05TW3RoaXMuYXV0b0Nsb3NlRHVyYXRpb25dKTtcbiAgICB9XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgY29uc3Qgb3BlbiA9IHRoaXMub3BlbjtcbiAgICBpZiAob3BlbiAmJiAhdGhpcy5xdWV1ZWQpIHtcbiAgICAgIHRoaXMub3BlbkhhbmRsZXIoKTtcbiAgICAgIHRoaXMuY2FsY2l0ZUludGVybmFsQWxlcnRSZWdpc3Rlci5lbWl0KCk7XG4gICAgfVxuICAgIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gIH1cbiAgYXN5bmMgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnJlcXVlc3RlZEljb24gPSBzZXRSZXF1ZXN0ZWRJY29uKEtpbmRJY29ucywgdGhpcy5pY29uLCB0aGlzLmtpbmQpO1xuICAgIGF3YWl0IHNldFVwTWVzc2FnZXModGhpcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLmF1dG9DbG9zZVRpbWVvdXRJZCk7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnF1ZXVlVGltZW91dCk7XG4gICAgZGlzY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLnNsb3R0ZWRJblNoZWxsID0gZmFsc2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGFzRW5kQWN0aW9ucyB9ID0gdGhpcztcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuY2xvc2UsIGNsYXNzOiBcImFsZXJ0LWNsb3NlXCIsIG9uQ2xpY2s6IHRoaXMuY2xvc2VBbGVydCwgdHlwZTogXCJidXR0b25cIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLmNsb3NlQnV0dG9uID0gZWwpIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcInhcIiwgc2NhbGU6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJtXCIgOiBcInNcIiB9KSkpO1xuICAgIG51bWJlclN0cmluZ0Zvcm1hdHRlci5udW1iZXJGb3JtYXRPcHRpb25zID0ge1xuICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICBzaWduRGlzcGxheTogXCJhbHdheXNcIlxuICAgIH07XG4gICAgY29uc3QgcXVldWVOdW1iZXIgPSB0aGlzLnF1ZXVlTGVuZ3RoID4gMiA/IHRoaXMucXVldWVMZW5ndGggLSAxIDogMTtcbiAgICBjb25zdCBxdWV1ZVRleHQgPSBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0dGVyLmZvcm1hdChxdWV1ZU51bWJlcik7XG4gICAgY29uc3QgcXVldWVDb3VudCA9IChoKFwiZGl2XCIsIHsgY2xhc3M6IGAke3RoaXMucXVldWVMZW5ndGggPiAxID8gXCJhY3RpdmUgXCIgOiBcIlwifWFsZXJ0LXF1ZXVlLWNvdW50YCB9LCBoKFwiY2FsY2l0ZS1jaGlwXCIsIHsgc2NhbGU6IHRoaXMuc2NhbGUsIHZhbHVlOiBxdWV1ZVRleHQgfSwgcXVldWVUZXh0KSkpO1xuICAgIGNvbnN0IHsgb3BlbiwgYXV0b0Nsb3NlLCBsYWJlbCwgcGxhY2VtZW50LCBxdWV1ZWQsIHJlcXVlc3RlZEljb24sIGljb25GbGlwUnRsIH0gPSB0aGlzO1xuICAgIGNvbnN0IHJvbGUgPSBhdXRvQ2xvc2UgPyBcImFsZXJ0XCIgOiBcImFsZXJ0ZGlhbG9nXCI7XG4gICAgY29uc3QgaGlkZGVuID0gIW9wZW47XG4gICAgY29uc3Qgc2xvdE5vZGUgPSAoaChcInNsb3RcIiwgeyBrZXk6IFwiYWN0aW9uc0VuZFNsb3RcIiwgbmFtZTogU0xPVFMuYWN0aW9uc0VuZCwgb25TbG90Y2hhbmdlOiB0aGlzLmFjdGlvbnNFbmRTbG90Q2hhbmdlSGFuZGxlciB9KSk7XG4gICAgcmV0dXJuIChoKEhvc3QsIHsgXCJhcmlhLWhpZGRlblwiOiB0b0FyaWFCb29sZWFuKGhpZGRlbiksIFwiYXJpYS1sYWJlbFwiOiBsYWJlbCwgXCJjYWxjaXRlLWh5ZHJhdGVkLWhpZGRlblwiOiBoaWRkZW4sIHJvbGU6IHJvbGUgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB7XG4gICAgICAgIGNvbnRhaW5lcjogdHJ1ZSxcbiAgICAgICAgcXVldWVkLFxuICAgICAgICBbcGxhY2VtZW50XTogdHJ1ZSxcbiAgICAgICAgW0NTUy5zbG90dGVkSW5TaGVsbF06IHRoaXMuc2xvdHRlZEluU2hlbGxcbiAgICAgIH0sIG9uUG9pbnRlckVudGVyOiB0aGlzLmF1dG9DbG9zZSAmJiB0aGlzLmF1dG9DbG9zZVRpbWVvdXRJZCA/IHRoaXMuaGFuZGxlTW91c2VPdmVyIDogbnVsbCwgb25Qb2ludGVyTGVhdmU6IHRoaXMuYXV0b0Nsb3NlICYmIHRoaXMuYXV0b0Nsb3NlVGltZW91dElkID8gdGhpcy5oYW5kbGVNb3VzZUxlYXZlIDogbnVsbCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldFRyYW5zaXRpb25FbCB9LCByZXF1ZXN0ZWRJY29uID8gKGgoXCJkaXZcIiwgeyBjbGFzczogXCJhbGVydC1pY29uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGZsaXBSdGw6IGljb25GbGlwUnRsLCBpY29uOiByZXF1ZXN0ZWRJY29uLCBzY2FsZTogdGhpcy5zY2FsZSA9PT0gXCJsXCIgPyBcIm1cIiA6IFwic1wiIH0pKSkgOiBudWxsLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYWxlcnQtY29udGVudFwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMudGl0bGUgfSksIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMubWVzc2FnZSB9KSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5saW5rIH0pKSwgaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuYWN0aW9uc0VuZCwgaGlkZGVuOiAhaGFzRW5kQWN0aW9ucyB9LCBzbG90Tm9kZSksIHRoaXMucXVldWVMZW5ndGggPiAxID8gcXVldWVDb3VudCA6IG51bGwsIGNsb3NlQnV0dG9uLCBvcGVuICYmICFxdWV1ZWQgJiYgYXV0b0Nsb3NlID8gaChcImRpdlwiLCB7IGNsYXNzOiBcImFsZXJ0LWRpc21pc3MtcHJvZ3Jlc3NcIiB9KSA6IG51bGwpKSk7XG4gIH1cbiAgLy8gd2hlbiBhbiBhbGVydCBpcyBvcGVuZWQgb3IgY2xvc2VkLCB1cGRhdGUgcXVldWUgYW5kIGRldGVybWluZSBhY3RpdmUgYWxlcnRcbiAgYWxlcnRTeW5jKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMucXVldWUgIT09IGV2ZW50LmRldGFpbC5xdWV1ZSkge1xuICAgICAgdGhpcy5xdWV1ZSA9IGV2ZW50LmRldGFpbC5xdWV1ZTtcbiAgICB9XG4gICAgdGhpcy5xdWV1ZUxlbmd0aCA9IHRoaXMucXVldWUubGVuZ3RoO1xuICAgIHRoaXMuZGV0ZXJtaW5lQWN0aXZlQWxlcnQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvLyB3aGVuIGFuIGFsZXJ0IGlzIGZpcnN0IHJlZ2lzdGVyZWQsIHRyaWdnZXIgYSBxdWV1ZSBzeW5jXG4gIGFsZXJ0UmVnaXN0ZXIoKSB7XG4gICAgaWYgKHRoaXMub3BlbiAmJiAhdGhpcy5xdWV1ZS5pbmNsdWRlcyh0aGlzLmVsKSkge1xuICAgICAgdGhpcy5xdWV1ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5xdWV1ZS5wdXNoKHRoaXMuZWwpO1xuICAgIH1cbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbEFsZXJ0U3luYy5lbWl0KHsgcXVldWU6IHRoaXMucXVldWUgfSk7XG4gICAgdGhpcy5kZXRlcm1pbmVBY3RpdmVBbGVydCgpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIFwiY2xvc2VcIiBidXR0b24gKHRoZSBmaXJzdCBmb2N1c2FibGUgaXRlbSkuICovXG4gIGFzeW5jIHNldEZvY3VzKCkge1xuICAgIGF3YWl0IGNvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgICBjb25zdCBhbGVydExpbmtFbCA9IGdldFNsb3R0ZWQodGhpcy5lbCwgeyBzZWxlY3RvcjogXCJjYWxjaXRlLWxpbmtcIiB9KTtcbiAgICBpZiAoIXRoaXMuY2xvc2VCdXR0b24gJiYgIWFsZXJ0TGlua0VsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYgKGFsZXJ0TGlua0VsKSB7XG4gICAgICBhbGVydExpbmtFbC5zZXRGb2N1cygpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLmNsb3NlQnV0dG9uKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uLmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIGVmZmVjdGl2ZUxvY2FsZUNoYW5nZSgpIHtcbiAgICB1cGRhdGVNZXNzYWdlcyh0aGlzLCB0aGlzLmVmZmVjdGl2ZUxvY2FsZSk7XG4gIH1cbiAgLyoqIGRldGVybWluZSB3aGljaCBhbGVydCBpcyBhY3RpdmUgKi9cbiAgZGV0ZXJtaW5lQWN0aXZlQWxlcnQoKSB7XG4gICAgaWYgKHRoaXMucXVldWU/LlswXSA9PT0gdGhpcy5lbCkge1xuICAgICAgdGhpcy5vcGVuQWxlcnQoKTtcbiAgICAgIGlmICh0aGlzLmF1dG9DbG9zZSAmJiAhdGhpcy5hdXRvQ2xvc2VUaW1lb3V0SWQpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsT3BlblRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmF1dG9DbG9zZVRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xvc2VBbGVydCgpLCBEVVJBVElPTlNbdGhpcy5hdXRvQ2xvc2VEdXJhdGlvbl0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgb25CZWZvcmVPcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZUFsZXJ0QmVmb3JlT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25PcGVuKCkge1xuICAgIHRoaXMuY2FsY2l0ZUFsZXJ0T3Blbi5lbWl0KCk7XG4gIH1cbiAgb25CZWZvcmVDbG9zZSgpIHtcbiAgICB0aGlzLmNhbGNpdGVBbGVydEJlZm9yZUNsb3NlLmVtaXQoKTtcbiAgfVxuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuY2FsY2l0ZUFsZXJ0Q2xvc2UuZW1pdCgpO1xuICB9XG4gIC8qKiByZW1vdmUgcXVldWVkIGNsYXNzIGFmdGVyIGFuaW1hdGlvbiBjb21wbGV0ZXMgKi9cbiAgb3BlbkFsZXJ0KCkge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5xdWV1ZVRpbWVvdXQpO1xuICAgIHRoaXMucXVldWVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gKHRoaXMucXVldWVkID0gZmFsc2UpLCAzMDApO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJvcGVuXCI6IFtcIm9wZW5IYW5kbGVyXCJdLFxuICAgIFwibWVzc2FnZU92ZXJyaWRlc1wiOiBbXCJvbk1lc3NhZ2VzQ2hhbmdlXCJdLFxuICAgIFwiaWNvblwiOiBbXCJ1cGRhdGVSZXF1ZXN0ZWRJY29uXCJdLFxuICAgIFwia2luZFwiOiBbXCJ1cGRhdGVSZXF1ZXN0ZWRJY29uXCJdLFxuICAgIFwiYXV0b0Nsb3NlRHVyYXRpb25cIjogW1widXBkYXRlRHVyYXRpb25cIl0sXG4gICAgXCJlZmZlY3RpdmVMb2NhbGVcIjogW1wiZWZmZWN0aXZlTG9jYWxlQ2hhbmdlXCJdXG4gIH07IH1cbn07XG5BbGVydC5zdHlsZSA9IGFsZXJ0Q3NzO1xuXG5leHBvcnQgeyBBbGVydCBhcyBjYWxjaXRlX2FsZXJ0IH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuY29uc3QgcmVzb2x2ZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBwcm9taXNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBzZXRzIHVwIHRoZSBjb21wb25lbnQgZm9yIHRoZSBhYmlsaXR5IHRvIGtub3cgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBiZWVuIGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50V2lsbExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50V2lsbExvYWQoKTogdm9pZCB7XG4gKiAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldFVwTG9hZGFibGVDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHByb21pc2VNYXAuc2V0KGNvbXBvbmVudCwgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmVNYXAuc2V0KGNvbXBvbmVudCwgcmVzb2x2ZSkpKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBsZXRzIHRoZSBsb2FkYWJsZSBjb21wb25lbnQga25vdyB0aGF0IGl0IGlzIG5vdyBsb2FkZWQuXG4gKlxuICogVGhpcyBzaG91bGQgYmUgdXNlZCBpbiB0aGUgYGNvbXBvbmVudERpZExvYWRgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqIGBgYFxuICogY29tcG9uZW50RGlkTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzZXRDb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJlc29sdmVNYXAuZ2V0KGNvbXBvbmVudCkoKTtcbn1cbi8qKlxuICogVGhpcyBoZWxwZXIgdXRpbCBjYW4gYmUgdXNlZCB0byBlbnN1cmUgYSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkIChUaGUgXCJjb21wb25lbnREaWRMb2FkXCIgc3RlbmNpbCBsaWZlY3ljbGUgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCkuXG4gKlxuICogUmVxdWlyZXMgXCJzZXRVcExvYWRhYmxlQ29tcG9uZW50XCIgYW5kIFwic2V0Q29tcG9uZW50TG9hZGVkXCIgdG8gYmUgY2FsbGVkIGZpcnN0LlxuICpcbiAqIEEgY29tcG9uZW50IGRldmVsb3BlciBjYW4gYXdhaXQgdGhpcyBtZXRob2QgYmVmb3JlIHByb2NlZWRpbmcgd2l0aCBhbnkgbG9naWMgdGhhdCByZXF1aXJlcyBhIGNvbXBvbmVudCB0byBiZSBsb2FkZWQgZmlyc3QuXG4gKlxuICogYGBgXG4gKiBhc3luYyBzZXRGb2N1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAqICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICovXG5mdW5jdGlvbiBjb21wb25lbnRMb2FkZWQoY29tcG9uZW50KSB7XG4gIHJldHVybiBwcm9taXNlTWFwLmdldChjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBzZXRDb21wb25lbnRMb2FkZWQgYXMgYSwgY29tcG9uZW50TG9hZGVkIGFzIGMsIHNldFVwTG9hZGFibGVDb21wb25lbnQgYXMgcyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IGUgYXMgcmVhZFRhc2sgfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcblxuY29uc3QgY29tcG9uZW50VG9UcmFuc2l0aW9uTGlzdGVuZXJzID0gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIHRyYW5zaXRpb25TdGFydChldmVudCkge1xuICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSB0aGlzLm9wZW5UcmFuc2l0aW9uUHJvcCAmJiBldmVudC50YXJnZXQgPT09IHRoaXMudHJhbnNpdGlvbkVsKSB7XG4gICAgdGhpcy5vcGVuID8gdGhpcy5vbkJlZm9yZU9wZW4oKSA6IHRoaXMub25CZWZvcmVDbG9zZSgpO1xuICB9XG59XG5mdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGV2ZW50KSB7XG4gIGlmIChldmVudC5wcm9wZXJ0eU5hbWUgPT09IHRoaXMub3BlblRyYW5zaXRpb25Qcm9wICYmIGV2ZW50LnRhcmdldCA9PT0gdGhpcy50cmFuc2l0aW9uRWwpIHtcbiAgICB0aGlzLm9wZW4gPyB0aGlzLm9uT3BlbigpIDogdGhpcy5vbkNsb3NlKCk7XG4gIH1cbn1cbi8qKlxuICogSGVscGVyIHRvIGRldGVybWluZSBnbG9iYWxseSBzZXQgdHJhbnNpdGlvbiBkdXJhdGlvbiBvbiB0aGUgZ2l2ZW4gb3BlblRyYW5zaXRpb25Qcm9wLCB3aGljaCBpcyBpbXBvcnRlZCBhbmQgc2V0IGluIHRoZSBAV2F0Y2goXCJvcGVuXCIpLlxuICogVXNlZCB0byBlbWl0IChiZWZvcmUpb3Blbi9jbG9zZSBldmVudHMgYm90aCBmb3Igd2hlbiB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uIGlzIHByZXNlbnQgYW5kIHdoZW4gdGhlcmUgaXMgbm9uZSAodHJhbnNpdGlvbi1kdXJhdGlvbiBpcyBzZXQgdG8gMCkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIG5vbk9wZW5DbG9zZUNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudChjb21wb25lbnQsIG5vbk9wZW5DbG9zZUNvbXBvbmVudCA9IGZhbHNlKSB7XG4gIHJlYWRUYXNrKCgpID0+IHtcbiAgICBpZiAoY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgICAgY29uc3QgYWxsVHJhbnNpdGlvblByb3BzQXJyYXkgPSBnZXRDb21wdXRlZFN0eWxlKGNvbXBvbmVudC50cmFuc2l0aW9uRWwpLnRyYW5zaXRpb24uc3BsaXQoXCIgXCIpO1xuICAgICAgY29uc3Qgb3BlblRyYW5zaXRpb25Qcm9wSW5kZXggPSBhbGxUcmFuc2l0aW9uUHJvcHNBcnJheS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0gPT09IGNvbXBvbmVudC5vcGVuVHJhbnNpdGlvblByb3ApO1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gYWxsVHJhbnNpdGlvblByb3BzQXJyYXlbb3BlblRyYW5zaXRpb25Qcm9wSW5kZXggKyAxXTtcbiAgICAgIGlmICh0cmFuc2l0aW9uRHVyYXRpb24gPT09IFwiMHNcIikge1xuICAgICAgICAobm9uT3BlbkNsb3NlQ29tcG9uZW50ID8gY29tcG9uZW50W2NvbXBvbmVudC50cmFuc2l0aW9uUHJvcF0gOiBjb21wb25lbnQub3BlbilcbiAgICAgICAgICA/IGNvbXBvbmVudC5vbkJlZm9yZU9wZW4oKVxuICAgICAgICAgIDogY29tcG9uZW50Lm9uQmVmb3JlQ2xvc2UoKTtcbiAgICAgICAgKG5vbk9wZW5DbG9zZUNvbXBvbmVudCA/IGNvbXBvbmVudFtjb21wb25lbnQudHJhbnNpdGlvblByb3BdIDogY29tcG9uZW50Lm9wZW4pXG4gICAgICAgICAgPyBjb21wb25lbnQub25PcGVuKClcbiAgICAgICAgICA6IGNvbXBvbmVudC5vbkNsb3NlKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LnRyYW5zaXRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbnN0YXJ0XCIsICgpID0+IHtcbiAgICAgICAgICAobm9uT3BlbkNsb3NlQ29tcG9uZW50ID8gY29tcG9uZW50W2NvbXBvbmVudC50cmFuc2l0aW9uUHJvcF0gOiBjb21wb25lbnQub3BlbilcbiAgICAgICAgICAgID8gY29tcG9uZW50Lm9uQmVmb3JlT3BlbigpXG4gICAgICAgICAgICA6IGNvbXBvbmVudC5vbkJlZm9yZUNsb3NlKCk7XG4gICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgY29tcG9uZW50LnRyYW5zaXRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgKG5vbk9wZW5DbG9zZUNvbXBvbmVudCA/IGNvbXBvbmVudFtjb21wb25lbnQudHJhbnNpdGlvblByb3BdIDogY29tcG9uZW50Lm9wZW4pXG4gICAgICAgICAgICA/IGNvbXBvbmVudC5vbk9wZW4oKVxuICAgICAgICAgICAgOiBjb21wb25lbnQub25DbG9zZSgpO1xuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogSGVscGVyIHRvIGtlZXAgdHJhY2sgb2YgdHJhbnNpdGlvbiBsaXN0ZW5lcnMgb24gc2V0VHJhbnNpdGlvbkVsIGFuZCBjb25uZWN0ZWRDYWxsYmFjayBvbiBPcGVuQ2xvc2VDb21wb25lbnQgY29tcG9uZW50cy5cbiAqXG4gKiBGb3IgY29tcG9uZW50IHdoaWNoIGRvIG5vdCBoYXZlIG9wZW4gcHJvcCwgdXNlIGBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudGAgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIGlmIChjb21wb25lbnQudHJhbnNpdGlvbkVsKSB7XG4gICAgY29uc3QgYm91bmRPblRyYW5zaXRpb25TdGFydCA9IHRyYW5zaXRpb25TdGFydC5iaW5kKGNvbXBvbmVudCk7XG4gICAgY29uc3QgYm91bmRPblRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kLmJpbmQoY29tcG9uZW50KTtcbiAgICBjb21wb25lbnRUb1RyYW5zaXRpb25MaXN0ZW5lcnMuc2V0KGNvbXBvbmVudCwgW1xuICAgICAgY29tcG9uZW50LnRyYW5zaXRpb25FbCxcbiAgICAgIGJvdW5kT25UcmFuc2l0aW9uU3RhcnQsXG4gICAgICBib3VuZE9uVHJhbnNpdGlvbkVuZFxuICAgIF0pO1xuICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25zdGFydFwiLCBib3VuZE9uVHJhbnNpdGlvblN0YXJ0KTtcbiAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGJvdW5kT25UcmFuc2l0aW9uRW5kKTtcbiAgfVxufVxuLyoqXG4gKiBIZWxwZXIgdG8gdGVhciBkb3duIHRyYW5zaXRpb24gbGlzdGVuZXJzIG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrIG9uIE9wZW5DbG9zZUNvbXBvbmVudCBjb21wb25lbnRzLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFjb21wb25lbnRUb1RyYW5zaXRpb25MaXN0ZW5lcnMuaGFzKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgW3RyYW5zaXRpb25FbCwgc3RhcnQsIGVuZF0gPSBjb21wb25lbnRUb1RyYW5zaXRpb25MaXN0ZW5lcnMuZ2V0KGNvbXBvbmVudCk7XG4gIHRyYW5zaXRpb25FbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbnN0YXJ0XCIsIHN0YXJ0KTtcbiAgdHJhbnNpdGlvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGVuZCk7XG4gIGNvbXBvbmVudFRvVHJhbnNpdGlvbkxpc3RlbmVycy5kZWxldGUoY29tcG9uZW50KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IGFzIGQsIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50IGFzIG8gfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG52YXIgS2luZEljb25zO1xuKGZ1bmN0aW9uIChLaW5kSWNvbnMpIHtcbiAgS2luZEljb25zW1wiYnJhbmRcIl0gPSBcImxpZ2h0YnVsYlwiO1xuICBLaW5kSWNvbnNbXCJkYW5nZXJcIl0gPSBcImV4Y2xhbWF0aW9uTWFya1RyaWFuZ2xlXCI7XG4gIEtpbmRJY29uc1tcImluZm9cIl0gPSBcImluZm9ybWF0aW9uXCI7XG4gIEtpbmRJY29uc1tcInN1Y2Nlc3NcIl0gPSBcImNoZWNrQ2lyY2xlXCI7XG4gIEtpbmRJY29uc1tcIndhcm5pbmdcIl0gPSBcImV4Y2xhbWF0aW9uTWFya1RyaWFuZ2xlXCI7XG59KShLaW5kSWNvbnMgfHwgKEtpbmRJY29ucyA9IHt9KSk7XG5cbmV4cG9ydCB7IEtpbmRJY29ucyBhcyBLIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjJcbiAqL1xuaW1wb3J0IHsgZyBhcyBnZXRBc3NldFBhdGggfSBmcm9tICcuL2luZGV4LWE2NzYwMjg2LmpzJztcbmltcG9ydCB7IGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUtYjNjNDRkZGEuanMnO1xuXG5jb25zdCBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGUgPSB7fTtcbmFzeW5jIGZ1bmN0aW9uIGdldE1lc3NhZ2VCdW5kbGUobGFuZywgY29tcG9uZW50KSB7XG4gIGNvbnN0IGtleSA9IGAke2NvbXBvbmVudH1fJHtsYW5nfWA7XG4gIGlmIChjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSkge1xuICAgIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbiAgfVxuICBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XSA9IGZldGNoKGdldEFzc2V0UGF0aChgLi9hc3NldHMvJHtjb21wb25lbnR9L3Q5bi9tZXNzYWdlc18ke2xhbmd9Lmpzb25gKSlcbiAgICAudGhlbigocmVzcCkgPT4ge1xuICAgIGlmICghcmVzcC5vaykge1xuICAgICAgdGhyb3dNZXNzYWdlRmV0Y2hFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcC5qc29uKCk7XG4gIH0pXG4gICAgLmNhdGNoKCgpID0+IHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSk7XG4gIHJldHVybiBjb21wb25lbnRMYW5nVG9NZXNzYWdlQnVuZGxlQ2FjaGVba2V5XTtcbn1cbmZ1bmN0aW9uIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcImNvdWxkIG5vdCBmZXRjaCBjb21wb25lbnQgbWVzc2FnZSBidW5kbGVcIik7XG59XG5mdW5jdGlvbiBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQubWVzc2FnZXMgPSB7XG4gICAgLi4uY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyxcbiAgICAuLi5jb21wb25lbnQubWVzc2FnZU92ZXJyaWRlc1xuICB9O1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCB0aGUgbWVzc2FnZXMgdXNlZCBieSB0aGUgY29tcG9uZW50LiBJdCBzaG91bGQgYmUgYXdhaXRlZCBpbiB0aGUgYGNvbXBvbmVudFdpbGxMb2FkYCBsaWZlY3ljbGUgaG9vay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldFVwTWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgY29tcG9uZW50LmVmZmVjdGl2ZUxvY2FsZSk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBjb21wb25lbnROYW1lID0gdGFnLnJlcGxhY2UoXCJjYWxjaXRlLVwiLCBcIlwiKTtcbiAgcmV0dXJuIGdldE1lc3NhZ2VCdW5kbGUoZ2V0U3VwcG9ydGVkTG9jYWxlKGxhbmcsIFwidDluXCIpLCBjb21wb25lbnROYW1lKTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IG11c3QgYmUgc2V0IHVwIGZvciB0aGUgY29tcG9uZW50IHRvIHVwZGF0ZSBpdHMgZGVmYXVsdCBtZXNzYWdlIGJ1bmRsZSBpZiB0aGUgbG9jYWxlIGNoYW5nZXMuXG4gKlxuICogSXQgY2FuIGJlIHNldCB1cCBpbiAqKmVpdGhlcioqIG9mIHRoZSBmb2xsb3dpbmcgd2F5czpcbiAqXG4gKiAxLiBjYWxsZWQgZnJvbSBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBvbkxvY2FsZUNoYW5nZWAgbWV0aG9kIG9yXG4gKiAyLiBjYWxsZWQgZnJvbSBhIHdhdGNoZXIgY29uZmlndXJlZCB0byB3YXRjaCBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBlZmZlY3RpdmVMb2NhbGVgIHByb3BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gbGFuZ1xuICovXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVNZXNzYWdlcyhjb21wb25lbnQsIGxhbmcpIHtcbiAgY29tcG9uZW50LmRlZmF1bHRNZXNzYWdlcyA9IGF3YWl0IGZldGNoTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKTtcbiAgbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiAqKk5vdGUqKjogdGhpcyBtdXN0IGJlIGNhbGxlZCBhZnRlciBgTG9jYWxpemVkQ29tcG9uZW50YCdzIGBjb25uZWN0TG9jYWxpemVkYCBtZXRob2QuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TWVzc2FnZXMoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5vbk1lc3NhZ2VzQ2hhbmdlID0gZGVmYXVsdE9uTWVzc2FnZXNDaGFuZ2U7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSB0ZWFycyBkb3duIGludGVybmFscyBmb3IgbWVzc2FnZXMgc3VwcG9ydC5cbiAqXG4gKiBJdCBuZWVkcyB0byBiZSBjYWxsZWQgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICBtZXJnZU1lc3NhZ2VzKHRoaXMpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0TWVzc2FnZXMgYXMgYywgZGlzY29ubmVjdE1lc3NhZ2VzIGFzIGQsIHNldFVwTWVzc2FnZXMgYXMgcywgdXBkYXRlTWVzc2FnZXMgYXMgdSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9