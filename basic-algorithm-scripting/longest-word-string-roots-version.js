
function findLongestWord(str) {
  
  splittedStr = str.split(" ");
  
  var array = [];
  
  for (i=0; i < splittedStr.length; i++){
    
    array[i] = splittedStr[i].length;
  }
    
  var maxLength = 0;
  
  for (j=0; j < array.length; j++){
    
    if (maxLength >= array[j]) {
      
      maxLength = maxLength;
      
    }
    else {
      maxLength = array[j];
    }
  }
  
  return maxLength;    
}

findLongestWord("The quick brown fox jumped over the lazy dog");
