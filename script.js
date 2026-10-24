const greeting = document.querySelector("#greeting-text");
const greetButton = document.querySelector("#greet-btn");

function sayHello() {
    greeting.textContent = "Hello! I'm Divit.";
}

greetButton.addEventListener("click", sayHello);

const nameInput = document.querySelector("#visitor-name");
const welcomeButton = document.querySelector("#name-btn");
const welcomeMessage = document.querySelector("#personal-greeting");

function greetVisitor() {
    const visitorName = nameInput.value.trim();

    if (visitorName === "") {
        welcomeMessage.textContent = "Please enter your name first.";
    } else {
        welcomeMessage.textContent = "Hello, " + visitorName + "!";
    }
}

welcomeButton.addEventListener("click", greetVisitor);

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-feedback");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formMessage.textContent = "Thanks for your message!";
});
