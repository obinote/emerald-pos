import {Text} from '@rneui/themed';
import ProductsModel from 'models/Products';
import React from 'react';
import {ListRenderItemInfo, View} from 'react-native';
import tw from 'utils/tailwind';

type ProductItemProps = {
  data: ListRenderItemInfo<ProductsModel>;
};

const ProductItem: React.FC<ProductItemProps> = ({data}) => {
  return (
    <View>
      <Text style={tw`text-emerald-950 font-nunito`}>{data.item.name}</Text>
    </View>
  );
};

export default ProductItem;
