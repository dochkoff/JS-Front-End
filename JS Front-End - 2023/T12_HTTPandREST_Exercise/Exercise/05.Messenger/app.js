function attachEvents() {
    const MESSENGER_URL = 'http://localhost:3030/jsonstore/messenger';
    const submitButton = document.querySelector('#submit');
    const refreshButton = document.querySelector('#refresh');
    const authorInput = document.querySelector('input[name="author"]');
    const contentInput = document.querySelector('input[name="content"]');
    const messagesBox = document.querySelector('#messages');

    let message = {
        author:'',
        content:'',
    };

    submitButton.addEventListener('click', submition);
    refreshButton.addEventListener('click', refreshing);


    function submition() {
        message.author = authorInput.value;
        message.content = contentInput.value;
        fetch(MESSENGER_URL, {
            method: 'POST',
            body: JSON.stringify(message),
        });
        
        authorInput.value = '';
        contentInput.value = '';
    };

    function refreshing() {
        fetch(MESSENGER_URL)
            .then((res) => res.json())
            .then((messages) => {
                messagesBox.textContent = "";
                
                Object.values(messages).forEach(message => {
                    messagesBox.textContent += `${message.author}: ${message.content}\n`;
                });
                
                messagesBox.textContent.trimEnd();
            })
    }
}

attachEvents();