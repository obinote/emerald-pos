import InputText from 'components/ui/InputText';
import React, {forwardRef, useImperativeHandle} from 'react';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {TAccount} from 'types/Accounts';
import tw from 'utils/tailwind';

type TProps = {
  onSubmit: SubmitHandler<TAccount>;
};

export type FormRegisterHandler = {
  onSubmit: () => void;
};

const FormRegister: React.ForwardRefRenderFunction<
  FormRegisterHandler,
  TProps
> = ({onSubmit}, forwardedref) => {
  const {t} = useTranslation();
  const methods = useForm<TAccount>({
    defaultValues: {
      displayName: 'Admin',
      fullName: 'Admin',
      id: '',
      phoneNumber: '08123456789',
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
          name="fullName"
          props={{placeholder: t('form.label.full_name')}}
        />
      </View>
      <View style={tw`mb-3`}>
        <InputText
          name="displayName"
          props={{placeholder: t('form.label.display_name')}}
        />
      </View>
      <View style={tw`mb-3`}>
        <InputText
          name="phoneNumber"
          props={{placeholder: t('form.label.phone')}}
        />
      </View>
    </FormProvider>
  );
};

export default forwardRef(FormRegister);
