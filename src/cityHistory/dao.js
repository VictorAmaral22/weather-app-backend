const { ConnectMongoDB } = require("../config/db-config")

const CityHistory = {
    // id, nome, data, hora, temperatura, sensação, humidade, clima

    async create (city_id, city_name, date, time, temperature, sensation, humidity, weather) {
        let collection = await ConnectMongoDB();
        let res = await collection.insertOne({
            city_id, city_name, date, time, temperature, sensation, humidity, weather
        })
        return res;
    },

    async findAll () {
        let collection = await ConnectMongoDB();
        let res = await collection.find({}).toArray();
        return res
    },

    async findByCity (id, filters) {
        let collection = await ConnectMongoDB();
        const searchFilters = {
            city_id: parseInt(id)
        };
        
        if(filters.date){
            searchFilters.date = filters.date
        }

        if(filters.time){
            searchFilters.time = filters.time
        }

        let res = await collection.find(searchFilters).toArray();
        return res
    },
}

module.exports = {
    CityHistory
};