const {CityHistory} = require("./dao")

class CityHistoryController {

    constructor() {}

    async create(req, res) {
        try {
            const {
                city_id, city_name, date, time, temperature, sensation, humidity, weather
            } = req.body;
            if(!city_id) {
                res
                .status(400)
                .json({msg: "Id da cidade nulo"})    
            }
            const check = await CityHistory.findByCity(city_id, { date });
            console.log("check ",check);
            if(check.length === 0){
                const response = await CityHistory.create(city_id, city_name, date, time, temperature, sensation, humidity, weather);
                console.log("response ",response)
                
                return res
                    .status(201)
                    .json({ msg: "Registro criado com sucesso"});
            } else {
                return res
                    .status(200)
                    .json({ msg: "Já existem dados para esse dia"});
            }

        } catch (err) {
            res
                .status(400)
                .json({err})
        }

    }

    async findAll(req, res) {
        try {
            const response = await CityHistory.findAll();
            return res
                .status(200)
                .json({history: response});
        } catch (err) {
            res
                .status(400)
                .json({err})
        }

    }

    async findByCity(req, res) {
        try {
            const { id } = req.params;
            const { date, time } = req.query;
            const response = await CityHistory.findByCity(id, { date, time });
            return res
                .status(200)
                .json({history: response});
        } catch (err) {
            res
                .status(400)
                .json({err})
        }

    }
}

module.exports = CityHistoryController;