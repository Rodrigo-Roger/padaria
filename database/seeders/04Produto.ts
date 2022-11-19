import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produto from 'App/Models/Produto'

export default class extends BaseSeeder {
  public async run () {
    await Produto.createMany([
      {nome:'farinha da vóvó', validade:new Date(2022-8-10), preco:'5,90', fornecedor_id:7},
      {nome:'Maizena', validade:new Date(2024-8-10), preco:'10,90', fornecedor_id:1},
      {nome:'Tang', validade:new Date(2023-8-10), preco:'4,90', fornecedor_id:2},
      {nome:'Leite', validade:new Date(2022-8-11), preco:'15,90', fornecedor_id:1},
      {nome:'Café', validade:new Date(2022-12-20), preco:'15,90', fornecedor_id:3},
      {nome:'Coca-cola', validade:new Date(2022-10-10), preco:'5,90', fornecedor_id:1},
      {nome:'Fanta', validade:new Date(2022-8-10), preco:'6,90', fornecedor_id:5},
    ])
  }
}
