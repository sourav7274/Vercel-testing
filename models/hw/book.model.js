const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publishedYear:{
        type: Number,
        required: true
    },
    genre: [{
        type: String,
        enum: ['Fiction',"Autobiography", 'Non-fiction', 'Mystery', 'Thriller', 'Science Fiction', 'Fantasy', 'Romance', 'Historical',"Business", 'Biography', 'Self-help','Other']
    }],
    language:{
        type: String,
        required: true
    },
    country:{
        type: String,
        default: "United States"
    },
    rating:{
        type: Number,
        min: 0,
        max: 10,
        default: 0,
    },
    summary: String,
    coverImageUrl: String,
    },
    {
        timestamps: true
    }
)

const Book = mongoose.model("Book",bookSchema)

module.exports = Book
