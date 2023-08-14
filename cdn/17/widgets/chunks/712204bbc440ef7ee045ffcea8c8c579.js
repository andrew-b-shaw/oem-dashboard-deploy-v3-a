"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["vendors-node_modules_esri_calcite-components_dist_esm_calcite-input-time-picker_2_entry_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-input-time-picker.calcite-time-picker-330adb65.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-input-time-picker.calcite-time-picker-330adb65.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ InputTimePicker),
/* harmony export */   "T": () => (/* binding */ TimePicker),
/* harmony export */   "d": () => (/* binding */ dayjs)
/* harmony export */ });
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _form_d7359efe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-d7359efe.js */ "./node_modules/@esri/calcite-components/dist/esm/form-d7359efe.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label-9d2eb334.js */ "./node_modules/@esri/calcite-components/dist/esm/label-9d2eb334.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./focusTrapComponent-07adcb3f.js */ "./node_modules/@esri/calcite-components/dist/esm/focusTrapComponent-07adcb3f.js");
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */











const maxTenthForMinuteAndSecond = 5;
function createLocaleDateTimeFormatter(locale, numberingSystem, includeSeconds = true) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    numberingSystem: (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.e)(numberingSystem)
  };
  if (includeSeconds) {
    options.second = "2-digit";
  }
  return (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.b)(locale, options);
}
function formatTimePart(number) {
  const numberAsString = number.toString();
  return number >= 0 && number <= 9 ? numberAsString.padStart(2, "0") : numberAsString;
}
function formatTimeString(value) {
  if (!isValidTime(value)) {
    return null;
  }
  const [hourString, minuteString, secondString] = value.split(":");
  const hour = formatTimePart(parseInt(hourString));
  const minute = formatTimePart(parseInt(minuteString));
  if (secondString) {
    const second = formatTimePart(parseInt(secondString));
    return `${hour}:${minute}:${second}`;
  }
  return `${hour}:${minute}`;
}
function getLocaleHourCycle(locale, numberingSystem) {
  const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
  const parts = formatter.formatToParts(new Date(Date.UTC(0, 0, 0, 0, 0, 0)));
  return getLocalizedTimePart("meridiem", parts) ? "12" : "24";
}
function getLocalizedTimePart(part, parts) {
  if (!part || !parts) {
    return null;
  }
  if (part === "hourSuffix") {
    const hourIndex = parts.indexOf(parts.find(({ type }) => type === "hour"));
    const minuteIndex = parts.indexOf(parts.find(({ type }) => type === "minute"));
    const hourSuffix = parts[hourIndex + 1];
    return hourSuffix && hourSuffix.type === "literal" && minuteIndex - hourIndex === 2
      ? hourSuffix.value?.trim() || null
      : null;
  }
  if (part === "minuteSuffix") {
    const minuteIndex = parts.indexOf(parts.find(({ type }) => type === "minute"));
    const secondIndex = parts.indexOf(parts.find(({ type }) => type === "second"));
    const minuteSuffix = parts[minuteIndex + 1];
    return minuteSuffix && minuteSuffix.type === "literal" && secondIndex - minuteIndex === 2
      ? minuteSuffix.value?.trim() || null
      : null;
  }
  if (part === "secondSuffix") {
    const secondIndex = parts.indexOf(parts.find(({ type }) => type === "second"));
    const secondSuffix = parts[secondIndex + 1];
    return secondSuffix && secondSuffix.type === "literal" ? secondSuffix.value?.trim() || null : null;
  }
  return parts.find(({ type }) => (part == "meridiem" ? type === "dayPeriod" : type === part))?.value || null;
}
function getMeridiem(hour) {
  if (!(0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(hour)) {
    return null;
  }
  const hourAsNumber = parseInt(hour);
  return hourAsNumber >= 0 && hourAsNumber <= 11 ? "AM" : "PM";
}
function isValidTime(value) {
  if (!value || value.startsWith(":") || value.endsWith(":")) {
    return false;
  }
  const splitValue = value.split(":");
  const validLength = splitValue.length > 1 && splitValue.length < 4;
  if (!validLength) {
    return false;
  }
  const [hour, minute, second] = splitValue;
  const hourAsNumber = parseInt(splitValue[0]);
  const minuteAsNumber = parseInt(splitValue[1]);
  const secondAsNumber = parseInt(splitValue[2]);
  const hourValid = (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(hour) && hourAsNumber >= 0 && hourAsNumber < 24;
  const minuteValid = (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(minute) && minuteAsNumber >= 0 && minuteAsNumber < 60;
  const secondValid = (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(second) && secondAsNumber >= 0 && secondAsNumber < 60;
  if ((hourValid && minuteValid && !second) || (hourValid && minuteValid && secondValid)) {
    return true;
  }
}
function isValidTimePart(value, part) {
  if (part === "meridiem") {
    return value === "AM" || value === "PM";
  }
  if (!(0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(value)) {
    return false;
  }
  const valueAsNumber = Number(value);
  return part === "hour" ? valueAsNumber >= 0 && valueAsNumber < 24 : valueAsNumber >= 0 && valueAsNumber < 60;
}
function localizeTimePart({ value, part, locale, numberingSystem }) {
  if (!isValidTimePart(value, part)) {
    return;
  }
  const valueAsNumber = parseInt(value);
  const date = new Date(Date.UTC(0, 0, 0, part === "hour" ? valueAsNumber : part === "meridiem" ? (value === "AM" ? 0 : 12) : 0, part === "minute" ? valueAsNumber : 0, part === "second" ? valueAsNumber : 0));
  if (!date) {
    return;
  }
  const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
  const parts = formatter.formatToParts(date);
  return getLocalizedTimePart(part, parts);
}
function localizeTimeString({ value, locale, numberingSystem, includeSeconds = true }) {
  if (!isValidTime(value)) {
    return null;
  }
  const { hour, minute, second = "0" } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second)));
  const formatter = createLocaleDateTimeFormatter(locale, numberingSystem, includeSeconds);
  return formatter?.format(dateFromTimeString) || null;
}
function localizeTimeStringToParts({ value, locale, numberingSystem }) {
  if (!isValidTime(value)) {
    return null;
  }
  const { hour, minute, second = "0" } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second)));
  if (dateFromTimeString) {
    const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
    const parts = formatter.formatToParts(dateFromTimeString);
    return {
      localizedHour: getLocalizedTimePart("hour", parts),
      localizedHourSuffix: getLocalizedTimePart("hourSuffix", parts),
      localizedMinute: getLocalizedTimePart("minute", parts),
      localizedMinuteSuffix: getLocalizedTimePart("minuteSuffix", parts),
      localizedSecond: getLocalizedTimePart("second", parts),
      localizedSecondSuffix: getLocalizedTimePart("secondSuffix", parts),
      localizedMeridiem: getLocalizedTimePart("meridiem", parts)
    };
  }
  return null;
}
function getTimeParts({ value, locale, numberingSystem }) {
  if (!isValidTime(value)) {
    return null;
  }
  const { hour, minute, second = "0" } = parseTimeString(value);
  const dateFromTimeString = new Date(Date.UTC(0, 0, 0, parseInt(hour), parseInt(minute), parseInt(second)));
  if (dateFromTimeString) {
    const formatter = createLocaleDateTimeFormatter(locale, numberingSystem);
    const parts = formatter.formatToParts(dateFromTimeString);
    return parts;
  }
  return null;
}
function parseTimeString(value) {
  if (isValidTime(value)) {
    const [hour, minute, second] = value.split(":");
    return {
      hour,
      minute,
      second
    };
  }
  return {
    hour: null,
    minute: null,
    second: null
  };
}
function toISOTimeString(value, includeSeconds = true) {
  if (!isValidTime(value)) {
    return "";
  }
  const { hour, minute, second } = parseTimeString(value);
  let isoTimeString = `${formatTimePart(parseInt(hour))}:${formatTimePart(parseInt(minute))}`;
  if (includeSeconds) {
    isoTimeString += `:${formatTimePart(parseInt((includeSeconds && second) || "0"))}`;
  }
  return isoTimeString;
}

const CSS$1 = {
  toggleIcon: "toggle-icon"
};

var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND; // English locales

var MS = 'millisecond';
var S = 'second';
var MIN = 'minute';
var H = 'hour';
var D = 'day';
var W = 'week';
var M = 'month';
var Q = 'quarter';
var Y = 'year';
var DATE = 'date';
var FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ';
var INVALID_DATE_STRING = 'Invalid Date'; // regex

var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

// English [en]
// We don't need weekdaysShort, weekdaysMin, monthsShort in en.js locale
const en = {
  name: 'en',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
  ordinal: function ordinal(n) {
    var s = ['th', 'st', 'nd', 'rd'];
    var v = n % 100;
    return "[" + n + (s[(v - 20) % 10] || s[v] || s[0]) + "]";
  }
};

const en$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': en
});

var padStart = function padStart(string, length, pad) {
  var s = String(string);
  if (!s || s.length >= length) return string;
  return "" + Array(length + 1 - s.length).join(pad) + string;
};

var padZoneStr = function padZoneStr(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return "" + (negMinutes <= 0 ? '+' : '-') + padStart(hourOffset, 2, '0') + ":" + padStart(minuteOffset, 2, '0');
};

var monthDiff = function monthDiff(a, b) {
  // function from moment.js in order to keep the same result
  if (a.date() < b.date()) return -monthDiff(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, M);
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M);
  return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};

var absFloor = function absFloor(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};

var prettyUnit = function prettyUnit(u) {
  var special = {
    M: M,
    y: Y,
    w: W,
    d: D,
    D: DATE,
    h: H,
    m: MIN,
    s: S,
    ms: MS,
    Q: Q
  };
  return special[u] || String(u || '').toLowerCase().replace(/s$/, '');
};

var isUndefined = function isUndefined(s) {
  return s === undefined;
};

const U = {
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
};

var L = 'en'; // global locale

var Ls = {}; // global loaded locale

Ls[L] = en;

var isDayjs = function isDayjs(d) {
  return d instanceof Dayjs;
}; // eslint-disable-line no-use-before-define


var parseLocale = function parseLocale(preset, object, isLocal) {
  var l;
  if (!preset) return L;

  if (typeof preset === 'string') {
    var presetLower = preset.toLowerCase();

    if (Ls[presetLower]) {
      l = presetLower;
    }

    if (object) {
      Ls[presetLower] = object;
      l = presetLower;
    }

    var presetSplit = preset.split('-');

    if (!l && presetSplit.length > 1) {
      return parseLocale(presetSplit[0]);
    }
  } else {
    var name = preset.name;
    Ls[name] = preset;
    l = name;
  }

  if (!isLocal && l) L = l;
  return l || !isLocal && L;
};

var dayjs = function dayjs(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  } // eslint-disable-next-line no-nested-ternary


  var cfg = typeof c === 'object' ? c : {};
  cfg.date = date;
  cfg.args = arguments; // eslint-disable-line prefer-rest-params

  return new Dayjs(cfg); // eslint-disable-line no-use-before-define
};

var wrapper = function wrapper(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset // todo: refactor; do not use this.$offset in you code

  });
};

var Utils = U; // for plugin use

Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;

var parseDate = function parseDate(cfg) {
  var date = cfg.date,
      utc = cfg.utc;
  if (date === null) return new Date(NaN); // null is invalid

  if (Utils.u(date)) return new Date(); // today

  if (date instanceof Date) return new Date(date);

  if (typeof date === 'string' && !/Z$/i.test(date)) {
    var d = date.match(REGEX_PARSE);

    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || '0').substring(0, 3);

      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }

      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }

  return new Date(date); // everything else
};

var Dayjs = /*#__PURE__*/function () {
  function Dayjs(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg); // for plugin
  }

  var _proto = Dayjs.prototype;

  _proto.parse = function parse(cfg) {
    this.$d = parseDate(cfg);
    this.$x = cfg.x || {};
    this.init();
  };

  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.$utils = function $utils() {
    return Utils;
  };

  _proto.isValid = function isValid() {
    return !(this.$d.toString() === INVALID_DATE_STRING);
  };

  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };

  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };

  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };

  _proto.$g = function $g(input, get, set) {
    if (Utils.u(input)) return this[get];
    return this.set(set, input);
  };

  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1000);
  };

  _proto.valueOf = function valueOf() {
    // timezone(hour) * 60 * 60 * 1000 => ms
    return this.$d.getTime();
  };

  _proto.startOf = function startOf(units, _startOf) {
    var _this = this;

    // startOf -> endOf
    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);

    var instanceFactory = function instanceFactory(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(D);
    };

    var instanceFactorySet = function instanceFactorySet(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply( // eslint-disable-line prefer-spread
      _this.toDate('s'), (isStartOf ? argumentStart : argumentEnd).slice(slice)), _this);
    };

    var $W = this.$W,
        $M = this.$M,
        $D = this.$D;
    var utcPad = "set" + (this.$u ? 'UTC' : '');

    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);

      case M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);

      case W:
        {
          var weekStart = this.$locale().weekStart || 0;
          var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
          return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
        }

      case D:
      case DATE:
        return instanceFactorySet(utcPad + "Hours", 0);

      case H:
        return instanceFactorySet(utcPad + "Minutes", 1);

      case MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);

      case S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);

      default:
        return this.clone();
    }
  };

  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };

  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C;

    // private set
    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? 'UTC' : '');
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === D ? this.$D + (_int - this.$W) : _int;

    if (unit === M || unit === Y) {
      // clone is for badMutable plugin
      var date = this.clone().set(DATE, 1);
      date.$d[name](arg);
      date.init();
      this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name) this.$d[name](arg);

    this.init();
    return this;
  };

  _proto.set = function set(string, _int2) {
    return this.clone().$set(string, _int2);
  };

  _proto.get = function get(unit) {
    return this[Utils.p(unit)]();
  };

  _proto.add = function add(number, units) {
    var _this2 = this,
        _C$MIN$C$H$C$S$unit;

    number = Number(number); // eslint-disable-line no-param-reassign

    var unit = Utils.p(units);

    var instanceFactorySet = function instanceFactorySet(n) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
    };

    if (unit === M) {
      return this.set(M, this.$M + number);
    }

    if (unit === Y) {
      return this.set(Y, this.$y + number);
    }

    if (unit === D) {
      return instanceFactorySet(1);
    }

    if (unit === W) {
      return instanceFactorySet(7);
    }

    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1; // ms

    var nextTimeStamp = this.$d.getTime() + number * step;
    return Utils.w(nextTimeStamp, this);
  };

  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };

  _proto.format = function format(formatStr) {
    var _this3 = this;

    var locale = this.$locale();
    if (!this.isValid()) return locale.invalidDate || INVALID_DATE_STRING;
    var str = formatStr || FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H,
        $m = this.$m,
        $M = this.$M;
    var weekdays = locale.weekdays,
        months = locale.months,
        meridiem = locale.meridiem;

    var getShort = function getShort(arr, index, full, length) {
      return arr && (arr[index] || arr(_this3, str)) || full[index].slice(0, length);
    };

    var get$H = function get$H(num) {
      return Utils.s($H % 12 || 12, num, '0');
    };

    var meridiemFunc = meridiem || function (hour, minute, isLowercase) {
      var m = hour < 12 ? 'AM' : 'PM';
      return isLowercase ? m.toLowerCase() : m;
    };

    var matches = {
      YY: String(this.$y).slice(-2),
      YYYY: Utils.s(this.$y, 4, '0'),
      M: $M + 1,
      MM: Utils.s($M + 1, 2, '0'),
      MMM: getShort(locale.monthsShort, $M, months, 3),
      MMMM: getShort(months, $M),
      D: this.$D,
      DD: Utils.s(this.$D, 2, '0'),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: Utils.s($H, 2, '0'),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: Utils.s($m, 2, '0'),
      s: String(this.$s),
      ss: Utils.s(this.$s, 2, '0'),
      SSS: Utils.s(this.$ms, 3, '0'),
      Z: zoneStr // 'ZZ' logic below

    };
    return str.replace(REGEX_FORMAT, function (match, $1) {
      return $1 || matches[match] || zoneStr.replace(':', '');
    }); // 'ZZ'
  };

  _proto.utcOffset = function utcOffset() {
    // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
    // https://github.com/moment/moment/pull/1871
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };

  _proto.diff = function diff(input, units, _float) {
    var _C$Y$C$M$C$Q$C$W$C$D$;

    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    var diff = this - that;
    var result = Utils.m(this, that);
    result = (_C$Y$C$M$C$Q$C$W$C$D$ = {}, _C$Y$C$M$C$Q$C$W$C$D$[Y] = result / 12, _C$Y$C$M$C$Q$C$W$C$D$[M] = result, _C$Y$C$M$C$Q$C$W$C$D$[Q] = result / 3, _C$Y$C$M$C$Q$C$W$C$D$[W] = (diff - zoneDelta) / MILLISECONDS_A_WEEK, _C$Y$C$M$C$Q$C$W$C$D$[D] = (diff - zoneDelta) / MILLISECONDS_A_DAY, _C$Y$C$M$C$Q$C$W$C$D$[H] = diff / MILLISECONDS_A_HOUR, _C$Y$C$M$C$Q$C$W$C$D$[MIN] = diff / MILLISECONDS_A_MINUTE, _C$Y$C$M$C$Q$C$W$C$D$[S] = diff / MILLISECONDS_A_SECOND, _C$Y$C$M$C$Q$C$W$C$D$)[unit] || diff; // milliseconds

    return _float ? result : Utils.a(result);
  };

  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(M).$D;
  };

  _proto.$locale = function $locale() {
    // get locale object
    return Ls[this.$L];
  };

  _proto.locale = function locale(preset, object) {
    if (!preset) return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName) that.$L = nextLocaleName;
    return that;
  };

  _proto.clone = function clone() {
    return Utils.w(this.$d, this);
  };

  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };

  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };

  _proto.toISOString = function toISOString() {
    // ie 8 return
    // new Dayjs(this.valueOf() + this.$d.getTimezoneOffset() * 60000)
    // .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    return this.$d.toISOString();
  };

  _proto.toString = function toString() {
    return this.$d.toUTCString();
  };

  return Dayjs;
}();

var proto = Dayjs.prototype;
dayjs.prototype = proto;
[['$ms', MS], ['$s', S], ['$m', MIN], ['$H', H], ['$W', D], ['$M', M], ['$y', Y], ['$D', DATE]].forEach(function (g) {
  proto[g[1]] = function (input) {
    return this.$g(input, g[0], g[1]);
  };
});

dayjs.extend = function (plugin, option) {
  if (!plugin.$i) {
    // install plugin only once
    plugin(option, Dayjs, dayjs);
    plugin.$i = true;
  }

  return dayjs;
};

dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;

dayjs.unix = function (timestamp) {
  return dayjs(timestamp * 1e3);
};

dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};

// eslint-disable-next-line import/prefer-default-export
var t = function t(format) {
  return format.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (_, a, b) {
    return a || b.slice(1);
  });
};
var englishFormats = {
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D, YYYY',
  LLL: 'MMMM D, YYYY h:mm A',
  LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
var u = function u(formatStr, formats) {
  return formatStr.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (_, a, b) {
    var B = b && b.toUpperCase();
    return a || formats[b] || englishFormats[b] || t(formats[B]);
  });
};

var formattingTokens = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g;
var match1 = /\d/; // 0 - 9

var match2 = /\d\d/; // 00 - 99

var match3 = /\d{3}/; // 000 - 999

var match4 = /\d{4}/; // 0000 - 9999

var match1to2 = /\d\d?/; // 0 - 99

var matchSigned = /[+-]?\d+/; // -inf - inf

var matchOffset = /[+-]\d\d:?(\d\d)?|Z/; // +00:00 -00:00 +0000 or -0000 +00 or Z

var matchWord = /\d*[^-_:/,()\s\d]+/; // Word

var locale = {};

var parseTwoDigitYear = function parseTwoDigitYear(input) {
  input = +input;
  return input + (input > 68 ? 1900 : 2000);
};

function offsetFromString(string) {
  if (!string) return 0;
  if (string === 'Z') return 0;
  var parts = string.match(/([+-]|\d\d)/g);
  var minutes = +(parts[1] * 60) + (+parts[2] || 0);
  return minutes === 0 ? 0 : parts[0] === '+' ? -minutes : minutes; // eslint-disable-line no-nested-ternary
}

var addInput = function addInput(property) {
  return function (input) {
    this[property] = +input;
  };
};

var zoneExpressions = [matchOffset, function (input) {
  var zone = this.zone || (this.zone = {});
  zone.offset = offsetFromString(input);
}];

var getLocalePart = function getLocalePart(name) {
  var part = locale[name];
  return part && (part.indexOf ? part : part.s.concat(part.f));
};

var meridiemMatch = function meridiemMatch(input, isLowerCase) {
  var isAfternoon;
  var _locale = locale,
      meridiem = _locale.meridiem;

  if (!meridiem) {
    isAfternoon = input === (isLowerCase ? 'pm' : 'PM');
  } else {
    for (var i = 1; i <= 24; i += 1) {
      // todo: fix input === meridiem(i, 0, isLowerCase)
      if (input.indexOf(meridiem(i, 0, isLowerCase)) > -1) {
        isAfternoon = i > 12;
        break;
      }
    }
  }

  return isAfternoon;
};

var expressions = {
  A: [matchWord, function (input) {
    this.afternoon = meridiemMatch(input, false);
  }],
  a: [matchWord, function (input) {
    this.afternoon = meridiemMatch(input, true);
  }],
  S: [match1, function (input) {
    this.milliseconds = +input * 100;
  }],
  SS: [match2, function (input) {
    this.milliseconds = +input * 10;
  }],
  SSS: [match3, function (input) {
    this.milliseconds = +input;
  }],
  s: [match1to2, addInput('seconds')],
  ss: [match1to2, addInput('seconds')],
  m: [match1to2, addInput('minutes')],
  mm: [match1to2, addInput('minutes')],
  H: [match1to2, addInput('hours')],
  h: [match1to2, addInput('hours')],
  HH: [match1to2, addInput('hours')],
  hh: [match1to2, addInput('hours')],
  D: [match1to2, addInput('day')],
  DD: [match2, addInput('day')],
  Do: [matchWord, function (input) {
    var _locale2 = locale,
        ordinal = _locale2.ordinal;

    var _input$match = input.match(/\d+/);

    this.day = _input$match[0];
    if (!ordinal) return;

    for (var i = 1; i <= 31; i += 1) {
      if (ordinal(i).replace(/\[|\]/g, '') === input) {
        this.day = i;
      }
    }
  }],
  M: [match1to2, addInput('month')],
  MM: [match2, addInput('month')],
  MMM: [matchWord, function (input) {
    var months = getLocalePart('months');
    var monthsShort = getLocalePart('monthsShort');
    var matchIndex = (monthsShort || months.map(function (_) {
      return _.slice(0, 3);
    })).indexOf(input) + 1;

    if (matchIndex < 1) {
      throw new Error();
    }

    this.month = matchIndex % 12 || matchIndex;
  }],
  MMMM: [matchWord, function (input) {
    var months = getLocalePart('months');
    var matchIndex = months.indexOf(input) + 1;

    if (matchIndex < 1) {
      throw new Error();
    }

    this.month = matchIndex % 12 || matchIndex;
  }],
  Y: [matchSigned, addInput('year')],
  YY: [match2, function (input) {
    this.year = parseTwoDigitYear(input);
  }],
  YYYY: [match4, addInput('year')],
  Z: zoneExpressions,
  ZZ: zoneExpressions
};

function correctHours(time) {
  var afternoon = time.afternoon;

  if (afternoon !== undefined) {
    var hours = time.hours;

    if (afternoon) {
      if (hours < 12) {
        time.hours += 12;
      }
    } else if (hours === 12) {
      time.hours = 0;
    }

    delete time.afternoon;
  }
}

function makeParser(format) {
  format = u(format, locale && locale.formats);
  var array = format.match(formattingTokens);
  var length = array.length;

  for (var i = 0; i < length; i += 1) {
    var token = array[i];
    var parseTo = expressions[token];
    var regex = parseTo && parseTo[0];
    var parser = parseTo && parseTo[1];

    if (parser) {
      array[i] = {
        regex: regex,
        parser: parser
      };
    } else {
      array[i] = token.replace(/^\[|\]$/g, '');
    }
  }

  return function (input) {
    var time = {};

    for (var _i = 0, start = 0; _i < length; _i += 1) {
      var _token = array[_i];

      if (typeof _token === 'string') {
        start += _token.length;
      } else {
        var _regex = _token.regex,
            _parser = _token.parser;
        var part = input.slice(start);

        var match = _regex.exec(part);

        var value = match[0];

        _parser.call(time, value);

        input = input.replace(value, '');
      }
    }

    correctHours(time);
    return time;
  };
}

var parseFormattedInput = function parseFormattedInput(input, format, utc) {
  try {
    if (['x', 'X'].indexOf(format) > -1) return new Date((format === 'X' ? 1000 : 1) * input);
    var parser = makeParser(format);

    var _parser2 = parser(input),
        year = _parser2.year,
        month = _parser2.month,
        day = _parser2.day,
        hours = _parser2.hours,
        minutes = _parser2.minutes,
        seconds = _parser2.seconds,
        milliseconds = _parser2.milliseconds,
        zone = _parser2.zone;

    var now = new Date();
    var d = day || (!year && !month ? now.getDate() : 1);
    var y = year || now.getFullYear();
    var M = 0;

    if (!(year && !month)) {
      M = month > 0 ? month - 1 : now.getMonth();
    }

    var h = hours || 0;
    var m = minutes || 0;
    var s = seconds || 0;
    var ms = milliseconds || 0;

    if (zone) {
      return new Date(Date.UTC(y, M, d, h, m, s, ms + zone.offset * 60 * 1000));
    }

    if (utc) {
      return new Date(Date.UTC(y, M, d, h, m, s, ms));
    }

    return new Date(y, M, d, h, m, s, ms);
  } catch (e) {
    return new Date(''); // Invalid Date
  }
};

const customParseFormat = (function (o, C, d) {
  d.p.customParseFormat = true;

  if (o && o.parseTwoDigitYear) {
    parseTwoDigitYear = o.parseTwoDigitYear;
  }

  var proto = C.prototype;
  var oldParse = proto.parse;

  proto.parse = function (cfg) {
    var date = cfg.date,
        utc = cfg.utc,
        args = cfg.args;
    this.$u = utc;
    var format = args[1];

    if (typeof format === 'string') {
      var isStrictWithoutLocale = args[2] === true;
      var isStrictWithLocale = args[3] === true;
      var isStrict = isStrictWithoutLocale || isStrictWithLocale;
      var pl = args[2];

      if (isStrictWithLocale) {
        pl = args[2];
      }

      locale = this.$locale();

      if (!isStrictWithoutLocale && pl) {
        locale = d.Ls[pl];
      }

      this.$d = parseFormattedInput(date, format, utc);
      this.init();
      if (pl && pl !== true) this.$L = this.locale(pl).$L; // use != to treat
      // input number 1410715640579 and format string '1410715640579' equal
      // eslint-disable-next-line eqeqeq

      if (isStrict && date != this.format(format)) {
        this.$d = new Date('');
      } // reset global locale to make parallel unit test


      locale = {};
    } else if (format instanceof Array) {
      var len = format.length;

      for (var i = 1; i <= len; i += 1) {
        args[1] = format[i - 1];
        var result = d.apply(this, args);

        if (result.isValid()) {
          this.$d = result.$d;
          this.$L = result.$L;
          this.init();
          break;
        }

        if (i === len) this.$d = new Date('');
      }
    } else {
      oldParse.call(this, cfg);
    }
  };
});

const localeData = (function (o, c, dayjs) {
  // locale needed later
  var proto = c.prototype;

  var getLocalePart = function getLocalePart(part) {
    return part && (part.indexOf ? part : part.s);
  };

  var getShort = function getShort(ins, target, full, num, localeOrder) {
    var locale = ins.name ? ins : ins.$locale();
    var targetLocale = getLocalePart(locale[target]);
    var fullLocale = getLocalePart(locale[full]);
    var result = targetLocale || fullLocale.map(function (f) {
      return f.slice(0, num);
    });
    if (!localeOrder) return result;
    var weekStart = locale.weekStart;
    return result.map(function (_, index) {
      return result[(index + (weekStart || 0)) % 7];
    });
  };

  var getDayjsLocaleObject = function getDayjsLocaleObject() {
    return dayjs.Ls[dayjs.locale()];
  };

  var getLongDateFormat = function getLongDateFormat(l, format) {
    return l.formats[format] || t(l.formats[format.toUpperCase()]);
  };

  var localeData = function localeData() {
    var _this = this;

    return {
      months: function months(instance) {
        return instance ? instance.format('MMMM') : getShort(_this, 'months');
      },
      monthsShort: function monthsShort(instance) {
        return instance ? instance.format('MMM') : getShort(_this, 'monthsShort', 'months', 3);
      },
      firstDayOfWeek: function firstDayOfWeek() {
        return _this.$locale().weekStart || 0;
      },
      weekdays: function weekdays(instance) {
        return instance ? instance.format('dddd') : getShort(_this, 'weekdays');
      },
      weekdaysMin: function weekdaysMin(instance) {
        return instance ? instance.format('dd') : getShort(_this, 'weekdaysMin', 'weekdays', 2);
      },
      weekdaysShort: function weekdaysShort(instance) {
        return instance ? instance.format('ddd') : getShort(_this, 'weekdaysShort', 'weekdays', 3);
      },
      longDateFormat: function longDateFormat(format) {
        return getLongDateFormat(_this.$locale(), format);
      },
      meridiem: this.$locale().meridiem,
      ordinal: this.$locale().ordinal
    };
  };

  proto.localeData = function () {
    return localeData.bind(this)();
  };

  dayjs.localeData = function () {
    var localeObject = getDayjsLocaleObject();
    return {
      firstDayOfWeek: function firstDayOfWeek() {
        return localeObject.weekStart || 0;
      },
      weekdays: function weekdays() {
        return dayjs.weekdays();
      },
      weekdaysShort: function weekdaysShort() {
        return dayjs.weekdaysShort();
      },
      weekdaysMin: function weekdaysMin() {
        return dayjs.weekdaysMin();
      },
      months: function months() {
        return dayjs.months();
      },
      monthsShort: function monthsShort() {
        return dayjs.monthsShort();
      },
      longDateFormat: function longDateFormat(format) {
        return getLongDateFormat(localeObject, format);
      },
      meridiem: localeObject.meridiem,
      ordinal: localeObject.ordinal
    };
  };

  dayjs.months = function () {
    return getShort(getDayjsLocaleObject(), 'months');
  };

  dayjs.monthsShort = function () {
    return getShort(getDayjsLocaleObject(), 'monthsShort', 'months', 3);
  };

  dayjs.weekdays = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdays', null, null, localeOrder);
  };

  dayjs.weekdaysShort = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdaysShort', 'weekdays', 3, localeOrder);
  };

  dayjs.weekdaysMin = function (localeOrder) {
    return getShort(getDayjsLocaleObject(), 'weekdaysMin', 'weekdays', 2, localeOrder);
  };
});

const localizedFormat = (function (o, c, d) {
  var proto = c.prototype;
  var oldFormat = proto.format;
  d.en.formats = englishFormats;

  proto.format = function (formatStr) {
    if (formatStr === void 0) {
      formatStr = FORMAT_DEFAULT;
    }

    var _this$$locale = this.$locale(),
        _this$$locale$formats = _this$$locale.formats,
        formats = _this$$locale$formats === void 0 ? {} : _this$$locale$formats;

    var result = u(formatStr, formats);
    return oldFormat.call(this, result);
  };
});

// Plugin template from https://day.js.org/docs/en/plugin/plugin
const preParsePostFormat = (function (option, dayjsClass) {
  var oldParse = dayjsClass.prototype.parse;

  dayjsClass.prototype.parse = function (cfg) {
    if (typeof cfg.date === 'string') {
      var locale = this.$locale();
      cfg.date = locale && locale.preparse ? locale.preparse(cfg.date) : cfg.date;
    } // original parse result


    return oldParse.bind(this)(cfg);
  }; // // overriding existing API
  // // e.g. extend dayjs().format()


  var oldFormat = dayjsClass.prototype.format;

  dayjsClass.prototype.format = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // original format result
    var result = oldFormat.call.apply(oldFormat, [this].concat(args)); // return modified result

    var locale = this.$locale();
    return locale && locale.postformat ? locale.postformat(result) : result;
  };

  var oldFromTo = dayjsClass.prototype.fromToBase;

  if (oldFromTo) {
    dayjsClass.prototype.fromToBase = function (input, withoutSuffix, instance, isFrom) {
      var locale = this.$locale() || instance.$locale(); // original format result

      return oldFromTo.call(this, input, withoutSuffix, instance, isFrom, locale && locale.postformat);
    };
  }
});

const updateLocale = (function (option, Dayjs, dayjs) {
  dayjs.updateLocale = function (locale, customConfig) {
    var localeList = dayjs.Ls;
    var localeConfig = localeList[locale];
    if (!localeConfig) return;
    var customConfigKeys = customConfig ? Object.keys(customConfig) : [];
    customConfigKeys.forEach(function (c) {
      localeConfig[c] = customConfig[c];
    });
    return localeConfig; // eslint-disable-line consistent-return
  };
});

const inputTimePickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;-webkit-user-select:none;user-select:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([scale=s]){--calcite-toggle-spacing:0.5rem}:host([scale=m]){--calcite-toggle-spacing:0.75rem}:host([scale=l]){--calcite-toggle-spacing:1rem}.input-wrapper{position:relative}.toggle-icon{position:absolute;display:flex;inline-size:1rem;cursor:pointer;align-items:center;inset-inline-end:0;inset-block:0;padding-inline:var(--calcite-toggle-spacing)}";

// some bundlers (e.g., Webpack) need dynamic import paths to be static
const supportedDayJsLocaleToLocaleConfigImport = new Map([
  ["ar", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_ar-cd89a08b_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ar-cd89a08b.js */ "./node_modules/@esri/calcite-components/dist/esm/ar-cd89a08b.js"))],
  ["bg", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_bg-b07540ec_js").then(__webpack_require__.bind(__webpack_require__, /*! ./bg-b07540ec.js */ "./node_modules/@esri/calcite-components/dist/esm/bg-b07540ec.js"))],
  ["bs", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_bs-66c5be6b_js").then(__webpack_require__.bind(__webpack_require__, /*! ./bs-66c5be6b.js */ "./node_modules/@esri/calcite-components/dist/esm/bs-66c5be6b.js"))],
  ["ca", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_ca-cf164aa9_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ca-cf164aa9.js */ "./node_modules/@esri/calcite-components/dist/esm/ca-cf164aa9.js"))],
  ["cs", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_cs-cb6b9b4c_js").then(__webpack_require__.bind(__webpack_require__, /*! ./cs-cb6b9b4c.js */ "./node_modules/@esri/calcite-components/dist/esm/cs-cb6b9b4c.js"))],
  ["da", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_da-09d8dc37_js").then(__webpack_require__.bind(__webpack_require__, /*! ./da-09d8dc37.js */ "./node_modules/@esri/calcite-components/dist/esm/da-09d8dc37.js"))],
  ["de", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_de-620dcd38_js").then(__webpack_require__.bind(__webpack_require__, /*! ./de-620dcd38.js */ "./node_modules/@esri/calcite-components/dist/esm/de-620dcd38.js"))],
  ["de-at", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_de-at-88e61936_js").then(__webpack_require__.bind(__webpack_require__, /*! ./de-at-88e61936.js */ "./node_modules/@esri/calcite-components/dist/esm/de-at-88e61936.js"))],
  ["de-ch", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_de-ch-b322ba6f_js").then(__webpack_require__.bind(__webpack_require__, /*! ./de-ch-b322ba6f.js */ "./node_modules/@esri/calcite-components/dist/esm/de-ch-b322ba6f.js"))],
  ["el", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_el-ca0ae579_js").then(__webpack_require__.bind(__webpack_require__, /*! ./el-ca0ae579.js */ "./node_modules/@esri/calcite-components/dist/esm/el-ca0ae579.js"))],
  ["en", () => Promise.resolve().then(function () { return en$1; })],
  ["en-au", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_en-au-3e39450b_js").then(__webpack_require__.bind(__webpack_require__, /*! ./en-au-3e39450b.js */ "./node_modules/@esri/calcite-components/dist/esm/en-au-3e39450b.js"))],
  ["en-ca", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_en-ca-d2d254f6_js").then(__webpack_require__.bind(__webpack_require__, /*! ./en-ca-d2d254f6.js */ "./node_modules/@esri/calcite-components/dist/esm/en-ca-d2d254f6.js"))],
  ["en-gb", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_en-gb-37db0b19_js").then(__webpack_require__.bind(__webpack_require__, /*! ./en-gb-37db0b19.js */ "./node_modules/@esri/calcite-components/dist/esm/en-gb-37db0b19.js"))],
  ["es", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_es-34803e87_js").then(__webpack_require__.bind(__webpack_require__, /*! ./es-34803e87.js */ "./node_modules/@esri/calcite-components/dist/esm/es-34803e87.js"))],
  ["es-mx", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_es-mx-4e9df2f8_js").then(__webpack_require__.bind(__webpack_require__, /*! ./es-mx-4e9df2f8.js */ "./node_modules/@esri/calcite-components/dist/esm/es-mx-4e9df2f8.js"))],
  ["et", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_et-34f427f0_js").then(__webpack_require__.bind(__webpack_require__, /*! ./et-34f427f0.js */ "./node_modules/@esri/calcite-components/dist/esm/et-34f427f0.js"))],
  ["fi", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_fi-e75878c6_js").then(__webpack_require__.bind(__webpack_require__, /*! ./fi-e75878c6.js */ "./node_modules/@esri/calcite-components/dist/esm/fi-e75878c6.js"))],
  ["fr", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_fr-a2ef012f_js").then(__webpack_require__.bind(__webpack_require__, /*! ./fr-a2ef012f.js */ "./node_modules/@esri/calcite-components/dist/esm/fr-a2ef012f.js"))],
  ["fr-ch", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_fr-ch-c925e0fc_js").then(__webpack_require__.bind(__webpack_require__, /*! ./fr-ch-c925e0fc.js */ "./node_modules/@esri/calcite-components/dist/esm/fr-ch-c925e0fc.js"))],
  ["he", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_he-ecd2de85_js").then(__webpack_require__.bind(__webpack_require__, /*! ./he-ecd2de85.js */ "./node_modules/@esri/calcite-components/dist/esm/he-ecd2de85.js"))],
  ["hi", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_hi-d498b386_js").then(__webpack_require__.bind(__webpack_require__, /*! ./hi-d498b386.js */ "./node_modules/@esri/calcite-components/dist/esm/hi-d498b386.js"))],
  ["hr", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_hr-f47f3bfb_js").then(__webpack_require__.bind(__webpack_require__, /*! ./hr-f47f3bfb.js */ "./node_modules/@esri/calcite-components/dist/esm/hr-f47f3bfb.js"))],
  ["hu", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_hu-f5df34ea_js").then(__webpack_require__.bind(__webpack_require__, /*! ./hu-f5df34ea.js */ "./node_modules/@esri/calcite-components/dist/esm/hu-f5df34ea.js"))],
  ["id", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_id-ba8a65d4_js").then(__webpack_require__.bind(__webpack_require__, /*! ./id-ba8a65d4.js */ "./node_modules/@esri/calcite-components/dist/esm/id-ba8a65d4.js"))],
  ["it", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_it-af385f0f_js").then(__webpack_require__.bind(__webpack_require__, /*! ./it-af385f0f.js */ "./node_modules/@esri/calcite-components/dist/esm/it-af385f0f.js"))],
  ["it-ch", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_it-ch-89f9d6ef_js").then(__webpack_require__.bind(__webpack_require__, /*! ./it-ch-89f9d6ef.js */ "./node_modules/@esri/calcite-components/dist/esm/it-ch-89f9d6ef.js"))],
  ["ja", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_ja-022204d5_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ja-022204d5.js */ "./node_modules/@esri/calcite-components/dist/esm/ja-022204d5.js"))],
  ["ko", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_ko-f523749f_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ko-f523749f.js */ "./node_modules/@esri/calcite-components/dist/esm/ko-f523749f.js"))],
  ["lt", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_lt-ecc23d93_js").then(__webpack_require__.bind(__webpack_require__, /*! ./lt-ecc23d93.js */ "./node_modules/@esri/calcite-components/dist/esm/lt-ecc23d93.js"))],
  ["lv", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_lv-a7131d8f_js").then(__webpack_require__.bind(__webpack_require__, /*! ./lv-a7131d8f.js */ "./node_modules/@esri/calcite-components/dist/esm/lv-a7131d8f.js"))],
  ["mk", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_mk-07764f54_js").then(__webpack_require__.bind(__webpack_require__, /*! ./mk-07764f54.js */ "./node_modules/@esri/calcite-components/dist/esm/mk-07764f54.js"))],
  ["nl", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_nl-77449834_js").then(__webpack_require__.bind(__webpack_require__, /*! ./nl-77449834.js */ "./node_modules/@esri/calcite-components/dist/esm/nl-77449834.js"))],
  ["nb", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_nb-0f35c9cc_js").then(__webpack_require__.bind(__webpack_require__, /*! ./nb-0f35c9cc.js */ "./node_modules/@esri/calcite-components/dist/esm/nb-0f35c9cc.js"))],
  ["pl", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_pl-9bc3b201_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pl-9bc3b201.js */ "./node_modules/@esri/calcite-components/dist/esm/pl-9bc3b201.js"))],
  ["pt", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_pt-002b833e_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pt-002b833e.js */ "./node_modules/@esri/calcite-components/dist/esm/pt-002b833e.js"))],
  ["pt-br", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_pt-br-e0930ce7_js").then(__webpack_require__.bind(__webpack_require__, /*! ./pt-br-e0930ce7.js */ "./node_modules/@esri/calcite-components/dist/esm/pt-br-e0930ce7.js"))],
  ["ro", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_ro-bba81f47_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ro-bba81f47.js */ "./node_modules/@esri/calcite-components/dist/esm/ro-bba81f47.js"))],
  ["ru", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_ru-0f39251e_js").then(__webpack_require__.bind(__webpack_require__, /*! ./ru-0f39251e.js */ "./node_modules/@esri/calcite-components/dist/esm/ru-0f39251e.js"))],
  ["sk", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_sk-4a151f09_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sk-4a151f09.js */ "./node_modules/@esri/calcite-components/dist/esm/sk-4a151f09.js"))],
  ["sl", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_sl-aa7861fd_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sl-aa7861fd.js */ "./node_modules/@esri/calcite-components/dist/esm/sl-aa7861fd.js"))],
  ["sr", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_sr-a2cdfeb9_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sr-a2cdfeb9.js */ "./node_modules/@esri/calcite-components/dist/esm/sr-a2cdfeb9.js"))],
  ["sv", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_sv-ca00e5e3_js").then(__webpack_require__.bind(__webpack_require__, /*! ./sv-ca00e5e3.js */ "./node_modules/@esri/calcite-components/dist/esm/sv-ca00e5e3.js"))],
  ["th", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_th-0317324d_js").then(__webpack_require__.bind(__webpack_require__, /*! ./th-0317324d.js */ "./node_modules/@esri/calcite-components/dist/esm/th-0317324d.js"))],
  ["tr", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_tr-8feb4202_js").then(__webpack_require__.bind(__webpack_require__, /*! ./tr-8feb4202.js */ "./node_modules/@esri/calcite-components/dist/esm/tr-8feb4202.js"))],
  ["uk", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_uk-094d01da_js").then(__webpack_require__.bind(__webpack_require__, /*! ./uk-094d01da.js */ "./node_modules/@esri/calcite-components/dist/esm/uk-094d01da.js"))],
  ["vi", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_vi-d1baa060_js").then(__webpack_require__.bind(__webpack_require__, /*! ./vi-d1baa060.js */ "./node_modules/@esri/calcite-components/dist/esm/vi-d1baa060.js"))],
  ["zh-cn", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_zh-cn-91644fd4_js").then(__webpack_require__.bind(__webpack_require__, /*! ./zh-cn-91644fd4.js */ "./node_modules/@esri/calcite-components/dist/esm/zh-cn-91644fd4.js"))],
  ["zh-hk", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_zh-hk-82d06d40_js").then(__webpack_require__.bind(__webpack_require__, /*! ./zh-hk-82d06d40.js */ "./node_modules/@esri/calcite-components/dist/esm/zh-hk-82d06d40.js"))],
  ["zh-tw", () => __webpack_require__.e(/*! import() */ "node_modules_esri_calcite-components_dist_esm_zh-tw-2992db34_js").then(__webpack_require__.bind(__webpack_require__, /*! ./zh-tw-2992db34.js */ "./node_modules/@esri/calcite-components/dist/esm/zh-tw-2992db34.js"))]
]);
dayjs.extend(customParseFormat);
dayjs.extend(localeData);
dayjs.extend(localizedFormat);
dayjs.extend(preParsePostFormat);
dayjs.extend(updateLocale);
const InputTimePicker = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInputTimePickerChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInputTimePickerChange", 7);
    this.focusOnOpen = false;
    this.dialogId = `time-picker-dialog--${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
    /** whether the value of the input was changed as a result of user typing or not */
    this.userChangedValue = false;
    this.referenceElementId = `input-time-picker-${(0,_guid_7136974b_js__WEBPACK_IMPORTED_MODULE_2__.g)()}`;
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    this.hostBlurHandler = () => {
      const inputValue = this.calciteInputEl.value;
      const delocalizedInputValue = this.delocalizeTimeString(inputValue);
      if (!delocalizedInputValue) {
        this.setValue("");
        return;
      }
      if (delocalizedInputValue !== this.value) {
        this.setValue(delocalizedInputValue);
      }
      const localizedTimeString = localizeTimeString({
        value: this.value,
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        includeSeconds: this.shouldIncludeSeconds()
      });
      if (localizedTimeString !== inputValue) {
        this.setInputValue(localizedTimeString);
      }
      this.deactivate();
    };
    this.calciteInternalInputFocusHandler = (event) => {
      if (!this.readOnly) {
        event.stopPropagation();
      }
    };
    this.calciteInternalInputInputHandler = (event) => {
      const { effectiveLocale: locale, numberingSystem } = this;
      if (numberingSystem && numberingSystem !== "latn") {
        const target = event.target;
        _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatOptions = {
          locale,
          numberingSystem,
          useGrouping: false
        };
        const valueInNumberingSystem = _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.delocalize(target.value)
          .split("")
          .map((char) => _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_4__.n.includes(char)
          ? _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.n.numberFormatter.format(Number(char))
          : char)
          .join("");
        this.setInputValue(valueInNumberingSystem);
      }
    };
    this.timePickerChangeHandler = (event) => {
      event.stopPropagation();
      const target = event.target;
      const value = target.value;
      const includeSeconds = this.shouldIncludeSeconds();
      this.setValue(toISOTimeString(value, includeSeconds));
      this.setInputValue(localizeTimeString({
        value,
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        includeSeconds
      }));
    };
    this.popoverCloseHandler = () => {
      (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_8__.d)(this, {
        onDeactivate: () => {
          this.calciteInputEl.setFocus();
          this.focusOnOpen = false;
        }
      });
    };
    this.popoverOpenHandler = () => {
      (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_8__.a)(this, {
        onActivate: () => {
          if (this.focusOnOpen) {
            this.calciteTimePickerEl.setFocus();
            this.focusOnOpen = false;
          }
        }
      });
    };
    this.keyDownHandler = (event) => {
      const { defaultPrevented, key } = event;
      if (defaultPrevented) {
        return;
      }
      if (key === "Enter") {
        if ((0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_1__.s)(this)) {
          event.preventDefault();
          this.calciteInputEl.setFocus();
        }
        if (event.composedPath().includes(this.calciteTimePickerEl)) {
          return;
        }
        const newValue = this.delocalizeTimeString(this.calciteInputEl.value);
        this.setValue(newValue);
        const localizedTimeString = localizeTimeString({
          value: this.value,
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          includeSeconds: this.shouldIncludeSeconds()
        });
        if (newValue && this.calciteInputEl.value !== localizedTimeString) {
          this.setInputValue(localizedTimeString);
        }
      }
      else if (key === "ArrowDown") {
        this.open = true;
        this.focusOnOpen = true;
        event.preventDefault();
      }
      else if (key === "Escape" && this.open) {
        this.open = false;
        event.preventDefault();
        this.calciteInputEl.setFocus();
      }
    };
    this.setCalcitePopoverEl = (el) => {
      this.popoverEl = el;
    };
    this.setCalciteInputEl = (el) => {
      this.calciteInputEl = el;
    };
    this.setCalciteTimePickerEl = (el) => {
      this.calciteTimePickerEl = el;
      (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_8__.c)(this, {
        focusTrapEl: el,
        focusTrapOptions: {
          initialFocus: false,
          setReturnFocus: false
        }
      });
    };
    this.setInputValue = (newInputValue) => {
      if (!this.calciteInputEl) {
        return;
      }
      this.calciteInputEl.value = newInputValue;
    };
    /**
     * Sets the value and emits a change event.
     * This is used to update the value as a result of user interaction.
     *
     * @param value
     */
    this.setValue = (value) => {
      const oldValue = this.value;
      const newValue = formatTimeString(value) || "";
      if (newValue === oldValue) {
        return;
      }
      this.userChangedValue = true;
      this.value = newValue || "";
      const changeEvent = this.calciteInputTimePickerChange.emit();
      if (changeEvent.defaultPrevented) {
        this.userChangedValue = false;
        this.value = oldValue;
        this.setInputValue(localizeTimeString({
          value: oldValue,
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          includeSeconds: this.shouldIncludeSeconds()
        }));
      }
    };
    /**
     * Sets the value directly without emitting a change event.
     * This is used to update the value on initial load and when props change that are not the result of user interaction.
     *
     * @param value
     */
    this.setValueDirectly = (value) => {
      const includeSeconds = this.shouldIncludeSeconds();
      this.value = toISOTimeString(value, includeSeconds);
      this.setInputValue(this.value
        ? localizeTimeString({
          value: this.value,
          includeSeconds,
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem
        })
        : "");
    };
    this.onInputWrapperClick = () => {
      this.open = !this.open;
    };
    this.deactivate = () => {
      this.open = false;
    };
    this.open = false;
    this.disabled = false;
    this.focusTrapDisabled = false;
    this.form = undefined;
    this.readOnly = false;
    this.messageOverrides = undefined;
    this.messages = undefined;
    this.name = undefined;
    this.numberingSystem = undefined;
    this.required = false;
    this.scale = "m";
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.step = 60;
    this.value = null;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
  }
  openHandler(value) {
    if (this.disabled || this.readOnly) {
      this.open = false;
      return;
    }
    if (value) {
      this.reposition(true);
    }
  }
  handleFocusTrapDisabled(focusTrapDisabled) {
    if (!this.open) {
      return;
    }
    focusTrapDisabled ? (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_8__.d)(this) : (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_8__.a)(this);
  }
  handleDisabledAndReadOnlyChange(value) {
    if (!value) {
      this.open = false;
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  numberingSystemWatcher(numberingSystem) {
    this.setInputValue(localizeTimeString({
      value: this.value,
      locale: this.effectiveLocale,
      numberingSystem,
      includeSeconds: this.shouldIncludeSeconds()
    }));
  }
  stepWatcher(newStep, oldStep) {
    if ((oldStep >= 60 && newStep > 0 && newStep < 60) ||
      (newStep >= 60 && oldStep > 0 && oldStep < 60)) {
      this.setValueDirectly(this.value);
    }
  }
  valueWatcher(newValue) {
    if (!this.userChangedValue) {
      this.setValueDirectly(newValue);
    }
    this.userChangedValue = false;
  }
  async effectiveLocaleWatcher(locale) {
    await this.loadDateTimeLocaleData();
    this.setInputValue(localizeTimeString({
      value: this.value,
      locale,
      numberingSystem: this.numberingSystem,
      includeSeconds: this.shouldIncludeSeconds()
    }));
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.el.focus();
  }
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(delayed = false) {
    this.popoverEl?.reposition(delayed);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  delocalizeTimeString(value) {
    // we need to set the corresponding locale before parsing, otherwise it defaults to English (possible dayjs bug)
    dayjs.locale(this.effectiveLocale.toLowerCase());
    const dayjsParseResult = dayjs(value, ["LTS", "LT"]);
    if (dayjsParseResult.isValid()) {
      let unformattedTimeString = `${dayjsParseResult.get("hour")}:${dayjsParseResult.get("minute")}`;
      if (this.shouldIncludeSeconds()) {
        unformattedTimeString += `:${dayjsParseResult.get("seconds") || 0}`;
      }
      return formatTimeString(unformattedTimeString) || "";
    }
    return "";
  }
  async loadDateTimeLocaleData() {
    let supportedLocale = (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.g)(this.effectiveLocale).toLowerCase();
    if (supportedLocale === "no") {
      supportedLocale = "nb";
    }
    if (supportedLocale === "pt-pt") {
      supportedLocale = "pt";
    }
    const { default: localeConfig } = await supportedDayJsLocaleToLocaleConfigImport.get(supportedLocale)();
    dayjs.locale(localeConfig, null, true);
    dayjs.updateLocale(supportedLocale, this.getExtendedLocaleConfig(supportedLocale));
  }
  getExtendedLocaleConfig(locale) {
    if (locale === "ar") {
      return {
        meridiem: (hour) => (hour > 12 ? "م" : "ص"),
        formats: {
          LT: "HH:mm A",
          LTS: "HH:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm A",
          LLLL: "dddd D MMMM YYYY HH:mm A"
        }
      };
    }
    if (locale === "en-au") {
      return {
        meridiem: (hour) => (hour > 12 ? "pm" : "am")
      };
    }
    if (locale === "en-ca") {
      return {
        meridiem: (hour) => (hour > 12 ? "p.m." : "a.m.")
      };
    }
    if (locale === "el") {
      return {
        meridiem: (hour) => (hour > 12 ? "μ.μ." : "π.μ.")
      };
    }
    if (locale === "hi") {
      return {
        formats: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, h:mm A",
          LLLL: "dddd, D MMMM YYYY, h:mm A"
        },
        meridiem: (hour) => (hour > 12 ? "pm" : "am")
      };
    }
    if (locale === "ko") {
      return {
        meridiem: (hour) => (hour > 12 ? "오후" : "오전")
      };
    }
    if (locale === "zh-tw") {
      return {
        formats: {
          LT: "AHH:mm",
          LTS: "AHH:mm:ss"
        }
      };
    }
    if (locale === "zh-hk") {
      return {
        formats: {
          LT: "AHH:mm",
          LTS: "AHH:mm:ss"
        },
        meridiem: (hour) => (hour > 12 ? "下午" : "上午")
      };
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  shouldIncludeSeconds() {
    return this.step < 60;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    if (isValidTime(this.value)) {
      this.setValueDirectly(this.value);
    }
    else {
      this.value = undefined;
    }
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_5__.c)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    await Promise.all([(0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_9__.s)(this), this.loadDateTimeLocaleData()]);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
    if (isValidTime(this.value)) {
      this.setInputValue(localizeTimeString({
        value: this.value,
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        includeSeconds: this.shouldIncludeSeconds()
      }));
    }
  }
  disconnectedCallback() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
    (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_5__.d)(this);
    (0,_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_8__.d)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { disabled, messages, readOnly, dialogId } = this;
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.H, { onBlur: this.hostBlurHandler, onKeyDown: this.keyDownHandler }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "input-wrapper", onClick: this.onInputWrapperClick }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-input", { "aria-autocomplete": "none", "aria-haspopup": "dialog", disabled: disabled, icon: "clock", id: this.referenceElementId, label: (0,_label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_5__.g)(this), lang: this.effectiveLocale, onCalciteInputInput: this.calciteInternalInputInputHandler, onCalciteInternalInputFocus: this.calciteInternalInputFocusHandler, readOnly: readOnly, role: "combobox", scale: this.scale, step: this.step,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setCalciteInputEl }), this.renderToggleIcon(this.open)), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-popover", { focusTrapDisabled: true, id: dialogId, label: messages.chooseTime, lang: this.effectiveLocale, onCalcitePopoverClose: this.popoverCloseHandler, onCalcitePopoverOpen: this.popoverOpenHandler, open: this.open, overlayPositioning: this.overlayPositioning, placement: this.placement, referenceElement: this.referenceElementId, triggerDisabled: true,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setCalcitePopoverEl }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-time-picker", { lang: this.effectiveLocale, messageOverrides: this.messageOverrides, numberingSystem: this.numberingSystem, onCalciteInternalTimePickerChange: this.timePickerChangeHandler, scale: this.scale, step: this.step, tabIndex: this.open ? undefined : -1, value: this.value,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setCalciteTimePickerEl })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)(_form_d7359efe_js__WEBPACK_IMPORTED_MODULE_1__.H, { component: this })));
  }
  renderToggleIcon(open) {
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS$1.toggleIcon }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: open ? "chevron-up" : "chevron-down", scale: "s" })));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "open": ["openHandler"],
    "focusTrapDisabled": ["handleFocusTrapDisabled"],
    "disabled": ["handleDisabledAndReadOnlyChange"],
    "readOnly": ["handleDisabledAndReadOnlyChange"],
    "messageOverrides": ["onMessagesChange"],
    "numberingSystem": ["numberingSystemWatcher"],
    "step": ["stepWatcher"],
    "value": ["valueWatcher"],
    "effectiveLocale": ["effectiveLocaleWatcher"]
  }; }
};
InputTimePicker.style = inputTimePickerCss;

const CSS = {
  button: "button",
  buttonBottomLeft: "button--bottom-left",
  buttonBottomRight: "button--bottom-right",
  buttonHourDown: "button--hour-down",
  buttonHourUp: "button--hour-up",
  buttonMeridiemDown: "button--meridiem-down",
  buttonMeridiemUp: "button--meridiem-up",
  buttonMinuteDown: "button--minute-down",
  buttonMinuteUp: "button--minute-up",
  buttonSecondDown: "button--second-down",
  buttonSecondUp: "button--second-up",
  buttonTopLeft: "button--top-left",
  buttonTopRight: "button--top-right",
  column: "column",
  delimiter: "delimiter",
  hour: "hour",
  input: "input",
  meridiem: "meridiem",
  minute: "minute",
  second: "second",
  showMeridiem: "show-meridiem",
  showSecond: "show-second",
  "scale-s": "scale-s",
  "scale-m": "scale-m",
  "scale-l": "scale-l",
  timePicker: "time-picker",
  meridiemStart: "meridiem--start"
};

const timePickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:inline-block}.time-picker{display:flex;-webkit-user-select:none;user-select:none;align-items:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius)}.time-picker .column{display:flex;flex-direction:column}.time-picker .meridiem--start{order:-1}.time-picker .button{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1)}.time-picker .button:hover,.time-picker .button:focus{background-color:var(--calcite-ui-foreground-2);outline:2px solid transparent;outline-offset:2px;z-index:var(--calcite-app-z-index-header);outline-offset:0}.time-picker .button:active{background-color:var(--calcite-ui-foreground-3)}.time-picker .button.top-left{border-start-start-radius:var(--calcite-border-radius)}.time-picker .button.bottom-left{border-end-start-radius:var(--calcite-border-radius)}.time-picker .button.top-right{border-start-end-radius:var(--calcite-border-radius)}.time-picker .button.bottom-right{border-end-end-radius:var(--calcite-border-radius)}.time-picker .button calcite-icon{color:var(--calcite-ui-text-3)}.time-picker .input{display:inline-flex;cursor:pointer;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium)}.time-picker .input:hover{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-2);z-index:var(--calcite-app-z-index-header)}.time-picker .input:focus,.time-picker .input:hover:focus{outline:2px solid transparent;outline-offset:2px;box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);z-index:var(--calcite-app-z-index-header);outline-offset:0}.time-picker.scale-s{font-size:var(--calcite-font-size--1)}.time-picker.scale-s .button,.time-picker.scale-s .input{padding-inline:0.75rem;padding-block:0.25rem}.time-picker.scale-s:not(.show-meridiem) .delimiter:last-child{padding-inline-end:0.75rem}.time-picker.scale-m{font-size:var(--calcite-font-size-0)}.time-picker.scale-m .button,.time-picker.scale-m .input{padding-inline:1rem;padding-block:0.5rem}.time-picker.scale-m:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1rem}.time-picker.scale-l{font-size:var(--calcite-font-size-1)}.time-picker.scale-l .button,.time-picker.scale-l .input{padding-inline:1.25rem;padding-block:0.75rem}.time-picker.scale-l:not(.show-meridiem) .delimiter:last-child{padding-inline-end:1.25rem}";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const TimePicker = class {
  constructor(hostRef) {
    (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.calciteInternalTimePickerBlur = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTimePickerBlur", 6);
    this.calciteInternalTimePickerChange = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTimePickerChange", 6);
    this.calciteInternalTimePickerFocus = (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "calciteInternalTimePickerFocus", 6);
    this.decrementHour = () => {
      const newHour = !this.hour ? 0 : this.hour === "00" ? 23 : parseInt(this.hour) - 1;
      this.setValuePart("hour", newHour);
    };
    this.decrementMeridiem = () => {
      const newMeridiem = this.meridiem === "PM" ? "AM" : "PM";
      this.setValuePart("meridiem", newMeridiem);
    };
    this.decrementMinuteOrSecond = (key) => {
      let newValue;
      if ((0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(this[key])) {
        const valueAsNumber = parseInt(this[key]);
        newValue = valueAsNumber === 0 ? 59 : valueAsNumber - 1;
      }
      else {
        newValue = 59;
      }
      this.setValuePart(key, newValue);
    };
    this.decrementMinute = () => {
      this.decrementMinuteOrSecond("minute");
    };
    this.decrementSecond = () => {
      this.decrementMinuteOrSecond("second");
    };
    this.focusHandler = (event) => {
      this.activeEl = event.currentTarget;
    };
    this.hourDownButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.decrementHour();
      }
    };
    this.hourKeyDownHandler = (event) => {
      const { key } = event;
      if (_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_4__.n.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newHour;
        if ((0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.hour)) {
          switch (this.hourCycle) {
            case "12":
              newHour =
                this.hour === "01" && keyAsNumber >= 0 && keyAsNumber <= 2
                  ? `1${keyAsNumber}`
                  : keyAsNumber;
              break;
            case "24":
              if (this.hour === "01") {
                newHour = `1${keyAsNumber}`;
              }
              else if (this.hour === "02" && keyAsNumber >= 0 && keyAsNumber <= 3) {
                newHour = `2${keyAsNumber}`;
              }
              else {
                newHour = keyAsNumber;
              }
              break;
          }
        }
        else {
          newHour = keyAsNumber;
        }
        this.setValuePart("hour", newHour);
      }
      else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("hour", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementHour();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementHour();
            break;
          case " ":
            event.preventDefault();
            break;
        }
      }
    };
    this.hourUpButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.incrementHour();
      }
    };
    this.incrementMeridiem = () => {
      const newMeridiem = this.meridiem === "AM" ? "PM" : "AM";
      this.setValuePart("meridiem", newMeridiem);
    };
    this.incrementHour = () => {
      const newHour = (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.hour)
        ? this.hour === "23"
          ? 0
          : parseInt(this.hour) + 1
        : 1;
      this.setValuePart("hour", newHour);
    };
    this.incrementMinuteOrSecond = (key) => {
      const newValue = (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(this[key])
        ? this[key] === "59"
          ? 0
          : parseInt(this[key]) + 1
        : 0;
      this.setValuePart(key, newValue);
    };
    this.incrementMinute = () => {
      this.incrementMinuteOrSecond("minute");
    };
    this.incrementSecond = () => {
      this.incrementMinuteOrSecond("second");
    };
    this.meridiemDownButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.decrementMeridiem();
      }
    };
    this.meridiemKeyDownHandler = (event) => {
      switch (event.key) {
        case "a":
          this.setValuePart("meridiem", "AM");
          break;
        case "p":
          this.setValuePart("meridiem", "PM");
          break;
        case "Backspace":
        case "Delete":
          this.setValuePart("meridiem", null);
          break;
        case "ArrowUp":
          event.preventDefault();
          this.incrementMeridiem();
          break;
        case "ArrowDown":
          event.preventDefault();
          this.decrementMeridiem();
          break;
        case " ":
          event.preventDefault();
          break;
      }
    };
    this.meridiemUpButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.incrementMeridiem();
      }
    };
    this.minuteDownButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.decrementMinute();
      }
    };
    this.minuteKeyDownHandler = (event) => {
      const { key } = event;
      if (_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_4__.n.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newMinute;
        if ((0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.minute) && this.minute.startsWith("0")) {
          const minuteAsNumber = parseInt(this.minute);
          newMinute =
            minuteAsNumber > maxTenthForMinuteAndSecond
              ? keyAsNumber
              : `${minuteAsNumber}${keyAsNumber}`;
        }
        else {
          newMinute = keyAsNumber;
        }
        this.setValuePart("minute", newMinute);
      }
      else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("minute", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementMinute();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementMinute();
            break;
          case " ":
            event.preventDefault();
            break;
        }
      }
    };
    this.minuteUpButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.incrementMinute();
      }
    };
    this.secondDownButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.decrementSecond();
      }
    };
    this.secondKeyDownHandler = (event) => {
      const { key } = event;
      if (_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_4__.n.includes(key)) {
        const keyAsNumber = parseInt(key);
        let newSecond;
        if ((0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.second) && this.second.startsWith("0")) {
          const secondAsNumber = parseInt(this.second);
          newSecond =
            secondAsNumber > maxTenthForMinuteAndSecond
              ? keyAsNumber
              : `${secondAsNumber}${keyAsNumber}`;
        }
        else {
          newSecond = keyAsNumber;
        }
        this.setValuePart("second", newSecond);
      }
      else {
        switch (key) {
          case "Backspace":
          case "Delete":
            this.setValuePart("second", null);
            break;
          case "ArrowDown":
            event.preventDefault();
            this.decrementSecond();
            break;
          case "ArrowUp":
            event.preventDefault();
            this.incrementSecond();
            break;
          case " ":
            event.preventDefault();
            break;
        }
      }
    };
    this.secondUpButtonKeyDownHandler = (event) => {
      if (this.buttonActivated(event)) {
        this.incrementSecond();
      }
    };
    this.setHourEl = (el) => (this.hourEl = el);
    this.setMeridiemEl = (el) => (this.meridiemEl = el);
    this.setMinuteEl = (el) => (this.minuteEl = el);
    this.setSecondEl = (el) => (this.secondEl = el);
    this.setValue = (value, emit = true) => {
      if (isValidTime(value)) {
        const { hour, minute, second } = parseTimeString(value);
        const { effectiveLocale: locale, numberingSystem } = this;
        const { localizedHour, localizedHourSuffix, localizedMinute, localizedMinuteSuffix, localizedSecond, localizedSecondSuffix, localizedMeridiem } = localizeTimeStringToParts({ value, locale, numberingSystem });
        this.localizedHour = localizedHour;
        this.localizedHourSuffix = localizedHourSuffix;
        this.localizedMinute = localizedMinute;
        this.localizedMinuteSuffix = localizedMinuteSuffix;
        this.localizedSecond = localizedSecond;
        this.localizedSecondSuffix = localizedSecondSuffix;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        if (localizedMeridiem) {
          this.localizedMeridiem = localizedMeridiem;
          this.meridiem = getMeridiem(this.hour);
          const formatParts = getTimeParts({ value, locale, numberingSystem });
          this.meridiemOrder = this.getMeridiemOrder(formatParts);
        }
      }
      else {
        this.hour = null;
        this.localizedHour = null;
        this.localizedHourSuffix = null;
        this.localizedMeridiem = null;
        this.localizedMinute = null;
        this.localizedMinuteSuffix = null;
        this.localizedSecond = null;
        this.localizedSecondSuffix = null;
        this.meridiem = null;
        this.minute = null;
        this.second = null;
        this.value = null;
      }
      if (emit) {
        this.calciteInternalTimePickerChange.emit();
      }
    };
    this.setValuePart = (key, value, emit = true) => {
      const { effectiveLocale: locale, numberingSystem } = this;
      if (key === "meridiem") {
        this.meridiem = value;
        if ((0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.hour)) {
          const hourAsNumber = parseInt(this.hour);
          switch (value) {
            case "AM":
              if (hourAsNumber >= 12) {
                this.hour = formatTimePart(hourAsNumber - 12);
              }
              break;
            case "PM":
              if (hourAsNumber < 12) {
                this.hour = formatTimePart(hourAsNumber + 12);
              }
              break;
          }
          this.localizedHour = localizeTimePart({
            value: this.hour,
            part: "hour",
            locale,
            numberingSystem
          });
        }
      }
      else {
        this[key] = typeof value === "number" ? formatTimePart(value) : value;
        this[`localized${capitalize(key)}`] = localizeTimePart({
          value: this[key],
          part: key,
          locale,
          numberingSystem
        });
      }
      if (this.hour && this.minute) {
        let newValue = `${this.hour}:${this.minute}`;
        if (this.showSecond) {
          newValue = `${newValue}:${this.second ?? "00"}`;
        }
        this.value = newValue;
      }
      else {
        this.value = null;
      }
      this.localizedMeridiem = this.value
        ? localizeTimeStringToParts({ value: this.value, locale, numberingSystem })
          ?.localizedMeridiem || null
        : localizeTimePart({ value: this.meridiem, part: "meridiem", locale, numberingSystem });
      if (emit) {
        this.calciteInternalTimePickerChange.emit();
      }
    };
    this.scale = "m";
    this.step = 60;
    this.numberingSystem = undefined;
    this.value = null;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = "";
    this.hour = undefined;
    this.hourCycle = undefined;
    this.localizedHour = undefined;
    this.localizedHourSuffix = undefined;
    this.localizedMeridiem = undefined;
    this.localizedMinute = undefined;
    this.localizedMinuteSuffix = undefined;
    this.localizedSecond = undefined;
    this.localizedSecondSuffix = undefined;
    this.meridiem = undefined;
    this.minute = undefined;
    this.second = undefined;
    this.showSecond = undefined;
    this.defaultMessages = undefined;
  }
  stepChange() {
    this.updateShowSecond();
  }
  valueWatcher(newValue) {
    this.setValue(newValue, false);
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleWatcher() {
    this.updateLocale();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  hostBlurHandler() {
    this.calciteInternalTimePickerBlur.emit();
  }
  hostFocusHandler() {
    this.calciteInternalTimePickerFocus.emit();
  }
  keyDownHandler(event) {
    const { defaultPrevented, key } = event;
    if (defaultPrevented) {
      return;
    }
    switch (this.activeEl) {
      case this.hourEl:
        if (key === "ArrowRight") {
          this.focusPart("minute");
          event.preventDefault();
        }
        break;
      case this.minuteEl:
        switch (key) {
          case "ArrowLeft":
            this.focusPart("hour");
            event.preventDefault();
            break;
          case "ArrowRight":
            if (this.step !== 60) {
              this.focusPart("second");
              event.preventDefault();
            }
            else if (this.hourCycle === "12") {
              this.focusPart("meridiem");
              event.preventDefault();
            }
            break;
        }
        break;
      case this.secondEl:
        switch (key) {
          case "ArrowLeft":
            this.focusPart("minute");
            event.preventDefault();
            break;
          case "ArrowRight":
            if (this.hourCycle === "12") {
              this.focusPart("meridiem");
              event.preventDefault();
            }
            break;
        }
        break;
      case this.meridiemEl:
        switch (key) {
          case "ArrowLeft":
            if (this.step !== 60) {
              this.focusPart("second");
              event.preventDefault();
            }
            else {
              this.focusPart("minute");
              event.preventDefault();
            }
            break;
        }
        break;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this.el?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  updateShowSecond() {
    this.showSecond = this.step < 60;
  }
  async focusPart(target) {
    await (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);
    this[`${target || "hour"}El`]?.focus();
  }
  buttonActivated(event) {
    const { key } = event;
    if (key === " ") {
      event.preventDefault();
    }
    return (0,_key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_4__.i)(key);
  }
  getMeridiemOrder(formatParts) {
    const locale = this.effectiveLocale;
    const isRTLKind = locale === "ar" || locale === "he";
    if (formatParts && !isRTLKind) {
      const index = formatParts.findIndex((parts) => {
        return parts.value === this.localizedMeridiem;
      });
      return index;
    }
    return 0;
  }
  updateLocale() {
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_9__.u)(this, this.effectiveLocale);
    this.hourCycle = getLocaleHourCycle(this.effectiveLocale, this.numberingSystem);
    this.setValue(this.value, false);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.c)(this);
    this.updateLocale();
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_9__.c)(this);
    this.updateShowSecond();
    this.meridiemOrder = this.getMeridiemOrder(getTimeParts({
      value: "0:00:00",
      locale: this.effectiveLocale,
      numberingSystem: this.numberingSystem
    }));
  }
  async componentWillLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.s)(this);
    await (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_9__.s)(this);
  }
  componentDidLoad() {
    (0,_loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_6__.a)(this);
  }
  disconnectedCallback() {
    (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.d)(this);
    (0,_t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_9__.d)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const hourIsNumber = (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.hour);
    const iconScale = this.scale === "s" || this.scale === "m" ? "s" : "m";
    const minuteIsNumber = (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.minute);
    const secondIsNumber = (0,_locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_7__.i)(this.second);
    const showMeridiem = this.hourCycle === "12";
    return ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.timePicker]: true,
        [CSS.showMeridiem]: showMeridiem,
        [CSS.showSecond]: this.showSecond,
        [CSS[`scale-${this.scale}`]]: true
      }, dir: "ltr" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.column, role: "group" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.hourUp, class: {
        [CSS.button]: true,
        [CSS.buttonHourUp]: true,
        [CSS.buttonTopLeft]: true
      }, onClick: this.incrementHour, onKeyDown: this.hourUpButtonKeyDownHandler, role: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-up", scale: iconScale })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.hour, "aria-valuemax": "23", "aria-valuemin": "1", "aria-valuenow": (hourIsNumber && parseInt(this.hour)) || "0", "aria-valuetext": this.hour, class: {
        [CSS.input]: true,
        [CSS.hour]: true
      }, onFocus: this.focusHandler, onKeyDown: this.hourKeyDownHandler, role: "spinbutton", tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setHourEl }, this.localizedHour || "--"), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.hourDown, class: {
        [CSS.button]: true,
        [CSS.buttonHourDown]: true,
        [CSS.buttonBottomLeft]: true
      }, onClick: this.decrementHour, onKeyDown: this.hourDownButtonKeyDownHandler, role: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-down", scale: iconScale }))), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.delimiter }, this.localizedHourSuffix), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.column, role: "group" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.minuteUp, class: {
        [CSS.button]: true,
        [CSS.buttonMinuteUp]: true
      }, onClick: this.incrementMinute, onKeyDown: this.minuteUpButtonKeyDownHandler, role: "button", tabIndex: -1 }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-up", scale: iconScale })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.minute, "aria-valuemax": "12", "aria-valuemin": "1", "aria-valuenow": (minuteIsNumber && parseInt(this.minute)) || "0", "aria-valuetext": this.minute, class: {
        [CSS.input]: true,
        [CSS.minute]: true
      }, onFocus: this.focusHandler, onKeyDown: this.minuteKeyDownHandler, role: "spinbutton", tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setMinuteEl }, this.localizedMinute || "--"), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.minuteDown, class: {
        [CSS.button]: true,
        [CSS.buttonMinuteDown]: true
      }, onClick: this.decrementMinute, onKeyDown: this.minuteDownButtonKeyDownHandler, role: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-down", scale: iconScale }))), this.showSecond && (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.delimiter }, this.localizedMinuteSuffix), this.showSecond && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.column, role: "group" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.secondUp, class: {
        [CSS.button]: true,
        [CSS.buttonSecondUp]: true
      }, onClick: this.incrementSecond, onKeyDown: this.secondUpButtonKeyDownHandler, role: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-up", scale: iconScale })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.second, "aria-valuemax": "59", "aria-valuemin": "0", "aria-valuenow": (secondIsNumber && parseInt(this.second)) || "0", "aria-valuetext": this.second, class: {
        [CSS.input]: true,
        [CSS.second]: true
      }, onFocus: this.focusHandler, onKeyDown: this.secondKeyDownHandler, role: "spinbutton", tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setSecondEl }, this.localizedSecond || "--"), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.secondDown, class: {
        [CSS.button]: true,
        [CSS.buttonSecondDown]: true
      }, onClick: this.decrementSecond, onKeyDown: this.secondDownButtonKeyDownHandler, role: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-down", scale: iconScale })))), this.localizedSecondSuffix && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: CSS.delimiter }, this.localizedSecondSuffix)), showMeridiem && ((0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: {
        [CSS.column]: true,
        [CSS.meridiemStart]: this.meridiemOrder === 0
      }, role: "group" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.meridiemUp, class: {
        [CSS.button]: true,
        [CSS.buttonMeridiemUp]: true,
        [CSS.buttonTopRight]: true
      }, onClick: this.incrementMeridiem, onKeyDown: this.meridiemUpButtonKeyDownHandler, role: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-up", scale: iconScale })), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.meridiem, "aria-valuemax": "2", "aria-valuemin": "1", "aria-valuenow": (this.meridiem === "PM" && "2") || "1", "aria-valuetext": this.meridiem, class: {
        [CSS.input]: true,
        [CSS.meridiem]: true
      }, onFocus: this.focusHandler, onKeyDown: this.meridiemKeyDownHandler, role: "spinbutton", tabIndex: 0,
      // eslint-disable-next-line react/jsx-sort-props
      ref: this.setMeridiemEl }, this.localizedMeridiem || "--"), (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-label": this.messages.meridiemDown, class: {
        [CSS.button]: true,
        [CSS.buttonMeridiemDown]: true,
        [CSS.buttonBottomRight]: true
      }, onClick: this.decrementMeridiem, onKeyDown: this.meridiemDownButtonKeyDownHandler, role: "button" }, (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.h)("calcite-icon", { icon: "chevron-down", scale: iconScale }))))));
  }
  static get delegatesFocus() { return true; }
  static get assetsDirs() { return ["assets"]; }
  get el() { return (0,_index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_0__.a)(this); }
  static get watchers() { return {
    "step": ["stepChange"],
    "value": ["valueWatcher"],
    "messageOverrides": ["onMessagesChange"],
    "effectiveLocale": ["effectiveLocaleWatcher"]
  }; }
};
TimePicker.style = timePickerCss;




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/esm/calcite-input-time-picker_2.entry.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/esm/calcite-input-time-picker_2.entry.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcite_input_time_picker": () => (/* reexport safe */ _calcite_input_time_picker_calcite_time_picker_330adb65_js__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   "calcite_time_picker": () => (/* reexport safe */ _calcite_input_time_picker_calcite_time_picker_330adb65_js__WEBPACK_IMPORTED_MODULE_0__.T)
/* harmony export */ });
/* harmony import */ var _calcite_input_time_picker_calcite_time_picker_330adb65_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcite-input-time-picker.calcite-time-picker-330adb65.js */ "./node_modules/@esri/calcite-components/dist/esm/calcite-input-time-picker.calcite-time-picker-330adb65.js");
/* harmony import */ var _index_c7e05e63_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-c7e05e63.js */ "./node_modules/@esri/calcite-components/dist/esm/index-c7e05e63.js");
/* harmony import */ var _form_d7359efe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-d7359efe.js */ "./node_modules/@esri/calcite-components/dist/esm/form-d7359efe.js");
/* harmony import */ var _dom_1fb94ff6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-1fb94ff6.js */ "./node_modules/@esri/calcite-components/dist/esm/dom-1fb94ff6.js");
/* harmony import */ var _guid_7136974b_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guid-7136974b.js */ "./node_modules/@esri/calcite-components/dist/esm/guid-7136974b.js");
/* harmony import */ var _resources_342e12d1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources-342e12d1.js */ "./node_modules/@esri/calcite-components/dist/esm/resources-342e12d1.js");
/* harmony import */ var _interactive_0eb13600_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interactive-0eb13600.js */ "./node_modules/@esri/calcite-components/dist/esm/interactive-0eb13600.js");
/* harmony import */ var _browser_99bc62cf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./browser-99bc62cf.js */ "./node_modules/@esri/calcite-components/dist/esm/browser-99bc62cf.js");
/* harmony import */ var _key_8ff0d101_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./key-8ff0d101.js */ "./node_modules/@esri/calcite-components/dist/esm/key-8ff0d101.js");
/* harmony import */ var _label_9d2eb334_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./label-9d2eb334.js */ "./node_modules/@esri/calcite-components/dist/esm/label-9d2eb334.js");
/* harmony import */ var _loadable_8058e300_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loadable-8058e300.js */ "./node_modules/@esri/calcite-components/dist/esm/loadable-8058e300.js");
/* harmony import */ var _locale_a35648cd_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locale-a35648cd.js */ "./node_modules/@esri/calcite-components/dist/esm/locale-a35648cd.js");
/* harmony import */ var _observers_95e97fae_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./observers-95e97fae.js */ "./node_modules/@esri/calcite-components/dist/esm/observers-95e97fae.js");
/* harmony import */ var _focusTrapComponent_07adcb3f_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./focusTrapComponent-07adcb3f.js */ "./node_modules/@esri/calcite-components/dist/esm/focusTrapComponent-07adcb3f.js");
/* harmony import */ var _t9n_fac13394_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./t9n-fac13394.js */ "./node_modules/@esri/calcite-components/dist/esm/t9n-fac13394.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */

















/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvNzEyMjA0YmJjNDQwZWY3ZWUwNDVmZmNlYThjOGM1NzkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNkc7QUFDUztBQUN2RTtBQUM2RTtBQUNsRDtBQUN1QjtBQUNtQjtBQUNzRztBQUMvRjtBQUNBOztBQUUzSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzREFBaUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsS0FBSyxHQUFHLE9BQU8sR0FBRyxPQUFPO0FBQ3ZDO0FBQ0EsWUFBWSxLQUFLLEdBQUcsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELE1BQU07QUFDeEQsb0RBQW9ELE1BQU07QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELE1BQU07QUFDMUQsb0RBQW9ELE1BQU07QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELE1BQU07QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE1BQU07QUFDN0I7QUFDQTtBQUNBLE9BQU8sc0RBQWE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFhO0FBQ2pDLHNCQUFzQixzREFBYTtBQUNuQyxzQkFBc0Isc0RBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0RBQWE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzQ0FBc0M7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHVEQUF1RDtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxVQUFVLDZCQUE2QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxnQ0FBZ0M7QUFDckU7QUFDQTtBQUNBO0FBQ0EsVUFBVSw2QkFBNkI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0NBQWdDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNkJBQTZCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsdUJBQXVCO0FBQ2pDLHlCQUF5QiwrQkFBK0IsR0FBRyxpQ0FBaUM7QUFDNUY7QUFDQSx5QkFBeUIsNERBQTREO0FBQ3JGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUMsd0JBQXdCLEVBQUUsVUFBVSxJQUFJLFdBQVcsSUFBSSxZQUFZLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSTtBQUMvRixrQ0FBa0MsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLE9BQU8sSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJOztBQUVsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7O0FBRWQsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEIseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpELEdBQUc7QUFDSDs7QUFFQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDLHdDQUF3Qzs7QUFFeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLG1MQUFtTDs7QUFFM047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0EsTUFBTTtBQUNOOztBQUVBLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FB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d0Isa0VBQW1CLFNBQVMsa0VBQWlCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdEQUFlO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsNkJBQTZCLEdBQUcsK0JBQStCO0FBQ3BHO0FBQ0EscUNBQXFDLHFDQUFxQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsc0RBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0JBQXdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNEQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEIsVUFBVSx3REFBbUI7QUFDN0I7QUFDQTtBQUNBLFlBQVksc0RBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZSxFQUFFLFlBQVk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEIsVUFBVSx3REFBbUI7QUFDN0I7QUFDQTtBQUNBLFlBQVksc0RBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZSxFQUFFLFlBQVk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q3RDO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUdBQW1HLEVBQUUscURBQUMsbUJBQW1CLHNDQUFzQyxJQUFJLHFEQUFDLFdBQVc7QUFDdEw7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLCtCQUErQixtQ0FBbUMscURBQUMsV0FBVztBQUM5RTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFHQUFxRyxFQUFFLHFEQUFDLG1CQUFtQix3Q0FBd0M7QUFDMUs7QUFDQSxnQ0FBZ0M7QUFDaEMsNEJBQTRCO0FBQzVCLGFBQWEsT0FBTyxxREFBVTtBQUM5QiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcDRFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1STtBQUMxRztBQUNEO0FBQ0Q7QUFDQztBQUNLO0FBQ0U7QUFDSjtBQUNKO0FBQ0U7QUFDRztBQUNGO0FBQ0c7QUFDUztBQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9AZXNyaS9jYWxjaXRlLWNvbXBvbmVudHMvZGlzdC9lc20vY2FsY2l0ZS1pbnB1dC10aW1lLXBpY2tlci5jYWxjaXRlLXRpbWUtcGlja2VyLTMzMGFkYjY1LmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvQGVzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Rpc3QvZXNtL2NhbGNpdGUtaW5wdXQtdGltZS1waWNrZXJfMi5lbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0VzcmkvY2FsY2l0ZS1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS40LjNcbiAqL1xuaW1wb3J0IHsgciBhcyByZWdpc3Rlckluc3RhbmNlLCBjIGFzIGNyZWF0ZUV2ZW50LCBoLCBIIGFzIEhvc3QsIGEgYXMgZ2V0RWxlbWVudCB9IGZyb20gJy4vaW5kZXgtYzdlMDVlNjMuanMnO1xuaW1wb3J0IHsgcyBhcyBzdWJtaXRGb3JtLCBjIGFzIGNvbm5lY3RGb3JtLCBkIGFzIGRpc2Nvbm5lY3RGb3JtLCBIIGFzIEhpZGRlbkZvcm1JbnB1dFNsb3QgfSBmcm9tICcuL2Zvcm0tZDczNTllZmUuanMnO1xuaW1wb3J0IHsgZyBhcyBndWlkIH0gZnJvbSAnLi9ndWlkLTcxMzY5NzRiLmpzJztcbmltcG9ydCB7IGMgYXMgY29ubmVjdEludGVyYWN0aXZlLCBkIGFzIGRpc2Nvbm5lY3RJbnRlcmFjdGl2ZSwgdSBhcyB1cGRhdGVIb3N0SW50ZXJhY3Rpb24gfSBmcm9tICcuL2ludGVyYWN0aXZlLTBlYjEzNjAwLmpzJztcbmltcG9ydCB7IG4gYXMgbnVtYmVyS2V5cywgaSBhcyBpc0FjdGl2YXRpb25LZXkgfSBmcm9tICcuL2tleS04ZmYwZDEwMS5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbm5lY3RMYWJlbCwgZCBhcyBkaXNjb25uZWN0TGFiZWwsIGcgYXMgZ2V0TGFiZWxUZXh0IH0gZnJvbSAnLi9sYWJlbC05ZDJlYjMzNC5qcyc7XG5pbXBvcnQgeyBjIGFzIGNvbXBvbmVudExvYWRlZCwgcyBhcyBzZXRVcExvYWRhYmxlQ29tcG9uZW50LCBhIGFzIHNldENvbXBvbmVudExvYWRlZCB9IGZyb20gJy4vbG9hZGFibGUtODA1OGUzMDAuanMnO1xuaW1wb3J0IHsgYiBhcyBnZXREYXRlVGltZUZvcm1hdCwgaSBhcyBpc1ZhbGlkTnVtYmVyLCBlIGFzIGdldFN1cHBvcnRlZE51bWJlcmluZ1N5c3RlbSwgbiBhcyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIsIGcgYXMgZ2V0U3VwcG9ydGVkTG9jYWxlLCBjIGFzIGNvbm5lY3RMb2NhbGl6ZWQsIGQgYXMgZGlzY29ubmVjdExvY2FsaXplZCB9IGZyb20gJy4vbG9jYWxlLWEzNTY0OGNkLmpzJztcbmltcG9ydCB7IGQgYXMgZGVhY3RpdmF0ZUZvY3VzVHJhcCwgYSBhcyBhY3RpdmF0ZUZvY3VzVHJhcCwgYyBhcyBjb25uZWN0Rm9jdXNUcmFwIH0gZnJvbSAnLi9mb2N1c1RyYXBDb21wb25lbnQtMDdhZGNiM2YuanMnO1xuaW1wb3J0IHsgYyBhcyBjb25uZWN0TWVzc2FnZXMsIHMgYXMgc2V0VXBNZXNzYWdlcywgZCBhcyBkaXNjb25uZWN0TWVzc2FnZXMsIHUgYXMgdXBkYXRlTWVzc2FnZXMgfSBmcm9tICcuL3Q5bi1mYWMxMzM5NC5qcyc7XG5cbmNvbnN0IG1heFRlbnRoRm9yTWludXRlQW5kU2Vjb25kID0gNTtcbmZ1bmN0aW9uIGNyZWF0ZUxvY2FsZURhdGVUaW1lRm9ybWF0dGVyKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBpbmNsdWRlU2Vjb25kcyA9IHRydWUpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgIHRpbWVab25lOiBcIlVUQ1wiLFxuICAgIG51bWJlcmluZ1N5c3RlbTogZ2V0U3VwcG9ydGVkTnVtYmVyaW5nU3lzdGVtKG51bWJlcmluZ1N5c3RlbSlcbiAgfTtcbiAgaWYgKGluY2x1ZGVTZWNvbmRzKSB7XG4gICAgb3B0aW9ucy5zZWNvbmQgPSBcIjItZGlnaXRcIjtcbiAgfVxuICByZXR1cm4gZ2V0RGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWVQYXJ0KG51bWJlcikge1xuICBjb25zdCBudW1iZXJBc1N0cmluZyA9IG51bWJlci50b1N0cmluZygpO1xuICByZXR1cm4gbnVtYmVyID49IDAgJiYgbnVtYmVyIDw9IDkgPyBudW1iZXJBc1N0cmluZy5wYWRTdGFydCgyLCBcIjBcIikgOiBudW1iZXJBc1N0cmluZztcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWVTdHJpbmcodmFsdWUpIHtcbiAgaWYgKCFpc1ZhbGlkVGltZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBbaG91clN0cmluZywgbWludXRlU3RyaW5nLCBzZWNvbmRTdHJpbmddID0gdmFsdWUuc3BsaXQoXCI6XCIpO1xuICBjb25zdCBob3VyID0gZm9ybWF0VGltZVBhcnQocGFyc2VJbnQoaG91clN0cmluZykpO1xuICBjb25zdCBtaW51dGUgPSBmb3JtYXRUaW1lUGFydChwYXJzZUludChtaW51dGVTdHJpbmcpKTtcbiAgaWYgKHNlY29uZFN0cmluZykge1xuICAgIGNvbnN0IHNlY29uZCA9IGZvcm1hdFRpbWVQYXJ0KHBhcnNlSW50KHNlY29uZFN0cmluZykpO1xuICAgIHJldHVybiBgJHtob3VyfToke21pbnV0ZX06JHtzZWNvbmR9YDtcbiAgfVxuICByZXR1cm4gYCR7aG91cn06JHttaW51dGV9YDtcbn1cbmZ1bmN0aW9uIGdldExvY2FsZUhvdXJDeWNsZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSkge1xuICBjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVMb2NhbGVEYXRlVGltZUZvcm1hdHRlcihsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSk7XG4gIGNvbnN0IHBhcnRzID0gZm9ybWF0dGVyLmZvcm1hdFRvUGFydHMobmV3IERhdGUoRGF0ZS5VVEMoMCwgMCwgMCwgMCwgMCwgMCkpKTtcbiAgcmV0dXJuIGdldExvY2FsaXplZFRpbWVQYXJ0KFwibWVyaWRpZW1cIiwgcGFydHMpID8gXCIxMlwiIDogXCIyNFwiO1xufVxuZnVuY3Rpb24gZ2V0TG9jYWxpemVkVGltZVBhcnQocGFydCwgcGFydHMpIHtcbiAgaWYgKCFwYXJ0IHx8ICFwYXJ0cykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChwYXJ0ID09PSBcImhvdXJTdWZmaXhcIikge1xuICAgIGNvbnN0IGhvdXJJbmRleCA9IHBhcnRzLmluZGV4T2YocGFydHMuZmluZCgoeyB0eXBlIH0pID0+IHR5cGUgPT09IFwiaG91clwiKSk7XG4gICAgY29uc3QgbWludXRlSW5kZXggPSBwYXJ0cy5pbmRleE9mKHBhcnRzLmZpbmQoKHsgdHlwZSB9KSA9PiB0eXBlID09PSBcIm1pbnV0ZVwiKSk7XG4gICAgY29uc3QgaG91clN1ZmZpeCA9IHBhcnRzW2hvdXJJbmRleCArIDFdO1xuICAgIHJldHVybiBob3VyU3VmZml4ICYmIGhvdXJTdWZmaXgudHlwZSA9PT0gXCJsaXRlcmFsXCIgJiYgbWludXRlSW5kZXggLSBob3VySW5kZXggPT09IDJcbiAgICAgID8gaG91clN1ZmZpeC52YWx1ZT8udHJpbSgpIHx8IG51bGxcbiAgICAgIDogbnVsbDtcbiAgfVxuICBpZiAocGFydCA9PT0gXCJtaW51dGVTdWZmaXhcIikge1xuICAgIGNvbnN0IG1pbnV0ZUluZGV4ID0gcGFydHMuaW5kZXhPZihwYXJ0cy5maW5kKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gXCJtaW51dGVcIikpO1xuICAgIGNvbnN0IHNlY29uZEluZGV4ID0gcGFydHMuaW5kZXhPZihwYXJ0cy5maW5kKCh7IHR5cGUgfSkgPT4gdHlwZSA9PT0gXCJzZWNvbmRcIikpO1xuICAgIGNvbnN0IG1pbnV0ZVN1ZmZpeCA9IHBhcnRzW21pbnV0ZUluZGV4ICsgMV07XG4gICAgcmV0dXJuIG1pbnV0ZVN1ZmZpeCAmJiBtaW51dGVTdWZmaXgudHlwZSA9PT0gXCJsaXRlcmFsXCIgJiYgc2Vjb25kSW5kZXggLSBtaW51dGVJbmRleCA9PT0gMlxuICAgICAgPyBtaW51dGVTdWZmaXgudmFsdWU/LnRyaW0oKSB8fCBudWxsXG4gICAgICA6IG51bGw7XG4gIH1cbiAgaWYgKHBhcnQgPT09IFwic2Vjb25kU3VmZml4XCIpIHtcbiAgICBjb25zdCBzZWNvbmRJbmRleCA9IHBhcnRzLmluZGV4T2YocGFydHMuZmluZCgoeyB0eXBlIH0pID0+IHR5cGUgPT09IFwic2Vjb25kXCIpKTtcbiAgICBjb25zdCBzZWNvbmRTdWZmaXggPSBwYXJ0c1tzZWNvbmRJbmRleCArIDFdO1xuICAgIHJldHVybiBzZWNvbmRTdWZmaXggJiYgc2Vjb25kU3VmZml4LnR5cGUgPT09IFwibGl0ZXJhbFwiID8gc2Vjb25kU3VmZml4LnZhbHVlPy50cmltKCkgfHwgbnVsbCA6IG51bGw7XG4gIH1cbiAgcmV0dXJuIHBhcnRzLmZpbmQoKHsgdHlwZSB9KSA9PiAocGFydCA9PSBcIm1lcmlkaWVtXCIgPyB0eXBlID09PSBcImRheVBlcmlvZFwiIDogdHlwZSA9PT0gcGFydCkpPy52YWx1ZSB8fCBudWxsO1xufVxuZnVuY3Rpb24gZ2V0TWVyaWRpZW0oaG91cikge1xuICBpZiAoIWlzVmFsaWROdW1iZXIoaG91cikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBob3VyQXNOdW1iZXIgPSBwYXJzZUludChob3VyKTtcbiAgcmV0dXJuIGhvdXJBc051bWJlciA+PSAwICYmIGhvdXJBc051bWJlciA8PSAxMSA/IFwiQU1cIiA6IFwiUE1cIjtcbn1cbmZ1bmN0aW9uIGlzVmFsaWRUaW1lKHZhbHVlKSB7XG4gIGlmICghdmFsdWUgfHwgdmFsdWUuc3RhcnRzV2l0aChcIjpcIikgfHwgdmFsdWUuZW5kc1dpdGgoXCI6XCIpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHNwbGl0VmFsdWUgPSB2YWx1ZS5zcGxpdChcIjpcIik7XG4gIGNvbnN0IHZhbGlkTGVuZ3RoID0gc3BsaXRWYWx1ZS5sZW5ndGggPiAxICYmIHNwbGl0VmFsdWUubGVuZ3RoIDwgNDtcbiAgaWYgKCF2YWxpZExlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBbaG91ciwgbWludXRlLCBzZWNvbmRdID0gc3BsaXRWYWx1ZTtcbiAgY29uc3QgaG91ckFzTnVtYmVyID0gcGFyc2VJbnQoc3BsaXRWYWx1ZVswXSk7XG4gIGNvbnN0IG1pbnV0ZUFzTnVtYmVyID0gcGFyc2VJbnQoc3BsaXRWYWx1ZVsxXSk7XG4gIGNvbnN0IHNlY29uZEFzTnVtYmVyID0gcGFyc2VJbnQoc3BsaXRWYWx1ZVsyXSk7XG4gIGNvbnN0IGhvdXJWYWxpZCA9IGlzVmFsaWROdW1iZXIoaG91cikgJiYgaG91ckFzTnVtYmVyID49IDAgJiYgaG91ckFzTnVtYmVyIDwgMjQ7XG4gIGNvbnN0IG1pbnV0ZVZhbGlkID0gaXNWYWxpZE51bWJlcihtaW51dGUpICYmIG1pbnV0ZUFzTnVtYmVyID49IDAgJiYgbWludXRlQXNOdW1iZXIgPCA2MDtcbiAgY29uc3Qgc2Vjb25kVmFsaWQgPSBpc1ZhbGlkTnVtYmVyKHNlY29uZCkgJiYgc2Vjb25kQXNOdW1iZXIgPj0gMCAmJiBzZWNvbmRBc051bWJlciA8IDYwO1xuICBpZiAoKGhvdXJWYWxpZCAmJiBtaW51dGVWYWxpZCAmJiAhc2Vjb25kKSB8fCAoaG91clZhbGlkICYmIG1pbnV0ZVZhbGlkICYmIHNlY29uZFZhbGlkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5mdW5jdGlvbiBpc1ZhbGlkVGltZVBhcnQodmFsdWUsIHBhcnQpIHtcbiAgaWYgKHBhcnQgPT09IFwibWVyaWRpZW1cIikge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gXCJBTVwiIHx8IHZhbHVlID09PSBcIlBNXCI7XG4gIH1cbiAgaWYgKCFpc1ZhbGlkTnVtYmVyKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCB2YWx1ZUFzTnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcbiAgcmV0dXJuIHBhcnQgPT09IFwiaG91clwiID8gdmFsdWVBc051bWJlciA+PSAwICYmIHZhbHVlQXNOdW1iZXIgPCAyNCA6IHZhbHVlQXNOdW1iZXIgPj0gMCAmJiB2YWx1ZUFzTnVtYmVyIDwgNjA7XG59XG5mdW5jdGlvbiBsb2NhbGl6ZVRpbWVQYXJ0KHsgdmFsdWUsIHBhcnQsIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0pIHtcbiAgaWYgKCFpc1ZhbGlkVGltZVBhcnQodmFsdWUsIHBhcnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHZhbHVlQXNOdW1iZXIgPSBwYXJzZUludCh2YWx1ZSk7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQygwLCAwLCAwLCBwYXJ0ID09PSBcImhvdXJcIiA/IHZhbHVlQXNOdW1iZXIgOiBwYXJ0ID09PSBcIm1lcmlkaWVtXCIgPyAodmFsdWUgPT09IFwiQU1cIiA/IDAgOiAxMikgOiAwLCBwYXJ0ID09PSBcIm1pbnV0ZVwiID8gdmFsdWVBc051bWJlciA6IDAsIHBhcnQgPT09IFwic2Vjb25kXCIgPyB2YWx1ZUFzTnVtYmVyIDogMCkpO1xuICBpZiAoIWRhdGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZm9ybWF0dGVyID0gY3JlYXRlTG9jYWxlRGF0ZVRpbWVGb3JtYXR0ZXIobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0pO1xuICBjb25zdCBwYXJ0cyA9IGZvcm1hdHRlci5mb3JtYXRUb1BhcnRzKGRhdGUpO1xuICByZXR1cm4gZ2V0TG9jYWxpemVkVGltZVBhcnQocGFydCwgcGFydHMpO1xufVxuZnVuY3Rpb24gbG9jYWxpemVUaW1lU3RyaW5nKHsgdmFsdWUsIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBpbmNsdWRlU2Vjb25kcyA9IHRydWUgfSkge1xuICBpZiAoIWlzVmFsaWRUaW1lKHZhbHVlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQgPSBcIjBcIiB9ID0gcGFyc2VUaW1lU3RyaW5nKHZhbHVlKTtcbiAgY29uc3QgZGF0ZUZyb21UaW1lU3RyaW5nID0gbmV3IERhdGUoRGF0ZS5VVEMoMCwgMCwgMCwgcGFyc2VJbnQoaG91ciksIHBhcnNlSW50KG1pbnV0ZSksIHBhcnNlSW50KHNlY29uZCkpKTtcbiAgY29uc3QgZm9ybWF0dGVyID0gY3JlYXRlTG9jYWxlRGF0ZVRpbWVGb3JtYXR0ZXIobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIGluY2x1ZGVTZWNvbmRzKTtcbiAgcmV0dXJuIGZvcm1hdHRlcj8uZm9ybWF0KGRhdGVGcm9tVGltZVN0cmluZykgfHwgbnVsbDtcbn1cbmZ1bmN0aW9uIGxvY2FsaXplVGltZVN0cmluZ1RvUGFydHMoeyB2YWx1ZSwgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSkge1xuICBpZiAoIWlzVmFsaWRUaW1lKHZhbHVlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQgPSBcIjBcIiB9ID0gcGFyc2VUaW1lU3RyaW5nKHZhbHVlKTtcbiAgY29uc3QgZGF0ZUZyb21UaW1lU3RyaW5nID0gbmV3IERhdGUoRGF0ZS5VVEMoMCwgMCwgMCwgcGFyc2VJbnQoaG91ciksIHBhcnNlSW50KG1pbnV0ZSksIHBhcnNlSW50KHNlY29uZCkpKTtcbiAgaWYgKGRhdGVGcm9tVGltZVN0cmluZykge1xuICAgIGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZUxvY2FsZURhdGVUaW1lRm9ybWF0dGVyKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtKTtcbiAgICBjb25zdCBwYXJ0cyA9IGZvcm1hdHRlci5mb3JtYXRUb1BhcnRzKGRhdGVGcm9tVGltZVN0cmluZyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2FsaXplZEhvdXI6IGdldExvY2FsaXplZFRpbWVQYXJ0KFwiaG91clwiLCBwYXJ0cyksXG4gICAgICBsb2NhbGl6ZWRIb3VyU3VmZml4OiBnZXRMb2NhbGl6ZWRUaW1lUGFydChcImhvdXJTdWZmaXhcIiwgcGFydHMpLFxuICAgICAgbG9jYWxpemVkTWludXRlOiBnZXRMb2NhbGl6ZWRUaW1lUGFydChcIm1pbnV0ZVwiLCBwYXJ0cyksXG4gICAgICBsb2NhbGl6ZWRNaW51dGVTdWZmaXg6IGdldExvY2FsaXplZFRpbWVQYXJ0KFwibWludXRlU3VmZml4XCIsIHBhcnRzKSxcbiAgICAgIGxvY2FsaXplZFNlY29uZDogZ2V0TG9jYWxpemVkVGltZVBhcnQoXCJzZWNvbmRcIiwgcGFydHMpLFxuICAgICAgbG9jYWxpemVkU2Vjb25kU3VmZml4OiBnZXRMb2NhbGl6ZWRUaW1lUGFydChcInNlY29uZFN1ZmZpeFwiLCBwYXJ0cyksXG4gICAgICBsb2NhbGl6ZWRNZXJpZGllbTogZ2V0TG9jYWxpemVkVGltZVBhcnQoXCJtZXJpZGllbVwiLCBwYXJ0cylcbiAgICB9O1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gZ2V0VGltZVBhcnRzKHsgdmFsdWUsIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0pIHtcbiAgaWYgKCFpc1ZhbGlkVGltZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kID0gXCIwXCIgfSA9IHBhcnNlVGltZVN0cmluZyh2YWx1ZSk7XG4gIGNvbnN0IGRhdGVGcm9tVGltZVN0cmluZyA9IG5ldyBEYXRlKERhdGUuVVRDKDAsIDAsIDAsIHBhcnNlSW50KGhvdXIpLCBwYXJzZUludChtaW51dGUpLCBwYXJzZUludChzZWNvbmQpKSk7XG4gIGlmIChkYXRlRnJvbVRpbWVTdHJpbmcpIHtcbiAgICBjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVMb2NhbGVEYXRlVGltZUZvcm1hdHRlcihsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSk7XG4gICAgY29uc3QgcGFydHMgPSBmb3JtYXR0ZXIuZm9ybWF0VG9QYXJ0cyhkYXRlRnJvbVRpbWVTdHJpbmcpO1xuICAgIHJldHVybiBwYXJ0cztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZVN0cmluZyh2YWx1ZSkge1xuICBpZiAoaXNWYWxpZFRpbWUodmFsdWUpKSB7XG4gICAgY29uc3QgW2hvdXIsIG1pbnV0ZSwgc2Vjb25kXSA9IHZhbHVlLnNwbGl0KFwiOlwiKTtcbiAgICByZXR1cm4ge1xuICAgICAgaG91cixcbiAgICAgIG1pbnV0ZSxcbiAgICAgIHNlY29uZFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBob3VyOiBudWxsLFxuICAgIG1pbnV0ZTogbnVsbCxcbiAgICBzZWNvbmQ6IG51bGxcbiAgfTtcbn1cbmZ1bmN0aW9uIHRvSVNPVGltZVN0cmluZyh2YWx1ZSwgaW5jbHVkZVNlY29uZHMgPSB0cnVlKSB7XG4gIGlmICghaXNWYWxpZFRpbWUodmFsdWUpKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgY29uc3QgeyBob3VyLCBtaW51dGUsIHNlY29uZCB9ID0gcGFyc2VUaW1lU3RyaW5nKHZhbHVlKTtcbiAgbGV0IGlzb1RpbWVTdHJpbmcgPSBgJHtmb3JtYXRUaW1lUGFydChwYXJzZUludChob3VyKSl9OiR7Zm9ybWF0VGltZVBhcnQocGFyc2VJbnQobWludXRlKSl9YDtcbiAgaWYgKGluY2x1ZGVTZWNvbmRzKSB7XG4gICAgaXNvVGltZVN0cmluZyArPSBgOiR7Zm9ybWF0VGltZVBhcnQocGFyc2VJbnQoKGluY2x1ZGVTZWNvbmRzICYmIHNlY29uZCkgfHwgXCIwXCIpKX1gO1xuICB9XG4gIHJldHVybiBpc29UaW1lU3RyaW5nO1xufVxuXG5jb25zdCBDU1MkMSA9IHtcbiAgdG9nZ2xlSWNvbjogXCJ0b2dnbGUtaWNvblwiXG59O1xuXG52YXIgU0VDT05EU19BX01JTlVURSA9IDYwO1xudmFyIFNFQ09ORFNfQV9IT1VSID0gU0VDT05EU19BX01JTlVURSAqIDYwO1xudmFyIFNFQ09ORFNfQV9EQVkgPSBTRUNPTkRTX0FfSE9VUiAqIDI0O1xudmFyIFNFQ09ORFNfQV9XRUVLID0gU0VDT05EU19BX0RBWSAqIDc7XG52YXIgTUlMTElTRUNPTkRTX0FfU0VDT05EID0gMWUzO1xudmFyIE1JTExJU0VDT05EU19BX01JTlVURSA9IFNFQ09ORFNfQV9NSU5VVEUgKiBNSUxMSVNFQ09ORFNfQV9TRUNPTkQ7XG52YXIgTUlMTElTRUNPTkRTX0FfSE9VUiA9IFNFQ09ORFNfQV9IT1VSICogTUlMTElTRUNPTkRTX0FfU0VDT05EO1xudmFyIE1JTExJU0VDT05EU19BX0RBWSA9IFNFQ09ORFNfQV9EQVkgKiBNSUxMSVNFQ09ORFNfQV9TRUNPTkQ7XG52YXIgTUlMTElTRUNPTkRTX0FfV0VFSyA9IFNFQ09ORFNfQV9XRUVLICogTUlMTElTRUNPTkRTX0FfU0VDT05EOyAvLyBFbmdsaXNoIGxvY2FsZXNcblxudmFyIE1TID0gJ21pbGxpc2Vjb25kJztcbnZhciBTID0gJ3NlY29uZCc7XG52YXIgTUlOID0gJ21pbnV0ZSc7XG52YXIgSCA9ICdob3VyJztcbnZhciBEID0gJ2RheSc7XG52YXIgVyA9ICd3ZWVrJztcbnZhciBNID0gJ21vbnRoJztcbnZhciBRID0gJ3F1YXJ0ZXInO1xudmFyIFkgPSAneWVhcic7XG52YXIgREFURSA9ICdkYXRlJztcbnZhciBGT1JNQVRfREVGQVVMVCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzWic7XG52YXIgSU5WQUxJRF9EQVRFX1NUUklORyA9ICdJbnZhbGlkIERhdGUnOyAvLyByZWdleFxuXG52YXIgUkVHRVhfUEFSU0UgPSAvXihcXGR7NH0pWy0vXT8oXFxkezEsMn0pP1stL10/KFxcZHswLDJ9KVtUdFxcc10qKFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Oj8oXFxkezEsMn0pP1suOl0/KFxcZCspPyQvO1xudmFyIFJFR0VYX0ZPUk1BVCA9IC9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZztcblxuLy8gRW5nbGlzaCBbZW5dXG4vLyBXZSBkb24ndCBuZWVkIHdlZWtkYXlzU2hvcnQsIHdlZWtkYXlzTWluLCBtb250aHNTaG9ydCBpbiBlbi5qcyBsb2NhbGVcbmNvbnN0IGVuID0ge1xuICBuYW1lOiAnZW4nLFxuICB3ZWVrZGF5czogJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpLFxuICBtb250aHM6ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpLFxuICBvcmRpbmFsOiBmdW5jdGlvbiBvcmRpbmFsKG4pIHtcbiAgICB2YXIgcyA9IFsndGgnLCAnc3QnLCAnbmQnLCAncmQnXTtcbiAgICB2YXIgdiA9IG4gJSAxMDA7XG4gICAgcmV0dXJuIFwiW1wiICsgbiArIChzWyh2IC0gMjApICUgMTBdIHx8IHNbdl0gfHwgc1swXSkgKyBcIl1cIjtcbiAgfVxufTtcblxuY29uc3QgZW4kMSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICAnZGVmYXVsdCc6IGVuXG59KTtcblxudmFyIHBhZFN0YXJ0ID0gZnVuY3Rpb24gcGFkU3RhcnQoc3RyaW5nLCBsZW5ndGgsIHBhZCkge1xuICB2YXIgcyA9IFN0cmluZyhzdHJpbmcpO1xuICBpZiAoIXMgfHwgcy5sZW5ndGggPj0gbGVuZ3RoKSByZXR1cm4gc3RyaW5nO1xuICByZXR1cm4gXCJcIiArIEFycmF5KGxlbmd0aCArIDEgLSBzLmxlbmd0aCkuam9pbihwYWQpICsgc3RyaW5nO1xufTtcblxudmFyIHBhZFpvbmVTdHIgPSBmdW5jdGlvbiBwYWRab25lU3RyKGluc3RhbmNlKSB7XG4gIHZhciBuZWdNaW51dGVzID0gLWluc3RhbmNlLnV0Y09mZnNldCgpO1xuICB2YXIgbWludXRlcyA9IE1hdGguYWJzKG5lZ01pbnV0ZXMpO1xuICB2YXIgaG91ck9mZnNldCA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcbiAgdmFyIG1pbnV0ZU9mZnNldCA9IG1pbnV0ZXMgJSA2MDtcbiAgcmV0dXJuIFwiXCIgKyAobmVnTWludXRlcyA8PSAwID8gJysnIDogJy0nKSArIHBhZFN0YXJ0KGhvdXJPZmZzZXQsIDIsICcwJykgKyBcIjpcIiArIHBhZFN0YXJ0KG1pbnV0ZU9mZnNldCwgMiwgJzAnKTtcbn07XG5cbnZhciBtb250aERpZmYgPSBmdW5jdGlvbiBtb250aERpZmYoYSwgYikge1xuICAvLyBmdW5jdGlvbiBmcm9tIG1vbWVudC5qcyBpbiBvcmRlciB0byBrZWVwIHRoZSBzYW1lIHJlc3VsdFxuICBpZiAoYS5kYXRlKCkgPCBiLmRhdGUoKSkgcmV0dXJuIC1tb250aERpZmYoYiwgYSk7XG4gIHZhciB3aG9sZU1vbnRoRGlmZiA9IChiLnllYXIoKSAtIGEueWVhcigpKSAqIDEyICsgKGIubW9udGgoKSAtIGEubW9udGgoKSk7XG4gIHZhciBhbmNob3IgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmLCBNKTtcbiAgdmFyIGMgPSBiIC0gYW5jaG9yIDwgMDtcbiAgdmFyIGFuY2hvcjIgPSBhLmNsb25lKCkuYWRkKHdob2xlTW9udGhEaWZmICsgKGMgPyAtMSA6IDEpLCBNKTtcbiAgcmV0dXJuICsoLSh3aG9sZU1vbnRoRGlmZiArIChiIC0gYW5jaG9yKSAvIChjID8gYW5jaG9yIC0gYW5jaG9yMiA6IGFuY2hvcjIgLSBhbmNob3IpKSB8fCAwKTtcbn07XG5cbnZhciBhYnNGbG9vciA9IGZ1bmN0aW9uIGFic0Zsb29yKG4pIHtcbiAgcmV0dXJuIG4gPCAwID8gTWF0aC5jZWlsKG4pIHx8IDAgOiBNYXRoLmZsb29yKG4pO1xufTtcblxudmFyIHByZXR0eVVuaXQgPSBmdW5jdGlvbiBwcmV0dHlVbml0KHUpIHtcbiAgdmFyIHNwZWNpYWwgPSB7XG4gICAgTTogTSxcbiAgICB5OiBZLFxuICAgIHc6IFcsXG4gICAgZDogRCxcbiAgICBEOiBEQVRFLFxuICAgIGg6IEgsXG4gICAgbTogTUlOLFxuICAgIHM6IFMsXG4gICAgbXM6IE1TLFxuICAgIFE6IFFcbiAgfTtcbiAgcmV0dXJuIHNwZWNpYWxbdV0gfHwgU3RyaW5nKHUgfHwgJycpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvcyQvLCAnJyk7XG59O1xuXG52YXIgaXNVbmRlZmluZWQgPSBmdW5jdGlvbiBpc1VuZGVmaW5lZChzKSB7XG4gIHJldHVybiBzID09PSB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCBVID0ge1xuICBzOiBwYWRTdGFydCxcbiAgejogcGFkWm9uZVN0cixcbiAgbTogbW9udGhEaWZmLFxuICBhOiBhYnNGbG9vcixcbiAgcDogcHJldHR5VW5pdCxcbiAgdTogaXNVbmRlZmluZWRcbn07XG5cbnZhciBMID0gJ2VuJzsgLy8gZ2xvYmFsIGxvY2FsZVxuXG52YXIgTHMgPSB7fTsgLy8gZ2xvYmFsIGxvYWRlZCBsb2NhbGVcblxuTHNbTF0gPSBlbjtcblxudmFyIGlzRGF5anMgPSBmdW5jdGlvbiBpc0RheWpzKGQpIHtcbiAgcmV0dXJuIGQgaW5zdGFuY2VvZiBEYXlqcztcbn07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcblxuXG52YXIgcGFyc2VMb2NhbGUgPSBmdW5jdGlvbiBwYXJzZUxvY2FsZShwcmVzZXQsIG9iamVjdCwgaXNMb2NhbCkge1xuICB2YXIgbDtcbiAgaWYgKCFwcmVzZXQpIHJldHVybiBMO1xuXG4gIGlmICh0eXBlb2YgcHJlc2V0ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBwcmVzZXRMb3dlciA9IHByZXNldC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKExzW3ByZXNldExvd2VyXSkge1xuICAgICAgbCA9IHByZXNldExvd2VyO1xuICAgIH1cblxuICAgIGlmIChvYmplY3QpIHtcbiAgICAgIExzW3ByZXNldExvd2VyXSA9IG9iamVjdDtcbiAgICAgIGwgPSBwcmVzZXRMb3dlcjtcbiAgICB9XG5cbiAgICB2YXIgcHJlc2V0U3BsaXQgPSBwcmVzZXQuc3BsaXQoJy0nKTtcblxuICAgIGlmICghbCAmJiBwcmVzZXRTcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4gcGFyc2VMb2NhbGUocHJlc2V0U3BsaXRbMF0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgbmFtZSA9IHByZXNldC5uYW1lO1xuICAgIExzW25hbWVdID0gcHJlc2V0O1xuICAgIGwgPSBuYW1lO1xuICB9XG5cbiAgaWYgKCFpc0xvY2FsICYmIGwpIEwgPSBsO1xuICByZXR1cm4gbCB8fCAhaXNMb2NhbCAmJiBMO1xufTtcblxudmFyIGRheWpzID0gZnVuY3Rpb24gZGF5anMoZGF0ZSwgYykge1xuICBpZiAoaXNEYXlqcyhkYXRlKSkge1xuICAgIHJldHVybiBkYXRlLmNsb25lKCk7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG5cblxuICB2YXIgY2ZnID0gdHlwZW9mIGMgPT09ICdvYmplY3QnID8gYyA6IHt9O1xuICBjZmcuZGF0ZSA9IGRhdGU7XG4gIGNmZy5hcmdzID0gYXJndW1lbnRzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuXG4gIHJldHVybiBuZXcgRGF5anMoY2ZnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxufTtcblxudmFyIHdyYXBwZXIgPSBmdW5jdGlvbiB3cmFwcGVyKGRhdGUsIGluc3RhbmNlKSB7XG4gIHJldHVybiBkYXlqcyhkYXRlLCB7XG4gICAgbG9jYWxlOiBpbnN0YW5jZS4kTCxcbiAgICB1dGM6IGluc3RhbmNlLiR1LFxuICAgIHg6IGluc3RhbmNlLiR4LFxuICAgICRvZmZzZXQ6IGluc3RhbmNlLiRvZmZzZXQgLy8gdG9kbzogcmVmYWN0b3I7IGRvIG5vdCB1c2UgdGhpcy4kb2Zmc2V0IGluIHlvdSBjb2RlXG5cbiAgfSk7XG59O1xuXG52YXIgVXRpbHMgPSBVOyAvLyBmb3IgcGx1Z2luIHVzZVxuXG5VdGlscy5sID0gcGFyc2VMb2NhbGU7XG5VdGlscy5pID0gaXNEYXlqcztcblV0aWxzLncgPSB3cmFwcGVyO1xuXG52YXIgcGFyc2VEYXRlID0gZnVuY3Rpb24gcGFyc2VEYXRlKGNmZykge1xuICB2YXIgZGF0ZSA9IGNmZy5kYXRlLFxuICAgICAgdXRjID0gY2ZnLnV0YztcbiAgaWYgKGRhdGUgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pOyAvLyBudWxsIGlzIGludmFsaWRcblxuICBpZiAoVXRpbHMudShkYXRlKSkgcmV0dXJuIG5ldyBEYXRlKCk7IC8vIHRvZGF5XG5cbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XG5cbiAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJyAmJiAhL1okL2kudGVzdChkYXRlKSkge1xuICAgIHZhciBkID0gZGF0ZS5tYXRjaChSRUdFWF9QQVJTRSk7XG5cbiAgICBpZiAoZCkge1xuICAgICAgdmFyIG0gPSBkWzJdIC0gMSB8fCAwO1xuICAgICAgdmFyIG1zID0gKGRbN10gfHwgJzAnKS5zdWJzdHJpbmcoMCwgMyk7XG5cbiAgICAgIGlmICh1dGMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKGRbMV0sIG0sIGRbM10gfHwgMSwgZFs0XSB8fCAwLCBkWzVdIHx8IDAsIGRbNl0gfHwgMCwgbXMpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRbMV0sIG0sIGRbM10gfHwgMSwgZFs0XSB8fCAwLCBkWzVdIHx8IDAsIGRbNl0gfHwgMCwgbXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZShkYXRlKTsgLy8gZXZlcnl0aGluZyBlbHNlXG59O1xuXG52YXIgRGF5anMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEYXlqcyhjZmcpIHtcbiAgICB0aGlzLiRMID0gcGFyc2VMb2NhbGUoY2ZnLmxvY2FsZSwgbnVsbCwgdHJ1ZSk7XG4gICAgdGhpcy5wYXJzZShjZmcpOyAvLyBmb3IgcGx1Z2luXG4gIH1cblxuICB2YXIgX3Byb3RvID0gRGF5anMucHJvdG90eXBlO1xuXG4gIF9wcm90by5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlKGNmZykge1xuICAgIHRoaXMuJGQgPSBwYXJzZURhdGUoY2ZnKTtcbiAgICB0aGlzLiR4ID0gY2ZnLnggfHwge307XG4gICAgdGhpcy5pbml0KCk7XG4gIH07XG5cbiAgX3Byb3RvLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciAkZCA9IHRoaXMuJGQ7XG4gICAgdGhpcy4keSA9ICRkLmdldEZ1bGxZZWFyKCk7XG4gICAgdGhpcy4kTSA9ICRkLmdldE1vbnRoKCk7XG4gICAgdGhpcy4kRCA9ICRkLmdldERhdGUoKTtcbiAgICB0aGlzLiRXID0gJGQuZ2V0RGF5KCk7XG4gICAgdGhpcy4kSCA9ICRkLmdldEhvdXJzKCk7XG4gICAgdGhpcy4kbSA9ICRkLmdldE1pbnV0ZXMoKTtcbiAgICB0aGlzLiRzID0gJGQuZ2V0U2Vjb25kcygpO1xuICAgIHRoaXMuJG1zID0gJGQuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgO1xuXG4gIF9wcm90by4kdXRpbHMgPSBmdW5jdGlvbiAkdXRpbHMoKSB7XG4gICAgcmV0dXJuIFV0aWxzO1xuICB9O1xuXG4gIF9wcm90by5pc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gISh0aGlzLiRkLnRvU3RyaW5nKCkgPT09IElOVkFMSURfREFURV9TVFJJTkcpO1xuICB9O1xuXG4gIF9wcm90by5pc1NhbWUgPSBmdW5jdGlvbiBpc1NhbWUodGhhdCwgdW5pdHMpIHtcbiAgICB2YXIgb3RoZXIgPSBkYXlqcyh0aGF0KTtcbiAgICByZXR1cm4gdGhpcy5zdGFydE9mKHVuaXRzKSA8PSBvdGhlciAmJiBvdGhlciA8PSB0aGlzLmVuZE9mKHVuaXRzKTtcbiAgfTtcblxuICBfcHJvdG8uaXNBZnRlciA9IGZ1bmN0aW9uIGlzQWZ0ZXIodGhhdCwgdW5pdHMpIHtcbiAgICByZXR1cm4gZGF5anModGhhdCkgPCB0aGlzLnN0YXJ0T2YodW5pdHMpO1xuICB9O1xuXG4gIF9wcm90by5pc0JlZm9yZSA9IGZ1bmN0aW9uIGlzQmVmb3JlKHRoYXQsIHVuaXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5kT2YodW5pdHMpIDwgZGF5anModGhhdCk7XG4gIH07XG5cbiAgX3Byb3RvLiRnID0gZnVuY3Rpb24gJGcoaW5wdXQsIGdldCwgc2V0KSB7XG4gICAgaWYgKFV0aWxzLnUoaW5wdXQpKSByZXR1cm4gdGhpc1tnZXRdO1xuICAgIHJldHVybiB0aGlzLnNldChzZXQsIGlucHV0KTtcbiAgfTtcblxuICBfcHJvdG8udW5peCA9IGZ1bmN0aW9uIHVuaXgoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkgLyAxMDAwKTtcbiAgfTtcblxuICBfcHJvdG8udmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgLy8gdGltZXpvbmUoaG91cikgKiA2MCAqIDYwICogMTAwMCA9PiBtc1xuICAgIHJldHVybiB0aGlzLiRkLmdldFRpbWUoKTtcbiAgfTtcblxuICBfcHJvdG8uc3RhcnRPZiA9IGZ1bmN0aW9uIHN0YXJ0T2YodW5pdHMsIF9zdGFydE9mKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIHN0YXJ0T2YgLT4gZW5kT2ZcbiAgICB2YXIgaXNTdGFydE9mID0gIVV0aWxzLnUoX3N0YXJ0T2YpID8gX3N0YXJ0T2YgOiB0cnVlO1xuICAgIHZhciB1bml0ID0gVXRpbHMucCh1bml0cyk7XG5cbiAgICB2YXIgaW5zdGFuY2VGYWN0b3J5ID0gZnVuY3Rpb24gaW5zdGFuY2VGYWN0b3J5KGQsIG0pIHtcbiAgICAgIHZhciBpbnMgPSBVdGlscy53KF90aGlzLiR1ID8gRGF0ZS5VVEMoX3RoaXMuJHksIG0sIGQpIDogbmV3IERhdGUoX3RoaXMuJHksIG0sIGQpLCBfdGhpcyk7XG4gICAgICByZXR1cm4gaXNTdGFydE9mID8gaW5zIDogaW5zLmVuZE9mKEQpO1xuICAgIH07XG5cbiAgICB2YXIgaW5zdGFuY2VGYWN0b3J5U2V0ID0gZnVuY3Rpb24gaW5zdGFuY2VGYWN0b3J5U2V0KG1ldGhvZCwgc2xpY2UpIHtcbiAgICAgIHZhciBhcmd1bWVudFN0YXJ0ID0gWzAsIDAsIDAsIDBdO1xuICAgICAgdmFyIGFyZ3VtZW50RW5kID0gWzIzLCA1OSwgNTksIDk5OV07XG4gICAgICByZXR1cm4gVXRpbHMudyhfdGhpcy50b0RhdGUoKVttZXRob2RdLmFwcGx5KCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1zcHJlYWRcbiAgICAgIF90aGlzLnRvRGF0ZSgncycpLCAoaXNTdGFydE9mID8gYXJndW1lbnRTdGFydCA6IGFyZ3VtZW50RW5kKS5zbGljZShzbGljZSkpLCBfdGhpcyk7XG4gICAgfTtcblxuICAgIHZhciAkVyA9IHRoaXMuJFcsXG4gICAgICAgICRNID0gdGhpcy4kTSxcbiAgICAgICAgJEQgPSB0aGlzLiREO1xuICAgIHZhciB1dGNQYWQgPSBcInNldFwiICsgKHRoaXMuJHUgPyAnVVRDJyA6ICcnKTtcblxuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgY2FzZSBZOlxuICAgICAgICByZXR1cm4gaXNTdGFydE9mID8gaW5zdGFuY2VGYWN0b3J5KDEsIDApIDogaW5zdGFuY2VGYWN0b3J5KDMxLCAxMSk7XG5cbiAgICAgIGNhc2UgTTpcbiAgICAgICAgcmV0dXJuIGlzU3RhcnRPZiA/IGluc3RhbmNlRmFjdG9yeSgxLCAkTSkgOiBpbnN0YW5jZUZhY3RvcnkoMCwgJE0gKyAxKTtcblxuICAgICAgY2FzZSBXOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIHdlZWtTdGFydCA9IHRoaXMuJGxvY2FsZSgpLndlZWtTdGFydCB8fCAwO1xuICAgICAgICAgIHZhciBnYXAgPSAoJFcgPCB3ZWVrU3RhcnQgPyAkVyArIDcgOiAkVykgLSB3ZWVrU3RhcnQ7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlRmFjdG9yeShpc1N0YXJ0T2YgPyAkRCAtIGdhcCA6ICREICsgKDYgLSBnYXApLCAkTSk7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBEOlxuICAgICAgY2FzZSBEQVRFOlxuICAgICAgICByZXR1cm4gaW5zdGFuY2VGYWN0b3J5U2V0KHV0Y1BhZCArIFwiSG91cnNcIiwgMCk7XG5cbiAgICAgIGNhc2UgSDpcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlRmFjdG9yeVNldCh1dGNQYWQgKyBcIk1pbnV0ZXNcIiwgMSk7XG5cbiAgICAgIGNhc2UgTUlOOlxuICAgICAgICByZXR1cm4gaW5zdGFuY2VGYWN0b3J5U2V0KHV0Y1BhZCArIFwiU2Vjb25kc1wiLCAyKTtcblxuICAgICAgY2FzZSBTOlxuICAgICAgICByZXR1cm4gaW5zdGFuY2VGYWN0b3J5U2V0KHV0Y1BhZCArIFwiTWlsbGlzZWNvbmRzXCIsIDMpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5jbG9uZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZW5kT2YgPSBmdW5jdGlvbiBlbmRPZihhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydE9mKGFyZywgZmFsc2UpO1xuICB9O1xuXG4gIF9wcm90by4kc2V0ID0gZnVuY3Rpb24gJHNldCh1bml0cywgX2ludCkge1xuICAgIHZhciBfQyREJEMkREFURSRDJE0kQyRZJEM7XG5cbiAgICAvLyBwcml2YXRlIHNldFxuICAgIHZhciB1bml0ID0gVXRpbHMucCh1bml0cyk7XG4gICAgdmFyIHV0Y1BhZCA9IFwic2V0XCIgKyAodGhpcy4kdSA/ICdVVEMnIDogJycpO1xuICAgIHZhciBuYW1lID0gKF9DJEQkQyREQVRFJEMkTSRDJFkkQyA9IHt9LCBfQyREJEMkREFURSRDJE0kQyRZJENbRF0gPSB1dGNQYWQgKyBcIkRhdGVcIiwgX0MkRCRDJERBVEUkQyRNJEMkWSRDW0RBVEVdID0gdXRjUGFkICsgXCJEYXRlXCIsIF9DJEQkQyREQVRFJEMkTSRDJFkkQ1tNXSA9IHV0Y1BhZCArIFwiTW9udGhcIiwgX0MkRCRDJERBVEUkQyRNJEMkWSRDW1ldID0gdXRjUGFkICsgXCJGdWxsWWVhclwiLCBfQyREJEMkREFURSRDJE0kQyRZJENbSF0gPSB1dGNQYWQgKyBcIkhvdXJzXCIsIF9DJEQkQyREQVRFJEMkTSRDJFkkQ1tNSU5dID0gdXRjUGFkICsgXCJNaW51dGVzXCIsIF9DJEQkQyREQVRFJEMkTSRDJFkkQ1tTXSA9IHV0Y1BhZCArIFwiU2Vjb25kc1wiLCBfQyREJEMkREFURSRDJE0kQyRZJENbTVNdID0gdXRjUGFkICsgXCJNaWxsaXNlY29uZHNcIiwgX0MkRCRDJERBVEUkQyRNJEMkWSRDKVt1bml0XTtcbiAgICB2YXIgYXJnID0gdW5pdCA9PT0gRCA/IHRoaXMuJEQgKyAoX2ludCAtIHRoaXMuJFcpIDogX2ludDtcblxuICAgIGlmICh1bml0ID09PSBNIHx8IHVuaXQgPT09IFkpIHtcbiAgICAgIC8vIGNsb25lIGlzIGZvciBiYWRNdXRhYmxlIHBsdWdpblxuICAgICAgdmFyIGRhdGUgPSB0aGlzLmNsb25lKCkuc2V0KERBVEUsIDEpO1xuICAgICAgZGF0ZS4kZFtuYW1lXShhcmcpO1xuICAgICAgZGF0ZS5pbml0KCk7XG4gICAgICB0aGlzLiRkID0gZGF0ZS5zZXQoREFURSwgTWF0aC5taW4odGhpcy4kRCwgZGF0ZS5kYXlzSW5Nb250aCgpKSkuJGQ7XG4gICAgfSBlbHNlIGlmIChuYW1lKSB0aGlzLiRkW25hbWVdKGFyZyk7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KHN0cmluZywgX2ludDIpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLiRzZXQoc3RyaW5nLCBfaW50Mik7XG4gIH07XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldCh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXNbVXRpbHMucCh1bml0KV0oKTtcbiAgfTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKG51bWJlciwgdW5pdHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcyxcbiAgICAgICAgX0MkTUlOJEMkSCRDJFMkdW5pdDtcblxuICAgIG51bWJlciA9IE51bWJlcihudW1iZXIpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cbiAgICB2YXIgdW5pdCA9IFV0aWxzLnAodW5pdHMpO1xuXG4gICAgdmFyIGluc3RhbmNlRmFjdG9yeVNldCA9IGZ1bmN0aW9uIGluc3RhbmNlRmFjdG9yeVNldChuKSB7XG4gICAgICB2YXIgZCA9IGRheWpzKF90aGlzMik7XG4gICAgICByZXR1cm4gVXRpbHMudyhkLmRhdGUoZC5kYXRlKCkgKyBNYXRoLnJvdW5kKG4gKiBudW1iZXIpKSwgX3RoaXMyKTtcbiAgICB9O1xuXG4gICAgaWYgKHVuaXQgPT09IE0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNldChNLCB0aGlzLiRNICsgbnVtYmVyKTtcbiAgICB9XG5cbiAgICBpZiAodW5pdCA9PT0gWSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KFksIHRoaXMuJHkgKyBudW1iZXIpO1xuICAgIH1cblxuICAgIGlmICh1bml0ID09PSBEKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VGYWN0b3J5U2V0KDEpO1xuICAgIH1cblxuICAgIGlmICh1bml0ID09PSBXKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2VGYWN0b3J5U2V0KDcpO1xuICAgIH1cblxuICAgIHZhciBzdGVwID0gKF9DJE1JTiRDJEgkQyRTJHVuaXQgPSB7fSwgX0MkTUlOJEMkSCRDJFMkdW5pdFtNSU5dID0gTUlMTElTRUNPTkRTX0FfTUlOVVRFLCBfQyRNSU4kQyRIJEMkUyR1bml0W0hdID0gTUlMTElTRUNPTkRTX0FfSE9VUiwgX0MkTUlOJEMkSCRDJFMkdW5pdFtTXSA9IE1JTExJU0VDT05EU19BX1NFQ09ORCwgX0MkTUlOJEMkSCRDJFMkdW5pdClbdW5pdF0gfHwgMTsgLy8gbXNcblxuICAgIHZhciBuZXh0VGltZVN0YW1wID0gdGhpcy4kZC5nZXRUaW1lKCkgKyBudW1iZXIgKiBzdGVwO1xuICAgIHJldHVybiBVdGlscy53KG5leHRUaW1lU3RhbXAsIHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5zdWJ0cmFjdCA9IGZ1bmN0aW9uIHN1YnRyYWN0KG51bWJlciwgc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKG51bWJlciAqIC0xLCBzdHJpbmcpO1xuICB9O1xuXG4gIF9wcm90by5mb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQoZm9ybWF0U3RyKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgbG9jYWxlID0gdGhpcy4kbG9jYWxlKCk7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkgcmV0dXJuIGxvY2FsZS5pbnZhbGlkRGF0ZSB8fCBJTlZBTElEX0RBVEVfU1RSSU5HO1xuICAgIHZhciBzdHIgPSBmb3JtYXRTdHIgfHwgRk9STUFUX0RFRkFVTFQ7XG4gICAgdmFyIHpvbmVTdHIgPSBVdGlscy56KHRoaXMpO1xuICAgIHZhciAkSCA9IHRoaXMuJEgsXG4gICAgICAgICRtID0gdGhpcy4kbSxcbiAgICAgICAgJE0gPSB0aGlzLiRNO1xuICAgIHZhciB3ZWVrZGF5cyA9IGxvY2FsZS53ZWVrZGF5cyxcbiAgICAgICAgbW9udGhzID0gbG9jYWxlLm1vbnRocyxcbiAgICAgICAgbWVyaWRpZW0gPSBsb2NhbGUubWVyaWRpZW07XG5cbiAgICB2YXIgZ2V0U2hvcnQgPSBmdW5jdGlvbiBnZXRTaG9ydChhcnIsIGluZGV4LCBmdWxsLCBsZW5ndGgpIHtcbiAgICAgIHJldHVybiBhcnIgJiYgKGFycltpbmRleF0gfHwgYXJyKF90aGlzMywgc3RyKSkgfHwgZnVsbFtpbmRleF0uc2xpY2UoMCwgbGVuZ3RoKTtcbiAgICB9O1xuXG4gICAgdmFyIGdldCRIID0gZnVuY3Rpb24gZ2V0JEgobnVtKSB7XG4gICAgICByZXR1cm4gVXRpbHMucygkSCAlIDEyIHx8IDEyLCBudW0sICcwJyk7XG4gICAgfTtcblxuICAgIHZhciBtZXJpZGllbUZ1bmMgPSBtZXJpZGllbSB8fCBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc0xvd2VyY2FzZSkge1xuICAgICAgdmFyIG0gPSBob3VyIDwgMTIgPyAnQU0nIDogJ1BNJztcbiAgICAgIHJldHVybiBpc0xvd2VyY2FzZSA/IG0udG9Mb3dlckNhc2UoKSA6IG07XG4gICAgfTtcblxuICAgIHZhciBtYXRjaGVzID0ge1xuICAgICAgWVk6IFN0cmluZyh0aGlzLiR5KS5zbGljZSgtMiksXG4gICAgICBZWVlZOiBVdGlscy5zKHRoaXMuJHksIDQsICcwJyksXG4gICAgICBNOiAkTSArIDEsXG4gICAgICBNTTogVXRpbHMucygkTSArIDEsIDIsICcwJyksXG4gICAgICBNTU06IGdldFNob3J0KGxvY2FsZS5tb250aHNTaG9ydCwgJE0sIG1vbnRocywgMyksXG4gICAgICBNTU1NOiBnZXRTaG9ydChtb250aHMsICRNKSxcbiAgICAgIEQ6IHRoaXMuJEQsXG4gICAgICBERDogVXRpbHMucyh0aGlzLiRELCAyLCAnMCcpLFxuICAgICAgZDogU3RyaW5nKHRoaXMuJFcpLFxuICAgICAgZGQ6IGdldFNob3J0KGxvY2FsZS53ZWVrZGF5c01pbiwgdGhpcy4kVywgd2Vla2RheXMsIDIpLFxuICAgICAgZGRkOiBnZXRTaG9ydChsb2NhbGUud2Vla2RheXNTaG9ydCwgdGhpcy4kVywgd2Vla2RheXMsIDMpLFxuICAgICAgZGRkZDogd2Vla2RheXNbdGhpcy4kV10sXG4gICAgICBIOiBTdHJpbmcoJEgpLFxuICAgICAgSEg6IFV0aWxzLnMoJEgsIDIsICcwJyksXG4gICAgICBoOiBnZXQkSCgxKSxcbiAgICAgIGhoOiBnZXQkSCgyKSxcbiAgICAgIGE6IG1lcmlkaWVtRnVuYygkSCwgJG0sIHRydWUpLFxuICAgICAgQTogbWVyaWRpZW1GdW5jKCRILCAkbSwgZmFsc2UpLFxuICAgICAgbTogU3RyaW5nKCRtKSxcbiAgICAgIG1tOiBVdGlscy5zKCRtLCAyLCAnMCcpLFxuICAgICAgczogU3RyaW5nKHRoaXMuJHMpLFxuICAgICAgc3M6IFV0aWxzLnModGhpcy4kcywgMiwgJzAnKSxcbiAgICAgIFNTUzogVXRpbHMucyh0aGlzLiRtcywgMywgJzAnKSxcbiAgICAgIFo6IHpvbmVTdHIgLy8gJ1paJyBsb2dpYyBiZWxvd1xuXG4gICAgfTtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoUkVHRVhfRk9STUFULCBmdW5jdGlvbiAobWF0Y2gsICQxKSB7XG4gICAgICByZXR1cm4gJDEgfHwgbWF0Y2hlc1ttYXRjaF0gfHwgem9uZVN0ci5yZXBsYWNlKCc6JywgJycpO1xuICAgIH0pOyAvLyAnWlonXG4gIH07XG5cbiAgX3Byb3RvLnV0Y09mZnNldCA9IGZ1bmN0aW9uIHV0Y09mZnNldCgpIHtcbiAgICAvLyBCZWNhdXNlIGEgYnVnIGF0IEZGMjQsIHdlJ3JlIHJvdW5kaW5nIHRoZSB0aW1lem9uZSBvZmZzZXQgYXJvdW5kIDE1IG1pbnV0ZXNcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9wdWxsLzE4NzFcbiAgICByZXR1cm4gLU1hdGgucm91bmQodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpIC8gMTUpICogMTU7XG4gIH07XG5cbiAgX3Byb3RvLmRpZmYgPSBmdW5jdGlvbiBkaWZmKGlucHV0LCB1bml0cywgX2Zsb2F0KSB7XG4gICAgdmFyIF9DJFkkQyRNJEMkUSRDJFckQyREJDtcblxuICAgIHZhciB1bml0ID0gVXRpbHMucCh1bml0cyk7XG4gICAgdmFyIHRoYXQgPSBkYXlqcyhpbnB1dCk7XG4gICAgdmFyIHpvbmVEZWx0YSA9ICh0aGF0LnV0Y09mZnNldCgpIC0gdGhpcy51dGNPZmZzZXQoKSkgKiBNSUxMSVNFQ09ORFNfQV9NSU5VVEU7XG4gICAgdmFyIGRpZmYgPSB0aGlzIC0gdGhhdDtcbiAgICB2YXIgcmVzdWx0ID0gVXRpbHMubSh0aGlzLCB0aGF0KTtcbiAgICByZXN1bHQgPSAoX0MkWSRDJE0kQyRRJEMkVyRDJEQkID0ge30sIF9DJFkkQyRNJEMkUSRDJFckQyREJFtZXSA9IHJlc3VsdCAvIDEyLCBfQyRZJEMkTSRDJFEkQyRXJEMkRCRbTV0gPSByZXN1bHQsIF9DJFkkQyRNJEMkUSRDJFckQyREJFtRXSA9IHJlc3VsdCAvIDMsIF9DJFkkQyRNJEMkUSRDJFckQyREJFtXXSA9IChkaWZmIC0gem9uZURlbHRhKSAvIE1JTExJU0VDT05EU19BX1dFRUssIF9DJFkkQyRNJEMkUSRDJFckQyREJFtEXSA9IChkaWZmIC0gem9uZURlbHRhKSAvIE1JTExJU0VDT05EU19BX0RBWSwgX0MkWSRDJE0kQyRRJEMkVyRDJEQkW0hdID0gZGlmZiAvIE1JTExJU0VDT05EU19BX0hPVVIsIF9DJFkkQyRNJEMkUSRDJFckQyREJFtNSU5dID0gZGlmZiAvIE1JTExJU0VDT05EU19BX01JTlVURSwgX0MkWSRDJE0kQyRRJEMkVyRDJEQkW1NdID0gZGlmZiAvIE1JTExJU0VDT05EU19BX1NFQ09ORCwgX0MkWSRDJE0kQyRRJEMkVyRDJEQkKVt1bml0XSB8fCBkaWZmOyAvLyBtaWxsaXNlY29uZHNcblxuICAgIHJldHVybiBfZmxvYXQgPyByZXN1bHQgOiBVdGlscy5hKHJlc3VsdCk7XG4gIH07XG5cbiAgX3Byb3RvLmRheXNJbk1vbnRoID0gZnVuY3Rpb24gZGF5c0luTW9udGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5kT2YoTSkuJEQ7XG4gIH07XG5cbiAgX3Byb3RvLiRsb2NhbGUgPSBmdW5jdGlvbiAkbG9jYWxlKCkge1xuICAgIC8vIGdldCBsb2NhbGUgb2JqZWN0XG4gICAgcmV0dXJuIExzW3RoaXMuJExdO1xuICB9O1xuXG4gIF9wcm90by5sb2NhbGUgPSBmdW5jdGlvbiBsb2NhbGUocHJlc2V0LCBvYmplY3QpIHtcbiAgICBpZiAoIXByZXNldCkgcmV0dXJuIHRoaXMuJEw7XG4gICAgdmFyIHRoYXQgPSB0aGlzLmNsb25lKCk7XG4gICAgdmFyIG5leHRMb2NhbGVOYW1lID0gcGFyc2VMb2NhbGUocHJlc2V0LCBvYmplY3QsIHRydWUpO1xuICAgIGlmIChuZXh0TG9jYWxlTmFtZSkgdGhhdC4kTCA9IG5leHRMb2NhbGVOYW1lO1xuICAgIHJldHVybiB0aGF0O1xuICB9O1xuXG4gIF9wcm90by5jbG9uZSA9IGZ1bmN0aW9uIGNsb25lKCkge1xuICAgIHJldHVybiBVdGlscy53KHRoaXMuJGQsIHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by50b0RhdGUgPSBmdW5jdGlvbiB0b0RhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKTtcbiAgfTtcblxuICBfcHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMudG9JU09TdHJpbmcoKSA6IG51bGw7XG4gIH07XG5cbiAgX3Byb3RvLnRvSVNPU3RyaW5nID0gZnVuY3Rpb24gdG9JU09TdHJpbmcoKSB7XG4gICAgLy8gaWUgOCByZXR1cm5cbiAgICAvLyBuZXcgRGF5anModGhpcy52YWx1ZU9mKCkgKyB0aGlzLiRkLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMClcbiAgICAvLyAuZm9ybWF0KCdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1taXScpXG4gICAgcmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKTtcbiAgfTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy4kZC50b1VUQ1N0cmluZygpO1xuICB9O1xuXG4gIHJldHVybiBEYXlqcztcbn0oKTtcblxudmFyIHByb3RvID0gRGF5anMucHJvdG90eXBlO1xuZGF5anMucHJvdG90eXBlID0gcHJvdG87XG5bWyckbXMnLCBNU10sIFsnJHMnLCBTXSwgWyckbScsIE1JTl0sIFsnJEgnLCBIXSwgWyckVycsIERdLCBbJyRNJywgTV0sIFsnJHknLCBZXSwgWyckRCcsIERBVEVdXS5mb3JFYWNoKGZ1bmN0aW9uIChnKSB7XG4gIHByb3RvW2dbMV1dID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuJGcoaW5wdXQsIGdbMF0sIGdbMV0pO1xuICB9O1xufSk7XG5cbmRheWpzLmV4dGVuZCA9IGZ1bmN0aW9uIChwbHVnaW4sIG9wdGlvbikge1xuICBpZiAoIXBsdWdpbi4kaSkge1xuICAgIC8vIGluc3RhbGwgcGx1Z2luIG9ubHkgb25jZVxuICAgIHBsdWdpbihvcHRpb24sIERheWpzLCBkYXlqcyk7XG4gICAgcGx1Z2luLiRpID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBkYXlqcztcbn07XG5cbmRheWpzLmxvY2FsZSA9IHBhcnNlTG9jYWxlO1xuZGF5anMuaXNEYXlqcyA9IGlzRGF5anM7XG5cbmRheWpzLnVuaXggPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gIHJldHVybiBkYXlqcyh0aW1lc3RhbXAgKiAxZTMpO1xufTtcblxuZGF5anMuZW4gPSBMc1tMXTtcbmRheWpzLkxzID0gTHM7XG5kYXlqcy5wID0ge307XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG52YXIgdCA9IGZ1bmN0aW9uIHQoZm9ybWF0KSB7XG4gIHJldHVybiBmb3JtYXQucmVwbGFjZSgvKFxcW1teXFxdXStdKXwoTU1NTXxNTXxERHxkZGRkKS9nLCBmdW5jdGlvbiAoXywgYSwgYikge1xuICAgIHJldHVybiBhIHx8IGIuc2xpY2UoMSk7XG4gIH0pO1xufTtcbnZhciBlbmdsaXNoRm9ybWF0cyA9IHtcbiAgTFRTOiAnaDptbTpzcyBBJyxcbiAgTFQ6ICdoOm1tIEEnLFxuICBMOiAnTU0vREQvWVlZWScsXG4gIExMOiAnTU1NTSBELCBZWVlZJyxcbiAgTExMOiAnTU1NTSBELCBZWVlZIGg6bW0gQScsXG4gIExMTEw6ICdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJ1xufTtcbnZhciB1ID0gZnVuY3Rpb24gdShmb3JtYXRTdHIsIGZvcm1hdHMpIHtcbiAgcmV0dXJuIGZvcm1hdFN0ci5yZXBsYWNlKC8oXFxbW15cXF1dK10pfChMVFM/fGx7MSw0fXxMezEsNH0pL2csIGZ1bmN0aW9uIChfLCBhLCBiKSB7XG4gICAgdmFyIEIgPSBiICYmIGIudG9VcHBlckNhc2UoKTtcbiAgICByZXR1cm4gYSB8fCBmb3JtYXRzW2JdIHx8IGVuZ2xpc2hGb3JtYXRzW2JdIHx8IHQoZm9ybWF0c1tCXSk7XG4gIH0pO1xufTtcblxudmFyIGZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teW10qXFxdKXwoWy1fOi8uLCgpXFxzXSspfChBfGF8WVlZWXxZWT98TU0/TT9NP3xEb3xERD98aGg/fEhIP3xtbT98c3M/fFN7MSwzfXx6fFpaPykvZztcbnZhciBtYXRjaDEgPSAvXFxkLzsgLy8gMCAtIDlcblxudmFyIG1hdGNoMiA9IC9cXGRcXGQvOyAvLyAwMCAtIDk5XG5cbnZhciBtYXRjaDMgPSAvXFxkezN9LzsgLy8gMDAwIC0gOTk5XG5cbnZhciBtYXRjaDQgPSAvXFxkezR9LzsgLy8gMDAwMCAtIDk5OTlcblxudmFyIG1hdGNoMXRvMiA9IC9cXGRcXGQ/LzsgLy8gMCAtIDk5XG5cbnZhciBtYXRjaFNpZ25lZCA9IC9bKy1dP1xcZCsvOyAvLyAtaW5mIC0gaW5mXG5cbnZhciBtYXRjaE9mZnNldCA9IC9bKy1dXFxkXFxkOj8oXFxkXFxkKT98Wi87IC8vICswMDowMCAtMDA6MDAgKzAwMDAgb3IgLTAwMDAgKzAwIG9yIFpcblxudmFyIG1hdGNoV29yZCA9IC9cXGQqW14tXzovLCgpXFxzXFxkXSsvOyAvLyBXb3JkXG5cbnZhciBsb2NhbGUgPSB7fTtcblxudmFyIHBhcnNlVHdvRGlnaXRZZWFyID0gZnVuY3Rpb24gcGFyc2VUd29EaWdpdFllYXIoaW5wdXQpIHtcbiAgaW5wdXQgPSAraW5wdXQ7XG4gIHJldHVybiBpbnB1dCArIChpbnB1dCA+IDY4ID8gMTkwMCA6IDIwMDApO1xufTtcblxuZnVuY3Rpb24gb2Zmc2V0RnJvbVN0cmluZyhzdHJpbmcpIHtcbiAgaWYgKCFzdHJpbmcpIHJldHVybiAwO1xuICBpZiAoc3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgcGFydHMgPSBzdHJpbmcubWF0Y2goLyhbKy1dfFxcZFxcZCkvZyk7XG4gIHZhciBtaW51dGVzID0gKyhwYXJ0c1sxXSAqIDYwKSArICgrcGFydHNbMl0gfHwgMCk7XG4gIHJldHVybiBtaW51dGVzID09PSAwID8gMCA6IHBhcnRzWzBdID09PSAnKycgPyAtbWludXRlcyA6IG1pbnV0ZXM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbn1cblxudmFyIGFkZElucHV0ID0gZnVuY3Rpb24gYWRkSW5wdXQocHJvcGVydHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHRoaXNbcHJvcGVydHldID0gK2lucHV0O1xuICB9O1xufTtcblxudmFyIHpvbmVFeHByZXNzaW9ucyA9IFttYXRjaE9mZnNldCwgZnVuY3Rpb24gKGlucHV0KSB7XG4gIHZhciB6b25lID0gdGhpcy56b25lIHx8ICh0aGlzLnpvbmUgPSB7fSk7XG4gIHpvbmUub2Zmc2V0ID0gb2Zmc2V0RnJvbVN0cmluZyhpbnB1dCk7XG59XTtcblxudmFyIGdldExvY2FsZVBhcnQgPSBmdW5jdGlvbiBnZXRMb2NhbGVQYXJ0KG5hbWUpIHtcbiAgdmFyIHBhcnQgPSBsb2NhbGVbbmFtZV07XG4gIHJldHVybiBwYXJ0ICYmIChwYXJ0LmluZGV4T2YgPyBwYXJ0IDogcGFydC5zLmNvbmNhdChwYXJ0LmYpKTtcbn07XG5cbnZhciBtZXJpZGllbU1hdGNoID0gZnVuY3Rpb24gbWVyaWRpZW1NYXRjaChpbnB1dCwgaXNMb3dlckNhc2UpIHtcbiAgdmFyIGlzQWZ0ZXJub29uO1xuICB2YXIgX2xvY2FsZSA9IGxvY2FsZSxcbiAgICAgIG1lcmlkaWVtID0gX2xvY2FsZS5tZXJpZGllbTtcblxuICBpZiAoIW1lcmlkaWVtKSB7XG4gICAgaXNBZnRlcm5vb24gPSBpbnB1dCA9PT0gKGlzTG93ZXJDYXNlID8gJ3BtJyA6ICdQTScpO1xuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDI0OyBpICs9IDEpIHtcbiAgICAgIC8vIHRvZG86IGZpeCBpbnB1dCA9PT0gbWVyaWRpZW0oaSwgMCwgaXNMb3dlckNhc2UpXG4gICAgICBpZiAoaW5wdXQuaW5kZXhPZihtZXJpZGllbShpLCAwLCBpc0xvd2VyQ2FzZSkpID4gLTEpIHtcbiAgICAgICAgaXNBZnRlcm5vb24gPSBpID4gMTI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0FmdGVybm9vbjtcbn07XG5cbnZhciBleHByZXNzaW9ucyA9IHtcbiAgQTogW21hdGNoV29yZCwgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdGhpcy5hZnRlcm5vb24gPSBtZXJpZGllbU1hdGNoKGlucHV0LCBmYWxzZSk7XG4gIH1dLFxuICBhOiBbbWF0Y2hXb3JkLCBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB0aGlzLmFmdGVybm9vbiA9IG1lcmlkaWVtTWF0Y2goaW5wdXQsIHRydWUpO1xuICB9XSxcbiAgUzogW21hdGNoMSwgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdGhpcy5taWxsaXNlY29uZHMgPSAraW5wdXQgKiAxMDA7XG4gIH1dLFxuICBTUzogW21hdGNoMiwgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdGhpcy5taWxsaXNlY29uZHMgPSAraW5wdXQgKiAxMDtcbiAgfV0sXG4gIFNTUzogW21hdGNoMywgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdGhpcy5taWxsaXNlY29uZHMgPSAraW5wdXQ7XG4gIH1dLFxuICBzOiBbbWF0Y2gxdG8yLCBhZGRJbnB1dCgnc2Vjb25kcycpXSxcbiAgc3M6IFttYXRjaDF0bzIsIGFkZElucHV0KCdzZWNvbmRzJyldLFxuICBtOiBbbWF0Y2gxdG8yLCBhZGRJbnB1dCgnbWludXRlcycpXSxcbiAgbW06IFttYXRjaDF0bzIsIGFkZElucHV0KCdtaW51dGVzJyldLFxuICBIOiBbbWF0Y2gxdG8yLCBhZGRJbnB1dCgnaG91cnMnKV0sXG4gIGg6IFttYXRjaDF0bzIsIGFkZElucHV0KCdob3VycycpXSxcbiAgSEg6IFttYXRjaDF0bzIsIGFkZElucHV0KCdob3VycycpXSxcbiAgaGg6IFttYXRjaDF0bzIsIGFkZElucHV0KCdob3VycycpXSxcbiAgRDogW21hdGNoMXRvMiwgYWRkSW5wdXQoJ2RheScpXSxcbiAgREQ6IFttYXRjaDIsIGFkZElucHV0KCdkYXknKV0sXG4gIERvOiBbbWF0Y2hXb3JkLCBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB2YXIgX2xvY2FsZTIgPSBsb2NhbGUsXG4gICAgICAgIG9yZGluYWwgPSBfbG9jYWxlMi5vcmRpbmFsO1xuXG4gICAgdmFyIF9pbnB1dCRtYXRjaCA9IGlucHV0Lm1hdGNoKC9cXGQrLyk7XG5cbiAgICB0aGlzLmRheSA9IF9pbnB1dCRtYXRjaFswXTtcbiAgICBpZiAoIW9yZGluYWwpIHJldHVybjtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDMxOyBpICs9IDEpIHtcbiAgICAgIGlmIChvcmRpbmFsKGkpLnJlcGxhY2UoL1xcW3xcXF0vZywgJycpID09PSBpbnB1dCkge1xuICAgICAgICB0aGlzLmRheSA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9XSxcbiAgTTogW21hdGNoMXRvMiwgYWRkSW5wdXQoJ21vbnRoJyldLFxuICBNTTogW21hdGNoMiwgYWRkSW5wdXQoJ21vbnRoJyldLFxuICBNTU06IFttYXRjaFdvcmQsIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciBtb250aHMgPSBnZXRMb2NhbGVQYXJ0KCdtb250aHMnKTtcbiAgICB2YXIgbW9udGhzU2hvcnQgPSBnZXRMb2NhbGVQYXJ0KCdtb250aHNTaG9ydCcpO1xuICAgIHZhciBtYXRjaEluZGV4ID0gKG1vbnRoc1Nob3J0IHx8IG1vbnRocy5tYXAoZnVuY3Rpb24gKF8pIHtcbiAgICAgIHJldHVybiBfLnNsaWNlKDAsIDMpO1xuICAgIH0pKS5pbmRleE9mKGlucHV0KSArIDE7XG5cbiAgICBpZiAobWF0Y2hJbmRleCA8IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cblxuICAgIHRoaXMubW9udGggPSBtYXRjaEluZGV4ICUgMTIgfHwgbWF0Y2hJbmRleDtcbiAgfV0sXG4gIE1NTU06IFttYXRjaFdvcmQsIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciBtb250aHMgPSBnZXRMb2NhbGVQYXJ0KCdtb250aHMnKTtcbiAgICB2YXIgbWF0Y2hJbmRleCA9IG1vbnRocy5pbmRleE9mKGlucHV0KSArIDE7XG5cbiAgICBpZiAobWF0Y2hJbmRleCA8IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cblxuICAgIHRoaXMubW9udGggPSBtYXRjaEluZGV4ICUgMTIgfHwgbWF0Y2hJbmRleDtcbiAgfV0sXG4gIFk6IFttYXRjaFNpZ25lZCwgYWRkSW5wdXQoJ3llYXInKV0sXG4gIFlZOiBbbWF0Y2gyLCBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB0aGlzLnllYXIgPSBwYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG4gIH1dLFxuICBZWVlZOiBbbWF0Y2g0LCBhZGRJbnB1dCgneWVhcicpXSxcbiAgWjogem9uZUV4cHJlc3Npb25zLFxuICBaWjogem9uZUV4cHJlc3Npb25zXG59O1xuXG5mdW5jdGlvbiBjb3JyZWN0SG91cnModGltZSkge1xuICB2YXIgYWZ0ZXJub29uID0gdGltZS5hZnRlcm5vb247XG5cbiAgaWYgKGFmdGVybm9vbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGhvdXJzID0gdGltZS5ob3VycztcblxuICAgIGlmIChhZnRlcm5vb24pIHtcbiAgICAgIGlmIChob3VycyA8IDEyKSB7XG4gICAgICAgIHRpbWUuaG91cnMgKz0gMTI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIHRpbWUuaG91cnMgPSAwO1xuICAgIH1cblxuICAgIGRlbGV0ZSB0aW1lLmFmdGVybm9vbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlUGFyc2VyKGZvcm1hdCkge1xuICBmb3JtYXQgPSB1KGZvcm1hdCwgbG9jYWxlICYmIGxvY2FsZS5mb3JtYXRzKTtcbiAgdmFyIGFycmF5ID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpO1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgdG9rZW4gPSBhcnJheVtpXTtcbiAgICB2YXIgcGFyc2VUbyA9IGV4cHJlc3Npb25zW3Rva2VuXTtcbiAgICB2YXIgcmVnZXggPSBwYXJzZVRvICYmIHBhcnNlVG9bMF07XG4gICAgdmFyIHBhcnNlciA9IHBhcnNlVG8gJiYgcGFyc2VUb1sxXTtcblxuICAgIGlmIChwYXJzZXIpIHtcbiAgICAgIGFycmF5W2ldID0ge1xuICAgICAgICByZWdleDogcmVnZXgsXG4gICAgICAgIHBhcnNlcjogcGFyc2VyXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnJheVtpXSA9IHRva2VuLnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciB0aW1lID0ge307XG5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHN0YXJ0ID0gMDsgX2kgPCBsZW5ndGg7IF9pICs9IDEpIHtcbiAgICAgIHZhciBfdG9rZW4gPSBhcnJheVtfaV07XG5cbiAgICAgIGlmICh0eXBlb2YgX3Rva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICBzdGFydCArPSBfdG9rZW4ubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9yZWdleCA9IF90b2tlbi5yZWdleCxcbiAgICAgICAgICAgIF9wYXJzZXIgPSBfdG9rZW4ucGFyc2VyO1xuICAgICAgICB2YXIgcGFydCA9IGlucHV0LnNsaWNlKHN0YXJ0KTtcblxuICAgICAgICB2YXIgbWF0Y2ggPSBfcmVnZXguZXhlYyhwYXJ0KTtcblxuICAgICAgICB2YXIgdmFsdWUgPSBtYXRjaFswXTtcblxuICAgICAgICBfcGFyc2VyLmNhbGwodGltZSwgdmFsdWUpO1xuXG4gICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSh2YWx1ZSwgJycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvcnJlY3RIb3Vycyh0aW1lKTtcbiAgICByZXR1cm4gdGltZTtcbiAgfTtcbn1cblxudmFyIHBhcnNlRm9ybWF0dGVkSW5wdXQgPSBmdW5jdGlvbiBwYXJzZUZvcm1hdHRlZElucHV0KGlucHV0LCBmb3JtYXQsIHV0Yykge1xuICB0cnkge1xuICAgIGlmIChbJ3gnLCAnWCddLmluZGV4T2YoZm9ybWF0KSA+IC0xKSByZXR1cm4gbmV3IERhdGUoKGZvcm1hdCA9PT0gJ1gnID8gMTAwMCA6IDEpICogaW5wdXQpO1xuICAgIHZhciBwYXJzZXIgPSBtYWtlUGFyc2VyKGZvcm1hdCk7XG5cbiAgICB2YXIgX3BhcnNlcjIgPSBwYXJzZXIoaW5wdXQpLFxuICAgICAgICB5ZWFyID0gX3BhcnNlcjIueWVhcixcbiAgICAgICAgbW9udGggPSBfcGFyc2VyMi5tb250aCxcbiAgICAgICAgZGF5ID0gX3BhcnNlcjIuZGF5LFxuICAgICAgICBob3VycyA9IF9wYXJzZXIyLmhvdXJzLFxuICAgICAgICBtaW51dGVzID0gX3BhcnNlcjIubWludXRlcyxcbiAgICAgICAgc2Vjb25kcyA9IF9wYXJzZXIyLnNlY29uZHMsXG4gICAgICAgIG1pbGxpc2Vjb25kcyA9IF9wYXJzZXIyLm1pbGxpc2Vjb25kcyxcbiAgICAgICAgem9uZSA9IF9wYXJzZXIyLnpvbmU7XG5cbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZCA9IGRheSB8fCAoIXllYXIgJiYgIW1vbnRoID8gbm93LmdldERhdGUoKSA6IDEpO1xuICAgIHZhciB5ID0geWVhciB8fCBub3cuZ2V0RnVsbFllYXIoKTtcbiAgICB2YXIgTSA9IDA7XG5cbiAgICBpZiAoISh5ZWFyICYmICFtb250aCkpIHtcbiAgICAgIE0gPSBtb250aCA+IDAgPyBtb250aCAtIDEgOiBub3cuZ2V0TW9udGgoKTtcbiAgICB9XG5cbiAgICB2YXIgaCA9IGhvdXJzIHx8IDA7XG4gICAgdmFyIG0gPSBtaW51dGVzIHx8IDA7XG4gICAgdmFyIHMgPSBzZWNvbmRzIHx8IDA7XG4gICAgdmFyIG1zID0gbWlsbGlzZWNvbmRzIHx8IDA7XG5cbiAgICBpZiAoem9uZSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHksIE0sIGQsIGgsIG0sIHMsIG1zICsgem9uZS5vZmZzZXQgKiA2MCAqIDEwMDApKTtcbiAgICB9XG5cbiAgICBpZiAodXRjKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoeSwgTSwgZCwgaCwgbSwgcywgbXMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoeSwgTSwgZCwgaCwgbSwgcywgbXMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCcnKTsgLy8gSW52YWxpZCBEYXRlXG4gIH1cbn07XG5cbmNvbnN0IGN1c3RvbVBhcnNlRm9ybWF0ID0gKGZ1bmN0aW9uIChvLCBDLCBkKSB7XG4gIGQucC5jdXN0b21QYXJzZUZvcm1hdCA9IHRydWU7XG5cbiAgaWYgKG8gJiYgby5wYXJzZVR3b0RpZ2l0WWVhcikge1xuICAgIHBhcnNlVHdvRGlnaXRZZWFyID0gby5wYXJzZVR3b0RpZ2l0WWVhcjtcbiAgfVxuXG4gIHZhciBwcm90byA9IEMucHJvdG90eXBlO1xuICB2YXIgb2xkUGFyc2UgPSBwcm90by5wYXJzZTtcblxuICBwcm90by5wYXJzZSA9IGZ1bmN0aW9uIChjZmcpIHtcbiAgICB2YXIgZGF0ZSA9IGNmZy5kYXRlLFxuICAgICAgICB1dGMgPSBjZmcudXRjLFxuICAgICAgICBhcmdzID0gY2ZnLmFyZ3M7XG4gICAgdGhpcy4kdSA9IHV0YztcbiAgICB2YXIgZm9ybWF0ID0gYXJnc1sxXTtcblxuICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGlzU3RyaWN0V2l0aG91dExvY2FsZSA9IGFyZ3NbMl0gPT09IHRydWU7XG4gICAgICB2YXIgaXNTdHJpY3RXaXRoTG9jYWxlID0gYXJnc1szXSA9PT0gdHJ1ZTtcbiAgICAgIHZhciBpc1N0cmljdCA9IGlzU3RyaWN0V2l0aG91dExvY2FsZSB8fCBpc1N0cmljdFdpdGhMb2NhbGU7XG4gICAgICB2YXIgcGwgPSBhcmdzWzJdO1xuXG4gICAgICBpZiAoaXNTdHJpY3RXaXRoTG9jYWxlKSB7XG4gICAgICAgIHBsID0gYXJnc1syXTtcbiAgICAgIH1cblxuICAgICAgbG9jYWxlID0gdGhpcy4kbG9jYWxlKCk7XG5cbiAgICAgIGlmICghaXNTdHJpY3RXaXRob3V0TG9jYWxlICYmIHBsKSB7XG4gICAgICAgIGxvY2FsZSA9IGQuTHNbcGxdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRkID0gcGFyc2VGb3JtYXR0ZWRJbnB1dChkYXRlLCBmb3JtYXQsIHV0Yyk7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIGlmIChwbCAmJiBwbCAhPT0gdHJ1ZSkgdGhpcy4kTCA9IHRoaXMubG9jYWxlKHBsKS4kTDsgLy8gdXNlICE9IHRvIHRyZWF0XG4gICAgICAvLyBpbnB1dCBudW1iZXIgMTQxMDcxNTY0MDU3OSBhbmQgZm9ybWF0IHN0cmluZyAnMTQxMDcxNTY0MDU3OScgZXF1YWxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblxuICAgICAgaWYgKGlzU3RyaWN0ICYmIGRhdGUgIT0gdGhpcy5mb3JtYXQoZm9ybWF0KSkge1xuICAgICAgICB0aGlzLiRkID0gbmV3IERhdGUoJycpO1xuICAgICAgfSAvLyByZXNldCBnbG9iYWwgbG9jYWxlIHRvIG1ha2UgcGFyYWxsZWwgdW5pdCB0ZXN0XG5cblxuICAgICAgbG9jYWxlID0ge307XG4gICAgfSBlbHNlIGlmIChmb3JtYXQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdmFyIGxlbiA9IGZvcm1hdC5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGFyZ3NbMV0gPSBmb3JtYXRbaSAtIDFdO1xuICAgICAgICB2YXIgcmVzdWx0ID0gZC5hcHBseSh0aGlzLCBhcmdzKTtcblxuICAgICAgICBpZiAocmVzdWx0LmlzVmFsaWQoKSkge1xuICAgICAgICAgIHRoaXMuJGQgPSByZXN1bHQuJGQ7XG4gICAgICAgICAgdGhpcy4kTCA9IHJlc3VsdC4kTDtcbiAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpID09PSBsZW4pIHRoaXMuJGQgPSBuZXcgRGF0ZSgnJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZFBhcnNlLmNhbGwodGhpcywgY2ZnKTtcbiAgICB9XG4gIH07XG59KTtcblxuY29uc3QgbG9jYWxlRGF0YSA9IChmdW5jdGlvbiAobywgYywgZGF5anMpIHtcbiAgLy8gbG9jYWxlIG5lZWRlZCBsYXRlclxuICB2YXIgcHJvdG8gPSBjLnByb3RvdHlwZTtcblxuICB2YXIgZ2V0TG9jYWxlUGFydCA9IGZ1bmN0aW9uIGdldExvY2FsZVBhcnQocGFydCkge1xuICAgIHJldHVybiBwYXJ0ICYmIChwYXJ0LmluZGV4T2YgPyBwYXJ0IDogcGFydC5zKTtcbiAgfTtcblxuICB2YXIgZ2V0U2hvcnQgPSBmdW5jdGlvbiBnZXRTaG9ydChpbnMsIHRhcmdldCwgZnVsbCwgbnVtLCBsb2NhbGVPcmRlcikge1xuICAgIHZhciBsb2NhbGUgPSBpbnMubmFtZSA/IGlucyA6IGlucy4kbG9jYWxlKCk7XG4gICAgdmFyIHRhcmdldExvY2FsZSA9IGdldExvY2FsZVBhcnQobG9jYWxlW3RhcmdldF0pO1xuICAgIHZhciBmdWxsTG9jYWxlID0gZ2V0TG9jYWxlUGFydChsb2NhbGVbZnVsbF0pO1xuICAgIHZhciByZXN1bHQgPSB0YXJnZXRMb2NhbGUgfHwgZnVsbExvY2FsZS5tYXAoZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiBmLnNsaWNlKDAsIG51bSk7XG4gICAgfSk7XG4gICAgaWYgKCFsb2NhbGVPcmRlcikgcmV0dXJuIHJlc3VsdDtcbiAgICB2YXIgd2Vla1N0YXJ0ID0gbG9jYWxlLndlZWtTdGFydDtcbiAgICByZXR1cm4gcmVzdWx0Lm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgIHJldHVybiByZXN1bHRbKGluZGV4ICsgKHdlZWtTdGFydCB8fCAwKSkgJSA3XTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ2V0RGF5anNMb2NhbGVPYmplY3QgPSBmdW5jdGlvbiBnZXREYXlqc0xvY2FsZU9iamVjdCgpIHtcbiAgICByZXR1cm4gZGF5anMuTHNbZGF5anMubG9jYWxlKCldO1xuICB9O1xuXG4gIHZhciBnZXRMb25nRGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIGdldExvbmdEYXRlRm9ybWF0KGwsIGZvcm1hdCkge1xuICAgIHJldHVybiBsLmZvcm1hdHNbZm9ybWF0XSB8fCB0KGwuZm9ybWF0c1tmb3JtYXQudG9VcHBlckNhc2UoKV0pO1xuICB9O1xuXG4gIHZhciBsb2NhbGVEYXRhID0gZnVuY3Rpb24gbG9jYWxlRGF0YSgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1vbnRoczogZnVuY3Rpb24gbW9udGhzKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZSA/IGluc3RhbmNlLmZvcm1hdCgnTU1NTScpIDogZ2V0U2hvcnQoX3RoaXMsICdtb250aHMnKTtcbiAgICAgIH0sXG4gICAgICBtb250aHNTaG9ydDogZnVuY3Rpb24gbW9udGhzU2hvcnQoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlID8gaW5zdGFuY2UuZm9ybWF0KCdNTU0nKSA6IGdldFNob3J0KF90aGlzLCAnbW9udGhzU2hvcnQnLCAnbW9udGhzJywgMyk7XG4gICAgICB9LFxuICAgICAgZmlyc3REYXlPZldlZWs6IGZ1bmN0aW9uIGZpcnN0RGF5T2ZXZWVrKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuJGxvY2FsZSgpLndlZWtTdGFydCB8fCAwO1xuICAgICAgfSxcbiAgICAgIHdlZWtkYXlzOiBmdW5jdGlvbiB3ZWVrZGF5cyhpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UgPyBpbnN0YW5jZS5mb3JtYXQoJ2RkZGQnKSA6IGdldFNob3J0KF90aGlzLCAnd2Vla2RheXMnKTtcbiAgICAgIH0sXG4gICAgICB3ZWVrZGF5c01pbjogZnVuY3Rpb24gd2Vla2RheXNNaW4oaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlID8gaW5zdGFuY2UuZm9ybWF0KCdkZCcpIDogZ2V0U2hvcnQoX3RoaXMsICd3ZWVrZGF5c01pbicsICd3ZWVrZGF5cycsIDIpO1xuICAgICAgfSxcbiAgICAgIHdlZWtkYXlzU2hvcnQ6IGZ1bmN0aW9uIHdlZWtkYXlzU2hvcnQoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlID8gaW5zdGFuY2UuZm9ybWF0KCdkZGQnKSA6IGdldFNob3J0KF90aGlzLCAnd2Vla2RheXNTaG9ydCcsICd3ZWVrZGF5cycsIDMpO1xuICAgICAgfSxcbiAgICAgIGxvbmdEYXRlRm9ybWF0OiBmdW5jdGlvbiBsb25nRGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIGdldExvbmdEYXRlRm9ybWF0KF90aGlzLiRsb2NhbGUoKSwgZm9ybWF0KTtcbiAgICAgIH0sXG4gICAgICBtZXJpZGllbTogdGhpcy4kbG9jYWxlKCkubWVyaWRpZW0sXG4gICAgICBvcmRpbmFsOiB0aGlzLiRsb2NhbGUoKS5vcmRpbmFsXG4gICAgfTtcbiAgfTtcblxuICBwcm90by5sb2NhbGVEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBsb2NhbGVEYXRhLmJpbmQodGhpcykoKTtcbiAgfTtcblxuICBkYXlqcy5sb2NhbGVEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsb2NhbGVPYmplY3QgPSBnZXREYXlqc0xvY2FsZU9iamVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICBmaXJzdERheU9mV2VlazogZnVuY3Rpb24gZmlyc3REYXlPZldlZWsoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGVPYmplY3Qud2Vla1N0YXJ0IHx8IDA7XG4gICAgICB9LFxuICAgICAgd2Vla2RheXM6IGZ1bmN0aW9uIHdlZWtkYXlzKCkge1xuICAgICAgICByZXR1cm4gZGF5anMud2Vla2RheXMoKTtcbiAgICAgIH0sXG4gICAgICB3ZWVrZGF5c1Nob3J0OiBmdW5jdGlvbiB3ZWVrZGF5c1Nob3J0KCkge1xuICAgICAgICByZXR1cm4gZGF5anMud2Vla2RheXNTaG9ydCgpO1xuICAgICAgfSxcbiAgICAgIHdlZWtkYXlzTWluOiBmdW5jdGlvbiB3ZWVrZGF5c01pbigpIHtcbiAgICAgICAgcmV0dXJuIGRheWpzLndlZWtkYXlzTWluKCk7XG4gICAgICB9LFxuICAgICAgbW9udGhzOiBmdW5jdGlvbiBtb250aHMoKSB7XG4gICAgICAgIHJldHVybiBkYXlqcy5tb250aHMoKTtcbiAgICAgIH0sXG4gICAgICBtb250aHNTaG9ydDogZnVuY3Rpb24gbW9udGhzU2hvcnQoKSB7XG4gICAgICAgIHJldHVybiBkYXlqcy5tb250aHNTaG9ydCgpO1xuICAgICAgfSxcbiAgICAgIGxvbmdEYXRlRm9ybWF0OiBmdW5jdGlvbiBsb25nRGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICAgICAgcmV0dXJuIGdldExvbmdEYXRlRm9ybWF0KGxvY2FsZU9iamVjdCwgZm9ybWF0KTtcbiAgICAgIH0sXG4gICAgICBtZXJpZGllbTogbG9jYWxlT2JqZWN0Lm1lcmlkaWVtLFxuICAgICAgb3JkaW5hbDogbG9jYWxlT2JqZWN0Lm9yZGluYWxcbiAgICB9O1xuICB9O1xuXG4gIGRheWpzLm1vbnRocyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0U2hvcnQoZ2V0RGF5anNMb2NhbGVPYmplY3QoKSwgJ21vbnRocycpO1xuICB9O1xuXG4gIGRheWpzLm1vbnRoc1Nob3J0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRTaG9ydChnZXREYXlqc0xvY2FsZU9iamVjdCgpLCAnbW9udGhzU2hvcnQnLCAnbW9udGhzJywgMyk7XG4gIH07XG5cbiAgZGF5anMud2Vla2RheXMgPSBmdW5jdGlvbiAobG9jYWxlT3JkZXIpIHtcbiAgICByZXR1cm4gZ2V0U2hvcnQoZ2V0RGF5anNMb2NhbGVPYmplY3QoKSwgJ3dlZWtkYXlzJywgbnVsbCwgbnVsbCwgbG9jYWxlT3JkZXIpO1xuICB9O1xuXG4gIGRheWpzLndlZWtkYXlzU2hvcnQgPSBmdW5jdGlvbiAobG9jYWxlT3JkZXIpIHtcbiAgICByZXR1cm4gZ2V0U2hvcnQoZ2V0RGF5anNMb2NhbGVPYmplY3QoKSwgJ3dlZWtkYXlzU2hvcnQnLCAnd2Vla2RheXMnLCAzLCBsb2NhbGVPcmRlcik7XG4gIH07XG5cbiAgZGF5anMud2Vla2RheXNNaW4gPSBmdW5jdGlvbiAobG9jYWxlT3JkZXIpIHtcbiAgICByZXR1cm4gZ2V0U2hvcnQoZ2V0RGF5anNMb2NhbGVPYmplY3QoKSwgJ3dlZWtkYXlzTWluJywgJ3dlZWtkYXlzJywgMiwgbG9jYWxlT3JkZXIpO1xuICB9O1xufSk7XG5cbmNvbnN0IGxvY2FsaXplZEZvcm1hdCA9IChmdW5jdGlvbiAobywgYywgZCkge1xuICB2YXIgcHJvdG8gPSBjLnByb3RvdHlwZTtcbiAgdmFyIG9sZEZvcm1hdCA9IHByb3RvLmZvcm1hdDtcbiAgZC5lbi5mb3JtYXRzID0gZW5nbGlzaEZvcm1hdHM7XG5cbiAgcHJvdG8uZm9ybWF0ID0gZnVuY3Rpb24gKGZvcm1hdFN0cikge1xuICAgIGlmIChmb3JtYXRTdHIgPT09IHZvaWQgMCkge1xuICAgICAgZm9ybWF0U3RyID0gRk9STUFUX0RFRkFVTFQ7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJCRsb2NhbGUgPSB0aGlzLiRsb2NhbGUoKSxcbiAgICAgICAgX3RoaXMkJGxvY2FsZSRmb3JtYXRzID0gX3RoaXMkJGxvY2FsZS5mb3JtYXRzLFxuICAgICAgICBmb3JtYXRzID0gX3RoaXMkJGxvY2FsZSRmb3JtYXRzID09PSB2b2lkIDAgPyB7fSA6IF90aGlzJCRsb2NhbGUkZm9ybWF0cztcblxuICAgIHZhciByZXN1bHQgPSB1KGZvcm1hdFN0ciwgZm9ybWF0cyk7XG4gICAgcmV0dXJuIG9sZEZvcm1hdC5jYWxsKHRoaXMsIHJlc3VsdCk7XG4gIH07XG59KTtcblxuLy8gUGx1Z2luIHRlbXBsYXRlIGZyb20gaHR0cHM6Ly9kYXkuanMub3JnL2RvY3MvZW4vcGx1Z2luL3BsdWdpblxuY29uc3QgcHJlUGFyc2VQb3N0Rm9ybWF0ID0gKGZ1bmN0aW9uIChvcHRpb24sIGRheWpzQ2xhc3MpIHtcbiAgdmFyIG9sZFBhcnNlID0gZGF5anNDbGFzcy5wcm90b3R5cGUucGFyc2U7XG5cbiAgZGF5anNDbGFzcy5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgaWYgKHR5cGVvZiBjZmcuZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBsb2NhbGUgPSB0aGlzLiRsb2NhbGUoKTtcbiAgICAgIGNmZy5kYXRlID0gbG9jYWxlICYmIGxvY2FsZS5wcmVwYXJzZSA/IGxvY2FsZS5wcmVwYXJzZShjZmcuZGF0ZSkgOiBjZmcuZGF0ZTtcbiAgICB9IC8vIG9yaWdpbmFsIHBhcnNlIHJlc3VsdFxuXG5cbiAgICByZXR1cm4gb2xkUGFyc2UuYmluZCh0aGlzKShjZmcpO1xuICB9OyAvLyAvLyBvdmVycmlkaW5nIGV4aXN0aW5nIEFQSVxuICAvLyAvLyBlLmcuIGV4dGVuZCBkYXlqcygpLmZvcm1hdCgpXG5cblxuICB2YXIgb2xkRm9ybWF0ID0gZGF5anNDbGFzcy5wcm90b3R5cGUuZm9ybWF0O1xuXG4gIGRheWpzQ2xhc3MucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgLy8gb3JpZ2luYWwgZm9ybWF0IHJlc3VsdFxuICAgIHZhciByZXN1bHQgPSBvbGRGb3JtYXQuY2FsbC5hcHBseShvbGRGb3JtYXQsIFt0aGlzXS5jb25jYXQoYXJncykpOyAvLyByZXR1cm4gbW9kaWZpZWQgcmVzdWx0XG5cbiAgICB2YXIgbG9jYWxlID0gdGhpcy4kbG9jYWxlKCk7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUucG9zdGZvcm1hdCA/IGxvY2FsZS5wb3N0Zm9ybWF0KHJlc3VsdCkgOiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIG9sZEZyb21UbyA9IGRheWpzQ2xhc3MucHJvdG90eXBlLmZyb21Ub0Jhc2U7XG5cbiAgaWYgKG9sZEZyb21Ubykge1xuICAgIGRheWpzQ2xhc3MucHJvdG90eXBlLmZyb21Ub0Jhc2UgPSBmdW5jdGlvbiAoaW5wdXQsIHdpdGhvdXRTdWZmaXgsIGluc3RhbmNlLCBpc0Zyb20pIHtcbiAgICAgIHZhciBsb2NhbGUgPSB0aGlzLiRsb2NhbGUoKSB8fCBpbnN0YW5jZS4kbG9jYWxlKCk7IC8vIG9yaWdpbmFsIGZvcm1hdCByZXN1bHRcblxuICAgICAgcmV0dXJuIG9sZEZyb21Uby5jYWxsKHRoaXMsIGlucHV0LCB3aXRob3V0U3VmZml4LCBpbnN0YW5jZSwgaXNGcm9tLCBsb2NhbGUgJiYgbG9jYWxlLnBvc3Rmb3JtYXQpO1xuICAgIH07XG4gIH1cbn0pO1xuXG5jb25zdCB1cGRhdGVMb2NhbGUgPSAoZnVuY3Rpb24gKG9wdGlvbiwgRGF5anMsIGRheWpzKSB7XG4gIGRheWpzLnVwZGF0ZUxvY2FsZSA9IGZ1bmN0aW9uIChsb2NhbGUsIGN1c3RvbUNvbmZpZykge1xuICAgIHZhciBsb2NhbGVMaXN0ID0gZGF5anMuTHM7XG4gICAgdmFyIGxvY2FsZUNvbmZpZyA9IGxvY2FsZUxpc3RbbG9jYWxlXTtcbiAgICBpZiAoIWxvY2FsZUNvbmZpZykgcmV0dXJuO1xuICAgIHZhciBjdXN0b21Db25maWdLZXlzID0gY3VzdG9tQ29uZmlnID8gT2JqZWN0LmtleXMoY3VzdG9tQ29uZmlnKSA6IFtdO1xuICAgIGN1c3RvbUNvbmZpZ0tleXMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgbG9jYWxlQ29uZmlnW2NdID0gY3VzdG9tQ29uZmlnW2NdO1xuICAgIH0pO1xuICAgIHJldHVybiBsb2NhbGVDb25maWc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgfTtcbn0pO1xuXG5jb25zdCBpbnB1dFRpbWVQaWNrZXJDc3MgPSBcIkBrZXlmcmFtZXMgaW57MCV7b3BhY2l0eTowfTEwMCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGluLWRvd257MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAtNXB4LCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tdXB7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCA1cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1yaWdodHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC01cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1sZWZ0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoNXB4LCAwLCAwKX0xMDAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwgMCwgMCl9fUBrZXlmcmFtZXMgaW4tc2NhbGV7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNEKDAuOTUsIDAuOTUsIDEpfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZTNEKDEsIDEsIDEpfX06cm9vdHstLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZzpjYWxjKDE1MG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOnZhcigtLWNhbGNpdGUtZHVyYXRpb24tZmFjdG9yLCAxKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1mYXN0OmNhbGMoMTAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLW1lZGl1bTpjYWxjKDIwMG1zICogdmFyKC0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3IpKTstLWNhbGNpdGUtaW50ZXJuYWwtYW5pbWF0aW9uLXRpbWluZy1zbG93OmNhbGMoMzAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpfS5jYWxjaXRlLWFuaW1hdGV7b3BhY2l0eTowO2FuaW1hdGlvbi1maWxsLW1vZGU6Ym90aDthbmltYXRpb24tZHVyYXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKX0uY2FsY2l0ZS1hbmltYXRlX19pbnthbmltYXRpb24tbmFtZTppbn0uY2FsY2l0ZS1hbmltYXRlX19pbi1kb3due2FuaW1hdGlvbi1uYW1lOmluLWRvd259LmNhbGNpdGUtYW5pbWF0ZV9faW4tdXB7YW5pbWF0aW9uLW5hbWU6aW4tdXB9LmNhbGNpdGUtYW5pbWF0ZV9faW4tcmlnaHR7YW5pbWF0aW9uLW5hbWU6aW4tcmlnaHR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tbGVmdHthbmltYXRpb24tbmFtZTppbi1sZWZ0fS5jYWxjaXRlLWFuaW1hdGVfX2luLXNjYWxle2FuaW1hdGlvbi1uYW1lOmluLXNjYWxlfUBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKXs6cm9vdHstLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yOjAuMDF9fTpyb290ey0tY2FsY2l0ZS1mbG9hdGluZy11aS10cmFuc2l0aW9uOnZhcigtLWNhbGNpdGUtYW5pbWF0aW9uLXRpbWluZyk7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXotaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1kcm9wZG93bil9Omhvc3QoW2hpZGRlbl0pe2Rpc3BsYXk6bm9uZX06aG9zdChbZGlzYWJsZWRdKXtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvcGFjaXR5OnZhcigtLWNhbGNpdGUtdWktb3BhY2l0eS1kaXNhYmxlZCl9Omhvc3QoW2Rpc2FibGVkXSkgKiw6aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoKil7cG9pbnRlci1ldmVudHM6bm9uZX06aG9zdHtkaXNwbGF5OmlubGluZS1ibG9jazstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX06aG9zdChbZGlzYWJsZWRdKSA6OnNsb3R0ZWQoW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXSksOmhvc3QoW2Rpc2FibGVkXSkgW2NhbGNpdGUtaHlkcmF0ZWRdW2Rpc2FibGVkXXtvcGFjaXR5OjF9OjpzbG90dGVkKGlucHV0W3Nsb3Q9aGlkZGVuLWZvcm0taW5wdXRdKXttYXJnaW46MCAhaW1wb3J0YW50O29wYWNpdHk6MCAhaW1wb3J0YW50O291dGxpbmU6bm9uZSAhaW1wb3J0YW50O3BhZGRpbmc6MCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7aW5zZXQ6MCAhaW1wb3J0YW50O3RyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmUgIWltcG9ydGFudDt6LWluZGV4Oi0xICFpbXBvcnRhbnR9Omhvc3QoW3NjYWxlPXNdKXstLWNhbGNpdGUtdG9nZ2xlLXNwYWNpbmc6MC41cmVtfTpob3N0KFtzY2FsZT1tXSl7LS1jYWxjaXRlLXRvZ2dsZS1zcGFjaW5nOjAuNzVyZW19Omhvc3QoW3NjYWxlPWxdKXstLWNhbGNpdGUtdG9nZ2xlLXNwYWNpbmc6MXJlbX0uaW5wdXQtd3JhcHBlcntwb3NpdGlvbjpyZWxhdGl2ZX0udG9nZ2xlLWljb257cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpmbGV4O2lubGluZS1zaXplOjFyZW07Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2luc2V0LWlubGluZS1lbmQ6MDtpbnNldC1ibG9jazowO3BhZGRpbmctaW5saW5lOnZhcigtLWNhbGNpdGUtdG9nZ2xlLXNwYWNpbmcpfVwiO1xuXG4vLyBzb21lIGJ1bmRsZXJzIChlLmcuLCBXZWJwYWNrKSBuZWVkIGR5bmFtaWMgaW1wb3J0IHBhdGhzIHRvIGJlIHN0YXRpY1xuY29uc3Qgc3VwcG9ydGVkRGF5SnNMb2NhbGVUb0xvY2FsZUNvbmZpZ0ltcG9ydCA9IG5ldyBNYXAoW1xuICBbXCJhclwiLCAoKSA9PiBpbXBvcnQoJy4vYXItY2Q4OWEwOGIuanMnKV0sXG4gIFtcImJnXCIsICgpID0+IGltcG9ydCgnLi9iZy1iMDc1NDBlYy5qcycpXSxcbiAgW1wiYnNcIiwgKCkgPT4gaW1wb3J0KCcuL2JzLTY2YzViZTZiLmpzJyldLFxuICBbXCJjYVwiLCAoKSA9PiBpbXBvcnQoJy4vY2EtY2YxNjRhYTkuanMnKV0sXG4gIFtcImNzXCIsICgpID0+IGltcG9ydCgnLi9jcy1jYjZiOWI0Yy5qcycpXSxcbiAgW1wiZGFcIiwgKCkgPT4gaW1wb3J0KCcuL2RhLTA5ZDhkYzM3LmpzJyldLFxuICBbXCJkZVwiLCAoKSA9PiBpbXBvcnQoJy4vZGUtNjIwZGNkMzguanMnKV0sXG4gIFtcImRlLWF0XCIsICgpID0+IGltcG9ydCgnLi9kZS1hdC04OGU2MTkzNi5qcycpXSxcbiAgW1wiZGUtY2hcIiwgKCkgPT4gaW1wb3J0KCcuL2RlLWNoLWIzMjJiYTZmLmpzJyldLFxuICBbXCJlbFwiLCAoKSA9PiBpbXBvcnQoJy4vZWwtY2EwYWU1NzkuanMnKV0sXG4gIFtcImVuXCIsICgpID0+IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gZW4kMTsgfSldLFxuICBbXCJlbi1hdVwiLCAoKSA9PiBpbXBvcnQoJy4vZW4tYXUtM2UzOTQ1MGIuanMnKV0sXG4gIFtcImVuLWNhXCIsICgpID0+IGltcG9ydCgnLi9lbi1jYS1kMmQyNTRmNi5qcycpXSxcbiAgW1wiZW4tZ2JcIiwgKCkgPT4gaW1wb3J0KCcuL2VuLWdiLTM3ZGIwYjE5LmpzJyldLFxuICBbXCJlc1wiLCAoKSA9PiBpbXBvcnQoJy4vZXMtMzQ4MDNlODcuanMnKV0sXG4gIFtcImVzLW14XCIsICgpID0+IGltcG9ydCgnLi9lcy1teC00ZTlkZjJmOC5qcycpXSxcbiAgW1wiZXRcIiwgKCkgPT4gaW1wb3J0KCcuL2V0LTM0ZjQyN2YwLmpzJyldLFxuICBbXCJmaVwiLCAoKSA9PiBpbXBvcnQoJy4vZmktZTc1ODc4YzYuanMnKV0sXG4gIFtcImZyXCIsICgpID0+IGltcG9ydCgnLi9mci1hMmVmMDEyZi5qcycpXSxcbiAgW1wiZnItY2hcIiwgKCkgPT4gaW1wb3J0KCcuL2ZyLWNoLWM5MjVlMGZjLmpzJyldLFxuICBbXCJoZVwiLCAoKSA9PiBpbXBvcnQoJy4vaGUtZWNkMmRlODUuanMnKV0sXG4gIFtcImhpXCIsICgpID0+IGltcG9ydCgnLi9oaS1kNDk4YjM4Ni5qcycpXSxcbiAgW1wiaHJcIiwgKCkgPT4gaW1wb3J0KCcuL2hyLWY0N2YzYmZiLmpzJyldLFxuICBbXCJodVwiLCAoKSA9PiBpbXBvcnQoJy4vaHUtZjVkZjM0ZWEuanMnKV0sXG4gIFtcImlkXCIsICgpID0+IGltcG9ydCgnLi9pZC1iYThhNjVkNC5qcycpXSxcbiAgW1wiaXRcIiwgKCkgPT4gaW1wb3J0KCcuL2l0LWFmMzg1ZjBmLmpzJyldLFxuICBbXCJpdC1jaFwiLCAoKSA9PiBpbXBvcnQoJy4vaXQtY2gtODlmOWQ2ZWYuanMnKV0sXG4gIFtcImphXCIsICgpID0+IGltcG9ydCgnLi9qYS0wMjIyMDRkNS5qcycpXSxcbiAgW1wia29cIiwgKCkgPT4gaW1wb3J0KCcuL2tvLWY1MjM3NDlmLmpzJyldLFxuICBbXCJsdFwiLCAoKSA9PiBpbXBvcnQoJy4vbHQtZWNjMjNkOTMuanMnKV0sXG4gIFtcImx2XCIsICgpID0+IGltcG9ydCgnLi9sdi1hNzEzMWQ4Zi5qcycpXSxcbiAgW1wibWtcIiwgKCkgPT4gaW1wb3J0KCcuL21rLTA3NzY0ZjU0LmpzJyldLFxuICBbXCJubFwiLCAoKSA9PiBpbXBvcnQoJy4vbmwtNzc0NDk4MzQuanMnKV0sXG4gIFtcIm5iXCIsICgpID0+IGltcG9ydCgnLi9uYi0wZjM1YzljYy5qcycpXSxcbiAgW1wicGxcIiwgKCkgPT4gaW1wb3J0KCcuL3BsLTliYzNiMjAxLmpzJyldLFxuICBbXCJwdFwiLCAoKSA9PiBpbXBvcnQoJy4vcHQtMDAyYjgzM2UuanMnKV0sXG4gIFtcInB0LWJyXCIsICgpID0+IGltcG9ydCgnLi9wdC1ici1lMDkzMGNlNy5qcycpXSxcbiAgW1wicm9cIiwgKCkgPT4gaW1wb3J0KCcuL3JvLWJiYTgxZjQ3LmpzJyldLFxuICBbXCJydVwiLCAoKSA9PiBpbXBvcnQoJy4vcnUtMGYzOTI1MWUuanMnKV0sXG4gIFtcInNrXCIsICgpID0+IGltcG9ydCgnLi9zay00YTE1MWYwOS5qcycpXSxcbiAgW1wic2xcIiwgKCkgPT4gaW1wb3J0KCcuL3NsLWFhNzg2MWZkLmpzJyldLFxuICBbXCJzclwiLCAoKSA9PiBpbXBvcnQoJy4vc3ItYTJjZGZlYjkuanMnKV0sXG4gIFtcInN2XCIsICgpID0+IGltcG9ydCgnLi9zdi1jYTAwZTVlMy5qcycpXSxcbiAgW1widGhcIiwgKCkgPT4gaW1wb3J0KCcuL3RoLTAzMTczMjRkLmpzJyldLFxuICBbXCJ0clwiLCAoKSA9PiBpbXBvcnQoJy4vdHItOGZlYjQyMDIuanMnKV0sXG4gIFtcInVrXCIsICgpID0+IGltcG9ydCgnLi91ay0wOTRkMDFkYS5qcycpXSxcbiAgW1widmlcIiwgKCkgPT4gaW1wb3J0KCcuL3ZpLWQxYmFhMDYwLmpzJyldLFxuICBbXCJ6aC1jblwiLCAoKSA9PiBpbXBvcnQoJy4vemgtY24tOTE2NDRmZDQuanMnKV0sXG4gIFtcInpoLWhrXCIsICgpID0+IGltcG9ydCgnLi96aC1oay04MmQwNmQ0MC5qcycpXSxcbiAgW1wiemgtdHdcIiwgKCkgPT4gaW1wb3J0KCcuL3poLXR3LTI5OTJkYjM0LmpzJyldXG5dKTtcbmRheWpzLmV4dGVuZChjdXN0b21QYXJzZUZvcm1hdCk7XG5kYXlqcy5leHRlbmQobG9jYWxlRGF0YSk7XG5kYXlqcy5leHRlbmQobG9jYWxpemVkRm9ybWF0KTtcbmRheWpzLmV4dGVuZChwcmVQYXJzZVBvc3RGb3JtYXQpO1xuZGF5anMuZXh0ZW5kKHVwZGF0ZUxvY2FsZSk7XG5jb25zdCBJbnB1dFRpbWVQaWNrZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcbiAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgIHRoaXMuY2FsY2l0ZUlucHV0VGltZVBpY2tlckNoYW5nZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUlucHV0VGltZVBpY2tlckNoYW5nZVwiLCA3KTtcbiAgICB0aGlzLmZvY3VzT25PcGVuID0gZmFsc2U7XG4gICAgdGhpcy5kaWFsb2dJZCA9IGB0aW1lLXBpY2tlci1kaWFsb2ctLSR7Z3VpZCgpfWA7XG4gICAgLyoqIHdoZXRoZXIgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dCB3YXMgY2hhbmdlZCBhcyBhIHJlc3VsdCBvZiB1c2VyIHR5cGluZyBvciBub3QgKi9cbiAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBmYWxzZTtcbiAgICB0aGlzLnJlZmVyZW5jZUVsZW1lbnRJZCA9IGBpbnB1dC10aW1lLXBpY2tlci0ke2d1aWQoKX1gO1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBFdmVudCBMaXN0ZW5lcnNcbiAgICAvL1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmhvc3RCbHVySGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmNhbGNpdGVJbnB1dEVsLnZhbHVlO1xuICAgICAgY29uc3QgZGVsb2NhbGl6ZWRJbnB1dFZhbHVlID0gdGhpcy5kZWxvY2FsaXplVGltZVN0cmluZyhpbnB1dFZhbHVlKTtcbiAgICAgIGlmICghZGVsb2NhbGl6ZWRJbnB1dFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChkZWxvY2FsaXplZElucHV0VmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShkZWxvY2FsaXplZElucHV0VmFsdWUpO1xuICAgICAgfVxuICAgICAgY29uc3QgbG9jYWxpemVkVGltZVN0cmluZyA9IGxvY2FsaXplVGltZVN0cmluZyh7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBpbmNsdWRlU2Vjb25kczogdGhpcy5zaG91bGRJbmNsdWRlU2Vjb25kcygpXG4gICAgICB9KTtcbiAgICAgIGlmIChsb2NhbGl6ZWRUaW1lU3RyaW5nICE9PSBpbnB1dFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShsb2NhbGl6ZWRUaW1lU3RyaW5nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnJlYWRPbmx5KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dElucHV0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBlZmZlY3RpdmVMb2NhbGU6IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0gPSB0aGlzO1xuICAgICAgaWYgKG51bWJlcmluZ1N5c3RlbSAmJiBudW1iZXJpbmdTeXN0ZW0gIT09IFwibGF0blwiKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbnVtYmVyU3RyaW5nRm9ybWF0dGVyLm51bWJlckZvcm1hdE9wdGlvbnMgPSB7XG4gICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgIG51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgICB1c2VHcm91cGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdmFsdWVJbk51bWJlcmluZ1N5c3RlbSA9IG51bWJlclN0cmluZ0Zvcm1hdHRlclxuICAgICAgICAgIC5kZWxvY2FsaXplKHRhcmdldC52YWx1ZSlcbiAgICAgICAgICAuc3BsaXQoXCJcIilcbiAgICAgICAgICAubWFwKChjaGFyKSA9PiBudW1iZXJLZXlzLmluY2x1ZGVzKGNoYXIpXG4gICAgICAgICAgPyBudW1iZXJTdHJpbmdGb3JtYXR0ZXIubnVtYmVyRm9ybWF0dGVyLmZvcm1hdChOdW1iZXIoY2hhcikpXG4gICAgICAgICAgOiBjaGFyKVxuICAgICAgICAgIC5qb2luKFwiXCIpO1xuICAgICAgICB0aGlzLnNldElucHV0VmFsdWUodmFsdWVJbk51bWJlcmluZ1N5c3RlbSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnRpbWVQaWNrZXJDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgICAgY29uc3QgaW5jbHVkZVNlY29uZHMgPSB0aGlzLnNob3VsZEluY2x1ZGVTZWNvbmRzKCk7XG4gICAgICB0aGlzLnNldFZhbHVlKHRvSVNPVGltZVN0cmluZyh2YWx1ZSwgaW5jbHVkZVNlY29uZHMpKTtcbiAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShsb2NhbGl6ZVRpbWVTdHJpbmcoe1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgaW5jbHVkZVNlY29uZHNcbiAgICAgIH0pKTtcbiAgICB9O1xuICAgIHRoaXMucG9wb3ZlckNsb3NlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIGRlYWN0aXZhdGVGb2N1c1RyYXAodGhpcywge1xuICAgICAgICBvbkRlYWN0aXZhdGU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNhbGNpdGVJbnB1dEVsLnNldEZvY3VzKCk7XG4gICAgICAgICAgdGhpcy5mb2N1c09uT3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMucG9wb3Zlck9wZW5IYW5kbGVyID0gKCkgPT4ge1xuICAgICAgYWN0aXZhdGVGb2N1c1RyYXAodGhpcywge1xuICAgICAgICBvbkFjdGl2YXRlOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZm9jdXNPbk9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY2l0ZVRpbWVQaWNrZXJFbC5zZXRGb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c09uT3BlbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmtleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGRlZmF1bHRQcmV2ZW50ZWQsIGtleSB9ID0gZXZlbnQ7XG4gICAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgaWYgKHN1Ym1pdEZvcm0odGhpcykpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuY2FsY2l0ZUlucHV0RWwuc2V0Rm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXModGhpcy5jYWxjaXRlVGltZVBpY2tlckVsKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZGVsb2NhbGl6ZVRpbWVTdHJpbmcodGhpcy5jYWxjaXRlSW5wdXRFbC52YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICBjb25zdCBsb2NhbGl6ZWRUaW1lU3RyaW5nID0gbG9jYWxpemVUaW1lU3RyaW5nKHtcbiAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgICAgaW5jbHVkZVNlY29uZHM6IHRoaXMuc2hvdWxkSW5jbHVkZVNlY29uZHMoKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5ld1ZhbHVlICYmIHRoaXMuY2FsY2l0ZUlucHV0RWwudmFsdWUgIT09IGxvY2FsaXplZFRpbWVTdHJpbmcpIHtcbiAgICAgICAgICB0aGlzLnNldElucHV0VmFsdWUobG9jYWxpemVkVGltZVN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmZvY3VzT25PcGVuID0gdHJ1ZTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJFc2NhcGVcIiAmJiB0aGlzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2FsY2l0ZUlucHV0RWwuc2V0Rm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0Q2FsY2l0ZVBvcG92ZXJFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5wb3BvdmVyRWwgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0Q2FsY2l0ZUlucHV0RWwgPSAoZWwpID0+IHtcbiAgICAgIHRoaXMuY2FsY2l0ZUlucHV0RWwgPSBlbDtcbiAgICB9O1xuICAgIHRoaXMuc2V0Q2FsY2l0ZVRpbWVQaWNrZXJFbCA9IChlbCkgPT4ge1xuICAgICAgdGhpcy5jYWxjaXRlVGltZVBpY2tlckVsID0gZWw7XG4gICAgICBjb25uZWN0Rm9jdXNUcmFwKHRoaXMsIHtcbiAgICAgICAgZm9jdXNUcmFwRWw6IGVsLFxuICAgICAgICBmb2N1c1RyYXBPcHRpb25zOiB7XG4gICAgICAgICAgaW5pdGlhbEZvY3VzOiBmYWxzZSxcbiAgICAgICAgICBzZXRSZXR1cm5Gb2N1czogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLnNldElucHV0VmFsdWUgPSAobmV3SW5wdXRWYWx1ZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNhbGNpdGVJbnB1dEVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY2l0ZUlucHV0RWwudmFsdWUgPSBuZXdJbnB1dFZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgYW5kIGVtaXRzIGEgY2hhbmdlIGV2ZW50LlxuICAgICAqIFRoaXMgaXMgdXNlZCB0byB1cGRhdGUgdGhlIHZhbHVlIGFzIGEgcmVzdWx0IG9mIHVzZXIgaW50ZXJhY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICB0aGlzLnNldFZhbHVlID0gKHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IGZvcm1hdFRpbWVTdHJpbmcodmFsdWUpIHx8IFwiXCI7XG4gICAgICBpZiAobmV3VmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IHRydWU7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWUgfHwgXCJcIjtcbiAgICAgIGNvbnN0IGNoYW5nZUV2ZW50ID0gdGhpcy5jYWxjaXRlSW5wdXRUaW1lUGlja2VyQ2hhbmdlLmVtaXQoKTtcbiAgICAgIGlmIChjaGFuZ2VFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMudXNlckNoYW5nZWRWYWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhbHVlID0gb2xkVmFsdWU7XG4gICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShsb2NhbGl6ZVRpbWVTdHJpbmcoe1xuICAgICAgICAgIHZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICBsb2NhbGU6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLFxuICAgICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgICAgaW5jbHVkZVNlY29uZHM6IHRoaXMuc2hvdWxkSW5jbHVkZVNlY29uZHMoKVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBkaXJlY3RseSB3aXRob3V0IGVtaXR0aW5nIGEgY2hhbmdlIGV2ZW50LlxuICAgICAqIFRoaXMgaXMgdXNlZCB0byB1cGRhdGUgdGhlIHZhbHVlIG9uIGluaXRpYWwgbG9hZCBhbmQgd2hlbiBwcm9wcyBjaGFuZ2UgdGhhdCBhcmUgbm90IHRoZSByZXN1bHQgb2YgdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHRoaXMuc2V0VmFsdWVEaXJlY3RseSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVNlY29uZHMgPSB0aGlzLnNob3VsZEluY2x1ZGVTZWNvbmRzKCk7XG4gICAgICB0aGlzLnZhbHVlID0gdG9JU09UaW1lU3RyaW5nKHZhbHVlLCBpbmNsdWRlU2Vjb25kcyk7XG4gICAgICB0aGlzLnNldElucHV0VmFsdWUodGhpcy52YWx1ZVxuICAgICAgICA/IGxvY2FsaXplVGltZVN0cmluZyh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgaW5jbHVkZVNlY29uZHMsXG4gICAgICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtXG4gICAgICAgIH0pXG4gICAgICAgIDogXCJcIik7XG4gICAgfTtcbiAgICB0aGlzLm9uSW5wdXRXcmFwcGVyQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLm9wZW4gPSAhdGhpcy5vcGVuO1xuICAgIH07XG4gICAgdGhpcy5kZWFjdGl2YXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5mb2N1c1RyYXBEaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZm9ybSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgdGhpcy5tZXNzYWdlT3ZlcnJpZGVzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5uYW1lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubnVtYmVyaW5nU3lzdGVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVxdWlyZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNjYWxlID0gXCJtXCI7XG4gICAgdGhpcy5vdmVybGF5UG9zaXRpb25pbmcgPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy5wbGFjZW1lbnQgPSBcImF1dG9cIjtcbiAgICB0aGlzLnN0ZXAgPSA2MDtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gIH1cbiAgb3BlbkhhbmRsZXIodmFsdWUpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLnJlYWRPbmx5KSB7XG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnJlcG9zaXRpb24odHJ1ZSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUZvY3VzVHJhcERpc2FibGVkKGZvY3VzVHJhcERpc2FibGVkKSB7XG4gICAgaWYgKCF0aGlzLm9wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9jdXNUcmFwRGlzYWJsZWQgPyBkZWFjdGl2YXRlRm9jdXNUcmFwKHRoaXMpIDogYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gIH1cbiAgaGFuZGxlRGlzYWJsZWRBbmRSZWFkT25seUNoYW5nZSh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgbnVtYmVyaW5nU3lzdGVtV2F0Y2hlcihudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICB0aGlzLnNldElucHV0VmFsdWUobG9jYWxpemVUaW1lU3RyaW5nKHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgbG9jYWxlOiB0aGlzLmVmZmVjdGl2ZUxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbSxcbiAgICAgIGluY2x1ZGVTZWNvbmRzOiB0aGlzLnNob3VsZEluY2x1ZGVTZWNvbmRzKClcbiAgICB9KSk7XG4gIH1cbiAgc3RlcFdhdGNoZXIobmV3U3RlcCwgb2xkU3RlcCkge1xuICAgIGlmICgob2xkU3RlcCA+PSA2MCAmJiBuZXdTdGVwID4gMCAmJiBuZXdTdGVwIDwgNjApIHx8XG4gICAgICAobmV3U3RlcCA+PSA2MCAmJiBvbGRTdGVwID4gMCAmJiBvbGRTdGVwIDwgNjApKSB7XG4gICAgICB0aGlzLnNldFZhbHVlRGlyZWN0bHkodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG4gIHZhbHVlV2F0Y2hlcihuZXdWYWx1ZSkge1xuICAgIGlmICghdGhpcy51c2VyQ2hhbmdlZFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlRGlyZWN0bHkobmV3VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnVzZXJDaGFuZ2VkVmFsdWUgPSBmYWxzZTtcbiAgfVxuICBhc3luYyBlZmZlY3RpdmVMb2NhbGVXYXRjaGVyKGxvY2FsZSkge1xuICAgIGF3YWl0IHRoaXMubG9hZERhdGVUaW1lTG9jYWxlRGF0YSgpO1xuICAgIHRoaXMuc2V0SW5wdXRWYWx1ZShsb2NhbGl6ZVRpbWVTdHJpbmcoe1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBsb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgaW5jbHVkZVNlY29uZHM6IHRoaXMuc2hvdWxkSW5jbHVkZVNlY29uZHMoKVxuICAgIH0pKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUHVibGljIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudC4gKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgfVxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIGRlbGF5ZWRcbiAgICovXG4gIGFzeW5jIHJlcG9zaXRpb24oZGVsYXllZCA9IGZhbHNlKSB7XG4gICAgdGhpcy5wb3BvdmVyRWw/LnJlcG9zaXRpb24oZGVsYXllZCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkZWxvY2FsaXplVGltZVN0cmluZyh2YWx1ZSkge1xuICAgIC8vIHdlIG5lZWQgdG8gc2V0IHRoZSBjb3JyZXNwb25kaW5nIGxvY2FsZSBiZWZvcmUgcGFyc2luZywgb3RoZXJ3aXNlIGl0IGRlZmF1bHRzIHRvIEVuZ2xpc2ggKHBvc3NpYmxlIGRheWpzIGJ1ZylcbiAgICBkYXlqcy5sb2NhbGUodGhpcy5lZmZlY3RpdmVMb2NhbGUudG9Mb3dlckNhc2UoKSk7XG4gICAgY29uc3QgZGF5anNQYXJzZVJlc3VsdCA9IGRheWpzKHZhbHVlLCBbXCJMVFNcIiwgXCJMVFwiXSk7XG4gICAgaWYgKGRheWpzUGFyc2VSZXN1bHQuaXNWYWxpZCgpKSB7XG4gICAgICBsZXQgdW5mb3JtYXR0ZWRUaW1lU3RyaW5nID0gYCR7ZGF5anNQYXJzZVJlc3VsdC5nZXQoXCJob3VyXCIpfToke2RheWpzUGFyc2VSZXN1bHQuZ2V0KFwibWludXRlXCIpfWA7XG4gICAgICBpZiAodGhpcy5zaG91bGRJbmNsdWRlU2Vjb25kcygpKSB7XG4gICAgICAgIHVuZm9ybWF0dGVkVGltZVN0cmluZyArPSBgOiR7ZGF5anNQYXJzZVJlc3VsdC5nZXQoXCJzZWNvbmRzXCIpIHx8IDB9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXRUaW1lU3RyaW5nKHVuZm9ybWF0dGVkVGltZVN0cmluZykgfHwgXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgYXN5bmMgbG9hZERhdGVUaW1lTG9jYWxlRGF0YSgpIHtcbiAgICBsZXQgc3VwcG9ydGVkTG9jYWxlID0gZ2V0U3VwcG9ydGVkTG9jYWxlKHRoaXMuZWZmZWN0aXZlTG9jYWxlKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzdXBwb3J0ZWRMb2NhbGUgPT09IFwibm9cIikge1xuICAgICAgc3VwcG9ydGVkTG9jYWxlID0gXCJuYlwiO1xuICAgIH1cbiAgICBpZiAoc3VwcG9ydGVkTG9jYWxlID09PSBcInB0LXB0XCIpIHtcbiAgICAgIHN1cHBvcnRlZExvY2FsZSA9IFwicHRcIjtcbiAgICB9XG4gICAgY29uc3QgeyBkZWZhdWx0OiBsb2NhbGVDb25maWcgfSA9IGF3YWl0IHN1cHBvcnRlZERheUpzTG9jYWxlVG9Mb2NhbGVDb25maWdJbXBvcnQuZ2V0KHN1cHBvcnRlZExvY2FsZSkoKTtcbiAgICBkYXlqcy5sb2NhbGUobG9jYWxlQ29uZmlnLCBudWxsLCB0cnVlKTtcbiAgICBkYXlqcy51cGRhdGVMb2NhbGUoc3VwcG9ydGVkTG9jYWxlLCB0aGlzLmdldEV4dGVuZGVkTG9jYWxlQ29uZmlnKHN1cHBvcnRlZExvY2FsZSkpO1xuICB9XG4gIGdldEV4dGVuZGVkTG9jYWxlQ29uZmlnKGxvY2FsZSkge1xuICAgIGlmIChsb2NhbGUgPT09IFwiYXJcIikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVyaWRpZW06IChob3VyKSA9PiAoaG91ciA+IDEyID8gXCLZhVwiIDogXCLYtVwiKSxcbiAgICAgICAgZm9ybWF0czoge1xuICAgICAgICAgIExUOiBcIkhIOm1tIEFcIixcbiAgICAgICAgICBMVFM6IFwiSEg6bW06c3MgQVwiLFxuICAgICAgICAgIEw6IFwiREQvTU0vWVlZWVwiLFxuICAgICAgICAgIExMOiBcIkQgTU1NTSBZWVlZXCIsXG4gICAgICAgICAgTExMOiBcIkQgTU1NTSBZWVlZIEhIOm1tIEFcIixcbiAgICAgICAgICBMTExMOiBcImRkZGQgRCBNTU1NIFlZWVkgSEg6bW0gQVwiXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChsb2NhbGUgPT09IFwiZW4tYXVcIikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWVyaWRpZW06IChob3VyKSA9PiAoaG91ciA+IDEyID8gXCJwbVwiIDogXCJhbVwiKVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGxvY2FsZSA9PT0gXCJlbi1jYVwiKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXJpZGllbTogKGhvdXIpID0+IChob3VyID4gMTIgPyBcInAubS5cIiA6IFwiYS5tLlwiKVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGxvY2FsZSA9PT0gXCJlbFwiKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXJpZGllbTogKGhvdXIpID0+IChob3VyID4gMTIgPyBcIs68Ls68LlwiIDogXCLPgC7OvC5cIilcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChsb2NhbGUgPT09IFwiaGlcIikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0czoge1xuICAgICAgICAgIExUOiBcImg6bW0gQVwiLFxuICAgICAgICAgIExUUzogXCJoOm1tOnNzIEFcIixcbiAgICAgICAgICBMOiBcIkREL01NL1lZWVlcIixcbiAgICAgICAgICBMTDogXCJEIE1NTU0gWVlZWVwiLFxuICAgICAgICAgIExMTDogXCJEIE1NTU0gWVlZWSwgaDptbSBBXCIsXG4gICAgICAgICAgTExMTDogXCJkZGRkLCBEIE1NTU0gWVlZWSwgaDptbSBBXCJcbiAgICAgICAgfSxcbiAgICAgICAgbWVyaWRpZW06IChob3VyKSA9PiAoaG91ciA+IDEyID8gXCJwbVwiIDogXCJhbVwiKVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGxvY2FsZSA9PT0gXCJrb1wiKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZXJpZGllbTogKGhvdXIpID0+IChob3VyID4gMTIgPyBcIuyYpO2bhFwiIDogXCLsmKTsoIRcIilcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChsb2NhbGUgPT09IFwiemgtdHdcIikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0czoge1xuICAgICAgICAgIExUOiBcIkFISDptbVwiLFxuICAgICAgICAgIExUUzogXCJBSEg6bW06c3NcIlxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAobG9jYWxlID09PSBcInpoLWhrXCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdHM6IHtcbiAgICAgICAgICBMVDogXCJBSEg6bW1cIixcbiAgICAgICAgICBMVFM6IFwiQUhIOm1tOnNzXCJcbiAgICAgICAgfSxcbiAgICAgICAgbWVyaWRpZW06IChob3VyKSA9PiAoaG91ciA+IDEyID8gXCLkuIvljYhcIiA6IFwi5LiK5Y2IXCIpXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBvbkxhYmVsQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRGb2N1cygpO1xuICB9XG4gIHNob3VsZEluY2x1ZGVTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXAgPCA2MDtcbiAgfVxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBjb25uZWN0SW50ZXJhY3RpdmUodGhpcyk7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICBpZiAoaXNWYWxpZFRpbWUodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVEaXJlY3RseSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25uZWN0TGFiZWwodGhpcyk7XG4gICAgY29ubmVjdEZvcm0odGhpcyk7XG4gICAgY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3NldFVwTWVzc2FnZXModGhpcyksIHRoaXMubG9hZERhdGVUaW1lTG9jYWxlRGF0YSgpXSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTG9hZCgpIHtcbiAgICBzZXRDb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgaWYgKGlzVmFsaWRUaW1lKHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLnNldElucHV0VmFsdWUobG9jYWxpemVUaW1lU3RyaW5nKHtcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogdGhpcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGluY2x1ZGVTZWNvbmRzOiB0aGlzLnNob3VsZEluY2x1ZGVTZWNvbmRzKClcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgZGlzY29ubmVjdEludGVyYWN0aXZlKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RMYWJlbCh0aGlzKTtcbiAgICBkaXNjb25uZWN0Rm9ybSh0aGlzKTtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRlYWN0aXZhdGVGb2N1c1RyYXAodGhpcyk7XG4gICAgZGlzY29ubmVjdE1lc3NhZ2VzKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICB1cGRhdGVIb3N0SW50ZXJhY3Rpb24odGhpcyk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFJlbmRlciBNZXRob2RzXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkLCBtZXNzYWdlcywgcmVhZE9ubHksIGRpYWxvZ0lkIH0gPSB0aGlzO1xuICAgIHJldHVybiAoaChIb3N0LCB7IG9uQmx1cjogdGhpcy5ob3N0Qmx1ckhhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5rZXlEb3duSGFuZGxlciB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5wdXQtd3JhcHBlclwiLCBvbkNsaWNrOiB0aGlzLm9uSW5wdXRXcmFwcGVyQ2xpY2sgfSwgaChcImNhbGNpdGUtaW5wdXRcIiwgeyBcImFyaWEtYXV0b2NvbXBsZXRlXCI6IFwibm9uZVwiLCBcImFyaWEtaGFzcG9wdXBcIjogXCJkaWFsb2dcIiwgZGlzYWJsZWQ6IGRpc2FibGVkLCBpY29uOiBcImNsb2NrXCIsIGlkOiB0aGlzLnJlZmVyZW5jZUVsZW1lbnRJZCwgbGFiZWw6IGdldExhYmVsVGV4dCh0aGlzKSwgbGFuZzogdGhpcy5lZmZlY3RpdmVMb2NhbGUsIG9uQ2FsY2l0ZUlucHV0SW5wdXQ6IHRoaXMuY2FsY2l0ZUludGVybmFsSW5wdXRJbnB1dEhhbmRsZXIsIG9uQ2FsY2l0ZUludGVybmFsSW5wdXRGb2N1czogdGhpcy5jYWxjaXRlSW50ZXJuYWxJbnB1dEZvY3VzSGFuZGxlciwgcmVhZE9ubHk6IHJlYWRPbmx5LCByb2xlOiBcImNvbWJvYm94XCIsIHNjYWxlOiB0aGlzLnNjYWxlLCBzdGVwOiB0aGlzLnN0ZXAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRDYWxjaXRlSW5wdXRFbCB9KSwgdGhpcy5yZW5kZXJUb2dnbGVJY29uKHRoaXMub3BlbikpLCBoKFwiY2FsY2l0ZS1wb3BvdmVyXCIsIHsgZm9jdXNUcmFwRGlzYWJsZWQ6IHRydWUsIGlkOiBkaWFsb2dJZCwgbGFiZWw6IG1lc3NhZ2VzLmNob29zZVRpbWUsIGxhbmc6IHRoaXMuZWZmZWN0aXZlTG9jYWxlLCBvbkNhbGNpdGVQb3BvdmVyQ2xvc2U6IHRoaXMucG9wb3ZlckNsb3NlSGFuZGxlciwgb25DYWxjaXRlUG9wb3Zlck9wZW46IHRoaXMucG9wb3Zlck9wZW5IYW5kbGVyLCBvcGVuOiB0aGlzLm9wZW4sIG92ZXJsYXlQb3NpdGlvbmluZzogdGhpcy5vdmVybGF5UG9zaXRpb25pbmcsIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsIHJlZmVyZW5jZUVsZW1lbnQ6IHRoaXMucmVmZXJlbmNlRWxlbWVudElkLCB0cmlnZ2VyRGlzYWJsZWQ6IHRydWUsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRDYWxjaXRlUG9wb3ZlckVsIH0sIGgoXCJjYWxjaXRlLXRpbWUtcGlja2VyXCIsIHsgbGFuZzogdGhpcy5lZmZlY3RpdmVMb2NhbGUsIG1lc3NhZ2VPdmVycmlkZXM6IHRoaXMubWVzc2FnZU92ZXJyaWRlcywgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSwgb25DYWxjaXRlSW50ZXJuYWxUaW1lUGlja2VyQ2hhbmdlOiB0aGlzLnRpbWVQaWNrZXJDaGFuZ2VIYW5kbGVyLCBzY2FsZTogdGhpcy5zY2FsZSwgc3RlcDogdGhpcy5zdGVwLCB0YWJJbmRleDogdGhpcy5vcGVuID8gdW5kZWZpbmVkIDogLTEsIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0Q2FsY2l0ZVRpbWVQaWNrZXJFbCB9KSksIGgoSGlkZGVuRm9ybUlucHV0U2xvdCwgeyBjb21wb25lbnQ6IHRoaXMgfSkpKTtcbiAgfVxuICByZW5kZXJUb2dnbGVJY29uKG9wZW4pIHtcbiAgICByZXR1cm4gKGgoXCJzcGFuXCIsIHsgY2xhc3M6IENTUyQxLnRvZ2dsZUljb24gfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IG9wZW4gPyBcImNoZXZyb24tdXBcIiA6IFwiY2hldnJvbi1kb3duXCIsIHNjYWxlOiBcInNcIiB9KSkpO1xuICB9XG4gIHN0YXRpYyBnZXQgZGVsZWdhdGVzRm9jdXMoKSB7IHJldHVybiB0cnVlOyB9XG4gIHN0YXRpYyBnZXQgYXNzZXRzRGlycygpIHsgcmV0dXJuIFtcImFzc2V0c1wiXTsgfVxuICBnZXQgZWwoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJvcGVuXCI6IFtcIm9wZW5IYW5kbGVyXCJdLFxuICAgIFwiZm9jdXNUcmFwRGlzYWJsZWRcIjogW1wiaGFuZGxlRm9jdXNUcmFwRGlzYWJsZWRcIl0sXG4gICAgXCJkaXNhYmxlZFwiOiBbXCJoYW5kbGVEaXNhYmxlZEFuZFJlYWRPbmx5Q2hhbmdlXCJdLFxuICAgIFwicmVhZE9ubHlcIjogW1wiaGFuZGxlRGlzYWJsZWRBbmRSZWFkT25seUNoYW5nZVwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcIm51bWJlcmluZ1N5c3RlbVwiOiBbXCJudW1iZXJpbmdTeXN0ZW1XYXRjaGVyXCJdLFxuICAgIFwic3RlcFwiOiBbXCJzdGVwV2F0Y2hlclwiXSxcbiAgICBcInZhbHVlXCI6IFtcInZhbHVlV2F0Y2hlclwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVXYXRjaGVyXCJdXG4gIH07IH1cbn07XG5JbnB1dFRpbWVQaWNrZXIuc3R5bGUgPSBpbnB1dFRpbWVQaWNrZXJDc3M7XG5cbmNvbnN0IENTUyA9IHtcbiAgYnV0dG9uOiBcImJ1dHRvblwiLFxuICBidXR0b25Cb3R0b21MZWZ0OiBcImJ1dHRvbi0tYm90dG9tLWxlZnRcIixcbiAgYnV0dG9uQm90dG9tUmlnaHQ6IFwiYnV0dG9uLS1ib3R0b20tcmlnaHRcIixcbiAgYnV0dG9uSG91ckRvd246IFwiYnV0dG9uLS1ob3VyLWRvd25cIixcbiAgYnV0dG9uSG91clVwOiBcImJ1dHRvbi0taG91ci11cFwiLFxuICBidXR0b25NZXJpZGllbURvd246IFwiYnV0dG9uLS1tZXJpZGllbS1kb3duXCIsXG4gIGJ1dHRvbk1lcmlkaWVtVXA6IFwiYnV0dG9uLS1tZXJpZGllbS11cFwiLFxuICBidXR0b25NaW51dGVEb3duOiBcImJ1dHRvbi0tbWludXRlLWRvd25cIixcbiAgYnV0dG9uTWludXRlVXA6IFwiYnV0dG9uLS1taW51dGUtdXBcIixcbiAgYnV0dG9uU2Vjb25kRG93bjogXCJidXR0b24tLXNlY29uZC1kb3duXCIsXG4gIGJ1dHRvblNlY29uZFVwOiBcImJ1dHRvbi0tc2Vjb25kLXVwXCIsXG4gIGJ1dHRvblRvcExlZnQ6IFwiYnV0dG9uLS10b3AtbGVmdFwiLFxuICBidXR0b25Ub3BSaWdodDogXCJidXR0b24tLXRvcC1yaWdodFwiLFxuICBjb2x1bW46IFwiY29sdW1uXCIsXG4gIGRlbGltaXRlcjogXCJkZWxpbWl0ZXJcIixcbiAgaG91cjogXCJob3VyXCIsXG4gIGlucHV0OiBcImlucHV0XCIsXG4gIG1lcmlkaWVtOiBcIm1lcmlkaWVtXCIsXG4gIG1pbnV0ZTogXCJtaW51dGVcIixcbiAgc2Vjb25kOiBcInNlY29uZFwiLFxuICBzaG93TWVyaWRpZW06IFwic2hvdy1tZXJpZGllbVwiLFxuICBzaG93U2Vjb25kOiBcInNob3ctc2Vjb25kXCIsXG4gIFwic2NhbGUtc1wiOiBcInNjYWxlLXNcIixcbiAgXCJzY2FsZS1tXCI6IFwic2NhbGUtbVwiLFxuICBcInNjYWxlLWxcIjogXCJzY2FsZS1sXCIsXG4gIHRpbWVQaWNrZXI6IFwidGltZS1waWNrZXJcIixcbiAgbWVyaWRpZW1TdGFydDogXCJtZXJpZGllbS0tc3RhcnRcIlxufTtcblxuY29uc3QgdGltZVBpY2tlckNzcyA9IFwiQGtleWZyYW1lcyBpbnswJXtvcGFjaXR5OjB9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgaW4tZG93bnswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIC01cHgsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi11cHswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDVweCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLXJpZ2h0ezAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoLTVweCwgMCwgMCl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsIDAsIDApfX1Aa2V5ZnJhbWVzIGluLWxlZnR7MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCg1cHgsIDAsIDApfTEwMCV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLCAwLCAwKX19QGtleWZyYW1lcyBpbi1zY2FsZXswJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnNjYWxlM0QoMC45NSwgMC45NSwgMSl9MTAwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnNjYWxlM0QoMSwgMSwgMSl9fTpyb290ey0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nOmNhbGMoMTUwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6dmFyKC0tY2FsY2l0ZS1kdXJhdGlvbi1mYWN0b3IsIDEpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLWZhc3Q6Y2FsYygxMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSk7LS1jYWxjaXRlLWludGVybmFsLWFuaW1hdGlvbi10aW1pbmctbWVkaXVtOmNhbGMoMjAwbXMgKiB2YXIoLS1jYWxjaXRlLWludGVybmFsLWR1cmF0aW9uLWZhY3RvcikpOy0tY2FsY2l0ZS1pbnRlcm5hbC1hbmltYXRpb24tdGltaW5nLXNsb3c6Y2FsYygzMDBtcyAqIHZhcigtLWNhbGNpdGUtaW50ZXJuYWwtZHVyYXRpb24tZmFjdG9yKSl9LmNhbGNpdGUtYW5pbWF0ZXtvcGFjaXR5OjA7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoO2FuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1jYWxjaXRlLWFuaW1hdGlvbi10aW1pbmcpfS5jYWxjaXRlLWFuaW1hdGVfX2lue2FuaW1hdGlvbi1uYW1lOmlufS5jYWxjaXRlLWFuaW1hdGVfX2luLWRvd257YW5pbWF0aW9uLW5hbWU6aW4tZG93bn0uY2FsY2l0ZS1hbmltYXRlX19pbi11cHthbmltYXRpb24tbmFtZTppbi11cH0uY2FsY2l0ZS1hbmltYXRlX19pbi1yaWdodHthbmltYXRpb24tbmFtZTppbi1yaWdodH0uY2FsY2l0ZS1hbmltYXRlX19pbi1sZWZ0e2FuaW1hdGlvbi1uYW1lOmluLWxlZnR9LmNhbGNpdGUtYW5pbWF0ZV9faW4tc2NhbGV7YW5pbWF0aW9uLW5hbWU6aW4tc2NhbGV9QG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2Upezpyb290ey0tY2FsY2l0ZS1pbnRlcm5hbC1kdXJhdGlvbi1mYWN0b3I6MC4wMX19OnJvb3R7LS1jYWxjaXRlLWZsb2F0aW5nLXVpLXRyYW5zaXRpb246dmFyKC0tY2FsY2l0ZS1hbmltYXRpb24tdGltaW5nKTstLWNhbGNpdGUtZmxvYXRpbmctdWktei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWRyb3Bkb3duKX06aG9zdChbaGlkZGVuXSl7ZGlzcGxheTpub25lfTpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrfS50aW1lLXBpY2tlcntkaXNwbGF5OmZsZXg7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTEpO2ZvbnQtd2VpZ2h0OnZhcigtLWNhbGNpdGUtZm9udC13ZWlnaHQtbWVkaXVtKTtjb2xvcjp2YXIoLS1jYWxjaXRlLXVpLXRleHQtMSk7LS10dy1zaGFkb3c6MCA2cHggMjBweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggMTJweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7LS10dy1zaGFkb3ctY29sb3JlZDowIDZweCAyMHB4IC00cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCA0cHggMTJweCAtMnB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7Ym94LXNoYWRvdzp2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO2JvcmRlci1yYWRpdXM6dmFyKC0tY2FsY2l0ZS1ib3JkZXItcmFkaXVzKX0udGltZS1waWNrZXIgLmNvbHVtbntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS50aW1lLXBpY2tlciAubWVyaWRpZW0tLXN0YXJ0e29yZGVyOi0xfS50aW1lLXBpY2tlciAuYnV0dG9ue2Rpc3BsYXk6aW5saW5lLWZsZXg7Y3Vyc29yOnBvaW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMSl9LnRpbWUtcGlja2VyIC5idXR0b246aG92ZXIsLnRpbWUtcGlja2VyIC5idXR0b246Zm9jdXN7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7b3V0bGluZToycHggc29saWQgdHJhbnNwYXJlbnQ7b3V0bGluZS1vZmZzZXQ6MnB4O3otaW5kZXg6dmFyKC0tY2FsY2l0ZS1hcHAtei1pbmRleC1oZWFkZXIpO291dGxpbmUtb2Zmc2V0OjB9LnRpbWUtcGlja2VyIC5idXR0b246YWN0aXZle2JhY2tncm91bmQtY29sb3I6dmFyKC0tY2FsY2l0ZS11aS1mb3JlZ3JvdW5kLTMpfS50aW1lLXBpY2tlciAuYnV0dG9uLnRvcC1sZWZ0e2JvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6dmFyKC0tY2FsY2l0ZS1ib3JkZXItcmFkaXVzKX0udGltZS1waWNrZXIgLmJ1dHRvbi5ib3R0b20tbGVmdHtib3JkZXItZW5kLXN0YXJ0LXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpfS50aW1lLXBpY2tlciAuYnV0dG9uLnRvcC1yaWdodHtib3JkZXItc3RhcnQtZW5kLXJhZGl1czp2YXIoLS1jYWxjaXRlLWJvcmRlci1yYWRpdXMpfS50aW1lLXBpY2tlciAuYnV0dG9uLmJvdHRvbS1yaWdodHtib3JkZXItZW5kLWVuZC1yYWRpdXM6dmFyKC0tY2FsY2l0ZS1ib3JkZXItcmFkaXVzKX0udGltZS1waWNrZXIgLmJ1dHRvbiBjYWxjaXRlLWljb257Y29sb3I6dmFyKC0tY2FsY2l0ZS11aS10ZXh0LTMpfS50aW1lLXBpY2tlciAuaW5wdXR7ZGlzcGxheTppbmxpbmUtZmxleDtjdXJzb3I6cG9pbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWNhbGNpdGUtdWktZm9yZWdyb3VuZC0xKTtmb250LXdlaWdodDp2YXIoLS1jYWxjaXRlLWZvbnQtd2VpZ2h0LW1lZGl1bSl9LnRpbWUtcGlja2VyIC5pbnB1dDpob3Zlcntib3gtc2hhZG93Omluc2V0IDAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWZvcmVncm91bmQtMik7ei1pbmRleDp2YXIoLS1jYWxjaXRlLWFwcC16LWluZGV4LWhlYWRlcil9LnRpbWUtcGlja2VyIC5pbnB1dDpmb2N1cywudGltZS1waWNrZXIgLmlucHV0OmhvdmVyOmZvY3Vze291dGxpbmU6MnB4IHNvbGlkIHRyYW5zcGFyZW50O291dGxpbmUtb2Zmc2V0OjJweDtib3gtc2hhZG93Omluc2V0IDAgMCAwIDJweCB2YXIoLS1jYWxjaXRlLXVpLWJyYW5kKTt6LWluZGV4OnZhcigtLWNhbGNpdGUtYXBwLXotaW5kZXgtaGVhZGVyKTtvdXRsaW5lLW9mZnNldDowfS50aW1lLXBpY2tlci5zY2FsZS1ze2ZvbnQtc2l6ZTp2YXIoLS1jYWxjaXRlLWZvbnQtc2l6ZS0tMSl9LnRpbWUtcGlja2VyLnNjYWxlLXMgLmJ1dHRvbiwudGltZS1waWNrZXIuc2NhbGUtcyAuaW5wdXR7cGFkZGluZy1pbmxpbmU6MC43NXJlbTtwYWRkaW5nLWJsb2NrOjAuMjVyZW19LnRpbWUtcGlja2VyLnNjYWxlLXM6bm90KC5zaG93LW1lcmlkaWVtKSAuZGVsaW1pdGVyOmxhc3QtY2hpbGR7cGFkZGluZy1pbmxpbmUtZW5kOjAuNzVyZW19LnRpbWUtcGlja2VyLnNjYWxlLW17Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTApfS50aW1lLXBpY2tlci5zY2FsZS1tIC5idXR0b24sLnRpbWUtcGlja2VyLnNjYWxlLW0gLmlucHV0e3BhZGRpbmctaW5saW5lOjFyZW07cGFkZGluZy1ibG9jazowLjVyZW19LnRpbWUtcGlja2VyLnNjYWxlLW06bm90KC5zaG93LW1lcmlkaWVtKSAuZGVsaW1pdGVyOmxhc3QtY2hpbGR7cGFkZGluZy1pbmxpbmUtZW5kOjFyZW19LnRpbWUtcGlja2VyLnNjYWxlLWx7Zm9udC1zaXplOnZhcigtLWNhbGNpdGUtZm9udC1zaXplLTEpfS50aW1lLXBpY2tlci5zY2FsZS1sIC5idXR0b24sLnRpbWUtcGlja2VyLnNjYWxlLWwgLmlucHV0e3BhZGRpbmctaW5saW5lOjEuMjVyZW07cGFkZGluZy1ibG9jazowLjc1cmVtfS50aW1lLXBpY2tlci5zY2FsZS1sOm5vdCguc2hvdy1tZXJpZGllbSkgLmRlbGltaXRlcjpsYXN0LWNoaWxke3BhZGRpbmctaW5saW5lLWVuZDoxLjI1cmVtfVwiO1xuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuY29uc3QgVGltZVBpY2tlciA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaG9zdFJlZikge1xuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUaW1lUGlja2VyQmx1ciA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2FsY2l0ZUludGVybmFsVGltZVBpY2tlckJsdXJcIiwgNik7XG4gICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUaW1lUGlja2VyQ2hhbmdlID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUaW1lUGlja2VyQ2hhbmdlXCIsIDYpO1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGltZVBpY2tlckZvY3VzID0gY3JlYXRlRXZlbnQodGhpcywgXCJjYWxjaXRlSW50ZXJuYWxUaW1lUGlja2VyRm9jdXNcIiwgNik7XG4gICAgdGhpcy5kZWNyZW1lbnRIb3VyID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3SG91ciA9ICF0aGlzLmhvdXIgPyAwIDogdGhpcy5ob3VyID09PSBcIjAwXCIgPyAyMyA6IHBhcnNlSW50KHRoaXMuaG91cikgLSAxO1xuICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoXCJob3VyXCIsIG5ld0hvdXIpO1xuICAgIH07XG4gICAgdGhpcy5kZWNyZW1lbnRNZXJpZGllbSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld01lcmlkaWVtID0gdGhpcy5tZXJpZGllbSA9PT0gXCJQTVwiID8gXCJBTVwiIDogXCJQTVwiO1xuICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoXCJtZXJpZGllbVwiLCBuZXdNZXJpZGllbSk7XG4gICAgfTtcbiAgICB0aGlzLmRlY3JlbWVudE1pbnV0ZU9yU2Vjb25kID0gKGtleSkgPT4ge1xuICAgICAgbGV0IG5ld1ZhbHVlO1xuICAgICAgaWYgKGlzVmFsaWROdW1iZXIodGhpc1trZXldKSkge1xuICAgICAgICBjb25zdCB2YWx1ZUFzTnVtYmVyID0gcGFyc2VJbnQodGhpc1trZXldKTtcbiAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZUFzTnVtYmVyID09PSAwID8gNTkgOiB2YWx1ZUFzTnVtYmVyIC0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IDU5O1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoa2V5LCBuZXdWYWx1ZSk7XG4gICAgfTtcbiAgICB0aGlzLmRlY3JlbWVudE1pbnV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuZGVjcmVtZW50TWludXRlT3JTZWNvbmQoXCJtaW51dGVcIik7XG4gICAgfTtcbiAgICB0aGlzLmRlY3JlbWVudFNlY29uZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuZGVjcmVtZW50TWludXRlT3JTZWNvbmQoXCJzZWNvbmRcIik7XG4gICAgfTtcbiAgICB0aGlzLmZvY3VzSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVFbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgfTtcbiAgICB0aGlzLmhvdXJEb3duQnV0dG9uS2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmJ1dHRvbkFjdGl2YXRlZChldmVudCkpIHtcbiAgICAgICAgdGhpcy5kZWNyZW1lbnRIb3VyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmhvdXJLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgaWYgKG51bWJlcktleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBjb25zdCBrZXlBc051bWJlciA9IHBhcnNlSW50KGtleSk7XG4gICAgICAgIGxldCBuZXdIb3VyO1xuICAgICAgICBpZiAoaXNWYWxpZE51bWJlcih0aGlzLmhvdXIpKSB7XG4gICAgICAgICAgc3dpdGNoICh0aGlzLmhvdXJDeWNsZSkge1xuICAgICAgICAgICAgY2FzZSBcIjEyXCI6XG4gICAgICAgICAgICAgIG5ld0hvdXIgPVxuICAgICAgICAgICAgICAgIHRoaXMuaG91ciA9PT0gXCIwMVwiICYmIGtleUFzTnVtYmVyID49IDAgJiYga2V5QXNOdW1iZXIgPD0gMlxuICAgICAgICAgICAgICAgICAgPyBgMSR7a2V5QXNOdW1iZXJ9YFxuICAgICAgICAgICAgICAgICAgOiBrZXlBc051bWJlcjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMjRcIjpcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaG91ciA9PT0gXCIwMVwiKSB7XG4gICAgICAgICAgICAgICAgbmV3SG91ciA9IGAxJHtrZXlBc051bWJlcn1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaG91ciA9PT0gXCIwMlwiICYmIGtleUFzTnVtYmVyID49IDAgJiYga2V5QXNOdW1iZXIgPD0gMykge1xuICAgICAgICAgICAgICAgIG5ld0hvdXIgPSBgMiR7a2V5QXNOdW1iZXJ9YDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdIb3VyID0ga2V5QXNOdW1iZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG5ld0hvdXIgPSBrZXlBc051bWJlcjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFZhbHVlUGFydChcImhvdXJcIiwgbmV3SG91cik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICBjYXNlIFwiQmFja3NwYWNlXCI6XG4gICAgICAgICAgY2FzZSBcIkRlbGV0ZVwiOlxuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoXCJob3VyXCIsIG51bGwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50SG91cigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudEhvdXIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuaG91clVwQnV0dG9uS2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmJ1dHRvbkFjdGl2YXRlZChldmVudCkpIHtcbiAgICAgICAgdGhpcy5pbmNyZW1lbnRIb3VyKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmluY3JlbWVudE1lcmlkaWVtID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3TWVyaWRpZW0gPSB0aGlzLm1lcmlkaWVtID09PSBcIkFNXCIgPyBcIlBNXCIgOiBcIkFNXCI7XG4gICAgICB0aGlzLnNldFZhbHVlUGFydChcIm1lcmlkaWVtXCIsIG5ld01lcmlkaWVtKTtcbiAgICB9O1xuICAgIHRoaXMuaW5jcmVtZW50SG91ciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0hvdXIgPSBpc1ZhbGlkTnVtYmVyKHRoaXMuaG91cilcbiAgICAgICAgPyB0aGlzLmhvdXIgPT09IFwiMjNcIlxuICAgICAgICAgID8gMFxuICAgICAgICAgIDogcGFyc2VJbnQodGhpcy5ob3VyKSArIDFcbiAgICAgICAgOiAxO1xuICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoXCJob3VyXCIsIG5ld0hvdXIpO1xuICAgIH07XG4gICAgdGhpcy5pbmNyZW1lbnRNaW51dGVPclNlY29uZCA9IChrZXkpID0+IHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gaXNWYWxpZE51bWJlcih0aGlzW2tleV0pXG4gICAgICAgID8gdGhpc1trZXldID09PSBcIjU5XCJcbiAgICAgICAgICA/IDBcbiAgICAgICAgICA6IHBhcnNlSW50KHRoaXNba2V5XSkgKyAxXG4gICAgICAgIDogMDtcbiAgICAgIHRoaXMuc2V0VmFsdWVQYXJ0KGtleSwgbmV3VmFsdWUpO1xuICAgIH07XG4gICAgdGhpcy5pbmNyZW1lbnRNaW51dGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLmluY3JlbWVudE1pbnV0ZU9yU2Vjb25kKFwibWludXRlXCIpO1xuICAgIH07XG4gICAgdGhpcy5pbmNyZW1lbnRTZWNvbmQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmluY3JlbWVudE1pbnV0ZU9yU2Vjb25kKFwic2Vjb25kXCIpO1xuICAgIH07XG4gICAgdGhpcy5tZXJpZGllbURvd25CdXR0b25LZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYnV0dG9uQWN0aXZhdGVkKGV2ZW50KSkge1xuICAgICAgICB0aGlzLmRlY3JlbWVudE1lcmlkaWVtKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm1lcmlkaWVtS2V5RG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoXCJtZXJpZGllbVwiLCBcIkFNXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicFwiOlxuICAgICAgICAgIHRoaXMuc2V0VmFsdWVQYXJ0KFwibWVyaWRpZW1cIiwgXCJQTVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkJhY2tzcGFjZVwiOlxuICAgICAgICBjYXNlIFwiRGVsZXRlXCI6XG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoXCJtZXJpZGllbVwiLCBudWxsKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuaW5jcmVtZW50TWVyaWRpZW0oKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5kZWNyZW1lbnRNZXJpZGllbSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiIFwiOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm1lcmlkaWVtVXBCdXR0b25LZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYnV0dG9uQWN0aXZhdGVkKGV2ZW50KSkge1xuICAgICAgICB0aGlzLmluY3JlbWVudE1lcmlkaWVtKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm1pbnV0ZURvd25CdXR0b25LZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYnV0dG9uQWN0aXZhdGVkKGV2ZW50KSkge1xuICAgICAgICB0aGlzLmRlY3JlbWVudE1pbnV0ZSgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5taW51dGVLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgaWYgKG51bWJlcktleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBjb25zdCBrZXlBc051bWJlciA9IHBhcnNlSW50KGtleSk7XG4gICAgICAgIGxldCBuZXdNaW51dGU7XG4gICAgICAgIGlmIChpc1ZhbGlkTnVtYmVyKHRoaXMubWludXRlKSAmJiB0aGlzLm1pbnV0ZS5zdGFydHNXaXRoKFwiMFwiKSkge1xuICAgICAgICAgIGNvbnN0IG1pbnV0ZUFzTnVtYmVyID0gcGFyc2VJbnQodGhpcy5taW51dGUpO1xuICAgICAgICAgIG5ld01pbnV0ZSA9XG4gICAgICAgICAgICBtaW51dGVBc051bWJlciA+IG1heFRlbnRoRm9yTWludXRlQW5kU2Vjb25kXG4gICAgICAgICAgICAgID8ga2V5QXNOdW1iZXJcbiAgICAgICAgICAgICAgOiBgJHttaW51dGVBc051bWJlcn0ke2tleUFzTnVtYmVyfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbmV3TWludXRlID0ga2V5QXNOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoXCJtaW51dGVcIiwgbmV3TWludXRlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcbiAgICAgICAgICBjYXNlIFwiRGVsZXRlXCI6XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlUGFydChcIm1pbnV0ZVwiLCBudWxsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRlY3JlbWVudE1pbnV0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudE1pbnV0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5taW51dGVVcEJ1dHRvbktleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5idXR0b25BY3RpdmF0ZWQoZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50TWludXRlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNlY29uZERvd25CdXR0b25LZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYnV0dG9uQWN0aXZhdGVkKGV2ZW50KSkge1xuICAgICAgICB0aGlzLmRlY3JlbWVudFNlY29uZCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZWNvbmRLZXlEb3duSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGV2ZW50O1xuICAgICAgaWYgKG51bWJlcktleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBjb25zdCBrZXlBc051bWJlciA9IHBhcnNlSW50KGtleSk7XG4gICAgICAgIGxldCBuZXdTZWNvbmQ7XG4gICAgICAgIGlmIChpc1ZhbGlkTnVtYmVyKHRoaXMuc2Vjb25kKSAmJiB0aGlzLnNlY29uZC5zdGFydHNXaXRoKFwiMFwiKSkge1xuICAgICAgICAgIGNvbnN0IHNlY29uZEFzTnVtYmVyID0gcGFyc2VJbnQodGhpcy5zZWNvbmQpO1xuICAgICAgICAgIG5ld1NlY29uZCA9XG4gICAgICAgICAgICBzZWNvbmRBc051bWJlciA+IG1heFRlbnRoRm9yTWludXRlQW5kU2Vjb25kXG4gICAgICAgICAgICAgID8ga2V5QXNOdW1iZXJcbiAgICAgICAgICAgICAgOiBgJHtzZWNvbmRBc051bWJlcn0ke2tleUFzTnVtYmVyfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbmV3U2Vjb25kID0ga2V5QXNOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRWYWx1ZVBhcnQoXCJzZWNvbmRcIiwgbmV3U2Vjb25kKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcbiAgICAgICAgICBjYXNlIFwiRGVsZXRlXCI6XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlUGFydChcInNlY29uZFwiLCBudWxsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRlY3JlbWVudFNlY29uZCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudFNlY29uZCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZWNvbmRVcEJ1dHRvbktleURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5idXR0b25BY3RpdmF0ZWQoZXZlbnQpKSB7XG4gICAgICAgIHRoaXMuaW5jcmVtZW50U2Vjb25kKCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNldEhvdXJFbCA9IChlbCkgPT4gKHRoaXMuaG91ckVsID0gZWwpO1xuICAgIHRoaXMuc2V0TWVyaWRpZW1FbCA9IChlbCkgPT4gKHRoaXMubWVyaWRpZW1FbCA9IGVsKTtcbiAgICB0aGlzLnNldE1pbnV0ZUVsID0gKGVsKSA9PiAodGhpcy5taW51dGVFbCA9IGVsKTtcbiAgICB0aGlzLnNldFNlY29uZEVsID0gKGVsKSA9PiAodGhpcy5zZWNvbmRFbCA9IGVsKTtcbiAgICB0aGlzLnNldFZhbHVlID0gKHZhbHVlLCBlbWl0ID0gdHJ1ZSkgPT4ge1xuICAgICAgaWYgKGlzVmFsaWRUaW1lKHZhbHVlKSkge1xuICAgICAgICBjb25zdCB7IGhvdXIsIG1pbnV0ZSwgc2Vjb25kIH0gPSBwYXJzZVRpbWVTdHJpbmcodmFsdWUpO1xuICAgICAgICBjb25zdCB7IGVmZmVjdGl2ZUxvY2FsZTogbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgbG9jYWxpemVkSG91ciwgbG9jYWxpemVkSG91clN1ZmZpeCwgbG9jYWxpemVkTWludXRlLCBsb2NhbGl6ZWRNaW51dGVTdWZmaXgsIGxvY2FsaXplZFNlY29uZCwgbG9jYWxpemVkU2Vjb25kU3VmZml4LCBsb2NhbGl6ZWRNZXJpZGllbSB9ID0gbG9jYWxpemVUaW1lU3RyaW5nVG9QYXJ0cyh7IHZhbHVlLCBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSB9KTtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWRIb3VyID0gbG9jYWxpemVkSG91cjtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWRIb3VyU3VmZml4ID0gbG9jYWxpemVkSG91clN1ZmZpeDtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWRNaW51dGUgPSBsb2NhbGl6ZWRNaW51dGU7XG4gICAgICAgIHRoaXMubG9jYWxpemVkTWludXRlU3VmZml4ID0gbG9jYWxpemVkTWludXRlU3VmZml4O1xuICAgICAgICB0aGlzLmxvY2FsaXplZFNlY29uZCA9IGxvY2FsaXplZFNlY29uZDtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWRTZWNvbmRTdWZmaXggPSBsb2NhbGl6ZWRTZWNvbmRTdWZmaXg7XG4gICAgICAgIHRoaXMuaG91ciA9IGhvdXI7XG4gICAgICAgIHRoaXMubWludXRlID0gbWludXRlO1xuICAgICAgICB0aGlzLnNlY29uZCA9IHNlY29uZDtcbiAgICAgICAgaWYgKGxvY2FsaXplZE1lcmlkaWVtKSB7XG4gICAgICAgICAgdGhpcy5sb2NhbGl6ZWRNZXJpZGllbSA9IGxvY2FsaXplZE1lcmlkaWVtO1xuICAgICAgICAgIHRoaXMubWVyaWRpZW0gPSBnZXRNZXJpZGllbSh0aGlzLmhvdXIpO1xuICAgICAgICAgIGNvbnN0IGZvcm1hdFBhcnRzID0gZ2V0VGltZVBhcnRzKHsgdmFsdWUsIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0pO1xuICAgICAgICAgIHRoaXMubWVyaWRpZW1PcmRlciA9IHRoaXMuZ2V0TWVyaWRpZW1PcmRlcihmb3JtYXRQYXJ0cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhvdXIgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2FsaXplZEhvdXIgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2FsaXplZEhvdXJTdWZmaXggPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2FsaXplZE1lcmlkaWVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWRNaW51dGUgPSBudWxsO1xuICAgICAgICB0aGlzLmxvY2FsaXplZE1pbnV0ZVN1ZmZpeCA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYWxpemVkU2Vjb25kID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2NhbGl6ZWRTZWNvbmRTdWZmaXggPSBudWxsO1xuICAgICAgICB0aGlzLm1lcmlkaWVtID0gbnVsbDtcbiAgICAgICAgdGhpcy5taW51dGUgPSBudWxsO1xuICAgICAgICB0aGlzLnNlY29uZCA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGVtaXQpIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUaW1lUGlja2VyQ2hhbmdlLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0VmFsdWVQYXJ0ID0gKGtleSwgdmFsdWUsIGVtaXQgPSB0cnVlKSA9PiB7XG4gICAgICBjb25zdCB7IGVmZmVjdGl2ZUxvY2FsZTogbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0gfSA9IHRoaXM7XG4gICAgICBpZiAoa2V5ID09PSBcIm1lcmlkaWVtXCIpIHtcbiAgICAgICAgdGhpcy5tZXJpZGllbSA9IHZhbHVlO1xuICAgICAgICBpZiAoaXNWYWxpZE51bWJlcih0aGlzLmhvdXIpKSB7XG4gICAgICAgICAgY29uc3QgaG91ckFzTnVtYmVyID0gcGFyc2VJbnQodGhpcy5ob3VyKTtcbiAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiQU1cIjpcbiAgICAgICAgICAgICAgaWYgKGhvdXJBc051bWJlciA+PSAxMikge1xuICAgICAgICAgICAgICAgIHRoaXMuaG91ciA9IGZvcm1hdFRpbWVQYXJ0KGhvdXJBc051bWJlciAtIDEyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJQTVwiOlxuICAgICAgICAgICAgICBpZiAoaG91ckFzTnVtYmVyIDwgMTIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXIgPSBmb3JtYXRUaW1lUGFydChob3VyQXNOdW1iZXIgKyAxMik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubG9jYWxpemVkSG91ciA9IGxvY2FsaXplVGltZVBhcnQoe1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuaG91cixcbiAgICAgICAgICAgIHBhcnQ6IFwiaG91clwiLFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgbnVtYmVyaW5nU3lzdGVtXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzW2tleV0gPSB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgPyBmb3JtYXRUaW1lUGFydCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgdGhpc1tgbG9jYWxpemVkJHtjYXBpdGFsaXplKGtleSl9YF0gPSBsb2NhbGl6ZVRpbWVQYXJ0KHtcbiAgICAgICAgICB2YWx1ZTogdGhpc1trZXldLFxuICAgICAgICAgIHBhcnQ6IGtleSxcbiAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgbnVtYmVyaW5nU3lzdGVtXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaG91ciAmJiB0aGlzLm1pbnV0ZSkge1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBgJHt0aGlzLmhvdXJ9OiR7dGhpcy5taW51dGV9YDtcbiAgICAgICAgaWYgKHRoaXMuc2hvd1NlY29uZCkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gYCR7bmV3VmFsdWV9OiR7dGhpcy5zZWNvbmQgPz8gXCIwMFwifWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2NhbGl6ZWRNZXJpZGllbSA9IHRoaXMudmFsdWVcbiAgICAgICAgPyBsb2NhbGl6ZVRpbWVTdHJpbmdUb1BhcnRzKHsgdmFsdWU6IHRoaXMudmFsdWUsIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0pXG4gICAgICAgICAgPy5sb2NhbGl6ZWRNZXJpZGllbSB8fCBudWxsXG4gICAgICAgIDogbG9jYWxpemVUaW1lUGFydCh7IHZhbHVlOiB0aGlzLm1lcmlkaWVtLCBwYXJ0OiBcIm1lcmlkaWVtXCIsIGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtIH0pO1xuICAgICAgaWYgKGVtaXQpIHtcbiAgICAgICAgdGhpcy5jYWxjaXRlSW50ZXJuYWxUaW1lUGlja2VyQ2hhbmdlLmVtaXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2NhbGUgPSBcIm1cIjtcbiAgICB0aGlzLnN0ZXAgPSA2MDtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZU92ZXJyaWRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmVmZmVjdGl2ZUxvY2FsZSA9IFwiXCI7XG4gICAgdGhpcy5ob3VyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaG91ckN5Y2xlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9jYWxpemVkSG91ciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2FsaXplZEhvdXJTdWZmaXggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2NhbGl6ZWRNZXJpZGllbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2FsaXplZE1pbnV0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2FsaXplZE1pbnV0ZVN1ZmZpeCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2FsaXplZFNlY29uZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvY2FsaXplZFNlY29uZFN1ZmZpeCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm1lcmlkaWVtID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWludXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2Vjb25kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2hvd1NlY29uZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmF1bHRNZXNzYWdlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICBzdGVwQ2hhbmdlKCkge1xuICAgIHRoaXMudXBkYXRlU2hvd1NlY29uZCgpO1xuICB9XG4gIHZhbHVlV2F0Y2hlcihuZXdWYWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUobmV3VmFsdWUsIGZhbHNlKTtcbiAgfVxuICBvbk1lc3NhZ2VzQ2hhbmdlKCkge1xuICAgIC8qIHdpcmVkIHVwIGJ5IHQ5biB1dGlsICovXG4gIH1cbiAgZWZmZWN0aXZlTG9jYWxlV2F0Y2hlcigpIHtcbiAgICB0aGlzLnVwZGF0ZUxvY2FsZSgpO1xuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIEV2ZW50IExpc3RlbmVyc1xuICAvL1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGhvc3RCbHVySGFuZGxlcigpIHtcbiAgICB0aGlzLmNhbGNpdGVJbnRlcm5hbFRpbWVQaWNrZXJCbHVyLmVtaXQoKTtcbiAgfVxuICBob3N0Rm9jdXNIYW5kbGVyKCkge1xuICAgIHRoaXMuY2FsY2l0ZUludGVybmFsVGltZVBpY2tlckZvY3VzLmVtaXQoKTtcbiAgfVxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFByZXZlbnRlZCwga2V5IH0gPSBldmVudDtcbiAgICBpZiAoZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuYWN0aXZlRWwpIHtcbiAgICAgIGNhc2UgdGhpcy5ob3VyRWw6XG4gICAgICAgIGlmIChrZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgdGhpcy5mb2N1c1BhcnQoXCJtaW51dGVcIik7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5taW51dGVFbDpcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG4gICAgICAgICAgICB0aGlzLmZvY3VzUGFydChcImhvdXJcIik7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgIGlmICh0aGlzLnN0ZXAgIT09IDYwKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNQYXJ0KFwic2Vjb25kXCIpO1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ob3VyQ3ljbGUgPT09IFwiMTJcIikge1xuICAgICAgICAgICAgICB0aGlzLmZvY3VzUGFydChcIm1lcmlkaWVtXCIpO1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuc2Vjb25kRWw6XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICAgICAgdGhpcy5mb2N1c1BhcnQoXCJtaW51dGVcIik7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcbiAgICAgICAgICAgIGlmICh0aGlzLmhvdXJDeWNsZSA9PT0gXCIxMlwiKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNQYXJ0KFwibWVyaWRpZW1cIik7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdGhpcy5tZXJpZGllbUVsOlxuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgICAgIGlmICh0aGlzLnN0ZXAgIT09IDYwKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNQYXJ0KFwic2Vjb25kXCIpO1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNQYXJ0KFwibWludXRlXCIpO1xuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFB1YmxpYyBNZXRob2RzXG4gIC8vXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLyoqXG4gICAqIFNldHMgZm9jdXMgb24gdGhlIGNvbXBvbmVudCdzIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50LlxuICAgKi9cbiAgYXN5bmMgc2V0Rm9jdXMoKSB7XG4gICAgYXdhaXQgY29tcG9uZW50TG9hZGVkKHRoaXMpO1xuICAgIHRoaXMuZWw/LmZvY3VzKCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFByaXZhdGUgTWV0aG9kc1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1cGRhdGVTaG93U2Vjb25kKCkge1xuICAgIHRoaXMuc2hvd1NlY29uZCA9IHRoaXMuc3RlcCA8IDYwO1xuICB9XG4gIGFzeW5jIGZvY3VzUGFydCh0YXJnZXQpIHtcbiAgICBhd2FpdCBjb21wb25lbnRMb2FkZWQodGhpcyk7XG4gICAgdGhpc1tgJHt0YXJnZXQgfHwgXCJob3VyXCJ9RWxgXT8uZm9jdXMoKTtcbiAgfVxuICBidXR0b25BY3RpdmF0ZWQoZXZlbnQpIHtcbiAgICBjb25zdCB7IGtleSB9ID0gZXZlbnQ7XG4gICAgaWYgKGtleSA9PT0gXCIgXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHJldHVybiBpc0FjdGl2YXRpb25LZXkoa2V5KTtcbiAgfVxuICBnZXRNZXJpZGllbU9yZGVyKGZvcm1hdFBhcnRzKSB7XG4gICAgY29uc3QgbG9jYWxlID0gdGhpcy5lZmZlY3RpdmVMb2NhbGU7XG4gICAgY29uc3QgaXNSVExLaW5kID0gbG9jYWxlID09PSBcImFyXCIgfHwgbG9jYWxlID09PSBcImhlXCI7XG4gICAgaWYgKGZvcm1hdFBhcnRzICYmICFpc1JUTEtpbmQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZm9ybWF0UGFydHMuZmluZEluZGV4KChwYXJ0cykgPT4ge1xuICAgICAgICByZXR1cm4gcGFydHMudmFsdWUgPT09IHRoaXMubG9jYWxpemVkTWVyaWRpZW07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgdXBkYXRlTG9jYWxlKCkge1xuICAgIHVwZGF0ZU1lc3NhZ2VzKHRoaXMsIHRoaXMuZWZmZWN0aXZlTG9jYWxlKTtcbiAgICB0aGlzLmhvdXJDeWNsZSA9IGdldExvY2FsZUhvdXJDeWNsZSh0aGlzLmVmZmVjdGl2ZUxvY2FsZSwgdGhpcy5udW1iZXJpbmdTeXN0ZW0pO1xuICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSwgZmFsc2UpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBMaWZlY3ljbGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgY29ubmVjdExvY2FsaXplZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUxvY2FsZSgpO1xuICAgIGNvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVNob3dTZWNvbmQoKTtcbiAgICB0aGlzLm1lcmlkaWVtT3JkZXIgPSB0aGlzLmdldE1lcmlkaWVtT3JkZXIoZ2V0VGltZVBhcnRzKHtcbiAgICAgIHZhbHVlOiBcIjA6MDA6MDBcIixcbiAgICAgIGxvY2FsZTogdGhpcy5lZmZlY3RpdmVMb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtXG4gICAgfSkpO1xuICB9XG4gIGFzeW5jIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHNldFVwTG9hZGFibGVDb21wb25lbnQodGhpcyk7XG4gICAgYXdhaXQgc2V0VXBNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRMb2FkKCkge1xuICAgIHNldENvbXBvbmVudExvYWRlZCh0aGlzKTtcbiAgfVxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBkaXNjb25uZWN0TG9jYWxpemVkKHRoaXMpO1xuICAgIGRpc2Nvbm5lY3RNZXNzYWdlcyh0aGlzKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgUmVuZGVyIE1ldGhvZHNcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGhvdXJJc051bWJlciA9IGlzVmFsaWROdW1iZXIodGhpcy5ob3VyKTtcbiAgICBjb25zdCBpY29uU2NhbGUgPSB0aGlzLnNjYWxlID09PSBcInNcIiB8fCB0aGlzLnNjYWxlID09PSBcIm1cIiA/IFwic1wiIDogXCJtXCI7XG4gICAgY29uc3QgbWludXRlSXNOdW1iZXIgPSBpc1ZhbGlkTnVtYmVyKHRoaXMubWludXRlKTtcbiAgICBjb25zdCBzZWNvbmRJc051bWJlciA9IGlzVmFsaWROdW1iZXIodGhpcy5zZWNvbmQpO1xuICAgIGNvbnN0IHNob3dNZXJpZGllbSA9IHRoaXMuaG91ckN5Y2xlID09PSBcIjEyXCI7XG4gICAgcmV0dXJuIChoKFwiZGl2XCIsIHsgY2xhc3M6IHtcbiAgICAgICAgW0NTUy50aW1lUGlja2VyXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5zaG93TWVyaWRpZW1dOiBzaG93TWVyaWRpZW0sXG4gICAgICAgIFtDU1Muc2hvd1NlY29uZF06IHRoaXMuc2hvd1NlY29uZCxcbiAgICAgICAgW0NTU1tgc2NhbGUtJHt0aGlzLnNjYWxlfWBdXTogdHJ1ZVxuICAgICAgfSwgZGlyOiBcImx0clwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogQ1NTLmNvbHVtbiwgcm9sZTogXCJncm91cFwiIH0sIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuaG91clVwLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmJ1dHRvbl06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uSG91clVwXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25Ub3BMZWZ0XTogdHJ1ZVxuICAgICAgfSwgb25DbGljazogdGhpcy5pbmNyZW1lbnRIb3VyLCBvbktleURvd246IHRoaXMuaG91clVwQnV0dG9uS2V5RG93bkhhbmRsZXIsIHJvbGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi11cFwiLCBzY2FsZTogaWNvblNjYWxlIH0pKSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5ob3VyLCBcImFyaWEtdmFsdWVtYXhcIjogXCIyM1wiLCBcImFyaWEtdmFsdWVtaW5cIjogXCIxXCIsIFwiYXJpYS12YWx1ZW5vd1wiOiAoaG91cklzTnVtYmVyICYmIHBhcnNlSW50KHRoaXMuaG91cikpIHx8IFwiMFwiLCBcImFyaWEtdmFsdWV0ZXh0XCI6IHRoaXMuaG91ciwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5pbnB1dF06IHRydWUsXG4gICAgICAgIFtDU1MuaG91cl06IHRydWVcbiAgICAgIH0sIG9uRm9jdXM6IHRoaXMuZm9jdXNIYW5kbGVyLCBvbktleURvd246IHRoaXMuaG91cktleURvd25IYW5kbGVyLCByb2xlOiBcInNwaW5idXR0b25cIiwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRIb3VyRWwgfSwgdGhpcy5sb2NhbGl6ZWRIb3VyIHx8IFwiLS1cIiksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuaG91ckRvd24sIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuYnV0dG9uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25Ib3VyRG93bl06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uQm90dG9tTGVmdF06IHRydWVcbiAgICAgIH0sIG9uQ2xpY2s6IHRoaXMuZGVjcmVtZW50SG91ciwgb25LZXlEb3duOiB0aGlzLmhvdXJEb3duQnV0dG9uS2V5RG93bkhhbmRsZXIsIHJvbGU6IFwiYnV0dG9uXCIgfSwgaChcImNhbGNpdGUtaWNvblwiLCB7IGljb246IFwiY2hldnJvbi1kb3duXCIsIHNjYWxlOiBpY29uU2NhbGUgfSkpKSwgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLmRlbGltaXRlciB9LCB0aGlzLmxvY2FsaXplZEhvdXJTdWZmaXgpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IENTUy5jb2x1bW4sIHJvbGU6IFwiZ3JvdXBcIiB9LCBoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLm1pbnV0ZVVwLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmJ1dHRvbl06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uTWludXRlVXBdOiB0cnVlXG4gICAgICB9LCBvbkNsaWNrOiB0aGlzLmluY3JlbWVudE1pbnV0ZSwgb25LZXlEb3duOiB0aGlzLm1pbnV0ZVVwQnV0dG9uS2V5RG93bkhhbmRsZXIsIHJvbGU6IFwiYnV0dG9uXCIsIHRhYkluZGV4OiAtMSB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLXVwXCIsIHNjYWxlOiBpY29uU2NhbGUgfSkpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLm1pbnV0ZSwgXCJhcmlhLXZhbHVlbWF4XCI6IFwiMTJcIiwgXCJhcmlhLXZhbHVlbWluXCI6IFwiMVwiLCBcImFyaWEtdmFsdWVub3dcIjogKG1pbnV0ZUlzTnVtYmVyICYmIHBhcnNlSW50KHRoaXMubWludXRlKSkgfHwgXCIwXCIsIFwiYXJpYS12YWx1ZXRleHRcIjogdGhpcy5taW51dGUsIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuaW5wdXRdOiB0cnVlLFxuICAgICAgICBbQ1NTLm1pbnV0ZV06IHRydWVcbiAgICAgIH0sIG9uRm9jdXM6IHRoaXMuZm9jdXNIYW5kbGVyLCBvbktleURvd246IHRoaXMubWludXRlS2V5RG93bkhhbmRsZXIsIHJvbGU6IFwic3BpbmJ1dHRvblwiLCB0YWJJbmRleDogMCxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtc29ydC1wcm9wc1xuICAgICAgcmVmOiB0aGlzLnNldE1pbnV0ZUVsIH0sIHRoaXMubG9jYWxpemVkTWludXRlIHx8IFwiLS1cIiksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMubWludXRlRG93biwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5idXR0b25dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvbk1pbnV0ZURvd25dOiB0cnVlXG4gICAgICB9LCBvbkNsaWNrOiB0aGlzLmRlY3JlbWVudE1pbnV0ZSwgb25LZXlEb3duOiB0aGlzLm1pbnV0ZURvd25CdXR0b25LZXlEb3duSGFuZGxlciwgcm9sZTogXCJidXR0b25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLWRvd25cIiwgc2NhbGU6IGljb25TY2FsZSB9KSkpLCB0aGlzLnNob3dTZWNvbmQgJiYgaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLmRlbGltaXRlciB9LCB0aGlzLmxvY2FsaXplZE1pbnV0ZVN1ZmZpeCksIHRoaXMuc2hvd1NlY29uZCAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiBDU1MuY29sdW1uLCByb2xlOiBcImdyb3VwXCIgfSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5zZWNvbmRVcCwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5idXR0b25dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvblNlY29uZFVwXTogdHJ1ZVxuICAgICAgfSwgb25DbGljazogdGhpcy5pbmNyZW1lbnRTZWNvbmQsIG9uS2V5RG93bjogdGhpcy5zZWNvbmRVcEJ1dHRvbktleURvd25IYW5kbGVyLCByb2xlOiBcImJ1dHRvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcImNoZXZyb24tdXBcIiwgc2NhbGU6IGljb25TY2FsZSB9KSksIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMuc2Vjb25kLCBcImFyaWEtdmFsdWVtYXhcIjogXCI1OVwiLCBcImFyaWEtdmFsdWVtaW5cIjogXCIwXCIsIFwiYXJpYS12YWx1ZW5vd1wiOiAoc2Vjb25kSXNOdW1iZXIgJiYgcGFyc2VJbnQodGhpcy5zZWNvbmQpKSB8fCBcIjBcIiwgXCJhcmlhLXZhbHVldGV4dFwiOiB0aGlzLnNlY29uZCwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5pbnB1dF06IHRydWUsXG4gICAgICAgIFtDU1Muc2Vjb25kXTogdHJ1ZVxuICAgICAgfSwgb25Gb2N1czogdGhpcy5mb2N1c0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5zZWNvbmRLZXlEb3duSGFuZGxlciwgcm9sZTogXCJzcGluYnV0dG9uXCIsIHRhYkluZGV4OiAwLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1zb3J0LXByb3BzXG4gICAgICByZWY6IHRoaXMuc2V0U2Vjb25kRWwgfSwgdGhpcy5sb2NhbGl6ZWRTZWNvbmQgfHwgXCItLVwiKSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5zZWNvbmREb3duLCBjbGFzczoge1xuICAgICAgICBbQ1NTLmJ1dHRvbl06IHRydWUsXG4gICAgICAgIFtDU1MuYnV0dG9uU2Vjb25kRG93bl06IHRydWVcbiAgICAgIH0sIG9uQ2xpY2s6IHRoaXMuZGVjcmVtZW50U2Vjb25kLCBvbktleURvd246IHRoaXMuc2Vjb25kRG93bkJ1dHRvbktleURvd25IYW5kbGVyLCByb2xlOiBcImJ1dHRvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcImNoZXZyb24tZG93blwiLCBzY2FsZTogaWNvblNjYWxlIH0pKSkpLCB0aGlzLmxvY2FsaXplZFNlY29uZFN1ZmZpeCAmJiAoaChcInNwYW5cIiwgeyBjbGFzczogQ1NTLmRlbGltaXRlciB9LCB0aGlzLmxvY2FsaXplZFNlY29uZFN1ZmZpeCkpLCBzaG93TWVyaWRpZW0gJiYgKGgoXCJkaXZcIiwgeyBjbGFzczoge1xuICAgICAgICBbQ1NTLmNvbHVtbl06IHRydWUsXG4gICAgICAgIFtDU1MubWVyaWRpZW1TdGFydF06IHRoaXMubWVyaWRpZW1PcmRlciA9PT0gMFxuICAgICAgfSwgcm9sZTogXCJncm91cFwiIH0sIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubWVzc2FnZXMubWVyaWRpZW1VcCwgY2xhc3M6IHtcbiAgICAgICAgW0NTUy5idXR0b25dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvbk1lcmlkaWVtVXBdOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvblRvcFJpZ2h0XTogdHJ1ZVxuICAgICAgfSwgb25DbGljazogdGhpcy5pbmNyZW1lbnRNZXJpZGllbSwgb25LZXlEb3duOiB0aGlzLm1lcmlkaWVtVXBCdXR0b25LZXlEb3duSGFuZGxlciwgcm9sZTogXCJidXR0b25cIiB9LCBoKFwiY2FsY2l0ZS1pY29uXCIsIHsgaWNvbjogXCJjaGV2cm9uLXVwXCIsIHNjYWxlOiBpY29uU2NhbGUgfSkpLCBoKFwic3BhblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLm1lc3NhZ2VzLm1lcmlkaWVtLCBcImFyaWEtdmFsdWVtYXhcIjogXCIyXCIsIFwiYXJpYS12YWx1ZW1pblwiOiBcIjFcIiwgXCJhcmlhLXZhbHVlbm93XCI6ICh0aGlzLm1lcmlkaWVtID09PSBcIlBNXCIgJiYgXCIyXCIpIHx8IFwiMVwiLCBcImFyaWEtdmFsdWV0ZXh0XCI6IHRoaXMubWVyaWRpZW0sIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuaW5wdXRdOiB0cnVlLFxuICAgICAgICBbQ1NTLm1lcmlkaWVtXTogdHJ1ZVxuICAgICAgfSwgb25Gb2N1czogdGhpcy5mb2N1c0hhbmRsZXIsIG9uS2V5RG93bjogdGhpcy5tZXJpZGllbUtleURvd25IYW5kbGVyLCByb2xlOiBcInNwaW5idXR0b25cIiwgdGFiSW5kZXg6IDAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LXNvcnQtcHJvcHNcbiAgICAgIHJlZjogdGhpcy5zZXRNZXJpZGllbUVsIH0sIHRoaXMubG9jYWxpemVkTWVyaWRpZW0gfHwgXCItLVwiKSwgaChcInNwYW5cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5tZXNzYWdlcy5tZXJpZGllbURvd24sIGNsYXNzOiB7XG4gICAgICAgIFtDU1MuYnV0dG9uXTogdHJ1ZSxcbiAgICAgICAgW0NTUy5idXR0b25NZXJpZGllbURvd25dOiB0cnVlLFxuICAgICAgICBbQ1NTLmJ1dHRvbkJvdHRvbVJpZ2h0XTogdHJ1ZVxuICAgICAgfSwgb25DbGljazogdGhpcy5kZWNyZW1lbnRNZXJpZGllbSwgb25LZXlEb3duOiB0aGlzLm1lcmlkaWVtRG93bkJ1dHRvbktleURvd25IYW5kbGVyLCByb2xlOiBcImJ1dHRvblwiIH0sIGgoXCJjYWxjaXRlLWljb25cIiwgeyBpY29uOiBcImNoZXZyb24tZG93blwiLCBzY2FsZTogaWNvblNjYWxlIH0pKSkpKSk7XG4gIH1cbiAgc3RhdGljIGdldCBkZWxlZ2F0ZXNGb2N1cygpIHsgcmV0dXJuIHRydWU7IH1cbiAgc3RhdGljIGdldCBhc3NldHNEaXJzKCkgeyByZXR1cm4gW1wiYXNzZXRzXCJdOyB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIGdldEVsZW1lbnQodGhpcyk7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcInN0ZXBcIjogW1wic3RlcENoYW5nZVwiXSxcbiAgICBcInZhbHVlXCI6IFtcInZhbHVlV2F0Y2hlclwiXSxcbiAgICBcIm1lc3NhZ2VPdmVycmlkZXNcIjogW1wib25NZXNzYWdlc0NoYW5nZVwiXSxcbiAgICBcImVmZmVjdGl2ZUxvY2FsZVwiOiBbXCJlZmZlY3RpdmVMb2NhbGVXYXRjaGVyXCJdXG4gIH07IH1cbn07XG5UaW1lUGlja2VyLnN0eWxlID0gdGltZVBpY2tlckNzcztcblxuZXhwb3J0IHsgSW5wdXRUaW1lUGlja2VyIGFzIEksIFRpbWVQaWNrZXIgYXMgVCwgZGF5anMgYXMgZCB9O1xuIiwiLyohXG4gKiBBbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Fc3JpL2NhbGNpdGUtY29tcG9uZW50cy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kIGZvciBkZXRhaWxzLlxuICogdjEuNC4zXG4gKi9cbmV4cG9ydCB7IEkgYXMgY2FsY2l0ZV9pbnB1dF90aW1lX3BpY2tlciwgVCBhcyBjYWxjaXRlX3RpbWVfcGlja2VyIH0gZnJvbSAnLi9jYWxjaXRlLWlucHV0LXRpbWUtcGlja2VyLmNhbGNpdGUtdGltZS1waWNrZXItMzMwYWRiNjUuanMnO1xuaW1wb3J0ICcuL2luZGV4LWM3ZTA1ZTYzLmpzJztcbmltcG9ydCAnLi9mb3JtLWQ3MzU5ZWZlLmpzJztcbmltcG9ydCAnLi9kb20tMWZiOTRmZjYuanMnO1xuaW1wb3J0ICcuL2d1aWQtNzEzNjk3NGIuanMnO1xuaW1wb3J0ICcuL3Jlc291cmNlcy0zNDJlMTJkMS5qcyc7XG5pbXBvcnQgJy4vaW50ZXJhY3RpdmUtMGViMTM2MDAuanMnO1xuaW1wb3J0ICcuL2Jyb3dzZXItOTliYzYyY2YuanMnO1xuaW1wb3J0ICcuL2tleS04ZmYwZDEwMS5qcyc7XG5pbXBvcnQgJy4vbGFiZWwtOWQyZWIzMzQuanMnO1xuaW1wb3J0ICcuL2xvYWRhYmxlLTgwNThlMzAwLmpzJztcbmltcG9ydCAnLi9sb2NhbGUtYTM1NjQ4Y2QuanMnO1xuaW1wb3J0ICcuL29ic2VydmVycy05NWU5N2ZhZS5qcyc7XG5pbXBvcnQgJy4vZm9jdXNUcmFwQ29tcG9uZW50LTA3YWRjYjNmLmpzJztcbmltcG9ydCAnLi90OW4tZmFjMTMzOTQuanMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9