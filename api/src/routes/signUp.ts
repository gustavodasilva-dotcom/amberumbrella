import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { UsersService } from '../services/users/usersService';
import ErrorHandler from '../middlewares/errorHandler';
import { signUpBody } from '../validators/signUp/sign-up-body';
import { userModel } from '../database/models/User';

import { StatusCodes } from '../models/StatusCodes';

const router = express.Router();
const service = new UsersService();

router.post('/', async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const validBody = signUpBody.validateSync(body, {
      abortEarly: false,
      stripUnknown: true
    });

    const findUser = await userModel.findOne({ email: validBody.email });

    if (findUser) {
      return res.status(StatusCodes.Conflict).json({
        error: {
          statusCode: StatusCodes.Conflict,
          message: `There's already a user registered with the email ${validBody.email}`
        }
      });
    }

    validBody.password = await bcrypt.hash(validBody.password, 10);

    const result = await userModel.create({ ...validBody });

    await service.SendSignUpEmail(result);

    res.status(StatusCodes.Created).json(result);
  } catch (error: any) {
    ErrorHandler(error, res);
  }
});

module.exports = router;