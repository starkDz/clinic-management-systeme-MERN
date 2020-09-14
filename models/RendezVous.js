const mongoose = require('mongoose');
const RendezVousSchema = new mongoose.Schema({
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
  telephone: {
    type: String,
  },
  time: {
    type: Date,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = RendezVous = mongoose.model('rendezVous', RendezVousSchema);
