import React, { Component } from 'react';
import { WebView , Dimensions} from 'react-native';



const  width = Dimensions.get('window').width;
export default class WebPage extends Component {
    constructor(props){
    super(props);

    this.state = {
      url: 'https://www.google.at/'
    }
  }
onNavigationStateChange = (data) => {
    console.log(data);
    if (data.url === "https://www.facebook.com/")
    {
        alert("okay");
    }
}
  render() {
     console.log(this.props.link );
    return (
      <WebView
        source={{uri: this.props.link}}
        style={{marginTop: 20, width: width}}
        onNavigationStateChange = {this.onNavigationStateChange}
      />
    );
  }
}

