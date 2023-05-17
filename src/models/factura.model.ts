import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Factura extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Categoria_Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Producto_Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Producto_Detalle: string;

  @property({
    type: 'number',
    required: true,
  })
  Cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  SubTotal: number;

  @property({
    type: 'number',
    required: true,
  })
  Total: number;

  @property({
    type: 'string',
    required: true,
  })
  Fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  Cedula_Comprador: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;
