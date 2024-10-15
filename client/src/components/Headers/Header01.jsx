import React from 'react';

const Header01 = () => {
  return (
    <header className="bg-gray-100 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Website</div>
        <ul className="flex space-x-4">
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="/question">Question</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="/quizz">Quiz</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header01;
