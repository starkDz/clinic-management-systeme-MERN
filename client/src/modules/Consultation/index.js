import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import FullScreenDialog from './FullScreenForm';
import SpeedDial from './SpeedDial';
import CenteredTabs from './Tabs';
const Consultation = () => (
  <div>
    <CenteredTabs />
    <FullScreenDialog />
    <SpeedDial />
  </div>
);

export default {
  routeProps: {
    path: '/Consultation',
    component: Consultation,
  },

  name: 'Consultation',
  icon: (
    <FontAwesomeIcon icon={faUserMd} size='2x' pull='right' color='#3f51b5' />
  ),
};
