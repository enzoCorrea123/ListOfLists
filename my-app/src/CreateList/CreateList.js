import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native"

const createList = ()=>{
    const [name, setName] = useState("");
    return (
        <View>
            <Text>Adicionar uma nova lista</Text>
            <TextInput placeholder="Nome da lista" value={name} onChangeText={setName} style={styles.input}/>
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        width: 300,
        height: 30,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        fontSize: 15,
    }
})
export default createList;