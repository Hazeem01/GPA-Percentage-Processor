let totalLessons;
let completedLessons;
let result;
let userName;

function userNameCreator() {
  String(userName = window.prompt("Enter your name")).toUpperCase();
  while (userName == "") {
    window.alert("You haven\'t provided your name yet!!");
    String(userName = window.prompt("Enter your name")).toUpperCase();
  }
  document.getElementById("userName").innerHTML = `${userName}`;
}

function colorChanger(Id, newColor) {
  document.getElementById(Id).style.backgroundColor = newColor;
}

function errorPage(Id) {
  document.getElementById(Id).innerHTML = "ERROR!!!!!<br> Don't worry, this is from us. Kindly this report to the administor.";
  colorChanger("calculator", "red");
}

function summary(resultType, Id, completed, total, result) {
  document.getElementById("userCompletedLessons").innerHTML = completed;
  document.getElementById("usertotalLessons").innerHTML = total;
  document.getElementById("result").innerHTML = result;
  if (resultType == "percentage") {
    document.getElementById(Id).innerHTML = `Therefore, you have a result of ${result}`;
  } else if (resultType == "cgpa") {
    document.getElementById(Id).innerHTML = `Therefore, you have a CGPA of ${result}`;
  } else {
    errorPage()
  }
}

userNameCreator();
document.getElementById("hiddenDiv").style.visibility = "hidden";

document.getElementById("percentageBtn").onclick = function () {
  colorChanger("calculator", "rgb(90, 211, 90)");
  document.getElementById("hiddenDiv").style.visibility = "visible";
  document.getElementById("percentageBtn").style.visibility = "hidden";
  document.getElementById("cgpaBtn").style.visibility = "hidden";
  document.getElementById("convertParagraph").innerHTML = "You are converting to Percentage";
  document.getElementById("resultParagraph").innerHTML = "Your result percentage is......"
  document.getElementById("submitButton").onclick = function () {
    totalLessons = document.getElementById("totalLessons").value;
    totalLessons = Number(totalLessons);
    completedLessons = document.getElementById("completedLessons").value;
    completedLessons = Number(completedLessons);
    result = Math.round(((totalLessons / completedLessons) * 100));
    if (result > 100) {
      document.getElementById("resultParagraph").innerHTML = `Kindly check the inputed scores, your percentage can't be ${result}%`;
      colorChanger("calculator", "red");
    } else {
      document.getElementById("resultParagraph").innerHTML = `Your result percentage is ${result}% <br> <p><a id="summaryLink" href = "summary.html">Summary</a></p>`;
      document.getElementById("summaryLink").onclick = summary("percentage", "finalStatement", "completedLessons", "totalLessons", "result");
    }
  }
}

document.getElementById("cgpaBtn").onclick = function () {
  colorChanger("calculator", "rgb(61, 165, 61)");
  document.getElementById("hiddenDiv").style.visibility = "visible";
  document.getElementById("percentageBtn").style.visibility = "hidden";
  document.getElementById("cgpaBtn").style.visibility = "hidden";
  document.getElementById("convertParagraph").innerHTML = "You are converting to CGPA";
  document.getElementById("resultParagraph").innerHTML = "Your result CGPA is......"
  document.getElementById("submitButton").onclick = function () {
    totalLessons = document.getElementById("totalLessons").value;
    totalLessons = Number(totalLessons)
    completedLessons = document.getElementById("completedLessons").value;
    completedLessons = Number(completedLessons);
    result = ((totalLessons / completedLessons) * 4).toFixed(2);
    if (result > 4) {
      document.getElementById("resultParagraph").innerHTML = `Kindly check the inputed scores, your result can't be ${result}`;
      colorChanger("calculator", "red");
    } else {
      document.getElementById("resultParagraph").innerHTML = `Your CGPA is ${result}<br> <p><a id="summaryLink" href="summary.html">Summary</a></p>`;
      document.getElementById("summaryLink").onclick = summary("cgpa", "finalStatement", "completedLessons", "totalLessons", "result");
    }
  }
}

document.getElementById("restartBtn").onclick = function () {
  colorChanger("calculator", "rgb(152, 207, 152)");
  document.getElementById("hiddenDiv").style.visibility = "hidden";
  document.getElementById("percentageBtn").style.visibility = "visible";
  document.getElementById("cgpaBtn").style.visibility = "visible";
  document.getElementById("convertParagraph").innerHTML = "What are you converting to ?";
}

document.getElementById("userName").onclick = userNameCreator();
