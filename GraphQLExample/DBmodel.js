const mongoose= require('mongoose');
const uuid =require('node-uuid');
const schema = mongoose.Schema;

const BookSchema = new schema({
    id: {type: String, default: uuid.v1},
    name: String,
    author: String,
    year: String
});

const BookDBModel = mongoose.model('Book', BookSchema);
module.exports={BookDBModel};


/*Commments
 const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];
 */
