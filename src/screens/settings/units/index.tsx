import {useNavigation} from '@react-navigation/native';
import {Text} from '@rneui/themed';
import ButtonAction from 'components/ui/ButtonAction';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {configSelector} from 'reduxs/selectors';
import tw from 'utils/tailwind';

const SettingUnitsScreen: React.FC<{}> = () => {
  const {t} = useTranslation();
  const config = useSelector(configSelector);
  const navigation = useNavigation();

  const closeHandler = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Modal
      isVisible={true}
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionOutTiming={0}
      onBackdropPress={closeHandler}
      backdropTransitionInTiming={0}
      onBackButtonPress={closeHandler}>
      <View
        style={tw`bg-${config.appColor}-50 items-center justify-center p-4`}>
        <View style={tw`w-full mb-6`}>
          <Text style={tw`font-nunitoBold text-xl mb-2`}>
            {t('text.title')}
          </Text>
        </View>
        <View
          style={tw.style(
            'flex-row bg-aliceBlue items-center w-full justify-end px-4 pb-4 rounded gap-x-2',
          )}>
          <ButtonAction
            title={t('button.close')}
            titleStyle={tw`text-defaultInv`}
            actionHandler={closeHandler}
          />
          {/* <ButtonAction title={t('button.register')} actionHandler={() => {}} /> */}
        </View>
      </View>
    </Modal>
  );
};

export default SettingUnitsScreen;
