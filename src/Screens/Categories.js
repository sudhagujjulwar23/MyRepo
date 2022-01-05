import React from 'react';
import { Text, View, FlatList, Image, StyleSheet, ScrollView , TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import showSel from '../assets/favsel.png';
import showUnSel from '../assets/favunsel.png'

const CategoriesScreen = (props) => {

    let wishList = [];
    let selected = false;
    const categories = useSelector(state=>state.categoryReducer.categories);

     const onAddWishList = product => {
        selected = true;
        wishList = [...wishList, product];
        console.log("onAddWishList---> ",wishList.length);
      };

      const onRemoveWishList = product => {
          selected = false;
        const filteredList = wishList.filter(
          item => item.id !== product.id
        );
        wishList = filteredList;
        console.log("onRemoveWishList---> ",wishList.length);
      };

      const ifExists = product => {
        if (wishList.filter(item => item.id === product.id).length > 0) {
          return true;
        }
        return false;
      };

      const renderImage = () => {
          var imgSource =  selected? showSel : showUnSel;
          return(
            <Image
            style={{height:30,width:30}}
            source={imgSource}
          />
          )
         
      }


    const renderItem = (itemData) => {
        const { navigation } = props;
        return (
        
            <ScrollView>
                <View style={styles.itemStyle}>
                <Image source ={{uri:itemData.item.image}} style={styles.imageStyle}/>
                <View style={styles.detailsContainer}>
                <Text style={styles.textStyle}>{itemData.item.title}</Text>
                <Text style={styles.priceStyle}> {itemData.item.price} $</Text>
                <View  style={{flexDirection:'row'}}>
                <Text style={styles.textBlue} onPress = {() => navigation.navigate('Details',{categoryId:itemData.item.id})}>View Details</Text>
                <TouchableOpacity onPress={()=>(ifExists(itemData.item) ? onRemoveWishList(itemData.item) : onAddWishList(itemData.item))}>
                </TouchableOpacity>
                
                </View>
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
                    renderItem={renderItem}
                     />
                </View>

          
        )
    
}

export default CategoriesScreen; 

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