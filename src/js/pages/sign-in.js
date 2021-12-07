import React, { Fragment, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FormGroup, Button } from "react-bootstrap";
import Select from "react-select";

// Settings
import { fetchUsers, setSelectedUser, deleteSelectedUser } from "../store/users/actions";
import { fetchQuestions } from "../store/questions/actions";
// ./Settings

// Components
import Loader from "../components/Loader";
// ./Components

const SignIn = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { prevLocation = window.location.pathname } = props;

  const isLoaded = useSelector((state) => state.users?.loading);
  const users = useSelector((state) => state.users?.data);
  const currentUser = useSelector((state) => state.users?.selected);

  // Helpers
  function arrayFromObject(arr) {
    const result = [];

    Object.entries(arr).map((el) => {
      const [, val] = el;

      result.push(val);

      return true;
    });

    return result;
  }

  // ./Helpers

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handlers
  const onUserSelect = (id) => {
    dispatch(deleteSelectedUser());
    dispatch(setSelectedUser(id));
  };
  const onLogIn = () => {
    dispatch(fetchQuestions()).then(() => {
      if (!history.length) {
        history.push("/");
      } else {
        history.push(prevLocation);
      }
    });
  };
  // ./Handlers

  return (
    <Fragment>
      {isLoaded && <Loader />}
      {!isLoaded && (
        <Fragment>
          <FormGroup className={"mb-4"}>
            <Select
              placeholder={"Select User"}
              options={arrayFromObject(users)}
              getOptionValue={(option) => `${option.id}`}
              getOptionLabel={(option) => `${option.name}`}
              onChange={(evt) => onUserSelect(evt.id)}
            />
          </FormGroup>
          <Button type={"button"} variant={"primary"} size={"lg"} disabled={!currentUser} onClick={() => onLogIn()}>
            Sign In
          </Button>
        </Fragment>
      )}
    </Fragment>
  );
};

export default connect(null, {
  fetchUsers,
  setSelectedUser,
  deleteSelectedUser,
  fetchQuestions,
})(SignIn);
