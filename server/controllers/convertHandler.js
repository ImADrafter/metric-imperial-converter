// TODO: Rewrite this regex

// const splitDigitAndUnitRegex = /(\d+|\d+\.\d+|\d+\/\d+|\d+\.\d+\/\d+)(\w)/;
const getDigits = /\d+(\.\d+\/\d+|\/\d+|\.\d+)?/;
const decimalInput = /\d+\.\d+(?!\/+)/;
// const doubleFraction = /\/{2,}/;

const round = (value, decimals = 5) => {
  // Number(Math.round(value + "e" + decimals) + "e-" + decimals);
  value.toFixed(decimals);
};

const getNum = input => {
  if (input.includes('//') || !input.match(/.*\d+.*/g)) {
    return 'invalid number';
  }
  const userNumber = input.match(getDigits);
  const [wholeMatch] = userNumber;
  if (wholeMatch.match(decimalInput)) return Number(wholeMatch).toFixed(5);
  return wholeMatch;
};

const getUnit = input => {};

const gallons = {
  conversionUnit: 'L',
  spell: 'gallons',
  conversion: number => round(number * 3.78541)
};

const conversionMap = {
  gal: gallons,
  gallons,
  L: {
    conversionUnit: 'gal',
    spell: 'liters',
    conversion: number => round(number / 3.78541)
  },
  lbs: {
    conversionUnit: 'kg',
    spell: 'librers',
    conversion: number => round(number * 0.453592)
  },
  kg: {
    conversionUnit: 'lbs',
    spell: 'kilograms',
    conversion: number => round(number / 0.453592)
  },
  mi: {
    conversionUnit: 'km',
    spell: 'milles',
    conversion: number => round(number * 1.60934)
  },
  km: {
    conversionUnit: 'mi',
    spell: 'kilometers',
    conversion: number => round(number / 1.60934)
  }
};

const getReturnUnit = initUnit =>
  conversionMap[initUnit]
    ? conversionMap[initUnit].conversionUnit
    : 'invalid unit';

const spellOutUnit = unit =>
  conversionMap[unit] ? conversionMap[unit].spell : 'invalid unit';

const convert = (initNum, initUnit) => {
  const { conversion } = conversionMap[initUnit] || {
    conversion: () => 'invalid unit'
  };
  return conversion(initNum);
};

const getString = (initNum, initUnit, returnNum, returnUnit) => ({
  initNum,
  initUnit,
  returnNum,
  returnUnit,
  string: `${initNum} ${
    conversionMap[initUnit] ? conversionMap[initUnit].spell : 'invalid unit'
  } converts to ${returnNum} ${
    conversionMap[returnUnit] ? conversionMap[returnUnit].spell : 'invalid unit'
  }`
});
// `Has introducido ${initNum} en ${initUnit}. Tu respuesta es ${returnNum} en ${returnUnit}`;

export { getNum, getUnit, getReturnUnit, spellOutUnit, convert, getString };
