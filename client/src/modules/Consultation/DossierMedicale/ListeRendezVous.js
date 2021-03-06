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
import { url } from '../../../defaults/default';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
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
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      secondary: false,
      dense: false,
      type: 'success',
      selectedRow: null,
      opensnack: false,
      open: false,
      msg: 'Suppression a ete fait avec success',
      Title: 'Liste des Consultation precedentes',
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

  async DeleteThis(id, index) {
    try {
      const cookie = new Cookies();
      const res = await axios.delete(url + '/api/consultation/' + id, {
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
    } catch {
      this.setState({
        opensnack: true,
        type: 'error',
        msg: 'Erreur lors de la suppression',
      });
    }
  }
  async componentDidMount() {
    // const idPatient = localStorage.getItem('idPatient');
    fetch(url + '/api/consultation/pour/' + this.props.idCurrentPatient)
      .then((response) => response.json())
      .then(
        (res) => {
          console.log(res);
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
            detailPanel={[
              {
                tooltip: 'Afficher plus de details',
                render: (rowData) => {
                  return (
                    <div
                      style={{
                        fontSize: 50,
                        // textAlign: 'center',
                      }}
                    >
                      <Chip
                        avatar={<Avatar>M</Avatar>}
                        label={
                          'Antecedents Medicaux:   ' + rowData.antecedentMedical
                        }
                        clickable
                        color='primary'
                        deleteIcon={<DoneIcon />}
                        variant='outlined'
                      />
                      <Chip
                        avatar={<Avatar>M</Avatar>}
                        label={
                          'Antecedents Chirurgical:   ' +
                          rowData.antecedentChirurgical
                        }
                        clickable
                        color='primary'
                        deleteIcon={<DoneIcon />}
                        variant='outlined'
                      />
                    </div>
                  );
                },
              },
            ]}
            columns={[
              {
                title: 'Date',
                field: 'dateConsultation',
                width: '20%',
              },
              {
                title: 'Heur',
                field: 'heur',
                width: '10%',
              },

              { title: 'Diagnostique', field: 'diagnostic', width: '20%' },
              {
                title: 'Taille (cm)',
                field: 'taille',
                width: '10%',
              },
              {
                title: 'Poids (Kg)',
                field: 'poids',
                width: '10%',
              },
              {
                title: 'Glycemie',
                field: 'glycemie',
                width: '20%',
              },
              { title: 'Temperature', field: 'temperature', width: '10%' },
            ]}
            data={items}
            actions={
              [
                // {
                //   icon: () => <DeleteIcon color='secondary' />,
                //   tooltip: 'Delete Consultation',
                //   onClick: (event, rowData) =>
                //     this.DeleteThis(rowData._id, rowData.tableData.id),
                // },
              ]
            }
            onRowClick={(evt, selectedRow) => this.setState({ selectedRow })}
            options={{
              exportButton: true,
              pageSize: 5,
              pageSizeOptions: [5, 10, 20, 50, 100],
              headerStyle: {
                backgroundColor: '#3f51b5',
                color: '#FFF',
              },
            }}
          />
        </div>
      );
    }
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    changeStatesCurrentPatient: (id) => {
      dispatch({
        type: 'currentPatient',
        idPatient: id,
      });
    },
  };
};
const mapStateProps = (state) => {
  return {
    idCurrentRendezVous: state.idCurrentRendezVous,
    idCurrentPatient: state.idCurrentPatient,
  };
};
export default connect(mapStateProps, mapDispatchProps)(Call_Api);
