import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firebase, db } from "../../services/firebaseConfig";

import styles from "./styles";

const MyGames = () => {
  const [userLogged, setUserLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [userBets, setUserBets] = useState([]);

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

    try {
      const minhasApostasAtivasRef = collection(
        db,
        "users",
        userID,
        "minhas_apostas_ativas"
      );
      const snapshot = await getDocs(minhasApostasAtivasRef);

      const betsArray = [];
      snapshot.forEach((doc) => {
        betsArray.push(doc.data());
      });

      setUserBets(betsArray);
    } catch (error) {
      console.log("Error getting user bets:", error);
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
        <Text>{userName}AQUI</Text>
        <View style={styles.betsContainer}>
          {userBets.map((bet) => (
            <View key={bet.id} style={styles.betItem}>
              <View style={styles.teamInfos}>
                <Image
                  style={styles.teamImage}
                  source={{ uri: bet.fotoTime1 }}
                />
                <Text style={styles.teamPrice}>{bet.cotacaoTime1}</Text>
                <Text style={styles.teamName}>{bet.time1}</Text>
              </View>
              <View style={styles.gameInfos}>
                <Text style={styles.gameCompetition}>{bet.competicao}</Text>
                <Image
                  style={styles.competitionImage}
                  source={{ uri: bet.fotoCompeticao }}
                />
                <TouchableOpacity
                  style={styles.playGameBtn}
                  onPress={() =>
                    addBet(
                      bet.competicao,
                      bet.cotacaoTime1,
                      bet.cotacaoTime2,
                      bet.fotoCompeticao,
                      bet.fotoTime1,
                      bet.fotoTime2,
                      bet.time1,
                      bet.time2
                    )
                  }
                >
                  <Text style={styles.playGameText}>Jogar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.teamInfos}>
                <Image
                  style={styles.teamImage}
                  source={{ uri: bet.fotoTime2 }}
                />
                <Text style={styles.teamPrice}>{bet.cotacaoTime2}</Text>
                <Text style={styles.teamName}>{bet.time2}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  );
};

export default MyGames;
