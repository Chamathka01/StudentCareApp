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
            <View style={styles.formcontainer}>
            <TextInput label="Username" mode="outlined" onChangeText={setName} />
            <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            onChangeText={setPassword}
          />
            <View style={styles.buttoncontainer}>
            <Button mode="contained" onPress={handlebutton}>
              Login
            </Button>
            </View>
            </Scrollview> 
        </PaperProvider>
    );
}