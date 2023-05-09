// DOB = Date of Birth

// INPUTS
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

// OUTPUTS
const dayOutput = document.getElementById("DD");
const monthOutput = document.getElementById("MM");
const yearOutput = document.getElementById("YY");

// FORM ELEMENT
const form = document.querySelector("form");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("label").style.color = "red";
      parent.querySelector("small").innerText = "This field is required.";
      validator = false;
    } else if (monthInput.value > 12) {
      monthInput.style.borderColor = "red";
      parent.querySelector("label").style.color = "red";
      monthInput.parentElement.querySelector("small").innerText =
        "Must be a valid month.";
      validator = false;
    } else if (dayInput.value > 31) {
      dayInput.style.borderColor = "red";
      parent.querySelector("label").style.color = "red";
      dayInput.parentElement.querySelector("small").innerText =
        "Must be a valid day.";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInput.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInput.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInput.value;
    const m = month - monthInput.value;
    const y = year - yearInput.value;

    dayOutput.innerHTML = d;
    monthOutput.innerHTML = m;
    yearOutput.innerHTML = y;
  }
}

// ADDING THE SUBMIT EVENTLISTENER TO THE FORM
form.addEventListener("submit", handleSubmit);

/*
// INPUT
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let form = document.querySelector("form");

// DISPLAY
let displayYears = document.querySelector("#displayYears");
let displayMonths = document.querySelector("#displayMonths");
let displayDays = document.querySelector("#displayDays");

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;
let currentDay = date.getDate();

// BUTTON
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

// ERROR
function setError(element, message = "This field is required") {
  let formGroup = element.parentNode;
  let error = formGroup.querySelector(".error");
  formGroup.classList.add("error");
  error.innerText = message;
  resetOutput();
}
function setSuccess(element) {
  let formGroup = element.parentNode;
  if (formGroup.classList.contains("error")) {
    formGroup.classList.remove("error");
  }
}
const validateInputs = () => {
  const dayValue = day.value.trim();
  const monthValue = month.value.trim();
  const yearValue = year.value.trim();
  // check day for empty input
  if (dayValue === "" || dayValue === null) {
    setError(day);
    return;
    // check for invalid day
  } else if (dayValue > 31) {
    setError(day, "Must be a valid day");
    return;
    // check for february day
  } else if (monthValue == 2 && !checkLeapYear(yearValue) && dayValue > 28) {
    setError(day, "Must be a valid day");
    return;
    // check for months with max 30 days
  } else if (
    (monthValue == 4 ||
      monthValue == 6 ||
      monthValue == 9 ||
      monthValue == 11) &&
    dayValue > 30
  ) {
    setError(day, "Must be a valid day");
    return;
  } else {
    setSuccess(day);
  }

  if (yearValue === "" || yearValue === null) {
    setError(year);
    return;
  } else if (yearValue > currentYear) {
    setError(year, "Must be in the past");
    return;
  } else {
    setSuccess(year);
  }

  if (monthValue === "" || monthValue === null) {
    setError(month);
    return;
  } else if (monthValue > 12) {
    setError(month, "Must be a valid month");
    return;
  } else {
    setSuccess(month);
  }
  // get Year
  let yearAge = currentYear - yearValue;
  // get months
  if (currentMonth >= monthValue) {
    monthAge = currentMonth - monthValue;
  } else {
    yearAge--;
    monthAge = 12 + currentMonth - monthValue;
  }
  // get days
  if (currentDay >= dayValue) {
    dayAge = currentDay - dayValue;
  } else {
    monthAge--;
    if (monthValue == 2 && checkLeapYear(yearValue)) {
      dayAge = 29 + currentDay - dayValue;
    } else if (monthValue == 2 && checkLeapYear(yearValue)) {
      dayAge = 28 + currentDay - monthValue;
    } else if (
      monthValue == 4 ||
      monthValue == 6 ||
      monthValue == 9 ||
      monthValue == 11
    ) {
      dayAge = 30 + currentDay - dayValue;
    } else {
      dayAge = 31 + currentDay - dayValue;
    }
  }
  displayYears.innerText = yearAge;
  displayMonths.innerText = monthAge;
  displayDays.innerText = dayAge;
};
const checkLeapYear = (year) => {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return true;
  }
};
function resetOutput() {
  displayYears.innerText = "--";
  displayMonths.innerText = "--";
  displayDays.innerText = "--";
}
*/
