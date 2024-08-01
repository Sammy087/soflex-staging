import { HomeIndicator } from ".";

export default {
  title: "Components/HomeIndicator",
  component: HomeIndicator,
  argTypes: {
    device: {
      options: ["i-pad", "i-phone"],
      control: { type: "select" },
    },
    orientation: {
      options: ["landscape", "portrait"],
      control: { type: "select" },
    },
    mode: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    device: "i-pad",
    orientation: "landscape",
    mode: "dark",
    className: {},
  },
};
