function addItem() {
    const textInput = document.querySelector('#newItemText');
    const valueInput = document.querySelector('#newItemValue');

    const option = document.createElement('option');
    option.textContent = textInput.value;
    option.value = valueInput.value;

    const menu = document.querySelector('#menu');
    menu.appendChild(option);

    textInput.value = "";
    valueInput.value = "";
}