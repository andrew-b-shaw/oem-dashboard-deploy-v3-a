"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_floating-ui-8d547175_js-node_modules_es-864f37"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/floating-ui-8d547175.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/floating-ui-8d547175.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ FloatingCSS),
/* harmony export */   "a": () => (/* binding */ disconnectFloatingUI),
/* harmony export */   "b": () => (/* binding */ defaultOffsetDistance),
/* harmony export */   "c": () => (/* binding */ connectFloatingUI),
/* harmony export */   "d": () => (/* binding */ defaultMenuPlacement),
/* harmony export */   "f": () => (/* binding */ filterComputedPlacements),
/* harmony export */   "r": () => (/* binding */ reposition)
/* harmony export */ });
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debounce-0950a9b8.js */ "./node_modules/@esri/calcite-components/dist/esm/debounce-0950a9b8.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */




function getAlignment(placement) {
  return placement.split('-')[1];
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function getSide(placement) {
  return placement.split('-')[0];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === 'x';
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

const min$1 = Math.min;
const max$1 = Math.max;

function within(min$1$1, value, max$1$1) {
  return max$1(min$1$1, min$1(value, max$1$1));
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min$1(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min$1(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = within(min$1$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. This stops `shift()` from taking action, but can
    // be worked around by calling it again after the `arrow()` if desired.
    const shouldAddOffset = getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min$1$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1$1 ? min$1$1 - center : max - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset + alignmentOffset
      }
    };
  }
});

const sides = ['top', 'right', 'bottom', 'left'];
const allPlacements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);

const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = allPlacements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const placements = alignment !== undefined || allowedPlacements === allPlacements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const {
        main,
        cross
      } = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = getAlignment(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};

function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support.
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  return node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const safari = isSafari();
  const css = getComputedStyle$1(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return css.transform !== 'none' || css.perspective !== 'none' || !safari && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !safari && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function isSafari() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}

const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createEmptyCoords = v => ({
  x: v,
  y: v
});

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createEmptyCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createEmptyCoords(0);
function getVisualOffsets(element, isFixed, floatingOffsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (isFixed === void 0) {
    isFixed = true;
  }
  if (!isSafari()) {
    return noOffsets;
  }
  const win = element ? getWindow(element) : window;
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== win) {
    return noOffsets;
  }
  return {
    x: ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0,
    y: ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0
  };
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createEmptyCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = getVisualOffsets(domElement, isFixedStrategy, offsetParent);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createEmptyCoords(1);
  const offsets = createEmptyCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isSafari();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createEmptyCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  return getCssDimensions(element);
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const window = getWindow(element);
  if (!isHTMLElement(element)) {
    return window;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createEmptyCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...(await getDimensionsFn(floating))
      }
    };
  },
  getClientRects: element => Array.from(element.getClientRects()),
  isRTL: element => getComputedStyle$1(element).direction === 'rtl'
};

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    let isFirstUpdate = true;
    io = new IntersectionObserver(entries => {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (ratio === 0) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }, {
      rootMargin,
      threshold
    });
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(update);
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

/**
 * This module helps users provide custom configuration for component internals.
 *
 * @internal
 */
const configOverrides = globalThis["calciteComponentsConfig"];
const config = {
  /**
   * We apply a custom fix to improve positioning for non-Chromium browsers.
   * The fix comes at a performance cost, so provides users a way to opt-out if necessary.
   *
   * @internal
   */
  floatingUINonChromiumPositioningFix: true,
  ...configOverrides
};

const floatingUIBrowserCheck = patchFloatingUiForNonChromiumBrowsers();
function isChrome109OrAbove() {
  const uaData = (0,_browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_1__.a)();
  if (uaData?.brands) {
    return !!uaData.brands.find(({ brand, version }) => (brand === "Google Chrome" || brand === "Chromium") && Number(version) >= 109);
  }
  return !!navigator.userAgent.split(" ").find((ua) => {
    const [browser, version] = ua.split("/");
    return browser === "Chrome" && parseInt(version) >= 109;
  });
}
async function patchFloatingUiForNonChromiumBrowsers() {
  if (config.floatingUINonChromiumPositioningFix &&
    // ⚠️ browser-sniffing is not a best practice and should be avoided ⚠️
    (/firefox|safari/i.test((0,_browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_1__.g)()) || isChrome109OrAbove())) {
    const { offsetParent } = await __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_composed-offset-position_esm-4bae6a0b_js").then(__webpack_require__.bind(__webpack_require__, /*! ./composed-offset-position.esm-4bae6a0b.js */ "./node_modules/@esri/calcite-components/dist/esm/composed-offset-position.esm-4bae6a0b.js"));
    const originalGetOffsetParent = platform.getOffsetParent;
    platform.getOffsetParent = (element) => originalGetOffsetParent(element, offsetParent);
  }
}
/**
 * Positions the floating element relative to the reference element.
 *
 * **Note:** exported for testing purposes only
 *
 * @param root0
 * @param root0.referenceEl
 * @param root0.floatingEl
 * @param root0.overlayPositioning
 * @param root0.placement
 * @param root0.flipDisabled
 * @param root0.flipPlacements
 * @param root0.offsetDistance
 * @param root0.offsetSkidding
 * @param root0.arrowEl
 * @param root0.type
 * @param component
 * @param root0.referenceEl.referenceEl
 * @param root0.referenceEl.floatingEl
 * @param root0.referenceEl.overlayPositioning
 * @param root0.referenceEl.placement
 * @param root0.referenceEl.flipDisabled
 * @param root0.referenceEl.flipPlacements
 * @param root0.referenceEl.offsetDistance
 * @param root0.referenceEl.offsetSkidding
 * @param root0.referenceEl.arrowEl
 * @param root0.referenceEl.type
 * @param component.referenceEl
 * @param component.floatingEl
 * @param component.overlayPositioning
 * @param component.placement
 * @param component.flipDisabled
 * @param component.flipPlacements
 * @param component.offsetDistance
 * @param component.offsetSkidding
 * @param component.arrowEl
 * @param component.type
 */
const positionFloatingUI = 
/* we export arrow function to allow us to spy on it during testing */
async (component, { referenceEl, floatingEl, overlayPositioning = "absolute", placement, flipDisabled, flipPlacements, offsetDistance, offsetSkidding, arrowEl, type }) => {
  if (!referenceEl || !floatingEl) {
    return null;
  }
  await floatingUIBrowserCheck;
  const { x, y, placement: effectivePlacement, strategy: position, middlewareData } = await computePosition(referenceEl, floatingEl, {
    strategy: overlayPositioning,
    placement: placement === "auto" || placement === "auto-start" || placement === "auto-end"
      ? undefined
      : getEffectivePlacement(floatingEl, placement),
    middleware: getMiddleware({
      placement,
      flipDisabled,
      flipPlacements,
      offsetDistance,
      offsetSkidding,
      arrowEl,
      type
    })
  });
  if (arrowEl && middlewareData.arrow) {
    const { x, y } = middlewareData.arrow;
    const side = effectivePlacement.split("-")[0];
    const alignment = x != null ? "left" : "top";
    const transform = ARROW_CSS_TRANSFORM[side];
    const reset = { left: "", top: "", bottom: "", right: "" };
    if ("floatingLayout" in component) {
      component.floatingLayout = side === "left" || side === "right" ? "horizontal" : "vertical";
    }
    Object.assign(arrowEl.style, {
      ...reset,
      [alignment]: `${alignment == "left" ? x : y}px`,
      [side]: "100%",
      transform
    });
  }
  const referenceHidden = middlewareData.hide?.referenceHidden;
  const visibility = referenceHidden ? "hidden" : null;
  const pointerEvents = visibility ? "none" : null;
  floatingEl.setAttribute(placementDataAttribute, effectivePlacement);
  const transform = `translate(${Math.round(x)}px,${Math.round(y)}px)`;
  Object.assign(floatingEl.style, {
    visibility,
    pointerEvents,
    position,
    top: "0",
    left: "0",
    transform
  });
};
/**
 * Exported for testing purposes only
 */
const placementDataAttribute = "data-placement";
/**
 * Exported for testing purposes only
 */
const repositionDebounceTimeout = 100;
const effectivePlacements = [
  "top",
  "bottom",
  "right",
  "left",
  "top-start",
  "top-end",
  "bottom-start",
  "bottom-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
];
const defaultMenuPlacement = "bottom-start";
const FloatingCSS = {
  animation: "calcite-floating-ui-anim",
  animationActive: "calcite-floating-ui-anim--active"
};
function getMiddleware({ placement, flipDisabled, flipPlacements, offsetDistance, offsetSkidding, arrowEl, type }) {
  const defaultMiddleware = [shift(), hide()];
  if (type === "menu") {
    return [
      ...defaultMiddleware,
      flip({
        fallbackPlacements: flipPlacements || ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
      })
    ];
  }
  if (type === "popover" || type === "tooltip") {
    const middleware = [
      ...defaultMiddleware,
      offset({
        mainAxis: typeof offsetDistance === "number" ? offsetDistance : 0,
        crossAxis: typeof offsetSkidding === "number" ? offsetSkidding : 0
      })
    ];
    if (placement === "auto" || placement === "auto-start" || placement === "auto-end") {
      middleware.push(autoPlacement({ alignment: placement === "auto-start" ? "start" : placement === "auto-end" ? "end" : null }));
    }
    else if (!flipDisabled) {
      middleware.push(flip(flipPlacements ? { fallbackPlacements: flipPlacements } : {}));
    }
    if (arrowEl) {
      middleware.push(arrow({
        element: arrowEl
      }));
    }
    return middleware;
  }
  return [];
}
function filterComputedPlacements(placements, el) {
  const filteredPlacements = placements.filter((placement) => effectivePlacements.includes(placement));
  if (filteredPlacements.length !== placements.length) {
    console.warn(`${el.tagName}: Invalid value found in: flipPlacements. Try any of these: ${effectivePlacements
      .map((placement) => `"${placement}"`)
      .join(", ")
      .trim()}`, { el });
  }
  return filteredPlacements;
}
function getEffectivePlacement(floatingEl, placement) {
  const placements = ["left", "right"];
  if ((0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.b)(floatingEl) === "rtl") {
    placements.reverse();
  }
  return placement.replace(/leading/gi, placements[0]).replace(/trailing/gi, placements[1]);
}
/**
 * Convenience function to manage `reposition` calls for FloatingUIComponents that use `positionFloatingUI.
 *
 * Note: this is not needed for components that use `calcite-popover`.
 *
 * @param component
 * @param options
 * @param options.referenceEl
 * @param options.floatingEl
 * @param options.overlayPositioning
 * @param options.placement
 * @param options.flipDisabled
 * @param options.flipPlacements
 * @param options.offsetDistance
 * @param options.offsetSkidding
 * @param options.arrowEl
 * @param options.type
 * @param delayed
 */
async function reposition(component, options, delayed = false) {
  if (!component.open) {
    return;
  }
  const positionFunction = delayed ? getDebouncedReposition(component) : positionFloatingUI;
  return positionFunction(component, options);
}
function getDebouncedReposition(component) {
  let debounced = componentToDebouncedRepositionMap.get(component);
  if (debounced) {
    return debounced;
  }
  debounced = (0,_debounce_0950a9b8_js__WEBPACK_IMPORTED_MODULE_2__.d)(positionFloatingUI, repositionDebounceTimeout, {
    leading: true,
    maxWait: repositionDebounceTimeout
  });
  componentToDebouncedRepositionMap.set(component, debounced);
  return debounced;
}
const ARROW_CSS_TRANSFORM = {
  top: "",
  left: "rotate(-90deg)",
  bottom: "rotate(180deg)",
  right: "rotate(90deg)"
};
/**
 * Exported for testing purposes only
 *
 * @internal
 */
const cleanupMap = new WeakMap();
const componentToDebouncedRepositionMap = new WeakMap();
/**
 * Helper to set up floating element interactions on connectedCallback.
 *
 * @param component
 * @param referenceEl
 * @param floatingEl
 */
function connectFloatingUI(component, referenceEl, floatingEl) {
  if (!floatingEl || !referenceEl) {
    return;
  }
  disconnectFloatingUI(component, referenceEl, floatingEl);
  Object.assign(floatingEl.style, {
    visibility: "hidden",
    pointerEvents: "none",
    // initial positioning based on https://floating-ui.com/docs/computePosition#initial-layout
    position: component.overlayPositioning,
    top: "0",
    left: "0"
  });
  const runAutoUpdate = autoUpdate
    ;
  cleanupMap.set(component, runAutoUpdate(referenceEl, floatingEl, () => component.reposition()));
}
/**
 * Helper to tear down floating element interactions on disconnectedCallback.
 *
 * @param component
 * @param referenceEl
 * @param floatingEl
 */
function disconnectFloatingUI(component, referenceEl, floatingEl) {
  if (!floatingEl || !referenceEl) {
    return;
  }
  cleanupMap.get(component)?.();
  cleanupMap.delete(component);
  componentToDebouncedRepositionMap.get(component)?.cancel();
  componentToDebouncedRepositionMap.delete(component);
}
const visiblePointerSize = 4;
/**
 * Default offset the position of the floating element away from the reference element.
 *
 * @default 6
 */
const defaultOffsetDistance = Math.ceil(Math.hypot(visiblePointerSize, visiblePointerSize));




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMzA4NWZhNDMwYjRlZTM3NjYxZGNlM2IxYzVlMGJkOWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUQ7QUFDZ0M7QUFDaEM7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHVEQUFnQjtBQUNqQztBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdURBQWtCO0FBQzlDLFlBQVksZUFBZSxRQUFRLGtVQUFvRDtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtKQUFrSjtBQUN0SztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMEVBQTBFO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxjQUFjLEtBQUssY0FBYztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3RkFBd0Y7QUFDakg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHNDQUFzQywyRkFBMkY7QUFDakk7QUFDQTtBQUNBLDhDQUE4QyxxQ0FBcUMsSUFBSTtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVcsOERBQThEO0FBQzdGLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0EsY0FBYyxLQUFLLElBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQWE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0RBQVE7QUFDdEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy96RHRMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxREFBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU4RyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2Zsb2F0aW5nLXVpLThkNTQ3MTc1LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL29wZW5DbG9zZUNvbXBvbmVudC0yMWQyYTZhYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgYiBhcyBnZXRFbGVtZW50RGlyIH0gZnJvbSAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0IHsgZyBhcyBnZXRVc2VyQWdlbnRTdHJpbmcsIGEgYXMgZ2V0VXNlckFnZW50RGF0YSB9IGZyb20gJy4vYnJvd3Nlci05OWJjNjJjZi5qcyc7XG5pbXBvcnQgeyBkIGFzIGRlYm91bmNlIH0gZnJvbSAnLi9kZWJvdW5jZS0wOTUwYTliOC5qcyc7XG5cbmZ1bmN0aW9uIGdldEFsaWdubWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufVxuXG5mdW5jdGlvbiBnZXRMZW5ndGhGcm9tQXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG59XG5cbmZ1bmN0aW9uIGdldFNpZGUocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn1cblxuZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5jbHVkZXMoZ2V0U2lkZShwbGFjZW1lbnQpKSA/ICd4JyA6ICd5Jztcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUNvb3Jkc0Zyb21QbGFjZW1lbnQoX3JlZiwgcGxhY2VtZW50LCBydGwpIHtcbiAgbGV0IHtcbiAgICByZWZlcmVuY2UsXG4gICAgZmxvYXRpbmdcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBmbG9hdGluZy53aWR0aCAvIDI7XG4gIGNvbnN0IGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZmxvYXRpbmcuaGVpZ2h0IC8gMjtcbiAgY29uc3QgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgY29uc3QgbGVuZ3RoID0gZ2V0TGVuZ3RoRnJvbUF4aXMobWFpbkF4aXMpO1xuICBjb25zdCBjb21tb25BbGlnbiA9IHJlZmVyZW5jZVtsZW5ndGhdIC8gMiAtIGZsb2F0aW5nW2xlbmd0aF0gLyAyO1xuICBjb25zdCBzaWRlID0gZ2V0U2lkZShwbGFjZW1lbnQpO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gbWFpbkF4aXMgPT09ICd4JztcbiAgbGV0IGNvb3JkcztcbiAgc3dpdGNoIChzaWRlKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIGNvb3JkcyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBmbG9hdGluZy5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgY29vcmRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICBjb29yZHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZmxvYXRpbmcud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29vcmRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cbiAgc3dpdGNoIChnZXRBbGlnbm1lbnQocGxhY2VtZW50KSkge1xuICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgIGNvb3Jkc1ttYWluQXhpc10gLT0gY29tbW9uQWxpZ24gKiAocnRsICYmIGlzVmVydGljYWwgPyAtMSA6IDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZW5kJzpcbiAgICAgIGNvb3Jkc1ttYWluQXhpc10gKz0gY29tbW9uQWxpZ24gKiAocnRsICYmIGlzVmVydGljYWwgPyAtMSA6IDEpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgYHhgIGFuZCBgeWAgY29vcmRpbmF0ZXMgdGhhdCB3aWxsIHBsYWNlIHRoZSBmbG9hdGluZyBlbGVtZW50XG4gKiBuZXh0IHRvIGEgcmVmZXJlbmNlIGVsZW1lbnQgd2hlbiBpdCBpcyBnaXZlbiBhIGNlcnRhaW4gcG9zaXRpb25pbmcgc3RyYXRlZ3kuXG4gKlxuICogVGhpcyBleHBvcnQgZG9lcyBub3QgaGF2ZSBhbnkgYHBsYXRmb3JtYCBpbnRlcmZhY2UgbG9naWMuIFlvdSB3aWxsIG5lZWQgdG9cbiAqIHdyaXRlIG9uZSBmb3IgdGhlIHBsYXRmb3JtIHlvdSBhcmUgdXNpbmcgRmxvYXRpbmcgVUkgd2l0aC5cbiAqL1xuY29uc3QgY29tcHV0ZVBvc2l0aW9uJDEgPSBhc3luYyAocmVmZXJlbmNlLCBmbG9hdGluZywgY29uZmlnKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwbGFjZW1lbnQgPSAnYm90dG9tJyxcbiAgICBzdHJhdGVneSA9ICdhYnNvbHV0ZScsXG4gICAgbWlkZGxld2FyZSA9IFtdLFxuICAgIHBsYXRmb3JtXG4gIH0gPSBjb25maWc7XG4gIGNvbnN0IHZhbGlkTWlkZGxld2FyZSA9IG1pZGRsZXdhcmUuZmlsdGVyKEJvb2xlYW4pO1xuICBjb25zdCBydGwgPSBhd2FpdCAocGxhdGZvcm0uaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzUlRMKGZsb2F0aW5nKSk7XG4gIGxldCByZWN0cyA9IGF3YWl0IHBsYXRmb3JtLmdldEVsZW1lbnRSZWN0cyh7XG4gICAgcmVmZXJlbmNlLFxuICAgIGZsb2F0aW5nLFxuICAgIHN0cmF0ZWd5XG4gIH0pO1xuICBsZXQge1xuICAgIHgsXG4gICAgeVxuICB9ID0gY29tcHV0ZUNvb3Jkc0Zyb21QbGFjZW1lbnQocmVjdHMsIHBsYWNlbWVudCwgcnRsKTtcbiAgbGV0IHN0YXRlZnVsUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICBsZXQgbWlkZGxld2FyZURhdGEgPSB7fTtcbiAgbGV0IHJlc2V0Q291bnQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbGlkTWlkZGxld2FyZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBmblxuICAgIH0gPSB2YWxpZE1pZGRsZXdhcmVbaV07XG4gICAgY29uc3Qge1xuICAgICAgeDogbmV4dFgsXG4gICAgICB5OiBuZXh0WSxcbiAgICAgIGRhdGEsXG4gICAgICByZXNldFxuICAgIH0gPSBhd2FpdCBmbih7XG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIGluaXRpYWxQbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudDogc3RhdGVmdWxQbGFjZW1lbnQsXG4gICAgICBzdHJhdGVneSxcbiAgICAgIG1pZGRsZXdhcmVEYXRhLFxuICAgICAgcmVjdHMsXG4gICAgICBwbGF0Zm9ybSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgZmxvYXRpbmdcbiAgICAgIH1cbiAgICB9KTtcbiAgICB4ID0gbmV4dFggIT0gbnVsbCA/IG5leHRYIDogeDtcbiAgICB5ID0gbmV4dFkgIT0gbnVsbCA/IG5leHRZIDogeTtcbiAgICBtaWRkbGV3YXJlRGF0YSA9IHtcbiAgICAgIC4uLm1pZGRsZXdhcmVEYXRhLFxuICAgICAgW25hbWVdOiB7XG4gICAgICAgIC4uLm1pZGRsZXdhcmVEYXRhW25hbWVdLFxuICAgICAgICAuLi5kYXRhXG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAocmVzZXQgJiYgcmVzZXRDb3VudCA8PSA1MCkge1xuICAgICAgcmVzZXRDb3VudCsrO1xuICAgICAgaWYgKHR5cGVvZiByZXNldCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKHJlc2V0LnBsYWNlbWVudCkge1xuICAgICAgICAgIHN0YXRlZnVsUGxhY2VtZW50ID0gcmVzZXQucGxhY2VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNldC5yZWN0cykge1xuICAgICAgICAgIHJlY3RzID0gcmVzZXQucmVjdHMgPT09IHRydWUgPyBhd2FpdCBwbGF0Zm9ybS5nZXRFbGVtZW50UmVjdHMoe1xuICAgICAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICAgICAgZmxvYXRpbmcsXG4gICAgICAgICAgICBzdHJhdGVneVxuICAgICAgICAgIH0pIDogcmVzZXQucmVjdHM7XG4gICAgICAgIH1cbiAgICAgICAgKHtcbiAgICAgICAgICB4LFxuICAgICAgICAgIHlcbiAgICAgICAgfSA9IGNvbXB1dGVDb29yZHNGcm9tUGxhY2VtZW50KHJlY3RzLCBzdGF0ZWZ1bFBsYWNlbWVudCwgcnRsKSk7XG4gICAgICB9XG4gICAgICBpID0gLTE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4LFxuICAgIHksXG4gICAgcGxhY2VtZW50OiBzdGF0ZWZ1bFBsYWNlbWVudCxcbiAgICBzdHJhdGVneSxcbiAgICBtaWRkbGV3YXJlRGF0YVxuICB9O1xufTtcblxuZnVuY3Rpb24gZXZhbHVhdGUodmFsdWUsIHBhcmFtKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZShwYXJhbSkgOiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kUGFkZGluZ09iamVjdChwYWRkaW5nKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIC4uLnBhZGRpbmdcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0U2lkZU9iamVjdEZyb21QYWRkaW5nKHBhZGRpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IGV4cGFuZFBhZGRpbmdPYmplY3QocGFkZGluZykgOiB7XG4gICAgdG9wOiBwYWRkaW5nLFxuICAgIHJpZ2h0OiBwYWRkaW5nLFxuICAgIGJvdHRvbTogcGFkZGluZyxcbiAgICBsZWZ0OiBwYWRkaW5nXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4ge1xuICAgIC4uLnJlY3QsXG4gICAgdG9wOiByZWN0LnksXG4gICAgbGVmdDogcmVjdC54LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB3aXRoIGFuIG9iamVjdCBvZiBvdmVyZmxvdyBzaWRlIG9mZnNldHMgdGhhdCBkZXRlcm1pbmUgaG93IG11Y2ggdGhlXG4gKiBlbGVtZW50IGlzIG92ZXJmbG93aW5nIGEgZ2l2ZW4gY2xpcHBpbmcgYm91bmRhcnkgb24gZWFjaCBzaWRlLlxuICogLSBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBib3VuZGFyeSBieSB0aGF0IG51bWJlciBvZiBwaXhlbHNcbiAqIC0gbmVnYXRpdmUgPSBob3cgbWFueSBwaXhlbHMgbGVmdCBiZWZvcmUgaXQgd2lsbCBvdmVyZmxvd1xuICogLSAwID0gbGllcyBmbHVzaCB3aXRoIHRoZSBib3VuZGFyeVxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2RldGVjdE92ZXJmbG93XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGRldGVjdE92ZXJmbG93KHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBfYXdhaXQkcGxhdGZvcm0kaXNFbGU7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgY29uc3Qge1xuICAgIHgsXG4gICAgeSxcbiAgICBwbGF0Zm9ybSxcbiAgICByZWN0cyxcbiAgICBlbGVtZW50cyxcbiAgICBzdHJhdGVneVxuICB9ID0gc3RhdGU7XG4gIGNvbnN0IHtcbiAgICBib3VuZGFyeSA9ICdjbGlwcGluZ0FuY2VzdG9ycycsXG4gICAgcm9vdEJvdW5kYXJ5ID0gJ3ZpZXdwb3J0JyxcbiAgICBlbGVtZW50Q29udGV4dCA9ICdmbG9hdGluZycsXG4gICAgYWx0Qm91bmRhcnkgPSBmYWxzZSxcbiAgICBwYWRkaW5nID0gMFxuICB9ID0gZXZhbHVhdGUob3B0aW9ucywgc3RhdGUpO1xuICBjb25zdCBwYWRkaW5nT2JqZWN0ID0gZ2V0U2lkZU9iamVjdEZyb21QYWRkaW5nKHBhZGRpbmcpO1xuICBjb25zdCBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09ICdmbG9hdGluZycgPyAncmVmZXJlbmNlJyA6ICdmbG9hdGluZyc7XG4gIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIGNvbnN0IGNsaXBwaW5nQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoYXdhaXQgcGxhdGZvcm0uZ2V0Q2xpcHBpbmdSZWN0KHtcbiAgICBlbGVtZW50OiAoKF9hd2FpdCRwbGF0Zm9ybSRpc0VsZSA9IGF3YWl0IChwbGF0Zm9ybS5pc0VsZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzRWxlbWVudChlbGVtZW50KSkpICE9IG51bGwgPyBfYXdhaXQkcGxhdGZvcm0kaXNFbGUgOiB0cnVlKSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IChhd2FpdCAocGxhdGZvcm0uZ2V0RG9jdW1lbnRFbGVtZW50ID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5nZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudHMuZmxvYXRpbmcpKSksXG4gICAgYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5LFxuICAgIHN0cmF0ZWd5XG4gIH0pKTtcbiAgY29uc3QgcmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSAnZmxvYXRpbmcnID8ge1xuICAgIC4uLnJlY3RzLmZsb2F0aW5nLFxuICAgIHgsXG4gICAgeVxuICB9IDogcmVjdHMucmVmZXJlbmNlO1xuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBhd2FpdCAocGxhdGZvcm0uZ2V0T2Zmc2V0UGFyZW50ID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5nZXRPZmZzZXRQYXJlbnQoZWxlbWVudHMuZmxvYXRpbmcpKTtcbiAgY29uc3Qgb2Zmc2V0U2NhbGUgPSAoYXdhaXQgKHBsYXRmb3JtLmlzRWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uaXNFbGVtZW50KG9mZnNldFBhcmVudCkpKSA/IChhd2FpdCAocGxhdGZvcm0uZ2V0U2NhbGUgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmdldFNjYWxlKG9mZnNldFBhcmVudCkpKSB8fCB7XG4gICAgeDogMSxcbiAgICB5OiAxXG4gIH0gOiB7XG4gICAgeDogMSxcbiAgICB5OiAxXG4gIH07XG4gIGNvbnN0IGVsZW1lbnRDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChwbGF0Zm9ybS5jb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCA/IGF3YWl0IHBsYXRmb3JtLmNvbnZlcnRPZmZzZXRQYXJlbnRSZWxhdGl2ZVJlY3RUb1ZpZXdwb3J0UmVsYXRpdmVSZWN0KHtcbiAgICByZWN0LFxuICAgIG9mZnNldFBhcmVudCxcbiAgICBzdHJhdGVneVxuICB9KSA6IHJlY3QpO1xuICByZXR1cm4ge1xuICAgIHRvcDogKGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCkgLyBvZmZzZXRTY2FsZS55LFxuICAgIGJvdHRvbTogKGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSkgLyBvZmZzZXRTY2FsZS55LFxuICAgIGxlZnQ6IChjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQpIC8gb2Zmc2V0U2NhbGUueCxcbiAgICByaWdodDogKGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodCkgLyBvZmZzZXRTY2FsZS54XG4gIH07XG59XG5cbmNvbnN0IG1pbiQxID0gTWF0aC5taW47XG5jb25zdCBtYXgkMSA9IE1hdGgubWF4O1xuXG5mdW5jdGlvbiB3aXRoaW4obWluJDEkMSwgdmFsdWUsIG1heCQxJDEpIHtcbiAgcmV0dXJuIG1heCQxKG1pbiQxJDEsIG1pbiQxKHZhbHVlLCBtYXgkMSQxKSk7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgZGF0YSB0byBwb3NpdGlvbiBhbiBpbm5lciBlbGVtZW50IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IHNvIHRoYXQgaXRcbiAqIGFwcGVhcnMgY2VudGVyZWQgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2Fycm93XG4gKi9cbmNvbnN0IGFycm93ID0gb3B0aW9ucyA9PiAoe1xuICBuYW1lOiAnYXJyb3cnLFxuICBvcHRpb25zLFxuICBhc3luYyBmbihzdGF0ZSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgcGxhY2VtZW50LFxuICAgICAgcmVjdHMsXG4gICAgICBwbGF0Zm9ybSxcbiAgICAgIGVsZW1lbnRzXG4gICAgfSA9IHN0YXRlO1xuICAgIC8vIFNpbmNlIGBlbGVtZW50YCBpcyByZXF1aXJlZCwgd2UgZG9uJ3QgUGFydGlhbDw+IHRoZSB0eXBlLlxuICAgIGNvbnN0IHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBwYWRkaW5nID0gMFxuICAgIH0gPSBldmFsdWF0ZShvcHRpb25zLCBzdGF0ZSkgfHwge307XG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwYWRkaW5nT2JqZWN0ID0gZ2V0U2lkZU9iamVjdEZyb21QYWRkaW5nKHBhZGRpbmcpO1xuICAgIGNvbnN0IGNvb3JkcyA9IHtcbiAgICAgIHgsXG4gICAgICB5XG4gICAgfTtcbiAgICBjb25zdCBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gICAgY29uc3QgbGVuZ3RoID0gZ2V0TGVuZ3RoRnJvbUF4aXMoYXhpcyk7XG4gICAgY29uc3QgYXJyb3dEaW1lbnNpb25zID0gYXdhaXQgcGxhdGZvcm0uZ2V0RGltZW5zaW9ucyhlbGVtZW50KTtcbiAgICBjb25zdCBpc1lBeGlzID0gYXhpcyA9PT0gJ3knO1xuICAgIGNvbnN0IG1pblByb3AgPSBpc1lBeGlzID8gJ3RvcCcgOiAnbGVmdCc7XG4gICAgY29uc3QgbWF4UHJvcCA9IGlzWUF4aXMgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gICAgY29uc3QgY2xpZW50UHJvcCA9IGlzWUF4aXMgPyAnY2xpZW50SGVpZ2h0JyA6ICdjbGllbnRXaWR0aCc7XG4gICAgY29uc3QgZW5kRGlmZiA9IHJlY3RzLnJlZmVyZW5jZVtsZW5ndGhdICsgcmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gY29vcmRzW2F4aXNdIC0gcmVjdHMuZmxvYXRpbmdbbGVuZ3RoXTtcbiAgICBjb25zdCBzdGFydERpZmYgPSBjb29yZHNbYXhpc10gLSByZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gICAgY29uc3QgYXJyb3dPZmZzZXRQYXJlbnQgPSBhd2FpdCAocGxhdGZvcm0uZ2V0T2Zmc2V0UGFyZW50ID09IG51bGwgPyB2b2lkIDAgOiBwbGF0Zm9ybS5nZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkpO1xuICAgIGxldCBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBhcnJvd09mZnNldFBhcmVudFtjbGllbnRQcm9wXSA6IDA7XG5cbiAgICAvLyBET00gcGxhdGZvcm0gY2FuIHJldHVybiBgd2luZG93YCBhcyB0aGUgYG9mZnNldFBhcmVudGAuXG4gICAgaWYgKCFjbGllbnRTaXplIHx8ICEoYXdhaXQgKHBsYXRmb3JtLmlzRWxlbWVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uaXNFbGVtZW50KGFycm93T2Zmc2V0UGFyZW50KSkpKSB7XG4gICAgICBjbGllbnRTaXplID0gZWxlbWVudHMuZmxvYXRpbmdbY2xpZW50UHJvcF0gfHwgcmVjdHMuZmxvYXRpbmdbbGVuZ3RoXTtcbiAgICB9XG4gICAgY29uc3QgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7XG5cbiAgICAvLyBJZiB0aGUgcGFkZGluZyBpcyBsYXJnZSBlbm91Z2ggdGhhdCBpdCBjYXVzZXMgdGhlIGFycm93IHRvIG5vIGxvbmdlciBiZVxuICAgIC8vIGNlbnRlcmVkLCBtb2RpZnkgdGhlIHBhZGRpbmcgc28gdGhhdCBpdCBpcyBjZW50ZXJlZC5cbiAgICBjb25zdCBsYXJnZXN0UG9zc2libGVQYWRkaW5nID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd0RpbWVuc2lvbnNbbGVuZ3RoXSAvIDIgLSAxO1xuICAgIGNvbnN0IG1pblBhZGRpbmcgPSBtaW4kMShwYWRkaW5nT2JqZWN0W21pblByb3BdLCBsYXJnZXN0UG9zc2libGVQYWRkaW5nKTtcbiAgICBjb25zdCBtYXhQYWRkaW5nID0gbWluJDEocGFkZGluZ09iamVjdFttYXhQcm9wXSwgbGFyZ2VzdFBvc3NpYmxlUGFkZGluZyk7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIGZsb2F0aW5nIGVsZW1lbnQgaWYgdGhlIGNlbnRlclxuICAgIC8vIHBvaW50IGlzIG91dHNpZGUgdGhlIGZsb2F0aW5nIGVsZW1lbnQncyBib3VuZHMuXG4gICAgY29uc3QgbWluJDEkMSA9IG1pblBhZGRpbmc7XG4gICAgY29uc3QgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93RGltZW5zaW9uc1tsZW5ndGhdIC0gbWF4UGFkZGluZztcbiAgICBjb25zdCBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93RGltZW5zaW9uc1tsZW5ndGhdIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICAgIGNvbnN0IG9mZnNldCA9IHdpdGhpbihtaW4kMSQxLCBjZW50ZXIsIG1heCk7XG5cbiAgICAvLyBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsIGVub3VnaCB0aGF0IHRoZSBhcnJvdydzIHBhZGRpbmcgY2F1c2VzIGl0IHRvXG4gICAgLy8gdG8gcG9pbnQgdG8gbm90aGluZyBmb3IgYW4gYWxpZ25lZCBwbGFjZW1lbnQsIGFkanVzdCB0aGUgb2Zmc2V0IG9mIHRoZVxuICAgIC8vIGZsb2F0aW5nIGVsZW1lbnQgaXRzZWxmLiBUaGlzIHN0b3BzIGBzaGlmdCgpYCBmcm9tIHRha2luZyBhY3Rpb24sIGJ1dCBjYW5cbiAgICAvLyBiZSB3b3JrZWQgYXJvdW5kIGJ5IGNhbGxpbmcgaXQgYWdhaW4gYWZ0ZXIgdGhlIGBhcnJvdygpYCBpZiBkZXNpcmVkLlxuICAgIGNvbnN0IHNob3VsZEFkZE9mZnNldCA9IGdldEFsaWdubWVudChwbGFjZW1lbnQpICE9IG51bGwgJiYgY2VudGVyICE9IG9mZnNldCAmJiByZWN0cy5yZWZlcmVuY2VbbGVuZ3RoXSAvIDIgLSAoY2VudGVyIDwgbWluJDEkMSA/IG1pblBhZGRpbmcgOiBtYXhQYWRkaW5nKSAtIGFycm93RGltZW5zaW9uc1tsZW5ndGhdIC8gMiA8IDA7XG4gICAgY29uc3QgYWxpZ25tZW50T2Zmc2V0ID0gc2hvdWxkQWRkT2Zmc2V0ID8gY2VudGVyIDwgbWluJDEkMSA/IG1pbiQxJDEgLSBjZW50ZXIgOiBtYXggLSBjZW50ZXIgOiAwO1xuICAgIHJldHVybiB7XG4gICAgICBbYXhpc106IGNvb3Jkc1theGlzXSAtIGFsaWdubWVudE9mZnNldCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgW2F4aXNdOiBvZmZzZXQsXG4gICAgICAgIGNlbnRlck9mZnNldDogY2VudGVyIC0gb2Zmc2V0ICsgYWxpZ25tZW50T2Zmc2V0XG4gICAgICB9XG4gICAgfTtcbiAgfVxufSk7XG5cbmNvbnN0IHNpZGVzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcbmNvbnN0IGFsbFBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovc2lkZXMucmVkdWNlKChhY2MsIHNpZGUpID0+IGFjYy5jb25jYXQoc2lkZSwgc2lkZSArIFwiLXN0YXJ0XCIsIHNpZGUgKyBcIi1lbmRcIiksIFtdKTtcblxuY29uc3Qgb3Bwb3NpdGVTaWRlTWFwID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIHNpZGUgPT4gb3Bwb3NpdGVTaWRlTWFwW3NpZGVdKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxpZ25tZW50U2lkZXMocGxhY2VtZW50LCByZWN0cywgcnRsKSB7XG4gIGlmIChydGwgPT09IHZvaWQgMCkge1xuICAgIHJ0bCA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IGFsaWdubWVudCA9IGdldEFsaWdubWVudChwbGFjZW1lbnQpO1xuICBjb25zdCBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBjb25zdCBsZW5ndGggPSBnZXRMZW5ndGhGcm9tQXhpcyhtYWluQXhpcyk7XG4gIGxldCBtYWluQWxpZ25tZW50U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBhbGlnbm1lbnQgPT09IChydGwgPyAnZW5kJyA6ICdzdGFydCcpID8gJ3JpZ2h0JyA6ICdsZWZ0JyA6IGFsaWdubWVudCA9PT0gJ3N0YXJ0JyA/ICdib3R0b20nIDogJ3RvcCc7XG4gIGlmIChyZWN0cy5yZWZlcmVuY2VbbGVuZ3RoXSA+IHJlY3RzLmZsb2F0aW5nW2xlbmd0aF0pIHtcbiAgICBtYWluQWxpZ25tZW50U2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5BbGlnbm1lbnRTaWRlKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG1haW46IG1haW5BbGlnbm1lbnRTaWRlLFxuICAgIGNyb3NzOiBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluQWxpZ25tZW50U2lkZSlcbiAgfTtcbn1cblxuY29uc3Qgb3Bwb3NpdGVBbGlnbm1lbnRNYXAgPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGFsaWdubWVudCA9PiBvcHBvc2l0ZUFsaWdubWVudE1hcFthbGlnbm1lbnRdKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGxhY2VtZW50TGlzdChhbGlnbm1lbnQsIGF1dG9BbGlnbm1lbnQsIGFsbG93ZWRQbGFjZW1lbnRzKSB7XG4gIGNvbnN0IGFsbG93ZWRQbGFjZW1lbnRzU29ydGVkQnlBbGlnbm1lbnQgPSBhbGlnbm1lbnQgPyBbLi4uYWxsb3dlZFBsYWNlbWVudHMuZmlsdGVyKHBsYWNlbWVudCA9PiBnZXRBbGlnbm1lbnQocGxhY2VtZW50KSA9PT0gYWxpZ25tZW50KSwgLi4uYWxsb3dlZFBsYWNlbWVudHMuZmlsdGVyKHBsYWNlbWVudCA9PiBnZXRBbGlnbm1lbnQocGxhY2VtZW50KSAhPT0gYWxpZ25tZW50KV0gOiBhbGxvd2VkUGxhY2VtZW50cy5maWx0ZXIocGxhY2VtZW50ID0+IGdldFNpZGUocGxhY2VtZW50KSA9PT0gcGxhY2VtZW50KTtcbiAgcmV0dXJuIGFsbG93ZWRQbGFjZW1lbnRzU29ydGVkQnlBbGlnbm1lbnQuZmlsdGVyKHBsYWNlbWVudCA9PiB7XG4gICAgaWYgKGFsaWdubWVudCkge1xuICAgICAgcmV0dXJuIGdldEFsaWdubWVudChwbGFjZW1lbnQpID09PSBhbGlnbm1lbnQgfHwgKGF1dG9BbGlnbm1lbnQgPyBnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChwbGFjZW1lbnQpICE9PSBwbGFjZW1lbnQgOiBmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn1cbi8qKlxuICogT3B0aW1pemVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IGJ5IGNob29zaW5nIHRoZSBwbGFjZW1lbnRcbiAqIHRoYXQgaGFzIHRoZSBtb3N0IHNwYWNlIGF2YWlsYWJsZSBhdXRvbWF0aWNhbGx5LCB3aXRob3V0IG5lZWRpbmcgdG8gc3BlY2lmeSBhXG4gKiBwcmVmZXJyZWQgcGxhY2VtZW50LiBBbHRlcm5hdGl2ZSB0byBgZmxpcGAuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvYXV0b1BsYWNlbWVudFxuICovXG5jb25zdCBhdXRvUGxhY2VtZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdhdXRvUGxhY2VtZW50JyxcbiAgICBvcHRpb25zLFxuICAgIGFzeW5jIGZuKHN0YXRlKSB7XG4gICAgICB2YXIgX21pZGRsZXdhcmVEYXRhJGF1dG9QLCBfbWlkZGxld2FyZURhdGEkYXV0b1AyLCBfcGxhY2VtZW50c1RoYXRGaXRPbkU7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHJlY3RzLFxuICAgICAgICBtaWRkbGV3YXJlRGF0YSxcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBwbGF0Zm9ybSxcbiAgICAgICAgZWxlbWVudHNcbiAgICAgIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3Jvc3NBeGlzID0gZmFsc2UsXG4gICAgICAgIGFsaWdubWVudCxcbiAgICAgICAgYWxsb3dlZFBsYWNlbWVudHMgPSBhbGxQbGFjZW1lbnRzLFxuICAgICAgICBhdXRvQWxpZ25tZW50ID0gdHJ1ZSxcbiAgICAgICAgLi4uZGV0ZWN0T3ZlcmZsb3dPcHRpb25zXG4gICAgICB9ID0gZXZhbHVhdGUob3B0aW9ucywgc3RhdGUpO1xuICAgICAgY29uc3QgcGxhY2VtZW50cyA9IGFsaWdubWVudCAhPT0gdW5kZWZpbmVkIHx8IGFsbG93ZWRQbGFjZW1lbnRzID09PSBhbGxQbGFjZW1lbnRzID8gZ2V0UGxhY2VtZW50TGlzdChhbGlnbm1lbnQgfHwgbnVsbCwgYXV0b0FsaWdubWVudCwgYWxsb3dlZFBsYWNlbWVudHMpIDogYWxsb3dlZFBsYWNlbWVudHM7XG4gICAgICBjb25zdCBvdmVyZmxvdyA9IGF3YWl0IGRldGVjdE92ZXJmbG93KHN0YXRlLCBkZXRlY3RPdmVyZmxvd09wdGlvbnMpO1xuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gKChfbWlkZGxld2FyZURhdGEkYXV0b1AgPSBtaWRkbGV3YXJlRGF0YS5hdXRvUGxhY2VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX21pZGRsZXdhcmVEYXRhJGF1dG9QLmluZGV4KSB8fCAwO1xuICAgICAgY29uc3QgY3VycmVudFBsYWNlbWVudCA9IHBsYWNlbWVudHNbY3VycmVudEluZGV4XTtcbiAgICAgIGlmIChjdXJyZW50UGxhY2VtZW50ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgICAgY29uc3Qge1xuICAgICAgICBtYWluLFxuICAgICAgICBjcm9zc1xuICAgICAgfSA9IGdldEFsaWdubWVudFNpZGVzKGN1cnJlbnRQbGFjZW1lbnQsIHJlY3RzLCBhd2FpdCAocGxhdGZvcm0uaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzUlRMKGVsZW1lbnRzLmZsb2F0aW5nKSkpO1xuXG4gICAgICAvLyBNYWtlIGBjb21wdXRlQ29vcmRzYCBzdGFydCBmcm9tIHRoZSByaWdodCBwbGFjZS5cbiAgICAgIGlmIChwbGFjZW1lbnQgIT09IGN1cnJlbnRQbGFjZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByZXNldDoge1xuICAgICAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRzWzBdXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY29uc3QgY3VycmVudE92ZXJmbG93cyA9IFtvdmVyZmxvd1tnZXRTaWRlKGN1cnJlbnRQbGFjZW1lbnQpXSwgb3ZlcmZsb3dbbWFpbl0sIG92ZXJmbG93W2Nyb3NzXV07XG4gICAgICBjb25zdCBhbGxPdmVyZmxvd3MgPSBbLi4uKCgoX21pZGRsZXdhcmVEYXRhJGF1dG9QMiA9IG1pZGRsZXdhcmVEYXRhLmF1dG9QbGFjZW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfbWlkZGxld2FyZURhdGEkYXV0b1AyLm92ZXJmbG93cykgfHwgW10pLCB7XG4gICAgICAgIHBsYWNlbWVudDogY3VycmVudFBsYWNlbWVudCxcbiAgICAgICAgb3ZlcmZsb3dzOiBjdXJyZW50T3ZlcmZsb3dzXG4gICAgICB9XTtcbiAgICAgIGNvbnN0IG5leHRQbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2N1cnJlbnRJbmRleCArIDFdO1xuXG4gICAgICAvLyBUaGVyZSBhcmUgbW9yZSBwbGFjZW1lbnRzIHRvIGNoZWNrLlxuICAgICAgaWYgKG5leHRQbGFjZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpbmRleDogY3VycmVudEluZGV4ICsgMSxcbiAgICAgICAgICAgIG92ZXJmbG93czogYWxsT3ZlcmZsb3dzXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNldDoge1xuICAgICAgICAgICAgcGxhY2VtZW50OiBuZXh0UGxhY2VtZW50XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY29uc3QgcGxhY2VtZW50c1NvcnRlZEJ5TW9zdFNwYWNlID0gYWxsT3ZlcmZsb3dzLm1hcChkID0+IHtcbiAgICAgICAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KGQucGxhY2VtZW50KTtcbiAgICAgICAgcmV0dXJuIFtkLnBsYWNlbWVudCwgYWxpZ25tZW50ICYmIGNyb3NzQXhpcyA/XG4gICAgICAgIC8vIENoZWNrIGFsb25nIHRoZSBtYWluQXhpcyBhbmQgbWFpbiBjcm9zc0F4aXMgc2lkZS5cbiAgICAgICAgZC5vdmVyZmxvd3Muc2xpY2UoMCwgMikucmVkdWNlKChhY2MsIHYpID0+IGFjYyArIHYsIDApIDpcbiAgICAgICAgLy8gQ2hlY2sgb25seSB0aGUgbWFpbkF4aXMuXG4gICAgICAgIGQub3ZlcmZsb3dzWzBdLCBkLm92ZXJmbG93c107XG4gICAgICB9KS5zb3J0KChhLCBiKSA9PiBhWzFdIC0gYlsxXSk7XG4gICAgICBjb25zdCBwbGFjZW1lbnRzVGhhdEZpdE9uRWFjaFNpZGUgPSBwbGFjZW1lbnRzU29ydGVkQnlNb3N0U3BhY2UuZmlsdGVyKGQgPT4gZFsyXS5zbGljZSgwLFxuICAgICAgLy8gQWxpZ25lZCBwbGFjZW1lbnRzIHNob3VsZCBub3QgY2hlY2sgdGhlaXIgb3Bwb3NpdGUgY3Jvc3NBeGlzXG4gICAgICAvLyBzaWRlLlxuICAgICAgZ2V0QWxpZ25tZW50KGRbMF0pID8gMiA6IDMpLmV2ZXJ5KHYgPT4gdiA8PSAwKSk7XG4gICAgICBjb25zdCByZXNldFBsYWNlbWVudCA9ICgoX3BsYWNlbWVudHNUaGF0Rml0T25FID0gcGxhY2VtZW50c1RoYXRGaXRPbkVhY2hTaWRlWzBdKSA9PSBudWxsID8gdm9pZCAwIDogX3BsYWNlbWVudHNUaGF0Rml0T25FWzBdKSB8fCBwbGFjZW1lbnRzU29ydGVkQnlNb3N0U3BhY2VbMF1bMF07XG4gICAgICBpZiAocmVzZXRQbGFjZW1lbnQgIT09IHBsYWNlbWVudCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGluZGV4OiBjdXJyZW50SW5kZXggKyAxLFxuICAgICAgICAgICAgb3ZlcmZsb3dzOiBhbGxPdmVyZmxvd3NcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc2V0OiB7XG4gICAgICAgICAgICBwbGFjZW1lbnQ6IHJlc2V0UGxhY2VtZW50XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgY29uc3Qgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBnZXRTaWRlTGlzdChzaWRlLCBpc1N0YXJ0LCBydGwpIHtcbiAgY29uc3QgbHIgPSBbJ2xlZnQnLCAncmlnaHQnXTtcbiAgY29uc3QgcmwgPSBbJ3JpZ2h0JywgJ2xlZnQnXTtcbiAgY29uc3QgdGIgPSBbJ3RvcCcsICdib3R0b20nXTtcbiAgY29uc3QgYnQgPSBbJ2JvdHRvbScsICd0b3AnXTtcbiAgc3dpdGNoIChzaWRlKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgaWYgKHJ0bCkgcmV0dXJuIGlzU3RhcnQgPyBybCA6IGxyO1xuICAgICAgcmV0dXJuIGlzU3RhcnQgPyBsciA6IHJsO1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiBpc1N0YXJ0ID8gdGIgOiBidDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFtdO1xuICB9XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZUF4aXNQbGFjZW1lbnRzKHBsYWNlbWVudCwgZmxpcEFsaWdubWVudCwgZGlyZWN0aW9uLCBydGwpIHtcbiAgY29uc3QgYWxpZ25tZW50ID0gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCk7XG4gIGxldCBsaXN0ID0gZ2V0U2lkZUxpc3QoZ2V0U2lkZShwbGFjZW1lbnQpLCBkaXJlY3Rpb24gPT09ICdzdGFydCcsIHJ0bCk7XG4gIGlmIChhbGlnbm1lbnQpIHtcbiAgICBsaXN0ID0gbGlzdC5tYXAoc2lkZSA9PiBzaWRlICsgXCItXCIgKyBhbGlnbm1lbnQpO1xuICAgIGlmIChmbGlwQWxpZ25tZW50KSB7XG4gICAgICBsaXN0ID0gbGlzdC5jb25jYXQobGlzdC5tYXAoZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxpc3Q7XG59XG5cbi8qKlxuICogT3B0aW1pemVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IGJ5IGZsaXBwaW5nIHRoZSBgcGxhY2VtZW50YFxuICogaW4gb3JkZXIgdG8ga2VlcCBpdCBpbiB2aWV3IHdoZW4gdGhlIHByZWZlcnJlZCBwbGFjZW1lbnQocykgd2lsbCBvdmVyZmxvdyB0aGVcbiAqIGNsaXBwaW5nIGJvdW5kYXJ5LiBBbHRlcm5hdGl2ZSB0byBgYXV0b1BsYWNlbWVudGAuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvZmxpcFxuICovXG5jb25zdCBmbGlwID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdmbGlwJyxcbiAgICBvcHRpb25zLFxuICAgIGFzeW5jIGZuKHN0YXRlKSB7XG4gICAgICB2YXIgX21pZGRsZXdhcmVEYXRhJGZsaXA7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHBsYWNlbWVudCxcbiAgICAgICAgbWlkZGxld2FyZURhdGEsXG4gICAgICAgIHJlY3RzLFxuICAgICAgICBpbml0aWFsUGxhY2VtZW50LFxuICAgICAgICBwbGF0Zm9ybSxcbiAgICAgICAgZWxlbWVudHNcbiAgICAgIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWFpbkF4aXM6IGNoZWNrTWFpbkF4aXMgPSB0cnVlLFxuICAgICAgICBjcm9zc0F4aXM6IGNoZWNrQ3Jvc3NBeGlzID0gdHJ1ZSxcbiAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzOiBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICAgIGZhbGxiYWNrU3RyYXRlZ3kgPSAnYmVzdEZpdCcsXG4gICAgICAgIGZhbGxiYWNrQXhpc1NpZGVEaXJlY3Rpb24gPSAnbm9uZScsXG4gICAgICAgIGZsaXBBbGlnbm1lbnQgPSB0cnVlLFxuICAgICAgICAuLi5kZXRlY3RPdmVyZmxvd09wdGlvbnNcbiAgICAgIH0gPSBldmFsdWF0ZShvcHRpb25zLCBzdGF0ZSk7XG4gICAgICBjb25zdCBzaWRlID0gZ2V0U2lkZShwbGFjZW1lbnQpO1xuICAgICAgY29uc3QgaXNCYXNlUGxhY2VtZW50ID0gZ2V0U2lkZShpbml0aWFsUGxhY2VtZW50KSA9PT0gaW5pdGlhbFBsYWNlbWVudDtcbiAgICAgIGNvbnN0IHJ0bCA9IGF3YWl0IChwbGF0Zm9ybS5pc1JUTCA9PSBudWxsID8gdm9pZCAwIDogcGxhdGZvcm0uaXNSVEwoZWxlbWVudHMuZmxvYXRpbmcpKTtcbiAgICAgIGNvbnN0IGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwQWxpZ25tZW50ID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KGluaXRpYWxQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkUGxhY2VtZW50cyhpbml0aWFsUGxhY2VtZW50KSk7XG4gICAgICBpZiAoIXNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyAmJiBmYWxsYmFja0F4aXNTaWRlRGlyZWN0aW9uICE9PSAnbm9uZScpIHtcbiAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnRzLnB1c2goLi4uZ2V0T3Bwb3NpdGVBeGlzUGxhY2VtZW50cyhpbml0aWFsUGxhY2VtZW50LCBmbGlwQWxpZ25tZW50LCBmYWxsYmFja0F4aXNTaWRlRGlyZWN0aW9uLCBydGwpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBsYWNlbWVudHMgPSBbaW5pdGlhbFBsYWNlbWVudCwgLi4uZmFsbGJhY2tQbGFjZW1lbnRzXTtcbiAgICAgIGNvbnN0IG92ZXJmbG93ID0gYXdhaXQgZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIGRldGVjdE92ZXJmbG93T3B0aW9ucyk7XG4gICAgICBjb25zdCBvdmVyZmxvd3MgPSBbXTtcbiAgICAgIGxldCBvdmVyZmxvd3NEYXRhID0gKChfbWlkZGxld2FyZURhdGEkZmxpcCA9IG1pZGRsZXdhcmVEYXRhLmZsaXApID09IG51bGwgPyB2b2lkIDAgOiBfbWlkZGxld2FyZURhdGEkZmxpcC5vdmVyZmxvd3MpIHx8IFtdO1xuICAgICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgICAgb3ZlcmZsb3dzLnB1c2gob3ZlcmZsb3dbc2lkZV0pO1xuICAgICAgfVxuICAgICAgaWYgKGNoZWNrQ3Jvc3NBeGlzKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBtYWluLFxuICAgICAgICAgIGNyb3NzXG4gICAgICAgIH0gPSBnZXRBbGlnbm1lbnRTaWRlcyhwbGFjZW1lbnQsIHJlY3RzLCBydGwpO1xuICAgICAgICBvdmVyZmxvd3MucHVzaChvdmVyZmxvd1ttYWluXSwgb3ZlcmZsb3dbY3Jvc3NdKTtcbiAgICAgIH1cbiAgICAgIG92ZXJmbG93c0RhdGEgPSBbLi4ub3ZlcmZsb3dzRGF0YSwge1xuICAgICAgICBwbGFjZW1lbnQsXG4gICAgICAgIG92ZXJmbG93c1xuICAgICAgfV07XG5cbiAgICAgIC8vIE9uZSBvciBtb3JlIHNpZGVzIGlzIG92ZXJmbG93aW5nLlxuICAgICAgaWYgKCFvdmVyZmxvd3MuZXZlcnkoc2lkZSA9PiBzaWRlIDw9IDApKSB7XG4gICAgICAgIHZhciBfbWlkZGxld2FyZURhdGEkZmxpcDIsIF9vdmVyZmxvd3NEYXRhJGZpbHRlcjtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gKCgoX21pZGRsZXdhcmVEYXRhJGZsaXAyID0gbWlkZGxld2FyZURhdGEuZmxpcCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9taWRkbGV3YXJlRGF0YSRmbGlwMi5pbmRleCkgfHwgMCkgKyAxO1xuICAgICAgICBjb25zdCBuZXh0UGxhY2VtZW50ID0gcGxhY2VtZW50c1tuZXh0SW5kZXhdO1xuICAgICAgICBpZiAobmV4dFBsYWNlbWVudCkge1xuICAgICAgICAgIC8vIFRyeSBuZXh0IHBsYWNlbWVudCBhbmQgcmUtcnVuIHRoZSBsaWZlY3ljbGUuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgaW5kZXg6IG5leHRJbmRleCxcbiAgICAgICAgICAgICAgb3ZlcmZsb3dzOiBvdmVyZmxvd3NEYXRhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzZXQ6IHtcbiAgICAgICAgICAgICAgcGxhY2VtZW50OiBuZXh0UGxhY2VtZW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcnN0LCBmaW5kIHRoZSBjYW5kaWRhdGVzIHRoYXQgZml0IG9uIHRoZSBtYWluQXhpcyBzaWRlIG9mIG92ZXJmbG93LFxuICAgICAgICAvLyB0aGVuIGZpbmQgdGhlIHBsYWNlbWVudCB0aGF0IGZpdHMgdGhlIGJlc3Qgb24gdGhlIG1haW4gY3Jvc3NBeGlzIHNpZGUuXG4gICAgICAgIGxldCByZXNldFBsYWNlbWVudCA9IChfb3ZlcmZsb3dzRGF0YSRmaWx0ZXIgPSBvdmVyZmxvd3NEYXRhLmZpbHRlcihkID0+IGQub3ZlcmZsb3dzWzBdIDw9IDApLnNvcnQoKGEsIGIpID0+IGEub3ZlcmZsb3dzWzFdIC0gYi5vdmVyZmxvd3NbMV0pWzBdKSA9PSBudWxsID8gdm9pZCAwIDogX292ZXJmbG93c0RhdGEkZmlsdGVyLnBsYWNlbWVudDtcblxuICAgICAgICAvLyBPdGhlcndpc2UgZmFsbGJhY2suXG4gICAgICAgIGlmICghcmVzZXRQbGFjZW1lbnQpIHtcbiAgICAgICAgICBzd2l0Y2ggKGZhbGxiYWNrU3RyYXRlZ3kpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Jlc3RGaXQnOlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIF9vdmVyZmxvd3NEYXRhJG1hcCRzbztcbiAgICAgICAgICAgICAgICBjb25zdCBwbGFjZW1lbnQgPSAoX292ZXJmbG93c0RhdGEkbWFwJHNvID0gb3ZlcmZsb3dzRGF0YS5tYXAoZCA9PiBbZC5wbGFjZW1lbnQsIGQub3ZlcmZsb3dzLmZpbHRlcihvdmVyZmxvdyA9PiBvdmVyZmxvdyA+IDApLnJlZHVjZSgoYWNjLCBvdmVyZmxvdykgPT4gYWNjICsgb3ZlcmZsb3csIDApXSkuc29ydCgoYSwgYikgPT4gYVsxXSAtIGJbMV0pWzBdKSA9PSBudWxsID8gdm9pZCAwIDogX292ZXJmbG93c0RhdGEkbWFwJHNvWzBdO1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJlc2V0UGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnaW5pdGlhbFBsYWNlbWVudCc6XG4gICAgICAgICAgICAgIHJlc2V0UGxhY2VtZW50ID0gaW5pdGlhbFBsYWNlbWVudDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZW1lbnQgIT09IHJlc2V0UGxhY2VtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc2V0OiB7XG4gICAgICAgICAgICAgIHBsYWNlbWVudDogcmVzZXRQbGFjZW1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aFxuICB9O1xufVxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBzaWRlcy5zb21lKHNpZGUgPT4gb3ZlcmZsb3dbc2lkZV0gPj0gMCk7XG59XG4vKipcbiAqIFByb3ZpZGVzIGRhdGEgdG8gaGlkZSB0aGUgZmxvYXRpbmcgZWxlbWVudCBpbiBhcHBsaWNhYmxlIHNpdHVhdGlvbnMsIHN1Y2ggYXNcbiAqIHdoZW4gaXQgaXMgbm90IGluIHRoZSBzYW1lIGNsaXBwaW5nIGNvbnRleHQgYXMgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2hpZGVcbiAqL1xuY29uc3QgaGlkZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnaGlkZScsXG4gICAgb3B0aW9ucyxcbiAgICBhc3luYyBmbihzdGF0ZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICByZWN0c1xuICAgICAgfSA9IHN0YXRlO1xuICAgICAgY29uc3Qge1xuICAgICAgICBzdHJhdGVneSA9ICdyZWZlcmVuY2VIaWRkZW4nLFxuICAgICAgICAuLi5kZXRlY3RPdmVyZmxvd09wdGlvbnNcbiAgICAgIH0gPSBldmFsdWF0ZShvcHRpb25zLCBzdGF0ZSk7XG4gICAgICBzd2l0Y2ggKHN0cmF0ZWd5KSB7XG4gICAgICAgIGNhc2UgJ3JlZmVyZW5jZUhpZGRlbic6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgb3ZlcmZsb3cgPSBhd2FpdCBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgICAgICAgICAuLi5kZXRlY3RPdmVyZmxvd09wdGlvbnMsXG4gICAgICAgICAgICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3RzLnJlZmVyZW5jZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlSGlkZGVuT2Zmc2V0czogb2Zmc2V0cyxcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VIaWRkZW46IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvZmZzZXRzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnZXNjYXBlZCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgY29uc3Qgb3ZlcmZsb3cgPSBhd2FpdCBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgICAgICAgICAuLi5kZXRlY3RPdmVyZmxvd09wdGlvbnMsXG4gICAgICAgICAgICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdHMuZmxvYXRpbmcpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGVzY2FwZWRPZmZzZXRzOiBvZmZzZXRzLFxuICAgICAgICAgICAgICAgIGVzY2FwZWQ6IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvZmZzZXRzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbnZlcnRWYWx1ZVRvQ29vcmRzKHN0YXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICBwbGFjZW1lbnQsXG4gICAgcGxhdGZvcm0sXG4gICAgZWxlbWVudHNcbiAgfSA9IHN0YXRlO1xuICBjb25zdCBydGwgPSBhd2FpdCAocGxhdGZvcm0uaXNSVEwgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYXRmb3JtLmlzUlRMKGVsZW1lbnRzLmZsb2F0aW5nKSk7XG4gIGNvbnN0IHNpZGUgPSBnZXRTaWRlKHBsYWNlbWVudCk7XG4gIGNvbnN0IGFsaWdubWVudCA9IGdldEFsaWdubWVudChwbGFjZW1lbnQpO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkgPT09ICd4JztcbiAgY29uc3QgbWFpbkF4aXNNdWx0aSA9IFsnbGVmdCcsICd0b3AnXS5pbmNsdWRlcyhzaWRlKSA/IC0xIDogMTtcbiAgY29uc3QgY3Jvc3NBeGlzTXVsdGkgPSBydGwgJiYgaXNWZXJ0aWNhbCA/IC0xIDogMTtcbiAgY29uc3QgcmF3VmFsdWUgPSBldmFsdWF0ZShvcHRpb25zLCBzdGF0ZSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuICBsZXQge1xuICAgIG1haW5BeGlzLFxuICAgIGNyb3NzQXhpcyxcbiAgICBhbGlnbm1lbnRBeGlzXG4gIH0gPSB0eXBlb2YgcmF3VmFsdWUgPT09ICdudW1iZXInID8ge1xuICAgIG1haW5BeGlzOiByYXdWYWx1ZSxcbiAgICBjcm9zc0F4aXM6IDAsXG4gICAgYWxpZ25tZW50QXhpczogbnVsbFxuICB9IDoge1xuICAgIG1haW5BeGlzOiAwLFxuICAgIGNyb3NzQXhpczogMCxcbiAgICBhbGlnbm1lbnRBeGlzOiBudWxsLFxuICAgIC4uLnJhd1ZhbHVlXG4gIH07XG4gIGlmIChhbGlnbm1lbnQgJiYgdHlwZW9mIGFsaWdubWVudEF4aXMgPT09ICdudW1iZXInKSB7XG4gICAgY3Jvc3NBeGlzID0gYWxpZ25tZW50ID09PSAnZW5kJyA/IGFsaWdubWVudEF4aXMgKiAtMSA6IGFsaWdubWVudEF4aXM7XG4gIH1cbiAgcmV0dXJuIGlzVmVydGljYWwgPyB7XG4gICAgeDogY3Jvc3NBeGlzICogY3Jvc3NBeGlzTXVsdGksXG4gICAgeTogbWFpbkF4aXMgKiBtYWluQXhpc011bHRpXG4gIH0gOiB7XG4gICAgeDogbWFpbkF4aXMgKiBtYWluQXhpc011bHRpLFxuICAgIHk6IGNyb3NzQXhpcyAqIGNyb3NzQXhpc011bHRpXG4gIH07XG59XG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIHBsYWNlbWVudCBieSB0cmFuc2xhdGluZyB0aGUgZmxvYXRpbmcgZWxlbWVudCBhbG9uZyB0aGVcbiAqIHNwZWNpZmllZCBheGVzLlxuICogQSBudW1iZXIgKHNob3J0aGFuZCBmb3IgYG1haW5BeGlzYCBvciBkaXN0YW5jZSksIG9yIGFuIGF4ZXMgY29uZmlndXJhdGlvblxuICogb2JqZWN0IG1heSBiZSBwYXNzZWQuXG4gKiBAc2VlIGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3Mvb2Zmc2V0XG4gKi9cbmNvbnN0IG9mZnNldCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0gMDtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgIG9wdGlvbnMsXG4gICAgYXN5bmMgZm4oc3RhdGUpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfSA9IHN0YXRlO1xuICAgICAgY29uc3QgZGlmZkNvb3JkcyA9IGF3YWl0IGNvbnZlcnRWYWx1ZVRvQ29vcmRzKHN0YXRlLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHggKyBkaWZmQ29vcmRzLngsXG4gICAgICAgIHk6IHkgKyBkaWZmQ29vcmRzLnksXG4gICAgICAgIGRhdGE6IGRpZmZDb29yZHNcbiAgICAgIH07XG4gICAgfVxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0Q3Jvc3NBeGlzKGF4aXMpIHtcbiAgcmV0dXJuIGF4aXMgPT09ICd4JyA/ICd5JyA6ICd4Jztcbn1cblxuLyoqXG4gKiBPcHRpbWl6ZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGZsb2F0aW5nIGVsZW1lbnQgYnkgc2hpZnRpbmcgaXQgaW4gb3JkZXIgdG9cbiAqIGtlZXAgaXQgaW4gdmlldyB3aGVuIGl0IHdpbGwgb3ZlcmZsb3cgdGhlIGNsaXBwaW5nIGJvdW5kYXJ5LlxuICogQHNlZSBodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL3NoaWZ0XG4gKi9cbmNvbnN0IHNoaWZ0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdzaGlmdCcsXG4gICAgb3B0aW9ucyxcbiAgICBhc3luYyBmbihzdGF0ZSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICBwbGFjZW1lbnRcbiAgICAgIH0gPSBzdGF0ZTtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWFpbkF4aXM6IGNoZWNrTWFpbkF4aXMgPSB0cnVlLFxuICAgICAgICBjcm9zc0F4aXM6IGNoZWNrQ3Jvc3NBeGlzID0gZmFsc2UsXG4gICAgICAgIGxpbWl0ZXIgPSB7XG4gICAgICAgICAgZm46IF9yZWYgPT4ge1xuICAgICAgICAgICAgbGV0IHtcbiAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAgeVxuICAgICAgICAgICAgfSA9IF9yZWY7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICB5XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLi4uZGV0ZWN0T3ZlcmZsb3dPcHRpb25zXG4gICAgICB9ID0gZXZhbHVhdGUob3B0aW9ucywgc3RhdGUpO1xuICAgICAgY29uc3QgY29vcmRzID0ge1xuICAgICAgICB4LFxuICAgICAgICB5XG4gICAgICB9O1xuICAgICAgY29uc3Qgb3ZlcmZsb3cgPSBhd2FpdCBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgZGV0ZWN0T3ZlcmZsb3dPcHRpb25zKTtcbiAgICAgIGNvbnN0IG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGdldFNpZGUocGxhY2VtZW50KSk7XG4gICAgICBjb25zdCBjcm9zc0F4aXMgPSBnZXRDcm9zc0F4aXMobWFpbkF4aXMpO1xuICAgICAgbGV0IG1haW5BeGlzQ29vcmQgPSBjb29yZHNbbWFpbkF4aXNdO1xuICAgICAgbGV0IGNyb3NzQXhpc0Nvb3JkID0gY29vcmRzW2Nyb3NzQXhpc107XG4gICAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgICBjb25zdCBtaW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/ICd0b3AnIDogJ2xlZnQnO1xuICAgICAgICBjb25zdCBtYXhTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgICAgICAgY29uc3QgbWluID0gbWFpbkF4aXNDb29yZCArIG92ZXJmbG93W21pblNpZGVdO1xuICAgICAgICBjb25zdCBtYXggPSBtYWluQXhpc0Nvb3JkIC0gb3ZlcmZsb3dbbWF4U2lkZV07XG4gICAgICAgIG1haW5BeGlzQ29vcmQgPSB3aXRoaW4obWluLCBtYWluQXhpc0Nvb3JkLCBtYXgpO1xuICAgICAgfVxuICAgICAgaWYgKGNoZWNrQ3Jvc3NBeGlzKSB7XG4gICAgICAgIGNvbnN0IG1pblNpZGUgPSBjcm9zc0F4aXMgPT09ICd5JyA/ICd0b3AnIDogJ2xlZnQnO1xuICAgICAgICBjb25zdCBtYXhTaWRlID0gY3Jvc3NBeGlzID09PSAneScgPyAnYm90dG9tJyA6ICdyaWdodCc7XG4gICAgICAgIGNvbnN0IG1pbiA9IGNyb3NzQXhpc0Nvb3JkICsgb3ZlcmZsb3dbbWluU2lkZV07XG4gICAgICAgIGNvbnN0IG1heCA9IGNyb3NzQXhpc0Nvb3JkIC0gb3ZlcmZsb3dbbWF4U2lkZV07XG4gICAgICAgIGNyb3NzQXhpc0Nvb3JkID0gd2l0aGluKG1pbiwgY3Jvc3NBeGlzQ29vcmQsIG1heCk7XG4gICAgICB9XG4gICAgICBjb25zdCBsaW1pdGVkQ29vcmRzID0gbGltaXRlci5mbih7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbbWFpbkF4aXNdOiBtYWluQXhpc0Nvb3JkLFxuICAgICAgICBbY3Jvc3NBeGlzXTogY3Jvc3NBeGlzQ29vcmRcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubGltaXRlZENvb3JkcyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHg6IGxpbWl0ZWRDb29yZHMueCAtIHgsXG4gICAgICAgICAgeTogbGltaXRlZENvb3Jkcy55IC0geVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIHZhciBfbm9kZSRvd25lckRvY3VtZW50O1xuICByZXR1cm4gKChfbm9kZSRvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX25vZGUkb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgfHwgd2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBnZXRXaW5kb3codmFsdWUpLk5vZGU7XG59XG5mdW5jdGlvbiBnZXROb2RlTmFtZShub2RlKSB7XG4gIGlmIChpc05vZGUobm9kZSkpIHtcbiAgICByZXR1cm4gKG5vZGUubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgLy8gTW9ja2VkIG5vZGVzIGluIHRlc3RpbmcgZW52aXJvbm1lbnRzIG1heSBub3QgYmUgaW5zdGFuY2VzIG9mIE5vZGUuIEJ5XG4gIC8vIHJldHVybmluZyBgI2RvY3VtZW50YCBhbiBpbmZpbml0ZSBsb29wIHdvbid0IG9jY3VyLlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmxvYXRpbmctdWkvZmxvYXRpbmctdWkvaXNzdWVzLzIzMTdcbiAgcmV0dXJuICcjZG9jdW1lbnQnO1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuSFRNTEVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5FbGVtZW50O1xufVxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gQnJvd3NlcnMgd2l0aG91dCBgU2hhZG93Um9vdGAgc3VwcG9ydC5cbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290IHx8IG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xufVxuZnVuY3Rpb24gaXNPdmVyZmxvd0VsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCB7XG4gICAgb3ZlcmZsb3csXG4gICAgb3ZlcmZsb3dYLFxuICAgIG92ZXJmbG93WSxcbiAgICBkaXNwbGF5XG4gIH0gPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCk7XG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW58Y2xpcC8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCkgJiYgIVsnaW5saW5lJywgJ2NvbnRlbnRzJ10uaW5jbHVkZXMoZGlzcGxheSk7XG59XG5mdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5jbHVkZXMoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpO1xufVxuZnVuY3Rpb24gaXNDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICBjb25zdCBzYWZhcmkgPSBpc1NhZmFyaSgpO1xuICBjb25zdCBjc3MgPSBnZXRDb21wdXRlZFN0eWxlJDEoZWxlbWVudCk7XG5cbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcbiAgcmV0dXJuIGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCAhc2FmYXJpICYmIChjc3MuYmFja2Ryb3BGaWx0ZXIgPyBjc3MuYmFja2Ryb3BGaWx0ZXIgIT09ICdub25lJyA6IGZhbHNlKSB8fCAhc2FmYXJpICYmIChjc3MuZmlsdGVyID8gY3NzLmZpbHRlciAhPT0gJ25vbmUnIDogZmFsc2UpIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJywgJ2ZpbHRlciddLnNvbWUodmFsdWUgPT4gKGNzcy53aWxsQ2hhbmdlIHx8ICcnKS5pbmNsdWRlcyh2YWx1ZSkpIHx8IFsncGFpbnQnLCAnbGF5b3V0JywgJ3N0cmljdCcsICdjb250ZW50J10uc29tZSh2YWx1ZSA9PiAoY3NzLmNvbnRhaW4gfHwgJycpLmluY2x1ZGVzKHZhbHVlKSk7XG59XG5mdW5jdGlvbiBpc1NhZmFyaSgpIHtcbiAgaWYgKHR5cGVvZiBDU1MgPT09ICd1bmRlZmluZWQnIHx8ICFDU1Muc3VwcG9ydHMpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIENTUy5zdXBwb3J0cygnLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXInLCAnbm9uZScpO1xufVxuZnVuY3Rpb24gaXNMYXN0VHJhdmVyc2FibGVOb2RlKG5vZGUpIHtcbiAgcmV0dXJuIFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluY2x1ZGVzKGdldE5vZGVOYW1lKG5vZGUpKTtcbn1cblxuY29uc3QgbWluID0gTWF0aC5taW47XG5jb25zdCBtYXggPSBNYXRoLm1heDtcbmNvbnN0IHJvdW5kID0gTWF0aC5yb3VuZDtcbmNvbnN0IGZsb29yID0gTWF0aC5mbG9vcjtcbmNvbnN0IGNyZWF0ZUVtcHR5Q29vcmRzID0gdiA9PiAoe1xuICB4OiB2LFxuICB5OiB2XG59KTtcblxuZnVuY3Rpb24gZ2V0Q3NzRGltZW5zaW9ucyhlbGVtZW50KSB7XG4gIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KTtcbiAgLy8gSW4gdGVzdGluZyBlbnZpcm9ubWVudHMsIHRoZSBgd2lkdGhgIGFuZCBgaGVpZ2h0YCBwcm9wZXJ0aWVzIGFyZSBlbXB0eVxuICAvLyBzdHJpbmdzIGZvciBTVkcgZWxlbWVudHMsIHJldHVybmluZyBOYU4uIEZhbGxiYWNrIHRvIGAwYCBpbiB0aGlzIGNhc2UuXG4gIGxldCB3aWR0aCA9IHBhcnNlRmxvYXQoY3NzLndpZHRoKSB8fCAwO1xuICBsZXQgaGVpZ2h0ID0gcGFyc2VGbG9hdChjc3MuaGVpZ2h0KSB8fCAwO1xuICBjb25zdCBoYXNPZmZzZXQgPSBpc0hUTUxFbGVtZW50KGVsZW1lbnQpO1xuICBjb25zdCBvZmZzZXRXaWR0aCA9IGhhc09mZnNldCA/IGVsZW1lbnQub2Zmc2V0V2lkdGggOiB3aWR0aDtcbiAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gaGFzT2Zmc2V0ID8gZWxlbWVudC5vZmZzZXRIZWlnaHQgOiBoZWlnaHQ7XG4gIGNvbnN0IHNob3VsZEZhbGxiYWNrID0gcm91bmQod2lkdGgpICE9PSBvZmZzZXRXaWR0aCB8fCByb3VuZChoZWlnaHQpICE9PSBvZmZzZXRIZWlnaHQ7XG4gIGlmIChzaG91bGRGYWxsYmFjaykge1xuICAgIHdpZHRoID0gb2Zmc2V0V2lkdGg7XG4gICAgaGVpZ2h0ID0gb2Zmc2V0SGVpZ2h0O1xuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgICQ6IHNob3VsZEZhbGxiYWNrXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVud3JhcEVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gIWlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgOiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRTY2FsZShlbGVtZW50KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSB1bndyYXBFbGVtZW50KGVsZW1lbnQpO1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZG9tRWxlbWVudCkpIHtcbiAgICByZXR1cm4gY3JlYXRlRW1wdHlDb29yZHMoMSk7XG4gIH1cbiAgY29uc3QgcmVjdCA9IGRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgJFxuICB9ID0gZ2V0Q3NzRGltZW5zaW9ucyhkb21FbGVtZW50KTtcbiAgbGV0IHggPSAoJCA/IHJvdW5kKHJlY3Qud2lkdGgpIDogcmVjdC53aWR0aCkgLyB3aWR0aDtcbiAgbGV0IHkgPSAoJCA/IHJvdW5kKHJlY3QuaGVpZ2h0KSA6IHJlY3QuaGVpZ2h0KSAvIGhlaWdodDtcblxuICAvLyAwLCBOYU4sIG9yIEluZmluaXR5IHNob3VsZCBhbHdheXMgZmFsbGJhY2sgdG8gMS5cblxuICBpZiAoIXggfHwgIU51bWJlci5pc0Zpbml0ZSh4KSkge1xuICAgIHggPSAxO1xuICB9XG4gIGlmICgheSB8fCAhTnVtYmVyLmlzRmluaXRlKHkpKSB7XG4gICAgeSA9IDE7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cblxuY29uc3Qgbm9PZmZzZXRzID0gLyojX19QVVJFX18qL2NyZWF0ZUVtcHR5Q29vcmRzKDApO1xuZnVuY3Rpb24gZ2V0VmlzdWFsT2Zmc2V0cyhlbGVtZW50LCBpc0ZpeGVkLCBmbG9hdGluZ09mZnNldFBhcmVudCkge1xuICB2YXIgX3dpbiR2aXN1YWxWaWV3cG9ydCwgX3dpbiR2aXN1YWxWaWV3cG9ydDI7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWlzU2FmYXJpKCkpIHtcbiAgICByZXR1cm4gbm9PZmZzZXRzO1xuICB9XG4gIGNvbnN0IHdpbiA9IGVsZW1lbnQgPyBnZXRXaW5kb3coZWxlbWVudCkgOiB3aW5kb3c7XG4gIGlmICghZmxvYXRpbmdPZmZzZXRQYXJlbnQgfHwgaXNGaXhlZCAmJiBmbG9hdGluZ09mZnNldFBhcmVudCAhPT0gd2luKSB7XG4gICAgcmV0dXJuIG5vT2Zmc2V0cztcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6ICgoX3dpbiR2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydCkgPT0gbnVsbCA/IHZvaWQgMCA6IF93aW4kdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCkgfHwgMCxcbiAgICB5OiAoKF93aW4kdmlzdWFsVmlld3BvcnQyID0gd2luLnZpc3VhbFZpZXdwb3J0KSA9PSBudWxsID8gdm9pZCAwIDogX3dpbiR2aXN1YWxWaWV3cG9ydDIub2Zmc2V0VG9wKSB8fCAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUsIGlzRml4ZWRTdHJhdGVneSwgb2Zmc2V0UGFyZW50KSB7XG4gIGlmIChpbmNsdWRlU2NhbGUgPT09IHZvaWQgMCkge1xuICAgIGluY2x1ZGVTY2FsZSA9IGZhbHNlO1xuICB9XG4gIGlmIChpc0ZpeGVkU3RyYXRlZ3kgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWRTdHJhdGVneSA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IGNsaWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBkb21FbGVtZW50ID0gdW53cmFwRWxlbWVudChlbGVtZW50KTtcbiAgbGV0IHNjYWxlID0gY3JlYXRlRW1wdHlDb29yZHMoMSk7XG4gIGlmIChpbmNsdWRlU2NhbGUpIHtcbiAgICBpZiAob2Zmc2V0UGFyZW50KSB7XG4gICAgICBpZiAoaXNFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgICAgc2NhbGUgPSBnZXRTY2FsZShvZmZzZXRQYXJlbnQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzY2FsZSA9IGdldFNjYWxlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuICBjb25zdCB2aXN1YWxPZmZzZXRzID0gZ2V0VmlzdWFsT2Zmc2V0cyhkb21FbGVtZW50LCBpc0ZpeGVkU3RyYXRlZ3ksIG9mZnNldFBhcmVudCk7XG4gIGxldCB4ID0gKGNsaWVudFJlY3QubGVmdCArIHZpc3VhbE9mZnNldHMueCkgLyBzY2FsZS54O1xuICBsZXQgeSA9IChjbGllbnRSZWN0LnRvcCArIHZpc3VhbE9mZnNldHMueSkgLyBzY2FsZS55O1xuICBsZXQgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoIC8gc2NhbGUueDtcbiAgbGV0IGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0IC8gc2NhbGUueTtcbiAgaWYgKGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCB3aW4gPSBnZXRXaW5kb3coZG9tRWxlbWVudCk7XG4gICAgY29uc3Qgb2Zmc2V0V2luID0gb2Zmc2V0UGFyZW50ICYmIGlzRWxlbWVudChvZmZzZXRQYXJlbnQpID8gZ2V0V2luZG93KG9mZnNldFBhcmVudCkgOiBvZmZzZXRQYXJlbnQ7XG4gICAgbGV0IGN1cnJlbnRJRnJhbWUgPSB3aW4uZnJhbWVFbGVtZW50O1xuICAgIHdoaWxlIChjdXJyZW50SUZyYW1lICYmIG9mZnNldFBhcmVudCAmJiBvZmZzZXRXaW4gIT09IHdpbikge1xuICAgICAgY29uc3QgaWZyYW1lU2NhbGUgPSBnZXRTY2FsZShjdXJyZW50SUZyYW1lKTtcbiAgICAgIGNvbnN0IGlmcmFtZVJlY3QgPSBjdXJyZW50SUZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50SUZyYW1lKTtcbiAgICAgIGNvbnN0IGxlZnQgPSBpZnJhbWVSZWN0LmxlZnQgKyAoY3VycmVudElGcmFtZS5jbGllbnRMZWZ0ICsgcGFyc2VGbG9hdChjc3MucGFkZGluZ0xlZnQpKSAqIGlmcmFtZVNjYWxlLng7XG4gICAgICBjb25zdCB0b3AgPSBpZnJhbWVSZWN0LnRvcCArIChjdXJyZW50SUZyYW1lLmNsaWVudFRvcCArIHBhcnNlRmxvYXQoY3NzLnBhZGRpbmdUb3ApKSAqIGlmcmFtZVNjYWxlLnk7XG4gICAgICB4ICo9IGlmcmFtZVNjYWxlLng7XG4gICAgICB5ICo9IGlmcmFtZVNjYWxlLnk7XG4gICAgICB3aWR0aCAqPSBpZnJhbWVTY2FsZS54O1xuICAgICAgaGVpZ2h0ICo9IGlmcmFtZVNjYWxlLnk7XG4gICAgICB4ICs9IGxlZnQ7XG4gICAgICB5ICs9IHRvcDtcbiAgICAgIGN1cnJlbnRJRnJhbWUgPSBnZXRXaW5kb3coY3VycmVudElGcmFtZSkuZnJhbWVFbGVtZW50O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVjdFRvQ2xpZW50UmVjdCh7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHgsXG4gICAgeVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KG5vZGUpIHtcbiAgcmV0dXJuICgoaXNOb2RlKG5vZGUpID8gbm9kZS5vd25lckRvY3VtZW50IDogbm9kZS5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldE5vZGVTY3JvbGwoZWxlbWVudCkge1xuICBpZiAoaXNFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbFRvcDogZWxlbWVudC5zY3JvbGxUb3BcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogZWxlbWVudC5wYWdlWE9mZnNldCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQucGFnZVlPZmZzZXRcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udmVydE9mZnNldFBhcmVudFJlbGF0aXZlUmVjdFRvVmlld3BvcnRSZWxhdGl2ZVJlY3QoX3JlZikge1xuICBsZXQge1xuICAgIHJlY3QsXG4gICAgb2Zmc2V0UGFyZW50LFxuICAgIHN0cmF0ZWd5XG4gIH0gPSBfcmVmO1xuICBjb25zdCBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIGlmIChvZmZzZXRQYXJlbnQgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgIHJldHVybiByZWN0O1xuICB9XG4gIGxldCBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgbGV0IHNjYWxlID0gY3JlYXRlRW1wdHlDb29yZHMoMSk7XG4gIGNvbnN0IG9mZnNldHMgPSBjcmVhdGVFbXB0eUNvb3JkcygwKTtcbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiBzdHJhdGVneSAhPT0gJ2ZpeGVkJykge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgaXNPdmVyZmxvd0VsZW1lbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBjb25zdCBvZmZzZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCk7XG4gICAgICBzY2FsZSA9IGdldFNjYWxlKG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggPSBvZmZzZXRSZWN0LnggKyBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSA9IG9mZnNldFJlY3QueSArIG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGggKiBzY2FsZS54LFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQgKiBzY2FsZS55LFxuICAgIHg6IHJlY3QueCAqIHNjYWxlLnggLSBzY3JvbGwuc2Nyb2xsTGVmdCAqIHNjYWxlLnggKyBvZmZzZXRzLngsXG4gICAgeTogcmVjdC55ICogc2NhbGUueSAtIHNjcm9sbC5zY3JvbGxUb3AgKiBzY2FsZS55ICsgb2Zmc2V0cy55XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICByZXR1cm4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkubGVmdCArIGdldE5vZGVTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn1cblxuLy8gR2V0cyB0aGUgZW50aXJlIHNpemUgb2YgdGhlIHNjcm9sbGFibGUgZG9jdW1lbnQgYXJlYSwgZXZlbiBleHRlbmRpbmcgb3V0c2lkZVxuLy8gb2YgdGhlIGA8aHRtbD5gIGFuZCBgPGJvZHk+YCByZWN0IGJvdW5kcyBpZiBob3Jpem9udGFsbHkgc2Nyb2xsYWJsZS5cbmZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIGNvbnN0IGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIGNvbnN0IHNjcm9sbCA9IGdldE5vZGVTY3JvbGwoZWxlbWVudCk7XG4gIGNvbnN0IGJvZHkgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcbiAgY29uc3Qgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keS5zY3JvbGxXaWR0aCwgYm9keS5jbGllbnRXaWR0aCk7XG4gIGNvbnN0IGhlaWdodCA9IG1heChodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5jbGllbnRIZWlnaHQsIGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5LmNsaWVudEhlaWdodCk7XG4gIGxldCB4ID0gLXNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgY29uc3QgeSA9IC1zY3JvbGwuc2Nyb2xsVG9wO1xuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSQxKGJvZHkpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5LmNsaWVudFdpZHRoKSAtIHdpZHRoO1xuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHgsXG4gICAgeVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKG5vZGUpIHtcbiAgaWYgKGdldE5vZGVOYW1lKG5vZGUpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICBjb25zdCByZXN1bHQgPVxuICAvLyBTdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZS5cbiAgbm9kZS5hc3NpZ25lZFNsb3QgfHxcbiAgLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWQuXG4gIG5vZGUucGFyZW50Tm9kZSB8fFxuICAvLyBTaGFkb3dSb290IGRldGVjdGVkLlxuICBpc1NoYWRvd1Jvb3Qobm9kZSkgJiYgbm9kZS5ob3N0IHx8XG4gIC8vIEZhbGxiYWNrLlxuICBnZXREb2N1bWVudEVsZW1lbnQobm9kZSk7XG4gIHJldHVybiBpc1NoYWRvd1Jvb3QocmVzdWx0KSA/IHJlc3VsdC5ob3N0IDogcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXROZWFyZXN0T3ZlcmZsb3dBbmNlc3Rvcihub2RlKSB7XG4gIGNvbnN0IHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKG5vZGUpO1xuICBpZiAoaXNMYXN0VHJhdmVyc2FibGVOb2RlKHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudCA/IG5vZGUub3duZXJEb2N1bWVudC5ib2R5IDogbm9kZS5ib2R5O1xuICB9XG4gIGlmIChpc0hUTUxFbGVtZW50KHBhcmVudE5vZGUpICYmIGlzT3ZlcmZsb3dFbGVtZW50KHBhcmVudE5vZGUpKSB7XG4gICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKHBhcmVudE5vZGUpO1xufVxuXG5mdW5jdGlvbiBnZXRPdmVyZmxvd0FuY2VzdG9ycyhub2RlLCBsaXN0KSB7XG4gIHZhciBfbm9kZSRvd25lckRvY3VtZW50O1xuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG4gIGNvbnN0IHNjcm9sbGFibGVBbmNlc3RvciA9IGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKG5vZGUpO1xuICBjb25zdCBpc0JvZHkgPSBzY3JvbGxhYmxlQW5jZXN0b3IgPT09ICgoX25vZGUkb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9ub2RlJG93bmVyRG9jdW1lbnQuYm9keSk7XG4gIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhzY3JvbGxhYmxlQW5jZXN0b3IpO1xuICBpZiAoaXNCb2R5KSB7XG4gICAgcmV0dXJuIGxpc3QuY29uY2F0KHdpbiwgd2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc092ZXJmbG93RWxlbWVudChzY3JvbGxhYmxlQW5jZXN0b3IpID8gc2Nyb2xsYWJsZUFuY2VzdG9yIDogW10pO1xuICB9XG4gIHJldHVybiBsaXN0LmNvbmNhdChzY3JvbGxhYmxlQW5jZXN0b3IsIGdldE92ZXJmbG93QW5jZXN0b3JzKHNjcm9sbGFibGVBbmNlc3RvcikpO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgY29uc3Qgd2luID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICBjb25zdCBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICBjb25zdCB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgbGV0IHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgbGV0IGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICBsZXQgeCA9IDA7XG4gIGxldCB5ID0gMDtcbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG4gICAgY29uc3QgdmlzdWFsVmlld3BvcnRCYXNlZCA9IGlzU2FmYXJpKCk7XG4gICAgaWYgKCF2aXN1YWxWaWV3cG9ydEJhc2VkIHx8IHZpc3VhbFZpZXdwb3J0QmFzZWQgJiYgc3RyYXRlZ3kgPT09ICdmaXhlZCcpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgeCxcbiAgICB5XG4gIH07XG59XG5cbi8vIFJldHVybnMgdGhlIGlubmVyIGNsaWVudCByZWN0LCBzdWJ0cmFjdGluZyBzY3JvbGxiYXJzIGlmIHByZXNlbnQuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBzdHJhdGVneSkge1xuICBjb25zdCBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHRydWUsIHN0cmF0ZWd5ID09PSAnZml4ZWQnKTtcbiAgY29uc3QgdG9wID0gY2xpZW50UmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgY29uc3QgbGVmdCA9IGNsaWVudFJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgY29uc3Qgc2NhbGUgPSBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0U2NhbGUoZWxlbWVudCkgOiBjcmVhdGVFbXB0eUNvb3JkcygxKTtcbiAgY29uc3Qgd2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoICogc2NhbGUueDtcbiAgY29uc3QgaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY2FsZS55O1xuICBjb25zdCB4ID0gbGVmdCAqIHNjYWxlLng7XG4gIGNvbnN0IHkgPSB0b3AgKiBzY2FsZS55O1xuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB4LFxuICAgIHlcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tQ2xpcHBpbmdBbmNlc3RvcihlbGVtZW50LCBjbGlwcGluZ0FuY2VzdG9yLCBzdHJhdGVneSkge1xuICBsZXQgcmVjdDtcbiAgaWYgKGNsaXBwaW5nQW5jZXN0b3IgPT09ICd2aWV3cG9ydCcpIHtcbiAgICByZWN0ID0gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KTtcbiAgfSBlbHNlIGlmIChjbGlwcGluZ0FuY2VzdG9yID09PSAnZG9jdW1lbnQnKSB7XG4gICAgcmVjdCA9IGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpO1xuICB9IGVsc2UgaWYgKGlzRWxlbWVudChjbGlwcGluZ0FuY2VzdG9yKSkge1xuICAgIHJlY3QgPSBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ0FuY2VzdG9yLCBzdHJhdGVneSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmlzdWFsT2Zmc2V0cyA9IGdldFZpc3VhbE9mZnNldHMoZWxlbWVudCk7XG4gICAgcmVjdCA9IHtcbiAgICAgIC4uLmNsaXBwaW5nQW5jZXN0b3IsXG4gICAgICB4OiBjbGlwcGluZ0FuY2VzdG9yLnggLSB2aXN1YWxPZmZzZXRzLngsXG4gICAgICB5OiBjbGlwcGluZ0FuY2VzdG9yLnkgLSB2aXN1YWxPZmZzZXRzLnlcbiAgICB9O1xuICB9XG4gIHJldHVybiByZWN0VG9DbGllbnRSZWN0KHJlY3QpO1xufVxuZnVuY3Rpb24gaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yKGVsZW1lbnQsIHN0b3BOb2RlKSB7XG4gIGNvbnN0IHBhcmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICBpZiAocGFyZW50Tm9kZSA9PT0gc3RvcE5vZGUgfHwgIWlzRWxlbWVudChwYXJlbnROb2RlKSB8fCBpc0xhc3RUcmF2ZXJzYWJsZU5vZGUocGFyZW50Tm9kZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUkMShwYXJlbnROb2RlKS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyB8fCBoYXNGaXhlZFBvc2l0aW9uQW5jZXN0b3IocGFyZW50Tm9kZSwgc3RvcE5vZGUpO1xufVxuXG4vLyBBIFwiY2xpcHBpbmcgYW5jZXN0b3JcIiBpcyBhbiBgb3ZlcmZsb3dgIGVsZW1lbnQgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIGNoaWxkIGVsZW1lbnRzLiBUaGlzIHJldHVybnMgYWxsIGNsaXBwaW5nIGFuY2VzdG9yc1xuLy8gb2YgdGhlIGdpdmVuIGVsZW1lbnQgdXAgdGhlIHRyZWUuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ0VsZW1lbnRBbmNlc3RvcnMoZWxlbWVudCwgY2FjaGUpIHtcbiAgY29uc3QgY2FjaGVkUmVzdWx0ID0gY2FjaGUuZ2V0KGVsZW1lbnQpO1xuICBpZiAoY2FjaGVkUmVzdWx0KSB7XG4gICAgcmV0dXJuIGNhY2hlZFJlc3VsdDtcbiAgfVxuICBsZXQgcmVzdWx0ID0gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMoZWxlbWVudCkuZmlsdGVyKGVsID0+IGlzRWxlbWVudChlbCkgJiYgZ2V0Tm9kZU5hbWUoZWwpICE9PSAnYm9keScpO1xuICBsZXQgY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgPSBudWxsO1xuICBjb25zdCBlbGVtZW50SXNGaXhlZCA9IGdldENvbXB1dGVkU3R5bGUkMShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJztcbiAgbGV0IGN1cnJlbnROb2RlID0gZWxlbWVudElzRml4ZWQgPyBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIDogZWxlbWVudDtcblxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuICB3aGlsZSAoaXNFbGVtZW50KGN1cnJlbnROb2RlKSAmJiAhaXNMYXN0VHJhdmVyc2FibGVOb2RlKGN1cnJlbnROb2RlKSkge1xuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlJDEoY3VycmVudE5vZGUpO1xuICAgIGNvbnN0IGN1cnJlbnROb2RlSXNDb250YWluaW5nID0gaXNDb250YWluaW5nQmxvY2soY3VycmVudE5vZGUpO1xuICAgIGlmICghY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgJiYgY29tcHV0ZWRTdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgPSBudWxsO1xuICAgIH1cbiAgICBjb25zdCBzaG91bGREcm9wQ3VycmVudE5vZGUgPSBlbGVtZW50SXNGaXhlZCA/ICFjdXJyZW50Tm9kZUlzQ29udGFpbmluZyAmJiAhY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUgOiAhY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgJiYgY29tcHV0ZWRTdHlsZS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycgJiYgISFjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSAmJiBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5jbHVkZXMoY3VycmVudENvbnRhaW5pbmdCbG9ja0NvbXB1dGVkU3R5bGUucG9zaXRpb24pIHx8IGlzT3ZlcmZsb3dFbGVtZW50KGN1cnJlbnROb2RlKSAmJiAhY3VycmVudE5vZGVJc0NvbnRhaW5pbmcgJiYgaGFzRml4ZWRQb3NpdGlvbkFuY2VzdG9yKGVsZW1lbnQsIGN1cnJlbnROb2RlKTtcbiAgICBpZiAoc2hvdWxkRHJvcEN1cnJlbnROb2RlKSB7XG4gICAgICAvLyBEcm9wIG5vbi1jb250YWluaW5nIGJsb2Nrcy5cbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoYW5jZXN0b3IgPT4gYW5jZXN0b3IgIT09IGN1cnJlbnROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVjb3JkIGxhc3QgY29udGFpbmluZyBibG9jayBmb3IgbmV4dCBpdGVyYXRpb24uXG4gICAgICBjdXJyZW50Q29udGFpbmluZ0Jsb2NrQ29tcHV0ZWRTdHlsZSA9IGNvbXB1dGVkU3R5bGU7XG4gICAgfVxuICAgIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShjdXJyZW50Tm9kZSk7XG4gIH1cbiAgY2FjaGUuc2V0KGVsZW1lbnQsIHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIGFuY2VzdG9ycy5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChfcmVmKSB7XG4gIGxldCB7XG4gICAgZWxlbWVudCxcbiAgICBib3VuZGFyeSxcbiAgICByb290Qm91bmRhcnksXG4gICAgc3RyYXRlZ3lcbiAgfSA9IF9yZWY7XG4gIGNvbnN0IGVsZW1lbnRDbGlwcGluZ0FuY2VzdG9ycyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdBbmNlc3RvcnMnID8gZ2V0Q2xpcHBpbmdFbGVtZW50QW5jZXN0b3JzKGVsZW1lbnQsIHRoaXMuX2MpIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgY29uc3QgY2xpcHBpbmdBbmNlc3RvcnMgPSBbLi4uZWxlbWVudENsaXBwaW5nQW5jZXN0b3JzLCByb290Qm91bmRhcnldO1xuICBjb25zdCBmaXJzdENsaXBwaW5nQW5jZXN0b3IgPSBjbGlwcGluZ0FuY2VzdG9yc1swXTtcbiAgY29uc3QgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdBbmNlc3RvcnMucmVkdWNlKChhY2NSZWN0LCBjbGlwcGluZ0FuY2VzdG9yKSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGdldENsaWVudFJlY3RGcm9tQ2xpcHBpbmdBbmNlc3RvcihlbGVtZW50LCBjbGlwcGluZ0FuY2VzdG9yLCBzdHJhdGVneSk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21DbGlwcGluZ0FuY2VzdG9yKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdBbmNlc3Rvciwgc3RyYXRlZ3kpKTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQsXG4gICAgaGVpZ2h0OiBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcCxcbiAgICB4OiBjbGlwcGluZ1JlY3QubGVmdCxcbiAgICB5OiBjbGlwcGluZ1JlY3QudG9wXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldERpbWVuc2lvbnMoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0Q3NzRGltZW5zaW9ucyhlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50LCBwb2x5ZmlsbCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHBvbHlmaWxsKSB7XG4gICAgcmV0dXJuIHBvbHlmaWxsKGVsZW1lbnQpO1xuICB9XG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn1cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIGxldCBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiAhaXNMYXN0VHJhdmVyc2FibGVOb2RlKGN1cnJlbnROb2RlKSkge1xuICAgIGlmIChpc0NvbnRhaW5pbmdCbG9jayhjdXJyZW50Tm9kZSkpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGN1cnJlbnROb2RlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCwgcG9seWZpbGwpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG4gIGxldCBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQsIHBvbHlmaWxsKTtcbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUkMShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50LCBwb2x5ZmlsbCk7XG4gIH1cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlJDEob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycgJiYgIWlzQ29udGFpbmluZ0Jsb2NrKG9mZnNldFBhcmVudCkpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGdldFJlY3RSZWxhdGl2ZVRvT2Zmc2V0UGFyZW50KGVsZW1lbnQsIG9mZnNldFBhcmVudCwgc3RyYXRlZ3kpIHtcbiAgY29uc3QgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIGNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50RWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICBjb25zdCBpc0ZpeGVkID0gc3RyYXRlZ3kgPT09ICdmaXhlZCc7XG4gIGNvbnN0IHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgdHJ1ZSwgaXNGaXhlZCwgb2Zmc2V0UGFyZW50KTtcbiAgbGV0IHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICBjb25zdCBvZmZzZXRzID0gY3JlYXRlRW1wdHlDb29yZHMoMCk7XG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IGlzT3ZlcmZsb3dFbGVtZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgY29uc3Qgb2Zmc2V0UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUsIGlzRml4ZWQsIG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggPSBvZmZzZXRSZWN0LnggKyBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSA9IG9mZnNldFJlY3QueSArIG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufVxuXG5jb25zdCBwbGF0Zm9ybSA9IHtcbiAgZ2V0Q2xpcHBpbmdSZWN0LFxuICBjb252ZXJ0T2Zmc2V0UGFyZW50UmVsYXRpdmVSZWN0VG9WaWV3cG9ydFJlbGF0aXZlUmVjdCxcbiAgaXNFbGVtZW50LFxuICBnZXREaW1lbnNpb25zLFxuICBnZXRPZmZzZXRQYXJlbnQsXG4gIGdldERvY3VtZW50RWxlbWVudCxcbiAgZ2V0U2NhbGUsXG4gIGFzeW5jIGdldEVsZW1lbnRSZWN0cyhfcmVmKSB7XG4gICAgbGV0IHtcbiAgICAgIHJlZmVyZW5jZSxcbiAgICAgIGZsb2F0aW5nLFxuICAgICAgc3RyYXRlZ3lcbiAgICB9ID0gX3JlZjtcbiAgICBjb25zdCBnZXRPZmZzZXRQYXJlbnRGbiA9IHRoaXMuZ2V0T2Zmc2V0UGFyZW50IHx8IGdldE9mZnNldFBhcmVudDtcbiAgICBjb25zdCBnZXREaW1lbnNpb25zRm4gPSB0aGlzLmdldERpbWVuc2lvbnM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZmVyZW5jZTogZ2V0UmVjdFJlbGF0aXZlVG9PZmZzZXRQYXJlbnQocmVmZXJlbmNlLCBhd2FpdCBnZXRPZmZzZXRQYXJlbnRGbihmbG9hdGluZyksIHN0cmF0ZWd5KSxcbiAgICAgIGZsb2F0aW5nOiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIC4uLihhd2FpdCBnZXREaW1lbnNpb25zRm4oZmxvYXRpbmcpKVxuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIGdldENsaWVudFJlY3RzOiBlbGVtZW50ID0+IEFycmF5LmZyb20oZWxlbWVudC5nZXRDbGllbnRSZWN0cygpKSxcbiAgaXNSVEw6IGVsZW1lbnQgPT4gZ2V0Q29tcHV0ZWRTdHlsZSQxKGVsZW1lbnQpLmRpcmVjdGlvbiA9PT0gJ3J0bCdcbn07XG5cbi8vIGh0dHBzOi8vc2FtdGhvci5hdS8yMDIxL29ic2VydmluZy1kb20vXG5mdW5jdGlvbiBvYnNlcnZlTW92ZShlbGVtZW50LCBvbk1vdmUpIHtcbiAgbGV0IGlvID0gbnVsbDtcbiAgbGV0IHRpbWVvdXRJZDtcbiAgY29uc3Qgcm9vdCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICBpbyAmJiBpby5kaXNjb25uZWN0KCk7XG4gICAgaW8gPSBudWxsO1xuICB9XG4gIGZ1bmN0aW9uIHJlZnJlc2goc2tpcCwgdGhyZXNob2xkKSB7XG4gICAgaWYgKHNraXAgPT09IHZvaWQgMCkge1xuICAgICAgc2tpcCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhyZXNob2xkID09PSB2b2lkIDApIHtcbiAgICAgIHRocmVzaG9sZCA9IDE7XG4gICAgfVxuICAgIGNsZWFudXAoKTtcbiAgICBjb25zdCB7XG4gICAgICBsZWZ0LFxuICAgICAgdG9wLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICB9ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoIXNraXApIHtcbiAgICAgIG9uTW92ZSgpO1xuICAgIH1cbiAgICBpZiAoIXdpZHRoIHx8ICFoZWlnaHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5zZXRUb3AgPSBmbG9vcih0b3ApO1xuICAgIGNvbnN0IGluc2V0UmlnaHQgPSBmbG9vcihyb290LmNsaWVudFdpZHRoIC0gKGxlZnQgKyB3aWR0aCkpO1xuICAgIGNvbnN0IGluc2V0Qm90dG9tID0gZmxvb3Iocm9vdC5jbGllbnRIZWlnaHQgLSAodG9wICsgaGVpZ2h0KSk7XG4gICAgY29uc3QgaW5zZXRMZWZ0ID0gZmxvb3IobGVmdCk7XG4gICAgY29uc3Qgcm9vdE1hcmdpbiA9IC1pbnNldFRvcCArIFwicHggXCIgKyAtaW5zZXRSaWdodCArIFwicHggXCIgKyAtaW5zZXRCb3R0b20gKyBcInB4IFwiICsgLWluc2V0TGVmdCArIFwicHhcIjtcbiAgICBsZXQgaXNGaXJzdFVwZGF0ZSA9IHRydWU7XG4gICAgaW8gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBjb25zdCByYXRpbyA9IGVudHJpZXNbMF0uaW50ZXJzZWN0aW9uUmF0aW87XG4gICAgICBpZiAocmF0aW8gIT09IHRocmVzaG9sZCkge1xuICAgICAgICBpZiAoIWlzRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgICByZXR1cm4gcmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYXRpbyA9PT0gMCkge1xuICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVmcmVzaChmYWxzZSwgMWUtNyk7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWZyZXNoKGZhbHNlLCByYXRpbyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlzRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICB9LCB7XG4gICAgICByb290TWFyZ2luLFxuICAgICAgdGhyZXNob2xkXG4gICAgfSk7XG4gICAgaW8ub2JzZXJ2ZShlbGVtZW50KTtcbiAgfVxuICByZWZyZXNoKHRydWUpO1xuICByZXR1cm4gY2xlYW51cDtcbn1cblxuLyoqXG4gKiBBdXRvbWF0aWNhbGx5IHVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBmbG9hdGluZyBlbGVtZW50IHdoZW4gbmVjZXNzYXJ5LlxuICogU2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW4gdGhlIGZsb2F0aW5nIGVsZW1lbnQgaXMgbW91bnRlZCBvbiB0aGUgRE9NIG9yXG4gKiB2aXNpYmxlIG9uIHRoZSBzY3JlZW4uXG4gKiBAcmV0dXJucyBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIGludm9rZWQgd2hlbiB0aGUgZmxvYXRpbmcgZWxlbWVudCBpc1xuICogcmVtb3ZlZCBmcm9tIHRoZSBET00gb3IgaGlkZGVuIGZyb20gdGhlIHNjcmVlbi5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hdXRvVXBkYXRlXG4gKi9cbmZ1bmN0aW9uIGF1dG9VcGRhdGUocmVmZXJlbmNlLCBmbG9hdGluZywgdXBkYXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgY29uc3Qge1xuICAgIGFuY2VzdG9yU2Nyb2xsID0gdHJ1ZSxcbiAgICBhbmNlc3RvclJlc2l6ZSA9IHRydWUsXG4gICAgZWxlbWVudFJlc2l6ZSA9IHRydWUsXG4gICAgbGF5b3V0U2hpZnQgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicsXG4gICAgYW5pbWF0aW9uRnJhbWUgPSBmYWxzZVxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcmVmZXJlbmNlRWwgPSB1bndyYXBFbGVtZW50KHJlZmVyZW5jZSk7XG4gIGNvbnN0IGFuY2VzdG9ycyA9IGFuY2VzdG9yU2Nyb2xsIHx8IGFuY2VzdG9yUmVzaXplID8gWy4uLihyZWZlcmVuY2VFbCA/IGdldE92ZXJmbG93QW5jZXN0b3JzKHJlZmVyZW5jZUVsKSA6IFtdKSwgLi4uZ2V0T3ZlcmZsb3dBbmNlc3RvcnMoZmxvYXRpbmcpXSA6IFtdO1xuICBhbmNlc3RvcnMuZm9yRWFjaChhbmNlc3RvciA9PiB7XG4gICAgYW5jZXN0b3JTY3JvbGwgJiYgYW5jZXN0b3IuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gICAgYW5jZXN0b3JSZXNpemUgJiYgYW5jZXN0b3IuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlKTtcbiAgfSk7XG4gIGNvbnN0IGNsZWFudXBJbyA9IHJlZmVyZW5jZUVsICYmIGxheW91dFNoaWZ0ID8gb2JzZXJ2ZU1vdmUocmVmZXJlbmNlRWwsIHVwZGF0ZSkgOiBudWxsO1xuICBsZXQgcmVzaXplT2JzZXJ2ZXIgPSBudWxsO1xuICBpZiAoZWxlbWVudFJlc2l6ZSkge1xuICAgIHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKHVwZGF0ZSk7XG4gICAgaWYgKHJlZmVyZW5jZUVsICYmICFhbmltYXRpb25GcmFtZSkge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShyZWZlcmVuY2VFbCk7XG4gICAgfVxuICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZmxvYXRpbmcpO1xuICB9XG4gIGxldCBmcmFtZUlkO1xuICBsZXQgcHJldlJlZlJlY3QgPSBhbmltYXRpb25GcmFtZSA/IGdldEJvdW5kaW5nQ2xpZW50UmVjdChyZWZlcmVuY2UpIDogbnVsbDtcbiAgaWYgKGFuaW1hdGlvbkZyYW1lKSB7XG4gICAgZnJhbWVMb29wKCk7XG4gIH1cbiAgZnVuY3Rpb24gZnJhbWVMb29wKCkge1xuICAgIGNvbnN0IG5leHRSZWZSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHJlZmVyZW5jZSk7XG4gICAgaWYgKHByZXZSZWZSZWN0ICYmIChuZXh0UmVmUmVjdC54ICE9PSBwcmV2UmVmUmVjdC54IHx8IG5leHRSZWZSZWN0LnkgIT09IHByZXZSZWZSZWN0LnkgfHwgbmV4dFJlZlJlY3Qud2lkdGggIT09IHByZXZSZWZSZWN0LndpZHRoIHx8IG5leHRSZWZSZWN0LmhlaWdodCAhPT0gcHJldlJlZlJlY3QuaGVpZ2h0KSkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICAgIHByZXZSZWZSZWN0ID0gbmV4dFJlZlJlY3Q7XG4gICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmcmFtZUxvb3ApO1xuICB9XG4gIHVwZGF0ZSgpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGFuY2VzdG9ycy5mb3JFYWNoKGFuY2VzdG9yID0+IHtcbiAgICAgIGFuY2VzdG9yU2Nyb2xsICYmIGFuY2VzdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZSk7XG4gICAgICBhbmNlc3RvclJlc2l6ZSAmJiBhbmNlc3Rvci5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGUpO1xuICAgIH0pO1xuICAgIGNsZWFudXBJbyAmJiBjbGVhbnVwSW8oKTtcbiAgICByZXNpemVPYnNlcnZlciAmJiByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgcmVzaXplT2JzZXJ2ZXIgPSBudWxsO1xuICAgIGlmIChhbmltYXRpb25GcmFtZSkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBgeGAgYW5kIGB5YCBjb29yZGluYXRlcyB0aGF0IHdpbGwgcGxhY2UgdGhlIGZsb2F0aW5nIGVsZW1lbnRcbiAqIG5leHQgdG8gYSByZWZlcmVuY2UgZWxlbWVudCB3aGVuIGl0IGlzIGdpdmVuIGEgY2VydGFpbiBDU1MgcG9zaXRpb25pbmdcbiAqIHN0cmF0ZWd5LlxuICovXG5jb25zdCBjb21wdXRlUG9zaXRpb24gPSAocmVmZXJlbmNlLCBmbG9hdGluZywgb3B0aW9ucykgPT4ge1xuICAvLyBUaGlzIGNhY2hlcyB0aGUgZXhwZW5zaXZlIGBnZXRDbGlwcGluZ0VsZW1lbnRBbmNlc3RvcnNgIGZ1bmN0aW9uIHNvIHRoYXRcbiAgLy8gbXVsdGlwbGUgbGlmZWN5Y2xlIHJlc2V0cyByZS11c2UgdGhlIHNhbWUgcmVzdWx0LiBJdCBvbmx5IGxpdmVzIGZvciBhXG4gIC8vIHNpbmdsZSBjYWxsLiBJZiBvdGhlciBmdW5jdGlvbnMgYmVjb21lIGV4cGVuc2l2ZSwgd2UgY2FuIGFkZCB0aGVtIGFzIHdlbGwuXG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xuICAgIHBsYXRmb3JtLFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcbiAgY29uc3QgcGxhdGZvcm1XaXRoQ2FjaGUgPSB7XG4gICAgLi4ubWVyZ2VkT3B0aW9ucy5wbGF0Zm9ybSxcbiAgICBfYzogY2FjaGVcbiAgfTtcbiAgcmV0dXJuIGNvbXB1dGVQb3NpdGlvbiQxKHJlZmVyZW5jZSwgZmxvYXRpbmcsIHtcbiAgICAuLi5tZXJnZWRPcHRpb25zLFxuICAgIHBsYXRmb3JtOiBwbGF0Zm9ybVdpdGhDYWNoZVxuICB9KTtcbn07XG5cbi8qKlxuICogVGhpcyBtb2R1bGUgaGVscHMgdXNlcnMgcHJvdmlkZSBjdXN0b20gY29uZmlndXJhdGlvbiBmb3IgY29tcG9uZW50IGludGVybmFscy5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgY29uZmlnT3ZlcnJpZGVzID0gZ2xvYmFsVGhpc1tcImNhbGNpdGVDb21wb25lbnRzQ29uZmlnXCJdO1xuY29uc3QgY29uZmlnID0ge1xuICAvKipcbiAgICogV2UgYXBwbHkgYSBjdXN0b20gZml4IHRvIGltcHJvdmUgcG9zaXRpb25pbmcgZm9yIG5vbi1DaHJvbWl1bSBicm93c2Vycy5cbiAgICogVGhlIGZpeCBjb21lcyBhdCBhIHBlcmZvcm1hbmNlIGNvc3QsIHNvIHByb3ZpZGVzIHVzZXJzIGEgd2F5IHRvIG9wdC1vdXQgaWYgbmVjZXNzYXJ5LlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGZsb2F0aW5nVUlOb25DaHJvbWl1bVBvc2l0aW9uaW5nRml4OiB0cnVlLFxuICAuLi5jb25maWdPdmVycmlkZXNcbn07XG5cbmNvbnN0IGZsb2F0aW5nVUlCcm93c2VyQ2hlY2sgPSBwYXRjaEZsb2F0aW5nVWlGb3JOb25DaHJvbWl1bUJyb3dzZXJzKCk7XG5mdW5jdGlvbiBpc0Nocm9tZTEwOU9yQWJvdmUoKSB7XG4gIGNvbnN0IHVhRGF0YSA9IGdldFVzZXJBZ2VudERhdGEoKTtcbiAgaWYgKHVhRGF0YT8uYnJhbmRzKSB7XG4gICAgcmV0dXJuICEhdWFEYXRhLmJyYW5kcy5maW5kKCh7IGJyYW5kLCB2ZXJzaW9uIH0pID0+IChicmFuZCA9PT0gXCJHb29nbGUgQ2hyb21lXCIgfHwgYnJhbmQgPT09IFwiQ2hyb21pdW1cIikgJiYgTnVtYmVyKHZlcnNpb24pID49IDEwOSk7XG4gIH1cbiAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5zcGxpdChcIiBcIikuZmluZCgodWEpID0+IHtcbiAgICBjb25zdCBbYnJvd3NlciwgdmVyc2lvbl0gPSB1YS5zcGxpdChcIi9cIik7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09IFwiQ2hyb21lXCIgJiYgcGFyc2VJbnQodmVyc2lvbikgPj0gMTA5O1xuICB9KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHBhdGNoRmxvYXRpbmdVaUZvck5vbkNocm9taXVtQnJvd3NlcnMoKSB7XG4gIGlmIChjb25maWcuZmxvYXRpbmdVSU5vbkNocm9taXVtUG9zaXRpb25pbmdGaXggJiZcbiAgICAvLyDimqDvuI8gYnJvd3Nlci1zbmlmZmluZyBpcyBub3QgYSBiZXN0IHByYWN0aWNlIGFuZCBzaG91bGQgYmUgYXZvaWRlZCDimqDvuI9cbiAgICAoL2ZpcmVmb3h8c2FmYXJpL2kudGVzdChnZXRVc2VyQWdlbnRTdHJpbmcoKSkgfHwgaXNDaHJvbWUxMDlPckFib3ZlKCkpKSB7XG4gICAgY29uc3QgeyBvZmZzZXRQYXJlbnQgfSA9IGF3YWl0IGltcG9ydCgnLi9jb21wb3NlZC1vZmZzZXQtcG9zaXRpb24uZXNtLTRiYWU2YTBiLmpzJyk7XG4gICAgY29uc3Qgb3JpZ2luYWxHZXRPZmZzZXRQYXJlbnQgPSBwbGF0Zm9ybS5nZXRPZmZzZXRQYXJlbnQ7XG4gICAgcGxhdGZvcm0uZ2V0T2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQpID0+IG9yaWdpbmFsR2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQsIG9mZnNldFBhcmVudCk7XG4gIH1cbn1cbi8qKlxuICogUG9zaXRpb25zIHRoZSBmbG9hdGluZyBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAqXG4gKiAqKk5vdGU6KiogZXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seVxuICpcbiAqIEBwYXJhbSByb290MFxuICogQHBhcmFtIHJvb3QwLnJlZmVyZW5jZUVsXG4gKiBAcGFyYW0gcm9vdDAuZmxvYXRpbmdFbFxuICogQHBhcmFtIHJvb3QwLm92ZXJsYXlQb3NpdGlvbmluZ1xuICogQHBhcmFtIHJvb3QwLnBsYWNlbWVudFxuICogQHBhcmFtIHJvb3QwLmZsaXBEaXNhYmxlZFxuICogQHBhcmFtIHJvb3QwLmZsaXBQbGFjZW1lbnRzXG4gKiBAcGFyYW0gcm9vdDAub2Zmc2V0RGlzdGFuY2VcbiAqIEBwYXJhbSByb290MC5vZmZzZXRTa2lkZGluZ1xuICogQHBhcmFtIHJvb3QwLmFycm93RWxcbiAqIEBwYXJhbSByb290MC50eXBlXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwucmVmZXJlbmNlRWxcbiAqIEBwYXJhbSByb290MC5yZWZlcmVuY2VFbC5mbG9hdGluZ0VsXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwub3ZlcmxheVBvc2l0aW9uaW5nXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwucGxhY2VtZW50XG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwuZmxpcERpc2FibGVkXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwuZmxpcFBsYWNlbWVudHNcbiAqIEBwYXJhbSByb290MC5yZWZlcmVuY2VFbC5vZmZzZXREaXN0YW5jZVxuICogQHBhcmFtIHJvb3QwLnJlZmVyZW5jZUVsLm9mZnNldFNraWRkaW5nXG4gKiBAcGFyYW0gcm9vdDAucmVmZXJlbmNlRWwuYXJyb3dFbFxuICogQHBhcmFtIHJvb3QwLnJlZmVyZW5jZUVsLnR5cGVcbiAqIEBwYXJhbSBjb21wb25lbnQucmVmZXJlbmNlRWxcbiAqIEBwYXJhbSBjb21wb25lbnQuZmxvYXRpbmdFbFxuICogQHBhcmFtIGNvbXBvbmVudC5vdmVybGF5UG9zaXRpb25pbmdcbiAqIEBwYXJhbSBjb21wb25lbnQucGxhY2VtZW50XG4gKiBAcGFyYW0gY29tcG9uZW50LmZsaXBEaXNhYmxlZFxuICogQHBhcmFtIGNvbXBvbmVudC5mbGlwUGxhY2VtZW50c1xuICogQHBhcmFtIGNvbXBvbmVudC5vZmZzZXREaXN0YW5jZVxuICogQHBhcmFtIGNvbXBvbmVudC5vZmZzZXRTa2lkZGluZ1xuICogQHBhcmFtIGNvbXBvbmVudC5hcnJvd0VsXG4gKiBAcGFyYW0gY29tcG9uZW50LnR5cGVcbiAqL1xuY29uc3QgcG9zaXRpb25GbG9hdGluZ1VJID0gXG4vKiB3ZSBleHBvcnQgYXJyb3cgZnVuY3Rpb24gdG8gYWxsb3cgdXMgdG8gc3B5IG9uIGl0IGR1cmluZyB0ZXN0aW5nICovXG5hc3luYyAoY29tcG9uZW50LCB7IHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCBvdmVybGF5UG9zaXRpb25pbmcgPSBcImFic29sdXRlXCIsIHBsYWNlbWVudCwgZmxpcERpc2FibGVkLCBmbGlwUGxhY2VtZW50cywgb2Zmc2V0RGlzdGFuY2UsIG9mZnNldFNraWRkaW5nLCBhcnJvd0VsLCB0eXBlIH0pID0+IHtcbiAgaWYgKCFyZWZlcmVuY2VFbCB8fCAhZmxvYXRpbmdFbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGF3YWl0IGZsb2F0aW5nVUlCcm93c2VyQ2hlY2s7XG4gIGNvbnN0IHsgeCwgeSwgcGxhY2VtZW50OiBlZmZlY3RpdmVQbGFjZW1lbnQsIHN0cmF0ZWd5OiBwb3NpdGlvbiwgbWlkZGxld2FyZURhdGEgfSA9IGF3YWl0IGNvbXB1dGVQb3NpdGlvbihyZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCwge1xuICAgIHN0cmF0ZWd5OiBvdmVybGF5UG9zaXRpb25pbmcsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnQgPT09IFwiYXV0b1wiIHx8IHBsYWNlbWVudCA9PT0gXCJhdXRvLXN0YXJ0XCIgfHwgcGxhY2VtZW50ID09PSBcImF1dG8tZW5kXCJcbiAgICAgID8gdW5kZWZpbmVkXG4gICAgICA6IGdldEVmZmVjdGl2ZVBsYWNlbWVudChmbG9hdGluZ0VsLCBwbGFjZW1lbnQpLFxuICAgIG1pZGRsZXdhcmU6IGdldE1pZGRsZXdhcmUoe1xuICAgICAgcGxhY2VtZW50LFxuICAgICAgZmxpcERpc2FibGVkLFxuICAgICAgZmxpcFBsYWNlbWVudHMsXG4gICAgICBvZmZzZXREaXN0YW5jZSxcbiAgICAgIG9mZnNldFNraWRkaW5nLFxuICAgICAgYXJyb3dFbCxcbiAgICAgIHR5cGVcbiAgICB9KVxuICB9KTtcbiAgaWYgKGFycm93RWwgJiYgbWlkZGxld2FyZURhdGEuYXJyb3cpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IG1pZGRsZXdhcmVEYXRhLmFycm93O1xuICAgIGNvbnN0IHNpZGUgPSBlZmZlY3RpdmVQbGFjZW1lbnQuc3BsaXQoXCItXCIpWzBdO1xuICAgIGNvbnN0IGFsaWdubWVudCA9IHggIT0gbnVsbCA/IFwibGVmdFwiIDogXCJ0b3BcIjtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBBUlJPV19DU1NfVFJBTlNGT1JNW3NpZGVdO1xuICAgIGNvbnN0IHJlc2V0ID0geyBsZWZ0OiBcIlwiLCB0b3A6IFwiXCIsIGJvdHRvbTogXCJcIiwgcmlnaHQ6IFwiXCIgfTtcbiAgICBpZiAoXCJmbG9hdGluZ0xheW91dFwiIGluIGNvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50LmZsb2F0aW5nTGF5b3V0ID0gc2lkZSA9PT0gXCJsZWZ0XCIgfHwgc2lkZSA9PT0gXCJyaWdodFwiID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCI7XG4gICAgfVxuICAgIE9iamVjdC5hc3NpZ24oYXJyb3dFbC5zdHlsZSwge1xuICAgICAgLi4ucmVzZXQsXG4gICAgICBbYWxpZ25tZW50XTogYCR7YWxpZ25tZW50ID09IFwibGVmdFwiID8geCA6IHl9cHhgLFxuICAgICAgW3NpZGVdOiBcIjEwMCVcIixcbiAgICAgIHRyYW5zZm9ybVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IHJlZmVyZW5jZUhpZGRlbiA9IG1pZGRsZXdhcmVEYXRhLmhpZGU/LnJlZmVyZW5jZUhpZGRlbjtcbiAgY29uc3QgdmlzaWJpbGl0eSA9IHJlZmVyZW5jZUhpZGRlbiA/IFwiaGlkZGVuXCIgOiBudWxsO1xuICBjb25zdCBwb2ludGVyRXZlbnRzID0gdmlzaWJpbGl0eSA/IFwibm9uZVwiIDogbnVsbDtcbiAgZmxvYXRpbmdFbC5zZXRBdHRyaWJ1dGUocGxhY2VtZW50RGF0YUF0dHJpYnV0ZSwgZWZmZWN0aXZlUGxhY2VtZW50KTtcbiAgY29uc3QgdHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke01hdGgucm91bmQoeCl9cHgsJHtNYXRoLnJvdW5kKHkpfXB4KWA7XG4gIE9iamVjdC5hc3NpZ24oZmxvYXRpbmdFbC5zdHlsZSwge1xuICAgIHZpc2liaWxpdHksXG4gICAgcG9pbnRlckV2ZW50cyxcbiAgICBwb3NpdGlvbixcbiAgICB0b3A6IFwiMFwiLFxuICAgIGxlZnQ6IFwiMFwiLFxuICAgIHRyYW5zZm9ybVxuICB9KTtcbn07XG4vKipcbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcbiAqL1xuY29uc3QgcGxhY2VtZW50RGF0YUF0dHJpYnV0ZSA9IFwiZGF0YS1wbGFjZW1lbnRcIjtcbi8qKlxuICogRXhwb3J0ZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seVxuICovXG5jb25zdCByZXBvc2l0aW9uRGVib3VuY2VUaW1lb3V0ID0gMTAwO1xuY29uc3QgZWZmZWN0aXZlUGxhY2VtZW50cyA9IFtcbiAgXCJ0b3BcIixcbiAgXCJib3R0b21cIixcbiAgXCJyaWdodFwiLFxuICBcImxlZnRcIixcbiAgXCJ0b3Atc3RhcnRcIixcbiAgXCJ0b3AtZW5kXCIsXG4gIFwiYm90dG9tLXN0YXJ0XCIsXG4gIFwiYm90dG9tLWVuZFwiLFxuICBcInJpZ2h0LXN0YXJ0XCIsXG4gIFwicmlnaHQtZW5kXCIsXG4gIFwibGVmdC1zdGFydFwiLFxuICBcImxlZnQtZW5kXCJcbl07XG5jb25zdCBkZWZhdWx0TWVudVBsYWNlbWVudCA9IFwiYm90dG9tLXN0YXJ0XCI7XG5jb25zdCBGbG9hdGluZ0NTUyA9IHtcbiAgYW5pbWF0aW9uOiBcImNhbGNpdGUtZmxvYXRpbmctdWktYW5pbVwiLFxuICBhbmltYXRpb25BY3RpdmU6IFwiY2FsY2l0ZS1mbG9hdGluZy11aS1hbmltLS1hY3RpdmVcIlxufTtcbmZ1bmN0aW9uIGdldE1pZGRsZXdhcmUoeyBwbGFjZW1lbnQsIGZsaXBEaXNhYmxlZCwgZmxpcFBsYWNlbWVudHMsIG9mZnNldERpc3RhbmNlLCBvZmZzZXRTa2lkZGluZywgYXJyb3dFbCwgdHlwZSB9KSB7XG4gIGNvbnN0IGRlZmF1bHRNaWRkbGV3YXJlID0gW3NoaWZ0KCksIGhpZGUoKV07XG4gIGlmICh0eXBlID09PSBcIm1lbnVcIikge1xuICAgIHJldHVybiBbXG4gICAgICAuLi5kZWZhdWx0TWlkZGxld2FyZSxcbiAgICAgIGZsaXAoe1xuICAgICAgICBmYWxsYmFja1BsYWNlbWVudHM6IGZsaXBQbGFjZW1lbnRzIHx8IFtcInRvcC1zdGFydFwiLCBcInRvcFwiLCBcInRvcC1lbmRcIiwgXCJib3R0b20tc3RhcnRcIiwgXCJib3R0b21cIiwgXCJib3R0b20tZW5kXCJdXG4gICAgICB9KVxuICAgIF07XG4gIH1cbiAgaWYgKHR5cGUgPT09IFwicG9wb3ZlclwiIHx8IHR5cGUgPT09IFwidG9vbHRpcFwiKSB7XG4gICAgY29uc3QgbWlkZGxld2FyZSA9IFtcbiAgICAgIC4uLmRlZmF1bHRNaWRkbGV3YXJlLFxuICAgICAgb2Zmc2V0KHtcbiAgICAgICAgbWFpbkF4aXM6IHR5cGVvZiBvZmZzZXREaXN0YW5jZSA9PT0gXCJudW1iZXJcIiA/IG9mZnNldERpc3RhbmNlIDogMCxcbiAgICAgICAgY3Jvc3NBeGlzOiB0eXBlb2Ygb2Zmc2V0U2tpZGRpbmcgPT09IFwibnVtYmVyXCIgPyBvZmZzZXRTa2lkZGluZyA6IDBcbiAgICAgIH0pXG4gICAgXTtcbiAgICBpZiAocGxhY2VtZW50ID09PSBcImF1dG9cIiB8fCBwbGFjZW1lbnQgPT09IFwiYXV0by1zdGFydFwiIHx8IHBsYWNlbWVudCA9PT0gXCJhdXRvLWVuZFwiKSB7XG4gICAgICBtaWRkbGV3YXJlLnB1c2goYXV0b1BsYWNlbWVudCh7IGFsaWdubWVudDogcGxhY2VtZW50ID09PSBcImF1dG8tc3RhcnRcIiA/IFwic3RhcnRcIiA6IHBsYWNlbWVudCA9PT0gXCJhdXRvLWVuZFwiID8gXCJlbmRcIiA6IG51bGwgfSkpO1xuICAgIH1cbiAgICBlbHNlIGlmICghZmxpcERpc2FibGVkKSB7XG4gICAgICBtaWRkbGV3YXJlLnB1c2goZmxpcChmbGlwUGxhY2VtZW50cyA/IHsgZmFsbGJhY2tQbGFjZW1lbnRzOiBmbGlwUGxhY2VtZW50cyB9IDoge30pKTtcbiAgICB9XG4gICAgaWYgKGFycm93RWwpIHtcbiAgICAgIG1pZGRsZXdhcmUucHVzaChhcnJvdyh7XG4gICAgICAgIGVsZW1lbnQ6IGFycm93RWxcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG1pZGRsZXdhcmU7XG4gIH1cbiAgcmV0dXJuIFtdO1xufVxuZnVuY3Rpb24gZmlsdGVyQ29tcHV0ZWRQbGFjZW1lbnRzKHBsYWNlbWVudHMsIGVsKSB7XG4gIGNvbnN0IGZpbHRlcmVkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuZmlsdGVyKChwbGFjZW1lbnQpID0+IGVmZmVjdGl2ZVBsYWNlbWVudHMuaW5jbHVkZXMocGxhY2VtZW50KSk7XG4gIGlmIChmaWx0ZXJlZFBsYWNlbWVudHMubGVuZ3RoICE9PSBwbGFjZW1lbnRzLmxlbmd0aCkge1xuICAgIGNvbnNvbGUud2FybihgJHtlbC50YWdOYW1lfTogSW52YWxpZCB2YWx1ZSBmb3VuZCBpbjogZmxpcFBsYWNlbWVudHMuIFRyeSBhbnkgb2YgdGhlc2U6ICR7ZWZmZWN0aXZlUGxhY2VtZW50c1xuICAgICAgLm1hcCgocGxhY2VtZW50KSA9PiBgXCIke3BsYWNlbWVudH1cImApXG4gICAgICAuam9pbihcIiwgXCIpXG4gICAgICAudHJpbSgpfWAsIHsgZWwgfSk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlcmVkUGxhY2VtZW50cztcbn1cbmZ1bmN0aW9uIGdldEVmZmVjdGl2ZVBsYWNlbWVudChmbG9hdGluZ0VsLCBwbGFjZW1lbnQpIHtcbiAgY29uc3QgcGxhY2VtZW50cyA9IFtcImxlZnRcIiwgXCJyaWdodFwiXTtcbiAgaWYgKGdldEVsZW1lbnREaXIoZmxvYXRpbmdFbCkgPT09IFwicnRsXCIpIHtcbiAgICBwbGFjZW1lbnRzLnJldmVyc2UoKTtcbiAgfVxuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlYWRpbmcvZ2ksIHBsYWNlbWVudHNbMF0pLnJlcGxhY2UoL3RyYWlsaW5nL2dpLCBwbGFjZW1lbnRzWzFdKTtcbn1cbi8qKlxuICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gbWFuYWdlIGByZXBvc2l0aW9uYCBjYWxscyBmb3IgRmxvYXRpbmdVSUNvbXBvbmVudHMgdGhhdCB1c2UgYHBvc2l0aW9uRmxvYXRpbmdVSS5cbiAqXG4gKiBOb3RlOiB0aGlzIGlzIG5vdCBuZWVkZWQgZm9yIGNvbXBvbmVudHMgdGhhdCB1c2UgYGNhbGNpdGUtcG9wb3ZlcmAuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEBwYXJhbSBvcHRpb25zLnJlZmVyZW5jZUVsXG4gKiBAcGFyYW0gb3B0aW9ucy5mbG9hdGluZ0VsXG4gKiBAcGFyYW0gb3B0aW9ucy5vdmVybGF5UG9zaXRpb25pbmdcbiAqIEBwYXJhbSBvcHRpb25zLnBsYWNlbWVudFxuICogQHBhcmFtIG9wdGlvbnMuZmxpcERpc2FibGVkXG4gKiBAcGFyYW0gb3B0aW9ucy5mbGlwUGxhY2VtZW50c1xuICogQHBhcmFtIG9wdGlvbnMub2Zmc2V0RGlzdGFuY2VcbiAqIEBwYXJhbSBvcHRpb25zLm9mZnNldFNraWRkaW5nXG4gKiBAcGFyYW0gb3B0aW9ucy5hcnJvd0VsXG4gKiBAcGFyYW0gb3B0aW9ucy50eXBlXG4gKiBAcGFyYW0gZGVsYXllZFxuICovXG5hc3luYyBmdW5jdGlvbiByZXBvc2l0aW9uKGNvbXBvbmVudCwgb3B0aW9ucywgZGVsYXllZCA9IGZhbHNlKSB7XG4gIGlmICghY29tcG9uZW50Lm9wZW4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcG9zaXRpb25GdW5jdGlvbiA9IGRlbGF5ZWQgPyBnZXREZWJvdW5jZWRSZXBvc2l0aW9uKGNvbXBvbmVudCkgOiBwb3NpdGlvbkZsb2F0aW5nVUk7XG4gIHJldHVybiBwb3NpdGlvbkZ1bmN0aW9uKGNvbXBvbmVudCwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBnZXREZWJvdW5jZWRSZXBvc2l0aW9uKGNvbXBvbmVudCkge1xuICBsZXQgZGVib3VuY2VkID0gY29tcG9uZW50VG9EZWJvdW5jZWRSZXBvc2l0aW9uTWFwLmdldChjb21wb25lbnQpO1xuICBpZiAoZGVib3VuY2VkKSB7XG4gICAgcmV0dXJuIGRlYm91bmNlZDtcbiAgfVxuICBkZWJvdW5jZWQgPSBkZWJvdW5jZShwb3NpdGlvbkZsb2F0aW5nVUksIHJlcG9zaXRpb25EZWJvdW5jZVRpbWVvdXQsIHtcbiAgICBsZWFkaW5nOiB0cnVlLFxuICAgIG1heFdhaXQ6IHJlcG9zaXRpb25EZWJvdW5jZVRpbWVvdXRcbiAgfSk7XG4gIGNvbXBvbmVudFRvRGVib3VuY2VkUmVwb3NpdGlvbk1hcC5zZXQoY29tcG9uZW50LCBkZWJvdW5jZWQpO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuY29uc3QgQVJST1dfQ1NTX1RSQU5TRk9STSA9IHtcbiAgdG9wOiBcIlwiLFxuICBsZWZ0OiBcInJvdGF0ZSgtOTBkZWcpXCIsXG4gIGJvdHRvbTogXCJyb3RhdGUoMTgwZGVnKVwiLFxuICByaWdodDogXCJyb3RhdGUoOTBkZWcpXCJcbn07XG4vKipcbiAqIEV4cG9ydGVkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHlcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgY2xlYW51cE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCBjb21wb25lbnRUb0RlYm91bmNlZFJlcG9zaXRpb25NYXAgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBIZWxwZXIgdG8gc2V0IHVwIGZsb2F0aW5nIGVsZW1lbnQgaW50ZXJhY3Rpb25zIG9uIGNvbm5lY3RlZENhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSByZWZlcmVuY2VFbFxuICogQHBhcmFtIGZsb2F0aW5nRWxcbiAqL1xuZnVuY3Rpb24gY29ubmVjdEZsb2F0aW5nVUkoY29tcG9uZW50LCByZWZlcmVuY2VFbCwgZmxvYXRpbmdFbCkge1xuICBpZiAoIWZsb2F0aW5nRWwgfHwgIXJlZmVyZW5jZUVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRpc2Nvbm5lY3RGbG9hdGluZ1VJKGNvbXBvbmVudCwgcmVmZXJlbmNlRWwsIGZsb2F0aW5nRWwpO1xuICBPYmplY3QuYXNzaWduKGZsb2F0aW5nRWwuc3R5bGUsIHtcbiAgICB2aXNpYmlsaXR5OiBcImhpZGRlblwiLFxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxuICAgIC8vIGluaXRpYWwgcG9zaXRpb25pbmcgYmFzZWQgb24gaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9jb21wdXRlUG9zaXRpb24jaW5pdGlhbC1sYXlvdXRcbiAgICBwb3NpdGlvbjogY29tcG9uZW50Lm92ZXJsYXlQb3NpdGlvbmluZyxcbiAgICB0b3A6IFwiMFwiLFxuICAgIGxlZnQ6IFwiMFwiXG4gIH0pO1xuICBjb25zdCBydW5BdXRvVXBkYXRlID0gYXV0b1VwZGF0ZVxuICAgIDtcbiAgY2xlYW51cE1hcC5zZXQoY29tcG9uZW50LCBydW5BdXRvVXBkYXRlKHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsLCAoKSA9PiBjb21wb25lbnQucmVwb3NpdGlvbigpKSk7XG59XG4vKipcbiAqIEhlbHBlciB0byB0ZWFyIGRvd24gZmxvYXRpbmcgZWxlbWVudCBpbnRlcmFjdGlvbnMgb24gZGlzY29ubmVjdGVkQ2FsbGJhY2suXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICogQHBhcmFtIHJlZmVyZW5jZUVsXG4gKiBAcGFyYW0gZmxvYXRpbmdFbFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0RmxvYXRpbmdVSShjb21wb25lbnQsIHJlZmVyZW5jZUVsLCBmbG9hdGluZ0VsKSB7XG4gIGlmICghZmxvYXRpbmdFbCB8fCAhcmVmZXJlbmNlRWwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY2xlYW51cE1hcC5nZXQoY29tcG9uZW50KT8uKCk7XG4gIGNsZWFudXBNYXAuZGVsZXRlKGNvbXBvbmVudCk7XG4gIGNvbXBvbmVudFRvRGVib3VuY2VkUmVwb3NpdGlvbk1hcC5nZXQoY29tcG9uZW50KT8uY2FuY2VsKCk7XG4gIGNvbXBvbmVudFRvRGVib3VuY2VkUmVwb3NpdGlvbk1hcC5kZWxldGUoY29tcG9uZW50KTtcbn1cbmNvbnN0IHZpc2libGVQb2ludGVyU2l6ZSA9IDQ7XG4vKipcbiAqIERlZmF1bHQgb2Zmc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgZmxvYXRpbmcgZWxlbWVudCBhd2F5IGZyb20gdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICpcbiAqIEBkZWZhdWx0IDZcbiAqL1xuY29uc3QgZGVmYXVsdE9mZnNldERpc3RhbmNlID0gTWF0aC5jZWlsKE1hdGguaHlwb3QodmlzaWJsZVBvaW50ZXJTaXplLCB2aXNpYmxlUG9pbnRlclNpemUpKTtcblxuZXhwb3J0IHsgRmxvYXRpbmdDU1MgYXMgRiwgZGlzY29ubmVjdEZsb2F0aW5nVUkgYXMgYSwgZGVmYXVsdE9mZnNldERpc3RhbmNlIGFzIGIsIGNvbm5lY3RGbG9hdGluZ1VJIGFzIGMsIGRlZmF1bHRNZW51UGxhY2VtZW50IGFzIGQsIGZpbHRlckNvbXB1dGVkUGxhY2VtZW50cyBhcyBmLCByZXBvc2l0aW9uIGFzIHIgfTtcbiIsIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZCBmb3IgZGV0YWlscy5cbiAqIHYxLjQuM1xuICovXG5pbXBvcnQgeyBlIGFzIHJlYWRUYXNrIH0gZnJvbSAnLi9pbmRleC1jN2UwNWU2My5qcyc7XG5cbmNvbnN0IGNvbXBvbmVudFRvVHJhbnNpdGlvbkxpc3RlbmVycyA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiB0cmFuc2l0aW9uU3RhcnQoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gdGhpcy5vcGVuVHJhbnNpdGlvblByb3AgJiYgZXZlbnQudGFyZ2V0ID09PSB0aGlzLnRyYW5zaXRpb25FbCkge1xuICAgIHRoaXMub3BlbiA/IHRoaXMub25CZWZvcmVPcGVuKCkgOiB0aGlzLm9uQmVmb3JlQ2xvc2UoKTtcbiAgfVxufVxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChldmVudCkge1xuICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSB0aGlzLm9wZW5UcmFuc2l0aW9uUHJvcCAmJiBldmVudC50YXJnZXQgPT09IHRoaXMudHJhbnNpdGlvbkVsKSB7XG4gICAgdGhpcy5vcGVuID8gdGhpcy5vbk9wZW4oKSA6IHRoaXMub25DbG9zZSgpO1xuICB9XG59XG4vKipcbiAqIEhlbHBlciB0byBkZXRlcm1pbmUgZ2xvYmFsbHkgc2V0IHRyYW5zaXRpb24gZHVyYXRpb24gb24gdGhlIGdpdmVuIG9wZW5UcmFuc2l0aW9uUHJvcCwgd2hpY2ggaXMgaW1wb3J0ZWQgYW5kIHNldCBpbiB0aGUgQFdhdGNoKFwib3BlblwiKS5cbiAqIFVzZWQgdG8gZW1pdCAoYmVmb3JlKW9wZW4vY2xvc2UgZXZlbnRzIGJvdGggZm9yIHdoZW4gdGhlIG9wYWNpdHkgdHJhbnNpdGlvbiBpcyBwcmVzZW50IGFuZCB3aGVuIHRoZXJlIGlzIG5vbmUgKHRyYW5zaXRpb24tZHVyYXRpb24gaXMgc2V0IHRvIDApLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqIEBwYXJhbSBub25PcGVuQ2xvc2VDb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnQoY29tcG9uZW50LCBub25PcGVuQ2xvc2VDb21wb25lbnQgPSBmYWxzZSkge1xuICByZWFkVGFzaygoKSA9PiB7XG4gICAgaWYgKGNvbXBvbmVudC50cmFuc2l0aW9uRWwpIHtcbiAgICAgIGNvbnN0IGFsbFRyYW5zaXRpb25Qcm9wc0FycmF5ID0gZ2V0Q29tcHV0ZWRTdHlsZShjb21wb25lbnQudHJhbnNpdGlvbkVsKS50cmFuc2l0aW9uLnNwbGl0KFwiIFwiKTtcbiAgICAgIGNvbnN0IG9wZW5UcmFuc2l0aW9uUHJvcEluZGV4ID0gYWxsVHJhbnNpdGlvblByb3BzQXJyYXkuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09PSBjb21wb25lbnQub3BlblRyYW5zaXRpb25Qcm9wKTtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IGFsbFRyYW5zaXRpb25Qcm9wc0FycmF5W29wZW5UcmFuc2l0aW9uUHJvcEluZGV4ICsgMV07XG4gICAgICBpZiAodHJhbnNpdGlvbkR1cmF0aW9uID09PSBcIjBzXCIpIHtcbiAgICAgICAgKG5vbk9wZW5DbG9zZUNvbXBvbmVudCA/IGNvbXBvbmVudFtjb21wb25lbnQudHJhbnNpdGlvblByb3BdIDogY29tcG9uZW50Lm9wZW4pXG4gICAgICAgICAgPyBjb21wb25lbnQub25CZWZvcmVPcGVuKClcbiAgICAgICAgICA6IGNvbXBvbmVudC5vbkJlZm9yZUNsb3NlKCk7XG4gICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGNvbXBvbmVudC5vcGVuKVxuICAgICAgICAgID8gY29tcG9uZW50Lm9uT3BlbigpXG4gICAgICAgICAgOiBjb21wb25lbnQub25DbG9zZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25zdGFydFwiLCAoKSA9PiB7XG4gICAgICAgICAgKG5vbk9wZW5DbG9zZUNvbXBvbmVudCA/IGNvbXBvbmVudFtjb21wb25lbnQudHJhbnNpdGlvblByb3BdIDogY29tcG9uZW50Lm9wZW4pXG4gICAgICAgICAgICA/IGNvbXBvbmVudC5vbkJlZm9yZU9wZW4oKVxuICAgICAgICAgICAgOiBjb21wb25lbnQub25CZWZvcmVDbG9zZSgpO1xuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgKCkgPT4ge1xuICAgICAgICAgIChub25PcGVuQ2xvc2VDb21wb25lbnQgPyBjb21wb25lbnRbY29tcG9uZW50LnRyYW5zaXRpb25Qcm9wXSA6IGNvbXBvbmVudC5vcGVuKVxuICAgICAgICAgICAgPyBjb21wb25lbnQub25PcGVuKClcbiAgICAgICAgICAgIDogY29tcG9uZW50Lm9uQ2xvc2UoKTtcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4vKipcbiAqIEhlbHBlciB0byBrZWVwIHRyYWNrIG9mIHRyYW5zaXRpb24gbGlzdGVuZXJzIG9uIHNldFRyYW5zaXRpb25FbCBhbmQgY29ubmVjdGVkQ2FsbGJhY2sgb24gT3BlbkNsb3NlQ29tcG9uZW50IGNvbXBvbmVudHMuXG4gKlxuICogRm9yIGNvbXBvbmVudCB3aGljaCBkbyBub3QgaGF2ZSBvcGVuIHByb3AsIHVzZSBgb25Ub2dnbGVPcGVuQ2xvc2VDb21wb25lbnRgIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnRcbiAqL1xuZnVuY3Rpb24gY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgZGlzY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudChjb21wb25lbnQpO1xuICBpZiAoY29tcG9uZW50LnRyYW5zaXRpb25FbCkge1xuICAgIGNvbnN0IGJvdW5kT25UcmFuc2l0aW9uU3RhcnQgPSB0cmFuc2l0aW9uU3RhcnQuYmluZChjb21wb25lbnQpO1xuICAgIGNvbnN0IGJvdW5kT25UcmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZC5iaW5kKGNvbXBvbmVudCk7XG4gICAgY29tcG9uZW50VG9UcmFuc2l0aW9uTGlzdGVuZXJzLnNldChjb21wb25lbnQsIFtcbiAgICAgIGNvbXBvbmVudC50cmFuc2l0aW9uRWwsXG4gICAgICBib3VuZE9uVHJhbnNpdGlvblN0YXJ0LFxuICAgICAgYm91bmRPblRyYW5zaXRpb25FbmRcbiAgICBdKTtcbiAgICBjb21wb25lbnQudHJhbnNpdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uc3RhcnRcIiwgYm91bmRPblRyYW5zaXRpb25TdGFydCk7XG4gICAgY29tcG9uZW50LnRyYW5zaXRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBib3VuZE9uVHJhbnNpdGlvbkVuZCk7XG4gIH1cbn1cbi8qKlxuICogSGVscGVyIHRvIHRlYXIgZG93biB0cmFuc2l0aW9uIGxpc3RlbmVycyBvbiBkaXNjb25uZWN0ZWRDYWxsYmFjayBvbiBPcGVuQ2xvc2VDb21wb25lbnQgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGRpc2Nvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGlmICghY29tcG9uZW50VG9UcmFuc2l0aW9uTGlzdGVuZXJzLmhhcyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IFt0cmFuc2l0aW9uRWwsIHN0YXJ0LCBlbmRdID0gY29tcG9uZW50VG9UcmFuc2l0aW9uTGlzdGVuZXJzLmdldChjb21wb25lbnQpO1xuICB0cmFuc2l0aW9uRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25zdGFydFwiLCBzdGFydCk7XG4gIHRyYW5zaXRpb25FbC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBlbmQpO1xuICBjb21wb25lbnRUb1RyYW5zaXRpb25MaXN0ZW5lcnMuZGVsZXRlKGNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCB7IGNvbm5lY3RPcGVuQ2xvc2VDb21wb25lbnQgYXMgYywgZGlzY29ubmVjdE9wZW5DbG9zZUNvbXBvbmVudCBhcyBkLCBvblRvZ2dsZU9wZW5DbG9zZUNvbXBvbmVudCBhcyBvIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=