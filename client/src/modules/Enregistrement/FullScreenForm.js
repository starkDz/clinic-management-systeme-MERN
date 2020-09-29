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
import { url } from '../../defaults/default';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Cookies from 'universal-cookie';
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Icon, InlineIcon } from '@iconify/react';
import iRegistration from '@iconify/icons-medical-icon/i-registration';
import { connect } from 'react-redux';
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

const FullScreenDialog = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const cookies = new Cookies();

  const d = new Date();
  const month = ('0' + (d.getMonth() + 1)).slice(-2);
  const [formData, setFormData] = React.useState({
    dateReservation: '',
    // dateReservation: d.getFullYear() + '-' + month + '-' + d.getDate(),
    observation: '/',
  });
  const {
    idPatient,
    nom,
    prenom,
    telephone,
    dateReservation,
    observation,
    identifiant,
  } = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onChangeId = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      nom: '',
      prenom: '',
      telephone: '',
    });
    fetch(url + '/api/patient/' + identifiant)
      .then((response) => response.json())
      .then(
        (res) => {
          if (res) {
            setFormData({
              idPatient: res._id,
              nom: res.nom,
              prenom: res.prenom,
              telephone: res.telephone,
            });
          }
        },
        (error) => {}
      );
  };
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
      props.sendData(nom, prenom, dateReservation, telephone, res.data._id);
      props.changeStatesRendezVous(1);
      // setFormData({
      //   nom: '',
      //   prenom: '',
      //   telephone: '',
      //   dateReservation: '',
      //   observation: '',
      //   identifiant: '',
      // });
      setOpen(false);
    } catch (err) {}
  };
  return (
    <div>
      <Fab
        onClick={handleClickOpen}
        variant='extended'
        color='primary'
        aria-label='Ajouter un Rendez-Vous'
        className={classes.fateh}
      >
        <AddIcon />
        <DescriptionIcon fontSize='large' />
      </Fab>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Ajouter un Nouveau Rendez-Vous
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth='md'>
          <div className={classes.root} lg={5}>
            <div className={classes.toolbar} />
            <Grid container spacing={2}>
              <Grid container justify='center' xs={12} sm={12} lg={12}>
                <Icon icon={iRegistration} height={100} />
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  label='Identifiant'
                  placeholder='Identifiant'
                  helperText=''
                  fullWidth
                  margin='normal'
                  variant='outlined'
                  name='identifiant'
                  value={identifiant}
                  onChange={(e) => onChangeId(e)}
                />
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
      </Dialog>
    </div>
  );
};

const mapDispatchProps = (dispatch) => {
  return {
    changeStatesRendezVous: (number) => {
      dispatch({
        type: 'updateNumberRendezVous',
        number: number,
      });
    },
  };
};
const mapStateProps = (state) => {
  return {};
};
export default connect(mapStateProps, mapDispatchProps)(FullScreenDialog);
