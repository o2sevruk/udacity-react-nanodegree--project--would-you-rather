import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

// Settings
import usersActions from "../../actions/users";

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.users, shallowEqual);

  // Initial funcs
  useEffect(() => {
    dispatch(usersActions.loadingUsers());
  }, [dispatch]);

  // Handlers
  const onUserSelect = (user) => {
    dispatch(usersActions.selectUser(users.data.find((el) => el.id === user)));
  };

  const onLogIn = () => {
    history.push("/questions");
  };

  return (
    <Fragment>
      {users.loading && "Loading..."}
      {!users.loading && (
        <Fragment>
          <Form.Select onChange={(evt) => onUserSelect(evt.target.value)}>
            <option>Select user</option>
            {users.data.map((el) => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </Form.Select>
          <Button type="button" variant="primary" size="lg" onClick={() => onLogIn()}>
            Login
          </Button>
        </Fragment>
      )}
    </Fragment>
  );
}

export default connect(null, usersActions)(LoginPage);
