import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { MyContext } from '../../App';

const MyButton = () => {
    
    const { text, count, setCount } = useContext(MyContext);

    return (
        <View>
            <Text>Contador: {count}</Text>
            <Button
                mode="contained"
                onPress={() => {
                    setCount(count+1);
                }}
            >Press {text}</Button>
        </View>
    )
};
export default MyButton;