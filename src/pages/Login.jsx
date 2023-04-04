import { useNavigation } from "@react-navigation/native";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

export function Login(){
const navigation = useNavigation()
    return(
    <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'#141526',flex:1,}}>
        <StatusBar style='light'/>
    <View style={{alignItems:'center',flex:0.5,justifyContent:"flex-start",}}>
        <Image style={styles.image} source={require('../../assets/Logo.png')}/> 
        <Text style={styles.Text1}>E-mail</Text>
      <TextInput style={styles.TextInput} onSubmitEditing={event => { getValueFor(event.nativeEvent.text);}} placeholder="Digite seu e-mail"/>
    </View>

    <View style={styles.Button}>
        <TouchableOpacity style={{ width:200, height:50, borderRadius:25, backgroundColor:'green', alignItems:"center", justifyContent:"center",marginBottom:20, }}  onPress={()=>(navigation.navigate('recuperar senha'))}><Text>Cadastrar</Text></TouchableOpacity>
     <Text style={styles.Text2}>Ou</Text>
         <TouchableOpacity style={styles.TouchableOpacity}  onPress={()=>(navigation.navigate('recuperar senha'))}><Text>Login</Text></TouchableOpacity>   
    </View>
    </View>
    );
}

const styles=StyleSheet.create({
image:{
    width:600,
    height:100,
    justifyContent:"flex-start",
    marginTop:20,
},
Text1:{
    color:'#fff',
},
TextInput:{
    color:'#fff',
    backgroundColor:'#fff',
    width: 300,
    padding: 10,
    borderRadius:10,
},

TouchableOpacity:{
    width:200,
    height:50,
    borderRadius:25,
    backgroundColor:'green',
    alignItems:"center",
    justifyContent:"center", 
    marginTop:20,
    
},

Button:{
    flex:0.5,
    width:'100%',
    alignItems:"center",
    justifyContent:"center", 
    justifyContent:"flex-end",
    marginBottom:30,
},
Text2:{
    color:'#fff',
}
});