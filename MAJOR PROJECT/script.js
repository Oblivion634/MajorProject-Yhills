document.getElementById('loginLink').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('loginForm').classList.add('active');
});

document.querySelectorAll('.close').forEach(function (el) {
    el.addEventListener('click', function () {
        document.getElementById('modal').style.display = 'none';
        document.querySelectorAll('.form').forEach(function (form) {
            form.classList.remove('active');
        });
    });
});
function login() { alert("Login successful") }
function signup() { alert("SignUp successful") }

function showSignupForm() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");


    loginForm.classList.remove('active');
    signupForm.classList.add('active');
}


function showLoginForm() {
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");

    loginForm.classList.add('active');
    signupForm.classList.remove('active');
}

document.getElementById("register-link").addEventListener("click", function (event) {
    event.preventDefault();
    showSignupForm();
});


document.getElementById("login-link").addEventListener("click", function (event) {
    event.preventDefault();
    showLoginForm();
});

document.addEventListener('DOMContentLoaded', function () {
    var scrollLinks = document.querySelectorAll('.scrollToClass');

    scrollLinks.forEach(function (scrollLink) {
        scrollLink.addEventListener('click', function (e) {
            e.preventDefault();
            var targetClass = this.getAttribute('data-target');
            var targetElement = document.querySelector(targetClass);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});


window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > navbar.offsetHeight) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});
