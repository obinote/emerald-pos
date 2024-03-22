import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import tw from 'utils/tailwind';

interface IProps {
  options: string[];
}

const SelectUnit: React.FC<IProps> = ({options}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [newOption, setNewOption] = useState('');

  const handleSelectOption = (option: any) => {
    // setSelectedOption(option);
    // setModalVisible(false);
  };

  const handleAddOption = () => {
    // Here, you can implement your logic to add the new option to your data store
    // For demonstration purposes, let's just log it
    console.log('New Option:', newOption);
    setNewOption('');
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Selected Option: {selectedOption || 'Select an option'}</Text>
      </TouchableOpacity>

      <Modal
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionOutTiming={0}
        backdropTransitionInTiming={0}
        onBackButtonPress={() => setModalVisible(false)}>
        <View style={tw`flex justify-center items-center`}>
          <View style={tw`bg-white p-5 rounded-xl elevation-5`}>
            <FlatList
              data={options}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => handleSelectOption(item)}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <TextInput
              placeholder="Enter new option"
              value={newOption}
              onChangeText={text => setNewOption(text)}
              style={tw`mb-3 border-b-4`}
            />
            <TouchableOpacity onPress={handleAddOption}>
              <Text style={tw`text-blue-600`}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={tw`text-red-600 mt-3`}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Usage Example:
const MyComponent = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <SelectUnit options={options} />
    </View>
  );
};

export default MyComponent;
