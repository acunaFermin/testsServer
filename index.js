const express = require('express');
const cors = require('cors');

const app = express();

app.use ( cors() );

app.listen( 4500 , () => {
    console.log('servidor corriendo en puerto 4500')
})

app.get('/', (req, res) => {
    res.json({
        "grafica": {
            "facebook": 2700,
            "youtube": 2000,
            "whatsapp": 1400,
            "facebook-messenger": 1350,
            "instagram": 1123
        }
    })
})