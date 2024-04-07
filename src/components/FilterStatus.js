import React, { useState } from "react";

const sampleArray = [
  {
    id: 1,
    name: "John Doe",
    status: 1,
  },
  {
    id: 2,
    name: "Jane Doe",
    status: 2,
  },
  {
    id: 3,
    name: "Adam Rocket",
    status: 2,
  },
  {
    id: 4,
    name: "Luis Rocket",
    status: 1,
  },
];

export default function FilterStatus() {
  const [message, setMessage] = useState(false);
  const groupedItems = sampleArray.reduce((arr, item) => {
    const { status } = item;
    const propName = `status-${status}`;

    if (!arr[propName]) {
      arr[propName] = [];
    }

    arr[propName].push(item);
    return arr;
  }, {});

  const filterHandler = () => {
    console.log(groupedItems);
    setMessage(true);
  };

  return (
    <div>
      <h2>Filter by status</h2>
      <button onClick={filterHandler}>Click to filter</button>
      {message && <h2>Open console!</h2>}
    </div>
  );
}
