// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from "App/Models/Produto";
import ProdutoValidator from "App/Validators/ProdutoValidator";

export default class ProdutosController {
    index(){
        return Produto.all()
    }
    async store({request}){
        const dados = await request.validate(ProdutoValidator)        
        return Produto.create(dados)
    }
    show({request}){

        const id = request.param('id')
        return Produto.findOrFail(id)
        
    }

    async update({request}){
        const id = request.param('id')
        const produto = await Produto.findOrFail(id)
        const dados =  request.only([
            'nome',
            'validade',
            'preco',
            'fonecedor_id'
        ])
        return produto.merge(dados).save()
    }

    async destroy({request}){
        const id = request.param('id')
        const produto= await Produto.findOrFail(id)
        return produto.delete()
    }
}

