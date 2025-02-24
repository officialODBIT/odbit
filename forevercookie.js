function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration time
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/"; // Set the cookie
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function hideCookieBanner() {
    const cookieBanner = document.getElementById("cookie-banner");
    const dontShowAgain = document.getElementById("dont-show-again");
    
    // Set the cookie to indicate that the user has accepted cookies
    if (dontShowAgain.checked) {
        setCookie("acceptedCookies", "true", 365 * 100); // Set cookie for 100 years if checked
    } else {
        setCookie("acceptedCookies", "true", 365); // Set cookie for 1 year if not checked
    }

    cookieBanner.style.display = "none"; // Hide the cookie banner
}

function checkCookieConsent() {
    if (!getCookie("acceptedCookies")) {
        document.getElementById("cookie-banner").style.display = "block"; // Show the cookie banner if not accepted
    } else {
        document.getElementById("cookie-banner").style.display = "none"; // Hide the banner if already accepted
    }
}

// Call the function on page load
checkCookieConsent();
