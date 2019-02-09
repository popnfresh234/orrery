const JulianUtils = require( './utils/julian' );
const MathUtils = require( './utils/math' );
const Constants = require( './utils/constants' );
const Planets = require( './bodies/planets' );

const testDate = JulianUtils.getDate( '2/8/2019' );

const centuriesSinceJ2000 = ( testDate - JulianUtils.getJ2000() ) / Constants.JULIAN_CENTUTY_IN_DAYS;
const generatedOrbitalElements = [];
Planets.forEach( ( planet ) => {
  const orbitals = {};
  orbitals.name = planet.name;
  orbitals.T = testDate;
  // semi major axis (au)
  orbitals.a = planet.orbit.elements.a
        + ( planet.orbit.cY.a * centuriesSinceJ2000 );

  // eccentricity
  orbitals.e = planet.orbit.elements.e
        + ( planet.orbit.cY.e * centuriesSinceJ2000 );

  // Inclination (angle, 360 deg)
  orbitals.i = planet.orbit.elements.i
        + ( planet.orbit.cY.i * centuriesSinceJ2000 );
  while ( orbitals.i < 0 ) { orbitals.i += 360; }
  orbitals.i %= 360;

  // Mean Longitude (angle, 360 deg)
  orbitals.L = planet.orbit.elements.L
    + ( planet.orbit.cY.L * centuriesSinceJ2000 );
  while ( orbitals.L < 0 ) { orbitals.L += 360; }
  orbitals.L %= 360;

  // Longitude of perihelion (angle, 360deg)
  orbitals.lPeri = planet.orbit.elements.lPeri
    + ( planet.orbit.cY.lPeri * centuriesSinceJ2000 );
  while ( orbitals.lPeri < 0 ) { orbitals.lPeri += 360; }
  orbitals.lPeri %= 360;

  // Longitude of ascdending node (angle, 360deg)
  orbitals.lAscNode = planet.orbit.elements.lAscNode
    + ( planet.orbit.cY.lAscNode * centuriesSinceJ2000 );
  while ( orbitals.lAscNode < 0 ) { orbitals.lAscNode += 360; }
  orbitals.lAscNode %= 360;

  // Mean anomaly (angle, 360 degres, calculated from mean longitude: l = ϖ + M,)
  orbitals.M = orbitals.L - orbitals.lPeri;
  while ( orbitals.M < 0 ) {
    orbitals.M += 360;
  }

  // Eccentric anomaly
  orbitals.eccAnom = MathUtils.calcEccAnom( orbitals.e, orbitals.M, 6 );

  // True anomaly
  orbitals.trueAnom = MathUtils.calcTrueAnom( orbitals.e, orbitals.eccAnom );

  generatedOrbitalElements.push( orbitals );
  console.log( orbitals );
} );

