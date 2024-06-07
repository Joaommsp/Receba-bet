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
    gap: 36,
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
    fontSize: 12,
  },

  competitionImage: {
    width: 44,
    height: 44,
    marginBottom: 18,
  },

  teamImage: {
    width: 54,
    height: 54,
  },

  teamPrice: {
    fontSize: 8,
    color: "#DDDDDD",
  },

  teamName: {
    color: "#FFFFFF",
    fontSize: 10,
  },

  playGameBtn: {
    backgroundColor: "#B31312",
    paddingHorizontal: 20,
    paddingVertical: 5,
    paddingBottom: 8,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  playGameText: {
    color: "#FFFFFF",
  },
});

export default styles;
