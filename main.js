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

