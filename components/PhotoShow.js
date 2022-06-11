import React from 'react';
import { Text, View, Image } from 'react-native';
import GlobalStyleSheet from './GlobalStyleSheet';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import BackButton from './BackButton';

const PhotoShow = ({ route, navigation }) => {
  const { photoTitle, photoUrl } = route.params;
  return (
    <View style={GlobalStyleSheet.fullContainerStyle}>
      <View style={GlobalStyleSheet.headerStyle} >
        <BackButton navigation={navigation}/>
        <Text style={GlobalStyleSheet.titleStyle}>Titulo: {photoTitle}</Text>
      </View>
      <Image style={GlobalStyleSheet.photoShowStyle}
        source={{ uri: photoUrl }}
        resizeMode={'contain'}
      />
    </View>
  );


};

export default PhotoShow;