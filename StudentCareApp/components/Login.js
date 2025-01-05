import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
export default function Login(){
    return(
        <PaperProvider>
            <View>
            <Text variant = "headlineLarge">STUDENT LOGIN</Text>
            </View>
            
        </PaperProvider>
    );
}