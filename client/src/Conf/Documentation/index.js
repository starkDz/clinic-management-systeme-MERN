import React from 'react';
import DescriptionIcon from '@material-ui/icons/Description';


const Documentation = () => (
    <div>Documentation Module
    </div>

);

export default {
    routeProps: {
        path: '/Documentation',
        component: Documentation
    },

    name: 'Documentation',
    icon:<DescriptionIcon fontSize='large' />,
}
