import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const BackButton = ({ navigation }) => {

    return (
        <Ionicons name="arrow-back-circle"
            color={"black"}            
            size={32}
            onPress={() => navigation.goBack()}
        />);
};

export default BackButton;
