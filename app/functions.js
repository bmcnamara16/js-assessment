exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    //return fn(arr[0],arr[1],arr[2]); this works but is it right?
    return fn.apply(this,arr); // does it only apply appropriate one?
  },

  speak: function(fn, obj) {
    var object = {};
    object.greeting = obj.greeting;
    object.name = obj.name;
    object.fn = fn;
    return object.fn();
  },

  functionFunction: function(str) {
     
      var current = str;
      function innerFunct(next){
        return  current +", " + next;
      }
      //return innerFunct.bind(this); this works also
      return innerFunct; //closure
      
  },

  makeClosures: function(arr, fn) {
      var answer=[];

     for(var i =0; i < arr.length; i++){
          let y = arr[i];
          function idk(){
            return fn(y);
          };
          answer.push(idk);
      }
      return answer;
  },

  partial: function(fn, str1, str2) {
     var slice = Array.prototype.slice
    var stored_args = slice.call(arguments, 1);
     return function () {
        var new_args = slice.call(arguments),
         args = stored_args.concat(new_args);
        return fn.apply(null, args);
     };
  },

  useArguments: function() {
      var numOfArgs= arguments.length;
      var add=0;
      for(var i =0; i <numOfArgs; i++){
        add += arguments[i];
      }
      return add;
  },

  callIt: function(fn) {
      var slice = Array.prototype.slice
      var args = slice.call(arguments, 1);
      var expected = fn.length;
      return fn.apply(null,args)
  },

  partialUsingArguments: function(fn) {
    var slice = Array.prototype.slice
    var stored_args = slice.call(arguments, 1);
     return function () {
        var new_args = slice.call(arguments),
         args = stored_args.concat(new_args);
        return fn.apply(null, args);
     };
  },

  curryIt: function(fn) {
   var ogFn = fn;
    function sweet(func){
    var slice = Array.prototype.slice
    var stored_args = slice.call(arguments,1);
    var idk = Array.isArray(stored_args);
     return function (newArg) {
        var new_args = slice.call(arguments);
        //stored_args.push[newArg];
        var place = [];
        for(var i =0; i < stored_args.length; i++){
          if(Array.isArray(stored_args[i])){
            for(var j=0; j < stored_args[i].length;j++){
              place.push(stored_args[i][j]);
            }
          }
          else{
            place.push(stored_args[i]);
          }
        }
       args = place.concat(new_args);
       

         if(args.length == func.length){
            return func.apply(null, args);
         }
         else{
          return  sweet(func,args);
         }
        
     };
   }// end of sweet

     return function(newArg){
      var newFunc = sweet(ogFn,newArg);
      return newFunc;
     }
  }


};
