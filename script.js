setInterval(function() {
  var currDate = moment().format("dddd, MMMM, Do YYYY");
$("#currentDay").text(currDate);
})



var saveButton = document.querySelector("#saveBtn");
var input = document.querySelector('#block')
var userContentSpan = document.querySelector("#userContent");



renderLastSaved();

function displayMessage(type, message) {
  userContentSpan.textContent = message;
  userContentSpan.setAttribute("class", type);
}

function renderLastSaved() {
  var comment = localStorage.getItem("comment");

  if (!comment) {
    return;
  }

  userContentSpan.textContent = comment;
}

saveButton.addEventListener("click", function(event) {
  event.preventDefault();

  var comment = document.querySelector("#block-content").value;

  if (comment === "") {
    displaySave("");
  } else {
    displaySave("");

    localStorage.setItem("comment", comment);
    renderLastSaved();
  }
});



//  function colorHour() {
//   var currentTime = new Date ();
//   var hour = current.getHours();
//    if (hour < currentTime){
//      var color = $('#block-content');
//      color.style.backgroundColor = "grey";
//    } else if ( hour > currentTime){
//      var color = $('#block-content');
//      color.style.backgroundColor = "grey";
//    } else {
//     color.style.backgroundColor = "green";
//    }
// };

// colorHour();







// function colorChange () {
//   var time = new Date();
//   // var hours = time.getHours();
//   // var minutes = time.getMinutes();
//   var seconds = time.getSeconds();

//   if (hours.length <2) {
//     hours = '0' + hours;
//   }
//   if (minutes.length <2) {
//     minutes = '0' + minutes;
//   }
//   if (seconds.length <2) {
//     seconds = '0' + seconds;
//   }

//   var colorStr = '#' + hours + minutes + seconds;

//   document.body.style.backgroundColor = colorStr;
// }

// colorChange();
// setInterval(colorChange, 1000);


setInterval(
  function () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#"+randomColor;
  },1000);