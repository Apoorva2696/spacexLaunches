const express = require('express');
const connectDB = require('./config/db');
const app = express();
const path = require('path');

//connect database
connectDB();

//init middleware
app.use(express.json({ extended: false}));


// serve static assets in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    // serve index.html
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT|| 5000;

app.listen( PORT, () => console.log(`server started on PORT ${PORT}`) );


