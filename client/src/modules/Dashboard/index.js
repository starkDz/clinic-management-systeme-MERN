import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import Call_Api from './ListeRendezVous';
import Add_New from './GlobaleStats';
import SpeedDials from './SpeedDial';
import DatePicker from './datePicker';
const Dashboard = () => (
  <div>
    <DatePicker />
    <Add_New />
    <Call_Api />
    <SpeedDials />
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
