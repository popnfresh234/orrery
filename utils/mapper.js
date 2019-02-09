const SolarSystem = require( '../bodies/planets' );


const poop = SolarSystem.map( ( planet ) => {
  const newPlanet = { ...planet };
  const { elements, cY } = planet.orbit;
  const keys = Object.keys( elements );
  keys.forEach( ( key ) => {
    const el = elements[key];
    newPlanet.orbit.elements[key] = { val: el, deg: !( ( key === 'a' ) || ( key === 'e' ) ) };
  } );

  const cYKeys = Object.keys( cY );
  cYKeys.forEach( ( cYKey ) => {
    const el = cY[cYKey];
    newPlanet.orbit.cY[cYKey] = { val: el, deg: !( ( cYKey === 'a' ) || ( cYKey === 'e' ) ) };
  } );
  return newPlanet;
} );

console.log( JSON.stringify( poop ) );

