const express = require('express');

const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;


const app = express();
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//config mongodb and mongodb atlas connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

//requir all routes
require('./routes/html-routes.js')(app);
require('./routes/workout-api.js')(app);




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});