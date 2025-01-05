import { Image, ScrollView, StyleSheet, View } from "react-native";
import {Button, Divider, PaperProvider, Text, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Profile({ route }) {
    const { studentdata } = route.params;
    const navigate = useNavigation();
    return(
        <PaperProvider>
        <ScrollView>
            <View style={styles.header}>
            <Text style={styles.headerText}>UoV Student Care</Text>
        </View>
        <View style={styles.imagecontain}>
          <Image
            source={require("../assets/uovlogo.png")}
            style={styles.image}
          />
        </View>
        </ScrollView>   
        </PaperProvider>
    );
}