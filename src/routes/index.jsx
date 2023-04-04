import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../pages/Login'
import { Recusenha } from '../pages/Recusenha'

 const {Navigator, Screen} = createNativeStackNavigator();
 export function Routes(){
    return(
        <NavigationContainer>
            <Navigator>
<Screen name='Login' component={Login} options={{headerShown: false,}}/>
<Screen name='recuperar senha' component={Recusenha} options={{headerShown: false,}}/>
            </Navigator>
        </NavigationContainer>
    );
 }