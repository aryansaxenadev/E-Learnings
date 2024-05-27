import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: "587",
    auth: {
      user: "saxenashivansh48123@gmail.com",
      pass: "mzac lhdv ejus gzyh",
    },
  });

  await transporter.sendMail({
    to,
    subject,
    text,
  });
};
