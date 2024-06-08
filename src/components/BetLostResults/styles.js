import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  betSectionContainer: {
    width: "100%",
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
    alignItems: "center",
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

  teamName: {
    color: "#FFFFFF",
    fontSize: 10,
  },

  gameResultsContainer: {
    alignItems: "center",
    width: 102,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 8,
  },

  resultText: {
    fontSize: 16,
    color: "#FFFFFF",
  },

  resultScore: {
    flexDirection: "row",
    gap: 36,
  },

  score: {
    color: "#747474",
    fontSize: 24,
    backgroundColor: "#171717",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  gameGuessContainer: {
    alignItems: "center",
    width: 102,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  guessText: {
    fontSize: 16,
    color: "#FFFFFF",
  },

  guessScore: {
    flexDirection: "row",
    gap: 26,
    borderWidth: 2,
    borderColor: "#FF0000",
    borderRadius: 100,
  },

  guess: {
    color: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
