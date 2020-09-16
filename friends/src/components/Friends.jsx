import React, { useState, useEffect } from "react";

// utility functions
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = (props) => {
  const [friends, setFriends] = useState([]);
  const [friend, setFriend] = useState({});

  const getFriends = () => {
    axiosWithAuth()
      .get("api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div>
      <h1>Friends</h1>

      {friends.length > 0 ? <span></span> : <p>Loading...</p>}
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <h3>{friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
