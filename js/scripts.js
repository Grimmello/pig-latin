$(function(){
  $("form#pig-form").submit(function(event){
    event.preventDefault();
    var input = $("input#input").val();
      console.log(input); 
  });
});
