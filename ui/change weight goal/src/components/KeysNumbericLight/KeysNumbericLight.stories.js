import { KeysNumbericLight } from ".";

export default {
  title: "Components/KeysNumbericLight",
  component: KeysNumbericLight,
  argTypes: {
    type: {
      options: ["two-lines", "delete", "one-line"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    line2: "DEF",
    line1: "3",
    type: "two-lines",
    typeDeleteClassName: {},
    frameClassName: {},
    divClassName: {},
    divClassNameOverride: {},
  },
};
