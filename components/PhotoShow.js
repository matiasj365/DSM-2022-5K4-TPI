import React from 'react';
import { Text, View, Image } from 'react-native';
import GlobalStyleSheet from './GlobalStyleSheet';

const PhotoShow = ({ photoTitle, photoUrl }) => {
  return (
    <View style={GlobalStyleSheet.fullContainerStyle}>
      <View style={GlobalStyleSheet.headerStyle} accessibilityRole="header">
        <Text style={GlobalStyleSheet.titleStyle}>{photoTitle}</Text>
      </View>
      <Image style={GlobalStyleSheet.photoShowStyle}
        source={{ uri: photoUrl }}
        resizeMode={'cover'}
      />
    </View>
  );


};

export default PhotoShow;