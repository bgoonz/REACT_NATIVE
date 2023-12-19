// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Another piece of text</Text>
      </View>
      <Text>Hello World!!!!</Text>
      <Text style={{ margin: 100, borderWidth: 1, borderColor: "red", padding: 16 }}>Part 2</Text>
      <Button title="Press me!!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text:{
    margin:16,
    borderWidth:2,
    borderColor:'blue',
    padding:16
  }
});
