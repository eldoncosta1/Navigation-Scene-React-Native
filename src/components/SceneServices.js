import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import NavigationBar from './NavigationBar';

const detailService = require('../imgs/detalhe_servico.png');


class SceneServices extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar 
                backgroundColor = '#19d1c8'
            />        
            <NavigationBar back navigator={this.props.navigator} backgroundNavigationBar='#19d1c8' />

            <View style={styles.header}>
                <Image source={detailService} />
                <Text style={styles.txtTitleHeader}>Serviços</Text>
            </View>

            <View style={styles.detailsService}>
                <Text style={styles.textDetailService}>Consultoria</Text>
                <Text style={styles.textDetailService}>Acompanhamento</Text>
                <Text style={styles.textDetailService}>Processos</Text>
                
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
        color: '#19d1c8',
        marginLeft: 10,
        marginTop: 25
    },
    detailsService: {
        margin: 20,
        padding: 20
    },
    textDetailService: {
        fontSize: 18
    }
});

export default SceneServices;
