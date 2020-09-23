const mongoose = require('mongoose');
const RadioSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  nomMedecin: {
    type: String,
    required: true,
  },
  prenomMedecin: {
    type: String,
    required: true,
  },
  specialiteMedecin: {
    type: String,
    required: true,
  },
  nomInfermier: {
    type: String,
    required: true,
  },
  prenomInfermier: {
    type: String,
    required: true,
  },
  numTelephoneInfermier: {
    type: String,
    required: true,
  },
  nomCabinet: {
    type: String,
    required: true,
  },
  numTelephoneCabinet: {
    type: String,
    required: true,
  },
  numFaxCabinet: {
    type: String,
    required: true,
  },
  addressCabinet: {
    type: String,
    required: true,
  },
  emailCabinet: {
    type: String,
    required: true,
  },
  observation: {
    type: String,
  },
  date_Cre: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Radio = mongoose.model('radio', RadioSchema);
