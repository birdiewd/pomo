import styled from "styled-components";

export const StyledBracket = styled.div`
  transition: background-color 180ms;

  overflow: hidden;

  display: grid;
  place-items: center;

  border-radius: 0.25rem;

  background-color: #00000044;
  border: solid #00000066 1px;

  color: #ffffffaa;

  font-weight: bold;

  height: 1.8rem;

  &.active {
    border: solid #000000 1px;
    background-color: #000000;
    color: white;
  }

  &.active ~ * {
    border: solid #000000 1px;
    background-color: #000000aa;
    color: white;
  }

  span {
    font-size: 0.7rem;
  }
`;
