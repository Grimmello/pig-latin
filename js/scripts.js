var letters = [];
var words = [];
var vowel = ["a","e","i","o","u","y"];
var consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
var alphabet = [vowel, consonant];
var selector = function(letter) {
  alphabet.forEach(function(alph) {
    if(isNaN(letter)=== true) {
      for (var x = 0; x <= alph.length ; x++ ) {
        //debugger;
        if (letter[0] === vowel[x]) {
          letter.push("ay");
          console.log(letter);
        } else if (letter[0] === consonant[x]) {
          var thisLetter = letter[0];
          letter.push(thisLetter + "ay");
          console.log(letter);
      }
  }} else {
      alert("Please enter a valid sentence");
  }
});
};

$(function(){
  $("form#pig-form").submit(function(event){
    event.preventDefault();
    var input = $("input#input").val();
    var split = input.split(" ");
    split.forEach(function(words){
      var letters = words.split("");
      console.log(letters);
      for (var i=0; i <= (letters.length-letters.length); i++) {
        selector(letters);
      };
        });

      });
    });
