import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children, style }) => {
  const { theme, isDark } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <View style={[styles.content, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
