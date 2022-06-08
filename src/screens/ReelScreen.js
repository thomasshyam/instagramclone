import React,{useRef,useState} from 'react';
import {View,StyleSheet,FlatList,Text,Dimensions,TouchableOpacity,Image,StatusBar} from 'react-native';
import {Video} from 'expo-av';
import {AntDesign,MaterialIcons} from '@expo/vector-icons';
import normalize from 'react-native-normalize';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';

const {width,height} = Dimensions.get('window');

const data = [
    {
        id: 1,
        channelName: 'cutedog',
        uri: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',
        caption: 'Cute dog shaking hands #cute #puppy',
        musicName: 'Song #1',
        likes: 4321,
        comments: 2841,
        avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
    },
    {
        id: 2,
        channelName: 'meow',
        uri: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
        caption: 'Doggies eating candy #cute #puppy',
        musicName: 'Song #2',
        likes: 2411,
        comments: 1222,
        avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
    },
    {
        id: 3,
        channelName: 'yummy',
        uri: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
        caption: 'Brown little puppy #cute #puppy',
        musicName: 'Song #3',
        likes: 3100,
        comments: 801,
        avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
    },
    {
        id: 4,
        channelName: 'cute',
        uri: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',
        caption: 'Cute dog shaking hands #cute #puppy',
        musicName: 'Song #1',
        likes: 4321,
        comments: 2841,
        avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
    },
    {
        id: 5,
        channelName: 'meow',
        uri: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
        caption: 'Doggies eating candy #cute #puppy',
        musicName: 'Song #2',
        likes: 2411,
        comments: 1222,
        avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
    },
    {
        id: 6,
        channelName: 'yummy',
        uri: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
        caption: 'Brown little puppy #cute #puppy',
        musicName: 'Song #3',
        likes: 3100,
        comments: 801,
        avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
    },
]

const RenderItem = ({ item }) => {
    const video = useRef(null);
    const [mute, setMute] = useState(true)
    const [shouldPlay, setShouldPlay] = useState(false)

    const handlePlayAndPause = () => {
        setShouldPlay(!shouldPlay)
    }

    return (
        <View key={item.id} style={[styles.videoContainer]}>
            {/* <StatusBar translucent backgroundColor="rgba(0,0,0,0)" /> */}
            <Video ref={video} style={styles.video} source={{uri: item.uri,}} resizeMode='cover' isLooping posterSource={{ uri: item.avatarUri }} posterStyle={{ width, height }} isMuted={mute} shouldPlay={shouldPlay}
            />
            <View style={styles.controlBar}>
                <MaterialIcons name={shouldPlay ? "pause" : "play-arrow"} size={normalize(55, height)} color="white" onPress={handlePlayAndPause} />
            </View> 
            <View style={styles.rightSection}>
                <TouchableOpacity style={styles.innerContainer}>
                    <AntDesign name="heart" color="#fff" size={normalize(25, height)}  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.innerContainer}>
                    <AntDesign name="message1" color="#fff" size={normalize(25, height)}  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.innerContainer}>
                    <AntDesign name="sharealt" size={normalize(25, height)} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomSection}>
                <View style={{ flexDirection: 'row',marginTop:normalize(50,'height') }}>
                    <View style={{ flexDirection: 'row', flex: 3, padding: normalize(5), }}>
                        <View style={{ width: '55%', marginHorizontal: 10 }}>
                            <Text numberOfLines={1} style={{ fontSize: normalize(15), color: '#fff', fontWeight: 'bold' }}>{item.caption}</Text>
                            <Text numberOfLines={1} style={{ fontSize: normalize(16), color: '#fff', fontWeight: '400' }}>Developer</Text>
                        </View>
                        <Text style={{ fontSize: normalize(17,'height'), color: '#FF3250', fontWeight: 'bold', width: '30%', }}>Trending</Text>
                    </View>
                    <View style
                    ={{ flex: 1, justifyContent: 'center', marginBottom: normalize(12,'height') }}>
                        <View style={{ backgroundColor: '#FF3250', height: 30, width: '80%', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Reels</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

function ReelScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>Reels</Text>
                <TouchableOpacity>
                    <AntDesign
                        name="bars"
                        size={25}
                        color="white"
                    />
                </TouchableOpacity>

            </View>
            <FlatList
                pagingEnabled
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <RenderItem item={item} />}
            />
            <BottomTabs icons={bottomTabIcons} navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    videoContainer: {
        height, width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        height : height,
        width : width,
        position: 'absolute',
    },
    header: {
        zIndex: 1,
        position: 'absolute',
        height: normalize(60,'height'),
        width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    controlBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: height / 2,
        height: 55,
    },
    rightSection: {
        justifyContent: 'space-between',
        position: 'absolute',
        top: height / 2,
        right: 0
    },
    innerContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2),
        height: Dimensions.get('window').height / 15,
        width: Dimensions.get('window').height / 15,
        justifyContent: 'center', alignItems: 'center',
        borderRadius: 50,
        margin: 10,
    },
    bottomSection: {
        position: 'absolute',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        bottom: 0,
        width,
        borderTopLeftRadius: 15,
        height: height / 4,
    },
});
export default ReelScreen;