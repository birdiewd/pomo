import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: 0.5rem;

  display: grid;
  gap: 1rem;
  grid-template-rows: 1fr auto;
  padding-inline-start: calc(100% - 150px);

  height: 100lvh;

  transition: background-color 180ms;

  background-color: #858585;

  &.work {
    background-color: #ffab91;
  }

  &.break {
    background-color: #7bff7b;
  }

  &.longbreak {
    background-color: #2ee0ff;
  }

  &.wrap {
    background-color: #ffe957;
  }
`;

export const StyledBracketsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;
