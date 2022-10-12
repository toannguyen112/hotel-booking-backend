const mongoose = require('mongoose');
import { env } from "process";
export default class MongoDBService {
    static async init() {
        await mongoose.connect(`${env.DB_CONN_STRING}/${env.DB_NAME}`)
            .catch(error => console.log(error));
        console.log(`Successfully connected to database MongoDB: ${env.DB_NAME}`);
    }
};


