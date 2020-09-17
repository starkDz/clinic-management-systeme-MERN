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
import { url } from '../../../defaults/default';
import PropTypes from 'prop-types';
// core components
import DescriptionIcon from '@material-ui/icons/Description';
import GridContainer from '../../../components/Grid/GridContainer.js';
import GridItem from '../../../components/Grid/GridItem.js';
import Call_Api from './ListeRendezVous.js';
import Table from '../../../components/Table/Table.js';
import Danger from '../../../components/Typography/Danger.js';
import Card from '../../../components/Card/Card.js';
import CardHeader from '../../../components/Card/CardHeader.js';
import CardIcon from '../../../components/Card/CardIcon.js';
import CardBody from '../../../components/Card/CardBody.js';
import CardFooter from '../../../components/Card/CardFooter.js';
import Store from '@material-ui/icons/Store';
import BuildIcon from '@material-ui/icons/Build';
import styles from '../../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js';
import { Icon, InlineIcon } from '@iconify/react';
import iRegistration from '@iconify/icons-medical-icon/i-registration';

const useStyles = makeStyles(styles);

const DossierMedicale = (props) => {
  const classes = useStyles();
  const [data, setData] = React.useState({
    nom: '',
    prenom: '',
    nombreVisite: 0,
    derniereVisite: '/',
  });

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(url + '/api/rendezVous/' + props.identifier)
        .then((response) => {
          setData({
            nom: response.data.idPatient.nom,
            prenom: response.data.idPatient.prenom,
          });
        })
        .catch((error) => console.log(error.response));
    }
    fetchData();
  }, []);
  return (
    <Grid container spacing={0}>
      <GridItem xs={12} sm={12} md={12} lg={4} height={100}>
        <Card>
          <CardHeader color='info' stats icon>
            <CardIcon color='info'>
              <Icon icon={iRegistration} height={40} />
            </CardIcon>
            <h1 className={classes.cardTitle}>
              {data.nom} {data.prenom}
            </h1>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}></div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12} lg={4} height={100}>
        <Card>
          <CardHeader color='info' stats icon>
            <CardIcon color='info'>
              <Icon icon={iRegistration} height={40} />
            </CardIcon>
            <p className={classes.cardCategory}>
              Nombre des Visites de ce Malade
            </p>
            <h1 className={classes.cardTitle}>0</h1>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}></div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12} lg={4} height={100}>
        <Card>
          <CardHeader color='info' stats icon>
            <CardIcon color='info'>
              <Icon icon={iRegistration} height={40} />
            </CardIcon>
            <p className={classes.cardCategory}>Derniere Visite</p>
            <h1 className={classes.cardTitle}>09/05/2020 </h1>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}></div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12} lg={12} height={100}>
        <Call_Api />
      </GridItem>
    </Grid>
  );
};

export default DossierMedicale;
