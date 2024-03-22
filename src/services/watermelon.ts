import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from 'models/schema';
import migrations from 'models/migrations';

// import AccountModel from 'models/Account';

import ProductImagesModel from 'models/ProductImages';
import ProductsModel from 'models/Products';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  dbName: 'emeraldPos',
});

export const database = new Database({
  adapter,
  modelClasses: [ProductsModel, ProductImagesModel],
});
