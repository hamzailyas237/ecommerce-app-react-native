
import { ActivityIndicator, Alert, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@react-native-firebase/storage';


const Profile = () => {

    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const getUserData = async () => {
            const userId = await AsyncStorage.getItem('uid')

            await database().ref('/users/' + userId).once('value').then((data) => {
                setLoader(false)
                setName(data && data.val().name)
                setEmail(data && data.val().email)
            })
                .catch(err => {
                    setLoader(false)
                    console.log('Error in getting user data');
                    console.log(err);
                })

            database()
                .ref('/Profile Images/' + userId)
                .on('value', data => {
                    setImage(data.val().image)
                });


        }
        getUserData()
    })

    const openCamera = async () => {
        const userId = await AsyncStorage.getItem('uid')

        launchCamera({ mediaType: 'photo' }, async (res) => {
            // Uploading image to firebase Storage 
            const fileUri = res.assets[0].uri
            const fileName = fileUri.substring(image.lastIndexOf('/') + 1)
            console.log(fileName);
            const reference = storage().ref(`Images/Profile Images/${userId}/${fileName}`)
            await reference.putFile(fileUri)

            // Getting image from firebase Storage 
            const url = await reference.getDownloadURL();

            // Pushing gotten image from firebase Storage to real time database 
            await database().ref(`Profile Images/${userId}`).set({
                uid: userId,
                image: url,
            });
            // console.log(res.didCancel);
            setImage(!res.didCancel && url)
        }
        )
    }

    const openGallery = async () => {
        const userId = await AsyncStorage.getItem('uid')
        launchImageLibrary({ mediaType: 'photo' }, async (res) => {
            // Uploading image to firebase Storage 
            const fileUri = res.assets[0].uri
            const fileName = fileUri.substring(image.lastIndexOf('/') + 1)
            const reference = storage().ref(`Images/Profile Images/${userId}/${fileName}`)
            await reference.putFile(fileUri)

            // Getting image from firebase Storage 
            const url = await reference.getDownloadURL();

            // Pushing gotten image from firebase Storage to real time database 
            await database().ref(`Profile Images/${userId}`).set({
                uid: userId,
                image: url,
            });
            // console.log(res.didCancel);
            setImage(!res.didCancel && url)
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

            {loader ? <ActivityIndicator size="large" style={{ marginTop: 10 }} />
                :
                <View>
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
                </View>

            }
        </View >




    )
}

export default Profile

