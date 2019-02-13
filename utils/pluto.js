const SolarSystem = require( '../bodies/mapped_planets' );
const JulianUtils = require( './julian' );
const Constants = require( './constants' );
const OrbitalUtils = require( './orbital_utils' );
const fs = require( 'fs' );

const periHelionDate = SolarSystem.pluto.periDate;
const julianDate = JulianUtils.getDate( periHelionDate );
const plutoData = [];
for ( let i = 0; i < 248 * 365; i += 20 ) {
  const date = julianDate + i;
  const centuriesSinceJ2000 = ( date - JulianUtils.getJ2000() ) / Constants.JULIAN_CENTUTY_IN_DAYS;
  const { pluto } = SolarSystem;
  const orbitals = OrbitalUtils.calcOrbitals( pluto, centuriesSinceJ2000 );
  plutoData.push( orbitals.helioCentricCoords );
}

const output = JSON.stringify( plutoData );
fs.writeFile( 'pluto.json', output, 'utf8' );
