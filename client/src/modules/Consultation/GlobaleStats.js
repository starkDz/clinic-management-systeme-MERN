import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Provider, connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { url } from '../../defaults/default';
import PropTypes from 'prop-types';
// core components
import DescriptionIcon from '@material-ui/icons/Description';
import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
import Table from '../../components/Table/Table.js';
import Danger from '../../components/Typography/Danger.js';
import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardIcon from '../../components/Card/CardIcon.js';
import CardBody from '../../components/Card/CardBody.js';
import CardFooter from '../../components/Card/CardFooter.js';
import Store from '@material-ui/icons/Store';
import BuildIcon from '@material-ui/icons/Build';
import styles from '../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js';
import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import Refresh from '@material-ui/icons/Refresh';
import Edit from '@material-ui/icons/Edit';
import Place from '@material-ui/icons/Place';
import ArtTrack from '@material-ui/icons/ArtTrack';
import Language from '@material-ui/icons/Language';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PersonIcon from '@material-ui/icons/Person';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { Icon, InlineIcon } from '@iconify/react';
import iRegistration from '@iconify/icons-medical-icon/i-registration';

const useStyles = makeStyles(styles);
const Add_New = (props) => {
  const classes = useStyles();
  const NumberRendezVous = props.nombreTotaleRendezVous;
  const NumberRendezVousValide = props.nombreTotalePatientTraite;

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(url + '/api/stats/getCount')
        .then((response) => {
          props.setNumberPatientTraite(response.data.NumberRendezVousValide);
          props.setNumberRendezVous(response.data.NumberRendezVous);
        })
        .catch((error) => console.log(error.response));
    }
    fetchData();
  }, []);

  return (
    <Grid container spacing={0}>
      <GridItem xs={12} sm={12} md={12} lg={6} height={100}>
        <Card>
          <CardHeader color='info' stats icon>
            <CardIcon color='info'>
              <Icon icon={iRegistration} height={40} />
            </CardIcon>
            <p className={classes.cardCategory}>Nombre des Rendez Vous</p>
            <h1 className={classes.cardTitle}>{NumberRendezVous}</h1>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}></div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12} lg={6}>
        <Card>
          <CardHeader color='success' stats icon>
            <CardIcon color='success'>
              <FontAwesomeIcon icon={faUserCheck} size='2x' />
            </CardIcon>
            <p className={classes.cardCategory}>Nombre des Patients traites</p>
            <h1 className={classes.cardTitle}>{NumberRendezVousValide}</h1>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}></div>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  );
};
const mapDispatchProps = (dispatch) => {
  return {
    setNumberRendezVous: (nombreTotaleRendezVous) => {
      dispatch({
        type: 'numberRendezVous',
        nombreTotaleRendezVous: nombreTotaleRendezVous,
      });
    },
    setNumberPatientTraite: (nombreTotalePatientTraite) => {
      dispatch({
        type: 'numberRendezVousTraite',
        nombreTotalePatientTraite: nombreTotalePatientTraite,
      });
    },
  };
};
const mapStateProps = (state) => {
  return {
    nombreTotalePatientTraite: state.nombreTotalePatientTraite,
    nombreTotaleRendezVous: state.nombreTotaleRendezVous,
  };
};
export default connect(mapStateProps, mapDispatchProps)(Add_New);
