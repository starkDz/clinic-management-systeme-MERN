const mongoose = require('mongoose');
const ConsultationSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  idPatient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'patient',
  },
  idRendezVous: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'rendezVous',
  },
  idOrdonnance: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ordonnance',
  },
  listAnalyse: [
    {
      idAnalyse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'analyse',
      },
    },
  ],
  listRadio: [
    {
      idRadio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'radio',
      },
    },
  ],
  prix: {
    type: Number,
  },
  observation: {
    type: String,
  },
  dateConsultation: {
    type: Date,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = ConsultationSchema = mongoose.model(
  'consultation',
  ConsultationSchema
);
