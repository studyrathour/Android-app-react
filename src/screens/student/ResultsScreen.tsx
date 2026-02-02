import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { NeonCard } from '../../components/NeonCard';
import { useTheme } from '../../theme/ThemeContext';
import { MOCK_RESULTS } from '../../services/mockData';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ResultsScreen = () => {
  const { theme } = useTheme();

  return (
    <ScreenWrapper>
      <Text style={[styles.title, { color: theme.colors.text }]}>Exam Results</Text>

      <NeonCard style={styles.summaryCard}>
        <Text style={[styles.summaryTitle, { color: theme.colors.textSecondary }]}>CGPA</Text>
        <Text style={[styles.cgpa, { color: theme.colors.primary }]}>3.8</Text>
        <Text style={{ color: theme.colors.textSecondary }}>Semester 1 • 2023</Text>
      </NeonCard>

      <FlatList
        data={MOCK_RESULTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NeonCard style={styles.resultCard}>
            <View style={styles.row}>
              <View style={styles.subjectContainer}>
                <View style={[styles.iconBox, { backgroundColor: theme.colors.surface }]}>
                  <Icon name="book" size={24} color={theme.colors.secondary} />
                </View>
                <View>
                   <Text style={[styles.subject, { color: theme.colors.text }]}>{item.subject}</Text>
                   <Text style={{ color: theme.colors.textSecondary }}>{item.semester}</Text>
                </View>
              </View>

              <View style={styles.marksContainer}>
                <Text style={[styles.marks, { color: theme.colors.text }]}>{item.marks}/{item.total}</Text>
                <Text style={[styles.grade, { color: theme.colors.success }]}>{item.grade}</Text>
              </View>
            </View>

            {/* Progress Bar Mock */}
            <View style={[styles.progressBg, { backgroundColor: theme.colors.border }]}>
               <View
                 style={[
                   styles.progressFill,
                   {
                     backgroundColor: theme.colors.primary,
                     width: `${(item.marks / item.total) * 100}%`
                   }
                 ]}
               />
            </View>
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
  summaryCard: {
    alignItems: 'center',
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  cgpa: {
    fontSize: 48,
    fontWeight: '900',
    marginVertical: 10,
  },
  resultCard: {
    padding: 15,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  subjectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  subject: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  marksContainer: {
    alignItems: 'flex-end',
  },
  marks: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  grade: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  progressBg: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
});
