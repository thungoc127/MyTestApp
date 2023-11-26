import React from 'react';
import { View, Text, TouchableOpacity, Alert,StyleSheet } from 'react-native';

const AboutScreen = () => {
  const handleEasterEggPress = () => {
    Alert.alert('Easter Egg', 'You found the hidden message!');
  };

  return (
    <View >
      <Text>This is the About screen</Text>
      <TouchableOpacity onPress={handleEasterEggPress}>
        <Text>DESIGN BY THU NGOC NGUYEN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AboutScreen;


  
