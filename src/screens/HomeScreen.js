import React from 'react';
import {View,SafeAreaView,StyleSheet,Text,StatusBar,ScrollView} from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import { POSTS } from '../data/posts';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';

function HomeScreen({navigation}) {
return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#000" />
        <Header navigation={navigation} />
        <ScrollView>
        <Stories />
            {POSTS.map((post,index) => (
                 <Post key={index} {...post} post={post} />
            ))}
            {/* <Post /> */}
        </ScrollView>
        <BottomTabs icons={bottomTabIcons} navigation={navigation} />
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});
export default HomeScreen;