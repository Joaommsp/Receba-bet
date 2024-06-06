import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firebase, db } from "../../services/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import styles from "./styles";

const MyGames = () => {
  const [userIdAuth, setUserIdAuth] = useState("");

  const auth = getAuth();

  useEffect(() => {
    authenticateUser();
    getGame();
  }, []);

  const authenticateUser = async () => {
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

  const getCurrentUser = async (userID) => {
    const docRef = doc(db, "users", userID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserIdAuth(docSnap.data().id);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

    return userIdAuth;
  };

  const getGame = async () => {
    const id = await getCurrentUser();
    console.log("IDE AUQI " + id);

    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return (
    <View style={styles.myGamesContainer}>
      <Text>MyGames</Text>
    </View>
  );
};

export default MyGames;
