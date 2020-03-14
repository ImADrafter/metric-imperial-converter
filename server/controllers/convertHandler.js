const getDigits = /\d+(\.\d+\/\d+|\/\d+|\.\d+)?/;
const decimalInput = /\d+\.\d+(?!\/+)/;
const getUnitRegExp = /(lbs|LBS|gal|mi|km|kg|GAL|L|MI|KM|KG|l)(?=\s*)/;

const round = (value, decimals = 5) => Number(value.toFixed(decimals));

const getNum = input => {
  if (input.includes('//') || !input.match(/.*\d+.*/g)) {
    return 'invalid number';
  }
  const userNumber = input.match(getDigits);
  const [wholeMatch] = userNumber;
  if (wholeMatch.match(decimalInput)) return Number(wholeMatch).toFixed(5);
  return wholeMatch;
};

const getUnit = input => {
  const userUnit = input.match(getUnitRegExp);
  if (!userUnit) return 'invalid unit';
  const [wholeMatch] = userUnit;
  return wholeMatch;
};

const conversionMap = {
  gal: {
    conversionUnit: 'l',
    spell: 'gallons',
    conversion: number => round(number * 3.78541)
  },
  l: {
    conversionUnit: 'gal',
    spell: 'liters',
    conversion: number => round(number / 3.78541)
  },
  lbs: {
    conversionUnit: 'kg',
    spell: 'pound',
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

const getReturnUnit = initUnit => {
  // const { conversion } = conversionMap[initUnit];
  const unitToLowerCase = initUnit.toLowerCase();
  if (conversionMap[unitToLowerCase]) {
    return conversionMap[unitToLowerCase].conversionUnit;
  }

  return 'invalid unit';
};

const spellOutUnit = unit =>
  conversionMap[unit] ? conversionMap[unit].spell : 'invalid unit';

const convert = (initNum, initUnit) => {
  const unitToLowerCase = initUnit.toLowerCase();
  if (conversionMap[unitToLowerCase]) {
    const { conversion } = conversionMap[unitToLowerCase];
    const output = conversion(Number(initNum));
    return output;
  }

  return 'invalid unit';
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
