const initState = {
  patient: { nom: 'djehinet', prenom: 'fateh', age: 28 },
  nombreTotalePatient: 0,
  nombreTotalePatientTraite: 0,
  nombreTotaleRendezVous: 0,
  nombrerendezVousToday: 0,
  nombrePatientFemme: 0,
  nombrePatientHomme: 0,
  nombreTotaleRendezVous: 0,
  idCurrentPatient: '',
  idCurrentRendezVous: '',
  idCurrentOrdonnance: '',
  idCurrentConsultation: '',
  idUser: '',
};
const rootReducer = (state = initState, action) => {
  console.log(state);
  if (action.type === 'Hello') {
    let newPatient = { nom: 'machiDjehinet', prenom: 'fateh', age: 28 };
    return {
      ...state,
      patient: newPatient,
    };
  }
  if (action.type === 'currentRendezVous') {
    console.log(action);
    return {
      ...state,
      idCurrentRendezVous: action.idRendezVous,
    };
  }
  if (action.type === 'currentOrdonnnance') {
    console.log(action);
    return {
      ...state,
      idCurrentOrdonnance: action.idOrdonnance,
    };
  }
  if (action.type === 'currentRendezVousPatient') {
    console.log(action);
    return {
      ...state,
      idCurrentRendezVous: action.idRendezVous,
      idCurrentPatient: action.idPatient,
    };
  }
  if (action.type === 'currentPatient') {
    console.log(action);
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
  return state;
};

export default rootReducer;
