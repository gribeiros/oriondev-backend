import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { errorHandler, errorNotFound } from '@middlewares/ErrorHandler'
import Database from './database/connection'

import dotenv from 'dotenv'

class App {
    public application!: express.Application

    constructor () {
      this.application = express()
      Database.init()// start connection database
      this.middleware()
    }

    private middleware (): void {
      this.application.use(express.json())
      this.application.use(express.urlencoded({ extended: true }))
      this.application.use(cors())
      this.application.use(morgan('dev'))
      this.routes(this.application)// Function to start routes
      this.errorHandlers(this.application)// Function to start error´s
      dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env' })
    }

    private routes (app: express.Application): void {
      app.get('/', (req: express.Request, res: express.Response) => { res.json({ serverStatus: true }) })
    }

    private errorHandlers (app: express.Application): void {
      app.use(errorNotFound)
      app.use(errorHandler)
    }
}

export default new App().application
