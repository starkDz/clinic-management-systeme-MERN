const mongoose = require('mongoose');
const PatientSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  nom: {
    type: String,
  },
  prenom: {
    type: String,
  },
  observation: {
    type: String,
  },
  sexe: {
    type: String,
  },
  dateNaissance: {
    type: Date,
  },
  telephone: {
    type: String,
  },
  address: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Patient = mongoose.model('patient', PatientSchema);
