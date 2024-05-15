import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  homeContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0C0C0C",
    padding: 10,
    paddingVertical: 24,
  },

  header: {
    paddingVertical: 24,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  userMenu: {
    width: 136,
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    backgroundColor: "#171717",

    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 14,

    borderRadius: 50,
  },

  userName: {
    color: "#FFFFFF",
  },

  userImage: {
    width: 24,
    height: 24,
  },

  notificationsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 18
  },

  notificationButton: {
    backgroundColor: "#171717",
    padding: 8,
    borderRadius: 100
  },

  notificationIcon: {
    width: 156,
    height: 166
  }
});

export default styles;
