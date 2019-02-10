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
