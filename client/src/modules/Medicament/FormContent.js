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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules } from '@fortawesome/free-solid-svg-icons';
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
    description_Fr: '',
    dosage: '',
  });
  const { description_Fr, dosage } = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const send = async (e) => {
    e.preventDefault();
    const element = {
      description_Fr,
      dosage,
    };

    try {
      const body = JSON.stringify(element);
      const res = await axios.post('/api/medicament', body, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': cookies.get('token'),
        },
      });
      setFormData({
        description_Fr: '',
        dosage: '',
      });
    } catch (err) {}
  };

  return (
    <div className={classes.root} lg={5}>
      <div className={classes.toolbar} />
      <Grid container justify='left' spacing={2}>
        <Grid container justify='center' xs={12} sm={12} lg={12}>
          <FontAwesomeIcon icon={faCapsules} size='6x' color='#3f51b5' />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <TextField
            label='Nom de Medicament'
            placeholder='Nom de Medicament'
            helperText=''
            fullWidth
            margin='normal'
            variant='outlined'
            name='description_Fr'
            value={description_Fr}
            onChange={(e) => onChange(e)}
          />
        </Grid>

        <Grid item xs={12} sm={12} lg={12}>
          <TextField
            label='Dosage'
            placeholder='Dosage'
            helperText=''
            fullWidth
            type='number'
            variant='outlined'
            name='dosage'
            value={dosage}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={send}
          >
            Ajouter un medicament
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
