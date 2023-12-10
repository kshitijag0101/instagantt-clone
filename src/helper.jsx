export function initTasks() {
    const currentDate = new Date();
    const tasks = [
        {
            start: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                1
            ),
            end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                15
            ),
            name: "Strategy",
            id: "ProjectSample",
            progress: 25,
            type: "project",
            hideChildren: false,
            displayOrder: 1,
        },
        {
            start: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                1
            ),
            end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                2,
                12,
                28
            ),
            name: "Planning",
            id: "Task 0",
            progress: 45,
            type: "task",
            project: "ProjectSample",
            displayOrder: 2,
        },
        {
            start: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                2
            ),
            end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                4,
                0,
                0
            ),
            name: "Present Brief",
            id: "Task 1",
            progress: 25,
            type: "task",
            project: "ProjectSample",
            displayOrder: 3,
        },
        {
            start: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                4
            ),
            end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                8,
                0,
                0
            ),
            name: "Approval",
            id: "Task 2",
            progress: 10,
            type: "task",
            project: "ProjectSample",
            displayOrder: 4,
        },
        {
            start: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                8
            ),
            end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                9,
                0,
                0
            ),
            name: "Moodboard",
            id: "Task 3",
            progress: 2,
            type: "task",
            project: "ProjectSample",
            displayOrder: 5,
        },
        {
            start: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                8
            ),
            end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                10
            ),
            name: "Concept Web",
            id: "Task 4",
            type: "task",
            progress: 70,
            project: "ProjectSample",
            displayOrder: 6,
        },
        {
            start: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                15
            ),
            end: new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                15
            ),
            name: "Approval",
            id: "Task 6",
            progress: currentDate.getMonth(),
            type: "milestone",
            dependencies: ["Task 4"],
            project: "ProjectSample",
            displayOrder: 7,
        },
    ];
    return tasks;
}

export function getStartEndDateForProject(tasks, projectId) {
    const projectTasks = tasks.filter((t) => t.project === projectId);
    let start = projectTasks[0].start;
    let end = projectTasks[0].end;

    for (let i = 0; i < projectTasks.length; i++) {
        const task = projectTasks[i];
        if (start.getTime() > task.start.getTime()) {
            start = task.start;
        }
        if (end.getTime() < task.end.getTime()) {
            end = task.end;
        }
    }
    return [start, end];
}
