import React from 'react';
import {View,StyleSheet,SafeAreaView,StatusBar} from 'react-native';
import AddNewPost from '../components/newPost/AddNewPost';
import normalize from 'react-native-normalize';

function NewPostScreen({navigation}) {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#000',}}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <AddNewPost navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});
export default NewPostScreen;