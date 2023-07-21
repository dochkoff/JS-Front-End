function toggle() {
    const text = document.querySelector("#extra");
    const button = document.querySelector("span.button");

    text.style.display = text.style.display === 'none' ? 'block' : 'none';
    button.textContent = button.textContent === 'More' ? 'Less' : 'More';
}