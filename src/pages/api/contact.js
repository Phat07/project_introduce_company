// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { name, email, phone, content } = req.body;

//   try {
//     await transporter.sendMail({
//       from: email, 
//       to: 'phongkd@thanhcongsolutions.com',
//       subject: `Liên hệ mới từ ${name}`,
//       html: `
//         <h3>Thông tin liên hệ mới</h3>
//         <p><strong>Họ và tên:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Số điện thoại:</strong> ${phone}</p>
//         <p><strong>Nội dung:</strong></p>
//         <p>${content}</p>
//       `,
//       replyTo: email 
//     });

//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// }
