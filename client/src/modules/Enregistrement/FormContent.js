import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
import PropTypes from 'prop-types';
axios.defaults.baseURL = url;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
export default function VerticalLinearStepper() {
  const classes = useStyles();
  const cookies = new Cookies();

  const [formData, setFormData] = React.useState({
    nom: '',
    prenom: '',
    telephone: '',
  });
  const { nom, prenom, telephone } = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const send = async (e) => {
    e.preventDefault();
    const element = {
      nom,
      prenom,
      telephone,
    };

    try {
      const body = JSON.stringify(element);
      const res = await axios.post('/api/rendezVous', body, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': cookies.get('token'),
        },
      });
    } catch (err) {}
  };

  return (
    <div className={classes.root} lg={5}>
      <div className={classes.toolbar} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={6}>
          <TextField
            label='Nom'
            placeholder='Nom'
            helperText=''
            fullWidth
            margin='normal'
            variant='outlined'
            name='nom'
            value={nom}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}></Grid>

        <Grid item xs={12} sm={12} lg={12}>
          <TextField
            label='Prenom'
            placeholder='Prenom'
            helperText=''
            fullWidth
            variant='outlined'
            name='prenom'
            value={prenom}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <TextField
            label='Telephone'
            placeholder='Telephone'
            helperText=''
            fullWidth
            variant='outlined'
            name='telephone'
            value={telephone}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={5}>
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
  );
}
