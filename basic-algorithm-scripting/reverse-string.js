function reverseString(str) {
  var splittedString = str.split("");
  var reversedArray = splittedString.reverse();
  var reversedString = reversedArray.join("");
  return reversedString;
}

reverseString("hello");
