"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-graph_2_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-graph_2.entry.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-graph_2.entry.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_graph": () => (/* binding */ Graph),
/* harmony export */   "calcite_slider": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-d7359efe.js */ "./node_modules/@esri/calcite-components/dist/esm/form-d7359efe.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./label-9d2eb334.js */ "./node_modules/@esri/calcite-components/dist/esm/label-9d2eb334.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _math_584fc665_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./math-584fc665.js */ "./node_modules/@esri/calcite-components/dist/esm/math-584fc665.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */














/**
 * Calculate slope of the tangents
 * uses Steffen interpolation as it's monotonic
 * http://jrwalsh1.github.io/posts/interpolations/
 *
 * @param p0
 * @param p1
 * @param p2
 */
function slope(p0, p1, p2) {
  const dx = p1[0] - p0[0];
  const dx1 = p2[0] - p1[0];
  const dy = p1[1] - p0[1];
  const dy1 = p2[1] - p1[1];
  const m = dy / (dx || (dx1 < 0 && 0));
  const m1 = dy1 / (dx1 || (dx < 0 && 0));
  const p = (m * dx1 + m1 * dx) / (dx + dx1);
  return (Math.sign(m) + Math.sign(m1)) * Math.min(Math.abs(m), Math.abs(m1), 0.5 * Math.abs(p)) || 0;
}
/**
 * Calculate slope for just one tangent (single-sided)
 *
 * @param p0
 * @param p1
 * @param m
 */
function slopeSingle(p0, p1, m) {
  const dx = p1[0] - p0[0];
  const dy = p1[1] - p0[1];
  return dx ? ((3 * dy) / dx - m) / 2 : m;
}
/**
 * Given two points and their tangent slopes,
 * calculate the bezier handle coordinates and return draw command.
 *
 * Translates Hermite Spline to Beziér curve:
 * stackoverflow.com/questions/42574940/
 *
 * @param p0
 * @param p1
 * @param m0
 * @param m1
 * @param t
 */
function bezier(p0, p1, m0, m1, t) {
  const [x0, y0] = p0;
  const [x1, y1] = p1;
  const dx = (x1 - x0) / 3;
  const h1 = t([x0 + dx, y0 + dx * m0]).join(",");
  const h2 = t([x1 - dx, y1 - dx * m1]).join(",");
  const p = t([x1, y1]).join(",");
  return `C ${h1} ${h2} ${p}`;
}
/**
 * Generate a function which will translate a point
 * from the data coordinate space to svg viewbox oriented pixels
 *
 * @param root0
 * @param root0.width
 * @param root0.height
 * @param root0.min
 * @param root0.max
 */
function translate({ width, height, min, max }) {
  const rangeX = max[0] - min[0];
  const rangeY = max[1] - min[1];
  return (point) => {
    const x = ((point[0] - min[0]) / rangeX) * width;
    const y = height - (point[1] / rangeY) * height;
    return [x, y];
  };
}
/**
 * Get the min and max values from the dataset
 *
 * @param data
 */
function range(data) {
  const [startX, startY] = data[0];
  const min = [startX, startY];
  const max = [startX, startY];
  return data.reduce(({ min, max }, [x, y]) => ({
    min: [Math.min(min[0], x), Math.min(min[1], y)],
    max: [Math.max(max[0], x), Math.max(max[1], y)]
  }), { min, max });
}
/**
 * Generate drawing commands for an area graph
 * returns a string can can be passed directly to a path element's `d` attribute
 *
 * @param root0
 * @param root0.data
 * @param root0.min
 * @param root0.max
 * @param root0.t
 */
function area({ data, min, max, t }) {
  if (data.length === 0) {
    return "";
  }
  // important points for beginning and ending the path
  const [startX, startY] = t(data[0]);
  const [minX, minY] = t(min);
  const [maxX] = t(max);
  // keep track of previous slope/points
  let m;
  let p0;
  let p1;
  // iterate over data points, calculating command for each
  const commands = data.reduce((acc, point, i) => {
    p0 = data[i - 2];
    p1 = data[i - 1];
    if (i > 1) {
      const m1 = slope(p0, p1, point);
      const m0 = m === undefined ? slopeSingle(p0, p1, m1) : m;
      const command = bezier(p0, p1, m0, m1, t);
      m = m1;
      return `${acc} ${command}`;
    }
    return acc;
  }, `M ${minX},${minY} L ${minX},${startY} L ${startX},${startY}`);
  // close the path
  const last = data[data.length - 1];
  const end = bezier(p1, last, m, slopeSingle(p1, last, m), t);
  return `${commands} ${end} L ${maxX},${minY} Z`;
}

const graphCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0px;display:block;block-size:100%;inline-size:100%;padding:0px}.svg .graph-path--highlight{fill:var(--calcite-ui-brand);opacity:0.5}";

const Graph = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    this.graphId = `calcite-graph-${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_1__.g)()}`;
    this.resizeObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_2__.c)("resize", () => (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.f)(this));
    this.data = [];
    this.colorStops = undefined;
    this.highlightMin = undefined;
    this.highlightMax = undefined;
    this.min = undefined;
    this.max = undefined;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.resizeObserver?.observe(this.el);
  }
  disconnectedCallback() {
    this.resizeObserver?.disconnect();
  }
  render() {
    const { data, colorStops, el, highlightMax, highlightMin, min, max } = this;
    const id = this.graphId;
    const { clientHeight: height, clientWidth: width } = el;
    // if we have no data, return empty svg
    if (!data || data.length === 0) {
      return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { "aria-hidden": "true", class: "svg", height: height, preserveAspectRatio: "none", viewBox: `0 0 ${width} ${height}`, width: width }));
    }
    const { min: rangeMin, max: rangeMax } = range(data);
    let currentMin = rangeMin;
    let currentMax = rangeMax;
    if (min < rangeMin[0] || min > rangeMin[0]) {
      currentMin = [min, 0];
    }
    if (max > rangeMax[0] || max < rangeMax[0]) {
      currentMax = [max, rangeMax[1]];
    }
    const t = translate({ min: currentMin, max: currentMax, width, height });
    const [hMinX] = t([highlightMin, currentMax[1]]);
    const [hMaxX] = t([highlightMax, currentMax[1]]);
    const areaPath = area({ data, min: rangeMin, max: rangeMax, t });
    const fill = colorStops ? `url(#linear-gradient-${id})` : undefined;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { "aria-hidden": "true", class: "svg", height: height, preserveAspectRatio: "none", viewBox: `0 0 ${width} ${height}`, width: width }, colorStops ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("defs", null, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("linearGradient", { id: `linear-gradient-${id}`, x1: "0", x2: "1", y1: "0", y2: "0" }, colorStops.map(({ offset, color, opacity }) => ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("stop", { offset: `${offset * 100}%`, "stop-color": color, "stop-opacity": opacity })))))) : null, highlightMin !== undefined ? ([
      (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("mask", { height: "100%", id: `${id}1`, width: "100%", x: "0%", y: "0%" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: `
            M 0,0
            L ${hMinX - 1},0
            L ${hMinX - 1},${height}
            L 0,${height}
            Z
          `, fill: "white" })),
      (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("mask", { height: "100%", id: `${id}2`, width: "100%", x: "0%", y: "0%" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: `
            M ${hMinX + 1},0
            L ${hMaxX - 1},0
            L ${hMaxX - 1},${height}
            L ${hMinX + 1}, ${height}
            Z
          `, fill: "white" })),
      (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("mask", { height: "100%", id: `${id}3`, width: "100%", x: "0%", y: "0%" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: `
                M ${hMaxX + 1},0
                L ${width},0
                L ${width},${height}
                L ${hMaxX + 1}, ${height}
                Z
              `, fill: "white" })),
      (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { class: "graph-path", d: areaPath, fill: fill, mask: `url(#${id}1)` }),
      (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { class: "graph-path--highlight", d: areaPath, fill: fill, mask: `url(#${id}2)` }),
      (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { class: "graph-path", d: areaPath, fill: fill, mask: `url(#${id}3)` })
    ]) : ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("path", { class: "graph-path", d: areaPath, fill: fill }))));
  }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
};
Graph.style = graphCss;

const CSS = {
  handleLabel: "handle__label",
  handleLabelMinValue: "handle__label--minValue",
  handleLabelValue: "handle__label--value",
  tickMin: "tick__label--min",
  tickMax: "tick__label--max"
};

const sliderCss = "@charset \"UTF-8\";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.scale--s{--calcite-slider-handle-size:0.625rem;--calcite-slider-handle-extension-height:0.4rem;--calcite-slider-container-font-size:var(--calcite-font-size--3)}.scale--s .handle__label,.scale--s .tick__label{line-height:.75rem}.scale--m{--calcite-slider-handle-size:0.875rem;--calcite-slider-handle-extension-height:0.5rem;--calcite-slider-container-font-size:var(--calcite-font-size--2)}.scale--m .handle__label,.scale--m .tick__label{line-height:1rem}.scale--l{--calcite-slider-handle-size:1rem;--calcite-slider-handle-extension-height:0.65rem;--calcite-slider-container-font-size:var(--calcite-font-size--1)}.scale--l .handle__label,.scale--l .tick__label{line-height:1rem}.handle__label,.tick__label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);font-size:var(--calcite-slider-container-font-size)}:host{display:block}.container{position:relative;display:block;overflow-wrap:normal;word-break:normal;padding-inline:calc(var(--calcite-slider-handle-size) * 0.5);padding-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-block:calc(var(--calcite-slider-handle-size) * 0.5);margin-inline:0;--calcite-slider-full-handle-height:calc(\n    var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height)\n  );touch-action:none}:host([disabled]) .track__range,:host([disabled]) .tick--active{background-color:var(--calcite-ui-text-3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.375rem}.scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.5rem}.scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-0.55rem}:host([precise]:not([has-histogram])) .container .thumb--value{--calcite-slider-thumb-y-offset:calc(var(--calcite-slider-full-handle-height) * -1)}.thumb-container{position:relative;max-inline-size:100%}.thumb{--calcite-slider-thumb-x-offset:calc(var(--calcite-slider-handle-size) * 0.5);position:absolute;margin:0px;display:flex;cursor:pointer;flex-direction:column;align-items:center;border-style:none;background-color:transparent;padding:0px;font-family:inherit;outline:2px solid transparent;outline-offset:2px;transform:translate(var(--calcite-slider-thumb-x-offset), var(--calcite-slider-thumb-y-offset))}.thumb .handle__label.static,.thumb .handle__label.transformed{position:absolute;inset-block:0px;opacity:0}.thumb .handle__label.hyphen::after{content:\"—\";display:inline-block;inline-size:1em}.thumb .handle__label.hyphen--wrap{display:flex}.thumb .handle{box-sizing:border-box;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;block-size:var(--calcite-slider-handle-size);inline-size:var(--calcite-slider-handle-size);box-shadow:0 0 0 2px var(--calcite-ui-text-3) inset;transition:border var(--calcite-internal-animation-timing-medium) ease, background-color var(--calcite-internal-animation-timing-medium) ease, box-shadow var(--calcite-animation-timing) ease}.thumb .handle-extension{inline-size:0.125rem;block-size:var(--calcite-slider-handle-extension-height);background-color:var(--calcite-ui-text-3)}.thumb:hover .handle{box-shadow:0 0 0 3px var(--calcite-ui-brand) inset}.thumb:hover .handle-extension{background-color:var(--calcite-ui-brand)}.thumb:focus .handle{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.thumb:focus .handle-extension{background-color:var(--calcite-ui-brand)}.thumb.thumb--minValue{transform:translate(calc(var(--calcite-slider-thumb-x-offset) * -1), var(--calcite-slider-thumb-y-offset))}.thumb.thumb--precise{--calcite-slider-thumb-y-offset:-0.125rem}:host([label-handles]) .thumb{--calcite-slider-thumb-x-offset:50%}:host([label-handles]):host(:not([has-histogram])) .scale--s .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.4375rem}:host([label-handles]):host(:not([has-histogram])) .scale--m .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-1.875rem}:host([label-handles]):host(:not([has-histogram])) .scale--l .thumb:not(.thumb--precise){--calcite-slider-thumb-y-offset:-2rem}:host([has-histogram][label-handles]) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--minValue.thumb--precise .handle__label{margin-block-start:0.5em}:host(:not([has-histogram]):not([precise])) .handle__label,:host([label-handles]:not([has-histogram])) .thumb--value .handle__label{margin-block-end:0.5em}:host([label-handles][precise]):host(:not([has-histogram])) .scale--s .thumb--value{--calcite-slider-thumb-y-offset:-2.075rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--m .thumb--value{--calcite-slider-thumb-y-offset:-2.75rem}:host([label-handles][precise]):host(:not([has-histogram])) .scale--l .thumb--value{--calcite-slider-thumb-y-offset:-3.0625rem}.thumb:focus .handle,.thumb--active .handle{background-color:var(--calcite-ui-brand);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.thumb:hover.thumb--precise:after,.thumb:focus.thumb--precise:after,.thumb--active.thumb--precise:after{background-color:var(--calcite-ui-brand)}.track{position:relative;block-size:0.125rem;border-radius:0px;background-color:var(--calcite-ui-border-2);transition:all var(--calcite-internal-animation-timing-medium) ease-in}.track__range{position:absolute;inset-block-start:0px;block-size:0.125rem;background-color:var(--calcite-ui-brand)}.container--range .track__range:hover{cursor:ew-resize}.container--range .track__range:after{position:absolute;inline-size:100%;content:\"\";inset-block-start:calc(var(--calcite-slider-full-handle-height) * 0.5 * -1);block-size:calc(var(--calcite-slider-handle-size) + var(--calcite-slider-handle-extension-height))}@media (forced-colors: active){.thumb{outline-width:0;outline-offset:0}.handle{outline:2px solid transparent;outline-offset:2px}.thumb:focus .handle,.thumb .handle-extension,.thumb:hover .handle-extension,.thumb:focus .handle-extension,.thumb:active .handle-extension{background-color:canvasText}.track{background-color:canvasText}.track__range{background-color:highlight}}.tick{position:absolute;block-size:0.25rem;inline-size:0.125rem;border-width:1px;border-style:solid;background-color:var(--calcite-ui-border-input);border-color:var(--calcite-ui-foreground-1);inset-block-start:-2px;pointer-events:none;margin-inline-start:calc(-1 * 0.125rem)}.tick--active{background-color:var(--calcite-ui-brand)}.tick__label{pointer-events:none;margin-block-start:0.875rem;display:flex;justify-content:center}.tick__label--min{transition:opacity var(--calcite-animation-timing)}.tick__label--max{transition:opacity var(--calcite-internal-animation-timing-fast)}:host([has-histogram][label-handles]) .tick__label--min,:host([has-histogram][label-handles]) .tick__label--max,:host([has-histogram][precise]) .tick__label--min,:host([has-histogram][precise]) .tick__label--max{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}.graph{color:var(--calcite-ui-foreground-3);block-size:48px}:host([label-ticks][ticks]) .container{padding-block-end:calc(0.875rem + var(--calcite-slider-container-font-size))}:host([has-histogram]):host([precise][label-handles]) .container{padding-block-end:calc(var(--calcite-slider-full-handle-height) + 1em)}:host([has-histogram]):host([label-handles]:not([precise])) .container{padding-block-end:calc(var(--calcite-slider-handle-size) * 0.5 + 1em)}:host([has-histogram]):host([precise]:not([label-handles])) .container{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container{padding-block-start:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([precise]:not([label-handles])) .container--range{padding-block-end:var(--calcite-slider-full-handle-height)}:host(:not([has-histogram])):host([label-handles]:not([precise])) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container{padding-block-start:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}:host(:not([has-histogram])):host([label-handles][precise]) .container--range{padding-block-end:calc(var(--calcite-slider-full-handle-height) + var(--calcite-slider-container-font-size) + 4px)}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";

function isRange(value) {
  return Array.isArray(value);
}
const Slider = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteSliderInput = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteSliderInput", 6);
    this.calciteSliderChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteSliderChange", 6);
    this.activeProp = "value";
    this.guid = `calcite-slider-${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_1__.g)()}`;
    this.dragUpdate = (event) => {
      if (this.disabled) {
        return;
      }
      event.preventDefault();
      if (this.dragProp) {
        const value = this.translate(event.clientX || event.pageX);
        if (isRange(this.value) && this.dragProp === "minMaxValue") {
          if (this.minValueDragRange && this.maxValueDragRange && this.minMaxValueRange) {
            const newMinValue = value - this.minValueDragRange;
            const newMaxValue = value + this.maxValueDragRange;
            if (newMaxValue <= this.max &&
              newMinValue >= this.min &&
              newMaxValue - newMinValue === this.minMaxValueRange) {
              this.setValue({
                minValue: this.clamp(newMinValue, "minValue"),
                maxValue: this.clamp(newMaxValue, "maxValue")
              });
            }
          }
          else {
            this.minValueDragRange = value - this.minValue;
            this.maxValueDragRange = this.maxValue - value;
            this.minMaxValueRange = this.maxValue - this.minValue;
          }
        }
        else {
          this.setValue({ [this.dragProp]: this.clamp(value, this.dragProp) });
        }
      }
    };
    this.pointerUpDragEnd = (event) => {
      if (this.disabled || !(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__.i)(event)) {
        return;
      }
      this.dragEnd(event);
    };
    this.dragEnd = (event) => {
      if (this.disabled) {
        return;
      }
      this.removeDragListeners();
      this.focusActiveHandle(event.clientX);
      if (this.lastDragPropValue != this[this.dragProp]) {
        this.emitChange();
      }
      this.dragProp = null;
      this.lastDragPropValue = null;
      this.minValueDragRange = null;
      this.maxValueDragRange = null;
      this.minMaxValueRange = null;
    };
    /**
     * Set the reference of the track Element
     *
     * @internal
     * @param node
     */
    this.storeTrackRef = (node) => {
      this.trackEl = node;
    };
    /**
     * Returns a string representing the localized label value based if the groupSeparator prop is parsed.
     *
     * @param value
     */
    this.determineGroupSeparator = (value) => {
      if (typeof value === "number") {
        _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__.n.numberFormatOptions = {
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          useGrouping: this.groupSeparator
        };
        return _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__.n.localize(value.toString());
      }
    };
    this.disabled = false;
    this.form = undefined;
    this.groupSeparator = false;
    this.hasHistogram = false;
    this.histogram = undefined;
    this.histogramStops = undefined;
    this.labelHandles = false;
    this.labelTicks = false;
    this.max = 100;
    this.maxLabel = undefined;
    this.maxValue = undefined;
    this.min = 0;
    this.minLabel = undefined;
    this.minValue = undefined;
    this.mirrored = false;
    this.name = undefined;
    this.numberingSystem = undefined;
    this.pageStep = undefined;
    this.precise = false;
    this.required = false;
    this.snap = false;
    this.step = 1;
    this.ticks = undefined;
    this.value = 0;
    this.scale = "m";
    this.effectiveLocale = "";
    this.minMaxValueRange = null;
    this.minValueDragRange = null;
    this.maxValueDragRange = null;
    this.tickValues = [];
  }
  histogramWatcher(newHistogram) {
    this.hasHistogram = !!newHistogram;
  }
  valueHandler() {
    this.setMinMaxFromValue();
  }
  minMaxValueHandler() {
    this.setValueFromMinMax();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
    this.setMinMaxFromValue();
    this.setValueFromMinMax();
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
    this.removeDragListeners();
  }
  componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_8__.s)(this);
    this.tickValues = this.generateTickValues();
    if (!isRange(this.value)) {
      this.value = this.clamp(this.value);
    }
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.a)(this, this.value);
    if (this.snap && !isRange(this.value)) {
      this.value = this.getClosestStep(this.value);
    }
    if (this.histogram) {
      this.hasHistogram = true;
    }
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_8__.a)(this);
  }
  componentDidRender() {
    if (this.labelHandles) {
      this.adjustHostObscuredHandleLabel("value");
      if (isRange(this.value)) {
        this.adjustHostObscuredHandleLabel("minValue");
        if (!(this.precise && !this.hasHistogram)) {
          this.hyphenateCollidingRangeHandleLabels();
        }
      }
    }
    this.hideObscuredBoundingTickLabels();
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_5__.u)(this);
  }
  render() {
    const id = this.el.id || this.guid;
    const maxProp = isRange(this.value) ? "maxValue" : "value";
    const value = isRange(this.value) ? this.maxValue : this.value;
    const displayedValue = this.determineGroupSeparator(value);
    const displayedMinValue = this.determineGroupSeparator(this.minValue);
    const min = this.minValue || this.min;
    const useMinValue = this.shouldUseMinValue();
    const minInterval = this.getUnitInterval(useMinValue ? this.minValue : min) * 100;
    const maxInterval = this.getUnitInterval(value) * 100;
    const mirror = this.shouldMirror();
    const leftThumbOffset = `${mirror ? 100 - minInterval : minInterval}%`;
    const rightThumbOffset = `${mirror ? maxInterval : 100 - maxInterval}%`;
    const valueIsRange = isRange(this.value);
    const handleLabelMinValueClasses = `${CSS.handleLabel} ${CSS.handleLabelMinValue}`;
    const handleLabelValueClasses = `${CSS.handleLabel} ${CSS.handleLabelValue}`;
    const handle = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxHandle = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" })));
    const labeledHandle = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxHandle = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: handleLabelValueClasses }, displayedValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} static` }, displayedValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} transformed` }, displayedValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" })));
    const histogramLabeledHandle = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxHandle = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: handleLabelValueClasses }, displayedValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} static` }, displayedValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} transformed` }, displayedValue)));
    const preciseHandle = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxHandle = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle-extension" })));
    const histogramPreciseHandle = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxHandle = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle-extension" }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" })));
    const labeledPreciseHandle = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxHandle = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: handleLabelValueClasses }, displayedValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} static` }, displayedValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} transformed` }, displayedValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle-extension" })));
    const histogramLabeledPreciseHandle = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": valueIsRange ? this.maxLabel : this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": value, class: {
        thumb: true,
        "thumb--value": true,
        "thumb--active": this.lastDragProp !== "minMaxValue" && this.dragProp === maxProp,
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = maxProp), onPointerDown: (event) => this.pointerDownDragStart(event, maxProp), role: "slider", style: { right: rightThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.maxHandle = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle-extension" }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: handleLabelValueClasses }, displayedValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} static` }, displayedValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelValueClasses} transformed` }, displayedValue)));
    const minHandle = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue"
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.minHandle = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" })));
    const minLabeledHandle = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue"
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.minHandle = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: handleLabelMinValueClasses }, displayedMinValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} static` }, displayedMinValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} transformed` }, displayedMinValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" })));
    const minHistogramLabeledHandle = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue"
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.minHandle = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: handleLabelMinValueClasses }, displayedMinValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} static` }, displayedMinValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} transformed` }, displayedMinValue)));
    const minPreciseHandle = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue",
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.minHandle = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle-extension" }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" })));
    const minLabeledPreciseHandle = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": this.disabled, "aria-label": this.minLabel, "aria-orientation": "horizontal", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.minValue, class: {
        thumb: true,
        "thumb--minValue": true,
        "thumb--active": this.dragProp === "minValue",
        "thumb--precise": true
      }, onBlur: () => (this.activeProp = null), onFocus: () => (this.activeProp = "minValue"), onPointerDown: (event) => this.pointerDownDragStart(event, "minValue"), role: "slider", style: { left: leftThumbOffset }, tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: (el) => (this.minHandle = el) }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle-extension" }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "handle" }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: handleLabelMinValueClasses }, displayedMinValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} static` }, displayedMinValue), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-hidden": "true", class: `${handleLabelMinValueClasses} transformed` }, displayedMinValue)));
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { id: id, onTouchStart: this.handleTouchStart }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-label": (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_7__.g)(this), class: {
        ["container"]: true,
        ["container--range"]: valueIsRange,
        [`scale--${this.scale}`]: true
      } }, this.renderGraph(), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "track",
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.storeTrackRef }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "track__range", onPointerDown: (event) => this.pointerDownDragStart(event, "minMaxValue"), style: {
        left: `${mirror ? 100 - maxInterval : minInterval}%`,
        right: `${mirror ? minInterval : 100 - maxInterval}%`
      } }), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "ticks" }, this.tickValues.map((tick) => {
      const tickOffset = `${this.getUnitInterval(tick) * 100}%`;
      let activeTicks = tick >= min && tick <= value;
      if (useMinValue) {
        activeTicks = tick >= this.minValue && tick <= this.maxValue;
      }
      return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: {
          tick: true,
          "tick--active": activeTicks
        }, style: {
          left: mirror ? "" : tickOffset,
          right: mirror ? tickOffset : ""
        } }, this.renderTickLabel(tick)));
    }))), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "thumb-container" }, !this.precise && !this.labelHandles && valueIsRange && minHandle, !this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      valueIsRange &&
      minLabeledHandle, this.precise && !this.labelHandles && valueIsRange && minPreciseHandle, this.precise && this.labelHandles && valueIsRange && minLabeledPreciseHandle, this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      valueIsRange &&
      minHistogramLabeledHandle, !this.precise && !this.labelHandles && handle, !this.hasHistogram && !this.precise && this.labelHandles && labeledHandle, !this.hasHistogram && this.precise && !this.labelHandles && preciseHandle, this.hasHistogram && this.precise && !this.labelHandles && histogramPreciseHandle, !this.hasHistogram && this.precise && this.labelHandles && labeledPreciseHandle, this.hasHistogram && !this.precise && this.labelHandles && histogramLabeledHandle, this.hasHistogram &&
      this.precise &&
      this.labelHandles &&
      histogramLabeledPreciseHandle, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_4__.H, { component: this })))));
  }
  renderGraph() {
    return this.histogram ? ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-graph", { class: "graph", colorStops: this.histogramStops, data: this.histogram, highlightMax: isRange(this.value) ? this.maxValue : this.value, highlightMin: isRange(this.value) ? this.minValue : this.min, max: this.max, min: this.min })) : null;
  }
  renderTickLabel(tick) {
    const valueIsRange = isRange(this.value);
    const isMinTickLabel = tick === this.min;
    const isMaxTickLabel = tick === this.max;
    const displayedTickValue = this.determineGroupSeparator(tick);
    const tickLabel = ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: {
        tick__label: true,
        [CSS.tickMin]: isMinTickLabel,
        [CSS.tickMax]: isMaxTickLabel
      } }, displayedTickValue));
    if (this.labelTicks && !this.hasHistogram && !valueIsRange) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      valueIsRange &&
      !this.precise &&
      !this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      valueIsRange &&
      !this.precise &&
      this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      !this.hasHistogram &&
      valueIsRange &&
      this.precise &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks && this.hasHistogram && !this.precise && !this.labelHandles) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      this.precise &&
      !this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      !this.precise &&
      this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    if (this.labelTicks &&
      this.hasHistogram &&
      this.precise &&
      this.labelHandles &&
      (isMinTickLabel || isMaxTickLabel)) {
      return tickLabel;
    }
    return null;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(event) {
    const mirror = this.shouldMirror();
    const { activeProp, max, min, pageStep, step } = this;
    const value = this[activeProp];
    const { key } = event;
    if ((0,_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_6__.i)(key)) {
      event.preventDefault();
      return;
    }
    let adjustment;
    if (key === "ArrowUp" || key === "ArrowRight") {
      const directionFactor = mirror && key === "ArrowRight" ? -1 : 1;
      adjustment = value + step * directionFactor;
    }
    else if (key === "ArrowDown" || key === "ArrowLeft") {
      const directionFactor = mirror && key === "ArrowLeft" ? -1 : 1;
      adjustment = value - step * directionFactor;
    }
    else if (key === "PageUp") {
      if (pageStep) {
        adjustment = value + pageStep;
      }
    }
    else if (key === "PageDown") {
      if (pageStep) {
        adjustment = value - pageStep;
      }
    }
    else if (key === "Home") {
      adjustment = min;
    }
    else if (key === "End") {
      adjustment = max;
    }
    if (isNaN(adjustment)) {
      return;
    }
    event.preventDefault();
    const fixedDecimalAdjustment = Number(adjustment.toFixed((0,_math_584fc665_js__WEBPACK_IMPORTED_MODULE_10__.d)(step)));
    this.setValue({
      [activeProp]: this.clamp(fixedDecimalAdjustment, activeProp)
    });
  }
  pointerDownHandler(event) {
    if (this.disabled || !(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__.i)(event)) {
      return;
    }
    const x = event.clientX || event.pageX;
    const position = this.translate(x);
    let prop = "value";
    if (isRange(this.value)) {
      const inRange = position >= this.minValue && position <= this.maxValue;
      if (inRange && this.lastDragProp === "minMaxValue") {
        prop = "minMaxValue";
      }
      else {
        const closerToMax = Math.abs(this.maxValue - position) < Math.abs(this.minValue - position);
        prop = closerToMax || position > this.maxValue ? "maxValue" : "minValue";
      }
    }
    this.lastDragPropValue = this[prop];
    this.dragStart(prop);
    const isThumbActive = this.el.shadowRoot.querySelector(".thumb:active");
    if (!isThumbActive) {
      this.setValue({ [prop]: this.clamp(position, prop) });
    }
    this.focusActiveHandle(x);
  }
  handleTouchStart(event) {
    // needed to prevent extra click at the end of a handle drag
    event.preventDefault();
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);
    const handle = this.minHandle ? this.minHandle : this.maxHandle;
    handle?.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  setValueFromMinMax() {
    const { minValue, maxValue } = this;
    if (typeof minValue === "number" && typeof maxValue === "number") {
      this.value = [minValue, maxValue];
    }
  }
  setMinMaxFromValue() {
    const { value } = this;
    if (isRange(value)) {
      this.minValue = value[0];
      this.maxValue = value[1];
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  shouldMirror() {
    return this.mirrored && !this.hasHistogram;
  }
  shouldUseMinValue() {
    if (!isRange(this.value)) {
      return false;
    }
    return ((this.hasHistogram && this.maxValue === 0) || (!this.hasHistogram && this.minValue === 0));
  }
  generateTickValues() {
    const ticks = [];
    let current = this.min;
    while (this.ticks && current < this.max + this.ticks) {
      ticks.push(Math.min(current, this.max));
      current = current + this.ticks;
    }
    return ticks;
  }
  pointerDownDragStart(event, prop) {
    if (!(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__.i)(event)) {
      return;
    }
    this.dragStart(prop);
  }
  dragStart(prop) {
    this.dragProp = prop;
    this.lastDragProp = this.dragProp;
    this.activeProp = prop;
    document.addEventListener("pointermove", this.dragUpdate);
    document.addEventListener("pointerup", this.pointerUpDragEnd);
    document.addEventListener("pointercancel", this.dragEnd);
  }
  focusActiveHandle(valueX) {
    switch (this.dragProp) {
      case "minValue":
        this.minHandle.focus();
        break;
      case "maxValue":
      case "value":
        this.maxHandle.focus();
        break;
      case "minMaxValue":
        this.getClosestHandle(valueX).focus();
        break;
    }
  }
  emitInput() {
    this.calciteSliderInput.emit();
  }
  emitChange() {
    this.calciteSliderChange.emit();
  }
  removeDragListeners() {
    document.removeEventListener("pointermove", this.dragUpdate);
    document.removeEventListener("pointerup", this.pointerUpDragEnd);
    document.removeEventListener("pointercancel", this.dragEnd);
  }
  /**
   * Set prop value(s) if changed at the component level
   *
   * @param {object} values - a set of key/value pairs delineating what properties in the component to update
   */
  setValue(values) {
    let valueChanged;
    Object.keys(values).forEach((propName) => {
      const newValue = values[propName];
      if (!valueChanged) {
        const oldValue = this[propName];
        valueChanged = oldValue !== newValue;
      }
      this[propName] = newValue;
    });
    if (!valueChanged) {
      return;
    }
    const dragging = this.dragProp;
    if (!dragging) {
      this.emitChange();
    }
    this.emitInput();
  }
  /**
   * If number is outside range, constrain to min or max
   *
   * @param value
   * @param prop
   * @internal
   */
  clamp(value, prop) {
    value = (0,_math_584fc665_js__WEBPACK_IMPORTED_MODULE_10__.c)(value, this.min, this.max);
    // ensure that maxValue and minValue don't swap positions
    if (prop === "maxValue") {
      value = Math.max(value, this.minValue);
    }
    if (prop === "minValue") {
      value = Math.min(value, this.maxValue);
    }
    return value;
  }
  /**
   * Translate a pixel position to value along the range
   *
   * @param x
   * @internal
   */
  translate(x) {
    const range = this.max - this.min;
    const { left, width } = this.trackEl.getBoundingClientRect();
    const percent = (x - left) / width;
    const mirror = this.shouldMirror();
    const clampedValue = this.clamp(this.min + range * (mirror ? 1 - percent : percent));
    let value = Number(clampedValue.toFixed((0,_math_584fc665_js__WEBPACK_IMPORTED_MODULE_10__.d)(this.step)));
    if (this.snap && this.step) {
      value = this.getClosestStep(value);
    }
    return value;
  }
  /**
   * Get closest allowed value along stepped values
   *
   * @param num
   * @internal
   */
  getClosestStep(num) {
    num = Number(this.clamp(num).toFixed((0,_math_584fc665_js__WEBPACK_IMPORTED_MODULE_10__.d)(this.step)));
    if (this.step) {
      const step = Math.round(num / this.step) * this.step;
      num = Number(this.clamp(step).toFixed((0,_math_584fc665_js__WEBPACK_IMPORTED_MODULE_10__.d)(this.step)));
    }
    return num;
  }
  getClosestHandle(valueX) {
    return this.getDistanceX(this.maxHandle, valueX) > this.getDistanceX(this.minHandle, valueX)
      ? this.minHandle
      : this.maxHandle;
  }
  getDistanceX(el, valueX) {
    return Math.abs(el.getBoundingClientRect().left - valueX);
  }
  getFontSizeForElement(element) {
    return Number(window.getComputedStyle(element).getPropertyValue("font-size").match(/\d+/)[0]);
  }
  /**
   * Get position of value along range as fractional value
   *
   * @param num
   * @return {number} number in the unit interval [0,1]
   * @internal
   */
  getUnitInterval(num) {
    num = this.clamp(num);
    const range = this.max - this.min;
    return (num - this.min) / range;
  }
  adjustHostObscuredHandleLabel(name) {
    const label = this.el.shadowRoot.querySelector(`.handle__label--${name}`);
    const labelStatic = this.el.shadowRoot.querySelector(`.handle__label--${name}.static`);
    const labelTransformed = this.el.shadowRoot.querySelector(`.handle__label--${name}.transformed`);
    const labelStaticBounds = labelStatic.getBoundingClientRect();
    const labelStaticOffset = this.getHostOffset(labelStaticBounds.left, labelStaticBounds.right);
    label.style.transform = `translateX(${labelStaticOffset}px)`;
    labelTransformed.style.transform = `translateX(${labelStaticOffset}px)`;
  }
  hyphenateCollidingRangeHandleLabels() {
    const { shadowRoot } = this.el;
    const mirror = this.shouldMirror();
    const leftModifier = mirror ? "value" : "minValue";
    const rightModifier = mirror ? "minValue" : "value";
    const leftValueLabel = shadowRoot.querySelector(`.handle__label--${leftModifier}`);
    const leftValueLabelStatic = shadowRoot.querySelector(`.handle__label--${leftModifier}.static`);
    const leftValueLabelTransformed = shadowRoot.querySelector(`.handle__label--${leftModifier}.transformed`);
    const leftValueLabelStaticHostOffset = this.getHostOffset(leftValueLabelStatic.getBoundingClientRect().left, leftValueLabelStatic.getBoundingClientRect().right);
    const rightValueLabel = shadowRoot.querySelector(`.handle__label--${rightModifier}`);
    const rightValueLabelStatic = shadowRoot.querySelector(`.handle__label--${rightModifier}.static`);
    const rightValueLabelTransformed = shadowRoot.querySelector(`.handle__label--${rightModifier}.transformed`);
    const rightValueLabelStaticHostOffset = this.getHostOffset(rightValueLabelStatic.getBoundingClientRect().left, rightValueLabelStatic.getBoundingClientRect().right);
    const labelFontSize = this.getFontSizeForElement(leftValueLabel);
    const labelTransformedOverlap = this.getRangeLabelOverlap(leftValueLabelTransformed, rightValueLabelTransformed);
    const hyphenLabel = leftValueLabel;
    const labelOffset = labelFontSize / 2;
    if (labelTransformedOverlap > 0) {
      hyphenLabel.classList.add("hyphen", "hyphen--wrap");
      if (rightValueLabelStaticHostOffset === 0 && leftValueLabelStaticHostOffset === 0) {
        // Neither handle overlaps the host boundary
        let leftValueLabelTranslate = labelTransformedOverlap / 2 - labelOffset;
        leftValueLabelTranslate =
          Math.sign(leftValueLabelTranslate) === -1
            ? Math.abs(leftValueLabelTranslate)
            : -leftValueLabelTranslate;
        const leftValueLabelTransformedHostOffset = this.getHostOffset(leftValueLabelTransformed.getBoundingClientRect().left +
          leftValueLabelTranslate -
          labelOffset, leftValueLabelTransformed.getBoundingClientRect().right +
          leftValueLabelTranslate -
          labelOffset);
        let rightValueLabelTranslate = labelTransformedOverlap / 2;
        const rightValueLabelTransformedHostOffset = this.getHostOffset(rightValueLabelTransformed.getBoundingClientRect().left + rightValueLabelTranslate, rightValueLabelTransformed.getBoundingClientRect().right + rightValueLabelTranslate);
        if (leftValueLabelTransformedHostOffset !== 0) {
          leftValueLabelTranslate += leftValueLabelTransformedHostOffset;
          rightValueLabelTranslate += leftValueLabelTransformedHostOffset;
        }
        if (rightValueLabelTransformedHostOffset !== 0) {
          leftValueLabelTranslate += rightValueLabelTransformedHostOffset;
          rightValueLabelTranslate += rightValueLabelTransformedHostOffset;
        }
        leftValueLabel.style.transform = `translateX(${leftValueLabelTranslate}px)`;
        leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelTranslate - labelOffset}px)`;
        rightValueLabel.style.transform = `translateX(${rightValueLabelTranslate}px)`;
        rightValueLabelTransformed.style.transform = `translateX(${rightValueLabelTranslate}px)`;
      }
      else if (leftValueLabelStaticHostOffset > 0 || rightValueLabelStaticHostOffset > 0) {
        // labels overlap host boundary on the left side
        leftValueLabel.style.transform = `translateX(${leftValueLabelStaticHostOffset + labelOffset}px)`;
        rightValueLabel.style.transform = `translateX(${labelTransformedOverlap + rightValueLabelStaticHostOffset}px)`;
        rightValueLabelTransformed.style.transform = `translateX(${labelTransformedOverlap + rightValueLabelStaticHostOffset}px)`;
      }
      else if (leftValueLabelStaticHostOffset < 0 || rightValueLabelStaticHostOffset < 0) {
        // labels overlap host boundary on the right side
        let leftValueLabelTranslate = Math.abs(leftValueLabelStaticHostOffset) + labelTransformedOverlap - labelOffset;
        leftValueLabelTranslate =
          Math.sign(leftValueLabelTranslate) === -1
            ? Math.abs(leftValueLabelTranslate)
            : -leftValueLabelTranslate;
        leftValueLabel.style.transform = `translateX(${leftValueLabelTranslate}px)`;
        leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelTranslate - labelOffset}px)`;
      }
    }
    else {
      hyphenLabel.classList.remove("hyphen", "hyphen--wrap");
      leftValueLabel.style.transform = `translateX(${leftValueLabelStaticHostOffset}px)`;
      leftValueLabelTransformed.style.transform = `translateX(${leftValueLabelStaticHostOffset}px)`;
      rightValueLabel.style.transform = `translateX(${rightValueLabelStaticHostOffset}px)`;
      rightValueLabelTransformed.style.transform = `translateX(${rightValueLabelStaticHostOffset}px)`;
    }
  }
  /**
   * Hides bounding tick labels that are obscured by either handle.
   */
  hideObscuredBoundingTickLabels() {
    const valueIsRange = isRange(this.value);
    if (!this.hasHistogram && !valueIsRange && !this.labelHandles && !this.precise) {
      return;
    }
    if (!this.hasHistogram && !valueIsRange && this.labelHandles && !this.precise) {
      return;
    }
    if (!this.hasHistogram && !valueIsRange && !this.labelHandles && this.precise) {
      return;
    }
    if (!this.hasHistogram && !valueIsRange && this.labelHandles && this.precise) {
      return;
    }
    if (!this.hasHistogram && valueIsRange && !this.precise) {
      return;
    }
    if (this.hasHistogram && !this.precise && !this.labelHandles) {
      return;
    }
    const minHandle = this.el.shadowRoot.querySelector(".thumb--minValue");
    const maxHandle = this.el.shadowRoot.querySelector(".thumb--value");
    const minTickLabel = this.el.shadowRoot.querySelector(".tick__label--min");
    const maxTickLabel = this.el.shadowRoot.querySelector(".tick__label--max");
    if (!minHandle && maxHandle && minTickLabel && maxTickLabel) {
      minTickLabel.style.opacity = this.isMinTickLabelObscured(minTickLabel, maxHandle) ? "0" : "1";
      maxTickLabel.style.opacity = this.isMaxTickLabelObscured(maxTickLabel, maxHandle) ? "0" : "1";
    }
    if (minHandle && maxHandle && minTickLabel && maxTickLabel) {
      minTickLabel.style.opacity =
        this.isMinTickLabelObscured(minTickLabel, minHandle) ||
          this.isMinTickLabelObscured(minTickLabel, maxHandle)
          ? "0"
          : "1";
      maxTickLabel.style.opacity =
        this.isMaxTickLabelObscured(maxTickLabel, minHandle) ||
          (this.isMaxTickLabelObscured(maxTickLabel, maxHandle) && this.hasHistogram)
          ? "0"
          : "1";
    }
  }
  /**
   * Returns an integer representing the number of pixels to offset on the left or right side based on desired position behavior.
   *
   * @param leftBounds
   * @param rightBounds
   * @internal
   */
  getHostOffset(leftBounds, rightBounds) {
    const hostBounds = this.el.getBoundingClientRect();
    const buffer = 7;
    if (leftBounds + buffer < hostBounds.left) {
      return hostBounds.left - leftBounds - buffer;
    }
    if (rightBounds - buffer > hostBounds.right) {
      return -(rightBounds - hostBounds.right) + buffer;
    }
    return 0;
  }
  /**
   * Returns an integer representing the number of pixels that the two given span elements are overlapping, taking into account
   * a space in between the two spans equal to the font-size set on them to account for the space needed to render a hyphen.
   *
   * @param leftLabel
   * @param rightLabel
   */
  getRangeLabelOverlap(leftLabel, rightLabel) {
    const leftLabelBounds = leftLabel.getBoundingClientRect();
    const rightLabelBounds = rightLabel.getBoundingClientRect();
    const leftLabelFontSize = this.getFontSizeForElement(leftLabel);
    const rangeLabelOverlap = leftLabelBounds.right + leftLabelFontSize - rightLabelBounds.left;
    return Math.max(rangeLabelOverlap, 0);
  }
  /**
   * Returns a boolean value representing if the minLabel span element is obscured (being overlapped) by the given handle div element.
   *
   * @param minLabel
   * @param handle
   */
  isMinTickLabelObscured(minLabel, handle) {
    const minLabelBounds = minLabel.getBoundingClientRect();
    const handleBounds = handle.getBoundingClientRect();
    return (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__.w)(minLabelBounds, handleBounds);
  }
  /**
   * Returns a boolean value representing if the maxLabel span element is obscured (being overlapped) by the given handle div element.
   *
   * @param maxLabel
   * @param handle
   */
  isMaxTickLabelObscured(maxLabel, handle) {
    const maxLabelBounds = maxLabel.getBoundingClientRect();
    const handleBounds = handle.getBoundingClientRect();
    return (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__.w)(maxLabelBounds, handleBounds);
  }
  static get delegatesFocus() { return true; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "histogram": ["histogramWatcher"],
    "value": ["valueHandler"],
    "minValue": ["minMaxValueHandler"],
    "maxValue": ["minMaxValueHandler"]
  }; }
};
Slider.style = sliderCss;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvMDYxODg2ZjU5ZThhZTFiNGUyNzk2NzkwNGJhNTAzYjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrSDtBQUNoRjtBQUNlO0FBQ21CO0FBQ3NEO0FBQ1g7QUFDbkU7QUFDd0M7QUFDbUI7QUFDRDtBQUMvQztBQUNuQztBQUNGOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlCQUF5QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBLEdBQUcsS0FBSyxVQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsS0FBSyxFQUFFLFFBQVE7QUFDL0I7QUFDQTtBQUNBLEdBQUcsT0FBTyxLQUFLLEdBQUcsTUFBTSxJQUFJLEtBQUssR0FBRyxRQUFRLElBQUksT0FBTyxHQUFHLE9BQU87QUFDakU7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVLEVBQUUsS0FBSyxJQUFJLEtBQUssR0FBRyxNQUFNO0FBQy9DOztBQUVBLGdDQUFnQyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLE1BQU0sY0FBYyxnQkFBZ0IsS0FBSyxrQkFBa0IsbUJBQW1CLFdBQVcsY0FBYyxnQkFBZ0IsaUJBQWlCLFlBQVksNEJBQTRCLDZCQUE2QixZQUFZOztBQUUvM0Q7QUFDQTtBQUNBLElBQUkscURBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0RBQUksR0FBRztBQUMzQywwQkFBMEIseURBQWMsaUJBQWlCLHFEQUFXO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBNkQ7QUFDekU7QUFDQSxZQUFZLDJDQUEyQztBQUN2RDtBQUNBO0FBQ0EsY0FBYyxxREFBQyxVQUFVLGtHQUFrRyxPQUFPLEVBQUUsT0FBTyxpQkFBaUI7QUFDNUo7QUFDQSxZQUFZLCtCQUErQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFpRDtBQUMzRTtBQUNBO0FBQ0EsNEJBQTRCLHVDQUF1QztBQUNuRSxzREFBc0QsR0FBRztBQUN6RCxZQUFZLHFEQUFDLFVBQVUsa0dBQWtHLE9BQU8sRUFBRSxPQUFPLGlCQUFpQixnQkFBZ0IscURBQUMsZUFBZSxxREFBQyxxQkFBcUIsdUJBQXVCLEdBQUcsdUNBQXVDLG9CQUFvQix3QkFBd0IsTUFBTSxxREFBQyxXQUFXLFdBQVcsYUFBYSxrREFBa0Q7QUFDelosTUFBTSxxREFBQyxXQUFXLHVCQUF1QixHQUFHLHFDQUFxQyxFQUFFLHFEQUFDLFdBQVc7QUFDL0Y7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVSxHQUFHO0FBQzdCLGtCQUFrQjtBQUNsQjtBQUNBLDRCQUE0QjtBQUM1QixNQUFNLHFEQUFDLFdBQVcsdUJBQXVCLEdBQUcscUNBQXFDLEVBQUUscURBQUMsV0FBVztBQUMvRixnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVTtBQUMxQixnQkFBZ0IsVUFBVSxHQUFHO0FBQzdCLGdCQUFnQixVQUFVLElBQUk7QUFDOUI7QUFDQSw0QkFBNEI7QUFDNUIsTUFBTSxxREFBQyxXQUFXLHVCQUF1QixHQUFHLHFDQUFxQyxFQUFFLHFEQUFDLFdBQVc7QUFDL0Ysb0JBQW9CLFVBQVU7QUFDOUIsb0JBQW9CLE1BQU07QUFDMUIsb0JBQW9CLE1BQU0sR0FBRztBQUM3QixvQkFBb0IsVUFBVSxJQUFJO0FBQ2xDO0FBQ0EsZ0NBQWdDO0FBQ2hDLE1BQU0scURBQUMsV0FBVyw0REFBNEQsR0FBRyxLQUFLO0FBQ3RGLE1BQU0scURBQUMsV0FBVyx1RUFBdUUsR0FBRyxLQUFLO0FBQ2pHLE1BQU0scURBQUMsV0FBVyw0REFBNEQsR0FBRyxLQUFLO0FBQ3RGLFVBQVUscURBQUMsV0FBVyw4Q0FBOEM7QUFDcEU7QUFDQSxhQUFhLE9BQU8scURBQVU7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsY0FBYyxHQUFHLFVBQVUsS0FBSyxXQUFXLG1CQUFtQixHQUFHLFVBQVUsa0NBQWtDLEtBQUssVUFBVSxnQ0FBZ0MsaUJBQWlCLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLGdDQUFnQyxvQkFBb0IsR0FBRyxVQUFVLGtDQUFrQyxLQUFLLFVBQVUsZ0NBQWdDLG1CQUFtQixHQUFHLFVBQVUsaUNBQWlDLEtBQUssVUFBVSxnQ0FBZ0Msb0JBQW9CLEdBQUcsVUFBVSxpQ0FBaUMsS0FBSyxVQUFVLDRCQUE0QixNQUFNLGlGQUFpRixxRUFBcUUsK0ZBQStGLGlHQUFpRywrRkFBK0YsaUJBQWlCLFVBQVUseUJBQXlCLG1EQUFtRCxxQkFBcUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHFCQUFxQiwyQkFBMkIsd0JBQXdCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsTUFBTSx5Q0FBeUMsTUFBTSxpRUFBaUUsa0VBQWtFLGdCQUFnQixhQUFhLGtCQUFrQixlQUFlLHlCQUF5QixpQkFBaUIsMkNBQTJDLG1EQUFtRCxvQkFBb0IsVUFBVSxzQ0FBc0MsZ0RBQWdELGlFQUFpRSxnREFBZ0QsbUJBQW1CLFVBQVUsc0NBQXNDLGdEQUFnRCxpRUFBaUUsZ0RBQWdELGlCQUFpQixVQUFVLGtDQUFrQyxpREFBaUQsaUVBQWlFLGdEQUFnRCxpQkFBaUIsNEJBQTRCLDhDQUE4QywrQkFBK0Isb0RBQW9ELE1BQU0sY0FBYyxXQUFXLGtCQUFrQixjQUFjLHFCQUFxQixrQkFBa0IsNkRBQTZELDREQUE0RCwyREFBMkQsZ0JBQWdCLHNJQUFzSSxrQkFBa0IsZ0VBQWdFLDBDQUEwQyx5R0FBeUcsVUFBVSxzQ0FBc0MsMENBQTBDLHNDQUFzQyx3Q0FBd0Msc0NBQXNDLHlDQUF5QywrREFBK0Qsb0ZBQW9GLGlCQUFpQixrQkFBa0IscUJBQXFCLE9BQU8sOEVBQThFLGtCQUFrQixXQUFXLGFBQWEsZUFBZSxzQkFBc0IsbUJBQW1CLGtCQUFrQiw2QkFBNkIsWUFBWSxvQkFBb0IsOEJBQThCLG1CQUFtQixnR0FBZ0csK0RBQStELGtCQUFrQixnQkFBZ0IsVUFBVSxvQ0FBb0MsY0FBYyxxQkFBcUIsZ0JBQWdCLG1DQUFtQyxhQUFhLGVBQWUsc0JBQXNCLHFCQUFxQixnREFBZ0QsMEJBQTBCLDZDQUE2Qyw4Q0FBOEMsb0RBQW9ELCtMQUErTCx5QkFBeUIscUJBQXFCLHlEQUF5RCwwQ0FBMEMscUJBQXFCLG1EQUFtRCwrQkFBK0IseUNBQXlDLHFCQUFxQix5RUFBeUUsb1BBQW9QLCtCQUErQix5Q0FBeUMsdUJBQXVCLDJHQUEyRyxzQkFBc0IsMENBQTBDLDhCQUE4QixvQ0FBb0MseUZBQXlGLDJDQUEyQyx5RkFBeUYsMENBQTBDLHlGQUF5RixzQ0FBc0MsZ0pBQWdKLHlCQUF5QixvSUFBb0ksdUJBQXVCLG9GQUFvRiwwQ0FBMEMsb0ZBQW9GLHlDQUF5QyxvRkFBb0YsMkNBQTJDLDRDQUE0Qyx5Q0FBeUMseUNBQXlDLHdHQUF3Ryx5Q0FBeUMsT0FBTyxrQkFBa0Isb0JBQW9CLGtCQUFrQiw0Q0FBNEMsdUVBQXVFLGNBQWMsa0JBQWtCLHNCQUFzQixvQkFBb0IseUNBQXlDLHNDQUFzQyxpQkFBaUIsc0NBQXNDLGtCQUFrQixpQkFBaUIsYUFBYSw0RUFBNEUsbUdBQW1HLCtCQUErQixPQUFPLGdCQUFnQixpQkFBaUIsUUFBUSw4QkFBOEIsbUJBQW1CLDRJQUE0SSw0QkFBNEIsT0FBTyw0QkFBNEIsY0FBYyw0QkFBNEIsTUFBTSxrQkFBa0IsbUJBQW1CLHFCQUFxQixpQkFBaUIsbUJBQW1CLGdEQUFnRCw0Q0FBNEMsdUJBQXVCLG9CQUFvQix3Q0FBd0MsY0FBYyx5Q0FBeUMsYUFBYSxvQkFBb0IsNEJBQTRCLGFBQWEsdUJBQXVCLGtCQUFrQixtREFBbUQsa0JBQWtCLGlFQUFpRSxvTkFBb04sOENBQThDLCtCQUErQixPQUFPLHFDQUFxQyxnQkFBZ0IsdUNBQXVDLDZFQUE2RSxpRUFBaUUsdUVBQXVFLHVFQUF1RSxzRUFBc0UsdUVBQXVFLDJEQUEyRCw2RUFBNkUsNkRBQTZELG9GQUFvRiwyREFBMkQsNkVBQTZFLHlFQUF5RSx1RUFBdUUscUhBQXFILDhFQUE4RSxtSEFBbUgseUNBQXlDLG9CQUFvQixxQkFBcUIsd0JBQXdCLHFCQUFxQiw2QkFBNkIsbUJBQW1CLDBCQUEwQixtQ0FBbUMsc0JBQXNCOztBQUU1aVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWdCO0FBQ3BCLDhCQUE4QixxREFBVztBQUN6QywrQkFBK0IscURBQVc7QUFDMUM7QUFDQSxrQ0FBa0Msb0RBQUksR0FBRztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtREFBbUQ7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbURBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUF5QztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMkRBQThCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQWtCO0FBQ3RCLElBQUksc0RBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCLElBQUksb0RBQVc7QUFDZjtBQUNBO0FBQ0EsSUFBSSwyREFBcUI7QUFDekIsSUFBSSxxREFBZTtBQUNuQixJQUFJLG9EQUFjO0FBQ2xCLElBQUksc0RBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBMkI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix5Q0FBeUM7QUFDeEUsZ0NBQWdDLHlDQUF5QztBQUN6RTtBQUNBLDBDQUEwQyxpQkFBaUIsRUFBRSx3QkFBd0I7QUFDckYsdUNBQXVDLGlCQUFpQixFQUFFLHFCQUFxQjtBQUMvRSxvQkFBb0IscURBQUMsVUFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9MQUFvTCx5QkFBeUI7QUFDcE47QUFDQSwwQ0FBMEMsRUFBRSxxREFBQyxVQUFVLGlCQUFpQjtBQUN4RSwyQkFBMkIscURBQUMsVUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxPQUFPLG9MQUFvTCx5QkFBeUI7QUFDcE47QUFDQSwwQ0FBMEMsRUFBRSxxREFBQyxXQUFXLHVEQUF1RCxtQkFBbUIscURBQUMsV0FBVyxpQ0FBaUMseUJBQXlCLFNBQVMsbUJBQW1CLHFEQUFDLFdBQVcsaUNBQWlDLHlCQUF5QixjQUFjLG1CQUFtQixxREFBQyxVQUFVLGlCQUFpQjtBQUN2VyxvQ0FBb0MscURBQUMsVUFBVTtBQUMvQztBQUNBO0FBQ0E7QUFDQSxPQUFPLG9MQUFvTCx5QkFBeUI7QUFDcE47QUFDQSwwQ0FBMEMsRUFBRSxxREFBQyxVQUFVLGlCQUFpQixHQUFHLHFEQUFDLFdBQVcsdURBQXVELG1CQUFtQixxREFBQyxXQUFXLGlDQUFpQyx5QkFBeUIsU0FBUyxtQkFBbUIscURBQUMsV0FBVyxpQ0FBaUMseUJBQXlCLGNBQWM7QUFDdlYsMkJBQTJCLHFEQUFDLFVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9MQUFvTCx5QkFBeUI7QUFDcE47QUFDQSwwQ0FBMEMsRUFBRSxxREFBQyxVQUFVLGlCQUFpQixHQUFHLHFEQUFDLFVBQVUsMkJBQTJCO0FBQ2pILG9DQUFvQyxxREFBQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvTEFBb0wseUJBQXlCO0FBQ3BOO0FBQ0EsMENBQTBDLEVBQUUscURBQUMsVUFBVSwyQkFBMkIsR0FBRyxxREFBQyxVQUFVLGlCQUFpQjtBQUNqSCxrQ0FBa0MscURBQUMsVUFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0xBQW9MLHlCQUF5QjtBQUNwTjtBQUNBLDBDQUEwQyxFQUFFLHFEQUFDLFdBQVcsdURBQXVELG1CQUFtQixxREFBQyxXQUFXLGlDQUFpQyx5QkFBeUIsU0FBUyxtQkFBbUIscURBQUMsV0FBVyxpQ0FBaUMseUJBQXlCLGNBQWMsbUJBQW1CLHFEQUFDLFVBQVUsaUJBQWlCLEdBQUcscURBQUMsVUFBVSwyQkFBMkI7QUFDaFosMkNBQTJDLHFEQUFDLFVBQVU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9MQUFvTCx5QkFBeUI7QUFDcE47QUFDQSwwQ0FBMEMsRUFBRSxxREFBQyxVQUFVLDJCQUEyQixHQUFHLHFEQUFDLFVBQVUsaUJBQWlCLEdBQUcscURBQUMsV0FBVyx1REFBdUQsbUJBQW1CLHFEQUFDLFdBQVcsaUNBQWlDLHlCQUF5QixTQUFTLG1CQUFtQixxREFBQyxXQUFXLGlDQUFpQyx5QkFBeUIsY0FBYztBQUNoWSx1QkFBdUIscURBQUMsVUFBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxPQUFPLDBMQUEwTCx1QkFBdUI7QUFDeE47QUFDQSwwQ0FBMEMsRUFBRSxxREFBQyxVQUFVLGlCQUFpQjtBQUN4RSw4QkFBOEIscURBQUMsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxPQUFPLDBMQUEwTCx1QkFBdUI7QUFDeE47QUFDQSwwQ0FBMEMsRUFBRSxxREFBQyxXQUFXLDBEQUEwRCxzQkFBc0IscURBQUMsV0FBVyxpQ0FBaUMsNEJBQTRCLFNBQVMsc0JBQXNCLHFEQUFDLFdBQVcsaUNBQWlDLDRCQUE0QixjQUFjLHNCQUFzQixxREFBQyxVQUFVLGlCQUFpQjtBQUN6WCx1Q0FBdUMscURBQUMsVUFBVTtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBMQUEwTCx1QkFBdUI7QUFDeE47QUFDQSwwQ0FBMEMsRUFBRSxxREFBQyxVQUFVLGlCQUFpQixHQUFHLHFEQUFDLFdBQVcsMERBQTBELHNCQUFzQixxREFBQyxXQUFXLGlDQUFpQyw0QkFBNEIsU0FBUyxzQkFBc0IscURBQUMsV0FBVyxpQ0FBaUMsNEJBQTRCLGNBQWM7QUFDdFcsOEJBQThCLHFEQUFDLFVBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBMQUEwTCx1QkFBdUI7QUFDeE47QUFDQSwwQ0FBMEMsRUFBRSxxREFBQyxVQUFVLDJCQUEyQixHQUFHLHFEQUFDLFVBQVUsaUJBQWlCO0FBQ2pILHFDQUFxQyxxREFBQyxVQUFVO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwTEFBMEwsdUJBQXVCO0FBQ3hOO0FBQ0EsMENBQTBDLEVBQUUscURBQUMsVUFBVSwyQkFBMkIsR0FBRyxxREFBQyxVQUFVLGlCQUFpQixHQUFHLHFEQUFDLFdBQVcsMERBQTBELHNCQUFzQixxREFBQyxXQUFXLGlDQUFpQyw0QkFBNEIsU0FBUyxzQkFBc0IscURBQUMsV0FBVyxpQ0FBaUMsNEJBQTRCLGNBQWM7QUFDL1ksWUFBWSxxREFBQyxDQUFDLGlEQUFJLElBQUksNkNBQTZDLEVBQUUscURBQUMsVUFBVSxjQUFjLHFEQUFZO0FBQzFHO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVztBQUM5QixTQUFTLHNCQUFzQixxREFBQyxVQUFVO0FBQzFDO0FBQ0EsK0JBQStCLEVBQUUscURBQUMsVUFBVTtBQUM1QyxpQkFBaUIseUNBQXlDO0FBQzFELGtCQUFrQix5Q0FBeUM7QUFDM0QsU0FBUyxHQUFHLHFEQUFDLFVBQVUsZ0JBQWdCO0FBQ3ZDLDRCQUE0QixpQ0FBaUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFEQUFDLFdBQVc7QUFDMUI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYLEtBQUssS0FBSyxxREFBQyxVQUFVLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxREFBQyxDQUFDLGdEQUFtQixJQUFJLGlCQUFpQjtBQUMvRTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFDLG9CQUFvQixtT0FBbU87QUFDclI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHFEQUFDLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdUNBQXVDO0FBQ25EO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCLFFBQVEsbURBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxxREFBYTtBQUMxRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQkFBMEIsbURBQXNCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9DQUFvQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx3REFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsbURBQXNCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFEQUFhO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxxREFBYTtBQUN0RDtBQUNBO0FBQ0EsNENBQTRDLHFEQUFhO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLEtBQUs7QUFDM0UsNEVBQTRFLEtBQUs7QUFDakYsaUZBQWlGLEtBQUs7QUFDdEY7QUFDQTtBQUNBLDBDQUEwQyxrQkFBa0I7QUFDNUQscURBQXFELGtCQUFrQjtBQUN2RTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxhQUFhO0FBQ3BGLDZFQUE2RSxhQUFhO0FBQzFGLGtGQUFrRixhQUFhO0FBQy9GO0FBQ0Esd0VBQXdFLGNBQWM7QUFDdEYsOEVBQThFLGNBQWM7QUFDNUYsbUZBQW1GLGNBQWM7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCx3QkFBd0I7QUFDL0Usa0VBQWtFLHNDQUFzQztBQUN4Ryx3REFBd0QseUJBQXlCO0FBQ2pGLG1FQUFtRSx5QkFBeUI7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsdURBQXVELDZDQUE2QztBQUNwRyx3REFBd0QsMERBQTBEO0FBQ2xILG1FQUFtRSwwREFBMEQ7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCx3QkFBd0I7QUFDL0Usa0VBQWtFLHNDQUFzQztBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCwrQkFBK0I7QUFDcEYsZ0VBQWdFLCtCQUErQjtBQUMvRixzREFBc0QsZ0NBQWdDO0FBQ3RGLGlFQUFpRSxnQ0FBZ0M7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtREFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbURBQVU7QUFDckI7QUFDQSxnQ0FBZ0M7QUFDaEMsYUFBYSxPQUFPLHFEQUFVO0FBQzlCLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvaUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1ncmFwaF8yLmVudHJ5LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL21hdGgtNTg0ZmM2NjUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgYSBhcyBnZXRFbGVtZW50LCBmIGFzIGZvcmNlVXBkYXRlLCBjIGFzIGNyZWF0ZUV2ZW50LCBIIGFzIEhvc3QgfSBmcm9tICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCB7IGcgYXMgZ3VpZCB9IGZyb20gJy4vZ3VpZC03MTM2OTc0Yi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNyZWF0ZU9ic2VydmVyIH0gZnJvbSAnLi9vYnNlcnZlcnMtOTVlOTdmYWUuanMnO1xuaW1wb3J0IHsgaSBhcyBpc1ByaW1hcnlQb2ludGVyQnV0dG9uLCB3IGFzIGludGVyc2VjdHMgfSBmcm9tICcuL2RvbS0xZmI5NGZmNi5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RGb3JtLCBkIGFzIGRpc2Nvbm5lY3RGb3JtLCBhIGFzIGFmdGVyQ29ubmVjdERlZmF1bHRWYWx1ZVNldCwgSCBhcyBIaWRkZW5Gb3JtSW5wdXRTbG90IH0gZnJvbSAnLi9mb3JtLWQ3MzU5ZWZlLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTBlYjEzNjAwLmpzJztcbmltcG9ydCB7IGkgYXMgaXNBY3RpdmF0aW9uS2V5IH0gZnJvbSAnLi9rZXktOGZmMGQxMDEuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TGFiZWwsIGQgYXMgZGlzY29ubmVjdExhYmVsLCBnIGFzIGdldExhYmVsVGV4dCB9IGZyb20gJy4vbGFiZWwtOWQyZWIzMzQuanMnO1xuaW1wb3J0IHsgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCwgYyBhcyBjb21wb25lbnRMb2FkZWQgfSBmcm9tICcuL2xvYWRhYmxlLTgwNThlMzAwLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLCBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcbmltcG9ydCB7IGQgYXMgZGVjaW1hbFBsYWNlcywgYyBhcyBjbGFtcCB9IGZyb20gJy4vbWF0aC01ODRmYzY2NS5qcyc7XG5pbXBvcnQgJy4vcmVzb3VyY2VzLTM0MmUxMmQxLmpzJztcbmltcG9ydCAnLi9icm93c2VyLTk5YmM2MmNmLmpzJztcblxuLyoqXG4gKiBDYWxjdWxhdGUgc2xvcGUgb2YgdGhlIHRhbmdlbnRzXG4gKiB1c2VzIFN0ZWZmZW4gaW50ZXJwb2xhdGlvbiBhcyBpdCdzIG1vbm90b25pY1xuICogaHR0cDovL2pyd2Fsc2gxLmdpdGh1Yi5pby9wb3N0cy9pbnRlcnBvbGF0aW9ucy9cbiAqXG4gKiBAcGFyYW0gcDBcbiAqIEBwYXJhbSBwMVxuICogQHBhcmFtIHAyXG4gKi9cbmZ1bmN0aW9uIHNsb3BlKHAwLCBwMSwgcDIpIHtcbiAgY29uc3QgZHggPSBwMVswXSAtIHAwWzBdO1xuICBjb25zdCBkeDEgPSBwMlswXSAtIHAxWzBdO1xuICBjb25zdCBkeSA9IHAxWzFdIC0gcDBbMV07XG4gIGNvbnN0IGR5MSA9IHAyWzFdIC0gcDFbMV07XG4gIGNvbnN0IG0gPSBkeSAvIChkeCB8fCAoZHgxIDwgMCAmJiAwKSk7XG4gIGNvbnN0IG0xID0gZHkxIC8gKGR4MSB8fCAoZHggPCAwICYmIDApKTtcbiAgY29uc3QgcCA9IChtICogZHgxICsgbTEgKiBkeCkgLyAoZHggKyBkeDEpO1xuICByZXR1cm4gKE1hdGguc2lnbihtKSArIE1hdGguc2lnbihtMSkpICogTWF0aC5taW4oTWF0aC5hYnMobSksIE1hdGguYWJzKG0xKSwgMC41ICogTWF0aC5hYnMocCkpIHx8IDA7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBzbG9wZSBmb3IganVzdCBvbmUgdGFuZ2VudCAoc2luZ2xlLXNpZGVkKVxuICpcbiAqIEBwYXJhbSBwMFxuICogQHBhcmFtIHAxXG4gKiBAcGFyYW0gbVxuICovXG5mdW5jdGlvbiBzbG9wZVNpbmdsZShwMCwgcDEsIG0pIHtcbiAgY29uc3QgZHggPSBwMVswXSAtIHAwWzBdO1xuICBjb25zdCBkeSA9IHAxWzFdIC0gcDBbMV07XG4gIHJldHVybiBkeCA/ICgoMyAqIGR5KSAvIGR4IC0gbSkgLyAyIDogbTtcbn1cbi8qKlxuICogR2l2ZW4gdHdvIHBvaW50cyBhbmQgdGhlaXIgdGFuZ2VudCBzbG9wZXMsXG4gKiBjYWxjdWxhdGUgdGhlIGJlemllciBoYW5kbGUgY29vcmRpbmF0ZXMgYW5kIHJldHVybiBkcmF3IGNvbW1hbmQuXG4gKlxuICogVHJhbnNsYXRlcyBIZXJtaXRlIFNwbGluZSB0byBCZXppw6lyIGN1cnZlOlxuICogc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQyNTc0OTQwL1xuICpcbiAqIEBwYXJhbSBwMFxuICogQHBhcmFtIHAxXG4gKiBAcGFyYW0gbTBcbiAqIEBwYXJhbSBtMVxuICogQHBhcmFtIHRcbiAqL1xuZnVuY3Rpb24gYmV6aWVyKHAwLCBwMSwgbTAsIG0xLCB0KSB7XG4gIGNvbnN0IFt4MCwgeTBdID0gcDA7XG4gIGNvbnN0IFt4MSwgeTFdID0gcDE7XG4gIGNvbnN0IGR4ID0gKHgxIC0geDApIC8gMztcbiAgY29uc3QgaDEgPSB0KFt4MCArIGR4LCB5MCArIGR4ICogbTBdKS5qb2luKFwiLFwiKTtcbiAgY29uc3QgaDIgPSB0KFt4MSAtIGR4LCB5MSAtIGR4ICogbTFdKS5qb2luKFwiLFwiKTtcbiAgY29uc3QgcCA9IHQoW3gxLCB5MV0pLmpvaW4oXCIsXCIpO1xuICByZXR1cm4gYEMgJHtoMX0gJHtoMn0gJHtwfWA7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEgZnVuY3Rpb24gd2hpY2ggd2lsbCB0cmFuc2xhdGUgYSBwb2ludFxuICogZnJvbSB0aGUgZGF0YSBjb29yZGluYXRlIHNwYWNlIHRvIHN2ZyB2aWV3Ym94IG9yaWVudGVkIHBpeGVsc1xuICpcbiAqIEBwYXJhbSByb290MFxuICogQHBhcmFtIHJvb3QwLndpZHRoXG4gKiBAcGFyYW0gcm9vdDAuaGVpZ2h0XG4gKiBAcGFyYW0gcm9vdDAubWluXG4gKiBAcGFyYW0gcm9vdDAubWF4XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZSh7IHdpZHRoLCBoZWlnaHQsIG1pbiwgbWF4IH0pIHtcbiAgY29uc3QgcmFuZ2VYID0gbWF4WzBdIC0gbWluWzBdO1xuICBjb25zdCByYW5nZVkgPSBtYXhbMV0gLSBtaW5bMV07XG4gIHJldHVybiAocG9pbnQpID0+IHtcbiAgICBjb25zdCB4ID0gKChwb2ludFswXSAtIG1pblswXSkgLyByYW5nZVgpICogd2lkdGg7XG4gICAgY29uc3QgeSA9IGhlaWdodCAtIChwb2ludFsxXSAvIHJhbmdlWSkgKiBoZWlnaHQ7XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfTtcbn1cbi8qKlxuICogR2V0IHRoZSBtaW4gYW5kIG1heCB2YWx1ZXMgZnJvbSB0aGUgZGF0YXNldFxuICpcbiAqIEBwYXJhbSBkYXRhXG4gKi9cbmZ1bmN0aW9uIHJhbmdlKGRhdGEpIHtcbiAgY29uc3QgW3N0YXJ0WCwgc3RhcnRZXSA9IGRhdGFbMF07XG4gIGNvbnN0IG1pbiA9IFtzdGFydFgsIHN0YXJ0WV07XG4gIGNvbnN0IG1heCA9IFtzdGFydFgsIHN0YXJ0WV07XG4gIHJldHVybiBkYXRhLnJlZHVjZSgoeyBtaW4sIG1heCB9LCBbeCwgeV0pID0+ICh7XG4gICAgbWluOiBbTWF0aC5taW4obWluWzBdLCB4KSwgTWF0aC5taW4obWluWzFdLCB5KV0sXG4gICAgbWF4OiBbTWF0aC5tYXgobWF4WzBdLCB4KSwgTWF0aC5tYXgobWF4WzFdLCB5KV1cbiAgfSksIHsgbWluLCBtYXggfSk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGRyYXdpbmcgY29tbWFuZHMgZm9yIGFuIGFyZWEgZ3JhcGhcbiAqIHJldHVybnMgYSBzdHJpbmcgY2FuIGNhbiBiZSBwYXNzZWQgZGlyZWN0bHkgdG8gYSBwYXRoIGVsZW1lbnQncyBgZGAgYXR0cmlidXRlXG4gKlxuICogQHBhcmFtIHJvb3QwXG4gKiBAcGFyYW0gcm9vdDAuZGF0YVxuICogQHBhcmFtIHJvb3QwLm1pblxuICogQHBhcmFtIHJvb3QwLm1heFxuICogQHBhcmFtIHJvb3QwLnRcbiAqL1xuZnVuY3Rpb24gYXJlYSh7IGRhdGEsIG1pbiwgbWF4LCB0IH0pIHtcbiAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgLy8gaW1wb3J0YW50IHBvaW50cyBmb3IgYmVnaW5uaW5nIGFuZCBlbmRpbmcgdGhlIHBhdGhcbiAgY29uc3QgW3N0YXJ0WCwgc3RhcnRZXSA9IHQoZGF0YVswXSk7XG4gIGNvbnN0IFttaW5YLCBtaW5ZXSA9IHQobWluKTtcbiAgY29uc3QgW21heFhdID0gdChtYXgpO1xuICAvLyBrZWVwIHRyYWNrIG9mIHByZXZpb3VzIHNsb3BlL3BvaW50c1xuICBsZXQgbTtcbiAgbGV0IHAwO1xuICBsZXQgcDE7XG4gIC8vIGl0ZXJhdGUgb3ZlciBkYXRhIHBvaW50cywgY2FsY3VsYXRpbmcgY29tbWFuZCBmb3IgZWFjaFxuICBjb25zdCBjb21tYW5kcyA9IGRhdGEucmVkdWNlKChhY2MsIHBvaW50LCBpKSA9PiB7XG4gICAgcDAgPSBkYXRhW2kgLSAyXTtcbiAgICBwMSA9IGRhdGFbaSAtIDFdO1xuICAgIGlmIChpID4gMSkge1xuICAgICAgY29uc3QgbTEgPSBzbG9wZShwMCwgcDEsIHBvaW50KTtcbiAgICAgIGNvbnN0IG0wID0gbSA9PT0gdW5kZWZpbmVkID8gc2xvcGVTaW5nbGUocDAsIHAxLCBtMSkgOiBtO1xuICAgICAgY29uc3QgY29tbWFuZCA9IGJlemllcihwMCwgcDEsIG0wLCBtMSwgdCk7XG4gICAgICBtID0gbTE7XG4gICAgICByZXR1cm4gYCR7YWNjfSAke2NvbW1hbmR9YDtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgYE0gJHttaW5YfSwke21pbll9IEwgJHttaW5YfSwke3N0YXJ0WX0gTCAke3N0YXJ0WH0sJHtzdGFydFl9YCk7XG4gIC8vIGNsb3NlIHRoZSBwYXRoXG4gIGNvbnN0IGxhc3QgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XG4gIGNvbnN0IGVuZCA9IGJlemllcihwMSwgbGFzdCwgbSwgc2xvcGVTaW5nbGUocDEsIGxhc3QsIG0pLCB0KTtcbiAgcmV0dXJuIGAke2NvbW1hbmRzfSAke2VuZH0gTCAke21heFh9LCR7bWluWX0gWmA7XG59XG5cbmNvbnN0IGdyYXBoQ3NzID0gXCJAa2V5ZnJhbWVzIGluezAle29wYWNpdHk6MH0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyBpbi1kb3duezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgLTVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXVwezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tcmlnaHR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgtNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tbGVmdHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXNjYWxlezAle29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCgwLjk1LCAwLjk1LCAxKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLCAxLCAxKX19OnJvb3R7LS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmc6Y2FsYygxNTBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3Rvcjp2YXIoLS1jYWxjaXRlLWR1cmF0aW9uLWZhY3RvciwgMSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctZmFzdDpjYWxjKDEwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW06Y2FsYygyMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctc2xvdzpjYWxjKDMwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKX0uY2FsY2l0ZS1hbmltYXRle29wYWNpdHk6MDthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyl9LmNhbGNpdGUtYW5pbWF0ZV9faW57YW5pbWF0aW9uLW5hbWU6aW59LmNhbGNpdGUtYW5pbWF0ZV9faW4tZG93bnthbmltYXRpb24tbmFtZTppbi1kb3dufS5jYWxjaXRlLWFuaW1hdGVfX2luLXVwe2FuaW1hdGlvbi1uYW1lOmluLXVwfS5jYWxjaXRlLWFuaW1hdGVfX2luLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOmluLXJpZ2h0fS5jYWxjaXRlLWFuaW1hdGVfX2luLWxlZnR7YW5pbWF0aW9uLW5hbWU6aW4tbGVmdH0uY2FsY2l0ZS1hbmltYXRlX19pbi1zY2FsZXthbmltYXRpb24tbmFtZTppbi1zY2FsZX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSl7OnJvb3R7LS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcjowLjAxfX06cm9vdHstLWNhbGNpdGUtZmxvYXRpbmctdWktdHJhbnNpdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpOy0tY2FsY2l0ZS1mbG9hdGluZy11aS16LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtZHJvcGRvd24pfTpob3N0KFtoaWRkZW5dKXtkaXNwbGF5Om5vbmV9Omhvc3R7ZGlzcGxheTpibG9jaztibG9jay1zaXplOjEwMCV9LnN2Z3tmaWxsOmN1cnJlbnRDb2xvcjtzdHJva2U6dHJhbnNwYXJlbnQ7bWFyZ2luOjBweDtkaXNwbGF5OmJsb2NrO2Jsb2NrLXNpemU6MTAwJTtpbmxpbmUtc2l6ZToxMDAlO3BhZGRpbmc6MHB4fS5zdmcgLmdyYXBoLXBhdGgtLWhpZ2hsaWdodHtmaWxsOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpO29wYWNpdHk6MC41fVwiO1xuXG5jb25zdCBHcmFwaCA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIFByaXZhdGUgU3RhdGUvUHJvcHNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmdyYXBoSWQgPSBgY2FsY2l0ZS1ncmFwaC0ke2d1aWQoKX1gO1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcInJlc2l6ZVwiLCAoKSA9PiBmb3JjZVVwZGF0ZSh0aGlzKSk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5jb2xvclN0b3BzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGlnaGxpZ2h0TWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGlnaGxpZ2h0TWF4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWluID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWF4ID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIExpZmVjeWNsZVxuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXI/Lm9ic2VydmUodGhpcy5lbCk7XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsIGNvbG9yU3RvcHMsIGVsLCBoaWdobGlnaHRNYXgsIGhpZ2hsaWdodE1pbiwgbWluLCBtYXggfSA9IHRoaXM7XG4gICAgY29uc3QgaWQgPSB0aGlzLmdyYXBoSWQ7XG4gICAgY29uc3QgeyBjbGllbnRIZWlnaHQ6IGhlaWdodCwgY2xpZW50V2lkdGg6IHdpZHRoIH0gPSBlbDtcbiAgICAvLyBpZiB3ZSBoYXZlIG5vIGRhdGEsIHJldHVybiBlbXB0eSBzdmdcbiAgICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAoaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcInN2Z1wiLCBoZWlnaHQ6IGhlaWdodCwgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJub25lXCIsIHZpZXdCb3g6IGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YCwgd2lkdGg6IHdpZHRoIH0pKTtcbiAgICB9XG4gICAgY29uc3QgeyBtaW46IHJhbmdlTWluLCBtYXg6IHJhbmdlTWF4IH0gPSByYW5nZShkYXRhKTtcbiAgICBsZXQgY3VycmVudE1pbiA9IHJhbmdlTWluO1xuICAgIGxldCBjdXJyZW50TWF4ID0gcmFuZ2VNYXg7XG4gICAgaWYgKG1pbiA8IHJhbmdlTWluWzBdIHx8IG1pbiA+IHJhbmdlTWluWzBdKSB7XG4gICAgICBjdXJyZW50TWluID0gW21pbiwgMF07XG4gICAgfVxuICAgIGlmIChtYXggPiByYW5nZU1heFswXSB8fCBtYXggPCByYW5nZU1heFswXSkge1xuICAgICAgY3VycmVudE1heCA9IFttYXgsIHJhbmdlTWF4WzFdXTtcbiAgICB9XG4gICAgY29uc3QgdCA9IHRyYW5zbGF0ZSh7IG1pbjogY3VycmVudE1pbiwgbWF4OiBjdXJyZW50TWF4LCB3aWR0aCwgaGVpZ2h0IH0pO1xuICAgIGNvbnN0IFtoTWluWF0gPSB0KFtoaWdobGlnaHRNaW4sIGN1cnJlbnRNYXhbMV1dKTtcbiAgICBjb25zdCBbaE1heFhdID0gdChbaGlnaGxpZ2h0TWF4LCBjdXJyZW50TWF4WzFdXSk7XG4gICAgY29uc3QgYXJlYVBhdGggPSBhcmVhKHsgZGF0YSwgbWluOiByYW5nZU1pbiwgbWF4OiByYW5nZU1heCwgdCB9KTtcbiAgICBjb25zdCBmaWxsID0gY29sb3JTdG9wcyA/IGB1cmwoI2xpbmVhci1ncmFkaWVudC0ke2lkfSlgIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiAoaChcInN2Z1wiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBcInN2Z1wiLCBoZWlnaHQ6IGhlaWdodCwgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJub25lXCIsIHZpZXdCb3g6IGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YCwgd2lkdGg6IHdpZHRoIH0sIGNvbG9yU3RvcHMgPyAoaChcImRlZnNcIiwgbnVsbCwgaChcImxpbmVhckdyYWRpZW50XCIsIHsgaWQ6IGBsaW5lYXItZ3JhZGllbnQtJHtpZH1gLCB4MTogXCIwXCIsIHgyOiBcIjFcIiwgeTE6IFwiMFwiLCB5MjogXCIwXCIgfSwgY29sb3JTdG9wcy5tYXAoKHsgb2Zmc2V0LCBjb2xvciwgb3BhY2l0eSB9KSA9PiAoaChcInN0b3BcIiwgeyBvZmZzZXQ6IGAke29mZnNldCAqIDEwMH0lYCwgXCJzdG9wLWNvbG9yXCI6IGNvbG9yLCBcInN0b3Atb3BhY2l0eVwiOiBvcGFjaXR5IH0pKSkpKSkgOiBudWxsLCBoaWdobGlnaHRNaW4gIT09IHVuZGVmaW5lZCA/IChbXG4gICAgICBoKFwibWFza1wiLCB7IGhlaWdodDogXCIxMDAlXCIsIGlkOiBgJHtpZH0xYCwgd2lkdGg6IFwiMTAwJVwiLCB4OiBcIjAlXCIsIHk6IFwiMCVcIiB9LCBoKFwicGF0aFwiLCB7IGQ6IGBcbiAgICAgICAgICAgIE0gMCwwXG4gICAgICAgICAgICBMICR7aE1pblggLSAxfSwwXG4gICAgICAgICAgICBMICR7aE1pblggLSAxfSwke2hlaWdodH1cbiAgICAgICAgICAgIEwgMCwke2hlaWdodH1cbiAgICAgICAgICAgIFpcbiAgICAgICAgICBgLCBmaWxsOiBcIndoaXRlXCIgfSkpLFxuICAgICAgaChcIm1hc2tcIiwgeyBoZWlnaHQ6IFwiMTAwJVwiLCBpZDogYCR7aWR9MmAsIHdpZHRoOiBcIjEwMCVcIiwgeDogXCIwJVwiLCB5OiBcIjAlXCIgfSwgaChcInBhdGhcIiwgeyBkOiBgXG4gICAgICAgICAgICBNICR7aE1pblggKyAxfSwwXG4gICAgICAgICAgICBMICR7aE1heFggLSAxfSwwXG4gICAgICAgICAgICBMICR7aE1heFggLSAxfSwke2hlaWdodH1cbiAgICAgICAgICAgIEwgJHtoTWluWCArIDF9LCAke2hlaWdodH1cbiAgICAgICAgICAgIFpcbiAgICAgICAgICBgLCBmaWxsOiBcIndoaXRlXCIgfSkpLFxuICAgICAgaChcIm1hc2tcIiwgeyBoZWlnaHQ6IFwiMTAwJVwiLCBpZDogYCR7aWR9M2AsIHdpZHRoOiBcIjEwMCVcIiwgeDogXCIwJVwiLCB5OiBcIjAlXCIgfSwgaChcInBhdGhcIiwgeyBkOiBgXG4gICAgICAgICAgICAgICAgTSAke2hNYXhYICsgMX0sMFxuICAgICAgICAgICAgICAgIEwgJHt3aWR0aH0sMFxuICAgICAgICAgICAgICAgIEwgJHt3aWR0aH0sJHtoZWlnaHR9XG4gICAgICAgICAgICAgICAgTCAke2hNYXhYICsgMX0sICR7aGVpZ2h0fVxuICAgICAgICAgICAgICAgIFpcbiAgICAgICAgICAgICAgYCwgZmlsbDogXCJ3aGl0ZVwiIH0pKSxcbiAgICAgIGgoXCJwYXRoXCIsIHsgY2xhc3M6IFwiZ3JhcGgtcGF0aFwiLCBkOiBhcmVhUGF0aCwgZmlsbDogZmlsbCwgbWFzazogYHVybCgjJHtpZH0xKWAgfSksXG4gICAgICBoKFwicGF0aFwiLCB7IGNsYXNzOiBcImdyYXBoLXBhdGgtLWhpZ2hsaWdodFwiLCBkOiBhcmVhUGF0aCwgZmlsbDogZmlsbCwgbWFzazogYHVybCgjJHtpZH0yKWAgfSksXG4gICAgICBoKFwicGF0aFwiLCB7IGNsYXNzOiBcImdyYXBoLXBhdGhcIiwgZDogYXJlYVBhdGgsIGZpbGw6IGZpbGwsIG1hc2s6IGB1cmwoIyR7aWR9MylgIH0pXG4gICAgXSkgOiAoaChcInBhdGhcIiwgeyBjbGFzczogXCJncmFwaC1wYXRoXCIsIGQ6IGFyZWFQYXRoLCBmaWxsOiBmaWxsIH0pKSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbn07XG5HcmFwaC5zdHlsZSA9IGdyYXBoQ3NzO1xuXG5jb25zdCBDU1MgPSB7XG4gIGhhbmRsZUxhYmVsOiBcImhhbmRsZV9fbGFiZWxcIixcbiAgaGFuZGxlTGFiZWxNaW5WYWx1ZTogXCJoYW5kbGVfX2xhYmVsLS1taW5WYWx1ZVwiLFxuICBoYW5kbGVMYWJlbFZhbHVlOiBcImhhbmRsZV9fbGFiZWwtLXZhbHVlXCIsXG4gIHRpY2tNaW46IFwidGlja19fbGFiZWwtLW1pblwiLFxuICB0aWNrTWF4OiBcInRpY2tfX2xhYmVsLS1tYXhcIlxufTtcblxuY29uc3Qgc2xpZGVyQ3NzID0gXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO0BrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX0uc2NhbGUtLXN7LS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtc2l6ZTowLjYyNXJlbTstLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1leHRlbnNpb24taGVpZ2h0OjAuNHJlbTstLWNhbGNpdGUtc2xpZGVyLWNvbnRhaW5lci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTMpfS5zY2FsZS0tcyAuaGFuZGxlX19sYWJlbCwuc2NhbGUtLXMgLnRpY2tfX2xhYmVse2xpbmUtaGVpZ2h0Oi43NXJlbX0uc2NhbGUtLW17LS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtc2l6ZTowLjg3NXJlbTstLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1leHRlbnNpb24taGVpZ2h0OjAuNXJlbTstLWNhbGNpdGUtc2xpZGVyLWNvbnRhaW5lci1mb250LXNpemU6dmFyKC0tY2FsY2l0ZS1mb250LXNpemUtLTIpfS5zY2FsZS0tbSAuaGFuZGxlX19sYWJlbCwuc2NhbGUtLW0gLnRpY2tfX2xhYmVse2xpbmUtaGVpZ2h0OjFyZW19LnNjYWxlLS1sey0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLXNpemU6MXJlbTstLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1leHRlbnNpb24taGVpZ2h0OjAuNjVyZW07LS1jYWxjaXRlLXNsaWRlci1jb250YWluZXItZm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLS0xKX0uc2NhbGUtLWwgLmhhbmRsZV9fbGFiZWwsLnNjYWxlLS1sIC50aWNrX19sYWJlbHtsaW5lLWhlaWdodDoxcmVtfS5oYW5kbGVfX2xhYmVsLC50aWNrX19sYWJlbHtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSk7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTIpO2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLXNsaWRlci1jb250YWluZXItZm9udC1zaXplKX06aG9zdHtkaXNwbGF5OmJsb2NrfS5jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztvdmVyZmxvdy13cmFwOm5vcm1hbDt3b3JkLWJyZWFrOm5vcm1hbDtwYWRkaW5nLWlubGluZTpjYWxjKHZhcigtLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1zaXplKSAqIDAuNSk7cGFkZGluZy1ibG9jazpjYWxjKHZhcigtLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1zaXplKSAqIDAuNSk7bWFyZ2luLWJsb2NrOmNhbGModmFyKC0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLXNpemUpICogMC41KTttYXJnaW4taW5saW5lOjA7LS1jYWxjaXRlLXNsaWRlci1mdWxsLWhhbmRsZS1oZWlnaHQ6Y2FsYyhcXG4gICAgdmFyKC0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLXNpemUpICsgdmFyKC0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLWV4dGVuc2lvbi1oZWlnaHQpXFxuICApO3RvdWNoLWFjdGlvbjpub25lfTpob3N0KFtkaXNhYmxlZF0pIC50cmFja19fcmFuZ2UsOmhvc3QoW2Rpc2FibGVkXSkgLnRpY2stLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9LnNjYWxlLS1zIC50aHVtYjpub3QoLnRodW1iLS1wcmVjaXNlKXstLWNhbGNpdGUtc2xpZGVyLXRodW1iLXktb2Zmc2V0Oi0wLjM3NXJlbX0uc2NhbGUtLW0gLnRodW1iOm5vdCgudGh1bWItLXByZWNpc2Upey0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteS1vZmZzZXQ6LTAuNXJlbX0uc2NhbGUtLWwgLnRodW1iOm5vdCgudGh1bWItLXByZWNpc2Upey0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteS1vZmZzZXQ6LTAuNTVyZW19Omhvc3QoW3ByZWNpc2VdOm5vdChbaGFzLWhpc3RvZ3JhbV0pKSAuY29udGFpbmVyIC50aHVtYi0tdmFsdWV7LS1jYWxjaXRlLXNsaWRlci10aHVtYi15LW9mZnNldDpjYWxjKHZhcigtLWNhbGNpdGUtc2xpZGVyLWZ1bGwtaGFuZGxlLWhlaWdodCkgKiAtMSl9LnRodW1iLWNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTttYXgtaW5saW5lLXNpemU6MTAwJX0udGh1bWJ7LS1jYWxjaXRlLXNsaWRlci10aHVtYi14LW9mZnNldDpjYWxjKHZhcigtLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1zaXplKSAqIDAuNSk7cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luOjBweDtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItc3R5bGU6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3BhZGRpbmc6MHB4O2ZvbnQtZmFtaWx5OmluaGVyaXQ7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteC1vZmZzZXQpLCB2YXIoLS1jYWxjaXRlLXNsaWRlci10aHVtYi15LW9mZnNldCkpfS50aHVtYiAuaGFuZGxlX19sYWJlbC5zdGF0aWMsLnRodW1iIC5oYW5kbGVfX2xhYmVsLnRyYW5zZm9ybWVke3Bvc2l0aW9uOmFic29sdXRlO2luc2V0LWJsb2NrOjBweDtvcGFjaXR5OjB9LnRodW1iIC5oYW5kbGVfX2xhYmVsLmh5cGhlbjo6YWZ0ZXJ7Y29udGVudDpcXFwi4oCUXFxcIjtkaXNwbGF5OmlubGluZS1ibG9jaztpbmxpbmUtc2l6ZToxZW19LnRodW1iIC5oYW5kbGVfX2xhYmVsLmh5cGhlbi0td3JhcHtkaXNwbGF5OmZsZXh9LnRodW1iIC5oYW5kbGV7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlci1yYWRpdXM6OTk5OXB4O2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO291dGxpbmUtY29sb3I6dHJhbnNwYXJlbnQ7YmxvY2stc2l6ZTp2YXIoLS1jYWxjaXRlLXNsaWRlci1oYW5kbGUtc2l6ZSk7aW5saW5lLXNpemU6dmFyKC0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLXNpemUpO2JveC1zaGFkb3c6MCAwIDAgMnB4IHZhcigtLWNhbGNpdGUtdWktdGV4dC0zKSBpbnNldDt0cmFuc2l0aW9uOmJvcmRlciB2YXIoLS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtKSBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGVhc2UsIGJveC1zaGFkb3cgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKSBlYXNlfS50aHVtYiAuaGFuZGxlLWV4dGVuc2lvbntpbmxpbmUtc2l6ZTowLjEyNXJlbTtibG9jay1zaXplOnZhcigtLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1leHRlbnNpb24taGVpZ2h0KTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX0udGh1bWI6aG92ZXIgLmhhbmRsZXtib3gtc2hhZG93OjAgMCAwIDNweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSBpbnNldH0udGh1bWI6aG92ZXIgLmhhbmRsZS1leHRlbnNpb257YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0udGh1bWI6Zm9jdXMgLmhhbmRsZXtvdXRsaW5lOjJweCBzb2xpZCB2YXIoLS1jYWxjaXRlLXVpLWZvY3VzLWNvbG9yLCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKSk7b3V0bGluZS1vZmZzZXQ6Y2FsYyhcXG4gICAgICAgICAgICAycHggKlxcbiAgICAgICAgICAgIGNhbGMoXFxuICAgICAgICAgICAgICAxIC1cXG4gICAgICAgICAgICAgIDIgKiBjbGFtcChcXG4gICAgICAgICAgICAgICAgMCxcXG4gICAgICAgICAgICAgICAgdmFyKC0tY2FsY2l0ZS11aS1mb2N1cy1vZmZzZXQtaW52ZXJ0KSxcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIClcXG4gICAgICAgICAgKX0udGh1bWI6Zm9jdXMgLmhhbmRsZS1leHRlbnNpb257YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0udGh1bWIudGh1bWItLW1pblZhbHVle3RyYW5zZm9ybTp0cmFuc2xhdGUoY2FsYyh2YXIoLS1jYWxjaXRlLXNsaWRlci10aHVtYi14LW9mZnNldCkgKiAtMSksIHZhcigtLWNhbGNpdGUtc2xpZGVyLXRodW1iLXktb2Zmc2V0KSl9LnRodW1iLnRodW1iLS1wcmVjaXNley0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteS1vZmZzZXQ6LTAuMTI1cmVtfTpob3N0KFtsYWJlbC1oYW5kbGVzXSkgLnRodW1iey0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteC1vZmZzZXQ6NTAlfTpob3N0KFtsYWJlbC1oYW5kbGVzXSk6aG9zdCg6bm90KFtoYXMtaGlzdG9ncmFtXSkpIC5zY2FsZS0tcyAudGh1bWI6bm90KC50aHVtYi0tcHJlY2lzZSl7LS1jYWxjaXRlLXNsaWRlci10aHVtYi15LW9mZnNldDotMS40Mzc1cmVtfTpob3N0KFtsYWJlbC1oYW5kbGVzXSk6aG9zdCg6bm90KFtoYXMtaGlzdG9ncmFtXSkpIC5zY2FsZS0tbSAudGh1bWI6bm90KC50aHVtYi0tcHJlY2lzZSl7LS1jYWxjaXRlLXNsaWRlci10aHVtYi15LW9mZnNldDotMS44NzVyZW19Omhvc3QoW2xhYmVsLWhhbmRsZXNdKTpob3N0KDpub3QoW2hhcy1oaXN0b2dyYW1dKSkgLnNjYWxlLS1sIC50aHVtYjpub3QoLnRodW1iLS1wcmVjaXNlKXstLWNhbGNpdGUtc2xpZGVyLXRodW1iLXktb2Zmc2V0Oi0ycmVtfTpob3N0KFtoYXMtaGlzdG9ncmFtXVtsYWJlbC1oYW5kbGVzXSkgLmhhbmRsZV9fbGFiZWwsOmhvc3QoW2xhYmVsLWhhbmRsZXNdOm5vdChbaGFzLWhpc3RvZ3JhbV0pKSAudGh1bWItLW1pblZhbHVlLnRodW1iLS1wcmVjaXNlIC5oYW5kbGVfX2xhYmVse21hcmdpbi1ibG9jay1zdGFydDowLjVlbX06aG9zdCg6bm90KFtoYXMtaGlzdG9ncmFtXSk6bm90KFtwcmVjaXNlXSkpIC5oYW5kbGVfX2xhYmVsLDpob3N0KFtsYWJlbC1oYW5kbGVzXTpub3QoW2hhcy1oaXN0b2dyYW1dKSkgLnRodW1iLS12YWx1ZSAuaGFuZGxlX19sYWJlbHttYXJnaW4tYmxvY2stZW5kOjAuNWVtfTpob3N0KFtsYWJlbC1oYW5kbGVzXVtwcmVjaXNlXSk6aG9zdCg6bm90KFtoYXMtaGlzdG9ncmFtXSkpIC5zY2FsZS0tcyAudGh1bWItLXZhbHVley0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteS1vZmZzZXQ6LTIuMDc1cmVtfTpob3N0KFtsYWJlbC1oYW5kbGVzXVtwcmVjaXNlXSk6aG9zdCg6bm90KFtoYXMtaGlzdG9ncmFtXSkpIC5zY2FsZS0tbSAudGh1bWItLXZhbHVley0tY2FsY2l0ZS1zbGlkZXItdGh1bWIteS1vZmZzZXQ6LTIuNzVyZW19Omhvc3QoW2xhYmVsLWhhbmRsZXNdW3ByZWNpc2VdKTpob3N0KDpub3QoW2hhcy1oaXN0b2dyYW1dKSkgLnNjYWxlLS1sIC50aHVtYi0tdmFsdWV7LS1jYWxjaXRlLXNsaWRlci10aHVtYi15LW9mZnNldDotMy4wNjI1cmVtfS50aHVtYjpmb2N1cyAuaGFuZGxlLC50aHVtYi0tYWN0aXZlIC5oYW5kbGV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTtib3gtc2hhZG93OjAgMCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpfS50aHVtYjpob3Zlci50aHVtYi0tcHJlY2lzZTphZnRlciwudGh1bWI6Zm9jdXMudGh1bWItLXByZWNpc2U6YWZ0ZXIsLnRodW1iLS1hY3RpdmUudGh1bWItLXByZWNpc2U6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKX0udHJhY2t7cG9zaXRpb246cmVsYXRpdmU7YmxvY2stc2l6ZTowLjEyNXJlbTtib3JkZXItcmFkaXVzOjBweDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLTIpO3RyYW5zaXRpb246YWxsIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1tZWRpdW0pIGVhc2UtaW59LnRyYWNrX19yYW5nZXtwb3NpdGlvbjphYnNvbHV0ZTtpbnNldC1ibG9jay1zdGFydDowcHg7YmxvY2stc2l6ZTowLjEyNXJlbTtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS5jb250YWluZXItLXJhbmdlIC50cmFja19fcmFuZ2U6aG92ZXJ7Y3Vyc29yOmV3LXJlc2l6ZX0uY29udGFpbmVyLS1yYW5nZSAudHJhY2tfX3JhbmdlOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2lubGluZS1zaXplOjEwMCU7Y29udGVudDpcXFwiXFxcIjtpbnNldC1ibG9jay1zdGFydDpjYWxjKHZhcigtLWNhbGNpdGUtc2xpZGVyLWZ1bGwtaGFuZGxlLWhlaWdodCkgKiAwLjUgKiAtMSk7YmxvY2stc2l6ZTpjYWxjKHZhcigtLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1zaXplKSArIHZhcigtLWNhbGNpdGUtc2xpZGVyLWhhbmRsZS1leHRlbnNpb24taGVpZ2h0KSl9QG1lZGlhIChmb3JjZWQtY29sb3JzOiBhY3RpdmUpey50aHVtYntvdXRsaW5lLXdpZHRoOjA7b3V0bGluZS1vZmZzZXQ6MH0uaGFuZGxle291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweH0udGh1bWI6Zm9jdXMgLmhhbmRsZSwudGh1bWIgLmhhbmRsZS1leHRlbnNpb24sLnRodW1iOmhvdmVyIC5oYW5kbGUtZXh0ZW5zaW9uLC50aHVtYjpmb2N1cyAuaGFuZGxlLWV4dGVuc2lvbiwudGh1bWI6YWN0aXZlIC5oYW5kbGUtZXh0ZW5zaW9ue2JhY2tncm91bmQtY29sb3I6Y2FudmFzVGV4dH0udHJhY2t7YmFja2dyb3VuZC1jb2xvcjpjYW52YXNUZXh0fS50cmFja19fcmFuZ2V7YmFja2dyb3VuZC1jb2xvcjpoaWdobGlnaHR9fS50aWNre3Bvc2l0aW9uOmFic29sdXRlO2Jsb2NrLXNpemU6MC4yNXJlbTtpbmxpbmUtc2l6ZTowLjEyNXJlbTtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1zdHlsZTpzb2xpZDtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYm9yZGVyLWlucHV0KTtib3JkZXItY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2luc2V0LWJsb2NrLXN0YXJ0Oi0ycHg7cG9pbnRlci1ldmVudHM6bm9uZTttYXJnaW4taW5saW5lLXN0YXJ0OmNhbGMoLTEgKiAwLjEyNXJlbSl9LnRpY2stLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktYnJhbmQpfS50aWNrX19sYWJlbHtwb2ludGVyLWV2ZW50czpub25lO21hcmdpbi1ibG9jay1zdGFydDowLjg3NXJlbTtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcn0udGlja19fbGFiZWwtLW1pbnt0cmFuc2l0aW9uOm9wYWNpdHkgdmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0udGlja19fbGFiZWwtLW1heHt0cmFuc2l0aW9uOm9wYWNpdHkgdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3QpfTpob3N0KFtoYXMtaGlzdG9ncmFtXVtsYWJlbC1oYW5kbGVzXSkgLnRpY2tfX2xhYmVsLS1taW4sOmhvc3QoW2hhcy1oaXN0b2dyYW1dW2xhYmVsLWhhbmRsZXNdKSAudGlja19fbGFiZWwtLW1heCw6aG9zdChbaGFzLWhpc3RvZ3JhbV1bcHJlY2lzZV0pIC50aWNrX19sYWJlbC0tbWluLDpob3N0KFtoYXMtaGlzdG9ncmFtXVtwcmVjaXNlXSkgLnRpY2tfX2xhYmVsLS1tYXh7Zm9udC13ZWlnaHQ6dmFyKC0tY2FsY2l0ZS1mb250LXdlaWdodC1ub3JtYWwpO2NvbG9yOnZhcigtLWNhbGNpdGUtdWktdGV4dC0zKX0uZ3JhcGh7Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpO2Jsb2NrLXNpemU6NDhweH06aG9zdChbbGFiZWwtdGlja3NdW3RpY2tzXSkgLmNvbnRhaW5lcntwYWRkaW5nLWJsb2NrLWVuZDpjYWxjKDAuODc1cmVtICsgdmFyKC0tY2FsY2l0ZS1zbGlkZXItY29udGFpbmVyLWZvbnQtc2l6ZSkpfTpob3N0KFtoYXMtaGlzdG9ncmFtXSk6aG9zdChbcHJlY2lzZV1bbGFiZWwtaGFuZGxlc10pIC5jb250YWluZXJ7cGFkZGluZy1ibG9jay1lbmQ6Y2FsYyh2YXIoLS1jYWxjaXRlLXNsaWRlci1mdWxsLWhhbmRsZS1oZWlnaHQpICsgMWVtKX06aG9zdChbaGFzLWhpc3RvZ3JhbV0pOmhvc3QoW2xhYmVsLWhhbmRsZXNdOm5vdChbcHJlY2lzZV0pKSAuY29udGFpbmVye3BhZGRpbmctYmxvY2stZW5kOmNhbGModmFyKC0tY2FsY2l0ZS1zbGlkZXItaGFuZGxlLXNpemUpICogMC41ICsgMWVtKX06aG9zdChbaGFzLWhpc3RvZ3JhbV0pOmhvc3QoW3ByZWNpc2VdOm5vdChbbGFiZWwtaGFuZGxlc10pKSAuY29udGFpbmVye3BhZGRpbmctYmxvY2stZW5kOnZhcigtLWNhbGNpdGUtc2xpZGVyLWZ1bGwtaGFuZGxlLWhlaWdodCl9Omhvc3QoOm5vdChbaGFzLWhpc3RvZ3JhbV0pKTpob3N0KFtwcmVjaXNlXTpub3QoW2xhYmVsLWhhbmRsZXNdKSkgLmNvbnRhaW5lcntwYWRkaW5nLWJsb2NrLXN0YXJ0OnZhcigtLWNhbGNpdGUtc2xpZGVyLWZ1bGwtaGFuZGxlLWhlaWdodCl9Omhvc3QoOm5vdChbaGFzLWhpc3RvZ3JhbV0pKTpob3N0KFtwcmVjaXNlXTpub3QoW2xhYmVsLWhhbmRsZXNdKSkgLmNvbnRhaW5lci0tcmFuZ2V7cGFkZGluZy1ibG9jay1lbmQ6dmFyKC0tY2FsY2l0ZS1zbGlkZXItZnVsbC1oYW5kbGUtaGVpZ2h0KX06aG9zdCg6bm90KFtoYXMtaGlzdG9ncmFtXSkpOmhvc3QoW2xhYmVsLWhhbmRsZXNdOm5vdChbcHJlY2lzZV0pKSAuY29udGFpbmVye3BhZGRpbmctYmxvY2stc3RhcnQ6Y2FsYyh2YXIoLS1jYWxjaXRlLXNsaWRlci1mdWxsLWhhbmRsZS1oZWlnaHQpICsgNHB4KX06aG9zdCg6bm90KFtoYXMtaGlzdG9ncmFtXSkpOmhvc3QoW2xhYmVsLWhhbmRsZXNdW3ByZWNpc2VdKSAuY29udGFpbmVye3BhZGRpbmctYmxvY2stc3RhcnQ6Y2FsYyh2YXIoLS1jYWxjaXRlLXNsaWRlci1mdWxsLWhhbmRsZS1oZWlnaHQpICsgdmFyKC0tY2FsY2l0ZS1zbGlkZXItY29udGFpbmVyLWZvbnQtc2l6ZSkgKyA0cHgpfTpob3N0KDpub3QoW2hhcy1oaXN0b2dyYW1dKSk6aG9zdChbbGFiZWwtaGFuZGxlc11bcHJlY2lzZV0pIC5jb250YWluZXItLXJhbmdle3BhZGRpbmctYmxvY2stZW5kOmNhbGModmFyKC0tY2FsY2l0ZS1zbGlkZXItZnVsbC1oYW5kbGUtaGVpZ2h0KSArIHZhcigtLWNhbGNpdGUtc2xpZGVyLWNvbnRhaW5lci1mb250LXNpemUpICsgNHB4KX06OnNsb3R0ZWQoaW5wdXRbc2xvdD1oaWRkZW4tZm9ybS1pbnB1dF0pe21hcmdpbjowICFpbXBvcnRhbnQ7b3BhY2l0eTowICFpbXBvcnRhbnQ7b3V0bGluZTpub25lICFpbXBvcnRhbnQ7cGFkZGluZzowICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtpbnNldDowICFpbXBvcnRhbnQ7dHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDstd2Via2l0LWFwcGVhcmFuY2U6bm9uZSAhaW1wb3J0YW50O3otaW5kZXg6LTEgIWltcG9ydGFudH1cIjtcblxuZnVuY3Rpb24gaXNSYW5nZSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG59XG5jb25zdCBTbGlkZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZVNsaWRlcklucHV0ID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlU2xpZGVySW5wdXRcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlU2xpZGVyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlU2xpZGVyQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuYWN0aXZlUHJvcCA9IFwidmFsdWVcIjtcbiAgICB0aGlzLmd1aWQgPSBgY2FsY2l0ZS1zbGlkZXItJHtndWlkKCl9YDtcbiAgICB0aGlzLmRyYWdVcGRhdGUgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5kcmFnUHJvcCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudHJhbnNsYXRlKGV2ZW50LmNsaWVudFggfHwgZXZlbnQucGFnZVgpO1xuICAgICAgICBpZiAoaXNSYW5nZSh0aGlzLnZhbHVlKSAmJiB0aGlzLmRyYWdQcm9wID09PSBcIm1pbk1heFZhbHVlXCIpIHtcbiAgICAgICAgICBpZiAodGhpcy5taW5WYWx1ZURyYWdSYW5nZSAmJiB0aGlzLm1heFZhbHVlRHJhZ1JhbmdlICYmIHRoaXMubWluTWF4VmFsdWVSYW5nZSkge1xuICAgICAgICAgICAgY29uc3QgbmV3TWluVmFsdWUgPSB2YWx1ZSAtIHRoaXMubWluVmFsdWVEcmFnUmFuZ2U7XG4gICAgICAgICAgICBjb25zdCBuZXdNYXhWYWx1ZSA9IHZhbHVlICsgdGhpcy5tYXhWYWx1ZURyYWdSYW5nZTtcbiAgICAgICAgICAgIGlmIChuZXdNYXhWYWx1ZSA8PSB0aGlzLm1heCAmJlxuICAgICAgICAgICAgICBuZXdNaW5WYWx1ZSA+PSB0aGlzLm1pbiAmJlxuICAgICAgICAgICAgICBuZXdNYXhWYWx1ZSAtIG5ld01pblZhbHVlID09PSB0aGlzLm1pbk1heFZhbHVlUmFuZ2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh7XG4gICAgICAgICAgICAgICAgbWluVmFsdWU6IHRoaXMuY2xhbXAobmV3TWluVmFsdWUsIFwibWluVmFsdWVcIiksXG4gICAgICAgICAgICAgICAgbWF4VmFsdWU6IHRoaXMuY2xhbXAobmV3TWF4VmFsdWUsIFwibWF4VmFsdWVcIilcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5taW5WYWx1ZURyYWdSYW5nZSA9IHZhbHVlIC0gdGhpcy5taW5WYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubWF4VmFsdWVEcmFnUmFuZ2UgPSB0aGlzLm1heFZhbHVlIC0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm1pbk1heFZhbHVlUmFuZ2UgPSB0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZSh7IFt0aGlzLmRyYWdQcm9wXTogdGhpcy5jbGFtcCh2YWx1ZSwgdGhpcy5kcmFnUHJvcCkgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucG9pbnRlclVwRHJhZ0VuZCA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhZ0VuZChldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLmRyYWdFbmQgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVtb3ZlRHJhZ0xpc3RlbmVycygpO1xuICAgICAgdGhpcy5mb2N1c0FjdGl2ZUhhbmRsZShldmVudC5jbGllbnRYKTtcbiAgICAgIGlmICh0aGlzLmxhc3REcmFnUHJvcFZhbHVlICE9IHRoaXNbdGhpcy5kcmFnUHJvcF0pIHtcbiAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRyYWdQcm9wID0gbnVsbDtcbiAgICAgIHRoaXMubGFzdERyYWdQcm9wVmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy5taW5WYWx1ZURyYWdSYW5nZSA9IG51bGw7XG4gICAgICB0aGlzLm1heFZhbHVlRHJhZ1JhbmdlID0gbnVsbDtcbiAgICAgIHRoaXMubWluTWF4VmFsdWVSYW5nZSA9IG51bGw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHJlZmVyZW5jZSBvZiB0aGUgdHJhY2sgRWxlbWVudFxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICogQHBhcmFtIG5vZGVcbiAgICAgKi9cbiAgICB0aGlzLnN0b3JlVHJhY2tSZWYgPSAobm9kZSkgPT4ge1xuICAgICAgdGhpcy50cmFja0VsID0gbm9kZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBsb2NhbGl6ZWQgbGFiZWwgdmFsdWUgYmFzZWQgaWYgdGhlIGdyb3VwU2VwYXJhdG9yIHByb3AgaXMgcGFyc2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgdGhpcy5kZXRlcm1pbmVHcm91cFNlcGFyYXRvciA9ICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0T3B0aW9ucyA9IHtcbiAgICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgICAgdXNlR3JvdXBpbmc6IHRoaXMuZ3JvdXBTZXBhcmF0b3JcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG51bWJlclN0cmluZ0Zvcm1hdHRlci5sb2NhbGl6ZSh2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZvcm0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5ncm91cFNlcGFyYXRvciA9IGZhbHNlO1xuICAgIHRoaXMuaGFzSGlzdG9ncmFtID0gZmFsc2U7XG4gICAgdGhpcy5oaXN0b2dyYW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oaXN0b2dyYW1TdG9wcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxhYmVsSGFuZGxlcyA9IGZhbHNlO1xuICAgIHRoaXMubGFiZWxUaWNrcyA9IGZhbHNlO1xuICAgIHRoaXMubWF4ID0gMTAwO1xuICAgIHRoaXMubWF4TGFiZWwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tYXhWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pbiA9IDA7XG4gICAgdGhpcy5taW5MYWJlbCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1pblZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWlycm9yZWQgPSBmYWxzZTtcbiAgICB0aGlzLm5hbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYWdlU3RlcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnByZWNpc2UgPSBmYWxzZTtcbiAgICB0aGlzLnJlcXVpcmVkID0gZmFsc2U7XG4gICAgdGhpcy5zbmFwID0gZmFsc2U7XG4gICAgdGhpcy5zdGVwID0gMTtcbiAgICB0aGlzLnRpY2tzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5taW5NYXhWYWx1ZVJhbmdlID0gbnVsbDtcbiAgICB0aGlzLm1pblZhbHVlRHJhZ1JhbmdlID0gbnVsbDtcbiAgICB0aGlzLm1heFZhbHVlRHJhZ1JhbmdlID0gbnVsbDtcbiAgICB0aGlzLnRpY2tWYWx1ZXMgPSBbXTtcbiAgfVxuICBoaXN0b2dyYW1XYXRjaGVyKG5ld0hpc3RvZ3JhbSkge1xuICAgIHRoaXMuaGFzSGlzdG9ncmFtID0gISFuZXdIaXN0b2dyYW07XG4gIH1cbiAgdmFsdWVIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0TWluTWF4RnJvbVZhbHVlKCk7XG4gIH1cbiAgbWluTWF4VmFsdWVIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0VmFsdWVGcm9tTWluTWF4KCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgTGlmZWN5Y2xlXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGNvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgdGhpcy5zZXRNaW5NYXhGcm9tVmFsdWUoKTtcbiAgICB0aGlzLnNldFZhbHVlRnJvbU1pbk1heCgpO1xuICAgIGNvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBjb25uZWN0Rm9ybSh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgZGlzY29ubmVjdExhYmVsKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RGb3JtKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMb2NhbGl6ZWQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVEcmFnTGlzdGVuZXJzKCk7XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgc2V0VXBMb2FkYWJsZUNvbXBvbmVudCh0aGlzKTtcbiAgICB0aGlzLnRpY2tWYWx1ZXMgPSB0aGlzLmdlbmVyYXRlVGlja1ZhbHVlcygpO1xuICAgIGlmICghaXNSYW5nZSh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuY2xhbXAodGhpcy52YWx1ZSk7XG4gICAgfVxuICAgIGFmdGVyQ29ubmVjdERlZmF1bHRWYWx1ZVNldCh0aGlzLCB0aGlzLnZhbHVlKTtcbiAgICBpZiAodGhpcy5zbmFwICYmICFpc1JhbmdlKHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5nZXRDbG9zZXN0U3RlcCh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGlzdG9ncmFtKSB7XG4gICAgICB0aGlzLmhhc0hpc3RvZ3JhbSA9IHRydWU7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZExvYWQoKSB7XG4gICAgc2V0Q29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5sYWJlbEhhbmRsZXMpIHtcbiAgICAgIHRoaXMuYWRqdXN0SG9zdE9ic2N1cmVkSGFuZGxlTGFiZWwoXCJ2YWx1ZVwiKTtcbiAgICAgIGlmIChpc1JhbmdlKHRoaXMudmFsdWUpKSB7XG4gICAgICAgIHRoaXMuYWRqdXN0SG9zdE9ic2N1cmVkSGFuZGxlTGFiZWwoXCJtaW5WYWx1ZVwiKTtcbiAgICAgICAgaWYgKCEodGhpcy5wcmVjaXNlICYmICF0aGlzLmhhc0hpc3RvZ3JhbSkpIHtcbiAgICAgICAgICB0aGlzLmh5cGhlbmF0ZUNvbGxpZGluZ1JhbmdlSGFuZGxlTGFiZWxzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5oaWRlT2JzY3VyZWRCb3VuZGluZ1RpY2tMYWJlbHMoKTtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5lbC5pZCB8fCB0aGlzLmd1aWQ7XG4gICAgY29uc3QgbWF4UHJvcCA9IGlzUmFuZ2UodGhpcy52YWx1ZSkgPyBcIm1heFZhbHVlXCIgOiBcInZhbHVlXCI7XG4gICAgY29uc3QgdmFsdWUgPSBpc1JhbmdlKHRoaXMudmFsdWUpID8gdGhpcy5tYXhWYWx1ZSA6IHRoaXMudmFsdWU7XG4gICAgY29uc3QgZGlzcGxheWVkVmFsdWUgPSB0aGlzLmRldGVybWluZUdyb3VwU2VwYXJhdG9yKHZhbHVlKTtcbiAgICBjb25zdCBkaXNwbGF5ZWRNaW5WYWx1ZSA9IHRoaXMuZGV0ZXJtaW5lR3JvdXBTZXBhcmF0b3IodGhpcy5taW5WYWx1ZSk7XG4gICAgY29uc3QgbWluID0gdGhpcy5taW5WYWx1ZSB8fCB0aGlzLm1pbjtcbiAgICBjb25zdCB1c2VNaW5WYWx1ZSA9IHRoaXMuc2hvdWxkVXNlTWluVmFsdWUoKTtcbiAgICBjb25zdCBtaW5JbnRlcnZhbCA9IHRoaXMuZ2V0VW5pdEludGVydmFsKHVzZU1pblZhbHVlID8gdGhpcy5taW5WYWx1ZSA6IG1pbikgKiAxMDA7XG4gICAgY29uc3QgbWF4SW50ZXJ2YWwgPSB0aGlzLmdldFVuaXRJbnRlcnZhbCh2YWx1ZSkgKiAxMDA7XG4gICAgY29uc3QgbWlycm9yID0gdGhpcy5zaG91bGRNaXJyb3IoKTtcbiAgICBjb25zdCBsZWZ0VGh1bWJPZmZzZXQgPSBgJHttaXJyb3IgPyAxMDAgLSBtaW5JbnRlcnZhbCA6IG1pbkludGVydmFsfSVgO1xuICAgIGNvbnN0IHJpZ2h0VGh1bWJPZmZzZXQgPSBgJHttaXJyb3IgPyBtYXhJbnRlcnZhbCA6IDEwMCAtIG1heEludGVydmFsfSVgO1xuICAgIGNvbnN0IHZhbHVlSXNSYW5nZSA9IGlzUmFuZ2UodGhpcy52YWx1ZSk7XG4gICAgY29uc3QgaGFuZGxlTGFiZWxNaW5WYWx1ZUNsYXNzZXMgPSBgJHtDU1MuaGFuZGxlTGFiZWx9ICR7Q1NTLmhhbmRsZUxhYmVsTWluVmFsdWV9YDtcbiAgICBjb25zdCBoYW5kbGVMYWJlbFZhbHVlQ2xhc3NlcyA9IGAke0NTUy5oYW5kbGVMYWJlbH0gJHtDU1MuaGFuZGxlTGFiZWxWYWx1ZX1gO1xuICAgIGNvbnN0IGhhbmRsZSA9IChoKFwiZGl2XCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQsIFwiYXJpYS1sYWJlbFwiOiB2YWx1ZUlzUmFuZ2UgPyB0aGlzLm1heExhYmVsIDogdGhpcy5taW5MYWJlbCwgXCJhcmlhLW9yaWVudGF0aW9uXCI6IFwiaG9yaXpvbnRhbFwiLCBcImFyaWEtdmFsdWVtYXhcIjogdGhpcy5tYXgsIFwiYXJpYS12YWx1ZW1pblwiOiB0aGlzLm1pbiwgXCJhcmlhLXZhbHVlbm93XCI6IHZhbHVlLCBjbGFzczoge1xuICAgICAgICB0aHVtYjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tdmFsdWVcIjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tYWN0aXZlXCI6IHRoaXMubGFzdERyYWdQcm9wICE9PSBcIm1pbk1heFZhbHVlXCIgJiYgdGhpcy5kcmFnUHJvcCA9PT0gbWF4UHJvcFxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBtYXhQcm9wKSwgb25Qb2ludGVyRG93bjogKGV2ZW50KSA9PiB0aGlzLnBvaW50ZXJEb3duRHJhZ1N0YXJ0KGV2ZW50LCBtYXhQcm9wKSwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgcmlnaHQ6IHJpZ2h0VGh1bWJPZmZzZXQgfSwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5tYXhIYW5kbGUgPSBlbCkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhhbmRsZVwiIH0pKSk7XG4gICAgY29uc3QgbGFiZWxlZEhhbmRsZSA9IChoKFwiZGl2XCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQsIFwiYXJpYS1sYWJlbFwiOiB2YWx1ZUlzUmFuZ2UgPyB0aGlzLm1heExhYmVsIDogdGhpcy5taW5MYWJlbCwgXCJhcmlhLW9yaWVudGF0aW9uXCI6IFwiaG9yaXpvbnRhbFwiLCBcImFyaWEtdmFsdWVtYXhcIjogdGhpcy5tYXgsIFwiYXJpYS12YWx1ZW1pblwiOiB0aGlzLm1pbiwgXCJhcmlhLXZhbHVlbm93XCI6IHZhbHVlLCBjbGFzczoge1xuICAgICAgICB0aHVtYjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tdmFsdWVcIjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tYWN0aXZlXCI6IHRoaXMubGFzdERyYWdQcm9wICE9PSBcIm1pbk1heFZhbHVlXCIgJiYgdGhpcy5kcmFnUHJvcCA9PT0gbWF4UHJvcFxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBtYXhQcm9wKSwgb25Qb2ludGVyRG93bjogKGV2ZW50KSA9PiB0aGlzLnBvaW50ZXJEb3duRHJhZ1N0YXJ0KGV2ZW50LCBtYXhQcm9wKSwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgcmlnaHQ6IHJpZ2h0VGh1bWJPZmZzZXQgfSwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5tYXhIYW5kbGUgPSBlbCkgfSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogaGFuZGxlTGFiZWxWYWx1ZUNsYXNzZXMgfSwgZGlzcGxheWVkVmFsdWUpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBgJHtoYW5kbGVMYWJlbFZhbHVlQ2xhc3Nlc30gc3RhdGljYCB9LCBkaXNwbGF5ZWRWYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsVmFsdWVDbGFzc2VzfSB0cmFuc2Zvcm1lZGAgfSwgZGlzcGxheWVkVmFsdWUpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlXCIgfSkpKTtcbiAgICBjb25zdCBoaXN0b2dyYW1MYWJlbGVkSGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHZhbHVlSXNSYW5nZSA/IHRoaXMubWF4TGFiZWwgOiB0aGlzLm1pbkxhYmVsLCBcImFyaWEtb3JpZW50YXRpb25cIjogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiB0aGlzLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHRoaXMubWluLCBcImFyaWEtdmFsdWVub3dcIjogdmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS12YWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5sYXN0RHJhZ1Byb3AgIT09IFwibWluTWF4VmFsdWVcIiAmJiB0aGlzLmRyYWdQcm9wID09PSBtYXhQcm9wXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG1heFByb3ApLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIG1heFByb3ApLCByb2xlOiBcInNsaWRlclwiLCBzdHlsZTogeyByaWdodDogcmlnaHRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1heEhhbmRsZSA9IGVsKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlXCIgfSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGhhbmRsZUxhYmVsVmFsdWVDbGFzc2VzIH0sIGRpc3BsYXllZFZhbHVlKSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogYCR7aGFuZGxlTGFiZWxWYWx1ZUNsYXNzZXN9IHN0YXRpY2AgfSwgZGlzcGxheWVkVmFsdWUpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBgJHtoYW5kbGVMYWJlbFZhbHVlQ2xhc3Nlc30gdHJhbnNmb3JtZWRgIH0sIGRpc3BsYXllZFZhbHVlKSkpO1xuICAgIGNvbnN0IHByZWNpc2VIYW5kbGUgPSAoaChcImRpdlwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkLCBcImFyaWEtbGFiZWxcIjogdmFsdWVJc1JhbmdlID8gdGhpcy5tYXhMYWJlbCA6IHRoaXMubWluTGFiZWwsIFwiYXJpYS1vcmllbnRhdGlvblwiOiBcImhvcml6b250YWxcIiwgXCJhcmlhLXZhbHVlbWF4XCI6IHRoaXMubWF4LCBcImFyaWEtdmFsdWVtaW5cIjogdGhpcy5taW4sIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZSwgY2xhc3M6IHtcbiAgICAgICAgdGh1bWI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLXZhbHVlXCI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLWFjdGl2ZVwiOiB0aGlzLmxhc3REcmFnUHJvcCAhPT0gXCJtaW5NYXhWYWx1ZVwiICYmIHRoaXMuZHJhZ1Byb3AgPT09IG1heFByb3AsXG4gICAgICAgIFwidGh1bWItLXByZWNpc2VcIjogdHJ1ZVxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBtYXhQcm9wKSwgb25Qb2ludGVyRG93bjogKGV2ZW50KSA9PiB0aGlzLnBvaW50ZXJEb3duRHJhZ1N0YXJ0KGV2ZW50LCBtYXhQcm9wKSwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgcmlnaHQ6IHJpZ2h0VGh1bWJPZmZzZXQgfSwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogKGVsKSA9PiAodGhpcy5tYXhIYW5kbGUgPSBlbCkgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhhbmRsZVwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlLWV4dGVuc2lvblwiIH0pKSk7XG4gICAgY29uc3QgaGlzdG9ncmFtUHJlY2lzZUhhbmRsZSA9IChoKFwiZGl2XCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQsIFwiYXJpYS1sYWJlbFwiOiB2YWx1ZUlzUmFuZ2UgPyB0aGlzLm1heExhYmVsIDogdGhpcy5taW5MYWJlbCwgXCJhcmlhLW9yaWVudGF0aW9uXCI6IFwiaG9yaXpvbnRhbFwiLCBcImFyaWEtdmFsdWVtYXhcIjogdGhpcy5tYXgsIFwiYXJpYS12YWx1ZW1pblwiOiB0aGlzLm1pbiwgXCJhcmlhLXZhbHVlbm93XCI6IHZhbHVlLCBjbGFzczoge1xuICAgICAgICB0aHVtYjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tdmFsdWVcIjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tYWN0aXZlXCI6IHRoaXMubGFzdERyYWdQcm9wICE9PSBcIm1pbk1heFZhbHVlXCIgJiYgdGhpcy5kcmFnUHJvcCA9PT0gbWF4UHJvcCxcbiAgICAgICAgXCJ0aHVtYi0tcHJlY2lzZVwiOiB0cnVlXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG1heFByb3ApLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIG1heFByb3ApLCByb2xlOiBcInNsaWRlclwiLCBzdHlsZTogeyByaWdodDogcmlnaHRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1heEhhbmRsZSA9IGVsKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlLWV4dGVuc2lvblwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlXCIgfSkpKTtcbiAgICBjb25zdCBsYWJlbGVkUHJlY2lzZUhhbmRsZSA9IChoKFwiZGl2XCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQsIFwiYXJpYS1sYWJlbFwiOiB2YWx1ZUlzUmFuZ2UgPyB0aGlzLm1heExhYmVsIDogdGhpcy5taW5MYWJlbCwgXCJhcmlhLW9yaWVudGF0aW9uXCI6IFwiaG9yaXpvbnRhbFwiLCBcImFyaWEtdmFsdWVtYXhcIjogdGhpcy5tYXgsIFwiYXJpYS12YWx1ZW1pblwiOiB0aGlzLm1pbiwgXCJhcmlhLXZhbHVlbm93XCI6IHZhbHVlLCBjbGFzczoge1xuICAgICAgICB0aHVtYjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tdmFsdWVcIjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tYWN0aXZlXCI6IHRoaXMubGFzdERyYWdQcm9wICE9PSBcIm1pbk1heFZhbHVlXCIgJiYgdGhpcy5kcmFnUHJvcCA9PT0gbWF4UHJvcCxcbiAgICAgICAgXCJ0aHVtYi0tcHJlY2lzZVwiOiB0cnVlXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG1heFByb3ApLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIG1heFByb3ApLCByb2xlOiBcInNsaWRlclwiLCBzdHlsZTogeyByaWdodDogcmlnaHRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1heEhhbmRsZSA9IGVsKSB9LCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBoYW5kbGVMYWJlbFZhbHVlQ2xhc3NlcyB9LCBkaXNwbGF5ZWRWYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsVmFsdWVDbGFzc2VzfSBzdGF0aWNgIH0sIGRpc3BsYXllZFZhbHVlKSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogYCR7aGFuZGxlTGFiZWxWYWx1ZUNsYXNzZXN9IHRyYW5zZm9ybWVkYCB9LCBkaXNwbGF5ZWRWYWx1ZSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSwgaChcImRpdlwiLCB7IGNsYXNzOiBcImhhbmRsZS1leHRlbnNpb25cIiB9KSkpO1xuICAgIGNvbnN0IGhpc3RvZ3JhbUxhYmVsZWRQcmVjaXNlSGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHZhbHVlSXNSYW5nZSA/IHRoaXMubWF4TGFiZWwgOiB0aGlzLm1pbkxhYmVsLCBcImFyaWEtb3JpZW50YXRpb25cIjogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiB0aGlzLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHRoaXMubWluLCBcImFyaWEtdmFsdWVub3dcIjogdmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS12YWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5sYXN0RHJhZ1Byb3AgIT09IFwibWluTWF4VmFsdWVcIiAmJiB0aGlzLmRyYWdQcm9wID09PSBtYXhQcm9wLFxuICAgICAgICBcInRodW1iLS1wcmVjaXNlXCI6IHRydWVcbiAgICAgIH0sIG9uQmx1cjogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IG51bGwpLCBvbkZvY3VzOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbWF4UHJvcCksIG9uUG9pbnRlckRvd246IChldmVudCkgPT4gdGhpcy5wb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgbWF4UHJvcCksIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IHJpZ2h0OiByaWdodFRodW1iT2Zmc2V0IH0sIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWF4SGFuZGxlID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGUtZXh0ZW5zaW9uXCIgfSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogaGFuZGxlTGFiZWxWYWx1ZUNsYXNzZXMgfSwgZGlzcGxheWVkVmFsdWUpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBgJHtoYW5kbGVMYWJlbFZhbHVlQ2xhc3Nlc30gc3RhdGljYCB9LCBkaXNwbGF5ZWRWYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsVmFsdWVDbGFzc2VzfSB0cmFuc2Zvcm1lZGAgfSwgZGlzcGxheWVkVmFsdWUpKSk7XG4gICAgY29uc3QgbWluSGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWluTGFiZWwsIFwiYXJpYS1vcmllbnRhdGlvblwiOiBcImhvcml6b250YWxcIiwgXCJhcmlhLXZhbHVlbWF4XCI6IHRoaXMubWF4LCBcImFyaWEtdmFsdWVtaW5cIjogdGhpcy5taW4sIFwiYXJpYS12YWx1ZW5vd1wiOiB0aGlzLm1pblZhbHVlLCBjbGFzczoge1xuICAgICAgICB0aHVtYjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tbWluVmFsdWVcIjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tYWN0aXZlXCI6IHRoaXMuZHJhZ1Byb3AgPT09IFwibWluVmFsdWVcIlxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBcIm1pblZhbHVlXCIpLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIFwibWluVmFsdWVcIiksIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IGxlZnQ6IGxlZnRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1pbkhhbmRsZSA9IGVsKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlXCIgfSkpKTtcbiAgICBjb25zdCBtaW5MYWJlbGVkSGFuZGxlID0gKGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCwgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWluTGFiZWwsIFwiYXJpYS1vcmllbnRhdGlvblwiOiBcImhvcml6b250YWxcIiwgXCJhcmlhLXZhbHVlbWF4XCI6IHRoaXMubWF4LCBcImFyaWEtdmFsdWVtaW5cIjogdGhpcy5taW4sIFwiYXJpYS12YWx1ZW5vd1wiOiB0aGlzLm1pblZhbHVlLCBjbGFzczoge1xuICAgICAgICB0aHVtYjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tbWluVmFsdWVcIjogdHJ1ZSxcbiAgICAgICAgXCJ0aHVtYi0tYWN0aXZlXCI6IHRoaXMuZHJhZ1Byb3AgPT09IFwibWluVmFsdWVcIlxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBcIm1pblZhbHVlXCIpLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIFwibWluVmFsdWVcIiksIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IGxlZnQ6IGxlZnRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1pbkhhbmRsZSA9IGVsKSB9LCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBoYW5kbGVMYWJlbE1pblZhbHVlQ2xhc3NlcyB9LCBkaXNwbGF5ZWRNaW5WYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsTWluVmFsdWVDbGFzc2VzfSBzdGF0aWNgIH0sIGRpc3BsYXllZE1pblZhbHVlKSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogYCR7aGFuZGxlTGFiZWxNaW5WYWx1ZUNsYXNzZXN9IHRyYW5zZm9ybWVkYCB9LCBkaXNwbGF5ZWRNaW5WYWx1ZSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSkpO1xuICAgIGNvbnN0IG1pbkhpc3RvZ3JhbUxhYmVsZWRIYW5kbGUgPSAoaChcImRpdlwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkLCBcImFyaWEtbGFiZWxcIjogdGhpcy5taW5MYWJlbCwgXCJhcmlhLW9yaWVudGF0aW9uXCI6IFwiaG9yaXpvbnRhbFwiLCBcImFyaWEtdmFsdWVtYXhcIjogdGhpcy5tYXgsIFwiYXJpYS12YWx1ZW1pblwiOiB0aGlzLm1pbiwgXCJhcmlhLXZhbHVlbm93XCI6IHRoaXMubWluVmFsdWUsIGNsYXNzOiB7XG4gICAgICAgIHRodW1iOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1taW5WYWx1ZVwiOiB0cnVlLFxuICAgICAgICBcInRodW1iLS1hY3RpdmVcIjogdGhpcy5kcmFnUHJvcCA9PT0gXCJtaW5WYWx1ZVwiXG4gICAgICB9LCBvbkJsdXI6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBudWxsKSwgb25Gb2N1czogKCkgPT4gKHRoaXMuYWN0aXZlUHJvcCA9IFwibWluVmFsdWVcIiksIG9uUG9pbnRlckRvd246IChldmVudCkgPT4gdGhpcy5wb2ludGVyRG93bkRyYWdTdGFydChldmVudCwgXCJtaW5WYWx1ZVwiKSwgcm9sZTogXCJzbGlkZXJcIiwgc3R5bGU6IHsgbGVmdDogbGVmdFRodW1iT2Zmc2V0IH0sIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IChlbCkgPT4gKHRoaXMubWluSGFuZGxlID0gZWwpIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJoYW5kbGVcIiB9KSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogaGFuZGxlTGFiZWxNaW5WYWx1ZUNsYXNzZXMgfSwgZGlzcGxheWVkTWluVmFsdWUpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBgJHtoYW5kbGVMYWJlbE1pblZhbHVlQ2xhc3Nlc30gc3RhdGljYCB9LCBkaXNwbGF5ZWRNaW5WYWx1ZSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGAke2hhbmRsZUxhYmVsTWluVmFsdWVDbGFzc2VzfSB0cmFuc2Zvcm1lZGAgfSwgZGlzcGxheWVkTWluVmFsdWUpKSk7XG4gICAgY29uc3QgbWluUHJlY2lzZUhhbmRsZSA9IChoKFwiZGl2XCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQsIFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1pbkxhYmVsLCBcImFyaWEtb3JpZW50YXRpb25cIjogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiB0aGlzLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHRoaXMubWluLCBcImFyaWEtdmFsdWVub3dcIjogdGhpcy5taW5WYWx1ZSwgY2xhc3M6IHtcbiAgICAgICAgdGh1bWI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLW1pblZhbHVlXCI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLWFjdGl2ZVwiOiB0aGlzLmRyYWdQcm9wID09PSBcIm1pblZhbHVlXCIsXG4gICAgICAgIFwidGh1bWItLXByZWNpc2VcIjogdHJ1ZVxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBcIm1pblZhbHVlXCIpLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIFwibWluVmFsdWVcIiksIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IGxlZnQ6IGxlZnRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1pbkhhbmRsZSA9IGVsKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlLWV4dGVuc2lvblwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlXCIgfSkpKTtcbiAgICBjb25zdCBtaW5MYWJlbGVkUHJlY2lzZUhhbmRsZSA9IChoKFwiZGl2XCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQsIFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1pbkxhYmVsLCBcImFyaWEtb3JpZW50YXRpb25cIjogXCJob3Jpem9udGFsXCIsIFwiYXJpYS12YWx1ZW1heFwiOiB0aGlzLm1heCwgXCJhcmlhLXZhbHVlbWluXCI6IHRoaXMubWluLCBcImFyaWEtdmFsdWVub3dcIjogdGhpcy5taW5WYWx1ZSwgY2xhc3M6IHtcbiAgICAgICAgdGh1bWI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLW1pblZhbHVlXCI6IHRydWUsXG4gICAgICAgIFwidGh1bWItLWFjdGl2ZVwiOiB0aGlzLmRyYWdQcm9wID09PSBcIm1pblZhbHVlXCIsXG4gICAgICAgIFwidGh1bWItLXByZWNpc2VcIjogdHJ1ZVxuICAgICAgfSwgb25CbHVyOiAoKSA9PiAodGhpcy5hY3RpdmVQcm9wID0gbnVsbCksIG9uRm9jdXM6ICgpID0+ICh0aGlzLmFjdGl2ZVByb3AgPSBcIm1pblZhbHVlXCIpLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIFwibWluVmFsdWVcIiksIHJvbGU6IFwic2xpZGVyXCIsIHN0eWxlOiB7IGxlZnQ6IGxlZnRUaHVtYk9mZnNldCB9LCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiAoZWwpID0+ICh0aGlzLm1pbkhhbmRsZSA9IGVsKSB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlLWV4dGVuc2lvblwiIH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGFuZGxlXCIgfSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiwgY2xhc3M6IGhhbmRsZUxhYmVsTWluVmFsdWVDbGFzc2VzIH0sIGRpc3BsYXllZE1pblZhbHVlKSwgaChcInNwYW5cIiwgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLCBjbGFzczogYCR7aGFuZGxlTGFiZWxNaW5WYWx1ZUNsYXNzZXN9IHN0YXRpY2AgfSwgZGlzcGxheWVkTWluVmFsdWUpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsIGNsYXNzOiBgJHtoYW5kbGVMYWJlbE1pblZhbHVlQ2xhc3Nlc30gdHJhbnNmb3JtZWRgIH0sIGRpc3BsYXllZE1pblZhbHVlKSkpO1xuICAgIHJldHVybiAoaChIb3N0LCB7IGlkOiBpZCwgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQgfSwgaChcImRpdlwiLCB7IFwiYXJpYS1sYWJlbFwiOiBnZXRMYWJlbFRleHQodGhpcyksIGNsYXNzOiB7XG4gICAgICAgIFtcImNvbnRhaW5lclwiXTogdHJ1ZSxcbiAgICAgICAgW1wiY29udGFpbmVyLS1yYW5nZVwiXTogdmFsdWVJc1JhbmdlLFxuICAgICAgICBbYHNjYWxlLS0ke3RoaXMuc2NhbGV9YF06IHRydWVcbiAgICAgIH0gfSwgdGhpcy5yZW5kZXJHcmFwaCgpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidHJhY2tcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnN0b3JlVHJhY2tSZWYgfSwgaChcImRpdlwiLCB7IGNsYXNzOiBcInRyYWNrX19yYW5nZVwiLCBvblBvaW50ZXJEb3duOiAoZXZlbnQpID0+IHRoaXMucG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIFwibWluTWF4VmFsdWVcIiksIHN0eWxlOiB7XG4gICAgICAgIGxlZnQ6IGAke21pcnJvciA/IDEwMCAtIG1heEludGVydmFsIDogbWluSW50ZXJ2YWx9JWAsXG4gICAgICAgIHJpZ2h0OiBgJHttaXJyb3IgPyBtaW5JbnRlcnZhbCA6IDEwMCAtIG1heEludGVydmFsfSVgXG4gICAgICB9IH0pLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwidGlja3NcIiB9LCB0aGlzLnRpY2tWYWx1ZXMubWFwKCh0aWNrKSA9PiB7XG4gICAgICBjb25zdCB0aWNrT2Zmc2V0ID0gYCR7dGhpcy5nZXRVbml0SW50ZXJ2YWwodGljaykgKiAxMDB9JWA7XG4gICAgICBsZXQgYWN0aXZlVGlja3MgPSB0aWNrID49IG1pbiAmJiB0aWNrIDw9IHZhbHVlO1xuICAgICAgaWYgKHVzZU1pblZhbHVlKSB7XG4gICAgICAgIGFjdGl2ZVRpY2tzID0gdGljayA+PSB0aGlzLm1pblZhbHVlICYmIHRpY2sgPD0gdGhpcy5tYXhWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoaChcInNwYW5cIiwgeyBjbGFzczoge1xuICAgICAgICAgIHRpY2s6IHRydWUsXG4gICAgICAgICAgXCJ0aWNrLS1hY3RpdmVcIjogYWN0aXZlVGlja3NcbiAgICAgICAgfSwgc3R5bGU6IHtcbiAgICAgICAgICBsZWZ0OiBtaXJyb3IgPyBcIlwiIDogdGlja09mZnNldCxcbiAgICAgICAgICByaWdodDogbWlycm9yID8gdGlja09mZnNldCA6IFwiXCJcbiAgICAgICAgfSB9LCB0aGlzLnJlbmRlclRpY2tMYWJlbCh0aWNrKSkpO1xuICAgIH0pKSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJ0aHVtYi1jb250YWluZXJcIiB9LCAhdGhpcy5wcmVjaXNlICYmICF0aGlzLmxhYmVsSGFuZGxlcyAmJiB2YWx1ZUlzUmFuZ2UgJiYgbWluSGFuZGxlLCAhdGhpcy5oYXNIaXN0b2dyYW0gJiZcbiAgICAgICF0aGlzLnByZWNpc2UgJiZcbiAgICAgIHRoaXMubGFiZWxIYW5kbGVzICYmXG4gICAgICB2YWx1ZUlzUmFuZ2UgJiZcbiAgICAgIG1pbkxhYmVsZWRIYW5kbGUsIHRoaXMucHJlY2lzZSAmJiAhdGhpcy5sYWJlbEhhbmRsZXMgJiYgdmFsdWVJc1JhbmdlICYmIG1pblByZWNpc2VIYW5kbGUsIHRoaXMucHJlY2lzZSAmJiB0aGlzLmxhYmVsSGFuZGxlcyAmJiB2YWx1ZUlzUmFuZ2UgJiYgbWluTGFiZWxlZFByZWNpc2VIYW5kbGUsIHRoaXMuaGFzSGlzdG9ncmFtICYmXG4gICAgICAhdGhpcy5wcmVjaXNlICYmXG4gICAgICB0aGlzLmxhYmVsSGFuZGxlcyAmJlxuICAgICAgdmFsdWVJc1JhbmdlICYmXG4gICAgICBtaW5IaXN0b2dyYW1MYWJlbGVkSGFuZGxlLCAhdGhpcy5wcmVjaXNlICYmICF0aGlzLmxhYmVsSGFuZGxlcyAmJiBoYW5kbGUsICF0aGlzLmhhc0hpc3RvZ3JhbSAmJiAhdGhpcy5wcmVjaXNlICYmIHRoaXMubGFiZWxIYW5kbGVzICYmIGxhYmVsZWRIYW5kbGUsICF0aGlzLmhhc0hpc3RvZ3JhbSAmJiB0aGlzLnByZWNpc2UgJiYgIXRoaXMubGFiZWxIYW5kbGVzICYmIHByZWNpc2VIYW5kbGUsIHRoaXMuaGFzSGlzdG9ncmFtICYmIHRoaXMucHJlY2lzZSAmJiAhdGhpcy5sYWJlbEhhbmRsZXMgJiYgaGlzdG9ncmFtUHJlY2lzZUhhbmRsZSwgIXRoaXMuaGFzSGlzdG9ncmFtICYmIHRoaXMucHJlY2lzZSAmJiB0aGlzLmxhYmVsSGFuZGxlcyAmJiBsYWJlbGVkUHJlY2lzZUhhbmRsZSwgdGhpcy5oYXNIaXN0b2dyYW0gJiYgIXRoaXMucHJlY2lzZSAmJiB0aGlzLmxhYmVsSGFuZGxlcyAmJiBoaXN0b2dyYW1MYWJlbGVkSGFuZGxlLCB0aGlzLmhhc0hpc3RvZ3JhbSAmJlxuICAgICAgdGhpcy5wcmVjaXNlICYmXG4gICAgICB0aGlzLmxhYmVsSGFuZGxlcyAmJlxuICAgICAgaGlzdG9ncmFtTGFiZWxlZFByZWNpc2VIYW5kbGUsIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKSkpO1xuICB9XG4gIHJlbmRlckdyYXBoKCkge1xuICAgIHJldHVybiB0aGlzLmhpc3RvZ3JhbSA/IChoKFwiY2FsY2l0ZS1ncmFwaFwiLCB7IGNsYXNzOiBcImdyYXBoXCIsIGNvbG9yU3RvcHM6IHRoaXMuaGlzdG9ncmFtU3RvcHMsIGRhdGE6IHRoaXMuaGlzdG9ncmFtLCBoaWdobGlnaHRNYXg6IGlzUmFuZ2UodGhpcy52YWx1ZSkgPyB0aGlzLm1heFZhbHVlIDogdGhpcy52YWx1ZSwgaGlnaGxpZ2h0TWluOiBpc1JhbmdlKHRoaXMudmFsdWUpID8gdGhpcy5taW5WYWx1ZSA6IHRoaXMubWluLCBtYXg6IHRoaXMubWF4LCBtaW46IHRoaXMubWluIH0pKSA6IG51bGw7XG4gIH1cbiAgcmVuZGVyVGlja0xhYmVsKHRpY2spIHtcbiAgICBjb25zdCB2YWx1ZUlzUmFuZ2UgPSBpc1JhbmdlKHRoaXMudmFsdWUpO1xuICAgIGNvbnN0IGlzTWluVGlja0xhYmVsID0gdGljayA9PT0gdGhpcy5taW47XG4gICAgY29uc3QgaXNNYXhUaWNrTGFiZWwgPSB0aWNrID09PSB0aGlzLm1heDtcbiAgICBjb25zdCBkaXNwbGF5ZWRUaWNrVmFsdWUgPSB0aGlzLmRldGVybWluZUdyb3VwU2VwYXJhdG9yKHRpY2spO1xuICAgIGNvbnN0IHRpY2tMYWJlbCA9IChoKFwic3BhblwiLCB7IGNsYXNzOiB7XG4gICAgICAgIHRpY2tfX2xhYmVsOiB0cnVlLFxuICAgICAgICBbQ1NTLnRpY2tNaW5dOiBpc01pblRpY2tMYWJlbCxcbiAgICAgICAgW0NTUy50aWNrTWF4XTogaXNNYXhUaWNrTGFiZWxcbiAgICAgIH0gfSwgZGlzcGxheWVkVGlja1ZhbHVlKSk7XG4gICAgaWYgKHRoaXMubGFiZWxUaWNrcyAmJiAhdGhpcy5oYXNIaXN0b2dyYW0gJiYgIXZhbHVlSXNSYW5nZSkge1xuICAgICAgcmV0dXJuIHRpY2tMYWJlbDtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFiZWxUaWNrcyAmJlxuICAgICAgIXRoaXMuaGFzSGlzdG9ncmFtICYmXG4gICAgICB2YWx1ZUlzUmFuZ2UgJiZcbiAgICAgICF0aGlzLnByZWNpc2UgJiZcbiAgICAgICF0aGlzLmxhYmVsSGFuZGxlcykge1xuICAgICAgcmV0dXJuIHRpY2tMYWJlbDtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFiZWxUaWNrcyAmJlxuICAgICAgIXRoaXMuaGFzSGlzdG9ncmFtICYmXG4gICAgICB2YWx1ZUlzUmFuZ2UgJiZcbiAgICAgICF0aGlzLnByZWNpc2UgJiZcbiAgICAgIHRoaXMubGFiZWxIYW5kbGVzKSB7XG4gICAgICByZXR1cm4gdGlja0xhYmVsO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYWJlbFRpY2tzICYmXG4gICAgICAhdGhpcy5oYXNIaXN0b2dyYW0gJiZcbiAgICAgIHZhbHVlSXNSYW5nZSAmJlxuICAgICAgdGhpcy5wcmVjaXNlICYmXG4gICAgICAoaXNNaW5UaWNrTGFiZWwgfHwgaXNNYXhUaWNrTGFiZWwpKSB7XG4gICAgICByZXR1cm4gdGlja0xhYmVsO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYWJlbFRpY2tzICYmIHRoaXMuaGFzSGlzdG9ncmFtICYmICF0aGlzLnByZWNpc2UgJiYgIXRoaXMubGFiZWxIYW5kbGVzKSB7XG4gICAgICByZXR1cm4gdGlja0xhYmVsO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYWJlbFRpY2tzICYmXG4gICAgICB0aGlzLmhhc0hpc3RvZ3JhbSAmJlxuICAgICAgdGhpcy5wcmVjaXNlICYmXG4gICAgICAhdGhpcy5sYWJlbEhhbmRsZXMgJiZcbiAgICAgIChpc01pblRpY2tMYWJlbCB8fCBpc01heFRpY2tMYWJlbCkpIHtcbiAgICAgIHJldHVybiB0aWNrTGFiZWw7XG4gICAgfVxuICAgIGlmICh0aGlzLmxhYmVsVGlja3MgJiZcbiAgICAgIHRoaXMuaGFzSGlzdG9ncmFtICYmXG4gICAgICAhdGhpcy5wcmVjaXNlICYmXG4gICAgICB0aGlzLmxhYmVsSGFuZGxlcyAmJlxuICAgICAgKGlzTWluVGlja0xhYmVsIHx8IGlzTWF4VGlja0xhYmVsKSkge1xuICAgICAgcmV0dXJuIHRpY2tMYWJlbDtcbiAgICB9XG4gICAgaWYgKHRoaXMubGFiZWxUaWNrcyAmJlxuICAgICAgdGhpcy5oYXNIaXN0b2dyYW0gJiZcbiAgICAgIHRoaXMucHJlY2lzZSAmJlxuICAgICAgdGhpcy5sYWJlbEhhbmRsZXMgJiZcbiAgICAgIChpc01pblRpY2tMYWJlbCB8fCBpc01heFRpY2tMYWJlbCkpIHtcbiAgICAgIHJldHVybiB0aWNrTGFiZWw7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgbWlycm9yID0gdGhpcy5zaG91bGRNaXJyb3IoKTtcbiAgICBjb25zdCB7IGFjdGl2ZVByb3AsIG1heCwgbWluLCBwYWdlU3RlcCwgc3RlcCB9ID0gdGhpcztcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXNbYWN0aXZlUHJvcF07XG4gICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgIGlmIChpc0FjdGl2YXRpb25LZXkoa2V5KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGFkanVzdG1lbnQ7XG4gICAgaWYgKGtleSA9PT0gXCJBcnJvd1VwXCIgfHwga2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgY29uc3QgZGlyZWN0aW9uRmFjdG9yID0gbWlycm9yICYmIGtleSA9PT0gXCJBcnJvd1JpZ2h0XCIgPyAtMSA6IDE7XG4gICAgICBhZGp1c3RtZW50ID0gdmFsdWUgKyBzdGVwICogZGlyZWN0aW9uRmFjdG9yO1xuICAgIH1cbiAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dEb3duXCIgfHwga2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb25GYWN0b3IgPSBtaXJyb3IgJiYga2V5ID09PSBcIkFycm93TGVmdFwiID8gLTEgOiAxO1xuICAgICAgYWRqdXN0bWVudCA9IHZhbHVlIC0gc3RlcCAqIGRpcmVjdGlvbkZhY3RvcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoa2V5ID09PSBcIlBhZ2VVcFwiKSB7XG4gICAgICBpZiAocGFnZVN0ZXApIHtcbiAgICAgICAgYWRqdXN0bWVudCA9IHZhbHVlICsgcGFnZVN0ZXA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA9PT0gXCJQYWdlRG93blwiKSB7XG4gICAgICBpZiAocGFnZVN0ZXApIHtcbiAgICAgICAgYWRqdXN0bWVudCA9IHZhbHVlIC0gcGFnZVN0ZXA7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA9PT0gXCJIb21lXCIpIHtcbiAgICAgIGFkanVzdG1lbnQgPSBtaW47XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleSA9PT0gXCJFbmRcIikge1xuICAgICAgYWRqdXN0bWVudCA9IG1heDtcbiAgICB9XG4gICAgaWYgKGlzTmFOKGFkanVzdG1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZml4ZWREZWNpbWFsQWRqdXN0bWVudCA9IE51bWJlcihhZGp1c3RtZW50LnRvRml4ZWQoZGVjaW1hbFBsYWNlcyhzdGVwKSkpO1xuICAgIHRoaXMuc2V0VmFsdWUoe1xuICAgICAgW2FjdGl2ZVByb3BdOiB0aGlzLmNsYW1wKGZpeGVkRGVjaW1hbEFkanVzdG1lbnQsIGFjdGl2ZVByb3ApXG4gICAgfSk7XG4gIH1cbiAgcG9pbnRlckRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIHx8IGV2ZW50LnBhZ2VYO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy50cmFuc2xhdGUoeCk7XG4gICAgbGV0IHByb3AgPSBcInZhbHVlXCI7XG4gICAgaWYgKGlzUmFuZ2UodGhpcy52YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGluUmFuZ2UgPSBwb3NpdGlvbiA+PSB0aGlzLm1pblZhbHVlICYmIHBvc2l0aW9uIDw9IHRoaXMubWF4VmFsdWU7XG4gICAgICBpZiAoaW5SYW5nZSAmJiB0aGlzLmxhc3REcmFnUHJvcCA9PT0gXCJtaW5NYXhWYWx1ZVwiKSB7XG4gICAgICAgIHByb3AgPSBcIm1pbk1heFZhbHVlXCI7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgY2xvc2VyVG9NYXggPSBNYXRoLmFicyh0aGlzLm1heFZhbHVlIC0gcG9zaXRpb24pIDwgTWF0aC5hYnModGhpcy5taW5WYWx1ZSAtIHBvc2l0aW9uKTtcbiAgICAgICAgcHJvcCA9IGNsb3NlclRvTWF4IHx8IHBvc2l0aW9uID4gdGhpcy5tYXhWYWx1ZSA/IFwibWF4VmFsdWVcIiA6IFwibWluVmFsdWVcIjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sYXN0RHJhZ1Byb3BWYWx1ZSA9IHRoaXNbcHJvcF07XG4gICAgdGhpcy5kcmFnU3RhcnQocHJvcCk7XG4gICAgY29uc3QgaXNUaHVtYkFjdGl2ZSA9IHRoaXMuZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnRodW1iOmFjdGl2ZVwiKTtcbiAgICBpZiAoIWlzVGh1bWJBY3RpdmUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoeyBbcHJvcF06IHRoaXMuY2xhbXAocG9zaXRpb24sIHByb3ApIH0pO1xuICAgIH1cbiAgICB0aGlzLmZvY3VzQWN0aXZlSGFuZGxlKHgpO1xuICB9XG4gIGhhbmRsZVRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAvLyBuZWVkZWQgdG8gcHJldmVudCBleHRyYSBjbGljayBhdCB0aGUgZW5kIG9mIGEgaGFuZGxlIGRyYWdcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMubWluSGFuZGxlID8gdGhpcy5taW5IYW5kbGUgOiB0aGlzLm1heEhhbmRsZTtcbiAgICBoYW5kbGU/LmZvY3VzKCk7XG4gIH1cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHJpdmF0ZSBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0VmFsdWVGcm9tTWluTWF4KCkge1xuICAgIGNvbnN0IHsgbWluVmFsdWUsIG1heFZhbHVlIH0gPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgbWluVmFsdWUgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIG1heFZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICB0aGlzLnZhbHVlID0gW21pblZhbHVlLCBtYXhWYWx1ZV07XG4gICAgfVxuICB9XG4gIHNldE1pbk1heEZyb21WYWx1ZSgpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzO1xuICAgIGlmIChpc1JhbmdlKHZhbHVlKSkge1xuICAgICAgdGhpcy5taW5WYWx1ZSA9IHZhbHVlWzBdO1xuICAgICAgdGhpcy5tYXhWYWx1ZSA9IHZhbHVlWzFdO1xuICAgIH1cbiAgfVxuICBvbkxhYmVsQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRGb2N1cygpO1xuICB9XG4gIHNob3VsZE1pcnJvcigpIHtcbiAgICByZXR1cm4gdGhpcy5taXJyb3JlZCAmJiAhdGhpcy5oYXNIaXN0b2dyYW07XG4gIH1cbiAgc2hvdWxkVXNlTWluVmFsdWUoKSB7XG4gICAgaWYgKCFpc1JhbmdlKHRoaXMudmFsdWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAoKHRoaXMuaGFzSGlzdG9ncmFtICYmIHRoaXMubWF4VmFsdWUgPT09IDApIHx8ICghdGhpcy5oYXNIaXN0b2dyYW0gJiYgdGhpcy5taW5WYWx1ZSA9PT0gMCkpO1xuICB9XG4gIGdlbmVyYXRlVGlja1ZhbHVlcygpIHtcbiAgICBjb25zdCB0aWNrcyA9IFtdO1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5taW47XG4gICAgd2hpbGUgKHRoaXMudGlja3MgJiYgY3VycmVudCA8IHRoaXMubWF4ICsgdGhpcy50aWNrcykge1xuICAgICAgdGlja3MucHVzaChNYXRoLm1pbihjdXJyZW50LCB0aGlzLm1heCkpO1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQgKyB0aGlzLnRpY2tzO1xuICAgIH1cbiAgICByZXR1cm4gdGlja3M7XG4gIH1cbiAgcG9pbnRlckRvd25EcmFnU3RhcnQoZXZlbnQsIHByb3ApIHtcbiAgICBpZiAoIWlzUHJpbWFyeVBvaW50ZXJCdXR0b24oZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZHJhZ1N0YXJ0KHByb3ApO1xuICB9XG4gIGRyYWdTdGFydChwcm9wKSB7XG4gICAgdGhpcy5kcmFnUHJvcCA9IHByb3A7XG4gICAgdGhpcy5sYXN0RHJhZ1Byb3AgPSB0aGlzLmRyYWdQcm9wO1xuICAgIHRoaXMuYWN0aXZlUHJvcCA9IHByb3A7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHRoaXMuZHJhZ1VwZGF0ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCB0aGlzLnBvaW50ZXJVcERyYWdFbmQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsIHRoaXMuZHJhZ0VuZCk7XG4gIH1cbiAgZm9jdXNBY3RpdmVIYW5kbGUodmFsdWVYKSB7XG4gICAgc3dpdGNoICh0aGlzLmRyYWdQcm9wKSB7XG4gICAgICBjYXNlIFwibWluVmFsdWVcIjpcbiAgICAgICAgdGhpcy5taW5IYW5kbGUuZm9jdXMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWF4VmFsdWVcIjpcbiAgICAgIGNhc2UgXCJ2YWx1ZVwiOlxuICAgICAgICB0aGlzLm1heEhhbmRsZS5mb2N1cygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtaW5NYXhWYWx1ZVwiOlxuICAgICAgICB0aGlzLmdldENsb3Nlc3RIYW5kbGUodmFsdWVYKS5mb2N1cygpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgZW1pdElucHV0KCkge1xuICAgIHRoaXMuY2FsY2l0ZVNsaWRlcklucHV0LmVtaXQoKTtcbiAgfVxuICBlbWl0Q2hhbmdlKCkge1xuICAgIHRoaXMuY2FsY2l0ZVNsaWRlckNoYW5nZS5lbWl0KCk7XG4gIH1cbiAgcmVtb3ZlRHJhZ0xpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdGhpcy5kcmFnVXBkYXRlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIHRoaXMucG9pbnRlclVwRHJhZ0VuZCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgdGhpcy5kcmFnRW5kKTtcbiAgfVxuICAvKipcbiAgICogU2V0IHByb3AgdmFsdWUocykgaWYgY2hhbmdlZCBhdCB0aGUgY29tcG9uZW50IGxldmVsXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgLSBhIHNldCBvZiBrZXkvdmFsdWUgcGFpcnMgZGVsaW5lYXRpbmcgd2hhdCBwcm9wZXJ0aWVzIGluIHRoZSBjb21wb25lbnQgdG8gdXBkYXRlXG4gICAqL1xuICBzZXRWYWx1ZSh2YWx1ZXMpIHtcbiAgICBsZXQgdmFsdWVDaGFuZ2VkO1xuICAgIE9iamVjdC5rZXlzKHZhbHVlcykuZm9yRWFjaCgocHJvcE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdmFsdWVzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghdmFsdWVDaGFuZ2VkKSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpc1twcm9wTmFtZV07XG4gICAgICAgIHZhbHVlQ2hhbmdlZCA9IG9sZFZhbHVlICE9PSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXNbcHJvcE5hbWVdID0gbmV3VmFsdWU7XG4gICAgfSk7XG4gICAgaWYgKCF2YWx1ZUNoYW5nZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmRyYWdQcm9wO1xuICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuZW1pdENoYW5nZSgpO1xuICAgIH1cbiAgICB0aGlzLmVtaXRJbnB1dCgpO1xuICB9XG4gIC8qKlxuICAgKiBJZiBudW1iZXIgaXMgb3V0c2lkZSByYW5nZSwgY29uc3RyYWluIHRvIG1pbiBvciBtYXhcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlXG4gICAqIEBwYXJhbSBwcm9wXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY2xhbXAodmFsdWUsIHByb3ApIHtcbiAgICB2YWx1ZSA9IGNsYW1wKHZhbHVlLCB0aGlzLm1pbiwgdGhpcy5tYXgpO1xuICAgIC8vIGVuc3VyZSB0aGF0IG1heFZhbHVlIGFuZCBtaW5WYWx1ZSBkb24ndCBzd2FwIHBvc2l0aW9uc1xuICAgIGlmIChwcm9wID09PSBcIm1heFZhbHVlXCIpIHtcbiAgICAgIHZhbHVlID0gTWF0aC5tYXgodmFsdWUsIHRoaXMubWluVmFsdWUpO1xuICAgIH1cbiAgICBpZiAocHJvcCA9PT0gXCJtaW5WYWx1ZVwiKSB7XG4gICAgICB2YWx1ZSA9IE1hdGgubWluKHZhbHVlLCB0aGlzLm1heFZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIC8qKlxuICAgKiBUcmFuc2xhdGUgYSBwaXhlbCBwb3NpdGlvbiB0byB2YWx1ZSBhbG9uZyB0aGUgcmFuZ2VcbiAgICpcbiAgICogQHBhcmFtIHhcbiAgICogQGludGVybmFsXG4gICAqL1xuICB0cmFuc2xhdGUoeCkge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5tYXggLSB0aGlzLm1pbjtcbiAgICBjb25zdCB7IGxlZnQsIHdpZHRoIH0gPSB0aGlzLnRyYWNrRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcGVyY2VudCA9ICh4IC0gbGVmdCkgLyB3aWR0aDtcbiAgICBjb25zdCBtaXJyb3IgPSB0aGlzLnNob3VsZE1pcnJvcigpO1xuICAgIGNvbnN0IGNsYW1wZWRWYWx1ZSA9IHRoaXMuY2xhbXAodGhpcy5taW4gKyByYW5nZSAqIChtaXJyb3IgPyAxIC0gcGVyY2VudCA6IHBlcmNlbnQpKTtcbiAgICBsZXQgdmFsdWUgPSBOdW1iZXIoY2xhbXBlZFZhbHVlLnRvRml4ZWQoZGVjaW1hbFBsYWNlcyh0aGlzLnN0ZXApKSk7XG4gICAgaWYgKHRoaXMuc25hcCAmJiB0aGlzLnN0ZXApIHtcbiAgICAgIHZhbHVlID0gdGhpcy5nZXRDbG9zZXN0U3RlcCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgYWxsb3dlZCB2YWx1ZSBhbG9uZyBzdGVwcGVkIHZhbHVlc1xuICAgKlxuICAgKiBAcGFyYW0gbnVtXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0Q2xvc2VzdFN0ZXAobnVtKSB7XG4gICAgbnVtID0gTnVtYmVyKHRoaXMuY2xhbXAobnVtKS50b0ZpeGVkKGRlY2ltYWxQbGFjZXModGhpcy5zdGVwKSkpO1xuICAgIGlmICh0aGlzLnN0ZXApIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSBNYXRoLnJvdW5kKG51bSAvIHRoaXMuc3RlcCkgKiB0aGlzLnN0ZXA7XG4gICAgICBudW0gPSBOdW1iZXIodGhpcy5jbGFtcChzdGVwKS50b0ZpeGVkKGRlY2ltYWxQbGFjZXModGhpcy5zdGVwKSkpO1xuICAgIH1cbiAgICByZXR1cm4gbnVtO1xuICB9XG4gIGdldENsb3Nlc3RIYW5kbGUodmFsdWVYKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGlzdGFuY2VYKHRoaXMubWF4SGFuZGxlLCB2YWx1ZVgpID4gdGhpcy5nZXREaXN0YW5jZVgodGhpcy5taW5IYW5kbGUsIHZhbHVlWClcbiAgICAgID8gdGhpcy5taW5IYW5kbGVcbiAgICAgIDogdGhpcy5tYXhIYW5kbGU7XG4gIH1cbiAgZ2V0RGlzdGFuY2VYKGVsLCB2YWx1ZVgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtIHZhbHVlWCk7XG4gIH1cbiAgZ2V0Rm9udFNpemVGb3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gTnVtYmVyKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoXCJmb250LXNpemVcIikubWF0Y2goL1xcZCsvKVswXSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBwb3NpdGlvbiBvZiB2YWx1ZSBhbG9uZyByYW5nZSBhcyBmcmFjdGlvbmFsIHZhbHVlXG4gICAqXG4gICAqIEBwYXJhbSBudW1cbiAgICogQHJldHVybiB7bnVtYmVyfSBudW1iZXIgaW4gdGhlIHVuaXQgaW50ZXJ2YWwgWzAsMV1cbiAgICogQGludGVybmFsXG4gICAqL1xuICBnZXRVbml0SW50ZXJ2YWwobnVtKSB7XG4gICAgbnVtID0gdGhpcy5jbGFtcChudW0pO1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5tYXggLSB0aGlzLm1pbjtcbiAgICByZXR1cm4gKG51bSAtIHRoaXMubWluKSAvIHJhbmdlO1xuICB9XG4gIGFkanVzdEhvc3RPYnNjdXJlZEhhbmRsZUxhYmVsKG5hbWUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGAuaGFuZGxlX19sYWJlbC0tJHtuYW1lfWApO1xuICAgIGNvbnN0IGxhYmVsU3RhdGljID0gdGhpcy5lbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYC5oYW5kbGVfX2xhYmVsLS0ke25hbWV9LnN0YXRpY2ApO1xuICAgIGNvbnN0IGxhYmVsVHJhbnNmb3JtZWQgPSB0aGlzLmVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihgLmhhbmRsZV9fbGFiZWwtLSR7bmFtZX0udHJhbnNmb3JtZWRgKTtcbiAgICBjb25zdCBsYWJlbFN0YXRpY0JvdW5kcyA9IGxhYmVsU3RhdGljLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGxhYmVsU3RhdGljT2Zmc2V0ID0gdGhpcy5nZXRIb3N0T2Zmc2V0KGxhYmVsU3RhdGljQm91bmRzLmxlZnQsIGxhYmVsU3RhdGljQm91bmRzLnJpZ2h0KTtcbiAgICBsYWJlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2xhYmVsU3RhdGljT2Zmc2V0fXB4KWA7XG4gICAgbGFiZWxUcmFuc2Zvcm1lZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2xhYmVsU3RhdGljT2Zmc2V0fXB4KWA7XG4gIH1cbiAgaHlwaGVuYXRlQ29sbGlkaW5nUmFuZ2VIYW5kbGVMYWJlbHMoKSB7XG4gICAgY29uc3QgeyBzaGFkb3dSb290IH0gPSB0aGlzLmVsO1xuICAgIGNvbnN0IG1pcnJvciA9IHRoaXMuc2hvdWxkTWlycm9yKCk7XG4gICAgY29uc3QgbGVmdE1vZGlmaWVyID0gbWlycm9yID8gXCJ2YWx1ZVwiIDogXCJtaW5WYWx1ZVwiO1xuICAgIGNvbnN0IHJpZ2h0TW9kaWZpZXIgPSBtaXJyb3IgPyBcIm1pblZhbHVlXCIgOiBcInZhbHVlXCI7XG4gICAgY29uc3QgbGVmdFZhbHVlTGFiZWwgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYC5oYW5kbGVfX2xhYmVsLS0ke2xlZnRNb2RpZmllcn1gKTtcbiAgICBjb25zdCBsZWZ0VmFsdWVMYWJlbFN0YXRpYyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihgLmhhbmRsZV9fbGFiZWwtLSR7bGVmdE1vZGlmaWVyfS5zdGF0aWNgKTtcbiAgICBjb25zdCBsZWZ0VmFsdWVMYWJlbFRyYW5zZm9ybWVkID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGAuaGFuZGxlX19sYWJlbC0tJHtsZWZ0TW9kaWZpZXJ9LnRyYW5zZm9ybWVkYCk7XG4gICAgY29uc3QgbGVmdFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0ID0gdGhpcy5nZXRIb3N0T2Zmc2V0KGxlZnRWYWx1ZUxhYmVsU3RhdGljLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQsIGxlZnRWYWx1ZUxhYmVsU3RhdGljLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0KTtcbiAgICBjb25zdCByaWdodFZhbHVlTGFiZWwgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYC5oYW5kbGVfX2xhYmVsLS0ke3JpZ2h0TW9kaWZpZXJ9YCk7XG4gICAgY29uc3QgcmlnaHRWYWx1ZUxhYmVsU3RhdGljID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGAuaGFuZGxlX19sYWJlbC0tJHtyaWdodE1vZGlmaWVyfS5zdGF0aWNgKTtcbiAgICBjb25zdCByaWdodFZhbHVlTGFiZWxUcmFuc2Zvcm1lZCA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihgLmhhbmRsZV9fbGFiZWwtLSR7cmlnaHRNb2RpZmllcn0udHJhbnNmb3JtZWRgKTtcbiAgICBjb25zdCByaWdodFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0ID0gdGhpcy5nZXRIb3N0T2Zmc2V0KHJpZ2h0VmFsdWVMYWJlbFN0YXRpYy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LCByaWdodFZhbHVlTGFiZWxTdGF0aWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQpO1xuICAgIGNvbnN0IGxhYmVsRm9udFNpemUgPSB0aGlzLmdldEZvbnRTaXplRm9yRWxlbWVudChsZWZ0VmFsdWVMYWJlbCk7XG4gICAgY29uc3QgbGFiZWxUcmFuc2Zvcm1lZE92ZXJsYXAgPSB0aGlzLmdldFJhbmdlTGFiZWxPdmVybGFwKGxlZnRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQsIHJpZ2h0VmFsdWVMYWJlbFRyYW5zZm9ybWVkKTtcbiAgICBjb25zdCBoeXBoZW5MYWJlbCA9IGxlZnRWYWx1ZUxhYmVsO1xuICAgIGNvbnN0IGxhYmVsT2Zmc2V0ID0gbGFiZWxGb250U2l6ZSAvIDI7XG4gICAgaWYgKGxhYmVsVHJhbnNmb3JtZWRPdmVybGFwID4gMCkge1xuICAgICAgaHlwaGVuTGFiZWwuY2xhc3NMaXN0LmFkZChcImh5cGhlblwiLCBcImh5cGhlbi0td3JhcFwiKTtcbiAgICAgIGlmIChyaWdodFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0ID09PSAwICYmIGxlZnRWYWx1ZUxhYmVsU3RhdGljSG9zdE9mZnNldCA9PT0gMCkge1xuICAgICAgICAvLyBOZWl0aGVyIGhhbmRsZSBvdmVybGFwcyB0aGUgaG9zdCBib3VuZGFyeVxuICAgICAgICBsZXQgbGVmdFZhbHVlTGFiZWxUcmFuc2xhdGUgPSBsYWJlbFRyYW5zZm9ybWVkT3ZlcmxhcCAvIDIgLSBsYWJlbE9mZnNldDtcbiAgICAgICAgbGVmdFZhbHVlTGFiZWxUcmFuc2xhdGUgPVxuICAgICAgICAgIE1hdGguc2lnbihsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSkgPT09IC0xXG4gICAgICAgICAgICA/IE1hdGguYWJzKGxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlKVxuICAgICAgICAgICAgOiAtbGVmdFZhbHVlTGFiZWxUcmFuc2xhdGU7XG4gICAgICAgIGNvbnN0IGxlZnRWYWx1ZUxhYmVsVHJhbnNmb3JtZWRIb3N0T2Zmc2V0ID0gdGhpcy5nZXRIb3N0T2Zmc2V0KGxlZnRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArXG4gICAgICAgICAgbGVmdFZhbHVlTGFiZWxUcmFuc2xhdGUgLVxuICAgICAgICAgIGxhYmVsT2Zmc2V0LCBsZWZ0VmFsdWVMYWJlbFRyYW5zZm9ybWVkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0ICtcbiAgICAgICAgICBsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSAtXG4gICAgICAgICAgbGFiZWxPZmZzZXQpO1xuICAgICAgICBsZXQgcmlnaHRWYWx1ZUxhYmVsVHJhbnNsYXRlID0gbGFiZWxUcmFuc2Zvcm1lZE92ZXJsYXAgLyAyO1xuICAgICAgICBjb25zdCByaWdodFZhbHVlTGFiZWxUcmFuc2Zvcm1lZEhvc3RPZmZzZXQgPSB0aGlzLmdldEhvc3RPZmZzZXQocmlnaHRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIHJpZ2h0VmFsdWVMYWJlbFRyYW5zbGF0ZSwgcmlnaHRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQgKyByaWdodFZhbHVlTGFiZWxUcmFuc2xhdGUpO1xuICAgICAgICBpZiAobGVmdFZhbHVlTGFiZWxUcmFuc2Zvcm1lZEhvc3RPZmZzZXQgIT09IDApIHtcbiAgICAgICAgICBsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSArPSBsZWZ0VmFsdWVMYWJlbFRyYW5zZm9ybWVkSG9zdE9mZnNldDtcbiAgICAgICAgICByaWdodFZhbHVlTGFiZWxUcmFuc2xhdGUgKz0gbGVmdFZhbHVlTGFiZWxUcmFuc2Zvcm1lZEhvc3RPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0VmFsdWVMYWJlbFRyYW5zZm9ybWVkSG9zdE9mZnNldCAhPT0gMCkge1xuICAgICAgICAgIGxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlICs9IHJpZ2h0VmFsdWVMYWJlbFRyYW5zZm9ybWVkSG9zdE9mZnNldDtcbiAgICAgICAgICByaWdodFZhbHVlTGFiZWxUcmFuc2xhdGUgKz0gcmlnaHRWYWx1ZUxhYmVsVHJhbnNmb3JtZWRIb3N0T2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGxlZnRWYWx1ZUxhYmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGVmdFZhbHVlTGFiZWxUcmFuc2xhdGV9cHgpYDtcbiAgICAgICAgbGVmdFZhbHVlTGFiZWxUcmFuc2Zvcm1lZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2xlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlIC0gbGFiZWxPZmZzZXR9cHgpYDtcbiAgICAgICAgcmlnaHRWYWx1ZUxhYmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7cmlnaHRWYWx1ZUxhYmVsVHJhbnNsYXRlfXB4KWA7XG4gICAgICAgIHJpZ2h0VmFsdWVMYWJlbFRyYW5zZm9ybWVkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7cmlnaHRWYWx1ZUxhYmVsVHJhbnNsYXRlfXB4KWA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChsZWZ0VmFsdWVMYWJlbFN0YXRpY0hvc3RPZmZzZXQgPiAwIHx8IHJpZ2h0VmFsdWVMYWJlbFN0YXRpY0hvc3RPZmZzZXQgPiAwKSB7XG4gICAgICAgIC8vIGxhYmVscyBvdmVybGFwIGhvc3QgYm91bmRhcnkgb24gdGhlIGxlZnQgc2lkZVxuICAgICAgICBsZWZ0VmFsdWVMYWJlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2xlZnRWYWx1ZUxhYmVsU3RhdGljSG9zdE9mZnNldCArIGxhYmVsT2Zmc2V0fXB4KWA7XG4gICAgICAgIHJpZ2h0VmFsdWVMYWJlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2xhYmVsVHJhbnNmb3JtZWRPdmVybGFwICsgcmlnaHRWYWx1ZUxhYmVsU3RhdGljSG9zdE9mZnNldH1weClgO1xuICAgICAgICByaWdodFZhbHVlTGFiZWxUcmFuc2Zvcm1lZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2xhYmVsVHJhbnNmb3JtZWRPdmVybGFwICsgcmlnaHRWYWx1ZUxhYmVsU3RhdGljSG9zdE9mZnNldH1weClgO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAobGVmdFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0IDwgMCB8fCByaWdodFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0IDwgMCkge1xuICAgICAgICAvLyBsYWJlbHMgb3ZlcmxhcCBob3N0IGJvdW5kYXJ5IG9uIHRoZSByaWdodCBzaWRlXG4gICAgICAgIGxldCBsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSA9IE1hdGguYWJzKGxlZnRWYWx1ZUxhYmVsU3RhdGljSG9zdE9mZnNldCkgKyBsYWJlbFRyYW5zZm9ybWVkT3ZlcmxhcCAtIGxhYmVsT2Zmc2V0O1xuICAgICAgICBsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZSA9XG4gICAgICAgICAgTWF0aC5zaWduKGxlZnRWYWx1ZUxhYmVsVHJhbnNsYXRlKSA9PT0gLTFcbiAgICAgICAgICAgID8gTWF0aC5hYnMobGVmdFZhbHVlTGFiZWxUcmFuc2xhdGUpXG4gICAgICAgICAgICA6IC1sZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZTtcbiAgICAgICAgbGVmdFZhbHVlTGFiZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtsZWZ0VmFsdWVMYWJlbFRyYW5zbGF0ZX1weClgO1xuICAgICAgICBsZWZ0VmFsdWVMYWJlbFRyYW5zZm9ybWVkLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bGVmdFZhbHVlTGFiZWxUcmFuc2xhdGUgLSBsYWJlbE9mZnNldH1weClgO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGh5cGhlbkxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoeXBoZW5cIiwgXCJoeXBoZW4tLXdyYXBcIik7XG4gICAgICBsZWZ0VmFsdWVMYWJlbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2xlZnRWYWx1ZUxhYmVsU3RhdGljSG9zdE9mZnNldH1weClgO1xuICAgICAgbGVmdFZhbHVlTGFiZWxUcmFuc2Zvcm1lZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2xlZnRWYWx1ZUxhYmVsU3RhdGljSG9zdE9mZnNldH1weClgO1xuICAgICAgcmlnaHRWYWx1ZUxhYmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7cmlnaHRWYWx1ZUxhYmVsU3RhdGljSG9zdE9mZnNldH1weClgO1xuICAgICAgcmlnaHRWYWx1ZUxhYmVsVHJhbnNmb3JtZWQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtyaWdodFZhbHVlTGFiZWxTdGF0aWNIb3N0T2Zmc2V0fXB4KWA7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBIaWRlcyBib3VuZGluZyB0aWNrIGxhYmVscyB0aGF0IGFyZSBvYnNjdXJlZCBieSBlaXRoZXIgaGFuZGxlLlxuICAgKi9cbiAgaGlkZU9ic2N1cmVkQm91bmRpbmdUaWNrTGFiZWxzKCkge1xuICAgIGNvbnN0IHZhbHVlSXNSYW5nZSA9IGlzUmFuZ2UodGhpcy52YWx1ZSk7XG4gICAgaWYgKCF0aGlzLmhhc0hpc3RvZ3JhbSAmJiAhdmFsdWVJc1JhbmdlICYmICF0aGlzLmxhYmVsSGFuZGxlcyAmJiAhdGhpcy5wcmVjaXNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5oYXNIaXN0b2dyYW0gJiYgIXZhbHVlSXNSYW5nZSAmJiB0aGlzLmxhYmVsSGFuZGxlcyAmJiAhdGhpcy5wcmVjaXNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5oYXNIaXN0b2dyYW0gJiYgIXZhbHVlSXNSYW5nZSAmJiAhdGhpcy5sYWJlbEhhbmRsZXMgJiYgdGhpcy5wcmVjaXNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5oYXNIaXN0b2dyYW0gJiYgIXZhbHVlSXNSYW5nZSAmJiB0aGlzLmxhYmVsSGFuZGxlcyAmJiB0aGlzLnByZWNpc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmhhc0hpc3RvZ3JhbSAmJiB2YWx1ZUlzUmFuZ2UgJiYgIXRoaXMucHJlY2lzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5oYXNIaXN0b2dyYW0gJiYgIXRoaXMucHJlY2lzZSAmJiAhdGhpcy5sYWJlbEhhbmRsZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWluSGFuZGxlID0gdGhpcy5lbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIudGh1bWItLW1pblZhbHVlXCIpO1xuICAgIGNvbnN0IG1heEhhbmRsZSA9IHRoaXMuZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnRodW1iLS12YWx1ZVwiKTtcbiAgICBjb25zdCBtaW5UaWNrTGFiZWwgPSB0aGlzLmVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi50aWNrX19sYWJlbC0tbWluXCIpO1xuICAgIGNvbnN0IG1heFRpY2tMYWJlbCA9IHRoaXMuZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLnRpY2tfX2xhYmVsLS1tYXhcIik7XG4gICAgaWYgKCFtaW5IYW5kbGUgJiYgbWF4SGFuZGxlICYmIG1pblRpY2tMYWJlbCAmJiBtYXhUaWNrTGFiZWwpIHtcbiAgICAgIG1pblRpY2tMYWJlbC5zdHlsZS5vcGFjaXR5ID0gdGhpcy5pc01pblRpY2tMYWJlbE9ic2N1cmVkKG1pblRpY2tMYWJlbCwgbWF4SGFuZGxlKSA/IFwiMFwiIDogXCIxXCI7XG4gICAgICBtYXhUaWNrTGFiZWwuc3R5bGUub3BhY2l0eSA9IHRoaXMuaXNNYXhUaWNrTGFiZWxPYnNjdXJlZChtYXhUaWNrTGFiZWwsIG1heEhhbmRsZSkgPyBcIjBcIiA6IFwiMVwiO1xuICAgIH1cbiAgICBpZiAobWluSGFuZGxlICYmIG1heEhhbmRsZSAmJiBtaW5UaWNrTGFiZWwgJiYgbWF4VGlja0xhYmVsKSB7XG4gICAgICBtaW5UaWNrTGFiZWwuc3R5bGUub3BhY2l0eSA9XG4gICAgICAgIHRoaXMuaXNNaW5UaWNrTGFiZWxPYnNjdXJlZChtaW5UaWNrTGFiZWwsIG1pbkhhbmRsZSkgfHxcbiAgICAgICAgICB0aGlzLmlzTWluVGlja0xhYmVsT2JzY3VyZWQobWluVGlja0xhYmVsLCBtYXhIYW5kbGUpXG4gICAgICAgICAgPyBcIjBcIlxuICAgICAgICAgIDogXCIxXCI7XG4gICAgICBtYXhUaWNrTGFiZWwuc3R5bGUub3BhY2l0eSA9XG4gICAgICAgIHRoaXMuaXNNYXhUaWNrTGFiZWxPYnNjdXJlZChtYXhUaWNrTGFiZWwsIG1pbkhhbmRsZSkgfHxcbiAgICAgICAgICAodGhpcy5pc01heFRpY2tMYWJlbE9ic2N1cmVkKG1heFRpY2tMYWJlbCwgbWF4SGFuZGxlKSAmJiB0aGlzLmhhc0hpc3RvZ3JhbSlcbiAgICAgICAgICA/IFwiMFwiXG4gICAgICAgICAgOiBcIjFcIjtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW50ZWdlciByZXByZXNlbnRpbmcgdGhlIG51bWJlciBvZiBwaXhlbHMgdG8gb2Zmc2V0IG9uIHRoZSBsZWZ0IG9yIHJpZ2h0IHNpZGUgYmFzZWQgb24gZGVzaXJlZCBwb3NpdGlvbiBiZWhhdmlvci5cbiAgICpcbiAgICogQHBhcmFtIGxlZnRCb3VuZHNcbiAgICogQHBhcmFtIHJpZ2h0Qm91bmRzXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZ2V0SG9zdE9mZnNldChsZWZ0Qm91bmRzLCByaWdodEJvdW5kcykge1xuICAgIGNvbnN0IGhvc3RCb3VuZHMgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGJ1ZmZlciA9IDc7XG4gICAgaWYgKGxlZnRCb3VuZHMgKyBidWZmZXIgPCBob3N0Qm91bmRzLmxlZnQpIHtcbiAgICAgIHJldHVybiBob3N0Qm91bmRzLmxlZnQgLSBsZWZ0Qm91bmRzIC0gYnVmZmVyO1xuICAgIH1cbiAgICBpZiAocmlnaHRCb3VuZHMgLSBidWZmZXIgPiBob3N0Qm91bmRzLnJpZ2h0KSB7XG4gICAgICByZXR1cm4gLShyaWdodEJvdW5kcyAtIGhvc3RCb3VuZHMucmlnaHQpICsgYnVmZmVyO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbnRlZ2VyIHJlcHJlc2VudGluZyB0aGUgbnVtYmVyIG9mIHBpeGVscyB0aGF0IHRoZSB0d28gZ2l2ZW4gc3BhbiBlbGVtZW50cyBhcmUgb3ZlcmxhcHBpbmcsIHRha2luZyBpbnRvIGFjY291bnRcbiAgICogYSBzcGFjZSBpbiBiZXR3ZWVuIHRoZSB0d28gc3BhbnMgZXF1YWwgdG8gdGhlIGZvbnQtc2l6ZSBzZXQgb24gdGhlbSB0byBhY2NvdW50IGZvciB0aGUgc3BhY2UgbmVlZGVkIHRvIHJlbmRlciBhIGh5cGhlbi5cbiAgICpcbiAgICogQHBhcmFtIGxlZnRMYWJlbFxuICAgKiBAcGFyYW0gcmlnaHRMYWJlbFxuICAgKi9cbiAgZ2V0UmFuZ2VMYWJlbE92ZXJsYXAobGVmdExhYmVsLCByaWdodExhYmVsKSB7XG4gICAgY29uc3QgbGVmdExhYmVsQm91bmRzID0gbGVmdExhYmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHJpZ2h0TGFiZWxCb3VuZHMgPSByaWdodExhYmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGxlZnRMYWJlbEZvbnRTaXplID0gdGhpcy5nZXRGb250U2l6ZUZvckVsZW1lbnQobGVmdExhYmVsKTtcbiAgICBjb25zdCByYW5nZUxhYmVsT3ZlcmxhcCA9IGxlZnRMYWJlbEJvdW5kcy5yaWdodCArIGxlZnRMYWJlbEZvbnRTaXplIC0gcmlnaHRMYWJlbEJvdW5kcy5sZWZ0O1xuICAgIHJldHVybiBNYXRoLm1heChyYW5nZUxhYmVsT3ZlcmxhcCwgMCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBib29sZWFuIHZhbHVlIHJlcHJlc2VudGluZyBpZiB0aGUgbWluTGFiZWwgc3BhbiBlbGVtZW50IGlzIG9ic2N1cmVkIChiZWluZyBvdmVybGFwcGVkKSBieSB0aGUgZ2l2ZW4gaGFuZGxlIGRpdiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gbWluTGFiZWxcbiAgICogQHBhcmFtIGhhbmRsZVxuICAgKi9cbiAgaXNNaW5UaWNrTGFiZWxPYnNjdXJlZChtaW5MYWJlbCwgaGFuZGxlKSB7XG4gICAgY29uc3QgbWluTGFiZWxCb3VuZHMgPSBtaW5MYWJlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBoYW5kbGVCb3VuZHMgPSBoYW5kbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIGludGVyc2VjdHMobWluTGFiZWxCb3VuZHMsIGhhbmRsZUJvdW5kcyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBib29sZWFuIHZhbHVlIHJlcHJlc2VudGluZyBpZiB0aGUgbWF4TGFiZWwgc3BhbiBlbGVtZW50IGlzIG9ic2N1cmVkIChiZWluZyBvdmVybGFwcGVkKSBieSB0aGUgZ2l2ZW4gaGFuZGxlIGRpdiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gbWF4TGFiZWxcbiAgICogQHBhcmFtIGhhbmRsZVxuICAgKi9cbiAgaXNNYXhUaWNrTGFiZWxPYnNjdXJlZChtYXhMYWJlbCwgaGFuZGxlKSB7XG4gICAgY29uc3QgbWF4TGFiZWxCb3VuZHMgPSBtYXhMYWJlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBoYW5kbGVCb3VuZHMgPSBoYW5kbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIGludGVyc2VjdHMobWF4TGFiZWxCb3VuZHMsIGhhbmRsZUJvdW5kcyk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gZ2V0RWxlbWVudCh0aGlzKTsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiaGlzdG9ncmFtXCI6IFtcImhpc3RvZ3JhbVdhdGNoZXJcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbXCJ2YWx1ZUhhbmRsZXJcIl0sXG4gICAgXCJtaW5WYWx1ZVwiOiBbXCJtaW5NYXhWYWx1ZUhhbmRsZXJcIl0sXG4gICAgXCJtYXhWYWx1ZVwiOiBbXCJtaW5NYXhWYWx1ZUhhbmRsZXJcIl1cbiAgfTsgfVxufTtcblNsaWRlci5zdHlsZSA9IHNsaWRlckNzcztcblxuZXhwb3J0IHsgR3JhcGggYXMgY2FsY2l0ZV9ncmFwaCwgU2xpZGVyIGFzIGNhbGNpdGVfc2xpZGVyIH07XG4iLCIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKHZhbHVlLCBtYXgpKTtcbmNvbnN0IGRlY2ltYWxOdW1iZXJSZWdleCA9IG5ldyBSZWdFeHAoLyg/OlxcLihcXGQrKSk/KD86W2VFXShbKy1dP1xcZCspKT8kLyk7XG5jb25zdCBkZWNpbWFsUGxhY2VzID0gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IG1hdGNoID0gKFwiXCIgKyB2YWx1ZSkubWF0Y2goZGVjaW1hbE51bWJlclJlZ2V4KTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHJldHVybiBNYXRoLm1heCgwLCBcbiAgLy8gTnVtYmVyIG9mIGRpZ2l0cyByaWdodCBvZiBkZWNpbWFsIHBvaW50LlxuICAobWF0Y2hbMV0gPyBtYXRjaFsxXS5sZW5ndGggOiAwKSAtXG4gICAgLy8gQWRqdXN0IGZvciBzY2llbnRpZmljIG5vdGF0aW9uLlxuICAgIChtYXRjaFsyXSA/ICttYXRjaFsyXSA6IDApKTtcbn07XG5cbmV4cG9ydCB7IGNsYW1wIGFzIGMsIGRlY2ltYWxQbGFjZXMgYXMgZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9