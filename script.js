function convertToRomanNumerals(num) {
  const toRoman = (arg) => {
    switch (arg) {
      case 1:
        return 'I';
      case 2:
        return 'II';
      case 3:
        return 'III';
      case 4:
        return 'IV';
      case 5:
        return 'V';
      case 6:
        return 'VI';
      case 7:
        return 'VII';
      case 8:
        return 'VIII';
      case 9:
        return 'IX';
      case 10:
        return 'X';
      default:
        return '';
    }
  };
  const strNum = num.toString();
  if (strNum.length < 2) {
    console.log(toRoman(num));
    return toRoman(num);
  }
  let result = [];
  for (let i = 0; i <= strNum.length - 1; i += 1) {
    const secondNum = toRoman(parseInt(strNum[i + 1]));
    if (i === 0) {
        result.push(`${'X'.repeat(i + 2)}${secondNum}`);
    }
  }
  console.log(result[0]);
  return result[0];
}

convertToRomanNumerals(1)
convertToRomanNumerals(2)
convertToRomanNumerals(5) //V
convertToRomanNumerals(10) //X
convertToRomanNumerals(26) //XXVI