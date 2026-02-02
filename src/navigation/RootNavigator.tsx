import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { StudentNavigator } from './StudentNavigator';
import { AdminNavigator } from './AdminNavigator';
import { useTheme } from '../theme/ThemeContext';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const { isAuthenticated, role } = useSelector((state: RootState) => state.auth);
  const { isDark, theme } = useTheme();

  const navigationTheme = isDark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar
         barStyle={isDark ? 'light-content' : 'dark-content'}
         backgroundColor={theme.colors.background}
      />
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: true }}>
        {!isAuthenticated ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : role === 'student' ? (
          <Stack.Screen name="StudentApp" component={StudentNavigator} />
        ) : (
          <Stack.Screen name="AdminApp" component={AdminNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
