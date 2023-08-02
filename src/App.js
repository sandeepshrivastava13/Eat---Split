import React from "react";
import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Component/Button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = React.useState(false);
  const [selectFriend, setSelectFriend] = React.useState(null);
  const [friendList, setFriendList] = React.useState(initialFriends);

  function handleAddNewFriend(newFriend) {
    setFriendList((friendList) => [...friendList, newFriend]);
    setShowAddFriend(false);
  }

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleSelectFriend(friend) {
    setSelectFriend((curr) => (curr?.id === friend.id ? null : friend));
  }

  function calculateSplitBill(balance) {
    setFriendList((friends) =>
      friends.map((friend) =>
        friend.id === selectFriend.id
          ? { ...friend, balance: friend.balance + balance }
          : friend
      )
    );
    setSelectFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friendList={friendList}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectFriend}
        />
        {showAddFriend ? (
          <>
            <FormAddFriend onAddNewFriend={handleAddNewFriend} />
            <Button onClick={handleShowAddFriend}>Close</Button>
          </>
        ) : (
          <Button onClick={handleShowAddFriend}>Add Friend</Button>
        )}
      </div>
      {!!selectFriend && (
        <FormSplitBill
          friend={selectFriend}
          onCalculateSplitBill={calculateSplitBill}
        />
      )}
    </div>
  );
}

export default App;
