var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    console.error('Erro: ', error0);
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
        throw error1;
    }

    var queue = 'pedidos_node';

    channel.assertQueue(queue, {
        durable: true
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, function(msg) {
        console.log(" [x] Received %s", msg.content.toString());

        //Temporarizador 2 segundos
        setTimeout(() => {
          console.log(" [x] Done %s");
          channel.ack(msg);
        }, 2000);
    }, {
        noAck: false
    });
  });
});