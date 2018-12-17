import React from 'react';
import { Text, View } from 'react-native';

import { Styles } from '../styles/Styles.js';

export class Header extends React.Component {
    render() {
        return (
            <View style={Styles.header}>
                <Text>Header</Text>
            </View>
        );
    }
}