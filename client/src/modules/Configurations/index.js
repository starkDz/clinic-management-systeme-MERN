import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import FloatingActionButtonSize from './test1';
import MultilineTextFields from './test2';
import MyDocument from './PDF';
const Configurations = () => <div>{/* <MyDocument /> */}</div>;

export default {
  routeProps: {
    path: '/Configurations',
    component: Configurations,
  },
  name: 'Configurations',
  icon: <SettingsIcon fontSize='large' />,
};
