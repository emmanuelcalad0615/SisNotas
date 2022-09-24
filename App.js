
import { useRef, useState, useEffect } from 'react';
import { StatusBar } from 'react-native-web';
import { TextInput,TouchableOpacity, Text, View } from 'react-native';
import Banner from './components/banner';
import { styles, estilo2 } from './assets/styles/MyStyles';

export default function App() {
  const[id, setID]=useState('');
  const[nombre, setNombre]=useState('');
  const[asignatura, SetAsig]=useState('');
  const[nota1, setNota1]=useState('');
  const[nota2, setNota2]=useState('');
  const[nota3, setNota3]=useState('');
  const[definitiva, setDef]=useState('');
  const[obs, setObs]=useState('');
  const[definitivas, setDefs]=useState([]);

  let refID = useRef()
  const Guardar = () =>{
    if(definitiva==''){
      alert("Primero debes calcular tu definitiva")
    }
    else{
    setDefs(midefinitivas=>[...midefinitivas,{id:id, nombre:nombre, asignatura:asignatura, nota1:nota1, nota2:nota2, nota3:nota3, definitiva:definitiva, obs:obs}])
    setID('');
    setNombre('');
    SetAsig('');
    setNota1('');
    setNota2('');
    setNota3('');
    setDef('');
    setObs('')
    refID.current.focus();
    }
    
  }
  let Buscar = (idBuscar)=>{
    let idenc = definitivas.find(def => def.id == id );
    if(idenc != undefined){
      setNombre(idenc.nombre);
      SetAsig(idenc.asignatura);
      setNota1(idenc.nota1);
      setNota2(idenc.nota2);
      setNota3(idenc.nota3);
      setDef(idenc.definitiva);
      setObs(idenc.obs);
    }
    else{
      alert("Identificación no encontrada")
    }
  }


  
  


  let Calcular=(oper)=>{
  if(id=='' ||nombre=='' ||asignatura=='' ||nota1==''||nota2==''||nota3=='' ){
      setDef('')
      alert('Todos los campos son requeridos')
    }
  else{
  if(nota1>=0&&nota1<=5&&nota2>=0&&nota2<=5&&nota3>=0&&nota3<=5){
    
    let def= (parseFloat(nota1)*0.3)+(parseFloat(nota2)*0.35)+(parseFloat(nota3)*0.35);
    setDef(def);
    if(def>=3){
      setObs('Aprueba')

    }
    else if(def>=2 && def<=2.94 ){
      setObs('Habilita')

    }
    else if(def<2){
      setObs('Reprueba')
    }
    else{
      setObs('')
    }
   
    
  }
  else{
    alert('Las notas dígitadas deben estar entre 0 y 5')
    setNota1('')
    setNota2('')
    setNota3('')
  
    
  }
  
  }
  }

  return (
    <View style={styles.container}>

      <Banner></Banner>
      <StatusBar style="auto"></StatusBar>
      {/*Identificación */}
      <View style={styles.container2}>
        <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%', marginTop:20}]}>
          <Text>Identificación</Text>

        </View>
        <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%', marginTop:20}]}>
        <TextInput
        onChangeText={id=>setID(id)}
        style={{borderBottomWidth:2, borderBottomColor:'black', padding:5, textAlign:'center', marginBottom:20, marginLeft:90}} 
        ref={refID} 
        value={id}></TextInput>

        </View>

      </View>
      {/*Nombre */}
      <View style={styles.container2}>
      <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%', marginTop:20}]}>
        <Text>Nombres</Text>

      </View>
      <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%', marginTop:20}]}>
      <TextInput
        onChangeText={nombre=> setNombre(nombre)}
         style={{borderBottomWidth:2, borderBottomColor:'black', padding:5, textAlign:'center', marginBottom:20, marginLeft:90 }} value={nombre}></TextInput>


      </View>

      </View>
      {/*Asignatura */}
      <View style={styles.container2}>
      <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%', marginTop:20}]}>
        <Text>Asignatura</Text>

      </View>
      <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%', marginTop:20}]}>
      <TextInput
        onChangeText={asignatura=>SetAsig(asignatura)}
        
        style={{borderBottomWidth:2,   borderBottomColor:'black', padding:5, textAlign:'center', marginBottom:20, marginLeft:90}} value={asignatura}></TextInput>

      </View>


        

      </View>
      {/*Nota1 */}
      <View style={styles.container2}>
      <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%', marginTop:20}]}>
        <Text>Nota Momento 1 (30%)</Text>

      </View>
      <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%', marginTop:20}]}>
      <TextInput
        onChangeText={nota1=>setNota1(nota1)}
        style={{borderBottomWidth:2, borderBottomColor:'black', padding:5, textAlign:'center', marginBottom:20, marginLeft:90}} value={nota1}></TextInput>

      </View>
      
        

      </View>
      {/*Nota2 */}
      <View style={styles.container2}>
      <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%', marginTop:20}]}>
        <Text>Nota Momento 2 (35%)</Text>

      </View>
      <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%', marginTop:20}]}>
      <TextInput
        onChangeText={nota2=>setNota2(nota2)}
        style={{borderBottomWidth:2, borderBottomColor:'black', padding:5, textAlign:'center', marginBottom:20, marginLeft:90}} value={nota2}></TextInput>

      </View>
      
        

      </View>
      {/*Nota3 */}
      <View style={styles.container2}>
      <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%', marginTop:20}]}>
        <Text>Nota Momento 3 (35%)</Text>

      </View>
      <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%', marginTop:20}]}>
      <TextInput
        onChangeText={nota3=>setNota3(nota3)}
        style={{borderBottomWidth:2, borderBottomColor:'black', padding:5, textAlign:'center', marginBottom:20, marginLeft:90}} value={nota3}></TextInput>

      </View>
      
        

      </View>
       {/*Definitiva */}
      <View style={[styles.container3,{ marginTop:40}]}>
      <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%'}]}>
        <Text>Definitiva</Text>
      </View>
      <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%'}]}>
      <Text 
       
       style={{borderBottomWidth:2, borderBottomColor:'black', padding:5,  textAlign:'center', marginBottom:10, marginLeft:90}} value>{definitiva}</Text>

      </View>

      </View>
       {/*Observación*/}
      <View style={[styles.container3,{ marginTop:20}]}>
      <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%'}]}>
        <Text>Observación</Text>
      </View>
      <View style={[styles.container,{flex:1, backgroundColor:'white', width:'50%'}]}>
      <Text
        
        style={{borderBottomWidth:2,textAlign:'center', marginBottom:20, marginLeft:90, borderBottomColor:'black', padding:5, }}>{obs}</Text>

      </View>
      



      </View>
      
      <View style={[styles.container2,{flex:5, backgroundColor:'white', width:'50%', margin:20, color:'white'}]}>
        <TouchableOpacity onPress={()=>Calcular(nota1, nota2, nota3)}>

          <Text style={{backgroundColor:"green", paddingHorizontal:30, paddingVertical:12, fontWeight:"bold", margin:20, color:'white'}}>Calcular</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={Guardar}
        >
        <Text style={{backgroundColor:"green", paddingHorizontal:30, paddingVertical:12, fontWeight:"bold", margin:20, color:'white'}}>Guardar</Text>

        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{
          setID('');
          setNombre('');
          SetAsig('');
          setNota1('');
          setNota2('');
          setNota3('');
          setDef('');
          setObs('');
        }}
        >
        
          <Text style={{backgroundColor:"green", paddingHorizontal:30, paddingVertical:12, fontWeight:"bold" , margin:20, color:'white'}}>Limpiar</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={Buscar}
        
        >
          <Text style={{  backgroundColor:"green", paddingHorizontal:30, paddingVertical:12, fontWeight:"bold" , margin:20, color:'white'}}>Buscar</Text>
        </TouchableOpacity>
        <Text>{'\n'}</Text>
        
      </View>
      
      
      
      



      

    </View>
  );
}

