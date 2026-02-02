import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { NeonCard } from '../../components/NeonCard';
import { useTheme } from '../../theme/ThemeContext';
import { MOCK_EVENTS } from '../../services/mockData';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const EventsScreen = () => {
  const { theme } = useTheme();

  return (
    <ScreenWrapper>
      <Text style={[styles.title, { color: theme.colors.text }]}>Upcoming Events</Text>
      <FlatList
        data={MOCK_EVENTS}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item, index }) => (
          <View style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
               <View style={[styles.dot, { backgroundColor: theme.colors.primary }]} />
               {index < MOCK_EVENTS.length - 1 && (
                 <View style={[styles.line, { backgroundColor: theme.colors.border }]} />
               )}
            </View>
            <View style={styles.timelineContent}>
              <NeonCard style={styles.eventCard}>
                <View style={styles.eventHeader}>
                  <Text style={[styles.eventTitle, { color: theme.colors.text }]}>{item.title}</Text>
                  <View style={[styles.dateBadge, { backgroundColor: theme.colors.surface }]}>
                    <Text style={{ color: theme.colors.primary, fontSize: 12 }}>{item.date}</Text>
                  </View>
                </View>
                <Text style={{ color: theme.colors.textSecondary, marginVertical: 8 }}>
                  {item.description}
                </Text>
                <View style={styles.locationRow}>
                  <Icon name="location-on" size={16} color={theme.colors.secondary} />
                  <Text style={{ color: theme.colors.textSecondary, marginLeft: 5 }}>
                    {item.location}
                  </Text>
                </View>
              </NeonCard>
            </View>
          </View>
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
  timelineItem: {
    flexDirection: 'row',
  },
  timelineLeft: {
    alignItems: 'center',
    width: 30,
    marginRight: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  line: {
    width: 2,
    flex: 1,
    marginTop: 5,
  },
  timelineContent: {
    flex: 1,
  },
  eventCard: {
    marginBottom: 15,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
