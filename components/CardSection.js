import React from 'react';
import { View } from 'react-native';
import GlobalStyleSheet from './GlobalStyleSheet';

const CardSection = (props) => {
  return (
    <View style={GlobalStyleSheet.cardSectionContainerStyle}>
      {props.children}
    </View>
  );
};

export default CardSection;
