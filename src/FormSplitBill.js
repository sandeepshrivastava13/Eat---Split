import React from "react";
import Button from "../src/Component/Button";

function FormSplitBill({ friend, onCalculateSplitBill }) {
  const [bill, setBill] = React.useState("");
  const [paidByUser, setPaidByUser] = React.useState("");
  const [whoIsPaying, setWhoIsPaying] = React.useState("user");

  const paidByFriend = !!bill ? bill - paidByUser : "";

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onCalculateSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);

    setBill("");
    setPaidByUser("");
    setWhoIsPaying("");
  }

  return (
    <form className="form-split-bill" onSubmit={handleFormSubmit}>
      <h2>SPLIT A BILL WITH {friend.name}</h2>
      <label>Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>{friend.name} Expense</label>
      <input type="text" value={paidByFriend} disabled />

      <label>Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
