import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.textSocial}>Social App</Text>
      <Text style={styles.textName}>by Rangdra Pangestu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSocial: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  textName: {
    marginTop: 10,
  },
});
