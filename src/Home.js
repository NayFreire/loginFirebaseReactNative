import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';

export default function Home ({navigation}){
    return(
        <View style={stylesHome.container}>
        <Text style={stylesHome.title}>Bem-Vindo(a)</Text>
        <TouchableOpacity
        style={stylesHome.touchO}
        onPress={() => navigation.navigate('Login')}>        
            <Text style={stylesHome.txtTouchO}>Faça o Log in</Text>
        </TouchableOpacity>
    </View>
    );
}

const stylesHome = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#d1d1d1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        textAlign: 'center',
        fontSize: 30
    },
    touchO:{
        backgroundColor: '#540090',
        padding: 10,
        borderRadius: 10,
        margin: 10
    },
    txtTouchO:{
        textAlign: 'center',
        fontSize: 25,
        color: '#fff'
    }
})