import React from 'react';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import FullScreenDialog from './FullScreenForm';
import SpeedDial from './SpeedDial';
const Consultation = () => (
  <div>
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
  icon: <FontAwesomeIcon icon={faUserMd} size='2x' pull='right' />,
};
