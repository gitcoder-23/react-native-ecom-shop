import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AuthScreen = ({navigation}) => {
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: '#e5e5e5',
        }}>
        <Text onPress={() => navigation.navigate('ButtonTab')}>AuthScreen</Text>
      </ScrollView>
    </>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
