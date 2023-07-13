This is a demo to push execute python tasks from JS using rabbitMQ and celery

# Packages used
- JS: [celery-node](https://celery-node.js.org/#/)
- Python: [celery==4.4.6](https://docs.celeryq.dev/en/stable/getting-started/introduction.html)

# Steps
1) Make sure RabbitMQ instance is running through docker at port 5672
2) celery -A tasks worker --loglevel=INFO (tasks is the name of the python file)
3) node client.js
