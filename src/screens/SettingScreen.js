import React from 'react';
import {View,StyleSheet,Dimensions,Text,SafeAreaView,Image,ScrollView,TextInput,StatusBar,TouchableOpacity} from 'react-native';
import normalize from 'react-native-normalize';
import { MaterialIcons,AntDesign,Entypo } from '@expo/vector-icons';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';

const {width,height} = Dimensions.get('window');

function SettingScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={0.3} onPress={() => navigation.goBack()} >
                        <MaterialIcons name='chevron-left' size={normalize(26,'height')} style={{marginHorizontal:normalize(10,'height'),color:'#fff'}}  />
                    </TouchableOpacity>
                    <Text style={{fontSize:normalize(25,'height'),color:"#fff"}}>Settings</Text>
                </View>
            <ScrollView>
                <View style={styles.searchContainer}>
                    <TextInput 
                        style={styles.searchInput}
                        placeholder="Search"
                        placeholderTextColor="#fff"
                        underlineColorAndroid="transparent"
                    />
                </View> 
                <View style={styles.settingContainer}>
                    <View style={styles.iconContainer}>
                            <MaterialIcons name="person-add-alt" size={normalize(25,'height')} style={{color:'#fff'}} />   
                        <TouchableOpacity activeOpacity={0.3}>
                            <Text style={styles.settingOptions}>Follow and Invite Friends</Text>                     
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                            <MaterialIcons name="notifications-none" size={normalize(25,'height')} style={{color:'#fff'}} />   
                        <TouchableOpacity activeOpacity={0.3}>
                            <Text style={styles.settingOptions}>Notificationns</Text>                     
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                            <MaterialIcons name="lock" size={normalize(25,'height')} style={{color:'#fff'}} />   
                        <TouchableOpacity activeOpacity={0.3}>
                            <Text style={styles.settingOptions}>Privacy</Text>                     
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                            <MaterialIcons name="security" size={normalize(25,'height')} style={{color:'#fff'}} />   
                        <TouchableOpacity activeOpacity={0.3}>
                            <Text style={styles.settingOptions}>Security</Text>                     
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                            <MaterialIcons name="speaker" size={normalize(25,'height')} style={{color:'#fff'}} />   
                        <TouchableOpacity activeOpacity={0.3}>
                            <Text style={styles.settingOptions}>Ads</Text>                     
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                            <MaterialIcons name="account-circle" size={normalize(25,'height')} style={{color:'#fff'}} />   
                        <TouchableOpacity activeOpacity={0.3}>
                            <Text style={styles.settingOptions}>Account</Text>                     
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                            <MaterialIcons name="help-outline" size={normalize(25,'height')} style={{color:'#fff'}} />   
                        <TouchableOpacity activeOpacity={0.3}>
                            <Text style={styles.settingOptions}>Help</Text>                     
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                            <Entypo name="info-with-circle" size={normalize(25,'height')} style={{color:'#fff'}} />   
                        <TouchableOpacity activeOpacity={0.3}>
                            <Text style={styles.settingOptions}>About</Text>                     
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                            <MaterialIcons name="picture-in-picture-alt" size={normalize(25,'height')} style={{color:'#fff'}} />   
                        <TouchableOpacity activeOpacity={0.3}>
                            <Text style={styles.settingOptions}>Theme</Text>                     
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.brandInfo}>
                    <Entypo name="infinity" size={normalize(25,'height')} style={{color:'#fff'}} />
                    <Text style={styles.brandInfoText}>Meta</Text>
                </View>
                <View >
                    <Text style={styles.accounts}>Accounts Centre</Text>
                    <Text style={{color:"grey",fontSize:normalize(13,'height'),marginHorizontal:normalize(20,'height'),alignItems:'center'}}>
                        Control settings for connected experiences across Instagram, the
                    </Text>
                    <Text style={{color:"grey",fontSize:normalize(13,'height'),marginHorizontal:normalize(20,'height'),alignItems:'center'}}>
                        Facebook app and Messenger, including story and post sharing and
                    </Text>
                    <Text style={{color:"grey",fontSize:normalize(13,'height'),marginHorizontal:normalize(20,'height'),alignItems:'center'}}>
                        logging in.
                    </Text>
                </View>
                <View style={styles.switchAccount}>
                    <Text style={styles.switchLogin}>Logins</Text>
                    <View style={styles.accountScreen}>
                        <TouchableOpacity activeOpacity={0.3}>
                            <Text style={styles.switchAccountText}>Add or switch accounts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.3}>
                            <Text style={styles.switchAccountText}>Log out mr.popeye_the_sailor_man__</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.3}>
                            <Text style={styles.switchAccountText}>Log out of all accounts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.3}>
                            <Text style={styles.switchAccountText}></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <BottomTabs icons={bottomTabIcons} navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:"#000",
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
    },
    searchInput: {
        width: width - normalize(40,'width'),
        height: normalize(40,'height'),
        backgroundColor: 'grey',
        borderRadius: normalize(10,'height'),
        paddingHorizontal: normalize(10,'height'),
        paddingVertical: normalize(10,'height'),
        marginHorizontal: normalize(10,'height'),
        marginVertical: normalize(10,'height'),
        fontSize: normalize(18,'height'),
        color: '#000',
    },
    searchContainer: {
        top: normalize(10,'height'),
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingContainer: {
        width: width,
        marginVertical: normalize(20,'height'),
        marginHorizontal: normalize(20,'height'),
    },
    settingOptions:{
        fontSize: normalize(18,'height'),
        color: '#fff',
        marginVertical: normalize(10,'height'),
        marginHorizontal: normalize(10,'height'),
    },
    iconContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical: normalize(10,'height'),
    },
    brandInfo:{
        marginHorizontal: normalize(20,'height'),
        flexDirection:'row',
    },
    brandInfoText:{
        fontSize: normalize(18,'height'),
        color: '#fff',
        marginHorizontal: normalize(5,'height'),
        marginVertical: normalize(3,'height'),
    },
    accounts:{
        fontSize: normalize(18,'height'),
        color: 'blue',
        marginHorizontal: normalize(20,'height'),
        marginVertical: normalize(10,'height'),
    },
    switchAccount:{
        marginHorizontal: normalize(20,'height'),
        marginVertical: normalize(20,'height'),
    },
    switchLogin:{
        fontSize: normalize(18,'height'),
        color: '#fff',
        marginVertical: normalize(10,'height'),
    },
    accountScreen:{
        marginVertical: normalize(10,'height'),
    },
    switchAccountText:{
        fontSize: normalize(18,'height'),
        color: 'blue',
        marginVertical: normalize(10,'height'),
    },
});
export default SettingScreen;