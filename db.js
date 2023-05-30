const express = require('express');
const cors = require('cors');
const keys = require('./config/keys');3
const mongoose = require('mongoose');

const processName = process.env.name  || 'default';

mongoose.set('sanitizeProjection', true);

// adder alle mongoose modeller her
require('./models/ChessOpenings');

// connect to mongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://247014:8guNOidPuWShyqp0@cluster0.7sm6kk1.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        // exit process with failure
        process.exit(1);
    }
};
connectDB();

const corsoptions = {
    origin: [true],
    optionsSuccessStatus: 200,
    credentials: true,
};

const app = express();
app.post('/buttonClick', (req, res) => {
    const db = client.db('ChessOpenings');
    const collection = db.collection('London_system');


    // Perform the necessary database operations with the collection
    res.send('Button clicked and data stored in MongoDB');
  });

  app.get('/', (req, res) => {
    res.sendFile(Sjakk_Trener + '/applikasjon.html');
  });

app.use(cors(corsoptions));
app.use(express.json({ extended: false }));
app.disable('x-powered-by');

// Define Routes
require('./controllers/ChessOpeningsController')(app);

const PORT = process.env.PORT || 27017;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;

