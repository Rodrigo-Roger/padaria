import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Venda from 'App/Models/Venda'

export default class extends BaseSeeder {
  public async run () {
    await Venda.createMany([
      {valorTotal:'1000', data:new Date(2022-1-2),clienteId:1,funcionarioId:1 }
    ])
  }
}
