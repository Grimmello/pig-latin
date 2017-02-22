$(function(){
  $("form#pig-form").submit(function(event){
    event.preventDefault();
    var input = $("input#input").val();
    var split = input.split(" ");
    split.forEach(function(x){
      var x = x.split("");
      x.forEach(function(y){
        if(isNaN(y)=== true){
          if (y === "a") {
          console.log("success");
          } else {
          console.log("failure");
        } $("#output").show();
        } else {
          alert("Please enter a valid sentence");
        }
      });
    });
  });
});
