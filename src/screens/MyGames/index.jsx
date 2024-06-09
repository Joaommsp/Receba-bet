import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { firebase, db } from "../../services/firebaseConfig";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";

import BetLostSection from "../../components/BetLostResults";
import BetWinSection from "../../components/BetWinResults";

import styles from "./styles";

const MyGames = () => {
  const [userLogged, setUserLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [userBets, setUserBets] = useState([]);
  const [editBetID, setEditBetID] = useState("");
  const [editBetScoreTeam1, setEditBetScoreTeam1] = useState(0);
  const [editBetScoreTeam2, setEditBetScoreTeam2] = useState(0);
  const [waitConfirmBet, setWaitConfirmBet] = useState(false);
  const [confirmingBetID, setConfirmingBetID] = useState(null);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    authenticateUser();
  }, []);

  useFocusEffect(
    useCallback(() => {
      authenticateUser();
    }, [])
  );

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
      setUserBets(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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

  const resetEditScore = () => {
    setEditBetScoreTeam1(0);
    setEditBetScoreTeam2(0);
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
    return <Ionicons name="close-circle-outline" size={32} color="#DA0037" />;
  };

  const ConfirmIcon = () => {
    return (
      <Ionicons name="checkmark-circle-outline" size={32} color="#00B906" />
    );
  };

  const betGame = async (
    betId,
    betScore1,
    betScore2,
    competitionName,
    competitionImage,
    team01Image,
    team02Image
  ) => {
    const resultScore1 = Math.floor(Math.random() * 10);
    const resultScore2 = Math.floor(Math.random() * 10);

    console.log("resultado time1: " + resultScore1);
    console.log(typeof resultScore1);
    console.log("resultado time2: " + resultScore2);
    console.log(typeof resultScore2);

    const guessScore1 = Number.parseInt(betScore1);
    const guessScore2 = Number.parseInt(betScore2);

    console.log("palpite time1: " + guessScore1);
    console.log(typeof guessScore1);
    console.log("palpite time2: " + guessScore2);
    console.log(typeof guessScore2);

    if (resultScore1 == guessScore1 && resultScore2 == guessScore2) {
      alert("GANHOU CU");
    } else {
      alert("perdeuKKK");
      await addLoseBet(
        competitionName,
        competitionImage,
        team01Image,
        team02Image,
        resultScore1,
        resultScore2,
        guessScore1,
        guessScore2
      );
      deleteBet(betId);
      setConfirmingBetID(null);
      resetEditScore();
      reloadGames();
    }
  };

  const addLoseBet = async (
    competition,
    competitionImage,
    imageTeam1,
    imageTeam2,
    resultTeam1,
    resultTeam2,
    guessTeam1,
    guessTeam2
  ) => {
    try {
      const minhasApostasAtivasRef = collection(
        db,
        "users",
        auth.currentUser.uid,
        "minhas_apostas_perdidas"
      );
      const newBetRef = await addDoc(minhasApostasAtivasRef, {
        competicao: competition,
        fotoCompeticao: competitionImage,
        fotoTime1: imageTeam1,
        fotoTime2: imageTeam2,
        placarTime1: resultTeam1,
        placarTime2: resultTeam2,
        palpiteTime1: guessTeam1,
        palpiteTime2: guessTeam2,
      });
      console.log("Lose Bet added successfully:", newBetRef.id);
    } catch (error) {
      console.log("Error adding bet:", error);
    }
  };

  const reloadGames = () => {
    setReload(false);

    const timeToRestart = setInterval(() => {
      setReload(true);
      clearInterval(timeToRestart);
    }, 2000);
  };

  return (
    userLogged && (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.myGamesContainer}>
          <Text>{userName}AQUI</Text>
          <View style={styles.betsContainer}>
            {userBets.map((bet, index) => (
              <TouchableOpacity>
                <View key={index} style={styles.betItem}>
                  {confirmingBetID === bet.id && (
                    <View style={styles.centeredView}>
                      <View style={styles.popupConfirmBet}>
                        <Text style={styles.betConfirmText}>
                          Deseja confirmar sua aposta ?
                        </Text>
                        <View style={styles.betGameStats}>
                          <View style={styles.teamStats}>
                            <Image
                              style={styles.betTeamImage}
                              source={{ uri: bet.fotoTime1 }}
                            />
                            <Text style={styles.betTeamScore}>
                              {editBetScoreTeam1}
                            </Text>
                          </View>
                          <View style={styles.teamStats}>
                            <Image
                              style={styles.betTeamImage}
                              source={{ uri: bet.fotoTime2 }}
                            />
                            <Text style={styles.betTeamScore}>
                              {editBetScoreTeam2}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.actionButtonsContainer}>
                          <TouchableOpacity
                            onPress={() =>
                              betGame(
                                bet.id,
                                editBetScoreTeam1,
                                editBetScoreTeam2,
                                bet.competicao,
                                bet.fotoCompeticao,
                                bet.fotoTime1,
                                bet.fotoTime2
                              )
                            }
                          >
                            <ConfirmIcon />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => setConfirmingBetID(null)}
                          >
                            <DeleteIcon />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  )}
                  <View style={styles.teamInfos}>
                    <Image
                      style={styles.teamImage}
                      source={{ uri: bet.fotoTime1 }}
                    />
                    <Text style={styles.teamPrice}>{bet.cotacaoTime1}</Text>
                    <Text style={styles.teamName}>{bet.time1}</Text>
                  </View>
                  <View style={styles.gameInfos}>
                    <Image
                      style={styles.competitionImage}
                      source={{ uri: bet.fotoCompeticao }}
                    />
                    {bet.id && (
                      <TouchableOpacity onPress={() => deleteBet(bet.id)}>
                        <DeleteIcon />
                      </TouchableOpacity>
                    )}
                    <View style={styles.scoreContainer}>
                      <TextInput
                        style={styles.scoreInput}
                        keyboardType="numeric"
                        defaultValue={parseInt(bet.placarTime1).toString()}
                        maxLength={2}
                        placeholder="0"
                        placeholderTextColor={"#989898"}
                        onChangeText={(text) => {
                          let newText = "";
                          let numbers = "0123456789";
                          for (var i = 0; i < text.length; i++) {
                            if (numbers.indexOf(text[i]) > -1) {
                              newText = newText + text[i];
                              setEditBetScoreTeam1(newText);
                            } else {
                              // your call back function
                              alert("please enter numbers only");
                              setEditBetScoreTeam1(0);
                            }
                          }
                          setEditBetScoreTeam1(text);
                        }}
                      />
                      <TextInput
                        style={styles.scoreInput}
                        keyboardType="numeric"
                        defaultValue={parseInt(bet.placarTime2).toString()}
                        placeholder="0"
                        placeholderTextColor={"#989898"}
                        maxLength={2}
                        onChangeText={(text) => {
                          let newText = "";
                          let numbers = "0123456789";
                          for (var i = 0; i < text.length; i++) {
                            if (numbers.indexOf(text[i]) > -1) {
                              newText = newText + text[i];
                              setEditBetScoreTeam2(newText);
                            } else {
                              // your call back function
                              alert("please enter numbers only");
                              setEditBetScoreTeam2(0);
                            }
                          }
                          setEditBetScoreTeam2(text);
                        }}
                      />
                    </View>
                    <TouchableOpacity
                      style={styles.finishBetBtn}
                      onPress={() => setConfirmingBetID(bet.id)}
                    >
                      <Text style={styles.finishText}>Finalizar</Text>
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
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.performanceText}>Performance</Text>
          <View style={styles.resultBetsContainer}>
            {reload && <BetWinSection />}
          </View>
          {reload && <BetLostSection />}
        </View>
      </ScrollView>
    )
  );
};

export default MyGames;
