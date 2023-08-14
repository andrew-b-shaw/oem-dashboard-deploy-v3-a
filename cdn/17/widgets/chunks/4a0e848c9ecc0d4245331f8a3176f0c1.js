"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_form-44530001_js-node_modules_esri_calc-73fb65"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/form-44530001.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/form-44530001.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ HiddenFormInputSlot),
/* harmony export */   "a": () => (/* binding */ afterConnectDefaultValueSet),
/* harmony export */   "c": () => (/* binding */ connectForm),
/* harmony export */   "d": () => (/* binding */ disconnectForm),
/* harmony export */   "f": () => (/* binding */ findAssociatedForm),
/* harmony export */   "r": () => (/* binding */ resetForm),
/* harmony export */   "s": () => (/* binding */ submitForm)
/* harmony export */ });
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/* harmony import */ var _index_a6760286_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-a6760286.js */ "./node_modules/@esri/calcite-components/dist/esm/index-a6760286.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */



(function(prototype) {
  if (typeof prototype.requestSubmit == "function") return

  prototype.requestSubmit = function(submitter) {
    if (submitter) {
      validateSubmitter(submitter, this);
      submitter.click();
    } else {
      submitter = document.createElement("input");
      submitter.type = "submit";
      submitter.hidden = true;
      this.appendChild(submitter);
      submitter.click();
      this.removeChild(submitter);
    }
  };

  function validateSubmitter(submitter, form) {
    submitter instanceof HTMLElement || raise(TypeError, "parameter 1 is not of type 'HTMLElement'");
    submitter.type == "submit" || raise(TypeError, "The specified element is not a submit button");
    submitter.form == form || raise(DOMException, "The specified element is not owned by this form element", "NotFoundError");
  }

  function raise(errorConstructor, message, name) {
    throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".", name)
  }
})(HTMLFormElement.prototype);

/**
 * Exported for testing purposes.
 */
const hiddenFormInputSlotName = "hidden-form-input";
function isCheckable(component) {
  return "checked" in component;
}
const onFormResetMap = new WeakMap();
const formComponentSet = new WeakSet();
/**
 * This helps determine if our form component is part of a composite form-associated component.
 *
 * @param form
 * @param formComponentEl
 */
function hasRegisteredFormComponentParent(form, formComponentEl) {
  // if we have a parent component using the form ID attribute, we assume it is form-associated
  const hasParentComponentWithFormIdSet = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_0__.c)(formComponentEl.parentElement, "[form]");
  if (hasParentComponentWithFormIdSet) {
    return true;
  }
  // we use events as a way to test for nested form-associated components across shadow bounds
  const formComponentRegisterEventName = "calciteInternalFormComponentRegister";
  let hasRegisteredFormComponentParent = false;
  form.addEventListener(formComponentRegisterEventName, (event) => {
    hasRegisteredFormComponentParent = event
      .composedPath()
      .some((element) => formComponentSet.has(element));
    event.stopPropagation();
  }, { once: true });
  formComponentEl.dispatchEvent(new CustomEvent(formComponentRegisterEventName, {
    bubbles: true,
    composed: true
  }));
  return hasRegisteredFormComponentParent;
}
/**
 * Helper to submit a form.
 *
 * @param component
 * @returns true if its associated form was submitted, false otherwise.
 */
function submitForm(component) {
  const { formEl } = component;
  if (!formEl) {
    return false;
  }
  formEl.requestSubmit();
  return true;
}
/**
 * Helper to reset a form.
 *
 * @param component
 */
function resetForm(component) {
  component.formEl?.reset();
}
/**
 * Helper to set up form interactions on connectedCallback.
 *
 * @param component
 */
function connectForm(component) {
  const { el, value } = component;
  const associatedForm = findAssociatedForm(component);
  if (!associatedForm || hasRegisteredFormComponentParent(associatedForm, el)) {
    return;
  }
  component.formEl = associatedForm;
  component.defaultValue = value;
  if (isCheckable(component)) {
    component.defaultChecked = component.checked;
  }
  const boundOnFormReset = (component.onFormReset || onFormReset).bind(component);
  associatedForm.addEventListener("reset", boundOnFormReset);
  onFormResetMap.set(component.el, boundOnFormReset);
  formComponentSet.add(el);
}
/**
 * Utility method to find a form-component's associated form element.
 *
 * @param component
 */
function findAssociatedForm(component) {
  const { el, form } = component;
  return form
    ? (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_0__.q)(el, { id: form })
    : (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, "form");
}
function onFormReset() {
  if (isCheckable(this)) {
    this.checked = this.defaultChecked;
    return;
  }
  this.value = this.defaultValue;
}
/**
 * Helper to tear down form interactions on disconnectedCallback.
 *
 * @param component
 */
function disconnectForm(component) {
  const { el, formEl } = component;
  if (!formEl) {
    return;
  }
  const boundOnFormReset = onFormResetMap.get(el);
  formEl.removeEventListener("reset", boundOnFormReset);
  onFormResetMap.delete(el);
  component.formEl = null;
  formComponentSet.delete(el);
}
/**
 * Helper for setting the default value on initialization after connectedCallback.
 *
 * Note that this is only needed if the default value cannot be determined on connectedCallback.
 *
 * @param component
 * @param value
 */
function afterConnectDefaultValueSet(component, value) {
  component.defaultValue = value;
}
const hiddenInputChangeHandler = (event) => {
  event.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange", { bubbles: true }));
};
const removeHiddenInputChangeEventListener = (input) => input.removeEventListener("change", hiddenInputChangeHandler);
/**
 * Helper for maintaining a form-associated's hidden input in sync with the component.
 *
 * Based on Ionic's approach: https://github.com/ionic-team/ionic-framework/blob/e4bf052794af9aac07f887013b9250d2a045eba3/core/src/utils/helpers.ts#L198
 *
 * @param component
 */
function syncHiddenFormInput(component) {
  const { el, formEl, name, value } = component;
  const { ownerDocument } = el;
  const inputs = el.querySelectorAll(`input[slot="${hiddenFormInputSlotName}"]`);
  if (!formEl || !name) {
    inputs.forEach((input) => {
      removeHiddenInputChangeEventListener(input);
      input.remove();
    });
    return;
  }
  const values = Array.isArray(value) ? value : [value];
  const extra = [];
  const seen = new Set();
  inputs.forEach((input) => {
    const valueMatch = values.find((val) => 
    /* intentional non-strict equality check */
    val == input.value);
    if (valueMatch != null) {
      seen.add(valueMatch);
      defaultSyncHiddenFormInput(component, input, valueMatch);
    }
    else {
      extra.push(input);
    }
  });
  let docFrag;
  values.forEach((value) => {
    if (seen.has(value)) {
      return;
    }
    let input = extra.pop();
    if (!input) {
      input = ownerDocument.createElement("input");
      input.slot = hiddenFormInputSlotName;
    }
    if (!docFrag) {
      docFrag = ownerDocument.createDocumentFragment();
    }
    docFrag.append(input);
    // emits when hidden input is autofilled
    input.addEventListener("change", hiddenInputChangeHandler);
    defaultSyncHiddenFormInput(component, input, value);
  });
  if (docFrag) {
    el.append(docFrag);
  }
  extra.forEach((input) => {
    removeHiddenInputChangeEventListener(input);
    input.remove();
  });
}
function defaultSyncHiddenFormInput(component, input, value) {
  const { defaultValue, disabled, form, name, required } = component;
  // keep in sync to prevent losing reset value
  input.defaultValue = defaultValue;
  input.disabled = disabled;
  input.name = name;
  input.required = required;
  input.tabIndex = -1;
  // we set the attr as the prop is read-only
  if (form) {
    input.setAttribute("form", form);
  }
  else {
    input.removeAttribute("form");
  }
  if (isCheckable(component)) {
    input.checked = component.checked;
    // keep in sync to prevent losing reset value
    input.defaultChecked = component.defaultChecked;
    // heuristic to support default/on mode from https://html.spec.whatwg.org/multipage/input.html#dom-input-value-default-on
    input.value = component.checked ? value || "on" : "";
  }
  else {
    input.value = value || "";
  }
  component.syncHiddenFormInput?.(input);
}
/**
 * Helper to render the slot for form-associated component's hidden input.
 *
 * If the component has a default slot, this must be placed at the bottom of the component's root container to ensure it is the last child.
 *
 * render(): VNode {
 *   <Host>
 *     <div class={CSS.container}>
 *     // ...
 *     <HiddenFormInputSlot component={this} />
 *     </div>
 *   </Host>
 * }
 *
 * Note that the hidden-form-input Sass mixin must be added to the component's style to apply specific styles.
 *
 * @param root0
 * @param root0.component
 */
const HiddenFormInputSlot = ({ component }) => {
  syncHiddenFormInput(component);
  return (0,_index_a6760286_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", { name: hiddenFormInputSlotName });
};




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/interactive-82e547ed.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ updateHostInteraction)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */
function interceptedClick() {
  const { disabled } = this;
  if (!disabled) {
    HTMLElement.prototype.click.call(this);
  }
}
function onPointerDown(event) {
  // prevent click from moving focus on host
  event.preventDefault();
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
  const { disabled } = event.target;
  // prevent disallowed mouse events from being emitted on the disabled host (per https://github.com/whatwg/html/issues/5886)
  //⚠ we generally avoid stopping propagation of events, but this is needed to adhere to the intended spec changes above ⚠
  if (disabled) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}
const captureOnlyOptions = { capture: true };
/**
 * This helper updates the host element to prevent keyboard interaction on its subtree and sets the appropriate aria attribute for accessibility.
 *
 * This should be used in the `componentDidRender` lifecycle hook.
 *
 * **Notes**
 *
 * this util is not needed for simple components whose root element or elements are an interactive component (custom element or native control). For those cases, set the `disabled` props on the root components instead.
 * technically, users can override `tabindex` and restore keyboard navigation, but this will be considered user error
 *
 * @param component
 * @param hostIsTabbable
 */
function updateHostInteraction(component, hostIsTabbable = false) {
  if (component.disabled) {
    component.el.setAttribute("tabindex", "-1");
    component.el.setAttribute("aria-disabled", "true");
    if (component.el.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    component.el.click = interceptedClick;
    component.el.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
    nonBubblingWhenDisabledMouseEvents.forEach((event) => component.el.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
    return;
  }
  component.el.click = HTMLElement.prototype.click;
  component.el.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => component.el.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
  if (typeof hostIsTabbable === "function") {
    component.el.setAttribute("tabindex", hostIsTabbable.call(component) ? "0" : "-1");
  }
  else if (hostIsTabbable === true) {
    component.el.setAttribute("tabindex", "0");
  }
  else if (hostIsTabbable === false) {
    component.el.removeAttribute("tabindex");
  }
  else ;
  component.el.removeAttribute("aria-disabled");
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/label-59c9d472.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ labelDisconnectedEvent),
/* harmony export */   "c": () => (/* binding */ connectLabel),
/* harmony export */   "d": () => (/* binding */ disconnectLabel),
/* harmony export */   "g": () => (/* binding */ getLabelText),
/* harmony export */   "l": () => (/* binding */ labelConnectedEvent)
/* harmony export */ });
/* harmony import */ var _dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-f74a09b7.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-f74a09b7.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */


/**
 * Exported for testing purposes only
 *
 * @internal
 */
const labelClickEvent = "calciteInternalLabelClick";
const labelConnectedEvent = "calciteInternalLabelConnected";
const labelDisconnectedEvent = "calciteInternaLabelDisconnected";
const labelTagName = "calcite-label";
const onLabelClickMap = new WeakMap();
const onLabelConnectedMap = new WeakMap();
const onLabelDisconnectedMap = new WeakMap();
const unlabeledComponents = new Set();
const findLabelForComponent = (componentEl) => {
  const { id } = componentEl;
  const forLabel = id && (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_0__.q)(componentEl, { selector: `${labelTagName}[for="${id}"]` });
  if (forLabel) {
    return forLabel;
  }
  const parentLabel = (0,_dom_f74a09b7_js__WEBPACK_IMPORTED_MODULE_0__.c)(componentEl, labelTagName);
  if (!parentLabel ||
    // labelable components within other custom elements are not considered labelable
    hasAncestorCustomElements(parentLabel, componentEl)) {
    return null;
  }
  return parentLabel;
};
function hasAncestorCustomElements(label, componentEl) {
  let traversedElements;
  const customElementAncestorCheckEventType = "custom-element-ancestor-check";
  const listener = (event) => {
    event.stopImmediatePropagation();
    const composedPath = event.composedPath();
    traversedElements = composedPath.slice(composedPath.indexOf(componentEl), composedPath.indexOf(label));
  };
  label.addEventListener(customElementAncestorCheckEventType, listener, { once: true });
  componentEl.dispatchEvent(new CustomEvent(customElementAncestorCheckEventType, { composed: true, bubbles: true }));
  label.removeEventListener(customElementAncestorCheckEventType, listener);
  const ancestorCustomElements = traversedElements
    .filter((el) => el !== componentEl && el !== label)
    .filter((el) => el.tagName?.includes("-"));
  return ancestorCustomElements.length > 0;
}
/**
 * Helper to set up label interactions on connectedCallback.
 *
 * @param component
 */
function connectLabel(component) {
  const labelEl = findLabelForComponent(component.el);
  if (onLabelClickMap.has(labelEl) || (!labelEl && unlabeledComponents.has(component))) {
    return;
  }
  const boundOnLabelDisconnected = onLabelDisconnected.bind(component);
  if (labelEl) {
    component.labelEl = labelEl;
    const boundOnLabelClick = onLabelClick.bind(component);
    onLabelClickMap.set(component.labelEl, boundOnLabelClick);
    component.labelEl.addEventListener(labelClickEvent, boundOnLabelClick);
    unlabeledComponents.delete(component);
    document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
    onLabelDisconnectedMap.set(component, boundOnLabelDisconnected);
    document.addEventListener(labelDisconnectedEvent, boundOnLabelDisconnected);
  }
  else if (!unlabeledComponents.has(component)) {
    boundOnLabelDisconnected();
    document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  }
}
/**
 * Helper to tear down label interactions on disconnectedCallback on labelable components.
 *
 * @param component
 */
function disconnectLabel(component) {
  unlabeledComponents.delete(component);
  document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
  document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  onLabelConnectedMap.delete(component);
  onLabelDisconnectedMap.delete(component);
  if (!component.labelEl) {
    return;
  }
  const boundOnLabelClick = onLabelClickMap.get(component.labelEl);
  component.labelEl.removeEventListener(labelClickEvent, boundOnLabelClick);
  onLabelClickMap.delete(component.labelEl);
}
/**
 * Helper to get the label text from a component.
 *
 * @param component
 */
function getLabelText(component) {
  return component.label || component.labelEl?.textContent?.trim() || "";
}
function onLabelClick(event) {
  if (this.disabled) {
    return;
  }
  const containedLabelableChildClicked = this.el.contains(event.detail.sourceEvent.target);
  if (containedLabelableChildClicked) {
    return;
  }
  this.onLabelClick(event);
}
function onLabelConnected() {
  if (unlabeledComponents.has(this)) {
    connectLabel(this);
  }
}
function onLabelDisconnected() {
  unlabeledComponents.add(this);
  const boundOnLabelConnected = onLabelConnectedMap.get(this) || onLabelConnected.bind(this);
  onLabelConnectedMap.set(this, boundOnLabelConnected);
  document.addEventListener(labelConnectedEvent, boundOnLabelConnected);
}




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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNGEwZTg0OGM5ZWNjMGQ0MjQ1MzMxZjhhMzE3NmYwYzEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNtRztBQUMzRDs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLG1EQUFpQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJLFlBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsU0FBUztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxZQUFZO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQSxNQUFNLG1EQUFpQixPQUFPLFVBQVU7QUFDeEMsTUFBTSxtREFBaUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2SDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SDdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2Zvcm0tNDQ1MzAwMDEuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vaW50ZXJhY3RpdmUtODJlNTQ3ZWQuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vbGFiZWwtNTljOWQ0NzIuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vbG9hZGFibGUtYWYxNDZmZDUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4yXG4gKi9cbmltcG9ydCB7IHEgYXMgcXVlcnlFbGVtZW50Um9vdHMsIGMgYXMgY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5IH0gZnJvbSAnLi9kb20tZjc0YTA5YjcuanMnO1xuaW1wb3J0IHsgaCB9IGZyb20gJy4vaW5kZXgtYTY3NjAyODYuanMnO1xuXG4oZnVuY3Rpb24ocHJvdG90eXBlKSB7XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLnJlcXVlc3RTdWJtaXQgPT0gXCJmdW5jdGlvblwiKSByZXR1cm5cblxuICBwcm90b3R5cGUucmVxdWVzdFN1Ym1pdCA9IGZ1bmN0aW9uKHN1Ym1pdHRlcikge1xuICAgIGlmIChzdWJtaXR0ZXIpIHtcbiAgICAgIHZhbGlkYXRlU3VibWl0dGVyKHN1Ym1pdHRlciwgdGhpcyk7XG4gICAgICBzdWJtaXR0ZXIuY2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VibWl0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgc3VibWl0dGVyLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgICAgc3VibWl0dGVyLmhpZGRlbiA9IHRydWU7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKHN1Ym1pdHRlcik7XG4gICAgICBzdWJtaXR0ZXIuY2xpY2soKTtcbiAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoc3VibWl0dGVyKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVTdWJtaXR0ZXIoc3VibWl0dGVyLCBmb3JtKSB7XG4gICAgc3VibWl0dGVyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgcmFpc2UoVHlwZUVycm9yLCBcInBhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlICdIVE1MRWxlbWVudCdcIik7XG4gICAgc3VibWl0dGVyLnR5cGUgPT0gXCJzdWJtaXRcIiB8fCByYWlzZShUeXBlRXJyb3IsIFwiVGhlIHNwZWNpZmllZCBlbGVtZW50IGlzIG5vdCBhIHN1Ym1pdCBidXR0b25cIik7XG4gICAgc3VibWl0dGVyLmZvcm0gPT0gZm9ybSB8fCByYWlzZShET01FeGNlcHRpb24sIFwiVGhlIHNwZWNpZmllZCBlbGVtZW50IGlzIG5vdCBvd25lZCBieSB0aGlzIGZvcm0gZWxlbWVudFwiLCBcIk5vdEZvdW5kRXJyb3JcIik7XG4gIH1cblxuICBmdW5jdGlvbiByYWlzZShlcnJvckNvbnN0cnVjdG9yLCBtZXNzYWdlLCBuYW1lKSB7XG4gICAgdGhyb3cgbmV3IGVycm9yQ29uc3RydWN0b3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAncmVxdWVzdFN1Ym1pdCcgb24gJ0hUTUxGb3JtRWxlbWVudCc6IFwiICsgbWVzc2FnZSArIFwiLlwiLCBuYW1lKVxuICB9XG59KShIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqL1xuY29uc3QgaGlkZGVuRm9ybUlucHV0U2xvdE5hbWUgPSBcImhpZGRlbi1mb3JtLWlucHV0XCI7XG5mdW5jdGlvbiBpc0NoZWNrYWJsZShjb21wb25lbnQpIHtcbiAgcmV0dXJuIFwiY2hlY2tlZFwiIGluIGNvbXBvbmVudDtcbn1cbmNvbnN0IG9uRm9ybVJlc2V0TWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGZvcm1Db21wb25lbnRTZXQgPSBuZXcgV2Vha1NldCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBzIGRldGVybWluZSBpZiBvdXIgZm9ybSBjb21wb25lbnQgaXMgcGFydCBvZiBhIGNvbXBvc2l0ZSBmb3JtLWFzc29jaWF0ZWQgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSBmb3JtXG4gKiBAcGFyYW0gZm9ybUNvbXBvbmVudEVsXG4gKi9cbmZ1bmN0aW9uIGhhc1JlZ2lzdGVyZWRGb3JtQ29tcG9uZW50UGFyZW50KGZvcm0sIGZvcm1Db21wb25lbnRFbCkge1xuICAvLyBpZiB3ZSBoYXZlIGEgcGFyZW50IGNvbXBvbmVudCB1c2luZyB0aGUgZm9ybSBJRCBhdHRyaWJ1dGUsIHdlIGFzc3VtZSBpdCBpcyBmb3JtLWFzc29jaWF0ZWRcbiAgY29uc3QgaGFzUGFyZW50Q29tcG9uZW50V2l0aEZvcm1JZFNldCA9IGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeShmb3JtQ29tcG9uZW50RWwucGFyZW50RWxlbWVudCwgXCJbZm9ybV1cIik7XG4gIGlmIChoYXNQYXJlbnRDb21wb25lbnRXaXRoRm9ybUlkU2V0KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLy8gd2UgdXNlIGV2ZW50cyBhcyBhIHdheSB0byB0ZXN0IGZvciBuZXN0ZWQgZm9ybS1hc3NvY2lhdGVkIGNvbXBvbmVudHMgYWNyb3NzIHNoYWRvdyBib3VuZHNcbiAgY29uc3QgZm9ybUNvbXBvbmVudFJlZ2lzdGVyRXZlbnROYW1lID0gXCJjYWxjaXRlSW50ZXJuYWxGb3JtQ29tcG9uZW50UmVnaXN0ZXJcIjtcbiAgbGV0IGhhc1JlZ2lzdGVyZWRGb3JtQ29tcG9uZW50UGFyZW50ID0gZmFsc2U7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihmb3JtQ29tcG9uZW50UmVnaXN0ZXJFdmVudE5hbWUsIChldmVudCkgPT4ge1xuICAgIGhhc1JlZ2lzdGVyZWRGb3JtQ29tcG9uZW50UGFyZW50ID0gZXZlbnRcbiAgICAgIC5jb21wb3NlZFBhdGgoKVxuICAgICAgLnNvbWUoKGVsZW1lbnQpID0+IGZvcm1Db21wb25lbnRTZXQuaGFzKGVsZW1lbnQpKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICBmb3JtQ29tcG9uZW50RWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZm9ybUNvbXBvbmVudFJlZ2lzdGVyRXZlbnROYW1lLCB7XG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjb21wb3NlZDogdHJ1ZVxuICB9KSk7XG4gIHJldHVybiBoYXNSZWdpc3RlcmVkRm9ybUNvbXBvbmVudFBhcmVudDtcbn1cbi8qKlxuICogSGVscGVyIHRvIHN1Ym1pdCBhIGZvcm0uXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHJldHVybnMgdHJ1ZSBpZiBpdHMgYXNzb2NpYXRlZCBmb3JtIHdhcyBzdWJtaXR0ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gc3VibWl0Rm9ybShjb21wb25lbnQpIHtcbiAgY29uc3QgeyBmb3JtRWwgfSA9IGNvbXBvbmVudDtcbiAgaWYgKCFmb3JtRWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9ybUVsLnJlcXVlc3RTdWJtaXQoKTtcbiAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIEhlbHBlciB0byByZXNldCBhIGZvcm0uXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiByZXNldEZvcm0oY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5mb3JtRWw/LnJlc2V0KCk7XG59XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgZm9ybSBpbnRlcmFjdGlvbnMgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0Rm9ybShjb21wb25lbnQpIHtcbiAgY29uc3QgeyBlbCwgdmFsdWUgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgYXNzb2NpYXRlZEZvcm0gPSBmaW5kQXNzb2NpYXRlZEZvcm0oY29tcG9uZW50KTtcbiAgaWYgKCFhc3NvY2lhdGVkRm9ybSB8fCBoYXNSZWdpc3RlcmVkRm9ybUNvbXBvbmVudFBhcmVudChhc3NvY2lhdGVkRm9ybSwgZWwpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbXBvbmVudC5mb3JtRWwgPSBhc3NvY2lhdGVkRm9ybTtcbiAgY29tcG9uZW50LmRlZmF1bHRWYWx1ZSA9IHZhbHVlO1xuICBpZiAoaXNDaGVja2FibGUoY29tcG9uZW50KSkge1xuICAgIGNvbXBvbmVudC5kZWZhdWx0Q2hlY2tlZCA9IGNvbXBvbmVudC5jaGVja2VkO1xuICB9XG4gIGNvbnN0IGJvdW5kT25Gb3JtUmVzZXQgPSAoY29tcG9uZW50Lm9uRm9ybVJlc2V0IHx8IG9uRm9ybVJlc2V0KS5iaW5kKGNvbXBvbmVudCk7XG4gIGFzc29jaWF0ZWRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNldFwiLCBib3VuZE9uRm9ybVJlc2V0KTtcbiAgb25Gb3JtUmVzZXRNYXAuc2V0KGNvbXBvbmVudC5lbCwgYm91bmRPbkZvcm1SZXNldCk7XG4gIGZvcm1Db21wb25lbnRTZXQuYWRkKGVsKTtcbn1cbi8qKlxuICogVXRpbGl0eSBtZXRob2QgdG8gZmluZCBhIGZvcm0tY29tcG9uZW50J3MgYXNzb2NpYXRlZCBmb3JtIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBmaW5kQXNzb2NpYXRlZEZvcm0oY29tcG9uZW50KSB7XG4gIGNvbnN0IHsgZWwsIGZvcm0gfSA9IGNvbXBvbmVudDtcbiAgcmV0dXJuIGZvcm1cbiAgICA/IHF1ZXJ5RWxlbWVudFJvb3RzKGVsLCB7IGlkOiBmb3JtIH0pXG4gICAgOiBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkoZWwsIFwiZm9ybVwiKTtcbn1cbmZ1bmN0aW9uIG9uRm9ybVJlc2V0KCkge1xuICBpZiAoaXNDaGVja2FibGUodGhpcykpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmRlZmF1bHRDaGVja2VkO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnZhbHVlID0gdGhpcy5kZWZhdWx0VmFsdWU7XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gZm9ybSBpbnRlcmFjdGlvbnMgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0Rm9ybShjb21wb25lbnQpIHtcbiAgY29uc3QgeyBlbCwgZm9ybUVsIH0gPSBjb21wb25lbnQ7XG4gIGlmICghZm9ybUVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGJvdW5kT25Gb3JtUmVzZXQgPSBvbkZvcm1SZXNldE1hcC5nZXQoZWwpO1xuICBmb3JtRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2V0XCIsIGJvdW5kT25Gb3JtUmVzZXQpO1xuICBvbkZvcm1SZXNldE1hcC5kZWxldGUoZWwpO1xuICBjb21wb25lbnQuZm9ybUVsID0gbnVsbDtcbiAgZm9ybUNvbXBvbmVudFNldC5kZWxldGUoZWwpO1xufVxuLyoqXG4gKiBIZWxwZXIgZm9yIHNldHRpbmcgdGhlIGRlZmF1bHQgdmFsdWUgb24gaW5pdGlhbGl6YXRpb24gYWZ0ZXIgY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgaXMgb25seSBuZWVkZWQgaWYgdGhlIGRlZmF1bHQgdmFsdWUgY2Fubm90IGJlIGRldGVybWluZWQgb24gY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGFmdGVyQ29ubmVjdERlZmF1bHRWYWx1ZVNldChjb21wb25lbnQsIHZhbHVlKSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0VmFsdWUgPSB2YWx1ZTtcbn1cbmNvbnN0IGhpZGRlbklucHV0Q2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICBldmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjYWxjaXRlSW50ZXJuYWxIaWRkZW5JbnB1dENoYW5nZVwiLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xufTtcbmNvbnN0IHJlbW92ZUhpZGRlbklucHV0Q2hhbmdlRXZlbnRMaXN0ZW5lciA9IChpbnB1dCkgPT4gaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoaWRkZW5JbnB1dENoYW5nZUhhbmRsZXIpO1xuLyoqXG4gKiBIZWxwZXIgZm9yIG1haW50YWluaW5nIGEgZm9ybS1hc3NvY2lhdGVkJ3MgaGlkZGVuIGlucHV0IGluIHN5bmMgd2l0aCB0aGUgY29tcG9uZW50LlxuICpcbiAqIEJhc2VkIG9uIElvbmljJ3MgYXBwcm9hY2g6IGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLWZyYW1ld29yay9ibG9iL2U0YmYwNTI3OTRhZjlhYWMwN2Y4ODcwMTNiOTI1MGQyYTA0NWViYTMvY29yZS9zcmMvdXRpbHMvaGVscGVycy50cyNMMTk4XG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBzeW5jSGlkZGVuRm9ybUlucHV0KGNvbXBvbmVudCkge1xuICBjb25zdCB7IGVsLCBmb3JtRWwsIG5hbWUsIHZhbHVlIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHsgb3duZXJEb2N1bWVudCB9ID0gZWw7XG4gIGNvbnN0IGlucHV0cyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3Nsb3Q9XCIke2hpZGRlbkZvcm1JbnB1dFNsb3ROYW1lfVwiXWApO1xuICBpZiAoIWZvcm1FbCB8fCAhbmFtZSkge1xuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgcmVtb3ZlSGlkZGVuSW5wdXRDaGFuZ2VFdmVudExpc3RlbmVyKGlucHV0KTtcbiAgICAgIGlucHV0LnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbiAgY29uc3QgZXh0cmEgPSBbXTtcbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQoKTtcbiAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgY29uc3QgdmFsdWVNYXRjaCA9IHZhbHVlcy5maW5kKCh2YWwpID0+IFxuICAgIC8qIGludGVudGlvbmFsIG5vbi1zdHJpY3QgZXF1YWxpdHkgY2hlY2sgKi9cbiAgICB2YWwgPT0gaW5wdXQudmFsdWUpO1xuICAgIGlmICh2YWx1ZU1hdGNoICE9IG51bGwpIHtcbiAgICAgIHNlZW4uYWRkKHZhbHVlTWF0Y2gpO1xuICAgICAgZGVmYXVsdFN5bmNIaWRkZW5Gb3JtSW5wdXQoY29tcG9uZW50LCBpbnB1dCwgdmFsdWVNYXRjaCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZXh0cmEucHVzaChpbnB1dCk7XG4gICAgfVxuICB9KTtcbiAgbGV0IGRvY0ZyYWc7XG4gIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgIGlmIChzZWVuLmhhcyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGlucHV0ID0gZXh0cmEucG9wKCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgaW5wdXQgPSBvd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGlucHV0LnNsb3QgPSBoaWRkZW5Gb3JtSW5wdXRTbG90TmFtZTtcbiAgICB9XG4gICAgaWYgKCFkb2NGcmFnKSB7XG4gICAgICBkb2NGcmFnID0gb3duZXJEb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgfVxuICAgIGRvY0ZyYWcuYXBwZW5kKGlucHV0KTtcbiAgICAvLyBlbWl0cyB3aGVuIGhpZGRlbiBpbnB1dCBpcyBhdXRvZmlsbGVkXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoaWRkZW5JbnB1dENoYW5nZUhhbmRsZXIpO1xuICAgIGRlZmF1bHRTeW5jSGlkZGVuRm9ybUlucHV0KGNvbXBvbmVudCwgaW5wdXQsIHZhbHVlKTtcbiAgfSk7XG4gIGlmIChkb2NGcmFnKSB7XG4gICAgZWwuYXBwZW5kKGRvY0ZyYWcpO1xuICB9XG4gIGV4dHJhLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgcmVtb3ZlSGlkZGVuSW5wdXRDaGFuZ2VFdmVudExpc3RlbmVyKGlucHV0KTtcbiAgICBpbnB1dC5yZW1vdmUoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBkZWZhdWx0U3luY0hpZGRlbkZvcm1JbnB1dChjb21wb25lbnQsIGlucHV0LCB2YWx1ZSkge1xuICBjb25zdCB7IGRlZmF1bHRWYWx1ZSwgZGlzYWJsZWQsIGZvcm0sIG5hbWUsIHJlcXVpcmVkIH0gPSBjb21wb25lbnQ7XG4gIC8vIGtlZXAgaW4gc3luYyB0byBwcmV2ZW50IGxvc2luZyByZXNldCB2YWx1ZVxuICBpbnB1dC5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gIGlucHV0LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIGlucHV0Lm5hbWUgPSBuYW1lO1xuICBpbnB1dC5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuICBpbnB1dC50YWJJbmRleCA9IC0xO1xuICAvLyB3ZSBzZXQgdGhlIGF0dHIgYXMgdGhlIHByb3AgaXMgcmVhZC1vbmx5XG4gIGlmIChmb3JtKSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiZm9ybVwiLCBmb3JtKTtcbiAgfVxuICBlbHNlIHtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJmb3JtXCIpO1xuICB9XG4gIGlmIChpc0NoZWNrYWJsZShjb21wb25lbnQpKSB7XG4gICAgaW5wdXQuY2hlY2tlZCA9IGNvbXBvbmVudC5jaGVja2VkO1xuICAgIC8vIGtlZXAgaW4gc3luYyB0byBwcmV2ZW50IGxvc2luZyByZXNldCB2YWx1ZVxuICAgIGlucHV0LmRlZmF1bHRDaGVja2VkID0gY29tcG9uZW50LmRlZmF1bHRDaGVja2VkO1xuICAgIC8vIGhldXJpc3RpYyB0byBzdXBwb3J0IGRlZmF1bHQvb24gbW9kZSBmcm9tIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2lucHV0Lmh0bWwjZG9tLWlucHV0LXZhbHVlLWRlZmF1bHQtb25cbiAgICBpbnB1dC52YWx1ZSA9IGNvbXBvbmVudC5jaGVja2VkID8gdmFsdWUgfHwgXCJvblwiIDogXCJcIjtcbiAgfVxuICBlbHNlIHtcbiAgICBpbnB1dC52YWx1ZSA9IHZhbHVlIHx8IFwiXCI7XG4gIH1cbiAgY29tcG9uZW50LnN5bmNIaWRkZW5Gb3JtSW5wdXQ/LihpbnB1dCk7XG59XG4vKipcbiAqIEhlbHBlciB0byByZW5kZXIgdGhlIHNsb3QgZm9yIGZvcm0tYXNzb2NpYXRlZCBjb21wb25lbnQncyBoaWRkZW4gaW5wdXQuXG4gKlxuICogSWYgdGhlIGNvbXBvbmVudCBoYXMgYSBkZWZhdWx0IHNsb3QsIHRoaXMgbXVzdCBiZSBwbGFjZWQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgY29tcG9uZW50J3Mgcm9vdCBjb250YWluZXIgdG8gZW5zdXJlIGl0IGlzIHRoZSBsYXN0IGNoaWxkLlxuICpcbiAqIHJlbmRlcigpOiBWTm9kZSB7XG4gKiAgIDxIb3N0PlxuICogICAgIDxkaXYgY2xhc3M9e0NTUy5jb250YWluZXJ9PlxuICogICAgIC8vIC4uLlxuICogICAgIDxIaWRkZW5Gb3JtSW5wdXRTbG90IGNvbXBvbmVudD17dGhpc30gLz5cbiAqICAgICA8L2Rpdj5cbiAqICAgPC9Ib3N0PlxuICogfVxuICpcbiAqIE5vdGUgdGhhdCB0aGUgaGlkZGVuLWZvcm0taW5wdXQgU2FzcyBtaXhpbiBtdXN0IGJlIGFkZGVkIHRvIHRoZSBjb21wb25lbnQncyBzdHlsZSB0byBhcHBseSBzcGVjaWZpYyBzdHlsZXMuXG4gKlxuICogQHBhcmFtIHJvb3QwXG4gKiBAcGFyYW0gcm9vdDAuY29tcG9uZW50XG4gKi9cbmNvbnN0IEhpZGRlbkZvcm1JbnB1dFNsb3QgPSAoeyBjb21wb25lbnQgfSkgPT4ge1xuICBzeW5jSGlkZGVuRm9ybUlucHV0KGNvbXBvbmVudCk7XG4gIHJldHVybiBoKFwic2xvdFwiLCB7IG5hbWU6IGhpZGRlbkZvcm1JbnB1dFNsb3ROYW1lIH0pO1xufTtcblxuZXhwb3J0IHsgSGlkZGVuRm9ybUlucHV0U2xvdCBhcyBILCBhZnRlckNvbm5lY3REZWZhdWx0VmFsdWVTZXQgYXMgYSwgY29ubmVjdEZvcm0gYXMgYywgZGlzY29ubmVjdEZvcm0gYXMgZCwgZmluZEFzc29jaWF0ZWRGb3JtIGFzIGYsIHJlc2V0Rm9ybSBhcyByLCBzdWJtaXRGb3JtIGFzIHMgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5mdW5jdGlvbiBpbnRlcmNlcHRlZENsaWNrKCkge1xuICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzO1xuICBpZiAoIWRpc2FibGVkKSB7XG4gICAgSFRNTEVsZW1lbnQucHJvdG90eXBlLmNsaWNrLmNhbGwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgLy8gcHJldmVudCBjbGljayBmcm9tIG1vdmluZyBmb2N1cyBvbiBob3N0XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5jb25zdCBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzID0gW1wibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcImNsaWNrXCJdO1xuZnVuY3Rpb24gb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQoZXZlbnQpIHtcbiAgY29uc3QgeyBkaXNhYmxlZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAvLyBwcmV2ZW50IGRpc2FsbG93ZWQgbW91c2UgZXZlbnRzIGZyb20gYmVpbmcgZW1pdHRlZCBvbiB0aGUgZGlzYWJsZWQgaG9zdCAocGVyIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvaHRtbC9pc3N1ZXMvNTg4NilcbiAgLy/imqAgd2UgZ2VuZXJhbGx5IGF2b2lkIHN0b3BwaW5nIHByb3BhZ2F0aW9uIG9mIGV2ZW50cywgYnV0IHRoaXMgaXMgbmVlZGVkIHRvIGFkaGVyZSB0byB0aGUgaW50ZW5kZWQgc3BlYyBjaGFuZ2VzIGFib3ZlIOKaoFxuICBpZiAoZGlzYWJsZWQpIHtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG5jb25zdCBjYXB0dXJlT25seU9wdGlvbnMgPSB7IGNhcHR1cmU6IHRydWUgfTtcbi8qKlxuICogVGhpcyBoZWxwZXIgdXBkYXRlcyB0aGUgaG9zdCBlbGVtZW50IHRvIHByZXZlbnQga2V5Ym9hcmQgaW50ZXJhY3Rpb24gb24gaXRzIHN1YnRyZWUgYW5kIHNldHMgdGhlIGFwcHJvcHJpYXRlIGFyaWEgYXR0cmlidXRlIGZvciBhY2Nlc3NpYmlsaXR5LlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnREaWRSZW5kZXJgIGxpZmVjeWNsZSBob29rLlxuICpcbiAqICoqTm90ZXMqKlxuICpcbiAqIHRoaXMgdXRpbCBpcyBub3QgbmVlZGVkIGZvciBzaW1wbGUgY29tcG9uZW50cyB3aG9zZSByb290IGVsZW1lbnQgb3IgZWxlbWVudHMgYXJlIGFuIGludGVyYWN0aXZlIGNvbXBvbmVudCAoY3VzdG9tIGVsZW1lbnQgb3IgbmF0aXZlIGNvbnRyb2wpLiBGb3IgdGhvc2UgY2FzZXMsIHNldCB0aGUgYGRpc2FibGVkYCBwcm9wcyBvbiB0aGUgcm9vdCBjb21wb25lbnRzIGluc3RlYWQuXG4gKiB0ZWNobmljYWxseSwgdXNlcnMgY2FuIG92ZXJyaWRlIGB0YWJpbmRleGAgYW5kIHJlc3RvcmUga2V5Ym9hcmQgbmF2aWdhdGlvbiwgYnV0IHRoaXMgd2lsbCBiZSBjb25zaWRlcmVkIHVzZXIgZXJyb3JcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gaG9zdElzVGFiYmFibGVcbiAqL1xuZnVuY3Rpb24gdXBkYXRlSG9zdEludGVyYWN0aW9uKGNvbXBvbmVudCwgaG9zdElzVGFiYmFibGUgPSBmYWxzZSkge1xuICBpZiAoY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIGlmIChjb21wb25lbnQuZWwuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBjb21wb25lbnQuZWwuY2xpY2sgPSBpbnRlcmNlcHRlZENsaWNrO1xuICAgIGNvbXBvbmVudC5lbC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgICBub25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiBjb21wb25lbnQuZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgb25Ob25CdWJibGluZ1doZW5EaXNhYmxlZE1vdXNlRXZlbnQsIGNhcHR1cmVPbmx5T3B0aW9ucykpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb21wb25lbnQuZWwuY2xpY2sgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUuY2xpY2s7XG4gIGNvbXBvbmVudC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRG93biwgY2FwdHVyZU9ubHlPcHRpb25zKTtcbiAgbm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4gY29tcG9uZW50LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uTm9uQnViYmxpbmdXaGVuRGlzYWJsZWRNb3VzZUV2ZW50LCBjYXB0dXJlT25seU9wdGlvbnMpKTtcbiAgaWYgKHR5cGVvZiBob3N0SXNUYWJiYWJsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29tcG9uZW50LmVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIGhvc3RJc1RhYmJhYmxlLmNhbGwoY29tcG9uZW50KSA/IFwiMFwiIDogXCItMVwiKTtcbiAgfVxuICBlbHNlIGlmIChob3N0SXNUYWJiYWJsZSA9PT0gdHJ1ZSkge1xuICAgIGNvbXBvbmVudC5lbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gIH1cbiAgZWxzZSBpZiAoaG9zdElzVGFiYmFibGUgPT09IGZhbHNlKSB7XG4gICAgY29tcG9uZW50LmVsLnJlbW92ZUF0dHJpYnV0ZShcInRhYmluZGV4XCIpO1xuICB9XG4gIGVsc2UgO1xuICBjb21wb25lbnQuZWwucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKTtcbn1cblxuZXhwb3J0IHsgdXBkYXRlSG9zdEludGVyYWN0aW9uIGFzIHUgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5pbXBvcnQgeyBxIGFzIHF1ZXJ5RWxlbWVudFJvb3RzLCBjIGFzIGNsb3Nlc3RFbGVtZW50Q3Jvc3NTaGFkb3dCb3VuZGFyeSB9IGZyb20gJy4vZG9tLWY3NGEwOWI3LmpzJztcblxuLyoqXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5XG4gKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IGxhYmVsQ2xpY2tFdmVudCA9IFwiY2FsY2l0ZUludGVybmFsTGFiZWxDbGlja1wiO1xuY29uc3QgbGFiZWxDb25uZWN0ZWRFdmVudCA9IFwiY2FsY2l0ZUludGVybmFsTGFiZWxDb25uZWN0ZWRcIjtcbmNvbnN0IGxhYmVsRGlzY29ubmVjdGVkRXZlbnQgPSBcImNhbGNpdGVJbnRlcm5hTGFiZWxEaXNjb25uZWN0ZWRcIjtcbmNvbnN0IGxhYmVsVGFnTmFtZSA9IFwiY2FsY2l0ZS1sYWJlbFwiO1xuY29uc3Qgb25MYWJlbENsaWNrTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IG9uTGFiZWxDb25uZWN0ZWRNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgb25MYWJlbERpc2Nvbm5lY3RlZE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB1bmxhYmVsZWRDb21wb25lbnRzID0gbmV3IFNldCgpO1xuY29uc3QgZmluZExhYmVsRm9yQ29tcG9uZW50ID0gKGNvbXBvbmVudEVsKSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbXBvbmVudEVsO1xuICBjb25zdCBmb3JMYWJlbCA9IGlkICYmIHF1ZXJ5RWxlbWVudFJvb3RzKGNvbXBvbmVudEVsLCB7IHNlbGVjdG9yOiBgJHtsYWJlbFRhZ05hbWV9W2Zvcj1cIiR7aWR9XCJdYCB9KTtcbiAgaWYgKGZvckxhYmVsKSB7XG4gICAgcmV0dXJuIGZvckxhYmVsO1xuICB9XG4gIGNvbnN0IHBhcmVudExhYmVsID0gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KGNvbXBvbmVudEVsLCBsYWJlbFRhZ05hbWUpO1xuICBpZiAoIXBhcmVudExhYmVsIHx8XG4gICAgLy8gbGFiZWxhYmxlIGNvbXBvbmVudHMgd2l0aGluIG90aGVyIGN1c3RvbSBlbGVtZW50cyBhcmUgbm90IGNvbnNpZGVyZWQgbGFiZWxhYmxlXG4gICAgaGFzQW5jZXN0b3JDdXN0b21FbGVtZW50cyhwYXJlbnRMYWJlbCwgY29tcG9uZW50RWwpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHBhcmVudExhYmVsO1xufTtcbmZ1bmN0aW9uIGhhc0FuY2VzdG9yQ3VzdG9tRWxlbWVudHMobGFiZWwsIGNvbXBvbmVudEVsKSB7XG4gIGxldCB0cmF2ZXJzZWRFbGVtZW50cztcbiAgY29uc3QgY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUgPSBcImN1c3RvbS1lbGVtZW50LWFuY2VzdG9yLWNoZWNrXCI7XG4gIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY29tcG9zZWRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgdHJhdmVyc2VkRWxlbWVudHMgPSBjb21wb3NlZFBhdGguc2xpY2UoY29tcG9zZWRQYXRoLmluZGV4T2YoY29tcG9uZW50RWwpLCBjb21wb3NlZFBhdGguaW5kZXhPZihsYWJlbCkpO1xuICB9O1xuICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKGN1c3RvbUVsZW1lbnRBbmNlc3RvckNoZWNrRXZlbnRUeXBlLCBsaXN0ZW5lciwgeyBvbmNlOiB0cnVlIH0pO1xuICBjb21wb25lbnRFbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChjdXN0b21FbGVtZW50QW5jZXN0b3JDaGVja0V2ZW50VHlwZSwgeyBjb21wb3NlZDogdHJ1ZSwgYnViYmxlczogdHJ1ZSB9KSk7XG4gIGxhYmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoY3VzdG9tRWxlbWVudEFuY2VzdG9yQ2hlY2tFdmVudFR5cGUsIGxpc3RlbmVyKTtcbiAgY29uc3QgYW5jZXN0b3JDdXN0b21FbGVtZW50cyA9IHRyYXZlcnNlZEVsZW1lbnRzXG4gICAgLmZpbHRlcigoZWwpID0+IGVsICE9PSBjb21wb25lbnRFbCAmJiBlbCAhPT0gbGFiZWwpXG4gICAgLmZpbHRlcigoZWwpID0+IGVsLnRhZ05hbWU/LmluY2x1ZGVzKFwiLVwiKSk7XG4gIHJldHVybiBhbmNlc3RvckN1c3RvbUVsZW1lbnRzLmxlbmd0aCA+IDA7XG59XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgbGFiZWwgaW50ZXJhY3Rpb25zIG9uIGNvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdExhYmVsKGNvbXBvbmVudCkge1xuICBjb25zdCBsYWJlbEVsID0gZmluZExhYmVsRm9yQ29tcG9uZW50KGNvbXBvbmVudC5lbCk7XG4gIGlmIChvbkxhYmVsQ2xpY2tNYXAuaGFzKGxhYmVsRWwpIHx8ICghbGFiZWxFbCAmJiB1bmxhYmVsZWRDb21wb25lbnRzLmhhcyhjb21wb25lbnQpKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQgPSBvbkxhYmVsRGlzY29ubmVjdGVkLmJpbmQoY29tcG9uZW50KTtcbiAgaWYgKGxhYmVsRWwpIHtcbiAgICBjb21wb25lbnQubGFiZWxFbCA9IGxhYmVsRWw7XG4gICAgY29uc3QgYm91bmRPbkxhYmVsQ2xpY2sgPSBvbkxhYmVsQ2xpY2suYmluZChjb21wb25lbnQpO1xuICAgIG9uTGFiZWxDbGlja01hcC5zZXQoY29tcG9uZW50LmxhYmVsRWwsIGJvdW5kT25MYWJlbENsaWNrKTtcbiAgICBjb21wb25lbnQubGFiZWxFbC5hZGRFdmVudExpc3RlbmVyKGxhYmVsQ2xpY2tFdmVudCwgYm91bmRPbkxhYmVsQ2xpY2spO1xuICAgIHVubGFiZWxlZENvbXBvbmVudHMuZGVsZXRlKGNvbXBvbmVudCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBvbkxhYmVsQ29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgICBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLnNldChjb21wb25lbnQsIGJvdW5kT25MYWJlbERpc2Nvbm5lY3RlZCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBib3VuZE9uTGFiZWxEaXNjb25uZWN0ZWQpO1xuICB9XG4gIGVsc2UgaWYgKCF1bmxhYmVsZWRDb21wb25lbnRzLmhhcyhjb21wb25lbnQpKSB7XG4gICAgYm91bmRPbkxhYmVsRGlzY29ubmVjdGVkKCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgfVxufVxuLyoqXG4gKiBIZWxwZXIgdG8gdGVhciBkb3duIGxhYmVsIGludGVyYWN0aW9ucyBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjayBvbiBsYWJlbGFibGUgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RMYWJlbChjb21wb25lbnQpIHtcbiAgdW5sYWJlbGVkQ29tcG9uZW50cy5kZWxldGUoY29tcG9uZW50KTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbENvbm5lY3RlZEV2ZW50LCBvbkxhYmVsQ29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsYWJlbERpc2Nvbm5lY3RlZEV2ZW50LCBvbkxhYmVsRGlzY29ubmVjdGVkTWFwLmdldChjb21wb25lbnQpKTtcbiAgb25MYWJlbENvbm5lY3RlZE1hcC5kZWxldGUoY29tcG9uZW50KTtcbiAgb25MYWJlbERpc2Nvbm5lY3RlZE1hcC5kZWxldGUoY29tcG9uZW50KTtcbiAgaWYgKCFjb21wb25lbnQubGFiZWxFbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBib3VuZE9uTGFiZWxDbGljayA9IG9uTGFiZWxDbGlja01hcC5nZXQoY29tcG9uZW50LmxhYmVsRWwpO1xuICBjb21wb25lbnQubGFiZWxFbC5yZW1vdmVFdmVudExpc3RlbmVyKGxhYmVsQ2xpY2tFdmVudCwgYm91bmRPbkxhYmVsQ2xpY2spO1xuICBvbkxhYmVsQ2xpY2tNYXAuZGVsZXRlKGNvbXBvbmVudC5sYWJlbEVsKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIGdldCB0aGUgbGFiZWwgdGV4dCBmcm9tIGEgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0TGFiZWxUZXh0KGNvbXBvbmVudCkge1xuICByZXR1cm4gY29tcG9uZW50LmxhYmVsIHx8IGNvbXBvbmVudC5sYWJlbEVsPy50ZXh0Q29udGVudD8udHJpbSgpIHx8IFwiXCI7XG59XG5mdW5jdGlvbiBvbkxhYmVsQ2xpY2soZXZlbnQpIHtcbiAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29udGFpbmVkTGFiZWxhYmxlQ2hpbGRDbGlja2VkID0gdGhpcy5lbC5jb250YWlucyhldmVudC5kZXRhaWwuc291cmNlRXZlbnQudGFyZ2V0KTtcbiAgaWYgKGNvbnRhaW5lZExhYmVsYWJsZUNoaWxkQ2xpY2tlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLm9uTGFiZWxDbGljayhldmVudCk7XG59XG5mdW5jdGlvbiBvbkxhYmVsQ29ubmVjdGVkKCkge1xuICBpZiAodW5sYWJlbGVkQ29tcG9uZW50cy5oYXModGhpcykpIHtcbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uTGFiZWxEaXNjb25uZWN0ZWQoKSB7XG4gIHVubGFiZWxlZENvbXBvbmVudHMuYWRkKHRoaXMpO1xuICBjb25zdCBib3VuZE9uTGFiZWxDb25uZWN0ZWQgPSBvbkxhYmVsQ29ubmVjdGVkTWFwLmdldCh0aGlzKSB8fCBvbkxhYmVsQ29ubmVjdGVkLmJpbmQodGhpcyk7XG4gIG9uTGFiZWxDb25uZWN0ZWRNYXAuc2V0KHRoaXMsIGJvdW5kT25MYWJlbENvbm5lY3RlZCk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobGFiZWxDb25uZWN0ZWRFdmVudCwgYm91bmRPbkxhYmVsQ29ubmVjdGVkKTtcbn1cblxuZXhwb3J0IHsgbGFiZWxEaXNjb25uZWN0ZWRFdmVudCBhcyBhLCBjb25uZWN0TGFiZWwgYXMgYywgZGlzY29ubmVjdExhYmVsIGFzIGQsIGdldExhYmVsVGV4dCBhcyBnLCBsYWJlbENvbm5lY3RlZEV2ZW50IGFzIGwgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuMlxuICovXG5jb25zdCByZXNvbHZlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHByb21pc2VNYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIHNldHMgdXAgdGhlIGNvbXBvbmVudCBmb3IgdGhlIGFiaWxpdHkgdG8ga25vdyB3aGVuIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnRXaWxsTG9hZCgpOiB2b2lkIHtcbiAqICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gc2V0VXBMb2FkYWJsZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcHJvbWlzZU1hcC5zZXQoY29tcG9uZW50LCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZU1hcC5zZXQoY29tcG9uZW50LCByZXNvbHZlKSkpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGxldHMgdGhlIGxvYWRhYmxlIGNvbXBvbmVudCBrbm93IHRoYXQgaXQgaXMgbm93IGxvYWRlZC5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGluIHRoZSBgY29tcG9uZW50RGlkTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogYGBgXG4gKiBjb21wb25lbnREaWRMb2FkKCk6IHZvaWQge1xuICogICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNldENvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmVzb2x2ZU1hcC5nZXQoY29tcG9uZW50KSgpO1xufVxuLyoqXG4gKiBUaGlzIGhlbHBlciB1dGlsIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSBhIGNvbXBvbmVudCBoYXMgYmVlbiBsb2FkZWQgKFRoZSBcImNvbXBvbmVudERpZExvYWRcIiBzdGVuY2lsIGxpZmVjeWNsZSBtZXRob2QgaGFzIGJlZW4gY2FsbGVkKS5cbiAqXG4gKiBSZXF1aXJlcyBcInNldFVwTG9hZGFibGVDb21wb25lbnRcIiBhbmQgXCJzZXRDb21wb25lbnRMb2FkZWRcIiB0byBiZSBjYWxsZWQgZmlyc3QuXG4gKlxuICogQSBjb21wb25lbnQgZGV2ZWxvcGVyIGNhbiBhd2FpdCB0aGlzIG1ldGhvZCBiZWZvcmUgcHJvY2VlZGluZyB3aXRoIGFueSBsb2dpYyB0aGF0IHJlcXVpcmVzIGEgY29tcG9uZW50IHRvIGJlIGxvYWRlZCBmaXJzdC5cbiAqXG4gKiBgYGBcbiAqIGFzeW5jIHNldEZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICogICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcmV0dXJucyBQcm9taXNlPHZvaWQ+XG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudExvYWRlZChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHByb21pc2VNYXAuZ2V0KGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IHNldENvbXBvbmVudExvYWRlZCBhcyBhLCBjb21wb25lbnRMb2FkZWQgYXMgYywgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCBhcyBzIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=