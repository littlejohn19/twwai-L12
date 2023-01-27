import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const paramSchema = new mongoose.Schema({
    temp: {type: String},
    humidity: {type: String},
    pressure: {type: String},
    extraParam: {type: Number, required: false, default: 0},
    date: {type: String}
}, {
    collection: 'params'
});
paramSchema.plugin(uniqueValidator);

const ParamModel = mongoose.model('params', paramSchema);



export default {



    model: ParamModel
};
