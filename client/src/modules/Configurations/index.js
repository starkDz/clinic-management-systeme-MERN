import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
const Configurations = () => <div>Configurations</div>;

export default {
  routeProps: {
    path: '/Configurations',
    component: Configurations,
  },
  name: 'Configurations',
  icon: <SettingsIcon fontSize='large' />,
};
