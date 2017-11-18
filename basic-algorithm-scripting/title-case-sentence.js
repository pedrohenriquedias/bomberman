function titleCase(str) { //str = "sOu sEu amIgo"
  
  var wordsArray  = str.split(" "); //wordsArray = ["sOu", "sEu", "amIgo"];
  
  var charArray = [];
  var newArray =[];

  for (i=0; i < wordsArray.length; i++) {

  	charArray = wordsArray[i].split(""); // charArray = ["s","O","u"];

  	for (j=0; j < charArray.length; j++){
    
    if (j == 0) {
    
      charArray[j] = charArray[j].toUpperCase(); //charArray = ["S","O","u"];
      
    }
   
    else {
    
      charArray[j] = charArray[j].toLowerCase(); //charArray = ["S","o","u"];
   }
      
  }
  	newArray[i] = charArray.join(""); //newArray = ["Sou", "Seu, "Amigo"];

 }

  var newString = newArray.join(" ");//newString = "Sou Seu Amigo"

 return newString;
  
}

titleCase("I'm a little tea pot");
