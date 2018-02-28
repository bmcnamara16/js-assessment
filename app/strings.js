exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var holder = '';
  	var currentLetterIndex = 0;
  	//is there a faster way to skip?
  	for(var i =0; i < str.length;i++){
      //holder = str[i];
      if(str[i] == str[currentLetterIndex]){
      	if(i - currentLetterIndex <= amount-1){
      		holder = holder + str[i];
      	}
      	else{

      	}
      }
      else{
      	currentLetterIndex = i;
      	if(amount >0){
      		holder = holder + str[i];
      	}
      }
    }
    return holder;
  },

  wordWrap: function(str, cols) {

    var front = '';
    var back = '';
    var spaceIndices = []; //index +1 to normalize
    for(var i =0; i < str.length;i++){
      if(str[i] == ' '){
      	if(i != 0){
        	spaceIndices.push(i+1);
    	}
      }
    }
    spaceIndices.push(str.length+1);

    for(var j =0; j< spaceIndices.length; j++){
    		//word longer than cols
    		if((j== 0 &&spaceIndices[j]-1 > cols) ||(j != 0 && spaceIndices[j]-1 - spaceIndices[j-1] > cols)){
    			front = str.substr(0,spaceIndices[j]-1)
    			back = '\n' + str.substr(spaceIndices[j]);
    			str = front + back;

    		}
    		//word = cols
    		else if((j== 0 && spaceIndices[j]-1 == cols) || (j != 0 && spaceIndices[j]-1 - spaceIndices[j-1] == cols)){
    			front = str.substr(0,spaceIndices[j]-1)
    			back = '\n' + str.substr(spaceIndices[j]);
    			str = front + back;
    		} 
    		//words less than cols, j !=0
    		else if((j != 0 && j != spaceIndices.length-1)){
    			if((spaceIndices[j+1]-1) - (spaceIndices[j-1]-1) > cols){
    				front = str.substr(0,spaceIndices[j]-1)
    				back = '\n' + str.substr(spaceIndices[j]);
    				str = front + back;
    			}
    		}
    		//words less than cols, j ==0
    		else if(j == 0 && spaceIndices.length >1){
    			if((spaceIndices[j+1]-1 )+ (spaceIndices[j]-1) > cols){
    				front = str.substr(0,spaceIndices[j]-1)
    				back = '\n' + str.substr(spaceIndices[j]);
    				str = front + back;
    			}
    		}
    }

    return str;

    
  },

  reverseString: function(str) {
  	var holder = '';
  	for(var i = str.length-1; i >=0; i--){
  		holder = holder + str[i];
  	}
  	return holder;
  }
};
