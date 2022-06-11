import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import GlobalStyleSheet from './GlobalStyleSheet';

const Card = (props) => {
  return (
    <View style={GlobalStyleSheet.cardContainerStyle}>
      {props.children}
    </View>
  );
};



export default Card;
