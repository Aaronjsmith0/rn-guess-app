import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BodyText = props => <Text style={{...styles.title, ...props.style}}>{props.children}</Text>

const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans',
    }
});

export default BodyText;