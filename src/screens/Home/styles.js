import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0C0C0C",
    padding: 24,
  },

  header: {
    padding: 24,
  },

  userMenu: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    backgroundColor: "#EEEEEE",

    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 10,
  },

  userName: {
    color: "#FFFFFF",
  },

  userImage: {
    width: 24,
    height: 24,
  },
});

export default styles;
