import React from 'react';
import { Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import { TouchableHighlight } from 'react-native-gesture-handler';
import GlobalStyleSheet from './GlobalStyleSheet';

const PhotoDetail = ({ title, imageUrl }) => {
  console.log(props.navigation);
  return (
    <TouchableHighlight
        onPress={() => Linking.openURL(imageUrl)}
      underlayColor="white">
        
      <Card>
        <CardSection>
          <View style={GlobalStyleSheet.thumbnailContainerStyle}>
            <Image style={GlobalStyleSheet.thumbnailStyle} source={{ uri: imageUrl }} />
          </View>
        </CardSection>
        <CardSection style={GlobalStyleSheet.cardSectionFooterStyle}>
          <Text style={GlobalStyleSheet.cardTitleStyle}>{title}</Text>
        </CardSection>
      </Card>
    </TouchableHighlight>
  );
};

export default PhotoDetail;
