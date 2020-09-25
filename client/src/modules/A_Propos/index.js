import React from 'react';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Add_New from './GlobaleStats';
const A_Propos = () => (
  <div padding={40} spacing={40} margin={40}>
    <Add_New />
  </div>
);

export default {
  routeProps: {
    path: '/A_Propos',
    component: A_Propos,
  },
  name: 'A Propos',
  icon: <ContactSupportIcon fontSize='large' color='primary' />,
};
