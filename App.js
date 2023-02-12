import AddUser from "./components/User/AddUser";
import { useState } from "react";
import UserList from "./components/User/UserList";

function App() {
  const [user, setUser] = useState([
    { id: "u1", username: "Muneef", age: "24" },
  ]);

  const addUserHandler = (user) => {
    setUser((prevUser) => {
      return [...prevUser, user];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={user} />
    </>
  );
}

export default App;
