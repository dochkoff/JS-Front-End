function deleteByEmail() {
    let emails = document.querySelectorAll('#customers tr td:nth-child(2)');
    let emailForDelition = document.getElementsByName('email')[0].value;

    for (const email of emails) {
        if (email.textContent===emailForDelition) {
            let row = email.parentNode;
            row.parentNode.removeChild(row);

                document
                .getElementById('result')
                .textContent = "Deleted.";
            
            return;
        }

        document
            .getElementById('result')
            .textContent = "Not found.";
    }
}