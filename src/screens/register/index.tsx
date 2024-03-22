// import withObservables from '@nozbe/with-observables';
// import ListAccounts from 'components/app/accounts/ListAccounts';
// import FormRegister, {
//   FormRegisterHandler,
// } from 'components/app/register/FormRegister';
// import ButtonAction from 'components/ui/ButtonAction';
// import React, {useCallback, useRef} from 'react';
// import {useTranslation} from 'react-i18next';
// import {FlatList, View} from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {database} from 'services/watermelon';
// import {Account, Accounts} from 'types/Accounts';
// import tw from 'utils/tailwind';

// const db = database.collections.get('accounts');
// const observerAccounts = () => db.query().observe();

// const enhanceWithAccounts = withObservables([], () => ({
//   accounts: observerAccounts(),
// }));

// const AccountList = ({accounts}: {accounts: any}) => (
//   <FlatList
//     data={accounts}
//     keyExtractor={item => item.id}
//     showsVerticalScrollIndicator={false}
//     renderItem={item => <ListAccounts account={item} />}
//   />
// );

// const AccountsListRenderer = enhanceWithAccounts(AccountList);

// const RegisterScreen = () => {
//   const {t} = useTranslation();
//   const formRef = useRef<FormRegisterHandler>(null);

//   const onSubmit = useCallback(async () => {
//     await database.write(async () => {
//       await database.get('accounts').create((entry: Account) => {
//         entry.fullName = 'Adds';
//       });
//     });
//   }, []);

//   return (
//     <View style={tw` pt-2`}>
//       <AccountsListRenderer />
//       {/* <KeyboardAwareScrollView style={tw`px-2`}>
//         <FormRegister onSubmit={onSubmit} ref={formRef} />
//       </KeyboardAwareScrollView> */}
//       <ButtonAction
//         title={t('button.save')}
//         actionHandler={() => formRef.current?.onSubmit()}
//       />
//     </View>
//   );
// };

// export default RegisterScreen;
