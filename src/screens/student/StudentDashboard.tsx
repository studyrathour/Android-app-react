import React from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { NeonCard } from '../../components/NeonCard';
import { useTheme } from '../../theme/ThemeContext';
import { RootState } from '../../store';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MOCK_NOTIFICATIONS } from '../../services/mockData';

export const StudentDashboard = () => {
  const { theme } = useTheme();
  const user = useSelector((state: RootState) => state.auth.user);

  const StatCard = ({ title, value, icon, color }: any) => (
    <NeonCard style={styles.statCard}>
      <Icon name={icon} size={30} color={color} />
      <Text style={[styles.statValue, { color: theme.colors.text }]}>{value}</Text>
      <Text style={[styles.statTitle, { color: theme.colors.textSecondary }]}>{title}</Text>
    </NeonCard>
  );

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={[styles.greeting, { color: theme.colors.textSecondary }]}>Hello,</Text>
            <Text style={[styles.name, { color: theme.colors.text }]}>{user?.name}</Text>
          </View>
          <View style={[styles.avatarPlaceholder, { backgroundColor: theme.colors.primary }]}>
             <Text style={{ fontWeight: 'bold' }}>{user?.name?.charAt(0)}</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <StatCard title="Attendance" value="85%" icon="check-circle" color={theme.colors.success} />
          <StatCard title="CGPA" value="3.8" icon="school" color={theme.colors.secondary} />
          <StatCard title="Assignments" value="12/15" icon="book" color={theme.colors.warning} />
          <StatCard title="Rank" value="#5" icon="trending-up" color={theme.colors.primary} />
        </View>

        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Recent Notifications</Text>
        <FlatList
          data={MOCK_NOTIFICATIONS}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <NeonCard style={styles.notificationCard}>
              <View style={styles.notifHeader}>
                <Text style={[styles.notifTitle, { color: theme.colors.text }]}>{item.title}</Text>
                <Text style={[styles.notifDate, { color: theme.colors.textSecondary }]}>{item.date}</Text>
              </View>
              <Text style={{ color: theme.colors.textSecondary, marginTop: 5 }}>{item.message}</Text>
            </NeonCard>
          )}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  greeting: {
    fontSize: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  statTitle: {
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  notificationCard: {
    marginBottom: 10,
    padding: 15,
  },
  notifHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notifTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  notifDate: {
    fontSize: 12,
  },
});
