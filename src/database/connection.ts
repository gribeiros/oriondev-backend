import { createConnection } from 'typeorm'

class DataBase {
  constructor () {
    this.init()
  }

  async init (): Promise<void> {
    await createConnection().then(() => { console.dir('[SERVER] Connect database') })
  }
}

export default new DataBase()
