import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import { firebase, db } from "../../services/firebaseConfig";

import BetSection from "../../components/BetSection";

import styles from "./styles";

const Home = ({ navigation }) => {
  const [userLogged, setUserLogged] = useState(false);
  const [userName, setUserName] = useState("");

  const auth = getAuth();

  const authenticateUser = () => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user.uid);
          setUserLogged(true);
          getCurrentUser(user.uid);
        } else {
          setUserLogged(false);
          navigation.navigate("Login");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  const getCurrentUser = async (userID) => {
    const docRef = doc(db, "users", userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const fullName = docSnap.data().name;
      const firstName = fullName.split(" ")[0]; // Pega apenas o primeiro nome
      setUserName(firstName);
    } else {
      console.log("No such document!");
    }
  };
  const Tab = createBottomTabNavigator();

  const GiftIcon = () => {
    return <Ionicons name="gift-outline" size={22} color="#FFFFFF" />;
  };

  const NotificationIcon = () => {
    return <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />;
  };

  const ArrowDownIcon = () => {
    return <Ionicons name="chevron-down-outline" size={22} color="#FFFFFF" />;
  };

  const FootballIcon = () => {
    return <Ionicons name="football-outline" size={30} color="#B31312" />;
  };

  const BasketIcon = () => {
    return <Ionicons name="basketball" size={36} color="#797979" />;
  };

  const RaceIcon = () => {
    return <Ionicons name="car-sport-outline" size={36} color="#797979" />;
  };

  const BaseballIcon = () => {
    return <Ionicons name="baseball-outline" size={36} color="#797979" />;
  };

  const PlayStationIcon = () => {
    return <Ionicons name="logo-playstation" size={36} color="#797979" />;
  };

  const StatsIcon = () => {
    return <Ionicons name="stats-chart" size={28} color="#797979" />;
  };

  const GameIcon = () => {
    return <Ionicons name="game-controller" size={20} color="#FFFFFF" />;
  };

  const MenuIcon = () => {
    return (
      <Ionicons name="ellipsis-vertical-circle" size={20} color="#FFFFFF" />
    );
  };

  const StarIcon = () => {
    return <Ionicons name="star" size={18} color="#f3e40e" />;
  };

  return (
    userLogged && (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.homeContainer}>
          <View style={styles.header}>
            <View style={styles.userMenu}>
              <Text style={styles.userName}>
                Olá, <Text style={styles.name}>{userName}</Text>
              </Text>
              <TouchableOpacity>
                <Image
                  style={styles.userImage}
                  source={require("../../../assets/images/default-user-image.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.notificationsContainer}>
              <TouchableOpacity style={styles.notificationButton}>
                {GiftIcon()}
              </TouchableOpacity>
              <TouchableOpacity style={styles.notificationButton}>
                {NotificationIcon()}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mainContentContainer}>
            <Image
              style={styles.recebaBetLogo}
              source={require("../../../assets/images/receba-bet-logo-extended.png")}
            />

            <View style={styles.trendBannerContainer}>
              <Image
                style={styles.trendBetBanner}
                source={require("../../../assets/images/elclassicobanner.png")}
              />
              <View style={styles.playTrendGameContainer}>
                <TouchableOpacity style={styles.playTrendGameBtn}>
                  <StarIcon />
                </TouchableOpacity>
                <Text style={styles.trendLink}>Trending Game</Text>
                <TouchableOpacity style={styles.playTrendGameBtn}>
                  <GameIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.playTrendGameBtn}>
                  <MenuIcon />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.sportsContainer}>
              <TouchableOpacity style={styles.selectedSport}>
                <FootballIcon />
              </TouchableOpacity>
              <TouchableOpacity>
                <BasketIcon />
              </TouchableOpacity>
              <TouchableOpacity>
                <RaceIcon />
              </TouchableOpacity>
              <TouchableOpacity>
                <BaseballIcon />
              </TouchableOpacity>
              <TouchableOpacity>
                <PlayStationIcon />
              </TouchableOpacity>
              <TouchableOpacity>
                <StatsIcon />
              </TouchableOpacity>
            </View>
            <BetSection />
          </View>
          <View style={styles.footer}>
            <Image
              style={styles.recebaBetLogo}
              source={require("../../../assets/images/receba-bet-logo-extended.png")}
            />
            <Text style={styles.company}>Receba Bet© 2024</Text>
          </View>
        </View>
      </ScrollView>
    )
  );
};

export default Home;
