// import React, { useEffect, useRef } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Provider, connect } from 'react-redux';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icons/Save';
// import axios from 'axios';
// import Cookies from 'universal-cookie';
// import { url } from '../../defaults/default';
// import PropTypes from 'prop-types';
// // core components
// import DescriptionIcon from '@material-ui/icons/Description';
// import GridContainer from '../../components/Grid/GridContainer.js';
// import GridItem from '../../components/Grid/GridItem.js';
// import Table from '../../components/Table/Table.js';
// import Danger from '../../components/Typography/Danger.js';
// import Card from '../../components/Card/Card.js';
// import CardHeader from '../../components/Card/CardHeader.js';
// import CardIcon from '../../components/Card/CardIcon.js';
// import CardBody from '../../components/Card/CardBody.js';
// import CardFooter from '../../components/Card/CardFooter.js';
// import Store from '@material-ui/icons/Store';
// import BuildIcon from '@material-ui/icons/Build';
// import styles from '../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js';
// import Warning from '@material-ui/icons/Warning';
// import DateRange from '@material-ui/icons/DateRange';
// import LocalOffer from '@material-ui/icons/LocalOffer';
// import Update from '@material-ui/icons/Update';
// import ArrowUpward from '@material-ui/icons/ArrowUpward';
// import AccessTime from '@material-ui/icons/AccessTime';
// import Refresh from '@material-ui/icons/Refresh';
// import Edit from '@material-ui/icons/Edit';
// import Place from '@material-ui/icons/Place';
// import ArtTrack from '@material-ui/icons/ArtTrack';
// import Language from '@material-ui/icons/Language';
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import PersonIcon from '@material-ui/icons/Person';

// import { Icon, InlineIcon } from '@iconify/react';
// import iRegistration from '@iconify/icons-medical-icon/i-registration';

// const useStyles = makeStyles(styles);
// const Add_New = () => {
//   const classes = useStyles();
//   const [countData, setCountData] = React.useState({
//     NumberPatient: 0,
//     NumberMen: 0,
//     NumberWomen: 0,
//   });

//   useEffect(() => {
//     async function fetchData() {
//       await axios
//         .get(url + '/api/stats/getCount')
//         .then((response) => {
//           setCountData({
//             NumberPatient: response.data.NumberPatient,
//             NumberMen: response.data.NumberMen,
//             NumberWomen: response.data.NumberWomen,
//           });
//         })
//         .catch((error) => console.log(error.response));
//     }
//     fetchData();
//   }, []);

//   return (
//     <Grid container spacing={0}>
//       <GridItem xs={12} sm={12} md={12} lg={4} height={100}>
//         <Card>
//           <CardHeader color='info' stats icon>
//             <CardIcon color='info'>
//               <Icon icon={iRegistration} height={40} />
//             </CardIcon>
//             <p className={classes.cardCategory}>Nombre Totale des Patients</p>
//             <h1 className={classes.cardTitle}>{countData.NumberPatient}</h1>
//           </CardHeader>
//           <CardFooter stats>
//             <div className={classes.stats}>
//               <Danger>
//                 <Warning />
//               </Danger>
//               Get more space
//             </div>
//           </CardFooter>
//         </Card>
//       </GridItem>
//       <GridItem xs={12} sm={12} md={12} lg={4}>
//         <Card>
//           <CardHeader color='success' stats icon>
//             <CardIcon color='success'>
//               <DescriptionIcon />
//             </CardIcon>
//             <p className={classes.cardCategory}>Nombre des Patients Femme</p>
//             <h1 className={classes.cardTitle}>{countData.NumberWomen}</h1>
//           </CardHeader>
//           <CardFooter stats>
//             <div className={classes.stats}>
//               <DateRange />
//               Last 24 Hours
//             </div>
//           </CardFooter>
//         </Card>
//       </GridItem>
//       <GridItem xs={12} sm={12} md={12} lg={4}>
//         <Card>
//           <CardHeader color='danger' stats icon>
//             <CardIcon color='warning'>
//               <BuildIcon />
//             </CardIcon>
//             <p className={classes.cardCategory}>Nombre des Patients Homme</p>
//             <h1 className={classes.cardTitle}>{countData.NumberMen}</h1>
//           </CardHeader>
//           <CardFooter stats>
//             <div className={classes.stats}>
//               <LocalOffer />
//               Tracked from Github
//             </div>
//           </CardFooter>
//         </Card>
//       </GridItem>
//     </Grid>
//   );
// };
// export default Add_New;

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
import { faFemale, faMale, faUser } from '@fortawesome/free-solid-svg-icons';
import { Icon, InlineIcon } from '@iconify/react';
import iRegistration from '@iconify/icons-medical-icon/i-registration';

const useStyles = makeStyles(styles);
const Add_New = (props) => {
  const classes = useStyles();
  // const [countData, setCountData] = React.useState({
  //   NumberPatient: 0,
  //   NumberMen: 0,
  //   NumberWomen: 0,
  // });

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(url + '/api/stats/getCount')
        .then((response) => {
          props.changeStates(
            response.data.NumberPatient,
            response.data.NumberMen,
            response.data.NumberWomen
          );
        })
        .catch((error) => console.log(error.response));
    }
    fetchData();
  }, []);
  const NumberPatient = props.NumberPatient;
  const NumberMen = props.NumberMen;
  const NumberWomen = props.NumberWomen;
  return (
    <Grid container spacing={0}>
      <GridItem xs={12} sm={12} md={12} lg={4} height={100}>
        <Card>
          <CardHeader color='info' stats icon>
            <CardIcon color='info'>
              <FontAwesomeIcon icon={faUser} size='4x' />
            </CardIcon>
            <p className={classes.cardCategory}>Nombre Totale des Patients</p>
            <h1 className={classes.cardTitle}>{NumberPatient}</h1>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}></div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12} lg={4}>
        <Card>
          <CardHeader color='danger' stats icon>
            <CardIcon color='danger'>
              <FontAwesomeIcon icon={faFemale} size='3x' />
            </CardIcon>
            <p className={classes.cardCategory}>Nombre des Patients Femme</p>
            <h1 className={classes.cardTitle}>{NumberWomen}</h1>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}></div>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12} lg={4}>
        <Card>
          <CardHeader color='danger' stats icon>
            <CardIcon color='warning'>
              <FontAwesomeIcon icon={faMale} size='4x' />
            </CardIcon>
            <p className={classes.cardCategory}>Nombre des Patients Homme</p>
            <h1 className={classes.cardTitle}>{NumberMen}</h1>
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
    changeStates: (NumberPatient, NumberMen, NumberWomen) => {
      dispatch({
        type: 'patientStates',
        NumberPatient: NumberPatient,
        NumberWomen: NumberWomen,
        NumberMen: NumberMen,
      });
    },
  };
};
const mapStateProps = (state) => {
  return {
    NumberPatient: state.nombreTotalePatient,
    NumberMen: state.nombrePatientHomme,
    NumberWomen: state.nombrePatientFemme,
  };
};
export default connect(mapStateProps, mapDispatchProps)(Add_New);
