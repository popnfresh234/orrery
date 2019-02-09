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


module.exports = [mercury, mars];
