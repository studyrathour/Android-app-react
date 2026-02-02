import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { NeonCard } from '../../components/NeonCard';
import { useTheme } from '../../theme/ThemeContext';
import { RootState } from '../../store';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const AdminDashboard = ({ navigation }: any) => {
  const { theme } = useTheme();
  const user = useSelector((state: RootState) => state.auth.user);

  const ActionButton = ({ title, icon, color, onPress }: any) => (
    <TouchableOpacity onPress={onPress} style={[styles.actionBtn, { backgroundColor: theme.colors.surface }]}>
      <Icon name={icon} size={30} color={color} />
      <Text style={[styles.actionText, { color: theme.colors.text }]}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.colors.text }]}>Admin Panel</Text>
          <Text style={{ color: theme.colors.textSecondary }}>Welcome, {user?.name}</Text>
        </View>

        <View style={styles.statsContainer}>
          <NeonCard style={styles.statCard}>
            <Text style={[styles.statValue, { color: theme.colors.primary }]}>1,250</Text>
            <Text style={{ color: theme.colors.textSecondary }}>Total Students</Text>
          </NeonCard>
          <NeonCard style={styles.statCard}>
            <Text style={[styles.statValue, { color: theme.colors.success }]}>$45k</Text>
            <Text style={{ color: theme.colors.textSecondary }}>Fees Collected</Text>
          </NeonCard>
        </View>

        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <ActionButton
            title="Manage Students"
            icon="people"
            color={theme.colors.primary}
            onPress={() => navigation.navigate('StudentList')}
          />
          <ActionButton
            title="Send Alert"
            icon="notifications-active"
            color={theme.colors.error}
            onPress={() => navigation.navigate('SendNotification')}
          />
          <ActionButton
            title="Upload Results"
            icon="upload-file"
            color={theme.colors.warning}
            onPress={() => {}}
          />
          <ActionButton
            title="Fees"
            icon="attach-money"
            color={theme.colors.success}
            onPress={() => {}}
          />
        </View>

        <NeonCard title="Recent Activity">
           <Text style={{ color: theme.colors.textSecondary, marginBottom: 5 }}>• New admission request from John Doe</Text>
           <Text style={{ color: theme.colors.textSecondary, marginBottom: 5 }}>• Results uploaded for Grade 10</Text>
           <Text style={{ color: theme.colors.textSecondary }}>• System maintenance scheduled</Text>
        </NeonCard>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    width: '48%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionBtn: {
    width: '48%',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
  },
  actionText: {
    marginTop: 10,
    fontWeight: '600',
  },
});
