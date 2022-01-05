import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

const Header = () => {
    const username = useSelector(state=>state.categoryReducer.username)
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Welcome {username}!</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#455a64', 
        opacity:1,
        height:35,
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:20
    },
    textStyle:{
        fontSize:15,
        color:'white',
    }
})