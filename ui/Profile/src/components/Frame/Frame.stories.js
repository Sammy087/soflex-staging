import { Frame } from ".";

export default {
  title: "Components/Frame",
  component: Frame,
  argTypes: {
    show: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    show: "off",
    className: {},
  },
};
