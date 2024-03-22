import {Input, InputProps} from '@rneui/themed';
import React, {useCallback, useEffect} from 'react';
import {Controller, useFormContext, useWatch} from 'react-hook-form';
import {StyleProp, View, ViewStyle} from 'react-native';
import { useSelector } from 'react-redux';
import { configSelector } from 'reduxs/selectors';
// import Icon from 'react-native-vector-icons/FontAwesome6Pro';
import tw from 'utils/tailwind';

type TInputText = {
  name: string;
  defaulValue?: string;
  props?: InputProps;
  delay?: number;
  multiLineContainerStyle?: StyleProp<ViewStyle>;
  onChange?: (text: string | undefined) => void;
};

const InputText: React.FC<TInputText> = ({
  name,
  defaulValue,
  props,
  delay = 0,
  multiLineContainerStyle,
  onChange,
}) => {
  const config = useSelector(configSelector);

  const {control, setError, setValue} = useFormContext();
  const textValue = useWatch({control, name});

  const handleChangeText = useCallback(
    (text: string | undefined) => {
      setValue(name, text, {shouldValidate: true, shouldDirty: true});
      setError(name, {}, {shouldFocus: true});
    },
    [name, setError, setValue],
  );

  const handleEndEditing = useCallback(() => {
    if (defaulValue !== undefined && textValue !== defaulValue) {
      if (typeof onChange === 'function') {
        onChange(textValue);
      }
    }
  }, [defaulValue, onChange, textValue]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (defaulValue !== undefined && textValue !== defaulValue) {
        if (typeof onChange === 'function') {
          onChange(textValue);
        }
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [defaulValue, delay, name, onChange, textValue]);

  return (
    <Controller
      control={control}
      name={name}
      key={name}
      defaultValue={defaulValue}
      render={({field: {onBlur, value}, fieldState: {error}}) => {
        return (
          <View>
            <Input
              onBlur={onBlur}
              onChangeText={text => handleChangeText(text)}
              onEndEditing={handleEndEditing}
              value={value}
              inputStyle={tw.style(`p-0 text-${config.appColor}-950`)}
              leftIcon
              labelStyle={tw`text-base text-${config.appColor}-950`}
              errorMessage={error?.message || ''}
              renderErrorMessage={!!error?.message}
              errorStyle={tw.style('text-sm')}
              inputContainerStyle={[
                tw.style(`p-0 border-b-[1px] border-${config.appColor}-950`),
                multiLineContainerStyle,
              ]}
              containerStyle={tw.style('p-0')}
              {...props}
            />
          </View>
        );
      }}
    />
  );
};

export default InputText;
