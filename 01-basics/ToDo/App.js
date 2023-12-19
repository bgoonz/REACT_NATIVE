// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another piece of text</Text>
      </View>
      <Text>Hello World!!!!</Text>
      <Text style={{ margin: 100 }}>Part 2</Text>
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
  }
});
