"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_locale-a35648cd_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isActivationKey),
/* harmony export */   "n": () => (/* binding */ numberKeys)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
function isActivationKey(key) {
  return key === "Enter" || key === " ";
}
const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ BigDecimal),
/* harmony export */   "a": () => (/* binding */ defaultNumberingSystem),
/* harmony export */   "b": () => (/* binding */ getDateTimeFormat),
/* harmony export */   "c": () => (/* binding */ connectLocalized),
/* harmony export */   "d": () => (/* binding */ disconnectLocalized),
/* harmony export */   "e": () => (/* binding */ getSupportedNumberingSystem),
/* harmony export */   "g": () => (/* binding */ getSupportedLocale),
/* harmony export */   "i": () => (/* binding */ isValidNumber),
/* harmony export */   "n": () => (/* binding */ numberStringFormatter),
/* harmony export */   "p": () => (/* binding */ parseNumberString),
/* harmony export */   "s": () => (/* binding */ sanitizeNumberString)
/* harmony export */ });
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */




const unnecessaryDecimal = new RegExp(`\\${"."}(0+)?$`);
const trailingZeros = new RegExp("0+$");
// adopted from https://stackoverflow.com/a/66939244
class BigDecimal {
  constructor(input) {
    if (input instanceof BigDecimal) {
      return input;
    }
    const [integers, decimals] = expandExponentialNumberString(input).split(".").concat("");
    this.value =
      BigInt(integers + decimals.padEnd(BigDecimal.DECIMALS, "0").slice(0, BigDecimal.DECIMALS)) +
        BigInt(BigDecimal.ROUNDED && decimals[BigDecimal.DECIMALS] >= "5");
    this.isNegative = input.charAt(0) === "-";
  }
  getIntegersAndDecimals() {
    const s = this.value
      .toString()
      .replace("-", "")
      .padStart(BigDecimal.DECIMALS + 1, "0");
    const integers = s.slice(0, -BigDecimal.DECIMALS);
    const decimals = s.slice(-BigDecimal.DECIMALS).replace(trailingZeros, "");
    return { integers, decimals };
  }
  toString() {
    const { integers, decimals } = this.getIntegersAndDecimals();
    return `${this.isNegative ? "-" : ""}${integers}${decimals.length ? "." + decimals : ""}`;
  }
  formatToParts(formatter) {
    const { integers, decimals } = this.getIntegersAndDecimals();
    const parts = formatter.numberFormatter.formatToParts(BigInt(integers));
    this.isNegative && parts.unshift({ type: "minusSign", value: formatter.minusSign });
    if (decimals.length) {
      parts.push({ type: "decimal", value: formatter.decimal });
      decimals.split("").forEach((char) => parts.push({ type: "fraction", value: char }));
    }
    return parts;
  }
  format(formatter) {
    const { integers, decimals } = this.getIntegersAndDecimals();
    const integersFormatted = `${this.isNegative ? formatter.minusSign : ""}${formatter.numberFormatter.format(BigInt(integers))}`;
    const decimalsFormatted = decimals.length
      ? `${formatter.decimal}${decimals
        .split("")
        .map((char) => formatter.numberFormatter.format(Number(char)))
        .join("")}`
      : "";
    return `${integersFormatted}${decimalsFormatted}`;
  }
  add(n) {
    return BigDecimal.fromBigInt(this.value + new BigDecimal(n).value);
  }
  subtract(n) {
    return BigDecimal.fromBigInt(this.value - new BigDecimal(n).value);
  }
  multiply(n) {
    return BigDecimal._divRound(this.value * new BigDecimal(n).value, BigDecimal.SHIFT);
  }
  divide(n) {
    return BigDecimal._divRound(this.value * BigDecimal.SHIFT, new BigDecimal(n).value);
  }
}
// Configuration: constants
BigDecimal.DECIMALS = 100; // number of decimals on all instances
BigDecimal.ROUNDED = true; // numbers are truncated (false) or rounded (true)
BigDecimal.SHIFT = BigInt("1" + "0".repeat(BigDecimal.DECIMALS)); // derived constant
BigDecimal._divRound = (dividend, divisor) => BigDecimal.fromBigInt(dividend / divisor + (BigDecimal.ROUNDED ? ((dividend * BigInt(2)) / divisor) % BigInt(2) : BigInt(0)));
BigDecimal.fromBigInt = (bigint) => Object.assign(Object.create(BigDecimal.prototype), { value: bigint, isNegative: bigint < BigInt(0) });
function isValidNumber(numberString) {
  return !(!numberString || isNaN(Number(numberString)));
}
function parseNumberString(numberString) {
  if (!numberString || !stringContainsNumbers(numberString)) {
    return "";
  }
  return sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
    let containsDecimal = false;
    const result = nonExpoNumString
      .split("")
      .filter((value, i) => {
      if (value.match(/\./g) && !containsDecimal) {
        containsDecimal = true;
        return true;
      }
      if (value.match(/\-/g) && i === 0) {
        return true;
      }
      return _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_1__.n.includes(value);
    })
      .reduce((string, part) => string + part);
    return isValidNumber(result) ? new BigDecimal(result).toString() : "";
  });
}
// regex for number sanitization
const allLeadingZerosOptionallyNegative = /^([-0])0+(?=\d)/;
const decimalOnlyAtEndOfString = /(?!^\.)\.$/;
const allHyphensExceptTheStart = /(?!^-)-/g;
const isNegativeDecimalOnlyZeros = /^-\b0\b\.?0*$/;
const sanitizeNumberString = (numberString) => sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
  const sanitizedValue = nonExpoNumString
    .replace(allHyphensExceptTheStart, "")
    .replace(decimalOnlyAtEndOfString, "")
    .replace(allLeadingZerosOptionallyNegative, "$1");
  return isValidNumber(sanitizedValue)
    ? isNegativeDecimalOnlyZeros.test(sanitizedValue)
      ? sanitizedValue
      : new BigDecimal(sanitizedValue).toString()
    : nonExpoNumString;
});
function sanitizeExponentialNumberString(numberString, func) {
  if (!numberString) {
    return numberString;
  }
  const firstE = numberString.toLowerCase().indexOf("e") + 1;
  if (!firstE) {
    return func(numberString);
  }
  return numberString
    .replace(/[eE]*$/g, "")
    .substring(0, firstE)
    .concat(numberString.slice(firstE).replace(/[eE]/g, ""))
    .split(/[eE]/)
    .map((section, i) => (i === 1 ? func(section.replace(/\./g, "")) : func(section)))
    .join("e")
    .replace(/^e/, "1e");
}
/**
 * Converts an exponential notation numberString into decimal notation.
 * BigInt doesn't support exponential notation, so this is required to maintain precision
 *
 * @param {string} numberString - pre-validated exponential or decimal number
 * @returns {string} numberString in decimal notation
 */
function expandExponentialNumberString(numberString) {
  const exponentialParts = numberString.split(/[eE]/);
  if (exponentialParts.length === 1) {
    return numberString;
  }
  const number = +numberString;
  if (Number.isSafeInteger(number)) {
    return `${number}`;
  }
  const isNegative = numberString.charAt(0) === "-";
  const magnitude = +exponentialParts[1];
  const decimalParts = exponentialParts[0].split(".");
  const integers = (isNegative ? decimalParts[0].substring(1) : decimalParts[0]) || "";
  const decimals = decimalParts[1] || "";
  const shiftDecimalLeft = (integers, magnitude) => {
    const magnitudeDelta = Math.abs(magnitude) - integers.length;
    const leftPaddedZeros = magnitudeDelta > 0 ? `${"0".repeat(magnitudeDelta)}${integers}` : integers;
    const shiftedDecimal = `${leftPaddedZeros.slice(0, magnitude)}${"."}${leftPaddedZeros.slice(magnitude)}`;
    return shiftedDecimal;
  };
  const shiftDecimalRight = (decimals, magnitude) => {
    const rightPaddedZeros = magnitude > decimals.length ? `${decimals}${"0".repeat(magnitude - decimals.length)}` : decimals;
    const shiftedDecimal = `${rightPaddedZeros.slice(0, magnitude)}${"."}${rightPaddedZeros.slice(magnitude)}`;
    return shiftedDecimal;
  };
  const expandedNumberString = magnitude > 0
    ? `${integers}${shiftDecimalRight(decimals, magnitude)}`
    : `${shiftDecimalLeft(integers, magnitude)}${decimals}`;
  return `${isNegative ? "-" : ""}${expandedNumberString.charAt(0) === "." ? "0" : ""}${expandedNumberString
    .replace(unnecessaryDecimal, "")
    .replace(allLeadingZerosOptionallyNegative, "")}`;
}
function stringContainsNumbers(string) {
  return _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_1__.n.some((number) => string.includes(number));
}

const defaultLocale = "en";
const t9nLocales = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "el",
  defaultLocale,
  "es",
  "et",
  "fi",
  "fr",
  "he",
  "hr",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "lt",
  "lv",
  "no",
  "nl",
  "pl",
  "pt-BR",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
];
const locales = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "de-AT",
  "de-CH",
  "el",
  defaultLocale,
  "en-AU",
  "en-CA",
  "en-GB",
  "es",
  "es-MX",
  "et",
  "fi",
  "fr",
  "fr-CH",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "it-CH",
  "ja",
  "ko",
  "lt",
  "lv",
  "mk",
  "no",
  "nl",
  "pl",
  "pt",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
];
const numberingSystems = [
  "arab",
  "arabext",
  "bali",
  "beng",
  "deva",
  "fullwide",
  "gujr",
  "guru",
  "hanidec",
  "khmr",
  "knda",
  "laoo",
  "latn",
  "limb",
  "mlym",
  "mong",
  "mymr",
  "orya",
  "tamldec",
  "telu",
  "thai",
  "tibt"
];
const isNumberingSystemSupported = (numberingSystem) => numberingSystems.includes(numberingSystem);
const browserNumberingSystem = new Intl.NumberFormat().resolvedOptions().numberingSystem;
const defaultNumberingSystem = browserNumberingSystem === "arab" || !isNumberingSystemSupported(browserNumberingSystem)
  ? "latn"
  : browserNumberingSystem;
const getSupportedNumberingSystem = (numberingSystem) => isNumberingSystemSupported(numberingSystem) ? numberingSystem : defaultNumberingSystem;
/**
 * Gets the locale that best matches the context.
 *
 * @param locale – the BCP 47 locale code
 * @param context - specifies whether the locale code should match in the context of CLDR or T9N (translation)
 */
function getSupportedLocale(locale, context = "cldr") {
  const contextualLocales = context === "cldr" ? locales : t9nLocales;
  if (!locale) {
    return defaultLocale;
  }
  if (contextualLocales.includes(locale)) {
    return locale;
  }
  locale = locale.toLowerCase();
  // we support both 'nb' and 'no' (BCP 47) for Norwegian but only `no` has corresponding bundle
  if (locale === "nb") {
    return "no";
  }
  // we use `pt-BR` as it will have the same translations as `pt`, which has no corresponding bundle
  if (context === "t9n" && locale === "pt") {
    return "pt-BR";
  }
  if (locale.includes("-")) {
    locale = locale.replace(/(\w+)-(\w+)/, (_match, language, region) => `${language}-${region.toUpperCase()}`);
    if (!contextualLocales.includes(locale)) {
      locale = locale.split("-")[0];
    }
  }
  // we can `zh-CN` as base translation for chinese locales which has no corresponding bundle.
  if (locale === "zh") {
    return "zh-CN";
  }
  if (!contextualLocales.includes(locale)) {
    console.warn(`Translations for the "${locale}" locale are not available and will fall back to the default, English (en).`);
    return defaultLocale;
  }
  return locale;
}
const connectedComponents = new Set();
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback` before any logic that depends on locale
 *
 * @param component
 */
function connectLocalized(component) {
  updateEffectiveLocale(component);
  if (connectedComponents.size === 0) {
    mutationObserver?.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
      subtree: true
    });
  }
  connectedComponents.add(component);
}
/**
 * This is only exported for components that implemented the now deprecated `locale` prop.
 *
 * Do not use this utils for new components.
 *
 * @param component
 */
function updateEffectiveLocale(component) {
  component.effectiveLocale = getLocale(component);
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectLocalized(component) {
  connectedComponents.delete(component);
  if (connectedComponents.size === 0) {
    mutationObserver.disconnect();
  }
}
const mutationObserver = (0,_observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_2__.c)("mutation", (records) => {
  records.forEach((record) => {
    const el = record.target;
    connectedComponents.forEach((component) => {
      const inUnrelatedSubtree = !(0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.a)(el, component.el);
      if (inUnrelatedSubtree) {
        return;
      }
      const closestLangEl = (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.c)(component.el, "[lang]");
      if (!closestLangEl) {
        component.effectiveLocale = defaultLocale;
        return;
      }
      const closestLang = closestLangEl.lang;
      component.effectiveLocale =
        // user set lang="" means unknown language, so we use default
        closestLangEl.hasAttribute("lang") && closestLang === "" ? defaultLocale : closestLang;
    });
  });
});
/**
 * This util helps resolve a component's locale.
 * It will also fall back on the deprecated `locale` if a component implemented this previously.
 *
 * @param component
 */
function getLocale(component) {
  return (component.el.lang ||
    (0,_dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_0__.c)(component.el, "[lang]")?.lang ||
    document.documentElement.lang ||
    defaultLocale);
}
/**
 * This util formats and parses numbers for localization
 */
class NumberStringFormat {
  constructor() {
    this.delocalize = (numberString) => 
    // For performance, (de)localization is skipped if the formatter isn't initialized.
    // In order to localize/delocalize, e.g. when lang/numberingSystem props are not default values,
    // `numberFormatOptions` must be set in a component to create and cache the formatter.
    this._numberFormatOptions
      ? sanitizeExponentialNumberString(numberString, (nonExpoNumString) => nonExpoNumString
        .replace(new RegExp(`[${this._minusSign}]`, "g"), "-")
        .replace(new RegExp(`[${this._group}]`, "g"), "")
        .replace(new RegExp(`[${this._decimal}]`, "g"), ".")
        .replace(new RegExp(`[${this._digits.join("")}]`, "g"), this._getDigitIndex))
      : numberString;
    this.localize = (numberString) => this._numberFormatOptions
      ? sanitizeExponentialNumberString(numberString, (nonExpoNumString) => isValidNumber(nonExpoNumString.trim())
        ? new BigDecimal(nonExpoNumString.trim())
          .format(this)
          .replace(new RegExp(`[${this._actualGroup}]`, "g"), this._group)
        : nonExpoNumString)
      : numberString;
  }
  get group() {
    return this._group;
  }
  get decimal() {
    return this._decimal;
  }
  get minusSign() {
    return this._minusSign;
  }
  get digits() {
    return this._digits;
  }
  get numberFormatter() {
    return this._numberFormatter;
  }
  get numberFormatOptions() {
    return this._numberFormatOptions;
  }
  /**
   * numberFormatOptions needs to be set before localize/delocalize is called to ensure the options are up to date
   */
  set numberFormatOptions(options) {
    options.locale = getSupportedLocale(options?.locale);
    options.numberingSystem = getSupportedNumberingSystem(options?.numberingSystem);
    if (
    // No need to create the formatter if `locale` and `numberingSystem`
    // are the default values and `numberFormatOptions` has not been set
    (!this._numberFormatOptions &&
      options.locale === defaultLocale &&
      options.numberingSystem === defaultNumberingSystem &&
      // don't skip initialization if any options besides locale/numberingSystem are set
      Object.keys(options).length === 2) ||
      // cache formatter by only recreating when options change
      JSON.stringify(this._numberFormatOptions) === JSON.stringify(options)) {
      return;
    }
    this._numberFormatOptions = options;
    this._numberFormatter = new Intl.NumberFormat(this._numberFormatOptions.locale, this._numberFormatOptions);
    this._digits = [
      ...new Intl.NumberFormat(this._numberFormatOptions.locale, {
        useGrouping: false,
        numberingSystem: this._numberFormatOptions.numberingSystem
      }).format(9876543210)
    ].reverse();
    const index = new Map(this._digits.map((d, i) => [d, i]));
    // numberingSystem is parsed to return consistent decimal separator across browsers.
    const parts = new Intl.NumberFormat(this._numberFormatOptions.locale, {
      numberingSystem: this._numberFormatOptions.numberingSystem
    }).formatToParts(-12345678.9);
    this._actualGroup = parts.find((d) => d.type === "group").value;
    // change whitespace group characters that don't render correctly
    this._group = this._actualGroup.trim().length === 0 ? " " : this._actualGroup;
    this._decimal = parts.find((d) => d.type === "decimal").value;
    this._minusSign = parts.find((d) => d.type === "minusSign").value;
    this._getDigitIndex = (d) => index.get(d);
  }
}
const numberStringFormatter = new NumberStringFormat();
/**
 * Exported for testing purposes only.
 *
 * @internal
 */
let dateTimeFormatCache;
/**
 * Used to ensure all cached formats are for the same locale.
 *
 * @internal
 */
let previousLocaleUsedForCaching;
/**
 * Generates a cache key for date time format lookups.
 *
 * @internal
 */
function buildDateTimeFormatCacheKey(options = {}) {
  return Object.entries(options)
    .sort(([key1], [key2]) => key1.localeCompare(key2))
    .map((keyValue) => `${keyValue[0]}-${keyValue[1]}`)
    .flat()
    .join(":");
}
/**
 * Returns an instance of Intl.DateTimeFormat and reuses it if requested with the same locale and options.
 *
 * **Note**: the cache will be cleared if a different locale is provided
 *
 * @internal
 */
function getDateTimeFormat(locale, options) {
  locale = getSupportedLocale(locale);
  if (!dateTimeFormatCache) {
    dateTimeFormatCache = new Map();
  }
  if (previousLocaleUsedForCaching !== locale) {
    dateTimeFormatCache.clear();
    previousLocaleUsedForCaching = locale;
  }
  const key = buildDateTimeFormatCacheKey(options);
  const cached = dateTimeFormatCache.get(key);
  if (cached) {
    return cached;
  }
  const format = new Intl.DateTimeFormat(locale, options);
  dateTimeFormatCache.set(key, format);
  return format;
}




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createObserver)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */
/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
  const Observer = getObserver(type);
  return new Observer(callback, options);
}
function getObserver(type) {
  // based on https://github.com/whatwg/dom/issues/126#issuecomment-1049814948
  class ExtendedMutationObserver extends window.MutationObserver {
    constructor(callback) {
      super(callback);
      this.observedEntry = [];
      this.callback = callback;
    }
    observe(target, options) {
      this.observedEntry.push({ target, options });
      return super.observe(target, options);
    }
    unobserve(target) {
      const newObservedEntries = this.observedEntry.filter((observed) => observed.target !== target);
      this.observedEntry = [];
      this.callback(super.takeRecords(), this);
      this.disconnect();
      newObservedEntries.forEach((observed) => this.observe(observed.target, observed.options));
    }
  }
  return (function () {
    return (type === "intersection"
      ? window.IntersectionObserver
      : type === "mutation"
        ? ExtendedMutationObserver
        : window.ResizeObserver);
  })();
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNGNiMTgwNjYxNjYxMjdiODUyZDFlMzYxYTYyNzJhOGEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkc7QUFDekQ7QUFDVTs7QUFFOUQsMkNBQTJDLElBQUk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSxxQkFBcUI7QUFDakMsY0FBYywyQkFBMkIsRUFBRSxTQUFTLEVBQUUsc0NBQXNDO0FBQzVGO0FBQ0E7QUFDQSxZQUFZLHFCQUFxQjtBQUNqQztBQUNBLHVDQUF1QywrQ0FBK0M7QUFDdEY7QUFDQSxtQkFBbUIsMkNBQTJDO0FBQzlELHdEQUF3RCwrQkFBK0I7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFCQUFxQjtBQUNqQyxpQ0FBaUMsMkNBQTJDLEVBQUUsbURBQW1EO0FBQ2pJO0FBQ0EsV0FBVyxrQkFBa0IsRUFBRTtBQUMvQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EsY0FBYyxrQkFBa0IsRUFBRSxrQkFBa0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQixrRUFBa0U7QUFDbEU7QUFDQSx5RkFBeUYsK0NBQStDO0FBQ3hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3REFBbUI7QUFDaEMsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsMkJBQTJCLEVBQUUsU0FBUztBQUMxRiw4QkFBOEIsb0NBQW9DLEVBQUUsSUFBSSxFQUFFLGlDQUFpQztBQUMzRztBQUNBO0FBQ0E7QUFDQSw4REFBOEQsU0FBUyxFQUFFLHdDQUF3QztBQUNqSCw4QkFBOEIscUNBQXFDLEVBQUUsSUFBSSxFQUFFLGtDQUFrQztBQUM3RztBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsRUFBRSx1Q0FBdUM7QUFDM0QsU0FBUyxzQ0FBc0MsRUFBRSxTQUFTO0FBQzFELFlBQVksc0JBQXNCLEVBQUUsa0RBQWtELEVBQUU7QUFDeEY7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBLFNBQVMsb0RBQWU7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RSxTQUFTLEdBQUcscUJBQXFCO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxPQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIseURBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1EQUEyQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbURBQWlDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBaUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQsZ0NBQWdDLFlBQVk7QUFDNUMsZ0NBQWdDLGNBQWM7QUFDOUMsZ0NBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSwwQkFBMEIsWUFBWSxHQUFHLFlBQVk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRStSOzs7Ozs7Ozs7Ozs7Ozs7QUNuaUIvUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20va2V5LThmZjBkMTAxLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2xvY2FsZS1hMzU2NDhjZC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2VzbS9vYnNlcnZlcnMtOTVlOTdmYWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmZ1bmN0aW9uIGlzQWN0aXZhdGlvbktleShrZXkpIHtcbiAgcmV0dXJuIGtleSA9PT0gXCJFbnRlclwiIHx8IGtleSA9PT0gXCIgXCI7XG59XG5jb25zdCBudW1iZXJLZXlzID0gW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiXTtcblxuZXhwb3J0IHsgaXNBY3RpdmF0aW9uS2V5IGFzIGksIG51bWJlcktleXMgYXMgbiB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmltcG9ydCB7IGMgYXMgY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5LCBhIGFzIGNvbnRhaW5zQ3Jvc3NTaGFkb3dCb3VuZGFyeSB9IGZyb20gJy4vZG9tLTFmYjk0ZmY2LmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyS2V5cyB9IGZyb20gJy4va2V5LThmZjBkMTAxLmpzJztcbmltcG9ydCB7IGMgYXMgY3JlYXRlT2JzZXJ2ZXIgfSBmcm9tICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5cbmNvbnN0IHVubmVjZXNzYXJ5RGVjaW1hbCA9IG5ldyBSZWdFeHAoYFxcXFwke1wiLlwifSgwKyk/JGApO1xuY29uc3QgdHJhaWxpbmdaZXJvcyA9IG5ldyBSZWdFeHAoXCIwKyRcIik7XG4vLyBhZG9wdGVkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzY2OTM5MjQ0XG5jbGFzcyBCaWdEZWNpbWFsIHtcbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBCaWdEZWNpbWFsKSB7XG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIGNvbnN0IFtpbnRlZ2VycywgZGVjaW1hbHNdID0gZXhwYW5kRXhwb25lbnRpYWxOdW1iZXJTdHJpbmcoaW5wdXQpLnNwbGl0KFwiLlwiKS5jb25jYXQoXCJcIik7XG4gICAgdGhpcy52YWx1ZSA9XG4gICAgICBCaWdJbnQoaW50ZWdlcnMgKyBkZWNpbWFscy5wYWRFbmQoQmlnRGVjaW1hbC5ERUNJTUFMUywgXCIwXCIpLnNsaWNlKDAsIEJpZ0RlY2ltYWwuREVDSU1BTFMpKSArXG4gICAgICAgIEJpZ0ludChCaWdEZWNpbWFsLlJPVU5ERUQgJiYgZGVjaW1hbHNbQmlnRGVjaW1hbC5ERUNJTUFMU10gPj0gXCI1XCIpO1xuICAgIHRoaXMuaXNOZWdhdGl2ZSA9IGlucHV0LmNoYXJBdCgwKSA9PT0gXCItXCI7XG4gIH1cbiAgZ2V0SW50ZWdlcnNBbmREZWNpbWFscygpIHtcbiAgICBjb25zdCBzID0gdGhpcy52YWx1ZVxuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC5yZXBsYWNlKFwiLVwiLCBcIlwiKVxuICAgICAgLnBhZFN0YXJ0KEJpZ0RlY2ltYWwuREVDSU1BTFMgKyAxLCBcIjBcIik7XG4gICAgY29uc3QgaW50ZWdlcnMgPSBzLnNsaWNlKDAsIC1CaWdEZWNpbWFsLkRFQ0lNQUxTKTtcbiAgICBjb25zdCBkZWNpbWFscyA9IHMuc2xpY2UoLUJpZ0RlY2ltYWwuREVDSU1BTFMpLnJlcGxhY2UodHJhaWxpbmdaZXJvcywgXCJcIik7XG4gICAgcmV0dXJuIHsgaW50ZWdlcnMsIGRlY2ltYWxzIH07XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgeyBpbnRlZ2VycywgZGVjaW1hbHMgfSA9IHRoaXMuZ2V0SW50ZWdlcnNBbmREZWNpbWFscygpO1xuICAgIHJldHVybiBgJHt0aGlzLmlzTmVnYXRpdmUgPyBcIi1cIiA6IFwiXCJ9JHtpbnRlZ2Vyc30ke2RlY2ltYWxzLmxlbmd0aCA/IFwiLlwiICsgZGVjaW1hbHMgOiBcIlwifWA7XG4gIH1cbiAgZm9ybWF0VG9QYXJ0cyhmb3JtYXR0ZXIpIHtcbiAgICBjb25zdCB7IGludGVnZXJzLCBkZWNpbWFscyB9ID0gdGhpcy5nZXRJbnRlZ2Vyc0FuZERlY2ltYWxzKCk7XG4gICAgY29uc3QgcGFydHMgPSBmb3JtYXR0ZXIubnVtYmVyRm9ybWF0dGVyLmZvcm1hdFRvUGFydHMoQmlnSW50KGludGVnZXJzKSk7XG4gICAgdGhpcy5pc05lZ2F0aXZlICYmIHBhcnRzLnVuc2hpZnQoeyB0eXBlOiBcIm1pbnVzU2lnblwiLCB2YWx1ZTogZm9ybWF0dGVyLm1pbnVzU2lnbiB9KTtcbiAgICBpZiAoZGVjaW1hbHMubGVuZ3RoKSB7XG4gICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogXCJkZWNpbWFsXCIsIHZhbHVlOiBmb3JtYXR0ZXIuZGVjaW1hbCB9KTtcbiAgICAgIGRlY2ltYWxzLnNwbGl0KFwiXCIpLmZvckVhY2goKGNoYXIpID0+IHBhcnRzLnB1c2goeyB0eXBlOiBcImZyYWN0aW9uXCIsIHZhbHVlOiBjaGFyIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzO1xuICB9XG4gIGZvcm1hdChmb3JtYXR0ZXIpIHtcbiAgICBjb25zdCB7IGludGVnZXJzLCBkZWNpbWFscyB9ID0gdGhpcy5nZXRJbnRlZ2Vyc0FuZERlY2ltYWxzKCk7XG4gICAgY29uc3QgaW50ZWdlcnNGb3JtYXR0ZWQgPSBgJHt0aGlzLmlzTmVnYXRpdmUgPyBmb3JtYXR0ZXIubWludXNTaWduIDogXCJcIn0ke2Zvcm1hdHRlci5udW1iZXJGb3JtYXR0ZXIuZm9ybWF0KEJpZ0ludChpbnRlZ2VycykpfWA7XG4gICAgY29uc3QgZGVjaW1hbHNGb3JtYXR0ZWQgPSBkZWNpbWFscy5sZW5ndGhcbiAgICAgID8gYCR7Zm9ybWF0dGVyLmRlY2ltYWx9JHtkZWNpbWFsc1xuICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgLm1hcCgoY2hhcikgPT4gZm9ybWF0dGVyLm51bWJlckZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKGNoYXIpKSlcbiAgICAgICAgLmpvaW4oXCJcIil9YFxuICAgICAgOiBcIlwiO1xuICAgIHJldHVybiBgJHtpbnRlZ2Vyc0Zvcm1hdHRlZH0ke2RlY2ltYWxzRm9ybWF0dGVkfWA7XG4gIH1cbiAgYWRkKG4pIHtcbiAgICByZXR1cm4gQmlnRGVjaW1hbC5mcm9tQmlnSW50KHRoaXMudmFsdWUgKyBuZXcgQmlnRGVjaW1hbChuKS52YWx1ZSk7XG4gIH1cbiAgc3VidHJhY3Qobikge1xuICAgIHJldHVybiBCaWdEZWNpbWFsLmZyb21CaWdJbnQodGhpcy52YWx1ZSAtIG5ldyBCaWdEZWNpbWFsKG4pLnZhbHVlKTtcbiAgfVxuICBtdWx0aXBseShuKSB7XG4gICAgcmV0dXJuIEJpZ0RlY2ltYWwuX2RpdlJvdW5kKHRoaXMudmFsdWUgKiBuZXcgQmlnRGVjaW1hbChuKS52YWx1ZSwgQmlnRGVjaW1hbC5TSElGVCk7XG4gIH1cbiAgZGl2aWRlKG4pIHtcbiAgICByZXR1cm4gQmlnRGVjaW1hbC5fZGl2Um91bmQodGhpcy52YWx1ZSAqIEJpZ0RlY2ltYWwuU0hJRlQsIG5ldyBCaWdEZWNpbWFsKG4pLnZhbHVlKTtcbiAgfVxufVxuLy8gQ29uZmlndXJhdGlvbjogY29uc3RhbnRzXG5CaWdEZWNpbWFsLkRFQ0lNQUxTID0gMTAwOyAvLyBudW1iZXIgb2YgZGVjaW1hbHMgb24gYWxsIGluc3RhbmNlc1xuQmlnRGVjaW1hbC5ST1VOREVEID0gdHJ1ZTsgLy8gbnVtYmVycyBhcmUgdHJ1bmNhdGVkIChmYWxzZSkgb3Igcm91bmRlZCAodHJ1ZSlcbkJpZ0RlY2ltYWwuU0hJRlQgPSBCaWdJbnQoXCIxXCIgKyBcIjBcIi5yZXBlYXQoQmlnRGVjaW1hbC5ERUNJTUFMUykpOyAvLyBkZXJpdmVkIGNvbnN0YW50XG5CaWdEZWNpbWFsLl9kaXZSb3VuZCA9IChkaXZpZGVuZCwgZGl2aXNvcikgPT4gQmlnRGVjaW1hbC5mcm9tQmlnSW50KGRpdmlkZW5kIC8gZGl2aXNvciArIChCaWdEZWNpbWFsLlJPVU5ERUQgPyAoKGRpdmlkZW5kICogQmlnSW50KDIpKSAvIGRpdmlzb3IpICUgQmlnSW50KDIpIDogQmlnSW50KDApKSk7XG5CaWdEZWNpbWFsLmZyb21CaWdJbnQgPSAoYmlnaW50KSA9PiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUoQmlnRGVjaW1hbC5wcm90b3R5cGUpLCB7IHZhbHVlOiBiaWdpbnQsIGlzTmVnYXRpdmU6IGJpZ2ludCA8IEJpZ0ludCgwKSB9KTtcbmZ1bmN0aW9uIGlzVmFsaWROdW1iZXIobnVtYmVyU3RyaW5nKSB7XG4gIHJldHVybiAhKCFudW1iZXJTdHJpbmcgfHwgaXNOYU4oTnVtYmVyKG51bWJlclN0cmluZykpKTtcbn1cbmZ1bmN0aW9uIHBhcnNlTnVtYmVyU3RyaW5nKG51bWJlclN0cmluZykge1xuICBpZiAoIW51bWJlclN0cmluZyB8fCAhc3RyaW5nQ29udGFpbnNOdW1iZXJzKG51bWJlclN0cmluZykpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICByZXR1cm4gc2FuaXRpemVFeHBvbmVudGlhbE51bWJlclN0cmluZyhudW1iZXJTdHJpbmcsIChub25FeHBvTnVtU3RyaW5nKSA9PiB7XG4gICAgbGV0IGNvbnRhaW5zRGVjaW1hbCA9IGZhbHNlO1xuICAgIGNvbnN0IHJlc3VsdCA9IG5vbkV4cG9OdW1TdHJpbmdcbiAgICAgIC5zcGxpdChcIlwiKVxuICAgICAgLmZpbHRlcigodmFsdWUsIGkpID0+IHtcbiAgICAgIGlmICh2YWx1ZS5tYXRjaCgvXFwuL2cpICYmICFjb250YWluc0RlY2ltYWwpIHtcbiAgICAgICAgY29udGFpbnNEZWNpbWFsID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUubWF0Y2goL1xcLS9nKSAmJiBpID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bWJlcktleXMuaW5jbHVkZXModmFsdWUpO1xuICAgIH0pXG4gICAgICAucmVkdWNlKChzdHJpbmcsIHBhcnQpID0+IHN0cmluZyArIHBhcnQpO1xuICAgIHJldHVybiBpc1ZhbGlkTnVtYmVyKHJlc3VsdCkgPyBuZXcgQmlnRGVjaW1hbChyZXN1bHQpLnRvU3RyaW5nKCkgOiBcIlwiO1xuICB9KTtcbn1cbi8vIHJlZ2V4IGZvciBudW1iZXIgc2FuaXRpemF0aW9uXG5jb25zdCBhbGxMZWFkaW5nWmVyb3NPcHRpb25hbGx5TmVnYXRpdmUgPSAvXihbLTBdKTArKD89XFxkKS87XG5jb25zdCBkZWNpbWFsT25seUF0RW5kT2ZTdHJpbmcgPSAvKD8hXlxcLilcXC4kLztcbmNvbnN0IGFsbEh5cGhlbnNFeGNlcHRUaGVTdGFydCA9IC8oPyFeLSktL2c7XG5jb25zdCBpc05lZ2F0aXZlRGVjaW1hbE9ubHlaZXJvcyA9IC9eLVxcYjBcXGJcXC4/MCokLztcbmNvbnN0IHNhbml0aXplTnVtYmVyU3RyaW5nID0gKG51bWJlclN0cmluZykgPT4gc2FuaXRpemVFeHBvbmVudGlhbE51bWJlclN0cmluZyhudW1iZXJTdHJpbmcsIChub25FeHBvTnVtU3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNhbml0aXplZFZhbHVlID0gbm9uRXhwb051bVN0cmluZ1xuICAgIC5yZXBsYWNlKGFsbEh5cGhlbnNFeGNlcHRUaGVTdGFydCwgXCJcIilcbiAgICAucmVwbGFjZShkZWNpbWFsT25seUF0RW5kT2ZTdHJpbmcsIFwiXCIpXG4gICAgLnJlcGxhY2UoYWxsTGVhZGluZ1plcm9zT3B0aW9uYWxseU5lZ2F0aXZlLCBcIiQxXCIpO1xuICByZXR1cm4gaXNWYWxpZE51bWJlcihzYW5pdGl6ZWRWYWx1ZSlcbiAgICA/IGlzTmVnYXRpdmVEZWNpbWFsT25seVplcm9zLnRlc3Qoc2FuaXRpemVkVmFsdWUpXG4gICAgICA/IHNhbml0aXplZFZhbHVlXG4gICAgICA6IG5ldyBCaWdEZWNpbWFsKHNhbml0aXplZFZhbHVlKS50b1N0cmluZygpXG4gICAgOiBub25FeHBvTnVtU3RyaW5nO1xufSk7XG5mdW5jdGlvbiBzYW5pdGl6ZUV4cG9uZW50aWFsTnVtYmVyU3RyaW5nKG51bWJlclN0cmluZywgZnVuYykge1xuICBpZiAoIW51bWJlclN0cmluZykge1xuICAgIHJldHVybiBudW1iZXJTdHJpbmc7XG4gIH1cbiAgY29uc3QgZmlyc3RFID0gbnVtYmVyU3RyaW5nLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImVcIikgKyAxO1xuICBpZiAoIWZpcnN0RSkge1xuICAgIHJldHVybiBmdW5jKG51bWJlclN0cmluZyk7XG4gIH1cbiAgcmV0dXJuIG51bWJlclN0cmluZ1xuICAgIC5yZXBsYWNlKC9bZUVdKiQvZywgXCJcIilcbiAgICAuc3Vic3RyaW5nKDAsIGZpcnN0RSlcbiAgICAuY29uY2F0KG51bWJlclN0cmluZy5zbGljZShmaXJzdEUpLnJlcGxhY2UoL1tlRV0vZywgXCJcIikpXG4gICAgLnNwbGl0KC9bZUVdLylcbiAgICAubWFwKChzZWN0aW9uLCBpKSA9PiAoaSA9PT0gMSA/IGZ1bmMoc2VjdGlvbi5yZXBsYWNlKC9cXC4vZywgXCJcIikpIDogZnVuYyhzZWN0aW9uKSkpXG4gICAgLmpvaW4oXCJlXCIpXG4gICAgLnJlcGxhY2UoL15lLywgXCIxZVwiKTtcbn1cbi8qKlxuICogQ29udmVydHMgYW4gZXhwb25lbnRpYWwgbm90YXRpb24gbnVtYmVyU3RyaW5nIGludG8gZGVjaW1hbCBub3RhdGlvbi5cbiAqIEJpZ0ludCBkb2Vzbid0IHN1cHBvcnQgZXhwb25lbnRpYWwgbm90YXRpb24sIHNvIHRoaXMgaXMgcmVxdWlyZWQgdG8gbWFpbnRhaW4gcHJlY2lzaW9uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG51bWJlclN0cmluZyAtIHByZS12YWxpZGF0ZWQgZXhwb25lbnRpYWwgb3IgZGVjaW1hbCBudW1iZXJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IG51bWJlclN0cmluZyBpbiBkZWNpbWFsIG5vdGF0aW9uXG4gKi9cbmZ1bmN0aW9uIGV4cGFuZEV4cG9uZW50aWFsTnVtYmVyU3RyaW5nKG51bWJlclN0cmluZykge1xuICBjb25zdCBleHBvbmVudGlhbFBhcnRzID0gbnVtYmVyU3RyaW5nLnNwbGl0KC9bZUVdLyk7XG4gIGlmIChleHBvbmVudGlhbFBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBudW1iZXJTdHJpbmc7XG4gIH1cbiAgY29uc3QgbnVtYmVyID0gK251bWJlclN0cmluZztcbiAgaWYgKE51bWJlci5pc1NhZmVJbnRlZ2VyKG51bWJlcikpIHtcbiAgICByZXR1cm4gYCR7bnVtYmVyfWA7XG4gIH1cbiAgY29uc3QgaXNOZWdhdGl2ZSA9IG51bWJlclN0cmluZy5jaGFyQXQoMCkgPT09IFwiLVwiO1xuICBjb25zdCBtYWduaXR1ZGUgPSArZXhwb25lbnRpYWxQYXJ0c1sxXTtcbiAgY29uc3QgZGVjaW1hbFBhcnRzID0gZXhwb25lbnRpYWxQYXJ0c1swXS5zcGxpdChcIi5cIik7XG4gIGNvbnN0IGludGVnZXJzID0gKGlzTmVnYXRpdmUgPyBkZWNpbWFsUGFydHNbMF0uc3Vic3RyaW5nKDEpIDogZGVjaW1hbFBhcnRzWzBdKSB8fCBcIlwiO1xuICBjb25zdCBkZWNpbWFscyA9IGRlY2ltYWxQYXJ0c1sxXSB8fCBcIlwiO1xuICBjb25zdCBzaGlmdERlY2ltYWxMZWZ0ID0gKGludGVnZXJzLCBtYWduaXR1ZGUpID0+IHtcbiAgICBjb25zdCBtYWduaXR1ZGVEZWx0YSA9IE1hdGguYWJzKG1hZ25pdHVkZSkgLSBpbnRlZ2Vycy5sZW5ndGg7XG4gICAgY29uc3QgbGVmdFBhZGRlZFplcm9zID0gbWFnbml0dWRlRGVsdGEgPiAwID8gYCR7XCIwXCIucmVwZWF0KG1hZ25pdHVkZURlbHRhKX0ke2ludGVnZXJzfWAgOiBpbnRlZ2VycztcbiAgICBjb25zdCBzaGlmdGVkRGVjaW1hbCA9IGAke2xlZnRQYWRkZWRaZXJvcy5zbGljZSgwLCBtYWduaXR1ZGUpfSR7XCIuXCJ9JHtsZWZ0UGFkZGVkWmVyb3Muc2xpY2UobWFnbml0dWRlKX1gO1xuICAgIHJldHVybiBzaGlmdGVkRGVjaW1hbDtcbiAgfTtcbiAgY29uc3Qgc2hpZnREZWNpbWFsUmlnaHQgPSAoZGVjaW1hbHMsIG1hZ25pdHVkZSkgPT4ge1xuICAgIGNvbnN0IHJpZ2h0UGFkZGVkWmVyb3MgPSBtYWduaXR1ZGUgPiBkZWNpbWFscy5sZW5ndGggPyBgJHtkZWNpbWFsc30ke1wiMFwiLnJlcGVhdChtYWduaXR1ZGUgLSBkZWNpbWFscy5sZW5ndGgpfWAgOiBkZWNpbWFscztcbiAgICBjb25zdCBzaGlmdGVkRGVjaW1hbCA9IGAke3JpZ2h0UGFkZGVkWmVyb3Muc2xpY2UoMCwgbWFnbml0dWRlKX0ke1wiLlwifSR7cmlnaHRQYWRkZWRaZXJvcy5zbGljZShtYWduaXR1ZGUpfWA7XG4gICAgcmV0dXJuIHNoaWZ0ZWREZWNpbWFsO1xuICB9O1xuICBjb25zdCBleHBhbmRlZE51bWJlclN0cmluZyA9IG1hZ25pdHVkZSA+IDBcbiAgICA/IGAke2ludGVnZXJzfSR7c2hpZnREZWNpbWFsUmlnaHQoZGVjaW1hbHMsIG1hZ25pdHVkZSl9YFxuICAgIDogYCR7c2hpZnREZWNpbWFsTGVmdChpbnRlZ2VycywgbWFnbml0dWRlKX0ke2RlY2ltYWxzfWA7XG4gIHJldHVybiBgJHtpc05lZ2F0aXZlID8gXCItXCIgOiBcIlwifSR7ZXhwYW5kZWROdW1iZXJTdHJpbmcuY2hhckF0KDApID09PSBcIi5cIiA/IFwiMFwiIDogXCJcIn0ke2V4cGFuZGVkTnVtYmVyU3RyaW5nXG4gICAgLnJlcGxhY2UodW5uZWNlc3NhcnlEZWNpbWFsLCBcIlwiKVxuICAgIC5yZXBsYWNlKGFsbExlYWRpbmdaZXJvc09wdGlvbmFsbHlOZWdhdGl2ZSwgXCJcIil9YDtcbn1cbmZ1bmN0aW9uIHN0cmluZ0NvbnRhaW5zTnVtYmVycyhzdHJpbmcpIHtcbiAgcmV0dXJuIG51bWJlcktleXMuc29tZSgobnVtYmVyKSA9PiBzdHJpbmcuaW5jbHVkZXMobnVtYmVyKSk7XG59XG5cbmNvbnN0IGRlZmF1bHRMb2NhbGUgPSBcImVuXCI7XG5jb25zdCB0OW5Mb2NhbGVzID0gW1xuICBcImFyXCIsXG4gIFwiYmdcIixcbiAgXCJic1wiLFxuICBcImNhXCIsXG4gIFwiY3NcIixcbiAgXCJkYVwiLFxuICBcImRlXCIsXG4gIFwiZWxcIixcbiAgZGVmYXVsdExvY2FsZSxcbiAgXCJlc1wiLFxuICBcImV0XCIsXG4gIFwiZmlcIixcbiAgXCJmclwiLFxuICBcImhlXCIsXG4gIFwiaHJcIixcbiAgXCJodVwiLFxuICBcImlkXCIsXG4gIFwiaXRcIixcbiAgXCJqYVwiLFxuICBcImtvXCIsXG4gIFwibHRcIixcbiAgXCJsdlwiLFxuICBcIm5vXCIsXG4gIFwibmxcIixcbiAgXCJwbFwiLFxuICBcInB0LUJSXCIsXG4gIFwicHQtUFRcIixcbiAgXCJyb1wiLFxuICBcInJ1XCIsXG4gIFwic2tcIixcbiAgXCJzbFwiLFxuICBcInNyXCIsXG4gIFwic3ZcIixcbiAgXCJ0aFwiLFxuICBcInRyXCIsXG4gIFwidWtcIixcbiAgXCJ2aVwiLFxuICBcInpoLUNOXCIsXG4gIFwiemgtSEtcIixcbiAgXCJ6aC1UV1wiXG5dO1xuY29uc3QgbG9jYWxlcyA9IFtcbiAgXCJhclwiLFxuICBcImJnXCIsXG4gIFwiYnNcIixcbiAgXCJjYVwiLFxuICBcImNzXCIsXG4gIFwiZGFcIixcbiAgXCJkZVwiLFxuICBcImRlLUFUXCIsXG4gIFwiZGUtQ0hcIixcbiAgXCJlbFwiLFxuICBkZWZhdWx0TG9jYWxlLFxuICBcImVuLUFVXCIsXG4gIFwiZW4tQ0FcIixcbiAgXCJlbi1HQlwiLFxuICBcImVzXCIsXG4gIFwiZXMtTVhcIixcbiAgXCJldFwiLFxuICBcImZpXCIsXG4gIFwiZnJcIixcbiAgXCJmci1DSFwiLFxuICBcImhlXCIsXG4gIFwiaGlcIixcbiAgXCJoclwiLFxuICBcImh1XCIsXG4gIFwiaWRcIixcbiAgXCJpdFwiLFxuICBcIml0LUNIXCIsXG4gIFwiamFcIixcbiAgXCJrb1wiLFxuICBcImx0XCIsXG4gIFwibHZcIixcbiAgXCJta1wiLFxuICBcIm5vXCIsXG4gIFwibmxcIixcbiAgXCJwbFwiLFxuICBcInB0XCIsXG4gIFwicHQtUFRcIixcbiAgXCJyb1wiLFxuICBcInJ1XCIsXG4gIFwic2tcIixcbiAgXCJzbFwiLFxuICBcInNyXCIsXG4gIFwic3ZcIixcbiAgXCJ0aFwiLFxuICBcInRyXCIsXG4gIFwidWtcIixcbiAgXCJ2aVwiLFxuICBcInpoLUNOXCIsXG4gIFwiemgtSEtcIixcbiAgXCJ6aC1UV1wiXG5dO1xuY29uc3QgbnVtYmVyaW5nU3lzdGVtcyA9IFtcbiAgXCJhcmFiXCIsXG4gIFwiYXJhYmV4dFwiLFxuICBcImJhbGlcIixcbiAgXCJiZW5nXCIsXG4gIFwiZGV2YVwiLFxuICBcImZ1bGx3aWRlXCIsXG4gIFwiZ3VqclwiLFxuICBcImd1cnVcIixcbiAgXCJoYW5pZGVjXCIsXG4gIFwia2htclwiLFxuICBcImtuZGFcIixcbiAgXCJsYW9vXCIsXG4gIFwibGF0blwiLFxuICBcImxpbWJcIixcbiAgXCJtbHltXCIsXG4gIFwibW9uZ1wiLFxuICBcIm15bXJcIixcbiAgXCJvcnlhXCIsXG4gIFwidGFtbGRlY1wiLFxuICBcInRlbHVcIixcbiAgXCJ0aGFpXCIsXG4gIFwidGlidFwiXG5dO1xuY29uc3QgaXNOdW1iZXJpbmdTeXN0ZW1TdXBwb3J0ZWQgPSAobnVtYmVyaW5nU3lzdGVtKSA9PiBudW1iZXJpbmdTeXN0ZW1zLmluY2x1ZGVzKG51bWJlcmluZ1N5c3RlbSk7XG5jb25zdCBicm93c2VyTnVtYmVyaW5nU3lzdGVtID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkubnVtYmVyaW5nU3lzdGVtO1xuY29uc3QgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSA9IGJyb3dzZXJOdW1iZXJpbmdTeXN0ZW0gPT09IFwiYXJhYlwiIHx8ICFpc051bWJlcmluZ1N5c3RlbVN1cHBvcnRlZChicm93c2VyTnVtYmVyaW5nU3lzdGVtKVxuICA/IFwibGF0blwiXG4gIDogYnJvd3Nlck51bWJlcmluZ1N5c3RlbTtcbmNvbnN0IGdldFN1cHBvcnRlZE51bWJlcmluZ1N5c3RlbSA9IChudW1iZXJpbmdTeXN0ZW0pID0+IGlzTnVtYmVyaW5nU3lzdGVtU3VwcG9ydGVkKG51bWJlcmluZ1N5c3RlbSkgPyBudW1iZXJpbmdTeXN0ZW0gOiBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtO1xuLyoqXG4gKiBHZXRzIHRoZSBsb2NhbGUgdGhhdCBiZXN0IG1hdGNoZXMgdGhlIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIGxvY2FsZSDigJMgdGhlIEJDUCA0NyBsb2NhbGUgY29kZVxuICogQHBhcmFtIGNvbnRleHQgLSBzcGVjaWZpZXMgd2hldGhlciB0aGUgbG9jYWxlIGNvZGUgc2hvdWxkIG1hdGNoIGluIHRoZSBjb250ZXh0IG9mIENMRFIgb3IgVDlOICh0cmFuc2xhdGlvbilcbiAqL1xuZnVuY3Rpb24gZ2V0U3VwcG9ydGVkTG9jYWxlKGxvY2FsZSwgY29udGV4dCA9IFwiY2xkclwiKSB7XG4gIGNvbnN0IGNvbnRleHR1YWxMb2NhbGVzID0gY29udGV4dCA9PT0gXCJjbGRyXCIgPyBsb2NhbGVzIDogdDluTG9jYWxlcztcbiAgaWYgKCFsb2NhbGUpIHtcbiAgICByZXR1cm4gZGVmYXVsdExvY2FsZTtcbiAgfVxuICBpZiAoY29udGV4dHVhbExvY2FsZXMuaW5jbHVkZXMobG9jYWxlKSkge1xuICAgIHJldHVybiBsb2NhbGU7XG4gIH1cbiAgbG9jYWxlID0gbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gIC8vIHdlIHN1cHBvcnQgYm90aCAnbmInIGFuZCAnbm8nIChCQ1AgNDcpIGZvciBOb3J3ZWdpYW4gYnV0IG9ubHkgYG5vYCBoYXMgY29ycmVzcG9uZGluZyBidW5kbGVcbiAgaWYgKGxvY2FsZSA9PT0gXCJuYlwiKSB7XG4gICAgcmV0dXJuIFwibm9cIjtcbiAgfVxuICAvLyB3ZSB1c2UgYHB0LUJSYCBhcyBpdCB3aWxsIGhhdmUgdGhlIHNhbWUgdHJhbnNsYXRpb25zIGFzIGBwdGAsIHdoaWNoIGhhcyBubyBjb3JyZXNwb25kaW5nIGJ1bmRsZVxuICBpZiAoY29udGV4dCA9PT0gXCJ0OW5cIiAmJiBsb2NhbGUgPT09IFwicHRcIikge1xuICAgIHJldHVybiBcInB0LUJSXCI7XG4gIH1cbiAgaWYgKGxvY2FsZS5pbmNsdWRlcyhcIi1cIikpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUucmVwbGFjZSgvKFxcdyspLShcXHcrKS8sIChfbWF0Y2gsIGxhbmd1YWdlLCByZWdpb24pID0+IGAke2xhbmd1YWdlfS0ke3JlZ2lvbi50b1VwcGVyQ2FzZSgpfWApO1xuICAgIGlmICghY29udGV4dHVhbExvY2FsZXMuaW5jbHVkZXMobG9jYWxlKSkge1xuICAgICAgbG9jYWxlID0gbG9jYWxlLnNwbGl0KFwiLVwiKVswXTtcbiAgICB9XG4gIH1cbiAgLy8gd2UgY2FuIGB6aC1DTmAgYXMgYmFzZSB0cmFuc2xhdGlvbiBmb3IgY2hpbmVzZSBsb2NhbGVzIHdoaWNoIGhhcyBubyBjb3JyZXNwb25kaW5nIGJ1bmRsZS5cbiAgaWYgKGxvY2FsZSA9PT0gXCJ6aFwiKSB7XG4gICAgcmV0dXJuIFwiemgtQ05cIjtcbiAgfVxuICBpZiAoIWNvbnRleHR1YWxMb2NhbGVzLmluY2x1ZGVzKGxvY2FsZSkpIHtcbiAgICBjb25zb2xlLndhcm4oYFRyYW5zbGF0aW9ucyBmb3IgdGhlIFwiJHtsb2NhbGV9XCIgbG9jYWxlIGFyZSBub3QgYXZhaWxhYmxlIGFuZCB3aWxsIGZhbGwgYmFjayB0byB0aGUgZGVmYXVsdCwgRW5nbGlzaCAoZW4pLmApO1xuICAgIHJldHVybiBkZWZhdWx0TG9jYWxlO1xuICB9XG4gIHJldHVybiBsb2NhbGU7XG59XG5jb25zdCBjb25uZWN0ZWRDb21wb25lbnRzID0gbmV3IFNldCgpO1xuLyoqXG4gKiBUaGlzIHV0aWxpdHkgc2V0cyB1cCBpbnRlcm5hbHMgZm9yIG1lc3NhZ2VzIHN1cHBvcnQuXG4gKlxuICogSXQgbmVlZHMgdG8gYmUgY2FsbGVkIGluIGBjb25uZWN0ZWRDYWxsYmFja2AgYmVmb3JlIGFueSBsb2dpYyB0aGF0IGRlcGVuZHMgb24gbG9jYWxlXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBjb25uZWN0TG9jYWxpemVkKGNvbXBvbmVudCkge1xuICB1cGRhdGVFZmZlY3RpdmVMb2NhbGUoY29tcG9uZW50KTtcbiAgaWYgKGNvbm5lY3RlZENvbXBvbmVudHMuc2l6ZSA9PT0gMCkge1xuICAgIG11dGF0aW9uT2JzZXJ2ZXI/Lm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXCJsYW5nXCJdLFxuICAgICAgc3VidHJlZTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGNvbm5lY3RlZENvbXBvbmVudHMuYWRkKGNvbXBvbmVudCk7XG59XG4vKipcbiAqIFRoaXMgaXMgb25seSBleHBvcnRlZCBmb3IgY29tcG9uZW50cyB0aGF0IGltcGxlbWVudGVkIHRoZSBub3cgZGVwcmVjYXRlZCBgbG9jYWxlYCBwcm9wLlxuICpcbiAqIERvIG5vdCB1c2UgdGhpcyB1dGlscyBmb3IgbmV3IGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiB1cGRhdGVFZmZlY3RpdmVMb2NhbGUoY29tcG9uZW50KSB7XG4gIGNvbXBvbmVudC5lZmZlY3RpdmVMb2NhbGUgPSBnZXRMb2NhbGUoY29tcG9uZW50KTtcbn1cbi8qKlxuICogVGhpcyB1dGlsaXR5IHRlYXJzIGRvd24gaW50ZXJuYWxzIGZvciBtZXNzYWdlcyBzdXBwb3J0LlxuICpcbiAqIEl0IG5lZWRzIHRvIGJlIGNhbGxlZCBpbiBgZGlzY29ubmVjdGVkQ2FsbGJhY2tgXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBkaXNjb25uZWN0TG9jYWxpemVkKGNvbXBvbmVudCkge1xuICBjb25uZWN0ZWRDb21wb25lbnRzLmRlbGV0ZShjb21wb25lbnQpO1xuICBpZiAoY29ubmVjdGVkQ29tcG9uZW50cy5zaXplID09PSAwKSB7XG4gICAgbXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH1cbn1cbmNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBjcmVhdGVPYnNlcnZlcihcIm11dGF0aW9uXCIsIChyZWNvcmRzKSA9PiB7XG4gIHJlY29yZHMuZm9yRWFjaCgocmVjb3JkKSA9PiB7XG4gICAgY29uc3QgZWwgPSByZWNvcmQudGFyZ2V0O1xuICAgIGNvbm5lY3RlZENvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICBjb25zdCBpblVucmVsYXRlZFN1YnRyZWUgPSAhY29udGFpbnNDcm9zc1NoYWRvd0JvdW5kYXJ5KGVsLCBjb21wb25lbnQuZWwpO1xuICAgICAgaWYgKGluVW5yZWxhdGVkU3VidHJlZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjbG9zZXN0TGFuZ0VsID0gY2xvc2VzdEVsZW1lbnRDcm9zc1NoYWRvd0JvdW5kYXJ5KGNvbXBvbmVudC5lbCwgXCJbbGFuZ11cIik7XG4gICAgICBpZiAoIWNsb3Nlc3RMYW5nRWwpIHtcbiAgICAgICAgY29tcG9uZW50LmVmZmVjdGl2ZUxvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNsb3Nlc3RMYW5nID0gY2xvc2VzdExhbmdFbC5sYW5nO1xuICAgICAgY29tcG9uZW50LmVmZmVjdGl2ZUxvY2FsZSA9XG4gICAgICAgIC8vIHVzZXIgc2V0IGxhbmc9XCJcIiBtZWFucyB1bmtub3duIGxhbmd1YWdlLCBzbyB3ZSB1c2UgZGVmYXVsdFxuICAgICAgICBjbG9zZXN0TGFuZ0VsLmhhc0F0dHJpYnV0ZShcImxhbmdcIikgJiYgY2xvc2VzdExhbmcgPT09IFwiXCIgPyBkZWZhdWx0TG9jYWxlIDogY2xvc2VzdExhbmc7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4vKipcbiAqIFRoaXMgdXRpbCBoZWxwcyByZXNvbHZlIGEgY29tcG9uZW50J3MgbG9jYWxlLlxuICogSXQgd2lsbCBhbHNvIGZhbGwgYmFjayBvbiB0aGUgZGVwcmVjYXRlZCBgbG9jYWxlYCBpZiBhIGNvbXBvbmVudCBpbXBsZW1lbnRlZCB0aGlzIHByZXZpb3VzbHkuXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudFxuICovXG5mdW5jdGlvbiBnZXRMb2NhbGUoY29tcG9uZW50KSB7XG4gIHJldHVybiAoY29tcG9uZW50LmVsLmxhbmcgfHxcbiAgICBjbG9zZXN0RWxlbWVudENyb3NzU2hhZG93Qm91bmRhcnkoY29tcG9uZW50LmVsLCBcIltsYW5nXVwiKT8ubGFuZyB8fFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nIHx8XG4gICAgZGVmYXVsdExvY2FsZSk7XG59XG4vKipcbiAqIFRoaXMgdXRpbCBmb3JtYXRzIGFuZCBwYXJzZXMgbnVtYmVycyBmb3IgbG9jYWxpemF0aW9uXG4gKi9cbmNsYXNzIE51bWJlclN0cmluZ0Zvcm1hdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVsb2NhbGl6ZSA9IChudW1iZXJTdHJpbmcpID0+IFxuICAgIC8vIEZvciBwZXJmb3JtYW5jZSwgKGRlKWxvY2FsaXphdGlvbiBpcyBza2lwcGVkIGlmIHRoZSBmb3JtYXR0ZXIgaXNuJ3QgaW5pdGlhbGl6ZWQuXG4gICAgLy8gSW4gb3JkZXIgdG8gbG9jYWxpemUvZGVsb2NhbGl6ZSwgZS5nLiB3aGVuIGxhbmcvbnVtYmVyaW5nU3lzdGVtIHByb3BzIGFyZSBub3QgZGVmYXVsdCB2YWx1ZXMsXG4gICAgLy8gYG51bWJlckZvcm1hdE9wdGlvbnNgIG11c3QgYmUgc2V0IGluIGEgY29tcG9uZW50IHRvIGNyZWF0ZSBhbmQgY2FjaGUgdGhlIGZvcm1hdHRlci5cbiAgICB0aGlzLl9udW1iZXJGb3JtYXRPcHRpb25zXG4gICAgICA/IHNhbml0aXplRXhwb25lbnRpYWxOdW1iZXJTdHJpbmcobnVtYmVyU3RyaW5nLCAobm9uRXhwb051bVN0cmluZykgPT4gbm9uRXhwb051bVN0cmluZ1xuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGBbJHt0aGlzLl9taW51c1NpZ259XWAsIFwiZ1wiKSwgXCItXCIpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYFske3RoaXMuX2dyb3VwfV1gLCBcImdcIiksIFwiXCIpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYFske3RoaXMuX2RlY2ltYWx9XWAsIFwiZ1wiKSwgXCIuXCIpXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYFske3RoaXMuX2RpZ2l0cy5qb2luKFwiXCIpfV1gLCBcImdcIiksIHRoaXMuX2dldERpZ2l0SW5kZXgpKVxuICAgICAgOiBudW1iZXJTdHJpbmc7XG4gICAgdGhpcy5sb2NhbGl6ZSA9IChudW1iZXJTdHJpbmcpID0+IHRoaXMuX251bWJlckZvcm1hdE9wdGlvbnNcbiAgICAgID8gc2FuaXRpemVFeHBvbmVudGlhbE51bWJlclN0cmluZyhudW1iZXJTdHJpbmcsIChub25FeHBvTnVtU3RyaW5nKSA9PiBpc1ZhbGlkTnVtYmVyKG5vbkV4cG9OdW1TdHJpbmcudHJpbSgpKVxuICAgICAgICA/IG5ldyBCaWdEZWNpbWFsKG5vbkV4cG9OdW1TdHJpbmcudHJpbSgpKVxuICAgICAgICAgIC5mb3JtYXQodGhpcylcbiAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGBbJHt0aGlzLl9hY3R1YWxHcm91cH1dYCwgXCJnXCIpLCB0aGlzLl9ncm91cClcbiAgICAgICAgOiBub25FeHBvTnVtU3RyaW5nKVxuICAgICAgOiBudW1iZXJTdHJpbmc7XG4gIH1cbiAgZ2V0IGdyb3VwKCkge1xuICAgIHJldHVybiB0aGlzLl9ncm91cDtcbiAgfVxuICBnZXQgZGVjaW1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVjaW1hbDtcbiAgfVxuICBnZXQgbWludXNTaWduKCkge1xuICAgIHJldHVybiB0aGlzLl9taW51c1NpZ247XG4gIH1cbiAgZ2V0IGRpZ2l0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlnaXRzO1xuICB9XG4gIGdldCBudW1iZXJGb3JtYXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX251bWJlckZvcm1hdHRlcjtcbiAgfVxuICBnZXQgbnVtYmVyRm9ybWF0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyRm9ybWF0T3B0aW9ucztcbiAgfVxuICAvKipcbiAgICogbnVtYmVyRm9ybWF0T3B0aW9ucyBuZWVkcyB0byBiZSBzZXQgYmVmb3JlIGxvY2FsaXplL2RlbG9jYWxpemUgaXMgY2FsbGVkIHRvIGVuc3VyZSB0aGUgb3B0aW9ucyBhcmUgdXAgdG8gZGF0ZVxuICAgKi9cbiAgc2V0IG51bWJlckZvcm1hdE9wdGlvbnMob3B0aW9ucykge1xuICAgIG9wdGlvbnMubG9jYWxlID0gZ2V0U3VwcG9ydGVkTG9jYWxlKG9wdGlvbnM/LmxvY2FsZSk7XG4gICAgb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gPSBnZXRTdXBwb3J0ZWROdW1iZXJpbmdTeXN0ZW0ob3B0aW9ucz8ubnVtYmVyaW5nU3lzdGVtKTtcbiAgICBpZiAoXG4gICAgLy8gTm8gbmVlZCB0byBjcmVhdGUgdGhlIGZvcm1hdHRlciBpZiBgbG9jYWxlYCBhbmQgYG51bWJlcmluZ1N5c3RlbWBcbiAgICAvLyBhcmUgdGhlIGRlZmF1bHQgdmFsdWVzIGFuZCBgbnVtYmVyRm9ybWF0T3B0aW9uc2AgaGFzIG5vdCBiZWVuIHNldFxuICAgICghdGhpcy5fbnVtYmVyRm9ybWF0T3B0aW9ucyAmJlxuICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgIG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtID09PSBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtICYmXG4gICAgICAvLyBkb24ndCBza2lwIGluaXRpYWxpemF0aW9uIGlmIGFueSBvcHRpb25zIGJlc2lkZXMgbG9jYWxlL251bWJlcmluZ1N5c3RlbSBhcmUgc2V0XG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5sZW5ndGggPT09IDIpIHx8XG4gICAgICAvLyBjYWNoZSBmb3JtYXR0ZXIgYnkgb25seSByZWNyZWF0aW5nIHdoZW4gb3B0aW9ucyBjaGFuZ2VcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuX251bWJlckZvcm1hdE9wdGlvbnMpID09PSBKU09OLnN0cmluZ2lmeShvcHRpb25zKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9udW1iZXJGb3JtYXRPcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLl9udW1iZXJGb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5fbnVtYmVyRm9ybWF0T3B0aW9ucy5sb2NhbGUsIHRoaXMuX251bWJlckZvcm1hdE9wdGlvbnMpO1xuICAgIHRoaXMuX2RpZ2l0cyA9IFtcbiAgICAgIC4uLm5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLl9udW1iZXJGb3JtYXRPcHRpb25zLmxvY2FsZSwge1xuICAgICAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5fbnVtYmVyRm9ybWF0T3B0aW9ucy5udW1iZXJpbmdTeXN0ZW1cbiAgICAgIH0pLmZvcm1hdCg5ODc2NTQzMjEwKVxuICAgIF0ucmV2ZXJzZSgpO1xuICAgIGNvbnN0IGluZGV4ID0gbmV3IE1hcCh0aGlzLl9kaWdpdHMubWFwKChkLCBpKSA9PiBbZCwgaV0pKTtcbiAgICAvLyBudW1iZXJpbmdTeXN0ZW0gaXMgcGFyc2VkIHRvIHJldHVybiBjb25zaXN0ZW50IGRlY2ltYWwgc2VwYXJhdG9yIGFjcm9zcyBicm93c2Vycy5cbiAgICBjb25zdCBwYXJ0cyA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLl9udW1iZXJGb3JtYXRPcHRpb25zLmxvY2FsZSwge1xuICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLl9udW1iZXJGb3JtYXRPcHRpb25zLm51bWJlcmluZ1N5c3RlbVxuICAgIH0pLmZvcm1hdFRvUGFydHMoLTEyMzQ1Njc4LjkpO1xuICAgIHRoaXMuX2FjdHVhbEdyb3VwID0gcGFydHMuZmluZCgoZCkgPT4gZC50eXBlID09PSBcImdyb3VwXCIpLnZhbHVlO1xuICAgIC8vIGNoYW5nZSB3aGl0ZXNwYWNlIGdyb3VwIGNoYXJhY3RlcnMgdGhhdCBkb24ndCByZW5kZXIgY29ycmVjdGx5XG4gICAgdGhpcy5fZ3JvdXAgPSB0aGlzLl9hY3R1YWxHcm91cC50cmltKCkubGVuZ3RoID09PSAwID8gXCIgXCIgOiB0aGlzLl9hY3R1YWxHcm91cDtcbiAgICB0aGlzLl9kZWNpbWFsID0gcGFydHMuZmluZCgoZCkgPT4gZC50eXBlID09PSBcImRlY2ltYWxcIikudmFsdWU7XG4gICAgdGhpcy5fbWludXNTaWduID0gcGFydHMuZmluZCgoZCkgPT4gZC50eXBlID09PSBcIm1pbnVzU2lnblwiKS52YWx1ZTtcbiAgICB0aGlzLl9nZXREaWdpdEluZGV4ID0gKGQpID0+IGluZGV4LmdldChkKTtcbiAgfVxufVxuY29uc3QgbnVtYmVyU3RyaW5nRm9ybWF0dGVyID0gbmV3IE51bWJlclN0cmluZ0Zvcm1hdCgpO1xuLyoqXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5LlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5sZXQgZGF0ZVRpbWVGb3JtYXRDYWNoZTtcbi8qKlxuICogVXNlZCB0byBlbnN1cmUgYWxsIGNhY2hlZCBmb3JtYXRzIGFyZSBmb3IgdGhlIHNhbWUgbG9jYWxlLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5sZXQgcHJldmlvdXNMb2NhbGVVc2VkRm9yQ2FjaGluZztcbi8qKlxuICogR2VuZXJhdGVzIGEgY2FjaGUga2V5IGZvciBkYXRlIHRpbWUgZm9ybWF0IGxvb2t1cHMuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkRGF0ZVRpbWVGb3JtYXRDYWNoZUtleShvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG9wdGlvbnMpXG4gICAgLnNvcnQoKFtrZXkxXSwgW2tleTJdKSA9PiBrZXkxLmxvY2FsZUNvbXBhcmUoa2V5MikpXG4gICAgLm1hcCgoa2V5VmFsdWUpID0+IGAke2tleVZhbHVlWzBdfS0ke2tleVZhbHVlWzFdfWApXG4gICAgLmZsYXQoKVxuICAgIC5qb2luKFwiOlwiKTtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBJbnRsLkRhdGVUaW1lRm9ybWF0IGFuZCByZXVzZXMgaXQgaWYgcmVxdWVzdGVkIHdpdGggdGhlIHNhbWUgbG9jYWxlIGFuZCBvcHRpb25zLlxuICpcbiAqICoqTm90ZSoqOiB0aGUgY2FjaGUgd2lsbCBiZSBjbGVhcmVkIGlmIGEgZGlmZmVyZW50IGxvY2FsZSBpcyBwcm92aWRlZFxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBnZXREYXRlVGltZUZvcm1hdChsb2NhbGUsIG9wdGlvbnMpIHtcbiAgbG9jYWxlID0gZ2V0U3VwcG9ydGVkTG9jYWxlKGxvY2FsZSk7XG4gIGlmICghZGF0ZVRpbWVGb3JtYXRDYWNoZSkge1xuICAgIGRhdGVUaW1lRm9ybWF0Q2FjaGUgPSBuZXcgTWFwKCk7XG4gIH1cbiAgaWYgKHByZXZpb3VzTG9jYWxlVXNlZEZvckNhY2hpbmcgIT09IGxvY2FsZSkge1xuICAgIGRhdGVUaW1lRm9ybWF0Q2FjaGUuY2xlYXIoKTtcbiAgICBwcmV2aW91c0xvY2FsZVVzZWRGb3JDYWNoaW5nID0gbG9jYWxlO1xuICB9XG4gIGNvbnN0IGtleSA9IGJ1aWxkRGF0ZVRpbWVGb3JtYXRDYWNoZUtleShvcHRpb25zKTtcbiAgY29uc3QgY2FjaGVkID0gZGF0ZVRpbWVGb3JtYXRDYWNoZS5nZXQoa2V5KTtcbiAgaWYgKGNhY2hlZCkge1xuICAgIHJldHVybiBjYWNoZWQ7XG4gIH1cbiAgY29uc3QgZm9ybWF0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBvcHRpb25zKTtcbiAgZGF0ZVRpbWVGb3JtYXRDYWNoZS5zZXQoa2V5LCBmb3JtYXQpO1xuICByZXR1cm4gZm9ybWF0O1xufVxuXG5leHBvcnQgeyBCaWdEZWNpbWFsIGFzIEIsIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW0gYXMgYSwgZ2V0RGF0ZVRpbWVGb3JtYXQgYXMgYiwgY29ubmVjdExvY2FsaXplZCBhcyBjLCBkaXNjb25uZWN0TG9jYWxpemVkIGFzIGQsIGdldFN1cHBvcnRlZE51bWJlcmluZ1N5c3RlbSBhcyBlLCBnZXRTdXBwb3J0ZWRMb2NhbGUgYXMgZywgaXNWYWxpZE51bWJlciBhcyBpLCBudW1iZXJTdHJpbmdGb3JtYXR0ZXIgYXMgbiwgcGFyc2VOdW1iZXJTdHJpbmcgYXMgcCwgc2FuaXRpemVOdW1iZXJTdHJpbmcgYXMgcyB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbi8qKlxuICogVGhpcyB1dGlsaXR5IGVuc3VyZXMgb2JzZXJ2ZXJzIGFyZSBjcmVhdGVkIG9ubHkgZm9yIGJyb3dzZXIgY29udGV4dHMuXG4gKlxuICogQHBhcmFtIHR5cGUgLSB0aGUgdHlwZSBvZiBvYnNlcnZlciB0byBjcmVhdGVcbiAqIEBwYXJhbSBjYWxsYmFjayAtIHRoZSBvYnNlcnZlciBjYWxsYmFja1xuICogQHBhcmFtIG9wdGlvbnMgLSB0aGUgb2JzZXJ2ZXIgb3B0aW9uc1xuICovXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcih0eXBlLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBjb25zdCBPYnNlcnZlciA9IGdldE9ic2VydmVyKHR5cGUpO1xuICByZXR1cm4gbmV3IE9ic2VydmVyKGNhbGxiYWNrLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGdldE9ic2VydmVyKHR5cGUpIHtcbiAgLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy9kb20vaXNzdWVzLzEyNiNpc3N1ZWNvbW1lbnQtMTA0OTgxNDk0OFxuICBjbGFzcyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXIgZXh0ZW5kcyB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgICAgIHN1cGVyKGNhbGxiYWNrKTtcbiAgICAgIHRoaXMub2JzZXJ2ZWRFbnRyeSA9IFtdO1xuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICBvYnNlcnZlKHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5LnB1c2goeyB0YXJnZXQsIG9wdGlvbnMgfSk7XG4gICAgICByZXR1cm4gc3VwZXIub2JzZXJ2ZSh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICB1bm9ic2VydmUodGFyZ2V0KSB7XG4gICAgICBjb25zdCBuZXdPYnNlcnZlZEVudHJpZXMgPSB0aGlzLm9ic2VydmVkRW50cnkuZmlsdGVyKChvYnNlcnZlZCkgPT4gb2JzZXJ2ZWQudGFyZ2V0ICE9PSB0YXJnZXQpO1xuICAgICAgdGhpcy5vYnNlcnZlZEVudHJ5ID0gW107XG4gICAgICB0aGlzLmNhbGxiYWNrKHN1cGVyLnRha2VSZWNvcmRzKCksIHRoaXMpO1xuICAgICAgdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICBuZXdPYnNlcnZlZEVudHJpZXMuZm9yRWFjaCgob2JzZXJ2ZWQpID0+IHRoaXMub2JzZXJ2ZShvYnNlcnZlZC50YXJnZXQsIG9ic2VydmVkLm9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0eXBlID09PSBcImludGVyc2VjdGlvblwiXG4gICAgICA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlclxuICAgICAgOiB0eXBlID09PSBcIm11dGF0aW9uXCJcbiAgICAgICAgPyBFeHRlbmRlZE11dGF0aW9uT2JzZXJ2ZXJcbiAgICAgICAgOiB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIpO1xuICB9KSgpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVPYnNlcnZlciBhcyBjIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=