const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors');
connectDB();
app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/rendezVous', require('./routes/api/rendezVous'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Serve started on port ' + PORT));
