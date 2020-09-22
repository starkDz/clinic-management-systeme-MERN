import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ViewListIcon from '@material-ui/icons/ViewList';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DossierMedicale from './DossierMedicale';
import { url } from '../../defaults/default';
import axios from 'axios';
import { connect } from 'react-redux';
axios.defaults.baseURL = url;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={2}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    textTransform: 'none',
  },
}));

const ScrollableTabsButtonForce = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [idPatient, setIdPatient] = React.useState(props.identifier);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    props.changeStatesCurrentPatient(props.identifier);
  }, []);

  return (
    <div className={classes.root} id='ConfigurationContent'>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons='on'
          indicatorColor='primary'
          textColor='primary'
          aria-label='scrollable force tabs example'
          variant='fullWidth'
          centered
        >
          <Tab
            className={classes.tab}
            label='Visualiser le Dossier Medicale'
            icon={<ViewListIcon fontSize='large' />}
            {...a11yProps(0)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.content}>
        <DossierMedicale idPatient={idPatient} />
      </TabPanel>
    </div>
  );
};

const mapDispatchProps = (dispatch) => {
  return {
    changeStatesCurrentPatient: (idPatient) => {
      dispatch({
        type: 'currentPatient',
        idPatient: idPatient,
      });
    },
  };
};
const mapStateProps = (state) => {
  return {};
};
export default connect(
  mapStateProps,
  mapDispatchProps
)(ScrollableTabsButtonForce);
