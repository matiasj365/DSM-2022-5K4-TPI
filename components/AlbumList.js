import React, { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import GlobalStyleSheet from './GlobalStyleSheet';

const AlbumList = (props) => {
  const [photoset, setPhotoset] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1&#39',
      )
      .then((response) =>
        setPhotoset(response.data.photosets.photoset),
      );
  }, [])

  const renderAlbum = (album) => {
    let albumDetail = album.item;
    return (
      <AlbumDetail
        navigation={props.navigation}
        album={albumDetail}
      />
    );
  }

  const renderListHeader = () => {
    return (
      <View style={GlobalStyleSheet.headerStyle} accessibilityRole="header">
        <Text style={GlobalStyleSheet.titleStyle}>Álbumes</Text>
      </View>
    );
  }

  return (
    (!photoset ?
      <View style={GlobalStyleSheet.fullContainerStyle}>
        <ActivityIndicator size="large" color="#00ff00" style={GlobalStyleSheet.activityIndicatorStyle} />
      </View>
      :
      <View style={GlobalStyleSheet.fullContainerStyle}>
        <FlatList style={GlobalStyleSheet.listStyle}
          data={photoset}
          numColumns={2}
          renderItem={renderAlbum}
          keyExtractor={(album) => album.id}
          ListHeaderComponent={renderListHeader}
        />
      </View>
    )
  )
}

export default AlbumList;