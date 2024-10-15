// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Question from './pages/Question/question';
import Detail from './pages/Question/detail';
import Quizz from './pages/Quizz/index';
import Create from './pages/Question/create';
import DetailQuiz from './pages/Quizz/detail';
import CreateQuizz from './pages/Quizz/create';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/question' element={<Question />}/>
        <Route path='/question/:id' element={<Detail/>} />
        <Route path='/question/create' element={<Create/>} />
        <Route path='/quizz' element={<Quizz />}/>
        <Route path='/quizz/:id' element={<DetailQuiz />}/>
        <Route path='/quizz/add' element={<CreateQuizz />}/>
      </Routes>
    </Router>
  )
};

export default App;