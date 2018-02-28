exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  		//create an object
  		var object = new Object();
  		//these are adding parameters to this object and setting them
  		object.greeting = obj.greeting;
  		object.name = obj.name;
  		object.fn = fn;
  		//executing the fn parameter of the object
  		return object.fn();
  },

  alterObjects: function(constructor, greeting) {
  		//adding a parameter to any object that's passed in
  		constructor.prototype.greeting = greeting;
  		return constructor.greeting;
  },

  iterate: function(obj) {
  	var returnObject = [];
  	for(var name in obj){
  		if(obj.hasOwnProperty(name)){
  			var item = name + ': ' + obj[name];
  			returnObject.push(item);
  		}
  	}
  	return returnObject;
  }
};
