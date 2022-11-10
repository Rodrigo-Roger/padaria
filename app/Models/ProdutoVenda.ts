import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ProdutoVenda extends BaseModel {
  public static table = 'produto_vendas'
  @column({ isPrimary: true })
  public id: number

  @column()
  public produtos_id: Number

  @column()
  public vendas_id: Number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  
}
