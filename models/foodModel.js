const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    name : {type: String, require},
    price : {type: Number, require},
    description :{type: String, require},
    image: {type: String, require},
    category : {type: String, require}
},{
    timestamps:true,
})

const foodModel = mongoose.model('foodModel',foodSchema,'WT_Project')

module.exports = foodModel    