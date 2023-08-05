const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

const vacantionListElement = document.getElementById('list');

const loadButtonElement = document.getElementById('load-vacations');
const addButtonElement = document.getElementById('add-vacation');
const editButtonElement = document.getElementById('edit-vacation');

const nameElement = document.getElementById("name");
const daysElement = document.getElementById("num-days");
const dateElement = document.getElementById("from-date");

loadButtonElement.addEventListener('click', loadVacations);
addButtonElement.addEventListener('click', addVacation);
editButtonElement.addEventListener('click', editVacation);

let currentVacantionId = '';

async function loadVacations() {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    vacantionListElement.innerHTML = '';

    const vacantions = Object.keys(data).map(key => ({ _id: key, ...data[key]}));

    for (const vacantion of vacantions) {
        const vacantionElement = renderVacantion(vacantion);
        vacantionElement.setAttribute('data-vacantion-id', vacantion._id);

        vacantionListElement.appendChild(vacantionElement);
    }
}

async function addVacation(e) {
    e.preventDefault();

    const name = nameElement.value;
    const days = daysElement.value;
    const date = dateElement.value;

    if (!name || !days || !date) {
        return;
    }


    const vacantion = {
        name,
        days,
        date,
    };

    await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(vacantion),
    });

    clearForm();

    await loadVacations();
}

async function editVacation(e) {
    e.preventDefault();

    const name = nameElement.value;
    const days = daysElement.value;
    const date = dateElement.value;

    if (!name || !days || !date) {
        return;
    }


    const vacantion = {
        name,
        days,
        date,
        _id: currentVacantionId,
    };

    await fetch(`${BASE_URL}${currentVacantionId}`, {
        method: 'PUT',
        body: JSON.stringify(vacantion),
    });

    clearForm();

    addButtonElement.disabled = false;
    editButtonElement.disabled = true;

    await loadVacations();
}


function renderVacantion(vacantion) {
    const h2Element = document.createElement('h2');
    h2Element.textContent = vacantion.name;

    const h3DateElement = document.createElement('h3');
    h3DateElement.textContent = vacantion.date;

    const h3DaysElement = document.createElement('h3');
    h3DaysElement.textContent = vacantion.days;

    const changeButtonElement = document.createElement('button');
    changeButtonElement.className = 'change-btn';
    changeButtonElement.textContent = 'Change';

    const doneButtonElement = document.createElement('button');
    doneButtonElement.className = 'done-btn';
    doneButtonElement.textContent = 'Done';

    const vacantionContainer = document.createElement('div');
    vacantionContainer.className = 'container';
    vacantionContainer.appendChild(h2Element);
    vacantionContainer.appendChild(h3DateElement);
    vacantionContainer.appendChild(h3DaysElement);
    vacantionContainer.appendChild(changeButtonElement);
    vacantionContainer.appendChild(doneButtonElement);

    changeButtonElement.addEventListener('click', (e) => {
        nameElement.value = vacantion.name;
        daysElement.value = vacantion.days;
        dateElement.value = vacantion.date;

        currentVacantionId = vacantionContainer.getAttribute('data-vacantion-id');
        vacantionContainer.remove();

        addButtonElement.disabled = true;
        editButtonElement.disabled = false;
    });

    doneButtonElement.addEventListener('click', async (e) => {
        await fetch(`${BASE_URL}${vacantion._id}`, {
            method: 'DELETE',
        });

        await loadVacations();
    });

    return vacantionContainer;
}

function clearForm() {
    nameElement.value = '';
    daysElement.value = '';
    dateElement.value = '';
}
