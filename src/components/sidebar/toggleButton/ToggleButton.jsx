import React from "react";

function ToggleButton({ setOpen }) {
  return <button onClick={() => setOpen((prev) => !prev)}>button</button>;
}

export default ToggleButton;
