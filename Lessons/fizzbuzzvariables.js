function thisThat(word1, word2, fizzNum, buzzNum){

  var counter = 1;
   while (counter <= 100){
    if (counter % fizzNum === 0 && counter % buzzNum ===0){
    console.log(word1 + word2);
                                              }
    else if (counter % buzzNum ===0){
      console.log(word1);}
     else if (counter % fizzNum ===0){
      console.log(word2);}
     else{
       console.log(counter);}
     counter++;
     }
}

thisThat("obtuse", "pickle", 6, 10);
