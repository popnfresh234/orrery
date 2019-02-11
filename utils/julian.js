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
