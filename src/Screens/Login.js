import React, {useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Logo from '../components/Logo';
import Form from '../components/FormLogin';

const LoginScreen = (props) => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const data = useSelector(state=>state.categoryReducer);
    data.username = username;

    const onClickSignUp = () => {
        const { navigation } = props;
        navigation.navigate('SignUp');
    }

   const onClickLogin = () => {
        if(validateFields()){
            const { navigation } = props;
            navigation.navigate('Categories');
        }
       
    }

    const validateFields = () => {
           if(username.trim() == '' ){
               alert('Please enter username');
               return false
           }
           if(password.trim() == '' ){
            alert('Please enter password');
            return false
        }
        return true;
    }

        return (
            <View style={styles.container}>
                <Logo />
                <View style={styles.container}>

                    <TextInput style={styles.textInput} underlineColorAndroid='transparent'
                        placeholder='Username'
                        placeholderTextColor='black'
                        maxLength={12}
                        value = {username}
                        onChangeText={(text)=>setUsername(text)}
                       />
                    <TextInput style={styles.textInput} underlineColorAndroid='transparent'
                        placeholder='Password'
                        placeholderTextColor='black'
                        secureTextEntry={true}
                        maxLength={15} 
                        value = {password}
                        onChangeText={(text)=>{setPassword(text)}} />
                    <TouchableOpacity style={styles.loginButton} onPress={onClickLogin}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signupContainer}>
                    <Text style={styles.signUpText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={onClickSignUp}>
                        <Text style={styles.signUpButton}> Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    
}

export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#455a64',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexGrow: 1,
        marginVertical: 16,
        flexDirection: 'row',
    },
    signUpText: {
        color: 'white',
        opacity: 0.7,
        fontSize: 16
    },
    signUpButton: {
        fontSize: 16,
        color: 'white'
    },
    textInput: {
        width: 300,
        backgroundColor: 'white',
        opacity: 0.3,
        borderRadius: 25,
        color: 'black',
        marginVertical: 10,
        padding: 10
    },
    loginText: {
        fontSize: 16,
        color: '#ffffff',
        //fontWeight:'500',
        textAlign: 'center'
    },
    loginButton: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        paddingVertical: 16,
        marginVertical: 10
    }

})


