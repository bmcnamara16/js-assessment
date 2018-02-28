exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var bool = true;
    var regex1 = new RegExp('\\d');
    // or var regex1 = /\d/;
    bool = regex1.test(str);
    return bool;
  },

  containsRepeatingLetter: function(str) {
    var bool = true;
    var letter ='';
   // var regex1 = new RegExp('(.)\\1','i'); (.) matches any character except line breaks
    var regex1 = new RegExp('([a-z])\\1','i');
    bool = regex1.test(str);
    return bool;
  },

  endsWithVowel: function(str) {
    var bool = true;
    var regex1 = new RegExp('[aeiou]$');
    var strLowercase = str.toLowerCase();
    bool = regex1.test(strLowercase);
    return bool;
    /*or
    var regex1 = new RegExp('[aeiou]$', 'i');
    //  /[aeiou]$/i
    bool = regex1.test(str);
    return bool;*/
    
  },

  captureThreeNumbers: function(str) {
    var output = [];
    var regex1 = new RegExp('[0-9][0-9][0-9]');
    //XXX
    output = str.match(regex1);
    if(output){
      return output[0];
    }
    else{return false;}
    
  },

  matchesPattern: function(str) {
    var bool = true;
    var regex1 = new RegExp('^[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$');
    //XXX-XXX-XXXX
    bool = regex1.test(str);
    return bool;
  },

  isUSD: function(str) {
    var bool = true;
    var regex1 = /^\$[0-9]{1,3}((,[0-9][0-9][0-9])+)?(\.[0-9][0-9])?$/;
    bool = regex1.test(str);
    return bool;
  }
};
