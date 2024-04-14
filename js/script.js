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


/* FAQ PAGE*/


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

/* HEADER CHANGE */

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

/* TESTIMONIAL */

// Access the testimonials
    let testSlide = document.querySelectorAll('.testItem');
    // Access the indicators
    let dots = document.querySelectorAll('.dot');

    var counter = 0;

    // Add click event to the indicators
    function switchTest(currentTest){
        currentTest.classList.add('active');
        var testId = currentTest.getAttribute('attr');
        if(testId > counter){
            testSlide[counter].style.animation = 'next1 1.0s ease-in forwards';
            counter = testId;
            testSlide[counter].style.animation = 'next2 1.0s ease-in forwards';
        }
        else if(testId == counter){return;}
        else{
            testSlide[counter].style.animation = 'prev1 1.0s ease-in forwards';
            counter = testId;
            testSlide[counter].style.animation = 'prev2 1.0s ease-in forwards';
        }
        indicators();
    }

    // Add and remove active class from the indicators
    function indicators(){
        for(i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(' active', '');
        }
        dots[counter].className += ' active';
    }

    // Code for auto sliding
    function slideNext(){
        testSlide[counter].style.animation = 'next1 1.0s ease-in forwards';
        if(counter >= testSlide.length - 1){
            counter = 0;
        }
        else{
            counter++;
        }
        testSlide[counter].style.animation = 'next2 1.0s ease-in forwards';
        indicators();
    }
    function autoSliding(){
        deleteInterval = setInterval(timer, 4500);
        function timer(){
            slideNext();
            indicators();
        }
    }
    autoSliding();

    // Stop auto sliding when mouse is over the indicators
    const container = document.querySelector('.indicators');
    container.addEventListener('mouseover', pause);
    function pause(){
        clearInterval(deleteInterval);
    }

    // Resume sliding when mouse is out of the indicators
    container.addEventListener('mouseout', autoSliding);