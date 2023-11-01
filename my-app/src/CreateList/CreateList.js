import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import metadata from "../storage.metadata.json";
const createList = ({navigation})=>{
    const [name, setName] = useState("");
    const [listOfLists, setListOfLists] = useState([]);
    useEffect(() => { saveUserName() }, [name]);

    const saveUserName = async () => {
        const saveName = [name] || [];
        await AsyncStorage.setItem(metadata.LIST.LISTNAME, JSON.stringify(saveName));
        console.log('foi')
    }

    // const handleInput = ()=>{
    //     console.log('foi')
    //     const list = [...listOfLists];
    //     list.push(name);
    //     setListOfLists(list);
    //     navigation.navigate("Lista")
    //     console.log(list)
    // }

    return (
        <View>
            <Text>Adicionar uma nova lista</Text>
            <TextInput placeholder="Nome da lista" value={name} onChangeText={setName} style={styles.input}/>
            <Pressable onPress={()=>{navigation.navigate("Lista", {nameList: name})}}>
                <Text>Confirmar</Text>
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
    }
})
export default createList;