import React, { Fragment } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Row, Col } from "react-bootstrap";

// Components
import QuestionCard from "../../components/QuestionCard";

export default function QuestionsPage() {
  const users = useSelector((state) => state.users, shallowEqual);
  const selectedUser = useSelector((state) => state.users.selected);
  const questions = useSelector((state) => state.questions, shallowEqual);

  // Helpers
  const userById = (id) => users.data.filter((el) => el.id === id)[0].name;

  return (
    <Fragment>
      Current user is {selectedUser && selectedUser.name}
      {questions.loading && "Loading..."}
      {!questions.loading && (
        <Row>
          <Col md="6">
            Unanswered questions:
            <ul>
              {questions.data
                .filter((el) => !el.optionOne.votes.length)
                .map((el) => (
                  <QuestionCard key={el.id} id={el.id} author={userById(el.author)} text={el.optionOne.text} question={el} />
                ))}
              {questions.data
                .filter((el) => !el.optionTwo.votes.length)
                .map((el) => (
                  <QuestionCard key={el.id} id={el.id} author={userById(el.author)} text={el.optionTwo.text} question={el} />
                ))}
            </ul>
          </Col>
          <Col md="6">
            Answered questions:
            <ul>
              {questions.data
                .filter((el) => el.optionOne.votes.length)
                .map((el) => (
                  <QuestionCard
                    key={el.id}
                    id={el.id}
                    author={userById(el.author)}
                    text={`${el.optionOne.text} | ${el.optionOne.votes.length}`}
                    question={el}
                  />
                ))}
              {questions.data
                .filter((el) => el.optionTwo.votes.length)
                .map((el) => (
                  <QuestionCard
                    key={el.id}
                    id={el.id}
                    author={userById(el.author)}
                    text={`${el.optionTwo.text} | ${el.optionTwo.votes.length}`}
                    question={el}
                  />
                ))}
            </ul>
          </Col>
        </Row>
      )}
    </Fragment>
  );
}
