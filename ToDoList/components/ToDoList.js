import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initialItems }) => {
    ToDoList.defaultProps = { initialItems: [], };
    const [toDos, setItems] = useState(initialItems.map((item) => ({ id: uuidv4(), title: item})));

    const addToDo = (newTitle) => {
        const newItem = { id: uuidv4(), title: newTitle};
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const removeToDo = (id) => {
        const newList = toDos.filter((item) => item.id !== id);
        setItems(newList);
    };

    return (
        <View style={styles.todoListContainer}>
            {toDos.map((item) => (
                <View key={item.id} style={styles.todoItem}>
                    <Text>{item.title}</Text>
                    <Button title="Remove" onPress={()=>removeToDo(item.id)} />
                </View>
            ))}
            <AddTask onAddTask={addToDo}></AddTask>
        </View>
    );
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;