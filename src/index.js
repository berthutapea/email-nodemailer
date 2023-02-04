const nodemailer = require('nodemailer');

// membuat transporter (koneksi ke email)
const transporter = nodemailer.createTransport({
  host: 'info@msnproduction.com', // isikan sesuai email Anda
  port: 587,
  secure: false,
  auth: {
    user: 'info@msnproduction.com', // isikan email Anda
    pass: 'i95}w+z[MoC^' // isikan password email Anda
  }
});

// Fungsi untuk mengirim email
const sendEmail = (name, email, subject, message) => {
  const mailOptions = {
    from: '"Your Name" <info@msnproduction.com>', // isikan sesuai email Anda
    to: email,
    subject: subject,
    html: `
      <p>Nama: ${name}</p>
      <p>Email: ${email}</p>
      <p>Pesan: ${message}</p>
    `
  };

  // Mengirim email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email terkirim: ', info.messageId);
  });
};

// Menangkap data dari form
const form = document.querySelector('.php-email-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('textarea[name="message"]').value;

  sendEmail(name, email, subject, message);
});
