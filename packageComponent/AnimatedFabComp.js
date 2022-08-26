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
import {AnimatedFAB} from 'react-native-paper';
import {Icon} from '@rneui/base';

const AnimatedFABComp = () => {
  const [extendButton, setExtendButton] = useState(false);
  const [show, setShow] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedFAB
        icon={() => (
          <Icon type="antdesign" name="plus" size={20} color="black" />
        )}
        label={'Label'}
        extended={extendButton}
        onPress={() => setExtendButton(!extendButton)}
        visible={show}
        animateFrom={'right'}
        iconMode={'static'}
        style={[styles.fabStyle]}
        onLongPress={() => setShow(!show)}
      />
    </SafeAreaView>
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

export default AnimatedFABComp;
