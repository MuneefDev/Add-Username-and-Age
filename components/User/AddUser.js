import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/ Modal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [Error, setError] = useState();

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 && age.trim().length === 0) {
      setError({
        title: "Error",
        message: "Something went wrong!",
      });
      return;
    } else if (+age < 1) {
      setError({
        title: "Error",
        message: "Age must be greater than 0",
      });
      return;
    }

    let User = {
      username: username,
      age: age,
      id: Math.random(),
    };

    props.onAddUser(User);

    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (e) => {
    setUsername((username) => e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge((age) => e.target.value);
  };

  const closeModalHandler = () => {
    setError(null);
  };
  return (
    <>
      {Error && (
        <Modal
          title={Error.title}
          message={Error.message}
          onDismiss={closeModalHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitFormHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
