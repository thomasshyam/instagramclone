import React,{useState} from 'react';
import {View,StyleSheet,Text,TextInput,TouchableOpacity,Alert} from 'react-native';
import normalize from 'react-native-normalize';

import { Formik } from 'formik'; 
import * as Yup from 'yup';
import Validator from 'email-validator';
import firebase from '../../../firebase';

const LoginForm = ({navigation}) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().min(8,'Password must be at least 8 characters').required('Password is required')
    });

    const onLogin = async (email,password,navigation) => {
        try {
            // await firebase.auth().signInWithEmailAndPassword(email,password);
            console.log("Firebase login successful", email,password );
            navigation.navigate('HomeScreen');
        }
        catch(error) {
            Alert.alert(error.message);
        }
    }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
                onSubmit={values => {
                    onLogin(values.email,values.password);
                }}
            >
                {({handleChange,handleBlur,handleSubmit,values,errors,touched}) => (
                    <>
                    <View style={[styles.inputField,
                            {borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#000' : 'red'}
                    ]}>
                        <TextInput 
                            placeholder="Phone Number, username, or email" 
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
                    <TouchableOpacity activeOpacity={0.8} style={{marginBottom:normalize(20,'height'),alignItems:'flex-end'}}>
                        <Text style={{color:'#6BB0F5', }}>Forgot Password ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("HomeScreen")}>
                        <View style={{backgroundColor:'#FF3250',alignItems:'center',height:normalize(50,'height'),justifyContent:'center',borderRadius:20}}>
                            <Text style={{color:'white',fontSize:normalize(20,'width')}}>Log In</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.signupContainer}>
                        <Text style={{color:'#000',alignItems:'center',justifyContent:'center' }}>Don't have an account?</Text>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.push('SignupScreen')}>
                            <Text style={{ color:'#6BB0F5' }}> Sign Up</Text>
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
export default LoginForm;