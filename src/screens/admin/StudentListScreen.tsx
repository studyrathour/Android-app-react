import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { NeonCard } from '../../components/NeonCard';
import { ModernInput } from '../../components/ModernInput';
import { useTheme } from '../../theme/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MOCK_STUDENT } from '../../services/mockData';

export const StudentListScreen = () => {
  const { theme } = useTheme();
  // Mock list for demo
  const [students, setStudents] = useState([MOCK_STUDENT, { ...MOCK_STUDENT, id: 'S002', name: 'Jane Smith', rollNumber: '1206' }]);
  const [search, setSearch] = useState('');

  const handleDelete = (id: string) => {
    Alert.alert('Delete Student', 'Are you sure?', [
      { text: 'Cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => setStudents(prev => prev.filter(s => s.id !== id)) }
    ]);
  };

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Manage Students</Text>
      </View>

      <ModernInput
        label="Search Student"
        placeholder="Name or Roll Number..."
        value={search}
        onChangeText={setSearch}
        iconName="search"
      />

      <FlatList
        data={students}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <NeonCard style={styles.studentCard}>
            <View style={styles.row}>
              <View style={[styles.avatar, { backgroundColor: theme.colors.surface }]}>
                 <Text style={{ fontSize: 20 }}>🎓</Text>
              </View>
              <View style={{ flex: 1, marginLeft: 15 }}>
                <Text style={[styles.name, { color: theme.colors.text }]}>{item.name}</Text>
                <Text style={{ color: theme.colors.textSecondary }}>Roll: {item.rollNumber} • {item.class}</Text>
              </View>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Icon name="delete" size={24} color={theme.colors.error} />
              </TouchableOpacity>
            </View>
          </NeonCard>
        )}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  studentCard: {
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
