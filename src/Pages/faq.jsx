import React, { useState, useEffect } from 'react';
import { db } from '../Configurations/firebaseConfig';
import { ref, onValue, push } from "firebase/database";

export default function FAQ() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  useEffect(() => {
    const questionsRef = ref(db, 'faqQuestions');
    onValue(questionsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedQuestions = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
        setQuestions(loadedQuestions);
      }
    });
  }, []);

  const handleInputChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      push(ref(db, 'faqQuestions'), { question: newQuestion, answer: null });
      setNewQuestion('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes (FAQ)</h2>

      <div className="mb-6">
        <input
          type="text"
          value={newQuestion}
          onChange={handleInputChange}
          placeholder="Digite sua pergunta"
          className="border p-2 mr-2 w-full md:w-3/4"
        />
        <button
          onClick={handleAddQuestion}
          className="bg-blue-500 text-white p-2 rounded mt-2 md:mt-0"
        >
          Enviar Pergunta
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-4">Perguntas Realizadas</h3>
        <ul className="space-y-4">
          {questions.map((q) => (
            <li key={q.id} className="bg-white p-4 shadow rounded-md">
              <p className="text-gray-800 font-medium">{q.question}</p>
              {q.answer ? (
                <p className="text-gray-600 mt-2">{q.answer}</p>
              ) : (
                <p className="text-gray-400 mt-2">Ainda sem resposta</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
