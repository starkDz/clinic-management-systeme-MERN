import React, { Component } from 'react';
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

    padding: theme.spacing(5, 20),
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
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
const Ordonnance = (props) => {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid container justify='right' spacing={2}>
        <Grid item xs={12} sm={12} lg={4}>
          <Grid item xs={12} sm={12} lg={12}>
            <TextField
              label='Nom de Medicament'
              placeholder='Nom de Medicament'
              helperText=''
              fullWidth
              margin='normal'
              variant='outlined'
              // name='description_Fr'
              //  value={description_Fr}
              // onChange={(e) => onChange(e)}
            />
          </Grid>

          <Grid item xs={12} sm={12} lg={12}>
            <TextField
              label='Quantite'
              placeholder='Quantite'
              helperText=''
              fullWidth
              margin='normal'
              type='number'
              variant='outlined'
              //name='dosage'
              //value={dosage}
              //onChange={(e) => onChange(e)}
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <Button
              variant='contained'
              color='primary'
              size='large'
              margin='normal'
              fullWidth
              //onClick={send}
            >
              Ajouter un medicament
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} lg={8}>
          <Grid item xs={12} md={12} lg={12}>
            <div className={classes.demo}>
              <List dense={dense}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Aspirine' />
                  <ListItemSecondaryAction>
                    <IconButton edge='end' aria-label='delete'>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Aspirine' />
                  <ListItemSecondaryAction>
                    <IconButton edge='end' aria-label='delete'>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Aspirine' />
                  <ListItemSecondaryAction>
                    <IconButton edge='end' aria-label='delete'>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Aspirine' />
                  <ListItemSecondaryAction>
                    <IconButton edge='end' aria-label='delete'>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Aspirine' />
                  <ListItemSecondaryAction>
                    <IconButton edge='end' aria-label='delete'>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Aspirine' />
                  <ListItemSecondaryAction>
                    <IconButton edge='end' aria-label='delete'>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Ordonnance;
