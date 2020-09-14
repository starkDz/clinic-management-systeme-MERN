import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import SpeedDial from '../../template/SpeedDial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
const Patient = () => (
  <div>
    <SpeedDial />
  </div>
);

export default {
  routeProps: {
    path: '/Patient',
    component: Patient,
  },
  name: 'Patient',
  icon: <FontAwesomeIcon icon={faHospitalUser} size='2x' />,
};
