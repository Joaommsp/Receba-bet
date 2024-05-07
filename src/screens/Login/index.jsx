import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import styles from "./styles";

export default function Login({ navigation }) {
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

  const Login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        
        if(user) {
          navigation.navigate("Home")
        }
        ;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          style={styles.bannerImage}
          source={require("../../../assets/images/receba-bet-logo.png")}
        />
      </View>
      <Text style={styles.loginGreeting}>Welcome back</Text>
      <View style={styles.formContainer}>
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

        <TouchableOpacity onPress={Login} style={styles.formButtonSubmit}>
          <Text style={styles.formButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.createAccountContainer}>
          <Text style={styles.createAccountLink}>
            Não tem uma conta?{""}
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={styles.linkText}
            >
              {" "}
              Crie sua conta
            </Text>
          </Text>
        </View>
        <Text style={styles.company}>Receba Bet© 2024</Text>
      </View>
    </View>
  );
}
