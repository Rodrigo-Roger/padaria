// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario";
import FuncionarioValidator from "App/Validators/FuncionarioValidator";

export default class FuncionariosController {
    index(){
        return Funcionario.query().preload('venda').paginate(1)
    }
    async store({request}){
        const dados = await request.validate(FuncionarioValidator)
        return Funcionario.create(dados)
    }

    show({request}){

        const id = request.param('id')
        return Funcionario.findOrFail(id)
        
    }

    async update({request}){
        const id = request.param('id')
        const funcionario = await Funcionario.findOrFail(id)
        const dados =  request.only([
            'nome',
            'CPF',
            'telefone',
            'telefone',
            'endereco'
        ])
        return funcionario.merge(dados).save()
    }
    async destroy({request}){
        const id = request.param('id')
        const funcionario = await Funcionario.findOrFail(id)
        return funcionario.delete()
    }
}
