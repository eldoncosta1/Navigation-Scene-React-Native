import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import NavigationBar from './NavigationBar';

const detailContato = require('../imgs/detalhe_contato.png');


class SceneContato extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar 
                backgroundColor = '#61bd8c'
            />        
            <NavigationBar back navigator={this.props.navigator} backgroundNavigationBar='#61bd8c' />

            <View style={styles.header}>
                <Image source={detailContato} />
                <Text style={styles.txtTitleHeader}>Contato</Text>
            </View>

            <View style={styles.detailsContato}>
                <Text style={styles.textDetailContato}>Telefone: (87) 9 9999-9999 </Text>
                <Text>Celular:(87) 8 8888-8888 </Text>
                <Text>E-mail: contato@contato.com </Text>
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
        color: '#61bd8c',
        marginLeft: 10,
        marginTop: 25
    },
    detailsContato: {
        margin: 20,
        padding: 20
    },
    textDetailContato: {
        fontSize: 18
    }
});

export default SceneContato;
