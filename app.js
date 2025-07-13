let inputslider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

//showing input slider value
sliderValue.textContent = inputslider.value;
inputslider.addEventListener("input", () => {
    sliderValue.textContent = inputslider.value;
});

genBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
});

let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"

//function to generate pasword 
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerchars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }

    let i = 1;
    while (i <= inputslider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}

copyIcon.addEventListener("click", () => {
    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";
        setTimeout(() => {
            copyIcon.innerText = "content_copy";
            copyIcon.title = "Copy to Clipboard";
        }, 3000);

    }
})
