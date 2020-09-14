import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Call_Api from './ListeRendezVous';
const Dashboard = () => (
  <div>
    <Call_Api />
  </div>
);

export default {
  routeProps: {
    path: '/Dashboard',
    component: Dashboard,
  },
  name: 'Dashboard',
  icon: <HomeIcon fontSize='large' />,
};
