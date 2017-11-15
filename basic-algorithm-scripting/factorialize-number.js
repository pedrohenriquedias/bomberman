function factorialize(num) { 
  var total = 1;
  for(i = num; i > 0; i--){
    total = i * total;
  }
  return total;
}

factorialize(5);
