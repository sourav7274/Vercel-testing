const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    category:({
        type: [String],
        enum: ['Budget', 'Mid-Range', 'Luxury', 'Boutique', 'Resort','Other'],
        required: true
    }),
    rating:({
        type:Number,
        min:0,
        max:5,
        default:0
    }),
    reviews:[""],
    website: String,
    phoneNumber: String,
    checkInTime:{
        type:String,
        required: true
    },
    checkOutTime:{
        type:String,
        required: true
    },
    amenities:[""],
    priceRange:['$$ (11-30)', '$$$ (31-60)', '$$$$ (61+)','Other'],
    reservationsNeeded:({
        type: Boolean,
        default: false,
    }),
   isParkingAvailable:({
        type: Boolean,
        default: false,
    }),
    isWifiAvailable:({
        type: Boolean,
        default: false,
    }),
    isPoolAvailable:({
        type: Boolean,
        default: false,
    }),
   isSpaAvailable:({
        type: Boolean,
        default: false,
    }),
   isRestaurantAvailable:({
        type: Boolean,
        default: false,
    }),
    photos:[""]
    },
    {
        timestamps: true
    }
)

const Hotel = mongoose.model("Hotel",hotelSchema)

module.exports = Hotel