import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Funcionario from './Funcionario'
import Produto from './Produto'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public valorTotal: String

  @column()
  public data: Date

  @column()
  public clienteId: Number

  @column()
  public funcionarioId: Number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> Cliente)
  public cliente:BelongsTo<typeof Cliente>

  @belongsTo(()=> Funcionario)
  public funcionario:BelongsTo<typeof Funcionario>  

  @manyToMany(()=>Produto, {pivotTable:'produto_vendas'})
  public produtos:ManyToMany<typeof Produto>
}
