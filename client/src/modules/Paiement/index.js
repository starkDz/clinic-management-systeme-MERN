import React from 'react';
import PaymentIcon from '@material-ui/icons/Payment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
const Paiement = () => <div>Paiement Module</div>;

export default {
  routeProps: {
    path: '/Paiement',
    component: Paiement,
  },

  name: 'Paiement',
  icon: <PaymentIcon fontSize='large' />,
};
