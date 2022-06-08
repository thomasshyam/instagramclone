import React,{useState} from 'react';
import {View,StyleSheet,Text,TextInput,TouchableOpacity} from 'react-native';
import normalize from 'react-native-normalize';

import { Formik } from 'formik'; 
import * as Yup from 'yup';
import Validator from 'email-validator';

function SignupForm({navigation}) {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        username: Yup.string().min(5,'Username must be at least 5 characters').required('Username is required'),
        password: Yup.string().min(6,'Password must be at least 6 characters').required('Password is required')
    });
    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{
                    email: '',
                    username: '',
                    password: ''
                }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
                onSubmit={values => {
                    console.log(values);
                    navigation.navigate('HomeScreen');
                }}
            >
                {({handleChange,handleBlur,handleSubmit,values,errors,touched}) => (
                    <>
                    <View style={[styles.inputField,
                            {borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#000' : 'red'}
                    ]}>
                        <TextInput 
                            placeholder="username, or email"
                            placeholderTextColor="#444"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            textContentType='emailAddress'
                            autoFocus={true}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />  
                    </View>
                    <View style={[styles.inputField,
                        { borderColor: values.username.length < 1 || values.username.length >= 6 ? '#000' : 'red'}
                    ]}>
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor="#444"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                        />
                    </View>
                    <View style={[styles.inputField,
                        { borderColor: 1 > values.password.length || values.password.length >= 8 ? '#000' : 'red'}
                    ]}>
                        <TextInput 
                            placeholder="Password"
                            placeholderTextColor="#444"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            textContentType='password'
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit}>
                        <View style={{backgroundColor:'#FF3250',alignItems:'center',height:normalize(50,'height'),justifyContent:'center',borderRadius:20,marginTop:normalize(30,'height')}}>
                            <Text style={{color:'white',fontSize:normalize(20,'width')}}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.signupContainer}>
                        <Text style={{color:'#000',alignItems:'center',justifyContent:'center' }}>Already have an account?</Text>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
                            <Text style={{ color:'#6BB0F5' }}> Log In</Text>
                        </TouchableOpacity>
                    </View>
                    </>
                )}
            </Formik>
        </View>
    );
}
const styles = StyleSheet.create({
    inputField:{
        borderRadius:4,
        borderWidth:1,
        borderColor:'#000',
        fontSize:normalize(26,'width'),
        marginBottom:normalize(10,'height'),
        padding:normalize(10,'height'),
    },
    wrapper:{
        marginTop:normalize(50,'height'),
    },
    signupContainer:{
        marginTop:normalize(20,'height'),
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginHorizontal:normalize(20,'height'),
    },
});

export default SignupForm;