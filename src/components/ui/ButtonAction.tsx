import {IconNode} from '@rneui/base';
import {Button} from '@rneui/themed';
import React from 'react';
import {StyleProp, TextStyle, View} from 'react-native';
import {useSelector} from 'react-redux';
import {configSelector} from 'reduxs/selectors';
import tw from 'utils/tailwind';

interface IProps {
  icon?: IconNode;
  actionHandler: () => void;
  isLoading?: boolean;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

const ButtonAction: React.FC<IProps> = ({
  icon,
  actionHandler,
  isLoading,
  title,
  titleStyle,
  disabled,
}) => {
  const config = useSelector(configSelector);

  return (
    <View
      style={tw.style(
        `flex-row bg-${config.appColor}-50 items-center w-full justify-center py-2 shadow`,
      )}>
      <Button
        icon={icon}
        radius={4}
        buttonStyle={tw`rounded-md bg-${config.appColor}-600`}
        title={title}
        containerStyle={tw.style('w-11/12')}
        onPress={actionHandler}
        loading={isLoading}
        disabled={disabled}
        titleStyle={[tw.style('text-xl text-white'), titleStyle]}
      />
    </View>
  );
};

export default ButtonAction;
