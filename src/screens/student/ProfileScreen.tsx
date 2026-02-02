import React from 'react';
import { StyleSheet, View, Text, ScrollView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { NeonCard } from '../../components/NeonCard';
import { NeonButton } from '../../components/NeonButton';
import { ModernInput } from '../../components/ModernInput';
import { useTheme } from '../../theme/ThemeContext';
import { RootState } from '../../store';
import { logout } from '../../store/authSlice';

export const ProfileScreen = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', onPress: () => dispatch(logout()), style: 'destructive' },
    ]);
  };

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={[styles.avatar, { borderColor: theme.colors.primary }]}>
            <Text style={{ fontSize: 40 }}>👤</Text>
          </View>
          <Text style={[styles.name, { color: theme.colors.text }]}>{user?.name}</Text>
          <Text style={{ color: theme.colors.textSecondary }}>{(user as any)?.role === 'admin' ? 'Administrator' : 'Student'}</Text>
        </View>

        <NeonCard title="Personal Information" style={styles.section}>
          <ModernInput label="Full Name" value={user?.name} editable={false} />
          <ModernInput label="Email" value={user?.email} editable={false} />
          {/* Add more fields as needed */}
        </NeonCard>

        <NeonButton
          title="Logout"
          onPress={handleLogout}
          variant="outline"
          style={styles.logoutBtn}
        />

        <Text style={[styles.version, { color: theme.colors.textSecondary }]}>
          Version 1.0.0 (Build 102)
        </Text>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginVertical: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
  },
  logoutBtn: {
    marginTop: 10,
    marginBottom: 20,
  },
  version: {
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 12,
  },
});
