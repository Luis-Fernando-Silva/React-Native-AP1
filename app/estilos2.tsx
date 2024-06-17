import { StyleSheet, Platform } from 'react-native';

export const estilos2 = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 30

    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        gap:10,
        justifyContent: 'center'

    },
    img:{
        height: 40,
        width: 100,
        alignSelf: 'center'

    },
    iconPessoa: {
        tintColor: "#000000",
        height: 20,
        width: 20,
        alignSelf: 'center'

    },
    fezLogin: {
        color: '#000000',
        fontSize: 30,
        fontWeight: 'normal',
        textAlign: 'center',
        paddingVertical: 10

    },
    seuEmail: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center',
        paddingVertical: 10

    },
    confira: {
        color: 'dimgray',
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'left',
        paddingVertical: 10

    },
    iconCadeado: {
        tintColor: "#1a73e8",
        height: 20,
        width: 20,
        alignSelf: 'center',

    },
    boxCadeado: {
        backgroundColor:'#fff',
        color: '#000000',
        fontSize: 19,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 0,
        width: 150,
        top: 20,
        borderRadius: 7,
        borderColor: 'gray',
        borderWidth: 1,
        overflow: 'hidden'
        
    },
     textCadeado: {
        color: 'dimgray',
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'center',
        paddingVertical: 10
        
    },
     iconPerfil: {
        tintColor: "#1a73e8",
        height: 20,
        width: 20,
        alignSelf: 'center',

    },
     boxPerfil: {
        backgroundColor:'#fff',
        color: '#000000',
        fontSize: 19,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 0,
        height: 145,
        width: 150,
        top: -125,
        left: 200,
        borderRadius: 7,
        borderColor: 'gray',
        borderWidth: 1,
        overflow: 'hidden', 

    },
     textPerfil: {
        color: 'dimgray',
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'center',
        paddingVertical: 10

    },
     iconInformacao: {
        tintColor: "#1a73e8",
        height: 20,
        width: 20,
        alignSelf: 'center',

    },
     boxInformacao: {
        backgroundColor:'#fff',
        color: '#000000',
        fontSize: 19,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 0,
        width: 150,
        height: 145,
        top: -90,
        left: 0,
        borderRadius: 7,
        borderColor: 'gray',
        borderWidth: 1,
        overflow: 'hidden', 

    },
     textInformacao: {
        color: 'dimgray',
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'center',
        paddingVertical: 10

    },
     contaGoogle: {
        color: 'dimgray',
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'left',
        paddingVertical: 65,
        top: -110
     
    },
    contaGoogle2: {
        color: "#1a73e8"

    },
    agoraNao: {
        color: '#1a73e8',
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'left',
        paddingVertical: 10,
        top: -150
    }
});


