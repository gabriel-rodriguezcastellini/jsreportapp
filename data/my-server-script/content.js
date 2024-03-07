const axios = require('axios')
const nodemailer = require('nodemailer')

async  function beforeRender(req, res)  {
  const resData =  await axios.get('http://jsonplaceholder.typicode.com/posts')
  console.log(resData.data)
  req.data.posts = resData.data
}

async function afterRender(req, res) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'marisa53@ethereal.email',
          pass: '3Z5hJX4aUmv7eZEXgb'
      }
    })  

    await transporter.sendMail({
      from: "Jan Blaha <test@gmail.com>",
      to: "gcastellini@makingsense.com",
      subject: "Sending email from node.js",
      text: "See the attached report",
      html: "<b>See the attached report</b>",
      attachments: [
      {  
        filename: 'Report.pdf',
        content: Buffer.from(res.content)
      }],
    })       
}