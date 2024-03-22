import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {RootStackParamList} from './types';
import {navigationRef} from './refNavigation';
import {ROUTES} from './routes';
import {useTranslation} from 'react-i18next';

// import SplashScreen from 'react-native-splash-screen';

const {Navigator, Screen, Group} =
  createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC<{}> = () => {
  const {t} = useTranslation();
  useEffect(() => {
    if (navigationRef.isReady()) {
      // SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        initialRouteName={ROUTES.Setting}
        screenOptions={
          {
            // statusBarStyle: 'light',
            //   statusBarColor: tw.color('primary90'),
          }
        }>
        <Group
          key={'user-section'}
          screenOptions={{
            headerTitleAlign: 'center',
          }}>
          <Screen
            name={ROUTES.Login}
            getComponent={() => require('screens/login').default}
            options={{}}
          />
          <Screen
            name={ROUTES.Register}
            getComponent={() => require('screens/register').default}
            options={{
              title: t('app.register'),
            }}
          />
        </Group>
        <Group
          key={'settings'}
          screenOptions={{
            headerTitleAlign: 'center',
          }}>
          <Screen
            name={ROUTES.Setting}
            getComponent={() => require('screens/settings').default}
            options={{
              title: t('app.settings'),
            }}
          />
          <Screen
            name={ROUTES.SettingProduct}
            getComponent={() => require('screens/settings/products').default}
            options={{
              title: t('setting.product'),
            }}
          />
          <Screen
            name={ROUTES.AddProduct}
            getComponent={() =>
              require('screens/settings/products/AddProduct').default
            }
            options={{
              title: t('setting.product.add'),
            }}
          />
          <Screen
            name={ROUTES.UpdateProduct}
            getComponent={() =>
              require('screens/settings/products/UpdateProduct').default
            }
            options={{
              title: t('setting.product.update'),
            }}
          />
          {/* <Screen
            name={ROUTES.SettingAccount}
            getComponent={() => require('screens/settings/accounts').default}
            options={{
              title: t('setting.account'),
            }}
          />
          <Screen
            name={ROUTES.CreateAccount}
            getComponent={() =>
              require('screens/settings/accounts/CreateAccount').default
            }
            options={{
              title: t('setting.account.create'),
            }}
          />
          <Screen
            name={ROUTES.UpdateAccount}
            getComponent={() =>
              require('screens/settings/accounts/UpdateAccount').default
            }
            options={{
              title: t('setting.account.update'),
            }}
          /> */}
        </Group>
        <Group
          key={'settings'}
          screenOptions={{
            headerShown: false,
            animation: 'none',
            presentation: 'containedTransparentModal',
          }}>
          <Screen
            name={ROUTES.SettingUnit}
            getComponent={() => require('screens/settings/units').default}
          />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
