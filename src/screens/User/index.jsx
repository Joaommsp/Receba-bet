import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { firebase, db } from "../../services/firebaseConfig";

import styles from "./styles";

const User = ({ navigation }) => {
  const [userLogged, setUserLogged] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [openEditInput, setOpenEditInput] = useState(false);
  const [newName, setNewName] = useState("");
  const [errorEditMessage, setErrorEditMessage] = useState(null);

  const auth = getAuth();

  const authenticateUser = () => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user.uid);
          setUserLogged(true);
          getCurrentUser(user.uid);
          setUserId(user.uid);
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
      const email = docSnap.data().email;
      const fullName = docSnap.data().name; // Pega apenas o primeiro nome
      setUserName(fullName);
      setUserEmail(email);
    } else {
      console.log("No such document!");
    }
  };

  const upDateName = async () => {
    const usersRef = doc(db, "users", userId);

    if (newName != "") {
      await updateDoc(usersRef, {
        name: newName,
      });
      authenticateUser();
    } else {
      setErrorEditMessage("Insira um novo nome");
    }
  };

  const GiftIcon = () => {
    return <Ionicons name="gift-outline" size={22} color="#FFFFFF" />;
  };

  const NotificationIcon = () => {
    return <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />;
  };

  const UserIcon = () => {
    return <Ionicons name="person-circle" size={36} color="#C40C0C" />;
  };

  const EmailIcon = () => {
    return <Ionicons name="mail" size={36} color="#C40C0C" />;
  };

  const EditIcon = () => {
    return <Ionicons name="create-outline" size={26} color="#FFFFFF" />;
  };

  const CloseIcon = () => {
    return <Ionicons name="close-circle-outline" size={26} color="#C40C0C" />;
  };

  const ConfirmIcon = () => {
    return (
      <Ionicons name="checkmark-circle-outline" size={26} color="#16FF00" />
    );
  };

  return (
    userLogged && (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.homeContainer}>
          <View style={styles.circleEffect}></View>
          <View style={styles.header}>
            <View style={styles.notificationsContainer}>
              <TouchableOpacity style={styles.notificationButton}>
                {GiftIcon()}
              </TouchableOpacity>
              <TouchableOpacity style={styles.notificationButton}>
                {NotificationIcon()}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.mainContentContainer}>
            <View style={styles.userImageContainer}>
              <Image
                style={styles.userProfilePic}
                source={require("../../../assets/images/userPFP.png")}
              />
            </View>
          </View>
          <View style={styles.userInfosContainer}>
            <View style={styles.userInfo}>
              <UserIcon />
              <Text style={styles.userInfoText}>{userName}</Text>
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => setOpenEditInput(true)}
              >
                <EditIcon />
              </TouchableOpacity>
            </View>
            {openEditInput && (
              <View style={styles.userInfo}>
                <TextInput
                  maxLength={25}
                  placeholder="Novo nome"
                  placeholderTextColor={"#AAAAAA"}
                  style={styles.inputNewName}
                  onChangeText={setNewName}
                />
                <View style={styles.actionButtons}>
                  <TouchableOpacity onPress={() => upDateName()}>
                    <ConfirmIcon />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setOpenEditInput(false)}>
                    <CloseIcon />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <View style={styles.userInfo}>
              <EmailIcon />
              <Text style={styles.userInfoText}>{userEmail}</Text>
            </View>
            {errorEditMessage != null && (
              <View>
                <Text style={styles.errorMessage}>{errorEditMessage}</Text>
              </View>
            )}
          </View>
          <View style={styles.footer}>
            <Image
              style={styles.recebaBetLogo}
              source={require("../../../assets/images/receba-bet-logo-extended.png")}
            />
            <Text style={styles.company}>Receba Bet© 2024</Text>
          </View>
        </View>
      </ScrollView>
    )
  );
};

export default User;
