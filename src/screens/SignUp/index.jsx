import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import { firebase, db } from "../../services/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

import styles from "./styles";

import Home from "../Intro";
import Login from "../Login";

export default function SignUp({ navigation }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fontLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontLoaded) {
    return null;
  }

  const createUser = async () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);

        const usersRef = collection(db, "users");
        await setDoc(doc(usersRef, user.uid), {
          name: userName,
          email: email,
          password: password,
        });

        if (user) {
          navigation.navigate("Home");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.bannerImage}
          source={require("../../../assets/images/banner-signup.png")}
        />
        <Image
          style={styles.logo}
          source={require("../../../assets/images/receba-bet-logo-extended.png")}
        />
        <Text style={styles.loginGreeting}>Create Your Account</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="account" size={20} color="#0C0C0C" />
          <TextInput
            style={styles.formInput}
            placeholder="Nome"
            placeholderTextColor="#0C0C0C"
            onChangeText={setUserName}
            value={userName}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="email" size={20} color="#0C0C0C" />
          <TextInput
            style={styles.formInput}
            placeholder="E-mail"
            placeholderTextColor="#0C0C0C"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="lock" size={20} color="#0C0C0C" />
          <TextInput
            style={styles.formInput}
            placeholder="Senha"
            placeholderTextColor="#0C0C0C"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
        </View>

        <View style={styles.credentialControl}></View>

        <TouchableOpacity style={styles.formButtonSubmit} onPress={createUser}>
          <Text style={styles.formButtonText}>Registrar</Text>
        </TouchableOpacity>

        <View style={styles.createAccountContainer}>
          <Text style={styles.createAccountLink}>
            Já tem uma conta?{""}
            <Text
              onPress={() => navigation.navigate("Login")}
              style={styles.linkText}
            >
              {" "}
              Faça Login
            </Text>
          </Text>
        </View>
        <Text style={styles.company}>Receba Bet© 2024</Text>
      </View>
    </View>
  );
}
