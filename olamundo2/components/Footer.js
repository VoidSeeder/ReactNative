import React from 'react';
import { Text, View } from 'react-native';

import { Styles } from '../styles/Styles.js';

export class Footer extends React.Component {
    render() {
        return (
            <View style={Styles.footer}>
                <Text>Footer</Text>
            </View>
        );
    }
}