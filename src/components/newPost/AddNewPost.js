import React from 'react';
import {View,StyleSheet,Text,Dimensions,TouchableOpacity} from 'react-native';
import normalize from 'react-native-normalize';
const {width,height} = Dimensions.get('window');
import { AntDesign,MaterialIcons }  from '@expo/vector-icons';
import FormikPostUploader from './FormikPostUploader';

function AddNewPost({navigation}) {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <FormikPostUploader navigation={navigation}  />
        </View>
    );
}

const Header = ({navigation}) => (
            <View style={styles.headerContainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={ () => navigation.goBack() } >
                    <MaterialIcons name="keyboard-arrow-left" size={normalize(35,'height')} color={'white'} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.headerText}> NEW POST</Text>
                <Text></Text>
            </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: normalize(10,'width'),
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: normalize(10,'height'),
    },
    headerText:{
        fontSize: normalize(20,'height'),
        fontWeight: '700',
        color: 'white',
        marginRight: normalize(25,'width'),
    }
});
export default AddNewPost;