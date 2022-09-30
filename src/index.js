const cityHistoryRouter = require('./cityHistory/routes');
const express = require('express');
const app = express();
var cors = require('cors')

const PORT = process.env.PORT ? process.env.PORT : 3001;

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

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));