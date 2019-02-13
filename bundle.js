(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Relative size factors from https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_ratio.html
// Scale factors from http://www.planetaryorbits.com/kepler-laws-orbital-elements.html

const mercury = {
  display: 'Mercury',
  name: 'mercury',
  scaleFactor: 1,
  rFactor: 0.383,
  color: '#60597B',
  apiDate: '1985/7/22',
  periDate: '1985/6/8',
  orbit: {
    elements: {
      a: { val: 0.38709843, deg: false },
      e: { val: 0.20563661, deg: false },
      i: { val: 7.00559432, deg: true },
      L: { val: 252.25166724, deg: true },
      lPeri: { val: 77.45771895, deg: true },
      lAscNode: { val: 48.33961819, deg: true },
    },
    cYs: {
      a: {
        val:
         0,
        deg: false,
      },
      e: { val: 0.00002123, deg: false },
      i: { val: -0.00590158, deg: true },
      L: { val: 149472.67486623, deg: true },
      lPeri: { val: 0.15940013, deg: true },
      lAscNode: { val: -0.12214182, deg: true },
    },
  },
};

const venus = {
  display: 'Venus',
  name: 'venus',
  scaleFactor: 1,
  rFactor: 0.949,
  color: '#E38E3E',
  apiDate: '1986/1/27',
  periDate: '1985/10/7',
  orbit: {
    elements: {
      a: { val: 0.72333566, deg: false },
      e: { val: 0.00677672, deg: false },
      i: { val: 3.39467605, deg: true },
      L: { val: 181.9790995, deg: true },
      lPeri: { val: 131.60246718, deg: true },
      lAscNode: { val: 76.67984255, deg: true },
    },
    cYs: {
      a: { val: 0.0000039, deg: false },
      e: { val: -0.00004107, deg: false },
      i: { val: -0.0007889, deg: true },
      L: { val: 58517.81538729, deg: true },
      lPeri: { val: 0.00268329, deg: true },
      lAscNode: { val: -0.27769418, deg: true },
    },
  },
};

const earth = {
  display: 'Earth',
  name: 'earth',
  scaleFactor: 1,
  rFactor: 1,
  color: '#00aeff',
  apiDate: '1987/7/5',
  periDate: '1987/1/4',
  orbit: {
    elements: {
      a: { val: 1.00000261, deg: false },
      e: { val: 0.01671123, deg: false },
      i: { val: -0.00001531, deg: true },
      L: { val: 100.46457166, deg: true },
      lPeri: { val: 102.93768193, deg: true },
      lAscNode: { val: 0.0, deg: true },
    },
    cYs: {
      a: { val: 0.00000562, deg: false },
      e: { val: -0.00004392, deg: false },
      i: { val: -0.01294668, deg: true },
      L: { val: 35999.37244981, deg: true },
      lPeri: { val: 0.32327364, deg: true },
      lAscNode: { val: 0.0, deg: true },
    },
  },
};

const mars = {
  display: 'Mars',
  name: 'mars',
  scaleFactor: 1,
  rFactor: 0.532,
  color: '#CF7167',
  apiDate: '1987/9/4',
  periDate: '1988/8/13',
  orbit: {
    elements: {
      a: { val: 1.52371034, deg: false },
      e: { val: 0.0933941, deg: false },
      i: { val: 1.84969142, deg: true },
      L: { val: -4.55343205, deg: true },
      lPeri: { val: -23.94362959, deg: true },
      lAscNode: { val: 49.55953891, deg: true },
    },
    cYs: {
      a: { val: 0.00001847, deg: false },
      e: { val: 0.00007882, deg: false },
      i: { val: -0.00813131, deg: true },
      L: { val: 19140.30268499, deg: true },
      lPeri: { val: 0.44441088, deg: true },
      lAscNode: { val: -0.29257343, deg: true },
    },
  },
};

const jupiter = {
  display: 'Jupiter',
  name: 'jupiter',
  scaleFactor: 2.5,
  rFactor: 11.21,
  color: '#9A7268',
  apiDate: '1993/6/2',
  periDate: '1999/5/8',
  orbit: {
    elements: {
      a: {
        val: 5.202887,
        deg: false,
      },
      e: { val: 0.04838624, deg: false },
      i: { val: 1.30439695, deg: true },
      L: { val: 34.39644051, deg: true },
      lPeri: { val: 14.72847983, deg: true },
      lAscNode: { val: 100.47390909, deg: true },
    },
    cYs: {
      a: {
        val: -0.00011607,
        deg: false,
      },
      e: { val: -0.00013253, deg: false },
      i: { val: -0.00183714, deg: true },
      L: { val: 3034.74612775, deg: true },
      lPeri: { val: 0.21252668, deg: true },
      lAscNode: { val: 0.20469106, deg: true },
    },
  },
};

const saturn = {
  display: 'Saturn',
  name: 'saturn',
  scaleFactor: 3.5,
  rFactor: 9.45,
  color: '#FEE3B8',
  apiDate: '1988/10/8',
  periDate: '2003/6/26',
  orbit: {
    elements: {
      a: { val: 9.53667594, deg: false },
      e: { val: 0.05386179, deg: false },
      i: { val: 2.48599187, deg: true },
      L: { val: 49.95424423, deg: true },
      lPeri: { val: 92.59887831, deg: true },
      lAscNode: { val: 113.66242448, deg: true },
    },
    cYs: {
      a: { val: -0.0012506, deg: false },
      e: { val: -0.00050991, deg: false },
      i: { val: 0.00193609, deg: true },
      L: { val: 1222.49362201, deg: true },
      lPeri: { val: -0.41897216, deg: true },
      lAscNode: { val: -0.28867794, deg: true },
    },
  },
};

const uranus = {
  display: 'Uranus',
  name: 'uranus',
  scaleFactor: 6.2,
  rFactor: 4.01,
  color: '#0D7EAA',
  apiDate: '2008/10/18',
  periDate: '1966/10/7',
  orbit: {
    elements: {
      a: { val: 19.18916464, deg: false },
      e: { val: 0.04725744, deg: false },
      i: { val: 0.77263783, deg: true },
      L: { val: 313.23810451, deg: true },
      lPeri: { val: 170.9542763, deg: true },
      lAscNode: { val: 74.01692503, deg: true },
    },
    cYs: {
      a: { val: -0.00196176, deg: false },
      e: { val: -0.00004397, deg: false },
      i: { val: -0.00242939, deg: true },
      L: { val: 428.48202785, deg: true },
      lPeri: { val: 0.40805281, deg: true },
      lAscNode: { val: 0.04240589, deg: true },
    },
  },
};

const neptune = {
  display: 'Neptune',
  name: 'neptune',
  scaleFactor: 8.7,
  rFactor: 3.88,
  color: '#536BA7',
  apiDate: '1963/6/23',
  periDate: '1881/3/9',
  orbit: {
    elements: {
      a: { val: 30.06992276, deg: false },
      e: { val: 0.00859048, deg: false },
      i: { val: 1.77004347, deg: true },
      L: { val: -55.12002969, deg: true },
      lPeri: { val: 44.96476227, deg: true },
      lAscNode: { val: 131.78422574, deg: true },
    },
    cYs: {
      a: { val: 0.00026291, deg: false },
      e: { val: 0.00005105, deg: false },
      i: { val: 0.00035372, deg: true },
      L: { val: 218.45945325, deg: true },
      lPeri: { val: -0.32241464, deg: true },
      lAscNode: { val: -0.00508664, deg: true },
    },
  },
};

const pluto = {
  display: 'Pluto',
  name: 'pluto',
  rFactor: 0.186,
  scaleFactor: 8.7,
  color: '#715138',
  apiDate: '2114/2/15',
  periDate: '1989/9/5',
  orbit: {
    elements: {
      a: { val: 39.48211675, deg: false },
      e: { val: 0.2488273, deg: false },
      i: { val: 17.14001206, deg: true },
      L: { val: 238.92903833, deg: true },
      lPeri: { val: 224.06891629, deg: true },
      lAscNode: { val: 110.30393684, deg: true },
    },
    cYs: {
      a: { val: -0.00031596, deg: false },
      e: { val: 0.0000517, deg: false },
      i: { val: 0.00004818, deg: true },
      L: { val: 145.20780515, deg: true },
      lPeri: { val: -0.04062942, deg: true },
      lAscNode: { val: -0.01183482, deg: true },
    },
  },
};


module.exports = {
  mercury,
  venus,
  mars,
  earth,
  jupiter,
  saturn,
  uranus,
  neptune,
  pluto,
};

},{}],2:[function(require,module,exports){
const JulianUtils = require( './utils/julian' );
const OrbitalUtils = require( './utils/orbital_utils' );
const Constants = require( './utils/constants' );
const Start = require( './bodies/mapped_planets' );
const SolarSystem = require( './bodies/mapped_planets' );
const PlutoOrbit = require( './utils/pluto_orbit' );

const app = ( function () {
  const R_SOL = 10;
  let currentDate = 0;
  const radians = 0;

  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;
  const canvas = document.getElementById( 'canvas' );
  const bgCanvs = document.getElementById( 'bg_canvas' );
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  bgCanvs.width = WIDTH;
  bgCanvs.height = HEIGHT;
  const ctx = canvas.getContext( '2d' );
  const bgCtx = bgCanvs.getContext( '2d' );
  bgCtx.fillRect( 0, 0, WIDTH, HEIGHT );
  ctx.beginPath();
  bgCtx.arc( WIDTH / 2, HEIGHT / 2, R_SOL, 0, 2 * Math.PI );
  bgCtx.fillStyle = 'yellow';
  bgCtx.fill();

  const updateSolarSystem = ( testDate ) => {
    const centuriesSinceJ2000 = ( testDate - JulianUtils.getJ2000() ) / Constants.JULIAN_CENTUTY_IN_DAYS;
    const planetKeys = Object.keys( SolarSystem );
    planetKeys.forEach( ( planetKey ) => {
      const planet = SolarSystem[planetKey];
      const orbitals = OrbitalUtils.calcOrbitals( planet, centuriesSinceJ2000 );
      planet.orbit.genOrbElems = orbitals;
      orbitals.T = testDate;
      SolarSystem[planetKey] = planet;
    } );
    return SolarSystem;
  };

  const startSimulation = () => {
    ctx.clearRect( 0, 0, WIDTH, HEIGHT );
    const solarSystem = updateSolarSystem( currentDate );
    currentDate += 1;
    const planetKeys = Object.keys( solarSystem );
    planetKeys.forEach( ( planetKey ) => {
      const planet = SolarSystem[planetKey];
      const { x, y } = planet.orbit.genOrbElems.helioCentricCoords;
      const scaledCoords = OrbitalUtils.calcScaledCoords( planet, x, y, WIDTH, HEIGHT );

      // Orbit trails
      // bgCtx.fillStyle = 'red';
      // bgCtx.fillRect( scaledCoords.x, scaledCoords.y, 1, 1 );

      // Planet
      ctx.beginPath();
      ctx.fillStyle = planet.color;
      const r = OrbitalUtils.calcNormR( planet.rFactor );
      ctx.arc( scaledCoords.x, scaledCoords.y, r, 0, 2 * Math.PI );
      ctx.fill();
    } );


    setTimeout( startSimulation, 1 );
  };

  const setCurrentDate = ( gregorianDate ) => {
    currentDate = JulianUtils.getDate( gregorianDate );
  };

  const drawOrbits = ( ) => {
    const planetKeys = Object.keys( SolarSystem );
    planetKeys.forEach( ( planetKey ) => {
      const planet = Start[planetKey];

      // Draw perihelion
      updateSolarSystem( JulianUtils.getDate( planet.apiDate ) );
      const apiX = planet.orbit.genOrbElems.helioCentricCoords.x;
      const apiY = planet.orbit.genOrbElems.helioCentricCoords.y;
      const scaledApiCoords = OrbitalUtils.calcScaledCoords( planet, apiX, apiY, WIDTH, HEIGHT );
      bgCtx.beginPath();
      bgCtx.fillStyle = planet.color;
      bgCtx.arc( scaledApiCoords.x, scaledApiCoords.y, 2, 0, 2 * Math.PI );
      bgCtx.fill();
      bgCtx.fillText( 'A', scaledApiCoords.x + 5, scaledApiCoords.y + 3 );

      // Draw aphelion
      updateSolarSystem( JulianUtils.getDate( planet.periDate ) );
      const periX = planet.orbit.genOrbElems.helioCentricCoords.x;
      const periY = planet.orbit.genOrbElems.helioCentricCoords.y;
      const scaledPeriCoords = OrbitalUtils.calcScaledCoords( planet, periX, periY, WIDTH, HEIGHT );
      bgCtx.beginPath();
      bgCtx.fillStyle = planet.color;
      bgCtx.arc( scaledPeriCoords.x, scaledPeriCoords.y, 2, 0, 2 * Math.PI );
      bgCtx.fill();
      bgCtx.fillText( 'P', scaledPeriCoords.x + 5, scaledPeriCoords.y + 3 );


      const centerX = ( apiX + periX ) / 2;
      const centerY = ( apiY + periY ) / 2;
      const scaledCenterCoords = OrbitalUtils.calcScaledCoords( planet, centerX, centerY, WIDTH, HEIGHT );

      // Draw centers
      // bgCtx.fillStyle = planet.color;
      // bgCtx.arc( scaledCenterCoords.x, scaledCenterCoords.y, 2, 0, 2 * Math.PI );
      // bgCtx.fill();

      // Draw orbits except for Pluto, which doesn't fit ellipse well
      if ( planet.name !== 'pluto' ) {
        bgCtx.beginPath();
        bgCtx.strokeStyle = planet.color;
        bgCtx.ellipse(
          scaledCenterCoords.x,
          scaledCenterCoords.y,
          planet.orbit.genOrbElems.a * OrbitalUtils.getScale() / planet.scaleFactor,
          planet.orbit.genOrbElems.b * OrbitalUtils.getScale() / planet.scaleFactor,
          OrbitalUtils.toRadians( planet.orbit.genOrbElems.lPeri ),
          0,
          2 * Math.PI,
        );
        bgCtx.stroke();
      }
    } );
  };

  const drawPlutoOrbit = () => {
    PlutoOrbit.forEach( ( position, index ) => {
      if ( index % 2 ) {
        bgCtx.beginPath();
        const scaledCoords = OrbitalUtils.calcScaledCoords( SolarSystem.pluto, position.x, position.y, WIDTH, HEIGHT );
        bgCtx.fillStyle = SolarSystem.pluto.color;
        bgCtx.fillRect( scaledCoords.x, scaledCoords.y, 1, 1 );
      }
    } );
  };

  return {
    startSimulation,
    updateSolarSystem,
    setCurrentDate,
    drawOrbits,
    drawPlutoOrbit,
  };
}() );


app.setCurrentDate( '2022/1/20' );
app.startSimulation();
app.drawPlutoOrbit();
app.drawOrbits();


},{"./bodies/mapped_planets":1,"./utils/constants":4,"./utils/julian":5,"./utils/orbital_utils":6,"./utils/pluto_orbit":7}],3:[function(require,module,exports){
//! moment.js

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));

},{}],4:[function(require,module,exports){
const JULIAN_CENTUTY_IN_DAYS = 36525;

module.exports = {
  JULIAN_CENTUTY_IN_DAYS,
};


},{}],5:[function(require,module,exports){
const moment = require( 'moment' );

const app = ( function () {
  const getDate = ( gregorianDate ) => {
    const testDate = moment( gregorianDate, 'YYYY-MM-DD' );
    const day = testDate.date();
    const year = testDate.year();
    const month = testDate.month();
    const a = Math.floor( ( 14 - month ) / 12 );
    const y = ( year + 4800 ) - a;
    const m = ( month + ( 12 * a ) ) - 3;
    const julianDay = day + Math.floor( ( ( 153 * m ) + 2 ) / 5 ) + ( 365 * y ) + Math.floor( y / 4 ) - Math.floor( y / 100 ) + Math.floor( y / 400 ) - 32045;
    return julianDay;
  };

  const getJ2000 = () => getDate( '2000/1/1/' );

  return {
    getDate,
    getJ2000,
  };
}() );

module.exports = {
  getDate: app.getDate,
  getJ2000: app.getJ2000,
};

},{"moment":3}],6:[function(require,module,exports){
const app = ( function () {
  const SCALE_DESKTOP = 80;
  const SCALE_MOBILE = 30;

  const getScale = () => SCALE_DESKTOP;
  // https://en.wikipedia.org/wiki/Mean_longitude
  // angle, 360 degres, calculated from mean longitude: l = ϖ + M,
  const calcMeanAnom = ( L, lPeri ) => {
    let M = L - lPeri;
    while ( M < 0 ) {
      M += 360;
    }
    return M;
  };

  // http://www.jgiesen.de/kepler/kepler.html
  const calcEccAnom = ( ecc, m, decimalPlaces ) => {
    let M = m;
    const pi = Math.PI;
    const K = pi / 180.0;
    const maxIter = 30;
    let i = 0;
    const delta = 10 ** -decimalPlaces;
    let E;
    let F;

    M /= 360.0;
    M = 2.0 * pi * ( M - Math.floor( M ) );

    if ( ecc < 0.8 ) E = m; else E = pi;

    F = E - ( ecc * Math.sin( M ) ) - M;
    while ( ( Math.abs( F ) > delta ) && ( i < maxIter ) ) {
      E -= F / ( 1.0 - ( ecc * Math.cos( E ) ) );
      F = E - ( ecc * Math.sin( E ) ) - M;
      i += 1;
    }

    E /= K;
    return Math.round( E * ( 10 ** decimalPlaces ) ) / ( 10 ** decimalPlaces );
  };


  const toRadians = deg => deg * Math.PI / 180;

  // http://www.braeunig.us/space/plntpos.htm
  const calcTrueAnom = ( ecc, eccAnom ) => {
    const K = Math.PI / 180;
    const trueAnomArg = ( Math.sqrt( ( 1 + ecc ) / ( 1 - ecc ) ) ) * ( Math.tan( toRadians( eccAnom ) / 2 ) );
    if ( trueAnomArg < 0 ) {
      return 2 * ( ( Math.atan( trueAnomArg ) / K ) + 180 );
    }
    return 2 * ( Math.atan( trueAnomArg ) / K );
  };

  const calcRadiusVector = ( a, e, trueAnom ) => a * ( 1 - ( e ** 2 ) ) / ( 1 + ( e * Math.cos( toRadians( trueAnom ) ) ) );

  const calcSemiMinorAxis = ( e, a ) => Math.sqrt( 1 - ( e ** 2 ) ) * a;

  const calcHelioCentric = ( a, e, i, trueAnom, lascNode, lPeri ) => {
    const r = calcRadiusVector( a, e, trueAnom );
    const x = r * ( ( Math.cos( toRadians( lascNode ) ) * Math.cos( toRadians( trueAnom + lPeri - lascNode ) ) ) - ( Math.sin( toRadians( lascNode ) ) * Math.sin( toRadians( trueAnom + lPeri - lascNode ) ) * Math.cos( toRadians( i ) ) ) );
    const y = r * ( Math.sin( toRadians( lascNode ) ) * Math.cos( toRadians( trueAnom + lPeri - lascNode ) ) + Math.cos( toRadians( lascNode ) ) * Math.sin( toRadians( trueAnom + lPeri - lascNode ) ) * Math.cos( toRadians( i ) ) );
    const z = r * ( Math.sin( toRadians( trueAnom + lPeri - lascNode ) ) * Math.sin( toRadians( i ) ) );
    return { x, y, z };
  };

  const calcCorrection = ( el, cY, cSinceJ2000, isAngle ) => {
    let correction = el + ( cY * cSinceJ2000 );
    if ( isAngle ) {
      while ( correction < 0 ) {
        correction += 360;
      }
      correction %= 360;
    }
    return correction;
  };

  // Data from https://ssd.jpl.nasa.gov/?planet_pos, valid 1800-2050
  const calcOrbitals = ( planet, cSinceJ2000 ) => {
    const generatedOrbitals = {};
    const { elements, cYs } = planet.orbit;
    const keys = Object.keys( elements );
    keys.forEach( ( key ) => {
      const el = elements[key].val;
      const cY = cYs[key].val;
      generatedOrbitals[key] = calcCorrection( el, cY, cSinceJ2000, elements[key].deg );
    } );

    // Mean anomaly
    generatedOrbitals.M = calcMeanAnom( generatedOrbitals.L, generatedOrbitals.lPeri );

    // Eccentric anomaly
    generatedOrbitals.eccAnom = calcEccAnom( generatedOrbitals.e, generatedOrbitals.M, 6 );

    // True anomaly
    generatedOrbitals.trueAnom = calcTrueAnom( generatedOrbitals.e, generatedOrbitals.eccAnom );

    // Semi minor axis
    generatedOrbitals.b = calcSemiMinorAxis( generatedOrbitals.e, generatedOrbitals.a );

    // Heliocentric Coords
    generatedOrbitals.helioCentricCoords = calcHelioCentric(
      generatedOrbitals.a,
      generatedOrbitals.e,
      generatedOrbitals.i,
      generatedOrbitals.trueAnom,
      generatedOrbitals.lAscNode,
      generatedOrbitals.lPeri,
    );
    return generatedOrbitals;
  };

  const calcScaledCoords = ( planet, x, y, WIDTH, HEIGHT ) => {
    const planetaryScaleFactor = planet.scaleFactor ? planet.scaleFactor : 1;
    const scaledX = ( WIDTH / 2 ) + ( x * SCALE_DESKTOP / planetaryScaleFactor );
    const scaledY = ( HEIGHT / 2 ) - ( y * SCALE_DESKTOP / planetaryScaleFactor );
    return { x: scaledX, y: scaledY };
  };

  const calcNormR = ( rFactor ) => {
    const MAX = 40;
    const MIN = 5;
    const FLOOR = 5;
    const r = ( ( rFactor * SCALE_DESKTOP - MIN ) / ( MAX - MIN ) ) + FLOOR;
    return r;
  };

  return {
    getScale,
    toRadians,
    calcOrbitals,
    calcScaledCoords,
    calcNormR,
  };
}() );

module.exports = {
  getScale: app.getScale,
  toRadians: app.toRadians,
  calcOrbitals: app.calcOrbitals,
  calcScaledCoords: app.calcScaledCoords,
  calcNormR: app.calcNormR,
};

},{}],7:[function(require,module,exports){
const PlutoOrbit = [{"x":-20.256870769288906,"y":-20.126040799230992,"z":8.01303272889247},{"x":-20.209017036396666,"y":-20.177347181609036,"z":8.004682070653734},{"x":-20.161073774547106,"y":-20.228559418411162,"z":7.996295436841608},{"x":-20.113034801601792,"y":-20.279684102750494,"z":7.98787174495341},{"x":-20.064906629030855,"y":-20.330714293950283,"z":7.979412135561554},{"x":-20.016686698518278,"y":-20.381652715387958,"z":7.9709161601677305},{"x":-19.96837654240823,"y":-20.432497750955008,"z":7.962384089032468},{"x":-19.919974957823896,"y":-20.48325066935252,"z":7.953815710021063},{"x":-19.87148348288276,"y":-20.533909860356886,"z":7.9452112956939285},{"x":-19.822901369520746,"y":-20.58447611081488,"z":7.9365707138970825},{"x":-19.774229243754828,"y":-20.634948771777182,"z":7.9278940762531676},{"x":-19.72546727426049,"y":-20.685327673621565,"z":7.919181413402242},{"x":-19.676615630011987,"y":-20.735612647054033,"z":7.9104327561059335},{"x":-19.627674480281737,"y":-20.785803523109198,"z":7.9016481352473145},{"x":-19.578644458246835,"y":-20.83589966032566,"z":7.892827665321668},{"x":-19.529525271859168,"y":-20.88590136499929,"z":7.883971294643368},{"x":-19.480317556574715,"y":-20.935807998112235,"z":7.875079138628451},{"x":-19.431021019235985,"y":-20.985619864854222,"z":7.866151145152055},{"x":-19.381636297569067,"y":-21.035336328659383,"z":7.8571874305493505},{"x":-19.332164032952818,"y":-21.084956756873314,"z":7.8481881126307576},{"x":-19.282603464425666,"y":-21.134481923180704,"z":7.839153054103129},{"x":-19.232930819335216,"y":-21.183935456473545,"z":7.830077907781093},{"x":-19.183219983699303,"y":-21.233243942548963,"z":7.820976187529673},{"x":-19.133397422266597,"y":-21.282480471235914,"z":7.811834446236607},{"x":-19.083488195759443,"y":-21.331620154341113,"z":7.80265726888786},{"x":-19.033492009092445,"y":-21.38066329531921,"z":7.793444602615365},{"x":-18.98340951144302,"y":-21.429609270238107,"z":7.784196568419049},{"x":-18.93324088109566,"y":-21.47845792029236,"z":7.7749132008765125},{"x":-18.882986296604166,"y":-21.527209087032,"z":7.765594534681335},{"x":-18.8326449845367,"y":-21.575863531027235,"z":7.756240427529809},{"x":-18.782217596002855,"y":-21.624420630648004,"z":7.746851001227227},{"x":-18.731703830141615,"y":-21.67288068326998,"z":7.737426200584398},{"x":-18.6811029045078,"y":-21.7212444395478,"z":7.727965879629256},{"x":-18.630414030408037,"y":-21.769512643141695,"z":7.718469889833821},{"x":-18.57963689315171,"y":-21.817685575930284,"z":7.7089381703500255},{"x":-18.528818316294338,"y":-21.865719040406162,"z":7.699379534352866},{"x":-18.47788497765027,"y":-21.913682425706657,"z":7.689780200260257},{"x":-18.426867311937823,"y":-21.96154692695847,"z":7.680145888279318},{"x":-18.37576646726659,"y":-22.009311487175548,"z":7.670476817375831},{"x":-18.32458214565531,"y":-22.056976407568605,"z":7.660772933604237},{"x":-18.27331501629118,"y":-22.10454108758566,"z":7.651034366255086},{"x":-18.22196478007131,"y":-22.152005827335373,"z":7.641261060940472},{"x":-18.17053210828291,"y":-22.199370028870177,"z":7.631453147837184},{"x":-18.119017188183538,"y":-22.246633544766244,"z":7.621610665336864},{"x":-18.06742020726892,"y":-22.29379622798031,"z":7.611733651940807},{"x":-18.015740864199568,"y":-22.340858376408402,"z":7.601822052377426},{"x":-17.96398032429624,"y":-22.387818953716383,"z":7.5918760928014795},{"x":-17.912138287488677,"y":-22.434678259497808,"z":7.581895718490241},{"x":-17.860215433670067,"y":-22.481435706489215,"z":7.57188106325348},{"x":-17.808211461643637,"y":-22.528091593182403,"z":7.5618320719247345},{"x":-17.756126560313938,"y":-22.57464577482946,"z":7.551748783658609},{"x":-17.70396190644991,"y":-22.62109722922476,"z":7.541631429433598},{"x":-17.65171670492815,"y":-22.667446694007023,"z":7.531479858217731},{"x":-17.59939164072277,"y":-22.71369358855808,"z":7.521294206001808},{"x":-17.546987402162827,"y":-22.75983733643451,"z":7.511074610193912},{"x":-17.494503190084956,"y":-22.80587867078084,"z":7.500820918112537},{"x":-17.441916797319664,"y":-22.85183698737342,"z":7.490528782305465},{"x":-17.38928912621433,"y":-22.897659161576392,"z":7.4802101327580495},{"x":-17.336575612170694,"y":-22.943384176684493,"z":7.469856251619285},{"x":-17.283778416027335,"y":-22.989010129050513,"z":7.459467560167668},{"x":-17.230901714563675,"y":-23.034533409131495,"z":7.449044880207587},{"x":-17.177947201569378,"y":-23.07995258537904,"z":7.438588548453364},{"x":-17.124914570877568,"y":-23.125267951930145,"z":7.428098507835085},{"x":-17.071805022806515,"y":-23.170478517015802,"z":7.4175749994009},{"x":-17.01861674072811,"y":-23.21558585612443,"z":7.407017666325326},{"x":-16.965339821780166,"y":-23.260598338783133,"z":7.396424540017509},{"x":-16.9120138317092,"y":-23.305482646913987,"z":7.385803498784387},{"x":-16.858597587996965,"y":-23.350273545509612,"z":7.375146351547533},{"x":-16.80510491329531,"y":-23.394959412446013,"z":7.364455852579703},{"x":-16.751536512850134,"y":-23.439539694554718,"z":7.353732146673689},{"x":-16.69789207827293,"y":-23.484014684410937,"z":7.342975175949972},{"x":-16.644172825875547,"y":-23.528383411846285,"z":7.332185188395002},{"x":-16.590378958316045,"y":-23.57264575245012,"z":7.3213622293188},{"x":-16.5365096570869,"y":-23.616802417857144,"z":7.31050613814264},{"x":-16.48256614354934,"y":-23.660852444979678,"z":7.29961716507144},{"x":-16.428548108731874,"y":-23.704796126528077,"z":7.2886952520716015},{"x":-16.37445575376713,"y":-23.748633336843348,"z":7.277740443878388},{"x":-16.320289793610883,"y":-23.792363536780528,"z":7.266752889594322},{"x":-16.26604940321258,"y":-23.835987430297042,"z":7.25573242592647},{"x":-16.21173529714784,"y":-23.879504478101126,"z":7.244679201851713},{"x":-16.157348193121674,"y":-23.922914145242768,"z":7.233593367716846},{"x":-16.102889328534776,"y":-23.96621549115572,"z":7.222475180776879},{"x":-16.048358394855374,"y":-24.00940881054229,"z":7.211324583338753},{"x":-15.993756634915083,"y":-24.052493170601558,"z":7.200141835059546},{"x":-15.939084259973383,"y":-24.095468460892942,"z":7.188926985232742},{"x":-15.884340442422273,"y":-24.138335383464955,"z":7.177679869621476},{"x":-15.82952486921542,"y":-24.18109422785752,"z":7.166400428674382},{"x":-15.774638266459798,"y":-24.223744472000778,"z":7.155088816547246},{"x":-15.719680319973742,"y":-24.266286404311767,"z":7.14374497324016},{"x":-15.664650712851186,"y":-24.308720309662004,"z":7.132368837585706},{"x":-15.60955121788217,"y":-24.351044865154282,"z":7.120960780778933},{"x":-15.554380997526486,"y":-24.393260760554643,"z":7.109520634395579},{"x":-15.499141831318822,"y":-24.435366682798733,"z":7.098048772634052},{"x":-15.443832881286308,"y":-24.477363321530945,"z":7.0865450269319545},{"x":-15.388454355802892,"y":-24.519250564724818,"z":7.075009445578562},{"x":-15.333006990043229,"y":-24.561027904735035,"z":7.063442186896544},{"x":-15.27749152214797,"y":-24.60269483836505,"z":7.051843410542655},{"x":-15.22190710900736,"y":-24.644252049014423,"z":7.040212945800323},{"x":-15.166251844481474,"y":-24.685700998561543,"z":7.02855039779336},{"x":-15.110534400720818,"y":-24.727035292571586,"z":7.016857590542092},{"x":-15.054747059607784,"y":-24.768260723274672,"z":7.005132911540445},{"x":-14.998891616767503,"y":-24.80937600260044,"z":6.993376742316326},{"x":-14.94296296609856,"y":-24.85038491205542,"z":6.981588010678322},{"x":-14.886980989628697,"y":-24.89127295754691,"z":6.969770916184325},{"x":-14.830925168454986,"y":-24.93205520557654,"z":6.957921136341474},{"x":-14.774803691980386,"y":-24.972725723030987,"z":6.946040404911509},{"x":-14.718616242050565,"y":-25.013284797239148,"z":6.934128660629272},{"x":-14.662363032871548,"y":-25.05373232798929,"z":6.922185954735759},{"x":-14.606044278760228,"y":-25.094068215519496,"z":6.910212338552187},{"x":-14.549660194143453,"y":-25.134292360517737,"z":6.898207863479746},{"x":-14.49321045651334,"y":-25.17440504499459,"z":6.886172466424863},{"x":-14.43669581620277,"y":-25.21440578762206,"z":6.8741063129117945},{"x":-14.38011541117512,"y":-25.25429524809129,"z":6.862009224212062},{"x":-14.323469991322181,"y":-25.294072944938623,"z":6.84988136570786},{"x":-14.266758690124057,"y":-25.333739531575155,"z":6.837722556701793},{"x":-14.209982797466683,"y":-25.373294150632184,"z":6.8255330785356705},{"x":-14.153142526557557,"y":-25.412736702841045,"z":6.813312982262747},{"x":-14.096238632465111,"y":-25.45206671567897,"z":6.801062435719591},{"x":-14.039321774803813,"y":-25.491249435717805,"z":6.7887923724921},{"x":-13.98230220378373,"y":-25.53034674749236,"z":6.77648345606306},{"x":-13.925220226139977,"y":-25.5693309061396,"z":6.764144375586094},{"x":-13.868076059462753,"y":-25.608201820882673,"z":6.751775184291126},{"x":-13.81087101152497,"y":-25.64695866432239,"z":6.739376171901572},{"x":-13.753604758315133,"y":-25.685601720309645,"z":6.726947275086112},{"x":-13.696276973273296,"y":-25.72413126902038,"z":6.714488429382964},{"x":-13.638888968326984,"y":-25.76254649065152,"z":6.701999926530338},{"x":-13.5814404177137,"y":-25.800847667340996,"z":6.689481702507142},{"x":-13.523890418805838,"y":-25.839061965653844,"z":6.676924833917907},{"x":-13.466331818581326,"y":-25.87712783624429,"z":6.664349589032791},{"x":-13.40871280792091,"y":-25.91507980933583,"z":6.6517446778978995},{"x":-13.351033605010569,"y":-25.952917798346526,"z":6.639110154364622},{"x":-13.293292775505046,"y":-25.990642794704755,"z":6.626445709670894},{"x":-13.235491635026978,"y":-26.02825398705771,"z":6.613751637528284},{"x":-13.177629847965354,"y":-26.06575164413799,"z":6.601027869632334},{"x":-13.119708734591114,"y":-26.103134962797135,"z":6.588274701917292},{"x":-13.061729620325268,"y":-26.14040314871236,"z":6.575492432751681},{"x":-13.003692173588838,"y":-26.177556478260165,"z":6.562680995815504},{"x":-12.945597169671712,"y":-26.214594518283423,"z":6.549840569008032},{"x":-12.887445386427304,"y":-26.251516840290368,"z":6.536971331469405},{"x":-12.829233156943848,"y":-26.288325826848656,"z":6.524072477563768},{"x":-12.770971823389665,"y":-26.32501438840111,"z":6.511146529214533},{"x":-12.712649377120165,"y":-26.361590165163108,"z":6.4981908306743765},{"x":-12.65426491046253,"y":-26.398053752340807,"z":6.485205183113153},{"x":-12.59584040488898,"y":-26.434391527334647,"z":6.472194486630488},{"x":-12.53735209959453,"y":-26.4706183657249,"z":6.4591534605799215},{"x":-12.478808585861835,"y":-26.506728982789745,"z":6.446084024365712},{"x":-12.42020952818825,"y":-26.542723652224968,"z":6.432986110246163},{"x":-12.361556271165544,"y":-26.57860161692043,"z":6.419860026118007},{"x":-12.302850725712267,"y":-26.61436178743443,"z":6.4067062081180035},{"x":-12.244085255292633,"y":-26.650008871341058,"z":6.3935229512461405},{"x":-12.185275820697585,"y":-26.685533272452428,"z":6.38031384507334},{"x":-12.126407471628132,"y":-26.72094410945365,"z":6.367075541222321},{"x":-12.067486619017886,"y":-26.756237579400196,"z":6.353809487028429},{"x":-12.008512926897165,"y":-26.79141395825182,"z":6.3405156148572885},{"x":-11.949486621951948,"y":-26.826473183284207,"z":6.327193983572755},{"x":-11.890407930878686,"y":-26.861415192249158,"z":6.313844652092678},{"x":-11.831277646598823,"y":-26.89623959061087,"z":6.300467807550192},{"x":-11.772094863984684,"y":-26.93094698366869,"z":6.287063252931813},{"x":-11.712861510163515,"y":-26.965536315522137,"z":6.273631432652711},{"x":-11.65357667942214,"y":-27.000008191356947,"z":6.260172149517917},{"x":-11.594241167040353,"y":-27.034362222826832,"z":6.246685592005233},{"x":-11.534855201487487,"y":-27.06859835375938,"z":6.233171820195681},{"x":-11.475418441510127,"y":-27.102716854794668,"z":6.2196307643573245},{"x":-11.41593225441475,"y":-27.13671701697855,"z":6.206062744111479},{"x":-11.356396299507926,"y":-27.170599112983417,"z":6.192467690105722},{"x":-11.296810805222396,"y":-27.204363088553414,"z":6.178845662615673},{"x":-11.237176571987728,"y":-27.23800856788325,"z":6.165196852951043},{"x":-11.177493257341201,"y":-27.271535821858258,"z":6.151521191056414},{"x":-11.117761089672522,"y":-27.30494479765935,"z":6.137818737348773},{"x":-11.057980871064618,"y":-27.338235124154885,"z":6.124089684116317},{"x":-10.998152831565026,"y":-27.37140675272337,"z":6.110334092704856},{"x":-10.938270303232244,"y":-27.404463434747655,"z":6.09655043593839},{"x":-10.87835248377481,"y":-27.437394670634706,"z":6.082743142971852},{"x":-10.81837832831861,"y":-27.470212116482685,"z":6.068907374157871},{"x":-10.758363605607613,"y":-27.502907212411152,"z":6.055046774434322},{"x":-10.698301639192072,"y":-27.535483695490182,"z":6.041159812632366},{"x":-10.63819207966142,"y":-27.567941827940388,"z":6.027246415759648},{"x":-10.578036309840519,"y":-27.600280937755844,"z":6.013306911880887},{"x":-10.517831087343591,"y":-27.63250283434208,"z":5.999340556808859},{"x":-10.457586479221698,"y":-27.664602218804596,"z":5.985349695295908},{"x":-10.397292297034532,"y":-27.69658460659816,"z":5.9713319706741546},{"x":-10.336958044261555,"y":-27.728445039311787,"z":5.957289601125387},{"x":-10.276576413895036,"y":-27.760187464257463,"z":5.943220895594854},{"x":-10.21615053605361,"y":-27.791810308070776,"z":5.929126591077845},{"x":-10.155677732230075,"y":-27.823315044562143,"z":5.915006070569785},{"x":-10.095152400898824,"y":-27.854704633119617,"z":5.900858030587471},{"x":-10.034610311932358,"y":-27.88596066859882,"z":5.886690847635584},{"x":-9.974010339232999,"y":-27.917104508359007,"z":5.872494911920319},{"x":-9.91336785938305,"y":-27.94812828276591,"z":5.858273828824082},{"x":-9.852681935683288,"y":-27.979032552914607,"z":5.844027387470584},{"x":-9.791954552662336,"y":-28.009816392031478,"z":5.829756062699036},{"x":-9.731184772969595,"y":-28.04048036107726,"z":5.815459643430383},{"x":-9.670373413425573,"y":-28.071024131555276,"z":5.801138330779093},{"x":-9.609520706206014,"y":-28.101447672463166,"z":5.7867921885925755},{"x":-9.548626883413913,"y":-28.13175095328017,"z":5.772421280748752},{"x":-9.48769217707852,"y":-28.161933943966645,"z":5.758025671155725},{"x":-9.426716819154434,"y":-28.191996614963607,"z":5.743605423751454},{"x":-9.365701041520735,"y":-28.22193893719223,"z":5.729160602503451},{"x":-9.304645665178633,"y":-28.251760594942564,"z":5.714691411104053},{"x":-9.24355033366276,"y":-28.28146184941289,"z":5.700197774411156},{"x":-9.182415868818351,"y":-28.311042388061484,"z":5.6856798967003375},{"x":-9.121241913003045,"y":-28.340502470840146,"z":5.671137702355662},{"x":-9.0600292888946,"y":-28.36984178837605,"z":5.656571396232685},{"x":-8.998778229375409,"y":-28.399060317784723,"z":5.641981043252172},{"x":-8.937488967234117,"y":-28.428158036662417,"z":5.6273667083592125},{"x":-8.876161735164557,"y":-28.457134923085594,"z":5.6127284565228885},{"x":-8.814796172592933,"y":-28.485991233871452,"z":5.598066210943897},{"x":-8.753393697877602,"y":-28.51472639042374,"z":5.583380319962812},{"x":-8.691954544885556,"y":-28.54334037558405,"z":5.568670849398079},{"x":-8.630477758116282,"y":-28.57183372253853,"z":5.553937579948297},{"x":-8.568964758546464,"y":-28.600205860784527,"z":5.539180861577657},{"x":-8.507415184132059,"y":-28.628457047312004,"z":5.524400617080128},{"x":-8.445829862939958,"y":-28.656586991949784,"z":5.509597054925287},{"x":-8.384209028294585,"y":-28.684595679937587,"z":5.494770241031351},{"x":-8.322524853688424,"y":-28.71249575730299,"z":5.479913480126227},{"x":-8.260855776503409,"y":-28.740251911856834,"z":5.46504568067895},{"x":-8.199133981289938,"y":-28.767894864996858,"z":5.450150515268283},{"x":-8.13737342236605,"y":-28.79541838500606,"z":5.435231353193431},{"x":-8.075578514878337,"y":-28.82282058173513,"z":5.420289269237041},{"x":-8.013748892099022,"y":-28.850101707078828,"z":5.405324184293061},{"x":-7.951859593056318,"y":-28.877272778500032,"z":5.390330057637869},{"x":-7.889989426390215,"y":-28.90429937721928,"z":5.375326000745793},{"x":-7.828059449215933,"y":-28.931216165506843,"z":5.360292889391679},{"x":-7.76609327947585,"y":-28.9580128723664,"z":5.345236455742336},{"x":-7.704079109691426,"y":-28.984694635397396,"z":5.330153834385248},{"x":-7.6420490485264985,"y":-29.01124773648849,"z":5.315052844473127},{"x":-7.5800148137732775,"y":-29.037667398036547,"z":5.2999363640254575},{"x":-7.517924240706498,"y":-29.06397594055653,"z":5.284791693431914},{"x":-7.455801644239262,"y":-29.09016307338728,"z":5.269624764351896},{"x":-7.393647859594853,"y":-29.116228536779477,"z":5.254435790581062},{"x":-7.331462515013142,"y":-29.142172578876472,"z":5.2392246911563465},{"x":-7.269210161514633,"y":-29.168009963575674,"z":5.223982792693303},{"x":-7.207001096190801,"y":-29.19369512868174,"z":5.20873712197752},{"x":-7.144726093703475,"y":-29.21927338850701,"z":5.193460935714454},{"x":-7.0824204600395735,"y":-29.244730218463754,"z":5.178162891560113},{"x":-7.020083212769555,"y":-29.27006610588901,"z":5.162842757517027},{"x":-6.957703655375866,"y":-29.295285444995557,"z":5.147497909952975},{"x":-6.895328149964721,"y":-29.320369652134826,"z":5.132139770050087},{"x":-6.832906554107548,"y":-29.345339037882756,"z":5.116756008024475},{"x":-6.770456092451765,"y":-29.370186751153575,"z":5.101350872821334},{"x":-6.707978213270004,"y":-29.394912312913256,"z":5.08592473209003},{"x":-6.645471931956918,"y":-29.4195162099212,"z":5.070477353141961},{"x":-6.582911883058315,"y":-29.4440084381426,"z":5.055002468930092},{"x":-6.520373256285326,"y":-29.468359729806814,"z":5.039518695460355},{"x":-6.457789253890614,"y":-29.492596288008492,"z":5.024009516097866},{"x":-6.395174726351576,"y":-29.51671238883856,"z":5.008478613703353},{"x":-6.332533564101277,"y":-29.540706618964943,"z":4.992926962319961},{"x":-6.269866609803843,"y":-29.56457875411653,"z":4.9773547816928305},{"x":-6.207163081751447,"y":-29.58833296700339,"z":4.961759399842059},{"x":-6.144455029214694,"y":-29.61195724752408,"z":4.946148801544283},{"x":-6.0817114779193595,"y":-29.635463397507124,"z":4.930515290691509},{"x":-6.018898306522176,"y":-29.658864126823524,"z":4.914850358079074},{"x":-5.956135288281454,"y":-29.68211500934002,"z":4.899183893038431},{"x":-5.8933307181115255,"y":-29.7052502976642,"z":4.883493036064838},{"x":-5.830454695127827,"y":-29.72828090451346,"z":4.867770306367082},{"x":-5.767619226899629,"y":-29.75116595705359,"z":4.852043727368753},{"x":-5.704731795587783,"y":-29.773939362994035,"z":4.836290167565314},{"x":-5.641777808180226,"y":-29.796606284321882,"z":4.820505958446344},{"x":-5.578872570470968,"y":-29.819125394526115,"z":4.80472002888237},{"x":-5.515888279767449,"y":-29.841542593364213,"z":4.78890032478663},{"x":-5.452941593368804,"y":-29.8638164737491,"z":4.773076157324894},{"x":-5.389935375140197,"y":-29.88598157870305,"z":4.757223127158798},{"x":-5.326887689133029,"y":-29.90803147922465,"z":4.741345771203243},{"x":-5.26386358760219,"y":-29.929943605612845,"z":4.725460490102246},{"x":-5.200794777549981,"y":-29.951741870778722,"z":4.709550089614345},{"x":-5.137704328756702,"y":-29.97341832984057,"z":4.693620392308596},{"x":-5.074593088861588,"y":-29.99497279222812,"z":4.6776716229761455},{"x":-5.011461287607399,"y":-30.01640528194407,"z":4.661703850648232},{"x":-4.948309154529383,"y":-30.037715823443477,"z":4.645717144344508},{"x":-4.885136299072519,"y":-30.05890464891279,"z":4.629711415957938},{"x":-4.821944189761066,"y":-30.07997136800793,"z":4.613687048487906},{"x":-4.758713818087926,"y":-30.10092236486442,"z":4.597639227056581},{"x":-4.695501266432791,"y":-30.121739216014873,"z":4.58158220155154},{"x":-4.632251530903795,"y":-30.142440195173677,"z":4.565502018027094},{"x":-4.568977863848122,"y":-30.163020997143963,"z":4.549402048928648},{"x":-4.5056668009628735,"y":-30.1834860314829,"z":4.533278871692462},{"x":-4.44239073117932,"y":-30.203812106422284,"z":4.517150942496803},{"x":-4.379067775975277,"y":-30.224025699961114,"z":4.500997412058461},{"x":-4.3157267747712185,"y":-30.244117621391286,"z":4.48482563846222},{"x":-4.252368578125612,"y":-30.264087704238424,"z":4.468635849922527},{"x":-4.18899341402236,"y":-30.283935981756247,"z":4.452428115952014},{"x":-4.125600886171753,"y":-30.30366268120466,"z":4.436202346257694},{"x":-4.062192469854283,"y":-30.32326744845175,"z":4.419958929668824},{"x":-3.9987396567265887,"y":-30.34275912003674,"z":4.403690565978819},{"x":-3.935322009327781,"y":-30.3621134302426,"z":4.387417671369636},{"x":-3.8718691689030322,"y":-30.3813520512016,"z":4.371122214266222},{"x":-3.8083957224783673,"y":-30.40047059205837,"z":4.354807943998032},{"x":-3.7448705878809463,"y":-30.41947839602271,"z":4.338466870113082},{"x":-3.6814073021917375,"y":-30.438341717413696,"z":4.322128221227509},{"x":-3.6178896515756533,"y":-30.45709531392391,"z":4.305762102813287},{"x":-3.5543579276021533,"y":-30.475727278623424,"z":4.289378894748922},{"x":-3.4908123566422296,"y":-30.494237653034876,"z":4.272978666965534},{"x":-3.427252537217636,"y":-30.51262666006752,"z":4.256561327203754},{"x":-3.3636793221790584,"y":-30.530894158865166,"z":4.240127107082872},{"x":-3.300092308934738,"y":-30.54904037090712,"z":4.2236759138684015},{"x":-3.2364760087680975,"y":-30.567069773673076,"z":4.207203746711126},{"x":-3.172879671911976,"y":-30.58496856532133,"z":4.190723373950822},{"x":-3.109255127279544,"y":-30.602750460287673,"z":4.17422233005278},{"x":-3.0456170537946607,"y":-30.620411413569986,"z":4.157704427942358},{"x":-2.9819675632338996,"y":-30.637950944515044,"z":4.141170227012325},{"x":-2.9183062505819573,"y":-30.655369273734163,"z":4.124619633734311},{"x":-2.8546270364530786,"y":-30.67266815316927,"z":4.108051077177254},{"x":-2.7909490542061497,"y":-30.689842510734614,"z":4.091469548773683},{"x":-2.7272536174438917,"y":-30.70689751144902,"z":4.074870196339615},{"x":-2.66354788370881,"y":-30.723831329140904,"z":4.058254894735238},{"x":-2.5998282878017624,"y":-30.740645010849178,"z":4.041622724807652},{"x":-2.5361045245397227,"y":-30.757336114367114,"z":4.024976229384261},{"x":-2.4723679760457693,"y":-30.773907014509263,"z":4.008313169946628},{"x":-2.4086213903017746,"y":-30.790357096023705,"z":3.991634275502395},{"x":-2.344864989098568,"y":-30.806686408118633,"z":3.974939615480441},{"x":-2.2811008926189444,"y":-30.822894519655442,"z":3.958229757004258},{"x":-2.21732679196618,"y":-30.83898212745534,"z":3.9415041068203407},{"x":-2.1535441741740766,"y":-30.8549489626208,"z":3.924763066279728},{"x":-2.0897532607858804,"y":-30.870795079483223,"z":3.908006705287999},{"x":-2.0259276463867737,"y":-30.886527069991214,"z":3.8912280916784123},{"x":-1.9621461635487978,"y":-30.902125686690912,"z":3.874447967566754},{"x":-1.8983323238482968,"y":-30.917609823131297,"z":3.857646231018026},{"x":-1.8345098029745879,"y":-30.93297376942277,"z":3.840829119057355},{"x":-1.7706718342988959,"y":-30.948219236471502,"z":3.8239948575793803},{"x":-1.706844674064949,"y":-30.96334009081077,"z":3.807150384692405},{"x":-1.643001871019139,"y":-30.978342733275362,"z":3.7902887345174148},{"x":-1.579151898985509,"y":-30.993225254531502,"z":3.7734121537439096},{"x":-1.5152701707022578,"y":-31.007993419810592,"z":3.756514147621373},{"x":-1.4514364111652203,"y":-31.02262898992403,"z":3.7396158243032716},{"x":-1.3875694255065483,"y":-31.037150765237914,"z":3.7226957105607017},{"x":-1.3236974184177444,"y":-31.051552365665763,"z":3.7057612816891483},{"x":-1.2598199715181462,"y":-31.06583399613434,"z":3.6888124386157726},{"x":-1.1959373024339783,"y":-31.079995716698402,"z":3.671849250725687},{"x":-1.1320509035241324,"y":-31.094037308798836,"z":3.6548721262975583},{"x":-1.0681603555280061,"y":-31.107958978567687,"z":3.637880966133019},{"x":-1.0042652379340549,"y":-31.121760927922676,"z":3.6208756702208316},{"x":-0.9403268361166498,"y":-31.13545151734638,"z":3.6038459352754426},{"x":-0.8764634364474375,"y":-31.149005642622477,"z":3.5868232884665585},{"x":-0.8125571855598652,"y":-31.16244853708374,"z":3.5697763417086104},{"x":-0.7486478690566953,"y":-31.17577183216184,"z":3.552715707218524},{"x":-0.6847357029293326,"y":-31.18897559455748,"z":3.5356414546198143},{"x":-0.6208215422215899,"y":-31.20205976108774,"z":3.5185538244789605},{"x":-0.5569043238421492,"y":-31.215024660948345,"z":3.5014525445426203},{"x":-0.4929855418035206,"y":-31.227870102617427,"z":3.4843380264613373},{"x":-0.4290634915161454,"y":-31.240596538272186,"z":3.467209825592681},{"x":-0.36511341735728653,"y":-31.253208930420445,"z":3.450061312579138},{"x":-0.30121748350642275,"y":-31.265691269287473,"z":3.4329145396951826},{"x":-0.23729267467703266,"y":-31.27805996137744,"z":3.4157472509666107},{"x":-0.17336673415205783,"y":-31.290309673094033,"z":3.3985669002259464},{"x":-0.10943987519516697,"y":-31.302440474644285,"z":3.38137355668296},{"x":-0.04551295203855695,"y":-31.314452316729234,"z":3.364167462155237},{"x":0.01841446352931506,"y":-31.326345392522526,"z":3.34694851346853},{"x":0.0823787347884947,"y":-31.338126475547366,"z":3.329706917615319},{"x":0.14626863907774257,"y":-31.349775298188515,"z":3.312472676237044},{"x":0.21019497450017244,"y":-31.36131227653522,"z":3.2952159264047793},{"x":0.2741209540200322,"y":-31.37273078091969,"z":3.2779465991121883},{"x":0.3380470089950475,"y":-31.384030997184055,"z":3.260664589490347},{"x":0.4019838543256223,"y":-31.39521489591623,"z":3.2433670092037374},{"x":0.46589014774526816,"y":-31.406275406344452,"z":3.226065059620184},{"x":0.5298100222465766,"y":-31.417220317473646,"z":3.208746809052981},{"x":0.5937278437158343,"y":-31.428047023665822,"z":3.191416500756909},{"x":0.6576434020650056,"y":-31.43875560313432,"z":3.1740742038800187},{"x":0.721556487528114,"y":-31.449346134464264,"z":3.1567199875169885},{"x":0.7854675344221677,"y":-31.45981880149974,"z":3.1393537457290934},{"x":0.8493750462830092,"y":-31.47017347263579,"z":3.1219758972883493},{"x":0.913279457894513,"y":-31.480410333608468,"z":3.1045863363234627},{"x":0.9771799164966481,"y":-31.490529363051923,"z":3.087185307215595},{"x":1.0410775023424155,"y":-31.500530845402242,"z":3.069772527957177},{"x":1.1049997271118752,"y":-31.510419120156175,"z":3.0523405053372334},{"x":1.1688651612234227,"y":-31.52018177241962,"z":3.034911463878759},{"x":1.2327451471628434,"y":-31.52982991372071,"z":3.017465957242541},{"x":1.2966633621256871,"y":-31.539367065033545,"z":2.9999975137272887},{"x":1.360500899065061,"y":-31.548775690983575,"z":2.9825386500571716},{"x":1.42437109332548,"y":-31.558072712669524,"z":2.965058395380178},{"x":1.4882815140521006,"y":-31.567259118839562,"z":2.94755466618014},{"x":1.5520963791408746,"y":-31.576315630588265,"z":2.930064673626013},{"x":1.6159497681575026,"y":-31.585261514026325,"z":2.912551697652526},{"x":1.6797975752602998,"y":-31.59409058351361,"z":2.8950278337071347},{"x":1.7436395959252997,"y":-31.602802923436954,"z":2.8774931499891405},{"x":1.8074749795971226,"y":-31.611398532098242,"z":2.8599478923468205},{"x":1.8713112800541232,"y":-31.61987852148256,"z":2.842389994897625},{"x":1.9351250190954257,"y":-31.628239910184167,"z":2.824825929550166},{"x":1.9989412077210658,"y":-31.636486106706172,"z":2.807248826769323},{"x":2.062746710377777,"y":-31.644615512201696,"z":2.78966231485903},{"x":2.1265464986077136,"y":-31.65262887932357,"z":2.7720650363816466},{"x":2.1903377822342467,"y":-31.660525969890525,"z":2.7544577729040562},{"x":2.254121653285001,"y":-31.66830703474661,"z":2.7368402354178314},{"x":2.3178972627840984,"y":-31.67597208419535,"z":2.7192126705987656},{"x":2.3816637615684693,"y":-31.683521133488544,"z":2.701575325706357},{"x":2.44542224349747,"y":-31.69095442759167,"z":2.683927910573223},{"x":2.509173155940588,"y":-31.69827212883218,"z":2.6662703131824697},{"x":2.572915003157269,"y":-31.70547417741197,"z":2.648602959781464},{"x":2.6366424001371422,"y":-31.71256009425143,"z":2.630927356700503},{"x":2.7003635710450014,"y":-31.71953091415066,"z":2.6132412358903543},{"x":2.7641133286239734,"y":-31.726390448414968,"z":2.5955349358125206},{"x":2.8277896865174443,"y":-31.73312790800016,"z":2.577836800945082},{"x":2.8914676462944584,"y":-31.73975148197573,"z":2.5601260138142625},{"x":2.955150907924437,"y":-31.746261596954575,"z":2.5424015498866313},{"x":3.0188178711678852,"y":-31.752656133984082,"z":2.5246694301777928},{"x":3.082476771080055,"y":-31.758936043621222,"z":2.5069273744728617},{"x":3.14612416653324,"y":-31.765101096059986,"z":2.489176353519678},{"x":3.2097605092972534,"y":-31.77115145155641,"z":2.471416253806831},{"x":3.2733856026964867,"y":-31.77708720612182,"z":2.4536471425074557},{"x":3.3369986010866963,"y":-31.782908397264954,"z":2.435869268245069},{"x":3.4005993081956287,"y":-31.788615125093386,"z":2.418082698514512},{"x":3.4641881776275185,"y":-31.7942075465713,"z":2.4002873189214555},{"x":3.5277643645102144,"y":-31.799685703622842,"z":2.3824833783386206},{"x":3.591328973058322,"y":-31.805049805799545,"z":2.364670579813368},{"x":3.6548785600213964,"y":-31.810299682155485,"z":2.346849901006604},{"x":3.718416179536024,"y":-31.81543570444983,"z":2.329020498318739},{"x":3.78194033808996,"y":-31.820457866236463,"z":2.3111828030621733},{"x":3.8454514919963914,"y":-31.82536631951465,"z":2.2933366995276727},{"x":3.9089481478480423,"y":-31.830161066497624,"z":2.275482619923969},{"x":3.9724314128226426,"y":-31.834842308320393,"z":2.2576202655406115},{"x":4.035900444208873,"y":-31.83941009862211,"z":2.2397498858789717},{"x":4.099354399337864,"y":-31.843864495936685,"z":2.2218717309519653},{"x":4.162794386966435,"y":-31.848205695460937,"z":2.2039855009568803},{"x":4.226219565234418,"y":-31.852433755204068,"z":2.1860914456165594},{"x":4.289629742948412,"y":-31.856548779698272,"z":2.1681896314302187},{"x":4.353033838672261,"y":-31.860551440649083,"z":2.1502775506389544},{"x":4.4164043337720935,"y":-31.8644401426051,"z":2.132362992151084},{"x":4.47976836632685,"y":-31.868216691615253,"z":2.1144382996909146},{"x":4.543116637218269,"y":-31.87188062656931,"z":2.0965061136495957},{"x":4.606453513612856,"y":-31.8754323049413,"z":2.078565209110784},{"x":4.669763834952529,"y":-31.878871009298308,"z":2.060619894429213},{"x":4.733063686046431,"y":-31.882197741927882,"z":2.042665624420372},{"x":4.79634571802918,"y":-31.88541222156452,"z":2.0247044946201753},{"x":4.859611696173019,"y":-31.888514656361163,"z":2.006736016718287},{"x":4.922862084344862,"y":-31.891505180654537,"z":1.9887600709302826},{"x":4.986092136831095,"y":-31.89438369199828,"z":1.9707780189790853},{"x":5.049305574006668,"y":-31.89715048319798,"z":1.952788816109159},{"x":5.11250416371644,"y":-31.899805739620795,"z":1.9347919708275592},{"x":5.175680554969103,"y":-31.90234927424581,"z":1.916789589370843},{"x":5.238841075704871,"y":-31.904781465070215,"z":1.8987798818741706},{"x":5.301982935046962,"y":-31.907102317697692,"z":1.8807636561960628},{"x":5.365144388543481,"y":-31.909313256358097,"z":1.8627299995229452},{"x":5.428213187649177,"y":-31.911410566170176,"z":1.844710981684258},{"x":5.4912973026839875,"y":-31.91339805785589,"z":1.8266757805852225},{"x":5.554363973319235,"y":-31.915274723858907,"z":1.8086337641848038},{"x":5.617411712989969,"y":-31.917040632759765,"z":1.7905853698148924},{"x":5.6804396869422,"y":-31.91869587906052,"z":1.7725308490480887},{"x":5.743447712414112,"y":-31.920240577490983,"z":1.754470267035978},{"x":5.806436258788708,"y":-31.92167485732002,"z":1.736403501856182},{"x":5.8694051441446025,"y":-31.922998830426838,"z":1.7183306181121083},{"x":5.932352883312109,"y":-31.92421258499664,"z":1.7002520548300553},{"x":5.995280598649275,"y":-31.925316261983493,"z":1.682167502468123},{"x":6.058201798226508,"y":-31.92631017813228,"z":1.6640730877870218},{"x":6.1210745831618665,"y":-31.927193825756017,"z":1.6459808755238556},{"x":6.183960048350612,"y":-31.92796816445488,"z":1.6278732969669134},{"x":6.24678304812451,"y":-31.928632408316865,"z":1.609772003557327},{"x":6.309605984044125,"y":-31.929187385998855,"z":1.591659034623517},{"x":6.372406513075335,"y":-31.92963296520874,"z":1.5735408386375676},{"x":6.435187716268926,"y":-31.929969281658185,"z":1.5554165389537298},{"x":6.497942896184894,"y":-31.930196421975854,"z":1.5372880820566215},{"x":6.560677742379931,"y":-31.930314530657892,"z":1.5191538377423417},{"x":6.623390773602451,"y":-31.930323717033403,"z":1.5010142461665357},{"x":6.686079857003326,"y":-31.93022410136891,"z":1.4828699371268583},{"x":6.748746771768411,"y":-31.93001580128977,"z":1.4647204086003984},{"x":6.811391341641214,"y":-31.9296989327427,"z":1.4465657239871839},{"x":6.874051854855316,"y":-31.929273316516504,"z":1.4283947894259554},{"x":6.936610135846607,"y":-31.928739979892878,"z":1.4102418965945003},{"x":6.999187921122843,"y":-31.928098094235725,"z":1.3920717451079117},{"x":7.061734837283301,"y":-31.927348202736272,"z":1.3738989633784071},{"x":7.124263096415576,"y":-31.926490282337635,"z":1.3557200166595684},{"x":7.186764049791129,"y":-31.925524565309676,"z":1.3375374314228508},{"x":7.249242087152473,"y":-31.924451107263454,"z":1.319349943917433},{"x":7.311695731539657,"y":-31.92327004863935,"z":1.3011579963868973},{"x":7.374124810174272,"y":-31.9219815110842,"z":1.2829616518351843},{"x":7.436531106096507,"y":-31.92058557102246,"z":1.2647604027153156},{"x":7.498908581006302,"y":-31.91908248702131,"z":1.2465560232585933},{"x":7.561262929581326,"y":-31.91747224505703,"z":1.2283468648157654},{"x":7.623628522415577,"y":-31.915753975362346,"z":1.2101228927849603},{"x":7.6858950451879675,"y":-31.913930934137305,"z":1.1919163635425851},{"x":7.7481744260156935,"y":-31.91200005111065,"z":1.1736945738473936},{"x":7.810424784119677,"y":-31.909962652672487,"z":1.1554697794738154},{"x":7.872650511603563,"y":-31.907818718098202,"z":1.1372407078189635},{"x":7.934854045287842,"y":-31.905568267914045,"z":1.1190066562509786},{"x":7.9970228363359075,"y":-31.903211886195535,"z":1.100771316977599},{"x":8.059169096249837,"y":-31.900749239558298,"z":1.0825311222121414},{"x":8.12129070182668,"y":-31.898180514941046,"z":1.0642867060968513},{"x":8.183381622190858,"y":-31.895506084790167,"z":1.046039852902096},{"x":8.245446901770553,"y":-31.89272585628828,"z":1.0277890936281542},{"x":8.3075176370629,"y":-31.88983846604153,"z":1.0095252878655494},{"x":8.369495962403944,"y":-31.886848670708837,"z":0.9912772518439643},{"x":8.43150155253305,"y":-31.88375083912058,"z":0.9730097675958352},{"x":8.493433947514237,"y":-31.88055008681112,"z":0.9547524401365586},{"x":8.55538089482077,"y":-31.87724200288567,"z":0.9364794168990802},{"x":8.617260184100896,"y":-31.873831090374004,"z":0.9182149587443283},{"x":8.679130903165895,"y":-31.87031426050864,"z":0.8999416442658935},{"x":8.740973354049572,"y":-31.866692700598406,"z":0.8816652980783078},{"x":8.802788023815534,"y":-31.862966497962883,"z":0.8633857886555679},{"x":8.864570843844046,"y":-31.859136022169913,"z":0.845104332386409},{"x":8.926326858179925,"y":-31.855201081194274,"z":0.8268194497653252},{"x":8.988057855697125,"y":-31.851161663347835,"z":0.8085306221284811},{"x":9.049750009577213,"y":-31.847018806230995,"z":0.7902419598670316},{"x":9.111417473469569,"y":-31.842771689811467,"z":0.771949281359132},{"x":9.173055530976388,"y":-31.838420744631335,"z":0.7536539968853462},{"x":9.234662720161438,"y":-31.833966194580768,"z":0.7353565532736835},{"x":9.2962408318125,"y":-31.829408029082728,"z":0.7170564314256065},{"x":9.357788404854965,"y":-31.8247464735708,"z":0.6987540780850412},{"x":9.41930527960387,"y":-31.819981660707022,"z":0.6804495536471591},{"x":9.480791946888244,"y":-31.815113671320365,"z":0.6621427248021203},{"x":9.54227099872637,"y":-31.810140774790277,"z":0.6438268717238506},{"x":9.603673372985236,"y":-31.805068736482713,"z":0.6255225872969861},{"x":9.66506716501189,"y":-31.79989210876864,"z":0.6072095922981318},{"x":9.7264366135228,"y":-31.794612264495104,"z":0.5888925925291558},{"x":9.787761417919752,"y":-31.78923108614337,"z":0.5705776613052292},{"x":9.849061564247803,"y":-31.78374695484961,"z":0.5522588445255325},{"x":9.910332346471607,"y":-31.778160387009056,"z":0.533937558660563},{"x":9.971566463801562,"y":-31.772472173791222,"z":0.5156160001059427},{"x":10.032770905022371,"y":-31.766681791086665,"z":0.4972920913116718},{"x":10.093942916789002,"y":-31.760789613011518,"z":0.4789666687157717},{"x":10.155082993312517,"y":-31.75479571049248,"z":0.46063959697038753},{"x":10.216190330755433,"y":-31.748700280870807,"z":0.44231112971021314},{"x":10.27726542392103,"y":-31.742503393266436,"z":0.42398113122273146},{"x":10.338307469961986,"y":-31.736205247622998,"z":0.4056498551347079},{"x":10.399320856538438,"y":-31.729805499549883,"z":0.38731599549172213},{"x":10.460308671498508,"y":-31.723303913479057,"z":0.3689786339494541},{"x":10.521268164377373,"y":-31.71670086941793,"z":0.35063860674321584},{"x":10.582144067560272,"y":-31.710002590386107,"z":0.3323125657291598},{"x":10.64301988232885,"y":-31.703200048018594,"z":0.31397539240554817},{"x":10.703861735566873,"y":-31.69629706168507,"z":0.2956372931470681},{"x":10.764669476339094,"y":-31.689293768466808,"z":0.27729832629074813},{"x":10.825479237949368,"y":-31.68218603253773,"z":0.25894759786918636},{"x":10.886202100748871,"y":-31.674984411210108,"z":0.24061195725808762},{"x":10.94689429273392,"y":-31.667682479174797,"z":0.22227445318887926},{"x":11.007560195433925,"y":-31.660279797379122,"z":0.20393377135043408},{"x":11.068195770530725,"y":-31.65277694524374,"z":0.1855911418232925},{"x":11.128797630307515,"y":-31.645174446879274,"z":0.16724760058561014},{"x":11.189364331484049,"y":-31.63747259984605,"z":0.1489035969524481},{"x":11.249895726306487,"y":-31.62967154270369,"z":0.13055918849873357},{"x":11.310391667420205,"y":-31.621771414191123,"z":0.11221443270309775},{"x":11.370852654663238,"y":-31.6137722670809,"z":0.09386919064718156},{"x":11.431277894417873,"y":-31.605674324431906,"z":0.07552371576150081},{"x":11.491667240522299,"y":-31.597477725516697,"z":0.05717806523674095},{"x":11.552020547213965,"y":-31.58918260978287,"z":0.03883229616681104},{"x":11.61233831537568,"y":-31.580789026351,"z":0.02048626894032333},{"x":11.672619753514756,"y":-31.57229720334203,"z":0.0021402369147771163},{"x":11.73286536302375,"y":-31.563707188049104,"z":-0.01620593986424292},{"x":11.79307435347966,"y":-31.555019211115017,"z":-0.034552008078789026},{"x":11.853253683508456,"y":-31.546232369530934,"z":-0.052900077102255194},{"x":11.913381902519747,"y":-31.537349933738295,"z":-0.07124359246283797},{"x":11.973493082274002,"y":-31.528366974096677,"z":-0.08959293678195311},{"x":12.033541900423511,"y":-31.519290397624115,"z":-0.10793426163411526},{"x":12.09356693691587,"y":-31.51011452107027,"z":-0.12627933425837204},{"x":12.15355385213152,"y":-31.50084162319309,"z":-0.1446237631209258},{"x":12.213519913756476,"y":-31.491469112198075,"z":-0.16297282016363646},{"x":12.273415333849584,"y":-31.48200493214921,"z":-0.18131125433317458},{"x":12.333289618446507,"y":-31.472441419931243,"z":-0.19965420505801493},{"x":12.393126507780927,"y":-31.462781247761306,"z":-0.21799668330617136},{"x":12.452925217438398,"y":-31.453024660025903,"z":-0.23633843602707402},{"x":12.512685608008558,"y":-31.44317179884308,"z":-0.25467940767858044},{"x":12.572407540478999,"y":-31.43322280648831,"z":-0.27301954281681534},{"x":12.632091519862927,"y":-31.423177716496287,"z":-0.29135898391592435},{"x":12.691779232284759,"y":-31.413029519939627,"z":-0.30971053852345626},{"x":12.751343134999845,"y":-31.402800134342773,"z":-0.3280349700438559},{"x":12.810911138618643,"y":-31.392467815699508,"z":-0.3463716028877286},{"x":12.87043999434074,"y":-31.3820400752951,"z":-0.3647071237325144},{"x":12.92994434919762,"y":-31.37151442811965,"z":-0.3830460350797836},{"x":12.989416343652406,"y":-31.360892327629912,"z":-0.4013859080476798},{"x":13.048790952155715,"y":-31.350185639883378,"z":-0.41970666447925215},{"x":13.108170844974378,"y":-31.339376000101463,"z":-0.4380399665117823},{"x":13.167494212258182,"y":-31.32847470854205,"z":-0.4563667266617267},{"x":13.226786608306238,"y":-31.317477207605943,"z":-0.47469482409850816},{"x":13.286038907590807,"y":-31.30638528617973,"z":-0.49302142786374353},{"x":13.345250976242975,"y":-31.295199088502105,"z":-0.5113464837913828},{"x":13.404422680790235,"y":-31.283918758955036,"z":-0.5296699378147188},{"x":13.46355452927566,"y":-31.272544318167053,"z":-0.5479919346655077},{"x":13.52264574751738,"y":-31.261076032567615,"z":-0.5663122218943484},{"x":13.581696203226256,"y":-31.24951404696475,"z":-0.5846307457312606},{"x":13.640706405050471,"y":-31.237858379214504,"z":-0.6029476513797529},{"x":13.699675580559408,"y":-31.22610929936631,"z":-0.6212626865096365},{"x":13.75860423879454,"y":-31.214266823427337,"z":-0.6395759966360423},{"x":13.817492248447426,"y":-31.202331093572354,"z":-0.6578875285544852},{"x":13.876337559350763,"y":-31.190302646140456,"z":-0.6761966318593987},{"x":13.935142600972076,"y":-31.178181103522387,"z":-0.6945040496617223},{"x":13.993905324536014,"y":-31.165967005509202,"z":-0.7128091315891427},{"x":14.052626879792507,"y":-31.153660232136847,"z":-0.73111222302926},{"x":14.1113064984499,"y":-31.14126106183995,"z":-0.7494130719518797},{"x":14.169944690879158,"y":-31.12876950414386,"z":-0.7677118249503752},{"x":14.228540689982124,"y":-31.11618583986429,"z":-0.7860082300849981},{"x":14.287095006492176,"y":-31.1035100766736,"z":-0.804302434252258},{"x":14.345606874510331,"y":-31.090742497761674,"z":-0.8225941856052458},{"x":14.40408701108428,"y":-31.07788085517763,"z":-0.8408868245462303},{"x":14.46250339598778,"y":-31.064932337701073,"z":-0.8591703200845616},{"x":14.520888434064876,"y":-31.05188990521204,"z":-0.8774547985321945},{"x":14.579248360136903,"y":-31.038752207701393,"z":-0.8957422077381563},{"x":14.63754799552803,"y":-31.025527282947536,"z":-0.9140215122933161},{"x":14.695784686192154,"y":-31.01221594791614,"z":-0.9322918570936136},{"x":14.753997794743242,"y":-30.998809323007283,"z":-0.9505655777971775},{"x":14.812167450189538,"y":-30.9853120529778,"z":-0.9688364297623588},{"x":14.870301798175806,"y":-30.971722344985654,"z":-0.9871069609229907},{"x":14.928377179298634,"y":-30.958045867689737,"z":-1.005369721288939},{"x":14.986416370275695,"y":-30.94427739528451,"z":-1.0236318581282586},{"x":15.04441225084199,"y":-30.930418714609754,"z":-1.0418911207165538},{"x":15.102364063035372,"y":-30.9164701241146,"z":-1.0601472578699318},{"x":15.160272320098526,"y":-30.902431617545304,"z":-1.0784004187010938},{"x":15.218168635307284,"y":-30.888295562952752,"z":-1.0966605638934723},{"x":15.275976080732336,"y":-30.87408089621072,"z":-1.1149034160510194},{"x":15.333746592613517,"y":-30.85977505931692,"z":-1.1331453413205173},{"x":15.391477506282767,"y":-30.845378798117252,"z":-1.151385489136006},{"x":15.449169329959556,"y":-30.830892076717955,"z":-1.1696240103289626},{"x":15.506823838212016,"y":-30.816314533711125,"z":-1.1878614568497605},{"x":15.564390875857898,"y":-30.801659062038272,"z":-1.2060819418557367},{"x":15.621943803063505,"y":-30.786907131641154,"z":-1.2243086673350563},{"x":15.679452092755549,"y":-30.77206660462967,"z":-1.242531962135913},{"x":15.736914993858282,"y":-30.757137792138582,"z":-1.2607515757089964},{"x":15.794332388943305,"y":-30.742120843617865,"z":-1.278967458086536},{"x":15.85171111307628,"y":-30.72701407194945,"z":-1.2971817668090488},{"x":15.909032088560705,"y":-30.711822632787204,"z":-1.3153884320239955},{"x":15.966314158649967,"y":-30.69654166368735,"z":-1.33359342437694},{"x":16.023550255354884,"y":-30.68117315118215,"z":-1.351794486896049},{"x":16.080766133531093,"y":-30.66571023009591,"z":-1.369999803687764},{"x":16.137885328465227,"y":-30.65017375163273,"z":-1.3881850263889748},{"x":16.19498407399841,"y":-30.634543160682874,"z":-1.4063744048801516},{"x":16.252035755239678,"y":-30.618825796828432,"z":-1.4245594555085639},{"x":16.309042148836678,"y":-30.603021287850723,"z":-1.4427407319830539},{"x":16.366002509964833,"y":-30.587129954274264,"z":-1.4609179845578482},{"x":16.42291861284747,"y":-30.57115141174569,"z":-1.4790917675390665},{"x":16.479794745393384,"y":-30.555084550511737,"z":-1.4972634399296045},{"x":16.536605631735853,"y":-30.53893666037683,"z":-1.515424910711732},{"x":16.59337821284951,"y":-30.522700226398058,"z":-1.5335847766013635},{"x":16.650106082503743,"y":-30.506377170169827,"z":-1.5517409789870131},{"x":16.70678724202129,"y":-30.48996817759473,"z":-1.5698928663528988},{"x":16.763419696389498,"y":-30.473473946939354,"z":-1.5880397869202334},{"x":16.82001212163029,"y":-30.456892053449046,"z":-1.6061845096511211},{"x":16.8765449540583,"y":-30.440228360708755,"z":-1.6243207483705593},{"x":16.933036907797078,"y":-30.423477484029203,"z":-1.6424544922566904},{"x":16.989481597754367,"y":-30.40664141612583,"z":-1.660583681202055},{"x":17.045878287747296,"y":-30.389720493979624,"z":-1.678708066199712},{"x":17.102228747430072,"y":-30.37271430063445,"z":-1.696828203722987},{"x":17.158529737052714,"y":-30.355623931332936,"z":-1.7149430394785818},{"x":17.21478427804338,"y":-30.338448586181688,"z":-1.7330535329875638},{"x":17.27098913427356,"y":-30.321189370741717,"z":-1.7511586299000539},{"x":17.327147325054913,"y":-30.303845475138594,"z":-1.7692592901929665},{"x":17.38325811644987,"y":-30.286417236869838,"z":-1.7873552654536364},{"x":17.439318903025274,"y":-30.26890558437301,"z":-1.8054457027119102},{"x":17.4953320768091,"y":-30.25130988944329,"z":-1.8235313610654207},{"x":17.55129690673448,"y":-30.233630495895582,"z":-1.841611992255902},{"x":17.60721391019811,"y":-30.21586735440516,"z":-1.859687751206986},{"x":17.663081111155353,"y":-30.198021210241265,"z":-1.8777579865970995},{"x":17.718900274658118,"y":-30.180091616977915,"z":-1.895823256721887},{"x":17.77467129486934,"y":-30.162078721132733,"z":-1.9138835152806084},{"x":17.830391577318263,"y":-30.14398347991804,"z":-1.931937909395062},{"x":17.886064130277298,"y":-30.12580503377396,"z":-1.9499874011657479},{"x":17.941689469741203,"y":-30.107543321779445,"z":-1.9680321463517156},{"x":17.997261897513376,"y":-30.089200335713265,"z":-1.9860702836286326},{"x":18.05278628425064,"y":-30.07077459020521,"z":-2.0041033807503785},{"x":18.108263146117583,"y":-30.05226602156159,"z":-2.022131593821856},{"x":18.163688035176445,"y":-30.03367623148002,"z":-2.040153464892686},{"x":18.219065813925003,"y":-30.015003704773697,"z":-2.0581705625472555},{"x":18.274391418820745,"y":-29.99625026493294,"z":-2.076181227040696},{"x":18.329668469180227,"y":-29.97741480424435,"z":-2.0941866237696867},{"x":18.384896862265993,"y":-29.958497467053338,"z":-2.1121867075626106},{"x":18.44007463922497,"y":-29.93949903872434,"z":-2.1301808277804173},{"x":18.49520231940869,"y":-29.92041945806198,"z":-2.1481691411825974},{"x":18.55027794853372,"y":-29.901259522495167,"z":-2.1661509971609525},{"x":18.605305137293726,"y":-29.88201809178416,"z":-2.1841275620984737},{"x":18.660281931180982,"y":-29.862695960505736,"z":-2.202098185627301},{"x":18.71520823156725,"y":-29.843293279375196,"z":-2.2200628230829036},{"x":18.77008394019317,"y":-29.823810199169422,"z":-2.2380214299008685},{"x":18.82490957572421,"y":-29.804246650139515,"z":-2.2559741635575876},{"x":18.879684423423665,"y":-29.784603001793833,"z":-2.273920777769324},{"x":18.934410849717548,"y":-29.764878514848444,"z":-2.291862036114543},{"x":18.989085676011843,"y":-29.745074446223466,"z":-2.3097968846896837},{"x":19.043703885023515,"y":-29.72519274621105,"z":-2.3277236635624754},{"x":19.09827584295289,"y":-29.70522975875524,"z":-2.3456457623280538},{"x":19.152795915032687,"y":-29.685187649919243,"z":-2.363561319360351},{"x":19.207279976728316,"y":-29.665060659398684,"z":-2.381475542955448},{"x":19.26168248028649,"y":-29.644865771081555,"z":-2.3993734412117917},{"x":19.316049396773977,"y":-29.62458607232708,"z":-2.4172701208306817},{"x":19.370384284643997,"y":-29.60422025555424,"z":-2.435166750990636},{"x":19.424628795480928,"y":-29.583790361288592,"z":-2.4530440961581643},{"x":19.47884353970353,"y":-29.563273720513376,"z":-2.4709221133767145},{"x":19.53300083934667,"y":-29.54268088016139,"z":-2.4887916683068116},{"x":19.587112235622442,"y":-29.52200756594113,"z":-2.506656556565469},{"x":19.641166007667763,"y":-29.501258371036197,"z":-2.5245128964310615},{"x":19.695171850863375,"y":-29.480429693017268,"z":-2.542363877727571},{"x":19.749139438581423,"y":-29.459517867190943,"z":-2.5602126905753564},{"x":19.8030393548884,"y":-29.438534412986343,"z":-2.5780495938730046},{"x":19.85687397550269,"y":-29.417478598366174,"z":-2.5958753531116785},{"x":19.91067005964443,"y":-29.39634006915019,"z":-2.6136988162417825},{"x":19.964417133494596,"y":-29.375123009603556,"z":-2.6315165060015238},{"x":20.01810596571043,"y":-29.353831185788685,"z":-2.649325349261134},{"x":20.071764474045658,"y":-29.33245359476632,"z":-2.667134598492396},{"x":20.125332917592505,"y":-29.311014196634765,"z":-2.684924409990562},{"x":20.178888479709553,"y":-29.28948220539797,"z":-2.7027204030141574},{"x":20.23234715697539,"y":-29.267891525090622,"z":-2.7204946519628606},{"x":20.28577573136946,"y":-29.24621535419853,"z":-2.738269341172974},{"x":20.339158902910032,"y":-29.224459932361775,"z":-2.7560393774975838},{"x":20.392474130719222,"y":-29.20263458180271,"z":-2.7737972435355127},{"x":20.44574681032148,"y":-29.180729031995615,"z":-2.7915513838395505},{"x":20.49896108623588,"y":-29.1587499034547,"z":-2.809296503832021},{"x":20.552124145341,"y":-29.136694350850465,"z":-2.8270349867472064},{"x":20.60523529226894,"y":-29.114562767792112,"z":-2.8447665893254235},{"x":20.6582914150105,"y":-29.092356566339262,"z":-2.8624902603230824},{"x":20.711294847541843,"y":-29.070074886334485,"z":-2.880206766866619},{"x":20.764249729807627,"y":-29.047716085710018,"z":-2.8979174821204645},{"x":20.817156570616692,"y":-29.02528003477147,"z":-2.915622567124706},{"x":20.869988737528605,"y":-29.002778185738887,"z":-2.9333130930906015},{"x":20.92277330830264,"y":-28.980199159895218,"z":-2.95099810973122},{"x":20.97551078935863,"y":-28.957542819114394,"z":-2.968677778297875},{"x":21.028193860239032,"y":-28.934812405599356,"z":-2.986349634434637},{"x":21.080818227066526,"y":-28.912009900894287,"z":-3.0040122241097156},{"x":21.133391631159242,"y":-28.88913206896308,"z":-3.0216681327338657},{"x":21.185922995848472,"y":-28.8661750982102,"z":-3.039320349198123},{"x":21.238379191306816,"y":-28.84315360734704,"z":-3.056957726540557},{"x":21.290788377780807,"y":-28.820055388529205,"z":-3.074589716298432},{"x":21.343146261581918,"y":-28.796882419677804,"z":-3.092214864882297},{"x":21.3954479609396,"y":-28.773636972143642,"z":-3.109831517203991},{"x":21.447700584403755,"y":-28.75031599000794,"z":-3.1274420563744796},{"x":21.49989207063643,"y":-28.726924974254878,"z":-3.145042405056367},{"x":21.552064816054237,"y":-28.703444953489676,"z":-3.1626468562760395},{"x":21.60411526835989,"y":-28.679922738821432,"z":-3.1802204488980075},{"x":21.656145619244374,"y":-28.656312349593023,"z":-3.197797661627944},{"x":21.70811930920886,"y":-28.632630399482714,"z":-3.21536614201617},{"x":21.76004103445246,"y":-28.608874859116582,"z":-3.232927465564713},{"x":21.811906537246568,"y":-28.585047785791126,"z":-3.250480180592589},{"x":21.86371574129411,"y":-28.561149335394898,"z":-3.2680242483418738},{"x":21.915475118910315,"y":-28.537176624459757,"z":-3.2855618494414105},{"x":21.967172088460405,"y":-28.513135600133175,"z":-3.3030887083197733},{"x":22.01881728759901,"y":-28.48902143924987,"z":-3.3206084179711373},{"x":22.070408849469292,"y":-28.464835112710055,"z":-3.3381203345148345},{"x":22.121942537707042,"y":-28.440578722727253,"z":-3.3556230076435627},{"x":22.173427179541886,"y":-28.416248216504066,"z":-3.3731194242595093},{"x":22.22484549235131,"y":-28.39185188846432,"z":-3.3906036978799694},{"x":22.27621934278191,"y":-28.367379475141245,"z":-3.408083251578821},{"x":22.3275557361431,"y":-28.34282766941485,"z":-3.4255604654830667},{"x":22.378784747645582,"y":-28.318230125500815,"z":-3.4430115129523893},{"x":22.430019921656868,"y":-28.29353240333673,"z":-3.4604750615860027},{"x":22.481132260847996,"y":-28.268796820504726,"z":-3.4779071311292493},{"x":22.532222785675206,"y":-28.243974690392893,"z":-3.495342151040773},{"x":22.583266571615187,"y":-28.219078113726496,"z":-3.512771617156821},{"x":22.634236406361474,"y":-28.194120503009884,"z":-3.5301862232163526},{"x":22.685162888391215,"y":-28.169087002064796,"z":-3.547596409380078},{"x":22.73602472408394,"y":-28.143988180392135,"z":-3.5649948855585443},{"x":22.786835977077526,"y":-28.11881721873028,"z":-3.582386449287605},{"x":22.83758950829299,"y":-28.093577755322816,"z":-3.599768646299857},{"x":22.888287598058817,"y":-28.068268770876507,"z":-3.617142245232092},{"x":22.938928998267347,"y":-28.0428910000153,"z":-3.6345068064577934},{"x":22.98951481082292,"y":-28.017444002009878,"z":-3.651862695850239},{"x":23.0400449622611,"y":-27.991927922004486,"z":-3.669209876620823},{"x":23.090516450896704,"y":-27.966344392595236,"z":-3.6865473058408087},{"x":23.140932722042233,"y":-27.940691782215872,"z":-3.703876154629823},{"x":23.191291947385512,"y":-27.914971131230974,"z":-3.7211957828240685},{"x":23.24159581060354,"y":-27.88918168964546,"z":-3.7385067576650157},{"x":23.29187285348462,"y":-27.863308845255826,"z":-3.7558188983119964},{"x":23.342066335563402,"y":-27.837381903595535,"z":-3.7731126569840203},{"x":23.3921663342522,"y":-27.811406287181374,"z":-3.7903845833728522},{"x":23.442238704210425,"y":-27.78534798211063,"z":-3.807657365301568},{"x":23.492265843703173,"y":-27.759216142786794,"z":-3.824924931969364},{"x":23.542219731581486,"y":-27.733025533290398,"z":-3.842177598543678},{"x":23.592125915603155,"y":-27.70676288993267,"z":-3.8594241738740243},{"x":23.641977335481165,"y":-27.68043200662183,"z":-3.87666220982823},{"x":23.691768693819746,"y":-27.654035795471685,"z":-3.8938898625394622},{"x":23.74150166973647,"y":-27.627573490246917,"z":-3.9111076996681704},{"x":23.79117735778766,"y":-27.601044624053852,"z":-3.9283160877619605},{"x":23.8407962701687,"y":-27.57444903384262,"z":-3.9455151924102827},{"x":23.89035776025438,"y":-27.547787176797225,"z":-3.9627047776508513},{"x":23.939862918216704,"y":-27.521058575288865,"z":-3.979885209911749},{"x":23.989310519840487,"y":-27.494263999305495,"z":-3.997056052693882},{"x":24.038699922158003,"y":-27.46740391138969,"z":-4.0142170705195905},{"x":24.088030484334872,"y":-27.44047877763781,"z":-4.031368028148071},{"x":24.137300991260926,"y":-27.413489384042887,"z":-4.048508490001425},{"x":24.18651656741799,"y":-27.386433034024257,"z":-4.065640226852121},{"x":24.23568117020981,"y":-27.35930763533066,"z":-4.082764607234098},{"x":24.284776317483715,"y":-27.332123512432712,"z":-4.099875180493368},{"x":24.333827255144875,"y":-27.30486679090834,"z":-4.116980733514412},{"x":24.38284020227158,"y":-27.277534026510533,"z":-4.1340834336792955},{"x":24.43175022214208,"y":-27.250161622324708,"z":-4.1511606030290125},{"x":24.48060207047236,"y":-27.22272477424657,"z":-4.16822784109885},{"x":24.52941687675423,"y":-27.19521166351782,"z":-4.185292524151538},{"x":24.57816991914387,"y":-27.16763628531205,"z":-4.20234600395033},{"x":24.62687200884694,"y":-27.139992624970432,"z":-4.219392051175317},{"x":24.675499640554698,"y":-27.112294164408286,"z":-4.236422424389696},{"x":24.72407848239235,"y":-27.084526413256377,"z":-4.253446098508809},{"x":24.772606168027647,"y":-27.05669078595055,"z":-4.270462237722738},{"x":24.821079768882036,"y":-27.028789039669697,"z":-4.2874698069195745},{"x":24.869477003532367,"y":-27.000834153807688,"z":-4.304460972439919},{"x":24.917811512161226,"y":-26.972818427182137,"z":-4.321440503697478},{"x":24.96610371265372,"y":-26.944730099373995,"z":-4.338415564880099},{"x":25.01432964577335,"y":-26.916583193246357,"z":-4.355377725373557},{"x":25.062501190528177,"y":-26.888370896884478,"z":-4.372331150023117},{"x":25.110609202995647,"y":-26.860098679573152,"z":-4.389272608746772},{"x":25.158663269215737,"y":-26.831761018929072,"z":-4.406205465173422},{"x":25.20665652433573,"y":-26.803362066848084,"z":-4.423127289397997},{"x":25.254596268900695,"y":-26.774897604477665,"z":-4.440040644496795},{"x":25.30246886618012,"y":-26.746375850120184,"z":-4.456940706708383},{"x":25.350287267992343,"y":-26.717789208760237,"z":-4.473832034977098},{"x":25.398055354325532,"y":-26.68913543129664,"z":-4.490715992226742},{"x":25.445748240018816,"y":-26.66042958127948,"z":-4.507583768671014},{"x":25.493387877404214,"y":-26.63165858758219,"z":-4.524443112576721},{"x":25.54097025515199,"y":-26.602824961057607,"z":-4.54129259500625},{"x":25.58852286504312,"y":-26.57391205616474,"z":-4.5581419489607224},{"x":25.635965234007855,"y":-26.54496898539109,"z":-4.574962642740411},{"x":25.683363114748378,"y":-26.51595585371906,"z":-4.5917779639267815},{"x":25.73070912223123,"y":-26.486877225390767,"z":-4.608585288033349},{"x":25.777996457391936,"y":-26.45773736317481,"z":-4.6253821923218945},{"x":25.82522394359599,"y":-26.428537103022006,"z":-4.64216824699901},{"x":25.872392086559465,"y":-26.399276244800507,"z":-4.658943619748231},{"x":25.919501390337054,"y":-26.369954584956563,"z":-4.675708478138646},{"x":25.966551240541364,"y":-26.34057261516435,"z":-4.692462591843204},{"x":26.013543256622935,"y":-26.31112942980369,"z":-4.709206526177747},{"x":26.06047459323123,"y":-26.281626921183452,"z":-4.725939255646527},{"x":26.107343529035674,"y":-26.25206629478779,"z":-4.742660153364297},{"x":26.154156138581403,"y":-26.22244382838048,"z":-4.759371374650308},{"x":26.20091958658472,"y":-26.19275505551437,"z":-4.776075469783399},{"x":26.247617685238993,"y":-26.163010350149378,"z":-4.792766646458069},{"x":26.29423375015686,"y":-26.13322053904785,"z":-4.809438920285202},{"x":26.340807151597307,"y":-26.10336058712621,"z":-4.82610635776237},{"x":26.3873217281521,"y":-26.073440911194638,"z":-4.842763169635251},{"x":26.4337746583432,"y":-26.04346343959593,"z":-4.8594083334580285},{"x":26.480169212808818,"y":-26.013426173054,"z":-4.876043009169597},{"x":26.52651362176042,"y":-25.983323857518617,"z":-4.892670139513468},{"x":26.57277855804282,"y":-25.95317568547595,"z":-4.909279188080688},{"x":26.618993798231127,"y":-25.92296239085821,"z":-4.925880829131865},{"x":26.66514769541446,"y":-25.892691670812884,"z":-4.94247087022526},{"x":26.71124240430618,"y":-25.86236222388252,"z":-4.9590500738545895},{"x":26.75727677275662,"y":-25.83197491670296,"z":-4.975618014025972},{"x":26.80325130096059,"y":-25.801529529330185,"z":-4.992174858945969},{"x":26.849184049204275,"y":-25.7710141513163,"z":-5.0087271069148995},{"x":26.89502118374484,"y":-25.74046471568585,"z":-5.025255341824218},{"x":26.940815341876572,"y":-25.709846305315253,"z":-5.041778524996559},{"x":26.98655000833299,"y":-25.6791700163029,"z":-5.058290692144854},{"x":27.032244815216846,"y":-25.64842272121133,"z":-5.074798926429738},{"x":27.077847218235423,"y":-25.617639927651446,"z":-5.091284230235589},{"x":27.12341183141403,"y":-25.58678490631144,"z":-5.107766330549334},{"x":27.168900379286182,"y":-25.55588366696918,"z":-5.124231373243695},{"x":27.2143166717334,"y":-25.524933819996527,"z":-5.140680715999953},{"x":27.259696065024,"y":-25.493911340675506,"z":-5.157127156157392},{"x":27.305004739639948,"y":-25.462839418331264,"z":-5.1735584302497415},{"x":27.35025191092961,"y":-25.431711878814653,"z":-5.189977864417468},{"x":27.395448386698124,"y":-25.400521367256932,"z":-5.206389371750878},{"x":27.440577288413305,"y":-25.36927963354462,"z":-5.2227868129375965},{"x":27.48564346398481,"y":-25.337983460682743,"z":-5.239171934432975},{"x":27.53065282469092,"y":-25.30662884736064,"z":-5.255546874190043},{"x":27.575601530434977,"y":-25.275218566194088,"z":-5.271910224794808},{"x":27.620490075701976,"y":-25.243752379488214,"z":-5.288262154701696},{"x":27.66532650487006,"y":-25.212224727282656,"z":-5.3046055856315615},{"x":27.710084342534117,"y":-25.180654368243697,"z":-5.320930852468098},{"x":27.754798050864785,"y":-25.149017104891204,"z":-5.337250512414062},{"x":27.799435805059243,"y":-25.117335562001056,"z":-5.353552939383062},{"x":27.844020171614584,"y":-25.085593856121537,"z":-5.369846360188213},{"x":27.888550010868112,"y":-25.053792862630914,"z":-5.386130351512518},{"x":27.933013463482734,"y":-25.021941158395656,"z":-5.402400565347395},{"x":27.977408359658654,"y":-24.99004045079602,"z":-5.418656191388585},{"x":28.021758760099207,"y":-24.958073528735778,"z":-5.4349060306993175},{"x":28.06602928884006,"y":-24.926066010800213,"z":-5.451137109697499},{"x":28.110263752721423,"y":-24.893986310272883,"z":-5.467365479144383},{"x":28.154418818786525,"y":-24.86186594385143,"z":-5.483575232826416},{"x":28.198503560951593,"y":-24.82969851152065,"z":-5.499769680140241},{"x":28.242560559942675,"y":-24.797452968406393,"z":-5.515964459217003},{"x":28.286516803190548,"y":-24.765182889010546,"z":-5.532132718930073},{"x":28.33042975565583,"y":-24.73284626351093,"z":-5.548295575875799},{"x":28.374281804797082,"y":-24.700456111132528,"z":-5.56444654261999},{"x":28.41808086241032,"y":-24.668006667896083,"z":-5.580588524361902},{"x":28.461822094783134,"y":-24.635501585179323,"z":-5.59671973226162},{"x":28.505498042316347,"y":-24.602946518070492,"z":-5.612837403553819},{"x":28.54908013192858,"y":-24.570362999660833,"z":-5.628930969525144},{"x":28.592639185118742,"y":-24.537698165086383,"z":-5.6450265715858325},{"x":28.63611226864559,"y":-24.504999275885613,"z":-5.661100949520097},{"x":28.679557385415276,"y":-24.472222778557438,"z":-5.6771755406853135},{"x":28.722899641090688,"y":-24.439425318829834,"z":-5.6932226210558765},{"x":28.76620012598534,"y":-24.406560847440474,"z":-5.709264788055729},{"x":28.80945768856584,"y":-24.3736302168945,"z":-5.725301617381655},{"x":28.85261870714919,"y":-24.340674417927477,"z":-5.7413132131375715},{"x":28.895735673408197,"y":-24.307653535219796,"z":-5.757319029284967},{"x":28.93880430451866,"y":-24.274570852724935,"z":-5.773317475641454},{"x":28.981787904800417,"y":-24.241454705332117,"z":-5.789294906275183},{"x":29.02474712353967,"y":-24.208258422810616,"z":-5.805273857477977},{"x":29.06759359256202,"y":-24.17505045556012,"z":-5.821221444881551},{"x":29.110398349069186,"y":-24.141775957377043,"z":-5.837164084271585},{"x":29.15316389605383,"y":-24.108432944334805,"z":-5.853102711901193},{"x":29.195832373157817,"y":-24.075066687386858,"z":-5.869015747880871},{"x":29.238467783121425,"y":-24.041627263846934,"z":-5.884927046482234},{"x":29.281019638780272,"y":-24.008154361013524,"z":-5.900817757937346},{"x":29.32352116443503,"y":-23.97462198566378,"z":-5.916700273516419},{"x":29.365960890294392,"y":-23.941039257132118,"z":-5.932570299850725},{"x":29.408349647142277,"y":-23.90739767490962,"z":-5.948431879249814},{"x":29.450674958391765,"y":-23.873707218482235,"z":-5.964280335097776},{"x":29.492933695906483,"y":-23.839970509171685,"z":-5.980114482105733},{"x":29.535103146855498,"y":-23.80620590371447,"z":-5.995925786501369},{"x":29.577244158695738,"y":-23.772364764259855,"z":-6.01173705241178},{"x":29.619301522222464,"y":-23.738491498763246,"z":-6.027527559138287},{"x":29.661309201943705,"y":-23.704558891318037,"z":-6.043310042873173},{"x":29.70325377255667,"y":-23.67057785714245,"z":-6.059079452467022},{"x":29.745161874510913,"y":-23.63652683322511,"z":-6.074845800795194},{"x":29.78695858898653,"y":-23.602466893140356,"z":-6.090580883020759},{"x":29.82872029889134,"y":-23.568335974415817,"z":-6.106313433260967},{"x":29.870420298897688,"y":-23.534155916181568,"z":-6.122033390317146},{"x":29.912054980439706,"y":-23.499929795796184,"z":-6.137739381143163},{"x":29.95362483153749,"y":-23.46565734233779,"z":-6.153431575879238},{"x":29.995150206527768,"y":-23.431321827793248,"z":-6.169117651820573},{"x":30.03658725035867,"y":-23.39695965777673,"z":-6.184781028675498},{"x":30.077975666365727,"y":-23.36253805861587,"z":-6.200436697238835},{"x":30.119299129674403,"y":-23.3280706787452,"z":-6.216078475222537},{"x":30.160562689176174,"y":-23.29355341701605,"z":-6.231708261812859},{"x":30.201768331512955,"y":-23.258984696221123,"z":-6.247326800391745},{"x":30.242902855398892,"y":-23.22437571807521,"z":-6.262929073956467},{"x":30.28399253992012,"y":-23.189704447448605,"z":-6.27852504136702},{"x":30.325014577991656,"y":-23.15499019572941,"z":-6.294106039451677},{"x":30.365947276339,"y":-23.120251550104133,"z":-6.3096638046956866},{"x":30.406848615183737,"y":-23.085439392895125,"z":-6.325220363197828},{"x":30.44766966170193,"y":-23.050595437929662,"z":-6.340757097977911},{"x":30.48843255625766,"y":-23.015700943980406,"z":-6.356282418339258},{"x":30.529136250518523,"y":-22.98075689020352,"z":-6.371795916280367},{"x":30.569786217613277,"y":-22.94575864239721,"z":-6.3872996707308065},{"x":30.610357864006485,"y":-22.91072751286485,"z":-6.402784287704597},{"x":30.650874220797224,"y":-22.875643754767225,"z":-6.418258541743428},{"x":30.691329239657833,"y":-22.84051268423569,"z":-6.433720114564934},{"x":30.731727876849654,"y":-22.80533007875832,"z":-6.449170891546052},{"x":30.77206061401074,"y":-22.770104327535194,"z":-6.464607221896217},{"x":30.81231947125902,"y":-22.73484256506144,"z":-6.480026034077265},{"x":30.852524843296035,"y":-22.69952704373399,"z":-6.495435126143635},{"x":30.892669718297974,"y":-22.664163990592357,"z":-6.51083180366022},{"x":30.932751581406734,"y":-22.62875572410538,"z":-6.526215091134582},{"x":30.97276991128758,"y":-22.593302819106484,"z":-6.5415847762601045},{"x":31.012724189248917,"y":-22.55780585324194,"z":-6.556940647193828},{"x":31.052616369967147,"y":-22.522263202246535,"z":-6.572283443106331},{"x":31.092447411706114,"y":-22.486674113618708,"z":-6.587613521682086},{"x":31.13222714117407,"y":-22.451029866305724,"z":-6.602934658391672},{"x":31.171923980378683,"y":-22.415358901661175,"z":-6.618234676234702},{"x":31.211565514519794,"y":-22.379636587297377,"z":-6.633524189746},{"x":31.251147270230792,"y":-22.343867024480943,"z":-6.648801466185835},{"x":31.29066872032551,"y":-22.308050778301645,"z":-6.6640662925976},{"x":31.330125420779876,"y":-22.27219198418876,"z":-6.679316941074201},{"x":31.369531544068458,"y":-22.236277830407946,"z":-6.694558881776833},{"x":31.408845966893676,"y":-22.200345974384227,"z":-6.709776190664811},{"x":31.448121976512372,"y":-22.16434783475747,"z":-6.72498947898673},{"x":31.48732435657151,"y":-22.128315749379816,"z":-6.740185100448889},{"x":31.52646334777138,"y":-22.092240458157878,"z":-6.755367007942073},{"x":31.565544277109964,"y":-22.05611714346527,"z":-6.770537257750813},{"x":31.60456224560634,"y":-22.019950425205547,"z":-6.78569393853655},{"x":31.643522565496603,"y":-21.98373546809679,"z":-6.8008391042027405},{"x":31.682416957315265,"y":-21.947480069915507,"z":-6.815969525592954},{"x":31.721259440734055,"y":-21.91117123878325,"z":-6.831090647941996},{"x":31.76000839161348,"y":-21.874848075047964,"z":-6.846186247964814},{"x":31.798713131465654,"y":-21.83846449585199,"z":-6.86127552248426},{"x":31.83737501225995,"y":-21.802019186248856,"z":-6.87635900324094},{"x":31.875934721685162,"y":-21.76556824996192,"z":-6.891413531393401},{"x":31.914451524249497,"y":-21.729055842535075,"z":-6.906462224203313},{"x":31.95290803451468,"y":-21.692498465759265,"z":-6.921498287337246},{"x":31.991297026549947,"y":-21.655903106425995,"z":-6.936518883145679},{"x":32.02962663778088,"y":-21.619262119570603,"z":-6.951527183335636},{"x":32.067892049167575,"y":-21.582580212307217,"z":-6.966521290362029},{"x":32.106095154486255,"y":-21.545855680476386,"z":-6.981501934327565},{"x":32.144237837855634,"y":-21.509086808847186,"z":-6.9964698437259445},{"x":32.18231339730534,"y":-21.472280174286436,"z":-7.011422376323375},{"x":32.220328965367734,"y":-21.435428994855698,"z":-7.02636232082242},{"x":32.25828070739702,"y":-21.398537088497942,"z":-7.041288159550179},{"x":32.296170029491634,"y":-21.361603198281024,"z":-7.056200433697994},{"x":32.33401444586206,"y":-21.32461028248124,"z":-7.071106032597982},{"x":32.371780729461896,"y":-21.287590921136374,"z":-7.08599185946919},{"x":32.40947601037354,"y":-21.250538327702934,"z":-7.100860702798257},{"x":32.447100772034545,"y":-21.21345219941642,"z":-7.115712734807669},{"x":32.48467529799257,"y":-21.1763126280241,"z":-7.130555952558882},{"x":32.52219198382726,"y":-21.139127165773694,"z":-7.14538734842599},{"x":32.55965784249132,"y":-21.101888897745795,"z":-7.160209690749178},{"x":32.597044629250234,"y":-21.06462602501287,"z":-7.175011792406352},{"x":32.634349574887366,"y":-21.027341561157108,"z":-7.189792529963613},{"x":32.671609735071385,"y":-20.98999857754324,"z":-7.204566572882803},{"x":32.70880771181178,"y":-20.952614542197203,"z":-7.219327019827397},{"x":32.74594535099947,"y":-20.91518769355292,"z":-7.234074593190742},{"x":32.78301842472694,"y":-20.877722396607297,"z":-7.24880760301943},{"x":32.82002598879582,"y":-20.840219730951933,"z":-7.263525660689201},{"x":32.85697966448969,"y":-20.802667998762715,"z":-7.278233379237122},{"x":32.89386917577192,"y":-20.765077718189236,"z":-7.292926660943462},{"x":32.93067734362845,"y":-20.727466587159007,"z":-7.307598643216869},{"x":32.96744592113337,"y":-20.689792023105397,"z":-7.322265959167763},{"x":33.00413546831786,"y":-20.652094519417826,"z":-7.336912868267375},{"x":33.04076867211391,"y":-20.614350910806472,"z":-7.351548411229693},{"x":33.077340873425555,"y":-20.576566069152186,"z":-7.366170719147661},{"x":33.11384237057438,"y":-20.538750151265596,"z":-7.380775899097606},{"x":33.15028468070661,"y":-20.50089134828822,"z":-7.395368545872884},{"x":33.18666317591947,"y":-20.462994563518578,"z":-7.4099467962282475},{"x":33.22298151304924,"y":-20.425056086027745,"z":-7.42451210494061},{"x":33.25923508121148,"y":-20.387080836034077,"z":-7.439062611877309},{"x":33.29544171543769,"y":-20.349050174886838,"z":-7.453605470017111},{"x":33.331555640195376,"y":-20.31101235689975,"z":-7.4681222759163965},{"x":33.36763856030137,"y":-20.272902479565204,"z":-7.482637821788544},{"x":33.403628358888106,"y":-20.23478625668463,"z":-7.49712710942158},{"x":33.439567460501905,"y":-20.196618936899323,"z":-7.511607198181297},{"x":33.47544171233103,"y":-20.158415614158702,"z":-7.526072379417817},{"x":33.51125564318222,"y":-20.1201715688673,"z":-7.540524468044829},{"x":33.54701194409103,"y":-20.081883999002873,"z":-7.55496454223402},{"x":33.582715100427585,"y":-20.043548141107483,"z":-7.569394409027162},{"x":33.61831942627217,"y":-20.005213278301934,"z":-7.583795580836967},{"x":33.65388596040279,"y":-19.96681383698688,"z":-7.598192729014131},{"x":33.68938304653686,"y":-19.92838402320149,"z":-7.6125730371803035},{"x":33.72483498757521,"y":-19.889897579205634,"z":-7.626946344325626},{"x":33.760190036506096,"y":-19.851410867285914,"z":-7.641291652278962},{"x":33.79550304495248,"y":-19.81286433497037,"z":-7.655631198534294},{"x":33.83075196161345,"y":-19.774282073873874,"z":-7.669956027124952},{"x":33.86593275162024,"y":-19.735668636226674,"z":-7.684264483905446},{"x":33.90105301463466,"y":-19.6970157990518,"z":-7.698559646868437},{"x":33.93611138785568,"y":-19.658325153455557,"z":-7.712840951581584},{"x":33.971107407037145,"y":-19.619597311095507,"z":-7.72710819831317},{"x":34.00604327843857,"y":-19.580829921395612,"z":-7.741362276711499},{"x":34.04090832056461,"y":-19.542034968723076,"z":-7.755598814913473},{"x":34.0757140802844,"y":-19.50319972906943,"z":-7.769822514216133},{"x":34.110456543798854,"y":-19.464328773029006,"z":-7.784031724604072},{"x":34.14513702505188,"y":-19.425420734221415,"z":-7.798226972321922},{"x":34.179758595695326,"y":-19.386472249743694,"z":-7.8124095056434735},{"x":34.21430844453123,"y":-19.347497862336834,"z":-7.826574062964812},{"x":34.24879935839368,"y":-19.308483274611234,"z":-7.8407258725806575},{"x":34.28323394258115,"y":-19.26942559649989,"z":-7.8548659972818475},{"x":34.31760732866024,"y":-19.230330418374287,"z":-7.868992430742479},{"x":34.351894964966,"y":-19.191225873135622,"z":-7.883095061391624},{"x":34.38613761938325,"y":-19.15206558910231,"z":-7.897190642735291},{"x":34.42031030461921,"y":-19.11287820114139,"z":-7.911268883490934},{"x":34.45444094887608,"y":-19.073631719821055,"z":-7.925341284497574},{"x":34.488473276941086,"y":-19.034391038794997,"z":-7.939384625046055},{"x":34.52246047727431,"y":-18.99509501159148,"z":-7.953420832072686},{"x":34.556388566151774,"y":-18.955759812393463,"z":-7.967444130272145},{"x":34.59026314885101,"y":-18.916378985225606,"z":-7.981456831701679},{"x":34.6240439237403,"y":-18.876999597763277,"z":-7.995442243252269},{"x":34.65777898397967,"y":-18.837565751087183,"z":-8.009420256592692},{"x":34.69147212202618,"y":-18.798072934731564,"z":-8.023392451266645},{"x":34.725060337765385,"y":-18.758595210413702,"z":-8.03733268049265},{"x":34.75860918976368,"y":-18.719055709933524,"z":-8.051268131343756},{"x":34.79208935656101,"y":-18.679489015799067,"z":-8.065186622539613},{"x":34.82550942958746,"y":-18.639885094364267,"z":-8.079091712662741},{"x":34.85886638844405,"y":-18.600247619332137,"z":-8.09298213500158},{"x":34.892160651063655,"y":-18.560576200646018,"z":-8.10685805217056},{"x":34.925393486428426,"y":-18.52086942445844,"z":-8.120719982487062},{"x":34.958560190396945,"y":-18.481133027305933,"z":-8.134565951511776},{"x":34.99166544778017,"y":-18.441361511099068,"z":-8.148397902570027},{"x":35.0247109408493,"y":-18.401552938601636,"z":-8.162216529520968},{"x":35.05769537276094,"y":-18.361708954326033,"z":-8.176021281298176},{"x":35.09062634648363,"y":-18.321820423540572,"z":-8.189815334392629},{"x":35.12345646104514,"y":-18.281945018266526,"z":-8.203578807657},{"x":35.15624666528405,"y":-18.242008882082914,"z":-8.217337232540498},{"x":35.18897408541659,"y":-18.20203986881267,"z":-8.231081012675775},{"x":35.22164165693833,"y":-18.162034483991885,"z":-8.244811371026833},{"x":35.2542426356836,"y":-18.122001097974447,"z":-8.258525461283236},{"x":35.286780805039996,"y":-18.081935189450057,"z":-8.27222486152556},{"x":35.31925406261545,"y":-18.041839464420388,"z":-8.285908674113157},{"x":35.35166700798632,"y":-18.00170834716631,"z":-8.299578826021248},{"x":35.38401669906363,"y":-17.961545576703074,"z":-8.313234066203442},{"x":35.4163031295271,"y":-17.921351271814306,"z":-8.326874380117566},{"x":35.44852712522217,"y":-17.88112451105332,"z":-8.340500105220796},{"x":35.48068784554045,"y":-17.840866450876717,"z":-8.354110874631303},{"x":35.51278569937563,"y":-17.80057668860072,"z":-8.367706849699951},{"x":35.54482067915221,"y":-17.76025534096158,"z":-8.381288015740571},{"x":35.57679319075536,"y":-17.71990200223783,"z":-8.394854533558766},{"x":35.608722203989736,"y":-17.67949273127207,"z":-8.408414451652826},{"x":35.640549948888136,"y":-17.639100857980374,"z":-8.421943214415997},{"x":35.67233212411699,"y":-17.598655904762023,"z":-8.435464473149054},{"x":35.70405221546759,"y":-17.558178902813395,"z":-8.448971200963873},{"x":35.7357098025635,"y":-17.517670490229953,"z":-8.462463207990934},{"x":35.76730569547959,"y":-17.477129729886634,"z":-8.475940828802985},{"x":35.798844375461506,"y":-17.436550942649763,"z":-8.489405967210072},{"x":35.830307864252106,"y":-17.39595740633195,"z":-8.502850932484582},{"x":35.86171209568849,"y":-17.35532871496777,"z":-8.516282516734398},{"x":35.89305542005616,"y":-17.31466708147409,"z":-8.529700006012558},{"x":35.92434877718903,"y":-17.273958340049795,"z":-8.543108080269347},{"x":35.955552804396056,"y":-17.233253884652957,"z":-8.556489855166946},{"x":35.986707260117186,"y":-17.192502024092402,"z":-8.569862361304576},{"x":36.01779915339716,"y":-17.15171978861007,"z":-8.58322001896623},{"x":36.04883008967305,"y":-17.110905168534615,"z":-8.596563507535347},{"x":36.07979442179528,"y":-17.070065710989823,"z":-8.609890386097863},{"x":36.11069778703031,"y":-17.029194098516303,"z":-8.623203068127163},{"x":36.14153977013292,"y":-16.988290970589507,"z":-8.636501365090531},{"x":36.17231595626115,"y":-16.94736229982035,"z":-8.649783360977462},{"x":36.2030327493029,"y":-16.90639967454846,"z":-8.663051808074908},{"x":36.23369371704709,"y":-16.865398387097002,"z":-8.676308242036567},{"x":36.264288864416564,"y":-16.824371891494966,"z":-8.68954833232922},{"x":36.29480031585455,"y":-16.783344402736823,"z":-8.702764317673278},{"x":36.32526269777984,"y":-16.742269502356994,"z":-8.715971180083319},{"x":36.35566365561625,"y":-16.701163875767786,"z":-8.72916356081487},{"x":36.38600199232551,"y":-16.66002924186406,"z":-8.742340929714542},{"x":36.41628244013295,"y":-16.618859263740642,"z":-8.75550533356037},{"x":36.446489996940755,"y":-16.577674479770224,"z":-8.768650235585874},{"x":36.47664005272,"y":-16.5364540407883,"z":-8.781782317991727},{"x":36.50672747229425,"y":-16.495205046791355,"z":-8.794899335793128},{"x":36.53677145698893,"y":-16.453901167414912,"z":-8.808009660056614},{"x":36.56671517083789,"y":-16.41262076373442,"z":-8.821088467115572},{"x":36.596613096955835,"y":-16.37128894188803,"z":-8.834159529107206},{"x":36.62645422660802,"y":-16.32992090031411,"z":-8.847218035667117},{"x":36.65622334854591,"y":-16.288537857454582,"z":-8.860257316775611},{"x":36.68593449458172,"y":-16.247120439959506,"z":-8.873283503884254},{"x":36.71558259618183,"y":-16.205675798029635,"z":-8.886294365914923},{"x":36.74516842714936,"y":-16.16420295852252,"z":-8.899290230801807},{"x":36.77469159680121,"y":-16.122702575758645,"z":-8.912270915529295},{"x":36.80416791505196,"y":-16.081152438694083,"z":-8.925243369465983},{"x":36.83355302379219,"y":-16.03961526807809,"z":-8.938188051542115},{"x":36.86288511823972,"y":-15.998037286588447,"z":-8.951121763346098},{"x":36.89215762389292,"y":-15.956427849062736,"z":-8.964041602325803},{"x":36.921368608311205,"y":-15.9147897873044,"z":-8.976946706543835},{"x":36.95051462464079,"y":-15.873128131953319,"z":-8.989835540766357},{"x":36.97959949902979,"y":-15.831437527686782,"z":-9.00270978466631},{"x":37.00862207999304,"y":-15.789719723996166,"z":-9.015568917994303},{"x":37.03758274482414,"y":-15.747974281927567,"z":-9.028413096841236},{"x":37.066494007026314,"y":-15.706183186606493,"z":-9.0412478681364},{"x":37.09531262798004,"y":-15.664409160360755,"z":-9.054054014471062},{"x":37.12408525995218,"y":-15.62258476038354,"z":-9.06685224568401},{"x":37.15280652882106,"y":-15.580717739581402,"z":-9.079640177824428},{"x":37.181442108058285,"y":-15.538858325998621,"z":-9.092402508068167},{"x":37.21002519880019,"y":-15.496958169563905,"z":-9.105154012787258},{"x":37.23855011783929,"y":-15.455025623453402,"z":-9.117892154406936},{"x":37.26700710608888,"y":-15.413075152297901,"z":-9.130612562544925},{"x":37.29540553648194,"y":-15.371093055687222,"z":-9.143319414115535},{"x":37.323737927076635,"y":-15.329090503374832,"z":-9.156009349918133},{"x":37.352009882402385,"y":-15.287059304753987,"z":-9.168684867365542},{"x":37.38021990488031,"y":-15.245001780259207,"z":-9.181345285016732},{"x":37.40836687929278,"y":-15.20291970305167,"z":-9.193990090581277},{"x":37.43645080954978,"y":-15.160813184781793,"z":-9.206619273240259},{"x":37.464473177489545,"y":-15.118680111659858,"z":-9.219233487763395},{"x":37.49243287265993,"y":-15.076522259640813,"z":-9.23183222293993},{"x":37.520330265371534,"y":-15.034339181267796,"z":-9.244415633750677},{"x":37.54816535595438,"y":-14.99213098483917,"z":-9.256983708699794},{"x":37.57593814490632,"y":-14.949897778574565,"z":-9.269536436348437},{"x":37.603648267010584,"y":-14.907640229454891,"z":-9.282073639693525},{"x":37.631299742101305,"y":-14.865352294325756,"z":-9.29459712801825},{"x":37.65888161609623,"y":-14.823050861278332,"z":-9.307101926010954},{"x":37.686419031219046,"y":-14.780697405306714,"z":-9.319599427803272},{"x":37.71386650524844,"y":-14.738362064339814,"z":-9.332068973679988},{"x":37.7412651440584,"y":-14.695981630037762,"z":-9.344529216099641},{"x":37.76860040602681,"y":-14.653578627616065,"z":-9.35697353894636},{"x":37.795874464732734,"y":-14.611149795290615,"z":-9.369402919897782},{"x":37.82308623522804,"y":-14.568696924503424,"z":-9.38181685346398},{"x":37.85023571967479,"y":-14.52622012267275,"z":-9.394215328773358},{"x":37.87732471408829,"y":-14.483716678332879,"z":-9.406599155414986},{"x":37.904348197915596,"y":-14.441194590902482,"z":-9.418966025342478},{"x":37.93131083811865,"y":-14.398646639155109,"z":-9.43131806105948},{"x":37.95821120256638,"y":-14.356075185226027,"z":-9.443654595596046},{"x":37.985049650110845,"y":-14.31347977042886,"z":-9.45597578181992},{"x":38.01182582659372,"y":-14.270861066427049,"z":-9.468281445426141},{"x":38.038546823954356,"y":-14.228207846888061,"z":-9.480574838841868},{"x":38.06519173348607,"y":-14.185553650987993,"z":-9.492846325914417},{"x":38.09179417730703,"y":-14.142844717858548,"z":-9.505111383628547},{"x":38.11831070871627,"y":-14.100150949385448,"z":-9.51734996632992},{"x":38.14477487391213,"y":-14.057418533785514,"z":-9.529577534488913},{"x":38.17117819654722,"y":-14.014661194570781,"z":-9.541790168060942},{"x":38.19751892169772,"y":-13.971881879989025,"z":-9.553987044001845},{"x":38.22379810413894,"y":-13.929078987763262,"z":-9.56616863882595},{"x":38.25001504680776,"y":-13.886253762174075,"z":-9.57833461778003},{"x":38.276170798303994,"y":-13.843404596537964,"z":-9.590485456063456},{"x":38.302262926484,"y":-13.80053559245851,"z":-9.602620011351325},{"x":38.32829387060544,"y":-13.757642858425388,"z":-9.614739405540233},{"x":38.35426397517963,"y":-13.714725923754619,"z":-9.626843788633273},{"x":38.38017875777375,"y":-13.671775723826096,"z":-9.638935726388372},{"x":38.40601476611486,"y":-13.628831318496944,"z":-9.651004256293534},{"x":38.43179753696621,"y":-13.585850424279093,"z":-9.663061288681257},{"x":38.457518447698725,"y":-13.542847465322444,"z":-9.675102786240169},{"x":38.483177502171316,"y":-13.499822545684538,"z":-9.687128738949335},{"x":38.508777435833274,"y":-13.456771168446872,"z":-9.699140419149087},{"x":38.53430971784939,"y":-13.41370781576987,"z":-9.71113380987535},{"x":38.559783908936396,"y":-13.37061648603966,"z":-9.723113388540085},{"x":38.585200668106324,"y":-13.327496114920482,"z":-9.735079459628679},{"x":38.61054406104365,"y":-13.28437390455148,"z":-9.747024503839466},{"x":38.63584085259713,"y":-13.241204390648917,"z":-9.758961127023207},{"x":38.66105960214781,"y":-13.198041355419456,"z":-9.770874480939737},{"x":38.68622429976009,"y":-13.154843908085587,"z":-9.782775879522555},{"x":38.71133758533913,"y":-13.111607490756457,"z":-9.79466657399678},{"x":38.73636356406214,"y":-13.06839413953281,"z":-9.806529544685464},{"x":38.76134451105965,"y":-13.025131023938528,"z":-9.818384811625844},{"x":38.786261984340534,"y":-12.981850085216983,"z":-9.830223623150156},{"x":38.81112797770625,"y":-12.938530533436161,"z":-9.842051672724596},{"x":38.83590724108861,"y":-12.895234015214916,"z":-9.853852168845252},{"x":38.86063869931456,"y":-12.85189270547349,"z":-9.865643626950076},{"x":38.88531367359784,"y":-12.808521779839468,"z":-9.87742191309267},{"x":38.90991630629237,"y":-12.765149271204152,"z":-9.889179441278554},{"x":38.93446279719624,"y":-12.72174676918541,"z":-9.900923936848354},{"x":38.95896001024034,"y":-12.67830210654006,"z":-9.912658686929698},{"x":38.983370852854755,"y":-12.634881287185431,"z":-9.924365900911253},{"x":39.00773210331998,"y":-12.591419095188394,"z":-9.936063194183838},{"x":39.03203227370654,"y":-12.547936042288091,"z":-9.947745049363993},{"x":39.05627006549412,"y":-12.50443456785898,"z":-9.95941082986885},{"x":39.080446464548295,"y":-12.460913020453606,"z":-9.971060997539817},{"x":39.104565363262495,"y":-12.417364470952048,"z":-9.982697419574224},{"x":39.12861510654331,"y":-12.373810109489368,"z":-9.994314457660941},{"x":39.15261993605543,"y":-12.330206066493755,"z":-10.005923817174798},{"x":39.17653728022603,"y":-12.286629875507025,"z":-10.017504889199335},{"x":39.20040744498237,"y":-12.243008298567423,"z":-10.029077167733133},{"x":39.22421592894998,"y":-12.199367838017908,"z":-10.040633622842343},{"x":39.24796306020092,"y":-12.1557080069939,"z":-10.052174401506054},{"x":39.27164629515266,"y":-12.112033616237511,"z":-10.063698253302787},{"x":39.29526661221846,"y":-12.068343008287357,"z":-10.07520563856169},{"x":39.31882783672766,"y":-12.024629213445928,"z":-10.08669840942139},{"x":39.34232806085394,"y":-11.980895863284772,"z":-10.09817562550866},{"x":39.36576665785897,"y":-11.937144237398272,"z":-10.109636968635847},{"x":39.38914395227844,"y":-11.893373845870045,"z":-10.121082585085608},{"x":39.41245995150422,"y":-11.849584788372987,"z":-10.132512466328512},{"x":39.43571434947364,"y":-11.8057777562694,"z":-10.143926449865525},{"x":39.458907468944545,"y":-11.761952258136015,"z":-10.155324681626265},{"x":39.48203962986427,"y":-11.718107800800357,"z":-10.166707306914507},{"x":39.5051099038387,"y":-11.67424626141555,"z":-10.178073856358237},{"x":39.528119235345464,"y":-11.630365961444525,"z":-10.18942478272472},{"x":39.55108002649995,"y":-11.586443245164402,"z":-10.200766204164577},{"x":39.57395416776308,"y":-11.542551254214654,"z":-10.212079272323038},{"x":39.59678163614383,"y":-11.498613477108917,"z":-10.223383736240798},{"x":39.61954849028992,"y":-11.45465673322718,"z":-10.234672694066663},{"x":39.642247368044536,"y":-11.410695410514567,"z":-10.24594247697916},{"x":39.66488904421911,"y":-11.366708778599165,"z":-10.25719841945618},{"x":39.6874765535603,"y":-11.32269095739329,"z":-10.268442028382397},{"x":39.70998943832533,"y":-11.278681996260916,"z":-10.279663101619356},{"x":39.732447563996814,"y":-11.234643235565581,"z":-10.290871521305025},{"x":39.75484482877687,"y":-11.190586698383477,"z":-10.302064236186377},{"x":39.77719485193791,"y":-11.146485576220869,"z":-10.313248053771673},{"x":39.79945620211654,"y":-11.102421879733011,"z":-10.324402216031208},{"x":39.8216703289666,"y":-11.058313793953353,"z":-10.33554746534182},{"x":39.843824829550265,"y":-11.014185925060254,"z":-10.346677581629518},{"x":39.86591521029128,"y":-10.970047357596956,"z":-10.35779029320434},{"x":39.88794628414848,"y":-10.925888603120926,"z":-10.368888007341905},{"x":39.90991626011293,"y":-10.881713354108877,"z":-10.379969810945756},{"x":39.93182514884098,"y":-10.837521708351451,"z":-10.391035696632397},{"x":39.95367325765864,"y":-10.79331316248213,"z":-10.402085807145351},{"x":39.97546562360613,"y":-10.749077588052057,"z":-10.413122683045495},{"x":39.997186580411366,"y":-10.704846959834034,"z":-10.424138372011932},{"x":40.018852698015216,"y":-10.660587690543977,"z":-10.435141260260286},{"x":40.04045689564087,"y":-10.616314316218189,"z":-10.446127744522368},{"x":40.06199977709128,"y":-10.572025731601782,"z":-10.457098117691263},{"x":40.08348223238897,"y":-10.527720224844199,"z":-10.46805282034597},{"x":40.104903977506204,"y":-10.483398494543579,"z":-10.478991695587844},{"x":40.126265022097336,"y":-10.439060636587383,"z":-10.489914735947217},{"x":40.147565375952034,"y":-10.394706746784122,"z":-10.500821934002028},{"x":40.168804759932826,"y":-10.350337525799766,"z":-10.511713134047067},{"x":40.189983474658064,"y":-10.305952465108563,"z":-10.522588477437557},{"x":40.2111012427575,"y":-10.261552265973869,"z":-10.533447808915616},{"x":40.23215836362343,"y":-10.217136418943712,"z":-10.544291269580912},{"x":40.25315484772013,"y":-10.172705019422775,"z":-10.555118852249795},{"x":40.274090990963685,"y":-10.128257555908851,"z":-10.565930697235716},{"x":40.294965663564206,"y":-10.083796551329897,"z":-10.576726207827072},{"x":40.315780302227,"y":-10.039319066338933,"z":-10.587506114054476},{"x":40.336538593335995,"y":-9.994817290449827,"z":-10.59827231780778},{"x":40.35722893923043,"y":-9.950316243060328,"z":-10.609018787753145},{"x":40.37785985672432,"y":-9.90579778732805,"z":-10.61974992775082},{"x":40.398432190661126,"y":-9.861260186448458,"z":-10.63046616798037},{"x":40.41894369628114,"y":-9.816708402848862,"z":-10.641166328235235},{"x":40.43939438750006,"y":-9.772142532310298,"z":-10.651850402290002},{"x":40.459787063985345,"y":-9.727556568915583,"z":-10.662519842488502},{"x":40.48011588335326,"y":-9.682963418367299,"z":-10.673171578200364},{"x":40.50038448648357,"y":-9.638355246654141,"z":-10.683807500669007},{"x":40.52059343592105,"y":-9.593730924519589,"z":-10.694427893420489},{"x":40.54074191055507,"y":-9.549092377809671,"z":-10.7050323129085},{"x":40.560830197635404,"y":-9.50443908873529,"z":-10.715620897612252},{"x":40.58085775938968,"y":-9.459772374990516,"z":-10.726193351004344},{"x":40.600827617013806,"y":-9.415085592053076,"z":-10.73675125782538},{"x":40.62073430994742,"y":-9.370391084146604,"z":-10.747291717960218},{"x":40.64057896091266,"y":-9.325686502221023,"z":-10.757815307466059},{"x":40.66036539102688,"y":-9.280963353778866,"z":-10.76832404016553},{"x":40.68009116292375,"y":-9.236227251034405,"z":-10.778816610625658},{"x":40.69975683126986,"y":-9.191477059722509,"z":-10.789293300629444},{"x":40.719362407287676,"y":-9.146712872314056,"z":-10.79975410352667},{"x":40.73890763431396,"y":-9.101935396374584,"z":-10.81019886937552},{"x":40.75839252609131,"y":-9.05714472527013,"z":-10.820627592159045},{"x":40.77781762949516,"y":-9.012339720543505,"z":-10.831040551854956},{"x":40.79718640869404,"y":-8.967512462483093,"z":-10.841439597756736},{"x":40.81648638924085,"y":-8.922692007114643,"z":-10.85181801308391},{"x":40.83573060545439,"y":-8.877848252133116,"z":-10.86218278848899},{"x":40.854925093140494,"y":-8.832967076047112,"z":-10.872537180603235},{"x":40.87403903762365,"y":-8.788120789345978,"z":-10.882864540186835},{"x":40.893105111932186,"y":-8.743232939567683,"z":-10.893182497127588},{"x":40.912106768037205,"y":-8.698342522828451,"z":-10.90348209293135},{"x":40.931050568425796,"y":-8.65343418260063,"z":-10.913766868701515},{"x":40.94993443012083,"y":-8.60851295391136,"z":-10.924035683264886},{"x":40.96875836598675,"y":-8.563578928199997,"z":-10.934288530556708},{"x":40.98752213083522,"y":-8.518632816459755,"z":-10.944525263588035},{"x":41.006225997472946,"y":-8.473674091010325,"z":-10.954746017718453},{"x":41.02487023579865,"y":-8.428702222747582,"z":-10.964950927618647},{"x":41.043454089191584,"y":-8.383719163700217,"z":-10.975139565596946},{"x":41.06197885140656,"y":-8.338721902061518,"z":-10.985312628083918},{"x":41.080442239761275,"y":-8.293716117508596,"z":-10.995468847176092},{"x":41.09884681790538,"y":-8.24869569056863,"z":-11.005609619091455},{"x":41.11719107338758,"y":-8.203664439837096,"z":-11.015734097821914},{"x":41.13547578106237,"y":-8.158620591140505,"z":-11.025842697299007},{"x":41.15370924718692,"y":-8.11354368785174,"z":-11.035940008632084},{"x":41.1718658486391,"y":-8.068497327212503,"z":-11.046011816455419},{"x":41.18997573398552,"y":-8.023406874241234,"z":-11.056074825971862},{"x":41.20801688128331,"y":-7.978327244549908,"z":-11.066116792252908},{"x":41.226002795749544,"y":-7.9332248721327465,"z":-11.07614521269596},{"x":41.24393518383574,"y":-7.888095460169203,"z":-11.086161040577236},{"x":41.26179549452159,"y":-7.842985916299186,"z":-11.096153891661842},{"x":41.27960280065696,"y":-7.797848263362511,"z":-11.106134415538792},{"x":41.29734969782316,"y":-7.752701321225835,"z":-11.116098457059627},{"x":41.315036941566355,"y":-7.707543306134616,"z":-11.126046425595499},{"x":41.33266503467772,"y":-7.662373056264358,"z":-11.135978590871684},{"x":41.35023350206862,"y":-7.6171919117472315,"z":-11.145894672093721},{"x":41.36774235929311,"y":-7.571999962251016,"z":-11.155794664164638},{"x":41.385191863476734,"y":-7.526796670594804,"z":-11.165678698924385},{"x":41.40258997086545,"y":-7.481561431744947,"z":-11.175551282108538},{"x":41.41991190715681,"y":-7.4363589245570285,"z":-11.1853983281897},{"x":41.43718295844993,"y":-7.391123394163562,"z":-11.195234185841741},{"x":41.45439447608649,"y":-7.345877504665555,"z":-11.205053928756948},{"x":41.47154647633488,"y":-7.3006213452435595,"z":-11.214857552097167},{"x":41.48863921245606,"y":-7.255354376373265,"z":-11.224645186835161},{"x":41.505672462553854,"y":-7.210077315080744,"z":-11.234416692074795},{"x":41.52264624325091,"y":-7.164790250301008,"z":-11.244172063106683},{"x":41.539561040453606,"y":-7.119492011815603,"z":-11.253911565669814},{"x":41.55641686643545,"y":-7.074182686579919,"z":-11.26363519400851},{"x":41.573212102203506,"y":-7.028866772448679,"z":-11.273341998632269},{"x":41.58994933150645,"y":-6.983537427712354,"z":-11.283033458833817},{"x":41.606626242536386,"y":-6.938201042880514,"z":-11.292708222244372},{"x":41.62324447711998,"y":-6.892853292729258,"z":-11.302367226484384},{"x":41.63980335582795,"y":-6.847496156937794,"z":-11.312010063234242},{"x":41.65630312544853,"y":-6.8021290921570445,"z":-11.321636862003567},{"x":41.67274380135958,"y":-6.756752185697716,"z":-11.331247617896755},{"x":41.689125399053985,"y":-6.711365524792627,"z":-11.340842326059802},{"x":41.70544770720489,"y":-6.6659698291061185,"z":-11.350420848371911},{"x":41.72171097000043,"y":-6.620564553788461,"z":-11.359983313751142},{"x":41.73791542868041,"y":-6.57514915274358,"z":-11.369529850395983},{"x":41.754064691082526,"y":-6.529713577926227,"z":-11.379062576835977},{"x":41.770148212288575,"y":-6.484287683925037,"z":-11.38857524903077},{"x":41.78617410918496,"y":-6.438848760978528,"z":-11.398072644335354},{"x":41.802141717260405,"y":-6.393398793305887,"z":-11.407554358259997},{"x":41.81805237544795,"y":-6.347934057756665,"z":-11.417021176399587},{"x":41.833901221877184,"y":-6.3024685990358265,"z":-11.42647018991896},{"x":41.84969248379136,"y":-6.256990447840575,"z":-11.435903902050164},{"x":41.865424848511154,"y":-6.211503497699141,"z":-11.445321516558918},{"x":41.8810985513967,"y":-6.1660071992357635,"z":-11.454723160293792},{"x":41.89671317164576,"y":-6.120502909688552,"z":-11.464108566334552},{"x":41.912268945610236,"y":-6.074990079803375,"z":-11.47347786180367},{"x":41.92776610668392,"y":-6.029468159129205,"z":-11.482831173095972},{"x":41.943204239005546,"y":-5.9839385063408,"z":-11.492168234566869},{"x":41.95858379162363,"y":-5.938399934058424,"z":-11.501489303129304},{"x":41.973904565866924,"y":-5.892853164582462,"z":-11.510794244041644},{"x":41.98916657937495,"y":-5.847298283638765,"z":-11.520083053232272},{"x":42.00436984989817,"y":-5.801735376872967,"z":-11.529355726670241},{"x":42.01951460688789,"y":-5.756163891712064,"z":-11.538612389836956},{"x":42.034606347360345,"y":-5.710567314210602,"z":-11.54785639943462},{"x":42.04963053350977,"y":-5.664989776726285,"z":-11.557078829037096},{"x":42.06459669815824,"y":-5.619402645897372,"z":-11.566285499262365},{"x":42.079507354864326,"y":-5.573798333963339,"z":-11.575477948906448},{"x":42.0943585402724,"y":-5.528189064177811,"z":-11.584653723900093},{"x":42.10915152398891,"y":-5.482571086349382,"z":-11.593813592676439},{"x":42.123886113821406,"y":-5.4369451239008235,"z":-11.602957422248071},{"x":42.13856232620016,"y":-5.391311260966603,"z":-11.612085208363883},{"x":42.15317976833043,"y":-5.345670862671378,"z":-11.621196691362105},{"x":42.16773907316815,"y":-5.300022092183709,"z":-11.630292250829756},{"x":42.182247364580306,"y":-5.25434259576502,"z":-11.639376338779481},{"x":42.19668211471367,"y":-5.208703614925186,"z":-11.648434817502356},{"x":42.21106911525116,"y":-5.163023812173093,"z":-11.657483848847479},{"x":42.22539159540986,"y":-5.117356502599602,"z":-11.666512878136183},{"x":42.23965924619096,"y":-5.07167097369815,"z":-11.67552799415611},{"x":42.25386786082596,"y":-5.025980785016302,"z":-11.684526529477173},{"x":42.268018656983976,"y":-4.980282167506072,"z":-11.693509239525454},{"x":42.2821110543472,"y":-4.934577131536597,"z":-11.702475741369446},{"x":42.296145072839984,"y":-4.888865761150114,"z":-11.711426031778807},{"x":42.31012367535081,"y":-4.843138490156823,"z":-11.720361991168794},{"x":42.324038835122984,"y":-4.797421778510621,"z":-11.729278467080261},{"x":42.337899002420066,"y":-4.751688044261048,"z":-11.738180854498937},{"x":42.35169989297007,"y":-4.705951528411569,"z":-11.747066390677618},{"x":42.365443276744756,"y":-4.66020651929501,"z":-11.755936198618583},{"x":42.37912954971167,"y":-4.614451808360672,"z":-11.76479052214462},{"x":42.3927556536639,"y":-4.568697791856881,"z":-11.773627364465863},{"x":42.406324685158474,"y":-4.522934239432193,"z":-11.782448715712126},{"x":42.419835701090385,"y":-4.477164456566844,"z":-11.7912539494642},{"x":42.43328872012451,"y":-4.43138852576965,"z":-11.800043062291518},{"x":42.44668376102988,"y":-4.385606529471852,"z":-11.808816050801966},{"x":42.46002553519237,"y":-4.339802399357,"z":-11.81757599676229},{"x":42.473299984050534,"y":-4.294024669710937,"z":-11.82631364149577},{"x":42.486521204223315,"y":-4.248224970721263,"z":-11.835038237086813},{"x":42.49968526391392,"y":-4.20241694823134,"z":-11.843747186417591},{"x":42.512790142423974,"y":-4.156607798151247,"z":-11.852439135175425},{"x":42.52584378037556,"y":-4.110769777557621,"z":-11.861119348137438},{"x":42.53882762429017,"y":-4.064968334375885,"z":-11.869775457050098},{"x":42.551759526749116,"y":-4.019140771787804,"z":-11.878419333112358},{"x":42.56463380617759,"y":-3.973307234173563,"z":-11.887047177868679},{"x":42.577455179425506,"y":-3.9274509511599507,"z":-11.895662149767192},{"x":42.590209206025925,"y":-3.8816238543525277,"z":-11.904254516234753},{"x":42.60291018560809,"y":-3.8357748233432223,"z":-11.91283388232015},{"x":42.615553617334676,"y":-3.7899201420724205,"z":-11.92139720409074},{"x":42.628139341441695,"y":-3.744060540236412,"z":-11.929944357269225},{"x":42.64066755511607,"y":-3.6981954498364806,"z":-11.93847545965419},{"x":42.653138100343085,"y":-3.6523256008668143,"z":-11.946990387442524},{"x":42.66555099763403,"y":-3.60645107443246,"z":-11.955489137888131},{"x":42.677906442157116,"y":-3.5605713016333644,"z":-11.963971828302073},{"x":42.690204278521016,"y":-3.514687012900753,"z":-11.972438335593397},{"x":42.70244521957065,"y":-3.4687956876469817,"z":-11.980889135602789},{"x":42.71462738235747,"y":-3.4229045604495743,"z":-11.989322909729538},{"x":42.726756462316224,"y":-3.376992240219432,"z":-11.997743593794619},{"x":42.73882115494531,"y":-3.3311017577167386,"z":-12.006143314538539},{"x":42.75083125929112,"y":-3.285196099252172,"z":-12.014528866057026},{"x":42.76278489667412,"y":-3.239282500217327,"z":-12.022898930897275},{"x":42.77468022258495,"y":-3.193368205387559,"z":-12.031252200487426},{"x":42.78651861084995,"y":-3.1474480833238823,"z":-12.03958962116512},{"x":42.798299742482,"y":-3.101523516517934,"z":-12.047910952762244},{"x":42.81002363686492,"y":-3.0555945845004224,"z":-12.056216192375075},{"x":42.821695932408524,"y":-3.0096391818486543,"z":-12.064509335742251},{"x":42.833303575126884,"y":-2.96370893038967,"z":-12.072781084509254},{"x":42.8448514369782,"y":-2.9177850030081895,"z":-12.081034862008282},{"x":42.85634641832727,"y":-2.871840057896809,"z":-12.089275589183275},{"x":42.86779139751313,"y":-2.825862398415558,"z":-12.097505349890508},{"x":42.87916466629237,"y":-2.779939648980051,"z":-12.105708491000376},{"x":42.890489582169735,"y":-2.733977806806043,"z":-12.113901825041234},{"x":42.901755490493876,"y":-2.6880200772754415,"z":-12.122077648062799},{"x":42.91296371193023,"y":-2.6420613134554136,"z":-12.130236892681818},{"x":42.92411601728968,"y":-2.5960943989054988,"z":-12.138380832415454},{"x":42.93521162319017,"y":-2.5501226807664055,"z":-12.146508882592943},{"x":42.94624944838487,"y":-2.5041508195356132,"z":-12.154620231884747},{"x":42.95723061687047,"y":-2.458174312279287,"z":-12.162715687125413},{"x":42.9681548343694,"y":-2.4121945465167345,"z":-12.17079501475713},{"x":42.979022121720874,"y":-2.366211600641086,"z":-12.178858212419026},{"x":42.98983265349183,"y":-2.320224897468091,"z":-12.186905392349063},{"x":43.000586142672354,"y":-2.274235826048712,"z":-12.194936322928019},{"x":43.01128291687621,"y":-2.228243153355356,"z":-12.202951230824166},{"x":43.02192360021356,"y":-2.182244332609235,"z":-12.21095056901095},{"x":43.03250714866073,"y":-2.136244032832985,"z":-12.218933536014896},{"x":43.04303194100789,"y":-2.090249554072389,"z":-12.226898881948175},{"x":43.053501604456464,"y":-2.0442452221727603,"z":-12.234849332780954},{"x":43.063914356592775,"y":-1.9982389906425067,"z":-12.242783522090129},{"x":43.074270368862244,"y":-1.9522302807388787,"z":-12.250701561377454},{"x":43.08456980969965,"y":-1.9062185129004243,"z":-12.258603561361348},{"x":43.0948124069142,"y":-1.860205078885081,"z":-12.266489294419987},{"x":43.10499862009456,"y":-1.8141880840457019,"z":-12.274359096174239},{"x":43.11512803369451,"y":-1.7681695779134163,"z":-12.282212627169079},{"x":43.12520095928898,"y":-1.7221483225203862,"z":-12.290050109961632},{"x":43.13521898722637,"y":-1.6761171555115555,"z":-12.29787277077644},{"x":43.14518225388456,"y":-1.6300754893864382,"z":-12.305680711907783},{"x":43.155080442902616,"y":-1.5840714613515618,"z":-12.313465799700118},{"x":43.16493014760852,"y":-1.5380281207396078,"z":-12.321241065838432},{"x":43.174717571203054,"y":-1.492010077105024,"z":-12.328995607765378},{"x":43.18445144266594,"y":-1.445976572251599,"z":-12.336736310584522},{"x":43.19412897375449,"y":-1.3999408549959251,"z":-12.344460950456872},{"x":43.20375018503992,"y":-1.3539030015371403,"z":-12.352169525178937},{"x":43.21331482407933,"y":-1.3078644069837546,"z":-12.359861812483285},{"x":43.22282345939197,"y":-1.2618225097679767,"z":-12.36753825084413},{"x":43.23227745715434,"y":-1.2157707865673997,"z":-12.375199933278884},{"x":43.24167627344328,"y":-1.1697119472445843,"z":-12.3828464125588},{"x":43.251012838042264,"y":-1.1236810523147691,"z":-12.39047189291424},{"x":43.26029417570234,"y":-1.0776438628706688,"z":-12.398082069067378},{"x":43.26952253348339,"y":-1.0315892226948453,"z":-12.405678784447657},{"x":43.27869591002212,"y":-0.9855271054272875,"z":-12.413260393197131},{"x":43.28780700681863,"y":-0.939494588113678,"z":-12.420820817796402},{"x":43.29686891098253,"y":-0.8934256709924597,"z":-12.428370904208885},{"x":43.30586812702914,"y":-0.8473891625175857,"z":-12.435899387878958},{"x":43.31481542006303,"y":-0.8013302745420073,"z":-12.44341524373124},{"x":43.32370501189971,"y":-0.7552788326709663,"z":-12.450913609744578},{"x":43.33253935728543,"y":-0.7092223475237769,"z":-12.458396532039036},{"x":43.34131758443147,"y":-0.6631655237710633,"z":-12.465863255152499},{"x":43.35004508831755,"y":-0.617079973986577,"z":-12.473318376401274},{"x":43.35870665033837,"y":-0.5710465277441664,"z":-12.48074884684352},{"x":43.367316787117375,"y":-0.5249884774763158,"z":-12.48816707140653},{"x":43.375871392299175,"y":-0.4789277402272077,"z":-12.495569517690893},{"x":43.38437608359163,"y":-0.4328339125197412,"z":-12.502961063104326},{"x":43.39281285934173,"y":-0.3868051250565507,"z":-12.510326002889956},{"x":43.401199767765966,"y":-0.34074339666800224,"z":-12.517680039272753},{"x":43.40953098325926,"y":-0.29468060332240625,"z":-12.525018077183246},{"x":43.41780628885187,"y":-0.24861814527745196,"z":-12.532339904065134},{"x":43.426027124536816,"y":-0.20254813795103133,"z":-12.539646779905917},{"x":43.43418985663201,"y":-0.15649121706396651,"z":-12.546935446107497},{"x":43.44229979049238,"y":-0.11041760480746066,"z":-12.554210622790684},{"x":43.45035053441661,"y":-0.06436386884265415,"z":-12.561466549246829},{"x":43.45834734730023,"y":-0.018300222521358694,"z":-12.56870793310244},{"x":43.46628862116454,"y":0.02776397059835453,"z":-12.575933307560376},{"x":43.47417913311743,"y":0.07385653084901997,"z":-12.583147030534594},{"x":43.4820041860794,"y":0.11989104622578238,"z":-12.590335606790866},{"x":43.489779195731515,"y":0.16595776734817577,"z":-12.59751315005879},{"x":43.49749763869466,"y":0.2120180967347536,"z":-12.604673644404809},{"x":43.50516110148068,"y":0.25808126273229914,"z":-12.611818535946364},{"x":43.51276904942351,"y":0.30414386971569973,"z":-12.618947306775809},{"x":43.52032150637467,"y":0.35020584421603185,"z":-12.626059955930975},{"x":43.52781860407158,"y":0.3962677779326031,"z":-12.63315658481324},{"x":43.53526507321033,"y":0.44235886785084905,"z":-12.640241685172972},{"x":43.54264659605975,"y":0.4883899006847893,"z":-12.647301571858124},{"x":43.54997753709732,"y":0.5344499435643837,"z":-12.65434992790332},{"x":43.55725320926411,"y":0.5805096538752649,"z":-12.661382258597733},{"x":43.564476544188885,"y":0.6265875998227636,"z":-12.668401398276297},{"x":43.57163852578303,"y":0.6726257886946063,"z":-12.675398535171652},{"x":43.578748321474194,"y":0.7186827333769329,"z":-12.682382580468973},{"x":43.58580294003509,"y":0.7647390548596219,"z":-12.689350595853776},{"x":43.59280270625199,"y":0.810796679533244,"z":-12.696302881347103},{"x":43.59974653526819,"y":0.8568482061442393,"z":-12.703238331392866},{"x":43.606635659290134,"y":0.9029015574547596,"z":-12.710158149953767},{"x":43.613473636688276,"y":0.9489806609233032,"z":-12.717065925957353},{"x":43.62024847785259,"y":0.995004117245409,"z":-12.72394948361097},{"x":43.62697222099309,"y":1.041053181179982,"z":-12.730820997298544},{"x":43.63364095000754,"y":1.0871011162160056,"z":-12.737676474112844},{"x":43.64025468784996,"y":1.1331478505015564,"z":-12.744515913005175},{"x":43.646813457557364,"y":1.1791933122550062,"z":-12.75133931295838},{"x":43.65331737606218,"y":1.2252380970873065,"z":-12.758146771509612},{"x":43.6597660920937,"y":1.2712794639563483,"z":-12.76493789382628},{"x":43.66616332627147,"y":1.3173440422567975,"z":-12.771716604801663},{"x":43.672499135710225,"y":1.3633596654662672,"z":-12.778472308370315},{"x":43.67878314263109,"y":1.4093956867672843,"z":-12.785215206882556},{"x":43.685012505891,"y":1.4554313414400895,"z":-12.79194225720981},{"x":43.691186976988554,"y":1.5014645548845686,"z":-12.798653165539214},{"x":43.697307023822816,"y":1.5474985960731356,"z":-12.805348416909887},{"x":43.70337274844755,"y":1.5935340633675088,"z":-12.81202810484912},{"x":43.70938199254235,"y":1.6395541793927042,"z":-12.818689810289435},{"x":43.715337494027544,"y":1.6855795878575202,"z":-12.825336533548501},{"x":43.72123831334774,"y":1.731602867536687,"z":-12.83196720896734},{"x":43.72708548850066,"y":1.7776319711302973,"z":-12.838582987529826},{"x":43.73287608569758,"y":1.8236434259358838,"z":-12.845180509630264},{"x":43.73861308562108,"y":1.869660563371048,"z":-12.851763133321187},{"x":43.74429549872018,"y":1.9156752892451654,"z":-12.85832970649277},{"x":43.74992326803451,"y":1.9616868639573084,"z":-12.864880133548574},{"x":43.75549932231342,"y":2.00771930547245,"z":-12.871417830958467},{"x":43.76101538188962,"y":2.0537036229568546,"z":-12.877933023507454},{"x":43.76648174897774,"y":2.0997254000208025,"z":-12.884437846446161},{"x":43.77188961953129,"y":2.145710277859347,"z":-12.890921798646481},{"x":43.77724549243586,"y":2.1917130720715545,"z":-12.897392623823531},{"x":43.78254617458291,"y":2.237706267284884,"z":-12.903846454905212},{"x":43.7877928535115,"y":2.283699836183815,"z":-12.910284702215646},{"x":43.79298524194185,"y":2.329691030986923,"z":-12.916706988713129},{"x":43.79812328828904,"y":2.375679112160864,"z":-12.923113220363557},{"x":43.80320701777462,"y":2.4216640098547324,"z":-12.929503396988492},{"x":43.80823652854614,"y":2.4676463243547913,"z":-12.935877611191252},{"x":43.813212564366765,"y":2.5136326877373554,"z":-12.942236787569597},{"x":43.81813491120151,"y":2.559621022516731,"z":-12.94858064197278},{"x":43.82299962688478,"y":2.605573722985352,"z":-12.954904011263054},{"x":43.827812358491215,"y":2.651543669717988,"z":-12.961214185747734},{"x":43.83257133536949,"y":2.697514038853411,"z":-12.967508853533596},{"x":43.837275341865016,"y":2.743472692163503,"z":-12.973786364507227},{"x":43.84192685875291,"y":2.7894437010969195,"z":-12.980050011267632},{"x":43.846523390393536,"y":2.8354021849519286,"z":-12.986296410343892},{"x":43.85106426851599,"y":2.881340692416824,"z":-12.992524571337372},{"x":43.85555250409437,"y":2.9272893391456267,"z":-12.998738586781277},{"x":43.85998678813722,"y":2.973234641605108,"z":-13.004936635652465},{"x":43.86436714455399,"y":3.019176531111372,"z":-13.011118717517862},{"x":43.86869353456696,"y":3.0651142679192103,"z":-13.017284742025776},{"x":43.87296722434869,"y":3.1110612073428103,"z":-13.023436504091693},{"x":43.877187704136816,"y":3.157011914903532,"z":-13.029573274914087},{"x":43.88134953309449,"y":3.202905902893251,"z":-13.035687010098654},{"x":43.88546103346996,"y":3.2488343994278837,"z":-13.041789875920466},{"x":43.88951773933019,"y":3.2947476579146397,"z":-13.047875258999685},{"x":43.893521051268706,"y":3.3406610525464004,"z":-13.053945209099542},{"x":43.897471667933054,"y":3.3865825760763877,"z":-13.060000783319767},{"x":43.90136668729051,"y":3.432477907278331,"z":-13.066037470762659},{"x":43.90520894441963,"y":3.478379888190416,"z":-13.072059604721776},{"x":43.9089975466417,"y":3.524277704730953,"z":-13.078065770161494},{"x":43.9127325187835,"y":3.570171289042182,"z":-13.084055967002584},{"x":43.91641383228088,"y":3.6160599013687635,"z":-13.090030107846996},{"x":43.92004161981892,"y":3.6619448178602463,"z":-13.095988367587303},{"x":43.92361689056308,"y":3.7078387408166957,"z":-13.101932396936979},{"x":43.92713650343805,"y":3.7537006049397466,"z":-13.107856894426174},{"x":43.93060390324579,"y":3.7995747013841856,"z":-13.113767594457064},{"x":43.93401737096567,"y":3.8454381099062425,"z":-13.119661547935971},{"x":43.93737763634756,"y":3.89130017419812,"z":-13.125539965471553},{"x":43.94068442492473,"y":3.9371567934882092,"z":-13.131402328998181},{"x":43.94393785906775,"y":3.983009245263465,"z":-13.137248810567707},{"x":43.947137915531634,"y":4.028856790022551,"z":-13.14307932434808},{"x":43.950284711418966,"y":4.074700705782288,"z":-13.148894040923901},{"x":43.953377998097984,"y":4.120536890164334,"z":-13.154692449531398},{"x":43.95641807572351,"y":4.166369311556771,"z":-13.16047506150147},{"x":43.959406397900665,"y":4.212220103039658,"z":-13.166244664938283},{"x":43.962338475652444,"y":4.2580192352975805,"z":-13.171992470131713},{"x":43.96521884837458,"y":4.3038366041727345,"z":-13.177727267094914},{"x":43.96804602297516,"y":4.349648597892864,"z":-13.18344609811885},{"x":43.970820549682614,"y":4.395463897735761,"z":-13.189150051020013},{"x":43.97354088254957,"y":4.4412561934765185,"z":-13.19483586414279},{"x":43.97620869760833,"y":4.487053008335244,"z":-13.200506966525346},{"x":43.97882337856336,"y":4.532843509124192,"z":-13.206162021042267},{"x":43.98138499141235,"y":4.578628302466988,"z":-13.211801111674662},{"x":43.98389385427256,"y":4.62441270722224,"z":-13.217424899411018},{"x":43.98634933304171,"y":4.670184540909385,"z":-13.223031897639476},{"x":43.98875182660422,"y":4.715950468382006,"z":-13.228622934695846},{"x":43.991101498230876,"y":4.761713116648198,"z":-13.234198338823639},{"x":43.99339823203853,"y":4.807469726981572,"z":-13.239757781393417},{"x":43.99564316285376,"y":4.853243127122579,"z":-13.245304032599597},{"x":43.99783308927913,"y":4.898966590370467,"z":-13.250829028495785},{"x":43.999971231036525,"y":4.944706038593837,"z":-13.256340752231228},{"x":44.002057024211744,"y":4.990449961001147,"z":-13.261837809349855},{"x":44.004089102000194,"y":5.036167313183631,"z":-13.267316483599389},{"x":44.006068997455934,"y":5.081891702547888,"z":-13.272780813487916},{"x":44.0079958808942,"y":5.127603532527491,"z":-13.278228462732043},{"x":44.00987020829743,"y":5.173312840600807,"z":-13.283660636958404},{"x":44.011692521489465,"y":5.21903303430655,"z":-13.28907892712513},{"x":44.013460839119574,"y":5.2647128535213135,"z":-13.294477276704734},{"x":44.01517719459231,"y":5.310403427953615,"z":-13.299861743328254},{"x":44.01684092886087,"y":5.3560871784001645,"z":-13.305230255875031},{"x":44.01845209299901,"y":5.401764713498552,"z":-13.310582894224442},{"x":44.0200107125101,"y":5.4474359683048865,"z":-13.315919658805033},{"x":44.02151681296799,"y":5.493100877941036,"z":-13.321240550072767},{"x":44.02297140774422,"y":5.538791046504395,"z":-13.326549241902352},{"x":44.02437153912721,"y":5.58441072868779,"z":-13.331834636693772},{"x":44.02572084105594,"y":5.6300771035984045,"z":-13.337110320461411},{"x":44.02701648209779,"y":5.675693747895336,"z":-13.342365159606244},{"x":44.02826078815635,"y":5.721341460310155,"z":-13.34760847010015},{"x":44.02945187078403,"y":5.766950092709404,"z":-13.352832201822464},{"x":44.030591227635554,"y":5.812575514313583,"z":-13.358042764408903},{"x":44.03167789779704,"y":5.858178573598719,"z":-13.363235691800307},{"x":44.032712569622255,"y":5.903786837730657,"z":-13.368414132013339},{"x":44.03369479118875,"y":5.94937934992404,"z":-13.373575712542662},{"x":44.03462487184348,"y":5.994968851380684,"z":-13.378721885815182},{"x":44.035502874329445,"y":6.0405579743307785,"z":-13.383852951551853},{"x":44.036328460524715,"y":6.086127108451597,"z":-13.388966714200839},{"x":44.0371020200409,"y":6.131695736127085,"z":-13.394065370519467},{"x":44.037823494989915,"y":6.177259749550396,"z":-13.399148464343297},{"x":44.03849277972656,"y":6.222810322281888,"z":-13.404215020935634},{"x":44.03911017408545,"y":6.268366938234599,"z":-13.409267211246},{"x":44.039675254233394,"y":6.313895156430072,"z":-13.414301228477768},{"x":44.040188455225596,"y":6.3594265943764166,"z":-13.41932058064058},{"x":44.04064966480983,"y":6.404950403461482,"z":-13.424324074772663},{"x":44.04105909006633,"y":6.45048809119674,"z":-13.429314071457146},{"x":44.041416222788705,"y":6.495975555276037,"z":-13.434283566588386},{"x":44.04172162799511,"y":6.541477445346519,"z":-13.439239639252598},{"x":44.0419751405908,"y":6.586970104821678,"z":-13.44417971111996},{"x":44.04217680270034,"y":6.632456166893237,"z":-13.449104076049696},{"x":44.042326638869696,"y":6.677936242523232,"z":-13.454012806495891},{"x":44.04242468491623,"y":6.723420380219188,"z":-13.458906987716682},{"x":44.0424709125293,"y":6.768870092887847,"z":-13.463782494518671},{"x":44.04246541278196,"y":6.814319697025528,"z":-13.468643024114995},{"x":44.042408147216975,"y":6.859789352696996,"z":-13.47349072192009},{"x":44.04229923132611,"y":6.905218327935858,"z":-13.478319124785369},{"x":44.0421386653243,"y":6.950639591073069,"z":-13.483131759425271},{"x":44.041926446078385,"y":6.99605847212724,"z":-13.487929195088729},{"x":44.04166261993039,"y":7.0414688416214455,"z":-13.492710789503976},{"x":44.041347189266496,"y":7.086874007370127,"z":-13.497476897199506},{"x":44.04098019415099,"y":7.132271210519126,"z":-13.502227234646272},{"x":44.04056166703232,"y":7.1776597145660945,"z":-13.506961732444967},{"x":44.04009162866119,"y":7.223040131198287,"z":-13.511680462029428},{"x":44.0395701131507,"y":7.2684117240624095,"z":-13.516383354497888},{"x":44.03899709512179,"y":7.313778475050472,"z":-13.521070828453439},{"x":44.038372744540474,"y":7.359129537676356,"z":-13.525741772804329},{"x":44.03769690326008,"y":7.404478330095193,"z":-13.530397577151716},{"x":44.03696976793168,"y":7.449813332245236,"z":-13.535037066070513},{"x":44.03619125110131,"y":7.495141896062162,"z":-13.539661000703116},{"x":44.03536141052831,"y":7.540461937632707,"z":-13.544269174838588},{"x":44.03448027260655,"y":7.585773395081271,"z":-13.548861589491661},{"x":44.033547863795526,"y":7.631076206595054,"z":-13.55343824570277},{"x":44.032564195553284,"y":7.6763709843113945,"z":-13.557999212265704},{"x":44.0315293871643,"y":7.721653623281385,"z":-13.562544084575952},{"x":44.030442879304594,"y":7.766948320625035,"z":-13.56707528921497},{"x":44.02930615529394,"y":7.812195716311478,"z":-13.571586905488626},{"x":44.02811766893243,"y":7.8574590898959,"z":-13.576085255172275},{"x":44.02687840109035,"y":7.9027013197074245,"z":-13.580566651077746},{"x":44.02558788934086,"y":7.947940536958712,"z":-13.585032898941789},{"x":44.02424632377638,"y":7.993170616154074,"z":-13.58948339850402},{"x":44.02285373144015,"y":8.03839149605363,"z":-13.593918151035112},{"x":44.02140965672639,"y":8.083617936185574,"z":-13.5983386035727},{"x":44.01991559765182,"y":8.128804739684762,"z":-13.602740354722009},{"x":44.01837011213348,"y":8.173996981313651,"z":-13.607127808993907},{"x":44.01677358903361,"y":8.219183147279251,"z":-13.611499847238553},{"x":44.01512639417536,"y":8.264353746526458,"z":-13.615855560015406},{"x":44.01342824075666,"y":8.309517474755113,"z":-13.62019579454157},{"x":44.01167922667165,"y":8.354672250338634,"z":-13.6245203564614},{"x":44.00987943174764,"y":8.399816665552086,"z":-13.628829118280645},{"x":44.008028829805866,"y":8.444952006656536,"z":-13.633122210016982},{"x":44.006127475045524,"y":8.490077539567368,"z":-13.637399568822214},{"x":44.00417542477654,"y":8.535192530407226,"z":-13.641661132770214},{"x":44.00217264843849,"y":8.580298265413978,"z":-13.64590703060862},{"x":44.00011817680379,"y":8.625416228403987,"z":-13.650139280093637},{"x":43.99801508366317,"y":8.670480379441447,"z":-13.654351706081266},{"x":43.99586034963444,"y":8.71555663774931,"z":-13.658550486539212},{"x":43.99365369384255,"y":8.760649651029947,"z":-13.662736037380975},{"x":43.991399114788415,"y":8.805679255638903,"z":-13.666900940144325},{"x":43.98909207559446,"y":8.850736936765225,"z":-13.671053668618393},{"x":43.98673546926737,"y":8.895766094252345,"z":-13.675189005142862},{"x":43.98432843897343,"y":8.940784168776958,"z":-13.679308567489667},{"x":43.981870569293235,"y":8.985799175591634,"z":-13.683413092880265},{"x":43.97936228083389,"y":9.03080365177554,"z":-13.687501904674201},{"x":43.97680356339922,"y":9.075798210374886,"z":-13.691575065498377},{"x":43.97419444326793,"y":9.120782791533149,"z":-13.695632576550432},{"x":43.97153506741219,"y":9.165755317288607,"z":-13.69967425806465},{"x":43.96882411707362,"y":9.210737926490744,"z":-13.703702096751265},{"x":43.96606526424653,"y":9.255670691732972,"z":-13.707710744383764},{"x":43.9632541661294,"y":9.300624854660061,"z":-13.711706565423338},{"x":43.96039437497872,"y":9.345543857185179,"z":-13.715684537424114},{"x":43.95748362541575,"y":9.390463958553964,"z":-13.719647883721823},{"x":43.95452190547545,"y":9.435385096560712,"z":-13.723596594199334},{"x":43.951510933043785,"y":9.480281659800536,"z":-13.727528426144055},{"x":43.948448839024884,"y":9.525181828672299,"z":-13.731445853329893},{"x":43.94533875398815,"y":9.570040500788306,"z":-13.735344956749012},{"x":43.942177416102936,"y":9.614905349281374,"z":-13.739229892428853},{"x":43.93896596079307,"y":9.659760179913581,"z":-13.743099256520404},{"x":43.935704166328584,"y":9.70460829370139,"z":-13.746953337991002},{"x":43.93239289732326,"y":9.74943820670651,"z":-13.75079115851458},{"x":43.92903139281439,"y":9.794260612872778,"z":-13.754613641892904},{"x":43.92561997818118,"y":9.839071421197593,"z":-13.75842044463467},{"x":43.92215863068257,"y":9.883871244852473,"z":-13.762211625751211},{"x":43.91864737770285,"y":9.928660025079031,"z":-13.765987186877604},{"x":43.91508592360841,"y":9.973441733185915,"z":-13.769747467303496},{"x":43.9114743915036,"y":10.018214966125807,"z":-13.773492352554868},{"x":43.90781457134417,"y":10.062958175443429,"z":-13.777220055386163},{"x":43.90410402911794,"y":10.107701524251926,"z":-13.780933098239743},{"x":43.90034372074955,"y":10.152433536885487,"z":-13.784630530089835},{"x":43.896533673984955,"y":10.19715415495022,"z":-13.788312352715172},{"x":43.89267397500845,"y":10.241862648861186,"z":-13.791978513002135},{"x":43.888764594816834,"y":10.28655963174216,"z":-13.79562906814544},{"x":43.88480556133518,"y":10.331245045383458,"z":-13.799264019995363},{"x":43.88079593227907,"y":10.375929568140862,"z":-13.802884238231693},{"x":43.87673858510432,"y":10.420581603368694,"z":-13.806487175346675},{"x":43.87262864604924,"y":10.465254770494203,"z":-13.810077157133412},{"x":43.86847339219184,"y":10.509870516288004,"z":-13.813647885857078},{"x":43.86426657612376,"y":10.554496541908232,"z":-13.817204796265687},{"x":43.86001021266193,"y":10.599111321109758,"z":-13.820746168539792},{"x":43.8557043930502,"y":10.64371412530513,"z":-13.824271951136204},{"x":43.85134901385585,"y":10.688306237744365,"z":-13.82778225140208},{"x":43.84694449903358,"y":10.732883577845888,"z":-13.831276755477942},{"x":43.84249048160388,"y":10.777450110928118,"z":-13.834755781373104},{"x":43.837987053800944,"y":10.822005108717772,"z":-13.83821927786451},{"x":43.83343431092815,"y":10.866547843328318,"z":-13.841667194658385},{"x":43.82883221200112,"y":10.91107892741001,"z":-13.845099585432852},{"x":43.82418085394525,"y":10.955597633361906,"z":-13.848516400393923},{"x":43.81948055029297,"y":11.000101224291866,"z":-13.851917437473954},{"x":43.81472788619153,"y":11.044621794906742,"z":-13.855305141992256},{"x":43.80993202217615,"y":11.089074221690854,"z":-13.85867305824989},{"x":43.80508392154218,"y":11.133542843361308,"z":-13.862027593815453},{"x":43.80018678059237,"y":11.177998131479374,"z":-13.865366514659017},{"x":43.79524048080801,"y":11.222441368227628,"z":-13.868689923649402},{"x":43.79024504909477,"y":11.266872496401149,"z":-13.8719978224496},{"x":43.7851995951973,"y":11.311299490041542,"z":-13.875290806507671},{"x":43.780107206536314,"y":11.355695521799289,"z":-13.878566899233622},{"x":43.77496119287146,"y":11.400118752283952,"z":-13.881830386705648},{"x":43.76977332995446,"y":11.444468091411245,"z":-13.885073861821494},{"x":43.76453257229126,"y":11.488838490464888,"z":-13.888304286263475},{"x":43.759243725860756,"y":11.53318908204928,"z":-13.891518678725507},{"x":43.753905547799256,"y":11.577530511627407,"z":-13.894717818414229},{"x":43.74851854431858,"y":11.62185870944406,"z":-13.897901416424615},{"x":43.74308208567336,"y":11.666178967039542,"z":-13.901069856617797},{"x":43.73759801349342,"y":11.71047652110399,"z":-13.904222092511624},{"x":43.73206454267068,"y":11.754766021961775,"z":-13.907359174850852},{"x":43.726481600428514,"y":11.799048079154025,"z":-13.910481147783944},{"x":43.72084894022803,"y":11.84332463799018,"z":-13.913588148080159},{"x":43.71516992558534,"y":11.887569587506427,"z":-13.916678355654069},{"x":43.709443343339906,"y":11.931792898237749,"z":-13.919752486107392},{"x":43.70366653300692,"y":11.97601521880348,"z":-13.922811978590689},{"x":43.69784098504018,"y":12.020225137064635,"z":-13.925856043508293},{"x":43.69196351567051,"y":12.064446628365467,"z":-13.928886324492794},{"x":43.686044138657564,"y":12.108604871048243,"z":-13.931897714676746},{"x":43.68007253520971,"y":12.152777244178155,"z":-13.93489550625102},{"x":43.67405311978215,"y":12.196930984415575,"z":-13.937877471545375},{"x":43.66798492495225,"y":12.24107337671182,"z":-13.940844109971417},{"x":43.66186704343506,"y":12.285211034178639,"z":-13.943795866470639},{"x":43.65570312582367,"y":12.329317888092332,"z":-13.946731008524987},{"x":43.64948957813851,"y":12.373419895620902,"z":-13.949651273094812},{"x":43.64322773132276,"y":12.417507663444736,"z":-13.952556040394924},{"x":43.63691752019817,"y":12.461581802817342,"z":-13.95544535695521},{"x":43.63055887666508,"y":12.505642924588438,"z":-13.95831926841724},{"x":43.62415211908832,"y":12.549688973972271,"z":-13.961177647077252},{"x":43.61769698627555,"y":12.593721894780758,"z":-13.96402062530531},{"x":43.6111936034988,"y":12.637740965190371,"z":-13.96684816212613},{"x":43.604642099059355,"y":12.681745463910888,"z":-13.969660217497825},{"x":43.59803969503855,"y":12.725753979174623,"z":-13.972457976196461},{"x":43.5913944450389,"y":12.769713189482454,"z":-13.975238064195278},{"x":43.58469733366187,"y":12.813682961521616,"z":-13.978004277426086},{"x":43.577954357668624,"y":12.857623964468265,"z":-13.98075414343465},{"x":43.57116208324827,"y":12.901558772823112,"z":-13.983489083668928},{"x":43.56431926439351,"y":12.945495309616875,"z":-13.986209585204598},{"x":43.557433629885836,"y":12.98938429471126,"z":-13.988912612356184},{"x":43.55049730116286,"y":13.033276228850616,"z":-13.991601288046438},{"x":43.543509293353154,"y":13.077177030751491,"z":-13.994275960491581},{"x":43.53648025734679,"y":13.121020162249101,"z":-13.99693259323564},{"x":43.5294001321263,"y":13.164868727902231,"z":-13.999575026080754},{"x":43.52227300246742,"y":13.208697412730114,"z":-14.002201732743108},{"x":43.515096731281766,"y":13.252519451444842,"z":-14.004813510713142},{"x":43.507873520507935,"y":13.296321501279717,"z":-14.007409569700316},{"x":43.500599211085934,"y":13.34012874453949,"z":-14.009991400304116},{"x":43.49328290358107,"y":13.383886674325018,"z":-14.012555804571733},{"x":43.485915657027014,"y":13.42764902286433,"z":-14.01510594375716},{"x":43.47850116289342,"y":13.471393824095818,"z":-14.017640536034417},{"x":43.47103786872082,"y":13.515130314426843,"z":-14.020160120318724},{"x":43.4635253246247,"y":13.558861089014393,"z":-14.02266484406839},{"x":43.45597112776738,"y":13.60254231506347,"z":-14.02515221623065},{"x":43.448362098911375,"y":13.646250215034355,"z":-14.027626577770564},{"x":43.44071235390959,"y":13.6899038291522,"z":-14.030083351919927},{"x":43.433011375556674,"y":13.7335634435741,"z":-14.032525945021707},{"x":43.42526455461151,"y":13.777198508369418,"z":-14.034952648613267},{"x":43.41746910068122,"y":13.820824876183803,"z":-14.037364351233116},{"x":43.409625021855064,"y":13.864442488970054,"z":-14.039761049011133},{"x":43.40173569425068,"y":13.908032746165494,"z":-14.042141728904223},{"x":43.393797920368314,"y":13.95161347830209,"z":-14.044507373255218},{"x":43.38581207595523,"y":13.995182642040637,"z":-14.046857872185285},{"x":43.37777438092967,"y":14.03876069684492,"z":-14.04919432072114},{"x":43.369700064284295,"y":14.082265528570955,"z":-14.051512340632614},{"x":43.361572985415116,"y":14.125784440291099,"z":-14.053816601492558},{"x":43.35339843761749,"y":14.169288920571637,"z":-14.05610558470356},{"x":43.345175067358845,"y":14.212786188399685,"z":-14.058379670922907},{"x":43.3369075447784,"y":14.256251725862237,"z":-14.060637588471126},{"x":43.32859138508577,"y":14.29970928293582,"z":-14.062880580498772},{"x":43.320227996590106,"y":14.343151532845157,"z":-14.065108270663043},{"x":43.311815995888516,"y":14.386585688543901,"z":-14.067321030334586},{"x":43.30335938953716,"y":14.42999121797232,"z":-14.069517822236527},{"x":43.294854614950346,"y":14.473386564831518,"z":-14.0716995886868},{"x":43.28630233614428,"y":14.516768371411068,"z":-14.073866162600588},{"x":43.27770428222306,"y":14.56012800342549,"z":-14.076017120572498},{"x":43.269058391575065,"y":14.603475969283705,"z":-14.078152990291917},{"x":43.26036547652764,"y":14.64680825504775,"z":-14.080273577381767},{"x":43.25162569956581,"y":14.69012414808457,"z":-14.08237885261562},{"x":43.242838957704976,"y":14.733424255117049,"z":-14.08446885110198},{"x":43.234003120766396,"y":14.776719069807362,"z":-14.08654407911685},{"x":43.225124288670585,"y":14.819978876120027,"z":-14.088603122555392},{"x":43.21619737037659,"y":14.863228671314145,"z":-14.090647182608153},{"x":43.207223061144084,"y":14.906465104736965,"z":-14.092676101983836},{"x":43.19819958912699,"y":14.94969668230265,"z":-14.094690277989278},{"x":43.189134292577,"y":14.992888450310106,"z":-14.09668809447922},{"x":43.18001738689593,"y":15.036087104960467,"z":-14.098671715999187},{"x":43.17085428747787,"y":15.079266913492686,"z":-14.100639956512328},{"x":43.161648693224436,"y":15.122410721259124,"z":-14.10259205102603},{"x":43.15239503840785,"y":15.165544798039177,"z":-14.10452919953087},{"x":43.143094753283776,"y":15.208662511218858,"z":-14.106451106288475},{"x":43.13374686666942,"y":15.251768409763578,"z":-14.108357976951352},{"x":43.12435096187871,"y":15.294864409226744,"z":-14.110249895884028},{"x":43.114911524287905,"y":15.337930085295234,"z":-14.112125975854493},{"x":43.10542398440826,"y":15.380986414885664,"z":-14.113987138873005},{"x":43.095888494003354,"y":15.424032683439558,"z":-14.115833352405636},{"x":43.08630960623091,"y":15.467048482910396,"z":-14.117663750569106},{"x":43.076682681946124,"y":15.5100547737625,"z":-14.11947923346281},{"x":43.06700935593594,"y":15.553044280839634,"z":-14.121279495784139},{"x":43.057289658277824,"y":15.596016952165774,"z":-14.123064540673678},{"x":43.04751838597695,"y":15.638995687611914,"z":-14.124835312574255},{"x":43.03771051736722,"y":15.681914857872842,"z":-14.126589124147312},{"x":43.027852485983985,"y":15.724834088122039,"z":-14.12832842890302},{"x":43.01794532741033,"y":15.767748726012377,"z":-14.130053028759146},{"x":43.00799619427814,"y":15.810627922413467,"z":-14.13176169294367},{"x":42.99799798017789,"y":15.853502419492822,"z":-14.133455654157158},{"x":42.987955136350976,"y":15.896353169560948,"z":-14.13513416255206},{"x":42.977864623223695,"y":15.939193216500069,"z":-14.136797734123991},{"x":42.967725207131316,"y":15.982027737788455,"z":-14.138446565824424},{"x":42.957547177904615,"y":16.024813499726143,"z":-14.140079009654919},{"x":42.947318913464855,"y":16.067599523128546,"z":-14.141696947259105},{"x":42.93704463790922,"y":16.110368090299655,"z":-14.143299705349573},{"x":42.92672090153383,"y":16.153133528373623,"z":-14.144887818545634},{"x":42.91635817643139,"y":16.195852650985362,"z":-14.1464596966394},{"x":42.905945094254704,"y":16.238572461266145,"z":-14.148017078842662},{"x":42.8954875588311,"y":16.281268731403042,"z":-14.149559081405169},{"x":42.884980465776664,"y":16.323962305198066,"z":-14.151086457356696},{"x":42.874433342998515,"y":16.36661461442034,"z":-14.152597837351795},{"x":42.863837522826465,"y":16.409260859479986,"z":-14.154094479334471},{"x":42.853195772659596,"y":16.45188989129225,"z":-14.155575991258967},{"x":42.84250795750014,"y":16.49450231049338,"z":-14.157042398321792},{"x":42.83177476295854,"y":16.537095457824982,"z":-14.15849361439985},{"x":42.820995066735264,"y":16.57967384521929,"z":-14.159929797467392},{"x":42.81016922157376,"y":16.622236116199517,"z":-14.16135090446574},{"x":42.799300088679864,"y":16.664771147284856,"z":-14.162756573225685},{"x":42.78838303786589,"y":16.707297125470667,"z":-14.164147409756144},{"x":42.77741638759058,"y":16.7498205003428,"z":-14.165523617520439},{"x":42.76641431346924,"y":16.792286553081794,"z":-14.16688344406966},{"x":42.75536119267228,"y":16.834755760499775,"z":-14.168228839123918},{"x":42.744259883100334,"y":16.877216998295726,"z":-14.169559439470126},{"x":42.73311825481149,"y":16.919640304822504,"z":-14.170874316817889},{"x":42.72192849816864,"y":16.96205554046112,"z":-14.17217440610341},{"x":42.71069319921972,"y":17.004452900872753,"z":-14.173459406666874},{"x":42.69940736196147,"y":17.046851168593427,"z":-14.174729882395292},{"x":42.6880862669357,"y":17.0891931440361,"z":-14.175984135115764},{"x":42.67670997675823,"y":17.13155344918792,"z":-14.177224379508852},{"x":42.66529769978424,"y":17.173860630554298,"z":-14.178448528928538},{"x":42.653835312858796,"y":17.216167207353482,"z":-14.179658115704642},{"x":42.64232720975842,"y":17.25845690267471,"z":-14.180852669759805},{"x":42.63077021956534,"y":17.300741331971082,"z":-14.182032516291848},{"x":42.61917128310517,"y":17.342995161747293,"z":-14.183196953270345},{"x":42.60752599574694,"y":17.385234547480138,"z":-14.184346434641737},{"x":42.59584084486291,"y":17.427436123792408,"z":-14.185480337727281},{"x":42.58411051154492,"y":17.469619279392,"z":-14.186599197843071},{"x":42.57232506261479,"y":17.51181955517338,"z":-14.187703943253021},{"x":42.560507325548755,"y":17.553955357056623,"z":-14.188792449543724},{"x":42.548636120946746,"y":17.596102342189027,"z":-14.189866682822055},{"x":42.53672366109918,"y":17.638217117925148,"z":-14.190925534240876},{"x":42.52475806130638,"y":17.68034165381971,"z":-14.191970055186124},{"x":42.51275976080483,"y":17.722404162513754,"z":-14.19299847938313},{"x":42.500704642949344,"y":17.764489238647208,"z":-14.19401287927147},{"x":42.48861530965921,"y":17.806518028940072,"z":-14.19501135837321},{"x":42.476474912627744,"y":17.848549250178948,"z":-14.19599532361428},{"x":42.46429203943252,"y":17.89055315429285,"z":-14.19696407712428},{"x":42.452062794952944,"y":17.932543243670963,"z":-14.19791793644275},{"x":42.4397885156255,"y":17.974514950558582,"z":-14.198856799571447},{"x":42.42746998876384,"y":18.01646564690835,"z":-14.199780613148185},{"x":42.41510496691346,"y":18.05840301627797,"z":-14.200689548921579},{"x":42.40269728363663,"y":18.100314122765766,"z":-14.201583332141077},{"x":42.39023912935961,"y":18.142225320100643,"z":-14.2024625226496},{"x":42.37774529443643,"y":18.184086983849227,"z":-14.20332609079206},{"x":42.365198327011036,"y":18.225957640791783,"z":-14.204175248566571},{"x":42.352613290678406,"y":18.26778704897173,"z":-14.205008979307344},{"x":42.339984449739866,"y":18.309594469078863,"z":-14.205827684061736},{"x":42.32730774175994,"y":18.351393350501134,"z":-14.206631626296717},{"x":42.31458649456773,"y":18.39317271135008,"z":-14.207420593980446},{"x":42.301820542628725,"y":18.434933144855805,"z":-14.208194602683415},{"x":42.28900537372477,"y":18.47668936634721,"z":-14.208953921173222},{"x":42.27615067802251,"y":18.51840986587309,"z":-14.209697982079891},{"x":42.26325634087267,"y":18.560095253658137,"z":-14.210426817512602},{"x":42.250312466179516,"y":18.601777560395366,"z":-14.211140990971533},{"x":42.23732423742498,"y":18.643440052679498,"z":-14.21184021200385},{"x":42.22429168610182,"y":18.68508268187161,"z":-14.212524484516983},{"x":42.21121464207497,"y":18.726706039925574,"z":-14.213193822614018},{"x":42.198093337198465,"y":18.768309437294292,"z":-14.213848219606612},{"x":42.184926990787005,"y":18.809895385741154,"z":-14.214487718334878},{"x":42.17171746012853,"y":18.851458075573635,"z":-14.21511223462744},{"x":42.15846294712784,"y":18.893003218241418,"z":-14.21572185927014},{"x":42.14516491143207,"y":18.934526287163756,"z":-14.216316530313318},{"x":42.131822361740724,"y":18.976030431729274,"z":-14.21689629787535},{"x":42.11843553229848,"y":19.01751496341683,"z":-14.217461156069252},{"x":42.10500403833953,"y":19.05898111054908,"z":-14.218011124980336},{"x":42.09152936143307,"y":19.1004243542754,"z":-14.218546149827764},{"x":42.07800966379563,"y":19.141850392535478,"z":-14.219066308470687},{"x":42.064446642077876,"y":19.18325407067206,"z":-14.219571540336648},{"x":42.05083823380886,"y":19.224641719185257,"z":-14.22006192595024},{"x":42.037188039797535,"y":19.266002449601455,"z":-14.220537342243706},{"x":42.023486807917486,"y":19.307364255064197,"z":-14.220998107110274},{"x":42.00975062499314,"y":19.348678659752327,"z":-14.221443688823832},{"x":41.995966412725714,"y":19.38998511820353,"z":-14.221874524435362},{"x":41.9821427046541,"y":19.4312581127271,"z":-14.22229035297196},{"x":41.968267575637555,"y":19.472533233637293,"z":-14.222691531723331},{"x":41.954356460718,"y":19.51376462350955,"z":-14.223077620501146},{"x":41.94039760589596,"y":19.55498722101625,"z":-14.223448956397965},{"x":41.92639533124864,"y":19.596188257003956,"z":-14.223805423246212},{"x":41.91234880318079,"y":19.637370225240016,"z":-14.224147046654569},{"x":41.89825804803033,"y":19.678533076056258,"z":-14.224473828929245},{"x":41.88412483978114,"y":19.71967168308356,"z":-14.224785734895876},{"x":41.869946591816515,"y":19.760793614938628,"z":-14.225082825890597},{"x":41.855726180185634,"y":19.801890575997316,"z":-14.225365046538842},{"x":41.84146100377374,"y":19.842970129570613,"z":-14.22563245341503},{"x":41.82715152536741,"y":19.884030956769497,"z":-14.22588503931646},{"x":41.812800654470564,"y":19.92506477455647,"z":-14.226122759893238},{"x":41.798405103525965,"y":19.966081038510787,"z":-14.22634567555556},{"x":41.78396600954522,"y":20.007076533115544,"z":-14.226553771264213},{"x":41.769482955460575,"y":20.048052475709873,"z":-14.226747056584973},{"x":41.75495709153936,"y":20.0890056558532,"z":-14.226925520856462},{"x":41.74038755350321,"y":20.129938556267543,"z":-14.227089179629482},{"x":41.725774144269735,"y":20.170851760345624,"z":-14.227238038295862},{"x":41.711115983751846,"y":20.211747744807873,"z":-14.227372107191057},{"x":41.69641854956059,"y":20.252611309048305,"z":-14.227491344917974},{"x":41.681670959280716,"y":20.293472704012455,"z":-14.227595839259093},{"x":41.666888971573,"y":20.33428834368334,"z":-14.22768548662306},{"x":41.652058697519934,"y":20.37509666519972,"z":-14.227760380721662},{"x":41.637186338681204,"y":20.415880590690318,"z":-14.227820488777231},{"x":41.62227008956859,"y":20.456645115718242,"z":-14.227865822857572},{"x":41.60731067017907,"y":20.497388302030153,"z":-14.227896383914933},{"x":41.59230811198643,"y":20.538110102551627,"z":-14.227912176018876},{"x":41.57726244650948,"y":20.578810470259143,"z":-14.227913203257451},{"x":41.5621734716599,"y":20.61948998692349,"z":-14.227899469400864},{"x":41.547041451324276,"y":20.66014797633025,"z":-14.227870978454048},{"x":41.53186641715712,"y":20.700784391606415,"z":-14.22782773456042},{"x":41.51664840085748,"y":20.74139918593032,"z":-14.22776974188178},{"x":41.501386252180836,"y":20.78199545072754,"z":-14.22769699835493},{"x":41.486082837631,"y":20.82256560677354,"z":-14.227609522478451},{"x":41.47073416137262,"y":20.863120273645396,"z":-14.227507294277286},{"x":41.45534619606533,"y":20.903643726268935,"z":-14.227390359465451},{"x":41.43991350427479,"y":20.944150340696243,"z":-14.22725868285914},{"x":41.42443754047161,"y":20.984636306233337,"z":-14.227112277590981},{"x":41.4089190540804,"y":21.025099696843924,"z":-14.226951154433406},{"x":41.39335735564292,"y":21.06554234398901,"z":-14.226775309845207},{"x":41.37774957070245,"y":21.1059717043304,"z":-14.22658470991653},{"x":41.36210637512096,"y":21.14636021478474,"z":-14.226379494635504},{"x":41.34641667362971,"y":21.1867365966398,"z":-14.22615952657767},{"x":41.33068412449023,"y":21.22709142191652,"z":-14.225924855527643},{"x":41.31490900253584,"y":21.267424019338907,"z":-14.225675489185525},{"x":41.29909134008927,"y":21.30773434279268,"z":-14.225411431969302},{"x":41.283230923555465,"y":21.34802296989264,"z":-14.22513268387588},{"x":41.267327536661426,"y":21.388290477150132,"z":-14.224839244009452},{"x":41.251381949747376,"y":21.428534947568473,"z":-14.224531130160207},{"x":41.235393949350815,"y":21.468756958912994,"z":-14.224208342379537},{"x":41.21936232461003,"y":21.508959577913174,"z":-14.223870858426432},{"x":41.20329009024401,"y":21.54913528766896,"z":-14.22351874634418},{"x":41.187174542715276,"y":21.589290889825925,"z":-14.223151951600663},{"x":41.171016458704905,"y":21.629424470242974,"z":-14.222770494125946},{"x":41.1548133549549,"y":21.66954219584137,"z":-14.222374315215808},{"x":41.13857280402008,"y":21.70962537974501,"z":-14.221963606594654},{"x":41.1222875475975,"y":21.749691995136775,"z":-14.221538191104544},{"x":41.10595861192681,"y":21.789739505802633,"z":-14.221098094327056},{"x":41.08958957514826,"y":21.82975917866848,"z":-14.220643417203446},{"x":41.073177938650524,"y":21.869757174108045,"z":-14.220174095887494},{"x":41.05672347590278,"y":21.909734064547177,"z":-14.219690126078895},{"x":41.04022365256782,"y":21.94969599465061,"z":-14.219191431915789},{"x":41.0236879770999,"y":21.989620005723097,"z":-14.218678308201984},{"x":41.0071067470437,"y":22.029529583464296,"z":-14.218150460385472},{"x":40.99048358134569,"y":22.06941601299409,"z":-14.217608003158718},{"x":40.97381825437698,"y":22.109279867268917,"z":-14.21705093253914},{"x":40.95711105685397,"y":22.149120482569746,"z":-14.216479261630218},{"x":40.9403615017164,"y":22.188939048801437,"z":-14.21589297681499},{"x":40.92356987909608,"y":22.22873490203761,"z":-14.21529209100565},{"x":40.90673648185976,"y":22.268507379617265,"z":-14.21467661804097},{"x":40.88986108123088,"y":22.30825705322631,"z":-14.214046552891855},{"x":40.87294318293139,"y":22.347985109604352,"z":-14.213401879514716},{"x":40.855978334417784,"y":22.387701971904818,"z":-14.212742424800338},{"x":40.838978682196384,"y":22.427379258699972,"z":-14.212068666644974},{"x":40.82193980935109,"y":22.467027409588074,"z":-14.21138044400532},{"x":40.80485433246789,"y":22.50666360818935,"z":-14.210677459068942},{"x":40.78772810364188,"y":22.54627426924735,"z":-14.209959951571358},{"x":40.770559561336285,"y":22.585863037295507,"z":-14.209227859632367},{"x":40.7533490008292,"y":22.625429251023068,"z":-14.208481197932805},{"x":40.73609323332475,"y":22.664980229111535,"z":-14.207719826866859},{"x":40.718796028969344,"y":22.704507325979634,"z":-14.206943912281236},{"x":40.701467664572924,"y":22.74398719882641,"z":-14.206153930171629},{"x":40.68409068598362,"y":22.78345967148858,"z":-14.205349091189003},{"x":40.66667103258384,"y":22.82291119952976,"z":-14.204529664687142},{"x":40.64921144388574,"y":22.862335612359914,"z":-14.203695783110987},{"x":40.63170951398443,"y":22.901738377312046,"z":-14.202847335298147},{"x":40.614165268980244,"y":22.941119446531545,"z":-14.201984323680566},{"x":40.59658119694293,"y":22.980473271266213,"z":-14.201106874481598},{"x":40.57894253460262,"y":23.01983280068681,"z":-14.200214241412315},{"x":40.56128687649715,"y":23.05911429511802,"z":-14.199308342553403},{"x":40.54357750989243,"y":23.098399569338792,"z":-14.198387309015637},{"x":40.525826530409915,"y":23.137661698259095,"z":-14.19745175976152},{"x":40.50803424527798,"y":23.176900026595877,"z":-14.196501713573891},{"x":40.490200964420694,"y":23.21611390040477,"z":-14.195537190158662},{"x":40.47231837652888,"y":23.25532154485642,"z":-14.194557734685977},{"x":40.45440988015198,"y":23.29447176175292,"z":-14.193564639446334},{"x":40.43645269680127,"y":23.333614441648166,"z":-14.192556651648742},{"x":40.41845380985195,"y":23.37273431411706,"z":-14.191534158035372},{"x":40.40041380961968,"y":23.411830117469865,"z":-14.190497194416064},{"x":40.38233301025317,"y":23.45090120000876,"z":-14.189445781959215},{"x":40.36421031780071,"y":23.489949946395196,"z":-14.188379859283458},{"x":40.34604689032563,"y":23.528973882716283,"z":-14.18729949677079},{"x":40.32784304606115,"y":23.567972359396492,"z":-14.186204716998253},{"x":40.30959740111243,"y":23.60694836428781,"z":-14.18509543923017},{"x":40.291310267208026,"y":23.645901244606517,"z":-14.183971683818667},{"x":40.27298310055633,"y":23.684827927558462,"z":-14.182833543333837},{"x":40.254614509488746,"y":23.72373139716295,"z":-14.181680934381106},{"x":40.23620509658035,"y":23.76261039808455,"z":-14.180513896996661},{"x":40.21775432002188,"y":23.80146609507492,"z":-14.179332399034566},{"x":40.19926278510476,"y":23.84029723422449,"z":-14.178136481469359},{"x":40.18073052494728,"y":23.87910377169491,"z":-14.176926149192997},{"x":40.162157283320674,"y":23.917886267031317,"z":-14.175701387936174},{"x":40.143543381504415,"y":23.956644072485567,"z":-14.17446222135276},{"x":40.12488856204397,"y":23.995377747023934,"z":-14.17320863475692},{"x":40.10619285626147,"y":24.03408724598724,"z":-14.171940632433225},{"x":40.08745629552278,"y":24.07277252476148,"z":-14.1706582186837},{"x":40.06867569198048,"y":24.11144015680122,"z":-14.169361174459024},{"x":40.04986161479587,"y":24.15006843962229,"z":-14.168050235797624},{"x":40.031002973741806,"y":24.18868019067059,"z":-14.166724635190565},{"x":40.01209653411364,"y":24.227281958913004,"z":-14.165384137413568},{"x":39.99316383522021,"y":24.26582985560453,"z":-14.16403027879521},{"x":39.97418399410286,"y":24.30436648160572,"z":-14.162661575118697},{"x":39.955162930868184,"y":24.34287977831701,"z":-14.16127844910396},{"x":39.93610156498628,"y":24.38136790172074,"z":-14.159880969490594},{"x":39.91699963228853,"y":24.419831407544144,"z":-14.158469119304005},{"x":39.89785716456999,"y":24.458270251635117,"z":-14.157042903019871},{"x":39.87867419366847,"y":24.49668438988745,"z":-14.155602325131138},{"x":39.85945105128429,"y":24.535073180396765,"z":-14.154147412931557},{"x":39.84018717035023,"y":24.573437775185916,"z":-14.152678125606728},{"x":39.820883183119356,"y":24.611776934948715,"z":-14.151194513493266},{"x":39.80153882177978,"y":24.650091213608814,"z":-14.149696558369712},{"x":39.78215381597112,"y":24.688381163733997,"z":-14.148184241132316},{"x":39.762729105018565,"y":24.72664495216811,"z":-14.146657637426532},{"x":39.743262295306245,"y":24.764887303142576,"z":-14.145116560154612},{"x":39.72375797263021,"y":24.803099235802478,"z":-14.143561375260742},{"x":39.70421252670271,"y":24.841287856365867,"z":-14.14199179847712},{"x":39.684626595256226,"y":24.879451928653026,"z":-14.14040788206},{"x":39.665000514945284,"y":24.91759081368221,"z":-14.138809655049029},{"x":39.64533431811695,"y":24.95570446790148,"z":-14.137197122143846},{"x":39.62562803716033,"y":24.993792847805366,"z":-14.13557028806123},{"x":39.60588170450668,"y":25.031855909934517,"z":-14.133929157535075},{"x":39.586095352629236,"y":25.06989361087607,"z":-14.132273735316414},{"x":39.56626901404319,"y":25.107905907263447,"z":-14.130604026173378},{"x":39.546402411162,"y":25.145893347944558,"z":-14.128920008513873},{"x":39.526496196230156,"y":25.183854704948867,"z":-14.127221739670569},{"x":39.50654978096031,"y":25.221791119022857,"z":-14.125509171484083},{"x":39.48656350817973,"y":25.259701954815867,"z":-14.123782335168254},{"x":39.46653741061363,"y":25.297587169191747,"z":-14.12204123557666},{"x":39.44645992716356,"y":25.335468562239182,"z":-14.120284860152484},{"x":39.42635645261903,"y":25.3732982611313,"z":-14.118515434405094},{"x":39.40621798007005,"y":25.411093370166576,"z":-14.116732182370999},{"x":39.386034797925305,"y":25.44887212995409,"z":-14.114934245780143},{"x":39.365809751585154,"y":25.4866291799956,"z":-14.113121874367353},{"x":39.34554412678555,"y":25.524362115627135,"z":-14.111295182857386},{"x":39.32524048823109,"y":25.562066185456644,"z":-14.109454404938727},{"x":39.30489633601727,"y":25.599746054563155,"z":-14.107599316437593},{"x":39.28451265286603,"y":25.63739991464754,"z":-14.105730008212914},{"x":39.26408915283089,"y":25.67502831008728,"z":-14.103846455776013},{"x":39.24362330940217,"y":25.71263589057682,"z":-14.10194842561071},{"x":39.22312378832738,"y":25.750206773200304,"z":-14.100036725639164},{"x":39.202581669355176,"y":25.787757341694665,"z":-14.098110527888174},{"x":39.18200018302339,"y":25.825281686780635,"z":-14.096170134806288},{"x":39.161379362679824,"y":25.86277976601688,"z":-14.094215551501552},{"x":39.14071891881846,"y":25.900252121823037,"z":-14.092246752246156},{"x":39.12001888296934,"y":25.937698710726742,"z":-14.09026374151202},{"x":39.099279610865835,"y":25.975118905235814,"z":-14.08826655508737},{"x":39.07850113602055,"y":26.012512663093872,"z":-14.086255198147773},{"x":39.05768316656295,"y":26.049880525400273,"z":-14.084229644140144},{"x":39.03682606024779,"y":26.08722186592861,"z":-14.082189929572893},{"x":39.01592952402443,"y":26.124537225114402,"z":-14.080136027480544},{"x":38.99499358967717,"y":26.161826559750256,"z":-14.078067942436963},{"x":38.97401861697919,"y":26.199089244879847,"z":-14.075985711670365},{"x":38.9530046396887,"y":26.236325238525037,"z":-14.073889340457153},{"x":38.93195103319536,"y":26.27353566081489,"z":-14.071778767924636},{"x":38.910851560737385,"y":26.310731499876418,"z":-14.069653365238198},{"x":38.889727035679584,"y":26.347876133074013,"z":-14.067515235982452},{"x":38.868556381370155,"y":26.385006679292886,"z":-14.06536225349199},{"x":38.84734655638274,"y":26.422110902037023,"z":-14.06319512187844},{"x":38.82609792518143,"y":26.45918817934141,"z":-14.061013880047073},{"x":38.80481018883993,"y":26.496239048278955,"z":-14.058818498972983},{"x":38.783483379562995,"y":26.533263466085312,"z":-14.056608983399101},{"x":38.76211752959758,"y":26.57026139003992,"z":-14.054385338085279},{"x":38.74071300607834,"y":26.607232199901645,"z":-14.052147602893799},{"x":38.719269507740314,"y":26.64417643137862,"z":-14.049895747977212},{"x":38.69777799241432,"y":26.681109615108628,"z":-14.047628818835344},{"x":38.676265716138296,"y":26.717984988873226,"z":-14.04534969822685},{"x":38.65470582508544,"y":26.75484865384228,"z":-14.043055549038456},{"x":38.633107090199594,"y":26.79168557112359,"z":-14.04074729991135},{"x":38.61146920543358,"y":26.82849627352951,"z":-14.03842491930488},{"x":38.589793219125156,"y":26.86527899302852,"z":-14.036088521367837},{"x":38.568078148139044,"y":26.90203541296503,"z":-14.033738001756838},{"x":38.54632436372476,"y":26.938764915839695,"z":-14.031373401817918},{"x":38.524529511094784,"y":26.97547147494541,"z":-14.028994465357494},{"x":38.50270078547518,"y":27.012143001514318,"z":-14.026601980751735},{"x":38.48082934562538,"y":27.048794364254043,"z":-14.0241949808202},{"x":38.45892343237672,"y":27.0854117678005,"z":-14.021774373868215},{"x":38.43697691701909,"y":27.122005481485406,"z":-14.01933948542941},{"x":38.4149915421582,"y":27.15857259783169,"z":-14.016890508611294},{"x":38.39295734016406,"y":27.19512964029302,"z":-14.01442632738756},{"x":38.37090571997194,"y":27.231624582446045,"z":-14.01195046280085},{"x":38.34880533991212,"y":27.268109367712775,"z":-14.009459404391196},{"x":38.32666622993975,"y":27.304567386443384,"z":-14.00695427699661},{"x":38.30448911582437,"y":27.34099745632552,"z":-14.004435164104454},{"x":38.28227333684122,"y":27.37740067533566,"z":-14.001901992024868},{"x":38.26001962130549,"y":27.413775862857772,"z":-13.999354845163117},{"x":38.23771334231127,"y":27.45014685334233,"z":-13.996792041665286},{"x":38.2153908273578,"y":27.48645447870779,"z":-13.994217761526134},{"x":38.19302805352184,"y":27.522737941058466,"z":-13.991629248590451},{"x":38.17062118281121,"y":27.559003431191247,"z":-13.98902605479375},{"x":38.14817584213479,"y":27.595241817685654,"z":-13.986408831160837},{"x":38.12569276742229,"y":27.63145192504681,"z":-13.983777664847645},{"x":38.10317128845163,"y":27.66763484513419,"z":-13.981132478762506},{"x":38.080611790298924,"y":27.703789969775645,"z":-13.978473319249234},{"x":38.058014306532314,"y":27.73991725767193,"z":-13.975800191602092},{"x":38.03537851615592,"y":27.776017232352544,"z":-13.973113058963024},{"x":38.01270480620347,"y":27.81208928700269,"z":-13.970411968387376},{"x":37.989993210365675,"y":27.84813338045595,"z":-13.967696925219084},{"x":37.967243762373336,"y":27.884149471591257,"z":-13.964967934818551},{"x":37.944456138956404,"y":27.92013808246934,"z":-13.962224959512737},{"x":37.92163072975115,"y":27.95609860809568,"z":-13.959468047304602},{"x":37.89876756861024,"y":27.992031007482648,"z":-13.956697203604113},{"x":37.875866330562694,"y":28.027935801582103,"z":-13.953912390127538},{"x":37.85291518519532,"y":28.06383147704627,"z":-13.951112161965241},{"x":37.82995047239456,"y":28.099661283260495,"z":-13.948300961294601},{"x":37.80693591905034,"y":28.135481888343726,"z":-13.945474356433746},{"x":37.783883781214016,"y":28.171274161256544,"z":-13.942633846497644},{"x":37.76079373108832,"y":28.207038621089396,"z":-13.939779392185866},{"x":37.737666163491156,"y":28.242774666520734,"z":-13.936911043393339},{"x":37.71450074949798,"y":28.278482815891547,"z":-13.934028760413371},{"x":37.69129788521716,"y":28.314162468805232,"z":-13.93113259361316},{"x":37.66805724059868,"y":28.349814142850697,"z":-13.928222502879974},{"x":37.644779213039115,"y":28.385437238559245,"z":-13.925298539052969},{"x":37.621463105854524,"y":28.421032830051207,"z":-13.922360615487793},{"x":37.5981100481466,"y":28.456599203793534,"z":-13.919408875527624},{"x":37.57471970942333,"y":28.49213687713243,"z":-13.916443278905914},{"x":37.55129138951476,"y":28.527646921781397,"z":-13.913463737712416},{"x":37.5278258551412,"y":28.56312818374001,"z":-13.91047035030996},{"x":37.5043209297667,"y":28.598583953764688,"z":-13.907462839060361},{"x":37.48078254296274,"y":28.63400530819332,"z":-13.904441964770605},{"x":37.457204831954265,"y":28.669401088660656,"z":-13.901406977185262},{"x":37.433589672162874,"y":28.704768477969957,"z":-13.898358117492064},{"x":37.40993709649148,"y":28.74010743478754,"z":-13.895295390789284},{"x":37.38624750938673,"y":28.7754173647962,"z":-13.892218850506717},{"x":37.362520945624595,"y":28.810698228035623,"z":-13.889128502431406},{"x":37.33875669463031,"y":28.84595108892251,"z":-13.886024254862582},{"x":37.314955534264286,"y":28.88117480153393,"z":-13.882906210249917},{"x":37.29111712553603,"y":28.916369877346742,"z":-13.879774325240549},{"x":37.267241501595116,"y":28.95153627528439,"z":-13.876628605031641},{"x":37.243328695632485,"y":28.986673954312735,"z":-13.873469054836882},{"x":37.21937911654839,"y":29.021782323436586,"z":-13.87029572972984},{"x":37.195392046873934,"y":29.056862442147626,"z":-13.867108535488509},{"x":37.171368271852074,"y":29.091913169967906,"z":-13.863907577280782},{"x":37.14730744916952,"y":29.12693501603848,"z":-13.86069281054269},{"x":37.12320961222217,"y":29.161927939539403,"z":-13.857464240570149},{"x":37.099075173076,"y":29.196891351868622,"z":-13.85422192360857},{"x":37.07490340854187,"y":29.231826308378665,"z":-13.850965763338383},{"x":37.05069473017654,"y":29.26673222011572,"z":-13.847695815820089},{"x":37.02643890074743,"y":29.30162380218058,"z":-13.84441069359253},{"x":37.0021667662331,"y":29.33645674671665,"z":-13.841114580502197},{"x":36.977845640009306,"y":29.371278008556285,"z":-13.837803043370444},{"x":36.95348467122801,"y":29.406074420375955,"z":-13.834477320455127},{"x":36.92909995517295,"y":29.44082305174068,"z":-13.831139615105924},{"x":36.90467050177183,"y":29.475553844030713,"z":-13.827787057919517},{"x":36.88020475424295,"y":29.510254764043356,"z":-13.824420804250654},{"x":36.855701979162234,"y":29.544926859595233,"z":-13.821040754012822},{"x":36.831162978856355,"y":29.579569003103412,"z":-13.817647018695526},{"x":36.80658701763714,"y":29.614182240695747,"z":-13.814239497376635},{"x":36.781974513985325,"y":29.648765988735246,"z":-13.810818248688475},{"x":36.757325501908,"y":29.683320207045288,"z":-13.807383278172665},{"x":36.73264001545266,"y":29.717844855492494,"z":-13.803934591387156},{"x":36.70791808870695,"y":29.75233989398679,"z":-13.80047219390611},{"x":36.6831597557988,"y":29.78680528248131,"z":-13.796996091320022},{"x":36.6583607698422,"y":29.821246919254676,"z":-13.793505685984135},{"x":36.63353361843947,"y":29.855647488894725,"z":-13.790002738218545},{"x":36.608664319882564,"y":29.890026381812085,"z":-13.786485277437516},{"x":36.58376187371441,"y":29.924371152522166,"z":-13.782954575833855},{"x":36.55882123855488,"y":29.958688766562084,"z":-13.779409920087641},{"x":36.533833814066874,"y":29.992991004326505,"z":-13.775850082350708},{"x":36.50882157727612,"y":30.02724770975945,"z":-13.772278194582476},{"x":36.4837826467863,"y":30.061461565977055,"z":-13.768693999526702},{"x":36.45869701352136,"y":30.095659913675682,"z":-13.765094633377492},{"x":36.43357531411301,"y":30.129828210561342,"z":-13.761481617626787},{"x":36.408417188150224,"y":30.163966952378587,"z":-13.75785490104223},{"x":36.38322385519196,"y":30.198074493643322,"z":-13.754214660415029},{"x":36.3579937688056,"y":30.232152935229,"z":-13.75056067310834},{"x":36.3327273569366,"y":30.266201701002988,"z":-13.746893001295403},{"x":36.30742544716399,"y":30.300219683211797,"z":-13.743211765892289},{"x":36.28208290378255,"y":30.33421377327338,"z":-13.739516218363125},{"x":36.25670850651933,"y":30.368172198767347,"z":-13.735807639307929},{"x":36.23130310547534,"y":30.402093869981385,"z":-13.732086158088084},{"x":36.20585676660374,"y":30.43599205553768,"z":-13.72835032022111},{"x":36.18037470450492,"y":30.46985979282286,"z":-13.724600889453725},{"x":36.154856954150375,"y":30.503697042695475,"z":-13.720837871717396},{"x":36.129303149250916,"y":30.537504296322957,"z":-13.717061213589703},{"x":36.10371372501374,"y":30.571280983460788,"z":-13.713270979974551},{"x":36.078088314087175,"y":30.605027594435942,"z":-13.709467117052256},{"x":36.052427352901866,"y":30.638743560015367,"z":-13.705649690188856},{"x":36.0267304730457,"y":30.672429369682877,"z":-13.701818645167709},{"x":36.00099245405665,"y":30.70609184640335,"z":-13.697973201611152},{"x":35.97522949608576,"y":30.739709832739152,"z":-13.694115782864609},{"x":35.94942546724578,"y":30.773304406629855,"z":-13.690243976829903},{"x":35.92358565512434,"y":30.806868664680383,"z":-13.686358574702977},{"x":35.897710499810614,"y":30.840402040706454,"z":-13.682459643234402},{"x":35.87178335014628,"y":30.873926045751297,"z":-13.678544666434721},{"x":35.84585348616671,"y":30.90737704233803,"z":-13.674621093266609},{"x":35.81987169650603,"y":30.940818588867298,"z":-13.670681486177171},{"x":35.7938542945712,"y":30.974229621288995,"z":-13.666728311265487},{"x":35.76780131423379,"y":31.00761009969873,"z":-13.662761574063289},{"x":35.74171319922129,"y":31.040959460985484,"z":-13.658781342702444},{"x":35.71558957480029,"y":31.074278189520694,"z":-13.654787560590822},{"x":35.68943047496473,"y":31.10756624552524,"z":-13.65078023330898},{"x":35.663235933750066,"y":31.140823589260943,"z":-13.646759366453853},{"x":35.637006397298556,"y":31.174049659678598,"z":-13.642725029076473},{"x":35.6107414887851,"y":31.207244939425873,"z":-13.638677163795224},{"x":35.584441242367255,"y":31.240409388890132,"z":-13.634615776255803},{"x":35.55810569224334,"y":31.27354296850038,"z":-13.630540872120193},{"x":35.53173404403604,"y":31.306646677620204,"z":-13.626452328485852},{"x":35.5053288178767,"y":31.33971736008073,"z":-13.62235053678991},{"x":35.47888756223601,"y":31.372758093115557,"z":-13.618235117000726},{"x":35.45241155607839,"y":31.40576728041479,"z":-13.614106268355341},{"x":35.42590000239497,"y":31.43874591911604,"z":-13.609963866951851},{"x":35.399353768156686,"y":31.471692934356433,"z":-13.605808048620553},{"x":35.37277205420498,"y":31.50460932143725,"z":-13.60163868864124},{"x":35.34615572982139,"y":31.537494007501042,"z":-13.597455923727182},{"x":35.31950441247062,"y":31.570347470402666,"z":-13.593259694332207},{"x":35.292817717434076,"y":31.603170186110464,"z":-13.58904994007677},{"x":35.266093578300335,"y":31.635964687253225,"z":-13.584826334083978},{"x":35.23932739501956,"y":31.668736581733008,"z":-13.580588145480585},{"x":35.21253559257119,"y":31.701465772687243,"z":-13.576337976102705},{"x":35.18572287919861,"y":31.73414660811334,"z":-13.572076583408885},{"x":35.15886233051898,"y":31.766811909820063,"z":-13.567799689372858},{"x":35.131966609318155,"y":31.799446227376603,"z":-13.56350930449147},{"x":35.105036172025684,"y":31.832049008737194,"z":-13.55920550175496},{"x":35.078071053571726,"y":31.86462021508208,"z":-13.554888287117468},{"x":35.051071288927,"y":31.897159807633205,"z":-13.55055766654932},{"x":35.02404201126232,"y":31.929661624569643,"z":-13.546214465901416},{"x":34.996967535751736,"y":31.962144506221463,"z":-13.54185616304948},{"x":34.96986361626535,"y":31.99458953393277,"z":-13.537485291716575},{"x":34.942725189775324,"y":32.02700279217853,"z":-13.533101038073255},{"x":34.91555229145416,"y":32.05938424239041,"z":-13.528703408170676},{"x":34.88834495651427,"y":32.09173384604247,"z":-13.524292408076098},{"x":34.86110107953333,"y":32.124054101191746,"z":-13.519867695929081},{"x":34.833826260465045,"y":32.156338373404864,"z":-13.515430182061209},{"x":34.806515397023865,"y":32.188592711978615,"z":-13.51097903752318},{"x":34.77916980735089,"y":32.22081555514826,"z":-13.506514476580882},{"x":34.75178565237805,"y":32.253011411079065,"z":-13.502035870867447},{"x":34.724375877050505,"y":32.28516508160698,"z":-13.497545339490637},{"x":34.696927175967126,"y":32.317292192727216,"z":-13.493040704834735},{"x":34.669444318142865,"y":32.34938714762283,"z":-13.488522747842183},{"x":34.6419273391521,"y":32.381449908146124,"z":-13.483991474725453},{"x":34.614375841577704,"y":32.41348093903486,"z":-13.479446820230223},{"x":34.586790293021245,"y":32.44547969838593,"z":-13.474888861663734},{"x":34.559170295063865,"y":32.477446650022024,"z":-13.470317533384005},{"x":34.53151631647172,"y":32.50938125312063,"z":-13.465732913150786},{"x":34.503810985291,"y":32.54130350342401,"z":-13.461132114364133},{"x":34.47610612478781,"y":32.573153762341896,"z":-13.456523749479667},{"x":34.44834561957692,"y":32.604996590096476,"z":-13.451898490841833},{"x":34.42055912778746,"y":32.6367979187274,"z":-13.44726127402643},{"x":34.392734906040914,"y":32.66857120609507,"z":-13.442610141371361},{"x":34.364876478864815,"y":32.70031241425946,"z":-13.437945680553382},{"x":34.33697730436367,"y":32.732028971365494,"z":-13.433266793652917},{"x":34.30905714587766,"y":32.76369843623605,"z":-13.428576797491276},{"x":34.281097187981196,"y":32.79534217815321,"z":-13.4238725348132},{"x":34.253102724633266,"y":32.826954182654035,"z":-13.419154893746992},{"x":34.22507466991946,"y":32.85853341758882,"z":-13.414424028321998},{"x":34.19701306005287,"y":32.89007984548588,"z":-13.409679945007854},{"x":34.16891704803102,"y":32.921594418480105,"z":-13.404922500626302},{"x":34.14078755126794,"y":32.953076107588124,"z":-13.400151850508282},{"x":34.11262460609571,"y":32.98452487546563,"z":-13.395368001171489},{"x":34.08442736243885,"y":33.01594167131669,"z":-13.390570808235191},{"x":34.05619674102894,"y":33.04732546933625,"z":-13.385760428330059},{"x":34.02793233403265,"y":33.07867672453734,"z":-13.380936792148315},{"x":33.99964262782252,"y":33.109986055566296,"z":-13.376101351197628},{"x":33.971302748265416,"y":33.14128096048248,"z":-13.371249851090454},{"x":33.94293764047663,"y":33.172533864955376,"z":-13.366386558593907},{"x":33.91453888800654,"y":33.20375407304294,"z":-13.361510034163897},{"x":33.88612261533607,"y":33.23492391829825,"z":-13.356623052685691},{"x":33.85764014186671,"y":33.2660967350663,"z":-13.351717236489277},{"x":33.82914156134363,"y":33.297217645100694,"z":-13.346801206907651},{"x":33.800610824274905,"y":33.32830424252211,"z":-13.341872203016292},{"x":33.77204303124865,"y":33.3593618571999,"z":-13.336929377598763},{"x":33.74343820493003,"y":33.39039043837896,"z":-13.3319727317846},{"x":33.71481077070098,"y":33.42137436526306,"z":-13.327004767748546},{"x":33.686144579811256,"y":33.452331134553596,"z":-13.322022685430854},{"x":33.65744506235542,"y":33.483254863043555,"z":-13.317027426382891},{"x":33.62871225376831,"y":33.514145512553924,"z":-13.312018996773588},{"x":33.599946641700285,"y":33.545002560460794,"z":-13.306997481772573},{"x":33.571147357840964,"y":33.57582693815969,"z":-13.30196272981906},{"x":33.54229857358424,"y":33.6066355265338,"z":-13.296911967594312},{"x":33.513449271978395,"y":33.63737607573033,"z":-13.29185377627473},{"x":33.484550995471174,"y":33.66810027721457,"z":-13.286779666978303},{"x":33.45561918756459,"y":33.6987916544268,"z":-13.281692344871221},{"x":33.42665433771768,"y":33.729449686554034,"z":-13.276591895840076},{"x":33.39765648169276,"y":33.760074335745465,"z":-13.271478326183693},{"x":33.36862565529297,"y":33.79066556419133,"z":-13.266351642217087},{"x":33.33956189436217,"y":33.821223334123175,"z":-13.26121185027148},{"x":33.31046020377291,"y":33.8517528795432,"z":-13.256058065186249},{"x":33.28133525460539,"y":33.88223882629877,"z":-13.250892886597263},{"x":33.25217290503546,"y":33.91269599396361,"z":-13.245713808658252},{"x":33.22297730580577,"y":33.94312003011882,"z":-13.240521566564247},{"x":33.193748950845304,"y":33.97351041848014,"z":-13.235316247979403},{"x":33.164487876242795,"y":34.00386712152596,"z":-13.230097859332234},{"x":33.135197341289995,"y":34.03418676923645,"z":-13.224866983016467},{"x":33.10586725170499,"y":34.06447979733848,"z":-13.219621815162284},{"x":33.07650777312504,"y":34.09473569420776,"z":-13.214364172167329},{"x":33.04711571863971,"y":34.12495775502704,"z":-13.209093484575918},{"x":33.01769066204243,"y":34.155146416432544,"z":-13.20380967579952},{"x":32.98825069547335,"y":34.18528317623508,"z":-13.198516000548116},{"x":32.95874353583571,"y":34.215421494013434,"z":-13.193203052383646},{"x":32.929220611977364,"y":34.24550878153411,"z":-13.187880083829938},{"x":32.899670866476235,"y":34.275556382917145,"z":-13.182545109560673},{"x":32.87007807757022,"y":34.30558077514699,"z":-13.177195199316976},{"x":32.840457609964844,"y":34.335566349624614,"z":-13.171833128314676},{"x":32.8108193026847,"y":34.36550321102205,"z":-13.166460684390241},{"x":32.78111984892085,"y":34.39543505173788,"z":-13.161070013067546},{"x":32.75140356289764,"y":34.42531716717975,"z":-13.155669151988418},{"x":32.72165276350523,"y":34.45516738030594,"z":-13.15025489269743},{"x":32.69187028838922,"y":34.48498283784064,"z":-13.14482775088606},{"x":32.662055707258986,"y":34.51476397209874,"z":-13.139387648322142},{"x":32.63220905693414,"y":34.54451074630383,"z":-13.133934591725405},{"x":32.60232990468335,"y":34.574223590158816,"z":-13.128468501878208},{"x":32.572418285898564,"y":34.60390246534886,"z":-13.122989384922738},{"x":32.54247470660892,"y":34.63354686824426,"z":-13.11749733337735},{"x":32.51251003898713,"y":34.66314607156319,"z":-13.111994344964137},{"x":32.482490871287354,"y":34.69273303929197,"z":-13.106474280139212},{"x":32.452451631527715,"y":34.72227380472804,"z":-13.100943465188257},{"x":32.42237868904449,"y":34.75178180441056,"z":-13.095399394197306},{"x":32.39227444046065,"y":34.78125468218132,"z":-13.089842508450763},{"x":32.362139398047866,"y":34.81069194118088,"z":-13.084272902997126},{"x":32.33197028338533,"y":34.84009677914681,"z":-13.078689971484343},{"x":32.301770448383415,"y":34.86946592457465,"z":-13.073094333637838},{"x":32.2715375579098,"y":34.89880164673172,"z":-13.06748555667162},{"x":32.241273547160006,"y":34.92810206483807,"z":-13.061863999234653},{"x":32.2109775028563,"y":34.9573680630589,"z":-13.056229491705679},{"x":32.18064993750671,"y":34.986599144790944,"z":-13.050582129228998},{"x":32.150301383967665,"y":35.01578519221598,"z":-13.044923876559505},{"x":32.11989848333512,"y":35.04495824524143,"z":-13.03924851059309},{"x":32.08947514366294,"y":35.07408573031288,"z":-13.033562356217969},{"x":32.05903143655181,"y":35.10316764942001,"z":-13.02786543436244},{"x":32.028533422143234,"y":35.13223638473093,"z":-13.022151390469917},{"x":31.99801511361775,"y":35.16125948003398,"z":-13.016426592392431},{"x":31.96746458217705,"y":35.19024831137565,"z":-13.01068880613965},{"x":31.936882823636594,"y":35.21920193082588,"z":-13.004938218393725},{"x":31.90626987578226,"y":35.248120302612215,"z":-12.99917483626144},{"x":31.87562481346962,"y":35.27700429758802,"z":-12.993398485264763},{"x":31.844948153604506,"y":35.30585342400248,"z":-12.987609262339323},{"x":31.814244274771443,"y":35.33466357491664,"z":-12.981807994850987},{"x":31.783500669973453,"y":35.3634464703172,"z":-12.975992318333832},{"x":31.752729920189875,"y":35.39219031682885,"z":-12.970164610810361},{"x":31.72192771984377,"y":35.420899146890484,"z":-12.964324058070446},{"x":31.691093621137384,"y":35.44957337330736,"z":-12.958470574730555},{"x":31.66022862904594,"y":35.478212058506706,"z":-12.95260435123057},{"x":31.629336179332977,"y":35.50681202524269,"z":-12.946726041636406},{"x":31.598404173896093,"y":35.53538445683547,"z":-12.940833342364662},{"x":31.56744526971979,"y":35.56391764711568,"z":-12.93492866275345},{"x":31.536458056191243,"y":35.592412915726534,"z":-12.92901173589048},{"x":31.50543332004978,"y":35.620878721172794,"z":-12.923080801276164},{"x":31.47438034735068,"y":35.64930653005834,"z":-12.91713763246242},{"x":31.44329674236502,"y":35.677698543025606,"z":-12.911181771792847},{"x":31.4121835210098,"y":35.70605383516227,"z":-12.905213414226969},{"x":31.381035343137867,"y":35.73437726259507,"z":-12.899231534373648},{"x":31.34987818866348,"y":35.76264525467846,"z":-12.893241126623128},{"x":31.31864990604134,"y":35.790914139510285,"z":-12.88723023654906},{"x":31.287412728730242,"y":35.8191275247398,"z":-12.881210835406128},{"x":31.256140236967436,"y":35.84730932273882,"z":-12.875177838119509},{"x":31.224838846096194,"y":35.875453741929604,"z":-12.869132481063643},{"x":31.19350663074903,"y":35.903562516422255,"z":-12.86307439274838},{"x":31.162143628241942,"y":35.931635609760754,"z":-12.857003580071561},{"x":31.130749382892194,"y":35.959673425348946,"z":-12.850919954363073},{"x":31.099325411216764,"y":35.98767460735838,"z":-12.844823809306083},{"x":31.067868789574536,"y":36.015641754955986,"z":-12.838714577154727},{"x":31.03638251652936,"y":36.04357219634951,"z":-12.83259283956537},{"x":31.004865147644416,"y":36.0714672113305,"z":-12.826458315578119},{"x":30.973317214472324,"y":36.09932632500738,"z":-12.820311108169284},{"x":30.94173925049402,"y":36.12714906481151,"z":-12.81415132112149},{"x":30.91012930938719,"y":36.154937139644254,"z":-12.807978574186137},{"x":30.878489411869463,"y":36.18268876724764,"z":-12.801793261291591},{"x":30.846824072637542,"y":36.210400001143135,"z":-12.795596266343434},{"x":30.815117913186267,"y":36.23808427993828,"z":-12.78938457801959},{"x":30.783385888446784,"y":36.26572852544956,"z":-12.783161123665744},{"x":30.751623560717995,"y":36.29333661390463,"z":-12.77692503414055},{"x":30.719830967896293,"y":36.320908509423056,"z":-12.770676316571393},{"x":30.68800764829752,"y":36.34844460797761,"z":-12.764414879757217},{"x":30.65615413858916,"y":36.375944440808595,"z":-12.758140828809939},{"x":30.62427047679068,"y":36.40340797216035,"z":-12.751854170905935},{"x":30.59235720197821,"y":36.43083473623791,"z":-12.745555012171051},{"x":30.560432406904443,"y":36.45820923696482,"z":-12.739246929049251},{"x":30.528435948000663,"y":36.4855829739684,"z":-12.73291803151073},{"x":30.496430548854786,"y":36.512902224257765,"z":-12.726580718131473},{"x":30.4643951855543,"y":36.54018499144426,"z":-12.72023083274759},{"x":30.43232939303758,"y":36.56743166720864,"z":-12.71386828272189},{"x":30.400233208229483,"y":36.59464221434567,"z":-12.707493074759055},{"x":30.36810666809867,"y":36.62181659568942,"z":-12.701105215580645},{"x":30.335950819075116,"y":36.648953923224425,"z":-12.694704912920107},{"x":30.303764185465177,"y":36.676055437943056,"z":-12.688291872625223},{"x":30.271547308616068,"y":36.70312067677332,"z":-12.68186620177016},{"x":30.239300731752778,"y":36.73014917901216,"z":-12.675428008225714},{"x":30.207024493431383,"y":36.757140909443756,"z":-12.668977299381282},{"x":30.174724209212343,"y":36.784091185078914,"z":-12.662515198826421},{"x":30.14238115702735,"y":36.81101560201241,"z":-12.656037958767882},{"x":30.110030385660078,"y":36.837885005769415,"z":-12.649552599821938},{"x":30.077618106095166,"y":36.86474403878489,"z":-12.643048336760463},{"x":30.04519159114361,"y":36.89155347792825,"z":-12.636534649445942},{"x":30.01274379069164,"y":36.91831921540377,"z":-12.630010128641429},{"x":29.980249788924397,"y":36.945061776080586,"z":-12.623469761995718},{"x":29.94773814969904,"y":36.971757635142936,"z":-12.616919296303436},{"x":29.915188518090318,"y":36.99842351175951,"z":-12.61035463153809},{"x":29.882615731277614,"y":37.025047240956106,"z":-12.60377875866412},{"x":29.850008590900764,"y":37.05163797564346,"z":-12.597189417196313},{"x":29.817380433896805,"y":37.078184845676596,"z":-12.590589302601483},{"x":29.78470928662334,"y":37.10470571020565,"z":-12.583973968518885},{"x":29.752015666818206,"y":37.131183891337386,"z":-12.577347566494778},{"x":29.71929244463884,"y":37.15762517764752,"z":-12.570708653143047},{"x":29.686540171723447,"y":37.18402911911561,"z":-12.56405733991109},{"x":29.653756830463703,"y":37.21039733367383,"z":-12.557393216197744},{"x":29.62094502810499,"y":37.236727717171455,"z":-12.550716811174777},{"x":29.588103260002278,"y":37.2630214727336,"z":-12.544027818264311},{"x":29.55523259396437,"y":37.28927773976691,"z":-12.537326454317773},{"x":29.52233255341407,"y":37.315496894670034,"z":-12.530612621732146},{"x":29.489402660039822,"y":37.34167931150378,"z":-12.523886222152628},{"x":29.456443984444352,"y":37.367824133365055,"z":-12.517147473633628},{"x":29.423455531521768,"y":37.393932143935714,"z":-12.51039617213409},{"x":29.390445104668792,"y":37.419997180268716,"z":-12.503633915850656},{"x":29.357391514282902,"y":37.446035949270886,"z":-12.496856361984374},{"x":29.324315508841945,"y":37.47203208059726,"z":-12.490067761728644},{"x":29.291209876706876,"y":37.49799125347892,"z":-12.483266636338685},{"x":29.258075694035313,"y":37.52391261842182,"z":-12.476453206268404},{"x":29.224912480650627,"y":37.549796546828375,"z":-12.469627372339135},{"x":29.19171975466382,"y":37.57564340774487,"z":-12.46278903462485},{"x":29.15849807415432,"y":37.60145275955033,"z":-12.455938307334815},{"x":29.125247477719764,"y":37.62722456661857,"z":-12.449075197826737},{"x":29.091967482290723,"y":37.65295919631479,"z":-12.442199605653279},{"x":29.05866125811213,"y":37.67865419720213,"z":-12.435312185706772},{"x":29.02532153431842,"y":37.70431516724989,"z":-12.428411433416867},{"x":28.99195513712441,"y":37.729936839872245,"z":-12.42149876017452},{"x":28.958559493315168,"y":37.755521189578566,"z":-12.414573632790697},{"x":28.92513516432433,"y":37.7810677792442,"z":-12.407636166925984},{"x":28.891682189048364,"y":37.80657657353109,"z":-12.40068637005539},{"x":28.858200081683215,"y":37.83204793586651,"z":-12.393724140519302},{"x":28.824689405090286,"y":37.85748143106115,"z":-12.386749594598378},{"x":28.791150198293693,"y":37.88287702390124,"z":-12.37976273981785},{"x":28.75758197432678,"y":37.90823507611898,"z":-12.372763474000491},{"x":28.723985297472456,"y":37.93355515446579,"z":-12.36575191404579},{"x":28.690359679992472,"y":37.95883761954121,"z":-12.35872795743216},{"x":28.65670568711496,"y":37.984082039392455,"z":-12.351691721471138},{"x":28.623025996799207,"y":38.00928640665647,"z":-12.34464376614411},{"x":28.58931167581528,"y":38.034457391163436,"z":-12.337582220633612},{"x":28.555572262885835,"y":38.05958785750556,"z":-12.330509081122731},{"x":28.52180410188635,"y":38.08468053027153,"z":-12.323423581384132},{"x":28.48800723094898,"y":38.10973537278989,"z":-12.316325728529131},{"x":28.45418221812095,"y":38.134751957009804,"z":-12.30921564110219},{"x":28.420328572601544,"y":38.15973063898168,"z":-12.302093215209261},{"x":28.38644686337229,"y":38.18467099195982,"z":-12.294958569804676},{"x":28.35253659887304,"y":38.20957337085275,"z":-12.287811600652557},{"x":28.318597817458674,"y":38.23443773918975,"z":-12.280652314950157},{"x":28.284631089507553,"y":38.25926367218659,"z":-12.27348083226574},{"x":28.250635922326033,"y":38.28405152303469,"z":-12.266297047851857},{"x":28.216613420037596,"y":38.30880048113697,"z":-12.259101194413304},{"x":28.182560957505906,"y":38.33351244641746,"z":-12.251892715763057},{"x":28.148481237814778,"y":38.358185447604725,"z":-12.244672183011247},{"x":28.11437376802176,"y":38.38281983744236,"z":-12.237439491290582},{"x":28.080237519067044,"y":38.40741635090977,"z":-12.230194421528353},{"x":28.0460735982199,"y":38.43197418192657,"z":-12.22293720782256},{"x":28.011882045482675,"y":38.45649329623918,"z":-12.21566785808424},{"x":27.977661829430243,"y":38.480974425244774,"z":-12.208386152173281},{"x":27.943413523810396,"y":38.50541714887713,"z":-12.20109221113739},{"x":27.909137704073377,"y":38.52982104958592,"z":-12.193786156785864},{"x":27.874834410391017,"y":38.55418609328642,"z":-12.186467997096866},{"x":27.840502070815933,"y":38.57851338691012,"z":-12.179137395733814},{"x":27.806142873090177,"y":38.60280137205726,"z":-12.171794818888532},{"x":27.771755244119575,"y":38.62705115387832,"z":-12.164439929702205},{"x":27.737342453495206,"y":38.65126042397231,"z":-12.157073427106543},{"x":27.70289700011623,"y":38.67543444564951,"z":-12.14969370413098},{"x":27.66842700369185,"y":38.69956750819268,"z":-12.142302498849752},{"x":27.633927652211902,"y":38.72366297646972,"z":-12.134898779141688},{"x":27.599401682557406,"y":38.74771892942101,"z":-12.127483131264933},{"x":27.564848055184363,"y":38.771736085897636,"z":-12.12005533138879},{"x":27.53026680946729,"y":38.79571441036539,"z":-12.112615387105766},{"x":27.495657984825495,"y":38.81965386733084,"z":-12.105163306025698},{"x":27.461021078845494,"y":38.843554794805854,"z":-12.097698978965779},{"x":27.426357214383916,"y":38.867416409825104,"z":-12.09022264700576},{"x":27.39166588952098,"y":38.89123905110889,"z":-12.082734201181443},{"x":27.356948230027527,"y":38.915021940163896,"z":-12.075233883893967},{"x":27.32220047352901,"y":38.938767642152825,"z":-12.067720881126723},{"x":27.287427004812606,"y":38.9624731497975,"z":-12.060196139666603},{"x":27.252625690051662,"y":38.98613991233824,"z":-12.052659197248445},{"x":27.21779765720296,"y":39.009767154589746,"z":-12.045110297259603},{"x":27.182956574591604,"y":39.03334563239057,"z":-12.037552404955914},{"x":27.148058328403344,"y":39.05690515217997,"z":-12.029975947078901},{"x":27.113148201606208,"y":39.08041509926521,"z":-12.022390748657962},{"x":27.078210971565404,"y":39.103885754889575,"z":-12.014793505734714},{"x":27.043246131590365,"y":39.12731745000973,"z":-12.007184107134472},{"x":27.008257003014613,"y":39.15070795613912,"z":-11.999563275305297},{"x":26.973235419709425,"y":39.17406271759434,"z":-11.991929230255241},{"x":26.93818962801411,"y":39.19737622035549,"z":-11.984283767730266},{"x":26.903116384429588,"y":39.22065061940917,"z":-11.976626179942821},{"x":26.868016276648817,"y":39.24388551536135,"z":-11.968956594186073},{"x":26.832889344931942,"y":39.26708087350639,"z":-11.961275018397455},{"x":26.79773672847293,"y":39.290235936233096,"z":-11.953581701094905},{"x":26.7625546211118,"y":39.313353198601796,"z":-11.94587580809707},{"x":26.727346358736533,"y":39.336430455281395,"z":-11.938158068539213},{"x":26.692111982958473,"y":39.35946767364215,"z":-11.930428490971718},{"x":26.65685043341266,"y":39.38246553895411,"z":-11.92268684194889},{"x":26.621583253931703,"y":39.40541004155862,"z":-11.914937855257923},{"x":26.586246522273733,"y":39.428342707356585,"z":-11.907167480915861},{"x":26.550904792483074,"y":39.4512215820997,"z":-11.89938990586517},{"x":26.515536600739793,"y":39.47406060475354,"z":-11.891600411909657},{"x":26.4801408818512,"y":39.496860452499966,"z":-11.883798763341943},{"x":26.444719334242965,"y":39.51962002197737,"z":-11.875985333474645},{"x":26.40927033870927,"y":39.542340344262804,"z":-11.868159764186597},{"x":26.37379559608037,"y":39.56502031991935,"z":-11.860322429905834},{"x":26.33829403941557,"y":39.58766062309375,"z":-11.852473094094677},{"x":26.302765708485758,"y":39.61026121778721,"z":-11.844611764410788},{"x":26.26721064310877,"y":39.63282206804134,"z":-11.836738448529724},{"x":26.231632772575505,"y":39.65534067924946,"z":-11.828854016307341},{"x":26.196022136559765,"y":39.67782333980711,"z":-11.820956259003385},{"x":26.160388221146693,"y":39.70026404342221,"z":-11.813047278348316},{"x":26.124727732544212,"y":39.722664861748584,"z":-11.805126343092239},{"x":26.08904126795307,"y":39.74502541036939,"z":-11.797193584880867},{"x":26.053328311073113,"y":39.767346003527265,"z":-11.78924888797199},{"x":26.017588902044217,"y":39.78962660555232,"z":-11.78129226016522},{"x":25.981823639338597,"y":39.81186683408923,"z":-11.773323833694617},{"x":25.946053793447053,"y":39.834053504476316,"z":-11.76534835151766},{"x":25.910214041278316,"y":39.85622707244767,"z":-11.757351243940235},{"x":25.874369786526866,"y":39.878347011218445,"z":-11.74934709638022},{"x":25.83852335257347,"y":39.900411984580785,"z":-11.741336438034121},{"x":25.802603687758324,"y":39.9224656636511,"z":-11.733303385948496},{"x":25.76668136558294,"y":39.94446465194361,"z":-11.725263714134613},{"x":25.730732915543534,"y":39.96642336782164,"z":-11.71721217517199},{"x":25.694758378195754,"y":39.98834177598786,"z":-11.709148777020427},{"x":25.658758355788876,"y":40.01021950029953,"z":-11.701073653671179},{"x":25.622732328064345,"y":40.03205684773158,"z":-11.692986687459609},{"x":25.586680335715144,"y":40.05385378311242,"z":-11.684887886398721},{"x":25.550602419480388,"y":40.07561027131238,"z":-11.676777258519328},{"x":25.514498620145353,"y":40.09732627724338,"z":-11.668654811870068},{"x":25.478368978541983,"y":40.119001765858954,"z":-11.660520554517518},{"x":25.442213535547996,"y":40.1406367021547,"z":-11.652374494546017},{"x":25.40603289631147,"y":40.16223071484868,"z":-11.644216767305359},{"x":25.369825973720378,"y":40.18378444231291,"z":-11.63604712659622},{"x":25.33359337264879,"y":40.205297512695644,"z":-11.627865707628185},{"x":25.297335699477184,"y":40.2267695568056,"z":-11.619672646331196},{"x":25.26105186504143,"y":40.24820120921338,"z":-11.611467695505707},{"x":25.224742475450075,"y":40.2695921001567,"z":-11.60325099094192},{"x":25.188407571903685,"y":40.29094219492549,"z":-11.595022540849088},{"x":25.152047195648574,"y":40.31225145885219,"z":-11.586782353454245},{"x":25.115661955104887,"y":40.333519526240146,"z":-11.578530565651176},{"x":25.0792507577153,"y":40.35474702530715,"z":-11.570266928579269},{"x":25.042813643784164,"y":40.37593391953885,"z":-11.561991449995537},{"x":25.006351790076412,"y":40.39707951426908,"z":-11.553704396019583},{"x":24.96986467058007,"y":40.418184105456035,"z":-11.54540564614414},{"x":24.933351757896133,"y":40.43924798646394,"z":-11.537095079183233},{"x":24.896813661799097,"y":40.46027079382605,"z":-11.528772832660998},{"x":24.860250423903622,"y":40.48125249321441,"z":-11.520438914947393},{"x":24.82366208587002,"y":40.5021930503439,"z":-11.512093334430158},{"x":24.78704925974605,"y":40.52309210583999,"z":-11.503736229728771},{"x":24.750409705562227,"y":40.54395092537117,"z":-11.495367088237751},{"x":24.71374574613056,"y":40.56476817358872,"z":-11.486986439081072},{"x":24.677056852953516,"y":40.58554414151109,"z":-11.478594160504098},{"x":24.640346498434717,"y":40.606276860180344,"z":-11.470191046417082},{"x":24.60360386086571,"y":40.626972422047004,"z":-11.46177461793758},{"x":24.56683984517044,"y":40.64762466532012,"z":-11.453347370610802},{"x":24.530050490060706,"y":40.668235811432496,"z":-11.444908396111924},{"x":24.49323698286667,"y":40.68880518484441,"z":-11.436457965662743},{"x":24.4563976462542,"y":40.709333711167496,"z":-11.427995693046064},{"x":24.41953366799689,"y":40.729820715611865,"z":-11.419521849692188},{"x":24.38264509030787,"y":40.75026616440723,"z":-11.411036444203907},{"x":24.345731955445494,"y":40.77067002382711,"z":-11.402539485201782},{"x":24.308793730827933,"y":40.79103257667828,"z":-11.39403084887141},{"x":24.271831608229363,"y":40.811353155675064,"z":-11.385510808603053},{"x":24.234843328782443,"y":40.83163298983896,"z":-11.376978842404698},{"x":24.197830659587304,"y":40.851871096146795,"z":-11.36843535632725},{"x":24.1607994057269,"y":40.8720643029384,"z":-11.359881690444043},{"x":24.123732321956233,"y":40.892221991196,"z":-11.351313859395269},{"x":24.08664673863429,"y":40.91233471304876,"z":-11.342735866015095},{"x":24.04953578122702,"y":40.932406196876975,"z":-11.334146120409889},{"x":24.012400645609915,"y":40.95243578305425,"z":-11.325544897975622},{"x":23.975240796539907,"y":40.9724237487505,"z":-11.316932073525164},{"x":23.9380568540643,"y":40.992369748913035,"z":-11.3083077895241},{"x":23.9008482823558,"y":41.01227405945512,"z":-11.29967192048189},{"x":23.86361512325787,"y":41.03213664519912,"z":-11.291024474743937},{"x":23.82638232899769,"y":41.0519442368321,"z":-11.282371251278454},{"x":23.78907636980383,"y":41.0717358875967,"z":-11.273695156324441},{"x":23.75177086071807,"y":41.09147247680196,"z":-11.26501330110271},{"x":23.714440933440287,"y":41.111167203618585,"z":-11.25631990342813},{"x":23.677086630053687,"y":41.13082003308252,"z":-11.247614971738326},{"x":23.639707992690163,"y":41.15043093027217,"z":-11.238898514489561},{"x":23.60230971402926,"y":41.169997430527054,"z":-11.230171625576721},{"x":23.564879048090603,"y":41.18952618226181,"z":-11.221431328924648},{"x":23.527427662735075,"y":41.209011074877516,"z":-11.212680346258736},{"x":23.489952694718802,"y":41.228453594266554,"z":-11.20391800822625},{"x":23.452468753226604,"y":41.24784618238022,"z":-11.195147732607765},{"x":23.414931018273286,"y":41.26721198338122,"z":-11.186359029255257},{"x":23.37738497867887,"y":41.286527485519926,"z":-11.177562542489012},{"x":23.33981319502028,"y":41.30580167856139,"z":-11.168754188932521},{"x":23.30221921057647,"y":41.32503273205865,"z":-11.159934797814339},{"x":23.26460014955516,"y":41.344222105737664,"z":-11.151103693352987},{"x":23.226957806443757,"y":41.36336887025052,"z":-11.142261295263253},{"x":23.189292224925488,"y":41.382472993233485,"z":-11.133407612723826},{"x":23.15160227824758,"y":41.40153503352566,"z":-11.124542379561438},{"x":23.11388859380792,"y":41.42055465986924,"z":-11.115665741843696},{"x":23.07616820511237,"y":41.4395233057473,"z":-11.106781710799597},{"x":23.03839018310513,"y":41.458466533658104,"z":-11.097878287697998},{"x":23.000609061851385,"y":41.477356955585414,"z":-11.088968318886868},{"x":22.962797336221485,"y":41.4962083409307,"z":-11.080045320384242},{"x":22.924965606735906,"y":41.51501538429289,"z":-11.07111179127608},{"x":22.88711039733002,"y":41.53377980871697,"z":-11.062166910297154},{"x":22.84925878999972,"y":41.552488234896074,"z":-11.053217080755456},{"x":22.81132971137096,"y":41.57118066474848,"z":-11.044243128128562},{"x":22.773404321244517,"y":41.5898170284647,"z":-11.035264244686122},{"x":22.73545562405085,"y":41.60841063746067,"z":-11.02627404486731},{"x":22.697485430316895,"y":41.62696059578227,"z":-11.017272956598692},{"x":22.659490249977242,"y":41.64546859593595,"z":-11.008260151298531},{"x":22.621468354557756,"y":41.66393545599477,"z":-10.999235216453725},{"x":22.583428041972542,"y":41.68235713551442,"z":-10.990200120345518},{"x":22.54536050849525,"y":41.70073788670141,"z":-10.98115277102718},{"x":22.50727228806321,"y":41.71907453819559,"z":-10.972094719449084},{"x":22.469160473340477,"y":41.73736848092319,"z":-10.963025273346124},{"x":22.431025698314215,"y":41.755619396733636,"z":-10.953944582094078},{"x":22.392868006702432,"y":41.77382725214554,"z":-10.944852654762263},{"x":22.35468625854065,"y":41.791992576080474,"z":-10.935749218155674},{"x":22.316487009695376,"y":41.81011224562744,"z":-10.926635834750464},{"x":22.278258462726505,"y":41.828191842050025,"z":-10.917509688726327},{"x":22.240012507135884,"y":41.84622572710637,"z":-10.908373616448275},{"x":22.201732588587692,"y":41.86422168184347,"z":-10.899223661297107},{"x":22.16343772236535,"y":41.88217074645843,"z":-10.890064365729225},{"x":22.125118465210445,"y":41.90007734727048,"z":-10.880893471415742},{"x":22.08677664050108,"y":41.91794061590752,"z":-10.871711412951026},{"x":22.048412292389877,"y":41.93576051928938,"z":-10.862518199573081},{"x":22.01002962732369,"y":41.95353509971848,"z":-10.85331483874262},{"x":21.971617392623006,"y":41.971269549679235,"z":-10.844098630645707},{"x":21.93318335946101,"y":41.98896025491328,"z":-10.834871436771076},{"x":21.894728168595513,"y":42.00660691173281,"z":-10.825633410000115},{"x":21.856250674603245,"y":42.024210035799264,"z":-10.816384274140496},{"x":21.817750325818988,"y":42.04176986578212,"z":-10.807123895136789},{"x":21.779228358640125,"y":42.059285825267175,"z":-10.797852569007816},{"x":21.740682431698232,"y":42.07675896396796,"z":-10.788569730717251},{"x":21.702114377892773,"y":42.094188434776804,"z":-10.77927581988828},{"x":21.663530214749503,"y":42.111571518150804,"z":-10.76997228640832},{"x":21.62491147068648,"y":42.12891651024742,"z":-10.760654674129247},{"x":21.586277901859212,"y":42.14621451380476,"z":-10.751327746517378},{"x":21.547618796546004,"y":42.16347032021743,"z":-10.741988917348424},{"x":21.508944368166606,"y":42.180679364189274,"z":-10.73264065288742},{"x":21.470237307353376,"y":42.19784932717503,"z":-10.72327876744641},{"x":21.431513218467284,"y":42.21497326205898,"z":-10.713907032036838},{"x":21.392766759442484,"y":42.232053527522325,"z":-10.704524153579943},{"x":21.353997974426147,"y":42.24909008920311,"z":-10.695130141175127},{"x":21.31520870735305,"y":42.2660821255885,"z":-10.685725440375489},{"x":21.276394803661336,"y":42.28303144059721,"z":-10.676309042289287},{"x":21.23755990712236,"y":42.29993642561118,"z":-10.666881828942335},{"x":21.19870286225951,"y":42.31679757124484,"z":-10.657443518555194},{"x":21.15983453253202,"y":42.33361017071646,"z":-10.64799675030433},{"x":21.120930322676944,"y":42.35038484231436,"z":-10.638535544943293},{"x":21.082001086853694,"y":42.367116856154524,"z":-10.629062536487352},{"x":21.04305649595213,"y":42.38380204796676,"z":-10.619580077150308},{"x":21.004088775403243,"y":42.40044374512329,"z":-10.61008627378401},{"x":20.965102185494374,"y":42.41704011697289,"z":-10.600582163012849},{"x":20.92609014482401,"y":42.433593949272364,"z":-10.591066138920207},{"x":20.887058723459567,"y":42.45010264887705,"z":-10.58153968011206},{"x":20.848004952981235,"y":42.46656746026354,"z":-10.572002060989254},{"x":20.808931895378947,"y":42.482987081324936,"z":-10.562454028062637},{"x":20.76983235240984,"y":42.499364517400004,"z":-10.552893820460794},{"x":20.73071421632194,"y":42.51569644398691,"z":-10.543323365688744},{"x":20.691573305283693,"y":42.531984596016684,"z":-10.533741639587547},{"x":20.65241147680054,"y":42.54822818442472,"z":-10.524149095106665},{"x":20.61322998676026,"y":42.564426678398476,"z":-10.514546038780662},{"x":20.57402343550972,"y":42.58058229193025,"z":-10.50493114539656},{"x":20.534806395956064,"y":42.59668901966649,"z":-10.495307988313344},{"x":20.49554984972568,"y":42.61275875087779,"z":-10.485669444702312},{"x":20.456280484742436,"y":42.6287805256423,"z":-10.476022062644613},{"x":20.41699835779187,"y":42.644754340482535,"z":-10.4663658581991},{"x":20.377678654492666,"y":42.660690255911135,"z":-10.456694729075197},{"x":20.338355383878497,"y":42.676574475168984,"z":-10.447017037794486},{"x":20.29899157859573,"y":42.69242191338604,"z":-10.437323685674107},{"x":20.25961580718133,"y":42.70822103276879,"z":-10.427621703013756},{"x":20.220228127320247,"y":42.72397183228512,"z":-10.417911106394037},{"x":20.180805494375075,"y":42.739683503361924,"z":-10.408186212523656},{"x":20.141363141194574,"y":42.755349934101986,"z":-10.398450774274583},{"x":20.101904157580694,"y":42.77096989347597,"z":-10.38870555380539},{"x":20.062422507396064,"y":42.78654576126145,"z":-10.378949059512218},{"x":20.022930414426973,"y":42.802072717178014,"z":-10.36918431194884},{"x":19.983398692638037,"y":42.817562205130486,"z":-10.35940409215109},{"x":19.943854792887585,"y":42.833003432895005,"z":-10.349615186838538},{"x":19.904289015366345,"y":42.84840018835926,"z":-10.339815195182934},{"x":19.864703844821864,"y":42.86375148983432,"z":-10.33000473098064},{"x":19.82509749795821,"y":42.879058015474286,"z":-10.32018335089478},{"x":19.78548040005965,"y":42.89431573963155,"z":-10.310353640197564},{"x":19.745823289373128,"y":42.909535898460334,"z":-10.30050833580123},{"x":19.706167131000708,"y":42.9247027576168,"z":-10.29065760524811},{"x":19.66647837369937,"y":42.93982915372058,"z":-10.280793115762465},{"x":19.62675704840727,"y":42.95491501141782,"z":-10.270914868238574},{"x":19.587035615193727,"y":42.969948002897695,"z":-10.261030934224337},{"x":19.547273133576038,"y":42.984943607832086,"z":-10.251131126068831},{"x":19.50751555236353,"y":42.99988449011463,"z":-10.241226881687082},{"x":19.467709650521346,"y":43.014790631005354,"z":-10.231304942371386},{"x":19.42789711575991,"y":43.02964637451133,"z":-10.221375693080466},{"x":19.388064522460503,"y":43.04445674290314,"z":-10.211435787205598},{"x":19.348226025188826,"y":43.05921648629006,"z":-10.201488757888399},{"x":19.30833750624621,"y":43.07394190480616,"z":-10.191523586124152},{"x":19.268443175409125,"y":43.08861663012953,"z":-10.181551310268784},{"x":19.228544325021314,"y":43.103240230715784,"z":-10.171572258020236},{"x":19.188597399538253,"y":43.11782863152979,"z":-10.161575532867944},{"x":19.148639904081104,"y":43.13236808239695,"z":-10.151570513665721},{"x":19.108665748053568,"y":43.146860809449315,"z":-10.141555676622826},{"x":19.06868113341689,"y":43.16130457369833,"z":-10.13153257637856},{"x":19.028655350055555,"y":43.17571043066518,"z":-10.121493511543198},{"x":18.98861919992064,"y":43.190067254407644,"z":-10.111446202548839},{"x":18.94856719854712,"y":43.204377022752794,"z":-10.101389274389275},{"x":18.908488923959546,"y":43.21864343892108,"z":-10.09132010827247},{"x":18.868412766966703,"y":43.23285641050688,"z":-10.081245837675816},{"x":18.828278375656257,"y":43.24703729455625,"z":-10.071151288216464},{"x":18.788143116022816,"y":43.2611657651938,"z":-10.061050880806482},{"x":18.747988545443192,"y":43.275248337063225,"z":-10.050939977132883},{"x":18.707815328733695,"y":43.289284763634896,"z":-10.04081874315051},{"x":18.667635247317584,"y":43.30327093905492,"z":-10.030690147857364},{"x":18.627405119078112,"y":43.317221844894746,"z":-10.020543301868786},{"x":18.587171924726608,"y":43.33112114412764,"z":-10.01039004846405},{"x":18.546930784477023,"y":43.344970561528186,"z":-10.00022916049364},{"x":18.506644031644896,"y":43.358783016852996,"z":-9.990051123558572},{"x":18.466372317553912,"y":43.372537713617845,"z":-9.97987125861738},{"x":18.426038979451935,"y":43.3862608067741,"z":-9.969670186041457},{"x":18.385721414226573,"y":43.399925929852984,"z":-9.959467475215643},{"x":18.345355290314938,"y":43.413554884480384,"z":-9.949246848073683},{"x":18.304984616872115,"y":43.42713276545516,"z":-9.939019441421861},{"x":18.264594581025097,"y":43.44066456739019,"z":-9.928781504388608},{"x":18.224184610110004,"y":43.45415046401518,"z":-9.918532889898849},{"x":18.18375971355466,"y":43.46758877370749,"z":-9.908274867228196},{"x":18.14330815312327,"y":43.48098337598411,"z":-9.898004455672606},{"x":18.10284114231563,"y":43.49433053319946,"z":-9.887724499322374},{"x":18.062353143781056,"y":43.50763205861858,"z":-9.877433590272227},{"x":18.021864082699413,"y":43.52088142005074,"z":-9.86713679384022},{"x":17.981328038381022,"y":43.534093609577525,"z":-9.856822429552276},{"x":17.940777977554326,"y":43.54725781941548,"z":-9.846498878095097},{"x":17.90023820782696,"y":43.56036620700039,"z":-9.836172332385967},{"x":17.85963850792921,"y":43.57344144068594,"z":-9.825824903285264},{"x":17.81905792036125,"y":43.58645803901197,"z":-9.815476730874098},{"x":17.778411241362125,"y":43.59944329980188,"z":-9.80510608701718},{"x":17.737782545569317,"y":43.61237032372213,"z":-9.794734415845156},{"x":17.697120210143037,"y":43.62525556297165,"z":-9.784348543531562},{"x":17.65643797852582,"y":43.63809461377173,"z":-9.773951974782946},{"x":17.61574088522779,"y":43.650885875034696,"z":-9.7635459947442},{"x":17.575023993145912,"y":43.66363088663362,"z":-9.753129339909593},{"x":17.53429109259888,"y":43.67632844755107,"z":-9.742702978293323},{"x":17.49353848999624,"y":43.688979694856535,"z":-9.732265963031626},{"x":17.4527768457468,"y":43.70158131755258,"z":-9.721821023847957},{"x":17.411994352023545,"y":43.7141369628827,"z":-9.711365135064897},{"x":17.371169813758822,"y":43.72665308948292,"z":-9.700892856153422},{"x":17.330343252018817,"y":43.739117394845074,"z":-9.690414448611387},{"x":17.28949785269662,"y":43.75153502613623,"z":-9.679925598967404},{"x":17.248640542934385,"y":43.76390387113817,"z":-9.669428085199478},{"x":17.20775323596643,"y":43.77622937829619,"z":-9.658917257904557},{"x":17.166851613386896,"y":43.78850678735555,"z":-9.6483971443308},{"x":17.125943865786716,"y":43.80073365268226,"z":-9.637869852286451},{"x":17.08499498645667,"y":43.812920400196,"z":-9.62732637012771},{"x":17.044068268905622,"y":43.82504820651313,"z":-9.616782994170544},{"x":17.003065422866538,"y":43.83714614988845,"z":-9.606214401044186},{"x":16.962073568344284,"y":43.84918844900561,"z":-9.595643035414927},{"x":16.921064566583542,"y":43.86118341094025,"z":-9.585061645782245},{"x":16.880034076765405,"y":43.873132282713435,"z":-9.574469109812178},{"x":16.838992810818553,"y":43.88503193360895,"z":-9.563868191413185},{"x":16.797940824696212,"y":43.89688235700305,"z":-9.55325890606719},{"x":16.75684741042662,"y":43.908692369274284,"z":-9.54263331352345},{"x":16.71574274022378,"y":43.92045324759682,"z":-9.531999209063217},{"x":16.67462121544193,"y":43.93216659046842,"z":-9.52135514408029},{"x":16.63348414305618,"y":43.94383201356209,"z":-9.510701455555392},{"x":16.59233031714428,"y":43.955449846904365,"z":-9.50003782994132},{"x":16.55115727258707,"y":43.96702076732065,"z":-9.489363626521959},{"x":16.509966944345166,"y":43.97854421058164,"z":-9.478679344700435},{"x":16.46875875290889,"y":43.990020320862065,"z":-9.4679848322606},{"x":16.42753274745555,"y":44.00144906529877,"z":-9.45728009991797},{"x":16.386319198446174,"y":44.01282208943262,"z":-9.446573010771647},{"x":16.345028751089657,"y":44.02416398019709,"z":-9.435840345947014},{"x":16.303749599590333,"y":44.035450431921134,"z":-9.425105018675056},{"x":16.262453461523787,"y":44.04668921572539,"z":-9.414359678574147},{"x":16.221139756540428,"y":44.057880471623925,"z":-9.403604172740227},{"x":16.17980853414864,"y":44.06902416705943,"z":-9.392838512017322},{"x":16.1384819203519,"y":44.08011435830914,"z":-9.382068461313489},{"x":16.097099413942658,"y":44.09116723326597,"z":-9.371278250208285},{"x":16.055708996171695,"y":44.10216990057831,"z":-9.360480379937162},{"x":16.014312619186427,"y":44.11312186157124,"z":-9.349675361886115},{"x":15.97288950321082,"y":44.124028599080745,"z":-9.338857771299027},{"x":15.931454218582841,"y":44.13488624866343,"z":-9.328031409768657},{"x":15.890001132781414,"y":44.14569627572418,"z":-9.317194804655172},{"x":15.848535351658477,"y":44.156457336623895,"z":-9.306349289275689},{"x":15.807043652034832,"y":44.16717283604204,"z":-9.29549140257897},{"x":15.765539357159948,"y":44.17783930516256,"z":-9.284624627713772},{"x":15.72401809275595,"y":44.188457857586506,"z":-9.273747818398029},{"x":15.682479276213224,"y":44.19902862203304,"z":-9.262860819865987},{"x":15.640923590182604,"y":44.20955140445849,"z":-9.251963808845497},{"x":15.599356150071074,"y":44.220024899780306,"z":-9.241058125541386},{"x":15.557761810852432,"y":44.230452895961456,"z":-9.230139793945003},{"x":15.516164687216843,"y":44.24082933437672,"z":-9.219215141960463},{"x":15.474531890359364,"y":44.251162391856006,"z":-9.208275530068688},{"x":15.432891978061328,"y":44.261444942359596,"z":-9.197328457306059},{"x":15.391234864437696,"y":44.27167947451849,"z":-9.186371272202946},{"x":15.349586601568777,"y":44.28185961409523,"z":-9.17541082935453},{"x":15.307871136754178,"y":44.29200388707075,"z":-9.164427109682213},{"x":15.266186198447986,"y":44.302088497845375,"z":-9.153445839024469},{"x":15.224440477157549,"y":44.312135525861905,"z":-9.142442964878555},{"x":15.182701285283699,"y":44.32212870854737,"z":-9.131436220019497},{"x":15.140943925129948,"y":44.332073980299015,"z":-9.120419094614723},{"x":15.099170351782009,"y":44.341970852757065,"z":-9.109392102003504},{"x":15.057380616246604,"y":44.3518192947726,"z":-9.09835525361409},{"x":15.015574769584818,"y":44.36161927525037,"z":-9.087308560896197},{"x":14.973752227190126,"y":44.37137091100774,"z":-9.076251867233617},{"x":14.93191367562258,"y":44.381074021687475,"z":-9.065185351948903},{"x":14.89005853005622,"y":44.390728722702654,"z":-9.054108858212208},{"x":14.848186841279501,"y":44.40033498090475,"z":-9.043022397174797},{"x":14.806299296518974,"y":44.40989261836272,"z":-9.031926148611523},{"x":14.76441949920453,"y":44.41939627339731,"z":-9.020826367067345},{"x":14.722474934565016,"y":44.428862337970784,"z":-9.009703828680584},{"x":14.680539493083495,"y":44.438274069065564,"z":-8.998578117740864},{"x":14.638587127151135,"y":44.44763733874625,"z":-8.987442327248784},{"x":14.596618524607665,"y":44.456951970861006,"z":-8.976296637346884},{"x":14.554659230280823,"y":44.46621232100048,"z":-8.965147833947073},{"x":14.512634089526031,"y":44.47543491227178,"z":-8.953975943555232},{"x":14.47061836018163,"y":44.48460315920729,"z":-8.942800962856863},{"x":14.428585962172066,"y":44.49372277883755,"z":-8.931615958880116},{"x":14.386538222388927,"y":44.502793461811834,"z":-8.920421282386084},{"x":14.344474554661568,"y":44.51181531439475,"z":-8.909216775177576},{"x":14.30239501053242,"y":44.52078830413112,"z":-8.89800244869822},{"x":14.260300918453032,"y":44.52971212866806,"z":-8.886778654908756},{"x":14.218196162454005,"y":44.538585954927335,"z":-8.875546428283632},{"x":14.17606291349235,"y":44.547413505607146,"z":-8.864301009406406},{"x":14.133921019528294,"y":44.55619058931088,"z":-8.853047691605285},{"x":14.091763508048457,"y":44.56491865022391,"z":-8.84178461234039},{"x":14.04959234846841,"y":44.57359726270296,"z":-8.830512295803867},{"x":14.007401840160835,"y":44.58222757521185,"z":-8.819229215758154},{"x":13.965197787708542,"y":44.59080837518983,"z":-8.807936921666963},{"x":13.922978325651194,"y":44.5993400241834,"z":-8.796634912564269},{"x":13.880743506111918,"y":44.60782249028067,"z":-8.785323200119826},{"x":13.838494021176162,"y":44.61625561426512,"z":-8.77400196751566},{"x":13.796228643417974,"y":44.62463961981645,"z":-8.762670883610712},{"x":13.753967270596501,"y":44.632970572076026,"z":-8.751335283574907},{"x":13.711652337961453,"y":44.64125976431929,"z":-8.739979722971091},{"x":13.66934087455876,"y":44.64949596424695,"z":-8.728619497799244},{"x":13.627015007962793,"y":44.65768266589218,"z":-8.717249811638345},{"x":13.584674150370658,"y":44.66581996279788,"z":-8.705870504458598},{"x":13.542331813061375,"y":44.67390526124752,"z":-8.694485207391953},{"x":13.499946390546244,"y":44.681946459057215,"z":-8.68308272953272},{"x":13.457563440099662,"y":44.689934869687946,"z":-8.671675320609445},{"x":13.41516250393696,"y":44.697874354733386,"z":-8.660257475622881},{"x":13.372744274275483,"y":44.70576475251181,"z":-8.648829377529626},{"x":13.33032163376941,"y":44.713603658963,"z":-8.637394495897361},{"x":13.287867690251563,"y":44.72139601126312,"z":-8.625945579431153},{"x":13.24542998215056,"y":44.72913308638628,"z":-8.614495447061696},{"x":13.202932187461364,"y":44.736828753918665,"z":-8.603023503817852},{"x":13.160453309347952,"y":44.744468660153466,"z":-8.591551068505375},{"x":13.117938831998332,"y":44.752062613557754,"z":-8.580063419883368},{"x":13.075419628936151,"y":44.759605055374706,"z":-8.568568894499018},{"x":13.032886764468493,"y":44.767097568741434,"z":-8.557065076768302},{"x":12.99033836448424,"y":44.77454046135586,"z":-8.545551457463944},{"x":12.947776409839703,"y":44.78193336409215,"z":-8.534028570132097},{"x":12.905220240320208,"y":44.78927293337986,"z":-8.522501651769147},{"x":12.862609480014491,"y":44.79656952565367,"z":-8.510954344539968},{"x":12.820003325445553,"y":44.80381293979503,"z":-8.499402681728476},{"x":12.777392192489106,"y":44.81100483527913,"z":-8.487844068337855},{"x":12.734749118875618,"y":44.818149726121355,"z":-8.476271187539062},{"x":12.692101174319516,"y":44.82524303756144,"z":-8.464691380755532},{"x":12.64944069451113,"y":44.83228604233846,"z":-8.453102566990669},{"x":12.60676258425995,"y":44.83927955580571,"z":-8.441503359521768},{"x":12.564072046066341,"y":44.846222699128575,"z":-8.42989516933425},{"x":12.521367202750486,"y":44.85311575755212,"z":-8.418277483911947},{"x":12.47864875207666,"y":44.85995859590031,"z":-8.406650490650868},{"x":12.435916103951083,"y":44.86675128621035,"z":-8.395014026558712},{"x":12.393169312182303,"y":44.87349379622742,"z":-8.383368103756341},{"x":12.350409075064077,"y":44.880185993262124,"z":-8.371712910058845},{"x":12.30763673594483,"y":44.88682764805206,"z":-8.360048809553316},{"x":12.264846547979678,"y":44.89341962598677,"z":-8.348374232359143},{"x":12.222053392733944,"y":44.89995962313309,"z":-8.336693236992836},{"x":12.179229600426556,"y":44.90645183518394,"z":-8.324998267915193},{"x":12.136416495588556,"y":44.91288998575161,"z":-8.313300608170483},{"x":12.093558666883096,"y":44.91928237461886,"z":-8.301585116116339},{"x":12.050714866354868,"y":44.92562020626272,"z":-8.289867846780137},{"x":12.00783095621325,"y":44.93191147052279,"z":-8.278133993781351},{"x":11.964947639000266,"y":44.93815014797002,"z":-8.266394687716998},{"x":11.922058521018311,"y":44.94433718566209,"z":-8.254648180320403},{"x":11.879140417918387,"y":44.95047589131804,"z":-8.242888118623972},{"x":11.83623082934922,"y":44.95656088757299,"z":-8.231124775364302},{"x":11.793300757854146,"y":44.96259629152551,"z":-8.219350202530208},{"x":11.75033991964293,"y":44.968583480744726,"z":-8.207561572578978},{"x":11.707365804373671,"y":44.974519961261905,"z":-8.195763678166898},{"x":11.664394620543376,"y":44.98040349914891,"z":-8.183960969148783},{"x":11.62139928833846,"y":44.98623778924926,"z":-8.172146007087072},{"x":11.578398601612188,"y":44.9920202507718,"z":-8.160323952627358},{"x":11.53538809386048,"y":44.99775148101398,"z":-8.148493577592188},{"x":11.492367175084354,"y":45.00343154559703,"z":-8.136654718330693},{"x":11.449308742795091,"y":45.00906396025272,"z":-8.124799910691097},{"x":11.40628398190919,"y":45.01463942641384,"z":-8.11294875245432},{"x":11.363186241579214,"y":45.02017172144637,"z":-8.101071865330345},{"x":11.320105472999698,"y":45.025649214785886,"z":-8.089194026370805},{"x":11.27701133480088,"y":45.03107579532523,"z":-8.077306874395616},{"x":11.233920706990988,"y":45.03644934136032,"z":-8.065415065514337},{"x":11.19079093670942,"y":45.041775131352196,"z":-8.053506825714509},{"x":11.147666731413736,"y":45.04704760335089,"z":-8.041594493049704},{"x":11.104510606201792,"y":45.05227131618562,"z":-8.029667711521885},{"x":11.061353687313634,"y":45.05744246278284,"z":-8.017735078116088},{"x":11.018188264607907,"y":45.062561972119525,"z":-8.005794461814554},{"x":10.975000147248664,"y":45.06763149244067,"z":-7.993841933801255},{"x":10.931805580267955,"y":45.0726490840537,"z":-7.9818819859663135},{"x":10.888598791570868,"y":45.07761540472409,"z":-7.969913018921001},{"x":10.845379189251194,"y":45.08253049763956,"z":-7.9579348660636855},{"x":10.802147477102206,"y":45.0873942578474,"z":-7.945947719766831},{"x":10.758910840021091,"y":45.09220586598536,"z":-7.933953570839132},{"x":10.71564665155007,"y":45.096967802113916,"z":-7.921946139186213},{"x":10.672378298475515,"y":45.10167745301281,"z":-7.909931910617668},{"x":10.629098708566474,"y":45.106335580549015,"z":-7.897908920777691},{"x":10.585809235212478,"y":45.11094202003238,"z":-7.885877543563824},{"x":10.542499559971558,"y":45.115497834436226,"z":-7.873834907765854},{"x":10.49918335584828,"y":45.12000155514139,"z":-7.861784811622214},{"x":10.455853546347345,"y":45.12445390050632,"z":-7.849725284890662},{"x":10.412512133499302,"y":45.1288546374524,"z":-7.837656881792308},{"x":10.369159822754067,"y":45.13320367179745,"z":-7.8255797963307385},{"x":10.325807052726747,"y":45.13749995344274,"z":-7.8134969358661746},{"x":10.28241819294813,"y":45.141746966658204,"z":-7.80139836593049},{"x":10.239030933939606,"y":45.14594097518063,"z":-7.78929458997946},{"x":10.19562975924487,"y":45.15008347497703,"z":-7.777181279440312},{"x":10.15222576040762,"y":45.154173393774926,"z":-7.7650615281794275},{"x":10.108794327110143,"y":45.158213013946124,"z":-7.752928461075636},{"x":10.065359534660281,"y":45.1622000558174,"z":-7.740788798782374},{"x":10.021927286856007,"y":45.166133992559566,"z":-7.728644192799442},{"x":9.978454783592385,"y":45.17001865095494,"z":-7.716482671274708},{"x":9.934988186484931,"y":45.173849857354426,"z":-7.704317141384495},{"x":9.891504174255076,"y":45.1776296638285,"z":-7.692141076268696},{"x":9.848017743483673,"y":45.181356745856604,"z":-7.679958672456528},{"x":9.804508164419328,"y":45.18503285039308,"z":-7.66776412012837},{"x":9.76099303398983,"y":45.18865645297429,"z":-7.655562346652546},{"x":9.717467212861537,"y":45.192227967608005,"z":-7.643351909616099},{"x":9.67392945894711,"y":45.19574747018635,"z":-7.6311324578323925},{"x":9.630381129436493,"y":45.199214824828,"z":-7.6189043693793135},{"x":9.586851531420116,"y":45.20262772615282,"z":-7.606675875596896},{"x":9.543250374572356,"y":45.20599317631413,"z":-7.594421606369847},{"x":9.499668714564457,"y":45.209304061376145,"z":-7.582167141266433},{"x":9.456076059877175,"y":45.212562729097925,"z":-7.569903910860379},{"x":9.412475719421165,"y":45.215768911778724,"z":-7.557632843721103},{"x":9.368857347615625,"y":45.218923337522774,"z":-7.545351024976667},{"x":9.32523335677347,"y":45.22202507834119,"z":-7.533061945991796},{"x":9.281596001697164,"y":45.225074663989474,"z":-7.520763422914688},{"x":9.237949242422374,"y":45.22807178901741,"z":-7.508456568633453},{"x":9.194291185977933,"y":45.23101655858587,"z":-7.496140846805677},{"x":9.150625143090874,"y":45.233908726646455,"z":-7.4838171888417495},{"x":9.106944016248454,"y":45.236748734001935,"z":-7.471483588737713},{"x":9.063254369067417,"y":45.239536122672966,"z":-7.459141896226834},{"x":9.019554308365695,"y":45.24227099098605,"z":-7.446791574174832},{"x":8.975843892619713,"y":45.24495330915097,"z":-7.434432636316901},{"x":8.932123180369057,"y":45.24758304744251,"z":-7.4220650964134585},{"x":8.888391579399027,"y":45.2501602141942,"z":-7.409688784046577},{"x":8.844650449965494,"y":45.25268470303403,"z":-7.397304081336884},{"x":8.800901152741885,"y":45.2551564139718,"z":-7.384911371208274},{"x":8.75713658647407,"y":45.25757571652277,"z":-7.372508638951088},{"x":8.71336331890516,"y":45.25994221398268,"z":-7.360097742045018},{"x":8.669580758180551,"y":45.262255915801646,"z":-7.347678510295756},{"x":8.625788312337729,"y":45.26451682833579,"z":-7.335250773146874},{"x":8.58201338705131,"y":45.26672355892313,"z":-7.322822309508179},{"x":8.53817269925687,"y":45.26888023215016,"z":-7.310369468579021},{"x":8.494350301339953,"y":45.270982631178406,"z":-7.2979161138519055},{"x":8.450517603580979,"y":45.273032153016025,"z":-7.285454124374885},{"x":8.406677270206146,"y":45.27502864915578,"z":-7.272984254971558},{"x":8.362822196676282,"y":45.276972411428886,"z":-7.260504481674552},{"x":8.318960257517599,"y":45.27886305944434,"z":-7.248017041730608},{"x":8.275088255833817,"y":45.28070070858157,"z":-7.2355210226944795},{"x":8.231206902476382,"y":45.28248530166072,"z":-7.223016624089603},{"x":8.187315605644683,"y":45.28421683541539,"z":-7.210503674377448},{"x":8.143414424931873,"y":45.28589527892987,"z":-7.197982187496004},{"x":8.099519707046877,"y":45.287520007490365,"z":-7.1854568253729125},{"x":8.055583953593183,"y":45.28909272598364,"z":-7.172914030133232},{"x":8.011684101806662,"y":45.290610673586066,"z":-7.160375762723795},{"x":7.967715966880301,"y":45.292077406339956,"z":-7.147812265149421},{"x":7.923767566355119,"y":45.293489900836626,"z":-7.135248675554925},{"x":7.879825279780447,"y":45.29484864922747,"z":-7.122681106491013},{"x":7.835843554206464,"y":45.29615500790051,"z":-7.110096525588121},{"x":7.791870669509696,"y":45.29740749000623,"z":-7.097508740112236},{"x":7.747881923802497,"y":45.29860679341315,"z":-7.084910679007358},{"x":7.703888455685274,"y":45.29975258161964,"z":-7.072305528435629},{"x":7.6598844603916305,"y":45.30084498350128,"z":-7.059691622998078},{"x":7.615871953427444,"y":45.30188391910655,"z":-7.0470695371897},{"x":7.571864030582074,"y":45.30286907615828,"z":-7.0344430259330055},{"x":7.527819691263483,"y":45.303801321230196,"z":-7.021800321371605},{"x":7.483797003927246,"y":45.304679399192764,"z":-7.0091580871625325},{"x":7.439732153755342,"y":45.30550455323989,"z":-6.996497996091954},{"x":7.395675389937587,"y":45.30627578101056,"z":-6.983834476913105},{"x":7.351614389411007,"y":45.306993309690206,"z":-6.971163989146397},{"x":7.307534872474654,"y":45.307657334479366,"z":-6.958482422881386},{"x":7.2634564555250165,"y":45.30826753007459,"z":-6.945795417909677},{"x":7.219360295575962,"y":45.30882413098686,"z":-6.933097548470909},{"x":7.175260142911714,"y":45.309326925833055,"z":-6.920392769607318},{"x":7.131150843676172,"y":45.309775952187266,"z":-6.907679594449907},{"x":7.087039630016227,"y":45.3101711180875,"z":-6.894960105263906},{"x":7.042908309782686,"y":45.31051254936757,"z":-6.882229052939571},{"x":6.998773893884115,"y":45.31080007279032,"z":-6.869491339822171},{"x":6.954631880373275,"y":45.31103370003219,"z":-6.856745664855589},{"x":6.910481026852955,"y":45.31121340906396,"z":-6.843991666292348},{"x":6.866322046765172,"y":45.31133916705989,"z":-6.831229547009837},{"x":6.822170648259986,"y":45.31141092834713,"z":-6.8184638461365035},{"x":6.777983213008374,"y":45.31142871502884,"z":-6.8056819482597986},{"x":6.733796311341291,"y":45.31139244561069,"z":-6.792894423627671},{"x":6.689604789556726,"y":45.311302108997964,"z":-6.780099780211256},{"x":6.645405449794712,"y":45.31115767611838,"z":-6.7672970898394675},{"x":6.601198353973021,"y":45.31095911845628,"z":-6.754486367379628},{"x":6.556983564074909,"y":45.310706407566926,"z":-6.741667627725592},{"x":6.512759838276472,"y":45.310399505309135,"z":-6.728840507572837},{"x":6.468529194514212,"y":45.310038395637044,"z":-6.716005588953489},{"x":6.424294954593867,"y":45.30962308511583,"z":-6.7031638334970705},{"x":6.380044142233085,"y":45.30915341438049,"z":-6.6903114704263915},{"x":6.335790510217812,"y":45.30862949143058,"z":-6.677452489661115},{"x":6.291528905533394,"y":45.308051234009824,"z":-6.66458539176155},{"x":6.247260042550469,"y":45.30741862145163,"z":-6.651710381174059},{"x":6.202983331896026,"y":45.30673161540805,"z":-6.63882728331111},{"x":6.158698836181823,"y":45.30599018568006,"z":-6.625936113060835},{"x":6.114409225552928,"y":45.305194350432,"z":-6.613037644782666},{"x":6.070109347786816,"y":45.304343986222385,"z":-6.600130374861933},{"x":6.0258338133703075,"y":45.303439778076516,"z":-6.587224388577047},{"x":5.981489472035739,"y":45.302479744224435,"z":-6.574292527777131},{"x":5.93716894797656,"y":45.3014657978113,"z":-6.5613617911041455},{"x":5.89284166769833,"y":45.3003972688991,"z":-6.548423262713016},{"x":5.848506390691924,"y":45.2992740964506,"z":-6.535476577231244},{"x":5.804164483693415,"y":45.29809628378749,"z":-6.5225221303848},{"x":5.759817313363617,"y":45.2968638407061,"z":-6.509560318570232},{"x":5.715459729063741,"y":45.29557659075345,"z":-6.49658963296228},{"x":5.6710970080690135,"y":45.29423465310481,"z":-6.483611612904994},{"x":5.626727258599377,"y":45.29283794301405,"z":-6.470625702092864},{"x":5.582350544165972,"y":45.29138643122493,"z":-6.457631915775071},{"x":5.537967579981829,"y":45.289880111030186,"z":-6.4446304601345155},{"x":5.493577778016444,"y":45.28831893244684,"z":-6.431621159727931},{"x":5.449205310529176,"y":45.28670375731912,"z":-6.41861109920204},{"x":5.404777915682615,"y":45.2850318840464,"z":-6.4055790859750905},{"x":5.360367982958279,"y":45.28330595638003,"z":-6.392546343378081},{"x":5.315951467740865,"y":45.28152505462677,"z":-6.379505817513554},{"x":5.271529085497893,"y":45.27968917733124,"z":-6.366457715199644},{"x":5.227099597321685,"y":45.27779824206227,"z":-6.353401669239451},{"x":5.182666324489496,"y":45.27585236226223,"z":-6.340338652538685},{"x":5.1382221656576945,"y":45.27385119245357,"z":-6.327266573903431},{"x":5.093774350581511,"y":45.271795022761324,"z":-6.314187555765919},{"x":5.0493196866462915,"y":45.26968367797541,"z":-6.3011006558454},{"x":5.00488233563142,"y":45.26751831495266,"z":-6.2880129873038655},{"x":4.9603926752915966,"y":45.26529547200184,"z":-6.274904039853771},{"x":4.915920456829244,"y":45.26301855606337,"z":-6.261794355243192},{"x":4.871442950038599,"y":45.26068641811864,"z":-6.248677235280653},{"x":4.82695696384145,"y":45.25829885605417,"z":-6.235551735253022},{"x":4.782466470001417,"y":45.25585604897992,"z":-6.222419023258929},{"x":4.737970231007604,"y":45.253357900051,"z":-6.209278730964298},{"x":4.693468311753572,"y":45.2508043815063,"z":-6.196130874178225},{"x":4.648982259100804,"y":45.24819673676933,"z":-6.182981818883692},{"x":4.604469823784138,"y":45.245532461843865,"z":-6.169819075579672},{"x":4.55992782063527,"y":45.242811251461454,"z":-6.156641690231993},{"x":4.515402529067855,"y":45.24003589490632,"z":-6.143463348689159},{"x":4.470872533710207,"y":45.23720506959489,"z":-6.130277714551327},{"x":4.426336598247856,"y":45.2343186655645,"z":-6.11708441842784},{"x":4.381795438893611,"y":45.231376696519135,"z":-6.103883668973591},{"x":4.337248470448306,"y":45.22837909116795,"z":-6.090675289286025},{"x":4.29269640917122,"y":45.22532586497661,"z":-6.077459488221863},{"x":4.248139320647674,"y":45.22221699095254,"z":-6.064236281872573},{"x":4.20359938732323,"y":45.21905402506364,"z":-6.05101225350234},{"x":4.159009023659295,"y":45.21583209710494,"z":-6.037767331379951},{"x":4.1144359469182765,"y":45.21255602046828,"z":-6.024521619277185},{"x":4.069886720855477,"y":45.209226340191954,"z":-6.01127707422643},{"x":4.025274917067138,"y":45.20583651609289,"z":-5.9980079951108864},{"x":3.980687095997517,"y":45.20239303361759,"z":-5.984740115401609},{"x":3.936094058864559,"y":45.19889366033535,"z":-5.971464749843659},{"x":3.891496522085317,"y":45.195338419651634,"z":-5.958182108188495},{"x":3.846893901817864,"y":45.191727232285956,"z":-5.944892013071885},{"x":3.802312264036502,"y":45.18806222147173,"z":-5.931602231833257},{"x":3.757674326631891,"y":45.18433695769212,"z":-5.918289721004207},{"x":3.713075051076157,"y":45.180559311039495,"z":-5.904982792344587},{"x":3.6684358654347338,"y":45.17672261333588,"z":-5.891658003748504},{"x":3.623810125271381,"y":45.172831381223155,"z":-5.878331272743581},{"x":3.579181000519608,"y":45.168884150733206,"z":-5.864997574235719},{"x":3.5345453096286996,"y":45.16488060541017,"z":-5.851655954041157},{"x":3.489905718316299,"y":45.160820947669016,"z":-5.838307204941481},{"x":3.4452622934123234,"y":45.15670515193652,"z":-5.824951343540056},{"x":3.4006144524078676,"y":45.15253313167547,"z":-5.811588192082363},{"x":3.3559622624746304,"y":45.14830485905656,"z":-5.798217767029404},{"x":3.3113057908565033,"y":45.1440203063308,"z":-5.784840084871682},{"x":3.2666451048699745,"y":45.13967944582966,"z":-5.7714551621292935},{"x":3.22198092102561,"y":45.13528231423281,"z":-5.758063210000266},{"x":3.177312008466476,"y":45.130828756303714,"z":-5.744663855831655},{"x":3.1326455736663075,"y":45.12631946687426,"z":-5.731259258597375},{"x":3.0879635127889737,"y":45.121752575581624,"z":-5.717843981274529},{"x":3.043284713470691,"y":45.117129968896116,"z":-5.704423689355209},{"x":2.9985988609985355,"y":45.112450553468584,"z":-5.690995282119892},{"x":2.95393067375075,"y":45.10771691607143,"z":-5.6775661866458975},{"x":2.909219244407024,"y":45.102922537904725,"z":-5.6641180867724},{"x":2.8645243183366946,"y":45.09807375044051,"z":-5.650668942514337},{"x":2.8198265032820506,"y":45.09316845611154,"z":-5.637212919842602},{"x":2.7751226253680805,"y":45.08820626891213,"z":-5.623749059356932},{"x":2.730417939871677,"y":45.083187737568814,"z":-5.610278939971127},{"x":2.6857073286018376,"y":45.078112253602825,"z":-5.596801016049211},{"x":2.640994749462879,"y":45.07298022931083,"z":-5.583316476615988},{"x":2.596278974318736,"y":45.06779149197565,"z":-5.5698249479364605},{"x":2.5515594237095263,"y":45.06254593887305,"z":-5.556326251407341},{"x":2.5068368142677344,"y":45.057243618476434,"z":-5.542820599523138},{"x":2.4621118623484075,"y":45.05188458257009,"z":-5.529308205052146},{"x":2.4173826933894147,"y":45.04646857110942,"z":-5.515788497925032},{"x":2.372650671814814,"y":45.040995712409675,"z":-5.502261886565269},{"x":2.327915866448055,"y":45.03546598052772,"z":-5.488728388113527},{"x":2.2831776988000487,"y":45.02987926839782,"z":-5.4751878237831395},{"x":2.2384368854059025,"y":45.02423562983683,"z":-5.461640406611873},{"x":2.193693495303936,"y":45.01853503915369,"z":-5.448086153829517},{"x":2.148947597602932,"y":45.012777470741746,"z":-5.4345250826952896},{"x":2.1041979674739335,"y":45.00696273020748,"z":-5.42095681811308},{"x":2.0594692572176645,"y":45.00109402650053,"z":-5.407388834574857},{"x":2.0146923170069835,"y":44.995162214082825,"z":-5.393800150672391},{"x":1.9699351417728965,"y":44.98917621577074,"z":-5.380211389924416},{"x":1.9251758061446633,"y":44.9831331081226,"z":-5.366615897219032},{"x":1.8804137331525488,"y":44.97703277756784,"z":-5.353013493513604},{"x":1.8356496391182529,"y":44.970875285952715,"z":-5.3394043926427806},{"x":1.7909049217450934,"y":44.96466358126651,"z":-5.32579509971243},{"x":1.7461447457090993,"y":44.95839281024112,"z":-5.312175018696987},{"x":1.7013737100081021,"y":44.95206353917184,"z":-5.298545540542317},{"x":1.6565699253210193,"y":44.945672564070364,"z":-5.284899990566424},{"x":1.611794189918609,"y":44.939228516046406,"z":-5.271256879263964},{"x":1.567044621774939,"y":44.93273119970356,"z":-5.257615641319308},{"x":1.5222373404518195,"y":44.926168353284595,"z":-5.2439507008758515},{"x":1.4774557213432238,"y":44.91955209245621,"z":-5.230287472082505},{"x":1.432672712184591,"y":44.91287843963941,"z":-5.21661770401458},{"x":1.387887092634079,"y":44.906147175967384,"z":-5.202941020257198},{"x":1.3431002242034222,"y":44.89935846886547,"z":-5.189257832573523},{"x":1.2983115322544414,"y":44.892512195384604,"z":-5.1755679615926375},{"x":1.2535210876690486,"y":44.88560832921442,"z":-5.161871425011559},{"x":1.2087289614038965,"y":44.878646844132206,"z":-5.148168240558308},{"x":1.163935869250351,"y":44.871627815402654,"z":-5.134458623349036},{"x":1.119140592676367,"y":44.86455101498774,"z":-5.120742196511788},{"x":1.074344492263145,"y":44.8574166205361,"z":-5.107019372633731},{"x":1.0295463500978288,"y":44.85022440095354,"z":-5.093289774695248},{"x":0.9847468821520726,"y":44.84297443266586,"z":-5.079553617988827},{"x":0.939976435487355,"y":44.83567164567448,"z":-5.065820208402409},{"x":0.895144898647758,"y":44.828301253539294,"z":-5.052061897626285},{"x":0.8503418819547771,"y":44.820877886139805,"z":-5.038306172274119},{"x":0.8055384693318001,"y":44.813396775660784,"z":-5.0245441577638505},{"x":0.7607334447676154,"y":44.805857681842745,"z":-5.010775476645983},{"x":0.7159275239532666,"y":44.798260686495226,"z":-4.997000344707534},{"x":0.6711207787360284,"y":44.79060576446041,"z":-4.9832187800481025},{"x":0.6263126377514411,"y":44.782892779571526,"z":-4.9694306028305535},{"x":0.5815192522913112,"y":44.77512450209969,"z":-4.955640781488052},{"x":0.5366943871687047,"y":44.76729284985583,"z":-4.941835077007944},{"x":0.49188506468160215,"y":44.75940596886755,"z":-4.928027962934423},{"x":0.44707399261073844,"y":44.7514608080893,"z":-4.914214110778629},{"x":0.4022625293028526,"y":44.743457568335735,"z":-4.900393934958533},{"x":0.35745138962121026,"y":44.73539634103055,"z":-4.88656765204975},{"x":0.3126387185204025,"y":44.72727675389224,"z":-4.872734685627723},{"x":0.2678258737764486,"y":44.719099012859004,"z":-4.85889545049318},{"x":0.2230148542407686,"y":44.71086344880207,"z":-4.845050560254465},{"x":0.1781993118431452,"y":44.70256885300966,"z":-4.83119804931764},{"x":0.13338574033054929,"y":44.694216384348145,"z":-4.817339920099675},{"x":0.08857164458303822,"y":44.68580554291844,"z":-4.803475397370918},{"x":0.043757739436692304,"y":44.6773364240189,"z":-4.789604698113475},{"x":-0.001033453606624375,"y":44.66881328842741,"z":-4.7757347928962535},{"x":-0.04584996982373949,"y":44.660226955476126,"z":-4.761850804524106},{"x":-0.09067889693665282,"y":44.65157978520865,"z":-4.747956720590945},{"x":-0.13549771963149274,"y":44.642876075058425,"z":-4.734059513795084},{"x":-0.18031085681663855,"y":44.6341149584365,"z":-4.720157813188542},{"x":-0.22512464528823573,"y":44.62529516683108,"z":-4.706249650044616},{"x":-0.26993772973116836,"y":44.61641692669088,"z":-4.69233544064534},{"x":-0.3147506770334875,"y":44.6074800867991,"z":-4.678415004839399},{"x":-0.35956277298098455,"y":44.598484750566676,"z":-4.664488560296502},{"x":-0.4043745840139994,"y":44.58943076534758,"z":-4.650555926842041},{"x":-0.4491860359813147,"y":44.580318105856904,"z":-4.63661712322866},{"x":-0.4939944956155991,"y":44.57114727213918,"z":-4.62267296467639},{"x":-0.5388069261198077,"y":44.561916795509696,"z":-4.608721279849214},{"x":-0.5836162159104115,"y":44.55262809617192,"z":-4.594764277834412},{"x":-0.628424849567634,"y":44.54328062398377,"z":-4.580801181079074},{"x":-0.6732327525558689,"y":44.533874354133395,"z":-4.566832008497672},{"x":-0.7180398502625776,"y":44.52440926190403,"z":-4.552856779037105},{"x":-0.7628288198170876,"y":44.51488899895124,"z":-4.5388808942854455},{"x":-0.8076462217021136,"y":44.50530360765236,"z":-4.5248898205972115},{"x":-0.852454287409582,"y":44.495661080756165,"z":-4.510895338209088},{"x":-0.8972574166470149,"y":44.485960455369735,"z":-4.4968960714302515},{"x":-0.9420587282110781,"y":44.47620102484585,"z":-4.482891042508538},{"x":-0.986859423543986,"y":44.46638248706813,"z":-4.468879871595111},{"x":-1.0316581513090666,"y":44.456505097581854,"z":-4.454862976932389},{"x":-1.0764561121401315,"y":44.446568551231145,"z":-4.440839978580395},{"x":-1.1212525927217207,"y":44.436572964363485,"z":-4.426811095332208},{"x":-1.1660475176742453,"y":44.426518313223845,"z":-4.412776346459509},{"x":-1.210840174363575,"y":44.416404718394105,"z":-4.398735951011053},{"x":-1.2556323987932059,"y":44.406231723594765,"z":-4.38468932908942},{"x":-1.30042220381976,"y":44.39599973808196,"z":-4.370637099297599},{"x":-1.3452101509381558,"y":44.38570859425086,"z":-4.356579081292248},{"x":-1.3899968008818417,"y":44.37535812136287,"z":-4.342515094615246},{"x":-1.4347814409745425,"y":44.36494844210455,"z":-4.328445358552609},{"x":-1.479563995302265,"y":44.3544795334051,"z":-4.314369892603826},{"x":-1.524334212371839,"y":44.343953770605076,"z":-4.3002919162915365},{"x":-1.569123814212787,"y":44.33336363448777,"z":-4.286201449138606},{"x":-1.6139002902644277,"y":44.32271674690084,"z":-4.27210871071301},{"x":-1.6586711986025333,"y":44.31201129854927,"z":-4.258011321175541},{"x":-1.7034466297223243,"y":44.30124482896729,"z":-4.243906098486969},{"x":-1.7482169751786896,"y":44.29041959801945,"z":-4.229796063802867},{"x":-1.7929840653707936,"y":44.27953512879842,"z":-4.215680636641511},{"x":-1.8377497284527229,"y":44.268590934806085,"z":-4.201559236145129},{"x":-1.882494216400473,"y":44.25759183602397,"z":-4.18743809036847},{"x":-1.927272656350161,"y":44.24652420749512,"z":-4.173299795392534},{"x":-1.9720304018916035,"y":44.23540147215285,"z":-4.159161594483702},{"x":-2.0167851429394723,"y":44.22421923018287,"z":-4.145017899891971},{"x":-2.0615374363708137,"y":44.21297730022558,"z":-4.13086853113925},{"x":-2.10628657104788,"y":44.2016758185764,"z":-4.1167137085217105},{"x":-2.151029936304488,"y":44.1903154084557,"z":-4.102554253892007},{"x":-2.195776955476405,"y":44.17889362799416,"z":-4.08838718019437},{"x":-2.240518049742351,"y":44.16741287137668,"z":-4.074215514376837},{"x":-2.285253144117295,"y":44.15587312701878,"z":-4.060039276898423},{"x":-2.3299903877968844,"y":44.14427224589516,"z":-4.045855880596685},{"x":-2.3747221088379424,"y":44.13261216795338,"z":-4.031667752232118},{"x":-2.4194501282066674,"y":44.120892381373395,"z":-4.017474310318875},{"x":-2.464175000360186,"y":44.109112698449195,"z":-4.003275374400369},{"x":-2.5088966470430045,"y":44.09727309600397,"z":-3.9890709646422553},{"x":-2.5536149899203346,"y":44.08537355096402,"z":-3.9748611012441457},{"x":-2.598307849875681,"y":44.07341996466857,"z":-3.9606528311458087},{"x":-2.6430130443758824,"y":44.06140219457864,"z":-3.946434130097158},{"x":-2.687748780133414,"y":44.04931520197014,"z":-3.9321991925359203},{"x":-2.7324531230561444,"y":44.03717565869134,"z":-3.9179677172823033},{"x":-2.777153138672447,"y":44.02497623149529,"z":-3.9037310907704286},{"x":-2.821850009655167,"y":44.01271655375463,"z":-3.8894889316835886},{"x":-2.8665423960456424,"y":44.00039694891232,"z":-3.875241662232884},{"x":-2.9112314795390333,"y":43.98801704732561,"z":-3.860988901062039},{"x":-2.9558945072167533,"y":43.97558315019708,"z":-3.846737903853824},{"x":-3.000596900669575,"y":43.96307696189321,"z":-3.8324677893223615},{"x":-3.0452737097936593,"y":43.95051655837462,"z":-3.818199278886782},{"x":-3.0899462689351704,"y":43.93789594349541,"z":-3.8039255598569897},{"x":-3.1346144987353797,"y":43.92521509554084,"z":-3.7896466528741914},{"x":-3.1792783197571604,"y":43.91247399290226,"z":-3.7753625786136262},{"x":-3.2239376524857706,"y":43.89967261407699,"z":-3.761073357784324},{"x":-3.268593045655948,"y":43.88681075631374,"z":-3.7467788099765347},{"x":-3.3132437908372725,"y":43.873888578067174,"z":-3.732479157072725},{"x":-3.35788980827833,"y":43.860906058154455,"z":-3.7181744198846083},{"x":-3.4025316458262345,"y":43.847862991729045,"z":-3.7038644180352},{"x":-3.447163575806986,"y":43.83476101658776,"z":-3.6895509835424396},{"x":-3.491800577194469,"y":43.82159568205419,"z":-3.675229307436364},{"x":-3.536427510964045,"y":43.80837139718984,"z":-3.6609042405491725},{"x":-3.581040541528912,"y":43.79508928260592,"z":-3.646577012259354},{"x":-3.6256395980497134,"y":43.78174935155352,"z":-3.632247644482282},{"x":-3.6702797280718378,"y":43.768335020663415,"z":-3.617898440004765},{"x":-3.714886919141888,"y":43.75486844064981,"z":-3.60355317747165},{"x":-3.759489285756686,"y":43.741341138125826,"z":-3.5892028179674855},{"x":-3.8040842440395184,"y":43.72775385462544,"z":-3.574848188245798},{"x":-3.8486779698090667,"y":43.71410465922297,"z":-3.5604872953205677},{"x":-3.8932647506973614,"y":43.70039524873461,"z":-3.546121973092464},{"x":-3.9378438823343562,"y":43.686625801634364,"z":-3.5317524444099337},{"x":-3.982420908670286,"y":43.67279455743114,"z":-3.517376917296432},{"x":-4.0269907485003,"y":43.65890304236079,"z":-3.5029970248316427},{"x":-4.071555195057873,"y":43.64495065429069,"z":-3.4886121838961235},{"x":-4.116113542517218,"y":43.63093756811399,"z":-3.474222617376613},{"x":-4.16066695734148,"y":43.616863369718345,"z":-3.4598279435686194},{"x":-4.205214109734005,"y":43.60272843166222,"z":-3.44542858699523},{"x":-4.249736841665443,"y":43.5885385073904,"z":-3.4310304155663403},{"x":-4.294291171185175,"y":43.57427566110555,"z":-3.41661530672048},{"x":-4.338806590252967,"y":43.55996240120527,"z":-3.402206063591106},{"x":-4.383343448522145,"y":43.545579292753345,"z":-3.3877831502847604},{"x":-4.427861177489668,"y":43.53113935583036,"z":-3.3733596945502122},{"x":-4.472372152581895,"y":43.51663855886737,"z":-3.3589316853814943},{"x":-4.516855147854941,"y":43.502083815015354,"z":-3.3445060021689286},{"x":-4.56137475723375,"y":43.48745390226092,"z":-3.33006169016443},{"x":-4.605866843423408,"y":43.472769797605956,"z":-3.315619545838385},{"x":-4.650352467838304,"y":43.45802454916411,"z":-3.3011727332665193},{"x":-4.69483154764794,"y":43.44321813664661,"z":-3.286721274247051},{"x":-4.739303379288694,"y":43.42835074775699,"z":-3.2722653923820917},{"x":-4.783767880519017,"y":43.41342236483974,"z":-3.257805109581037},{"x":-4.8282280697789055,"y":43.39843192294187,"z":-3.243339438812762},{"x":-4.872680141503221,"y":43.38338065431319,"z":-3.2288696127076246},{"x":-4.91711347999503,"y":43.3682721324931,"z":-3.2143990842578773},{"x":-4.961563941141824,"y":43.35309409413632,"z":-3.1999161699012784},{"x":-5.00599550184176,"y":43.337858761893806,"z":-3.1854325972334516},{"x":-5.050419233009664,"y":43.322562319263234,"z":-3.170944755612107},{"x":-5.094822679410051,"y":43.30720903518686,"z":-3.1564567045225993},{"x":-5.139245967369127,"y":43.291784960080314,"z":-3.1419553447602118},{"x":-5.183635203874926,"y":43.27630875176728,"z":-3.1274582613666113},{"x":-5.228044091131797,"y":43.26076164241838,"z":-3.112947912748012},{"x":-5.272431750341916,"y":43.245157862073086,"z":-3.0984376457825533},{"x":-5.3168123131801295,"y":43.22949242415063,"z":-3.0839228393084097},{"x":-5.361184460709896,"y":43.21376574587618,"z":-3.0694039194829448},{"x":-5.405549959987833,"y":43.19797715152776,"z":-3.0548803028912688},{"x":-5.449906875650612,"y":43.182127280058374,"z":-3.040352617717482},{"x":-5.494256973003698,"y":43.16621545118123,"z":-3.025820280565222},{"x":-5.538598318114581,"y":43.15024230888428,"z":-3.0112839197430215},{"x":-5.582932058802555,"y":43.13420739141003,"z":-2.9967431538457356},{"x":-5.627250108850568,"y":43.118113589087194,"z":-2.982200631089899},{"x":-5.67157638555093,"y":43.1019521500372,"z":-2.967648496950902},{"x":-5.715885570899552,"y":43.08573223696847,"z":-2.9530950550893182},{"x":-5.760187425775806,"y":43.069450245333485,"z":-2.938537096491999},{"x":-5.804478177524378,"y":43.05310751547989,"z":-2.923975855826877},{"x":-5.848765727692794,"y":43.03670107722244,"z":-2.9094087297733666},{"x":-5.893042004283076,"y":43.02023386474837,"z":-2.894838367123963},{"x":-5.937309993218926,"y":43.00370472320817,"z":-2.880263780642491},{"x":-5.981568995262524,"y":42.987113863586174,"z":-2.8656851951690014},{"x":-6.025820764124017,"y":42.97046057586778,"z":-2.851102027483095},{"x":-6.0700627611851,"y":42.95374576371467,"z":-2.836515108580743},{"x":-6.114283265976182,"y":42.93697383376909,"z":-2.8219283001166433},{"x":-6.158520774464125,"y":42.9201301088145,"z":-2.8073288967206023},{"x":-6.202736617980542,"y":42.90322922856628,"z":-2.79272964972531},{"x":-6.2469435708091,"y":42.88626628832169,"z":-2.7781263393898716},{"x":-6.291141546392365,"y":42.869241269635204,"z":-2.7635189887879545},{"x":-6.335329847095579,"y":42.85215439084238,"z":-2.7489078230819155},{"x":-6.379505944229631,"y":42.83500658595395,"z":-2.73429367364025},{"x":-6.423679522022296,"y":42.81779403680963,"z":-2.7196733307849326},{"x":-6.46784072198189,"y":42.800520523943874,"z":-2.7050500505952013},{"x":-6.511992510676555,"y":42.783184842248694,"z":-2.690422846060681},{"x":-6.556134801056133,"y":42.765786974016315,"z":-2.675791740476487},{"x":-6.600258976435857,"y":42.74833028176421,"z":-2.6611595859981696},{"x":-6.64438566658123,"y":42.73080654557957,"z":-2.646519535995083},{"x":-6.688501984581559,"y":42.713220803957164,"z":-2.631875857106339},{"x":-6.732606627191534,"y":42.69557352971894,"z":-2.617228976894564},{"x":-6.776698901539405,"y":42.67786495755356,"z":-2.602579120892739},{"x":-6.820781762526585,"y":42.6600938529788,"z":-2.5879253023249014},{"x":-6.8648581590163165,"y":42.64225896573975,"z":-2.573266534475506},{"x":-6.908922533337108,"y":42.624362487833864,"z":-2.5586046594387435},{"x":-6.9529693385437685,"y":42.60640663998548,"z":-2.5439415192772534},{"x":-6.997017301353063,"y":42.58838372804897,"z":-2.529270874089068},{"x":-7.0410529786747,"y":42.57029917686628,"z":-2.5145971927121256},{"x":-7.085075679235023,"y":42.55215322755617,"z":-2.499920700904623},{"x":-7.129077445026297,"y":42.53394913618256,"z":-2.485244048897855},{"x":-7.1730902871119495,"y":42.51567358375734,"z":-2.4705565524968125},{"x":-7.21708201674176,"y":42.497339854316216,"z":-2.455868943573951},{"x":-7.2610628417443195,"y":42.478943665659024,"z":-2.4411778113704528},{"x":-7.305003056836953,"y":42.46049745521378,"z":-2.4264930788230252},{"x":-7.348992632282152,"y":42.44196333867015,"z":-2.4117846688231177},{"x":-7.392940815661241,"y":42.42337942213888,"z":-2.3970829084692036},{"x":-7.436878343063485,"y":42.40473272677146,"z":-2.3823775187584912},{"x":-7.480805727969132,"y":42.3860229778216,"z":-2.3676683217827583},{"x":-7.524702985234825,"y":42.36725867303735,"z":-2.352962007413348},{"x":-7.568625489480058,"y":42.348416052856145,"z":-2.3382400165616457},{"x":-7.612518893254157,"y":42.32951832958042,"z":-2.323520552678267},{"x":-7.6564011923587865,"y":42.31055774318016,"z":-2.308797580257354},{"x":-7.700271695085498,"y":42.29153453814102,"z":-2.2940713255429537},{"x":-7.744130913463765,"y":42.27244843812271,"z":-2.279341610876138},{"x":-7.78797875720985,"y":42.25329942660333,"z":-2.2646084606144075},{"x":-7.831786906504576,"y":42.23409987829421,"z":-2.249881390200289},{"x":-7.875639358948563,"y":42.21481286806131,"z":-2.2351321528557246},{"x":-7.9194519366026634,"y":42.19547529023255,"z":-2.2203890442468293},{"x":-7.96325277830218,"y":42.176074737710465,"z":-2.205642597836901},{"x":-8.007016022312047,"y":42.15662266701676,"z":-2.190901519822352},{"x":-8.050800920993868,"y":42.1370926729354,"z":-2.176145846497074},{"x":-8.094583980253937,"y":42.117495074016254,"z":-2.161383477477017},{"x":-8.138336970298392,"y":42.097842465417,"z":-2.1466239257308635},{"x":-8.182077770053013,"y":42.07812680413744,"z":-2.1318611593093673},{"x":-8.225806288401047,"y":42.058348074979975,"z":-2.1170952029526617},{"x":-8.269522434143036,"y":42.038506262880844,"z":-2.1023260814391187},{"x":-8.313226713006456,"y":42.018601080590386,"z":-2.0875536177665936},{"x":-8.356917242596868,"y":41.9986333302731,"z":-2.072778442246585},{"x":-8.400596318835088,"y":41.97860190641321,"z":-2.0579997725226398},{"x":-8.444262656168604,"y":41.9585073391252,"z":-2.043218037164858},{"x":-8.48791616298239,"y":41.93834961401883,"z":-2.0284332611438796},{"x":-8.53155674757953,"y":41.91812871683902,"z":-2.0136454694684867},{"x":-8.575183723198359,"y":41.897844910508894,"z":-1.9988548889230384},{"x":-8.618798782927074,"y":41.877497349916865,"z":-1.9840609393804465},{"x":-8.662400644173545,"y":41.85708657372807,"z":-1.9692640494686402},{"x":-8.705989808866114,"y":41.836612288830956,"z":-1.9544640426578321},{"x":-8.749564996642267,"y":41.81607503966712,"z":-1.9396613475485538},{"x":-8.793125523083098,"y":41.79547509612727,"z":-1.9248561909924033},{"x":-8.836676041338839,"y":41.77481019556775,"z":-1.9100469850165283},{"x":-8.880211712246554,"y":41.75408257102889,"z":-1.895235368252179},{"x":-8.923733629896839,"y":41.73329164754298,"z":-1.880420962733523},{"x":-8.967239926161133,"y":41.71243826455462,"z":-1.8656043986310178},{"x":-9.010737018309591,"y":41.69151928253177,"z":-1.8507834838926203},{"x":-9.054209434885808,"y":41.67054209768687,"z":-1.8359634848928017},{"x":-9.097685461233263,"y":41.649492989692256,"z":-1.8211347523111017},{"x":-9.141138992467107,"y":41.62838451449617,"z":-1.806306180226143},{"x":-9.184578802095357,"y":41.607212372381085,"z":-1.7914747709294057},{"x":-9.228004206293791,"y":41.585976837756604,"z":-1.7766407515836444},{"x":-9.271415111972168,"y":41.56467789870977,"z":-1.7618041478512236},{"x":-9.314812604021345,"y":41.54331496271495,"z":-1.746964582550537},{"x":-9.358195409692778,"y":41.52188859576284,"z":-1.7321224843834988},{"x":-9.401564023962036,"y":41.500398494421695,"z":-1.717277677728388},{"x":-9.444918352330282,"y":41.47884464499563,"z":-1.7024301884644515},{"x":-9.488257712629007,"y":41.45722732743379,"z":-1.6875802438677725},{"x":-9.531582598502363,"y":41.43554623638409,"z":-1.6727276684965096},{"x":-9.574887633501453,"y":41.41380401415769,"z":-1.6578743001655123},{"x":-9.61818270299564,"y":41.39199563933657,"z":-1.6430167423656645},{"x":-9.661457739207536,"y":41.37012612283219,"z":-1.6281584432636012},{"x":-9.704733158453848,"y":41.34818506368816,"z":-1.613292384792601},{"x":-9.747987177652986,"y":41.326183421218474,"z":-1.5984260401092516},{"x":-9.791202163409665,"y":41.30413017752353,"z":-1.5835654705499442},{"x":-9.834444130679367,"y":41.28199154506222,"z":-1.568687966846186},{"x":-9.877649218409736,"y":41.25980010020163,"z":-1.5538154857040107},{"x":-9.920838392780848,"y":41.237545070456406,"z":-1.5389408102699265},{"x":-9.964015060536134,"y":41.21522463371397,"z":-1.524062760233183},{"x":-10.007174455299106,"y":41.19284118932987,"z":-1.509182970950415},{"x":-10.050317650316016,"y":41.17039412535425,"z":-1.4943010665320529},{"x":-10.09344629813328,"y":41.14788251934694,"z":-1.4794164703119048},{"x":-10.13655913662162,"y":41.125306965631786,"z":-1.4645296109491577},{"x":-10.179656069857616,"y":41.102667452965434,"z":-1.4496405149974907},{"x":-10.222737583083902,"y":41.079963663508416,"z":-1.434749008110541},{"x":-10.265802417333632,"y":41.057196199019515,"z":-1.4198555188275395},{"x":-10.308834804563618,"y":41.034373374977875,"z":-1.404965497600848},{"x":-10.351884569226344,"y":41.011468665842685,"z":-1.3900616951897404},{"x":-10.394899373894008,"y":40.98850981227267,"z":-1.3751622177192884},{"x":-10.43790175286569,"y":40.965484764132746,"z":-1.360259258110866},{"x":-10.480878285950284,"y":40.94240065703775,"z":-1.3453574614822457},{"x":-10.523853772799795,"y":40.91924409479012,"z":-1.330448221517545},{"x":-10.56680380255301,"y":40.89602814841502,"z":-1.315539997310988},{"x":-10.609739851361287,"y":40.872746568622006,"z":-1.300628800894101},{"x":-10.652656620144656,"y":40.84940216461733,"z":-1.2857164655432816},{"x":-10.695532668380041,"y":40.826006601015536,"z":-1.2708104407230523},{"x":-10.738444057113197,"y":40.80251824658444,"z":-1.2558842724242203},{"x":-10.781311066975748,"y":40.77898060102991,"z":-1.2409656727210407},{"x":-10.82416129474486,"y":40.75537852030713,"z":-1.22604503927255},{"x":-10.86699464199106,"y":40.73171199323698,"z":-1.2111223993643516},{"x":-10.909811010198899,"y":40.70798100879289,"z":-1.1961977803232449},{"x":-10.95259133899802,"y":40.68419611273832,"z":-1.1812778234580172},{"x":-10.995391840809875,"y":40.66032594511036,"z":-1.1663429147444881},{"x":-11.038156680353005,"y":40.63640152468547,"z":-1.1514125226436476},{"x":-11.080903572546292,"y":40.61241292652167,"z":-1.1364804614494086},{"x":-11.123632992647693,"y":40.58835981968889,"z":-1.121546558304443},{"x":-11.16634484163198,"y":40.56424219408068,"z":-1.1066108407814172},{"x":-11.20903844821196,"y":40.54006036426508,"z":-1.09167353671002},{"x":-11.251714286184825,"y":40.51581399746304,"z":-1.0767344734578355},{"x":-11.294372827636014,"y":40.4915027579731,"z":-1.0617934785751961},{"x":-11.33701283007313,"y":40.467127287654925,"z":-1.0468509801229098},{"x":-11.379634765821336,"y":40.44268725188677,"z":-1.0319068056974003},{"x":-11.422237395094136,"y":40.41818329821721,"z":-1.016961383184907},{"x":-11.464824039054099,"y":40.39361344744944,"z":-1.0020135402381813},{"x":-11.50738776141686,"y":40.368981640279785,"z":-0.987065704717796},{"x":-11.549939850102572,"y":40.34428127312174,"z":-0.9721139052300108},{"x":-11.592471094749877,"y":40.319517612716155,"z":-0.9571613692562075},{"x":-11.634982536508284,"y":40.294689995475856,"z":-0.9422077246715631},{"x":-11.677475780759238,"y":40.26979741887306,"z":-0.9272523998920349},{"x":-11.719950158917479,"y":40.24484020626105,"z":-0.9122956229049771},{"x":-11.762405570786209,"y":40.21981834972025,"z":-0.897337421855878},{"x":-11.804842482460081,"y":40.194731506230916,"z":-0.8823776252458029},{"x":-11.847260226358717,"y":40.16958000191962,"z":-0.8674164610679272},{"x":-11.889657570981099,"y":40.144364502917306,"z":-0.8524543567983215},{"x":-11.932037243860474,"y":40.11908331876885,"z":-0.8374903426865139},{"x":-11.974382764943327,"y":40.09374624658439,"z":-0.8225302335586328},{"x":-12.016734128552043,"y":40.06832926444496,"z":-0.8075598915343338},{"x":-12.059059038384195,"y":40.04285163342042,"z":-0.7925907186140513},{"x":-12.101356282193338,"y":40.01731405553908,"z":-0.7776231405415616},{"x":-12.143643791860358,"y":39.99170563267144,"z":-0.7626508048048263},{"x":-12.185897254303471,"y":39.96604102877388,"z":-0.7476823125112951},{"x":-12.228148640380999,"y":39.94030075022096,"z":-0.73270633095807},{"x":-12.270370847471066,"y":39.91450121305906,"z":-0.7177324555367476},{"x":-12.312574458474245,"y":39.88863590420978,"z":-0.7027569284810854},{"x":-12.35475656415796,"y":39.86270653700106,"z":-0.6877807745632932},{"x":-12.39691986748985,"y":39.83671138083781,"z":-0.6728030268481467},{"x":-12.439062583266388,"y":39.81065146359994,"z":-0.6578243116634049},{"x":-12.48118460989136,"y":39.784526780103604,"z":-0.6428446578519731},{"x":-12.523285286650932,"y":39.75833767353401,"z":-0.6278642932444407},{"x":-12.565367306101301,"y":39.73208239648575,"z":-0.6128822521203249},{"x":-12.607428328484566,"y":39.70576233405753,"z":-0.597899359421146},{"x":-12.649468809591008,"y":39.679377131241914,"z":-0.5829154453474105},{"x":-12.691488088821023,"y":39.65292713264117,"z":-0.5679307378482011},{"x":-12.733486620914972,"y":39.62641198206314,"z":-0.5529450673011096},{"x":-12.775463746000085,"y":39.59983202595566,"z":-0.5379586616422554},{"x":-12.817420473688948,"y":39.57318655343769,"z":-0.5229711528140446},{"x":-12.859355032540268,"y":39.54647661905994,"z":-0.5079831660144244},{"x":-12.901268986584192,"y":39.519701156500275,"z":-0.4929941348017026},{"x":-12.943161676063546,"y":39.49286051363152,"z":-0.4780042872309362},{"x":-12.985035213556253,"y":39.465953258878805,"z":-0.4630128591254844},{"x":-13.026876201552213,"y":39.43898795264818,"z":-0.44802464136469433},{"x":-13.068714436844612,"y":39.411945301144804,"z":-0.43302895153404},{"x":-13.110520472597106,"y":39.38484423833708,"z":-0.4180363323563795},{"x":-13.152306381197487,"y":39.35767689246324,"z":-0.40304244992563953},{"x":-13.194054947012097,"y":39.33045442124324,"z":-0.38805347731992185},{"x":-13.235806355341747,"y":39.303150527041204,"z":-0.37305497812071836},{"x":-13.277528485976264,"y":39.27578608833558,"z":-0.3580584763008483},{"x":-13.31922895876869,"y":39.24835605465333,"z":-0.3430612276234445},{"x":-13.360904917646023,"y":39.220862236312286,"z":-0.32806425185151156},{"x":-13.402556263408739,"y":39.19330463856024,"z":-0.31306757824996057},{"x":-13.44418893661997,"y":39.165679253993005,"z":-0.29806905988752413},{"x":-13.485797336519692,"y":39.13798971894942,"z":-0.2830707057397275},{"x":-13.527383006734649,"y":39.11023493802727,"z":-0.2680719521585575},{"x":-13.568946389869057,"y":39.0824145411003,"z":-0.25307263154289267},{"x":-13.610486832160756,"y":39.05452889081639,"z":-0.23807297179316717},{"x":-13.65199055999357,"y":39.026587198090716,"z":-0.22307794213461296},{"x":-13.693500111994279,"y":38.99856071154859,"z":-0.20807216304452772},{"x":-13.734971644412825,"y":38.97047891322178,"z":-0.19307146972509787},{"x":-13.776418722989453,"y":38.94233259173956,"z":-0.1780709530517926},{"x":-13.817846148612947,"y":38.91411840573757,"z":-0.16306886698903508},{"x":-13.859248906353013,"y":38.8858396882083,"z":-0.14806701861046365},{"x":-13.900627981124325,"y":38.85749569589389,"z":-0.1330650435421012},{"x":-13.941983810540096,"y":38.82908605351577,"z":-0.11806277507590388},{"x":-13.983316287284778,"y":38.80061075750725,"z":-0.10306024388240333},{"x":-14.024610657664235,"y":38.772079936499416,"z":-0.08806280081914315},{"x":-14.065909127152583,"y":38.74346431923455,"z":-0.07305510716146922},{"x":-14.107170361098882,"y":38.71479242169401,"z":-0.058052168987281084},{"x":-14.148404567184766,"y":38.68605712446658,"z":-0.04305027225496743},{"x":-14.18960678167587,"y":38.65726184233839,"z":-0.02805121797211939},{"x":-14.230809860992375,"y":38.62838348872477,"z":-0.013043033144623666},{"x":-14.271973163734863,"y":38.59945043768481,"z":0.0019594918701933534},{"x":-14.3131154915249,"y":38.5704494355733,"z":0.016963213007892816},{"x":-14.354230803179153,"y":38.54138466028363,"z":0.031965935989083316},{"x":-14.395323840661739,"y":38.51225268369494,"z":0.04696939907788102},{"x":-14.436391264291093,"y":38.483055791406244,"z":0.06197239179949928},{"x":-14.47743404290805,"y":38.453793219605664,"z":0.07697527607522381},{"x":-14.51843006714466,"y":38.42448071752467,"z":0.09196997227749648},{"x":-14.55944523145393,"y":38.39507103272173,"z":0.10698059431922598},{"x":-14.600413424353398,"y":38.36561141571976,"z":0.12198296569496676},{"x":-14.641357073304395,"y":38.33608572899701,"z":0.13698529954876482},{"x":-14.682259494725171,"y":38.30650597022881,"z":0.1519814869217038},{"x":-14.723164957170333,"y":38.276840014178745,"z":0.16698776846505875},{"x":-14.764034317660183,"y":38.24711611011255,"z":0.18198980063557257},{"x":-14.804878159720003,"y":38.21732651589677,"z":0.19699147277352572},{"x":-14.845694776428711,"y":38.187472401929476,"z":0.21199216596074386},{"x":-14.88648512742201,"y":38.15755299366851,"z":0.22699224060262765},{"x":-14.927250168241011,"y":38.127567510872154,"z":0.24199205652938},{"x":-14.967991381419441,"y":38.097514775351854,"z":0.25699216856572055},{"x":-15.008705467899356,"y":38.067397137220745,"z":0.27199137109178884},{"x":-15.049393381464563,"y":38.037213814592135,"z":0.2869900236052584},{"x":-15.090052894244511,"y":38.006966386636606,"z":0.30198731278428936},{"x":-15.130688664442935,"y":37.9766513069754,"z":0.31698496530441345},{"x":-15.171301103290782,"y":37.94626817042638,"z":0.3319831434382705},{"x":-15.211881642955712,"y":37.91582331215336,"z":0.34697869135719794},{"x":-15.252440739772915,"y":37.88530880854151,"z":0.36197548100808824},{"x":-15.292970363023818,"y":37.854730611640036,"z":0.37697055289908343},{"x":-15.333475149015436,"y":37.82408514529547,"z":0.39196563055427736},{"x":-15.37394288362726,"y":37.79338159354478,"z":0.40695619876324013},{"x":-15.414388724995472,"y":37.76260839208738,"z":0.4219478788492457},{"x":-15.454803623111257,"y":37.73177233955938,"z":0.436937325948924},{"x":-15.495221566998378,"y":37.70084734035664,"z":0.45193716238149717},{"x":-15.535587868415606,"y":37.66987512953365,"z":0.46692710586777825},{"x":-15.575932322242965,"y":37.63883282810897,"z":0.4819182215435498},{"x":-15.61624643475905,"y":37.60772687888153,"z":0.4969073635128761},{"x":-15.656534281951073,"y":37.576554059441484,"z":0.5118960553896195},{"x":-15.696784268346777,"y":37.545323285953906,"z":0.5268799895672139},{"x":-15.737024463021386,"y":37.51401267407464,"z":0.5418696255966793},{"x":-15.777230744542956,"y":37.48264086674649,"z":0.5568559924357409},{"x":-15.817401458667723,"y":37.451209115315564,"z":0.5718384777513498},{"x":-15.857552627535615,"y":37.419704798341364,"z":0.5868230658245309},{"x":-15.897676844549233,"y":37.38813361017101,"z":0.6018070052633052},{"x":-15.937769325946958,"y":37.35649923720199,"z":0.6167885180872984},{"x":-15.977834114942043,"y":37.3247984143693,"z":0.6317691229891934},{"x":-16.017870579433588,"y":37.29303155424224,"z":0.6467485929976674},{"x":-16.05787860641683,"y":37.26119866058044,"z":0.6617268950128502},{"x":-16.097849818759325,"y":37.22930633912974,"z":0.6767008994469952},{"x":-16.137805283687843,"y":37.19733768199499,"z":0.6916785083007322},{"x":-16.177730931084167,"y":37.16530381893225,"z":0.7066544614416633},{"x":-16.217624076409273,"y":37.13320683266193,"z":0.7216277596078825},{"x":-16.257488732366674,"y":37.10104341912076,"z":0.7365999168349363},{"x":-16.29732324244661,"y":37.06881482971419,"z":0.7515703201278539},{"x":-16.33713108916837,"y":37.036518155432795,"z":0.7665402879136093},{"x":-16.37690856173472,"y":37.004156314337614,"z":0.7815084347453262},{"x":-16.416652988854956,"y":36.971731408042665,"z":0.7964737631738914},{"x":-16.45637450066575,"y":36.939235075913444,"z":0.8114400974994451},{"x":-16.49606427369291,"y":36.906674432341966,"z":0.8264041246369693},{"x":-16.535724242663584,"y":36.87404781005414,"z":0.8413665825099755},{"x":-16.575350723726643,"y":36.84135816388684,"z":0.8563260895353351},{"x":-16.614954312260277,"y":36.808596654907895,"z":0.8712866557335048},{"x":-16.6545246934818,"y":36.77577171270102,"z":0.886244396003431},{"x":-16.69405871317142,"y":36.74288589715317,"z":0.9011981241995005},{"x":-16.73357506421447,"y":36.709923550698846,"z":0.9161549217886417},{"x":-16.773047215766102,"y":36.676906715596935,"z":0.9311047573167622},{"x":-16.812502457558605,"y":36.64381248079951,"z":0.9460579746370967},{"x":-16.851921398360787,"y":36.610656991931386,"z":0.96100723807025},{"x":-16.89131051389405,"y":36.577434730630074,"z":0.9759550108891104},{"x":-16.930672715933973,"y":36.54414313512777,"z":0.9909024092898062},{"x":-16.970000310040056,"y":36.51078862162104,"z":1.0058465214428978},{"x":-17.00929571238854,"y":36.47736906841595,"z":1.0207882731282196},{"x":-17.048563844290378,"y":36.44388019117027,"z":1.035729546025303},{"x":-17.08779703637062,"y":36.410328438557755,"z":1.0506674320840317},{"x":-17.12700271775065,"y":36.376707367364475,"z":1.0656047692539568},{"x":-17.166170226312314,"y":36.34302603900787,"z":1.080537504409313},{"x":-17.205300972025505,"y":36.30928319291195,"z":1.095466180190112},{"x":-17.244427386060558,"y":36.27545069782411,"z":1.110403185861832},{"x":-17.28350576932371,"y":36.24156620282909,"z":1.1253318549816034},{"x":-17.322553536958296,"y":36.20761457222392,"z":1.1402588435910894},{"x":-17.361541142766196,"y":36.17362149719421,"z":1.1551728578499445},{"x":-17.40054827375151,"y":36.13951733415164,"z":1.170104395374473},{"x":-17.43948208350333,"y":36.10538311563523,"z":1.1850179341591645},{"x":-17.478423610955275,"y":36.071147716194915,"z":1.199944521332584},{"x":-17.5173085599137,"y":36.03686750196189,"z":1.2148595310454164},{"x":-17.556139872732743,"y":36.002539951990244,"z":1.2297640839758943},{"x":-17.594967529628324,"y":35.968120768681565,"z":1.2446773743517223},{"x":-17.633780428626228,"y":35.93361952628239,"z":1.259595166979073},{"x":-17.672538365560364,"y":35.899071878408606,"z":1.27450201978006},{"x":-17.71123883332846,"y":35.864480137891945,"z":1.2893969602239626},{"x":-17.749956730000594,"y":35.82977717960823,"z":1.3043088313100346},{"x":-17.7886164267215,"y":35.79503059007698,"z":1.3192085292923816},{"x":-17.827242975595908,"y":35.76021785489359,"z":1.3341057082999228},{"x":-17.86581366352691,"y":35.725359430130965,"z":1.3489916108789255},{"x":-17.904397628639188,"y":35.69039265670945,"z":1.3638929363091756},{"x":-17.942925002585735,"y":35.65538065822271,"z":1.3787827243936563},{"x":-17.98141924240344,"y":35.62030211044039,"z":1.3936700405931814},{"x":-18.01987973896213,"y":35.58515747047316,"z":1.4085546598197825},{"x":-18.058305885423927,"y":35.54994719841943,"z":1.423436357329221},{"x":-18.096699027841556,"y":35.514669962903746,"z":1.4383156648393314},{"x":-18.135059530960884,"y":35.4793253230834,"z":1.4531927349868412},{"x":-18.17338532478164,"y":35.44391508555373,"z":1.468066775807383},{"x":-18.211676778060294,"y":35.408438814748976,"z":1.482937940533792},{"x":-18.24992940449536,"y":35.37290058629572,"z":1.497804495628236},{"x":-18.288155702418937,"y":35.337288678657615,"z":1.5126713097699174},{"x":-18.326345840931516,"y":35.301612125435106,"z":1.5275345732698977},{"x":-18.36447746715678,"y":35.265891804820654,"z":1.5423855877580994},{"x":-18.402621047399894,"y":35.23006152993806,"z":1.5572518138670342},{"x":-18.440705877987504,"y":35.19418751755179,"z":1.5721057190865177},{"x":-18.478756973944442,"y":35.15824619738237,"z":1.586957059691981},{"x":-18.51677228619846,"y":35.12223940278873,"z":1.6018050469122673},{"x":-18.55475313833892,"y":35.08616578026613,"z":1.6166502083323302},{"x":-18.592693169396007,"y":35.050031289060804,"z":1.631490066730808},{"x":-18.630603780983673,"y":35.01382496969056,"z":1.646329092052678},{"x":-18.668484829588007,"y":34.97754681123085,"z":1.6611672439413776},{"x":-18.70631991978038,"y":34.94121242915483,"z":1.6759981100470547},{"x":-18.744125201177514,"y":34.9048062332455,"z":1.690828028894283},{"x":-18.78189528549296,"y":34.86833328380936,"z":1.7056549007468145},{"x":-18.819630525165046,"y":34.83179313173434,"z":1.7204788755648133},{"x":-18.857327465811366,"y":34.795189023912535,"z":1.7352986069269087},{"x":-18.894988844176087,"y":34.75851820759936,"z":1.7501151808095878},{"x":-18.932610741938745,"y":34.72178440533199,"z":1.764927065731975},{"x":-18.970199207793154,"y":34.6849816103235,"z":1.7797366536445987},{"x":-19.007755527546816,"y":34.64810843102368,"z":1.7945444652694222},{"x":-19.045271530701857,"y":34.61117278193238,"z":1.809347290888482},{"x":-19.08275182796142,"y":34.57417003171215,"z":1.8241469594190782},{"x":-19.120184513413257,"y":34.53711186880377,"z":1.8389387770876138},{"x":-19.15759350648059,"y":34.4999745026884,"z":1.853732206764933},{"x":-19.194965003852122,"y":34.46277147697022,"z":1.8685218074601413},{"x":-19.232304047170498,"y":34.42549765105755,"z":1.8833095871966166},{"x":-19.269599715171797,"y":34.388163826007506,"z":1.8980912319119276},{"x":-19.306850505435207,"y":34.350771456761514,"z":1.9128661514290288},{"x":-19.34407922904867,"y":34.31329751056084,"z":1.927643406982547},{"x":-19.381261894323988,"y":34.27576599808164,"z":1.942413491247164},{"x":-19.4184040062885,"y":34.23817130474077,"z":1.957178596968887},{"x":-19.455511970628617,"y":34.200506837879544,"z":1.9719412820023778},{"x":-19.492590297880067,"y":34.162767862667025,"z":1.9867033573506094},{"x":-19.529623510227562,"y":34.12497001775888,"z":2.001458673643315},{"x":-19.566616612799134,"y":34.08710812642555,"z":2.016209232203546},{"x":-19.6035764345543,"y":34.04917507984065,"z":2.0309577685132134},{"x":-19.640494971322735,"y":34.01117897470709,"z":2.0457011014941524},{"x":-19.677372572862964,"y":33.9731193657861,"z":2.0604393799171135},{"x":-19.71421926842647,"y":33.93498577286337,"z":2.075176625480453},{"x":-19.75100175223373,"y":33.896812627431586,"z":2.0898995223931247},{"x":-19.78778897156045,"y":33.85852819970836,"z":2.1046356843772984},{"x":-19.824510373710584,"y":33.820205719929746,"z":2.1193568728644188},{"x":-19.86120354197293,"y":33.781805932548835,"z":2.1340781567664195},{"x":-19.897852739870768,"y":33.74334516688522,"z":2.148793238053221},{"x":-19.93446289185227,"y":33.70481816551906,"z":2.163504103333438},{"x":-19.971033871990088,"y":33.66622494825096,"z":2.1782107140534555},{"x":-20.00756555428953,"y":33.627565535122905,"z":2.1929130316143652},{"x":-20.04405781268876,"y":33.58883994641868,"z":2.207611017371994},{"x":-20.080510521059125,"y":33.55004820266427,"z":2.222304632636928},{"x":-20.11692037579763,"y":33.51119371955554,"z":2.236992556562013},{"x":-20.15328953070685,"y":33.472274103632216,"z":2.2516756680761296},{"x":-20.18962555768169,"y":33.43328111298534,"z":2.2663570387114205},{"x":-20.22591383849959,"y":33.39423032214966,"z":2.2810307746257106},{"x":-20.26217188047399,"y":33.35510276959273,"z":2.2957039675037856},{"x":-20.298391402276344,"y":33.315907222863565,"z":2.3103732843752582},{"x":-20.334558770375956,"y":33.276658363632194,"z":2.325033211707817},{"x":-20.37069682421053,"y":33.237331297682076,"z":2.3396930179241093},{"x":-20.4067843012578,"y":33.19794903874714,"z":2.3543440917975387},{"x":-20.44284038151272,"y":33.158490545817806,"z":2.3689942311997014},{"x":-20.47885102961059,"y":33.11897103790525,"z":2.3836377489098517},{"x":-20.51482105168715,"y":33.079385144245784,"z":2.3982766094258103},{"x":-20.55074987278977,"y":33.039733379411295,"z":2.4129105914039775},{"x":-20.58663736587976,"y":33.00001576736429,"z":2.427539655524264},{"x":-20.622482959220132,"y":32.96023282640529,"z":2.442163580974754},{"x":-20.658277648340864,"y":32.920394477624875,"z":2.4567787022741245},{"x":-20.694053265534794,"y":32.880465119013664,"z":2.4713980340556625},{"x":-20.729775498791103,"y":32.84048287077184,"z":2.4860075751173083},{"x":-20.76544383133414,"y":32.80044830492853,"z":2.500607114803647},{"x":-20.801089520680826,"y":32.760326190212,"z":2.5152094618380656},{"x":-20.83668987984355,"y":32.72014186294993,"z":2.5298053446258777},{"x":-20.87224479547358,"y":32.67989536258092,"z":2.5443947261530098},{"x":-20.907755471920282,"y":32.63958523108389,"z":2.5589781106815437},{"x":-20.943227929487882,"y":32.59920450449044,"z":2.573557984269844},{"x":-20.978657641286393,"y":32.55875819539498,"z":2.5881325014772165},{"x":-21.014043167947968,"y":32.51824783419603,"z":2.6027010823010226},{"x":-21.049385697309095,"y":32.47767194852872,"z":2.6172642277595566},{"x":-21.084685973130483,"y":32.43702956105188,"z":2.63182225748609},{"x":-21.119930809151963,"y":32.396335787029315,"z":2.6463697409906906},{"x":-21.15515662912701,"y":32.35554839869919,"z":2.6609217294620495},{"x":-21.190328922057635,"y":32.31470715849609,"z":2.6754639885820817},{"x":-21.225455835725196,"y":32.27380254467604,"z":2.6899998932941163},{"x":-21.260538979767194,"y":32.23283257127612,"z":2.704530121543014},{"x":-21.29558124782057,"y":32.19179372385998,"z":2.719055886116266},{"x":-21.330580773053537,"y":32.150688045803115,"z":2.7335764285127118},{"x":-21.365528814679568,"y":32.10952571027448,"z":2.748088132586567},{"x":-21.40043129430433,"y":32.068299665803075,"z":2.762593465196991},{"x":-21.435300099515874,"y":32.026995703868366,"z":2.777097384193321},{"x":-21.47012006180828,"y":31.985631634881123,"z":2.7915935975306736},{"x":-21.504906891939537,"y":31.944188639180346,"z":2.8060886619956817},{"x":-21.539634368314008,"y":31.902697843441075,"z":2.8205716644819483},{"x":-21.57433524525957,"y":31.86111997831738,"z":2.835056278388992},{"x":-21.60897952393016,"y":31.81949082392055,"z":2.8495300004361233},{"x":-21.643580298714785,"y":31.777794575813818,"z":2.863998308191554},{"x":-21.67813616027755,"y":31.7360327976641,"z":2.87846062678434},{"x":-21.712644861033553,"y":31.694208088293166,"z":2.8929160281881763},{"x":-21.74710839353854,"y":31.65231791586805,"z":2.9073653594756865},{"x":-21.78152915809381,"y":31.610359221455184,"z":2.9218096420232853},{"x":-21.815907010795186,"y":31.568332024959954,"z":2.9362488320653015},{"x":-21.85022961358831,"y":31.526251316037246,"z":2.950677757920217},{"x":-21.88452332996148,"y":31.484084610137796,"z":2.9651075188807856},{"x":-21.91875232289408,"y":31.441875845936636,"z":2.9795230505921224},{"x":-21.95293789297996,"y":31.39959871880764,"z":2.9939333270666904},{"x":-21.98710203081121,"y":31.357225761519718,"z":3.0083476462079988},{"x":-22.02119444768191,"y":31.314819209819778,"z":3.022744806973653},{"x":-22.055259677069063,"y":31.272323581983255,"z":3.037143623453582},{"x":-22.089268819658173,"y":31.229774740470027,"z":3.051531901653249},{"x":-22.123228844377447,"y":31.187163902257733,"z":3.0659125965132126},{"x":-22.157124312445195,"y":31.144510415360198,"z":3.0802791734351684},{"x":-22.191018011779374,"y":31.1017349996919,"z":3.0946582713812427},{"x":-22.22483035323878,"y":31.058937892739273,"z":3.109016150598988},{"x":-22.25861740171359,"y":31.016048079518733,"z":3.1233766216042675},{"x":-22.292346839320615,"y":30.973106381490187,"z":3.1377259713297416},{"x":-22.32602925984362,"y":30.930099235762633,"z":3.152068714318175},{"x":-22.35966370964835,"y":30.88702772658699,"z":3.1664044587785085},{"x":-22.393236153170704,"y":30.843909774024326,"z":3.1807272286990997},{"x":-22.426793076636475,"y":30.80068544916835,"z":3.1950568784762305},{"x":-22.46027630548283,"y":30.75742950278034,"z":3.2093685879222758},{"x":-22.49372164403704,"y":30.71409564162111,"z":3.2236776636129694},{"x":-22.527117535248756,"y":30.67069865159592,"z":3.237979181587595},{"x":-22.560471554854367,"y":30.627228524706226,"z":3.252276403278282},{"x":-22.593775038557837,"y":30.583696390370783,"z":3.266565632448125},{"x":-22.6270189797347,"y":30.54011395878918,"z":3.28084301174318},{"x":-22.660232331344847,"y":30.496443101240153,"z":3.295120992916624},{"x":-22.693393131898233,"y":30.452712468654013,"z":3.3093901599375743},{"x":-22.72648680884737,"y":30.408941265944822,"z":3.323644244102341},{"x":-22.75956144014225,"y":30.365065706061873,"z":3.3379039727044897},{"x":-22.792556299031506,"y":30.321166198981462,"z":3.3521431822744217},{"x":-22.82553413415909,"y":30.277159122486438,"z":3.366388964566662},{"x":-22.858446389819118,"y":30.233109025920964,"z":3.3806203725749864},{"x":-22.89130535896821,"y":30.18899943757398,"z":3.394842723345535},{"x":-22.92412006478162,"y":30.144818096676797,"z":3.409059937859361},{"x":-22.956881224374463,"y":30.100577349080275,"z":3.42326801089332},{"x":-22.989588724990014,"y":30.05627725128525,"z":3.4374669037805523},{"x":-23.022264967379176,"y":30.011887235258826,"z":3.4516663645433083},{"x":-23.054880143949326,"y":29.967447597375543,"z":3.4658534624605206},{"x":-23.087444806134073,"y":29.92294388848576,"z":3.480032794560054},{"x":-23.11996039175844,"y":29.878373994182006,"z":3.4942050028122003},{"x":-23.15243381418163,"y":29.83372823633303,"z":3.5083731217645053},{"x":-23.184849241800855,"y":29.789028226808796,"z":3.5225302611813465},{"x":-23.217214391367715,"y":29.744263224011654,"z":3.536679801708148},{"x":-23.2495287354033,"y":29.69943380868553,"z":3.5508215286613636},{"x":-23.28178824883392,"y":29.654545441695834,"z":3.564953693854882},{"x":-23.314001747282138,"y":29.609585704049636,"z":3.579080175138771},{"x":-23.34616364145686,"y":29.5645622185866,"z":3.5931985407000133},{"x":-23.3782784380803,"y":29.519468505143234,"z":3.607310787007601},{"x":-23.41033825801447,"y":29.47431547240542,"z":3.621413468563276},{"x":-23.4423314314155,"y":29.42911952380099,"z":3.635501455870387},{"x":-23.474304038701547,"y":29.38381532072724,"z":3.649595064195975},{"x":-23.5062093396136,"y":29.33846883089493,"z":3.663673720120592},{"x":-23.538059924409627,"y":29.293062130573638,"z":3.6777429819119973},{"x":-23.56986522565763,"y":29.247581597602608,"z":3.6918070345128853},{"x":-23.601593797065114,"y":29.202072156686658,"z":3.7058519783873995},{"x":-23.63331338983726,"y":29.156436370129462,"z":3.719907829317456},{"x":-23.664959040562046,"y":29.110767390391082,"z":3.733945836076015},{"x":-23.69655272560362,"y":29.065033492736905,"z":3.7479757475566293},{"x":-23.728093547731575,"y":29.019235819182178,"z":3.7619971821108296},{"x":-23.759575708673157,"y":28.973382673590955,"z":3.776007574669998},{"x":-23.79101568193662,"y":28.927449878840388,"z":3.790014275368533},{"x":-23.82239296391206,"y":28.88146722228767,"z":3.8040081684575147},{"x":-23.853721357081056,"y":28.83541436025399,"z":3.817995421576661},{"x":-23.885007435949465,"y":28.789281369070768,"z":3.8319789974906375},{"x":-23.916230820037725,"y":28.743098126712233,"z":3.8459498063854065},{"x":-23.947400749414538,"y":28.696850873206948,"z":3.85991199224522},{"x":-23.978517829422945,"y":28.65053854575351,"z":3.8738658437946434},{"x":-24.00957449153373,"y":28.60417228817453,"z":3.8878079802589367},{"x":-24.040590274178225,"y":28.55772273087406,"z":3.9017471934926977},{"x":-24.07154499315963,"y":28.511219894528452,"z":3.915674435212056},{"x":-24.102445563433136,"y":28.464653280804953,"z":3.9295928281011023},{"x":-24.133280802579453,"y":28.41803965518359,"z":3.9434973449726645},{"x":-24.16407378429641,"y":28.371343973134493,"z":3.9573984070430317},{"x":-24.194825024789818,"y":28.32456511136347,"z":3.9712962837158168},{"x":-24.225509430973307,"y":28.277741067007785,"z":3.985179653939732},{"x":-24.256133511254756,"y":28.230861873110026,"z":3.999051465984717},{"x":-24.286713914067185,"y":28.183901842670256,"z":4.012919281987243},{"x":-24.317226080233038,"y":28.13689853219249,"z":4.026771982455898},{"x":-24.3476888107299,"y":28.089822872608085,"z":4.040618113776694},{"x":-24.378106631616816,"y":28.042667586072206,"z":4.054459763280022},{"x":-24.408461645677,"y":27.99546022372969,"z":4.0682888082789},{"x":-24.438759164396718,"y":27.948192427729637,"z":4.082107678772396},{"x":-24.469003732696784,"y":27.900856934369934,"z":4.095918466035799},{"x":-24.499187302854818,"y":27.853466186425425,"z":4.109717511814665},{"x":-24.529322650053277,"y":27.805999940512134,"z":4.123510675831991},{"x":-24.559383877928973,"y":27.7584988873163,"z":4.137286116726444},{"x":-24.589415848656564,"y":27.71089191172564,"z":4.151064414803561},{"x":-24.61938021231255,"y":27.66323950552322,"z":4.164828009294518},{"x":-24.64928754194338,"y":27.615524775495768,"z":4.178581764735718},{"x":-24.679128855787166,"y":27.56776195333777,"z":4.192321561432424},{"x":-24.708930550898717,"y":27.519908563410493,"z":4.206059576381178},{"x":-24.738662786492537,"y":27.472012305149295,"z":4.219782077914692},{"x":-24.768347643921704,"y":27.424037461890975,"z":4.233499272011997},{"x":-24.7979565205611,"y":27.376030149511735,"z":4.247197954476265},{"x":-24.827536971174677,"y":27.32791302204715,"z":4.260900150612915},{"x":-24.85704468840084,"y":27.279757856951978,"z":4.2745853698092935},{"x":-24.886492865951464,"y":27.23154308743656,"z":4.288259734331778},{"x":-24.915890059093275,"y":27.183254493753918,"z":4.301927239199402},{"x":-24.9452239520137,"y":27.13491211532212,"z":4.315582179373064},{"x":-24.97450308363487,"y":27.086501722477045,"z":4.329228546203385},{"x":-25.00372349627756,"y":27.03802965807695,"z":4.342864516721585},{"x":-25.032885396685966,"y":26.989495407185245,"z":4.356490205774847},{"x":-25.061987615422915,"y":26.940900748916302,"z":4.370105084863737},{"x":-25.091034128930033,"y":26.89223885173625,"z":4.383711034607122},{"x":-25.120019651511065,"y":26.843518384468968,"z":4.397305599212078},{"x":-25.14894678421545,"y":26.794734810484016,"z":4.410890016088058},{"x":-25.177817761834497,"y":26.74588415286085,"z":4.424465356857128},{"x":-25.206628352912187,"y":26.69697337513901,"z":4.438029653000519},{"x":-25.235378424987733,"y":26.64800254111857,"z":4.451582859370646},{"x":-25.26407155767377,"y":26.59896536137889,"z":4.4651266838358215},{"x":-25.29270456151581,"y":26.549867086288934,"z":4.478659642453753},{"x":-25.32127024716982,"y":26.500719928520134,"z":4.492178349894646},{"x":-25.349790302827035,"y":26.451486338658388,"z":4.505693094304282},{"x":-25.37824409864353,"y":26.402201669699366,"z":4.519194128484089},{"x":-25.40663920569569,"y":26.35285266674995,"z":4.532685059591113},{"x":-25.43497314415466,"y":26.30344344818891,"z":4.546164729979247},{"x":-25.463242462560643,"y":26.253979890490914,"z":4.559631512981917},{"x":-25.491458960160955,"y":26.204441133459646,"z":4.573091051917546},{"x":-25.519613527465285,"y":26.15484292196143,"z":4.5865390283921075},{"x":-25.547703727983507,"y":26.105189402059956,"z":4.599974294338073},{"x":-25.575739952401733,"y":26.055461989645632,"z":4.61340184227999},{"x":-25.603711199102694,"y":26.00567997682049,"z":4.626816427257859},{"x":-25.631618662191514,"y":25.955841107014027,"z":4.6402186359303315},{"x":-25.659471015306934,"y":25.905929667811776,"z":4.653612657116816},{"x":-25.687258969617176,"y":25.855962079059537,"z":4.666994048389452},{"x":-25.71498499799236,"y":25.805933731776566,"z":4.680364017809107},{"x":-25.74265089983203,"y":25.755841173726868,"z":4.693723454954013},{"x":-25.770254262989916,"y":25.705688568061543,"z":4.707071216972806},{"x":-25.797794306769354,"y":25.655477156225274,"z":4.72040694530163},{"x":-25.825272822941443,"y":25.605203482496123,"z":4.733731527684424},{"x":-25.85269382196518,"y":25.554859962427003,"z":4.747046935062114},{"x":-25.88004946664928,"y":25.50446076688957,"z":4.760349385365482},{"x":-25.90734281885825,"y":25.4540000830443,"z":4.773640385735152},{"x":-25.934561358243034,"y":25.403500971251535,"z":4.786913849042968},{"x":-25.96174174838412,"y":25.352895098039628,"z":4.8001876864052795},{"x":-25.988844512048768,"y":25.30225565238098,"z":4.813442653684679},{"x":-26.015890083048628,"y":25.251544346445087,"z":4.826688755065555},{"x":-26.042866969757,"y":25.20078251685929,"z":4.839920385283699},{"x":-26.069786342429904,"y":25.149948941126357,"z":4.853143044417182},{"x":-26.09663645886292,"y":25.099065584008834,"z":4.8663509875666735},{"x":-26.123429052824967,"y":25.04811000423453,"z":4.879550008112578},{"x":-26.150150580246244,"y":24.997107762600315,"z":4.892733455486226},{"x":-26.17681798570703,"y":24.946026291188293,"z":4.905909713020016},{"x":-26.203410667129102,"y":24.894904848424435,"z":4.919068624087194},{"x":-26.22995135242337,"y":24.843699526099698,"z":4.932221457331704},{"x":-26.256420453601283,"y":24.792447848682144,"z":4.945358534850494},{"x":-26.282827990332358,"y":24.74113025437199,"z":4.958484846340205},{"x":-26.309170130564993,"y":24.689753955885745,"z":4.971598512194776},{"x":-26.335444910281506,"y":24.638322607930064,"z":4.9846985735556},{"x":-26.36165706427506,"y":24.586826735868236,"z":4.99778741296062},{"x":-26.387807639676275,"y":24.535264008715238,"z":5.01086558250293},{"x":-26.413890728152808,"y":24.483645848243388,"z":5.023930151991339},{"x":-26.439906506178144,"y":24.431971737720733,"z":5.036981227707559},{"x":-26.465860847943475,"y":24.38022977425501,"z":5.050021781379943},{"x":-26.49174040981822,"y":24.32844639587084,"z":5.063045126658588},{"x":-26.51756779957563,"y":24.276576108584088,"z":5.0760626669379425},{"x":-26.543323420316277,"y":24.224657959664334,"z":5.089064558961879},{"x":-26.569014000153118,"y":24.17267822538033,"z":5.102054216132509},{"x":-26.59464056860652,"y":24.120634568389733,"z":5.1150321861277925},{"x":-26.620198245008197,"y":24.068536683588686,"z":5.127996020650404},{"x":-26.645691022736305,"y":24.016376223010962,"z":5.1409477673138095},{"x":-26.67111669195554,"y":23.964157473781224,"z":5.153886328543648},{"x":-26.696475696972357,"y":23.911879306181355,"z":5.166811953629369},{"x":-26.72176090170042,"y":23.859556285603745,"z":5.179721021161287},{"x":-26.746977161236774,"y":23.807178247511676,"z":5.192616022226104},{"x":-26.772144904550682,"y":23.754702343572845,"z":5.205507447087857},{"x":-26.797244189624156,"y":23.702169712293646,"z":5.21838512911111},{"x":-26.822269414623467,"y":23.649591941341843,"z":5.231246209042451},{"x":-26.84722651942393,"y":23.59695641123219,"z":5.2440937542105965},{"x":-26.872115650074505,"y":23.54426259481797,"z":5.256927863208651},{"x":-26.896938374482065,"y":23.491506928847617,"z":5.269749370510313},{"x":-26.921691976389845,"y":23.438694950377513,"z":5.2825568984252245},{"x":-26.946379154244152,"y":23.38582066424861,"z":5.295351868445004},{"x":-26.970997205162842,"y":23.33288961489872,"z":5.308132905959587},{"x":-26.995545428978915,"y":23.2799031021174,"z":5.320899669465878},{"x":-27.020017520388738,"y":23.22687461236522,"z":5.333648893230226},{"x":-27.044441378871873,"y":23.17374330226376,"z":5.346395152270013},{"x":-27.068786271229776,"y":23.120575647262775,"z":5.3591224497324035},{"x":-27.093063822084854,"y":23.06734613538343,"z":5.371836875654595},{"x":-27.117271099881428,"y":23.014060947857804,"z":5.384536921202859},{"x":-27.141399962568382,"y":22.960737898746434,"z":5.3972183266846425},{"x":-27.165475675262964,"y":22.90732083044603,"z":5.409894404120492},{"x":-27.189477358921067,"y":22.853855661601195,"z":5.422554204835193},{"x":-27.21340764601045,"y":22.800336368395627,"z":5.4351991342958135},{"x":-27.237267770371574,"y":22.746759975318337,"z":5.447829867505374},{"x":-27.26105758973135,"y":22.693126565969887,"z":5.460446354361054},{"x":-27.284778856830865,"y":22.639431927032362,"z":5.473049552296044},{"x":-27.30843060100984,"y":22.585677976841286,"z":5.485638975435624},{"x":-27.33200971129959,"y":22.531871557154947,"z":5.498212992436902},{"x":-27.355520620425825,"y":22.478002304062297,"z":5.510773993504888},{"x":-27.378961289420584,"y":22.42407459938952,"z":5.5233209203747835},{"x":-27.402315597719873,"y":22.370125485400376,"z":5.535845149820872},{"x":-27.425613798647053,"y":22.316084847452654,"z":5.548362928851146},{"x":-27.448851100425696,"y":22.26196318676091,"z":5.560871748696343},{"x":-27.472011445383128,"y":22.207797575584927,"z":5.5733630011191035},{"x":-27.495096846434603,"y":22.15358318472442,"z":5.5858377846541964},{"x":-27.518112426616597,"y":22.099307754950345,"z":5.598298891808343},{"x":-27.541053850989876,"y":22.04498126017367,"z":5.610744002340849},{"x":-27.563924636451087,"y":21.990595133818513,"z":5.623175049385284},{"x":-27.586725142329822,"y":21.93614821846046,"z":5.6355922606086235},{"x":-27.60945262539233,"y":21.881646790481884,"z":5.647994171488553},{"x":-27.632107720390337,"y":21.827089081260652,"z":5.660381154704148},{"x":-27.654690538890282,"y":21.77247455871574,"z":5.672753299400073},{"x":-27.67718562329672,"y":21.71784056675354,"z":5.6851021419068575},{"x":-27.699639774400598,"y":21.663072939059685,"z":5.69745342519886},{"x":-27.72200538295444,"y":21.608287258526143,"z":5.709781020979945},{"x":-27.744298374878504,"y":21.553444493538617,"z":5.722093708795214},{"x":-27.7665183487913,"y":21.49854535452149,"z":5.734391296579091},{"x":-27.7886654081437,"y":21.443589307987526,"z":5.7466738712786825},{"x":-27.810739153470426,"y":21.388577065903895,"z":5.7589412412178795},{"x":-27.83273719951557,"y":21.333514332029782,"z":5.771192106646912},{"x":-27.85466016767131,"y":21.278399335180378,"z":5.78342683665383},{"x":-27.876506940426506,"y":21.223234671367823,"z":5.795644830441978},{"x":-27.89829928402442,"y":21.167964826954304,"z":5.807858318961466},{"x":-27.92000473983179,"y":21.112671714877965,"z":5.820049156056515},{"x":-27.941636240315212,"y":21.05732232673018,"z":5.832224611429101},{"x":-27.963192906571678,"y":21.00191863198297,"z":5.844384220284207},{"x":-27.984676776939093,"y":20.946455087647237,"z":5.856529164809003},{"x":-28.006085272756135,"y":20.89093804721351,"z":5.868658019850508},{"x":-28.027419216936103,"y":20.8353650987983,"z":5.880771281282419},{"x":-28.048674630368367,"y":20.77974637683382,"z":5.892866714648428},{"x":-28.06986142213697,"y":20.724055617411455,"z":5.9049499940489865},{"x":-28.090970583030394,"y":20.668316133868064,"z":5.917016021096274},{"x":-28.11200365047833,"y":20.612523631438133,"z":5.929065699639155},{"x":-28.132963078010807,"y":20.55667128866091,"z":5.941100468638354},{"x":-28.153845411507696,"y":20.50076800519009,"z":5.95311837750586},{"x":-28.174643977812444,"y":20.44483152009612,"z":5.965115599521624},{"x":-28.19538596003018,"y":20.388788230380744,"z":5.977107866340588},{"x":-28.216041535964333,"y":20.33271822743896,"z":5.989077989245513},{"x":-28.23662084244873,"y":20.27659389461248,"z":6.001031852822081},{"x":-28.25712396323405,"y":20.22041469824549,"z":6.0129695383361135},{"x":-28.27755074935744,"y":20.164180735300107,"z":6.024890992321246},{"x":-28.297901963999678,"y":20.107889574829585,"z":6.036796695408005},{"x":-28.318175630302434,"y":20.05154636969602,"z":6.048685524883596},{"x":-28.338372063096877,"y":19.995149956778327,"z":6.060557696150382},{"x":-28.358492470352545,"y":19.938696637782606,"z":6.072413953985736},{"x":-28.37852413572399,"y":19.88222198433203,"z":6.084246817216276},{"x":-28.3985005489513,"y":19.825631070015216,"z":6.096076121306206},{"x":-28.418388823704177,"y":19.769016487529523,"z":6.10788245479973},{"x":-28.43820023794614,"y":19.71234602424207,"z":6.1196725236826985},{"x":-28.457923394324542,"y":19.6556521594577,"z":6.13143955891209},{"x":-28.477588564904163,"y":19.59884737406849,"z":6.143201673292938},{"x":-28.49716584771076,"y":19.542017486495336,"z":6.154941042863705},{"x":-28.51666501227259,"y":19.485134025918203,"z":6.166663537248532},{"x":-28.536085910314164,"y":19.428197094311653,"z":6.178369102644164},{"x":-28.555428178018836,"y":19.37120743072736,"z":6.190057554792787},{"x":-28.574691884753317,"y":19.314164501915684,"z":6.201728970755494},{"x":-28.593877737123368,"y":19.257065861493036,"z":6.213383816445448},{"x":-28.612983873840268,"y":19.199916710645393,"z":6.225020997419423},{"x":-28.63200613531378,"y":19.142729280581918,"z":6.2366380028822},{"x":-28.65095982727084,"y":19.08545709567237,"z":6.248244228648874},{"x":-28.66982892087029,"y":19.0281481153104,"z":6.259829911091151},{"x":-28.68861125234615,"y":18.97080886071281,"z":6.271393727159093},{"x":-28.707328395030846,"y":18.91337297368069,"z":6.2829490111726845},{"x":-28.72595868906462,"y":18.855906384676913,"z":6.29448244948745},{"x":-28.744509087657033,"y":18.79838747133927,"z":6.305998364917984},{"x":-28.762979648256636,"y":18.740815699905085,"z":6.317496831132258},{"x":-28.781370016500556,"y":18.6831918171626,"z":6.32897766578056},{"x":-28.799669284743853,"y":18.625549907092044,"z":6.340434069970916},{"x":-28.817909384405255,"y":18.56778878927015,"z":6.3518860968297},{"x":-28.836051657041594,"y":18.510030395807913,"z":6.363309528900533},{"x":-28.85412661929706,"y":18.45217732764274,"z":6.374723605817211},{"x":-28.87211401554406,"y":18.394293865320225,"z":6.386115596547573},{"x":-28.890020136102095,"y":18.33635958420628,"z":6.397489504103026},{"x":-28.907845034121898,"y":18.278373952043005,"z":6.408845400747336},{"x":-28.92558934748816,"y":18.220334505718146,"z":6.420183734300455},{"x":-28.9432517463872,"y":18.162245213838712,"z":6.431503695828522},{"x":-28.960832478430635,"y":18.104104901368032,"z":6.442805482560673},{"x":-28.978331203723375,"y":18.045914323939193,"z":6.454088915387442},{"x":-28.99574835544008,"y":17.987671660511182,"z":6.465354314273903},{"x":-29.013083781195352,"y":17.929377021370936,"z":6.476601623339356},{"x":-29.030336567482017,"y":17.871033098010518,"z":6.487830290600832},{"x":-29.047507331127896,"y":17.81263742320783,"z":6.4990407582257195},{"x":-29.06459535498972,"y":17.754192045904052,"z":6.510232599722632},{"x":-29.081600683199625,"y":17.695696434642358,"z":6.521405884660596},{"x":-29.098523542381994,"y":17.63714941072109,"z":6.5325608045888},{"x":-29.115359702584602,"y":17.57856531471429,"z":6.543694602885822},{"x":-29.132119955403756,"y":17.519906105350056,"z":6.554814467852821},{"x":-29.148793586249106,"y":17.461208760128535,"z":6.565913347161367},{"x":-29.165383603548662,"y":17.40246240143035,"z":6.5769932738709995},{"x":-29.181890408830473,"y":17.343665202537355,"z":6.5880545593981115},{"x":-29.19831330934508,"y":17.284819222823636,"z":6.599096783193454},{"x":-29.214652521428086,"y":17.22592328309838,"z":6.610120133881908},{"x":-29.230907896712118,"y":17.166977499809164,"z":6.621124556086744},{"x":-29.247079286917064,"y":17.107981989809577,"z":6.632109994413093},{"x":-29.263166190987967,"y":17.048938169091706,"z":6.643076152541228},{"x":-29.279168817671284,"y":16.989844857736433,"z":6.654023216978311},{"x":-29.295087018958537,"y":16.930702173808623,"z":6.66495113227859},{"x":-29.310920473493418,"y":16.871510886000966,"z":6.675859723300113},{"x":-29.326669208886614,"y":16.812270463536656,"z":6.6867490547595425},{"x":-29.342332905967872,"y":16.752981676480797,"z":6.697618952000679},{"x":-29.357906988705892,"y":16.693661572942784,"z":6.708466268871099},{"x":-29.373404945626437,"y":16.634258188425424,"z":6.719300462163351},{"x":-29.38881299522215,"y":16.57482372857464,"z":6.7301119645351095},{"x":-29.40413559198034,"y":16.51534073565391,"z":6.740903930748401},{"x":-29.419372255798464,"y":16.455810635299613,"z":6.751676069514355},{"x":-29.43452334181836,"y":16.396231593568753,"z":6.7624286796018485},{"x":-29.449588371143513,"y":16.336605037179073,"z":6.773161469955349},{"x":-29.464566219390296,"y":16.276935007282976,"z":6.783873683319034},{"x":-29.479459846493427,"y":16.217209220958456,"z":6.794567488935647},{"x":-29.494266325743943,"y":16.157438901485644,"z":6.805240840428034},{"x":-29.50898616715873,"y":16.097621561549257,"z":6.815894151210349},{"x":-29.52361827098284,"y":16.037761250252682,"z":6.826526670302176},{"x":-29.538165204187152,"y":15.977846974806852,"z":6.837140315357053},{"x":-29.552624744540612,"y":15.917887361469244,"z":6.84773352140341},{"x":-29.56699691126543,"y":15.857881883168094,"z":6.858306350335106},{"x":-29.581281874979815,"y":15.797829357138662,"z":6.8688589779327955},{"x":-29.595479181057417,"y":15.737731220212572,"z":6.879391119081455},{"x":-29.609589456186075,"y":15.677584322725746,"z":6.889903291747308},{"x":-29.623611784036235,"y":15.617392068507503,"z":6.9003948669894415},{"x":-29.637546176299413,"y":15.557153930445851,"z":6.9108659045273475},{"x":-29.651392490470766,"y":15.496870037140038,"z":6.921316349381628},{"x":-29.665146704130017,"y":15.436557587975988,"z":6.931743199393771},{"x":-29.678821056174698,"y":15.376162217219232,"z":6.942155806497411},{"x":-29.692402718708497,"y":15.315739861470911,"z":6.952544480436275},{"x":-29.70588929653025,"y":15.255301187829065,"z":6.962907388052581},{"x":-29.719300233019457,"y":15.194758250791978,"z":6.973259554920256},{"x":-29.732615941135496,"y":15.134198598813025,"z":6.9835859563320435},{"x":-29.74584242158257,"y":15.073594758254929,"z":6.993891264978513},{"x":-29.75897996213648,"y":15.012944886988572,"z":7.004175761014189},{"x":-29.77202813310617,"y":14.952250432793482,"z":7.014439165367872},{"x":-29.784986933226538,"y":14.891510869643884,"z":7.024681533894581},{"x":-29.797856218246178,"y":14.83072632992195,"z":7.0349028107053275},{"x":-29.810635706051663,"y":14.769897605575268,"z":7.045102829525891},{"x":-29.823325392678726,"y":14.709024171116837,"z":7.055281645372827},{"x":-29.835925134251667,"y":14.648106160166815,"z":7.06543920233353},{"x":-29.84843451721624,"y":14.587145026411957,"z":7.075575225373932},{"x":-29.860854073491026,"y":14.526137605395414,"z":7.085690206624073},{"x":-29.873182986101423,"y":14.465087331328741,"z":7.0957835426397695},{"x":-29.885421249677385,"y":14.403993680321225,"z":7.1058552878602725},{"x":-29.89756898564299,"y":14.342855467308835,"z":7.115905604079914},{"x":-29.90962578830566,"y":14.28167414958194,"z":7.125934218153901},{"x":-29.921591775227046,"y":14.220448542040893,"z":7.135941290762958},{"x":-29.93346641742681,"y":14.159180765009575,"z":7.145926442222827},{"x":-29.945243879254015,"y":14.097900726959054,"z":7.155884787324708},{"x":-29.956942001113756,"y":14.036514625000233,"z":7.165831513982737},{"x":-29.968542530965344,"y":13.975117199510512,"z":7.175751214974519},{"x":-29.980051405619434,"y":13.913676834566417,"z":7.185648987272889},{"x":-29.991468360422964,"y":13.852194331552127,"z":7.19552466864649},{"x":-30.002793377943576,"y":13.790669167919132,"z":7.2053783099014375},{"x":-30.014025232478495,"y":13.729107448508273,"z":7.215208903883002},{"x":-30.02516703380103,"y":13.667491418558514,"z":7.225019248066152},{"x":-30.036215270477964,"y":13.605839776926766,"z":7.234806327847513},{"x":-30.047170066884977,"y":13.544151343862051,"z":7.24457030530752},{"x":-30.058034097055312,"y":13.482410340013217,"z":7.254313640707394},{"x":-30.068804404507627,"y":13.420632828146433,"z":7.264033761766357},{"x":-30.07948167250136,"y":13.358814307589325,"z":7.273731347226138},{"x":-30.090065876443877,"y":13.296954257525757,"z":7.283406445636218},{"x":-30.100556875626935,"y":13.235052821119336,"z":7.29305900098043},{"x":-30.110954529491302,"y":13.173110141951442,"z":7.30268895724107},{"x":-30.121258477629095,"y":13.111127693396904,"z":7.312296052655477},{"x":-30.131469021872636,"y":13.049102961485058,"z":7.321880643257856},{"x":-30.14158569211992,"y":12.987038085109383,"z":7.331442364413195},{"x":-30.15160835156165,"y":12.924933210058146,"z":7.340981160952824},{"x":-30.161536969355875,"y":12.862787817123387,"z":7.350497079446402},{"x":-30.171370043982783,"y":12.800610704914785,"z":7.359988745007651},{"x":-30.181111003049157,"y":12.738379391102962,"z":7.369459552390665},{"x":-30.19075717723855,"y":12.676109993908021,"z":7.378907006466609},{"x":-30.200308132004164,"y":12.613804660515665,"z":7.388330752000619},{"x":-30.209764250042905,"y":12.55146021042197,"z":7.397731239667132},{"x":-30.21912559467278,"y":12.489075459437485,"z":7.40710861435663},{"x":-30.228391827149583,"y":12.42665188883552,"z":7.416462619729763},{"x":-30.237562325129986,"y":12.364192981888413,"z":7.4257927034070175},{"x":-30.24663870338939,"y":12.301686886414815,"z":7.4351005994243415},{"x":-30.255619070599955,"y":12.23914575385413,"z":7.444384461738735},{"x":-30.264503778880307,"y":12.176566401164875,"z":7.453644732449357},{"x":-30.273292786711508,"y":12.113948312102174,"z":7.462881454720301},{"x":-30.28198116632186,"y":12.051326350058623,"z":7.472089476371892},{"x":-30.290582968304523,"y":11.988597865034622,"z":7.481283834554934},{"x":-30.299083961420294,"y":11.92586514322639,"z":7.490449478732455},{"x":-30.307488617506937,"y":11.863094960218064,"z":7.499591253978808},{"x":-30.315796978494532,"y":11.800286132927763,"z":7.508709298878465},{"x":-30.32400629973882,"y":11.737458862785275,"z":7.517800660058089},{"x":-30.33212374071002,"y":11.674557167499449,"z":7.526873392722953},{"x":-30.340141959849365,"y":11.611636669265376,"z":7.53591942746811},{"x":-30.34806325182932,"y":11.548678810406924,"z":7.54494141177595},{"x":-30.355887397942304,"y":11.485684414631043,"z":7.553939194321782},{"x":-30.363614346930593,"y":11.422652968629372,"z":7.562912815138385},{"x":-30.37124396301737,"y":11.359584628089008,"z":7.571862218297922},{"x":-30.37877571370636,"y":11.296482895415426,"z":7.580786875369486},{"x":-30.38621049765007,"y":11.233339227023505,"z":7.589687959554546},{"x":-30.393545991084594,"y":11.170172523306162,"z":7.598562778311466},{"x":-30.400785932036303,"y":11.106949466879009,"z":7.6074159743535},{"x":-30.40792670946615,"y":11.043700343962005,"z":7.616243265695071},{"x":-30.414969273373877,"y":10.980415939837554,"z":7.625045912129815},{"x":-30.421913346516465,"y":10.917097753535838,"z":7.633823673213447},{"x":-30.428758300850124,"y":10.853750636179932,"z":7.64257584870886},{"x":-30.435506655401028,"y":10.790349951071828,"z":7.651305800788538},{"x":-30.44215511974614,"y":10.726925345218037,"z":7.660009408549327},{"x":-30.4487049199986,"y":10.66346424546954,"z":7.668688370647491},{"x":-30.45515571331097,"y":10.59996882366811,"z":7.677342355742448},{"x":-30.461507369548414,"y":10.53643924127816,"z":7.685971308921232},{"x":-30.467759758773166,"y":10.472875660173397,"z":7.694575175284148},{"x":-30.473912815653698,"y":10.409277571697526,"z":7.703153990295179},{"x":-30.479964570724974,"y":10.345664598565095,"z":7.71170508670649},{"x":-30.48592033926935,"y":10.281979193697186,"z":7.7202361534412445},{"x":-30.491774482035716,"y":10.21827990163989,"z":7.728739301220753},{"x":-30.497528766895304,"y":10.154546754629404,"z":7.737217175842182},{"x":-30.50318300284867,"y":10.090780588163943,"z":7.7456696327369245},{"x":-30.508737119317306,"y":10.026980895448148,"z":7.754096705652115},{"x":-30.514190927860216,"y":9.963148513008756,"z":7.762498250649416},{"x":-30.519544300352123,"y":9.89928360642706,"z":7.770874212957289},{"x":-30.524797163598627,"y":9.835385669859223,"z":7.7792246254643835},{"x":-30.529949386653648,"y":9.771454869434269,"z":7.78754943252456},{"x":-30.534997842555605,"y":9.707529676435854,"z":7.7958436173055},{"x":-30.53995118349731,"y":9.643498032027704,"z":7.804121660852413},{"x":-30.544800605882468,"y":9.57947098571484,"z":7.812369146194791},{"x":-30.549548821368056,"y":9.515412416854605,"z":7.820590718745524},{"x":-30.55419570329787,"y":9.451322493909657,"z":7.828786323850184},{"x":-30.55874112523073,"y":9.38720138575144,"z":7.836955906872858},{"x":-30.563185007018106,"y":9.323048589154888,"z":7.845099498410462},{"x":-30.56752496970226,"y":9.258897902644673,"z":7.853212797503518},{"x":-30.571767501608697,"y":9.194650626882835,"z":7.861308231181937},{"x":-30.575905863046792,"y":9.130405801824324,"z":7.8693732632758095},{"x":-30.57994217511044,"y":9.066129969113025,"z":7.877412083772416},{"x":-30.583876228100703,"y":9.001824645605746,"z":7.885424469863478},{"x":-30.587708019073567,"y":8.937487984450435,"z":7.893410618101288},{"x":-30.591437339857787,"y":8.873121503400888,"z":7.901370306023689},{"x":-30.59506402859188,"y":8.808726048083846,"z":7.909303396409574},{"x":-30.598588036917214,"y":8.744300445417487,"z":7.91721000065357},{"x":-30.602009061450996,"y":8.679848234500897,"z":7.925089652687867},{"x":-30.605326138129396,"y":8.615386420729592,"z":7.932940255900962},{"x":-30.60854250954987,"y":8.55084852718883,"z":7.940769854070558},{"x":-30.611654404458836,"y":8.486306765039492,"z":7.94856963753524},{"x":-30.614662962698006,"y":8.421736399542203,"z":7.956342579935421},{"x":-30.617568061403258,"y":8.357137606122375,"z":7.964088626969694},{"x":-30.62036960662775,"y":8.292509887118314,"z":7.971807804648501},{"x":-30.623065734318406,"y":8.227895851697111,"z":7.979495019217283},{"x":-30.62566132217279,"y":8.163173765866897,"z":7.98716469389046},{"x":-30.62815146259778,"y":8.098460328741423,"z":7.994802934969851},{"x":-30.63053742667813,"y":8.033722041278917,"z":8.00241369087522},{"x":-30.63281922219236,"y":7.968955713305158,"z":8.0099973048478},{"x":-30.63499668038951,"y":7.904162870473768,"z":8.017553564985931},{"x":-30.637069704615925,"y":7.839343017802646,"z":8.025082496230581},{"x":-30.639038174143003,"y":7.774496334384419,"z":8.032584044506317},{"x":-30.64090196848492,"y":7.7096229997182535,"z":8.040058155764493},{"x":-30.642660772139727,"y":7.644730606281453,"z":8.047503927168943},{"x":-30.644315050889688,"y":7.579797096674269,"z":8.054923851168937},{"x":-30.645864083645375,"y":7.514845563251032,"z":8.062315250818127},{"x":-30.647307978376524,"y":7.4498674267451115,"z":8.069679074379996},{"x":-30.648646345239616,"y":7.384876347964651,"z":8.07701374887162},{"x":-30.649879802490588,"y":7.319835440685523,"z":8.084323395895678},{"x":-30.65100749850225,"y":7.254781955484905,"z":8.09160378737887},{"x":-30.652029578774982,"y":7.189702595702632,"z":8.09885638668114},{"x":-30.652945867931322,"y":7.124601588645906,"z":8.106080691206271},{"x":-30.653756130626473,"y":7.059490576831041,"z":8.113275388403157},{"x":-30.654460843220832,"y":6.994317842539605,"z":8.120446144149028},{"x":-30.65505922455193,"y":6.929140864094768,"z":8.127586588629471},{"x":-30.655551393570548,"y":6.8639396048770855,"z":8.13469889795219},{"x":-30.6559372298355,"y":6.798714924126137,"z":8.141782945424724},{"x":-30.65621662230953,"y":6.733466333341737,"z":8.148838751134104},{"x":-30.65638945327496,"y":6.668194692569905,"z":8.155866189089632},{"x":-30.656455610015605,"y":6.6028995141033215,"z":8.162865278807892},{"x":-30.656414977543218,"y":6.537581658786071,"z":8.16983589500256},{"x":-30.656267443505087,"y":6.472241313777595,"z":8.176777985159429},{"x":-30.65601288952939,"y":6.406877318510843,"z":8.183691639080303},{"x":-30.6556512056693,"y":6.341491209085963,"z":8.190576660759877},{"x":-30.65518228037357,"y":6.276083173850817,"z":8.197432997788827},{"x":-30.6546060152715,"y":6.210654749596724,"z":8.204260457437098},{"x":-30.653922260621858,"y":6.145202081298669,"z":8.21105940843945},{"x":-30.653130918422427,"y":6.079727380653256,"z":8.21782958603238},{"x":-30.652231904202345,"y":6.014232859567844,"z":8.224570729344649},{"x":-30.65122510352721,"y":5.948718034284676,"z":8.231282856973694},{"x":-30.650110349885107,"y":5.883179725780019,"z":8.237966260545166},{"x":-30.648888240277113,"y":5.817655190296057,"z":8.244617130484807},{"x":-30.64755671944517,"y":5.7520442071525375,"z":8.251245584686794},{"x":-30.646117587143724,"y":5.686445358635848,"z":8.257841606455827},{"x":-30.64457094325885,"y":5.620860854348589,"z":8.264404988503658},{"x":-30.642914168320413,"y":5.555187792427174,"z":8.270945972081059},{"x":-30.641149665032582,"y":5.4895294604508535,"z":8.277454211988031},{"x":-30.63927648845437,"y":5.423851687019338,"z":8.28393308739201},{"x":-30.637294530911074,"y":5.35815466596338,"z":8.290382546419336},{"x":-30.635203685013167,"y":5.292438591502355,"z":8.296802537237332},{"x":-30.633003843657512,"y":5.226703658244142,"z":8.303193008054661},{"x":-30.6306949000284,"y":5.1609500611847565,"z":8.30955390712167},{"x":-30.628276747598598,"y":5.095177995708446,"z":8.315885182730677},{"x":-30.62574954408766,"y":5.0293943921489435,"z":8.322186139730318},{"x":-30.623112419183894,"y":4.963579916385316,"z":8.328458592934417},{"x":-30.62036603381941,"y":4.89775429513951,"z":8.334700624981178},{"x":-30.617511178115894,"y":4.831937249450615,"z":8.340910356492296},{"x":-30.614544237844015,"y":4.76604952736903,"z":8.347095213003191},{"x":-30.611468679075927,"y":4.700172122344975,"z":8.353247539960112},{"x":-30.608283145371267,"y":4.634276954062638,"z":8.359369946408062},{"x":-30.60498759757088,"y":4.5683655672999155,"z":8.365462255894244},{"x":-30.601581899841513,"y":4.502437487724176,"z":8.371524479818039},{"x":-30.59806598500752,"y":4.436493587504894,"z":8.377556505515761},{"x":-30.59443971561126,"y":4.370533393196337,"z":8.383558343822068},{"x":-30.59070302730735,"y":4.304557777593223,"z":8.389529882825299},{"x":-30.586855781016975,"y":4.23856626814371,"z":8.395471132795569},{"x":-30.582897874369845,"y":4.172559065611522,"z":8.401382042653058},{"x":-30.57882924727573,"y":4.106537043715841,"z":8.407262501618396},{"x":-30.574649844409763,"y":4.040501076246292,"z":8.413112400283376},{"x":-30.570359394190497,"y":3.9744486749796417,"z":8.418931926037134},{"x":-30.565957970065714,"y":3.90838273201097,"z":8.424720790991861},{"x":-30.561445431458715,"y":3.842302777263073,"z":8.430479004719903},{"x":-30.556821681194606,"y":3.7762090135221893,"z":8.436206517428435},{"x":-30.55208720642626,"y":3.7101097088090613,"z":8.441902586291004},{"x":-30.54724000920793,"y":3.6439788561100426,"z":8.447569413144219},{"x":-30.54228198980652,"y":3.577844214192294,"z":8.453204580641714},{"x":-30.537212370953398,"y":3.511696578317352,"z":8.458808847794476},{"x":-30.53203100391335,"y":3.4455354814248254,"z":8.464382221492123},{"x":-30.526737898555954,"y":3.3793624720185327,"z":8.469924539068474},{"x":-30.521332852531213,"y":3.3131764121776675,"z":8.47543586360952},{"x":-30.51581582433032,"y":3.246978179350391,"z":8.480916089313345},{"x":-30.510187756514448,"y":3.1807800629434295,"z":8.486364175265848},{"x":-30.50444556188009,"y":3.1145473619432242,"z":8.491782937463416},{"x":-30.498592024746305,"y":3.048313848104455,"z":8.497169571603063},{"x":-30.49262619104749,"y":2.9820696589091353,"z":8.502524855855983},{"x":-30.486547909035888,"y":2.915814330745381,"z":8.507848795871757},{"x":-30.480358855521118,"y":2.849566852326791,"z":8.51313984707951},{"x":-30.474053951188555,"y":2.783274442770326,"z":8.518402181677365},{"x":-30.4676375786527,"y":2.71698493469691,"z":8.523631954813316},{"x":-30.461109779907577,"y":2.65069920043386,"z":8.52882908539132},{"x":-30.454466812041698,"y":2.584380577176065,"z":8.5339964093981},{"x":-30.447712047069253,"y":2.5180641345172634,"z":8.539131153833027},{"x":-30.440844475952716,"y":2.4517406956686845,"z":8.544234007666335},{"x":-30.433863311418257,"y":2.385403770727846,"z":8.549305436827957},{"x":-30.42676909264264,"y":2.3190596006385964,"z":8.55434493021561},{"x":-30.41956166672597,"y":2.2527077257997385,"z":8.559352492716995},{"x":-30.412241471781062,"y":2.186353043354873,"z":8.564327727628612},{"x":-30.404806712190695,"y":2.119980366506856,"z":8.56927173875898},{"x":-30.39725847836669,"y":2.0536006206510025,"z":8.57418367376738},{"x":-30.389599954450368,"y":1.987242118462362,"z":8.579061427541305},{"x":-30.3818255212302,"y":1.9208568914562651,"z":8.583908501686846},{"x":-30.37393291692933,"y":1.854427776638465,"z":8.588726076381171},{"x":-30.3659309579916,"y":1.7880298983511305,"z":8.593508672341631},{"x":-30.357813502219244,"y":1.7216126401967538,"z":8.598259922901509},{"x":-30.349581569504085,"y":1.655185581315936,"z":8.602979099218047},{"x":-30.341236496338407,"y":1.5887602973781831,"z":8.607665350637403},{"x":-30.332777127652683,"y":1.5223283131882863,"z":8.612319248888426},{"x":-30.32420355131955,"y":1.4558911799259215,"z":8.616940653586612},{"x":-30.315515600987563,"y":1.3894484447317406,"z":8.621529565007583},{"x":-30.306713106169887,"y":1.3229996557243822,"z":8.62608598212602},{"x":-30.297796252620078,"y":1.2565470315453848,"z":8.630609721531123},{"x":-30.28876615207091,"y":1.1900994613561984,"z":8.635100154702316},{"x":-30.279618527010793,"y":1.1236264701034555,"z":8.639559301556334},{"x":-30.270357585618246,"y":1.0571596337725555,"z":8.643985004434555},{"x":-30.260981788697606,"y":0.990688494287511,"z":8.64837793588223},{"x":-30.25149115257335,"y":0.9242139358910639,"z":8.652738006103641},{"x":-30.24188560159121,"y":0.8577361761066379,"z":8.65706516995764},{"x":-30.232164962506932,"y":0.7912547666083399,"z":8.661359425241256},{"x":-30.222329256094007,"y":0.7247705921123444,"z":8.665620683395371},{"x":-30.212378307587038,"y":0.6582832053158226,"z":8.66984894166761},{"x":-30.202312140730893,"y":0.5917934912399999,"z":8.674044112325939},{"x":-30.192130681684542,"y":0.525301669055094,"z":8.678206150577878},{"x":-30.18183385697261,"y":0.4588079582562473,"z":8.682335011702005},{"x":-30.171421907548353,"y":0.39231457385746576,"z":8.686430528645452},{"x":-30.160893712675303,"y":0.3258150855500512,"z":8.69049306449398},{"x":-30.15025184972674,"y":0.2593263348007947,"z":8.694521564739011},{"x":-30.139491228707882,"y":0.1928173012270356,"z":8.698517872526015},{"x":-30.12861637498468,"y":0.12631678725718043,"z":8.702480218426317},{"x":-30.117625720234933,"y":0.05981570885575754,"z":8.706409119688582},{"x":-30.106520307821192,"y":-0.006679073444603419,"z":8.710304144850866},{"x":-30.095296949577822,"y":-0.07318592651871259,"z":8.714166334757122},{"x":-30.08396153928169,"y":-0.13966945322415095,"z":8.717993610972734},{"x":-30.07250425281491,"y":-0.20618649268145642,"z":8.721789206749113},{"x":-30.060933658651795,"y":-0.2726863983662121,"z":8.725550187479342},{"x":-30.049247080093735,"y":-0.33918420786430287,"z":8.729277386115895},{"x":-30.037444218923856,"y":-0.4056810240189365,"z":8.732970834260906},{"x":-30.025532999015113,"y":-0.47213224232201045,"z":8.736628056643116},{"x":-30.01348937613267,"y":-0.5386707800461732,"z":8.740256304396883},{"x":-30.001338474471808,"y":-0.6051566514610045,"z":8.743847883287227},{"x":-29.989069079478714,"y":-0.6716512238520357,"z":8.747406108307636},{"x":-29.97668416496693,"y":-0.7381377235864404,"z":8.750930046895636},{"x":-29.964182570817577,"y":-0.8046218827014302,"z":8.754419976105748},{"x":-29.951564483126667,"y":-0.871102153245892,"z":8.757875784316456},{"x":-29.938837090331113,"y":-0.937540644153672,"z":8.761295501080895},{"x":-29.925977950861473,"y":-1.0040534320989694,"z":8.764685041124993},{"x":-29.913009637352157,"y":-1.0705226669327577,"z":8.768038338072156},{"x":-29.899924329561607,"y":-1.13698843110449,"z":8.77135741381179},{"x":-29.886722226754507,"y":-1.2034491774974276,"z":8.774642160621527},{"x":-29.873403006535373,"y":-1.2699059990980235,"z":8.77789260205499},{"x":-29.859973701302934,"y":-1.3363237211701304,"z":8.781107012868228},{"x":-29.846413636378372,"y":-1.4028036599660338,"z":8.784290241239711},{"x":-29.832743372400312,"y":-1.4692440447874273,"z":8.78743735741863},{"x":-29.818955751709822,"y":-1.5356795934622596,"z":8.790550001567322},{"x":-29.805051127769183,"y":-1.602108101669233,"z":8.793628040326688},{"x":-29.79102917045089,"y":-1.6685306584204755,"z":8.796671494588697},{"x":-29.776889822273912,"y":-1.734947034682535,"z":8.799680323240397},{"x":-29.76263656947996,"y":-1.8013405612174527,"z":8.80265375313018},{"x":-29.748265153860277,"y":-1.8677307480935303,"z":8.805592637720876},{"x":-29.733767727628276,"y":-1.9341528433750943,"z":8.808498474188976},{"x":-29.719158691221626,"y":-2.000540232664916,"z":8.811368308393122},{"x":-29.70443213550117,"y":-2.066919636990807,"z":8.814203286935822},{"x":-29.689588008756857,"y":-2.13329082639543,"z":8.817003370275105},{"x":-29.674626259682576,"y":-2.1996535706445104,"z":8.819768518956288},{"x":-29.659546986957867,"y":-2.2660069835101337,"z":8.822498666798737},{"x":-29.644350143449167,"y":-2.3323508350354896,"z":8.825193775584635},{"x":-29.629035075142827,"y":-2.398687515643881,"z":8.827853911608791},{"x":-29.613602334042216,"y":-2.4650141719611245,"z":8.830478929575994},{"x":-29.59806111792414,"y":-2.531291297452818,"z":8.833067267690746},{"x":-29.582383650222177,"y":-2.5976364883858314,"z":8.835623459626325},{"x":-29.566597460605692,"y":-2.663932340196684,"z":8.83814292076715},{"x":-29.550701285800322,"y":-2.730184555840023,"z":8.840625895215572},{"x":-29.534678285656863,"y":-2.796462865502482,"z":8.843074964315306},{"x":-29.518532535705134,"y":-2.862749352176368,"z":8.845489392030277},{"x":-29.502272734594403,"y":-2.9290078500204677,"z":8.84786782924565},{"x":-29.48590135168978,"y":-2.9952283602916085,"z":8.85020992161962},{"x":-29.46940217703506,"y":-3.0614759113573116,"z":8.852517930244531},{"x":-29.45279761761248,"y":-3.127660246758738,"z":8.854788690289507},{"x":-29.436058974161988,"y":-3.1938952421403557,"z":8.857026070786384},{"x":-29.41921233283009,"y":-3.260077012102409,"z":8.859226514544622},{"x":-29.402242954161697,"y":-3.326263321538739,"z":8.861391931703368},{"x":-29.38516824208525,"y":-3.392386236496379,"z":8.863520096022873},{"x":-29.36795413058257,"y":-3.45857697670572,"z":8.865615177761974},{"x":-29.350642700161593,"y":-3.5246733173105693,"z":8.867672011235388},{"x":-29.333191853738203,"y":-3.5908356349112185,"z":8.86969555977156},{"x":-29.315644235679184,"y":-3.65690186309538,"z":8.87168083775268},{"x":-29.2979558111972,"y":-3.723037416122249,"z":8.873632786377247},{"x":-29.280160294967708,"y":-3.7891154160423395,"z":8.87554759782628},{"x":-29.262246402994965,"y":-3.855177842391634,"z":8.877426494660815},{"x":-29.24421392394385,"y":-3.9212251081943927,"z":8.879269459885785},{"x":-29.226063178402818,"y":-3.9872556814525395,"z":8.881076422496212},{"x":-29.207793597467813,"y":-4.053271270031923,"z":8.882847400452619},{"x":-29.189405684580947,"y":-4.119269694630697,"z":8.884582306462075},{"x":-29.17090305094713,"y":-4.185237783809722,"z":8.88628077740448},{"x":-29.152275297734523,"y":-4.251212171981531,"z":8.88794372059344},{"x":-29.133530379315857,"y":-4.317164155809532,"z":8.889570369248043},{"x":-29.114668106294413,"y":-4.383094152473216,"z":8.891160713164581},{"x":-29.095687166518427,"y":-4.449006450347965,"z":8.892714831101701},{"x":-29.07659034353995,"y":-4.5148911356732455,"z":8.894232468700075},{"x":-29.057371808890874,"y":-4.580767974102734,"z":8.895714052447},{"x":-29.03803337800044,"y":-4.646630267165883,"z":8.897159391573242},{"x":-29.018580729314017,"y":-4.712458449151396,"z":8.898568037558146},{"x":-28.99900277781445,"y":-4.778289641673646,"z":8.899940751270135},{"x":-28.979309811185182,"y":-4.844088829934629,"z":8.9012767663568},{"x":-28.959497984031298,"y":-4.909868656352203,"z":8.902576321635745},{"x":-28.939569418297317,"y":-4.975621813433715,"z":8.903839249918619},{"x":-28.919521570206985,"y":-5.041356423428408,"z":8.905065683439974},{"x":-28.899350653258878,"y":-5.107084440719764,"z":8.906255804512593},{"x":-28.879063923080547,"y":-5.1727818667789895,"z":8.907409147093777},{"x":-28.858658610766987,"y":-5.238457455650425,"z":8.908525845817726},{"x":-28.838134497381418,"y":-5.304111610496167,"z":8.909605880436422},{"x":-28.817491561997,"y":-5.3697440923933515,"z":8.910649219356618},{"x":-28.796729784128257,"y":-5.435354662214679,"z":8.911655831090929},{"x":-28.775856291525795,"y":-5.500920693399644,"z":8.91262535924911},{"x":-28.754850031868713,"y":-5.566507829595595,"z":8.913558729734218},{"x":-28.733733881088654,"y":-5.6320441995947,"z":8.91445487857608},{"x":-28.712503608178206,"y":-5.697543022349744,"z":8.915313994655474},{"x":-28.691139449383147,"y":-5.763064703653921,"z":8.916136816803402},{"x":-28.669665060212083,"y":-5.82853622068774,"z":8.916922383496203},{"x":-28.648085623339625,"y":-5.89394208659871,"z":8.917670538767336},{"x":-28.626360006991337,"y":-5.959406337892094,"z":8.918382640854386},{"x":-28.60453933056446,"y":-6.024774542306832,"z":8.919056972082359},{"x":-28.58258133129772,"y":-6.0901731819978195,"z":8.919694824894002},{"x":-28.56051132713883,"y":-6.155526261626382,"z":8.920295400999734},{"x":-28.538338933168628,"y":-6.2208056253452995,"z":8.920858472603767},{"x":-28.51601915212674,"y":-6.286143187097454,"z":8.921385121624102},{"x":-28.493593942825196,"y":-6.351415451160131,"z":8.921874286898817},{"x":-28.471050757728086,"y":-6.4166590301071125,"z":8.922326251760877},{"x":-28.44839048320909,"y":-6.481871153147982,"z":8.92274097648128},{"x":-28.425607810617844,"y":-6.547066787578842,"z":8.923118525044684},{"x":-28.402715165792923,"y":-6.612210232273942,"z":8.923458676333295},{"x":-28.37969765761071,"y":-6.677343669144297,"z":8.923761630953484},{"x":-28.356561269031385,"y":-6.742449758229013,"z":8.924027266394173},{"x":-28.333297845602537,"y":-6.807550995117447,"z":8.924255628007959},{"x":-28.309925680360067,"y":-6.872595967203034,"z":8.9244465127416},{"x":-28.286430976646425,"y":-6.9376229650362005,"z":8.92460002189948},{"x":-28.26281964473793,"y":-7.002615337582482,"z":8.924716085581144},{"x":-28.23909217300266,"y":-7.067571595453562,"z":8.924794685877961},{"x":-28.215248363649174,"y":-7.132492141034033,"z":8.924835808577079},{"x":-28.19127427480411,"y":-7.19741448686124,"z":8.924839429808971},{"x":-28.16718799113623,"y":-7.262289296713577,"z":8.924805508180626},{"x":-28.142983727004346,"y":-7.327132068961817,"z":8.924734026443774},{"x":-28.11866078337657,"y":-7.391944448686907,"z":8.92462495820147},{"x":-28.094219634859847,"y":-7.456724939264693,"z":8.924478280790527},{"x":-28.069659811836665,"y":-7.521474554714272,"z":8.924293966732737},{"x":-28.044981554751917,"y":-7.586192426267113,"z":8.924071992729997},{"x":-28.020185349427692,"y":-7.650877060895607,"z":8.923812339748318},{"x":-27.99526999941938,"y":-7.715531347250355,"z":8.923514970407433},{"x":-27.970238170568514,"y":-7.780148164746696,"z":8.923179894854664},{"x":-27.94508501875948,"y":-7.844739773631349,"z":8.922807022116274},{"x":-27.919815164597694,"y":-7.909294058030631,"z":8.922396393934346},{"x":-27.89443946207065,"y":-7.973783346148755,"z":8.921948192684775},{"x":-27.868924975180708,"y":-8.038290970693406,"z":8.921461796946542},{"x":-27.843295514068696,"y":-8.102756172316122,"z":8.920937600767527},{"x":-27.81755262853239,"y":-8.167174994785977,"z":8.920375629645319},{"x":-27.79169163597021,"y":-8.231559037219085,"z":8.919775768666588},{"x":-27.76571254897242,"y":-8.295908058514664,"z":8.919137995703267},{"x":-27.73961512805892,"y":-8.360222438272464,"z":8.918462282046459},{"x":-27.713400651566364,"y":-8.424498832031478,"z":8.917748640048409},{"x":-27.687066599472335,"y":-8.488743202701869,"z":8.916996978006994},{"x":-27.66061757084659,"y":-8.552944151216433,"z":8.916207408052907},{"x":-27.634046170353376,"y":-8.617119401359943,"z":8.915379685106608},{"x":-27.607362160363373,"y":-8.681245186891424,"z":8.914514093187819},{"x":-27.580562516485568,"y":-8.74532871166885,"z":8.913610527318406},{"x":-27.55363505854897,"y":-8.809398766716559,"z":8.912668541075757},{"x":-27.526590911632805,"y":-8.873428525244925,"z":8.911688485588373},{"x":-27.49943273204102,"y":-8.937411587748056,"z":8.910670445320237},{"x":-27.47217217410939,"y":-9.00132063171684,"z":8.90961487153325},{"x":-27.444766607229077,"y":-9.065255208255804,"z":8.908520071608118},{"x":-27.417256341425627,"y":-9.129120831026436,"z":8.907387608161313},{"x":-27.3896239619411,"y":-9.192957887073376,"z":8.906216759829496},{"x":-27.361881214474614,"y":-9.25673909521023,"z":8.90500800872416},{"x":-27.334015577968653,"y":-9.320493087495375,"z":8.903760792808493},{"x":-27.30603645567684,"y":-9.384198138963114,"z":8.902475510395805},{"x":-27.27793768927734,"y":-9.44786811716802,"z":8.901151862100813},{"x":-27.249719005594542,"y":-9.511503380267213,"z":8.899789807174544},{"x":-27.221386954136285,"y":-9.575088998827036,"z":8.898389644675717},{"x":-27.192938045078428,"y":-9.638632695976757,"z":8.896951190475521},{"x":-27.164369558816787,"y":-9.70214033686864,"z":8.895474284681583},{"x":-27.135693376077622,"y":-9.765585443234041,"z":8.89395953429382},{"x":-27.106884120129298,"y":-9.82902388698073,"z":8.892405569617173},{"x":-27.07796669311292,"y":-9.892400543467824,"z":8.890813702918791},{"x":-27.04893256470042,"y":-9.955734079437743,"z":8.889183461544457},{"x":-27.019778122363363,"y":-10.019032156779403,"z":8.887514619319735},{"x":-26.990509837144707,"y":-10.082280549573767,"z":8.885807527800782},{"x":-26.961123819032007,"y":-10.145487528374774,"z":8.884061945593405},{"x":-26.93162179397437,"y":-10.208649210679718,"z":8.882277957039468},{"x":-26.902002950508024,"y":-10.271767177368732,"z":8.880455496352832},{"x":-26.872268466121877,"y":-10.334838767252144,"z":8.878594619744316},{"x":-26.842417814033507,"y":-10.397864954984938,"z":8.87669527899072},{"x":-26.812447867143256,"y":-10.460852146842111,"z":8.87475725414672},{"x":-26.782363546578264,"y":-10.523789828408322,"z":8.872780845078642},{"x":-26.752162882542034,"y":-10.586681992037734,"z":8.870765908641143},{"x":-26.721845914448902,"y":-10.649528398253478,"z":8.868712430641196},{"x":-26.691412682178537,"y":-10.712328807535082,"z":8.86662039701576},{"x":-26.660868506170853,"y":-10.77507215783866,"z":8.864490164621742},{"x":-26.63019847015012,"y":-10.837788874921326,"z":8.862320670184129},{"x":-26.599417578836228,"y":-10.900448057122718,"z":8.860112951699993},{"x":-26.568522076451103,"y":-10.96305728938213,"z":8.857866733326349},{"x":-26.537508152613047,"y":-11.02562412758759,"z":8.855581720317478},{"x":-26.506380901327336,"y":-11.088138144864292,"z":8.853258271912793},{"x":-26.475136498339857,"y":-11.150606889165681,"z":8.850896088505063},{"x":-26.4437761775475,"y":-11.213027724635966,"z":8.848495245332892},{"x":-26.412322315784934,"y":-11.275356252472669,"z":8.846057470537708},{"x":-26.380710987790696,"y":-11.337718747983658,"z":8.843577767227023},{"x":-26.349005621631612,"y":-11.39998965876069,"z":8.841061065722402},{"x":-26.31718453359875,"y":-11.462211710387443,"z":8.83850565956656},{"x":-26.28524868763297,"y":-11.524382879622,"z":8.835911611378448},{"x":-26.253197525482527,"y":-11.586504119455343,"z":8.83327886151524},{"x":-26.221032021466637,"y":-11.64857341184512,"z":8.830607476154288},{"x":-26.188759036793435,"y":-11.710577484636822,"z":8.827898021678909},{"x":-26.156355125975807,"y":-11.772561143480555,"z":8.825148504264819},{"x":-26.12384476848447,"y":-11.83447733053314,"z":8.822360976149058},{"x":-26.091219672284197,"y":-11.896341811956722,"z":8.819534723578764},{"x":-26.0584943062055,"y":-11.958127196128165,"z":8.816671004696778},{"x":-26.025626114853942,"y":-12.019913532541818,"z":8.81376606413555},{"x":-25.992657770122847,"y":-12.081620301142456,"z":8.810823640673267},{"x":-25.959574915503833,"y":-12.143274420616494,"z":8.807842458115406},{"x":-25.92637856082556,"y":-12.204873890703205,"z":8.804822594813508},{"x":-25.893067817596016,"y":-12.266420242378427,"z":8.80176395736283},{"x":-25.859656486154332,"y":-12.327888010010142,"z":8.798667816371134},{"x":-25.826103719508954,"y":-12.389352058674058,"z":8.79553035657495},{"x":-25.79245144956864,"y":-12.450735295156417,"z":8.792355468957929},{"x":-25.758685035093567,"y":-12.512064472458427,"z":8.789141777239596},{"x":-25.724805183629904,"y":-12.57333818564486,"z":8.785889335951497},{"x":-25.6908161839061,"y":-12.634548614391065,"z":8.7825985499691},{"x":-25.656705111409718,"y":-12.695718872096394,"z":8.77926815064822},{"x":-25.62248502345963,"y":-12.756825378900233,"z":8.775899395200412},{"x":-25.588151766202856,"y":-12.817875489901963,"z":8.772491868048302},{"x":-25.55370573711128,"y":-12.878868391397932,"z":8.76904559721155},{"x":-25.519146018523678,"y":-12.939805594450826,"z":8.765560478718195},{"x":-25.484473997571868,"y":-13.000684543145944,"z":8.762036640685093},{"x":-25.449689086398603,"y":-13.061506167452276,"z":8.758474012444019},{"x":-25.41479135539575,"y":-13.122270235017865,"z":8.754872589526709},{"x":-25.37978120944844,"y":-13.182975935503071,"z":8.751232402457266},{"x":-25.34465838787231,"y":-13.243623615946452,"z":8.747553412913671},{"x":-25.30942329851001,"y":-13.304212467378857,"z":8.743835652422218},{"x":-25.27407635375292,"y":-13.36474168343885,"z":8.74007915410396},{"x":-25.23861661800152,"y":-13.425212762285465,"z":8.736283807418124},{"x":-25.20304551792171,"y":-13.485623170617133,"z":8.732449754336535},{"x":-25.16737334148331,"y":-13.545955456773445,"z":8.72857810590263},{"x":-25.131567167886594,"y":-13.606265085784738,"z":8.724665266343814},{"x":-25.095660412714636,"y":-13.666495558503868,"z":8.72071486404889},{"x":-25.059648449552704,"y":-13.726654720688508,"z":8.716726399169168},{"x":-25.023512481297733,"y":-13.786773816534406,"z":8.712697773143972},{"x":-24.987271466425426,"y":-13.846821144924954,"z":8.708631082386578},{"x":-24.950919309194763,"y":-13.906806778321908,"z":8.704525639965123},{"x":-24.914481791630905,"y":-13.966688338640557,"z":8.70038437517589},{"x":-24.87788189936847,"y":-14.02659204976399,"z":8.696198498800134},{"x":-24.841196813739803,"y":-14.086391232826138,"z":8.69197679973504},{"x":-24.80440162032665,"y":-14.146126675715601,"z":8.687716429724397},{"x":-24.767494653134754,"y":-14.20580098985185,"z":8.683417185911269},{"x":-24.730477749810664,"y":-14.265411110670255,"z":8.679079272383152},{"x":-24.693350648540775,"y":-14.32495738067947,"z":8.674702650007607},{"x":-24.656139660051203,"y":-14.384397770680446,"z":8.6702904383322},{"x":-24.618765853028243,"y":-14.443858032612297,"z":8.665833243098016},{"x":-24.581308692341203,"y":-14.50321139990927,"z":8.661340504481444},{"x":-24.543741334761908,"y":-14.562500579876243,"z":8.656809021363795},{"x":-24.506064943067493,"y":-14.621723659255425,"z":8.652238925647053},{"x":-24.46827817695836,"y":-14.680882663727738,"z":8.647630046092804},{"x":-24.430382203093004,"y":-14.739975682288394,"z":8.642982515966825},{"x":-24.392377477842203,"y":-14.799001932562525,"z":8.638296383678412},{"x":-24.35426301257831,"y":-14.85796287287141,"z":8.633571519087583},{"x":-24.316042530702987,"y":-14.916852689449255,"z":8.62880837799388},{"x":-24.277707408123703,"y":-14.975684570710222,"z":8.624005875045297},{"x":-24.23926646199029,"y":-15.034444884595736,"z":8.619165104033309},{"x":-24.20071688267753,"y":-15.093137879562976,"z":8.614285706216814},{"x":-24.16205913511567,"y":-15.15176277811822,"z":8.609367733003355},{"x":-24.12329258369117,"y":-15.210320471513546,"z":8.60441109577079},{"x":-24.084418801109546,"y":-15.268808518097254,"z":8.599415988538954},{"x":-24.045435673432138,"y":-15.327230026244582,"z":8.594382131974982},{"x":-24.006350345335072,"y":-15.385574258648242,"z":8.589310445421075},{"x":-23.96714695667505,"y":-15.443864783589035,"z":8.584198859544571},{"x":-23.927841204158636,"y":-15.502078149966014,"z":8.579049408926014},{"x":-23.88842911618536,"y":-15.560220230395593,"z":8.573861572256208},{"x":-23.848907053484133,"y":-15.618296316007319,"z":8.56863486221827},{"x":-23.809279237966106,"y":-15.676300128102262,"z":8.563369829140376},{"x":-23.769544654730446,"y":-15.734233103828634,"z":8.55806633301864},{"x":-23.729711731252287,"y":-15.792082968239884,"z":8.552725499967357},{"x":-23.68975448094788,"y":-15.8498873255792,"z":8.54734383124625},{"x":-23.649701382809624,"y":-15.907604856031671,"z":8.541925149532105},{"x":-23.609537766263266,"y":-15.965256698054834,"z":8.536467469927786},{"x":-23.569289306411257,"y":-16.02280608137123,"z":8.530974290207064},{"x":-23.528896908406633,"y":-16.08033731274064,"z":8.525437525006534},{"x":-23.488419145399114,"y":-16.13776676214229,"z":8.51986518109977},{"x":-23.447859365520063,"y":-16.195089989328203,"z":8.514257752530263},{"x":-23.40713990213093,"y":-16.25241646251463,"z":8.508604470381318},{"x":-23.366344030968676,"y":-16.309628679144446,"z":8.502916867572399},{"x":-23.325441055684706,"y":-16.366769859551642,"z":8.497190683072253},{"x":-23.284433799292504,"y":-16.42383600025191,"z":8.491426305687128},{"x":-23.24332160407902,"y":-16.4808279727733,"z":8.485623638293553},{"x":-23.202104977296603,"y":-16.537745027095358,"z":8.479782747480503},{"x":-23.160782863574074,"y":-16.594588567747973,"z":8.473903478049444},{"x":-23.119366369464817,"y":-16.651343340500926,"z":8.467987412750608},{"x":-23.077825771013504,"y":-16.708049955197442,"z":8.462030292845782},{"x":-23.036191031851274,"y":-16.76466738339672,"z":8.456036401678633},{"x":-22.994457598570968,"y":-16.821201891373224,"z":8.450005091694996},{"x":-22.95260937345704,"y":-16.877675197742132,"z":8.44393402712289},{"x":-22.910668258838317,"y":-16.93405769846462,"z":8.437826380219665},{"x":-22.868612940249232,"y":-16.99037800546752,"z":8.431679042766028},{"x":-22.82645943812624,"y":-17.046614577801517,"z":8.425494347174723},{"x":-22.784202708887612,"y":-17.102774141294976,"z":8.419271553199907},{"x":-22.74184327758811,"y":-17.158855958585885,"z":8.413010733934286},{"x":-22.69938086905051,"y":-17.214860354571478,"z":8.406711844498005},{"x":-22.65681560785809,"y":-17.27078712255454,"z":8.400374898844994},{"x":-22.614148023089566,"y":-17.326635528087795,"z":8.393999971543762},{"x":-22.571378242950434,"y":-17.38240536719774,"z":8.387587077887378},{"x":-22.528506396034665,"y":-17.438096436123168,"z":8.381136233304002},{"x":-22.485534645946395,"y":-17.493705903205253,"z":8.37464776108057},{"x":-22.44245620245949,"y":-17.549242499130422,"z":8.368120629944409},{"x":-22.399297324842614,"y":-17.604672452753736,"z":8.361558827247395},{"x":-22.356000106572104,"y":-17.660069988806267,"z":8.354953533771361},{"x":-22.31262931185861,"y":-17.715352138990816,"z":8.348314618160563},{"x":-22.269141220347837,"y":-17.770574683661547,"z":8.341635393919683},{"x":-22.225556481126493,"y":-17.825711282552856,"z":8.334919019588938},{"x":-22.181873602793576,"y":-17.880763840143313,"z":8.328165267260943},{"x":-22.138090250564737,"y":-17.935735287239652,"z":8.32137377473099},{"x":-22.09420655967566,"y":-17.990625424645323,"z":8.314544559836918},{"x":-22.050222665738634,"y":-18.04543405339605,"z":8.307677640550372},{"x":-22.00613870474225,"y":-18.100160974760474,"z":8.300773034976789},{"x":-21.961954813050692,"y":-18.154805990241428,"z":8.293830761355323},{"x":-21.917672384490487,"y":-18.209367355540618,"z":8.286851036494413},{"x":-21.873290724569344,"y":-18.263845908943143,"z":8.279833749077474},{"x":-21.82880702743256,"y":-18.318245051246944,"z":8.272778450850888},{"x":-21.784226054070768,"y":-18.372558928165724,"z":8.265685893470115},{"x":-21.73954795649037,"y":-18.42678735449998,"z":8.25855610112124},{"x":-21.694767803562435,"y":-18.480936281077753,"z":8.251388283254558},{"x":-21.64989080947547,"y":-18.53499936805787,"z":8.24418327074042},{"x":-21.604919254528728,"y":-18.588973882627126,"z":8.236941431192745},{"x":-21.559842220380997,"y":-18.642872883541667,"z":8.22966100165183},{"x":-21.514670912439442,"y":-18.69668292617258,"z":8.222343786892917},{"x":-21.469402501180827,"y":-18.750407389852175,"z":8.21498932952063},{"x":-21.42403584831267,"y":-18.804047605626465,"z":8.207597442492895},{"x":-21.37857238497889,"y":-18.85760186140696,"z":8.200168356857578},{"x":-21.33301139905703,"y":-18.911070979068775,"z":8.192701954443768},{"x":-21.28735433055093,"y":-18.964453254458707,"z":8.185198469710835},{"x":-21.241599601725063,"y":-19.01775051539348,"z":8.17765764158024},{"x":-21.195749089600003,"y":-19.07096055845122,"z":8.170079777578984},{"x":-21.149801644433268,"y":-19.12408470391095,"z":8.162464686201693},{"x":-21.103758283043526,"y":-19.177121759258632,"z":8.154812534164066},{"x":-21.057619157185908,"y":-19.230071538482804,"z":8.147123345493068},{"x":-21.011387479278643,"y":-19.282930363231515,"z":8.139397656407754},{"x":-20.96505422079575,"y":-19.335708525918513,"z":8.131633955003174},{"x":-20.91862871547981,"y":-19.38839536351326,"z":8.123833801882295},{"x":-20.872131808702274,"y":-19.440967376741124,"z":8.1160007160403},{"x":-20.82549239619984,"y":-19.493504802034103,"z":8.108122702598784},{"x":-20.778811479213125,"y":-19.545893886616838,"z":8.100216823454733},{"x":-20.731978017711448,"y":-19.59825921407107,"z":8.092264270079738},{"x":-20.68508759439229,"y":-19.65049377037769,"z":8.084281257022361},{"x":-20.638119263461903,"y":-19.702621213761145,"z":8.076264253234376},{"x":-20.590999824714252,"y":-19.75472252688703,"z":8.068200737224043},{"x":-20.543821873964657,"y":-19.80669517813362,"z":8.060106538518061},{"x":-20.496547342293276,"y":-19.858581298119123,"z":8.05197514664937},{"x":-20.44917860905852,"y":-19.91037824528762,"z":8.04380696764554},{"x":-20.401718968861623,"y":-19.9620824196526,"z":8.035602569878547},{"x":-20.35416634647782,"y":-20.013696090261003,"z":8.027361595503825}];

module.exports = PlutoOrbit;


},{}]},{},[2]);
