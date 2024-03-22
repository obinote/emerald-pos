import {appSchema, tableSchema} from '@nozbe/watermelondb/Schema';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'products',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'price', type: 'number'},
        {name: 'code', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'unit_id', type: 'number'},
        {name: 'category_id', type: 'number'},
        {name: 'created_at', type: 'number'},
        {name: 'updated_at', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'product_images',
      columns: [
        {name: 'uri', type: 'string'},
        {name: 'product_id', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'units',
      columns: [
        {name: 'unit', type: 'string'},
        {name: 'alias', type: 'string'},
      ],
    }),
    tableSchema({
      name: 'categories',
      columns: [
        {name: 'category', type: 'string'},
        {name: 'alias', type: 'string'},
      ],
    }),
  ],
});
