import React, { useState } from 'react';
import "./testingc.css";

export default function Testing() {
	const questions = [
    {
      questionText:
        "What is the other name used for computer programs and information? ",
      answerOptions: [
        { answerText: "Output", isCorrect: false },
        { answerText: "Process", isCorrect: false },
        { answerText: "Software", isCorrect: true },
        { answerText: "CPU", isCorrect: false },
      ],
    },
    {
      questionText:
        "The part of a computer that allows the user to view information on a screen is called:",
      answerOptions: [
        { answerText: "Mouse", isCorrect: false },
        { answerText: "RAM", isCorrect: false },
        { answerText: "Motherboard", isCorrect: false },
        { answerText: "Monitor", isCorrect: true },
      ],
    },
    {
      questionText:
        "Name the part that sends signals to other parts of the computer and tells them what to do.?",
      answerOptions: [
        { answerText: "CPU", isCorrect: false },
        { answerText: "Motherboard", isCorrect: true },
        { answerText: "Icon", isCorrect: false },
        { answerText: "Hard drive", isCorrect: false },
      ],
    },
    {
      questionText:
        "This is a flat input device that usually sits in front of the monitor.",
      answerOptions: [
        { answerText: "Keyboard", isCorrect: true },
        { answerText: "Tower", isCorrect: false },
        { answerText: "Mouse", isCorrect: false },
        { answerText: "Laptop", isCorrect: false },
      ],
    },
    {
      questionText:
        "This memory is for short-term storage and is lost when the computer is turned off. ",
      answerOptions: [
        { answerText: "Icon", isCorrect: false },
        { answerText: "CPU", isCorrect: false },
        { answerText: "Hard drive", isCorrect: false },
        { answerText: "RAM", isCorrect: true },
      ],
    },
    {
      questionText: " What is the PH of H2O?",
      answerOptions: [
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
        { answerText: "8", isCorrect: false },
        { answerText: "9", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following gas is reduced in the reduction process?",
      answerOptions: [
        { answerText: "Oxygen", isCorrect: false },
        { answerText: "Helium", isCorrect: false },
        { answerText: "Carbon", isCorrect: false },
        { answerText: "Hydrogen", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which of the following compound is mainly used in hand sanitizer?",
      answerOptions: [
        { answerText: "Aldehyde", isCorrect: false },
        { answerText: "Acetic acid", isCorrect: false },
        { answerText: "Alcohol", isCorrect: true },
        { answerText: "Ketone", isCorrect: false },
      ],
    },
    {
      questionText: "What is the S.I unit of frequency?",
      answerOptions: [
        { answerText: "Diopter", isCorrect: false },
        { answerText: "Second", isCorrect: false },
        { answerText: "Hertz", isCorrect: true },
        { answerText: "Meter", isCorrect: false },
      ],
    },
    {
      questionText: "Acid turns blue litmus paper into which color?",
      answerOptions: [
        { answerText: "Black", isCorrect: false },
        { answerText: "Blue", isCorrect: false },
        { answerText: "Red", isCorrect: true },
        { answerText: "Orange", isCorrect: false },
      ],
    },
  ];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
    <body className="xyz">
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length} <br />
            Thankyou for giving the test. <br/>
			Our team will analyse the test and
            give you 5 best career options.
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  className="buttonp"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </body>
  );
}
