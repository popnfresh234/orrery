const JulianUtils = require( './utils/julian' );
const OrbitalUtils = require( './utils/orbital_utils' );
const Constants = require( './utils/constants' );
const Start = require( './bodies/mapped_planets' );
const SolarSystem = require( './bodies/mapped_planets' );

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

      // Orbit
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
      updateSolarSystem( JulianUtils.getDate( planet.apiDate ) );
      const apiX = planet.orbit.genOrbElems.helioCentricCoords.x;
      const apiY = planet.orbit.genOrbElems.helioCentricCoords.y;
      const scaledApiCoords = OrbitalUtils.calcScaledCoords( planet, apiX, apiY, WIDTH, HEIGHT );
      bgCtx.beginPath();
      bgCtx.fillStyle = planet.color;
      bgCtx.arc( scaledApiCoords.x, scaledApiCoords.y, 2, 0, 2 * Math.PI );
      bgCtx.fill();

      updateSolarSystem( JulianUtils.getDate( planet.periDate ) );
      const periX = planet.orbit.genOrbElems.helioCentricCoords.x;
      const periY = planet.orbit.genOrbElems.helioCentricCoords.y;
      const scaledPeriCoords = OrbitalUtils.calcScaledCoords( planet, periX, periY, WIDTH, HEIGHT );
      bgCtx.beginPath();
      bgCtx.fillStyle = planet.color;
      bgCtx.arc( scaledPeriCoords.x, scaledPeriCoords.y, 2, 0, 2 * Math.PI );
      bgCtx.fill();

      const centerX = ( apiX + periX ) / 2;
      const centerY = ( apiY + periY ) / 2;
      const scaledCenterCoords = OrbitalUtils.calcScaledCoords( planet, centerX, centerY, WIDTH, HEIGHT );
      bgCtx.fillStyle = planet.color;
      bgCtx.arc( scaledCenterCoords.x, scaledCenterCoords.y, 2, 0, 2 * Math.PI );
      bgCtx.fill();

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
    } );
    setTimeout( drawOrbit, 0 );
  };

  return {
    startSimulation,
    updateSolarSystem,
    setCurrentDate,
    drawOrbits,
  };
}() );


app.setCurrentDate( '2022/1/20' );
app.startSimulation();
app.drawOrbits();

