import { useNavigation } from "@react-navigation/native";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export function Recusenha(){
const navigation = useNavigation()
    return(
<View style={{alignItems:'center', backgroundColor:'red',flex:1,justifyContent:'center',}}>
    <TouchableOpacity style={styles.TouchableOpacity}onPress={()=>(navigation.navigate('Login'))}><Text>Sair</Text></TouchableOpacity>
</View>
);
}
const styles=StyleSheet.create({
    image:{
    width:200,
    height:200,
    },
    
TouchableOpacity:{
    width:200,
    height:50,
    borderRadius:25,
    backgroundColor:'green',
    alignItems:"center",
    justifyContent:"center", 
    },
    });