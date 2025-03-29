import { FC } from "react";
import { StartProps } from "./constants";

const Start: FC<StartProps> = ({ onClick }) => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100lvh",
      }}
    >
      <button onClick={onClick}>START</button>
    </div>
  );
};

export default Start;
