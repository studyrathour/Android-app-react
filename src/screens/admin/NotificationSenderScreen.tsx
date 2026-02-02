import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { NeonCard } from '../../components/NeonCard';
import { ModernInput } from '../../components/ModernInput';
import { NeonButton } from '../../components/NeonButton';
import { useTheme } from '../../theme/ThemeContext';

export const NotificationSenderScreen = ({ navigation }: any) => {
  const { theme } = useTheme();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!title || !message) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'Notification Broadcasted Successfully!');
      navigation.goBack();
    }, 1500);
  };

  return (
    <ScreenWrapper>
      <Text style={[styles.title, { color: theme.colors.text }]}>Send Notification</Text>

      <NeonCard>
        <ModernInput
          label="Title"
          placeholder="e.g. Holiday Announcement"
          value={title}
          onChangeText={setTitle}
        />
        <ModernInput
          label="Message"
          placeholder="Enter details..."
          multiline
          numberOfLines={4}
          style={{ height: 100, textAlignVertical: 'top' }}
          value={message}
          onChangeText={setMessage}
        />

        <NeonButton
          title="Broadcast Alert"
          onPress={handleSend}
          loading={loading}
          variant="primary"
        />
      </NeonCard>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
