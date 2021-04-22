// Date for header
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));




//get current day (use moment)
var nowTime = moment().format('LT'); // gets the hour and minute 
$("#c").css("background-color", "red"); // changes background color to red of the 9AM only
$("#c").text(nowTime).css("background-color", "red") // changes background color to red of the 9AM and adds the current time into the textarea
console.log(nowTime) // logs the hour and minute









var current = moment().hours(); // gets only the hour from the moment
console.log(current); // logs only the hour








//change background color depending on time (use if statment to compare time)
// if(nowTime < ){
//     $("#c").text(nowTime).css("background-color", "grey");
// } else if (nowTime > ){
//     $("#c").text(nowTime).css("background-color", "green");
// } else {
//     $("#c").text(nowTime).css("background-color", "red");
// }








//save to local storage(setItem)
var button = $('.saveBtn') // links html button to javascript
var text = $('#c');
console.log(text)

button.on('click', function(event){ // runs a function that when clicked will store the textarea into local storage
    event.preventDefault()
    localStorage.setItem('Text', JSON.stringify(text));
});

//get from local storage(getItem)
var x = JSON.parse(localStorage.getItem('Text', text));
//create key values pairs for local storage