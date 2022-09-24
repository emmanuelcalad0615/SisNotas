import { StyleSheet } from "react-native-web";
const styles= StyleSheet.create({
   container:{  
        
        width:'100%',        
        flexDirection:'column',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'flex-start',

   },
   container2:{
    
    width:'30%',        
    flexDirection:'row',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',

   },
   container3:{
    width:'10%',        
    flexDirection:'row',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'flex-start',

   }
   
})
const estilo2= StyleSheet.create({
    viewChild:{
        width:'10%',
        height:'50px',
        justifyContent:'center',
        alignItems:'center'
    }
})
export{styles,estilo2}