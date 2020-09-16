import React, { useState } from "react";

//utility functions
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendForm = () => {
  const { addFriend } = useState([]);

  const initialFormValues = {
    name: "",
    age: "",
    email: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const submitFriend = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("api/friends", formValues)
      .then((res) => {
        addFriend(res.data);
      })
      .catch((err) => console.log(err));

    setFormValues(initialFormValues);
  };

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add A Friend</h2>
      <form onSubmit={submitFriend}>
        <label htmlFor="name">
          Name: &nbsp;
          <input
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor="age">
          Age: &nbsp;
          <input
            type="number"
            min="0"
            step="1"
            id="age"
            name="age"
            value={formValues.age}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor="email">
          Email: &nbsp;
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChanges}
          />
        </label>
        <button>Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
