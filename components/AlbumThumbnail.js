import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import axios from 'axios';
import GlobalStyleSheet from './GlobalStyleSheet';
const AlbumThumbnail = ({ albumId }) => {
    const [photoThumbnail, setPhotoThumbnail] = useState(null);

    useEffect(() => {
        axios
            .get(
                `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`,
            )
            .then((response) =>
                setPhotoThumbnail(response.data.photoset.photo[0]),
            );
    }, [])

    return (
        (!photoThumbnail ?
            <View style={GlobalStyleSheet.thumbnailContainerStyle}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
            :
            <View style={GlobalStyleSheet.thumbnailContainerStyle}>
                <Image style={GlobalStyleSheet.thumbnailStyle}
                    source={{ uri: `https://farm${photoThumbnail.farm}.staticflickr.com/${photoThumbnail.server}/${photoThumbnail.id}_${photoThumbnail.secret}.jpg` }}
                    resizeMode={'contain'}
                     />
            </View>
        ));
};

export default AlbumThumbnail;
