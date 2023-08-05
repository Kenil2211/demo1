const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({


    desc: {
        type: String,
    },
    catlog_number: [{

        number: {
            type: String
        },
        rating: [
            {
                rating_value: {
                    type: String
                },
                companies: [
                    {
                        company_id: {
                            type: Schema.Types.ObjectId,
                            ref: 'Companies'
                        },
                        price: {
                            type: Number,
                            default: 0
                        },
                        discount: {
                            type: Number,
                            default: 0
                        }
                    }
                ]
            }
        ]
    }]

})

module.exports = mongoose.model('Items', itemSchema)