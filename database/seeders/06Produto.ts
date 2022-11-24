import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produto from 'App/Models/Produto'

export default class extends BaseSeeder {
  public async run () {
    await Produto.createMany([
      {nome:'refrigerante', sabor:'cola', validade:new Date(2022-9-11), preco:'5,90', fornecedor_id:7, marca_id:1 },
      {nome:'essencia', sabor:'uva', validade:new Date(2024-8-10), preco:'10,90', fornecedor_id:1, marca_id:1},
      {nome:'cigarro', sabor:'fumo', validade:new Date(2023-9-11), preco:'4,90', fornecedor_id:6, marca_id:6},
      {nome:'carvão', sabor:'-', validade:new Date(2022-8-11), preco:'15,90', fornecedor_id:4, marca_id:7},
      {nome:'ice', sabor:'morango',validade:new Date(2022-11-20), preco:'15,90', fornecedor_id:3, marca_id:4},
      {nome:'smirnoff', sabor:'limão', validade:new Date(2022-10-10), preco:'5,90', fornecedor_id:1, marca_id:3},
      {nome:'Fanta', sabor:'cola', validade:new Date(2022-8-10), preco:'6,90', fornecedor_id:1, marca_id:1},
    ])
  }
}
