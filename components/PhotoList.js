import React, { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';
import GlobalStyleSheet from './GlobalStyleSheet';
import BackButton from './BackButton';

const PhotoList = (props) => {
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    const getPhotos = async () => {
      let response;
      try {
        response = await axios.get(
          `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${props.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`,
        );
        setPhotos(response.data.photoset.photo);
      }
      catch (error) {
        console.log(error);
      }
    }

    getPhotos();
  }, [])

  const renderAlbums = (photo) => {
    return (
      <PhotoDetail
        title={photo.item.title}
        navigation={props.navigation}
        imageUrl={`https://farm${photo.item.farm}.staticflickr.com/${photo.item.server}/${photo.item.id}_${photo.item.secret}.jpg`}
      />
    );
  }

  const renderListHeader = () => {
    return (
      <View style={GlobalStyleSheet.headerStyle} accessibilityRole="header">
        <BackButton navigation={props.navigation} />
        <Text style={GlobalStyleSheet.titleStyle}>Album: {props.route.params.albumName}</Text>
      </View>
    );
  }

  return (
    (!photos ?
      <View style={GlobalStyleSheet.fullContainerStyle}>
        <ActivityIndicator size="large" color="#00ff00" style={GlobalStyleSheet.activityIndicatorStyle} />
      </View>
      :
      <View style={GlobalStyleSheet.fullContainerStyle}>
        <FlatList style={GlobalStyleSheet.listStyle}
          data={photos}
          numColumns={2}
          renderItem={renderAlbums}
          keyExtractor={(photo) => photo.id}
          ListHeaderComponent={renderListHeader}
        />
      </View>
    )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default PhotoList;