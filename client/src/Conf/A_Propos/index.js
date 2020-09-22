import React from 'react';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
const A_Propos = () => <div>A propos</div>;

export default {
  routeProps: {
    path: '/A_Propos',
    component: A_Propos,
  },
  name: 'A Propos',
  icon: <ContactSupportIcon fontSize='large' color='primary' />,
};
