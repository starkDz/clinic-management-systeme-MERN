import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import FullScreenDialog from './FullScreenForm';
import SpeedDial from './SpeedDial';
import Add_New from './GlobaleStats';
import Call_Api from './ListePatient';
const Patient = () => (
  <div>
    <Add_New />
    <Call_Api />
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
