import React from "react";
import Button from "../src/Component/Button";

function Friend({ friend, onSelectFriend, selectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;

  return (
    <li className={!!isSelected ? "selected" : ""}>
      <img src={friend.image} alt="profile" />
      <h3>{friend.name}</h3>
      {friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      ) : friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
