import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0F1821",
  },

  bgImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  logoContainer: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 18,
  },

  sloganContainer: {
    width: "100%",
    height: "50%",
    padding: 18,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 50,
    alignItems: "center",
  },

  title: {
    color: "#FFFFFF",
    fontFamily: "Inter_500Medium",
    fontSize: 20,
  },

  titleContrast: {
    color: "#FB0203",
  },

  startButtonContainer: {
    width: "100%",
    paddingRight: 24,
    paddingLeft: 24,
  },

  startButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FE0000",

    padding: 14,

    borderRadius: 25,
  },

  sponsorshipContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    marginBottom: 24,
    position: "absolute",
    bottom: 36,
  },

  sponsorshiplogo_nike: {
    width: 50,
    height: 30,
  },

  sponsorshiplogo_coca: {
    width: 76,
    height: 25,
  },

  sponsorshiplogo_champions: {
    width: 40,
    height: 40,
  },

  sponsorshiplogo_johnsons: {
    width: 76,
    height: 27,
  },

  observationContainer: {
    alignItems: "center",
    marginBottom: 24,
  },

  observation: {
    textAlign: "center",
    paddingLeft: 28,
    paddingRight: 28,
    marginTop: 10,
    marginBottom: 10
  },

  observationContrast: {
    color: "#FB0203",
  },

  startButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Inter_400Regular",
  },

  company: {
    marginTop: 0,
    fontSize: 10,
    position: "absolute",
    bottom: 24,
  },
});

export default styles;
