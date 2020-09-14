import React from 'react';
import BuildIcon from '@material-ui/icons/Build';
const Configurations = () => (
    <div>
      Configurations
    </div>
);

export default {
    routeProps: {
        path: '/Configurations',
        component: Configurations

    },
    name: 'Configurations',
    icon:<BuildIcon fontSize='large' />,
}
