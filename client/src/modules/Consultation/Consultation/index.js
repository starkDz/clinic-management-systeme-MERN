import React, { Component, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules } from '@fortawesome/free-solid-svg-icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
axios.defaults.baseURL = url;
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',

    padding: theme.spacing(5, 40),
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
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
const Consultation = (props) => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const cookies = new Cookies();
  const [formData, setFormData] = React.useState({
    taille: '',
    poids: '',
    glycemie: '',
    antecedentMedical: '',
    antecedentChirurgical: '',
    temperature: '',
    freCardiaque: '',
    prix: '',
    diagnostic: '',
  });
  const {
    idPatient,
    idRendezVous,
    taille,
    poids,
    glycemie,
    antecedentMedical,
    diagnostic,
    antecedentChirurgical,
    temperature,
    freCardiaque,
    prix,
  } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(url + '/api/rendezVous/' + props.identifier)
        .then((response) => {
          setFormData({
            idPatient: response.data.idPatient._id,
            idRendezVous: props.identifier,
          });
        })
        .catch((error) => console.log(error.response));
    }
    fetchData();
  }, []);
  const send = async (e) => {
    e.preventDefault();
    const element = {
      taille,
      idPatient,
      idRendezVous,
      poids,
      glycemie,
      antecedentMedical,
      antecedentChirurgical,
      temperature,
      freCardiaque,
      diagnostic,
      prix,
    };

    try {
      const body = JSON.stringify(element);
      console.log(body);
      const res = await axios.post('/api/consultation', body, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': cookies.get('token'),
        },
      });
      setFormData({
        taille: '',
        poids: '',
        glycemie: '',
        antecedentMedical: '',
        antecedentChirurgical: '',
        temperature: '',
        freCardiaque: '',
        prix: '',
        diagnostic: '',
      });
    } catch (err) {}
  };

  return (
    <div className={classes.root}>
      <Grid container justify='right' spacing={2}>
        <Grid item xs={12} sm={12} lg={3}>
          <TextField
            label='Taille'
            placeholder='Taille'
            helperText=''
            fullWidth
            margin='normal'
            type='number'
            variant='outlined'
            name='taille'
            value={taille}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={3}>
          <TextField
            label='Poids'
            placeholder='Poids'
            helperText=''
            fullWidth
            margin='normal'
            type='number'
            variant='outlined'
            name='poids'
            value={poids}
            onChange={(e) => onChange(e)}
          />
        </Grid>

        <Grid item xs={12} sm={12} lg={3}>
          <TextField
            label='Frequence Cardiaque'
            placeholder='Frequence Cardiaque '
            helperText=''
            fullWidth
            type='number'
            margin='normal'
            variant='outlined'
            name='freCardiaque'
            value={freCardiaque}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={3}>
          <TextField
            label='Temperature'
            placeholder='Temperature'
            helperText=''
            fullWidth
            margin='normal'
            type='number'
            variant='outlined'
            name='temperature'
            value={temperature}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <TextField
            label='Glycemie'
            placeholder='Glycemie'
            helperText=''
            fullWidth
            margin='normal'
            type='number'
            variant='outlined'
            name='glycemie'
            value={glycemie}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <TextField
            label='Prix'
            placeholder='Prix'
            helperText=''
            fullWidth
            margin='normal'
            type='number'
            variant='outlined'
            name='prix'
            value={prix}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <TextField
            label='Antecedents Medicaux'
            placeholder='Antecedents Medicaux Exp: aa, bb , cc'
            helperText=''
            fullWidth
            margin='normal'
            multiline
            variant='outlined'
            name='antecedentMedical'
            value={antecedentMedical}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <TextField
            label='Antecedents Chirurgicaux'
            placeholder='Antecedents Chirurgicaux Exp: aa, bb , cc'
            helperText=''
            fullWidth
            margin='normal'
            multiline
            variant='outlined'
            name='antecedentChirurgical'
            value={antecedentChirurgical}
            onChange={(e) => onChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <TextField
            id='outlined-textarea'
            label='Diagnostic'
            placeholder='Diagnostic'
            multiline
            margin='normal'
            fullWidth
            variant='outlined'
            name='diagnostic'
            value={diagnostic}
            onChange={(e) => onChange(e)}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} lg={12}>
        <Button
          variant='contained'
          color='primary'
          size='large'
          margin='normal'
          fullWidth
          onClick={send}
        >
          Valider
        </Button>
      </Grid>
    </div>
  );
};

export default Consultation;
