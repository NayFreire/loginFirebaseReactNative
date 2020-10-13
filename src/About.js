import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

export default function About ({navigation}){
    return(
    <View style={stylesAbout.container}>
        <Text style={stylesAbout.title}>Sobre mim</Text>

        <Image style={stylesAbout.imagem}
        source={{
          uri: 'https://avatars0.githubusercontent.com/u/33930743?s=400&u=db942b6990fb3e99b0fc4bc31b9f33cce7d9fb67&v=4',
        }}
      />
        <View style={stylesAbout.aboutMe}>
            <Text style={stylesAbout.txtAboutMe}>
                Oi, tudo bom? Meu nome é Nayara Ribeiro Freire. Estudo Ciência da Computação no IFSULDEMINAS - Campus Passos e sou formada em Técnica em Informática pelo IFSULDEMINAS -Campus Inconfidentes. Faço parte do grupo PyLadies, onde tentamos trazer as mulheres para o mundo da computação. Gosto muito da área e espero conseguir grandes feitos nela. Obrigada por testar minha primeira aplicação utilizando Firebase.
            </Text>
        </View>

    </View>)
}

const stylesAbout = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#d2d2d2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    },
    imagem:{
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20
    },
    aboutMe:{
        maxWidth: 700,
        fontSize: 20,
        padding: 15
    }
})