/* You can add a simple interaction like pop-up when someone clicks on a course.
document.addEventListener('DOMContentLoaded', function() {
    // Code to run after the DOM is fully loaded
    const courseSection = document.querySelector('section:nth-child(2)');

    courseSection.addEventListener('click', function() {
        alert('This feature is under development.');
    });
});
*/
// Get modal and close button elements
var modal = document.getElementById("signupModal");
var closeButton = document.querySelector(".close-btn");

// Open the modal when "Sign Up" is clicked
document.getElementById("signupBtn").addEventListener("click", function() {
    modal.style.display = "block";
});

// Close the modal when "x" (close button) is clicked
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close the modal when clicking anywhere outside of it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
