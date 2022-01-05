import React from 'react';
import {Text, View, TextInput,TouchableOpacity,StyleSheet} from 'react-native';



export default class Form extends React.Component{

  
    render(){
        return(
           <View style={styles.container}>
            
               <TextInput style={styles.textInput} underlineColorAndroid = 'transparent'
               placeholder='Email'
               placeholderTextColor='black'
               maxLength={25}/>
               <TextInput style={styles.textInput} underlineColorAndroid = 'transparent'
               placeholder='Password'
               placeholderTextColor='black'
               secureTextEntry={true}
               maxLength={12}/>
               <TouchableOpacity style={styles.loginButton} onPress={this.onClickLogin}>
                   <Text style={styles.loginText}>{this.props.type}</Text>
               </TouchableOpacity>
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
      textInput:{
          width:300,
          backgroundColor:'white',
          opacity:0.3,
          borderRadius:25,
          color:'black',
          marginVertical:10,
          padding:10
      },
      loginText:{
          fontSize:16,
           color:'#ffffff',
          //fontWeight:'500',
          textAlign:'center'
      },
      loginButton:{
          width:300,
          backgroundColor:'#1c313a',
          borderRadius:25,
          paddingVertical:16,
          marginVertical:10
      }
})


