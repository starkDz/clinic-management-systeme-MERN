import React from 'react';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import SpeedDial from '../../template/SpeedDial';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
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
  icon: <FontAwesomeIcon icon={faHospitalUser} size='2x' />,
};
