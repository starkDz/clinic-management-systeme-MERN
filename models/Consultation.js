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
  taille: {
    type: Number,
  },
  age: {
    type: Number,
  },
  antecedentMedical: {
    type: [String],
  },
  antecedentChirurgical: {
    type: [String],
  },
  freqCardiaque: {
    type: Number,
  },
  temperature: {
    type: Number,
  },
  glycemie: {
    type: Number,
  },
  poids: {
    type: Number,
  },
  observation: {
    type: String,
  },
  dateConsultation: {
    type: Date,
    default: Date.now,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Consultation = mongoose.model(
  'consultation',
  ConsultationSchema
);
