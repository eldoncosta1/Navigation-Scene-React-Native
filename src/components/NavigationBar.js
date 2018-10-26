import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const imgBtnBack = require('../imgs/btn_voltar.png');

class NavigationBar extends Component {
  render() {
    if (this.props.back) {        
        return (
            <View style={[styles.titleBar, { backgroundColor: this.props.backgroundNavigationBar }]}>
                <TouchableHighlight
                    underlayColor={this.props.backgroundNavigationBar}
                    activeOpacity={0.3}
                    onPress={ () => {
                        this.props.navigator.pop();
                    }}
                >
                    <Image source={imgBtnBack}  />
                </TouchableHighlight>
                <Text style={styles.title}>ATM Consultoria</Text>
            </View>
        );          
    }
    return (
      <View style={styles.titleBar}>        
        <Text style={styles.title}>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    titleBar: {
        backgroundColor: '#ccc',
        padding: 10,
        height: 60,
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'

    }
});

export default NavigationBar;
