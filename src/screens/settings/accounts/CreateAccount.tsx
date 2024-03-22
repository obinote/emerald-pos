// import {useNavigation} from '@react-navigation/native';
// import FormRegister, {
//   FormRegisterHandler,
// } from 'components/app/register/FormRegister';
// import ButtonAction from 'components/ui/ButtonAction';
// import React, {useCallback, useRef} from 'react';
// import {useTranslation} from 'react-i18next';
// import {View} from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {useCreateAccount} from 'services/query/accounts';
// import {TAccount} from 'types/Accounts';
// import tw from 'utils/tailwind';

// const CreateAccount = () => {
//   const {t} = useTranslation();
//   const navigation = useNavigation();
//   const mutation = useCreateAccount();

//   const formRef = useRef<FormRegisterHandler>(null);

//   const onSubmit = useCallback(
//     (values: TAccount) => {
//       mutation.mutate(values, {
//         onSuccess: () => {
//           navigation.goBack();
//         },
//         onError: err => {
//           console.log(err);
//         },
//       });
//     },
//     [mutation, navigation],
//   );

//   return (
//     <View style={tw`app-screen`}>
//       <KeyboardAwareScrollView style={tw`px-2`}>
//         <FormRegister onSubmit={onSubmit} ref={formRef} />
//       </KeyboardAwareScrollView>

//       <ButtonAction
//         title={t('button.save')}
//         actionHandler={() => formRef.current?.onSubmit()}
//       />
//     </View>
//   );
// };

// export default CreateAccount;
