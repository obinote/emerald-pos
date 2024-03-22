import {useNavigation} from '@react-navigation/native';
import ButtonAction from 'components/ui/ButtonAction';
import InputText from 'components/ui/InputText';
import React, {forwardRef, useImperativeHandle} from 'react';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {TFormProduct} from 'types/ProductType';
import tw from 'utils/tailwind';

interface Props {
  onSubmit: SubmitHandler<TFormProduct>;
}

export type FormProductHandler = {
  onSubmit: () => void;
};

const FormProduct: React.ForwardRefRenderFunction<FormProductHandler, Props> = (
  {onSubmit},
  forwardedref,
) => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const methods = useForm<TFormProduct>({
    defaultValues: {
      id: '',
      name: 'Product A',
      price: '20000',
      code: 'P-A',
      description: '',
      categoryId: '',
      unitId: '',
    },
  });

  useImperativeHandle(
    forwardedref,
    () => ({
      onSubmit: methods.handleSubmit(onSubmit),
    }),
    [methods, onSubmit],
  );
  return (
    <FormProvider {...methods}>
      <View style={tw`mb-3`}>
        <InputText
          name="name"
          props={{placeholder: t('product.name'), autoFocus: true}}
        />
      </View>
      <View style={tw`mb-3`}>
        <InputText name="price" props={{placeholder: t('product.price')}} />
      </View>
      <View style={tw`mb-3`}>
        <InputText name="code" props={{placeholder: t('product.code')}} />
      </View>
      <ButtonAction
        title="modal"
        actionHandler={() => navigation.navigate('SettingUnit')}
      />
    </FormProvider>
  );
};

export default forwardRef(FormProduct);
