import React from "react";

export const Tile = (props) => {
  const values = Object.values(props.object);
  console.log(values);
  return (
    <div className="tile-container">
      {values.map((element) => {
        if (typeof element === "object") {
          return <p className="tile">{JSON.stringify(element)}</p>;
        } else {
          return <p className="tile">{element}</p>;
        }
      })}
    </div>
  );
};
