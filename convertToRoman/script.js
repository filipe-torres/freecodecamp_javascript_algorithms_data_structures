const number = document.querySelector('#number');
const convertBtn = document.querySelector('#convert-btn');
const output = document.querySelector('#output');

convertBtn.addEventListener('click', () => {
  output.innerHTML = '';

  if (number.value === '') {
    alert('Please enter a valid number');
  } else if (number.value <= 0) {
    alert('Please enter a number greater than or equal to 1');
  } else if (number.value >= 4000) {
    alert('Please enter a number less than or equal to 3999');
  } else {
    output.innerHTML = convertToRoman(number.value);
  }
});

function convertToRoman(arabicNum) {
  const arabicNumStr = arabicNum.toString();
  const arabicNumLength = arabicNumStr.length;
  let romanNumber = '';

  if (arabicNumLength === 1) {
    romanNumber = romanUnits(arabicNumStr[0]);
  } else if (arabicNumLength === 2) {
    romanNumber = romanTens(arabicNumStr[0]);
    romanNumber += romanUnits(arabicNumStr[1]);
  } else if (arabicNumLength === 3) {
    romanNumber = romanHundreds(arabicNumStr[0]);
    romanNumber += romanTens(arabicNumStr[1]);
    romanNumber += romanUnits(arabicNumStr[2]);
  } else if (arabicNumLength === 4) {
    romanNumber = romanThousands(arabicNumStr[0]);
    romanNumber += romanHundreds(arabicNumStr[1]);
    romanNumber += romanTens(arabicNumStr[2]);
    romanNumber += romanUnits(arabicNumStr[3]);
  }

  return romanNumber;
}

const romanUnitsMap = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
};

function romanUnits(number) {
  return romanUnitsMap[number];
}

const romanTensMap = {
  1: 'X',
  2: 'XX',
  3: 'XXX',
  4: 'XL',
  5: 'L',
  6: 'LX',
  7: 'LXX',
  8: 'LXXX',
  9: 'XC',
};

function romanTens(number) {
  return romanTensMap[number];
}

const romanHundredsMap = {
  1: 'C',
  2: 'CC',
  3: 'CCC',
  4: 'CD',
  5: 'D',
  6: 'DC',
  7: 'DCC',
  8: 'DCCC',
  9: 'CM',
};

function romanHundreds(number) {
  return romanHundredsMap[number];
}

function romanThousands(number) {
  return 'M'.repeat(number);
}
