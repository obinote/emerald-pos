// import {useFocusEffect, useNavigation} from '@react-navigation/native';
// import AccountItem from 'components/app/accounts/AccountItem';
// import FloatingAction from 'components/ui/FloatingAction';
// // import AccountModel from 'models/Account';
import React from 'react';
// import {FlatList} from 'react-native';
import {View} from 'react-native';
// // import {useInfiniteAccounts} from 'services/query/accounts';
// import {cleanBlankValue} from 'utils/helper';
// import tw from 'utils/tailwind';
// // import isEmpty from 'lodash.isempty';

const SettingAccountScreen: React.FC<{}> = () => {
  return <View />;
  //   const navigation = useNavigation();
  //   // const [searchKey, setSearch] = useState<string>('');

  //   const queryParams = useMemo(
  //     () =>
  //       cleanBlankValue({
  //         search: '',
  //       }),
  //     [],
  //   );

  //   const {
  //     data,
  //     refetch,
  //     // error,
  //     // fetchNextPage,
  //     // hasNextPage,
  //     // isFetching,
  //     // isFetchingNextPage,
  //     // status,
  //   // } = useInfiniteAccounts(queryParams);

  //   const accounts: any[] = useMemo(() => {
  //     return data?.pages.flatMap((page: any) => page.data) || [];
  //   }, [data?.pages]);

  //   useFocusEffect(
  //     useCallback(() => {
  //       refetch();
  //     }, [refetch]),
  //   );

  //   return (
  //     <View style={tw`app-screen`}>
  //       {/* <View style=> */}
  //       <FlatList
  //         data={accounts}
  //         renderItem={item => <AccountItem data={item} />}
  //         keyExtractor={item => item.id}
  //         style={tw`px-3`}
  //       />
  //       {/* </View> */}

  //       <FloatingAction
  //         iconName="plus"
  //         onPress={() => navigation.navigate('CreateAccount')}
  //       />
  //     </View>
  //   );
};

export default SettingAccountScreen;
