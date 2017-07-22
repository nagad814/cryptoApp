/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import './shim.js';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';
import crypto from 'crypto';

import { newOrder } from './payServices';
import WebPage from './WebPage';



export default class cryptoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChange : false,
      url: 'https://www.google.com'
    }
  }


  componentWillMount() { 
   newOrder.Create({            
            amount: 2000,
            productinfo: 'Course: 02-B for 2 months',
            firstname: 'Rj',
            email: 'rjwork333@gmail.com',
            phone: 9090909090,
            surl: 'https://www.google.com',
            furl: 'https://www.facebook.com',
            service_provider: 'payuBiz'
        },/* false === test payment*/ false);
  
  newOrder.sendReq()
        .then(Response => {
          console.log(Response);
          this.setState( {
            isChange: true,
            url: Response.url
          })
    	})
    	.catch(err => {
        	console.log(err);
    	});

}


onLoadStart = () => {
  console.log('load started')
}

onLoadEnd = () => {
  console.log('load ended')
}
  render() {
   console.log(this.state.url);
    return (
      <View style={styles.container}>

      <WebPage 
      link={this.state.url}
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('cryptoApp', () => cryptoApp);