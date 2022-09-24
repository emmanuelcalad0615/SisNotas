import { StyleSheet, Text, Image, View } from "react-native";
import { styles, estilo2 } from "../assets/styles/MyStyles";
export default function Banner(props){
    return(
    <View style={[estilo2.viewChild, {flex:5, backgroundColor:'green', width:'60%', height:'30%', padding:10, justifyContent: 'center', alignItems:'center'}]}>
        <Text style={{color:'white', fontWeight:"bold"}}>SISTEMA DE NOTAS</Text>
    </View>)
1
}