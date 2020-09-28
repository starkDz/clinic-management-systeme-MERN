import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import SpeedDial from './SpeedDial';
import Add_New from './GlobaleStats';
import Call_Api from './ListePatient';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
const Patient = () => (
  <div>
    <Add_New />
    <Call_Api />
    <SpeedDial />
  </div>
);

export default {
  routeProps: {
    path: '/Patient',
    component: Patient,
  },
  name: 'Patient',
  icon: <PeopleAltIcon fontSize='large' />,
};
