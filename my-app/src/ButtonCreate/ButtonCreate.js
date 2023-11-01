import { View, Text, Pressable,StyleSheet, Button } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import metadata from "../storage.metadata.json";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
const buttonCreate = ({ route, navigation }) => {
    const nameList = route.params;
    const [listOfLists, setListOfLists] = useState([]);

    const focus = useIsFocused();

    useEffect(() => {
        getListName();
    }, [focus]);

    useEffect(()=>{
        setListName()
    },[listOfLists])

    const getListName = async () => {
        const listName = await AsyncStorage.getItem(metadata.LIST.LISTNAME);
        if (listName) {
            setListOfLists(JSON.parse(listName));
        }
    }
    const setListName = async () => {
        const list = listOfLists || "";
        await AsyncStorage.setItem(metadata.LIST.LISTNAME, JSON.stringify(list));
    }
    
    const printList = useMemo(() => {
        if (listOfLists && listOfLists.length > 0) {
            return listOfLists.map((list, index) => (
                <View key={index} style={styles.components}>
                    <Text>{list}</Text>
                    <Text>15/08/2005 19:00</Text>
                </View>
            ));
        }
    },[listOfLists]);

    return (
        <View>
            <Pressable onPress={() => { navigation.navigate("CriarLista") }} style={styles.button}>
                <Text>Criar lista</Text>
            </Pressable>
            {printList}
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 50,
        margin: 10,
        backgroundColor: "#41B3FF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    components:{
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 300,
        padding: 10,
        borderRadius: 10,
        
    }
})
export default buttonCreate;