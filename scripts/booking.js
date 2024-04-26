/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

var costPerDay = 35;
var daysSelected = 0;
var totalCost = 0;

var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");

var full = document.getElementById("full");
var half = document.getElementById("half");
var clearDays = document.getElementById("clear-button");

var calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function add_color() {
  if (this.classList.contains("blue-hover")) {
    this.classList.add("clicked");
    daysSelected += 1;
  }

  totalCost = costPerDay * daysSelected;
  calculatedCost.innerHTML = totalCost;
}

monday.addEventListener("click", add_color);
tuesday.addEventListener("click", add_color);
wednesday.addEventListener("click", add_color);
thursday.addEventListener("click", add_color);
friday.addEventListener("click", add_color);

full.addEventListener("click", add_color);
half.addEventListener("click", add_color);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function remove_color() {
  monday.classList.remove("clicked");
  tuesday.classList.remove("clicked");
  wednesday.classList.remove("clicked");
  thursday.classList.remove("clicked");
  friday.classList.remove("clicked");

  totalCost = 0;
  calculatedCost.innerHTML = totalCost;
}

clearDays.addEventListener("click", remove_color);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function half_day() {
  costPerDay = 20;
  half.classList.add("clicked");
  full.classList.remove("clicked");
  totalCost = costPerDay * daysSelected;
  calculatedCost.innerHTML = totalCost;
}

half.addEventListener("click", half_day);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function full_day() {
  costPerDay = 35;
  full.classList.add("clicked");
  half.classList.remove("clicked");
  totalCost = costPerDay * daysSelected;
  calculatedCost.innerHTML = totalCost;
}

full.addEventListener("click", full_day);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
