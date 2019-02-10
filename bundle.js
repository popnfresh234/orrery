(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Relative size factors from https://nssdc.gsfc.nasa.gov/planetary/factsheet/planet_table_ratio.html
// Scale factors from http://www.planetaryorbits.com/kepler-laws-orbital-elements.html

const mercury = {
  display: 'Mercury',
  name: 'mercury',
  rFactor: 0.383,
  color: '#60597B',
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
  rFactor: 0.949,
  color: '#E38E3E',
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
  rFactor: 1,
  color: '#00aeff',
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
  rFactor: 0.532,
  color: '#CF7167',
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
const SolarSystem = require( './bodies/mapped_planets' );

const app = ( function () {
  const SCALE = 50;
  const R_SOL = 10;
  let currentDate = 0;
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
      const nX = ( HEIGHT - 0 ) * ( ( x - 0 ) / ( 49.5 * 2 - 0 ) ) + 0;
      const nY = ( HEIGHT - 0 ) * ( ( y - 0 ) / ( 49.5 * 2 - 0 ) ) + 0;
      // Orbit
      bgCtx.fillStyle = 'red';
      const scaledCoords = OrbitalUtils.calcScaledCoords( planet, nX, nY, WIDTH, HEIGHT );
      bgCtx.fillRect( scaledCoords.x, scaledCoords.y, 1, 1 );

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

  return { startSimulation, updateSolarSystem, setCurrentDate };
}() );


app.setCurrentDate( '1/20/2022' );
app.startSimulation( );

},{"./bodies/mapped_planets":1,"./utils/constants":3,"./utils/julian":4,"./utils/orbital_utils":5}],3:[function(require,module,exports){
const JULIAN_CENTUTY_IN_DAYS = 36525;

module.exports = {
  JULIAN_CENTUTY_IN_DAYS,
};


},{}],4:[function(require,module,exports){
const app = ( function () {
  const getDate = ( julianDate ) => {
    const testDate = new Date( Date.parse( julianDate ) );
    const day = testDate.getDate();
    const year = testDate.getFullYear();
    const month = testDate.getMonth() + 1;
    const a = Math.floor( ( 14 - month ) / 12 );
    const y = ( year + 4800 ) - a;
    const m = ( month + ( 12 * a ) ) - 3;
    const julianDay = day + Math.floor( ( ( 153 * m ) + 2 ) / 5 ) + ( 365 * y ) + Math.floor( y / 4 ) - Math.floor( y / 100 ) + Math.floor( y / 400 ) - 32045;
    return julianDay;
  };

  const getJ2000 = () => getDate( '1/1/2000' );

  return {
    getDate,
    getJ2000,
  };
}() );

module.exports = {
  getDate: app.getDate,
  getJ2000: app.getJ2000,
};

},{}],5:[function(require,module,exports){
const app = ( function () {
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

  const calcSemiMinorAxis = ( e, a ) => Math.abs( Math.sqrt( Math.abs( ( e ** 2 ) - 1 ) ) * -a );

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
    const SCALE = 13;
    const scaleFactor = planet.scaleFactor ? planet.scaleFactor : 1;
    const scaledX = ( WIDTH / 2 ) + ( x * SCALE / scaleFactor );
    const scaledY = ( HEIGHT / 2 ) - ( y * SCALE / scaleFactor );
    return { x: scaledX, y: scaledY };
  };

  const calcNormR = ( rFactor ) => {
    const MAX = 40;
    const MIN = 5;
    const FLOOR = 5;
    const r = ( ( rFactor * 100 - MIN ) / ( MAX - MIN ) ) + FLOOR;
    return r;
  };
  return {
    calcOrbitals,
    calcScaledCoords,
    calcNormR,
  };
}() );

module.exports = {
  calcOrbitals: app.calcOrbitals,
  calcScaledCoords: app.calcScaledCoords,
  calcNormR: app.calcNormR,
};

},{}]},{},[2]);
