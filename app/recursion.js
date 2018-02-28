exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {
  		
  		var used = [];
  		var finalarr=[];
  		
  		var permute = function(input){
  			//var used = [];

  			for(var i= 0; i< input.length; i++){
  			    var el = input.splice(i,1)[0];
  				used.push(el);
  				if(input.length ==0){
  					finalarr.push(used.slice()); //use slice bc want a copy, not a reference
  				}
  				permute(input);
  				input.splice(i,0,el);

  				used.pop();
  			}
  			return finalarr;
  		}
  		return permute(arr);
  },

  fibonacci: function(n) {
  		var i =3;
  		var val = 1;
  		var lastVal =2;
  		var answer =0;
  	var fib =function(num){
  		
  		if(num == 1 || num ==2){
  			return 1;
  		}
  		else if(i ==n){
  			return (answer);
  		}
  		else{
  			answer = lastVal + val;
  			val =lastVal;
  			lastVal = answer;
  			i = i +1;
  			return (fib(i));
  		}
  	}
  	return fib(n);
  },

  validParentheses: function(n) {
  		var open = n;
  		var closed = 0;
  		var combo = '';
  		var answer = [];
  		var valp = function(o, c, s){
  			if(o ==0 && c == 0){
  				answer.push(s);
  				return answer;
  			}
  			if(o> 0){
  				valp(o-1,c+1,s+ "(");
  			}
  			if(c> 0){
  				valp(o,c-1,s+ ")");
  			}

  			return answer;
  		}

  	return valp(open, closed, combo);
  }
};
