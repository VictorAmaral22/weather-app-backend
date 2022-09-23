const cityHistoryRouter = require('./cityHistory/routes');
const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    return res.json({
        system: {
            nome: "Victor",
            version: '0.1.0'
        }
    });
});

app.use('/cityHistory', cityHistoryRouter);

app.listen(3001, () => console.log("Listening at http://localhost:3001"));