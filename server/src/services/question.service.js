const Question = require('../models/question.model')

const save = async (req) => {
    return await Question.create(req);
}

const getAll = async () => {
    return await Question.find();
}

const getById = async (id) => {
    return await Question.findById(id); 
}

const update = async (id, req) => {
    return await Question.findByIdAndUpdate(id, req);
}

const deleteQuestion = async (id) => {
    return await Question.findByIdAndDelete(id);
}

const getByAuthor = async (authorId) => {
    console.log("Querying with authorId: ", authorId);
    return await Question.find({ author: authorId });
};

module.exports = {
    save,
    getAll,
    getById,
    update,
    deleteQuestion,
    getByAuthor
}