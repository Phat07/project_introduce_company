import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

export const sendMail = async (data) => { // Named export
  const { name, email, phone, content } = data;

  const mailOptions = {
    from: email,
    to: 'phongkd@thanhcongsolutions.com',
    subject: `Liên hệ mới từ ${name}`,
    html: `
      <h3>Thông tin liên hệ mới</h3>
      <p><strong>Họ và tên:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Số điện thoại:</strong> ${phone}</p>
      <p><strong>Nội dung:</strong></p>
      <p>${content}</p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};