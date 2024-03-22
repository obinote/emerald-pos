import {useFocusEffect, useNavigation} from '@react-navigation/native';
import ProductItem from 'components/app/product/ProductItem';
import FloatingAction from 'components/ui/FloatingAction';
import ProductsModel from 'models/Products';
import React, {useCallback, useMemo} from 'react';
import {FlatList, View} from 'react-native';
import {useInfiniteProducts} from 'services/query/products';
import {cleanBlankValue} from 'utils/helper';
import tw from 'utils/tailwind';

const SettingProductsScreen: React.FC<{}> = () => {
  const navigation = useNavigation();
  // const [searchKey, setSearch] = useState<string>('');

  const queryParams = useMemo(
    () =>
      cleanBlankValue({
        search: '',
      }),
    [],
  );

  const {
    data,
    refetch,
    // error,
    // fetchNextPage,
    // hasNextPage,
    // isFetching,
    // isFetchingNextPage,
    // status,
  } = useInfiniteProducts(queryParams);

  const products: ProductsModel[] = useMemo(() => {
    return data?.pages.flatMap((page: any) => page.data) || [];
  }, [data?.pages]);

  console.log(products);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  return (
    <View style={tw`app-screen`}>
      <FlatList
        data={products}
        renderItem={item => <ProductItem data={item} />}
        keyExtractor={item => item.id}
        style={tw`px-3`}
      />
      <FloatingAction
        iconName="plus"
        onPress={() => navigation.navigate('AddProduct')}
      />
    </View>
  );
};

export default SettingProductsScreen;
