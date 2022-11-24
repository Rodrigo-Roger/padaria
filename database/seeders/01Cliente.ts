import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      
      {nome:'Jorge', CPF:'555.555.555-55', telefone:99999-9999, email:'Jorge@gmail.com'},
      {nome:'Matheus', CPF:'000.000.000-00', telefone:99999-9999, email:'Matheus@gmail.com'},
      {nome:'Pedro', CPF:'444.444.444-44', telefone:99999-9999, email:'Pedro@gmail.com'},
      {nome:'Victor', CPF:'333.333.333-33', telefone:99999-9999, email:'Victor@gmail.com'},
      {nome:'Rodrigo', CPF:'666.666.666-66', telefone:99999-9999, email:'Rodrigo@gmail.com'},
      {nome:'Davi', CPF:'888.888.888-88', telefone:99999-9999, email:'Davi@gmail.com'},
      {nome:'Joaquim', CPF:'999.999.999-99', telefone:99999-9999, email:'Joaquim@gmail.com'},
      

    ])
  }
}
