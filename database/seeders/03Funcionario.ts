import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {nome:'robson', CPF:'999.999.999-99', telefone:99999-9999, endereco:'qnn 9 conj D casa 13' }
    ])
  }
}
