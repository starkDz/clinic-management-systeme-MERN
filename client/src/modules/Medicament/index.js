import React from 'react';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import FullScreenDialog from './FullScreenForm';
import SpeedDial from './SpeedDial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules } from '@fortawesome/free-solid-svg-icons';
const Medicament = () => (
  <div>
    <FullScreenDialog />
    <SpeedDial height='50%' />
  </div>
);

export default {
  routeProps: {
    path: '/Medicament',
    component: Medicament,
  },

  name: 'Medicament',
  icon: <FontAwesomeIcon icon={faCapsules} size='2x' pull='right' />,
};
