import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Marca from 'App/Models/Marca'

export default class extends BaseSeeder {
  public async run () {
    await Marca.createMany([
      {nome:'coca-cola'},
      {nome:'zigs'},
      {nome:'malboro'},
      {nome:'Corote'},
      {nome:'hungria'},
      {nome:'fanta'},
      {nome:'tang'},
      
    ])
    
    
  }
}
