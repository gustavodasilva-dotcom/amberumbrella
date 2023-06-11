import mongoose, { ConnectOptions } from 'mongoose';

export default async function ConnectDb() {
  try {
    await mongoose.connect(process.env.DATABASE_URI!, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    } as ConnectOptions);
  } catch (error) {
    console.log(error);
  }
};