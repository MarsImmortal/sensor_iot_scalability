const mongoose = require('mongoose');

const Sensor = require('./models/sensor');

async function connectToDatabase() {
  try {
    const dbUser = 'saksham';
    const dbPassword = 'saksham';
    const dbName = 'data';
    const connectionURL = `mongodb+srv://${dbUser}:${dbPassword}@sit314.fzej7qo.mongodb.net/${dbName}`;


    await mongoose.connect(connectionURL);
    console.log('Connected to MongoDB database');
    // Your application logic can go here
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

connectToDatabase();

const sensordata = {
   id: 0,
   name: "temperaturesensor",
   address: "221 Burwood Hwy, Burwood VIC 3125",
   time: Date.now(),
   temperature : 10
}

const low = 10;
const high = 40;
reading = Math.floor(Math.random() * (high - low) + low);
sensordata.temperature = reading;

const jsonString = JSON.stringify(sensordata);
console.log(jsonString);

const newSensor = new Sensor({
    id: sensordata.id,
    name: sensordata.name,
    address: sensordata.address,
    time: sensordata.time,
    temperature: sensordata.temperature
});
newSensor.save().then(doc => {
console.log(doc);
}).then(() => {
mongoose.connection.close();
});