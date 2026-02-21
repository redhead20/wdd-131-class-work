// form.js
const theForm = document.querySelector("#checkoutForm");
const paymentSelect = document.querySelector("#paymentMethod");

const creditCardContainer = document.querySelector("#creditCardNumberContainer");
const paypalContainer = document.querySelector("#paypalUsernameContainer");

const creditInput = document.querySelector("#creditCardNumber");
const paypalInput = document.querySelector("#paypalUsername");

function togglePaymentDetails(e) {
  const value = e.target.value;

  // Hide both first
  paypalContainer.classList.add("hide");
  creditCardContainer.classList.add("hide");

  // Remove required from both (important!)
  paypalInput.required = false;
  creditInput.required = false;

  // Show selected and add required back
  if (value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    creditInput.required = true;
  } else if (value === "paypal") {
    paypalContainer.classList.remove("hide");
    paypalInput.required = true;
  }

  // aria-expanded belongs to the select (the control)
  paymentSelect.setAttribute(
    "aria-expanded",
    value === "creditCard" || value === "paypal" ? "true" : "false"
  );
}

paymentSelect.addEventListener("change", togglePaymentDetails);

// ---------- validations and errors ----------
function displayError(msg) {
  document.querySelector(".errors").textContent = msg;
}

function isCardNumberValid(number) {
  // Accept only this fake card number for the assignment
  return number === "1234123412341234";
}

function submitHandler(event) {
  event.preventDefault();

  let errorMsg = "";
  displayError("");

  // If credit card is chosen, validate card + expiration
  if (paymentSelect.value === "creditCard") {
    const cardNum = creditInput.value.trim();

    // 16 digits only
    if (!/^\d{16}$/.test(cardNum)) {
      errorMsg += "Card number must be 16 digits\n";
    } else if (!isCardNumberValid(cardNum)) {
      errorMsg += "Card number is not valid\n";
    }

    // Expiration validation
    const expYear = Number(document.querySelector("#year").value);
    const expMonth = Number(document.querySelector("#month").value);

    // Basic checks (optional but helpful)
    if (!(expMonth >= 1 && expMonth <= 12) || !(expYear >= 0 && expYear <= 99)) {
      errorMsg += "Expiration must be a valid month (MM) and year (YY)\n";
    } else {
      const currentDate = new Date();
      const fullYear = 2000 + expYear;

      // getMonth() is 0-based, expMonth is 1-based
      const currentMonth = currentDate.getMonth() + 1;

      if (
        fullYear < currentDate.getFullYear() ||
        (fullYear === currentDate.getFullYear() && expMonth <= currentMonth)
      ) {
        errorMsg += "Card is expired\n";
      }
    }
  }

  // If PayPal is chosen, make sure username exists (browser required will handle too)
  if (paymentSelect.value === "paypal") {
    if (paypalInput.value.trim() === "") {
      errorMsg += "PayPal username is required\n";
    }
  }

  // Must choose a payment method
  if (paymentSelect.value === "") {
    errorMsg += "Please select a payment method\n";
  }

  if (errorMsg !== "") {
    displayError(errorMsg);
    return;
  }

  // Success: replace the form with a confirmation message
  theForm.innerHTML = "<h2>Thank you for your purchase.</h2>";
}

theForm.addEventListener("submit", submitHandler);