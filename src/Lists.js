import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const friends = [
    {
        id: '0',
        nome: 'Carolina Gomes da Silva',
        cidade: 'São Paulo'
    },
    {
        id: '1',
        nome: 'Raquel Faria',
        cidade: 'São Paulo'
    },
    {
        id: '2',
        nome: 'João Pedro de Oliveira',
        cidade: 'São João da Boa Vista'
    },
    {
        id: '3',
        nome: 'Maria Silva da Costa',
        cidade: 'Pouso Alegre'
    },
    {
        id: '4',
        nome: 'Rogério Dantes Almeida',
        cidade: 'Tocantins'
    },
    {
        id: '5',
        nome: 'Thalita Fonseca Borges',
        cidade: 'Rio de Janeiro'
    },
]

export default function Lists (){
    return(
    <SafeAreaView style={stylesLists.container}>
        <Text style={stylesLists.title}>Lista de Amigos</Text>
        <FlatList 
        data={friends}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>)
}

const renderItem = ({item}) => (
    <View style={stylesLists.itemView}>
        <ItemNome textoNome={item.nome} />
        <ItemCidade textoCidade={item.cidade} />
    </View>
);

const ItemNome = ({textoNome}) => (
    <Text style={stylesLists.nome}>{textoNome}</Text>
);

const ItemCidade = ({textoCidade}) => (
    <Text style={stylesLists.cidade}>{textoCidade}</Text>
);

const stylesLists = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#d2d2d2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    },
    itemView:{
        backgroundColor: '#00aadd',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    nome:{
        fontSize: 20
    },
    cidade:{
        fontSize: 15
    }
})

