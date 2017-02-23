// This is all backend

var letters = [];
var words = [];
var vowel = ["a","e","i","o","u","y"];
var consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
var sentence = [];
var selector = function(letter) {
      for (var x = 0; x <= vowel.length; x++ ) {
        if (letter[0] === vowel[x]) {
          letter.push("ay");
          var joined1 = letter.join("");
          console.log(joined1);
          sentence.push(joined1);

        } else if ((letter[0] !== vowel[0]) && (letter[0] !== vowel[1]) && (letter[0] !== vowel[2]) && (letter[0] !== vowel[3]) && (letter[0] !== vowel[4]) && (letter[0] !== vowel[5])) {
          return null;
      }
    }
  };

var selector2 = function(letter) {
  for (var y = 0; y <= consonant.length; y++) {
   if (letter[0] === consonant[y]) {
    var thisLetter = letter[0];
    letter.push(thisLetter);
    letter.splice(0,1);
    return letter;
    }
  }
};

$(function(){ //document.ready function
  $("form#pig-form").submit(function(event){ //main submit function
    event.preventDefault();
    var input = $("input#input").val();
    var split = input.split(" ");
    split.forEach(function(words){
      var letters = words.split("");
      console.log(letters);
      for (var i=0; i <= (letters.length-letters.length); i++) {
        if (selector(letters) === null){
          if (selector2(letters)=== letters) {
            selector2(letters);
            letters.push("ay")
            var joined2 = letters.join("");
            console.log(joined2);
            sentence.push(joined2);
          } else {
            letters.push("ay")
            var joined3 = letters.join("");
            console.log(joined3);
            sentence.push(joined3);
          }

        };
      };
    });

    //This is all front end
    var wordsJoin = sentence.join(" ");
    console.log(wordsJoin);
    $("#output").text(wordsJoin);

  });
});
