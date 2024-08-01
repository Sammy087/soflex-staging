import { ShotsBlock } from ".";

export default {
  title: "Components/ShotsBlock",
  component: ShotsBlock,
  argTypes: {
    property1: {
      options: ["forgot-minimized", "defualt", "taken", "minimized", "taken-minimized", "forgot"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "forgot-minimized",
    className: {},
  },
};
