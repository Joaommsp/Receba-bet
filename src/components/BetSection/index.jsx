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

import styles from "./styles";

export default function BetSection() {
  const [bets, setBets] = useState([]);

  useEffect(() => {
    getBets();
  }, []);

  const getBets = async () => {
    const q = query(collection(db, "apostas"));

    const betsArray = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      betsArray.push({ id: doc.id, ...doc.data() });
    });

    setBets(betsArray);
  };

  const auth = getAuth();

  const addBet = async (
    id,
    competition,
    team1Price,
    team2Price,
    competitionImage,
    imageTeam1,
    imageTeam2,
    nameTeam1,
    nameTeam2
  ) => {
    try {
      const minhasApostasAtivasRef = collection(
        db,
        "users",
        auth.currentUser.uid,
        "minhas_apostas_ativas"
      );
      const newBetRef = await addDoc(minhasApostasAtivasRef, {
        competicao: competition,
        cotacaoTime1: team1Price,
        cotacaoTime2: team2Price,
        fotoCompeticao: competitionImage,
        fotoTime1: imageTeam1,
        fotoTime2: imageTeam2,
        time1: nameTeam1,
        time2: nameTeam2,
        placarTime1: 0,
        placarTime2: 0,
      });
      console.log("Bet added successfully:", newBetRef.id);
    } catch (error) {
      console.log("Error adding bet:", error);
    }
  };

  return (
    <View style={styles.betSectionContainer}>
      {bets.map((bet) => (
        <View key={bet.id} style={styles.betItem}>
          <View style={styles.teamInfos}>
            <Image style={styles.teamImage} source={{ uri: bet.fotoTime1 }} />
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
                  bet.id,
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
            <Image style={styles.teamImage} source={{ uri: bet.fotoTime2 }} />
            <Text style={styles.teamPrice}>{bet.cotacaoTime2}</Text>
            <Text style={styles.teamName}>{bet.time2}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
