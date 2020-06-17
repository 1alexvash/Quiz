import React, { useState, useEffect } from "react";

import { useLocation, Redirect } from "react-router-dom";

import ProgressBar from "./ProgressBar/ProgressBar";
import Timer from "./Timer/Timer";

import successSound from "../../sounds/sound_success.mp3";
import failureSound from "../../sounds/sound_failure.mp3";

import questionsData from "../../data/questions.json";

questionsData.forEach((q) => q.incorrect_answers.push(q.correct_answer));
questionsData.forEach((q) =>
  q.incorrect_answers.sort(() => 0.5 - Math.random())
);

const gameRoundTime = 15;

const Game = () => {
  const [secondsLeft, setSecondsLeft] = useState(gameRoundTime);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const location = useLocation();
  const category = location.state && location.state.category;
  const [questions, setQuestions] = useState(0);

  const nextRound = () => {
    if (currentQuestion < questions.length) {
      setSecondsLeft(gameRoundTime);
      setCurrentQuestion(currentQuestion + 1);
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
    const correctAnswer = questions[currentQuestion].correct_answer;

    if (myAnswer === correctAnswer) {
      setScore(score + 1);
      playSound(successSound);
    } else {
      playSound(failureSound);
    }

    nextRound();
  };

  const noAnswer = () => {
    playSound(failureSound);
    nextRound();
  };

  useEffect(() => {
    const questions = questionsData
      .filter((question) => question.category === category)
      .splice(0, 10);
    setQuestions(questions);
  }, [category]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsLeft <= 0.1) {
        noAnswer();
        setSecondsLeft(gameRoundTime);
      } else {
        setSecondsLeft(secondsLeft - 0.1);
      }
    }, 100);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [secondsLeft]);

  const gameActive = currentQuestion < 10;

  if (!category) {
    return <Redirect to="/quiz" />;
  }

  return (
    <div className="Game">
      {gameActive ? (
        <div className="container">
          {questions && (
            <div>
              <h2>{questions[currentQuestion].question}</h2>
              <div className="answers">
                {questions[currentQuestion].incorrect_answers.map((answer) => (
                  <button key={answer} onClick={() => checkAnswer(answer)}>
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/results",
            state: { score },
          }}
        />
      )}
      <ProgressBar currentQuestion={currentQuestion} questions={questions} />
      <Timer secondsLeft={secondsLeft} gameRoundTime={gameRoundTime} />
    </div>
  );
};

export default Game;
