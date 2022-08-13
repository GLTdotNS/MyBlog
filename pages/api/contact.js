

export default async function (req, res) {

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'georgitonkow@gmail.com',
      pass: "zzlvjcdrpwzmvkzz",
    },
    secure: true,
  })
  const mailData = {
    from: 'georgitonkow@gmail.com',
    to: 'georgitonkov94@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email + "Company: " + req.body.company,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }

  await new Promise((resolve, reject) => {
    
    transporter.sendMail(mailData, function (err, info) {
      if (err)
        console.log(err)
      else
        console.log(info)
        res.status(200).json({data: res.status});
    })
});
 
 
}