import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { NeonCard } from '../../components/NeonCard';
import { useTheme } from '../../theme/ThemeContext';
import { MOCK_FEES } from '../../services/mockData';
import { NeonButton } from '../../components/NeonButton';

export const FeesScreen = () => {
  const { theme } = useTheme();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return theme.colors.success;
      case 'due': return theme.colors.warning;
      case 'overdue': return theme.colors.error;
      default: return theme.colors.text;
    }
  };

  return (
    <ScreenWrapper>
      <Text style={[styles.title, { color: theme.colors.text }]}>Fee Status</Text>
      <FlatList
        data={MOCK_FEES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NeonCard style={styles.card}>
            <View style={styles.row}>
              <View>
                <Text style={[styles.feeTitle, { color: theme.colors.text }]}>{item.title}</Text>
                <Text style={[styles.dueDate, { color: theme.colors.textSecondary }]}>Due: {item.dueDate}</Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={[styles.amount, { color: theme.colors.text }]}>${item.amount}</Text>
                <View style={[styles.statusBadge, { borderColor: getStatusColor(item.status) }]}>
                  <Text style={{ color: getStatusColor(item.status), fontWeight: 'bold', fontSize: 12 }}>
                    {item.status.toUpperCase()}
                  </Text>
                </View>
              </View>
            </View>
            {item.status !== 'paid' && (
              <NeonButton
                title="Pay Now"
                onPress={() => {}}
                style={styles.payBtn}
                variant="primary"
              />
            )}
          </NeonCard>
        )}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  card: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dueDate: {
    marginTop: 5,
    fontSize: 14,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statusBadge: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
  },
  payBtn: {
    marginTop: 15,
  },
});
