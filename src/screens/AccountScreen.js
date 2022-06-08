import React from 'react';
import {View,StyleSheet,Dimensions,Image,Text,StatusBar,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native';
import {MaterialIcons,AntDesign,Entypo}    from '@expo/vector-icons';
import normalize from 'react-native-normalize';
import SettingScreen from './SettingScreen';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';

const {width,height} = Dimensions.get('window');

function AccountScreen({navigation}) {
    return (
        <>
            <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <View style={styles.header}>
                <MaterialIcons name="lock" size={normalize(20,'height')} style={{color:'#fff'}} />   
                    <TouchableOpacity activeOpacity={0.3}>
                        <Text style={styles.settingOptions}>mr.popeye_the_sailor_man__</Text>      
                    </TouchableOpacity>
                        <AntDesign name="plussquareo" size={normalize(20,'height')} style={{color:'#fff'}} />              
                    <TouchableOpacity activeOpacity={0.3} onPress={()=>navigation.navigate("SettingScreen")}>
                        <MaterialIcons name="settings" size={normalize(20,'height')} style={{color:'#fff',flexDirection:'row'}} />
                    </TouchableOpacity>
            </View>
            <View style={styles.profile}>
                <Image source={require('../assets/images/tom.jpg')} style={styles.profileImage} />
                <View style={styles.profileInfo}>
                    <Text style={styles.profileText}>222</Text>
                    <Text style={styles.profileName}>Posts</Text>
                </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.profileText}>  562</Text>
                    <Text style={styles.profileName}>Followers</Text>
                </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.profileText}>   278</Text>
                    <Text style={styles.profileName}>Following</Text>
                </View>
            </View>
            <View style={styles.bio}>
                <Text style={{color:'#fff',fontSize:(normalize(20,'height'))}}>Thomas Shyam</Text>
                <Text style={styles.bioText}>
                    I am a software engineer and a app developer. I love to create things and I love to learn new things.
                </Text>
            </View>
            <ScrollView>
                <View style={styles.post}>
                    <Image source={require('../assets/images/tom.jpg')} style={styles.postImage} />
                    <Image source={require('../assets/images/tom1.jpg')} style={styles.postImage} />
                    <Image source={require('../assets/images/tom5.jpg')} style={styles.postImage} />
                </View>
                <View style={styles.post}>
                    <Image source={require('../assets/images/tom4.jpg')} style={styles.postImage} />
                    <Image source={require('../assets/images/tom.jpg')} style={styles.postImage} />
                    <Image source={require('../assets/images/tom6.jpg')} style={styles.postImage} />
                </View>
            </ScrollView>
        </SafeAreaView>
            <BottomTabs icons={bottomTabIcons} navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    header:{
        flexDirection:'row',
        top:normalize(10,'height'),
        marginHorizontal:normalize(20,'height'),
        backgroundColor:'#000',
        justifyContent:'space-between',
    },
    settingOptions:{
        fontSize:normalize(18,'height'),
        color:'#fff',
        marginHorizontal:normalize(10,'height'),
        fontWeight:'bold',
    },
    profile:{
        top:normalize(10,'height'),
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:normalize(20,'height'),
        marginVertical:normalize(20,'height'),
    },
    profileImage:{
        width:normalize(100,'height'),
        height:normalize(100,'height'),
        borderRadius:normalize(70,'height'),
        borderWidth:normalize(2,'height'),
        borderColor:'#fff',
    },
    profileInfo:{
        flexDirection:'column',
        justifyContent:'center',
        marginHorizontal:normalize(10,'height'),
    },
    profileName:{
        fontSize:normalize(18,'height'),
        color:'#fff',
        fontWeight:'bold',
    },
    profileText:{
        fontSize:normalize(18,'height'),
        color:'#fff',
        fontWeight:'400',
        marginHorizontal:normalize(10,'height'),
    },
    bio:{
        marginHorizontal:normalize(20,'height'),
    },
    bioText:{
        marginVertical:normalize(20,'height'),
        color:'#fff',
        fontSize:normalize(15,'height'),
        },
    post:{
        marginHorizontal:normalize(5,'height'),
        marginVertical:normalize(5,'height'),
        flexDirection:'row',
        // justifyContent:'space-evenly',
        borderColor:'#000',
        borderWidth:normalize(1,'height'),
        marginBottom:normalize(10,'height'),
    },
    postImage:{
        width:width / 3,
        resizeMode:'contain',
        height: height / 5 ,
        borderRadius:normalize(10,'height'),
        borderWidth:normalize(2,'height'),
        borderColor:'#000',
        borderWidth:normalize(5,'height'),
    },
});
export default AccountScreen;