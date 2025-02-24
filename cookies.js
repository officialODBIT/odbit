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
// Create a useless cookie
function storeCookie() {
    const cookieName = "UserData";
    const cookieValue = "This cookie does absolutely nothing!";
    const expirationDays = 7;

    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000)); // Set expiration
    const expires = "expires=" + date.toUTCString();

    document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=/`;
    console.log("A useless cookie has been created!");
}

// Call the function to create the cookie
createUselessCookie();
