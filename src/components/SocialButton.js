import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {windowHeigth, windowWidth} from '../utils/Dimentions';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {fonts} from '../utils';

const SocialButton = ({
  buttonTitle,
  isGoogle,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  const icon = isGoogle
    ? require('../images/google.png')
    : require('../images/facebook.png');
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        {/* <FontAwesome
          style={styles.icon}
          name={btnType}
          size={22}
          color={color}
        /> */}
        <Image source={icon} style={[styles.icon]} />
      </View>
      <View style={styles.btnTextWrapper}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeigth / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 22,
    height: 22,
  },
  btnTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: fonts.secondary[700],
  },
});
