import React,{useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/Goalitem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [dailyGoals, setDailyGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = goal => {
    setDailyGoals([...dailyGoals, {key:Math.random().toString(), value: goal}]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setDailyGoals(dailyGoals => {
      return dailyGoals.filter((goal) => goal.key !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onAddGoal={addGoalHandler} visibility={isAddMode} cancel={()=>setIsAddMode(false)}/>
      <FlatList data={dailyGoals} renderItem={itemData => (
        <GoalItem title={itemData.item.value} id={itemData.item.key} onDelete={removeGoalHandler}/>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },  
});
