document.addEventListener("DOMContentLoaded", function() {

    // Welcome screen click alert
    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.addEventListener('click', function() {
            alert("Welcome screen clicked! Showing your bio-data.");
            welcomeScreen.style.display = 'none';
        });
    }

    // Go to Resume button alert
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert("Navigating to Resume!");
            window.location.href = "resume.html";
        });
    }

});
