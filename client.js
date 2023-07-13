const celery = require('celery-node');

const client = celery.createClient(
    "amqp://localhost:5672",
    "amqp://"
);

const task = client.createTask("tasks.add");
const result = task.applyAsync([2, 2]);
result.get().then(data => {
    console.log(data);
});

const task2 = client.createTask("tasks.done");
const result2 = task2.applyAsync([""]);

result2.get().then(data => {
    console.log(data)
})
