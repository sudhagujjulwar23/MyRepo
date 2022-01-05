import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
// import { CATEGORIES } from '../../data/dummydata';

const CategoriesScreen = (props) => {
   

    goToButtonsScreen = () => {
        const {navigation} = props;
        navigation.navigate('Buttons');
    }

   
        const CATEGORIES = useSelector(state=> state.categoryReducer.categories);
        const categoryId = props.navigation.state.params.categoryId;
        const selectedItem = CATEGORIES.find(category=>category.id==categoryId);
        return(
            <View>
                <Header/>
                <View style={styles.container}>
                <Image source ={{uri:selectedItem.image}} style={styles.imageStyle}/>
                <Text style={styles.textStyle}>{selectedItem.title}</Text>
                <Text style={styles.priceStyle}> {selectedItem.price} $</Text>
                <View style={styles.buttonStyle} onTouchStart={this.goToButtonsScreen}><Text style={styles.buttonText}> Add to Cart</Text></View>
                </View>
                
            </View>
        )
    
}

export default CategoriesScreen;


const styles = StyleSheet.create({
    container:{
       // flex:1,
        justifyContent: 'center',
        alignItems:'center',
        margin:15,
        backgroundColor:'white',
        paddingVertical:15
    },
    itemStyle:{
        flex:1,
        margin:15,
        height:150,
    },
    buttonStyle:{
        backgroundColor:'#1e90ff',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    buttonText:{
        fontSize:20,
        padding:10,
        color:'#ffffff'
    },
    imageStyle:{
        height:120,
        width:120,
    },
    textStyle:{
        fontSize:15,
        color:'black',
        padding:15,
    },
    priceStyle:{
        fontSize:18,
        color:'#8b0000',
        paddingVertical:15 ,
        textAlign:'center'
    },
})