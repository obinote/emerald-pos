import {Model} from '@nozbe/watermelondb';
import {Associations} from '@nozbe/watermelondb/Model';
import {children, field} from '@nozbe/watermelondb/decorators';

export default class UnitsModel extends Model {
  static table = 'units';
  static associations: Associations = {
    products: {type: 'has_many', foreignKey: 'unit_id'},
  };

  @field('unit') unit!: string;
  @field('alias') alias!: string;

  @children('products') products: any;
}
