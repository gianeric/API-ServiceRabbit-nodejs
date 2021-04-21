var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
      console.error('Erro: ', error0);
      throw error0;
    }

    console.log('Conectado com sucesso !');
    connection.createChannel(function(error1, channel) {
        if (error1) {
          console.error('Erro: ', error1);
          throw error1;
        }
        console.log('Canal criado com sucesso !');
    });
});