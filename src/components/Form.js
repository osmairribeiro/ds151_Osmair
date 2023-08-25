import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ResultImc from "./Result";

export default function Form(){
  
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [messageImc, setMessageImc] = useState("preencha os dados");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    
    
    function imcCalculator(){
        const numHeight = Number(height);
        const numWeight = Number(weight);
        return setImc ((numWeight/(numHeight*numHeight)).toFixed(2));
    }
    
    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setMessageImc("seu IMC resultou em: ")
            setTextButton ("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha os dados")
    
    }
    
  
    return (
        <View style={styles.container}>
            <Text style={styles.label}> Altura </Text>
            <TextInput 
                style={styles.input}
                onChangeText={(value) => setHeight(value)}
                value={height}
                placeholder="Ex. 1.70"
                keyboardType="decimal-pad"/>
            <Text style={styles.label}> Peso </Text>
            <TextInput 
                style={styles.input}
                onChangeText={(value) => setWeight(value)}
                value={weight}
                placeholder="Ex. 70.5"
                keyboardType="decimal-pad"/>

        
            
            <Button 
                style={styles.button}
                onPress={validationImc}
                title={textButton}/>
        

            <ResultImc 
                messageResultImc={messageImc}
                resultImc={imc}/>
        
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        marginTop: 5,
    },
    
    button: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        padding: 10,
        fontSize: 50,
        marginTop: 39,
    },

});
