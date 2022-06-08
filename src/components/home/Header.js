import React from 'react';
import {View,StyleSheet,Text,Image,Dimensions,StatusBar,TouchableOpacity} from 'react-native';
import normalize from 'react-native-normalize';
import { AntDesign,MaterialIcons }  from '@expo/vector-icons';
import NewPostScreen from '../../screens/NewPostScreen';

const {width,height} = Dimensions.get('window');

function Header({navigation}) {
    return (
        <View style={styles.headerContainer}>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <TouchableOpacity activeOpacity={0.8}>
                <Image source={require('../../assets/images/insta.png')} style={styles.logo} />
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={ () => navigation.navigate('NewPostScreen')} >
                    <AntDesign name="plussquareo" size={normalize(25,'height')} color={'white'} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>2</Text>
                    </View>
                    <AntDesign name="message1" size={normalize(25,'height')} color={'white'} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    logo:{
        // height: normalize(100,'height'),
        // width: normalize(100,'width'),
        resizeMode: 'contain',
        width: width * 0.4,
        height: height * 0.1,
        marginHorizontal: normalize(10,'width'),
    },
    iconsContainer:{
        flexDirection:'row',
        right: normalize(10,'width'),
    },
    icon:{
        marginHorizontal: normalize(8,'width'),
    },
    unreadBadge:{
        backgroundColor: '#FF3250',
        width: normalize(20,'width'),
        height: normalize(20,'height'),
        borderRadius: normalize(30,'height'),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -normalize(10,'height'),
        right: -normalize(3,'width'),
        zIndex:1,
    },
    unreadBadgeText:{
        color: '#fff',
        fontSize: normalize(15,'height'),
        fontWeight: 'bold',
    },
});
export default Header;