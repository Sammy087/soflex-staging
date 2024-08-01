import React from "react";
import ReactDOMClient from "react-dom/client";
import { ChangeWeightGoal } from "./screens/ChangeWeightGoal";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ChangeWeightGoal />);
