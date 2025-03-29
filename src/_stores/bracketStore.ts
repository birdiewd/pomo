import { Store } from "@tanstack/react-store";

export enum BracketTypes {
  "setup" = "setup",
  "work" = "work",
  "break" = "break",
  "longbreak" = "longbreak",
  "wrap" = "wrap",
}

export interface BracketProps {
  start?: number;
  stop?: number;
  duration: number;
  label: string;
  type: BracketTypes;
}

interface BracketsProps {
  isTesting: boolean;
  activeBracket?: BracketProps;
  brackets: BracketProps[];
}

const isTesting = import.meta.env.PROD ? false : false;

const today = new Date();
const start = isTesting
  ? today.setHours(today.getHours(), today.getMinutes(), today.getSeconds(), 0)
  : today.setHours(7, 0, 0, 0);

const testingDuration = 1;

const bracketsStore = new Store<BracketsProps>({
  isTesting: isTesting,
  activeBracket: undefined,
  brackets: (isTesting
    ? [
        {
          duration: testingDuration * 9,
          label: "setup",
          type: BracketTypes.setup,
        },
        {
          duration: testingDuration * 4,
          label: "work",
          type: BracketTypes.work,
        },
        { duration: testingDuration, label: "break", type: BracketTypes.break },
        {
          duration: testingDuration * 4,
          label: "work",
          type: BracketTypes.work,
        },
        {
          duration: testingDuration * 6,
          label: "lunch",
          type: BracketTypes.longbreak,
        },
        {
          duration: testingDuration * 4,
          label: "work",
          type: BracketTypes.work,
        },
        { duration: testingDuration, label: "break", type: BracketTypes.break },
        {
          duration: testingDuration * 4,
          label: "work",
          type: BracketTypes.work,
        },
        {
          duration: testingDuration * 6,
          label: "lunch",
          type: BracketTypes.longbreak,
        },
        {
          duration: testingDuration * 4,
          label: "work",
          type: BracketTypes.work,
        },
        { duration: testingDuration, label: "break", type: BracketTypes.break },
        {
          duration: testingDuration * 4,
          label: "work",
          type: BracketTypes.work,
        },
        {
          duration: testingDuration * 6,
          label: "lunch",
          type: BracketTypes.longbreak,
        },
        {
          duration: testingDuration * 4,
          label: "work",
          type: BracketTypes.work,
        },
        { duration: testingDuration, label: "break", type: BracketTypes.break },
        {
          duration: testingDuration * 4,
          label: "work",
          type: BracketTypes.work,
        },
        {
          duration: testingDuration * 2,
          label: "wrap",
          type: BracketTypes.wrap,
        },
      ]
    : [
        { duration: 90, label: "setup", type: BracketTypes.setup },
        { duration: 40, label: "#1", type: BracketTypes.work },
        { duration: 10, label: "break", type: BracketTypes.break },
        { duration: 40, label: "#2", type: BracketTypes.work },
        { duration: 10, label: "break", type: BracketTypes.break },
        { duration: 40, label: "#3", type: BracketTypes.work },
        { duration: 10, label: "break", type: BracketTypes.break },
        { duration: 40, label: "#4", type: BracketTypes.work },
        { duration: 60, label: "lunch", type: BracketTypes.longbreak },
        { duration: 40, label: "#5", type: BracketTypes.work },
        { duration: 10, label: "break", type: BracketTypes.break },
        { duration: 40, label: "#6", type: BracketTypes.work },
        { duration: 10, label: "break", type: BracketTypes.break },
        { duration: 40, label: "#7", type: BracketTypes.work },
        { duration: 10, label: "break", type: BracketTypes.break },
        { duration: 40, label: "#8", type: BracketTypes.work },
        { duration: 10, label: "break", type: BracketTypes.break },
        { duration: 40, label: "#9", type: BracketTypes.work },
        { duration: 10, label: "wrap", type: BracketTypes.wrap },
      ]
  )
    .map((bracket) => {
      return {
        ...bracket,
        duration: bracket.duration * 60 * 1000,
      };
    })
    .map((bracket, index, brackets) => {
      const bracketStart =
        index === 0
          ? start
          : start +
            brackets
              .slice(0, index)
              .reduce((tot, add) => tot + add.duration, 0);
      const bracketEnd = bracketStart + bracket.duration;

      return {
        ...bracket,
        start: bracketStart,
        stop: bracketEnd,
      };
    }),
});

export const setActiveBracket = (bracket: BracketProps) => {
  bracketsStore.setState((state) => ({ ...state, activeBracket: bracket }));
};

export default bracketsStore;
