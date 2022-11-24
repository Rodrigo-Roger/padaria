import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Fornecedor from './Fornecedor'
import Venda from './Venda'
import Marca from './Marca'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: String

  @column()
  public sabor: string
  
  @column()
  public validade: Date
  
  @column()
  public preco: string //valor pode ser centavos

  @column()
  public fornecedor_id: Number

  @column()
  public marca_id: Number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Fornecedor)
  public fornecedor: BelongsTo<typeof Fornecedor>

  @belongsTo(() => Marca)
  public marca: BelongsTo<typeof Marca>

  @manyToMany(()=>Venda, {pivotTable:'produto_vendas'})
  public vendas:ManyToMany<typeof Venda>

  
}
