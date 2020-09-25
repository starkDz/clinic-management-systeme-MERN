import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Provider, connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import DescriptionIcon from '@material-ui/icons/Description';
// import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
// import Table from '../../components/Table/Table.js';
// import Danger from '../../components/Typography/Danger.js';
import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardIcon from '../../components/Card/CardIcon.js';
// import CardBody from '../../components/Card/CardBody.js';
import CardFooter from '../../components/Card/CardFooter.js';
// import Store from '@material-ui/icons/Store';
import BuildIcon from '@material-ui/icons/Build';
import styles from '../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFemale,
  faMale,
  faUser,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons';
const useStyles = makeStyles(styles);
const Add_New = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={30}>
      <GridItem xs={12} sm={12} md={12} lg={12}>
        <Card>
          <CardHeader color='danger' stats icon>
            <CardIcon color='danger'>
              <FontAwesomeIcon icon={faUser} size='4x' />
            </CardIcon>
            <p className={classes.cardCategory}>Nombre Totale des patients</p>
            <h1 className={classes.cardTitle}></h1>
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
