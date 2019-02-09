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
