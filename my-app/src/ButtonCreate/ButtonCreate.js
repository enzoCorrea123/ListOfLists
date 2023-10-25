import { View, Text, Pressable,StyleSheet, Button } from "react-native"

const buttonCreate = ({ navigation })=>{
    return(
        <View>
            <Pressable onPress={()=>{navigation.navigate("CriarLista")}} style={styles.button}>
                <Text>Criar lista</Text>
            </Pressable>
        </View>
    )
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
})
export default buttonCreate;