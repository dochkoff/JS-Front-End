function subtract() {
    const firstNumber = Number(document.querySelector("#firstNumber").value);
    const secondNumber = Number(document.querySelector("#secondNumber").value);

    const subtract = firstNumber - secondNumber;

    const output = document.querySelector("#result");
    output.textContent = subtract;
}