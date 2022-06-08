import React,{useState} from 'react';
import {View,StyleSheet,Text,TouchableOpacity,Image,Dimensions} from 'react-native';
import { Divider } from '@rneui/themed';
import { MaterialIcons,AntDesign,Entypo } from '@expo/vector-icons';
import normalize from 'react-native-normalize';
const { width, height } = Dimensions.get('window');
import ReelScreen from '../../screens/ReelScreen';
import SettingScreen from '../../screens/SettingScreen';
import AccountScreen from '../../screens/AccountScreen';


function BottomTabs({navigation}) {
    const [active,setActive]=useState('home');

    return (
        <View style={styles.wrapper}>
            <Divider orientation='vertical' width={2} color="white" /> 
                <View style={styles.container}>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("HomeScreen")}>
                        <MaterialIcons 
                            style={styles.icon}
                            name='home'
                            size={normalize(30,'height')}
                            color={active === 'home' ? '#FF3250' : '#fff'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <MaterialIcons
                            style={styles.icon}
                            name='search'
                            size={normalize(30,'height')}
                            color={active === 'Search' ? '#FF3250' : '#fff'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("ReelScreen")}>
                        <MaterialIcons
                            style={styles.icon}
                            name='video-collection'
                            size={normalize(30,'height')}
                            color={active === 'Reels' ? '#FF3250' : '#fff'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <AntDesign
                            style={styles.icon}
                            name='hearto'
                            size={normalize(30,'height')}
                            color={active === 'Liked' ? '#FF3250' : '#fff'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("AccountScreen")}>
                        <MaterialIcons
                            style={styles.icon}
                            name='person-outline'
                            size={normalize(30,'height')}
                            color={active === 'Profile' ? '#FF3250' : '#fff'}
                        />
                    </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        position: 'absolute',
        width: width ,
        padding: normalize(10,'height'),
        justifyContent: 'center',
        bottom: 0,
        zIndex: 1,
        backgroundColor: '#000',
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    icon:{
        width: normalize(40,'width'),
        height: normalize(30,'height'),
        marginVertical: normalize(15,'width'),
    },
    profilePic: (active = '') => ({
        borderRadius: normalize(50,'height'),
        borderColor: '#fff',
        borderWidth: active === 'Profile' ? 2 : 0,
    }),
});
export default BottomTabs;