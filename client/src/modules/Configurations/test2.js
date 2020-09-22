import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { ContactlessTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const MultilineTextFields = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const nom = props.nom;
  return (
    <div>
      <TextField
        id='outlined-textarea'
        label='Multiline Placeholder'
        placeholder='Placeholder'
        multiline
        variant='outlined'
        value={nom}
      />
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    nom: state.patient.nom,
  };
};

export default connect(mapStateProps)(MultilineTextFields);
