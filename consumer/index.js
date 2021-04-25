var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        console.log("Ocorreu um erro ao criar a conexão: ", error0);
        throw error0;
    }
    console.log('Conectado com sucesso !');
    
    connection.createChannel(function(error1, channel) {
        if (error1) {
            console.log("Ocorreu um erro ao criar o canal: ", error0);
            throw error1;
        }

        var queue = 'pedidos_node';

        channel.assertQueue(queue, {
            durable: true
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});