import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProdutoHasVenda from 'App/Models/ProdutoHasVenda'

export default class extends BaseSeeder {
  public async run () {
    await ProdutoHasVenda.createMany([
      {produtos_id:1, vendas_id:1}
    ])
  }
}
