function hideCookieBanner() {
  const dontShowAgain = document.getElementById("dont-show-again").checked;
  if (dontShowAgain) {
    localStorage.setItem("hideCookieBanner", "true");
  }
  document.getElementById("cookie-banner").style.display = "none";
}

// Check if the banner should be hidden on page load
window.onload = function() {
  if (localStorage.getItem("hideCookieBanner") === "true") {
    document.getElementById("cookie-banner").style.display = "none";
  }
};
