import React from "react";
import Button from "../src/Component/Button";

function FormAddFriend({ onAddNewFriend }) {
  const [friendName, setFriendName] = React.useState("");
  const [imageURL, setImageURL] = React.useState("https://i.pravatar.cc/48");

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!friendName || !imageURL) return;

    const id = crypto.randomUUID();
    const newFriendData = {
      id,
      name: friendName,
      image: `${imageURL}?=${id}`,
      balance: 0,
    };
    onAddNewFriend(newFriendData);

    setFriendName("");
    setImageURL("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleFormSubmit}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />

      <label>🌆 Image URL</label>
      <input
        type="text"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
