import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import FullScreenDialog from './FullScreenForm';
import SpeedDial from './SpeedDial';
const Patient = () => (
  <div>
    <FullScreenDialog />
    <SpeedDial />
  </div>
);

export default {
  routeProps: {
    path: '/Patient',
    component: Patient,
  },
  name: 'Patient',
  icon: <FontAwesomeIcon icon={faUser} size='2x' pull='right' />,
};
