import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';



export default class Logo extends React.Component{
    render(){
        return(
           <View style={styles.container}>
               <Image style={{width:40,height:70}} source={require('../assets/exaze.jpeg')}/>
               <Text style={styles.textWhite}> Welcome to My app</Text>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
      },
      textWhite:{
          fontSize:18,
          color:'white',
          opacity:0.7,
          marginVertical:15
      }
})


