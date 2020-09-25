import React from 'react';
import TimelineIcon from '@material-ui/icons/Timeline';
import Add_New from './GlobaleStats';

import Demo from './test2';
const Statistique = () => (
  <div>
    <Add_New />
    <Demo />
  </div>
);

export default {
  routeProps: {
    path: '/Statistique',
    component: Statistique,
  },

  name: 'Statistique',
  icon: <TimelineIcon fontSize='large' />,
};
