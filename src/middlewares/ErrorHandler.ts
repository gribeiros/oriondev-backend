import { NextFunction, Request, Response } from 'express'
import IError from '@interfaces/IError'
import * as HttpStatus from 'http-status-codes'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function errorHandler (error: IError, req: Request, res: Response, next: NextFunction): Promise<void> {
  res.status(error.status || HttpStatus.BAD_REQUEST).json({ message: error.message || 'Internal Server Error' })
}

export async function errorNotFound (req: Request, res: Response, next: NextFunction): Promise<void> {
  const error: IError = {
    status: HttpStatus.NOT_FOUND,
    message: 'Not Found'
  }
  next(error)
}
