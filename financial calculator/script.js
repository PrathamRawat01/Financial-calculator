// Get the input values from the form
const principalInput = document.getElementById("principal");
const interestInput = document.getElementById("interest");
const termInput = document.getElementById("term");

// Get the result element to display the future value
const resultElement = document.getElementById("result");

// Add a click event listener to the calculate button
document.getElementById("calculate").addEventListener("click", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the input values and convert to numbers
  const principal = parseFloat(principalInput.value);
  const interest = parseFloat(interestInput.value);
  const term = parseFloat(termInput.value);

  // Calculate the future value
  const fv = principal * Math.pow(1 + interest/100, term);

  // Display the result
  resultElement.textContent = `Future Value: $${fv.toFixed(2)}`;
});
