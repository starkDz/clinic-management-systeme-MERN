import React from 'react';
import TimelineIcon from '@material-ui/icons/Timeline';
import Add_New from './GlobaleStats';

const Statistique = () => (
  <div>
    <Add_New />
    <Add_New />
    <Add_New />
  </div>
);

export default {
  routeProps: {
    path: '/Statistique',
    component: Statistique,
  },

  name: 'Statistique',
  icon: <TimelineIcon fontSize='large' color='primary' />,
};
