exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	//var x = parseInt(num,bit).toString();
    var x = (bit).toString(10);
  	return x;
  },

  base10: function(str) {
    return parseInt(str,2);
  },

  convertToBinary: function(num) {
  	//var bin = (num >>>0).toString(10); // makes it human base ten numb
    //var bin = (num).toString(2);
    var bin = parseInt(num>>>0).toString(2);
  	return bin;
  },

  multiply: function(a, b) {
  	//supposed to do based on sig figs?
  	var mult = a*b;
  	return parseFloat(mult.toPrecision(2));
  }
};
