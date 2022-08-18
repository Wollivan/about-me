"use strict";

let courseJoy = prompt("Are you enjoying the course (Yes/No)").toLowerCase();

// continually evaluate the courseJoy
while (courseJoy !== "yes" && courseJoy !== "no") {
  alert("Yes or no only please.");
  courseJoy = prompt("Are you enjoying the course (Yes/No)");
}

// respond to the courseJoy
if (courseJoy === "yes") {
  console.log("I'm so glad you're enjoying the course!");
} else {
  console.log("What went wrong with the course?!");
}

let username = prompt("What is your name");
alert("Hi " + username);
