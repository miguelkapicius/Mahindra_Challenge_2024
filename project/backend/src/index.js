const express = require('express')
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
const PORT = 3000
mongoose.connect('mongodb://localhost:27017/');

const Pilot = mongoose.model('Pilot', {
     firstName: String,
     lastName: String,
     team: String,
     countryFlag: String,
     countryName: String,
     image_url: String,
     price: Number,
     position: Number,
     points: Number,
     wins: Number,    
});

// Responde quando uma requisição é feita à homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/', async(req, res) => {
    const pilot = new Pilot({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        team: req.body.team,
        countryFlag: req.body.countryFlag,
        countryName: req.body.countryName,
        image_url: req.body.image_url,
        price: req.body.price,
        position: req.body.position,
        points: req.body.points,
        wins: req.body.wins,  
    })

    await pilot.save()

    res.send(pilot)

    console.log('Data send to database!')
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})