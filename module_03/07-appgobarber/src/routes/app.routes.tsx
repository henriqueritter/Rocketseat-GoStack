import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import CreateAppointment from '../pages/CreateAppointment';
import AppointmentCreated from '../pages/AppointmentCreated';

import Profile from '../pages/Profile';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false, // Parametro para remover o header das activity
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    {/* Fluxo de criacao de appointments */}
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="CreateAppointment" component={CreateAppointment} />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} />

    {/* Fluxo de profile */}
    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;