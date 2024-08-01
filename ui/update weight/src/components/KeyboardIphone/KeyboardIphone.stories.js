import { KeyboardIphone } from ".";

export default {
  title: "Components/KeyboardIphone",
  component: KeyboardIphone,
  argTypes: {
    mode: {
      options: ["vibrant", "dark", "light"],
      control: { type: "select" },
    },
    type: {
      options: ["emoji", "default", "find-and-replace", "URL", "numbers-and-punctuation", "toolbar", "email"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    email2: "Hide My Email",
    email1: "name@email.com",
    showReplace: true,
    mode: "vibrant",
    type: "emoji",
    className: {},
    keysNumbericLightFrameClassName: {},
    keysNumbericLightDivClassName: {},
    keysNumbericLightDivClassNameOverride: {},
    keysNumbericLightDivClassName1: {},
    keysNumbericLightDivClassName2: {},
    keysNumbericLightDivClassName3: {},
    keysNumbericLightDivClassName4: {},
    keysNumbericLightDivClassName5: {},
    keysNumbericLightDivClassName6: {},
    keysNumbericLightDivClassName7: {},
    keysNumbericLightDivClassName8: {},
    keysNumbericLightDivClassName9: {},
    keysNumbericLightDivClassName10: {},
    keysNumbericLightDivClassName11: {},
    keysNumbericLightDivClassName12: {},
    keysNumbericLightDivClassName13: {},
    keysNumbericLightDivClassName14: {},
    keysNumbericLightDivClassName15: {},
    keysNumbericLightDivClassName16: {},
    homeIndicatorDeviceIpadClassName: {},
  },
};
