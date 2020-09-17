const mongoose = require('mongoose');
const RendezVousSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  idPatient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'patient',
  },
  observation: {
    type: String,
  },
  estValide: {
    type: Boolean,
    default: false,
  },
  dateReservation: {
    type: Date,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = RendezVous = mongoose.model('rendezVous', RendezVousSchema);
