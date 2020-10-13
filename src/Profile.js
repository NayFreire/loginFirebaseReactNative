import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';

export default function Profile ({navigation}){
    return(
    <View style={stylesProfile.container}>
        <Text style={stylesProfile.title}>Bem vindo ao seu perfil</Text>

        <TouchableOpacity
        style={stylesProfile.touchO}
        onPress={() => navigation.navigate('About')}>
            <Text style={stylesProfile.txtTouchO}>Mais Sobre mim</Text>
        </TouchableOpacity> 

        <TouchableOpacity
        style={stylesProfile.touchO}
        onPress={() => navigation.navigate('Lists')}>
            <Text style={stylesProfile.txtTouchO}>Lista de Amigos</Text>
        </TouchableOpacity> 
    </View>)
}

const stylesProfile = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        backgroundColor: '#c2c2c2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    touchO:{
        padding: 10,
        margin: 10,
        backgroundColor: '#540090',
        borderRadius: 10
    },
    txtTouchO:{
        color: 'white',
        fontSize: 25
    }
})