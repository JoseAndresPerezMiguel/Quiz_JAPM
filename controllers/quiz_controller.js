
var models = require('../models/models.js');

<<<<<<< HEAD
// GET /quizes
exports.index = function(req, res) {
  models.Quiz.findAll().then(function(quizes) {
    res.render('quizes/index.ejs', { quizes: quizes});
  })
};

// GET /quizes/:id
exports.show = function(req, res) {
  models.Quiz.find(req.params.quizId).then(function(quiz) {
    res.render('quizes/show', { quiz: quiz});
  })
};

// GET /quizes/:id/answer
exports.answer = function(req, res) {
  models.Quiz.find(req.params.quizId).then(function(quiz) {
    if (req.query.respuesta === quiz.respuesta) {
      res.render('quizes/answer', 
                 { quiz: quiz, respuesta: 'Correcto' });
    } else {
      res.render('quizes/answer', 
                 { quiz: quiz, respuesta: 'Incorrecto'});
    }
  })
=======
// GET /quizes/question
exports.question = function(req, res) {
   models.Quiz.findAll().success(function(quiz) {
     res.render('quizes/question', { pregunta: quiz[0].pregunta});
   })
};

// GET /quizes/answer
exports.answer = function(req, res) {
    models.Quiz.findAll().success(function(quiz) {
     if (req.query.respuesta === quiz[0].respuesta) {
       res.render('quizes/answer', { respuesta: 'Correcto' });
     } else {
       res.render('quizes/answer', { respuesta: 'Incorrecto'});
     }
   })
>>>>>>> a864154454dc15974cb14a73b6bfefd5bf43b58b
};
