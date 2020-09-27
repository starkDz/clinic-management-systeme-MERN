const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const app = express();
const cors = require('cors');
connectDB();
app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/rendezVous', require('./routes/api/rendezVous'));
app.use('/api/patient', require('./routes/api/patient'));
app.use('/api/medicament', require('./routes/api/medicament'));
app.use('/api/radio', require('./routes/api/radio'));
app.use('/api/consultation', require('./routes/api/consultation'));
app.use('/api/analyse', require('./routes/api/analyse'));
app.use('/api/ordonnance', require('./routes/api/ordonnance'));
app.use('/api/stats', require('./routes/api/stats'));
app.use('/api/vaccin', require('./routes/api/vaccin'));
app.use('/api/wilaya', require('./routes/api/wilaya'));
app.use('/api/country', require('./routes/api/country'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Serve started on port ' + PORT));
