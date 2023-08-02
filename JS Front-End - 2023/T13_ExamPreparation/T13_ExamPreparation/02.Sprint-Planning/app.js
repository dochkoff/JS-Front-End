window.addEventListener('load', solve);

function solve() {
    tasks = {};
    taskInputs = {
        title: document.getElementById('title'),
        description: document.getElementById('description'),
        label: document.getElementById('label'),
        points: document.getElementById('points'),
        assignee: document.getElementById('assignee'),
    };

    actionSelectors = {
        createBtn: document.getElementById('create-task-btn'),
        deleteBtn: document.getElementById('delete-task-btn'),
        taskSection: document.getElementById('tasks-section'),
        totalPoints: document.getElementById('total-sprint-points'),
        taskId: document.getElementById('task-id'),
    };

    const labelClasses = {
        'Feature': 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority',
    };

    const icons = {
        Feature: '&#8865;',
        'Low Priority Bug': '&#9737;',
        'High Priority Bug': '&#9888;',
    };

    actionSelectors.createBtn.addEventListener('click', createTask);
    actionSelectors.deleteBtn.addEventListener('click', deleteTask);

    function createTask(){
        if (Object.values(taskInputs).some(input => input.value==='')) {
            clearAllInputs();
            return;
        }

        task = {
            id: `taks-${Object.values(tasks).length + 1}`,
            title: taskInputs.title.value,
            description: taskInputs.description.value,
            label: taskInputs.label.value,
            points: Number(taskInputs.points.value),
            assignee: taskInputs.assignee.value,
        }

        tasks[task.id] = task;

        const article = createElement('article', actionSelectors.taskSection, null, task.id, ['task-card']);
        createElement('div', article, `${task.label} ${icons[task.label]}`, null, ['task-card-label', labelClasses[task.label]], null, true);
        createElement('h3', article, task.title, null, ['task-card-title']);
        createElement('p', article, task.description, null, ['task-card-description']);
        createElement('div', article, `Estimated at ${task.points} pts`, null, ['task-card-points']);
        createElement('div', article, `Assigned to: ${task.assignee}`, null, ['task-card-assignee']);

        const divActions = createElement('div', article, null, null, ['task-card-actions']);
        const delBtnAct = createElement('button', divActions, 'Delete');

        delBtnAct.addEventListener('click', loadDeleteConfirm);

        calculateTotalPoints();
        clearAllInputs();
    }

    function calculateTotalPoints() {
        const totalPoints = Object.values(tasks).reduce((acc, curr) => acc + curr.points, 0);
        actionSelectors.totalPoints.textContent = `Total Points ${totalPoints}pts`;
    }

    function deleteTask() {
        let taskId = actionSelectors.taskId.value;
        let tasksElement = document.querySelector(`#${taskId}`);
        tasksElement.remove();
        delete tasks[taskId];
        
        Object.values(taskInputs).forEach((input) => {
            input.disabled = true;
        })

        clearAllInputs();
        calculateTotalPoints();

        actionSelectors.deleteBtn.disabled = true;
        actionSelectors.createBtn.removeAttribute('disabled');
    }

    function clearAllInputs(){
        Object.values(taskInputs).forEach((input) => {
            input.value = '';
        })
        // taskInputs.label.value = "Feature";
    }

    function loadDeleteConfirm(event) {
        const taskId = event.currentTarget.parentElement.parentElement.getAttribute('id');
        taskInputs.title.value = tasks[taskId].title;
        taskInputs.description.value = tasks[taskId].description;
        taskInputs.label.value = tasks[taskId].label;
        taskInputs.points.value = tasks[taskId].points;
        taskInputs.assignee.value = tasks[taskId].assignee;

        Object.values(taskInputs).forEach((input) => {
            input.disabled = true;
        })

        actionSelectors.createBtn.disabled = true;
        actionSelectors.deleteBtn.removeAttribute('disabled');
        
        actionSelectors.taskId.value = taskId;
    }

    function createElement(type, parentNode, content, id, classes, attributes, useInnerHtml) {
        const htmlElement = document.createElement(type);
        
        if (content && useInnerHtml) {
            htmlElement.innerHTML = content;
        } else {
            if (content && type !== 'input') {
                htmlElement.textContent = content;
            }
            if (content && type === 'input') {
                htmlElement.value = content;
            }
        }
        if (id) {
            htmlElement.id = id;
        }

        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes);
        }

        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }
        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }
        return htmlElement;
    }
}