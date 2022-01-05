import React from 'react';
import {Text, View, TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import Navigator from './routes'

class Main extends React.Component{
    render(){
        return(
          <Navigator/>
        )
    }
}

export default connect(null,null)(Main);

