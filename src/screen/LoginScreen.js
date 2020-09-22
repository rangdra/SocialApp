import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {fonts} from '../utils';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
        <Text style={styles.text}>RP Social App</Text>
        <FormInput
          labelValue={email}
          placeholderText="Email"
          onChangeText={(userEmail) => setEmail(userEmail)}
          keyboardType="email-address"
          autoCapitalize="none"
          isUser
          autoCorrect={false}
        />
        <FormInput
          labelValue={password}
          placeholderText="Password"
          onChangeText={(userPassword) => setPassword(userPassword)}
          secureTextType={true}
        />
        <FormButton
          buttonTitle="Sign Up"
          onPress={() => alert('button clicked')}
        />
        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.navButtonText}>Forgot Password</Text>
        </TouchableOpacity>
        <SocialButton
          buttonTitle="Sign In with Facebook"
          color="#4867aa"
          backgroundColor="#e6eaf4"
          onPress={() => {}}
        />
        <SocialButton
          buttonTitle="Sign In with Google"
          isGoogle
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => {}}
        />
        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.navButtonText}>
            Don't have an account? create here
          </Text>
        </TouchableOpacity>
        <View style={{height: 100}} />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
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
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    color: '#2e64e5',
    fontFamily: fonts.secondary.normal,
  },
});
