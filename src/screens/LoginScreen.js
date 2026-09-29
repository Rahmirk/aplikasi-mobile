import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import LoginForm from '../components/LoginForm';

const LoginScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (userInfo) => {
    setUserData(userInfo);
    setIsLoggedIn(true);
    // Uncomment untuk navigasi ke halaman berikutnya setelah login berhasil
    // navigation?.navigate('Home', { user: userInfo });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoginForm onLogin={handleLogin} />

      {/* Debug info - Hapus di production */}
      {isLoggedIn && (
        <View style={styles.successContainer}>
          <Text style={styles.successText}>
            ✓ Login berhasil dengan email: {userData?.email}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  successContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#4caf50',
    padding: 12,
    borderRadius: 8,
  },
  successText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default LoginScreen;
