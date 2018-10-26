import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import NavigationBar from './NavigationBar';

const detailCompany = require('../imgs/detalhe_empresa.png');


class SceneCompany extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }} >
            <StatusBar 
                backgroundColor = '#ec7148'
            />        
            <NavigationBar back navigator={this.props.navigator} backgroundNavigationBar='#ec7148' />

            <View style={styles.header}>
                <Image source={detailCompany} />
                <Text style={styles.txtTitleHeader}>A Empresa</Text>
            </View>

            <View style={styles.detailsCompany}>
                <Text style={styles.textDetailCompany}>A ATM consultoria está no mercado a mais de 20 anos..</Text>
                
            </View>


        </View>
    );
  }
}

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitleHeader: {
        fontSize: 30,
        color: '#ec7148',
        marginLeft: 10,
        marginTop: 25
    },
    detailsCompany: {
        margin: 20,
        padding: 20
    },
    textDetailCompany: {
        fontSize: 18
    }
});

export default SceneCompany;
