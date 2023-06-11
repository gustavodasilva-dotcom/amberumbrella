import { IUser } from './usersService.types';

import nodemailer from 'nodemailer';

export class UsersService {
  public async SendSignUpEmail(user: IUser) {
    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;

    const transporter = nodemailer.createTransport({
      host: 'smtp.umbler.com',
      port: 587,
      auth: {
        user: email,
        pass: password
      }
    });

    await transporter.sendMail({
      from: email,
      to: user.email,
      replyTo: email,
      subject: "Hello and welcome!",
      text: "Test"
    })
      .then(info => {
        console.log(info);
      })
      .catch(err => {
        throw Error(err);
      });
  }
};