'use strict'

function sort(input) {
  var temp;
  for(var i = 0; i < input.length; i++){
    for(var j = i+1; j < input.length; j++){
      if(input[j] < input[i]){
        temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      }
    }
  }
  return input;
}

module.exports = sort
