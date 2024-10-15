const questionService = require('../services/question.service')

const create = async (req, res) => {
    try {
        const question = await questionService.save(req.body);
        res.status(200).json(question);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const qusetions = await questionService.getAll();
        if(!qusetions) {
            return res.status(500).json({error: 'list questio null'});
        }
        res.status(200).json(qusetions);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await questionService.getById(id);
        if(!question) return res.status(400).json({error: 'question not found'})
        res.status(200).json(question);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await questionService.update(id, req.body);
        if(!question) return res.status(400).json({error: "update failed"});
        res.status(200).json({error: 'update successfully'})
    } catch(error) {
        res.status(500).json({ error: error.message });
    }  
};

const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await questionService.deleteQuestion(id);
        if(!question) return res.status(400).json({error: "delete failed"});
        res.status(200).json({error: 'delete successfully'})
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};

const getByAuthor = async (req, res) => {
    try {
        const authorId = req.params.authorId;
        console.log("Author ID: ", authorId);  // Log the authorId for debugging
        
        const questions = await questionService.getByAuthor(authorId);
        console.log("Questions: ", questions); // Log the results
        
        if (!questions || questions.length === 0) {
            return res.status(404).json({ error: "No questions found for this author" });
        }

        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    deleteQuestion,
    getByAuthor
}