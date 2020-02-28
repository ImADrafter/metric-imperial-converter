const splitDigitAndUnitRegex = /\W*(\d+\.*\d*)\W*(\w+)/;

const round = (value, decimals) =>
  Number(Math.round(value + "e" + decimals) + "e-" + decimals);

const refineInput = input => {
  const refinedInput = input.match(splitDigitAndUnitRegex);
  const [, inputNumber, unit] = refinedInput;
  return {
    inputNumber: !isNaN(inputNumber) ? inputNumber : "invalid number",
    unit: unit.toLowerCase()
  };
};

const getNum = input => refineInput(input).inputNumber;

const getUnit = input => refineInput(input).unit;

const conversionMap = {
  gal: {
    conversionUnit: "l",
    spell: "gallons",
    conversion: number => round(number * 3.78541, 5)
  },
  l: {
    conversionUnit: "gal",
    spell: "liters",
    conversion: number => round(number / 3.78541, 5)
  },
  lbs: {
    conversionUnit: "kg",
    spell: "librers",
    conversion: number => round(number * 0.453592, 5)
  },
  kg: {
    conversionUnit: "lbs",
    spell: "kilograms",
    conversion: number => round(number / 0.453592, 5)
  },
  mi: {
    conversionUnit: "km",
    spell: "milles",
    conversion: number => round(number * 1.60934, 5)
  },
  km: {
    conversionUnit: "mi",
    spell: "kilometers",
    conversion: number => round(number / 1.60934, 5)
  }
};

const getReturnUnit = initUnit =>
  conversionMap[initUnit]
    ? conversionMap[initUnit].conversionUnit
    : "invalid unit";

const spellOutUnit = unit =>
  conversionMap[unit] ? conversionMap[unit].spell : "invalid unit";

const convert = (initNum, initUnit) => {
  const { conversion } = conversionMap[initUnit] || {
    conversion: () => "invalid unit"
  };
  return conversion(initNum);
};

const getString = (initNum, initUnit, returnNum, returnUnit) => ({
  initNum,
  initUnit,
  returnNum,
  returnUnit,
  string: `${initNum} ${
    conversionMap[initUnit] ? conversionMap[initUnit].spell : "invalid unit"
  } converts to ${returnNum} ${
    conversionMap[returnUnit] ? conversionMap[returnUnit].spell : "invalid unit"
  }`
});
// `Has introducido ${initNum} en ${initUnit}. Tu respuesta es ${returnNum} en ${returnUnit}`;

export { getNum, getUnit, getReturnUnit, spellOutUnit, convert, getString };
