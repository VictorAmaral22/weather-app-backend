const mandatoRouter = require('./mandato/routes');
const partidoRouter = require('./partido/routes');
const politicoRouter = require('./politico/routes');
const usuariosRouter = require('./usuarios/routes');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/', (req, res) => {
    return res.json({
        system: {
            nome: "Vini",
            version: '0.0.1-SNAPSHOT'
        },
    });
});

app.use('/usuarios', usuariosRouter);
app.use('/politico', politicoRouter);
app.use('/partido', partidoRouter);
app.use('/mandato', mandatoRouter);

app.listen(3000, () => console.log("Listening at 3000"));