import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProdutoVenda from 'App/Models/ProdutoVenda'

export default class extends BaseSeeder {
  public async run () {
    await ProdutoVenda.createMany([
      {produto_id:1, venda_id:1}
    ])
  }
}
