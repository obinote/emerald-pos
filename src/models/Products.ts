import {Model} from '@nozbe/watermelondb';
import {Associations} from '@nozbe/watermelondb/Model';
import {children, field, relation} from '@nozbe/watermelondb/decorators';

export default class ProductsModel extends Model {
  static table = 'products';
  static associations: Associations = {
    product_images: {type: 'has_many', foreignKey: 'product_id'},
    units: {type: 'belongs_to', key: 'unit_id'},
    categories: {type: 'belongs_to', key: 'category_id'},
  };

  @field('name') name!: string;
  @field('price') price!: number;
  @field('code') code!: string;
  @field('description') description!: string;
  @field('created_at') created_at!: number;
  @field('updated_at') updated_at!: number;

  @relation('categories', 'category_id') category: any;
  @relation('units', 'unit_id') unit: any;

  @children('product_images') images: any;
}
