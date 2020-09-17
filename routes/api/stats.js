const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Patient = require('../../models/Patient');
const RendezVous = require('../../models/RendezVous');
const Medicament = require('../../models/Medicament');

router.get('/getCount', async (req, res) => {
  const Fields = {};
  try {
    Fields.NumberRendezVous = await RendezVous.countDocuments();
    Fields.NumberMedicament = await Medicament.countDocuments();
    Fields.NumberPatient = await Patient.countDocuments();
    Fields.NumberMen = await Patient.find({ sexe: 'Homme' }).countDocuments();
    Fields.NumberWomen = await Patient.find({ sexe: 'Femme' }).countDocuments();
    Fields.NumberRendezVousValide = await RendezVous.find({
      estValide: true,
    }).countDocuments();
    Fields.NumberRendezVousNotValide = await RendezVous.find({
      estValide: false,
    }).countDocuments();

    res.json(Fields);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
