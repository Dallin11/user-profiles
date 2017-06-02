const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const config = require('./config.js');
const profileCtrl = require('./controllers/profileCtrl.js');
const userCtrl = require('./controllers/userCtrl.js')
const app = express();


app.use(express.static('public'))
app.use(bodyParser.json());
app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false
}))
app.use(cors())

var corsOptions = {
    origin: 'http://localhost:3000'
};

app.post("/api/login", userCtrl.login)

app.get('/api/profiles', profileCtrl.getFriendsProfiles)



app.listen(3000, function () {
    console.log('Listening on port 3000')
});
