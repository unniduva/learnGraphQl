const {BookDBModel} =require('./DBmodel')

const resolvers = {
    Query: {
        books: ({year}) => {
            return BookDBModel.find({year:year})
        },
        book:(root,{id})=>{
            return BookDBModel.findOne({id:id})
        }
    },
    
    Mutation:{
        addBook:(root,{name,author,year})=>{
            const newBook=new BookDBModel({name:name,author:author,year:year})
            return newBook.save()
        },
        deleteBook:(root,{id})=>{
            return BookDBModel.findOneAndRemove({id: id});
        },
        updateBook:(root,{id,name})=>{
            return BookDBModel.findOneAndUpdate({id: id}, {name: name});
        }
    }
};

module.exports={resolvers}




/* 
Query: {
    authors: (root, {age}) => {
        return authorModel.find({age: age})
    },
    author: (root, {id}) => {
        return authorModel.findOne({id: id}); 
    }
},
Mutation: {
    addAuthor: (root, {name, age, books}) => {
        const author = new authorModel({age: age, name: name, books: books});
        return author.save();
    },
    deleteAuthor: (root, {id}) => {
        return authorModel.findOneAndRemove({id: id});
    },
    updateAuthor: (root, {id, name}) => {
        return authorModel.findOneAndUpdate({id: id}, {name: name});
    }
} */