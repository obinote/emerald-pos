import {useNavigation} from '@react-navigation/native';
import {ListItem} from '@rneui/themed';
import {ROUTES} from 'navigations/routes';
import React, {useCallback} from 'react';
import {View} from 'react-native';
import {menus} from 'utils/menus';
import tw from 'utils/tailwind';

const SettingScreen: React.FC<{}> = () => {
  const settingMenu = menus;
  const navigation = useNavigation();

  const menuAction = useCallback(
    (uri: string) => {
      switch (uri) {
        case ROUTES.SettingProduct:
          navigation.navigate('SettingProduct');
          break;

        default:
          navigation.navigate('Setting');
          break;
      }
    },
    [navigation],
  );

  return (
    <View style={tw`app-screen`}>
      {settingMenu.map((menu, key) => (
        <ListItem
          bottomDivider
          key={`${menu.uri}-${key}`}
          onPress={() => menuAction(menu.uri)}>
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

export default SettingScreen;
