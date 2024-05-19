window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  var amount = document.getElementById("loan-amount");
  var years = document.getElementById("loan-years");
  var rate = document.getElementById("loan-rate");
  amount.value = 1.00;
  amount.years = 1.00;
  amount.rate = 1.00;
  update();
}



// Get the current values from the UI
// Update the monthly payment
function update() {
  var currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  var principle = values.amount;
  var interest = values.rate/ 12;
  var n = values.years * 12;
  var monthlyPayment = ((principle * interest)/(1 - Math.pow(1 + interest)-n)).toFixed(2);
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  var monthlyDOM = document.getElementById("montly-payment");
  monthlyDOM.innerText = "$" + monthly;
}
