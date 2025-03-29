import styled from "styled-components";

export const StyledBracket = styled.div`
  transition: background-color 180ms;

  overflow: hidden;

  display: grid;
  place-items: center;

  border-radius: 0.25rem;

  background-color: #00000033;
  border: solid #00000077 1px;

  color: #ffffffaa;

  font-weight: bold;

  height: 2rem;

  &.active {
    background-color: #000000ff;
    color: white;
  }

  span {
    font-size: 0.7rem;
  }
`;
