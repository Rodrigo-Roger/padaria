import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProdutoVenda from 'App/Models/ProdutoVenda'

export default class extends BaseSeeder {
  public async run () {
    await ProdutoVenda.createMany([
      {produtos_id:1, vendas_id:1}
    ])
  }
}
