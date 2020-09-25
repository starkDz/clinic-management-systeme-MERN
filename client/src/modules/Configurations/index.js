import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import FloatingActionButtonSize from './test1';
import Ordonnance from './test1';
import Demo from './test2';
import MyDocument from './PDF';
const Configurations = () => (
  <div>
    <Demo />
    <Ordonnance />
  </div>
);

export default {
  routeProps: {
    path: '/Configurations',
    component: Configurations,
  },
  name: 'Configurations',
  icon: <SettingsIcon fontSize='large' />,
};
