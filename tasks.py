import time

from celery import Celery

app = Celery('tasks',
             broker='amqp://guest@localhost:5672',
             backend='amqp://guest@localhost:5672'
             )


@app.task
def add(x, y):
    return x + y


@app.task
def done(x):
    time.sleep(2)
    return "done"
