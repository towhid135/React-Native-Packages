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
import {color, Icon} from '@rneui/base';
import {CheckBox} from '@rneui/themed';

const CheckBoxComp = () => {
  const [Data, setData] = useState({
    name: false,
    Id: false,
    occupation: false,
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={{}}>
        <CheckBox
          //center
          //containerStyle={{borderWidth: 1, borderColor: 'green'}}
          title="Name: Towhid"
          checked={Data.name}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={() => setData({...Data, name: !Data.name})}
        />
        <CheckBox
          //center
          //containerStyle={{borderWidth: 1, borderColor: 'green'}}
          title="Id: 135"
          checkedIcon={
            <Icon
              name="radio-button-checked"
              type="material"
              color="green"
              size={25}
              iconStyle={{marginRight: 10}}
            />
          }
          uncheckedIcon={
            <Icon
              name="radio-button-unchecked"
              type="material"
              color="red"
              size={25}
              iconStyle={{marginRight: 10}}
            />
          }
          checked={Data.Id}
          onPress={() => setData({...Data, Id: !Data.Id})}
        />
        <CheckBox
          //center
          containerStyle={{borderWidth: 1, borderColor: 'green'}}
          title="Occupation: Engineer"
          checked={Data.occupation}
          onPress={() => setData({...Data, occupation: !Data.occupation})}
        />
      </View>
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

export default CheckBoxComp;
