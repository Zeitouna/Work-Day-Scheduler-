setInterval(function() {
    var currDate = moment().format("dddd, MMMM, Do YYYY");
$("#currentDay").text(currDate);
})




// var content = $('#content');
// var saveBtn = $('#saveBtn');
// var msgDiv = document.querySelector("#msg");


// renderLastSaved();

// function displayMessage(type, message) {
//     msgDiv.textContent =message;
//     msgDiv.setAttribute('class', type)
// }


// function renderLastSaved() {
//     var boxContent = localStorage.getItem('content');

//     if(!boxContent) {
//         return;
//     }

//     boxC
// }


// saveBtn.addEventListener("click", function(event) {
//     event.preventDefault();
//     var boxContent = document.querySelector("#content").value;
  
//     if (boxContent === "") {
//       displayMessage("error", "nothing saved");
//     } else {
//       displayMessage("success", "successfully saved");
  
//       localStorage.setItem("content", boxContent);
//       renderLastSaved();
//     }
// });
  



//Change textarea background color based on time
var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');

    //get all elements with class "taskarea"
    var timeBlockElements = $(".col-10 description");

    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {

        //Get element i's ID as a string
        var elementID = timeBlockElements[i].id;

        //get element by ID
        var manipID = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 1);