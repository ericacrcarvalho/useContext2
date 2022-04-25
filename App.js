import React, { useState, createContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Child from './features/Child';

export const MyContext = createContext();
 
const App = () => {

  const text = "here";
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>useContext</Text>
      <MyContext.Provider value={{text, count, setCount}}>
        <Child/>
      </MyContext.Provider>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    margin: 6,
    fontWeight: 'bold'
  }
});
