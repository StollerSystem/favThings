// function arrayAdder(thing1, thing2, thing3) {
//   let favArray =[];
//   return favArray;
//   }
function scramble(array) {
  let newArray = [array[1],array[0],array[2]];
  console.log(newArray);
  return newArray;
}

// Business Logic
$(document).ready(function() {
  $("#userInput").submit(function() {
    event.preventDefault();
    const fav1 = $("input#fav1").val();
    const fav2 = $("input#fav2").val();
    const fav3 = $("input#fav3").val();  
    // let favThings = arrayAdder(fav1,fav2,fav3)
    let favThings = [fav1,fav2,fav3];
    console.log(favThings);
    scramble(favThings);
    
  });
});