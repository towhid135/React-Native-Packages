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
import {Icon} from '@rneui/base';
import {FAB, Portal, Provider} from 'react-native-paper';

const FabGroupComp = () => {
  const [state, setState] = useState({
    open: false,
    Id: false,
    occupation: false,
  });

  const onStateChange = () => {
    setState({...state, open: !state.open});
  };
  return (
    <SafeAreaView style={styles.container}>
      <FAB.Group
        open={state.open}
        icon={state.open ? 'calendar-today' : 'plus'}
        actions={[
          {
            icon: () => (
              <Icon type="antdesign" name="plus" size={20} color="black" />
            ),
            label: 'Add',
            onPress: () => console.log('Pressed add'),
            labelTextColor: 'green',
          },
          {
            icon: 'star',
            label: 'Star',
            onPress: () => console.log('Pressed star'),
          },
          {
            icon: 'email',
            label: 'Email',
            onPress: () => console.log('Pressed email'),
          },
          {
            icon: 'bell',
            label: 'Remind',
            onPress: () => console.log('Pressed notifications'),
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (state.open) {
            // do something if the speed dial is open
          }
        }}
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
});

export default FabGroupComp;
