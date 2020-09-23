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
  consultationIndex: '',
  idUser: '',
};
const rootReducer = (state = initState, action) => {
  //console.log(state);
  if (action.type === 'Hello') {
    let newPatient = { nom: 'machiDjehinet', prenom: 'fateh', age: 28 };
    return {
      ...state,
      patient: newPatient,
    };
  }
  if (action.type === 'initialise') {
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
      consultationIndex: '',
      idUser: '',
    };
  }
  if (action.type === 'setItems') {
    console.log(action);
    return {
      ...state,
      consultationItems: action.items,
    };
  }
  if (action.type === 'numberMedicament') {
    return {
      ...state,
      nombreTotaleMedicament: action.nombreTotaleMedicament,
    };
  }
  if (action.type === 'numberPatient') {
    return {
      ...state,
      nombreTotalePatient: action.nombreTotalePatient,
    };
  }
  if (action.type === 'numberRendezVous') {
    console.log(action);
    return {
      ...state,
      nombreTotaleRendezVous: action.nombreTotaleRendezVous,
    };
  }
  if (action.type === 'updateNumberRendezVous') {
    const all = state.nombreTotaleRendezVous + action.number;
    console.log(action);
    return {
      ...state,
      nombreTotaleRendezVous: all,
    };
  }
  if (action.type === 'numberRendezVousTraite') {
    console.log(action);
    return {
      ...state,
      nombreTotalePatientTraite: action.nombreTotalePatientTraite,
    };
  }
  if (action.type === 'updateMedicament') {
    const all = state.nombreTotaleMedicament + action.number;
    console.log(action);
    return {
      ...state,
      nombreTotaleMedicament: all,
    };
  }
  if (action.type === 'updateTraite') {
    const all =
      state.nombreTotalePatientTraite + action.nombreTotalePatientTraite;
    console.log(action);
    return {
      ...state,
      nombreTotalePatientTraite: all,
    };
  }
  if (action.type === 'setIndexConsultation') {
    console.log(action);
    return {
      ...state,
      consultationIndex: action.index,
    };
  }
  if (action.type === 'currentRendezVous') {
    //console.log(action);
    return {
      ...state,
      idCurrentRendezVous: action.idRendezVous,
    };
  }
  if (action.type === 'currentOrdonnnance') {
    //console.log(action);
    return {
      ...state,
      idCurrentOrdonnance: action.idOrdonnance,
    };
  }
  if (action.type === 'currentRendezVousPatient') {
    //console.log(action);
    return {
      ...state,
      idCurrentRendezVous: action.idRendezVous,
      idCurrentPatient: action.idPatient,
    };
  }
  if (action.type === 'currentPatient') {
    //console.log(action);
    return {
      ...state,
      idCurrentPatient: action.idPatient,
    };
  }
  if (action.type === 'patientStates') {
    return {
      ...state,
      nombrePatientFemme: action.NumberWomen,
      nombrePatientHomme: action.NumberMen,
      nombreTotalePatient: action.NumberPatient,
    };
  }
  if (action.type === 'addPatientStates') {
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
  if (action.type === 'deletePatientStates') {
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
  if (action.type === 'deleteMedicament') {
    const all = state.nombreTotaleMedicament - action.NumberMedicament;
    return {
      ...state,
      nombreTotaleMedicament: all,
    };
  }
  if (action.type === 'deleteRendezVous') {
    const all = state.nombreTotaleRendezVous - action.Number;
    return {
      ...state,
      nombreTotaleRendezVous: all,
    };
  }
  return state;
};

export default rootReducer;
