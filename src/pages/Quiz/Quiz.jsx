import React, { useState } from "react";
import "./Quiz.css";
import Q1 from "../../assets/images/q1.png";
import Q2 from "../../assets/images/q2.png";
import Q3 from "../../assets/images/q3.png";

const Quiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0); // 현재 퀴즈 단계를 관리하는 상태
  const [correctAnswers, setCorrectAnswers] = useState(0); // 맞춘 정답의 수를 관리하는 상태

  const quizzes = [
    { id: 1, question: "첫번째 퀴즈", image: Q1, correctAnswer: "O" },
    { id: 2, question: "두번째 퀴즈", image: Q2, correctAnswer: "X" },
    { id: 3, question: "세번째 퀴즈", image: Q3, correctAnswer: "O" },
  ];

  const handleAnswer = (answer) => {
    // 정답 확인
    if (answer === quizzes[currentQuiz].correctAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    // 다음 퀴즈로 넘어가거나 결과 처리
    if (currentQuiz < quizzes.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    } else {
      // 퀴즈가 모두 끝났을 때
      if (correctAnswers + 1 === quizzes.length) {
        // 정답이 모두 맞았을 경우
        alert("축하합니다! 룰렛 페이지로 이동합니다.");
        // 여기서 룰렛 페이지로 이동하는 코드를 추가합니다.
        window.location.href = "/roulette";
        // 예: window.location.href = "/roulette";
      } else {
        // 정답이 3개 미만일 경우
        alert("3개 미만으로 맞았습니다. 다시 도전하세요!");
        resetQuiz();
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(0);
    setCorrectAnswers(0);
  };

  return (
    <div className="Quiz_container">
      <div className="Quiz_Number">{quizzes[currentQuiz].question}</div>
      <img
        className="Quiz_png"
        src={quizzes[currentQuiz].image}
        alt={quizzes[currentQuiz].question}
      />
      <div className="quiz_button">
        <button className="ox-button" onClick={() => handleAnswer("O")}>
          O
        </button>
        <button className="ox-button" onClick={() => handleAnswer("X")}>
          X
        </button>
      </div>
    </div>
  );
};

export default Quiz;
