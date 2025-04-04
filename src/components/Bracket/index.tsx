import { FC, PropsWithChildren } from "react";
import { BracketTypes } from "../../_stores/bracketStore";
import { StyledBracket } from "./constants";

interface BracketProps {
  duration: number;
  start: number;
  stop: number;
  label: string;
  type: BracketTypes;
  isActive: boolean;
}

const Bracket: FC<PropsWithChildren<BracketProps>> = ({
  duration,
  start,
  stop,
  label,
  type,
  isActive,
}) => {
  return (
    <StyledBracket
      className={isActive ? "active" : ""}
      title={`${type} :: ${Math.floor(duration / 60 / 1000)} minutes`}
    >
      <span>{label}</span>
    </StyledBracket>
  );
};

export default Bracket;
