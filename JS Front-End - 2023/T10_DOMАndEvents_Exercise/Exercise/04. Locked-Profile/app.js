function lockedProfile() {
    
    const buttons = Array.from(document.querySelectorAll('button'));

    buttons.forEach(button => {
        button.addEventListener("click", handleClick);
    });

    function handleClick(e) {
        const radioLocked = e.currentTarget.parentElement.querySelector(
            'input[type="radio"]'
        );

        if (radioLocked.checked) {
            return;
        }

        const info = e.currentTarget.parentElement.querySelector("div");
        const isHidden = e.currentTarget.textContent === "Show more";
        
        info.style.display = isHidden ? "block" : "none";
        e.currentTarget.textContent=isHidden?"Hide it":"Show more"
    }
}