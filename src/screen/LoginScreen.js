import React, {useState, useContext} from 'react';
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
import {AuthContext} from '../navigation/AuthProvider';
import * as Animatable from 'react-native-animatable';

const LoginScreen = ({navigation}) => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [data, setData] = useState({
    email: '',
    password: '',
    isValidEmail: true,
    isValidPassword: true,
  });

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        isValidEmail: false,
      });
    }
  };

  const handlePassword = (val) => {
    if (val.trim().length >= 5) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
      });
    }
  };
  const {login} = useContext(AuthContext);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={require('../images/rn-social-logo.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>RP Social App</Text>
        <FormInput
          labelValue={data.email}
          placeholderText="Email"
          // onChangeText={(userEmail) => setEmail(userEmail)}
          onChangeText={(val) => textInputChange(val)}
          onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          keyboardType="email-address"
          autoCapitalize="none"
          iconType="user"
          autoCorrect={false}
        />
        {data.isValidEmail ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}
        <FormInput
          labelValue={data.password}
          placeholderText="Password"
          // onChangeText={(userPassword) => setPassword(userPassword)}
          onChangeText={(val) => handlePassword(val)}
          secureTextType={true}
          iconType="lock"
        />
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}
        <FormButton
          buttonTitle="Sign In"
          // onPress={() => login(email, password)}
          onPress={() => login(data.email, data.password)}
        />
        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.navButtonText}>Forgot Password</Text>
        </TouchableOpacity>
        <SocialButton
          buttonTitle="Sign In with Facebook"
          color="#4867aa"
          btnType="facebook"
          backgroundColor="#e6eaf4"
          onPress={() => {}}
        />
        <SocialButton
          buttonTitle="Sign In with Google"
          btnType="google"
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
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});
