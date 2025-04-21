import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function App() {
  const moods = ["Happy", "Sad", "Excited", "Angry"];

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
      <ScrollView style={styles.chatContainer}>
        <View style={styles.messageContainer}>
          <View style={[styles.bubble, styles.receiver]}>
            <Text style={styles.receiverText}> Hello kaise ho?</Text>
          </View>
          <View style={styles.messageRow}>
            <View style={[styles.bubble, styles.sender]}>
              <Text style={styles.senderText}>DearDost,...</Text>
            </View>
            <View style={styles.avatar} />
          </View>
        </View>
      </ScrollView>

      <View style={styles.moodSection}>
        <Text style={styles.chooseMood}>Choose moods to start your conversations</Text>
        <View style={styles.moodButtons}>
          {moods.map((mood, index) => (
            <TouchableOpacity key={index} style={styles.moodButton}>
              <Text style={styles.moodText}>{mood}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf3fc",
    padding: 16,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginVertical: 20,
    resizeMode: "contain",
  },
  chatContainer: {
    flex: 1,
    marginBottom: 20,
  },
  messageContainer: {
    marginTop: 20,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "flex-end",
  },
  bubble: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 18,
    maxWidth: "75%",
  },
  receiver: {
    backgroundColor: "#dcd3f7",
    alignSelf: "flex-start",
  },
  sender: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    alignSelf: "flex-end",
  },
  receiverText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  senderText: {
    fontSize: 16,
    color: "#333",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#ccc",
    marginLeft: 8,
  },
  moodSection: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
  },
  chooseMood: {
    fontSize: 16,
    color: "#666",
    marginBottom: 400,
  },
  moodButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  moodButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  moodText: {
    fontSize: 14,
    color: "#333",
  },
});


/*
 
    <View className="flex-1 items-center justify-center bg-primary">
    <Text className="bg-red text-white text-2xl font-bold">It’s Working Adi! 🎉</Text>
  </View>
    */

    //Tailwijnd and NativewIND NOT WORKING

