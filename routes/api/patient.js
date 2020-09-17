const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Patient = require('../../models/Patient');
const User = require('../../models/User');

//@route GET api/profile
//@desc create or update user profile
//@route private
router.post(
  '/',
  [
    auth,
    [
      check('nom', 'nom is required').not().isEmpty(),
      check('prenom', 'prenom is required').not().isEmpty(),
      check('telephone', 'telephone is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      nom,
      prenom,
      telephone,
      address,
      sexe,
      dateNaissance,
      observation,
      code,
      groupage,
    } = req.body;

    //Build type objects
    const Fields = {};
    Fields.owner = req.user.id;
    if (nom) Fields.nom = nom;
    if (prenom) Fields.prenom = prenom;
    if (telephone) Fields.telephone = telephone;
    if (address) Fields.address = address;
    if (dateNaissance) Fields.dateNaissance = dateNaissance;
    if (sexe) Fields.sexe = sexe;
    if (observation) Fields.observation = observation;
    Fields.code = nom + '.' + prenom;
    if (groupage) Fields.groupage = groupage;

    try {
      element = new Patient(Fields);
      await element.save();
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
    const elements = await Patient.find().populate('owner', ['name']);
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
    await Patient.findOneAndRemove({ _id: req.params.type_id });
    res.json({ msg: 'Element Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/:id', async (req, res) => {
  try {
    //remove type
    const element = await Patient.findOne({ code: req.params.id });
    res.json(element);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.delete('/', auth, async (req, res) => {
  try {
    //remove type
    await Patient.deleteMany({});

    res.json({ msg: 'all Elements are Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/getCount', async (req, res) => {
  try {
    const NumberPatient = await Patient.countDocuments();
    const NumberMen = await Patient.find({ sexe: 'Homme' }).countDocuments();
    const NumberWomen = await Patient.find({ sexe: 'Femme' }).countDocuments();

    res.json([NumberPatient, NumberMen, NumberWomen]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
