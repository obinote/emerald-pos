import {FAB, FABProps} from '@rneui/themed';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import React from 'react';
import {useSelector} from 'react-redux';
import {configSelector} from 'reduxs/selectors';
import tw from 'utils/tailwind';

interface Props extends FABProps {
  iconName: string;
}

const FloatingAction: React.FC<Props> = props => {
  const config = useSelector(configSelector);

  return (
    <>
      <FAB
        icon={
          <FontAwesome6Icon
            name={props.iconName}
            size={30}
            style={tw`-mt-2.5`}
            color={tw.color('bg-white')}
          />
        }
        placement="right"
        color={tw.color(`bg-${config.appColor}-600`)}
        // style={tw``}
        {...props}
      />
    </>
  );
};

export default FloatingAction;
