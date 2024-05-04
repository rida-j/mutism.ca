var modalOpen = false; // State variable to prevent multiple triggers

    // Get modal and buttons
    var modal = document.getElementById('myModal');
    var openPopup = document.getElementById('openPopup');
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');

    // Open the modal when the link is clicked
    openPopup.addEventListener('click', function (e) {
        if (!modalOpen) { // Check if modal is already open
            e.preventDefault(); // Prevent the default action
            modalOpen = true; // Set state to prevent duplicate triggers
            modal.style.display = 'flex'; // Show the modal
        }
    });

    // Close the modal when the "No" button is clicked
    noButton.addEventListener('click', function () {
        modal.style.display = 'none';
        modalOpen = false; // Reset state when modal closes
    });

    // Redirect to the link when the "Yes" button is clicked
    yesButton.addEventListener('click', function () {
        modal.style.display = 'none';
        modalOpen = false; // Reset state when modal closes
        // Redirect to a specific URL
        window.location.href = 'https://www.paypal.com/donate?token=jsPKX89x0R1uq4dGiecCxhmkJ0GrCZ8bvOvQG6tHhAhSm6yRx5GDNblw5LkU7HX8ssiiViFhbgG8WZ77'; // Change to the desired URL
    });


document.addEventListener('DOMContentLoaded', function() {
    var readMoreButtons = document.querySelectorAll('.read-more');
    
    readMoreButtons.forEach(function(readMoreButton) {
        var textContent = readMoreButton.previousElementSibling;

        readMoreButton.addEventListener('click', function() {
            textContent.classList.toggle('expanded');
            if (textContent.classList.contains('expanded')) {
                textContent.style.maxHeight = 'none';
                readMoreButton.textContent = 'Read less';
            } else {
                textContent.style.maxHeight = '500px'; // Set the initial max-height here
                readMoreButton.textContent = 'Read more';
            }
        });
    });
});


/* TO OPEN FAQS*/


const questions = document.querySelectorAll(".question");
var answers = document.querySelectorAll('.question.active + .answer');
var answerClose = document.querySelectorAll(".answer");


questions.forEach(question => {
    var divBelow = question.nextElementSibling;
    
    question.addEventListener("click", () => {
        // Check if the clicked question has the active class
        var isActive = question.classList.contains("active");


        if (!isActive) {
            // If not active, set padding-bottom and then set max height to its original height
            divBelow.style.paddingBottom = '30px';
            divBelow.style.maxHeight = divBelow.scrollHeight + 'px';
            // Apply transition styles after setting maxHeight
            divBelow.style.transition = 'max-height .2s ease, padding-bottom .5s ease-in-out, opacity 0.5s ease-in-out';
            divBelow.style.position = 'static';
            divBelow.style.opacity = '1';
        } else {
            // If active, remove padding-bottom, then set max height to 0px
            divBelow.style.paddingBottom = '0';
            divBelow.style.maxHeight = '0px';
            // Apply transition styles after setting maxHeight
            divBelow.style.transition = 'max-height .2s ease, padding-bottom .5s ease-in-out, opacity 0.5s ease-in-out';
        }

        // Toggle the active class
        question.classList.toggle("active");
    }); 
});

/* HEADER CHANGE ON SCROLL */

// Select the header element
const header = document.getElementById('header-top');

// Function to change header background color on scroll
function changeHeaderBackground() {
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'white'; // Change to white background
        header.style.borderBottom = '0.2px solid black';
    } else {
        header.style.backgroundColor = 'transparent'; // Change back to default color
           header.style.borderBottom = '0px';
    }
}

// Event listener for scroll event
window.addEventListener('scroll', changeHeaderBackground);





