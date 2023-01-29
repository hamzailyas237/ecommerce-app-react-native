



import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert, ScrollView } from 'react-native'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


const Signup = ({ navigation }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const goToLogin = () => {
        navigation.navigate('Login')
    }

    const signupUser = () => {
        if (name && email && phone && password) {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then((res) => {
                    navigation.navigate('Home')
                    Alert.alert('Sign up message', 'User signed up successfully');
                    database().ref(`users/${res.user.uid}`).set({
                        name,
                        email,
                        phone,
                        password
                    });

                })
                .catch(error => {
                    Alert.alert('Sign up error', `${error.message}`);
                });
        }
        else {
            Alert.alert('Sign up error', 'Required fields are missing')
        }
    }
    return (
        <ScrollView>

            <View>
                <View style={{ alignItems: 'center', margin: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Welcome</Text>
                    <Text>Sign up into your account</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={[styles.textColor, styles.mainHeading]}>Sign Up</Text>
                    <TextInput style={[styles.inputStyle, styles.textColor]} placeholder='user name'
                        onChangeText={(e) => setName(e)}
                        placeholderTextColor="white"
                    />
                    <TextInput style={[styles.inputStyle, styles.textColor]} placeholder='email'
                        onChangeText={(e) => setEmail(e)}
                        placeholderTextColor="white" keyboardType='email-address'
                    />
                    <TextInput style={[styles.inputStyle, styles.textColor]} placeholder='phone'
                        onChangeText={(e) => setPhone(e)}
                        placeholderTextColor="white" keyboardType='numeric'
                    />
                    <TextInput style={[styles.inputStyle, styles.textColor]} placeholder='passowrd'
                        onChangeText={(e) => setPassword(e)}
                        placeholderTextColor="white" secureTextEntry={true}
                    />

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={signupUser}>
                            <Text style={{ textAlign: 'center' }}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <TouchableOpacity onPress={goToLogin}>
                    <Text style={{ textAlign: 'center' }}>
                        Already have an account ?
                        <Text style={{ color: '#336CEF' }}>Login</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>

    )
}

export default Signup

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#336CEF',
        color: 'white',
        padding: 40,
        margin: 10,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 70,
        borderBottomLeftRadius: 20
    },

    mainHeading: {
        fontSize: 25,
        marginBottom: 20
    },
    textColor: {
        color: 'white'
    },

    inputStyle: {
        width: '90%',
        borderRadius: 4,
        paddingLeft: 20,
        margin: 5,
        borderWidth: 0.5,
        borderColor: 'white'
    },

    buttonStyle: {
        backgroundColor: 'white',
        width: '40%',
        paddingTop: 9,
        paddingBottom: 9,
        borderRadius: 100,
        margin: 9
    }
})

