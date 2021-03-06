import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Loading_Item from './Loading_Item';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import MaterialTable from 'material-table';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { forwardRef } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { url } from '../../defaults/default';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
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
import { Icon, InlineIcon } from '@iconify/react';
import iRegistration from '@iconify/icons-medical-icon/i-registration';
import FullScreenDialog from './FullScreenForm';
import FullScreenDialogEnregistrement from './Enregistrement/FullScreenForm';
import { connect } from 'react-redux';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import VerticalLinearStepper from './Update/FormContent';
import ScrollableTabsButtonForce from './Tabs';

const tableIcons = {
  Add: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <AddBox {...props} ref={ref} />
  )),
  Check: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Check {...props} ref={ref} />
  )),
  Clear: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Clear {...props} ref={ref} />
  )),
  Delete: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <DeleteOutline {...props} ref={ref} />
  )),
  DetailPanel: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Edit {...props} ref={ref} />
  )),
  Export: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <SaveAlt {...props} ref={ref} />
  )),
  Filter: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <FilterList {...props} ref={ref} />
  )),
  FirstPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <FirstPage {...props} ref={ref} />
  )),
  LastPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <LastPage {...props} ref={ref} />
  )),
  NextPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ChevronRight {...props} ref={ref} />
  )),
  PreviousPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Clear {...props} ref={ref} />
  )),
  Search: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Search {...props} ref={ref} />
  )),
  SortArrow: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ArrowUpward {...props} ref={ref} />
  )),
  ThirdStateCheck: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Remove {...props} ref={ref} />
  )),
  ViewColumn: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ViewColumn {...props} ref={ref} />
  )),
};
function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
class Call_Api extends Component {
  constructor(props) {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      secondary: false,
      dense: false,
      type: 'success',
      selectedRow: null,
      open: false,
      openDossier: false,
      openUpdate: false,
      opensnack: false,
      msg: 'Suppression a ete fait avec success',
      Title: 'Liste des Patients',
      a: null,
    };

    this.DeleteThis = this.DeleteThis.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.getData = this.getData.bind(this);

    this.handleCloseRendezVous = this.handleCloseRendezVous.bind(this);
    this.handleCloseDossier = this.handleCloseDossier.bind(this);
    this.handleCloseUpdate = this.handleCloseUpdate.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickOpenDossier = this.handleClickOpenDossier.bind(this);
    this.handleClickOpenUpdate = this.handleClickOpenUpdate.bind(this);
  }
  getData = (nom, prenom, address, telephone, sexe, id) => {
    // do not forget to bind getData in constructor
    this.setState({
      ...this.state,
      items: this.state.items.concat([
        {
          nom: nom,
          prenom: prenom,
          address: address,
          telephone: telephone,
          sexe: sexe,
          _id: id,
        },
      ]),
    });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      opensnack: false,
    });
  };
  handleClickOpen() {
    this.setState({
      open: true,
    });
  }
  handleClickOpenDossier() {
    this.setState({
      openDossier: true,
    });
  }
  handleClickOpenUpdate() {
    this.setState({
      openUpdate: true,
    });
  }

  handleCloseRendezVous() {
    this.setState({
      open: false,
    });
  }
  handleCloseDossier() {
    this.setState({
      openDossier: false,
    });
  }
  handleCloseUpdate() {
    this.setState({
      openUpdate: false,
    });
  }
  async DeleteThis(id, index, sexe) {
    try {
      const cookie = new Cookies();
      const res = await axios.delete(url + '/api/patient/' + id, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'x-auth-token': cookie.get('token'),
        },
      });
      this.setState({
        opensnack: true,
        type: 'success',
        msg: 'Suppression a ete fait avec Success ',
      });
      const { items } = this.state;
      items.splice(index, 1);
      this.setState({ items });
      if (sexe == 'Homme') this.props.changeStatesDelete(1, 1, 0);
      else this.props.changeStatesDelete(1, 0, 1);
    } catch {
      this.setState({
        opensnack: true,
        type: 'error',
        msg: 'Erreur lors de la suppression',
      });
    }
  }
  async componentDidMount() {
    fetch(url + '/api/patient')
      .then((response) => response.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            items: res,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const {
      error,
      isLoaded,
      items,
      Title,
      selectedRow,
      opensnack,
      open,
      openDossier,
      openUpdate,
      id,
      msg,
      type,
    } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <Loading_Item />
        </div>
      );
    } else {
      return (
        <div>
          <Snackbar
            open={opensnack}
            autoHideDuration={2000}
            onClose={this.handleClose}
          >
            <Alert onClose={this.handleClose} severity={type}>
              {msg}
            </Alert>
          </Snackbar>
          <MaterialTable
            icons={tableIcons}
            title={Title}
            columns={[
              {
                title: 'Nom',
                field: 'nom',
                width: '20%',
              },
              { title: 'Prenom', field: 'prenom', width: '20%' },
              { title: 'Sexe', field: 'sexe', width: '10%' },
              {
                title: 'Telephone',
                field: 'telephone',
                width: '10%',
              },
              { title: 'Address', field: 'address', width: '20%' },
              { title: 'Recu par', field: 'owner.name', width: '10%' },
            ]}
            data={items}
            actions={[
              {
                icon: () => (
                  <Icon icon={iRegistration} style={{ color: 'green' }} />
                ),
                tooltip: 'Faire une reservation',
                onClick: (event, rowData) => {
                  this.handleClickOpen();
                  this.setState({ id: rowData._id });
                },
              },
              {
                icon: () => <EditIcon color='primary' />,
                tooltip: 'Edit patient',
                onClick: (event, rowData) => {
                  this.setState({ id: rowData._id });
                  this.handleClickOpenUpdate();
                },
              },
              {
                icon: () => <DeleteIcon color='secondary' />,
                tooltip: 'Delete User',
                onClick: (event, rowData) =>
                  this.DeleteThis(
                    rowData._id,
                    rowData.tableData.id,
                    rowData.sexe
                  ),
              },
              {
                icon: () => (
                  <FolderSharedIcon color='primary' fontSize='large' />
                ),
                tooltip: 'Afficher le dossier medicale',
                onClick: (event, rowData) => {
                  this.setState({ id: rowData._id });
                  this.handleClickOpenDossier();
                },
              },
            ]}
            onRowClick={(evt, selectedRow) => this.setState({ selectedRow })}
            options={{
              exportButton: true,
              pageSize: 10,
              pageSizeOptions: [5, 10, 20, 50, 100],
              sorting: true,
              filtering: true,
              grouping: true,
              rowStyle: true,
              rowStyle: (rowData) => ({
                backgroundColor:
                  this.state.selectedRow &&
                  this.state.selectedRow.tableData.id === rowData.tableData.id
                    ? '#EEE'
                    : '#FFF',
              }),
              headerStyle: {
                backgroundColor: '#3f51b5',
                color: '#FFF',
              },
            }}
          />
          <FullScreenDialog sendData={this.getData} />
          <Dialog
            fullScreen
            open={open}
            onClose={this.handleClose}
            TransitionComponent={Transition}
          >
            <AppBar
              style={{
                position: 'relative',
              }}
            >
              <Toolbar>
                <IconButton
                  edge='start'
                  color='inherit'
                  onClick={this.handleCloseRendezVous}
                  aria-label='close'
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  variant='h6'
                  style={{
                    flex: 1,
                  }}
                >
                  Creer un Rendez Vous
                </Typography>
                <IconButton color='inherit' aria-label='close'>
                  <FolderSharedIcon style={{ fontSize: 50 }} />
                </IconButton>
              </Toolbar>
            </AppBar>
            <FullScreenDialogEnregistrement
              sendData={this.handleCloseRendezVous}
              identifier={id}
            />
          </Dialog>

          <Dialog
            fullScreen
            open={openDossier}
            onClose={this.handleCloseDossier}
            TransitionComponent={Transition}
          >
            <AppBar
              style={{
                position: 'relative',
              }}
            >
              <Toolbar>
                <IconButton
                  edge='start'
                  color='inherit'
                  onClick={this.handleCloseDossier}
                  aria-label='close'
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  variant='h6'
                  style={{
                    flex: 1,
                  }}
                >
                  Dossier Medicale
                </Typography>
                <IconButton color='inherit' aria-label='close'>
                  <FolderSharedIcon style={{ fontSize: 50 }} />
                </IconButton>
              </Toolbar>
            </AppBar>
            <ScrollableTabsButtonForce identifier={id} />
          </Dialog>

          <Dialog
            fullScreen
            open={openUpdate}
            onClose={this.handleCloseUpdate}
            TransitionComponent={Transition}
          >
            <AppBar
              style={{
                position: 'relative',
              }}
            >
              <Toolbar>
                <IconButton
                  edge='start'
                  color='inherit'
                  onClick={this.handleCloseUpdate}
                  aria-label='close'
                >
                  <CloseIcon />
                </IconButton>
                <Typography
                  variant='h6'
                  style={{
                    flex: 1,
                  }}
                >
                  Modifier les information du Patient
                </Typography>
                <IconButton color='inherit' aria-label='close'>
                  <FolderSharedIcon style={{ fontSize: 50 }} />
                </IconButton>
              </Toolbar>
            </AppBar>
            <VerticalLinearStepper identifier={id} />
          </Dialog>
        </div>
      );
    }
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    changeStatesDelete: (NumberPatient, NumberMen, NumberWomen) => {
      dispatch({
        type: 'deletePatientStates',
        NumberPatient: NumberPatient,
        NumberWomen: NumberWomen,
        NumberMen: NumberMen,
      });
    },
  };
};
const mapStateProps = (state) => {
  return {};
};
export default connect(mapStateProps, mapDispatchProps)(Call_Api);
