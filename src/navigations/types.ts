import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ROUTES} from './routes';

export type RootStackParamList = {
  [ROUTES.Login]?: undefined;
  [ROUTES.Register]?: undefined;

  [ROUTES.Setting]?: undefined;
  [ROUTES.SettingProduct]?: undefined;
  [ROUTES.SettingUnit]?: undefined;
  // [ROUTES.SettingAccount]?: undefined;

  [ROUTES.AddProduct]?: undefined;
  [ROUTES.UpdateProduct]?: {id: string} | undefined;
  // [ROUTES.CreateAccount]?: undefined;
  // [ROUTES.UpdateAccount]?: {id: string} | undefined;

  [ROUTES.Dashboard]?: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
