import React from "react";
import Friend from "./Friend";

function FriendList({ friendList, onSelectFriend, selectedFriend }) {
  return (
    <ul>
      {friendList.map((friend) => (
        <Friend
          friend={friend}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

export default FriendList;
