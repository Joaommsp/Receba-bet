import { View, Text } from "react-native";
import React, { useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import { firebase, db } from "../../services/firebaseConfig";

import styles from "./styles";

const Home = ({ navigation }) => {
  const [userLogged, setUserLogged] = useState(false);
  const [userName, setUserName] = useState("");

  const auth = getAuth();
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

  getCurrentUser();

  return (
    userLogged && (
      <View style={styles.homeContainer}>
        <View style={styles.header}>
          <View style={styles.userInfos}>
            <Text style={styles.userName} >Olá {userName}</Text>
          </View>
        </View>
      </View>
    )
  );
};

export default Home;
