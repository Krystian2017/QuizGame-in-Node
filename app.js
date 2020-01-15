const express = require("express");
const path = require("path");

const app = express();

app.listen(3000, () => {
  console.log(
    `Server is listening at http://localhost:3000 Let's play a game!`
  );
});

app.use(express.static(path.join(__dirname, "public")));

let goodAnswers = 0;
let callToAFriendUsed = false;
let questionToTheCrowdUsed = false;
let halfOnHalfUsed = false;

const questions = [
  {
    question: "Jaki jest najlepszy język programowania na świecie wg mnie?",
    answers: ["C++", "Java", "JavaScript", "Pyton"],
    correctAnswer: 2
  },
  {
    question: "Jaki jest najlepszy język programowania na świecie wg mnie?",
    answers: ["C++", "Java", "JavaScript", "Pyton"],
    correctAnswer: 1
  },
  {
    question: "Jaki jest najlepszy język programowania na świecie wg mnie?",
    answers: ["C++", "Java", "JavaScript", "Pyton"],
    correctAnswer: 4
  }
];

app.get("/question", (req, res) => {
  if (goodAnswers === questions.length) {
    res.json({
      winner: true
    });
  } else {
    const nextQuestion = questions[goodAnswers];

    const { question, answers } = nextQuestion;

    res.json({
      question,
      answers
    });
  }
});
