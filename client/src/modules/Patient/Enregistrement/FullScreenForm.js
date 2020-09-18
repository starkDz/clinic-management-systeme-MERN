import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Container,
  Fab,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import DescriptionIcon from '@material-ui/icons/Description';
import clsx from 'clsx';
import SaveIcon from '@material-ui/icons/Save';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { url } from '../../../defaults/default';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Cookies from 'universal-cookie';
import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Icon, InlineIcon } from '@iconify/react';
import iRegistration from '@iconify/icons-medical-icon/i-registration';

import PropTypes from 'prop-types';
axios.defaults.baseURL = url;
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  fateh: {
    position: 'fixed',
    bottom: theme.spacing(6),
    right: theme.spacing(11),
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function FullScreenDialogEnregistrement(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const cookies = new Cookies();

  const [formData, setFormData] = React.useState({});
  const {
    idPatient,
    nom,
    prenom,
    telephone,
    dateReservation,
    observation,
  } = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(url + '/api/patient/ById/' + props.identifier)
        .then((response) => {
          setFormData({
            idPatient: response.data._id,
            nom: response.data.nom,
            prenom: response.data.prenom,
            telephone: response.data.telephone,
          });
        })
        .catch((error) => console.log(error.response));
    }
    fetchData();
  }, []);

  const send = async (e) => {
    e.preventDefault();
    const element = {
      dateReservation,
      observation,
      idPatient,
    };

    try {
      const body = JSON.stringify(element);
      console.log(element);
      const res = await axios.post(url + '/api/rendezVous', body, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': cookies.get('token'),
        },
      });
      // setFormData({
      //   nom: '',
      //   prenom: '',
      //   telephone: '',
      //   dateReservation: '',
      //   observation: '',
      //   identifiant: '',
      // });
      props.sendData();
    } catch (err) {}
  };
  return (
    <Container maxWidth='md'>
      <div className={classes.root} lg={5}>
        <div className={classes.toolbar} />
        <Grid container spacing={2}>
          <Grid container justify='center' xs={12} sm={12} lg={12}>
            <Icon icon={iRegistration} height={100} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <TextField
              helperText=''
              fullWidth
              margin='normal'
              variant='outlined'
              name='nom'
              disabled
              value={nom}
            />
          </Grid>

          <Grid item xs={12} sm={12} lg={6}>
            <TextField
              helperText=''
              fullWidth
              margin='normal'
              variant='outlined'
              name='prenom'
              disabled
              value={prenom}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <TextField
              helperText=''
              fullWidth
              margin='normal'
              variant='outlined'
              disabled
              name='telephone'
              value={telephone}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={12}>
            <TextField
              placeholder='YYYY-MM-DD'
              style={{ margin: 0 }}
              helperText=''
              fullWidth
              type='date'
              name='dateReservation'
              value={dateReservation}
              onChange={(e) => onChange(e)}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <TextField
              label='Observation'
              placeholder='Observation'
              helperText=''
              fullWidth
              margin='normal'
              variant='outlined'
              name='observation'
              value={observation}
              onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={10}>
            <Button
              variant='contained'
              color='primary'
              size='large'
              onClick={send}
            >
              Ajouter le Rendez Vous
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
