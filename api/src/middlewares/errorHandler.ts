import { Response } from "express";
import { ValidationError } from "yup";
import { StatusCodes } from "../models/StatusCodes";

export default function ErrorHandler(error: Error | ValidationError, res: Response) {
  var statusCode = StatusCodes.InternalServerError;
  var message: string | string[] = error?.message;

  if (error instanceof ValidationError) {
    statusCode = StatusCodes.BadRequest;
    message = error?.errors;
  }

  res.status(statusCode).json({
    error: {
      statusCode,
      message
    }
  });
};