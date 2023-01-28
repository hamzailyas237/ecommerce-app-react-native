



import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert, ScrollView } from 'react-native'


const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const goToSignup = () => {
        navigation.navigate('Sign Up')
    }

    const loginUser = () => {
        if (email && password) {
            navigation.navigate('Home')
        }
        else {
            Alert.alert('Somethig went wrong', 'Required fields are missing')
        }
    }
    return (
        <ScrollView>

            <View>
                <View style={{ alignItems: 'center', margin: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Welcome</Text>
                    <Text>Login back into your account</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={[styles.textColor, styles.mainHeading]}>Login</Text>
                    <TextInput style={[styles.inputStyle, styles.textColor]} placeholder='email'
                        onChangeText={(e) => setEmail(e)}
                        placeholderTextColor="white" keyboardType='email-address'
                    />
                    <TextInput style={[styles.inputStyle, styles.textColor]} placeholder='passowrd'
                        onChangeText={(e) => setPassword(e)}
                        placeholderTextColor="white" secureTextEntry={true}
                    />

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={loginUser}>
                            <Text style={{ textAlign: 'center' }}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <TouchableOpacity onPress={goToSignup}>
                    <Text style={{ textAlign: 'center' }}>
                        Don't have an account ?
                        <Text style={{ color: '#336CEF' }}>Sign up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

export default Login

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
        borderColor: 'white',
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

