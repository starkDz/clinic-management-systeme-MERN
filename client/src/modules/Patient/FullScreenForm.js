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
import VerticalLinearStepper from './FormContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        onClick={handleClickOpen}
        variant='extended'
        color='primary'
        aria-label='Ajouter un patient'
        className={classes.fateh}
      >
        <AddIcon />
        <FontAwesomeIcon icon={faUser} size='2x' pull='right' />
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
              Ajouter un Nouveau Patient
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth='md'>
          <VerticalLinearStepper />
        </Container>
      </Dialog>
    </div>
  );
}
