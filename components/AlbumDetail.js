import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import AlbumThumbnail from './AlbumThumbnail';
import GlobalStyleSheet from './GlobalStyleSheet';

const AlbumDetail = ({ navigation, album }) => {

  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('photoList', { albumId: album.id })}
      underlayColor="white">
      <Card>
        <CardSection>
          <AlbumThumbnail albumId={album.id} />
        </CardSection>
        <CardSection style={GlobalStyleSheet.cardSectionFooterStyle}>
          <Text style={GlobalStyleSheet.cardTitleStyle}>{album.title._content}</Text>
          <Text style={GlobalStyleSheet.cardInfoStyle}>({album.photos})</Text>
        </CardSection>
      </Card>
    </TouchableHighlight>
  );
};



export default AlbumDetail;
