import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import FullScreenDialog from './FullScreenForm';
import SpeedDial from './SpeedDial';
import CenteredTabs from './Tabs';
import MediaCard from './Items';
import Add_New from './GlobaleStats';
const Consultation = () => (
  <div>
    <Add_New />
    <MediaCard />
    <SpeedDial />
  </div>
);

export default {
  routeProps: {
    path: '/Consultation',
    component: Consultation,
  },

  name: 'Consultation',
  icon: <FontAwesomeIcon icon={faUserMd} size='2x' />,
};
