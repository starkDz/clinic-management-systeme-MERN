const mongoose = require('mongoose');
const PatientSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  nom: {
    type: String,
  },
  prenom: {
    type: String,
  },
  age: {
    type: String,
  },
  telephone: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Patient = mongoose.model('patient', PatientSchema);
