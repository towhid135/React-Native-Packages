import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  StyleProp,
  ViewStyle,
  Animated,
  I18nManager,
} from 'react-native';
import AnimatedFABComp from './packageComponent/AnimatedFabComp';
import CheckBoxComp from './packageComponent/CheckBoxComp';
import FabGroupComp from './packageComponent/FabGroupComp';
import MenuComp from './packageComponent/MenuComp';

const App = () => {
  return (
    //<AnimatedFABComp />
    //<CheckBoxComp />
    //<FabGroupComp />
    <MenuComp />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});

export default App;
