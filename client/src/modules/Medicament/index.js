import React from 'react';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import SpeedDial from '../../template/SpeedDial';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules } from '@fortawesome/free-solid-svg-icons';
const Medicament = () => (
  <div>
    Medicament Module
    <SpeedDial />
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
