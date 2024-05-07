import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    justifyContent: "flex-start",
  },

  bannerContainer: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },

  bannerImage: {
    width: "100%",
    height: "100%",
  },

  logo: {
    width: 200,
    height: 60,
    position: "absolute",
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
    position: "absolute",
    bottom: 0,
    left: 0,
  },

  formContainer: {
    width: "100%",
    height: "80%",
    gap: 18,
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#FFFFFF",
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
    marginTop: 0,
    fontSize: 10,
  },
});

export default styles;
