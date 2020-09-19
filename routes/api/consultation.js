const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Consultation = require('../../models/Consultation');

//@route GET api/profile
//@desc create or update user profile
//@route private
router.post(
  '/',
  [
    auth,
    [
      check('idPatient', 'idPatient is required').not().isEmpty(),
      check('idRendezVous', 'idRendezVous is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      idPatient,
      idRendezVous,
      idOrdonnance,
      prix,
      taille,
      age,
      diagnostic,
      antecedentMedical,
      antecedentChirurgical,
      freqCardiaque,
      temperature,
      glycemie,
      heur,
      poids,
      observation,
      dateConsultation,
    } = req.body;

    //Build type objects
    const Fields = {};
    Fields.owner = req.user.id;
    if (idPatient) Fields.idPatient = idPatient;
    if (idRendezVous) Fields.idRendezVous = idRendezVous;
    if (idOrdonnance) Fields.idOrdonnance = idOrdonnance;
    if (heur) Fields.heur = heur;
    if (taille) Fields.taille = taille;
    if (prix) Fields.prix = prix;
    if (diagnostic) Fields.diagnostic = diagnostic;
    if (age) Fields.age = age;
    if (antecedentMedical)
      Fields.antecedentMedical = antecedentMedical
        .split(',')
        .map((skill) => skill.trim());
    if (antecedentChirurgical)
      Fields.antecedentChirurgical = antecedentChirurgical
        .split(',')
        .map((skill) => skill.trim());
    if (freqCardiaque) Fields.freqCardiaque = freqCardiaque;
    if (temperature) Fields.temperature = temperature;
    if (glycemie) Fields.glycemie = glycemie;
    if (poids) Fields.poids = poids;
    if (observation) Fields.observation = observation;
    if (dateConsultation) Fields.dateConsultation = dateConsultation;

    try {
      element = new Consultation(Fields);
      await element.save();
      res.json(element);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
router.put('/newAnalyse/:id', auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { analyse } = req.body;

  //Build type objects
  const Fields = {};
  if (analyse) Fields.analyse = analyse;

  try {
    const element = await Consultation.findOne({ _id: req.params.id });
    element.listAnalyse.unshift(Fields);
    await element.save();
    res.json(element);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.put('/newRadio/:id', auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { radio } = req.body;

  //Build type objects
  const Fields = {};
  if (radio) Fields.radio = radio;

  try {
    const element = await Consultation.findOne({ _id: req.params.id });
    element.listRadio.unshift(Fields);
    await element.save();
    res.json(element);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// Get all profiles Public

router.get('/', async (req, res) => {
  try {
    const elements = await Consultation.find()
      .populate('idPatient')
      .populate('idRendezVous')
      .populate('idOrdonnance')
      .populate('listAnalyse.idAnalyse')
      .populate('listRadio.idRadio');
    res.json(elements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/pour/:id', async (req, res) => {
  try {
    const elements = await Consultation.find({ idPatient: req.params.id })
      .populate('idPatient')
      .populate('idRendezVous')
      .populate('idOrdonnance')
      .populate('listAnalyse.idAnalyse')
      .populate('listRadio.idRadio');
    res.json(elements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/getOrdonnance/:id_s', async (req, res) => {
  const Fields = {};
  try {
    Fields.id_s = req.params.id_s.split('&').map((skill) => skill.trim());

    const elements = await Consultation.findOne({
      idRendezVous: Fields.id_s[0],
      idPatient: Fields.id_s[1],
    });
    res.json(elements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Delete Type
router.delete('/:type_id', auth, async (req, res) => {
  try {
    //remove type
    await Consultation.findOneAndRemove({ _id: req.params.type_id });
    res.json({ msg: 'Element Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/:id', async (req, res) => {
  try {
    //remove type
    const element = await Consultation.findOne({ _id: req.params.id });
    res.json(element);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/', auth, async (req, res) => {
  try {
    //remove type
    await Consultation.deleteMany({});

    res.json({ msg: 'all Elements are Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
