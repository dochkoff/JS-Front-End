function solve(input) {
    const initialBoardTasks = input.shift();
    let sprintBoard = {};

    for (let i = 0; i < initialBoardTasks; i++) {
        const [assignee, taskId, title, status, points] = input.shift().split(':');

        if (!sprintBoard.hasOwnProperty(assignee)) {
            sprintBoard[assignee] = [];
        }

        sprintBoard[assignee].push({ taskId, title, status, points })
    }

    const taskParser = {
        'Add New': addNewTask,
        'Change Status': changeStatus,
        'Remove Task': removeTask,
    }

    for (let i = 0; i < input.length; i++) {
        const taskType = input[i].split(':')[0];
        taskParser[taskType](...input[i].split(':').slice(1));
    }

    let toDoTasksTotalPoints = getTotalPointsForStatus('ToDo');
    console.log(`ToDo: ${toDoTasksTotalPoints}pts`);
    let inProgressTasksTotalPoints = getTotalPointsForStatus('In Progress');
    console.log(`In Progress: ${inProgressTasksTotalPoints}pts`);
    let codeReviewTasksTotalPoints = getTotalPointsForStatus('Code Review');
    console.log(`Code Review: ${codeReviewTasksTotalPoints}pts`);
    let doneTasksTotalPoints = getTotalPointsForStatus('Done');
    console.log(`Done Points: ${doneTasksTotalPoints}pts`);

    if (doneTasksTotalPoints>=toDoTasksTotalPoints+inProgressTasksTotalPoints+codeReviewTasksTotalPoints) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }

    function addNewTask(assignee, taskId, title, status, points) {
        if (sprintBoard.hasOwnProperty(assignee)) {
            sprintBoard[assignee].push({ taskId, title, status, points })
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function changeStatus(assignee, taskIdToChange, newStatus) {
        if (sprintBoard.hasOwnProperty(assignee)) {
            const taskToChange = sprintBoard[assignee].find((t) => t.taskId === taskIdToChange);
            if (taskToChange === undefined) {
                console.log(`Task with ID ${taskIdToChange} does not exist for ${assignee}!`);
            } else {
                taskToChange.status = newStatus;
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function removeTask(assignee, index) {
        if (sprintBoard.hasOwnProperty(assignee)) {
            if (sprintBoard[assignee].length <= index || index < 0) {
                console.log(`Index is out of range!`);
            } else {
                sprintBoard[assignee].splice(index, 1);
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function getTotalPointsForStatus(status) {
        return Object.values(sprintBoard)
            .reduce((totalPointsSum, tasks) => {
                return totalPointsSum + tasks.filter(t => t.status === status)
                    .map(t => Number(t.points))
                    .reduce((a, b) => a + b, 0);
            }, 0)
    }
}


solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
])