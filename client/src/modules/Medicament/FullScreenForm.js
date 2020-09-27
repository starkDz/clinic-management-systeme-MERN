import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
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
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
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

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const FullScreenDialog = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setFormData({
      ...formData,
      opensnack: false,
    });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const cookies = new Cookies();

  const [formData, setFormData] = React.useState({
    description_Fr: '',
    dosage: '',
    condit: '',
    forme: '',
    type: 'success',
    opensnack: false,
    msg: 'Suppression a ete fait avec success',
    Title: 'Liste des Medicaments',
  });
  const { description_Fr, dosage, condit, forme } = formData;
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
      condit,
      forme,
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

      props.sendData(description_Fr, dosage, forme, condit, res.data._id);
      props.changeStatesMedicament(1);

      setFormData({
        ...formData,
        opensnack: true,
        type: 'success',
        msg: "l'Ajout a ete fait avec Success ",
      });
      setOpen(false);
      // setFormData({
      //   description_Fr: '',
      //   dosage: '',
      // });
    } catch (err) {}
  };
  const { Title, opensnack, msg, type } = formData;
  return (
    <div>
      <Fab
        onClick={handleClickOpen}
        variant='extended'
        color='primary'
        aria-label='Ajouter un nouveau medicament'
        className={classes.fateh}
      >
        <AddIcon />
        <FontAwesomeIcon icon={faCapsules} size='2x' />
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
              Ajouter un Nouveau Medicament
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth='md'>
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
                  variant='outlined'
                  name='dosage'
                  value={dosage}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  label='Condition'
                  placeholder='Condition'
                  helperText=''
                  fullWidth
                  variant='outlined'
                  name='condit'
                  value={condit}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  label='Forme'
                  placeholder='Forme'
                  helperText=''
                  fullWidth
                  variant='outlined'
                  name='forme'
                  value={forme}
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
        </Container>
      </Dialog>
      <Snackbar
        open={opensnack}
        autoHideDuration={2000}
        onClose={handleCloseSnack}
        style={{ zIndex: 1 }}
      >
        <Alert onClose={handleCloseSnack} severity={type} style={{ zIndex: 1 }}>
          {msg}
        </Alert>
      </Snackbar>
    </div>
  );
};
const mapDispatchProps = (dispatch) => {
  return {
    changeStatesMedicament: (number) => {
      dispatch({
        type: 'updateMedicament',
        number: number,
      });
    },
  };
};
const mapStateProps = (state) => {
  return {};
};
export default connect(mapStateProps, mapDispatchProps)(FullScreenDialog);
