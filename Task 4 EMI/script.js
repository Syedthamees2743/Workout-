function calculateEMI() {

  var loanAmount = document.getElementById("loanAmount").value;
  var interestRate = document.getElementById("interestRate").value;
  var tenureValue = document.getElementById("tenureValue").value;
  var tenureType = "months"; // Set to months as per template design

  // Logic preserved from original code
  if (tenureType == "years") {
    tenureValue = tenureValue * 12;
  }

  var monthlyRate = interestRate / 12 / 100;

  var emi =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureValue)) /
    (Math.pow(1 + monthlyRate, tenureValue) - 1);

  // Calculating extra details for the template
  var totalPayment = emi * tenureValue;
  var totalInterest = totalPayment - loanAmount;

  // Updating the UI elements
  document.getElementById("emiResult").innerText = "₹" + Math.round(emi);
  document.getElementById("interestResult").innerText = "₹" + Math.round(totalInterest);
  document.getElementById("principalResult").innerText = "₹" + Math.round(loanAmount);
  document.getElementById("monthsResult").innerText = tenureValue;
  
}