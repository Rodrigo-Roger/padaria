// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Venda from "App/Models/Venda";
import VendaValidator from "App/Validators/VendaValidator";

export default class VendasController {
    index(){
        return Venda.query().paginate(1)
    }
    async store({request}){
        const dados = await request.validate(VendaValidator)
        return Venda.create(dados)
    }
    show({request}){

        const id = request.param('id')
        return Venda.findOrFail(id)
    }
    async update({request}){
        const id = request.param('id')
        const venda = await Venda.findOrFail(id)
        const dados =  request.only([
            'nome',
            'CNPJ',
            'telefone',
        ])
        return venda.merge(dados).save()
    }
    async destroy({request}){
        const id = request.param('id')
        const venda = await Venda.findOrFail(id)
        return venda.delete()
    }
}
