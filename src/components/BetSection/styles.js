import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  betSectionContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    gap: 32,
  },

  teamInfos: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  betItem: {
    flexDirection: "row",
    gap: 56,
  },

  gameInfos: {
    width: 128,
    alignItems: "center",
    justifyContent: "center",
  },

  gameCompetition: {
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 16,
  },

  competitionImage: {
    width: 54,
    height: 54,
  },

  teamImage: {
    width: 64,
    height: 64,
  },

  teamPrice: {
    fontSize: 11,
    color: "#DDDDDD",
  },

  teamName: {
    color: "#FFFFFF",
  },
});

export default styles;
