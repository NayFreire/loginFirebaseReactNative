import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

import firebase from '@firebase/app';
import '@firebase/auth'
import { render } from 'react-dom';

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoading: false,
            message: ''
        }
    }

        componentDidMount(){
            const firebaseConfig = {
                apiKey: "AIzaSyB-7g6LB_fIVxudqc3Qlabd4tvSbwWZfUU",
                authDomain: "loginfirebase-6b442.firebaseapp.com",
                databaseURL: "https://loginfirebase-6b442.firebaseio.com",
                projectId: "loginfirebase-6b442",
                storageBucket: "loginfirebase-6b442.appspot.com",
                messagingSenderId: "69395291366",
                appId: "1:69395291366:web:753d4388ea631b2dc06f27"
            };
            // Initialize Firebase
            try {
                firebase.initializeApp(firebaseConfig);
            }
            catch (err) {
                if (!/already exists/.test(err.message)) {
                    console.error("Erro");
                }
            }
        };

        renderButton(){
            if (this.state.isLoading) {
                return <ActivityIndicator />;
            }

            return (
                <TouchableOpacity
                    style={stylesLogin.touchO}
                    onPress={() => this.login()}>
                    <Text style={stylesLogin.txtTouchO}>Entrar</Text>
                </TouchableOpacity>
            );
        };

        renderMessage(){
            const { message } = this.state;

            if (!message) {
                return null;
            }

            return (
                <View>
                    <Text>
                        {message}
                    </Text>
                </View>
            );
        };

        mudaTextInput(campo, valor){
            this.setState({[campo]: valor});
        }

        login(){
            this.setState({ isLoading: true });
            const { email, password } = this.state;

            const loginSucesso = user => {
                this.props.navigation.navigate('Profile');
            };

            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(loginSucesso)
                .catch(error => {
                    if (error.code == 'auth/user-not-found') {
                        Alert.alert(
                            'Usuário não foi encontrado',
                            'Criar novo usuário?',
                            [{
                                text: 'Não',
                            }, {
                                text: 'Sim',
                                onPress: () => {
                                    firebase.auth()
                                        .createUserWithEmailAndPassword(email, password)
                                        .then(loginSucesso)
                                        .catch(error => {
                                            this.setState({
                                                message: this.erroLoginMessage(error.code)
                                            });
                                        });
                                }
                            }],
                            { cancelable: false }
                        );
                    } else {
                        Alert.alert(
                            'Erro na auntenticação',
                            this.erroLoginMessage(error.code)
                        );
                    }
                })
                .then(() => this.setState({ isLoading: false }));
        };

        erroLoginMessage = (errorCode) => {
            switch (errorCode) {
                case 'auth/wrong-password':
                    return 'Senha incorreta';
                case 'auth/user-not-found':
                    return 'Usuário não encontrado';
                case 'auth/invalid-email':
                    return 'E-mail incorreto';
                default:
                    return 'Erro não documentado, contate a administradora: Nayara';
            }
        }

        render(){
            return (
                <View style={stylesLogin.container}>
                    <Text style={stylesLogin.title}>Faça seu Log in</Text>
    
                    <Text style={stylesLogin.labelInputs}>Email</Text>
                    <TextInput style={stylesLogin.input}
                        keyboardType={'email-address'}
                        placeholder="Ex.: exemplo123@email.com" 
                        onChangeText={value => this.mudaTextInput('email', value)}/>
    
                    <Text style={stylesLogin.labelInputs}>Senha</Text>
                    <TextInput style={stylesLogin.input} 
                        secureTextEntry
                        placeholder="Ex.: exemplo@email.com"
                        onChangeText={value => this.mudaTextInput('password', value)}
                    />
    
                    {this.renderButton()}
                    {this.renderMessage()}
                </View>
            );
        }
}


const stylesLogin = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#d2d2d2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        marginBottom: 20,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    labelInputs:{
        fontSize: 25
    },
    input:{
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 24,
    },
    touchO:{
        padding: 10,
        paddingHorizontal: 50,
        backgroundColor: '#540090',
        margin: 10,
        borderRadius: 10,
    },
    txtTouchO:{
        color: 'white',
        fontSize: 25
    }
})