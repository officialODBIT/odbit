// Function to show a popup with a custom message
function showPopup(message) {
  var popup = document.getElementById('popup');
  popup.querySelector('p').textContent = message;
  popup.style.display = 'block';
}

// Function to close the general popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Event listener for the sign-in form submission
document.getElementById('sign-in-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var specID = document.getElementById('specID').value;
  var pin = document.getElementById('pin').value;

  // Check for the correct SpecID and PIN pairs
  if ((specID === "495739672935" && pin === "6882") ||
      (specID === "495629572819" && pin === "1396") ||
      (specID === "495838492486" && pin === "19938") ||
      (specID === "4925537503891" && pin === "13395")) {
    document.getElementById('success-popup').style.display = 'block';
  } else {
    showPopup("Incorrect or not added to system");
  }
});

// Function to close the message popup
function closeMessagePopup() {
  document.getElementById('message-popup').style.display = 'none';
}

// Function to close the error popup
function closeErrorPopup() {
  document.getElementById('error-popup').style.display = 'none';
}

// Function to close the success popup
function closeSuccessPopup() {
  document.getElementById('success-popup').style.display = 'none';
}

// Function to toggle the visibility of the PIN field
function togglePassword() {
  var pinInput = document.getElementById("pin");
  pinInput.type = pinInput.type === "password" ? "text" : "password";
}

// Function to show the account request popup
function requestAccount() {
  document.getElementById('account-popup').style.display = 'block';
}

// Function to close the account request popup
function closeAccountPopup() {
  document.getElementById('account-popup').style.display = 'none';
}

// Event listener for the account request form submission
document.getElementById('account-request-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var accountSpecID = document.getElementById('accountSpecID').value;
  var accountPIN = document.getElementById('accountPIN').value;

  // Construct the message to send via Discord webhook
  var message = "New Account Request:\n" +
                "Name: " + name + "\n" +
                "Phone Number: " + phone + "\n" +
                "SpecID: " + accountSpecID + "\n" +
                "PIN: " + accountPIN;

  // Replace with your actual Discord webhook URL
  var discordWebhookUrl = "Yhttps://discord.com/api/webhooks/1323364399221702748/fp0LHvWA5s6BAbOB_VG0qwQrXn6_gekYty90vlmfU0PLy0BzQkIHGRTLsXfpdJ_FP_sC";

  fetch(discordWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: message
    })
  })
  .then(function(response) {
    if (response.ok) {
      alert("Account request submitted successfully.");
    } else {
      alert("There was an error submitting your request.");
    }
  })
  .catch(function(error) {
    console.error("Error:", error);
    alert("There was an error submitting your request.");
  });

  // Close the account request popup after submission
  closeAccountPopup();
});
