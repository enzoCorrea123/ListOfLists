import { View, Text, Pressable,StyleSheet, Button } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import metadata from "../storage.metadata.json";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
const list = ({ route, navigation }) => {
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
        console.log("get")
        if(focus){
            let  listName = await AsyncStorage.getItem(metadata.LIST.LISTNAME);
            if (listName) {
                listName = JSON.parse(listName);
            }
            if (!listName) {
                listName = new Array();
              }
            const list = [...listOfLists];
    
            if(list.length == 0){
                list.push(...listName);
                setListOfLists(list);
            }else{
                console.log("else")
                list.push(listName[listName.length-1]);
                setListOfLists(list);
            }

        }
             
    }
    const setListName = async () => {
        const list = listOfLists || "";
        await AsyncStorage.setItem(metadata.LIST.LISTNAME, JSON.stringify(list));
    }
    alert(listOfLists)
    console.log(listOfLists)
    const printList = useMemo(() => {
        if (listOfLists && listOfLists.length > 0) {
            return listOfLists.map((list, index) => (
                <View key={index} style={styles.components}>
                    <Text style={styles.txt}>{list}</Text>
                    <Text style={styles.txt}>{(new Date().toLocaleString())}</Text>
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
        padding: 30,
        borderRadius: 10,
        
    },
    txt:{
        color: "black"
    }
})
export default list;