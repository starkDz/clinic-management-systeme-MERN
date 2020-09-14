import React from 'react';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
// npm install --save-dev @iconify/react @iconify/icons-medical-icon
import { Icon, InlineIcon } from '@iconify/react';
import iRegistration from '@iconify/icons-medical-icon/i-registration';

const Enregistrement = () => <div>Enregistrement</div>;

export default {
  routeProps: {
    path: '/Enregistrement',
    component: Enregistrement,
  },
  name: 'Enregistrement',
  icon: <Icon icon={iRegistration} height={40} />,
};
