import React, { useState, useEffect } from "react";

import ProgressBar from "./ProgressBar/ProgressBar";
import Timer from "./Timer/Timer";

import successSound from "../../sounds/sound_success.mp3";
import failureSound from "../../sounds/sound_failure.mp3";

// import { useStoreState, useStoreActions } from "easy-peasy";

import questionsData from "../../data/questions.json";

// Fix timer
// Allow picking genres
// Redirect to score pages

const questions = questionsData.splice(0, 10);
questions.forEach((q) => q.incorrect_answers.push(q.correct_answer));
questions.forEach((q) => q.incorrect_answers.sort(() => 0.5 - Math.random()));

const gameRoundTime = 20;

const Game = () => {
  const [secondsLeft, setSecondsLeft] = useState(gameRoundTime);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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
    console.log("correctAnswer:", correctAnswer);

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

  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsLeft === 0) {
        noAnswer();
        setSecondsLeft(gameRoundTime);
      } else {
        setSecondsLeft(secondsLeft - 1);
      }
      console.log("component game mounted", secondsLeft);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft, nextRound, noAnswer]);

  const gameActive = currentQuestion < questions.length;

  return (
    <div className="Game">
      {gameActive ? (
        <div className="container">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="answers">
            {questions[currentQuestion].incorrect_answers.map((answer) => (
              <button key={answer} onClick={() => checkAnswer(answer)}>
                {answer}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <h2>"The game is over"</h2>
      )}
      <ProgressBar currentQuestion={currentQuestion} questions={questions} />
      <Timer secondsLeft={secondsLeft} gameRoundTime={gameRoundTime} />
    </div>
  );
};

export default Game;
