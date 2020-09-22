const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const RendezVous = require('../../models/RendezVous');
const Patient = require('../../models/Patient');

//@route GET api/profile
//@desc create or update user profile
//@route private
router.post(
  '/',
  [
    auth,
    [
      check('idPatient', 'patient is required').not().isEmpty(),
      check('dateReservation', 'dateReservation is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { estValide, idPatient, observation, dateReservation } = req.body;

    //Build type objects
    const Fields = {};
    Fields.owner = req.user.id;
    if (idPatient) Fields.idPatient = idPatient;
    Fields.estValide = estValide;
    if (observation) Fields.observation = observation;
    if (dateReservation) Fields.dateReservation = dateReservation;

    try {
      element = new RendezVous(Fields);
      await element.save();
      res.json(element);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.post(
  '/update/:id',
  [
    auth,
    [check('dateReservation', 'dateReservation is required').not().isEmpty()],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { estValide, idPatient, observation, dateReservation } = req.body;

    //Build type objects
    const Fields = {};
    Fields.owner = req.user.id;
    if (idPatient) Fields.idPatient = idPatient;
    Fields.estValide = estValide;
    if (observation) Fields.observation = observation;
    if (dateReservation) Fields.dateReservation = dateReservation;

    try {
      element = await RendezVous.findOneAndUpdate(
        { _id: req.params.id },
        { $set: Fields },
        { new: true }
      );
      res.json(element);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// Get all profiles Public

router.get('/', async (req, res) => {
  try {
    const elements = await RendezVous.find()
      .populate('owner', ['name'])
      .populate('idPatient');
    res.json(elements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/nonValide/', async (req, res) => {
  try {
    const elements = await RendezVous.find({ estValide: true })
      .populate('owner', ['name'])
      .populate('idPatient');
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
    await RendezVous.findOneAndRemove({ _id: req.params.type_id });
    res.json({ msg: 'Element Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/:id', async (req, res) => {
  try {
    //remove type
    const element = await RendezVous.findOne({ _id: req.params.id }).populate(
      'idPatient'
    );
    res.json(element);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.delete('/', auth, async (req, res) => {
  try {
    //remove type
    await RendezVous.deleteMany({});

    res.json({ msg: 'all Elements are Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/getCount', async (req, res) => {
  const Fields = {};
  try {
    Fields.NumberRendezVous = await RendezVous.countDocuments();
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
