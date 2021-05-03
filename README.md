# API-ServiceRabbit-nodejs
Study of producers and consumers using queues in RabbitMQ with nodejs

Try the community Docker image:
> docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management

At the command prompt you can type the following command in cmd, to list the port on which the container will run RabbitMQ

> docker container ls

Result
>| CONTAINER   | ID                        | IMAGE                   | COMMAND             | CREATED            | STATUS | PORTS                                                                                                         | NAMES    |
>| ----------- | ------------------------- | ----------------------- | ------------------- | -------------------| ------ | ------------------------------------------------------------------------------------------------------------- | -------- |
>| 4f56218f00ff|   rabbitmq:3-management   | "docker-entrypoint.s…"  | About an hour ago   | Up About an hour   |        | 4369/tcp, 5671/tcp, 0.0.0.0:5672->5672/tcp, 15671/tcp, 15691-15692/tcp, 25672/tcp, 0.0.0.0:15672->15672/tcp   | rabbitmq |

Open RabbitMQ
> <link>localhost:15672</link>

Producing a message in the queue
<p align="center">
  <img src="https://imgur.com/SRUzP4s.gif" width="600" title="Screenshot">
</p>

Consuming a message from the queue with a limit of nine requests
<p align="center">
  <img src="https://imgur.com/Q0VEogT.gif" width="600" title="Screenshot">
</p>

Confirming receipt of email
<p align="center">
  <img src="https://imgur.com/2jjXhQZ.gif" width="600" title="Screenshot">
</p>



