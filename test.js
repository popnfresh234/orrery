let canvasback = document.getElementById( 'LAYER1' ),
   contextback = canvasback.getContext( '2d' ),
   canvas = document.getElementById( 'LAYER2' ),
   context = canvas.getContext( '2d' ),
   fullscreenMode = !1,
   orreryWidth = 1170,
   is_safari = navigator.userAgent.indexOf("Safari") > -1,
   is_explorer = navigator.userAgent.indexOf("MSIE") > -1;
!Object.hasOwnProperty.call( window, 'ActiveXObject' ) || window.ActiveXObject || is_explorer || ( is_explorer = !0 );
is_explorer || ( canvas.addEventListener( 'mousedown', doMouseDown, !0 ),
canvas.addEventListener( 'DOMMouseScroll', doMouseWheel, !1 ),
canvas.addEventListener( 'mousewheel', doMouseWheel, !1 ),
canvas.addEventListener( 'mousemove', onMouseMove, !1 ) );
window.addEventListener( 'keydown', doKeyDown, !1 );
window.addEventListener( 'keyup', doKeyUp, !1 );
let coords, 
mouseX, 
mouseY, 
mouseDelta = 0, 
keyUp = !1, 
keyDown = !1, 
keyLeft = !1, 
keyRight = !1, 
keySpace = !1, 
started = !1, 
ended = !1, 
xDeltaNeptune, 
yDeltaNeptune, 
distanceNeptune, 
xDeltaCO, 
yDeltaCO, 
distanceCO, 
XcenterTO, 
YcenterTO, 
semimajorPF2, 
ePF2, 
semiminorPF2, 
orbitColor, 
orbitPointColor, 
orbitDashedColor, 
K = Math.PI / 180, 
current, 
enddate = new Date( 2050, 0, 1 ), 
monthNames = 'JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC'.split( ' ' ), 
newdd, 
newmm, 
newyyyy, 
YEAR, 
MONTH, 
DAY, 
newDate, 
T, 
jupiterScaleDivider = 2.5, 
saturnScaleDivider = 3.75, 
uranusScaleDivider = 6.3, 
neptuneScaleDivider = 8.7;
conjunctionOppositionDates = ['      '.split( ' ' ), '      '.split( ' ' ), '      '.split( ' ' ), '      '.split( ' ' ), '      '.split( ' ' ), '      '.split( ' ' ), '      '.split( ' ' ), '      '.split( ' ' )];
let conjunctionOppositionDateSort, 
conjunctionOppositionDatesRunning = '      '.split( ' ' ), 
planetInfoIndex = 10;
planetInfo = ['MERCURY;TERRESTRIAL;167 \u00b0C;0.38 AU;0.24 YEARS;0;DIRECT;0.034\u00b0;7.0\u00b0'.split( ';' ), 'VENUS;TERRESTRIAL;464 \u00b0C;0.72 AU;0.62 YEARS;0;RETROGRADE;177.36\u00b0;3.4\u00b0'.split( ';' ), 'EARTH;TERRESTRIAL;15 \u00b0C;1.00 AU;1.00 YEARS;1;DIRECT;23.44\u00b0;0.0\u00b0'.split( ';' ), 'MARS;TERRESTRIAL;-63 \u00b0C;1.52 AU;1.88 YEARS;2;DIRECT;25.19\u00b0;1.9\u00b0'.split( ';' ), 'JUPITER;GAS GIANT;-108 \u00b0C;5.20 AU;11.87 YEARS;67;DIRECT;3.13\u00b0;1.3\u00b0'.split( ';' ), 'SATURN;GAS GIANT;-139 \u00b0C;9.53 AU;29.45 YEARS;62;DIRECT;26.73\u00b0;2.5\u00b0'.split( ';' ), 'URANUS;GAS GIANT;-197 \u00b0C;19.19 AU;84.07 YEARS;27;RETROGRADE;97.77\u00b0;0.8\u00b0'.split( ';' ), 'NEPTUNE;GAS GIANT;-201 \u00b0C;30.06 AU;164.88 YEARS;14;DIRECT;28.32\u00b0;1.8\u00b0'.split( ';' )];
let planetElements = [[0.38709927, 3.7E-7, 252.2503235, 149472.67411175, 0.20563593, 1.906E-5, 7.00497902, -0.00594749, 77.45779628, 0.16047689, 48.33076593, -0.1253408], [0.72333566, 3.9E-6, 181.9790995, 58517.81538729, 0.00677672, -4.107E-5, 3.39467605, -7.889E-4, 131.60246718, 0.00268329, 76.67984255, -0.27769418], [1.00000261, 5.62E-6, 100.46457166, 35999.37244981, 0.01671123, -4.392E-5, -1.531E-5, -0.01294668, 102.93768193, 0.32327364, 0, 0], [1.52371034, 1.847E-5, -4.55343205, 19140.30268499, 0.0933941, 7.882E-5, 1.84969142, -0.00813131, -23.94362959, 0.44441088, 49.55953891, -0.29257343], [5.202887, -1.1607E-4, 34.39644051, 3034.74612775, 0.04838624, -1.3253E-4, 1.30439695, -0.00183714, 14.72847983, 0.21252668, 100.47390909, 0.20469106], [9.53667594, -0.0012506, 49.95424423, 1222.49362201, 0.05386179, -5.0991E-4, 2.48599187, 0.00193609, 92.59887831, -0.41897216, 113.66242448, -0.28867794], [19.18916464, -0.00196176, 313.23810451, 428.48202785, 0.04725744, -4.397E-5, 0.77263783, -0.00242939, 170.9542763, 0.40805281, 74.01692503, 0.04240589], [30.06992276, 2.6291E-4, -55.12002969, 218.45945325, 0.00859048, 5.105E-5, 1.77004347, 3.5372E-4, 44.96476227, -0.32241464, 131.78422574, -0.00508664], [1.29157162792, 0, 0, 24688.800862068965, 0.236386, 0, 23.455, 0, 71.347, 0, 0.258, 0]], 
LGen, 
iGen, 
wGen, 
WGen, 
pGen, 
MGen, 
EGen, 
trueAnomalyArgGen, 
nGen, 
xGen, 
yGen, 
zGen, 
XGen, 
YGen, 
ZGen, 
TGen, 
launchPoint = [], 
landingPoint = [], 
launchPointMars = [], 
mercuryAphelionPoint, 
mercuryPerihelionPoint, 
venusAphelionPoint, 
venusPerihelionPoint, 
earthAphelionPoint, 
earthPerihelionPoint, 
marsAphelionPoint, 
marsPerihelionPoint, 
jupiterPerihelionPoint, 
jupiterAphelionPoint, 
saturnPerihelionPoint, 
saturnAphelionPoint, 
uranusPerihelionPoint, 
uranusAphelionPoint, 
neptunePerihelionPoint, 
neptuneAphelionPoint, 
plutoPerihelionPoint, 
plutoAphelionPoint, 
PFIntersectPointEarth, 
PFIntersectPointMars, 
aMercury, 
eMercury, 
XMercury, 
YMercury, 
ZMercury, 
MMercury, 
nMercury, 
rMercury, 
LMercury, 
WMercury, 
wMercury, 
iMercury, 
EMercury, 
pMercury, 
aVenus, 
eVenus, 
XVenus, 
YVenus, 
ZVenus, 
MVenus, 
nVenus, 
rVenus, 
LVenus, 
WVenus, 
wVenus, 
iVenus, 
EVenus, 
pVenus, 
aEarth, 
eEarth, 
XEarth, 
YEarth, 
ZEarth, 
MEarth, 
nEarth, 
rEarth, 
LEarth, 
WEarth, 
wEarth, 
iEarth, 
EEarth, 
pEarth, 
aMars, 
eMars, 
XMars, 
YMars, 
ZMars, 
MMars, 
nMars, 
rMars, 
LMars, 
WMars, 
wMars, 
iMars, 
EMars, 
pMars, 
aJupiter, 
eJupiter, 
XJupiter, 
YJupiter, 
ZJupiter, 
MJupiter, 
nJupiter, 
rJupiter, 
LJupiter, 
WJupiter, 
wJupiter, 
iJupiter, 
EJupiter, 
pJupiter, 
aSaturn, 
eSaturn, 
XSaturn, 
YSaturn, 
ZSaturn, 
MSaturn, 
nSaturn, 
rSaturn, 
LSaturn, 
WSaturn, 
wSaturn, 
iSaturn, 
ESaturn, 
pSaturn, 
aUranus, 
eUranus, 
XUranus, 
YUranus, 
ZUranus, 
MUranus, 
nUranus, 
rUranus, 
LUranus, 
WUranus, 
wUranus, 
iUranus, 
EUranus, 
pUranus, 
aNeptune, 
eNeptune, 
XNeptune, 
YNeptune, 
ZNeptune, 
MNeptune, 
nNeptune, 
rNeptune, 
LNeptune, 
WNeptune, 
wNeptune, 
iNeptune, 
ENeptune, 
pNeptune, 
aPath, 
ePath, 
XPath, 
YPath, 
ZPath, 
MPath, 
nPath, 
rPath, 
LPath, 
WPath, 
wPath, 
iPath, 
EPath, 
pPath, 
fps = 20, 
now, 
then = Date.now(), 
interval = 1E3 / fps, 
delta, 
nowTPS, 
thenTPS = Date.now(), 
avgTPSCount = 0, 
TPSCount = 0, 
deltaTPS = 0, 
nowFPS, 
thenFPS = Date.now(), 
avgFPSCount = 0, 
FPSCount = 0, 
deltaFPS = 0, 
rotAngle = 0, 
getstartposAngle = !0, 
staticstartpostAngle, 
secondLastDistance = 0, 
lastDistance = 0, 
oppositionMode = !1, 
firstOppositionFrame = !1, 
imagesLoaded = 0, 
totalImages = 30, 
fullscreenImg = new Image();
fullscreenImg.onload = function () {
  imageWait();
};
fullscreenImg.src = 'img/fullscreenImg.png';
let fullscreenImgHL = new Image();
fullscreenImgHL.onload = function () {
  imageWait();
};
fullscreenImgHL.src = 'img/fullscreenImgHL.png';
let fullscreenButtonHighlight = !1,
   fullscreenexitImgHL = new Image();
fullscreenexitImgHL.onload = function () {
  imageWait();
};
fullscreenexitImgHL.src = 'img/fullscreenexitImgHL.png';
let fullscreenexitImg = new Image();
fullscreenexitImg.onload = function () {
  imageWait();
};
fullscreenexitImg.src = 'img/fullscreenexitImg.png';
let playImg = new Image();
playImg.onload = function () {
  imageWait();
};
playImg.src = 'img/playImg.png';
let playImgHL = new Image();
playImgHL.onload = function () {
  imageWait();
};
playImgHL.src = 'img/playImgHL.png';
let playButtonHighlight = !1,
   pauseImg = new Image();
pauseImg.onload = function () {
  imageWait();
};
pauseImg.src = 'img/pauseImg.png';
let pauseImgHL = new Image();
pauseImgHL.onload = function () {
  imageWait();
};
pauseImgHL.src = 'img/pauseImgHL.png';
let pauseButtonHighlight = !1,
   zoomoutImg = new Image();
zoomoutImg.onload = function () {
  imageWait();
};
zoomoutImg.src = 'img/zoomoutImg.png';
let zoomButtonHighlight = !1,
   zoominImg = new Image();
zoominImg.onload = function () {
  imageWait();
};
zoominImg.src = 'img/zoominImg.png';
let zoomoutImgHL = new Image();
zoomoutImgHL.onload = function () {
  imageWait();
};
zoomoutImgHL.src = 'img/zoomoutImgHL.png';
let zoominImgHL = new Image();
zoominImgHL.onload = function () {
  imageWait();
};
zoominImgHL.src = 'img/zoominImgHL.png';
let detailImgHL = new Image();
detailImgHL.onload = function () {
  imageWait();
};
detailImgHL.src = 'img/detailImgHL.png';
let detailImg = new Image();
detailImg.onload = function () {
  imageWait();
};
detailImg.src = 'img/detailImg.png';
let detailButtonHighlight = !1,
   nextImg = new Image();
nextImg.onload = function () {
  imageWait();
};
nextImg.src = 'img/nextImg.png';
let nextImgHL = new Image();
nextImgHL.onload = function () {
  imageWait();
};
nextImgHL.src = 'img/nextImgHL.png';
let nextButtonHighlight = !1,
   scaleActualImg = new Image();
scaleActualImg.onload = function () {
  imageWait();
};
scaleActualImg.src = 'img/scaleActualImg.png';
let scaleCompressedImg = new Image();
scaleCompressedImg.onload = function () {
  imageWait();
};
scaleCompressedImg.src = 'img/scaleCompressedImg.png';
let scaleHighlight = !1,
   scaleActualImgHL = new Image();
scaleActualImgHL.onload = function () {
  imageWait();
};
scaleActualImgHL.src = 'img/scaleActualImgHL.png';
let scaleCompressedImgHL = new Image();
scaleCompressedImgHL.onload = function () {
  imageWait();
};
scaleCompressedImgHL.src = 'img/scaleCompressedImgHL.png';
let zoomstart = new Image();
zoomstart.onload = function () {
  imageWait();
};
zoomstart.src = 'img/zoomstartImg.png';
let telescopeImg = new Image();
telescopeImg.onload = function () {
  imageWait();
};
telescopeImg.src = 'img/telescopeImg.png';
let telescopeHighlight = !1,
   telescopeImgHL = new Image();
telescopeImgHL.onload = function () {
  imageWait();
};
telescopeImgHL.src = 'img/telescopeImgHL.png';
let infoImg = new Image();
infoImg.onload = function () {
  imageWait();
};
infoImg.src = 'img/infoImg.png';
let infoHighlight = !1,
   infoImgHL = new Image();
infoImgHL.onload = function () {
  imageWait();
};
infoImgHL.src = 'img/infoImgHL.png';
let sideViewImg = new Image();
sideViewImg.onload = function () {
  imageWait();
};
sideViewImg.src = 'img/sideViewImg.png';
let topviewHighlight = !1,
   sideViewImgHL = new Image();
sideViewImgHL.onload = function () {
  imageWait();
};
sideViewImgHL.src = 'img/sideViewImgHL.png';
let topViewImg = new Image();
topViewImg.onload = function () {
  imageWait();
};
topViewImg.src = 'img/topViewImg.png';
let topViewImgHL = new Image();
topViewImgHL.onload = function () {
  imageWait();
};
topViewImgHL.src = 'img/topViewImgHL.png';
let ariesImg = new Image();
ariesImg.onload = function () {
  imageWait();
};
ariesImg.src = 'img/ariesImg.png';
let playImgX, 
playImgY, 
nextImgX, 
nextImgY, 
pauseImgX, 
pauseImgY, 
fullscreenImgX, 
fullscreenImgY, 
zoomImgX, 
zoomImgY, 
detailImgX, 
detailImgY, 
scaleImgX, 
scaleImgY, 
telescopeImgX, 
telescopeImgY, 
infoImgX, 
infoImgY, 
topviewImgX, 
topviewImgY, 
AlphaLoop = 30, 
AlphaLoopChange = -1, 
solarConjunction = !1, 
speedOfLightMs = 299792458, 
AU = 149597870700, 
signalTimePerAUSeconds = AU / speedOfLightMs, 
mission1996Highlight = !1, 
mission2003Highlight = !1, 
mission2011Highlight = !1, 
mission2018Highlight = !1, 
runningmission1996 = !1, 
launchDate1996 = new Date( 1996, 11, 4 ), 
landingDate1996 = new Date( 1997, 6, 4 ), 
runningmission2003 = !1, 
launchDate2003 = new Date( 2003, 6, 7 ), 
landingDate2003 = new Date( 2004, 0, 25 ), 
runningmission2011 = !1, 
launchDate2011 = new Date( 2011, 10, 26 ), 
landingDate2011 = new Date( 2012, 7, 6 ), 
runningmission2018 = !1, 
launchDate2018 = new Date( 2018, 4, 5 ), 
landingDate2018 = new Date( 2018, 10, 26 ), 
xDeltaTransfer, 
yDeltaTransfer, 
distanceTransfer, 
smAxisTransfer, 
semiMajorAxisProbeOrbit, 
eccentricityProbeOrbit, 
orbitalProbeFlightTimeDays, 
ePFset = !1, 
xDeltaPF, 
yDeltaPF, 
semimajorPF, 
semiminorPF, 
ePF, 
flighttimePF, 
scale, 
scaleChange, 
planetScaleAdjustment, 
orbitalElements, 
startScreenWidth = 700, 
startScreenHeight = 575, 
startScreenX = orreryWidth / 2 - startScreenWidth / 2, 
startScreenY = canvas.height / 2 - startScreenHeight / 2, 
endScreenWidth = 600, 
endScreenHeight = 200, 
endScreenX = orreryWidth / 2 - endScreenWidth / 2, 
endScreenY = canvas.height / 2 - endScreenHeight / 2, 
playing = !1, 
zoomedin = !1, 
scaleCompressed = !0, 
mobileDevice = !1, 
mobileMultiplier = 1, 
mobileAdjustX = 0, 
mobileExtraX = 0, 
mobileExtraX2 = 0, 
mobileExtraX3 = 0, 
mobileExtraX4 = 0, 
mobileExtraX5 = 0, 
mobilePadding = 0, 
mobilezoomAdjustX = 0, 
redrawback = !1, 
nextMode = !1, 
zoomedinscale = 200, 
zoomedoutscale = 100, 
zoomedoutscaleActual = 7.5;
scale = zoomedinscale;
let zoomincrement = 1;
scaleChange = 2;
let avgSpeedProbe = 0, 
missionRot = 0, 
missionDay = 0, 
YVoyagerI = canvas.height / 2 + 40.5 * zoomedoutscaleActual, 
XVoyagerI = orreryWidth / 2 + 0, 
voyagerMode = !1, 
telescopeMode = !1, 
infoMode = !1, 
planetSizeAdjust = 1, 
planetPadding = 20, 
phaseAngleAtDeparture = 0, 
sweepAngle = 0, 
GMSun = 1.32712440018E20, 
AUValue = 1.495978707E8, 
gravitationalConstantKG = 6.673889E-11, 
massEarthKG = 5.9723E24, 
massMarsKG = 6.4171E23, 
radiusEarthM = 6371E3, 
radiusEarthLEO200_M = 2E5, 
radiusEarthLEO300_M = 3E5, 
radiusEarthLEO640_M = 64E4, 
radiusEarthGEO35786_M = 35786E3, 
velocityAtLEO200KMS = Math.sqrt( massEarthKG * gravitationalConstantKG / ( radiusEarthM + radiusEarthLEO200_M ) ) / 1E3, 
escapeVelocityEarthLEO200KMS = Math.sqrt( 2 * gravitationalConstantKG * massEarthKG / ( radiusEarthM + radiusEarthLEO200_M ) ) / 1E3, 
velocityAtLEO300KMS = Math.sqrt( massEarthKG * gravitationalConstantKG / ( radiusEarthM + radiusEarthLEO300_M ) ) / 1E3, 
escapeVelocityEarthLEO300KMS = Math.sqrt( 2 * gravitationalConstantKG * massEarthKG / ( radiusEarthM + radiusEarthLEO300_M ) ) / 1E3, 
velocityAtGEO35786KMS = Math.sqrt( massEarthKG * gravitationalConstantKG / ( radiusEarthM + radiusEarthGEO35786_M ) ) / 1E3, 
escapeVelocityEarthGEO35786KMS = Math.sqrt( 2 * gravitationalConstantKG * massEarthKG / ( radiusEarthM + radiusEarthGEO35786_M ) ) / 1E3, 
meanSemiMajorAxisEarthAU = 1.00000011, 
meanSemiMajorAxisMarsAU = 1.52366231, 
meanOrbitalVelocityEarthKMS = 29.78, 
VEarthSquared = Math.pow( meanOrbitalVelocityEarthKMS, 2 ), 
ETransferOrbitRightSide = 2 * VEarthSquared * ( 1 - meanSemiMajorAxisEarthAU / meanSemiMajorAxisMarsAU ), 
ETransferOrbitLeftSide = 1 - Math.pow( meanSemiMajorAxisEarthAU, 2 ) / Math.pow( meanSemiMajorAxisMarsAU, 2 ), 
VSpacecraftLaunchKMS = Math.sqrt( ETransferOrbitRightSide / ETransferOrbitLeftSide ), 
deltaVLaunch = VSpacecraftLaunchKMS - meanOrbitalVelocityEarthKMS, 
VSpacecraftArrivalKMS = meanSemiMajorAxisEarthAU / meanSemiMajorAxisMarsAU * VSpacecraftLaunchKMS, 
habitableZone = calculateHabitableZoneStar(), 
speedEarth = 0, 
speedMars = 0, 
speedSpacecraft = 0, 
speedSide = 0, 
topView = !0, 
limitAU = -10, 
rLegend = 75, 
xLegend = 950, 
yLegend = canvas.height - 30 - 1 - rLegend - 40, 
lineLegend = 1, 
lOPX100, 
lOPY100, 
wAngleLegend = 0, 
WAngleLegend = 0, 
zAU2 = 0, 
LAngleLegend = 0, 
nAngleLegend = 0;
function init() {
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test( navigator.userAgent ) && ( mobileDevice = !0 );
  mobileDevice && ( document.getElementById( 'CONTAINER' ).style.top = '0%',
  document.getElementById( 'CONTAINER' ).style.left = '0%',
  document.getElementById( 'CONTAINER' ).style.transform = 'translateX(0%) translateY(0%)',
  document.getElementById( 'LAYER1' ).style.top = '50%',
  document.getElementById( 'LAYER1' ).style.left = '50%',
  document.getElementById( 'LAYER1' ).style.transform = 'translateX(-50%) translateY(-50%)',
  document.getElementById( 'LAYER2' ).style.top = '50%',
  document.getElementById( 'LAYER2' ).style.left = '50%',
  document.getElementById( 'LAYER2' ).style.transform = 'translateX(-50%) translateY(-50%)',
  mobileMultiplier = 4,
  mobileAdjustX = 50,
  mobileExtraX = 30,
  mobileExtraX2 = 0,
  mobileExtraX5 = mobileExtraX4 = mobileExtraX3 = 80,
  mobilezoomAdjustX = mobilePadding = 10 );
  playImgX = 30;
  playImgY = 28;
  nextImgX = 30;
  nextImgY = 63;
  pauseImgX = 30;
  pauseImgY = 28;
  fullscreenImgX = orreryWidth - 30 - fullscreenImg.width;
  fullscreenImgY = 28;
  zoomImgX = orreryWidth - 30 - fullscreenImg.width - 30;
  zoomImgY = 28;
  scaleImgX = orreryWidth - 30 - fullscreenImg.width - 30 - zoominImg.width + 3;
  scaleImgY = 28;
  topviewImgX = orreryWidth - 30 - fullscreenImg.width - 30 - zoominImg.width - scaleCompressedImg.width - 16;
  topviewImgY = 28;
  telescopeImgX = orreryWidth - 30 - fullscreenImg.width - 30 - zoominImg.width - scaleCompressedImg.width - 19 - topViewImg.width - 8;
  telescopeImgY = 28;
  infoImgX = orreryWidth - 30 - fullscreenImg.width - 30 - zoominImg.width - scaleCompressedImg.width - 19 - telescopeImg.width - topViewImg.width - 13;
  infoImgY = 28;
  detailImgX = canvas.width - 35;
  detailImgY = 687;
  mercuryAphelionPoint = plotPlanet( 0, 1985, 7, 22, !1 );
  mercuryPerihelionPoint = plotPlanet( 0, 1985, 6, 8, !1 );
  venusAphelionPoint = plotPlanet( 1, 1986, 1, 27, !1 );
  venusPerihelionPoint = plotPlanet( 1, 1985, 10, 7, !1 );
  earthAphelionPoint = plotPlanet( 2, 1986, 7, 5, !1 );
  earthPerihelionPoint = plotPlanet( 2, 1987, 1, 4, !1 );
  marsAphelionPoint = plotPlanet( 3, 1987, 9, 4, !1 );
  marsPerihelionPoint = plotPlanet( 3, 1988, 8, 13, !1 );
  jupiterPerihelionPoint = plotPlanet( 4, 1999, 5, 8, !1 );
  jupiterAphelionPoint = plotPlanet( 4, 1993, 6, 2, !1 );
  saturnPerihelionPoint = plotPlanet( 5, 2003, 6, 26, !1 );
  saturnAphelionPoint = plotPlanet( 5, 1988, 10, 8, !1 );
  uranusPerihelionPoint = plotPlanet( 6, 1966, 10, 7, !1 );
  uranusAphelionPoint = plotPlanet( 6, 2008, 10, 18, !1 );
  neptunePerihelionPoint = plotPlanet( 7, 1881, 3, 9, !1 );
  neptuneAphelionPoint = plotPlanet( 7, 1963, 6, 23, !1 );
  PFIntersectPointEarth = plotPlanet( 2, 1997, 2, 5.5, !1 );
  PFIntersectPointMars = plotPlanet( 3, 1996, 8, 8, !1 );
  conjunctionOppositionDates[0] = nextConjunctionOppositionCalc( 0, !0, !1 );
  conjunctionOppositionDates[1] = nextConjunctionOppositionCalc( 1, !0, !1 );
  conjunctionOppositionDates[3] = nextConjunctionOppositionCalc( 3, !0, !1 );
  conjunctionOppositionDates[4] = nextConjunctionOppositionCalc( 4, !0, !1 );
  conjunctionOppositionDates[5] = nextConjunctionOppositionCalc( 5, !0, !1 );
  conjunctionOppositionDates[6] = nextConjunctionOppositionCalc( 6, !0, !1 );
  conjunctionOppositionDates[7] = nextConjunctionOppositionCalc( 7, !0, !1 );
  conjunctionOppositionDateSort = [new Date( conjunctionOppositionDates[0][0], conjunctionOppositionDates[0][1], conjunctionOppositionDates[0][2], 0 ), new Date( conjunctionOppositionDates[1][0], conjunctionOppositionDates[1][1], conjunctionOppositionDates[1][2], 1 ), new Date( conjunctionOppositionDates[3][0], conjunctionOppositionDates[3][1], conjunctionOppositionDates[3][2], 3 ), new Date( conjunctionOppositionDates[4][0], conjunctionOppositionDates[4][1], conjunctionOppositionDates[4][2], 4 ), new Date( conjunctionOppositionDates[5][0], conjunctionOppositionDates[5][1], conjunctionOppositionDates[5][2], 5 ), new Date( conjunctionOppositionDates[6][0], conjunctionOppositionDates[6][1], conjunctionOppositionDates[6][2], 6 ), new Date( conjunctionOppositionDates[7][0], conjunctionOppositionDates[7][1], conjunctionOppositionDates[7][2], 7 )];
  conjunctionOppositionDateSort.sort( date_sort_asc );
  current = new Date();
  DAY = current.getDate();
  MONTH = current.getMonth() + 1;
  YEAR = current.getFullYear();
  T = getT( getJulianDate( YEAR, MONTH, DAY ), 'J2000' );
  orbitalElements = plotPlanet( 0, YEAR, MONTH, DAY, !1 );
  aMercury = orbitalElements[3];
  eMercury = orbitalElements[4];
  wMercury = orbitalElements[10];
  orbitalElements = plotPlanet( 1, YEAR, MONTH, DAY, !1 );
  aVenus = orbitalElements[3];
  eVenus = orbitalElements[4];
  wVenus = orbitalElements[10];
  orbitalElements = plotPlanet( 2, YEAR, MONTH, DAY, !1 );
  aEarth = orbitalElements[3];
  eEarth = orbitalElements[4];
  wEarth = orbitalElements[10];
  orbitalElements = plotPlanet( 3, YEAR, MONTH, DAY, !1 );
  aMars = orbitalElements[3];
  eMars = orbitalElements[4];
  wMars = orbitalElements[10];
  orbitalElements = plotPlanet( 4, YEAR, MONTH, DAY, !1 );
  aJupiter = orbitalElements[3];
  eJupiter = orbitalElements[4];
  wJupiter = orbitalElements[10];
  orbitalElements = plotPlanet( 5, YEAR, MONTH, DAY, !1 );
  aSaturn = orbitalElements[3];
  eSaturn = orbitalElements[4];
  wSaturn = orbitalElements[10];
  orbitalElements = plotPlanet( 6, YEAR, MONTH, DAY, !1 );
  aUranus = orbitalElements[3];
  eUranus = orbitalElements[4];
  wUranus = orbitalElements[10];
  orbitalElements = plotPlanet( 7, YEAR, MONTH, DAY, !1 );
  aNeptune = orbitalElements[3];
  eNeptune = orbitalElements[4];
  wNeptune = orbitalElements[10];
  is_explorer || renderBackground();
}
var date_sort_asc = function ( a, b ) {
  return a > b ? 1 : a < b ? -1 : 0;
};
function run() {
  if ( is_explorer ) {
    context.beginPath();
    context.globalAlpha = 0.6;
    context.rect( canvas.width / 2 - startScreenWidth / 2, startScreenY, startScreenWidth, startScreenHeight );
    context.fillStyle = '#3B0000';
    context.fill();
    context.closePath();
    context.globalAlpha = 1;
    context.beginPath();
    context.rect( canvas.width / 2 - startScreenWidth / 2, startScreenY, startScreenWidth, startScreenHeight );
    context.lineWidth = 2;
    context.strokeStyle = 'lightGrey';
    context.closePath();
    context.stroke();
    renderText( 'IE DETECTED', 'Arial', 'center', canvas.width / 2, startScreenY + 50 + 20, 50, 'lightGrey', context );
    let a = 0;
    renderText( 'INTERNET EXPLORER NOT SUPPORTED.', 'Arial', 'left', canvas.width / 2 - startScreenWidth / 2 + 50, startScreenY + 150 - 30 - 10 + 15, 30, 'lightGrey', context );
    renderText( 'PLEASE USE ONE OF THE BROWSERS', 'Arial', 'left', canvas.width / 2 - startScreenWidth / 2 + 50, startScreenY + 150 - 5 + 15, 30, 'lightGrey', context );
    renderText( 'LISTED BELOW AND TRY AGAIN:', 'Arial', 'left', canvas.width / 2 - startScreenWidth / 2 + 50, startScreenY + 150 + 30 + 15, 30, 'lightGrey', context );
    context.beginPath();
    context.rect( canvas.width / 2 - startScreenWidth / 2 + 30, startScreenY + 150 + 90 + 15 - 16 + 15, 10, 10 );
    context.fillStyle = 'lightGrey';
    context.fill();
    renderText( 'CHROME', 'Arial', 'left', canvas.width / 2 - startScreenWidth / 2 + 50, startScreenY + 150 + 90 + 15 + 15, 30, 'lightGrey', context );
    a++;
    context.beginPath();
    context.rect( canvas.width / 2 - startScreenWidth / 2 + 30, startScreenY + 150 + 120 + 20 - 16 + 15, 10, 10 );
    context.fillStyle = 'lightGrey';
    context.fill();
    renderText( 'EDGE', 'Arial', 'left', canvas.width / 2 - startScreenWidth / 2 + 50, startScreenY + 150 + 120 + 20 + 15, 30, 'lightGrey', context );
    a++;
    context.beginPath();
    context.rect( canvas.width / 2 - startScreenWidth / 2 + 30, startScreenY + 150 + 150 + 25 - 16 + 15, 10, 10 );
    context.fillStyle = 'lightGrey';
    context.fill();
    renderText( 'FIREFOX', 'Arial', 'left', canvas.width / 2 - startScreenWidth / 2 + 50, startScreenY + 150 + 150 + 25 + 15, 30, 'lightGrey', context );
    context.beginPath();
    context.rect( canvas.width / 2 - startScreenWidth / 2 + 30, startScreenY + 150 + 180 + 30 - 16 + 15, 10, 10 );
    context.fillStyle = 'lightGrey';
    context.fill();
    renderText( 'SAFARI', 'Arial', 'left', canvas.width / 2 - startScreenWidth / 2 + 50, startScreenY + 150 + 180 + 30 + 15, 30, 'lightGrey', context );
    context.beginPath();
    context.rect( canvas.width / 2 - startScreenWidth / 2 + 30, startScreenY + 150 + 210 + 35 - 16 + 15, 10, 10 );
    context.fillStyle = 'lightGrey';
    context.fill();
    renderText( 'OPERA', 'Arial', 'left', canvas.width / 2 - startScreenWidth / 2 + 50, startScreenY + 150 + 210 + 35 + 15, 30, 'lightGrey', context );
  } else {
    now = Date.now();
    delta = now - then;
    playing && updateSpeedControls();
    planetInfoIndex != 10 && updatePlanetControls();
    if ( delta > interval ) {
      then = now - delta % interval;
      playing && ( updateDate( 1 ),
      ( runningmission1996 || runningmission2003 || runningmission2011 || runningmission2018 ) && missionDay++ );
      enddate < current && ( ended = !0,
      playing = !1 );
      updateAllPlanets();
      oppositionMode && ( conjunctionOppositionDatesRunning = nextConjunctionOppositionCalc( planetInfoIndex, !1, !1 ),
      intersectCalc() );
      if ( !topView && planetInfoIndex != 10 )
        {switch (planetInfoIndex) {
                case 0:
                    speedSide = calculateOrbitalSpeed(aMercury, eMercury, MMercury, "KM/S", 1);
                    break;
                case 1:
                    speedSide = calculateOrbitalSpeed(aVenus, eVenus, MVenus, "KM/S", 1);
                    break;
                case 2:
                    speedSide = calculateOrbitalSpeed(aEarth, eEarth, MEarth, "KM/S", 1);
                    break;
                case 3:
                    speedSide = calculateOrbitalSpeed(aMars, eMars, MMars, "KM/S", 1);
                    break;
                case 4:
                    speedSide = calculateOrbitalSpeed(aJupiter, eJupiter, MJupiter, "KM/S", 1);
                    break;
                case 5:
                    speedSide = calculateOrbitalSpeed(aSaturn, eSaturn, MSaturn, "KM/S", 1);
                    break;
                case 6:
                    speedSide = calculateOrbitalSpeed(aUranus, eUranus, MUranus, "KM/S", 1);
                    break;
                case 7:
                    speedSide = calculateOrbitalSpeed(aNeptune, eNeptune, MNeptune, "KM/S", 1)
                }}
      if ( runningmission1996 || runningmission2003 || runningmission2011 || runningmission2018 )
        {conjunctionOppositionDatesRunning = nextConjunctionOppositionCalc(3, !1, !1),
                speedEarth = calculateOrbitalSpeed(aEarth, eEarth, MEarth, "KM/S", 1),
                speedMars = calculateOrbitalSpeed(aMars, eMars, MMars, "KM/S", 1),
                runningmission1996 ? speedSpacecraft = calculateOrbitalSpeed(1.335, 1 - launchPoint[7] / 1.335, missionRot, "KM/S", 1) : runningmission2003 ? speedSpacecraft = calculateOrbitalSpeed(1.25, 1 - launchPoint[7] / 1.25, missionRot, "KM/S", 1) : runningmission2011 ? speedSpacecraft = calculateOrbitalSpeed(1.313, 1 - launchPoint[7] / 1.313, missionRot, "KM/S", 1) : runningmission2018 && (speedSpacecraft = calculateOrbitalSpeed(1.228, 1 - launchPoint[7] / 1.228, missionRot, "KM/S", 1));}
      zoomedin ? scale < zoomedinscale && ( redrawback = !0,
      scale += scaleChange,
      scale % 1 != 0 && ( scale -= 1.5 ) ) : zoomedin || ( scaleCompressed ? scale > zoomedoutscale && ( redrawback = !0,
      scale -= scaleChange ) : scale > zoomedoutscaleActual && ( redrawback = !0,
      scale = scale > 12 ? scale - scaleChange : scale - 0.5 ) );
      redrawback && ( redrawback = !1,
      renderBackground() );
      requestAnimationFrame( renderForeground );
      FPSCount++;
      nowFPS = Date.now();
      deltaFPS = nowFPS - thenFPS;
      deltaFPS > 1E3 && ( avgFPSCount = FPSCount,
      FPSCount = 0,
      thenFPS = nowFPS - deltaFPS % 1E3 );
      rotAngle -= 5;
      rotAngle < -360 && ( rotAngle = 0 );
      if ( !started || ended || telescopeMode || infoMode )
        {AlphaLoop += AlphaLoopChange,
                0 == AlphaLoop && (AlphaLoopChange = -AlphaLoopChange),
                30 == AlphaLoop && (AlphaLoopChange = -AlphaLoopChange)};
    }
    TPSCount++;
    nowTPS = Date.now();
    deltaTPS = nowTPS - thenTPS;
    deltaTPS > 1E3 && ( avgTPSCount = TPSCount,
    TPSCount = 0,
    thenTPS = nowTPS - deltaTPS % 1E3 );
    setTimeout( run, 0 );
  }
}
function updateSpeedControls() {
  keyDown && ( keyDown = !1,
  updateDate( -1 ) );
  keyUp && ( keyUp = !1,
  updateDate( 1 ) );
}
function updatePlanetControls() {
  keyLeft && ( keyLeft = !1,
  planetInfoIndex > 0 ? planetInfoIndex-- : planetInfoIndex = 7,
  firstOppositionFrame = oppositionMode = !1,
  renderBackground() );
  keyRight && ( keyRight = !1,
  planetInfoIndex < 7 ? planetInfoIndex++ : planetInfoIndex = 0,
  firstOppositionFrame = oppositionMode = !1,
  renderBackground() );
  keySpace && ( keySpace = !1 );
}
function renderBackground() {
  contextback.fillStyle = '#080808';
  contextback.fillRect( 0, 0, canvas.width, canvas.height );
  topView && renderHabitableZone( contextback, habitableZone[0], habitableZone[1], 1 );
  mobileDevice ? ( orbitPointColor = orbitColor = 'dimgrey',
  orbitDashedColor = 'lightgray' ) : ( orbitPointColor = orbitColor = '#282828',
  orbitDashedColor = '#646464' );
  scale == zoomedinscale || scale == zoomedoutscale ? topView && ( drawOrbit( 0, contextback, mercuryPerihelionPoint[0], mercuryPerihelionPoint[1], aMercury, eMercury, -wMercury, !1, orbitColor, !1, 2, 0.975, 1, 1, orbitDashedColor, orbitPointColor ),
  drawOrbit( 1, contextback, venusPerihelionPoint[0], venusPerihelionPoint[1], aVenus, eVenus, -wVenus, !1, orbitColor, !1, 2, 1, 0.995, 1, orbitDashedColor, orbitPointColor ),
  // drawOrbit (1, ctx, xPeri, yPeri, a, e, lPeri)
  drawOrbit( 2, contextback, earthPerihelionPoint[0], earthPerihelionPoint[1], aEarth, eEarth, -wEarth, !1, orbitColor, !1, 2, 1, 1, 1, orbitDashedColor, orbitPointColor ),
  drawOrbit( 3, contextback, marsPerihelionPoint[0], marsPerihelionPoint[1], aMars, eMars, -( 360 + wMars ), !1, orbitColor, !1, 2, 1, 0.998, 1, orbitDashedColor, orbitPointColor ),
  drawOrbit( 4, contextback, jupiterPerihelionPoint[0], jupiterPerihelionPoint[1], aJupiter, eJupiter, -wJupiter, !1, orbitColor, !1, 2, 1, 1, jupiterScaleDivider, orbitDashedColor, orbitPointColor ),
  drawOrbit( 5, contextback, saturnPerihelionPoint[0], saturnPerihelionPoint[1], aSaturn, eSaturn, -wSaturn, !1, orbitColor, !1, 2, 1, 1, saturnScaleDivider, orbitDashedColor, orbitPointColor ),
  drawOrbit( 6, contextback, uranusPerihelionPoint[0], uranusPerihelionPoint[1], aUranus, eUranus, -wUranus, !1, orbitColor, !1, 2, 1, 1, uranusScaleDivider, orbitDashedColor, orbitPointColor ),
  drawOrbit( 7, contextback, neptunePerihelionPoint[0], neptunePerihelionPoint[1], aNeptune, eNeptune, -wNeptune, !1, orbitColor, !1, 2, 1, 1, neptuneScaleDivider, orbitDashedColor, orbitPointColor ) ) : scale < zoomedoutscale && topView && ( drawOrbit( 0, contextback, mercuryPerihelionPoint[0], mercuryPerihelionPoint[1], aMercury, eMercury, -wMercury, !1, orbitColor, !1, 1, 0.975, 1, 1, orbitDashedColor, orbitPointColor ),
  drawOrbit( 1, contextback, venusPerihelionPoint[0], venusPerihelionPoint[1], aVenus, eVenus, -wVenus, !1, orbitColor, !1, 1, 1, 0.995, 1, orbitDashedColor, orbitPointColor ),
  drawOrbit( 2, contextback, earthPerihelionPoint[0], earthPerihelionPoint[1], aEarth, eEarth, -wEarth, !1, orbitColor, !1, 1, 1, 1, 1, orbitDashedColor, orbitPointColor ),
  drawOrbit( 3, contextback, marsPerihelionPoint[0], marsPerihelionPoint[1], aMars, eMars, -( 360 + wMars ), !1, orbitColor, !1, 1, 1, 0.998, 1, orbitDashedColor, orbitPointColor ),
  drawOrbit( 4, contextback, jupiterPerihelionPoint[0], jupiterPerihelionPoint[1], aJupiter, eJupiter, -wJupiter, !1, orbitColor, !1, 1, 1, 1, jupiterScaleDivider, orbitDashedColor, orbitPointColor ),
  drawOrbit( 5, contextback, saturnPerihelionPoint[0], saturnPerihelionPoint[1], aSaturn, eSaturn, -wSaturn, !1, orbitColor, !1, 1, 1, 1, saturnScaleDivider, orbitDashedColor, orbitPointColor ),
  drawOrbit( 6, contextback, uranusPerihelionPoint[0], uranusPerihelionPoint[1], aUranus, eUranus, -wUranus, !1, orbitColor, !1, 1, 1, 1, uranusScaleDivider, orbitDashedColor, orbitPointColor ),
  drawOrbit( 7, contextback, neptunePerihelionPoint[0], neptunePerihelionPoint[1], aNeptune, eNeptune, -wNeptune, !1, orbitColor, !1, 1, 1, 1, neptuneScaleDivider, orbitDashedColor, orbitPointColor ) );
  scale != zoomedoutscale && scale != zoomedoutscaleActual || renderRightConsole( contextback );
  renderMarsMissions( contextback, !1 );
  topView || planetInfoIndex == 10 || ( contextback.beginPath(),
  contextback.arc( xLegend, yLegend, rLegend, 0, 2 * Math.PI, !1 ),
  contextback.lineWidth = lineLegend,
  contextback.strokeStyle = 'goldenRod',
  contextback.stroke(),
  renderLine( xLegend + 110, yLegend, xLegend + 100, yLegend - 10, 'goldenRod', lineLegend, !1, contextback ),
  renderLine( xLegend - 100, yLegend, xLegend + 110, yLegend, 'goldenRod', lineLegend, !1, contextback ),
  renderLine( xLegend + 110, yLegend, xLegend + 100, yLegend + 10, 'goldenRod', lineLegend, !1, contextback ),
  renderLine( xLegend, yLegend - 100, xLegend, yLegend + 100, 'goldenRod', lineLegend, !1, contextback ),
  renderText( '0\u00b0', 'Arial', 'left', xLegend + rLegend + 40, yLegend + 4, 12, 'goldenRod', contextback ),
  renderText( 'FIRST POINT', 'Arial', 'left', xLegend + rLegend + 40, yLegend + 4 + 12 + 5, 12, 'goldenRod', contextback ),
  renderText( 'OF ARIES', 'Arial', 'left', xLegend + rLegend + 40, yLegend + 4 + 24 + 5, 12, 'goldenRod', contextback ),
  renderText( '90\u00b0', 'Arial', 'center', xLegend + 1, yLegend - rLegend - 30, 12, 'goldenRod', contextback ),
  renderText( '180\u00b0', 'Arial', 'left', xLegend - rLegend - 55, yLegend + 4, 12, 'goldenRod', contextback ),
  renderText( '270\u00b0', 'Arial', 'center', xLegend + 1, yLegend + rLegend + 40, 12, 'goldenRod', contextback ) );
}
function renderMarsMissions( a, b ) {
  if ( runningmission1996 || runningmission2003 || runningmission2011 || runningmission2018 )
    {b || (100 <= scale ? renderPoint(orreryWidth / 2 + launchPoint[0] * scale, canvas.height / 2 - launchPoint[1] * scale, 2, 0, 2 * Math.PI, !0, "Yellow", "GoldenRod", a) : renderPoint(orreryWidth / 2 + launchPoint[0] * scale, canvas.height / 2 - launchPoint[1] * scale, .25, 0, 2 * Math.PI, !0, "Yellow", "GoldenRod", a),
        100 <= scale && renderText("LAUNCH", "Arial", "left", orreryWidth / 2 + launchPoint[0] * scale + 10, canvas.height / 2 - launchPoint[1] * scale + 4, 12, "GoldenRod", a),
        100 <= scale ? renderPoint(orreryWidth / 2 + landingPoint[0] * scale, canvas.height / 2 - landingPoint[1] * scale, 2, 0, 2 * Math.PI, !0, "Yellow", "GoldenRod", a) : renderPoint(orreryWidth / 2 + landingPoint[0] * scale, canvas.height / 2 - landingPoint[1] * scale, .25, 0, 2 * Math.PI, !0, "Yellow", "GoldenRod", a),
        100 <= scale && renderText("LANDING", "Arial", "left", orreryWidth / 2 + landingPoint[0] * scale + 10, canvas.height / 2 - landingPoint[1] * scale + 4, 12, "GoldenRod", a),
        renderText("TRANSFER ORBIT SIMULATED", "Arial", "left", 30, 689, 20, "GoldenRod", a),
        renderText("NO ACTUAL FLIGHT DATA USED FOR TRAJECTORY", "Arial", "left", 30, 704, 12, "GoldenRod", a),
        renderText("TYPE-I TRAJECTORY", "Arial", "right", orreryWidth - 30, 689, 20, "GoldenRod", a),
        renderText("TOTAL SWEEP ANGLE <180\u00b0", "Arial", "right", orreryWidth - 30, 704, 12, "GoldenRod", a),
        renderText("EARTH", "Arial", "left", 30, 609, 20, "SteelBlue", a),
        renderText("PROBE", "Arial", "left", 30, 629, 20, "RebeccaPurple", a),
        renderText("MARS", "Arial", "left", 30, 649, 20, "red", a)),
        runningmission1996 ? renderTransferOrbit(a, launchPoint[0], launchPoint[1], landingPoint[0], landingPoint[1], -72.3, 1.295, 211, sweepAngle, 212, 34, 22.3, b) : runningmission2003 ? renderTransferOrbit(a, launchPoint[0], launchPoint[1], landingPoint[0], landingPoint[1], 75.6, 1.315, 230, sweepAngle, 202, 34, 26.5, b) : runningmission2011 ? renderTransferOrbit(a, launchPoint[0], launchPoint[1], landingPoint[0], landingPoint[1], -63.3, 1.265, 190, sweepAngle, 254, 34, 18.7, b) : runningmission2018 && renderTransferOrbit(a, launchPoint[0], launchPoint[1], landingPoint[0], landingPoint[1], 135.9, 1.225, 208, sweepAngle, 205, 34, 22.9, b)};
}
function renderForeground() {
  context.clearRect( 0, 0, canvas.width, canvas.height );
  planetSizeAdjust = zoomedinscale / scale;
  planetScaleAdjustment = zoomedinscale / scale * 1500;
  planetScaleAdjustment += ( 3E3 - planetScaleAdjustment ) / 1500 * 870;
  scale > zoomedoutscale && scale < zoomedinscale && ( mobileDevice ? ( orbitPointColor = orbitColor = 'dimgrey',
  orbitDashedColor = 'lightgray' ) : ( orbitPointColor = orbitColor = '#282828',
  orbitDashedColor = '#646464' ),
  topView && ( drawOrbit( 0, context, mercuryPerihelionPoint[0], mercuryPerihelionPoint[1], aMercury, eMercury, -wMercury, !1, orbitColor, !1, 2, 0.975, 1, 1, orbitDashedColor, orbitPointColor ),
  drawOrbit( 1, context, venusPerihelionPoint[0], venusPerihelionPoint[1], aVenus, eVenus, -wVenus, !1, orbitColor, !1, 2, 1, 0.995, 1, orbitDashedColor, orbitPointColor ),
  drawOrbit( 2, context, earthPerihelionPoint[0], earthPerihelionPoint[1], aEarth, eEarth, -wEarth, !1, orbitColor, !1, 2, 1, 1, 1, orbitDashedColor, orbitPointColor ),
  drawOrbit( 3, context, marsPerihelionPoint[0], marsPerihelionPoint[1], aMars, eMars, -( 360 + wMars ), !1, orbitColor, !1, 2, 1, 0.998, 1, orbitDashedColor, orbitPointColor ),
  drawOrbit( 4, context, jupiterPerihelionPoint[0], jupiterPerihelionPoint[1], aJupiter, eJupiter, -wJupiter, !1, orbitColor, !1, 2, 1, 1, jupiterScaleDivider, orbitDashedColor, orbitPointColor ),
  drawOrbit( 5, context, saturnPerihelionPoint[0], saturnPerihelionPoint[1], aSaturn, eSaturn, -wSaturn, !1, orbitColor, !1, 2, 1, 1, saturnScaleDivider, orbitDashedColor, orbitPointColor ),
  drawOrbit( 6, context, uranusPerihelionPoint[0], uranusPerihelionPoint[1], aUranus, eUranus, -wUranus, !1, orbitColor, !1, 2, 1, 1, uranusScaleDivider, orbitDashedColor, orbitPointColor ),
  drawOrbit( 7, context, neptunePerihelionPoint[0], neptunePerihelionPoint[1], aNeptune, eNeptune, -wNeptune, !1, orbitColor, !1, 2, 1, 1, neptuneScaleDivider, orbitDashedColor, orbitPointColor ) ),
  renderMarsMissions( context, !1 ) );
  oppositionMode ? solarConjunction ? renderLine( orreryWidth / 2 + conjunctionOppositionDatesRunning[4] * scale / conjunctionOppositionDatesRunning[6], canvas.height / 2 - conjunctionOppositionDatesRunning[5] * scale / conjunctionOppositionDatesRunning[6], orreryWidth / 2 + XEarth * scale, canvas.height / 2 - YEarth * scale, 'red', 1, !1, context ) : renderLine( orreryWidth / 2 + conjunctionOppositionDatesRunning[4] * scale / conjunctionOppositionDatesRunning[6], canvas.height / 2 - conjunctionOppositionDatesRunning[5] * scale / conjunctionOppositionDatesRunning[6], orreryWidth / 2 + XEarth * scale, canvas.height / 2 - YEarth * scale, 'goldenrod', 1, !1, context ) : voyagerMode && renderLine( XVoyagerI, YVoyagerI, orreryWidth / 2 + XEarth * scale, canvas.height / 2 - YEarth * scale, 'goldenRod', 1, !1, context );
  renderMarsMissions( context, !0 );
  if ( topView )
    scale >= 100 && renderAxisRot( orreryWidth / 2 + XMercury * scale, canvas.height / 2 - YMercury * scale, 'green', 90, -250, !0, ( 10 + 4879 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, context ),
    renderPoint( orreryWidth / 2 + XMercury * scale, canvas.height / 2 - YMercury * scale, ( 5 + 4879 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'Chocolate', 'SaddleBrown', context ),
    scale > 175 && renderText( 'M', 'Arial', 'center', orreryWidth / 2 + XMercury * scale, canvas.height / 2 - YMercury * scale + 4, 9 / planetSizeAdjust, 'black', context ),
    scale >= 100 && renderAxisRot( orreryWidth / 2 + XVenus * scale, canvas.height / 2 - YVenus * scale, 'red', 250, -90, !1, ( 10 + 12104 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, context ),
    renderPoint( orreryWidth / 2 + XVenus * scale, canvas.height / 2 - YVenus * scale, ( 5 + 12104 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'BurlyWood', 'Peru', context ),
    scale > 175 && renderText( 'V', 'Arial', 'center', orreryWidth / 2 + XVenus * scale, canvas.height / 2 - YVenus * scale + 4, 9, 'black', context ),
    scale >= 100 && renderAxisRot( orreryWidth / 2 + XEarth * scale, canvas.height / 2 - YEarth * scale, 'green', 90, -250, !0, ( 10 + 12756 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, context ),
    renderPoint( orreryWidth / 2 + XEarth * scale, canvas.height / 2 - YEarth * scale, ( 5 + 12756 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'SteelBlue', 'MidnightBlue', context ),
    scale > 175 && renderText( 'E', 'Arial', 'center', orreryWidth / 2 + XEarth * scale, canvas.height / 2 - YEarth * scale + 4, 9, 'black', context ),
    scale >= 100 && renderAxisRot( orreryWidth / 2 + XMars * scale, canvas.height / 2 - YMars * scale, 'green', 90, -250, !0, ( 10 + 6792 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, context ),
    renderPoint( orreryWidth / 2 + XMars * scale, canvas.height / 2 - YMars * scale, ( 5 + 6792 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'Red', 'DarkRed', context ),
    scale > 175 && renderText( 'M', 'Arial', 'center', orreryWidth / 2 + XMars * scale, canvas.height / 2 - YMars * scale + 4, 9, 'black', context ),
    scale >= 100 && renderAxisRot( orreryWidth / 2 + XJupiter * scale / jupiterScaleDivider, canvas.height / 2 - YJupiter * scale / jupiterScaleDivider, 'green', 90, -250, !0, ( 10 + 142984 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, context ),
    renderPoint( orreryWidth / 2 + XJupiter * scale / jupiterScaleDivider, canvas.height / 2 - YJupiter * scale / jupiterScaleDivider, ( 5 + 142984 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'Peru', 'Chocolate', context ),
    scale >= 100 && renderText( 'J', 'Arial', 'center', orreryWidth / 2 + XJupiter * scale / jupiterScaleDivider, canvas.height / 2 - YJupiter * scale / jupiterScaleDivider + 4, 9, 'black', context ),
    scale >= 100 && renderAxisRot( orreryWidth / 2 + XSaturn * scale / saturnScaleDivider, canvas.height / 2 - YSaturn * scale / saturnScaleDivider, 'green', 90, -250, !0, ( 10 + 120536 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, context ),
    renderPoint( orreryWidth / 2 + XSaturn * scale / saturnScaleDivider, canvas.height / 2 - YSaturn * scale / saturnScaleDivider, ( 5 + 120536 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'AliceBlue', 'PowderBlue', context ),
    scale >= 100 && renderText( 'S', 'Arial', 'center', orreryWidth / 2 + XSaturn * scale / saturnScaleDivider, canvas.height / 2 - YSaturn * scale / saturnScaleDivider + 4, 9, 'black', context ),
    scale >= 100 && renderAxisRot( orreryWidth / 2 + XUranus * scale / uranusScaleDivider, canvas.height / 2 - YUranus * scale / uranusScaleDivider, 'red', 250, -90, !1, ( 10 + 51118 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, context ),
    renderPoint( orreryWidth / 2 + XUranus * scale / uranusScaleDivider, canvas.height / 2 - YUranus * scale / uranusScaleDivider, ( 5 + 51118 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'LightSkyBlue', 'DodgerBlue', context ),
    scale >= 100 && renderText( 'U', 'Arial', 'center', orreryWidth / 2 + XUranus * scale / uranusScaleDivider, canvas.height / 2 - YUranus * scale / uranusScaleDivider + 4, 9, 'black', context ),
    scale >= 100 && renderAxisRot( orreryWidth / 2 + XNeptune * scale / neptuneScaleDivider, canvas.height / 2 - YNeptune * scale / neptuneScaleDivider, 'green', 90, -250, !0, ( 10 + 49528 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, context ),
    renderPoint( orreryWidth / 2 + XNeptune * scale / neptuneScaleDivider, canvas.height / 2 - YNeptune * scale / neptuneScaleDivider, ( 5 + 49528 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'MidnightBlue', 'DodgerBlue', context ),
    scale >= 100 && renderText( 'N', 'Arial', 'center', orreryWidth / 2 + XNeptune * scale / neptuneScaleDivider, canvas.height / 2 - YNeptune * scale / neptuneScaleDivider + 4, 9, 'black', context ),
    renderPoint( orreryWidth / 2, canvas.height / 2, 10 / planetSizeAdjust, 0, 2 * Math.PI, !0, 'yellow', 'orange', context ),
    scale >= 100 && renderAxisRot( orreryWidth / 2, canvas.height / 2, 'yellow', 90, -250, !0, 15 / planetSizeAdjust, context );
  else {
    renderLine( 0, canvas.height / 2, orreryWidth, canvas.height / 2, '#ED1C24', 2, !1, context );
    renderText( 'ECLIPTIC', 'Arial', 'left', 30, canvas.height / 2 + 30, 30, '#ED1C24', context );
    renderText( 'PLANE', 'Arial', 'left', 30, canvas.height / 2 + 60, 30, '#ED1C24', context );
    if ( planetInfoIndex == 7 || planetInfoIndex == 10 )
      {renderSideView(.85, 0, 180, context, 1.3, 60.120953250543785 / neptuneScaleDivider / 2, -.364466192770568 / neptuneScaleDivider / 2, .0157612865279384 / neptuneScaleDivider / 2, "#0F0F42", "DodgerBlue", scale / 200 * 13.5, neptunePerihelionPoint[0] / neptuneScaleDivider, neptunePerihelionPoint[2] / neptuneScaleDivider, neptuneAphelionPoint[0] / neptuneScaleDivider, neptuneAphelionPoint[2] / neptuneScaleDivider, 2, 2, !1),
            0 <= YNeptune && (renderAxialTilt(context, XNeptune / neptuneScaleDivider, ZNeptune / neptuneScaleDivider, 28.32, 49528, 10),
            renderPoint(orreryWidth / 2 + XNeptune * scale / neptuneScaleDivider, canvas.height / 2 - ZNeptune * scale / neptuneScaleDivider, (5 + 49528 / planetScaleAdjustment * .5) / planetSizeAdjust, 0, 2 * Math.PI, !0, "MidnightBlue", "DodgerBlue", context),
            100 <= scale && renderText("N", "Arial", "center", orreryWidth / 2 + XNeptune * scale / neptuneScaleDivider, canvas.height / 2 - ZNeptune * scale / neptuneScaleDivider + 4, 9, "black", context));}
    if ( planetInfoIndex == 6 || planetInfoIndex == 10 )
      {renderSideView(.85, 180, 360, context, .75, 38.37915790877488 / uranusScaleDivider / 2, 1.791404383810328 / uranusScaleDivider / 2, -.02474824431078426 / uranusScaleDivider / 2, "#0A8FE0", "DodgerBlue", scale / 200 * 2.5, uranusPerihelionPoint[0] / uranusScaleDivider, uranusPerihelionPoint[2] / uranusScaleDivider, uranusAphelionPoint[0] / uranusScaleDivider, uranusAphelionPoint[2] / uranusScaleDivider, 2, 2, !1),
            0 <= YUranus && (renderAxialTilt(context, XUranus / uranusScaleDivider, ZUranus / uranusScaleDivider, 97.77, 51118, 10),
            renderPoint(orreryWidth / 2 + XUranus * scale / uranusScaleDivider, canvas.height / 2 - ZUranus * scale / uranusScaleDivider, (5 + 51118 / planetScaleAdjustment * .5) / planetSizeAdjust, 0, 2 * Math.PI, !0, "LightSkyBlue", "DodgerBlue", context),
            100 <= scale && renderText("U", "Arial", "center", orreryWidth / 2 + XUranus * scale / uranusScaleDivider, canvas.height / 2 - ZUranus * scale / uranusScaleDivider + 4, 9, "black", context));}
    if ( planetInfoIndex == 5 || planetInfoIndex == 10 )
      {renderSideView(.85, 0, 180, context, 2.3, 19.029706921128472 / saturnScaleDivider / 2, .045312436132313 / saturnScaleDivider / 2, .01592432484440587 / saturnScaleDivider / 2, "#79BFFF", "PowderBlue", scale / 200 * 8.5, saturnPerihelionPoint[0] / saturnScaleDivider, saturnPerihelionPoint[2] / saturnScaleDivider, saturnAphelionPoint[0] / saturnScaleDivider, saturnAphelionPoint[2] / saturnScaleDivider, 2, 2, !1),
            0 <= YSaturn && (renderAxialTilt(context, XSaturn / saturnScaleDivider, ZSaturn / saturnScaleDivider, 26.73, 120536, 10),
            renderPoint(orreryWidth / 2 + XSaturn * scale / saturnScaleDivider, canvas.height / 2 - ZSaturn * scale / saturnScaleDivider, (5 + 120536 / planetScaleAdjustment * .5) / planetSizeAdjust, 0, 2 * Math.PI, !0, "AliceBlue", "PowderBlue", context),
            100 <= scale && renderText("S", "Arial", "center", orreryWidth / 2 + XSaturn * scale / saturnScaleDivider, canvas.height / 2 - ZSaturn * scale / saturnScaleDivider + 4, 9, "black", context));}
    if ( planetInfoIndex == 4 || planetInfoIndex == 10 )
      {renderSideView(.85, 0, 180, context, 1.3, 10.402414194613497 / jupiterScaleDivider / 2, -.486689376291396 / jupiterScaleDivider / 2, .01144899863328919 / jupiterScaleDivider / 2, "#7E5021", "Chocolate", scale / 200 * 1.25, jupiterPerihelionPoint[0] / jupiterScaleDivider, jupiterPerihelionPoint[2] / jupiterScaleDivider, jupiterAphelionPoint[0] / jupiterScaleDivider, jupiterAphelionPoint[2] / jupiterScaleDivider, 1, 2, !1),
            0 <= YJupiter && (renderAxialTilt(context, XJupiter / jupiterScaleDivider, ZJupiter / jupiterScaleDivider, 3.13, 142984, 10),
            renderPoint(orreryWidth / 2 + XJupiter * scale / jupiterScaleDivider, canvas.height / 2 - ZJupiter * scale / jupiterScaleDivider, (5 + 142984 / planetScaleAdjustment * .5) / planetSizeAdjust, 0, 2 * Math.PI, !0, "Peru", "Chocolate", context),
            100 <= scale && renderText("J", "Arial", "center", orreryWidth / 2 + XJupiter * scale / jupiterScaleDivider, canvas.height / 2 - ZJupiter * scale / jupiterScaleDivider + 4, 9, "black", context));}
    if ( planetInfoIndex == 3 || planetInfoIndex == 10 )
      {renderSideView(.85, 180, 360, context, 1.4, 1.522171073953746, -.13003210927070016, .00437699524747638, "#8C0000", "DarkRed", scale / 200 * 6.5, marsPerihelionPoint[0], marsPerihelionPoint[2], marsAphelionPoint[0], marsAphelionPoint[2], 1, 2, !1),
            0 <= YMars && (renderAxialTilt(context, XMars, ZMars, 25.19, 6792, 0),
            renderPoint(orreryWidth / 2 + XMars * scale, canvas.height / 2 - ZMars * scale, (5 + 6792 / planetScaleAdjustment * .5) / planetSizeAdjust, 0, 2 * Math.PI, !0, "Red", "DarkRed", context),
            175 < scale && renderText("M", "Arial", "center", orreryWidth / 2 + XMars * scale, canvas.height / 2 - ZMars * scale + 4, 9, "black", context));}
    if ( planetInfoIndex == 2 || planetInfoIndex == 10 )
      {renderSideView(1, 0, 360, context, 0, aEarth, -.9961089034202898, 5.2449904755095E-7, "SteelBlue", "MidnightBlue", 0, earthPerihelionPoint[0], earthPerihelionPoint[2], earthAphelionPoint[0], earthAphelionPoint[2], 1, 2, !1, -.9960924685177724),
            0 <= YEarth && (renderAxialTilt(context, XEarth, ZEarth, 23.44, 12756, 0),
            renderPoint(orreryWidth / 2 + XEarth * scale, canvas.height / 2 - ZEarth * scale, (5 + 12756 / planetScaleAdjustment * .5) / planetSizeAdjust, 0, 2 * Math.PI, !0, "SteelBlue", "MidnightBlue", context),
            175 < scale && renderText("E", "Arial", "center", orreryWidth / 2 + XEarth * scale, canvas.height / 2 - ZEarth * scale + 4, 9, "black", context));}
    if ( planetInfoIndex == 1 || planetInfoIndex == 10 )
      {renderSideView(.85, 180, 360, context, 3.3, .7220793385279826, .00328289812688355, -2.4618776594048E-4, "#BE8434", "Peru", scale / 200 * 2.2, venusPerihelionPoint[0], venusPerihelionPoint[2], venusAphelionPoint[0], venusAphelionPoint[2], 1, 2, !1),
            0 <= YVenus && (renderAxialTilt(context, XVenus, ZVenus, 177.36, 12104, 0),
            renderPoint(orreryWidth / 2 + XVenus * scale, canvas.height / 2 - ZVenus * scale, (5 + 12104 / planetScaleAdjustment * .5) / planetSizeAdjust, 0, 2 * Math.PI, !0, "BurlyWood", "Peru", context),
            175 < scale && renderText("V", "Arial", "center", orreryWidth / 2 + XVenus * scale, canvas.height / 2 - ZVenus * scale + 4, 9, "black", context));}
    if ( planetInfoIndex == 0 || planetInfoIndex == 10 )
      {renderSideView(.85, 180, 360, context, 5.6, .37751374226962847, -.017548506471699005, -.004319805778405265, "#844313", "SaddleBrown", scale / 200 * 6, mercuryPerihelionPoint[0], mercuryPerihelionPoint[2], mercuryAphelionPoint[0], mercuryAphelionPoint[2], 1, 2, !1),
            0 <= YMercury && (renderAxialTilt(context, XMercury, ZMercury, .034, 4879, 0),
            renderPoint(orreryWidth / 2 + XMercury * scale, canvas.height / 2 - ZMercury * scale, (5 + 4879 / planetScaleAdjustment * .5) / planetSizeAdjust, 0, 2 * Math.PI, !0, "Chocolate", "SaddleBrown", context),
            175 < scale && renderText("M", "Arial", "center", orreryWidth / 2 + XMercury * scale, canvas.height / 2 - ZMercury * scale + 4, 9 / planetSizeAdjust, "black", context));}
    renderPoint( orreryWidth / 2, canvas.height / 2, 10 / planetSizeAdjust, 0, 2 * Math.PI, !0, 'yellow', 'orange', context );
    if ( planetInfoIndex == 0 || planetInfoIndex == 10 )
      planetInfoIndex == 0 && renderSideView(0 .85, 0, 180, context, 5.6, 0.37751374226962847, -0.017548506471699005, -0.004319805778405265, 'limegreen', 'limegreen', scale / 200 * 0, mercuryPerihelionPoint[0], mercuryPerihelionPoint[2], mercuryAphelionPoint[0], mercuryAphelionPoint[2], 2, 1, !0 ),
      renderSideView( 0.85, 0, 180, context, 5.6, 0.37751374226962847, -0.017548506471699005, -0.004319805778405265, 'Chocolate', 'SaddleBrown', scale / 200 * 6, mercuryPerihelionPoint[0], mercuryPerihelionPoint[2], mercuryAphelionPoint[0], mercuryAphelionPoint[2], 2, 2, !1 ),
      YMercury < 0 && ( renderAxialTilt( context, XMercury, ZMercury, 0.034, 4879, 0 ),
      renderPoint( orreryWidth / 2 + XMercury * scale, canvas.height / 2 - ZMercury * scale, ( 5 + 4879 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'Chocolate', 'SaddleBrown', context ),
      scale > 175 && renderText( 'M', 'Arial', 'center', orreryWidth / 2 + XMercury * scale, canvas.height / 2 - ZMercury * scale + 4, 9 / planetSizeAdjust, 'black', context ) );
    if ( planetInfoIndex == 1 || planetInfoIndex == 10 )
      planetInfoIndex == 1 && renderSideView(0 .85, 0, 180, context, 3.3, 0.7220793385279826, 0.00328289812688355, -2.4618776594048E-4, 'limegreen', 'limegreen', scale / 200 * 0, venusPerihelionPoint[0], venusPerihelionPoint[2], venusAphelionPoint[0], venusAphelionPoint[2], 2, 2, !0 ),
      renderSideView( 0.85, 0, 180, context, 3.3, 0.7220793385279826, 0.00328289812688355, -2.4618776594048E-4, 'BurlyWood', 'Peru', scale / 200 * 2.2, venusPerihelionPoint[0], venusPerihelionPoint[2], venusAphelionPoint[0], venusAphelionPoint[2], 2, 2, !1 ),
      YVenus < 0 && ( renderAxialTilt( context, XVenus, ZVenus, 177.36, 12104, 0 ),
      renderPoint( orreryWidth / 2 + XVenus * scale, canvas.height / 2 - ZVenus * scale, ( 5 + 12104 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'BurlyWood', 'Peru', context ),
      scale > 175 && renderText( 'V', 'Arial', 'center', orreryWidth / 2 + XVenus * scale, canvas.height / 2 - ZVenus * scale + 4, 9, 'black', context ) );
    ( planetInfoIndex == 2 || planetInfoIndex == 10 ) && YEarth < 0 && ( renderAxialTilt( context, XEarth, ZEarth, 23.44, 12756, 0 ),
    renderPoint( orreryWidth / 2 + XEarth * scale, canvas.height / 2 - ZEarth * scale, ( 5 + 12756 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'SteelBlue', 'MidnightBlue', context ),
    scale > 175 && renderText( 'E', 'Arial', 'center', orreryWidth / 2 + XEarth * scale, canvas.height / 2 - ZEarth * scale + 4, 9, 'black', context ) );
    if ( planetInfoIndex == 3 || planetInfoIndex == 10 )
      planetInfoIndex == 3 && renderSideView( 0.85, 0, 180, context, 1.4, 1.522171073953746, -0.13003210927070016, 0.00437699524747638, 'limegreen', 'limegreen', scale / 200 * 0, marsPerihelionPoint[0], marsPerihelionPoint[2], marsAphelionPoint[0], marsAphelionPoint[2], 2, 1, !0 ),
      renderSideView(0 .85, 0, 180, context, 1.4, 1.522171073953746, -0.13003210927070016, 0.00437699524747638, 'Red', 'DarkRed', scale / 200 * 6.5, marsPerihelionPoint[0], marsPerihelionPoint[2], marsAphelionPoint[0], marsAphelionPoint[2], 2, 2, !1 ),
      YMars < 0 && ( renderAxialTilt( context, XMars, ZMars, 25.19, 6792, 0 ),
      renderPoint( orreryWidth / 2 + XMars * scale, canvas.height / 2 - ZMars * scale, ( 5 + 6792 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'Red', 'DarkRed', context ),
      scale > 175 && renderText( 'M', 'Arial', 'center', orreryWidth / 2 + XMars * scale, canvas.height / 2 - ZMars * scale + 4, 9, 'black', context ) );
    if ( planetInfoIndex == 4 || planetInfoIndex == 10 )
      planetInfoIndex == 4 && renderSideView( 1, 0, 180, context, 1.3, 10.402414194613497 / jupiterScaleDivider / 2, -0.486689376291396 / jupiterScaleDivider / 2, 0.01144899863328919 / jupiterScaleDivider / 2, 'limegreen', 'limegreen', scale / 200 * 0, jupiterPerihelionPoint[0] / jupiterScaleDivider, jupiterPerihelionPoint[2] / jupiterScaleDivider, jupiterAphelionPoint[0] / jupiterScaleDivider, jupiterAphelionPoint[2] / jupiterScaleDivider, 2, 1, !0 ),
      renderSideView( 0.85, 180, 360, context, 1.3, 10.402414194613497 / jupiterScaleDivider / 2, -0.486689376291396 / jupiterScaleDivider / 2, 0.01144899863328919 / jupiterScaleDivider / 2, 'Peru', 'Chocolate', scale / 200 * 1.25, jupiterPerihelionPoint[0] / jupiterScaleDivider, jupiterPerihelionPoint[2] / jupiterScaleDivider, jupiterAphelionPoint[0] / jupiterScaleDivider, jupiterAphelionPoint[2] / jupiterScaleDivider, 2, 2, !1 ),
      YJupiter < 0 && ( renderAxialTilt( context, XJupiter / jupiterScaleDivider, ZJupiter / jupiterScaleDivider, 3.13, 142984, 10 ),
      renderPoint( orreryWidth / 2 + XJupiter * scale / jupiterScaleDivider, canvas.height / 2 - ZJupiter * scale / jupiterScaleDivider, ( 5 + 142984 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'Peru', 'Chocolate', context ),
      scale >= 100 && renderText( 'J', 'Arial', 'center', orreryWidth / 2 + XJupiter * scale / jupiterScaleDivider, canvas.height / 2 - ZJupiter * scale / jupiterScaleDivider + 4, 9, 'black', context ) );
    if ( planetInfoIndex == 5 || planetInfoIndex == 10 )
      planetInfoIndex == 5 && renderSideView(0 .85, 0, 180, context, 2.3, 19.029706921128472 / saturnScaleDivider / 2, 0.045312436132313 / saturnScaleDivider / 2, 0.01592432484440587 / saturnScaleDivider / 2, 'limegreen', 'limegreen', scale / 200 * 0, saturnPerihelionPoint[0] / saturnScaleDivider, saturnPerihelionPoint[2] / saturnScaleDivider, saturnAphelionPoint[0] / saturnScaleDivider, saturnAphelionPoint[2] / saturnScaleDivider, 1, 1, !0 ),
      renderSideView( 0.85, 180, 360, context, 2.3, 19.029706921128472 / saturnScaleDivider / 2, 0.045312436132313 / saturnScaleDivider / 2, 0.01592432484440587 / saturnScaleDivider / 2, 'AliceBlue', 'PowderBlue', scale / 200 * 8.5, saturnPerihelionPoint[0] / saturnScaleDivider, saturnPerihelionPoint[2] / saturnScaleDivider, saturnAphelionPoint[0] / saturnScaleDivider, saturnAphelionPoint[2] / saturnScaleDivider, 1, 2, !1 ),
      YSaturn < 0 && ( renderAxialTilt( context, XSaturn / saturnScaleDivider, ZSaturn / saturnScaleDivider, 26.73, 120536, 10 ),
      renderPoint( orreryWidth / 2 + XSaturn * scale / saturnScaleDivider, canvas.height / 2 - ZSaturn * scale / saturnScaleDivider, ( 5 + 120536 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'AliceBlue', 'PowderBlue', context ),
      scale >= 100 && renderText( 'S', 'Arial', 'center', orreryWidth / 2 + XSaturn * scale / saturnScaleDivider, canvas.height / 2 - ZSaturn * scale / saturnScaleDivider + 4, 9, 'black', context ) );
    if ( planetInfoIndex == 6 || planetInfoIndex == 10 )
      planetInfoIndex == 6 && renderSideView(0 .85, 0, 180, context, 0.75, 38.37915790877488 / uranusScaleDivider / 2, 1.791404383810328 / uranusScaleDivider / 2, -0.02474824431078426 / uranusScaleDivider / 2, 'limegreen', 'limegreen', scale / 200 * 0, uranusPerihelionPoint[0] / uranusScaleDivider, uranusPerihelionPoint[2] / uranusScaleDivider, uranusAphelionPoint[0] / uranusScaleDivider, uranusAphelionPoint[2] / uranusScaleDivider, 1, 1, !0 ),
      renderSideView( 0.85, 0, 180, context, 0.75, 38.37915790877488 / uranusScaleDivider / 2, 1.791404383810328 / uranusScaleDivider / 2, -0.02474824431078426 / uranusScaleDivider / 2, 'LightSkyBlue', 'DodgerBlue', scale / 200 * 2.5, uranusPerihelionPoint[0] / uranusScaleDivider, uranusPerihelionPoint[2] / uranusScaleDivider, uranusAphelionPoint[0] / uranusScaleDivider, uranusAphelionPoint[2] / uranusScaleDivider, 1, 2, !1 ),
      YUranus < 0 && ( renderAxialTilt( context, XUranus / uranusScaleDivider, ZUranus / uranusScaleDivider, 97.77, 51118, 10 ),
      renderPoint( orreryWidth / 2 + XUranus * scale / uranusScaleDivider, canvas.height / 2 - ZUranus * scale / uranusScaleDivider, ( 5 + 51118 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'LightSkyBlue', 'DodgerBlue', context ),
      scale >= 100 && renderText( 'U', 'Arial', 'center', orreryWidth / 2 + XUranus * scale / uranusScaleDivider, canvas.height / 2 - ZUranus * scale / uranusScaleDivider + 4, 9, 'black', context ) );
    if ( planetInfoIndex == 7 || planetInfoIndex == 10 )
      planetInfoIndex == 7 && renderSideView( 0.85, 0, 180, context, 1.3, 60.120953250543785 / neptuneScaleDivider / 2, -0.364466192770568 / neptuneScaleDivider / 2, 0.0157612865279384 / neptuneScaleDivider / 2, 'limegreen', 'limegreen', scale / 200 * 0, neptunePerihelionPoint[0] / neptuneScaleDivider, neptunePerihelionPoint[2] / neptuneScaleDivider, neptuneAphelionPoint[0] / neptuneScaleDivider, neptuneAphelionPoint[2] / neptuneScaleDivider, 2, 1, !0 ),
      renderSideView(0 .85, 180, 360, context, 1.3, 60.120953250543785 / neptuneScaleDivider / 2, -0.364466192770568 / neptuneScaleDivider / 2, 0.0157612865279384 / neptuneScaleDivider / 2, 'MidnightBlue', 'DodgerBlue', scale / 200 * 13.5, neptunePerihelionPoint[0] / neptuneScaleDivider, neptunePerihelionPoint[2] / neptuneScaleDivider, neptuneAphelionPoint[0] / neptuneScaleDivider, neptuneAphelionPoint[2] / neptuneScaleDivider, 1, 2, !1 ),
      YNeptune < 0 && ( renderAxialTilt( context, XNeptune / neptuneScaleDivider, ZNeptune / neptuneScaleDivider, 28.32, 49528, 10 ),
      renderPoint( orreryWidth / 2 + XNeptune * scale / neptuneScaleDivider, canvas.height / 2 - ZNeptune * scale / neptuneScaleDivider, ( 5 + 49528 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust, 0, 2 * Math.PI, !0, 'MidnightBlue', 'DodgerBlue', context ),
      scale >= 100 && renderText( 'N', 'Arial', 'center', orreryWidth / 2 + XNeptune * scale / neptuneScaleDivider, canvas.height / 2 - ZNeptune * scale / neptuneScaleDivider + 4, 9, 'black', context ) );
    if ( planetInfoIndex != 10 ) {
      switch ( planetInfoIndex ) {
        case 0:
          WAngleLegend = WMercury;
          wAngleLegend = wMercury;
          zAU2 = zMercury;
          LAngleLegend = LMercury;
          nAngleLegend = nMercury;
          break;
        case 1:
          WAngleLegend = WVenus;
          wAngleLegend = wVenus;
          zAU2 = zVenus;
          LAngleLegend = LVenus;
          nAngleLegend = nVenus;
          break;
        case 2:
          WAngleLegend = WEarth;
          wAngleLegend = wEarth;
          zAU2 = zEarth;
          LAngleLegend = LEarth;
          nAngleLegend = nEarth;
          break;
        case 3:
          WAngleLegend = WMars;
          wAngleLegend = wMars;
          zAU2 = zMars;
          LAngleLegend = LMars;
          nAngleLegend = nMars;
          break;
        case 4:
          WAngleLegend = WJupiter;
          wAngleLegend = wJupiter;
          zAU2 = zJupiter;
          LAngleLegend = LJupiter;
          nAngleLegend = nJupiter;
          break;
        case 5:
          WAngleLegend = WSaturn;
          wAngleLegend = wSaturn;
          zAU2 = zSaturn;
          LAngleLegend = LSaturn;
          nAngleLegend = nSaturn;
          break;
        case 6:
          WAngleLegend = WUranus;
          wAngleLegend = wUranus;
          zAU2 = zUranus;
          LAngleLegend = LUranus;
          nAngleLegend = nUranus;
          break;
        case 7:
          WAngleLegend = WNeptune,
          wAngleLegend = wNeptune,
          zAU2 = zNeptune,
          LAngleLegend = LNeptune,
          nAngleLegend = nNeptune;
      }
      lOPX100 = 100 * Math.cos( toRadians( wAngleLegend ) );
      lOPY100 = 100 * Math.sin( toRadians( wAngleLegend ) );
      renderLine( xLegend, yLegend, xLegend + lOPX100, yLegend - lOPY100, 'goldenRod', lineLegend, !1, context );
      renderPoint( xLegend + lOPX100, yLegend - lOPY100, 2, 0, 2 * Math.PI, !0, 'goldenrod', 'goldenrod', context );
      wAngleLegend < 180 ? planetInfoIndex != 5 ? renderText( 'P', 'Arial', 'center', xLegend + lOPX100, yLegend - lOPY100 - 5, 12, 'goldenRod', context ) : renderText( 'P', 'Arial', 'center', xLegend + lOPX100 - 10, yLegend - lOPY100 - 5, 12, 'goldenRod', context ) : renderText( 'P', 'Arial', 'center', xLegend + lOPX100, yLegend - lOPY100 + 15, 12, 'goldenRod', context );
      planetInfoIndex != 2 && ( renderPoint( xLegend + 75 * Math.cos( toRadians( WAngleLegend ) ), yLegend - 75 * Math.sin( toRadians( WAngleLegend ) ), 1, 0, 2 * Math.PI, !0, '#E7C05A', '#E7C05A', context ),
      renderText( '\u260a', 'Arial', 'center', xLegend + 75 * Math.cos( toRadians( WAngleLegend ) ), yLegend - 75 * Math.sin( toRadians( WAngleLegend ) ) + 15, 12, '#E7C05A', context ),
      renderPoint( xLegend + 75 * Math.cos( toRadians( WAngleLegend + 180 ) ), yLegend - 75 * Math.sin( toRadians( WAngleLegend + 180 ) ), 1, 0, 2 * Math.PI, !0, '#E7C05A', '#E7C05A', context ),
      renderText( '\u260b', 'Arial', 'center', xLegend + 75 * Math.cos( toRadians( WAngleLegend + 180 ) ), yLegend - 75 * Math.sin( toRadians( WAngleLegend + 180 ) ) + 15, 12, '#E7C05A', context ),
      context.beginPath(),
      context.lineWidth = lineLegend,
      context.arc( xLegend, yLegend, 75, toRadians( 360 - WAngleLegend ), toRadians( 180 - WAngleLegend ), !0 ),
      context.strokeStyle = '#E7C05A',
      context.stroke(),
      context.closePath(),
      context.beginPath(),
      context.globalAlpha = mobileDevice ? 0.1 : 0.025,
      context.lineWidth = lineLegend,
      context.arc( xLegend, yLegend, 75, toRadians( 360 - WAngleLegend ), toRadians( 180 - WAngleLegend ), !0 ),
      context.strokeStyle = '#E7C05A',
      context.fill(),
      context.globalAlpha = 1,
      context.closePath() );
      renderPoint( xLegend + 75 * Math.cos( toRadians( ( nAngleLegend + wAngleLegend ) % 360 ) ), yLegend - 75 * Math.sin( toRadians( ( nAngleLegend + wAngleLegend ) % 360 ) ), 2, 0, 2 * Math.PI, !0, '#E7C05A', '#E7C05A', context );
      context.beginPath();
      context.lineWidth = lineLegend;
      context.arc( xLegend, yLegend, 40, toRadians( 360 - wAngleLegend ), toRadians( 0 ), !1 );
      context.strokeStyle = 'SeaGreen';
      context.stroke();
      context.closePath();
      planetInfoIndex != 3 ? renderText( `${round(wAngleLegend, 0)  }\u00b0`, 'Arial', 'left', xLegend + 5, yLegend + 15, 12, 'SeaGreen', context ) : renderText( `${round(360 + wAngleLegend, 0)  }\u00b0`, 'Arial', 'left', xLegend + 5, yLegend + 15, 12, 'SeaGreen', context );
      renderText( 'LONGITUDE', 'Arial', 'left', xLegend + 5, yLegend + 15 + 12 + 5, 12, 'SeaGreen', context );
      renderText( 'OF PERIHELION', 'Arial', 'left', xLegend + 5, yLegend + 15 + 24 + 5, 12, 'SeaGreen', context );
      renderText( `${round((nAngleLegend + wAngleLegend) % 360, 0)  }\u00b0`, 'Arial', 'right', orreryWidth - 30, 689, 30, '#E7C05A', context );
      renderText( 'TRUE', 'Arial', 'right', orreryWidth - 30 - 73, 676, 12, '#E7C05A', context );
      renderText( 'LONGITUDE', 'Arial', 'right', orreryWidth - 30 - 73, 689, 12, '#E7C05A', context );
    }
  }
  renderButtons();
  renderForegroundText();
  context.beginPath();
  context.rect( 1, 1, canvas.width - 2, canvas.height - 2 );
  context.lineWidth = 2;
  context.strokeStyle = 'lightGrey';
  context.stroke();
  context.closePath();
}
function renderSideView( a, b, c, d, f, g, h, e, k, m, r, p, n, l, t, q, w, v, u ) {
  d.save();
  d.beginPath();
  d.globalAlpha = a;
  d.translate( orreryWidth / 2 + h * scale, canvas.height / 2 - e * scale );
  d.rotate( toRadians( f ) );
  d.lineWidth = w;
  d.strokeStyle = k;
  v && d.setLineDash( [2, 3] );
  u != null ? d.ellipse( 0 - u * scale, 0, g * scale, 0, 0, toRadians( b ), toRadians( c ), !1 ) : d.ellipse( 0, 0, g * scale, r, 0, toRadians( b ), toRadians( c ), !1 );
  d.stroke();
  d.globalAlpha = 1;
  v && d.setLineDash( [0, 1] );
  d.closePath();
  d.restore();
  'limegreen' != k && ( q == 1 ? ( renderPoint( orreryWidth / 2 + p * scale, canvas.height / 2 - n * scale, 2, 0, 2 * Math.PI, !0, m, m, d ),
  planetInfoIndex != 10 && renderText( 'P', 'Arial', 'center', orreryWidth / 2 + p * scale, canvas.height / 2 - n * scale - 10, 12, m, d ),
  u != null && renderPoint( orreryWidth / 2 + l * scale, canvas.height / 2 - t * scale, 2, 0, 2 * Math.PI, !0, m, m, d ) ) : renderPoint( orreryWidth / 2 + l * scale, canvas.height / 2 - t * scale, 2, 0, 2 * Math.PI, !0, m, m, d ) );
}
function renderButtons() {
  scale == zoomedoutscaleActual && ( renderPoint( XVoyagerI, YVoyagerI, 0.5, 0, 2 * Math.PI, !0, 'grey', 'lightgrey', context ),
  voyagerMode && ( renderText( 'VOYAGER I', 'Arial', 'left', XVoyagerI + 10, YVoyagerI + 5, 12, 'goldenrod', context ),
  renderText( 'PALE BLUE DOT', 'Arial', 'left', XVoyagerI + 10, YVoyagerI + 20, 12, 'goldenrod', context ),
  renderText( 'PHOTOGRAPH', 'Arial', 'left', XVoyagerI + 10, YVoyagerI + 35, 12, 'goldenrod', context ) ) );
  scale > zoomedoutscale && scale < zoomedinscale && renderRightConsole( context );
  scale > zoomedoutscaleActual && scale < zoomedoutscale && renderRightConsole( context );
  scale == zoomedinscale && renderRightConsole( context );
  playing ? ( context.drawImage( pauseImg, pauseImgX, pauseImgY, pauseImg.width * mobileMultiplier, pauseImg.height * mobileMultiplier ),
  pauseButtonHighlight && context.drawImage( pauseImgHL, pauseImgX, pauseImgY, pauseImgHL.width * mobileMultiplier, pauseImgHL.height * mobileMultiplier ) ) : ( context.drawImage( playImg, playImgX, playImgY, playImg.width * mobileMultiplier, playImg.height * mobileMultiplier ),
  playButtonHighlight && context.drawImage( playImgHL, playImgX, playImgY, playImgHL.width * mobileMultiplier, playImgHL.height * mobileMultiplier ) );
  oppositionMode && ( nextButtonHighlight ? context.drawImage( nextImgHL, nextImgX, nextImgY ) : context.drawImage( nextImg, nextImgX, nextImgY ) );
  topView && scale >= zoomedoutscale && ( scaleCompressed ? scaleHighlight ? context.drawImage( scaleCompressedImgHL, scaleImgX - mobileAdjustX - mobileExtraX - mobileExtraX2, scaleImgY, scaleCompressedImgHL.width * mobileMultiplier, scaleCompressedImgHL.height * mobileMultiplier ) : context.drawImage( scaleCompressedImg, scaleImgX - mobileAdjustX - mobileExtraX - mobileExtraX2, scaleImgY, scaleCompressedImgHL.width * mobileMultiplier, scaleCompressedImgHL.height * mobileMultiplier ) : scaleHighlight ? context.drawImage( scaleActualImgHL, scaleImgX - mobileAdjustX - mobileExtraX - mobileExtraX2, scaleImgY, scaleCompressedImgHL.width * mobileMultiplier, scaleCompressedImgHL.height * mobileMultiplier ) : context.drawImage( scaleActualImg, scaleImgX - mobileAdjustX - mobileExtraX - mobileExtraX2, scaleImgY, scaleCompressedImgHL.width * mobileMultiplier, scaleCompressedImgHL.height * mobileMultiplier ) );
  runningmission1996 || runningmission2003 || runningmission2011 || runningmission2018 || ( topView ? topviewHighlight ? context.drawImage( sideViewImgHL, topviewImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobileExtraX3, topviewImgY, topViewImgHL.width * mobileMultiplier, topViewImgHL.height * mobileMultiplier ) : context.drawImage( sideViewImg, topviewImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobileExtraX3, topviewImgY, topViewImgHL.width * mobileMultiplier, topViewImgHL.height * mobileMultiplier ) : topviewHighlight ? context.drawImage( topViewImgHL, topviewImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobileExtraX3, topviewImgY, topViewImgHL.width * mobileMultiplier, topViewImgHL.height * mobileMultiplier ) : context.drawImage( topViewImg, topviewImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobileExtraX3, topviewImgY, topViewImgHL.width * mobileMultiplier, topViewImgHL.height * mobileMultiplier ) );
  telescopeHighlight ? context.drawImage( telescopeImgHL, telescopeImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobileExtraX3 - mobileExtraX4, telescopeImgY, telescopeImgHL.width * mobileMultiplier, telescopeImgHL.height * mobileMultiplier ) : context.drawImage( telescopeImg, telescopeImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobileExtraX3 - mobileExtraX4, telescopeImgY, telescopeImgHL.width * mobileMultiplier, telescopeImgHL.height * mobileMultiplier );
  if ( runningmission1996 || runningmission2003 || runningmission2011 || runningmission2018 )
    {infoHighlight ? context.drawImage(infoImgHL, infoImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobileExtraX3 - mobileExtraX4 - mobileExtraX5, infoImgY, infoImgHL.width * mobileMultiplier, infoImgHL.height * mobileMultiplier) : context.drawImage(infoImg, infoImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobileExtraX3 - mobileExtraX4 - mobileExtraX5, infoImgY, infoImgHL.width * mobileMultiplier, infoImgHL.height * mobileMultiplier);}
  scale == zoomedinscale ? context.drawImage( zoomoutImg, zoomImgX - mobileAdjustX + mobileExtraX - mobilezoomAdjustX, zoomImgY, zoomoutImg.width * mobileMultiplier, zoomoutImg.height * mobileMultiplier ) : scale == zoomedoutscale ? scaleCompressed && context.drawImage( zoominImg, zoomImgX - mobileAdjustX + mobileExtraX - mobilezoomAdjustX, zoomImgY, zoominImg.width * mobileMultiplier, zoominImg.height * mobileMultiplier ) : scale == zoomedoutscaleActual && context.drawImage( zoominImg, zoomImgX - mobileAdjustX + mobileExtraX - mobilezoomAdjustX, zoomImgY, zoominImg.width * mobileMultiplier, zoominImg.height * mobileMultiplier );
  zoomButtonHighlight && ( scale == zoomedinscale ? context.drawImage( zoomoutImgHL, zoomImgX - mobileAdjustX + mobileExtraX - mobilezoomAdjustX, zoomImgY, zoomoutImgHL.width * mobileMultiplier, zoomoutImgHL.height * mobileMultiplier ) : scale == zoomedoutscale ? scaleCompressed && context.drawImage( zoominImgHL, zoomImgX - mobileAdjustX + mobileExtraX - mobilezoomAdjustX, zoomImgY, zoominImgHL.width * mobileMultiplier, zoominImgHL.height * mobileMultiplier ) : scale == zoomedoutscaleActual && context.drawImage( zoominImgHL, zoomImgX - mobileAdjustX + mobileExtraX - mobilezoomAdjustX, zoomImgY, zoominImgHL.width * mobileMultiplier, zoominImgHL.height * mobileMultiplier ) );
  mobileDevice || ( fullscreenMode ? context.drawImage( fullscreenexitImg, fullscreenImgX - mobileAdjustX, fullscreenImgY, fullscreenImg.width * mobileMultiplier, fullscreenImg.height * mobileMultiplier ) : context.drawImage( fullscreenImg, fullscreenImgX - mobileAdjustX, fullscreenImgY, fullscreenImg.width * mobileMultiplier, fullscreenImg.height * mobileMultiplier ),
  fullscreenButtonHighlight && ( fullscreenMode ? context.drawImage( fullscreenexitImgHL, fullscreenImgX - mobileAdjustX, fullscreenImgY, fullscreenImg.width * mobileMultiplier, fullscreenImg.height * mobileMultiplier ) : context.drawImage( fullscreenImgHL, fullscreenImgX - mobileAdjustX, fullscreenImgY, fullscreenImg.width * mobileMultiplier, fullscreenImg.height * mobileMultiplier ) ) );
  !mobileDevice && planetInfoIndex != 2 && planetInfoIndex != 10 && topView && ( detailButtonHighlight ? context.drawImage( detailImgHL, detailImgX, detailImgY ) : context.drawImage( detailImg, detailImgX, detailImgY ) );
}
function renderForegroundText() {
  mobileDevice ? renderText( '' + monthNames[MONTH - 1] + ' ' + DAY + ', ' + YEAR, 'Arial', 'left', 130, 100, 80, 'lightGrey', context ) : renderText( '' + monthNames[MONTH - 1] + ' ' + DAY + ', ' + YEAR, 'Arial', 'left', 70, 50, 30, 'lightGrey', context );
  topView || planetInfoIndex == 10 || ( renderText( 'VELOCITY', 'Arial', 'left', 30, canvas.height - 30 - 30 - 5, 30, 'lightGrey', context ),
  speedSide % 1 == 0 ? renderText( `${speedSide  }.0 KM/S`, 'Arial', 'left', 30, canvas.height - 30, 30, 'lightGrey', context ) : renderText( `${speedSide  } KM/S`, 'Arial', 'left', 30, canvas.height - 30, 30, 'lightGrey', context ) );
  oppositionMode ? ( renderText( 'DISTANCE', 'Arial', 'left', 30, canvas.height - 30 - 30 - 5, 30, 'lightGrey', context ),
  planetInfoIndex == 0 || planetInfoIndex == 1 ? ( renderText( 'NEXT CONJUNCTION', 'Arial', 'left', 70, 85, 30, 'lightGrey', context ),
  firstOppositionFrame ? renderText( '~ ' + round( conjunctionOppositionDatesRunning[3], 2 ) + ' AU (CONJUNCTION)', 'Arial', 'left', 30, canvas.height - 30, 30, 'goldenRod', context ) : renderText( '~ ' + round( conjunctionOppositionDatesRunning[3], 2 ) + ' AU', 'Arial', 'left', 30, canvas.height - 30, 30, 'goldenRod', context ) ) : planetInfoIndex > 2 && ( renderText( 'NEXT OPPOSITION', 'Arial', 'left', 70, 85, 30, 'lightGrey', context ),
  firstOppositionFrame ? renderText( '~ ' + round( conjunctionOppositionDatesRunning[3], 2 ) + ' AU (OPPOSITION)', 'Arial', 'left', 30, canvas.height - 30, 30, 'goldenRod', context ) : renderText( '~ ' + round( conjunctionOppositionDatesRunning[3], 2 ) + ' AU', 'Arial', 'left', 30, canvas.height - 30, 30, 'goldenRod', context ) ),
  renderText( 'ONE-WAY LIGHT TIME', 'Arial', 'right', orreryWidth - 30, canvas.height - 30 - 30 - 5, 30, 'lightGrey', context ),
  solarConjunction || renderText( '~ ' + round( signalTimePerAUSeconds * conjunctionOppositionDatesRunning[3] / 60, 1 ) + ' MIN', 'Arial', 'right', orreryWidth - 30, canvas.height - 30, 30, 'lightGrey', context ),
  solarConjunction && renderText( 'SOLAR CONJUNCTION', 'Arial', 'right', orreryWidth - 30, canvas.height - 30, 30, 'red', context ) ) : voyagerMode && ( renderText( 'DISTANCE', 'Arial', 'left', 30, canvas.height - 30 - 30 - 5, 30, 'lightGrey', context ),
  renderText( '~ 40.5 AU', 'Arial', 'left', 30, canvas.height - 30, 30, 'goldenRod', context ),
  renderText( 'ONE-WAY LIGHT TIME', 'Arial', 'right', orreryWidth - 30, canvas.height - 30 - 30 - 5, 30, 'lightGrey', context ),
  renderText( '~ ' + round( 40.5 * signalTimePerAUSeconds / 60, 1 ) + ' MIN', 'Arial', 'right', orreryWidth - 30, canvas.height - 30, 30, 'lightGrey', context ) );
  if ( runningmission1996 || runningmission2003 || runningmission2011 || runningmission2018 ) {
    speedEarth % 1 == 0 ? renderText( `${speedEarth  }.0 KM/S`, 'Arial', 'left', 110, 609, 20, 'SteelBlue', context ) : renderText( `${speedEarth  } KM/S`, 'Arial', 'left', 110, 609, 20, 'SteelBlue', context );
    round(speedSpacecraft, 1) % 1 == 0 ? renderText( `${round(speedSpacecraft, 1)  }.0 KM/S`, 'Arial', 'left', 110, 629, 20, 'RebeccaPurple', context ) : renderText( `${round(speedSpacecraft, 10)  } KM/S`, 'Arial', 'left', 110, 629, 20, 'RebeccaPurple', context );
    speedMars % 1 == 0 ? renderText( `${speedMars  }.0 KM/S`, 'Arial', 'left', 110, 649, 20, 'red', context ) : renderText( `${speedMars  } KM/S`, 'Arial', 'left', 110, 649, 20, 'red', context );
    var a = ( launchPoint[6] + launchPoint[10] ) % 360;
    scale == 200 && ( context.lineWidth = 1,
    runningmission1996 && ( context.beginPath(),
    context.arc( orreryWidth / 2, canvas.height / 2, 40, toRadians( 360 - a ), toRadians( 360 - a - phaseAngleAtDeparture ), !0 ),
    context.strokeStyle = 'SeaGreen',
    context.stroke(),
    context.closePath(),
    scale >= 100 && renderText( `${round(phaseAngleAtDeparture, 0)  }\u00b0 (PHASE ANGLE AT DEPARTURE)`, 'Arial', 'left', orreryWidth / 2 + 20, canvas.height / 2 - 35, 12, 'SeaGreen', context ),
    context.beginPath(),
    context.arc( orreryWidth / 2, canvas.height / 2, 25, toRadians( 360 - a ), toRadians( 360 - a - sweepAngle ), !0 ),
    context.strokeStyle = 'SeaGreen',
    context.stroke(),
    context.closePath(),
    scale >= 100 && renderText( `${round(sweepAngle, 0)  }\u00b0 (TOTAL SWEEP ANGLE)`, 'Arial', 'left', orreryWidth / 2 + 15, canvas.height / 2 - 18, 12, 'SeaGreen', context ) ),
    runningmission2003 ? ( context.beginPath(),
    context.arc( orreryWidth / 2, canvas.height / 2, 40, toRadians( 360 - a ), toRadians( 360 - a - phaseAngleAtDeparture ), !0 ),
    context.strokeStyle = 'SeaGreen',
    context.stroke(),
    context.closePath(),
    scale >= 100 && renderText( '(PHASE ANGLE AT DEPARTURE) ' + round( phaseAngleAtDeparture, 0 ) + '\u00b0', 'Arial', 'right', orreryWidth / 2, canvas.height / 2 + 45, 12, 'SeaGreen', context ),
    context.beginPath(),
    context.arc( orreryWidth / 2, canvas.height / 2, 25, toRadians( 360 - a ), toRadians( 360 - a - sweepAngle ), !0 ),
    context.strokeStyle = 'SeaGreen',
    context.stroke(),
    context.closePath(),
    scale >= 100 && renderText( '(TOTAL SWEEP ANGLE) ' + round( sweepAngle, 0 ) + '\u00b0', 'Arial', 'right', orreryWidth / 2, canvas.height / 2 + 30, 12, 'SeaGreen', context ) ) : runningmission2011 ? ( context.beginPath(),
    context.arc( orreryWidth / 2, canvas.height / 2, 40, toRadians( 360 - a ), toRadians( 360 - a - phaseAngleAtDeparture ), !0 ),
    context.strokeStyle = 'SeaGreen',
    context.stroke(),
    context.closePath(),
    scale >= 100 && renderText( `${round(phaseAngleAtDeparture, 0)  }\u00b0 (PHASE ANGLE AT DEPARTURE)`, 'Arial', 'left', orreryWidth / 2 + 25, canvas.height / 2 - 30, 12, 'SeaGreen', context ),
    context.beginPath(),
    context.arc( orreryWidth / 2, canvas.height / 2, 25, toRadians( 360 - a ), toRadians( 360 - a - sweepAngle ), !0 ),
    context.strokeStyle = 'SeaGreen',
    context.stroke(),
    context.closePath(),
    scale >= 100 && renderText( `${round(sweepAngle, 0)  }\u00b0 (TOTAL SWEEP ANGLE)`, 'Arial', 'left', orreryWidth / 2 + 20, canvas.height / 2 - 15, 12, 'SeaGreen', context ) ) : runningmission2018 && ( context.beginPath(),
    context.arc( orreryWidth / 2, canvas.height / 2, 40, toRadians( 360 - a ), toRadians( 360 - a - phaseAngleAtDeparture ), !0 ),
    context.strokeStyle = 'SeaGreen',
    context.stroke(),
    context.closePath(),
    scale >= 100 && renderText( '(TOTAL SWEEP ANGLE) ' + round( 113.5 + phaseAngleAtDeparture, 0 ) + '\u00b0', 'Arial', 'right', orreryWidth / 2 - 25, canvas.height / 2 + 15, 12, 'SeaGreen', context ),
    context.beginPath(),
    context.arc( orreryWidth / 2, canvas.height / 2, 25, toRadians( 360 - a ), toRadians( 360 - a - sweepAngle ), !0 ),
    context.strokeStyle = 'SeaGreen',
    context.stroke(),
    context.closePath(),
    scale >= 100 && renderText( '(PHASE ANGLE AT DEPARTURE) ' + round( phaseAngleAtDeparture, 0 ) + '\u00b0', 'Arial', 'right', orreryWidth / 2 - 35, canvas.height / 2 + 30, 12, 'SeaGreen', context ) ) );
  }
  a = 0;
  mobileDevice && ( a = 60 );
  mission1996Highlight ? ( renderText( 'PATHFINDER', 'Arial', 'center', orreryWidth + 90, 130, 20, 'green', context ),
  renderText( '1996', 'Arial', 'center', orreryWidth + 90, 160, 30, 'green', context ) ) : ( renderText( 'PATHFINDER', 'Arial', 'center', orreryWidth + 90, 130, 20, 'lightGrey', context ),
  renderText( '1996', 'Arial', 'center', orreryWidth + 90, 160, 30, 'lightGrey', context ) );
  runningmission1996 && ( current < landingDate1996 ? ( renderText( 'LANDED', 'Arial', 'left', 30, 120 + a, 30, 'lightGrey', context ),
  renderText( 'JUL 4, 1997', 'Arial', 'left', 30, 155 + a, 30, 'lightGrey', context ),
  round(dateDiffInDays(launchDate1996, current) / 30, 1) % 1 == 0 ? renderText( '(' + round( dateDiffInDays( launchDate1996, current ) / 30, 1 ) + '.0 MONTHS)', 'Arial', 'left', 30, 195 + a, 30, 'GoldenRod', context ) : renderText( '(' + round( dateDiffInDays( launchDate1996, current ) / 30, 1 ) + ' MONTHS)', 'Arial', 'left', 30, 195 + a, 30, 'GoldenRod', context ) ) : ( playing = !1,
  renderText( 'LANDED', 'Arial', 'left', 30, 120 + a, 30, 'lightGrey', context ),
  renderText( 'JUL 4, 1997', 'Arial', 'left', 30, 155 + a, 30, 'lightGrey', context ),
  renderText( '(' + round( dateDiffInDays( launchDate1996, current ) / 30, 1 ) + ' MONTHS)', 'Arial', 'left', 30, 195 + a, 30, 'GoldenRod', context ) ) );
  mission2003Highlight ? ( renderText( 'OPPORTUNITY', 'Arial', 'center', orreryWidth + 90, 207, 20, 'green', context ),
  renderText( '2003', 'Arial', 'center', orreryWidth + 90, 237, 30, 'green', context ) ) : ( renderText( 'OPPORTUNITY', 'Arial', 'center', orreryWidth + 90, 207, 20, 'lightGrey', context ),
  renderText( '2003', 'Arial', 'center', orreryWidth + 90, 237, 30, 'lightGrey', context ) );
  runningmission2003 && ( current < landingDate2003 ? ( renderText( 'LANDED', 'Arial', 'left', 30, 120 + a, 30, 'lightGrey', context ),
  renderText( 'JAN 25, 2004', 'Arial', 'left', 30, 155 + a, 30, 'lightGrey', context ),
  round(dateDiffInDays(launchDate2003, current) / 30, 1) % 1 == 0 ? renderText( '(' + round( dateDiffInDays( launchDate2003, current ) / 30, 1 ) + '.0 MONTHS)', 'Arial', 'left', 30, 195 + a, 30, 'GoldenRod', context ) : renderText( '(' + round( dateDiffInDays( launchDate2003, current ) / 30, 1 ) + ' MONTHS)', 'Arial', 'left', 30, 195 + a, 30, 'GoldenRod', context ) ) : ( playing = !1,
  renderText( 'LANDED', 'Arial', 'left', 30, 120 + a, 30, 'lightGrey', context ),
  renderText( 'JAN 25, 2004', 'Arial', 'left', 30, 155 + a, 30, 'lightGrey', context ),
  renderText( '(' + round( dateDiffInDays( launchDate2003, current ) / 30, 1 ) + ' MONTHS)', 'Arial', 'left', 30, 195 + a, 30, 'GoldenRod', context ) ) );
  mission2011Highlight ? ( renderText( 'CURIOSITY', 'Arial', 'center', orreryWidth + 90, 284, 20, 'green', context ),
  renderText( '2011', 'Arial', 'center', orreryWidth + 90, 314, 30, 'green', context ) ) : ( renderText( 'CURIOSITY', 'Arial', 'center', orreryWidth + 90, 284, 20, 'lightGrey', context ),
  renderText( '2011', 'Arial', 'center', orreryWidth + 90, 314, 30, 'lightGrey', context ) );
  runningmission2011 && ( current < landingDate2011 ? ( renderText( 'LANDED', 'Arial', 'left', 30, 120 + a, 30, 'lightGrey', context ),
  renderText( 'AUG 6, 2012', 'Arial', 'left', 30, 155 + a, 30, 'lightGrey', context ),
  round(dateDiffInDays(launchDate2011, current) / 30, 1) % 1 == 0 ? renderText( '(' + round( dateDiffInDays( launchDate2011, current ) / 30, 1 ) + '.0 MONTHS)', 'Arial', 'left', 30, 195 + a, 30, 'GoldenRod', context ) : renderText( '(' + round( dateDiffInDays( launchDate2011, current ) / 30, 1 ) + ' MONTHS)', 'Arial', 'left', 30, 195 + a, 30, 'GoldenRod', context ) ) : ( playing = !1,
  renderText( 'LANDED', 'Arial', 'left', 30, 120 + a, 30, 'lightGrey', context ),
  renderText( 'AUG 6, 2012', 'Arial', 'left', 30, 155 + a, 30, 'lightGrey', context ),
  renderText( '(' + round( dateDiffInDays( launchDate2011, current ) / 30, 1 ) + ' MONTHS)', 'Arial', 'left', 30, 195 + a, 30, 'GoldenRod', context ) ) );
  mission2018Highlight ? ( renderText( 'INSIGHT', 'Arial', 'center', orreryWidth + 90, 361, 20, 'green', context ),
  renderText( '2018', 'Arial', 'center', orreryWidth + 90, 391, 30, 'green', context ) ) : ( renderText( 'INSIGHT', 'Arial', 'center', orreryWidth + 90, 361, 20, 'lightGrey', context ),
  renderText( '2018', 'Arial', 'center', orreryWidth + 90, 391, 30, 'lightGrey', context ) );
  runningmission2018 && ( current < landingDate2018 ? ( renderText( 'LANDING', 'Arial', 'left', 30, 120 + a, 30, 'lightGrey', context ),
  renderText( 'NOV 26, 2018', 'Arial', 'left', 30, 155 + a, 30, 'lightGrey', context ),
  round(dateDiffInDays(launchDate2018, current) / 30, 1) % 1 == 0 ? renderText( '(' + round( dateDiffInDays( launchDate2018, current ) / 30, 1 ) + '.0 MONTHS)', 'Arial', 'left', 30, 195 + a, 30, 'GoldenRod', context ) : renderText( '(' + round( dateDiffInDays( launchDate2018, current ) / 30, 1 ) + ' MONTHS)', 'Arial', 'left', 30, 195 + a, 30, 'GoldenRod', context ) ) : ( playing = !1,
  renderText( 'LANDING', 'Arial', 'left', 30, 120 + a, 30, 'lightGrey', context ),
  renderText( 'NOV 26, 2018', 'Arial', 'left', 30, 155 + a, 30, 'lightGrey', context ),
  renderText( '(' + round( dateDiffInDays( launchDate2018, current ) / 30, 1 ) + ' MONTHS)', 'Arial', 'left', 30, 195 + a, 30, 'GoldenRod', context ) ) );
  started || ( context.beginPath(),
  context.globalAlpha = 0.6,
  context.rect( startScreenX, startScreenY, startScreenWidth, startScreenHeight ),
  context.fillStyle = '#000096',
  context.fill(),
  context.closePath(),
  context.globalAlpha = 1,
  context.beginPath(),
  context.rect( startScreenX, startScreenY, startScreenWidth, startScreenHeight ),
  context.lineWidth = 2,
  context.strokeStyle = 'lightGrey',
  context.closePath(),
  context.stroke(),
  renderText( 'THE SOLAR SYSTEM', 'Arial', 'center', startScreenX + startScreenWidth / 2, startScreenY + 50 + 20, 50, 'lightGrey', context ),
  a = 15,
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 120 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'SELECT', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + a, 30, 'lightGrey', context ),
  context.drawImage( playImg, startScreenX + 30 + 140 + 20, startScreenY + 120 - playImg.height + a ),
  renderText( 'TO START SIMULATION', 'Arial', 'left', startScreenX + 30 + 180 + 20, startScreenY + 120 + a, 30, 'lightGrey', context ),
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 120 + 30 + 5 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'SELECT', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 30 + 5 + a, 30, 'lightGrey', context ),
  context.drawImage( pauseImg, startScreenX + 30 + 140 + 20, startScreenY + 120 + 30 + 5 - playImg.height + a ),
  renderText( 'TO PAUSE SIMULATION', 'Arial', 'left', startScreenX + 30 + 180 + 20, startScreenY + 120 + 30 + 5 + a, 30, 'lightGrey', context ),
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 120 + 90 + 15 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'SELECT', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 90 + 15 + a, 30, 'lightGrey', context ),
  context.drawImage( zoomstart, startScreenX + 30 + 140 + 20, startScreenY + 120 + 90 + 15 - zoomstart.height + a ),
  renderText( 'TO ZOOM IN/OUT', 'Arial', 'left', startScreenX + 30 + 180 + 20, startScreenY + 120 + 90 + 15 + a, 30, 'lightGrey', context ),
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 120 + 120 + 20 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'SELECT', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 120 + 20 + a, 30, 'lightGrey', context ),
  context.drawImage( scaleActualImg, startScreenX + 30 + 140 + 20 + 4, startScreenY + 120 + 120 + 20 - scaleActualImg.height + a ),
  renderText( 'TO TOGGLE SCALE', 'Arial', 'left', startScreenX + 30 + 180 + 20, startScreenY + 120 + 120 + 20 + a, 30, 'lightGrey', context ),
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 120 + 150 + 20 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'SELECT', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 150 + 20 + a, 30, 'lightGrey', context ),
  context.drawImage( telescopeImg, startScreenX + 30 + 140 + 20, startScreenY + 120 + 150 + 20 - scaleActualImg.height + a ),
  renderText( 'TO VIEW NEXT APPROACH', 'Arial', 'left', startScreenX + 30 + 180 + 20, startScreenY + 120 + 150 + 20 + a, 30, 'lightGrey', context ),
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 120 + 210 + 30 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'SELECT MARS MISSION AND', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 210 + 30 + a, 30, 'lightGrey', context ),
  context.drawImage( playImg, startScreenX + 30 + 440 - 3 + 20, startScreenY + 120 + 210 + 30 - playImg.height + a ),
  renderText( 'TO VIEW', 'Arial', 'left', startScreenX + 30 + 440 + 18 + 20 + playImg.width, startScreenY + 120 + 210 + 30 + a, 30, 'lightGrey', context ),
  renderText( 'PAST AND FUTURE MARS MISSIONS', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 240 + 35 + a, 30, 'lightGrey', context ),
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 120 + 300 + 45 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'SELECT ANY PLANET FOR DETAILS', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 300 + 45 + a, 30, 'lightGrey', context ),
  context.globalAlpha = AlphaLoop / 30,
  renderText( 'CLICK MOUSE TO BEGIN', 'Arial', 'center', orreryWidth / 2, startScreenY + startScreenHeight - 30, 30, 'lightGrey', context ),
  context.globalAlpha = 1 );
  ended && ( context.beginPath(),
  context.globalAlpha = 0.6,
  context.rect( endScreenX, endScreenY, endScreenWidth, endScreenHeight ),
  context.fillStyle = '#000096',
  context.fill(),
  context.closePath(),
  context.globalAlpha = 1,
  context.beginPath(),
  context.rect( endScreenX, endScreenY, endScreenWidth, endScreenHeight ),
  context.lineWidth = 2,
  context.strokeStyle = 'lightGrey',
  context.closePath(),
  context.stroke(),
  renderText( 'SIMULATION ENDED AT YEAR 2050', 'Arial', 'left', endScreenX + 30 + 20, endScreenY + 50, 30, 'lightGrey', context ),
  context.globalAlpha = AlphaLoop / 30,
  renderText( 'CLICK MOUSE TO RESTART', 'Arial', 'center', orreryWidth / 2, endScreenY + endScreenHeight - 30, 30, 'lightGrey', context ),
  context.globalAlpha = 1 );
  if ( telescopeMode ) {
    context.beginPath();
    context.globalAlpha = 0.6;
    context.rect( startScreenX, startScreenY, startScreenWidth, startScreenHeight );
    context.fillStyle = '#000096';
    context.fill();
    context.closePath();
    context.globalAlpha = 1;
    context.beginPath();
    context.rect( startScreenX, startScreenY, startScreenWidth, startScreenHeight );
    context.lineWidth = 2;
    context.strokeStyle = 'lightGrey';
    context.closePath();
    context.stroke();
    a = 15;
    let b = 0;
    renderText( 'LISTED ARE THE UPCOMING APPROACH', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 - 30 - 30 - 10 + a, 30, 'lightGrey', context );
    renderText( 'DATES IN CHRONOLOGICAL ORDER.', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 - 30 - 5 + a, 30, 'lightGrey', context );
    renderText( 'THESE REPRESENT OPPORTUNITIES TO', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + a, 30, 'lightGrey', context );
    renderText( 'VIEW THE PLANET WITH A TELESCOPE.', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 30 + 5 + a, 30, 'lightGrey', context );
    context.beginPath();
    context.rect( startScreenX + 30, startScreenY + 120 + 90 + 15 - 16 + a, 10, 10 );
    context.fillStyle = 'lightGrey';
    context.fill();
    let c = conjunctionOppositionDateSort[b].getMonth() - 1;
    c == -1 && ( c = 11 );
    renderText( `${monthNames[c]  } ${  conjunctionOppositionDateSort[b].getDate()  }, ${  conjunctionOppositionDateSort[b].getFullYear()}`, 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 90 + 15 + a, 30, 'lightGrey', context );
    renderText( planetInfo[conjunctionOppositionDateSort[b].getHours()][0], 'Arial', 'left', startScreenX + 30 + 20 + 250, startScreenY + 120 + 90 + 15 + a, 30, 'lightGrey', context );
    b++;
    context.beginPath();
    context.rect( startScreenX + 30, startScreenY + 120 + 120 + 20 - 16 + a, 10, 10 );
    context.fillStyle = 'lightGrey';
    context.fill();
    c = conjunctionOppositionDateSort[b].getMonth() - 1;
    c == -1 && ( c = 11 );
    renderText( `${monthNames[c]  } ${  conjunctionOppositionDateSort[b].getDate()  }, ${  conjunctionOppositionDateSort[b].getFullYear()}`, 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 120 + 20 + a, 30, 'lightGrey', context );
    renderText( planetInfo[conjunctionOppositionDateSort[b].getHours()][0], 'Arial', 'left', startScreenX + 30 + 20 + 250, startScreenY + 120 + 120 + 20 + a, 30, 'lightGrey', context );
    b++;
    context.beginPath();
    context.rect( startScreenX + 30, startScreenY + 120 + 150 + 25 - 16 + a, 10, 10 );
    context.fillStyle = 'lightGrey';
    context.fill();
    c = conjunctionOppositionDateSort[b].getMonth() - 1;
    c == -1 && ( c = 11 );
    renderText( `${monthNames[c]  } ${  conjunctionOppositionDateSort[b].getDate()  }, ${  conjunctionOppositionDateSort[b].getFullYear()}`, 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 150 + 25 + a, 30, 'lightGrey', context );
    renderText( planetInfo[conjunctionOppositionDateSort[b].getHours()][0], 'Arial', 'left', startScreenX + 30 + 20 + 250, startScreenY + 120 + 150 + 25 + a, 30, 'lightGrey', context );
    b++;
    context.beginPath();
    context.rect( startScreenX + 30, startScreenY + 120 + 180 + 30 - 16 + a, 10, 10 );
    context.fillStyle = 'lightGrey';
    context.fill();
    c = conjunctionOppositionDateSort[b].getMonth() - 1;
    c == -1 && ( c = 11 );
    renderText( `${monthNames[c]  } ${  conjunctionOppositionDateSort[b].getDate()  }, ${  conjunctionOppositionDateSort[b].getFullYear()}`, 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 180 + 30 + a, 30, 'lightGrey', context );
    renderText( planetInfo[conjunctionOppositionDateSort[b].getHours()][0], 'Arial', 'left', startScreenX + 30 + 20 + 250, startScreenY + 120 + 180 + 30 + a, 30, 'lightGrey', context );
    b++;
    context.beginPath();
    context.rect( startScreenX + 30, startScreenY + 120 + 210 + 35 - 16 + a, 10, 10 );
    context.fillStyle = 'lightGrey';
    context.fill();
    c = conjunctionOppositionDateSort[b].getMonth() - 1;
    c == -1 && ( c = 11 );
    renderText( `${monthNames[c]  } ${  conjunctionOppositionDateSort[b].getDate()  }, ${  conjunctionOppositionDateSort[b].getFullYear()}`, 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 210 + 35 + a, 30, 'lightGrey', context );
    renderText( planetInfo[conjunctionOppositionDateSort[b].getHours()][0], 'Arial', 'left', startScreenX + 30 + 20 + 250, startScreenY + 120 + 210 + 35 + a, 30, 'lightGrey', context );
    b++;
    context.beginPath();
    context.rect( startScreenX + 30, startScreenY + 120 + 240 + 40 - 16 + a, 10, 10 );
    context.fillStyle = 'lightGrey';
    context.fill();
    c = conjunctionOppositionDateSort[b].getMonth() - 1;
    c == -1 && ( c = 11 );
    renderText( `${monthNames[c]  } ${  conjunctionOppositionDateSort[b].getDate()  }, ${  conjunctionOppositionDateSort[b].getFullYear()}`, 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 240 + 40 + a, 30, 'lightGrey', context );
    renderText( planetInfo[conjunctionOppositionDateSort[b].getHours()][0], 'Arial', 'left', startScreenX + 30 + 20 + 250, startScreenY + 120 + 240 + 40 + a, 30, 'lightGrey', context );
    b++;
    context.beginPath();
    context.rect( startScreenX + 30, startScreenY + 120 + 270 + 45 - 16 + a, 10, 10 );
    context.fillStyle = 'lightGrey';
    context.fill();
    c = conjunctionOppositionDateSort[b].getMonth() - 1;
    c == -1 && ( c = 11 );
    renderText( `${monthNames[c]  } ${  conjunctionOppositionDateSort[b].getDate()  }, ${  conjunctionOppositionDateSort[b].getFullYear()}`, 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + 270 + 45 + a, 30, 'lightGrey', context );
    renderText( planetInfo[conjunctionOppositionDateSort[b].getHours()][0], 'Arial', 'left', startScreenX + 30 + 20 + 250, startScreenY + 120 + 270 + 45 + a, 30, 'lightGrey', context );
    context.globalAlpha = AlphaLoop / 30;
    renderText( 'CLICK MOUSE TO RETURN', 'Arial', 'center', orreryWidth / 2, startScreenY + startScreenHeight - 30, 30, 'lightGrey', context );
    context.globalAlpha = 1;
  }
  infoMode && ( context.beginPath(),
  context.globalAlpha = 0.6,
  context.rect( startScreenX, startScreenY, startScreenWidth, startScreenHeight ),
  context.fillStyle = '#000096',
  context.fill(),
  context.closePath(),
  context.globalAlpha = 1,
  context.beginPath(),
  context.rect( startScreenX, startScreenY, startScreenWidth, startScreenHeight ),
  context.lineWidth = 2,
  context.strokeStyle = 'lightGrey',
  context.closePath(),
  context.stroke(),
  renderText( 'MISSION INFO', 'Arial', 'center', startScreenX + startScreenWidth / 2, startScreenY + 50 + 20, 50, 'lightGrey', context ),
  a = 15,
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 120 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'LAUNCH VEHICLE', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 120 + a, 30, 'lightGrey', context ),
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 180 + 10 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'BOOSTERS', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 180 + 10 + a, 30, 'lightGrey', context ),
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 210 + 15 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'STAGE I', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 210 + 15 + a, 30, 'lightGrey', context ),
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 240 + 20 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'STAGE II', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 240 + 20 + a, 30, 'lightGrey', context ),
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 270 + 25 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'STAGE III', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 270 + 25 + a, 30, 'lightGrey', context ),
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 300 + 30 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'TOTAL THRUST', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 300 + 30 + a, 30, 'lightGrey', context ),
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 360 + 40 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'ROVER MASS', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 360 + 40 + a, 30, 'lightGrey', context ),
  context.beginPath(),
  context.rect( startScreenX + 30, startScreenY + 420 + 50 - 16 + a, 10, 10 ),
  context.fillStyle = 'lightGrey',
  context.fill(),
  renderText( 'TOTAL COST', 'Arial', 'left', startScreenX + 30 + 20, startScreenY + 420 + 50 + a, 30, 'lightGrey', context ),
  context.globalAlpha = AlphaLoop / 30,
  renderText( 'CLICK MOUSE TO RETURN', 'Arial', 'center', orreryWidth / 2, startScreenY + startScreenHeight - 30, 30, 'lightGrey', context ),
  context.globalAlpha = 1,
  runningmission1996 ? ( renderText( 'DELTA II-7925', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 120 + a, 30, 'lightGrey', context ),
  renderText( '9 x GEM-40 (1M \u00d8)', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 180 + a + 10, 30, 'lightGrey', context ),
  renderText( 'ROCKETDYNE RS-27A', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 210 + a + 15, 30, 'lightGrey', context ),
  renderText( 'AEROJET AJ10-118K', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 240 + a + 20, 30, 'lightGrey', context ),
  renderText( 'THIOKOL STAR-48', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 270 + a + 25, 30, 'lightGrey', context ),
  renderText( '1,234,766 LBF', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 300 + a + 30, 30, 'lightGrey', context ),
  renderText( '10.6KG', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 360 + a + 40, 30, 'lightGrey', context ),
  renderText( '$175 MILLION', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 420 + a + 50, 30, 'lightGrey', context ) ) : runningmission2003 ? ( renderText( 'DELTA II-7925-HEAVY', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 120 + a, 30, 'lightGrey', context ),
  renderText( '9 x GEM-46 (1.17M \u00d8)', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 180 + a + 10, 30, 'lightGrey', context ),
  renderText( 'ROCKETDYNE RS-27A', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 210 + a + 15, 30, 'lightGrey', context ),
  renderText( 'AEROJET AJ10-118K', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 240 + a + 20, 30, 'lightGrey', context ),
  renderText( 'THIOKOL STAR-48', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 270 + a + 25, 30, 'lightGrey', context ),
  renderText( '1,455,320 LBF', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 300 + a + 30, 30, 'lightGrey', context ),
  renderText( '185KG', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 360 + a + 40, 30, 'lightGrey', context ),
  renderText( '$400 MILLION', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 420 + a + 50, 30, 'lightGrey', context ) ) : runningmission2011 ? ( renderText( 'ATLAS V-541', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 120 + a, 30, 'lightGrey', context ),
  renderText( '4 x AJ-60A (1.6M \u00d8)', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 180 + a + 10, 30, 'lightGrey', context ),
  renderText( 'ENERGOMASH RD-180', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 210 + a + 15, 30, 'lightGrey', context ),
  renderText( '1 x CENTAUR RL-10A', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 240 + a + 20, 30, 'lightGrey', context ),
  renderText( 'N/A', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 270 + a + 25, 30, 'lightGrey', context ),
  renderText( '2,096,300 LBF', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 300 + a + 30, 30, 'lightGrey', context ),
  renderText( '850KG', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 360 + a + 40, 30, 'lightGrey', context ),
  renderText( '$2500 MILLION', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 420 + a + 50, 30, 'lightGrey', context ) ) : runningmission2018 && ( renderText( 'ATLAS V-401', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 120 + a, 30, 'lightGrey', context ),
  renderText( 'N/A', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 180 + a + 10, 30, 'lightGrey', context ),
  renderText( 'ENERGOMASH RD-180', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 210 + a + 15, 30, 'lightGrey', context ),
  renderText( '1 x CENTAUR RL-10A', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 240 + a + 20, 30, 'lightGrey', context ),
  renderText( 'N/A', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 270 + a + 25, 30, 'lightGrey', context ),
  renderText( '872,300 LBF', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 300 + a + 30, 30, 'lightGrey', context ),
  renderText( '360KG', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 360 + a + 40, 30, 'lightGrey', context ),
  renderText( '$310 MILLION', 'Arial', 'left', startScreenX + 30 + 20 + 300, startScreenY + 420 + a + 50, 30, 'lightGrey', context ) ) );
}
function renderRightConsole( a ) {
  a.fillStyle = '#101010';
  a.fillRect( orreryWidth, 0, canvas.width, canvas.height );
  renderText( 'MARS', 'Arial', 'center', orreryWidth + 90, 50, 30, 'lightGrey', a );
  renderText( 'MISSIONS', 'Arial', 'center', orreryWidth + 90, 70, 18, 'lightGrey', a );
  renderLine( orreryWidth, 0, orreryWidth, canvas.height, 'lightGrey', 2, !1, a );
  renderLine( orreryWidth, 99, orreryWidth + 180, 99, 'lightGrey', 2, !1, a );
  renderLine( orreryWidth, 176, orreryWidth + 180, 176, 'lightGrey', 2, !1, a );
  renderLine( orreryWidth, 253, orreryWidth + 180, 253, 'lightGrey', 2, !1, a );
  renderLine( orreryWidth, 330, orreryWidth + 180, 330, 'lightGrey', 2, !1, a );
  renderLine( orreryWidth, 407, orreryWidth + 180, 407, 'lightGrey', 2, !1, a );
  planetInfoIndex != 10 && ( renderText( 'PLANET', 'Arial', 'left', orreryWidth + 10, 432, 12, 'lightGrey', a ),
  renderText( planetInfo[planetInfoIndex][0], 'Arial', 'left', orreryWidth + 10, 452, 20, 'lightGrey', a ),
  renderText( 'TYPE', 'Arial', 'left', orreryWidth + 10, 474, 12, 'lightGrey', a ),
  renderText( planetInfo[planetInfoIndex][1], 'Arial', 'left', orreryWidth + 10, 494, 20, 'lightGrey', a ),
  renderText( 'TEMPERATURE', 'Arial', 'left', orreryWidth + 10, 516, 12, 'lightGrey', a ),
  renderText( planetInfo[planetInfoIndex][2], 'Arial', 'left', orreryWidth + 10, 536, 20, 'lightGrey', a ),
  renderText( 'ORBITAL PERIOD', 'Arial', 'left', orreryWidth + 10, 558, 12, 'lightGrey', a ),
  renderText( planetInfo[planetInfoIndex][4], 'Arial', 'left', orreryWidth + 10, 578, 20, 'lightGrey', a ),
  renderText( 'MOONS', 'Arial', 'left', orreryWidth + 10, 600, 12, 'lightGrey', a ),
  renderText( planetInfo[planetInfoIndex][5], 'Arial', 'left', orreryWidth + 10, 620, 20, 'lightGrey', a ),
  topView ? ( renderText( 'ROTATION', 'Arial', 'left', orreryWidth + 10, 642, 12, 'lightGrey', a ),
  'DIRECT' == planetInfo[planetInfoIndex][6] ? renderText( planetInfo[planetInfoIndex][6], 'Arial', 'left', orreryWidth + 10, 662, 20, 'green', a ) : renderText( planetInfo[planetInfoIndex][6], 'Arial', 'left', orreryWidth + 10, 662, 20, 'red', a ),
  planetInfoIndex == 0 || planetInfoIndex == 1 ? renderText( 'NEXT CONJUNCTION', 'Arial', 'left', orreryWidth + 10, 684, 12, 'lightGrey', a ) : planetInfoIndex != 2 && renderText( 'NEXT OPPOSITION', 'Arial', 'left', orreryWidth + 10, 684, 12, 'lightGrey', a ),
  planetInfoIndex != 2 && renderText( `${conjunctionOppositionDates[planetInfoIndex][2]  } ${  monthNames[conjunctionOppositionDates[planetInfoIndex][1] - 1]  }, ${  conjunctionOppositionDates[planetInfoIndex][0]}`, 'Arial', 'left', orreryWidth + 10, 704, 20, 'lightGrey', a ) ) : ( renderText( 'ORBITAL INCLINATION', 'Arial', 'left', orreryWidth + 10, 644, 12, 'lightGrey', a ),
  renderText( planetInfo[planetInfoIndex][8], 'Arial', 'left', orreryWidth + 10, 664, 20, 'limegreen', a ),
  renderText( 'AXIAL TILT', 'Arial', 'left', orreryWidth + 10, 682, 12, 'lightGrey', a ),
  renderText( planetInfo[planetInfoIndex][7], 'Arial', 'left', orreryWidth + 10, 702, 20, 'goldenRod', a ) ) );
}
function renderPerihelionAphelion( a, b ) {
  renderPoint( orreryWidth / 2 + venusPerihelionPoint[0] * scale, canvas.height / 2 - venusPerihelionPoint[1] * scale, 2, 0, 2 * Math.PI, !0, b, b, a );
  renderText( 'P', 'Arial', 'left', orreryWidth / 2 + venusPerihelionPoint[0] * scale - 15, canvas.height / 2 - venusPerihelionPoint[1] * scale + 5, 12, b, a );
  renderPoint( orreryWidth / 2 + venusAphelionPoint[0] * scale, canvas.height / 2 - venusAphelionPoint[1] * scale, 2, 0, 2 * Math.PI, !0, b, b, a );
  renderPoint( orreryWidth / 2 + earthAphelionPoint[0] * scale, canvas.height / 2 - earthAphelionPoint[1] * scale, 2, 0, 2 * Math.PI, !0, b, b, a );
  renderPoint( orreryWidth / 2 + earthPerihelionPoint[0] * scale, canvas.height / 2 - earthPerihelionPoint[1] * scale, 2, 0, 2 * Math.PI, !0, b, b, a );
  renderText( 'P', 'Arial', 'center', orreryWidth / 2 + earthPerihelionPoint[0] * scale, canvas.height / 2 - earthPerihelionPoint[1] * scale - 8, 12, b, a );
  renderPoint( orreryWidth / 2 + marsAphelionPoint[0] * scale, canvas.height / 2 - marsAphelionPoint[1] * scale, 2, 0, 2 * Math.PI, !0, b, b, a );
  renderPoint( orreryWidth / 2 + marsPerihelionPoint[0] * scale, canvas.height / 2 - marsPerihelionPoint[1] * scale, 2, 0, 2 * Math.PI, !0, b, b, a );
  renderText( 'P', 'Arial', 'left', orreryWidth / 2 + marsPerihelionPoint[0] * scale + 10, canvas.height / 2 - marsPerihelionPoint[1] * scale + 4, 12, b, a );
  renderPoint( orreryWidth / 2 + jupiterPerihelionPoint[0] * scale / jupiterScaleDivider, canvas.height / 2 - jupiterPerihelionPoint[1] * scale / jupiterScaleDivider, 2, 0, 2 * Math.PI, !0, b, b, a );
  renderText( 'P', 'Arial', 'left', orreryWidth / 2 + jupiterPerihelionPoint[0] * scale / jupiterScaleDivider + 10, canvas.height / 2 - jupiterPerihelionPoint[1] * scale / jupiterScaleDivider + 4, 12, b, a );
  renderPoint( orreryWidth / 2 + jupiterAphelionPoint[0] * scale / jupiterScaleDivider, canvas.height / 2 - jupiterAphelionPoint[1] * scale / jupiterScaleDivider, 2, 0, 2 * Math.PI, !0, b, b, a );
  renderPoint( orreryWidth / 2 + saturnPerihelionPoint[0] * scale / saturnScaleDivider, canvas.height / 2 - saturnPerihelionPoint[1] * scale / saturnScaleDivider, 2, 0, 2 * Math.PI, !0, b, b, a );
  renderText( 'P', 'Arial', 'left', orreryWidth / 2 + saturnPerihelionPoint[0] * scale / saturnScaleDivider + 10, canvas.height / 2 - saturnPerihelionPoint[1] * scale / saturnScaleDivider + 4, 12, b, a );
  renderPoint( orreryWidth / 2 + saturnAphelionPoint[0] * scale / saturnScaleDivider, canvas.height / 2 - saturnAphelionPoint[1] * scale / saturnScaleDivider, 2, 0, 2 * Math.PI, !0, b, b, a );
  renderPoint( orreryWidth / 2 + uranusPerihelionPoint[0] * scale / uranusScaleDivider, canvas.height / 2 - uranusPerihelionPoint[1] * scale / uranusScaleDivider, 2, 0, 2 * Math.PI, !0, b, b, a );
  renderText( 'P', 'Arial', 'left', orreryWidth / 2 + uranusPerihelionPoint[0] * scale / uranusScaleDivider + 10, canvas.height / 2 - uranusPerihelionPoint[1] * scale / uranusScaleDivider + 4, 12, b, a );
  renderPoint( orreryWidth / 2 + uranusAphelionPoint[0] * scale / uranusScaleDivider, canvas.height / 2 - uranusAphelionPoint[1] * scale / uranusScaleDivider, 2, 0, 2 * Math.PI, !0, b, b, a );
  renderPoint( orreryWidth / 2 + neptunePerihelionPoint[0] * scale / neptuneScaleDivider, canvas.height / 2 - neptunePerihelionPoint[1] * scale / neptuneScaleDivider, 2, 0, 2 * Math.PI, !0, b, b, a );
  renderText( 'P', 'Arial', 'left', orreryWidth / 2 + neptunePerihelionPoint[0] * scale / neptuneScaleDivider + 10, canvas.height / 2 - neptunePerihelionPoint[1] * scale / neptuneScaleDivider + 4, 12, b, a );
  renderPoint( orreryWidth / 2 + neptuneAphelionPoint[0] * scale / neptuneScaleDivider, canvas.height / 2 - neptuneAphelionPoint[1] * scale / neptuneScaleDivider, 2, 0, 2 * Math.PI, !0, b, b, a );
}
function renderHillRadius( a, b, c, d ) {
  renderPoint( orreryWidth / 2 + XEarth * scale, canvas.height / 2 - YEarth * scale, a * AUValue * ( 1 - b ) * Math.cbrt( c / ( 3 * 1.989 * Math.pow( 10, 30 ) ) ) * 2 / AUValue * scale, 0, 2 * Math.PI, !0, 'white', 'grey', context );
}
function EccAnom( a, b, c ) {
  let d = Math.PI, 
f = 0, 
g = Math.pow( 10, -c ), 
h;
  b /= 360;
  b = 2 * d * ( b - Math.floor( b ) );
  let e = 0a < .8 ? b : d;
  for ( h = e - a * Math.sin( b ) - b; Math.abs( h ) > g && f < 30; )
    {e -= h / (1 - a * Math.cos(e)),
        h = e - a * Math.sin(e) - b,
        f += 1;}
  return Math.round( e / ( d / 180 ) * Math.pow( 10, c ) ) / Math.pow( 10, c );
}
function getT( a, b ) {
  if ( 'J1900' == b )
    {return (a - 2415020) / 36525;}
  if ( 'J2000' == b )
    {return (a - 2451545) / 36525;}
  if ( 'J1996DEC4' == b )
    {return (a - 2450421.5) / 36525};
}
function getJulianDate( a, b, c ) {
  let d = new Date( a, b, Math.floor( c ) ),
       f = new Date( '1582', '10', '15' );
  a < 0 && a++;
  if ( b == 1 || b == 2 )
    {--a,
        b += 12;}
  let g = Math.floor( a / 100 );
  g = 2 - g + Math.floor( g / 4 );
  d >= f || ( g = 0 );
  return Math.floor( 365.25 * a ) + Math.floor( 30.6001 * ( b + 1 ) ) + c + 1720994.5 + g;
}
function toDegrees( a ) {
  return 180 / Math.PI * a;
}
function toRadians( a ) {
  return Math.PI / 180 * a;
}
function round( a, b ) {
  return Number( `${Math.round(a + "e" + b)  }e-${  b}` );
}
function calculateFoci( a, b ) {
  return Math.sqrt( Math.pow( a, 2 ) - Math.pow( b, 2 ) );
}
function relMouseCoords( a ) {
  let b = 0,
       c = 0,
       d = this;
  do
    {b += d.offsetLeft - d.scrollLeft,
        c += d.offsetTop - d.scrollTop;}
  while ( d = d.offsetParent );return {
    x: a.pageX - b,
    y: a.pageY - c,
  };
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;
function buttonHovered() {
  document.body.style.cursor = 'default';
  mission2018Highlight = mission2011Highlight = mission2003Highlight = mission1996Highlight = topviewHighlight = infoHighlight = telescopeHighlight = scaleHighlight = nextButtonHighlight = detailButtonHighlight = zoomButtonHighlight = playButtonHighlight = pauseButtonHighlight = fullscreenButtonHighlight = !1;
  !started || ended || telescopeMode || infoMode ? ( started ? ended ? collidePointRect( mouseX, mouseY, endScreenX, endScreenY, endScreenWidth, endScreenHeight ) && ( document.body.style.cursor = 'pointer' ) : telescopeMode ? collidePointRect( mouseX, mouseY, startScreenX, startScreenY, startScreenWidth, startScreenHeight ) && ( document.body.style.cursor = 'pointer' ) : infoMode && collidePointRect( mouseX, mouseY, startScreenX, startScreenY, startScreenWidth, startScreenHeight ) && ( document.body.style.cursor = 'pointer' ) : collidePointRect( mouseX, mouseY, startScreenX, startScreenY, startScreenWidth, startScreenHeight ) && ( document.body.style.cursor = 'pointer' ),
  !mobileDevice && collidePointRect( mouseX, mouseY, fullscreenImgX, fullscreenImgY, fullscreenImg.width, fullscreenImg.height ) && ( fullscreenButtonHighlight = !0,
  document.body.style.cursor = 'pointer' ) ) : ( !mobileDevice && collidePointRect( mouseX, mouseY, fullscreenImgX, fullscreenImgY, fullscreenImg.width, fullscreenImg.height ) && ( fullscreenButtonHighlight = !0,
  document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, pauseImgX, pauseImgY, pauseImg.width * mobileMultiplier, pauseImg.height * mobileMultiplier ) && ( playing && ( mobileDevice || ( pauseButtonHighlight = !0 ) ),
  document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, playImgX, playImgY, playImg.width * mobileMultiplier, playImg.height * mobileMultiplier ) && ( playing || mobileDevice || ( playButtonHighlight = !0 ),
  document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, nextImgX, nextImgY * mobileMultiplier, nextImg.width * mobileMultiplier, playImg.height * mobileMultiplier ) && oppositionMode && ( nextButtonHighlight = !0,
  document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, XVoyagerI - planetPadding, YVoyagerI - planetPadding, 2 * planetPadding, 2 * planetPadding ) && scale == zoomedoutscaleActual && ( document.body.style.cursor = 'pointer' ),
  !collidePointRect( mouseX, mouseY, zoomImgX - mobileAdjustX + mobileExtraX - mobilezoomAdjustX, zoomImgY, zoomoutImg.width * mobileMultiplier, zoomoutImg.height * mobileMultiplier ) || scale != zoomedoutscale && scale != zoomedinscale && scale != zoomedoutscaleActual || ( mobileDevice || ( zoomButtonHighlight = !0 ),
  document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, scaleImgX - mobileAdjustX - mobileExtraX - mobileExtraX2, scaleImgY, scaleCompressedImg.width * mobileMultiplier, scaleCompressedImg.height * mobileMultiplier ) && topView && scale >= zoomedoutscale && ( mobileDevice || ( scaleHighlight = !0 ),
  document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, telescopeImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobileExtraX3 - mobileExtraX4, telescopeImgY, telescopeImg.width * mobileMultiplier, telescopeImg.height * mobileMultiplier ) && ( mobileDevice || ( telescopeHighlight = !0 ),
  document.body.style.cursor = 'pointer' ),
  !collidePointRect( mouseX, mouseY, topviewImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobileExtraX3 - mobileExtraX4, topviewImgY, topViewImg.width * mobileMultiplier, topViewImg.height * mobileMultiplier ) || runningmission1996 || runningmission2003 || runningmission2011 || runningmission2018 || ( mobileDevice || ( topviewHighlight = !0 ),
  document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, infoImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobileExtraX3 - mobileExtraX4 - mobileExtraX5, infoImgY, infoImg.width * mobileMultiplier, infoImg.height * mobileMultiplier ) && ( runningmission1996 || runningmission2003 || runningmission2011 || runningmission2018 ) && ( mobileDevice || ( infoHighlight = !0 ),
  document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, detailImgX, detailImgY, detailImg.width, detailImg.height ) && !mobileDevice && planetInfoIndex != 2 && planetInfoIndex != 10 && topView && ( detailButtonHighlight = !0,
  document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth, 99, 180, 75 ) && ( mission1996Highlight = !0,
  document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth, 176, 180, 75 ) && ( mission2003Highlight = !0,
  document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth, 253, 180, 75 ) && ( mission2011Highlight = !0,
  document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth, 330, 180, 75 ) && ( mission2018Highlight = !0,
  document.body.style.cursor = 'pointer' ),
  topView ? ( collidePointRect( mouseX, mouseY, orreryWidth / 2 + XMercury * scale - ( 5 + 4879 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - YMercury * scale - ( 5 + 4879 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 4879 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 4879 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth / 2 + XVenus * scale - ( 5 + 12104 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - YVenus * scale - ( 5 + 12104 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 12104 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 12104 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth / 2 + XEarth * scale - ( 5 + 12756 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - YEarth * scale - ( 5 + 12756 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 12756 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 12756 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth / 2 + XMars * scale - ( 5 + 6792 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - YMars * scale - ( 5 + 6792 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 6792 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 6792 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth / 2 + XJupiter * scale / jupiterScaleDivider - ( 5 + 142984 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - YJupiter * scale / jupiterScaleDivider - ( 5 + 142984 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 142984 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 142984 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth / 2 + XSaturn * scale / saturnScaleDivider - ( 5 + 120536 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - YSaturn * scale / saturnScaleDivider - ( 5 + 120536 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 120536 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 120536 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth / 2 + XUranus * scale / uranusScaleDivider - ( 5 + 51118 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - YUranus * scale / uranusScaleDivider - ( 5 + 51118 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 51118 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 51118 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth / 2 + XNeptune * scale / neptuneScaleDivider - ( 5 + 49528 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - YNeptune * scale / neptuneScaleDivider - ( 5 + 49528 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 49528 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 49528 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ) ) : ( collidePointRect( mouseX, mouseY, orreryWidth / 2 + XMercury * scale - ( 5 + 4879 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZMercury * scale - ( 5 + 4879 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 4879 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 4879 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth / 2 + XVenus * scale - ( 5 + 12104 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZVenus * scale - ( 5 + 12104 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 12104 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 12104 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth / 2 + XEarth * scale - ( 5 + 12756 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZEarth * scale - ( 5 + 12756 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 12756 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 12756 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth / 2 + XMars * scale - ( 5 + 6792 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZMars * scale - ( 5 + 6792 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 6792 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 6792 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth / 2 + XJupiter * scale / jupiterScaleDivider - ( 5 + 142984 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZJupiter * scale / jupiterScaleDivider - ( 5 + 142984 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 142984 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 142984 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth / 2 + XSaturn * scale / saturnScaleDivider - ( 5 + 120536 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZSaturn * scale / saturnScaleDivider - ( 5 + 120536 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 120536 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 120536 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth / 2 + XUranus * scale / uranusScaleDivider - ( 5 + 51118 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZUranus * scale / uranusScaleDivider - ( 5 + 51118 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 51118 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 51118 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ),
  collidePointRect( mouseX, mouseY, orreryWidth / 2 + XNeptune * scale / neptuneScaleDivider - ( 5 + 49528 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZNeptune * scale / neptuneScaleDivider - ( 5 + 49528 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust - planetPadding, ( 5 + 49528 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding, ( 5 + 49528 / planetScaleAdjustment * 0.5 ) / planetSizeAdjust * 2 + 2 * planetPadding ) && ( document.body.style.cursor = 'pointer' ) ) );
}
function buttonClicked() {
  if ( !started || ended || telescopeMode || infoMode )
    {!started && collidePointRect(mouseX, mouseY, startScreenX, startScreenY, startScreenWidth, startScreenHeight) && (playing = started = !0),
        ended && collidePointRect(mouseX, mouseY, endScreenX, endScreenY, endScreenWidth, endScreenHeight) && (firstOppositionFrame = oppositionMode = playing = ended = started = !1,
        planetInfoIndex = 10,
        scale = zoomedoutscale,
        scaleCompressed = zoomedin = !0,
        telescopeMode = voyagerMode = !1,
        jupiterScaleDivider = 2.5,
        saturnScaleDivider = 3.75,
        uranusScaleDivider = 6.3,
        neptuneScaleDivider = 8.7,
        current = new Date,
        DAY = current.getDate(),
        MONTH = current.getMonth() + 1,
        YEAR = current.getFullYear(),
        T = getT(getJulianDate(YEAR, MONTH, DAY), "J2000"),
        renderBackground()),
        telescopeMode && collidePointRect(mouseX, mouseY, startScreenX, startScreenY, startScreenWidth, startScreenHeight) && (telescopeMode = !1),
        infoMode && collidePointRect(mouseX, mouseY, startScreenX, startScreenY, startScreenWidth, startScreenHeight) && (infoMode = !1),
        !mobileDevice && collidePointRect(mouseX, mouseY, fullscreenImgX, fullscreenImgY, fullscreenImg.width, fullscreenImg.height) && (fullscreenMode ? (fullscreenMode = !1,
        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()) : (fullscreenMode = !0,
        requestFullScreen(document.body)));}
  else if ( collidePointRect( mouseX, mouseY, fullscreenImgX, fullscreenImgY, fullscreenImg.width, fullscreenImg.height ) )
    {mobileDevice || (fullscreenMode ? (fullscreenMode = !1,
        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(),
        document.getElementById("websitebody").style.display = "block") : (fullscreenMode = !0,
        requestFullScreen(document.body),
        document.getElementById("websitebody").style.display = "none"));}
  else if ( collidePointRect( mouseX, mouseY, zoomImgX - mobileAdjustX + mobileExtraX - mobilePadding - mobilezoomAdjustX, zoomImgY - mobilePadding, ( zoomoutImg.width + mobilePadding ) * mobileMultiplier, ( zoomoutImg.height + mobilePadding ) * mobileMultiplier ) )
    {scale == zoomedoutscale ? (zoomedin = !0,
        renderBackground()) : scale == zoomedinscale ? (zoomedin = !1,
        renderBackground()) : scale == zoomedoutscaleActual && (zoomedin = !0,
        renderBackground()),
        voyagerMode = !1;}
  else if ( collidePointRect( mouseX, mouseY, scaleImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobilePadding, scaleImgY - mobilePadding, ( scaleCompressedImg.width + mobilePadding ) * mobileMultiplier, ( scaleCompressedImg.height + mobilePadding ) * mobileMultiplier ) )
    {scale >= zoomedoutscale && (scaleCompressed ? topView && (scaleCompressed = !1,
        neptuneScaleDivider = uranusScaleDivider = saturnScaleDivider = jupiterScaleDivider = 1,
        renderBackground()) : (scaleCompressed = !0,
        jupiterScaleDivider = 2.5,
        saturnScaleDivider = 3.75,
        uranusScaleDivider = 6.3,
        neptuneScaleDivider = 8.7,
        renderBackground())),
        voyagerMode = !1;}
  else if ( collidePointRect( mouseX, mouseY, telescopeImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobileExtraX3 - mobileExtraX4 - mobilePadding, telescopeImgY - mobilePadding, ( telescopeImg.width + mobilePadding ) * mobileMultiplier, ( telescopeImg.height + mobilePadding ) * mobileMultiplier ) )
    {telescopeMode = !0;}
  else if ( collidePointRect( mouseX, mouseY, topviewImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobileExtraX3 - mobilePadding, topviewImgY - mobilePadding, ( topViewImg.width + mobilePadding ) * mobileMultiplier, ( topViewImg.height + mobilePadding ) * mobileMultiplier ) )
    {runningmission1996 || runningmission2003 || runningmission2011 || runningmission2018 || (firstOppositionFrame = !0,
        voyagerMode = oppositionMode = !1,
        topView ? (topView = !1,
        scaleCompressed = !0,
        jupiterScaleDivider = 2.5,
        saturnScaleDivider = 3.75,
        uranusScaleDivider = 6.3,
        neptuneScaleDivider = 8.7,
        scale < zoomedoutscale && (scale = zoomedoutscale)) : topView = !0,
        renderBackground());}
  else if ( collidePointRect( mouseX, mouseY, infoImgX - mobileAdjustX - mobileExtraX - mobileExtraX2 - mobileExtraX3 - mobileExtraX4 - mobileExtraX5 - mobilePadding, infoImgY - mobilePadding, ( infoImg.width + mobilePadding ) * mobileMultiplier, ( infoImg.height + mobilePadding ) * mobileMultiplier ) ) {
    if ( runningmission1996 || runningmission2003 || runningmission2011 || runningmission2018 )
      {infoMode = !0};
  } else
    {collidePointRect(mouseX, mouseY, nextImgX, nextImgY * mobileMultiplier, nextImg.width * mobileMultiplier, playImg.height * mobileMultiplier) ? oppositionMode && (nextButtonHighlight = !0,
        playing = voyagerMode = !1,
        firstOppositionFrame = !0,
        runningmission2018 = runningmission2011 = runningmission2003 = runningmission1996 = !1,
        conjunctionOppositionDatesRunning = nextConjunctionOppositionCalc(planetInfoIndex, !0, !0),
        setDate(conjunctionOppositionDatesRunning[0], conjunctionOppositionDatesRunning[1], conjunctionOppositionDatesRunning[2]),
        nextMode = !0) : collidePointRect(mouseX, mouseY, XVoyagerI - planetPadding, YVoyagerI - planetPadding, 2 * planetPadding, 2 * planetPadding) ? (voyagerMode = !0,
        playing = runningmission2018 = runningmission2011 = runningmission2003 = runningmission1996 = firstOppositionFrame = oppositionMode = !1,
        setDate(1990, 2, 14),
        renderBackground()) : collidePointRect(mouseX, mouseY, pauseImgX, pauseImgY, pauseImg.width * mobileMultiplier, pauseImg.height * mobileMultiplier) ? (playing ? playing = !1 : (playing = !0,
        firstOppositionFrame = !1,
        current >= landingDate1996 && (runningmission1996 = !1),
        current >= landingDate2003 && (runningmission2003 = !1),
        current >= landingDate2011 && (runningmission2011 = !1),
        current >= landingDate2018 && (runningmission2018 = !1),
        renderBackground()),
        voyagerMode = !1) : collidePointRect(mouseX, mouseY, detailImgX, detailImgY, detailImg.width, detailImg.height) ? !mobileDevice && 2 != planetInfoIndex && 10 != planetInfoIndex && topView && (playing = !1,
        oppositionMode = !0,
        voyagerMode = !1,
        firstOppositionFrame = !0,
        runningmission2018 = runningmission2011 = runningmission2003 = runningmission1996 = !1,
        setDate(conjunctionOppositionDates[planetInfoIndex][0], conjunctionOppositionDates[planetInfoIndex][1], conjunctionOppositionDates[planetInfoIndex][2])) : collidePointRect(mouseX, mouseY, orreryWidth, 99, 180, 75) ? (playing = !1,
        runningmission1996 = !0,
        firstOppositionFrame = voyagerMode = oppositionMode = runningmission2018 = runningmission2011 = runningmission2003 = !1,
        topView = !0,
        planetInfoIndex = 10,
        setDate(1996, 12, 4),
        launchPoint = plotPlanet(2, 1996, 12, 4, !1),
        launchPointMars = plotPlanet(3, 1996, 12, 4, !1),
        landingPoint = plotPlanet(3, 1997, 7, 4, !1),
        zoomedin = !0,
        mobileDevice && (scale = zoomedinscale),
        scaleCompressed = !1,
        neptuneScaleDivider = uranusScaleDivider = saturnScaleDivider = jupiterScaleDivider = 1,
        renderBackground(),
        xDeltaPF = Math.abs((orreryWidth / 2 + launchPoint[0] * scale + (orreryWidth / 2 + landingPoint[0] * scale)) / 2 - (orreryWidth / 2 + launchPoint[0] * scale)),
        yDeltaPF = Math.abs((canvas.height / 2 - launchPoint[1] * scale + (canvas.height / 2 - landingPoint[1] * scale)) / 2 - (canvas.height / 2 - launchPoint[1] * scale)),
        semimajorPF = Math.sqrt(Math.pow(xDeltaPF, 2) + Math.pow(yDeltaPF, 2)) / scale,
        ePF = 1 - launchPoint[7] / semimajorPF,
        semiminorPF = Math.sqrt(1 - Math.pow(ePF, 2)) * semimajorPF,
        flighttimePF = Math.pow(semimajorPF, 2 / 3) / 2 * 365,
        missionDay = missionRot = 0,
        updateAllPlanets(),
        XMars = landingPoint[0],
        YMars = landingPoint[1],
        sweepAngle = calculateCurrentPhaseAngleEarthMars(),
        updateAllPlanets(),
        phaseAngleAtDeparture = calculateCurrentPhaseAngleEarthMars()) : collidePointRect(mouseX, mouseY, orreryWidth, 176, 180, 75) ? (runningmission1996 = playing = !1,
        runningmission2003 = !0,
        firstOppositionFrame = voyagerMode = oppositionMode = runningmission2018 = runningmission2011 = !1,
        topView = !0,
        planetInfoIndex = 10,
        setDate(2003, 7, 7),
        launchPoint = plotPlanet(2, 2003, 7, 7, !1),
        launchPointMars = plotPlanet(3, 2003, 7, 7, !1),
        landingPoint = plotPlanet(3, 2004, 1, 25, !1),
        zoomedin = !0,
        mobileDevice && (scale = zoomedinscale),
        scaleCompressed = !1,
        neptuneScaleDivider = uranusScaleDivider = saturnScaleDivider = jupiterScaleDivider = 1,
        renderBackground(),
        xDeltaPF = Math.abs((orreryWidth / 2 + launchPoint[0] * scale + (orreryWidth / 2 + landingPoint[0] * scale)) / 2 - (orreryWidth / 2 + launchPoint[0] * scale)),
        yDeltaPF = Math.abs((canvas.height / 2 - launchPoint[1] * scale + (canvas.height / 2 - landingPoint[1] * scale)) / 2 - (canvas.height / 2 - launchPoint[1] * scale)),
        semimajorPF = Math.sqrt(Math.pow(xDeltaPF, 2) + Math.pow(yDeltaPF, 2)) / scale,
        ePF = 1 - launchPoint[7] / semimajorPF,
        semiminorPF = Math.sqrt(1 - Math.pow(ePF, 2)) * semimajorPF,
        flighttimePF = Math.pow(semimajorPF, 2 / 3) / 2 * 365,
        missionDay = missionRot = 0,
        updateAllPlanets(),
        XMars = landingPoint[0],
        YMars = landingPoint[1],
        sweepAngle = calculateCurrentPhaseAngleEarthMars(),
        updateAllPlanets(),
        phaseAngleAtDeparture = calculateCurrentPhaseAngleEarthMars()) : collidePointRect(mouseX, mouseY, orreryWidth, 253, 180, 75) ? (runningmission2003 = runningmission1996 = playing = !1,
        runningmission2011 = !0,
        firstOppositionFrame = voyagerMode = oppositionMode = runningmission2018 = !1,
        topView = !0,
        planetInfoIndex = 10,
        setDate(2011, 11, 26),
        launchPoint = plotPlanet(2, 2011, 11, 26, !1),
        launchPointMars = plotPlanet(3, 2011, 11, 26, !1),
        landingPoint = plotPlanet(3, 2012, 8, 6, !1),
        zoomedin = !0,
        mobileDevice && (scale = zoomedinscale),
        scaleCompressed = !1,
        neptuneScaleDivider = uranusScaleDivider = saturnScaleDivider = jupiterScaleDivider = 1,
        renderBackground(),
        xDeltaPF = Math.abs((orreryWidth / 2 + launchPoint[0] * scale + (orreryWidth / 2 + landingPoint[0] * scale)) / 2 - (orreryWidth / 2 + launchPoint[0] * scale)),
        yDeltaPF = Math.abs((canvas.height / 2 - launchPoint[1] * scale + (canvas.height / 2 - landingPoint[1] * scale)) / 2 - (canvas.height / 2 - launchPoint[1] * scale)),
        semimajorPF = Math.sqrt(Math.pow(xDeltaPF, 2) + Math.pow(yDeltaPF, 2)) / scale,
        ePF = 1 - launchPoint[7] / semimajorPF,
        semiminorPF = Math.sqrt(1 - Math.pow(ePF, 2)) * semimajorPF,
        flighttimePF = Math.pow(semimajorPF, 2 / 3) / 2 * 365,
        missionDay = missionRot = 0,
        updateAllPlanets(),
        XMars = landingPoint[0],
        YMars = landingPoint[1],
        sweepAngle = calculateCurrentPhaseAngleEarthMars(),
        updateAllPlanets(),
        phaseAngleAtDeparture = calculateCurrentPhaseAngleEarthMars()) : collidePointRect(mouseX, mouseY, orreryWidth, 330, 180, 75) ? (runningmission2011 = runningmission2003 = runningmission1996 = playing = !1,
        runningmission2018 = !0,
        firstOppositionFrame = voyagerMode = oppositionMode = !1,
        topView = !0,
        planetInfoIndex = 10,
        setDate(2018, 5, 5),
        launchPoint = plotPlanet(2, 2018, 5, 5, !1),
        launchPointMars = plotPlanet(3, 2018, 5, 5, !1),
        landingPoint = plotPlanet(3, 2018, 11, 26, !1),
        zoomedin = !0,
        mobileDevice && (scale = zoomedinscale),
        scaleCompressed = !1,
        neptuneScaleDivider = uranusScaleDivider = saturnScaleDivider = jupiterScaleDivider = 1,
        renderBackground(),
        xDeltaPF = Math.abs((orreryWidth / 2 + launchPoint[0] * scale + (orreryWidth / 2 + landingPoint[0] * scale)) / 2 - (orreryWidth / 2 + launchPoint[0] * scale)),
        yDeltaPF = Math.abs((canvas.height / 2 - launchPoint[1] * scale + (canvas.height / 2 - landingPoint[1] * scale)) / 2 - (canvas.height / 2 - launchPoint[1] * scale)),
        semimajorPF = Math.sqrt(Math.pow(xDeltaPF, 2) + Math.pow(yDeltaPF, 2)) / scale,
        ePF = 1 - launchPoint[7] / semimajorPF,
        semiminorPF = Math.sqrt(1 - Math.pow(ePF, 2)) * semimajorPF,
        flighttimePF = Math.pow(semimajorPF, 2 / 3) / 2 * 365,
        missionDay = missionRot = 0,
        updateAllPlanets(),
        XMars = landingPoint[0],
        YMars = landingPoint[1],
        sweepAngle = calculateCurrentPhaseAngleEarthMars(),
        updateAllPlanets(),
        phaseAngleAtDeparture = calculateCurrentPhaseAngleEarthMars()) : topView ? (collidePointRect(mouseX, mouseY, orreryWidth / 2 + XMercury * scale - (5 + 4879 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - YMercury * scale - (5 + 4879 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 4879 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 4879 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 0,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : collidePointRect(mouseX, mouseY, orreryWidth / 2 + XVenus * scale - (5 + 12104 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - YVenus * scale - (5 + 12104 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 12104 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 12104 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 1,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : collidePointRect(mouseX, mouseY, orreryWidth / 2 + XEarth * scale - (5 + 12756 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - YEarth * scale - (5 + 12756 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 12756 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 12756 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 2,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : collidePointRect(mouseX, mouseY, orreryWidth / 2 + XMars * scale - (5 + 6792 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - YMars * scale - (5 + 6792 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 6792 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 6792 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 3,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : collidePointRect(mouseX, mouseY, orreryWidth / 2 + XJupiter * scale / jupiterScaleDivider - (5 + 142984 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - YJupiter * scale / jupiterScaleDivider - (5 + 142984 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 142984 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 142984 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 4,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : collidePointRect(mouseX, mouseY, orreryWidth / 2 + XSaturn * scale / saturnScaleDivider - (5 + 120536 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - YSaturn * scale / saturnScaleDivider - (5 + 120536 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 120536 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 120536 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 5,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : collidePointRect(mouseX, mouseY, orreryWidth / 2 + XUranus * scale / uranusScaleDivider - (5 + 51118 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - YUranus * scale / uranusScaleDivider - (5 + 51118 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 51118 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 51118 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 6,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : collidePointRect(mouseX, mouseY, orreryWidth / 2 + XNeptune * scale / neptuneScaleDivider - (5 + 49528 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - YNeptune * scale / neptuneScaleDivider - (5 + 49528 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 49528 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 49528 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 7,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : (planetInfoIndex = 10,
        voyagerMode = nextMode = firstOppositionFrame = oppositionMode = !1),
        renderBackground()) : topView || (collidePointRect(mouseX, mouseY, orreryWidth / 2 + XMercury * scale - (5 + 4879 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZMercury * scale - (5 + 4879 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 4879 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 4879 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 0,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : collidePointRect(mouseX, mouseY, orreryWidth / 2 + XVenus * scale - (5 + 12104 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZVenus * scale - (5 + 12104 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 12104 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 12104 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 1,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : collidePointRect(mouseX, mouseY, orreryWidth / 2 + XEarth * scale - (5 + 12756 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZEarth * scale - (5 + 12756 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 12756 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 12756 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 2,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : collidePointRect(mouseX, mouseY, orreryWidth / 2 + XMars * scale - (5 + 6792 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZMars * scale - (5 + 6792 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 6792 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 6792 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 3,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : collidePointRect(mouseX, mouseY, orreryWidth / 2 + XJupiter * scale / jupiterScaleDivider - (5 + 142984 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZJupiter * scale / jupiterScaleDivider - (5 + 142984 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 142984 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 142984 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 4,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : collidePointRect(mouseX, mouseY, orreryWidth / 2 + XSaturn * scale / saturnScaleDivider - (5 + 120536 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZSaturn * scale / saturnScaleDivider - (5 + 120536 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 120536 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 120536 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 5,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : collidePointRect(mouseX, mouseY, orreryWidth / 2 + XUranus * scale / uranusScaleDivider - (5 + 51118 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZUranus * scale / uranusScaleDivider - (5 + 51118 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 51118 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 51118 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 6,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : collidePointRect(mouseX, mouseY, orreryWidth / 2 + XNeptune * scale / neptuneScaleDivider - (5 + 49528 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, canvas.height / 2 - ZNeptune * scale / neptuneScaleDivider - (5 + 49528 / planetScaleAdjustment * .5) / planetSizeAdjust - planetPadding, (5 + 49528 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding, (5 + 49528 / planetScaleAdjustment * .5) / planetSizeAdjust * 2 + 2 * planetPadding) ? (planetInfoIndex = 7,
        firstOppositionFrame = voyagerMode = oppositionMode = !1) : (planetInfoIndex = 10,
        voyagerMode = nextMode = firstOppositionFrame = oppositionMode = !1),
        renderBackground())};
}
function plotPlanet( a, b, c, d, f ) {
  TGen = getT( getJulianDate( b, c, d ), 'J2000' );
  aGen = planetElements[a][0] + planetElements[a][1] * TGen;
  eGen = planetElements[a][4] + planetElements[a][5] * TGen;
  iGen = planetElements[a][6] + planetElements[a][7] * TGen;
  iGen %= 360;
  WGen = planetElements[a][10] + planetElements[a][11] * TGen;
  WGen %= 360;
  wGen = planetElements[a][8] + planetElements[a][9] * TGen;
  pGen = wGen %= 360;
  LGen = planetElements[a][2] + planetElements[a][3] * TGen;
  LGen %= 360;
  MGen = LGen - pGen;
  MGen < 0 && ( MGen = 360 + MGen );
  EGen = EccAnom( eGen, MGen, 6 );
  trueAnomalyArgGen = Math.sqrt( ( 1 + eGen ) / ( 1 - eGen ) ) * Math.tan( toRadians( EGen ) / 2 );
  nGen = trueAnomalyArgGen < 0 ? 2 * ( Math.atan( trueAnomalyArgGen ) / K + 180 ) : Math.atan( trueAnomalyArgGen ) / K * 2;
  rGen = aGen * ( 1 - eGen * Math.cos( toRadians( EGen ) ) );
  xGen = rGen * ( Math.cos( toRadians( WGen ) ) * Math.cos( toRadians( wGen + nGen - WGen ) ) - Math.sin( toRadians( WGen ) ) * Math.sin( toRadians( wGen + nGen - WGen ) ) * Math.cos( toRadians( iGen ) ) );
  yGen = rGen * ( Math.sin( toRadians( WGen ) ) * Math.cos( toRadians( wGen + nGen - WGen ) ) + Math.cos( toRadians( WGen ) ) * Math.sin( toRadians( wGen + nGen - WGen ) ) * Math.cos( toRadians( iGen ) ) );
  zGen = rGen * Math.sin( toRadians( wGen + nGen - WGen ) ) * Math.sin( toRadians( iGen ) );
  XGen = xGen;
  YGen = yGen;
  ZGen = zGen;
  return [XGen, YGen, ZGen, aGen, eGen, MGen, nGen, rGen, LGen, WGen, wGen, iGen, EGen, pGen, zGen, yGen];
}
function updateAllPlanets() {
  orbitalElements = plotPlanet( 0, YEAR, MONTH, DAY, !1 );
  XMercury = orbitalElements[0];
  YMercury = orbitalElements[1];
  ZMercury = orbitalElements[2];
  aMercury = orbitalElements[3];
  eMercury = orbitalElements[4];
  MMercury = orbitalElements[5];
  nMercury = orbitalElements[6];
  rMercury = orbitalElements[7];
  LMercury = orbitalElements[8];
  WMercury = orbitalElements[9];
  wMercury = orbitalElements[10];
  iMercury = orbitalElements[11];
  EMercury = orbitalElements[12];
  pMercury = orbitalElements[13];
  zMercury = orbitalElements[14];
  yMercury = orbitalElements[15];
  orbitalElements = plotPlanet( 1, YEAR, MONTH, DAY, !1 );
  XVenus = orbitalElements[0];
  YVenus = orbitalElements[1];
  ZVenus = orbitalElements[2];
  aVenus = orbitalElements[3];
  eVenus = orbitalElements[4];
  MVenus = orbitalElements[5];
  nVenus = orbitalElements[6];
  rVenus = orbitalElements[7];
  LVenus = orbitalElements[8];
  WVenus = orbitalElements[9];
  wVenus = orbitalElements[10];
  iVenus = orbitalElements[11];
  EVenus = orbitalElements[12];
  pVenus = orbitalElements[13];
  zVenus = orbitalElements[14];
  yVenus = orbitalElements[15];
  orbitalElements = plotPlanet( 2, YEAR, MONTH, DAY, !1 );
  XEarth = orbitalElements[0];
  YEarth = orbitalElements[1];
  ZEarth = orbitalElements[2];
  aEarth = orbitalElements[3];
  eEarth = orbitalElements[4];
  MEarth = orbitalElements[5];
  nEarth = orbitalElements[6];
  rEarth = orbitalElements[7];
  LEarth = orbitalElements[8];
  WEarth = orbitalElements[9];
  wEarth = orbitalElements[10];
  iEarth = orbitalElements[11];
  EEarth = orbitalElements[12];
  pEarth = orbitalElements[13];
  zEarth = orbitalElements[14];
  yEarth = orbitalElements[15];
  orbitalElements = plotPlanet( 3, YEAR, MONTH, DAY, !1 );
  XMars = orbitalElements[0];
  YMars = orbitalElements[1];
  ZMars = orbitalElements[2];
  aMars = orbitalElements[3];
  eMars = orbitalElements[4];
  MMars = orbitalElements[5];
  nMars = orbitalElements[6];
  rMars = orbitalElements[7];
  LMars = orbitalElements[8];
  WMars = orbitalElements[9];
  wMars = orbitalElements[10];
  iMars = orbitalElements[11];
  EMars = orbitalElements[12];
  pMars = orbitalElements[13];
  zMars = orbitalElements[14];
  yMars = orbitalElements[15];
  orbitalElements = plotPlanet( 4, YEAR, MONTH, DAY, !1 );
  XJupiter = orbitalElements[0];
  YJupiter = orbitalElements[1];
  ZJupiter = orbitalElements[2];
  aJupiter = orbitalElements[3];
  eJupiter = orbitalElements[4];
  MJupiter = orbitalElements[5];
  nJupiter = orbitalElements[6];
  rJupiter = orbitalElements[7];
  LJupiter = orbitalElements[8];
  WJupiter = orbitalElements[9];
  wJupiter = orbitalElements[10];
  iJupiter = orbitalElements[11];
  EJupiter = orbitalElements[12];
  pJupiter = orbitalElements[13];
  zJupiter = orbitalElements[14];
  yJupiter = orbitalElements[15];
  orbitalElements = plotPlanet( 5, YEAR, MONTH, DAY, !1 );
  XSaturn = orbitalElements[0];
  YSaturn = orbitalElements[1];
  ZSaturn = orbitalElements[2];
  aSaturn = orbitalElements[3];
  eSaturn = orbitalElements[4];
  MSaturn = orbitalElements[5];
  nSaturn = orbitalElements[6];
  rSaturn = orbitalElements[7];
  LSaturn = orbitalElements[8];
  WSaturn = orbitalElements[9];
  wSaturn = orbitalElements[10];
  iSaturn = orbitalElements[11];
  ESaturn = orbitalElements[12];
  pSaturn = orbitalElements[13];
  zSaturn = orbitalElements[14];
  ySaturn = orbitalElements[15];
  orbitalElements = plotPlanet( 6, YEAR, MONTH, DAY, !1 );
  XUranus = orbitalElements[0];
  YUranus = orbitalElements[1];
  ZUranus = orbitalElements[2];
  aUranus = orbitalElements[3];
  eUranus = orbitalElements[4];
  MUranus = orbitalElements[5];
  nUranus = orbitalElements[6];
  rUranus = orbitalElements[7];
  LUranus = orbitalElements[8];
  WUranus = orbitalElements[9];
  wUranus = orbitalElements[10];
  iUranus = orbitalElements[11];
  EUranus = orbitalElements[12];
  pUranus = orbitalElements[13];
  zUranus = orbitalElements[14];
  yUranus = orbitalElements[15];
  orbitalElements = plotPlanet( 7, YEAR, MONTH, DAY, !1 );
  XNeptune = orbitalElements[0];
  YNeptune = orbitalElements[1];
  ZNeptune = orbitalElements[2];
  aNeptune = orbitalElements[3];
  eNeptune = orbitalElements[4];
  MNeptune = orbitalElements[5];
  nNeptune = orbitalElements[6];
  rNeptune = orbitalElements[7];
  LNeptune = orbitalElements[8];
  WNeptune = orbitalElements[9];
  wNeptune = orbitalElements[10];
  iNeptune = orbitalElements[11];
  ENeptune = orbitalElements[12];
  pNeptune = orbitalElements[13];
  zNeptune = orbitalElements[14];
  yNeptune = orbitalElements[15];
  orbitalElements = plotPlanet( 8, YEAR, MONTH, DAY, !0 );
  XPath = orbitalElements[0];
  YPath = orbitalElements[1];
  ZPath = orbitalElements[2];
  aPath = orbitalElements[3];
  ePath = orbitalElements[4];
  MPath = orbitalElements[5];
  nPath = orbitalElements[6];
  rPath = orbitalElements[7];
  LPath = orbitalElements[8];
  WPath = orbitalElements[9];
  wPath = orbitalElements[10];
  iPath = orbitalElements[11];
  EPath = orbitalElements[12];
  pPath = orbitalElements[13];
  zPath = orbitalElements[14];
  yPath = orbitalElements[15];
}
function intersectCalc() {
  solarConjunction = collideLineCircle( orreryWidth / 2 + conjunctionOppositionDatesRunning[4] * scale / conjunctionOppositionDatesRunning[6], canvas.height / 2 - conjunctionOppositionDatesRunning[5] * scale / conjunctionOppositionDatesRunning[6], orreryWidth / 2 + XEarth * scale, canvas.height / 2 - YEarth * scale, orreryWidth / 2, canvas.height / 2, 20 / planetSizeAdjust );
}
function updateDate( a ) {
  current = newDate = new Date( current.getFullYear(), current.getMonth(), current.getDate() + a );
  newdd = newDate.getDate();
  newmm = newDate.getMonth() + 1;
  YEAR = newyyyy = newDate.getFullYear();
  MONTH = newmm;
  DAY = newdd;
  T = getT( getJulianDate( YEAR, MONTH, DAY ), 'J2000' );
}
function setDate( a, b, c ) {
  YEAR = a;
  MONTH = b;
  DAY = c;
  T = getT( getJulianDate( a, b, c ), 'J2000' );
  current = newDate = new Date( a, b - 1, c );
}
function nextConjunctionOppositionCalc( a, b, c ) {
  let d, 
f = 0, 
g = !1, 
h = !1;
  switch ( a ) {
    case 0:
      var e = 1;
      break;
    case 1:
      e = 1;
      break;
    case 2:
      e = 1;
      break;
    case 3:
      e = 1;
      break;
    case 4:
      e = jupiterScaleDivider;
      break;
    case 5:
      e = saturnScaleDivider;
      break;
    case 6:
      e = uranusScaleDivider;
      break;
    case 7:
      e = neptuneScaleDivider;
  }
  if ( b )
    {for (c || (current = new Date,
        DAY = current.getDate(),
        MONTH = current.getMonth() + 1,
        YEAR = current.getFullYear()),
        b = plotPlanet(2, YEAR, MONTH, DAY, !1),
        c = plotPlanet(a, YEAR, MONTH, DAY, !1); !g; )
            xDeltaCO = Math.abs(orreryWidth / 2 + c[0] * scale - (orreryWidth / 2 + b[0] * scale)),
            yDeltaCO = Math.abs(canvas.height / 2 - c[1] * scale - (canvas.height / 2 - b[1] * scale)),
            distanceCO = Math.sqrt(Math.pow(xDeltaCO, 2) + Math.pow(yDeltaCO, 2)) / scale,
            0 == f && (d = distanceCO),
            5 == f && (distanceCO < d ? h = !0 : closeCO = !1),
            6 <= f && (h ? distanceCO <= d || (g = !0) : distanceCO > d || (h = !0)),
            d = distanceCO,
            f++,
            updateDate(1),
            b = plotPlanet(2, YEAR, MONTH, DAY, !1),
            c = plotPlanet(a, YEAR, MONTH, DAY, !1);}
  else
    {b = plotPlanet(2, YEAR, MONTH, DAY, !1),
        c = plotPlanet(a, YEAR, MONTH, DAY, !1),
        xDeltaCO = Math.abs(orreryWidth / 2 + c[0] * scale - (orreryWidth / 2 + b[0] * scale)),
        yDeltaCO = Math.abs(canvas.height / 2 - c[1] * scale - (canvas.height / 2 - b[1] * scale)),
        distanceCO = Math.sqrt(Math.pow(xDeltaCO, 2) + Math.pow(yDeltaCO, 2)) / scale;}
  return [YEAR, MONTH, DAY, distanceCO, c[0], c[1], e];
}
function calculateCurrentPhaseAngleEarthMars() {
  let a = Math.pow( sunMarsDistanceCalc(), 2 ) + Math.pow( sunEarthDistanceCalc(), 2 ) - Math.pow( earthMarsDistanceCalc(), 2 ),
       b = 2 * sunMarsDistanceCalc() * sunEarthDistanceCalc();
  return toDegrees( Math.acos( a / b ) );
}
function neptuneDistanceCalc() {
  xDeltaNeptune = Math.abs( orreryWidth / 2 - ( orreryWidth / 2 + XNeptune * scale ) );
  yDeltaNeptune = Math.abs( canvas.height / 2 - ( canvas.height / 2 - YNeptune * scale ) );
  distanceNeptune = Math.sqrt( Math.pow( xDeltaNeptune, 2 ) + Math.pow( yDeltaNeptune, 2 ) ) / scale;
}
function sunMarsDistanceCalc() {
  return Math.sqrt( Math.pow( Math.abs( orreryWidth / 2 - ( orreryWidth / 2 + XMars * scale ) ), 2 ) + Math.pow( Math.abs( canvas.height / 2 - ( canvas.height / 2 - YMars * scale ) ), 2 ) ) / scale;
}
function sunEarthDistanceCalc() {
  return Math.sqrt( Math.pow( Math.abs( orreryWidth / 2 - ( orreryWidth / 2 + XEarth * scale ) ), 2 ) + Math.pow( Math.abs( canvas.height / 2 - ( canvas.height / 2 - YEarth * scale ) ), 2 ) ) / scale;
}
function earthMarsDistanceCalc() {
  return Math.sqrt( Math.pow( Math.abs( orreryWidth / 2 + XMars * scale - ( orreryWidth / 2 + XEarth * scale ) ), 2 ) + Math.pow( Math.abs( canvas.height / 2 - YMars * scale - ( canvas.height / 2 - YEarth * scale ) ), 2 ) ) / scale;
}
function parseDate( a ) {
  a = a.match( /(\d+)/g );
  return new Date( a[0], a[1] - 1, a[2] );
}
function calculateHabitableZoneStar() {
  let a = -26.74 - 5 * Math.log10( AUValue / 3085677581E4 / 10 ) - 0.107;
  a = Math.pow( 10, ( a - a ) / -2.5 );
  return [Math.sqrt( a / 1.1 ), Math.sqrt( a / 0.53 )];
}
function log10( a ) {
  return Math.log( a ) / Math.LN10;
}
function calculateOrbitalSpeed( a, b, c, d, f ) {
  a *= AUValue;
  let g = Math.sqrt( 1 - Math.pow( b, 2 ) ) * a;
  b = Math.sqrt( Math.pow( a, 2 ) - Math.pow( g, 2 ) );
  b = a * Math.cos( toRadians( c ) ) - b;
  c = g * Math.sin( toRadians( c ) );
  g = 0;
  'KM/H' == d ? g = 3600 * Math.sqrt( GMSun * ( 2 / ( Math.sqrt( Math.pow( b, 2 ) + Math.pow( c, 2 ) ) * Math.pow( 10, 9 ) ) - 1 / ( a * Math.pow( 10, 9 ) ) ) ) : 'KM/S' == d && ( g = Math.sqrt( GMSun * ( 2 / ( Math.sqrt( Math.pow( b, 2 ) + Math.pow( c, 2 ) ) * Math.pow( 10, 9 ) ) - 1 / ( a * Math.pow( 10, 9 ) ) ) ) );
  return round( g, f );
}
function dateDiffInDays( a, b ) {
  let c = Date.UTC( a.getFullYear(), a.getMonth(), a.getDate() ),
       d = Date.UTC( b.getFullYear(), b.getMonth(), b.getDate() );
  return Math.floor( ( d - c ) / 864E5 );
}
function numberWithCommas( a ) {
  return a.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' );
}
function doMouseDown( a ) {
  buttonClicked( mouseX, mouseY );
}
function onMouseMove( a ) {
  coords = canvas.relMouseCoords( a );
  mouseX = coords.x + canvas.width / 2;
  mouseY = coords.y + canvas.height / 2;
  mobileDevice && ( mouseX = a.offsetX,
  mouseY = a.offsetY );
  buttonHovered();
}
function doMouseWheel( a ) {
  playing && ( mouseDelta = a.wheelDelta ? a.wheelDelta : -a.detail,
  mouseDelta > 0 ? updateDate( 1 ) : mouseDelta < 0 && updateDate( -1 ),
  mouseDelta = 0 );
}
function doKeyDown( a ) {
  switch ( a.keyCode ) {
    case 37:
      keyLeft = !0;
      break;
    case 39:
      keyRight = !0;
      break;
    case 38:
      keyUp = !0;
      break;
    case 40:
      keyDown = !0;
      break;
    case 32:
      keySpace = !0;
  }
}
function doKeyUp( a ) {
  switch ( a.keyCode ) {
    case 37:
      keyLeft = !1;
      break;
    case 39:
      keyRight = !1;
      break;
    case 38:
      keyUp = !1;
      break;
    case 40:
      keyDown = !1;
      break;
    case 32:
      keySpace = !1;
  }
}
function collidePointCircle( a, b, c, d, f ) {
  return dist( a, b, c, d ) <= f / 2 ? !0 : !1;
}
function collidePointLine( a, b, c, d, f, g, h ) {
  let e = dist( a, b, c, d );
  a = dist( a, b, f, g );
  c = dist( c, d, f, g );
  void 0 === h && ( h = 0.1 );
  return e + a >= c - h && e + a <= c + h ? !0 : !1;
}
function dist( a, b, c, d, f, g ) {
  if ( arguments.length === 4 )
    {return Math.hypot(c - a, d - b);}
  if ( arguments.length === 6 )
    {return Math.hypot(d - a, f - b, g - c)};
}
function collideLineCircle( a, b, c, d, f, g, h ) {
  let e = collidePointCircle( a, b, f, g, h ),
       k = collidePointCircle( c, d, f, g, h );
  if ( e || k )
    {return !0;}
  e = a - c;
  k = b - d;
  k = ( ( f - a ) * ( c - a ) + ( g - b ) * ( d - b ) ) / Math.pow( Math.sqrt( e * e + k * k ), 2 );
  e = a + k * ( c - a );
  k = b + k * ( d - b );
  if ( !collidePointLine( e, k, a, b, c, d ) )
    {return !1;}
  e -= f;
  k -= g;
  return Math.sqrt( e * e + k * k ) <= h / 2 ? !0 : !1;
}
function collidePointRect( a, b, c, d, f, g ) {
  return a >= c && a <= c + f && b >= d && b <= d + g ? !0 : !1;
}
function requestFullScreen( a ) {
  let b = a.requestFullScreen || a.webkitRequestFullScreen || a.mozRequestFullScreen || a.msRequestFullScreen;
  b ? b.call( a ) : 'undefined' !== typeof window.ActiveXObject && ( a = new ActiveXObject( 'WScript.Shell' ),
  a !== null && a.SendKeys( '{F11}' ) );
}
function imageWait() {
  imagesLoaded++;
  imagesLoaded == totalImages && ( init(),
  run() );
}
function renderAxialTilt( a, b, c, d, f, g ) {
  a.save();
  a.beginPath();
  a.translate( orreryWidth / 2 + b * scale, canvas.height / 2 - c * scale );
  a.rotate( toRadians( d ) );
  a.lineWidth = 1;
  a.strokeStyle = 'goldenrod';
  b = scale / 200 * ( 25 + g + f / 2370 * 1 );
  a.moveTo( 0, 0 - b / 2 );
  a.lineTo( 0, 0 - b / 2 + b );
  a.stroke();
  renderPoint( 0, 0 - b / 2, scale / 200 * 1, 0, 2 * Math.PI, !0, 'goldenrod', 'goldenrod', a );
  a.restore();
}
function renderTransferOrbit( a, b, c, d, f, g, h, e, k, m, r, p, n ) {
  avgSpeedProbe = ( r + p ) / 2;
  ePF2 = 1 - launchPoint[7] / h;
  semiminorPF2 = Math.sqrt( 1 - Math.pow( ePF2, 2 ) ) * h;
  a.save();
  a.beginPath();
  a.translate( orreryWidth / 2 + b * scale, canvas.height / 2 - c * scale );
  a.rotate( toRadians( g ) );
  n || ( a.setLineDash( [1, 0] ),
  a.beginPath(),
  a.lineWidth = 1,
  a.strokeStyle = 'Goldenrod',
  a.ellipse( 0 - h * scale, 0, h * scale, semiminorPF2 * scale, 0, 0, toRadians( e ), !0 ),
  a.stroke(),
  a.closePath(),
  a.setLineDash( [2, 3] ),
  a.beginPath(),
  a.lineWidth = 1,
  a.strokeStyle = 'Goldenrod',
  a.ellipse( 0 - h * scale, 0, h * scale, semiminorPF2 * scale, 0, 0, toRadians( 360 ), !0 ),
  a.stroke(),
  a.setLineDash( [1, 0] ) );
  n && ( playing && ( missionRot += k / m * ( speedSpacecraft / avgSpeedProbe ) ),
  scale >= 100 && renderPoint( 0 - 1 * h * scale + ( 0 - 1 * h * scale ) * Math.cos( toRadians( 180 + missionRot ) ), 0 + semiminorPF2 * scale * Math.sin( toRadians( 180 + missionRot ) ), 5, 0, 2 * Math.PI, !0, 'Indigo', 'RebeccaPurple', a ) );
  n || ( renderLine( 0, 0, 0 - 2 * h * scale, 0, orbitDashedColor, 1, !0, a ),
  renderPoint( 0 - 1 * h * scale + ( 0 - 1 * h * scale ) * Math.cos( toRadians( 360 ) ), 0 + semiminorPF2 * scale * Math.sin( toRadians( 360 ) ), 2, 0, 2 * Math.PI, !0, orbitPointColor, orbitPointColor, a ) );
  a.restore();
  n || ( renderPoint( orreryWidth / 2 + launchPointMars[0] * scale, canvas.height / 2 - launchPointMars[1] * scale, 2, 0, 2 * Math.PI, !0, orbitPointColor, orbitPointColor, a ),
  renderLine( orreryWidth / 2, canvas.height / 2, orreryWidth / 2 + d * scale, canvas.height / 2 - f * scale, orbitColor, 1, !1, a ),
  renderLine( orreryWidth / 2, canvas.height / 2, orreryWidth / 2 + launchPointMars[0] * scale, canvas.height / 2 - launchPointMars[1] * scale, orbitColor, 1, !1, a ) );
}
function renderHabitableZone( a, b, c, d ) {
  a.beginPath();
  a.fillStyle = mobileDevice ? '#282828' : '#0F0F0F';
  a.ellipse( orreryWidth / 2, canvas.height / 2, scale / d * c, scale / d * c, 0, 0, 2 * Math.PI, !0 );
  a.fill();
  a.closePath();
  a.beginPath();
  a.fillStyle = '#080808';
  a.ellipse( orreryWidth / 2, canvas.height / 2, scale / d * b, scale / d * b, 0, 0, 2 * Math.PI, !0 );
  a.fill();
  a.closePath();
  scale == 200 && renderText( 'CHZ', 'Arial', 'center', orreryWidth / 2 - ( scale / d * c + scale / d * b ) / 2 - 5, canvas.height / 2, 12, orbitPointColor, a );
  scale == 200 && renderText( 'CHZ', 'Arial', 'center', orreryWidth / 2 + ( scale / d * c + scale / d * b ) / 2 + 5, canvas.height / 2, 12, orbitPointColor, a );
}
function drawOrbit( planetNumber, ctx, xPeri, yPeri, a, e, lPeri, garb, k, m, r, p, n, l, t, q ) {
  // drawOrbit (1, ctx, xPeri, yPeri, a, e, lPeri)
  xPeri = Math.sqrt( 1 - Math.pow( e, 2 ) ) * a;
  yPeri = calculateFoci( a, xPeri );
  e = a * Math.cos( toRadians( lPeri ) );
  p = xPeri * Math.sin( toRadians( lPeri ) );
  ctx.save();
  ctx.beginPath();
  ctx.translate( orreryWidth / 2 + e * scale / l, canvas.height / 2 + p * scale / l );
  ctx.rotate( toRadians( lPeri ) );
  scale >= 100 && ( renderPoint( 0 - yPeri * scale / l, 0, 2, 0, 2 * Math.PI, !0, q, q, ctx ),
  renderText( 'P', 'Arial', 'center', 0 - yPeri * scale / l - 10, -7, 12, q, ctx ),
  renderPoint( 0 - ( 2 * a + yPeri ) * scale / l, 0, 2, 0, 2 * Math.PI, !0, q, q, ctx ) );
  garb && ( ctx.beginPath(),
  ctx.rect( 0 - ( 2 * a + yPeri ) * scale / l, 0 - xPeri * scale / l, 2 * a * scale / l, 2 * xPeri * scale / l ),
  ctx.lineWidth = 1,
  ctx.strokeStyle = 'GoldenRod',
  ctx.stroke(),
  ctx.closePath(),
  renderLine( 0 - ( 2 * a + yPeri ) * scale / l, 0, ( 0 - yPeri ) * scale / l, 0, 'GoldenRod', 1, !1, ctx ) );
  ctx.beginPath();
  planetInfoIndex != planetNumber ? ( ctx.strokeStyle = k,
  ctx.lineWidth = r ) : mobileDevice ? ( ctx.strokeStyle = t,
  ctx.lineWidth = 2 ) : ( ctx.strokeStyle = t,
  ctx.lineWidth = 1,
  m = !0 );
  m && ctx.setLineDash( [2, 3] );
  ctx.ellipse( 0 - scale / l * ( a + yPeri ), 0, scale / l * a, scale / l * xPeri, 0, 0, 2 * Math.PI, !0 );
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}
function renderAxisRot( a, b, c, d, f, g, h, e ) {
  e.save();
  e.beginPath();
  e.translate( a, b );
  g ? e.rotate( toRadians( rotAngle ) ) : e.rotate( toRadians( -rotAngle ) );
  e.strokeStyle = c;
  e.arc( 0, 0, h, toRadians( 90 ), toRadians( 270 ), !1 );
  e.lineWidth = 1;
  e.stroke();
  e.beginPath();
  e.lineWidth = 3;
  e.arc( 0, 0, h, toRadians( d ), toRadians( f ), !1 );
  e.stroke();
  e.restore();
}
function renderText( a, b, c, d, f, g, h, e ) {
  e.font = `${g  }px ${  b}`;
  e.textAlign = c;
  e.fillStyle = h;
  e.fillText( a, d, f );
}
function renderLine( a, b, c, d, f, g, h, e ) {
  h && e.setLineDash( [2, 3] );
  e.beginPath();
  e.lineWidth = g;
  e.moveTo( a, b );
  e.lineTo( c, d );
  e.strokeStyle = f;
  e.stroke();
  e.closePath();
  h && e.setLineDash( [1, 0] );
}
function renderPoint( a, b, c, d, f, g, h, e, k ) {
  k.beginPath();
  k.arc( a, b, c, d, f, g );
  k.fillStyle = h;
  k.fill();
  k.lineWidth = 2;
  k.strokeStyle = e;
  k.stroke();
  k.closePath();
}

