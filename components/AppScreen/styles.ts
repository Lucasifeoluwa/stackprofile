import { StyleSheet, ViewStyle } from "react-native";

type Screen = {
  container: ViewStyle;
};

export const styles = StyleSheet.create<Screen>({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
});
