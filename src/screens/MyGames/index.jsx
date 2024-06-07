import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { firebase, db } from "../../services/firebaseConfig";
import Ionicons from "react-native-vector-icons/Ionicons";

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

  const deleteBet = async (betID) => {
    try {
      const betRef = doc(
        db,
        "users",
        auth.currentUser.uid,
        "minhas_apostas_ativas",
        betID
      );
      await deleteDoc(betRef);
      console.log("Bet deleted successfully:", betID);

      setUserBets(userBets.filter((bet) => bet.id !== betID));
    } catch (error) {
      console.log("Error deleting bet:", error);
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

  const DeleteIcon = () => {
    return <Ionicons name="close-circle-outline" size={32} color="#FFFFFF" />;
  };

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
                {bet.id && (
                  <TouchableOpacity onPress={() => deleteBet(bet.id)}>
                    <DeleteIcon />
                  </TouchableOpacity>
                )}
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
