import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../theme/ThemeContext';

interface NeonButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  style?: ViewStyle;
  loading?: boolean;
}

export const NeonButton: React.FC<NeonButtonProps> = ({
  onPress,
  title,
  variant = 'primary',
  style,
  loading = false
}) => {
  const { theme } = useTheme();

  const getColors = () => {
    if (variant === 'secondary') return [theme.colors.secondary, '#9000FF'];
    if (variant === 'outline') return ['transparent', 'transparent'];
    return [theme.colors.gradientStart, theme.colors.gradientEnd];
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={loading}
      style={[
        styles.container,
        style,
        { shadowColor: variant === 'primary' ? theme.colors.primary : 'transparent' }
      ]}
    >
      <LinearGradient
        colors={getColors()}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[
          styles.gradient,
          variant === 'outline' && { borderWidth: 2, borderColor: theme.colors.primary }
        ]}
      >
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={[
            styles.text,
            variant === 'outline' && { color: theme.colors.primary }
          ]}>
            {title}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    marginVertical: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  gradient: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
