import React from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity,Dimensions} from 'react-native';
import normalize from 'react-native-normalize';
import { Divider } from '@rneui/themed';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AntDesign,MaterialIcons }  from '@expo/vector-icons';
import { POSTS } from '../../data/posts';
const { width, height } = Dimensions.get('window');

function Post({post}) {
    return (
        <View style={{marginBottom: normalize(30,'height') }}>
            <Divider orientation='vertical' width={2} color="white" /> 
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: normalize(10,'width'), }}>
                <PostFooter post={post} />
                <Likes post={post} />
                <Caption post={post} />
                <Comment post={post} />
                <CommentSection post={post} />
            </View>
        </View>
    );
}

const PostHeader = ({ post }) => {
    return (
        <View style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin: normalize(5,'height') }}>
            <View style={{ flexDirection:'row',alignItems:'center' }} >
                <Image source={{ uri: post.profile }} style={styles.story} />
                <Text style={{color:'white',marginLeft:normalize(5,'height'),fontWeight:'bold' }}>{post.user}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.3}>
                <AntDesign name="ellipsis1" size={normalize(25,'height')} color={'white'} style={{marginRight:normalize(5,'height')}} />
            </TouchableOpacity>
        </View>
    );
}

const PostImage = ({ post }) => (
    <View style={{ width:width,height: height }}>
        <Image source={{ uri: post.imageurl }} style={styles.image} />
    </View>
)

const PostFooter = ({ post }) => (
    <View style={{ flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin: normalize(5,'height') }}>
        <View style={{ flexDirection:'row',justifyContent:'space-between',marginHorizontal: normalize(8,'width'), }} >
            <TouchableOpacity activeOpacity={0.3}>
                <AntDesign name="hearto" size={normalize(25,'height')} color={'white'} style={{marginRight:normalize(5,'height')}} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.3} style={{marginHorizontal: normalize(8,'width'),}} >
                <AntDesign name="message1" size={normalize(25,'height')} color={'white'} style={{marginRight:normalize(5,'height')}} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.3}>
                <AntDesign name="sharealt" size={normalize(25,'height')} color={'white'} style={{marginRight:normalize(5,'height')}} />
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection:'row',alignItems:'center',marginHorizontal:normalize(5,'height') }} >
            <TouchableOpacity activeOpacity={0.3}>
                <MaterialIcons name="save-alt" size={normalize(25,'height')} color={'white'} style={{marginRight:normalize(5,'height')}} />
            </TouchableOpacity>
        </View>
    </View>
)

const Likes = ({post}) =>(
    <View style={{flexDirection:'row',marginTop:normalize(5,'width')}}>
        <Text style={{color:'white',marginHorizontal:normalize(10,'width'),fontWeight:'600'}}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)

const Caption = ({post}) => (
    <View style={{marginTop:normalize(5,'height')}}>
        <Text>
            <Text style={{color:'white',fontWeight:'900'}}>{post.user}   </Text>
            <Text style={{color:'white'}}>{post.caption}</Text>
        </Text>
    </View>
)

const Comment = ({post}) => (
    <View style={{marginTop:normalize(5,'height')}}>
        {
            !!post.comments.length && (
                <Text style={{color:'grey'}}>
                    View{post.comments.length > 1 ? ' all ' : ' '}{post.comments.length}
                    {post.comments.length > 1 ? ' comments' : ' comment'}
                </Text>
            )
        }
    </View>
)

const CommentSection = ({post}) => (
    <>
        {post.comments.map((comment,index) => (
            <View key={index} style={{flexDirection:'row',marginTop:normalize(5,'height')}}>
                <Text style={{color:'white'}}>
                    <Text style={{fontWeight:'600'}}>{comment.user}</Text>{'   '}
                    {comment.comment}
                </Text>
            </View>
        ))}
    </>
)

const styles = StyleSheet.create({
    story:{
        width: normalize(25,'width'),
        height: normalize(25,'height'),
        borderRadius: normalize(30,'height'),
        borderColor: '#ff8501',
        borderWidth: 1,
        marginHorizontal: normalize(8,'width'),
    },
    storyName:{
        fontSize: normalize(12,'width'),
        fontWeight: 'bold',
        marginTop: normalize(5,'height'),
        marginHorizontal: normalize(20,'width'),
        color:'white'
    },
    image:{
        width: width,
        height: height -20,
        resizeMode:'contain',
        borderRadius: normalize(10,'height'),
        marginBottom: normalize(10,'height')
    }
});
export default Post;