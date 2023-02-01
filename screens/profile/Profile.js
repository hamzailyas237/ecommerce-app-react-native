
import { Alert, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = () => {

    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [lastSignInTime, setLastSignInTime] = useState('')
    const [creationTime, setCreationTime] = useState('')

    useEffect(() => {

        const getUserData = async () => {
            const userId = await AsyncStorage.getItem('uid')
            console.log(userId);

            await database().ref('/users/' + userId).once('value').then((data) => {
                console.log(data.val().name);
                setName(data.val().name)
                setEmail(data.val().email)
                setLastSignInTime(data.val().last_signin_time)
                setCreationTime(data.val().creation_time)
            })
                .catch(err => {
                    console.log('Error in getting user data');
                    console.log(err);
                })
        }
        getUserData()
    })

    const openCamera = () => {
        launchCamera({ mediaType: 'photo' }, (res) => {
            // console.log(res.didCancel);
            setImage(!res.didCancel && res.assets[0].uri)
        }
        )
    }

    const openGallery = () => {
        launchImageLibrary({ mediaType: 'photo' }, (res) => {
            setImage(!res.didCancel && res.assets[0].uri)
        }
        )
    }


    let uploadImage = () => {
        Alert.alert('Upload Image', 'Take a photo or select from gallery', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
            },
            { text: 'Photo', onPress: openCamera },
            { text: 'Gallery', onPress: openGallery },
        ]
        )
    }
    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            <TouchableOpacity onPress={uploadImage} style={{ alignItems: 'center' }}>
                <Image
                    style={{ height: 150, width: 150, borderRadius: 100 }}
                    resizeMode="contain"
                    source={{
                        uri: image ? image : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                    }}
                />
            </TouchableOpacity>

            <View style={{ alignItems: 'center', marginTop: 20, gap: 10 }}>
                <Text>{name}</Text>
                <Text>{email}</Text>

            </View>
        </View >


    )
}

export default Profile

