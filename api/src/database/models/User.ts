import { Schema, model } from 'mongoose';

import { IUser } from '../../services/users/usersService.types';

export const userModel = model<IUser>('User', new Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  refreshToken: String
}));