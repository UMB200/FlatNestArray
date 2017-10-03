function steamrollArray(arr) {
  // I'm a steamroller, baby
  //create placeholder
  var flattArray =[];
  //loop through given array recursively till array is flattened
  for (var i = 0; i < arr.length; i++){
    //condition if given parameter is an array
    if(Array.isArray(arr[i])){
      //if Yes recursion 
      flattArray = flattArray.concat(steamrollArray(arr[i]));
    }
    else {
      //add to empty placeholder
      flattArray.push(arr[i]);
    }
  }
  return flattArray;
}