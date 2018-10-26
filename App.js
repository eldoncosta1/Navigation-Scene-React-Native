import React, { Component } from 'react';

import { Navigator } from 'react-native-deprecated-custom-components'

import SceneMain from './src/components/SceneMain';
import SceneClientes from './src/components/SceneClientes';
import SceneContato from './src/components/SceneContato';
import SceneCompany from './src/components/SceneCompany';
import SceneServices from './src/components/SceneServices';


export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={
          {
            id: 'mainRoute'
          }
        }
        renderScene={(route, navigator) => {
          /** definir a cena com base na rota */
          switch (route.id) {
            case 'mainRoute': return (<SceneMain navigator={navigator} />);
            case 'clientesRoute': return (<SceneClientes navigator={navigator} />);
            case 'contatoRoute': return (<SceneContato navigator={navigator} />);
            case 'companyRoute': return (<SceneCompany navigator={navigator} />);
            case 'serviceRoute': return (<SceneServices navigator={navigator} />);
            default: return false;
          }
          
        }}
      />
    );
  }
}

