import { View, Text, Image, TouchableOpacity } from "react-native";
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
      setUserName(docSnap.data().name);
    } else {
      // docSnap.data() will be undefined in this case
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

  return (
    userLogged && (
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

        <View>
          <BetSection />
        </View>
      </View>
    )
  );
};

export default Home;
