const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const PORT = process.env.PORT || 4000
const cors = require('cors')
const bodyParser = require('body-parser')

const ApiRoute = require('./routes/api');

// Global middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use(ApiRoute)
app.use((req, res) => {
    res.status(404).json({ msg: 'La ruta a la que intenta acceder no existe.' })
})

//Static Files
app.use(express.static(path.join('public')))

app.listen(PORT, () => {
    console.log('server on port ' + PORT)
}) 