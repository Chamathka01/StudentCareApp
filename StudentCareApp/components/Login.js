import { useState } from "react";
import { View } from 'react-native';
import { PaperProvider, Text, Divider, TextInput, Button } from 'react-native-paper';
export default function Login(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigation();

    const handlebutton = () => {
        const student = students.find(
          (student) => student.username === name && student.password === password
        );
    
        if (student) {
          navigate.navigate("profile", { studentdata: student });
        } else {
          alert("Invalid username or password.");
        }
      };
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