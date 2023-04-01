

querySelector(".btn").click(function () {
  calculateInterest();
});


function calculateInterest() {
let amount = document.querySelector("#amount");
let years = document.querySelector("#years");
let interest = document.querySelector("#interest");

//   var total = document.querySelector("#total");

  var total = (amount * years * interest)/100;
 
  
  }
//   $("#tipOutput").html("$" + tip);
//   if (tip <= 5) {
//     $("#tipOutput").removeClass("mediumTip bigTip").addClass("smallTip");
//   }
//   if (tip > 5 && tip <= 10) {
//     $("#tipOutput").removeClass("smallTip bigTip").addClass("mediumTip");
//   }
//   if (tip > 10) {
//     $("#tipOutput").removeClass("smallTip mediumTip").addClass("bigTip");
//   }
