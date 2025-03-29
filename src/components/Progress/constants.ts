import styled, { keyframes } from "styled-components";

const STRIPE_WIDTH = "50px";

const animatedStripes = keyframes`
	0% {
		transform: translateX(-${STRIPE_WIDTH});
	}
	100% {
		transform: translateX(0);
	}
`;

export const StyledProgress = styled.div`
  --stripes-size: ${STRIPE_WIDTH};

  position: relative;
  height: 100%;
  border-radius: 1rem;
  background-color: #00000099;
  overflow: hidden;

  display: grid;
  place-items: center;

  font-size: 0.8rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow:
    0 0 20px black,
    0 0 10px black,
    0 0 3px black;

  & > * {
    z-index: 1;
    text-align: center;

    :first-child {
      font-size: 6lvw;
    }

    :last-child {
      font-size: 4lvw;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    /* width: 100%; */
    width: calc(100% + var(--stripes-size));
    height: var(--percent);
    transition: height 350ms ease-in-out;

    box-shadow:
      0 0 20px black,
      0 0 10px black,
      0 0 3px black;

    background: repeating-linear-gradient(
      45deg,
      #00000099 25%,
      #000000cc 50%,
      #ffffff33 50%,
      #ffffff33 75%
    );
    background-size: var(--stripes-size) var(--stripes-size);
    animation: ${animatedStripes} 5s linear infinite;
  }
`;
