/* ========== THEME SWITCH ======== 

const currentTheme = localStorage.getItem("theme");
const themes = document.querySelectorAll(".theme");

if (currentTheme) {
   document.documentElement.setAttribute('data-theme', currentTheme);
}


themes.forEach(theme => {

    // GETS ID OF THEME CLICKED, USED FOR ATTRIBUTE NAME
        theme.addEventListener("click", (e) => {
             myID = `${theme.id}`;
             console.log(myID)
             document.documentElement.setAttribute('data-theme', myID);
             localStorage.setItem('theme', myID);
    }); 

});

*/


// function to show modal 
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

// function to close modal 
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// open modals
const teamMemberImages = document.querySelectorAll('.team-member');

teamMemberImages.forEach((image) => {

  image.addEventListener('click', function() {
    const targetModal = this.getAttribute('data-target');
    openModal(targetModal);
  });
});

// close modals 
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal-bio');
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};