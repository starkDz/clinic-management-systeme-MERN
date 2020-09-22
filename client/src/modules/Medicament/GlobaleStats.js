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
import Danger from '../../components/Typography/Danger.js';
import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardIcon from '../../components/Card/CardIcon.js';
import CardFooter from '../../components/Card/CardFooter.js';
import styles from '../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js';
import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules, faUser } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(styles);
const Add_New = () => {
  const classes = useStyles();
  const [countData, setCountData] = React.useState({
    NumberMedicament: 0,
    NumberPatient: 0,
  });

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(url + '/api/stats/getCount')
        .then((response) => {
          setCountData({
            NumberMedicament: response.data.NumberMedicament,
            NumberPatient: response.data.NumberPatient,
          });
        })
        .catch((error) => console.log(error.response));
    }
    fetchData();
  }, []);

  return (
    <Grid container spacing={0}>
      <GridItem xs={12} sm={12} md={12} lg={6} height={100}>
        <Card>
          <CardHeader color='danger' stats icon>
            <CardIcon color='danger'>
              <FontAwesomeIcon icon={faCapsules} size='2x' />
            </CardIcon>
            <p className={classes.cardCategory}>
              Nombre des Medicaments inscrits
            </p>
            <h1 className={classes.cardTitle}>{countData.NumberMedicament}</h1>
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
              <FontAwesomeIcon icon={faUser} size='2x' />
            </CardIcon>
            <p className={classes.cardCategory}>Nombre Totale des patients</p>
            <h1 className={classes.cardTitle}>{countData.NumberPatient}</h1>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}></div>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  );
};
export default Add_New;
