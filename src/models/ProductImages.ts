import {Model} from '@nozbe/watermelondb';
import {Associations} from '@nozbe/watermelondb/Model';
import {field} from '@nozbe/watermelondb/decorators';

export default class ProductImagesModel extends Model {
  static table = 'product_images';

  static associations: Associations = {
    products: {type: 'belongs_to', key: 'product_id'},
  };

  @field('uri') uri: any;
}
