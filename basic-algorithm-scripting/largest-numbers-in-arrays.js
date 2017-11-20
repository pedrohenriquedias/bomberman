function largestOfFour(arr){
  // You can do this!
  var bigFourArr = [];
  
  for (i=0; i < arr.length; i++){
    
    var largestNumber = -1;
    
    for (j=0; j < arr[i].length ; j++){     
   
     if (arr[i][j] >= largestNumber){
         
      largestNumber = arr[i][j];
    }
    
    bigFourArr[i] = largestNumber;
      
    }
  }
  return bigFourArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
