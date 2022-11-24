import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Venda from 'App/Models/Venda'

export default class extends BaseSeeder {
  public async run () {
    await Venda.createMany([
      {valorTotal:'1000', data:new Date(2022-10-12),clienteId:1,funcionarioId:1 },
      {valorTotal:'1500', data:new Date(2022-11-13),clienteId:2,funcionarioId:5 },
      {valorTotal:'150', data:new Date(2022-9-22),clienteId:5,funcionarioId:6 },
      {valorTotal:'200', data:new Date(2022-10-12),clienteId:4,funcionarioId:2 },
      {valorTotal:'500', data:new Date(2022-8-10),clienteId:3,funcionarioId:5 },
      {valorTotal:'5000', data:new Date(2022-4-14),clienteId:5,funcionarioId:7 },
      {valorTotal:'20', data:new Date(2022-5-5),clienteId:7,funcionarioId:5 },

    ])
  }
}
