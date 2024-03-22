import {useNavigation} from '@react-navigation/native';
import FormProduct, {
  FormProductHandler,
} from 'components/app/product/FormProduct';
import ButtonAction from 'components/ui/ButtonAction';
import React, {useCallback, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAddProducts} from 'services/query/products';
import {TFormProduct, TProducts} from 'types/ProductType';
import {currency} from 'utils/formatting';
import tw from 'utils/tailwind';

const AddProductScreen: React.FC<{}> = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const formRef = useRef<FormProductHandler>(null);
  const mutation = useAddProducts();

  const onSubmit = useCallback(
    (values: TFormProduct) => {
      const payload: TProducts = {
        name: values.name,
        code: values.code,
        price: parseFloat(
          currency({val: values.price || '', unformat: true}).toString(),
        ),
      };

      mutation.mutate(payload, {
        onSuccess: () => {
          navigation.goBack();
        },
        onError: err => {
          console.log(err);
        },
      });
    },
    [mutation, navigation],
  );

  return (
    <View style={tw`app-screen`}>
      <KeyboardAwareScrollView style={tw`px-3`}>
        <FormProduct onSubmit={onSubmit} ref={formRef} />
      </KeyboardAwareScrollView>
      <ButtonAction
        title={t('button.save')}
        actionHandler={() => formRef.current?.onSubmit()}
      />
    </View>
  );
};

export default AddProductScreen;
