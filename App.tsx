/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import RootNavigator from 'navigations';
import {store} from 'reduxs/store';
import {useDeviceContext} from 'twrnc';
import tw from 'utils/tailwind';
import {setupTranslation} from 'locales';
// import {database} from 'services/watermelon';
// import withObservables from '@nozbe/with-observables';
// import {FlatList} from 'react-native';
// import ListAccounts from 'components/app/accounts/ListAccounts';

setupTranslation();

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 2}},
});

function App(): React.JSX.Element {
  useDeviceContext(tw, {
    observeDeviceColorSchemeChanges: false,
    initialColorScheme: 'light',
  });

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <RootNavigator />
        </QueryClientProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
