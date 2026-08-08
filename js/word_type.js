const name = document.getElementById("name");

const words = [
    "Software Engineer",
    "C++ Developer",
    "Web Developer",
    "Desktop App Developer",
    "Problem Solver",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!deleting) {
        name.textContent = currentWord.substring(0, charIndex + 1) + "_";
        charIndex++;
        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500); 
            return;
        }
    } else {
        name.textContent = currentWord.substring(0, charIndex - 1) + "_";
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}
typeEffect();

setInterval(() => {
    if (name.textContent.endsWith("_"))
        name.textContent = name.textContent.slice(0, -1);
    else
        name.textContent += "_";
}, 500);



const cards = document.querySelector(".cards");

cards.addEventListener("wheel", function (event) {
    event.preventDefault();

    cards.scrollBy({
        left: event.deltaY,
        behavior: "smooth"
    });
}, { passive: false });