import {Model} from '@nozbe/watermelondb';
import {Associations} from '@nozbe/watermelondb/Model';
import {children, field} from '@nozbe/watermelondb/decorators';

export default class CategoriesModel extends Model {
  static table = 'categories';
  static associations: Associations = {
    products: {type: 'has_many', foreignKey: 'category_id'},
  };

  @field('category') category!: string;
  @field('alias') alias!: string;

  @children('products') products: any;
}
