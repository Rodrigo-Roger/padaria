// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fornecedor from "App/Models/Fornecedor";
import FornecedorValidator from "App/Validators/FornecedorValidator";

export default class FornecedorsController {
    
    index(){
        return Fornecedor.query().preload('produto').paginate(1)
    }
    async store({request}){
    const dados = await request.validate(FornecedorValidator)
    return Fornecedor.create(dados)
}
show({request}){

    const id = request.param('id')
    return Fornecedor.findOrFail(id)
    
}

async update({request}){
    const id = request.param('id')
    const fornecedor = await Fornecedor.findOrFail(id)
    const dados =  request.only([
        'nome',
        'CNPJ',
        'telefone',
    ])
    return fornecedor.merge(dados).save()
}
async destroy({request}){
    const id = request.param('id')
    const fornecedor = await Fornecedor.findOrFail(id)
    return fornecedor.delete()
}
}
