import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function QuestionCard({ id, author, text }) {
  const history = useHistory();

  const onSelectQuestion = () => {
    history.push(`questions/${id}`);
  };

  return (
    <li>
      {author} asks:
      <br />
      Would you rather
      <br />
      {text}
      <br />
      <Button onClick={() => onSelectQuestion()}>View Poll</Button>
    </li>
  );
}
