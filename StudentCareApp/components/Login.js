import { useState } from "react";
import { View } from 'react-native';
import { PaperProvider, Text, Divider, TextInput, Button } from 'react-native-paper';
import { students } from "../data/StudentsDb";
import { useNavigation } from "@react-navigation/native";
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
            <Scrollview>
            <View style={styles.header}>
             <Text style={styles.headerText}>UoV Student Care</Text>
             </View>
            <View style={styles.header}>
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
            </Scrollview> 
        </PaperProvider>
    );
}