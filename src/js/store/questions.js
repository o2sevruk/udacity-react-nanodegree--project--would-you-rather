export default [
  {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sarahedo"],
      text: "have horrible short term memory",
    },
    optionTwo: {
      votes: [],
      text: "have horrible long term memory",
    },
  },
  {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "johndoe",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "become a superhero",
    },
    optionTwo: {
      votes: ["johndoe", "sarahedo"],
      text: "become a supervillain",
    },
  },
  {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sarahedo",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "be telekinetic",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be telepathic",
    },
  },
  {
    id: "loxhs1bqm25b708cmbf3g",
    author: "tylermcginnis",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "be a front-end developer",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be a back-end developer",
    },
  },
  {
    id: "vthrdm985a262al8qx3do",
    author: "tylermcginnis",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["tylermcginnis"],
      text: "find $50 yourself",
    },
    optionTwo: {
      votes: ["johndoe"],
      text: "have your best friend find $500",
    },
  },
  {
    id: "xj352vofupe1dqz9emx13r",
    author: "johndoe",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["johndoe"],
      text: "write JavaScript",
    },
    optionTwo: {
      votes: ["tylermcginnis"],
      text: "write Swift",
    },
  },
];

// export function formatQuestion({ optionOneText, optionTwoText, author }) {
//   return {
//     id: generateUID(),
//     timestamp: Date.now(),
//     author,
//     optionOne: {
//       votes: [],
//       text: optionOneText,
//     },
//     optionTwo: {
//       votes: [],
//       text: optionTwoText,
//     },
//   };
// }

// eslint-disable-next-line no-unused-vars, no-underscore-dangle
// export function _saveQuestion(question) {
//   return new Promise((res) => {
//     const authedUser = question.author;
//     const formattedQuestion = formatQuestion(question);
//
//     setTimeout(() => {
//       questions = {
//         ...questions,
//         [formattedQuestion.id]: formattedQuestion,
//       };
//
//       users = {
//         ...users,
//         [authedUser]: {
//           ...users[authedUser],
//           questions: users[authedUser].questions.concat([formattedQuestion.id]),
//         },
//       };
//
//       res(formattedQuestion);
//     }, 1000);
//   });
// }

// eslint-disable-next-line no-unused-vars, no-underscore-dangle
// export function _saveQuestionAnswer({ authedUser, qid, answer }) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       users = {
//         ...users,
//         [authedUser]: {
//           ...users[authedUser],
//           answers: {
//             ...users[authedUser].answers,
//             [qid]: answer,
//           },
//         },
//       };
//
//       questions = {
//         ...questions,
//         [qid]: {
//           ...questions[qid],
//           [answer]: {
//             ...questions[qid][answer],
//             votes: questions[qid][answer].votes.concat([authedUser]),
//           },
//         },
//       };
//
//       res();
//     }, 500);
//   });
// }
