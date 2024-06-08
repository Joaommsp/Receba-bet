import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { firebase, db } from "../../services/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  addDoc,
} from "firebase/firestore";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from "./styles";

export default function BetWinSection() {
  const [userName, setUserName] = useState("");
  const [userBets, setUserBets] = useState([]);

  const auth = getAuth();

  const authenticateUser = () => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          getCurrentUser(user.uid);
        } else {
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

    try {
      const minhasApostasGanhasRef = collection(
        db,
        "users",
        userID,
        "minhas_apostas_ganhas"
      );
      const snapshot = await getDocs(minhasApostasGanhasRef);
      setUserBets(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(userBets);
    } catch (error) {
      console.log("Error getting user bets:", error);
    }
  };

  const TrophyIcon = () => {
    return <Ionicons name="trophy-outline" size={22} color="#16FF00" />;
  };

  return (
    <View style={styles.betSectionContainer}>
      {userBets.length > 0 ? (
        userBets.map((bet) => (
          <View key={bet.id} style={styles.betItem}>
            <View style={styles.teamInfos}>
              <Image style={styles.teamImage} source={{ uri: bet.fotoTime1 }} />
              <Text style={styles.teamName}>{bet.time1}</Text>
            </View>
            <View style={styles.gameInfos}>
              {/* <Image
              style={styles.competitionImage}
              source={{ uri: bet.fotoCompeticao }}
            /> */}
              <View style={styles.gameResultsContainer}>
                <TrophyIcon />
                <View style={styles.resultScore}>
                  <Text style={styles.score}>{bet.placarTime1}</Text>
                  <Text style={styles.score}>{bet.placarTime2}</Text>
                </View>
              </View>
              <View style={styles.gameGuessContainer}>
                <View style={styles.guessScore}>
                  <Text style={styles.guess}>{bet.palpiteTime1}</Text>
                  <Text style={styles.guess}>{bet.palpiteTime2}</Text>
                </View>
              </View>
            </View>
            <View style={styles.teamInfos}>
              <Image style={styles.teamImage} source={{ uri: bet.fotoTime2 }} />
              <Text style={styles.teamName}>{bet.time2}</Text>
            </View>
          </View>
        ))
      ) : (
        <View>
          <Text>FRACASSADO</Text>
        </View>
      )}
    </View>
  );
}
