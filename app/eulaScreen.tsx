import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const eulaScreen = () => {
  const router = useRouter();

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>End User License Agreement (EULA)</Text>
      <ScrollView style={styles.eulaText}>
        <Text style={styles.eulaContent}>
          👋 Welcome, brave user!
          {'\n\n'}
          By continuing to use this app, you solemnly swear (or maybe just tap agree) to the following totally legit and not at all suspicious terms:
          {'\n\n'}
          🔹 You agree not to hold us responsible if you fall in love with the UI.
          {'\n\n'}
          🔹 You promise not to use this app to summon ancient beings or your ex.
          {'\n\n'}
          🔹 If this app causes uncontrollable joy, you agree to dance it out.
          {'\n\n'}
          🔹 You understand that pressing buttons is a serious commitment.
          {'\n\n'}
          🔹 Your soul may or may not be collateral. (Just kidding... unless?)
          {'\n\n'}
          Thank you for skimming this. We both know you didn’t read it all.
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/')}
      >
        <Text style={styles.buttonText}>WHAT?!?!?!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  eulaText: {
    width: '100%',
    marginBottom: 20,
  },
  eulaContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  backButton: {
    backgroundColor: '#2A3663',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '70%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default eulaScreen;
