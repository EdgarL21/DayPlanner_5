// Date for header
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY h:mm:ss a"));

var current = moment().format("H");
current = parseInt(current);
console.log(current);

// 9AM
if (current == 9) {
  $("#9").addClass("present");
} else if (current < 9) {
  $("#9").addClass("future");
}

// 10AM
if (current == 10) {
  $("#10").addClass("present");
} else if (current < 10) {
  $("#10").addClass("future");
}

// 11AM
if (current == 11) {
  $("#11").addClass("present");
} else if (current < 11) {
  $("#11").addClass("future");
}

// 12PM
if (current == 12) {
  $("#12").addClass("present");
} else if (current < 12) {
  $("#12").addClass("future");
}

// 1PM
if (current == 13) {
  $("#13").addClass("present");
} else if (current < 13) {
  $("#13").addClass("future");
}

// 2PM
if (current == 14) {
  $("#14").addClass("present");
} else if (current < 14) {
  $("#14").addClass("future");
}

// 3PM
if (current == 15) {
  $("#15").addClass("present");
} else if (current < 15) {
  $("#15").addClass("future");
}

// 4PM
if (current == 16) {
  $("#16").addClass("present");
} else if (current < 16) {
  $("#16").addClass("future");
}

// 5PM
if (current == 17) {
  $("#17").addClass("present");
} else if (current < 17) {
  $("#17").addClass("future");
}

$(".save9").on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("9:00 AM", $("#9").val());
});

$(".save10").on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("10:00 AM", $("#10").val());
});

$(".save11").on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("11:00 AM", $("#11").val());
});

$(".save12").on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("12:00 PM", $("#12").val());
});

$(".save13").on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("1:00 PM", $("#13").val());
});

$(".save14").on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("2:00 PM", $("#14").val());
});

$(".save15").on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("3:00 PM", $("#15").val());
});

$(".save16").on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("4:00 PM", $("#16").val());
});

$(".save17").on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("5:00 PM", $("#17").val());
});

$("#9").text(localStorage.getItem("9:00 AM"));
$("#10").text(localStorage.getItem("10:00 AM"));
$("#11").text(localStorage.getItem("11:00 AM"));
$("#12").text(localStorage.getItem("12:00 PM"));
$("#13").text(localStorage.getItem("1:00 PM"));
$("#14").text(localStorage.getItem("2:00 PM"));
$("#15").text(localStorage.getItem("3:00 PM"));
$("#16").text(localStorage.getItem("4:00 PM"));
$("#17").text(localStorage.getItem("5:00 PM"));
