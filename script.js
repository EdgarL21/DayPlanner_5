// Date for header
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));


var current = moment().format('H');
current = parseInt(current)
console.log(current)

// 9AM
if(current == 9) {
    $("#9").addClass("present")
} else if (current < 9) {
    $("#9").addClass("future")
}

// 10AM
if(current == 10) {
    $("#10").addClass("present")
} else if (current < 10) {
    $("#10").addClass("future")
}

// 11AM
if(current == 11) {
    $("#11").addClass("present")
} else if (current < 11) {
    $("#11").addClass("future")
}

// 12PM
if(current == 12) {
    $("#12").addClass("present")
} else if (current < 12) {
    $("#12").addClass("future")
}

// 1PM
if(current == 13) {
    $("#13").addClass("present")
} else if (current < 13) {
    $("#13").addClass("future")
}

// 2PM
if(current == 14) {
    $("#14").addClass("present")
} else if (current < 14) {
    $("#14").addClass("future")
}

// 3PM
if(current == 15) {
    $("#15").addClass("present")
} else if (current < 15) {
    $("#15").addClass("future")
}

// 4PM
if(current == 16) {
    $("#16").addClass("present")
} else if (current < 16) {
    $("#16").addClass("future")
}

// 5PM
if(current == 17) {
    $("#17").addClass("present")
} else if (current < 17) {
    $("#17").addClass("future")
}



$(".save9").on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('9:00 AM', $('#9').val())
})

$(".save10").on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('10:00 AM', $('#10').val())
})

$(".save11").on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('11:00 AM', $('#11').val())
})

$(".save12").on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('12:00 PM', $('#12').val())
})

$(".save13").on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('1:00 PM', $('#13').val())
})

$(".save14").on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('2:00 PM', $('#14').val())
})

$(".save15").on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('3:00 PM', $('#15').val())
})

$(".save16").on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('4:00 PM', $('#16').val())
})

$(".save17").on('click', function(event) {
    event.preventDefault();
    localStorage.setItem('5:00 PM', $('#17').val())
})



// // var current = moment().hours(); // gets only the hour from the moment
// // console.log(current); // logs only the hour


// function currentTime() {
//     var current = moment().hours()//gets the current hour
//         //console.log("current is " + current) // logs the current hour
//     var time = $('.time-block'); // gets the class time-block with specified times and puts it into time varaible using jquery
//         //console.log("time is under")
//         //console.log(time) // logs the array of each div class of time block

//     time.each(function () { // loop
//     var hour = parseInt($(this).attr('id')) // gets the id (the time) and returns it as an integer into a varaible hour
//     //console.log("hour is " + hour)
//     //console.log(this) // logs all the separate divs for each individal time

//     //change background color depending on time (use if statment to compare time)
//     if(current === hour){
//         $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description') // if current hour equals hour should be grey 12 = 12
//         //console.log("logged this is under")
//         //console.log(this) // logs only the current time
//     } else if (current > hour){
//         $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description');  // if current hour greater than hour should be green 12 < 17
//         //console.log(this) // logs all the hours that have passed
//     } else {
//         $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description'); // if current hour equals hour should be red 12 > 9
//         //console.log(this) // logs all the hours that havent passed yet
//     }

//     })
// }
// currentTime();







// //save to local storage(setItem)

// var button = $('.saveBtn') // links html button to javascript
// // console.log("button")
// // console.log(button)
// var text = $('.col-sm-10');
// // console.log("text")
// // console.log(text)

// button.on('click', function(event){ // runs a function that when clicked will store the textarea into local storage
//     event.preventDefault()

//     var text = $(this).siblings('.col-sm-10').val().replace(/['"]+/g, '');
//     console.log("this")
//     console.log($(this).siblings('.col-sm-10').val())
//     //console.log("text")
//     //console.log(text)

//     var parent = $(this).parent().attr('id');

//     localStorage.setItem('Text', JSON.stringify(text));

//     //console.log("text")
//     //console.log(text)
// });

// $('#9 textarea').val(localStorage.getItem('9').replace(/['"]+/g, ''));
// $('#10 textarea').val(localStorage.getItem('10').replace(/['"]+/g, ''));



// //get from local storage(getItem)
// //var x = JSON.parse(localStorage.getItem('Text', text));
// //console.log(x)
// //create key values pairs for local storage











// // var button = $('.saveBtn')
// // var text = $('.col-sm-10');

// // button.on('click', function(event){ // runs a function that when clicked will store the textarea into local storage
// //     event.preventDefault()
// //     localStorage.setItem('Dog', Bulldog);
// // });

// // var x = localStorage.getItem('Dog', Bulldog);

















// // //no longer needed
// // //get current day (use moment)
// // var nowTime = moment().format('LT'); // gets the hour and minute 
// // //$("#c").css("background-color", "red"); // changes background color to red of the 9AM only
// // //$("#c").text(nowTime).css("background-color", "red") // changes background color to red of the 9AM and adds the current time into the textarea
// // console.log(nowTime) // logs the hour and minute