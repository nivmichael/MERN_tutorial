const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const UserController = require('./controllers/UserController');

const PORT = process.env.PORT || 8080;

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => { 
    res.send('Hello MERN Tutorial')
})
 
app.get('/register', (req, res) => {
	res.send('Welcome to Register \n')
})

app.post('/register', UserController.store) 

try {  
    mongoose.connect(process.env.MONGO_DB_CONNECTION, {
        useNewUrlParser: true,
		useUnifiedTopology: true,
    })
    console.log('MongoDb connected successfully!')
} catch (error) {
    console.log(error)
} 

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})