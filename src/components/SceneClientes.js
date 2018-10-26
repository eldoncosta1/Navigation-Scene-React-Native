import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import NavigationBar from './NavigationBar';

const detailClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

class SceneClientes extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }} >
            <StatusBar 
                backgroundColor = '#b9c941'
            />        
            <NavigationBar back navigator={this.props.navigator} backgroundNavigationBar='#b9c941' />            

            <View style={styles.header}>
                <Image source={detailClientes} />
                <Text style={styles.txtTitleHeader}>Nossos clientes</Text>
            </View>
            
            <View style={styles.clienteGroup}>
                <Image source={cliente1} />
                <Text style={styles.txtClienteGroup}>Lorem ipsum dolorem</Text>
            </View>
            
            <View style={styles.clienteGroup}>
                <Image source={cliente2} />
                <Text style={styles.txtClienteGroup}>Lorem ipsum dolorem</Text>
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
        color: '#b9c941',
        marginLeft: 10,
        marginTop: 25
    },
    clienteGroup: {
        padding: 20,
        marginTop: 10
    },
    txtClienteGroup: {
        fontSize: 18,
        marginLeft: 20
    }
});

export default SceneClientes;
