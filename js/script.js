// animation
document.addEventListener('DOMContentLoaded', function () {
    var elementToAnimate = document.querySelector('#studentLogin');
    elementToAnimate.classList.add('animate');
});

// student log in
document.querySelector("#studentLogin").addEventListener('click',function () {
    window.location.href = 'https://pupexamination.ac.in/Login.aspx?Type=Student ';
});

// Alert
document.querySelector('#join').addEventListener('click', function () {
    document.querySelector('#alert').classList.add('active');
});

document.querySelector('.altertMSG').addEventListener('click', function (event) {
    event.stopPropagation(); // Stop the click event from bubbling up
});

document.querySelector('#alert').addEventListener('click', function () {
    document.querySelector('#alert').classList.remove('active');
});


// Join link 
document.querySelector('#joinMeBTN').addEventListener('click', function () {
    window.location.href = 'https://chat.whatsapp.com/HfYrn82B2h07xKbYx8VBJq';
});
