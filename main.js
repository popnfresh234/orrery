const JulianUtils = require( './utils/julian' );
const OrbitalUtils = require( './utils/orbital_utils' );
const Constants = require( './utils/constants' );
const SolarSystem = require( './bodies/mapped_planets' );

const app = ( function () {
  const updateSolarSystem = ( gregorianDate ) => {
    const testDate = JulianUtils.getDate( gregorianDate );
    const centuriesSinceJ2000 = ( testDate - JulianUtils.getJ2000() ) / Constants.JULIAN_CENTUTY_IN_DAYS;
    const planetKeys = Object.keys( SolarSystem );
    planetKeys.forEach( ( planetKey ) => {
      const planet = SolarSystem[planetKey];
      const orbitals = OrbitalUtils.generateOrbitals( planet, centuriesSinceJ2000 );


      planet.orbit.genOrbElems = orbitals;

      orbitals.T = testDate;
    } );
    console.log( SolarSystem.mars.orbit.genOrbElems );
  };

  return { updateSolarSystem };
}() );

app.updateSolarSystem( '8/20/1997' );
