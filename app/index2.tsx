import { View, Image, Text, TouchableOpacity} from "react-native";
import { estilos2 } from "./estilos2";
import logo from '../src/assets/images/logo-colorida.png'
import iconPessoa from '../src/assets/images/icon-pessoa.png'
import iconCadeado from '../src/assets/images/icon-cadeado.png'
import iconPerfil from '../src/assets/images/icon-perfil.png'
import iconInformacao from '../src/assets/images/icon-informacao.png'



export default function Index() {

  return (
    <View
      style={estilos2.background}
    >
      <Image style={estilos2.img} source={logo} />

      <Text style={estilos2.fezLogin}>
        Você fez login como
      </Text>

      <View style={estilos2.container}>
        <Image style={estilos2.iconPessoa} source={iconPessoa}/>
        <Text style={estilos2.seuEmail}>
          seuemail@gmail.com
        </Text>
      </View>

      <Text style={estilos2.confira}>
        Confira algumas sugestões para aproveitar ao máximo sua Conta do Google
      </Text>

      <View>
        <View style={estilos2.boxCadeado}>
        <TouchableOpacity activeOpacity={0.65}>
          <Image style={estilos2.iconCadeado} source={iconCadeado}/>
          <Text style={estilos2.textCadeado}>
            Adicione/confirme e-mail ou tel. de recuperação
          </Text>
          </TouchableOpacity>
        </View>

        <View style={estilos2.boxPerfil}>
        <TouchableOpacity activeOpacity={0.65}>
          <Image style={estilos2.iconPerfil} source={iconPerfil}/>
          <Text style={estilos2.textPerfil}>
            Adicione uma foto de perfil
          </Text>
        </TouchableOpacity>
        </View>

        <View style={estilos2.boxInformacao}>
        <TouchableOpacity activeOpacity={0.65}>
          <Image style={estilos2.iconInformacao} source={iconInformacao}/>
          <Text style={estilos2.textInformacao}>
            Inscreva-se para receber dicas e atualizações
          </Text>
        </TouchableOpacity>
        </View> 
      
      </View>

      <Text style={estilos2.contaGoogle}>
        Você pode gerenciar essas informações quando quiser na 
        <Text style={estilos2.contaGoogle2}> Conta do Google.</Text> 
      </Text>
    
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={estilos2.agoraNao}>
          Agora não
        </Text>
      </TouchableOpacity>

    </View>
  );

  
}
