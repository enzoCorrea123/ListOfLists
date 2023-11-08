import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import metadata from "../storage.metadata.json";
const createList = ({navigation})=>{
    const [name, setName] = useState("");

    const handleInput = async () => {
        const saveName = name || "";
        console.log("nossa")
        let list = await AsyncStorage.getItem(metadata.LIST.LISTNAME) || "";
        list = JSON.parse(list)
        list.push(saveName);
        console.log(list)
        setListOfLists(list);
        await AsyncStorage.setItem(metadata.LIST.LISTNAME, JSON.stringify(list));

        navigation.navigate("Lista")
    }

    return (
        <View>
            <Text>Adicionar uma nova lista</Text>
            <TextInput placeholder="Nome da lista" value={name} onChangeText={setName} style={styles.input}/>
            <Pressable onPress={()=>{handleInput()}} style={styles.button}>
                <Text style={styles.txt}>Confirmar</Text>
            </Pressable>
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
        borderRadius: 10,
    },
    button:{
        width: 150,
        padding: 5,
        backgroundColor: "#41B3FF",
        marginTop: 10,
        borderRadius: 10,
    },
    txt:{
        textAlign: "center"
    }
})
export default createList;