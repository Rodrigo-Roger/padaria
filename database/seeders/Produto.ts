import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produto from 'App/Models/Produto'

export default class extends BaseSeeder {
  public async run () {
    await Produto.createMany([
      {nome:'farinha da vóvó', validade:'04/22', preco:'0,90', fornecedor_id:1}
    ])
  }
}
