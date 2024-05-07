import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import styles from "./styles";

export default function Intro({ navigation }) {
  const [fontLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={require("../../../assets/images/home-banner.png")}
      ></Image>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../../assets/images/logo-full.png")}
        />
        <Text style={styles.title}>O seu App de apostas</Text>
      </View>
      <View style={styles.sloganContainer}>
        <View style={styles.observationContainer}>
          <MaterialCommunityIcons name="alert" size={36} color="#FB0203" />
          <Text style={styles.observation}>
            Para Acessar este aplicativo é necessário ser{" "}
            <Text style={styles.observationContrast}>
              Maior de 18 anos e fã do Luva de Pedreiro
            </Text>
          </Text>
        </View>

        <View style={styles.startButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.startButton}
          >
            <Text style={styles.startButtonText}>Acessar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sponsorshipContainer}>
          <Image
            style={styles.sponsorshiplogo_nike}
            source={require("../../../assets/images/sponsorship/nike_resized.png")}
          />
          <Image
            style={styles.sponsorshiplogo_champions}
            source={require("../../../assets/images/sponsorship/champions_resized.png")}
          />
          <Image
            style={styles.sponsorshiplogo_coca}
            source={require("../../../assets/images/sponsorship/coca_cola_resized.png")}
          />
          <Image
            style={styles.sponsorshiplogo_johnsons}
            source={require("../../../assets/images/sponsorship/johnsons_resized.png")}
          />
        </View>

        <Text style={styles.company}>Receba Bet© 2024</Text>
      </View>
    </View>
  );
}
