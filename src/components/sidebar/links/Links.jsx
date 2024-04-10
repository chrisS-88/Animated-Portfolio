import React from "react";

function Links() {
  const items = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
}

export default Links;
