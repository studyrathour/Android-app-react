import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StudentDashboard } from '../screens/student/StudentDashboard';
import { EventsScreen } from '../screens/student/EventsScreen';
import { DigitalIDScreen } from '../screens/student/DigitalIDScreen';
import { FeesScreen } from '../screens/student/FeesScreen';
import { ResultsScreen } from '../screens/student/ResultsScreen';
import { ProfileScreen } from '../screens/student/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../theme/ThemeContext';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export const StudentNavigator = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          height: 60,
          paddingBottom: 5,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={StudentDashboard}
        options={{
          tabBarIcon: ({ color }) => <Icon name="dashboard" size={28} color={color} />
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="event" size={28} color={color} />
        }}
      />
      <Tab.Screen
        name="ID Card"
        component={DigitalIDScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{
              marginTop: -20,
              backgroundColor: theme.colors.primary,
              padding: 15,
              borderRadius: 35,
              shadowColor: theme.colors.primary,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.5,
              shadowRadius: 8,
              elevation: 5
            }}>
              <Icon name="badge" size={30} color="#FFF" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Results"
        component={ResultsScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="assessment" size={28} color={color} />
        }}
      />
      <Tab.Screen
         name="Profile"
         component={ProfileScreen}
         options={{
            tabBarIcon: ({ color }) => <Icon name="person" size={28} color={color} />
         }}
      />
      <Tab.Screen
        name="Fees"
        component={FeesScreen}
        options={{
          tabBarButton: () => null
        }}
      />
    </Tab.Navigator>
  );
};
