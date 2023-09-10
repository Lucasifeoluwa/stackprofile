import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import WebView from "react-native-webview";
import { Ionicons } from "@expo/vector-icons";
import AppScreen from "./components/AppScreen/AppScreen";

export default function App() {
  const [githubProfileVisible, setGithubProfileVisible] = useState(false);

  const openGitHubProfile = () => {
    setGithubProfileVisible(true);
  };

  return (
    <>
      {!githubProfileVisible ? (
        <AppScreen>
          <View style={styles.container}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 30 }}>
                Hi, <Text style={{ fontWeight: "bold" }}>There</Text>
              </Text>
              <View style={styles.gitButton}>
                <TouchableOpacity onPress={openGitHubProfile}>
                  <Text style={{ fontWeight: "bold" }}>OPEN GITHUB</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>
                Welcome to my slack profile page
              </Text>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("./images/slack.png")}
                style={styles.slackImg}
              />
            </View>

            <View style={styles.profileView}>
              <Image
                style={styles.profileImg}
                source={require("./images/gojo.jpg")}
              />
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Lucas Ifeoluwa
              </Text>
            </View>
          </View>
        </AppScreen>
      ) : (
        <>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setGithubProfileVisible(false)}
          >
            <Ionicons name="close" size={20} color={"black"} />
          </TouchableOpacity>

          <WebView
            source={{ uri: "https://github.com/lucasifeoluwa" }}
            style={{ flex: 1, marginTop: 10 }}
          />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    borderRadius: 30,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 20,
    marginTop: 50,
  },

  closeButton: {
    marginTop: 40,
    marginLeft: 12,
    width: 30,
    height: 30,
    borderRadius: 30,
    borderColor: "black",
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },

  gitButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D3D3D3",
    width: 100,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
  },

  profileView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
    backgroundColor: "#f2f2f2",
    padding: 20,
    borderRadius: 10,
    borderColor: "black",
    elevation: 1,
  },

  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },

  slackImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 40,
  },
});
