import { useStore } from "@tanstack/react-store";
import bracketsStore from "../../_stores/bracketStore";
import Progress from "../Progress";
import { StyledBracketsWrapper, StyledWrapper } from "./constants";
import Bracket from "../Bracket";

const Pomo = () => {
  const activeBracket = useStore(bracketsStore, (state) => state.activeBracket);
  const brackets = useStore(bracketsStore, (state) => state.brackets);

  return (
    <StyledWrapper className={activeBracket?.type}>
      <Progress />

      <StyledBracketsWrapper>
        {brackets.map((bracket, index) => (
          <Bracket
            duration={bracket.duration}
            label={bracket.label}
            start={bracket.start}
            stop={bracket.stop}
            type={bracket.type}
            isActive={activeBracket === bracket}
            key={`bracket-${index}`}
          />
        ))}
      </StyledBracketsWrapper>
    </StyledWrapper>
  );
};

export default Pomo;
