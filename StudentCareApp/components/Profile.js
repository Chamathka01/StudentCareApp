export default function Profile() {
    return(
        <PaperProvider>
        <ScrollView>
            <View style={styles.header}>
            <Text style={styles.headerText}>UoV Student Care</Text>
        </View>
        </ScrollView>   
        </PaperProvider>
    );
}