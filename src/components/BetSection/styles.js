import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  betSectionContainer: {
    width: "100%",
    alignItems: "center",
    gap: 26,
    padding: 20,
    backgroundColor: "#0C0C0C",
    paddingTop: 36,
    paddingBottom: 36,
    borderRadius: 20,
  },

  fakeScrollBar: {
    width: 86,
    height: 3,
    backgroundColor: "#FFFFFF90",
    position: "absolute",
    top: 10,
    borderRadius: 100,
  },

  teamInfos: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  betItem: {
    flexDirection: "row",
    gap: 26,
    borderBottomWidth: 1,
    borderColor: "#FFFFFF20",
    paddingBottom: 20,
    paddingHorizontal: 20,
  },

  liveIndicator: {
    position: "absolute",
    top: -5,
    right: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },

  liveIndicatorText: {
    color: "#16FF00",
    fontSize: 10,
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
