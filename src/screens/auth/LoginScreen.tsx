import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { NeonCard } from '../../components/NeonCard';
import { ModernInput } from '../../components/ModernInput';
import { NeonButton } from '../../components/NeonButton';
import { useTheme } from '../../theme/ThemeContext';
import { loginStudent, loginAdmin } from '../../store/authSlice';
import { MOCK_STUDENT, MOCK_ADMIN } from '../../services/mockData';

export const LoginScreen = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const dispatch = useDispatch();
  const [role, setRole] = useState<'student' | 'admin'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Mock API Call delay
    setTimeout(() => {
      setLoading(false);
      if (role === 'student') {
        if (email === 'alex@myschool.com' && password === '123456') {
           dispatch(loginStudent(MOCK_STUDENT));
        } else {
           // Auto-fill for demo purposes if empty
           if (!email && !password) dispatch(loginStudent(MOCK_STUDENT));
           else Alert.alert('Error', 'Invalid Credentials (Try empty for demo)');
        }
      } else {
        if (email === 'admin@myschool.com' && password === 'admin123') {
           dispatch(loginAdmin(MOCK_ADMIN));
        } else {
           if (!email && !password) dispatch(loginAdmin(MOCK_ADMIN));
           else Alert.alert('Error', 'Invalid Admin Credentials');
        }
      }
    }, 1500);
  };

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.primary }]}>My School</Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
          Welcome Back, Future Leader
        </Text>
      </View>

      <View style={styles.roleContainer}>
        <TouchableOpacity
          onPress={() => setRole('student')}
          style={[
            styles.roleButton,
            role === 'student' && { backgroundColor: theme.colors.primary }
          ]}
        >
          <Text style={[
            styles.roleText,
            { color: role === 'student' ? '#000' : theme.colors.text }
          ]}>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setRole('admin')}
          style={[
            styles.roleButton,
            role === 'admin' && { backgroundColor: theme.colors.secondary }
          ]}
        >
          <Text style={[
            styles.roleText,
            { color: role === 'admin' ? '#FFF' : theme.colors.text }
          ]}>Admin</Text>
        </TouchableOpacity>
      </View>

      <NeonCard style={styles.formCard}>
        <ModernInput
          label="Email Address"
          placeholder={role === 'student' ? "alex@myschool.com" : "admin@myschool.com"}
          iconName="email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <ModernInput
          label="Password"
          placeholder="••••••"
          iconName="lock"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <NeonButton
          title={`Login as ${role}`}
          onPress={handleLogin}
          loading={loading}
          style={styles.loginBtn}
        />
      </NeonCard>

      <View style={styles.footer}>
        <Text style={{ color: theme.colors.textSecondary, textAlign: 'center' }}>
          By logging in, you agree to our Terms & Conditions.
        </Text>
        <TouchableOpacity onPress={toggleTheme} style={{ marginTop: 20 }}>
             <Text style={{ color: theme.colors.primary, textAlign: 'center' }}>
                 Switch to {isDark ? 'Light' : 'Dark'} Mode
             </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 8,
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 30,
    padding: 4,
  },
  roleButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  roleText: {
    fontWeight: 'bold',
  },
  formCard: {
    paddingVertical: 30,
  },
  loginBtn: {
    marginTop: 20,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 20,
  },
});
