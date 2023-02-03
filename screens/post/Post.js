
import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from '@rneui/themed';
import { SelectList } from 'react-native-dropdown-select-list'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';


const Post = () => {

    const [selected, setSelected] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const data = [
        { key: '1', value: "men's clothing" },
        { key: '2', value: 'jewelery' },
        { key: '3', value: 'electronics' },
        { key: '5', value: "women's clothing" },
    ]


    const openCamera = async () => {
        const userId = await AsyncStorage.getItem('uid')

        launchCamera({ mediaType: 'photo' }, async (res) => {
            // Uploading image to firebase Storage 
            const fileUri = res.assets[0].uri
            const fileName = fileUri.substring(image.lastIndexOf('/') + 1)
            const reference = storage().ref(`Images/Product Images/${userId}/${fileName}`)
            await reference.putFile(fileUri)

            // Getting image from firebase Storage 
            const url = await reference.getDownloadURL();

            // Pushing gotten image from firebase Storage to real time database 
            await database().ref(`Product Images/${userId}`).set({
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
            const reference = storage().ref(`Images/Product Images/${userId}/${fileName}`)
            await reference.putFile(fileUri)

            // Getting image from firebase Storage 
            const url = await reference.getDownloadURL();

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

    const addToLising = async () => {
        const userId = await AsyncStorage.getItem('uid')

        if (!selected || !price || !title || !description || !image) {
            Alert.alert('Post error', 'Required fields are missing')
        }
        else {
            database().ref(`Products/${userId}`).push({
                title,
                price,
                description,
                category: selected,
                image
            })
        }
    }
    return (

        <ScrollView>

            <View style={{ width: '80%', margin: 20 }}>
                <Input
                    placeholder='Enter title'
                    onChangeText={(e) => setTitle(e)}
                />
                <Input
                    placeholder='Enter price'
                    onChangeText={(e) => setPrice(e)}
                    keyboardType="numeric"
                />
                <Input
                    placeholder='Enter description'
                    onChangeText={(e) => setDescription(e)}
                />

                <SelectList
                    boxStyles={{ borderWidth: 0, borderBottomWidth: 1, borderRadius: 0, width: '100%' }}
                    inputStyles={{ fontSize: 17, color: 'black' }}
                    setSelected={setSelected} // built in prop
                    data={data}
                    save="value"
                    placeholder="Select category"
                />

                <TouchableOpacity
                    style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10, marginTop: 15 }}
                    onPress={uploadImage}
                >
                    <Text>
                        {!image ? 'Upload Image' : 'Image Uploaded'}
                    </Text>
                    <Icon name="add-a-photo" size={25} />
                </TouchableOpacity>

                <TouchableOpacity onPress={addToLising}>
                    <Button
                        title={'ADD TO LISTING'}
                        containerStyle={{
                            width: '100%',
                            marginTop: 20,
                        }}
                    />
                </TouchableOpacity>
            </View>

        </ScrollView>

    )
}

export default Post



