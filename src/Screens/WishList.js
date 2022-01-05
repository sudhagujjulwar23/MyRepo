import React from 'react';
import { Text, View, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const WishListScreen = (props) => {

    const categories = useSelector(state=>state.categoryReducer.categories);
    renderItem = (itemData) => {
        const { navigation } = props;
        return (
        
            <ScrollView>
                <View style={styles.itemStyle}>
                <Image source ={{uri:itemData.item.image}} style={styles.imageStyle}/>
                <View style={styles.detailsContainer}>
                <Text style={styles.textStyle}>{itemData.item.title}</Text>
                <Text style={styles.priceStyle}> {itemData.item.price} $</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('Details',{categoryId:itemData.item.id})}>
                <Text style={styles.textBlue}>View Details</Text>
                </TouchableOpacity>
                </View>
               
                </View>
            </ScrollView>

        )
    }
        return (
            <View>
                <Header/>
               
                <FlatList
                    data={categories}
                    renderItem={this.renderItem}
                     />
                </View>

          
        )
    
}

export default WishListScreen; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemStyle: {
        // flex: 1,
         margin: 15,
        //justifyContent:'center',
       //  alignItems:'center',
        flexDirection:'row',
    },
    textStyle:{
        fontSize:15,
        color:'black',
        padding:5 
    },
    priceStyle:{
        fontSize:18,
        color:'#8b0000',
        paddingVertical:5 
    },
    textBlue:{
        fontSize:18,
        color:'#1e90ff',
        padding:5 
    },
    imageStyle:{
        height:120,
        width:120,
        
    },
    detailsContainer:{
        flexDirection:'column', 
        width:'60%',
        marginHorizontal:10,
        backgroundColor:'#ffffff'
    }
})