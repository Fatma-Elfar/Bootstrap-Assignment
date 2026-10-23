
document.querySelectorAll('.item2 > .dropdown-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.nextElementSibling.classList.toggle('show');
    });
});

const words = ["Designer", "Developer", "Freelancer", "Photographer"];
const el = document.getElementById("typed-text");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
    const current = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    el.textContent = current.substring(0, charIndex);

    let delay = deleting ? 50 : 100;

    if (!deleting && charIndex === current.length) {
        delay = 1500;          // وقفة بعد ما الكلمة تكتمل
        deleting = true;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
    }

    setTimeout(type, delay);
}

type();