import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { NeonCard } from '../../components/NeonCard';
import { useTheme } from '../../theme/ThemeContext';
import { RootState } from '../../store';
import LinearGradient from 'react-native-linear-gradient';

export const DigitalIDScreen = () => {
  const { theme } = useTheme();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <ScreenWrapper style={styles.container}>
      <Text style={[styles.screenTitle, { color: theme.colors.text }]}>Digital ID Card</Text>

      <NeonCard style={styles.idCard}>
        <LinearGradient
          colors={[theme.colors.primary, theme.colors.secondary]}
          style={styles.headerGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.schoolName}>MY SCHOOL</Text>
          <Text style={styles.session}>2023 - 2024</Text>
        </LinearGradient>

        <View style={styles.content}>
          <View style={[styles.avatarContainer, { borderColor: theme.colors.primary }]}>
             {/* Placeholder for Avatar */}
             <Text style={{ fontSize: 40 }}>🎓</Text>
          </View>

          <Text style={[styles.studentName, { color: theme.colors.text }]}>{user?.name}</Text>
          <Text style={[styles.studentRole, { color: theme.colors.textSecondary }]}>Student</Text>

          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Text style={[styles.label, { color: theme.colors.textSecondary }]}>ID No.</Text>
              <Text style={[styles.value, { color: theme.colors.text }]}>{user?.id}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={[styles.label, { color: theme.colors.textSecondary }]}>Class</Text>
              <Text style={[styles.value, { color: theme.colors.text }]}>{(user as any)?.class}</Text>
            </View>
          </View>

          <View style={styles.qrPlaceholder}>
             <Text style={{ color: '#000' }}>QR CODE</Text>
          </View>
        </View>
      </NeonCard>

      <Text style={{ textAlign: 'center', marginTop: 20, color: theme.colors.textSecondary }}>
        This is an official digital identification card.
      </Text>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  idCard: {
    padding: 0,
    overflow: 'hidden',
    borderWidth: 0,
  },
  headerGradient: {
    padding: 20,
    alignItems: 'center',
  },
  schoolName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 2,
  },
  session: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
    backgroundColor: '#FFF',
  },
  studentName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  studentRole: {
    fontSize: 16,
    marginBottom: 20,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  detailItem: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  qrPlaceholder: {
    width: 150,
    height: 50,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
