import { StyleSheet, Platform } from 'react-native';

export const estilos1 = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#000000',
        paddingTop: 60,
        paddingHorizontal: 30
    },
    img:{
        tintColor: "#fff",
        height: 40,
        width: 100,
        alignSelf: 'center'
    },
    fazerLogin: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'normal',
        textAlign: 'center',
        paddingVertical: 10
    },
    contaGoogle: {
        color: 'gray',
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center',
        paddingVertical: 10
    },
    saibaMais: {
        color: '#89B4F8',
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center'
    },
    input: {
        backgroundColor:'#000000',
        color: '#fff',
        fontSize: 15,
        padding: Platform.OS === 'ios' ? 15 : 10,
        paddingVertical: 25,
        marginTop: 40,
        borderRadius: 4,
        borderColor:'gray',
        width:355,
        borderWidth: 1
        
    },
   esqueceuEmail: {
        color: '#89B4F8',
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'left',
        paddingVertical: 10
    },
    criarConta: {
        color: '#89B4F8',
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'left',
        paddingVertical: 80
    },
    avancar:{
        backgroundColor:'#89B4F8',
        color: '#000000',
        fontSize: 19,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 0,
        width: 100,
        left: 250,
        top: 130,
        borderRadius: 7,
        overflow: 'hidden'     
     },
    
});