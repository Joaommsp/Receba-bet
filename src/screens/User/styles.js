import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },

  homeContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    paddingVertical: 24,
    paddingBottom: 104,
  },

  circleEffect: {
    width: "100%",
    height: 200,
    backgroundColor: "#0C0C0C",
    position: "absolute",
    top: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },

  header: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
  },

  notificationsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
  },

  notificationButton: {
    backgroundColor: "#000000",
    padding: 8,
    borderRadius: 100,
  },

  notificationIcon: {
    width: 156,
    height: 166,
  },

  mainContentContainer: {
    alignItems: "center",
    paddingHorizontal: 10,
  },

  userProfilePic: {
    width: 136,
    height: 136,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#FF0000",
    marginBottom: 40,
  },

  userInfosContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    gap: 18,
  },

  userInfo: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 28,
    backgroundColor: "#0C0C0C",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
  },

  userInfoText: {
    color: "#FFFFFF",
    fontSize: 18,
  },

  editBtn: {
    position: "absolute",
    right: 20,
  },

  recebaBetLogo: {
    width: 200,
    height: 58,
    marginTop: 20,
    marginBottom: 20,
  },

  footer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 24,
  },

  company: {
    fontSize: 9,
    color: "#FFFFFF",
  },

  editPopUp: {
    position: "absolute",
    width: 200,
    height: 200,
    backgroundColor: "red",
    zIndex: 1000,
    top: "50%",
    right: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },

  inputNewName: {
    width: "100%",
    color: "#FFFFFF",
    paddingRight: 56,
  },

  actionButtons: {
    position: "absolute",
    right: 10,
    flexDirection: "row",
    gap: 5,
  },

  errorMessage: {
    color: "#FFFFFF",
  },
});

export default styles;
