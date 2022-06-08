import React,{useState} from 'react';
import {View,StyleSheet,Text,Image,TextInput,Dimensions,Button, TouchableOpacity} from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import normalize from 'react-native-normalize';
import { AntDesign,MaterialIcons }  from '@expo/vector-icons';
import { Divider } from '@rneui/themed';
import validUrl from 'valid-url';
const {width,height} = Dimensions.get('window');

const images = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5U0eNMG-Rcb3KRc0j-ps-JrlETDLdyzWHw&usqp=CAU';

const validationSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200,'Caption has reached the character')
}); 

function FormikPostUploader({navigation}) {
    const [imageUrl,setImageUrl] = useState(images);
    return (
        <Formik 
            initialValues={{
                imageUrl: '',
                caption: '' 
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
                console.log(values);
                console.log('Your Post was submitted sucessfullyy');
                navigation.goBack();    
            }}
            validateOnMount={true}
        >
            {({handleChange,handleBlur,handleSubmit,values,errors,touched,isValid}) => (
                <>
                    <View style={{margin:normalize(20,'height'),justifyContent:'space-between',flexDirection:'row'}}>
                        {/* <MaterialIcons name="add-a-photo" size={normalize(100,'height')} color={'grey'} style={styles.icon} /> */}
                        <Image source={{ uri : validUrl.isUri(imageUrl) ? imageUrl : images}} style={{ width : normalize(100,'width'),height:normalize(100,'height'), }} />
                        <View style={{ flex:1,marginLeft:normalize(10,'height')  }}>
                            <TextInput 
                                placeholder='Write a caption' 
                                placeholderTextColor='grey' 
                                multiline={true} 
                                style={{color:'white',fontSize: normalize(20,'height')}} 
                                onChangeText={handleChange('caption')} 
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <Divider width={0.2} orientation="vertical"  />
                        <TextInput 
                            onChange={(e) => setImageUrl(e.nativeEvent.text)}
                            placeholder='Enter Image url' 
                            placeholderTextColor='grey' 
                            style={{color:'white',fontSize: normalize(18,'height')}} 
                            onChangeText={handleChange('imageUrl')}
                            onBlur={handleBlur('imageUrl')}
                            value={values.imageUrl}
                        />
                        {
                            errors.imageUrl && (
                                <Text style={{fontSize: normalize(10,'height'),color:'red'}}>{errors.imageUrl}</Text>
                            )
                        }
                        {/* <Button title='Share' onPress={handleSubmit} disabled={!isValid} />  */}
                        <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit}>
                            <View style={{backgroundColor:'#FF3250',alignItems:'center',height:normalize(50,'height'),justifyContent:'center',borderRadius:20}}>
                                <Text style={{color:'white',fontSize:normalize(20,'width')}}>Share</Text>
                            </View>
                        </TouchableOpacity>
                </>
            )}
        </Formik>
    );
}
const styles = StyleSheet.create({
    
});
export default FormikPostUploader;