import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // Validasi input
    if (!email.trim()) {
      Alert.alert('Error', 'Email tidak boleh kosong');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Error', 'Password tidak boleh kosong');
      return;
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Format email tidak valid');
      return;
    }

    setLoading(true);

    // Simulasi API call
    try {
      setTimeout(() => {
        setLoading(false);
        onLogin({
          email: email,
          token: 'sample_token_' + Date.now(),
        });
        // Reset form
        setEmail('');
        setPassword('');
      }, 1500);
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Terjadi kesalahan saat login');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        {/* Logo/Header */}
        <View style={styles.header}>
          <Text style={styles.title}>UNIKU Academic</Text>
          <Text style={styles.subtitle}>Sistem Informasi Akademik</Text>
        </View>

        {/* Email Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email / Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan email atau username"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!loading}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan password"
            placeholderTextColor="#999"
            secureTextEntry={true}
            editable={!loading}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={[
            styles.loginButton,
            loading && styles.loginButtonDisabled,
          ]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.loginButtonText}>
            {loading ? 'Sedang login...' : 'Login'}
          </Text>
        </TouchableOpacity>

        {/* Forgot Password Link */}
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Lupa password?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    fontWeight: '400',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fafafa',
  },
  loginButton: {
    backgroundColor: '#0066cc',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonDisabled: {
    backgroundColor: '#99ccff',
    opacity: 0.7,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  forgotPasswordContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#0066cc',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default LoginForm;
