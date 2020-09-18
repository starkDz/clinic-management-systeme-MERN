import React from 'react';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
// npm install --save-dev @iconify/react @iconify/icons-medical-icon
import { Icon, InlineIcon } from '@iconify/react';
import iRegistration from '@iconify/icons-medical-icon/i-registration';
import SpeedDial from './SpeedDial';
import Add_New from './GlobaleStats';
import Call_Api from './ListeRendezVous';
const Enregistrement = () => (
  <div>
    <Add_New />
    <Call_Api />
    <SpeedDial />
  </div>
);

export default {
  routeProps: {
    path: '/Enregistrement',
    component: Enregistrement,
  },
  name: 'Enregistrement',
  icon: <Icon icon={iRegistration} height={40} />,
};
