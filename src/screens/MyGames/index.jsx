import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import { firebase, db } from "../../services/firebaseConfig";

import styles from "./styles";

const MyGames = () => {
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
    const docRef = doc(
      db,
      `users/${userID}/minhasApostasAtivas`,
      minhasApostasAtivas.uid
    );
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      con.log("CO");
      console.log(docSnap.data().competicao);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  // const getBets = async () => {
  //   const docRef = doc(db, "users", userID);
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     setUserName(docSnap.data().name);
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // };

  return (
    userLogged && (
      <View style={styles.myGamesContainer}>
        <Text>{userName}</Text>
      </View>
    )
  );
};

export default MyGames;
