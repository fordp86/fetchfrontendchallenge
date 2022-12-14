import axios from "axios";
import { useEffect, useState } from "react";
import UserContext from "./UserContext";

export const UserProvider = (props) => {
  // Set User State As Empty
  const [user, setUser] = useState([]);

  // Set Fetch API BaseUrl
  const baseUrl = "https://frontend-take-home.fetchrewards.com/form";

  //Store all Users in State
  useEffect(() => {
    async function fetchData() {
      await getUsers();
    }
    fetchData();
  }, []);

  //get all Users
  function getUsers() {
    return axios.get(baseUrl).then((response) => setUser(response.data));
  }

  //Create a New User
  function createUser(user) {
    return axios.post(baseUrl, user).then((response) => {
      return new Promise((resolve) => resolve(response.data));
    });
  }

  return (
    <UserContext.Provider
      value={{
        user,
        getUsers,
        createUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
