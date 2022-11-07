import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {nome:'cleinton', CPF:'777.777.777-77', telefone:99999-9999, email:'a@gmail.com'}
    ])
  }
}
