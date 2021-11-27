import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch, connect } from "react-redux";
import { Button, FormGroup, FormCheck } from "react-bootstrap";

// Settings
import questionsActions from "../../actions/questions";

function QuestionsSinglePage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedQuestion = useSelector((state) => state.questions.selected);
  const [currentValue, setCurrentValue] = useState("optionOne");

  // Initial funcs
  useEffect(() => {
    dispatch(questionsActions.selectQuestion(id));
  }, [dispatch, id]);

  // Handlers
  const onSetCurrentValue = (val) => {
    setCurrentValue(val);
  };

  return (
    <Fragment>
      <h2>Would you rather...</h2>
      {!selectedQuestion && "Nothing founded :("}
      {selectedQuestion && (
        <Fragment>
          <FormGroup>
            <FormCheck
              onChange={(e) => onSetCurrentValue(e.target.value)}
              checked={currentValue === "optionOne"}
              name={"options"}
              value={"optionOne"}
              type={"radio"}
              label={selectedQuestion?.optionOne?.text || ""}
            />
          </FormGroup>
          <FormGroup>
            <FormCheck
              onChange={(e) => onSetCurrentValue(e.target.value)}
              checked={currentValue === "optionTwo"}
              name={"options"}
              value={"optionTwo"}
              type={"radio"}
              label={selectedQuestion?.optionTwo?.text || ""}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Fragment>
      )}
    </Fragment>
  );
}

export default connect(null, { questionsActions })(QuestionsSinglePage);
