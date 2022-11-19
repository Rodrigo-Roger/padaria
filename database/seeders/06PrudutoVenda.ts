import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProdutoVenda from 'App/Models/ProdutoVenda'

export default class extends BaseSeeder {
  public async run () {
    await ProdutoVenda.createMany([
      {produto_id:1, venda_id:7},
      {produto_id:4, venda_id:4},
      {produto_id:5, venda_id:3},
      {produto_id:7, venda_id:5},
      {produto_id:6, venda_id:1},
    ])
  }
}
