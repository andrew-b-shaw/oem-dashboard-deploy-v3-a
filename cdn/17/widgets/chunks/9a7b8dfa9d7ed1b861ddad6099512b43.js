"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-modal_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-modal.entry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-modal.entry.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conditionalSlot-946fb911.js */ "./node_modules/@esri/calcite-components/dist/esm/conditionalSlot-946fb911.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusTrapComponent-07adcb3f.js */ "./node_modules/@esri/calcite-components/dist/esm/focusTrapComponent-07adcb3f.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./openCloseComponent-21d2a6ab.js */ "./node_modules/@esri/calcite-components/dist/esm/openCloseComponent-21d2a6ab.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */













const CSS = {
  modal: "modal",
  title: "title",
  header: "header",
  footer: "footer",
  scrim: "scrim",
  back: "back",
  close: "close",
  secondary: "secondary",
  primary: "primary",
  overflowHidden: "overflow-hidden",
  container: "container",
  containerOpen: "container--open",
  content: "content",
  contentNoFooter: "content--no-footer",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  slottedInShell: "slotted-in-shell",
  // these classes help apply the animation in phases to only set transform on open/close
  // this helps avoid a positioning issue for any floating-ui-owning children
  openingIdle: "modal--opening-idle",
  openingActive: "modal--opening-active",
  closingIdle: "modal--closing-idle",
  closingActive: "modal--closing-active"
};
const ICONS = {
  close: "x"
};
const SLOTS = {
  content: "content",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  header: "header",
  back: "back",
  secondary: "secondary",
  primary: "primary"
};

const modalCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-scrim-background-internal:rgba(0, 0, 0, 0.85)}.content-top[hidden],.content-bottom[hidden]{display:none}.container{position:fixed;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow-y:hidden;color:var(--calcite-ui-text-2);opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([scale=s]){--calcite-modal-padding-internal:0.75rem;--calcite-modal-padding-large-internal:1rem;--calcite-modal-title-text-internal:var(--calcite-font-size-1);--calcite-modal-content-text-internal:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding-internal:1rem;--calcite-modal-padding-large-internal:1.25rem;--calcite-modal-title-text-internal:var(--calcite-font-size-2);--calcite-modal-content-text-internal:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding-internal:1.25rem;--calcite-modal-padding-large-internal:1.5rem;--calcite-modal-title-text-internal:var(--calcite-font-size-3);--calcite-modal-content-text-internal:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:var(--calcite-modal-scrim-background, var(--calcite-modal-scrim-background-internal));position:fixed;inset:0px;display:flex;overflow-y:hidden}.modal{pointer-events:none;z-index:var(--calcite-app-z-index-modal);float:none;margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-hidden-position:translate3d(0, 20px, 0);--calcite-modal-shown-position:translate3d(0, 0, 0)}.modal--opening-idle{transform:var(--calcite-modal-hidden-position)}.modal--opening-active{transform:var(--calcite-modal-shown-position)}.modal--closing-idle{transform:var(--calcite-modal-shown-position)}.modal--closing-active{transform:var(--calcite-modal-hidden-position)}:host([open]){opacity:1;visibility:visible !important;transition-delay:0ms}.container--open{opacity:1;visibility:visible !important;transition-delay:0ms}.container--open .modal{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}.header{z-index:var(--calcite-app-z-index-header);display:flex;min-inline-size:0px;max-inline-size:100%;border-start-start-radius:0.25rem;border-start-end-radius:0.25rem;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto}.close{order:2;margin:0px;cursor:pointer;-webkit-appearance:none;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-internal);flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.close:hover,.close:focus,.close:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.title{order:1;display:flex;min-inline-size:0px;align-items:center;flex:1 1 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1);font-size:var(--calcite-modal-title-text-internal)}.content{position:relative;box-sizing:border-box;display:block;block-size:100%;overflow:auto;padding:0px;background-color:var(--calcite-modal-content-background, var(--calcite-ui-foreground-1));max-block-size:100%;padding:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal))}.content-top,.content-bottom{z-index:var(--calcite-app-z-index-header);display:flex;border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding:var(--calcite-modal-padding-internal)}.content-top{min-inline-size:0px;max-inline-size:100%;border-block-end-width:1px}.content-bottom{margin-block-start:auto;box-sizing:border-box;inline-size:100%;justify-content:space-between;border-block-start-width:1px}.content-top:not(.header~.content-top){border-start-start-radius:0.25rem;border-start-end-radius:0.25rem}.content-bottom:not(.content-bottom~.footer),.content--no-footer{border-end-end-radius:0.25rem;border-end-start-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-context-text-internal)}.footer{z-index:var(--calcite-app-z-index-header);margin-block-start:auto;box-sizing:border-box;display:flex;inline-size:100%;justify-content:space-between;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-inline-end:auto}.secondary{margin-inline:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{inline-size:auto}:host([width=s]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 32rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 35rem){:host([width=s]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=s]) .content{flex:1 1 auto;max-block-size:unset}:host([width=s][docked]) .container{align-items:flex-end}}:host([width=m]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 48rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 51rem){:host([width=m]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=m]) .content{flex:1 1 auto;max-block-size:unset}:host([width=m][docked]) .container{align-items:flex-end}}:host([width=l]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 94rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 97rem){:host([width=l]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width=l]) .content{flex:1 1 auto;max-block-size:unset}:host([width=l][docked]) .container{align-items:flex-end}}:host([fullscreen]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0px;--calcite-modal-hidden-position:translate3D(0, 20px, 0) scale(0.95);--calcite-modal-shown-position:translate3D(0, 0, 0) scale(1)}:host([fullscreen]) .content{max-block-size:100%;flex:1 1 auto}:host([open][fullscreen]) .header,:host([open][fullscreen]) .footer,:host([open][fullscreen]) .content-top,:host([open][fullscreen]) .content-bottom{border-radius:0}:host([docked]) .modal{block-size:var(--calcite-modal-height, auto)}:host([docked]) .content{block-size:auto;flex:1 1 auto}:host([kind=brand]) .modal{border-color:var(--calcite-ui-brand)}:host([kind=danger]) .modal{border-color:var(--calcite-ui-danger)}:host([kind=info]) .modal{border-color:var(--calcite-ui-info)}:host([kind=success]) .modal{border-color:var(--calcite-ui-success)}:host([kind=warning]) .modal{border-color:var(--calcite-ui-warning)}:host([kind=brand]) .modal,:host([kind=danger]) .modal,:host([kind=info]) .modal,:host([kind=success]) .modal,:host([kind=warning]) .modal{border-width:0px;border-block-start-width:4px;border-style:solid}:host([kind=brand]) .header,:host([kind=brand]) .content-top,:host([kind=danger]) .header,:host([kind=danger]) .content-top,:host([kind=info]) .header,:host([kind=info]) .content-top,:host([kind=success]) .header,:host([kind=success]) .content-top,:host([kind=warning]) .header,:host([kind=warning]) .content-top{border-radius:0.25rem;border-end-end-radius:0px;border-end-start-radius:0px}@media screen and (max-width: 860px){* slot[name=header]::slotted(content-top),* content-top::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer,.content-bottom{position:sticky;inset-block-end:0px}}@media screen and (max-width: 480px){.footer,.content-bottom{flex-direction:column}.back,.secondary{margin:0px;margin-block-end:0.25rem}}.container.slotted-in-shell{position:absolute;pointer-events:auto}.container.slotted-in-shell calcite-scrim{position:absolute}";

const Modal = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteModalBeforeClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteModalBeforeClose", 6);
    this.calciteModalClose = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteModalClose", 6);
    this.calciteModalBeforeOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteModalBeforeOpen", 6);
    this.calciteModalOpen = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteModalOpen", 6);
    this.mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_5__.c)("mutation", () => this.handleMutationObserver());
    this.cssVarObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_5__.c)("mutation", () => {
      this.updateSizeCssVars();
    });
    this.openTransitionProp = "opacity";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.setTransitionEl = (el) => {
      this.transitionEl = el;
    };
    this.openEnd = () => {
      this.setFocus();
      this.el.removeEventListener("calciteModalOpen", this.openEnd);
    };
    this.handleOutsideClose = () => {
      if (this.outsideCloseDisabled) {
        return;
      }
      this.close();
    };
    /** Close the modal, first running the `beforeClose` method */
    this.close = () => {
      return this.beforeClose(this.el).then(() => {
        this.open = false;
        this.isOpen = false;
        this.removeOverflowHiddenClass();
      });
    };
    this.handleMutationObserver = () => {
      this.updateFooterVisibility();
      this.updateFocusTrapElements();
    };
    this.updateFooterVisibility = () => {
      this.hasFooter = !!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.el, [SLOTS.back, SLOTS.primary, SLOTS.secondary]);
    };
    this.updateSizeCssVars = () => {
      this.cssWidth = getComputedStyle(this.el).getPropertyValue("--calcite-modal-width");
      this.cssHeight = getComputedStyle(this.el).getPropertyValue("--calcite-modal-height");
    };
    this.contentTopSlotChangeHandler = (event) => {
      this.hasContentTop = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.d)(event);
    };
    this.contentBottomSlotChangeHandler = (event) => {
      this.hasContentBottom = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.d)(event);
    };
    this.open = false;
    this.beforeClose = () => Promise.resolve();
    this.closeButtonDisabled = false;
    this.focusTrapDisabled = false;
    this.outsideCloseDisabled = false;
    this.docked = undefined;
    this.escapeDisabled = false;
    this.scale = "m";
    this.width = "m";
    this.fullscreen = undefined;
    this.kind = undefined;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.slottedInShell = undefined;
    this.cssWidth = undefined;
    this.cssHeight = undefined;
    this.hasFooter = true;
    this.hasContentTop = false;
    this.hasContentBottom = false;
    this.isOpen = false;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  handleFocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_3__.d)(this) : (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    await Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_4__.s)(this);
    // when modal initially renders, if active was set we need to open as watcher doesn't fire
    if (this.open) {
      (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_6__.o)(this);
      requestAnimationFrame(() => this.openModal());
    }
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_4__.a)(this);
  }
  connectedCallback() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    this.cssVarObserver?.observe(this.el, { attributeFilter: ["style"] });
    this.updateSizeCssVars();
    this.updateFooterVisibility();
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  disconnectedCallback() {
    this.removeOverflowHiddenClass();
    this.mutationObserver?.disconnect();
    this.cssVarObserver?.disconnect();
    (0,_conditionalSlot_946fb911_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this);
    this.slottedInShell = false;
  }
  render() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { "aria-describedby": this.contentId, "aria-labelledby": this.titleId, "aria-modal": "true", role: "dialog" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.container]: true,
        [CSS.containerOpen]: this.isOpen,
        [CSS.slottedInShell]: this.slottedInShell
      } }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-scrim", { class: CSS.scrim, onClick: this.handleOutsideClose }), this.renderStyle(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.modal]: true
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setTransitionEl }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.header }, this.renderCloseButton(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("header", { class: CSS.title }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: CSS.header }))), this.renderContentTop(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.content]: true,
        [CSS.contentNoFooter]: !this.hasFooter
      },
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.modalContent = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.content })), this.renderContentBottom(), this.renderFooter()))));
  }
  renderFooter() {
    return this.hasFooter ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.footer, key: "footer" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.back }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.back })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.secondary }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.secondary })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.primary }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.primary })))) : null;
  }
  renderContentTop() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.contentTop, hidden: !this.hasContentTop }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.contentTop, onSlotchange: this.contentTopSlotChangeHandler })));
  }
  renderContentBottom() {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.contentBottom, hidden: !this.hasContentBottom }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: SLOTS.contentBottom, onSlotchange: this.contentBottomSlotChangeHandler })));
  }
  renderCloseButton() {
    return !this.closeButtonDisabled ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.messages.close, class: CSS.close, key: "button", onClick: this.close, title: this.messages.close,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.closeButtonEl = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: ICONS.close, scale: this.scale === "s" ? "s" : this.scale === "m" ? "m" : this.scale === "l" ? "l" : null }))) : null;
  }
  renderStyle() {
    if (!this.fullscreen && (this.cssWidth || this.cssHeight)) {
      return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("style", null, `.${CSS.container} {
              ${this.docked && this.cssWidth ? `align-items: center !important;` : ""}
            }
            .${CSS.modal} {
              block-size: ${this.cssHeight ? this.cssHeight : "auto"} !important;
              ${this.cssWidth ? `inline-size: ${this.cssWidth} !important;` : ""}
              ${this.cssWidth ? `max-inline-size: ${this.cssWidth} !important;` : ""}
              ${this.docked ? `border-radius: var(--calcite-border-radius) !important;` : ""}
            }
            @media screen and (max-width: ${this.cssWidth}) {
              .${CSS.container} {
                ${this.docked ? `align-items: flex-end !important;` : ""}
              }
              .${CSS.modal} {
                max-block-size: 100% !important;
                inline-size: 100% !important;
                max-inline-size: 100% !important;
                min-inline-size: 100% !important;
                margin: 0 !important;
                ${!this.docked ? `block-size: 100% !important;` : ""}
                ${!this.docked ? `border-radius: 0 !important;` : ""}
                ${this.docked
        ? `border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0 !important;`
        : ""}
              }
            }
          `));
    }
  }
  effectiveLocaleChange() {
    Object(function webpackMissingModule() { var e = new Error("Cannot find module './t9n-fac13394.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleEscape(event) {
    if (this.open && !this.escapeDisabled && event.key === "Escape" && !event.defaultPrevented) {
      this.close();
      event.preventDefault();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Sets focus on the component's "close" button (the first focusable item).
   *
   */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.p)(this.el);
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  async updateFocusTrapElements() {
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  /**
   * Sets the scroll top of the component's content.
   *
   * @param top
   * @param left
   */
  async scrollContent(top = 0, left = 0) {
    if (this.modalContent) {
      if (this.modalContent.scrollTo) {
        this.modalContent.scrollTo({ top, left, behavior: "smooth" });
      }
      else {
        this.modalContent.scrollTop = top;
        this.modalContent.scrollLeft = left;
      }
    }
  }
  onBeforeOpen() {
    this.transitionEl.classList.add(CSS.openingActive);
    this.calciteModalBeforeOpen.emit();
  }
  onOpen() {
    this.transitionEl.classList.remove(CSS.openingIdle, CSS.openingActive);
    this.calciteModalOpen.emit();
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_3__.a)(this);
  }
  onBeforeClose() {
    this.transitionEl.classList.add(CSS.closingActive);
    this.calciteModalBeforeClose.emit();
  }
  onClose() {
    this.transitionEl.classList.remove(CSS.closingIdle, CSS.closingActive);
    this.calciteModalClose.emit();
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  async toggleModal(value) {
    (0,_openCloseComponent_21d2a6ab_js__WEBPACK_IMPORTED_MODULE_6__.o)(this);
    if (value) {
      this.transitionEl?.classList.add(CSS.openingIdle);
      this.openModal();
    }
    else {
      this.transitionEl?.classList.add(CSS.closingIdle);
      this.close();
    }
  }
  /** Open the modal */
  openModal() {
    this.el.addEventListener("calciteModalOpen", this.openEnd);
    this.open = true;
    this.isOpen = true;
    const titleEl = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.el, SLOTS.header);
    const contentEl = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.el, SLOTS.content);
    this.titleId = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.r)(titleEl);
    this.contentId = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_2__.r)(contentEl);
    if (!this.slottedInShell) {
      document.documentElement.classList.add(CSS.overflowHidden);
    }
  }
  removeOverflowHiddenClass() {
    document.documentElement.classList.remove(CSS.overflowHidden);
  }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "focusTrapDisabled": ["handleFocusTrapDisabled"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleChange"],
    "open": ["toggleModal"]
  }; }
};
Modal.style = modalCss;




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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOWE3YjhkZmE5ZDdlZDFiODYxZGRhZDYwOTk1MTJiNDMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkc7QUFDaUI7QUFDQztBQUMwQjtBQUNyQztBQUN0RDtBQUNxQjtBQUNJO0FBQ29DO0FBQy9GO0FBQ0s7QUFDTjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLEdBQUcsVUFBVSxLQUFLLFdBQVcsbUJBQW1CLEdBQUcsVUFBVSxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxpQkFBaUIsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsZ0NBQWdDLG9CQUFvQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsbUJBQW1CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGlDQUFpQyxLQUFLLFVBQVUsNEJBQTRCLE1BQU0saUZBQWlGLHFFQUFxRSwrRkFBK0YsaUdBQWlHLCtGQUErRixpQkFBaUIsVUFBVSx5QkFBeUIsbURBQW1ELHFCQUFxQixrQkFBa0IsMEJBQTBCLHVCQUF1Qix3QkFBd0IscUJBQXFCLDJCQUEyQix3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHdDQUF3QyxNQUFNLHlDQUF5QyxNQUFNLGlFQUFpRSxrRUFBa0UsZ0JBQWdCLGFBQWEsTUFBTSxrQkFBa0IsVUFBVSwyQ0FBMkMsYUFBYSxVQUFVLDZCQUE2Qiw0S0FBNEssOERBQThELDZDQUE2QyxhQUFhLFdBQVcs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OztBQUVzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0R0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29EOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksWUFBWTtBQUN6QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9jYWxjaXRlLW1vZGFsLmVudHJ5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NvbmRpdGlvbmFsU2xvdC05NDZmYjkxMS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9sb2FkYWJsZS04MDU4ZTMwMC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9vcGVuQ2xvc2VDb21wb25lbnQtMjFkMmE2YWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgYyBhcyBjcmVhdGVFdmVudCwgaCwgSCBhcyBIb3N0LCBhIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCwgZCBhcyBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IH0gZnJvbSAnLi9jb25kaXRpb25hbFNsb3QtOTQ2ZmI5MTEuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRTbG90dGVkLCBkIGFzIHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQsIHAgYXMgZm9jdXNGaXJzdFRhYmJhYmxlLCByIGFzIGVuc3VyZUlkIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0IHsgZCBhcyBkZWFjdGl2YXRlRm9jdXNUcmFwLCBhIGFzIGFjdGl2YXRlRm9jdXNUcmFwLCBjIGFzIGNvbm5lY3RGb2N1c1RyYXAsIHUgYXMgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHMgfSBmcm9tICcuL2ZvY3VzVHJhcENvbXBvbmVudC0wN2FkY2IzZi5qcyc7XG5pbXBvcnQgeyBzIGFzIHNldFVwTG9hZGFibGVDb21wb25lbnQsIGEgYXMgc2V0Q29tcG9uZW50TG9hZGVkLCBjIGFzIGNvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtODA1OGUzMDAuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcbmltcG9ydCB7IG8gYXMgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQgfSBmcm9tICcuL29wZW5DbG9zZUNvbXBvbmVudC0yMWQyYTZhYi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcbmltcG9ydCB7IHMgYXMgc2V0VXBNZXNzYWdlcywgYyBhcyBjb25uZWN0TWVzc2FnZXMsIGQgYXMgZGlzY29ubmVjdE1lc3NhZ2VzLCB1IGFzIHVwZGF0ZU1lc3NhZ2VzIH0gZnJvbSAnLi90OW4tZmFjMTMzOTQuanMnO1xuaW1wb3J0ICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy0zNDJlMTJkMS5qcyc7XG5pbXBvcnQgJy4va2V5LThmZjBkMTAxLmpzJztcblxuY29uc3QgQ1NTID0ge1xuICBtb2RhbDogXCJtb2RhbFwiLFxuICB0aXRsZTogXCJ0aXRsZVwiLFxuICBoZWFkZXI6IFwiaGVhZGVyXCIsXG4gIGZvb3RlcjogXCJmb290ZXJcIixcbiAgc2NyaW06IFwic2NyaW1cIixcbiAgYmFjazogXCJiYWNrXCIsXG4gIGNsb3NlOiBcImNsb3NlXCIsXG4gIHNlY29uZGFyeTogXCJzZWNvbmRhcnlcIixcbiAgcHJpbWFyeTogXCJwcmltYXJ5XCIsXG4gIG92ZXJmbG93SGlkZGVuOiBcIm92ZXJmbG93LWhpZGRlblwiLFxuICBjb250YWluZXI6IFwiY29udGFpbmVyXCIsXG4gIGNvbnRhaW5lck9wZW46IFwiY29udGFpbmVyLS1vcGVuXCIsXG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICBjb250ZW50Tm9Gb290ZXI6IFwiY29udGVudC0tbm8tZm9vdGVyXCIsXG4gIGNvbnRlbnRCb3R0b206IFwiY29udGVudC1ib3R0b21cIixcbiAgY29udGVudFRvcDogXCJjb250ZW50LXRvcFwiLFxuICBzbG90dGVkSW5TaGVsbDogXCJzbG90dGVkLWluLXNoZWxsXCIsXG4gIC8vIHRoZXNlIGNsYXNzZXMgaGVscCBhcHBseSB0aGUgYW5pbWF0aW9uIGluIHBoYXNlcyB0byBvbmx5IHNldCB0cmFuc2Zvcm0gb24gb3Blbi9jbG9zZVxuICAvLyB0aGlzIGhlbHBzIGF2b2lkIGEgcG9zaXRpb25pbmcgaXNzdWUgZm9yIGFueSBmbG9hdGluZy11aS1vd25pbmcgY2hpbGRyZW5cbiAgb3BlbmluZ0lkbGU6IFwibW9kYWwtLW9wZW5pbmctaWRsZVwiLFxuICBvcGVuaW5nQWN0aXZlOiBcIm1vZGFsLS1vcGVuaW5nLWFjdGl2ZVwiLFxuICBjbG9zaW5nSWRsZTogXCJtb2RhbC0tY2xvc2luZy1pZGxlXCIsXG4gIGNsb3NpbmdBY3RpdmU6IFwibW9kYWwtLWNsb3NpbmctYWN0aXZlXCJcbn07XG5jb25zdCBJQ09OUyA9IHtcbiAgY2xvc2U6IFwieFwiXG59O1xuY29uc3QgU0xPVFMgPSB7XG4gIGNvbnRlbnQ6IFwiY29udGVudFwiLFxuICBjb250ZW50Qm90dG9tOiBcImNvbnRlbnQtYm90dG9tXCIsXG4gIGNvbnRlbnRUb3A6IFwiY29udGVudC10b3BcIixcbiAgaGVhZGVyOiBcImhlYWRlclwiLFxuICBiYWNrOiBcImJhY2tcIixcbiAgc2Vjb25kYXJ5OiBcInNlY29uZGFyeVwiLFxuICBwcmltYXJ5OiBcInByaW1hcnlcIlxufTtcblxuY29uc3QgbW9kYWxDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdHtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldDowcHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LW92ZXJsYXkpO2Rpc3BsYXk6ZmxleDtvcGFjaXR5OjA7dmlzaWJpbGl0eTpoaWRkZW4gIWltcG9ydGFudDt0cmFuc2l0aW9uOnZpc2liaWxpdHkgMG1zIGxpbmVhciB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdyksIG9wYWNpdHkgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIGN1YmljLWJlemllcigwLjIxNSwgMC40NCwgMC40MiwgMC44OCk7LS1jYWxjaXRlLW1vZGFsLXNjcmltLWJhY2tncm91bmQtaW50ZXJuYWw6cmdiYSgwLCAwLCAwLCAwLjg1KX0uY29udGVudC10b3BbaGlkZGVuXSwuY29udGVudC1ib3R0b21baGlkZGVuXXtkaXNwbGF5Om5vbmV9LmNvbnRhaW5lcntwb3NpdGlvbjpmaXhlZDtpbnNldDowcHg7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LW92ZXJsYXkpO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtvdmVyZmxvdy15OmhpZGRlbjtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMik7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVuICFpbXBvcnRhbnQ7dHJhbnNpdGlvbjp2aXNpYmlsaXR5IDBtcyBsaW5lYXIgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpLCBvcGFjaXR5IHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNDQsIDAuNDIsIDAuODgpfTpob3N0KFtzY2FsZT1zXSl7LS1jYWxjaXRlLW1vZGFsLXBhZGRpbmctaW50ZXJuYWw6MC43NXJlbTstLWNhbGNpdGUtbW9kYWwtcGFkZGluZy1sYXJnZS1pbnRlcm5hbDoxcmVtOy0tY2FsY2l0ZS1tb2RhbC10aXRsZS10ZXh0LWludGVybmFsOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTEpOy0tY2FsY2l0ZS1tb2RhbC1jb250ZW50LXRleHQtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTEpfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLW1vZGFsLXBhZGRpbmctaW50ZXJuYWw6MXJlbTstLWNhbGNpdGUtbW9kYWwtcGFkZGluZy1sYXJnZS1pbnRlcm5hbDoxLjI1cmVtOy0tY2FsY2l0ZS1tb2RhbC10aXRsZS10ZXh0LWludGVybmFsOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTIpOy0tY2FsY2l0ZS1tb2RhbC1jb250ZW50LXRleHQtaW50ZXJuYWw6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtMCl9Omhvc3QoW3NjYWxlPWxdKXstLWNhbGNpdGUtbW9kYWwtcGFkZGluZy1pbnRlcm5hbDoxLjI1cmVtOy0tY2FsY2l0ZS1tb2RhbC1wYWRkaW5nLWxhcmdlLWludGVybmFsOjEuNXJlbTstLWNhbGNpdGUtbW9kYWwtdGl0bGUtdGV4dC1pbnRlcm5hbDp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0zKTstLWNhbGNpdGUtbW9kYWwtY29udGVudC10ZXh0LWludGVybmFsOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTEpfS5zY3JpbXstLWNhbGNpdGUtc2NyaW0tYmFja2dyb3VuZDp2YXIoLS1jYWxjaXRlLW1vZGFsLXNjcmltLWJhY2tncm91bmQsIHZhcigtLWNhbGNpdGUtbW9kYWwtc2NyaW0tYmFja2dyb3VuZC1pbnRlcm5hbCkpO3Bvc2l0aW9uOmZpeGVkO2luc2V0OjBweDtkaXNwbGF5OmZsZXg7b3ZlcmZsb3cteTpoaWRkZW59Lm1vZGFse3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LW1vZGFsKTtmbG9hdDpub25lO21hcmdpbjoxLjVyZW07Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6ZmxleDtpbmxpbmUtc2l6ZToxMDAlO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXJhZGl1czowLjI1cmVtO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO29wYWNpdHk6MDstLXR3LXNoYWRvdzowIDJweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCA0cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTYpOy0tdHctc2hhZG93LWNvbG9yZWQ6MCAycHggMTJweCAtNHB4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgMnB4IDRweCAtMnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO3Zpc2liaWxpdHk6aGlkZGVuO3RyYW5zaXRpb246dHJhbnNmb3JtIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNDQsIDAuNDIsIDAuODgpLCB2aXNpYmlsaXR5IDBtcyBsaW5lYXIgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpLCBvcGFjaXR5IHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNDQsIDAuNDIsIDAuODgpOy0tY2FsY2l0ZS1tb2RhbC1oaWRkZW4tcG9zaXRpb246dHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7LS1jYWxjaXRlLW1vZGFsLXNob3duLXBvc2l0aW9uOnRyYW5zbGF0ZTNkKDAsIDAsIDApfS5tb2RhbC0tb3BlbmluZy1pZGxle3RyYW5zZm9ybTp2YXIoLS1jYWxjaXRlLW1vZGFsLWhpZGRlbi1wb3NpdGlvbil9Lm1vZGFsLS1vcGVuaW5nLWFjdGl2ZXt0cmFuc2Zvcm06dmFyKC0tY2FsY2l0ZS1tb2RhbC1zaG93bi1wb3NpdGlvbil9Lm1vZGFsLS1jbG9zaW5nLWlkbGV7dHJhbnNmb3JtOnZhcigtLWNhbGNpdGUtbW9kYWwtc2hvd24tcG9zaXRpb24pfS5tb2RhbC0tY2xvc2luZy1hY3RpdmV7dHJhbnNmb3JtOnZhcigtLWNhbGNpdGUtbW9kYWwtaGlkZGVuLXBvc2l0aW9uKX06aG9zdChbb3Blbl0pe29wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudDt0cmFuc2l0aW9uLWRlbGF5OjBtc30uY29udGFpbmVyLS1vcGVue29wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGUgIWltcG9ydGFudDt0cmFuc2l0aW9uLWRlbGF5OjBtc30uY29udGFpbmVyLS1vcGVuIC5tb2RhbHtwb2ludGVyLWV2ZW50czphdXRvO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3cpIGN1YmljLWJlemllcigwLjIxNSwgMC40NCwgMC40MiwgMC44OCksIHZpc2liaWxpdHkgMG1zIGxpbmVhciwgb3BhY2l0eSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjQ0LCAwLjQyLCAwLjg4KSwgbWF4LWlubGluZS1zaXplIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93KSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNDQsIDAuNDIsIDAuODgpLCBtYXgtYmxvY2stc2l6ZSB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdykgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjQ0LCAwLjQyLCAwLjg4KTt0cmFuc2l0aW9uLWRlbGF5OjBtc30uaGVhZGVye3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1oZWFkZXIpO2Rpc3BsYXk6ZmxleDttaW4taW5saW5lLXNpemU6MHB4O21heC1pbmxpbmUtc2l6ZToxMDAlO2JvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6MC4yNXJlbTtib3JkZXItc3RhcnQtZW5kLXJhZGl1czowLjI1cmVtO2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLWJsb2NrLWVuZC13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmbGV4OjAgMCBhdXRvfS5jbG9zZXtvcmRlcjoyO21hcmdpbjowcHg7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YXBwZWFyYW5jZTpub25lO2JvcmRlci1zdHlsZTpub25lO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjphbGwgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlLWluLW91dCAwcywgb3V0bGluZSAwcywgb3V0bGluZS1vZmZzZXQgMHM7cGFkZGluZy1ibG9jazp2YXIoLS1jYWxjaXRlLW1vZGFsLXBhZGRpbmctaW50ZXJuYWwpO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtbW9kYWwtcGFkZGluZy1pbnRlcm5hbCk7ZmxleDowIDAgYXV0b30uY2xvc2UgY2FsY2l0ZS1pY29ue3BvaW50ZXItZXZlbnRzOm5vbmU7dmVydGljYWwtYWxpZ246LTJweH0uY2xvc2U6Zm9jdXN7b3V0bGluZToycHggc29saWQgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1jb2xvciwgdmFyKC0tY2FsY2l0ZS11aS1icmFuZCkpO291dGxpbmUtb2Zmc2V0OmNhbGMoXFxuICAgICAgICAgICAgLTJweCAqXFxuICAgICAgICAgICAgY2FsYyhcXG4gICAgICAgICAgICAgIDEgLVxcbiAgICAgICAgICAgICAgMiAqIGNsYW1wKFxcbiAgICAgICAgICAgICAgICAwLFxcbiAgICAgICAgICAgICAgICB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLW9mZnNldC1pbnZlcnQpLFxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICApXFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICApfS5jbG9zZTpob3ZlciwuY2xvc2U6Zm9jdXMsLmNsb3NlOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0yKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSl9LnRpdGxle29yZGVyOjE7ZGlzcGxheTpmbGV4O21pbi1pbmxpbmUtc2l6ZTowcHg7YWxpZ24taXRlbXM6Y2VudGVyO2ZsZXg6MSAxIGF1dG87cGFkZGluZy1ibG9jazp2YXIoLS1jYWxjaXRlLW1vZGFsLXBhZGRpbmctaW50ZXJuYWwpO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtbW9kYWwtcGFkZGluZy1sYXJnZS1pbnRlcm5hbCl9c2xvdFtuYW1lPWhlYWRlcl06OnNsb3R0ZWQoKiksKjo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKXttYXJnaW46MHB4O2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbm9ybWFsKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtbW9kYWwtdGl0bGUtdGV4dC1pbnRlcm5hbCl9LmNvbnRlbnR7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7YmxvY2stc2l6ZToxMDAlO292ZXJmbG93OmF1dG87cGFkZGluZzowcHg7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLW1vZGFsLWNvbnRlbnQtYmFja2dyb3VuZCwgdmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpKTttYXgtYmxvY2stc2l6ZToxMDAlO3BhZGRpbmc6dmFyKC0tY2FsY2l0ZS1tb2RhbC1jb250ZW50LXBhZGRpbmcsIHZhcigtLWNhbGNpdGUtbW9kYWwtcGFkZGluZy1pbnRlcm5hbCkpfS5jb250ZW50LXRvcCwuY29udGVudC1ib3R0b217ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWhlYWRlcik7ZGlzcGxheTpmbGV4O2JvcmRlci13aWR0aDowcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmbGV4OjAgMCBhdXRvO3BhZGRpbmc6dmFyKC0tY2FsY2l0ZS1tb2RhbC1wYWRkaW5nLWludGVybmFsKX0uY29udGVudC10b3B7bWluLWlubGluZS1zaXplOjBweDttYXgtaW5saW5lLXNpemU6MTAwJTtib3JkZXItYmxvY2stZW5kLXdpZHRoOjFweH0uY29udGVudC1ib3R0b217bWFyZ2luLWJsb2NrLXN0YXJ0OmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O2lubGluZS1zaXplOjEwMCU7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Ym9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOjFweH0uY29udGVudC10b3A6bm90KC5oZWFkZXJ+LmNvbnRlbnQtdG9wKXtib3JkZXItc3RhcnQtc3RhcnQtcmFkaXVzOjAuMjVyZW07Ym9yZGVyLXN0YXJ0LWVuZC1yYWRpdXM6MC4yNXJlbX0uY29udGVudC1ib3R0b206bm90KC5jb250ZW50LWJvdHRvbX4uZm9vdGVyKSwuY29udGVudC0tbm8tZm9vdGVye2JvcmRlci1lbmQtZW5kLXJhZGl1czowLjI1cmVtO2JvcmRlci1lbmQtc3RhcnQtcmFkaXVzOjAuMjVyZW19c2xvdFtuYW1lPWNvbnRlbnRdOjpzbG90dGVkKCopLCo6OnNsb3R0ZWQoW3Nsb3Q9Y29udGVudF0pe2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLW1vZGFsLWNvbnRleHQtdGV4dC1pbnRlcm5hbCl9LmZvb3Rlcnt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtaGVhZGVyKTttYXJnaW4tYmxvY2stc3RhcnQ6YXV0bztib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjEwMCU7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Ym9yZGVyLWVuZC1lbmQtcmFkaXVzOjAuMjVyZW07Ym9yZGVyLWVuZC1zdGFydC1yYWRpdXM6MC4yNXJlbTtib3JkZXItd2lkdGg6MHB4O2JvcmRlci1ibG9jay1zdGFydC13aWR0aDoxcHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJvcmRlci0zKTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmbGV4OjAgMCBhdXRvO3BhZGRpbmctYmxvY2s6dmFyKC0tY2FsY2l0ZS1tb2RhbC1wYWRkaW5nLWludGVybmFsKTtwYWRkaW5nLWlubGluZTp2YXIoLS1jYWxjaXRlLW1vZGFsLXBhZGRpbmctbGFyZ2UtaW50ZXJuYWwpfS5mb290ZXItLWhpZGUtYmFjayAuYmFjaywuZm9vdGVyLS1oaWRlLXNlY29uZGFyeSAuc2Vjb25kYXJ5e2Rpc3BsYXk6bm9uZX0uYmFja3tkaXNwbGF5OmJsb2NrO21hcmdpbi1pbmxpbmUtZW5kOmF1dG99LnNlY29uZGFyeXttYXJnaW4taW5saW5lOjAuMjVyZW07ZGlzcGxheTpibG9ja31zbG90W25hbWU9cHJpbWFyeV17ZGlzcGxheTpibG9ja306aG9zdChbd2lkdGg9c21hbGxdKSAubW9kYWx7aW5saW5lLXNpemU6YXV0b306aG9zdChbd2lkdGg9c10pIC5tb2RhbHttYXgtYmxvY2stc2l6ZToxMDAlO21heC1pbmxpbmUtc2l6ZToxMDAlO2lubGluZS1zaXplOnZhcigtLWNhbGNpdGUtbW9kYWwtd2lkdGgsIDMycmVtKTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbW9kYWwtaGVpZ2h0LCBhdXRvKX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNXJlbSl7Omhvc3QoW3dpZHRoPXNdKSAubW9kYWx7bWFyZ2luOjBweDtibG9jay1zaXplOjEwMCU7bWF4LWJsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO21heC1pbmxpbmUtc2l6ZToxMDAlfTpob3N0KFt3aWR0aD1zXSkgLmNvbnRlbnR7ZmxleDoxIDEgYXV0bzttYXgtYmxvY2stc2l6ZTp1bnNldH06aG9zdChbd2lkdGg9c11bZG9ja2VkXSkgLmNvbnRhaW5lcnthbGlnbi1pdGVtczpmbGV4LWVuZH19Omhvc3QoW3dpZHRoPW1dKSAubW9kYWx7bWF4LWJsb2NrLXNpemU6MTAwJTttYXgtaW5saW5lLXNpemU6MTAwJTtpbmxpbmUtc2l6ZTp2YXIoLS1jYWxjaXRlLW1vZGFsLXdpZHRoLCA0OHJlbSk7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLW1vZGFsLWhlaWdodCwgYXV0byl9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTFyZW0pezpob3N0KFt3aWR0aD1tXSkgLm1vZGFse21hcmdpbjowcHg7YmxvY2stc2l6ZToxMDAlO21heC1ibG9jay1zaXplOjEwMCU7aW5saW5lLXNpemU6MTAwJTttYXgtaW5saW5lLXNpemU6MTAwJX06aG9zdChbd2lkdGg9bV0pIC5jb250ZW50e2ZsZXg6MSAxIGF1dG87bWF4LWJsb2NrLXNpemU6dW5zZXR9Omhvc3QoW3dpZHRoPW1dW2RvY2tlZF0pIC5jb250YWluZXJ7YWxpZ24taXRlbXM6ZmxleC1lbmR9fTpob3N0KFt3aWR0aD1sXSkgLm1vZGFse21heC1ibG9jay1zaXplOjEwMCU7bWF4LWlubGluZS1zaXplOjEwMCU7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1tb2RhbC13aWR0aCwgOTRyZW0pO2Jsb2NrLXNpemU6dmFyKC0tY2FsY2l0ZS1tb2RhbC1oZWlnaHQsIGF1dG8pfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk3cmVtKXs6aG9zdChbd2lkdGg9bF0pIC5tb2RhbHttYXJnaW46MHB4O2Jsb2NrLXNpemU6MTAwJTttYXgtYmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7bWF4LWlubGluZS1zaXplOjEwMCV9Omhvc3QoW3dpZHRoPWxdKSAuY29udGVudHtmbGV4OjEgMSBhdXRvO21heC1ibG9jay1zaXplOnVuc2V0fTpob3N0KFt3aWR0aD1sXVtkb2NrZWRdKSAuY29udGFpbmVye2FsaWduLWl0ZW1zOmZsZXgtZW5kfX06aG9zdChbZnVsbHNjcmVlbl0pIC5tb2RhbHttYXJnaW46MHB4O2Jsb2NrLXNpemU6MTAwJTttYXgtYmxvY2stc2l6ZToxMDAlO2lubGluZS1zaXplOjEwMCU7bWF4LWlubGluZS1zaXplOjEwMCU7Ym9yZGVyLXJhZGl1czowcHg7LS1jYWxjaXRlLW1vZGFsLWhpZGRlbi1wb3NpdGlvbjp0cmFuc2xhdGUzRCgwLCAyMHB4LCAwKSBzY2FsZSgwLjk1KTstLWNhbGNpdGUtbW9kYWwtc2hvd24tcG9zaXRpb246dHJhbnNsYXRlM0QoMCwgMCwgMCkgc2NhbGUoMSl9Omhvc3QoW2Z1bGxzY3JlZW5dKSAuY29udGVudHttYXgtYmxvY2stc2l6ZToxMDAlO2ZsZXg6MSAxIGF1dG99Omhvc3QoW29wZW5dW2Z1bGxzY3JlZW5dKSAuaGVhZGVyLDpob3N0KFtvcGVuXVtmdWxsc2NyZWVuXSkgLmZvb3Rlciw6aG9zdChbb3Blbl1bZnVsbHNjcmVlbl0pIC5jb250ZW50LXRvcCw6aG9zdChbb3Blbl1bZnVsbHNjcmVlbl0pIC5jb250ZW50LWJvdHRvbXtib3JkZXItcmFkaXVzOjB9Omhvc3QoW2RvY2tlZF0pIC5tb2RhbHtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtbW9kYWwtaGVpZ2h0LCBhdXRvKX06aG9zdChbZG9ja2VkXSkgLmNvbnRlbnR7YmxvY2stc2l6ZTphdXRvO2ZsZXg6MSAxIGF1dG99Omhvc3QoW2tpbmQ9YnJhbmRdKSAubW9kYWx7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfTpob3N0KFtraW5kPWRhbmdlcl0pIC5tb2RhbHtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1kYW5nZXIpfTpob3N0KFtraW5kPWluZm9dKSAubW9kYWx7Ym9yZGVyLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktaW5mbyl9Omhvc3QoW2tpbmQ9c3VjY2Vzc10pIC5tb2RhbHtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1zdWNjZXNzKX06aG9zdChba2luZD13YXJuaW5nXSkgLm1vZGFse2JvcmRlci1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXdhcm5pbmcpfTpob3N0KFtraW5kPWJyYW5kXSkgLm1vZGFsLDpob3N0KFtraW5kPWRhbmdlcl0pIC5tb2RhbCw6aG9zdChba2luZD1pbmZvXSkgLm1vZGFsLDpob3N0KFtraW5kPXN1Y2Nlc3NdKSAubW9kYWwsOmhvc3QoW2tpbmQ9d2FybmluZ10pIC5tb2RhbHtib3JkZXItd2lkdGg6MHB4O2JvcmRlci1ibG9jay1zdGFydC13aWR0aDo0cHg7Ym9yZGVyLXN0eWxlOnNvbGlkfTpob3N0KFtraW5kPWJyYW5kXSkgLmhlYWRlciw6aG9zdChba2luZD1icmFuZF0pIC5jb250ZW50LXRvcCw6aG9zdChba2luZD1kYW5nZXJdKSAuaGVhZGVyLDpob3N0KFtraW5kPWRhbmdlcl0pIC5jb250ZW50LXRvcCw6aG9zdChba2luZD1pbmZvXSkgLmhlYWRlciw6aG9zdChba2luZD1pbmZvXSkgLmNvbnRlbnQtdG9wLDpob3N0KFtraW5kPXN1Y2Nlc3NdKSAuaGVhZGVyLDpob3N0KFtraW5kPXN1Y2Nlc3NdKSAuY29udGVudC10b3AsOmhvc3QoW2tpbmQ9d2FybmluZ10pIC5oZWFkZXIsOmhvc3QoW2tpbmQ9d2FybmluZ10pIC5jb250ZW50LXRvcHtib3JkZXItcmFkaXVzOjAuMjVyZW07Ym9yZGVyLWVuZC1lbmQtcmFkaXVzOjBweDtib3JkZXItZW5kLXN0YXJ0LXJhZGl1czowcHh9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODYwcHgpeyogc2xvdFtuYW1lPWhlYWRlcl06OnNsb3R0ZWQoY29udGVudC10b3ApLCogY29udGVudC10b3A6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSl7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTEpfS5mb290ZXIsLmNvbnRlbnQtYm90dG9te3Bvc2l0aW9uOnN0aWNreTtpbnNldC1ibG9jay1lbmQ6MHB4fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7LmZvb3RlciwuY29udGVudC1ib3R0b217ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5iYWNrLC5zZWNvbmRhcnl7bWFyZ2luOjBweDttYXJnaW4tYmxvY2stZW5kOjAuMjVyZW19fS5jb250YWluZXIuc2xvdHRlZC1pbi1zaGVsbHtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czphdXRvfS5jb250YWluZXIuc2xvdHRlZC1pbi1zaGVsbCBjYWxjaXRlLXNjcmlte3Bvc2l0aW9uOmFic29sdXRlfVwiO1xuXG5jb25zdCBNb2RhbCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlTW9kYWxCZWZvcmVDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZU1vZGFsQmVmb3JlQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTW9kYWxDbG9zZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZU1vZGFsQ2xvc2VcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlTW9kYWxCZWZvcmVPcGVuID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlTW9kYWxCZWZvcmVPcGVuXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZU1vZGFsT3BlbiA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZU1vZGFsT3BlblwiLCA2KTtcbiAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsICgpID0+IHRoaXMuaGFuZGxlTXV0YXRpb25PYnNlcnZlcigpKTtcbiAgICB0aGlzLmNzc1Zhck9ic2VydmVyID0gY3JlYXRlT2JzZXJ2ZXIoXCJtdXRhdGlvblwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVNpemVDc3NWYXJzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgPSBcIm9wYWNpdHlcIjtcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gICAgLy9cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zZXRUcmFuc2l0aW9uRWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbkVsID0gZWw7XG4gICAgfTtcbiAgICB0aGlzLm9wZW5FbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldEZvY3VzKCk7XG4gICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjYWxjaXRlTW9kYWxPcGVuXCIsIHRoaXMub3BlbkVuZCk7XG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZU91dHNpZGVDbG9zZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLm91dHNpZGVDbG9zZURpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9O1xuICAgIC8qKiBDbG9zZSB0aGUgbW9kYWwsIGZpcnN0IHJ1bm5pbmcgdGhlIGBiZWZvcmVDbG9zZWAgbWV0aG9kICovXG4gICAgdGhpcy5jbG9zZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmJlZm9yZUNsb3NlKHRoaXMuZWwpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW1vdmVPdmVyZmxvd0hpZGRlbkNsYXNzKCk7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlTXV0YXRpb25PYnNlcnZlciA9ICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlRm9vdGVyVmlzaWJpbGl0eSgpO1xuICAgICAgdGhpcy51cGRhdGVGb2N1c1RyYXBFbGVtZW50cygpO1xuICAgIH07XG4gICAgdGhpcy51cGRhdGVGb290ZXJWaXNpYmlsaXR5ID0gKCkgPT4ge1xuICAgICAgdGhpcy5oYXNGb290ZXIgPSAhIWdldFNsb3R0ZWQodGhpcy5lbCwgW1NMT1RTLmJhY2ssIFNMT1RTLnByaW1hcnksIFNMT1RTLnNlY29uZGFyeV0pO1xuICAgIH07XG4gICAgdGhpcy51cGRhdGVTaXplQ3NzVmFycyA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3NzV2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpLmdldFByb3BlcnR5VmFsdWUoXCItLWNhbGNpdGUtbW9kYWwtd2lkdGhcIik7XG4gICAgICB0aGlzLmNzc0hlaWdodCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbCkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tY2FsY2l0ZS1tb2RhbC1oZWlnaHRcIik7XG4gICAgfTtcbiAgICB0aGlzLmNvbnRlbnRUb3BTbG90Q2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNDb250ZW50VG9wID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmNvbnRlbnRCb3R0b21TbG90Q2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5oYXNDb250ZW50Qm90dG9tID0gc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmJlZm9yZUNsb3NlID0gKCkgPT4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdGhpcy5jbG9zZUJ1dHRvbkRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c1RyYXBEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMub3V0c2lkZUNsb3NlRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRvY2tlZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVzY2FwZURpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsZSA9IFwibVwiO1xuICAgIHRoaXMud2lkdGggPSBcIm1cIjtcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5raW5kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2xvdHRlZEluU2hlbGwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jc3NXaWR0aCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNzc0hlaWdodCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmhhc0Zvb3RlciA9IHRydWU7XG4gICAgdGhpcy5oYXNDb250ZW50VG9wID0gZmFsc2U7XG4gICAgdGhpcy5oYXNDb250ZW50Qm90dG9tID0gZmFsc2U7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICBoYW5kbGVGb2N1c1RyYXBEaXNhYmxlZChmb2N1c1RyYXBEaXNhYmxlZCkge1xuICAgIGlmICghdGhpcy5vcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvY3VzVHJhcERpc2FibGVkID8gZGVhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKSA6IGFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIG9uTWVzc2FnZXNDaGFuZ2UoKSB7XG4gICAgLyogd2lyZWQgdXAgYnkgdDluIHV0aWwgKi9cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhc3luYyBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICBhd2FpdCBzZXRVcE1lc3NhZ2VzKHRoaXMpO1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgLy8gd2hlbiBtb2RhbCBpbml0aWFsbHkgcmVuZGVycywgaWYgYWN0aXZlIHdhcyBzZXQgd2UgbmVlZCB0byBvcGVuIGFzIHdhdGNoZXIgZG9lc24ndCBmaXJlXG4gICAgaWYgKHRoaXMub3Blbikge1xuICAgICAgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5vcGVuTW9kYWwoKSk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8ub2JzZXJ2ZSh0aGlzLmVsLCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmNzc1Zhck9ic2VydmVyPy5vYnNlcnZlKHRoaXMuZWwsIHsgYXR0cmlidXRlRmlsdGVyOiBbXCJzdHlsZVwiXSB9KTtcbiAgICB0aGlzLnVwZGF0ZVNpemVDc3NWYXJzKCk7XG4gICAgdGhpcy51cGRhdGVGb290ZXJWaXNpYmlsaXR5KCk7XG4gICAgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCh0aGlzKTtcbiAgICBjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICBjb25uZWN0Rm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVtb3ZlT3ZlcmZsb3dIaWRkZW5DbGFzcygpO1xuICAgIHRoaXMubXV0YXRpb25PYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMuY3NzVmFyT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KHRoaXMpO1xuICAgIGRlYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gICAgZGlzY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBkaXNjb25uZWN0TWVzc2FnZXModGhpcyk7XG4gICAgdGhpcy5zbG90dGVkSW5TaGVsbCA9IGZhbHNlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKGgoSG9zdCwgeyBcImFyaWEtZGVzY3JpYmVkYnlcIjogdGhpcy5jb250ZW50SWQsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHRoaXMudGl0bGVJZCwgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLCByb2xlOiBcImRpYWxvZ1wiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmNvbnRhaW5lcl06IHRydWUsXG4gICAgICAgIFtDU1MuY29udGFpbmVyT3Blbl06IHRoaXMuaXNPcGVuLFxuICAgICAgICBbQ1NTLnNsb3R0ZWRJblNoZWxsXTogdGhpcy5zbG90dGVkSW5TaGVsbFxuICAgICAgfSB9LCBoKFwiY2FsY2l0ZS1zY3JpbVwiLCB7IGNsYXNzOiBDU1Muc2NyaW0sIG9uQ2xpY2s6IHRoaXMuaGFuZGxlT3V0c2lkZUNsb3NlIH0pLCB0aGlzLnJlbmRlclN0eWxlKCksIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLm1vZGFsXTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldFRyYW5zaXRpb25FbCB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5oZWFkZXIgfSwgdGhpcy5yZW5kZXJDbG9zZUJ1dHRvbigpLCBoKFwiaGVhZGVyXCIsIHsgY2xhc3M6IENTUy50aXRsZSB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IENTUy5oZWFkZXIgfSkpKSwgdGhpcy5yZW5kZXJDb250ZW50VG9wKCksIGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmNvbnRlbnRdOiB0cnVlLFxuICAgICAgICBbQ1NTLmNvbnRlbnROb0Zvb3Rlcl06ICF0aGlzLmhhc0Zvb3RlclxuICAgICAgfSxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1vZGFsQ29udGVudCA9IGVsKSB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmNvbnRlbnQgfSkpLCB0aGlzLnJlbmRlckNvbnRlbnRCb3R0b20oKSwgdGhpcy5yZW5kZXJGb290ZXIoKSkpKSk7XG4gIH1cbiAgcmVuZGVyRm9vdGVyKCkge1xuICAgIHJldHVybiB0aGlzLmhhc0Zvb3RlciA/IChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5mb290ZXIsIGtleTogXCJmb290ZXJcIiB9LCBoKFwic3BhblwiLCB7IGNsYXNzOiBDU1MuYmFjayB9LCBoKFwic2xvdFwiLCB7IG5hbWU6IFNMT1RTLmJhY2sgfSkpLCBoKFwic3BhblwiLCB7IGNsYXNzOiBDU1Muc2Vjb25kYXJ5IH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuc2Vjb25kYXJ5IH0pKSwgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLnByaW1hcnkgfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5wcmltYXJ5IH0pKSkpIDogbnVsbDtcbiAgfVxuICByZW5kZXJDb250ZW50VG9wKCkge1xuICAgIHJldHVybiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29udGVudFRvcCwgaGlkZGVuOiAhdGhpcy5oYXNDb250ZW50VG9wIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogU0xPVFMuY29udGVudFRvcCwgb25TbG90Y2hhbmdlOiB0aGlzLmNvbnRlbnRUb3BTbG90Q2hhbmdlSGFuZGxlciB9KSkpO1xuICB9XG4gIHJlbmRlckNvbnRlbnRCb3R0b20oKSB7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb250ZW50Qm90dG9tLCBoaWRkZW46ICF0aGlzLmhhc0NvbnRlbnRCb3R0b20gfSwgaChcInNsb3RcIiwgeyBuYW1lOiBTTE9UUy5jb250ZW50Qm90dG9tLCBvblNsb3RjaGFuZ2U6IHRoaXMuY29udGVudEJvdHRvbVNsb3RDaGFuZ2VIYW5kbGVyIH0pKSk7XG4gIH1cbiAgcmVuZGVyQ2xvc2VCdXR0b24oKSB7XG4gICAgcmV0dXJuICF0aGlzLmNsb3NlQnV0dG9uRGlzYWJsZWQgPyAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLmNsb3NlLCBjbGFzczogQ1NTLmNsb3NlLCBrZXk6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IHRoaXMuY2xvc2UsIHRpdGxlOiB0aGlzLm1lc3NhZ2VzLmNsb3NlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMuY2xvc2VCdXR0b25FbCA9IGVsKSB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogSUNPTlMuY2xvc2UsIHNjYWxlOiB0aGlzLnNjYWxlID09PSBcInNcIiA/IFwic1wiIDogdGhpcy5zY2FsZSA9PT0gXCJtXCIgPyBcIm1cIiA6IHRoaXMuc2NhbGUgPT09IFwibFwiID8gXCJsXCIgOiBudWxsIH0pKSkgOiBudWxsO1xuICB9XG4gIHJlbmRlclN0eWxlKCkge1xuICAgIGlmICghdGhpcy5mdWxsc2NyZWVuICYmICh0aGlzLmNzc1dpZHRoIHx8IHRoaXMuY3NzSGVpZ2h0KSkge1xuICAgICAgcmV0dXJuIChoKFwic3R5bGVcIiwgbnVsbCwgYC4ke0NTUy5jb250YWluZXJ9IHtcbiAgICAgICAgICAgICAgJHt0aGlzLmRvY2tlZCAmJiB0aGlzLmNzc1dpZHRoID8gYGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtgIDogXCJcIn1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC4ke0NTUy5tb2RhbH0ge1xuICAgICAgICAgICAgICBibG9jay1zaXplOiAke3RoaXMuY3NzSGVpZ2h0ID8gdGhpcy5jc3NIZWlnaHQgOiBcImF1dG9cIn0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgJHt0aGlzLmNzc1dpZHRoID8gYGlubGluZS1zaXplOiAke3RoaXMuY3NzV2lkdGh9ICFpbXBvcnRhbnQ7YCA6IFwiXCJ9XG4gICAgICAgICAgICAgICR7dGhpcy5jc3NXaWR0aCA/IGBtYXgtaW5saW5lLXNpemU6ICR7dGhpcy5jc3NXaWR0aH0gIWltcG9ydGFudDtgIDogXCJcIn1cbiAgICAgICAgICAgICAgJHt0aGlzLmRvY2tlZCA/IGBib3JkZXItcmFkaXVzOiB2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpICFpbXBvcnRhbnQ7YCA6IFwiXCJ9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3RoaXMuY3NzV2lkdGh9KSB7XG4gICAgICAgICAgICAgIC4ke0NTUy5jb250YWluZXJ9IHtcbiAgICAgICAgICAgICAgICAke3RoaXMuZG9ja2VkID8gYGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O2AgOiBcIlwifVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC4ke0NTUy5tb2RhbH0ge1xuICAgICAgICAgICAgICAgIG1heC1ibG9jay1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaW5saW5lLXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXgtaW5saW5lLXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtaW4taW5saW5lLXNpemU6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAkeyF0aGlzLmRvY2tlZCA/IGBibG9jay1zaXplOiAxMDAlICFpbXBvcnRhbnQ7YCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgJHshdGhpcy5kb2NrZWQgPyBgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O2AgOiBcIlwifVxuICAgICAgICAgICAgICAgICR7dGhpcy5kb2NrZWRcbiAgICAgICAgPyBgYm9yZGVyLXJhZGl1czogdmFyKC0tY2FsY2l0ZS1ib3JkZXItcmFkaXVzKSB2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpIDAgMCAhaW1wb3J0YW50O2BcbiAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYCkpO1xuICAgIH1cbiAgfVxuICBlZmZlY3RpdmVMb2NhbGVDaGFuZ2UoKSB7XG4gICAgdXBkYXRlTWVzc2FnZXModGhpcywgdGhpcy5lZmZlY3RpdmVMb2NhbGUpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhhbmRsZUVzY2FwZShldmVudCkge1xuICAgIGlmICh0aGlzLm9wZW4gJiYgIXRoaXMuZXNjYXBlRGlzYWJsZWQgJiYgZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiICYmICFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBQdWJsaWMgTWV0aG9kc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8qKlxuICAgKiBTZXRzIGZvY3VzIG9uIHRoZSBjb21wb25lbnQncyBcImNsb3NlXCIgYnV0dG9uICh0aGUgZmlyc3QgZm9jdXNhYmxlIGl0ZW0pLlxuICAgKlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGZvY3VzRmlyc3RUYWJiYWJsZSh0aGlzLmVsKTtcbiAgfVxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgZWxlbWVudChzKSB0aGF0IGFyZSB1c2VkIHdpdGhpbiB0aGUgZm9jdXMtdHJhcCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgYXN5bmMgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHMoKSB7XG4gICAgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHModGhpcyk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNjcm9sbCB0b3Agb2YgdGhlIGNvbXBvbmVudCdzIGNvbnRlbnQuXG4gICAqXG4gICAqIEBwYXJhbSB0b3BcbiAgICogQHBhcmFtIGxlZnRcbiAgICovXG4gIGFzeW5jIHNjcm9sbENvbnRlbnQodG9wID0gMCwgbGVmdCA9IDApIHtcbiAgICBpZiAodGhpcy5tb2RhbENvbnRlbnQpIHtcbiAgICAgIGlmICh0aGlzLm1vZGFsQ29udGVudC5zY3JvbGxUbykge1xuICAgICAgICB0aGlzLm1vZGFsQ29udGVudC5zY3JvbGxUbyh7IHRvcCwgbGVmdCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5tb2RhbENvbnRlbnQuc2Nyb2xsVG9wID0gdG9wO1xuICAgICAgICB0aGlzLm1vZGFsQ29udGVudC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25CZWZvcmVPcGVuKCkge1xuICAgIHRoaXMudHJhbnNpdGlvbkVsLmNsYXNzTGlzdC5hZGQoQ1NTLm9wZW5pbmdBY3RpdmUpO1xuICAgIHRoaXMuY2FsY2l0ZU1vZGFsQmVmb3JlT3Blbi5lbWl0KCk7XG4gIH1cbiAgb25PcGVuKCkge1xuICAgIHRoaXMudHJhbnNpdGlvbkVsLmNsYXNzTGlzdC5yZW1vdmUoQ1NTLm9wZW5pbmdJZGxlLCBDU1Mub3BlbmluZ0FjdGl2ZSk7XG4gICAgdGhpcy5jYWxjaXRlTW9kYWxPcGVuLmVtaXQoKTtcbiAgICBhY3RpdmF0ZUZvY3VzVHJhcCh0aGlzKTtcbiAgfVxuICBvbkJlZm9yZUNsb3NlKCkge1xuICAgIHRoaXMudHJhbnNpdGlvbkVsLmNsYXNzTGlzdC5hZGQoQ1NTLmNsb3NpbmdBY3RpdmUpO1xuICAgIHRoaXMuY2FsY2l0ZU1vZGFsQmVmb3JlQ2xvc2UuZW1pdCgpO1xuICB9XG4gIG9uQ2xvc2UoKSB7XG4gICAgdGhpcy50cmFuc2l0aW9uRWwuY2xhc3NMaXN0LnJlbW92ZShDU1MuY2xvc2luZ0lkbGUsIENTUy5jbG9zaW5nQWN0aXZlKTtcbiAgICB0aGlzLmNhbGNpdGVNb2RhbENsb3NlLmVtaXQoKTtcbiAgICBkZWFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpO1xuICB9XG4gIGFzeW5jIHRvZ2dsZU1vZGFsKHZhbHVlKSB7XG4gICAgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQodGhpcyk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25FbD8uY2xhc3NMaXN0LmFkZChDU1Mub3BlbmluZ0lkbGUpO1xuICAgICAgdGhpcy5vcGVuTW9kYWwoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25FbD8uY2xhc3NMaXN0LmFkZChDU1MuY2xvc2luZ0lkbGUpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuICAvKiogT3BlbiB0aGUgbW9kYWwgKi9cbiAgb3Blbk1vZGFsKCkge1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNhbGNpdGVNb2RhbE9wZW5cIiwgdGhpcy5vcGVuRW5kKTtcbiAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICBjb25zdCB0aXRsZUVsID0gZ2V0U2xvdHRlZCh0aGlzLmVsLCBTTE9UUy5oZWFkZXIpO1xuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGdldFNsb3R0ZWQodGhpcy5lbCwgU0xPVFMuY29udGVudCk7XG4gICAgdGhpcy50aXRsZUlkID0gZW5zdXJlSWQodGl0bGVFbCk7XG4gICAgdGhpcy5jb250ZW50SWQgPSBlbnN1cmVJZChjb250ZW50RWwpO1xuICAgIGlmICghdGhpcy5zbG90dGVkSW5TaGVsbCkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoQ1NTLm92ZXJmbG93SGlkZGVuKTtcbiAgICB9XG4gIH1cbiAgcmVtb3ZlT3ZlcmZsb3dIaWRkZW5DbGFzcygpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDU1Mub3ZlcmZsb3dIaWRkZW4pO1xuICB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJmb2N1c1RyYXBEaXNhYmxlZFwiOiBbXCJoYW5kbGVGb2N1c1RyYXBEaXNhYmxlZFwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVDaGFuZ2VcIl0sXG4gICAgXCJvcGVuXCI6IFtcInRvZ2dsZU1vZGFsXCJdXG4gIH07IH1cbn07XG5Nb2RhbC5zdHlsZSA9IG1vZGFsQ3NzO1xuXG5leHBvcnQgeyBNb2RhbCBhcyBjYWxjaXRlX21vZGFsIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgZiBhcyBmb3JjZVVwZGF0ZSB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgYyBhcyBjcmVhdGVPYnNlcnZlciB9IGZyb20gJy4vb2JzZXJ2ZXJzLTk1ZTk3ZmFlLmpzJztcblxuY29uc3Qgb2JzZXJ2ZWQgPSBuZXcgU2V0KCk7XG5sZXQgbXV0YXRpb25PYnNlcnZlcjtcbmNvbnN0IG9ic2VydmVyT3B0aW9ucyA9IHsgY2hpbGRMaXN0OiB0cnVlIH07XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgYSBjb25kaXRpb25hbCBzbG90IGNvbXBvbmVudCBvbiBjb25uZWN0ZWRDYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAZGVwcmVjYXRlZCBVc2UgYG9uU2xvdGNoYW5nZWAgZXZlbnQgd2l0aCBgc2xvdENoYW5nZUhhc0Fzc2lnbmVkRWxlbWVudGAgRE9NIHV0aWxpdHkgaW5zdGVhZC5cbiAqXG4gKiBgYGBcbiAqIDxzbG90IG9uU2xvdGNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLm15U2xvdEhhc0VsZW1lbnQgPSBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50KGV2ZW50KX0gLz59XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24gY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlciA9IGNyZWF0ZU9ic2VydmVyKFwibXV0YXRpb25cIiwgcHJvY2Vzc011dGF0aW9ucyk7XG4gIH1cbiAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudC5lbCwgb2JzZXJ2ZXJPcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biBhIGNvbmRpdGlvbmFsIHNsb3QgY29tcG9uZW50IG9uIGRpc2Nvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBkZXByZWNhdGVkIFVzZSBgb25TbG90Y2hhbmdlYCBldmVudCB3aXRoIGBzbG90Q2hhbmdlSGFzQXNzaWduZWRFbGVtZW50YCBET00gdXRpbGl0eSBpbnN0ZWFkLlxuICpcbiAqIGBgYFxuICogPHNsb3Qgb25TbG90Y2hhbmdlPXsoZXZlbnQpID0+IHRoaXMubXlTbG90SGFzRWxlbWVudCA9IHNsb3RDaGFuZ2VIYXNBc3NpZ25lZEVsZW1lbnQoZXZlbnQpfSAvPn1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50KGNvbXBvbmVudCkge1xuICBvYnNlcnZlZC5kZWxldGUoY29tcG9uZW50LmVsKTtcbiAgLy8gd2UgZXhwbGljaXRseSBwcm9jZXNzIHF1ZXVlZCBtdXRhdGlvbnMgYW5kIGRpc2Nvbm5lY3QgYW5kIHJlY29ubmVjdFxuICAvLyB0aGUgb2JzZXJ2ZXIgdW50aWwgTXV0YXRpb25PYnNlcnZlciBnZXRzIGFuIGB1bm9ic2VydmVgIG1ldGhvZFxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNlxuICBwcm9jZXNzTXV0YXRpb25zKG11dGF0aW9uT2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICBmb3IgKGNvbnN0IFtlbGVtZW50XSBvZiBvYnNlcnZlZC5lbnRyaWVzKCkpIHtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgb2JzZXJ2ZXJPcHRpb25zKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc011dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgbXV0YXRpb25zLmZvckVhY2goKHsgdGFyZ2V0IH0pID0+IHtcbiAgICBmb3JjZVVwZGF0ZSh0YXJnZXQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdENvbmRpdGlvbmFsU2xvdENvbXBvbmVudCBhcyBjLCBkaXNjb25uZWN0Q29uZGl0aW9uYWxTbG90Q29tcG9uZW50IGFzIGQgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBzdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyBcInNldFVwTG9hZGFibGVDb21wb25lbnRcIiBhbmQgXCJzZXRDb21wb25lbnRMb2FkZWRcIiB0byBiZSBjYWxsZWQgZmlyc3QuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHByb21pc2VNYXAuZ2V0KGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IHNldENvbXBvbmVudExvYWRlZCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYywgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBzIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgZSBhcyByZWFkVGFzayB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuXG5jb25zdCBjb21wb25lbnRUb1RyYW5zaXRpb25MaXN0ZW5lcnMgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gdHJhbnNpdGlvblN0YXJ0KGV2ZW50KSB7XG4gIGlmIChldmVudC5wcm9wZXJ0eU5hbWUgPT09IHRoaXMub3BlblRyYW5zaXRpb25Qcm9wICYmIGV2ZW50LnRhcmdldCA9PT0gdGhpcy50cmFuc2l0aW9uRWwpIHtcbiAgICB0aGlzLm9wZW4gPyB0aGlzLm9uQmVmb3JlT3BlbigpIDogdGhpcy5vbkJlZm9yZUNsb3NlKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgJiYgZXZlbnQudGFyZ2V0ID09PSB0aGlzLnRyYW5zaXRpb25FbCkge1xuICAgIHRoaXMub3BlbiA/IHRoaXMub25PcGVuKCkgOiB0aGlzLm9uQ2xvc2UoKTtcbiAgfVxufVxuLyoqXG4gKiBIZWxwZXIgdG8gZGV0ZXJtaW5lIGdsb2JhbGx5IHNldCB0cmFuc2l0aW9uIGR1cmF0aW9uIG9uIHRoZSBnaXZlbiBvcGVuVHJhbnNpdGlvblByb3AsIHdoaWNoIGlzIGltcG9ydGVkIGFuZCBzZXQgaW4gdGhlIEBXYXRjaChcIm9wZW5cIikuXG4gKiBVc2VkIHRvIGVtaXQgKGJlZm9yZSlvcGVuL2Nsb3NlIGV2ZW50cyBib3RoIGZvciB3aGVuIHRoZSBvcGFjaXR5IHRyYW5zaXRpb24gaXMgcHJlc2VudCBhbmQgd2hlbiB0aGVyZSBpcyBub25lICh0cmFuc2l0aW9uLWR1cmF0aW9uIGlzIHNldCB0byAwKS5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gbm9uT3BlbkNsb3NlQ29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50KGNvbXBvbmVudCwgbm9uT3BlbkNsb3NlQ29tcG9uZW50ID0gZmFsc2UpIHtcbiAgcmVhZFRhc2soKCkgPT4ge1xuICAgIGlmIChjb21wb25lbnQudHJhbnNpdGlvbkVsKSB7XG4gICAgICBjb25zdCBhbGxUcmFuc2l0aW9uUHJvcHNBcnJheSA9IGdldENvbXB1dGVkU3R5bGUoY29tcG9uZW50LnRyYW5zaXRpb25FbCkudHJhbnNpdGlvbi5zcGxpdChcIiBcIik7XG4gICAgICBjb25zdCBvcGVuVHJhbnNpdGlvblByb3BJbmRleCA9IGFsbFRyYW5zaXRpb25Qcm9wc0FycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gY29tcG9uZW50Lm9wZW5UcmFuc2l0aW9uUHJvcCk7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBhbGxUcmFuc2l0aW9uUHJvcHNBcnJheVtvcGVuVHJhbnNpdGlvblByb3BJbmRleCArIDFdO1xuICAgICAgaWYgKHRyYW5zaXRpb25EdXJhdGlvbiA9PT0gXCIwc1wiKSB7XG4gICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGNvbXBvbmVudC5vcGVuKVxuICAgICAgICAgID8gY29tcG9uZW50Lm9uQmVmb3JlT3BlbigpXG4gICAgICAgICAgOiBjb21wb25lbnQub25CZWZvcmVDbG9zZSgpO1xuICAgICAgICAobm9uT3BlbkNsb3NlQ29tcG9uZW50ID8gY29tcG9uZW50W2NvbXBvbmVudC50cmFuc2l0aW9uUHJvcF0gOiBjb21wb25lbnQub3BlbilcbiAgICAgICAgICA/IGNvbXBvbmVudC5vbk9wZW4oKVxuICAgICAgICAgIDogY29tcG9uZW50Lm9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uc3RhcnRcIiwgKCkgPT4ge1xuICAgICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGNvbXBvbmVudC5vcGVuKVxuICAgICAgICAgICAgPyBjb21wb25lbnQub25CZWZvcmVPcGVuKClcbiAgICAgICAgICAgIDogY29tcG9uZW50Lm9uQmVmb3JlQ2xvc2UoKTtcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAobm9uT3BlbkNsb3NlQ29tcG9uZW50ID8gY29tcG9uZW50W2NvbXBvbmVudC50cmFuc2l0aW9uUHJvcF0gOiBjb21wb25lbnQub3BlbilcbiAgICAgICAgICAgID8gY29tcG9uZW50Lm9uT3BlbigpXG4gICAgICAgICAgICA6IGNvbXBvbmVudC5vbkNsb3NlKCk7XG4gICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8ga2VlcCB0cmFjayBvZiB0cmFuc2l0aW9uIGxpc3RlbmVycyBvbiBzZXRUcmFuc2l0aW9uRWwgYW5kIGNvbm5lY3RlZENhbGxiYWNrIG9uIE9wZW5DbG9zZUNvbXBvbmVudCBjb21wb25lbnRzLlxuICpcbiAqIEZvciBjb21wb25lbnQgd2hpY2ggZG8gbm90IGhhdmUgb3BlbiBwcm9wLCB1c2UgYG9uVG9nZ2xlT3BlbkNsb3NlQ29tcG9uZW50YCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGRpc2Nvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQoY29tcG9uZW50KTtcbiAgaWYgKGNvbXBvbmVudC50cmFuc2l0aW9uRWwpIHtcbiAgICBjb25zdCBib3VuZE9uVHJhbnNpdGlvblN0YXJ0ID0gdHJhbnNpdGlvblN0YXJ0LmJpbmQoY29tcG9uZW50KTtcbiAgICBjb25zdCBib3VuZE9uVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmQuYmluZChjb21wb25lbnQpO1xuICAgIGNvbXBvbmVudFRvVHJhbnNpdGlvbkxpc3RlbmVycy5zZXQoY29tcG9uZW50LCBbXG4gICAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLFxuICAgICAgYm91bmRPblRyYW5zaXRpb25TdGFydCxcbiAgICAgIGJvdW5kT25UcmFuc2l0aW9uRW5kXG4gICAgXSk7XG4gICAgY29tcG9uZW50LnRyYW5zaXRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbnN0YXJ0XCIsIGJvdW5kT25UcmFuc2l0aW9uU3RhcnQpO1xuICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgYm91bmRPblRyYW5zaXRpb25FbmQpO1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gdHJhbnNpdGlvbiBsaXN0ZW5lcnMgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2sgb24gT3BlbkNsb3NlQ29tcG9uZW50IGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICBpZiAoIWNvbXBvbmVudFRvVHJhbnNpdGlvbkxpc3RlbmVycy5oYXMoY29tcG9uZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBbdHJhbnNpdGlvbkVsLCBzdGFydCwgZW5kXSA9IGNvbXBvbmVudFRvVHJhbnNpdGlvbkxpc3RlbmVycy5nZXQoY29tcG9uZW50KTtcbiAgdHJhbnNpdGlvbkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uc3RhcnRcIiwgc3RhcnQpO1xuICB0cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZW5kKTtcbiAgY29tcG9uZW50VG9UcmFuc2l0aW9uTGlzdGVuZXJzLmRlbGV0ZShjb21wb25lbnQpO1xufVxuXG5leHBvcnQgeyBjb25uZWN0T3BlbkNsb3NlQ29tcG9uZW50IGFzIGMsIGRpc2Nvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQgYXMgZCwgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQgYXMgbyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9