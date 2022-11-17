// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


import ProdutoVenda from "App/Models/ProdutoVenda";
import ProdutoVendaValidator from "App/Validators/ProdutoVendaValidator";

export default class ProdutoVendasController {
    index(){
        return ProdutoVenda.query().paginate(1)
    }
    async store({request}){
        const dados = await request.validate(ProdutoVendaValidator)
        return ProdutoVenda.create(dados)
    }
    show({request}){

        const id = request.param('id')
        return ProdutoVenda.findOrFail(id)
    }
    async update({request}){
        const id = request.param('id')
        const produtovenda = await ProdutoVenda.findOrFail(id)
        const dados =  request.only([
            'nome',
            'CNPJ',
            'telefone',
        ])
        return produtovenda.merge(dados).save()
    }
    async destroy({request}){
        const id = request.param('id')
        const produtovenda = await ProdutoVenda.findOrFail(id)
        return produtovenda.delete()
    }
}
