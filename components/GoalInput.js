import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

export default GoalInput = props =>{
    const [enterGoal, setEnterGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnterGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enterGoal);
        setEnterGoal('');
    }

    const cancelAddGoal = () => {
        props.cancel();
        setEnterGoal('');
    }

    return(
        <Modal visible={props.visibility} animationType="slide" >
            <View style={styles.formFrame}>
                <TextInput 
                placeholder='Your Goal' 
                style={styles.inputFrame}
                onChangeText={goalInputHandler}
                value={enterGoal} />
                <View style={styles.buttonContainer}>
                    <Button title='ADD' onPress={addGoalHandler}/>
                    <Button title='CANCEL' color='red' onPress={cancelAddGoal}/>
                </View>
                
            </View>
        </Modal>
    )
} 

const styles = StyleSheet.create({
    formFrame: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputFrame: {
        width: '80%',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom:10,
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        width:'60%',
    }
})