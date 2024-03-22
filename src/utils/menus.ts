import i18n from 'i18next';
import {ROUTES} from 'navigations/routes';

const {t} = i18n;

type menu = {
  title: string;
  uri: string;
};
export const menus: menu[] = [
  {title: t('setting.product'), uri: ROUTES.SettingProduct},
];
