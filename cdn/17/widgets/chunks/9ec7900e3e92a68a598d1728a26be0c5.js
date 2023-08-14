"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_focusTrapComponent-07adcb3f_js"],{

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




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvOWVjNzkwMGUzZTkyYTY4YTU5OGQxNzI4YTI2YmUwYzUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzhJOztBQUU5STtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBLGlCQUFpQjtBQUNqQixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0EsMkZBQTJGLGFBQWE7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsa0JBQWtCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixhQUFhLE9BQU87QUFDcEIsZUFBZSxRQUFRO0FBQ3ZCLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlLDhDQUE4QztBQUM3RCxrREFBa0Q7QUFDbEQsdURBQXVEO0FBQ3ZEO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtR0FBbUcsZUFBZTtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtREFBVztBQUMxQztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1EQUFROztBQUVsQyx3RUFBd0U7QUFDeEU7QUFDQSwyQkFBMkIsbURBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7QUFDaEMsbUJBQW1CLFNBQVMsOENBQThDO0FBQzFFO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBVTtBQUMvQixhQUFhO0FBQ2I7QUFDQTtBQUNBLG1CQUFtQixtREFBVTtBQUM3QixXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNkVBQTZFLG1EQUFXLHFDQUFxQyxtREFBVTtBQUN2STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEVBQTRFLG1EQUFXLHFDQUFxQyxtREFBVTtBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1Asa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFLO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBWTtBQUNsQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpSCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2ZvY3VzVHJhcENvbXBvbmVudC0wN2FkY2IzZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgayBhcyB0YWJiYWJsZSwgbCBhcyBmb2N1c2FibGUsIG0gYXMgaXNUYWJiYWJsZSwgbiBhcyBpc0ZvY3VzYWJsZSwgZiBhcyBmb2N1c0VsZW1lbnQsIG8gYXMgdGFiYmFibGVPcHRpb25zIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuXG4vKiFcbiogZm9jdXMtdHJhcCA3LjQuM1xuKiBAbGljZW5zZSBNSVQsIGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL2ZvY3VzLXRyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5cbnZhciBhY3RpdmVGb2N1c1RyYXBzID0ge1xuICBhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uIGFjdGl2YXRlVHJhcCh0cmFwU3RhY2ssIHRyYXApIHtcbiAgICBpZiAodHJhcFN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBhY3RpdmVUcmFwID0gdHJhcFN0YWNrW3RyYXBTdGFjay5sZW5ndGggLSAxXTtcbiAgICAgIGlmIChhY3RpdmVUcmFwICE9PSB0cmFwKSB7XG4gICAgICAgIGFjdGl2ZVRyYXAucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHRyYXBJbmRleCA9IHRyYXBTdGFjay5pbmRleE9mKHRyYXApO1xuICAgIGlmICh0cmFwSW5kZXggPT09IC0xKSB7XG4gICAgICB0cmFwU3RhY2sucHVzaCh0cmFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbW92ZSB0aGlzIGV4aXN0aW5nIHRyYXAgdG8gdGhlIGZyb250IG9mIHRoZSBxdWV1ZVxuICAgICAgdHJhcFN0YWNrLnNwbGljZSh0cmFwSW5kZXgsIDEpO1xuICAgICAgdHJhcFN0YWNrLnB1c2godHJhcCk7XG4gICAgfVxuICB9LFxuICBkZWFjdGl2YXRlVHJhcDogZnVuY3Rpb24gZGVhY3RpdmF0ZVRyYXAodHJhcFN0YWNrLCB0cmFwKSB7XG4gICAgdmFyIHRyYXBJbmRleCA9IHRyYXBTdGFjay5pbmRleE9mKHRyYXApO1xuICAgIGlmICh0cmFwSW5kZXggIT09IC0xKSB7XG4gICAgICB0cmFwU3RhY2suc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgfVxuICAgIGlmICh0cmFwU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgdHJhcFN0YWNrW3RyYXBTdGFjay5sZW5ndGggLSAxXS51bnBhdXNlKCk7XG4gICAgfVxuICB9XG59O1xudmFyIGlzU2VsZWN0YWJsZUlucHV0ID0gZnVuY3Rpb24gaXNTZWxlY3RhYmxlSW5wdXQobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lICYmIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnICYmIHR5cGVvZiBub2RlLnNlbGVjdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG52YXIgaXNFc2NhcGVFdmVudCA9IGZ1bmN0aW9uIGlzRXNjYXBlRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRXNjJyB8fCBlLmtleUNvZGUgPT09IDI3O1xufTtcbnZhciBpc1RhYkV2ZW50ID0gZnVuY3Rpb24gaXNUYWJFdmVudChlKSB7XG4gIHJldHVybiBlLmtleSA9PT0gJ1RhYicgfHwgZS5rZXlDb2RlID09PSA5O1xufTtcblxuLy8gY2hlY2tzIGZvciBUQUIgYnkgZGVmYXVsdFxudmFyIGlzS2V5Rm9yd2FyZCA9IGZ1bmN0aW9uIGlzS2V5Rm9yd2FyZChlKSB7XG4gIHJldHVybiBpc1RhYkV2ZW50KGUpICYmICFlLnNoaWZ0S2V5O1xufTtcblxuLy8gY2hlY2tzIGZvciBTSElGVCtUQUIgYnkgZGVmYXVsdFxudmFyIGlzS2V5QmFja3dhcmQgPSBmdW5jdGlvbiBpc0tleUJhY2t3YXJkKGUpIHtcbiAgcmV0dXJuIGlzVGFiRXZlbnQoZSkgJiYgZS5zaGlmdEtleTtcbn07XG52YXIgZGVsYXkgPSBmdW5jdGlvbiBkZWxheShmbikge1xuICByZXR1cm4gc2V0VGltZW91dChmbiwgMCk7XG59O1xuXG4vLyBBcnJheS5maW5kL2ZpbmRJbmRleCgpIGFyZSBub3Qgc3VwcG9ydGVkIG9uIElFOyB0aGlzIHJlcGxpY2F0ZXMgZW5vdWdoXG4vLyAgb2YgQXJyYXkuZmluZEluZGV4KCkgZm9yIG91ciBuZWVkc1xudmFyIGZpbmRJbmRleCA9IGZ1bmN0aW9uIGZpbmRJbmRleChhcnIsIGZuKSB7XG4gIHZhciBpZHggPSAtMTtcbiAgYXJyLmV2ZXJ5KGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgIGlmIChmbih2YWx1ZSkpIHtcbiAgICAgIGlkeCA9IGk7XG4gICAgICByZXR1cm4gZmFsc2U7IC8vIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7IC8vIG5leHRcbiAgfSk7XG5cbiAgcmV0dXJuIGlkeDtcbn07XG5cbi8qKlxuICogR2V0IGFuIG9wdGlvbidzIHZhbHVlIHdoZW4gaXQgY291bGQgYmUgYSBwbGFpbiB2YWx1ZSwgb3IgYSBoYW5kbGVyIHRoYXQgcHJvdmlkZXNcbiAqICB0aGUgdmFsdWUuXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9wdGlvbidzIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHsuLi4qfSBbcGFyYW1zXSBBbnkgcGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSBoYW5kbGVyLCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7Kn0gVGhlIGB2YWx1ZWAsIG9yIHRoZSBoYW5kbGVyJ3MgcmV0dXJuZWQgdmFsdWUuXG4gKi9cbnZhciB2YWx1ZU9ySGFuZGxlciA9IGZ1bmN0aW9uIHZhbHVlT3JIYW5kbGVyKHZhbHVlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBhcmFtc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLmFwcGx5KHZvaWQgMCwgcGFyYW1zKSA6IHZhbHVlO1xufTtcbnZhciBnZXRBY3R1YWxUYXJnZXQgPSBmdW5jdGlvbiBnZXRBY3R1YWxUYXJnZXQoZXZlbnQpIHtcbiAgLy8gTk9URTogSWYgdGhlIHRyYXAgaXMgX2luc2lkZV8gYSBzaGFkb3cgRE9NLCBldmVudC50YXJnZXQgd2lsbCBhbHdheXMgYmUgdGhlXG4gIC8vICBzaGFkb3cgaG9zdC4gSG93ZXZlciwgZXZlbnQudGFyZ2V0LmNvbXBvc2VkUGF0aCgpIHdpbGwgYmUgYW4gYXJyYXkgb2ZcbiAgLy8gIG5vZGVzIFwiY2xpY2tlZFwiIGZyb20gaW5uZXItbW9zdCAodGhlIGFjdHVhbCBlbGVtZW50IGluc2lkZSB0aGUgc2hhZG93KSB0b1xuICAvLyAgb3V0ZXItbW9zdCAodGhlIGhvc3QgSFRNTCBkb2N1bWVudCkuIElmIHdlIGhhdmUgYWNjZXNzIHRvIGNvbXBvc2VkUGF0aCgpLFxuICAvLyAgdGhlbiB1c2UgaXRzIGZpcnN0IGVsZW1lbnQ7IG90aGVyd2lzZSwgZmFsbCBiYWNrIHRvIGV2ZW50LnRhcmdldCAoYW5kXG4gIC8vICB0aGlzIG9ubHkgd29ya3MgZm9yIGFuIF9vcGVuXyBzaGFkb3cgRE9NOyBvdGhlcndpc2UsXG4gIC8vICBjb21wb3NlZFBhdGgoKVswXSA9PT0gZXZlbnQudGFyZ2V0IGFsd2F5cykuXG4gIHJldHVybiBldmVudC50YXJnZXQuc2hhZG93Um9vdCAmJiB0eXBlb2YgZXZlbnQuY29tcG9zZWRQYXRoID09PSAnZnVuY3Rpb24nID8gZXZlbnQuY29tcG9zZWRQYXRoKClbMF0gOiBldmVudC50YXJnZXQ7XG59O1xuXG4vLyBOT1RFOiB0aGlzIG11c3QgYmUgX291dHNpZGVfIGBjcmVhdGVGb2N1c1RyYXAoKWAgdG8gbWFrZSBzdXJlIGFsbCB0cmFwcyBpbiB0aGlzXG4vLyAgY3VycmVudCBpbnN0YW5jZSB1c2UgdGhlIHNhbWUgc3RhY2sgaWYgYHVzZXJPcHRpb25zLnRyYXBTdGFja2AgaXNuJ3Qgc3BlY2lmaWVkXG52YXIgaW50ZXJuYWxUcmFwU3RhY2sgPSBbXTtcbnZhciBjcmVhdGVGb2N1c1RyYXAgPSBmdW5jdGlvbiBjcmVhdGVGb2N1c1RyYXAoZWxlbWVudHMsIHVzZXJPcHRpb25zKSB7XG4gIC8vIFNTUjogYSBsaXZlIHRyYXAgc2hvdWxkbid0IGJlIGNyZWF0ZWQgaW4gdGhpcyB0eXBlIG9mIGVudmlyb25tZW50IHNvIHRoaXNcbiAgLy8gIHNob3VsZCBiZSBzYWZlIGNvZGUgdG8gZXhlY3V0ZSBpZiB0aGUgYGRvY3VtZW50YCBvcHRpb24gaXNuJ3Qgc3BlY2lmaWVkXG4gIHZhciBkb2MgPSAodXNlck9wdGlvbnMgPT09IG51bGwgfHwgdXNlck9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXJPcHRpb25zLmRvY3VtZW50KSB8fCBkb2N1bWVudDtcbiAgdmFyIHRyYXBTdGFjayA9ICh1c2VyT3B0aW9ucyA9PT0gbnVsbCB8fCB1c2VyT3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXNlck9wdGlvbnMudHJhcFN0YWNrKSB8fCBpbnRlcm5hbFRyYXBTdGFjaztcbiAgdmFyIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogdHJ1ZSxcbiAgICBlc2NhcGVEZWFjdGl2YXRlczogdHJ1ZSxcbiAgICBkZWxheUluaXRpYWxGb2N1czogdHJ1ZSxcbiAgICBpc0tleUZvcndhcmQ6IGlzS2V5Rm9yd2FyZCxcbiAgICBpc0tleUJhY2t3YXJkOiBpc0tleUJhY2t3YXJkXG4gIH0sIHVzZXJPcHRpb25zKTtcbiAgdmFyIHN0YXRlID0ge1xuICAgIC8vIGNvbnRhaW5lcnMgZ2l2ZW4gdG8gY3JlYXRlRm9jdXNUcmFwKClcbiAgICAvLyBAdHlwZSB7QXJyYXk8SFRNTEVsZW1lbnQ+fVxuICAgIGNvbnRhaW5lcnM6IFtdLFxuICAgIC8vIGxpc3Qgb2Ygb2JqZWN0cyBpZGVudGlmeWluZyB0YWJiYWJsZSBub2RlcyBpbiBgY29udGFpbmVyc2AgaW4gdGhlIHRyYXBcbiAgICAvLyBOT1RFOiBpdCdzIHBvc3NpYmxlIHRoYXQgYSBncm91cCBoYXMgbm8gdGFiYmFibGUgbm9kZXMgaWYgbm9kZXMgZ2V0IHJlbW92ZWQgd2hpbGUgdGhlIHRyYXBcbiAgICAvLyAgaXMgYWN0aXZlLCBidXQgdGhlIHRyYXAgc2hvdWxkIG5ldmVyIGdldCB0byBhIHN0YXRlIHdoZXJlIHRoZXJlIGlzbid0IGF0IGxlYXN0IG9uZSBncm91cFxuICAgIC8vICB3aXRoIGF0IGxlYXN0IG9uZSB0YWJiYWJsZSBub2RlIGluIGl0ICh0aGF0IHdvdWxkIGxlYWQgdG8gYW4gZXJyb3IgY29uZGl0aW9uIHRoYXQgd291bGRcbiAgICAvLyAgcmVzdWx0IGluIGFuIGVycm9yIGJlaW5nIHRocm93bilcbiAgICAvLyBAdHlwZSB7QXJyYXk8e1xuICAgIC8vICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICAvLyAgIHRhYmJhYmxlTm9kZXM6IEFycmF5PEhUTUxFbGVtZW50PiwgLy8gZW1wdHkgaWYgbm9uZVxuICAgIC8vICAgZm9jdXNhYmxlTm9kZXM6IEFycmF5PEhUTUxFbGVtZW50PiwgLy8gZW1wdHkgaWYgbm9uZVxuICAgIC8vICAgZmlyc3RUYWJiYWJsZU5vZGU6IEhUTUxFbGVtZW50fG51bGwsXG4gICAgLy8gICBsYXN0VGFiYmFibGVOb2RlOiBIVE1MRWxlbWVudHxudWxsLFxuICAgIC8vICAgbmV4dFRhYmJhYmxlTm9kZTogKG5vZGU6IEhUTUxFbGVtZW50LCBmb3J3YXJkOiBib29sZWFuKSA9PiBIVE1MRWxlbWVudHx1bmRlZmluZWRcbiAgICAvLyB9Pn1cbiAgICBjb250YWluZXJHcm91cHM6IFtdLFxuICAgIC8vIHNhbWUgb3JkZXIvbGVuZ3RoIGFzIGBjb250YWluZXJzYCBsaXN0XG5cbiAgICAvLyByZWZlcmVuY2VzIHRvIG9iamVjdHMgaW4gYGNvbnRhaW5lckdyb3Vwc2AsIGJ1dCBvbmx5IHRob3NlIHRoYXQgYWN0dWFsbHkgaGF2ZVxuICAgIC8vICB0YWJiYWJsZSBub2RlcyBpbiB0aGVtXG4gICAgLy8gTk9URTogc2FtZSBvcmRlciBhcyBgY29udGFpbmVyc2AgYW5kIGBjb250YWluZXJHcm91cHNgLCBidXQgX19ub3QgbmVjZXNzYXJpbHlfX1xuICAgIC8vICB0aGUgc2FtZSBsZW5ndGhcbiAgICB0YWJiYWJsZUdyb3VwczogW10sXG4gICAgbm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uOiBudWxsLFxuICAgIG1vc3RSZWNlbnRseUZvY3VzZWROb2RlOiBudWxsLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgcGF1c2VkOiBmYWxzZSxcbiAgICAvLyB0aW1lciBJRCBmb3Igd2hlbiBkZWxheUluaXRpYWxGb2N1cyBpcyB0cnVlIGFuZCBpbml0aWFsIGZvY3VzIGluIHRoaXMgdHJhcFxuICAgIC8vICBoYXMgYmVlbiBkZWxheWVkIGR1cmluZyBhY3RpdmF0aW9uXG4gICAgZGVsYXlJbml0aWFsRm9jdXNUaW1lcjogdW5kZWZpbmVkXG4gIH07XG4gIHZhciB0cmFwOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1jb25zdCAtLSBzb21lIHByaXZhdGUgZnVuY3Rpb25zIHJlZmVyZW5jZSBpdCwgYW5kIGl0cyBtZXRob2RzIHJlZmVyZW5jZSBwcml2YXRlIGZ1bmN0aW9ucywgc28gd2UgbXVzdCBkZWNsYXJlIGhlcmUgYW5kIGRlZmluZSBsYXRlclxuXG4gIC8qKlxuICAgKiBHZXRzIGEgY29uZmlndXJhdGlvbiBvcHRpb24gdmFsdWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fHVuZGVmaW5lZH0gY29uZmlnT3ZlcnJpZGVPcHRpb25zIElmIHRydWUsIGFuZCBvcHRpb24gaXMgZGVmaW5lZCBpbiB0aGlzIHNldCxcbiAgICogIHZhbHVlIHdpbGwgYmUgdGFrZW4gZnJvbSB0aGlzIG9iamVjdC4gT3RoZXJ3aXNlLCB2YWx1ZSB3aWxsIGJlIHRha2VuIGZyb20gYmFzZSBjb25maWd1cmF0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZSBOYW1lIG9mIHRoZSBvcHRpb24gd2hvc2UgdmFsdWUgaXMgc291Z2h0LlxuICAgKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IFtjb25maWdPcHRpb25OYW1lXSBOYW1lIG9mIG9wdGlvbiB0byB1c2UgX19pbnN0ZWFkIG9mX18gYG9wdGlvbk5hbWVgXG4gICAqICBJSUYgYGNvbmZpZ092ZXJyaWRlT3B0aW9uc2AgaXMgbm90IGRlZmluZWQuIE90aGVyd2lzZSwgYG9wdGlvbk5hbWVgIGlzIHVzZWQuXG4gICAqL1xuICB2YXIgZ2V0T3B0aW9uID0gZnVuY3Rpb24gZ2V0T3B0aW9uKGNvbmZpZ092ZXJyaWRlT3B0aW9ucywgb3B0aW9uTmFtZSwgY29uZmlnT3B0aW9uTmFtZSkge1xuICAgIHJldHVybiBjb25maWdPdmVycmlkZU9wdGlvbnMgJiYgY29uZmlnT3ZlcnJpZGVPcHRpb25zW29wdGlvbk5hbWVdICE9PSB1bmRlZmluZWQgPyBjb25maWdPdmVycmlkZU9wdGlvbnNbb3B0aW9uTmFtZV0gOiBjb25maWdbY29uZmlnT3B0aW9uTmFtZSB8fCBvcHRpb25OYW1lXTtcbiAgfTtcblxuICAvKipcbiAgICogRmluZHMgdGhlIGluZGV4IG9mIHRoZSBjb250YWluZXIgdGhhdCBjb250YWlucyB0aGUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge0V2ZW50fSBbZXZlbnRdXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IEluZGV4IG9mIHRoZSBjb250YWluZXIgaW4gZWl0aGVyIGBzdGF0ZS5jb250YWluZXJzYCBvclxuICAgKiAgYHN0YXRlLmNvbnRhaW5lckdyb3Vwc2AgKHRoZSBvcmRlci9sZW5ndGggb2YgdGhlc2UgbGlzdHMgYXJlIHRoZSBzYW1lKTsgLTFcbiAgICogIGlmIHRoZSBlbGVtZW50IGlzbid0IGZvdW5kLlxuICAgKi9cbiAgdmFyIGZpbmRDb250YWluZXJJbmRleCA9IGZ1bmN0aW9uIGZpbmRDb250YWluZXJJbmRleChlbGVtZW50LCBldmVudCkge1xuICAgIHZhciBjb21wb3NlZFBhdGggPSB0eXBlb2YgKGV2ZW50ID09PSBudWxsIHx8IGV2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudC5jb21wb3NlZFBhdGgpID09PSAnZnVuY3Rpb24nID8gZXZlbnQuY29tcG9zZWRQYXRoKCkgOiB1bmRlZmluZWQ7XG4gICAgLy8gTk9URTogc2VhcmNoIGBjb250YWluZXJHcm91cHNgIGJlY2F1c2UgaXQncyBwb3NzaWJsZSBhIGdyb3VwIGNvbnRhaW5zIG5vIHRhYmJhYmxlXG4gICAgLy8gIG5vZGVzLCBidXQgc3RpbGwgY29udGFpbnMgZm9jdXNhYmxlIG5vZGVzIChlLmcuIGlmIHRoZXkgYWxsIGhhdmUgYHRhYmluZGV4PS0xYClcbiAgICAvLyAgYW5kIHdlIHN0aWxsIG5lZWQgdG8gZmluZCB0aGUgZWxlbWVudCBpbiB0aGVyZVxuICAgIHJldHVybiBzdGF0ZS5jb250YWluZXJHcm91cHMuZmluZEluZGV4KGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gX3JlZi5jb250YWluZXIsXG4gICAgICAgIHRhYmJhYmxlTm9kZXMgPSBfcmVmLnRhYmJhYmxlTm9kZXM7XG4gICAgICByZXR1cm4gY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpIHx8ICggLy8gZmFsbCBiYWNrIHRvIGV4cGxpY2l0IHRhYmJhYmxlIHNlYXJjaCB3aGljaCB3aWxsIHRha2UgaW50byBjb25zaWRlcmF0aW9uIGFueVxuICAgICAgLy8gIHdlYiBjb21wb25lbnRzIGlmIHRoZSBgdGFiYmFibGVPcHRpb25zLmdldFNoYWRvd1Jvb3RgIG9wdGlvbiB3YXMgdXNlZCBmb3JcbiAgICAgIC8vICB0aGUgdHJhcCwgZW5hYmxpbmcgc2hhZG93IERPTSBzdXBwb3J0IGluIHRhYmJhYmxlIChgTm9kZS5jb250YWlucygpYCBkb2Vzbid0XG4gICAgICAvLyAgbG9vayBpbnNpZGUgd2ViIGNvbXBvbmVudHMgZXZlbiBpZiBvcGVuKVxuICAgICAgY29tcG9zZWRQYXRoID09PSBudWxsIHx8IGNvbXBvc2VkUGF0aCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRhaW5lcikpIHx8IHRhYmJhYmxlTm9kZXMuZmluZChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZSA9PT0gZWxlbWVudDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBub2RlIGZvciB0aGUgZ2l2ZW4gb3B0aW9uLCB3aGljaCBpcyBleHBlY3RlZCB0byBiZSBhbiBvcHRpb24gdGhhdFxuICAgKiAgY2FuIGJlIGVpdGhlciBhIERPTSBub2RlLCBhIHN0cmluZyB0aGF0IGlzIGEgc2VsZWN0b3IgdG8gZ2V0IGEgbm9kZSwgYGZhbHNlYFxuICAgKiAgKGlmIGEgbm9kZSBpcyBleHBsaWNpdGx5IE5PVCBnaXZlbiksIG9yIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFueSBvZiB0aGVzZVxuICAgKiAgdmFsdWVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZVxuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkIHwgZmFsc2UgfCBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnR9IFJldHVybnNcbiAgICogIGB1bmRlZmluZWRgIGlmIHRoZSBvcHRpb24gaXMgbm90IHNwZWNpZmllZDsgYGZhbHNlYCBpZiB0aGUgb3B0aW9uXG4gICAqICByZXNvbHZlZCB0byBgZmFsc2VgIChub2RlIGV4cGxpY2l0bHkgbm90IGdpdmVuKTsgb3RoZXJ3aXNlLCB0aGUgcmVzb2x2ZWRcbiAgICogIERPTSBub2RlLlxuICAgKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIG9wdGlvbiBpcyBzZXQsIG5vdCBgZmFsc2VgLCBhbmQgaXMgbm90LCBvciBkb2VzIG5vdFxuICAgKiAgcmVzb2x2ZSB0byBhIG5vZGUuXG4gICAqL1xuICB2YXIgZ2V0Tm9kZUZvck9wdGlvbiA9IGZ1bmN0aW9uIGdldE5vZGVGb3JPcHRpb24ob3B0aW9uTmFtZSkge1xuICAgIHZhciBvcHRpb25WYWx1ZSA9IGNvbmZpZ1tvcHRpb25OYW1lXTtcbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIHBhcmFtc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cbiAgICAgIG9wdGlvblZhbHVlID0gb3B0aW9uVmFsdWUuYXBwbHkodm9pZCAwLCBwYXJhbXMpO1xuICAgIH1cbiAgICBpZiAob3B0aW9uVmFsdWUgPT09IHRydWUpIHtcbiAgICAgIG9wdGlvblZhbHVlID0gdW5kZWZpbmVkOyAvLyB1c2UgZGVmYXVsdCB2YWx1ZVxuICAgIH1cblxuICAgIGlmICghb3B0aW9uVmFsdWUpIHtcbiAgICAgIGlmIChvcHRpb25WYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvblZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uVmFsdWU7XG4gICAgICB9XG4gICAgICAvLyBlbHNlLCBlbXB0eSBzdHJpbmcgKGludmFsaWQpLCBudWxsIChpbnZhbGlkKSwgMCAoaW52YWxpZClcblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYFwiLmNvbmNhdChvcHRpb25OYW1lLCBcImAgd2FzIHNwZWNpZmllZCBidXQgd2FzIG5vdCBhIG5vZGUsIG9yIGRpZCBub3QgcmV0dXJuIGEgbm9kZVwiKSk7XG4gICAgfVxuICAgIHZhciBub2RlID0gb3B0aW9uVmFsdWU7IC8vIGNvdWxkIGJlIEhUTUxFbGVtZW50LCBTVkdFbGVtZW50LCBvciBub24tZW1wdHkgc3RyaW5nIGF0IHRoaXMgcG9pbnRcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBub2RlID0gZG9jLnF1ZXJ5U2VsZWN0b3Iob3B0aW9uVmFsdWUpOyAvLyByZXNvbHZlIHRvIG5vZGUsIG9yIG51bGwgaWYgZmFpbHNcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgXCIuY29uY2F0KG9wdGlvbk5hbWUsIFwiYCBhcyBzZWxlY3RvciByZWZlcnMgdG8gbm8ga25vd24gbm9kZVwiKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuICB2YXIgZ2V0SW5pdGlhbEZvY3VzTm9kZSA9IGZ1bmN0aW9uIGdldEluaXRpYWxGb2N1c05vZGUoKSB7XG4gICAgdmFyIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKCdpbml0aWFsRm9jdXMnKTtcblxuICAgIC8vIGZhbHNlIGV4cGxpY2l0bHkgaW5kaWNhdGVzIHdlIHdhbnQgbm8gaW5pdGlhbEZvY3VzIGF0IGFsbFxuICAgIGlmIChub2RlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkIHx8ICFpc0ZvY3VzYWJsZShub2RlLCBjb25maWcudGFiYmFibGVPcHRpb25zKSkge1xuICAgICAgLy8gb3B0aW9uIG5vdCBzcGVjaWZpZWQgbm9yIGZvY3VzYWJsZTogdXNlIGZhbGxiYWNrIG9wdGlvbnNcbiAgICAgIGlmIChmaW5kQ29udGFpbmVySW5kZXgoZG9jLmFjdGl2ZUVsZW1lbnQpID49IDApIHtcbiAgICAgICAgbm9kZSA9IGRvYy5hY3RpdmVFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGZpcnN0VGFiYmFibGVHcm91cCA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzWzBdO1xuICAgICAgICB2YXIgZmlyc3RUYWJiYWJsZU5vZGUgPSBmaXJzdFRhYmJhYmxlR3JvdXAgJiYgZmlyc3RUYWJiYWJsZUdyb3VwLmZpcnN0VGFiYmFibGVOb2RlO1xuXG4gICAgICAgIC8vIE5PVEU6IGBmYWxsYmFja0ZvY3VzYCBvcHRpb24gZnVuY3Rpb24gY2Fubm90IHJldHVybiBgZmFsc2VgIChub3Qgc3VwcG9ydGVkKVxuICAgICAgICBub2RlID0gZmlyc3RUYWJiYWJsZU5vZGUgfHwgZ2V0Tm9kZUZvck9wdGlvbignZmFsbGJhY2tGb2N1cycpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciBmb2N1cy10cmFwIG5lZWRzIHRvIGhhdmUgYXQgbGVhc3Qgb25lIGZvY3VzYWJsZSBlbGVtZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiBub2RlO1xuICB9O1xuICB2YXIgdXBkYXRlVGFiYmFibGVOb2RlcyA9IGZ1bmN0aW9uIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKSB7XG4gICAgc3RhdGUuY29udGFpbmVyR3JvdXBzID0gc3RhdGUuY29udGFpbmVycy5tYXAoZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgICAgdmFyIHRhYmJhYmxlTm9kZXMgPSB0YWJiYWJsZShjb250YWluZXIsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpO1xuXG4gICAgICAvLyBOT1RFOiBpZiB3ZSBoYXZlIHRhYmJhYmxlIG5vZGVzLCB3ZSBtdXN0IGhhdmUgZm9jdXNhYmxlIG5vZGVzOyBmb2N1c2FibGUgbm9kZXNcbiAgICAgIC8vICBhcmUgYSBzdXBlcnNldCBvZiB0YWJiYWJsZSBub2Rlc1xuICAgICAgdmFyIGZvY3VzYWJsZU5vZGVzID0gZm9jdXNhYmxlKGNvbnRhaW5lciwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgdGFiYmFibGVOb2RlczogdGFiYmFibGVOb2RlcyxcbiAgICAgICAgZm9jdXNhYmxlTm9kZXM6IGZvY3VzYWJsZU5vZGVzLFxuICAgICAgICBmaXJzdFRhYmJhYmxlTm9kZTogdGFiYmFibGVOb2Rlcy5sZW5ndGggPiAwID8gdGFiYmFibGVOb2Rlc1swXSA6IG51bGwsXG4gICAgICAgIGxhc3RUYWJiYWJsZU5vZGU6IHRhYmJhYmxlTm9kZXMubGVuZ3RoID4gMCA/IHRhYmJhYmxlTm9kZXNbdGFiYmFibGVOb2Rlcy5sZW5ndGggLSAxXSA6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaW5kcyB0aGUgX190YWJiYWJsZV9fIG5vZGUgdGhhdCBmb2xsb3dzIHRoZSBnaXZlbiBub2RlIGluIHRoZSBzcGVjaWZpZWQgZGlyZWN0aW9uLFxuICAgICAgICAgKiAgaW4gdGhpcyBjb250YWluZXIsIGlmIGFueS5cbiAgICAgICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3J3YXJkXSBUcnVlIGlmIGdvaW5nIGluIGZvcndhcmQgdGFiIG9yZGVyOyBmYWxzZSBpZiBnb2luZ1xuICAgICAgICAgKiAgaW4gcmV2ZXJzZS5cbiAgICAgICAgICogQHJldHVybnMge0hUTUxFbGVtZW50fHVuZGVmaW5lZH0gVGhlIG5leHQgdGFiYmFibGUgbm9kZSwgaWYgYW55LlxuICAgICAgICAgKi9cbiAgICAgICAgbmV4dFRhYmJhYmxlTm9kZTogZnVuY3Rpb24gbmV4dFRhYmJhYmxlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGZvcndhcmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG4gICAgICAgICAgLy8gTk9URTogSWYgdGFiaW5kZXggaXMgcG9zaXRpdmUgKGluIG9yZGVyIHRvIG1hbmlwdWxhdGUgdGhlIHRhYiBvcmRlciBzZXBhcmF0ZVxuICAgICAgICAgIC8vICBmcm9tIHRoZSBET00gb3JkZXIpLCB0aGlzIF9fd2lsbCBub3Qgd29ya19fIGJlY2F1c2UgdGhlIGxpc3Qgb2YgZm9jdXNhYmxlTm9kZXMsXG4gICAgICAgICAgLy8gIHdoaWxlIGl0IGNvbnRhaW5zIHRhYmJhYmxlIG5vZGVzLCBkb2VzIG5vdCBzb3J0IGl0cyBub2RlcyBpbiBhbnkgb3JkZXIgb3RoZXJcbiAgICAgICAgICAvLyAgdGhhbiBET00gb3JkZXIsIGJlY2F1c2UgaXQgY2FuJ3Q6IFdoZXJlIHdvdWxkIHlvdSBwbGFjZSBmb2N1c2FibGUgKGJ1dCBub3RcbiAgICAgICAgICAvLyAgdGFiYmFibGUpIG5vZGVzIGluIHRoYXQgb3JkZXI/IFRoZXkgaGF2ZSBubyBvcmRlciwgYmVjYXVzZSB0aGV5IGFyZW4ndCB0YWJiYWxlLi4uXG4gICAgICAgICAgLy8gU3VwcG9ydCBmb3IgcG9zaXRpdmUgdGFiaW5kZXggaXMgYWxyZWFkeSBicm9rZW4gYW5kIGhhcmQgdG8gbWFuYWdlIChwb3NzaWJseVxuICAgICAgICAgIC8vICBub3Qgc3VwcG9ydGFibGUsIFRCRCksIHNvIHRoaXMgaXNuJ3QgZ29pbmcgdG8gbWFrZSB0aGluZ3Mgd29yc2UgdGhhbiB0aGV5XG4gICAgICAgICAgLy8gIGFscmVhZHkgYXJlLCBhbmQgYXQgbGVhc3QgbWFrZXMgdGhpbmdzIGJldHRlciBmb3IgdGhlIG1ham9yaXR5IG9mIGNhc2VzIHdoZXJlXG4gICAgICAgICAgLy8gIHRhYmluZGV4IGlzIGVpdGhlciAwL3Vuc2V0IG9yIG5lZ2F0aXZlLlxuICAgICAgICAgIC8vIEZZSSwgcG9zaXRpdmUgdGFiaW5kZXggaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mb2N1cy10cmFwL2ZvY3VzLXRyYXAvaXNzdWVzLzM3NVxuICAgICAgICAgIHZhciBub2RlSWR4ID0gZm9jdXNhYmxlTm9kZXMuZmluZEluZGV4KGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICByZXR1cm4gbiA9PT0gbm9kZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAobm9kZUlkeCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9jdXNhYmxlTm9kZXMuc2xpY2Uobm9kZUlkeCArIDEpLmZpbmQoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzVGFiYmFibGUobiwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZvY3VzYWJsZU5vZGVzLnNsaWNlKDAsIG5vZGVJZHgpLnJldmVyc2UoKS5maW5kKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNUYWJiYWJsZShuLCBjb25maWcudGFiYmFibGVPcHRpb25zKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgICBzdGF0ZS50YWJiYWJsZUdyb3VwcyA9IHN0YXRlLmNvbnRhaW5lckdyb3Vwcy5maWx0ZXIoZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICByZXR1cm4gZ3JvdXAudGFiYmFibGVOb2Rlcy5sZW5ndGggPiAwO1xuICAgIH0pO1xuXG4gICAgLy8gdGhyb3cgaWYgbm8gZ3JvdXBzIGhhdmUgdGFiYmFibGUgbm9kZXMgYW5kIHdlIGRvbid0IGhhdmUgYSBmYWxsYmFjayBmb2N1cyBub2RlIGVpdGhlclxuICAgIGlmIChzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggPD0gMCAmJiAhZ2V0Tm9kZUZvck9wdGlvbignZmFsbGJhY2tGb2N1cycpIC8vIHJldHVybmluZyBmYWxzZSBub3Qgc3VwcG9ydGVkIGZvciB0aGlzIG9wdGlvblxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGZvY3VzLXRyYXAgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjb250YWluZXIgd2l0aCBhdCBsZWFzdCBvbmUgdGFiYmFibGUgbm9kZSBpbiBpdCBhdCBhbGwgdGltZXMnKTtcbiAgICB9XG4gIH07XG4gIHZhciB0cnlGb2N1cyA9IGZ1bmN0aW9uIHRyeUZvY3VzKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5vZGUgPT09IGRvYy5hY3RpdmVFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghbm9kZSB8fCAhbm9kZS5mb2N1cykge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbm9kZS5mb2N1cyh7XG4gICAgICBwcmV2ZW50U2Nyb2xsOiAhIWNvbmZpZy5wcmV2ZW50U2Nyb2xsXG4gICAgfSk7XG4gICAgc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgPSBub2RlO1xuICAgIGlmIChpc1NlbGVjdGFibGVJbnB1dChub2RlKSkge1xuICAgICAgbm9kZS5zZWxlY3QoKTtcbiAgICB9XG4gIH07XG4gIHZhciBnZXRSZXR1cm5Gb2N1c05vZGUgPSBmdW5jdGlvbiBnZXRSZXR1cm5Gb2N1c05vZGUocHJldmlvdXNBY3RpdmVFbGVtZW50KSB7XG4gICAgdmFyIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKCdzZXRSZXR1cm5Gb2N1cycsIHByZXZpb3VzQWN0aXZlRWxlbWVudCk7XG4gICAgcmV0dXJuIG5vZGUgPyBub2RlIDogbm9kZSA9PT0gZmFsc2UgPyBmYWxzZSA6IHByZXZpb3VzQWN0aXZlRWxlbWVudDtcbiAgfTtcblxuICAvLyBUaGlzIG5lZWRzIHRvIGJlIGRvbmUgb24gbW91c2Vkb3duIGFuZCB0b3VjaHN0YXJ0IGluc3RlYWQgb2YgY2xpY2tcbiAgLy8gc28gdGhhdCBpdCBwcmVjZWRlcyB0aGUgZm9jdXMgZXZlbnQuXG4gIHZhciBjaGVja1BvaW50ZXJEb3duID0gZnVuY3Rpb24gY2hlY2tQb2ludGVyRG93bihlKSB7XG4gICAgdmFyIHRhcmdldCA9IGdldEFjdHVhbFRhcmdldChlKTtcbiAgICBpZiAoZmluZENvbnRhaW5lckluZGV4KHRhcmdldCwgZSkgPj0gMCkge1xuICAgICAgLy8gYWxsb3cgdGhlIGNsaWNrIHNpbmNlIGl0IG9jdXJyZWQgaW5zaWRlIHRoZSB0cmFwXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZU9ySGFuZGxlcihjb25maWcuY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXMsIGUpKSB7XG4gICAgICAvLyBpbW1lZGlhdGVseSBkZWFjdGl2YXRlIHRoZSB0cmFwXG4gICAgICB0cmFwLmRlYWN0aXZhdGUoe1xuICAgICAgICAvLyBOT1RFOiBieSBzZXR0aW5nIGByZXR1cm5Gb2N1czogZmFsc2VgLCBkZWFjdGl2YXRlKCkgd2lsbCBkbyBub3RoaW5nLFxuICAgICAgICAvLyAgd2hpY2ggd2lsbCByZXN1bHQgaW4gdGhlIG91dHNpZGUgY2xpY2sgc2V0dGluZyBmb2N1cyB0byB0aGUgbm9kZVxuICAgICAgICAvLyAgdGhhdCB3YXMgY2xpY2tlZCAoYW5kIGlmIG5vdCBmb2N1c2FibGUsIHRvIFwibm90aGluZ1wiKTsgYnkgc2V0dGluZ1xuICAgICAgICAvLyAgYHJldHVybkZvY3VzOiB0cnVlYCwgd2UnbGwgYXR0ZW1wdCB0byByZS1mb2N1cyB0aGUgbm9kZSBvcmlnaW5hbGx5LWZvY3VzZWRcbiAgICAgICAgLy8gIG9uIGFjdGl2YXRpb24gKG9yIHRoZSBjb25maWd1cmVkIGBzZXRSZXR1cm5Gb2N1c2Agbm9kZSksIHdoZXRoZXIgdGhlXG4gICAgICAgIC8vICBvdXRzaWRlIGNsaWNrIHdhcyBvbiBhIGZvY3VzYWJsZSBub2RlIG9yIG5vdFxuICAgICAgICByZXR1cm5Gb2N1czogY29uZmlnLnJldHVybkZvY3VzT25EZWFjdGl2YXRlXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGlzIG5lZWRlZCBmb3IgbW9iaWxlIGRldmljZXMuXG4gICAgLy8gKElmIHdlJ2xsIG9ubHkgbGV0IGBjbGlja2AgZXZlbnRzIHRocm91Z2gsXG4gICAgLy8gdGhlbiBvbiBtb2JpbGUgdGhleSB3aWxsIGJlIGJsb2NrZWQgYW55d2F5cyBpZiBgdG91Y2hzdGFydGAgaXMgYmxvY2tlZC4pXG4gICAgaWYgKHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5hbGxvd091dHNpZGVDbGljaywgZSkpIHtcbiAgICAgIC8vIGFsbG93IHRoZSBjbGljayBvdXRzaWRlIHRoZSB0cmFwIHRvIHRha2UgcGxhY2VcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBvdGhlcndpc2UsIHByZXZlbnQgdGhlIGNsaWNrXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIC8vIEluIGNhc2UgZm9jdXMgZXNjYXBlcyB0aGUgdHJhcCBmb3Igc29tZSBzdHJhbmdlIHJlYXNvbiwgcHVsbCBpdCBiYWNrIGluLlxuICB2YXIgY2hlY2tGb2N1c0luID0gZnVuY3Rpb24gY2hlY2tGb2N1c0luKGUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0QWN0dWFsVGFyZ2V0KGUpO1xuICAgIHZhciB0YXJnZXRDb250YWluZWQgPSBmaW5kQ29udGFpbmVySW5kZXgodGFyZ2V0LCBlKSA+PSAwO1xuXG4gICAgLy8gSW4gRmlyZWZveCB3aGVuIHlvdSBUYWIgb3V0IG9mIGFuIGlmcmFtZSB0aGUgRG9jdW1lbnQgaXMgYnJpZWZseSBmb2N1c2VkLlxuICAgIGlmICh0YXJnZXRDb250YWluZWQgfHwgdGFyZ2V0IGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgIGlmICh0YXJnZXRDb250YWluZWQpIHtcbiAgICAgICAgc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgPSB0YXJnZXQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzY2FwZWQhIHB1bGwgaXQgYmFjayBpbiB0byB3aGVyZSBpdCBqdXN0IGxlZnRcbiAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICB0cnlGb2N1cyhzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSB8fCBnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH1cbiAgfTtcblxuICAvLyBIaWphY2sga2V5IG5hdiBldmVudHMgb24gdGhlIGZpcnN0IGFuZCBsYXN0IGZvY3VzYWJsZSBub2RlcyBvZiB0aGUgdHJhcCxcbiAgLy8gaW4gb3JkZXIgdG8gcHJldmVudCBmb2N1cyBmcm9tIGVzY2FwaW5nLiBJZiBpdCBlc2NhcGVzIGZvciBldmVuIGFcbiAgLy8gbW9tZW50IGl0IGNhbiBlbmQgdXAgc2Nyb2xsaW5nIHRoZSBwYWdlIGFuZCBjYXVzaW5nIGNvbmZ1c2lvbiBzbyB3ZVxuICAvLyBraW5kIG9mIG5lZWQgdG8gY2FwdHVyZSB0aGUgYWN0aW9uIGF0IHRoZSBrZXlkb3duIHBoYXNlLlxuICB2YXIgY2hlY2tLZXlOYXYgPSBmdW5jdGlvbiBjaGVja0tleU5hdihldmVudCkge1xuICAgIHZhciBpc0JhY2t3YXJkID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0QWN0dWFsVGFyZ2V0KGV2ZW50KTtcbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgdmFyIGRlc3RpbmF0aW9uTm9kZSA9IG51bGw7XG4gICAgaWYgKHN0YXRlLnRhYmJhYmxlR3JvdXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgdGFyZ2V0IGlzIGFjdHVhbGx5IGNvbnRhaW5lZCBpbiBhIGdyb3VwXG4gICAgICAvLyBOT1RFOiB0aGUgdGFyZ2V0IG1heSBhbHNvIGJlIHRoZSBjb250YWluZXIgaXRzZWxmIGlmIGl0J3MgZm9jdXNhYmxlXG4gICAgICAvLyAgd2l0aCB0YWJJbmRleD0nLTEnIGFuZCB3YXMgZ2l2ZW4gaW5pdGlhbCBmb2N1c1xuICAgICAgdmFyIGNvbnRhaW5lckluZGV4ID0gZmluZENvbnRhaW5lckluZGV4KHRhcmdldCwgZXZlbnQpO1xuICAgICAgdmFyIGNvbnRhaW5lckdyb3VwID0gY29udGFpbmVySW5kZXggPj0gMCA/IHN0YXRlLmNvbnRhaW5lckdyb3Vwc1tjb250YWluZXJJbmRleF0gOiB1bmRlZmluZWQ7XG4gICAgICBpZiAoY29udGFpbmVySW5kZXggPCAwKSB7XG4gICAgICAgIC8vIHRhcmdldCBub3QgZm91bmQgaW4gYW55IGdyb3VwOiBxdWl0ZSBwb3NzaWJsZSBmb2N1cyBoYXMgZXNjYXBlZCB0aGUgdHJhcCxcbiAgICAgICAgLy8gIHNvIGJyaW5nIGl0IGJhY2sgaW50by4uLlxuICAgICAgICBpZiAoaXNCYWNrd2FyZCkge1xuICAgICAgICAgIC8vIC4uLnRoZSBsYXN0IG5vZGUgaW4gdGhlIGxhc3QgZ3JvdXBcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1tzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggLSAxXS5sYXN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIC4uLnRoZSBmaXJzdCBub2RlIGluIHRoZSBmaXJzdCBncm91cFxuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzWzBdLmZpcnN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzQmFja3dhcmQpIHtcbiAgICAgICAgLy8gUkVWRVJTRVxuXG4gICAgICAgIC8vIGlzIHRoZSB0YXJnZXQgdGhlIGZpcnN0IHRhYmJhYmxlIG5vZGUgaW4gYSBncm91cD9cbiAgICAgICAgdmFyIHN0YXJ0T2ZHcm91cEluZGV4ID0gZmluZEluZGV4KHN0YXRlLnRhYmJhYmxlR3JvdXBzLCBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgICB2YXIgZmlyc3RUYWJiYWJsZU5vZGUgPSBfcmVmMi5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSBmaXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzdGFydE9mR3JvdXBJbmRleCA8IDAgJiYgKGNvbnRhaW5lckdyb3VwLmNvbnRhaW5lciA9PT0gdGFyZ2V0IHx8IGlzRm9jdXNhYmxlKHRhcmdldCwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucykgJiYgIWlzVGFiYmFibGUodGFyZ2V0LCBjb25maWcudGFiYmFibGVPcHRpb25zKSAmJiAhY29udGFpbmVyR3JvdXAubmV4dFRhYmJhYmxlTm9kZSh0YXJnZXQsIGZhbHNlKSkpIHtcbiAgICAgICAgICAvLyBhbiBleGNlcHRpb24gY2FzZSB3aGVyZSB0aGUgdGFyZ2V0IGlzIGVpdGhlciB0aGUgY29udGFpbmVyIGl0c2VsZiwgb3JcbiAgICAgICAgICAvLyAgYSBub24tdGFiYmFibGUgbm9kZSB0aGF0IHdhcyBnaXZlbiBmb2N1cyAoaS5lLiB0YWJpbmRleCBpcyBuZWdhdGl2ZVxuICAgICAgICAgIC8vICBhbmQgdXNlciBjbGlja2VkIG9uIGl0IG9yIG5vZGUgd2FzIHByb2dyYW1tYXRpY2FsbHkgZ2l2ZW4gZm9jdXMpXG4gICAgICAgICAgLy8gIGFuZCBpcyBub3QgZm9sbG93ZWQgYnkgYW55IG90aGVyIHRhYmJhYmxlIG5vZGUsIGluIHdoaWNoXG4gICAgICAgICAgLy8gIGNhc2UsIHdlIHNob3VsZCBoYW5kbGUgc2hpZnQrdGFiIGFzIGlmIGZvY3VzIHdlcmUgb24gdGhlIGNvbnRhaW5lcidzXG4gICAgICAgICAgLy8gIGZpcnN0IHRhYmJhYmxlIG5vZGUsIGFuZCBnbyB0byB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBMQVNUIGdyb3VwXG4gICAgICAgICAgc3RhcnRPZkdyb3VwSW5kZXggPSBjb250YWluZXJJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRPZkdyb3VwSW5kZXggPj0gMCkge1xuICAgICAgICAgIC8vIFlFUzogdGhlbiBzaGlmdCt0YWIgc2hvdWxkIGdvIHRvIHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgaW4gdGhlXG4gICAgICAgICAgLy8gIHByZXZpb3VzIGdyb3VwIChhbmQgd3JhcCBhcm91bmQgdG8gdGhlIGxhc3QgdGFiYmFibGUgbm9kZSBvZlxuICAgICAgICAgIC8vICB0aGUgTEFTVCBncm91cCBpZiBpdCdzIHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBGSVJTVCBncm91cClcbiAgICAgICAgICB2YXIgZGVzdGluYXRpb25Hcm91cEluZGV4ID0gc3RhcnRPZkdyb3VwSW5kZXggPT09IDAgPyBzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggLSAxIDogc3RhcnRPZkdyb3VwSW5kZXggLSAxO1xuICAgICAgICAgIHZhciBkZXN0aW5hdGlvbkdyb3VwID0gc3RhdGUudGFiYmFibGVHcm91cHNbZGVzdGluYXRpb25Hcm91cEluZGV4XTtcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBkZXN0aW5hdGlvbkdyb3VwLmxhc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzVGFiRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgLy8gdXNlciBtdXN0IGhhdmUgY3VzdG9taXplZCB0aGUgbmF2IGtleXMgc28gd2UgaGF2ZSB0byBtb3ZlIGZvY3VzIG1hbnVhbGx5IF93aXRoaW5fXG4gICAgICAgICAgLy8gIHRoZSBhY3RpdmUgZ3JvdXA6IGRvIHRoaXMgYmFzZWQgb24gdGhlIG9yZGVyIGRldGVybWluZWQgYnkgdGFiYmFibGUoKVxuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IGNvbnRhaW5lckdyb3VwLm5leHRUYWJiYWJsZU5vZGUodGFyZ2V0LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZPUldBUkRcblxuICAgICAgICAvLyBpcyB0aGUgdGFyZ2V0IHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgaW4gYSBncm91cD9cbiAgICAgICAgdmFyIGxhc3RPZkdyb3VwSW5kZXggPSBmaW5kSW5kZXgoc3RhdGUudGFiYmFibGVHcm91cHMsIGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICAgIHZhciBsYXN0VGFiYmFibGVOb2RlID0gX3JlZjMubGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0ID09PSBsYXN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGxhc3RPZkdyb3VwSW5kZXggPCAwICYmIChjb250YWluZXJHcm91cC5jb250YWluZXIgPT09IHRhcmdldCB8fCBpc0ZvY3VzYWJsZSh0YXJnZXQsIGNvbmZpZy50YWJiYWJsZU9wdGlvbnMpICYmICFpc1RhYmJhYmxlKHRhcmdldCwgY29uZmlnLnRhYmJhYmxlT3B0aW9ucykgJiYgIWNvbnRhaW5lckdyb3VwLm5leHRUYWJiYWJsZU5vZGUodGFyZ2V0KSkpIHtcbiAgICAgICAgICAvLyBhbiBleGNlcHRpb24gY2FzZSB3aGVyZSB0aGUgdGFyZ2V0IGlzIHRoZSBjb250YWluZXIgaXRzZWxmLCBvclxuICAgICAgICAgIC8vICBhIG5vbi10YWJiYWJsZSBub2RlIHRoYXQgd2FzIGdpdmVuIGZvY3VzIChpLmUuIHRhYmluZGV4IGlzIG5lZ2F0aXZlXG4gICAgICAgICAgLy8gIGFuZCB1c2VyIGNsaWNrZWQgb24gaXQgb3Igbm9kZSB3YXMgcHJvZ3JhbW1hdGljYWxseSBnaXZlbiBmb2N1cylcbiAgICAgICAgICAvLyAgYW5kIGlzIG5vdCBmb2xsb3dlZCBieSBhbnkgb3RoZXIgdGFiYmFibGUgbm9kZSwgaW4gd2hpY2hcbiAgICAgICAgICAvLyAgY2FzZSwgd2Ugc2hvdWxkIGhhbmRsZSB0YWIgYXMgaWYgZm9jdXMgd2VyZSBvbiB0aGUgY29udGFpbmVyJ3NcbiAgICAgICAgICAvLyAgbGFzdCB0YWJiYWJsZSBub2RlLCBhbmQgZ28gdG8gdGhlIGZpcnN0IHRhYmJhYmxlIG5vZGUgb2YgdGhlIEZJUlNUIGdyb3VwXG4gICAgICAgICAgbGFzdE9mR3JvdXBJbmRleCA9IGNvbnRhaW5lckluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0T2ZHcm91cEluZGV4ID49IDApIHtcbiAgICAgICAgICAvLyBZRVM6IHRoZW4gdGFiIHNob3VsZCBnbyB0byB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBpbiB0aGUgbmV4dFxuICAgICAgICAgIC8vICBncm91cCAoYW5kIHdyYXAgYXJvdW5kIHRvIHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBGSVJTVFxuICAgICAgICAgIC8vICBncm91cCBpZiBpdCdzIHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgb2YgdGhlIExBU1QgZ3JvdXApXG4gICAgICAgICAgdmFyIF9kZXN0aW5hdGlvbkdyb3VwSW5kZXggPSBsYXN0T2ZHcm91cEluZGV4ID09PSBzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggLSAxID8gMCA6IGxhc3RPZkdyb3VwSW5kZXggKyAxO1xuICAgICAgICAgIHZhciBfZGVzdGluYXRpb25Hcm91cCA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzW19kZXN0aW5hdGlvbkdyb3VwSW5kZXhdO1xuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IF9kZXN0aW5hdGlvbkdyb3VwLmZpcnN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc1RhYkV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgIC8vIHVzZXIgbXVzdCBoYXZlIGN1c3RvbWl6ZWQgdGhlIG5hdiBrZXlzIHNvIHdlIGhhdmUgdG8gbW92ZSBmb2N1cyBtYW51YWxseSBfd2l0aGluX1xuICAgICAgICAgIC8vICB0aGUgYWN0aXZlIGdyb3VwOiBkbyB0aGlzIGJhc2VkIG9uIHRoZSBvcmRlciBkZXRlcm1pbmVkIGJ5IHRhYmJhYmxlKClcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBjb250YWluZXJHcm91cC5uZXh0VGFiYmFibGVOb2RlKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm8gZ3JvdXBzIGF2YWlsYWJsZVxuICAgICAgLy8gTk9URTogdGhlIGZhbGxiYWNrRm9jdXMgb3B0aW9uIGRvZXMgbm90IHN1cHBvcnQgcmV0dXJuaW5nIGZhbHNlIHRvIG9wdC1vdXRcbiAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKTtcbiAgICB9XG4gICAgaWYgKGRlc3RpbmF0aW9uTm9kZSkge1xuICAgICAgaWYgKGlzVGFiRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgIC8vIHNpbmNlIHRhYiBuYXRpdmVseSBtb3ZlcyBmb2N1cywgd2Ugd291bGRuJ3QgaGF2ZSBhIGRlc3RpbmF0aW9uIG5vZGUgdW5sZXNzIHdlXG4gICAgICAgIC8vICB3ZXJlIG9uIHRoZSBlZGdlIG9mIGEgY29udGFpbmVyIGFuZCBoYWQgdG8gbW92ZSB0byB0aGUgbmV4dC9wcmV2aW91cyBlZGdlLCBpblxuICAgICAgICAvLyAgd2hpY2ggY2FzZSB3ZSB3YW50IHRvIHByZXZlbnQgZGVmYXVsdCB0byBrZWVwIHRoZSBicm93c2VyIGZyb20gbW92aW5nIGZvY3VzXG4gICAgICAgIC8vICB0byB3aGVyZSBpdCBub3JtYWxseSB3b3VsZFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgdHJ5Rm9jdXMoZGVzdGluYXRpb25Ob2RlKTtcbiAgICB9XG4gICAgLy8gZWxzZSwgbGV0IHRoZSBicm93c2VyIHRha2UgY2FyZSBvZiBbc2hpZnQrXXRhYiBhbmQgbW92ZSB0aGUgZm9jdXNcbiAgfTtcblxuICB2YXIgY2hlY2tLZXkgPSBmdW5jdGlvbiBjaGVja0tleShldmVudCkge1xuICAgIGlmIChpc0VzY2FwZUV2ZW50KGV2ZW50KSAmJiB2YWx1ZU9ySGFuZGxlcihjb25maWcuZXNjYXBlRGVhY3RpdmF0ZXMsIGV2ZW50KSAhPT0gZmFsc2UpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0cmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy5pc0tleUZvcndhcmQoZXZlbnQpIHx8IGNvbmZpZy5pc0tleUJhY2t3YXJkKGV2ZW50KSkge1xuICAgICAgY2hlY2tLZXlOYXYoZXZlbnQsIGNvbmZpZy5pc0tleUJhY2t3YXJkKGV2ZW50KSk7XG4gICAgfVxuICB9O1xuICB2YXIgY2hlY2tDbGljayA9IGZ1bmN0aW9uIGNoZWNrQ2xpY2soZSkge1xuICAgIHZhciB0YXJnZXQgPSBnZXRBY3R1YWxUYXJnZXQoZSk7XG4gICAgaWYgKGZpbmRDb250YWluZXJJbmRleCh0YXJnZXQsIGUpID49IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcywgZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5hbGxvd091dHNpZGVDbGljaywgZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgLy9cbiAgLy8gRVZFTlQgTElTVEVORVJTXG4gIC8vXG5cbiAgdmFyIGFkZExpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoZXJlIGNhbiBiZSBvbmx5IG9uZSBsaXN0ZW5pbmcgZm9jdXMgdHJhcCBhdCBhIHRpbWVcbiAgICBhY3RpdmVGb2N1c1RyYXBzLmFjdGl2YXRlVHJhcCh0cmFwU3RhY2ssIHRyYXApO1xuXG4gICAgLy8gRGVsYXkgZW5zdXJlcyB0aGF0IHRoZSBmb2N1c2VkIGVsZW1lbnQgZG9lc24ndCBjYXB0dXJlIHRoZSBldmVudFxuICAgIC8vIHRoYXQgY2F1c2VkIHRoZSBmb2N1cyB0cmFwIGFjdGl2YXRpb24uXG4gICAgc3RhdGUuZGVsYXlJbml0aWFsRm9jdXNUaW1lciA9IGNvbmZpZy5kZWxheUluaXRpYWxGb2N1cyA/IGRlbGF5KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgfSkgOiB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB7XG4gICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB7XG4gICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB7XG4gICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gdHJhcDtcbiAgfTtcbiAgdmFyIHJlbW92ZUxpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwgdHJ1ZSk7XG4gICAgcmV0dXJuIHRyYXA7XG4gIH07XG5cbiAgLy9cbiAgLy8gTVVUQVRJT04gT0JTRVJWRVJcbiAgLy9cblxuICB2YXIgY2hlY2tEb21SZW1vdmFsID0gZnVuY3Rpb24gY2hlY2tEb21SZW1vdmFsKG11dGF0aW9ucykge1xuICAgIHZhciBpc0ZvY3VzZWROb2RlUmVtb3ZlZCA9IG11dGF0aW9ucy5zb21lKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgICAgdmFyIHJlbW92ZWROb2RlcyA9IEFycmF5LmZyb20obXV0YXRpb24ucmVtb3ZlZE5vZGVzKTtcbiAgICAgIHJldHVybiByZW1vdmVkTm9kZXMuc29tZShmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZSA9PT0gc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGU7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIElmIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBpcyByZW1vdmVkIHRoZW4gYnJvd3NlcnMgd2lsbCBtb3ZlIGZvY3VzIHRvIHRoZVxuICAgIC8vIDxib2R5PiBlbGVtZW50LiBJZiB0aGlzIGhhcHBlbnMsIHRyeSB0byBtb3ZlIGZvY3VzIGJhY2sgaW50byB0aGUgdHJhcC5cbiAgICBpZiAoaXNGb2N1c2VkTm9kZVJlbW92ZWQpIHtcbiAgICAgIHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFVzZSBNdXRhdGlvbk9ic2VydmVyIC0gaWYgc3VwcG9ydGVkIC0gdG8gZGV0ZWN0IGlmIGZvY3VzZWQgbm9kZSBpcyByZW1vdmVkXG4gIC8vIGZyb20gdGhlIERPTS5cbiAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93ID8gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2hlY2tEb21SZW1vdmFsKSA6IHVuZGVmaW5lZDtcbiAgdmFyIHVwZGF0ZU9ic2VydmVkTm9kZXMgPSBmdW5jdGlvbiB1cGRhdGVPYnNlcnZlZE5vZGVzKCkge1xuICAgIGlmICghbXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICBpZiAoc3RhdGUuYWN0aXZlICYmICFzdGF0ZS5wYXVzZWQpIHtcbiAgICAgIHN0YXRlLmNvbnRhaW5lcnMubWFwKGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbnRhaW5lciwge1xuICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vXG4gIC8vIFRSQVAgREVGSU5JVElPTlxuICAvL1xuXG4gIHRyYXAgPSB7XG4gICAgZ2V0IGFjdGl2ZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5hY3RpdmU7XG4gICAgfSxcbiAgICBnZXQgcGF1c2VkKCkge1xuICAgICAgcmV0dXJuIHN0YXRlLnBhdXNlZDtcbiAgICB9LFxuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiBhY3RpdmF0ZShhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICAgIGlmIChzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgb25BY3RpdmF0ZSA9IGdldE9wdGlvbihhY3RpdmF0ZU9wdGlvbnMsICdvbkFjdGl2YXRlJyk7XG4gICAgICB2YXIgb25Qb3N0QWN0aXZhdGUgPSBnZXRPcHRpb24oYWN0aXZhdGVPcHRpb25zLCAnb25Qb3N0QWN0aXZhdGUnKTtcbiAgICAgIHZhciBjaGVja0NhbkZvY3VzVHJhcCA9IGdldE9wdGlvbihhY3RpdmF0ZU9wdGlvbnMsICdjaGVja0NhbkZvY3VzVHJhcCcpO1xuICAgICAgaWYgKCFjaGVja0NhbkZvY3VzVHJhcCkge1xuICAgICAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgICB9XG4gICAgICBzdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgICBzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24gPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICAgIG9uQWN0aXZhdGUgPT09IG51bGwgfHwgb25BY3RpdmF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25BY3RpdmF0ZSgpO1xuICAgICAgdmFyIGZpbmlzaEFjdGl2YXRpb24gPSBmdW5jdGlvbiBmaW5pc2hBY3RpdmF0aW9uKCkge1xuICAgICAgICBpZiAoY2hlY2tDYW5Gb2N1c1RyYXApIHtcbiAgICAgICAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgICAgIHVwZGF0ZU9ic2VydmVkTm9kZXMoKTtcbiAgICAgICAgb25Qb3N0QWN0aXZhdGUgPT09IG51bGwgfHwgb25Qb3N0QWN0aXZhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uUG9zdEFjdGl2YXRlKCk7XG4gICAgICB9O1xuICAgICAgaWYgKGNoZWNrQ2FuRm9jdXNUcmFwKSB7XG4gICAgICAgIGNoZWNrQ2FuRm9jdXNUcmFwKHN0YXRlLmNvbnRhaW5lcnMuY29uY2F0KCkpLnRoZW4oZmluaXNoQWN0aXZhdGlvbiwgZmluaXNoQWN0aXZhdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgZmluaXNoQWN0aXZhdGlvbigpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiBkZWFjdGl2YXRlKGRlYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgICBpZiAoIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHZhciBvcHRpb25zID0gX29iamVjdFNwcmVhZDIoe1xuICAgICAgICBvbkRlYWN0aXZhdGU6IGNvbmZpZy5vbkRlYWN0aXZhdGUsXG4gICAgICAgIG9uUG9zdERlYWN0aXZhdGU6IGNvbmZpZy5vblBvc3REZWFjdGl2YXRlLFxuICAgICAgICBjaGVja0NhblJldHVybkZvY3VzOiBjb25maWcuY2hlY2tDYW5SZXR1cm5Gb2N1c1xuICAgICAgfSwgZGVhY3RpdmF0ZU9wdGlvbnMpO1xuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLmRlbGF5SW5pdGlhbEZvY3VzVGltZXIpOyAvLyBub29wIGlmIHVuZGVmaW5lZFxuICAgICAgc3RhdGUuZGVsYXlJbml0aWFsRm9jdXNUaW1lciA9IHVuZGVmaW5lZDtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgIHVwZGF0ZU9ic2VydmVkTm9kZXMoKTtcbiAgICAgIGFjdGl2ZUZvY3VzVHJhcHMuZGVhY3RpdmF0ZVRyYXAodHJhcFN0YWNrLCB0cmFwKTtcbiAgICAgIHZhciBvbkRlYWN0aXZhdGUgPSBnZXRPcHRpb24ob3B0aW9ucywgJ29uRGVhY3RpdmF0ZScpO1xuICAgICAgdmFyIG9uUG9zdERlYWN0aXZhdGUgPSBnZXRPcHRpb24ob3B0aW9ucywgJ29uUG9zdERlYWN0aXZhdGUnKTtcbiAgICAgIHZhciBjaGVja0NhblJldHVybkZvY3VzID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdjaGVja0NhblJldHVybkZvY3VzJyk7XG4gICAgICB2YXIgcmV0dXJuRm9jdXMgPSBnZXRPcHRpb24ob3B0aW9ucywgJ3JldHVybkZvY3VzJywgJ3JldHVybkZvY3VzT25EZWFjdGl2YXRlJyk7XG4gICAgICBvbkRlYWN0aXZhdGUgPT09IG51bGwgfHwgb25EZWFjdGl2YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkRlYWN0aXZhdGUoKTtcbiAgICAgIHZhciBmaW5pc2hEZWFjdGl2YXRpb24gPSBmdW5jdGlvbiBmaW5pc2hEZWFjdGl2YXRpb24oKSB7XG4gICAgICAgIGRlbGF5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAocmV0dXJuRm9jdXMpIHtcbiAgICAgICAgICAgIHRyeUZvY3VzKGdldFJldHVybkZvY3VzTm9kZShzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb25Qb3N0RGVhY3RpdmF0ZSA9PT0gbnVsbCB8fCBvblBvc3REZWFjdGl2YXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblBvc3REZWFjdGl2YXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGlmIChyZXR1cm5Gb2N1cyAmJiBjaGVja0NhblJldHVybkZvY3VzKSB7XG4gICAgICAgIGNoZWNrQ2FuUmV0dXJuRm9jdXMoZ2V0UmV0dXJuRm9jdXNOb2RlKHN0YXRlLm5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbikpLnRoZW4oZmluaXNoRGVhY3RpdmF0aW9uLCBmaW5pc2hEZWFjdGl2YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGZpbmlzaERlYWN0aXZhdGlvbigpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBwYXVzZTogZnVuY3Rpb24gcGF1c2UocGF1c2VPcHRpb25zKSB7XG4gICAgICBpZiAoc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgb25QYXVzZSA9IGdldE9wdGlvbihwYXVzZU9wdGlvbnMsICdvblBhdXNlJyk7XG4gICAgICB2YXIgb25Qb3N0UGF1c2UgPSBnZXRPcHRpb24ocGF1c2VPcHRpb25zLCAnb25Qb3N0UGF1c2UnKTtcbiAgICAgIHN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgICBvblBhdXNlID09PSBudWxsIHx8IG9uUGF1c2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uUGF1c2UoKTtcbiAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgdXBkYXRlT2JzZXJ2ZWROb2RlcygpO1xuICAgICAgb25Qb3N0UGF1c2UgPT09IG51bGwgfHwgb25Qb3N0UGF1c2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uUG9zdFBhdXNlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHVucGF1c2U6IGZ1bmN0aW9uIHVucGF1c2UodW5wYXVzZU9wdGlvbnMpIHtcbiAgICAgIGlmICghc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICB2YXIgb25VbnBhdXNlID0gZ2V0T3B0aW9uKHVucGF1c2VPcHRpb25zLCAnb25VbnBhdXNlJyk7XG4gICAgICB2YXIgb25Qb3N0VW5wYXVzZSA9IGdldE9wdGlvbih1bnBhdXNlT3B0aW9ucywgJ29uUG9zdFVucGF1c2UnKTtcbiAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgb25VbnBhdXNlID09PSBudWxsIHx8IG9uVW5wYXVzZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25VbnBhdXNlKCk7XG4gICAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICAgIHVwZGF0ZU9ic2VydmVkTm9kZXMoKTtcbiAgICAgIG9uUG9zdFVucGF1c2UgPT09IG51bGwgfHwgb25Qb3N0VW5wYXVzZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25Qb3N0VW5wYXVzZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICB1cGRhdGVDb250YWluZXJFbGVtZW50czogZnVuY3Rpb24gdXBkYXRlQ29udGFpbmVyRWxlbWVudHMoY29udGFpbmVyRWxlbWVudHMpIHtcbiAgICAgIHZhciBlbGVtZW50c0FzQXJyYXkgPSBbXS5jb25jYXQoY29udGFpbmVyRWxlbWVudHMpLmZpbHRlcihCb29sZWFuKTtcbiAgICAgIHN0YXRlLmNvbnRhaW5lcnMgPSBlbGVtZW50c0FzQXJyYXkubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBkb2MucXVlcnlTZWxlY3RvcihlbGVtZW50KSA6IGVsZW1lbnQ7XG4gICAgICB9KTtcbiAgICAgIGlmIChzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgfVxuICAgICAgdXBkYXRlT2JzZXJ2ZWROb2RlcygpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9O1xuXG4gIC8vIGluaXRpYWxpemUgY29udGFpbmVyIGVsZW1lbnRzXG4gIHRyYXAudXBkYXRlQ29udGFpbmVyRWxlbWVudHMoZWxlbWVudHMpO1xuICByZXR1cm4gdHJhcDtcbn07XG5cbmNvbnN0IHRyYXBTdGFjayA9IFtdO1xuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIHRoZSBGb2N1c1RyYXAgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7Rm9jdXNUcmFwQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIEZvY3VzVHJhcCBjb21wb25lbnQuXG4gKiBAcGFyYW0gb3B0aW9uc1xuICovXG5mdW5jdGlvbiBjb25uZWN0Rm9jdXNUcmFwKGNvbXBvbmVudCwgb3B0aW9ucykge1xuICBjb25zdCB7IGVsIH0gPSBjb21wb25lbnQ7XG4gIGNvbnN0IGZvY3VzVHJhcE5vZGUgPSBvcHRpb25zPy5mb2N1c1RyYXBFbCB8fCBlbDtcbiAgaWYgKCFmb2N1c1RyYXBOb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGZvY3VzVHJhcE9wdGlvbnMgPSB7XG4gICAgY2xpY2tPdXRzaWRlRGVhY3RpdmF0ZXM6IHRydWUsXG4gICAgZXNjYXBlRGVhY3RpdmF0ZXM6IGZhbHNlLFxuICAgIGZhbGxiYWNrRm9jdXM6IGZvY3VzVHJhcE5vZGUsXG4gICAgc2V0UmV0dXJuRm9jdXM6IChlbCkgPT4ge1xuICAgICAgZm9jdXNFbGVtZW50KGVsKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIC4uLm9wdGlvbnM/LmZvY3VzVHJhcE9wdGlvbnMsXG4gICAgLy8gdGhlIGZvbGxvd2luZyBvcHRpb25zIGFyZSBub3Qgb3ZlcnJpZGVhYmxlXG4gICAgZG9jdW1lbnQ6IGVsLm93bmVyRG9jdW1lbnQsXG4gICAgdGFiYmFibGVPcHRpb25zLFxuICAgIHRyYXBTdGFja1xuICB9O1xuICBjb21wb25lbnQuZm9jdXNUcmFwID0gY3JlYXRlRm9jdXNUcmFwKGZvY3VzVHJhcE5vZGUsIGZvY3VzVHJhcE9wdGlvbnMpO1xufVxuLyoqXG4gKiBIZWxwZXIgdG8gYWN0aXZhdGUgdGhlIEZvY3VzVHJhcCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtGb2N1c1RyYXBDb21wb25lbnR9IGNvbXBvbmVudCBUaGUgRm9jdXNUcmFwIGNvbXBvbmVudC5cbiAqIEBwYXJhbSBbb3B0aW9uc10gVGhlIEZvY3VzVHJhcCBhY3RpdmF0ZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBhY3RpdmF0ZUZvY3VzVHJhcChjb21wb25lbnQsIG9wdGlvbnMpIHtcbiAgaWYgKCFjb21wb25lbnQuZm9jdXNUcmFwRGlzYWJsZWQpIHtcbiAgICBjb21wb25lbnQuZm9jdXNUcmFwPy5hY3RpdmF0ZShvcHRpb25zKTtcbiAgfVxufVxuLyoqXG4gKiBIZWxwZXIgdG8gZGVhY3RpdmF0ZSB0aGUgRm9jdXNUcmFwIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0ZvY3VzVHJhcENvbXBvbmVudH0gY29tcG9uZW50IFRoZSBGb2N1c1RyYXAgY29tcG9uZW50LlxuICogQHBhcmFtIFtvcHRpb25zXSBUaGUgRm9jdXNUcmFwIGRlYWN0aXZhdGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZGVhY3RpdmF0ZUZvY3VzVHJhcChjb21wb25lbnQsIG9wdGlvbnMpIHtcbiAgY29tcG9uZW50LmZvY3VzVHJhcD8uZGVhY3RpdmF0ZShvcHRpb25zKTtcbn1cbi8qKlxuICogSGVscGVyIHRvIHVwZGF0ZSB0aGUgZWxlbWVudChzKSB0aGF0IGFyZSB1c2VkIHdpdGhpbiB0aGUgRm9jdXNUcmFwIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0ZvY3VzVHJhcENvbXBvbmVudH0gY29tcG9uZW50IFRoZSBGb2N1c1RyYXAgY29tcG9uZW50LlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbGNpdGUtbW9kYWxcIik7XG4gKiBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYWxjaXRlLWlucHV0XCIpO1xuICogY29udGVudC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gKiBhd2FpdCBpbnB1dC5jb21wb25lbnRPblJlYWR5KCk7XG4gKiBhd2FpdCBtb2RhbC51cGRhdGVGb2N1c1RyYXBFbGVtZW50cygpO1xuICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IGlucHV0LnNldEZvY3VzKCkpO1xuICovXG5mdW5jdGlvbiB1cGRhdGVGb2N1c1RyYXBFbGVtZW50cyhjb21wb25lbnQpIHtcbiAgY29tcG9uZW50LmZvY3VzVHJhcD8udXBkYXRlQ29udGFpbmVyRWxlbWVudHMoY29tcG9uZW50LmVsKTtcbn1cblxuZXhwb3J0IHsgYWN0aXZhdGVGb2N1c1RyYXAgYXMgYSwgY29ubmVjdEZvY3VzVHJhcCBhcyBjLCBkZWFjdGl2YXRlRm9jdXNUcmFwIGFzIGQsIHVwZGF0ZUZvY3VzVHJhcEVsZW1lbnRzIGFzIHUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==