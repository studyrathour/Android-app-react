import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AdminDashboard } from '../screens/admin/AdminDashboard';
import { StudentListScreen } from '../screens/admin/StudentListScreen';
import { NotificationSenderScreen } from '../screens/admin/NotificationSenderScreen';
import { ProfileScreen } from '../screens/student/ProfileScreen'; // Reusing profile for logout

const Stack = createStackNavigator();

export const AdminNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="StudentList" component={StudentListScreen} />
      <Stack.Screen name="SendNotification" component={NotificationSenderScreen} />
      {/* Admin can also access Profile to logout */}
      <Stack.Screen name="AdminProfile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
