import React, { useState } from "react";
import Settings from "./Settings";

export default function App() {
  const [users, setUsers] = useState([]); // Initialize as an empty array

  return (
    <div>
      <Settings users={users} setUsers={setUsers} />
    </div>
  );
}
