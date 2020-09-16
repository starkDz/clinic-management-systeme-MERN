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

import CenteredTabs from './Tabs';
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
  const TypeDoc = JSON.parse(localStorage.getItem('typedoc'));
  const TypeMouv = JSON.parse(localStorage.getItem('typemouv'));
  const Service = JSON.parse(localStorage.getItem('service'));

  const [formData, setFormData] = React.useState({
    num_document: '',
    code_type_doc: '',
    code_type_mouv: '',
    code_service_dist: '',
    code_service_anc: '',
    code_service_dest: '',
    matricule_per_sign: '/',
    matricule_per_use: '/',
    observation: '/',
  });
  const {
    observation,
    matricule_per_use,
    matricule_per_sign,
    code_service_dest,
    code_service_anc,
    code_service_dist,
    code_type_mouv,
    code_type_doc,
    num_document,
  } = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const send = async (e) => {
    e.preventDefault();
    const element = {
      num_document,
      code_type_doc,
      code_type_mouv,
      code_service_dist,
      code_service_anc,
      code_service_dest,
      matricule_per_sign,
      matricule_per_use,
      observation,
    };

    try {
      const body = JSON.stringify(element);
      const res = await axios.post('/api/document', body, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': cookies.get('token'),
        },
      });
    } catch (err) {}
  };

  return (
    <div className={classes.root} lg={12}>
      <div className={classes.toolbar} />
    </div>
  );
}
