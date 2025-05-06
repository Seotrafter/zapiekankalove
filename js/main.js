document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");
    const declineCookiesButton = document.getElementById("decline-cookies");
    if (cookieBanner && !localStorage.getItem("cookiesAccepted") && !localStorage.getItem("cookiesDeclined")) {
        cookieBanner.style.display = "flex";
    }

    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener("click", function () {
            localStorage.setItem("cookiesAccepted", "true");
            if (cookieBanner) cookieBanner.style.display = "none";
        });
    }

    if (declineCookiesButton) {
        declineCookiesButton.addEventListener("click", function () {
            localStorage.setItem("cookiesDeclined", "true");
            if (cookieBanner) cookieBanner.style.display = "none";
        });
    }
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarCollapse = document.getElementById('navbarCollapse');

    if (navbarToggle && navbarCollapse) {
        navbarToggle.addEventListener('click', function() {
            navbarCollapse.classList.toggle('collapse');
        });
    }
});
