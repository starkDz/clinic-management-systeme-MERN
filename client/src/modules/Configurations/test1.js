import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from '@material-ui/icons/Navigation';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const FloatingActionButtonSize = (props) => {
  const classes = useStyles();
  const handleClick = () => {
    props.changeName('machiDjehinet');
  };
  return (
    <div>
      <Fab
        variant='extended'
        size='medium'
        color='primary'
        aria-label='add'
        className={classes.margin}
        onClick={handleClick}
      >
        <NavigationIcon className={classes.extendedIcon} />
        Extended
      </Fab>
    </div>
  );
};

const mapDispatchProps = (dispatch) => {
  return {
    changeName: (id) => {
      dispatch({ type: 'Hello', nom: id });
    },
  };
};
const mapStateProps = (state, ownProps) => {
  return {};
};

export default connect(
  mapStateProps,
  mapDispatchProps
)(FloatingActionButtonSize);
