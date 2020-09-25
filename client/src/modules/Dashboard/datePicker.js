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
  margin: {
    margin: theme.spacing(1),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const DatePicker = (props) => {
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
    dateReservation: d.getFullYear() + '-' + month + '-' + d.getDate(),
  });
  const { dateReservation } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(dateReservation);
  };
  const send = async (e) => {
    e.preventDefault();
    try {
      await axios.get(url + '/api/rendezVous/ByDate/' + dateReservation).then(
        (res) => {
          console.log(res.data);
          props.updateItems(res.data);
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: 10 }}>
      <Grid container spacing={2}>
        <Grid item lg={8}></Grid>
        <Grid item xs={6} sm={8} md={8} lg={3}>
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
        <Grid item xs={6} sm={4} md={4} lg={1}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            className={classes.margin}
            onClick={send}
          >
            Valider
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
const mapDispatchProps = (dispatch) => {
  return {
    updateItems: (items) => {
      dispatch({
        type: 'setDashboardItems',
        items: items,
      });
    },
  };
};
const mapStateProps = (state) => {
  return {};
};
export default connect(mapStateProps, mapDispatchProps)(DatePicker);
