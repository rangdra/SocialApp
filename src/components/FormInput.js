import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {fonts} from '../utils';
import {windowHeigth, windowWidth} from '../utils/Dimentions';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function FormInput({
  labelValue,
  placeholderText,
  iconType,
  ...rest
}) {
  let icons;
  if (iconType === 'user') {
    icons = require('../images/icon-user.png');
  } else if (iconType === 'lock') {
    icons = require('../images/icon-lock.png');
  }
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconType}>
        {/* <AntDesign name={iconType} size={25} color="#666" /> */}
        <Image source={icons} style={{width: 25, height: 25}} />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        placeholder={placeholderText}
        {...rest}
        placeholderTextColor="#666"
        numberOfLines={1}
        secureTextEntry
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeigth / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconType: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  icon: {
    width: 25,
    height: 25,
    color: '#666',
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.secondary.normal,
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeigth / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
