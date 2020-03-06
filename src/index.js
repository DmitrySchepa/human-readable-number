const numbers = {
    0: ['zero'],
    1: ['one', 'ten', 'one hundred'],
    2: ['two', 'twenty', 'two hundred'],
    3: ['three', 'thirty', 'three hundred'],
    4: ['four', 'forty', 'four hundred'],
    5: ['five', 'fifty', 'five hundred'],
    6: ['six', 'sixty', 'six hundred'],
    7: ['seven', 'seventy', 'seven hundred'],
    8: ['eight', 'eighty', 'eight hundred'],
    9: ['nine', 'ninety', 'nine hundred'],
    teens: {
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'
    }
  };
    
  module.exports = function toReadable(num) {
    const str = num.toString();
    if (num > 10 && num < 20) {
        return numbers.teens[num];
    }  else if (str.slice(1) < 20 && str.slice(1) > 10) {
        return numbers[str.slice(0,1)][2] + ' ' + numbers.teens[str.slice(1)];
    } else if (num % 10 === 0 && num < 100 && num > 0) {
        return numbers[str.slice(0, 1)][1];
    } else if (num % 100 === 0 && num > 0) {
        return numbers[str.slice(0,1)][2];
    } else if (num % 10 === 0 && num > 100) {
        return numbers[str.slice(0,1)][2] + ' ' + numbers[str.slice(1,2)][1];
    } 
    
    let result = [];
    for (let i=0; i< str.length; i++) {
      console.log(str[i])
      result.push(numbers[str[i]][str.length - 1 - i]);  
    }
        return result.filter(function(elem) {
            if (elem) {
                return elem;
            }
        }).join(' ');
  }
  
