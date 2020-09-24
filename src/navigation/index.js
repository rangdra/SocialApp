import React from 'react';
import {StyleSheet} from 'react-native';
import Routes from './Routes';
import {AuthProvider} from './AuthProvider';

export default function Providers() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({});
