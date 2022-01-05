import React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import SwipeButton from 'rn-swipe-button';
import Header from '../components/Header';

export default class ButtonsScreen extends React.Component {
    
    render() {
        const OS = Platform.OS;
        return (
            <View>
                 <Header/>
           
            <View style={styles.container}>
               
                <Text style={styles.textYellow}> 4 variations of a button</Text>
                <View style={styles.simpleButton}>
                    <Button
                        title="Press me"
                        color='#1e90ff'
                        onPress={() => Alert.alert('Simple Button')} />
                </View>

                <View style={styles.disabledButton}>
                    <Button
                        title="Press me"
                        color='#1e90ff'
                        disabled
                        onPress={() => Alert.alert('Cannot press this one')}
                    />
                </View>
                <View style={styles.enabledButton}>
                    <Button
                        title="Press me"
                        color="#ffffff"
                        onPress={() => Alert.alert('Enabled button')} />
                </View>

                <View style={styles.enabledButton}>
                    <Button
                        title="Click to know Platform"
                        color="#ffffff"
                        onPress={() => Alert.alert("You are working on ",OS)} />
                </View>



                <SwipeButton title="Slide me to continue"
                    disabled={false}
                    height={45}
                    width={330}
                    swipeSuccessThreshold={70}
                    onSwipeSuccess={() => { alert('Swiped!') }}
                    railFillBackgroundColor='#ffffff'
                    thumbIconBackgroundColor='#1e90ff'
                    railBackgroundColor='#bbeaa6'
                    railBackgroundColor='black'
                    titleColor='#87cefa'
                />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
         justifyContent: 'flex-end',
         alignItems: 'center',
         //marginTop:'10%',
         paddingVertical:30,
    },
    textYellow: {
        color: '#ffffe0',
        fontSize: 20
    },
    simpleButton: {
        //',
        marginTop: 15,
        width: '80%',
        borderRadius: 5,
        paddingVertical: 5
    },
    disabledButton: {
        backgroundColor: '#778899',
        marginTop: 15,
        width: '80%',
        borderRadius: 5,
        paddingVertical: 5
    },
    enabledButton: {
        backgroundColor: '#1e90ff',
        marginVertical: 15,
        width: '80%',
        borderRadius: 5,
        paddingVertical: 5
    },


})