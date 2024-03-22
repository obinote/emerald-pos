import {Text} from '@rneui/themed';
import AccountModel from 'models/Account';
import React from 'react';
import {ListRenderItemInfo, View} from 'react-native';
import tw from 'utils/tailwind';

type AccountItemProps = {
  data: ListRenderItemInfo<AccountModel>;
};

const AccountItem: React.FC<AccountItemProps> = ({data}) => {
  return (
    <View>
      <Text style={tw`text-emerald-950 font-nunito`}>{data.item.fullName}</Text>
    </View>
  );
};

export default AccountItem;
