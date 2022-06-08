import React from 'react';
import {View,StyleSheet,Text,Image,Dimensions,StatusBar} from 'react-native';
import normalize from 'react-native-normalize';
import LoginForm from '../components/loginScreen/LoginForm';
const { width, height } = Dimensions.get('window');

const INSTAGRAM_LOGO = "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png";

function LoginScreen({navigation}) {
return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <View style={styles.logoContainer}>
            <Image source={{uri:INSTAGRAM_LOGO,width:normalize(100,'height'),height:normalize(100,'height')}} style={styles.logo} />
        </View>
        <LoginForm navigation={navigation} /> 
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: normalize(12,'width'),
        paddingTop: normalize(50,'height'),
    },  
    logoContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
});
export default LoginScreen;