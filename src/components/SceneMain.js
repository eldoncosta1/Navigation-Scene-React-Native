import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableHighlight
} from 'react-native';

import NavigationBar from './NavigationBar';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

class SceneBar extends Component {
  render() {
    return (
        <View>
            <StatusBar 
                backgroundColor = '#ccc'
            />        
            <NavigationBar />

            <View style={styles.imgLogo}>
              <Image source={logo} />
            </View>
            
            <View style={styles.menu}>            
              <View style={styles.menuGroup}>
                <TouchableHighlight
                  underlayColor={'#b9c941'}
                  activeOpacity={0.3}
                  onPress={() => {this.props.navigator.push({ id: 'clientesRoute' })}}
                >
                  <Image style={styles.imgMenu} source={menuCliente} />
                </TouchableHighlight>

                <TouchableHighlight
                  underlayColor={'#61bd8c'}
                  activeOpacity={0.3}
                  onPress={() => {this.props.navigator.push({ id: 'contatoRoute' })}}
                >
                  <Image style={styles.imgMenu} source={menuContato} />
                </TouchableHighlight>
              </View>
              <View style={styles.menuGroup}>       
                <TouchableHighlight
                  underlayColor={'#ec7148'}
                  activeOpacity={0.3}
                  onPress={() => {this.props.navigator.push({ id: 'companyRoute' })}}
                >
                  <Image style={styles.imgMenu} source={menuEmpresa} />
                </TouchableHighlight>

                <TouchableHighlight
                  underlayColor={'#19c1d8'}
                  activeOpacity={0.3}
                  onPress={() => {this.props.navigator.push({ id: 'serviceRoute' })}}
                >
                  <Image style={styles.imgMenu} source={menuServico} />
                </TouchableHighlight>
              </View>
            </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
   imgLogo: {
      marginTop: 30,
      alignItems: 'center',
      marginBottom: 10      
   },
   menu: {
     alignItems: 'center',     
   },
   menuGroup: {
     flexDirection: 'row'
   },
   imgMenu: {
     margin: 15
   }
   
});

export default SceneBar;
