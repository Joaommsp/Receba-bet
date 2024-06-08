import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },

  myGamesContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0C0C0C",
    position: "relative",
    overflow: "scroll",
    paddingTop: 56,
    paddingBottom: 84,
    paddingHorizontal: 24,
  },

  betsContainer: {
    marginBottom: 24,
  },

  teamInfos: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  betItem: {
    flexDirection: "row",
    gap: 36,
    padding: 24,
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
    fontFamily: "",
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

  scoreContainer: {
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    gap: 56,
    marginTop: 10,
    marginBottom: 10,
  },

  scoreInput: {
    width: 48,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 24,
  },

  finishBetBtn: {
    backgroundColor: "#FF0075",
    paddingHorizontal: 20,
    paddingVertical: 5,
    paddingBottom: 8,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  finishText: {
    color: "#FFFFFF",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
    padding: 20,
    borderRadius: 20,
  },

  popupConfirmBet: {
    width: 220,
    padding: 20,
    backgroundColor: "#0C0C0C",
    borderWidth: 2,
    borderColor: "#FE0000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  betConfirmText: {
    textAlign: "center",
    marginBottom: 18,
    color: "#FFFFFF",
  },

  betGameStats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 56,
  },

  teamStats: {
    alignItems: "center",
  },

  betTeamImage: {
    width: 34,
    height: 34,
    marginBottom: 8,
  },

  betTeamScore: {
    color: "#E1E5EA",
    fontSize: 20,
  },

  actionButtonsContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 36,
  },

  resultBetsContainer: {
    alignItems: "center",
    marginBottom: 36,
  },

  performanceText: {
    marginBottom: 24,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    color: "#FFFFFF"
  },
});

export default styles;
