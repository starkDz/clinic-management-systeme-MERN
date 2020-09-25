const initState = {
  patient: { nom: 'djehinet', prenom: 'fateh', age: 28 },
  nombreTotalePatient: 0,
  nombreTotalePatientTraite: 0,
  nombreTotaleRendezVous: 0,
  nombreTotaleMedicament: 0,
  nombrerendezVousToday: 0,
  nombrePatientFemme: 0,
  nombrePatientHomme: 0,
  idCurrentPatient: '',
  idCurrentRendezVous: '',
  idCurrentOrdonnance: '',
  idCurrentConsultation: '',
  consultationItems: [],
  dashboardItems: [],
  consultationIndex: '',
  idUser: '',
};
const rootReducer = (state = initState, action) => {
  //console.log(state);

  switch (action.type) {
    case 'Hello':
      {
        let newPatient = { nom: 'machiDjehinet', prenom: 'fateh', age: 28 };
        return {
          ...state,
          patient: newPatient,
        };
      }
      break;
    case 'initialise':
      return {
        ...state,
        nombreTotalePatient: 0,
        nombreTotalePatientTraite: 0,
        nombreTotaleRendezVous: 0,
        nombrerendezVousToday: 0,
        nombrePatientFemme: 0,
        nombrePatientHomme: 0,
        idCurrentPatient: '',
        idCurrentRendezVous: '',
        idCurrentOrdonnance: '',
        idCurrentConsultation: '',
        consultationItems: [],
        dashboardItems: [],
        consultationIndex: '',
        idUser: '',
      };
      break;
    case 'setItems':
      return {
        ...state,
        consultationItems: action.items,
      };
      break;
    case 'setDashboardItems':
      console.log(action.items);
      return {
        ...state,
        dashboardItems: action.items,
      };
      break;
    case 'numberMedicament':
      return {
        ...state,
        nombreTotaleMedicament: action.nombreTotaleMedicament,
      };
      break;
    case 'numberPatient':
      return {
        ...state,
        nombreTotalePatient: action.nombreTotalePatient,
      };
      break;
    case 'numberRendezVous':
      return {
        ...state,
        nombreTotaleRendezVous: action.nombreTotaleRendezVous,
      };
      break;
    case 'updateNumberRendezVous':
      {
        const all = state.nombreTotaleRendezVous + action.number;
        return {
          ...state,
          nombreTotaleRendezVous: all,
        };
      }
      break;
    case 'numberRendezVousTraite':
      return {
        ...state,
        nombreTotalePatientTraite: action.nombreTotalePatientTraite,
      };
      break;
    case 'updateMedicament':
      {
        const all = state.nombreTotaleMedicament + action.number;
        console.log(action);
        return {
          ...state,
          nombreTotaleMedicament: all,
        };
      }
      break;
    case 'updateTraite':
      {
        const all =
          state.nombreTotalePatientTraite + action.nombreTotalePatientTraite;
        console.log(action);
        return {
          ...state,
          nombreTotalePatientTraite: all,
        };
      }
      break;
    case 'setIndexConsultation':
      return {
        ...state,
        consultationIndex: action.index,
      };
      break;
    case 'currentRendezVous':
      return {
        ...state,
        idCurrentRendezVous: action.idRendezVous,
      };
      break;
    case 'currentOrdonnnance':
      return {
        ...state,
        idCurrentOrdonnance: action.idOrdonnance,
      };
      break;
    case 'currentRendezVousPatient':
      return {
        ...state,
        idCurrentRendezVous: action.idRendezVous,
        idCurrentPatient: action.idPatient,
      };
      break;
    case 'currentPatient':
      return {
        ...state,
        idCurrentPatient: action.idPatient,
      };
      break;
    case 'patientStates':
      return {
        ...state,
        nombrePatientFemme: action.NumberWomen,
        nombrePatientHomme: action.NumberMen,
        nombreTotalePatient: action.NumberPatient,
      };
      break;
    case 'addPatientStates':
      {
        const all = state.nombreTotalePatient + action.NumberPatient;
        const femme = state.nombrePatientFemme + action.NumberWomen;
        const homme = state.nombrePatientHomme + action.NumberMen;
        return {
          ...state,
          nombrePatientFemme: femme,
          nombrePatientHomme: homme,
          nombreTotalePatient: all,
        };
      }
      break;
    case 'deletePatientStates':
      {
        const all = state.nombreTotalePatient - action.NumberPatient;
        const femme = state.nombrePatientFemme - action.NumberWomen;
        const homme = state.nombrePatientHomme - action.NumberMen;
        return {
          ...state,
          nombrePatientFemme: femme,
          nombrePatientHomme: homme,
          nombreTotalePatient: all,
        };
      }
      break;
    case 'deleteMedicament':
      {
        const all = state.nombreTotaleMedicament - action.NumberMedicament;
        return {
          ...state,
          nombreTotaleMedicament: all,
        };
      }
      break;
    case 'deleteRendezVous':
      {
        const all = state.nombreTotaleRendezVous - action.Number;
        return {
          ...state,
          nombreTotaleRendezVous: all,
        };
      }
      break;
    default:
    // code block
  }

  return state;
};

export default rootReducer;
