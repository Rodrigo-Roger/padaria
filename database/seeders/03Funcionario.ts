import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {nome:'Davi', CPF:'999.999.999-99', telefone:99999-9999, endereco:'qnn 9 conj D casa 16' },
      {nome:'Roberta', CPF:'999.999.999-99', telefone:99999-9999, endereco:'qnn 19 conj D casa 17' },
      {nome:'Giovanna', CPF:'999.999.999-99', telefone:99999-9999, endereco:'qnn 8 conj D casa 18' },
      {nome:'Marcia', CPF:'999.999.999-99', telefone:99999-9999, endereco:'qnn 26 conj D casa 19' },
      {nome:'Robson', CPF:'999.999.999-99', telefone:99999-9999, endereco:'qnn 9 conj D casa 13' },
      {nome:'Cleber', CPF:'999.999.999-99', telefone:99999-9999, endereco:'qnn 10 conj D casa 14' },
      {nome:'Gabriel', CPF:'999.999.999-99', telefone:99999-9999, endereco:'qnn 8 conj D casa 15' },
      

    ])
  }
}
