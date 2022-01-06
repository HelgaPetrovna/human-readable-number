module.exports = function toReadable (number) {
    let ones = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
      ];
      let tens = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
      ];
      let teens = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
      ];
      let sourceNum = String(number);
      let index = sourceNum.length;
      let firstNum = parseInt(sourceNum[0]);
      let secNum = parseInt(sourceNum[1]);
      let thirdNum = parseInt(sourceNum[2]);
    
      if (index === 1) {
        return `${ones[number]}`;
      }
      if (index === 2 && firstNum === 1) {
        return `${teens[secNum]}`;
      }
      if (index === 2 && firstNum > 1 && secNum === 0) {
        return `${tens[firstNum]}`;
      }
      if (index === 2 && firstNum > 1 && firstNum < 10) {
        return `${tens[firstNum]} ${ones[secNum]}`;
      }
      if (index === 3 && secNum === 1) {
        return `${ones[firstNum]} hundred ${teens[thirdNum]}`;
      }
      if (index === 3 && secNum === 0 && thirdNum === 0) {
        return `${ones[firstNum]} hundred`;
      }
      if (index === 3 && secNum === 0 && thirdNum > 0) {
        return `${ones[firstNum]} hundred ${ones[thirdNum]}`;
      }
      if (index === 3 && secNum > 1 && thirdNum === 0) {
        return `${ones[firstNum]} hundred ${tens[secNum]}`;
      }
      if (index === 3 && secNum > 1 && thirdNum > 0) {
        return `${ones[firstNum]} hundred ${tens[secNum]} ${ones[thirdNum]}`;
      }
}
