"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_focusTrapComponent-07adcb3f_js-node_mod-c37c84"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/focusTrapComponent-07adcb3f.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/focusTrapComponent-07adcb3f.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ activateFocusTrap),
/* harmony export */   "c": () => (/* binding */ connectFocusTrap),
/* harmony export */   "d": () => (/* binding */ deactivateFocusTrap),
/* harmony export */   "u": () => (/* binding */ updateFocusTrapElements)
/* harmony export */ });
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */


/*!
* focus-trap 7.4.3
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var activeFocusTraps = {
  activateTrap: function activateTrap(trapStack, trap) {
    if (trapStack.length > 0) {
      var activeTrap = trapStack[trapStack.length - 1];
      if (activeTrap !== trap) {
        activeTrap.pause();
      }
    }
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex === -1) {
      trapStack.push(trap);
    } else {
      // move this existing trap to the front of the queue
      trapStack.splice(trapIndex, 1);
      trapStack.push(trap);
    }
  },
  deactivateTrap: function deactivateTrap(trapStack, trap) {
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex !== -1) {
      trapStack.splice(trapIndex, 1);
    }
    if (trapStack.length > 0) {
      trapStack[trapStack.length - 1].unpause();
    }
  }
};
var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};
var isEscapeEvent = function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};
var isTabEvent = function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
};

// checks for TAB by default
var isKeyForward = function isKeyForward(e) {
  return isTabEvent(e) && !e.shiftKey;
};

// checks for SHIFT+TAB by default
var isKeyBackward = function isKeyBackward(e) {
  return isTabEvent(e) && e.shiftKey;
};
var delay = function delay(fn) {
  return setTimeout(fn, 0);
};

// Array.find/findIndex() are not supported on IE; this replicates enough
//  of Array.findIndex() for our needs
var findIndex = function findIndex(arr, fn) {
  var idx = -1;
  arr.every(function (value, i) {
    if (fn(value)) {
      idx = i;
      return false; // break
    }

    return true; // next
  });

  return idx;
};

/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */
var valueOrHandler = function valueOrHandler(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === 'function' ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget(event) {
  // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
  //  shadow host. However, event.target.composedPath() will be an array of
  //  nodes "clicked" from inner-most (the actual element inside the shadow) to
  //  outer-most (the host HTML document). If we have access to composedPath(),
  //  then use its first element; otherwise, fall back to event.target (and
  //  this only works for an _open_ shadow DOM; otherwise,
  //  composedPath()[0] === event.target always).
  return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
};

// NOTE: this must be _outside_ `createFocusTrap()` to make sure all traps in this
//  current instance use the same stack if `userOptions.trapStack` isn't specified
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap(elements, userOptions) {
  // SSR: a live trap shouldn't be created in this type of environment so this
  //  should be safe code to execute if the `document` option isn't specified
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true,
    isKeyForward: isKeyForward,
    isKeyBackward: isKeyBackward
  }, userOptions);
  var state = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   firstTabbableNode: HTMLElement|null,
    //   lastTabbableNode: HTMLElement|null,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list

    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: undefined
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  /**
   * Gets a configuration option value.
   * @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
   *  value will be taken from this object. Otherwise, value will be taken from base configuration.
   * @param {string} optionName Name of the option whose value is sought.
   * @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
   *  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
   */
  var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };

  /**
   * Finds the index of the container that contains the element.
   * @param {HTMLElement} element
   * @param {Event} [event]
   * @returns {number} Index of the container in either `state.containers` or
   *  `state.containerGroups` (the order/length of these lists are the same); -1
   *  if the element isn't found.
   */
  var findContainerIndex = function findContainerIndex(element, event) {
    var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === 'function' ? event.composedPath() : undefined;
    // NOTE: search `containerGroups` because it's possible a group contains no tabbable
    //  nodes, but still contains focusable nodes (e.g. if they all have `tabindex=-1`)
    //  and we still need to find the element in there
    return state.containerGroups.findIndex(function (_ref) {
      var container = _ref.container,
        tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || ( // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function (node) {
        return node === element;
      });
    });
  };

  /**
   * Gets the node for the given option, which is expected to be an option that
   *  can be either a DOM node, a string that is a selector to get a node, `false`
   *  (if a node is explicitly NOT given), or a function that returns any of these
   *  values.
   * @param {string} optionName
   * @returns {undefined | false | HTMLElement | SVGElement} Returns
   *  `undefined` if the option is not specified; `false` if the option
   *  resolved to `false` (node explicitly not given); otherwise, the resolved
   *  DOM node.
   * @throws {Error} If the option is set, not `false`, and is not, or does not
   *  resolve to a node.
   */
  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    if (typeof optionValue === 'function') {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }
      optionValue = optionValue.apply(void 0, params);
    }
    if (optionValue === true) {
      optionValue = undefined; // use default value
    }

    if (!optionValue) {
      if (optionValue === undefined || optionValue === false) {
        return optionValue;
      }
      // else, empty string (invalid), null (invalid), 0 (invalid)

      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue); // resolve to node, or null if fails
      if (!node) {
        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode() {
    var node = getNodeForOption('initialFocus');

    // false explicitly indicates we want no initialFocus at all
    if (node === false) {
      return false;
    }
    if (node === undefined || !(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.n)(node, config.tabbableOptions)) {
      // option not specified nor focusable: use fallback options
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;

        // NOTE: `fallbackFocus` option function cannot return `false` (not supported)
        node = firstTabbableNode || getNodeForOption('fallbackFocus');
      }
    }
    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes() {
    state.containerGroups = state.containers.map(function (container) {
      var tabbableNodes = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.k)(container, config.tabbableOptions);

      // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
      //  are a superset of tabbable nodes
      var focusableNodes = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.l)(container, config.tabbableOptions);
      return {
        container: container,
        tabbableNodes: tabbableNodes,
        focusableNodes: focusableNodes,
        firstTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[0] : null,
        lastTabbableNode: tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : null,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          // NOTE: If tabindex is positive (in order to manipulate the tab order separate
          //  from the DOM order), this __will not work__ because the list of focusableNodes,
          //  while it contains tabbable nodes, does not sort its nodes in any order other
          //  than DOM order, because it can't: Where would you place focusable (but not
          //  tabbable) nodes in that order? They have no order, because they aren't tabbale...
          // Support for positive tabindex is already broken and hard to manage (possibly
          //  not supportable, TBD), so this isn't going to make things worse than they
          //  already are, and at least makes things better for the majority of cases where
          //  tabindex is either 0/unset or negative.
          // FYI, positive tabindex issue: https://github.com/focus-trap/focus-trap/issues/375
          var nodeIdx = focusableNodes.findIndex(function (n) {
            return n === node;
          });
          if (nodeIdx < 0) {
            return undefined;
          }
          if (forward) {
            return focusableNodes.slice(nodeIdx + 1).find(function (n) {
              return (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.m)(n, config.tabbableOptions);
            });
          }
          return focusableNodes.slice(0, nodeIdx).reverse().find(function (n) {
            return (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.m)(n, config.tabbableOptions);
          });
        }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function (group) {
      return group.tabbableNodes.length > 0;
    });

    // throw if no groups have tabbable nodes and we don't have a fallback focus node either
    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
    ) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }
  };
  var tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }
    if (node === doc.activeElement) {
      return;
    }
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus', previousActiveElement);
    return node ? node : node === false ? false : previousActiveElement;
  };

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  var checkPointerDown = function checkPointerDown(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      // allow the click since it ocurred inside the trap
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      // immediately deactivate the trap
      trap.deactivate({
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked (and if not focusable, to "nothing"); by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node), whether the
        //  outside click was on a focusable node or not
        returnFocus: config.returnFocusOnDeactivate
      });
      return;
    }

    // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)
    if (valueOrHandler(config.allowOutsideClick, e)) {
      // allow the click outside the trap to take place
      return;
    }

    // otherwise, prevent the click
    e.preventDefault();
  };

  // In case focus escapes the trap for some strange reason, pull it back in.
  var checkFocusIn = function checkFocusIn(e) {
    var target = getActualTarget(e);
    var targetContained = findContainerIndex(target, e) >= 0;

    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      // escaped! pull it back in to where it just left
      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  };

  // Hijack key nav events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  var checkKeyNav = function checkKeyNav(event) {
    var isBackward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var target = getActualTarget(event);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      // make sure the target is actually contained in a group
      // NOTE: the target may also be the container itself if it's focusable
      //  with tabIndex='-1' and was given initial focus
      var containerIndex = findContainerIndex(target, event);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : undefined;
      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back into...
        if (isBackward) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (isBackward) {
        // REVERSE

        // is the target the first tabbable node in a group?
        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.n)(target, config.tabbableOptions) && !(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.m)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          // an exception case where the target is either the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle shift+tab as if focus were on the container's
          //  first tabbable node, and go to the last tabbable node of the LAST group
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          // YES: then shift+tab should go to the last tabbable node in the
          //  previous group (and wrap around to the last tabbable node of
          //  the LAST group if it's the first tabbable node of the FIRST group)
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target, false);
        }
      } else {
        // FORWARD

        // is the target the last tabbable node in a group?
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.n)(target, config.tabbableOptions) && !(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.m)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          // an exception case where the target is the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle tab as if focus were on the container's
          //  last tabbable node, and go to the first tabbable node of the FIRST group
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          // YES: then tab should go to the first tabbable node in the next
          //  group (and wrap around to the first tabbable node of the FIRST
          //  group if it's the last tabbable node of the LAST group)
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target);
        }
      }
    } else {
      // no groups available
      // NOTE: the fallbackFocus option does not support returning false to opt-out
      destinationNode = getNodeForOption('fallbackFocus');
    }
    if (destinationNode) {
      if (isTabEvent(event)) {
        // since tab natively moves focus, we wouldn't have a destination node unless we
        //  were on the edge of a container and had to move to the next/previous edge, in
        //  which case we want to prevent default to keep the browser from moving focus
        //  to where it normally would
        event.preventDefault();
      }
      tryFocus(destinationNode);
    }
    // else, let the browser take care of [shift+]tab and move the focus
  };

  var checkKey = function checkKey(event) {
    if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
      event.preventDefault();
      trap.deactivate();
      return;
    }
    if (config.isKeyForward(event) || config.isKeyBackward(event)) {
      checkKeyNav(event, config.isKeyBackward(event));
    }
  };
  var checkClick = function checkClick(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  };

  //
  // EVENT LISTENERS
  //

  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    }

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trapStack, trap);

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };
  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  };

  //
  // MUTATION OBSERVER
  //

  var checkDomRemoval = function checkDomRemoval(mutations) {
    var isFocusedNodeRemoved = mutations.some(function (mutation) {
      var removedNodes = Array.from(mutation.removedNodes);
      return removedNodes.some(function (node) {
        return node === state.mostRecentlyFocusedNode;
      });
    });

    // If the currently focused is removed then browsers will move focus to the
    // <body> element. If this happens, try to move focus back into the trap.
    if (isFocusedNodeRemoved) {
      tryFocus(getInitialFocusNode());
    }
  };

  // Use MutationObserver - if supported - to detect if focused node is removed
  // from the DOM.
  var mutationObserver = typeof window !== 'undefined' && 'MutationObserver' in window ? new MutationObserver(checkDomRemoval) : undefined;
  var updateObservedNodes = function updateObservedNodes() {
    if (!mutationObserver) {
      return;
    }
    mutationObserver.disconnect();
    if (state.active && !state.paused) {
      state.containers.map(function (container) {
        mutationObserver.observe(container, {
          subtree: true,
          childList: true
        });
      });
    }
  };

  //
  // TRAP DEFINITION
  //

  trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, 'onActivate');
      var onPostActivate = getOption(activateOptions, 'onPostActivate');
      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;
      onActivate === null || onActivate === void 0 ? void 0 : onActivate();
      var finishActivation = function finishActivation() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners();
        updateObservedNodes();
        onPostActivate === null || onPostActivate === void 0 ? void 0 : onPostActivate();
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer); // noop if undefined
      state.delayInitialFocusTimer = undefined;
      removeListeners();
      state.active = false;
      state.paused = false;
      updateObservedNodes();
      activeFocusTraps.deactivateTrap(trapStack, trap);
      var onDeactivate = getOption(options, 'onDeactivate');
      var onPostDeactivate = getOption(options, 'onPostDeactivate');
      var checkCanReturnFocus = getOption(options, 'checkCanReturnFocus');
      var returnFocus = getOption(options, 'returnFocus', 'returnFocusOnDeactivate');
      onDeactivate === null || onDeactivate === void 0 ? void 0 : onDeactivate();
      var finishDeactivation = function finishDeactivation() {
        delay(function () {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          onPostDeactivate === null || onPostDeactivate === void 0 ? void 0 : onPostDeactivate();
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause(pauseOptions) {
      if (state.paused || !state.active) {
        return this;
      }
      var onPause = getOption(pauseOptions, 'onPause');
      var onPostPause = getOption(pauseOptions, 'onPostPause');
      state.paused = true;
      onPause === null || onPause === void 0 ? void 0 : onPause();
      removeListeners();
      updateObservedNodes();
      onPostPause === null || onPostPause === void 0 ? void 0 : onPostPause();
      return this;
    },
    unpause: function unpause(unpauseOptions) {
      if (!state.paused || !state.active) {
        return this;
      }
      var onUnpause = getOption(unpauseOptions, 'onUnpause');
      var onPostUnpause = getOption(unpauseOptions, 'onPostUnpause');
      state.paused = false;
      onUnpause === null || onUnpause === void 0 ? void 0 : onUnpause();
      updateTabbableNodes();
      addListeners();
      updateObservedNodes();
      onPostUnpause === null || onPostUnpause === void 0 ? void 0 : onPostUnpause();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      updateObservedNodes();
      return this;
    }
  };

  // initialize container elements
  trap.updateContainerElements(elements);
  return trap;
};

const trapStack = [];
/**
 * Helper to set up the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param options
 */
function connectFocusTrap(component, options) {
  const { el } = component;
  const focusTrapNode = options?.focusTrapEl || el;
  if (!focusTrapNode) {
    return;
  }
  const focusTrapOptions = {
    clickOutsideDeactivates: true,
    escapeDeactivates: false,
    fallbackFocus: focusTrapNode,
    setReturnFocus: (el) => {
      (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.f)(el);
      return false;
    },
    ...options?.focusTrapOptions,
    // the following options are not overrideable
    document: el.ownerDocument,
    tabbableOptions: _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.o,
    trapStack
  };
  component.focusTrap = createFocusTrap(focusTrapNode, focusTrapOptions);
}
/**
 * Helper to activate the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param [options] The FocusTrap activate options.
 */
function activateFocusTrap(component, options) {
  if (!component.focusTrapDisabled) {
    component.focusTrap?.activate(options);
  }
}
/**
 * Helper to deactivate the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @param [options] The FocusTrap deactivate options.
 */
function deactivateFocusTrap(component, options) {
  component.focusTrap?.deactivate(options);
}
/**
 * Helper to update the element(s) that are used within the FocusTrap component.
 *
 * @param {FocusTrapComponent} component The FocusTrap component.
 * @example
 * const modal = document.querySelector("calcite-modal");
 * const input = document.createElement("calcite-input");
 * content.appendChild(input);
 * await input.componentOnReady();
 * await modal.updateFocusTrapElements();
 * requestAnimationFrame(() => input.setFocus());
 */
function updateFocusTrapElements(component) {
  component.focusTrap?.updateContainerElements(component.el);
}




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvODQ0ZWRlOTU4ZDkwNzQ2MjFhY2QwNWY2YmRmZWJjZDkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhJOztBQUU5STtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBLGlCQUFpQjtBQUNqQixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0EsMkZBQTJGLGFBQWE7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixhQUFhLE9BQU87QUFDcEIsZUFBZSxRQUFRO0FBQ3ZCLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlLDhDQUE4QztBQUM3RCxrREFBa0Q7QUFDbEQsdURBQXVEO0FBQ3ZEO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUcsZUFBZTtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtREFBVztBQUMxQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1EQUFROztBQUVsQyx3RUFBd0U7QUFDeEU7QUFDQSwyQkFBMkIsbURBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7QUFDaEMsbUJBQW1CLFNBQVMsOENBQThDO0FBQzFFO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBVTtBQUMvQixhQUFhO0FBQ2I7QUFDQTtBQUNBLG1CQUFtQixtREFBVTtBQUM3QixXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNkVBQTZFLG1EQUFXLHFDQUFxQyxtREFBVTtBQUN2STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEVBQTRFLG1EQUFXLHFDQUFxQyxtREFBVTtBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFLO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBWTtBQUNsQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4MEJqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dEO0FBQ087O0FBRS9EO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVSxHQUFHLEtBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHFEQUFZLGFBQWEsVUFBVSxnQkFBZ0IsS0FBSztBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFLO0FBQ2Y7QUFDQTtBQUNBLDBCQUEwQixzREFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9mb2N1c1RyYXBDb21wb25lbnQtMDdhZGNiM2YuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vdDluLWZhYzEzMzk0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBrIGFzIHRhYmJhYmxlLCBsIGFzIGZvY3VzYWJsZSwgbSBhcyBpc1RhYmJhYmxlLCBuIGFzIGlzRm9jdXNhYmxlLCBmIGFzIGZvY3VzRWxlbWVudCwgbyBhcyB0YWJiYWJsZU9wdGlvbnMgfSBmcm9tICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5cbi8qIVxuKiBmb2N1cy10cmFwIDcuNC4zXG4qIEBsaWNlbnNlIE1JVCwgaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvZm9jdXMtdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSBfdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKHR5cGVvZiByZXMgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSBfdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn1cblxudmFyIGFjdGl2ZUZvY3VzVHJhcHMgPSB7XG4gIGFjdGl2YXRlVHJhcDogZnVuY3Rpb24gYWN0aXZhdGVUcmFwKHRyYXBTdGFjaywgdHJhcCkge1xuICAgIGlmICh0cmFwU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGFjdGl2ZVRyYXAgPSB0cmFwU3RhY2tbdHJhcFN0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGFjdGl2ZVRyYXAgIT09IHRyYXApIHtcbiAgICAgICAgYWN0aXZlVHJhcC5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFN0YWNrLmluZGV4T2YodHJhcCk7XG4gICAgaWYgKHRyYXBJbmRleCA9PT0gLTEpIHtcbiAgICAgIHRyYXBTdGFjay5wdXNoKHRyYXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBtb3ZlIHRoaXMgZXhpc3RpbmcgdHJhcCB0byB0aGUgZnJvbnQgb2YgdGhlIHF1ZXVlXG4gICAgICB0cmFwU3RhY2suc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICB0cmFwU3RhY2sucHVzaCh0cmFwKTtcbiAgICB9XG4gIH0sXG4gIGRlYWN0aXZhdGVUcmFwOiBmdW5jdGlvbiBkZWFjdGl2YXRlVHJhcCh0cmFwU3RhY2ssIHRyYXApIHtcbiAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFN0YWNrLmluZGV4T2YodHJhcCk7XG4gICAgaWYgKHRyYXBJbmRleCAhPT0gLTEpIHtcbiAgICAgIHRyYXBTdGFjay5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICB9XG4gICAgaWYgKHRyYXBTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICB0cmFwU3RhY2tbdHJhcFN0YWNrLmxlbmd0aCAtIDFdLnVucGF1c2UoKTtcbiAgICB9XG4gIH1cbn07XG52YXIgaXNTZWxlY3RhYmxlSW5wdXQgPSBmdW5jdGlvbiBpc1NlbGVjdGFibGVJbnB1dChub2RlKSB7XG4gIHJldHVybiBub2RlLnRhZ05hbWUgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcgJiYgdHlwZW9mIG5vZGUuc2VsZWN0ID09PSAnZnVuY3Rpb24nO1xufTtcbnZhciBpc0VzY2FwZUV2ZW50ID0gZnVuY3Rpb24gaXNFc2NhcGVFdmVudChlKSB7XG4gIHJldHVybiBlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXkgPT09ICdFc2MnIHx8IGUua2V5Q29kZSA9PT0gMjc7XG59O1xudmFyIGlzVGFiRXZlbnQgPSBmdW5jdGlvbiBpc1RhYkV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnVGFiJyB8fCBlLmtleUNvZGUgPT09IDk7XG59O1xuXG4vLyBjaGVja3MgZm9yIFRBQiBieSBkZWZhdWx0XG52YXIgaXNLZXlGb3J3YXJkID0gZnVuY3Rpb24gaXNLZXlGb3J3YXJkKGUpIHtcbiAgcmV0dXJuIGlzVGFiRXZlbnQoZSkgJiYgIWUuc2hpZnRLZXk7XG59O1xuXG4vLyBjaGVja3MgZm9yIFNISUZUK1RBQiBieSBkZWZhdWx0XG52YXIgaXNLZXlCYWNrd2FyZCA9IGZ1bmN0aW9uIGlzS2V5QmFja3dhcmQoZSkge1xuICByZXR1cm4gaXNUYWJFdmVudChlKSAmJiBlLnNoaWZ0S2V5O1xufTtcbnZhciBkZWxheSA9IGZ1bmN0aW9uIGRlbGF5KGZuKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbn07XG5cbi8vIEFycmF5LmZpbmQvZmluZEluZGV4KCkgYXJlIG5vdCBzdXBwb3J0ZWQgb24gSUU7IHRoaXMgcmVwbGljYXRlcyBlbm91Z2hcbi8vICBvZiBBcnJheS5maW5kSW5kZXgoKSBmb3Igb3VyIG5lZWRzXG52YXIgZmluZEluZGV4ID0gZnVuY3Rpb24gZmluZEluZGV4KGFyciwgZm4pIHtcbiAgdmFyIGlkeCA9IC0xO1xuICBhcnIuZXZlcnkoZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgaWYgKGZuKHZhbHVlKSkge1xuICAgICAgaWR4ID0gaTtcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTsgLy8gbmV4dFxuICB9KTtcblxuICByZXR1cm4gaWR4O1xufTtcblxuLyoqXG4gKiBHZXQgYW4gb3B0aW9uJ3MgdmFsdWUgd2hlbiBpdCBjb3VsZCBiZSBhIHBsYWluIHZhbHVlLCBvciBhIGhhbmRsZXIgdGhhdCBwcm92aWRlc1xuICogIHRoZSB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgT3B0aW9uJ3MgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0gey4uLip9IFtwYXJhbXNdIEFueSBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIGhhbmRsZXIsIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHsqfSBUaGUgYHZhbHVlYCwgb3IgdGhlIGhhbmRsZXIncyByZXR1cm5lZCB2YWx1ZS5cbiAqL1xudmFyIHZhbHVlT3JIYW5kbGVyID0gZnVuY3Rpb24gdmFsdWVPckhhbmRsZXIodmFsdWUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUuYXBwbHkodm9pZCAwLCBwYXJhbXMpIDogdmFsdWU7XG59O1xudmFyIGdldEFjdHVhbFRhcmdldCA9IGZ1bmN0aW9uIGdldEFjdHVhbFRhcmdldChldmVudCkge1xuICAvLyBOT1RFOiBJZiB0aGUgdHJhcCBpcyBfaW5zaWRlXyBhIHNoYWRvdyBET00sIGV2ZW50LnRhcmdldCB3aWxsIGFsd2F5cyBiZSB0aGVcbiAgLy8gIHNoYWRvdyBob3N0LiBIb3dldmVyLCBldmVudC50YXJnZXQuY29tcG9zZWRQYXRoKCkgd2lsbCBiZSBhbiBhcnJheSBvZlxuICAvLyAgbm9kZXMgXCJjbGlja2VkXCIgZnJvbSBpbm5lci1tb3N0ICh0aGUgYWN0dWFsIGVsZW1lbnQgaW5zaWRlIHRoZSBzaGFkb3cpIHRvXG4gIC8vICBvdXRlci1tb3N0ICh0aGUgaG9zdCBIVE1MIGRvY3VtZW50KS4gSWYgd2UgaGF2ZSBhY2Nlc3MgdG8gY29tcG9zZWRQYXRoKCksXG4gIC8vICB0aGVuIHVzZSBpdHMgZmlyc3QgZWxlbWVudDsgb3RoZXJ3aXNlLCBmYWxsIGJhY2sgdG8gZXZlbnQudGFyZ2V0IChhbmRcbiAgLy8gIHRoaXMgb25seSB3b3JrcyBmb3IgYW4gX29wZW5fIHNoYWRvdyBET007IG90aGVyd2lzZSxcbiAgLy8gIGNvbXBvc2VkUGF0aCgpWzBdID09PSBldmVudC50YXJnZXQgYWx3YXlzKS5cbiAgcmV0dXJuIGV2ZW50LnRhcmdldC5zaGFkb3dSb290ICYmIHR5cGVvZiBldmVudC5jb21wb3NlZFBhdGggPT09ICdmdW5jdGlvbicgPyBldmVudC5jb21wb3NlZFBhdGgoKVswXSA6IGV2ZW50LnRhcmdldDtcbn07XG5cbi8vIE5PVEU6IHRoaXMgbXVzdCBiZSBfb3V0c2lkZV8gYGNyZWF0ZUZvY3VzVHJhcCgpYCB0byBtYWtlIHN1cmUgYWxsIHRyYXBzIGluIHRoaXNcbi8vICBjdXJyZW50IGluc3RhbmNlIHVzZSB0aGUgc2FtZSBzdGFjayBpZiBgdXNlck9wdGlvbnMudHJhcFN0YWNrYCBpc24ndCBzcGVjaWZpZWRcbnZhciBpbnRlcm5hbFRyYXBTdGFjayA9IFtdO1xudmFyIGNyZWF0ZUZvY3VzVHJhcCA9IGZ1bmN0aW9uIGNyZWF0ZUZvY3VzVHJhcChlbGVtZW50cywgdXNlck9wdGlvbnMpIHtcbiAgLy8gU1NSOiBhIGxpdmUgdHJhcCBzaG91bGRuJ3QgYmUgY3JlYXRlZCBpbiB0aGlzIHR5cGUgb2YgZW52aXJvbm1lbnQgc28gdGhpc1xuICAvLyAgc2hvdWxkIGJlIHNhZmUgY29kZSB0byBleGVjdXRlIGlmIHRoZSBgZG9jdW1lbnRgIG9wdGlvbiBpc24ndCBzcGVjaWZpZWRcbiAgdmFyIGRvYyA9ICh1c2VyT3B0aW9ucyA9PT0gbnVsbCB8fCB1c2VyT3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXNlck9wdGlvbnMuZG9jdW1lbnQpIHx8IGRvY3VtZW50O1xuICB2YXIgdHJhcFN0YWNrID0gKHVzZXJPcHRpb25zID09PSBudWxsIHx8IHVzZXJPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyT3B0aW9ucy50cmFwU3RhY2spIHx8IGludGVybmFsVHJhcFN0YWNrO1xuICB2YXIgY29uZmlnID0gX29iamVjdFNwcmVhZDIoe1xuICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiB0cnVlLFxuICAgIGVzY2FwZURlYWN0aXZhdGVzOiB0cnVlLFxuICAgIGRlbGF5SW5pdGlhbEZvY3VzOiB0cnVlLFxuICAgIGlzS2V5Rm9yd2FyZDogaXNLZXlGb3J3YXJkLFxuICAgIGlzS2V5QmFja3dhcmQ6IGlzS2V5QmFja3dhcmRcbiAgfSwgdXNlck9wdGlvbnMpO1xuICB2YXIgc3RhdGUgPSB7XG4gICAgLy8gY29udGFpbmVycyBnaXZlbiB0byBjcmVhdGVGb2N1c1RyYXAoKVxuICAgIC8vIEB0eXBlIHtBcnJheTxIVE1MRWxlbWVudD59XG4gICAgY29udGFpbmVyczogW10sXG4gICAgLy8gbGlzdCBvZiBvYmplY3RzIGlkZW50aWZ5aW5nIHRhYmJhYmxlIG5vZGVzIGluIGBjb250YWluZXJzYCBpbiB0aGUgdHJhcFxuICAgIC8vIE5PVEU6IGl0J3MgcG9zc2libGUgdGhhdCBhIGdyb3VwIGhhcyBubyB0YWJiYWJsZSBub2RlcyBpZiBub2RlcyBnZXQgcmVtb3ZlZCB3aGlsZSB0aGUgdHJhcFxuICAgIC8vICBpcyBhY3RpdmUsIGJ1dCB0aGUgdHJhcCBzaG91bGQgbmV2ZXIgZ2V0IHRvIGEgc3RhdGUgd2hlcmUgdGhlcmUgaXNuJ3QgYXQgbGVhc3Qgb25lIGdyb3VwXG4gICAgLy8gIHdpdGggYXQgbGVhc3Qgb25lIHRhYmJhYmxlIG5vZGUgaW4gaXQgKHRoYXQgd291bGQgbGVhZCB0byBhbiBlcnJvciBjb25kaXRpb24gdGhhdCB3b3VsZFxuICAgIC8vICByZXN1bHQgaW4gYW4gZXJyb3IgYmVpbmcgdGhyb3duKVxuICAgIC8vIEB0eXBlIHtBcnJheTx7XG4gICAgLy8gICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIC8vICAgdGFiYmFibGVOb2RlczogQXJyYXk8SFRNTEVsZW1lbnQ+LCAvLyBlbXB0eSBpZiBub25lXG4gICAgLy8gICBmb2N1c2FibGVOb2RlczogQXJyYXk8SFRNTEVsZW1lbnQ+LCAvLyBlbXB0eSBpZiBub25lXG4gICAgLy8gICBmaXJzdFRhYmJhYmxlTm9kZTogSFRNTEVsZW1lbnR8bnVsbCxcbiAgICAvLyAgIGxhc3RUYWJiYWJsZU5vZGU6IEhUTUxFbGVtZW50fG51bGwsXG4gICAgLy8gICBuZXh0VGFiYmFibGVOb2RlOiAobm9kZTogSFRNTEVsZW1lbnQsIGZvcndhcmQ6IGJvb2xlYW4pID0+IEhUTUxFbGVtZW50fHVuZGVmaW5lZFxuICAgIC8vIH0+fVxuICAgIGNvbnRhaW5lckdyb3VwczogW10sXG4gICAgLy8gc2FtZSBvcmRlci9sZW5ndGggYXMgYGNvbnRhaW5lcnNgIGxpc3RcblxuICAgIC8vIHJlZmVyZW5jZXMgdG8gb2JqZWN0cyBpbiBgY29udGFpbmVyR3JvdXBzYCwgYnV0IG9ubHkgdGhvc2UgdGhhdCBhY3R1YWxseSBoYXZlXG4gICAgLy8gIHRhYmJhYmxlIG5vZGVzIGluIHRoZW1cbiAgICAvLyBOT1RFOiBzYW1lIG9yZGVyIGFzIGBjb250YWluZXJzYCBhbmQgYGNvbnRhaW5lckdyb3Vwc2AsIGJ1dCBfX25vdCBuZWNlc3NhcmlseV9fXG4gICAgLy8gIHRoZSBzYW1lIGxlbmd0aFxuICAgIHRhYmJhYmxlR3JvdXBzOiBbXSxcbiAgICBub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb246IG51bGwsXG4gICAgbW9zdFJlY2VudGx5Rm9jdXNlZE5vZGU6IG51bGwsXG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBwYXVzZWQ6IGZhbHNlLFxuICAgIC8vIHRpbWVyIElEIGZvciB3aGVuIGRlbGF5SW5pdGlhbEZvY3VzIGlzIHRydWUgYW5kIGluaXRpYWwgZm9jdXMgaW4gdGhpcyB0cmFwXG4gICAgLy8gIGhhcyBiZWVuIGRlbGF5ZWQgZHVyaW5nIGFjdGl2YXRpb25cbiAgICBkZWxheUluaXRpYWxGb2N1c1RpbWVyOiB1bmRlZmluZWRcbiAgfTtcbiAgdmFyIHRyYXA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0IC0tIHNvbWUgcHJpdmF0ZSBmdW5jdGlvbnMgcmVmZXJlbmNlIGl0LCBhbmQgaXRzIG1ldGhvZHMgcmVmZXJlbmNlIHByaXZhdGUgZnVuY3Rpb25zLCBzbyB3ZSBtdXN0IGRlY2xhcmUgaGVyZSBhbmQgZGVmaW5lIGxhdGVyXG5cbiAgLyoqXG4gICAqIEdldHMgYSBjb25maWd1cmF0aW9uIG9wdGlvbiB2YWx1ZS5cbiAgICogQHBhcmFtIHtPYmplY3R8dW5kZWZpbmVkfSBjb25maWdPdmVycmlkZU9wdGlvbnMgSWYgdHJ1ZSwgYW5kIG9wdGlvbiBpcyBkZWZpbmVkIGluIHRoaXMgc2V0LFxuICAgKiAgdmFsdWUgd2lsbCBiZSB0YWtlbiBmcm9tIHRoaXMgb2JqZWN0LiBPdGhlcndpc2UsIHZhbHVlIHdpbGwgYmUgdGFrZW4gZnJvbSBiYXNlIGNvbmZpZ3VyYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25OYW1lIE5hbWUgb2YgdGhlIG9wdGlvbiB3aG9zZSB2YWx1ZSBpcyBzb3VnaHQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gW2NvbmZpZ09wdGlvbk5hbWVdIE5hbWUgb2Ygb3B0aW9uIHRvIHVzZSBfX2luc3RlYWQgb2ZfXyBgb3B0aW9uTmFtZWBcbiAgICogIElJRiBgY29uZmlnT3ZlcnJpZGVPcHRpb25zYCBpcyBub3QgZGVmaW5lZC4gT3RoZXJ3aXNlLCBgb3B0aW9uTmFtZWAgaXMgdXNlZC5cbiAgICovXG4gIHZhciBnZXRPcHRpb24gPSBmdW5jdGlvbiBnZXRPcHRpb24oY29uZmlnT3ZlcnJpZGVPcHRpb25zLCBvcHRpb25OYW1lLCBjb25maWdPcHRpb25OYW1lKSB7XG4gICAgcmV0dXJuIGNvbmZpZ092ZXJyaWRlT3B0aW9ucyAmJiBjb25maWdPdmVycmlkZU9wdGlvbnNbb3B0aW9uTmFtZV0gIT09IHVuZGVmaW5lZCA/IGNvbmZpZ092ZXJyaWRlT3B0aW9uc1tvcHRpb25OYW1lXSA6IGNvbmZpZ1tjb25maWdPcHRpb25OYW1lIHx8IG9wdGlvbk5hbWVdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaW5kcyB0aGUgaW5kZXggb2YgdGhlIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7RXZlbnR9IFtldmVudF1cbiAgICogQHJldHVybnMge251bWJlcn0gSW5kZXggb2YgdGhlIGNvbnRhaW5lciBpbiBlaXRoZXIgYHN0YXRlLmNvbnRhaW5lcnNgIG9yXG4gICAqICBgc3RhdGUuY29udGFpbmVyR3JvdXBzYCAodGhlIG9yZGVyL2xlbmd0aCBvZiB0aGVzZSBsaXN0cyBhcmUgdGhlIHNhbWUpOyAtMVxuICAgKiAgaWYgdGhlIGVsZW1lbnQgaXNuJ3QgZm91bmQuXG4gICAqL1xuICB2YXIgZmluZENvbnRhaW5lckluZGV4ID0gZnVuY3Rpb24gZmluZENvbnRhaW5lckluZGV4KGVsZW1lbnQsIGV2ZW50KSB7XG4gICAgdmFyIGNvbXBvc2VkUGF0aCA9IHR5cGVvZiAoZXZlbnQgPT09IG51bGwgfHwgZXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2ZW50LmNvbXBvc2VkUGF0aCkgPT09ICdmdW5jdGlvbicgPyBldmVudC5jb21wb3NlZFBhdGgoKSA6IHVuZGVmaW5lZDtcbiAgICAvLyBOT1RFOiBzZWFyY2ggYGNvbnRhaW5lckdyb3Vwc2AgYmVjYXVzZSBpdCdzIHBvc3NpYmxlIGEgZ3JvdXAgY29udGFpbnMgbm8gdGFiYmFibGVcbiAgICAvLyAgbm9kZXMsIGJ1dCBzdGlsbCBjb250YWlucyBmb2N1c2FibGUgbm9kZXMgKGUuZy4gaWYgdGhleSBhbGwgaGF2ZSBgdGFiaW5kZXg9LTFgKVxuICAgIC8vICBhbmQgd2Ugc3RpbGwgbmVlZCB0byBmaW5kIHRoZSBlbGVtZW50IGluIHRoZXJlXG4gICAgcmV0dXJuIHN0YXRlLmNvbnRhaW5lckdyb3Vwcy5maW5kSW5kZXgoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSBfcmVmLmNvbnRhaW5lcixcbiAgICAgICAgdGFiYmFibGVOb2RlcyA9IF9yZWYudGFiYmFibGVOb2RlcztcbiAgICAgIHJldHVybiBjb250YWluZXIuY29udGFpbnMoZWxlbWVudCkgfHwgKCAvLyBmYWxsIGJhY2sgdG8gZXhwbGljaXQgdGFiYmFibGUgc2VhcmNoIHdoaWNoIHdpbGwgdGFrZSBpbnRvIGNvbnNpZGVyYXRpb24gYW55XG4gICAgICAvLyAgd2ViIGNvbXBvbmVudHMgaWYgdGhlIGB0YWJiYWJsZU9wdGlvbnMuZ2V0U2hhZG93Um9vdGAgb3B0aW9uIHdhcyB1c2VkIGZvclxuICAgICAgLy8gIHRoZSB0cmFwLCBlbmFibGluZyBzaGFkb3cgRE9NIHN1cHBvcnQgaW4gdGFiYmFibGUgKGBOb2RlLmNvbnRhaW5zKClgIGRvZXNuJ3RcbiAgICAgIC8vICBsb29rIGluc2lkZSB3ZWIgY29tcG9uZW50cyBldmVuIGlmIG9wZW4pXG4gICAgICBjb21wb3NlZFBhdGggPT09IG51bGwgfHwgY29tcG9zZWRQYXRoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wb3NlZFBhdGguaW5jbHVkZXMoY29udGFpbmVyKSkgfHwgdGFiYmFibGVOb2Rlcy5maW5kKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlID09PSBlbGVtZW50O1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG5vZGUgZm9yIHRoZSBnaXZlbiBvcHRpb24sIHdoaWNoIGlzIGV4cGVjdGVkIHRvIGJlIGFuIG9wdGlvbiB0aGF0XG4gICAqICBjYW4gYmUgZWl0aGVyIGEgRE9NIG5vZGUsIGEgc3RyaW5nIHRoYXQgaXMgYSBzZWxlY3RvciB0byBnZXQgYSBub2RlLCBgZmFsc2VgXG4gICAqICAoaWYgYSBub2RlIGlzIGV4cGxpY2l0bHkgTk9UIGdpdmVuKSwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW55IG9mIHRoZXNlXG4gICAqICB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25OYW1lXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWQgfCBmYWxzZSB8IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudH0gUmV0dXJuc1xuICAgKiAgYHVuZGVmaW5lZGAgaWYgdGhlIG9wdGlvbiBpcyBub3Qgc3BlY2lmaWVkOyBgZmFsc2VgIGlmIHRoZSBvcHRpb25cbiAgICogIHJlc29sdmVkIHRvIGBmYWxzZWAgKG5vZGUgZXhwbGljaXRseSBub3QgZ2l2ZW4pOyBvdGhlcndpc2UsIHRoZSByZXNvbHZlZFxuICAgKiAgRE9NIG5vZGUuXG4gICAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgb3B0aW9uIGlzIHNldCwgbm90IGBmYWxzZWAsIGFuZCBpcyBub3QsIG9yIGRvZXMgbm90XG4gICAqICByZXNvbHZlIHRvIGEgbm9kZS5cbiAgICovXG4gIHZhciBnZXROb2RlRm9yT3B0aW9uID0gZnVuY3Rpb24gZ2V0Tm9kZUZvck9wdGlvbihvcHRpb25OYW1lKSB7XG4gICAgdmFyIG9wdGlvblZhbHVlID0gY29uZmlnW29wdGlvbk5hbWVdO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgcGFyYW1zW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuICAgICAgb3B0aW9uVmFsdWUgPSBvcHRpb25WYWx1ZS5hcHBseSh2b2lkIDAsIHBhcmFtcyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25WYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgb3B0aW9uVmFsdWUgPSB1bmRlZmluZWQ7IC8vIHVzZSBkZWZhdWx0IHZhbHVlXG4gICAgfVxuXG4gICAgaWYgKCFvcHRpb25WYWx1ZSkge1xuICAgICAgaWYgKG9wdGlvblZhbHVlID09PSB1bmRlZmluZWQgfHwgb3B0aW9uVmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25WYWx1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGVsc2UsIGVtcHR5IHN0cmluZyAoaW52YWxpZCksIG51bGwgKGludmFsaWQpLCAwIChpbnZhbGlkKVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgXCIuY29uY2F0KG9wdGlvbk5hbWUsIFwiYCB3YXMgc3BlY2lmaWVkIGJ1dCB3YXMgbm90IGEgbm9kZSwgb3IgZGlkIG5vdCByZXR1cm4gYSBub2RlXCIpKTtcbiAgICB9XG4gICAgdmFyIG5vZGUgPSBvcHRpb25WYWx1ZTsgLy8gY291bGQgYmUgSFRNTEVsZW1lbnQsIFNWR0VsZW1lbnQsIG9yIG5vbi1lbXB0eSBzdHJpbmcgYXQgdGhpcyBwb2ludFxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5vZGUgPSBkb2MucXVlcnlTZWxlY3RvcihvcHRpb25WYWx1ZSk7IC8vIHJlc29sdmUgdG8gbm9kZSwgb3IgbnVsbCBpZiBmYWlsc1xuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImBcIi5jb25jYXQob3B0aW9uTmFtZSwgXCJgIGFzIHNlbGVjdG9yIHJlZmVycyB0byBubyBrbm93biBub2RlXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIHZhciBnZXRJbml0aWFsRm9jdXNOb2RlID0gZnVuY3Rpb24gZ2V0SW5pdGlhbEZvY3VzTm9kZSgpIHtcbiAgICB2YXIgbm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpO1xuXG4gICAgLy8gZmFsc2UgZXhwbGljaXRseSBpbmRpY2F0ZXMgd2Ugd2FudCBubyBpbml0aWFsRm9jdXMgYXQgYWxsXG4gICAgaWYgKG5vZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChub2RlID09PSB1bmRlZmluZWQgfHwgIWlzRm9jdXNhYmxlKG5vZGUsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpKSB7XG4gICAgICAvLyBvcHRpb24gbm90IHNwZWNpZmllZCBub3IgZm9jdXNhYmxlOiB1c2UgZmFsbGJhY2sgb3B0aW9uc1xuICAgICAgaWYgKGZpbmRDb250YWluZXJJbmRleChkb2MuYWN0aXZlRWxlbWVudCkgPj0gMCkge1xuICAgICAgICBub2RlID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZmlyc3RUYWJiYWJsZUdyb3VwID0gc3RhdGUudGFiYmFibGVHcm91cHNbMF07XG4gICAgICAgIHZhciBmaXJzdFRhYmJhYmxlTm9kZSA9IGZpcnN0VGFiYmFibGVHcm91cCAmJiBmaXJzdFRhYmJhYmxlR3JvdXAuZmlyc3RUYWJiYWJsZU5vZGU7XG5cbiAgICAgICAgLy8gTk9URTogYGZhbGxiYWNrRm9jdXNgIG9wdGlvbiBmdW5jdGlvbiBjYW5ub3QgcmV0dXJuIGBmYWxzZWAgKG5vdCBzdXBwb3J0ZWQpXG4gICAgICAgIG5vZGUgPSBmaXJzdFRhYmJhYmxlTm9kZSB8fCBnZXROb2RlRm9yT3B0aW9uKCdmYWxsYmFja0ZvY3VzJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGZvY3VzLXRyYXAgbmVlZHMgdG8gaGF2ZSBhdCBsZWFzdCBvbmUgZm9jdXNhYmxlIGVsZW1lbnQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG4gIHZhciB1cGRhdGVUYWJiYWJsZU5vZGVzID0gZnVuY3Rpb24gdXBkYXRlVGFiYmFibGVOb2RlcygpIHtcbiAgICBzdGF0ZS5jb250YWluZXJHcm91cHMgPSBzdGF0ZS5jb250YWluZXJzLm1hcChmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgICB2YXIgdGFiYmFibGVOb2RlcyA9IHRhYmJhYmxlKGNvbnRhaW5lciwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucyk7XG5cbiAgICAgIC8vIE5PVEU6IGlmIHdlIGhhdmUgdGFiYmFibGUgbm9kZXMsIHdlIG11c3QgaGF2ZSBmb2N1c2FibGUgbm9kZXM7IGZvY3VzYWJsZSBub2Rlc1xuICAgICAgLy8gIGFyZSBhIHN1cGVyc2V0IG9mIHRhYmJhYmxlIG5vZGVzXG4gICAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSBmb2N1c2FibGUoY29udGFpbmVyLCBjb25maWcudGFiYmFibGVPcHRpb25zKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICB0YWJiYWJsZU5vZGVzOiB0YWJiYWJsZU5vZGVzLFxuICAgICAgICBmb2N1c2FibGVOb2RlczogZm9jdXNhYmxlTm9kZXMsXG4gICAgICAgIGZpcnN0VGFiYmFibGVOb2RlOiB0YWJiYWJsZU5vZGVzLmxlbmd0aCA+IDAgPyB0YWJiYWJsZU5vZGVzWzBdIDogbnVsbCxcbiAgICAgICAgbGFzdFRhYmJhYmxlTm9kZTogdGFiYmFibGVOb2Rlcy5sZW5ndGggPiAwID8gdGFiYmFibGVOb2Rlc1t0YWJiYWJsZU5vZGVzLmxlbmd0aCAtIDFdIDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmRzIHRoZSBfX3RhYmJhYmxlX18gbm9kZSB0aGF0IGZvbGxvd3MgdGhlIGdpdmVuIG5vZGUgaW4gdGhlIHNwZWNpZmllZCBkaXJlY3Rpb24sXG4gICAgICAgICAqICBpbiB0aGlzIGNvbnRhaW5lciwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcndhcmRdIFRydWUgaWYgZ29pbmcgaW4gZm9yd2FyZCB0YWIgb3JkZXI7IGZhbHNlIGlmIGdvaW5nXG4gICAgICAgICAqICBpbiByZXZlcnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8dW5kZWZpbmVkfSBUaGUgbmV4dCB0YWJiYWJsZSBub2RlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuICAgICAgICBuZXh0VGFiYmFibGVOb2RlOiBmdW5jdGlvbiBuZXh0VGFiYmFibGVOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgZm9yd2FyZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcbiAgICAgICAgICAvLyBOT1RFOiBJZiB0YWJpbmRleCBpcyBwb3NpdGl2ZSAoaW4gb3JkZXIgdG8gbWFuaXB1bGF0ZSB0aGUgdGFiIG9yZGVyIHNlcGFyYXRlXG4gICAgICAgICAgLy8gIGZyb20gdGhlIERPTSBvcmRlciksIHRoaXMgX193aWxsIG5vdCB3b3JrX18gYmVjYXVzZSB0aGUgbGlzdCBvZiBmb2N1c2FibGVOb2RlcyxcbiAgICAgICAgICAvLyAgd2hpbGUgaXQgY29udGFpbnMgdGFiYmFibGUgbm9kZXMsIGRvZXMgbm90IHNvcnQgaXRzIG5vZGVzIGluIGFueSBvcmRlciBvdGhlclxuICAgICAgICAgIC8vICB0aGFuIERPTSBvcmRlciwgYmVjYXVzZSBpdCBjYW4ndDogV2hlcmUgd291bGQgeW91IHBsYWNlIGZvY3VzYWJsZSAoYnV0IG5vdFxuICAgICAgICAgIC8vICB0YWJiYWJsZSkgbm9kZXMgaW4gdGhhdCBvcmRlcj8gVGhleSBoYXZlIG5vIG9yZGVyLCBiZWNhdXNlIHRoZXkgYXJlbid0IHRhYmJhbGUuLi5cbiAgICAgICAgICAvLyBTdXBwb3J0IGZvciBwb3NpdGl2ZSB0YWJpbmRleCBpcyBhbHJlYWR5IGJyb2tlbiBhbmQgaGFyZCB0byBtYW5hZ2UgKHBvc3NpYmx5XG4gICAgICAgICAgLy8gIG5vdCBzdXBwb3J0YWJsZSwgVEJEKSwgc28gdGhpcyBpc24ndCBnb2luZyB0byBtYWtlIHRoaW5ncyB3b3JzZSB0aGFuIHRoZXlcbiAgICAgICAgICAvLyAgYWxyZWFkeSBhcmUsIGFuZCBhdCBsZWFzdCBtYWtlcyB0aGluZ3MgYmV0dGVyIGZvciB0aGUgbWFqb3JpdHkgb2YgY2FzZXMgd2hlcmVcbiAgICAgICAgICAvLyAgdGFiaW5kZXggaXMgZWl0aGVyIDAvdW5zZXQgb3IgbmVnYXRpdmUuXG4gICAgICAgICAgLy8gRllJLCBwb3NpdGl2ZSB0YWJpbmRleCBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZvY3VzLXRyYXAvZm9jdXMtdHJhcC9pc3N1ZXMvMzc1XG4gICAgICAgICAgdmFyIG5vZGVJZHggPSBmb2N1c2FibGVOb2Rlcy5maW5kSW5kZXgoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIHJldHVybiBuID09PSBub2RlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChub2RlSWR4IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZvcndhcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBmb2N1c2FibGVOb2Rlcy5zbGljZShub2RlSWR4ICsgMSkuZmluZChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICByZXR1cm4gaXNUYWJiYWJsZShuLCBjb25maWcudGFiYmFibGVPcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZm9jdXNhYmxlTm9kZXMuc2xpY2UoMCwgbm9kZUlkeCkucmV2ZXJzZSgpLmZpbmQoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgIHJldHVybiBpc1RhYmJhYmxlKG4sIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHN0YXRlLnRhYmJhYmxlR3JvdXBzID0gc3RhdGUuY29udGFpbmVyR3JvdXBzLmZpbHRlcihmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIHJldHVybiBncm91cC50YWJiYWJsZU5vZGVzLmxlbmd0aCA+IDA7XG4gICAgfSk7XG5cbiAgICAvLyB0aHJvdyBpZiBubyBncm91cHMgaGF2ZSB0YWJiYWJsZSBub2RlcyBhbmQgd2UgZG9uJ3QgaGF2ZSBhIGZhbGxiYWNrIGZvY3VzIG5vZGUgZWl0aGVyXG4gICAgaWYgKHN0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCA8PSAwICYmICFnZXROb2RlRm9yT3B0aW9uKCdmYWxsYmFja0ZvY3VzJykgLy8gcmV0dXJuaW5nIGZhbHNlIG5vdCBzdXBwb3J0ZWQgZm9yIHRoaXMgb3B0aW9uXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgZm9jdXMtdHJhcCBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNvbnRhaW5lciB3aXRoIGF0IGxlYXN0IG9uZSB0YWJiYWJsZSBub2RlIGluIGl0IGF0IGFsbCB0aW1lcycpO1xuICAgIH1cbiAgfTtcbiAgdmFyIHRyeUZvY3VzID0gZnVuY3Rpb24gdHJ5Rm9jdXMobm9kZSkge1xuICAgIGlmIChub2RlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobm9kZSA9PT0gZG9jLmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLmZvY3VzKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBub2RlLmZvY3VzKHtcbiAgICAgIHByZXZlbnRTY3JvbGw6ICEhY29uZmlnLnByZXZlbnRTY3JvbGxcbiAgICB9KTtcbiAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IG5vZGU7XG4gICAgaWYgKGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpKSB7XG4gICAgICBub2RlLnNlbGVjdCgpO1xuICAgIH1cbiAgfTtcbiAgdmFyIGdldFJldHVybkZvY3VzTm9kZSA9IGZ1bmN0aW9uIGdldFJldHVybkZvY3VzTm9kZShwcmV2aW91c0FjdGl2ZUVsZW1lbnQpIHtcbiAgICB2YXIgbm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ3NldFJldHVybkZvY3VzJywgcHJldmlvdXNBY3RpdmVFbGVtZW50KTtcbiAgICByZXR1cm4gbm9kZSA/IG5vZGUgOiBub2RlID09PSBmYWxzZSA/IGZhbHNlIDogcHJldmlvdXNBY3RpdmVFbGVtZW50O1xuICB9O1xuXG4gIC8vIFRoaXMgbmVlZHMgdG8gYmUgZG9uZSBvbiBtb3VzZWRvd24gYW5kIHRvdWNoc3RhcnQgaW5zdGVhZCBvZiBjbGlja1xuICAvLyBzbyB0aGF0IGl0IHByZWNlZGVzIHRoZSBmb2N1cyBldmVudC5cbiAgdmFyIGNoZWNrUG9pbnRlckRvd24gPSBmdW5jdGlvbiBjaGVja1BvaW50ZXJEb3duKGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0QWN0dWFsVGFyZ2V0KGUpO1xuICAgIGlmIChmaW5kQ29udGFpbmVySW5kZXgodGFyZ2V0LCBlKSA+PSAwKSB7XG4gICAgICAvLyBhbGxvdyB0aGUgY2xpY2sgc2luY2UgaXQgb2N1cnJlZCBpbnNpZGUgdGhlIHRyYXBcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcywgZSkpIHtcbiAgICAgIC8vIGltbWVkaWF0ZWx5IGRlYWN0aXZhdGUgdGhlIHRyYXBcbiAgICAgIHRyYXAuZGVhY3RpdmF0ZSh7XG4gICAgICAgIC8vIE5PVEU6IGJ5IHNldHRpbmcgYHJldHVybkZvY3VzOiBmYWxzZWAsIGRlYWN0aXZhdGUoKSB3aWxsIGRvIG5vdGhpbmcsXG4gICAgICAgIC8vICB3aGljaCB3aWxsIHJlc3VsdCBpbiB0aGUgb3V0c2lkZSBjbGljayBzZXR0aW5nIGZvY3VzIHRvIHRoZSBub2RlXG4gICAgICAgIC8vICB0aGF0IHdhcyBjbGlja2VkIChhbmQgaWYgbm90IGZvY3VzYWJsZSwgdG8gXCJub3RoaW5nXCIpOyBieSBzZXR0aW5nXG4gICAgICAgIC8vICBgcmV0dXJuRm9jdXM6IHRydWVgLCB3ZSdsbCBhdHRlbXB0IHRvIHJlLWZvY3VzIHRoZSBub2RlIG9yaWdpbmFsbHktZm9jdXNlZFxuICAgICAgICAvLyAgb24gYWN0aXZhdGlvbiAob3IgdGhlIGNvbmZpZ3VyZWQgYHNldFJldHVybkZvY3VzYCBub2RlKSwgd2hldGhlciB0aGVcbiAgICAgICAgLy8gIG91dHNpZGUgY2xpY2sgd2FzIG9uIGEgZm9jdXNhYmxlIG5vZGUgb3Igbm90XG4gICAgICAgIHJldHVybkZvY3VzOiBjb25maWcucmV0dXJuRm9jdXNPbkRlYWN0aXZhdGVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgbmVlZGVkIGZvciBtb2JpbGUgZGV2aWNlcy5cbiAgICAvLyAoSWYgd2UnbGwgb25seSBsZXQgYGNsaWNrYCBldmVudHMgdGhyb3VnaCxcbiAgICAvLyB0aGVuIG9uIG1vYmlsZSB0aGV5IHdpbGwgYmUgYmxvY2tlZCBhbnl3YXlzIGlmIGB0b3VjaHN0YXJ0YCBpcyBibG9ja2VkLilcbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmFsbG93T3V0c2lkZUNsaWNrLCBlKSkge1xuICAgICAgLy8gYWxsb3cgdGhlIGNsaWNrIG91dHNpZGUgdGhlIHRyYXAgdG8gdGFrZSBwbGFjZVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIG90aGVyd2lzZSwgcHJldmVudCB0aGUgY2xpY2tcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgLy8gSW4gY2FzZSBmb2N1cyBlc2NhcGVzIHRoZSB0cmFwIGZvciBzb21lIHN0cmFuZ2UgcmVhc29uLCBwdWxsIGl0IGJhY2sgaW4uXG4gIHZhciBjaGVja0ZvY3VzSW4gPSBmdW5jdGlvbiBjaGVja0ZvY3VzSW4oZSkge1xuICAgIHZhciB0YXJnZXQgPSBnZXRBY3R1YWxUYXJnZXQoZSk7XG4gICAgdmFyIHRhcmdldENvbnRhaW5lZCA9IGZpbmRDb250YWluZXJJbmRleCh0YXJnZXQsIGUpID49IDA7XG5cbiAgICAvLyBJbiBGaXJlZm94IHdoZW4geW91IFRhYiBvdXQgb2YgYW4gaWZyYW1lIHRoZSBEb2N1bWVudCBpcyBicmllZmx5IGZvY3VzZWQuXG4gICAgaWYgKHRhcmdldENvbnRhaW5lZCB8fCB0YXJnZXQgaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgaWYgKHRhcmdldENvbnRhaW5lZCkge1xuICAgICAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IHRhcmdldDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNjYXBlZCEgcHVsbCBpdCBiYWNrIGluIHRvIHdoZXJlIGl0IGp1c3QgbGVmdFxuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIHRyeUZvY3VzKHN0YXRlLm1vc3RSZWNlbnRseUZvY3VzZWROb2RlIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEhpamFjayBrZXkgbmF2IGV2ZW50cyBvbiB0aGUgZmlyc3QgYW5kIGxhc3QgZm9jdXNhYmxlIG5vZGVzIG9mIHRoZSB0cmFwLFxuICAvLyBpbiBvcmRlciB0byBwcmV2ZW50IGZvY3VzIGZyb20gZXNjYXBpbmcuIElmIGl0IGVzY2FwZXMgZm9yIGV2ZW4gYVxuICAvLyBtb21lbnQgaXQgY2FuIGVuZCB1cCBzY3JvbGxpbmcgdGhlIHBhZ2UgYW5kIGNhdXNpbmcgY29uZnVzaW9uIHNvIHdlXG4gIC8vIGtpbmQgb2YgbmVlZCB0byBjYXB0dXJlIHRoZSBhY3Rpb24gYXQgdGhlIGtleWRvd24gcGhhc2UuXG4gIHZhciBjaGVja0tleU5hdiA9IGZ1bmN0aW9uIGNoZWNrS2V5TmF2KGV2ZW50KSB7XG4gICAgdmFyIGlzQmFja3dhcmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIHZhciB0YXJnZXQgPSBnZXRBY3R1YWxUYXJnZXQoZXZlbnQpO1xuICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICB2YXIgZGVzdGluYXRpb25Ob2RlID0gbnVsbDtcbiAgICBpZiAoc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gbWFrZSBzdXJlIHRoZSB0YXJnZXQgaXMgYWN0dWFsbHkgY29udGFpbmVkIGluIGEgZ3JvdXBcbiAgICAgIC8vIE5PVEU6IHRoZSB0YXJnZXQgbWF5IGFsc28gYmUgdGhlIGNvbnRhaW5lciBpdHNlbGYgaWYgaXQncyBmb2N1c2FibGVcbiAgICAgIC8vICB3aXRoIHRhYkluZGV4PSctMScgYW5kIHdhcyBnaXZlbiBpbml0aWFsIGZvY3VzXG4gICAgICB2YXIgY29udGFpbmVySW5kZXggPSBmaW5kQ29udGFpbmVySW5kZXgodGFyZ2V0LCBldmVudCk7XG4gICAgICB2YXIgY29udGFpbmVyR3JvdXAgPSBjb250YWluZXJJbmRleCA+PSAwID8gc3RhdGUuY29udGFpbmVyR3JvdXBzW2NvbnRhaW5lckluZGV4XSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmIChjb250YWluZXJJbmRleCA8IDApIHtcbiAgICAgICAgLy8gdGFyZ2V0IG5vdCBmb3VuZCBpbiBhbnkgZ3JvdXA6IHF1aXRlIHBvc3NpYmxlIGZvY3VzIGhhcyBlc2NhcGVkIHRoZSB0cmFwLFxuICAgICAgICAvLyAgc28gYnJpbmcgaXQgYmFjayBpbnRvLi4uXG4gICAgICAgIGlmIChpc0JhY2t3YXJkKSB7XG4gICAgICAgICAgLy8gLi4udGhlIGxhc3Qgbm9kZSBpbiB0aGUgbGFzdCBncm91cFxuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzW3N0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCAtIDFdLmxhc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gLi4udGhlIGZpcnN0IG5vZGUgaW4gdGhlIGZpcnN0IGdyb3VwXG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gc3RhdGUudGFiYmFibGVHcm91cHNbMF0uZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNCYWNrd2FyZCkge1xuICAgICAgICAvLyBSRVZFUlNFXG5cbiAgICAgICAgLy8gaXMgdGhlIHRhcmdldCB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBpbiBhIGdyb3VwP1xuICAgICAgICB2YXIgc3RhcnRPZkdyb3VwSW5kZXggPSBmaW5kSW5kZXgoc3RhdGUudGFiYmFibGVHcm91cHMsIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgIHZhciBmaXJzdFRhYmJhYmxlTm9kZSA9IF9yZWYyLmZpcnN0VGFiYmFibGVOb2RlO1xuICAgICAgICAgIHJldHVybiB0YXJnZXQgPT09IGZpcnN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN0YXJ0T2ZHcm91cEluZGV4IDwgMCAmJiAoY29udGFpbmVyR3JvdXAuY29udGFpbmVyID09PSB0YXJnZXQgfHwgaXNGb2N1c2FibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhaXNUYWJiYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpICYmICFjb250YWluZXJHcm91cC5uZXh0VGFiYmFibGVOb2RlKHRhcmdldCwgZmFsc2UpKSkge1xuICAgICAgICAgIC8vIGFuIGV4Y2VwdGlvbiBjYXNlIHdoZXJlIHRoZSB0YXJnZXQgaXMgZWl0aGVyIHRoZSBjb250YWluZXIgaXRzZWxmLCBvclxuICAgICAgICAgIC8vICBhIG5vbi10YWJiYWJsZSBub2RlIHRoYXQgd2FzIGdpdmVuIGZvY3VzIChpLmUuIHRhYmluZGV4IGlzIG5lZ2F0aXZlXG4gICAgICAgICAgLy8gIGFuZCB1c2VyIGNsaWNrZWQgb24gaXQgb3Igbm9kZSB3YXMgcHJvZ3JhbW1hdGljYWxseSBnaXZlbiBmb2N1cylcbiAgICAgICAgICAvLyAgYW5kIGlzIG5vdCBmb2xsb3dlZCBieSBhbnkgb3RoZXIgdGFiYmFibGUgbm9kZSwgaW4gd2hpY2hcbiAgICAgICAgICAvLyAgY2FzZSwgd2Ugc2hvdWxkIGhhbmRsZSBzaGlmdCt0YWIgYXMgaWYgZm9jdXMgd2VyZSBvbiB0aGUgY29udGFpbmVyJ3NcbiAgICAgICAgICAvLyAgZmlyc3QgdGFiYmFibGUgbm9kZSwgYW5kIGdvIHRvIHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgb2YgdGhlIExBU1QgZ3JvdXBcbiAgICAgICAgICBzdGFydE9mR3JvdXBJbmRleCA9IGNvbnRhaW5lckluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydE9mR3JvdXBJbmRleCA+PSAwKSB7XG4gICAgICAgICAgLy8gWUVTOiB0aGVuIHNoaWZ0K3RhYiBzaG91bGQgZ28gdG8gdGhlIGxhc3QgdGFiYmFibGUgbm9kZSBpbiB0aGVcbiAgICAgICAgICAvLyAgcHJldmlvdXMgZ3JvdXAgKGFuZCB3cmFwIGFyb3VuZCB0byB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIG9mXG4gICAgICAgICAgLy8gIHRoZSBMQVNUIGdyb3VwIGlmIGl0J3MgdGhlIGZpcnN0IHRhYmJhYmxlIG5vZGUgb2YgdGhlIEZJUlNUIGdyb3VwKVxuICAgICAgICAgIHZhciBkZXN0aW5hdGlvbkdyb3VwSW5kZXggPSBzdGFydE9mR3JvdXBJbmRleCA9PT0gMCA/IHN0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCAtIDEgOiBzdGFydE9mR3JvdXBJbmRleCAtIDE7XG4gICAgICAgICAgdmFyIGRlc3RpbmF0aW9uR3JvdXAgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1tkZXN0aW5hdGlvbkdyb3VwSW5kZXhdO1xuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IGRlc3RpbmF0aW9uR3JvdXAubGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNUYWJFdmVudChldmVudCkpIHtcbiAgICAgICAgICAvLyB1c2VyIG11c3QgaGF2ZSBjdXN0b21pemVkIHRoZSBuYXYga2V5cyBzbyB3ZSBoYXZlIHRvIG1vdmUgZm9jdXMgbWFudWFsbHkgX3dpdGhpbl9cbiAgICAgICAgICAvLyAgdGhlIGFjdGl2ZSBncm91cDogZG8gdGhpcyBiYXNlZCBvbiB0aGUgb3JkZXIgZGV0ZXJtaW5lZCBieSB0YWJiYWJsZSgpXG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gY29udGFpbmVyR3JvdXAubmV4dFRhYmJhYmxlTm9kZSh0YXJnZXQsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRk9SV0FSRFxuXG4gICAgICAgIC8vIGlzIHRoZSB0YXJnZXQgdGhlIGxhc3QgdGFiYmFibGUgbm9kZSBpbiBhIGdyb3VwP1xuICAgICAgICB2YXIgbGFzdE9mR3JvdXBJbmRleCA9IGZpbmRJbmRleChzdGF0ZS50YWJiYWJsZUdyb3VwcywgZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgICAgdmFyIGxhc3RUYWJiYWJsZU5vZGUgPSBfcmVmMy5sYXN0VGFiYmFibGVOb2RlO1xuICAgICAgICAgIHJldHVybiB0YXJnZXQgPT09IGxhc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobGFzdE9mR3JvdXBJbmRleCA8IDAgJiYgKGNvbnRhaW5lckdyb3VwLmNvbnRhaW5lciA9PT0gdGFyZ2V0IHx8IGlzRm9jdXNhYmxlKHRhcmdldCwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucykgJiYgIWlzVGFiYmFibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhY29udGFpbmVyR3JvdXAubmV4dFRhYmJhYmxlTm9kZSh0YXJnZXQpKSkge1xuICAgICAgICAgIC8vIGFuIGV4Y2VwdGlvbiBjYXNlIHdoZXJlIHRoZSB0YXJnZXQgaXMgdGhlIGNvbnRhaW5lciBpdHNlbGYsIG9yXG4gICAgICAgICAgLy8gIGEgbm9uLXRhYmJhYmxlIG5vZGUgdGhhdCB3YXMgZ2l2ZW4gZm9jdXMgKGkuZS4gdGFiaW5kZXggaXMgbmVnYXRpdmVcbiAgICAgICAgICAvLyAgYW5kIHVzZXIgY2xpY2tlZCBvbiBpdCBvciBub2RlIHdhcyBwcm9ncmFtbWF0aWNhbGx5IGdpdmVuIGZvY3VzKVxuICAgICAgICAgIC8vICBhbmQgaXMgbm90IGZvbGxvd2VkIGJ5IGFueSBvdGhlciB0YWJiYWJsZSBub2RlLCBpbiB3aGljaFxuICAgICAgICAgIC8vICBjYXNlLCB3ZSBzaG91bGQgaGFuZGxlIHRhYiBhcyBpZiBmb2N1cyB3ZXJlIG9uIHRoZSBjb250YWluZXInc1xuICAgICAgICAgIC8vICBsYXN0IHRhYmJhYmxlIG5vZGUsIGFuZCBnbyB0byB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgRklSU1QgZ3JvdXBcbiAgICAgICAgICBsYXN0T2ZHcm91cEluZGV4ID0gY29udGFpbmVySW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RPZkdyb3VwSW5kZXggPj0gMCkge1xuICAgICAgICAgIC8vIFlFUzogdGhlbiB0YWIgc2hvdWxkIGdvIHRvIHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIGluIHRoZSBuZXh0XG4gICAgICAgICAgLy8gIGdyb3VwIChhbmQgd3JhcCBhcm91bmQgdG8gdGhlIGZpcnN0IHRhYmJhYmxlIG5vZGUgb2YgdGhlIEZJUlNUXG4gICAgICAgICAgLy8gIGdyb3VwIGlmIGl0J3MgdGhlIGxhc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgTEFTVCBncm91cClcbiAgICAgICAgICB2YXIgX2Rlc3RpbmF0aW9uR3JvdXBJbmRleCA9IGxhc3RPZkdyb3VwSW5kZXggPT09IHN0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCAtIDEgPyAwIDogbGFzdE9mR3JvdXBJbmRleCArIDE7XG4gICAgICAgICAgdmFyIF9kZXN0aW5hdGlvbkdyb3VwID0gc3RhdGUudGFiYmFibGVHcm91cHNbX2Rlc3RpbmF0aW9uR3JvdXBJbmRleF07XG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gX2Rlc3RpbmF0aW9uR3JvdXAuZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzVGFiRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgLy8gdXNlciBtdXN0IGhhdmUgY3VzdG9taXplZCB0aGUgbmF2IGtleXMgc28gd2UgaGF2ZSB0byBtb3ZlIGZvY3VzIG1hbnVhbGx5IF93aXRoaW5fXG4gICAgICAgICAgLy8gIHRoZSBhY3RpdmUgZ3JvdXA6IGRvIHRoaXMgYmFzZWQgb24gdGhlIG9yZGVyIGRldGVybWluZWQgYnkgdGFiYmFibGUoKVxuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IGNvbnRhaW5lckdyb3VwLm5leHRUYWJiYWJsZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBubyBncm91cHMgYXZhaWxhYmxlXG4gICAgICAvLyBOT1RFOiB0aGUgZmFsbGJhY2tGb2N1cyBvcHRpb24gZG9lcyBub3Qgc3VwcG9ydCByZXR1cm5pbmcgZmFsc2UgdG8gb3B0LW91dFxuICAgICAgZGVzdGluYXRpb25Ob2RlID0gZ2V0Tm9kZUZvck9wdGlvbignZmFsbGJhY2tGb2N1cycpO1xuICAgIH1cbiAgICBpZiAoZGVzdGluYXRpb25Ob2RlKSB7XG4gICAgICBpZiAoaXNUYWJFdmVudChldmVudCkpIHtcbiAgICAgICAgLy8gc2luY2UgdGFiIG5hdGl2ZWx5IG1vdmVzIGZvY3VzLCB3ZSB3b3VsZG4ndCBoYXZlIGEgZGVzdGluYXRpb24gbm9kZSB1bmxlc3Mgd2VcbiAgICAgICAgLy8gIHdlcmUgb24gdGhlIGVkZ2Ugb2YgYSBjb250YWluZXIgYW5kIGhhZCB0byBtb3ZlIHRvIHRoZSBuZXh0L3ByZXZpb3VzIGVkZ2UsIGluXG4gICAgICAgIC8vICB3aGljaCBjYXNlIHdlIHdhbnQgdG8gcHJldmVudCBkZWZhdWx0IHRvIGtlZXAgdGhlIGJyb3dzZXIgZnJvbSBtb3ZpbmcgZm9jdXNcbiAgICAgICAgLy8gIHRvIHdoZXJlIGl0IG5vcm1hbGx5IHdvdWxkXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICB0cnlGb2N1cyhkZXN0aW5hdGlvbk5vZGUpO1xuICAgIH1cbiAgICAvLyBlbHNlLCBsZXQgdGhlIGJyb3dzZXIgdGFrZSBjYXJlIG9mIFtzaGlmdCtddGFiIGFuZCBtb3ZlIHRoZSBmb2N1c1xuICB9O1xuXG4gIHZhciBjaGVja0tleSA9IGZ1bmN0aW9uIGNoZWNrS2V5KGV2ZW50KSB7XG4gICAgaWYgKGlzRXNjYXBlRXZlbnQoZXZlbnQpICYmIHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5lc2NhcGVEZWFjdGl2YXRlcywgZXZlbnQpICE9PSBmYWxzZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRyYXAuZGVhY3RpdmF0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmlzS2V5Rm9yd2FyZChldmVudCkgfHwgY29uZmlnLmlzS2V5QmFja3dhcmQoZXZlbnQpKSB7XG4gICAgICBjaGVja0tleU5hdihldmVudCwgY29uZmlnLmlzS2V5QmFja3dhcmQoZXZlbnQpKTtcbiAgICB9XG4gIH07XG4gIHZhciBjaGVja0NsaWNrID0gZnVuY3Rpb24gY2hlY2tDbGljayhlKSB7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChlKTtcbiAgICBpZiAoZmluZENvbnRhaW5lckluZGV4KHRhcmdldCwgZSkgPj0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzLCBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmFsbG93T3V0c2lkZUNsaWNrLCBlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICAvL1xuICAvLyBFVkVOVCBMSVNURU5FUlNcbiAgLy9cblxuICB2YXIgYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGhlcmUgY2FuIGJlIG9ubHkgb25lIGxpc3RlbmluZyBmb2N1cyB0cmFwIGF0IGEgdGltZVxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuYWN0aXZhdGVUcmFwKHRyYXBTdGFjaywgdHJhcCk7XG5cbiAgICAvLyBEZWxheSBlbnN1cmVzIHRoYXQgdGhlIGZvY3VzZWQgZWxlbWVudCBkb2Vzbid0IGNhcHR1cmUgdGhlIGV2ZW50XG4gICAgLy8gdGhhdCBjYXVzZWQgdGhlIGZvY3VzIHRyYXAgYWN0aXZhdGlvbi5cbiAgICBzdGF0ZS5kZWxheUluaXRpYWxGb2N1c1RpbWVyID0gY29uZmlnLmRlbGF5SW5pdGlhbEZvY3VzID8gZGVsYXkoZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICB9KSA6IHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjaGVja0ZvY3VzSW4sIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB7XG4gICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiB0cmFwO1xuICB9O1xuICB2YXIgcmVtb3ZlTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcbiAgICByZXR1cm4gdHJhcDtcbiAgfTtcblxuICAvL1xuICAvLyBNVVRBVElPTiBPQlNFUlZFUlxuICAvL1xuXG4gIHZhciBjaGVja0RvbVJlbW92YWwgPSBmdW5jdGlvbiBjaGVja0RvbVJlbW92YWwobXV0YXRpb25zKSB7XG4gICAgdmFyIGlzRm9jdXNlZE5vZGVSZW1vdmVkID0gbXV0YXRpb25zLnNvbWUoZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICB2YXIgcmVtb3ZlZE5vZGVzID0gQXJyYXkuZnJvbShtdXRhdGlvbi5yZW1vdmVkTm9kZXMpO1xuICAgICAgcmV0dXJuIHJlbW92ZWROb2Rlcy5zb21lKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlID09PSBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gSWYgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGlzIHJlbW92ZWQgdGhlbiBicm93c2VycyB3aWxsIG1vdmUgZm9jdXMgdG8gdGhlXG4gICAgLy8gPGJvZHk+IGVsZW1lbnQuIElmIHRoaXMgaGFwcGVucywgdHJ5IHRvIG1vdmUgZm9jdXMgYmFjayBpbnRvIHRoZSB0cmFwLlxuICAgIGlmIChpc0ZvY3VzZWROb2RlUmVtb3ZlZCkge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVXNlIE11dGF0aW9uT2JzZXJ2ZXIgLSBpZiBzdXBwb3J0ZWQgLSB0byBkZXRlY3QgaWYgZm9jdXNlZCBub2RlIGlzIHJlbW92ZWRcbiAgLy8gZnJvbSB0aGUgRE9NLlxuICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgPyBuZXcgTXV0YXRpb25PYnNlcnZlcihjaGVja0RvbVJlbW92YWwpIDogdW5kZWZpbmVkO1xuICB2YXIgdXBkYXRlT2JzZXJ2ZWROb2RlcyA9IGZ1bmN0aW9uIHVwZGF0ZU9ic2VydmVkTm9kZXMoKSB7XG4gICAgaWYgKCFtdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIGlmIChzdGF0ZS5hY3RpdmUgJiYgIXN0YXRlLnBhdXNlZCkge1xuICAgICAgc3RhdGUuY29udGFpbmVycy5tYXAoZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoY29udGFpbmVyLCB7XG4gICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICBjaGlsZExpc3Q6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy9cbiAgLy8gVFJBUCBERUZJTklUSU9OXG4gIC8vXG5cbiAgdHJhcCA9IHtcbiAgICBnZXQgYWN0aXZlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLmFjdGl2ZTtcbiAgICB9LFxuICAgIGdldCBwYXVzZWQoKSB7XG4gICAgICByZXR1cm4gc3RhdGUucGF1c2VkO1xuICAgIH0sXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uIGFjdGl2YXRlKGFjdGl2YXRlT3B0aW9ucykge1xuICAgICAgaWYgKHN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvbkFjdGl2YXRlID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgJ29uQWN0aXZhdGUnKTtcbiAgICAgIHZhciBvblBvc3RBY3RpdmF0ZSA9IGdldE9wdGlvbihhY3RpdmF0ZU9wdGlvbnMsICdvblBvc3RBY3RpdmF0ZScpO1xuICAgICAgdmFyIGNoZWNrQ2FuRm9jdXNUcmFwID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgJ2NoZWNrQ2FuRm9jdXNUcmFwJyk7XG4gICAgICBpZiAoIWNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbiA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgICAgb25BY3RpdmF0ZSA9PT0gbnVsbCB8fCBvbkFjdGl2YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkFjdGl2YXRlKCk7XG4gICAgICB2YXIgZmluaXNoQWN0aXZhdGlvbiA9IGZ1bmN0aW9uIGZpbmlzaEFjdGl2YXRpb24oKSB7XG4gICAgICAgIGlmIChjaGVja0NhbkZvY3VzVHJhcCkge1xuICAgICAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdXBkYXRlT2JzZXJ2ZWROb2RlcygpO1xuICAgICAgICBvblBvc3RBY3RpdmF0ZSA9PT0gbnVsbCB8fCBvblBvc3RBY3RpdmF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25Qb3N0QWN0aXZhdGUoKTtcbiAgICAgIH07XG4gICAgICBpZiAoY2hlY2tDYW5Gb2N1c1RyYXApIHtcbiAgICAgICAgY2hlY2tDYW5Gb2N1c1RyYXAoc3RhdGUuY29udGFpbmVycy5jb25jYXQoKSkudGhlbihmaW5pc2hBY3RpdmF0aW9uLCBmaW5pc2hBY3RpdmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBmaW5pc2hBY3RpdmF0aW9uKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIGRlYWN0aXZhdGUoZGVhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICAgIGlmICghc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgdmFyIG9wdGlvbnMgPSBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgIG9uRGVhY3RpdmF0ZTogY29uZmlnLm9uRGVhY3RpdmF0ZSxcbiAgICAgICAgb25Qb3N0RGVhY3RpdmF0ZTogY29uZmlnLm9uUG9zdERlYWN0aXZhdGUsXG4gICAgICAgIGNoZWNrQ2FuUmV0dXJuRm9jdXM6IGNvbmZpZy5jaGVja0NhblJldHVybkZvY3VzXG4gICAgICB9LCBkZWFjdGl2YXRlT3B0aW9ucyk7XG4gICAgICBjbGVhclRpbWVvdXQoc3RhdGUuZGVsYXlJbml0aWFsRm9jdXNUaW1lcik7IC8vIG5vb3AgaWYgdW5kZWZpbmVkXG4gICAgICBzdGF0ZS5kZWxheUluaXRpYWxGb2N1c1RpbWVyID0gdW5kZWZpbmVkO1xuICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICBzdGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgdXBkYXRlT2JzZXJ2ZWROb2RlcygpO1xuICAgICAgYWN0aXZlRm9jdXNUcmFwcy5kZWFjdGl2YXRlVHJhcCh0cmFwU3RhY2ssIHRyYXApO1xuICAgICAgdmFyIG9uRGVhY3RpdmF0ZSA9IGdldE9wdGlvbihvcHRpb25zLCAnb25EZWFjdGl2YXRlJyk7XG4gICAgICB2YXIgb25Qb3N0RGVhY3RpdmF0ZSA9IGdldE9wdGlvbihvcHRpb25zLCAnb25Qb3N0RGVhY3RpdmF0ZScpO1xuICAgICAgdmFyIGNoZWNrQ2FuUmV0dXJuRm9jdXMgPSBnZXRPcHRpb24ob3B0aW9ucywgJ2NoZWNrQ2FuUmV0dXJuRm9jdXMnKTtcbiAgICAgIHZhciByZXR1cm5Gb2N1cyA9IGdldE9wdGlvbihvcHRpb25zLCAncmV0dXJuRm9jdXMnLCAncmV0dXJuRm9jdXNPbkRlYWN0aXZhdGUnKTtcbiAgICAgIG9uRGVhY3RpdmF0ZSA9PT0gbnVsbCB8fCBvbkRlYWN0aXZhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uRGVhY3RpdmF0ZSgpO1xuICAgICAgdmFyIGZpbmlzaERlYWN0aXZhdGlvbiA9IGZ1bmN0aW9uIGZpbmlzaERlYWN0aXZhdGlvbigpIHtcbiAgICAgICAgZGVsYXkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChyZXR1cm5Gb2N1cykge1xuICAgICAgICAgICAgdHJ5Rm9jdXMoZ2V0UmV0dXJuRm9jdXNOb2RlKHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvblBvc3REZWFjdGl2YXRlID09PSBudWxsIHx8IG9uUG9zdERlYWN0aXZhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uUG9zdERlYWN0aXZhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgaWYgKHJldHVybkZvY3VzICYmIGNoZWNrQ2FuUmV0dXJuRm9jdXMpIHtcbiAgICAgICAgY2hlY2tDYW5SZXR1cm5Gb2N1cyhnZXRSZXR1cm5Gb2N1c05vZGUoc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKSkudGhlbihmaW5pc2hEZWFjdGl2YXRpb24sIGZpbmlzaERlYWN0aXZhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgZmluaXNoRGVhY3RpdmF0aW9uKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHBhdXNlOiBmdW5jdGlvbiBwYXVzZShwYXVzZU9wdGlvbnMpIHtcbiAgICAgIGlmIChzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvblBhdXNlID0gZ2V0T3B0aW9uKHBhdXNlT3B0aW9ucywgJ29uUGF1c2UnKTtcbiAgICAgIHZhciBvblBvc3RQYXVzZSA9IGdldE9wdGlvbihwYXVzZU9wdGlvbnMsICdvblBvc3RQYXVzZScpO1xuICAgICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgICAgIG9uUGF1c2UgPT09IG51bGwgfHwgb25QYXVzZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25QYXVzZSgpO1xuICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICB1cGRhdGVPYnNlcnZlZE5vZGVzKCk7XG4gICAgICBvblBvc3RQYXVzZSA9PT0gbnVsbCB8fCBvblBvc3RQYXVzZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25Qb3N0UGF1c2UoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgdW5wYXVzZTogZnVuY3Rpb24gdW5wYXVzZSh1bnBhdXNlT3B0aW9ucykge1xuICAgICAgaWYgKCFzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvblVucGF1c2UgPSBnZXRPcHRpb24odW5wYXVzZU9wdGlvbnMsICdvblVucGF1c2UnKTtcbiAgICAgIHZhciBvblBvc3RVbnBhdXNlID0gZ2V0T3B0aW9uKHVucGF1c2VPcHRpb25zLCAnb25Qb3N0VW5wYXVzZScpO1xuICAgICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgICBvblVucGF1c2UgPT09IG51bGwgfHwgb25VbnBhdXNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblVucGF1c2UoKTtcbiAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgIGFkZExpc3RlbmVycygpO1xuICAgICAgdXBkYXRlT2JzZXJ2ZWROb2RlcygpO1xuICAgICAgb25Qb3N0VW5wYXVzZSA9PT0gbnVsbCB8fCBvblBvc3RVbnBhdXNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblBvc3RVbnBhdXNlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHVwZGF0ZUNvbnRhaW5lckVsZW1lbnRzOiBmdW5jdGlvbiB1cGRhdGVDb250YWluZXJFbGVtZW50cyhjb250YWluZXJFbGVtZW50cykge1xuICAgICAgdmFyIGVsZW1lbnRzQXNBcnJheSA9IFtdLmNvbmNhdChjb250YWluZXJFbGVtZW50cykuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgc3RhdGUuY29udGFpbmVycyA9IGVsZW1lbnRzQXNBcnJheS5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvYy5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudDtcbiAgICAgIH0pO1xuICAgICAgaWYgKHN0YXRlLmFjdGl2ZSkge1xuICAgICAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgICB9XG4gICAgICB1cGRhdGVPYnNlcnZlZE5vZGVzKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG5cbiAgLy8gaW5pdGlhbGl6ZSBjb250YWluZXIgZWxlbWVudHNcbiAgdHJhcC51cGRhdGVDb250YWluZXJFbGVtZW50cyhlbGVtZW50cyk7XG4gIHJldHVybiB0cmFwO1xufTtcblxuY29uc3QgdHJhcFN0YWNrID0gW107XG4vKipcbiAqIEhlbHBlciB0byBzZXQgdXAgdGhlIEZvY3VzVHJhcCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtGb2N1c1RyYXBDb21wb25lbnR9IGNvbXBvbmVudCBUaGUgRm9jdXNUcmFwIGNvbXBvbmVudC5cbiAqIEBwYXJhbSBvcHRpb25zXG4gKi9cbmZ1bmN0aW9uIGNvbm5lY3RGb2N1c1RyYXAoY29tcG9uZW50LCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgZWwgfSA9IGNvbXBvbmVudDtcbiAgY29uc3QgZm9jdXNUcmFwTm9kZSA9IG9wdGlvbnM/LmZvY3VzVHJhcEVsIHx8IGVsO1xuICBpZiAoIWZvY3VzVHJhcE5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZm9jdXNUcmFwT3B0aW9ucyA9IHtcbiAgICBjbGlja091dHNpZGVEZWFjdGl2YXRlczogdHJ1ZSxcbiAgICBlc2NhcGVEZWFjdGl2YXRlczogZmFsc2UsXG4gICAgZmFsbGJhY2tGb2N1czogZm9jdXNUcmFwTm9kZSxcbiAgICBzZXRSZXR1cm5Gb2N1czogKGVsKSA9PiB7XG4gICAgICBmb2N1c0VsZW1lbnQoZWwpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgLi4ub3B0aW9ucz8uZm9jdXNUcmFwT3B0aW9ucyxcbiAgICAvLyB0aGUgZm9sbG93aW5nIG9wdGlvbnMgYXJlIG5vdCBvdmVycmlkZWFibGVcbiAgICBkb2N1bWVudDogZWwub3duZXJEb2N1bWVudCxcbiAgICB0YWJiYWJsZU9wdGlvbnMsXG4gICAgdHJhcFN0YWNrXG4gIH07XG4gIGNvbXBvbmVudC5mb2N1c1RyYXAgPSBjcmVhdGVGb2N1c1RyYXAoZm9jdXNUcmFwTm9kZSwgZm9jdXNUcmFwT3B0aW9ucyk7XG59XG4vKipcbiAqIEhlbHBlciB0byBhY3RpdmF0ZSB0aGUgRm9jdXNUcmFwIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0ZvY3VzVHJhcENvbXBvbmVudH0gY29tcG9uZW50IFRoZSBGb2N1c1RyYXAgY29tcG9uZW50LlxuICogQHBhcmFtIFtvcHRpb25zXSBUaGUgRm9jdXNUcmFwIGFjdGl2YXRlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGFjdGl2YXRlRm9jdXNUcmFwKGNvbXBvbmVudCwgb3B0aW9ucykge1xuICBpZiAoIWNvbXBvbmVudC5mb2N1c1RyYXBEaXNhYmxlZCkge1xuICAgIGNvbXBvbmVudC5mb2N1c1RyYXA/LmFjdGl2YXRlKG9wdGlvbnMpO1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byBkZWFjdGl2YXRlIHRoZSBGb2N1c1RyYXAgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7Rm9jdXNUcmFwQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIEZvY3VzVHJhcCBjb21wb25lbnQuXG4gKiBAcGFyYW0gW29wdGlvbnNdIFRoZSBGb2N1c1RyYXAgZGVhY3RpdmF0ZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBkZWFjdGl2YXRlRm9jdXNUcmFwKGNvbXBvbmVudCwgb3B0aW9ucykge1xuICBjb21wb25lbnQuZm9jdXNUcmFwPy5kZWFjdGl2YXRlKG9wdGlvbnMpO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gdXBkYXRlIHRoZSBlbGVtZW50KHMpIHRoYXQgYXJlIHVzZWQgd2l0aGluIHRoZSBGb2N1c1RyYXAgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7Rm9jdXNUcmFwQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIEZvY3VzVHJhcCBjb21wb25lbnQuXG4gKiBAZXhhbXBsZVxuICogY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FsY2l0ZS1tb2RhbFwiKTtcbiAqIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbGNpdGUtaW5wdXRcIik7XG4gKiBjb250ZW50LmFwcGVuZENoaWxkKGlucHV0KTtcbiAqIGF3YWl0IGlucHV0LmNvbXBvbmVudE9uUmVhZHkoKTtcbiAqIGF3YWl0IG1vZGFsLnVwZGF0ZUZvY3VzVHJhcEVsZW1lbnRzKCk7XG4gKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gaW5wdXQuc2V0Rm9jdXMoKSk7XG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUZvY3VzVHJhcEVsZW1lbnRzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZm9jdXNUcmFwPy51cGRhdGVDb250YWluZXJFbGVtZW50cyhjb21wb25lbnQuZWwpO1xufVxuXG5leHBvcnQgeyBhY3RpdmF0ZUZvY3VzVHJhcCBhcyBhLCBjb25uZWN0Rm9jdXNUcmFwIGFzIGMsIGRlYWN0aXZhdGVGb2N1c1RyYXAgYXMgZCwgdXBkYXRlRm9jdXNUcmFwRWxlbWVudHMgYXMgdSB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGcgYXMgZ2V0QXNzZXRQYXRoIH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5pbXBvcnQgeyBnIGFzIGdldFN1cHBvcnRlZExvY2FsZSB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcblxuY29uc3QgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlID0ge307XG5hc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlQnVuZGxlKGxhbmcsIGNvbXBvbmVudCkge1xuICBjb25zdCBrZXkgPSBgJHtjb21wb25lbnR9XyR7bGFuZ31gO1xuICBpZiAoY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0pIHtcbiAgICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG4gIH1cbiAgY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV0gPSBmZXRjaChnZXRBc3NldFBhdGgoYC4vYXNzZXRzLyR7Y29tcG9uZW50fS90OW4vbWVzc2FnZXNfJHtsYW5nfS5qc29uYCkpXG4gICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICBpZiAoIXJlc3Aub2spIHtcbiAgICAgIHRocm93TWVzc2FnZUZldGNoRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICB9KVxuICAgIC5jYXRjaCgoKSA9PiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkpO1xuICByZXR1cm4gY29tcG9uZW50TGFuZ1RvTWVzc2FnZUJ1bmRsZUNhY2hlW2tleV07XG59XG5mdW5jdGlvbiB0aHJvd01lc3NhZ2VGZXRjaEVycm9yKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJjb3VsZCBub3QgZmV0Y2ggY29tcG9uZW50IG1lc3NhZ2UgYnVuZGxlXCIpO1xufVxuZnVuY3Rpb24gbWVyZ2VNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm1lc3NhZ2VzID0ge1xuICAgIC4uLmNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMsXG4gICAgLi4uY29tcG9uZW50Lm1lc3NhZ2VPdmVycmlkZXNcbiAgfTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgdGhlIG1lc3NhZ2VzIHVzZWQgYnkgdGhlIGNvbXBvbmVudC4gSXQgc2hvdWxkIGJlIGF3YWl0ZWQgaW4gdGhlIGBjb21wb25lbnRXaWxsTG9hZGAgbGlmZWN5Y2xlIGhvb2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRVcE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQuZGVmYXVsdE1lc3NhZ2VzID0gYXdhaXQgZmV0Y2hNZXNzYWdlcyhjb21wb25lbnQsIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUpO1xuICBtZXJnZU1lc3NhZ2VzKGNvbXBvbmVudCk7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZykge1xuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IHRhZy5yZXBsYWNlKFwiY2FsY2l0ZS1cIiwgXCJcIik7XG4gIHJldHVybiBnZXRNZXNzYWdlQnVuZGxlKGdldFN1cHBvcnRlZExvY2FsZShsYW5nLCBcInQ5blwiKSwgY29tcG9uZW50TmFtZSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbGl0eSBtdXN0IGJlIHNldCB1cCBmb3IgdGhlIGNvbXBvbmVudCB0byB1cGRhdGUgaXRzIGRlZmF1bHQgbWVzc2FnZSBidW5kbGUgaWYgdGhlIGxvY2FsZSBjaGFuZ2VzLlxuICpcbiAqIEl0IGNhbiBiZSBzZXQgdXAgaW4gKiplaXRoZXIqKiBvZiB0aGUgZm9sbG93aW5nIHdheXM6XG4gKlxuICogMS4gY2FsbGVkIGZyb20gYExvY2FsaXplZENvbXBvbmVudGAncyBgb25Mb2NhbGVDaGFuZ2VgIG1ldGhvZCBvclxuICogMi4gY2FsbGVkIGZyb20gYSB3YXRjaGVyIGNvbmZpZ3VyZWQgdG8gd2F0Y2ggYExvY2FsaXplZENvbXBvbmVudGAncyBgZWZmZWN0aXZlTG9jYWxlYCBwcm9wXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIGxhbmdcbiAqL1xuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWVzc2FnZXMoY29tcG9uZW50LCBsYW5nKSB7XG4gIGNvbXBvbmVudC5kZWZhdWx0TWVzc2FnZXMgPSBhd2FpdCBmZXRjaE1lc3NhZ2VzKGNvbXBvbmVudCwgbGFuZyk7XG4gIG1lcmdlTWVzc2FnZXMoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHNldHMgdXAgaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogKipOb3RlKio6IHRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgYExvY2FsaXplZENvbXBvbmVudGAncyBgY29ubmVjdExvY2FsaXplZGAgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdE1lc3NhZ2VzKGNvbXBvbmVudCkge1xuICBjb21wb25lbnQub25NZXNzYWdlc0NoYW5nZSA9IGRlZmF1bHRPbk1lc3NhZ2VzQ2hhbmdlO1xufVxuLyoqXG4gKiBUaGlzIHV0aWxpdHkgdGVhcnMgZG93biBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFja2BcbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RNZXNzYWdlcyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50Lm9uTWVzc2FnZXNDaGFuZ2UgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0T25NZXNzYWdlc0NoYW5nZSgpIHtcbiAgbWVyZ2VNZXNzYWdlcyh0aGlzKTtcbn1cblxuZXhwb3J0IHsgY29ubmVjdE1lc3NhZ2VzIGFzIGMsIGRpc2Nvbm5lY3RNZXNzYWdlcyBhcyBkLCBzZXRVcE1lc3NhZ2VzIGFzIHMsIHVwZGF0ZU1lc3NhZ2VzIGFzIHUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==