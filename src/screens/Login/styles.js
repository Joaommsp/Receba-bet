import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    justifyContent: "flex-start",

    paddingTop: 36,
    backgroundColor: "#0F1821",
  },

  bannerContainer: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },

  bannerImage: {
    width: "50%",
    height: "100%",
  },

  loginGreeting: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 19,
    marginBottom: 14,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
  },

  formContainer: {
    width: "100%",
    height: "50%",
    gap: 18,
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 50,
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#00000030",

    paddingLeft: 10,
  },

  formInput: {
    width: "100%",
    borderBottomWidth: 1,
    padding: 8,
    color: "#0C0C0C",
    borderBottomColor: "#00000000",
  },

  formButtonSubmit: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FE0000",

    padding: 16,

    borderRadius: 25,
  },

  formButtonText: {
    color: "#FFFFFF",
    fontFamily: "Inter_400Regular",
  },

  createAccountContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  createAccountLink: {
    color: "#0C0C0C",
  },

  linkText: {
    color: "#D71313",
  },

  company: {
    marginTop: 5,
    fontSize: 10,
  },
});

export default styles;
