import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

import { Header } from "./src/components/Header";
import { Footer } from "./src/components/Footer";
import { Team } from "./src/components/Team";

export default function App() {
  NavigationBar.setBackgroundColorAsync("#222222");
  const [trucoValue, setTrucoValue] = useState(1);
  const [firstTeamScore, setFirstTeamScore] = useState(0);
  const [secondTeamScore, setSecondTeamScore] = useState(0);

  useEffect(() => {
    if (wins(firstTeamScore) > wins(firstTeamScore - trucoValue)) {
      resetPoints();
    }
    setTrucoValue(1);
  }, [firstTeamScore]);

  useEffect(() => {
    if (wins(secondTeamScore) > wins(secondTeamScore - trucoValue)) {
      resetPoints();
    }
    setTrucoValue(1);
  }, [secondTeamScore]);

  function trucoUp() {
    switch (true) {
      case trucoValue == 1:
        setTrucoValue(3);
        break;
      case trucoValue >= 3 && trucoValue < 12:
        setTrucoValue(trucoValue + 3);
        break;
      case trucoValue > 9:
        setTrucoValue(1);
        break;
    }
  }

  function addScore(team) {
    switch (team) {
      case "firstTeam":
        setFirstTeamScore(firstTeamScore + trucoValue);
        break;
      case "secondTeam":
        setSecondTeamScore(secondTeamScore + trucoValue);
        break;
    }
  }

  function removeScore(team) {
    switch (team) {
      case "firstTeam":
        if (firstTeamScore > 0) setFirstTeamScore(firstTeamScore - 1);
        break;
      case "secondTeam":
        if (secondTeamScore > 0) setSecondTeamScore(secondTeamScore - 1);
        break;
    }
  }

  function resetPoints() {
    setFirstTeamScore(firstTeamScore - (firstTeamScore % 12));
    setSecondTeamScore(secondTeamScore - (secondTeamScore % 12));
  }

  function wins(points) {
    return Math.floor(points / 12);
  }

  function reset() {
    setFirstTeamScore(0);
    setSecondTeamScore(0);
    setTrucoValue(1);
  }

  return (
    <SafeAreaView className="flex-1 w-full bg-[#333333]">
      <StatusBar style="light" backgroundColor="#222222" />
      <Header
        reset={() => {
          reset();
        }}
      />
      <View className="flex-1 flex-row w-full bg-[#333333] divide-x-4 divide-[#222222]">
        <View className="flex-1">
          <Team
            defaultName="nós"
            score={firstTeamScore}
            add={() => {
              addScore("firstTeam");
            }}
            remove={() => {
              removeScore("firstTeam");
            }}
          />
        </View>
        <View className="flex-1">
          <Team
            defaultName="eles"
            score={secondTeamScore}
            add={() => {
              addScore("secondTeam");
            }}
            remove={() => {
              removeScore("secondTeam");
            }}
          />
        </View>
      </View>
      <Footer
        onPress={() => {
          trucoUp();
        }}
        truco={trucoValue}
      />
    </SafeAreaView>
  );
}
