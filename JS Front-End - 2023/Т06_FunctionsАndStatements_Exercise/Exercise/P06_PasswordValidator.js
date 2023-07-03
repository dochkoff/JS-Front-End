function passValidator(password) {
    let isValid = true;

    if (password.length<6 || password.length>10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }
    
    for (let index = 0; index < password.length; index++) {
        const element = password[index];

        if (element.match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)) {
            console.log("Password must consist only of letters and digits");
            isValid = false;
            break;
        }
        
    }

    let digitsCount = 0;
    for (let index = 0; index < password.length; index++) {
        const element = password[index];
        
        if (element >= 0 && element <= 9) {
            digitsCount++;
        }
    }

    if (digitsCount<2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }
}

passValidator('Pa$s$s');