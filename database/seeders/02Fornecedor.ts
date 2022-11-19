import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fornecedor from 'App/Models/Fornecedor'

export default class extends BaseSeeder {
  public async run () {
    await Fornecedor.createMany([
      {nome:'distrubuidor1', CNPJ:'77.777.777/0001-77',telefone: 88888-8888},
      {nome:'distrubuidor2', CNPJ:'77.777.777/0001-77',telefone: 88888-8888},
      {nome:'distrubuidor3', CNPJ:'77.777.777/0001-77',telefone: 88888-8888},
      {nome:'distrubuidor4', CNPJ:'77.777.777/0001-77',telefone: 88888-8888},
      {nome:'distrubuidor5', CNPJ:'77.777.777/0001-77',telefone: 88888-8888},
      {nome:'distrubuidor6', CNPJ:'77.777.777/0001-77',telefone: 88888-8888},
      {nome:'distrubuidor7', CNPJ:'77.777.777/0001-77',telefone: 88888-8888},

    ])
  }
}
