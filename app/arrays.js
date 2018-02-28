exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var output = -1;
    for( var i = 0; i < arr.length; i++){
      if(arr[i] == item){
        output= i;
        break;
      }
    }
    return output;
  },

  sum: function(arr) {
    var sum =0;
      for(var i = 0; i <arr.length; i++){
        sum = sum + arr[i];
      }
      return sum;
  },

  remove: function(arr, item) {
    var holder = [];
    for(var i =0; i < arr.length; i++){
      if(arr[i] != item){
        holder.push(arr[i]);
      }
    }
    return holder;
  },

  removeWithoutCopy: function(arr, item) {
    for(var i =0; i < arr.length; i++){
      if(arr[i] == item){
        arr.splice(i,1);
        i--; // because you removed an item so want to look at that index again
      }
    }
    return arr;
  },

  append: function(arr, item) {
    if(arr != null){
      arr.push(item);
    }
    else{
      arr = [];
      arr.push(item);
    }
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
    //why couldnt i do return arr.pop()?
  },

  prepend: function(arr, item) {
    var holder = [];
    holder.push(item);
    for(var i =0; i < arr.length;i++){
      holder.push(arr[i]);
    }
    return holder;
  },

  curtail: function(arr) {
    //removes the first item of array and returns that item
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    //how to do it this way because it doesnt change the og array
    //it return a new one that is both of them combined
    var both = arr1.concat(arr2);
    return both;
  },

  insert: function(arr, item, index) {
    /* array.splice(index to insert at, 0 or 1 to indicate insert (0)
    vs replace (1), item inserting)
    array.splice(1,1) removes item at 1st index but keeps rest of them
    array.splice(2,0, 'Feb') inserts item at 2nd index
    array.splice(4,1,"May") replaces the item at index 4 with May
    splice changes the contents of the array*/
    arr.splice(index,0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for(var i =0; i < arr.length;i++){
      if(arr[i] == item){
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    //return an array containing the numbers that have dups
    var currentArrIn =0;
    dups= [];
      for(var i =currentArrIn+1; i < arr.length;i++){
          if(arr[i] == arr[currentArrIn]){
            dups.push(arr[i]);
            //checking if dup already in dup array
            for(var j =0; j < dups.length-1; j++){
              if(dups[j] == dups[dups.length-1]){
                dups.pop();
                break;
              }
            }
            currentArrIn++;
            i =currentArrIn+1;
          }
          else if(i == arr.length-1){
            currentArrIn++;
            i =currentArrIn //not plus one bc the for loop will increment i; 
          }
      }
    return dups;
  },

  square: function(arr) {
    for(var i =0; i < arr.length;i++){
      arr[i] = arr[i] *arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
  //return array of the indices  where target is
  var holder = [];
    for(var i =0; i < arr.length;i++){
      if(arr[i] == target){
        holder.push(i);
      }
    }
    return holder;
  }
};
