import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },

  homeContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    padding: 10,
    paddingVertical: 24,
    paddingBottom: 104,
  },

  header: {
    paddingVertical: 24,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  userMenu: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    backgroundColor: "#0C0C0C",

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
    gap: 18,
  },

  notificationButton: {
    backgroundColor: "#0C0C0C",
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

  recebaBetLogo: {
    width: 200,
    height: 58,
    marginTop: 20,
    marginBottom: 20,
  },

  trendHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  trendingText: {
    color: "#FFFFFF",
    fontSize: 20,
    marginLeft: 10,
    textAlign: "left",
    marginBottom: 20,
  },

  trendLink: {
    color: "#E4E4E4",
    marginRight: 20,
    display: "flex",
    alignItems: "center",
    fontSize: 11,
  },

  trendBannerContainer: {
    width: "100%",
  },

  playTrendGameContainer: {
    position: "absolute",
    top: 5,
    left: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00000099",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
    gap: 5,
  },

  playTrendGameBtn: {},

  trendBetBanner: {
    width: "100%",
    height: 300,
    borderRadius: 20,
    marginBottom: 10,
  },

  sportsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#0C0C0C",
    borderRadius: 100,
  },

  selectedSport: {
    backgroundColor: "#000000",
    borderRadius: 100,
    padding: 5,
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
});

export default styles;
