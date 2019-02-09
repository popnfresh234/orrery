const mercury = {
  display: 'Mercury',
  name: 'mercury',
  orbit: {
    elements: {
      a: 0.38709843,
      e: 0.20563661,
      i: 7.00559432,
      L: 252.25166724,
      lPeri: 77.45771895,
      lAscNode: 48.33961819,
    },
    cY: {
      a: 0.00000000,
      e: 0.00002123,
      i: -0.00590158,
      L: 149472.67486623,
      lPeri: 0.15940013,
      lAscNode: -0.12214182,
    },
  },
};

const venus = {
  display: 'Venus',
  name: 'venus',
  orbit: {
    elements: {
      a: 0.72333566,
      e: 0.00677672,
      i: 3.39467605,
      L: 181.97909950,
      lPeri: 131.60246718,
      lAscNode: 76.67984255,
    },
    cY: {
      a: 0.00000390,
      e: -0.00004107,
      i: -0.00078890,
      L: 58517.81538729,
      lPeri: 0.00268329,
      lAscNode: -0.27769418,

    },
  },
};

const mars = {
  display: 'Mars',
  name: 'mars',
  orbit: {
    elements: {
      a: 1.52371034,
      e: 0.09339410,
      i: 1.84969142,
      L: -4.55343205,
      lPeri: -23.94362959,
      lAscNode: 49.55953891,
    },
    cY: {
      a: 0.00001847,
      e: 0.00007882,
      i: -0.00813131,
      L: 19140.30268499,
      lPeri: 0.44441088,
      lAscNode: -0.29257343,
    },
  },
};

const jupiter = {
  display: 'Jupiter',
  name: 'jupiter',
  orbit: {
    elements: {
      a: 5.20288700,
      e: 0.04838624,
      i: 1.30439695,
      L: 34.39644051,
      lPeri: 14.72847983,
      lAscNode: 100.47390909,
    },
    cY: {
      a: -0.00011607,
      e: -0.00013253,
      i: -0.00183714,
      L: 3034.74612775,
      lPeri: 0.21252668,
      lAscNode: 0.20469106,
    },
  },
};

const saturn = {
  display: 'Saturn',
  name: 'saturn',
  orbit: {
    elements: {
      a: 9.53667594,
      e: 0.05386179,
      i: 2.48599187,
      L: 49.95424423,
      lPeri: 92.59887831,
      lAscNode: 113.66242448,
    },
    cY: {
      a: -0.00125060,
      e: -0.00050991,
      i: 0.00193609,
      L: 1222.49362201,
      lPeri: -0.41897216,
      lAscNode: -0.28867794,

    },
  },
};

const uranus = {
  display: 'Uranus',
  name: 'uranus',
  orbit: {
    elements: {
      a: 19.18916464,
      e: 0.04725744,
      i: 0.77263783,
      L: 313.23810451,
      lPeri: 170.95427630,
      lAscNode: 74.01692503,
    },
    cY: {
      a: -0.00196176,
      e: -0.00004397,
      i: -0.00242939,
      L: 428.48202785,
      lPeri: 0.40805281,
      lAscNode: 0.04240589,

    },
  },
};

const neptune = {
  display: 'Neptune',
  name: 'neptune',
  orbit: {
    elements: {
      a: 30.06992276,
      e: 0.00859048,
      i: 1.77004347,
      L: -55.12002969,
      lPeri: 44.96476227,
      lAscNode: 131.78422574,
    },
    cY: {
      a: 0.00026291,
      e: 0.00005105,
      i: 0.00035372,
      L: 218.45945325,
      lPeri: -0.32241464,
      lAscNode: -0.00508664,

    },
  },
};

const pluto = {
  display: 'Pluto',
  name: 'pluto',
  orbit: {
    elements: {
      a: 39.48211675,
      e: 0.24882730,
      i: 17.14001206,
      L: 238.92903833,
      lPeri: 224.06891629,
      lAscNode: 110.30393684,
    },
    cY: {
      a: -0.00031596,
      e: 0.00005170,
      i: 0.00004818,
      L: 145.20780515,
      lPeri: -0.04062942,
      lAscNode: -0.01183482,

    },
  },
};

module.exports = {
  mercury,
  venus,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
  pluto,
};
