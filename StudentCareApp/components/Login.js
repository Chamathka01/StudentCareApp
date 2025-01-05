import { View } from 'react-native';
import { PaperProvider, Text, Divider, TextInput, Button } from 'react-native-paper';
export default function Login(){
    return(
        <PaperProvider>
            <View>
            <Text variant = "headlineLarge">STUDENT LOGIN</Text>
            </View>
            <View>
            <TextInput label="UserName" mode='outlined' value={UserName} onChangeText={setUserName} />
            </View>
            <View>
            <TextInput label="Password" mode='outlined' value={Password} onChangeText={setPassword} />
            </View>
            <View>
            <Button mode='contained' onPress={()=>navigation.navigate('')}>
            Login</Button>
            </View>
            
        </PaperProvider>
    );
}