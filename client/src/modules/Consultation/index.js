import React from 'react';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import SpeedDial from '../../template/SpeedDial';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
const Consultation = () => (
  <div>
    Consultation Module
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
