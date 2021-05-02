const nodemailer = require("nodemailer");

async function envio_email() {
//module.exports = function envio_email() {

  //let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    /*host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'ophelia.marquardt71@ethereal.email',
        pass: 'RdEz51vrruf1qGxAvy'
    },*/
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "649d6878de61c6",
        pass: "81892937b6985c"
    },
    debug: false
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Gian Eric 👻" <gianeric08@gmail.com>', // sender address
    to: "guiguedin@gmail.com", // list of receivers
    subject: "Oláaa ✔", // Subject line
    text: "Pedido Enviado !", // plain text body
    html: '<img src="https://ci6.googleusercontent.com/proxy/eydQORfPLmp7lYFFt9Lf_V9gR4R8p_dkujOws8gzR9Z5eRNAKO1d8gxz0HFPv7goUDN-tKID_7R_TdZv6h7IGuUBKhLHZiOTHd7_sUhngqkKkzCkN3xp6RE=s0-d-e1-ft#https://image.info.mercadobitcoin.com.br/radar-cripto-ico-litecoin.png" width="20" height="20" style="border:0" alt="Mercado Bitcoin" class="CToWUd"></img><h2>Seu pedido foi enviado !</h2>'
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = envio_email().catch(console.error);