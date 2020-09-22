import React from 'react';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import SpeedDial from './SpeedDial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules, faPills } from '@fortawesome/free-solid-svg-icons';
import Add_New from './GlobaleStats';
import Call_Api from './ListeRendezVous';
const Medicament = () => (
  <div>
    <Add_New />
    <Call_Api />
    <SpeedDial height='50%' />
  </div>
);

export default {
  routeProps: {
    path: '/Medicament',
    component: Medicament,
  },

  name: 'Medicament',
  icon: <FontAwesomeIcon icon={faPills} size='2x' />,
};
