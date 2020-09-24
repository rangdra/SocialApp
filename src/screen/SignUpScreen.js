import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {fonts} from '../utils';
import {AuthContext} from '../navigation/AuthProvider';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.text}>Create an account</Text>
          <FormInput
            labelValue={email}
            placeholderText="Email"
            onChangeText={(userEmail) => setEmail(userEmail)}
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormInput
            labelValue={password}
            placeholderText="Password"
            onChangeText={(userPassword) => setPassword(userPassword)}
            iconType="lock"
            secureTextType={true}
          />
          <FormInput
            labelValue={confirmPassword}
            placeholderText="Confirm Password"
            onChangeText={(userPassword) => setConfirmPassword(userPassword)}
            iconType="lock"
            secureTextType={true}
          />
          <FormButton
            buttonTitle="Sign Up"
            onPress={() => register(email, password)}
          />
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By registering, you confirm that you accept our
            </Text>
            <TouchableOpacity onPress={() => alert('terms clicked')}>
              <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                Terms of services
              </Text>
            </TouchableOpacity>
            <Text style={styles.color_textPrivate}> and </Text>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
              Privacy and Policy
            </Text>
          </View>
          <SocialButton
            buttonTitle="Sign Up with Facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
            btnType="facebook"
          />
          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navButtonText}>Have an account? Sign In</Text>
          </TouchableOpacity>
          <View style={{height: 100}} />
        </View>
      </ScrollView>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: fonts.secondary[600],
    fontSize: 28,
    marginBottom: 20,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    color: '#2e64e5',
    fontFamily: fonts.secondary[300],
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontFamily: fonts.secondary.normal,
    color: 'grey',
  },
});
