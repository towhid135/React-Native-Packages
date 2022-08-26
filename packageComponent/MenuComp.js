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
import {Button, Menu, Divider, Provider} from 'react-native-paper';

const MenuComp = () => {
  const [visible, setVisible] = useState(false);
  const showMenuHandler = () => setVisible(!visible);
  return (
    <SafeAreaView style={styles.container}>
      <Provider>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Menu
            visible={visible}
            onDismiss={showMenuHandler}
            anchor={<Button onPress={showMenuHandler}>Show menu</Button>}>
            <Menu.Item
              onPress={() => {}}
              title="Item 1"
              style={{backgroundColor: '#fefe'}}
            />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
        </View>
      </Provider>
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

export default MenuComp;
