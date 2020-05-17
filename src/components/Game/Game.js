import React, { useState, Fragment } from "react";

import ProgressBar from "./ProgressBar/ProgressBar";
import Timer from "./Timer/Timer";

import successSound from "../../sounds/sound_success.mp3";
import failureSound from "../../sounds/sound_failure.mp3";

import { useStoreState, useStoreActions } from "easy-peasy";

// timer to answer the question
// score of corrected answers
// picking up questions with axios
// redirecting to the results page
// timer resets after the answer

const Game = () => {
  const { responseTime } = useStoreState((state) => state);
  const { updateLeftTime } = useStoreActions((actions) => actions);

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      question: "Sum 5 + 5",
      answers: ["5", "10", "15", "20"],
      correctAnswer: "10",
    },
    {
      question: "My question",
      answers: ["answer1", "answer2", "answer3", "answer4"],
      correctAnswer: "answer1",
    },
    {
      question: "My question",
      answers: ["answer1", "answer2", "answer3", "answer4"],
      correctAnswer: "answer1",
    },
    {
      question: "My question",
      answers: ["answer1", "answer2", "answer3", "answer4"],
      correctAnswer: "answer1",
    },
    {
      question: "My question",
      answers: ["answer1", "answer2", "answer3", "answer4"],
      correctAnswer: "answer1",
    },
    {
      question: "My question",
      answers: ["answer1", "answer2", "answer3", "answer4"],
      correctAnswer: "answer1",
    },
    {
      question: "My question",
      answers: ["answer1", "answer2", "answer3", "answer4"],
      correctAnswer: "answer1",
    },
    {
      question: "My question",
      answers: ["answer1", "answer2", "answer3", "answer4"],
      correctAnswer: "answer1",
    },
    {
      question: "My question",
      answers: ["answer1", "answer2", "answer3", "answer4"],
      correctAnswer: "answer1",
    },
    {
      question: "Last question",
      answers: ["answer1", "hardanswer", "answer3", "answer4"],
      correctAnswer: "answer1",
    },
  ];

  const nextRound = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      updateLeftTime(20);
    } else {
      console.log("The game is over");
    }
  };

  const playSound = (src) => {
    var audio = new Audio(src);
    audio.play();
  };

  const checkAnswer = (answer) => {
    const myAnswer = answer;
    const { correctAnswer } = questions[currentQuestion];

    if (myAnswer === correctAnswer) {
      setScore(score + 1);
      playSound(successSound);
    } else {
      console.log("The answer is NOT correct");
      playSound(failureSound);
    }

    nextRound();
  };

  const noAnswer = () => {
    playSound(failureSound);
    nextRound();
  };

  const gameActive = currentQuestion < questions.length;

  return (
    <div className="Game">
      <div className="container">
        {gameActive ? (
          <Fragment>
            <h2>{questions[currentQuestion].question}</h2>
            <div className="answers">
              {questions[currentQuestion].answers.map((answer) => (
                <button key={answer} onClick={() => checkAnswer(answer)}>
                  {answer}
                </button>
              ))}
            </div>
          </Fragment>
        ) : (
          <h2>"The game is over"</h2>
        )}
      </div>
      <ProgressBar currentQuestion={currentQuestion} questions={questions} />
      <Timer noAnswer={noAnswer} />
    </div>
  );
};

export default Game;
