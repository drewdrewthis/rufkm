import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Chat from "./components/ChatWrapper";

export default function App() {
  return <Chat />;
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
