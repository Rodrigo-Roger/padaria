// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Marca from "App/Models/Marca";
import MarcaValidator from "App/Validators/MarcaValidator";

export default class MarcasController {
    
    index(){
        return Marca.query().preload("produto").paginate(1)
    }
    async store({request}){
    const dados = await request.validate(MarcaValidator)
    return Marca.create(dados)
}
show({request}){

    const id = request.param('id')
    return Marca.findOrFail(id)
    
}

async update({request}){
    const id = request.param('id')
    const marca = await Marca.findOrFail(id)
    const dados =  request.only([
        'nome',
    ])
    return marca.merge(dados).save()
}
async destroy({request}){
    const id = request.param('id')
    const marca = await Marca.findOrFail(id)
    return marca.delete()
}
}
