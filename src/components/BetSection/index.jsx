import { Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { firebase, db } from "../../services/firebaseConfig";

import { collection, query, where, getDocs } from "firebase/firestore";

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
            <Text  style={styles.gameCompetition}>{bet.competicao}</Text>
            <Image style={styles.competitionImage} source={{ uri: bet.fotoCompeticao }} />
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
