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
import VisibilityIcon from '@material-ui/icons/Visibility';
import { forwardRef } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
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
import Cookies from 'universal-cookie';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { url } from '../../defaults/default';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
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

class Call_Api extends Component {
  constructor(props) {
    super(props);
    const d = new Date();
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    this.state = {
      error: null,
      isLoaded: false,
      items: this.props.consultationItems,
      secondary: false,
      dense: false,
      type: 'success',
      selectedRow: null,
      opensnack: false,
      open: false,
      date: d.getFullYear() + '-' + month + '-' + d.getDate(),
      msg: 'Suppression a ete fait avec success',
      Title: 'Liste des Rendez-Vous',
      a: null,
    };

    this.DeleteThis = this.DeleteThis.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  handleClickOpen() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  DeleteThis(index) {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({ items });
  }
  async componentDidMount() {
    const { date } = this.state;
    console.log(url + '/api/rendezVous/nonValideByDate/' + date);
    fetch(url + '/api/rendezVous/nonValideByDate/' + date)
      .then((response) => response.json())
      .then(
        (res) => {
          // console.log("helloWorld");
          this.setState({
            isLoaded: true,
          });
          this.props.updateItems(res);
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
    const { classes } = this.props;
    const {
      error,
      isLoaded,

      Title,
      selectedRow,
      opensnack,
      open,
      id,
      msg,
      type,
    } = this.state;
    const items = this.props.consultationItems;
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
                field: 'idPatient.nom',
                width: '20%',
              },
              { title: 'Prenom', field: 'idPatient.prenom', width: '20%' },
              {
                title: 'Numero Telephone',
                field: 'idPatient.telephone',
                width: '20%',
              },
              {
                title: 'Date Rendez-Vous',
                field: 'dateReservation',
                width: '20%',
              },
              { title: 'Recu par', field: 'owner.name', width: '10%' },
            ]}
            data={items}
            actions={[
              {
                icon: () => (
                  <FolderSharedIcon color='secondary' fontSize='large' />
                ),
                tooltip: 'Afficher le dossier medicale',
                onClick: (event, rowData) => {
                  this.handleClickOpen();
                  this.props.updateIndex(rowData.tableData.id);
                  this.props.changeStatesCurrentRendezVousPatient(
                    rowData._id,
                    rowData.idPatient._id
                  );
                  this.setState({ id: rowData._id });
                  //console.log(items);
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
                  onClick={this.handleClose}
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
        </div>
      );
    }
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    changeStatesCurrentRendezVousPatient: (idR, idP) => {
      dispatch({
        type: 'currentRendezVousPatient',
        idRendezVous: idR,
        idPatient: idP,
      });
    },
    updateItems: (items) => {
      dispatch({
        type: 'setItems',
        items: items,
      });
    },
    updateIndex: (index) => {
      dispatch({
        type: 'setIndexConsultation',
        index: index,
      });
    },
  };
};
const mapStateProps = (state) => {
  return {
    consultationItems: state.consultationItems,
  };
};
export default connect(mapStateProps, mapDispatchProps)(Call_Api);
