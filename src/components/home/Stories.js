import React from 'react';
import {View,StyleSheet,Text,ScrollView,Image,Dimensions,TouchableOpacity} from 'react-native';
import { USERS } from '../../data/users';
import normalize from 'react-native-normalize';

const {width,height} = Dimensions.get('window');

function Stories(props) {
    return (
        <View style={{ marginBottom: normalize(15,'height') }}>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {
                USERS.map((story,index)=>(
                    <View key={index} style={{alignItems:'center'}} >
                        <Image source={{ uri: story.image }} style={styles.story} />
                        <Text style={styles.storyName}>{
                            story.user.length > 10 ? story.user.slice(0,10).toLowerCase() + '...' : story.user.toLowerCase()
                        }</Text>
                    </View>
                )
                )
            }
        </ScrollView>
            {/* <Text style={{color:'white',marginHorizontal: normalize(10,'height'),marginVertical: normalize(10,'height') }}>
                STORIES
            </Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    story:{
        width: normalize(70,'width'),
        height: normalize(60,'height'),
        borderRadius: normalize(40,'height'),
        borderColor: 'red',
        borderWidth: 2,
        marginHorizontal: normalize(8,'width'),
    },
    storyName:{
        color: '#fff',
        fontSize: normalize(12,'height'),
        fontWeight: '400',
        marginTop: normalize(5,'height'),
        marginHorizontal: normalize(20,'width'),
    },
});
export default Stories;